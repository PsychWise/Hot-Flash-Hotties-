const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Test Route to prove the app is working
app.get('/', (req, res) => {
  res.send('<h1>🎉 Success! Psych-Wise Backend is Live and Running Perfectly!</h1>');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Psych-Wise Server running on port ${PORT}`);
  console.log(`Stripe mode: ${process.env.STRIPE_SECRET_KEY ? 'Configured' : 'Not configured'}`);
  console.log(`Supabase mode: ${process.env.SUPABASE_URL ? 'Configured' : 'Not configured'}`);
});
