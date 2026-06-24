require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

// Create Stripe Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { priceId, userId, userEmail } = req.body;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/?payment=cancelled`,
      customer_email: userEmail,
      metadata: {
        userId: userId,
      },
      subscription_data: {
        metadata: {
          userId: userId,
        },
      },
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verify Checkout Session
app.get('/verify-session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      // Update subscription status in Supabase
      const userId = session.metadata?.userId;

      if (userId && supabase) {
        await supabase
          .from('subscriptions')
          .upsert({
            user_id: userId,
            stripe_customer_id: session.customer,
            stripe_subscription_id: session.subscription,
            tier: 'premium',
            status: 'active',
            current_period_end: new Date(session.expires_at * 1000).toISOString(),
          }, {
            onConflict: 'user_id',
          });
      }

      res.json({
        status: 'paid',
        customerId: session.customer,
        subscriptionId: session.subscription,
      });
    } else {
      res.json({ status: session.payment_status });
    }
  } catch (error) {
    console.error('Error verifying session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create Customer Portal Session
app.post('/create-portal-session', async (req, res) => {
  try {
    const { customerId } = req.body;

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.FRONTEND_URL || 'http://localhost:5173',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating portal session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook handler
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      await handleSubscriptionUpdate(subscription);
      break;
    case 'customer.subscription.deleted':
      const deletedSubscription = event.data.object;
      await handleSubscriptionDeleted(deletedSubscription);
      break;
    case 'invoice.payment_failed':
      const failedInvoice = event.data.object;
      await handlePaymentFailed(failedInvoice);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
});

async function handleSubscriptionUpdate(subscription) {
  if (!supabase) return;

  const userId = subscription.metadata?.userId || subscription.metadata?.userId;

  if (userId) {
    await supabase
      .from('subscriptions')
      .upsert({
        user_id: userId,
        stripe_subscription_id: subscription.id,
        tier: subscription.status === 'active' ? 'premium' : 'free',
        status: subscription.status,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id',
      });
  }
}

async function handleSubscriptionDeleted(subscription) {
  if (!supabase) return;

  const userId = subscription.metadata?.userId;

  if (userId) {
    await supabase
      .from('subscriptions')
      .update({
        tier: 'free',
        status: 'cancelled',
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId);
  }
}

async function handlePaymentFailed(invoice) {
  if (!supabase) return;

  const customerId = invoice.customer;

  // Find user by customer ID and update status
  const { data } = await supabase
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (data) {
    await supabase
      .from('subscriptions')
      .update({ status: 'past_due' })
      .eq('user_id', data.user_id);
  }
}

// Get subscription status
app.get('/subscription/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    if (!supabase) {
      return res.json({ status: 'not_configured' });
    }

    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    

    
    res.json(data || { status: 'inactive', tier: 'free' });
    }
      
} catch (error) {
    console.error('Error fetching subscription:', error);
    res.status(500).json({ error: error.message });
  }
});

// Cancel subscription
app.post('/cancel-subscription', async (req, res) => {
  try {
    const { subscriptionId } = req.body;

    if (!subscriptionId) {
      return res.status(400).json({ error: 'Subscription ID required' });
    }

    const subscription = await stripe.subscriptions.cancel(subscriptionId);

    res.json({ success: true, subscription });
  } catch (error) {
    console.error('Error cancelling subscription:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, '0.0.0',  () => {
  console.log(`Psych-Wise Server running on port ${PORT}`);
  console.log(`Stripe mode: ${process.env.STRIPE_SECRET_KEY ? 'Configured' : 'Not configured'}`);
  console.log(`Supabase mode: ${process.env.SUPABASE_URL ? 'Configured' : 'Not configured'}`);
});
