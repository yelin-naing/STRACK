function C1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ip={exports:{}},dl={},Ap={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),$1=Symbol.for("react.portal"),E1=Symbol.for("react.fragment"),k1=Symbol.for("react.strict_mode"),L1=Symbol.for("react.profiler"),P1=Symbol.for("react.provider"),N1=Symbol.for("react.context"),z1=Symbol.for("react.forward_ref"),T1=Symbol.for("react.suspense"),D1=Symbol.for("react.memo"),O1=Symbol.for("react.lazy"),Ed=Symbol.iterator;function j1(e){return e===null||typeof e!="object"?null:(e=Ed&&e[Ed]||e["@@iterator"],typeof e=="function"?e:null)}var Fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bp=Object.assign,Up={};function mi(e,t,n){this.props=e,this.context=t,this.refs=Up,this.updater=n||Fp}mi.prototype.isReactComponent={};mi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wp(){}Wp.prototype=mi.prototype;function Hc(e,t,n){this.props=e,this.context=t,this.refs=Up,this.updater=n||Fp}var Vc=Hc.prototype=new Wp;Vc.constructor=Hc;Bp(Vc,mi.prototype);Vc.isPureReactComponent=!0;var kd=Array.isArray,Hp=Object.prototype.hasOwnProperty,Qc={current:null},Vp={key:!0,ref:!0,__self:!0,__source:!0};function Qp(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Hp.call(t,r)&&!Vp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),h=0;h<a;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zs,type:e,key:s,ref:l,props:i,_owner:Qc.current}}function R1(e,t){return{$$typeof:zs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kc(e){return typeof e=="object"&&e!==null&&e.$$typeof===zs}function I1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ld=/\/+/g;function Jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I1(""+e.key):t.toString(36)}function yo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zs:case $1:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Jl(l,0):r,kd(i)?(n="",e!=null&&(n=e.replace(Ld,"$&/")+"/"),yo(i,t,n,"",function(h){return h})):i!=null&&(Kc(i)&&(i=R1(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ld,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",kd(e))for(var a=0;a<e.length;a++){s=e[a];var c=r+Jl(s,a);l+=yo(s,t,n,c,i)}else if(c=j1(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=r+Jl(s,a++),l+=yo(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ys(e,t,n){if(e==null)return e;var r=[],i=0;return yo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function A1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},vo={transition:null},F1={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Qc};function Kp(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Ys,forEach:function(e,t,n){Ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ys(e,function(){t++}),t},toArray:function(e){return Ys(e,function(t){return t})||[]},only:function(e){if(!Kc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=mi;Y.Fragment=E1;Y.Profiler=L1;Y.PureComponent=Hc;Y.StrictMode=k1;Y.Suspense=T1;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F1;Y.act=Kp;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bp({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Qc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Hp.call(t,c)&&!Vp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var h=0;h<c;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:zs,type:e.type,key:i,ref:s,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:N1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:P1,_context:e},e.Consumer=e};Y.createElement=Qp;Y.createFactory=function(e){var t=Qp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:z1,render:e}};Y.isValidElement=Kc;Y.lazy=function(e){return{$$typeof:O1,_payload:{_status:-1,_result:e},_init:A1}};Y.memo=function(e,t){return{$$typeof:D1,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};Y.unstable_act=Kp;Y.useCallback=function(e,t){return Xe.current.useCallback(e,t)};Y.useContext=function(e){return Xe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Xe.current.useEffect(e,t)};Y.useId=function(){return Xe.current.useId()};Y.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Xe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};Y.useRef=function(e){return Xe.current.useRef(e)};Y.useState=function(e){return Xe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Xe.current.useTransition()};Y.version="18.3.1";Ap.exports=Y;var y=Ap.exports;const Mt=_1(y),Wa=C1({__proto__:null,default:Mt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1=y,U1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),H1=Object.prototype.hasOwnProperty,V1=B1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q1={key:!0,ref:!0,__self:!0,__source:!0};function Yp(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)H1.call(t,r)&&!Q1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:U1,type:e,key:s,ref:l,props:i,_owner:V1.current}}dl.Fragment=W1;dl.jsx=Yp;dl.jsxs=Yp;Ip.exports=dl;var Pe=Ip.exports,Ha={},Zp={exports:{}},ft={},Jp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,B){var W=O.length;O.push(B);e:for(;0<W;){var K=W-1>>>1,q=O[K];if(0<i(q,B))O[K]=B,O[W]=q,W=K;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],W=O.pop();if(W!==B){O[0]=W;e:for(var K=0,q=O.length,ae=q>>>1;K<ae;){var He=2*(K+1)-1,mt=O[He],M=He+1,gt=O[M];if(0>i(mt,W))M<q&&0>i(gt,mt)?(O[K]=gt,O[M]=W,K=M):(O[K]=mt,O[He]=W,K=He);else if(M<q&&0>i(gt,W))O[K]=gt,O[M]=W,K=M;else break e}}return B}function i(O,B){var W=O.sortIndex-B.sortIndex;return W!==0?W:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],h=[],g=1,v=null,x=3,E=!1,b=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(O){for(var B=n(h);B!==null;){if(B.callback===null)r(h);else if(B.startTime<=O)r(h),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(h)}}function $(O){if(S=!1,w(O),!b)if(n(c)!==null)b=!0,le(N);else{var B=n(h);B!==null&&Se($,B.startTime-O)}}function N(O,B){b=!1,S&&(S=!1,m(R),R=-1),E=!0;var W=x;try{for(w(B),v=n(c);v!==null&&(!(v.expirationTime>B)||O&&!re());){var K=v.callback;if(typeof K=="function"){v.callback=null,x=v.priorityLevel;var q=K(v.expirationTime<=B);B=e.unstable_now(),typeof q=="function"?v.callback=q:v===n(c)&&r(c),w(B)}else r(c);v=n(c)}if(v!==null)var ae=!0;else{var He=n(h);He!==null&&Se($,He.startTime-B),ae=!1}return ae}finally{v=null,x=W,E=!1}}var P=!1,z=null,R=-1,I=5,U=-1;function re(){return!(e.unstable_now()-U<I)}function We(){if(z!==null){var O=e.unstable_now();U=O;var B=!0;try{B=z(!0,O)}finally{B?_():(P=!1,z=null)}}else P=!1}var _;if(typeof p=="function")_=function(){p(We)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,F=k.port2;k.port1.onmessage=We,_=function(){F.postMessage(null)}}else _=function(){T(We,0)};function le(O){z=O,P||(P=!0,_())}function Se(O,B){R=T(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){b||E||(b=!0,le(N))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var W=x;x=B;try{return O()}finally{x=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=x;x=O;try{return B()}finally{x=W}},e.unstable_scheduleCallback=function(O,B,W){var K=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,O){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=W+q,O={id:g++,callback:B,priorityLevel:O,startTime:W,expirationTime:q,sortIndex:-1},W>K?(O.sortIndex=W,t(h,O),n(c)===null&&O===n(h)&&(S?(m(R),R=-1):S=!0,Se($,W-K))):(O.sortIndex=q,t(c,O),b||E||(b=!0,le(N))),O},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(O){var B=x;return function(){var W=x;x=B;try{return O.apply(this,arguments)}finally{x=W}}}})(Gp);Jp.exports=Gp;var K1=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=y,dt=K1;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xp=new Set,ls={};function hr(e,t){ni(e,t),ni(e+"Capture",t)}function ni(e,t){for(ls[e]=t,e=0;e<t.length;e++)Xp.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,Z1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},Nd={};function J1(e){return Va.call(Nd,e)?!0:Va.call(Pd,e)?!1:Z1.test(e)?Nd[e]=!0:(Pd[e]=!0,!1)}function G1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X1(e,t,n,r){if(t===null||typeof t>"u"||G1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yc=/[\-:]([a-z])/g;function Zc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yc,Zc);Ue[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yc,Zc);Ue[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yc,Zc);Ue[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jc(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X1(t,n,i,r)&&(n=null),r||i===null?J1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zs=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Mp=Symbol.for("react.context"),Xc=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Ya=Symbol.for("react.suspense_list"),qc=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),eh=Symbol.for("react.offscreen"),zd=Symbol.iterator;function zi(e){return e===null||typeof e!="object"?null:(e=zd&&e[zd]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Gl;function Ki(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Xl=!1;function ql(e,t){if(!e||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ki(e):""}function q1(e){switch(e.tag){case 5:return Ki(e.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ar:return"Fragment";case Ir:return"Portal";case Qa:return"Profiler";case Gc:return"StrictMode";case Ka:return"Suspense";case Ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mp:return(e.displayName||"Context")+".Consumer";case qp:return(e._context.displayName||"Context")+".Provider";case Xc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qc:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function M1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function th(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eg(e){var t=th(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Js(e){e._valueTracker||(e._valueTracker=eg(e))}function nh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=th(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rh(e,t){t=t.checked,t!=null&&Jc(e,"checked",t,!1)}function Ga(e,t){rh(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yi=Array.isArray;function Jr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Od(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Yi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function ih(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gs,oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function as(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tg=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(e){tg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xi[t]=Xi[e]})});function lh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xi.hasOwnProperty(e)&&Xi[e]?(""+t).trim():t+"px"}function ah(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ng=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(ng[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function Mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rc=null,Gr=null,Xr=null;function Rd(e){if(e=Os(e)){if(typeof rc!="function")throw Error(D(280));var t=e.stateNode;t&&(t=gl(t),rc(e.stateNode,e.type,t))}}function ch(e){Gr?Xr?Xr.push(e):Xr=[e]:Gr=e}function uh(){if(Gr){var e=Gr,t=Xr;if(Xr=Gr=null,Rd(e),t)for(e=0;e<t.length;e++)Rd(t[e])}}function dh(e,t){return e(t)}function fh(){}var Ml=!1;function ph(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return dh(e,t,n)}finally{Ml=!1,(Gr!==null||Xr!==null)&&(fh(),uh())}}function cs(e,t){var n=e.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ic=!1;if(tn)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){ic=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{ic=!1}function rg(e,t,n,r,i,s,l,a,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(g){this.onError(g)}}var qi=!1,Do=null,Oo=!1,sc=null,ig={onError:function(e){qi=!0,Do=e}};function sg(e,t,n,r,i,s,l,a,c){qi=!1,Do=null,rg.apply(ig,arguments)}function og(e,t,n,r,i,s,l,a,c){if(sg.apply(this,arguments),qi){if(qi){var h=Do;qi=!1,Do=null}else throw Error(D(198));Oo||(Oo=!0,sc=h)}}function mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Id(e){if(mr(e)!==e)throw Error(D(188))}function lg(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Id(i),e;if(s===r)return Id(i),t;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function mh(e){return e=lg(e),e!==null?gh(e):null}function gh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gh(e);if(t!==null)return t;e=e.sibling}return null}var yh=dt.unstable_scheduleCallback,Ad=dt.unstable_cancelCallback,ag=dt.unstable_shouldYield,cg=dt.unstable_requestPaint,_e=dt.unstable_now,ug=dt.unstable_getCurrentPriorityLevel,eu=dt.unstable_ImmediatePriority,vh=dt.unstable_UserBlockingPriority,jo=dt.unstable_NormalPriority,dg=dt.unstable_LowPriority,wh=dt.unstable_IdlePriority,fl=null,Ht=null;function fg(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:mg,pg=Math.log,hg=Math.LN2;function mg(e){return e>>>=0,e===0?32:31-(pg(e)/hg|0)|0}var Xs=64,qs=4194304;function Zi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ro(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Zi(a):(s&=l,s!==0&&(r=Zi(s)))}else l=n&~i,l!==0?r=Zi(l):s!==0&&(r=Zi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),i=1<<n,r|=e[n],t&=~i;return r}function gg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Dt(s),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=gg(a,t)):c<=t&&(e.expiredLanes|=a),s&=~a}}function oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xh(){var e=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function vg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Sh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bh,nu,Ch,_h,$h,lc=!1,Ms=[],_n=null,$n=null,En=null,us=new Map,ds=new Map,yn=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":us.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(t.pointerId)}}function Di(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Os(t),t!==null&&nu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xg(e,t,n,r,i){switch(t){case"focusin":return _n=Di(_n,e,t,n,r,i),!0;case"dragenter":return $n=Di($n,e,t,n,r,i),!0;case"mouseover":return En=Di(En,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return us.set(s,Di(us.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ds.set(s,Di(ds.get(s)||null,e,t,n,r,i)),!0}return!1}function Eh(e){var t=Gn(e.target);if(t!==null){var n=mr(t);if(n!==null){if(t=n.tag,t===13){if(t=hh(n),t!==null){e.blockedOn=t,$h(e.priority,function(){Ch(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ac(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nc=r,n.target.dispatchEvent(r),nc=null}else return t=Os(n),t!==null&&nu(t),e.blockedOn=n,!1;t.shift()}return!0}function Bd(e,t,n){wo(e)&&n.delete(t)}function Sg(){lc=!1,_n!==null&&wo(_n)&&(_n=null),$n!==null&&wo($n)&&($n=null),En!==null&&wo(En)&&(En=null),us.forEach(Bd),ds.forEach(Bd)}function Oi(e,t){e.blockedOn===t&&(e.blockedOn=null,lc||(lc=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Sg)))}function fs(e){function t(i){return Oi(i,e)}if(0<Ms.length){Oi(Ms[0],e);for(var n=1;n<Ms.length;n++){var r=Ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Oi(_n,e),$n!==null&&Oi($n,e),En!==null&&Oi(En,e),us.forEach(t),ds.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Eh(n),n.blockedOn===null&&yn.shift()}var qr=on.ReactCurrentBatchConfig,Io=!0;function bg(e,t,n,r){var i=se,s=qr.transition;qr.transition=null;try{se=1,ru(e,t,n,r)}finally{se=i,qr.transition=s}}function Cg(e,t,n,r){var i=se,s=qr.transition;qr.transition=null;try{se=4,ru(e,t,n,r)}finally{se=i,qr.transition=s}}function ru(e,t,n,r){if(Io){var i=ac(e,t,n,r);if(i===null)ua(e,t,r,Ao,n),Fd(e,r);else if(xg(i,e,t,n,r))r.stopPropagation();else if(Fd(e,r),t&4&&-1<wg.indexOf(e)){for(;i!==null;){var s=Os(i);if(s!==null&&bh(s),s=ac(e,t,n,r),s===null&&ua(e,t,r,Ao,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ua(e,t,r,null,n)}}var Ao=null;function ac(e,t,n,r){if(Ao=null,e=Mc(r),e=Gn(e),e!==null)if(t=mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function kh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ug()){case eu:return 1;case vh:return 4;case jo:case dg:return 16;case wh:return 536870912;default:return 16}default:return 16}}var xn=null,iu=null,xo=null;function Lh(){if(xo)return xo;var e,t=iu,n=t.length,r,i="value"in xn?xn.value:xn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return xo=i.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Ud(){return!1}function pt(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eo:Ud,this.isPropagationStopped=Ud,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=pt(gi),Ds=ve({},gi,{view:0,detail:0}),_g=pt(Ds),ta,na,ji,pl=ve({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(ta=e.screenX-ji.screenX,na=e.screenY-ji.screenY):na=ta=0,ji=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),Wd=pt(pl),$g=ve({},pl,{dataTransfer:0}),Eg=pt($g),kg=ve({},Ds,{relatedTarget:0}),ra=pt(kg),Lg=ve({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=pt(Lg),Ng=ve({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zg=pt(Ng),Tg=ve({},gi,{data:0}),Hd=pt(Tg),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jg[e])?!!t[e]:!1}function ou(){return Rg}var Ig=ve({},Ds,{key:function(e){if(e.key){var t=Dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ag=pt(Ig),Fg=ve({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=pt(Fg),Bg=ve({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Ug=pt(Bg),Wg=ve({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hg=pt(Wg),Vg=ve({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=pt(Vg),Kg=[9,13,27,32],lu=tn&&"CompositionEvent"in window,Mi=null;tn&&"documentMode"in document&&(Mi=document.documentMode);var Yg=tn&&"TextEvent"in window&&!Mi,Ph=tn&&(!lu||Mi&&8<Mi&&11>=Mi),Qd=" ",Kd=!1;function Nh(e,t){switch(e){case"keyup":return Kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Zg(e,t){switch(e){case"compositionend":return zh(t);case"keypress":return t.which!==32?null:(Kd=!0,Qd);case"textInput":return e=t.data,e===Qd&&Kd?null:e;default:return null}}function Jg(e,t){if(Fr)return e==="compositionend"||!lu&&Nh(e,t)?(e=Lh(),xo=iu=xn=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ph&&t.locale!=="ko"?null:t.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gg[e.type]:t==="textarea"}function Th(e,t,n,r){ch(r),t=Fo(t,"onChange"),0<t.length&&(n=new su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var es=null,ps=null;function Xg(e){Hh(e,0)}function hl(e){var t=Wr(e);if(nh(t))return e}function qg(e,t){if(e==="change")return t}var Dh=!1;if(tn){var ia;if(tn){var sa="oninput"in document;if(!sa){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),sa=typeof Zd.oninput=="function"}ia=sa}else ia=!1;Dh=ia&&(!document.documentMode||9<document.documentMode)}function Jd(){es&&(es.detachEvent("onpropertychange",Oh),ps=es=null)}function Oh(e){if(e.propertyName==="value"&&hl(ps)){var t=[];Th(t,ps,e,Mc(e)),ph(Xg,t)}}function Mg(e,t,n){e==="focusin"?(Jd(),es=t,ps=n,es.attachEvent("onpropertychange",Oh)):e==="focusout"&&Jd()}function ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(ps)}function ty(e,t){if(e==="click")return hl(t)}function ny(e,t){if(e==="input"||e==="change")return hl(t)}function ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:ry;function hs(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Va.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,t){var n=Gd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rh(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function iy(e){var t=Rh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jh(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Xd(n,s);var l=Xd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sy=tn&&"documentMode"in document&&11>=document.documentMode,Br=null,cc=null,ts=null,uc=!1;function qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uc||Br==null||Br!==To(r)||(r=Br,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&hs(ts,r)||(ts=r,r=Fo(cc,"onSelect"),0<r.length&&(t=new su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ur={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},oa={},Ih={};tn&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function ml(e){if(oa[e])return oa[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ih)return oa[e]=t[n];return e}var Ah=ml("animationend"),Fh=ml("animationiteration"),Bh=ml("animationstart"),Uh=ml("transitionend"),Wh=new Map,Md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){Wh.set(e,t),hr(t,[e])}for(var la=0;la<Md.length;la++){var aa=Md[la],oy=aa.toLowerCase(),ly=aa[0].toUpperCase()+aa.slice(1);jn(oy,"on"+ly)}jn(Ah,"onAnimationEnd");jn(Fh,"onAnimationIteration");jn(Bh,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Uh,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function ef(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,og(r,t,void 0,e),e.currentTarget=null}function Hh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,h=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;ef(i,a,h),s=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,h=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;ef(i,a,h),s=c}}}if(Oo)throw e=sc,Oo=!1,sc=null,e}function ue(e,t){var n=t[mc];n===void 0&&(n=t[mc]=new Set);var r=e+"__bubble";n.has(r)||(Vh(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),Vh(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[no]){e[no]=!0,Xp.forEach(function(n){n!=="selectionchange"&&(ay.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,ca("selectionchange",!1,t))}}function Vh(e,t,n,r){switch(kh(t)){case 1:var i=bg;break;case 4:i=Cg;break;default:i=ru}n=i.bind(null,t,n,e),i=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ua(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Gn(a),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}a=a.parentNode}}r=r.return}ph(function(){var h=s,g=Mc(n),v=[];e:{var x=Wh.get(e);if(x!==void 0){var E=su,b=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":E=Ag;break;case"focusin":b="focus",E=ra;break;case"focusout":b="blur",E=ra;break;case"beforeblur":case"afterblur":E=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Ug;break;case Ah:case Fh:case Bh:E=Pg;break;case Uh:E=Hg;break;case"scroll":E=_g;break;case"wheel":E=Qg;break;case"copy":case"cut":case"paste":E=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Vd}var S=(t&4)!==0,T=!S&&e==="scroll",m=S?x!==null?x+"Capture":null:x;S=[];for(var p=h,w;p!==null;){w=p;var $=w.stateNode;if(w.tag===5&&$!==null&&(w=$,m!==null&&($=cs(p,m),$!=null&&S.push(gs(p,$,w)))),T)break;p=p.return}0<S.length&&(x=new E(x,b,null,n,g),v.push({event:x,listeners:S}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",x&&n!==nc&&(b=n.relatedTarget||n.fromElement)&&(Gn(b)||b[nn]))break e;if((E||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,E?(b=n.relatedTarget||n.toElement,E=h,b=b?Gn(b):null,b!==null&&(T=mr(b),b!==T||b.tag!==5&&b.tag!==6)&&(b=null)):(E=null,b=h),E!==b)){if(S=Wd,$="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Vd,$="onPointerLeave",m="onPointerEnter",p="pointer"),T=E==null?x:Wr(E),w=b==null?x:Wr(b),x=new S($,p+"leave",E,n,g),x.target=T,x.relatedTarget=w,$=null,Gn(g)===h&&(S=new S(m,p+"enter",b,n,g),S.target=w,S.relatedTarget=T,$=S),T=$,E&&b)t:{for(S=E,m=b,p=0,w=S;w;w=br(w))p++;for(w=0,$=m;$;$=br($))w++;for(;0<p-w;)S=br(S),p--;for(;0<w-p;)m=br(m),w--;for(;p--;){if(S===m||m!==null&&S===m.alternate)break t;S=br(S),m=br(m)}S=null}else S=null;E!==null&&tf(v,x,E,S,!1),b!==null&&T!==null&&tf(v,T,b,S,!0)}}e:{if(x=h?Wr(h):window,E=x.nodeName&&x.nodeName.toLowerCase(),E==="select"||E==="input"&&x.type==="file")var N=qg;else if(Yd(x))if(Dh)N=ny;else{N=ey;var P=Mg}else(E=x.nodeName)&&E.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(N=ty);if(N&&(N=N(e,h))){Th(v,N,n,g);break e}P&&P(e,x,h),e==="focusout"&&(P=x._wrapperState)&&P.controlled&&x.type==="number"&&Xa(x,"number",x.value)}switch(P=h?Wr(h):window,e){case"focusin":(Yd(P)||P.contentEditable==="true")&&(Br=P,cc=h,ts=null);break;case"focusout":ts=cc=Br=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,qd(v,n,g);break;case"selectionchange":if(sy)break;case"keydown":case"keyup":qd(v,n,g)}var z;if(lu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Fr?Nh(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ph&&n.locale!=="ko"&&(Fr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Fr&&(z=Lh()):(xn=g,iu="value"in xn?xn.value:xn.textContent,Fr=!0)),P=Fo(h,R),0<P.length&&(R=new Hd(R,e,null,n,g),v.push({event:R,listeners:P}),z?R.data=z:(z=zh(n),z!==null&&(R.data=z)))),(z=Yg?Zg(e,n):Jg(e,n))&&(h=Fo(h,"onBeforeInput"),0<h.length&&(g=new Hd("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:h}),g.data=z))}Hh(v,t)})}function gs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=cs(e,n),s!=null&&r.unshift(gs(e,s,i)),s=cs(e,t),s!=null&&r.push(gs(e,s,i))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tf(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,h=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&h!==null&&(a=h,i?(c=cs(n,s),c!=null&&l.unshift(gs(n,c,a))):i||(c=cs(n,s),c!=null&&l.push(gs(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var cy=/\r\n?/g,uy=/\u0000|\uFFFD/g;function nf(e){return(typeof e=="string"?e:""+e).replace(cy,`
`).replace(uy,"")}function ro(e,t,n){if(t=nf(t),nf(e)!==t&&n)throw Error(D(425))}function Bo(){}var dc=null,fc=null;function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(e){return rf.resolve(null).then(e).catch(py)}:hc;function py(e){setTimeout(function(){throw e})}function da(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fs(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+yi,ys="__reactProps$"+yi,nn="__reactContainer$"+yi,mc="__reactEvents$"+yi,hy="__reactListeners$"+yi,my="__reactHandles$"+yi;function Gn(e){var t=e[Wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sf(e);e!==null;){if(n=e[Wt])return n;e=sf(e)}return t}e=n,n=e.parentNode}return null}function Os(e){return e=e[Wt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function gl(e){return e[ys]||null}var gc=[],Hr=-1;function Rn(e){return{current:e}}function de(e){0>Hr||(e.current=gc[Hr],gc[Hr]=null,Hr--)}function ce(e,t){Hr++,gc[Hr]=e.current,e.current=t}var Dn={},Ze=Rn(Dn),rt=Rn(!1),ar=Dn;function ri(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Uo(){de(rt),de(Ze)}function of(e,t,n){if(Ze.current!==Dn)throw Error(D(168));ce(Ze,t),ce(rt,n)}function Qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,M1(e)||"Unknown",i));return ve({},n,r)}function Wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,ar=Ze.current,ce(Ze,e),ce(rt,rt.current),!0}function lf(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Qh(e,t,ar),r.__reactInternalMemoizedMergedChildContext=e,de(rt),de(Ze),ce(Ze,e)):de(rt),ce(rt,n)}var Gt=null,yl=!1,fa=!1;function Kh(e){Gt===null?Gt=[e]:Gt.push(e)}function gy(e){yl=!0,Kh(e)}function In(){if(!fa&&Gt!==null){fa=!0;var e=0,t=se;try{var n=Gt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,yl=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),yh(eu,In),i}finally{se=t,fa=!1}}return null}var Vr=[],Qr=0,Ho=null,Vo=0,xt=[],St=0,cr=null,Xt=1,qt="";function Kn(e,t){Vr[Qr++]=Vo,Vr[Qr++]=Ho,Ho=e,Vo=t}function Yh(e,t,n){xt[St++]=Xt,xt[St++]=qt,xt[St++]=cr,cr=e;var r=Xt;e=qt;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Xt=1<<32-Dt(t)+i|n<<i|r,qt=s+e}else Xt=1<<s|n<<i|r,qt=e}function cu(e){e.return!==null&&(Kn(e,1),Yh(e,1,0))}function uu(e){for(;e===Ho;)Ho=Vr[--Qr],Vr[Qr]=null,Vo=Vr[--Qr],Vr[Qr]=null;for(;e===cr;)cr=xt[--St],xt[St]=null,qt=xt[--St],xt[St]=null,Xt=xt[--St],xt[St]=null}var ct=null,at=null,me=!1,Pt=null;function Zh(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function af(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,at=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:Xt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,at=null,!0):!1;default:return!1}}function yc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vc(e){if(me){var t=at;if(t){var n=t;if(!af(e,t)){if(yc(e))throw Error(D(418));t=kn(n.nextSibling);var r=ct;t&&af(e,t)?Zh(r,n):(e.flags=e.flags&-4097|2,me=!1,ct=e)}}else{if(yc(e))throw Error(D(418));e.flags=e.flags&-4097|2,me=!1,ct=e}}}function cf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function io(e){if(e!==ct)return!1;if(!me)return cf(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pc(e.type,e.memoizedProps)),t&&(t=at)){if(yc(e))throw Jh(),Error(D(418));for(;t;)Zh(e,t),t=kn(t.nextSibling)}if(cf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=ct?kn(e.stateNode.nextSibling):null;return!0}function Jh(){for(var e=at;e;)e=kn(e.nextSibling)}function ii(){at=ct=null,me=!1}function du(e){Pt===null?Pt=[e]:Pt.push(e)}var yy=on.ReactCurrentBatchConfig;function Ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uf(e){var t=e._init;return t(e._payload)}function Gh(e){function t(m,p){if(e){var w=m.deletions;w===null?(m.deletions=[p],m.flags|=16):w.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=zn(m,p),m.index=0,m.sibling=null,m}function s(m,p,w){return m.index=w,e?(w=m.alternate,w!==null?(w=w.index,w<p?(m.flags|=2,p):w):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,w,$){return p===null||p.tag!==6?(p=wa(w,m.mode,$),p.return=m,p):(p=i(p,w),p.return=m,p)}function c(m,p,w,$){var N=w.type;return N===Ar?g(m,p,w.props.children,$,w.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mn&&uf(N)===p.type)?($=i(p,w.props),$.ref=Ri(m,p,w),$.return=m,$):($=Lo(w.type,w.key,w.props,null,m.mode,$),$.ref=Ri(m,p,w),$.return=m,$)}function h(m,p,w,$){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=xa(w,m.mode,$),p.return=m,p):(p=i(p,w.children||[]),p.return=m,p)}function g(m,p,w,$,N){return p===null||p.tag!==7?(p=or(w,m.mode,$,N),p.return=m,p):(p=i(p,w),p.return=m,p)}function v(m,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wa(""+p,m.mode,w),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zs:return w=Lo(p.type,p.key,p.props,null,m.mode,w),w.ref=Ri(m,null,p),w.return=m,w;case Ir:return p=xa(p,m.mode,w),p.return=m,p;case mn:var $=p._init;return v(m,$(p._payload),w)}if(Yi(p)||zi(p))return p=or(p,m.mode,w,null),p.return=m,p;so(m,p)}return null}function x(m,p,w,$){var N=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return N!==null?null:a(m,p,""+w,$);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Zs:return w.key===N?c(m,p,w,$):null;case Ir:return w.key===N?h(m,p,w,$):null;case mn:return N=w._init,x(m,p,N(w._payload),$)}if(Yi(w)||zi(w))return N!==null?null:g(m,p,w,$,null);so(m,w)}return null}function E(m,p,w,$,N){if(typeof $=="string"&&$!==""||typeof $=="number")return m=m.get(w)||null,a(p,m,""+$,N);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Zs:return m=m.get($.key===null?w:$.key)||null,c(p,m,$,N);case Ir:return m=m.get($.key===null?w:$.key)||null,h(p,m,$,N);case mn:var P=$._init;return E(m,p,w,P($._payload),N)}if(Yi($)||zi($))return m=m.get(w)||null,g(p,m,$,N,null);so(p,$)}return null}function b(m,p,w,$){for(var N=null,P=null,z=p,R=p=0,I=null;z!==null&&R<w.length;R++){z.index>R?(I=z,z=null):I=z.sibling;var U=x(m,z,w[R],$);if(U===null){z===null&&(z=I);break}e&&z&&U.alternate===null&&t(m,z),p=s(U,p,R),P===null?N=U:P.sibling=U,P=U,z=I}if(R===w.length)return n(m,z),me&&Kn(m,R),N;if(z===null){for(;R<w.length;R++)z=v(m,w[R],$),z!==null&&(p=s(z,p,R),P===null?N=z:P.sibling=z,P=z);return me&&Kn(m,R),N}for(z=r(m,z);R<w.length;R++)I=E(z,m,R,w[R],$),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?R:I.key),p=s(I,p,R),P===null?N=I:P.sibling=I,P=I);return e&&z.forEach(function(re){return t(m,re)}),me&&Kn(m,R),N}function S(m,p,w,$){var N=zi(w);if(typeof N!="function")throw Error(D(150));if(w=N.call(w),w==null)throw Error(D(151));for(var P=N=null,z=p,R=p=0,I=null,U=w.next();z!==null&&!U.done;R++,U=w.next()){z.index>R?(I=z,z=null):I=z.sibling;var re=x(m,z,U.value,$);if(re===null){z===null&&(z=I);break}e&&z&&re.alternate===null&&t(m,z),p=s(re,p,R),P===null?N=re:P.sibling=re,P=re,z=I}if(U.done)return n(m,z),me&&Kn(m,R),N;if(z===null){for(;!U.done;R++,U=w.next())U=v(m,U.value,$),U!==null&&(p=s(U,p,R),P===null?N=U:P.sibling=U,P=U);return me&&Kn(m,R),N}for(z=r(m,z);!U.done;R++,U=w.next())U=E(z,m,R,U.value,$),U!==null&&(e&&U.alternate!==null&&z.delete(U.key===null?R:U.key),p=s(U,p,R),P===null?N=U:P.sibling=U,P=U);return e&&z.forEach(function(We){return t(m,We)}),me&&Kn(m,R),N}function T(m,p,w,$){if(typeof w=="object"&&w!==null&&w.type===Ar&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Zs:e:{for(var N=w.key,P=p;P!==null;){if(P.key===N){if(N=w.type,N===Ar){if(P.tag===7){n(m,P.sibling),p=i(P,w.props.children),p.return=m,m=p;break e}}else if(P.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mn&&uf(N)===P.type){n(m,P.sibling),p=i(P,w.props),p.ref=Ri(m,P,w),p.return=m,m=p;break e}n(m,P);break}else t(m,P);P=P.sibling}w.type===Ar?(p=or(w.props.children,m.mode,$,w.key),p.return=m,m=p):($=Lo(w.type,w.key,w.props,null,m.mode,$),$.ref=Ri(m,p,w),$.return=m,m=$)}return l(m);case Ir:e:{for(P=w.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(m,p.sibling),p=i(p,w.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=xa(w,m.mode,$),p.return=m,m=p}return l(m);case mn:return P=w._init,T(m,p,P(w._payload),$)}if(Yi(w))return b(m,p,w,$);if(zi(w))return S(m,p,w,$);so(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,w),p.return=m,m=p):(n(m,p),p=wa(w,m.mode,$),p.return=m,m=p),l(m)):n(m,p)}return T}var si=Gh(!0),Xh=Gh(!1),Qo=Rn(null),Ko=null,Kr=null,fu=null;function pu(){fu=Kr=Ko=null}function hu(e){var t=Qo.current;de(Qo),e._currentValue=t}function wc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){Ko=e,fu=Kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},Kr===null){if(Ko===null)throw Error(D(308));Kr=e,Ko.dependencies={lanes:0,firstContext:e}}else Kr=Kr.next=e;return t}var Xn=null;function mu(e){Xn===null?Xn=[e]:Xn.push(e)}function qh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mu(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,mu(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}function df(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;gn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,h=c.next;c.next=null,l===null?s=h:l.next=h,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=h:a.next=h,g.lastBaseUpdate=c))}if(s!==null){var v=i.baseState;l=0,g=h=c=null,a=s;do{var x=a.lane,E=a.eventTime;if((r&x)===x){g!==null&&(g=g.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,S=a;switch(x=t,E=n,S.tag){case 1:if(b=S.payload,typeof b=="function"){v=b.call(E,v,x);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,x=typeof b=="function"?b.call(E,v,x):b,x==null)break e;v=ve({},v,x);break e;case 2:gn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[a]:x.push(a))}else E={eventTime:E,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(h=g=E,c=v):g=g.next=E,l|=x;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;x=a,a=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(g===null&&(c=v),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);dr|=l,e.lanes=l,e.memoizedState=v}}function ff(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var js={},Vt=Rn(js),vs=Rn(js),ws=Rn(js);function qn(e){if(e===js)throw Error(D(174));return e}function yu(e,t){switch(ce(ws,t),ce(vs,e),ce(Vt,js),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ma(t,e)}de(Vt),ce(Vt,t)}function oi(){de(Vt),de(vs),de(ws)}function e0(e){qn(ws.current);var t=qn(Vt.current),n=Ma(t,e.type);t!==n&&(ce(vs,e),ce(Vt,n))}function vu(e){vs.current===e&&(de(Vt),de(vs))}var ge=Rn(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function wu(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var Co=on.ReactCurrentDispatcher,ha=on.ReactCurrentBatchConfig,ur=0,ye=null,Ne=null,Te=null,Jo=!1,ns=!1,xs=0,vy=0;function Ve(){throw Error(D(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Su(e,t,n,r,i,s){if(ur=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?by:Cy,e=n(r,i),ns){s=0;do{if(ns=!1,xs=0,25<=s)throw Error(D(301));s+=1,Te=Ne=null,t.updateQueue=null,Co.current=_y,e=n(r,i)}while(ns)}if(Co.current=Go,t=Ne!==null&&Ne.next!==null,ur=0,Te=Ne=ye=null,Jo=!1,t)throw Error(D(300));return e}function bu(){var e=xs!==0;return xs=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ye.memoizedState=Te=e:Te=Te.next=e,Te}function $t(){if(Ne===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Te===null?ye.memoizedState:Te.next;if(t!==null)Te=t,Ne=e;else{if(e===null)throw Error(D(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Te===null?ye.memoizedState=Te=e:Te=Te.next=e}return Te}function Ss(e,t){return typeof t=="function"?t(e):t}function ma(e){var t=$t(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,c=null,h=s;do{var g=h.lane;if((ur&g)===g)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var v={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(a=c=v,l=r):c=c.next=v,ye.lanes|=g,dr|=g}h=h.next}while(h!==null&&h!==s);c===null?l=r:c.next=a,jt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ye.lanes|=s,dr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ga(e){var t=$t(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);jt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function t0(){}function n0(e,t){var n=ye,r=$t(),i=t(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,Cu(s0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,bs(9,i0.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(D(349));ur&30||r0(n,t,i)}return i}function r0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function i0(e,t,n,r){t.value=n,t.getSnapshot=r,o0(t)&&l0(e)}function s0(e,t,n){return n(function(){o0(t)&&l0(e)})}function o0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function l0(e){var t=rn(e,1);t!==null&&Ot(t,e,1,-1)}function pf(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:e},t.queue=e,e=e.dispatch=Sy.bind(null,ye,e),[t.memoizedState,e]}function bs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function a0(){return $t().memoizedState}function _o(e,t,n,r){var i=At();ye.flags|=e,i.memoizedState=bs(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var l=Ne.memoizedState;if(s=l.destroy,r!==null&&xu(r,l.deps)){i.memoizedState=bs(t,n,s,r);return}}ye.flags|=e,i.memoizedState=bs(1|t,n,s,r)}function hf(e,t){return _o(8390656,8,e,t)}function Cu(e,t){return vl(2048,8,e,t)}function c0(e,t){return vl(4,2,e,t)}function u0(e,t){return vl(4,4,e,t)}function d0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function f0(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,d0.bind(null,t,e),n)}function _u(){}function p0(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function h0(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function m0(e,t,n){return ur&21?(jt(n,t)||(n=xh(),ye.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function wy(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=ha.transition;ha.transition={};try{e(!1),t()}finally{se=n,ha.transition=r}}function g0(){return $t().memoizedState}function xy(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y0(e))v0(t,n);else if(n=qh(e,t,n,r),n!==null){var i=Ge();Ot(n,e,r,i),w0(n,t,r)}}function Sy(e,t,n){var r=Nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y0(e))v0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,jt(a,l)){var c=t.interleaved;c===null?(i.next=i,mu(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=qh(e,t,i,r),n!==null&&(i=Ge(),Ot(n,e,r,i),w0(n,t,r))}}function y0(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function v0(e,t){ns=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function w0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}var Go={readContext:_t,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},by={readContext:_t,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:hf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_o(4194308,4,d0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xy.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:pf,useDebugValue:_u,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=pf(!1),t=e[0];return e=wy.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=At();if(me){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Oe===null)throw Error(D(349));ur&30||r0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,hf(s0.bind(null,r,s,e),[e]),r.flags|=2048,bs(9,i0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=At(),t=Oe.identifierPrefix;if(me){var n=qt,r=Xt;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cy={readContext:_t,useCallback:p0,useContext:_t,useEffect:Cu,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:h0,useReducer:ma,useRef:a0,useState:function(){return ma(Ss)},useDebugValue:_u,useDeferredValue:function(e){var t=$t();return m0(t,Ne.memoizedState,e)},useTransition:function(){var e=ma(Ss)[0],t=$t().memoizedState;return[e,t]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1},_y={readContext:_t,useCallback:p0,useContext:_t,useEffect:Cu,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:h0,useReducer:ga,useRef:a0,useState:function(){return ga(Ss)},useDebugValue:_u,useDeferredValue:function(e){var t=$t();return Ne===null?t.memoizedState=e:m0(t,Ne.memoizedState,e)},useTransition:function(){var e=ga(Ss)[0],t=$t().memoizedState;return[e,t]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wl={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=Nn(e),s=en(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ln(e,s,i),t!==null&&(Ot(t,e,i,r),bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=Nn(e),s=en(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ln(e,s,i),t!==null&&(Ot(t,e,i,r),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=Nn(e),i=en(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ln(e,i,r),t!==null&&(Ot(t,e,r,n),bo(t,e,r))}};function mf(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!hs(n,r)||!hs(i,s):!0}function x0(e,t,n){var r=!1,i=Dn,s=t.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=it(t)?ar:Ze.current,r=t.contextTypes,s=(r=r!=null)?ri(e,i):Dn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function gf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function Sc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},gu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=it(t)?ar:Ze.current,i.context=ri(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wl.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function li(e,t){try{var n="",r=t;do n+=q1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ya(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function S0(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qo||(qo=!0,Tc=r),bc(e,t)},n}function b0(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bc(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function yf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $y;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fy.bind(null,e,t,n),t.then(e,e))}function vf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,Ln(n,t,1))),n.lanes|=1),e)}var Ey=on.ReactCurrentOwner,nt=!1;function Je(e,t,n,r){t.child=e===null?Xh(t,null,n,r):si(t,e.child,n,r)}function xf(e,t,n,r,i){n=n.render;var s=t.ref;return Mr(t,i),r=Su(e,t,n,r,s,i),n=bu(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(me&&n&&cu(t),t.flags|=1,Je(e,t,r,i),t.child)}function Sf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Tu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,C0(e,t,s,r,i)):(e=Lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(l,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=zn(s,r),e.ref=t.ref,e.return=t,t.child=e}function C0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(hs(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Cc(e,t,n,r,i)}function _0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Zr,lt),lt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Zr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Zr,lt),lt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ce(Zr,lt),lt|=r;return Je(e,t,i,n),t.child}function $0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cc(e,t,n,r,i){var s=it(n)?ar:Ze.current;return s=ri(t,s),Mr(t,i),n=Su(e,t,n,r,s,i),r=bu(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(me&&r&&cu(t),t.flags|=1,Je(e,t,n,i),t.child)}function bf(e,t,n,r,i){if(it(n)){var s=!0;Wo(t)}else s=!1;if(Mr(t,i),t.stateNode===null)$o(e,t),x0(t,n,r),Sc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=_t(h):(h=it(n)?ar:Ze.current,h=ri(t,h));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==h)&&gf(t,l,r,h),gn=!1;var x=t.memoizedState;l.state=x,Yo(t,r,l,i),c=t.memoizedState,a!==r||x!==c||rt.current||gn?(typeof g=="function"&&(xc(t,n,g,r),c=t.memoizedState),(a=gn||mf(t,n,a,r,x,c,h))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=h,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Mh(e,t),a=t.memoizedProps,h=t.type===t.elementType?a:kt(t.type,a),l.props=h,v=t.pendingProps,x=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=_t(c):(c=it(n)?ar:Ze.current,c=ri(t,c));var E=n.getDerivedStateFromProps;(g=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||x!==c)&&gf(t,l,r,c),gn=!1,x=t.memoizedState,l.state=x,Yo(t,r,l,i);var b=t.memoizedState;a!==v||x!==b||rt.current||gn?(typeof E=="function"&&(xc(t,n,E,r),b=t.memoizedState),(h=gn||mf(t,n,h,r,x,b,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=h):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return _c(e,t,n,r,s,i)}function _c(e,t,n,r,i,s){$0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&lf(t,n,!1),sn(e,t,s);r=t.stateNode,Ey.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=si(t,e.child,null,s),t.child=si(t,null,a,s)):Je(e,t,a,s),t.memoizedState=r.state,i&&lf(t,n,!0),t.child}function E0(e){var t=e.stateNode;t.pendingContext?of(e,t.pendingContext,t.pendingContext!==t.context):t.context&&of(e,t.context,!1),yu(e,t.containerInfo)}function Cf(e,t,n,r,i){return ii(),du(i),t.flags|=256,Je(e,t,n,r),t.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function k0(e,t,n){var r=t.pendingProps,i=ge.current,s=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ge,i&1),e===null)return vc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=bl(l,r,0,null),e=or(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ec(n),t.memoizedState=$c,e):$u(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ky(e,t,l,r,a,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=zn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zn(a,s):(s=or(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Ec(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=$c,r}return s=e.child,e=s.sibling,r=zn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $u(e,t){return t=bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&du(r),si(t,e.child,null,n),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ky(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=ya(Error(D(422))),oo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=bl({mode:"visible",children:r.children},i,0,null),s=or(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&si(t,e.child,null,l),t.child.memoizedState=Ec(l),t.memoizedState=$c,s);if(!(t.mode&1))return oo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=ya(s,r,void 0),oo(e,t,l,r)}if(a=(l&e.childLanes)!==0,nt||a){if(r=Oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(e,i),Ot(r,e,i,-1))}return zu(),r=ya(Error(D(421))),oo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=By.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,at=kn(i.nextSibling),ct=t,me=!0,Pt=null,e!==null&&(xt[St++]=Xt,xt[St++]=qt,xt[St++]=cr,Xt=e.id,qt=e.overflow,cr=t),t=$u(t,r.children),t.flags|=4096,t)}function _f(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wc(e.return,t,n)}function va(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function L0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Je(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_f(e,n,t);else if(e.tag===19)_f(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ge,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),va(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}va(t,!0,n,null,s);break;case"together":va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ly(e,t,n){switch(t.tag){case 3:E0(t),ii();break;case 5:e0(t);break;case 1:it(t.type)&&Wo(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(Qo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?k0(e,t,n):(ce(ge,ge.current&1),e=sn(e,t,n),e!==null?e.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return L0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,_0(e,t,n)}return sn(e,t,n)}var P0,kc,N0,z0;P0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};N0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qn(Vt.current);var s=null;switch(n){case"input":i=Ja(e,i),r=Ja(e,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=qa(e,i),r=qa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}ec(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ls.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var c=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==a&&(c!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ls.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&ue("scroll",e),s||a===c||(s=[])):(s=s||[]).push(h,c))}n&&(s=s||[]).push("style",n);var h=s;(t.updateQueue=h)&&(t.flags|=4)}};z0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ii(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Py(e,t,n){var r=t.pendingProps;switch(uu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return it(t.type)&&Uo(),Qe(t),null;case 3:return r=t.stateNode,oi(),de(rt),de(Ze),wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(jc(Pt),Pt=null))),kc(e,t),Qe(t),null;case 5:vu(t);var i=qn(ws.current);if(n=t.type,e!==null&&t.stateNode!=null)N0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Qe(t),null}if(e=qn(Vt.current),io(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Wt]=t,r[ys]=s,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<Ji.length;i++)ue(Ji[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Td(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Od(r,s),ue("invalid",r)}ec(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),i=["children",""+a]):ls.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ue("scroll",r)}switch(n){case"input":Js(r),Dd(r,s,!0);break;case"textarea":Js(r),jd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Wt]=t,e[ys]=r,P0(e,t,!1,!1),t.stateNode=e;e:{switch(l=tc(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ji.length;i++)ue(Ji[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":Td(e,r),i=Ja(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Od(e,r),i=qa(e,r),ue("invalid",e);break;default:i=r}ec(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?ah(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&oh(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&as(e,c):typeof c=="number"&&as(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ls.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ue("scroll",e):c!=null&&Jc(e,s,c,l))}switch(n){case"input":Js(e),Dd(e,r,!1);break;case"textarea":Js(e),jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Jr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)z0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=qn(ws.current),qn(Vt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[Wt]=t,(s=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=t,t.stateNode=r}return Qe(t),null;case 13:if(de(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&at!==null&&t.mode&1&&!(t.flags&128))Jh(),ii(),t.flags|=98560,s=!1;else if(s=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(D(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Wt]=t}else ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),s=!1}else Pt!==null&&(jc(Pt),Pt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?ze===0&&(ze=3):zu())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return oi(),kc(e,t),e===null&&ms(t.stateNode.containerInfo),Qe(t),null;case 10:return hu(t.type._context),Qe(t),null;case 17:return it(t.type)&&Uo(),Qe(t),null;case 19:if(de(ge),s=t.memoizedState,s===null)return Qe(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Ii(s,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Zo(e),l!==null){for(t.flags|=128,Ii(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),t.child}e=e.sibling}s.tail!==null&&_e()>ai&&(t.flags|=128,r=!0,Ii(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!me)return Qe(t),null}else 2*_e()-s.renderingStartTime>ai&&n!==1073741824&&(t.flags|=128,r=!0,Ii(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_e(),t.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return Nu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Ny(e,t){switch(uu(t),t.tag){case 1:return it(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oi(),de(rt),de(Ze),wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vu(t),null;case 13:if(de(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ge),null;case 4:return oi(),null;case 10:return hu(t.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var lo=!1,Ye=!1,zy=typeof WeakSet=="function"?WeakSet:Set,A=null;function Yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Lc(e,t,n){try{n()}catch(r){xe(e,t,r)}}var $f=!1;function Ty(e,t){if(dc=Io,e=Rh(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,h=0,g=0,v=e,x=null;t:for(;;){for(var E;v!==n||i!==0&&v.nodeType!==3||(a=l+i),v!==s||r!==0&&v.nodeType!==3||(c=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(E=v.firstChild)!==null;)x=v,v=E;for(;;){if(v===e)break t;if(x===n&&++h===i&&(a=l),x===s&&++g===r&&(c=l),(E=v.nextSibling)!==null)break;v=x,x=v.parentNode}v=E}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fc={focusedElem:e,selectionRange:n},Io=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var S=b.memoizedProps,T=b.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:kt(t.type,S),T);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch($){xe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return b=$f,$f=!1,b}function rs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lc(t,n,s)}i=i.next}while(i!==r)}}function xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function T0(e){var t=e.alternate;t!==null&&(e.alternate=null,T0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wt],delete t[ys],delete t[mc],delete t[hy],delete t[my])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function D0(e){return e.tag===5||e.tag===3||e.tag===4}function Ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}function zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zc(e,t,n),e=e.sibling;e!==null;)zc(e,t,n),e=e.sibling}var Ae=null,Lt=!1;function pn(e,t,n){for(n=n.child;n!==null;)O0(e,t,n),n=n.sibling}function O0(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:Ye||Yr(n,t);case 6:var r=Ae,i=Lt;Ae=null,pn(e,t,n),Ae=r,Lt=i,Ae!==null&&(Lt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(Lt?(e=Ae,n=n.stateNode,e.nodeType===8?da(e.parentNode,n):e.nodeType===1&&da(e,n),fs(e)):da(Ae,n.stateNode));break;case 4:r=Ae,i=Lt,Ae=n.stateNode.containerInfo,Lt=!0,pn(e,t,n),Ae=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Lc(n,t,l),i=i.next}while(i!==r)}pn(e,t,n);break;case 1:if(!Ye&&(Yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,pn(e,t,n),Ye=r):pn(e,t,n);break;default:pn(e,t,n)}}function kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zy),t.forEach(function(r){var i=Uy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,Lt=!1;break e;case 3:Ae=a.stateNode.containerInfo,Lt=!0;break e;case 4:Ae=a.stateNode.containerInfo,Lt=!0;break e}a=a.return}if(Ae===null)throw Error(D(160));O0(s,l,i),Ae=null,Lt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){xe(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)j0(t,e),t=t.sibling}function j0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Rt(e),r&4){try{rs(3,e,e.return),xl(3,e)}catch(S){xe(e,e.return,S)}try{rs(5,e,e.return)}catch(S){xe(e,e.return,S)}}break;case 1:Et(t,e),Rt(e),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(Et(t,e),Rt(e),r&512&&n!==null&&Yr(n,n.return),e.flags&32){var i=e.stateNode;try{as(i,"")}catch(S){xe(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rh(i,s),tc(a,l);var h=tc(a,s);for(l=0;l<c.length;l+=2){var g=c[l],v=c[l+1];g==="style"?ah(i,v):g==="dangerouslySetInnerHTML"?oh(i,v):g==="children"?as(i,v):Jc(i,g,v,h)}switch(a){case"input":Ga(i,s);break;case"textarea":ih(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Jr(i,!!s.multiple,E,!1):x!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ys]=s}catch(S){xe(e,e.return,S)}}break;case 6:if(Et(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){xe(e,e.return,S)}}break;case 3:if(Et(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fs(t.containerInfo)}catch(S){xe(e,e.return,S)}break;case 4:Et(t,e),Rt(e);break;case 13:Et(t,e),Rt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=_e())),r&4&&kf(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(h=Ye)||g,Et(t,e),Ye=h):Et(t,e),Rt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!g&&e.mode&1)for(A=e,g=e.child;g!==null;){for(v=A=g;A!==null;){switch(x=A,E=x.child,x.tag){case 0:case 11:case 14:case 15:rs(4,x,x.return);break;case 1:Yr(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(S){xe(r,n,S)}}break;case 5:Yr(x,x.return);break;case 22:if(x.memoizedState!==null){Pf(v);continue}}E!==null?(E.return=x,A=E):Pf(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=v.stateNode,c=v.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=lh("display",l))}catch(S){xe(e,e.return,S)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=h?"":v.memoizedProps}catch(S){xe(e,e.return,S)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Et(t,e),Rt(e),r&4&&kf(e);break;case 21:break;default:Et(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(D0(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(as(i,""),r.flags&=-33);var s=Ef(e);zc(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ef(e);Nc(e,a,l);break;default:throw Error(D(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dy(e,t,n){A=e,R0(e)}function R0(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||lo;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ye;a=lo;var h=Ye;if(lo=l,(Ye=c)&&!h)for(A=i;A!==null;)l=A,c=l.child,l.tag===22&&l.memoizedState!==null?Nf(i):c!==null?(c.return=l,A=c):Nf(i);for(;s!==null;)A=s,R0(s),s=s.sibling;A=i,lo=a,Ye=h}Lf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Lf(e)}}function Lf(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ff(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ff(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&fs(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ye||t.flags&512&&Pc(t)}catch(x){xe(t,t.return,x)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Pf(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Nf(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xl(4,t)}catch(c){xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){xe(t,i,c)}}var s=t.return;try{Pc(t)}catch(c){xe(t,s,c)}break;case 5:var l=t.return;try{Pc(t)}catch(c){xe(t,l,c)}}}catch(c){xe(t,t.return,c)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var Oy=Math.ceil,Xo=on.ReactCurrentDispatcher,Eu=on.ReactCurrentOwner,Ct=on.ReactCurrentBatchConfig,G=0,Oe=null,Ee=null,Be=0,lt=0,Zr=Rn(0),ze=0,Cs=null,dr=0,Sl=0,ku=0,is=null,Me=null,Lu=0,ai=1/0,Jt=null,qo=!1,Tc=null,Pn=null,ao=!1,Sn=null,Mo=0,ss=0,Dc=null,Eo=-1,ko=0;function Ge(){return G&6?_e():Eo!==-1?Eo:Eo=_e()}function Nn(e){return e.mode&1?G&2&&Be!==0?Be&-Be:yy.transition!==null?(ko===0&&(ko=xh()),ko):(e=se,e!==0||(e=window.event,e=e===void 0?16:kh(e.type)),e):1}function Ot(e,t,n,r){if(50<ss)throw ss=0,Dc=null,Error(D(185));Ts(e,n,r),(!(G&2)||e!==Oe)&&(e===Oe&&(!(G&2)&&(Sl|=n),ze===4&&vn(e,Be)),st(e,r),n===1&&G===0&&!(t.mode&1)&&(ai=_e()+500,yl&&In()))}function st(e,t){var n=e.callbackNode;yg(e,t);var r=Ro(e,e===Oe?Be:0);if(r===0)n!==null&&Ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ad(n),t===1)e.tag===0?gy(zf.bind(null,e)):Kh(zf.bind(null,e)),fy(function(){!(G&6)&&In()}),n=null;else{switch(Sh(r)){case 1:n=eu;break;case 4:n=vh;break;case 16:n=jo;break;case 536870912:n=wh;break;default:n=jo}n=V0(n,I0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function I0(e,t){if(Eo=-1,ko=0,G&6)throw Error(D(327));var n=e.callbackNode;if(ei()&&e.callbackNode!==n)return null;var r=Ro(e,e===Oe?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var i=G;G|=2;var s=F0();(Oe!==e||Be!==t)&&(Jt=null,ai=_e()+500,sr(e,t));do try{Iy();break}catch(a){A0(e,a)}while(!0);pu(),Xo.current=s,G=i,Ee!==null?t=0:(Oe=null,Be=0,t=ze)}if(t!==0){if(t===2&&(i=oc(e),i!==0&&(r=i,t=Oc(e,i))),t===1)throw n=Cs,sr(e,0),vn(e,r),st(e,_e()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jy(i)&&(t=el(e,r),t===2&&(s=oc(e),s!==0&&(r=s,t=Oc(e,s))),t===1))throw n=Cs,sr(e,0),vn(e,r),st(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Yn(e,Me,Jt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Lu+500-_e(),10<t)){if(Ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hc(Yn.bind(null,e,Me,Jt),t);break}Yn(e,Me,Jt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Dt(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Oy(r/1960))-r,10<r){e.timeoutHandle=hc(Yn.bind(null,e,Me,Jt),r);break}Yn(e,Me,Jt);break;case 5:Yn(e,Me,Jt);break;default:throw Error(D(329))}}}return st(e,_e()),e.callbackNode===n?I0.bind(null,e):null}function Oc(e,t){var n=is;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=el(e,t),e!==2&&(t=Me,Me=n,t!==null&&jc(t)),e}function jc(e){Me===null?Me=e:Me.push.apply(Me,e)}function jy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~ku,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function zf(e){if(G&6)throw Error(D(327));ei();var t=Ro(e,0);if(!(t&1))return st(e,_e()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=oc(e);r!==0&&(t=r,n=Oc(e,r))}if(n===1)throw n=Cs,sr(e,0),vn(e,t),st(e,_e()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,Me,Jt),st(e,_e()),null}function Pu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(ai=_e()+500,yl&&In())}}function fr(e){Sn!==null&&Sn.tag===0&&!(G&6)&&ei();var t=G;G|=1;var n=Ct.transition,r=se;try{if(Ct.transition=null,se=1,e)return e()}finally{se=r,Ct.transition=n,G=t,!(G&6)&&In()}}function Nu(){lt=Zr.current,de(Zr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dy(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:oi(),de(rt),de(Ze),wu();break;case 5:vu(r);break;case 4:oi();break;case 13:de(ge);break;case 19:de(ge);break;case 10:hu(r.type._context);break;case 22:case 23:Nu()}n=n.return}if(Oe=e,Ee=e=zn(e.current,null),Be=lt=t,ze=0,Cs=null,ku=Sl=dr=0,Me=is=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Xn=null}return e}function A0(e,t){do{var n=Ee;try{if(pu(),Co.current=Go,Jo){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(ur=0,Te=Ne=ye=null,ns=!1,xs=0,Eu.current=null,n===null||n.return===null){ze=1,Cs=t,Ee=null;break}e:{var s=e,l=n.return,a=n,c=t;if(t=Be,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,g=a,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=vf(l);if(E!==null){E.flags&=-257,wf(E,l,a,s,t),E.mode&1&&yf(s,h,t),t=E,c=h;var b=t.updateQueue;if(b===null){var S=new Set;S.add(c),t.updateQueue=S}else b.add(c);break e}else{if(!(t&1)){yf(s,h,t),zu();break e}c=Error(D(426))}}else if(me&&a.mode&1){var T=vf(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),wf(T,l,a,s,t),du(li(c,a));break e}}s=c=li(c,a),ze!==4&&(ze=2),is===null?is=[s]:is.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=S0(s,c,t);df(s,m);break e;case 1:a=c;var p=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Pn===null||!Pn.has(w)))){s.flags|=65536,t&=-t,s.lanes|=t;var $=b0(s,a,t);df(s,$);break e}}s=s.return}while(s!==null)}U0(n)}catch(N){t=N,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function F0(){var e=Xo.current;return Xo.current=Go,e===null?Go:e}function zu(){(ze===0||ze===3||ze===2)&&(ze=4),Oe===null||!(dr&268435455)&&!(Sl&268435455)||vn(Oe,Be)}function el(e,t){var n=G;G|=2;var r=F0();(Oe!==e||Be!==t)&&(Jt=null,sr(e,t));do try{Ry();break}catch(i){A0(e,i)}while(!0);if(pu(),G=n,Xo.current=r,Ee!==null)throw Error(D(261));return Oe=null,Be=0,ze}function Ry(){for(;Ee!==null;)B0(Ee)}function Iy(){for(;Ee!==null&&!ag();)B0(Ee)}function B0(e){var t=H0(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?U0(e):Ee=t,Eu.current=null}function U0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ny(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ee=null;return}}else if(n=Py(n,t,lt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);ze===0&&(ze=5)}function Yn(e,t,n){var r=se,i=Ct.transition;try{Ct.transition=null,se=1,Ay(e,t,n,r)}finally{Ct.transition=i,se=r}return null}function Ay(e,t,n,r){do ei();while(Sn!==null);if(G&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(vg(e,s),e===Oe&&(Ee=Oe=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,V0(jo,function(){return ei(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var l=se;se=1;var a=G;G|=4,Eu.current=null,Ty(e,n),j0(n,e),iy(fc),Io=!!dc,fc=dc=null,e.current=n,Dy(n),cg(),G=a,se=l,Ct.transition=s}else e.current=n;if(ao&&(ao=!1,Sn=e,Mo=i),s=e.pendingLanes,s===0&&(Pn=null),fg(n.stateNode),st(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,e=Tc,Tc=null,e;return Mo&1&&e.tag!==0&&ei(),s=e.pendingLanes,s&1?e===Dc?ss++:(ss=0,Dc=e):ss=0,In(),null}function ei(){if(Sn!==null){var e=Sh(Mo),t=Ct.transition,n=se;try{if(Ct.transition=null,se=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Mo=0,G&6)throw Error(D(331));var i=G;for(G|=4,A=e.current;A!==null;){var s=A,l=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var h=a[c];for(A=h;A!==null;){var g=A;switch(g.tag){case 0:case 11:case 15:rs(8,g,s)}var v=g.child;if(v!==null)v.return=g,A=v;else for(;A!==null;){g=A;var x=g.sibling,E=g.return;if(T0(g),g===h){A=null;break}if(x!==null){x.return=E,A=x;break}A=E}}}var b=s.alternate;if(b!==null){var S=b.child;if(S!==null){b.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}A=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,A=l;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var p=e.current;for(A=p;A!==null;){l=A;var w=l.child;if(l.subtreeFlags&2064&&w!==null)w.return=l,A=w;else e:for(l=p;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(N){xe(a,a.return,N)}if(a===l){A=null;break e}var $=a.sibling;if($!==null){$.return=a.return,A=$;break e}A=a.return}}if(G=i,In(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(fl,e)}catch{}r=!0}return r}finally{se=n,Ct.transition=t}}return!1}function Tf(e,t,n){t=li(n,t),t=S0(e,t,1),e=Ln(e,t,1),t=Ge(),e!==null&&(Ts(e,1,t),st(e,t))}function xe(e,t,n){if(e.tag===3)Tf(e,e,n);else for(;t!==null;){if(t.tag===3){Tf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=li(n,e),e=b0(t,e,1),t=Ln(t,e,1),e=Ge(),t!==null&&(Ts(t,1,e),st(t,e));break}}t=t.return}}function Fy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Be&n)===n&&(ze===4||ze===3&&(Be&130023424)===Be&&500>_e()-Lu?sr(e,0):ku|=n),st(e,t)}function W0(e,t){t===0&&(e.mode&1?(t=qs,qs<<=1,!(qs&130023424)&&(qs=4194304)):t=1);var n=Ge();e=rn(e,t),e!==null&&(Ts(e,t,n),st(e,n))}function By(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),W0(e,n)}function Uy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),W0(e,n)}var H0;H0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,Ly(e,t,n);nt=!!(e.flags&131072)}else nt=!1,me&&t.flags&1048576&&Yh(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var i=ri(t,Ze.current);Mr(t,n),i=Su(null,t,r,e,i,n);var s=bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(s=!0,Wo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gu(t),i.updater=wl,t.stateNode=i,i._reactInternals=t,Sc(t,r,e,n),t=_c(null,t,r,!0,s,n)):(t.tag=0,me&&s&&cu(t),Je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hy(r),e=kt(r,e),i){case 0:t=Cc(null,t,r,e,n);break e;case 1:t=bf(null,t,r,e,n);break e;case 11:t=xf(null,t,r,e,n);break e;case 14:t=Sf(null,t,r,kt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Cc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),bf(e,t,r,i,n);case 3:e:{if(E0(t),e===null)throw Error(D(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Mh(e,t),Yo(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=li(Error(D(423)),t),t=Cf(e,t,r,n,i);break e}else if(r!==i){i=li(Error(D(424)),t),t=Cf(e,t,r,n,i);break e}else for(at=kn(t.stateNode.containerInfo.firstChild),ct=t,me=!0,Pt=null,n=Xh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===i){t=sn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return e0(t),e===null&&vc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,pc(r,i)?l=null:s!==null&&pc(r,s)&&(t.flags|=32),$0(e,t),Je(e,t,l,n),t.child;case 6:return e===null&&vc(t),null;case 13:return k0(e,t,n);case 4:return yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=si(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),xf(e,t,r,i,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,ce(Qo,r._currentValue),r._currentValue=l,s!==null)if(jt(s.value,l)){if(s.children===i.children&&!rt.current){t=sn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=en(-1,n&-n),c.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?c.next=c:(c.next=g.next,g.next=c),h.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),wc(s.return,n,t),a.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(D(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),wc(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=_t(i),r=r(i),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),Sf(e,t,r,i,n);case 15:return C0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),$o(e,t),t.tag=1,it(r)?(e=!0,Wo(t)):e=!1,Mr(t,n),x0(t,r,i),Sc(t,r,i,n),_c(null,t,r,!0,e,n);case 19:return L0(e,t,n);case 22:return _0(e,t,n)}throw Error(D(156,t.tag))};function V0(e,t){return yh(e,t)}function Wy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new Wy(e,t,n,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hy(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xc)return 11;if(e===qc)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")Tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ar:return or(n.children,i,s,t);case Gc:l=8,i|=8;break;case Qa:return e=bt(12,n,t,i|2),e.elementType=Qa,e.lanes=s,e;case Ka:return e=bt(13,n,t,i),e.elementType=Ka,e.lanes=s,e;case Ya:return e=bt(19,n,t,i),e.elementType=Ya,e.lanes=s,e;case eh:return bl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qp:l=10;break e;case Mp:l=9;break e;case Xc:l=11;break e;case qc:l=14;break e;case mn:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=bt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function or(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function bl(e,t,n,r){return e=bt(22,e,r,t),e.elementType=eh,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function xa(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Du(e,t,n,r,i,s,l,a,c){return e=new Vy(e,t,n,a,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=bt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(s),e}function Qy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Q0(e){if(!e)return Dn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(it(n))return Qh(e,n,t)}return t}function K0(e,t,n,r,i,s,l,a,c){return e=Du(n,r,!0,e,i,s,l,a,c),e.context=Q0(null),n=e.current,r=Ge(),i=Nn(n),s=en(r,i),s.callback=t??null,Ln(n,s,i),e.current.lanes=i,Ts(e,i,r),st(e,r),e}function Cl(e,t,n,r){var i=t.current,s=Ge(),l=Nn(i);return n=Q0(n),t.context===null?t.context=n:t.pendingContext=n,t=en(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ln(i,t,l),e!==null&&(Ot(e,i,l,s),bo(e,i,l)),l}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ou(e,t){Df(e,t),(e=e.alternate)&&Df(e,t)}function Ky(){return null}var Y0=typeof reportError=="function"?reportError:function(e){console.error(e)};function ju(e){this._internalRoot=e}_l.prototype.render=ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Cl(e,t,null,null)};_l.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Cl(null,e,null,null)}),t[nn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=_h();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Eh(e)}};function Ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Of(){}function Yy(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=tl(l);s.call(h)}}var l=K0(t,r,e,0,null,!1,!1,"",Of);return e._reactRootContainer=l,e[nn]=l.current,ms(e.nodeType===8?e.parentNode:e),fr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=tl(c);a.call(h)}}var c=Du(e,0,!1,null,null,!1,!1,"",Of);return e._reactRootContainer=c,e[nn]=c.current,ms(e.nodeType===8?e.parentNode:e),fr(function(){Cl(t,c,n,r)}),c}function El(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var c=tl(l);a.call(c)}}Cl(t,l,e,i)}else l=Yy(n,t,e,i,r);return tl(l)}bh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zi(t.pendingLanes);n!==0&&(tu(t,n|1),st(t,_e()),!(G&6)&&(ai=_e()+500,In()))}break;case 13:fr(function(){var r=rn(e,1);if(r!==null){var i=Ge();Ot(r,e,1,i)}}),Ou(e,1)}};nu=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ge();Ot(t,e,134217728,n)}Ou(e,134217728)}};Ch=function(e){if(e.tag===13){var t=Nn(e),n=rn(e,t);if(n!==null){var r=Ge();Ot(n,e,t,r)}Ou(e,t)}};_h=function(){return se};$h=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};rc=function(e,t,n){switch(t){case"input":if(Ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=gl(r);if(!i)throw Error(D(90));nh(r),Ga(r,i)}}}break;case"textarea":ih(e,n);break;case"select":t=n.value,t!=null&&Jr(e,!!n.multiple,t,!1)}};dh=Pu;fh=fr;var Zy={usingClientEntryPoint:!1,Events:[Os,Wr,gl,ch,uh,Pu]},Ai={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mh(e),e===null?null:e.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||Ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{fl=co.inject(Jy),Ht=co}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(t))throw Error(D(200));return Qy(e,t,null,n)};ft.createRoot=function(e,t){if(!Ru(e))throw Error(D(299));var n=!1,r="",i=Y0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Du(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,ms(e.nodeType===8?e.parentNode:e),new ju(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=mh(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return fr(e)};ft.hydrate=function(e,t,n){if(!$l(t))throw Error(D(200));return El(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!Ru(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=Y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=K0(t,null,e,1,n??null,i,!1,s,l),e[nn]=t.current,ms(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _l(t)};ft.render=function(e,t,n){if(!$l(t))throw Error(D(200));return El(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!$l(e))throw Error(D(40));return e._reactRootContainer?(fr(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};ft.unstable_batchedUpdates=Pu;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$l(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return El(e,t,n,!1,r)};ft.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(e){console.error(e)}}Z0(),Zp.exports=ft;var Gy=Zp.exports,jf=Gy;Ha.createRoot=jf.createRoot,Ha.hydrateRoot=jf.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _s(){return _s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_s.apply(this,arguments)}var bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bn||(bn={}));const Rf="popstate";function Xy(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:a}=r.location;return Rc("",{pathname:s,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:J0(i)}return My(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Iu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qy(){return Math.random().toString(36).substr(2,8)}function If(e,t){return{usr:e.state,key:e.key,idx:t}}function Rc(e,t,n,r){return n===void 0&&(n=null),_s({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vi(t):t,{state:n,key:t&&t.key||r||qy()})}function J0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function My(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,a=bn.Pop,c=null,h=g();h==null&&(h=0,l.replaceState(_s({},l.state,{idx:h}),""));function g(){return(l.state||{idx:null}).idx}function v(){a=bn.Pop;let T=g(),m=T==null?null:T-h;h=T,c&&c({action:a,location:S.location,delta:m})}function x(T,m){a=bn.Push;let p=Rc(S.location,T,m);h=g()+1;let w=If(p,h),$=S.createHref(p);try{l.pushState(w,"",$)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign($)}s&&c&&c({action:a,location:S.location,delta:1})}function E(T,m){a=bn.Replace;let p=Rc(S.location,T,m);h=g();let w=If(p,h),$=S.createHref(p);l.replaceState(w,"",$),s&&c&&c({action:a,location:S.location,delta:0})}function b(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof T=="string"?T:J0(T);return p=p.replace(/ $/,"%20"),ke(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let S={get action(){return a},get location(){return e(i,l)},listen(T){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Rf,v),c=T,()=>{i.removeEventListener(Rf,v),c=null}},createHref(T){return t(i,T)},createURL:b,encodeLocation(T){let m=b(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:E,go(T){return l.go(T)}};return S}var Af;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Af||(Af={}));function ev(e,t,n){return n===void 0&&(n="/"),tv(e,t,n)}function tv(e,t,n,r){let i=typeof t=="string"?vi(t):t,s=q0(i.pathname||"/",n);if(s==null)return null;let l=G0(e);nv(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let h=hv(s);a=dv(l[c],h)}return a}function G0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(ke(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=lr([r,c.relativePath]),g=n.concat(c);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),G0(s.children,t,g,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:cv(h,s.index),routesMeta:g})};return e.forEach((s,l)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,l);else for(let c of X0(s.path))i(s,l,c)}),t}function X0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=X0(r.join("/")),a=[];return a.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function nv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rv=/^:[\w-]+$/,iv=3,sv=2,ov=1,lv=10,av=-2,Ff=e=>e==="*";function cv(e,t){let n=e.split("/"),r=n.length;return n.some(Ff)&&(r+=av),t&&(r+=sv),n.filter(i=>!Ff(i)).reduce((i,s)=>i+(rv.test(s)?iv:s===""?ov:lv),r)}function uv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dv(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],h=a===r.length-1,g=s==="/"?t:t.slice(s.length)||"/",v=fv({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},g),x=c.route;if(!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:lr([s,v.pathname]),pathnameBase:wv(lr([s,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(s=lr([s,v.pathnameBase]))}return l}function fv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,g,v)=>{let{paramName:x,isOptional:E}=g;if(x==="*"){let S=a[v]||"";l=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const b=a[v];return E&&!b?h[x]=void 0:h[x]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:l,pattern:e}}function pv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Iu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Iu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function q0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const mv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gv=e=>mv.test(e);function yv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vi(e):e,s;if(n)if(gv(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Iu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=Bf(n.substring(1),"/"):s=Bf(n,t)}else s=t;return{pathname:s,search:xv(r),hash:Sv(i)}}function Bf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function M0(e,t){let n=vv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function em(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vi(e):(i=_s({},e),ke(!i.pathname||!i.pathname.includes("?"),Sa("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Sa("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Sa("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,a;if(l==null)a=n;else{let v=t.length-1;if(!r&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),v-=1;i.pathname=x.join("/")}a=v>=0?t[v]:"/"}let c=yv(i,a),h=l&&l!=="/"&&l.endsWith("/"),g=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||g)&&(c.pathname+="/"),c}const lr=e=>e.join("/").replace(/\/\/+/g,"/"),wv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tm=["post","put","patch","delete"];new Set(tm);const Cv=["get",...tm];new Set(Cv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(this,arguments)}const Au=y.createContext(null),_v=y.createContext(null),Rs=y.createContext(null),kl=y.createContext(null),gr=y.createContext({outlet:null,matches:[],isDataRoute:!1}),nm=y.createContext(null);function Is(){return y.useContext(kl)!=null}function Fu(){return Is()||ke(!1),y.useContext(kl).location}function rm(e){y.useContext(Rs).static||y.useLayoutEffect(e)}function As(){let{isDataRoute:e}=y.useContext(gr);return e?Iv():$v()}function $v(){Is()||ke(!1);let e=y.useContext(Au),{basename:t,future:n,navigator:r}=y.useContext(Rs),{matches:i}=y.useContext(gr),{pathname:s}=Fu(),l=JSON.stringify(M0(i,n.v7_relativeSplatPath)),a=y.useRef(!1);return rm(()=>{a.current=!0}),y.useCallback(function(h,g){if(g===void 0&&(g={}),!a.current)return;if(typeof h=="number"){r.go(h);return}let v=em(h,JSON.parse(l),s,g.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:lr([t,v.pathname])),(g.replace?r.replace:r.push)(v,g.state,g)},[t,r,l,s,e])}function Ev(e,t){return kv(e,t)}function kv(e,t,n,r){Is()||ke(!1);let{navigator:i}=y.useContext(Rs),{matches:s}=y.useContext(gr),l=s[s.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let h=Fu(),g;if(t){var v;let T=typeof t=="string"?vi(t):t;c==="/"||(v=T.pathname)!=null&&v.startsWith(c)||ke(!1),g=T}else g=h;let x=g.pathname||"/",E=x;if(c!=="/"){let T=c.replace(/^\//,"").split("/");E="/"+x.replace(/^\//,"").split("/").slice(T.length).join("/")}let b=ev(e,{pathname:E}),S=Tv(b&&b.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:lr([c,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?c:lr([c,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r);return t&&S?y.createElement(kl.Provider,{value:{location:$s({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:bn.Pop}},S):S}function Lv(){let e=Rv(),t=bv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,null)}const Pv=y.createElement(Lv,null);class Nv extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(gr.Provider,{value:this.props.routeContext},y.createElement(nm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zv(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(Au);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(gr.Provider,{value:t},r)}function Tv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let g=l.findIndex(v=>v.route.id&&(a==null?void 0:a[v.route.id])!==void 0);g>=0||ke(!1),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=g),v.route.id){let{loaderData:x,errors:E}=n,b=v.route.loader&&x[v.route.id]===void 0&&(!E||E[v.route.id]===void 0);if(v.route.lazy||b){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((g,v,x)=>{let E,b=!1,S=null,T=null;n&&(E=a&&v.route.id?a[v.route.id]:void 0,S=v.route.errorElement||Pv,c&&(h<0&&x===0?(Av("route-fallback"),b=!0,T=null):h===x&&(b=!0,T=v.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,x+1)),p=()=>{let w;return E?w=S:b?w=T:v.route.Component?w=y.createElement(v.route.Component,null):v.route.element?w=v.route.element:w=g,y.createElement(zv,{match:v,routeContext:{outlet:g,matches:m,isDataRoute:n!=null},children:w})};return n&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?y.createElement(Nv,{location:n.location,revalidation:n.revalidation,component:S,error:E,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var im=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(im||{}),sm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sm||{});function Dv(e){let t=y.useContext(Au);return t||ke(!1),t}function Ov(e){let t=y.useContext(_v);return t||ke(!1),t}function jv(e){let t=y.useContext(gr);return t||ke(!1),t}function om(e){let t=jv(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function Rv(){var e;let t=y.useContext(nm),n=Ov(),r=om();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Iv(){let{router:e}=Dv(im.UseNavigateStable),t=om(sm.UseNavigateStable),n=y.useRef(!1);return rm(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,$s({fromRouteId:t},s)))},[e,t])}const Uf={};function Av(e,t,n){Uf[e]||(Uf[e]=!0)}function Fv(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Bv(e){let{to:t,replace:n,state:r,relative:i}=e;Is()||ke(!1);let{future:s,static:l}=y.useContext(Rs),{matches:a}=y.useContext(gr),{pathname:c}=Fu(),h=As(),g=em(t,M0(a,s.v7_relativeSplatPath),c,i==="path"),v=JSON.stringify(g);return y.useEffect(()=>h(JSON.parse(v),{replace:n,state:r,relative:i}),[h,v,i,n,r]),null}function jr(e){ke(!1)}function Uv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=bn.Pop,navigator:s,static:l=!1,future:a}=e;Is()&&ke(!1);let c=t.replace(/^\/*/,"/"),h=y.useMemo(()=>({basename:c,navigator:s,static:l,future:$s({v7_relativeSplatPath:!1},a)}),[c,a,s,l]);typeof r=="string"&&(r=vi(r));let{pathname:g="/",search:v="",hash:x="",state:E=null,key:b="default"}=r,S=y.useMemo(()=>{let T=q0(g,c);return T==null?null:{location:{pathname:T,search:v,hash:x,state:E,key:b},navigationType:i}},[c,g,v,x,E,b,i]);return S==null?null:y.createElement(Rs.Provider,{value:h},y.createElement(kl.Provider,{children:n,value:S}))}function Wv(e){let{children:t,location:n}=e;return Ev(Ic(t),n)}new Promise(()=>{});function Ic(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let s=[...t,i];if(r.type===y.Fragment){n.push.apply(n,Ic(r.props.children,s));return}r.type!==jr&&ke(!1),!r.props.index||!r.props.children||ke(!1);let l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ic(r.props.children,s)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Hv="6";try{window.__reactRouterVersion=Hv}catch{}const Vv="startTransition",Wf=Wa[Vv];function Qv(e){let{basename:t,children:n,future:r,window:i}=e,s=y.useRef();s.current==null&&(s.current=Xy({window:i,v5Compat:!0}));let l=s.current,[a,c]=y.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},g=y.useCallback(v=>{h&&Wf?Wf(()=>c(v)):c(v)},[c,h]);return y.useLayoutEffect(()=>l.listen(g),[l,g]),y.useEffect(()=>Fv(r),[r]),y.createElement(Uv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Hf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hf||(Hf={}));var Vf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vf||(Vf={}));function Kv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Yv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Zv=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Yv(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Kv(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ke="-ms-",nl="-moz-",te="-webkit-",lm="comm",Bu="rule",Uu="decl",Jv="@import",am="@keyframes",Gv="@layer",Xv=Math.abs,Ll=String.fromCharCode,qv=Object.assign;function Mv(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function cm(e){return e.trim()}function e2(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Ac(e,t){return e.indexOf(t)}function Fe(e,t){return e.charCodeAt(t)|0}function Es(e,t,n){return e.slice(t,n)}function Bt(e){return e.length}function Wu(e){return e.length}function uo(e,t){return t.push(e),e}function t2(e,t){return e.map(t).join("")}var Pl=1,ci=1,um=0,ot=0,$e=0,wi="";function Nl(e,t,n,r,i,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Pl,column:ci,length:l,return:""}}function Fi(e,t){return qv(Nl("",null,null,"",null,null,0),e,{length:-e.length},t)}function n2(){return $e}function r2(){return $e=ot>0?Fe(wi,--ot):0,ci--,$e===10&&(ci=1,Pl--),$e}function ut(){return $e=ot<um?Fe(wi,ot++):0,ci++,$e===10&&(ci=1,Pl++),$e}function Qt(){return Fe(wi,ot)}function Po(){return ot}function Fs(e,t){return Es(wi,e,t)}function ks(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dm(e){return Pl=ci=1,um=Bt(wi=e),ot=0,[]}function fm(e){return wi="",e}function No(e){return cm(Fs(ot-1,Fc(e===91?e+2:e===40?e+1:e)))}function i2(e){for(;($e=Qt())&&$e<33;)ut();return ks(e)>2||ks($e)>3?"":" "}function s2(e,t){for(;--t&&ut()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Fs(e,Po()+(t<6&&Qt()==32&&ut()==32))}function Fc(e){for(;ut();)switch($e){case e:return ot;case 34:case 39:e!==34&&e!==39&&Fc($e);break;case 40:e===41&&Fc(e);break;case 92:ut();break}return ot}function o2(e,t){for(;ut()&&e+$e!==57;)if(e+$e===84&&Qt()===47)break;return"/*"+Fs(t,ot-1)+"*"+Ll(e===47?e:ut())}function l2(e){for(;!ks(Qt());)ut();return Fs(e,ot)}function a2(e){return fm(zo("",null,null,null,[""],e=dm(e),0,[0],e))}function zo(e,t,n,r,i,s,l,a,c){for(var h=0,g=0,v=l,x=0,E=0,b=0,S=1,T=1,m=1,p=0,w="",$=i,N=s,P=r,z=w;T;)switch(b=p,p=ut()){case 40:if(b!=108&&Fe(z,v-1)==58){Ac(z+=ne(No(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:z+=No(p);break;case 9:case 10:case 13:case 32:z+=i2(b);break;case 92:z+=s2(Po()-1,7);continue;case 47:switch(Qt()){case 42:case 47:uo(c2(o2(ut(),Po()),t,n),c);break;default:z+="/"}break;case 123*S:a[h++]=Bt(z)*m;case 125*S:case 59:case 0:switch(p){case 0:case 125:T=0;case 59+g:m==-1&&(z=ne(z,/\f/g,"")),E>0&&Bt(z)-v&&uo(E>32?Kf(z+";",r,n,v-1):Kf(ne(z," ","")+";",r,n,v-2),c);break;case 59:z+=";";default:if(uo(P=Qf(z,t,n,h,g,i,a,w,$=[],N=[],v),s),p===123)if(g===0)zo(z,t,P,P,$,s,v,a,N);else switch(x===99&&Fe(z,3)===110?100:x){case 100:case 108:case 109:case 115:zo(e,P,P,r&&uo(Qf(e,P,P,0,0,i,a,w,i,$=[],v),N),i,N,v,a,r?$:N);break;default:zo(z,P,P,P,[""],N,0,a,N)}}h=g=E=0,S=m=1,w=z="",v=l;break;case 58:v=1+Bt(z),E=b;default:if(S<1){if(p==123)--S;else if(p==125&&S++==0&&r2()==125)continue}switch(z+=Ll(p),p*S){case 38:m=g>0?1:(z+="\f",-1);break;case 44:a[h++]=(Bt(z)-1)*m,m=1;break;case 64:Qt()===45&&(z+=No(ut())),x=Qt(),g=v=Bt(w=z+=l2(Po())),p++;break;case 45:b===45&&Bt(z)==2&&(S=0)}}return s}function Qf(e,t,n,r,i,s,l,a,c,h,g){for(var v=i-1,x=i===0?s:[""],E=Wu(x),b=0,S=0,T=0;b<r;++b)for(var m=0,p=Es(e,v+1,v=Xv(S=l[b])),w=e;m<E;++m)(w=cm(S>0?x[m]+" "+p:ne(p,/&\f/g,x[m])))&&(c[T++]=w);return Nl(e,t,n,i===0?Bu:a,c,h,g)}function c2(e,t,n){return Nl(e,t,n,lm,Ll(n2()),Es(e,2,-2),0)}function Kf(e,t,n,r){return Nl(e,t,n,Uu,Es(e,0,r),Es(e,r+1,-1),r)}function ti(e,t){for(var n="",r=Wu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function u2(e,t,n,r){switch(e.type){case Gv:if(e.children.length)break;case Jv:case Uu:return e.return=e.return||e.value;case lm:return"";case am:return e.return=e.value+"{"+ti(e.children,r)+"}";case Bu:e.value=e.props.join(",")}return Bt(n=ti(e.children,r))?e.return=e.value+"{"+n+"}":""}function d2(e){var t=Wu(e);return function(n,r,i,s){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,s)||"";return l}}function f2(e){return function(t){t.root||(t=t.return)&&e(t)}}function p2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var h2=function(t,n,r){for(var i=0,s=0;i=s,s=Qt(),i===38&&s===12&&(n[r]=1),!ks(s);)ut();return Fs(t,ot)},m2=function(t,n){var r=-1,i=44;do switch(ks(i)){case 0:i===38&&Qt()===12&&(n[r]=1),t[r]+=h2(ot-1,n,r);break;case 2:t[r]+=No(i);break;case 4:if(i===44){t[++r]=Qt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ll(i)}while(i=ut());return t},g2=function(t,n){return fm(m2(dm(t),n))},Yf=new WeakMap,y2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Yf.get(r))&&!i){Yf.set(t,!0);for(var s=[],l=g2(n,s),a=r.props,c=0,h=0;c<l.length;c++)for(var g=0;g<a.length;g++,h++)t.props[h]=s[c]?l[c].replace(/&\f/g,a[g]):a[g]+" "+l[c]}}},v2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function pm(e,t){switch(Mv(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+nl+e+Ke+e+e;case 6828:case 4268:return te+e+Ke+e+e;case 6165:return te+e+Ke+"flex-"+e+e;case 5187:return te+e+ne(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+Ke+"flex-$1$2")+e;case 5443:return te+e+Ke+"flex-item-"+ne(e,/flex-|-self/,"")+e;case 4675:return te+e+Ke+"flex-line-pack"+ne(e,/align-content|flex-|-self/,"")+e;case 5548:return te+e+Ke+ne(e,"shrink","negative")+e;case 5292:return te+e+Ke+ne(e,"basis","preferred-size")+e;case 6060:return te+"box-"+ne(e,"-grow","")+te+e+Ke+ne(e,"grow","positive")+e;case 4554:return te+ne(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+Ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bt(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+nl+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ac(e,"stretch")?pm(ne(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Fe(e,t+1)!==115)break;case 6444:switch(Fe(e,Bt(e)-3-(~Ac(e,"!important")&&10))){case 107:return ne(e,":",":"+te)+e;case 101:return ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+te+(Fe(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+Ke+"$2box$3")+e}break;case 5936:switch(Fe(e,t+11)){case 114:return te+e+Ke+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+Ke+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+Ke+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return te+e+Ke+e+e}return e}var w2=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Uu:t.return=pm(t.value,t.length);break;case am:return ti([Fi(t,{value:ne(t.value,"@","@"+te)})],i);case Bu:if(t.length)return t2(t.props,function(s){switch(e2(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ti([Fi(t,{props:[ne(s,/:(read-\w+)/,":"+nl+"$1")]})],i);case"::placeholder":return ti([Fi(t,{props:[ne(s,/:(plac\w+)/,":"+te+"input-$1")]}),Fi(t,{props:[ne(s,/:(plac\w+)/,":"+nl+"$1")]}),Fi(t,{props:[ne(s,/:(plac\w+)/,Ke+"input-$1")]})],i)}return""})}},x2=[w2],S2=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var T=S.getAttribute("data-emotion");T.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||x2,s={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var T=S.getAttribute("data-emotion").split(" "),m=1;m<T.length;m++)s[T[m]]=!0;a.push(S)});var c,h=[y2,v2];{var g,v=[u2,f2(function(S){g.insert(S)})],x=d2(h.concat(i,v)),E=function(T){return ti(a2(T),x)};c=function(T,m,p,w){g=p,E(T?T+"{"+m.styles+"}":m.styles),w&&(b.inserted[m.name]=!0)}}var b={key:n,sheet:new Zv({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:c};return b.sheet.hydrate(a),b},hm={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Hu=je?Symbol.for("react.element"):60103,Vu=je?Symbol.for("react.portal"):60106,zl=je?Symbol.for("react.fragment"):60107,Tl=je?Symbol.for("react.strict_mode"):60108,Dl=je?Symbol.for("react.profiler"):60114,Ol=je?Symbol.for("react.provider"):60109,jl=je?Symbol.for("react.context"):60110,Qu=je?Symbol.for("react.async_mode"):60111,Rl=je?Symbol.for("react.concurrent_mode"):60111,Il=je?Symbol.for("react.forward_ref"):60112,Al=je?Symbol.for("react.suspense"):60113,b2=je?Symbol.for("react.suspense_list"):60120,Fl=je?Symbol.for("react.memo"):60115,Bl=je?Symbol.for("react.lazy"):60116,C2=je?Symbol.for("react.block"):60121,_2=je?Symbol.for("react.fundamental"):60117,$2=je?Symbol.for("react.responder"):60118,E2=je?Symbol.for("react.scope"):60119;function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hu:switch(e=e.type,e){case Qu:case Rl:case zl:case Dl:case Tl:case Al:return e;default:switch(e=e&&e.$$typeof,e){case jl:case Il:case Bl:case Fl:case Ol:return e;default:return t}}case Vu:return t}}}function mm(e){return ht(e)===Rl}oe.AsyncMode=Qu;oe.ConcurrentMode=Rl;oe.ContextConsumer=jl;oe.ContextProvider=Ol;oe.Element=Hu;oe.ForwardRef=Il;oe.Fragment=zl;oe.Lazy=Bl;oe.Memo=Fl;oe.Portal=Vu;oe.Profiler=Dl;oe.StrictMode=Tl;oe.Suspense=Al;oe.isAsyncMode=function(e){return mm(e)||ht(e)===Qu};oe.isConcurrentMode=mm;oe.isContextConsumer=function(e){return ht(e)===jl};oe.isContextProvider=function(e){return ht(e)===Ol};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hu};oe.isForwardRef=function(e){return ht(e)===Il};oe.isFragment=function(e){return ht(e)===zl};oe.isLazy=function(e){return ht(e)===Bl};oe.isMemo=function(e){return ht(e)===Fl};oe.isPortal=function(e){return ht(e)===Vu};oe.isProfiler=function(e){return ht(e)===Dl};oe.isStrictMode=function(e){return ht(e)===Tl};oe.isSuspense=function(e){return ht(e)===Al};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zl||e===Rl||e===Dl||e===Tl||e===Al||e===b2||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===Fl||e.$$typeof===Ol||e.$$typeof===jl||e.$$typeof===Il||e.$$typeof===_2||e.$$typeof===$2||e.$$typeof===E2||e.$$typeof===C2)};oe.typeOf=ht;hm.exports=oe;var k2=hm.exports,gm=k2,L2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},P2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ym={};ym[gm.ForwardRef]=L2;ym[gm.Memo]=P2;var N2=!0;function z2(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var vm=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||N2===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},T2=function(t,n,r){vm(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function D2(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var O2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},j2=/[A-Z]|^ms/g,R2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wm=function(t){return t.charCodeAt(1)===45},Zf=function(t){return t!=null&&typeof t!="boolean"},ba=p2(function(e){return wm(e)?e:e.replace(j2,"-$&").toLowerCase()}),Jf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(R2,function(r,i,s){return Ut={name:i,styles:s,next:Ut},i})}return O2[t]!==1&&!wm(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ls(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Ut={name:i.name,styles:i.styles,next:Ut},i.name;var s=n;if(s.styles!==void 0){var l=s.next;if(l!==void 0)for(;l!==void 0;)Ut={name:l.name,styles:l.styles,next:Ut},l=l.next;var a=s.styles+";";return a}return I2(e,t,n)}case"function":{if(e!==void 0){var c=Ut,h=n(e);return Ut=c,Ls(e,t,h)}break}}var g=n;return g}function I2(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ls(e,t,n[i])+";";else for(var s in n){var l=n[s];if(typeof l!="object"){var a=l;Zf(a)&&(r+=ba(s)+":"+Jf(s,a)+";")}else if(Array.isArray(l)&&typeof l[0]=="string"&&t==null)for(var c=0;c<l.length;c++)Zf(l[c])&&(r+=ba(s)+":"+Jf(s,l[c])+";");else{var h=Ls(e,t,l);switch(s){case"animation":case"animationName":{r+=ba(s)+":"+h+";";break}default:r+=s+"{"+h+"}"}}}return r}var Gf=/label:\s*([^\s;{]+)\s*(;|$)/g,Ut;function xm(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";Ut=void 0;var s=e[0];if(s==null||s.raw===void 0)r=!1,i+=Ls(n,t,s);else{var l=s;i+=l[0]}for(var a=1;a<e.length;a++)if(i+=Ls(n,t,e[a]),r){var c=s;i+=c[a]}Gf.lastIndex=0;for(var h="",g;(g=Gf.exec(i))!==null;)h+="-"+g[1];var v=D2(i)+h;return{name:v,styles:i,next:Ut}}var A2=function(t){return t()},F2=Wa.useInsertionEffect?Wa.useInsertionEffect:!1,B2=F2||A2,Sm=y.createContext(typeof HTMLElement<"u"?S2({key:"css"}):null);Sm.Provider;var U2=function(t){return y.forwardRef(function(n,r){var i=y.useContext(Sm);return t(n,i,r)})},W2=y.createContext({}),Bs={}.hasOwnProperty,Bc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ku=function(t,n){var r={};for(var i in n)Bs.call(n,i)&&(r[i]=n[i]);return r[Bc]=t,r},H2=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return vm(n,r,i),B2(function(){return T2(n,r,i)}),null},V2=U2(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Bc],s=[r],l="";typeof e.className=="string"?l=z2(t.registered,s,e.className):e.className!=null&&(l=e.className+" ");var a=xm(s,void 0,y.useContext(W2));l+=t.key+"-"+a.name;var c={};for(var h in e)Bs.call(e,h)&&h!=="css"&&h!==Bc&&(c[h]=e[h]);return c.className=l,n&&(c.ref=n),y.createElement(y.Fragment,null,y.createElement(H2,{cache:t,serialized:a,isStringTag:typeof i=="string"}),y.createElement(i,c))}),Yu=V2,De=Pe.Fragment,o=function(t,n,r){return Bs.call(n,"css")?Pe.jsx(Yu,Ku(t,n),r):Pe.jsx(t,n,r)},u=function(t,n,r){return Bs.call(n,"css")?Pe.jsxs(Yu,Ku(t,n),r):Pe.jsxs(t,n,r)},Xf=function(t,n){var r=arguments;if(n==null||!Bs.call(n,"css"))return y.createElement.apply(void 0,r);var i=r.length,s=new Array(i);s[0]=Yu,s[1]=Ku(t,n);for(var l=2;l<i;l++)s[l]=r[l];return y.createElement.apply(null,s)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Xf||(Xf={}));function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xm(t)}const Q2="/strack/".replace(/\/$/,""),K2=e=>d`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`,Y2=e=>d`
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 28vh;
  @media (min-width: 900px) {
    flex: 1 1 42%;
    min-height: 100vh;
    min-height: 100dvh;
  }
  background: ${e?"linear-gradient(145deg, #0a1628 0%, #121a24 45%, #0f1419 100%)":"linear-gradient(145deg, #e8eef5 0%, #dce6f0 50%, #d4e0ed 100%)"};
  color: ${e?"#e8edf4":"#0f172a"};
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${e?"radial-gradient(ellipse 80% 50% at 20% 20%, rgba(56, 189, 248, 0.12), transparent 55%)":"radial-gradient(ellipse 70% 45% at 15% 15%, rgba(59, 130, 246, 0.15), transparent 50%)"};
    pointer-events: none;
  }
`,Z2=d`
  position: relative;
  z-index: 1;
  max-width: 28rem;
`,J2=e=>d`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${e?"#f8fafc":"#0f172a"};
`,G2=e=>d`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${e?"rgba(226, 232, 240, 0.78)":"rgba(15, 23, 42, 0.72)"};
  max-width: 22rem;
`,X2=e=>d`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  background: ${e?"#0f0f0f":"#f4f4f5"};
`,q2=e=>d`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: ${e?"#1c1c1e":"#ffffff"};
  box-shadow: ${e?"0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)":"0 20px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)"};
`,M2=e=>d`
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
  margin-bottom: 0.35rem;
`,e5=e=>d`
  font-size: 0.9rem;
  color: ${e?"#a1a1aa":"#64748b"};
  margin-bottom: 1.5rem;
`,t5=d`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,qf=e=>d`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${e?"#e4e4e7":"#374151"};
  margin-bottom: 0.4rem;
`,bm=e=>d`
  width: 100%;
  min-height: 48px;
  padding: 0.65rem 0.9rem;
  border-radius: 10px;
  border: 1px solid ${e?"#3f3f46":"#e4e4e7"};
  background: ${e?"#141416":"#fafafa"};
  color: ${e?"#fafafa":"#18181b"};
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &::placeholder {
    color: ${e?"#71717a":"#a1a1aa"};
  }
  &:focus {
    outline: none;
    border-color: ${e?"#60a5fa":"#2563eb"};
    box-shadow: 0 0 0 3px ${e?"rgba(96, 165, 250, 0.2)":"rgba(37, 99, 235, 0.15)"};
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,n5=d`
  position: relative;
  display: flex;
  align-items: center;
`,r5=e=>d`
  ${bm(e)};
  padding-right: 2.75rem;
`,i5=e=>d`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${e?"#a1a1aa":"#64748b"};
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${e?"#e4e4e7":"#0f172a"};
    background: ${e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"};
  }
`,s5=e=>d`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${e?"#fca5a5":"#b91c1c"};
  background: ${e?"rgba(127, 29, 29, 0.25)":"#fef2f2"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.35)":"#fecaca"};
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
`,o5=d`
  width: 100%;
  min-height: 48px;
  margin-top: 0.25rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #18181b 0%, #09090b 100%);
  color: #fafafa;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.12s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,l5=e=>d`
  position: absolute;
  top: max(0.75rem, env(safe-area-inset-top));
  right: max(0.75rem, env(safe-area-inset-right));
  z-index: 2;
  border: 1px solid ${e?"rgba(255,255,255,0.12)":"rgba(15,23,42,0.12)"};
  background: ${e?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.85)"};
  color: ${e?"#e4e4e7":"#334155"};
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;
  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"#fff"};
  }
`,a5=d`
  width: 1.1rem;
  height: 1.1rem;
  border: 2px solid rgba(250, 250, 250, 0.25);
  border-top-color: #fafafa;
  border-radius: 50%;
  animation: strack-spin 0.65s linear infinite;
  @keyframes strack-spin {
    to {
      transform: rotate(360deg);
    }
  }
`,c5=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),u5=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),d5=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),f5=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function p5(e){return e?{message:"The server did not return JSON. Open the site at …/strack/ and ensure backend/login.php is deployed."}:{message:null}}function h5({darkMode:e,onToggleDarkMode:t}){const n=As(),[r,i]=y.useState(""),[s,l]=y.useState(""),[a,c]=y.useState(!1),[h,g]=y.useState(""),[v,x]=y.useState(!1),E=async b=>{if(b.preventDefault(),g(""),!r.trim()){g("Enter your university email address.");return}if(!s){g("Enter your password.");return}x(!0);const S=`${Q2}/backend/login.php`;try{const m=await(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.trim(),password:s})})).text();let p,w=!1;try{p=JSON.parse(m)}catch{w=!0,p={}}const $=p5(w);if($.message){g($.message);return}if(p.success){const N=p.user||{},P=N.role||"student",z=P==="admin"?"/admin":P==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(N))}catch{}n(z,{replace:!0});return}g(p.message||"Invalid email or password.")}catch{g(`Cannot reach ${S}. On NUWebSpace use your full /strack/ URL; locally run PHP and the Vite dev server with the proxy enabled.`)}finally{x(!1)}};return u("div",{css:K2(),children:[o("button",{type:"button",css:l5(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?o(u5,{}):o(c5,{})}),o("section",{css:Y2(e),"aria-hidden":"false",children:u("div",{css:Z2,children:[o("h1",{css:J2(e),children:"Strack"}),o("p",{css:G2(e),children:"Sign in to track attendance, engagement, and performance in one place."})]})}),o("section",{css:X2(e),children:u("div",{css:q2(e),children:[o("h2",{css:M2(e),children:"Sign in"}),o("p",{css:e5(e),children:"Use the email and password from your administrator or module leader."}),u("form",{css:t5,onSubmit:E,noValidate:!0,children:[u("div",{children:[o("label",{css:qf(e),htmlFor:"strack-email",children:"Email"}),o("input",{id:"strack-email",css:bm(e),type:"email",autoComplete:"username",inputMode:"email",placeholder:"you@uni.ac.uk",value:r,onChange:b=>i(b.target.value),disabled:v})]}),u("div",{children:[o("label",{css:qf(e),htmlFor:"strack-password",children:"Password"}),u("div",{css:n5,children:[o("input",{id:"strack-password",css:r5(e),type:a?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:s,onChange:b=>l(b.target.value),disabled:v}),o("button",{type:"button",css:i5(e),onClick:()=>c(b=>!b),"aria-label":a?"Hide password":"Show password",tabIndex:-1,children:a?o(f5,{}):o(d5,{})})]})]}),h?o("div",{role:"alert",css:s5(e),children:h}):null,o("button",{type:"submit",css:o5,disabled:v,children:v?u(De,{children:[o("span",{css:a5,"aria-hidden":!0}),"Signing in…"]}):"Sign in"})]})]})})]})}var Cm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mf=Mt.createContext&&Mt.createContext(Cm),m5=["attr","size","title"];function g5(e,t){if(e==null)return{};var n,r,i=y5(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(null,arguments)}function ep(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function il(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ep(Object(n),!0).forEach(function(r){v5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ep(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v5(e,t,n){return(t=w5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w5(e){var t=x5(e,"string");return typeof t=="symbol"?t:t+""}function x5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _m(e){return e&&e.map((t,n)=>Mt.createElement(t.tag,il({key:n},t.attr),_m(t.child)))}function X(e){return t=>Mt.createElement(S5,rl({attr:il({},e.attr)},t),_m(e.child))}function S5(e){var t=n=>{var{attr:r,size:i,title:s}=e,l=g5(e,m5),a=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Mt.createElement("svg",rl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:c,style:il(il({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Mt.createElement("title",null,s),e.children)};return Mf!==void 0?Mt.createElement(Mf.Consumer,null,n=>t(n)):t(Cm)}function Ft(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function b5(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function ui(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function Mn(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function Rr(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function di(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function Zu(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function Ul(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function sl(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function C5(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"},child:[]}]})(e)}function $m(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"},child:[]}]})(e)}function wn(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function fi(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function pi(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"},child:[]}]})(e)}function Bi(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function _5(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"},child:[]}]})(e)}function $5(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.625 11.505v8.25a1.5 1.5 0 0 1-1.5 1.5H4.875a1.5 1.5 0 0 1-1.5-1.5v-8.25m8.25-6.375A2.625 2.625 0 1 0 9 7.755h2.625m0-2.625v2.625m0-2.625a2.625 2.625 0 1 1 2.625 2.625h-2.625m0 0v13.5M3 11.505h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.622-.504-1.125-1.125-1.125H3c-.621 0-1.125.503-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function Ca(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]}]})(e)}function _a(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"},child:[]}]})(e)}function Em(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"},child:[]}]})(e)}function km(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"},child:[]}]})(e)}function Cn(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function E5(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function Lm(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"},child:[]}]})(e)}function Pm(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"},child:[]}]})(e)}function Ju(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function hi(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function Gi(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function k5(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"},child:[]}]})(e)}function On(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function Gu(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},child:[]}]})(e)}function Xu(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function Ps(e){return X({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const L5="/strack/".replace(/\/$/,""),xi="#6366f1",P5=[{id:"food_drink",title:"Food & drink vouchers",description:"£15 credit for campus cafés and selected partner outlets.",cost:300,category:"vouchers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80&auto=format&fit=crop"},{id:"discount_local",title:"Local business discount codes",description:"Exclusive codes for shops and services near campus.",cost:400,category:"vouchers",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop"},{id:"digital_custom",title:"Digital customisation items",description:"Wallpapers, icons, and profile themes for your Strack account.",cost:250,category:"merchandise",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80&auto=format&fit=crop"},{id:"uni_merch",title:"University merchandise",description:"Hoodie, bottle, or cap from the official union store.",cost:550,category:"merchandise",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&q=80&auto=format&fit=crop"},{id:"recognition",title:"Recognition",description:"Certificate of achievement and spotlight on the leaderboard.",cost:200,category:"recognition",image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=80&auto=format&fit=crop"},{id:"print_credits",title:"Print credits",description:"500 mono pages or equivalent colour printing.",cost:150,category:"credits",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop"},{id:"charity",title:"Charity donations",description:"We donate £5 to your chosen university charity partner.",cost:350,category:"charity",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"},{id:"priority_booking",title:"Priority booking",description:"Register for modules and events one day before general release.",cost:800,category:"privileges",image:"https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80&auto=format&fit=crop"}];function N5(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t=n=>Array.from({length:n},()=>e[Math.floor(Math.random()*e.length)]).join("");return`STR-${t(4)}-${t(4)}`}function Nm(e){return`strack_redeemed_${(e||"").toLowerCase()}`}function z5(e){try{const t=localStorage.getItem(Nm(e));if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function tp(e,t){try{localStorage.setItem(Nm(e),JSON.stringify(t))}catch{}}const T5=e=>d`
  max-width: 1120px;
  margin: 0 auto;
  color: ${e?"#f3f4f6":"#111827"};
`,D5=d`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,O5=d`
  h1 {
    font-size: clamp(1.5rem, 3vw, 1.85rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0 0 0.35rem;
  }
  p {
    margin: 0;
    font-size: 0.95rem;
    color: #6b7280;
  }
`,j5=e=>d`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  background: ${e?"#1f2937":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  box-shadow: ${e?"none":"0 4px 14px rgba(15, 23, 42, 0.06)"};
  min-width: 160px;
`,R5=d`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,I5=d`
  font-size: 1.65rem;
  font-weight: 800;
  font-family: inherit;
  color: ${xi};
  letter-spacing: -0.02em;
`,A5=d`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${xi};
  flex-shrink: 0;
  svg {
    width: 22px;
    height: 22px;
  }
`,np=e=>d`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${e?"none":"0 8px 30px rgba(15, 23, 42, 0.06)"};
`,rp=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
  color: inherit;
  svg {
    width: 22px;
    height: 22px;
    color: ${xi};
  }
`,F5=d`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,B5=e=>d`
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${e?"#111827":"#fafafa"};
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  &:hover {
    box-shadow: ${e?"0 8px 24px rgba(0,0,0,0.35)":"0 8px 24px rgba(15, 23, 42, 0.08)"};
    transform: translateY(-2px);
  }
`,U5=d`
  aspect-ratio: 16 / 10;
  background: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,W5=d`
  padding: 0.9rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`,H5=d`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`,V5=d`
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.45;
  flex: 1;
`,Q5=d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,K5=d`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${xi};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,Y5=e=>d`
  font-size: 0.7rem;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#1f2937":"#ffffff"};
  text-transform: lowercase;
`,Z5=d`
  width: 100%;
  margin-top: 0.65rem;
  padding: 0.65rem 0.9rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  background: ${xi};
  color: #ffffff;
  transition: filter 0.15s ease, opacity 0.15s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,J5=e=>d`
  min-height: 140px;
  border: 1px dashed ${e?"#4b5563":"#d1d5db"};
  border-radius: 12px;
  padding: 1.25rem;
  font-size: 0.9rem;
  color: #9ca3af;
`,G5=d`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,X5=e=>d`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  background: ${e?"#1f2937":"#f3f4f6"};
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#374151"};
`,q5=d`
  flex: 1;
  min-width: 0;
`,M5=d`
  font-weight: 600;
  margin-bottom: 0.35rem;
`,ew=e=>d`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: ${e?"#a5b4fc":xi};
  letter-spacing: 0.02em;
`,tw=d`
  font-weight: 700;
  color: #6b7280;
  white-space: nowrap;
  font-size: 0.82rem;
`,nw=d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,rw=e=>d`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#1f2937":"#ffffff"};
  color: ${e?"#e5e7eb":"#374151"};
  border-radius: 8px;
  padding: 0.35rem 0.7rem;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover {
    background: ${e?"#111827":"#f9fafb"};
    border-color: ${e?"#6b7280":"#9ca3af"};
  }
`,iw=d`
  font-size: 0.85rem;
  color: #b91c1c;
  margin-bottom: 0.75rem;
`,ip=()=>u("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":!0,children:[o("circle",{cx:"9",cy:"12",r:"6"}),o("circle",{cx:"15",cy:"12",r:"6"})]});function sw({darkMode:e,userEmail:t,points:n,onPointsChange:r}){const[i,s]=y.useState([]),[l,a]=y.useState({}),[c,h]=y.useState("");y.useEffect(()=>{t&&s(z5(t))},[t]);const g=()=>{s([]),tp(t,[])},v=async x=>{if(!t){h("Sign in again to redeem rewards.");return}if(n<x.cost){h("Not enough points for this reward.");return}h(""),a(E=>({...E,[x.id]:!0}));try{const b=await(await fetch(`${L5}/backend/redeem_reward.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rewardId:x.id})})).json();if(!b.success){h(b.message||"Could not redeem."),typeof b.points=="number"&&r(b.points);return}r(b.points);const S=[...i,{title:x.title,rewardId:x.id,cost:x.cost,at:new Date().toISOString(),promoCode:N5()}];s(S),tp(t,S)}catch{h("Network error.")}finally{a(E=>({...E,[x.id]:!1}))}};return u("div",{css:T5(e),children:[u("div",{css:D5,children:[u("div",{css:O5,children:[o("h1",{children:"Rewards Store"}),o("p",{children:"Redeem your points for exciting rewards"})]}),u("div",{css:j5(e),children:[o("div",{css:A5,children:o(ip,{})}),u("div",{children:[o("div",{css:R5,children:"Your points"}),o("div",{css:I5,children:n})]})]})]}),c?o("div",{css:iw,role:"alert",children:c}):null,u("div",{css:np(e),children:[u("div",{css:rp,children:[o($5,{"aria-hidden":!0}),"Available rewards"]}),o("div",{css:F5,children:P5.map(x=>{const E=!!l[x.id],b=n<x.cost||E;return u("article",{css:B5(e),children:[o("div",{css:U5,children:o("img",{src:x.image,alt:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",onError:S=>{S.target.style.display="none"}})}),u("div",{css:W5,children:[o("h2",{css:H5,children:x.title}),o("p",{css:V5,children:x.description}),u("div",{css:Q5,children:[u("span",{css:K5,children:[o(ip,{}),x.cost]}),o("span",{css:Y5(e),children:x.category})]}),o("button",{type:"button",css:Z5,disabled:b,onClick:()=>v(x),children:E?"...":"Redeem"})]})]},x.id)})})]}),u("div",{css:np(e),children:[u("div",{css:nw,children:[o("div",{css:rp,children:"My rewards"}),o("button",{type:"button",css:rw(e),onClick:g,disabled:i.length===0,children:"Clear history"})]}),o("p",{css:d`
            font-size: 0.78rem;
            color: #9ca3af;
            margin: -0.5rem 0 0.85rem;
          `,children:"Demo: each redemption shows a random promo-style code for display only."}),i.length===0?o("div",{css:J5(e),children:"Your redeemed rewards will appear here."}):o("ul",{css:G5,children:i.map((x,E)=>u("li",{css:X5(e),children:[u("div",{css:q5,children:[o("div",{css:M5,children:x.title}),x.promoCode?u("div",{css:ew(e),children:["Promo: ",x.promoCode]}):null]}),u("span",{css:tw,children:["-",x.cost," pts"]})]},`${x.rewardId}-${E}`))})]}),o("p",{css:d`
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        `,children:"Reward images are from Unsplash (third-party photos)."})]})}const zm=e=>d`
  width: 100%;
  margin: 0;
  padding: 0;
  color: ${e?"#f3f4f6":"#111827"};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`,Tm=d`
  margin: 0 0 0.25rem;
  padding: 0 0.1rem;
`,Dm=e=>d`
  font-size: clamp(1.5rem, 3.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.45rem;
  color: ${e?"#f9fafb":"#111827"};
`,Om=e=>d`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${e?"#9ca3af":"#6b7280"};
  max-width: 36rem;
`,jm=e=>d`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.25rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08)"};
`,Rm=d`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 1.25rem;
`,Im=d`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  flex: 1;
`,Am=d`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  flex: 1;
`,Fm=d`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);
  @media (min-width: 480px) {
    width: 96px;
    height: 96px;
    font-size: 2rem;
  }
`,Bm=d`
  font-size: clamp(1.25rem, 2.8vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
`,ol=e=>d`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.875rem;
  line-height: 1.45;
`,Um=d`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.35rem;
`,Wm=d`
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: rgba(99, 102, 241, 0.12);
  color: #6366f1;
  border: 1px solid rgba(99, 102, 241, 0.28);
`,Hm=e=>d`
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${e?"rgba(255,255,255,0.06)":"#f3f4f6"};
  color: ${e?"#d1d5db":"#4b5563"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
`,Vm=d`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  background: #6366f1;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.15s ease;
  white-space: nowrap;
  flex-shrink: 0;
  svg {
    width: 17px;
    height: 17px;
  }
  &:hover {
    filter: brightness(1.05);
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`,ow=d`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
`,lw=d`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`,er=e=>d`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 0.95rem 0.85rem;
  color: ${e?"#f3f4f6":"#111827"};
  box-shadow: ${e?"none":"0 1px 2px rgba(15, 23, 42, 0.04)"};
`,tr=d`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.45rem;
  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    color: #9ca3af;
  }
`,nr=d`
  font-size: 0.68rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  line-height: 1.2;
`,rr=d`
  font-size: 1.45rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
  color: inherit;
  @media (min-width: 480px) {
    font-size: 1.65rem;
  }
`,ir=e=>d`
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.3;
`,qu=e=>d`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.4rem 1.5rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 28px rgba(15, 23, 42, 0.06)"};
`,Mu=e=>d`
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.85rem;
  padding: 0 0 0.65rem;
  border-bottom: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.28)"};
`,Qm=d`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1.25rem;
  }
`,et=d`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`,Km=d`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,aw=d`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,tt=d`
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
`,Nt=e=>d`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#111827":"#fafafa"};
  border-radius: 10px;
  min-height: 44px;
  padding: 0.55rem 0.85rem;
  font-size: 0.9rem;
  line-height: 1.45;
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
`,zt=d`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 0.12rem;
  color: #9ca3af;
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`,Tt=d`
  flex: 1;
  min-width: 0;
  word-break: break-word;
`,Kt=e=>d`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#111827":"#ffffff"};
  color: ${e?"#f3f4f6":"#111827"};
  border-radius: 10px;
  min-height: 42px;
  padding: 0.55rem 0.85rem;
  font-size: 0.9rem;
  width: 100%;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
  }
`,ll=e=>d`
  ${Kt(e)};
  background: ${e?"#1f2937":"#f3f4f6"};
  color: ${e?"#9ca3af":"#4b5563"};
  cursor: default;
  &:focus {
    border-color: ${e?"#4b5563":"#d1d5db"};
    box-shadow: none;
  }
`,Ym=e=>d`
  ${Kt(e)};
  min-height: 88px;
  line-height: 1.45;
  resize: vertical;
`,Zm=e=>d`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.22)"};
`,Ns=e=>d`
  border: 1px solid ${e?"#6366f1":"#d1d5db"};
  background: ${e?"#6366f1":"#ffffff"};
  color: ${e?"#ffffff":"#374151"};
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
`,ed=e=>d`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(248, 113, 113, 0.12)":"rgba(185, 28, 28, 0.08)"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.25)":"rgba(185, 28, 28, 0.2)"};
  color: ${e?"#fca5a5":"#b91c1c"};
  font-size: 0.8rem;
  line-height: 1.4;
`,cw=e=>d`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(34, 197, 94, 0.14)":"rgba(22, 163, 74, 0.1)"};
  border: 1px solid ${e?"rgba(74, 222, 128, 0.3)":"rgba(22, 163, 74, 0.25)"};
  color: ${e?"#86efac":"#166534"};
  font-size: 0.8rem;
  line-height: 1.4;
`,uw=d`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
`,dw=d`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.15rem;
`,$a=d`
  position: relative;
  width: 100%;
`,Ea=e=>d`
  position: absolute;
  right: 0.35rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${e?"#9ca3af":"#6b7280"};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
  &:hover {
    background: ${e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
    color: ${e?"#e5e7eb":"#374151"};
  }
  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }
  svg {
    width: 1.15rem;
    height: 1.15rem;
    display: block;
  }
`,fw="/strack/".replace(/\/$/,""),pw="Password updated successfully";function Jm({darkMode:e,userEmail:t}){const[n,r]=y.useState(""),[i,s]=y.useState(""),[l,a]=y.useState(""),[c,h]=y.useState(!1),[g,v]=y.useState(!1),[x,E]=y.useState(!1),[b,S]=y.useState(""),[T,m]=y.useState(!1),[p,w]=y.useState(!1),$=()=>{r(""),s(""),a("")},N=async P=>{P.preventDefault(),S(""),m(!1);const z=(t||"").trim();if(!z){S("Email is missing. Please sign in again.");return}if(i!==l){S("New password and confirmation do not match.");return}if(i.length<6){S("New password must be at least 6 characters.");return}if(i===n){S("New password must be different from your current password.");return}w(!0);try{const I=await(await fetch(`${fw}/backend/change_password.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:z,current_password:n,new_password:i})})).json().catch(()=>({}));I.success?(m(!0),S(pw),$()):S(I.message||"Could not update password.")}catch{S("Network error. Check your connection and try again.")}finally{w(!1)}};return u("section",{css:qu(e),"aria-labelledby":"password-change-heading",children:[o("h2",{id:"password-change-heading",css:Mu(e),children:"Change password"}),o("p",{css:d`
          margin: -0.35rem 0 0.75rem;
          font-size: 0.85rem;
          line-height: 1.45;
          color: ${e?"#9ca3af":"#6b7280"};
        `,children:"Use a strong password you do not use elsewhere."}),u("form",{css:uw,onSubmit:N,noValidate:!0,children:[u("div",{css:et,children:[o("label",{css:tt,htmlFor:"pwd-current",children:"Current password"}),u("div",{css:$a,children:[o("input",{id:"pwd-current",type:c?"text":"password",autoComplete:"current-password",css:d`
                ${Kt(e)};
                padding-right: 2.75rem;
              `,value:n,onChange:P=>r(P.target.value)}),o("button",{type:"button",css:Ea(e),onClick:()=>h(P=>!P),"aria-label":c?"Hide current password":"Show current password","aria-pressed":c,children:c?o(_a,{"aria-hidden":!0}):o(Ca,{"aria-hidden":!0})})]})]}),u("div",{css:et,children:[o("label",{css:tt,htmlFor:"pwd-new",children:"New password"}),u("div",{css:$a,children:[o("input",{id:"pwd-new",type:g?"text":"password",autoComplete:"new-password",css:d`
                ${Kt(e)};
                padding-right: 2.75rem;
              `,value:i,onChange:P=>s(P.target.value)}),o("button",{type:"button",css:Ea(e),onClick:()=>v(P=>!P),"aria-label":g?"Hide new password":"Show new password","aria-pressed":g,children:g?o(_a,{"aria-hidden":!0}):o(Ca,{"aria-hidden":!0})})]})]}),u("div",{css:et,children:[o("label",{css:tt,htmlFor:"pwd-confirm",children:"Confirm new password"}),u("div",{css:$a,children:[o("input",{id:"pwd-confirm",type:x?"text":"password",autoComplete:"new-password",css:d`
                ${Kt(e)};
                padding-right: 2.75rem;
              `,value:l,onChange:P=>a(P.target.value)}),o("button",{type:"button",css:Ea(e),onClick:()=>E(P=>!P),"aria-label":x?"Hide password confirmation":"Show password confirmation","aria-pressed":x,children:x?o(_a,{"aria-hidden":!0}):o(Ca,{"aria-hidden":!0})})]})]}),o("div",{css:dw,children:o("button",{type:"submit",disabled:p,css:d`
              ${Ns(!0)};
              &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
              }
            `,children:p?"Updating…":"Update password"})}),b?o("div",{css:T?cw(e):ed(e),role:"status",children:b}):null]})]})}const ka="/strack",al="#6366f1";function hn(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function sp(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function La(e){if(!e)return"";const[t,n]=e.split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n).padStart(2,"0")} ${i}`}function hw(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),s=r.getDay(),l=[];for(let a=0;a<s;a++)l.push({type:"pad"});for(let a=1;a<=i.getDate();a++)l.push({type:"day",date:new Date(t,n,a)});for(;l.length%7!==0;)l.push({type:"pad"});return l}const mw=d`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`,Pa=e=>d`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
`,gw=d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`,yw=e=>d`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#f9fafb":"#111827"};
`,op=e=>d`
  width: 32px;
  height: 32px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1a1a1a":"#fff"};
  color: inherit;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`,vw=d`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`,ww=e=>d`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  margin-bottom: 0.1rem;
`,lp=(e,t,n,r)=>d`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid
    ${t?al:n?e?"#a5b4fc":"#c7d2fe":e?"#404040":"#e5e7eb"};
  background: ${t?al:r?e?"#1f1f1f":"#fafafa":n?e?"rgba(99,102,241,0.16)":"rgba(99,102,241,0.08)":e?"#262626":"#fff"};
  color: ${t?"#fff":"inherit"};
  padding: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${r?"default":"pointer"};
`,xw=d`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`,Sw=e=>d`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${e?"#fff":"#111827"};
  opacity: 0.9;
`,bw=e=>d`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,ap=(e,t)=>d`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-left: 4px solid ${t==="event"?"#ef4444":al};
  background: ${e?"#1f1f1f":"#fff"};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
`,cp=d`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Na=e=>d`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.35rem;
  font-size: 0.82rem;
  color: ${e?"#9ca3af":"#6b7280"};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,Cw=d`
  display: grid;
  gap: 1rem;
`,up=e=>d`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.7rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};

  svg {
    width: 18px;
    height: 18px;
    color: ${al};
  }
`,_w=e=>d`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
  background: ${e?"#1f1f1f":"#fff"};
`,$w=e=>d`
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
  color: ${e?"#d1d5db":"#6b7280"};
`,Ui=e=>d`
  margin: 0.25rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
`;function Ew({darkMode:e,userEmail:t,studentId:n}){const[r,i]=y.useState(new Date),[s,l]=y.useState([]),[a,c]=y.useState(!0),[h,g]=y.useState(hn(new Date)),[v,x]=y.useState([]),[E,b]=y.useState(""),[S,T]=y.useState(!1),m=y.useMemo(()=>{const _=new Date;return _.setHours(0,0,0,0),_},[]),p=y.useMemo(()=>{const _=r.getFullYear(),k=r.getMonth();return{from:hn(new Date(_,k,1)),to:hn(new Date(_,k+1,0))}},[r]);y.useEffect(()=>{let _=!0;async function k(){c(!0);try{const le=await(await fetch(`${ka}/backend/timetable.php?from=${encodeURIComponent(p.from)}&to=${encodeURIComponent(p.to)}`)).json();if(!_)return;l(le.success?le.entries||[]:[])}catch{if(!_)return;l([])}finally{_&&c(!1)}}return k(),()=>{_=!1}},[p.from,p.to]),y.useEffect(()=>{let _=!0;async function k(){T(!1);try{const[F,le]=await Promise.all([fetch(`${ka}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ka}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),Se=await F.json(),O=await le.json();if(!_)return;const B=Se.success?Se.students||[]:[],W=O.success?O.courses||[]:[],K=String(t||"").trim().toLowerCase(),q=String(n||"").trim().toUpperCase(),ae=B.find(M=>String(M.email||"").trim().toLowerCase()===K)||B.find(M=>String(M.student_id||"").trim().toUpperCase()===q)||null;if(!ae){x([]),b(""),T(!0);return}b(String(ae.degree||"").trim());const He=W.filter(M=>Array.isArray(M.student_ids)&&M.student_ids.map(gt=>Number(gt)).includes(Number(ae.id))).map(M=>Number(M.id)).filter(M=>Number.isFinite(M)&&M>0),mt=He.length===0?W.filter(M=>String(M.department||"").trim()!==""&&String(M.department||"").trim()===String(ae.department||"").trim()).map(M=>Number(M.id)).filter(M=>Number.isFinite(M)&&M>0):[];x(Array.from(new Set(He.length>0?He:mt)))}catch{if(!_)return;x([]),b("")}finally{_&&T(!0)}}return k(),()=>{_=!1}},[t,n]);const w=y.useMemo(()=>{if(!S)return[];const _=new Set((v||[]).map(k=>Number(k)));return s.filter(k=>{if(k.entry_type!=="class")return!0;const F=Number(k.course_id);return!Number.isFinite(F)||F<=0?!1:_.has(F)})},[s,v,S]),$=y.useMemo(()=>{const _={};for(const k of w)_[k.entry_date]||(_[k.entry_date]=[]),_[k.entry_date].push(k);return Object.keys(_).forEach(k=>_[k].sort((F,le)=>F.start_time.localeCompare(le.start_time))),_},[w]),N=y.useMemo(()=>hw(r),[r]),P=$[h]||[],z=$[hn(m)]||[],R=y.useMemo(()=>w.filter(k=>k.entry_date>hn(m)||k.entry_date===hn(m)&&k.start_time>="00:00:00").sort((k,F)=>`${k.entry_date} ${k.start_time}`.localeCompare(`${F.entry_date} ${F.start_time}`)).slice(0,5),[w,m]),I=r.toLocaleDateString(void 0,{month:"long",year:"numeric"}),U=sp(h).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),re=()=>i(_=>new Date(_.getFullYear(),_.getMonth()-1,1)),We=()=>i(_=>new Date(_.getFullYear(),_.getMonth()+1,1));return u("div",{css:mw,children:[u("div",{css:Pa(e),children:[u("div",{css:gw,children:[o("h2",{css:yw(e),children:I}),u("div",{style:{display:"inline-flex",gap:"0.35rem"},children:[o("button",{type:"button",css:op(e),onClick:re,"aria-label":"Previous month",children:o(Pm,{})}),o("button",{type:"button",css:op(e),onClick:We,"aria-label":"Next month",children:o(Lm,{})})]})]}),u("div",{css:vw,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(_=>o("div",{css:ww(e),children:_},_)),N.map((_,k)=>{if(_.type==="pad")return o("div",{css:lp(e,!1,!1,!0)},`pad-${k}`);const F=hn(_.date),le=F===h,Se=F===hn(m),O=($[F]||[]).length>0;return u("div",{role:"button",tabIndex:0,css:lp(e,le,Se,!1),onClick:()=>g(F),onKeyDown:B=>B.key==="Enter"&&g(F),children:[o("div",{css:xw,children:_.date.getDate()}),O?o("div",{css:Sw(le)}):o("div",{})]},F)})]}),u("h3",{css:bw(e),children:["Events on ",U]}),E?u("p",{css:Ui(e),style:{marginTop:0,marginBottom:"0.5rem"},children:["Showing timetable for degree: ",E]}):null,a||!S?o("p",{css:Ui(e),children:"Loading events..."}):P.length===0?o("p",{css:Ui(e),children:"No events for this date."}):P.map(_=>u("div",{css:ap(e,_.entry_type),children:[o("p",{css:cp,children:_.entry_type==="class"?_.course_name||_.course_code:_.event_title}),u("div",{css:Na(e),children:[u("span",{children:[o(Cn,{}),La(_.start_time)]}),(_.room_location||"").trim()?u("span",{children:[o(pi,{}),_.room_location]}):null]})]},_.id))]}),u("div",{css:Cw,children:[u("div",{css:Pa(e),children:[u("h3",{css:up(e),children:[o(hi,{}),"Today's Schedule"]}),z.length===0?o("p",{css:Ui(e),children:"No classes or events today."}):z.map(_=>u("div",{css:ap(e,_.entry_type),children:[o("p",{css:cp,children:_.entry_type==="class"?_.course_name||_.course_code:_.event_title}),u("div",{css:Na(e),children:[u("span",{children:[o(Cn,{}),La(_.start_time)]}),(_.room_location||"").trim()?u("span",{children:[o(pi,{}),_.room_location]}):null]})]},`today-${_.id}`))]}),u("div",{css:Pa(e),children:[u("h3",{css:up(e),children:[o(Cn,{}),"Upcoming"]}),R.length===0?o("p",{css:Ui(e),children:"No upcoming entries."}):R.map(_=>u("div",{css:_w(e),children:[u("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[o("strong",{style:{fontSize:"0.92rem"},children:_.entry_type==="class"?_.course_name||_.course_code:_.event_title}),o("span",{css:$w(e),children:_.entry_type==="class"?"Lecture":"Event"})]}),u("div",{css:Na(e),style:{marginTop:"0.25rem"},children:[u("span",{children:[o(hi,{}),sp(_.entry_date).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),u("span",{children:[o(Cn,{}),La(_.start_time)]})]})]},`up-${_.id}`))]})]})]})}const kw="(min-width: 768px)",Lw="(max-width: 767.98px)";function td(){const[e,t]=y.useState(!1),n=y.useCallback(()=>t(!1),[]);return y.useEffect(()=>{const r=window.matchMedia(kw),i=()=>{r.matches&&t(!1)};return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),y.useEffect(()=>{const r=window.matchMedia(Lw);if(e&&r.matches){const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}}},[e]),{mobileMenuOpen:e,setMobileMenuOpen:t,closeMenu:n}}const cl="0.35s ease",nd=e=>d`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${cl};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,rd=(e,t)=>d`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition:
    background-color ${cl},
    box-shadow ${cl},
    transform 0.25s ease;

  @media (max-width: 767.98px) {
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    bottom: 0;
    width: min(88vw, 280px);
    height: 100dvh;
    max-height: 100dvh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transform: translateX(${t?"0":"-100%"});
    box-shadow: ${e?"4px 0 28px rgba(0,0,0,0.5)":"4px 0 28px rgba(0,0,0,0.12)"};
  }

  @media (min-width: 768px) {
    position: relative;
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
    transform: none;
    box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  }
`,id=e=>d`
  display: none;
  @media (max-width: 767.98px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 40;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    background: ${e?"rgba(0,0,0,0.55)":"rgba(15,23,42,0.35)"};
  }
`,sd=d`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,od=e=>d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.65rem;
  padding-top: max(0.45rem, env(safe-area-inset-top));
  border-bottom: 1px solid ${e?"#374151":"#e5e7eb"};
  background: ${e?"#1a1a1a":"#ffffff"};
  position: sticky;
  top: 0;
  z-index: 30;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: none;
  }
`,ld=e=>d`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background: ${e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  }
  svg {
    width: 26px;
    height: 26px;
  }
`,ad=e=>d`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#111827"};
  min-width: 0;
`,cd=e=>d`
  display: none;
  @media (max-width: 767.98px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${e?"#e5e7eb":"#1a1a1a"};
    cursor: pointer;
    flex-shrink: 0;
    margin-left: 0.15rem;
    &:hover {
      background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
    }
    svg {
      width: 22px;
      height: 22px;
    }
  }
`,ud=e=>d`
  flex: 1;
  min-height: 0;
  min-width: 0;
  padding: 0.65rem max(0.75rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(0.75rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  overflow-x: hidden;
  transition: color ${cl};

  @media (min-width: 768px) {
    padding: max(1rem, env(safe-area-inset-top)) 2rem 2rem 2rem;
  }
`,Pw="/strack/".replace(/\/$/,""),Yt="0.35s ease",Nw=d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,zw=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Tw=e=>d`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Yt};
  }
`,Dw=e=>d`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Yt};
`,dp=e=>d`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e?"#ffffff":"#1a1a1a"};
  border-radius: 8px;
  flex-shrink: 0;
  transition: color ${Yt};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,Ow=d`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,jw=d`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
`,Rw=d`
  flex: 1;
  min-width: 0;
`,Iw=e=>d`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Yt};
`,Aw=e=>d`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Yt};
`,Fw=e=>d`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${Yt};
`,Bw=d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,Uw=e=>d`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${Yt};
`,Ww=e=>d`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${Yt};
`,Hw=d`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Vw=(e,t)=>d`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${t?e?"rgba(124, 58, 237, 0.4)":"#7c3aed":"transparent"};
  color: ${t?"#fff":e?"#d1d5db":"#1a1a1a"};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${Yt}, color ${Yt};

  &:hover {
    background: ${t?e?"rgba(124, 58, 237, 0.5)":"#6d28d9":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,Qw=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin-top: auto;
  background: rgba(192, 57, 43, 0.08);
  border: 1px solid rgba(192, 57, 43, 0.35);
  color: #c0392b;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 10px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(192, 57, 43, 0.15);
    border-color: rgba(192, 57, 43, 0.5);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,Kw=(e,t,n)=>d`
  max-width: ${n?"min(100%, 1280px)":t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,fo=d`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,po=d`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Yw=[{id:"dashboard",label:"Dashboard",icon:Ul},{id:"courses",label:"Courses",icon:On},{id:"calendar",label:"Calendar",icon:hi},{id:"leaderboard",label:"Leaderboard",icon:Ju},{id:"badges",label:"Badges",icon:sl},{id:"rewards",label:"Rewards",icon:Zu},{id:"profile",label:"Profile",icon:ui}];function fp(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Zw(e){const t=String(e||"").trim();if(/^STU/i.test(t))return t.toUpperCase();if(/^s\d+$/i.test(t)){const n=Number(t.slice(1));if(Number.isFinite(n))return`STU${String(n).padStart(3,"0")}`}return/^\d+$/.test(t)?`STU${String(Number(t)).padStart(3,"0")}`:"STU001"}function pp(e){return`strack_profile_extra_${(e||"").toLowerCase()}`}function hp(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function Jw({darkMode:e,onToggleDarkMode:t}){const n=As(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:s}=td(),[l,a]=y.useState("dashboard"),[c,h]=y.useState(0),[g,v]=y.useState(""),[x,E]=y.useState("STU001"),[b,S]=y.useState(!1),[T,m]=y.useState(""),[p,w]=y.useState({phone:"+44 7700 900123",address:"123 University Avenue, Newcastle",bio:"Computer Science student passionate about software development."}),[$,N]=y.useState(p);let P="Student";try{const _=localStorage.getItem("strack_user");if(_){const k=JSON.parse(_);k!=null&&k.name&&(P=k.name)}}catch{}y.useEffect(()=>{try{const _=localStorage.getItem("strack_user");if(_){const k=JSON.parse(_);k!=null&&k.email&&v(k.email),k!=null&&k.id&&E(Zw(k.id))}}catch{}},[]),y.useEffect(()=>{if(g)try{const _=localStorage.getItem(pp(g));if(!_)return;const k=JSON.parse(_),F={phone:hp(k==null?void 0:k.phone),address:String((k==null?void 0:k.address)||p.address),bio:String((k==null?void 0:k.bio)||p.bio)};w(F),N(F)}catch{}},[g]);const z=y.useCallback(async()=>{if(g)try{const k=await(await fetch(`${Pw}/backend/student_points.php?email=${encodeURIComponent(g)}`,{cache:"no-store"})).json();k.success&&typeof k.points=="number"&&h(k.points)}catch{}},[g]);y.useEffect(()=>{z()},[z]);const R=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},I=()=>{N(p),m(""),S(!0)},U=()=>{N(p),m(""),S(!1)},re=()=>{const _=hp($.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(_.replace(/\s+/g," "))){m("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const F={phone:_,address:($.address||"").trim()||p.address,bio:($.bio||"").trim()||p.bio};w(F),N(F),m(""),S(!1);try{localStorage.setItem(pp(g),JSON.stringify(F))}catch{}},We=_=>{a(_),s()};return u("div",{css:nd(e),children:[r?o("button",{type:"button",css:id(e),onClick:s,"aria-label":"Close menu"}):null,u("aside",{css:rd(e,r),children:[u("header",{css:Nw,children:[u("div",{css:zw,children:[o("div",{css:Tw(e),children:o(Ps,{})}),o("span",{css:Dw(e),children:"Strack"})]}),u("div",{css:d`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[o("button",{type:"button",css:dp(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?o(di,{}):o(fi,{})}),o("button",{type:"button",css:cd(e),onClick:s,"aria-label":"Close menu",children:o(Ft,{})})]})]}),u("div",{css:Ow,children:[o("div",{css:jw,children:fp(P)}),u("div",{css:Rw,children:[o("div",{css:Iw(e),children:P}),o("div",{css:Aw(e),children:"Student"})]})]}),o("div",{css:Fw(e),children:u("div",{css:Bw,children:[u("span",{css:Uw(e),children:[o(Cn,{})," Points"]}),o("span",{css:Ww(e),children:c})]})}),o("nav",{css:Hw,children:Yw.map(({id:_,label:k,icon:F})=>u("button",{css:Vw(e,l===_),onClick:()=>We(_),children:[o(F,{}),k]},_))}),u("button",{css:Qw,onClick:R,children:[o(Xu,{}),"Logout"]})]}),u("div",{css:sd,children:[u("header",{css:od(e),children:[o("button",{type:"button",css:ld(e),onClick:()=>i(!0),"aria-label":"Open menu",children:o(Gu,{})}),o("span",{css:ad(e),children:"Strack"}),o("button",{type:"button",css:dp(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?o(di,{}):o(fi,{})})]}),o("main",{css:ud(e),children:l==="rewards"?o(sw,{darkMode:e,userEmail:g,points:c,onPointsChange:h}):u("div",{css:Kw(e,l==="profile",l==="calendar"),children:[l==="dashboard"&&u(De,{children:[o("h1",{css:fo,children:"Dashboard"}),o("p",{css:po,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),l==="courses"&&u(De,{children:[o("h1",{css:fo,children:"Courses"}),o("p",{css:po,children:"This is the courses page. View your enrolled courses, materials, and grades here."})]}),l==="calendar"&&o(Ew,{darkMode:e,userEmail:g,studentId:x}),l==="leaderboard"&&u(De,{children:[o("h1",{css:fo,children:"Leaderboard"}),o("p",{css:po,children:"This is the leaderboard page. See how you rank against other students and track your position."})]}),l==="badges"&&u(De,{children:[o("h1",{css:fo,children:"Badges"}),o("p",{css:po,children:"This is the badges page. View and collect achievement badges earned from your activities."})]}),l==="profile"&&u("div",{css:zm(e),children:[u("header",{css:Tm,children:[o("h1",{css:Dm(e),children:"My Profile"}),o("p",{css:Om(e),children:"Manage your personal information and account details."})]}),o("section",{css:jm(e),children:u("div",{css:Rm,children:[u("div",{css:Im,children:[o("div",{css:Fm,children:fp(P)}),u("div",{css:Am,children:[o("h2",{css:Bm,children:P}),u("div",{css:ol(e),children:["Student ID: ",x]}),o("div",{css:ol(e),children:"Computer Science"}),u("div",{css:Um,children:[o("span",{css:Wm,children:"Student"}),o("span",{css:Hm(e),children:"Undergraduate"})]})]})]}),b?null:u("button",{type:"button",css:Vm,onClick:I,children:[o(wn,{"aria-hidden":!0}),"Edit Profile"]})]})}),u("section",{css:ow,"aria-label":"Profile statistics",children:[u("article",{css:er(e),children:[u("div",{css:tr,children:[o(Zu,{"aria-hidden":!0}),o("span",{css:nr,children:"Points"})]}),o("div",{css:rr,children:c}),o("div",{css:ir(e),children:"Total earned"})]}),u("article",{css:er(e),children:[u("div",{css:tr,children:[o(sl,{"aria-hidden":!0}),o("span",{css:nr,children:"Badges"})]}),o("div",{css:rr,children:"3"}),o("div",{css:ir(e),children:"Achievements"})]}),u("article",{css:er(e),children:[u("div",{css:tr,children:[o(On,{"aria-hidden":!0}),o("span",{css:nr,children:"Courses"})]}),o("div",{css:rr,children:"6"}),o("div",{css:ir(e),children:"Enrolled"})]}),u("article",{css:er(e),children:[u("div",{css:tr,children:[o(Ju,{"aria-hidden":!0}),o("span",{css:nr,children:"Rank"})]}),o("div",{css:rr,children:"#3"}),o("div",{css:ir(e),children:"Leaderboard"})]})]}),u("section",{css:qu(e),children:[o("h2",{css:Mu(e),children:"Personal Information"}),u("div",{css:Qm,children:[u("div",{css:et,children:[o("span",{css:tt,children:"Full Name"}),b?o("input",{css:ll(e),value:P,readOnly:!0,"aria-readonly":"true"}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(ui,{"aria-hidden":!0})}),o("span",{css:Tt,children:P})]})]}),u("div",{css:et,children:[o("span",{css:tt,children:"Email Address"}),b?o("input",{css:ll(e),value:g||"student@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(Em,{"aria-hidden":!0})}),o("span",{css:Tt,children:g||"student@uni.ac.uk"})]})]}),u("div",{css:et,children:[o("span",{css:tt,children:"Phone Number"}),b?o("input",{css:Kt(e),value:$.phone,onChange:_=>N(k=>({...k,phone:_.target.value})),placeholder:"+44 7700 900123"}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o($m,{"aria-hidden":!0})}),o("span",{css:Tt,children:p.phone})]})]}),u("div",{css:et,children:[o("span",{css:tt,children:"Address"}),b?o("input",{css:Kt(e),value:$.address,onChange:_=>N(k=>({...k,address:_.target.value}))}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(pi,{"aria-hidden":!0})}),o("span",{css:Tt,children:p.address})]})]}),u("div",{css:[et,Km],children:[o("span",{css:tt,children:"Bio"}),b?o("textarea",{css:Ym(e),value:$.bio,onChange:_=>N(k=>({...k,bio:_.target.value}))}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(km,{"aria-hidden":!0})}),o("span",{css:Tt,children:p.bio})]})]})]}),b?u("div",{css:Zm(e),children:[o("button",{type:"button",css:Ns(!0),onClick:re,children:"Save"}),o("button",{type:"button",css:Ns(!1),onClick:U,children:"Cancel"})]}):null,T?o("div",{css:ed(e),children:T}):null]}),o(Jm,{darkMode:e,userEmail:g})]})]})})]})]})}const mp="/strack/".replace(/\/$/,""),pr="0.35s ease",Gw=d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Xw=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,qw=e=>d`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${pr};
  }
`,Mw=e=>d`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${pr};
`,gp=e=>d`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e?"#ffffff":"#1a1a1a"};
  border-radius: 8px;
  flex-shrink: 0;
  transition: color ${pr};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,ex=d`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,tx=d`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
`,nx=d`
  flex: 1;
  min-width: 0;
`,rx=e=>d`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${pr};
`,ix=e=>d`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${pr};
`,sx=d`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ox=(e,t)=>d`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${t?e?"rgba(124, 58, 237, 0.4)":"#7c3aed":"transparent"};
  color: ${t?"#fff":e?"#d1d5db":"#1a1a1a"};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${pr}, color ${pr};

  &:hover {
    background: ${t?e?"rgba(124, 58, 237, 0.5)":"#6d28d9":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,lx=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin-top: auto;
  background: rgba(192, 57, 43, 0.08);
  border: 1px solid rgba(192, 57, 43, 0.35);
  color: #c0392b;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 10px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(192, 57, 43, 0.15);
    border-color: rgba(192, 57, 43, 0.5);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,ax=(e,t)=>d`
  max-width: ${t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,Cr=d`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,_r=d`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,cx=[{id:"dashboard",label:"Dashboard",icon:Ul},{id:"students",label:"Students",icon:Mn},{id:"attendance",label:"Attendance",icon:E5},{id:"performance",label:"Performance",icon:Ju},{id:"courses",label:"Courses",icon:On},{id:"calendar",label:"Calendar",icon:hi},{id:"profile",label:"Profile",icon:ui}];function yp(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function vp(e){return`strack_lecturer_profile_extra_${(e||"").toLowerCase()}`}function wp(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function ux({darkMode:e,onToggleDarkMode:t}){const n=As(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:s}=td(),[l,a]=y.useState("dashboard"),[c,h]=y.useState(""),[g,v]=y.useState(""),[x,E]=y.useState(""),[b,S]=y.useState(!1),[T,m]=y.useState(""),[p,w]=y.useState({phone:"+44 7700 900123",office:"Building A, Room 305",address:"123 University Avenue, Newcastle upon Tyne",bio:"Computer Science lecturer focused on software engineering and student success."}),[$,N]=y.useState(p);let P="Lecturer";try{const _=localStorage.getItem("strack_user");if(_){const k=JSON.parse(_);k!=null&&k.name&&(P=k.name)}}catch{}y.useEffect(()=>{try{const _=localStorage.getItem("strack_user");if(_){const k=JSON.parse(_);k!=null&&k.email&&h(k.email);const F=typeof(k==null?void 0:k.department)=="string"?k.department.trim():"",le=typeof(k==null?void 0:k.department_code)=="string"?k.department_code.trim():"";F&&v(F),le&&E(le)}}catch{}},[]);const z=y.useCallback(async()=>{if(c)try{const[_,k]=await Promise.all([fetch(`${mp}/backend/lecturers.php`,{cache:"no-store"}),fetch(`${mp}/backend/departments.php`,{cache:"no-store"})]),F=await _.json(),le=await k.json(),Se=F.success?F.lecturers||[]:[],O=c.toLowerCase().trim(),B=Se.find(ae=>String(ae.email||"").toLowerCase().trim()===O),W=(B==null?void 0:B.department)!=null?String(B.department).trim():"";if(!W)return;const q=(le.success?le.departments||[]:[]).find(ae=>String(ae.name||"").trim()===W||String(ae.code||"").trim()===W||String(ae.name||"").trim().toLowerCase()===W.toLowerCase()||String(ae.code||"").trim().toLowerCase()===W.toLowerCase());q?(v(String(q.name||W).trim()),E(String(q.code||"").trim())):(v(W),E(""))}catch{}},[c]);y.useEffect(()=>{z()},[z]),y.useEffect(()=>{if(c)try{const _=localStorage.getItem(vp(c));if(!_)return;const k=JSON.parse(_),F={phone:wp(k==null?void 0:k.phone),office:String((k==null?void 0:k.office)||p.office),address:String((k==null?void 0:k.address)||p.address),bio:String((k==null?void 0:k.bio)||p.bio)};w(F),N(F)}catch{}},[c]);const R=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},I=_=>{a(_),s()},U=()=>{N(p),m(""),S(!0)},re=()=>{N(p),m(""),S(!1)},We=()=>{const _=wp($.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(_.replace(/\s+/g," "))){m("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const F={phone:_,office:($.office||"").trim()||p.office,address:($.address||"").trim()||p.address,bio:($.bio||"").trim()||p.bio};w(F),N(F),m(""),S(!1);try{localStorage.setItem(vp(c),JSON.stringify(F))}catch{}};return u("div",{css:nd(e),children:[r?o("button",{type:"button",css:id(e),onClick:s,"aria-label":"Close menu"}):null,u("aside",{css:rd(e,r),children:[u("header",{css:Gw,children:[u("div",{css:Xw,children:[o("div",{css:qw(e),children:o(Ps,{})}),o("span",{css:Mw(e),children:"Strack"})]}),u("div",{css:d`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[o("button",{type:"button",css:gp(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?o(di,{}):o(fi,{})}),o("button",{type:"button",css:cd(e),onClick:s,"aria-label":"Close menu",children:o(Ft,{})})]})]}),u("div",{css:ex,children:[o("div",{css:tx,children:yp(P)}),u("div",{css:nx,children:[o("div",{css:rx(e),children:P}),o("div",{css:ix(e),children:"Lecturer"})]})]}),o("nav",{css:sx,children:cx.map(({id:_,label:k,icon:F})=>u("button",{type:"button",css:ox(e,l===_),onClick:()=>I(_),children:[o(F,{}),k]},_))}),u("button",{type:"button",css:lx,onClick:R,children:[o(Xu,{}),"Logout"]})]}),u("div",{css:sd,children:[u("header",{css:od(e),children:[o("button",{type:"button",css:ld(e),onClick:()=>i(!0),"aria-label":"Open menu",children:o(Gu,{})}),o("span",{css:ad(e),children:"Strack"}),o("button",{type:"button",css:gp(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?o(di,{}):o(fi,{})})]}),o("main",{css:ud(e),children:u("div",{css:ax(e,l==="profile"),children:[l==="dashboard"&&u(De,{children:[o("h1",{css:Cr,children:"Dashboard"}),o("p",{css:_r,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),l==="students"&&u(De,{children:[o("h1",{css:Cr,children:"Students"}),o("p",{css:_r,children:"This is the students page. View your class lists and student details here."})]}),l==="attendance"&&u(De,{children:[o("h1",{css:Cr,children:"Attendance"}),o("p",{css:_r,children:"This is the attendance page. Mark and view student attendance for your classes here."})]}),l==="performance"&&u(De,{children:[o("h1",{css:Cr,children:"Performance"}),o("p",{css:_r,children:"This is the performance page. View and analyse student performance and grades here."})]}),l==="courses"&&u(De,{children:[o("h1",{css:Cr,children:"Courses"}),o("p",{css:_r,children:"This is the courses page. Manage your courses, materials, and class lists here."})]}),l==="calendar"&&u(De,{children:[o("h1",{css:Cr,children:"Calendar"}),o("p",{css:_r,children:"This is the calendar page. View your teaching schedule, deadlines, and important dates here."})]}),l==="profile"&&u("div",{css:zm(e),children:[u("header",{css:Tm,children:[o("h1",{css:Dm(e),children:"My Profile"}),o("p",{css:Om(e),children:"Manage your personal information and teaching profile."})]}),o("section",{css:jm(e),children:u("div",{css:Rm,children:[u("div",{css:Im,children:[o("div",{css:Fm,children:yp(P)}),u("div",{css:Am,children:[o("h2",{css:Bm,children:P}),u("div",{css:ol(e),children:["Department: ",g||"—"]}),u("div",{css:ol(e),children:["Department code: ",x||"—"]}),u("div",{css:Um,children:[o("span",{css:Wm,children:"Lecturer"}),o("span",{css:Hm(e),children:"2 Courses"})]})]})]}),b?null:u("button",{type:"button",css:Vm,onClick:U,children:[o(wn,{"aria-hidden":!0}),"Edit Profile"]})]})}),u("section",{css:lw,"aria-label":"Teaching statistics",children:[u("article",{css:er(e),children:[u("div",{css:tr,children:[o(On,{"aria-hidden":!0}),o("span",{css:nr,children:"Courses"})]}),o("div",{css:rr,children:"2"}),o("div",{css:ir(e),children:"Active courses"})]}),u("article",{css:er(e),children:[u("div",{css:tr,children:[o(Mn,{"aria-hidden":!0}),o("span",{css:nr,children:"Students"})]}),o("div",{css:rr,children:"156"}),o("div",{css:ir(e),children:"Total enrolled"})]}),u("article",{css:er(e),children:[u("div",{css:tr,children:[o(Cn,{"aria-hidden":!0}),o("span",{css:nr,children:"Hours / week"})]}),o("div",{css:rr,children:"18"}),o("div",{css:ir(e),children:"Teaching hours"})]})]}),u("section",{css:qu(e),children:[o("h2",{css:Mu(e),children:"Personal Information"}),u("div",{css:Qm,children:[u("div",{css:et,children:[o("span",{css:tt,children:"Full Name"}),b?o("input",{css:ll(e),value:P,readOnly:!0,"aria-readonly":"true"}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(ui,{"aria-hidden":!0})}),o("span",{css:Tt,children:P})]})]}),u("div",{css:et,children:[o("span",{css:tt,children:"Email Address"}),b?o("input",{css:ll(e),value:c||"lecturer@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(Em,{"aria-hidden":!0})}),o("span",{css:Tt,children:c||"lecturer@uni.ac.uk"})]})]}),u("div",{css:et,children:[o("span",{css:tt,children:"Phone Number"}),b?o("input",{css:Kt(e),value:$.phone,onChange:_=>N(k=>({...k,phone:_.target.value})),placeholder:"+44 7700 900123"}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o($m,{"aria-hidden":!0})}),o("span",{css:Tt,children:p.phone})]})]}),u("div",{css:et,children:[o("span",{css:tt,children:"Office Location"}),b?o("input",{css:Kt(e),value:$.office,onChange:_=>N(k=>({...k,office:_.target.value}))}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(k5,{"aria-hidden":!0})}),o("span",{css:Tt,children:p.office})]})]}),u("div",{css:[et,aw],children:[o("span",{css:tt,children:"Address"}),b?o("input",{css:Kt(e),value:$.address,onChange:_=>N(k=>({...k,address:_.target.value}))}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(pi,{"aria-hidden":!0})}),o("span",{css:Tt,children:p.address})]})]}),u("div",{css:[et,Km],children:[o("span",{css:tt,children:"Bio"}),b?o("textarea",{css:Ym(e),value:$.bio,onChange:_=>N(k=>({...k,bio:_.target.value}))}):u("div",{css:Nt(e),children:[o("span",{css:zt,children:o(km,{"aria-hidden":!0})}),o("span",{css:Tt,children:p.bio})]})]})]}),b?u("div",{css:Zm(e),children:[o("button",{type:"button",css:Ns(!0),onClick:We,children:"Save"}),o("button",{type:"button",css:Ns(!1),onClick:re,children:"Cancel"})]}):null,T?o("div",{css:ed(e),children:T}):null]}),o(Jm,{darkMode:e,userEmail:c})]})]})})]})]})}const $r="/strack",Uc="0.35s ease",Us="#7c3aed",dd="#6d28d9",za=[{bar:"#2563eb",bg:"rgba(37, 99, 235, 0.12)"},{bar:"#7c3aed",bg:"rgba(124, 58, 237, 0.12)"},{bar:"#db2777",bg:"rgba(219, 39, 119, 0.12)"},{bar:"#059669",bg:"rgba(5, 150, 105, 0.12)"},{bar:"#ea580c",bg:"rgba(234, 88, 12, 0.12)"}];function wt(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function xp(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function dx(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Wc(e){const t=new Date(e);t.setHours(0,0,0,0);const n=t.getDay(),r=n===0?-6:1-n;return t.setDate(t.getDate()+r),t}function Bn(e){if(!e)return"";const t=e.split(":");return`${t[0]}:${t[1]}`}function Sp(e){const t=e.split(":").map(Number);return t[0]*60+(t[1]||0)}function Ta(e){const t=e.entry_type==="class"&&e.course_code?e.course_code:`${e.entry_type}-${e.id}-${e.event_title||""}`;let n=0;for(let r=0;r<t.length;r++)n=(n+t.charCodeAt(r)*(r+1))%1e5;return Math.abs(n)%5}function ho(e){return e.entry_type==="event"?e.event_title||"School event":e.course_code||"Class"}function Da(e,t){if(!e)return[];const n=(e.lecturer_id||"").toString().trim();if(!n)return[];const r=n.toLowerCase();return t.filter(i=>(i.lecturer_id||"").toString().trim().toLowerCase()===r)}function fx(e,t){if(e==="monthly"){const i=t.getFullYear(),s=t.getMonth(),l=new Date(i,s,1),a=new Date(i,s+1,0);return{from:wt(l),to:wt(a)}}const n=Wc(t),r=new Date(n);return r.setDate(r.getDate()+6),{from:wt(n),to:wt(r)}}const Oa=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],px=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hx=d`
  width: 100%;
`,mx=d`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,gx=d`
  flex: 1;
  min-width: 0;
`,yx=d`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,vx=e=>d`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};
  margin: 0;
  transition: color ${Uc};
`,wx=d`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`,xx=e=>d`
  display: inline-flex;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  overflow: hidden;
  background: ${e?"#262626":"#fff"};
`,ja=(e,t)=>d`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  cursor: pointer;
  background: ${t?Us:"transparent"};
  color: ${t?"#fff":e?"#e5e7eb":"#1a1a1a"};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${t?dd:e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"};
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    flex-shrink: 0;
  }
`,Sx=d`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: ${Us};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${dd};
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }
`,bx=e=>d`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;
  justify-content: space-between;
  transition: background ${Uc}, border-color ${Uc};
`,bp=d`
  flex: 1;
  min-width: 160px;
`,vt=e=>d`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
`,mo=e=>d`
  width: 100%;
  padding: 0.55rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${e?"#1a1a1a":"#fff"};
  color: inherit;
  box-sizing: border-box;
`,Cx=d`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
`,Cp=e=>d`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1a1a1a":"#fff"};
  color: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${e?"rgba(255,255,255,0.06)":"#f9fafb"};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,_x=e=>d`
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1a1a1a":"#fff"};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: inherit;

  &:hover {
    background: ${e?"rgba(255,255,255,0.06)":"#f9fafb"};
  }
`,$x=e=>d`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e?"#e5e7eb":"#111827"};
  min-width: 140px;
  text-align: center;
`,Ex=e=>d`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.5rem;
  background: ${e?"#1a1a1a":"#f3f4f6"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  padding: 0.75rem;
`,kx=e=>d`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.25rem;
`,_p=(e,t,n)=>d`
  min-height: 104px;
  background: ${t?e?"#141414":"#f9fafb":n?e?"rgba(124, 58, 237, 0.16)":"rgba(124, 58, 237, 0.10)":e?"#262626":"#fff"};
  border: 1px solid
    ${n?e?"rgba(167,139,250,0.65)":"rgba(124,58,237,0.45)":e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.4rem 0.45rem;
  cursor: ${t?"default":"pointer"};
  transition: box-shadow 0.15s, border-color 0.15s, background 0.2s;

  &:hover {
    box-shadow: ${t?"none":e?"0 0 0 1px rgba(167,139,250,0.4)":"0 0 0 1px rgba(124,58,237,0.25)"};
  }
`,Lx=(e,t)=>d`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${t?e?"#e9d5ff":"#6d28d9":e?"#f3f4f6":"#111827"};
`,Px=e=>d`
  font-size: 0.7rem;
  color: ${"#9ca3af"};
  margin-bottom: 0.35rem;
`,Nx=d`
  font-size: 0.72rem;
  color: #9ca3af;
  font-style: italic;
  margin-top: 0.25rem;
`,zx=e=>d`
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.2rem 0.35rem;
  border-radius: 4px;
  margin-bottom: 0.2rem;
  background: ${e};
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  svg {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
  }
`,Tx=e=>d`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  overflow: auto;
  background: ${e?"#1a1a1a":"#fff"};
`,Dx=d`
  display: flex;
  min-width: 720px;
`,Ox=e=>d`
  width: 56px;
  flex-shrink: 0;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,jx=(e,t)=>d`
  flex: 1;
  min-width: 92px;
  text-align: center;
  padding: 0.55rem 0.3rem;
  font-size: 0.78rem;
  font-weight: 700;
  border-left: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  border-bottom: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${t?e?"rgba(124,58,237,0.24)":"rgba(124,58,237,0.10)":e?"#262626":"#f9fafb"};
`,Rx=d`
  display: flex;
  min-width: 720px;
`,Ix=e=>d`
  width: 56px;
  flex-shrink: 0;
  height: ${Gm}px;
  border-right: 1px solid ${e?"#404040":"#e5e7eb"};
  position: relative;
`,Ax=e=>d`
  position: absolute;
  left: 0;
  right: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  text-align: right;
  transform: translateY(-0.45rem);
`,Fx=(e,t)=>d`
  flex: 1;
  min-width: 92px;
  height: ${Gm}px;
  position: relative;
  border-left: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${t?e?"repeating-linear-gradient(to bottom, rgba(124,58,237,0.16) 0, rgba(124,58,237,0.16) 47px, #5b21b6 47px, #5b21b6 48px)":"repeating-linear-gradient(to bottom, rgba(124,58,237,0.06) 0, rgba(124,58,237,0.06) 47px, #ddd6fe 47px, #ddd6fe 48px)":e?"repeating-linear-gradient(to bottom, #1a1a1a 0, #1a1a1a 47px, #333 47px, #333 48px)":"repeating-linear-gradient(to bottom, #fff 0, #fff 47px, #f3f4f6 47px, #f3f4f6 48px)"};
`,Bx=(e,t,n,r,i)=>d`
  position: absolute;
  left: 4px;
  right: 4px;
  top: ${t}px;
  height: ${n}px;
  background: ${i};
  border-left: 3px solid ${r};
  border-radius: 8px;
  padding: 0.3rem 0.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${e?"#f3f4f6":"#111827"};
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
`,Ux=e=>d`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
`,Wx=(e,t)=>d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  font-weight: 700;
  font-size: 0.95rem;
  background: ${t?e?"rgba(124,58,237,0.18)":"rgba(124,58,237,0.08)":"transparent"};

  svg {
    width: 20px;
    height: 20px;
    color: ${Us};
  }
`,Hx=e=>d`
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
`,Vx=e=>d`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: ${e?"#7c3aed":"#ede9fe"};
  color: ${e?"#fff":"#5b21b6"};
`,Qx=(e,t)=>d`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  &:last-of-type {
    border-bottom: none;
  }

  &::before {
    content: '';
    width: 4px;
    flex-shrink: 0;
    background: ${t};
  }
`,Kx=d`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  min-width: 0;
`,Yx=e=>d`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
  margin-left: 0.35rem;
  vertical-align: middle;
`,Zx=e=>d`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.35rem;
  font-size: 0.82rem;
  color: ${e?"#9ca3af":"#6b7280"};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`,Jx=d`
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
`,Ra=(e,t)=>d`
  padding: 0.4rem;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: ${t?"#dc2626":e?"#9ca3af":"#6b7280"};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${t?"rgba(220,38,38,0.12)":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
    color: ${t?"#b91c1c":e?"#fff":"#111"};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,Gx=d`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Xx=e=>d`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
`,qx=e=>d`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
`,Mx=e=>d`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${e?"#fff":"#111"};
`,$p=e=>d`
  margin: 0.35rem 0 0 0;
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,e4=d`
  padding: 1.25rem 1.5rem;
`,t4=e=>d`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid ${e?"#404040":"#f3f4f6"};
`,n4=d`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`,r4=d`
  padding: 0.5rem 1.1rem;
  border: none;
  border-radius: 8px;
  background: ${Us};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${dd};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,i4=e=>d`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background: ${e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"};
  }
`,It=d`
  margin-bottom: 1rem;
`,Zn=e=>d`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${Us};
  }
`,s4=e=>d`
  ${Zn(e)}
  min-height: 88px;
  resize: vertical;
`,o4=d`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`,l4=e=>d`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem;
  max-height: 160px;
  overflow: auto;
`,a4=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.25rem;
  font-size: 0.88rem;
`,Ep=e=>d`
  padding: 2rem;
  text-align: center;
  color: ${e?"#9ca3af":"#6b7280"};
`,os=8,fd=18,ul=48,Gm=(fd-os)*ul;function c4(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),s=r.getDay(),l=i.getDate(),a=[];for(let c=0;c<s;c++)a.push({type:"pad",date:null});for(let c=1;c<=l;c++)a.push({type:"day",date:new Date(t,n,c)});for(;a.length%7!==0;)a.push({type:"pad",date:null});return a}function u4(e){const t=Sp(e.start_time),n=Sp(e.end_time),r=os*60,i=fd*60;if(n<=r||t>=i)return null;const s=Math.max(t,r),l=Math.min(n,i),a=(s-r)/60*ul,c=Math.max((l-s)/60*ul,28);return{top:a,height:c}}function d4({darkMode:e}){const[t,n]=y.useState("monthly"),[r,i]=y.useState(()=>new Date),[s,l]=y.useState(""),[a,c]=y.useState(""),[h,g]=y.useState([]),[v,x]=y.useState(!0),[E,b]=y.useState([]),[S,T]=y.useState([]),[m,p]=y.useState([]),[w,$]=y.useState(!1),[N,P]=y.useState(null),[z,R]=y.useState(!1),[I,U]=y.useState({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:"",start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),re=r.getTime(),{from:We,to:_}=y.useMemo(()=>fx(t,r),[t,re]),k=y.useCallback(async()=>{try{const[C,j,H]=await Promise.all([fetch(`${$r}/backend/courses.php`),fetch(`${$r}/backend/lecturers.php`),fetch(`${$r}/backend/departments.php`)]),ie=await C.json(),fe=await j.json(),Z=await H.json();ie.success&&b(ie.courses||[]),fe.success&&T(fe.lecturers||[]),Z.success&&p(Z.departments||[])}catch{b([]),T([]),p([])}},[]),F=y.useCallback(async()=>{x(!0);try{const j=await(await fetch(`${$r}/backend/timetable.php?from=${encodeURIComponent(We)}&to=${encodeURIComponent(_)}`,{cache:"no-store"})).json();j.success?g(j.entries||[]):g([])}catch{g([])}finally{x(!1)}},[We,_]);y.useEffect(()=>{k()},[k]),y.useEffect(()=>{F()},[F]);const le=y.useMemo(()=>h.filter(C=>{if(s&&!(C.department&&C.department===s||C.lecturers&&C.lecturers.some(H=>H.department===s)))return!1;if(a){const j=parseInt(a,10);if(!(C.lecturers&&C.lecturers.some(ie=>ie.id===j)))return!1}return!0}),[h,s,a]),Se=y.useMemo(()=>{const C=new Set(m.map(j=>j.name).filter(Boolean));return E.forEach(j=>{j.department&&C.add(j.department)}),Array.from(C).sort()},[m,E]),O=y.useMemo(()=>I.course_id?E.find(C=>String(C.id)===String(I.course_id)):null,[E,I.course_id]),B=y.useMemo(()=>Da(O,S),[O,S]),W=y.useMemo(()=>{if(t==="monthly")return r.toLocaleString(void 0,{month:"long",year:"numeric"});const C=Wc(r),j=new Date(C);return j.setDate(j.getDate()+6),`${wt(C).replace(/-/g,"/")} – ${wt(j).replace(/-/g,"/")}`},[t,re]),K=C=>{P(null);const j=wt(C||new Date);U({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:j,start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),$(!0)},q=C=>{P(C.id);const j=C.entry_type==="class"&&C.course_id?E.find(fe=>Number(fe.id)===Number(C.course_id)):null,H=new Set(Da(j,S).map(fe=>fe.id)),ie=C.entry_type==="class"?(C.lecturers||[]).map(fe=>fe.id).filter(fe=>H.has(fe)):[];U({entry_type:C.entry_type,course_id:C.course_id?String(C.course_id):"",event_title:C.event_title||"",event_description:C.event_description||"",entry_date:C.entry_date,start_time:Bn(C.start_time),end_time:Bn(C.end_time),room_location:C.room_location||"",lecturer_ids:ie}),$(!0)},ae=()=>$(!1),He=C=>{U(j=>{const H=new Set(j.lecturer_ids);return H.has(C)?H.delete(C):H.add(C),{...j,lecturer_ids:Array.from(H)}})},mt=async()=>{const C={entry_type:I.entry_type,course_id:I.entry_type==="class"?parseInt(I.course_id,10):0,event_title:I.event_title,event_description:I.event_description,entry_date:I.entry_date,start_time:I.start_time,end_time:I.end_time,room_location:I.room_location,lecturer_account_ids:I.entry_type==="class"?I.lecturer_ids:[]};if(I.entry_type==="class"&&!C.course_id){window.alert("Please select a module.");return}if(I.entry_type==="event"&&!C.event_title.trim()){window.alert("Please enter an event title.");return}R(!0);try{const j=`${$r}/backend/timetable.php`,H=N?{method:"PUT",body:JSON.stringify({id:N,...C})}:{method:"POST",body:JSON.stringify(C)},fe=await(await fetch(j,{...H,headers:{"Content-Type":"application/json"}})).json();if(!fe.success){window.alert(fe.error||"Could not save.");return}ae(),F()}catch{window.alert("Network error.")}finally{R(!1)}},M=async C=>{if(window.confirm("Delete this timetable entry?"))try{const H=await(await fetch(`${$r}/backend/timetable.php?id=${C.id}`,{method:"DELETE"})).json();if(!H.success){window.alert(H.error||"Could not delete.");return}F()}catch{window.alert("Network error.")}},gt=()=>i(new Date),Ws=()=>{i(t==="monthly"?C=>new Date(C.getFullYear(),C.getMonth()-1,1):C=>{const j=new Date(C);return j.setDate(j.getDate()-7),j})},ln=()=>{i(t==="monthly"?C=>new Date(C.getFullYear(),C.getMonth()+1,1):C=>{const j=new Date(C);return j.setDate(j.getDate()+7),j})},Wl=I.entry_date?px[xp(I.entry_date).getDay()]:"",Hs=y.useMemo(()=>{const C=new Date;return C.setHours(0,0,0,0),C},[]),An=wt(Hs),an=y.useMemo(()=>c4(r),[re,t]),cn=y.useMemo(()=>{const C={};return le.forEach(j=>{C[j.entry_date]||(C[j.entry_date]=[]),C[j.entry_date].push(j)}),Object.keys(C).forEach(j=>C[j].sort((H,ie)=>H.start_time.localeCompare(ie.start_time))),C},[le]),un=y.useMemo(()=>Object.keys(cn).sort().map(j=>({date:j,items:cn[j]})),[cn]),dn=Wc(r),Si=Array.from({length:7},(C,j)=>{const H=new Date(dn);return H.setDate(H.getDate()+j),H}),Vs=Array.from({length:fd-os},(C,j)=>os+j);return u("div",{css:hx,children:[u("div",{css:mx,children:[u("div",{css:gx,children:[o("h1",{css:yx,children:"Timetable Management"}),o("p",{css:vx(e),children:"Manage class schedules and school events"})]}),u("div",{css:wx,children:[u("div",{css:xx(e),children:[u("button",{type:"button",css:ja(e,t==="monthly"),onClick:()=>n("monthly"),children:[o(Ul,{"aria-hidden":!0}),"Monthly"]}),u("button",{type:"button",css:ja(e,t==="weekly"),onClick:()=>n("weekly"),children:[o(b5,{"aria-hidden":!0}),"Weekly"]}),u("button",{type:"button",css:ja(e,t==="list"),onClick:()=>n("list"),children:[o(_5,{"aria-hidden":!0}),"List"]})]}),u("button",{type:"button",css:Sx,onClick:()=>K(null),children:[o(C5,{"aria-hidden":!0}),"Add Entry"]})]})]}),u("div",{css:bx(e),children:[u("div",{css:bp,children:[o("label",{css:vt(e),children:"Filter by Department"}),u("select",{css:mo(e),value:s,onChange:C=>l(C.target.value),children:[o("option",{value:"",children:"All Departments"}),Se.map(C=>o("option",{value:C,children:C},C))]})]}),u("div",{css:bp,children:[o("label",{css:vt(e),children:"Filter by Lecturer"}),u("select",{css:mo(e),value:a,onChange:C=>c(C.target.value),children:[o("option",{value:"",children:"All Lecturers"}),S.map(C=>u("option",{value:String(C.id),children:[C.full_name," (",C.lecturer_id,")"]},C.id))]})]}),u("div",{css:Cx,children:[o("button",{type:"button",css:Cp(e),onClick:Ws,"aria-label":"Previous",children:o(Pm,{})}),o("button",{type:"button",css:_x(e),onClick:gt,children:"Today"}),o("button",{type:"button",css:Cp(e),onClick:ln,"aria-label":"Next",children:o(Lm,{})}),o("span",{css:$x(e),children:W})]})]}),v?o("p",{css:Ep(e),children:"Loading timetable…"}):t==="monthly"?u("div",{css:Ex(e),children:[Oa.map(C=>o("div",{css:kx(e),children:C},C)),an.map((C,j)=>{if(C.type==="pad")return o("div",{css:_p(e,!0,!1)},`pad-${j}`);const H=wt(C.date),ie=H===An,fe=cn[H]||[],Z=fe.slice(0,3),Zt=fe.length-Z.length;return u("div",{role:"button",tabIndex:0,css:_p(e,!1,ie),onClick:()=>K(C.date),onKeyDown:Re=>Re.key==="Enter"&&K(C.date),children:[u("div",{css:Lx(e,ie),children:[C.date.getDate()," ",ie?"• Today":""]}),o("div",{css:Px(e),children:Oa[C.date.getDay()]}),Z.length===0?o("p",{css:Nx,children:"Click to add"}):Z.map(Re=>{const yr=Ta(Re),bi=za[yr];return u("div",{css:zx(bi.bar),onClick:vr=>{vr.stopPropagation(),q(Re)},onKeyDown:vr=>vr.stopPropagation(),role:"presentation",children:[o(Cn,{}),ho(Re),o("span",{style:{opacity:.95,fontWeight:600},children:Bn(Re.start_time)})]},Re.id)}),Zt>0&&u("div",{style:{fontSize:"0.65rem",color:"#6b7280",marginTop:2},children:["+",Zt," more"]})]},H)})]}):t==="weekly"?u("div",{css:Tx(e),children:[u("div",{css:Dx,children:[o("div",{css:Ox(e)}),Si.map(C=>u("div",{css:jx(e,dx(C,Hs)),children:[Oa[C.getDay()],o("div",{style:{fontWeight:500,fontSize:"0.75rem",opacity:.85},children:C.getDate()})]},wt(C)))]}),u("div",{css:Rx,children:[o("div",{css:Ix(e),children:Vs.map(C=>u("div",{css:Ax(e),style:{top:(C-os)*ul},children:[String(C).padStart(2,"0"),":00"]},C))}),Si.map(C=>{const j=wt(C);return o("div",{css:Fx(e,j===An),children:(cn[j]||[]).map(H=>{const ie=u4(H);if(!ie)return null;const fe=Ta(H),Z=za[fe],Zt=H.entry_type==="event";return u("div",{role:"button",tabIndex:0,css:Bx(e,ie.top,ie.height,Z.bar,Z.bg),onClick:()=>q(H),onKeyDown:Re=>Re.key==="Enter"&&q(H),children:[Zt&&o(sl,{style:{width:11,height:11,opacity:.9,marginBottom:2,display:"block"}}),o("div",{style:{fontWeight:800},children:ho(H)}),u("div",{style:{fontWeight:500,opacity:.95,marginTop:2},children:[Bn(H.start_time)," – ",Bn(H.end_time)]}),H.room_location&&u("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:4,fontWeight:600,opacity:.9},children:[o(pi,{style:{width:12,height:12}}),H.room_location]}),(H.lecturers||[]).length>0&&u("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:2,fontWeight:500,fontSize:"0.68rem",opacity:.95},children:[o(ui,{style:{width:12,height:12}}),H.lecturers[0].full_name,(H.lecturers||[]).length>1?"…":""]})]},H.id)})},j)})]})]}):o("div",{children:un.length===0?o("p",{css:Ep(e),children:"No entries in this range. Use Add Entry or pick another week."}):un.map(({date:C,items:j})=>{const H=xp(C),ie=C===An,fe=H.toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"});return u("div",{css:Ux(e),children:[u("div",{css:Wx(e,ie),children:[o(hi,{"aria-hidden":!0}),fe,ie&&o("span",{css:Vx(e),children:"Today"}),u("span",{css:Hx(e),children:[j.length," ",j.length===1?"entry":"entries"]})]}),j.map(Z=>{const Zt=Ta(Z),Re=za[Zt];return o("div",{css:Qx(e,Re.bar),children:u("div",{css:Kx,children:[u("div",{style:{minWidth:0,flex:1},children:[u("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.35rem"},children:[Z.entry_type==="event"?o(sl,{style:{width:18,height:18,color:Re.bar}}):o(On,{style:{width:18,height:18,color:Re.bar}}),o("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:Z.entry_type==="class"?`${ho(Z)} – ${Z.course_name||"Module"}`:ho(Z)}),o("span",{css:Yx(e),children:Z.entry_type==="class"?"Class":"Event"})]}),Z.entry_type==="event"&&Z.event_description&&o("p",{style:{margin:"0.35rem 0 0 0",fontSize:"0.85rem",opacity:.85},children:Z.event_description}),u("div",{css:Zx(e),children:[u("span",{children:[o(Cn,{}),Bn(Z.start_time)," – ",Bn(Z.end_time)]}),Z.room_location&&u("span",{children:[o(pi,{}),Z.room_location]}),(Z.lecturers||[]).length>0&&u("span",{children:[o(ui,{}),(Z.lecturers||[]).map(yr=>yr.full_name).join(", ")]})]})]}),u("div",{css:Jx,children:[o("button",{type:"button",css:Ra(e,!1),title:"Edit",onClick:()=>q(Z),children:o(wn,{})}),o("button",{type:"button",css:Ra(e,!0),title:"Delete",onClick:()=>M(Z),children:o(Rr,{})})]})]})},Z.id)})]},C)})}),w&&o("div",{css:Gx,role:"presentation",onClick:ae,children:u("div",{css:Xx(e),onClick:C=>C.stopPropagation(),children:[o("div",{css:qx(e),children:u("div",{css:n4,children:[u("div",{children:[o("h3",{css:Mx(e),children:N?"Edit Timetable Entry":"Add New Timetable Entry"}),o("p",{css:$p(e),children:"Create or update a class or school event."})]}),o("button",{type:"button",css:Ra(e,!1),onClick:ae,"aria-label":"Close",children:o(Ft,{})})]})}),u("div",{css:e4,children:[u("div",{css:It,children:[o("label",{css:vt(e),children:"Entry Type"}),u("select",{css:mo(e),value:I.entry_type,onChange:C=>{const j=C.target.value==="event"?"event":"class";U(H=>({...H,entry_type:j,lecturer_ids:j==="event"?[]:H.entry_type==="event"?[]:H.lecturer_ids}))},children:[o("option",{value:"class",children:"Class"}),o("option",{value:"event",children:"School Event"})]})]}),I.entry_type==="class"?u("div",{css:It,children:[o("label",{css:vt(e),children:"Module"}),u("select",{css:mo(e),value:I.course_id,onChange:C=>{const j=C.target.value,H=E.find(Z=>String(Z.id)===j),ie=Da(H,S),fe=ie.length===1?[ie[0].id]:[];U(Z=>({...Z,course_id:j,lecturer_ids:fe}))},children:[o("option",{value:"",children:"Select module"}),E.map(C=>u("option",{value:String(C.id),children:[C.course_code," — ",C.course_name]},C.id))]})]}):u(De,{children:[u("div",{css:It,children:[o("label",{css:vt(e),children:"Event Title"}),o("input",{type:"text",css:Zn(e),placeholder:"e.g. Annual Sports Day",value:I.event_title,onChange:C=>U(j=>({...j,event_title:C.target.value}))})]}),u("div",{css:It,children:[o("label",{css:vt(e),children:"Event Description"}),o("textarea",{css:s4(e),placeholder:"Brief description of the event",value:I.event_description,onChange:C=>U(j=>({...j,event_description:C.target.value}))})]})]}),u("div",{css:It,children:[o("label",{css:vt(e),children:"Specific Date"}),o("input",{type:"date",css:Zn(e),value:I.entry_date,onChange:C=>U(j=>({...j,entry_date:C.target.value}))}),o("p",{css:$p(e),style:{marginTop:"0.35rem"},children:"Select the specific date for this class or event."})]}),u("div",{css:It,children:[o("label",{css:vt(e),children:"Day (auto-filled)"}),o("input",{type:"text",css:Zn(e),value:Wl,readOnly:!0,disabled:!0,placeholder:"Will be set based on selected date"})]}),u("div",{css:o4,children:[u("div",{css:It,children:[o("label",{css:vt(e),children:"Start Time"}),o("input",{type:"time",css:Zn(e),value:I.start_time,onChange:C=>U(j=>({...j,start_time:C.target.value}))})]}),u("div",{css:It,children:[o("label",{css:vt(e),children:"End Time"}),o("input",{type:"time",css:Zn(e),value:I.end_time,onChange:C=>U(j=>({...j,end_time:C.target.value}))})]})]}),u("div",{css:It,children:[o("label",{css:vt(e),children:"Room / Location"}),o("input",{type:"text",css:Zn(e),placeholder:"e.g. CS-101, Lab 3",value:I.room_location,onChange:C=>U(j=>({...j,room_location:C.target.value}))})]}),I.entry_type==="class"&&u("div",{css:It,children:[o("label",{css:vt(e),children:"Lecturer(s) for this module"}),o("div",{css:l4(e),children:I.course_id?B.length===0?o("span",{style:{fontSize:"0.85rem",opacity:.8},children:"This module has no linked lecturer. Assign one in the Courses section."}):B.map(C=>u("label",{css:a4,children:[o("input",{type:"checkbox",checked:I.lecturer_ids.includes(C.id),onChange:()=>He(C.id)}),C.full_name,C.department?` (${C.department})`:""]},C.id)):o("span",{style:{fontSize:"0.85rem",opacity:.8},children:"Select a module to see assigned lecturer(s)."})})]})]}),u("div",{css:t4(e),children:[o("button",{type:"button",css:i4(e),onClick:ae,children:"Cancel"}),o("button",{type:"button",css:r4,onClick:mt,disabled:z,children:z?"Saving…":N?"Save Changes":"Create Entry"})]})]})})]})}const Ce="/strack",J="0.35s ease",f4=d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,p4=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,h4=e=>d`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${J};
  }
`,m4=e=>d`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${J};
`,kp=e=>d`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e?"#ffffff":"#1a1a1a"};
  border-radius: 8px;
  flex-shrink: 0;
  transition: color ${J};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,g4=d`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,y4=d`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
`,v4=d`
  flex: 1;
  min-width: 0;
`,w4=e=>d`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${J};
`,x4=e=>d`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${J};
`,S4=d`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,b4=(e,t)=>d`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${t?e?"rgba(124, 58, 237, 0.4)":"#7c3aed":"transparent"};
  color: ${t?"#fff":e?"#d1d5db":"#1a1a1a"};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${J}, color ${J};

  &:hover {
    background: ${t?e?"rgba(124, 58, 237, 0.5)":"#6d28d9":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,C4=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin-top: auto;
  background: rgba(192, 57, 43, 0.08);
  border: 1px solid rgba(192, 57, 43, 0.35);
  color: #c0392b;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 10px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(192, 57, 43, 0.15);
    border-color: rgba(192, 57, 43, 0.5);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,_4=(e,t)=>d`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,Ia=d`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Aa=d`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Er=e=>d`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${J};
`,Fa=d`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #1d4ed8;
  }
`,go=e=>d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  margin-bottom: 1rem;
  transition: border-color ${J}, background ${J};

  &:focus-within {
    border-color: #2563eb;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: inherit;

    &::placeholder {
      color: ${e?"#6b7280":"#9ca3af"};
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${e?"#6b7280":"#9ca3af"};
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,Ba=d`
  margin-bottom: 1rem;
`,Ua=d`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,Un=e=>d`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,Wn=e=>d`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,Hn=e=>d`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;d`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const Vn=e=>d`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${e?"#a78bfa":"#2563eb"};
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: ${e?"rgba(167, 139, 250, 0.14)":"rgba(37, 99, 235, 0.10)"};

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
  }
`,Qn=d`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,$4=(e,t)=>d`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${J}, color ${J};
`,E4=d`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
    color: #eab308;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,k4=d`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,L4=d`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Lp=d`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Pp=d`
  flex: 1;
  min-width: 0;
`,Np=d`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,zp=e=>d`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${J};
`,Tp=d`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #1d4ed8;
  }
`,P4=e=>d`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${J}, box-shadow ${J};
`,N4=e=>d`
  width: 46px;
  height: 46px;
  color: #2563eb;
  background: ${e?"rgba(167, 139, 250, 0.14)":"rgba(37, 99, 235, 0.10)"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
  }
`,z4=e=>d`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${J};
`,T4=e=>d`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${J};
`,D4=e=>d`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  background: #2563eb;
  color: #fff;
  min-width: 56px;
`,O4=d`
  margin-top: 1.5rem;
`,j4=d`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,R4=d`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,I4=e=>d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  transition: border-color ${J}, background ${J};

  &:focus-within {
    border-color: #2563eb;
    outline: none;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: inherit;

    &::placeholder {
      color: ${e?"#6b7280":"#9ca3af"};
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${e?"#6b7280":"#9ca3af"};
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,Wi=e=>d`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${J}, box-shadow ${J};
`,ee=e=>d`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1a1a1a":"#f9fafb"};
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  transition: color ${J}, background ${J}, border-color ${J};
`,Q=e=>d`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${J}, border-color ${J};
`,Hi=d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Jn=e=>d`
  padding: 0.4rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${e?"#9ca3af":"#6b7280"};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
    color: ${e?"#fff":"#1a1a1a"};
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    fill: none;
  }
`,Vi=e=>d`
  ${Jn(e)}
  &:hover {
    color: #dc2626;
  }
`,kr=d`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Lr=e=>d`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${J};
`,Pr=e=>d`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${J};
`,Nr=e=>d`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${J};
`,zr=e=>d`
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: ${e?"#9ca3af":"#6b7280"};
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
    color: inherit;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    fill: none;
  }
`,Tr=d`
  padding: 1.5rem;
`,pe=d`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,he=e=>d`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${J};
`,we=e=>d`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${J}, background ${J};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${e?"#6b7280":"#9ca3af"};
  }
`,Dp=e=>d`
  ${we(e)}
  min-height: 80px;
  resize: vertical;
`,Op=e=>d`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
  max-height: 180px;
  overflow: auto;
  background: ${e?"#262626":"#fff"};
`,jp=e=>d`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.15rem;
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#1f2937"};
`,Dr=e=>d`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${J};
`,Or=e=>d`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${J}, background ${J};

  &:hover {
    background: ${e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"};
  }
`,Qi=d`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`,A4=[{id:"dashboard",label:"Dashboard",icon:Ul},{id:"students",label:"Students",icon:Mn},{id:"lecturers",label:"Lecturers",icon:Ps},{id:"courses",label:"Courses",icon:On},{id:"departments",label:"Departments",icon:Gi},{id:"degrees",label:"Degrees",icon:On},{id:"calendar",label:"Calendar",icon:hi}];function F4(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function B4({darkMode:e,onToggleDarkMode:t}){const n=As(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:s}=td(),[l,a]=y.useState("dashboard"),[c,h]=y.useState([]),[g,v]=y.useState(!1),[x,E]=y.useState(""),[b,S]=y.useState(!1),[T,m]=y.useState(null),[p,w]=y.useState({code:"",name:"",description:""}),[$,N]=y.useState(!1),P=y.useCallback(async()=>{v(!0);try{const L=await(await fetch(`${Ce}/backend/departments.php`)).json();L.success&&h(L.departments||[])}catch{h([])}finally{v(!1)}},[]);y.useEffect(()=>{l==="departments"&&P()},[l,P]);const[z,R]=y.useState([]),[I,U]=y.useState(!1),[re,We]=y.useState(""),[_,k]=y.useState(!1),[F,le]=y.useState(null),[Se,O]=y.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:"",degree:""}),[B,W]=y.useState(!1),[K,q]=y.useState([]),ae=y.useCallback(async()=>{U(!0);try{const L=await(await fetch(`${Ce}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();L.success&&R(L.students||[])}catch{R([])}finally{U(!1)}},[]),He=y.useCallback(async()=>{try{const L=await(await fetch(`${Ce}/backend/departments.php`)).json();L.success&&q(L.departments||[])}catch{q([])}},[]);y.useEffect(()=>{(l==="students"||l==="courses")&&ae(),(l==="students"||l==="lecturers"||l==="courses"||l==="degrees")&&He()},[l,ae,He]);const[mt,M]=y.useState([]),[gt,Ws]=y.useState(!1),[ln,Wl]=y.useState(""),[Hs,An]=y.useState(!1),[an,cn]=y.useState(null),[un,dn]=y.useState({lecturer_id:"",full_name:"",email:"",department:""}),[Si,Vs]=y.useState(!1),C=y.useCallback(async()=>{Ws(!0);try{const L=await(await fetch(`${Ce}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();L.success&&M(L.lecturers||[])}catch{M([])}finally{Ws(!1)}},[]);y.useEffect(()=>{(l==="lecturers"||l==="courses")&&C()},[l,C]);const j=()=>{cn(null),dn({lecturer_id:"",full_name:"",email:"",department:""}),An(!0)},H=f=>{cn(f.id),dn({lecturer_id:f.lecturer_id||"",full_name:f.full_name||"",email:f.email||"",department:f.department||""}),An(!0)},ie=()=>An(!1),fe=async()=>{const{lecturer_id:f,full_name:L,email:V,department:be}=un;if(!(!f.trim()||!L.trim()||!V.trim()||!be.trim())){Vs(!0);try{an?(await(await fetch(`${Ce}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:an,lecturer_id:f.trim(),full_name:L.trim(),email:V.trim(),department:be.trim()})})).json()).success&&(ie(),C()):(await(await fetch(`${Ce}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:f.trim(),full_name:L.trim(),email:V.trim(),department:be.trim()})})).json()).success&&(ie(),C())}finally{Vs(!1)}}},Z=async f=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${Ce}/backend/lecturers.php?id=${f}`,{method:"DELETE"})).json()).success&&C()}catch{}},Zt=mt.filter(f=>!ln||(f.lecturer_id||"").toLowerCase().includes(ln.toLowerCase())||(f.full_name||"").toLowerCase().includes(ln.toLowerCase())||(f.email||"").toLowerCase().includes(ln.toLowerCase())||(f.department||"").toLowerCase().includes(ln.toLowerCase())),[Re,yr]=y.useState([]),[bi,vr]=y.useState(!1),[wr,Xm]=y.useState(""),[qm,Hl]=y.useState(!1),[Ci,pd]=y.useState(null),[Fn,hd]=y.useState(null),[yt,fn]=y.useState({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,student_ids:[]}),[md,gd]=y.useState(!1),_i=y.useCallback(async()=>{vr(!0);try{const L=await(await fetch(`${Ce}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})).json();L.success&&yr(L.courses||[])}catch{yr([])}finally{vr(!1)}},[]);y.useEffect(()=>{l==="courses"&&_i()},[l,_i]);const Mm=()=>{pd(null),fn({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,student_ids:[]}),Hl(!0)},e1=f=>{pd(f.id),fn({course_code:f.course_code||"",course_name:f.course_name||"",department:f.department||"",lecturer_id:f.lecturer_id||"",credits:Number(f.credits)||0,student_ids:Array.isArray(f.student_ids)?f.student_ids.map(L=>Number(L)):[]}),Hl(!0)},$i=()=>Hl(!1),Vl=()=>hd(null),t1=f=>hd(f),n1=async()=>{const{course_code:f,course_name:L,department:V,lecturer_id:be,credits:Ie,student_ids:Le}=yt;if(!(!f.trim()||!L.trim())){gd(!0);try{Ci?(await(await fetch(`${Ce}/backend/courses.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Ci,course_code:f.trim(),course_name:L.trim(),department:V.trim()||"",lecturer_id:be.trim()||"",credits:Number(Ie)||0,student_ids:Array.isArray(Le)?Le:[]})})).json()).success&&($i(),_i()):(await(await fetch(`${Ce}/backend/courses.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({course_code:f.trim(),course_name:L.trim(),department:V.trim()||"",lecturer_id:be.trim()||"",credits:Number(Ie)||0,student_ids:Array.isArray(Le)?Le:[]})})).json()).success&&($i(),_i())}finally{gd(!1)}}},r1=async f=>{if(confirm("Delete this course?"))try{(await(await fetch(`${Ce}/backend/courses.php?id=${f}`,{method:"DELETE"})).json()).success&&_i()}catch{}},yd=Re.filter(f=>!wr||(f.course_code||"").toLowerCase().includes(wr.toLowerCase())||(f.course_name||"").toLowerCase().includes(wr.toLowerCase())||(f.department||"").toLowerCase().includes(wr.toLowerCase())||(f.lecturer_name||"").toLowerCase().includes(wr.toLowerCase())),[Ql,vd]=y.useState([]),[i1,wd]=y.useState(!1),[xr,s1]=y.useState(""),[o1,Kl]=y.useState(!1),[Qs,xd]=y.useState(null),[Ei,Sr]=y.useState({code:"",name:"",department:"",description:""}),[Sd,bd]=y.useState(!1),ki=y.useCallback(async()=>{wd(!0);try{const L=await(await fetch(`${Ce}/backend/degrees.php?t=${Date.now()}`,{cache:"no-store"})).json();L.success&&vd(L.degrees||[])}catch{vd([])}finally{wd(!1)}},[]);y.useEffect(()=>{(l==="degrees"||l==="students")&&ki()},[l,ki]);const l1=()=>{xd(null),Sr({code:"",name:"",department:"",description:""}),Kl(!0)},a1=f=>{xd(f.id),Sr({code:f.code||"",name:f.name||"",department:f.department||"",description:f.description||""}),Kl(!0)},Li=()=>Kl(!1),c1=async()=>{const{code:f,name:L,department:V,description:be}=Ei;if(!(!f.trim()||!L.trim())){bd(!0);try{Qs?(await(await fetch(`${Ce}/backend/degrees.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Qs,code:f.trim(),name:L.trim(),department:V.trim(),description:be.trim()})})).json()).success&&(Li(),ki()):(await(await fetch(`${Ce}/backend/degrees.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:f.trim(),name:L.trim(),department:V.trim(),description:be.trim()})})).json()).success&&(Li(),ki())}finally{bd(!1)}}},u1=async f=>{if(confirm("Delete this degree?"))try{(await(await fetch(`${Ce}/backend/degrees.php?id=${f}`,{method:"DELETE"})).json()).success&&ki()}catch{}},Cd=Ql.filter(f=>!xr||(f.code||"").toLowerCase().includes(xr.toLowerCase())||(f.name||"").toLowerCase().includes(xr.toLowerCase())||(f.department||"").toLowerCase().includes(xr.toLowerCase())||(f.description||"").toLowerCase().includes(xr.toLowerCase())),d1=()=>{le(null),O({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:"",degree:""}),k(!0)},f1=f=>{le(f.id),O({student_id:f.student_id,full_name:f.full_name,email:f.email,password:"",department:f.department||"",year:f.year||"",degree:f.degree||""}),k(!0)},Pi=()=>k(!1),p1=async()=>{const{student_id:f,full_name:L,email:V,password:be,department:Ie,year:Le,degree:Ks}=Se;if(!(!f.trim()||!L.trim()||!V.trim())&&!(!F&&!be.trim())){W(!0);try{F?(await(await fetch(`${Ce}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:F,student_id:f.trim(),full_name:L.trim(),email:V.trim(),password:be.trim(),department:Ie.trim()||"",year:Le.trim()||"",degree:Ks.trim()||""})})).json()).success&&(Pi(),ae()):(await(await fetch(`${Ce}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:f.trim(),full_name:L.trim(),email:V.trim(),password:be.trim(),department:Ie.trim()||"",year:Le.trim()||"",degree:Ks.trim()||""})})).json()).success&&(Pi(),ae())}finally{W(!1)}}},h1=async f=>{if(confirm("Delete this student?"))try{(await(await fetch(`${Ce}/backend/students.php?id=${f}`,{method:"DELETE"})).json()).success&&ae()}catch{}},_d=z.filter(f=>!re||(f.student_id||"").toLowerCase().includes(re.toLowerCase())||(f.full_name||"").toLowerCase().includes(re.toLowerCase())||(f.email||"").toLowerCase().includes(re.toLowerCase())||(f.department||"").toLowerCase().includes(re.toLowerCase())||(f.degree||"").toLowerCase().includes(re.toLowerCase())),m1=["Foundation","Year 1","Year 2","Placement Year","Year 4"],g1=()=>{m(null),w({code:"",name:"",description:""}),S(!0)},y1=f=>{m(f.id),w({code:f.code,name:f.name,description:f.description||""}),S(!0)},Ni=()=>S(!1),v1=async()=>{const{code:f,name:L,description:V}=p;if(!(!f.trim()||!L.trim())){N(!0);try{T?(await(await fetch(`${Ce}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:T,code:f.trim(),name:L.trim(),description:V.trim()})})).json()).success&&(Ni(),P()):(await(await fetch(`${Ce}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:f.trim(),name:L.trim(),description:V.trim()})})).json()).success&&(Ni(),P())}finally{N(!1)}}},w1=async f=>{if(confirm("Delete this department?"))try{(await(await fetch(`${Ce}/backend/departments.php?id=${f}`,{method:"DELETE"})).json()).success&&P()}catch{}},$d=c.filter(f=>!x||f.code.toLowerCase().includes(x.toLowerCase())||f.name.toLowerCase().includes(x.toLowerCase())||(f.description||"").toLowerCase().includes(x.toLowerCase()));let Yl="Admin Portal";try{const f=localStorage.getItem("strack_user");if(f){const L=JSON.parse(f),V=(L==null?void 0:L.name)||"";Yl=V==="Test Admin"||V==="Admin"?"Admin Portal":V||"Admin Portal"}}catch{}const x1=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},S1=f=>{a(f),s()};return u("div",{css:nd(e),children:[r?o("button",{type:"button",css:id(e),onClick:s,"aria-label":"Close menu"}):null,u("aside",{css:rd(e,r),children:[u("header",{css:f4,children:[u("div",{css:p4,children:[o("div",{css:h4(e),children:o(Ps,{})}),o("span",{css:m4(e),children:"Strack"})]}),u("div",{css:d`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[o("button",{type:"button",css:kp(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?o(di,{}):o(fi,{})}),o("button",{type:"button",css:cd(e),onClick:s,"aria-label":"Close menu",children:o(Ft,{})})]})]}),u("div",{css:g4,children:[o("div",{css:y4,children:F4(Yl)}),u("div",{css:v4,children:[o("div",{css:w4(e),children:Yl}),o("div",{css:x4(e),children:"Admin"})]})]}),o("nav",{css:S4,children:A4.map(({id:f,label:L,icon:V})=>u("button",{type:"button",css:b4(e,l===f),onClick:()=>S1(f),children:[o(V,{}),L]},f))}),u("button",{type:"button",css:C4,onClick:x1,children:[o(Xu,{}),"Logout"]})]}),u("div",{css:sd,children:[u("header",{css:od(e),children:[o("button",{type:"button",css:ld(e),onClick:()=>i(!0),"aria-label":"Open menu",children:o(Gu,{})}),o("span",{css:ad(e),children:"Strack"}),o("button",{type:"button",css:kp(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?o(di,{}):o(fi,{})})]}),o("main",{css:ud(e),children:u("div",{css:_4(e,l==="departments"||l==="students"||l==="lecturers"||l==="courses"||l==="degrees"||l==="calendar"),children:[l==="dashboard"&&u(De,{children:[o("h1",{css:k4,children:"Dashboard"}),o("p",{css:L4,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),l==="students"&&u(De,{children:[u("div",{css:Ia,children:[u("div",{children:[o("h1",{css:Aa,children:"Manage Students"}),o("p",{css:Er(e),children:"Add, edit, or remove student records."})]}),o("button",{type:"button",css:Fa,onClick:d1,children:"+ Add Student"})]}),u("div",{css:Ba,children:[u("div",{css:Un(e),children:[o("span",{css:Vn(e),children:o(Mn,{})}),u("div",{css:Qn,children:[o("p",{css:Hn(e),children:"Total Students"}),o("p",{css:Wn(e),children:I?"...":z.length})]})]}),u("div",{css:Ua,children:[K.length>0?K.map(f=>{const L=z.filter(V=>(V.department||"")===f.name).length;return u("div",{css:Un(e),children:[o("span",{css:Vn(e),children:o(Gi,{})}),u("div",{css:Qn,children:[o("p",{css:Hn(e),children:f.name}),o("p",{css:Wn(e),children:I?"...":L})]})]},f.id)}):null,(()=>{const f=z.filter(L=>!L.department).length;return f<=0?null:u("div",{css:Un(e),children:[o("span",{css:Vn(e),children:o(Ps,{})}),u("div",{css:Qn,children:[o("p",{css:Hn(e),children:"Unassigned"}),o("p",{css:Wn(e),children:I?"...":f})]})]})})()]})]}),u("div",{css:go(e),children:[o(Bi,{}),o("input",{type:"text",placeholder:"Search students...",value:re,onChange:f=>We(f.target.value)})]}),u("table",{css:Wi(e),children:[o("thead",{children:u("tr",{children:[o("th",{css:ee(e),children:"Student ID"}),o("th",{css:ee(e),children:"Name"}),o("th",{css:ee(e),children:"Email"}),o("th",{css:ee(e),children:"Department"}),o("th",{css:ee(e),children:"Degree"}),o("th",{css:ee(e),children:"Year"}),o("th",{css:ee(e),children:"GPA"}),o("th",{css:ee(e),children:"Points"}),o("th",{css:ee(e),children:"Attendance"}),o("th",{css:ee(e),children:"Actions"})]})}),o("tbody",{children:I?o("tr",{children:o("td",{css:Q(e),colSpan:10,children:"Loading..."})}):_d.length===0?o("tr",{children:o("td",{css:Q(e),colSpan:10,children:"No students found."})}):_d.map(f=>{var L;return u("tr",{children:[o("td",{css:Q(e),children:f.student_id}),o("td",{css:Q(e),children:f.full_name}),o("td",{css:Q(e),children:f.email}),o("td",{css:Q(e),children:f.department||"—"}),o("td",{css:Q(e),children:((L=Ql.find(V=>V.code===f.degree))==null?void 0:L.name)||f.degree||"—"}),o("td",{css:Q(e),children:f.year||"—"}),o("td",{css:Q(e),children:Number(f.gpa)||0}),o("td",{css:Q(e),children:u("span",{css:E4,children:[o(Zu,{}),Number(f.points)||0]})}),o("td",{css:Q(e),children:u("span",{css:$4(Number(f.attendance)||0,e),children:[Number(f.attendance)||0,"%"]})}),o("td",{css:Q(e),children:u("div",{css:Hi,children:[o("button",{type:"button",css:Jn(e),onClick:()=>f1(f),title:"Edit",children:o(wn,{})}),o("button",{type:"button",css:Vi(e),onClick:()=>h1(f.id),title:"Delete",children:o(Rr,{})})]})})]},f.id)})})]})]}),l==="lecturers"&&u(De,{children:[u("div",{css:Ia,children:[u("div",{children:[o("h1",{css:Aa,children:"Lecturer Management"}),o("p",{css:Er(e),children:"Manage teaching staff and teaching assignments."})]}),o("button",{type:"button",css:Fa,onClick:j,children:"+ Add Lecturer"})]}),u("div",{css:Ba,children:[u("div",{css:Un(e),children:[o("span",{css:Vn(e),children:o(Mn,{})}),u("div",{css:Qn,children:[o("p",{css:Hn(e),children:"Total Lecturers"}),o("p",{css:Wn(e),children:gt?"...":mt.length})]})]}),o("div",{css:Ua,children:K.length>0?K.map(f=>{const L=mt.filter(V=>(V.department||"")===f.name).length;return u("div",{css:Un(e),children:[o("span",{css:Vn(e),children:o(Gi,{})}),u("div",{css:Qn,children:[o("p",{css:Hn(e),children:f.name}),o("p",{css:Wn(e),children:gt?"...":L})]})]},f.id)}):null})]}),u("div",{css:go(e),children:[o(Bi,{}),o("input",{type:"text",placeholder:"Search lecturers...",value:ln,onChange:f=>Wl(f.target.value)})]}),u("table",{css:Wi(e),children:[o("thead",{children:u("tr",{children:[o("th",{css:ee(e),children:"Lecturer ID"}),o("th",{css:ee(e),children:"Name"}),o("th",{css:ee(e),children:"Email"}),o("th",{css:ee(e),children:"Department"}),o("th",{css:ee(e),children:"Modules"}),o("th",{css:ee(e),children:"Actions"})]})}),o("tbody",{children:gt?o("tr",{children:o("td",{css:Q(e),colSpan:6,children:"Loading..."})}):Zt.length===0?o("tr",{children:o("td",{css:Q(e),colSpan:6,children:"No lecturers found."})}):Zt.map(f=>u("tr",{children:[o("td",{css:Q(e),children:f.lecturer_id}),o("td",{css:Q(e),children:f.full_name}),o("td",{css:Q(e),children:f.email}),o("td",{css:Q(e),children:f.department||"—"}),o("td",{css:Q(e),children:Number(f.modules)||0}),o("td",{css:Q(e),children:u("div",{css:Hi,children:[o("button",{type:"button",css:Jn(e),onClick:()=>H(f),title:"Edit",children:o(wn,{})}),o("button",{type:"button",css:Vi(e),onClick:()=>Z(f.id),title:"Delete",children:o(Rr,{})})]})})]},f.id))})]})]}),l==="courses"&&u(De,{children:[u("div",{css:Ia,children:[u("div",{children:[o("h1",{css:Aa,children:"Course Management"}),o("p",{css:Er(e),children:"Manage course catalog."})]}),o("button",{type:"button",css:Fa,onClick:Mm,children:"+ Add Course"})]}),u("div",{css:Ba,children:[u("div",{css:Un(e),children:[o("span",{css:Vn(e),children:o(On,{})}),u("div",{css:Qn,children:[o("p",{css:Hn(e),children:"Total Courses"}),o("p",{css:Wn(e),children:bi?"...":Re.length})]})]}),o("div",{css:Ua,children:K.length>0?K.map(f=>{const L=Re.filter(V=>(V.department||"")===f.name).length;return u("div",{css:Un(e),children:[o("span",{css:Vn(e),children:o(Gi,{})}),u("div",{css:Qn,children:[o("p",{css:Hn(e),children:f.name}),o("p",{css:Wn(e),children:bi?"...":L})]})]},f.id)}):null})]}),u("div",{css:go(e),children:[o(Bi,{}),o("input",{type:"text",placeholder:"Search courses...",value:wr,onChange:f=>Xm(f.target.value)})]}),u("table",{css:Wi(e),children:[o("thead",{children:u("tr",{children:[o("th",{css:ee(e),children:"Course Code"}),o("th",{css:ee(e),children:"Course Name"}),o("th",{css:ee(e),children:"Department"}),o("th",{css:ee(e),children:"Lecturer"}),o("th",{css:ee(e),children:"Credits"}),o("th",{css:ee(e),children:"Students"}),o("th",{css:ee(e),children:"Actions"})]})}),o("tbody",{children:bi?o("tr",{children:o("td",{css:Q(e),colSpan:7,children:"Loading..."})}):yd.length===0?o("tr",{children:o("td",{css:Q(e),colSpan:7,children:"No courses found."})}):yd.map(f=>u("tr",{children:[o("td",{css:Q(e),children:f.course_code}),o("td",{css:Q(e),children:f.course_name}),o("td",{css:Q(e),children:f.department||"—"}),o("td",{css:Q(e),children:f.lecturer_name||"—"}),o("td",{css:Q(e),children:u("span",{css:D4(),children:[Number(f.credits)||0," credits"]})}),o("td",{css:Q(e),children:Number(f.enrolled_count)||0}),o("td",{css:Q(e),children:u("div",{css:Hi,children:[o("button",{type:"button",css:Jn(e),onClick:()=>t1(f),title:"View enrolled students",children:o(Mn,{})}),o("button",{type:"button",css:Jn(e),onClick:()=>e1(f),title:"Edit",children:o(wn,{})}),o("button",{type:"button",css:Vi(e),onClick:()=>r1(f.id),title:"Delete",children:o(Rr,{})})]})})]},f.id))})]})]}),l==="degrees"&&u(De,{children:[u("div",{css:Lp,children:[u("div",{css:Pp,children:[o("h1",{css:Np,children:"Degrees"}),o("p",{css:zp(e),children:"Create, view, edit, and delete degrees."})]}),o("button",{type:"button",css:Tp,onClick:l1,children:"+ Add Degree"})]}),u("div",{css:go(e),children:[o(Bi,{}),o("input",{type:"text",placeholder:"Search degrees...",value:xr,onChange:f=>s1(f.target.value)})]}),u("table",{css:Wi(e),children:[o("thead",{children:u("tr",{children:[o("th",{css:ee(e),children:"Code"}),o("th",{css:ee(e),children:"Name"}),o("th",{css:ee(e),children:"Department"}),o("th",{css:ee(e),children:"Description"}),o("th",{css:ee(e),children:"Actions"})]})}),o("tbody",{children:i1?o("tr",{children:o("td",{css:Q(e),colSpan:5,children:"Loading..."})}):Cd.length===0?o("tr",{children:o("td",{css:Q(e),colSpan:5,children:"No degrees found."})}):Cd.map(f=>u("tr",{children:[o("td",{css:Q(e),children:f.code}),o("td",{css:Q(e),children:f.name}),o("td",{css:Q(e),children:f.department||"—"}),o("td",{css:Q(e),children:f.description||"—"}),o("td",{css:Q(e),children:u("div",{css:Hi,children:[o("button",{type:"button",css:Jn(e),onClick:()=>a1(f),title:"Edit",children:o(wn,{})}),o("button",{type:"button",css:Vi(e),onClick:()=>u1(f.id),title:"Delete",children:o(Rr,{})})]})})]},f.id))})]})]}),l==="departments"&&u(De,{children:[u("div",{css:Lp,children:[u("div",{css:Pp,children:[o("h1",{css:Np,children:"Departments"}),o("p",{css:zp(e),children:"Manage university departments."})]}),o("button",{type:"button",css:Tp,onClick:g1,children:"+ Add Department"})]}),u("div",{css:P4(e),children:[o("div",{css:N4(e),children:o(Gi,{})}),u("div",{children:[o("p",{css:T4(e),children:"Total Departments"}),o("p",{css:z4(e),children:g?"...":c.length})]})]}),u("div",{css:O4,children:[u("div",{css:j4,children:[o("h2",{css:R4,children:"All Departments"}),u("div",{css:I4(e),children:[o(Bi,{}),o("input",{type:"text",placeholder:"Search departments...",value:x,onChange:f=>E(f.target.value)})]})]}),u("table",{css:Wi(e),children:[o("thead",{children:u("tr",{children:[o("th",{css:ee(e),children:"Code"}),o("th",{css:ee(e),children:"Name"}),o("th",{css:ee(e),children:"Description"}),o("th",{css:ee(e),children:"Actions"})]})}),o("tbody",{children:g?o("tr",{children:o("td",{css:Q(e),colSpan:4,children:"Loading..."})}):$d.length===0?o("tr",{children:o("td",{css:Q(e),colSpan:4,children:"No departments found."})}):$d.map(f=>u("tr",{children:[o("td",{css:Q(e),children:f.code}),o("td",{css:Q(e),children:f.name}),o("td",{css:Q(e),children:f.description||"—"}),o("td",{css:Q(e),children:u("div",{css:Hi,children:[o("button",{type:"button",css:Jn(e),onClick:()=>y1(f),title:"Edit",children:o(wn,{})}),o("button",{type:"button",css:Vi(e),onClick:()=>w1(f.id),title:"Delete",children:o(Rr,{})})]})})]},f.id))})]})]})]}),l==="calendar"&&o(d4,{darkMode:e})]})})]}),_&&o("div",{css:kr,onClick:Pi,children:u("div",{css:Lr(e),onClick:f=>f.stopPropagation(),children:[u("div",{css:Pr(e),children:[o("h3",{css:Nr(e),children:F?"Edit Student":"Add Student"}),o("button",{type:"button",css:zr(e),onClick:Pi,"aria-label":"Close",children:o(Ft,{})})]}),u("div",{css:Tr,children:[u("div",{css:pe,children:[o("label",{css:he(e),children:"Full Name *"}),o("input",{type:"text",css:we(e),placeholder:"e.g. Ava Thomas",value:Se.full_name,onChange:f=>O(L=>({...L,full_name:f.target.value}))})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Email *"}),o("input",{type:"email",css:we(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:Se.email,onChange:f=>O(L=>({...L,email:f.target.value}))})]}),!F&&u("div",{css:pe,children:[o("label",{css:he(e),children:"Password *"}),o("input",{type:"password",css:we(e),placeholder:"e.g. student123",value:Se.password,onChange:f=>O(L=>({...L,password:f.target.value}))})]}),u("div",{css:pe,children:[u("label",{css:he(e),children:["Student ID ",F?"":"*"]}),o("input",{type:"text",css:we(e),placeholder:"e.g. STU2024008",value:Se.student_id,onChange:f=>O(L=>({...L,student_id:f.target.value})),readOnly:!!F})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Department"}),u("select",{css:we(e),value:Se.department,onChange:f=>O(L=>({...L,department:f.target.value})),children:[o("option",{value:"",children:"Select department"}),K.map(f=>o("option",{value:f.name,children:f.name},f.id))]})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Degree"}),u("select",{css:we(e),value:Se.degree,onChange:f=>O(L=>({...L,degree:f.target.value})),children:[o("option",{value:"",children:"Select degree"}),Ql.map(f=>o("option",{value:f.code,children:f.name},f.id))]})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Year"}),u("select",{css:we(e),value:Se.year,onChange:f=>O(L=>({...L,year:f.target.value})),children:[o("option",{value:"",children:"Select year"}),m1.map(f=>o("option",{value:f,children:f},f))]})]})]}),u("div",{css:Dr(e),children:[o("button",{type:"button",css:Or(e),onClick:Pi,children:"Cancel"}),o("button",{type:"button",css:Qi,onClick:p1,disabled:B,children:B?"Saving...":F?"Save Changes":"Add Student"})]})]})}),Hs&&o("div",{css:kr,onClick:ie,children:u("div",{css:Lr(e),onClick:f=>f.stopPropagation(),children:[u("div",{css:Pr(e),children:[o("h3",{css:Nr(e),children:an?"Edit Lecturer":"Add Lecturer"}),o("button",{type:"button",css:zr(e),onClick:ie,"aria-label":"Close",children:o(Ft,{})})]}),u("div",{css:Tr,children:[u("div",{css:pe,children:[o("label",{css:he(e),children:"Full Name *"}),o("input",{type:"text",css:we(e),placeholder:"e.g. Dr. Sarah Johnson",value:un.full_name,onChange:f=>dn(L=>({...L,full_name:f.target.value}))})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Email *"}),o("input",{type:"email",css:we(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:un.email,onChange:f=>dn(L=>({...L,email:f.target.value}))})]}),u("div",{css:pe,children:[u("label",{css:he(e),children:["Lecturer ID ",an?"":"*"]}),o("input",{type:"text",css:we(e),placeholder:"e.g. LEC001",value:un.lecturer_id,onChange:f=>dn(L=>({...L,lecturer_id:f.target.value})),readOnly:!!an})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Department"}),u("select",{css:we(e),value:un.department,onChange:f=>dn(L=>({...L,department:f.target.value})),children:[o("option",{value:"",children:"Select department"}),K.map(f=>o("option",{value:f.name,children:f.name},f.id))]})]})]}),u("div",{css:Dr(e),children:[o("button",{type:"button",css:Or(e),onClick:ie,children:"Cancel"}),o("button",{type:"button",css:Qi,onClick:fe,disabled:Si,children:Si?"Saving...":an?"Update Lecturer":"Add Lecturer"})]})]})}),qm&&o("div",{css:kr,onClick:$i,children:u("div",{css:Lr(e),onClick:f=>f.stopPropagation(),children:[u("div",{css:Pr(e),children:[o("h3",{css:Nr(e),children:Ci?"Edit Course":"Add Course"}),o("button",{type:"button",css:zr(e),onClick:$i,"aria-label":"Close",children:o(Ft,{})})]}),u("div",{css:Tr,children:[u("div",{css:pe,children:[o("label",{css:he(e),children:"Course Code *"}),o("input",{type:"text",css:we(e),placeholder:"e.g. CS201",value:yt.course_code,onChange:f=>fn(L=>({...L,course_code:f.target.value})),readOnly:!!Ci})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Course Name *"}),o("input",{type:"text",css:we(e),placeholder:"e.g. Data Structures and Algorithms",value:yt.course_name,onChange:f=>fn(L=>({...L,course_name:f.target.value}))})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Department"}),u("select",{css:we(e),value:yt.department,onChange:f=>{const L=f.target.value;fn(V=>{const be=new Set(z.filter(Le=>!L||(Le.department||"")===L).map(Le=>Number(Le.id))),Ie=(Array.isArray(V.student_ids)?V.student_ids:[]).filter(Le=>be.has(Number(Le)));return{...V,department:L,student_ids:Ie}})},children:[o("option",{value:"",children:"Select department"}),K.map(f=>o("option",{value:f.name,children:f.name},f.id))]})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Lecturer"}),u("select",{css:we(e),value:yt.lecturer_id,onChange:f=>fn(L=>({...L,lecturer_id:f.target.value})),children:[o("option",{value:"",children:"Select lecturer"}),mt.filter(f=>!yt.department||(f.department||"")===yt.department).map(f=>o("option",{value:f.lecturer_id,children:f.full_name},f.id))]})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Credits"}),o("input",{type:"number",css:we(e),placeholder:"e.g. 4",value:yt.credits,onChange:f=>fn(L=>({...L,credits:Number(f.target.value)||0})),min:0})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Students who should attend this course"}),o("div",{css:Op(e),children:z.length===0?o("p",{css:Er(e),style:{margin:0},children:"No students found."}):z.filter(f=>!yt.department||(f.department||"")===yt.department).map(f=>u("label",{css:jp(e),children:[o("input",{type:"checkbox",checked:Array.isArray(yt.student_ids)&&yt.student_ids.includes(Number(f.id)),onChange:L=>{const V=Number(f.id);fn(be=>{const Ie=new Set(Array.isArray(be.student_ids)?be.student_ids.map(Le=>Number(Le)):[]);return L.target.checked?Ie.add(V):Ie.delete(V),{...be,student_ids:Array.from(Ie)}})}}),u("span",{children:[f.full_name," (",f.student_id,")"]})]},f.id))})]})]}),u("div",{css:Dr(e),children:[o("button",{type:"button",css:Or(e),onClick:$i,children:"Cancel"}),o("button",{type:"button",css:Qi,onClick:n1,disabled:md,children:md?"Saving...":Ci?"Update Course":"Add Course"})]})]})}),Fn&&o("div",{css:kr,onClick:Vl,children:u("div",{css:Lr(e),onClick:f=>f.stopPropagation(),children:[u("div",{css:Pr(e),children:[u("h3",{css:Nr(e),children:["Students in ",Fn.course_code||"Course"]}),o("button",{type:"button",css:zr(e),onClick:Vl,"aria-label":"Close",children:o(Ft,{})})]}),u("div",{css:Tr,children:[u("p",{css:Er(e),style:{marginTop:0},children:[Fn.course_name||""," - ",Number(Fn.enrolled_count)||0," student(s)"]}),o("div",{css:Op(e),children:Array.isArray(Fn.students)&&Fn.students.length>0?Fn.students.map(f=>u("div",{css:jp(e),children:[o(Mn,{style:{width:16,height:16,opacity:.8}}),u("span",{children:[f.full_name," (",f.student_id,")"]})]},f.id)):o("p",{css:Er(e),style:{margin:0},children:"No students assigned yet."})})]}),o("div",{css:Dr(e),children:o("button",{type:"button",css:Or(e),onClick:Vl,children:"Close"})})]})}),o1&&o("div",{css:kr,onClick:Li,children:u("div",{css:Lr(e),onClick:f=>f.stopPropagation(),children:[u("div",{css:Pr(e),children:[o("h3",{css:Nr(e),children:Qs?"Edit Degree":"Add Degree"}),o("button",{type:"button",css:zr(e),onClick:Li,"aria-label":"Close",children:o(Ft,{})})]}),u("div",{css:Tr,children:[u("div",{css:pe,children:[o("label",{css:he(e),children:"Code *"}),o("input",{type:"text",css:we(e),placeholder:"e.g. CS",value:Ei.code,onChange:f=>Sr(L=>({...L,code:f.target.value}))})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Name *"}),o("input",{type:"text",css:we(e),placeholder:"e.g. BSc Computer Science",value:Ei.name,onChange:f=>Sr(L=>({...L,name:f.target.value}))})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Department"}),u("select",{css:we(e),value:Ei.department,onChange:f=>Sr(L=>({...L,department:f.target.value})),children:[o("option",{value:"",children:"Select department"}),K.map(f=>o("option",{value:f.name,children:f.name},f.id))]})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Description"}),o("textarea",{css:Dp(e),placeholder:"Optional description",value:Ei.description,onChange:f=>Sr(L=>({...L,description:f.target.value}))})]})]}),u("div",{css:Dr(e),children:[o("button",{type:"button",css:Or(e),onClick:Li,children:"Cancel"}),o("button",{type:"button",css:Qi,onClick:c1,disabled:Sd,children:Sd?"Saving...":Qs?"Update Degree":"Add Degree"})]})]})}),b&&o("div",{css:kr,onClick:Ni,children:u("div",{css:Lr(e),onClick:f=>f.stopPropagation(),children:[u("div",{css:Pr(e),children:[o("h3",{css:Nr(e),children:T?"Edit Department":"Add New Department"}),o("button",{type:"button",css:zr(e),onClick:Ni,"aria-label":"Close",children:o(Ft,{})})]}),u("div",{css:Tr,children:[u("div",{css:pe,children:[o("label",{css:he(e),children:"Department Name"}),o("input",{type:"text",css:we(e),placeholder:"e.g. Newcastle Business School",value:p.name,onChange:f=>w(L=>({...L,name:f.target.value}))})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Department Code"}),o("input",{type:"text",css:we(e),placeholder:"e.g. NBS",value:p.code,onChange:f=>w(L=>({...L,code:f.target.value}))})]}),u("div",{css:pe,children:[o("label",{css:he(e),children:"Description"}),o("textarea",{css:Dp(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:p.description,onChange:f=>w(L=>({...L,description:f.target.value}))})]})]}),u("div",{css:Dr(e),children:[o("button",{type:"button",css:Or(e),onClick:Ni,children:"Cancel"}),o("button",{type:"button",css:Qi,onClick:v1,disabled:$,children:$?"Saving...":T?"Update Department":"Add Department"})]})]})})]})}const U4="/strack",Rp="strack_dark";function W4(){const[e,t]=y.useState(()=>{try{return localStorage.getItem(Rp)==="true"}catch{return!1}});y.useEffect(()=>{try{localStorage.setItem(Rp,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return Pe.jsx(Qv,{basename:U4,children:Pe.jsxs(Wv,{children:[Pe.jsx(jr,{path:"/",element:Pe.jsx(h5,{darkMode:e,onToggleDarkMode:n})}),Pe.jsx(jr,{path:"/dashboard",element:Pe.jsx(Jw,{darkMode:e,onToggleDarkMode:n})}),Pe.jsx(jr,{path:"/lecturer",element:Pe.jsx(ux,{darkMode:e,onToggleDarkMode:n})}),Pe.jsx(jr,{path:"/admin",element:Pe.jsx(B4,{darkMode:e,onToggleDarkMode:n})}),Pe.jsx(jr,{path:"*",element:Pe.jsx(Bv,{to:"/",replace:!0})})]})})}Ha.createRoot(document.getElementById("root")).render(Pe.jsx(Mt.StrictMode,{children:Pe.jsx(W4,{})}));
