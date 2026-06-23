(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function Df(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yc={exports:{}},Vi={},Vc={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function ty(){if(dm)return Be;dm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function b(N){return N===null||typeof N!="object"?null:(N=w&&N[w]||N["@@iterator"],typeof N=="function"?N:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function j(N,B,fe){this.props=N,this.context=B,this.refs=T,this.updater=fe||v}j.prototype.isReactComponent={},j.prototype.setState=function(N,B){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,B,"setState")},j.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function W(){}W.prototype=j.prototype;function L(N,B,fe){this.props=N,this.context=B,this.refs=T,this.updater=fe||v}var H=L.prototype=new W;H.constructor=L,S(H,j.prototype),H.isPureReactComponent=!0;var q=Array.isArray,K=Object.prototype.hasOwnProperty,R={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function me(N,B,fe){var I,ce={},ye=null,P=null;if(B!=null)for(I in B.ref!==void 0&&(P=B.ref),B.key!==void 0&&(ye=""+B.key),B)K.call(B,I)&&!F.hasOwnProperty(I)&&(ce[I]=B[I]);var D=arguments.length-2;if(D===1)ce.children=fe;else if(1<D){for(var re=Array(D),M=0;M<D;M++)re[M]=arguments[M+2];ce.children=re}if(N&&N.defaultProps)for(I in D=N.defaultProps,D)ce[I]===void 0&&(ce[I]=D[I]);return{$$typeof:r,type:N,key:ye,ref:P,props:ce,_owner:R.current}}function ke(N,B){return{$$typeof:r,type:N.type,key:B,ref:N.ref,props:N.props,_owner:N._owner}}function Pe(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function X(N){var B={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(fe){return B[fe]})}var V=/\/+/g;function ne(N,B){return typeof N=="object"&&N!==null&&N.key!=null?X(""+N.key):B.toString(36)}function Y(N,B,fe,I,ce){var ye=typeof N;(ye==="undefined"||ye==="boolean")&&(N=null);var P=!1;if(N===null)P=!0;else switch(ye){case"string":case"number":P=!0;break;case"object":switch(N.$$typeof){case r:case e:P=!0}}if(P)return P=N,ce=ce(P),N=I===""?"."+ne(P,0):I,q(ce)?(fe="",N!=null&&(fe=N.replace(V,"$&/")+"/"),Y(ce,B,fe,"",function(M){return M})):ce!=null&&(Pe(ce)&&(ce=ke(ce,fe+(!ce.key||P&&P.key===ce.key?"":(""+ce.key).replace(V,"$&/")+"/")+N)),B.push(ce)),1;if(P=0,I=I===""?".":I+":",q(N))for(var D=0;D<N.length;D++){ye=N[D];var re=I+ne(ye,D);P+=Y(ye,B,fe,re,ce)}else if(re=b(N),typeof re=="function")for(N=re.call(N),D=0;!(ye=N.next()).done;)ye=ye.value,re=I+ne(ye,D++),P+=Y(ye,B,fe,re,ce);else if(ye==="object")throw B=String(N),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return P}function ue(N,B,fe){if(N==null)return N;var I=[],ce=0;return Y(N,I,"","",function(ye){return B.call(fe,ye,ce++)}),I}function we(N){if(N._status===-1){var B=N._result;B=B(),B.then(function(fe){(N._status===0||N._status===-1)&&(N._status=1,N._result=fe)},function(fe){(N._status===0||N._status===-1)&&(N._status=2,N._result=fe)}),N._status===-1&&(N._status=0,N._result=B)}if(N._status===1)return N._result.default;throw N._result}var xe={current:null},Q={transition:null},G={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Q,ReactCurrentOwner:R};function J(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:ue,forEach:function(N,B,fe){ue(N,function(){B.apply(this,arguments)},fe)},count:function(N){var B=0;return ue(N,function(){B++}),B},toArray:function(N){return ue(N,function(B){return B})||[]},only:function(N){if(!Pe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Be.Component=j,Be.Fragment=n,Be.Profiler=l,Be.PureComponent=L,Be.StrictMode=o,Be.Suspense=p,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Be.act=J,Be.cloneElement=function(N,B,fe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var I=S({},N.props),ce=N.key,ye=N.ref,P=N._owner;if(B!=null){if(B.ref!==void 0&&(ye=B.ref,P=R.current),B.key!==void 0&&(ce=""+B.key),N.type&&N.type.defaultProps)var D=N.type.defaultProps;for(re in B)K.call(B,re)&&!F.hasOwnProperty(re)&&(I[re]=B[re]===void 0&&D!==void 0?D[re]:B[re])}var re=arguments.length-2;if(re===1)I.children=fe;else if(1<re){D=Array(re);for(var M=0;M<re;M++)D[M]=arguments[M+2];I.children=D}return{$$typeof:r,type:N.type,key:ce,ref:ye,props:I,_owner:P}},Be.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:c,_context:N},N.Consumer=N},Be.createElement=me,Be.createFactory=function(N){var B=me.bind(null,N);return B.type=N,B},Be.createRef=function(){return{current:null}},Be.forwardRef=function(N){return{$$typeof:m,render:N}},Be.isValidElement=Pe,Be.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:we}},Be.memo=function(N,B){return{$$typeof:g,type:N,compare:B===void 0?null:B}},Be.startTransition=function(N){var B=Q.transition;Q.transition={};try{N()}finally{Q.transition=B}},Be.unstable_act=J,Be.useCallback=function(N,B){return xe.current.useCallback(N,B)},Be.useContext=function(N){return xe.current.useContext(N)},Be.useDebugValue=function(){},Be.useDeferredValue=function(N){return xe.current.useDeferredValue(N)},Be.useEffect=function(N,B){return xe.current.useEffect(N,B)},Be.useId=function(){return xe.current.useId()},Be.useImperativeHandle=function(N,B,fe){return xe.current.useImperativeHandle(N,B,fe)},Be.useInsertionEffect=function(N,B){return xe.current.useInsertionEffect(N,B)},Be.useLayoutEffect=function(N,B){return xe.current.useLayoutEffect(N,B)},Be.useMemo=function(N,B){return xe.current.useMemo(N,B)},Be.useReducer=function(N,B,fe){return xe.current.useReducer(N,B,fe)},Be.useRef=function(N){return xe.current.useRef(N)},Be.useState=function(N){return xe.current.useState(N)},Be.useSyncExternalStore=function(N,B,fe){return xe.current.useSyncExternalStore(N,B,fe)},Be.useTransition=function(){return xe.current.useTransition()},Be.version="18.3.1",Be}var hm;function _u(){return hm||(hm=1,Vc.exports=ty()),Vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function sy(){if(mm)return Vi;mm=1;var r=_u(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(m,p,g){var x,w={},b=null,v=null;g!==void 0&&(b=""+g),p.key!==void 0&&(b=""+p.key),p.ref!==void 0&&(v=p.ref);for(x in p)o.call(p,x)&&!c.hasOwnProperty(x)&&(w[x]=p[x]);if(m&&m.defaultProps)for(x in p=m.defaultProps,p)w[x]===void 0&&(w[x]=p[x]);return{$$typeof:e,type:m,key:b,ref:v,props:w,_owner:l.current}}return Vi.Fragment=n,Vi.jsx=d,Vi.jsxs=d,Vi}var fm;function ry(){return fm||(fm=1,Yc.exports=sy()),Yc.exports}var s=ry(),A=_u();const de=Df(A);var ja={},Gc={exports:{}},is={},Kc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function ny(){return pm||(pm=1,function(r){function e(Q,G){var J=Q.length;Q.push(G);e:for(;0<J;){var N=J-1>>>1,B=Q[N];if(0<l(B,G))Q[N]=G,Q[J]=B,J=N;else break e}}function n(Q){return Q.length===0?null:Q[0]}function o(Q){if(Q.length===0)return null;var G=Q[0],J=Q.pop();if(J!==G){Q[0]=J;e:for(var N=0,B=Q.length,fe=B>>>1;N<fe;){var I=2*(N+1)-1,ce=Q[I],ye=I+1,P=Q[ye];if(0>l(ce,J))ye<B&&0>l(P,ce)?(Q[N]=P,Q[ye]=J,N=ye):(Q[N]=ce,Q[I]=J,N=I);else if(ye<B&&0>l(P,J))Q[N]=P,Q[ye]=J,N=ye;else break e}}return G}function l(Q,G){var J=Q.sortIndex-G.sortIndex;return J!==0?J:Q.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();r.unstable_now=function(){return d.now()-m}}var p=[],g=[],x=1,w=null,b=3,v=!1,S=!1,T=!1,j=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(Q){for(var G=n(g);G!==null;){if(G.callback===null)o(g);else if(G.startTime<=Q)o(g),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(g)}}function q(Q){if(T=!1,H(Q),!S)if(n(p)!==null)S=!0,we(K);else{var G=n(g);G!==null&&xe(q,G.startTime-Q)}}function K(Q,G){S=!1,T&&(T=!1,W(me),me=-1),v=!0;var J=b;try{for(H(G),w=n(p);w!==null&&(!(w.expirationTime>G)||Q&&!X());){var N=w.callback;if(typeof N=="function"){w.callback=null,b=w.priorityLevel;var B=N(w.expirationTime<=G);G=r.unstable_now(),typeof B=="function"?w.callback=B:w===n(p)&&o(p),H(G)}else o(p);w=n(p)}if(w!==null)var fe=!0;else{var I=n(g);I!==null&&xe(q,I.startTime-G),fe=!1}return fe}finally{w=null,b=J,v=!1}}var R=!1,F=null,me=-1,ke=5,Pe=-1;function X(){return!(r.unstable_now()-Pe<ke)}function V(){if(F!==null){var Q=r.unstable_now();Pe=Q;var G=!0;try{G=F(!0,Q)}finally{G?ne():(R=!1,F=null)}}else R=!1}var ne;if(typeof L=="function")ne=function(){L(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ue=Y.port2;Y.port1.onmessage=V,ne=function(){ue.postMessage(null)}}else ne=function(){j(V,0)};function we(Q){F=Q,R||(R=!0,ne())}function xe(Q,G){me=j(function(){Q(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_continueExecution=function(){S||v||(S=!0,we(K))},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(Q){switch(b){case 1:case 2:case 3:var G=3;break;default:G=b}var J=b;b=G;try{return Q()}finally{b=J}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Q,G){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var J=b;b=Q;try{return G()}finally{b=J}},r.unstable_scheduleCallback=function(Q,G,J){var N=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?N+J:N):J=N,Q){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=J+B,Q={id:x++,callback:G,priorityLevel:Q,startTime:J,expirationTime:B,sortIndex:-1},J>N?(Q.sortIndex=J,e(g,Q),n(p)===null&&Q===n(g)&&(T?(W(me),me=-1):T=!0,xe(q,J-N))):(Q.sortIndex=B,e(p,Q),S||v||(S=!0,we(K))),Q},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(Q){var G=b;return function(){var J=b;b=G;try{return Q.apply(this,arguments)}finally{b=J}}}}(Jc)),Jc}var gm;function iy(){return gm||(gm=1,Kc.exports=ny()),Kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function oy(){if(ym)return is;ym=1;var r=_u(),e=iy();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)o.add(i[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function b(t){return p.call(w,t)?!0:p.call(x,t)?!1:g.test(t)?w[t]=!0:(x[t]=!0,!1)}function v(t,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S(t,i,a,u){if(i===null||typeof i>"u"||v(t,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,u,h,f,y){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=f,this.removeEmptyString=y}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){j[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];j[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){j[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){j[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){j[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){j[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){j[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){j[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){j[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(W,L);j[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(W,L);j[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(W,L);j[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){j[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),j.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){j[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function H(t,i,a,u){var h=j.hasOwnProperty(i)?j[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,h,u)&&(a=null),u||h===null?b(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):h.mustUseProperty?t[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?t.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?t.setAttributeNS(u,i,a):t.setAttribute(i,a))))}var q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),R=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),X=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),Q=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,N;function B(t){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var fe=!1;function I(t,i){if(!t||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var u=U}Reflect.construct(t,[],i)}else{try{i.call()}catch(U){u=U}t.call(i.prototype)}else{try{throw Error()}catch(U){u=U}t()}}catch(U){if(U&&u&&typeof U.stack=="string"){for(var h=U.stack.split(`
`),f=u.stack.split(`
`),y=h.length-1,k=f.length-1;1<=y&&0<=k&&h[y]!==f[k];)k--;for(;1<=y&&0<=k;y--,k--)if(h[y]!==f[k]){if(y!==1||k!==1)do if(y--,k--,0>k||h[y]!==f[k]){var C=`
`+h[y].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=y&&0<=k);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?B(t):""}function ce(t){switch(t.tag){case 5:return B(t.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return t=I(t.type,!1),t;case 11:return t=I(t.type.render,!1),t;case 1:return t=I(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case R:return"Portal";case ke:return"Profiler";case me:return"StrictMode";case ne:return"Suspense";case Y:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X:return(t.displayName||"Context")+".Consumer";case Pe:return(t._context.displayName||"Context")+".Provider";case V:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case we:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function P(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function D(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function M(t){var i=re(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,f=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(y){u=""+y,f.call(this,y)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(y){u=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function se(t){t._valueTracker||(t._valueTracker=M(t))}function ge(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return t&&(u=re(t)?t.checked?"true":"false":t.value),t=u,t!==a?(i.setValue(t),!0):!1}function je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $e(t,i){var a=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Ge(t,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=D(i.value!=null?i.value:a),t._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ue(t,i){i=i.checked,i!=null&&H(t,"checked",i,!1)}function ct(t,i){Ue(t,i);var a=D(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Vt(t,i.type,D(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function _t(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Vt(t,i,a){(i!=="number"||je(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Pt=Array.isArray;function rt(t,i,a,u){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&u&&(t[a].defaultSelected=!0)}else{for(a=""+D(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Rt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function At(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Pt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:D(a)}}function Ps(t,i){var a=D(i.value),u=D(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),u!=null&&(t.defaultValue=""+u)}function vs(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function E(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?E(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xe,De=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return t(i,a,u,h)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Xe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Oe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(cs).forEach(function(t){kn.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),cs[i]=cs[t]})});function us(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||cs.hasOwnProperty(t)&&cs[t]?(""+i).trim():i+"px"}function Gt(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=us(a,i[a],u);a==="float"&&(a="cssFloat"),u?t.setProperty(a,h):t[a]=h}}var jn=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kt(t,i){if(i){if(jn[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Vr(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function Fs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Us=null,ws=null;function ds(t){if(t=Ai(t)){if(typeof xr!="function")throw Error(n(280));var i=t.stateNode;i&&(i=zo(i),xr(t.stateNode,t.type,i))}}function Sn(t){Us?ws?ws.push(t):ws=[t]:Us=t}function Ee(){if(Us){var t=Us,i=ws;if(ws=Us=null,ds(t),i)for(t=0;t<i.length;t++)ds(i[t])}}function He(t,i){return t(i)}function Ke(){}var vt=!1;function Mt(t,i,a){if(vt)return t(i,a);vt=!0;try{return He(t,i,a)}finally{vt=!1,(Us!==null||ws!==null)&&(Ke(),Ee())}}function Wt(t,i){var a=t.stateNode;if(a===null)return null;var u=zo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Xt=!1;if(m)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){Xt=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{Xt=!1}function hs(t,i,a,u,h,f,y,k,C){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(ee){this.onError(ee)}}var vr=!1,wr=null,ir=!1,Kr=null,Nn={onError:function(t){vr=!0,wr=t}};function qs(t,i,a,u,h,f,y,k,C){vr=!1,wr=null,hs.apply(Nn,arguments)}function al(t,i,a,u,h,f,y,k,C){if(qs.apply(this,arguments),vr){if(vr){var U=wr;vr=!1,wr=null}else throw Error(n(198));ir||(ir=!0,Kr=U)}}function Ys(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function hi(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Jr(t){if(Ys(t)!==t)throw Error(n(188))}function ll(t){var i=t.alternate;if(!i){if(i=Ys(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,u=i;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return Jr(h),t;if(f===u)return Jr(h),i;f=f.sibling}throw Error(n(188))}if(a.return!==u.return)a=h,u=f;else{for(var y=!1,k=h.child;k;){if(k===a){y=!0,a=h,u=f;break}if(k===u){y=!0,u=h,a=f;break}k=k.sibling}if(!y){for(k=f.child;k;){if(k===a){y=!0,a=f,u=h;break}if(k===u){y=!0,u=f,a=h;break}k=k.sibling}if(!y)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function po(t){return t=ll(t),t!==null?go(t):null}function go(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=go(t);if(i!==null)return i;t=t.sibling}return null}var yo=e.unstable_scheduleCallback,xo=e.unstable_cancelCallback,cl=e.unstable_shouldYield,ul=e.unstable_requestPaint,it=e.unstable_now,dl=e.unstable_getCurrentPriorityLevel,Tn=e.unstable_ImmediatePriority,mi=e.unstable_UserBlockingPriority,Cn=e.unstable_NormalPriority,hl=e.unstable_LowPriority,z=e.unstable_IdlePriority,Me=null,qe=null;function bs(t){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Me,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:vo,Zt=Math.log,Qr=Math.LN2;function vo(t){return t>>>=0,t===0?32:31-(Zt(t)/Qr|0)|0}var wo=64,bo=4194304;function fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ko(t,i){var a=t.pendingLanes;if(a===0)return 0;var u=0,h=t.suspendedLanes,f=t.pingedLanes,y=a&268435455;if(y!==0){var k=y&~h;k!==0?u=fi(k):(f&=y,f!==0&&(u=fi(f)))}else y=a&~h,y!==0?u=fi(y):f!==0&&(u=fi(f));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,f=i&-i,h>=f||h===16&&(f&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)a=31-ut(i),h=1<<a,u|=t[a],i&=~h;return u}function wp(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(t,i){for(var a=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes;0<f;){var y=31-ut(f),k=1<<y,C=h[y];C===-1?((k&a)===0||(k&u)!==0)&&(h[y]=wp(k,i)):C<=i&&(t.expiredLanes|=k),f&=~k}}function ml(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bu(){var t=wo;return wo<<=1,(wo&4194240)===0&&(wo=64),t}function fl(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function pi(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ut(i),t[i]=a}function kp(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<a;){var h=31-ut(a),f=1<<h;i[h]=0,u[h]=-1,t[h]=-1,a&=~f}}function pl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var u=31-ut(a),h=1<<u;h&i|t[u]&i&&(t[u]|=i),a&=~h}}var Je=0;function Fu(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Uu,gl,qu,Yu,Vu,yl=!1,jo=[],br=null,kr=null,jr=null,gi=new Map,yi=new Map,Sr=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gu(t,i){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":gi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(i.pointerId)}}function xi(t,i,a,u,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:f,targetContainers:[h]},i!==null&&(i=Ai(i),i!==null&&gl(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function Sp(t,i,a,u,h){switch(i){case"focusin":return br=xi(br,t,i,a,u,h),!0;case"dragenter":return kr=xi(kr,t,i,a,u,h),!0;case"mouseover":return jr=xi(jr,t,i,a,u,h),!0;case"pointerover":var f=h.pointerId;return gi.set(f,xi(gi.get(f)||null,t,i,a,u,h)),!0;case"gotpointercapture":return f=h.pointerId,yi.set(f,xi(yi.get(f)||null,t,i,a,u,h)),!0}return!1}function Ku(t){var i=Xr(t.target);if(i!==null){var a=Ys(i);if(a!==null){if(i=a.tag,i===13){if(i=hi(a),i!==null){t.blockedOn=i,Vu(t.priority,function(){qu(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function So(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=vl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var u=new a.constructor(a.type,a);Gr=u,a.target.dispatchEvent(u),Gr=null}else return i=Ai(a),i!==null&&gl(i),t.blockedOn=a,!1;i.shift()}return!0}function Ju(t,i,a){So(t)&&a.delete(i)}function Np(){yl=!1,br!==null&&So(br)&&(br=null),kr!==null&&So(kr)&&(kr=null),jr!==null&&So(jr)&&(jr=null),gi.forEach(Ju),yi.forEach(Ju)}function vi(t,i){t.blockedOn===i&&(t.blockedOn=null,yl||(yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Np)))}function wi(t){function i(h){return vi(h,t)}if(0<jo.length){vi(jo[0],t);for(var a=1;a<jo.length;a++){var u=jo[a];u.blockedOn===t&&(u.blockedOn=null)}}for(br!==null&&vi(br,t),kr!==null&&vi(kr,t),jr!==null&&vi(jr,t),gi.forEach(i),yi.forEach(i),a=0;a<Sr.length;a++)u=Sr[a],u.blockedOn===t&&(u.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)Ku(a),a.blockedOn===null&&Sr.shift()}var En=q.ReactCurrentBatchConfig,No=!0;function Tp(t,i,a,u){var h=Je,f=En.transition;En.transition=null;try{Je=1,xl(t,i,a,u)}finally{Je=h,En.transition=f}}function Cp(t,i,a,u){var h=Je,f=En.transition;En.transition=null;try{Je=4,xl(t,i,a,u)}finally{Je=h,En.transition=f}}function xl(t,i,a,u){if(No){var h=vl(t,i,a,u);if(h===null)Ol(t,i,u,To,a),Gu(t,u);else if(Sp(h,t,i,a,u))u.stopPropagation();else if(Gu(t,u),i&4&&-1<jp.indexOf(t)){for(;h!==null;){var f=Ai(h);if(f!==null&&Uu(f),f=vl(t,i,a,u),f===null&&Ol(t,i,u,To,a),f===h)break;h=f}h!==null&&u.stopPropagation()}else Ol(t,i,u,null,a)}}var To=null;function vl(t,i,a,u){if(To=null,t=Fs(u),t=Xr(t),t!==null)if(i=Ys(t),i===null)t=null;else if(a=i.tag,a===13){if(t=hi(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return To=t,null}function Qu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dl()){case Tn:return 1;case mi:return 4;case Cn:case hl:return 16;case z:return 536870912;default:return 16}default:return 16}}var Nr=null,wl=null,Co=null;function Xu(){if(Co)return Co;var t,i=wl,a=i.length,u,h="value"in Nr?Nr.value:Nr.textContent,f=h.length;for(t=0;t<a&&i[t]===h[t];t++);var y=a-t;for(u=1;u<=y&&i[a-u]===h[f-u];u++);return Co=h.slice(t,1<u?1-u:void 0)}function Eo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function Zu(){return!1}function ms(t){function i(a,u,h,f,y){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(f):f[k]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?_o:Zu,this.isPropagationStopped=Zu,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=ms(_n),bi=J({},_n,{view:0,detail:0}),Ep=ms(bi),kl,jl,ki,Po=J({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(kl=t.screenX-ki.screenX,jl=t.screenY-ki.screenY):jl=kl=0,ki=t),kl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),ed=ms(Po),_p=J({},Po,{dataTransfer:0}),Pp=ms(_p),Rp=J({},bi,{relatedTarget:0}),Sl=ms(Rp),Ap=J({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),Mp=ms(Ap),Ip=J({},_n,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dp=ms(Ip),Op=J({},_n,{data:0}),td=ms(Op),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $p(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Wp[t])?!!i[t]:!1}function Nl(){return $p}var Hp=J({},bi,{key:function(t){if(t.key){var i=Lp[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bp=ms(Hp),Fp=J({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=ms(Fp),Up=J({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),qp=ms(Up),Yp=J({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=ms(Yp),Gp=J({},Po,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=ms(Gp),Jp=[9,13,27,32],Tl=m&&"CompositionEvent"in window,ji=null;m&&"documentMode"in document&&(ji=document.documentMode);var Qp=m&&"TextEvent"in window&&!ji,rd=m&&(!Tl||ji&&8<ji&&11>=ji),nd=" ",id=!1;function od(t,i){switch(t){case"keyup":return Jp.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pn=!1;function Xp(t,i){switch(t){case"compositionend":return ad(i);case"keypress":return i.which!==32?null:(id=!0,nd);case"textInput":return t=i.data,t===nd&&id?null:t;default:return null}}function Zp(t,i){if(Pn)return t==="compositionend"||!Tl&&od(t,i)?(t=Xu(),Co=wl=Nr=null,Pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rd&&i.locale!=="ko"?null:i.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!eg[t.type]:i==="textarea"}function cd(t,i,a,u){Sn(u),i=Do(i,"onChange"),0<i.length&&(a=new bl("onChange","change",null,a,u),t.push({event:a,listeners:i}))}var Si=null,Ni=null;function tg(t){Cd(t,0)}function Ro(t){var i=Dn(t);if(ge(i))return t}function sg(t,i){if(t==="change")return i}var ud=!1;if(m){var Cl;if(m){var El="oninput"in document;if(!El){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),El=typeof dd.oninput=="function"}Cl=El}else Cl=!1;ud=Cl&&(!document.documentMode||9<document.documentMode)}function hd(){Si&&(Si.detachEvent("onpropertychange",md),Ni=Si=null)}function md(t){if(t.propertyName==="value"&&Ro(Ni)){var i=[];cd(i,Ni,t,Fs(t)),Mt(tg,i)}}function rg(t,i,a){t==="focusin"?(hd(),Si=i,Ni=a,Si.attachEvent("onpropertychange",md)):t==="focusout"&&hd()}function ng(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ro(Ni)}function ig(t,i){if(t==="click")return Ro(i)}function og(t,i){if(t==="input"||t==="change")return Ro(i)}function ag(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Rs=typeof Object.is=="function"?Object.is:ag;function Ti(t,i){if(Rs(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!p.call(i,h)||!Rs(t[h],i[h]))return!1}return!0}function fd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pd(t,i){var a=fd(t);t=0;for(var u;a;){if(a.nodeType===3){if(u=t+a.textContent.length,t<=i&&u>=i)return{node:a,offset:i-t};t=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fd(a)}}function gd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?gd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yd(){for(var t=window,i=je();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=je(t.document)}return i}function _l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function lg(t){var i=yd(),a=t.focusedElem,u=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&gd(a.ownerDocument.documentElement,a)){if(u!==null&&_l(a)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var h=a.textContent.length,f=Math.min(u.start,h);u=u.end===void 0?f:Math.min(u.end,h),!t.extend&&f>u&&(h=u,u=f,f=h),h=pd(a,f);var y=pd(a,u);h&&y&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==y.node||t.focusOffset!==y.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),t.removeAllRanges(),f>u?(t.addRange(i),t.extend(y.node,y.offset)):(i.setEnd(y.node,y.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cg=m&&"documentMode"in document&&11>=document.documentMode,Rn=null,Pl=null,Ci=null,Rl=!1;function xd(t,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rl||Rn==null||Rn!==je(u)||(u=Rn,"selectionStart"in u&&_l(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ci&&Ti(Ci,u)||(Ci=u,u=Do(Pl,"onSelect"),0<u.length&&(i=new bl("onSelect","select",null,i,a),t.push({event:i,listeners:u}),i.target=Rn)))}function Ao(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var An={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Al={},vd={};m&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Mo(t){if(Al[t])return Al[t];if(!An[t])return t;var i=An[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in vd)return Al[t]=i[a];return t}var wd=Mo("animationend"),bd=Mo("animationiteration"),kd=Mo("animationstart"),jd=Mo("transitionend"),Sd=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,i){Sd.set(t,i),c(i,[t])}for(var Ml=0;Ml<Nd.length;Ml++){var Il=Nd[Ml],ug=Il.toLowerCase(),dg=Il[0].toUpperCase()+Il.slice(1);Tr(ug,"on"+dg)}Tr(wd,"onAnimationEnd"),Tr(bd,"onAnimationIteration"),Tr(kd,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(jd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Td(t,i,a){var u=t.type||"unknown-event";t.currentTarget=a,al(u,i,void 0,t),t.currentTarget=null}function Cd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var u=t[a],h=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var y=u.length-1;0<=y;y--){var k=u[y],C=k.instance,U=k.currentTarget;if(k=k.listener,C!==f&&h.isPropagationStopped())break e;Td(h,k,U),f=C}else for(y=0;y<u.length;y++){if(k=u[y],C=k.instance,U=k.currentTarget,k=k.listener,C!==f&&h.isPropagationStopped())break e;Td(h,k,U),f=C}}}if(ir)throw t=Kr,ir=!1,Kr=null,t}function tt(t,i){var a=i[Bl];a===void 0&&(a=i[Bl]=new Set);var u=t+"__bubble";a.has(u)||(Ed(i,t,2,!1),a.add(u))}function Dl(t,i,a){var u=0;i&&(u|=4),Ed(a,t,u,i)}var Io="_reactListening"+Math.random().toString(36).slice(2);function _i(t){if(!t[Io]){t[Io]=!0,o.forEach(function(a){a!=="selectionchange"&&(hg.has(a)||Dl(a,!1,t),Dl(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Io]||(i[Io]=!0,Dl("selectionchange",!1,i))}}function Ed(t,i,a,u){switch(Qu(i)){case 1:var h=Tp;break;case 4:h=Cp;break;default:h=xl}a=h.bind(null,i,a,t),h=void 0,!Xt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Ol(t,i,a,u,h){var f=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var k=u.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(y===4)for(y=u.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===h||C.nodeType===8&&C.parentNode===h))return;y=y.return}for(;k!==null;){if(y=Xr(k),y===null)return;if(C=y.tag,C===5||C===6){u=f=y;continue e}k=k.parentNode}}u=u.return}Mt(function(){var U=f,ee=Fs(a),ie=[];e:{var Z=Sd.get(t);if(Z!==void 0){var ve=bl,Se=t;switch(t){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":ve=Bp;break;case"focusin":Se="focus",ve=Sl;break;case"focusout":Se="blur",ve=Sl;break;case"beforeblur":case"afterblur":ve=Sl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=qp;break;case wd:case bd:case kd:ve=Mp;break;case jd:ve=Vp;break;case"scroll":ve=Ep;break;case"wheel":ve=Kp;break;case"copy":case"cut":case"paste":ve=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=sd}var Te=(i&4)!==0,mt=!Te&&t==="scroll",O=Te?Z!==null?Z+"Capture":null:Z;Te=[];for(var _=U,$;_!==null;){$=_;var le=$.stateNode;if($.tag===5&&le!==null&&($=le,O!==null&&(le=Wt(_,O),le!=null&&Te.push(Pi(_,le,$)))),mt)break;_=_.return}0<Te.length&&(Z=new ve(Z,Se,null,a,ee),ie.push({event:Z,listeners:Te}))}}if((i&7)===0){e:{if(Z=t==="mouseover"||t==="pointerover",ve=t==="mouseout"||t==="pointerout",Z&&a!==Gr&&(Se=a.relatedTarget||a.fromElement)&&(Xr(Se)||Se[or]))break e;if((ve||Z)&&(Z=ee.window===ee?ee:(Z=ee.ownerDocument)?Z.defaultView||Z.parentWindow:window,ve?(Se=a.relatedTarget||a.toElement,ve=U,Se=Se?Xr(Se):null,Se!==null&&(mt=Ys(Se),Se!==mt||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(ve=null,Se=U),ve!==Se)){if(Te=ed,le="onMouseLeave",O="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(Te=sd,le="onPointerLeave",O="onPointerEnter",_="pointer"),mt=ve==null?Z:Dn(ve),$=Se==null?Z:Dn(Se),Z=new Te(le,_+"leave",ve,a,ee),Z.target=mt,Z.relatedTarget=$,le=null,Xr(ee)===U&&(Te=new Te(O,_+"enter",Se,a,ee),Te.target=$,Te.relatedTarget=mt,le=Te),mt=le,ve&&Se)t:{for(Te=ve,O=Se,_=0,$=Te;$;$=Mn($))_++;for($=0,le=O;le;le=Mn(le))$++;for(;0<_-$;)Te=Mn(Te),_--;for(;0<$-_;)O=Mn(O),$--;for(;_--;){if(Te===O||O!==null&&Te===O.alternate)break t;Te=Mn(Te),O=Mn(O)}Te=null}else Te=null;ve!==null&&_d(ie,Z,ve,Te,!1),Se!==null&&mt!==null&&_d(ie,mt,Se,Te,!0)}}e:{if(Z=U?Dn(U):window,ve=Z.nodeName&&Z.nodeName.toLowerCase(),ve==="select"||ve==="input"&&Z.type==="file")var Ce=sg;else if(ld(Z))if(ud)Ce=og;else{Ce=ng;var Re=rg}else(ve=Z.nodeName)&&ve.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(Ce=ig);if(Ce&&(Ce=Ce(t,U))){cd(ie,Ce,a,ee);break e}Re&&Re(t,Z,U),t==="focusout"&&(Re=Z._wrapperState)&&Re.controlled&&Z.type==="number"&&Vt(Z,"number",Z.value)}switch(Re=U?Dn(U):window,t){case"focusin":(ld(Re)||Re.contentEditable==="true")&&(Rn=Re,Pl=U,Ci=null);break;case"focusout":Ci=Pl=Rn=null;break;case"mousedown":Rl=!0;break;case"contextmenu":case"mouseup":case"dragend":Rl=!1,xd(ie,a,ee);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":xd(ie,a,ee)}var Ae;if(Tl)e:{switch(t){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else Pn?od(t,a)&&(ze="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(rd&&a.locale!=="ko"&&(Pn||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Pn&&(Ae=Xu()):(Nr=ee,wl="value"in Nr?Nr.value:Nr.textContent,Pn=!0)),Re=Do(U,ze),0<Re.length&&(ze=new td(ze,t,null,a,ee),ie.push({event:ze,listeners:Re}),Ae?ze.data=Ae:(Ae=ad(a),Ae!==null&&(ze.data=Ae)))),(Ae=Qp?Xp(t,a):Zp(t,a))&&(U=Do(U,"onBeforeInput"),0<U.length&&(ee=new td("onBeforeInput","beforeinput",null,a,ee),ie.push({event:ee,listeners:U}),ee.data=Ae))}Cd(ie,i)})}function Pi(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Do(t,i){for(var a=i+"Capture",u=[];t!==null;){var h=t,f=h.stateNode;h.tag===5&&f!==null&&(h=f,f=Wt(t,a),f!=null&&u.unshift(Pi(t,f,h)),f=Wt(t,i),f!=null&&u.push(Pi(t,f,h))),t=t.return}return u}function Mn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _d(t,i,a,u,h){for(var f=i._reactName,y=[];a!==null&&a!==u;){var k=a,C=k.alternate,U=k.stateNode;if(C!==null&&C===u)break;k.tag===5&&U!==null&&(k=U,h?(C=Wt(a,f),C!=null&&y.unshift(Pi(a,C,k))):h||(C=Wt(a,f),C!=null&&y.push(Pi(a,C,k)))),a=a.return}y.length!==0&&t.push({event:i,listeners:y})}var mg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function Pd(t){return(typeof t=="string"?t:""+t).replace(mg,`
`).replace(fg,"")}function Oo(t,i,a){if(i=Pd(i),Pd(t)!==i&&a)throw Error(n(425))}function Lo(){}var Ll=null,zl=null;function Wl(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(t){return Rd.resolve(null).then(t).catch(yg)}:$l;function yg(t){setTimeout(function(){throw t})}function Hl(t,i){var a=i,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){t.removeChild(h),wi(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);wi(i)}function Cr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ad(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var In=Math.random().toString(36).slice(2),Vs="__reactFiber$"+In,Ri="__reactProps$"+In,or="__reactContainer$"+In,Bl="__reactEvents$"+In,xg="__reactListeners$"+In,vg="__reactHandles$"+In;function Xr(t){var i=t[Vs];if(i)return i;for(var a=t.parentNode;a;){if(i=a[or]||a[Vs]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Ad(t);t!==null;){if(a=t[Vs])return a;t=Ad(t)}return i}t=a,a=t.parentNode}return null}function Ai(t){return t=t[Vs]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Dn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function zo(t){return t[Ri]||null}var Fl=[],On=-1;function Er(t){return{current:t}}function st(t){0>On||(t.current=Fl[On],Fl[On]=null,On--)}function Ze(t,i){On++,Fl[On]=t.current,t.current=i}var _r={},$t=Er(_r),es=Er(!1),Zr=_r;function Ln(t,i){var a=t.type.contextTypes;if(!a)return _r;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},f;for(f in a)h[f]=i[f];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=h),h}function ts(t){return t=t.childContextTypes,t!=null}function Wo(){st(es),st($t)}function Md(t,i,a){if($t.current!==_r)throw Error(n(168));Ze($t,i),Ze(es,a)}function Id(t,i,a){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(n(108,P(t)||"Unknown",h));return J({},a,u)}function $o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Zr=$t.current,Ze($t,t),Ze(es,es.current),!0}function Dd(t,i,a){var u=t.stateNode;if(!u)throw Error(n(169));a?(t=Id(t,i,Zr),u.__reactInternalMemoizedMergedChildContext=t,st(es),st($t),Ze($t,t)):st(es),Ze(es,a)}var ar=null,Ho=!1,Ul=!1;function Od(t){ar===null?ar=[t]:ar.push(t)}function wg(t){Ho=!0,Od(t)}function Pr(){if(!Ul&&ar!==null){Ul=!0;var t=0,i=Je;try{var a=ar;for(Je=1;t<a.length;t++){var u=a[t];do u=u(!0);while(u!==null)}ar=null,Ho=!1}catch(h){throw ar!==null&&(ar=ar.slice(t+1)),yo(Tn,Pr),h}finally{Je=i,Ul=!1}}return null}var zn=[],Wn=0,Bo=null,Fo=0,ks=[],js=0,en=null,lr=1,cr="";function tn(t,i){zn[Wn++]=Fo,zn[Wn++]=Bo,Bo=t,Fo=i}function Ld(t,i,a){ks[js++]=lr,ks[js++]=cr,ks[js++]=en,en=t;var u=lr;t=cr;var h=32-ut(u)-1;u&=~(1<<h),a+=1;var f=32-ut(i)+h;if(30<f){var y=h-h%5;f=(u&(1<<y)-1).toString(32),u>>=y,h-=y,lr=1<<32-ut(i)+h|a<<h|u,cr=f+t}else lr=1<<f|a<<h|u,cr=t}function ql(t){t.return!==null&&(tn(t,1),Ld(t,1,0))}function Yl(t){for(;t===Bo;)Bo=zn[--Wn],zn[Wn]=null,Fo=zn[--Wn],zn[Wn]=null;for(;t===en;)en=ks[--js],ks[js]=null,cr=ks[--js],ks[js]=null,lr=ks[--js],ks[js]=null}var fs=null,ps=null,nt=!1,As=null;function zd(t,i){var a=Cs(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Wd(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,fs=t,ps=Cr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,fs=t,ps=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=en!==null?{id:lr,overflow:cr}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Cs(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,fs=t,ps=null,!0):!1;default:return!1}}function Vl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gl(t){if(nt){var i=ps;if(i){var a=i;if(!Wd(t,i)){if(Vl(t))throw Error(n(418));i=Cr(a.nextSibling);var u=fs;i&&Wd(t,i)?zd(u,a):(t.flags=t.flags&-4097|2,nt=!1,fs=t)}}else{if(Vl(t))throw Error(n(418));t.flags=t.flags&-4097|2,nt=!1,fs=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fs=t}function Uo(t){if(t!==fs)return!1;if(!nt)return $d(t),nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Wl(t.type,t.memoizedProps)),i&&(i=ps)){if(Vl(t))throw Hd(),Error(n(418));for(;i;)zd(t,i),i=Cr(i.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){ps=Cr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}ps=null}}else ps=fs?Cr(t.stateNode.nextSibling):null;return!0}function Hd(){for(var t=ps;t;)t=Cr(t.nextSibling)}function $n(){ps=fs=null,nt=!1}function Kl(t){As===null?As=[t]:As.push(t)}var bg=q.ReactCurrentBatchConfig;function Mi(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,t));var h=u,f=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(y){var k=h.refs;y===null?delete k[f]:k[f]=y},i._stringRef=f,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function qo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Bd(t){var i=t._init;return i(t._payload)}function Fd(t){function i(O,_){if(t){var $=O.deletions;$===null?(O.deletions=[_],O.flags|=16):$.push(_)}}function a(O,_){if(!t)return null;for(;_!==null;)i(O,_),_=_.sibling;return null}function u(O,_){for(O=new Map;_!==null;)_.key!==null?O.set(_.key,_):O.set(_.index,_),_=_.sibling;return O}function h(O,_){return O=zr(O,_),O.index=0,O.sibling=null,O}function f(O,_,$){return O.index=$,t?($=O.alternate,$!==null?($=$.index,$<_?(O.flags|=2,_):$):(O.flags|=2,_)):(O.flags|=1048576,_)}function y(O){return t&&O.alternate===null&&(O.flags|=2),O}function k(O,_,$,le){return _===null||_.tag!==6?(_=$c($,O.mode,le),_.return=O,_):(_=h(_,$),_.return=O,_)}function C(O,_,$,le){var Ce=$.type;return Ce===F?ee(O,_,$.props.children,le,$.key):_!==null&&(_.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===we&&Bd(Ce)===_.type)?(le=h(_,$.props),le.ref=Mi(O,_,$),le.return=O,le):(le=pa($.type,$.key,$.props,null,O.mode,le),le.ref=Mi(O,_,$),le.return=O,le)}function U(O,_,$,le){return _===null||_.tag!==4||_.stateNode.containerInfo!==$.containerInfo||_.stateNode.implementation!==$.implementation?(_=Hc($,O.mode,le),_.return=O,_):(_=h(_,$.children||[]),_.return=O,_)}function ee(O,_,$,le,Ce){return _===null||_.tag!==7?(_=un($,O.mode,le,Ce),_.return=O,_):(_=h(_,$),_.return=O,_)}function ie(O,_,$){if(typeof _=="string"&&_!==""||typeof _=="number")return _=$c(""+_,O.mode,$),_.return=O,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case K:return $=pa(_.type,_.key,_.props,null,O.mode,$),$.ref=Mi(O,null,_),$.return=O,$;case R:return _=Hc(_,O.mode,$),_.return=O,_;case we:var le=_._init;return ie(O,le(_._payload),$)}if(Pt(_)||G(_))return _=un(_,O.mode,$,null),_.return=O,_;qo(O,_)}return null}function Z(O,_,$,le){var Ce=_!==null?_.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ce!==null?null:k(O,_,""+$,le);if(typeof $=="object"&&$!==null){switch($.$$typeof){case K:return $.key===Ce?C(O,_,$,le):null;case R:return $.key===Ce?U(O,_,$,le):null;case we:return Ce=$._init,Z(O,_,Ce($._payload),le)}if(Pt($)||G($))return Ce!==null?null:ee(O,_,$,le,null);qo(O,$)}return null}function ve(O,_,$,le,Ce){if(typeof le=="string"&&le!==""||typeof le=="number")return O=O.get($)||null,k(_,O,""+le,Ce);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case K:return O=O.get(le.key===null?$:le.key)||null,C(_,O,le,Ce);case R:return O=O.get(le.key===null?$:le.key)||null,U(_,O,le,Ce);case we:var Re=le._init;return ve(O,_,$,Re(le._payload),Ce)}if(Pt(le)||G(le))return O=O.get($)||null,ee(_,O,le,Ce,null);qo(_,le)}return null}function Se(O,_,$,le){for(var Ce=null,Re=null,Ae=_,ze=_=0,Nt=null;Ae!==null&&ze<$.length;ze++){Ae.index>ze?(Nt=Ae,Ae=null):Nt=Ae.sibling;var Ve=Z(O,Ae,$[ze],le);if(Ve===null){Ae===null&&(Ae=Nt);break}t&&Ae&&Ve.alternate===null&&i(O,Ae),_=f(Ve,_,ze),Re===null?Ce=Ve:Re.sibling=Ve,Re=Ve,Ae=Nt}if(ze===$.length)return a(O,Ae),nt&&tn(O,ze),Ce;if(Ae===null){for(;ze<$.length;ze++)Ae=ie(O,$[ze],le),Ae!==null&&(_=f(Ae,_,ze),Re===null?Ce=Ae:Re.sibling=Ae,Re=Ae);return nt&&tn(O,ze),Ce}for(Ae=u(O,Ae);ze<$.length;ze++)Nt=ve(Ae,O,ze,$[ze],le),Nt!==null&&(t&&Nt.alternate!==null&&Ae.delete(Nt.key===null?ze:Nt.key),_=f(Nt,_,ze),Re===null?Ce=Nt:Re.sibling=Nt,Re=Nt);return t&&Ae.forEach(function(Wr){return i(O,Wr)}),nt&&tn(O,ze),Ce}function Te(O,_,$,le){var Ce=G($);if(typeof Ce!="function")throw Error(n(150));if($=Ce.call($),$==null)throw Error(n(151));for(var Re=Ce=null,Ae=_,ze=_=0,Nt=null,Ve=$.next();Ae!==null&&!Ve.done;ze++,Ve=$.next()){Ae.index>ze?(Nt=Ae,Ae=null):Nt=Ae.sibling;var Wr=Z(O,Ae,Ve.value,le);if(Wr===null){Ae===null&&(Ae=Nt);break}t&&Ae&&Wr.alternate===null&&i(O,Ae),_=f(Wr,_,ze),Re===null?Ce=Wr:Re.sibling=Wr,Re=Wr,Ae=Nt}if(Ve.done)return a(O,Ae),nt&&tn(O,ze),Ce;if(Ae===null){for(;!Ve.done;ze++,Ve=$.next())Ve=ie(O,Ve.value,le),Ve!==null&&(_=f(Ve,_,ze),Re===null?Ce=Ve:Re.sibling=Ve,Re=Ve);return nt&&tn(O,ze),Ce}for(Ae=u(O,Ae);!Ve.done;ze++,Ve=$.next())Ve=ve(Ae,O,ze,Ve.value,le),Ve!==null&&(t&&Ve.alternate!==null&&Ae.delete(Ve.key===null?ze:Ve.key),_=f(Ve,_,ze),Re===null?Ce=Ve:Re.sibling=Ve,Re=Ve);return t&&Ae.forEach(function(ey){return i(O,ey)}),nt&&tn(O,ze),Ce}function mt(O,_,$,le){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case K:e:{for(var Ce=$.key,Re=_;Re!==null;){if(Re.key===Ce){if(Ce=$.type,Ce===F){if(Re.tag===7){a(O,Re.sibling),_=h(Re,$.props.children),_.return=O,O=_;break e}}else if(Re.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===we&&Bd(Ce)===Re.type){a(O,Re.sibling),_=h(Re,$.props),_.ref=Mi(O,Re,$),_.return=O,O=_;break e}a(O,Re);break}else i(O,Re);Re=Re.sibling}$.type===F?(_=un($.props.children,O.mode,le,$.key),_.return=O,O=_):(le=pa($.type,$.key,$.props,null,O.mode,le),le.ref=Mi(O,_,$),le.return=O,O=le)}return y(O);case R:e:{for(Re=$.key;_!==null;){if(_.key===Re)if(_.tag===4&&_.stateNode.containerInfo===$.containerInfo&&_.stateNode.implementation===$.implementation){a(O,_.sibling),_=h(_,$.children||[]),_.return=O,O=_;break e}else{a(O,_);break}else i(O,_);_=_.sibling}_=Hc($,O.mode,le),_.return=O,O=_}return y(O);case we:return Re=$._init,mt(O,_,Re($._payload),le)}if(Pt($))return Se(O,_,$,le);if(G($))return Te(O,_,$,le);qo(O,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,_!==null&&_.tag===6?(a(O,_.sibling),_=h(_,$),_.return=O,O=_):(a(O,_),_=$c($,O.mode,le),_.return=O,O=_),y(O)):a(O,_)}return mt}var Hn=Fd(!0),Ud=Fd(!1),Yo=Er(null),Vo=null,Bn=null,Jl=null;function Ql(){Jl=Bn=Vo=null}function Xl(t){var i=Yo.current;st(Yo),t._currentValue=i}function Zl(t,i,a){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===a)break;t=t.return}}function Fn(t,i){Vo=t,Jl=Bn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ss=!0),t.firstContext=null)}function Ss(t){var i=t._currentValue;if(Jl!==t)if(t={context:t,memoizedValue:i,next:null},Bn===null){if(Vo===null)throw Error(n(308));Bn=t,Vo.dependencies={lanes:0,firstContext:t}}else Bn=Bn.next=t;return i}var sn=null;function ec(t){sn===null?sn=[t]:sn.push(t)}function qd(t,i,a,u){var h=i.interleaved;return h===null?(a.next=a,ec(i)):(a.next=h.next,h.next=a),i.interleaved=a,ur(t,u)}function ur(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Rr=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ar(t,i,a){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Ye&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,ur(t,a)}return h=u.interleaved,h===null?(i.next=i,ec(u)):(i.next=h.next,h.next=i),u.interleaved=i,ur(t,a)}function Go(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,pl(t,a)}}function Vd(t,i){var a=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?h=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?h=f=i:f=f.next=i}else h=f=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:u.shared,effects:u.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ko(t,i,a,u){var h=t.updateQueue;Rr=!1;var f=h.firstBaseUpdate,y=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var C=k,U=C.next;C.next=null,y===null?f=U:y.next=U,y=C;var ee=t.alternate;ee!==null&&(ee=ee.updateQueue,k=ee.lastBaseUpdate,k!==y&&(k===null?ee.firstBaseUpdate=U:k.next=U,ee.lastBaseUpdate=C))}if(f!==null){var ie=h.baseState;y=0,ee=U=C=null,k=f;do{var Z=k.lane,ve=k.eventTime;if((u&Z)===Z){ee!==null&&(ee=ee.next={eventTime:ve,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Se=t,Te=k;switch(Z=i,ve=a,Te.tag){case 1:if(Se=Te.payload,typeof Se=="function"){ie=Se.call(ve,ie,Z);break e}ie=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Te.payload,Z=typeof Se=="function"?Se.call(ve,ie,Z):Se,Z==null)break e;ie=J({},ie,Z);break e;case 2:Rr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,Z=h.effects,Z===null?h.effects=[k]:Z.push(k))}else ve={eventTime:ve,lane:Z,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ee===null?(U=ee=ve,C=ie):ee=ee.next=ve,y|=Z;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;Z=k,k=Z.next,Z.next=null,h.lastBaseUpdate=Z,h.shared.pending=null}}while(!0);if(ee===null&&(C=ie),h.baseState=C,h.firstBaseUpdate=U,h.lastBaseUpdate=ee,i=h.shared.interleaved,i!==null){h=i;do y|=h.lane,h=h.next;while(h!==i)}else f===null&&(h.shared.lanes=0);on|=y,t.lanes=y,t.memoizedState=ie}}function Gd(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var Ii={},Gs=Er(Ii),Di=Er(Ii),Oi=Er(Ii);function rn(t){if(t===Ii)throw Error(n(174));return t}function sc(t,i){switch(Ze(Oi,i),Ze(Di,t),Ze(Gs,Ii),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=_e(i,t)}st(Gs),Ze(Gs,i)}function Un(){st(Gs),st(Di),st(Oi)}function Kd(t){rn(Oi.current);var i=rn(Gs.current),a=_e(i,t.type);i!==a&&(Ze(Di,t),Ze(Gs,a))}function rc(t){Di.current===t&&(st(Gs),st(Di))}var ot=Er(0);function Jo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nc=[];function ic(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var Qo=q.ReactCurrentDispatcher,oc=q.ReactCurrentBatchConfig,nn=0,at=null,bt=null,jt=null,Xo=!1,Li=!1,zi=0,kg=0;function Ht(){throw Error(n(321))}function ac(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Rs(t[a],i[a]))return!1;return!0}function lc(t,i,a,u,h,f){if(nn=f,at=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qo.current=t===null||t.memoizedState===null?Tg:Cg,t=a(u,h),Li){f=0;do{if(Li=!1,zi=0,25<=f)throw Error(n(301));f+=1,jt=bt=null,i.updateQueue=null,Qo.current=Eg,t=a(u,h)}while(Li)}if(Qo.current=ta,i=bt!==null&&bt.next!==null,nn=0,jt=bt=at=null,Xo=!1,i)throw Error(n(300));return t}function cc(){var t=zi!==0;return zi=0,t}function Ks(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?at.memoizedState=jt=t:jt=jt.next=t,jt}function Ns(){if(bt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var i=jt===null?at.memoizedState:jt.next;if(i!==null)jt=i,bt=t;else{if(t===null)throw Error(n(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},jt===null?at.memoizedState=jt=t:jt=jt.next=t}return jt}function Wi(t,i){return typeof i=="function"?i(t):i}function uc(t){var i=Ns(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=bt,h=u.baseQueue,f=a.pending;if(f!==null){if(h!==null){var y=h.next;h.next=f.next,f.next=y}u.baseQueue=h=f,a.pending=null}if(h!==null){f=h.next,u=u.baseState;var k=y=null,C=null,U=f;do{var ee=U.lane;if((nn&ee)===ee)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),u=U.hasEagerState?U.eagerState:t(u,U.action);else{var ie={lane:ee,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(k=C=ie,y=u):C=C.next=ie,at.lanes|=ee,on|=ee}U=U.next}while(U!==null&&U!==f);C===null?y=u:C.next=k,Rs(u,i.memoizedState)||(ss=!0),i.memoizedState=u,i.baseState=y,i.baseQueue=C,a.lastRenderedState=u}if(t=a.interleaved,t!==null){h=t;do f=h.lane,at.lanes|=f,on|=f,h=h.next;while(h!==t)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function dc(t){var i=Ns(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=a.dispatch,h=a.pending,f=i.memoizedState;if(h!==null){a.pending=null;var y=h=h.next;do f=t(f,y.action),y=y.next;while(y!==h);Rs(f,i.memoizedState)||(ss=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,u]}function Jd(){}function Qd(t,i){var a=at,u=Ns(),h=i(),f=!Rs(u.memoizedState,h);if(f&&(u.memoizedState=h,ss=!0),u=u.queue,hc(eh.bind(null,a,u,t),[t]),u.getSnapshot!==i||f||jt!==null&&jt.memoizedState.tag&1){if(a.flags|=2048,$i(9,Zd.bind(null,a,u,h,i),void 0,null),St===null)throw Error(n(349));(nn&30)!==0||Xd(a,i,h)}return h}function Xd(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=at.updateQueue,i===null?(i={lastEffect:null,stores:null},at.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Zd(t,i,a,u){i.value=a,i.getSnapshot=u,th(i)&&sh(t)}function eh(t,i,a){return a(function(){th(i)&&sh(t)})}function th(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Rs(t,a)}catch{return!0}}function sh(t){var i=ur(t,1);i!==null&&Os(i,t,1,-1)}function rh(t){var i=Ks();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},i.queue=t,t=t.dispatch=Ng.bind(null,at,t),[i.memoizedState,t]}function $i(t,i,a,u){return t={tag:t,create:i,destroy:a,deps:u,next:null},i=at.updateQueue,i===null?(i={lastEffect:null,stores:null},at.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(u=a.next,a.next=t,t.next=u,i.lastEffect=t)),t}function nh(){return Ns().memoizedState}function Zo(t,i,a,u){var h=Ks();at.flags|=t,h.memoizedState=$i(1|i,a,void 0,u===void 0?null:u)}function ea(t,i,a,u){var h=Ns();u=u===void 0?null:u;var f=void 0;if(bt!==null){var y=bt.memoizedState;if(f=y.destroy,u!==null&&ac(u,y.deps)){h.memoizedState=$i(i,a,f,u);return}}at.flags|=t,h.memoizedState=$i(1|i,a,f,u)}function ih(t,i){return Zo(8390656,8,t,i)}function hc(t,i){return ea(2048,8,t,i)}function oh(t,i){return ea(4,2,t,i)}function ah(t,i){return ea(4,4,t,i)}function lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ch(t,i,a){return a=a!=null?a.concat([t]):null,ea(4,4,lh.bind(null,i,t),a)}function mc(){}function uh(t,i){var a=Ns();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(a.memoizedState=[t,i],t)}function dh(t,i){var a=Ns();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(t=t(),a.memoizedState=[t,i],t)}function hh(t,i,a){return(nn&21)===0?(t.baseState&&(t.baseState=!1,ss=!0),t.memoizedState=a):(Rs(a,i)||(a=Bu(),at.lanes|=a,on|=a,t.baseState=!0),i)}function jg(t,i){var a=Je;Je=a!==0&&4>a?a:4,t(!0);var u=oc.transition;oc.transition={};try{t(!1),i()}finally{Je=a,oc.transition=u}}function mh(){return Ns().memoizedState}function Sg(t,i,a){var u=Or(t);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},fh(t))ph(i,a);else if(a=qd(t,i,a,u),a!==null){var h=Qt();Os(a,t,u,h),gh(a,i,u)}}function Ng(t,i,a){var u=Or(t),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(fh(t))ph(i,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var y=i.lastRenderedState,k=f(y,a);if(h.hasEagerState=!0,h.eagerState=k,Rs(k,y)){var C=i.interleaved;C===null?(h.next=h,ec(i)):(h.next=C.next,C.next=h),i.interleaved=h;return}}catch{}finally{}a=qd(t,i,h,u),a!==null&&(h=Qt(),Os(a,t,u,h),gh(a,i,u))}}function fh(t){var i=t.alternate;return t===at||i!==null&&i===at}function ph(t,i){Li=Xo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function gh(t,i,a){if((a&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,pl(t,a)}}var ta={readContext:Ss,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},Tg={readContext:Ss,useCallback:function(t,i){return Ks().memoizedState=[t,i===void 0?null:i],t},useContext:Ss,useEffect:ih,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Zo(4194308,4,lh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Zo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Zo(4,2,t,i)},useMemo:function(t,i){var a=Ks();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var u=Ks();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Sg.bind(null,at,t),[u.memoizedState,t]},useRef:function(t){var i=Ks();return t={current:t},i.memoizedState=t},useState:rh,useDebugValue:mc,useDeferredValue:function(t){return Ks().memoizedState=t},useTransition:function(){var t=rh(!1),i=t[0];return t=jg.bind(null,t[1]),Ks().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var u=at,h=Ks();if(nt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),St===null)throw Error(n(349));(nn&30)!==0||Xd(u,i,a)}h.memoizedState=a;var f={value:a,getSnapshot:i};return h.queue=f,ih(eh.bind(null,u,f,t),[t]),u.flags|=2048,$i(9,Zd.bind(null,u,f,a,i),void 0,null),a},useId:function(){var t=Ks(),i=St.identifierPrefix;if(nt){var a=cr,u=lr;a=(u&~(1<<32-ut(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=zi++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=kg++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Cg={readContext:Ss,useCallback:uh,useContext:Ss,useEffect:hc,useImperativeHandle:ch,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:dh,useReducer:uc,useRef:nh,useState:function(){return uc(Wi)},useDebugValue:mc,useDeferredValue:function(t){var i=Ns();return hh(i,bt.memoizedState,t)},useTransition:function(){var t=uc(Wi)[0],i=Ns().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:Qd,useId:mh,unstable_isNewReconciler:!1},Eg={readContext:Ss,useCallback:uh,useContext:Ss,useEffect:hc,useImperativeHandle:ch,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:dh,useReducer:dc,useRef:nh,useState:function(){return dc(Wi)},useDebugValue:mc,useDeferredValue:function(t){var i=Ns();return bt===null?i.memoizedState=t:hh(i,bt.memoizedState,t)},useTransition:function(){var t=dc(Wi)[0],i=Ns().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:Qd,useId:mh,unstable_isNewReconciler:!1};function Ms(t,i){if(t&&t.defaultProps){i=J({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function fc(t,i,a,u){i=t.memoizedState,a=a(u,i),a=a==null?i:J({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sa={isMounted:function(t){return(t=t._reactInternals)?Ys(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var u=Qt(),h=Or(t),f=dr(u,h);f.payload=i,a!=null&&(f.callback=a),i=Ar(t,f,h),i!==null&&(Os(i,t,h,u),Go(i,t,h))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var u=Qt(),h=Or(t),f=dr(u,h);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Ar(t,f,h),i!==null&&(Os(i,t,h,u),Go(i,t,h))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Qt(),u=Or(t),h=dr(a,u);h.tag=2,i!=null&&(h.callback=i),i=Ar(t,h,u),i!==null&&(Os(i,t,u,a),Go(i,t,u))}};function yh(t,i,a,u,h,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,f,y):i.prototype&&i.prototype.isPureReactComponent?!Ti(a,u)||!Ti(h,f):!0}function xh(t,i,a){var u=!1,h=_r,f=i.contextType;return typeof f=="object"&&f!==null?f=Ss(f):(h=ts(i)?Zr:$t.current,u=i.contextTypes,f=(u=u!=null)?Ln(t,h):_r),i=new i(a,f),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=sa,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=f),i}function vh(t,i,a,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==t&&sa.enqueueReplaceState(i,i.state,null)}function pc(t,i,a,u){var h=t.stateNode;h.props=a,h.state=t.memoizedState,h.refs={},tc(t);var f=i.contextType;typeof f=="object"&&f!==null?h.context=Ss(f):(f=ts(i)?Zr:$t.current,h.context=Ln(t,f)),h.state=t.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(fc(t,i,f,a),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&sa.enqueueReplaceState(h,h.state,null),Ko(t,a,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function qn(t,i){try{var a="",u=i;do a+=ce(u),u=u.return;while(u);var h=a}catch(f){h=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:i,stack:h,digest:null}}function gc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function yc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var _g=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,a){a=dr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ca||(ca=!0,Ac=u),yc(t,i)},a}function bh(t,i,a){a=dr(-1,a),a.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){yc(t,i)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){yc(t,i),typeof u!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})}),a}function kh(t,i,a){var u=t.pingCache;if(u===null){u=t.pingCache=new _g;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),t=Fg.bind(null,t,i,a),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Sh(t,i,a,u,h){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=dr(-1,1),i.tag=2,Ar(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var Pg=q.ReactCurrentOwner,ss=!1;function Jt(t,i,a,u){i.child=t===null?Ud(i,null,a,u):Hn(i,t.child,a,u)}function Nh(t,i,a,u,h){a=a.render;var f=i.ref;return Fn(i,h),u=lc(t,i,a,u,f,h),a=cc(),t!==null&&!ss?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,hr(t,i,h)):(nt&&a&&ql(i),i.flags|=1,Jt(t,i,u,h),i.child)}function Th(t,i,a,u,h){if(t===null){var f=a.type;return typeof f=="function"&&!Wc(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,Ch(t,i,f,u,h)):(t=pa(a.type,null,u,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,(t.lanes&h)===0){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ti,a(y,u)&&t.ref===i.ref)return hr(t,i,h)}return i.flags|=1,t=zr(f,u),t.ref=i.ref,t.return=i,i.child=t}function Ch(t,i,a,u,h){if(t!==null){var f=t.memoizedProps;if(Ti(f,u)&&t.ref===i.ref)if(ss=!1,i.pendingProps=u=f,(t.lanes&h)!==0)(t.flags&131072)!==0&&(ss=!0);else return i.lanes=t.lanes,hr(t,i,h)}return xc(t,i,a,u,h)}function Eh(t,i,a){var u=i.pendingProps,h=u.children,f=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Vn,gs),gs|=a;else{if((a&1073741824)===0)return t=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ze(Vn,gs),gs|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:a,Ze(Vn,gs),gs|=u}else f!==null?(u=f.baseLanes|a,i.memoizedState=null):u=a,Ze(Vn,gs),gs|=u;return Jt(t,i,h,a),i.child}function _h(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function xc(t,i,a,u,h){var f=ts(a)?Zr:$t.current;return f=Ln(i,f),Fn(i,h),a=lc(t,i,a,u,f,h),u=cc(),t!==null&&!ss?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,hr(t,i,h)):(nt&&u&&ql(i),i.flags|=1,Jt(t,i,a,h),i.child)}function Ph(t,i,a,u,h){if(ts(a)){var f=!0;$o(i)}else f=!1;if(Fn(i,h),i.stateNode===null)na(t,i),xh(i,a,u),pc(i,a,u,h),u=!0;else if(t===null){var y=i.stateNode,k=i.memoizedProps;y.props=k;var C=y.context,U=a.contextType;typeof U=="object"&&U!==null?U=Ss(U):(U=ts(a)?Zr:$t.current,U=Ln(i,U));var ee=a.getDerivedStateFromProps,ie=typeof ee=="function"||typeof y.getSnapshotBeforeUpdate=="function";ie||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==u||C!==U)&&vh(i,y,u,U),Rr=!1;var Z=i.memoizedState;y.state=Z,Ko(i,u,y,h),C=i.memoizedState,k!==u||Z!==C||es.current||Rr?(typeof ee=="function"&&(fc(i,a,ee,u),C=i.memoizedState),(k=Rr||yh(i,a,k,u,Z,C,U))?(ie||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(i.flags|=4194308)):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=C),y.props=u,y.state=C,y.context=U,u=k):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{y=i.stateNode,Yd(t,i),k=i.memoizedProps,U=i.type===i.elementType?k:Ms(i.type,k),y.props=U,ie=i.pendingProps,Z=y.context,C=a.contextType,typeof C=="object"&&C!==null?C=Ss(C):(C=ts(a)?Zr:$t.current,C=Ln(i,C));var ve=a.getDerivedStateFromProps;(ee=typeof ve=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==ie||Z!==C)&&vh(i,y,u,C),Rr=!1,Z=i.memoizedState,y.state=Z,Ko(i,u,y,h);var Se=i.memoizedState;k!==ie||Z!==Se||es.current||Rr?(typeof ve=="function"&&(fc(i,a,ve,u),Se=i.memoizedState),(U=Rr||yh(i,a,U,u,Z,Se,C)||!1)?(ee||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(u,Se,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(u,Se,C)),typeof y.componentDidUpdate=="function"&&(i.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof y.componentDidUpdate!="function"||k===t.memoizedProps&&Z===t.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&Z===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Se),y.props=u,y.state=Se,y.context=C,u=U):(typeof y.componentDidUpdate!="function"||k===t.memoizedProps&&Z===t.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&Z===t.memoizedState||(i.flags|=1024),u=!1)}return vc(t,i,a,u,f,h)}function vc(t,i,a,u,h,f){_h(t,i);var y=(i.flags&128)!==0;if(!u&&!y)return h&&Dd(i,a,!1),hr(t,i,f);u=i.stateNode,Pg.current=i;var k=y&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&y?(i.child=Hn(i,t.child,null,f),i.child=Hn(i,null,k,f)):Jt(t,i,k,f),i.memoizedState=u.state,h&&Dd(i,a,!0),i.child}function Rh(t){var i=t.stateNode;i.pendingContext?Md(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Md(t,i.context,!1),sc(t,i.containerInfo)}function Ah(t,i,a,u,h){return $n(),Kl(h),i.flags|=256,Jt(t,i,a,u),i.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mh(t,i,a){var u=i.pendingProps,h=ot.current,f=!1,y=(i.flags&128)!==0,k;if((k=y)||(k=t!==null&&t.memoizedState===null?!1:(h&2)!==0),k?(f=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Ze(ot,h&1),t===null)return Gl(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(y=u.children,t=u.fallback,f?(u=i.mode,f=i.child,y={mode:"hidden",children:y},(u&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=y):f=ga(y,u,0,null),t=un(t,u,a,null),f.return=i,t.return=i,f.sibling=t,i.child=f,i.child.memoizedState=bc(a),i.memoizedState=wc,t):kc(i,y));if(h=t.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return Rg(t,i,y,u,k,h,a);if(f){f=u.fallback,y=i.mode,h=t.child,k=h.sibling;var C={mode:"hidden",children:u.children};return(y&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=C,i.deletions=null):(u=zr(h,C),u.subtreeFlags=h.subtreeFlags&14680064),k!==null?f=zr(k,f):(f=un(f,y,a,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,y=t.child.memoizedState,y=y===null?bc(a):{baseLanes:y.baseLanes|a,cachePool:null,transitions:y.transitions},f.memoizedState=y,f.childLanes=t.childLanes&~a,i.memoizedState=wc,u}return f=t.child,t=f.sibling,u=zr(f,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=u,i.memoizedState=null,u}function kc(t,i){return i=ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ra(t,i,a,u){return u!==null&&Kl(u),Hn(i,t.child,null,a),t=kc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Rg(t,i,a,u,h,f,y){if(a)return i.flags&256?(i.flags&=-257,u=gc(Error(n(422))),ra(t,i,y,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(f=u.fallback,h=i.mode,u=ga({mode:"visible",children:u.children},h,0,null),f=un(f,h,y,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,(i.mode&1)!==0&&Hn(i,t.child,null,y),i.child.memoizedState=bc(y),i.memoizedState=wc,f);if((i.mode&1)===0)return ra(t,i,y,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var k=u.dgst;return u=k,f=Error(n(419)),u=gc(f,u,void 0),ra(t,i,y,u)}if(k=(y&t.childLanes)!==0,ss||k){if(u=St,u!==null){switch(y&-y){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|y))!==0?0:h,h!==0&&h!==f.retryLane&&(f.retryLane=h,ur(t,h),Os(u,t,h,-1))}return zc(),u=gc(Error(n(421))),ra(t,i,y,u)}return h.data==="$?"?(i.flags|=128,i.child=t.child,i=Ug.bind(null,t),h._reactRetry=i,null):(t=f.treeContext,ps=Cr(h.nextSibling),fs=i,nt=!0,As=null,t!==null&&(ks[js++]=lr,ks[js++]=cr,ks[js++]=en,lr=t.id,cr=t.overflow,en=i),i=kc(i,u.children),i.flags|=4096,i)}function Ih(t,i,a){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Zl(t.return,i,a)}function jc(t,i,a,u,h){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=a,f.tailMode=h)}function Dh(t,i,a){var u=i.pendingProps,h=u.revealOrder,f=u.tail;if(Jt(t,i,u.children,a),u=ot.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ih(t,a,i);else if(t.tag===19)Ih(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ze(ot,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Jo(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),jc(i,!1,h,a,f);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Jo(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}jc(i,!0,a,null,f);break;case"together":jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function na(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function hr(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),on|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=zr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=zr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Ag(t,i,a){switch(i.tag){case 3:Rh(i),$n();break;case 5:Kd(i);break;case 1:ts(i.type)&&$o(i);break;case 4:sc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Ze(Yo,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ze(ot,ot.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Mh(t,i,a):(Ze(ot,ot.current&1),t=hr(t,i,a),t!==null?t.sibling:null);Ze(ot,ot.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Dh(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ze(ot,ot.current),u)break;return null;case 22:case 23:return i.lanes=0,Eh(t,i,a)}return hr(t,i,a)}var Oh,Sc,Lh,zh;Oh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sc=function(){},Lh=function(t,i,a,u){var h=t.memoizedProps;if(h!==u){t=i.stateNode,rn(Gs.current);var f=null;switch(a){case"input":h=$e(t,h),u=$e(t,u),f=[];break;case"select":h=J({},h,{value:void 0}),u=J({},u,{value:void 0}),f=[];break;case"textarea":h=Rt(t,h),u=Rt(t,u),f=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Lo)}Kt(a,u);var y;a=null;for(U in h)if(!u.hasOwnProperty(U)&&h.hasOwnProperty(U)&&h[U]!=null)if(U==="style"){var k=h[U];for(y in k)k.hasOwnProperty(y)&&(a||(a={}),a[y]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(l.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in u){var C=u[U];if(k=h!=null?h[U]:void 0,u.hasOwnProperty(U)&&C!==k&&(C!=null||k!=null))if(U==="style")if(k){for(y in k)!k.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(a||(a={}),a[y]="");for(y in C)C.hasOwnProperty(y)&&k[y]!==C[y]&&(a||(a={}),a[y]=C[y])}else a||(f||(f=[]),f.push(U,a)),a=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,k=k?k.__html:void 0,C!=null&&k!==C&&(f=f||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(l.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&tt("scroll",t),f||k===C||(f=[])):(f=f||[]).push(U,C))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},zh=function(t,i,a,u){a!==u&&(i.flags|=4)};function Hi(t,i){if(!nt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Bt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,u=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=a,i}function Mg(t,i,a){var u=i.pendingProps;switch(Yl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(i),null;case 1:return ts(i.type)&&Wo(),Bt(i),null;case 3:return u=i.stateNode,Un(),st(es),st($t),ic(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Uo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,As!==null&&(Dc(As),As=null))),Sc(t,i),Bt(i),null;case 5:rc(i);var h=rn(Oi.current);if(a=i.type,t!==null&&i.stateNode!=null)Lh(t,i,a,u,h),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Bt(i),null}if(t=rn(Gs.current),Uo(i)){u=i.stateNode,a=i.type;var f=i.memoizedProps;switch(u[Vs]=i,u[Ri]=f,t=(i.mode&1)!==0,a){case"dialog":tt("cancel",u),tt("close",u);break;case"iframe":case"object":case"embed":tt("load",u);break;case"video":case"audio":for(h=0;h<Ei.length;h++)tt(Ei[h],u);break;case"source":tt("error",u);break;case"img":case"image":case"link":tt("error",u),tt("load",u);break;case"details":tt("toggle",u);break;case"input":Ge(u,f),tt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},tt("invalid",u);break;case"textarea":At(u,f),tt("invalid",u)}Kt(a,f),h=null;for(var y in f)if(f.hasOwnProperty(y)){var k=f[y];y==="children"?typeof k=="string"?u.textContent!==k&&(f.suppressHydrationWarning!==!0&&Oo(u.textContent,k,t),h=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(f.suppressHydrationWarning!==!0&&Oo(u.textContent,k,t),h=["children",""+k]):l.hasOwnProperty(y)&&k!=null&&y==="onScroll"&&tt("scroll",u)}switch(a){case"input":se(u),_t(u,f,!0);break;case"textarea":se(u),vs(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=Lo)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{y=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=y.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=y.createElement(a,{is:u.is}):(t=y.createElement(a),a==="select"&&(y=t,u.multiple?y.multiple=!0:u.size&&(y.size=u.size))):t=y.createElementNS(t,a),t[Vs]=i,t[Ri]=u,Oh(t,i,!1,!1),i.stateNode=t;e:{switch(y=Vr(a,u),a){case"dialog":tt("cancel",t),tt("close",t),h=u;break;case"iframe":case"object":case"embed":tt("load",t),h=u;break;case"video":case"audio":for(h=0;h<Ei.length;h++)tt(Ei[h],t);h=u;break;case"source":tt("error",t),h=u;break;case"img":case"image":case"link":tt("error",t),tt("load",t),h=u;break;case"details":tt("toggle",t),h=u;break;case"input":Ge(t,u),h=$e(t,u),tt("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=J({},u,{value:void 0}),tt("invalid",t);break;case"textarea":At(t,u),h=Rt(t,u),tt("invalid",t);break;default:h=u}Kt(a,h),k=h;for(f in k)if(k.hasOwnProperty(f)){var C=k[f];f==="style"?Gt(t,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&De(t,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Oe(t,C):typeof C=="number"&&Oe(t,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?C!=null&&f==="onScroll"&&tt("scroll",t):C!=null&&H(t,f,C,y))}switch(a){case"input":se(t),_t(t,u,!1);break;case"textarea":se(t),vs(t);break;case"option":u.value!=null&&t.setAttribute("value",""+D(u.value));break;case"select":t.multiple=!!u.multiple,f=u.value,f!=null?rt(t,!!u.multiple,f,!1):u.defaultValue!=null&&rt(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bt(i),null;case 6:if(t&&i.stateNode!=null)zh(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(a=rn(Oi.current),rn(Gs.current),Uo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Vs]=i,(f=u.nodeValue!==a)&&(t=fs,t!==null))switch(t.tag){case 3:Oo(u.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oo(u.nodeValue,a,(t.mode&1)!==0)}f&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Vs]=i,i.stateNode=u}return Bt(i),null;case 13:if(st(ot),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&ps!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hd(),$n(),i.flags|=98560,f=!1;else if(f=Uo(i),u!==null&&u.dehydrated!==null){if(t===null){if(!f)throw Error(n(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(n(317));f[Vs]=i}else $n(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bt(i),f=!1}else As!==null&&(Dc(As),As=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(ot.current&1)!==0?kt===0&&(kt=3):zc())),i.updateQueue!==null&&(i.flags|=4),Bt(i),null);case 4:return Un(),Sc(t,i),t===null&&_i(i.stateNode.containerInfo),Bt(i),null;case 10:return Xl(i.type._context),Bt(i),null;case 17:return ts(i.type)&&Wo(),Bt(i),null;case 19:if(st(ot),f=i.memoizedState,f===null)return Bt(i),null;if(u=(i.flags&128)!==0,y=f.rendering,y===null)if(u)Hi(f,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(y=Jo(t),y!==null){for(i.flags|=128,Hi(f,!1),u=y.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)f=a,t=u,f.flags&=14680066,y=f.alternate,y===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=y.childLanes,f.lanes=y.lanes,f.child=y.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=y.memoizedProps,f.memoizedState=y.memoizedState,f.updateQueue=y.updateQueue,f.type=y.type,t=y.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ze(ot,ot.current&1|2),i.child}t=t.sibling}f.tail!==null&&it()>Gn&&(i.flags|=128,u=!0,Hi(f,!1),i.lanes=4194304)}else{if(!u)if(t=Jo(y),t!==null){if(i.flags|=128,u=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Hi(f,!0),f.tail===null&&f.tailMode==="hidden"&&!y.alternate&&!nt)return Bt(i),null}else 2*it()-f.renderingStartTime>Gn&&a!==1073741824&&(i.flags|=128,u=!0,Hi(f,!1),i.lanes=4194304);f.isBackwards?(y.sibling=i.child,i.child=y):(a=f.last,a!==null?a.sibling=y:i.child=y,f.last=y)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=it(),i.sibling=null,a=ot.current,Ze(ot,u?a&1|2:a&1),i):(Bt(i),null);case 22:case 23:return Lc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(gs&1073741824)!==0&&(Bt(i),i.subtreeFlags&6&&(i.flags|=8192)):Bt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Ig(t,i){switch(Yl(i),i.tag){case 1:return ts(i.type)&&Wo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Un(),st(es),st($t),ic(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return rc(i),null;case 13:if(st(ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));$n()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return st(ot),null;case 4:return Un(),null;case 10:return Xl(i.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var ia=!1,Ft=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,be=null;function Yn(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){dt(t,i,u)}else a.current=null}function Nc(t,i,a){try{a()}catch(u){dt(t,i,u)}}var Wh=!1;function Og(t,i){if(Ll=No,t=yd(),_l(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,k=-1,C=-1,U=0,ee=0,ie=t,Z=null;t:for(;;){for(var ve;ie!==a||h!==0&&ie.nodeType!==3||(k=y+h),ie!==f||u!==0&&ie.nodeType!==3||(C=y+u),ie.nodeType===3&&(y+=ie.nodeValue.length),(ve=ie.firstChild)!==null;)Z=ie,ie=ve;for(;;){if(ie===t)break t;if(Z===a&&++U===h&&(k=y),Z===f&&++ee===u&&(C=y),(ve=ie.nextSibling)!==null)break;ie=Z,Z=ie.parentNode}ie=ve}a=k===-1||C===-1?null:{start:k,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(zl={focusedElem:t,selectionRange:a},No=!1,be=i;be!==null;)if(i=be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,be=t;else for(;be!==null;){i=be;try{var Se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var Te=Se.memoizedProps,mt=Se.memoizedState,O=i.stateNode,_=O.getSnapshotBeforeUpdate(i.elementType===i.type?Te:Ms(i.type,Te),mt);O.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(le){dt(i,i.return,le)}if(t=i.sibling,t!==null){t.return=i.return,be=t;break}be=i.return}return Se=Wh,Wh=!1,Se}function Bi(t,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var f=h.destroy;h.destroy=void 0,f!==void 0&&Nc(i,a,f)}h=h.next}while(h!==u)}}function oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Tc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Vs],delete i[Ri],delete i[Bl],delete i[xg],delete i[vg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hh(t){return t.tag===5||t.tag===3||t.tag===4}function Bh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(u!==4&&(t=t.child,t!==null))for(Cc(t,i,a),t=t.sibling;t!==null;)Cc(t,i,a),t=t.sibling}function Ec(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Ec(t,i,a),t=t.sibling;t!==null;)Ec(t,i,a),t=t.sibling}var It=null,Is=!1;function Mr(t,i,a){for(a=a.child;a!==null;)Fh(t,i,a),a=a.sibling}function Fh(t,i,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 5:Ft||Yn(a,i);case 6:var u=It,h=Is;It=null,Mr(t,i,a),It=u,Is=h,It!==null&&(Is?(t=It,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Is?(t=It,a=a.stateNode,t.nodeType===8?Hl(t.parentNode,a):t.nodeType===1&&Hl(t,a),wi(t)):Hl(It,a.stateNode));break;case 4:u=It,h=Is,It=a.stateNode.containerInfo,Is=!0,Mr(t,i,a),It=u,Is=h;break;case 0:case 11:case 14:case 15:if(!Ft&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var f=h,y=f.destroy;f=f.tag,y!==void 0&&((f&2)!==0||(f&4)!==0)&&Nc(a,i,y),h=h.next}while(h!==u)}Mr(t,i,a);break;case 1:if(!Ft&&(Yn(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(k){dt(a,i,k)}Mr(t,i,a);break;case 21:Mr(t,i,a);break;case 22:a.mode&1?(Ft=(u=Ft)||a.memoizedState!==null,Mr(t,i,a),Ft=u):Mr(t,i,a);break;default:Mr(t,i,a)}}function Uh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Dg),i.forEach(function(u){var h=qg.bind(null,t,u);a.has(u)||(a.add(u),u.then(h,h))})}}function Ds(t,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var f=t,y=i,k=y;e:for(;k!==null;){switch(k.tag){case 5:It=k.stateNode,Is=!1;break e;case 3:It=k.stateNode.containerInfo,Is=!0;break e;case 4:It=k.stateNode.containerInfo,Is=!0;break e}k=k.return}if(It===null)throw Error(n(160));Fh(f,y,h),It=null,Is=!1;var C=h.alternate;C!==null&&(C.return=null),h.return=null}catch(U){dt(h,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qh(i,t),i=i.sibling}function qh(t,i){var a=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ds(i,t),Js(t),u&4){try{Bi(3,t,t.return),oa(3,t)}catch(Te){dt(t,t.return,Te)}try{Bi(5,t,t.return)}catch(Te){dt(t,t.return,Te)}}break;case 1:Ds(i,t),Js(t),u&512&&a!==null&&Yn(a,a.return);break;case 5:if(Ds(i,t),Js(t),u&512&&a!==null&&Yn(a,a.return),t.flags&32){var h=t.stateNode;try{Oe(h,"")}catch(Te){dt(t,t.return,Te)}}if(u&4&&(h=t.stateNode,h!=null)){var f=t.memoizedProps,y=a!==null?a.memoizedProps:f,k=t.type,C=t.updateQueue;if(t.updateQueue=null,C!==null)try{k==="input"&&f.type==="radio"&&f.name!=null&&Ue(h,f),Vr(k,y);var U=Vr(k,f);for(y=0;y<C.length;y+=2){var ee=C[y],ie=C[y+1];ee==="style"?Gt(h,ie):ee==="dangerouslySetInnerHTML"?De(h,ie):ee==="children"?Oe(h,ie):H(h,ee,ie,U)}switch(k){case"input":ct(h,f);break;case"textarea":Ps(h,f);break;case"select":var Z=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!f.multiple;var ve=f.value;ve!=null?rt(h,!!f.multiple,ve,!1):Z!==!!f.multiple&&(f.defaultValue!=null?rt(h,!!f.multiple,f.defaultValue,!0):rt(h,!!f.multiple,f.multiple?[]:"",!1))}h[Ri]=f}catch(Te){dt(t,t.return,Te)}}break;case 6:if(Ds(i,t),Js(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,f=t.memoizedProps;try{h.nodeValue=f}catch(Te){dt(t,t.return,Te)}}break;case 3:if(Ds(i,t),Js(t),u&4&&a!==null&&a.memoizedState.isDehydrated)try{wi(i.containerInfo)}catch(Te){dt(t,t.return,Te)}break;case 4:Ds(i,t),Js(t);break;case 13:Ds(i,t),Js(t),h=t.child,h.flags&8192&&(f=h.memoizedState!==null,h.stateNode.isHidden=f,!f||h.alternate!==null&&h.alternate.memoizedState!==null||(Rc=it())),u&4&&Uh(t);break;case 22:if(ee=a!==null&&a.memoizedState!==null,t.mode&1?(Ft=(U=Ft)||ee,Ds(i,t),Ft=U):Ds(i,t),Js(t),u&8192){if(U=t.memoizedState!==null,(t.stateNode.isHidden=U)&&!ee&&(t.mode&1)!==0)for(be=t,ee=t.child;ee!==null;){for(ie=be=ee;be!==null;){switch(Z=be,ve=Z.child,Z.tag){case 0:case 11:case 14:case 15:Bi(4,Z,Z.return);break;case 1:Yn(Z,Z.return);var Se=Z.stateNode;if(typeof Se.componentWillUnmount=="function"){u=Z,a=Z.return;try{i=u,Se.props=i.memoizedProps,Se.state=i.memoizedState,Se.componentWillUnmount()}catch(Te){dt(u,a,Te)}}break;case 5:Yn(Z,Z.return);break;case 22:if(Z.memoizedState!==null){Gh(ie);continue}}ve!==null?(ve.return=Z,be=ve):Gh(ie)}ee=ee.sibling}e:for(ee=null,ie=t;;){if(ie.tag===5){if(ee===null){ee=ie;try{h=ie.stateNode,U?(f=h.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(k=ie.stateNode,C=ie.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,k.style.display=us("display",y))}catch(Te){dt(t,t.return,Te)}}}else if(ie.tag===6){if(ee===null)try{ie.stateNode.nodeValue=U?"":ie.memoizedProps}catch(Te){dt(t,t.return,Te)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===t)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===t)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===t)break e;ee===ie&&(ee=null),ie=ie.return}ee===ie&&(ee=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Ds(i,t),Js(t),u&4&&Uh(t);break;case 21:break;default:Ds(i,t),Js(t)}}function Js(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Hh(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Oe(h,""),u.flags&=-33);var f=Bh(t);Ec(t,f,h);break;case 3:case 4:var y=u.stateNode.containerInfo,k=Bh(t);Cc(t,k,y);break;default:throw Error(n(161))}}catch(C){dt(t,t.return,C)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Lg(t,i,a){be=t,Yh(t)}function Yh(t,i,a){for(var u=(t.mode&1)!==0;be!==null;){var h=be,f=h.child;if(h.tag===22&&u){var y=h.memoizedState!==null||ia;if(!y){var k=h.alternate,C=k!==null&&k.memoizedState!==null||Ft;k=ia;var U=Ft;if(ia=y,(Ft=C)&&!U)for(be=h;be!==null;)y=be,C=y.child,y.tag===22&&y.memoizedState!==null?Kh(h):C!==null?(C.return=y,be=C):Kh(h);for(;f!==null;)be=f,Yh(f),f=f.sibling;be=h,ia=k,Ft=U}Vh(t)}else(h.subtreeFlags&8772)!==0&&f!==null?(f.return=h,be=f):Vh(t)}}function Vh(t){for(;be!==null;){var i=be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||oa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Ft)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ms(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Gd(i,f,u);break;case 3:var y=i.updateQueue;if(y!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gd(i,y,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var ee=U.memoizedState;if(ee!==null){var ie=ee.dehydrated;ie!==null&&wi(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ft||i.flags&512&&Tc(i)}catch(Z){dt(i,i.return,Z)}}if(i===t){be=null;break}if(a=i.sibling,a!==null){a.return=i.return,be=a;break}be=i.return}}function Gh(t){for(;be!==null;){var i=be;if(i===t){be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,be=a;break}be=i.return}}function Kh(t){for(;be!==null;){var i=be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{oa(4,i)}catch(C){dt(i,a,C)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(C){dt(i,h,C)}}var f=i.return;try{Tc(i)}catch(C){dt(i,f,C)}break;case 5:var y=i.return;try{Tc(i)}catch(C){dt(i,y,C)}}}catch(C){dt(i,i.return,C)}if(i===t){be=null;break}var k=i.sibling;if(k!==null){k.return=i.return,be=k;break}be=i.return}}var zg=Math.ceil,aa=q.ReactCurrentDispatcher,_c=q.ReactCurrentOwner,Ts=q.ReactCurrentBatchConfig,Ye=0,St=null,yt=null,Dt=0,gs=0,Vn=Er(0),kt=0,Fi=null,on=0,la=0,Pc=0,Ui=null,rs=null,Rc=0,Gn=1/0,mr=null,ca=!1,Ac=null,Ir=null,ua=!1,Dr=null,da=0,qi=0,Mc=null,ha=-1,ma=0;function Qt(){return(Ye&6)!==0?it():ha!==-1?ha:ha=it()}function Or(t){return(t.mode&1)===0?1:(Ye&2)!==0&&Dt!==0?Dt&-Dt:bg.transition!==null?(ma===0&&(ma=Bu()),ma):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Qu(t.type)),t)}function Os(t,i,a,u){if(50<qi)throw qi=0,Mc=null,Error(n(185));pi(t,a,u),((Ye&2)===0||t!==St)&&(t===St&&((Ye&2)===0&&(la|=a),kt===4&&Lr(t,Dt)),ns(t,u),a===1&&Ye===0&&(i.mode&1)===0&&(Gn=it()+500,Ho&&Pr()))}function ns(t,i){var a=t.callbackNode;bp(t,i);var u=ko(t,t===St?Dt:0);if(u===0)a!==null&&xo(a),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(a!=null&&xo(a),i===1)t.tag===0?wg(Qh.bind(null,t)):Od(Qh.bind(null,t)),gg(function(){(Ye&6)===0&&Pr()}),a=null;else{switch(Fu(u)){case 1:a=Tn;break;case 4:a=mi;break;case 16:a=Cn;break;case 536870912:a=z;break;default:a=Cn}a=im(a,Jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Jh(t,i){if(ha=-1,ma=0,(Ye&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Kn()&&t.callbackNode!==a)return null;var u=ko(t,t===St?Dt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=fa(t,u);else{i=u;var h=Ye;Ye|=2;var f=Zh();(St!==t||Dt!==i)&&(mr=null,Gn=it()+500,ln(t,i));do try{Hg();break}catch(k){Xh(t,k)}while(!0);Ql(),aa.current=f,Ye=h,yt!==null?i=0:(St=null,Dt=0,i=kt)}if(i!==0){if(i===2&&(h=ml(t),h!==0&&(u=h,i=Ic(t,h))),i===1)throw a=Fi,ln(t,0),Lr(t,u),ns(t,it()),a;if(i===6)Lr(t,u);else{if(h=t.current.alternate,(u&30)===0&&!Wg(h)&&(i=fa(t,u),i===2&&(f=ml(t),f!==0&&(u=f,i=Ic(t,f))),i===1))throw a=Fi,ln(t,0),Lr(t,u),ns(t,it()),a;switch(t.finishedWork=h,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:cn(t,rs,mr);break;case 3:if(Lr(t,u),(u&130023424)===u&&(i=Rc+500-it(),10<i)){if(ko(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){Qt(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=$l(cn.bind(null,t,rs,mr),i);break}cn(t,rs,mr);break;case 4:if(Lr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,h=-1;0<u;){var y=31-ut(u);f=1<<y,y=i[y],y>h&&(h=y),u&=~f}if(u=h,u=it()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*zg(u/1960))-u,10<u){t.timeoutHandle=$l(cn.bind(null,t,rs,mr),u);break}cn(t,rs,mr);break;case 5:cn(t,rs,mr);break;default:throw Error(n(329))}}}return ns(t,it()),t.callbackNode===a?Jh.bind(null,t):null}function Ic(t,i){var a=Ui;return t.current.memoizedState.isDehydrated&&(ln(t,i).flags|=256),t=fa(t,i),t!==2&&(i=rs,rs=a,i!==null&&Dc(i)),t}function Dc(t){rs===null?rs=t:rs.push.apply(rs,t)}function Wg(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],f=h.getSnapshot;h=h.value;try{if(!Rs(f(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(t,i){for(i&=~Pc,i&=~la,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-ut(i),u=1<<a;t[a]=-1,i&=~u}}function Qh(t){if((Ye&6)!==0)throw Error(n(327));Kn();var i=ko(t,0);if((i&1)===0)return ns(t,it()),null;var a=fa(t,i);if(t.tag!==0&&a===2){var u=ml(t);u!==0&&(i=u,a=Ic(t,u))}if(a===1)throw a=Fi,ln(t,0),Lr(t,i),ns(t,it()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,cn(t,rs,mr),ns(t,it()),null}function Oc(t,i){var a=Ye;Ye|=1;try{return t(i)}finally{Ye=a,Ye===0&&(Gn=it()+500,Ho&&Pr())}}function an(t){Dr!==null&&Dr.tag===0&&(Ye&6)===0&&Kn();var i=Ye;Ye|=1;var a=Ts.transition,u=Je;try{if(Ts.transition=null,Je=1,t)return t()}finally{Je=u,Ts.transition=a,Ye=i,(Ye&6)===0&&Pr()}}function Lc(){gs=Vn.current,st(Vn)}function ln(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,pg(a)),yt!==null)for(a=yt.return;a!==null;){var u=a;switch(Yl(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wo();break;case 3:Un(),st(es),st($t),ic();break;case 5:rc(u);break;case 4:Un();break;case 13:st(ot);break;case 19:st(ot);break;case 10:Xl(u.type._context);break;case 22:case 23:Lc()}a=a.return}if(St=t,yt=t=zr(t.current,null),Dt=gs=i,kt=0,Fi=null,Pc=la=on=0,rs=Ui=null,sn!==null){for(i=0;i<sn.length;i++)if(a=sn[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,f=a.pending;if(f!==null){var y=f.next;f.next=h,u.next=y}a.pending=u}sn=null}return t}function Xh(t,i){do{var a=yt;try{if(Ql(),Qo.current=ta,Xo){for(var u=at.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Xo=!1}if(nn=0,jt=bt=at=null,Li=!1,zi=0,_c.current=null,a===null||a.return===null){kt=1,Fi=i,yt=null;break}e:{var f=t,y=a.return,k=a,C=i;if(i=Dt,k.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,ee=k,ie=ee.tag;if((ee.mode&1)===0&&(ie===0||ie===11||ie===15)){var Z=ee.alternate;Z?(ee.updateQueue=Z.updateQueue,ee.memoizedState=Z.memoizedState,ee.lanes=Z.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var ve=jh(y);if(ve!==null){ve.flags&=-257,Sh(ve,y,k,f,i),ve.mode&1&&kh(f,U,i),i=ve,C=U;var Se=i.updateQueue;if(Se===null){var Te=new Set;Te.add(C),i.updateQueue=Te}else Se.add(C);break e}else{if((i&1)===0){kh(f,U,i),zc();break e}C=Error(n(426))}}else if(nt&&k.mode&1){var mt=jh(y);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),Sh(mt,y,k,f,i),Kl(qn(C,k));break e}}f=C=qn(C,k),kt!==4&&(kt=2),Ui===null?Ui=[f]:Ui.push(f),f=y;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var O=wh(f,C,i);Vd(f,O);break e;case 1:k=C;var _=f.type,$=f.stateNode;if((f.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Ir===null||!Ir.has($)))){f.flags|=65536,i&=-i,f.lanes|=i;var le=bh(f,k,i);Vd(f,le);break e}}f=f.return}while(f!==null)}tm(a)}catch(Ce){i=Ce,yt===a&&a!==null&&(yt=a=a.return);continue}break}while(!0)}function Zh(){var t=aa.current;return aa.current=ta,t===null?ta:t}function zc(){(kt===0||kt===3||kt===2)&&(kt=4),St===null||(on&268435455)===0&&(la&268435455)===0||Lr(St,Dt)}function fa(t,i){var a=Ye;Ye|=2;var u=Zh();(St!==t||Dt!==i)&&(mr=null,ln(t,i));do try{$g();break}catch(h){Xh(t,h)}while(!0);if(Ql(),Ye=a,aa.current=u,yt!==null)throw Error(n(261));return St=null,Dt=0,kt}function $g(){for(;yt!==null;)em(yt)}function Hg(){for(;yt!==null&&!cl();)em(yt)}function em(t){var i=nm(t.alternate,t,gs);t.memoizedProps=t.pendingProps,i===null?tm(t):yt=i,_c.current=null}function tm(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Mg(a,i,gs),a!==null){yt=a;return}}else{if(a=Ig(a,i),a!==null){a.flags&=32767,yt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,yt=null;return}}if(i=i.sibling,i!==null){yt=i;return}yt=i=t}while(i!==null);kt===0&&(kt=5)}function cn(t,i,a){var u=Je,h=Ts.transition;try{Ts.transition=null,Je=1,Bg(t,i,a,u)}finally{Ts.transition=h,Je=u}return null}function Bg(t,i,a,u){do Kn();while(Dr!==null);if((Ye&6)!==0)throw Error(n(327));a=t.finishedWork;var h=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var f=a.lanes|a.childLanes;if(kp(t,f),t===St&&(yt=St=null,Dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ua||(ua=!0,im(Cn,function(){return Kn(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=Ts.transition,Ts.transition=null;var y=Je;Je=1;var k=Ye;Ye|=4,_c.current=null,Og(t,a),qh(a,t),lg(zl),No=!!Ll,zl=Ll=null,t.current=a,Lg(a),ul(),Ye=k,Je=y,Ts.transition=f}else t.current=a;if(ua&&(ua=!1,Dr=t,da=h),f=t.pendingLanes,f===0&&(Ir=null),bs(a.stateNode),ns(t,it()),i!==null)for(u=t.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(ca)throw ca=!1,t=Ac,Ac=null,t;return(da&1)!==0&&t.tag!==0&&Kn(),f=t.pendingLanes,(f&1)!==0?t===Mc?qi++:(qi=0,Mc=t):qi=0,Pr(),null}function Kn(){if(Dr!==null){var t=Fu(da),i=Ts.transition,a=Je;try{if(Ts.transition=null,Je=16>t?16:t,Dr===null)var u=!1;else{if(t=Dr,Dr=null,da=0,(Ye&6)!==0)throw Error(n(331));var h=Ye;for(Ye|=4,be=t.current;be!==null;){var f=be,y=f.child;if((be.flags&16)!==0){var k=f.deletions;if(k!==null){for(var C=0;C<k.length;C++){var U=k[C];for(be=U;be!==null;){var ee=be;switch(ee.tag){case 0:case 11:case 15:Bi(8,ee,f)}var ie=ee.child;if(ie!==null)ie.return=ee,be=ie;else for(;be!==null;){ee=be;var Z=ee.sibling,ve=ee.return;if($h(ee),ee===U){be=null;break}if(Z!==null){Z.return=ve,be=Z;break}be=ve}}}var Se=f.alternate;if(Se!==null){var Te=Se.child;if(Te!==null){Se.child=null;do{var mt=Te.sibling;Te.sibling=null,Te=mt}while(Te!==null)}}be=f}}if((f.subtreeFlags&2064)!==0&&y!==null)y.return=f,be=y;else e:for(;be!==null;){if(f=be,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Bi(9,f,f.return)}var O=f.sibling;if(O!==null){O.return=f.return,be=O;break e}be=f.return}}var _=t.current;for(be=_;be!==null;){y=be;var $=y.child;if((y.subtreeFlags&2064)!==0&&$!==null)$.return=y,be=$;else e:for(y=_;be!==null;){if(k=be,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:oa(9,k)}}catch(Ce){dt(k,k.return,Ce)}if(k===y){be=null;break e}var le=k.sibling;if(le!==null){le.return=k.return,be=le;break e}be=k.return}}if(Ye=h,Pr(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Me,t)}catch{}u=!0}return u}finally{Je=a,Ts.transition=i}}return!1}function sm(t,i,a){i=qn(a,i),i=wh(t,i,1),t=Ar(t,i,1),i=Qt(),t!==null&&(pi(t,1,i),ns(t,i))}function dt(t,i,a){if(t.tag===3)sm(t,t,a);else for(;i!==null;){if(i.tag===3){sm(i,t,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ir===null||!Ir.has(u))){t=qn(a,t),t=bh(i,t,1),i=Ar(i,t,1),t=Qt(),i!==null&&(pi(i,1,t),ns(i,t));break}}i=i.return}}function Fg(t,i,a){var u=t.pingCache;u!==null&&u.delete(i),i=Qt(),t.pingedLanes|=t.suspendedLanes&a,St===t&&(Dt&a)===a&&(kt===4||kt===3&&(Dt&130023424)===Dt&&500>it()-Rc?ln(t,0):Pc|=a),ns(t,i)}function rm(t,i){i===0&&((t.mode&1)===0?i=1:(i=bo,bo<<=1,(bo&130023424)===0&&(bo=4194304)));var a=Qt();t=ur(t,i),t!==null&&(pi(t,i,a),ns(t,a))}function Ug(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),rm(t,a)}function qg(t,i){var a=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),rm(t,a)}var nm;nm=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||es.current)ss=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return ss=!1,Ag(t,i,a);ss=(t.flags&131072)!==0}else ss=!1,nt&&(i.flags&1048576)!==0&&Ld(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;na(t,i),t=i.pendingProps;var h=Ln(i,$t.current);Fn(i,a),h=lc(null,i,u,t,h,a);var f=cc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ts(u)?(f=!0,$o(i)):f=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,tc(i),h.updater=sa,i.stateNode=h,h._reactInternals=i,pc(i,u,t,a),i=vc(null,i,u,!0,f,a)):(i.tag=0,nt&&f&&ql(i),Jt(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(na(t,i),t=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Vg(u),t=Ms(u,t),h){case 0:i=xc(null,i,u,t,a);break e;case 1:i=Ph(null,i,u,t,a);break e;case 11:i=Nh(null,i,u,t,a);break e;case 14:i=Th(null,i,u,Ms(u.type,t),a);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ms(u,h),xc(t,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ms(u,h),Ph(t,i,u,h,a);case 3:e:{if(Rh(i),t===null)throw Error(n(387));u=i.pendingProps,f=i.memoizedState,h=f.element,Yd(t,i),Ko(i,u,null,a);var y=i.memoizedState;if(u=y.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){h=qn(Error(n(423)),i),i=Ah(t,i,u,a,h);break e}else if(u!==h){h=qn(Error(n(424)),i),i=Ah(t,i,u,a,h);break e}else for(ps=Cr(i.stateNode.containerInfo.firstChild),fs=i,nt=!0,As=null,a=Ud(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($n(),u===h){i=hr(t,i,a);break e}Jt(t,i,u,a)}i=i.child}return i;case 5:return Kd(i),t===null&&Gl(i),u=i.type,h=i.pendingProps,f=t!==null?t.memoizedProps:null,y=h.children,Wl(u,h)?y=null:f!==null&&Wl(u,f)&&(i.flags|=32),_h(t,i),Jt(t,i,y,a),i.child;case 6:return t===null&&Gl(i),null;case 13:return Mh(t,i,a);case 4:return sc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Hn(i,null,u,a):Jt(t,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ms(u,h),Nh(t,i,u,h,a);case 7:return Jt(t,i,i.pendingProps,a),i.child;case 8:return Jt(t,i,i.pendingProps.children,a),i.child;case 12:return Jt(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,f=i.memoizedProps,y=h.value,Ze(Yo,u._currentValue),u._currentValue=y,f!==null)if(Rs(f.value,y)){if(f.children===h.children&&!es.current){i=hr(t,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var k=f.dependencies;if(k!==null){y=f.child;for(var C=k.firstContext;C!==null;){if(C.context===u){if(f.tag===1){C=dr(-1,a&-a),C.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var ee=U.pending;ee===null?C.next=C:(C.next=ee.next,ee.next=C),U.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Zl(f.return,a,i),k.lanes|=a;break}C=C.next}}else if(f.tag===10)y=f.type===i.type?null:f.child;else if(f.tag===18){if(y=f.return,y===null)throw Error(n(341));y.lanes|=a,k=y.alternate,k!==null&&(k.lanes|=a),Zl(y,a,i),y=f.sibling}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===i){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}Jt(t,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Fn(i,a),h=Ss(h),u=u(h),i.flags|=1,Jt(t,i,u,a),i.child;case 14:return u=i.type,h=Ms(u,i.pendingProps),h=Ms(u.type,h),Th(t,i,u,h,a);case 15:return Ch(t,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ms(u,h),na(t,i),i.tag=1,ts(u)?(t=!0,$o(i)):t=!1,Fn(i,a),xh(i,u,h),pc(i,u,h,a),vc(null,i,u,!0,t,a);case 19:return Dh(t,i,a);case 22:return Eh(t,i,a)}throw Error(n(156,i.tag))};function im(t,i){return yo(t,i)}function Yg(t,i,a,u){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cs(t,i,a,u){return new Yg(t,i,a,u)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vg(t){if(typeof t=="function")return Wc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===V)return 11;if(t===ue)return 14}return 2}function zr(t,i){var a=t.alternate;return a===null?(a=Cs(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function pa(t,i,a,u,h,f){var y=2;if(u=t,typeof t=="function")Wc(t)&&(y=1);else if(typeof t=="string")y=5;else e:switch(t){case F:return un(a.children,h,f,i);case me:y=8,h|=8;break;case ke:return t=Cs(12,a,i,h|2),t.elementType=ke,t.lanes=f,t;case ne:return t=Cs(13,a,i,h),t.elementType=ne,t.lanes=f,t;case Y:return t=Cs(19,a,i,h),t.elementType=Y,t.lanes=f,t;case xe:return ga(a,h,f,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pe:y=10;break e;case X:y=9;break e;case V:y=11;break e;case ue:y=14;break e;case we:y=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Cs(y,a,i,h),i.elementType=t,i.type=u,i.lanes=f,i}function un(t,i,a,u){return t=Cs(7,t,u,i),t.lanes=a,t}function ga(t,i,a,u){return t=Cs(22,t,u,i),t.elementType=xe,t.lanes=a,t.stateNode={isHidden:!1},t}function $c(t,i,a){return t=Cs(6,t,null,i),t.lanes=a,t}function Hc(t,i,a){return i=Cs(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Gg(t,i,a,u,h){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fl(0),this.expirationTimes=fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Bc(t,i,a,u,h,f,y,k,C){return t=new Gg(t,i,a,k,C),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Cs(3,null,null,i),t.current=f,f.stateNode=t,f.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(f),t}function Kg(t,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:u==null?null:""+u,children:t,containerInfo:i,implementation:a}}function om(t){if(!t)return _r;t=t._reactInternals;e:{if(Ys(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ts(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(ts(a))return Id(t,a,i)}return i}function am(t,i,a,u,h,f,y,k,C){return t=Bc(a,u,!0,t,h,f,y,k,C),t.context=om(null),a=t.current,u=Qt(),h=Or(a),f=dr(u,h),f.callback=i??null,Ar(a,f,h),t.current.lanes=h,pi(t,h,u),ns(t,u),t}function ya(t,i,a,u){var h=i.current,f=Qt(),y=Or(h);return a=om(a),i.context===null?i.context=a:i.pendingContext=a,i=dr(f,y),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Ar(h,i,y),t!==null&&(Os(t,h,y,f),Go(t,h,y)),y}function xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Fc(t,i){lm(t,i),(t=t.alternate)&&lm(t,i)}function Jg(){return null}var cm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uc(t){this._internalRoot=t}va.prototype.render=Uc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ya(t,i,null,null)},va.prototype.unmount=Uc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;an(function(){ya(null,t,null,null)}),i[or]=null}};function va(t){this._internalRoot=t}va.prototype.unstable_scheduleHydration=function(t){if(t){var i=Yu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,t),a===0&&Ku(t)}};function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function Qg(t,i,a,u,h){if(h){if(typeof u=="function"){var f=u;u=function(){var U=xa(y);f.call(U)}}var y=am(i,u,t,0,null,!1,!1,"",um);return t._reactRootContainer=y,t[or]=y.current,_i(t.nodeType===8?t.parentNode:t),an(),y}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var k=u;u=function(){var U=xa(C);k.call(U)}}var C=Bc(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=C,t[or]=C.current,_i(t.nodeType===8?t.parentNode:t),an(function(){ya(i,C,a,u)}),C}function ba(t,i,a,u,h){var f=a._reactRootContainer;if(f){var y=f;if(typeof h=="function"){var k=h;h=function(){var C=xa(y);k.call(C)}}ya(i,y,t,h)}else y=Qg(a,i,t,h,u);return xa(y)}Uu=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=fi(i.pendingLanes);a!==0&&(pl(i,a|1),ns(i,it()),(Ye&6)===0&&(Gn=it()+500,Pr()))}break;case 13:an(function(){var u=ur(t,1);if(u!==null){var h=Qt();Os(u,t,1,h)}}),Fc(t,1)}},gl=function(t){if(t.tag===13){var i=ur(t,134217728);if(i!==null){var a=Qt();Os(i,t,134217728,a)}Fc(t,134217728)}},qu=function(t){if(t.tag===13){var i=Or(t),a=ur(t,i);if(a!==null){var u=Qt();Os(a,t,i,u)}Fc(t,i)}},Yu=function(){return Je},Vu=function(t,i){var a=Je;try{return Je=t,i()}finally{Je=a}},xr=function(t,i,a){switch(i){case"input":if(ct(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==t&&u.form===t.form){var h=zo(u);if(!h)throw Error(n(90));ge(u),ct(u,h)}}}break;case"textarea":Ps(t,a);break;case"select":i=a.value,i!=null&&rt(t,!!a.multiple,i,!1)}},He=Oc,Ke=an;var Xg={usingClientEntryPoint:!1,Events:[Ai,Dn,zo,Sn,Ee,Oc]},Yi={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zg={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=po(t),t===null?null:t.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||Jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Me=ka.inject(Zg),qe=ka}catch{}}return is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg,is.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(i))throw Error(n(200));return Kg(t,i,null,a)},is.createRoot=function(t,i){if(!qc(t))throw Error(n(299));var a=!1,u="",h=cm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Bc(t,1,!1,null,null,a,!1,u,h),t[or]=i.current,_i(t.nodeType===8?t.parentNode:t),new Uc(i)},is.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=po(i),t=t===null?null:t.stateNode,t},is.flushSync=function(t){return an(t)},is.hydrate=function(t,i,a){if(!wa(i))throw Error(n(200));return ba(null,t,i,!0,a)},is.hydrateRoot=function(t,i,a){if(!qc(t))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,h=!1,f="",y=cm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(y=a.onRecoverableError)),i=am(i,null,t,1,a??null,h,!1,f,y),t[or]=i.current,_i(t),u)for(t=0;t<u.length;t++)a=u[t],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new va(i)},is.render=function(t,i,a){if(!wa(i))throw Error(n(200));return ba(null,t,i,!1,a)},is.unmountComponentAtNode=function(t){if(!wa(t))throw Error(n(40));return t._reactRootContainer?(an(function(){ba(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1},is.unstable_batchedUpdates=Oc,is.unstable_renderSubtreeIntoContainer=function(t,i,a,u){if(!wa(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ba(t,i,a,!1,u)},is.version="18.3.1-next-f1338f8080-20240426",is}var xm;function Of(){if(xm)return Gc.exports;xm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gc.exports=oy(),Gc.exports}var vm;function ay(){if(vm)return ja;vm=1;var r=Of();return ja.createRoot=r.createRoot,ja.hydrateRoot=r.hydrateRoot,ja}var ly=ay();const cy=r=>r instanceof Error?r.message+`
`+(r.stack||""):JSON.stringify(r,null,2);class uy extends de.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("React Error:",e,n)}render(){return this.state.hasError?s.jsx("div",{className:"min-h-screen bg-gray-100 p-8",children:s.jsxs("div",{className:"max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg",children:[s.jsx("h2",{className:"text-xl font-bold text-red-600 mb-4",children:"Something went wrong."}),s.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[s.jsx("p",{className:"font-semibold text-red-800 mb-2",children:"Error Details:"}),s.jsx("pre",{className:"text-xs text-red-700 whitespace-pre-wrap break-all max-h-96 overflow-auto",children:cy(this.state.error)})]}),s.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90",children:"Reload Page"})]})}):this.props.children}}/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(r,e)=>{const n=A.forwardRef(({color:o="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:m="",children:p,...g},x)=>A.createElement("svg",{ref:x,...dy,width:l,height:l,stroke:o,strokeWidth:d?Number(c)*24/Number(l):c,className:["lucide",`lucide-${hy(r)}`,m].join(" "),...g},[...e.map(([w,b])=>A.createElement(w,b)),...Array.isArray(p)?p:[p]]));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=he("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=he("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=he("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=he("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=he("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=he("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=he("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=he("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=he("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=he("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=he("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=he("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=he("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=he("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=he("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=he("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=he("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=he("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=he("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=he("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=he("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=he("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=he("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=he("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=he("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=he("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=he("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=he("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=he("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=he("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=he("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=he("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=he("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=he("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=he("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=he("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z",key:"jj09z8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=he("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=he("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=he("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=he("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=he("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=he("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=he("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=he("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=he("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=he("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=he("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=he("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=he("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=he("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=he("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=he("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=he("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=he("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=he("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=he("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=he("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=he("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=he("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=he("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=he("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=he("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=he("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=he("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),oe=({children:r,variant:e="primary",size:n="md",fullWidth:o=!1,loading:l=!1,icon:c,iconPosition:d="left",className:m="",disabled:p,...g})=>{const x="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",w={primary:"bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 focus:ring-primary/50 shadow-lg shadow-primary/25",secondary:"bg-gradient-to-r from-secondary to-accent text-white hover:from-secondary/90 hover:to-accent/90 focus:ring-secondary/50 shadow-lg shadow-secondary/25",accent:"bg-gradient-to-r from-accent to-pink-500 text-white hover:from-accent/90 hover:to-pink-500/90 focus:ring-accent/50 shadow-lg shadow-accent/25",outline:"border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50 bg-transparent",ghost:"text-muted-foreground hover:bg-muted hover:text-foreground focus:ring-muted",danger:"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive/50",success:"bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 focus:ring-green-500/50 shadow-lg shadow-green-500/25"},b={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"},v={sm:"p-2",md:"p-3",lg:"p-4"},S=!r&&c;return s.jsx("button",{className:`
        ${x}
        ${w[e]}
        ${S?v[n]:b[n]}
        ${o?"w-full":""}
        ${m}
      `,disabled:p||l,...g,children:l?s.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[s.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),s.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):s.jsxs(s.Fragment,{children:[c&&d==="left"&&c,r,c&&d==="right"&&c]})})},te=({children:r,className:e="",hover:n=!1,gradient:o="none",onClick:l})=>{const c={primary:"bg-gradient-to-br from-primary to-secondary text-white",secondary:"bg-gradient-to-br from-secondary to-accent text-white",accent:"bg-gradient-to-br from-accent to-pink-500 text-white",none:"bg-card"};return s.jsx("div",{className:`
        rounded-2xl p-6 shadow-lg
        ${c[o]}
        ${n?"card-hover cursor-pointer":""}
        ${e}
      `,onClick:l,role:l?"button":void 0,tabIndex:l?0:void 0,children:r})},ls=de.forwardRef(({label:r,error:e,hint:n,icon:o,iconPosition:l="left",className:c="",...d},m)=>s.jsxs("div",{className:"space-y-1.5",children:[r&&s.jsx("label",{className:"block text-sm font-medium text-foreground",children:r}),s.jsxs("div",{className:"relative",children:[o&&l==="left"&&s.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",children:o}),s.jsx("input",{ref:m,className:`
              input-psych
              ${o&&l==="left"?"pl-10":""}
              ${o&&l==="right"?"pr-10":""}
              ${e?"border-destructive focus:border-destructive focus:ring-destructive/20":""}
              ${c}
            `,...d}),o&&l==="right"&&s.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",children:o})]}),e&&s.jsx("p",{className:"text-sm text-destructive",children:e}),n&&!e&&s.jsx("p",{className:"text-sm text-muted-foreground",children:n})]}));ls.displayName="Input";const Ry=de.forwardRef(({label:r,error:e,hint:n,className:o="",...l},c)=>s.jsxs("div",{className:"space-y-1.5",children:[r&&s.jsx("label",{className:"block text-sm font-medium text-foreground",children:r}),s.jsx("textarea",{ref:c,className:`
            input-psych min-h-[120px] resize-y
            ${e?"border-destructive focus:border-destructive focus:ring-destructive/20":""}
            ${o}
          `,...l}),e&&s.jsx("p",{className:"text-sm text-destructive",children:e}),n&&!e&&s.jsx("p",{className:"text-sm text-muted-foreground",children:n})]}));Ry.displayName="TextArea";const oi=({value:r,max:e=100,size:n="md",showLabel:o=!1,color:l="primary",className:c=""})=>{const d=Math.min(Math.max(r/e*100,0),100),m={sm:"h-1.5",md:"h-2.5",lg:"h-4"},p={primary:"bg-gradient-to-r from-primary to-secondary",secondary:"bg-gradient-to-r from-secondary to-accent",success:"bg-gradient-to-r from-success to-emerald-400",warning:"bg-gradient-to-r from-amber-400 to-yellow-500",danger:"bg-gradient-to-r from-destructive to-red-400",white:"bg-white",default:"bg-gradient-to-r from-gray-400 to-gray-500"};return s.jsxs("div",{className:`space-y-1 ${c}`,children:[o&&s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-muted-foreground",children:"Progress"}),s.jsxs("span",{className:"font-medium text-foreground",children:[Math.round(d),"%"]})]}),s.jsx("div",{className:`w-full bg-muted rounded-full overflow-hidden ${m[n]}`,children:s.jsx("div",{className:`h-full rounded-full transition-all duration-500 ease-out ${p[l]}`,style:{width:`${d}%`}})})]})},Ay=({value:r,max:e=100,size:n=120,strokeWidth:o=10,showValue:l=!0,color:c="primary",className:d=""})=>{const m=Math.min(Math.max(r/e*100,0),100),p=(n-o)/2,g=p*2*Math.PI,x=g-m/100*g,w={primary:"#6366F1",secondary:"#8B5CF6",success:"#10B981",warning:"#F59E0B",danger:"#EF4444",white:"#FFFFFF"};return s.jsxs("div",{className:`relative inline-flex items-center justify-center ${d}`,children:[s.jsxs("svg",{width:n,height:n,className:"-rotate-90",children:[s.jsx("circle",{cx:n/2,cy:n/2,r:p,fill:"none",stroke:"currentColor",strokeWidth:o,className:"text-muted"}),s.jsx("circle",{cx:n/2,cy:n/2,r:p,fill:"none",stroke:w[c],strokeWidth:o,strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:x,className:"transition-all duration-700 ease-out"})]}),l&&s.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[s.jsx("span",{className:"text-2xl font-bold text-foreground",children:Math.round(m)}),s.jsxs("span",{className:"text-xs text-muted-foreground",children:["/ ",e]})]})]})},We=({children:r,variant:e="default",size:n="md",icon:o,className:l="",style:c})=>{const d={default:"bg-muted text-muted-foreground",primary:"bg-primary/10 text-primary",secondary:"bg-secondary/10 text-secondary",accent:"bg-accent/10 text-accent",success:"bg-success/10 text-success",warning:"bg-amber-100 text-amber-700",danger:"bg-destructive/10 text-destructive",premium:"bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"},m={sm:"text-xs px-2 py-0.5",md:"text-sm px-2.5 py-1",lg:"text-base px-3 py-1.5"};return s.jsxs("span",{className:`
        inline-flex items-center gap-1 rounded-full font-medium
        ${d[e]}
        ${m[n]}
        ${l}
      `,style:c,children:[o,r]})},My=({tabs:r,activeTab:e,onTabChange:n,variant:o="default",className:l=""})=>o==="pills"?s.jsx("div",{className:`flex gap-2 p-1 bg-muted rounded-xl ${l}`,children:r.map(c=>s.jsxs("button",{onClick:()=>n(c.id),className:`
              flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
              transition-all duration-200
              ${e===c.id?"bg-white text-primary shadow-sm":"text-muted-foreground hover:text-foreground"}
            `,children:[c.icon,s.jsx("span",{className:"hidden sm:inline",children:c.label}),c.badge!==void 0&&c.badge>0&&s.jsx("span",{className:"ml-1 px-1.5 py-0.5 text-xs rounded-full bg-accent text-white",children:c.badge})]},c.id))}):o==="underline"?s.jsx("div",{className:`border-b border-border ${l}`,children:s.jsx("nav",{className:"flex gap-6",children:r.map(c=>s.jsxs("button",{onClick:()=>n(c.id),className:`
                pb-3 text-sm font-medium border-b-2 transition-colors
                flex items-center gap-2
                ${e===c.id?"border-primary text-primary":"border-transparent text-muted-foreground hover:text-foreground hover:border-muted"}
              `,children:[c.icon,c.label,c.badge!==void 0&&c.badge>0&&s.jsx("span",{className:"ml-1 px-1.5 py-0.5 text-xs rounded-full bg-accent text-white",children:c.badge})]},c.id))})}):s.jsx("nav",{className:`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border z-50 ${l}`,children:s.jsx("div",{className:"max-w-lg mx-auto px-4",children:s.jsx("div",{className:"flex justify-around",children:r.map(c=>s.jsxs("button",{onClick:()=>n(c.id),className:`
                flex flex-col items-center gap-1 py-3 px-4 min-w-[64px]
                transition-colors
                ${e===c.id?"text-primary":"text-muted-foreground hover:text-foreground"}
              `,children:[c.icon,s.jsx("span",{className:"text-xs font-medium",children:c.label}),c.badge!==void 0&&c.badge>0&&s.jsx("span",{className:"absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-accent text-white",children:c.badge>9?"9+":c.badge})]},c.id))})})}),zt=({isOpen:r,onClose:e,title:n,children:o,size:l="md",showCloseButton:c=!0,closeOnOverlayClick:d=!0,className:m=""})=>{const p=A.useRef(null);if(A.useEffect(()=>{const x=w=>{w.key==="Escape"&&e()};return r&&(document.addEventListener("keydown",x),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",x),document.body.style.overflow="unset"}},[r,e]),!r)return null;const g={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",full:"max-w-full mx-4"};return s.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[s.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:d?e:void 0}),s.jsxs("div",{ref:p,className:`
          relative w-full ${g[l]} bg-white rounded-2xl shadow-2xl
          animate-in fade-in zoom-in-95 duration-200
          ${m}
        `,role:"dialog","aria-modal":"true","aria-labelledby":n?"modal-title":void 0,children:[(n||c)&&s.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border",children:[n&&s.jsx("h2",{id:"modal-title",className:"text-lg font-serif font-semibold text-foreground",children:n}),c&&s.jsx("button",{onClick:e,className:"p-2 rounded-full hover:bg-muted transition-colors","aria-label":"Close modal",children:s.jsx(li,{size:20,className:"text-muted-foreground"})})]}),s.jsx("div",{className:"p-4 max-h-[70vh] overflow-y-auto",children:o})]})]})},_m=r=>{let e;const n=new Set,o=(g,x)=>{const w=typeof g=="function"?g(e):g;if(!Object.is(w,e)){const b=e;e=x??(typeof w!="object"||w===null)?w:Object.assign({},e,w),n.forEach(v=>v(e,b))}},l=()=>e,m={setState:o,getState:l,getInitialState:()=>p,subscribe:g=>(n.add(g),()=>n.delete(g))},p=e=r(o,l,m);return m},Iy=r=>r?_m(r):_m,Dy=r=>r;function Oy(r,e=Dy){const n=de.useSyncExternalStore(r.subscribe,de.useCallback(()=>e(r.getState()),[r,e]),de.useCallback(()=>e(r.getInitialState()),[r,e]));return de.useDebugValue(n),n}const Ly=r=>{const e=Iy(r),n=o=>Oy(e,o);return Object.assign(n,e),n},Ou=r=>Ly;function sl(r,e){let n;try{n=r()}catch{return}return{getItem:l=>{var c;const d=p=>p===null?null:JSON.parse(p,void 0),m=(c=n.getItem(l))!=null?c:null;return m instanceof Promise?m.then(d):d(m)},setItem:(l,c)=>n.setItem(l,JSON.stringify(c,void 0)),removeItem:l=>n.removeItem(l)}}const pu=r=>e=>{try{const n=r(e);return n instanceof Promise?n:{then(o){return pu(o)(n)},catch(o){return this}}}catch(n){return{then(o){return this},catch(o){return pu(o)(n)}}}},zy=(r,e)=>(n,o,l)=>{let c={storage:sl(()=>window.localStorage),partialize:j=>j,version:0,merge:(j,W)=>({...W,...j}),...e},d=!1,m=0;const p=new Set,g=new Set;let x=c.storage;if(!x)return r((...j)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),n(...j)},o,l);const w=()=>{const j=c.partialize({...o()});return x.setItem(c.name,{state:j,version:c.version})},b=l.setState;l.setState=(j,W)=>(b(j,W),w());const v=r((...j)=>(n(...j),w()),o,l);l.getInitialState=()=>v;let S;const T=()=>{var j,W;if(!x)return;const L=++m;d=!1,p.forEach(q=>{var K;return q((K=o())!=null?K:v)});const H=((W=c.onRehydrateStorage)==null?void 0:W.call(c,(j=o())!=null?j:v))||void 0;return pu(x.getItem.bind(x))(c.name).then(q=>{if(q)if(typeof q.version=="number"&&q.version!==c.version){if(c.migrate){const K=c.migrate(q.state,q.version);return K instanceof Promise?K.then(R=>[!0,R]):[!0,K]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,q.state];return[!1,void 0]}).then(q=>{var K;if(L!==m)return;const[R,F]=q;if(S=c.merge(F,(K=o())!=null?K:v),n(S,!0),R)return w()}).then(()=>{L===m&&(H==null||H(o(),void 0),S=o(),d=!0,g.forEach(q=>q(S)))}).catch(q=>{L===m&&(H==null||H(void 0,q))})};return l.persist={setOptions:j=>{c={...c,...j},j.storage&&(x=j.storage)},clearStorage:()=>{x==null||x.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>T(),hasHydrated:()=>d,onHydrate:j=>(p.add(j),()=>{p.delete(j)}),onFinishHydration:j=>(g.add(j),()=>{g.delete(j)})},c.skipHydration||T(),S||v},Lu=zy,Ot=[];for(let r=0;r<256;++r)Ot.push((r+256).toString(16).slice(1));function Wy(r,e=0){return(Ot[r[e+0]]+Ot[r[e+1]]+Ot[r[e+2]]+Ot[r[e+3]]+"-"+Ot[r[e+4]]+Ot[r[e+5]]+"-"+Ot[r[e+6]]+Ot[r[e+7]]+"-"+Ot[r[e+8]]+Ot[r[e+9]]+"-"+Ot[r[e+10]]+Ot[r[e+11]]+Ot[r[e+12]]+Ot[r[e+13]]+Ot[r[e+14]]+Ot[r[e+15]]).toLowerCase()}const $y=new Uint8Array(16);function Hy(){return crypto.getRandomValues($y)}function Lt(r,e,n){return crypto.randomUUID?crypto.randomUUID():By(r)}function By(r,e,n){var l;r=r||{};const o=r.random??((l=r.rng)==null?void 0:l.call(r))??Hy();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,Wy(o)}const Pm={id:"",name:"",email:"",birthYear:1975,menopauseStage:"perimenopause",symptomsStartDate:null,onboardingCompleted:!1,subscriptionTier:"free",createdAt:new Date().toISOString()},Rm={notifications:!0,dailyReminder:!0,reminderTime:"09:00",darkMode:!1,voiceJournaling:!1,aiPersona:"empathetic"},ae=Ou()(Lu((r,e)=>({language:"en",setLanguage:n=>r({language:n}),profile:Pm,setProfile:n=>r(o=>({profile:{...o.profile,...n,id:o.profile.id||Lt()}})),updateMenopauseStage:n=>r(o=>({profile:{...o.profile,menopauseStage:n}})),subscriptionTier:"free",setSubscriptionTier:n=>r(o=>({subscriptionTier:n,profile:{...o.profile,subscriptionTier:n}})),isPremium:()=>e().subscriptionTier==="premium",onboardingCompleted:!1,completeOnboarding:()=>r(n=>({onboardingCompleted:!0,profile:{...n.profile,onboardingCompleted:!0}})),symptoms:[],addSymptom:n=>r(o=>({symptoms:[...o.symptoms,{...n,id:Lt()}]})),updateSymptom:(n,o)=>r(l=>({symptoms:l.symptoms.map(c=>c.id===n?{...c,...o}:c)})),deleteSymptom:n=>r(o=>({symptoms:o.symptoms.filter(l=>l.id!==n)})),getSymptomsByDate:n=>e().symptoms.filter(o=>o.date===n),getSymptomsByCategory:n=>e().symptoms.filter(o=>o.category===n),moods:[],addMood:n=>r(o=>({moods:[...o.moods,{...n,id:Lt()}]})),updateMood:(n,o)=>r(l=>({moods:l.moods.map(c=>c.id===n?{...c,...o}:c)})),deleteMood:n=>r(o=>({moods:o.moods.filter(l=>l.id!==n)})),getMoodsByDate:n=>e().moods.filter(o=>o.date===n),cycles:[],addCycle:n=>r(o=>({cycles:[...o.cycles,{...n,id:Lt()}]})),updateCycle:(n,o)=>r(l=>({cycles:l.cycles.map(c=>c.id===n?{...c,...o}:c)})),deleteCycle:n=>r(o=>({cycles:o.cycles.filter(l=>l.id!==n)})),getCyclesByDate:n=>e().cycles.filter(o=>o.date===n),sleepEntries:[],addSleepEntry:n=>r(o=>{const l=o.sleepEntries.findIndex(c=>c.date===n.date);return l!==-1?{sleepEntries:o.sleepEntries.map((c,d)=>d===l?{...c,...n,id:c.id}:c)}:{sleepEntries:[...o.sleepEntries,{...n,id:Lt()}]}}),updateSleepEntry:(n,o)=>r(l=>({sleepEntries:l.sleepEntries.map(c=>c.id===n?{...c,...o}:c)})),deleteSleepEntry:n=>r(o=>({sleepEntries:o.sleepEntries.filter(l=>l.id!==n)})),getSleepByDate:n=>e().sleepEntries.find(o=>o.date===n),treatments:[],addTreatment:n=>r(o=>({treatments:[...o.treatments,{...n,id:Lt()}]})),updateTreatment:(n,o)=>r(l=>({treatments:l.treatments.map(c=>c.id===n?{...c,...o}:c)})),deleteTreatment:n=>r(o=>({treatments:o.treatments.filter(l=>l.id!==n)})),journals:[],addJournal:n=>r(o=>({journals:[...o.journals,{...n,id:Lt(),wordCount:n.content.split(/\s+/).filter(Boolean).length}]})),updateJournal:(n,o)=>r(l=>({journals:l.journals.map(c=>{const d={...c,...o};return o.content&&(d.wordCount=o.content.split(/\s+/).filter(Boolean).length),d})})),deleteJournal:n=>r(o=>({journals:o.journals.filter(l=>l.id!==n)})),forumPosts:[],addForumPost:n=>r(o=>({forumPosts:[...o.forumPosts,{...n,id:Lt(),createdAt:new Date().toISOString(),upvotes:0,downvotes:0,replyCount:0}]})),forumReplies:[],addForumReply:n=>r(o=>{const l={...n,id:Lt(),createdAt:new Date().toISOString(),upvotes:0};return{forumPosts:o.forumPosts.map(d=>d.id===n.postId?{...d,replyCount:d.replyCount+1}:d),forumReplies:[...o.forumReplies,l]}}),upvotePost:n=>r(o=>({forumPosts:o.forumPosts.map(l=>l.id===n?{...l,upvotes:l.upvotes+1}:l)})),downvotePost:n=>r(o=>({forumPosts:o.forumPosts.map(l=>l.id===n?{...l,downvotes:l.downvotes+1}:l)})),upvoteReply:n=>r(o=>({forumReplies:o.forumReplies.map(l=>l.id===n?{...l,upvotes:l.upvotes+1}:l)})),insights:[],addInsight:n=>r(o=>({insights:[{...n,id:Lt(),createdAt:new Date().toISOString(),isRead:!1},...o.insights]})),markInsightRead:n=>r(o=>({insights:o.insights.map(l=>l.id===n?{...l,isRead:!0}:l)})),clearInsights:()=>r({insights:[]}),chatHistory:[],addAIMessage:n=>r(o=>({chatHistory:[...o.chatHistory,{...n,id:Lt(),timestamp:new Date().toISOString()}]})),clearChatHistory:()=>r({chatHistory:[]}),careTeam:[],addCareTeamMember:n=>r(o=>({careTeam:[...o.careTeam,{...n,id:Lt()}]})),updateCareTeamMember:(n,o)=>r(l=>({careTeam:l.careTeam.map(c=>c.id===n?{...c,...o}:c)})),removeCareTeamMember:n=>r(o=>({careTeam:o.careTeam.filter(l=>l.id!==n)})),labResults:[],addLabResult:n=>r(o=>({labResults:[...o.labResults,{...n,id:Lt()}]})),updateLabResult:(n,o)=>r(l=>({labResults:l.labResults.map(c=>c.id===n?{...c,...o}:c)})),deleteLabResult:n=>r(o=>({labResults:o.labResults.filter(l=>l.id!==n)})),settings:Rm,updateSettings:n=>r(o=>({settings:{...o.settings,...n}})),completedChallenges:[],addCompletedChallenge:n=>r(o=>({completedChallenges:[...o.completedChallenges,{...n,completedAt:new Date().toISOString()}]})),coachCornerInterest:null,setCoachCornerInterest:n=>r(()=>({coachCornerInterest:{email:n,signedUpAt:new Date().toISOString()}})),trackingStreak:0,lastTrackingDate:null,updateStreak:()=>r(n=>{const o=new Date().toISOString().split("T")[0],l=new Date(Date.now()-864e5).toISOString().split("T")[0];return n.lastTrackingDate===o?n:n.lastTrackingDate===l?{trackingStreak:n.trackingStreak+1,lastTrackingDate:o}:{trackingStreak:1,lastTrackingDate:o}}),dailyReminder:!0,symptomReminderTimes:["09:00"],medicationReminderTimes:[],reminderTypes:["symptoms"],medicationReminders:[],soundEnabled:!0,setDailyReminder:n=>r({dailyReminder:n}),setSymptomReminderTimes:n=>r({symptomReminderTimes:n}),addSymptomReminderTime:n=>r(o=>({symptomReminderTimes:o.symptomReminderTimes.includes(n)?o.symptomReminderTimes:[...o.symptomReminderTimes,n].sort()})),removeSymptomReminderTime:n=>r(o=>({symptomReminderTimes:o.symptomReminderTimes.filter(l=>l!==n)})),setMedicationReminderTimes:n=>r({medicationReminderTimes:n}),addMedicationReminderTime:n=>r(o=>({medicationReminderTimes:o.medicationReminderTimes.includes(n)?o.medicationReminderTimes:[...o.medicationReminderTimes,n].sort()})),removeMedicationReminderTime:n=>r(o=>({medicationReminderTimes:o.medicationReminderTimes.filter(l=>l!==n)})),setReminderTypes:n=>r({reminderTypes:n}),setMedicationReminders:n=>r({medicationReminders:n}),toggleMedicationReminder:n=>r(o=>({medicationReminders:o.medicationReminders.map(l=>l.id===n?{...l,enabled:!l.enabled}:l)})),setSoundEnabled:n=>r({soundEnabled:n}),scheduleReminder:()=>{ae.getState().dailyReminder&&"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},resetAllData:()=>r({language:"en",profile:Pm,subscriptionTier:"free",onboardingCompleted:!1,symptoms:[],moods:[],cycles:[],sleepEntries:[],treatments:[],journals:[],forumPosts:[],forumReplies:[],insights:[],chatHistory:[],careTeam:[],labResults:[],settings:Rm,completedChallenges:[],coachCornerInterest:null,trackingStreak:0,lastTrackingDate:null,dailyReminder:!0,symptomReminderTimes:["09:00"],medicationReminderTimes:[],reminderTypes:["symptoms"],medicationReminders:[],soundEnabled:!0})}),{name:"psych-wise-storage",storage:sl(()=>localStorage),partialize:r=>({language:r.language,profile:r.profile,subscriptionTier:r.subscriptionTier,onboardingCompleted:r.onboardingCompleted,symptoms:r.symptoms,moods:r.moods,cycles:r.cycles,sleepEntries:r.sleepEntries,treatments:r.treatments,journals:r.journals,forumPosts:r.forumPosts,forumReplies:r.forumReplies,insights:r.insights,chatHistory:r.chatHistory,careTeam:r.careTeam,labResults:r.labResults,settings:r.settings,completedChallenges:r.completedChallenges,coachCornerInterest:r.coachCornerInterest,trackingStreak:r.trackingStreak,lastTrackingDate:r.lastTrackingDate,dailyReminder:r.dailyReminder,symptomReminderTimes:r.symptomReminderTimes,medicationReminderTimes:r.medicationReminderTimes,reminderTypes:r.reminderTypes,medicationReminders:r.medicationReminders,soundEnabled:r.soundEnabled})})),Fy=()=>{const r=ae(n=>n.symptoms),e=new Date().toISOString().split("T")[0];return A.useMemo(()=>r.filter(n=>n.date===e),[r,e])},Uy=()=>{const r=ae(n=>n.moods),e=new Date().toISOString().split("T")[0];return A.useMemo(()=>r.find(n=>n.date===e),[r,e])},qy=()=>{const r=ae(e=>e.treatments);return A.useMemo(()=>r.filter(e=>e.isActive),[r])},Yy=()=>{const r=ae(e=>e.insights);return A.useMemo(()=>r.filter(e=>!e.isRead),[r])},zu=()=>{const r=ae(n=>n.symptoms),e=ae(n=>n.moods);return A.useMemo(()=>{const n=new Date,o=new Date(n.getTime()-7*24*60*60*1e3),l=r.filter(R=>{const F=new Date(R.date);return F>=o&&F<=n}),c=e.filter(R=>{const F=new Date(R.date);return F>=o&&F<=n}),d=l.length>0?l.reduce((R,F)=>R+F.severity,0)/l.length:0,m=Math.round(d/10*100),p={great:0,good:20,okay:40,low:70,difficult:100},g=c.length>0?c.reduce((R,F)=>R+(p[F.moodLevel]||50),0)/c.length:50,x=Math.round(g),w=c.length>0?c.reduce((R,F)=>R+F.energyLevel,0)/c.length:5,b=Math.round((1-(w-1)/9)*100),v=l.filter(R=>R.category==="sleep"),S=v.length===0?20:Math.min(100,Math.round(v.reduce((R,F)=>R+F.severity/10*100,0))),T=Math.round(m*.35+x*.3+b*.2+S*.15),j=new Date(n.getTime()-14*24*60*60*1e3),W=r.filter(R=>{const F=new Date(R.date);return F>=j&&F<o}),L=W.length>0?W.reduce((R,F)=>R+F.severity,0)/W.length:0,H=L===0&&d===0?T:Math.round(L/10*100),q=T-H,K=q>5?"up":q<-5?"down":"stable";return{overall:T,sleepScore:S,moodScore:x,symptomScore:m,energyScore:b,trend:K,trendValue:q,lastUpdated:new Date().toISOString()}},[r.length,e.length])},Am="psychwise2024",Vy=[{id:"1",title:"Understanding Perimenopause Mood Changes",description:"Learn about the hormonal fluctuations that affect your mood during perimenopause and discover practical strategies for emotional balance.",eventType:"webinar",date:"2025-06-15",time:"2:00 PM EST",location:"Online / Zoom",isVirtual:!0,link:"https://zoom.us/j/example",isActive:!0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"2",title:"Hot Flash Hotties Support Group",description:"Connect with other women navigating menopause. Share experiences, tips, and support in a judgment-free space.",eventType:"support_group",date:"2025-06-19",time:"6:00 PM EST",location:"Online / Zoom",isVirtual:!0,link:"https://zoom.us/j/example2",isActive:!0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:"3",title:"Hormone Health Workshop",description:"An in-depth workshop covering hormone replacement therapy options, natural alternatives, and lifestyle modifications for optimal hormone balance.",eventType:"workshop",date:"2025-06-22",time:"10:00 AM PST",location:"San Diego, CA",isVirtual:!1,isActive:!0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}],Gy={id:"1",message:"Remember, you're not alone on this journey. Join me at our upcoming events to connect with other women and learn strategies that really work!",isActive:!0,createdAt:new Date().toISOString()},ui=Ou()(Lu((r,e)=>({isAdminLoggedIn:!1,adminPassword:Am,loginAdmin:n=>n===Am?(r({isAdminLoggedIn:!0}),!0):!1,logoutAdmin:()=>r({isAdminLoggedIn:!1}),events:Vy,addEvent:n=>r(o=>({events:[...o.events,{...n,id:Lt(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}]})),updateEvent:(n,o)=>r(l=>({events:l.events.map(c=>c.id===n?{...c,...o,updatedAt:new Date().toISOString()}:c)})),deleteEvent:n=>r(o=>({events:o.events.filter(l=>l.id!==n)})),toggleEventActive:n=>r(o=>({events:o.events.map(l=>l.id===n?{...l,isActive:!l.isActive,updatedAt:new Date().toISOString()}:l)})),getActiveEvents:()=>e().events.filter(n=>n.isActive),currentMessage:Gy,setStacyMessage:n=>r({currentMessage:{id:Lt(),message:n,isActive:!0,createdAt:new Date().toISOString()}}),clearStacyMessage:()=>r({currentMessage:null})}),{name:"psych-wise-admin-storage",storage:sl(()=>localStorage),partialize:r=>({events:r.events,currentMessage:r.currentMessage})})),Ky=()=>[...ui(e=>e.events)].sort((e,n)=>e.isActive!==n.isActive?e.isActive?-1:1:new Date(e.date).getTime()-new Date(n.date).getTime()),Jy=()=>{const r=ui(e=>e.events);return A.useMemo(()=>r.filter(e=>e.isActive).sort((e,n)=>new Date(e.date).getTime()-new Date(n.date).getTime()),[r])},Mm=r=>{try{const e=window.__APP_STORE_STATE__;e&&e.setSubscriptionTier(r)}catch{}},sr=Ou()(Lu((r,e)=>({isAuthenticated:!1,user:null,subscriptionTier:"free",subscriptionStatus:null,subscriptionEndDate:null,login:(n,o)=>{r({isAuthenticated:!0,user:{id:`user_${Date.now()}`,email:n,name:o,createdAt:new Date().toISOString()}})},logout:()=>{r({isAuthenticated:!1,user:null})},setSubscription:(n,o,l)=>{r({subscriptionTier:n,subscriptionStatus:o,subscriptionEndDate:l||null}),Mm(n)},cancelSubscription:()=>{r({subscriptionTier:"free",subscriptionStatus:"cancelled"}),Mm("free")},isPremium:()=>{const{subscriptionTier:n,subscriptionStatus:o}=e();return n==="premium"&&o==="active"}}),{name:"psych-wise-user-storage",storage:sl(()=>localStorage)})),gt={name:"Psych-Wise",creator:"Stacy Felix",credentials:"PMHNP, MSN, RN",tagline:"Your Hot Flash Hottie Wellness Companion",supportEmail:"support@psych-wise.com"},pn={physical:{label:"Physical",icon:"🔥",color:"#EF4444"},emotional:{label:"Emotional",icon:"💭",color:"#8B5CF6"},sleep:{label:"Sleep",icon:"🌙",color:"#3B82F6"},cognitive:{label:"Cognitive",icon:"🧠",color:"#F59E0B"},intimate:{label:"Intimate Health",icon:"💕",color:"#EC4899"}},Qy={physical:[{name:"Hot Flashes",emoji:"🔥"},{name:"Night Sweats",emoji:"💧"},{name:"Headaches",emoji:"🤕"},{name:"Joint Pain",emoji:"🦴"},{name:"Fatigue",emoji:"😴"},{name:"Weight Changes",emoji:"⚖️"},{name:"Heart Palpitations",emoji:"❤️"},{name:"Dizziness",emoji:"🌀"},{name:"Bloating",emoji:"🎈"},{name:"Nausea",emoji:"🤢"}],emotional:[{name:"Anxiety",emoji:"😰"},{name:"Mood Swings",emoji:"🎢"},{name:"Irritability",emoji:"😤"},{name:"Depression",emoji:"😢"},{name:"Feeling Overwhelmed",emoji:"😩"},{name:"Low Self-Esteem",emoji:"💔"}],sleep:[{name:"Difficulty Falling Asleep",emoji:"🌙"},{name:"Waking During Night",emoji:"⏰"},{name:"Early Awakening",emoji:"🐔"},{name:"Restless Legs",emoji:"🦵"},{name:"Vivid Dreams",emoji:"🌈"},{name:"Insomnia",emoji:"🚫"}],cognitive:[{name:"Brain Fog",emoji:"🌫️"},{name:"Forgetfulness",emoji:"🤔"},{name:"Difficulty Concentrating",emoji:"🎯"},{name:"Word-Finding Difficulty",emoji:"💭"}],intimate:[{name:"Vaginal Dryness",emoji:"🏜️"},{name:"Discomfort During Intimacy",emoji:"💫"},{name:"Urinary Changes",emoji:"🚽"},{name:"Changes in Libido",emoji:"💕"},{name:"Recurring Infections",emoji:"🦠"}]},Qi={great:"😊",good:"🙂",okay:"😐",low:"😔",difficult:"😢"},Ba={great:"Great",good:"Good",okay:"Okay",low:"Low",difficult:"Difficult"},gn={perimenopause:"Perimenopause",menopause:"Menopause",postmenopause:"Postmenopause"},Im={morning:"Morning (6am-12pm)",afternoon:"Afternoon (12pm-6pm)",evening:"Evening (6pm-9pm)",night:"Night (9pm-6am)"},gu={symptoms:{label:"Symptoms & Management",icon:"🦠",color:"#EF4444"},hormone_therapy:{label:"Hormone Therapy",icon:"💊",color:"#8B5CF6"},lifestyle:{label:"Lifestyle & Wellness",icon:"🥗",color:"#10B981"},mental_health:{label:"Mental Health",icon:"🧠",color:"#3B82F6"},relationships:{label:"Relationships",icon:"💕",color:"#EC4899"},work:{label:"Work & Career",icon:"💼",color:"#F59E0B"},general:{label:"General Discussion",icon:"💬",color:"#6366F1"},celebration:{label:"Celebrations",icon:"🎉",color:"#F97316"}},Xy={physical_health:{label:"Physical Health",icon:"💪"},mental_health:{label:"Mental Health",icon:"🧠"},nutrition:{label:"Nutrition",icon:"🥗"},exercise:{label:"Exercise",icon:"🏃"},medical_info:{label:"Medical Info",icon:"🏥"}},Zy=[{id:"brain-health",title:"Brain Health Bootcamp",description:"Combat brain fog and support cognitive function",category:"cognitive",duration:"4 weeks",lessonsCount:20,icon:"🧠",isPremium:!0},{id:"sleep-resilience",title:"Sleep Resilience Program",description:"Build better sleep habits for restful nights",category:"sleep",duration:"3 weeks",lessonsCount:15,icon:"😴",isPremium:!0},{id:"hot-flash-relief",title:"Hot Flash Relief",description:"Strategies to manage and reduce hot flashes",category:"physical",duration:"2 weeks",lessonsCount:12,icon:"🔥",isPremium:!0},{id:"mood-mastery",title:"Mood Mastery",description:"Navigate emotional changes with confidence",category:"emotional",duration:"4 weeks",lessonsCount:18,icon:"🎭",isPremium:!0},{id:"stress-reduction",title:"Stress Reduction",description:"Techniques for a calmer mind and body",category:"mental_health",duration:"3 weeks",lessonsCount:16,icon:"🧘",isPremium:!0}],Ta=[{id:"free",name:"Free",price:0,period:"forever",description:"Perfect for getting started",features:["Track up to 10 symptoms daily","Mood journaling (5 entries/month)","Basic period tracking","Community forum access (read only)","Expert articles (limited)"],limitations:["Limited symptom logging","No AI insights","No personalized recommendations","No treatment tracking","Ads displayed"],cta:"Get Started Free",highlighted:!1},{id:"premium-monthly",name:"Premium",price:9.99,period:"/month",description:"Full access to all features",stripePriceId:"price_monthly_id",features:["Unlimited symptom logging","Unlimited mood journaling","Advanced period tracking","Full community access (post, reply, vote)","AI-powered insights & patterns","Personalized recommendations","Treatment & supplement tracking","All wellness programs","Doctor visit reports (PDF)","Voice journaling","Priority support","Ad-free experience"],limitations:[],cta:"Start Free Trial",highlighted:!0},{id:"premium-yearly",name:"Premium Annual",price:59.99,period:"/year",description:"Save 50% vs monthly",stripePriceId:"price_yearly_id",savings:"Save $60/year",features:["Everything in Premium","Early access to new features","20% off telehealth consultations"],limitations:[],cta:"Start Annual Plan",highlighted:!1}],ex=[{id:"hot-flashes-guide",title:"Understanding Hot Flashes: Causes and Relief",category:"physical_health",excerpt:"A comprehensive guide to hot flashes, what triggers them, and evidence-based strategies for relief.",readTime:8,isPremium:!1,content:`
# Understanding Hot Flashes: Causes and Relief

Hot flashes are one of the most common symptoms of menopause, affecting up to 75% of women in perimenopause. They can be brief and mild or intense and disruptive.

## What Causes Hot Flashes?

Hot flashes occur when declining estrogen affects your body's temperature regulation in the hypothalamus (your brain's thermostat). When the hypothalamus mistakenly thinks your body is too hot, it triggers a chain of events to cool you down:

- Blood vessels near the skin surface dilate (causing redness)
- You start sweating to release heat
- Your heart rate may increase

## Common Triggers

While triggers vary from person to person, common ones include:
- **Spicy foods** and caffeine
- **Alcohol** consumption
- **Stress and anxiety**
- **Hot environments** (saunas, hot tubs)
- **Tight clothing** or heavy blankets
- **Smoking**

## Evidence-Based Relief Strategies

### Lifestyle Changes
1. **Keep your environment cool** - Use fans, keep bedroom temperature low
2. **Dress in layers** - Remove clothing when you feel a flash coming
3. **Avoid triggers** - Keep a journal to identify your personal triggers
4. **Practice deep breathing** - 4-7-8 breathing can help reduce intensity

### Dietary Approaches
- Increase **phytoestrogen-rich foods** like soy, flaxseed, and chickpeas
- Stay **hydrated** with 8-10 glasses of water daily
- Reduce **trigger foods** (spicy, caffeinated, alcoholic)
- Eat **smaller, more frequent meals**

### Natural Supplements
- **Black Cohosh** - Some studies show modest improvement
- **Evening Primrose Oil** - May help with frequency
- **Sage** - Traditional remedy with some scientific support
- **Red Clover** - Contains isoflavones that may help

### Medical Options
- **Hormone Therapy (HT)** - Most effective treatment; discuss risks/benefits with your doctor
- **Non-hormonal prescriptions** - Fezolinetant (Veozah), SSRIs like venlafaxine
- **Gabapentin** - Can reduce frequency and severity

## When to See a Doctor

If hot flashes significantly disrupt your daily life, sleep, or work, speak with a healthcare provider. Treatment options are available, and you don't have to suffer through them.

Remember: Every woman's experience is unique. What works for someone else may not work for you, so be patient as you find your personal relief strategy.
    `},{id:"sleep-solutions",title:"Sleep Solutions for Menopause",category:"physical_health",excerpt:"Why sleep changes during menopause and practical tips for better rest.",readTime:7,isPremium:!1,content:`
# Sleep Solutions for Menopause

Sleep disturbances affect up to 60% of women during menopause. Night sweats, hormonal changes, and increased anxiety can all contribute to poor sleep quality.

## Why Sleep Changes During Menopause

### Hormonal Factors
- **Declining estrogen** affects sleep regulation
- **Progesterone** (a natural sleep-promoting hormone) decreases
- **Melatonin** production may decline

### Physical Factors
- **Night sweats** can wake you multiple times nightly
- **Restless legs syndrome** becomes more common
- **Sleep apnea** risk increases

### Psychological Factors
- **Anxiety and depression** may increase
- **Stress** from life changes (empty nest, aging parents)
- **Worry about sleep itself** can create a cycle

## Practical Sleep Solutions

### Create the Right Environment
- **Keep your bedroom cool** (65-68°F/18-20°C)
- Use **cooling sheets and pillows**
- Consider a **chillable mattress pad**
- Block light with **blackout curtains**
- Use **white noise** to mask disturbances

### Establish a Sleep Routine
1. **Set a consistent bedtime** (even on weekends)
2. Create a **wind-down ritual** (reading, gentle stretching)
3. Avoid screens **1-2 hours before bed**
4. Keep a **gratitude journal** to offload worries

### Dietary Tips for Better Sleep
- Avoid **caffeine after 2 PM**
- Limit **alcohol** (disrupts second half of sleep)
- Don't eat **heavy meals** within 3 hours of bed
- Try a **small protein snack** before bed to stabilize blood sugar

### Exercise Smart
- Aim for **30 minutes of moderate exercise** daily
- **Avoid vigorous exercise** within 3 hours of bedtime
- **Evening yoga** or gentle stretching can promote relaxation
- **Walking** is excellent for sleep and stress reduction

### Natural Sleep Aids
- **Chamomile tea** - calming and caffeine-free
- **Magnesium** supplement (consult your doctor first)
- **Valerian root** - some evidence for mild sedation
- **Lavender** essential oil in a diffuser

### Cognitive Techniques
- **Sleep restriction therapy** - limit time in bed to actual sleep
- **Relaxation response** - progressive muscle relaxation
- **Paradoxical intention** - telling yourself to stay awake
- **Mindfulness meditation** - reduces nighttime anxiety

## When Sleep Problems Persist

If you've tried these strategies and still struggle with sleep, speak with your healthcare provider. You may benefit from:
- Sleep study to rule out sleep apnea
- Cognitive Behavioral Therapy for Insomnia (CBT-I)
- Short-term medication while you implement lifestyle changes

Sweet dreams are possible! It may take some experimentation to find what works for you.
    `},{id:"hormone-therapy",title:"Hormone Therapy: What You Need to Know",category:"medical_info",excerpt:"An evidence-based overview of hormone replacement therapy options.",readTime:12,isPremium:!1,content:`
# Hormone Therapy: What You Need to Know

Hormone therapy (HT) remains the most effective treatment for menopause symptoms. Understanding your options can help you make an informed decision with your healthcare provider.

## What is Hormone Therapy?

Hormone therapy (formerly called hormone replacement therapy or HRT) uses medications containing female hormones to replace the estrogen your body stops making during menopause.

### Types of Hormone Therapy

**Estrogen-Only Therapy (ET)**
- For women who have had a hysterectomy
- Lower risk since there's no progesterone component
- Available as pills, patches, gels, sprays, and creams

**Combined Estrogen-Progestin Therapy (EPT)**
- For women with an intact uterus
- Progestin protects against uterine cancer
- Available in various combinations and delivery methods

## Benefits of Hormone Therapy

### Strong Evidence Supports:
- **Reduces hot flashes** by 75-90%
- **Improves sleep quality**
- **Treats vaginal dryness** and atrophy
- **Prevents bone loss** and reduces fractures
- **May improve mood** and sense of well-being
- **May reduce risk of heart disease** when started early (within 10 years of menopause)

## Risks of Hormone Therapy

### What Research Shows:
- **Breast cancer risk** - Slightly increased with combined EPT (about 1 extra case per 1,000 women per year)
- **Blood clots** - Small increased risk, especially with oral pills
- **Stroke risk** - Small increased risk, particularly in older women
- **Heart disease** - May increase risk if started more than 10 years after menopause

### Risk Factors That Increase Complications:
- Personal or family history of breast cancer
- History of blood clots or stroke
- Heart disease
- Liver disease
- Uncontrolled high blood pressure

## Who Should NOT Use Hormone Therapy
- History of breast cancer or uterine cancer
- History of blood clots or stroke
- Liver disease
- Undiagnosed vaginal bleeding
- Known or suspected pregnancy

## Forms of Hormone Therapy

### Oral Pills
- Convenient and widely available
- Liver metabolizes the hormones
- Most studied form

### Transdermal (Patches, Gels, Sprays)
- Bypass the liver
- May have lower clot risk than pills
- Consistent hormone levels

### Vaginal Preparations
- Low-dose estrogen creams, tablets, or rings
- Primarily treats local symptoms
- Minimal systemic absorption

### Compounded Bioidentical Hormones
- Customized formulations
- Not FDA-regulated for safety or efficacy
- Controversial among medical professionals

## Making the Decision

### Questions to Discuss with Your Doctor:
1. What are my specific symptoms and how severe are they?
2. What are my personal risk factors?
3. What form of hormone therapy would be best for me?
4. How long should I stay on hormone therapy?
5. Are there alternatives I should consider?

### The "Timing Hypothesis"
Research suggests hormone therapy is safest when started:
- Within 10 years of menopause onset
- Before age 60
- At the lowest effective dose for the shortest duration

## Lifestyle Alternatives

While hormone therapy is effective, some women prefer or need alternatives:
- **Regular exercise** - can reduce hot flashes and improve sleep
- **Healthy diet** - supports overall well-being
- **Mind-body practices** - yoga, meditation, acupuncture
- **Prescription non-hormonal options** - SSRIs, gabapentin, fezolinetant

The decision to use hormone therapy is personal. Weigh the benefits against risks with your healthcare provider to find what works best for you.
    `},{id:"nutrition-menopause",title:"Eating for Menopause: A Nutrition Guide",category:"nutrition",excerpt:"Foods and supplements that support your body through transition.",readTime:10,isPremium:!1,content:`
# Eating for Menopause: A Nutrition Guide

What you eat can significantly impact how you feel during menopause. Certain foods can help manage symptoms while others may make them worse.

## Key Nutrients for Menopause

### Calcium and Vitamin D
**Why it's crucial:** Bone density decreases after menopause
**How much:** 1,200 mg calcium and 800-1000 IU vitamin D daily

**Best food sources:**
- Dairy products (milk, yogurt, cheese)
- Fortified plant milks
- Fatty fish (salmon, sardines)
- Egg yolks
- Fortified cereals

### Protein
**Why it's crucial:** Prevents muscle loss and supports metabolism
**How much:** 1.0-1.2 grams per kg of body weight daily

**Best food sources:**
- Lean meats and poultry
- Fish and seafood
- Eggs
- Legumes (beans, lentils)
- Greek yogurt
- Tofu and tempeh

### Omega-3 Fatty Acids
**Why it's crucial:** Supports heart and brain health, may reduce hot flashes
**How much:** 250-500 mg combined EPA and DHA daily

**Best food sources:**
- Fatty fish (salmon, mackerel, herring)
- Walnuts
- Chia seeds
- Flaxseeds
- Algal oil (plant-based omega-3)

### Fiber
**Why it's crucial:** Supports digestion and heart health
**How much:** 25-30 grams daily

**Best food sources:**
- Whole grains (oats, quinoa, brown rice)
- Fruits and vegetables
- Legumes
- Nuts and seeds

## Foods That May Help Manage Symptoms

### For Hot Flashes
- **Soy products** (tofu, tempeh, edamame) - contains isoflavones
- **Flaxseeds** - lignans may help balance hormones
- **Cooling foods** - cucumber, mint, melons
- **Avoid:** Spicy foods, caffeine, alcohol

### For Sleep
- **Turkey and chicken** - contain tryptophan
- **Nuts and seeds** - magnesium supports sleep
- **Cherries** - natural source of melatonin
- **Avoid:** Heavy meals, caffeine, sugar before bed

### For Mood Swings
- **Complex carbs** (whole grains) - stabilize blood sugar
- **Dark chocolate** (70%+ cocoa) - mood-boosting compounds
- **Bananas** - vitamin B6 and tryptophan
- **Leafy greens** - folate for neurotransmitter production

### For Vaginal Dryness
- **Phytoestrogen-rich foods** (soy, flaxseed)
- **Healthy fats** (olive oil, avocados, nuts)
- **Omega-3 foods** (fatty fish, walnuts)

## Foods to Limit or Avoid

### May Worsen Hot Flashes
- Caffeine
- Alcohol
- Spicy foods
- Processed foods
- Refined sugars

### May Affect Bone Health
- Excess sodium (leaches calcium)
- Too much protein (may increase calcium excretion)
- Soft drinks (phosphoric acid)

### May Disrupt Sleep
- Caffeine (watch for hidden sources)
- Heavy meals close to bedtime
- Alcohol

## Sample Day of Menopause-Friendly Eating

### Breakfast
- Greek yogurt with berries and walnuts
- Whole grain toast with almond butter

### Lunch
- Salmon salad with leafy greens
- Quinoa on the side
- Olive oil dressing

### Snack
- Apple with cheese
- Handful of almonds

### Dinner
- Grilled chicken breast
- Steamed vegetables
- Brown rice or quinoa

### Evening
- Chamomile tea
- Small handful of pumpkin seeds

## Supplements to Consider

Before starting any supplement, discuss with your healthcare provider:

1. **Calcium + Vitamin D** - If dietary intake is insufficient
2. **Omega-3** - If you don't eat fatty fish regularly
3. **Magnesium** - For sleep and muscle support
4. **Vitamin B complex** - For energy and mood
5. **Probiotics** - For gut health

Remember: Food first, supplements second. Whole foods provide nutrients in their most bioavailable forms along with fiber and other beneficial compounds.

## Quick Tips for Success
- Plan meals ahead
- Keep healthy snacks available
- Stay hydrated throughout the day
- Cook more at home
- Read labels and avoid hidden sugars
    `},{id:"brain-fog",title:"Clearing Brain Fog: Strategies That Work",category:"mental_health",excerpt:"Understanding cognitive changes and techniques to sharpen focus.",readTime:6,isPremium:!1,content:`
# Clearing Brain Fog: Strategies That Work

Many women experience "brain fog" during menopause - that fuzzy, forgetful feeling that makes it hard to concentrate or remember things. You're not imagining it, and there are strategies that can help.

## Why Does Brain Fog Happen?

### Hormonal Changes
- Estrogen affects neurotransmitters involved in memory and focus
- Declining progesterone can affect sleep quality (which affects cognition)
- Cortisol (stress hormone) levels may increase

### Related Factors
- Poor sleep (common during menopause)
- Night sweats disrupting rest
- Stress and anxiety
- Decreased blood flow to the brain
- Nutritional deficiencies

## Cognitive Strategies That Help

### Memory Techniques
1. **Chunking** - Break information into smaller pieces
   - Phone number: 555-123-4567 vs 5551234567

2. **Association** - Connect new info to things you know
   - New name: "Rose" - think of roses in your garden

3. **Visualization** - Create mental images
   - Remember "buy milk" - picture a cow giving milk chocolate

4. **Repetition** - Say things out loud multiple times

5. **Routines** - Put items in consistent places
   - Keys always on the hook by the door

### Focus Techniques
- **Single-tasking** - Do one thing at a time
- **Pomodoro method** - 25 minutes focused work, 5-minute break
- **Eliminate distractions** - Turn off notifications
- **Write things down** - Don't rely on memory

### Organization Tips
- Use a **planner or phone calendar**
- Set **reminders and alarms**
- Keep **to-do lists** (don't try to remember everything)
- Use **labeled containers and spots** for items

## Lifestyle Strategies

### Sleep
- Prioritize 7-9 hours of quality sleep
- Keep a consistent sleep schedule
- Address night sweats that disrupt sleep

### Exercise
- Regular aerobic exercise improves blood flow to the brain
- Aim for 150 minutes of moderate activity weekly
- Even daily walks make a difference

### Nutrition
- Eat regular meals to maintain stable blood sugar
- Include omega-3 fatty acids (brain food)
- Stay hydrated - even mild dehydration affects cognition
- Limit alcohol (impairs memory)

### Stress Management
- Chronic stress impairs memory and focus
- Try meditation, deep breathing, or yoga
- Make time for relaxation

## Brain-Boosting Foods

### Eat More Of:
- **Fatty fish** (salmon, sardines) - omega-3s
- **Blueberries** - antioxidants
- **Leafy greens** - vitamin K, folate
- **Nuts and seeds** - vitamin E, healthy fats
- **Avocados** - healthy fats, blood flow
- **Eggs** - choline for memory

### Avoid:
- Excessive sugar (causes brain fog)
- Processed foods
- Trans fats
- Too much alcohol

## Natural Supplements

Some women find these helpful (discuss with your doctor first):
- **Omega-3 fish oil** - supports brain health
- **Ginkgo biloba** - may improve circulation
- **Bacopa monnieri** - traditional memory support
- **Lion's Mane mushroom** - nervous system support
- **Ashwagandha** - may reduce stress-related brain fog

## When to Seek Help

See a healthcare provider if:
- Memory problems significantly interfere with daily life
- You're getting lost in familiar places
- You're repeating questions frequently
- You've noticed personality changes
- Symptoms came on suddenly

A proper evaluation can rule out other causes like thyroid issues, vitamin deficiencies, or medication effects.

## The Good News

Research shows that cognitive function often improves after the menopausal transition. Your brain is adapting to hormonal changes, not permanently damaged. In the meantime, use these strategies to work with your brain, not against it.

Remember: You're experiencing a normal hormonal transition, not early dementia. Be patient with yourself and celebrate small victories.
    `}],Dm=[{id:"age",question:"What is your age range?",type:"select",options:["40-44","45-49","50-54","55-59","60+"]},{id:"stage",question:"What stage of menopause are you experiencing?",type:"select",options:["Not sure","Perimenopause","Menopause","Postmenopause"]},{id:"topSymptoms",question:"What are your top 3 symptoms?",type:"multi_select",options:["Hot Flashes","Night Sweats","Sleep Issues","Mood Changes","Brain Fog","Fatigue","Weight Changes","Anxiety","Joint Pain","Intimate Health Changes"]},{id:"primaryGoal",question:"What is your primary goal?",type:"select",options:["Understand my symptoms better","Find relief from symptoms","Track my progress","Connect with others going through the same","Prepare for doctor visits"]},{id:"treatments",question:"Are you currently using any treatments?",type:"multi_select",options:["Hormone Therapy (HRT)","Supplements","Prescription Medications","None"]},{id:"doctorConsult",question:"Have you spoken to a healthcare provider about menopause?",type:"select",options:["Yes, regularly","Yes, occasionally","Not yet, but planning to","Not interested"]},{id:"howHeard",question:"How did you hear about Psych-Wise?",type:"select",options:["Google Search","Social Media","Friend/Family","Healthcare Provider","Other"]},{id:"consent",question:"Please review and accept our terms",type:"consent",required:!0}];function Yt(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function rr(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}function tx(r,e){const n=Yt(r);return isNaN(e)?rr(r,NaN):(n.setDate(n.getDate()+e),n)}function sx(r,e){const n=Yt(r);if(isNaN(e))return rr(r,NaN);const o=n.getDate(),l=rr(r,n.getTime());l.setMonth(n.getMonth()+e+1,0);const c=l.getDate();return o>=c?l:(n.setFullYear(l.getFullYear(),l.getMonth(),o),n)}const Yf=6048e5,rx=864e5;let nx={};function mo(){return nx}function ci(r,e){var m,p,g,x;const n=mo(),o=(e==null?void 0:e.weekStartsOn)??((p=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((x=(g=n.locale)==null?void 0:g.options)==null?void 0:x.weekStartsOn)??0,l=Yt(r),c=l.getDay(),d=(c<o?7:0)+c-o;return l.setDate(l.getDate()-d),l.setHours(0,0,0,0),l}function Ya(r){return ci(r,{weekStartsOn:1})}function Vf(r){const e=Yt(r),n=e.getFullYear(),o=rr(r,0);o.setFullYear(n+1,0,4),o.setHours(0,0,0,0);const l=Ya(o),c=rr(r,0);c.setFullYear(n,0,4),c.setHours(0,0,0,0);const d=Ya(c);return e.getTime()>=l.getTime()?n+1:e.getTime()>=d.getTime()?n:n-1}function Om(r){const e=Yt(r);return e.setHours(0,0,0,0),e}function Lm(r){const e=Yt(r),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+r-+n}function ix(r,e){const n=Om(r),o=Om(e),l=+n-Lm(n),c=+o-Lm(o);return Math.round((l-c)/rx)}function ox(r){const e=Vf(r),n=rr(r,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Ya(n)}function ax(r,e){const n=e*7;return tx(r,n)}function lx(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function cx(r){if(!lx(r)&&typeof r!="number")return!1;const e=Yt(r);return!isNaN(Number(e))}function ux(r){const e=Yt(r),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function dx(r){const e=Yt(r);return e.setDate(1),e.setHours(0,0,0,0),e}function hx(r){const e=Yt(r),n=rr(r,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function mx(r,e){var m,p;const n=mo(),o=n.weekStartsOn??((p=(m=n.locale)==null?void 0:m.options)==null?void 0:p.weekStartsOn)??0,l=Yt(r),c=l.getDay(),d=(c<o?-7:0)+6-(c-o);return l.setDate(l.getDate()+d),l.setHours(23,59,59,999),l}const fx={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},px=(r,e,n)=>{let o;const l=fx[r];return typeof l=="string"?o=l:e===1?o=l.one:o=l.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o};function Xc(r){return(e={})=>{const n=e.width?String(e.width):r.defaultWidth;return r.formats[n]||r.formats[r.defaultWidth]}}const gx={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yx={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xx={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vx={date:Xc({formats:gx,defaultWidth:"full"}),time:Xc({formats:yx,defaultWidth:"full"}),dateTime:Xc({formats:xx,defaultWidth:"full"})},wx={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},bx=(r,e,n,o)=>wx[r];function Gi(r){return(e,n)=>{const o=n!=null&&n.context?String(n.context):"standalone";let l;if(o==="formatting"&&r.formattingValues){const d=r.defaultFormattingWidth||r.defaultWidth,m=n!=null&&n.width?String(n.width):d;l=r.formattingValues[m]||r.formattingValues[d]}else{const d=r.defaultWidth,m=n!=null&&n.width?String(n.width):r.defaultWidth;l=r.values[m]||r.values[d]}const c=r.argumentCallback?r.argumentCallback(e):e;return l[c]}}const kx={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jx={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Sx={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Nx={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Tx={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Cx={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ex=(r,e)=>{const n=Number(r),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},_x={ordinalNumber:Ex,era:Gi({values:kx,defaultWidth:"wide"}),quarter:Gi({values:jx,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Gi({values:Sx,defaultWidth:"wide"}),day:Gi({values:Nx,defaultWidth:"wide"}),dayPeriod:Gi({values:Tx,defaultWidth:"wide",formattingValues:Cx,defaultFormattingWidth:"wide"})};function Ki(r){return(e,n={})=>{const o=n.width,l=o&&r.matchPatterns[o]||r.matchPatterns[r.defaultMatchWidth],c=e.match(l);if(!c)return null;const d=c[0],m=o&&r.parsePatterns[o]||r.parsePatterns[r.defaultParseWidth],p=Array.isArray(m)?Rx(m,w=>w.test(d)):Px(m,w=>w.test(d));let g;g=r.valueCallback?r.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const x=e.slice(d.length);return{value:g,rest:x}}}function Px(r,e){for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&e(r[n]))return n}function Rx(r,e){for(let n=0;n<r.length;n++)if(e(r[n]))return n}function Ax(r){return(e,n={})=>{const o=e.match(r.matchPattern);if(!o)return null;const l=o[0],c=e.match(r.parsePattern);if(!c)return null;let d=r.valueCallback?r.valueCallback(c[0]):c[0];d=n.valueCallback?n.valueCallback(d):d;const m=e.slice(l.length);return{value:d,rest:m}}}const Mx=/^(\d+)(th|st|nd|rd)?/i,Ix=/\d+/i,Dx={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ox={any:[/^b/i,/^(a|c)/i]},Lx={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zx={any:[/1/i,/2/i,/3/i,/4/i]},Wx={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$x={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Hx={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Bx={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Fx={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ux={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qx={ordinalNumber:Ax({matchPattern:Mx,parsePattern:Ix,valueCallback:r=>parseInt(r,10)}),era:Ki({matchPatterns:Dx,defaultMatchWidth:"wide",parsePatterns:Ox,defaultParseWidth:"any"}),quarter:Ki({matchPatterns:Lx,defaultMatchWidth:"wide",parsePatterns:zx,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Ki({matchPatterns:Wx,defaultMatchWidth:"wide",parsePatterns:$x,defaultParseWidth:"any"}),day:Ki({matchPatterns:Hx,defaultMatchWidth:"wide",parsePatterns:Bx,defaultParseWidth:"any"}),dayPeriod:Ki({matchPatterns:Fx,defaultMatchWidth:"any",parsePatterns:Ux,defaultParseWidth:"any"})},Yx={code:"en-US",formatDistance:px,formatLong:vx,formatRelative:bx,localize:_x,match:qx,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Vx(r){const e=Yt(r);return ix(e,hx(e))+1}function Gx(r){const e=Yt(r),n=+Ya(e)-+ox(e);return Math.round(n/Yf)+1}function Gf(r,e){var x,w,b,v;const n=Yt(r),o=n.getFullYear(),l=mo(),c=(e==null?void 0:e.firstWeekContainsDate)??((w=(x=e==null?void 0:e.locale)==null?void 0:x.options)==null?void 0:w.firstWeekContainsDate)??l.firstWeekContainsDate??((v=(b=l.locale)==null?void 0:b.options)==null?void 0:v.firstWeekContainsDate)??1,d=rr(r,0);d.setFullYear(o+1,0,c),d.setHours(0,0,0,0);const m=ci(d,e),p=rr(r,0);p.setFullYear(o,0,c),p.setHours(0,0,0,0);const g=ci(p,e);return n.getTime()>=m.getTime()?o+1:n.getTime()>=g.getTime()?o:o-1}function Kx(r,e){var m,p,g,x;const n=mo(),o=(e==null?void 0:e.firstWeekContainsDate)??((p=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(g=n.locale)==null?void 0:g.options)==null?void 0:x.firstWeekContainsDate)??1,l=Gf(r,e),c=rr(r,0);return c.setFullYear(l,0,o),c.setHours(0,0,0,0),ci(c,e)}function Jx(r,e){const n=Yt(r),o=+ci(n,e)-+Kx(n,e);return Math.round(o/Yf)+1}function Qe(r,e){const n=r<0?"-":"",o=Math.abs(r).toString().padStart(e,"0");return n+o}const $r={y(r,e){const n=r.getFullYear(),o=n>0?n:1-n;return Qe(e==="yy"?o%100:o,e.length)},M(r,e){const n=r.getMonth();return e==="M"?String(n+1):Qe(n+1,2)},d(r,e){return Qe(r.getDate(),e.length)},a(r,e){const n=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(r,e){return Qe(r.getHours()%12||12,e.length)},H(r,e){return Qe(r.getHours(),e.length)},m(r,e){return Qe(r.getMinutes(),e.length)},s(r,e){return Qe(r.getSeconds(),e.length)},S(r,e){const n=e.length,o=r.getMilliseconds(),l=Math.trunc(o*Math.pow(10,n-3));return Qe(l,e.length)}},Jn={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},zm={G:function(r,e,n){const o=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(o,{width:"abbreviated"});case"GGGGG":return n.era(o,{width:"narrow"});case"GGGG":default:return n.era(o,{width:"wide"})}},y:function(r,e,n){if(e==="yo"){const o=r.getFullYear(),l=o>0?o:1-o;return n.ordinalNumber(l,{unit:"year"})}return $r.y(r,e)},Y:function(r,e,n,o){const l=Gf(r,o),c=l>0?l:1-l;if(e==="YY"){const d=c%100;return Qe(d,2)}return e==="Yo"?n.ordinalNumber(c,{unit:"year"}):Qe(c,e.length)},R:function(r,e){const n=Vf(r);return Qe(n,e.length)},u:function(r,e){const n=r.getFullYear();return Qe(n,e.length)},Q:function(r,e,n){const o=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(o);case"QQ":return Qe(o,2);case"Qo":return n.ordinalNumber(o,{unit:"quarter"});case"QQQ":return n.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(o,{width:"wide",context:"formatting"})}},q:function(r,e,n){const o=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(o);case"qq":return Qe(o,2);case"qo":return n.ordinalNumber(o,{unit:"quarter"});case"qqq":return n.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(o,{width:"wide",context:"standalone"})}},M:function(r,e,n){const o=r.getMonth();switch(e){case"M":case"MM":return $r.M(r,e);case"Mo":return n.ordinalNumber(o+1,{unit:"month"});case"MMM":return n.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(o,{width:"wide",context:"formatting"})}},L:function(r,e,n){const o=r.getMonth();switch(e){case"L":return String(o+1);case"LL":return Qe(o+1,2);case"Lo":return n.ordinalNumber(o+1,{unit:"month"});case"LLL":return n.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(o,{width:"wide",context:"standalone"})}},w:function(r,e,n,o){const l=Jx(r,o);return e==="wo"?n.ordinalNumber(l,{unit:"week"}):Qe(l,e.length)},I:function(r,e,n){const o=Gx(r);return e==="Io"?n.ordinalNumber(o,{unit:"week"}):Qe(o,e.length)},d:function(r,e,n){return e==="do"?n.ordinalNumber(r.getDate(),{unit:"date"}):$r.d(r,e)},D:function(r,e,n){const o=Vx(r);return e==="Do"?n.ordinalNumber(o,{unit:"dayOfYear"}):Qe(o,e.length)},E:function(r,e,n){const o=r.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(o,{width:"short",context:"formatting"});case"EEEE":default:return n.day(o,{width:"wide",context:"formatting"})}},e:function(r,e,n,o){const l=r.getDay(),c=(l-o.weekStartsOn+8)%7||7;switch(e){case"e":return String(c);case"ee":return Qe(c,2);case"eo":return n.ordinalNumber(c,{unit:"day"});case"eee":return n.day(l,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(l,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(l,{width:"short",context:"formatting"});case"eeee":default:return n.day(l,{width:"wide",context:"formatting"})}},c:function(r,e,n,o){const l=r.getDay(),c=(l-o.weekStartsOn+8)%7||7;switch(e){case"c":return String(c);case"cc":return Qe(c,e.length);case"co":return n.ordinalNumber(c,{unit:"day"});case"ccc":return n.day(l,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(l,{width:"narrow",context:"standalone"});case"cccccc":return n.day(l,{width:"short",context:"standalone"});case"cccc":default:return n.day(l,{width:"wide",context:"standalone"})}},i:function(r,e,n){const o=r.getDay(),l=o===0?7:o;switch(e){case"i":return String(l);case"ii":return Qe(l,e.length);case"io":return n.ordinalNumber(l,{unit:"day"});case"iii":return n.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(o,{width:"short",context:"formatting"});case"iiii":default:return n.day(o,{width:"wide",context:"formatting"})}},a:function(r,e,n){const l=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(l,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(l,{width:"wide",context:"formatting"})}},b:function(r,e,n){const o=r.getHours();let l;switch(o===12?l=Jn.noon:o===0?l=Jn.midnight:l=o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(l,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(l,{width:"wide",context:"formatting"})}},B:function(r,e,n){const o=r.getHours();let l;switch(o>=17?l=Jn.evening:o>=12?l=Jn.afternoon:o>=4?l=Jn.morning:l=Jn.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(l,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(l,{width:"wide",context:"formatting"})}},h:function(r,e,n){if(e==="ho"){let o=r.getHours()%12;return o===0&&(o=12),n.ordinalNumber(o,{unit:"hour"})}return $r.h(r,e)},H:function(r,e,n){return e==="Ho"?n.ordinalNumber(r.getHours(),{unit:"hour"}):$r.H(r,e)},K:function(r,e,n){const o=r.getHours()%12;return e==="Ko"?n.ordinalNumber(o,{unit:"hour"}):Qe(o,e.length)},k:function(r,e,n){let o=r.getHours();return o===0&&(o=24),e==="ko"?n.ordinalNumber(o,{unit:"hour"}):Qe(o,e.length)},m:function(r,e,n){return e==="mo"?n.ordinalNumber(r.getMinutes(),{unit:"minute"}):$r.m(r,e)},s:function(r,e,n){return e==="so"?n.ordinalNumber(r.getSeconds(),{unit:"second"}):$r.s(r,e)},S:function(r,e){return $r.S(r,e)},X:function(r,e,n){const o=r.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return $m(o);case"XXXX":case"XX":return mn(o);case"XXXXX":case"XXX":default:return mn(o,":")}},x:function(r,e,n){const o=r.getTimezoneOffset();switch(e){case"x":return $m(o);case"xxxx":case"xx":return mn(o);case"xxxxx":case"xxx":default:return mn(o,":")}},O:function(r,e,n){const o=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Wm(o,":");case"OOOO":default:return"GMT"+mn(o,":")}},z:function(r,e,n){const o=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Wm(o,":");case"zzzz":default:return"GMT"+mn(o,":")}},t:function(r,e,n){const o=Math.trunc(r.getTime()/1e3);return Qe(o,e.length)},T:function(r,e,n){const o=r.getTime();return Qe(o,e.length)}};function Wm(r,e=""){const n=r>0?"-":"+",o=Math.abs(r),l=Math.trunc(o/60),c=o%60;return c===0?n+String(l):n+String(l)+e+Qe(c,2)}function $m(r,e){return r%60===0?(r>0?"-":"+")+Qe(Math.abs(r)/60,2):mn(r,e)}function mn(r,e=""){const n=r>0?"-":"+",o=Math.abs(r),l=Qe(Math.trunc(o/60),2),c=Qe(o%60,2);return n+l+e+c}const Hm=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Kf=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Qx=(r,e)=>{const n=r.match(/(P+)(p+)?/)||[],o=n[1],l=n[2];if(!l)return Hm(r,e);let c;switch(o){case"P":c=e.dateTime({width:"short"});break;case"PP":c=e.dateTime({width:"medium"});break;case"PPP":c=e.dateTime({width:"long"});break;case"PPPP":default:c=e.dateTime({width:"full"});break}return c.replace("{{date}}",Hm(o,e)).replace("{{time}}",Kf(l,e))},Xx={p:Kf,P:Qx},Zx=/^D+$/,ev=/^Y+$/,tv=["D","DD","YY","YYYY"];function sv(r){return Zx.test(r)}function rv(r){return ev.test(r)}function nv(r,e,n){const o=iv(r,e,n);if(console.warn(o),tv.includes(r))throw new RangeError(o)}function iv(r,e,n){const o=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ov=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,av=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lv=/^'([^]*?)'?$/,cv=/''/g,uv=/[a-zA-Z]/;function Xi(r,e,n){var x,w,b,v;const o=mo(),l=o.locale??Yx,c=o.firstWeekContainsDate??((w=(x=o.locale)==null?void 0:x.options)==null?void 0:w.firstWeekContainsDate)??1,d=o.weekStartsOn??((v=(b=o.locale)==null?void 0:b.options)==null?void 0:v.weekStartsOn)??0,m=Yt(r);if(!cx(m))throw new RangeError("Invalid time value");let p=e.match(av).map(S=>{const T=S[0];if(T==="p"||T==="P"){const j=Xx[T];return j(S,l.formatLong)}return S}).join("").match(ov).map(S=>{if(S==="''")return{isToken:!1,value:"'"};const T=S[0];if(T==="'")return{isToken:!1,value:dv(S)};if(zm[T])return{isToken:!0,value:S};if(T.match(uv))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return{isToken:!1,value:S}});l.localize.preprocessor&&(p=l.localize.preprocessor(m,p));const g={firstWeekContainsDate:c,weekStartsOn:d,locale:l};return p.map(S=>{if(!S.isToken)return S.value;const T=S.value;(rv(T)||sv(T))&&nv(T,e,String(r));const j=zm[T[0]];return j(m,T,l.localize,g)}).join("")}function dv(r){const e=r.match(lv);return e?e[1].replace(cv,"'"):r}function hv(r,e){return sx(r,-1)}function mv(r,e){return ax(r,-1)}const Bm=({onNavigate:r})=>{const e=ae(E=>E.profile),n=ae(E=>E.subscriptionTier),o=Fy(),l=Uy(),c=zu(),d=Yy(),m=qy(),p=Jy(),g=ui(E=>E.currentMessage),x=ae(E=>E.coachCornerInterest),w=ae(E=>E.setCoachCornerInterest),b=ae(E=>E.trackingStreak),v=ae(E=>E.updateStreak),S=ae(E=>E.dailyReminder),T=ae(E=>E.symptomReminderTimes),j=ae(E=>E.medicationReminderTimes),W=ae(E=>E.reminderTypes),L=ae(E=>E.medicationReminders),H=ae(E=>E.soundEnabled),q=ae(E=>E.setDailyReminder);ae(E=>E.setSymptomReminderTimes);const K=ae(E=>E.addSymptomReminderTime),R=ae(E=>E.removeSymptomReminderTime);ae(E=>E.setMedicationReminderTimes);const F=ae(E=>E.addMedicationReminderTime),me=ae(E=>E.removeMedicationReminderTime),ke=ae(E=>E.setReminderTypes),Pe=ae(E=>E.setMedicationReminders),X=ae(E=>E.toggleMedicationReminder),V=ae(E=>E.setSoundEnabled),ne=ae(E=>E.treatments);ae(E=>E.symptoms),ae(E=>E.moods);const[Y,ue]=A.useState(""),[we,xe]=A.useState(!1),[Q,G]=A.useState(!1),[J,N]=A.useState(!1),[B,fe]=A.useState("symptoms"),[I,ce]=A.useState("");A.useRef(null);const ye=A.useRef(new Set),P=n==="premium",D=()=>{if(H)try{const E=new(window.AudioContext||window.webkitAudioContext),_e=E.createOscillator(),Xe=E.createGain();_e.connect(Xe),Xe.connect(E.destination),_e.frequency.setValueAtTime(800,E.currentTime),_e.frequency.exponentialRampToValueAtTime(600,E.currentTime+.1),_e.frequency.exponentialRampToValueAtTime(800,E.currentTime+.2),_e.frequency.exponentialRampToValueAtTime(500,E.currentTime+.4),Xe.gain.setValueAtTime(.3,E.currentTime),Xe.gain.exponentialRampToValueAtTime(.01,E.currentTime+.5),_e.start(E.currentTime),_e.stop(E.currentTime+.5)}catch{console.log("Audio not supported")}},re=(E,_e)=>{"Notification"in window&&Notification.permission==="granted"&&new Notification(_e==="medication"?"Medication Reminder":"Psych-Wise Reminder",{body:E,icon:"/favicon.ico",tag:`psych-wise-reminder-${_e}`,requireInteraction:!0})},M=(E,_e,Xe)=>{const Oe=`${new Date().toISOString().split("T")[0]}-${E}-${_e}`;ye.current.has(Oe)||(ye.current.add(Oe),fe(_e),D(),N(!0),_e==="medication"&&Xe?re(`Time to take ${Xe}!`,"medication"):re("Time to log your symptoms! Track how you're feeling today.","symptoms"))};A.useEffect(()=>{if(!S)return;const E=()=>{const Xe=new Date,De=`${Xe.getHours().toString().padStart(2,"0")}:${Xe.getMinutes().toString().padStart(2,"0")}`;W.includes("symptoms")&&T.forEach(Oe=>{De===Oe&&M(Oe,"symptoms")}),W.includes("medication")&&j.forEach(Oe=>{De===Oe&&L.filter(cs=>cs.enabled).forEach(cs=>{M(Oe,"medication",cs.name)})})},_e=setInterval(E,6e4);return E(),()=>clearInterval(_e)},[S,T,j,W,L]),A.useEffect(()=>{S&&"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[S]),A.useEffect(()=>{(o.length>0||l)&&v()},[o.length,l,v]),A.useEffect(()=>{S&&"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[S]);const se=E=>{E.preventDefault(),Y.trim()&&(xe(!0),setTimeout(()=>{w(Y.trim()),ue(""),xe(!1)},500))},ge=E=>{q(E),E&&"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},je=E=>{T.includes(E)?R(E):K(E)},$e=E=>{j.includes(E)?me(E):F(E)},Ge=E=>{W.includes(E)?ke(W.filter(_e=>_e!==E)):ke([...W,E])},Ue=()=>{if(!I.trim())return;const E={id:Lt(),name:I.trim(),enabled:!0};Pe([...L,E]),ce("")},ct=E=>{Pe(L.filter(_e=>_e.id!==E))},_t=E=>{const[_e,Xe]=E.split(":").map(Number),De=_e>=12?"PM":"AM";return`${_e%12||12}:${Xe.toString().padStart(2,"0")} ${De}`},Vt=["06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"],Pt={webinar:s.jsx(fu,{size:18,className:"text-accent"}),support_group:s.jsx(tr,{size:18,className:"text-secondary"}),workshop:s.jsx(qa,{size:18,className:"text-primary"}),seminar:s.jsx(tr,{size:18,className:"text-secondary"}),other:s.jsx(Ur,{size:18,className:"text-muted-foreground"})},rt=E=>{switch(E){case"webinar":return"Register Free";case"support_group":return"Join Session";case"workshop":return"Learn More";case"seminar":return"Register";default:return"Learn More"}},Rt=()=>{const E=new Date().getHours();return E<12?"Good morning":E<17?"Good afternoon":"Good evening"},At=E=>{switch(E){case"up":return s.jsx(Fr,{size:20,className:"text-success"});case"down":return s.jsx(Uf,{size:20,className:"text-destructive"});default:return s.jsx(Hf,{size:20,className:"text-muted-foreground"})}},Ps=E=>{switch(E){case"up":return"Your wellness is improving";case"down":return"Take it easy, better days ahead";default:return"Steady progress, keep going"}},vs=["Every woman's journey is unique. Trust yours.","Your body is talking. We're here to help you listen.","Progress isn't always linear, and that's okay.","Today is a good day to be kind to yourself.","You deserve to feel seen, heard, and supported."][Math.floor(Math.random()*5)];return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"text-center py-2",children:[s.jsxs("h1",{className:"font-serif text-2xl font-semibold text-foreground",children:[Rt(),", ",e.name.split(" ")[0]]}),s.jsx("p",{className:"text-muted-foreground mt-1",children:Xi(new Date,"EEEE, MMMM d, yyyy")})]}),s.jsx("div",{className:"flex justify-center",children:s.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium",children:[s.jsx(Fe,{size:16}),gn[e.menopauseStage]]})}),s.jsxs(te,{className:"bg-gradient-to-br from-primary via-secondary to-accent text-white",children:[s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx(Ay,{value:c.overall,size:100,strokeWidth:8,color:"white",className:"shrink-0"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"text-white/80 text-sm font-medium mb-1",children:"Your Wellness Score"}),s.jsxs("p",{className:"text-2xl font-bold",children:[c.overall,"/100"]}),s.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[At(c.trend),s.jsx("span",{className:"text-sm text-white/90",children:Ps(c.trend)})]})]})]}),s.jsx("div",{className:"grid grid-cols-4 gap-3 mt-6 pt-4 border-t border-white/20",children:[{label:"Sleep",value:c.sleepScore,icon:s.jsx(wn,{size:16})},{label:"Mood",value:c.moodScore,icon:s.jsx(Et,{size:16})},{label:"Symptoms",value:c.symptomScore,icon:s.jsx(pt,{size:16})},{label:"Energy",value:c.energyScore,icon:s.jsx(qf,{size:16})}].map(E=>s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-8 h-8 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center text-white",children:E.icon}),s.jsx("p",{className:"text-lg font-bold",children:E.value}),s.jsx("p",{className:"text-xs text-white/70",children:E.label})]},E.label))})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsx(te,{hover:!0,onClick:()=>r("track"),children:s.jsx("div",{className:"text-center",children:l?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-4xl",children:Qi[l.moodLevel]}),s.jsx("p",{className:"text-lg font-semibold mt-2",children:Ba[l.moodLevel]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Energy: ",l.energyLevel,"/10"]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Et,{size:40,className:"mx-auto text-primary/40 mb-2"}),s.jsx("p",{className:"font-medium",children:"Log your mood"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"How are you feeling?"})]})})}),s.jsx(te,{hover:!0,onClick:()=>r("track"),children:s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"text-4xl font-bold text-primary",children:o.length}),s.jsxs("p",{className:"font-semibold mt-2",children:[o.length===1?"Symptom":"Symptoms"," logged"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"today"})]})})]}),m.length>0&&s.jsxs(te,{children:[s.jsxs("h3",{className:"font-semibold mb-3 flex items-center gap-2",children:[s.jsx(pt,{size:18,className:"text-primary"}),"Active Treatments"]}),s.jsx("div",{className:"space-y-2",children:m.slice(0,3).map(E=>s.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-border last:border-0",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:E.name}),s.jsx("p",{className:"text-sm text-muted-foreground",children:E.dosage})]}),s.jsx(We,{variant:E.type==="hormone_therapy"?"primary":"secondary",children:E.type==="hormone_therapy"?"HRT":"Supplement"})]},E.id))})]}),s.jsx(oe,{fullWidth:!0,size:"lg",onClick:()=>r("track"),icon:s.jsx(pt,{size:20}),children:"Log Today's Symptoms & Mood"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:"Crisis Support - Tap to Call"}),s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsxs("a",{href:"tel:988",className:"flex items-center gap-2 p-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors",children:[s.jsx(vn,{size:16}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-semibold",children:"988 Lifeline"}),s.jsx("p",{className:"text-xs text-white/80",children:"Suicide Prevention"})]})]}),s.jsxs("a",{href:"tel:911",className:"flex items-center gap-2 p-3 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors",children:[s.jsx(vn,{size:16}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-semibold",children:"911"}),s.jsx("p",{className:"text-xs text-white/80",children:"Emergency"})]})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsxs("a",{href:"sms:741741?body=HOME",className:"flex items-center gap-2 p-3 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors",children:[s.jsx(Iu,{size:16}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-semibold",children:"Text HOME"}),s.jsx("p",{className:"text-xs text-white/80",children:"Crisis Text Line"})]})]}),s.jsxs("a",{href:"tel:1-800-662-4357",className:"flex items-center gap-2 p-3 rounded-xl bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors",children:[s.jsx(vn,{size:16}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-semibold",children:"SAMHSA"}),s.jsx("p",{className:"text-xs text-white/80",children:"Helpline 24/7"})]})]})]})]}),s.jsx(te,{className:"bg-gradient-to-r from-lavender to-soft-peach border-0",children:s.jsxs("div",{className:"text-center py-2",children:[s.jsx(Fe,{size:24,className:"mx-auto text-primary/60 mb-2"}),s.jsxs("p",{className:"text-muted-foreground italic",children:['"',vs,'"']}),s.jsxs("p",{className:"text-sm text-muted-foreground/70 mt-2",children:["— ",gt.name]})]})}),d.length>0&&s.jsxs(te,{hover:!0,onClick:()=>r("track"),children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[s.jsx(Fe,{size:18,className:"text-accent"}),"New Insights"]}),s.jsxs(We,{variant:"accent",children:[d.length," new"]})]}),s.jsx("div",{className:"space-y-2",children:d.slice(0,2).map(E=>s.jsxs("div",{className:"p-3 rounded-lg bg-muted/50",children:[s.jsx("p",{className:"font-medium text-sm",children:E.title}),s.jsx("p",{className:"text-xs text-muted-foreground mt-1 line-clamp-2",children:E.description})]},E.id))}),s.jsx(oe,{variant:"ghost",size:"sm",className:"w-full mt-3",icon:s.jsx(ys,{size:16}),iconPosition:"right",children:"View all insights"})]}),s.jsxs(te,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[s.jsx(Ur,{size:18,className:"text-primary"}),"This Week"]}),s.jsx("button",{onClick:()=>G(!Q),className:"p-1.5 rounded-lg hover:bg-muted transition-colors",children:s.jsx(Ff,{size:16,className:"text-muted-foreground"})})]}),s.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shrink-0",children:s.jsx(du,{size:24,className:"text-white"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-baseline gap-2",children:[s.jsx("p",{className:"text-2xl font-bold text-orange-500",children:b}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"day streak"})]}),s.jsx("div",{className:"mt-2",children:s.jsx("div",{className:"flex gap-1",children:[...Array(7)].map((E,_e)=>s.jsx("div",{className:`w-6 h-6 rounded-full ${_e<b%7||b>=7?"bg-success":"bg-muted"}`},_e))})}),b>=7&&s.jsx(We,{variant:"success",size:"sm",className:"mt-2",children:"Streak bonus unlocked!"})]})]}),s.jsxs("div",{className:"flex items-start gap-3 pt-4 border-t border-border",children:[s.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${S?"bg-primary/10":"bg-muted"}`,children:s.jsx(wm,{size:24,className:S?"text-primary animate-pulse":"text-muted-foreground"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{className:"font-medium",children:"Daily Reminders"}),s.jsx("button",{onClick:()=>ge(!S),className:`relative w-11 h-6 rounded-full transition-colors ${S?"bg-primary":"bg-muted"}`,children:s.jsx("div",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${S?"translate-x-6":"translate-x-1"}`})})]}),S&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center justify-between mt-1",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:T.length+j.length>0?`${T.length+j.length} time${T.length+j.length>1?"s":""} set`:"No times selected"}),s.jsx("button",{onClick:()=>V(!H),className:"p-1 rounded hover:bg-muted transition-colors",title:H?"Sound On":"Sound Off",children:H?s.jsx(Cm,{size:16,className:"text-primary"}):s.jsx(Em,{size:16,className:"text-muted-foreground"})})]}),W.includes("symptoms")&&T.length>0&&s.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[s.jsx(pt,{size:12,className:"text-primary"}),s.jsx("div",{className:"flex flex-wrap gap-1",children:T.map(E=>s.jsx("span",{className:"px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full",children:_t(E)},`sym-${E}`))})]}),W.includes("medication")&&j.length>0&&s.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[s.jsx(Sa,{size:12,className:"text-accent"}),s.jsx("div",{className:"flex flex-wrap gap-1",children:j.map(E=>s.jsx("span",{className:"px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full",children:_t(E)},`med-${E}`))})]}),W.includes("medication")&&L.filter(E=>E.enabled).length>0&&s.jsx("div",{className:"flex flex-wrap gap-1 mt-2",children:L.filter(E=>E.enabled).map(E=>s.jsx("span",{className:"px-2 py-0.5 bg-accent/5 text-accent text-xs rounded-full border border-accent/20",children:E.name},E.id))})]}),!S&&s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Enable to get daily tracking reminders"})]})]}),Q&&s.jsxs("div",{className:"mt-4 p-4 bg-muted/50 rounded-lg space-y-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium mb-2",children:"Reminder Types"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{onClick:()=>Ge("symptoms"),className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${W.includes("symptoms")?"bg-primary text-white":"bg-white border border-border hover:border-primary"}`,children:[s.jsx(pt,{size:16}),"Symptoms"]}),s.jsxs("button",{onClick:()=>Ge("medication"),className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${W.includes("medication")?"bg-accent text-white":"bg-white border border-border hover:border-accent"}`,children:[s.jsx(Sa,{size:16}),"Medication"]})]})]}),W.includes("symptoms")&&s.jsxs("div",{children:[s.jsxs("p",{className:"text-sm font-medium mb-2 flex items-center gap-2",children:[s.jsx(pt,{size:14,className:"text-primary"}),"Symptom Times"]}),s.jsx("div",{className:"grid grid-cols-4 gap-2 max-h-40 overflow-y-auto",children:Vt.map(E=>{const _e=T.includes(E);return s.jsx("button",{onClick:()=>je(E),className:`px-2 py-1.5 rounded-lg text-xs transition-colors ${_e?"bg-primary text-white":"bg-white border border-border hover:border-primary"}`,children:_t(E)},`sym-${E}`)})})]}),W.includes("medication")&&s.jsxs("div",{className:"pt-3 border-t border-border/50",children:[s.jsxs("p",{className:"text-sm font-medium mb-2 flex items-center gap-2",children:[s.jsx(Sa,{size:14,className:"text-accent"}),"Medication Times"]}),s.jsx("div",{className:"grid grid-cols-4 gap-2 max-h-40 overflow-y-auto",children:Vt.map(E=>{const _e=j.includes(E);return s.jsx("button",{onClick:()=>$e(E),className:`px-2 py-1.5 rounded-lg text-xs transition-colors ${_e?"bg-accent text-white":"bg-white border border-border hover:border-accent"}`,children:_t(E)},`med-${E}`)})})]}),W.includes("medication")&&s.jsxs("div",{className:"pt-3 border-t border-border/50",children:[s.jsx("p",{className:"text-sm font-medium mb-2",children:"Medications to Remind"}),s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx("input",{type:"text",value:I,onChange:E=>ce(E.target.value),onKeyDown:E=>E.key==="Enter"&&Ue(),placeholder:"Add medication...",className:"flex-1 min-w-0 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"}),s.jsx(oe,{size:"sm",variant:"outline",onClick:Ue,icon:s.jsx(Yr,{size:14}),className:"shrink-0 whitespace-nowrap",children:"Add"})]}),s.jsxs("div",{className:"space-y-2 max-h-28 overflow-y-auto pr-1",children:[L.map(E=>s.jsxs("div",{className:"flex items-center justify-between bg-white p-2 rounded-lg border border-border",children:[s.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[s.jsx("button",{onClick:()=>X(E.id),className:`w-5 h-5 rounded border transition-colors flex items-center justify-center shrink-0 ${E.enabled?"bg-accent border-accent":"border-muted-foreground"}`,children:E.enabled&&s.jsx(Le,{size:12,className:"text-white"})}),s.jsx("span",{className:"text-sm truncate",children:E.name})]}),s.jsx("button",{onClick:()=>ct(E.id),className:"p-1 text-muted-foreground hover:text-destructive transition-colors shrink-0",children:s.jsx(tl,{size:14})})]},E.id)),ne.filter(E=>E.isActive).length>0&&s.jsxs(oe,{size:"sm",variant:"ghost",onClick:()=>{const E=ne.filter(_e=>_e.isActive&&!L.some(Xe=>Xe.name===_e.name)).map(_e=>({id:Lt(),name:_e.name,enabled:!0}));E.length>0&&Pe([...L,...E])},className:"w-full text-xs",children:[s.jsx(Yr,{size:12,className:"mr-1"}),"Import from treatments (",ne.filter(E=>E.isActive).length," available)"]})]})]}),s.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-border/50",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[H?s.jsx(Cm,{size:16,className:"text-primary"}):s.jsx(Em,{size:16,className:"text-muted-foreground"}),s.jsx("span",{className:"text-sm",children:"Sound Alert"})]}),s.jsx("button",{onClick:()=>V(!H),className:`relative w-11 h-6 rounded-full transition-colors ${H?"bg-primary":"bg-muted"}`,children:s.jsx("div",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${H?"translate-x-6":"translate-x-1"}`})})]}),"Notification"in window&&Notification.permission==="denied"&&s.jsx("div",{className:"p-3 bg-amber-50 border border-amber-200 rounded-lg",children:s.jsx("p",{className:"text-xs text-amber-700",children:"Notifications are blocked. Enable in your browser settings to receive desktop notifications."})}),"Notification"in window&&Notification.permission==="default"&&s.jsxs("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded-lg",children:[s.jsx("p",{className:"text-xs text-blue-700",children:"Click enable below to allow browser notifications."}),s.jsx("button",{onClick:()=>Notification.requestPermission(),className:"mt-2 text-xs text-primary font-medium underline",children:"Enable Notifications"})]})]})]}),s.jsxs(te,{className:P?"bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200":"",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[s.jsx(Fr,{size:18,className:"text-purple-500"}),"Advanced Analytics"]}),P?s.jsxs(We,{variant:"premium",size:"sm",className:"flex items-center gap-1",children:[s.jsx(Fe,{size:12})," PREMIUM"]}):s.jsx(We,{variant:"secondary",size:"sm",children:"Free"})]}),P?s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>r==null?void 0:r("track"),className:"w-full text-left p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center",children:s.jsx(pt,{size:18,className:"text-purple-500"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"font-semibold text-sm",children:"Pattern Detection"}),s.jsx(We,{variant:"premium",size:"sm",className:"text-[10px]",children:"PREMIUM"})]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"AI-powered symptom correlations"})]}),s.jsx(ys,{size:16,className:"text-purple-400"})]}),s.jsxs("div",{className:"mt-3 p-3 bg-green-50 rounded-lg border border-green-200",children:[s.jsx("p",{className:"text-sm font-medium text-green-700",children:"Hot flashes correlate with stress levels"}),s.jsx("p",{className:"text-xs text-green-600 mt-1",children:"Correlation strength: 78%"})]})]}),s.jsxs("button",{onClick:()=>r==null?void 0:r("track"),className:"w-full text-left p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center",children:s.jsx(Fr,{size:18,className:"text-blue-500"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"font-semibold text-sm",children:"Trend Predictions"}),s.jsx(We,{variant:"premium",size:"sm",className:"text-[10px]",children:"PREMIUM"})]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Forecast your symptom patterns"})]}),s.jsx(ys,{size:16,className:"text-blue-400"})]}),s.jsxs("div",{className:"mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200",children:[s.jsx("p",{className:"text-sm font-medium text-blue-700",children:"Your symptoms may improve next week"}),s.jsx("p",{className:"text-xs text-blue-600 mt-1",children:"Based on your 30-day trend"})]})]}),s.jsxs("button",{onClick:()=>r==null?void 0:r("track"),className:"w-full text-left p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center",children:s.jsx(km,{size:18,className:"text-orange-500"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"font-semibold text-sm",children:"Symptom Hotspots"}),s.jsx(We,{variant:"premium",size:"sm",className:"text-[10px]",children:"PREMIUM"})]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"When & where symptoms occur"})]}),s.jsx(ys,{size:16,className:"text-orange-400"})]}),s.jsxs("div",{className:"mt-3 flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200",children:[s.jsx(qr,{size:16,className:"text-orange-500"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium text-orange-700",children:"Peak time: Evening (6-9 PM)"}),s.jsx("p",{className:"text-xs text-orange-600",children:"Most symptoms logged during this window"})]})]})]})]}):s.jsxs("div",{className:"text-center py-6",children:[s.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center",children:s.jsx(Fr,{size:28,className:"text-muted-foreground"})}),s.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:"Unlock powerful insights with Premium"}),s.jsxs("div",{className:"space-y-2 text-left bg-muted/50 p-4 rounded-lg mt-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-success",children:"✓"}),s.jsx("span",{children:"AI Pattern Detection"}),s.jsx(We,{variant:"premium",size:"sm",className:"text-[10px] ml-auto",children:"PREMIUM"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-success",children:"✓"}),s.jsx("span",{children:"Symptom Trend Predictions"}),s.jsx(We,{variant:"premium",size:"sm",className:"text-[10px] ml-auto",children:"PREMIUM"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-success",children:"✓"}),s.jsx("span",{children:"Symptom Hotspot Analysis"}),s.jsx(We,{variant:"premium",size:"sm",className:"text-[10px] ml-auto",children:"PREMIUM"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-success",children:"✓"}),s.jsx("span",{children:"Personalized Recommendations"}),s.jsx(We,{variant:"premium",size:"sm",className:"text-[10px] ml-auto",children:"PREMIUM"})]})]}),s.jsx(oe,{size:"sm",variant:"outline",className:"mt-4",onClick:()=>r("subscription"),children:"Upgrade to Premium"})]})]}),s.jsx(te,{hover:!0,onClick:()=>r("about"),className:"bg-gradient-to-r from-lavender to-soft-peach",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-2xl font-semibold shrink-0 overflow-hidden",children:s.jsx("img",{src:"/images/stacy-felix.jpg",alt:"Stacy Felix",className:"w-full h-full object-cover"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("h3",{className:"font-semibold",children:["Meet ",gt.creator]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:gt.credentials}),s.jsxs(oe,{variant:"ghost",size:"sm",className:"mt-2 -ml-2",children:["Read her story ",s.jsx(ys,{size:14})]})]})]})}),s.jsxs(te,{className:"bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 relative overflow-hidden",children:[s.jsxs("div",{className:"absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center text-center p-6 rounded-xl",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4",children:s.jsx(Fe,{size:32,className:"text-primary"})}),s.jsx(We,{variant:"premium",size:"sm",className:"mb-3",children:"COMING SOON"}),s.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Coach's Corner"}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Exclusive webinars, workshops, and one-on-one coaching sessions with menopause experts coming soon!"}),x?s.jsxs("div",{className:"flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full",children:[s.jsx(Le,{size:18}),s.jsx("span",{className:"text-sm font-medium",children:"You're on the list!"})]}):s.jsxs("form",{onSubmit:se,className:"w-full max-w-xs space-y-2",children:[s.jsxs("div",{className:"flex items-center gap-2 bg-white border border-primary/20 rounded-lg px-3 py-2",children:[s.jsx(Zs,{size:16,className:"text-muted-foreground shrink-0"}),s.jsx("input",{type:"email",value:Y,onChange:E=>ue(E.target.value),placeholder:"Enter your email",className:"flex-1 text-sm outline-none bg-transparent",required:!0})]}),s.jsx(oe,{type:"submit",variant:"outline",size:"sm",className:"w-full",disabled:we,children:we?"Signing up...":"Notify Me When Available"})]})]}),s.jsxs("div",{className:"blur-sm pointer-events-none select-none","aria-hidden":"true",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 overflow-hidden",children:s.jsx("img",{src:"/images/stacy-felix.jpg",alt:"Stacy",className:"w-full h-full object-cover"})}),s.jsxs("div",{children:[s.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[s.jsx(ky,{size:18,className:"text-primary"}),"Coach's Corner"]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Updates from Stacy"})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("h4",{className:"text-sm font-medium text-muted-foreground flex items-center gap-2",children:[s.jsx(Ur,{size:14}),"Upcoming Events"]}),p.slice(0,3).map(E=>s.jsx("div",{className:"p-3 rounded-lg bg-white/80 border border-primary/10",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${E.eventType==="webinar"?"bg-accent/20":E.eventType==="support_group"?"bg-secondary/20":E.eventType==="workshop"?"bg-primary/20":"bg-muted"}`,children:Pt[E.eventType]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-medium text-sm",children:E.title}),s.jsxs("div",{className:"flex items-center gap-3 mt-1 text-xs text-muted-foreground",children:[s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(qr,{size:12}),E.time]}),s.jsxs("span",{className:"flex items-center gap-1",children:[E.isVirtual?s.jsx(fu,{size:12}):s.jsx(km,{size:12}),E.location]})]}),E.link&&s.jsx(oe,{variant:"outline",size:"sm",className:"mt-2 h-7 text-xs",onClick:()=>window.open(E.link,"_blank"),children:rt(E.eventType)})]})]})},E.id))]}),g&&s.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-lavender/30 border border-lavender/40",children:[s.jsxs("p",{className:"text-sm italic text-muted-foreground",children:['"',g.message,'"']}),s.jsx("p",{className:"text-xs font-medium text-primary mt-2",children:"— Stacy"})]}),s.jsx(oe,{variant:"ghost",size:"sm",fullWidth:!0,className:"mt-3",icon:s.jsx(ys,{size:14}),iconPosition:"right",children:"View All Events"})]})]}),s.jsx(te,{hover:!0,onClick:()=>r("community"),className:"bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0",children:s.jsx(tr,{size:28,className:"text-white"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-semibold",children:"Hot Flash Hotties Community"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Connect with women who understand"})]}),s.jsx(oe,{variant:"ghost",size:"sm",icon:s.jsx(ys,{size:18}),iconPosition:"right",children:"Join"})]})}),J&&s.jsx("div",{className:"fixed bottom-4 left-4 right-4 max-w-md mx-auto z-50 animate-slide-up",children:s.jsxs("div",{className:`rounded-2xl p-4 shadow-2xl text-white ${B==="medication"?"bg-gradient-to-r from-accent to-pink-500":"bg-gradient-to-r from-primary to-secondary"}`,children:[s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-bounce",children:B==="medication"?s.jsx(Sa,{size:24,className:"text-white"}):s.jsx(wm,{size:24,className:"text-white"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:"font-semibold text-lg",children:B==="medication"?"Medication Reminder":"Time to Track!"}),s.jsx("p",{className:"text-white/90 text-sm mt-1",children:B==="medication"?"Don't forget to take your medication. Your health is important!":"Don't forget to log your symptoms and mood today. Your wellness journey continues with each entry."})]}),s.jsx("button",{onClick:()=>N(!1),className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors shrink-0","aria-label":"Dismiss notification",children:s.jsx(li,{size:18,className:"text-white"})})]}),s.jsx("div",{className:"flex gap-2 mt-4",children:B==="symptoms"?s.jsxs(s.Fragment,{children:[s.jsx(oe,{onClick:()=>{N(!1),r("track")},className:"flex-1 bg-white text-primary hover:bg-white/90",size:"sm",children:"Log Now"}),s.jsx(oe,{onClick:()=>N(!1),variant:"ghost",className:"text-white hover:bg-white/20",size:"sm",children:"Later"})]}):s.jsx(oe,{onClick:()=>N(!1),className:"flex-1 bg-white text-accent hover:bg-white/90",size:"sm",children:"Got it!"})})]})})]})},fv=({onNavigate:r})=>{const[e,n]=A.useState("symptoms"),[o,l]=A.useState("today"),[c,d]=A.useState("week"),[m,p]=A.useState("overview"),[g,x]=A.useState(!1),[w,b]=A.useState("physical"),[v,S]=A.useState(!1),[T,j]=A.useState(null),[W,L]=A.useState(5),[H,q]=A.useState("morning"),[K,R]=A.useState(!1),[F,me]=A.useState(""),[ke,Pe]=A.useState("okay"),[X,V]=A.useState(5),[ne,Y]=A.useState(""),[ue,we]=A.useState(""),[xe,Q]=A.useState(!1),[G,J]=A.useState(7),[N,B]=A.useState(3),[fe,I]=A.useState(0),[ce,ye]=A.useState(""),[P,D]=A.useState(!1),[re,M]=A.useState(!1),[se,ge]=A.useState(""),[je,$e]=A.useState("supplement"),[Ge,Ue]=A.useState(""),[ct,_t]=A.useState(!1),[Vt,Pt]=A.useState(""),[rt,Rt]=A.useState(!1),[At,Ps]=A.useState(!1),[vs,E]=A.useState(!1),_e=A.useRef(null),[Xe,De]=A.useState(!1),Oe=ae(z=>z.addSymptom),cs=ae(z=>z.addMood),kn=ae(z=>z.addSleepEntry),us=ae(z=>z.symptoms),Gt=ae(z=>z.moods),jn=ae(z=>z.sleepEntries),Kt=ae(z=>z.profile),Vr=ae(z=>z.insights);ae(z=>z.markInsightRead);const Gr=ae(z=>z.subscriptionTier);zu();const Fs=ae(z=>z.journals),xr=ae(z=>z.addJournal),Us=ae(z=>z.deleteJournal);A.useEffect(()=>{if(typeof window<"u"){const z=window.SpeechRecognition||window.webkitSpeechRecognition;if(z){Ps(!0);const Me=new z;Me.continuous=!0,Me.interimResults=!0,Me.lang="en-US",Me.onresult=qe=>{let bs="";for(let ut=0;ut<qe.results.length;ut++)bs+=qe.results[ut][0].transcript;Pt(bs)},Me.onerror=qe=>{console.log("Speech recognition error:",qe.error),Rt(!1),qe.error==="not-allowed"&&E(!0)},Me.onend=()=>{Rt(!1)},_e.current=Me}else Ps(!1)}},[]);const ws=async()=>{try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(Me=>Me.stop()),E(!1)}catch{console.log("Microphone permission denied"),E(!0);return}if(_e.current)try{_e.current.start(),Rt(!0)}catch{console.log("Recognition already started")}},ds=()=>{_e.current&&(_e.current.stop(),Rt(!1))},Sn=()=>{rt?ds():ws()},Ee=new Date().toISOString().split("T")[0],He=Gr==="premium",Ke=10,vt=5,Mt=us.filter(z=>z.date===Ee).length,Wt=He||Mt<Ke,Xt=Math.max(0,Ke-Mt),wt=new Date().toISOString().slice(0,7),hs=Gt.filter(z=>z.date.startsWith(wt)).length,vr=He||hs<vt,wr=Math.max(0,vt-hs),ir=A.useMemo(()=>{const z=new Date;let Me=null,qe=z;switch(o){case"today":Me=new Date(Ee),qe=new Date(Ee);break;case"week":Me=ci(mv(z)),qe=mx(z);break;case"month":Me=dx(hv(z)),qe=ux(z);break;case"all":Me=null,qe=null;break}return us.filter(bs=>{const ut=new Date(bs.date);return Me&&qe?ut>=Me&&ut<=qe:!0})},[us,o]),Kr=us.filter(z=>z.date===Ee),Nn=Gt.find(z=>z.date===Ee),qs=jn.find(z=>z.date===Ee),al=()=>{const z=new Date,Me=c==="week"?7:c==="month"?30:90;return{startDate:new Date(z.getTime()-Me*24*60*60*1e3),endDate:z}},{startDate:Ys,endDate:hi}=al(),Jr=us.filter(z=>{const Me=new Date(z.date);return Me>=Ys&&Me<=hi}),ll=Gt.filter(z=>{const Me=new Date(z.date);return Me>=Ys&&Me<=hi});Object.keys(pn).reduce((z,Me)=>{const qe=Jr.filter(Zt=>Zt.category===Me),bs=qe.reduce((Zt,Qr)=>Zt+Qr.severity,0),ut=qe.length>0?bs/qe.length:0;return z[Me]={count:qe.length,avgSeverity:ut,percentage:Jr.length>0?Math.round(qe.length/Jr.length*100):0},z},{}),ll.reduce((z,Me)=>(z[Me.moodLevel]=(z[Me.moodLevel]||0)+1,z),{});const po=Jr.reduce((z,Me)=>(z[Me.symptomName]=(z[Me.symptomName]||0)+1,z),{});Object.entries(po).sort((z,Me)=>Me[1]-z[1]).slice(0,5),Vr.filter(z=>!z.isRead);const go=()=>{if(T){if(!Wt){me("Daily limit reached! Upgrade to Premium for unlimited logging."),R(!0),setTimeout(()=>R(!1),3e3);return}Oe({date:Ee,timeOfDay:H,category:T.category,symptomName:T.name,severity:W,notes:""}),S(!1),j(null),L(5),me(`${T.name} logged successfully!`),R(!0),setTimeout(()=>R(!1),3e3)}},yo=()=>{if(!vr){me("Mood limit reached. Upgrade to Premium for unlimited entries."),R(!0),setTimeout(()=>R(!1),3e3);return}cs({date:Ee,moodLevel:ke,energyLevel:X,gratitudeText:ne,notes:ue}),Q(!0),setTimeout(()=>Q(!1),3e3)},xo=()=>{kn({date:Ee,hoursSlept:G,sleepQuality:N,wakeUpCount:fe,notes:ce}),D(!0),setTimeout(()=>D(!1),3e3)},cl=()=>{if(!se.trim())return;const z={id:`treatment-${Date.now()}`,name:se.trim(),type:je,dosage:Ge,startDate:Ee,endDate:null,isActive:!0,notes:""};ae.getState().addTreatment(z),ge(""),$e("supplement"),Ue(""),M(!1),_t(!0),setTimeout(()=>_t(!1),3e3)},ul=()=>{const z=new Date().getHours();return z>=6&&z<12?"morning":z>=12&&z<18?"afternoon":z>=18&&z<21?"evening":"night"},it=()=>{De(!0)},dl=()=>{De(!1),setTimeout(()=>{window.print()},100)},Tn=ir.slice(-10).reverse(),mi=Gt.slice(-7).reverse(),Cn=[{id:"symptoms",label:"Symptoms",icon:s.jsx(pt,{size:18})},{id:"mood",label:"Mood",icon:s.jsx(Et,{size:18})},{id:"sleep",label:"Sleep",icon:s.jsx(wn,{size:18})},...He?[{id:"treatments",label:"Treatments",icon:s.jsx(xn,{size:18})}]:[],...He?[{id:"journal",label:"Journal",icon:s.jsx(xn,{size:18})}]:[]],hl=[{value:"today",label:"Today"},{value:"week",label:"This Week"},{value:"month",label:"This Month"},{value:"all",label:"All Time"}];return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("button",{onClick:()=>r==null?void 0:r("dashboard"),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Home"]}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"font-serif text-2xl font-semibold text-foreground",children:"Daily Tracking"}),s.jsx("p",{className:"text-muted-foreground mt-1",children:Xi(new Date,"EEEE, MMMM d")})]}),K&&s.jsxs("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-success text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300",children:[s.jsx(Le,{size:20}),s.jsx("span",{className:"font-medium",children:F})]}),xe&&s.jsxs("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-success text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300",children:[s.jsx(Le,{size:20}),s.jsx("span",{className:"font-medium",children:"Mood saved successfully!"})]}),P&&s.jsxs("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-success text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300",children:[s.jsx(Le,{size:20}),s.jsx("span",{className:"font-medium",children:"Sleep logged successfully!"})]}),ct&&s.jsxs("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-success text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300",children:[s.jsx(Le,{size:20}),s.jsx("span",{className:"font-medium",children:"Treatment added successfully!"})]}),s.jsx("div",{className:"flex gap-2 p-1 bg-muted rounded-xl overflow-x-auto",children:Cn.map(z=>s.jsxs("button",{onClick:()=>n(z.id),className:`
              flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap
              transition-all duration-200
              ${e===z.id?"bg-white text-primary shadow-sm":"text-muted-foreground hover:text-foreground"}
            `,children:[z.icon,z.label]},z.id))}),e==="symptoms"&&s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"flex-1 relative",children:[s.jsx("select",{value:o,onChange:z=>l(z.target.value),className:"w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm appearance-none cursor-pointer",children:hl.map(z=>s.jsx("option",{value:z.value,children:z.label},z.value))}),s.jsx(cu,{size:16,className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"})]}),s.jsx(oe,{size:"sm",variant:"outline",onClick:it,icon:s.jsx(Ua,{size:16}),children:"Print Report"})]}),s.jsxs(te,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"font-semibold",children:"Logged Symptoms"}),s.jsxs(We,{variant:"primary",children:[ir.length," logged"]})]}),ir.length>0?s.jsx("div",{className:"space-y-3 max-h-[300px] overflow-y-auto",children:ir.slice().reverse().map(z=>s.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-muted/50",children:[s.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center text-lg",style:{backgroundColor:`${pn[z.category].color}20`},children:pn[z.category].icon}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-medium",children:z.symptomName}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:[Xi(new Date(z.date),"MMM d")," • ",Im[z.timeOfDay].split(" ")[0]]})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("span",{className:`text-lg font-bold ${z.severity>=7?"text-destructive":z.severity>=4?"text-amber-500":"text-success"}`,children:z.severity}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"/10"})]})]},z.id))}):s.jsxs("div",{className:"text-center py-8",children:[s.jsx(pt,{size:40,className:"mx-auto text-primary/40 mb-3"}),s.jsx("p",{className:"text-muted-foreground",children:"No symptoms logged"}),s.jsx("p",{className:"text-sm text-muted-foreground/70",children:"Tap a symptom below to log it"})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{className:"font-semibold",children:"Log Symptoms"}),!He&&s.jsxs(We,{variant:Xt<=3?"warning":"secondary",className:"text-xs",children:[Xt," logs remaining today"]}),He&&s.jsxs(We,{variant:"premium",className:"text-xs flex items-center gap-1",children:[s.jsx(Fe,{size:12})," PREMIUM - Unlimited"]})]}),Object.entries(Qy).map(([z,Me])=>{const qe=pn[z],bs=w===z,ut=Kr.some(Zt=>Zt.category===z);return s.jsxs(te,{className:ut?"ring-2 ring-primary/30":"",children:[s.jsxs("button",{onClick:()=>b(bs?null:z),className:"w-full flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center text-2xl",style:{backgroundColor:`${qe.color}20`},children:qe.icon}),s.jsxs("div",{className:"flex-1 text-left",children:[s.jsx("p",{className:"font-semibold",children:qe.label}),s.jsxs("p",{className:"text-xs text-muted-foreground",children:[Me.length," symptoms • Tap to expand"]})]}),bs?s.jsx(my,{size:20,className:"text-muted-foreground"}):s.jsx(cu,{size:20,className:"text-muted-foreground"})]}),bs&&s.jsx("div",{className:"mt-4 grid grid-cols-2 gap-2",children:Me.map(Zt=>{const Qr=Kr.some(vo=>vo.symptomName===Zt.name&&vo.category===z);return s.jsxs("button",{onClick:()=>{j({category:z,name:Zt.name,emoji:Zt.emoji}),q(ul()),L(5),S(!0)},className:`
                              p-3 rounded-xl border-2 text-left transition-all flex items-center gap-2
                              ${Qr?"border-success bg-success/10":"border-border hover:border-primary hover:bg-primary/5"}
                            `,children:[s.jsx("span",{className:"text-xl",children:Zt.emoji}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:"font-medium text-sm truncate",children:Zt.name}),Qr&&s.jsxs("p",{className:"text-xs text-success flex items-center gap-1",children:[s.jsx(Le,{size:12})," Logged"]})]}),Qr?s.jsx(Le,{size:18,className:"text-success shrink-0"}):s.jsx(Yr,{size:18,className:"text-primary shrink-0"})]},Zt.name)})})]},z)})]}),s.jsx(te,{className:"bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20",children:s.jsxs("button",{onClick:()=>r==null?void 0:r("insights"),className:"w-full flex items-center justify-between p-4",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center",children:s.jsx(Pu,{size:24,className:"text-primary"})}),s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"font-semibold",children:"View Your Insights"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Symptom Impact Score, Patterns & Trends"})]})]}),s.jsx(ys,{size:20,className:"text-primary"})]})}),s.jsx(te,{className:"bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20",children:s.jsxs("button",{onClick:()=>r==null?void 0:r("community"),className:"w-full flex items-center justify-between p-4",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center",children:s.jsx(tr,{size:24,className:"text-secondary"})}),s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"font-semibold",children:"Join the Forum"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Connect with other women, share experiences"})]})]}),s.jsx(ys,{size:20,className:"text-secondary"})]})})]}),e==="mood"&&s.jsxs("div",{className:"space-y-4",children:[!He&&s.jsxs(te,{className:"bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium text-amber-800",children:"Monthly Mood Entries"}),s.jsx("p",{className:"text-xs text-amber-600 mt-1",children:wr>0?`${wr} of ${vt} remaining this month`:"Limit reached for this month"})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("p",{className:"text-2xl font-bold text-amber-600",children:wr}),s.jsx("p",{className:"text-xs text-amber-500",children:"left"})]})]}),!vr&&s.jsx(oe,{fullWidth:!0,className:"mt-3 bg-amber-500 hover:bg-amber-600",onClick:()=>r==null?void 0:r("subscription"),children:"Upgrade to Premium"})]}),s.jsxs(te,{children:[s.jsx("h3",{className:"font-semibold mb-4",children:"How are you feeling?"}),s.jsx("div",{className:"grid grid-cols-5 gap-2 mb-6",children:["great","good","okay","low","difficult"].map(z=>s.jsxs("button",{onClick:()=>Pe(z),className:`
                    flex flex-col items-center gap-1 p-3 rounded-xl transition-all
                    ${ke===z?"bg-primary text-white scale-105":"bg-muted hover:bg-muted/70"}
                  `,children:[s.jsx("span",{className:"text-2xl",children:Qi[z]}),s.jsx("span",{className:"text-xs font-medium",children:Ba[z]})]},z))}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Energy Level"}),s.jsx("input",{type:"range",min:"1",max:"10",value:X,onChange:z=>V(parseInt(z.target.value)),className:"w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"}),s.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground mt-1",children:[s.jsx("span",{children:"Low"}),s.jsxs("span",{className:"font-medium text-primary",children:[X,"/10"]}),s.jsx("span",{children:"High"})]})]}),s.jsxs("div",{className:"space-y-2 mb-4",children:[s.jsx("label",{className:"text-sm font-medium",children:"What are you grateful for today?"}),s.jsx("input",{type:"text",placeholder:"Take a moment to appreciate...",value:ne,onChange:z=>Y(z.target.value),className:"w-full px-4 py-3 rounded-xl border border-border bg-white"})]}),s.jsxs("div",{className:"space-y-2 mb-4",children:[s.jsx("label",{className:"text-sm font-medium",children:"Additional notes (optional)"}),s.jsx("textarea",{className:"w-full px-4 py-3 rounded-xl border border-border bg-white min-h-[80px] resize-y",placeholder:"Any thoughts to share...",value:ue,onChange:z=>we(z.target.value)})]}),s.jsx(oe,{fullWidth:!0,size:"lg",onClick:yo,className:"bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg",icon:s.jsx(Le,{size:22}),children:"Save Mood"})]}),Nn&&s.jsx(te,{className:"bg-gradient-to-br from-pink-50 to-purple-50",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("span",{className:"text-5xl",children:Qi[Nn.moodLevel]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Today's mood"}),s.jsx("p",{className:"text-xl font-semibold",children:Ba[Nn.moodLevel]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Energy: ",Nn.energyLevel,"/10"]})]}),s.jsx(Le,{size:24,className:"ml-auto text-success"})]})})]}),e==="sleep"&&s.jsxs("div",{className:"space-y-4",children:[s.jsxs(te,{children:[s.jsx("h3",{className:"font-semibold mb-4",children:"Sleep Log"}),s.jsx("p",{className:"text-muted-foreground mb-6",children:"Track your sleep patterns to identify what's affecting your rest."}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Hours slept"}),s.jsx("input",{type:"number",min:"0",max:"24",step:"0.5",placeholder:"7.5",value:G||"",onChange:z=>J(parseFloat(z.target.value)||0),className:"w-full px-4 py-3 rounded-xl border border-border bg-white"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Sleep quality"}),s.jsxs("select",{value:N,onChange:z=>B(parseInt(z.target.value)),className:"w-full px-4 py-3 rounded-xl border border-border bg-white",children:[s.jsx("option",{value:"1",children:"Very Poor"}),s.jsx("option",{value:"2",children:"Poor"}),s.jsx("option",{value:"3",children:"Fair"}),s.jsx("option",{value:"4",children:"Good"}),s.jsx("option",{value:"5",children:"Excellent"})]})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Times woken during night"}),s.jsx("input",{type:"number",min:"0",max:"20",placeholder:"0",value:fe||"",onChange:z=>I(parseInt(z.target.value)||0),className:"w-full px-4 py-3 rounded-xl border border-border bg-white"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Notes (optional)"}),s.jsx("textarea",{placeholder:"How did you sleep? Any factors affecting rest?",value:ce,onChange:z=>ye(z.target.value),className:"w-full px-4 py-3 rounded-xl border border-border bg-white min-h-[80px] resize-y"})]}),s.jsx(oe,{fullWidth:!0,size:"lg",onClick:xo,className:"bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg",icon:s.jsx(Le,{size:22}),children:"Save Sleep"})]})]}),qs&&s.jsx(te,{className:"bg-gradient-to-br from-indigo-50 to-blue-50",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("span",{className:"text-5xl",children:"😴"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Last night's sleep"}),s.jsxs("p",{className:"text-xl font-semibold",children:[qs.hoursSlept," hours"]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Quality: ",qs.sleepQuality===5?"Excellent":qs.sleepQuality===4?"Good":qs.sleepQuality===3?"Fair":qs.sleepQuality===2?"Poor":"Very Poor",qs.wakeUpCount>0&&` • Woke ${qs.wakeUpCount}x`]})]})]}),s.jsx(Le,{size:24,className:"text-success"})]})}),s.jsxs(te,{children:[s.jsx("h3",{className:"font-semibold mb-3",children:"Sleep Tips"}),s.jsx("div",{className:"space-y-3",children:["Keep a consistent sleep schedule","Limit caffeine after 2 PM","Create a relaxing bedtime routine","Keep your bedroom cool and dark"].map((z,Me)=>s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx(wn,{size:18,className:"text-secondary mt-0.5 shrink-0"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:z})]},Me))})]})]}),e==="treatments"&&s.jsx("div",{className:"space-y-4",children:s.jsxs(te,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"font-semibold",children:"My Treatments"}),s.jsx(oe,{size:"sm",icon:s.jsx(Yr,{size:16}),onClick:()=>M(!0),children:"Add"})]}),s.jsx("p",{className:"text-muted-foreground text-center py-8",children:"Track your supplements and hormone therapies to see how they affect your symptoms."})]})}),e==="journal"&&s.jsx("div",{className:"space-y-4",children:s.jsxs(te,{className:He?"bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200":"",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"font-semibold",children:"Voice & Text Journal"}),He?s.jsxs(We,{variant:"premium",size:"sm",className:"flex items-center gap-1",children:[s.jsx(Fe,{size:12})," PREMIUM"]}):s.jsx(We,{variant:"secondary",size:"sm",children:"Free"})]}),s.jsx("p",{className:"text-muted-foreground mb-6",children:"Express your thoughts freely. Your entries are private and help identify patterns."}),He?s.jsxs("div",{className:"space-y-4",children:[vs?s.jsx("div",{className:"p-4 rounded-xl bg-red-50 border border-red-200",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0",children:s.jsx(mu,{size:24,className:"text-red-600"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-semibold text-red-800",children:"Microphone Access Required"}),s.jsx("p",{className:"text-xs text-red-700 mt-1 mb-3",children:"Please allow microphone access in your browser settings to use voice journaling."}),s.jsxs("p",{className:"text-xs text-red-600",children:[s.jsx("strong",{children:"Samsung S23:"})," Settings → Apps → Psych-Wise → Permissions → Microphone → Allow"]})]})]})}):At?s.jsx("div",{className:"p-4 rounded-xl bg-white border border-teal-100",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-12 h-12 rounded-full ${rt?"bg-red-100 animate-pulse":"bg-teal-100"} flex items-center justify-center transition-colors`,children:rt?s.jsx(ti,{size:24,className:"text-red-500"}):s.jsx(ti,{size:24,className:"text-teal-500"})}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold",children:"Voice-to-Text Journaling"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:rt?"Listening... Speak now":"Tap to speak, auto-transcribed"})]})]}),s.jsx("button",{onClick:Sn,className:`w-10 h-10 rounded-full flex items-center justify-center transition-all ${rt?"bg-red-500 text-white hover:bg-red-600":"bg-teal-500 text-white hover:bg-teal-600"}`,children:rt?s.jsx(mu,{size:20}):s.jsx(ti,{size:20})})]})}):s.jsx("div",{className:"p-4 rounded-xl bg-amber-50 border border-amber-200",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0",children:s.jsx(ti,{size:24,className:"text-amber-600"})}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-amber-800",children:"Voice Not Supported"}),s.jsx("p",{className:"text-xs text-amber-700 mt-1",children:"Your browser doesn't support voice-to-text. Please use Chrome or Samsung Internet for this feature."})]})]})}),s.jsx("textarea",{className:"w-full px-4 py-3 rounded-xl border border-border bg-white min-h-[150px] resize-y",placeholder:"What's on your mind today? (Or tap the mic above to dictate)",value:Vt,onChange:z=>Pt(z.target.value)}),s.jsx(oe,{fullWidth:!0,icon:s.jsx(Le,{size:18}),onClick:()=>{Vt.trim()&&(xr({content:Vt,date:Ee,mood:ke,tags:[],voiceTranscribed:rt}),Pt(""),me("Journal entry saved!"),R(!0),setTimeout(()=>R(!1),3e3))},children:"Save Entry"}),Fs.length>0&&s.jsxs("div",{className:"mt-6 pt-6 border-t border-teal-100",children:[s.jsxs("h4",{className:"font-semibold text-sm mb-3 flex items-center gap-2",children:[s.jsx("span",{children:"Your Journal Entries"}),s.jsx(We,{variant:"secondary",size:"sm",children:Fs.length})]}),s.jsx("div",{className:"space-y-3 max-h-[300px] overflow-y-auto",children:Fs.slice().reverse().map(z=>s.jsxs("div",{className:"p-3 rounded-xl bg-white border border-gray-100",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm",children:Qi[z.mood]}),s.jsx("span",{className:"text-xs text-muted-foreground",children:Xi(new Date(z.date),"MMM d, yyyy")})]}),s.jsx("button",{onClick:()=>Us(z.id),className:"p-1 text-muted-foreground hover:text-red-500 transition-colors","aria-label":"Delete entry",children:s.jsx(tl,{size:14})})]}),s.jsx("p",{className:"text-sm text-foreground whitespace-pre-wrap",children:z.content.length>150?z.content.slice(0,150)+"...":z.content}),s.jsxs("p",{className:"text-xs text-muted-foreground mt-2",children:[z.wordCount," words"]})]},z.id))})]})]}):s.jsxs("div",{className:"text-center py-6",children:[s.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center",children:s.jsx(ti,{size:28,className:"text-muted-foreground"})}),s.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:"Voice journaling is a Premium feature"}),s.jsxs("div",{className:"space-y-2 text-left bg-muted/50 p-4 rounded-lg mt-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-success",children:"✓"}),s.jsx("span",{children:"Text journal entries (5/month)"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-muted-foreground",children:"✗"}),s.jsx("span",{className:"text-muted-foreground/70",children:"Voice-to-text dictation"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-muted-foreground",children:"✗"}),s.jsx("span",{className:"text-muted-foreground/70",children:"Unlimited entries"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"text-muted-foreground",children:"✗"}),s.jsx("span",{className:"text-muted-foreground/70",children:"AI sentiment analysis"})]})]}),s.jsx(oe,{size:"sm",variant:"outline",className:"mt-4",onClick:()=>r==null?void 0:r("subscription"),children:"Upgrade to Premium"})]})]})}),s.jsx(zt,{isOpen:v,onClose:()=>{S(!1),j(null)},title:"Log Symptom",size:"sm",children:T&&s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"text-center py-4",children:[s.jsx("span",{className:"text-5xl",children:T.emoji}),s.jsx("p",{className:"font-semibold text-lg mt-2",children:T.name}),s.jsx("p",{className:"text-sm text-muted-foreground",children:pn[T.category].label})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Severity (1-10)"}),s.jsx("input",{type:"range",min:"1",max:"10",value:W,onChange:z=>L(parseInt(z.target.value)),className:"w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"}),s.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[s.jsx("span",{children:"Mild"}),s.jsx("span",{className:`font-bold text-lg ${W>=7?"text-destructive":W>=4?"text-amber-500":"text-success"}`,children:W}),s.jsx("span",{children:"Severe"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Time of Day"}),s.jsx("select",{value:H,onChange:z=>q(z.target.value),className:"w-full px-4 py-3 rounded-xl border border-border bg-white",children:Object.entries(Im).map(([z,Me])=>s.jsx("option",{value:z,children:Me},z))})]}),s.jsx(oe,{fullWidth:!0,size:"lg",onClick:go,className:"bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg",icon:s.jsx(Le,{size:22}),children:"Save Symptom"})]})}),s.jsx(zt,{isOpen:re,onClose:()=>M(!1),title:"Add Treatment",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"text-muted-foreground",children:"Track your supplements and hormone therapies to see how they affect your symptoms."}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Treatment Name *"}),s.jsx("input",{type:"text",placeholder:"e.g., Vitamin D, Estrogen Patch",value:se,onChange:z=>ge(z.target.value),className:"w-full px-4 py-3 rounded-xl border border-border bg-white"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Type"}),s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsx("button",{onClick:()=>$e("supplement"),className:`
                  px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all
                  ${je==="supplement"?"border-primary bg-primary/10 text-primary":"border-border hover:border-primary/50"}
                `,children:"Supplement"}),s.jsx("button",{onClick:()=>$e("hormone_therapy"),className:`
                  px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all
                  ${je==="hormone_therapy"?"border-primary bg-primary/10 text-primary":"border-border hover:border-primary/50"}
                `,children:"Hormone Therapy"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium",children:"Dosage (optional)"}),s.jsx("input",{type:"text",placeholder:"e.g., 1000 IU, 0.5mg",value:Ge,onChange:z=>Ue(z.target.value),className:"w-full px-4 py-3 rounded-xl border border-border bg-white"})]}),s.jsxs("div",{className:"flex gap-3 pt-2",children:[s.jsx(oe,{variant:"outline",onClick:()=>M(!1),className:"flex-1",children:"Cancel"}),s.jsx(oe,{onClick:cl,className:"flex-1",icon:s.jsx(Yr,{size:18}),disabled:!se.trim(),children:"Add Treatment"})]})]})}),s.jsx(zt,{isOpen:Xe,onClose:()=>De(!1),title:"Print Health Report",size:"lg",children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:`Your health report is ready. Click "Print" to open your browser's print dialog, then select "Save as PDF" to download.`}),s.jsxs("div",{id:"print-report-content",className:"bg-white p-4 border rounded-xl max-h-[400px] overflow-y-auto",children:[s.jsxs("div",{className:"text-center mb-4 border-b pb-3",children:[s.jsx("h2",{className:"text-xl font-bold text-primary",children:"Psych-Wise Health Report"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Health Summary"})]}),s.jsxs("div",{className:"bg-muted/50 p-3 rounded-lg mb-4 text-sm",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Patient:"})," ",Kt.name||"Not provided"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Stage:"})," ",Kt.menopauseStage?Kt.menopauseStage.charAt(0).toUpperCase()+Kt.menopauseStage.slice(1):"Not specified"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Date:"})," ",Xi(new Date,"MMMM d, yyyy")]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-4",children:[s.jsxs("div",{className:"bg-indigo-50 p-3 rounded-lg text-center",children:[s.jsx("div",{className:"text-xl font-bold text-indigo-600",children:Kr.length}),s.jsx("div",{className:"text-xs text-gray-600",children:"Today"})]}),s.jsxs("div",{className:"bg-green-50 p-3 rounded-lg text-center",children:[s.jsx("div",{className:"text-xl font-bold text-green-600",children:Gt.length}),s.jsx("div",{className:"text-xs text-gray-600",children:"Mood Logs"})]}),s.jsxs("div",{className:"bg-amber-50 p-3 rounded-lg text-center",children:[s.jsx("div",{className:"text-xl font-bold text-amber-600",children:us.length}),s.jsx("div",{className:"text-xs text-gray-600",children:"Total"})]})]}),s.jsx("h3",{className:"font-semibold text-sm mb-2",children:"Recent Symptoms"}),Tn.length>0?s.jsx("div",{className:"text-xs space-y-1 mb-4",children:Tn.slice(0,5).map((z,Me)=>s.jsxs("div",{className:"flex justify-between bg-muted/30 p-2 rounded",children:[s.jsx("span",{children:z.symptomName}),s.jsxs("span",{className:"font-medium",children:[z.severity,"/10"]})]},Me))}):s.jsx("p",{className:"text-xs text-muted-foreground mb-4",children:"No symptoms logged"}),s.jsx("h3",{className:"font-semibold text-sm mb-2",children:"Recent Moods"}),mi.length>0?s.jsx("div",{className:"text-xs space-y-1",children:mi.slice(0,5).map((z,Me)=>s.jsxs("div",{className:"flex justify-between bg-muted/30 p-2 rounded",children:[s.jsxs("span",{children:[Qi[z.moodLevel]," ",Ba[z.moodLevel]]}),s.jsxs("span",{className:"font-medium",children:[z.energyLevel,"/10"]})]},Me))}):s.jsx("p",{className:"text-xs text-muted-foreground",children:"No mood entries"})]}),s.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg text-xs text-blue-800",children:[s.jsx("strong",{children:"Tip:"}),' In the print dialog, choose "Save as PDF" instead of a printer to save a digital copy.']}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx(oe,{variant:"outline",onClick:()=>De(!1),className:"flex-1",children:"Cancel"}),s.jsx(oe,{onClick:dl,className:"flex-1",icon:s.jsx(Ua,{size:18}),children:"Print / Save PDF"})]})]})})]})},pv=({onNavigate:r})=>{const[e,n]=A.useState("week"),[o,l]=A.useState(!1),[c,d]=A.useState(!1),[m,p]=A.useState(!1),g=ae(V=>V.symptoms),x=ae(V=>V.moods),w=ae(V=>V.journals),b=ae(V=>V.treatments),v=ae(V=>V.profile);ae(V=>V.subscriptionTier);const S=ae(V=>V.insights),T=ae(V=>V.markInsightRead),j=zu(),W=()=>{const V=new Date,ne=e==="week"?7:e==="month"?30:90;return{startDate:new Date(V.getTime()-ne*24*60*60*1e3),endDate:V}},{startDate:L,endDate:H}=W(),q=g.filter(V=>{const ne=new Date(V.date);return ne>=L&&ne<=H}),K=x.filter(V=>{const ne=new Date(V.date);return ne>=L&&ne<=H}),R=Object.keys(pn).reduce((V,ne)=>{const Y=q.filter(xe=>xe.category===ne),ue=Y.reduce((xe,Q)=>xe+Q.severity,0),we=Y.length>0?ue/Y.length:0;return V[ne]={count:Y.length,avgSeverity:we,percentage:q.length>0?Math.round(Y.length/q.length*100):0},V},{});K.reduce((V,ne)=>(V[ne.moodLevel]=(V[ne.moodLevel]||0)+1,V),{});const F=q.reduce((V,ne)=>(V[ne.symptomName]=(V[ne.symptomName]||0)+1,V),{}),me=Object.entries(F).sort((V,ne)=>ne[1]-V[1]).slice(0,5),ke=S.filter(V=>!V.isRead),Pe=()=>{const V=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),ne=encodeURIComponent(`Psych-Wise Health Report - ${V}`),Y=g.slice(-14),ue=x.slice(-14),we=ue.length>0?(ue.reduce((N,B)=>N+(B.moodLevel==="great"?5:B.moodLevel==="good"?4:B.moodLevel==="okay"?3:B.moodLevel==="low"?2:1),0)/ue.length).toFixed(1):"N/A",xe=Y.length>0?Y.map(N=>`${new Date(N.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}: ${N.symptomName} (${N.severity}/10)${N.notes?` - ${N.notes}`:""}`).join(`
`):"No symptoms logged",Q=ue.length>0?ue.map(N=>`${new Date(N.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}: ${N.moodLevel} (Energy: ${N.energyLevel}/10)${N.notes?` - ${N.notes}`:""}`).join(`
`):"No mood entries",G=b.length>0?b.map(N=>`${N.name} - ${N.type}${N.dosage?` (${N.dosage})`:""} [${N.isActive?"Active":"Inactive"}]`).join(`
`):"",J=encodeURIComponent(`PSYCH-WISE HEALTH REPORT
=============================

Patient Name: ${v.name||"Not provided"}
Menopause Stage: ${gn[v.menopauseStage]||"Not set"}
Report Date: ${V}

SUMMARY
-------
Total Symptoms: ${g.length}
Total Mood Logs: ${x.length}
Journal Entries: ${w.length}
Average Mood: ${we}/5


RECENT SYMPTOMS (Last 14 Days)
------------------------------
${xe}


RECENT MOODS (Last 14 Days)
--------------------------
${Q}
${b.length>0?`


CURRENT TREATMENTS
------------------
${G}`:""}


---
Psych-Wise - Your Hot Flash Hottie Wellness Companion
This report is for personal tracking purposes only.
Consult your healthcare provider for medical advice.
`);window.open(`mailto:?subject=${ne}&body=${J}`,"_blank"),d(!1)},X=async()=>{const V=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),ne=g.slice(-14),Y=x.slice(-14),ue=Y.length>0?(Y.reduce((G,J)=>G+(J.moodLevel==="great"?5:J.moodLevel==="good"?4:J.moodLevel==="okay"?3:J.moodLevel==="low"?2:1),0)/Y.length).toFixed(1):"N/A",we=ne.length>0?ne.map(G=>`${new Date(G.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}: ${G.symptomName} (${G.severity}/10)${G.notes?` - ${G.notes}`:""}`).join(`
`):"No symptoms logged",xe=Y.length>0?Y.map(G=>`${new Date(G.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}: ${G.moodLevel} (Energy: ${G.energyLevel}/10)${G.notes?` - ${G.notes}`:""}`).join(`
`):"No mood entries",Q=`PSYCH-WISE HEALTH REPORT
=============================

Patient Name: ${v.name||"Not provided"}
Menopause Stage: ${gn[v.menopauseStage]||"Not set"}
Report Date: ${V}

SUMMARY
-------
Total Symptoms: ${g.length}
Total Mood Logs: ${x.length}
Journal Entries: ${w.length}
Average Mood: ${ue}/5

RECENT SYMPTOMS (Last 14 Days)
------------------------------
${we}

RECENT MOODS (Last 14 Days)
--------------------------
${xe}

---
Psych-Wise - Your Hot Flash Hottie Wellness Companion
This report is for personal tracking purposes only.
Consult your healthcare provider for medical advice.`;if(navigator.share)try{await navigator.share({title:`Psych-Wise Health Report - ${V}`,text:Q})}catch(G){G.name!=="AbortError"&&console.log("Share failed:",G)}else try{await navigator.clipboard.writeText(Q),alert("Report copied to clipboard! Paste it in your email app.")}catch{const J=document.createElement("textarea");J.value=Q,document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J),alert("Report copied to clipboard! Paste it in your email app.")}};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("button",{onClick:()=>r==null?void 0:r("dashboard"),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(ys,{size:18,className:"rotate-180"}),"Back to Home"]}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"font-serif text-2xl font-semibold text-foreground",children:"Insights Hub"}),s.jsx("p",{className:"text-muted-foreground mt-1",children:"Track, Analyze & Share Your Progress"})]}),s.jsx("div",{className:"flex gap-2 justify-center",children:[{value:"week",label:"7 Days"},{value:"month",label:"30 Days"},{value:"quarter",label:"90 Days"}].map(V=>s.jsx("button",{onClick:()=>n(V.value),className:`
              px-4 py-2 rounded-xl text-sm font-medium transition-all
              ${e===V.value?"bg-primary text-white":"bg-muted text-muted-foreground hover:text-foreground"}
            `,children:V.label},V.value))}),s.jsxs(te,{className:"bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(uu,{size:20,className:"text-primary"}),s.jsx("h3",{className:"font-semibold",children:"Share Your Report"})]}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Generate a detailed health report to share with your healthcare provider."}),s.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[s.jsxs(oe,{variant:"outline",onClick:()=>l(!0),className:"flex items-center gap-2",children:[s.jsx($a,{size:18}),"Print"]}),s.jsxs(oe,{onClick:X,className:"flex items-center gap-2",children:[s.jsx(Ty,{size:18}),"Share"]}),s.jsxs(oe,{variant:"secondary",onClick:()=>d(!0),className:"flex items-center gap-2",children:[s.jsx(Zs,{size:18}),"Email"]})]})]}),s.jsxs(te,{className:"border-dashed border-2 border-primary/30 bg-primary/5",children:[s.jsxs("button",{onClick:()=>p(!m),className:"w-full flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Wf,{size:20,className:"text-primary"}),s.jsx("span",{className:"font-semibold text-primary",children:"How to Use This Page"})]}),m?s.jsx(cu,{size:20,className:"text-primary"}):s.jsx(ys,{size:20,className:"text-primary"})]}),m&&s.jsxs("div",{className:"mt-4 space-y-3 text-sm",children:[s.jsxs("div",{className:"bg-white rounded-xl p-3",children:[s.jsxs("p",{className:"font-medium flex items-center gap-2",children:[s.jsx($a,{size:16,className:"text-primary"})," Print PDF"]}),s.jsx("p",{className:"text-muted-foreground text-xs mt-1",children:`Opens your browser's print dialog. Use "Save as PDF" to download a copy.`})]}),s.jsxs("div",{className:"bg-white rounded-xl p-3",children:[s.jsxs("p",{className:"font-medium flex items-center gap-2",children:[s.jsx(Zs,{size:16,className:"text-primary"})," Email Doctor"]}),s.jsx("p",{className:"text-muted-foreground text-xs mt-1",children:"Opens your email app with your health summary ready to send."})]}),s.jsxs("div",{className:"bg-white rounded-xl p-3",children:[s.jsxs("p",{className:"font-medium flex items-center gap-2",children:[s.jsx(Pu,{size:16,className:"text-primary"})," Symptom Impact Score"]}),s.jsx("p",{className:"text-muted-foreground text-xs mt-1",children:"Higher number = more symptoms affecting your daily life."})]}),s.jsxs("div",{className:"bg-white rounded-xl p-3",children:[s.jsxs("p",{className:"font-medium flex items-center gap-2",children:[s.jsx(Fe,{size:16,className:"text-accent"})," AI Insights"]}),s.jsx("p",{className:"text-muted-foreground text-xs mt-1",children:"Personalized tips based on your tracking patterns."})]})]})]}),s.jsxs(te,{className:"bg-gradient-to-br from-primary to-secondary text-white",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("h3",{className:"font-semibold text-lg",children:"Symptom Impact Score"}),s.jsx("p",{className:"text-white/80 text-sm mt-1",children:"Higher = more symptoms this period"})]}),s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("span",{className:"text-6xl font-bold",children:j.overall}),s.jsx("span",{className:"text-2xl text-white/70",children:"/100"})]}),s.jsx(oi,{value:j.overall,color:"white",className:"mb-4"}),s.jsx("div",{className:"bg-white/10 rounded-xl p-3 mb-4 text-center",children:s.jsxs("p",{className:"text-sm",children:[j.overall<=30&&"🌟 Great period! Symptoms are well managed.",j.overall>30&&j.overall<=50&&"👍 Moderate period, some symptoms",j.overall>50&&j.overall<=70&&"😕 Challenging period, many symptoms",j.overall>70&&"💪 Difficult period - keep tracking!"]})}),s.jsxs("div",{className:"flex items-center justify-center gap-3 text-center",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"text-white/70 text-sm",children:"vs last period"}),s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[j.trend==="up"&&s.jsxs(s.Fragment,{children:[s.jsx(Fr,{size:20,className:"text-red-300"}),s.jsxs("span",{className:"text-xl font-bold text-red-200",children:["+",j.trendValue]})]}),j.trend==="down"&&s.jsxs(s.Fragment,{children:[s.jsx(Uf,{size:20,className:"text-green-300"}),s.jsx("span",{className:"text-xl font-bold text-green-200",children:j.trendValue})]}),j.trend==="stable"&&s.jsxs(s.Fragment,{children:[s.jsx(Hf,{size:20,className:"text-white/70"}),s.jsx("span",{className:"text-xl font-bold",children:j.trendValue})]})]})]}),s.jsx("div",{className:"w-px h-10 bg-white/20"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"text-white/70 text-sm",children:"Symptoms logged"}),s.jsx("p",{className:"text-xl font-bold",children:q.length})]})]})]}),s.jsxs(te,{children:[s.jsx("h3",{className:"font-semibold mb-3",children:"What's Affecting Your Score?"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-3 h-3 rounded-full ${j.symptomScore>50?"bg-red-400":j.symptomScore>30?"bg-yellow-400":"bg-green-400"}`}),s.jsx("span",{className:"flex-1 text-sm",children:"Symptom severity"}),s.jsxs("span",{className:"text-sm font-medium",children:[j.symptomScore,"%"]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-3 h-3 rounded-full ${j.moodScore>50?"bg-red-400":j.moodScore>30?"bg-yellow-400":"bg-green-400"}`}),s.jsx("span",{className:"flex-1 text-sm",children:"Mood impact"}),s.jsxs("span",{className:"text-sm font-medium",children:[j.moodScore,"%"]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-3 h-3 rounded-full ${j.energyScore>50?"bg-red-400":j.energyScore>30?"bg-yellow-400":"bg-green-400"}`}),s.jsx("span",{className:"flex-1 text-sm",children:"Energy levels"}),s.jsxs("span",{className:"text-sm font-medium",children:[j.energyScore,"%"]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-3 h-3 rounded-full ${j.sleepScore>50?"bg-red-400":j.sleepScore>30?"bg-yellow-400":"bg-green-400"}`}),s.jsx("span",{className:"flex-1 text-sm",children:"Sleep quality"}),s.jsxs("span",{className:"text-sm font-medium",children:[j.sleepScore,"%"]})]})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsx(te,{children:s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",children:s.jsx(pt,{size:18,className:"text-primary"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-2xl font-bold",children:q.length}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Symptoms logged"})]})]})}),s.jsx(te,{children:s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-success/10 flex items-center justify-center",children:s.jsx(Et,{size:18,className:"text-success"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-2xl font-bold",children:K.length}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Mood entries"})]})]})})]}),s.jsxs(te,{children:[s.jsx("h3",{className:"font-semibold mb-4",children:"Most Common Symptoms"}),me.length>0?s.jsx("div",{className:"space-y-3",children:me.map(([V,ne],Y)=>{const ue=me[0][1];return s.jsx("div",{className:"flex items-center gap-3",children:s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex justify-between mb-1",children:[s.jsx("span",{className:"text-sm font-medium",children:V}),s.jsxs("span",{className:"text-sm text-muted-foreground",children:[ne,"x"]})]}),s.jsx(oi,{value:ne/ue*100,size:"sm",color:Y===0?"primary":Y===1?"secondary":"default",showLabel:!1})]})},V)})}):s.jsx("p",{className:"text-center text-muted-foreground py-4",children:"No symptoms logged yet"})]}),s.jsxs(te,{children:[s.jsx("h3",{className:"font-semibold mb-4",children:"Symptom Distribution"}),s.jsx("div",{className:"space-y-4",children:Object.entries(pn).map(([V,ne])=>{const Y=R[V];return s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-xl",children:ne.icon}),s.jsx("span",{className:"font-medium",children:ne.label})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("span",{className:"font-semibold",children:Y.count}),s.jsxs("span",{className:"text-sm text-muted-foreground",children:[" (",Y.percentage,"%)"]})]})]}),s.jsx(oi,{value:Y.percentage,size:"sm",color:"primary",showLabel:!1})]},V)})})]}),s.jsxs(te,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[s.jsx(Fe,{size:18,className:"text-accent"}),"AI Insights"]}),s.jsxs(We,{variant:"accent",children:[ke.length," new"]})]}),ke.length>0?s.jsx("div",{className:"space-y-3",children:ke.slice(0,3).map(V=>s.jsxs("div",{onClick:()=>T(V.id),className:"p-4 rounded-xl bg-gradient-to-r from-lavender to-soft-peach cursor-pointer hover:opacity-90 transition-opacity",children:[s.jsx("p",{className:"font-medium text-sm",children:V.title}),s.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:V.description})]},V.id))}):s.jsxs("div",{className:"text-center py-6",children:[s.jsx(Fe,{size:32,className:"mx-auto text-primary/40 mb-2"}),s.jsx("p",{className:"text-muted-foreground",children:"Keep logging daily to unlock insights"})]})]}),s.jsx(zt,{isOpen:o,onClose:()=>l(!1),title:"Print PDF Report",size:"lg",children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:`Your health report is ready. Click "Print" to open your browser's print dialog, then select "Save as PDF" to download.`}),s.jsxs("div",{className:"bg-white p-4 border rounded-xl max-h-[400px] overflow-y-auto",children:[s.jsxs("div",{className:"text-center mb-4 border-b pb-3",children:[s.jsx("h2",{className:"text-xl font-bold text-primary",children:"Psych-Wise Health Report"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Health Summary"})]}),s.jsxs("div",{className:"bg-muted/50 p-3 rounded-lg mb-4 text-sm",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Patient:"})," ",v.name||"Not provided"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Stage:"})," ",v.menopauseStage?v.menopauseStage.charAt(0).toUpperCase()+v.menopauseStage.slice(1):"Not specified"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Date:"})," ",new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-4",children:[s.jsxs("div",{className:"bg-primary/10 p-3 rounded-lg text-center",children:[s.jsx("div",{className:"text-xl font-bold text-primary",children:g.length}),s.jsx("div",{className:"text-xs text-gray-600",children:"Total Symptoms"})]}),s.jsxs("div",{className:"bg-success/10 p-3 rounded-lg text-center",children:[s.jsx("div",{className:"text-xl font-bold text-success",children:x.length}),s.jsx("div",{className:"text-xs text-gray-600",children:"Mood Logs"})]}),s.jsxs("div",{className:"bg-secondary/10 p-3 rounded-lg text-center",children:[s.jsx("div",{className:"text-xl font-bold text-secondary",children:w.length}),s.jsx("div",{className:"text-xs text-gray-600",children:"Journal Entries"})]})]}),q.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"font-semibold text-sm mb-2",children:"Recent Symptoms"}),s.jsx("div",{className:"text-xs space-y-1 mb-4",children:q.slice(-5).reverse().map((V,ne)=>s.jsxs("div",{className:"flex justify-between bg-muted/30 p-2 rounded",children:[s.jsx("span",{children:V.symptomName}),s.jsxs("span",{className:"font-medium",children:[V.severity,"/10"]})]},ne))})]}),K.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"font-semibold text-sm mb-2",children:"Recent Moods"}),s.jsx("div",{className:"text-xs space-y-1",children:K.slice(-5).reverse().map((V,ne)=>s.jsxs("div",{className:"flex justify-between bg-muted/30 p-2 rounded",children:[s.jsx("span",{children:V.moodLevel.charAt(0).toUpperCase()+V.moodLevel.slice(1)}),s.jsxs("span",{className:"font-medium",children:["Energy: ",V.energyLevel,"/10"]})]},ne))})]})]}),s.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg text-xs text-blue-800",children:[s.jsx("strong",{children:"Tip:"}),' In the print dialog, choose "Save as PDF" instead of a printer to save a digital copy.']}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx(oe,{variant:"outline",onClick:()=>l(!1),className:"flex-1",children:"Cancel"}),s.jsxs(oe,{onClick:()=>{l(!1),setTimeout(()=>window.print(),100)},className:"flex-1",children:[s.jsx($a,{size:18,className:"mr-2"})," Print / Save PDF"]})]})]})}),s.jsx(zt,{isOpen:c,onClose:()=>d(!1),title:"Email Report to Doctor",size:"sm",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"text-center py-4",children:[s.jsx(Zs,{size:48,className:"mx-auto text-primary mb-3"}),s.jsx("h3",{className:"font-semibold",children:"Email Your Health Summary"}),s.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"A text summary of your health data will be prepared for your doctor's email."})]}),s.jsx("div",{className:"bg-blue-50 p-3 rounded-lg text-xs text-blue-800",children:s.jsx("p",{className:"font-medium mb-1",children:"📧 Your email app will open with the report ready to send."})}),s.jsxs(oe,{fullWidth:!0,onClick:Pe,children:[s.jsx(Zs,{size:18,className:"mr-2"})," Open Email App"]})]})})]})},Fm={"brain-health":[{id:"brain-health-intro",title:"Brain Health Bootcamp - Introduction",content:`Welcome to the Brain Health Bootcamp!

In this 4-week program, you'll learn techniques to combat brain fog and support your cognitive function during menopause.

## What You'll Learn:
- Memory techniques that work
- Focus and concentration strategies
- Brain-boosting foods and habits
- How to create a cognitively healthy lifestyle

## Week 1: Understanding Brain Changes
Learn why your brain feels different during menopause and what you can do about it.

## Week 2: Memory Mastery
Practical memory techniques you can use immediately.

## Week 3: Focus Fundamentals
Strategies to improve concentration and reduce distractions.

## Week 4: Building Your Brain Health Routine
Create sustainable habits for long-term cognitive wellness.

Ready to start? Let's begin with Week 1!`},{id:"brain-health-w1d1",week:1,title:"Week 1, Day 1: Why Your Brain Feels Different",content:`## Week 1, Day 1: Why Your Brain Feels Different

### Understanding Menopause & Your Brain

During menopause, your brain undergoes significant changes due to fluctuating and declining hormone levels. This is completely normal, and understanding what's happening can help you be kinder to yourself.

### Key Changes You're Experiencing:

**Estrogen's Role**
Estrogen helps protect brain cells, supports neurotransmitter production, and maintains cognitive function. As estrogen levels fluctuate and decline, you may notice:

- Memory lapses
- Difficulty concentrating
- Word-finding difficulties
- Mental fog

**Progesterone's Impact**
Progesterone has calming effects on the brain. Lower levels can contribute to:

- Increased anxiety
- Sleep disturbances
- Mood changes

**The Sleep-Cognition Connection**
Poor sleep (common during menopause) directly impacts cognitive function. Night sweats and insomnia create a cycle where tiredness worsens brain fog.

### Today's Action:
Start a "Brain Log" - for the next 3 days, note when you notice brain fog and what you think might be contributing factors (stress, poor sleep, certain foods, etc.)

### Key Takeaway:
Your brain isn't broken - it's adapting to significant hormonal changes. With the right strategies, you can support your cognitive health.`},{id:"brain-health-w1d2",week:1,title:"Week 1, Day 2: The Estrogen-Cognition Link",content:`## Week 1, Day 2: The Estrogen-Cognition Link

### How Estrogen Affects Your Brain

Estrogen acts as a protective shield for your brain. It:

- Stimulates production of acetylcholine (memory neurotransmitter)
- Protects neurons from damage
- Maintains synaptic plasticity (ability to learn)
- Supports blood flow to the brain

### What Declining Estrogen Means

When estrogen levels drop, you may experience:

**Memory Issues**
- Forgetting names
- Losing track of items
- Difficulty remembering why you walked into a room

**Language Challenges**
- Losing words mid-sentence
- Calling things by wrong names
- Difficulty finding the "right" word

**Executive Function**
- Trouble multitasking
- Difficulty planning
- Reduced mental flexibility

### Your Action for Today:
Try this memory technique - when you need to remember something, create a mental picture that connects the information. For example, to remember to take vitamins, picture a giant vitamin bottle wearing a crown.

### Encouragement:
These changes are temporary for many women. Your brain will adapt, and strategies we'll cover will help bridge the gap.`},{id:"brain-health-w1d3",week:1,title:"Week 1, Day 3: Sleep & Cognitive Health",content:`## Week 1, Day 3: Sleep & Cognitive Health

### The Sleep-Cognition Cycle

Poor sleep and brain fog create a frustrating cycle:
1. Night sweats/disruption → Poor sleep
2. Poor sleep → Reduced cognitive function
3. Cognitive struggles → Increased stress
4. Stress → Worse sleep

Breaking this cycle is key to improving brain function.

### Why Sleep Matters for Your Brain

During sleep, your brain:
- Consolidates memories
- Clears toxins
- Repairs neural pathways
- Processes information

### Quick Sleep Strategies for Menopause:

**Cool Your Room**
- Keep bedroom at 65-68°F (18-20°C)
- Use cooling pillows and sheets
- Wear moisture-wicking pajamas

**Create a Wind-Down Routine**
- 30 minutes before bed, dim lights
- Avoid screens or use blue light filters
- Try gentle stretching or reading

**Keep a "Brain Dump" Journal**
- Write down worries before bed
- This helps offload tomorrow's concerns

### Tonight's Challenge:
Set up your bedroom for optimal sleep temperature. Even small changes can improve sleep quality.

### Tomorrow We Begin Memory Techniques!`},{id:"brain-health-w1d4",week:1,title:"Week 1, Day 4: Week 1 Reflection",content:`## Week 1, Day 4: Week 1 Reflection

### Recap: Understanding Your Brain

This week you've learned:
- Menopause affects cognitive function through hormonal changes
- Estrogen decline impacts memory, language, and focus
- Sleep quality directly affects brain function

### Journal Prompt:
What surprised you most about learning why your brain feels different? How does this knowledge change how you treat yourself when you have brain fog?

### Your Brain Log Review:
Look back at your brain fog notes. Do you see any patterns? Common triggers often include:
- Stress
- Lack of sleep
- Dehydration
- Skipping meals
- Certain foods

### Looking Ahead:
Next week, we'll dive into practical memory techniques you can use immediately. These are strategies that work, backed by cognitive science.

### Daily Habit to Start:
Stay hydrated! Even mild dehydration can worsen brain fog. Aim for 8-10 glasses of water daily.

### Affirmation:
"My brain is adapting to change, and I'm learning strategies to support it."`},{id:"brain-health-w2d1",week:2,title:"Week 2, Day 1: Memory Mastery Begins",content:`## Week 2, Day 1: Memory Mastery Begins

### Welcome to Memory Week!

This week, you'll learn practical memory techniques that work with your brain, not against it.

### Why Memory Techniques Help

When your brain is adapting to hormonal changes, external aids reduce cognitive load. Think of these techniques as "brain training wheels" - temporary support while your brain adjusts.

### Technique 1: Chunking

Break large amounts of information into smaller, manageable pieces.

**Example:**
- Long number: 1 9 8 0 1 9 8 5 1 9 8 5
- Chunked: 1980-1985-1985 (birth year, graduation, etc.)

**Practice:**
Chunk these items: 5551234567 → 555-123-4567
Your phone number, address, or any series you're trying to remember.

### Technique 2: Association

Connect new information to things you already know.

**Example:**
- New person's name: "Rose"
- Think of roses in your garden, a rose-colored sunset
- Visualize the person standing in a rose garden

### Today's Challenge:
Choose one technique to practice today. Use it for at least 5 pieces of information you need to remember.`},{id:"brain-health-w2d2",week:2,title:"Week 2, Day 2: Visualization Techniques",content:`## Week 2, Day 2: Visualization Techniques

### Your Brain Loves Pictures

The visual cortex is one of the most powerful parts of your brain. Using visualization taps into this power.

### Technique: The Memory Palace

This ancient technique creates a "mental house" where you place things to remember:

1. Choose a familiar place (your home)
2. Mentally walk through in order
3. Place memorable items at each stop
4. "Walk through" to retrieve

**Example - Grocery List:**
- Milk → at the door, imagine milk flooding in
- Bread → kitchen counter, bread boxes everywhere
- Eggs → refrigerator, eggs stacked like bricks

The weirder/more emotional the image, the more memorable!

### Technique: The Story Method

Create a narrative connecting items you need to remember.

**Example - To Remember: Keys, Milk, Dog Food, Phone**
Story: "You grab your KEYS (jingle) to go get MILK for your DOG who's eating FOOD in the living room. Don't forget your PHONE or you'll be stuck."

### Practice Today:
Try both techniques for your grocery list or to-do items today. Notice which one works better for you!`},{id:"brain-health-w2d3",week:2,title:"Week 2, Day 3: Name & Face Recall",content:`## Week 2, Day 3: Name & Face Recall

### The Dreaded "What's Your Name Again?"

Name forgetting is one of the most common memory complaints during menopause. Here's why and what to do:

### Why Names Are Hard

Names are arbitrary - they have no inherent connection to the person. Your brain needs help making the connection.

### Strategy: The Name Meaning Method

1. **Acknowledge** - It's okay to forget
2. **Ask** - "I'm sorry, could you repeat your name?"
3. **Connect** - "Hi, I'm Sarah. My grandmother was also named Sarah."
   - OR: "Sarah - that's my neighbor's name!"
   - OR: Make a mental note of a distinctive feature (Sarah has red hair)
4. **Use** - Use the name immediately in conversation
5. **Repeat** - Use it 3 more times in your conversation

### Practice Exercise:
Think of 3 people you need to remember names for this week. For each:
- Find a connection (same name as someone you know?)
- Create a visual (Imagine them with their signature feature)
- Plan to use their name at least 3 times when you see them

### Remember:
Everyone forgets names. This is not a reflection of your intelligence or memory capacity.`},{id:"brain-health-w2d4",week:2,title:"Week 2, Day 4: Week 2 Reflection",content:`## Week 2, Day 4: Week 2 Reflection

### Memory Techniques Recap

This week you've learned:
- **Chunking** - Breaking info into smaller pieces
- **Association** - Connecting new to known
- **Visualization** - Using mental pictures
- **The Memory Palace** - Creating mental journeys
- **Name techniques** - Making connections

### Which Technique Worked Best for You?

Some women find:
- Visual techniques work best
- Story method feels natural
- Combining approaches works well

There's no wrong answer - use what works for you!

### Journal Prompt:
Describe a situation this week where you used one of these memory techniques. How did it help?

### Building Your Memory Toolkit:
Start keeping a "memory strategies" note in your phone. Add techniques that work for you so you can reference them when needed.

### Looking Ahead:
Next week focuses on focus and concentration - helping you stay on task despite distractions.`},{id:"brain-health-w3d1",week:3,title:"Week 3, Day 1: Focus Fundamentals",content:`## Week 3, Day 1: Focus Fundamentals

### Welcome to Focus Week!

This week we'll tackle concentration and distraction management.

### Why Focus Is Hard During Menopause

**Hormonal Factors:**
- Estrogen affects attention pathways
- Progesterone decline can increase anxiety
- Cortisol (stress hormone) rises with sleep disruption

**Environmental Factors:**
- Increased notifications (phones, emails)
- Multitasking expectations
- Information overload

### The Attention Span Truth

Your attention span isn't broken - it's designed for protection. Your brain evolved to notice everything (survival mode). Modern life asks us to ignore most of that.

### Focus Strategy: The Pomodoro Technique

1. Choose a task
2. Set timer for 25 minutes
3. Work with full focus
4. Take 5-minute break
5. Repeat (after 4, take longer break)

This works because:
- 25 minutes is manageable
- Breaks prevent mental fatigue
- Progress tracking motivates

### Today's Challenge:
Try one 25-minute focused work session. Put your phone in another room and see what you can accomplish!`},{id:"brain-health-w3d2",week:3,title:"Week 3, Day 2: Eliminating Distractions",content:`## Week 3, Day 2: Eliminating Distractions

### Your Environment Shapes Your Focus

Most distractions aren't about willpower - they're about environment design.

### The Distraction Audit

For one day, notice every time you're pulled away from a task. Common culprits:

**Digital:**
- Phone notifications
- Email pop-ups
- Social media
- News websites

**Physical:**
- Messy desk
- Nearby conversations
- Background TV

**Internal:**
- Worrying thoughts
- Hunger
- Fatigue

### Create a Focus Sanctuary

**For Digital:**
- Turn off non-essential notifications
- Use "Do Not Disturb" mode
- Check email/social media at set times only
- Use website blockers during work time

**For Physical:**
- Clear one desk surface completely
- Use headphones (even without music) as a signal
- Keep water and snacks nearby

**For Internal:**
- Write worries on a "parking lot" list before focusing
- Keep a water bottle at your desk
- Schedule breaks

### Challenge:
Choose ONE distraction to eliminate starting today. Small changes create big results.`},{id:"brain-health-w3d3",week:3,title:"Week 3, Day 3: Single-Tasking Power",content:`## Week 3, Day 3: Single-Tasking Power

### The Myth of Multitasking

Your brain doesn't truly multitask - it rapidly switches between tasks. Each switch costs time and mental energy.

**Research shows:**
- Multitasking reduces productivity by 40%
- More errors occur
- Takes 50% longer to complete tasks
- Increases stress

### The Single-Tasking Solution

When you do one thing at a time, you:
- Work faster
- Make fewer mistakes
- Feel less overwhelmed
- Produce better results

### How to Single-Task:

**Before:**
"Check email, return call, finish report, review budget, post to social..."

**During:**
"One task at a time. Email now. Phone later."

**After:**
Celebrate completion!

### Building Single-Tasking Habits:

1. **Start small** - 15 minutes of single-tasking, then 20, then 25
2. **Use transitions** - "Email time is over. Report time begins."
3. **Close tabs** - Only have what's relevant open
4. **Put phone away** - Out of sight, out of mind

### Practice Today:
Complete one task with zero distractions. Notice how it feels to give something your full attention.`},{id:"brain-health-w3d4",week:3,title:"Week 3, Day 4: Week 3 Reflection",content:`## Week 3, Day 4: Week 3 Reflection

### Focus & Concentration Recap

This week you've learned:
- The Pomodoro Technique for managing work sessions
- How to audit and eliminate distractions
- Why single-tasking beats multitasking
- Environmental design for better focus

### Progress Check:

**Last week, how often did you feel distracted?**
**This week, how often did you feel distracted?**

Notice the difference. Change is happening!

### Journal Prompt:
Describe a time when you successfully used single-tasking this week. How did it feel different from multitasking?

### Advanced Tip:
Try "time blocking" - schedule specific times for specific tasks in your calendar. Treat each block as an appointment with yourself.

### Looking Ahead:
Next week is the final week - we'll build sustainable brain health habits for long-term cognitive wellness.`},{id:"brain-health-w4d1",week:4,title:"Week 4, Day 1: Building Your Routine",content:`## Week 4, Day 1: Building Your Routine

### Welcome to the Final Week!

This week is about creating sustainable habits for long-term brain health.

### Why Routines Matter

Your brain loves patterns. When activities become routine, they require less cognitive effort - freeing up mental energy for important things.

### Brain-Healthy Daily Routine:

**Morning:**
- Hydrate first thing (water + light movement)
- Eat protein-rich breakfast
- Do most challenging tasks when energy is high
- Take short breaks every 90 minutes

**Afternoon:**
- Light movement after lunch
- Save admin tasks for post-lunch energy dip
- Stay hydrated

**Evening:**
- Wind-down routine (lights dim, screens off)
- Review tomorrow to reduce worry
- Consistent bedtime

**Brain Boosters Anytime:**
- Deep breaths (oxygen to brain)
- Quick walk (blood flow)
- Hydration checks
- 5-minute mindfulness

### Your Action:
Choose ONE element to add to your routine starting today. Just one. Tomorrow, add another.`},{id:"brain-health-w4d2",week:4,title:"Week 4, Day 2: Exercise for Brain Health",content:`## Week 4, Day 2: Exercise for Brain Health

### Move Your Body, Boost Your Brain

Exercise is one of the most powerful tools for cognitive health.

### How Exercise Helps:

**Immediate Effects:**
- Increases blood flow to brain
- Releases neurotransmitters (feel-good chemicals)
- Improves mood and focus

**Long-term Effects:**
- Stimulates brain cell growth
- Protects existing brain cells
- Improves memory and learning
- Reduces risk of cognitive decline

### Best Exercises for Brain Health:

**Aerobic Exercise (Best)**
- Walking, swimming, cycling, dancing
- 150 minutes weekly (30 min, 5 days)
- Gets blood pumping to brain

**Resistance Training**
- Lifting weights, bodyweight exercises
- 2-3 times weekly
- Supports overall brain health

**Mind-Body Exercise**
- Yoga, tai chi, qigong
- Combines physical with mental focus
- Reduces stress (cortisol)

### Starting Tips:
- Start where you are
- 10 minutes counts
- Walking is perfect
- Consistency > intensity

### This Week's Challenge:
Schedule 3 exercise sessions this week. Even a 15-minute walk counts!`},{id:"brain-health-w4d3",week:4,title:"Week 4, Day 3: Nutrition for Cognition",content:`## Week 4, Day 3: Nutrition for Cognition

### Feed Your Brain

What you eat directly affects how your brain functions.

### Brain-Boosting Foods:

**Omega-3 Rich Foods:**
- Salmon, sardines, mackerel
- Walnuts, flaxseed, chia seeds
- Supports brain cell structure

**Antioxidant-Rich Foods:**
- Blueberries, dark chocolate
- Leafy greens (spinach, kale)
- Protects brain from damage

**Whole Grains:**
- Oats, quinoa, brown rice
- Provides steady energy
- Supports blood sugar balance

**Colorful Vegetables:**
- variety = variety of nutrients
- Aim for 5+ servings daily

### Foods That Harm:

**Too Much Sugar:**
- Causes brain fog
- Wrecks energy levels

**Excess Alcohol:**
- Directly damages brain cells
- Disrupts sleep

**Highly Processed Foods:**
- Contains additives linked to cognitive issues
- Often lacks nutrients

### Simple Swaps:
- White bread → whole grain bread
- Chips → nuts or seeds
- Candy → dark chocolate or fruit
- Soda → sparkling water with fruit

### Your Action:
Add one brain-healthy food to your meals today. Small changes add up!`},{id:"brain-health-w4d4",week:4,title:"Week 4, Day 4: Your Brain Health Summary",content:`## Week 4, Day 4: Your Brain Health Summary

### Congratulations! You've Completed the Brain Health Bootcamp!

### What You've Learned:

**Week 1: Understanding Brain Changes**
- Estrogen affects cognitive function
- Sleep quality impacts brain health
- Brain fog is normal but manageable

**Week 2: Memory Mastery**
- Chunking and association techniques
- Visualization and memory palace
- Name recall strategies

**Week 3: Focus Fundamentals**
- Pomodoro Technique
- Eliminating distractions
- Single-tasking power

**Week 4: Building Your Routine**
- Daily brain health habits
- Exercise for cognition
- Nutrition for brain health

### Your Brain Health Action Plan:

1. **Memory:** I will use chunking and visualization
2. **Focus:** I will practice Pomodoro and single-task
3. **Environment:** I will eliminate my biggest distraction
4. **Lifestyle:** I will exercise 3x weekly
5. **Nutrition:** I will add brain foods daily

### Remember:
- Be patient with yourself
- Practice makes progress
- Small consistent actions create change
- Your brain is adaptable and resilient

### Affirmation:
"I am actively supporting my brain health. Every strategy I use strengthens my cognitive wellness."`}],"sleep-resilience":[{id:"sleep-resilience-intro",title:"Sleep Resilience Program - Introduction",content:`Welcome to the Sleep Resilience Program!

Sleep disturbances are common during menopause, but you can build better sleep habits. This 3-week program will help you get the restful sleep you deserve.

## What You'll Learn:
- Why menopause affects your sleep
- Creating the perfect sleep environment
- Sleep hygiene best practices
- Relaxation techniques for better rest

## Week 1: Understanding Sleep Challenges
Learn about the hormonal and physical factors affecting your sleep.

## Week 2: Your Sleep Environment
Create a bedroom designed for restful sleep.

## Week 3: Building Sleep Habits
Develop a sustainable evening routine for better sleep.

Let's start building your path to better sleep!`},{id:"sleep-resilience-w1d1",week:1,title:"Week 1, Day 1: Menopause & Sleep",content:`## Week 1, Day 1: Menopause & Sleep

### Understanding Why Menopause Disrupts Sleep

Sleep changes during menopause are incredibly common - up to 60% of women experience significant sleep disturbances. You are definitely not alone.

### Why Menopause Affects Sleep:

**Hormonal Shifts:**
- **Estrogen decline** affects the brain's sleep-wake cycle
- **Progesterone loss** removes a natural sleep-promoting hormone
- **Cortisol increases** as stress hormones become dysregulated

**Physical Changes:**
- Night sweats cause repeated awakenings
- Hot flashes create temperature instability
- Restless legs become more common
- Sleep apnea risk increases

**Psychological Factors:**
- Anxiety increases
- Depression risk rises
- Stress amplifies symptoms

### The Vicious Cycle:

1. Hormonal changes → disrupted sleep
2. Poor sleep → next day fatigue
3. Fatigue → increased stress
4. Stress → worse sleep
5. Repeat...

### Understanding this cycle is the first step to breaking it!

### Action for Today:
Start a "Sleep & Symptoms" journal. For the next 3 days, note:
- What time you went to bed
- How many times you woke up
- Any night sweats or hot flashes
- How you felt in the morning`},{id:"sleep-resilience-w1d2",week:1,title:"Week 1, Day 2: Night Sweats & Sleep",content:`## Week 1, Day 2: Night Sweats & Sleep

### Managing Night Sweats for Better Sleep

Night sweats are one of the biggest sleep disruptors during menopause. Understanding how to manage them can dramatically improve sleep quality.

### Why Night Sweats Happen:

Declining estrogen confuses your body's temperature regulation (hypothalamus). Your brain thinks you're too hot, triggering:
- Blood vessel dilation
- Sweating to cool down
- Body temperature spikes
- Frequent awakenings

### Immediate Relief Strategies:

**Cool Your Body:**
- Keep bedroom at 65-68°F (18-20°C)
- Use cooling mattress pad or pillows
- Wear moisture-wicking pajamas
- Keep a cool pack under your pillow

**Cool Your Surroundings:**
- Use a small fan near your bed
- Open windows or use AC
- Sleep on the edge of the bed (cooler)
- Keep sheets light and breathable

**Pre-Sleep Routine:**
- Take a cool shower before bed
- Avoid spicy foods, caffeine, alcohol in evening
- Stay hydrated but not too much right before bed

### Action for Tonight:
Set up your bedroom for cool sleep. Even one change can help!`},{id:"sleep-resilience-w1d3",week:1,title:"Week 1, Day 3: Sleep Architecture",content:`## Week 1, Day 3: Sleep Architecture

### Understanding Your Sleep Cycles

During a typical night, you cycle through different stages of sleep. Understanding this can help you be kinder to yourself about sleep struggles.

### The Sleep Stages:

**Stage 1 (Light Sleep):**
- Transition from wakefulness
- Easy to be awakened
- Lasts 5-10 minutes

**Stage 2 (Light Sleep):**
- Body temperature drops
- Heart rate slows
- Brain waves slow down

**Stage 3 (Deep Sleep):**
- Most restorative stage
- Tissue repair, immune function
- Hardest to wake from
- More prevalent in first half of night

**REM Sleep (Dreaming):**
- Brain is active
- Memory consolidation
- Emotional processing
- More prevalent in second half of night

### Why This Matters:

**Menopause can affect:**
- Time spent in deep sleep
- Total sleep time
- Sleep efficiency (time asleep vs in bed)

**Understanding helps you:**
- Not panic when you wake at night
- Know that some wakefulness is normal
- Focus on sleep quality, not just quantity`},{id:"sleep-resilience-w1d4",week:1,title:"Week 1, Day 4: Week 1 Reflection",content:`## Week 1, Day 4: Week 1 Reflection

### Understanding Sleep Challenges Recap

This week you've learned:
- Why menopause affects sleep through hormones
- How night sweats disrupt sleep
- The architecture of healthy sleep
- Why sleep struggles are normal (not your fault!)

### Journal Prompt:
What did you discover from your Sleep & Symptoms journal? Any patterns emerging?

### Progress Check:
- Are you waking less often?
- Any changes helping with night sweats?
- How is your morning energy?

### Remember:
- Sleep improvement takes time
- Be consistent with strategies
- Progress isn't always linear

### Looking Ahead:
Next week, we'll focus on creating the perfect sleep environment - one of the most impactful changes you can make.`},{id:"sleep-resilience-w2d1",week:2,title:"Week 2, Day 1: Your Sleep Sanctuary",content:`## Week 2, Day 1: Your Sleep Sanctuary

### Creating the Ideal Sleep Environment

Your bedroom should be a sanctuary dedicated to sleep. Small changes can create dramatic improvements.

### Temperature - The Most Important Factor:

**Ideal: 65-68°F (18-20°C)**

Why it matters:
- Body temperature naturally drops during sleep
- Cool room supports this process
- Too warm = more awakenings

**Quick solutions:**
- Lower thermostat
- Use fans
- Open windows
- Cooling mattress pad

### Light - Control Your Exposure:

**During the day:**
- Get bright light in the morning
- Helps set your circadian rhythm
- 10-15 minutes outside helps

**Before bed:**
- Dim lights 1-2 hours before sleep
- Avoid screens or use blue light filters
- Use red/orange lights (less stimulating)

**At night:**
- Complete darkness
- Blackout curtains or eye mask
- Minimal night lights

### Sound - Create Your Ideal Soundscape:

**Helpful sounds:**
- White noise (fan, machine)
- Rain sounds
- Gentle music

**Sounds to reduce:**
- Use earplugs if needed
- Address noisy neighbors
- Put phones on silent`},{id:"sleep-resilience-w2d2",week:2,title:"Week 2, Day 2: Bedding & Comfort",content:`## Week 2, Day 2: Bedding & Comfort

### Your Bed Should Be a Retreat

Bedding quality significantly impacts sleep quality. Here's what to consider:

### Mattress:

**Signs you need a new one:**
- Waking with aches
- Can't get comfortable
- Mattress is 7-10+ years old

**Good options for menopause:**
- Memory foam (temperature sensitive)
- Breathable materials
- Cooling gel layers

### Pillows:

**Your pillow matters more than you think!**

Consider:
- Cooling pillows (many available now)
- Proper loft for your sleep position
- Quality memory foam
- Replace every 1-2 years

### Sheets & Blankets:

**Breathable is key:**
- Cotton or bamboo sheets
- Lower thread count (200-400)
- Moisture-wicking fabrics available

**Layering system:**
- Light sheet + heavier blanket
- Add/remove as needed for temperature

### Tonight's Action:
Rate your current bedding (1-10). What's one upgrade you could make? Even a new pillow can help!`},{id:"sleep-resilience-w2d3",week:2,title:"Week 2, Day 3: Electronics & Sleep",content:`## Week 2, Day 3: Electronics & Sleep

### The Screen Problem

Light from screens (phones, tablets, computers, TVs) tells your brain it's still daytime. This suppresses melatonin and makes it harder to fall asleep.

### Blue Light Effects:

- Suppresses melatonin production
- Delays sleep onset
- Reduces sleep quality
- Can shift circadian rhythm

### The Sleep Disrupting Routine:

1. Evening phone check
2. "Just one more" episode
3. Scrolling social media
4. Checking email one last time
5. Wondering why you can't sleep

### Better Evening Habits:

**The Hour Before Bed:**
- Put phone in another room
- Read a physical book
- Gentle stretching
- Journal or color

**If you must use screens:**
- Blue light filter/night mode
- Reduce brightness
- Keep distance
- Use F.lux or similar apps

**The "Phone Station":**
Create a charging station outside your bedroom. Plug in your phone here at night. This creates physical separation.

### Challenge:
Create a "screens down" time for tonight. Start with 30 minutes before bed and build from there!`},{id:"sleep-resilience-w2d4",week:2,title:"Week 2, Day 4: Week 2 Reflection",content:`## Week 2, Day 4: Week 2 Reflection

### Your Sleep Environment Recap

This week you've learned:
- Temperature control for sleep
- Light management strategies
- Sound optimization
- Bedding upgrades
- Electronics boundaries

### Journal Prompt:
What changes have you made to your sleep environment? Which has helped the most?

### Sleep Environment Checklist:
- [ ] Bedroom is cool (65-68°F)
- [ ] Dark (blackout curtains or mask)
- [ ] Quiet (white noise if needed)
- [ ] Comfortable bedding
- [ ] Electronics charged outside room

### Looking Ahead:
Next week is the final week - we'll build sustainable evening habits that support your best sleep.`},{id:"sleep-resilience-w3d1",week:3,title:"Week 3, Day 1: Evening Wind-Down",content:`## Week 3, Day 1: Evening Wind-Down

### The Power of Routine

Your body thrives on routines. A consistent evening routine signals to your brain that it's time to prepare for sleep.

### The Wind-Down Hour:

**90 minutes before bed:**
- Dim lights
- Put away screens
- Start relaxing activities

**60 minutes before bed:**
- Gentle stretching or yoga
- Warm bath or shower
- Light reading

**30 minutes before bed:**
- Journal or gratitude practice
- Relaxation exercises
- Prepare for tomorrow

### Sample Wind-Down Routine:

8:00 PM - Dim house lights
8:15 PM - Put phone on charger (kitchen)
8:30 PM - Warm shower
8:45 PM - Herbal tea
8:55 PM - Journal (3 things I'm grateful for)
9:00 PM - Read book
9:20 PM - Lights out

### Your Action:
Design YOUR ideal wind-down routine. Start small - even 15 minutes helps.`},{id:"sleep-resilience-w3d2",week:3,title:"Week 3, Day 2: Relaxation Techniques",content:`## Week 3, Day 2: Relaxation Techniques

### Calming Your Mind & Body

When your mind is racing, sleep is difficult. These techniques help activate your parasympathetic nervous system (rest and digest mode).

### Technique 1: Progressive Muscle Relaxation

Starting at your toes and moving up:
1. Tense muscles for 5 seconds
2. Release and notice the relaxation
3. Move to next body part

Sequence: Feet → Calves → Thighs → Hips → Stomach → Chest → Arms → Hands → Shoulders → Face

### Technique 2: 4-7-8 Breathing

A natural tranquilizer for the nervous system:
1. Breathe in through nose for 4 counts
2. Hold for 7 counts
3. Exhale through mouth for 8 counts
4. Repeat 3-4 times

### Technique 3: Body Scan

Lie down and mentally scan your body:
1. Notice areas of tension
2. Breathe into those areas
3. Release tension with exhale
4. Move through entire body

### Practice Tonight:
Try one technique tonight before sleep. Notice how it affects your ability to fall asleep.`},{id:"sleep-resilience-w3d3",week:3,title:"Week 3, Day 3: Managing Racing Thoughts",content:`## Week 3, Day 3: Managing Racing Thoughts

### When Your Brain Won't Stop

One of the biggest sleep obstacles is a busy mind. Here's how to quiet it:

### The "Brain Dump" Method:

Before bed, write down:
- Tomorrow's tasks
- Worries and concerns
- Anything on your mind

This "dumps" your thoughts so they're not circling in your head.

### Cognitive Restructuring:

**Instead of:**
"Ugh, I'll never fall asleep. I'm going to be so tired tomorrow."

**Try:**
"My brain is active right now. That's okay. Even resting quietly is restful. My body knows how to sleep."

### The Paradoxical Approach:

Instead of trying TO fall asleep, try to stay awake. Paradoxically, this often helps you fall asleep.

### If You Wake at Night:

**Don't:**
- Look at phone
- Watch the clock
- Force yourself to sleep

**Do:**
- Practice one relaxation technique
- Get up if not asleep in 20 minutes
- Return when sleepy
- Be patient with yourself`},{id:"sleep-resilience-w3d4",week:3,title:"Week 3, Day 4: Your Sleep Summary",content:`## Week 3, Day 4: Your Sleep Summary

### Congratulations! You've Completed the Sleep Resilience Program!

### What You've Learned:

**Week 1: Understanding Sleep Challenges**
- Why menopause affects sleep
- Night sweat management
- Sleep architecture

**Week 2: Your Sleep Environment**
- Temperature optimization
- Light and sound control
- Bedding and comfort
- Electronics boundaries

**Week 3: Building Sleep Habits**
- Evening wind-down routine
- Relaxation techniques
- Managing racing thoughts

### Your Sleep Action Plan:

1. **Environment:** I will maintain a cool, dark, quiet bedroom
2. **Routine:** I will follow a consistent wind-down routine
3. **Relaxation:** I will use at least one relaxation technique nightly
4. **Mind:** I will practice letting go of racing thoughts

### Remember:
- Be patient - sleep improvement takes 4-6 weeks
- Consistency is key
- Some nights will be better than others
- You're building new habits

### Affirmation:
"I am creating the conditions for restful, restorative sleep. My body knows how to sleep."`}],"stress-reduction":[{id:"stress-reduction-intro",title:"Stress Reduction Program - Introduction",content:`Welcome to the Stress Reduction Program!

Stress can amplify menopause symptoms and affect your quality of life. This 3-week program teaches practical techniques to manage stress effectively.

## What You'll Learn:
- Understanding your stress response
- Breathing and relaxation techniques
- Mindfulness practices
- Building resilience

## Week 1: Recognizing Stress
Learn to identify stress signals in your body and mind.

## Week 2: Relaxation Techniques
Practical breathing and relaxation exercises you can use anywhere.

## Week 3: Building Resilience
Create a sustainable stress management routine.

Take a deep breath and let's begin!`},{id:"stress-reduction-w1d1",week:1,title:"Week 1, Day 1: Understanding Stress",content:`## Week 1, Day 1: Understanding Stress

### What Is Stress?

Stress is your body's response to demands or pressures. While often negative, stress itself isn't always bad - it depends on how you respond to it.

### The Stress Response System:

**Your Hypothalamus (brain's alarm):**
Detects threat/demand → activates fight-or-flight system

**Immediate Response:**
- Heart rate increases
- Breathing quickens
- Muscles tense
- Energy surges
- Digestion slows

**Purpose:** To help you survive immediate threats

### Stress During Menopause:

**Hormonal Factors:**
- Cortisol (stress hormone) can become dysregulated
- Declining progesterone reduces calming effects
- Estrogen fluctuations affect mood regulation

**Result:** You may feel:
- More easily stressed
- Slower to recover from stress
- Overwhelmed by things that didn't bother you before

### Understanding this helps normalize your experience!

### Action for Today:
Start a "Stress Awareness" journal. For 3 days, note:
- What triggers your stress
- How your body feels when stressed
- How you respond to stress`},{id:"stress-reduction-w1d2",week:1,title:"Week 1, Day 2: Stress Signs in Your Body",content:`## Week 1, Day 2: Stress Signs in Your Body

### Listening to Your Body

Stress affects your body before you consciously recognize it. Learning these signals helps you intervene early.

### Common Physical Stress Signs:

**Muscular:**
- Jaw clenching
- Shoulder tension
- Headaches
- Back pain
- Fist clenching

**Respiratory:**
- Shallow breathing
- Chest tightness
- Shortness of breath

**Digestive:**
- Stomach knots
- Nausea
- Appetite changes

**Other:**
- Racing heart
- Sweating
- Restlessness
- Fatigue

### Stress Signs Specific to Menopause:

- More frequent/intense hot flashes during stress
- Mood swings triggered by stress
- Sleep disruption from stress
- Brain fog worsens with stress

### Recognizing Patterns:

**Common triggers:**
- Work deadlines
- Family responsibilities
- Financial concerns
- Health worries
- Time pressure

### Action for Today:
At the end of today, check in with your body. Where do you hold tension? This awareness is the first step to releasing it.`},{id:"stress-reduction-w1d3",week:1,title:"Week 1, Day 3: Stress & Menopause Connection",content:`## Week 1, Day 3: Stress & Menopause Connection

### The Cycle You May Not See

Stress and menopause symptoms create a feedback loop that can feel overwhelming.

### The Cycle:

1. **Menopause symptoms** (hot flashes, poor sleep, mood changes)
2. **Stress response** (body interprets symptoms as threats)
3. **Increased cortisol** (stress hormone)
4. **Worse symptoms** (cortisol worsens hot flashes, disrupts sleep)
5. **More stress** (from feeling unwell)
6. **Repeat...**

### Why This Matters:

Understanding this cycle shows why stress management isn't just about "feeling better" - it's actually helps reduce physical menopause symptoms.

### Breaking the Cycle:

**Step 1: Reduce Stress Response**
- Use relaxation techniques
- Practice deep breathing
- Get regular exercise

**Step 2: Support Your System**
- Prioritize sleep
- Eat balanced meals
- Stay hydrated

**Step 3: Build Resilience**
- Mindfulness practices
- Social support
- Meaningful activities

### Action for Today:
Identify one thing in this cycle you can address starting now. Small changes interrupt the cycle!`},{id:"stress-reduction-w1d4",week:1,title:"Week 1, Day 4: Week 1 Reflection",content:`## Week 1, Day 4: Week 1 Reflection

### Recognizing Stress Recap

This week you've learned:
- How your stress response system works
- Physical signs of stress in your body
- The stress-menopause cycle
- Why managing stress helps symptoms

### Journal Prompt:
What did you discover about your stress patterns? Where do you hold tension? What triggers you most?

### The Power of Awareness:

Simply noticing stress is the first step to managing it. You can't change what you don't see.

### Looking Ahead:
Next week, we'll learn specific relaxation techniques you can use anytime, anywhere to calm your nervous system.`},{id:"stress-reduction-w2d1",week:2,title:"Week 2, Day 1: Breath as Your Anchor",content:`## Week 2, Day 1: Breath as Your Anchor

### The Power of Your Breath

Your breath is unique because it's the only bodily function you can control consciously - AND it directly affects your nervous system.

**Deep, slow breathing → Activates parasympathetic (calming) system**
**Shallow, fast breathing → Activates sympathetic (stress) system**

### The 4-7-8 Technique:

This is one of the most powerful calming techniques:

1. **Inhale** through your nose for 4 counts
2. **Hold** your breath for 7 counts
3. **Exhale** through your mouth for 8 counts
4. **Repeat** 3-4 times

### When to Use It:
- Before a stressful meeting
- When feeling overwhelmed
- Before sleep
- During a hot flash
- Anytime you need calm

### Practice Today:
Practice 4-7-8 breathing 3 times today - once in the morning, afternoon, and evening. Notice how it affects your stress level.`},{id:"stress-reduction-w2d2",week:2,title:"Week 2, Day 2: Quick Calm Techniques",content:`## Week 2, Day 2: Quick Calm Techniques

### Techniques for Stressful Moments

These can be used anywhere - at work, in traffic, during family interactions.

### 1. The 3-Breath Reset:

When you feel stress rising:
1. Take one deep breath
2. Notice what's happening
3. Choose your response
4. Take two more calming breaths

### 2. The STOP Technique:

- **S**top what you're doing
- **T**ake a breath
- **O**bserve what's happening in body and mind
- **P**roceed with intentional action

### 3. The 5-4-3-2-1 Grounding:

When anxiety spikes:
- 5 things you SEE
- 4 things you TOUCH
- 3 things you HEAR
- 2 things you SMELL
- 1 thing you TASTE

This brings you into the present moment and interrupts the stress cycle.

### 4. Physical Release:

- Roll your shoulders back 5 times
- Open your chest - arms back
- Shake your hands vigorously
- Drop your jaw, unclench teeth

### Practice Today:
Choose one technique to practice today. Try it at least 3 times.`},{id:"stress-reduction-w2d3",week:2,title:"Week 2, Day 3: Progressive Relaxation",content:`## Week 2, Day 3: Progressive Relaxation

### Progressive Muscle Relaxation (PMR)

This technique releases physical tension you may not even notice, which in turn calms your mind.

### How It Works:

**Tense** a muscle group for 5 seconds
**Release** and notice the difference
**Relax** for 30 seconds before moving on

### The Sequence:

1. **Feet** - Curl toes, then release
2. **Calves** - Point toes toward shin, then release
3. **Thighs** - Squeeze muscles, then release
4. **Stomach** - Tighten as if preparing for a punch, then release
5. **Chest** - Take a deep breath and hold, then release
6. **Shoulders** - Shrug up toward ears, then release
7. **Hands** - Make tight fists, then release
8. **Arms** - Bend and tense biceps, then release
9. **Face** - Scrunch muscles (eyes, nose, mouth), then release

### When to Practice:
- Before bed
- During breaks at work
- When you notice physical tension
- During stressful moments (simplified version)

### Practice Tonight:
Do a full PMR session before bed. Notice how relaxed your body feels afterward.`},{id:"stress-reduction-w2d4",week:2,title:"Week 2, Day 4: Week 2 Reflection",content:`## Week 2, Day 4: Week 2 Reflection

### Relaxation Techniques Recap

This week you've learned:
- 4-7-8 breathing technique
- Quick calm techniques (STOP, 3-breath reset, 5-4-3-2-1)
- Progressive muscle relaxation

### Practice Log:
Which techniques have you practiced? Which feels most natural/effective for you?

### Building Your Toolkit:
Write down the techniques that work for you so you can reference them when stressed.

### Looking Ahead:
Next week is the final week - we'll build sustainable resilience practices for long-term stress management.`},{id:"stress-reduction-w3d1",week:3,title:"Week 3, Day 1: Building Your Routine",content:`## Week 3, Day 1: Building Your Stress-Management Routine

### The Power of Daily Practice

While quick techniques help in the moment, building regular stress-management habits prevents stress from building up in the first place.

### Daily Practices to Include:

**Morning (5-10 minutes):**
- Brief meditation or breathing
- Gentle stretching
- Set daily intentions

**Midday (5 minutes):**
- Check in with stress levels
- Quick reset breathing
- Movement break

**Evening (10-15 minutes):**
- Wind-down routine
- Progressive relaxation
- Gratitude practice

### Building Habits:

**Start Small:**
- Choose ONE practice
- Do it for 7 days consecutively
- Add another practice
- Repeat

**Cue Your Practice:**
- After I brush my teeth, I will do 3 deep breaths
- Before my morning coffee, I will stretch
- After work, I will do progressive relaxation

### Your Action:
Choose ONE daily practice to start tomorrow. Make it small, achievable, and attached to an existing habit.`},{id:"stress-reduction-w3d2",week:3,title:"Week 3, Day 2: Mindfulness Basics",content:`## Week 3, Day 2: Mindfulness Basics

### What Is Mindfulness?

Mindfulness is paying attention to the present moment without judgment. It's a skill that reduces stress and improves well-being.

### Common Misconceptions:

**"I can't clear my mind"**
- No one can clear their mind completely
- Mindfulness is noticing when your mind wanders
- Gently return attention to the present

**"I don't have time"**
- Start with just 5 minutes
- It's about quality, not duration
- Regular short practice is better than occasional long sessions

### Simple Mindfulness Practice:

**The Body Scan (5 minutes):**
1. Lie or sit comfortably
2. Close your eyes or soften your gaze
3. Bring attention to your feet - notice sensations
4. Slowly move attention up through your body
5. If mind wanders, gently return
6. Continue until you've scanned entire body

### Mindfulness in Daily Life:

- Mindful eating (one meal without distractions)
- Mindful walking (notice each step)
- Mindful listening (full attention in conversation)

### Practice Today:
Do one 5-minute body scan. If your mind wanders 100 times, that's okay - each return is practice.`},{id:"stress-reduction-w3d3",week:3,title:"Week 3, Day 3: Building Resilience",content:`## Week 3, Day 3: Building Resilience

### What Is Resilience?

Resilience is your ability to adapt and recover from stress. It's not about avoiding stress - it's about bouncing back.

### Resilience Factors:

**Physical:**
- Regular exercise
- Quality sleep
- Balanced nutrition
- Adequate rest

**Emotional:**
- Self-awareness
- Emotional regulation
- Flexibility in thinking
- Self-compassion

**Social:**
- Supportive relationships
- Community connection
- Asking for help
- Setting boundaries

**Cognitive:**
- Problem-solving skills
- Perspective-taking
- Learning from experience
- Meaning-making

### Building Your Resilience:

**Action 1:** Identify your support system. Who can you call when stressed? Make a list.

**Action 2:** Practice self-compassion. When you mess up, would you talk to a friend the way you talk to yourself?

**Action 3:** Set one boundary this week. Protect your time and energy.

### Remember:
Resilience isn't a trait you're born with - it's a skill you build. Every stress you handle builds your capacity for the next one.`},{id:"stress-reduction-w3d4",week:3,title:"Week 3, Day 4: Your Stress Summary",content:`## Week 3, Day 4: Your Stress Summary

### Congratulations! You've Completed the Stress Reduction Program!

### What You've Learned:

**Week 1: Recognizing Stress**
- Understanding your stress response
- Physical signs of stress
- Stress-menopause cycle

**Week 2: Relaxation Techniques**
- 4-7-8 breathing
- Quick calm techniques
- Progressive muscle relaxation

**Week 3: Building Resilience**
- Daily stress-management routine
- Mindfulness basics
- Building resilience factors

### Your Stress-Management Action Plan:

1. **Daily Practice:** I will do at least one relaxation technique daily
2. **Mindfulness:** I will practice 5 minutes of mindfulness most days
3. **Support:** I will maintain connection with my support system
4. **Self-Compassion:** I will speak to myself with kindness

### Remember:
- Stress management is a skill that improves with practice
- It's not about eliminating all stress
- It's about building your capacity to handle what comes

### Affirmation:
"I am building resilience. I have the tools to manage stress. I am stronger than my challenges."`}],"hot-flash-relief":[{id:"hot-flash-relief-intro",title:"Hot Flash Relief - Introduction",content:`Welcome to the Hot Flash Relief Program!

Hot flashes are one of the most common menopause symptoms. This 2-week program provides evidence-based strategies to help you manage and reduce hot flashes.

## What You'll Learn:
- Understanding what triggers your hot flashes
- Lifestyle modifications that help
- Natural remedies and supplements
- When to consider medical options

## Week 1: Identifying Triggers
Keep track of your hot flashes and discover your personal triggers.

## Week 2: Finding Relief
Evidence-based strategies to reduce hot flash frequency and intensity.

Let's start your journey to relief!`},{id:"hot-flash-relief-w1d1",week:1,title:"Week 1, Day 1: Understanding Hot Flashes",content:`## Week 1, Day 1: Understanding Hot Flashes

### What Are Hot Flashes?

Hot flashes are sudden feelings of intense heat, usually affecting the face, neck, and chest. They're one of the most common menopause symptoms, affecting up to 75% of women.

### The Science:

Your hypothalamus (brain's thermostat) gets confused by hormonal changes. It thinks you're too hot, triggering:
- Blood vessel dilation (flushing)
- Increased heart rate
- Sweating to cool down
- Sometimes chills after

### Hot Flash Basics:

**Duration:** Usually 30 seconds to 10 minutes
**Frequency:** Can range from a few per week to many per day
**Timing:** Often worse at night (night sweats)

### Starting Your Hot Flash Log:

For the next 2 weeks, track your hot flashes:
- Time of day
- Intensity (1-10)
- Possible trigger
- Duration
- What helped

This information is gold - it helps you identify YOUR personal patterns and triggers.

### Today's Action:
Start your hot flash log. Even if you don't have one today, note when you might expect one (evening, stress, etc.)`},{id:"hot-flash-relief-w1d2",week:1,title:"Week 1, Day 2: Common Triggers",content:`## Week 1, Day 2: Common Triggers

### Knowing Your Triggers

While every woman's triggers are different, common culprits affect many women. Knowing these helps you notice patterns.

### Food & Drink Triggers:

**Worst offenders:**
- Caffeine (coffee, tea, chocolate)
- Alcohol (especially wine)
- Spicy foods
- Hot beverages
- Processed foods

**Why:** These can directly affect hypothalamic function and increase metabolic heat.

### Environmental Triggers:

- Hot rooms
- Warm weather
- Heavy blankets
- Tight clothing
- Direct sunlight

### Emotional Triggers:

- Stress
- Anxiety
- Embarrassment
- Anger

### Situational Triggers:

- Exercise
- Saunas/hot tubs
- Cooking over heat
- Hot showers

### Building Your Awareness:

Looking at this list, which are YOUR likely triggers? Use your hot flash log to confirm.

### Today's Action:
Avoid ONE known trigger today (or reduce it significantly) and note the impact on your hot flashes.`},{id:"hot-flash-relief-w1d3",week:1,title:"Week 1, Day 3: Trigger Patterns",content:`## Week 1, Day 3: Trigger Patterns

### Analyzing Your Log

After a few days of tracking, patterns often emerge. Look for:
- Time of day patterns
- Food connections
- Stress correlations
- Environmental factors

### Common Patterns:

**Evening cluster:**
Many women experience more hot flashes in the evening, possibly due to:
- Cumulative daily stress
- Warm environments
- Alcohol consumption
- Melatonin fluctuations

**Stress connection:**
Stress doesn't directly cause hot flashes but can lower your threshold and make you more sensitive.

**Food timing:**
Some women react to foods eaten hours before - keep tracking!

### Creating Your Trigger Profile:

Based on your log, identify your top 3 triggers. These are the ones to address first.

### Action for Today:
Review your hot flash log. What patterns do you see? Share one discovery with yourself.`},{id:"hot-flash-relief-w1d4",week:1,title:"Week 1, Day 4: Week 1 Reflection",content:`## Week 1, Day 4: Week 1 Reflection

### Identifying Triggers Recap

This week you've learned:
- How hot flashes work
- Common triggers to watch for
- How to track your personal patterns

### Your Hot Flash Profile:

From your log, identify:
- Your most common time for hot flashes
- Your top 3 suspected triggers
- Average intensity and duration

### Knowledge is Power:

Understanding your triggers gives you control. Every trigger you reduce is one less hot flash to manage.

### Looking Ahead:
Next week, we'll focus on practical relief strategies - both lifestyle approaches and when to consider medical options.`},{id:"hot-flash-relief-w2d1",week:2,title:"Week 2, Day 1: Lifestyle Relief",content:`## Week 2, Day 1: Lifestyle Relief

### Evidence-Based Lifestyle Strategies

Research shows these strategies can reduce hot flash frequency and intensity.

### 1. Cooling Strategies:

**Dress in layers:**
- Remove layers when hot flash starts
- Choose breathable fabrics
- Cotton, bamboo, moisture-wicking

**Cool your environment:**
- Keep room at 68°F or below
- Use fans or AC
- Cooling pillow/mattress pad
- Handheld fan for on-the-go

**Cool your body:**
- Cold water on wrists
- Cool shower before bed
- Ice pack under pillow

### 2. Mind-Body Approaches:

**Deep breathing:**
- 4-7-8 breathing during a hot flash
- Can reduce intensity
- Works best with practice

**Cognitive strategies:**
- "This will pass" (hot flashes typically last 30 seconds-10 minutes)
- Visualization (imagine cooling waves)
- Relaxation response

### 3. Regular Exercise:

- Moderate exercise can reduce hot flash frequency
- Avoid exercising in hot environments
- Swimming is excellent (cooling and exercise)

### Action for Today:
Implement one new cooling strategy immediately.`},{id:"hot-flash-relief-w2d2",week:2,title:"Week 2, Day 2: Dietary Approaches",content:`## Week 2, Day 2: Dietary Approaches

### Foods That May Help:

**Phytoestrogen-rich foods:**
- Soy products (tofu, tempeh, edamame)
- Flaxseed
- Chickpeas
- Lentils

Note: Evidence is mixed, but some women find these helpful. Try adding soy to your diet and monitor results.

**Cooling foods:**
- Cucumber
- Watermelon
- Mint
- Melons
- Celery

**Anti-inflammatory foods:**
- Fatty fish (salmon, sardines)
- Leafy greens
- Berries
- Olive oil

### Foods to Limit or Avoid:

- Caffeine (coffee, tea, chocolate)
- Alcohol (especially wine)
- Spicy foods
- Sugary foods
- Processed foods

### Hydration:

Staying well-hydrated helps:
- Temperature regulation
- Overall health
- Reducing severity

Aim for 8-10 glasses of water daily.

### Action for Today:
Add one phytoestrogen-rich food to your diet today. Track any changes in your hot flashes.`},{id:"hot-flash-relief-w2d3",week:2,title:"Week 2, Day 3: Natural Supplements",content:`## Week 2, Day 3: Natural Supplements

### What the Research Shows:

While not as strong as medical options, some natural supplements show promise for hot flash relief.

### More Research Support:

**Black Cohosh:**
- Most studied herb for hot flashes
- Some women see 20-50% reduction
- Takes 4-8 weeks to see effect
- Start with low dose
- Note: Avoid if you have liver issues

**Red Clover:**
- Contains isoflavones
- Mixed research results
- May help some women
- Generally safe

### Limited/Weak Evidence:

**Evening Primrose Oil:**
- Some women report benefit
- Research inconsistent
- Generally safe

**Sage:**
- Traditional use for hot flashes
- Limited modern research
- Can be taken as tea or supplement

### What to Know:

- Supplements can interact with medications
- Quality varies widely
- Start one at a time
- Give it 4-6 weeks before judging
- Talk to your doctor before starting

### Note:
Natural doesn't always mean safe - always check with your healthcare provider.`},{id:"hot-flash-relief-w2d4",week:2,title:"Week 2, Day 4: Your Hot Flash Summary",content:`## Week 2, Day 4: Your Hot Flash Summary

### Congratulations! You've Completed the Hot Flash Relief Program!

### What You've Learned:

**Week 1: Identifying Triggers**
- How hot flashes work
- Common triggers
- How to track your patterns

**Week 2: Finding Relief**
- Cooling strategies
- Mind-body approaches
- Dietary modifications
- Natural supplements

### Your Hot Flash Action Plan:

1. **Tracking:** I will continue to track my hot flashes
2. **Avoiding Triggers:** I will minimize my top 3 triggers
3. **Cooling:** I will use immediate cooling strategies during hot flashes
4. **Diet:** I will add more cooling and phytoestrogen-rich foods
5. **Consult:** I will discuss medical options with my healthcare provider if needed

### Remember:
- Hot flashes are manageable
- What works varies by person
- Progress takes time
- You're not alone - 75% of women experience these

### Affirmation:
"I am taking control of my hot flashes. Every strategy I use brings me closer to relief."`}],"mood-mastery":[{id:"mood-mastery-intro",title:"Mood Mastery Program - Introduction",content:`Welcome to the Mood Mastery Program!

Mood changes during menopause are real and manageable. This 4-week program helps you navigate emotional shifts with confidence.

## What You'll Learn:
- Understanding hormonal mood effects
- Emotion regulation techniques
- Building emotional resilience
- Communication strategies

## Week 1: Understanding Mood Changes
Learn why your moods may feel different and what contributes to emotional shifts.

## Week 2: Emotion Regulation
Practical tools for managing mood swings and irritability.

## Week 3: Building Emotional Resilience
Develop habits that support emotional well-being.

## Week 4: Communication and Relationships
Navigate relationships during this transition.

Let's begin building your emotional toolkit!`},{id:"mood-mastery-w1d1",week:1,title:"Week 1, Day 1: Why Menopause Affects Mood",content:`## Week 1, Day 1: Why Menopause Affects Mood

### Understanding the Mood-Menopause Connection

Mood changes during menopause aren't "all in your head" - they have real biological causes.

### Hormonal Effects on Mood:

**Estrogen's Role:**
- Affects serotonin (mood regulation)
- Influences stress response
- Supports emotional stability
- Declining estrogen = less mood protection

**Progesterone's Role:**
- Has calming, anti-anxiety effects
- Promotes sleep
- Declining progesterone = less natural calm

**Cortisol Connection:**
- Stress hormone often elevated during menopause
- Can create mood instability
- Interacts with other hormones

### Common Mood Changes:

**Emotional lability:**
- Tears come more easily
- Quick shifts from happy to sad
- Feeling more sensitive

**Irritability:**
- Lower frustration tolerance
- Quick to anger
- "Short fuse"

**Anxiety:**
- Increased worry
- Racing thoughts
- Physical tension

**Depression risk:**
- Some women experience depression
- Risk increases if history of depression
- Hormonal shifts play a role

### Remember:
These changes are common, temporary, and manageable. You're not going crazy - your brain is adapting.`},{id:"mood-mastery-w1d2",week:1,title:"Week 1, Day 2: Tracking Your Moods",content:`## Week 1, Day 2: Tracking Your Moods

### The Power of Awareness

Understanding your mood patterns helps you predict and manage difficult times.

### What to Track:

**Daily Mood Check:**
- Overall mood level (1-10)
- Energy level (1-10)
- Any mood shifts (time, triggers)

**Potential Influences:**
- Sleep quality
- Exercise
- Food and hydration
- Stress level
- Social connection

**Patterns to Notice:**
- Time of day patterns
- Sleep-mood connection
- Trigger identification
- Response patterns

### Tools for Tracking:

**Simple daily check-in:**
Morning: How's my energy? Sleep quality?
Midday: How's my mood? Any shifts?
Evening: How was today? What affected me?

**Phone reminders:**
Set a daily alarm to check in with yourself.

### Journal Prompt:
After 3 days of tracking, what patterns do you notice? What's making your mood better? What's making it worse?

### Action for Today:
Start a simple daily mood log. Even just noting "mood: 6/10, tired, stressed about work" helps build awareness.`},{id:"mood-mastery-w1d3",week:1,title:"Week 1, Day 3: Sleep & Mood Connection",content:`## Week 1, Day 3: Sleep & Mood Connection

### The Sleep-Mood Cycle

Poor sleep and mood issues create a difficult cycle during menopause. Breaking it requires addressing both.

### The Cycle:

1. Poor sleep (night sweats, insomnia)
2. Next day: Mood worsens
3. More stress and anxiety
4. Worse sleep that night
5. Repeat...

### Why Sleep Affects Mood:

**Biological:**
- Sleep deprivation increases cortisol
- Reduces serotonin production
- Impairs emotional regulation

**Psychological:**
- Tired = less patient
- Tired = negative thinking
- Tired = lower stress tolerance

### Breaking the Cycle:

**Step 1: Improve Sleep (see Sleep Program)**
- Address night sweats
- Create better sleep environment
- Establish wind-down routine

**Step 2: Protect Mood When Sleep is Poor**
- Lower expectations on bad-sleep days
- Build in extra self-care
- Give yourself grace
- Avoid major decisions when tired

### Today's Action:
Check your mood log. How does your mood correlate with your sleep? Notice the connection.`},{id:"mood-mastery-w1d4",week:1,title:"Week 1, Day 4: Week 1 Reflection",content:`## Week 1, Day 4: Week 1 Reflection

### Understanding Mood Changes Recap

This week you've learned:
- Why menopause affects mood biologically
- The sleep-mood connection
- How to track your mood patterns
- That mood changes are normal (not your fault)

### Journal Prompt:
What surprised you about your mood tracking? What patterns did you discover?

### Self-Compassion Reminder:

Mood changes during menopause are not character flaws. They're physiological responses to hormonal shifts. Be as kind to yourself as you would be to a friend going through the same thing.

### Looking Ahead:
Next week, we'll learn specific emotion regulation techniques - practical tools you can use when mood shifts happen.`},{id:"mood-mastery-w2d1",week:2,title:"Week 2, Day 1: Emotion Regulation Basics",content:`## Week 2, Day 1: Emotion Regulation Basics

### What Is Emotion Regulation?

Emotion regulation is your ability to influence which emotions you have, when you have them, and how you experience them.

### It's Not:
- Suppressing emotions
- Ignoring feelings
- Being "positive" all the time

### It Is:
- Acknowledging emotions without being overwhelmed
- Choosing how to respond (vs. react)
- Creating space between feeling and action
- Building healthy coping strategies

### The Emotion Wave:

Emotions come in waves:
1. **Build** - Intensity increases
2. **Peak** - Maximum intensity
3. **Recede** - Intensity decreases

Understanding this helps you know that difficult emotions will pass.

### Why This Matters for Menopause:

When hormones fluctuate, emotional reactivity increases. Emotion regulation skills help you manage these shifts without making things worse.

### Today's Practice:
The next time you feel a strong emotion (frustration, sadness, anger), notice:
1. What triggered it?
2. How does it feel in your body?
3. Can you wait 60 seconds before reacting?

This pause is the beginning of emotion regulation.`},{id:"mood-mastery-w2d2",week:2,title:"Week 2, Day 2: The RAIN Technique",content:`## Week 2, Day 2: The RAIN Technique

### A Powerful Emotion Regulation Tool

RAIN is a mindfulness technique for working with difficult emotions:

**R - Recognize**
Notice what's happening. "I'm feeling angry right now."

**A - Allow**
Let the emotion be there. "This is what I'm feeling right now. It's okay to feel this."

**I - Investigate**
Turn toward the emotion with curiosity. "Where do I feel this in my body? What does it need?"

**N - Nurture**
Offer compassion to yourself. "This is hard. I'm doing my best."

### How to Use RAIN:

**When情绪 hits:**
1. Pause and recognize: "I'm feeling frustrated"
2. Allow it without fighting: "It's okay to feel this"
3. Investigate: "Where do I feel this? What triggered it?"
4. Nurture: "This is difficult. I care about myself."

### Practice:

**Exercise:** Think of a recent difficult emotion. Practice the full RAIN process on it now. Even if the situation has passed, processing it helps build the skill.

### Remember:
RAIN isn't about making the feeling go away. It's about being present with what is, with self-compassion.`},{id:"mood-mastery-w2d3",week:2,title:"Week 2, Day 3: When to Take Space",content:`## Week 2, Day 3: When to Take Space

### The Power of Pausing

Sometimes the best thing you can do is step away from a situation. This isn't avoidance - it's self-regulation.

### When to Take Space:

**Signs you need space:**
- Feeling overwhelmed
- Urge to say something you'll regret
- Physical signs of stress (shaking, racing heart)
- Words getting sharp
- Losing perspective

### How to Take Space:

**Communicate:**
"I'm feeling really overwhelmed right now. I need 10 minutes to calm down before we can talk about this."

**Follow through:**
Actually take the time. Don't stay in the room and stew - leave physically and mentally.

**Use the time well:**
- Deep breathing (4-7-8)
- Walk around the block
- Splash cold water on face
- Progressive muscle relaxation

**Return when calm:**
"Come back together when you can speak calmly."

### What It Signals:

Taking space shows strength, not weakness. It says: "I care enough about this relationship/conversation to come back calm rather than react badly."

### Practice Today:
Identify one situation where you could use this skill. Plan what you would say when taking space.`},{id:"mood-mastery-w2d4",week:2,title:"Week 2, Day 4: Week 2 Reflection",content:`## Week 2, Day 4: Week 2 Reflection

### Emotion Regulation Recap

This week you've learned:
- Emotion regulation basics
- The RAIN technique
- When and how to take space
- The importance of the pause

### Practice Log:
When have you used these techniques this week? What worked? What was hard?

### Journal Prompt:
Describe a time you successfully regulated a difficult emotion. What did you do? How did it feel?

### Building Your Toolkit:
Write down your go-to emotion regulation strategies so you can reference them when needed.

### Looking Ahead:
Next week, we'll focus on building emotional resilience - habits and practices that support your emotional well-being long-term.`},{id:"mood-mastery-w3d1",week:3,title:"Week 3, Day 1: Emotional Self-Care",content:`## Week 3, Day 1: Emotional Self-Care

### What Is Emotional Self-Care?

Emotional self-care is any activity that nurtures your emotional well-being. It's not selfish - it's necessary.

### Categories of Emotional Self-Care:

**Connection:**
- Calling a friend
- Spending time with loved ones
- Joining a support group
- Petting an animal

**Expression:**
- Journaling
- Creative activities
- Talking through feelings
- Crying (releases stress hormones)

**Restoration:**
- Quiet time alone
- Mindful activities
- Play and laughter
- Boundaries (saying no)

**Nurture:**
- Self-compassion practice
- Treating yourself kindly
- Celebrating small wins
- Forgiving yourself

### Why It's Especially Important During Menopause:

- Hormonal shifts heighten emotional sensitivity
- Life transitions add stress
- Self-care compensates for reduced coping

### This Week's Challenge:
Do one emotional self-care activity every day. What nourishes your soul?`},{id:"mood-mastery-w3d2",week:3,title:"Week 3, Day 2: Self-Compassion Practice",content:`## Week 3, Day 2: Self-Compassion Practice

### What Is Self-Compassion?

Self-compassion means treating yourself with the same kindness and understanding you'd give a good friend.

**Instead of:**
"I shouldn't feel this way. I'm being ridiculous."

**Try:**
"Everyone has difficult emotions. This is hard for me right now. I'm doing my best."

### The Three Elements of Self-Compassion:

**1. Self-Kindness:**
Be gentle with yourself. "This is difficult. I'm allowed to struggle."

**2. Common Humanity:**
Remember you're not alone. "Lots of women feel this during menopause."

**3. Mindfulness:**
Observe without over-identifying. "I'm experiencing a difficult emotion. It's part of being human."

### Self-Compassion Phrases:

- "This is hard, and I'm doing my best."
- "I deserve kindness, especially from myself."
- "I'm not alone in this feeling."
- "May I be at peace with this moment."
- "I accept myself exactly as I am."

### Practice:

**Exercise:** Think of something you're criticizing yourself for. Now write a compassionate letter to yourself about it, as if you were writing to a dear friend.

### Daily Practice:
Start saying one self-compassion phrase to yourself each morning. Make it a habit.`},{id:"mood-mastery-w3d3",week:3,title:"Week 3, Day 3: Building Emotional Routines",content:`## Week 3, Day 3: Building Emotional Routines

### Why Daily Practices Matter

While tools for difficult moments are important, building daily emotional wellness habits prevents crises.

### Daily Emotional Routines:

**Morning (5 minutes):**
- Check in with your mood
- Set an intention: "Today I will be patient with myself"
- One minute of self-compassion

**Midday (2 minutes):**
- Body scan - how are you feeling?
- Take a breath
- Reset if needed

**Evening (10 minutes):**
- Journal: "Today my mood was... What affected it?"
- Gratitude practice
- Self-compassion reflection

### Building the Habit:

**Start with ONE element:**
- Choose one small practice
- Do it for 7 days
- Add another element

**Attach to existing habits:**
- After my morning coffee → mood check
- After brushing teeth → self-compassion phrase
- Before bed → evening journal

### Your Action:
Choose ONE daily emotional routine to start tomorrow. Keep it small enough to stick.`},{id:"mood-mastery-w3d4",week:3,title:"Week 3, Day 4: Week 3 Reflection",content:`## Week 3, Day 4: Week 3 Reflection

### Building Emotional Resilience Recap

This week you've learned:
- Emotional self-care categories
- Self-compassion practice
- Daily emotional routines
- Building habits that support mood

### Practice Check:
- Have you been doing daily emotional self-care?
- Have you been practicing self-compassion?
- What emotional routines have you started?

### Journal Prompt:
How has your mood been this week compared to last week? What differences do you notice?

### Looking Ahead:
Next week is the final week - we'll focus on communication and relationships during the menopause transition.`},{id:"mood-mastery-w4d1",week:4,title:"Week 4, Day 1: Communicating Your Needs",content:`## Week 4, Day 1: Communicating Your Needs

### Why Communication Matters

Menopause can strain relationships when mood changes, irritability, or low energy affect interactions. Effective communication helps.

### The Communication Challenge:

"I know I'm more irritable, but I don't know how to explain it."

### Starting the Conversation:

**Choose the right time:**
- Not in the middle of a conflict
- When both of you are calm
- When you have time to talk

**Start with "I" statements:**
"I'm experiencing mood changes from hormonal shifts, and I need some understanding."

**Be specific about needs:**
- "When I come home from work, I need 15 minutes of quiet time before I can engage well."
- "I need you to know that when I'm irritable, it's not about you - it's my hormones."

### Tips for Hard Conversations:

1. Use "I feel" statements
2. Be specific, not general ("You never help" → "I need help with dinner on Tuesday nights")
3. Avoid blame
4. Focus on solutions
5. Ask for what you need

### Practice Today:
Write down one thing you need from a relationship that you haven't communicated clearly. Plan how to say it.`},{id:"mood-mastery-w4d2",week:4,title:"Week 4, Day 2: Setting Boundaries",content:`## Week 4, Day 2: Setting Boundaries

### What Are Boundaries?

Boundaries are limits you set to protect your well-being. They're not walls - they're fences with gates.

### Common Boundaries During Menopause:

**Energy boundaries:**
- "I can only attend two social events per week."
- "I need to rest on Sundays."

**Emotional boundaries:**
- "I need you to give me space when I'm overwhelmed."
- "I can't take on your stress right now."

**Physical boundaries:**
- "I need separate blankets because of night sweats."
- "I need our bedroom to be cool."

### Setting Boundaries:

**1. Know what you need:**
Be clear before communicating.

**2. Communicate clearly:**
"I need..." not "You should..."

**3. Expect some resistance:**
Others may not understand at first.

**4. Be consistent:**
Boundaries only work if you maintain them.

### Practicing Boundary Language:

- "I can't do that right now."
- "I need to take care of myself first."
- "That doesn't work for me."
- "I understand you want X, but I need Y."

### Action for Today:
Identify one boundary you need to set. Practice the language in the mirror.`},{id:"mood-mastery-w4d3",week:4,title:"Week 4, Day 3: Managing Relationship Stress",content:`## Week 4, Day 3: Managing Relationship Stress

### Relationship Stress During Menopause

Relationships can feel more challenging during menopause. Understanding why helps you navigate it.

### Why Menopause Affects Relationships:

**Mood changes:**
- Irritability affects interactions
- Emotional sensitivity increases
- Less patience for small annoyances

**Physical symptoms:**
- Low energy affects engagement
- Intimacy changes affect closeness
- Sleep issues affect mood

**Communication changes:**
- Harder to articulate feelings
- May be more withdrawn
- Need different kinds of support

### Navigating the Challenges:

**For yourself:**
- Acknowledge that you're going through a transition
- Communicate what's happening
- Ask for what you need
- Give yourself grace on difficult days

**For partners/family:**
- Help them understand what's happening
- Give them specific ways to help
- Communicate your needs clearly

### When to Seek Help:

If relationships are severely strained, consider:
- Couples therapy
- Family counseling
- Individual therapy for yourself

There's no shame in getting support.`},{id:"mood-mastery-w4d4",week:4,title:"Week 4, Day 4: Your Mood Summary",content:`## Week 4, Day 4: Your Mood Summary

### Congratulations! You've Completed the Mood Mastery Program!

### What You've Learned:

**Week 1: Understanding Mood Changes**
- Why menopause affects mood
- Sleep-mood connection
- Tracking mood patterns

**Week 2: Emotion Regulation**
- Emotion regulation basics
- The RAIN technique
- When to take space

**Week 3: Building Emotional Resilience**
- Emotional self-care
- Self-compassion practice
- Daily emotional routines

**Week 4: Communication and Relationships**
- Communicating your needs
- Setting boundaries
- Managing relationship stress

### Your Mood Mastery Action Plan:

1. **Awareness:** I will continue tracking my mood and triggers
2. **Regulation:** I will use the RAIN technique during difficult emotions
3. **Self-Care:** I will practice daily emotional self-care
4. **Compassion:** I will speak to myself with kindness
5. **Communication:** I will clearly communicate my needs

### Remember:
- Mood changes during menopause are normal
- You have tools to manage them
- You're building new skills
- Self-compassion is key

### Affirmation:
"I am mastering my emotional landscape. I am capable, resilient, and deserving of compassion - especially from myself."`}]},gv=({onNavigate:r})=>{const[e,n]=A.useState(""),[o,l]=A.useState("all"),[c,d]=A.useState(null),[m,p]=A.useState("articles"),[g,x]=A.useState(null),[w,b]=A.useState(0),[v,S]=A.useState(new Set),j=ae(X=>X.subscriptionTier)==="premium",W=c?Fm[c]||[]:[],L=W[w],H=X=>{if(X.isPremium&&!j){r==null||r("subscription");return}x(X)},q=X=>{d(X.id),b(0)},K=()=>{r==null||r("subscription")},R=()=>{L&&S(X=>new Set([...X,L.id])),w<W.length-1&&b(X=>X+1)},F=()=>{d(null),b(0)},me=X=>{const V=Fm[X]||[];return{completed:V.filter(Y=>v.has(Y.id)).length,total:V.length}};A.useEffect(()=>{const X=document.querySelector(".fixed.inset-0.z-50");if(X){const V=X.querySelector(".overflow-y-auto");V&&V.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})},[w]);const ke=X=>{const V=X.trim().split(`
`),ne=[];let Y=[],ue=[];const we=()=>{if(Y.length>0){const Q=Y.join(" ").trim();if(Q){const G=Q.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");ne.push(s.jsx("p",{className:"mb-4 text-gray-700 leading-relaxed",dangerouslySetInnerHTML:{__html:G}},ne.length))}Y=[]}},xe=()=>{ue.length>0&&(ne.push(s.jsx("ul",{className:"list-disc pl-6 mb-4 space-y-2 text-gray-700",children:ue.map((Q,G)=>s.jsx("li",{dangerouslySetInnerHTML:{__html:Q.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}},G))},ne.length)),ue=[])};return V.forEach((Q,G)=>{const J=Q.trim();if(J.startsWith("# "))we(),xe(),ne.push(s.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4 mt-6",children:J.substring(2)},G));else if(J.startsWith("## "))we(),xe(),ne.push(s.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-3 mt-5",children:J.substring(3)},G));else if(J.startsWith("### "))we(),xe(),ne.push(s.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2 mt-4",children:J.substring(4)},G));else if(J.startsWith("- "))we(),ue.push(J.substring(2));else if(J.match(/^\d+\.\s/)){we();const N=J.match(/^(\d+)\.\s(.*)$/);N&&ue.push(N[2])}else J===""?(we(),xe()):(xe(),Y.push(J))}),we(),xe(),ne},Pe=ex.filter(X=>{const V=X.title.toLowerCase().includes(e.toLowerCase())||X.excerpt.toLowerCase().includes(e.toLowerCase()),ne=o==="all"||X.category===o;return V&&ne});return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("button",{onClick:()=>r==null?void 0:r("dashboard"),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Home"]}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"font-serif text-2xl font-semibold text-foreground",children:"Learn & Grow"}),s.jsx("p",{className:"text-muted-foreground mt-1",children:"Expert knowledge at your fingertips"})]}),s.jsx(ls,{placeholder:"Search articles and programs...",value:e,onChange:X=>n(X.target.value),icon:s.jsx(Bf,{size:18})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{onClick:()=>p("articles"),className:`
            flex-1 py-3 rounded-xl font-medium transition-all
            ${m==="articles"?"bg-primary text-white":"bg-muted text-muted-foreground hover:text-foreground"}
          `,children:[s.jsx(Wa,{size:18,className:"inline mr-2"}),"Articles"]}),s.jsxs("button",{onClick:()=>p("programs"),className:`
            flex-1 py-3 rounded-xl font-medium transition-all
            ${m==="programs"?"bg-primary text-white":"bg-muted text-muted-foreground hover:text-foreground"}
          `,children:[s.jsx(Fe,{size:18,className:"inline mr-2"}),"Programs"]})]}),m==="articles"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex gap-2 overflow-x-auto pb-2",children:[s.jsx("button",{onClick:()=>l("all"),className:`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${o==="all"?"bg-primary text-white":"bg-muted text-muted-foreground hover:text-foreground"}
              `,children:"All"}),Object.entries(Xy).map(([X,V])=>s.jsxs("button",{onClick:()=>l(X),className:`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  flex items-center gap-2
                  ${o===X?"bg-primary text-white":"bg-muted text-muted-foreground hover:text-foreground"}
                `,children:[V.icon," ",V.label]},X))]}),s.jsxs("div",{className:"space-y-4",children:[Pe.map(X=>s.jsxs(te,{hover:!0,className:"relative overflow-hidden cursor-pointer",onClick:()=>H(X),children:[s.jsx("div",{className:"flex gap-4",children:s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx(We,{variant:"primary",size:"sm",children:X.category.replace("_"," ")}),X.isPremium&&s.jsxs(We,{variant:"premium",size:"sm",children:[s.jsx(_s,{size:12,className:"mr-1"}),"PREMIUM"]})]}),s.jsx("h3",{className:"font-semibold text-lg mb-2",children:X.title}),s.jsx("p",{className:"text-sm text-muted-foreground line-clamp-2",children:X.excerpt}),s.jsxs("div",{className:"flex items-center gap-4 mt-3",children:[s.jsxs("span",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[s.jsx(qr,{size:14}),X.readTime," min read"]}),s.jsx("span",{className:"text-sm text-primary font-medium",children:"Read Article"})]})]})}),s.jsx(ys,{size:20,className:"absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"})]},X.id)),Pe.length===0&&s.jsxs("div",{className:"text-center py-12",children:[s.jsx(Wa,{size:48,className:"mx-auto text-primary/40 mb-4"}),s.jsx("p",{className:"text-muted-foreground",children:"No articles found"}),s.jsx("p",{className:"text-sm text-muted-foreground/70",children:"Try a different search or category"})]})]})]}),m==="programs"&&s.jsx("div",{className:"space-y-4 pb-4",children:Zy.map(X=>{const V=me(X.id),ne=V.completed>0;return s.jsx(te,{hover:!0,className:"relative overflow-hidden",children:s.jsxs("div",{className:"flex items-start gap-4 py-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0",children:X.icon}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1 flex-wrap",children:[s.jsx("h3",{className:"font-semibold text-base",children:X.title}),X.isPremium&&s.jsxs(We,{variant:"premium",size:"sm",children:[s.jsx(_s,{size:10,className:"mr-1"}),"PREMIUM"]})]}),s.jsx("p",{className:"text-xs text-muted-foreground mb-2 line-clamp-2",children:X.description}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("span",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[s.jsx(qr,{size:12}),X.duration]}),s.jsxs("span",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[s.jsx(Wa,{size:12}),X.lessonsCount," lessons"]})]}),ne&&s.jsxs("div",{className:"mt-2",children:[s.jsxs("div",{className:"flex items-center justify-between text-xs text-muted-foreground mb-1",children:[s.jsxs("span",{children:[V.completed," of ",V.total]}),s.jsxs("span",{children:[Math.round(V.completed/V.total*100),"%"]})]}),s.jsx("div",{className:"h-1.5 bg-gray-200 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-primary rounded-full transition-all",style:{width:`${V.completed/V.total*100}%`}})})]})]}),s.jsx("div",{className:"shrink-0 flex items-center",children:!X.isPremium||j?s.jsx(oe,{size:"sm",icon:s.jsx(Nm,{size:14}),onClick:()=>q(X),variant:ne?"outline":"primary",children:ne?"Continue":"Start"}):s.jsx(oe,{size:"sm",variant:"outline",icon:s.jsx(_s,{size:14}),onClick:K,children:"Unlock"})})]})},X.id)})}),!j&&s.jsx(te,{className:"bg-gradient-to-br from-primary to-secondary text-white",children:s.jsxs("div",{className:"text-center py-4",children:[s.jsx(Fe,{size:32,className:"mx-auto mb-3 opacity-80"}),s.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Unlock Premium Content"}),s.jsx("p",{className:"text-white/80 text-sm mb-4",children:"Get access to all articles, programs, and exclusive expert content."}),s.jsx(oe,{variant:"outline",className:"border-white text-white hover:bg-white hover:text-primary",onClick:()=>r==null?void 0:r("subscription"),children:"Upgrade to Premium"})]})}),g&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/50",children:[s.jsx("div",{className:"absolute inset-0",onClick:()=>x(null)}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 max-h-[90vh] bg-white rounded-t-3xl overflow-hidden flex flex-col",children:[s.jsxs("div",{className:"sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between z-10",children:[s.jsx("button",{onClick:()=>x(null),className:"p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors",children:s.jsx(li,{size:24,className:"text-gray-600"})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(We,{variant:"primary",size:"sm",children:g.category.replace("_"," ")}),s.jsxs("span",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[s.jsx(qr,{size:14}),g.readTime," min"]})]}),s.jsx("div",{className:"w-10"})," "]}),s.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[s.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:g.title}),s.jsx("p",{className:"text-muted-foreground mb-6",children:g.excerpt}),s.jsx("div",{className:"prose prose-gray max-w-none",children:ke(g.content)}),s.jsx("div",{className:"h-8"})," "]})]})]}),L&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/50",children:[s.jsx("div",{className:"absolute inset-0",onClick:F}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 max-h-[90vh] bg-white rounded-t-3xl overflow-hidden flex flex-col",children:[s.jsxs("div",{className:"sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between z-10",children:[s.jsx("button",{onClick:F,className:"p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors",children:s.jsx(li,{size:24,className:"text-gray-600"})}),s.jsx("h2",{className:"font-semibold text-center flex-1 pr-10",children:L.title}),s.jsx("div",{className:"w-10"})," "]}),s.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4 pb-32",children:[s.jsxs("div",{className:"mb-4 flex items-center justify-between text-sm",children:[s.jsxs("span",{className:"text-muted-foreground",children:["Lesson ",w+1," of ",W.length]}),L.week&&s.jsxs(We,{variant:"primary",size:"sm",children:["Week ",L.week]})]}),s.jsx("div",{className:"mb-6 h-2 bg-gray-200 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-primary rounded-full transition-all",style:{width:`${(w+1)/W.length*100}%`}})}),s.jsx("div",{className:"prose prose-gray max-w-none",children:ke(L.content)}),v.has(L.id)&&s.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-green-600 text-sm",children:[s.jsx(fy,{size:16}),"Lesson Completed"]})]}),s.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-white border-t px-4 py-4 safe-area-bottom",children:s.jsxs("div",{className:"flex gap-3 max-w-lg mx-auto",children:[s.jsx(oe,{variant:"outline",className:"flex-1",onClick:F,icon:s.jsx(lt,{size:16}),children:"Back"}),s.jsx(oe,{className:"flex-1",icon:s.jsx(Nm,{size:16}),onClick:R,children:w===W.length-1?"Complete":"Next"})]})})]})]})]})},yv="modulepreload",xv=function(r){return"/"+r},Um={},vv=function(e,n,o){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(n.map(p=>{if(p=xv(p),p in Um)return;Um[p]=!0;const g=p.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const w=document.createElement("link");if(w.rel=g?"stylesheet":yv,g||(w.as="script"),w.crossOrigin="",w.href=p,m&&w.setAttribute("nonce",m),document.head.appendChild(w),g)return new Promise((b,v)=>{w.addEventListener("load",b),w.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})},wv=({onNavigate:r})=>{var re;const[e,n]=A.useState(!1),[o,l]=A.useState(!1),[c,d]=A.useState(!1),[m,p]=A.useState(!1),[g,x]=A.useState(!1),[w,b]=A.useState(!1),[v,S]=A.useState(!1),[T,j]=A.useState(!1),[W,L]=A.useState(!1),[H,q]=A.useState(!1),[K,R]=A.useState(!1),F=ae(M=>M.profile),me=ae(M=>M.setProfile),ke=ae(M=>M.subscriptionTier),Pe=ae(M=>M.setSubscriptionTier),X=ae(M=>M.settings),V=ae(M=>M.updateSettings),ne=ae(M=>M.resetAllData),Y=ae(M=>M.symptoms),ue=ae(M=>M.moods),we=ae(M=>M.journals),xe=ae(M=>M.treatments),Q=ae(M=>M.careTeam),G=ae(M=>M.labResults),J=ae(M=>M.completedChallenges),N=ke==="premium",B=(M,se)=>{me({[M]:se})},fe=()=>{p(!1),r==null||r("subscription")},I=()=>{const M={profile:F,symptoms:Y,moods:ue,journals:we,treatments:xe,careTeam:Q,labResults:G,exportedAt:new Date().toISOString()},se=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),ge=URL.createObjectURL(se),je=document.createElement("a");je.href=ge,je.download=`psych-wise-export-${new Date().toISOString().split("T")[0]}.json`,je.click(),URL.revokeObjectURL(ge),j(!1)},ce=()=>{const M=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),se=Y.slice(-7),ge=ue.slice(-7),je=ge.length>0?(ge.reduce(($e,Ge)=>$e+(Ge.moodLevel==="great"?5:Ge.moodLevel==="good"?4:Ge.moodLevel==="okay"?3:Ge.moodLevel==="low"?2:1),0)/ge.length).toFixed(1):"N/A";return`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @media print { body { padding: 20px; } }
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
          h1 { color: #B85C6B; border-bottom: 2px solid #B85C6B; padding-bottom: 10px; }
          h2 { color: #3D3D3D; margin-top: 30px; }
          .header { text-align: center; margin-bottom: 40px; }
          .stats { display: flex; justify-content: space-around; margin: 20px 0; }
          .stat-box { background: #f5f5f5; padding: 20px; border-radius: 10px; text-align: center; width: 30%; }
          .stat-number { font-size: 32px; font-weight: bold; color: #B85C6B; }
          .stat-label { color: #666; margin-top: 5px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background: #B85C6B; color: white; }
          tr:nth-child(even) { background: #f9f9f9; }
          .footer { margin-top: 40px; text-align: center; color: #999; font-size: 12px; }
          .section { margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Psych-Wise Daily Tracking Report</h1>
          <p style="color: #666;">Generated on ${M}</p>
        </div>

        <div class="stats">
          <div class="stat-box">
            <div class="stat-number">${Y.length}</div>
            <div class="stat-label">Total Symptoms Logged</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${je}</div>
            <div class="stat-label">Average Mood (Last 7)</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${we.length}</div>
            <div class="stat-label">Journal Entries</div>
          </div>
        </div>

        <div class="section">
          <h2>Profile Information</h2>
          <table>
            <tr><th>Name</th><td>${F.name||"Not set"}</td></tr>
            <tr><th>Email</th><td>${F.email||"Not set"}</td></tr>
            <tr><th>Menopause Stage</th><td>${gn[F.menopauseStage]||"Not set"}</td></tr>
            <tr><th>Subscription</th><td>${ke==="premium"?"Premium":"Free"}</td></tr>
          </table>
        </div>

        ${se.length>0?`
        <div class="section">
          <h2>Recent Symptoms (Last 7 Days)</h2>
          <table>
            <tr><th>Date</th><th>Symptom</th><th>Severity</th><th>Notes</th></tr>
            ${se.map($e=>`<tr><td>${new Date($e.date).toLocaleDateString()}</td><td>${$e.symptomName}</td><td>${$e.severity}/5</td><td>${$e.notes||"-"}</td></tr>`).join("")}
          </table>
        </div>
        `:""}

        ${ge.length>0?`
        <div class="section">
          <h2>Recent Moods (Last 7 Days)</h2>
          <table>
            <tr><th>Date</th><th>Mood</th><th>Energy Level</th><th>Notes</th></tr>
            ${ge.map($e=>`<tr><td>${new Date($e.date).toLocaleDateString()}</td><td>${$e.moodLevel}</td><td>${$e.energyLevel}/10</td><td>${$e.notes||"-"}</td></tr>`).join("")}
          </table>
        </div>
        `:""}

        ${xe.length>0?`
        <div class="section">
          <h2>Current Treatments</h2>
          <table>
            <tr><th>Name</th><th>Type</th><th>Dosage</th><th>Status</th></tr>
            ${xe.map($e=>`<tr><td>${$e.name}</td><td>${$e.type}</td><td>${$e.dosage}</td><td>${$e.isActive?"Active":"Inactive"}</td></tr>`).join("")}
          </table>
        </div>
        `:""}

        <div class="footer">
          <p>Psych-Wise - Your Hot Flash Hottie Wellness Companion</p>
          <p>This report is for personal tracking purposes only. Consult your healthcare provider for medical advice.</p>
        </div>
      </body>
      </html>
    `},ye=()=>{const M=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),se=encodeURIComponent(`Psych-Wise Health Report - ${M}`),ge=Y.slice(-7),je=ue.slice(-7),$e=je.length>0?(je.reduce((Ue,ct)=>Ue+(ct.moodLevel==="great"?5:ct.moodLevel==="good"?4:ct.moodLevel==="okay"?3:ct.moodLevel==="low"?2:1),0)/je.length).toFixed(1):"N/A",Ge=encodeURIComponent(`
PSYCH-WISE HEALTH TRACKING REPORT
Generated: ${M}

SUMMARY
-------
Total Symptoms Logged: ${Y.length}
Average Mood (Last 7): ${$e}
Journal Entries: ${we.length}

PROFILE INFORMATION
------------------
Name: ${F.name||"Not set"}
Menopause Stage: ${gn[F.menopauseStage]||"Not set"}

RECENT SYMPTOMS (Last 7 Days)
-----------------------------
${ge.length>0?ge.map(Ue=>`• ${new Date(Ue.date).toLocaleDateString()}: ${Ue.symptomName} (Severity: ${Ue.severity}/5)${Ue.notes?` - ${Ue.notes}`:""}`).join(`
`):"No symptoms logged"}

RECENT MOODS (Last 7 Days)
-------------------------
${je.length>0?je.map(Ue=>`• ${new Date(Ue.date).toLocaleDateString()}: ${Ue.moodLevel} (Energy: ${Ue.energyLevel}/10)${Ue.notes?` - ${Ue.notes}`:""}`).join(`
`):"No moods logged"}

CURRENT TREATMENTS
------------------
${xe.length>0?xe.map(Ue=>`• ${Ue.name} (${Ue.type}) - ${Ue.dosage} - ${Ue.isActive?"Active":"Inactive"}`).join(`
`):"No treatments recorded"}

---
Psych-Wise - Your Hot Flash Hottie Wellness Companion
For questions: support@psych-wise.com
    `);window.open(`mailto:?subject=${se}&body=${Ge}`,"_blank")},P=()=>{const M=ce(),se=window.open("","_blank");se&&(se.document.write(M),se.document.close(),se.focus(),setTimeout(()=>{se.print()},250))},D=[{title:"Account",items:[{icon:s.jsx(Du,{size:20}),label:"Personal Information",description:`${F.name||"Not set"} • ${F.email||"Not set"}`,onClick:()=>d(!0)},{icon:s.jsx(Hs,{size:20}),label:"Subscription",description:N?"Premium Member":"Free Plan",badge:N?s.jsx(We,{variant:"premium",children:"PREMIUM"}):void 0,onClick:()=>p(!0)},{icon:s.jsx($f,{size:20}),label:"Sign Out",description:"Sign out of your account",onClick:async()=>{if(confirm("Are you sure you want to sign out?")){try{const{signOut:M,isSupabaseConfigured:se}=await vv(async()=>{const{signOut:ge,isSupabaseConfigured:je}=await Promise.resolve().then(()=>Bb);return{signOut:ge,isSupabaseConfigured:je}},[]);se&&await M()}catch{}localStorage.clear(),window.location.reload()}}}]},{title:"Developer Testing",items:[{icon:s.jsx(Hs,{size:20}),label:"Toggle Premium Mode",description:N?"Currently: PREMIUM":"Currently: FREE",badge:N?s.jsx(We,{variant:"premium",children:"TEST"}):s.jsx(We,{variant:"secondary",children:"TEST"}),onClick:()=>{const M=N?"free":"premium";Pe(M),alert(`Subscription changed to: ${M.toUpperCase()}

Please refresh the app to see changes.`)}}]},{title:"Health",items:[{icon:s.jsx(pt,{size:20}),label:"Menopause Stage",description:gn[F.menopauseStage],onClick:()=>{const M=["perimenopause","menopause","postmenopause"],ge=(M.indexOf(F.menopauseStage)+1)%M.length;B("menopauseStage",M[ge])}},{icon:s.jsx(Et,{size:20}),label:"Care Team",description:`${Q.length} providers`,onClick:()=>x(!0)},{icon:s.jsx(uu,{size:20}),label:"Lab Results",description:`${G.length} results`,onClick:()=>b(!0)},{icon:s.jsx(Ur,{size:20}),label:"Doctor Visit Reports",description:"Generate visit summaries",onClick:()=>j(!0)}]},{title:"Preferences",items:[{icon:s.jsx(za,{size:20}),label:"Notifications",description:X.dailyReminder?"Daily at 9:00 AM":"Off",onClick:()=>V({dailyReminder:!X.dailyReminder})},{icon:s.jsx(wn,{size:20}),label:"Dark Mode",description:X.darkMode?"On":"Off",onClick:()=>V({darkMode:!X.darkMode})},{icon:s.jsx(Ff,{size:20}),label:"AI Persona",description:X.aiPersona.charAt(0).toUpperCase()+X.aiPersona.slice(1),onClick:()=>S(!0)},{icon:s.jsx(Fe,{size:20}),label:"Ad-Free Mode",description:N?"Always ad-free":"Premium feature",badge:N?s.jsx(We,{variant:"premium",size:"sm",children:"PREMIUM"}):s.jsx(We,{variant:"secondary",size:"sm",children:"Upgrade"}),onClick:()=>!N&&(r==null?void 0:r("subscription"))}]},{title:"Data & Privacy",items:[{icon:s.jsx(Ua,{size:20}),label:"Export Data",description:"Download your health data",onClick:()=>j(!0)},{icon:s.jsx(er,{size:20}),label:"Privacy Settings",description:"Manage your privacy preferences",onClick:()=>q(!0)}]},{title:"Support",items:[{icon:s.jsx(Wf,{size:20}),label:"Help & FAQ",description:"Get help using the app",onClick:()=>R(!0)},{icon:s.jsx(vn,{size:20}),label:"Contact Support",description:"support@psych-wise.com",onClick:()=>window.open("mailto:support@psych-wise.com")},{icon:s.jsx(er,{size:20}),label:"Admin Portal",description:"Manage Coach's Corner",onClick:()=>window.open("?admin=true","_self"),badge:s.jsx(We,{variant:"secondary",children:"Admin"})}]}];return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("button",{onClick:()=>r==null?void 0:r("dashboard"),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Home"]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-semibold mb-3",children:F.name?F.name.charAt(0).toUpperCase():"U"}),s.jsx("h1",{className:"font-serif text-2xl font-semibold text-foreground",children:F.name}),s.jsx("p",{className:"text-muted-foreground",children:F.email}),s.jsx("div",{className:"mt-2",children:s.jsx(We,{variant:N?"premium":"secondary",children:N?s.jsxs(s.Fragment,{children:[s.jsx(Hs,{size:12,className:"mr-1"})," PREMIUM"]}):"Free Plan"})})]}),!N&&s.jsx(te,{className:"bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-white/30 flex items-center justify-center",children:s.jsx(Hs,{size:24,className:"text-amber-900"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-semibold",children:"Upgrade to Premium"}),s.jsx("p",{className:"text-sm text-amber-800",children:"Unlock all features and content"})]}),s.jsx(oe,{size:"sm",className:"bg-white text-amber-900 hover:bg-white/90",onClick:()=>r==null?void 0:r("subscription"),children:"$9.99/mo"})]})}),J.length>0&&s.jsxs(te,{className:"bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-amber-200",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white",children:s.jsx(lu,{size:20})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-amber-700",children:"Your Achievements"}),s.jsxs("p",{className:"text-xs text-amber-600/80",children:[J.length," challenge",J.length>1?"s":""," completed"]})]})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:J.map(M=>s.jsxs("div",{className:"p-3 rounded-xl bg-gradient-to-r from-yellow-100 to-amber-100 border border-amber-200 flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white shrink-0",children:s.jsx(Hs,{size:18})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:"font-semibold text-sm text-amber-800 truncate",children:M.title}),s.jsx("p",{className:"text-xs text-amber-600/70",children:new Date(M.completedAt).toLocaleDateString()})]})]},M.id))})]}),D.map(M=>s.jsxs("div",{children:[s.jsx("h3",{className:"text-sm font-medium text-muted-foreground mb-2 px-1",children:M.title}),s.jsx(te,{className:"divide-y divide-border p-0",children:M.items.map(se=>s.jsxs("button",{onClick:se.onClick,className:"w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors text-left",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center",children:se.icon}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"font-medium",children:se.label}),se.badge]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:se.description})]}),s.jsx(ys,{size:18,className:"text-muted-foreground"})]},se.label))})]},M.title)),s.jsxs(te,{className:"border-destructive/20",children:[s.jsx("h3",{className:"text-sm font-medium text-destructive mb-3",children:"Danger Zone"}),s.jsx(oe,{variant:"ghost",className:"text-destructive hover:bg-destructive/10 w-full justify-start",icon:s.jsx(tl,{size:18}),onClick:()=>l(!0),children:"Delete All Data"})]}),s.jsxs("div",{className:"text-center text-sm text-muted-foreground",children:[s.jsxs("p",{children:[gt.name," v1.0.0"]}),s.jsxs("p",{className:"mt-1",children:["© 2025 ",gt.name,". All rights reserved."]})]}),s.jsx(zt,{isOpen:o,onClose:()=>l(!1),title:"Delete All Data",size:"sm",children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"text-muted-foreground",children:"Are you sure you want to delete all your data? This action cannot be undone and will permanently remove:"}),s.jsxs("ul",{className:"list-disc list-inside text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"All symptom entries"}),s.jsx("li",{children:"All mood entries"}),s.jsx("li",{children:"All journal entries"}),s.jsx("li",{children:"Your profile information"})]}),s.jsxs("div",{className:"flex gap-3 pt-2",children:[s.jsx(oe,{variant:"outline",fullWidth:!0,onClick:()=>l(!1),children:"Cancel"}),s.jsx(oe,{variant:"danger",fullWidth:!0,onClick:()=>{ne(),l(!1)},children:"Delete Everything"})]})]})}),s.jsx(zt,{isOpen:c,onClose:()=>d(!1),title:"Personal Information",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>d(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-sm font-medium mb-1 block",children:"Name"}),s.jsx(ls,{value:F.name||"",onChange:M=>B("name",M.target.value),placeholder:"Your name"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-sm font-medium mb-1 block",children:"Email"}),s.jsx(ls,{value:F.email||"",onChange:M=>B("email",M.target.value),placeholder:"your@email.com",type:"email"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-sm font-medium mb-1 block",children:"Birth Year"}),s.jsx(ls,{value:((re=F.birthYear)==null?void 0:re.toString())||"",onChange:M=>B("birthYear",parseInt(M.target.value)||1975),placeholder:"1975",type:"number"})]}),s.jsx(oe,{fullWidth:!0,onClick:()=>d(!1),children:"Save Changes"})]})}),s.jsx(zt,{isOpen:m,onClose:()=>p(!1),title:"Subscription",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>p(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]}),N?s.jsxs("div",{className:"text-center py-6",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-4",children:s.jsx(Hs,{size:32,className:"text-amber-500"})}),s.jsx("h3",{className:"font-semibold text-lg",children:"Premium Member"}),s.jsx("p",{className:"text-muted-foreground mt-2",children:"You have access to all features!"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-center py-4",children:[s.jsx("h3",{className:"font-semibold text-lg",children:"Upgrade to Premium"}),s.jsx("p",{className:"text-muted-foreground mt-1",children:"Unlock all features and content"})]}),s.jsx("div",{className:"bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl p-4 text-amber-900",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold",children:"Premium Plan"}),s.jsx("p",{className:"text-sm text-amber-800",children:"$9.99/month"})]}),s.jsx(oe,{onClick:fe,className:"bg-white text-amber-900 hover:bg-white/90",children:"Upgrade Now"})]})}),s.jsxs("ul",{className:"space-y-2 text-sm",children:[s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16,className:"text-primary"})," Unlimited symptom logging"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16,className:"text-primary"})," Full AI insights & pattern detection"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16,className:"text-primary"})," Unlimited journal entries"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16,className:"text-primary"})," All wellness programs"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16,className:"text-primary"})," Doctor visit reports"]})]})]})]})}),s.jsx(zt,{isOpen:g,onClose:()=>x(!1),title:"Care Team",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>x(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage your healthcare providers"}),Q.length>0?s.jsx("div",{className:"space-y-3",children:Q.map(M=>s.jsx(te,{className:"p-4",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",children:s.jsx(Ey,{size:20,className:"text-primary"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-medium",children:M.name}),s.jsx("p",{className:"text-sm text-muted-foreground",children:M.role})]})]})},M.id))}):s.jsxs(te,{className:"p-6 text-center",children:[s.jsx(tr,{size:40,className:"mx-auto text-muted-foreground mb-3"}),s.jsx("p",{className:"text-muted-foreground",children:"No care team members added yet"}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Add your healthcare providers to keep track of them"})]}),s.jsx(oe,{fullWidth:!0,variant:"outline",children:"Add Care Team Member"})]})}),s.jsx(zt,{isOpen:w,onClose:()=>b(!1),title:"Lab Results",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>b(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Track and view your lab work"}),G.length>0?s.jsx("div",{className:"space-y-3",children:G.map(M=>s.jsx(te,{className:"p-4",children:s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:M.testName}),s.jsx("p",{className:"text-sm text-muted-foreground",children:M.date})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("p",{className:"font-semibold",children:[M.value," ",M.unit]}),M.flagged&&s.jsx(We,{variant:"danger",children:"Out of Range"})]})]})},M.id))}):s.jsxs(te,{className:"p-6 text-center",children:[s.jsx(vy,{size:40,className:"mx-auto text-muted-foreground mb-3"}),s.jsx("p",{className:"text-muted-foreground",children:"No lab results added yet"}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Add your lab results to track your health over time"})]}),s.jsx(oe,{fullWidth:!0,variant:"outline",children:"Add Lab Result"})]})}),s.jsx(zt,{isOpen:v,onClose:()=>S(!1),title:"AI Persona",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>S(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose how the AI assistant interacts with you"}),["empathetic","clinical","motivational"].map(M=>s.jsx("button",{onClick:()=>{V({aiPersona:M}),S(!1)},className:`
                w-full p-4 rounded-xl border-2 transition-all text-left
                ${X.aiPersona===M?"border-primary bg-primary/5":"border-border hover:border-primary/50"}
              `,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",children:s.jsx(Fe,{size:20,className:"text-primary"})}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold capitalize",children:M}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:[M==="empathetic"&&"Warm, understanding, and supportive",M==="clinical"&&"Professional, factual, and direct",M==="motivational"&&"Encouraging, positive, and inspiring"]})]})]})},M))]})}),s.jsxs(zt,{isOpen:T,onClose:()=>j(!1),title:"Export Data",size:"md",children:[s.jsx("div",{className:"mb-3",children:s.jsxs("button",{onClick:()=>j(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]})}),s.jsx("div",{className:"bg-gradient-to-r from-rose-50 to-purple-50 rounded-lg p-3 mb-3",children:s.jsxs("p",{className:"text-xs text-muted-foreground",children:[s.jsx("strong",{children:"1."})," Generate preview → ",s.jsx("strong",{children:"2."})," Print or Email → ",s.jsx("strong",{children:"3."})," Share with doctor"]})}),s.jsxs("div",{className:"bg-muted rounded-lg p-3 mb-4",children:[s.jsx("p",{className:"text-xs font-medium mb-1",children:"Export includes:"}),s.jsxs("p",{className:"text-xs text-muted-foreground",children:[Y.length," symptoms, ",ue.length," moods, ",we.length," journals, ",xe.length," treatments, ",G.length," labs"]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("p",{className:"text-xs font-medium text-foreground mb-2",children:"Step 1: Generate Preview"}),s.jsxs(oe,{fullWidth:!0,variant:"primary",size:"lg",onClick:()=>{j(!1),L(!0)},children:[s.jsx(uu,{size:18,className:"mr-2"})," Generate & Preview Report"]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("p",{className:"text-xs font-medium text-foreground mb-2",children:"Or Download Raw Data"}),s.jsxs(oe,{variant:"outline",fullWidth:!0,onClick:I,children:[s.jsx(Ua,{size:18,className:"mr-2"})," Download JSON Data"]})]}),s.jsx("p",{className:"text-xs text-muted-foreground text-center",children:"Share your report with healthcare providers"})]}),s.jsx(zt,{isOpen:H,onClose:()=>q(!1),title:"Privacy Settings",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>q(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]}),s.jsx(te,{className:"p-4 bg-green-50 border-green-200",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx(er,{size:24,className:"text-green-600"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-green-800",children:"Your data is secure"}),s.jsx("p",{className:"text-sm text-green-700 mt-1",children:"All your health data is stored locally on your device. We never share your personal information with third parties."})]})]})}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between p-4 bg-muted rounded-xl",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Local Storage Only"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Data stays on your device"})]}),s.jsx(Le,{size:20,className:"text-green-600"})]}),s.jsxs("div",{className:"flex items-center justify-between p-4 bg-muted rounded-xl",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"No Third-Party Sharing"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"We don't sell your data"})]}),s.jsx(Le,{size:20,className:"text-green-600"})]}),s.jsxs("div",{className:"flex items-center justify-between p-4 bg-muted rounded-xl",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Anonymous Insights"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Community data is aggregated"})]}),s.jsx(Le,{size:20,className:"text-green-600"})]})]})]})}),s.jsx(zt,{isOpen:K,onClose:()=>R(!1),title:"Help & FAQ",size:"md",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>R(!1),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Profile"]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs(te,{className:"p-4",children:[s.jsx("h4",{className:"font-medium mb-2",children:"How do I log symptoms?"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:'Go to the Track tab and tap "Log Symptom" to record your symptoms with severity and notes.'})]}),s.jsxs(te,{className:"p-4",children:[s.jsx("h4",{className:"font-medium mb-2",children:"Is my data private?"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Yes! All your data is stored locally on your device. We never share your personal information."})]}),s.jsxs(te,{className:"p-4",children:[s.jsx("h4",{className:"font-medium mb-2",children:"How do I upgrade to Premium?"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Go to Profile > Subscription to upgrade and unlock all features."})]}),s.jsxs(te,{className:"p-4",children:[s.jsx("h4",{className:"font-medium mb-2",children:"Can I export my data?"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Yes! Go to Profile > Export Data to download all your health data as a JSON file."})]})]}),s.jsx("div",{className:"pt-4 border-t",children:s.jsx("p",{className:"text-sm text-muted-foreground text-center",children:"Still have questions? Email us at support@psych-wise.com"})})]})}),s.jsxs(zt,{isOpen:W,onClose:()=>L(!1),title:"Your Health Report",size:"md",showCloseButton:!1,children:[s.jsxs("button",{onClick:()=>L(!1),className:"flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-2",children:[s.jsx(lt,{size:14}),"Back to Export"]}),s.jsx("div",{className:"bg-white border border-border rounded-lg p-2 overflow-y-auto",style:{maxHeight:"calc(60vh - 160px)"},children:(()=>{const M=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}),se=Y.slice(-3),ge=ue.slice(-3);return s.jsxs("div",{className:"text-[10px] space-y-2",style:{fontFamily:"Arial, sans-serif"},children:[s.jsxs("div",{className:"text-center border-b border-rose-200 pb-1",children:[s.jsx("h1",{className:"text-sm font-bold text-rose-600",children:"Psych-Wise Report"}),s.jsx("p",{className:"text-gray-400",children:M})]}),s.jsxs("div",{className:"flex justify-between text-center bg-rose-50 rounded p-1.5 text-[10px]",children:[s.jsxs("span",{children:[s.jsx("b",{children:Y.length})," Symptoms"]}),s.jsxs("span",{children:[s.jsx("b",{children:ue.length})," Moods"]}),s.jsxs("span",{children:[s.jsx("b",{children:we.length})," Journals"]})]}),s.jsxs("div",{className:"flex justify-between text-[10px] bg-gray-50 rounded p-1.5",children:[s.jsx("span",{children:F.name||"User"}),s.jsx("span",{children:gn[F.menopauseStage]})]}),se.length>0&&s.jsxs("div",{className:"text-[10px]",children:[s.jsx("b",{children:"Symptoms:"})," ",se.map(je=>je.symptomName).join(", ")]}),ge.length>0&&s.jsxs("div",{className:"text-[10px]",children:[s.jsx("b",{children:"Moods:"})," ",ge.map(je=>je.moodLevel).join(", ")]}),s.jsx("div",{className:"text-center text-[9px] text-gray-400 pt-1",children:"For personal tracking only"})]})})()}),s.jsxs("div",{className:"mt-3 p-2 bg-blue-50 rounded-lg text-[10px] text-blue-800",children:[s.jsx("p",{className:"font-medium mb-1",children:"How to share your report:"}),s.jsxs("p",{children:[s.jsx("b",{children:"Print:"}),' Opens print dialog. Use "Save as PDF" to download.']}),s.jsxs("p",{children:[s.jsx("b",{children:"Email:"})," Opens email app with report ready to send to your doctor."]})]}),s.jsxs("div",{className:"flex gap-2 mt-3 pt-2 border-t border-gray-200",children:[s.jsxs(oe,{variant:"outline",onClick:P,className:"flex-1",children:[s.jsx($a,{size:14,className:"mr-1"})," Print Report"]}),s.jsxs(oe,{onClick:ye,className:"flex-1",children:[s.jsx(Zs,{size:14,className:"mr-1"})," Email Report"]})]})]})]})},qm=[{id:"age",question:"What is your current age?",type:"single",category:"age",options:[{value:"under-40",label:"Under 40",score:0},{value:"40-45",label:"40-45 years",score:3},{value:"46-50",label:"46-50 years",score:6},{value:"51-55",label:"51-55 years",score:9},{value:"56-60",label:"56-60 years",score:7},{value:"over-60",label:"Over 60",score:5}],icon:s.jsx(Fe,{size:24})},{id:"symptoms",question:"Which symptoms are you currently experiencing?",type:"multi",category:"symptoms",options:[{value:"hot-flashes",label:"Hot Flashes",score:10},{value:"night-sweats",label:"Night Sweats",score:10},{value:"irregular-periods",label:"Irregular Periods",score:8},{value:"mood-changes",label:"Mood Changes",score:6},{value:"sleep-issues",label:"Sleep Problems",score:7},{value:"weight-changes",label:"Weight Changes",score:4},{value:"brain-fog",label:"Brain Fog / Memory Issues",score:5},{value:"vaginal-dryness",label:"Vaginal Dryness",score:6},{value:"fatigue",label:"Fatigue",score:5},{value:"anxiety",label:"Anxiety",score:6},{value:"none",label:"None of the above",score:0}],icon:s.jsx(pt,{size:24})},{id:"symptom-severity",question:"How would you rate the overall severity of your symptoms?",type:"scale",category:"severity",options:[{value:"1",label:"Mild - Barely noticeable",score:3},{value:"2",label:"Moderate - Noticeable but manageable",score:6},{value:"3",label:"Significant - Affecting daily life",score:9},{value:"4",label:"Severe - Major impact on quality of life",score:12},{value:"5",label:"Extreme - Very difficult to function",score:15}],icon:s.jsx(Ha,{size:24})},{id:"symptom-duration",question:"How long have you been experiencing these symptoms?",type:"single",category:"duration",options:[{value:"less-3mo",label:"Less than 3 months",score:2},{value:"3-6mo",label:"3-6 months",score:4},{value:"6-12mo",label:"6-12 months",score:6},{value:"1-2years",label:"1-2 years",score:8},{value:"2-5years",label:"2-5 years",score:10},{value:"more-5years",label:"More than 5 years",score:12}],icon:s.jsx(Fr,{size:24})},{id:"period-changes",question:"Have you noticed changes in your menstrual cycle?",type:"single",category:"symptoms",options:[{value:"no-changes",label:"No changes - Still regular",score:2},{value:"slightly-irregular",label:"Slightly irregular",score:6},{value:"very-irregular",label:"Very irregular (skipping periods)",score:10},{value:"no-periods",label:"No period for 12+ months",score:12},{value:"hysterectomy",label:"Had a hysterectomy",score:5}],icon:s.jsx(Et,{size:24})},{id:"sleep-quality",question:"How would you rate your sleep quality?",type:"scale",category:"symptoms",options:[{value:"excellent",label:"Excellent - Sleep well every night",score:1},{value:"good",label:"Good - Minor disturbances",score:3},{value:"fair",label:"Fair - Some nights are difficult",score:6},{value:"poor",label:"Poor - Frequently wake up",score:9},{value:"very-poor",label:"Very Poor - Rarely sleep well",score:12}],icon:s.jsx(wn,{size:24})},{id:"stress-level",question:"How would you rate your current stress level?",type:"scale",category:"stress",options:[{value:"very-low",label:"Very Low - Feel calm most days",score:2},{value:"low",label:"Low - Minor stress occasionally",score:4},{value:"moderate",label:"Moderate - Manageable stress",score:6},{value:"high",label:"High - Often feel stressed",score:8},{value:"very-high",label:"Very High - Overwhelmed most of the time",score:10}],icon:s.jsx(Tm,{size:24})},{id:"relationships",question:"How have your symptoms affected your relationships?",type:"single",category:"relationships",options:[{value:"no-impact",label:"No impact - Relationships are fine",score:0},{value:"minor",label:"Minor impact - Some tension occasionally",score:3},{value:"moderate",label:"Moderate - Noticeable strain",score:6},{value:"significant",label:"Significant - Major relationship challenges",score:9},{value:"severe",label:"Severe - Relationships seriously affected",score:12}],icon:s.jsx(tr,{size:24})},{id:"anxiety",question:"Do you experience anxiety or panic symptoms?",type:"single",category:"anxiety",options:[{value:"never",label:"Never or very rarely",score:0},{value:"occasionally",label:"Occasionally - A few times a month",score:4},{value:"weekly",label:"Weekly - Several times a week",score:7},{value:"daily",label:"Daily - Most days",score:10},{value:"severe",label:"Severe - Multiple times daily",score:15}],icon:s.jsx(xn,{size:24})},{id:"hot-flashes",question:"How often do you experience hot flashes?",type:"single",category:"symptoms",options:[{value:"none",label:"None",score:0},{value:"rarely",label:"Rarely - A few times a week",score:3},{value:"sometimes",label:"Sometimes - Once a day",score:6},{value:"often",label:"Often - Several times a day",score:9},{value:"constantly",label:"Constantly - Almost all day",score:12}],icon:s.jsx(Ha,{size:24})},{id:"hot-flash-severity",question:"How severe are your hot flashes when they occur?",type:"scale",category:"symptoms",options:[{value:"1",label:"Mild - Slight warmth, barely noticeable",score:2},{value:"2",label:"Moderate - Noticeable warmth and flushing",score:5},{value:"3",label:"Significant - Intense heat, sweating",score:8},{value:"4",label:"Severe - Very intense, disrupting activities",score:11},{value:"5",label:"Extreme - Debilitating, cannot continue tasks",score:15}],icon:s.jsx(Ha,{size:24})},{id:"mood-changes",question:"How would you describe your current mood overall?",type:"single",category:"symptoms",options:[{value:"great",label:"Great - Feeling positive most days",score:1},{value:"good",label:"Good - Generally positive",score:3},{value:"okay",label:"Okay - Up and down",score:5},{value:"low",label:"Low - Often feeling down",score:8},{value:"difficult",label:"Difficult - Struggling emotionally",score:12}],icon:s.jsx(Et,{size:24})},{id:"mood-swings",question:"Do you experience sudden mood swings?",type:"single",category:"symptoms",options:[{value:"never",label:"Never",score:0},{value:"rarely",label:"Rarely - Occasionally feel irritable",score:2},{value:"sometimes",label:"Sometimes - Noticeable mood changes",score:5},{value:"often",label:"Often - Frequent intense mood shifts",score:8},{value:"constantly",label:"Constantly - Extreme mood volatility",score:10}],icon:s.jsx(pt,{size:24})},{id:"weight-changes",question:"Have you experienced weight changes recently?",type:"single",category:"symptoms",options:[{value:"stable",label:"Weight stable",score:0},{value:"slight-gain",label:"Slight weight gain (1-5 lbs)",score:4},{value:"moderate-gain",label:"Moderate weight gain (5-15 lbs)",score:7},{value:"significant-gain",label:"Significant weight gain (15+ lbs)",score:10},{value:"weight-loss",label:"Weight loss",score:3}],icon:s.jsx(Tm,{size:24})},{id:"eating-habits",question:"How would you describe your eating habits lately?",type:"single",category:"symptoms",options:[{value:"healthy",label:"Healthy - Eating balanced meals",score:1},{value:"mostly-healthy",label:"Mostly healthy with occasional treats",score:3},{value:"inconsistent",label:"Inconsistent - Some good days, some bad",score:5},{value:"poor",label:"Poor - Craving sweets and carbs often",score:8},{value:"very-poor",label:"Very poor - Significant changes in appetite",score:12}],icon:s.jsx(pt,{size:24})},{id:"eating-triggers",question:"Do you notice emotional eating or cravings related to your symptoms?",type:"single",category:"symptoms",options:[{value:"never",label:"Never",score:0},{value:"rarely",label:"Rarely - Occasional cravings",score:2},{value:"sometimes",label:"Sometimes - Comfort eating at times",score:5},{value:"often",label:"Often - Frequent emotional eating",score:8},{value:"constantly",label:"Constantly - Strong cravings most of the time",score:10}],icon:s.jsx(xn,{size:24})},{id:"additional-notes",question:"Is there anything else you'd like us to know about your experience?",type:"text",category:"symptoms",icon:s.jsx(xn,{size:24})}],bv=({onComplete:r,onClose:e})=>{var q,K;const[n,o]=A.useState(0),[l,c]=A.useState({}),d=ae(R=>R.setProfile),m=ae(R=>R.updateMenopauseStage),p=qm[n],g=qm.length,x=Math.round((n+1)/g*100),w=(R,F)=>{c({...l,[p.id]:{value:R,score:F}}),n<g-1&&o(n+1)},b=(R,F)=>{const me=l[p.id]||{values:[],score:0},ke=me.values.includes(R);c(ke?{...l,[p.id]:{values:me.values.filter(Pe=>Pe!==R),score:me.score-F}}:{...l,[p.id]:{values:[...me.values,R],score:me.score+F}})},v=(R,F)=>{c({...l,[p.id]:{value:R,score:F}}),n<g-1&&o(n+1)},S=()=>{n<g-1&&o(n+1)},T=()=>{n>0&&o(n-1)},j=()=>{var ue,we,xe,Q;let R=0,F=100;Object.values(l).forEach(G=>{G&&typeof G=="object"&&"score"in G&&(R+=G.score)});const me=l.age,ke=l["period-changes"],Pe=l["symptom-duration"],X=((we=(ue=l.symptoms)==null?void 0:ue.values)==null?void 0:we.length)||0;let V,ne=0;const Y=[];return(ke==null?void 0:ke.value)==="no-periods"?(me==null?void 0:me.score)>=6&&(Pe==null?void 0:Pe.score)>=8?(V="menopause",ne=85,Y.push("Your symptoms combined with no period for 3+ months suggest menopause.")):(me==null?void 0:me.score)>=7?(V="postmenopause",ne=75,Y.push("Based on your age and duration of symptoms, you may be in postmenopause.")):(V="unclear",ne=50,Y.push("Please consult with your healthcare provider for a definitive diagnosis.")):(ke==null?void 0:ke.value)==="very-irregular"?(V="perimenopause",ne=80,Y.push("Irregular periods are a hallmark sign of perimenopause.")):X>=5&&R>=40?(me==null?void 0:me.score)>=6?(V="perimenopause",ne=70,Y.push("You may be experiencing perimenopause. Many women start noticing symptoms in their late 40s.")):(V="unclear",ne=50,Y.push("Your symptoms warrant discussion with a healthcare provider.")):R<30?(V="unclear",ne=40,Y.push("Your symptoms are mild. This may be early stages or unrelated to menopause.")):(V="perimenopause",ne=65,Y.push("You appear to be in perimenopause based on your responses.")),((xe=l["stress-level"])==null?void 0:xe.score)>=8&&Y.push("Consider stress management techniques such as mindfulness, yoga, or counseling."),((Q=l.anxiety)==null?void 0:Q.score)>=10&&Y.push("Your anxiety levels suggest speaking with a mental health professional."),{stage:V,confidence:ne,score:R,maxScore:F,recommendations:Y}},W=()=>{const R=j();d({menopauseStage:R.stage!=="unclear"?R.stage:"perimenopause"}),R.stage!=="unclear"&&m(R.stage),r(R)},L=R=>{var me;const F=l[p.id];return p.type==="multi"?((me=F==null?void 0:F.values)==null?void 0:me.includes(R))||!1:(F==null?void 0:F.value)===R},H=()=>{var F;const R=l[p.id];return p.type==="text"?!0:R?p.type==="multi"?(((F=R.values)==null?void 0:F.length)||0)>0:!!R.value:!1};return s.jsxs("div",{className:"fixed inset-0 bg-white z-50 overflow-y-auto",children:[s.jsx("div",{className:"sticky top-0 bg-white border-b border-border z-10",children:s.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:e,className:"text-muted-foreground hover:text-foreground",children:"Cancel"}),s.jsxs("span",{className:"text-sm text-muted-foreground",children:[n+1," of ",g]})]}),s.jsx(oi,{value:x,size:"sm"})]})}),s.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-8",children:[s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[p.icon&&s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary",children:p.icon}),s.jsx("h2",{className:"font-serif text-2xl font-semibold text-foreground",children:p.question})]}),(p.type==="single"||p.type==="multi"||p.type==="scale")&&s.jsx("div",{className:"space-y-3",children:(q=p.options)==null?void 0:q.map(R=>s.jsxs("button",{onClick:()=>{p.type==="multi"?b(R.value,R.score):p.type==="scale"?v(R.value,R.score):w(R.value,R.score)},className:`
                    w-full p-4 rounded-xl border-2 text-left transition-all
                    ${L(R.value)?"border-primary bg-primary/5 text-primary":"border-border hover:border-primary/50"}
                  `,children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"font-medium",children:R.label}),L(R.value)&&s.jsx(Le,{size:20,className:"text-primary"})]}),p.type==="scale"&&s.jsx("div",{className:"mt-2",children:s.jsx(oi,{value:R.score/15*100,size:"sm",color:L(R.value)?"primary":"default"})})]},R.value))}),p.type==="text"&&s.jsxs("div",{className:"space-y-4",children:[s.jsx("textarea",{className:"input-psych min-h-[150px] resize-y",placeholder:"Share any additional details about your experience...",value:((K=l[p.id])==null?void 0:K.value)||"",onChange:R=>c({...l,[p.id]:{value:R.target.value,score:0}})}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"This is optional. You can skip this question if you prefer."})]})]}),s.jsxs("div",{className:"flex gap-3",children:[n>0&&s.jsx(oe,{variant:"outline",onClick:T,icon:s.jsx(lt,{size:18}),children:"Back"}),n<g-1?s.jsx(oe,{fullWidth:n===0,onClick:S,disabled:!H(),icon:s.jsx(Lf,{size:18}),iconPosition:"right",children:"Continue"}):s.jsx(oe,{fullWidth:!0,onClick:W,disabled:!H(),icon:s.jsx(Fe,{size:18}),children:"Get My Results"})]})]})]})},kv=({result:r,onClose:e,onStartTracking:n})=>{const l={perimenopause:{title:"Perimenopause",description:"The transition phase before menopause. Your ovaries are producing less estrogen, causing symptoms.",icon:s.jsx(Fr,{size:32,className:"text-primary"})},menopause:{title:"Menopause",description:"Confirmed by 12 consecutive months without a period. Estrogen production has significantly decreased.",icon:s.jsx(pt,{size:32,className:"text-accent"})},postmenopause:{title:"Postmenopause",description:"The phase after menopause. While symptoms may ease, health considerations continue.",icon:s.jsx(Et,{size:32,className:"text-success"})},unclear:{title:"Further Evaluation Needed",description:"Your symptoms may be related to various factors. A healthcare provider can help determine the cause.",icon:s.jsx(xn,{size:32,className:"text-secondary"})}}[r.stage];return s.jsx("div",{className:"fixed inset-0 bg-white z-50 overflow-y-auto",children:s.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-8",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4",children:l.icon}),s.jsxs(We,{variant:"primary",size:"lg",className:"mb-4",children:[r.confidence,"% Confidence"]}),s.jsx("h1",{className:"font-serif text-3xl font-bold text-foreground mb-2",children:l.title}),s.jsx("p",{className:"text-muted-foreground max-w-md mx-auto",children:l.description})]}),s.jsxs(te,{className:"text-center mb-6",children:[s.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Assessment Score"}),s.jsxs("div",{className:"flex items-center justify-center gap-2",children:[s.jsx("span",{className:"text-4xl font-bold text-primary",children:r.score}),s.jsxs("span",{className:"text-muted-foreground",children:["/ ",r.maxScore]})]}),s.jsx(oi,{value:r.score/r.maxScore*100,className:"mt-4"})]}),s.jsxs(te,{className:"mb-6",children:[s.jsxs("h3",{className:"font-semibold mb-4 flex items-center gap-2",children:[s.jsx(Fe,{size:18,className:"text-accent"}),"Personalized Recommendations"]}),s.jsx("ul",{className:"space-y-3",children:r.recommendations.map((c,d)=>s.jsxs("li",{className:"flex items-start gap-3",children:[s.jsx(Le,{size:18,className:"text-success shrink-0 mt-0.5"}),s.jsx("span",{className:"text-muted-foreground",children:c})]},d))})]}),s.jsxs(te,{className:"mb-6 bg-amber-50 border-amber-200",children:[s.jsxs("p",{className:"text-sm text-amber-800",children:[s.jsx("strong",{children:"Important:"})," This assessment is for informational purposes only and is not a medical diagnosis. Please consult with your healthcare provider for a definitive evaluation and personalized treatment plan."]}),s.jsx("p",{className:"text-sm text-amber-800 mt-3",children:"If you or someone you know is struggling or in crisis, help is available. You are never alone."}),s.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:[s.jsx("strong",{children:"National Suicide Prevention Lifeline:"})," Call or text ",s.jsx("strong",{children:"988"})," (Available 24/7, free, and confidential)"]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(oe,{fullWidth:!0,size:"lg",onClick:n,children:"Start Tracking My Symptoms"}),s.jsx(oe,{variant:"outline",fullWidth:!0,onClick:e,children:"Close"})]})]})})},jv=()=>{var V,ne,Y;const[r,e]=A.useState(0),[n,o]=A.useState({}),[l,c]=A.useState(!0),[d,m]=A.useState(!1),[p,g]=A.useState(null),[x,w]=A.useState(!1),b=ae(ue=>ue.setProfile),v=ae(ue=>ue.completeOnboarding),S=ae(ue=>ue.updateMenopauseStage),T=Dm.length+1,j=gt.tagline,W=[{title:"Track Symptoms",description:"Log 30+ symptoms with severity tracking"},{title:"Monitor Mood",description:"Daily mood and energy check-ins"},{title:"AI Insights",description:"Personalized patterns and recommendations"},{title:"Expert Guidance",description:"Evidence-based information and support"}],L="Take Symptom Quiz",H="Skip & Set Up Manually",q="Created by",K=()=>{r<T-1&&e(r+1)},R=()=>{r>0&&e(r-1)},F=(ue,we)=>{o({...n,[ue]:we})},me=()=>{var ue,we;b({name:n.name||"Friend",email:n.email||"",birthYear:parseInt((ue=n.age)==null?void 0:ue.split("-")[0])||1975,menopauseStage:((we=n.stage)==null?void 0:we.toLowerCase())||"perimenopause",symptomsStartDate:n.symptomsStart||null,onboardingCompleted:!0}),n.stage&&S({perimenopause:"perimenopause",menopause:"menopause",postmenopause:"postmenopause","not sure":"perimenopause"}[n.stage.toLowerCase()]||"perimenopause"),v()},ke=()=>l?0:Math.round(r/(T-1)*100);if(d)return p?s.jsx(kv,{result:p,onClose:()=>{m(!1),w(!0)},onStartTracking:()=>{m(!1),v()}}):s.jsx(bv,{onComplete:ue=>g(ue),onClose:()=>m(!1)});if(l)return s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-primary via-secondary to-accent flex flex-col",children:s.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center px-6 text-center text-white",children:[s.jsx("div",{className:"w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6",children:s.jsx(Fe,{size:40})}),s.jsx("h1",{className:"font-serif text-4xl font-bold mb-2",children:gt.name}),s.jsx("p",{className:"text-white/80 text-lg mb-8 max-w-xs",children:j}),s.jsx("div",{className:"grid grid-cols-2 gap-4 max-w-sm mb-12",children:W.map((ue,we)=>s.jsxs("div",{className:"bg-white/10 backdrop-blur rounded-xl p-4 text-left",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2",children:[s.jsx(pt,{size:20}),s.jsx(Et,{size:20}),s.jsx(xn,{size:20}),s.jsx(Fe,{size:20})][we]}),s.jsx("h3",{className:"font-semibold text-sm",children:ue.title}),s.jsx("p",{className:"text-xs text-white/70 mt-1",children:ue.description})]},we))}),s.jsxs("div",{className:"w-full max-w-sm space-y-3",children:[s.jsx(oe,{size:"lg",className:"w-full bg-white text-primary hover:bg-white/90",onClick:()=>m(!0),icon:s.jsx(py,{size:20}),children:L}),s.jsx(oe,{size:"lg",variant:"outline",className:"w-full border-white/50 text-white hover:bg-white/10",onClick:()=>c(!1),children:H})]}),s.jsxs("p",{className:"text-white/60 text-sm mt-6",children:[q," ",gt.creator,", ",gt.credentials]})]})});const Pe=r-1,X=Dm[Pe];return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-background to-muted/20 flex flex-col",children:[s.jsxs("div",{className:"sticky top-0 bg-white/95 backdrop-blur-sm z-10",children:[s.jsx("div",{className:"h-1 bg-muted",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500",style:{width:`${ke()}%`}})}),s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-4 flex items-center justify-between",children:[s.jsx("button",{onClick:R,className:"p-2 rounded-xl hover:bg-muted transition-colors",disabled:r===0,children:s.jsx(zf,{size:24,className:r===0?"text-muted":"text-foreground"})}),s.jsxs("span",{className:"text-sm text-muted-foreground",children:[r," of ",T-1]}),s.jsx("div",{className:"w-10"})," "]})]}),s.jsx("div",{className:"flex-1 flex flex-col justify-center px-6 py-8",children:s.jsx("div",{className:"max-w-lg mx-auto w-full",children:X?s.jsxs(s.Fragment,{children:[s.jsx("h2",{className:"font-serif text-2xl font-semibold text-foreground mb-2",children:X.question}),s.jsx("p",{className:"text-muted-foreground mb-8",children:X.type==="multi_select"?"Select all that apply":X.type==="select"?"Choose one option":""}),X.type==="select"&&s.jsx("div",{className:"space-y-3",children:(V=X.options)==null?void 0:V.map(ue=>s.jsxs("button",{onClick:()=>F(X.id,ue),className:`
                        w-full p-4 rounded-xl border-2 text-left transition-all
                        ${n[X.id]===ue?"border-primary bg-primary/5 text-primary":"border-border hover:border-primary/50"}
                      `,children:[s.jsx("span",{className:"font-medium",children:ue}),n[X.id]===ue&&s.jsx(Le,{size:20,className:"float-right text-primary"})]},ue))}),X.type==="multi_select"&&s.jsx("div",{className:"space-y-3",children:(ne=X.options)==null?void 0:ne.map(ue=>{const we=n[X.id]||[],xe=we.includes(ue);return s.jsxs("button",{onClick:()=>{xe?F(X.id,we.filter(Q=>Q!==ue)):F(X.id,[...we,ue])},className:`
                          w-full p-4 rounded-xl border-2 text-left transition-all
                          ${xe?"border-primary bg-primary/5 text-primary":"border-border hover:border-primary/50"}
                        `,children:[s.jsx("span",{className:"font-medium",children:ue}),xe&&s.jsx(Le,{size:20,className:"float-right text-primary"})]},ue)})}),X.type==="consent"&&s.jsxs("div",{className:"space-y-4",children:[s.jsx(te,{className:"bg-muted/50",children:s.jsxs("div",{className:"space-y-4 text-sm text-muted-foreground",children:[s.jsx("p",{children:"By continuing, you agree to our Terms of Service and Privacy Policy. Your health data is encrypted and stored securely."}),s.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[s.jsx("li",{children:"We never sell your data"}),s.jsx("li",{children:"You can delete your data anytime"}),s.jsx("li",{children:"This app does not provide medical advice"})]})]})}),s.jsxs("button",{onClick:()=>F(X.id,!0),className:`
                      w-full p-4 rounded-xl border-2 text-left transition-all
                      ${n[X.id]?"border-primary bg-primary/5 text-primary":"border-border hover:border-primary/50"}
                    `,children:[s.jsx("span",{className:"font-medium",children:"I agree to the terms and privacy policy"}),n[X.id]&&s.jsx(Le,{size:20,className:"float-right text-primary"})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-success/20 flex items-center justify-center mb-4",children:s.jsx(Le,{size:40,className:"text-success"})}),s.jsx("h2",{className:"font-serif text-2xl font-semibold text-foreground mb-2",children:"You're all set!"}),s.jsx("p",{className:"text-muted-foreground",children:"Your personalized menopause wellness journey begins now."})]}),s.jsxs(te,{className:"bg-gradient-to-r from-lavender to-soft-peach",children:[s.jsx("h3",{className:"font-semibold mb-3",children:"What to expect:"}),s.jsx("ul",{className:"space-y-3",children:["Daily check-ins to track how you feel","Personalized insights based on your patterns","Evidence-based guidance from experts","A supportive community of women like you"].map((ue,we)=>s.jsxs("li",{className:"flex items-start gap-3",children:[s.jsx(Le,{size:18,className:"text-success mt-0.5 shrink-0"}),s.jsx("span",{className:"text-sm",children:ue})]},we))})]})]})})}),s.jsx("div",{className:"sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-border p-4",children:s.jsx("div",{className:"max-w-lg mx-auto",children:s.jsx(oe,{fullWidth:!0,size:"lg",onClick:X?K:me,disabled:(X==null?void 0:X.required)&&(X.type==="multi_select"?!((Y=n[X.id])!=null&&Y.length):!n[X.id]),icon:X?s.jsx(Lf,{size:20}):s.jsx(Fe,{size:20}),iconPosition:"right",children:X?"Continue":"Start Your Journey"})})})]})},Sv=({onClose:r})=>{const e=[{name:"National Suicide Prevention Lifeline",phone:"988",description:"24/7, free and confidential support for people in distress",icon:s.jsx(vn,{size:24}),color:"from-blue-500 to-blue-600",available:"24/7"},{name:"Crisis Text Line",phone:"Text HOME to 741741",description:"Free 24/7 support via text message",icon:s.jsx(Iu,{size:24}),color:"from-green-500 to-green-600",available:"24/7"},{name:"NAMI Helpline",phone:"1-800-950-6264",description:"Mental health support and resources",icon:s.jsx(Et,{size:24}),color:"from-purple-500 to-purple-600",available:"Mon-Fri 10am-10pm ET"},{name:"SAMHSA National Helpline",phone:"1-800-662-4357",description:"Treatment referral and information service",icon:s.jsx(er,{size:24}),color:"from-teal-500 to-teal-600",available:"24/7"}];return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4",children:s.jsx(Et,{size:32})}),s.jsx("h1",{className:"font-serif text-2xl font-semibold text-foreground",children:"Support When You Need It Most"}),s.jsx("p",{className:"text-muted-foreground mt-2 max-w-sm mx-auto",children:"If you're in crisis or need immediate help, please reach out to one of these resources. You don't have to face this alone."})]}),s.jsx(te,{className:"bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0",children:s.jsx(qr,{size:20,className:"text-amber-600"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-amber-900",children:"Important"}),s.jsxs("p",{className:"text-sm text-amber-800 mt-1",children:[gt.name," is not a crisis service. If you're having thoughts of harming yourself or others, please contact emergency services or one of the hotlines below immediately."]})]})]})}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"font-semibold text-lg",children:"Crisis Support Lines"}),e.map((n,o)=>s.jsx(te,{hover:!0,className:"overflow-hidden",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${n.color} flex items-center justify-center text-white shrink-0`,children:n.icon}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-semibold",children:n.name}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:n.description}),s.jsxs("p",{className:"text-sm text-muted-foreground mt-1",children:[s.jsx(qr,{size:12,className:"inline mr-1"}),n.available]}),s.jsxs(oe,{fullWidth:!0,className:"mt-3 bg-gradient-to-r ${resource.color}",onClick:()=>window.open(`tel:${n.phone.replace(/\D/g,"")}`),children:[s.jsx(vn,{size:16,className:"mr-2"}),n.phone]})]})]})},o))]}),s.jsx(te,{className:"bg-destructive/10 border-destructive/20",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-destructive flex items-center justify-center shrink-0",children:s.jsx(vn,{size:24,className:"text-white"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-semibold text-destructive",children:"Emergency Services"}),s.jsx("p",{className:"text-sm text-destructive/80 mt-1",children:"If you or someone else is in immediate danger, call 911 or go to your nearest emergency room."}),s.jsx(oe,{fullWidth:!0,variant:"danger",className:"mt-3",onClick:()=>window.open("tel:911"),children:"Call 911"})]})]})}),s.jsxs(te,{children:[s.jsx("h3",{className:"font-semibold mb-4",children:"While You Wait for Support"}),s.jsx("div",{className:"space-y-4",children:[{title:"Breathe Deeply",description:"Try the 4-7-8 technique: inhale for 4 seconds, hold for 7, exhale for 8."},{title:"Ground Yourself",description:"Notice 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste."},{title:"Reach Out",description:"Text or call a friend, family member, or someone you trust. You don't have to go through this alone."}].map((n,o)=>s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0",children:s.jsx("span",{className:"text-primary font-semibold text-sm",children:o+1})}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-medium",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.description})]})]},o))})]}),s.jsxs(te,{className:"bg-gradient-to-r from-lavender to-soft-peach text-center",children:[s.jsx("p",{className:"text-muted-foreground italic",children:'"You matter. Your feelings are valid. Help is available, and there is hope. Please reach out—you deserve support."'}),s.jsxs("p",{className:"text-sm text-muted-foreground/70 mt-2",children:["— ",gt.name]})]}),s.jsx(oe,{variant:"outline",fullWidth:!0,onClick:r,children:"Return to App"})]})},Nv=[{id:"tip-1",title:"Layer up, cool down fast",description:"Wear breathable fabrics and layer clothing so you can remove pieces when a hot flash hits.",author:"Linda T.",likes:45,icon:Ha,color:"#ff6b6b"},{id:"tip-2",title:"Cold water on wrists",description:"Keep a cold water bottle handy and apply to wrists and neck when you feel a flash coming.",author:"Maria S.",likes:38,icon:Py,color:"#4ecdc4"},{id:"tip-3",title:"Peppermint everything",description:"Peppermint tea, peppermint oil, peppermint gum - it genuinely helps cool me down!",author:"Jennifer K.",likes:52,icon:qf,color:"#95e1d3"},{id:"tip-4",title:"Avoid triggers before bed",description:"Spicy food, caffeine, and alcohol before sleep = guaranteed night sweats. Learned the hard way!",author:"Susan R.",likes:67,icon:wn,color:"#9b59b6"}],Zc=[{id:"challenge-1",title:"30-Day Sleep Challenge",description:"Track your sleep quality for 30 days and aim for consistent bedtime routines.",participants:156,daysLeft:12,icon:wn,color:"#6366f1"},{id:"challenge-2",title:"Hydration Station",description:"Drink 8+ glasses of water daily for better hot flash management.",participants:243,daysLeft:28,icon:gy,color:"#22d3ee"}],Tv=[{id:"member-1",name:"Angela M.",role:"Hot Flash Veteran",badge:"flame-queen",tips:28,helpful:156,color:"#ff6b6b"},{id:"member-2",name:"Deborah W.",role:"Wellness Coach",badge:"wellness-star",tips:41,helpful:289,color:"#f59e0b"},{id:"member-3",name:"Patricia L.",role:"HRT Expert",badge:"hrt-champion",tips:35,helpful:412,color:"#8b5cf6"}],Cv=({onClose:r,onNavigate:e})=>{const[n,o]=A.useState("all"),[l,c]=A.useState(!1),[d,m]=A.useState(!1),[p,g]=A.useState(""),[x,w]=A.useState("discussions"),[b,v]=A.useState(Nv),[S,T]=A.useState(new Set),[j,W]=A.useState({}),[L,H]=A.useState(null),q=ae(I=>I.profile),K=ae(I=>I.forumPosts),R=ae(I=>I.addForumPost),F=ae(I=>I.subscriptionTier),me=ae(I=>I.addInsight),ke=ae(I=>I.addCompletedChallenge),Pe=F==="premium",X=(I,ce,ye)=>{R({title:I,content:ce,category:ye,authorName:q.name||"Anonymous",isAnonymous:!1,isExpertVerified:!1}),c(!1)},V=(I,ce)=>{const ye={id:`tip-${Date.now()}`,title:I,description:ce,author:q.name.split(" ")[0]||"Anonymous",likes:0,icon:du,color:"#ff6b6b"};v([ye,...b]),m(!1)},ne=I=>{T(ce=>{const ye=new Set(ce);return ye.add(I),ye}),W(ce=>({...ce,[I]:0}))},Y=I=>{var ye;if(W(P=>{const D=P[I]||0,re=Math.min(D+1,30);return{...P,[I]:re}}),(j[I]||0)+1>=30){H(I);const P=Zc.find(D=>D.id===I);P&&(me({type:"achievement",title:`${P.title} Complete! 🎉`,description:`Congratulations! You completed the ${P.title}. You've proven your commitment to your wellness journey!`,confidence:.95,isPremium:!1}),ke({id:P.id,title:P.title}),R({title:`🏆 Champion Alert! ${((ye=q.name)==null?void 0:ye.split(" ")[0])||"A Hot Hottie"} completed the ${P.title}!`,content:`Give it up for ${q.name||"our amazing community member"}! 🎉 They just completed the ${P.title} - 30 days of dedication and hard work! Drop a comment below to send your congratulations and support! You can do it too - join a challenge and start your journey today! 💪`,category:"celebration",authorName:q.name||"Hot Flash Hottie",isAnonymous:!1,isExpertVerified:!1})),setTimeout(()=>H(null),3e3)}},ue=I=>{const ce=j[I]||0,ye={0:["Every journey starts with a single step!","You've got this!","Day 1 - Let's do this!"],5:["Great start! Keep going!","You're building healthy habits!","5 days down - feeling good!"],10:["Halfway there! Amazing progress!","You're crushing it!","10 days of commitment - you're a star!"],15:["Almost there! Your body thanks you!","You've made this a habit!","Fantastic dedication!"],20:["So close to the finish line!","Your consistency is inspiring!","20 days - you're unstoppable!"],25:["Almost done! You can do this!","Final stretch - stay strong!","Just a few more days to go!"],30:["🏆 CHAMPION! 🏆","You did it! Amazing!","Challenge completed - you're incredible!"]},P=Object.keys(ye).reverse().find(re=>ce>=parseInt(re))||"0",D=ye[parseInt(P)]||ye[0];return D[Math.floor(Math.random()*D.length)]},we=()=>Zc.filter(I=>S.has(I.id)).map(I=>({...I,progress:j[I.id]||0})),xe=[{id:"sample-1",title:"What helps with night sweats?",content:"I've been experiencing severe night sweats for the past few months. They wake me up 3-4 times a night. Has anyone found anything that helps?",category:"symptoms",authorName:"Sarah M.",isAnonymous:!1,isExpertVerified:!0,upvotes:24,replyCount:8,createdAt:new Date().toISOString()},{id:"sample-2",title:"Starting HRT - what to expect?",content:"My doctor just prescribed estradiol patches. I'm nervous about starting. Has anyone had experience with them?",category:"hormone_therapy",authorName:"Jennifer K.",isAnonymous:!1,isExpertVerified:!1,upvotes:18,replyCount:12,createdAt:new Date().toISOString()},{id:"sample-3",title:"Tips for managing brain fog at work",content:"My brain fog has been affecting my performance at work. Looking for practical tips that have worked for others.",category:"work",authorName:"Anonymous",isAnonymous:!0,isExpertVerified:!1,upvotes:31,replyCount:15,createdAt:new Date().toISOString()}],Q=I=>I.filter(ce=>{const ye=n==="all"||ce.category===n,P=ce.title.toLowerCase().includes(p.toLowerCase())||ce.content.toLowerCase().includes(p.toLowerCase());return ye&&P}),G=Q(K),J=Q(xe),N=G.length>0?G:J,B=Pe?N:N.slice(-3),fe=!Pe&&N.length>3;return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("button",{onClick:()=>e==null?void 0:e("dashboard"),className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:[s.jsx(lt,{size:18}),"Back to Home"]}),s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"inline-flex items-center gap-3 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 flex items-center justify-center text-white shadow-lg animate-pulse",children:s.jsx(du,{size:28})}),s.jsxs("div",{children:[s.jsx("h1",{className:"font-serif text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent",children:"Hot Flash Hotties"}),s.jsx("p",{className:"text-xs text-muted-foreground font-medium tracking-wide",children:"OUR MENOPAUSE SQUAD"})]}),s.jsx("div",{className:"w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center text-white shadow-lg",children:s.jsx(Et,{size:28})})]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"We're hot, we're fabulous, and we're in this together!"})]}),!Pe&&s.jsx(te,{className:"bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0",children:s.jsx(Fe,{size:20,className:"text-amber-600"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-semibold text-amber-800 text-sm",children:"Community Access"}),s.jsxs("p",{className:"text-xs text-amber-700",children:[s.jsx("span",{className:"text-success font-medium",children:"✓ View"})," last 3 discussions & tips •"," ",s.jsx("button",{onClick:()=>e==null?void 0:e("subscription"),className:"text-amber-600 font-medium underline",children:"Upgrade to unlock full access"})]})]})]})}),s.jsxs("div",{className:"flex gap-2 overflow-x-auto pb-2",children:[s.jsxs("button",{onClick:()=>w("discussions"),className:`
            px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2
            ${x==="discussions"?"bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md":"bg-muted text-muted-foreground hover:text-foreground"}
          `,children:[s.jsx(Sy,{size:16}),"Discussions"]}),s.jsxs("button",{onClick:()=>w("tips"),className:`
            px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2
            ${x==="tips"?"bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md":"bg-muted text-muted-foreground hover:text-foreground"}
          `,children:[s.jsx(Fe,{size:16}),"Hot Tips"]}),s.jsxs("button",{onClick:()=>w("challenges"),className:`
            px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2
            ${x==="challenges"?"bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md":"bg-muted text-muted-foreground hover:text-foreground"}
          `,children:[s.jsx(Na,{size:16}),"Challenges"]})]}),x==="discussions"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h3",{className:"font-bold text-lg",children:"Discussions"}),s.jsx(We,{variant:"premium",size:"sm",children:"PREMIUM"})]})}),Pe?s.jsx(ls,{placeholder:"Search discussions...",value:p,onChange:I=>g(I.target.value),icon:s.jsx(Bf,{size:18})}):s.jsxs(te,{className:"bg-muted/50 border border-border/50 text-center py-4",children:[s.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[s.jsx(_s,{size:16,className:"text-muted-foreground"}),s.jsx(We,{variant:"premium",size:"sm",children:"PREMIUM"})]}),s.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Search discussions is a Premium feature"}),s.jsx(oe,{size:"sm",variant:"outline",onClick:()=>e==null?void 0:e("subscription"),children:"Upgrade to Search"})]}),s.jsxs("div",{className:"flex gap-2 overflow-x-auto pb-2",children:[s.jsx("button",{onClick:()=>o("all"),className:`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${n==="all"?"bg-primary text-white":"bg-muted text-muted-foreground hover:text-foreground"}
              `,children:"All"}),Object.entries(gu).map(([I,ce])=>s.jsxs("button",{onClick:()=>o(I),className:`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  flex items-center gap-2
                  ${n===I?"bg-primary text-white":"bg-muted text-muted-foreground hover:text-foreground"}
                `,children:[s.jsx("span",{children:ce.icon}),ce.label]},I))]}),Pe&&s.jsxs(oe,{fullWidth:!0,icon:s.jsx(Yr,{size:18}),onClick:()=>c(!0),children:[s.jsx(Fe,{size:14,className:"mr-1"})," Start a Discussion"]}),!Pe&&s.jsxs(te,{className:"bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 text-center",children:[s.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[s.jsx(Fe,{size:18,className:"text-amber-500"}),s.jsx(We,{variant:"premium",size:"sm",children:"PREMIUM"})]}),s.jsx("p",{className:"text-sm text-amber-700 font-medium mb-3",children:"Start a Discussion is a Premium feature"}),s.jsx(oe,{size:"sm",variant:"outline",onClick:()=>e==null?void 0:e("subscription"),children:"Upgrade to Premium"})]}),s.jsx("div",{className:"space-y-4",children:B.map(I=>{const ce=gu[I.category];return s.jsx(te,{hover:!0,className:"border-2 border-transparent hover:border-primary/20 transition-all",children:s.jsxs("div",{className:"flex gap-3",children:[s.jsxs("div",{className:"flex flex-col items-center gap-1 text-muted-foreground",children:[s.jsx("button",{className:"p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-500 transition-colors",children:s.jsx(_y,{size:16})}),s.jsx("span",{className:"text-sm font-bold text-orange-500",children:I.upvotes})]}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsxs(We,{size:"sm",style:{backgroundColor:`${ce.color}20`,color:ce.color},children:[ce.icon," ",ce.label]}),I.isExpertVerified&&s.jsx(We,{variant:"primary",size:"sm",icon:s.jsx(lu,{size:12}),children:"Expert"})]}),s.jsx("h3",{className:"font-bold text-base mb-2 text-foreground",children:I.title}),s.jsx("p",{className:"text-sm text-muted-foreground line-clamp-2",children:I.content}),s.jsxs("div",{className:"flex items-center justify-between mt-4 pt-3 border-t border-border/50",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold",children:I.isAnonymous?"H":I.authorName.charAt(0)}),s.jsx("span",{className:"text-sm text-muted-foreground font-medium",children:I.isAnonymous?"Anonymous Hottie":I.authorName})]}),s.jsx("div",{className:"flex items-center gap-3 text-sm text-muted-foreground",children:s.jsxs("span",{className:"flex items-center gap-1 bg-muted px-2 py-1 rounded-full",children:[s.jsx(Iu,{size:14}),I.replyCount]})})]})]})]})},I.id)})}),fe&&s.jsx(te,{className:"bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 text-center",children:s.jsxs("div",{className:"py-4",children:[s.jsx(Fe,{size:28,className:"mx-auto text-amber-500 mb-2"}),s.jsx("p",{className:"font-semibold text-amber-800 mb-1",children:"Want to see all discussions?"}),s.jsx("p",{className:"text-sm text-amber-700 mb-3",children:"Upgrade to Premium to access the full community forum"}),s.jsx(oe,{size:"sm",variant:"outline",onClick:()=>e==null?void 0:e("subscription"),children:"Upgrade to Premium"})]})})]}),x==="tips"&&s.jsxs("div",{className:"space-y-4",children:[s.jsx(te,{className:"bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 border-2 border-orange-200",children:s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white",children:s.jsx(Fe,{size:20})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-lg",children:"Hot Tips from Hotties"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Real solutions from women who've been there"})]})]})}),s.jsx("div",{className:"grid grid-cols-1 gap-4",children:(Pe?b:b.slice(0,3)).map(I=>{const ce=I.icon;return s.jsx("div",{style:{borderLeftColor:I.color},className:"border-l-4",children:s.jsx(te,{hover:!0,className:"",children:s.jsxs("div",{className:"flex gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center shrink-0",style:{backgroundColor:`${I.color}20`},children:s.jsx(ce,{size:24,style:{color:I.color}})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:"font-bold text-foreground mb-1",children:I.title}),s.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:I.description}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("span",{className:"text-xs font-medium text-muted-foreground",children:["— ",I.author]}),s.jsxs("button",{className:"flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 font-medium",children:[s.jsx(Et,{size:14,fill:"currentColor"}),I.likes]})]})]})]})})},I.id)})}),!Pe&&b.length>3&&s.jsx(te,{className:"bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 text-center",children:s.jsxs("div",{className:"py-4",children:[s.jsx(Fe,{size:28,className:"mx-auto text-amber-500 mb-2"}),s.jsx("p",{className:"font-semibold text-amber-800 mb-1",children:"Want to see more hot tips?"}),s.jsx("p",{className:"text-sm text-amber-700 mb-3",children:"Upgrade to Premium to access all community tips"}),s.jsx(oe,{size:"sm",variant:"outline",onClick:()=>e==null?void 0:e("subscription"),children:"Upgrade to Premium"})]})}),Pe&&s.jsx(oe,{fullWidth:!0,variant:"outline",icon:s.jsx(Yr,{size:18}),onClick:()=>m(!0),children:"Share Your Hot Tip"})]}),x==="challenges"&&s.jsxs(s.Fragment,{children:[!Pe&&s.jsxs(te,{className:"bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border-2 border-purple-200 text-center py-8",children:[s.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white",children:s.jsx(Na,{size:32})}),s.jsx("h3",{className:"font-bold text-xl text-purple-700 mb-2",children:"Community Challenges"}),s.jsx("p",{className:"text-sm text-muted-foreground mb-6 max-w-sm mx-auto",children:"Join our 30-day challenges with other Hotties! Track your progress, earn achievements, and build healthy habits together."}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs(oe,{fullWidth:!0,onClick:()=>e==null?void 0:e("subscription"),children:[s.jsx(Hs,{size:16,className:"mr-2"}),"Upgrade to Premium"]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Join the Sleep Challenge, Hydration Station, and more!"})]})]}),Pe&&s.jsxs("div",{className:"space-y-4",children:[L&&s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in duration-300",children:s.jsxs("div",{className:"bg-white rounded-2xl p-8 text-center max-w-sm mx-4 shadow-2xl animate-in zoom-in duration-300",children:[s.jsx("div",{className:"w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 flex items-center justify-center text-white text-4xl animate-bounce",children:"🎉"}),s.jsx("h3",{className:"font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2",children:"CHAMPION!"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"You completed the challenge! Your dedication is inspiring!"}),s.jsx("div",{className:"flex justify-center gap-2",children:s.jsx(We,{variant:"success",size:"lg",children:"🏆 Challenge Complete"})})]})}),s.jsx(te,{className:"bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border-2 border-purple-200",children:s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white",children:s.jsx(Na,{size:20})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-lg",children:"Community Challenges"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Join our Hotties in making healthy changes together"})]})]})}),s.jsx("div",{className:"space-y-4",children:Zc.map(I=>{const ce=I.icon,ye=S.has(I.id),P=j[I.id]||0,D=Math.round(P/30*100);return s.jsxs(te,{className:`overflow-hidden transition-all ${ye?"ring-2 ring-green-400":""}`,children:[s.jsx("div",{className:"h-2 bg-gradient-to-r",style:{background:`linear-gradient(to right, ${I.color}, ${I.color}80)`}}),s.jsx("div",{className:"p-4",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"w-14 h-14 rounded-xl flex items-center justify-center shrink-0",style:{backgroundColor:`${I.color}20`},children:s.jsx(ce,{size:28,style:{color:I.color}})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h4",{className:"font-bold text-lg text-foreground",children:I.title}),ye&&s.jsx(We,{variant:"success",size:"sm",children:"✓ Joined"})]}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:I.description}),s.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(tr,{size:14,className:"text-muted-foreground"}),s.jsxs("span",{className:"font-medium",children:[ye?I.participants+1:I.participants," Hotties"]})]}),s.jsxs(We,{variant:"default",size:"sm",children:[s.jsx(Ur,{size:12,className:"mr-1"}),I.daysLeft," days left"]})]}),ye&&s.jsxs("div",{className:"mt-4 p-3 rounded-xl bg-green-50 border border-green-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-sm font-semibold text-green-700",children:"Your Progress"}),s.jsxs("span",{className:"text-sm font-bold text-green-600",children:[P,"/30 days"]})]}),s.jsx("div",{className:"w-full h-3 bg-green-200 rounded-full overflow-hidden mb-3",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500",style:{width:`${D}%`}})}),s.jsxs("p",{className:"text-sm text-green-600/80 italic mb-3",children:['"',ue(I.id),'"']}),s.jsx(oe,{size:"sm",variant:"success",fullWidth:!0,icon:s.jsx(Fr,{size:16}),onClick:()=>Y(I.id),disabled:P>=30,children:P>=30?"✓ Challenge Complete!":"Log Today's Progress"})]}),!ye&&s.jsx(oe,{className:"w-full mt-4",size:"sm",onClick:()=>ne(I.id),variant:"primary",style:{backgroundColor:I.color},children:"Join Challenge"})]})]})})]},I.id)})}),S.size>0&&s.jsxs(te,{className:"bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white",children:s.jsx(Na,{size:20})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-green-700",children:"Your Challenge Progress"}),s.jsx("p",{className:"text-xs text-green-600/80",children:"Track your journey to completion"})]})]}),s.jsx("div",{className:"space-y-4",children:we().map(I=>{const ce=I.progress,ye=Math.round(ce/30*100);return s.jsxs("div",{className:"p-3 rounded-xl bg-white/80 border border-green-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-semibold text-green-700 text-sm",children:I.title}),s.jsxs("span",{className:"text-sm font-bold text-green-600",children:[ce,"/30"]})]}),s.jsx("div",{className:"w-full h-2 bg-green-200 rounded-full overflow-hidden mb-2",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500",style:{width:`${ye}%`}})}),s.jsxs("p",{className:"text-xs text-green-600/80 italic",children:['"',ue(I.id),'"']})]},I.id)})}),s.jsxs("div",{className:"mt-4 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200",children:[s.jsxs("p",{className:"text-sm text-amber-700 font-medium flex items-center gap-2",children:[s.jsx(lu,{size:16,className:"text-amber-500"}),"Rewards for completing challenges:"]}),s.jsxs("ul",{className:"mt-2 space-y-1 text-xs text-amber-600/80",children:[s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(qa,{size:12,className:"text-amber-400"}),"Exclusive achievement badge on your profile"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Hs,{size:12,className:"text-amber-400"}),"Champion status with special perks"]})]})]})]}),s.jsxs(te,{className:"bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200",children:[s.jsxs("h4",{className:"font-bold text-lg mb-4 flex items-center gap-2",children:[s.jsx(qa,{size:18,className:"text-amber-500"}),"Featured Hotties"]}),s.jsx("div",{className:"grid grid-cols-3 gap-4",children:Tv.map(I=>s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-lg font-bold mb-2",style:{background:`linear-gradient(135deg, ${I.color}, ${I.color}80)`},children:I.name.charAt(0)}),s.jsx("h5",{className:"font-semibold text-sm",children:I.name}),s.jsx("p",{className:"text-xs text-muted-foreground",children:I.role}),s.jsxs("div",{className:"flex justify-center gap-2 mt-2",children:[s.jsxs(We,{size:"sm",variant:"default",children:[I.tips," tips"]}),s.jsx(We,{size:"sm",variant:"default",icon:s.jsx(Et,{size:10}),children:I.helpful})]})]},I.id))})]})]})]}),s.jsx(te,{className:"bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 border-2 border-pink-200",children:s.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-2xl font-bold text-orange-500",children:"2,847"}),s.jsx("div",{className:"text-xs text-muted-foreground font-medium",children:"Hot Hotties"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-2xl font-bold text-pink-500",children:"12,563"}),s.jsx("div",{className:"text-xs text-muted-foreground font-medium",children:"Tips Shared"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-2xl font-bold text-purple-500",children:"89,421"}),s.jsx("div",{className:"text-xs text-muted-foreground font-medium",children:"Helpful Votes"})]})]})}),s.jsx(te,{className:"bg-muted/50",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white shrink-0",children:s.jsx(Et,{size:18})}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-semibold text-sm",children:"Hottie Guidelines"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Be kind, be supportive, no medical advice, respect privacy"})]})]})}),s.jsx(zt,{isOpen:l,onClose:()=>c(!1),title:"Start a Discussion",size:"lg",children:s.jsx(Ev,{onSubmit:X,onCancel:()=>c(!1)})}),s.jsx(zt,{isOpen:d,onClose:()=>m(!1),title:"Share Your Hot Tip",size:"lg",children:s.jsx(Pv,{onSubmit:V,onCancel:()=>m(!1)})})]})},Ev=({onSubmit:r,onCancel:e})=>{const[n,o]=A.useState(""),[l,c]=A.useState(""),[d,m]=A.useState("general"),p=()=>{n.trim()&&l.trim()&&r(n,l,d)};return s.jsxs("div",{className:"space-y-4",children:[s.jsx(ls,{label:"Title",placeholder:"What's on your mind?",value:n,onChange:g=>o(g.target.value)}),s.jsx(_v,{label:"Category",options:Object.entries(gu).map(([g,x])=>({value:g,label:`${x.icon} ${x.label}`})),value:d,onChange:g=>m(g)}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium",children:"Content"}),s.jsx("textarea",{className:"input-psych min-h-[150px] resize-y",placeholder:"Share your thoughts, questions, or experiences with your fellow Hotties...",value:l,onChange:g=>c(g.target.value)})]}),s.jsxs("div",{className:"flex gap-3 pt-2",children:[s.jsx(oe,{variant:"outline",fullWidth:!0,onClick:e,children:"Cancel"}),s.jsx(oe,{fullWidth:!0,onClick:p,disabled:!n.trim()||!l.trim(),children:"Post to Hotties"})]})]})},_v=({label:r,options:e,value:n,onChange:o})=>s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium",children:r}),s.jsx("select",{className:"input-psych w-full",value:n,onChange:l=>o(l.target.value),children:e.map(l=>s.jsx("option",{value:l.value,children:l.label},l.value))})]}),Pv=({onSubmit:r,onCancel:e})=>{const[n,o]=A.useState(""),[l,c]=A.useState(""),d=()=>{n.trim()&&l.trim()&&r(n,l)};return s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Share a tip that's helped you manage hot flashes or menopause symptoms. Your wisdom could help other Hotties!"}),s.jsx(ls,{label:"Tip Title",placeholder:"Give your tip a catchy name",value:n,onChange:m=>o(m.target.value)}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium",children:"Your Hot Tip"}),s.jsx("textarea",{className:"input-psych min-h-[150px] resize-y",placeholder:"Share the details of your tip. What works for you? Any specific techniques or products?",value:l,onChange:m=>c(m.target.value)})]}),s.jsxs("div",{className:"flex gap-3 pt-2",children:[s.jsx(oe,{variant:"outline",fullWidth:!0,onClick:e,children:"Cancel"}),s.jsx(oe,{fullWidth:!0,onClick:d,disabled:!n.trim()||!l.trim(),children:"Share with Hotties"})]})]})},Rv={hrt:{description:"The most effective treatment for menopause symptoms. HRT replaces estrogen (and progesterone if you still have a uterus) that your ovaries stop producing. It can dramatically improve quality of life for many women.",overview:"HRT is available in many forms and types. The 'right' HRT depends on your symptoms, medical history, and whether you still have a uterus. Modern HRT uses lower doses than in the past and is generally considered safe for most healthy women under 60 or within 10 years of menopause.",types:[{name:"Estrogen-Only Therapy (ET)",description:"For women who've had a hysterectomy - no uterus means no need for progesterone protection.",medications:[{brand:"Premarin ( conjugated estrogen)",forms:"Oral pills",dosage:"0.3mg to 1.25mg daily"},{brand:"Estrace (estradiol)",forms:"Oral pills, cream, vaginal tablet",dosage:"0.5mg to 2mg daily (oral)"},{brand:"Climara (estradiol patch)",forms:"Weekly transdermal patch",dosage:"0.025mg to 0.1mg weekly"},{brand:"Vivelle-Dot (estradiol patch)",forms:"Twice-weekly patch",dosage:"0.025mg to 0.1mg"},{brand:"Menostar (estradiol patch)",forms:"Weekly ultra-low dose patch",dosage:"0.014mg weekly (bone protection only)"},{brand:"Divigel (estradiol gel)",forms:"Daily topical gel",dosage:"0.25mg to 1mg daily"},{brand:"EstroGel (estradiol gel)",forms:"Daily topical gel",dosage:"0.75mg daily"},{brand:"Evamist (estradiol spray)",forms:"Daily spray",dosage:"1 to 3 sprays daily"}]},{name:"Combined Estrogen-Progestogen Therapy (EPT)",description:"For women with an intact uterus. Progesterone (or progestogen) is REQUIRED to protect the uterine lining from estrogen's effects, which can cause endometrial hyperplasia and cancer if unopposed.",medications:[{brand:"Prempro (conjugated estrogen + medroxyprogesterone)",forms:"Oral combined pill",dosage:"Multiple dose options"},{brand:"Premphase (conjugated estrogen + MPA)",forms:"Sequential oral pills",dosage:" cyclic regimen"},{brand:"Activella (estradiol + norethindrone)",forms:"Oral combined pill, patch",dosage:"Multiple options"},{brand:"Angeliq (estradiol + drospirenone)",forms:"Oral combined pill",dosage:"Contains anti-mineralocorticoid"},{brand:"Bijuva (estradiol + progesterone)",forms:"Oral combined capsule",dosage:"1mg estradiol / 100mg progesterone"},{brand:"CombiPatch (estradiol + norethindrone)",forms:"Twice-weekly patch",dosage:"Multiple options"},{brand:"Climara Pro (estradiol + levonorgestrel)",forms:"Weekly patch",dosage:"Combined weekly dose"}]},{name:"Local/Vaginal Estrogen Therapy",description:"Low-dose vaginal estrogen treats local symptoms (dryness, pain, urinary issues) with minimal systemic absorption. Generally considered safe even for many women who can't use systemic HRT.",medications:[{brand:"Estrace Cream (estradiol cream)",forms:"Vaginal cream",dosage:"2-4g daily x 2 weeks, then 1g 1-3x weekly"},{brand:"Premarin Cream (conjugated estrogen)",forms:"Vaginal cream",dosage:"0.5g to 2g"},{brand:"Vagifem / Yuvafem (estradiol tablet)",forms:"Vaginal insert/tablet",dosage:"10mcg"},{brand:"Imvexxy (estradiol insert)",forms:"Vaginal softgel insert",dosage:"4mcg or 10mcg"},{brand:"Estring (estradiol ring)",forms:"Vaginal ring",dosage:"7.5mcg daily for 90 days"},{brand:"Femring (estradiol acetate)",forms:"Vaginal ring (systemic)",dosage:"0.05mg or 0.1mg daily"}]},{name:"Bioidentical HRT Options",description:"Chemically identical to the hormones your body produces. FDA-approved bioidenticals include estradiol and micronized progesterone (Prometrium). Custom-compounded bioidenticals lack FDA oversight.",medications:[{brand:"Prometrium (micronized progesterone)",forms:"Oral capsule",dosage:"100mg to 200mg (cyclical or continuous)"},{brand:"Estradiol (various brands)",forms:"Pills, patches, gels, sprays, creams",dosage:"Varies by formulation"},{brand:"Bi-Est / Tri-Est (compounded)",forms:"Usually cream or capsules",dosage:"Variable - compounded"}]}],benefits:["Reduces hot flashes by 75-90%","Significantly improves sleep quality","Relieves vaginal dryness and painful intercourse","Treats urinary urgency and recurrent UTIs","Protects bone density and reduces fracture risk","May improve mood and cognitive function","Reduces joint pain and muscle aches","May improve skin elasticity and hydration","Can reduce anxiety and irritability"],risks:[{risk:"Blood clots (DVT/PE)",detail:"Higher risk with oral estrogen, especially first year. Lower risk with patches/gels."},{risk:"Stroke",detail:"Small increased risk, primarily in older women or those with risk factors."},{risk:"Breast cancer",detail:"Slight increase (about 1 extra case per 1,000 women per year) with combined EPT after 5+ years. Estrogen-only actually shows LOWER breast cancer risk in some studies."},{risk:"Gallbladder disease",detail:"Higher with oral estrogen, especially oral pills."},{risk:"Endometrial cancer",detail:"Risk ONLY exists with estrogen-only therapy in women with a uterus. Progesterone prevents this."}],whoShouldConsider:["Women under 60 or within 10 years of menopause","Those with moderate to severe hot flashes/night sweats","Women experiencing vaginal symptoms (dryness, pain, urinary issues)","Those with early menopause (before age 45) - strongly recommended","Women with premature ovarian insufficiency - recommended until natural menopause age","Those with bone loss/osteopenia who can't tolerate other treatments"],whoShouldAvoid:["History of breast cancer (estrogen-receptor positive particularly)","History of blood clots or pulmonary embolism","Active or recent stroke/heart attack","Active liver disease","Unexplained vaginal bleeding (get evaluated first!)","Known or suspected pregnancy","Active gallbladder disease"],deliveryMethods:{oral:{pros:"Convenient, well-studied, many options",cons:"Higher clot risk, processed through liver"},patch:{pros:"Lower clot risk, steady dosing, good for compliance",cons:"Skin irritation, visible, must stick"},gel:{pros:"Easy application, no patch irritation, flexible dosing",cons:"Must dry, can transfer to others"},spray:{pros:"Easy, quick absorption",cons:"Transfer risk, application site reactions"},vaginal:{pros:"Minimal systemic absorption, targeted relief",cons:"Doesn't treat systemic symptoms"}},questionsToAskDoctor:["Am I a good candidate for HRT given my medical history?","What delivery method would work best for my symptoms?","Should I use estrogen-only or combined therapy?","What are the specific risks for MY situation?","How long should I stay on HRT?","What symptoms should I watch for that need immediate attention?","Will HRT interact with my other medications or conditions?","How will we monitor for side effects or complications?"]}},Ut={magnesium:{name:"Magnesium",category:"supplement",description:"Essential mineral that helps with sleep, muscle relaxation, and mood.",forSymptoms:["Sleep problems","Anxiety","Muscle cramps","Headaches"],howItWorks:"Helps regulate neurotransmitters that promote sleep and calmness. Many women are deficient during menopause.",dosage:"200-400mg before bed",forms:["Magnesium glycinate (gentle)","Magnesium citrate (good absorption)","Magnesium oxide (less absorbed)"],tips:"Start with lower dose, take with food. Glycinate is gentler on stomach."},blackCohosh:{name:"Black Cohosh",category:"supplement",description:"Traditional herb used for hot flashes and menopause symptoms.",forSymptoms:["Hot flashes","Night sweats","Mood swings","Sleep disturbance"],howItWorks:"May affect serotonin pathways or have mild estrogen-like effects, though research is mixed.",dosage:"20-40mg twice daily",tips:"May take 4-8 weeks to see effects. Don't use if you have liver problems."},omega3:{name:"Omega-3 Fatty Acids",category:"supplement",description:"Healthy fats that support brain health, heart health, and may help with mood.",forSymptoms:["Brain fog","Mood changes","Heart health","Joint pain"],howItWorks:"EPA and DHA support brain cell function and reduce inflammation.",dosage:"1000-2000mg combined EPA/DHA daily",tips:"Look for high EPA content. Take with fatty meal for better absorption."},vitaminD:{name:"Vitamin D",category:"supplement",description:"Essential for bone health, immune function, and mood regulation.",forSymptoms:["Bone health","Mood","Immune support","Energy"],howItWorks:"Your skin makes Vitamin D from sunlight, but production decreases with age and sunscreen use.",dosage:"1000-2000 IU daily (get levels tested)",tips:"Take with Vitamin K2 for better bone absorption. Test your levels!"},ashwagandha:{name:"Ashwagandha",category:"supplement",description:"Adaptogenic herb that helps the body manage stress.",forSymptoms:["Stress","Anxiety","Sleep","Energy","Cortisol management"],howItWorks:"Reduces cortisol (stress hormone) and supports adrenal function.",dosage:"300-600mg daily",tips:"Take in evening. Start low. KSM-66 and Sensoril are well-researched extracts."},dim:{name:"DIM (Diindolylmethane)",category:"supplement",description:"Compound from cruciferous vegetables that supports estrogen metabolism.",forSymptoms:["Hot flashes","Hormone balance","Weight management","PMS symptoms"],howItWorks:"Helps body metabolize estrogen into beneficial forms rather than aggressive forms.",dosage:"100-200mg daily",tips:"Start low. May cause urine discoloration (harmless). Take with food."},progesterone:{name:"Natural Progesterone",category:"supplement",description:"Bioidentical progesterone that may help with sleep, anxiety, and cycle issues.",forSymptoms:["Insomnia","Anxiety","Heavy periods","Hot flashes","Mood swings"],howItWorks:"Progesterone converts to allopregnanolone, which calms GABA receptors in the brain.",forms:["Prometrium (prescription)","Cream (OTC)"],tips:"Only needed if you still have a uterus when using estrogen. Natural/bioidentical is different from synthetic."},vitex:{name:"Vitex (Chasteberry)",category:"supplement",description:"Herb that supports progesterone production and menstrual cycle regularity.",forSymptoms:["Irregular periods","PMS","Breast tenderness","Perimenopause cycle changes"],howItWorks:"Supports pituitary function and natural progesterone production.",dosage:"200-400mg daily (extract)",tips:"Takes 3-6 months for full effect. Best for perimenopause, not postmenopause."},soy:{name:"Soy Isoflavones",category:"supplement",description:"Plant-based compounds with weak estrogen-like effects. Found naturally in soy foods.",forSymptoms:["Hot flashes","Night sweats","Bone health","Heart health"],howItWorks:"Phytoestrogens bind to estrogen receptors, providing mild estrogen-like effects when estrogen is low.",dosage:"50-100mg isoflavones daily (from food or supplements)",forms:["Soy foods (tofu, tempeh, edamame)","Soy isoflavone supplements"],tips:"Whole soy foods are generally safer than supplements. May take several weeks to see effects."}},Tt={hotFlashes:{whatIsIt:"A sudden feeling of intense heat, usually in the face, neck, and chest. Your skin may redden like you're blushing. They can last 1-5 minutes.",whyItHappens:"As estrogen levels fluctuate and drop during perimenopause, it affects the hypothalamus (your body's thermostat). The hypothalamus mistakenly thinks you're too hot and triggers cooling mechanisms.",triggers:["Caffeine","Alcohol","Spicy foods","Hot beverages","Stress/anxiety","Hot environments","Tight clothing","Sugar"],management:{lifestyle:["Layer clothing (easy to remove)","Keep room cool","Use fans","Carry cold water","Avoid triggers when possible","Exercise regularly"],dietary:["Limit caffeine and alcohol","Avoid spicy foods","Eat soy foods (may help)","Stay hydrated"],medical:["Hormone Therapy (HRT)","Fezolinetant (Veozah)","SSRIs (paroxetine)","Gabapentin","Clonidine"]}},brainFog:{whatIsIt:"Feeling like your thinking is fuzzy, slow, or scattered. Common experiences: forgetting words, losing train of thought, difficulty concentrating, misplacing things.",whyItHappens:"Estrogen supports brain function, memory, and concentration. When estrogen fluctuates during perimenopause, cognitive function can suffer temporarily.",whenToWorry:"Usually normal for perimenopause. See doctor if: sudden severe memory problems, getting lost in familiar places, difficulty with familiar tasks.",management:["Get adequate sleep","Exercise (increases blood flow to brain)","Puzzles and brain games","Write things down","Reduce stress","Manage blood sugar","Omega-3s","Stay socially active"]},sleepIssues:{whyItHappens:"Multiple factors: dropping progesterone (natural sleep aid), night sweats interrupting sleep, increased anxiety, changing sleep-wake patterns.",commonProblems:["Difficulty falling asleep","Waking up frequently","Waking too early","Light, non-restorative sleep","Nightmares or vivid dreams"],sleepHygiene:["Consistent bedtime","Cool bedroom","No screens before bed","Limit caffeine after 2pm","Limit alcohol","Regular exercise (not right before bed)","Wind-down routine"],whenToSeekHelp:"If sleep problems persist despite lifestyle changes, affect daily functioning, or you're experiencing severe night sweats."},moodChanges:{whyItHappens:"Estrogen affects serotonin, dopamine, and norepinephrine - the 'feel-good' brain chemicals. Fluctuating estrogen = fluctuating mood.",commonExperiences:["Irritability","Anxiety","Depression","Mood swings","Feeling overwhelmed","Crying easily","Racing thoughts"],whenToSeekHelp:"If feelings are severe, last most of the day, affect daily life, or include thoughts of self-harm.",support:["Talk to your doctor","Therapy (CBT is effective)","Support groups","Stress reduction","Exercise","Social connection","Medication if needed"]}},Ym={perimenopause:{term:"Perimenopause",definition:"The transition phase before menopause, when hormone levels start to fluctuate and menstrual cycles become irregular. Can start in your late 30s to mid-40s and typically lasts 4-10 years.",symptoms:"Hot flashes, irregular periods, mood changes, sleep problems, brain fog, weight changes",related:"Menopause, Postmenopause"},menopause:{term:"Menopause",definition:"Defined as 12 consecutive months without a period. Average age is 51. At this point, ovaries have stopped producing significant estrogen.",symptoms:"Hot flashes, vaginal dryness, sleep issues, mood changes (may improve after transition)",related:"Perimenopause, Postmenopause, Menopausal"},postmenopause:{term:"Postmenopause",definition:"Years after menopause (12+ months without period). Symptoms may lessen but health risks from low estrogen increase.",considerations:"Bone health, heart health, vaginal health, continued symptom management",related:"Perimenopause, Menopause"},estrogen:{term:"Estrogen",definition:"Primary female sex hormone. During reproductive years, produced by ovaries. Regulates: menstrual cycle, bone health, heart health, brain function, vaginal health, skin elasticity.",role:"In menopause: affects temperature regulation, mood, sleep, cognitive function, and more",types:"Three types: Estrone (E1), Estradiol (E2 - dominant in reproductive years), Estriol (E3 - high during pregnancy)"},progesterone:{term:"Progesterone",definition:"Hormone that prepares uterus for pregnancy and has calming effects on the brain. Often called the 'feel-good' hormone.",role:"In menopause: levels drop before estrogen, contributing to anxiety, insomnia, and irregular periods",vsProgestin:"Progesterone is bioidentical (same as your body makes). Progestin is synthetic and has different effects and risks."},hysterectomy:{term:"Hysterectomy",definition:"Surgical removal of the uterus. If ovaries are removed (oophorectomy), surgical menopause occurs.",menopauseImpact:"If ovaries remain, natural menopause still occurs at normal time. If ovaries removed, immediate menopause."},prematureMenopause:{term:"Premature Menopause",definition:"Menopause occurring before age 40. Can be natural or due to surgery, chemotherapy, radiation, or autoimmune conditions.",considerations:"Higher health risks (bone, heart), may need hormone therapy until natural menopause age"},surgicalMenopause:{term:"Surgical Menopause",definition:"Menopause induced by removal of both ovaries (bilateral oophorectomy). Symptoms can be sudden and severe.",considerations:"No gradual transition, higher symptom severity, often need more aggressive symptom management"},estradiol:{term:"Estradiol",definition:"The primary form of estrogen during reproductive years. Measured in blood tests. Levels fluctuate wildly during perimenopause.",inMenopause:"Estradiol levels drop significantly (may be <30 pg/mL postmenopause)"},phytoestrogens:{term:"Phytoestrogens",definition:"Plant compounds that have weak estrogen-like effects in the body. Found in soy, flaxseed, chickpeas.",effectiveness:"May help with mild hot flashes for some women. Not as strong as hormone therapy."},bioidentical:{term:"Bioidentical Hormones",definition:"Hormones that are chemically identical to those your body produces. Can be FDA-approved (estradiol, micronized progesterone) or compounded.",types:["FDA-approved bioidenticals (preferred)","Compounded bioidenticals (custom)"],note:"Not all 'natural' hormones are safer. FDA-approved have rigorous testing."},hrtDefinition:{term:"HRT (Hormone Replacement Therapy)",definition:"Treatment that replaces female hormones (estrogen and/or progesterone) that the ovaries stop producing during menopause. The most effective treatment for menopause symptoms.",alsoKnownAs:"Also called: Hormone Therapy (HT), Menopausal Hormone Therapy (MHT), Estrogen Therapy"},estrogenTherapy:{term:"Estrogen Therapy (ET)",definition:"HRT using estrogen only. Only appropriate for women who've had a hysterectomy, because estrogen without progesterone increases endometrial cancer risk.",brands:"Premarin, Estrace, Climara, Vivelle-Dot, Menostar, Divigel, EstroGel"},combinedTherapy:{term:"Combined Estrogen-Progestogen Therapy (EPT)",definition:"HRT using both estrogen and progestogen (progesterone or synthetic progestin). REQUIRED for women with an intact uterus to protect against endometrial cancer.",brands:"Prempro, Premphase, Activella, CombiPatch, Climara Pro, Bijuva"},progestogen:{term:"Progestogen",definition:"General term for progesterone (bioidentical) and synthetic progestins. Progesterone is preferred for better safety profile; progestins are synthetic versions with different effects.",types:"Progesterone (bioidentical/Prometrium), MPA/medroxyprogesterone acetate (Provera), Norethindrone, Drospirenone, Levonorgestrel"},transdermal:{term:"Transdermal Estrogen",definition:"Estrogen delivered through the skin via patches, gels, sprays, or creams. Bypasses the liver, resulting in lower blood clot risk compared to oral estrogen.",forms:"Patches (weekly/twice-weekly), Gels (daily application), Sprays (daily), Creams (daily)"},vaginalEstrogen:{term:"Vaginal Estrogen",definition:"Low-dose estrogen applied directly to vaginal tissues. Treats local symptoms (dryness, pain, urinary issues) with minimal systemic absorption. Generally safe for many women who can't use systemic HRT.",forms:"Creams (Estrace, Premarin), Tablets/Inserts (Vagifem, Imvexxy), Rings (Estring, Femring)"},windowOfOpportunity:{term:"Window of Opportunity (Timing Hypothesis)",definition:"Theory that HRT is most beneficial when started within 10 years of menopause or before age 60. Starting later may increase cardiovascular risks rather than reduce them.",implication:"If you're considering HRT, earlier initiation may offer more benefits with lower risks for most healthy women."},testosterone:{term:"Testosterone (in Women)",definition:"Women produce testosterone too! It declines with age and menopause. Some women benefit from testosterone therapy for energy, libido, and sense of well-being.",note:"Not FDA-approved for women in the US, but can be prescribed off-label. Requires careful dosing and monitoring."},endometrialProtection:{term:"Endometrial Protection",definition:"The reason women with a uterus MUST use progesterone or progestogen along with estrogen. Without it, estrogen stimulates uterine lining growth, increasing cancer risk.",methods:"Continuous combined (same dose daily), Sequential/cyclic (progesterone 12-14 days/month)"},compounding:{term:"Compounded Bioidentical Hormones",definition:"Custom-made hormones prepared by compounding pharmacies. NOT FDA-approved - no guarantee of purity, potency, or safety. FDA-approved bioidenticals (estradiol, Prometrium) are preferred.",risks:"Lack standardized dosing, quality control, and safety testing. Discuss risks vs benefits with your doctor."},estrogenDominance:{term:"Estrogen Dominance",definition:"Theory that symptoms occur when estrogen is high relative to progesterone. During perimenopause, progesterone drops BEFORE estrogen, creating relative imbalance.",note:"Controversial concept. Some practitioners prescribe progesterone; evidence is mixed."}},Vm={basics:{questions:{"what is menopause":{question:"What is menopause?",answer:`Menopause is defined as 12 consecutive months without a period - meaning your ovaries have stopped releasing eggs and producing most of their estrogen. It's a natural biological process, not a medical problem.

**Key facts:**
• Average age is 51 (but can occur anywhere from 45-55)
• Diagnosed after 12 months of no period
• Before this, you're in perimenopause (the transition)
• After 12 months, you're in postmenopause

**What's happening:**
Your ovaries are winding down. They still produce small amounts of estrogen, but not the levels you had during your reproductive years. This hormonal shift causes most menopause symptoms.`},"what is perimenopause":{question:"What is perimenopause?",answer:`Perimenopause is the transition phase leading up to menopause. It starts when your hormones begin changing (usually in your mid-to-late 40s) and ends 12 months after your final period.

**What happens:**
• Estrogen and progesterone levels fluctuate wildly (up and down)
• Periods become irregular (heavier, lighter, longer, shorter)
• Hot flashes, mood changes, and other symptoms may start
• You can still get pregnant during perimenopause

**How long does it last?**
Typically 4-10 years, with an average of 7 years. Some women experience symptoms for much longer.`},"when does menopause start":{question:"When does menopause typically start?",answer:`The average age of menopause in the US is 51.

**Timeline ranges:**
• Early 40s: Some women start perimenopause
• 45-55: Most women go through menopause
• After 55: Considered late menopause
• Before 40: Premature menopause (affects about 1% of women)

**Factors affecting timing:**
• Genetics (ask your mother when she went through it)
• Smoking (can start 1-2 years earlier)
• Chemotherapy or radiation
• Surgical removal of ovaries
• Certain autoimmune conditions`},"what is postmenopause":{question:"What is postmenopause?",answer:`Postmenopause is the stage after you've gone 12 months without a period (officially in menopause).

**What to expect:**
• Most menopause symptoms gradually ease
• Estrogen stabilizes at a low level
• Some symptoms may persist (vaginal dryness, sleep issues)
• Increased health risks: osteoporosis, heart disease

**What you can do:**
• Continue healthy habits
• Discuss long-term treatment options with your doctor
• Regular check-ups become even more important
• Focus on prevention (bone density, heart health)`}}},symptoms:{questions:{"common menopause symptoms":{question:"What are the most common menopause symptoms?",answer:`**Physical symptoms:**
• Hot flashes and night sweats (70-80% of women)
• Sleep disturbances
• Weight gain, especially around midsection
• Vaginal dryness and discomfort
• Decreased libido
• Joint pain and muscle aches
• Heart palpitations
• Dry skin and hair changes

**Emotional/cognitive symptoms:**
• Mood swings and irritability
• Anxiety and depression
• Brain fog and memory issues
• Fatigue
• Difficulty concentrating

**Other changes:**
• Changes in periods (before menopause)
• Urinary frequency or urgency
• Hair thinning
• Brittle nails

Every woman's experience is different - you might have many symptoms or just a few.`},"hot flashes causes treatment":{question:"What causes hot flashes and how can I treat them?",answer:`**What causes hot flashes:**
Your thermostat (hypothalamus) becomes supersensitive due to estrogen changes. When it senses slight temperature changes, it overreacts - dilating blood vessels and triggering sweat.

**Triggers to avoid:**
• Spicy foods, caffeine, alcohol
• Hot drinks, hot environments
• Stress and anxiety
• Tight clothing, synthetic fabrics
• Hot showers

**Treatments:**
1. **Hormone Therapy (most effective)**
   • Estrogen therapy reduces hot flashes by 75-90%

2. **Non-hormonal medications**
   • Fezolinetant (Veozah) - FDA-approved 2023
   • Paroxetine (Brisdelle) - FDA-approved
   • Venlafaxine (Effexor) - off-label use
   • Gabapentin - helps with sleep too

3. **Lifestyle approaches**
   • Dress in layers
   • Keep bedroom cool
   • Exercise regularly
   • Practice deep breathing
   • Carry a portable fan`},"night sweats":{question:"Why do I have night sweats and how can I stop them?",answer:`Night sweats are hot flashes that occur during sleep, often severe enough to drench pajamas and sheets.

**Why they happen:**
Same mechanism as hot flashes - your body's thermostat is malfunctioning due to hormone changes. They often occur during the deepest stages of sleep.

**Impact:**
• Disrupted sleep architecture
• Daytime fatigue
• Mood changes
• Need to change clothes/bedding at night

**Solutions:**
1. **Keep your bedroom cool** (65°F/18°C is ideal)
2. **Use cooling products:** mattress pad, pillows, sheets
3. **Wear moisture-wicking pajamas**
4. **Keep water by the bed**
5. **Avoid triggers before bed:** alcohol, spicy food, caffeine
6. **Treatment options:** HRT, Veozah, other medications
7. **Layer bedding** so you can remove covers quickly`},"mood swings anxiety":{question:"Why am I having mood swings and anxiety during menopause?",answer:`**Why mood changes happen:**
Estrogen affects serotonin and other mood-regulating brain chemicals. When estrogen fluctuates during perimenopause, your mood does too.

**Common experiences:**
• Irritability and impatience
• Feeling overwhelmed
• Anxiety and worry
• Depression or sadness
• Emotional sensitivity
• Crying spells

**What helps:**
1. **Understand it's biological** - not a character flaw
2. **Prioritize sleep** - lack of sleep worsens mood
3. **Limit alcohol** - it's a mood destabilizer
4. **Exercise regularly** - natural mood booster
5. **Stress reduction:** meditation, yoga, deep breathing

**When to seek help:**
• Symptoms severe enough to disrupt life
• Thoughts of self-harm
• Panic attacks
• Persistent depression

**Treatment options:**
• SSRIs/SNRIs (often help with hot flashes too)
• Hormone therapy
• Therapy (CBT is very effective)
• Support groups`},"brain fog memory":{question:"Is brain fog and memory loss normal during menopause?",answer:`**Yes, brain fog is completely normal!**

**What it feels like:**
• Forgetting words mid-sentence
• Misplacing things more often
• Difficulty concentrating
• Feeling "fuzzy" or not quite with it
• Trouble multitasking

**Why it happens:**
Estrogen supports brain function, particularly memory and concentration. When estrogen fluctuates during perimenopause, these cognitive functions can suffer.

**The good news:**
Research shows cognitive function often IMPROVES once you reach postmenopause. Your brain adapts to the new hormone environment.

**Tips to manage:**
1. Write things down (lists, calendars, phone reminders)
2. Focus on one task at a time
3. Get enough sleep
4. Exercise your brain (puzzles, learning new things)
5. Omega-3 fatty acids may help

**When to worry:**
Only if symptoms are severe and sudden, or if they interfere with daily functioning significantly.`},"weight gain menopause":{question:"Why is it so hard to lose weight during menopause?",answer:`**Why weight changes during menopause:**

1. **Metabolism slows** - You burn fewer calories at rest
2. **Hormone changes** - Shift in where fat is stored (more abdominal)
3. **Muscle loss** - Sarcopenia reduces calorie burning
4. **Insulin resistance** - Body more prone to storing fat
5. **Sleep disruption** - Poor sleep increases hunger hormones

**Where the weight goes:**
During menopause, fat tends to redistribute from hips and thighs to the abdomen. This "middle-aged spread" is driven by hormone changes and is different from subcutaneous fat.

**What helps:**
1. **Strength training** - Builds muscle, boosts metabolism
2. **High-protein diet** - Helps preserve muscle, keeps you full
3. **Reduce processed foods** - Lower inflammation
4. **Prioritize sleep** - Better hunger hormone regulation
5. **Be patient** - Weight loss is slower but still possible
6. **Consider anti-obesity medications** if appropriate

**Realistic expectations:**
You may need to eat 200-400 fewer calories per day and exercise more to maintain the same weight.`}}},sexualHealth:{questions:{"sex drive menopause":{question:"Why has my sex drive changed during menopause?",answer:`**Changes in libido are extremely common:**
• Some women want MORE sex (freed from periods/pregnancy worries)
• Many women experience decreased desire
• Some feel nothing at all

**Why desire changes:**
• Estrogen decline reduces genital sensitivity
• Testosterone also declines (yes, women need it!)
• Vaginal dryness causes pain (associated with sex = less desire)
• Fatigue and stress
• Relationship dynamics
• Body image changes

**It's not all bad news:**
• Emotional intimacy may improve
• Freedom from birth control concerns
• Many women find post-menopausal sex fulfilling
• Treatments can help restore function and pleasure

**What can help:**
1. **Talk to your partner** about changes
2. **Vaginal estrogen** - improves tissue health
3. **Lubricants** - silicone-based for longer lasting
4. **Longer foreplay** - arousal takes more time
5. **Consider testosterone therapy** - can help with desire
6. **Osphena or Intrarosa** - prescription options
7. **Therapy** - individual or couples`},"vaginal dryness pain":{question:"How can I treat vaginal dryness and painful intercourse?",answer:`**Vaginal atrophy (genitourinary syndrome of menopause):**
• Thinning and shrinking of vaginal tissues
• Decreased lubrication
• Pain with intercourse
• Affects up to 50% of postmenopausal women

**Over-the-counter options:**
1. **Lubricants** (use every time you have sex)
   • Water-based (like K-Y)
   • Silicone-based (longer lasting, like Überlube)
   • Oil-based (coconut oil, but NOT with condoms)

2. **Vaginal moisturizers** (use regularly, 2-3x/week)
   • Replens
   • Hyalo Gyn
   • These improve baseline comfort, not just during sex

**Prescription options:**
1. **Low-dose vaginal estrogen** (very safe, minimal absorption)
   • Vagifem/Yuvafem tablets
   • Imvexxy inserts
   • Estrace/Premarin cream
   • Estring ring (lasts 90 days)

2. **Ospemifene (Osphena)** - oral pill, daily
3. **Prasterone (Intrarosa)** - vaginal insert, 3x/week
4. **Laser therapy** - newer option, limited evidence

**Talk to your doctor** - these are very common issues and treatments really help!`}}},treatments:{questions:{"hormone therapy safe":{question:"Is hormone therapy safe?",answer:`**Short answer:** For most healthy women under 60 or within 10 years of menopause, hormone therapy benefits outweigh risks.

**The "Timing Hypothesis":**
• Starting HRT before 60 or within 10 years of menopause = generally safe
• Starting after 60 or 10+ years past menopause = higher risks
• Never starting is riskier for some women

**Who should consider HRT:**
• Moderate to severe hot flashes/night sweats
• Early menopause (before 45)
• Premature ovarian insufficiency
• Significant quality-of-life impact from symptoms
• Bone loss concerns

**Who should avoid HRT:**
• History of breast cancer
• History of blood clots or stroke
• Active liver disease
• Unexplained vaginal bleeding
• Coronary heart disease
• Known or suspected pregnancy

**Risks to know about:**
• Blood clots (higher with oral estrogen, lower with patches)
• Breast cancer risk (slightly increased with combined therapy after 5 years)
• Stroke risk (small increase)

**Modern approach:**
• Use lowest effective dose
• Transdermal (patch/gel) preferred for those with clot risks
• Annual reassessment
• Most women don't stay on it forever`},"how long hrt":{question:"How long should I stay on hormone therapy?",answer:`**There's no one-size-fits-all answer.**

**Factors to consider:**
• Severity of your symptoms
• Your quality of life off therapy
• Your age and how long you've been on HRT
• Your personal risk factors
• Your comfort level with continued use

**Common approaches:**
1. **Short-term use** (1-5 years)
   • Treat symptoms, then gradually taper off
   • Many women can eventually stop

2. **Long-term use** (5-10+ years)
   • For severe symptoms that return when stopping
   • For bone protection in high-risk women
   • Requires ongoing doctor discussions

3. **As needed/tapered approach**
   • Slowly reduce dose over time
   • Restart if symptoms return severely

**When stopping:**
• Symptoms often return, but may be milder
• About half of women can stop successfully within a year
• Tapering is better than stopping abruptly
• Lifestyle strategies become more important

**Important:** Don't stop without discussing with your doctor. Your need for HRT should be reassessed annually.`},"natural supplements menopause":{question:"What natural supplements help with menopause symptoms?",answer:`**Evidence-based supplements:**

1. **Black Cohosh**
   • May reduce hot flashes and night sweats
   • How it works: Unknown, but doesn't act like estrogen
   • Dose: 20-40mg twice daily
   • Note: Don't use if you have liver problems

2. **Phytoestrogens (Soy, Red Clover)**
   • Weak plant estrogens
   • May help with hot flashes for some women
   • Soy is found in tofu, tempeh, edamame

3. **Evening Primrose Oil**
   • May help with breast tenderness
   • Mixed evidence for hot flashes

4. **Valerian Root**
   • May help with sleep
   • 300-600mg at bedtime

5. **Ashwagandha**
   • Helps with stress and anxiety
   • Supports cortisol regulation
   • Dose: 300-600mg daily

6. **Magnesium**
   • Helps with sleep and relaxation
   • May reduce muscle tension
   • Dose: 200-400mg before bed

7. **Vitamin D**
   • Mood support and bone health
   • Dose: 1000-2000 IU daily

8. **Omega-3 Fish Oil**
   • Brain health and mood support
   • Dose: 1000-2000mg daily

**General recommendations:**
• Quality matters - choose reputable brands
• Tell your doctor about all supplements
• Be patient - may take 4-8 weeks to see effects
• "Natural" doesn't always mean safe
• Don't use in place of proven treatments for severe symptoms

**Lifestyle first:**
• Exercise, healthy diet, stress reduction often work as well as supplements`},"testosterone trt menopause":{question:"What is testosterone replacement therapy (TRT) for women?",answer:`**Testosterone therapy for women:**
Yes, women need testosterone too! It peaks in our 20s and declines with age and menopause.

**Benefits of testosterone therapy:**
• Improved libido and sexual satisfaction
• More energy and motivation
• Better sense of well-being
• Improved mood
• Increased muscle mass and strength
• May help with brain fog

**Is it FDA-approved for women?**
• NO - testosterone is not FDA-approved for women in the US
• However, doctors can prescribe it off-label
• It's commonly used in Australia and Europe for women

**How is it given?**
• Testosterone cream/gel (compounded)
• Testosterone patches (off-label use)
• Pellets (less common)
• Doses are MUCH lower than for men

**Important considerations:**
• Requires careful dosing and monitoring
• Side effects: acne, hair growth, voice changes (with too-high doses)
• Blood tests needed to monitor levels
• Not for everyone - discuss risks/benefits with your doctor

**Questions to ask your doctor:**
• Am I a candidate for testosterone therapy?
• What are the risks for my situation?
• How will we monitor my levels?
• Is there a compounded option available?`},"anxiety menopause treatment":{question:"How can I manage anxiety during menopause?",answer:`**Why anxiety increases during menopause:**
• Estrogen affects serotonin and GABA (calming brain chemicals)
• Fluctuating hormones cause physical symptoms that trigger anxiety
• Night sweats disrupt sleep, worsening anxiety
• Life transitions add to stress

**Lifestyle approaches:**
1. **Regular exercise** - Releases endorphins, reduces cortisol
2. **Breathing exercises** - Try 4-7-8 breathing (inhale 4, hold 7, exhale 8)
3. **Limit caffeine and alcohol** - Both can worsen anxiety
4. **Prioritize sleep** - Address night sweats first
5. **Mindfulness meditation** - Even 5-10 minutes daily helps
6. **Yoga or tai chi** - Combines movement with mindfulness
7. **Connect with others** - Support groups reduce isolation

**Supplements that may help:**
• Ashwagandha - adaptogen that reduces cortisol
• Magnesium - promotes relaxation
• Omega-3s - brain health
• L-theanine - promotes calm (found in green tea)

**When to consider medication:**
• Anxiety significantly disrupts daily life
• You're having panic attacks
• Lifestyle changes aren't enough
• It's affecting relationships or work

**Medication options:**
• SSRIs (Escitalopram, Paroxetine) - often first choice
• SNRIs (Venlafaxine, Duloxetine) - helps mood too
• Buspirone - specifically for anxiety
• Low-dose benzodiazepines (short-term only)

**Talk to your doctor** - anxiety during menopause is very real and very treatable!`}}},lifestyle:{questions:{"exercise menopause":{question:"What type of exercise is best during menopause?",answer:`**A combination approach works best:**

**1. Strength/Resistance Training (most important!)**
• Prevents muscle loss (sarcopenia)
• Boosts metabolism
• Strengthens bones
• Aim: 2-3 times per week
• Examples: weights, resistance bands, bodyweight exercises

**2. Cardiovascular Exercise**
• Heart health protection
• Weight management
• Mood improvement
• Aim: 150 minutes moderate or 75 minutes vigorous weekly
• Examples: walking, swimming, cycling, dancing

**3. Flexibility & Balance**
• Reduces injury risk
• Helps with joint stiffness
• Examples: yoga, tai chi, stretching

**4. High-Intensity Interval Training (HIIT)**
• Efficient calorie burning
• Improves insulin sensitivity
• Be cautious if new to exercise - start slow

**Important tips:**
• Start where you are and build up
• Rest days are essential
• Listen to your body - recovery takes longer
• Stay consistent, not perfect
• Mix it up to prevent boredom`},"diet menopause":{question:"What should I eat during menopause?",answer:`**Key dietary principles:**

**1. Prioritize Protein**
• 1.0-1.2g per kg body weight daily
• Helps preserve muscle mass
• Sources: fish, poultry, eggs, tofu, legumes
• Spread throughout the day

**2. Mediterranean-Style Eating**
• Associated with reduced hot flashes
• Lower inflammation
• Heart-healthy fats
• Plenty of vegetables, fruits, whole grains
• Olive oil as main fat source

**3. Calcium & Vitamin D**
• Essential for bone health
• Calcium: 1200mg daily (food preferred)
• Vitamin D: 1000-2000 IU (check your levels!)

**4. Phytoestrogens (in moderation)**
• Soy products (tofu, tempeh)
• May have mild estrogen-like effects
• May help with hot flashes

**Foods to limit:**
• Processed foods and excess sugar
• Caffeine (can trigger hot flashes)
• Alcohol (worsens symptoms and hot flashes)
• Spicy foods (triggers hot flashes for some)

**Stay hydrated:**
• 8+ glasses of water daily
• Helps with bloating, skin, energy`},"sleep better menopause":{question:"How can I sleep better during menopause?",answer:`**Sleep hygiene strategies:**

1. **Keep your bedroom cool**
   • 65-68°F (18-20°C) is ideal
   • Use fans or air conditioning
   • Cooling mattress pad/pillows

2. **Establish a routine**
   • Same bedtime and wake time daily
   • Wind-down routine before bed
   • Avoid screens 1-2 hours before sleep

3. **Avoid sleep disruptors**
   • Caffeine after 2pm
   • Alcohol before bed (disrupts sleep architecture)
   • Large meals close to bedtime
   • Exercise right before bed

4. **Create the right environment**
   • Dark, quiet room
   • Comfortable mattress and pillows
   • Reserve bed for sleep and intimacy only

5. **Manage night sweats**
   • Keep water by bed
   • Wear moisture-wicking pajamas
   • Have backup pillowcase ready

6. **If you wake up:**
   • Don't stare at the clock
   •Get up briefly if awake 20+ minutes
   • Return when sleepy

**When to seek help:**
• Persistent insomnia
• Suspected sleep apnea (snoring, gasping)
• Severe daytime impairment`}}},healthRisks:{questions:{"bone health osteoporosis":{question:"How does menopause affect bone health?",answer:`**The connection:**
Estrogen protects bones. When estrogen drops during menopause, bone loss accelerates significantly - up to 20% in the first 5-7 years after menopause.

**What this means:**
• Increased risk of osteoporosis
• Higher fracture risk (especially hips, spine, wrists)
• Bone loss is silent - you won't feel it happening

**Prevention strategies:**
1. **Calcium:** 1200mg daily (prefer food sources)
   • Dairy, leafy greens, fortified foods
   • Split doses for better absorption

2. **Vitamin D:** 1000-2000 IU daily
   • Necessary for calcium absorption
   • Get your levels tested

3. **Weight-bearing exercise:**
   • Walking, hiking, dancing
   • Resistance training
   • Helps maintain bone density

4. **Strength training:**
   • Most effective for bone health
   • 2-3 times per week

5. **Avoid:**
   • Smoking
   • Excessive alcohol
   • Crash diets
   • Sedentary lifestyle

**When to consider medication:**
• DEXA scan showing osteopenia or osteoporosis
• High fracture risk factors
• Early menopause or premature ovarian insufficiency`},"heart health menopause":{question:"Does menopause affect heart health?",answer:`**Yes - menopause significantly affects heart health.**

**What happens:**
• Estrogen helps keep blood vessels flexible
• After menopause, LDL ("bad") cholesterol often rises
• HDL ("good") cholesterol may decrease
• Blood pressure may increase
• Body fat redistributes to abdomen (more visceral fat)

**Heart disease risk after menopause:**
• Risk increases substantially after menopause
• Becomes the #1 cause of death in postmenopausal women
• Often "silent" until a major event

**What you can do:**
1. **Know your numbers:**
   • Blood pressure
   • Cholesterol levels
   • Blood sugar
   • Discuss with your doctor

2. **Heart-healthy lifestyle:**
   • Regular exercise (150 min/week)
   • Mediterranean-style diet
   • Maintain healthy weight
   • Don't smoke
   • Limit alcohol

3. **Consider HRT:**
   • May have cardioprotective benefits if started early
   • Transdermal estrogen may be safer than oral
   • Discuss with your doctor

4. **Watch for symptoms:**
   • Chest pain or pressure
   • Shortness of breath
   • Unusual fatigue
   • Don't ignore symptoms!`},"cancer risk menopause":{question:"Does hormone therapy increase cancer risk?",answer:`**Breast cancer:**
• Estrogen-only therapy: Little to no increased risk for most women
• Combined estrogen-progesterone: Small increased risk after 5+ years of use
• The risk is small and must be balanced against quality-of-life benefits
• Annual mammograms are essential if on combined HRT

**Endometrial cancer:**
• Estrogen without progesterone (for women with uterus): INCREASES risk significantly
• This is why women with a uterus MUST use progesterone
• Combined EPT does not significantly increase endometrial risk

**Ovarian cancer:**
• Possible small increased risk with long-term use
• Evidence is mixed
• Generally considered low risk

**Other cancers:**
• No significant link to colon cancer
• May reduce risk of endometrial cancer

**Key points:**
• Risk depends on TYPE of hormone therapy
• Duration matters
• Your personal and family history matters
• Annual monitoring is essential
• For most women with moderate-severe symptoms, benefits outweigh small risks

**Talk to your doctor** about your personal risk profile.`}}},medical:{questions:{"when see doctor":{question:"When should I see a doctor about menopause symptoms?",answer:`**See your doctor if you experience:**

**Severe symptoms:**
• Hot flashes/night sweats that severely disrupt life
• Sleep problems every night
• Mood changes affecting relationships or work
• Painful intercourse not helped by OTC treatments

**Concerning symptoms:**
• Bleeding after 12 months of no periods
• Heavy, prolonged, or very frequent periods (perimenopause)
• New symptoms after starting hormone therapy
• Any breast changes

**For routine care:**
• Annual well-woman exam
• Discussion of treatment options
• Bone density testing (DEXA) starting around 65, earlier if risk factors
• Heart health monitoring
• Cancer screenings (mammogram, colon cancer)

**Specialists to know:**
• **Gynecologist** - hormone management, vaginal health
• **Primary care** - overall health
• **Endocrinologist** - hormone specialist (if complex cases)
• **Menopause specialist (NCMP)** - specially trained in menopause care

**Advocate for yourself:**
• Write down questions before appointments
• Bring a friend or partner if it helps
• Don't be dismissed - your symptoms matter
• You deserve to feel better!`},"menopause tests":{question:"What tests might my doctor order for menopause?",answer:`**For diagnosis:**
• Usually based on symptoms and age
• FSH test: Can confirm menopause (but not always definitive during perimenopause)
• You don't need tests for natural menopause at 51 with symptoms

**To assess overall health during menopause:**
• **Blood tests:**
  • Thyroid function (mimics menopause symptoms)
  • Lipid panel (cholesterol)
  • Blood sugar/HbA1c
  • Complete blood count
  • Vitamin D levels

• **Bone density (DEXA scan):**
  • Recommended at 65 or earlier with risk factors
  • Repeat every 2 years if osteopenia/osteoporosis

• **Pap smear/cervical screening:**
  • Continue per standard guidelines

• **Mammogram:**
  • Annual starting at 40-50, depending on guidelines

• **Pelvic exam:**
  • Annual for vaginal/uterine health

**Other considerations:**
• Colonoscopy (starting at 45)
• Skin checks (annual dermatologist)
• Bone health assessment

**Note:** Many tests depend on your individual risk factors and medical history.`}}}},Gm=r=>{const e=r.toLowerCase(),n=[];if(e.includes("supplement")||e.includes("vitamin")||e.includes("herb")||e.includes("natural")||e.includes("magnesium")||e.includes("ashwagandha")||e.includes("black cohosh")||e.includes("omega")||e.includes("melatonin")||e.includes("valerian")||e.includes("vitex")||e.includes("dim")||e.includes("testosterone")||e.includes("trt")){const c={sleep:Ut.magnesium,anxiety:Ut.ashwagandha,stress:Ut.ashwagandha,"hot flash":[Ut.blackCohosh,Ut.soy],"night sweat":Ut.blackCohosh,"brain fog":Ut.omega3,mood:[Ut.omega3,Ut.vitaminD],energy:Ut.vitaminD,bone:Ut.vitaminD,irregular:Ut.vitex,period:Ut.vitex,progesterone:Ut.progesterone,estrogen:[Ut.soy,Ut.dim]};e.includes("supplement")&&!Object.keys(c).some(d=>e.includes(d))&&n.push({category:"supplements",title:"Supplements for Menopause",content:`Here are supplements that many women find helpful during menopause:

**For Sleep:**
• Magnesium (200-400mg before bed) - helps relax muscles and calm the mind
• Melatonin (0.5-3mg at bedtime) - supports natural sleep cycle
• Valerian Root (300-600mg) - traditional sleep herb

**For Stress & Anxiety:**
• Ashwagandha (300-600mg) - adaptogen that helps manage cortisol
• Magnesium - also helps with anxiety

**For Hot Flashes:**
• Black Cohosh (20-40mg twice daily) - traditional herb
• Soy isoflavones - may have mild estrogen-like effects

**For Brain & Mood:**
• Omega-3 Fish Oil (1000-2000mg) - supports brain health
• Vitamin D (1000-2000 IU) - mood and overall health

**For Hormone Balance:**
• DIM (100-200mg) - supports estrogen metabolism
• Vitex (200-400mg) - supports progesterone (perimenopause)

Important: Always tell your doctor about supplements you're taking!`,disclaimer:"Supplements can interact with medications. Consult your healthcare provider before starting any new supplement."}),Object.entries(c).forEach(([d,m])=>{if(e.includes(d))if(Array.isArray(m))m.forEach(p=>{const g="dosage"in p&&typeof p.dosage=="string"?p.dosage:"Consult your healthcare provider",x="forms"in p&&Array.isArray(p.forms)?p.forms:[];n.push({category:"supplements",title:`${p.name} for ${d}`,content:`${p.description}

**Helps with:** ${p.forSymptoms.join(", ")}

**How it works:** ${p.howItWorks}

**Typical dosage:** ${g}

**Tips:** ${p.tips}`,recommendations:x,disclaimer:"Always consult your healthcare provider before starting supplements, especially if you take other medications."})});else{const p="dosage"in m&&typeof m.dosage=="string"?m.dosage:"Consult your healthcare provider",g="forms"in m&&Array.isArray(m.forms)?m.forms:[],x=g.length>0?`

**Available forms:** `+g.join(", "):"";n.push({category:"supplements",title:`${m.name}`,content:`${m.description}

**Helps with:** ${m.forSymptoms.join(", ")}

**How it works:** ${m.howItWorks}

**Typical dosage:** ${p}${x}

**Tips:** ${m.tips}`,recommendations:g,disclaimer:"Always consult your healthcare provider before starting supplements, especially if you take other medications."})}})}if(e.includes("medication")||e.includes("medicine")||e.includes("drug")||e.includes("prescription")||e.includes("hormone")||e.includes("hrt")||e.includes("ssri")||e.includes("gabapentin")||e.includes("treatment")||e.includes("doctor")||e.includes("ask my doctor")){if((e.includes("hot flash")||e.includes("hot flash"))&&n.push({category:"medications",title:"Medications for Hot Flashes",content:`There are several medication options for hot flashes:

**Hormone Therapy (Most Effective):**
• Estrogen therapy (pills, patches, creams)
• Combined estrogen-progesterone (if you have a uterus)
• **Benefits:** 75-90% reduction in hot flashes
• **Risks:** Blood clots, stroke, breast cancer (with long-term combined use)

**Non-Hormonal Options:**
• **Fezolinetant (Veozah)** - NEW FDA-approved 2023, first non-hormonal specifically for hot flashes
• **Paroxetine (Brisdelle)** - FDA-approved SSRI for hot flashes
• **Venlafaxine (Effexor)** - SNRI, commonly used off-label
• **Gabapentin** - helps with hot flashes and sleep

**Questions to ask your doctor:**
• Am I a good candidate for hormone therapy?
• What are the risks and benefits for my situation?
• What's the lowest effective dose?
• How long should I stay on it?
• Should I use estrogen-only or combined?`,disclaimer:"Only your healthcare provider can determine what's right for you based on your medical history."}),(e.includes("sleep")||e.includes("insomnia"))&&n.push({category:"medications",title:"Medications for Sleep",content:`Sleep issues during menopause can be addressed with:

**Prescription Options:**
• **Hormone Therapy** - Often helps sleep indirectly by reducing night sweats
• **Gabapentin/Pregabalin** - calms the nervous system, helps with sleep
• **Low-dose SSRIs** - can help if anxiety is contributing
• **Benzodiazepines** (short-term only) - lorazepam, clonazepam
• **Sleep medications** - zolpidem, eszopiclone (short-term use)

**Important considerations:**
• Many sleep aids can be habit-forming
• Address underlying causes (night sweats, anxiety) first
• Cognitive Behavioral Therapy for Insomnia (CBT-I) is often as effective as medication without risks

**Questions to ask your doctor:**
• What might be disrupting my sleep (hormones, anxiety, night sweats)?
• Is CBT-I an option for me?
• What are the risks of sleep medications?
• Should I see a sleep specialist?`,disclaimer:"Consult your doctor for personalized recommendations."}),(e.includes("mood")||e.includes("depression")||e.includes("anxiety"))&&n.push({category:"medications",title:"Medications for Mood & Anxiety",content:`Menopause can significantly affect mood due to hormone fluctuations:

**SSRIs & SNRIs (Antidepressants):**
• **Escitalopram (Lexapro)** - often first choice, well-tolerated
• **Venlafaxine (Effexor)** - also helps with hot flashes
• **Duloxetine (Cymbalta)** - helps mood and pain
• **Paroxetine** - helps mood AND hot flashes

**Why these help menopause mood:**
Estrogen affects serotonin and other mood chemicals. When estrogen fluctuates, mood does too. SSRIs stabilize these pathways.

**Additional support:**
• Therapy (CBT, counseling)
• Support groups
• Exercise
• Stress management

**Questions to ask your doctor:**
• Could my mood symptoms be related to menopause?
• What are my options beyond antidepressants?
• Should I see a therapist too?
• How long before I feel the effects?`,disclaimer:"Mental health is health. Don't hesitate to seek help."}),(e.includes("testosterone")||e.includes("trt"))&&n.push({category:"medications",title:"Testosterone Replacement Therapy (TRT) for Women",content:`Yes, women can benefit from testosterone therapy too!

**Why testosterone matters for women:**
• Testosterone levels decline with age and menopause
• It affects libido, energy, mood, and muscle mass
• Many women notice changes in energy and sex drive

**Testosterone therapy for women:**
• NOT FDA-approved for women in the US (but commonly prescribed off-label)
• Used widely in Australia and Europe
• Can be prescribed by menopause specialists

**Benefits women may experience:**
• Improved libido and sexual satisfaction
• Increased energy and motivation
• Better mood and sense of well-being
• Improved muscle strength
• May help with brain fog

**How it's given:**
• Compounded testosterone cream/gel (most common)
• Testosterone patches (off-label)
• Pellets (less common)
• Doses are MUCH lower than for men

**Risks & monitoring:**
• Requires blood tests to monitor levels
• Side effects: acne, hair growth (too high dose)
• Voice changes possible (reversible with dose adjustment)
• Not recommended if pregnant or trying to conceive

**Questions to ask your doctor:**
• Am I a candidate for testosterone therapy?
• What's the appropriate dose for women?
• How will we monitor my levels?
• Is there a compounding pharmacy you recommend?`,disclaimer:"Testosterone therapy should only be used under medical supervision."}),(e.includes("perimenopause")||e.includes("menopause"))&&(e.includes("medication")||e.includes("medicine")||e.includes("treatment")||e.includes("help")||e.includes("option")||e.includes("take")||e.includes("what should"))){let c=`Great question! There are several medication options available for perimenopause and menopause symptoms:

`;c+=`**1. Hormone Replacement Therapy (HRT) - Most Effective**
`,c+=`• **Estrogen Therapy (ET)** - For women who've had a hysterectomy
`,c+=`• **Combined Estrogen-Progestogen (EPT)** - For women with a uterus (progesterone protects the lining)
`,c+=`• **Vaginal Estrogen** - Low-dose for local symptoms (dryness, pain, urinary issues)
`,c+=`• Brands: Premarin, Estrace, Climara, Vivelle-Dot, Prempro, Bijuva, Vagifem, Estring
`,c+=`• Reduces hot flashes 75-90%, improves sleep, vaginal health, mood, and protects bones

`,c+=`**2. Non-Hormonal Prescription Options**
`,c+=`• **Fezolinetant (Veozah)** - NEW 2023 FDA-approved, specifically for hot flashes
`,c+=`• **Paroxetine (Brisdelle)** - FDA-approved SSRI for hot flashes
`,c+=`• **Venlafaxine (Effexor)** - SNRI for hot flashes and anxiety
`,c+=`• **Gabapentin** - Helps hot flashes, sleep, and nerve-related symptoms
`,c+=`• **SSRIs** (Escitalopram, Duloxetine) - For mood, anxiety, and hot flashes

`,c+=`**3. For Specific Symptoms:**
`,c+=`• **Vaginal Dryness/Pain:** Vaginal estrogen, Osphena, Intrarosa
`,c+=`• **Sleep Issues:** Hormone therapy, Gabapentin, CBT-I
`,c+=`• **Mood/Anxiety:** SSRIs/SNRIs, therapy, hormone therapy
`,c+=`• **Bone Health:** Hormone therapy, bisphosphonates, calcium + Vitamin D

`,c+=`**Important Considerations:**
`,c+=`• HRT is most effective but not for everyone
`,c+=`• "Timing matters" - HRT started within 10 years of menopause or before 60 is generally safer
`,c+=`• Transdermal (patch/gel) preferred if you have clot risk factors
`,c+=`• If you have a uterus, you MUST use progesterone with estrogen
`,c+=`• Have annual check-ups and report any unusual symptoms

`,c+=`**Questions to Ask Your Doctor:**
`,c+=`1. What treatment options are appropriate for my symptoms?
`,c+=`2. Am I a good candidate for hormone therapy?
`,c+=`3. What are the benefits and risks for MY specific situation?
`,c+=`4. What delivery method would work best for me?
`,c+=`5. How long should I stay on treatment?
`,c+=`6. What symptoms should I watch for?
`,c+=`7. Will this interact with my other medications?
`,n.push({category:"medications",title:"Perimenopause & Menopause Medications - Complete Overview",content:c,disclaimer:"This is general information only. Always consult your healthcare provider for personalized recommendations based on your medical history, symptoms, and health profile."})}if(e.includes("hrt")||e.includes("hormone replacement")){const c=Rv.hrt;let d=`${c.description}

${c.overview}

`;(e.includes("type")||e.includes("kind")||e.includes("options"))&&(d+=`**Types of HRT:**

`,c.types.forEach((m,p)=>{if(d+=`${p+1}. **${m.name}**
   ${m.description}
`,m.medications&&m.medications.length>0){const g=m.medications.map(x=>`${x.brand} (${x.forms})`).join(", ");d+=`   Examples: ${g}
`}d+=`
`})),(e.includes("patch")||e.includes("pill")||e.includes("gel")||e.includes("cream")||e.includes("spray")||e.includes("delivery")||e.includes("method"))&&(d+=`**Delivery Methods:**

`,Object.entries(c.deliveryMethods).forEach(([m,p])=>{d+=`**${m.charAt(0).toUpperCase()+m.slice(1)}:**
   Pros: ${p.pros}
   Cons: ${p.cons}

`})),(e.includes("benefit")||e.includes("help")||e.includes("good")||e.includes("advantage"))&&(d+=`**Benefits of HRT:**
`,c.benefits.forEach((m,p)=>{d+=`${p+1}. ${m}
`}),d+=`
`),(e.includes("risk")||e.includes("danger")||e.includes("side effect")||e.includes("harm"))&&(d+=`**Potential Risks:**
`,c.risks.forEach(m=>{d+=`• **${m.risk}:** ${m.detail}
`}),d+=`
`),(e.includes("should")||e.includes("who")||e.includes("candidate")||e.includes("consider"))&&(d+=`**Who Should Consider HRT:**
`,c.whoShouldConsider.forEach(m=>{d+=`• ${m}
`}),d+=`
**Who Should Avoid HRT:**
`,c.whoShouldAvoid.forEach(m=>{d+=`• ${m}
`}),d+=`
`),(e.includes("doctor")||e.includes("ask")||e.includes("question")||e.includes("consult"))&&(d+=`**Questions to Ask Your Doctor:**
`,c.questionsToAskDoctor.forEach((m,p)=>{d+=`${p+1}. ${m}
`}),d+=`
`),!e.includes("type")&&!e.includes("kind")&&!e.includes("options")&&!e.includes("patch")&&!e.includes("pill")&&!e.includes("delivery")&&!e.includes("benefit")&&!e.includes("risk")&&!e.includes("doctor")&&!e.includes("should")&&!e.includes("who")&&(d+=`**Key Points:**
`,d+=`• Most effective treatment for hot flashes and night sweats (75-90% reduction)
`,d+=`• Available as pills, patches, gels, sprays, and vaginal products
`,d+=`• If you have a uterus, you NEED combined estrogen + progesterone
`,d+=`• Transdermal (patch/gel) has lower blood clot risk than pills
`,d+=`• Benefits generally outweigh risks for healthy women under 60
`,d+=`• Discuss your personal situation with your healthcare provider

`,d+=`**Questions to Ask Your Doctor:**
`,c.questionsToAskDoctor.forEach((m,p)=>{d+=`${p+1}. ${m}
`})),n.push({category:"medications",title:"Hormone Replacement Therapy (HRT) - Complete Guide",content:d,disclaimer:"HRT isn't right for everyone. Discuss your personal risks and benefits with your doctor. This information is educational, not medical advice."})}}(e.includes("hot flash")||e.includes("night sweat"))&&n.push({category:"education",title:"Understanding Hot Flashes & Night Sweats",content:`${Tt.hotFlashes.whatIsIt}

**Why they happen:**
${Tt.hotFlashes.whyItHappens}

**Common triggers:**
${Tt.hotFlashes.triggers.join(", ")}

**Management strategies:**
**Lifestyle:**
${Tt.hotFlashes.management.lifestyle.map((c,d)=>`${d+1}. ${c}`).join(`
`)}

**Dietary:**
${Tt.hotFlashes.management.dietary.map((c,d)=>`${d+1}. ${c}`).join(`
`)}

**Medical options:**
${Tt.hotFlashes.management.medical.join(", ")}`}),(e.includes("brain fog")||e.includes("memory")||e.includes("forget"))&&n.push({category:"education",title:"Brain Fog & Memory Changes",content:`${Tt.brainFog.whatIsIt}

**Why it happens:**
${Tt.brainFog.whyItHappens}

**When to worry:**
${Tt.brainFog.whenToWorry}

**Tips to manage:**
${Tt.brainFog.management.map((c,d)=>`${d+1}. ${c}`).join(`
`)}

Good news: Research shows cognitive function often improves once you reach postmenopause!`}),e.includes("sleep")&&n.push({category:"education",title:"Sleep Issues During Menopause",content:`**Why sleep changes during menopause:**
${Tt.sleepIssues.whyItHappens}

**Common problems:**
${Tt.sleepIssues.commonProblems.join(`
• `)}

**Sleep hygiene tips:**
${Tt.sleepIssues.sleepHygiene.map((c,d)=>`${d+1}. ${c}`).join(`
`)}

**When to get help:**
${Tt.sleepIssues.whenToSeekHelp}`}),(e.includes("mood")||e.includes("depression")||e.includes("anxiety"))&&n.push({category:"education",title:"Mood Changes During Menopause",content:`**Why mood changes:**
${Tt.moodChanges.whyItHappens}

**Common experiences:**
${Tt.moodChanges.commonExperiences.join(`
• `)}

**When to seek help:**
${Tt.moodChanges.whenToSeekHelp}

**Support options:**
${Tt.moodChanges.support.join(`
• `)}

You're not alone - mood changes are one of the most common menopause symptoms!`}),["perimenopause","menopause","postmenopause","estrogen","progesterone","hysterectomy","premature","surgical","estradiol","phytoestrogen","bioidentical"].forEach(c=>{if(e.includes(c)&&Ym[c]){const d=Ym[c];let m=d.definition;"symptoms"in d&&d.symptoms&&(m+=`

**Symptoms:** ${d.symptoms}`),"role"in d&&d.role&&(m+=`

**Role in menopause:** ${d.role}`),"considerations"in d&&d.considerations&&(m+=`

**Important considerations:** ${d.considerations}`),"related"in d&&d.related&&(m+=`

**Related terms:** ${d.related}`),"importance"in d&&d.importance&&(m+=`

**Why it matters:** ${d.importance}`),n.push({category:"definition",title:d.term,content:m})}}),e.includes("what is")&&e.includes("menopause")&&n.push({category:"education",title:"Understanding Menopause",content:`**Menopause** is defined as 12 consecutive months without a period - it marks the end of your reproductive years.

**The transition has three stages:**

**1. Perimenopause**
The transition phase, usually starting in your mid-40s. Hormone levels fluctuate wildly, causing irregular periods and many symptoms. Can last 4-10 years.

**2. Menopause**
When you've gone 12 months without a period (average age: 51). Ovaries have stopped producing significant estrogen.

**3. Postmenopause**
Years after menopause. Many symptoms may ease, but health risks from low estrogen (bone, heart) increase.

**Common symptoms across all stages:**
• Hot flashes and night sweats
• Sleep problems
• Mood changes
• Brain fog
• Vaginal dryness
• Weight changes
• Joint pain

Every woman's experience is different!`});const l={hrt:["hormone therapy safe"],hormones:["hormone therapy safe"],estrogen:["hormone therapy safe"],progesterone:["hormone therapy safe"],supplement:["natural supplements menopause"],vitamin:["natural supplements menopause"],herb:["natural supplements menopause"],ashwagandha:["natural supplements menopause"],magnesium:["natural supplements menopause"],"hot flash":["hot flashes causes treatment","common menopause symptoms"],flush:["hot flashes causes treatment"],sweat:["night sweats"],"night sweat":["night sweats"],anxiety:["anxiety menopause treatment","mood swings anxiety"],depression:["mood swings anxiety"],mood:["mood swings anxiety"],"brain fog":["brain fog memory"],memory:["brain fog memory"],sleep:["sleep better menopause"],insomnia:["sleep better menopause"],weight:["weight gain menopause"],libido:["sex drive menopause"],"sex drive":["sex drive menopause"],dryness:["vaginal dryness pain"],painful:["vaginal dryness pain"],testosterone:["testosterone trt menopause"],trt:["testosterone trt menopause"],exercise:["exercise menopause"],workout:["exercise menopause"],diet:["diet menopause"],eating:["diet menopause"],bone:["bone health osteoporosis"],osteoporosis:["bone health osteoporosis"],heart:["heart health menopause"],cancer:["cancer risk menopause"],menopause:["what is menopause"],perimenopause:["what is perimenopause"],postmenopause:["what is postmenopause"],doctor:["when see doctor"],test:["menopause tests"]};for(const[c,d]of Object.entries(l))if(e.includes(c))for(const m of d){for(const p of Object.values(Vm))if(p.questions[m]){const g=p.questions[m];if(!n.some(w=>w.title===g.question)){n.push({category:"faq",title:g.question,content:g.answer});break}}if(n.length>0)break}if(n.length>0)return n;if(e.includes("menopause")||e.includes("perimenopause")||e.includes("symptom")){const c=[["hot flash","night sweat"],"symptoms","treatment","medication",["weight","gain"],["sleep","insomnia"],["mood","anxiety","depression"],["sex","libido","vaginal"],["brain","memory","forget"],"supplement","testosterone","trt","bone","heart","cancer","doctor","test"];for(const d of c)if((Array.isArray(d)?d:[d]).some(p=>e.includes(p))){const p=["symptoms","treatment","hot flash","night sweat","sleep","mood","weight","bone","heart","doctor","test","supplement","testosterone","trt","anxiety"];for(const g of p)if(e.includes(g)){for(const x of Object.values(Vm))if(x.questions[g+" menopause"]||x.questions[g+" causes treatment"]||x.questions[g+" treatment"]||x.questions[g+" menopause treatment"]||x.questions[g+" trt menopause"]||x.questions[g]){const w=x.questions[g+" menopause"]||x.questions[g+" causes treatment"]||x.questions[g+" treatment"]||x.questions[g+" menopause treatment"]||x.questions[g+" trt menopause"]||x.questions[g];if(w){n.push({category:"faq",title:w.question,content:w.answer});break}}if(n.length>0)break}if(n.length>0)break}}return n},Av=r=>({perimenopause:"perimenopause",menopause:"menopause",postmenopause:"post-menopause",not_sure:"not sure where you are in the journey"})[r]||r,Km=r=>r<=3?"mild":r<=6?"moderate":"severe",Mv=({onClose:r})=>{var ye;const[e,n]=A.useState([{id:"welcome",role:"assistant",content:`Hey there! 💕 I'm Maya, your menopause journey buddy. I'm here for you - whether you want to chat, track how you're feeling, or just need someone who gets what you're going through.

So, how's your day going?`,timestamp:new Date}]),[o,l]=A.useState(""),[c,d]=A.useState(!1),[m,p]=A.useState(!1),[g,x]=A.useState(""),[w,b]=A.useState(null),v=A.useRef(null),S=A.useRef(null),T=ae(P=>P.profile),j=ae(P=>P.symptoms),W=ae(P=>P.moods),L=ae(P=>P.treatments);ae(P=>P.subscriptionTier);const H=ae(P=>P.addAIMessage),q=A.useMemo(()=>{var Xe;const P=((Xe=T.name)==null?void 0:Xe.split(" ")[0])||"friend",D=new Date,re=new Date(D.getTime()-7*24*60*60*1e3),M=j.filter(De=>{const Oe=new Date(De.date);return Oe>=re&&Oe<=D}),se=W.filter(De=>{const Oe=new Date(De.date);return Oe>=re&&Oe<=D}),ge=L.filter(De=>De.isActive).map(De=>({name:De.name,type:De.type})),je={};M.forEach(De=>{je[De.symptomName]||(je[De.symptomName]={count:0,totalSeverity:0}),je[De.symptomName].count++,je[De.symptomName].totalSeverity+=De.severity});const $e=Object.entries(je).map(([De,Oe])=>({name:De,count:Oe.count,avgSeverity:Oe.totalSeverity/Oe.count})).sort((De,Oe)=>Oe.count-De.count).slice(0,3),Ge=new Date(D.getTime()-14*24*60*60*1e3),Ue=W.filter(De=>{const Oe=new Date(De.date);return Oe>=re&&Oe<=D}),ct=W.filter(De=>{const Oe=new Date(De.date);return Oe>=Ge&&Oe<re}),_t={great:5,good:4,okay:3,low:2,difficult:1},Vt=Ue.length>0?Ue.reduce((De,Oe)=>De+(_t[Oe.moodLevel]||3),0)/Ue.length:3,Pt=ct.length>0?ct.reduce((De,Oe)=>De+(_t[Oe.moodLevel]||3),0)/ct.length:3,rt=Vt>Pt+.3?"up":Vt<Pt-.3?"down":"stable",Rt=M.filter(De=>De.category==="sleep"),At=Rt.length>0?Rt.reduce((De,Oe)=>De+Oe.severity,0)/Rt.length:0,Ps=At<=3?"good":At<=6?"fair":"poor",vs=j.length>0?j.reduce((De,Oe)=>new Date(Oe.date)>new Date(De.date)?Oe:De):null,E=(vs==null?void 0:vs.date)||null,_e=E?Math.floor((D.getTime()-new Date(E).getTime())/(24*60*60*1e3)):999;return{name:P,menopauseStage:Av(T.menopauseStage),recentSymptoms:M,recentMoods:se,activeTreatments:ge,topSymptoms:$e,moodTrend:rt,sleepQuality:Ps,lastSymptomDate:E,daysSinceLastLog:_e}},[T,j,W,L]);A.useEffect(()=>{(q.topSymptoms.length>0||q.recentMoods.length>0)&&n(P=>{if(P.length===1&&P[0].id==="welcome"){let D=`Hey ${q.name}! 💕 Great to see you again!

`;if(q.daysSinceLastLog>3&&(D+=`It's been a little while since you've logged - no pressure, but if you want to, I'm here to help you track anything you'd like to talk about.

`),q.topSymptoms.length>0){const re=q.topSymptoms[0],M=Km(re.avgSeverity);D+=`I noticed ${re.name} has been coming up a lot for you lately (${M}). How have you been feeling about that?

`}return q.moodTrend==="down"&&q.recentMoods.length>0?D+=`I've been thinking about you - your mood tracking has shown some tougher days lately. Just know I'm here whenever you want to talk. 💜

`:q.moodTrend==="up"&&(D+=`I've been happy to see your mood trending upward! That's really encouraging to see. 🌟

`),D+="What's on your mind today?",[{id:"welcome",role:"assistant",content:D,timestamp:new Date}]}return P})},[q.name,q.topSymptoms,q.activeTreatments,q.moodTrend,q.daysSinceLastLog,q.recentMoods]),A.useEffect(()=>{var P;(P=v.current)==null||P.scrollIntoView({behavior:"smooth"})},[e]);const K=()=>{if(!o.trim())return;const P={id:Date.now().toString(),role:"user",content:o.trim(),timestamp:new Date};n(D=>[...D,P]),H({role:"user",content:o.trim()}),l(""),setTimeout(()=>{const D=J(o.trim(),q,e),re={id:(Date.now()+1).toString(),role:"assistant",content:D,timestamp:new Date};n(M=>[...M,re]),H({role:"assistant",content:D})},800)},R=P=>{const D=P.toLowerCase(),re=[];["hot flash","night sweat","insomnia","sleep","mood","anxiety","depression","brain fog","fatigue","tired","weight","joint","headache","libido","period","menstrual","hormone","estrogen","flush","sweat","sleeping","energy","stress","bloating","dryness","heart","palpitation"].forEach(Ge=>{D.includes(Ge)&&re.push(Ge)});const se=/\b(not|never|no|don't|doesn't|isn't|aren't|won't|can't|couldn't|shouldn't)\b/.test(D),ge=/\?$/.test(P)||/^(what|why|how|when|where|who|can|could|should|would|is|do|does)\b/i.test(D),je=/\b(feeling|feel|felt|feeling like|feel like|felt like)\b/i.test(D),$e=/\b(better|worse|more|less|same|different|than|compared)\b/.test(D);return{topics:re,hasNegation:se,isQuestion:ge,hasFeeling:je,hasComparison:$e,keywords:re}},F=(P,D,re)=>{const M=D.name,se=P.trim(),ge=se.toLowerCase(),je=re.slice(-3).filter(ct=>ct.role==="user");je.length>0&&R(je[je.length-1].content);const $e=R(se);return["hrt","hormone replacement","estrogen","progesterone","testosterone","supplement","vitamin","herb","medication","medicine","drug","treatment","therapy","prescription","dose","dosage","osteoporosis","bone density","cancer risk","blood clot","non-hormonal","ssri","gabapentin","veozah","brisdelle"].some(ct=>ge.includes(ct))||ge.match(/tell me about|what is|what are|explain|can you explain|what does|meaning of|define|give me information|info about|learn about|should i take|is it safe|risks and benefits/i)?`${M}, I love that you're being proactive about your health! For detailed clinical information about treatments, medications, and their risks and benefits, I'd suggest tapping the Clinical Advisor icon (the pulse icon in the top right corner).

They have comprehensive, evidence-based information that can help you have informed conversations with your healthcare provider.

For now, I'm here to support you emotionally. How are you feeling about all of this journey?`:$e.topics.length>0||$e.hasFeeling?me(se,ge,M,D,$e):ge.match(/^(not so|not |i'm not|i am not|not feeling|i don't feel|i feel not)/)||ge.match(/having a (bad|rough|tough|hard)/)||ge.match(/feeling (bad|low|down|terrible|awful|rough|tough)/)?ke(M,se,D):ge.match(/^(i'm|i am|feeling|feels|felt|pretty |really |so |very |kind of |sort of )?(good|great|okay|fine|better|amazing|wonderful)/)||ge.match(/having a (good|great|nice|beautiful)/)?Pe(M,se,D):$e.isQuestion?X(se,ge,M):ge.match(/frustrat|annoy|irritat|angry|upset|overwhelmed|sick of|tired of|done with/)?V(M):ge.match(/^((just )?want( to)?|let's|okay|alright|sure|yes|yeah)/i)&&ge.match(/talk|chat|vent|share/i)?ne():Y(M,se)},me=(P,D,re,M,se)=>{if(D.includes("supplement")||D.includes("vitamin")||D.includes("herb")||D.includes("medication")||D.includes("medicine")||D.includes("drug")||D.includes("prescription")||D.includes("should i take")||D.includes("what should")||D.includes("recommend")||D.includes("treatment")||D.includes("therapy"))return`${re}, that's such a thoughtful question! For detailed information about treatments and medications, I'd recommend checking out the Clinical Advisor - just tap the pulse icon in the top right corner.

They have comprehensive information about HRT options, non-hormonal treatments, supplements, and more. Plus, everything comes with proper medical disclaimers so you can make informed decisions with your healthcare provider.

In the meantime, I'm here to support you emotionally. How are you feeling about all of this?`;const ge={"hot flash":{response:"Hot flashes are the absolute worst! That sudden wave of heat, the sweat, the need to peel off layers... it happens to the best of us during menopause.",followUp:"When do they hit you most? Are there any triggers you've noticed?"},"night sweat":{response:"Night sweats are so exhausting because they interrupt your sleep, and then you're exhausted the next day which makes everything harder.",followUp:"Are they waking you up at night? How many times a week roughly?"},sleep:{response:"Sleep during menopause can be so tricky - your body's going through so many changes that restful sleep sometimes feels impossible.",followUp:"Is it falling asleep that's hard, or staying asleep, or both?"},insomnia:{response:"Insomnia during this time is so common. Your hormones are all over the place, and that affects the sleep hormones too.",followUp:"Are you lying awake with thoughts racing, or do you just can't seem to fall asleep?"},mood:{response:"Mood changes during menopause are SO real. One minute you're fine, the next you're crying at a commercial. It's not you - it's the hormone fluctuations.",followUp:"Are you experiencing more anxiety, sadness, or just general emotional ups and downs?"},anxiety:{response:"Anxiety during perimenopause is incredibly common. Estrogen affects your brain chemistry, and when it fluctuates, anxiety can spike.",followUp:"Is it general worry, or do you get panic-y feelings?"},depression:{response:"Feeling depressed during this transition is more common than people realize. The hormonal changes really do affect how we feel.",followUp:"How long have you been feeling this way? Is it most days?"},"brain fog":{response:"Oh, brain fog! Forgetting words, walking into rooms and forgetting why, losing your train of thought mid-sentence... it's one of the most frustrating symptoms.",followUp:"Does it seem worse at certain times of day, or after poor sleep?"},fatigue:{response:"Fatigue during menopause is no joke. It feels like you're running on empty even when you haven't done much.",followUp:"Is it a physical tiredness or more mental exhaustion?"},weight:{response:"Weight changes during menopause are so frustrating - especially because it often goes to places that are harder to lose. It's the changing hormones and metabolism.",followUp:"Has it been gradual, or did you notice it come on suddenly?"},energy:{response:"Low energy is such a common complaint during this time. Your body is working hard on this transition, and that takes a toll.",followUp:"Is there a particular time of day when you feel most drained?"},stress:{response:"Stress can feel so much heavier during perimenopause. What we could handle before sometimes feels impossible now.",followUp:"What's been the main source of stress for you lately?"}};for(const je of se.topics)if(ge[je]){const $e=ge[je];let Ge=`${$e.response}

`;return M.topSymptoms.length>0&&M.topSymptoms[0].name.toLowerCase().includes(je)?Ge+=`I see you've been tracking ${je}s - how have they been affecting your daily life?

`:M.sleepQuality==="poor"&&je!=="sleep"&&(Ge+=`I noticed poor sleep in your tracking - I wonder if that might be making the ${je} worse?

`),Ge+=$e.followUp,Ge}if(se.hasFeeling){const je=D.match(/feeling (\w+)/),$e=je?je[1]:"whatever you're going through",Ge=M.topSymptoms.length>0?"I noticed from your tracking that you've been dealing with some things lately. How are you managing?":"Is this something you've been experiencing often?";return`${re}, thank you for sharing that with me. Feeling ${$e} during menopause is something so many of us experience, but it doesn't make it any easier.

What I hear from women is that having someone who understands makes a real difference. You're not alone in this.

${Ge}`}return`I hear you, ${re}. Tell me more about what you're experiencing.`},ke=(P,D,re)=>{const M=D.toLowerCase();let se="";M.includes("day")&&(se="today"),M.includes("mood")&&(se="your mood"),M.includes("sleep")&&(se="sleep"),(M.includes("tired")||M.includes("exhausted"))&&(se="your energy"),(M.includes("anxious")||M.includes("anxiety"))&&(se="anxiety"),M.includes("hot flash")&&(se="hot flashes"),M.includes("overwhelm")&&(se="feeling overwhelmed");let ge="Oh, sweetheart. 💜 I'm so sorry you're not feeling great. That really stinks.";return se?ge+=` What's going on with ${se}?`:ge+=` When you say "not so good" - what's making it tough today?`,re.moodTrend==="down"&&re.recentMoods.length>0&&(ge+=" I can see from your tracking that things have been heavy lately."),ge+=" I'm right here with you. Take your time.",ge},Pe=(P,D,re)=>{const M=D.toLowerCase();let se="";M.includes("day")||M.includes("today")?se="your day":M.includes("mood")||M.includes("feeling good")?se="your mood":M.includes("sleep")||M.includes("slept")?se="your sleep":M.includes("energy")?se="your energy":M.includes("hot flash")?se="fewer hot flashes":se="feeling good";let ge=`Yay! 💜 I love hearing that ${se} is going well!`;return se.includes("day")?ge+=" What made your day good?":se.includes("mood")||se.includes("feeling")?ge+=" That's wonderful! What's contributed to you feeling this way?":se.includes("sleep")?ge+=" That's great! Have you noticed anything that's helped with your sleep?":se.includes("energy")&&(ge+=" How wonderful! What do you think is giving you that boost?"),re.moodTrend==="up"&&(ge+=" And I've noticed your mood has been trending upward - that's really encouraging to see!"),ge},X=(P,D,re,M)=>{const se=Gm(P);if(se.length>0){const ge=se[0];let je="";return ge.category==="supplements"?je=`${re}, great question about supplements! 💊 Here's what I know:

`:ge.category==="medications"?je=`${re}, that's an important question about medications! Here's what you should know:

`:ge.category==="definition"?je=`Good question! Here's what that means:

`:je=`${re}, here's what I know about that:

`,je+=ge.content,ge.disclaimer&&(je+=`

⚠️ ${ge.disclaimer}`),je}return D.includes("hot flash")?`Great question about hot flashes! They're caused by your estrogen levels fluctuating, which affects your body's temperature regulation.

Some things that can help: keeping your environment cool, wearing layers, avoiding triggers like caffeine and spicy foods, and some women find herbs like black cohosh helpful. But definitely chat with your doctor about what might work for you.

Have you noticed any patterns with when they happen?`:D.includes("weight")||D.includes("gain")?`Weight gain during menopause is SO frustrating and incredibly common. During this time, your metabolism naturally slows down, and estrogen plays a role in where we store fat (hello, belly area!).

The good news is that strength training can really help - it builds muscle which burns more calories. Also focusing on protein and fiber while being mindful of portions.

Have you noticed the weight going to a specific area?`:D.includes("sleep")||D.includes("insomnia")?`Sleep issues during menopause are usually caused by the hormonal fluctuations - especially the drop in estrogen and progesterone (which has natural sleep-promoting effects).

Some tips that work well: keep your bedroom cool, avoid screens before bed, stick to a consistent sleep schedule, and some women find magnesium supplements helpful. If it's really bad, your doctor might have other options.

Is it falling asleep that's hard, or do you wake up in the middle of the night?`:D.includes("mood")||D.includes("anxiety")||D.includes("depression")?`Mood changes during perimenopause are VERY real and not in your head. Estrogen affects serotonin and other mood-related brain chemicals. When it fluctuates wildly, our moods can too.

What helps: regular exercise (even just walking), good sleep when you can get it, limiting alcohol, and sometimes therapy or medication. Don't be afraid to talk to your doctor - there's no shame in getting support.

Are you experiencing more anxiety, sadness, or both?`:D.includes("brain fog")||D.includes("memory")?`Brain fog is one of the most frustrating symptoms! Estrogen helps with cognitive function, so when it fluctuates, our thinking gets fuzzy.

Things that can help: getting enough sleep, challenging your brain with puzzles or learning something new, regular exercise (increases blood flow to the brain), and managing stress.

Have you noticed if it's worse at certain times or after certain activities?`:D.includes("treatment")||D.includes("hormone")||D.includes("hrt")?`Hormone Replacement Therapy (HRT) is definitely something to discuss with your doctor. It can be very effective for many women, especially if you're having significant symptoms.

The key things to know: there are different types (estrogen-only for women who've had a hysterectomy, combined estrogen-progesterone for those who still have a uterus), different delivery methods (patches, pills, gels), and it does come with some risks that your doctor will help you understand.

Have you talked to your doctor about whether HRT might be right for you?`:D.includes("when")&&D.includes("menopause")?`The average age for menopause is 51, but perimenopause (the transition) usually starts in your mid-to-late 40s and can last several years.

You're considered to be in perimenopause when you start having symptoms but still have periods. Menopause is when you've gone 12 months without a period.

Some women start noticing changes in their late 30s, others not until their late 50s. Where are you in that journey?`:`${re}, that's a really good question. This is such a personal journey, and what works for one woman might not work for another.

Based on what I know: this transition affects every woman differently, and it helps to track your symptoms so you can spot patterns.

What's going on that made you ask? I'm here to talk through this with you.`},V=(P,D,re)=>`Oh, ${P}! 💜 I totally get it. You have every right to feel frustrated - this whole menopause thing can be so unfair!

Sometimes it feels like our bodies are betraying us, right? You're trying to live your life and your body has other plans.

Can I ask - is it one specific thing that's frustrating you most right now, or is it just everything piling up?`,ne=(P,D)=>{const re=["Okay, I'm here and I'm listening. 💜 Tell me - what's been on your mind?","I'm all ears. 💙 Sometimes it helps just to get things off your chest.","Alright, let's chat. 💜 What's going on in your world?","Perfect - this is your time. 💙 What do you want to talk about?"];return re[Math.floor(Math.random()*re.length)]},Y=(P,D,re,M)=>D.toLowerCase().match(/^(okay|ok|fine|good|alright|yeah|yes|yep)/)&&D.length<20?`Good! 😊 How's your ${ue()} been so far?`:D.length>20&&D.length<100?`${P}, I hear you. 💜 Tell me more about that - how's that been affecting you?`:D.length>=100?`${P}, thank you for sharing that with me. It takes real courage to open up. 💜

What's been the hardest part about this for you?`:`${P}, I'm here with you. 💙 What's going on?`,ue=()=>{const P=new Date().getHours();return P<12?"morning":P<17?"afternoon":P<21?"evening":"night"},we=(P,D)=>{const re=P.toLowerCase(),M=ue();if(/good morning/i.test(re))return`Good morning, ${D}! 😊 How did you sleep?`;if(/good afternoon/i.test(re))return"Good afternoon! 😊 How's your day going so far?";if(/good evening/i.test(re))return"Good evening! 😊 How was your day?";if(/good night/i.test(re))return"Good night! 😊 Hope you get some good rest. I'm here whenever you need me.";if(/^(hi|hello|hey)/i.test(re)){const se=[`Hey ${D}! 😊 So nice to see you. How are you doing today?`,`Hello there, ${D}! 💕 How's your ${M} going?`,`Hi ${D}! Great to connect with you. 💜 How are you feeling?`];return se[Math.floor(Math.random()*se.length)]}return""},xe=P=>{const D=[`Oh, you're so welcome, ${P}! That's what I'm here for. ❤️`,"Of course! It's genuinely my pleasure to chat with you. 💜","Always here for you, friend! That's what friends do! 💪","You're making me blush! I'm just happy to help. 😊"];return D[Math.floor(Math.random()*D.length)]},Q=(P,D)=>{let re=`${P}, here's how you've been doing! 📊

`;if(D.topSymptoms.length>0&&(re+=`**Top symptoms this week:**
`,D.topSymptoms.forEach((M,se)=>{re+=`${se===0?"🔴":"🟡"} ${M.name} - ${Km(M.avgSeverity)} (${M.count}x)
`}),re+=`
`),D.recentMoods.length>0){const M=D.moodTrend==="up"?"📈":D.moodTrend==="down"?"📉":"➡️",se=D.moodTrend==="up"?"trending upward!":D.moodTrend==="down"?"could use some extra TLC":"holding steady";re+=`**Your mood:** ${M} ${se}
`,re+=`**Sleep:** ${D.sleepQuality==="good"?"🌙 Good":D.sleepQuality==="poor"?"🌡️ Needs attention":"⛅ Fair"}

`}return D.activeTreatments.length>0&&(re+=`**Treatments:** ${D.activeTreatments.map(M=>M.name).join(", ")}

`),D.daysSinceLastLog>2&&(re+=`📝 You haven't logged in ${D.daysSinceLastLog} days. Want to track how you're feeling?

`),re+="Overall, how are you feeling about your journey right now?",re},G=(P,D)=>D.topSymptoms.length>0?`${P}, let's track together! 📝 I noticed you've been dealing with ${D.topSymptoms[0].name} a lot.

What would you like to log right now?
• Your mood and energy level
• A specific symptom
• How you slept
• Something else?

Just tell me what you're experiencing!`:`Let's track together! 📝 What would you like to log?

• Your mood and energy
• A symptom you're experiencing
• How you slept
• Or something else?

What feels most relevant to you right now?`,J=(P,D,re)=>{const M=D.name,se=P.trim(),ge=se.toLowerCase();if(/^(thank|thanks)/i.test(ge))return xe(M);if(/how am i doing|my status|check in|give me a summary/i.test(ge))return Q(M,D);if(/log|track|record/i.test(ge))return G(M,D);const je=we(se,M);return je||F(se,D,re)},N=P=>{P.key==="Enter"&&!P.shiftKey&&(P.preventDefault(),K())},B=A.useMemo(()=>{const P=[];if(q.topSymptoms.length>0){const D=q.topSymptoms[0];P.push({label:`Track ${D.name}`,icon:s.jsx(pt,{size:16}),prompt:`I want to track my ${D.name}`})}else P.push({label:"Log symptom",icon:s.jsx(pt,{size:16}),prompt:"I want to log a symptom"});return P.push({label:"Track mood",icon:s.jsx(Et,{size:16}),prompt:"I want to track my mood"}),q.topSymptoms.length>0?P.push({label:"Get tips",icon:s.jsx(Qc,{size:16}),prompt:`Give me tips for ${q.topSymptoms[0].name}`}):P.push({label:"Get tips",icon:s.jsx(Qc,{size:16}),prompt:"Can you give me some tips for feeling better?"}),P.push({label:"My summary",icon:s.jsx(Fe,{size:16}),prompt:"How am I doing? Give me a summary."}),P},[q.topSymptoms]),fe=[{title:"Hot Flashes & Night Sweats",icon:"🔥",prompt:"Tell me about hot flashes and night sweats",color:"from-orange-400 to-red-500"},{title:"Sleep Issues",icon:"🌙",prompt:"How can I improve my sleep during menopause?",color:"from-indigo-400 to-purple-500"},{title:"Mood Changes",icon:"💭",prompt:"Why do I feel so anxious/emotional?",color:"from-pink-400 to-rose-500"},{title:"HRT & Medications",icon:"💊",prompt:"I want to learn about HRT options",color:"from-teal-400 to-cyan-500",isClinical:!0},{title:"Weight & Metabolism",icon:"⚖️",prompt:"Why is it so hard to lose weight now?",color:"from-amber-400 to-orange-500"},{title:"Supplements",icon:"🌿",prompt:"I want to learn about supplements",color:"from-green-400 to-emerald-500",isClinical:!0}],I=[{id:"hormone-therapy",title:"Hormone Therapy",icon:Fe,count:8,items:[{title:"Estrogen-Only (ET)",description:"For women without a uterus. Available as pills, patches, gels, sprays, and creams.",treatments:["Premarin","Estrace","Climara","Vivelle-Dot","Divigel","EstroGel"]},{title:"Combined (EPT)",description:"Estrogen + progesterone for women with a uterus. Protects uterine lining.",treatments:["Prempro","Activella","Bijuva","CombiPatch","Climara Pro"]},{title:"Vaginal Estrogen",description:"Low-dose local treatment for vaginal symptoms with minimal systemic absorption.",treatments:["Estrace Cream","Premarin Cream","Vagifem","Imvexxy","Estring"]}]},{id:"non-hormonal",title:"Non-Hormonal",icon:Et,count:6,items:[{title:"SSRIs/SNRIs",description:"Antidepressants that reduce hot flashes 50-60%. Good option if hormones aren't suitable.",treatments:["Paroxetine","Venlafaxine","Escitalopram","Desvenlafaxine","Duloxetine"]},{title:"Veozah (Fezolinetant)",description:"FDA-approved 2023. First non-hormonal drug specifically for hot flashes.",treatments:["Fezolinetant"]},{title:"Gabapentin",description:"Originally for seizures, helps with hot flashes and sleep.",treatments:["Gabapentin","Pregabalin"]}]},{id:"symptoms",title:"Symptom Relief",icon:pt,count:10,items:[{title:"Hot Flashes & Night Sweats",description:"Most common symptom. Treatment includes HRT, SSRIs, lifestyle changes.",treatments:["HRT","Paroxetine","Venlafaxine","Veozah","Gabapentin"]},{title:"Sleep Problems",description:"Often linked to night sweats or direct hormonal effects on sleep.",treatments:["HRT","Sleep hygiene","CBT-I","Melatonin","Gabapentin"]},{title:"Mood & Anxiety",description:"Hormone fluctuations affect brain chemistry. SSRIs can help.",treatments:["SSRIs","CBT","HRT","Exercise","Stress management"]}]},{id:"supplements",title:"Supplements",icon:Qc,count:7,items:[{title:"For Sleep",description:"Magnesium, melatonin, and valerian root may help sleep quality.",treatments:["Magnesium","Melatonin","Valerian Root","L-Theanine"]},{title:"For Hot Flashes",description:"Some evidence for soy isoflavones and black cohosh.",treatments:["Soy Isoflavones","Black Cohosh","Red Clover"]},{title:"For Bone Health",description:"Calcium and vitamin D essential for bone maintenance.",treatments:["Calcium","Vitamin D3","Vitamin K2","Magnesium"]}]}],ce=[{id:"q1",question:"What is HRT and is it right for me?",prompt:"tell me about hormone replacement therapy"},{id:"q2",question:"What are the risks of hormone therapy?",prompt:"what are the risks of hrt"},{id:"q3",question:"What are non-hormonal treatment options?",prompt:"non-hormonal treatments for menopause"},{id:"q4",question:"How long should I stay on HRT?",prompt:"how long should i stay on hrt"},{id:"q5",question:"What supplements help with menopause?",prompt:"supplements for menopause symptoms"},{id:"q6",question:"When should I see a doctor?",prompt:"when to see a doctor for menopause"}];return s.jsxs("div",{className:"flex flex-col h-[calc(100vh-120px)] -mx-4",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:r,className:"p-2 rounded-xl hover:bg-white/80 transition-colors","aria-label":"Go back",children:s.jsx(lt,{size:20,className:"text-muted-foreground"})}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg ring-4 ring-primary/20",children:s.jsx(Fe,{size:24,className:"text-white"})}),s.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Maya"}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),s.jsx("p",{className:"text-xs text-muted-foreground font-medium",children:"Your Menopause Guide"})]})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{onClick:()=>p(!m),className:`p-2 rounded-xl transition-colors ${m?"bg-primary/20 text-primary":"hover:bg-muted text-muted-foreground"}`,title:"Clinical Advisor",children:s.jsx(pt,{size:20})})})]}),m&&s.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 bg-gradient-to-b from-teal-50/50 to-white",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-2 shadow-lg",children:s.jsx(pt,{size:24,className:"text-white"})}),s.jsx("h3",{className:"font-bold text-lg text-gray-800",children:"Clinical Advisor"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Browse treatments, medications & clinical information"})]}),s.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4",children:s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(Ru,{size:16,className:"text-amber-600 mt-0.5 flex-shrink-0"}),s.jsxs("p",{className:"text-xs text-amber-800 leading-relaxed",children:[s.jsx("strong",{children:"Medical Disclaimer:"})," This information is for educational purposes only. Always consult your healthcare provider before starting or changing any treatment."]})]})}),s.jsx("div",{className:"relative mb-4",children:s.jsx("input",{type:"text",value:g,onChange:P=>x(P.target.value),placeholder:"Search treatments, symptoms, medications...",className:"w-full px-4 py-2.5 rounded-xl border-2 border-teal-200 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm"})}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("p",{className:"text-sm font-semibold text-gray-700",children:"Browse by Category"}),s.jsx("div",{className:"grid grid-cols-2 gap-2",children:I.map(P=>{const D=P.icon;return s.jsxs("button",{onClick:()=>b(w===P.id?null:P.id),className:`p-3 rounded-xl border-2 text-left transition-all ${w===P.id?"border-teal-500 bg-teal-50":"border-gray-100 bg-white hover:border-teal-300 hover:bg-teal-50/50"}`,children:[s.jsx(D,{size:20,className:`mb-2 ${w===P.id?"text-teal-600":"text-gray-500"}`}),s.jsx("p",{className:"text-xs font-semibold text-gray-800",children:P.title}),s.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:[P.count," topics"]})]},P.id)})}),w&&s.jsx("div",{className:"mt-4 p-4 bg-white rounded-xl border border-teal-200 shadow-sm",children:(ye=I.find(P=>P.id===w))==null?void 0:ye.items.map(P=>s.jsxs("div",{className:"mb-4 last:mb-0",children:[s.jsx("h4",{className:"font-semibold text-sm text-gray-800 mb-1",children:P.title}),s.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:P.description}),P.treatments&&s.jsx("div",{className:"mt-2 flex flex-wrap gap-1",children:P.treatments.map(D=>s.jsx("span",{className:"px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-xs",children:D},D))})]},P.title))})]}),s.jsxs("div",{className:"mt-6",children:[s.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-2",children:"Common Questions"}),s.jsx("div",{className:"space-y-2",children:ce.map(P=>s.jsx("button",{onClick:()=>{const D=Gm(P.prompt);D.length>0&&(n(re=>[...re,{id:Date.now().toString(),role:"assistant",content:D[0].content+`

⚠️ `+(D[0].disclaimer||"This information is for educational purposes. Consult your healthcare provider for personalized advice."),timestamp:new Date}]),p(!1))},className:"w-full p-3 text-left bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/50 transition-all",children:s.jsx("p",{className:"text-sm text-gray-800",children:P.question})},P.id))})]})]}),!m&&s.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4",children:[e.map((P,D)=>s.jsx("div",{className:`flex ${P.role==="user"?"justify-end":"justify-start"} animate-fadeIn`,style:{animationDelay:`${D*50}ms`},children:s.jsxs("div",{className:`max-w-[85%] rounded-2xl px-4 py-3 shadow-md ${P.role==="user"?"bg-gradient-to-r from-primary to-secondary text-white rounded-tr-sm":"bg-white border border-border rounded-tl-sm"}`,children:[P.role==="assistant"&&s.jsxs("div",{className:"flex items-center gap-2 mb-2 pb-2 border-b border-border/50",children:[s.jsx("div",{className:"w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center",children:s.jsx(Fe,{size:10,className:"text-white"})}),s.jsx("span",{className:"text-xs font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Maya"})]}),s.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:P.content})]})},P.id)),c&&s.jsx("div",{className:"flex justify-start",children:s.jsx("div",{className:"bg-white border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-md",children:s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-primary rounded-full animate-bounce",style:{animationDelay:"0ms"}}),s.jsx("div",{className:"w-2 h-2 bg-primary/60 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),s.jsx("div",{className:"w-2 h-2 bg-primary/30 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})}),s.jsx("div",{ref:v})]}),!m&&e.length===1&&s.jsxs("div",{className:"px-4 pb-2 space-y-4",children:[s.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:B.slice(0,4).map(P=>s.jsxs("button",{onClick:()=>l(P.prompt),className:"flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium whitespace-nowrap hover:from-primary/20 hover:to-secondary/20 transition-all border border-primary/20 hover:scale-105 active:scale-95",children:[P.icon,P.label]},P.label))}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"text-xs text-center text-muted-foreground font-medium",children:"Tap to chat, or use the pulse icon for clinical info:"}),s.jsx("div",{className:"grid grid-cols-2 gap-2",children:fe.map(P=>s.jsxs("button",{onClick:()=>{"isClinical"in P&&P.isClinical?p(!0):l(P.prompt)},className:`flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r ${P.color} text-white text-left hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-lg`,children:[s.jsx("span",{className:"text-xl",children:P.icon}),s.jsx("span",{className:"text-xs font-medium leading-tight",children:P.title})]},P.title))})]}),s.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-200",children:[s.jsx("p",{className:"text-xs font-medium text-amber-800 mb-1",children:"💡 Did you know?"}),s.jsx("p",{className:"text-xs text-amber-700",children:"Regular exercise can reduce hot flash frequency by up to 50%!"})]})]}),s.jsxs("div",{className:"px-4 py-3 border-t border-border bg-gradient-to-r from-primary/5 to-secondary/5",children:[s.jsxs("div",{className:"flex items-end gap-2",children:[s.jsxs("div",{className:"flex-1 relative",children:[s.jsx("textarea",{ref:S,value:o,onChange:P=>l(P.target.value),onKeyPress:N,placeholder:"Chat with Maya about how you're feeling...",className:"w-full px-4 py-3 pr-12 rounded-2xl border-2 border-primary/20 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-sm transition-all",rows:1,style:{maxHeight:"120px"}}),s.jsx("button",{onClick:()=>d(!c),className:`absolute right-3 bottom-3 p-2 rounded-full transition-all ${c?"bg-gradient-to-r from-primary to-secondary text-white shadow-lg animate-pulse":"text-muted-foreground hover:bg-primary/10 hover:text-primary"}`,children:c?s.jsx(mu,{size:18}):s.jsx(ti,{size:18})})]}),s.jsx(oe,{onClick:K,disabled:!o.trim(),icon:s.jsx(Ny,{size:18}),className:"bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-md",children:"Send"})]}),s.jsxs("div",{className:"flex items-center justify-center gap-2 mt-2",children:[s.jsx("div",{className:"w-1.5 h-1.5 bg-amber-500 rounded-full"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Maya is here to support you emotionally. For clinical information, tap the pulse icon."})]})]})]})},Iv=({onBack:r,onNavigate:e})=>{const n=[];return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-lavender/20 to-white",children:[s.jsx("div",{className:"bg-gradient-to-r from-primary via-secondary to-accent text-white",children:s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[r&&s.jsxs("button",{onClick:r,className:"flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors",children:[s.jsx(lt,{size:20}),"Back"]}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left",children:[s.jsx("div",{className:"w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-xl shrink-0",children:s.jsx("img",{src:"/images/stacy-felix.jpg",alt:gt.creator,className:"w-full h-full object-cover"})}),s.jsxs("div",{children:[s.jsx(We,{className:"bg-white/20 text-white mb-3",children:gt.credentials}),s.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold mb-2",children:gt.creator}),s.jsx("p",{className:"text-lg text-white/80",children:"Psychiatric Mental Health Nurse Practitioner"})]})]})]})}),s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12 space-y-12",children:[s.jsxs("section",{children:[s.jsxs("h2",{className:"font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3",children:[s.jsx(Et,{className:"text-accent"}),"My Story"]}),s.jsxs(te,{className:"p-6 sm:p-8 mb-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 border-l-4 border-l-pink-400",children:[s.jsx("h3",{className:"font-serif text-xl font-bold text-pink-700 mb-4",children:"Founder & Visionary"}),s.jsxs("div",{className:"text-gray-700 space-y-4",children:[s.jsx("p",{className:"leading-relaxed",children:"I have been personally navigating my own hormonal journey. This experience has given me deep understanding of both the science and the lived reality of what women go through during perimenopause and menopause."}),s.jsx("p",{className:"leading-relaxed",children:"This app is the tool I wish I could hand every woman who walks through my door struggling with these changes. You deserve a supportive guide who believes in you and walks with you along your journey. Hot Flash Hotties was created as a space where women can find education, support, and positivity as they navigate this transition."})]})]}),s.jsxs(te,{className:"p-6 sm:p-8 mb-6 bg-gradient-to-br from-violet-50 via-white to-purple-50 border-l-4 border-l-violet-500",children:[s.jsx("h3",{className:"font-serif text-xl font-bold text-violet-700 mb-4",children:"Experience and Credentials"}),s.jsxs("div",{className:"text-gray-700 space-y-4",children:[s.jsx("p",{className:"leading-relaxed",children:"Over 20 years of clinical nursing practice across the healthcare spectrum, specializing in mental health issues, psychiatric care, and holistic wellness. As a Board-Certified Psychiatric Mental Health Nurse Practitioner (PMHNP-BC), I combine advanced clinical training with compassionate, specialized support."}),s.jsx("p",{className:"leading-relaxed",children:"I have served as a Director of clinical programs, home health services, and mental health outpatient clinics, dedicated to building community resources and educational partnerships."})]})]}),s.jsxs(te,{className:"p-6 sm:p-8 mb-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50 border-l-4 border-l-indigo-500",children:[s.jsx("h3",{className:"font-serif text-xl font-bold text-indigo-700 mb-4",children:"My Approach"}),s.jsxs("div",{className:"text-gray-700 space-y-4",children:[s.jsx("p",{className:"leading-relaxed",children:"Clinical excellence meets empathy. I merge rigorous medical knowledge with personal understanding to address both the physical and emotional impact of hormonal changes."}),s.jsx("p",{className:"leading-relaxed",children:"I take a whole-person approach, integrating mental health, physical well-being, and lifestyle education. I believe in fostering an interactive, judgment-free community where women can share their stories, learn together, and actively participate in their own wellness journeys."})]})]}),s.jsxs(te,{className:"p-6 sm:p-8 mb-6 bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 border-l-4 border-l-fuchsia-500",children:[s.jsx("h3",{className:"font-serif text-xl font-bold text-fuchsia-700 mb-4",children:"What I Stand For"}),s.jsxs("div",{className:"text-gray-700 space-y-4",children:[s.jsxs("p",{className:"leading-relaxed",children:[s.jsx("strong",{className:"text-fuchsia-600",children:"Empowerment:"})," Transforming women to take control and thrive through their wellness journey."]}),s.jsxs("p",{className:"leading-relaxed",children:[s.jsx("strong",{className:"text-fuchsia-600",children:"Understanding:"})," Acknowledging that every woman's experience is unique."]}),s.jsxs("p",{className:"leading-relaxed",children:[s.jsx("strong",{className:"text-fuchsia-600",children:"Support:"})," Providing community and professional guidance so no woman feels isolated."]}),s.jsxs("p",{className:"leading-relaxed",children:[s.jsx("strong",{className:"text-fuchsia-600",children:"Positivity:"})," Uplifting and empowering women, reframing this transition as a powerful new chapter of life."]}),s.jsxs("p",{className:"leading-relaxed",children:[s.jsx("strong",{className:"text-fuchsia-600",children:"Solution-Focused:"})," Delivering actionable strategies, education, and tools to help women manage symptoms and regain control."]})]})]}),s.jsxs(te,{className:"p-6 sm:p-8 mb-6 bg-gradient-to-br from-amber-50 via-white to-orange-50 border-l-4 border-l-amber-500",children:[s.jsx("h3",{className:"font-serif text-xl font-bold text-amber-700 mb-4",children:"My Vision"}),s.jsx("div",{className:"text-gray-700 space-y-4",children:s.jsx("p",{className:"leading-relaxed",children:"To reach women globally with the support, evidence-based education, and positivity needed to confidently navigate menopause."})})]}),s.jsxs(te,{className:"p-6 sm:p-8 bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 border-l-4 border-l-rose-500",children:[s.jsx("h3",{className:"font-serif text-xl font-bold text-rose-700 mb-4",children:"A Note From Stacy"}),s.jsxs("div",{className:"text-gray-700 space-y-4",children:[s.jsx("p",{className:"leading-relaxed font-medium text-rose-800",children:"You are not alone."}),s.jsx("p",{className:"leading-relaxed",children:'You do not have to "endure" this journey and feel isolated. This is not just "a phase of aging" that you have to deal with by yourself. It is my goal to help you transform into your most beautiful version. I hope Hot Flash Hotties helps you feel seen, informed and empowered. Together, we will not just "survive", we will thrive.'})]})]})]}),n.length>0&&s.jsxs("section",{children:[s.jsxs("h2",{className:"font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3",children:[s.jsx(wy,{className:"text-primary"}),"Credentials & Experience"]}),s.jsx("div",{className:"grid sm:grid-cols-3 gap-6",children:n.map((o,l)=>s.jsxs(te,{hover:!0,className:"p-6 text-center",children:[s.jsx("div",{className:"w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary mb-4",children:o.icon}),s.jsx("h3",{className:"font-semibold mb-2",children:o.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:o.description})]},l))})]}),s.jsxs("section",{className:"text-center pb-8",children:[s.jsx("h2",{className:"font-serif text-2xl font-bold text-foreground mb-6",children:"Get in Touch"}),s.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:s.jsx(oe,{variant:"outline",icon:s.jsx(Zs,{size:18}),children:gt.supportEmail})})]}),s.jsx(te,{className:"p-6 bg-amber-50 border-amber-200",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx(er,{size:20,className:"text-amber-600 mt-0.5 shrink-0"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-amber-900 mb-2",children:"Important Note"}),s.jsxs("p",{className:"text-sm text-amber-800",children:["While ",gt.name," provides valuable tracking and educational resources, it does not replace professional medical advice. Always consult with your healthcare provider about symptoms, treatments, and health decisions."]}),s.jsx("p",{className:"text-sm text-amber-800 mt-3",children:"If you or someone you know is struggling or in crisis, help is available. You are never alone."}),s.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:[s.jsx("strong",{children:"National Suicide Prevention Lifeline:"})," Call or text ",s.jsx("strong",{children:"988"})," (Available 24/7, free, and confidential)"]})]})]})})]}),s.jsxs("div",{className:"bg-gradient-to-r from-primary to-secondary py-12 text-center text-white",children:[s.jsx("p",{className:"text-xl italic max-w-2xl mx-auto px-4",children:'"You are stronger than you know. And you are not alone on this journey."'}),s.jsxs("p",{className:"mt-4 font-semibold",children:["— ",gt.creator]})]})]})},Dv=({onSuccess:r})=>{const[e,n]=A.useState(""),[o,l]=A.useState(""),[c,d]=A.useState(!1),[m,p]=A.useState(!1),[g,x]=A.useState(""),[w,b]=A.useState(!1);A.useEffect(()=>{localStorage.getItem("psych-wise-pin")||d(!0)},[]);const v=K=>{c&&w?o.length<4&&l(o+K):e.length<4&&n(e+K),x("")},S=()=>{c&&w?l(o.slice(0,-1)):n(e.slice(0,-1))},T=()=>{if(c)w?o.length===4&&(e===o?(localStorage.setItem("psych-wise-pin",e),r()):(x("PINs do not match. Try again."),l(""),n(""),b(!1))):e.length===4&&b(!0);else{const K=localStorage.getItem("psych-wise-pin");e===K?r():(x("Incorrect PIN. Please try again."),n(""))}},j=()=>{localStorage.setItem("psych-wise-pin",""),r()},W=()=>{const K=c&&w?o:e;return s.jsx("div",{className:"flex gap-4 justify-center mb-8",children:[0,1,2,3].map(R=>s.jsx("div",{className:`w-4 h-4 rounded-full transition-all ${R<K.length?"bg-primary":"bg-white/30"}`},R))})},L=()=>{const K=["1","2","3","4","5","6","7","8","9","","0","⌫"];return s.jsx("div",{className:"grid grid-cols-3 gap-4 max-w-xs mx-auto",children:K.map((R,F)=>s.jsx("button",{onClick:()=>{R==="⌫"?S():R!==""&&v(R)},className:`h-16 rounded-2xl text-2xl font-semibold transition-all ${R===""?"bg-transparent":R==="⌫"?"bg-white/10 text-white hover:bg-white/20":"bg-white/10 text-white hover:bg-white/20 active:bg-white/30"}`,disabled:R==="",children:R},F))})},H=()=>c?w?"Confirm Your PIN":"Create a PIN":"Enter Your PIN",q=()=>c?w?"Enter your PIN again to confirm":"Create a 4-digit PIN to secure your health data":"Enter your PIN to access your wellness data";return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-primary via-secondary to-accent flex flex-col",children:[s.jsxs("div",{className:"pt-12 pb-8 text-center",children:[s.jsx("div",{className:"w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-4",children:s.jsx(Fe,{size:40,className:"text-white"})}),s.jsx("h1",{className:"font-serif text-3xl font-bold text-white mb-2",children:gt.name}),s.jsx("p",{className:"text-white/70",children:"Your Menopause Wellness Companion"})]}),s.jsx("div",{className:"flex-1 flex flex-col justify-center px-6",children:s.jsxs("div",{className:"bg-white/10 backdrop-blur rounded-3xl p-8",children:[s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4",children:s.jsx(_s,{size:28,className:"text-white"})}),s.jsx("h2",{className:"text-white text-xl font-semibold",children:H()}),s.jsx("p",{className:"text-white/70 text-sm mt-1",children:q()})]}),W(),g&&s.jsx("p",{className:"text-red-300 text-center text-sm mb-4",children:g}),L(),s.jsxs("div",{className:"mt-6 space-y-3",children:[s.jsx(oe,{fullWidth:!0,size:"lg",className:"bg-white text-primary hover:bg-white/90",onClick:T,disabled:c&&w?o.length<4:e.length<4,children:c?w?"Set PIN":"Next":"Unlock"}),c&&!w&&s.jsx("button",{onClick:j,className:"w-full text-white/60 text-sm hover:text-white/80 transition-colors",children:"Skip PIN setup for now"}),c&&w&&s.jsxs("button",{onClick:()=>{b(!1),l(""),n("")},className:"w-full flex items-center justify-center gap-2 text-white/60 text-sm hover:text-white/80 transition-colors",children:[s.jsx(lt,{size:14}),"Start over"]})]})]})}),s.jsx("div",{className:"text-center pb-8",children:s.jsx("p",{className:"text-white/50 text-xs",children:"Your health data is encrypted and stored securely on your device."})})]})},Ov=({onLoginSuccess:r,onBack:e})=>{const[n,o]=A.useState(""),[l,c]=A.useState(!1),[d,m]=A.useState(""),[p,g]=A.useState(!1),x=ui(b=>b.loginAdmin),w=async b=>{b.preventDefault(),m(""),g(!0),await new Promise(S=>setTimeout(S,500)),x(n)?r():(m("Invalid password. Please try again."),o("")),g(!1)};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-md",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4",children:s.jsx(er,{size:32,className:"text-white"})}),s.jsx("h1",{className:"font-serif text-2xl font-semibold text-foreground",children:"Admin Portal"}),s.jsx("p",{className:"text-muted-foreground mt-2",children:"Coach's Corner Management"})]}),s.jsxs(te,{className:"p-6",children:[s.jsxs("form",{onSubmit:w,className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Admin Password"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(_s,{size:18,className:"text-muted-foreground"})}),s.jsx("input",{type:l?"text":"password",value:n,onChange:b=>o(b.target.value),placeholder:"Enter admin password",className:"w-full pl-10 pr-10 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors",required:!0}),s.jsx("button",{type:"button",onClick:()=>c(!l),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors",children:l?s.jsx(Au,{size:18}):s.jsx(Mu,{size:18})})]})]}),d&&s.jsxs("div",{className:"flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm",children:[s.jsx(Ru,{size:16}),d]}),s.jsx(oe,{type:"submit",fullWidth:!0,size:"lg",loading:p,children:p?"Authenticating...":"Sign In"})]}),s.jsx(oe,{variant:"ghost",fullWidth:!0,className:"mt-4",onClick:e,children:"Back to App"})]}),s.jsx("p",{className:"text-center text-xs text-muted-foreground mt-6",children:"This admin portal is for authorized content managers only."})]})})},eu={webinar:s.jsx(fu,{size:18,className:"text-accent"}),support_group:s.jsx(tr,{size:18,className:"text-secondary"}),workshop:s.jsx(qa,{size:18,className:"text-primary"}),seminar:s.jsx(tr,{size:18,className:"text-secondary"}),other:s.jsx(Ur,{size:18,className:"text-muted-foreground"})},tu={webinar:"Webinar",support_group:"Support Group",workshop:"Workshop",seminar:"Seminar",other:"Other"},Lv=({onLogout:r})=>{const e=Ky(),n=ae(Y=>Y.coachCornerInterest),{addEvent:o,updateEvent:l,deleteEvent:c,toggleEventActive:d,currentMessage:m,setStacyMessage:p,clearStacyMessage:g,logoutAdmin:x}=ui(),[w,b]=A.useState("events"),[v,S]=A.useState(!1),[T,j]=A.useState(null),[W,L]=A.useState(!1),[H,q]=A.useState((m==null?void 0:m.message)||""),[K,R]=A.useState({title:"",description:"",eventType:"webinar",date:"",time:"",location:"",isVirtual:!0,link:""}),F=()=>{x(),r()},me=()=>{j(null),R({title:"",description:"",eventType:"webinar",date:"",time:"",location:"",isVirtual:!0,link:""}),S(!0)},ke=Y=>{j(Y),R({title:Y.title,description:Y.description,eventType:Y.eventType,date:Y.date,time:Y.time,location:Y.location,isVirtual:Y.isVirtual,link:Y.link||""}),S(!0)},Pe=()=>{!K.title||!K.date||!K.time||(T?l(T.id,{...K}):o({...K,isActive:!0}),S(!1),j(null))},X=Y=>{confirm("Are you sure you want to delete this event?")&&c(Y)},V=()=>{H.trim()&&(p(H.trim()),L(!1))},ne=Y=>new Date(Y).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return s.jsxs("div",{className:"min-h-screen bg-muted/30",children:[s.jsx("header",{className:"bg-white border-b border-border sticky top-0 z-40",children:s.jsx("div",{className:"max-w-4xl mx-auto px-4 py-4",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center",children:s.jsx(er,{size:20,className:"text-white"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"font-semibold text-foreground",children:"Admin Dashboard"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Coach's Corner Management"})]})]}),s.jsx(oe,{variant:"ghost",size:"sm",onClick:F,icon:s.jsx($f,{size:16}),children:"Logout"})]})})}),s.jsx("div",{className:"bg-white border-b border-border",children:s.jsx("div",{className:"max-w-4xl mx-auto px-4",children:s.jsxs("div",{className:"flex gap-6",children:[s.jsxs("button",{onClick:()=>b("events"),className:`py-3 text-sm font-medium border-b-2 transition-colors ${w==="events"?"border-primary text-primary":"border-transparent text-muted-foreground hover:text-foreground"}`,children:["Events (",e.filter(Y=>Y.isActive).length,")"]}),s.jsx("button",{onClick:()=>b("message"),className:`py-3 text-sm font-medium border-b-2 transition-colors ${w==="message"?"border-primary text-primary":"border-transparent text-muted-foreground hover:text-foreground"}`,children:"Stacy's Message"}),s.jsxs("button",{onClick:()=>b("interest"),className:`py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${w==="interest"?"border-primary text-primary":"border-transparent text-muted-foreground hover:text-foreground"}`,children:[s.jsx(za,{size:14}),"Interest Signups",n&&s.jsx("span",{className:"bg-primary text-white text-xs px-1.5 py-0.5 rounded-full",children:n?1:0})]})]})})}),s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-6",children:[w==="events"&&s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx(oe,{onClick:me,icon:s.jsx(Yr,{size:18}),children:"Add Event"})}),s.jsxs("div",{className:"space-y-3",children:[e.map(Y=>s.jsx(te,{className:`p-4 ${Y.isActive?"":"opacity-60"}`,children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0",children:eu[Y.eventType]}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-foreground",children:Y.title}),s.jsx(We,{variant:Y.isActive?"success":"secondary",className:"mt-1",children:Y.isActive?"Active":"Inactive"})]}),s.jsxs("div",{className:"flex gap-1 shrink-0",children:[s.jsx("button",{onClick:()=>d(Y.id),className:`p-2 rounded-lg transition-colors ${Y.isActive?"bg-yellow-100 text-yellow-700 hover:bg-yellow-200":"bg-green-100 text-green-700 hover:bg-green-200"}`,title:Y.isActive?"Deactivate":"Activate",children:Y.isActive?s.jsx(li,{size:16}):s.jsx(Le,{size:16})}),s.jsx("button",{onClick:()=>ke(Y),className:"p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors",children:s.jsx(Sm,{size:16})}),s.jsx("button",{onClick:()=>X(Y.id),className:"p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors",children:s.jsx(tl,{size:16})})]})]}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1 line-clamp-2",children:Y.description}),s.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-3 text-xs text-muted-foreground",children:[s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(Ur,{size:12}),ne(Y.date)]}),s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(qr,{size:12}),Y.time]}),s.jsxs("span",{className:"flex items-center gap-1",children:[Y.isVirtual?s.jsx(bm,{size:12}):s.jsx(jm,{size:12}),Y.location]}),s.jsxs("span",{className:"flex items-center gap-1",children:[eu[Y.eventType],tu[Y.eventType]]})]})]})]})},Y.id)),e.length===0&&s.jsxs(te,{className:"p-8 text-center",children:[s.jsx(Ur,{size:48,className:"mx-auto text-muted-foreground/40 mb-4"}),s.jsx("h3",{className:"font-medium text-foreground",children:"No events yet"}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'Click "Add Event" to create your first event.'})]})]})]}),w==="message"&&s.jsxs("div",{className:"space-y-4",children:[s.jsxs(te,{className:"p-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(jy,{size:20,className:"text-primary"}),s.jsx("h3",{className:"font-semibold",children:"Stacy's Motivational Message"})]}),s.jsx(oe,{variant:"outline",size:"sm",onClick:()=>{q((m==null?void 0:m.message)||""),L(!0)},icon:s.jsx(Sm,{size:14}),children:"Edit"})]}),m?s.jsxs("div",{className:"p-4 rounded-lg bg-lavender/30 border border-lavender/40",children:[s.jsxs("p",{className:"text-sm italic text-muted-foreground",children:['"',m.message,'"']}),s.jsx("p",{className:"text-xs font-medium text-primary mt-3",children:"— Stacy"})]}):s.jsx("div",{className:"p-4 rounded-lg bg-muted/50 text-center",children:s.jsx("p",{className:"text-sm text-muted-foreground",children:"No message set yet."})}),m&&s.jsx(oe,{variant:"ghost",size:"sm",className:"mt-3 text-destructive hover:text-destructive",onClick:()=>{confirm("Clear Stacy's message?")&&g()},children:"Clear Message"})]}),W&&s.jsxs(te,{className:"p-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"font-semibold",children:"Edit Stacy's Message"}),s.jsx("button",{onClick:()=>L(!1),className:"p-1 rounded hover:bg-muted transition-colors",children:s.jsx(li,{size:20})})]}),s.jsx("textarea",{value:H,onChange:Y=>q(Y.target.value),placeholder:"Enter Stacy's motivational message...",rows:4,className:"w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"}),s.jsxs("div",{className:"flex justify-end gap-2 mt-4",children:[s.jsx(oe,{variant:"outline",onClick:()=>L(!1),children:"Cancel"}),s.jsx(oe,{onClick:V,disabled:!H.trim(),children:"Save Message"})]})]}),s.jsxs(te,{className:"p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5",children:[s.jsx("h4",{className:"text-sm font-medium text-muted-foreground mb-3",children:"Preview (as seen on home page)"}),s.jsx("div",{className:"p-4 rounded-lg bg-lavender/30 border border-lavender/40",children:H?s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"text-sm italic text-muted-foreground",children:['"',H,'"']}),s.jsx("p",{className:"text-xs font-medium text-primary mt-3",children:"— Stacy"})]}):s.jsx("p",{className:"text-sm text-muted-foreground/60 italic",children:"No message to display"})})]})]}),w==="interest"&&s.jsx("div",{className:"space-y-4",children:s.jsxs(te,{className:"p-6",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(za,{size:20,className:"text-primary"}),s.jsx("h3",{className:"font-semibold",children:"Coach's Corner Interest Signups"})]}),s.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Users who have signed up to be notified when Coach's Corner becomes available."}),n?s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"p-4 rounded-lg bg-green-50 border border-green-200",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-green-100 flex items-center justify-center",children:s.jsx(Zs,{size:24,className:"text-green-600"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-medium text-green-800",children:n.email}),s.jsxs("p",{className:"text-sm text-green-600/80",children:["Signed up: ",new Date(n.signedUpAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})]})]}),s.jsx(We,{variant:"success",size:"sm",children:"Confirmed"})]})}),s.jsxs("div",{className:"p-4 rounded-lg bg-muted/50",children:[s.jsx("h4",{className:"text-sm font-medium mb-2",children:"What to do next:"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"1. When Coach's Corner is ready, send an email to this user"}),s.jsx("li",{children:"2. Consider exporting this list for your email marketing platform"}),s.jsx("li",{children:"3. Cross-reference with your user database"})]})]})]}):s.jsxs("div",{className:"text-center py-12",children:[s.jsx(za,{size:48,className:"mx-auto text-muted-foreground/40 mb-4"}),s.jsx("h4",{className:"font-medium text-foreground mb-2",children:"No signups yet"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"When users sign up to be notified, their information will appear here."})]})]})})]}),v&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:s.jsxs(te,{className:"w-full max-w-lg max-h-[90vh] overflow-y-auto",children:[s.jsxs("div",{className:"sticky top-0 bg-white border-b border-border p-4 flex items-center justify-between",children:[s.jsx("button",{onClick:()=>S(!1),className:"p-1 rounded hover:bg-muted transition-colors",children:s.jsx(zf,{size:20})}),s.jsx("h3",{className:"font-semibold",children:T?"Edit Event":"Add New Event"}),s.jsx("div",{className:"w-6"})]}),s.jsxs("div",{className:"p-4 space-y-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-sm font-medium text-foreground mb-1",children:["Event Title ",s.jsx("span",{className:"text-destructive",children:"*"})]}),s.jsx("input",{type:"text",value:K.title,onChange:Y=>R({...K,title:Y.target.value}),placeholder:"e.g., Understanding Perimenopause",className:"w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:"Description"}),s.jsx("textarea",{value:K.description,onChange:Y=>R({...K,description:Y.target.value}),placeholder:"Brief description of the event...",rows:3,className:"w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:"Event Type"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.keys(tu).map(Y=>s.jsx("button",{onClick:()=>R({...K,eventType:Y}),className:`p-2 rounded-lg border text-sm transition-colors ${K.eventType===Y?"border-primary bg-primary/10 text-primary":"border-border hover:border-primary/50"}`,children:s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[eu[Y],s.jsx("span",{children:tu[Y]})]})},Y))})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-sm font-medium text-foreground mb-1",children:["Date ",s.jsx("span",{className:"text-destructive",children:"*"})]}),s.jsx("input",{type:"date",value:K.date,onChange:Y=>R({...K,date:Y.target.value}),className:"w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",required:!0})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-sm font-medium text-foreground mb-1",children:["Time ",s.jsx("span",{className:"text-destructive",children:"*"})]}),s.jsx("input",{type:"text",value:K.time,onChange:Y=>R({...K,time:Y.target.value}),placeholder:"e.g., 2:00 PM EST",className:"w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",required:!0})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:"Event Format"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{onClick:()=>R({...K,isVirtual:!0}),className:`flex-1 p-3 rounded-lg border flex items-center justify-center gap-2 transition-colors ${K.isVirtual?"border-primary bg-primary/10 text-primary":"border-border hover:border-primary/50"}`,children:[s.jsx(bm,{size:18}),"Online"]}),s.jsxs("button",{onClick:()=>R({...K,isVirtual:!1}),className:`flex-1 p-3 rounded-lg border flex items-center justify-center gap-2 transition-colors ${K.isVirtual?"border-border hover:border-primary/50":"border-primary bg-primary/10 text-primary"}`,children:[s.jsx(jm,{size:18}),"In-Person"]})]})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-sm font-medium text-foreground mb-1",children:["Location ",s.jsx("span",{className:"text-destructive",children:"*"})]}),s.jsx("input",{type:"text",value:K.location,onChange:Y=>R({...K,location:Y.target.value}),placeholder:K.isVirtual?"e.g., Online / Zoom":"e.g., San Diego, CA",className:"w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",required:!0})]}),K.isVirtual&&s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:"Event Link"}),s.jsx("input",{type:"url",value:K.link,onChange:Y=>R({...K,link:Y.target.value}),placeholder:"https://zoom.us/j/...",className:"w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"})]}),!K.title||!K.date||!K.time||!K.location?s.jsxs("div",{className:"flex items-center gap-2 p-3 rounded-lg bg-yellow-50 text-yellow-800 text-sm",children:[s.jsx(Ru,{size:16}),"Please fill in all required fields (*)"]}):null,s.jsxs("div",{className:"flex gap-2 pt-4",children:[s.jsx(oe,{variant:"outline",fullWidth:!0,onClick:()=>S(!1),children:"Cancel"}),s.jsx(oe,{fullWidth:!0,onClick:Pe,disabled:!K.title||!K.date||!K.time||!K.location,children:T?"Save Changes":"Add Event"})]})]})]})})]})};function rl(r,e){var n={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(n[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(r);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(r,o[l])&&(n[o[l]]=r[o[l]]);return n}function zv(r,e,n,o){function l(c){return c instanceof n?c:new n(function(d){d(c)})}return new(n||(n=Promise))(function(c,d){function m(x){try{g(o.next(x))}catch(w){d(w)}}function p(x){try{g(o.throw(x))}catch(w){d(w)}}function g(x){x.done?c(x.value):l(x.value).then(m,p)}g((o=o.apply(r,e||[])).next())})}const Wv=r=>r?(...e)=>r(...e):(...e)=>fetch(...e);class Wu extends Error{constructor(e,n="FunctionsError",o){super(e),this.name=n,this.context=o}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class $v extends Wu{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Jm extends Wu{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Qm extends Wu{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var yu;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(yu||(yu={}));class Hv{constructor(e,{headers:n={},customFetch:o,region:l=yu.Any}={}){this.url=e,this.headers=n,this.region=l,this.fetch=Wv(o)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return zv(this,arguments,void 0,function*(n,o={}){var l;let c,d;try{const{headers:m,method:p,body:g,signal:x,timeout:w}=o;let b={},{region:v}=o;v||(v=this.region);const S=new URL(`${this.url}/${n}`);v&&v!=="any"&&(b["x-region"]=v,S.searchParams.set("forceFunctionRegion",v));let T;g&&(m&&!Object.prototype.hasOwnProperty.call(m,"Content-Type")||!m)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(b["Content-Type"]="application/octet-stream",T=g):typeof g=="string"?(b["Content-Type"]="text/plain",T=g):typeof FormData<"u"&&g instanceof FormData?T=g:(b["Content-Type"]="application/json",T=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?T=JSON.stringify(g):T=g;let j=x;w&&(d=new AbortController,c=setTimeout(()=>d.abort(),w),x?(j=d.signal,x.addEventListener("abort",()=>d.abort())):j=d.signal);const W=yield this.fetch(S.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},b),this.headers),m),body:T,signal:j}).catch(K=>{throw new $v(K)}),L=W.headers.get("x-relay-error");if(L&&L==="true")throw new Jm(W);if(!W.ok)throw new Qm(W);let H=((l=W.headers.get("Content-Type"))!==null&&l!==void 0?l:"text/plain").split(";")[0].trim(),q;return H==="application/json"?q=yield W.json():H==="application/octet-stream"||H==="application/pdf"?q=yield W.blob():H==="text/event-stream"?q=W:H==="multipart/form-data"?q=yield W.formData():q=yield W.text(),{data:q,error:null,response:W}}catch(m){return{data:null,error:m,response:m instanceof Qm||m instanceof Jm?m.context:void 0}}finally{c&&clearTimeout(c)}})}}const Jf=3,Xm=r=>Math.min(1e3*2**r,3e4),Bv=[520,503],Qf=["GET","HEAD","OPTIONS"];var Zm=class extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function ef(r,e){return new Promise(n=>{if(e!=null&&e.aborted){n();return}const o=setTimeout(()=>{e==null||e.removeEventListener("abort",l),n()},r);function l(){clearTimeout(o),n()}e==null||e.addEventListener("abort",l)})}function Fv(r,e,n,o){return!(!o||n>=Jf||!Qf.includes(r)||!Bv.includes(e))}var Uv=class{constructor(r){var e,n,o,l,c;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(e=r.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=r.signal,this.isMaybeSingle=(n=r.isMaybeSingle)!==null&&n!==void 0?n:!1,this.shouldStripNulls=(o=r.shouldStripNulls)!==null&&o!==void 0?o:!1,this.urlLengthLimit=(l=r.urlLengthLimit)!==null&&l!==void 0?l:8e3,this.retryEnabled=(c=r.retry)!==null&&c!==void 0?c:!0,r.fetch?this.fetch=r.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(r,e){return this.headers=new Headers(this.headers),this.headers.set(r,e),this}retry(r){return this.retryEnabled=r,this}then(r,e){var n=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const d=this.headers.get("Accept");d==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!d||d==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const o=this.fetch;let c=(async()=>{let d=0;for(;;){const g={};n.headers.forEach((w,b)=>{g[b]=w}),d>0&&(g["X-Retry-Count"]=String(d));let x;try{x=await o(n.url.toString(),{method:n.method,headers:g,body:JSON.stringify(n.body,(w,b)=>typeof b=="bigint"?b.toString():b),signal:n.signal})}catch(w){if((w==null?void 0:w.name)==="AbortError"||(w==null?void 0:w.code)==="ABORT_ERR"||!Qf.includes(n.method))throw w;if(n.retryEnabled&&d<Jf){const b=Xm(d);d++,await ef(b,n.signal);continue}throw w}if(Fv(n.method,x.status,d,n.retryEnabled)){var m,p;const w=(m=(p=x.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&m!==void 0?m:null,b=w!==null?Math.max(0,parseInt(w,10)||0)*1e3:Xm(d);await x.text(),d++,await ef(b,n.signal);continue}return await n.processResponse(x)}})();return this.shouldThrowOnError||(c=c.catch(d=>{var m;let p="",g="",x="";const w=d==null?void 0:d.cause;if(w){var b,v,S,T;const L=(b=w==null?void 0:w.message)!==null&&b!==void 0?b:"",H=(v=w==null?void 0:w.code)!==null&&v!==void 0?v:"";p=`${(S=d==null?void 0:d.name)!==null&&S!==void 0?S:"FetchError"}: ${d==null?void 0:d.message}`,p+=`

Caused by: ${(T=w==null?void 0:w.name)!==null&&T!==void 0?T:"Error"}: ${L}`,H&&(p+=` (${H})`),w!=null&&w.stack&&(p+=`
${w.stack}`)}else{var j;p=(j=d==null?void 0:d.stack)!==null&&j!==void 0?j:""}const W=this.url.toString().length;return(d==null?void 0:d.name)==="AbortError"||(d==null?void 0:d.code)==="ABORT_ERR"?(x="",g="Request was aborted (timeout or manual cancellation)",W>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${W} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((w==null?void 0:w.name)==="HeadersOverflowError"||(w==null?void 0:w.code)==="UND_ERR_HEADERS_OVERFLOW")&&(x="",g="HTTP headers exceeded server limits (typically 16KB)",W>this.urlLengthLimit&&(g+=`. Your request URL is ${W} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(m=d==null?void 0:d.name)!==null&&m!==void 0?m:"FetchError"}: ${d==null?void 0:d.message}`,details:p,hint:g,code:x},data:null,count:null,status:0,statusText:""}})),c.then(r,e)}async processResponse(r){var e=this;let n=null,o=null,l=null,c=r.status,d=r.statusText;if(r.ok){var m,p;if(e.method!=="HEAD"){var g;const b=await r.text();if(b!=="")if(e.headers.get("Accept")==="text/csv")o=b;else if(e.headers.get("Accept")&&(!((g=e.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))o=b;else try{o=JSON.parse(b)}catch{if(n={message:b},o=null,e.shouldThrowOnError)throw new Zm({message:b,details:"",hint:"",code:""})}}const x=(m=e.headers.get("Prefer"))===null||m===void 0?void 0:m.match(/count=(exact|planned|estimated)/),w=(p=r.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");x&&w&&w.length>1&&(l=parseInt(w[1])),e.isMaybeSingle&&Array.isArray(o)&&(o.length>1?(n={code:"PGRST116",details:`Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},o=null,l=null,c=406,d="Not Acceptable"):o.length===1?o=o[0]:o=null)}else{const x=await r.text();try{n=JSON.parse(x),Array.isArray(n)&&r.status===404&&(o=[],n=null,c=200,d="OK")}catch{r.status===404&&x===""?(c=204,d="No Content"):n={message:x}}if(n&&e.shouldThrowOnError)throw new Zm(n)}return{success:n===null,error:n,data:o,count:l,status:c,statusText:d}}returns(){return this}overrideTypes(){return this}},qv=class extends Uv{throwOnError(){return super.throwOnError()}select(r){let e=!1;const n=(r??"*").split("").map(o=>/\s/.test(o)&&!e?"":(o==='"'&&(e=!e),o)).join("");return this.url.searchParams.set("select",n),this.headers.append("Prefer","return=representation"),this}order(r,{ascending:e=!0,nullsFirst:n,foreignTable:o,referencedTable:l=o}={}){const c=l?`${l}.order`:"order",d=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${d?`${d},`:""}${r}.${e?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(r,{foreignTable:e,referencedTable:n=e}={}){const o=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(o,`${r}`),this}range(r,e,{foreignTable:n,referencedTable:o=n}={}){const l=typeof o>"u"?"offset":`${o}.offset`,c=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(l,`${r}`),this.url.searchParams.set(c,`${e-r+1}`),this}abortSignal(r){return this.signal=r,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:r=!1,verbose:e=!1,settings:n=!1,buffers:o=!1,wal:l=!1,format:c="text"}={}){var d;const m=[r?"analyze":null,e?"verbose":null,n?"settings":null,o?"buffers":null,l?"wal":null].filter(Boolean).join("|"),p=(d=this.headers.get("Accept"))!==null&&d!==void 0?d:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${p}"; options=${m};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(r){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${r}`),this}};const tf=new RegExp("[,()]");var si=class extends qv{throwOnError(){return super.throwOnError()}eq(r,e){return this.url.searchParams.append(r,`eq.${e}`),this}neq(r,e){return this.url.searchParams.append(r,`neq.${e}`),this}gt(r,e){return this.url.searchParams.append(r,`gt.${e}`),this}gte(r,e){return this.url.searchParams.append(r,`gte.${e}`),this}lt(r,e){return this.url.searchParams.append(r,`lt.${e}`),this}lte(r,e){return this.url.searchParams.append(r,`lte.${e}`),this}like(r,e){return this.url.searchParams.append(r,`like.${e}`),this}likeAllOf(r,e){return this.url.searchParams.append(r,`like(all).{${e.join(",")}}`),this}likeAnyOf(r,e){return this.url.searchParams.append(r,`like(any).{${e.join(",")}}`),this}ilike(r,e){return this.url.searchParams.append(r,`ilike.${e}`),this}ilikeAllOf(r,e){return this.url.searchParams.append(r,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(r,e){return this.url.searchParams.append(r,`ilike(any).{${e.join(",")}}`),this}regexMatch(r,e){return this.url.searchParams.append(r,`match.${e}`),this}regexIMatch(r,e){return this.url.searchParams.append(r,`imatch.${e}`),this}is(r,e){return this.url.searchParams.append(r,`is.${e}`),this}isDistinct(r,e){return this.url.searchParams.append(r,`isdistinct.${e}`),this}in(r,e){const n=Array.from(new Set(e)).map(o=>typeof o=="string"&&tf.test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(r,`in.(${n})`),this}notIn(r,e){const n=Array.from(new Set(e)).map(o=>typeof o=="string"&&tf.test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(r,`not.in.(${n})`),this}contains(r,e){return typeof e=="string"?this.url.searchParams.append(r,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(r,`cs.{${e.join(",")}}`):this.url.searchParams.append(r,`cs.${JSON.stringify(e)}`),this}containedBy(r,e){return typeof e=="string"?this.url.searchParams.append(r,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(r,`cd.{${e.join(",")}}`):this.url.searchParams.append(r,`cd.${JSON.stringify(e)}`),this}rangeGt(r,e){return this.url.searchParams.append(r,`sr.${e}`),this}rangeGte(r,e){return this.url.searchParams.append(r,`nxl.${e}`),this}rangeLt(r,e){return this.url.searchParams.append(r,`sl.${e}`),this}rangeLte(r,e){return this.url.searchParams.append(r,`nxr.${e}`),this}rangeAdjacent(r,e){return this.url.searchParams.append(r,`adj.${e}`),this}overlaps(r,e){return typeof e=="string"?this.url.searchParams.append(r,`ov.${e}`):this.url.searchParams.append(r,`ov.{${e.join(",")}}`),this}textSearch(r,e,{config:n,type:o}={}){let l="";o==="plain"?l="pl":o==="phrase"?l="ph":o==="websearch"&&(l="w");const c=n===void 0?"":`(${n})`;return this.url.searchParams.append(r,`${l}fts${c}.${e}`),this}match(r){return Object.entries(r).filter(([e,n])=>n!==void 0).forEach(([e,n])=>{this.url.searchParams.append(e,`eq.${n}`)}),this}not(r,e,n){return this.url.searchParams.append(r,`not.${e}.${n}`),this}or(r,{foreignTable:e,referencedTable:n=e}={}){const o=n?`${n}.or`:"or";return this.url.searchParams.append(o,`(${r})`),this}filter(r,e,n){return this.url.searchParams.append(r,`${e}.${n}`),this}},Yv=class{constructor(r,{headers:e={},schema:n,fetch:o,urlLengthLimit:l=8e3,retry:c}){this.url=r,this.headers=new Headers(e),this.schema=n,this.fetch=o,this.urlLengthLimit=l,this.retry=c}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(r,e){const{head:n=!1,count:o}=e??{},l=n?"HEAD":"GET";let c=!1;const d=(r??"*").split("").map(g=>/\s/.test(g)&&!c?"":(g==='"'&&(c=!c),g)).join(""),{url:m,headers:p}=this.cloneRequestState();return m.searchParams.set("select",d),o&&p.append("Prefer",`count=${o}`),new si({method:l,url:m,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(r,{count:e,defaultToNull:n=!0}={}){var o;const l="POST",{url:c,headers:d}=this.cloneRequestState();if(e&&d.append("Prefer",`count=${e}`),n||d.append("Prefer","missing=default"),Array.isArray(r)){const m=r.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(m.length>0){const p=[...new Set(m)].map(g=>`"${g}"`);c.searchParams.set("columns",p.join(","))}}return new si({method:l,url:c,headers:d,schema:this.schema,body:r,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(r,{onConflict:e,ignoreDuplicates:n=!1,count:o,defaultToNull:l=!0}={}){var c;const d="POST",{url:m,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${n?"ignore":"merge"}-duplicates`),e!==void 0&&m.searchParams.set("on_conflict",e),o&&p.append("Prefer",`count=${o}`),l||p.append("Prefer","missing=default"),Array.isArray(r)){const g=r.reduce((x,w)=>x.concat(Object.keys(w)),[]);if(g.length>0){const x=[...new Set(g)].map(w=>`"${w}"`);m.searchParams.set("columns",x.join(","))}}return new si({method:d,url:m,headers:p,schema:this.schema,body:r,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(r,{count:e}={}){var n;const o="PATCH",{url:l,headers:c}=this.cloneRequestState();return e&&c.append("Prefer",`count=${e}`),new si({method:o,url:l,headers:c,schema:this.schema,body:r,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:r}={}){var e;const n="DELETE",{url:o,headers:l}=this.cloneRequestState();return r&&l.append("Prefer",`count=${r}`),new si({method:n,url:o,headers:l,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function io(r){"@babel/helpers - typeof";return io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},io(r)}function Vv(r,e){if(io(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var o=n.call(r,e);if(io(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Gv(r){var e=Vv(r,"string");return io(e)=="symbol"?e:e+""}function Kv(r,e,n){return(e=Gv(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function sf(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),n.push.apply(n,o)}return n}function Ca(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sf(Object(n),!0).forEach(function(o){Kv(r,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):sf(Object(n)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))})}return r}var Jv=class Xf{constructor(e,{headers:n={},schema:o,fetch:l,timeout:c,urlLengthLimit:d=8e3,retry:m}={}){this.url=e,this.headers=new Headers(n),this.schemaName=o,this.urlLengthLimit=d;const p=l??globalThis.fetch;c!==void 0&&c>0?this.fetch=(g,x)=>{const w=new AbortController,b=setTimeout(()=>w.abort(),c),v=x==null?void 0:x.signal;if(v){if(v.aborted)return clearTimeout(b),p(g,x);const S=()=>{clearTimeout(b),w.abort()};return v.addEventListener("abort",S,{once:!0}),p(g,Ca(Ca({},x),{},{signal:w.signal})).finally(()=>{clearTimeout(b),v.removeEventListener("abort",S)})}return p(g,Ca(Ca({},x),{},{signal:w.signal})).finally(()=>clearTimeout(b))}:this.fetch=p,this.retry=m}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Yv(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Xf(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,n={},{head:o=!1,get:l=!1,count:c}={}){var d;let m;const p=new URL(`${this.url}/rpc/${e}`);let g;const x=v=>v!==null&&typeof v=="object"&&(!Array.isArray(v)||v.some(x)),w=o&&Object.values(n).some(x);w?(m="POST",g=n):o||l?(m=o?"HEAD":"GET",Object.entries(n).filter(([v,S])=>S!==void 0).map(([v,S])=>[v,Array.isArray(S)?`{${S.join(",")}}`:`${S}`]).forEach(([v,S])=>{p.searchParams.append(v,S)})):(m="POST",g=n);const b=new Headers(this.headers);return w?b.set("Prefer",c?`count=${c},return=minimal`:"return=minimal"):c&&b.set("Prefer",`count=${c}`),new si({method:m,url:p,headers:b,schema:this.schemaName,body:g,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Qv{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const n=globalThis;if(typeof globalThis<"u"&&typeof n.WebSocket<"u")return{type:"native",wsConstructor:n.WebSocket};const o=typeof global<"u"?global:void 0;if(o&&typeof o.WebSocket<"u")return{type:"native",wsConstructor:o.WebSocket};if(typeof globalThis<"u"&&typeof n.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&n.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const l=globalThis.process;if(l){const c=l.versions;if(c&&c.node){const d=c.node,m=parseInt(d.replace(/^v/,"").split(".")[0]);return m>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${m} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${m} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let n=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(n+=`

Suggested solution: ${e.workaround}`),new Error(n)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Xv="2.108.2",Zv=`realtime-js/${Xv}`,e0="1.0.0",Zf="2.0.0",t0=Zf,s0=1e4,r0=100,Hr={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ep={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},xu={connecting:"connecting",closing:"closing",closed:"closed"};class n0{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,n){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return n(this._binaryEncodeUserBroadcastPush(e));let o=[e.join_ref,e.ref,e.topic,e.event,e.payload];return n(JSON.stringify(o))}_binaryEncodeUserBroadcastPush(e){var n;return this._isArrayBuffer((n=e.payload)===null||n===void 0?void 0:n.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var n,o;const l=(o=(n=e.payload)===null||n===void 0?void 0:n.payload)!==null&&o!==void 0?o:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,l)}_encodeJsonUserBroadcastPush(e){var n,o;const l=(o=(n=e.payload)===null||n===void 0?void 0:n.payload)!==null&&o!==void 0?o:{},d=new TextEncoder().encode(JSON.stringify(l)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,d)}_encodeUserBroadcastPush(e,n,o){var l,c;const d=e.topic,m=(l=e.ref)!==null&&l!==void 0?l:"",p=(c=e.join_ref)!==null&&c!==void 0?c:"",g=e.payload.event,x=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},w=Object.keys(x).length===0?"":JSON.stringify(x);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`ref length ${m.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`topic length ${d.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(w.length>255)throw new Error(`metadata length ${w.length} exceeds maximum of 255`);const b=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+m.length+d.length+g.length+w.length,v=new ArrayBuffer(this.HEADER_LENGTH+b);let S=new DataView(v),T=0;S.setUint8(T++,this.KINDS.userBroadcastPush),S.setUint8(T++,p.length),S.setUint8(T++,m.length),S.setUint8(T++,d.length),S.setUint8(T++,g.length),S.setUint8(T++,w.length),S.setUint8(T++,n),Array.from(p,W=>S.setUint8(T++,W.charCodeAt(0))),Array.from(m,W=>S.setUint8(T++,W.charCodeAt(0))),Array.from(d,W=>S.setUint8(T++,W.charCodeAt(0))),Array.from(g,W=>S.setUint8(T++,W.charCodeAt(0))),Array.from(w,W=>S.setUint8(T++,W.charCodeAt(0)));var j=new Uint8Array(v.byteLength+o.byteLength);return j.set(new Uint8Array(v),0),j.set(new Uint8Array(o),v.byteLength),j.buffer}decode(e,n){if(this._isArrayBuffer(e)){let o=this._binaryDecode(e);return n(o)}if(typeof e=="string"){const o=JSON.parse(e),[l,c,d,m,p]=o;return n({join_ref:l,ref:c,topic:d,event:m,payload:p})}return n({})}_binaryDecode(e){const n=new DataView(e),o=n.getUint8(0),l=new TextDecoder;switch(o){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,n,l)}}_decodeUserBroadcast(e,n,o){const l=n.getUint8(1),c=n.getUint8(2),d=n.getUint8(3),m=n.getUint8(4);let p=this.HEADER_LENGTH+4;const g=o.decode(e.slice(p,p+l));p=p+l;const x=o.decode(e.slice(p,p+c));p=p+c;const w=o.decode(e.slice(p,p+d));p=p+d;const b=e.slice(p,e.byteLength),v=m===this.JSON_ENCODING?JSON.parse(o.decode(b)):b,S={type:this.BROADCAST_EVENT,event:x,payload:v};return d>0&&(S.meta=JSON.parse(w)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:S}}_isArrayBuffer(e){var n;return e instanceof ArrayBuffer||((n=e==null?void 0:e.constructor)===null||n===void 0?void 0:n.name)==="ArrayBuffer"}_pick(e,n){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([o])=>n.includes(o)))}}var et;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(et||(et={}));const rf=(r,e,n={})=>{var o;const l=(o=n.skipTypes)!==null&&o!==void 0?o:[];return e?Object.keys(e).reduce((c,d)=>(c[d]=i0(d,r,e,l),c),{}):{}},i0=(r,e,n,o)=>{const l=e.find(m=>m.name===r),c=l==null?void 0:l.type,d=n[r];return c&&!o.includes(c)?tp(c,d):vu(d)},tp=(r,e)=>{if(r.charAt(0)==="_"){const n=r.slice(1,r.length);return c0(e,n)}switch(r){case et.bool:return o0(e);case et.float4:case et.float8:case et.int2:case et.int4:case et.int8:case et.numeric:case et.oid:return a0(e);case et.json:case et.jsonb:return l0(e);case et.timestamp:return u0(e);case et.abstime:case et.date:case et.daterange:case et.int4range:case et.int8range:case et.money:case et.reltime:case et.text:case et.time:case et.timestamptz:case et.timetz:case et.tsrange:case et.tstzrange:return vu(e);default:return vu(e)}},vu=r=>r,o0=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},a0=r=>{if(typeof r=="string"){const e=parseFloat(r);if(!Number.isNaN(e))return e}return r},l0=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch{return r}return r},c0=(r,e)=>{if(typeof r!="string")return r;const n=r.length-1,o=r[n];if(r[0]==="{"&&o==="}"){let c;const d=r.slice(1,n);try{c=JSON.parse("["+d+"]")}catch{c=d?d.split(","):[]}return c.map(m=>tp(e,m))}return r},u0=r=>typeof r=="string"?r.replace(" ","T"):r,sp=r=>{const e=new URL(r);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var so=r=>typeof r=="function"?r:function(){return r},d0=typeof self<"u"?self:null,ri=typeof window<"u"?window:null,Qs=d0||ri||globalThis,h0="2.0.0",m0=1e4,f0=1e3,Xs={connecting:0,open:1,closing:2,closed:3},os={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},pr={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},wu={longpoll:"longpoll",websocket:"websocket"},p0={complete:4},bu="base64url.bearer.phx.",Ea=class{constructor(r,e,n,o){this.channel=r,this.event=e,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=o,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(r){this.timeout=r,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(r,e){return this.hasReceived(r)&&e(this.receivedResp.response),this.recHooks.push({status:r,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:r,response:e,_ref:n}){this.recHooks.filter(o=>o.status===r).forEach(o=>o.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,r=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=r,this.matchReceive(r)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(r){return this.receivedResp&&this.receivedResp.status===r}trigger(r,e){this.channel.trigger(this.refEvent,{status:r,response:e})}},rp=class{constructor(r,e){this.callback=r,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},g0=class{constructor(r,e,n){this.state=os.closed,this.topic=r,this.params=so(e||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Ea(this,pr.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new rp(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=os.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this.joinPush.receive("error",o=>{this.state=os.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,o),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=os.closed,this.socket.remove(this)}),this.onError(o=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,o),this.isJoining()&&this.joinPush.reset(),this.state=os.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Ea(this,pr.leave,so({}),this.timeout).send(),this.state=os.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(pr.reply,(o,l)=>{this.trigger(this.replyEventName(l),o)})}join(r=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=r,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(r=>r.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=os.closed,this.bindings=[]}onClose(r){this.on(pr.close,r)}onError(r){return this.on(pr.error,e=>r(e))}on(r,e){let n=this.bindingRef++;return this.bindings.push({event:r,ref:n,callback:e}),n}off(r,e){this.bindings=this.bindings.filter(n=>!(n.event===r&&(typeof e>"u"||e===n.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(r,e,n=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${r}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let o=new Ea(this,r,function(){return e},n);return this.canPush()?o.send():(o.startTimeout(),this.pushBuffer.push(o)),o}leave(r=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=os.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(pr.close,"leave")},n=new Ea(this,pr.leave,so({}),r);return n.receive("ok",()=>e()).receive("timeout",()=>e()),n.send(),this.canPush()||n.trigger("ok",{}),n}onMessage(r,e,n){return e}filterBindings(r,e,n){return!0}isMember(r,e,n,o){return this.topic!==r?!1:o&&o!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:r,event:e,payload:n,joinRef:o}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(r=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=os.joining,this.joinPush.resend(r))}trigger(r,e,n,o){let l=this.onMessage(r,e,n,o);if(e&&!l)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let c=this.bindings.filter(d=>d.event===r&&this.filterBindings(d,e,n));for(let d=0;d<c.length;d++)c[d].callback(l,n,o||this.joinRef())}replyEventName(r){return`chan_reply_${r}`}isClosed(){return this.state===os.closed}isErrored(){return this.state===os.errored}isJoined(){return this.state===os.joined}isJoining(){return this.state===os.joining}isLeaving(){return this.state===os.leaving}},Va=class{static request(r,e,n,o,l,c,d){if(Qs.XDomainRequest){let m=new Qs.XDomainRequest;return this.xdomainRequest(m,r,e,o,l,c,d)}else if(Qs.XMLHttpRequest){let m=new Qs.XMLHttpRequest;return this.xhrRequest(m,r,e,n,o,l,c,d)}else{if(Qs.fetch&&Qs.AbortController)return this.fetchRequest(r,e,n,o,l,c,d);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(r,e,n,o,l,c,d){let m={method:r,headers:n,body:o},p=null;return l&&(p=new AbortController,setTimeout(()=>p.abort(),l),m.signal=p.signal),Qs.fetch(e,m).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>d&&d(g)).catch(g=>{g.name==="AbortError"&&c?c():d&&d(null)}),p}static xdomainRequest(r,e,n,o,l,c,d){return r.timeout=l,r.open(e,n),r.onload=()=>{let m=this.parseJSON(r.responseText);d&&d(m)},c&&(r.ontimeout=c),r.onprogress=()=>{},r.send(o),r}static xhrRequest(r,e,n,o,l,c,d,m){r.open(e,n,!0),r.timeout=c;for(let[p,g]of Object.entries(o))r.setRequestHeader(p,g);return r.onerror=()=>m&&m(null),r.onreadystatechange=()=>{if(r.readyState===p0.complete&&m){let p=this.parseJSON(r.responseText);m(p)}},d&&(r.ontimeout=d),r.send(l),r}static parseJSON(r){if(!r||r==="")return null;try{return JSON.parse(r)}catch{return console&&console.log("failed to parse JSON response",r),null}}static serialize(r,e){let n=[];for(var o in r){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let l=e?`${e}[${o}]`:o,c=r[o];typeof c=="object"?n.push(this.serialize(c,l)):n.push(encodeURIComponent(l)+"="+encodeURIComponent(c))}return n.join("&")}static appendParams(r,e){if(Object.keys(e).length===0)return r;let n=r.match(/\?/)?"&":"?";return`${r}${n}${this.serialize(e)}`}},y0=r=>{let e="",n=new Uint8Array(r),o=n.byteLength;for(let l=0;l<o;l++)e+=String.fromCharCode(n[l]);return btoa(e)},Qn=class{constructor(r,e){e&&e.length===2&&e[1].startsWith(bu)&&(this.authToken=atob(e[1].slice(bu.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(r),this.readyState=Xs.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(r){return r.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+wu.websocket),"$1/"+wu.longpoll)}endpointURL(){return Va.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(r,e,n){this.close(r,e,n),this.readyState=Xs.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Xs.open||this.readyState===Xs.connecting}poll(){const r={Accept:"application/json"};this.authToken&&(r["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",r,null,()=>this.ontimeout(),e=>{if(e){var{status:n,token:o,messages:l}=e;if(n===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=o}else n=0;switch(n){case 200:l.forEach(c=>{setTimeout(()=>this.onmessage({data:c}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Xs.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${n}`)}})}send(r){typeof r!="string"&&(r=y0(r)),this.currentBatch?this.currentBatch.push(r):this.awaitingBatchAck?this.batchBuffer.push(r):(this.currentBatch=[r],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(r){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},r.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(r,e,n){for(let l of this.reqs)l.abort();this.readyState=Xs.closed;let o=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:r,reason:e,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",o)):this.onclose(o)}ajax(r,e,n,o,l){let c,d=()=>{this.reqs.delete(c),o()};c=Va.request(r,this.endpointURL(),e,n,this.timeout,d,m=>{this.reqs.delete(c),this.isActive()&&l(m)}),this.reqs.add(c)}},x0=class Zi{constructor(e,n={}){let o=n.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(o.state,l=>{let{onJoin:c,onLeave:d,onSync:m}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Zi.syncState(this.state,l,c,d),this.pendingDiffs.forEach(p=>{this.state=Zi.syncDiff(this.state,p,c,d)}),this.pendingDiffs=[],m()}),this.channel.on(o.diff,l=>{let{onJoin:c,onLeave:d,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(l):(this.state=Zi.syncDiff(this.state,l,c,d),m())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Zi.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,n,o,l){let c=this.clone(e),d={},m={};return this.map(c,(p,g)=>{n[p]||(m[p]=g)}),this.map(n,(p,g)=>{let x=c[p];if(x){let w=g.metas.map(T=>T.phx_ref),b=x.metas.map(T=>T.phx_ref),v=g.metas.filter(T=>b.indexOf(T.phx_ref)<0),S=x.metas.filter(T=>w.indexOf(T.phx_ref)<0);v.length>0&&(d[p]=g,d[p].metas=v),S.length>0&&(m[p]=this.clone(x),m[p].metas=S)}else d[p]=g}),this.syncDiff(c,{joins:d,leaves:m},o,l)}static syncDiff(e,n,o,l){let{joins:c,leaves:d}=this.clone(n);return o||(o=function(){}),l||(l=function(){}),this.map(c,(m,p)=>{let g=e[m];if(e[m]=this.clone(p),g){let x=e[m].metas.map(b=>b.phx_ref),w=g.metas.filter(b=>x.indexOf(b.phx_ref)<0);e[m].metas.unshift(...w)}o(m,g,p)}),this.map(d,(m,p)=>{let g=e[m];if(!g)return;let x=p.metas.map(w=>w.phx_ref);g.metas=g.metas.filter(w=>x.indexOf(w.phx_ref)<0),l(m,g,p),g.metas.length===0&&delete e[m]}),e}static list(e,n){return n||(n=function(o,l){return l}),this.map(e,(o,l)=>n(o,l))}static map(e,n){return Object.getOwnPropertyNames(e).map(o=>n(o,e[o]))}static clone(e){return JSON.parse(JSON.stringify(e))}},_a={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(r,e){if(r.payload.constructor===ArrayBuffer)return e(this.binaryEncode(r));{let n=[r.join_ref,r.ref,r.topic,r.event,r.payload];return e(JSON.stringify(n))}},decode(r,e){if(r.constructor===ArrayBuffer)return e(this.binaryDecode(r));{let[n,o,l,c,d]=JSON.parse(r);return e({join_ref:n,ref:o,topic:l,event:c,payload:d})}},binaryEncode(r){let{join_ref:e,ref:n,event:o,topic:l,payload:c}=r,d=this.META_LENGTH+e.length+n.length+l.length+o.length,m=new ArrayBuffer(this.HEADER_LENGTH+d),p=new DataView(m),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,e.length),p.setUint8(g++,n.length),p.setUint8(g++,l.length),p.setUint8(g++,o.length),Array.from(e,w=>p.setUint8(g++,w.charCodeAt(0))),Array.from(n,w=>p.setUint8(g++,w.charCodeAt(0))),Array.from(l,w=>p.setUint8(g++,w.charCodeAt(0))),Array.from(o,w=>p.setUint8(g++,w.charCodeAt(0)));var x=new Uint8Array(m.byteLength+c.byteLength);return x.set(new Uint8Array(m),0),x.set(new Uint8Array(c),m.byteLength),x.buffer},binaryDecode(r){let e=new DataView(r),n=e.getUint8(0),o=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(r,e,o);case this.KINDS.reply:return this.decodeReply(r,e,o);case this.KINDS.broadcast:return this.decodeBroadcast(r,e,o)}},decodePush(r,e,n){let o=e.getUint8(1),l=e.getUint8(2),c=e.getUint8(3),d=this.HEADER_LENGTH+this.META_LENGTH-1,m=n.decode(r.slice(d,d+o));d=d+o;let p=n.decode(r.slice(d,d+l));d=d+l;let g=n.decode(r.slice(d,d+c));d=d+c;let x=r.slice(d,r.byteLength);return{join_ref:m,ref:null,topic:p,event:g,payload:x}},decodeReply(r,e,n){let o=e.getUint8(1),l=e.getUint8(2),c=e.getUint8(3),d=e.getUint8(4),m=this.HEADER_LENGTH+this.META_LENGTH,p=n.decode(r.slice(m,m+o));m=m+o;let g=n.decode(r.slice(m,m+l));m=m+l;let x=n.decode(r.slice(m,m+c));m=m+c;let w=n.decode(r.slice(m,m+d));m=m+d;let b=r.slice(m,r.byteLength),v={status:w,response:b};return{join_ref:p,ref:g,topic:x,event:pr.reply,payload:v}},decodeBroadcast(r,e,n){let o=e.getUint8(1),l=e.getUint8(2),c=this.HEADER_LENGTH+2,d=n.decode(r.slice(c,c+o));c=c+o;let m=n.decode(r.slice(c,c+l));c=c+l;let p=r.slice(c,r.byteLength);return{join_ref:null,ref:null,topic:d,event:m,payload:p}}},v0=class{constructor(r,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||m0,this.transport=e.transport||Qs.WebSocket||Qn,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=Qs&&Qs.sessionStorage}catch{}this.sessionStore=e.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=_a.encode.bind(_a),this.defaultDecoder=_a.decode.bind(_a),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Qn?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let o=null;ri&&ri.addEventListener&&(ri.addEventListener("pagehide",l=>{this.conn&&(this.disconnect(),o=this.connectClock)}),ri.addEventListener("pageshow",l=>{o===this.connectClock&&(o=null,this.connect())}),ri.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=l=>e.rejoinAfterMs?e.rejoinAfterMs(l):[1e3,2e3,5e3][l-1]||1e4,this.reconnectAfterMs=l=>e.reconnectAfterMs?e.reconnectAfterMs(l):[10,50,100,150,200,250,500,1e3,2e3][l-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(l,c,d)=>{console.log(`${l}: ${c}`,d)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=so(e.params||{}),this.endPoint=`${r}/${wu.websocket}`,this.vsn=e.vsn||h0,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new rp(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return Qn}replaceTransport(r){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=r}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let r=Va.appendParams(Va.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return r.charAt(0)!=="/"?r:r.charAt(1)==="/"?`${this.protocol()}:${r}`:`${this.protocol()}://${location.host}${r}`}disconnect(r,e,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,r&&r()},e,n)}connect(r){r&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=so(r)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Qn?this.connectWithFallback(Qn,this.longPollFallbackMs):this.transportConnect())}log(r,e,n){this.logger&&this.logger(r,e,n)}hasLogger(){return this.logger!==null}onOpen(r){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,r]),e}onClose(r){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,r]),e}onError(r){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,r]),e}onMessage(r){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,r]),e}onHeartbeat(r){this.heartbeatCallback=r}ping(r){if(!this.isConnected())return!1;let e=this.makeRef(),n=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let o=this.onMessage(l=>{l.ref===e&&(this.off([o]),r(Date.now()-n))});return!0}transportName(r){switch(r){case Qn:return"LongPoll";default:return r.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let r;this.authToken&&(r=["phoenix",`${bu}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),r),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(r){return this.sessionStore&&this.sessionStore.getItem(r)}storeSession(r,e){this.sessionStore&&this.sessionStore.setItem(r,e)}connectWithFallback(r,e=2500){clearTimeout(this.fallbackTimer);let n=!1,o=!0,l,c,d=this.transportName(r),m=p=>{this.log("transport",`falling back to ${d}...`,p),this.off([l,c]),o=!1,this.replaceTransport(r),this.transportConnect()};if(this.getSession(`phx:fallback:${d}`))return m("memorized");this.fallbackTimer=setTimeout(m,e),c=this.onError(p=>{this.log("transport","error",p),o&&!n&&(clearTimeout(this.fallbackTimer),m(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!o){let p=this.transportName(r);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(m,e),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),f0,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(r,e,n){if(!this.conn)return r&&r();const o=this.conn;this.waitForBufferDone(o,()=>{e?o.close(e,n||""):o.close(),this.waitForSocketClosed(o,()=>{this.conn===o&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),r&&r()})})}waitForBufferDone(r,e,n=1){if(n===5||!r.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(r,e,n+1)},150*n)}waitForSocketClosed(r,e,n=1){if(n===5||r.readyState===Xs.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(r,e,n+1)},150*n)}onConnClose(r){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",r),this.triggerChanError(r),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",r)}onConnError(r){this.hasLogger()&&this.log("transport","error",r);let e=this.transport,n=this.establishedConnections;this.triggerStateCallbacks("error",r,e,n),(e===this.transport||n>0)&&this.triggerChanError(r)}triggerChanError(r){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(pr.error,r)})}connectionState(){switch(this.conn&&this.conn.readyState){case Xs.connecting:return"connecting";case Xs.open:return"open";case Xs.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(r){this.off(r.stateChangeRefs),this.channels=this.channels.filter(e=>e!==r)}off(r){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([n])=>r.indexOf(n)===-1)}channel(r,e={}){let n=new g0(r,e,this);return this.channels.push(n),n}push(r){if(this.hasLogger()){let{topic:e,event:n,payload:o,ref:l,join_ref:c}=r;this.log("push",`${e} ${n} (${c}, ${l})`,o)}this.isConnected()?this.encode(r,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(r,e=>this.conn.send(e)))}makeRef(){let r=this.ref+1;return r===this.ref?this.ref=0:this.ref=r,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(r=>r()),this.sendBuffer=[])}onConnMessage(r){this.decode(r.data,e=>{let{topic:n,event:o,payload:l,ref:c,join_ref:d}=e;if(c&&c===this.pendingHeartbeatRef){const m=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(l.status==="ok"?"ok":"error",m)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${l.status||""} ${n} ${o} ${c&&"("+c+")"||""}`.trim(),l);for(let m=0;m<this.channels.length;m++){const p=this.channels[m];p.isMember(n,o,l,d)&&p.trigger(o,l,c,d)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(r,...e){try{this.stateChangeCallbacks[r].forEach(([n,o])=>{try{o(...e)}catch(l){this.log("error",`error in ${r} callback`,l)}})}catch(n){this.log("error",`error triggering ${r} callbacks`,n)}}leaveOpenTopic(r){let e=this.channels.find(n=>n.topic===r&&(n.isJoined()||n.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${r}"`),e.leave())}};class ro{constructor(e,n){const o=b0(n);this.presence=new x0(e.getChannel(),o),this.presence.onJoin((l,c,d)=>{const m=ro.onJoinPayload(l,c,d);e.getChannel().trigger("presence",m)}),this.presence.onLeave((l,c,d)=>{const m=ro.onLeavePayload(l,c,d);e.getChannel().trigger("presence",m)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return ro.transformState(this.presence.state)}static transformState(e){return e=w0(e),Object.getOwnPropertyNames(e).reduce((n,o)=>{const l=e[o];return n[o]=Fa(l),n},{})}static onJoinPayload(e,n,o){const l=nf(n),c=Fa(o);return{event:"join",key:e,currentPresences:l,newPresences:c}}static onLeavePayload(e,n,o){const l=nf(n),c=Fa(o);return{event:"leave",key:e,currentPresences:l,leftPresences:c}}}function Fa(r){return r.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function w0(r){return JSON.parse(JSON.stringify(r))}function b0(r){return(r==null?void 0:r.events)&&{events:r.events}}function nf(r){return r!=null&&r.metas?Fa(r):[]}var of;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(of||(of={}));class k0{get state(){return this.presenceAdapter.state}constructor(e,n){this.channel=e,this.presenceAdapter=new ro(this.channel.channelAdapter,n)}}function j0(r){if(r instanceof Error)return r;if(typeof r=="string")return new Error(r);if(r&&typeof r=="object"){const e=r;if(typeof e.code=="number"){const n=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${n}`,{cause:r})}return new Error("channel error: transport failure",{cause:r})}return new Error("channel error: connection lost")}class S0{constructor(e,n,o){const l=N0(o);this.channel=e.getSocket().channel(n,l),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,n){return this.channel.on(e,n)}off(e,n){this.channel.off(e,n)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,n,o){let l;try{l=this.channel.push(e,n,o)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>r0){const c=this.channel.pushBuffer.shift();c.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${c.event}`,c.payload())}return l}updateJoinPayload(e){const n=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},n),e)}canPush(){return this.socket.isConnected()&&this.state===Hr.joined}isJoined(){return this.state===Hr.joined}isJoining(){return this.state===Hr.joining}isClosed(){return this.state===Hr.closed}isLeaving(){return this.state===Hr.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function N0(r){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config)}}var af;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(af||(af={}));var ii;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(ii||(ii={}));var gr;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(gr||(gr={}));class no{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,n={config:{}},o){var l,c;if(this.topic=e,this.params=n,this.socket=o,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config),this.channelAdapter=new S0(this.socket.socketAdapter,e,this.params),this.presence=new k0(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=sp(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((c=(l=this.params.config)===null||l===void 0?void 0:l.broadcast)===null||c===void 0)&&c.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,n=this.timeout){var o,l,c;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:d,presence:m,private:p}}=this.params,g=(l=(o=this.bindings.postgres_changes)===null||o===void 0?void 0:o.map(v=>v.filter))!==null&&l!==void 0?l:[],x=!!this.bindings[ii.PRESENCE]&&this.bindings[ii.PRESENCE].length>0||((c=this.params.config.presence)===null||c===void 0?void 0:c.enabled)===!0,w={},b={broadcast:d,presence:Object.assign(Object.assign({},m),{enabled:x}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(w.access_token=this.socket.accessTokenValue),this._onError(v=>{e==null||e(gr.CHANNEL_ERROR,j0(v))}),this._onClose(()=>e==null?void 0:e(gr.CLOSED)),this.updateJoinPayload(Object.assign({config:b},w)),this._updateFilterMessage(),this.channelAdapter.subscribe(n).receive("ok",async({postgres_changes:v})=>{if(this.socket._isManualToken()||this.socket.setAuth(),v===void 0){e==null||e(gr.SUBSCRIBED);return}this._updatePostgresBindings(v,e)}).receive("error",v=>{this.state=Hr.errored;const S=Object.values(v).join(", ")||"error";e==null||e(gr.CHANNEL_ERROR,new Error(S,{cause:v}))}).receive("timeout",()=>{e==null||e(gr.TIMED_OUT)})}return this}_updatePostgresBindings(e,n){var o;const l=this.bindings.postgres_changes,c=(o=l==null?void 0:l.length)!==null&&o!==void 0?o:0,d=[];for(let m=0;m<c;m++){const p=l[m],{filter:{event:g,schema:x,table:w,filter:b}}=p,v=e&&e[m];if(v&&v.event===g&&no.isFilterValueEqual(v.schema,x)&&no.isFilterValueEqual(v.table,w)&&no.isFilterValueEqual(v.filter,b))d.push(Object.assign(Object.assign({},p),{id:v.id}));else{this.unsubscribe(),this.state=Hr.errored,n==null||n(gr.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=d,this.state!=Hr.errored&&n&&n(gr.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,n={}){return await this.send({type:"presence",event:"track",payload:e},n.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,n,o){const l=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),c=e===ii.PRESENCE||e===ii.POSTGRES_CHANGES;if(l&&c)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,n,o)}async httpSend(e,n,o={}){var l;if(n==null)return Promise.reject(new Error("Payload is required for httpSend()"));const c=n instanceof ArrayBuffer||ArrayBuffer.isView(n),d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":c?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m=new URL(this.broadcastEndpointURL);m.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&m.searchParams.set("private","true");const p={method:"POST",headers:d,body:c?n:JSON.stringify(n)},g=await this._fetchWithTimeout(m.toString(),p,(l=o.timeout)!==null&&l!==void 0?l:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let x=g.statusText;try{const w=await g.json();x=w.error||w.message||x}catch{}return Promise.reject(new Error(x))}async send(e,n={}){var o,l;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:c,payload:d}=e,m={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(m.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:m,body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:d,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(o=n.timeout)!==null&&o!==void 0?o:this.timeout);return await((l=g.body)===null||l===void 0?void 0:l.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var d,m,p;const g=this.channelAdapter.push(e.type,e,n.timeout||this.timeout);e.type==="broadcast"&&!(!((p=(m=(d=this.params)===null||d===void 0?void 0:d.config)===null||m===void 0?void 0:m.broadcast)===null||p===void 0)&&p.ack)&&c("ok"),g.receive("ok",()=>c("ok")),g.receive("error",()=>c("error")),g.receive("timeout",()=>c("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(n=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>n("ok")).receive("timeout",()=>n("timed out")).receive("error",()=>n("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,n,o){const l=new AbortController,c=setTimeout(()=>l.abort(),o),d=await this.socket.fetch(e,Object.assign(Object.assign({},n),{signal:l.signal}));return clearTimeout(c),d}_on(e,n,o){const l=e.toLocaleLowerCase(),c=this.channelAdapter.on(e,o),d={type:l,filter:n,callback:o,ref:c};return this.bindings[l]?this.bindings[l].push(d):this.bindings[l]=[d],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,n,o)=>{var l,c,d,m,p,g,x;const w=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(w,o))return!1;const b=(l=this.bindings[w])===null||l===void 0?void 0:l.find(v=>v.ref===e.ref);if(!b)return!0;if(["broadcast","presence","postgres_changes"].includes(w))if("id"in b){const v=b.id,S=(c=b.filter)===null||c===void 0?void 0:c.event;return v&&((d=n.ids)===null||d===void 0?void 0:d.includes(v))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((m=n.data)===null||m===void 0?void 0:m.type.toLocaleLowerCase()))}else{const v=(g=(p=b==null?void 0:b.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return v==="*"||v===((x=n==null?void 0:n.event)===null||x===void 0?void 0:x.toLocaleLowerCase())}else return b.type.toLocaleLowerCase()===w})}_notThisChannelEvent(e,n){const{close:o,error:l,leave:c,join:d}=ep;return n&&[o,l,c,d].includes(e)&&n!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,n,o)=>{if(typeof n=="object"&&"ids"in n){const l=n.data,{schema:c,table:d,commit_timestamp:m,type:p,errors:g}=l;return Object.assign(Object.assign({},{schema:c,table:d,commit_timestamp:m,eventType:p,new:{},old:{},errors:g}),this._getPayloadRecords(l))}return n})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const n in e.bindings)for(const o of e.bindings[n])this._on(o.type,o.filter,o.callback)}static isFilterValueEqual(e,n){return(e??void 0)===(n??void 0)}_getPayloadRecords(e){const n={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(n.new=rf(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(n.old=rf(e.columns,e.old_record)),n}}class T0{constructor(e,n){this.socket=new v0(e,n)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,n,o,l=1e4){return new Promise(c=>{setTimeout(()=>c("timeout"),l),this.socket.disconnect(()=>{e(),c("ok")},n,o)})}push(e){this.socket.push(e)}log(e,n,o){this.socket.log(e,n,o)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==xu.connecting}isDisconnecting(){return this.socket.connectionState()==xu.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const lf={HEARTBEAT_INTERVAL:25e3},C0=[1e3,2e3,5e3,1e4],E0=1e4;function _0(){const r=new Map;return{get length(){return r.size},clear(){r.clear()},getItem(e){return r.has(e)?r.get(e):null},key(e){var n;return(n=Array.from(r.keys())[e])!==null&&n!==void 0?n:null},removeItem(e){r.delete(e)},setItem(e,n){r.set(e,String(n))}}}function P0(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return _0()}const R0=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class A0{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,n){var o;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new n0,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=c=>c?(...d)=>c(...d):(...d)=>fetch(...d),!(!((o=n==null?void 0:n.params)===null||o===void 0)&&o.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=n.params.apikey;const l=this._initializeOptions(n);this.socketAdapter=new T0(e,l),this.httpEndpoint=sp(e),this.fetch=this._resolveFetch(n==null?void 0:n.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const n=e.message;throw n.includes("Node.js")?new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${n}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,n){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,n)}getChannels(){return this.channels}async removeChannel(e){const n=await e.unsubscribe();return n==="ok"&&e.teardown(),n}async removeAllChannels(){const e=this.channels.map(async o=>{const l=await o.unsubscribe();return o.teardown(),l}),n=await Promise.all(e);return await this.disconnect(),n}log(e,n,o){this.socketAdapter.log(e,n,o)}connectionState(){return this.socketAdapter.connectionState()||xu.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,n={config:{}}){const o=`realtime:${e}`,l=this.getChannels().find(c=>c.topic===o);if(l)return l;{const c=new no(`realtime:${e}`,n,this);return this._cancelPendingDisconnect(),this.channels.push(c),c}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(n=>n.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let n,o=!1;if(e)n=e,o=!0;else if(this.accessToken)try{n=await this.accessToken()}catch(l){this.log("error","Error fetching access token from callback",l),n=this.accessTokenValue}else n=this.accessTokenValue;o?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=n&&(this.accessTokenValue=n,this.channels.forEach(l=>{const c={access_token:n,version:Zv};n&&l.updateJoinPayload(c),l.joinedOnce&&l.channelAdapter.isJoined()&&l.channelAdapter.push(ep.access_token,{access_token:n})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(n=>{this.log("error",`Error setting auth in ${e}`,n)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(n=>{this.log("error","error waiting for auth on connect",n)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(n,o)=>{n=="sent"&&this._setAuthSafely(),e&&e(n,o)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=n=>{this.log("worker","worker error",n.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=n=>{n.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let n;if(e)n=e;else{const o=new Blob([R0],{type:"application/javascript"});n=URL.createObjectURL(o)}return n}_initializeOptions(e){var n,o,l,c,d,m,p,g,x,w,b,v;this.worker=(n=e==null?void 0:e.worker)!==null&&n!==void 0?n:!1,this.accessToken=(o=e==null?void 0:e.accessToken)!==null&&o!==void 0?o:null;const S={};S.timeout=(l=e==null?void 0:e.timeout)!==null&&l!==void 0?l:s0,S.heartbeatIntervalMs=(c=e==null?void 0:e.heartbeatIntervalMs)!==null&&c!==void 0?c:lf.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(d=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&d!==void 0?d:2*((m=e==null?void 0:e.heartbeatIntervalMs)!==null&&m!==void 0?m:lf.HEARTBEAT_INTERVAL),S.transport=(p=e==null?void 0:e.transport)!==null&&p!==void 0?p:Qv.getWebSocketConstructor(),S.params=e==null?void 0:e.params,S.logger=e==null?void 0:e.logger,S.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),S.sessionStorage=(g=e==null?void 0:e.sessionStorage)!==null&&g!==void 0?g:P0(),S.reconnectAfterMs=(x=e==null?void 0:e.reconnectAfterMs)!==null&&x!==void 0?x:L=>C0[L-1]||E0;let T,j;const W=(w=e==null?void 0:e.vsn)!==null&&w!==void 0?w:t0;switch(W){case e0:T=(L,H)=>H(JSON.stringify(L)),j=(L,H)=>H(JSON.parse(L));break;case Zf:T=this.serializer.encode.bind(this.serializer),j=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${S.vsn}`)}if(S.vsn=W,S.encode=(b=e==null?void 0:e.encode)!==null&&b!==void 0?b:T,S.decode=(v=e==null?void 0:e.decode)!==null&&v!==void 0?v:j,S.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,S.params=Object.assign(Object.assign({},S.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,S.autoSendHeartbeat=!this.worker}return S}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var oo=class extends Error{constructor(r,e){var n;super(r),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((n=e.icebergType)==null?void 0:n.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function M0(r,e,n){const o=new URL(e,r);if(n)for(const[l,c]of Object.entries(n))c!==void 0&&o.searchParams.set(l,c);return o.toString()}async function I0(r){return!r||r.type==="none"?{}:r.type==="bearer"?{Authorization:`Bearer ${r.token}`}:r.type==="header"?{[r.name]:r.value}:r.type==="custom"?await r.getHeaders():{}}function D0(r){const e=r.fetchImpl??globalThis.fetch;return{async request({method:n,path:o,query:l,body:c,headers:d}){const m=M0(r.baseUrl,o,l),p=await I0(r.auth),g=await e(m,{method:n,headers:{...c?{"Content-Type":"application/json"}:{},...p,...d},body:c?JSON.stringify(c):void 0}),x=await g.text(),w=(g.headers.get("content-type")||"").includes("application/json"),b=w&&x?JSON.parse(x):x;if(!g.ok){const v=w?b:void 0,S=v==null?void 0:v.error;throw new oo((S==null?void 0:S.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:S==null?void 0:S.type,icebergCode:S==null?void 0:S.code,details:v})}return{status:g.status,headers:g.headers,data:b}}}}function Pa(r){return r.join("")}var O0=class{constructor(r,e=""){this.client=r,this.prefix=e}async listNamespaces(r){const e=r?{parent:Pa(r.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(o=>({namespace:o}))}async createNamespace(r,e){const n={namespace:r.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Pa(r.namespace)}`})}async loadNamespaceMetadata(r){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Pa(r.namespace)}`})).data.properties}}async namespaceExists(r){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Pa(r.namespace)}`}),!0}catch(e){if(e instanceof oo&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(r,e){try{return await this.createNamespace(r,e)}catch(n){if(n instanceof oo&&n.status===409)return;throw n}}};function Xn(r){return r.join("")}var L0=class{constructor(r,e="",n){this.client=r,this.prefix=e,this.accessDelegation=n}async listTables(r){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Xn(r.namespace)}/tables`})).data.identifiers}async createTable(r,e){const n={};return this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Xn(r.namespace)}/tables`,body:e,headers:n})).data.metadata}async updateTable(r,e){const n=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Xn(r.namespace)}/tables/${r.name}`,body:e});return{"metadata-location":n.data["metadata-location"],metadata:n.data.metadata}}async dropTable(r,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Xn(r.namespace)}/tables/${r.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(r){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Xn(r.namespace)}/tables/${r.name}`,headers:e})).data.metadata}async tableExists(r){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Xn(r.namespace)}/tables/${r.name}`,headers:e}),!0}catch(n){if(n instanceof oo&&n.status===404)return!1;throw n}}async createTableIfNotExists(r,e){try{return await this.createTable(r,e)}catch(n){if(n instanceof oo&&n.status===409)return await this.loadTable({namespace:r.namespace,name:e.name});throw n}}},z0=class{constructor(r){var o;let e="v1";r.catalogName&&(e+=`/${r.catalogName}`);const n=r.baseUrl.endsWith("/")?r.baseUrl:`${r.baseUrl}/`;this.client=D0({baseUrl:n,auth:r.auth,fetchImpl:r.fetch}),this.accessDelegation=(o=r.accessDelegation)==null?void 0:o.join(","),this.namespaceOps=new O0(this.client,e),this.tableOps=new L0(this.client,e,this.accessDelegation)}async listNamespaces(r){return this.namespaceOps.listNamespaces(r)}async createNamespace(r,e){return this.namespaceOps.createNamespace(r,e)}async dropNamespace(r){await this.namespaceOps.dropNamespace(r)}async loadNamespaceMetadata(r){return this.namespaceOps.loadNamespaceMetadata(r)}async listTables(r){return this.tableOps.listTables(r)}async createTable(r,e){return this.tableOps.createTable(r,e)}async updateTable(r,e){return this.tableOps.updateTable(r,e)}async dropTable(r,e){await this.tableOps.dropTable(r,e)}async loadTable(r){return this.tableOps.loadTable(r)}async namespaceExists(r){return this.namespaceOps.namespaceExists(r)}async tableExists(r){return this.tableOps.tableExists(r)}async createNamespaceIfNotExists(r,e){return this.namespaceOps.createNamespaceIfNotExists(r,e)}async createTableIfNotExists(r,e){return this.tableOps.createTableIfNotExists(r,e)}};function ao(r){"@babel/helpers - typeof";return ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ao(r)}function W0(r,e){if(ao(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var o=n.call(r,e);if(ao(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function $0(r){var e=W0(r,"string");return ao(e)=="symbol"?e:e+""}function H0(r,e,n){return(e=$0(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function cf(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),n.push.apply(n,o)}return n}function Ie(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?cf(Object(n),!0).forEach(function(o){H0(r,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):cf(Object(n)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))})}return r}var nl=class extends Error{constructor(r,e="storage",n,o){super(r),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=n,this.statusCode=o}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function il(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}var ku=class extends nl{constructor(r,e,n,o="storage"){super(r,o,e,n),this.name=o==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=n}toJSON(){return Ie({},super.toJSON())}},np=class extends nl{constructor(r,e,n="storage"){super(r,n),this.name=n==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Ga(r,e,n){const o=Ie({},r),l=e.toLowerCase();for(const c of Object.keys(o))c.toLowerCase()===l&&delete o[c];return o[l]=n,o}function B0(r){const e={};for(const[n,o]of Object.entries(r))e[n.toLowerCase()]=o;return e}const F0=r=>r?(...e)=>r(...e):(...e)=>fetch(...e),U0=r=>{if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},ju=r=>{if(Array.isArray(r))return r.map(n=>ju(n));if(typeof r=="function"||r!==Object(r))return r;const e={};return Object.entries(r).forEach(([n,o])=>{const l=n.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));e[l]=ju(o)}),e},q0=r=>!r||typeof r!="string"||r.length===0||r.length>100||r.trim()!==r||r.includes("/")||r.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(r),uf=r=>{if(typeof r=="object"&&r!==null){const e=r;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const n=e.error;if(typeof n.message=="string")return n.message}}return JSON.stringify(r)},Y0=async(r,e,n,o)=>{if(r!==null&&typeof r=="object"&&"json"in r&&typeof r.json=="function"){const l=r;let c=parseInt(String(l.status),10);Number.isFinite(c)||(c=500),l.json().then(d=>{const m=(d==null?void 0:d.statusCode)||(d==null?void 0:d.code)||c+"";e(new ku(uf(d),c,m,o))}).catch(()=>{const d=c+"";e(new ku(l.statusText||`HTTP ${c} error`,c,d,o))})}else e(new np(uf(r),r,o))},V0=(r,e,n,o)=>{const l={method:r,headers:(e==null?void 0:e.headers)||{}};if(r==="GET"||r==="HEAD"||!o)return Ie(Ie({},l),n);if(U0(o)){var c;const d=(e==null?void 0:e.headers)||{};let m;for(const[p,g]of Object.entries(d))p.toLowerCase()==="content-type"&&(m=g);l.headers=Ga(d,"Content-Type",(c=m)!==null&&c!==void 0?c:"application/json"),l.body=JSON.stringify(o)}else l.body=o;return e!=null&&e.duplex&&(l.duplex=e.duplex),Ie(Ie({},l),n)};async function Ji(r,e,n,o,l,c,d){return new Promise((m,p)=>{r(n,V0(e,o,l,c)).then(g=>{if(!g.ok)throw g;if(o!=null&&o.noResolveJson)return g;if(d==="vectors"){const x=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!x||!x.includes("application/json"))return{}}return g.json()}).then(g=>m(g)).catch(g=>Y0(g,p,o,d))})}function ip(r="storage"){return{get:async(e,n,o,l)=>Ji(e,"GET",n,o,l,void 0,r),post:async(e,n,o,l,c)=>Ji(e,"POST",n,l,c,o,r),put:async(e,n,o,l,c)=>Ji(e,"PUT",n,l,c,o,r),head:async(e,n,o,l)=>Ji(e,"HEAD",n,Ie(Ie({},o),{},{noResolveJson:!0}),l,void 0,r),remove:async(e,n,o,l,c)=>Ji(e,"DELETE",n,l,c,o,r)}}const G0=ip("storage"),{get:lo,post:$s,put:Su,head:K0,remove:$u}=G0,xs=ip("vectors");var di=class{constructor(r,e={},n,o="storage"){this.shouldThrowOnError=!1,this.url=r,this.headers=B0(e),this.fetch=F0(n),this.namespace=o}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,e){return this.headers=Ga(this.headers,r,e),this}async handleOperation(r){var e=this;try{return{data:await r(),error:null}}catch(n){if(e.shouldThrowOnError)throw n;if(il(n))return{data:null,error:n};throw n}}};let op;op=Symbol.toStringTag;var J0=class{constructor(r,e){this.downloadFn=r,this.shouldThrowOnError=e,this[op]="StreamDownloadBuilder",this.promise=null}then(r,e){return this.getPromise().then(r,e)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:(await r.downloadFn()).body,error:null}}catch(e){if(r.shouldThrowOnError)throw e;if(il(e))return{data:null,error:e};throw e}}};let ap;ap=Symbol.toStringTag;var Q0=class{constructor(r,e){this.downloadFn=r,this.shouldThrowOnError=e,this[ap]="BlobDownloadBuilder",this.promise=null}asStream(){return new J0(this.downloadFn,this.shouldThrowOnError)}then(r,e){return this.getPromise().then(r,e)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:await(await r.downloadFn()).blob(),error:null}}catch(e){if(r.shouldThrowOnError)throw e;if(il(e))return{data:null,error:e};throw e}}};const X0={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},df={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Z0=class extends di{constructor(r,e={},n,o){super(r,e,o,"storage"),this.bucketId=n}async uploadOrUpdate(r,e,n,o){var l=this;return l.handleOperation(async()=>{let c;const d=Ie(Ie({},df),o);let m=Ie(Ie({},l.headers),r==="POST"&&{"x-upsert":String(d.upsert)});const p=d.metadata;if(typeof Blob<"u"&&n instanceof Blob?(c=new FormData,c.append("cacheControl",d.cacheControl),p&&c.append("metadata",l.encodeMetadata(p)),c.append("",n)):typeof FormData<"u"&&n instanceof FormData?(c=n,c.has("cacheControl")||c.append("cacheControl",d.cacheControl),p&&!c.has("metadata")&&c.append("metadata",l.encodeMetadata(p))):(c=n,m["cache-control"]=`max-age=${d.cacheControl}`,m["content-type"]=d.contentType,p&&(m["x-metadata"]=l.toBase64(l.encodeMetadata(p))),(typeof ReadableStream<"u"&&c instanceof ReadableStream||c&&typeof c=="object"&&"pipe"in c&&typeof c.pipe=="function")&&!d.duplex&&(d.duplex="half")),o!=null&&o.headers)for(const[b,v]of Object.entries(o.headers))m=Ga(m,b,v);const g=l._removeEmptyFolders(e),x=l._getFinalPath(g),w=await(r=="PUT"?Su:$s)(l.fetch,`${l.url}/object/${x}`,c,Ie({headers:m},d!=null&&d.duplex?{duplex:d.duplex}:{}));return{path:g,id:w.Id,fullPath:w.Key}})}async upload(r,e,n){return this.uploadOrUpdate("POST",r,e,n)}async uploadToSignedUrl(r,e,n,o){var l=this;const c=l._removeEmptyFolders(r),d=l._getFinalPath(c),m=new URL(l.url+`/object/upload/sign/${d}`);return m.searchParams.set("token",e),l.handleOperation(async()=>{let p;const g=Ie(Ie({},df),o);let x=Ie(Ie({},l.headers),{"x-upsert":String(g.upsert)});const w=g.metadata;if(typeof Blob<"u"&&n instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),w&&p.append("metadata",l.encodeMetadata(w)),p.append("",n)):typeof FormData<"u"&&n instanceof FormData?(p=n,p.has("cacheControl")||p.append("cacheControl",g.cacheControl),w&&!p.has("metadata")&&p.append("metadata",l.encodeMetadata(w))):(p=n,x["cache-control"]=`max-age=${g.cacheControl}`,x["content-type"]=g.contentType,w&&(x["x-metadata"]=l.toBase64(l.encodeMetadata(w))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!g.duplex&&(g.duplex="half")),o!=null&&o.headers)for(const[b,v]of Object.entries(o.headers))x=Ga(x,b,v);return{path:c,fullPath:(await Su(l.fetch,m.toString(),p,Ie({headers:x},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(r,e){var n=this;return n.handleOperation(async()=>{let o=n._getFinalPath(r);const l=Ie({},n.headers);e!=null&&e.upsert&&(l["x-upsert"]="true");const c=await $s(n.fetch,`${n.url}/object/upload/sign/${o}`,{},{headers:l}),d=new URL(n.url+c.url),m=d.searchParams.get("token");if(!m)throw new nl("No token returned by API");return{signedUrl:d.toString(),path:r,token:m}})}async update(r,e,n){return this.uploadOrUpdate("PUT",r,e,n)}async move(r,e,n){var o=this;return o.handleOperation(async()=>await $s(o.fetch,`${o.url}/object/move`,{bucketId:o.bucketId,sourceKey:r,destinationKey:e,destinationBucket:n==null?void 0:n.destinationBucket},{headers:o.headers}))}async copy(r,e,n){var o=this;return o.handleOperation(async()=>({path:(await $s(o.fetch,`${o.url}/object/copy`,{bucketId:o.bucketId,sourceKey:r,destinationKey:e,destinationBucket:n==null?void 0:n.destinationBucket},{headers:o.headers})).Key}))}async createSignedUrl(r,e,n){var o=this;return o.handleOperation(async()=>{let l=o._getFinalPath(r);const c=typeof(n==null?void 0:n.transform)=="object"&&n.transform!==null&&Object.keys(n.transform).length>0;let d=await $s(o.fetch,`${o.url}/object/sign/${l}`,Ie({expiresIn:e},c?{transform:n.transform}:{}),{headers:o.headers});const m=new URLSearchParams;n!=null&&n.download&&m.set("download",n.download===!0?"":n.download),(n==null?void 0:n.cacheNonce)!=null&&m.set("cacheNonce",String(n.cacheNonce));const p=m.toString();return{signedUrl:encodeURI(`${o.url}${d.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(r,e,n){var o=this;return o.handleOperation(async()=>{const l=await $s(o.fetch,`${o.url}/object/sign/${o.bucketId}`,{expiresIn:e,paths:r},{headers:o.headers}),c=new URLSearchParams;n!=null&&n.download&&c.set("download",n.download===!0?"":n.download),(n==null?void 0:n.cacheNonce)!=null&&c.set("cacheNonce",String(n.cacheNonce));const d=c.toString();return l.map(m=>Ie(Ie({},m),{},{signedUrl:m.signedURL?encodeURI(`${o.url}${m.signedURL}${d?`&${d}`:""}`):null}))})}download(r,e,n){const o=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",l=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(l,e.transform),(e==null?void 0:e.cacheNonce)!=null&&l.set("cacheNonce",String(e.cacheNonce));const c=l.toString(),d=this._getFinalPath(r),m=()=>lo(this.fetch,`${this.url}/${o}/${d}${c?`?${c}`:""}`,{headers:this.headers,noResolveJson:!0},n);return new Q0(m,this.shouldThrowOnError)}async info(r){var e=this;const n=e._getFinalPath(r);return e.handleOperation(async()=>ju(await lo(e.fetch,`${e.url}/object/info/${n}`,{headers:e.headers})))}async exists(r){var e=this;const n=e._getFinalPath(r);try{return await K0(e.fetch,`${e.url}/object/${n}`,{headers:e.headers}),{data:!0,error:null}}catch(l){if(e.shouldThrowOnError)throw l;if(il(l)){var o;const c=l instanceof ku?l.status:l instanceof np?(o=l.originalError)===null||o===void 0?void 0:o.status:void 0;if(c!==void 0&&[400,404].includes(c))return{data:!1,error:l}}throw l}}getPublicUrl(r,e){const n=this._getFinalPath(r),o=new URLSearchParams;e!=null&&e.download&&o.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(o,e.transform),(e==null?void 0:e.cacheNonce)!=null&&o.set("cacheNonce",String(e.cacheNonce));const l=o.toString(),c=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${n}`)+(l?`?${l}`:"")}}}async remove(r){var e=this;return e.handleOperation(async()=>await $u(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:r},{headers:e.headers}))}async list(r,e,n){var o=this;return o.handleOperation(async()=>{const l=Ie(Ie(Ie({},X0),e),{},{prefix:r||""});return await $s(o.fetch,`${o.url}/object/list/${o.bucketId}`,l,{headers:o.headers},n)})}async listV2(r,e){var n=this;return n.handleOperation(async()=>{const o=Ie({},r);return await $s(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,o,{headers:n.headers},e)})}encodeMetadata(r){return JSON.stringify(r)}toBase64(r){return typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r)}_getFinalPath(r){return`${this.bucketId}/${r.replace(/^\/+/,"")}`}_removeEmptyFolders(r){return r.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(r,e){return e.width&&r.set("width",e.width.toString()),e.height&&r.set("height",e.height.toString()),e.resize&&r.set("resize",e.resize),e.format&&r.set("format",e.format),e.quality&&r.set("quality",e.quality.toString()),r}};const ew="2.108.2",fo={"X-Client-Info":`storage-js/${ew}`};var tw=class extends di{constructor(r,e={},n,o){const l=new URL(r);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(l.hostname)&&!l.hostname.includes("storage.supabase.")&&(l.hostname=l.hostname.replace("supabase.","storage.supabase."));const c=l.href.replace(/\/$/,""),d=Ie(Ie({},fo),e);super(c,d,n,"storage")}async listBuckets(r){var e=this;return e.handleOperation(async()=>{const n=e.listBucketOptionsToQueryString(r);return await lo(e.fetch,`${e.url}/bucket${n}`,{headers:e.headers})})}async getBucket(r){var e=this;return e.handleOperation(async()=>await lo(e.fetch,`${e.url}/bucket/${r}`,{headers:e.headers}))}async createBucket(r,e={public:!1}){var n=this;return n.handleOperation(async()=>await $s(n.fetch,`${n.url}/bucket`,{id:r,name:r,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:n.headers}))}async updateBucket(r,e){var n=this;return n.handleOperation(async()=>await Su(n.fetch,`${n.url}/bucket/${r}`,{id:r,name:r,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(r){var e=this;return e.handleOperation(async()=>await $s(e.fetch,`${e.url}/bucket/${r}/empty`,{},{headers:e.headers}))}async deleteBucket(r){var e=this;return e.handleOperation(async()=>await $u(e.fetch,`${e.url}/bucket/${r}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(r){const e={};return r&&("limit"in r&&(e.limit=String(r.limit)),"offset"in r&&(e.offset=String(r.offset)),r.search&&(e.search=r.search),r.sortColumn&&(e.sortColumn=r.sortColumn),r.sortOrder&&(e.sortOrder=r.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},sw=class extends di{constructor(r,e={},n){const o=r.replace(/\/$/,""),l=Ie(Ie({},fo),e);super(o,l,n,"storage")}async createBucket(r){var e=this;return e.handleOperation(async()=>await $s(e.fetch,`${e.url}/bucket`,{name:r},{headers:e.headers}))}async listBuckets(r){var e=this;return e.handleOperation(async()=>{const n=new URLSearchParams;(r==null?void 0:r.limit)!==void 0&&n.set("limit",r.limit.toString()),(r==null?void 0:r.offset)!==void 0&&n.set("offset",r.offset.toString()),r!=null&&r.sortColumn&&n.set("sortColumn",r.sortColumn),r!=null&&r.sortOrder&&n.set("sortOrder",r.sortOrder),r!=null&&r.search&&n.set("search",r.search);const o=n.toString(),l=o?`${e.url}/bucket?${o}`:`${e.url}/bucket`;return await lo(e.fetch,l,{headers:e.headers})})}async deleteBucket(r){var e=this;return e.handleOperation(async()=>await $u(e.fetch,`${e.url}/bucket/${r}`,{},{headers:e.headers}))}from(r){var e=this;if(!q0(r))throw new nl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const n=new z0({baseUrl:this.url,catalogName:r,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),o=this.shouldThrowOnError;return new Proxy(n,{get(l,c){const d=l[c];return typeof d!="function"?d:async(...m)=>{try{return{data:await d.apply(l,m),error:null}}catch(p){if(o)throw p;return{data:null,error:p}}}}})}},rw=class extends di{constructor(r,e={},n){const o=r.replace(/\/$/,""),l=Ie(Ie({},fo),{},{"Content-Type":"application/json"},e);super(o,l,n,"vectors")}async createIndex(r){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/CreateIndex`,r,{headers:e.headers})||{})}async getIndex(r,e){var n=this;return n.handleOperation(async()=>await xs.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:r,indexName:e},{headers:n.headers}))}async listIndexes(r){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/ListIndexes`,r,{headers:e.headers}))}async deleteIndex(r,e){var n=this;return n.handleOperation(async()=>await xs.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:r,indexName:e},{headers:n.headers})||{})}},nw=class extends di{constructor(r,e={},n){const o=r.replace(/\/$/,""),l=Ie(Ie({},fo),{},{"Content-Type":"application/json"},e);super(o,l,n,"vectors")}async putVectors(r){var e=this;if(r.vectors.length<1||r.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/PutVectors`,r,{headers:e.headers})||{})}async getVectors(r){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/GetVectors`,r,{headers:e.headers}))}async listVectors(r){var e=this;if(r.segmentCount!==void 0){if(r.segmentCount<1||r.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(r.segmentIndex!==void 0&&(r.segmentIndex<0||r.segmentIndex>=r.segmentCount))throw new Error(`segmentIndex must be between 0 and ${r.segmentCount-1}`)}return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/ListVectors`,r,{headers:e.headers}))}async queryVectors(r){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/QueryVectors`,r,{headers:e.headers}))}async deleteVectors(r){var e=this;if(r.keys.length<1||r.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/DeleteVectors`,r,{headers:e.headers})||{})}},iw=class extends di{constructor(r,e={},n){const o=r.replace(/\/$/,""),l=Ie(Ie({},fo),{},{"Content-Type":"application/json"},e);super(o,l,n,"vectors")}async createBucket(r){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:r},{headers:e.headers})||{})}async getBucket(r){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:r},{headers:e.headers}))}async listBuckets(r={}){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/ListVectorBuckets`,r,{headers:e.headers}))}async deleteBucket(r){var e=this;return e.handleOperation(async()=>await xs.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:r},{headers:e.headers})||{})}},ow=class extends iw{constructor(r,e={}){super(r,e.headers||{},e.fetch)}from(r){return new aw(this.url,this.headers,r,this.fetch)}async createBucket(r){var e=()=>super.createBucket,n=this;return e().call(n,r)}async getBucket(r){var e=()=>super.getBucket,n=this;return e().call(n,r)}async listBuckets(r={}){var e=()=>super.listBuckets,n=this;return e().call(n,r)}async deleteBucket(r){var e=()=>super.deleteBucket,n=this;return e().call(n,r)}},aw=class extends rw{constructor(r,e,n,o){super(r,e,o),this.vectorBucketName=n}async createIndex(r){var e=()=>super.createIndex,n=this;return e().call(n,Ie(Ie({},r),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(r={}){var e=()=>super.listIndexes,n=this;return e().call(n,Ie(Ie({},r),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(r){var e=()=>super.getIndex,n=this;return e().call(n,n.vectorBucketName,r)}async deleteIndex(r){var e=()=>super.deleteIndex,n=this;return e().call(n,n.vectorBucketName,r)}index(r){return new lw(this.url,this.headers,this.vectorBucketName,r,this.fetch)}},lw=class extends nw{constructor(r,e,n,o,l){super(r,e,l),this.vectorBucketName=n,this.indexName=o}async putVectors(r){var e=()=>super.putVectors,n=this;return e().call(n,Ie(Ie({},r),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(r){var e=()=>super.getVectors,n=this;return e().call(n,Ie(Ie({},r),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(r={}){var e=()=>super.listVectors,n=this;return e().call(n,Ie(Ie({},r),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(r){var e=()=>super.queryVectors,n=this;return e().call(n,Ie(Ie({},r),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(r){var e=()=>super.deleteVectors,n=this;return e().call(n,Ie(Ie({},r),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},cw=class extends tw{constructor(r,e={},n,o){super(r,e,n,o)}from(r){return new Z0(this.url,this.headers,r,this.fetch)}get vectors(){return new ow(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new sw(this.url+"/iceberg",this.headers,this.fetch)}};const lp="2.108.2",yr=30*1e3,eo=3,su=eo*yr,uw=2*yr,dw="http://localhost:9999",hw="supabase.auth.token",mw={"X-Client-Info":`gotrue-js/${lp}`},Nu="X-Supabase-Api-Version",cp={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},fw=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,pw=10*60*1e3;class co extends Error{constructor(e,n,o){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=n,this.code=o}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function pe(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class gw extends co{constructor(e,n,o){super(e,n,o),this.name="AuthApiError",this.status=n,this.code=o}}function yw(r){return pe(r)&&r.name==="AuthApiError"}class Bs extends co{constructor(e,n){super(e),this.name="AuthUnknownError",this.originalError=n}}class nr extends co{constructor(e,n,o,l){super(e,o,l),this.name=n,this.status=o}}class Ct extends nr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ra(r){return pe(r)&&r.name==="AuthSessionMissingError"}class Zn extends nr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Aa extends nr{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ma extends nr{constructor(e,n=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function xw(r){return pe(r)&&r.name==="AuthImplicitGrantRedirectError"}class hf extends nr{constructor(e,n=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class vw extends nr{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Tu extends nr{constructor(e,n){super(e,"AuthRetryableFetchError",n,void 0)}}function mf(r){return pe(r)&&r.name==="AuthRetryableFetchError"}class ff extends nr{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function ww(r){return pe(r)&&r.name==="AuthRefreshDiscardedError"}class pf extends nr{constructor(e,n,o){super(e,"AuthWeakPasswordError",n,"weak_password"),this.reasons=o}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Ka extends nr{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ja="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),gf=` 	
\r=`.split(""),bw=(()=>{const r=new Array(128);for(let e=0;e<r.length;e+=1)r[e]=-1;for(let e=0;e<gf.length;e+=1)r[gf[e].charCodeAt(0)]=-2;for(let e=0;e<Ja.length;e+=1)r[Ja[e].charCodeAt(0)]=e;return r})();function yf(r,e,n){if(r!==null)for(e.queue=e.queue<<8|r,e.queuedBits+=8;e.queuedBits>=6;){const o=e.queue>>e.queuedBits-6&63;n(Ja[o]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const o=e.queue>>e.queuedBits-6&63;n(Ja[o]),e.queuedBits-=6}}function up(r,e,n){const o=bw[r];if(o>-1)for(e.queue=e.queue<<6|o,e.queuedBits+=6;e.queuedBits>=8;)n(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(o===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function xf(r){const e=[],n=d=>{e.push(String.fromCodePoint(d))},o={utf8seq:0,codepoint:0},l={queue:0,queuedBits:0},c=d=>{Sw(d,o,n)};for(let d=0;d<r.length;d+=1)up(r.charCodeAt(d),l,c);return e.join("")}function kw(r,e){if(r<=127){e(r);return}else if(r<=2047){e(192|r>>6),e(128|r&63);return}else if(r<=65535){e(224|r>>12),e(128|r>>6&63),e(128|r&63);return}else if(r<=1114111){e(240|r>>18),e(128|r>>12&63),e(128|r>>6&63),e(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function jw(r,e){for(let n=0;n<r.length;n+=1){let o=r.charCodeAt(n);if(o>55295&&o<=56319){const l=(o-55296)*1024&65535;o=(r.charCodeAt(n+1)-56320&65535|l)+65536,n+=1}kw(o,e)}}function Sw(r,e,n){if(e.utf8seq===0){if(r<=127){n(r);return}for(let o=1;o<6;o+=1)if((r>>7-o&1)===0){e.utf8seq=o;break}if(e.utf8seq===2)e.codepoint=r&31;else if(e.utf8seq===3)e.codepoint=r&15;else if(e.utf8seq===4)e.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|r&63,e.utf8seq-=1,e.utf8seq===0&&n(e.codepoint)}}function ai(r){const e=[],n={queue:0,queuedBits:0},o=l=>{e.push(l)};for(let l=0;l<r.length;l+=1)up(r.charCodeAt(l),n,o);return new Uint8Array(e)}function Nw(r){const e=[];return jw(r,n=>e.push(n)),new Uint8Array(e)}function yn(r){const e=[],n={queue:0,queuedBits:0},o=l=>{e.push(l)};return r.forEach(l=>yf(l,n,o)),yf(null,n,o),e.join("")}function Tw(r){return Math.round(Date.now()/1e3)+r}function Cw(){return Symbol("auth-callback")}const qt=()=>typeof window<"u"&&typeof document<"u",dn={tested:!1,writable:!1},dp=()=>{if(!qt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(dn.tested)return dn.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),dn.tested=!0,dn.writable=!0}catch{dn.tested=!0,dn.writable=!1}return dn.writable};function Ew(r){const e={},n=new URL(r);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((l,c)=>{e[c]=l})}catch{}return n.searchParams.forEach((o,l)=>{e[l]=o}),e}const hp=r=>r?(...e)=>r(...e):(...e)=>fetch(...e),_w=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",ni=async(r,e,n)=>{await r.setItem(e,JSON.stringify(n))},Ls=async(r,e)=>{const n=await r.getItem(e);if(!n)return null;try{return JSON.parse(n)}catch{return null}},ft=async(r,e)=>{await r.removeItem(e)};class ol{constructor(){this.promise=new ol.promiseConstructor((e,n)=>{this.resolve=e,this.reject=n})}}ol.promiseConstructor=Promise;function Ia(r){const e=r.split(".");if(e.length!==3)throw new Ka("Invalid JWT structure");for(let o=0;o<e.length;o++)if(!fw.test(e[o]))throw new Ka("JWT not in base64url format");return{header:JSON.parse(xf(e[0])),payload:JSON.parse(xf(e[1])),signature:ai(e[2]),raw:{header:e[0],payload:e[1]}}}async function Pw(r){return await new Promise(e=>{setTimeout(()=>e(null),r)})}function Rw(r,e){return new Promise((o,l)=>{(async()=>{for(let c=0;c<1/0;c++)try{const d=await r(c);if(!e(c,null,d)){o(d);return}}catch(d){if(!e(c,d)){l(d);return}}})()})}function Aw(r){return("0"+r.toString(16)).substr(-2)}function Mw(){const e=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",o=n.length;let l="";for(let c=0;c<56;c++)l+=n.charAt(Math.floor(Math.random()*o));return l}return crypto.getRandomValues(e),Array.from(e,Aw).join("")}async function Iw(r){const n=new TextEncoder().encode(r),o=await crypto.subtle.digest("SHA-256",n),l=new Uint8Array(o);return Array.from(l).map(c=>String.fromCharCode(c)).join("")}async function Dw(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const n=await Iw(r);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function hn(r,e,n=!1){const o=Mw();let l=o;n&&(l+="/recovery"),await ni(r,`${e}-code-verifier`,l);const c=await Dw(o);return[c,o===c?"plain":"s256"]}const Ow=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Lw(r){const e=r.headers.get(Nu);if(!e||!e.match(Ow))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function zw(r){if(!r)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(r<=e)throw new Error("JWT has expired")}function Ww(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const $w=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function fr(r){if(!$w.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ws(r){if(!r.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function ru(){const r={};return new Proxy(r,{get:(e,n)=>{if(n==="__isUserNotAvailableProxy")return!0;if(typeof n=="symbol"){const o=n.toString();if(o==="Symbol(Symbol.toPrimitive)"||o==="Symbol(Symbol.toStringTag)"||o==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,n)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,n)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Hw(r,e){return new Proxy(r,{get:(n,o,l)=>{if(o==="__isInsecureUserWarningProxy")return!0;if(typeof o=="symbol"){const c=o.toString();if(c==="Symbol(Symbol.toPrimitive)"||c==="Symbol(Symbol.toStringTag)"||c==="Symbol(util.inspect.custom)"||c==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(n,o,l)}return!e.value&&typeof o=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(n,o,l)}})}function vf(r){return JSON.parse(JSON.stringify(r))}const fn=r=>{if(typeof r=="object"&&r!==null){const e=r;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(r)},Bw=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function wf(r){var e;if(!_w(r))throw new Tu(fn(r),0);if(Bw.includes(r.status))throw new Tu(fn(r),r.status);let n;try{n=await r.json()}catch(c){throw new Bs(fn(c),c)}let o;const l=Lw(r);if(l&&l.getTime()>=cp["2024-01-01"].timestamp&&typeof n=="object"&&n&&typeof n.code=="string"?o=n.code:typeof n=="object"&&n&&typeof n.error_code=="string"&&(o=n.error_code),o){if(o==="weak_password")throw new pf(fn(n),r.status,((e=n.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(o==="session_not_found")throw new Ct}else if(typeof n=="object"&&n&&typeof n.weak_password=="object"&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((c,d)=>c&&typeof d=="string",!0))throw new pf(fn(n),r.status,n.weak_password.reasons);throw new gw(fn(n),r.status||500,o)}const Fw=(r,e,n,o)=>{const l={method:r,headers:(e==null?void 0:e.headers)||{}};return r==="GET"?l:(l.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),l.body=JSON.stringify(o),Object.assign(Object.assign({},l),n))};async function Ne(r,e,n,o){var l;const c=Object.assign({},o==null?void 0:o.headers);c[Nu]||(c[Nu]=cp["2024-01-01"].name),o!=null&&o.jwt&&(c.Authorization=`Bearer ${o.jwt}`);const d=(l=o==null?void 0:o.query)!==null&&l!==void 0?l:{};o!=null&&o.redirectTo&&(d.redirect_to=o.redirectTo);const m=Object.keys(d).length?"?"+new URLSearchParams(d).toString():"",p=await Uw(r,e,n+m,{headers:c,noResolveJson:o==null?void 0:o.noResolveJson},{},o==null?void 0:o.body);return o!=null&&o.xform?o==null?void 0:o.xform(p):{data:Object.assign({},p),error:null}}async function Uw(r,e,n,o,l,c){const d=Fw(e,o,l,c);let m;try{m=await r(n,Object.assign({},d))}catch(p){throw console.error(p),new Tu(fn(p),0)}if(m.ok||await wf(m),o!=null&&o.noResolveJson)return m;try{return await m.json()}catch(p){await wf(p)}}function Es(r){var e;let n=null;Vw(r)&&(n=Object.assign({},r),r.expires_at||(n.expires_at=Tw(r.expires_in)));const o=(e=r.user)!==null&&e!==void 0?e:typeof(r==null?void 0:r.id)=="string"?r:null;return{data:{session:n,user:o},error:null}}function bf(r){const e=Es(r);return!e.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((n,o)=>n&&typeof o=="string",!0)&&(e.data.weak_password=r.weak_password),e}function Br(r){var e;return{data:{user:(e=r.user)!==null&&e!==void 0?e:r},error:null}}function qw(r){return{data:r,error:null}}function Yw(r){const{action_link:e,email_otp:n,hashed_token:o,redirect_to:l,verification_type:c}=r,d=rl(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:e,email_otp:n,hashed_token:o,redirect_to:l,verification_type:c},p=Object.assign({},d);return{data:{properties:m,user:p},error:null}}function kf(r){return r}function Vw(r){return!!r.access_token&&!!r.refresh_token&&!!r.expires_in}const nu=["global","local","others"];class Gw{constructor({url:e="",headers:n={},fetch:o,experimental:l}){this.url=e,this.headers=n,this.fetch=hp(o),this.experimental=l??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,n=nu[0]){if(nu.indexOf(n)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${nu.join(", ")}`);try{return await Ne(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(o){if(pe(o))return{data:null,error:o};throw o}}async inviteUserByEmail(e,n={}){try{return await Ne(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:Br})}catch(o){if(pe(o))return{data:{user:null},error:o};throw o}}async generateLink(e){try{const{options:n}=e,o=rl(e,["options"]),l=Object.assign(Object.assign({},o),n);return"newEmail"in o&&(l.new_email=o==null?void 0:o.newEmail,delete l.newEmail),await Ne(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:l,headers:this.headers,xform:Yw,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(pe(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(e){try{return await Ne(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Br})}catch(n){if(pe(n))return{data:{user:null},error:n};throw n}}async listUsers(e){var n,o,l,c,d,m,p;try{const g={nextPage:null,lastPage:0,total:0},x=await Ne(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(o=(n=e==null?void 0:e.page)===null||n===void 0?void 0:n.toString())!==null&&o!==void 0?o:"",per_page:(c=(l=e==null?void 0:e.perPage)===null||l===void 0?void 0:l.toString())!==null&&c!==void 0?c:""},xform:kf});if(x.error)throw x.error;const w=await x.json(),b=(d=x.headers.get("x-total-count"))!==null&&d!==void 0?d:0,v=(p=(m=x.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return v.length>0&&(v.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),j=JSON.parse(S.split(";")[1].split("=")[1]);g[`${j}Page`]=T}),g.total=parseInt(b)),{data:Object.assign(Object.assign({},w),g),error:null}}catch(g){if(pe(g))return{data:{users:[]},error:g};throw g}}async getUserById(e){fr(e);try{return await Ne(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Br})}catch(n){if(pe(n))return{data:{user:null},error:n};throw n}}async updateUserById(e,n){fr(e);try{return await Ne(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:n,headers:this.headers,xform:Br})}catch(o){if(pe(o))return{data:{user:null},error:o};throw o}}async deleteUser(e,n=!1){fr(e);try{return await Ne(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:n},xform:Br})}catch(o){if(pe(o))return{data:{user:null},error:o};throw o}}async _listFactors(e){fr(e.userId);try{const{data:n,error:o}=await Ne(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:l=>({data:{factors:l},error:null})});return{data:n,error:o}}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _deleteFactor(e){fr(e.userId),fr(e.id);try{return{data:await Ne(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _listOAuthClients(e){var n,o,l,c,d,m,p;try{const g={nextPage:null,lastPage:0,total:0},x=await Ne(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(o=(n=e==null?void 0:e.page)===null||n===void 0?void 0:n.toString())!==null&&o!==void 0?o:"",per_page:(c=(l=e==null?void 0:e.perPage)===null||l===void 0?void 0:l.toString())!==null&&c!==void 0?c:""},xform:kf});if(x.error)throw x.error;const w=await x.json(),b=(d=x.headers.get("x-total-count"))!==null&&d!==void 0?d:0,v=(p=(m=x.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return v.length>0&&(v.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),j=JSON.parse(S.split(";")[1].split("=")[1]);g[`${j}Page`]=T}),g.total=parseInt(b)),{data:Object.assign(Object.assign({},w),g),error:null}}catch(g){if(pe(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(e){try{return await Ne(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _getOAuthClient(e){try{return await Ne(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _updateOAuthClient(e,n){try{return await Ne(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:n,headers:this.headers,xform:o=>({data:o,error:null})})}catch(o){if(pe(o))return{data:null,error:o};throw o}}async _deleteOAuthClient(e){try{return await Ne(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _regenerateOAuthClientSecret(e){try{return await Ne(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _listCustomProviders(e){try{const n={};return e!=null&&e.type&&(n.type=e.type),await Ne(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:n,xform:o=>{var l;return{data:{providers:(l=o==null?void 0:o.providers)!==null&&l!==void 0?l:[]},error:null}}})}catch(n){if(pe(n))return{data:{providers:[]},error:n};throw n}}async _createCustomProvider(e){try{return await Ne(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _getCustomProvider(e){try{return await Ne(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _updateCustomProvider(e,n){try{return await Ne(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:n,headers:this.headers,xform:o=>({data:o,error:null})})}catch(o){if(pe(o))return{data:null,error:o};throw o}}async _deleteCustomProvider(e){try{return await Ne(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _adminListPasskeys(e){Ws(this.experimental),fr(e.userId);try{return await Ne(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(pe(n))return{data:null,error:n};throw n}}async _adminDeletePasskey(e){Ws(this.experimental),fr(e.userId),fr(e.passkeyId);try{return await Ne(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(n){if(pe(n))return{data:null,error:n};throw n}}}function jf(r={}){return{getItem:e=>r[e]||null,setItem:(e,n)=>{r[e]=n},removeItem:e=>{delete r[e]}}}globalThis&&dp()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class Kw extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Jw(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function mp(r){if(!/^0x[a-fA-F0-9]{40}$/.test(r))throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);return r.toLowerCase()}function Qw(r){return parseInt(r,16)}function Xw(r){const e=new TextEncoder().encode(r);return"0x"+Array.from(e,o=>o.toString(16).padStart(2,"0")).join("")}function Zw(r){var e;const{chainId:n,domain:o,expirationTime:l,issuedAt:c=new Date,nonce:d,notBefore:m,requestId:p,resources:g,scheme:x,uri:w,version:b}=r;{if(!Number.isInteger(n))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${n}`);if(!o)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(d&&d.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`);if(!w)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(b!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${b}`);if(!((e=r.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)}const v=mp(r.address),S=x?`${x}://${o}`:o,T=r.statement?`${r.statement}
`:"",j=`${S} wants you to sign in with your Ethereum account:
${v}

${T}`;let W=`URI: ${w}
Version: ${b}
Chain ID: ${n}${d?`
Nonce: ${d}`:""}
Issued At: ${c.toISOString()}`;if(l&&(W+=`
Expiration Time: ${l.toISOString()}`),m&&(W+=`
Not Before: ${m.toISOString()}`),p&&(W+=`
Request ID: ${p}`),g){let L=`
Resources:`;for(const H of g){if(!H||typeof H!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${H}`);L+=`
- ${H}`}W+=L}return`${j}
${W}`}class xt extends Error{constructor({message:e,code:n,cause:o,name:l}){var c;super(e,{cause:o}),this.__isWebAuthnError=!0,this.name=(c=l??(o instanceof Error?o.name:void 0))!==null&&c!==void 0?c:"Unknown Error",this.code=n}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Qa extends xt{constructor(e,n){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n,message:e}),this.name="WebAuthnUnknownError",this.originalError=n}}function eb({error:r,options:e}){var n,o,l;const{publicKey:c}=e;if(!c)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(e.signal instanceof AbortSignal)return new xt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else if(r.name==="ConstraintError"){if(((n=c.authenticatorSelection)===null||n===void 0?void 0:n.requireResidentKey)===!0)return new xt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:r});if(e.mediation==="conditional"&&((o=c.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new xt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:r});if(((l=c.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new xt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:r})}else{if(r.name==="InvalidStateError")return new xt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:r});if(r.name==="NotAllowedError")return new xt({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="NotSupportedError")return c.pubKeyCredParams.filter(m=>m.type==="public-key").length===0?new xt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:r}):new xt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:r});if(r.name==="SecurityError"){const d=window.location.hostname;if(fp(d)){if(c.rp.id!==d)return new xt({message:`The RP ID "${c.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new xt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="TypeError"){if(c.user.id.byteLength<1||c.user.id.byteLength>64)return new xt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:r})}else if(r.name==="UnknownError")return new xt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new xt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}function tb({error:r,options:e}){const{publicKey:n}=e;if(!n)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(e.signal instanceof AbortSignal)return new xt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else{if(r.name==="NotAllowedError")return new xt({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="SecurityError"){const o=window.location.hostname;if(fp(o)){if(n.rpId!==o)return new xt({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new xt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="UnknownError")return new xt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new xt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}class sb{createNewAbortSignal(){if(this.controller){const n=new Error("Cancelling existing WebAuthn API call for new one");n.name="AbortError",this.controller.abort(n)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Cu=new sb;function Sf(r){if(!r)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(r);const{challenge:e,user:n,excludeCredentials:o}=r,l=rl(r,["challenge","user","excludeCredentials"]),c=ai(e).buffer,d=Object.assign(Object.assign({},n),{id:ai(n.id).buffer}),m=Object.assign(Object.assign({},l),{challenge:c,user:d});if(o&&o.length>0){m.excludeCredentials=new Array(o.length);for(let p=0;p<o.length;p++){const g=o[p];m.excludeCredentials[p]=Object.assign(Object.assign({},g),{id:ai(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return m}function Nf(r){if(!r)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(r);const{challenge:e,allowCredentials:n}=r,o=rl(r,["challenge","allowCredentials"]),l=ai(e).buffer,c=Object.assign(Object.assign({},o),{challenge:l});if(n&&n.length>0){c.allowCredentials=new Array(n.length);for(let d=0;d<n.length;d++){const m=n[d];c.allowCredentials[d]=Object.assign(Object.assign({},m),{id:ai(m.id).buffer,type:m.type||"public-key",transports:m.transports})}}return c}function Tf(r){var e;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const n=r;return{id:r.id,rawId:r.id,response:{attestationObject:yn(new Uint8Array(r.response.attestationObject)),clientDataJSON:yn(new Uint8Array(r.response.clientDataJSON))},type:"public-key",clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:(e=n.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Cf(r){var e;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const n=r,o=r.getClientExtensionResults(),l=r.response;return{id:r.id,rawId:r.id,response:{authenticatorData:yn(new Uint8Array(l.authenticatorData)),clientDataJSON:yn(new Uint8Array(l.clientDataJSON)),signature:yn(new Uint8Array(l.signature)),userHandle:l.userHandle?yn(new Uint8Array(l.userHandle)):void 0},type:"public-key",clientExtensionResults:o,authenticatorAttachment:(e=n.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function fp(r){return r==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)}function Xa(){var r,e;return!!(qt()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((r=navigator==null?void 0:navigator.credentials)===null||r===void 0?void 0:r.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function pp(r){try{const e=await navigator.credentials.create(r);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Qa("Browser returned unexpected credential type",e)}:{data:null,error:new Qa("Empty credential response",e)}}catch(e){return{data:null,error:eb({error:e,options:r})}}}async function gp(r){try{const e=await navigator.credentials.get(r);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Qa("Browser returned unexpected credential type",e)}:{data:null,error:new Qa("Empty credential response",e)}}catch(e){return{data:null,error:tb({error:e,options:r})}}}const rb={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},nb={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Za(...r){const e=l=>l!==null&&typeof l=="object"&&!Array.isArray(l),n=l=>l instanceof ArrayBuffer||ArrayBuffer.isView(l),o={};for(const l of r)if(l)for(const c in l){const d=l[c];if(d!==void 0)if(Array.isArray(d))o[c]=d;else if(n(d))o[c]=d;else if(e(d)){const m=o[c];e(m)?o[c]=Za(m,d):o[c]=Za(d)}else o[c]=d}return o}function ib(r,e){return Za(rb,r,e||{})}function ob(r,e){return Za(nb,r,e||{})}class ab{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:n,friendlyName:o,signal:l},c){var d;try{const{data:m,error:p}=await this.client.mfa.challenge({factorId:e,webauthn:n});if(!m)return{data:null,error:p};const g=l??Cu.createNewAbortSignal();if(m.webauthn.type==="create"){const{user:x}=m.webauthn.credential_options.publicKey;if(!x.name){const w=o;if(w)x.name=`${x.id}:${w}`;else{const v=(await this.client.getUser()).data.user,S=((d=v==null?void 0:v.user_metadata)===null||d===void 0?void 0:d.name)||(v==null?void 0:v.email)||(v==null?void 0:v.id)||"User";x.name=`${x.id}:${S}`}}x.displayName||(x.displayName=x.name)}switch(m.webauthn.type){case"create":{const x=ib(m.webauthn.credential_options.publicKey,c==null?void 0:c.create),{data:w,error:b}=await pp({publicKey:x,signal:g});return w?{data:{factorId:e,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:w}},error:null}:{data:null,error:b}}case"request":{const x=ob(m.webauthn.credential_options.publicKey,c==null?void 0:c.request),{data:w,error:b}=await gp(Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:x,signal:g}));return w?{data:{factorId:e,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:w}},error:null}:{data:null,error:b}}}}catch(m){return pe(m)?{data:null,error:m}:{data:null,error:new Bs("Unexpected error in challenge",m)}}}async _verify({challengeId:e,factorId:n,webauthn:o}){return this.client.mfa.verify({factorId:n,challengeId:e,webauthn:o})}async _authenticate({factorId:e,webauthn:{rpId:n=typeof window<"u"?window.location.hostname:void 0,rpOrigins:o=typeof window<"u"?[window.location.origin]:void 0,signal:l}={}},c){if(!n)return{data:null,error:new co("rpId is required for WebAuthn authentication")};try{if(!Xa())return{data:null,error:new Bs("Browser does not support WebAuthn",null)};const{data:d,error:m}=await this.challenge({factorId:e,webauthn:{rpId:n,rpOrigins:o},signal:l},{request:c});if(!d)return{data:null,error:m};const{webauthn:p}=d;return this._verify({factorId:e,challengeId:d.challengeId,webauthn:{type:p.type,rpId:n,rpOrigins:o,credential_response:p.credential_response}})}catch(d){return pe(d)?{data:null,error:d}:{data:null,error:new Bs("Unexpected error in authenticate",d)}}}async _register({friendlyName:e,webauthn:{rpId:n=typeof window<"u"?window.location.hostname:void 0,rpOrigins:o=typeof window<"u"?[window.location.origin]:void 0,signal:l}={}},c){if(!n)return{data:null,error:new co("rpId is required for WebAuthn registration")};try{if(!Xa())return{data:null,error:new Bs("Browser does not support WebAuthn",null)};const{data:d,error:m}=await this._enroll({friendlyName:e});if(!d)return await this.client.mfa.listFactors().then(x=>{var w;return(w=x.data)===null||w===void 0?void 0:w.all.find(b=>b.factor_type==="webauthn"&&b.friendly_name===e&&b.status!=="unverified")}).then(x=>x?this.client.mfa.unenroll({factorId:x==null?void 0:x.id}):void 0),{data:null,error:m};const{data:p,error:g}=await this._challenge({factorId:d.id,friendlyName:d.friendly_name,webauthn:{rpId:n,rpOrigins:o},signal:l},{create:c});return p?this._verify({factorId:d.id,challengeId:p.challengeId,webauthn:{rpId:n,rpOrigins:o,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:g}}catch(d){return pe(d)?{data:null,error:d}:{data:null,error:new Bs("Unexpected error in register",d)}}}}Jw();const lb={url:dw,storageKey:hw,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:mw,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},ei={};class uo{get jwks(){var e,n;return(n=(e=ei[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&n!==void 0?n:{keys:[]}}set jwks(e){ei[this.storageKey]=Object.assign(Object.assign({},ei[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,n;return(n=(e=ei[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&n!==void 0?n:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){ei[this.storageKey]=Object.assign(Object.assign({},ei[this.storageKey]),{cachedAt:e})}constructor(e){var n,o,l;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const c=Object.assign(Object.assign({},lb),e);if(this.storageKey=c.storageKey,this.instanceID=(n=uo.nextInstanceID[this.storageKey])!==null&&n!==void 0?n:0,uo.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!c.debug,typeof c.debug=="function"&&(this.logger=c.debug),this.instanceID>0&&qt()){const d=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(d),this.logDebugMessages&&console.trace(d)}if(this.persistSession=c.persistSession,this.autoRefreshToken=c.autoRefreshToken,this.experimental=(o=c.experimental)!==null&&o!==void 0?o:{},this.admin=new Gw({url:c.url,headers:c.headers,fetch:c.fetch,experimental:this.experimental}),this.url=c.url,this.headers=c.headers,this.fetch=hp(c.fetch),this.detectSessionInUrl=c.detectSessionInUrl,this.flowType=c.flowType,this.hasCustomAuthorizationHeader=c.hasCustomAuthorizationHeader,this.throwOnError=c.throwOnError,this.lockAcquireTimeout=c.lockAcquireTimeout,c.lock!=null&&(this.lock=c.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new ab(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(c.storage?this.storage=c.storage:dp()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=jf(this.memoryStorage)),c.userStorage&&(this.userStorage=c.userStorage)):(this.memoryStorage={},this.storage=jf(this.memoryStorage)),qt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(d){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",d)}(l=this.broadcastChannel)===null||l===void 0||l.addEventListener("message",async d=>{this._debug("received broadcast notification from other tab or client",d),(d.data.event==="TOKEN_REFRESHED"||d.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(d.data.event,d.data.session,!1)}catch(m){this._debug("#broadcastChannel","error",m)}})}c.skipAutoInitialize||this.initialize().catch(d=>{this._debug("#initialize()","error",d)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${lp}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let n={},o="none";if(qt()&&(n=Ew(window.location.href),this._isImplicitGrantCallback(n)?o="implicit":await this._isPKCECallback(n)&&(o="pkce")),qt()&&this.detectSessionInUrl&&o!=="none"){const{data:l,error:c}=await this._getSessionFromURL(n,o);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),xw(c)){const p=(e=c.details)===null||e===void 0?void 0:e.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:c}}return{error:c}}const{session:d,redirectType:m}=l;return this._debug("#_initialize()","detected session in URL",d,"redirect type",m),await this._saveSession(d),setTimeout(async()=>{m==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",d):await this._notifyAllSubscribers("SIGNED_IN",d)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(n){return pe(n)?this._returnResult({error:n}):this._returnResult({error:new Bs("Unexpected error during initialization",n)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var n,o,l;try{const c=await Ne(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(o=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.data)!==null&&o!==void 0?o:{},gotrue_meta_security:{captcha_token:(l=e==null?void 0:e.options)===null||l===void 0?void 0:l.captchaToken}},xform:Es}),{data:d,error:m}=c;if(m||!d)return this._returnResult({data:{user:null,session:null},error:m});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(pe(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signUp(e){var n,o,l;try{let c;if("email"in e){const{email:x,password:w,options:b}=e;let v=null,S=null;this.flowType==="pkce"&&([v,S]=await hn(this.storage,this.storageKey)),c=await Ne(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:b==null?void 0:b.emailRedirectTo,body:{email:x,password:w,data:(n=b==null?void 0:b.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:b==null?void 0:b.captchaToken},code_challenge:v,code_challenge_method:S},xform:Es})}else if("phone"in e){const{phone:x,password:w,options:b}=e;c=await Ne(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:x,password:w,data:(o=b==null?void 0:b.data)!==null&&o!==void 0?o:{},channel:(l=b==null?void 0:b.channel)!==null&&l!==void 0?l:"sms",gotrue_meta_security:{captcha_token:b==null?void 0:b.captchaToken}},xform:Es})}else throw new Aa("You must provide either an email or phone number and a password");const{data:d,error:m}=c;if(m||!d)return await ft(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:m});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithPassword(e){try{let n;if("email"in e){const{email:c,password:d,options:m}=e;n=await Ne(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:d,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:bf})}else if("phone"in e){const{phone:c,password:d,options:m}=e;n=await Ne(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:d,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:bf})}else throw new Aa("You must provide either an email or phone number and a password");const{data:o,error:l}=n;if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o||!o.session||!o.user){const c=new Zn;return this._returnResult({data:{user:null,session:null},error:c})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",o.session)),this._returnResult({data:Object.assign({user:o.user,session:o.session},o.weak_password?{weakPassword:o.weak_password}:null),error:l})}catch(n){if(pe(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signInWithOAuth(e){var n,o,l,c;return await this._handleProviderSignIn(e.provider,{redirectTo:(n=e.options)===null||n===void 0?void 0:n.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:(c=e.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:n}=e;switch(n){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`)}}async signInWithEthereum(e){var n,o,l,c,d,m,p,g,x,w,b;let v,S;if("message"in e)v=e.message,S=e.signature;else{const{chain:T,wallet:j,statement:W,options:L}=e;let H;if(qt())if(typeof j=="object")H=j;else{const ke=window;if("ethereum"in ke&&typeof ke.ethereum=="object"&&"request"in ke.ethereum&&typeof ke.ethereum.request=="function")H=ke.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof j!="object"||!(L!=null&&L.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");H=j}const q=new URL((n=L==null?void 0:L.url)!==null&&n!==void 0?n:window.location.href),K=await H.request({method:"eth_requestAccounts"}).then(ke=>ke).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!K||K.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const R=mp(K[0]);let F=(o=L==null?void 0:L.signInWithEthereum)===null||o===void 0?void 0:o.chainId;if(!F){const ke=await H.request({method:"eth_chainId"});F=Qw(ke)}const me={domain:q.host,address:R,statement:W,uri:q.href,version:"1",chainId:F,nonce:(l=L==null?void 0:L.signInWithEthereum)===null||l===void 0?void 0:l.nonce,issuedAt:(d=(c=L==null?void 0:L.signInWithEthereum)===null||c===void 0?void 0:c.issuedAt)!==null&&d!==void 0?d:new Date,expirationTime:(m=L==null?void 0:L.signInWithEthereum)===null||m===void 0?void 0:m.expirationTime,notBefore:(p=L==null?void 0:L.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(g=L==null?void 0:L.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(x=L==null?void 0:L.signInWithEthereum)===null||x===void 0?void 0:x.resources};v=Zw(me),S=await H.request({method:"personal_sign",params:[Xw(v),R]})}try{const{data:T,error:j}=await Ne(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:v,signature:S},!((w=e.options)===null||w===void 0)&&w.captchaToken?{gotrue_meta_security:{captcha_token:(b=e.options)===null||b===void 0?void 0:b.captchaToken}}:null),xform:Es});if(j)throw j;if(!T||!T.session||!T.user){const W=new Zn;return this._returnResult({data:{user:null,session:null},error:W})}return T.session&&(await this._saveSession(T.session),await this._notifyAllSubscribers("SIGNED_IN",T.session)),this._returnResult({data:Object.assign({},T),error:j})}catch(T){if(pe(T))return this._returnResult({data:{user:null,session:null},error:T});throw T}}async signInWithSolana(e){var n,o,l,c,d,m,p,g,x,w,b,v;let S,T;if("message"in e)S=e.message,T=e.signature;else{const{chain:j,wallet:W,statement:L,options:H}=e;let q;if(qt())if(typeof W=="object")q=W;else{const R=window;if("solana"in R&&typeof R.solana=="object"&&("signIn"in R.solana&&typeof R.solana.signIn=="function"||"signMessage"in R.solana&&typeof R.solana.signMessage=="function"))q=R.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof W!="object"||!(H!=null&&H.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");q=W}const K=new URL((n=H==null?void 0:H.url)!==null&&n!==void 0?n:window.location.href);if("signIn"in q&&q.signIn){const R=await q.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},H==null?void 0:H.signInWithSolana),{version:"1",domain:K.host,uri:K.href}),L?{statement:L}:null));let F;if(Array.isArray(R)&&R[0]&&typeof R[0]=="object")F=R[0];else if(R&&typeof R=="object"&&"signedMessage"in R&&"signature"in R)F=R;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in F&&"signature"in F&&(typeof F.signedMessage=="string"||F.signedMessage instanceof Uint8Array)&&F.signature instanceof Uint8Array)S=typeof F.signedMessage=="string"?F.signedMessage:new TextDecoder().decode(F.signedMessage),T=F.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in q)||typeof q.signMessage!="function"||!("publicKey"in q)||typeof q!="object"||!q.publicKey||!("toBase58"in q.publicKey)||typeof q.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");S=[`${K.host} wants you to sign in with your Solana account:`,q.publicKey.toBase58(),...L?["",L,""]:[""],"Version: 1",`URI: ${K.href}`,`Issued At: ${(l=(o=H==null?void 0:H.signInWithSolana)===null||o===void 0?void 0:o.issuedAt)!==null&&l!==void 0?l:new Date().toISOString()}`,...!((c=H==null?void 0:H.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${H.signInWithSolana.notBefore}`]:[],...!((d=H==null?void 0:H.signInWithSolana)===null||d===void 0)&&d.expirationTime?[`Expiration Time: ${H.signInWithSolana.expirationTime}`]:[],...!((m=H==null?void 0:H.signInWithSolana)===null||m===void 0)&&m.chainId?[`Chain ID: ${H.signInWithSolana.chainId}`]:[],...!((p=H==null?void 0:H.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${H.signInWithSolana.nonce}`]:[],...!((g=H==null?void 0:H.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${H.signInWithSolana.requestId}`]:[],...!((w=(x=H==null?void 0:H.signInWithSolana)===null||x===void 0?void 0:x.resources)===null||w===void 0)&&w.length?["Resources",...H.signInWithSolana.resources.map(F=>`- ${F}`)]:[]].join(`
`);const R=await q.signMessage(new TextEncoder().encode(S),"utf8");if(!R||!(R instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");T=R}}try{const{data:j,error:W}=await Ne(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:S,signature:yn(T)},!((b=e.options)===null||b===void 0)&&b.captchaToken?{gotrue_meta_security:{captcha_token:(v=e.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:Es});if(W)throw W;if(!j||!j.session||!j.user){const L=new Zn;return this._returnResult({data:{user:null,session:null},error:L})}return j.session&&(await this._saveSession(j.session),await this._notifyAllSubscribers("SIGNED_IN",j.session)),this._returnResult({data:Object.assign({},j),error:W})}catch(j){if(pe(j))return this._returnResult({data:{user:null,session:null},error:j});throw j}}async _exchangeCodeForSession(e){const n=await Ls(this.storage,`${this.storageKey}-code-verifier`),[o,l]=(n??"").split("/");try{if(!o&&this.flowType==="pkce")throw new vw;const{data:c,error:d}=await Ne(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:Es});if(await ft(this.storage,`${this.storageKey}-code-verifier`),d)throw d;if(!c||!c.session||!c.user){const m=new Zn;return this._returnResult({data:{user:null,session:null,redirectType:null},error:m})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:l??null}),error:d})}catch(c){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:n,provider:o,token:l,access_token:c,nonce:d}=e,m=await Ne(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:o,id_token:l,access_token:c,nonce:d,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:Es}),{data:p,error:g}=m;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p||!p.session||!p.user){const x=new Zn;return this._returnResult({data:{user:null,session:null},error:x})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:g})}catch(n){if(pe(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signInWithOtp(e){var n,o,l,c,d;try{if("email"in e){const{email:m,options:p}=e;let g=null,x=null;this.flowType==="pkce"&&([g,x]=await hn(this.storage,this.storageKey));const{error:w}=await Ne(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(n=p==null?void 0:p.data)!==null&&n!==void 0?n:{},create_user:(o=p==null?void 0:p.shouldCreateUser)!==null&&o!==void 0?o:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:x},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:w})}if("phone"in e){const{phone:m,options:p}=e,{data:g,error:x}=await Ne(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(l=p==null?void 0:p.data)!==null&&l!==void 0?l:{},create_user:(c=p==null?void 0:p.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(d=p==null?void 0:p.channel)!==null&&d!==void 0?d:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:x})}throw new Aa("You must provide either an email or phone number.")}catch(m){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async verifyOtp(e){var n,o;try{let l,c;"options"in e&&(l=(n=e.options)===null||n===void 0?void 0:n.redirectTo,c=(o=e.options)===null||o===void 0?void 0:o.captchaToken);const{data:d,error:m}=await Ne(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:c}}),redirectTo:l,xform:Es});if(m)throw m;if(!d)throw new Error("An error occurred on token verification.");const p=d.session,g=d.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(l){if(pe(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async signInWithSSO(e){var n,o,l,c,d;try{let m=null,p=null;this.flowType==="pkce"&&([m,p]=await hn(this.storage,this.storageKey));const g=await Ne(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(o=(n=e.options)===null||n===void 0?void 0:n.redirectTo)!==null&&o!==void 0?o:void 0}),!((l=e==null?void 0:e.options)===null||l===void 0)&&l.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:m,code_challenge_method:p}),headers:this.headers,xform:qw});return!((c=g.data)===null||c===void 0)&&c.url&&qt()&&!(!((d=e.options)===null||d===void 0)&&d.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(m){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(m))return this._returnResult({data:null,error:m});throw m}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:n},error:o}=e;if(o)throw o;if(!n)throw new Ct;const{error:l}=await Ne(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return this._returnResult({data:{user:null,session:null},error:l})})}catch(e){if(pe(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const n=`${this.url}/resend`;if("email"in e){const{email:o,type:l,options:c}=e;let d=null,m=null;this.flowType==="pkce"&&([d,m]=await hn(this.storage,this.storageKey));const{error:p}=await Ne(this.fetch,"POST",n,{headers:this.headers,body:{email:o,type:l,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:d,code_challenge_method:m},redirectTo:c==null?void 0:c.emailRedirectTo});return p&&await ft(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in e){const{phone:o,type:l,options:c}=e,{data:d,error:m}=await Ne(this.fetch,"POST",n,{headers:this.headers,body:{phone:o,type:l,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:m})}throw new Aa("You must provide either an email or phone number and a type")}catch(n){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,n){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const o=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),l=(async()=>(await o,await n()))();return this.pendingInLock.push((async()=>{try{await l}catch{}})()),l}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const o=n();for(this.pendingInLock.push((async()=>{try{await o}catch{}})()),await o;this.pendingInLock.length;){const l=[...this.pendingInLock];await Promise.all(l),this.pendingInLock.splice(0,l.length)}return await o}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await e(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const n=await Ls(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?e=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const o=e.expires_at?e.expires_at*1e3-Date.now()<su:!1;if(this._debug("#__loadSession()",`session has${o?"":" not"} expired`,"expires_at",e.expires_at),!o){if(this.userStorage){const d=await Ls(this.userStorage,this.storageKey+"-user");d!=null&&d.user?e.user=d.user:e.user=ru()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const d={value:this.suppressGetSessionWarning};e.user=Hw(e.user,d),d.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:l,error:c}=await this._callRefreshToken(e.refresh_token);if(c){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const m=await Ls(this.storage,this.storageKey);if(m&&m.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:c})}return this._returnResult({data:{session:l},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let n;return this.lock!=null?n=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):n=await this._getUser(),n.data.user&&(this.suppressGetSessionWarning=!0),n}async _getUser(e){try{return e?await Ne(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Br}):await this._useSession(async n=>{var o,l,c;const{data:d,error:m}=n;if(m)throw m;return!(!((o=d.session)===null||o===void 0)&&o.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Ct}:await Ne(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(l=d.session)===null||l===void 0?void 0:l.access_token)!==null&&c!==void 0?c:void 0,xform:Br})})}catch(n){if(pe(n))return Ra(n)&&(await this._removeSession(),await ft(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:n});throw n}}async updateUser(e,n={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,n)):await this._updateUser(e,n)}async _updateUser(e,n={}){try{return await this._useSession(async o=>{const{data:l,error:c}=o;if(c)throw c;if(!l.session)throw new Ct;const d=l.session;let m=null,p=null;this.flowType==="pkce"&&e.email!=null&&([m,p]=await hn(this.storage,this.storageKey));const{data:g,error:x}=await Ne(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:m,code_challenge_method:p}),jwt:d.access_token,xform:Br});if(x)throw x;return d.user=g.user,await this._saveSession(d),await this._notifyAllSubscribers("USER_UPDATED",d),this._returnResult({data:{user:d.user},error:null})})}catch(o){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(o))return this._returnResult({data:{user:null},error:o});throw o}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Ct;const n=Date.now()/1e3;let o=n,l=!0,c=null;const{payload:d}=Ia(e.access_token);if(d.exp&&(o=d.exp,l=o<=n),l){const{data:m,error:p}=await this._callRefreshToken(e.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!m)return{data:{user:null,session:null},error:null};c=m}else{const{data:m,error:p}=await this._getUser(e.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});c={access_token:e.access_token,refresh_token:e.refresh_token,user:m.user,token_type:"bearer",expires_in:o-n,expires_at:o},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return this._returnResult({data:{user:c.user,session:c},error:null})}catch(n){if(pe(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async n=>{var o;if(!e){const{data:d,error:m}=n;if(m)throw m;e=(o=d.session)!==null&&o!==void 0?o:void 0}if(!(e!=null&&e.refresh_token))throw new Ct;const{data:l,error:c}=await this._callRefreshToken(e.refresh_token);return c?this._returnResult({data:{user:null,session:null},error:c}):l?this._returnResult({data:{user:l.user,session:l},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(n){if(pe(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async _getSessionFromURL(e,n){var o;try{if(!qt())throw new Ma("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ma(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(n){case"implicit":if(this.flowType==="pkce")throw new hf("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ma("Not a valid implicit grant flow url.");break;default:}if(n==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new hf("No code detected.");const{data:H,error:q}=await this._exchangeCodeForSession(e.code);if(q)throw q;const K=new URL(window.location.href);return K.searchParams.delete("code"),window.history.replaceState(window.history.state,"",K.toString()),{data:{session:H.session,redirectType:(o=H.redirectType)!==null&&o!==void 0?o:null},error:null}}const{provider_token:l,provider_refresh_token:c,access_token:d,refresh_token:m,expires_in:p,expires_at:g,token_type:x}=e;if(!d||!p||!m||!x)throw new Ma("No session defined in URL");const w=Math.round(Date.now()/1e3),b=parseInt(p);let v=w+b;g&&(v=parseInt(g));const S=v-w;S*1e3<=yr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${b}s`);const T=v-b;w-T>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",T,v,w):w-T<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",T,v,w);const{data:j,error:W}=await this._getUser(d);if(W)throw W;const L={provider_token:l,provider_refresh_token:c,access_token:d,expires_in:b,expires_at:v,refresh_token:m,token_type:x,user:j.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:L,redirectType:e.type},error:null})}catch(l){if(pe(l))return this._returnResult({data:{session:null,redirectType:null},error:l});throw l}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const n=await Ls(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&n)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async n=>{var o;const{data:l,error:c}=n;if(c&&!Ra(c))return this._returnResult({error:c});const d=(o=l.session)===null||o===void 0?void 0:o.access_token;if(d){const{error:m}=await this.admin.signOut(d,e);if(m&&!(yw(m)&&(m.status===404||m.status===401||m.status===403)||Ra(m)))return this._returnResult({error:m})}return e!=="others"&&(await this._removeSession(),await ft(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const n=Cw(),o={id:n,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,o),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(n)}):await this._emitInitialSession(n)))(),{data:{subscription:o}}}async _emitInitialSession(e){return await this._useSession(async n=>{var o,l;try{const{data:{session:c},error:d}=n;if(d)throw d;await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",e,"session",c)}catch(c){await((l=this.stateChangeEmitters.get(e))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",c),Ra(c)?console.warn(c):console.error(c)}})}async resetPasswordForEmail(e,n={}){let o=null,l=null;this.flowType==="pkce"&&([o,l]=await hn(this.storage,this.storageKey,!0));try{return await Ne(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:o,code_challenge_method:l,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(c){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(c))return this._returnResult({data:null,error:c});throw c}}async getUserIdentities(){var e;try{const{data:n,error:o}=await this.getUser();if(o)throw o;return this._returnResult({data:{identities:(e=n.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var n;try{const{data:o,error:l}=await this._useSession(async c=>{var d,m,p,g,x;const{data:w,error:b}=c;if(b)throw b;const v=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(d=e.options)===null||d===void 0?void 0:d.redirectTo,scopes:(m=e.options)===null||m===void 0?void 0:m.scopes,queryParams:(p=e.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await Ne(this.fetch,"GET",v,{headers:this.headers,jwt:(x=(g=w.session)===null||g===void 0?void 0:g.access_token)!==null&&x!==void 0?x:void 0})});if(l)throw l;return qt()&&!(!((n=e.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(o==null?void 0:o.url),this._returnResult({data:{provider:e.provider,url:o==null?void 0:o.url},error:null})}catch(o){if(pe(o))return this._returnResult({data:{provider:e.provider,url:null},error:o});throw o}}async linkIdentityIdToken(e){return await this._useSession(async n=>{var o;try{const{error:l,data:{session:c}}=n;if(l)throw l;const{options:d,provider:m,token:p,access_token:g,nonce:x}=e,w=await Ne(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(o=c==null?void 0:c.access_token)!==null&&o!==void 0?o:void 0,body:{provider:m,id_token:p,access_token:g,nonce:x,link_identity:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:Es}),{data:b,error:v}=w;return v?this._returnResult({data:{user:null,session:null},error:v}):!b||!b.session||!b.user?this._returnResult({data:{user:null,session:null},error:new Zn}):(b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers("USER_UPDATED",b.session)),this._returnResult({data:b,error:v}))}catch(l){if(await ft(this.storage,`${this.storageKey}-code-verifier`),pe(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}})}async unlinkIdentity(e){try{return await this._useSession(async n=>{var o,l;const{data:c,error:d}=n;if(d)throw d;return await Ne(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(l=(o=c.session)===null||o===void 0?void 0:o.access_token)!==null&&l!==void 0?l:void 0})})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async _refreshAccessToken(e){const n="#_refreshAccessToken()";this._debug(n,"begin");try{const o=Date.now();return await Rw(async l=>(l>0&&await Pw(200*Math.pow(2,l-1)),this._debug(n,"refreshing attempt",l),await Ne(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Es})),(l,c)=>{const d=200*Math.pow(2,l);return c&&mf(c)&&Date.now()+d-o<yr})}catch(o){if(this._debug(n,"error",o),pe(o))return this._returnResult({data:{session:null,user:null},error:o});throw o}finally{this._debug(n,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,n){const o=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",n,"url",o),qt()&&!n.skipBrowserRedirect&&window.location.assign(o),{data:{provider:e,url:o},error:null}}async _recoverAndRefresh(){var e,n;const o="#_recoverAndRefresh()";this._debug(o,"begin");try{const l=await Ls(this.storage,this.storageKey);if(l&&this.userStorage){let d=await Ls(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!d&&(d={user:l.user},await ni(this.userStorage,this.storageKey+"-user",d)),l.user=(e=d==null?void 0:d.user)!==null&&e!==void 0?e:ru()}else if(l&&!l.user&&!l.user){const d=await Ls(this.storage,this.storageKey+"-user");d&&(d!=null&&d.user)?(l.user=d.user,await ft(this.storage,this.storageKey+"-user"),await ni(this.storage,this.storageKey,l)):l.user=ru()}if(this._debug(o,"session from storage",l),!this._isValidSession(l)){this._debug(o,"session is not valid"),l!==null&&await this._removeSession();return}const c=((n=l.expires_at)!==null&&n!==void 0?n:1/0)*1e3-Date.now()<su;if(this._debug(o,`session has${c?"":" not"} expired with margin of ${su}s`),c){if(this.autoRefreshToken&&l.refresh_token){const{error:d}=await this._callRefreshToken(l.refresh_token);d&&(ww(d)?this._debug(o,"refresh discarded by commit guard",d):this._debug(o,"refresh failed",d))}}else if(l.user&&l.user.__isUserNotAvailableProxy===!0)try{const{data:d,error:m}=await this._getUser(l.access_token);!m&&(d!=null&&d.user)?(l.user=d.user,await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)):this._debug(o,"could not get user data, skipping SIGNED_IN notification")}catch(d){console.error("Error getting user data:",d),this._debug(o,"error getting user data, skipping SIGNED_IN notification",d)}else await this._notifyAllSubscribers("SIGNED_IN",l)}catch(l){this._debug(o,"error",l),console.error(l);return}finally{this._debug(o,"end")}}async _callRefreshToken(e){var n,o;if(!e)throw new Ct;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const l="#_callRefreshToken()";this._debug(l,"begin");try{this.refreshingDeferred=new ol;const c=await Ls(this.storage,this.storageKey),{data:d,error:m}=await this._refreshAccessToken(e);if(m)throw m;if(!d.session)throw new Ct;const p=await Ls(this.storage,this.storageKey);if(c!==null&&(p===null||p.refresh_token!==c.refresh_token)){this._debug(l,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const b={data:null,error:new ff};return this.refreshingDeferred.resolve(b),b}const x=this._sessionRemovalEpoch;if(await this._saveSession(d.session),this._sessionRemovalEpoch!==x){this._debug(l,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await ft(this.storage,this.storageKey),this.userStorage&&await ft(this.userStorage,this.storageKey+"-user");const b={data:null,error:new ff};return this.refreshingDeferred.resolve(b),b}await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const w={data:d.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(w),w}catch(c){if(this._debug(l,"error",c),pe(c)){const d={data:null,error:c};if(!mf(c)){const m=await Ls(this.storage,this.storageKey);!!(m!=null&&m.expires_at&&m.expires_at*1e3>Date.now())?this._debug(l,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:d,expiresAt:Date.now()+uw},(n=this.refreshingDeferred)===null||n===void 0||n.resolve(d),d}throw(o=this.refreshingDeferred)===null||o===void 0||o.reject(c),c}finally{this.refreshingDeferred=null,this._debug(l,"end")}}async _notifyAllSubscribers(e,n,o=!0){const l=`#_notifyAllSubscribers(${e})`;this._debug(l,"begin",n,`broadcast = ${o}`);try{this.broadcastChannel&&o&&this.broadcastChannel.postMessage({event:e,session:n});const c=[],d=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(e,n)}catch(p){c.push(p)}});if(await Promise.all(d),c.length>0){for(let m=0;m<c.length;m+=1)console.error(c[m]);throw c[0]}}finally{this._debug(l,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await ft(this.storage,`${this.storageKey}-code-verifier`);const n=Object.assign({},e),o=n.user&&n.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!o&&n.user&&await ni(this.userStorage,this.storageKey+"-user",{user:n.user});const l=Object.assign({},n);delete l.user;const c=vf(l);await ni(this.storage,this.storageKey,c)}else{const l=vf(n);await ni(this.storage,this.storageKey,l)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await ft(this.storage,this.storageKey),await ft(this.storage,this.storageKey+"-code-verifier"),await ft(this.storage,this.storageKey+"-user"),this.userStorage&&await ft(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&qt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),yr);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const n=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const n=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,n&&clearTimeout(n)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async n=>{const{data:{session:o}}=n;if(!o||!o.refresh_token||!o.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const l=Math.floor((o.expires_at*1e3-e)/yr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${l} ticks, a tick lasts ${yr}ms, refresh threshold is ${eo} ticks`),l<=eo&&await this._callRefreshToken(o.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof Kw)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async n=>{const{data:{session:o}}=n;if(!o||!o.refresh_token||!o.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const l=Math.floor((o.expires_at*1e3-e)/yr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${l} ticks, a tick lasts ${yr}ms, refresh threshold is ${eo} ticks`),l<=eo&&await this._callRefreshToken(o.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!qt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const n=`#_onVisibilityChanged(${e})`;if(this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(n,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,n,o){const l=[`provider=${encodeURIComponent(n)}`];if(o!=null&&o.redirectTo&&l.push(`redirect_to=${encodeURIComponent(o.redirectTo)}`),o!=null&&o.scopes&&l.push(`scopes=${encodeURIComponent(o.scopes)}`),this.flowType==="pkce"){const[c,d]=await hn(this.storage,this.storageKey),m=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(d)}`});l.push(m.toString())}if(o!=null&&o.queryParams){const c=new URLSearchParams(o.queryParams);l.push(c.toString())}return o!=null&&o.skipBrowserRedirect&&l.push(`skip_http_redirect=${o.skipBrowserRedirect}`),`${e}?${l.join("&")}`}async _unenroll(e){try{return await this._useSession(async n=>{var o;const{data:l,error:c}=n;return c?this._returnResult({data:null,error:c}):await Ne(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(o=l==null?void 0:l.session)===null||o===void 0?void 0:o.access_token})})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async _enroll(e){try{return await this._useSession(async n=>{var o,l;const{data:c,error:d}=n;if(d)return this._returnResult({data:null,error:d});const m=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:p,error:g}=await Ne(this.fetch,"POST",`${this.url}/factors`,{body:m,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});return g?this._returnResult({data:null,error:g}):(e.factorType==="totp"&&p.type==="totp"&&(!((l=p==null?void 0:p.totp)===null||l===void 0)&&l.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async _verify(e){const n=async()=>{try{return await this._useSession(async o=>{var l;const{data:c,error:d}=o;if(d)return this._returnResult({data:null,error:d});const m=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Tf(e.webauthn.credential_response):Cf(e.webauthn.credential_response)})}:{code:e.code}),{data:p,error:g}=await Ne(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:m,headers:this.headers,jwt:(l=c==null?void 0:c.session)===null||l===void 0?void 0:l.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(o){if(pe(o))return this._returnResult({data:null,error:o});throw o}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,n):n()}async _challenge(e){const n=async()=>{try{return await this._useSession(async o=>{var l;const{data:c,error:d}=o;if(d)return this._returnResult({data:null,error:d});const m=await Ne(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(l=c==null?void 0:c.session)===null||l===void 0?void 0:l.access_token});if(m.error)return m;const{data:p}=m;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Sf(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Nf(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(o){if(pe(o))return this._returnResult({data:null,error:o});throw o}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,n):n()}async _challengeAndVerify(e){const{data:n,error:o}=await this._challenge({factorId:e.factorId});return o?this._returnResult({data:null,error:o}):await this._verify({factorId:e.factorId,challengeId:n.id,code:e.code})}async _listFactors(){var e;const{data:{user:n},error:o}=await this.getUser();if(o)return{data:null,error:o};const l={all:[],phone:[],totp:[],webauthn:[]};for(const c of(e=n==null?void 0:n.factors)!==null&&e!==void 0?e:[])l.all.push(c),c.status==="verified"&&l[c.factor_type].push(c);return{data:l,error:null}}async _getAuthenticatorAssuranceLevel(e){var n,o,l,c;if(e)try{const{payload:v}=Ia(e);let S=null;v.aal&&(S=v.aal);let T=S;const{data:{user:j},error:W}=await this.getUser(e);if(W)return this._returnResult({data:null,error:W});((o=(n=j==null?void 0:j.factors)===null||n===void 0?void 0:n.filter(q=>q.status==="verified"))!==null&&o!==void 0?o:[]).length>0&&(T="aal2");const H=v.amr||[];return{data:{currentLevel:S,nextLevel:T,currentAuthenticationMethods:H},error:null}}catch(v){if(pe(v))return this._returnResult({data:null,error:v});throw v}const{data:{session:d},error:m}=await this.getSession();if(m)return this._returnResult({data:null,error:m});if(!d)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=Ia(d.access_token);let g=null;p.aal&&(g=p.aal);let x=g;((c=(l=d.user.factors)===null||l===void 0?void 0:l.filter(v=>v.status==="verified"))!==null&&c!==void 0?c:[]).length>0&&(x="aal2");const b=p.amr||[];return{data:{currentLevel:g,nextLevel:x,currentAuthenticationMethods:b},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async n=>{const{data:{session:o},error:l}=n;return l?this._returnResult({data:null,error:l}):o?await Ne(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:o.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new Ct})})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async _approveAuthorization(e,n){try{return await this._useSession(async o=>{const{data:{session:l},error:c}=o;if(c)return this._returnResult({data:null,error:c});if(!l)return this._returnResult({data:null,error:new Ct});const d=await Ne(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:l.access_token,body:{action:"approve"},xform:m=>({data:m,error:null})});return d.data&&d.data.redirect_url&&qt()&&!(n!=null&&n.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(o){if(pe(o))return this._returnResult({data:null,error:o});throw o}}async _denyAuthorization(e,n){try{return await this._useSession(async o=>{const{data:{session:l},error:c}=o;if(c)return this._returnResult({data:null,error:c});if(!l)return this._returnResult({data:null,error:new Ct});const d=await Ne(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:l.access_token,body:{action:"deny"},xform:m=>({data:m,error:null})});return d.data&&d.data.redirect_url&&qt()&&!(n!=null&&n.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(o){if(pe(o))return this._returnResult({data:null,error:o});throw o}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:n},error:o}=e;return o?this._returnResult({data:null,error:o}):n?await Ne(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,xform:l=>({data:l,error:null})}):this._returnResult({data:null,error:new Ct})})}catch(e){if(pe(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async n=>{const{data:{session:o},error:l}=n;return l?this._returnResult({data:null,error:l}):o?(await Ne(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:o.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Ct})})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async fetchJwk(e,n={keys:[]}){let o=n.keys.find(m=>m.kid===e);if(o)return o;const l=Date.now();if(o=this.jwks.keys.find(m=>m.kid===e),o&&this.jwks_cached_at+pw>l)return o;const{data:c,error:d}=await Ne(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(d)throw d;return!c.keys||c.keys.length===0||(this.jwks=c,this.jwks_cached_at=l,o=c.keys.find(m=>m.kid===e),!o)?null:o}async getClaims(e,n={}){try{let o=e;if(!o){const{data:v,error:S}=await this.getSession();if(S||!v.session)return this._returnResult({data:null,error:S});o=v.session.access_token}const{header:l,payload:c,signature:d,raw:{header:m,payload:p}}=Ia(o);if(!(n!=null&&n.allowExpired))try{zw(c.exp)}catch(v){throw new Ka(v instanceof Error?v.message:"JWT validation failed")}const g=!l.alg||l.alg.startsWith("HS")||!l.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(l.kid,n!=null&&n.keys?{keys:n.keys}:n==null?void 0:n.jwks);if(!g){const{error:v}=await this.getUser(o);if(v)throw v;return{data:{claims:c,header:l,signature:d},error:null}}const x=Ww(l.alg),w=await crypto.subtle.importKey("jwk",g,x,!0,["verify"]);if(!await crypto.subtle.verify(x,w,d,Nw(`${m}.${p}`)))throw new Ka("Invalid JWT signature");return{data:{claims:c,header:l,signature:d},error:null}}catch(o){if(pe(o))return this._returnResult({data:null,error:o});throw o}}async signInWithPasskey(e){var n,o,l;Ws(this.experimental);try{if(!Xa())return this._returnResult({data:null,error:new Bs("Browser does not support WebAuthn",null)});const{data:c,error:d}=await this._startPasskeyAuthentication({options:{captchaToken:(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.captchaToken}});if(d||!c)return this._returnResult({data:null,error:d});const m=Nf(c.options),p=(l=(o=e==null?void 0:e.options)===null||o===void 0?void 0:o.signal)!==null&&l!==void 0?l:Cu.createNewAbortSignal(),{data:g,error:x}=await gp({publicKey:m,signal:p});if(x||!g)return this._returnResult({data:null,error:x??new Bs("WebAuthn ceremony failed",null)});const w=Cf(g);return this._verifyPasskeyAuthentication({challengeId:c.challenge_id,credential:w})}catch(c){if(pe(c))return this._returnResult({data:null,error:c});throw c}}async registerPasskey(e){var n,o;Ws(this.experimental);try{if(!Xa())return this._returnResult({data:null,error:new Bs("Browser does not support WebAuthn",null)});const{data:l,error:c}=await this._startPasskeyRegistration();if(c||!l)return this._returnResult({data:null,error:c});const d=Sf(l.options),m=(o=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.signal)!==null&&o!==void 0?o:Cu.createNewAbortSignal(),{data:p,error:g}=await pp({publicKey:d,signal:m});if(g||!p)return this._returnResult({data:null,error:g??new Bs("WebAuthn ceremony failed",null)});const x=Tf(p);return this._verifyPasskeyRegistration({challengeId:l.challenge_id,credential:x})}catch(l){if(pe(l))return this._returnResult({data:null,error:l});throw l}}async _startPasskeyRegistration(){Ws(this.experimental);try{return await this._useSession(async e=>{const{data:{session:n},error:o}=e;if(o)return this._returnResult({data:null,error:o});if(!n)return this._returnResult({data:null,error:new Ct});const{data:l,error:c}=await Ne(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:n.access_token,body:{}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:l,error:null})})}catch(e){if(pe(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){Ws(this.experimental);try{return await this._useSession(async n=>{const{data:{session:o},error:l}=n;if(l)return this._returnResult({data:null,error:l});if(!o)return this._returnResult({data:null,error:new Ct});const{data:c,error:d}=await Ne(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:o.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async _startPasskeyAuthentication(e){var n;Ws(this.experimental);try{const{data:o,error:l}=await Ne(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.captchaToken}}});return l?this._returnResult({data:null,error:l}):this._returnResult({data:o,error:null})}catch(o){if(pe(o))return this._returnResult({data:null,error:o});throw o}}async _verifyPasskeyAuthentication(e){Ws(this.experimental);try{const{data:n,error:o}=await Ne(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:Es});return o?this._returnResult({data:null,error:o}):(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:n,error:null}))}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async _listPasskeys(){Ws(this.experimental);try{return await this._useSession(async e=>{const{data:{session:n},error:o}=e;if(o)return this._returnResult({data:null,error:o});if(!n)return this._returnResult({data:null,error:new Ct});const{data:l,error:c}=await Ne(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:n.access_token,xform:d=>({data:d,error:null})});return c?this._returnResult({data:null,error:c}):this._returnResult({data:l,error:null})})}catch(e){if(pe(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){Ws(this.experimental);try{return await this._useSession(async n=>{const{data:{session:o},error:l}=n;if(l)return this._returnResult({data:null,error:l});if(!o)return this._returnResult({data:null,error:new Ct});const{data:c,error:d}=await Ne(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:o.access_token,body:{friendly_name:e.friendlyName}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}async _deletePasskey(e){Ws(this.experimental);try{return await this._useSession(async n=>{const{data:{session:o},error:l}=n;if(l)return this._returnResult({data:null,error:l});if(!o)return this._returnResult({data:null,error:new Ct});const{error:c}=await Ne(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:o.access_token,noResolveJson:!0});return c?this._returnResult({data:null,error:c}):this._returnResult({data:null,error:null})})}catch(n){if(pe(n))return this._returnResult({data:null,error:n});throw n}}}uo.nextInstanceID={};const cb=uo,ub="2.108.2";let to="",el;if(typeof Deno<"u"){var iu;to="deno",el=(iu=Deno.version)===null||iu===void 0?void 0:iu.deno}else if(typeof document<"u")to="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")to="react-native";else{var ou;to="node",el=typeof process<"u"?(ou=process.version)===null||ou===void 0?void 0:ou.replace(/^v/,""):void 0}const yp=[`runtime=${to}`];el&&yp.push(`runtime-version=${el}`);const db={"X-Client-Info":`supabase-js/${ub}; ${yp.join("; ")}`},hb={headers:db},mb={schema:"public"},fb={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},pb={},gb={enabled:!1,respectSamplingDecision:!0};function yb(r,e,n,o){function l(c){return c instanceof n?c:new n(function(d){d(c)})}return new(n||(n=Promise))(function(c,d){function m(x){try{g(o.next(x))}catch(w){d(w)}}function p(x){try{g(o.throw(x))}catch(w){d(w)}}function g(x){x.done?c(x.value):l(x.value).then(m,p)}g((o=o.apply(r,[])).next())})}let au=null;const xb="@opentelemetry/api";function vb(){return au===null&&(au=import(xb).catch(()=>null)),au}function wb(){return yb(this,void 0,void 0,function*(){try{const r=yield vb();if(!r||!r.propagation||!r.context)return null;const e={};r.propagation.inject(r.context.active(),e);const n=e.traceparent;return n?{traceparent:n,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function bb(r){if(!r||typeof r!="string")return null;const e=r.split("-");if(e.length!==4)return null;const[n,o,l,c]=e;if(n.length!==2||o.length!==32||l.length!==16||c.length!==2)return null;const d=/^[0-9a-f]+$/i;return!d.test(n)||!d.test(o)||!d.test(l)||!d.test(c)||o==="00000000000000000000000000000000"||l==="0000000000000000"?null:{version:n,traceId:o,parentId:l,traceFlags:c,isSampled:(parseInt(c,16)&1)===1}}function kb(r,e){if(!r||!e||e.length===0)return!1;let n;if(r instanceof URL)n=r;else try{n=new URL(r)}catch{return!1}for(const o of e)try{if(typeof o=="string"){if(jb(n.hostname,o))return!0}else if(o instanceof RegExp){if(o.test(n.hostname))return!0}else if(typeof o=="function"&&o(n))return!0}catch{continue}return!1}function jb(r,e){if(e===r)return!0;if(e.startsWith("*.")){const n=e.slice(2);if(r.endsWith(n)&&(r===n||r.endsWith("."+n)))return!0}return!1}function Sb(r){const e=[];try{const n=new URL(r);e.push(n.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function ho(r){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ho(r)}function Nb(r,e){if(ho(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var o=n.call(r,e);if(ho(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Tb(r){var e=Nb(r,"string");return ho(e)=="symbol"?e:e+""}function Cb(r,e,n){return(e=Tb(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function Ef(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),n.push.apply(n,o)}return n}function ht(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ef(Object(n),!0).forEach(function(o){Cb(r,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Ef(Object(n)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))})}return r}const Eb=r=>r?(...e)=>r(...e):(...e)=>fetch(...e),_b=()=>Headers,Pb=(r,e,n,o,l)=>{const c=Eb(o),d=_b(),m=(l==null?void 0:l.enabled)===!0,p=(l==null?void 0:l.respectSamplingDecision)!==!1,g=m?Sb(e):null;return async(x,w)=>{var b;const v=(b=await n())!==null&&b!==void 0?b:r;let S=new d(w==null?void 0:w.headers);if(S.has("apikey")||S.set("apikey",r),S.has("Authorization")||S.set("Authorization",`Bearer ${v}`),g){const T=await Rb(x,g,p);T&&(T.traceparent&&!S.has("traceparent")&&S.set("traceparent",T.traceparent),T.tracestate&&!S.has("tracestate")&&S.set("tracestate",T.tracestate),T.baggage&&!S.has("baggage")&&S.set("baggage",T.baggage))}return c(x,ht(ht({},w),{},{headers:S}))}};async function Rb(r,e,n){if(!kb(typeof r=="string"||r instanceof URL?r:r.url,e))return null;const o=await wb();if(!o||!o.traceparent)return null;if(n){const l=bb(o.traceparent);if(l&&!l.isSampled)return null}return o}function _f(r){return typeof r=="boolean"?{enabled:r}:r}function Ab(r){return r.endsWith("/")?r:r+"/"}function Mb(r,e){var n,o,l,c,d,m;const{db:p,auth:g,realtime:x,global:w}=r,{db:b,auth:v,realtime:S,global:T}=e,j=_f(r.tracePropagation),W=_f(e.tracePropagation),L={db:ht(ht({},b),p),auth:ht(ht({},v),g),realtime:ht(ht({},S),x),storage:{},global:ht(ht(ht({},T),w),{},{headers:ht(ht({},(n=T==null?void 0:T.headers)!==null&&n!==void 0?n:{}),(o=w==null?void 0:w.headers)!==null&&o!==void 0?o:{})}),tracePropagation:{enabled:(l=(c=j==null?void 0:j.enabled)!==null&&c!==void 0?c:W==null?void 0:W.enabled)!==null&&l!==void 0?l:!1,respectSamplingDecision:(d=(m=j==null?void 0:j.respectSamplingDecision)!==null&&m!==void 0?m:W==null?void 0:W.respectSamplingDecision)!==null&&d!==void 0?d:!0},accessToken:async()=>""};return r.accessToken?L.accessToken=r.accessToken:delete L.accessToken,L}function Ib(r){const e=r==null?void 0:r.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Ab(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Db=class extends cb{constructor(r){super(r)}},Ob=class{constructor(r,e,n){var o,l;this.supabaseUrl=r,this.supabaseKey=e;const c=Ib(r);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const d=`sb-${c.hostname.split(".")[0]}-auth-token`,m={db:mb,realtime:pb,auth:ht(ht({},fb),{},{storageKey:d}),global:hb,tracePropagation:gb},p=Mb(n??{},m);if(this.settings=p,this.storageKey=(o=p.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(l=p.global.headers)!==null&&l!==void 0?l:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(x,w)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(w)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=p.auth)!==null&&g!==void 0?g:{},this.headers,p.global.fetch)}this.fetch=Pb(e,r,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(ht({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(x=>this.realtime.setAuth(x)).catch(x=>console.warn("Failed to set initial Realtime auth token:",x)),this.rest=new Jv(new URL("rest/v1",c).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new cw(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new Hv(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(r){return this.rest.from(r)}schema(r){return this.rest.schema(r)}rpc(r,e={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(r,e,n)}channel(r,e={config:{}}){return this.realtime.channel(r,e)}getChannels(){return this.realtime.getChannels()}removeChannel(r){return this.realtime.removeChannel(r)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var r=this,e,n;if(r.accessToken)return await r.accessToken();const{data:o}=await r.auth.getSession();return(e=(n=o.session)===null||n===void 0?void 0:n.access_token)!==null&&e!==void 0?e:r.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:r,persistSession:e,detectSessionInUrl:n,storage:o,userStorage:l,storageKey:c,flowType:d,lock:m,debug:p,throwOnError:g,experimental:x,lockAcquireTimeout:w,skipAutoInitialize:b},v,S){const T={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Db({url:this.authUrl.href,headers:ht(ht({},T),v),storageKey:c,autoRefreshToken:r,persistSession:e,detectSessionInUrl:n,storage:o,userStorage:l,flowType:d,lock:m,debug:p,throwOnError:g,experimental:x,fetch:S,lockAcquireTimeout:w,skipAutoInitialize:b,hasCustomAuthorizationHeader:Object.keys(this.headers).some(j=>j.toLowerCase()==="authorization")})}_initRealtimeClient(r){return new A0(this.realtimeUrl.href,ht(ht({},r),{},{params:ht(ht({},{apikey:this.supabaseKey}),r==null?void 0:r.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,e)=>{this._handleTokenChanged(r,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(r,e,n){(r==="TOKEN_REFRESHED"||r==="SIGNED_IN")&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):r==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Lb=(r,e,n)=>new Ob(r,e,n);function zb(){if(typeof window<"u")return!1;const r=globalThis.process;if(!r)return!1;const e=r.version;if(e==null)return!1;const n=e.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=18:!1}zb()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Wb="https://gporiofdbzwcqnqdxvpn.supabase.co",$b="sb_publishable_fEoheEG6kW0n5XzFCbDAOQ_rrjGwYU-",bn=Lb(Wb,$b),Hu=!0,xp=async(r,e,n)=>{if(!bn)throw new Error("Supabase not configured");const{data:o,error:l}=await bn.auth.signUp({email:r,password:e,options:{data:{name:n}}});if(l)throw l;return o},vp=async(r,e)=>{if(!bn)throw new Error("Supabase not configured");const{data:n,error:o}=await bn.auth.signInWithPassword({email:r,password:e});if(o)throw o;return n},Hb=async()=>{if(!bn)throw new Error("Supabase not configured");const{error:r}=await bn.auth.signOut();if(r)throw r},Bb=Object.freeze(Object.defineProperty({__proto__:null,isSupabaseConfigured:Hu,signIn:vp,signOut:Hb,signUp:xp,supabase:bn},Symbol.toStringTag,{value:"Module"})),Fb=({onLoginSuccess:r,onBack:e,onNavigateToSignup:n,onNavigateToSubscription:o})=>{const[l,c]=A.useState(""),[d,m]=A.useState(""),[p,g]=A.useState(!1),[x,w]=A.useState(""),[b,v]=A.useState(!1),S=sr(j=>j.login),T=async j=>{var W;if(j.preventDefault(),w(""),!l||!d){w("Please enter both email and password");return}v(!0);try{if(Hu){const L=await vp(l,d);L.user&&S(L.user.email||l,((W=L.user.user_metadata)==null?void 0:W.name)||l.split("@")[0])}v(!1),r()}catch(L){w(L.message||"Failed to sign in. Please check your credentials."),v(!1)}};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-primary via-secondary to-accent",children:[s.jsx("div",{className:"p-4",children:s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-white/80 hover:text-white transition-colors",children:[s.jsx(lt,{size:20}),"Back"]})}),s.jsx("div",{className:"px-4 pb-8",children:s.jsxs("div",{className:"max-w-md mx-auto",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4",children:s.jsx(Fe,{size:40,className:"text-white"})}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Welcome Back"}),s.jsx("p",{className:"text-white/80",children:"Sign in to continue your wellness journey"})]}),s.jsxs(te,{className:"p-6",children:[s.jsxs("form",{onSubmit:T,className:"space-y-4",children:[x&&s.jsx("div",{className:"p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm",children:x}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-foreground",children:"Email"}),s.jsxs("div",{className:"relative",children:[s.jsx(Zs,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),s.jsx(ls,{type:"email",placeholder:"Enter your email",value:l,onChange:j=>c(j.target.value),className:"pl-10"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-foreground",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx(_s,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),s.jsx(ls,{type:p?"text":"password",placeholder:"Enter your password",value:d,onChange:j=>m(j.target.value),className:"pl-10 pr-10"}),s.jsx("button",{type:"button",onClick:()=>g(!p),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:p?s.jsx(Au,{size:18}):s.jsx(Mu,{size:18})})]})]}),s.jsx(oe,{type:"submit",className:"w-full",disabled:b,children:b?"Signing in...":"Sign In"})]}),s.jsxs("div",{className:"mt-6 text-center space-y-3",children:[s.jsx("button",{className:"text-sm text-primary hover:underline",children:"Forgot Password?"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 flex items-center",children:s.jsx("div",{className:"w-full border-t border-border"})}),s.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:s.jsx("span",{className:"bg-white px-2 text-muted-foreground",children:"or"})})]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Don't have an account?"," ",s.jsx("button",{onClick:n,className:"text-primary font-medium hover:underline",children:"Sign Up"})]})]})]}),s.jsxs(te,{className:"p-6 mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200",children:[s.jsx("h3",{className:"font-semibold text-foreground mb-2",children:"Unlock Premium Features"}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Get unlimited access to all features with a premium subscription"}),s.jsx(oe,{variant:"outline",className:"w-full border-amber-400 text-amber-700 hover:bg-amber-50",onClick:o,children:"View Premium Plans"})]}),s.jsx("p",{className:"text-center text-white/60 text-sm mt-6",children:gt.tagline})]})})]})},Ub=({onSignupSuccess:r,onBack:e,onNavigateToLogin:n,onNavigateToSubscription:o})=>{const[l,c]=A.useState(""),[d,m]=A.useState(""),[p,g]=A.useState(""),[x,w]=A.useState(""),[b,v]=A.useState(!1),[S,T]=A.useState(""),[j,W]=A.useState(!1),[L,H]=A.useState(!1),[q,K]=A.useState(""),R=sr(me=>me.login),F=async me=>{if(me.preventDefault(),T(""),K(""),!l||!d||!p||!x){T("Please fill in all fields");return}if(p!==x){T("Passwords do not match");return}if(p.length<6){T("Password must be at least 6 characters");return}if(!L){T("Please agree to the Terms of Service");return}W(!0);try{if(Hu){const ke=await xp(d,p,l);ke.user&&(ke.user.email_confirmed_at?(R(d,l),W(!1),r()):(K("Account created! Please check your email to confirm your account, then sign in."),W(!1)))}}catch(ke){T(ke.message||"Failed to create account. Please try again."),W(!1)}};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-primary via-secondary to-accent",children:[s.jsx("div",{className:"p-4",children:s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-white/80 hover:text-white transition-colors",children:[s.jsx(lt,{size:20}),"Back"]})}),s.jsx("div",{className:"px-4 pb-8",children:s.jsxs("div",{className:"max-w-md mx-auto",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4",children:s.jsx(Fe,{size:40,className:"text-white"})}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Create Account"}),s.jsx("p",{className:"text-white/80",children:"Start your wellness journey today"})]}),s.jsxs(te,{className:"p-6",children:[s.jsxs("form",{onSubmit:F,className:"space-y-4",children:[S&&s.jsx("div",{className:"p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm",children:S}),q&&s.jsx("div",{className:"p-3 rounded-lg bg-green-50 border border-green-200 text-green-600 text-sm",children:q}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-foreground",children:"Full Name"}),s.jsxs("div",{className:"relative",children:[s.jsx(Du,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),s.jsx(ls,{type:"text",placeholder:"Enter your name",value:l,onChange:me=>c(me.target.value),className:"pl-10"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-foreground",children:"Email"}),s.jsxs("div",{className:"relative",children:[s.jsx(Zs,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),s.jsx(ls,{type:"email",placeholder:"Enter your email",value:d,onChange:me=>m(me.target.value),className:"pl-10"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-foreground",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx(_s,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),s.jsx(ls,{type:b?"text":"password",placeholder:"Create a password",value:p,onChange:me=>g(me.target.value),className:"pl-10 pr-10"}),s.jsx("button",{type:"button",onClick:()=>v(!b),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:b?s.jsx(Au,{size:18}):s.jsx(Mu,{size:18})})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-foreground",children:"Confirm Password"}),s.jsxs("div",{className:"relative",children:[s.jsx(_s,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),s.jsx(ls,{type:b?"text":"password",placeholder:"Confirm your password",value:x,onChange:me=>w(me.target.value),className:"pl-10"})]})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx("input",{type:"checkbox",id:"terms",checked:L,onChange:me=>H(me.target.checked),className:"mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"}),s.jsxs("label",{htmlFor:"terms",className:"text-sm text-muted-foreground",children:["I agree to the"," ",s.jsx("button",{type:"button",className:"text-primary hover:underline",children:"Terms of Service"})," ","and"," ",s.jsx("button",{type:"button",className:"text-primary hover:underline",children:"Privacy Policy"})]})]}),s.jsx(oe,{type:"submit",className:"w-full",disabled:j,children:j?"Creating Account...":"Create Account"})]}),s.jsxs("div",{className:"mt-6 text-center space-y-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 flex items-center",children:s.jsx("div",{className:"w-full border-t border-border"})}),s.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:s.jsx("span",{className:"bg-white px-2 text-muted-foreground",children:"or"})})]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Already have an account?"," ",s.jsx("button",{onClick:n,className:"text-primary font-medium hover:underline",children:"Sign In"})]})]})]}),s.jsxs(te,{className:"p-6 mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200",children:[s.jsx("h3",{className:"font-semibold text-foreground mb-2",children:"Unlock Premium Features"}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Get unlimited access to all features with a premium subscription"}),s.jsx(oe,{variant:"outline",className:"w-full border-amber-400 text-amber-700 hover:bg-amber-50",onClick:o,children:"View Premium Plans"})]}),s.jsx("p",{className:"text-center text-white/60 text-sm mt-6",children:gt.tagline})]})})]})},qb="https://15fokr9l7kfo.space.minimax.io";async function Yb(r,e){const n=await fetch(`${qb}${r}`,{...e,headers:{"Content-Type":"application/json",...e==null?void 0:e.headers}});if(!n.ok){const o=await n.json().catch(()=>({error:"Request failed"}));throw new Error(o.error||`HTTP error ${n.status}`)}return n.json()}async function Vb({priceId:r,userId:e,userEmail:n}){return await Yb("/create-checkout-session",{method:"POST",body:JSON.stringify({priceId:r,userId:e,userEmail:n})})}async function Gb(r,e){var c,d;const n=sr.getState(),o=((c=n.user)==null?void 0:c.id)||"demo-user",l=((d=n.user)==null?void 0:d.email)||"demo@example.com";try{const{url:m}=await Vb({priceId:r,userId:o,userEmail:l});return window.location.href=m,{success:!0,redirectUrl:m}}catch(m){return console.error("Checkout error:",m),{success:!1,error:m.message}}}const Pf=({onBack:r,onNavigateToLogin:e})=>{const[n,o]=A.useState(!1),[l,c]=A.useState(null),[d,m]=A.useState(null),p=sr(j=>j.isAuthenticated),g=sr(j=>j.subscriptionTier),x=sr(j=>j.subscriptionStatus),w=g==="premium"&&x==="active",b=async j=>{if(!p){e();return}const W=Ta.find(L=>L.id===j);if(!(!W||W.id==="free")){o(!0),c(null),m(null);try{const L=await Gb(W.id,W.name);L.success||c(L.error||"Failed to start checkout")}catch(L){c(L.message||"An unexpected error occurred")}finally{o(!1)}}},v=Ta.find(j=>j.id==="free"),S=Ta.find(j=>j.id==="premium-monthly"),T=Ta.find(j=>j.id==="premium-yearly");return w?s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-lavender/20 to-white",children:[s.jsx("div",{className:"bg-gradient-to-r from-primary via-secondary to-accent text-white",children:s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-6",children:[s.jsxs("button",{onClick:r,className:"flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors",children:[s.jsx(lt,{size:20}),"Back"]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4",children:s.jsx(Hs,{size:32,className:"text-white"})}),s.jsx("h1",{className:"text-2xl font-bold mb-2",children:"You're a Premium Member!"}),s.jsx("p",{className:"text-white/80",children:"Thank you for your support"})]})]})}),s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-8",children:[s.jsxs(te,{className:"p-6 text-center bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200",children:[s.jsx(Hs,{className:"w-12 h-12 mx-auto text-amber-500 mb-4"}),s.jsx("h2",{className:"font-bold text-xl mb-2",children:"Premium Access Active"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"You have full access to all premium features. Enjoy your wellness journey!"}),s.jsx(oe,{variant:"outline",onClick:r,className:"border-amber-400 text-amber-700",children:"Explore Premium Features"})]}),s.jsxs("div",{className:"mt-8 p-4 rounded-xl bg-pink-50 border border-pink-200",children:[s.jsx("h3",{className:"font-semibold text-pink-800 mb-2",children:"Premium Benefits Include:"}),s.jsxs("ul",{className:"space-y-2 text-sm text-pink-700",children:[s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16}),"Unlimited symptom tracking"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16}),"Unlimited AI chatbot conversations"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16}),"Voice journaling"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16}),"Advanced insights & patterns"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx(Le,{size:16}),"Doctor visit reports"]})]})]})]})]}):s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-lavender/20 to-white",children:[s.jsx("div",{className:"bg-gradient-to-r from-primary via-secondary to-accent text-white",children:s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-6",children:[s.jsxs("button",{onClick:r,className:"flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors",children:[s.jsx(lt,{size:20}),"Back"]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4",children:s.jsx(Fe,{size:32,className:"text-white"})}),s.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Unlock Premium"}),s.jsx("p",{className:"text-white/80",children:"Choose the plan that works for you"})]})]})}),s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-8 space-y-6",children:[v&&s.jsxs(te,{className:"p-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"font-bold text-xl",children:v.name}),s.jsxs("span",{className:"text-2xl font-bold",children:["$",v.price,s.jsx("span",{className:"text-sm font-normal text-muted-foreground",children:"/forever"})]})]}),s.jsx("p",{className:"text-muted-foreground mb-4",children:v.description}),s.jsx("ul",{className:"space-y-2 mb-6",children:v.features.slice(0,5).map((j,W)=>s.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[s.jsx(Le,{size:16,className:"text-green-500 mt-0.5 shrink-0"}),s.jsx("span",{children:j})]},W))}),s.jsx(oe,{variant:"outline",className:"w-full",onClick:r,children:"Current Plan"})]}),S&&s.jsxs(te,{className:"p-6 border-2 border-primary relative bg-gradient-to-br from-primary/5 to-secondary/5",children:[s.jsx("div",{className:"absolute -top-3 left-4 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full",children:"Popular"}),s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-xl",children:S.name}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Full access to all features"})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("span",{className:"text-3xl font-bold text-primary",children:["$",S.price]}),s.jsx("span",{className:"text-sm text-muted-foreground",children:"/month"})]})]}),s.jsx("ul",{className:"space-y-2 mb-6",children:S.features.map((j,W)=>s.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[s.jsx(Le,{size:16,className:"text-primary mt-0.5 shrink-0"}),s.jsx("span",{children:j})]},W))}),s.jsx(oe,{className:"w-full bg-gradient-to-r from-primary to-secondary",onClick:()=>b(S.id),disabled:n,children:n?s.jsxs(s.Fragment,{children:[s.jsx(hu,{size:18,className:"animate-spin mr-2"}),"Processing..."]}):"Subscribe Monthly"})]}),T&&s.jsxs(te,{className:"p-6 border-2 border-amber-400 relative bg-gradient-to-br from-amber-50 to-orange-50",children:[s.jsxs("div",{className:"absolute -top-3 left-4 flex items-center gap-2",children:[s.jsx("div",{className:"px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full flex items-center gap-1",children:s.jsx("span",{children:"Save 50%"})}),s.jsx("div",{className:"px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full animate-pulse",children:"Limited Time Only"})]}),s.jsxs("div",{className:"flex items-center justify-between mb-4 mt-2",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-xl",children:T.name}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Best value - save $60/year"})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("span",{className:"text-3xl font-bold text-amber-600",children:["$",T.price]}),s.jsx("span",{className:"text-sm text-muted-foreground",children:"/year"})]})]}),s.jsxs("ul",{className:"space-y-2 mb-6",children:[T.features.map((j,W)=>s.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[s.jsx(Le,{size:16,className:"text-amber-500 mt-0.5 shrink-0"}),s.jsx("span",{children:j})]},W)),s.jsxs("li",{className:"flex items-start gap-2 text-sm font-medium text-amber-700",children:[s.jsx(Le,{size:16,className:"text-amber-500 mt-0.5 shrink-0"}),s.jsx("span",{children:"Everything in Premium Monthly"})]})]}),s.jsx(oe,{variant:"outline",className:"w-full border-amber-400 text-amber-700 hover:bg-amber-50",onClick:()=>b(T.id),disabled:n,children:n?s.jsxs(s.Fragment,{children:[s.jsx(hu,{size:18,className:"animate-spin mr-2"}),"Processing..."]}):"Subscribe Annually"})]}),!p&&s.jsxs(te,{className:"p-6 bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200",children:[s.jsx("p",{className:"text-center text-muted-foreground mb-4",children:"Already have an account?"}),s.jsx(oe,{variant:"outline",className:"w-full border-violet-400 text-violet-700",onClick:e,children:"Sign In to Subscribe"})]}),l&&s.jsx("div",{className:"p-4 bg-red-50 border border-red-200 rounded-xl",children:s.jsx("p",{className:"text-sm text-red-700 text-center",children:l})}),d&&s.jsx("div",{className:"p-4 bg-green-50 border border-green-200 rounded-xl",children:s.jsx("p",{className:"text-sm text-green-700 text-center",children:d})}),!1,s.jsxs("div",{className:"flex items-center justify-center gap-4 text-muted-foreground",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(Le,{size:16,className:"text-green-500"}),s.jsx("span",{children:"Cancel anytime"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(Le,{size:16,className:"text-green-500"}),s.jsx("span",{children:"Secure payment"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(Le,{size:16,className:"text-green-500"}),s.jsx("span",{children:"7-day trial"})]})]}),s.jsx("p",{className:"text-center text-sm text-muted-foreground",children:"Powered by Stripe. Your payment information is secure."})]})]})};var Kb=Of();const Jb=Df(Kb);var Qb=r=>{switch(r){case"success":return e1;case"info":return s1;case"warning":return t1;case"error":return r1;default:return null}},Xb=Array(12).fill(0),Zb=({visible:r,className:e})=>de.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":r},de.createElement("div",{className:"sonner-spinner"},Xb.map((n,o)=>de.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),e1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),t1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),s1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),r1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),n1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},de.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),de.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),i1=()=>{let[r,e]=de.useState(document.hidden);return de.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),r},Eu=1,o1=class{constructor(){this.subscribe=r=>(this.subscribers.push(r),()=>{let e=this.subscribers.indexOf(r);this.subscribers.splice(e,1)}),this.publish=r=>{this.subscribers.forEach(e=>e(r))},this.addToast=r=>{this.publish(r),this.toasts=[...this.toasts,r]},this.create=r=>{var e;let{message:n,...o}=r,l=typeof(r==null?void 0:r.id)=="number"||((e=r.id)==null?void 0:e.length)>0?r.id:Eu++,c=this.toasts.find(m=>m.id===l),d=r.dismissible===void 0?!0:r.dismissible;return this.dismissedToasts.has(l)&&this.dismissedToasts.delete(l),c?this.toasts=this.toasts.map(m=>m.id===l?(this.publish({...m,...r,id:l,title:n}),{...m,...r,id:l,dismissible:d,title:n}):m):this.addToast({title:n,...o,dismissible:d,id:l}),l},this.dismiss=r=>(this.dismissedToasts.add(r),r||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:r,dismiss:!0})),r),this.message=(r,e)=>this.create({...e,message:r}),this.error=(r,e)=>this.create({...e,message:r,type:"error"}),this.success=(r,e)=>this.create({...e,type:"success",message:r}),this.info=(r,e)=>this.create({...e,type:"info",message:r}),this.warning=(r,e)=>this.create({...e,type:"warning",message:r}),this.loading=(r,e)=>this.create({...e,type:"loading",message:r}),this.promise=(r,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:r,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let o=r instanceof Promise?r:r(),l=n!==void 0,c,d=o.then(async p=>{if(c=["resolve",p],de.isValidElement(p))l=!1,this.create({id:n,type:"default",message:p});else if(l1(p)&&!p.ok){l=!1;let g=typeof e.error=="function"?await e.error(`HTTP error! status: ${p.status}`):e.error,x=typeof e.description=="function"?await e.description(`HTTP error! status: ${p.status}`):e.description;this.create({id:n,type:"error",message:g,description:x})}else if(e.success!==void 0){l=!1;let g=typeof e.success=="function"?await e.success(p):e.success,x=typeof e.description=="function"?await e.description(p):e.description;this.create({id:n,type:"success",message:g,description:x})}}).catch(async p=>{if(c=["reject",p],e.error!==void 0){l=!1;let g=typeof e.error=="function"?await e.error(p):e.error,x=typeof e.description=="function"?await e.description(p):e.description;this.create({id:n,type:"error",message:g,description:x})}}).finally(()=>{var p;l&&(this.dismiss(n),n=void 0),(p=e.finally)==null||p.call(e)}),m=()=>new Promise((p,g)=>d.then(()=>c[0]==="reject"?g(c[1]):p(c[1])).catch(g));return typeof n!="string"&&typeof n!="number"?{unwrap:m}:Object.assign(n,{unwrap:m})},this.custom=(r,e)=>{let n=(e==null?void 0:e.id)||Eu++;return this.create({jsx:r(n),id:n,...e}),n},this.getActiveToasts=()=>this.toasts.filter(r=>!this.dismissedToasts.has(r.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},as=new o1,a1=(r,e)=>{let n=(e==null?void 0:e.id)||Eu++;return as.addToast({title:r,...e,id:n}),n},l1=r=>r&&typeof r=="object"&&"ok"in r&&typeof r.ok=="boolean"&&"status"in r&&typeof r.status=="number",c1=a1,u1=()=>as.toasts,d1=()=>as.getActiveToasts(),Da=Object.assign(c1,{success:as.success,info:as.info,warning:as.warning,error:as.error,custom:as.custom,message:as.message,promise:as.promise,dismiss:as.dismiss,loading:as.loading},{getHistory:u1,getToasts:d1});function h1(r,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r))}h1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Oa(r){return r.label!==void 0}var m1=3,f1="32px",p1="16px",Rf=4e3,g1=356,y1=14,x1=20,v1=200;function zs(...r){return r.filter(Boolean).join(" ")}function w1(r){let[e,n]=r.split("-"),o=[];return e&&o.push(e),n&&o.push(n),o}var b1=r=>{var e,n,o,l,c,d,m,p,g,x,w;let{invert:b,toast:v,unstyled:S,interacting:T,setHeights:j,visibleToasts:W,heights:L,index:H,toasts:q,expanded:K,removeToast:R,defaultRichColors:F,closeButton:me,style:ke,cancelButtonStyle:Pe,actionButtonStyle:X,className:V="",descriptionClassName:ne="",duration:Y,position:ue,gap:we,loadingIcon:xe,expandByDefault:Q,classNames:G,icons:J,closeButtonAriaLabel:N="Close toast",pauseWhenPageIsHidden:B}=r,[fe,I]=de.useState(null),[ce,ye]=de.useState(null),[P,D]=de.useState(!1),[re,M]=de.useState(!1),[se,ge]=de.useState(!1),[je,$e]=de.useState(!1),[Ge,Ue]=de.useState(!1),[ct,_t]=de.useState(0),[Vt,Pt]=de.useState(0),rt=de.useRef(v.duration||Y||Rf),Rt=de.useRef(null),At=de.useRef(null),Ps=H===0,vs=H+1<=W,E=v.type,_e=v.dismissible!==!1,Xe=v.className||"",De=v.descriptionClassName||"",Oe=de.useMemo(()=>L.findIndex(Ee=>Ee.toastId===v.id)||0,[L,v.id]),cs=de.useMemo(()=>{var Ee;return(Ee=v.closeButton)!=null?Ee:me},[v.closeButton,me]),kn=de.useMemo(()=>v.duration||Y||Rf,[v.duration,Y]),us=de.useRef(0),Gt=de.useRef(0),jn=de.useRef(0),Kt=de.useRef(null),[Vr,Gr]=ue.split("-"),Fs=de.useMemo(()=>L.reduce((Ee,He,Ke)=>Ke>=Oe?Ee:Ee+He.height,0),[L,Oe]),xr=i1(),Us=v.invert||b,ws=E==="loading";Gt.current=de.useMemo(()=>Oe*we+Fs,[Oe,Fs]),de.useEffect(()=>{rt.current=kn},[kn]),de.useEffect(()=>{D(!0)},[]),de.useEffect(()=>{let Ee=At.current;if(Ee){let He=Ee.getBoundingClientRect().height;return Pt(He),j(Ke=>[{toastId:v.id,height:He,position:v.position},...Ke]),()=>j(Ke=>Ke.filter(vt=>vt.toastId!==v.id))}},[j,v.id]),de.useLayoutEffect(()=>{if(!P)return;let Ee=At.current,He=Ee.style.height;Ee.style.height="auto";let Ke=Ee.getBoundingClientRect().height;Ee.style.height=He,Pt(Ke),j(vt=>vt.find(Mt=>Mt.toastId===v.id)?vt.map(Mt=>Mt.toastId===v.id?{...Mt,height:Ke}:Mt):[{toastId:v.id,height:Ke,position:v.position},...vt])},[P,v.title,v.description,j,v.id]);let ds=de.useCallback(()=>{M(!0),_t(Gt.current),j(Ee=>Ee.filter(He=>He.toastId!==v.id)),setTimeout(()=>{R(v)},v1)},[v,R,j,Gt]);de.useEffect(()=>{if(v.promise&&E==="loading"||v.duration===1/0||v.type==="loading")return;let Ee;return K||T||B&&xr?(()=>{if(jn.current<us.current){let He=new Date().getTime()-us.current;rt.current=rt.current-He}jn.current=new Date().getTime()})():rt.current!==1/0&&(us.current=new Date().getTime(),Ee=setTimeout(()=>{var He;(He=v.onAutoClose)==null||He.call(v,v),ds()},rt.current)),()=>clearTimeout(Ee)},[K,T,v,E,B,xr,ds]),de.useEffect(()=>{v.delete&&ds()},[ds,v.delete]);function Sn(){var Ee,He,Ke;return J!=null&&J.loading?de.createElement("div",{className:zs(G==null?void 0:G.loader,(Ee=v==null?void 0:v.classNames)==null?void 0:Ee.loader,"sonner-loader"),"data-visible":E==="loading"},J.loading):xe?de.createElement("div",{className:zs(G==null?void 0:G.loader,(He=v==null?void 0:v.classNames)==null?void 0:He.loader,"sonner-loader"),"data-visible":E==="loading"},xe):de.createElement(Zb,{className:zs(G==null?void 0:G.loader,(Ke=v==null?void 0:v.classNames)==null?void 0:Ke.loader),visible:E==="loading"})}return de.createElement("li",{tabIndex:0,ref:At,className:zs(V,Xe,G==null?void 0:G.toast,(e=v==null?void 0:v.classNames)==null?void 0:e.toast,G==null?void 0:G.default,G==null?void 0:G[E],(n=v==null?void 0:v.classNames)==null?void 0:n[E]),"data-sonner-toast":"","data-rich-colors":(o=v.richColors)!=null?o:F,"data-styled":!(v.jsx||v.unstyled||S),"data-mounted":P,"data-promise":!!v.promise,"data-swiped":Ge,"data-removed":re,"data-visible":vs,"data-y-position":Vr,"data-x-position":Gr,"data-index":H,"data-front":Ps,"data-swiping":se,"data-dismissible":_e,"data-type":E,"data-invert":Us,"data-swipe-out":je,"data-swipe-direction":ce,"data-expanded":!!(K||Q&&P),style:{"--index":H,"--toasts-before":H,"--z-index":q.length-H,"--offset":`${re?ct:Gt.current}px`,"--initial-height":Q?"auto":`${Vt}px`,...ke,...v.style},onDragEnd:()=>{ge(!1),I(null),Kt.current=null},onPointerDown:Ee=>{ws||!_e||(Rt.current=new Date,_t(Gt.current),Ee.target.setPointerCapture(Ee.pointerId),Ee.target.tagName!=="BUTTON"&&(ge(!0),Kt.current={x:Ee.clientX,y:Ee.clientY}))},onPointerUp:()=>{var Ee,He,Ke,vt;if(je||!_e)return;Kt.current=null;let Mt=Number(((Ee=At.current)==null?void 0:Ee.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Wt=Number(((He=At.current)==null?void 0:He.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Xt=new Date().getTime()-((Ke=Rt.current)==null?void 0:Ke.getTime()),wt=fe==="x"?Mt:Wt,hs=Math.abs(wt)/Xt;if(Math.abs(wt)>=x1||hs>.11){_t(Gt.current),(vt=v.onDismiss)==null||vt.call(v,v),ye(fe==="x"?Mt>0?"right":"left":Wt>0?"down":"up"),ds(),$e(!0),Ue(!1);return}ge(!1),I(null)},onPointerMove:Ee=>{var He,Ke,vt,Mt;if(!Kt.current||!_e||((He=window.getSelection())==null?void 0:He.toString().length)>0)return;let Wt=Ee.clientY-Kt.current.y,Xt=Ee.clientX-Kt.current.x,wt=(Ke=r.swipeDirections)!=null?Ke:w1(ue);!fe&&(Math.abs(Xt)>1||Math.abs(Wt)>1)&&I(Math.abs(Xt)>Math.abs(Wt)?"x":"y");let hs={x:0,y:0};fe==="y"?(wt.includes("top")||wt.includes("bottom"))&&(wt.includes("top")&&Wt<0||wt.includes("bottom")&&Wt>0)&&(hs.y=Wt):fe==="x"&&(wt.includes("left")||wt.includes("right"))&&(wt.includes("left")&&Xt<0||wt.includes("right")&&Xt>0)&&(hs.x=Xt),(Math.abs(hs.x)>0||Math.abs(hs.y)>0)&&Ue(!0),(vt=At.current)==null||vt.style.setProperty("--swipe-amount-x",`${hs.x}px`),(Mt=At.current)==null||Mt.style.setProperty("--swipe-amount-y",`${hs.y}px`)}},cs&&!v.jsx?de.createElement("button",{"aria-label":N,"data-disabled":ws,"data-close-button":!0,onClick:ws||!_e?()=>{}:()=>{var Ee;ds(),(Ee=v.onDismiss)==null||Ee.call(v,v)},className:zs(G==null?void 0:G.closeButton,(l=v==null?void 0:v.classNames)==null?void 0:l.closeButton)},(c=J==null?void 0:J.close)!=null?c:n1):null,v.jsx||A.isValidElement(v.title)?v.jsx?v.jsx:typeof v.title=="function"?v.title():v.title:de.createElement(de.Fragment,null,E||v.icon||v.promise?de.createElement("div",{"data-icon":"",className:zs(G==null?void 0:G.icon,(d=v==null?void 0:v.classNames)==null?void 0:d.icon)},v.promise||v.type==="loading"&&!v.icon?v.icon||Sn():null,v.type!=="loading"?v.icon||(J==null?void 0:J[E])||Qb(E):null):null,de.createElement("div",{"data-content":"",className:zs(G==null?void 0:G.content,(m=v==null?void 0:v.classNames)==null?void 0:m.content)},de.createElement("div",{"data-title":"",className:zs(G==null?void 0:G.title,(p=v==null?void 0:v.classNames)==null?void 0:p.title)},typeof v.title=="function"?v.title():v.title),v.description?de.createElement("div",{"data-description":"",className:zs(ne,De,G==null?void 0:G.description,(g=v==null?void 0:v.classNames)==null?void 0:g.description)},typeof v.description=="function"?v.description():v.description):null),A.isValidElement(v.cancel)?v.cancel:v.cancel&&Oa(v.cancel)?de.createElement("button",{"data-button":!0,"data-cancel":!0,style:v.cancelButtonStyle||Pe,onClick:Ee=>{var He,Ke;Oa(v.cancel)&&_e&&((Ke=(He=v.cancel).onClick)==null||Ke.call(He,Ee),ds())},className:zs(G==null?void 0:G.cancelButton,(x=v==null?void 0:v.classNames)==null?void 0:x.cancelButton)},v.cancel.label):null,A.isValidElement(v.action)?v.action:v.action&&Oa(v.action)?de.createElement("button",{"data-button":!0,"data-action":!0,style:v.actionButtonStyle||X,onClick:Ee=>{var He,Ke;Oa(v.action)&&((Ke=(He=v.action).onClick)==null||Ke.call(He,Ee),!Ee.defaultPrevented&&ds())},className:zs(G==null?void 0:G.actionButton,(w=v==null?void 0:v.classNames)==null?void 0:w.actionButton)},v.action.label):null))};function Af(){if(typeof window>"u"||typeof document>"u")return"ltr";let r=document.documentElement.getAttribute("dir");return r==="auto"||!r?window.getComputedStyle(document.documentElement).direction:r}function k1(r,e){let n={};return[r,e].forEach((o,l)=>{let c=l===1,d=c?"--mobile-offset":"--offset",m=c?p1:f1;function p(g){["top","right","bottom","left"].forEach(x=>{n[`${d}-${x}`]=typeof g=="number"?`${g}px`:g})}typeof o=="number"||typeof o=="string"?p(o):typeof o=="object"?["top","right","bottom","left"].forEach(g=>{o[g]===void 0?n[`${d}-${g}`]=m:n[`${d}-${g}`]=typeof o[g]=="number"?`${o[g]}px`:o[g]}):p(m)}),n}A.forwardRef(function(r,e){let{invert:n,position:o="bottom-right",hotkey:l=["altKey","KeyT"],expand:c,closeButton:d,className:m,offset:p,mobileOffset:g,theme:x="light",richColors:w,duration:b,style:v,visibleToasts:S=m1,toastOptions:T,dir:j=Af(),gap:W=y1,loadingIcon:L,icons:H,containerAriaLabel:q="Notifications",pauseWhenPageIsHidden:K}=r,[R,F]=de.useState([]),me=de.useMemo(()=>Array.from(new Set([o].concat(R.filter(B=>B.position).map(B=>B.position)))),[R,o]),[ke,Pe]=de.useState([]),[X,V]=de.useState(!1),[ne,Y]=de.useState(!1),[ue,we]=de.useState(x!=="system"?x:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),xe=de.useRef(null),Q=l.join("+").replace(/Key/g,"").replace(/Digit/g,""),G=de.useRef(null),J=de.useRef(!1),N=de.useCallback(B=>{F(fe=>{var I;return(I=fe.find(ce=>ce.id===B.id))!=null&&I.delete||as.dismiss(B.id),fe.filter(({id:ce})=>ce!==B.id)})},[]);return de.useEffect(()=>as.subscribe(B=>{if(B.dismiss){F(fe=>fe.map(I=>I.id===B.id?{...I,delete:!0}:I));return}setTimeout(()=>{Jb.flushSync(()=>{F(fe=>{let I=fe.findIndex(ce=>ce.id===B.id);return I!==-1?[...fe.slice(0,I),{...fe[I],...B},...fe.slice(I+1)]:[B,...fe]})})})}),[]),de.useEffect(()=>{if(x!=="system"){we(x);return}if(x==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?we("dark"):we("light")),typeof window>"u")return;let B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:fe})=>{we(fe?"dark":"light")})}catch{B.addListener(({matches:I})=>{try{we(I?"dark":"light")}catch(ce){console.error(ce)}})}},[x]),de.useEffect(()=>{R.length<=1&&V(!1)},[R]),de.useEffect(()=>{let B=fe=>{var I,ce;l.every(ye=>fe[ye]||fe.code===ye)&&(V(!0),(I=xe.current)==null||I.focus()),fe.code==="Escape"&&(document.activeElement===xe.current||(ce=xe.current)!=null&&ce.contains(document.activeElement))&&V(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[l]),de.useEffect(()=>{if(xe.current)return()=>{G.current&&(G.current.focus({preventScroll:!0}),G.current=null,J.current=!1)}},[xe.current]),de.createElement("section",{ref:e,"aria-label":`${q} ${Q}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},me.map((B,fe)=>{var I;let[ce,ye]=B.split("-");return R.length?de.createElement("ol",{key:B,dir:j==="auto"?Af():j,tabIndex:-1,ref:xe,className:m,"data-sonner-toaster":!0,"data-theme":ue,"data-y-position":ce,"data-lifted":X&&R.length>1&&!c,"data-x-position":ye,style:{"--front-toast-height":`${((I=ke[0])==null?void 0:I.height)||0}px`,"--width":`${g1}px`,"--gap":`${W}px`,...v,...k1(p,g)},onBlur:P=>{J.current&&!P.currentTarget.contains(P.relatedTarget)&&(J.current=!1,G.current&&(G.current.focus({preventScroll:!0}),G.current=null))},onFocus:P=>{P.target instanceof HTMLElement&&P.target.dataset.dismissible==="false"||J.current||(J.current=!0,G.current=P.relatedTarget)},onMouseEnter:()=>V(!0),onMouseMove:()=>V(!0),onMouseLeave:()=>{ne||V(!1)},onDragEnd:()=>V(!1),onPointerDown:P=>{P.target instanceof HTMLElement&&P.target.dataset.dismissible==="false"||Y(!0)},onPointerUp:()=>Y(!1)},R.filter(P=>!P.position&&fe===0||P.position===B).map((P,D)=>{var re,M;return de.createElement(b1,{key:P.id,icons:H,index:D,toast:P,defaultRichColors:w,duration:(re=T==null?void 0:T.duration)!=null?re:b,className:T==null?void 0:T.className,descriptionClassName:T==null?void 0:T.descriptionClassName,invert:n,visibleToasts:S,closeButton:(M=T==null?void 0:T.closeButton)!=null?M:d,interacting:ne,position:B,style:T==null?void 0:T.style,unstyled:T==null?void 0:T.unstyled,classNames:T==null?void 0:T.classNames,cancelButtonStyle:T==null?void 0:T.cancelButtonStyle,actionButtonStyle:T==null?void 0:T.actionButtonStyle,removeToast:N,toasts:R.filter(se=>se.position==P.position),heights:ke.filter(se=>se.position==P.position),setHeights:Pe,expandByDefault:c,gap:W,loadingIcon:L,expanded:X,pauseWhenPageIsHidden:K,swipeDirections:r.swipeDirections})})):null}))});const Mf="https://15fokr9l7kfo.space.minimax.io",j1=({planId:r,planName:e,planPrice:n,planPeriod:o,onBack:l,onPaymentSuccess:c})=>{const[d,m]=A.useState(!1),[p,g]=A.useState(!0),x=sr(L=>L.setSubscription),w=ae(L=>L.setSubscriptionTier);sr(L=>L.isAuthenticated);const b=sr(L=>L.user),v=b==null?void 0:b.id,S=b==null?void 0:b.email;A.useEffect(()=>{const L=new URLSearchParams(window.location.search),H=L.get("payment"),q=L.get("session_id");H==="success"&&q?(T(q),window.history.replaceState({},"",window.location.pathname)):H==="cancelled"&&(Da.error("Payment was cancelled. You can try again when ready."),window.history.replaceState({},"",window.location.pathname))},[]);const T=async L=>{try{if((await(await fetch(`${Mf}/verify-session/${L}`)).json()).paymentStatus==="paid"){const K=new Date;r.includes("monthly")?K.setMonth(K.getMonth()+1):K.setFullYear(K.getFullYear()+1),x("premium","active",K.toISOString()),w("premium"),Da.success(`Successfully subscribed to ${e}!`),c()}}catch(H){console.error("Error verifying payment:",H),Da.error("Payment verification failed. Please contact support.")}},j=async()=>{m(!0);try{const H=await(await fetch(`${Mf}/create-checkout-session`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({planId:r,planName:e,planPrice:n,planPeriod:o,userId:v||"",userEmail:S||""})})).json();if(H.url)window.location.href=H.url;else throw new Error("No checkout URL received")}catch(L){console.error("Error creating checkout session:",L),Da.error("Failed to start checkout. Please try again."),m(!1)}},W=()=>{j()};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-lavender/20 to-white",children:[s.jsx("div",{className:"bg-gradient-to-r from-primary via-secondary to-accent text-white",children:s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-6",children:[s.jsxs("button",{onClick:l,className:"flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors",children:[s.jsx(lt,{size:20}),"Back"]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4",children:s.jsx(yy,{size:32,className:"text-white"})}),s.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Complete Your Purchase"}),s.jsx("p",{className:"text-white/80",children:"Secure payment processing"})]})]})}),s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-8",children:[s.jsxs(te,{className:"p-6 mb-6 bg-gradient-to-br from-primary/5 to-secondary/5",children:[s.jsx("h3",{className:"font-semibold mb-4",children:"Order Summary"}),s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("span",{className:"text-muted-foreground",children:"Plan"}),s.jsx("span",{className:"font-medium",children:e})]}),s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("span",{className:"text-muted-foreground",children:"Billing"}),s.jsx("span",{className:"font-medium",children:o==="/month"?"Monthly":"Annually"})]}),s.jsx("div",{className:"border-t border-border my-3"}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"font-semibold",children:"Total"}),s.jsxs("span",{className:"text-2xl font-bold text-primary",children:["$",n.toFixed(2)]})]}),r==="premium-yearly"&&s.jsxs("p",{className:"text-sm text-green-600 mt-2 flex items-center gap-1",children:[s.jsx(Le,{size:14}),"You save $59.88 per year!"]})]}),s.jsxs(te,{className:"p-6",children:[s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4",children:s.jsx(_s,{size:28,className:"text-violet-600"})}),s.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Secure Checkout"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Click below to complete your secure payment via Stripe"})]}),s.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-6",children:[s.jsx("p",{className:"text-sm font-medium text-amber-800 mb-3",children:"What you'll get:"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsxs("li",{className:"flex items-center gap-2 text-sm text-amber-700",children:[s.jsx(Le,{size:16,className:"text-green-500 shrink-0"}),"Unlimited symptom tracking"]}),s.jsxs("li",{className:"flex items-center gap-2 text-sm text-amber-700",children:[s.jsx(Le,{size:16,className:"text-green-500 shrink-0"}),"Full AI chatbot access"]}),s.jsxs("li",{className:"flex items-center gap-2 text-sm text-amber-700",children:[s.jsx(Le,{size:16,className:"text-green-500 shrink-0"}),"Voice journaling"]}),s.jsxs("li",{className:"flex items-center gap-2 text-sm text-amber-700",children:[s.jsx(Le,{size:16,className:"text-green-500 shrink-0"}),"Advanced insights & patterns"]}),s.jsxs("li",{className:"flex items-center gap-2 text-sm text-amber-700",children:[s.jsx(Le,{size:16,className:"text-green-500 shrink-0"}),"Doctor visit reports"]})]})]}),s.jsxs("div",{className:"flex items-center justify-center gap-4 text-muted-foreground mb-6",children:[s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx(er,{size:14}),s.jsx("span",{children:"PCI Compliant"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx(_s,{size:14}),s.jsx("span",{children:"256-bit SSL"})]})]}),s.jsx(oe,{fullWidth:!0,size:"lg",loading:d,onClick:W,className:"bg-gradient-to-r from-primary to-secondary hover:opacity-90",children:d?s.jsxs(s.Fragment,{children:[s.jsx(hu,{size:20,className:"animate-spin"}),"Processing..."]}):s.jsx(s.Fragment,{children:s.jsxs(s.Fragment,{children:[s.jsx(xy,{size:20}),"Continue to Secure Checkout"]})})}),s.jsxs("p",{className:"text-xs text-center text-muted-foreground mt-4",children:["By completing this purchase, you agree to our Terms of Service and Privacy Policy.",o==="/month"&&" You can cancel anytime.",o==="/year"&&" Your subscription will auto-renew annually."]}),s.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground",children:[s.jsx("span",{children:"Powered by"}),s.jsx("span",{className:"font-semibold text-violet-600",children:"Stripe"}),s.jsx(er,{size:12})]})]}),s.jsxs("div",{className:"flex items-center justify-center gap-6 mt-6 text-muted-foreground",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(_s,{size:16}),s.jsx("span",{children:"SSL Encrypted"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(er,{size:16}),s.jsx("span",{children:"Secure Checkout"})]})]})]})]})},S1=["learn","ai"],N1=[{id:"dashboard",label:"Home",icon:s.jsx(by,{size:22})},{id:"track",label:"Track",icon:s.jsx(Cy,{size:22})},{id:"insights",label:"Insights",icon:s.jsx(Pu,{size:22})},{id:"learn",label:"Learn",icon:s.jsx(Wa,{size:22})},{id:"community",label:"Forum",icon:s.jsx(tr,{size:22})},{id:"profile",label:"Profile",icon:s.jsx(Du,{size:22})}],T1=()=>{const[r,e]=A.useState("dashboard"),[n,o]=A.useState(null),[l,c]=A.useState(!1),[d,m]=A.useState(!0),[p,g]=A.useState(null),[x,w]=A.useState(null),b=ae(F=>F.onboardingCompleted),v=ui(F=>F.isAdminLoggedIn),S=sr(F=>F.isAuthenticated),j=ae(F=>F.subscriptionTier)==="premium";A.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[r,n]),A.useEffect(()=>{new URLSearchParams(window.location.search).get("admin")==="true"&&o(v?"admin-dashboard":"admin-login")},[]);const W=n||r;A.useEffect(()=>{const F=localStorage.getItem("psych-wise-pin");(F===null||F==="")&&c(!0),m(!1)},[]);const L=()=>{c(!0)};if(d)return s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-primary via-secondary to-accent flex items-center justify-center",children:s.jsx("div",{className:"w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin"})});if(!l)return s.jsx(Dv,{onSuccess:L});if(!b)return s.jsx(jv,{});const H=F=>{if(S1.includes(F)&&!j){o("subscription");return}["crisis","community","ai","about","login","signup","subscription","payment"].includes(F)?o(F):(o(null),e(F))},q=()=>{o(null)},K=()=>{switch(W){case"dashboard":return s.jsx(Bm,{onNavigate:H});case"track":return s.jsx(fv,{onNavigate:H});case"insights":return s.jsx(pv,{onNavigate:H});case"learn":return s.jsx(gv,{onNavigate:H});case"profile":return s.jsx(wv,{onNavigate:H});case"crisis":return s.jsx(Sv,{onClose:q});case"community":return s.jsx(Cv,{onClose:q,onNavigate:H});case"ai":return s.jsx(Mv,{onClose:q});case"about":return s.jsx(Iv,{onBack:q,onNavigate:H});case"admin-login":return s.jsx(Ov,{onLoginSuccess:()=>o("admin-dashboard"),onBack:()=>o(null)});case"admin-dashboard":return s.jsx(Lv,{onLogout:()=>o(null)});case"login":return s.jsx(Fb,{onLoginSuccess:()=>{const F=x;w(null),o(F||null)},onBack:()=>o(null),onNavigateToSignup:()=>{w("subscription"),o("signup")},onNavigateToSubscription:()=>o("subscription")});case"signup":return s.jsx(Ub,{onSignupSuccess:()=>{const F=x;w(null),o(F||null)},onBack:()=>o(null),onNavigateToLogin:()=>o("login"),onNavigateToSubscription:()=>o("subscription")});case"subscription":return s.jsx(Pf,{onBack:()=>o(null),onNavigateToLogin:()=>{w("subscription"),o("login")},onNavigateToPayment:(F,me,ke,Pe)=>{g({id:F,name:me,price:ke,period:Pe}),o("payment")}});case"payment":return p?s.jsx(j1,{planId:p.id,planName:p.name,planPrice:p.price,planPeriod:p.period,onBack:()=>{g(null),o("subscription")},onPaymentSuccess:()=>{g(null),o(null)}}):s.jsx(Pf,{onBack:()=>o(null),onNavigateToLogin:()=>o("login"),onNavigateToPayment:()=>{}});default:return s.jsx(Bm,{onNavigate:H})}},R=!n;return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-background to-muted/20",children:[s.jsx("header",{className:"sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border",children:s.jsxs("div",{className:"max-w-lg mx-auto px-4 py-3 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center",children:s.jsx(Fe,{size:16,className:"text-white"})}),s.jsx("span",{className:"font-serif text-lg font-semibold text-foreground",children:gt.name}),j&&s.jsxs("span",{className:"px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1",children:[s.jsx(Hs,{size:12}),"Premium"]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[!j&&s.jsx("button",{onClick:()=>o("subscription"),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-medium hover:from-amber-500 hover:to-orange-500 transition-all",children:"Go Premium"}),!S&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>o("login"),className:"px-3 py-1.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors",children:"Sign In"}),s.jsx("button",{onClick:()=>o("signup"),className:"px-3 py-1.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors",children:"Sign Up"})]})]})]})}),s.jsx("main",{className:`max-w-lg mx-auto px-4 py-6 ${R?"pb-24":""}`,children:K()}),R&&s.jsx(My,{tabs:N1,activeTab:r,onTabChange:F=>H(F)}),r!=="ai"&&s.jsxs("button",{onClick:()=>H("ai"),className:"fixed bottom-20 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg flex items-center justify-center z-50 hover:scale-110 transition-transform animate-bounce-gentle",style:{animationDuration:"3s"},"aria-label":"Chat with Maya AI Guide",children:[s.jsx(Fe,{size:24,className:"text-white"}),s.jsx("span",{className:"absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"})]})]})},La={appName:"Psych-Wise",save:"Save",cancel:"Cancel",close:"Close",back:"Back",next:"Next",done:"Done",loading:"Loading...",error:"Error",success:"Success",home:"Home",track:"Track",insights:"Insights",community:"Community",learn:"Learn",profile:"Profile",settings:"Settings",welcomeTitle:"Welcome to Psych-Wise",welcomeSubtitle:"Your Hot Flash Hottie wellness companion",getStarted:"Get Started",takeQuiz:"Take the Symptom Quiz",skipForNow:"Set up manually",logSymptom:"Log Symptom",howAreYouFeeling:"How are you feeling today?",selectSymptoms:"Select your symptoms",severity:"Severity",notes:"Notes",hotflashHotties:"Hot Flash Hotties",discussions:"Discussions",hotTips:"Hot Tips",challenges:"Challenges",myProfile:"My Profile",language:"Language",selectLanguage:"Select Language",notifications:"Notifications",privacy:"Privacy",helpSupport:"Help & Support",wellnessJourney:"Your Wellness Journey",yourProgress:"Your Progress",thisWeek:"This Week",thisMonth:"This Month",moodGreat:"Great",moodGood:"Good",moodOkay:"Okay",moodLow:"Low",moodDifficult:"Difficult",savedSuccessfully:"Saved successfully!",errorOccurred:"An error occurred"},C1={appName:"Psych-Wise",save:"Guardar",cancel:"Cancelar",close:"Cerrar",back:"Atrás",next:"Siguiente",done:"Hecho",loading:"Cargando...",error:"Error",success:"Éxito",home:"Inicio",track:"Registrar",insights:"Perspectivas",community:"Comunidad",learn:"Aprender",profile:"Perfil",settings:"Configuración",welcomeTitle:"Bienvenida a Psych-Wise",welcomeSubtitle:"Tu compañera Hot Flash Hottie de bienestar",getStarted:"Comenzar",takeQuiz:"Hacer el Cuestionario",skipForNow:"Configurar manualmente",logSymptom:"Registrar Síntoma",howAreYouFeeling:"¿Cómo te sientes hoy?",selectSymptoms:"Selecciona tus síntomas",severity:"Severidad",notes:"Notas",hotflashHotties:"Hot Flash Hotties",discussions:"Discusiones",hotTips:"Consejos Calientes",challenges:"Desafíos",myProfile:"Mi Perfil",language:"Idioma",selectLanguage:"Seleccionar Idioma",notifications:"Notificaciones",privacy:"Privacidad",helpSupport:"Ayuda y Soporte",wellnessJourney:"Tu Viaje de Bienestar",yourProgress:"Tu Progreso",thisWeek:"Esta Semana",thisMonth:"Este Mes",moodGreat:"Excelente",moodGood:"Bien",moodOkay:"Regular",moodLow:"Bajo",moodDifficult:"Difícil",savedSuccessfully:"¡Guardado exitosamente!",errorOccurred:"Ocurrió un error"},E1={appName:"Psych-Wise",save:"Enregistrer",cancel:"Annuler",close:"Fermer",back:"Retour",next:"Suivant",done:"Terminé",loading:"Chargement...",error:"Erreur",success:"Succès",home:"Accueil",track:"Suivre",insights:"Aperçus",community:"Communauté",learn:"Apprendre",profile:"Profil",settings:"Paramètres",welcomeTitle:"Bienvenue sur Psych-Wise",welcomeSubtitle:"Votre compagnon bien-être Hot Flash Hottie",getStarted:"Commencer",takeQuiz:"Faire le Quiz",skipForNow:"Configuration manuelle",logSymptom:"Enregistrer un Symptôme",howAreYouFeeling:"Comment vous sentez-vous aujourd'hui?",selectSymptoms:"Sélectionnez vos symptômes",severity:"Sévérité",notes:"Notes",hotflashHotties:"Hot Flash Hotties",discussions:"Discussions",hotTips:"Conseils Chauds",challenges:"Défis",myProfile:"Mon Profil",language:"Langue",selectLanguage:"Sélectionner la Langue",notifications:"Notifications",privacy:"Confidentialité",helpSupport:"Aide et Support",wellnessJourney:"Votre Parcours Bien-être",yourProgress:"Votre Progrès",thisWeek:"Cette Semaine",thisMonth:"Ce Mois",moodGreat:"Excellent",moodGood:"Bien",moodOkay:"Correct",moodLow:"Bas",moodDifficult:"Difficile",savedSuccessfully:"Enregistré avec succès!",errorOccurred:"Une erreur est survenue"},_1={appName:"Psych-Wise",save:"Salvar",cancel:"Cancelar",close:"Fechar",back:"Voltar",next:"Próximo",done:"Concluído",loading:"Carregando...",error:"Erro",success:"Sucesso",home:"Início",track:"Rastrear",insights:"Insights",community:"Comunidade",learn:"Aprender",profile:"Perfil",settings:"Configurações",welcomeTitle:"Bem-vinda ao Psych-Wise",welcomeSubtitle:"Sua companheira de bem-estar Hot Flash Hottie",getStarted:"Começar",takeQuiz:"Fazer o Questionário",skipForNow:"Configurar manualmente",logSymptom:"Registrar Sintoma",howAreYouFeeling:"Como você está se sentindo hoje?",selectSymptoms:"Selecione seus sintomas",severity:"Severidade",notes:"Notas",hotflashHotties:"Hot Flash Hotties",discussions:"Discussões",hotTips:"Dicas Quentes",challenges:"Desafios",myProfile:"Meu Perfil",language:"Idioma",selectLanguage:"Selecionar Idioma",notifications:"Notificações",privacy:"Privacidade",helpSupport:"Ajuda e Suporte",wellnessJourney:"Sua Jornada de Bem-estar",yourProgress:"Seu Progresso",thisWeek:"Esta Semana",thisMonth:"Este Mês",moodGreat:"Excelente",moodGood:"Bom",moodOkay:"Ok",moodLow:"Baixo",moodDifficult:"Difícil",savedSuccessfully:"Salvo com sucesso!",errorOccurred:"Ocorreu um erro"},If={en:La,es:C1,fr:E1,pt:_1,zh:La,ar:La,ja:La},P1=A.createContext(void 0),R1=({children:r,initialLanguage:e="en",onLanguageChange:n,externalLanguage:o})=>{const[l,c]=A.useState(e),d=p=>{c(p),n&&n(p)},m=p=>If[l][p]||If.en[p]||p;return A.useEffect(()=>{o&&o!==l&&c(o)},[o,l]),s.jsx(P1.Provider,{value:{language:l,setLanguage:d,t:m},children:r})};function A1(){const r=ae(n=>n.language),e=ae(n=>n.setLanguage);return s.jsx(R1,{initialLanguage:r,onLanguageChange:e,externalLanguage:r,children:s.jsx(T1,{})})}ly.createRoot(document.getElementById("root")).render(s.jsx(A.StrictMode,{children:s.jsx(uy,{children:s.jsx(A1,{})})}));
