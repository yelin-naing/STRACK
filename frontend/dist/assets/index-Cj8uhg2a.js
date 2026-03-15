function Rp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function jp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zc={exports:{}},vi={},Oc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Ip=Symbol.for("react.portal"),Fp=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),Ap=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),Mp=Symbol.for("react.lazy"),Aa=Symbol.iterator;function Hp(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var Rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jc=Object.assign,Ic={};function tr(e,t,n){this.props=e,this.context=t,this.refs=Ic,this.updater=n||Rc}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fc(){}Fc.prototype=tr.prototype;function _s(e,t,n){this.props=e,this.context=t,this.refs=Ic,this.updater=n||Rc}var $s=_s.prototype=new Fc;$s.constructor=_s;jc($s,tr.prototype);$s.isPureReactComponent=!0;var Ua=Array.isArray,Dc=Object.prototype.hasOwnProperty,Ps={current:null},Ac={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Dc.call(t,r)&&!Ac.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:qr,type:e,key:i,ref:o,props:l,_owner:Ps.current}}function Qp(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ba=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function Nl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qr:case Ip:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Gi(o,0):r,Ua(l)?(n="",e!=null&&(n=e.replace(Ba,"$&/")+"/"),Nl(l,t,n,"",function(u){return u})):l!=null&&(Ls(l)&&(l=Qp(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ba,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ua(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Gi(i,s);o+=Nl(i,t,n,a,l)}else if(a=Hp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Gi(i,s++),o+=Nl(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ul(e,t,n){if(e==null)return e;var r=[],l=0;return Nl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Yp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Tl={transition:null},Zp={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Ps};function Bc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:ul,forEach:function(e,t,n){ul(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ul(e,function(){t++}),t},toArray:function(e){return ul(e,function(t){return t})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=tr;A.Fragment=Fp;A.Profiler=Ap;A.PureComponent=_s;A.StrictMode=Dp;A.Suspense=Wp;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zp;A.act=Bc;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jc({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Ps.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Dc.call(t,a)&&!Ac.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qr,type:e.type,key:l,ref:i,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:Bp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Up,_context:e},e.Consumer=e};A.createElement=Uc;A.createFactory=function(e){var t=Uc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:bp,render:e}};A.isValidElement=Ls;A.lazy=function(e){return{$$typeof:Mp,_payload:{_status:-1,_result:e},_init:Yp}};A.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Tl.transition;Tl.transition={};try{e()}finally{Tl.transition=t}};A.unstable_act=Bc;A.useCallback=function(e,t){return $e.current.useCallback(e,t)};A.useContext=function(e){return $e.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};A.useEffect=function(e,t){return $e.current.useEffect(e,t)};A.useId=function(){return $e.current.useId()};A.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return $e.current.useMemo(e,t)};A.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};A.useRef=function(e){return $e.current.useRef(e)};A.useState=function(e){return $e.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return $e.current.useTransition()};A.version="18.3.1";Oc.exports=A;var C=Oc.exports;const $t=jp(C),_o=Rp({__proto__:null,default:$t},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp=C,Xp=Symbol.for("react.element"),Jp=Symbol.for("react.fragment"),qp=Object.prototype.hasOwnProperty,eh=Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,th={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)qp.call(t,r)&&!th.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Xp,type:e,key:i,ref:o,props:l,_owner:eh.current}}vi.Fragment=Jp;vi.jsx=bc;vi.jsxs=bc;zc.exports=vi;var oe=zc.exports,$o={},Wc={exports:{}},Me={},Vc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var j=T.length;T.push(R);e:for(;0<j;){var K=j-1>>>1,te=T[K];if(0<l(te,R))T[K]=R,T[j]=te,j=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],j=T.pop();if(j!==R){T[0]=j;e:for(var K=0,te=T.length,_n=te>>>1;K<_n;){var Ae=2*(K+1)-1,or=T[Ae],vt=Ae+1,tn=T[vt];if(0>l(or,j))vt<te&&0>l(tn,or)?(T[K]=tn,T[vt]=j,K=vt):(T[K]=or,T[Ae]=j,K=Ae);else if(vt<te&&0>l(tn,j))T[K]=tn,T[vt]=j,K=vt;else break e}}return R}function l(T,R){var j=T.sortIndex-R.sortIndex;return j!==0?j:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],m=1,p=null,g=3,w=!1,S=!1,v=!1,$=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function x(T){if(v=!1,h(T),!S)if(n(a)!==null)S=!0,Cn(L);else{var R=n(u);R!==null&&En(x,R.startTime-T)}}function L(T,R){S=!1,v&&(v=!1,f(O),O=-1),w=!0;var j=g;try{for(h(R),p=n(a);p!==null&&(!(p.expirationTime>R)||T&&!Ce());){var K=p.callback;if(typeof K=="function"){p.callback=null,g=p.priorityLevel;var te=K(p.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?p.callback=te:p===n(a)&&r(a),h(R)}else r(a);p=n(a)}if(p!==null)var _n=!0;else{var Ae=n(u);Ae!==null&&En(x,Ae.startTime-R),_n=!1}return _n}finally{p=null,g=j,w=!1}}var N=!1,P=null,O=-1,Z=5,D=-1;function Ce(){return!(e.unstable_now()-D<Z)}function Le(){if(P!==null){var T=e.unstable_now();D=T;var R=!0;try{R=P(!0,T)}finally{R?Rt():(N=!1,P=null)}}else N=!1}var Rt;if(typeof c=="function")Rt=function(){c(Le)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,at=st.port2;st.port1.onmessage=Le,Rt=function(){at.postMessage(null)}}else Rt=function(){$(Le,0)};function Cn(T){P=T,N||(N=!0,Rt())}function En(T,R){O=$(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,Cn(L))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var j=g;g=R;try{return T()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var j=g;g=T;try{return R()}finally{g=j}},e.unstable_scheduleCallback=function(T,R,j){var K=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?K+j:K):j=K,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=j+te,T={id:m++,callback:R,priorityLevel:T,startTime:j,expirationTime:te,sortIndex:-1},j>K?(T.sortIndex=j,t(u,T),n(a)===null&&T===n(u)&&(v?(f(O),O=-1):v=!0,En(x,j-K))):(T.sortIndex=te,t(a,T),S||w||(S=!0,Cn(L))),T},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(T){var R=g;return function(){var j=g;g=R;try{return T.apply(this,arguments)}finally{g=j}}}})(Mc);Vc.exports=Mc;var nh=Vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=C,Ve=nh;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,zr={};function Sn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(zr[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=Object.prototype.hasOwnProperty,lh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ba={},Wa={};function ih(e){return Po.call(Wa,e)?!0:Po.call(ba,e)?!1:lh.test(e)?Wa[e]=!0:(ba[e]=!0,!1)}function oh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sh(e,t,n,r){if(t===null||typeof t>"u"||oh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ns=/[\-:]([a-z])/g;function Ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ns,Ts);ve[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ns,Ts);ve[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ns,Ts);ve[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zs(e,t,n,r){var l=ve.hasOwnProperty(t)?ve[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sh(t,n,l,r)&&(n=null),r||l===null?ih(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Os=Symbol.for("react.strict_mode"),Lo=Symbol.for("react.profiler"),Qc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),Rs=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),To=Symbol.for("react.suspense_list"),js=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Yc=Symbol.for("react.offscreen"),Va=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Xi;function yr(e){if(Xi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xi=t&&t[1]||""}return`
`+Xi+e}var Ji=!1;function qi(e,t){if(!e||Ji)return"";Ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yr(e):""}function ah(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Ln:return"Portal";case Lo:return"Profiler";case Os:return"StrictMode";case No:return"Suspense";case To:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kc:return(e.displayName||"Context")+".Consumer";case Qc:return(e._context.displayName||"Context")+".Provider";case Rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case js:return t=e.displayName||null,t!==null?t:zo(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return zo(e(t))}catch{}}return null}function uh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zo(t);case 8:return t===Os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ch(e){var t=Zc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fl(e){e._valueTracker||(e._valueTracker=ch(e))}function Gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xc(e,t){t=t.checked,t!=null&&zs(e,"checked",t,!1)}function Ro(e,t){Xc(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&jo(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ha(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jo(e,t,n){(t!=="number"||Ml(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function Bn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(wr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Jc(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ka(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dl,ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fh=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){fh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function tf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=tf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var dh=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(e,t){if(t){if(dh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,bn=null,Wn=null;function Ya(e){if(e=nl(e)){if(typeof Bo!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ki(t),Bo(e.stateNode,e.type,t))}}function rf(e){bn?Wn?Wn.push(e):Wn=[e]:bn=e}function lf(){if(bn){var e=bn,t=Wn;if(Wn=bn=null,Ya(e),t)for(e=0;e<t.length;e++)Ya(t[e])}}function of(e,t){return e(t)}function sf(){}var eo=!1;function af(e,t,n){if(eo)return e(t,n);eo=!0;try{return of(e,t,n)}finally{eo=!1,(bn!==null||Wn!==null)&&(sf(),lf())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var bo=!1;if(Lt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){bo=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{bo=!1}function ph(e,t,n,r,l,i,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Cr=!1,Hl=null,Ql=!1,Wo=null,hh={onError:function(e){Cr=!0,Hl=e}};function mh(e,t,n,r,l,i,o,s,a){Cr=!1,Hl=null,ph.apply(hh,arguments)}function gh(e,t,n,r,l,i,o,s,a){if(mh.apply(this,arguments),Cr){if(Cr){var u=Hl;Cr=!1,Hl=null}else throw Error(_(198));Ql||(Ql=!0,Wo=u)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Za(e){if(xn(e)!==e)throw Error(_(188))}function vh(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Za(l),e;if(i===r)return Za(l),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function cf(e){return e=vh(e),e!==null?ff(e):null}function ff(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ff(e);if(t!==null)return t;e=e.sibling}return null}var df=Ve.unstable_scheduleCallback,Ga=Ve.unstable_cancelCallback,yh=Ve.unstable_shouldYield,wh=Ve.unstable_requestPaint,ee=Ve.unstable_now,Sh=Ve.unstable_getCurrentPriorityLevel,Fs=Ve.unstable_ImmediatePriority,pf=Ve.unstable_UserBlockingPriority,Kl=Ve.unstable_NormalPriority,xh=Ve.unstable_LowPriority,hf=Ve.unstable_IdlePriority,yi=null,ht=null;function kh(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:_h,Ch=Math.log,Eh=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(Ch(e)/Eh|0)|0}var pl=64,hl=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Sr(s):(i&=o,i!==0&&(r=Sr(i)))}else o=n&~l,o!==0?r=Sr(o):i!==0&&(r=Sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function $h(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ph(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-rt(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=$h(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mf(){var e=pl;return pl<<=1,!(pl&4194240)&&(pl=64),e}function to(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function el(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function Lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vf,As,yf,wf,Sf,Mo=!1,ml=[],Wt=null,Vt=null,Mt=null,jr=new Map,Ir=new Map,Dt=[],Nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function fr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=nl(t),t!==null&&As(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Th(e,t,n,r,l){switch(t){case"focusin":return Wt=fr(Wt,e,t,n,r,l),!0;case"dragenter":return Vt=fr(Vt,e,t,n,r,l),!0;case"mouseover":return Mt=fr(Mt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return jr.set(i,fr(jr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ir.set(i,fr(Ir.get(i)||null,e,t,n,r,l)),!0}return!1}function xf(e){var t=un(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=uf(n),t!==null){e.blockedOn=t,Sf(e.priority,function(){yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ho(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uo=r,n.target.dispatchEvent(r),Uo=null}else return t=nl(n),t!==null&&As(t),e.blockedOn=n,!1;t.shift()}return!0}function Ja(e,t,n){zl(e)&&n.delete(t)}function zh(){Mo=!1,Wt!==null&&zl(Wt)&&(Wt=null),Vt!==null&&zl(Vt)&&(Vt=null),Mt!==null&&zl(Mt)&&(Mt=null),jr.forEach(Ja),Ir.forEach(Ja)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mo||(Mo=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,zh)))}function Fr(e){function t(l){return dr(l,e)}if(0<ml.length){dr(ml[0],e);for(var n=1;n<ml.length;n++){var r=ml[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&dr(Wt,e),Vt!==null&&dr(Vt,e),Mt!==null&&dr(Mt,e),jr.forEach(t),Ir.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)xf(n),n.blockedOn===null&&Dt.shift()}var Vn=Ot.ReactCurrentBatchConfig,Zl=!0;function Oh(e,t,n,r){var l=W,i=Vn.transition;Vn.transition=null;try{W=1,Us(e,t,n,r)}finally{W=l,Vn.transition=i}}function Rh(e,t,n,r){var l=W,i=Vn.transition;Vn.transition=null;try{W=4,Us(e,t,n,r)}finally{W=l,Vn.transition=i}}function Us(e,t,n,r){if(Zl){var l=Ho(e,t,n,r);if(l===null)fo(e,t,r,Gl,n),Xa(e,r);else if(Th(l,e,t,n,r))r.stopPropagation();else if(Xa(e,r),t&4&&-1<Nh.indexOf(e)){for(;l!==null;){var i=nl(l);if(i!==null&&vf(i),i=Ho(e,t,n,r),i===null&&fo(e,t,r,Gl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else fo(e,t,r,null,n)}}var Gl=null;function Ho(e,t,n,r){if(Gl=null,e=Is(r),e=un(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gl=e,null}function kf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sh()){case Fs:return 1;case pf:return 4;case Kl:case xh:return 16;case hf:return 536870912;default:return 16}default:return 16}}var Ut=null,Bs=null,Ol=null;function Cf(){if(Ol)return Ol;var e,t=Bs,n=t.length,r,l="value"in Ut?Ut.value:Ut.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ol=l.slice(e,1<r?1-r:void 0)}function Rl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function qa(){return!1}function He(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?gl:qa,this.isPropagationStopped=qa,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=He(nr),tl=J({},nr,{view:0,detail:0}),jh=He(tl),no,ro,pr,wi=J({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(no=e.screenX-pr.screenX,ro=e.screenY-pr.screenY):ro=no=0,pr=e),no)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),eu=He(wi),Ih=J({},wi,{dataTransfer:0}),Fh=He(Ih),Dh=J({},tl,{relatedTarget:0}),lo=He(Dh),Ah=J({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uh=He(Ah),Bh=J({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bh=He(Bh),Wh=J({},nr,{data:0}),tu=He(Wh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hh[e])?!!t[e]:!1}function Ws(){return Qh}var Kh=J({},tl,{key:function(e){if(e.key){var t=Vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?Rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yh=He(Kh),Zh=J({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=He(Zh),Gh=J({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Xh=He(Gh),Jh=J({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=He(Jh),e0=J({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=He(e0),n0=[9,13,27,32],Vs=Lt&&"CompositionEvent"in window,Er=null;Lt&&"documentMode"in document&&(Er=document.documentMode);var r0=Lt&&"TextEvent"in window&&!Er,Ef=Lt&&(!Vs||Er&&8<Er&&11>=Er),ru=" ",lu=!1;function _f(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function l0(e,t){switch(e){case"compositionend":return $f(t);case"keypress":return t.which!==32?null:(lu=!0,ru);case"textInput":return e=t.data,e===ru&&lu?null:e;default:return null}}function i0(e,t){if(Tn)return e==="compositionend"||!Vs&&_f(e,t)?(e=Cf(),Ol=Bs=Ut=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ef&&t.locale!=="ko"?null:t.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o0[e.type]:t==="textarea"}function Pf(e,t,n,r){rf(r),t=Xl(t,"onChange"),0<t.length&&(n=new bs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Dr=null;function s0(e){Af(e,0)}function Si(e){var t=Rn(e);if(Gc(t))return e}function a0(e,t){if(e==="change")return t}var Lf=!1;if(Lt){var io;if(Lt){var oo="oninput"in document;if(!oo){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),oo=typeof ou.oninput=="function"}io=oo}else io=!1;Lf=io&&(!document.documentMode||9<document.documentMode)}function su(){_r&&(_r.detachEvent("onpropertychange",Nf),Dr=_r=null)}function Nf(e){if(e.propertyName==="value"&&Si(Dr)){var t=[];Pf(t,Dr,e,Is(e)),af(s0,t)}}function u0(e,t,n){e==="focusin"?(su(),_r=t,Dr=n,_r.attachEvent("onpropertychange",Nf)):e==="focusout"&&su()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Dr)}function f0(e,t){if(e==="click")return Si(t)}function d0(e,t){if(e==="input"||e==="change")return Si(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:p0;function Ar(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Po.call(t,l)||!it(e[l],t[l]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=au(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=au(n)}}function Tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(){for(var e=window,t=Ml();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ml(e.document)}return t}function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h0(e){var t=zf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tf(n.ownerDocument.documentElement,n)){if(r!==null&&Ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=uu(n,i);var o=uu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m0=Lt&&"documentMode"in document&&11>=document.documentMode,zn=null,Qo=null,$r=null,Ko=!1;function cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ko||zn==null||zn!==Ml(r)||(r=zn,"selectionStart"in r&&Ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Ar($r,r)||($r=r,r=Xl(Qo,"onSelect"),0<r.length&&(t=new bs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function vl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},so={},Of={};Lt&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function xi(e){if(so[e])return so[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Of)return so[e]=t[n];return e}var Rf=xi("animationend"),jf=xi("animationiteration"),If=xi("animationstart"),Ff=xi("transitionend"),Df=new Map,fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){Df.set(e,t),Sn(t,[e])}for(var ao=0;ao<fu.length;ao++){var uo=fu[ao],g0=uo.toLowerCase(),v0=uo[0].toUpperCase()+uo.slice(1);Jt(g0,"on"+v0)}Jt(Rf,"onAnimationEnd");Jt(jf,"onAnimationIteration");Jt(If,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Ff,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gh(r,t,void 0,e),e.currentTarget=null}function Af(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;du(l,s,u),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;du(l,s,u),i=a}}}if(Ql)throw e=Wo,Ql=!1,Wo=null,e}function H(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var r=e+"__bubble";n.has(r)||(Uf(t,e,2,!1),n.add(r))}function co(e,t,n){var r=0;t&&(r|=4),Uf(n,e,r,t)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[yl]){e[yl]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||co(n,!1,e),co(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yl]||(t[yl]=!0,co("selectionchange",!1,t))}}function Uf(e,t,n,r){switch(kf(t)){case 1:var l=Oh;break;case 4:l=Rh;break;default:l=Us}n=l.bind(null,t,n,e),l=void 0,!bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function fo(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=un(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}af(function(){var u=i,m=Is(n),p=[];e:{var g=Df.get(e);if(g!==void 0){var w=bs,S=e;switch(e){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":w=Yh;break;case"focusin":S="focus",w=lo;break;case"focusout":S="blur",w=lo;break;case"beforeblur":case"afterblur":w=lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Xh;break;case Rf:case jf:case If:w=Uh;break;case Ff:w=qh;break;case"scroll":w=jh;break;case"wheel":w=t0;break;case"copy":case"cut":case"paste":w=bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=nu}var v=(t&4)!==0,$=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,h;c!==null;){h=c;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,f!==null&&(x=Rr(c,f),x!=null&&v.push(Br(c,x,h)))),$)break;c=c.return}0<v.length&&(g=new w(g,S,null,n,m),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Uo&&(S=n.relatedTarget||n.fromElement)&&(un(S)||S[Nt]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=u,S=S?un(S):null,S!==null&&($=xn(S),S!==$||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=u),w!==S)){if(v=eu,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=nu,x="onPointerLeave",f="onPointerEnter",c="pointer"),$=w==null?g:Rn(w),h=S==null?g:Rn(S),g=new v(x,c+"leave",w,n,m),g.target=$,g.relatedTarget=h,x=null,un(m)===u&&(v=new v(f,c+"enter",S,n,m),v.target=h,v.relatedTarget=$,x=v),$=x,w&&S)t:{for(v=w,f=S,c=0,h=v;h;h=$n(h))c++;for(h=0,x=f;x;x=$n(x))h++;for(;0<c-h;)v=$n(v),c--;for(;0<h-c;)f=$n(f),h--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=$n(v),f=$n(f)}v=null}else v=null;w!==null&&pu(p,g,w,v,!1),S!==null&&$!==null&&pu(p,$,S,v,!0)}}e:{if(g=u?Rn(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var L=a0;else if(iu(g))if(Lf)L=d0;else{L=c0;var N=u0}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=f0);if(L&&(L=L(e,u))){Pf(p,L,n,m);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&jo(g,"number",g.value)}switch(N=u?Rn(u):window,e){case"focusin":(iu(N)||N.contentEditable==="true")&&(zn=N,Qo=u,$r=null);break;case"focusout":$r=Qo=zn=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,cu(p,n,m);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":cu(p,n,m)}var P;if(Vs)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Tn?_f(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ef&&n.locale!=="ko"&&(Tn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Tn&&(P=Cf()):(Ut=m,Bs="value"in Ut?Ut.value:Ut.textContent,Tn=!0)),N=Xl(u,O),0<N.length&&(O=new tu(O,e,null,n,m),p.push({event:O,listeners:N}),P?O.data=P:(P=$f(n),P!==null&&(O.data=P)))),(P=r0?l0(e,n):i0(e,n))&&(u=Xl(u,"onBeforeInput"),0<u.length&&(m=new tu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=P))}Af(p,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rr(e,n),i!=null&&r.unshift(Br(e,i,l)),i=Rr(e,t),i!=null&&r.push(Br(e,i,l))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=Rr(n,i),a!=null&&o.unshift(Br(n,a,s))):l||(a=Rr(n,i),a!=null&&o.push(Br(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var w0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(w0,`
`).replace(S0,"")}function wl(e,t,n){if(t=hu(t),hu(e)!==t&&n)throw Error(_(425))}function Jl(){}var Yo=null,Zo=null;function Go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(C0)}:Xo;function C0(e){setTimeout(function(){throw e})}function po(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),pt="__reactFiber$"+rr,br="__reactProps$"+rr,Nt="__reactContainer$"+rr,Jo="__reactEvents$"+rr,E0="__reactListeners$"+rr,_0="__reactHandles$"+rr;function un(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[pt])return n;e=gu(e)}return t}e=n,n=e.parentNode}return null}function nl(e){return e=e[pt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ki(e){return e[br]||null}var qo=[],jn=-1;function qt(e){return{current:e}}function Q(e){0>jn||(e.current=qo[jn],qo[jn]=null,jn--)}function M(e,t){jn++,qo[jn]=e.current,e.current=t}var Xt={},ke=qt(Xt),Re=qt(!1),mn=Xt;function Yn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function je(e){return e=e.childContextTypes,e!=null}function ql(){Q(Re),Q(ke)}function vu(e,t,n){if(ke.current!==Xt)throw Error(_(168));M(ke,t),M(Re,n)}function Bf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,uh(e)||"Unknown",l));return J({},n,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,mn=ke.current,M(ke,e),M(Re,Re.current),!0}function yu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Bf(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,Q(Re),Q(ke),M(ke,e)):Q(Re),M(Re,n)}var Ct=null,Ci=!1,ho=!1;function bf(e){Ct===null?Ct=[e]:Ct.push(e)}function $0(e){Ci=!0,bf(e)}function en(){if(!ho&&Ct!==null){ho=!0;var e=0,t=W;try{var n=Ct;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,Ci=!1}catch(l){throw Ct!==null&&(Ct=Ct.slice(e+1)),df(Fs,en),l}finally{W=t,ho=!1}}return null}var In=[],Fn=0,ti=null,ni=0,Ke=[],Ye=0,gn=null,Et=1,_t="";function sn(e,t){In[Fn++]=ni,In[Fn++]=ti,ti=e,ni=t}function Wf(e,t,n){Ke[Ye++]=Et,Ke[Ye++]=_t,Ke[Ye++]=gn,gn=e;var r=Et;e=_t;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Et=1<<32-rt(t)+l|n<<l|r,_t=i+e}else Et=1<<i|n<<l|r,_t=e}function Hs(e){e.return!==null&&(sn(e,1),Wf(e,1,0))}function Qs(e){for(;e===ti;)ti=In[--Fn],In[Fn]=null,ni=In[--Fn],In[Fn]=null;for(;e===gn;)gn=Ke[--Ye],Ke[Ye]=null,_t=Ke[--Ye],Ke[Ye]=null,Et=Ke[--Ye],Ke[Ye]=null}var be=null,Be=null,Y=!1,nt=null;function Vf(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Be=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:Et,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Be=null,!0):!1;default:return!1}}function es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(Y){var t=Be;if(t){var n=t;if(!wu(e,t)){if(es(e))throw Error(_(418));t=Ht(n.nextSibling);var r=be;t&&wu(e,t)?Vf(r,n):(e.flags=e.flags&-4097|2,Y=!1,be=e)}}else{if(es(e))throw Error(_(418));e.flags=e.flags&-4097|2,Y=!1,be=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Sl(e){if(e!==be)return!1;if(!Y)return Su(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Go(e.type,e.memoizedProps)),t&&(t=Be)){if(es(e))throw Mf(),Error(_(418));for(;t;)Vf(e,t),t=Ht(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=be?Ht(e.stateNode.nextSibling):null;return!0}function Mf(){for(var e=Be;e;)e=Ht(e.nextSibling)}function Zn(){Be=be=null,Y=!1}function Ks(e){nt===null?nt=[e]:nt.push(e)}var P0=Ot.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function xl(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function Hf(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Zt(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,h,x){return c===null||c.tag!==6?(c=xo(h,f.mode,x),c.return=f,c):(c=l(c,h),c.return=f,c)}function a(f,c,h,x){var L=h.type;return L===Nn?m(f,c,h.props.children,x,h.key):c!==null&&(c.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===It&&xu(L)===c.type)?(x=l(c,h.props),x.ref=hr(f,c,h),x.return=f,x):(x=Bl(h.type,h.key,h.props,null,f.mode,x),x.ref=hr(f,c,h),x.return=f,x)}function u(f,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ko(h,f.mode,x),c.return=f,c):(c=l(c,h.children||[]),c.return=f,c)}function m(f,c,h,x,L){return c===null||c.tag!==7?(c=pn(h,f.mode,x,L),c.return=f,c):(c=l(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=xo(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case cl:return h=Bl(c.type,c.key,c.props,null,f.mode,h),h.ref=hr(f,null,c),h.return=f,h;case Ln:return c=ko(c,f.mode,h),c.return=f,c;case It:var x=c._init;return p(f,x(c._payload),h)}if(wr(c)||ur(c))return c=pn(c,f.mode,h,null),c.return=f,c;xl(f,c)}return null}function g(f,c,h,x){var L=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return L!==null?null:s(f,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case cl:return h.key===L?a(f,c,h,x):null;case Ln:return h.key===L?u(f,c,h,x):null;case It:return L=h._init,g(f,c,L(h._payload),x)}if(wr(h)||ur(h))return L!==null?null:m(f,c,h,x,null);xl(f,h)}return null}function w(f,c,h,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(h)||null,s(c,f,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:return f=f.get(x.key===null?h:x.key)||null,a(c,f,x,L);case Ln:return f=f.get(x.key===null?h:x.key)||null,u(c,f,x,L);case It:var N=x._init;return w(f,c,h,N(x._payload),L)}if(wr(x)||ur(x))return f=f.get(h)||null,m(c,f,x,L,null);xl(c,x)}return null}function S(f,c,h,x){for(var L=null,N=null,P=c,O=c=0,Z=null;P!==null&&O<h.length;O++){P.index>O?(Z=P,P=null):Z=P.sibling;var D=g(f,P,h[O],x);if(D===null){P===null&&(P=Z);break}e&&P&&D.alternate===null&&t(f,P),c=i(D,c,O),N===null?L=D:N.sibling=D,N=D,P=Z}if(O===h.length)return n(f,P),Y&&sn(f,O),L;if(P===null){for(;O<h.length;O++)P=p(f,h[O],x),P!==null&&(c=i(P,c,O),N===null?L=P:N.sibling=P,N=P);return Y&&sn(f,O),L}for(P=r(f,P);O<h.length;O++)Z=w(P,f,O,h[O],x),Z!==null&&(e&&Z.alternate!==null&&P.delete(Z.key===null?O:Z.key),c=i(Z,c,O),N===null?L=Z:N.sibling=Z,N=Z);return e&&P.forEach(function(Ce){return t(f,Ce)}),Y&&sn(f,O),L}function v(f,c,h,x){var L=ur(h);if(typeof L!="function")throw Error(_(150));if(h=L.call(h),h==null)throw Error(_(151));for(var N=L=null,P=c,O=c=0,Z=null,D=h.next();P!==null&&!D.done;O++,D=h.next()){P.index>O?(Z=P,P=null):Z=P.sibling;var Ce=g(f,P,D.value,x);if(Ce===null){P===null&&(P=Z);break}e&&P&&Ce.alternate===null&&t(f,P),c=i(Ce,c,O),N===null?L=Ce:N.sibling=Ce,N=Ce,P=Z}if(D.done)return n(f,P),Y&&sn(f,O),L;if(P===null){for(;!D.done;O++,D=h.next())D=p(f,D.value,x),D!==null&&(c=i(D,c,O),N===null?L=D:N.sibling=D,N=D);return Y&&sn(f,O),L}for(P=r(f,P);!D.done;O++,D=h.next())D=w(P,f,O,D.value,x),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?O:D.key),c=i(D,c,O),N===null?L=D:N.sibling=D,N=D);return e&&P.forEach(function(Le){return t(f,Le)}),Y&&sn(f,O),L}function $(f,c,h,x){if(typeof h=="object"&&h!==null&&h.type===Nn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case cl:e:{for(var L=h.key,N=c;N!==null;){if(N.key===L){if(L=h.type,L===Nn){if(N.tag===7){n(f,N.sibling),c=l(N,h.props.children),c.return=f,f=c;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===It&&xu(L)===N.type){n(f,N.sibling),c=l(N,h.props),c.ref=hr(f,N,h),c.return=f,f=c;break e}n(f,N);break}else t(f,N);N=N.sibling}h.type===Nn?(c=pn(h.props.children,f.mode,x,h.key),c.return=f,f=c):(x=Bl(h.type,h.key,h.props,null,f.mode,x),x.ref=hr(f,c,h),x.return=f,f=x)}return o(f);case Ln:e:{for(N=h.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=l(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ko(h,f.mode,x),c.return=f,f=c}return o(f);case It:return N=h._init,$(f,c,N(h._payload),x)}if(wr(h))return S(f,c,h,x);if(ur(h))return v(f,c,h,x);xl(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,h),c.return=f,f=c):(n(f,c),c=xo(h,f.mode,x),c.return=f,f=c),o(f)):n(f,c)}return $}var Gn=Hf(!0),Qf=Hf(!1),ri=qt(null),li=null,Dn=null,Ys=null;function Zs(){Ys=Dn=li=null}function Gs(e){var t=ri.current;Q(ri),e._currentValue=t}function ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){li=e,Ys=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Ys!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(li===null)throw Error(_(308));Dn=e,li.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var cn=null;function Xs(e){cn===null?cn=[e]:cn.push(e)}function Kf(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Xs(t)):(n.next=l.next,l.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Tt(e,n)}return l=r.interleaved,l===null?(t.next=t,Xs(r)):(t.next=l.next,l.next=t),r.interleaved=t,Tt(e,n)}function jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ds(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var l=e.updateQueue;Ft=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=a))}if(i!==null){var p=l.baseState;o=0,m=u=a=null,s=i;do{var g=s.lane,w=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,v=s;switch(g=t,w=n,v.tag){case 1:if(S=v.payload,typeof S=="function"){p=S.call(w,p,g);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,g=typeof S=="function"?S.call(w,p,g):S,g==null)break e;p=J({},p,g);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=w,a=p):m=m.next=w,o|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(a=p),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);yn|=o,e.lanes=o,e.memoizedState=p}}function Cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var rl={},mt=qt(rl),Wr=qt(rl),Vr=qt(rl);function fn(e){if(e===rl)throw Error(_(174));return e}function qs(e,t){switch(M(Vr,t),M(Wr,e),M(mt,rl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fo(t,e)}Q(mt),M(mt,t)}function Xn(){Q(mt),Q(Wr),Q(Vr)}function Zf(e){fn(Vr.current);var t=fn(mt.current),n=Fo(t,e.type);t!==n&&(M(Wr,e),M(mt,n))}function ea(e){Wr.current===e&&(Q(mt),Q(Wr))}var G=qt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=[];function ta(){for(var e=0;e<mo.length;e++)mo[e]._workInProgressVersionPrimary=null;mo.length=0}var Il=Ot.ReactCurrentDispatcher,go=Ot.ReactCurrentBatchConfig,vn=0,X=null,se=null,fe=null,si=!1,Pr=!1,Mr=0,L0=0;function ye(){throw Error(_(321))}function na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function ra(e,t,n,r,l,i){if(vn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Il.current=e===null||e.memoizedState===null?O0:R0,e=n(r,l),Pr){i=0;do{if(Pr=!1,Mr=0,25<=i)throw Error(_(301));i+=1,fe=se=null,t.updateQueue=null,Il.current=j0,e=n(r,l)}while(Pr)}if(Il.current=ai,t=se!==null&&se.next!==null,vn=0,fe=se=X=null,si=!1,t)throw Error(_(300));return e}function la(){var e=Mr!==0;return Mr=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?X.memoizedState=fe=e:fe=fe.next=e,fe}function Je(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=fe===null?X.memoizedState:fe.next;if(t!==null)fe=t,se=e;else{if(e===null)throw Error(_(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},fe===null?X.memoizedState=fe=e:fe=fe.next=e}return fe}function Hr(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=Je(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=se,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,u=i;do{var m=u.lane;if((vn&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,o=r):a=a.next=p,X.lanes|=m,yn|=m}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=s,it(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,yn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yo(e){var t=Je(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);it(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gf(){}function Xf(e,t){var n=X,r=Je(),l=t(),i=!it(r.memoizedState,l);if(i&&(r.memoizedState=l,Oe=!0),r=r.queue,ia(ed.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Qr(9,qf.bind(null,n,r,l,t),void 0,null),de===null)throw Error(_(349));vn&30||Jf(n,t,l)}return l}function Jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qf(e,t,n,r){t.value=n,t.getSnapshot=r,td(t)&&nd(e)}function ed(e,t,n){return n(function(){td(t)&&nd(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function nd(e){var t=Tt(e,1);t!==null&&lt(t,e,1,-1)}function Eu(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=z0.bind(null,X,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rd(){return Je().memoizedState}function Fl(e,t,n,r){var l=ct();X.flags|=e,l.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function Ei(e,t,n,r){var l=Je();r=r===void 0?null:r;var i=void 0;if(se!==null){var o=se.memoizedState;if(i=o.destroy,r!==null&&na(r,o.deps)){l.memoizedState=Qr(t,n,i,r);return}}X.flags|=e,l.memoizedState=Qr(1|t,n,i,r)}function _u(e,t){return Fl(8390656,8,e,t)}function ia(e,t){return Ei(2048,8,e,t)}function ld(e,t){return Ei(4,2,e,t)}function id(e,t){return Ei(4,4,e,t)}function od(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4,4,od.bind(null,t,e),n)}function oa(){}function ad(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ud(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cd(e,t,n){return vn&21?(it(n,t)||(n=mf(),X.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function N0(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=go.transition;go.transition={};try{e(!1),t()}finally{W=n,go.transition=r}}function fd(){return Je().memoizedState}function T0(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dd(e))pd(t,n);else if(n=Kf(e,t,n,r),n!==null){var l=_e();lt(n,e,r,l),hd(n,t,r)}}function z0(e,t,n){var r=Yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dd(e))pd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,it(s,o)){var a=t.interleaved;a===null?(l.next=l,Xs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Kf(e,t,l,r),n!==null&&(l=_e(),lt(n,e,r,l),hd(n,t,r))}}function dd(e){var t=e.alternate;return e===X||t!==null&&t===X}function pd(e,t){Pr=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ds(e,n)}}var ai={readContext:Xe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},O0={readContext:Xe,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:_u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fl(4194308,4,od.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fl(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=T0.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Eu,useDebugValue:oa,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Eu(!1),t=e[0];return e=N0.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=ct();if(Y){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),de===null)throw Error(_(349));vn&30||Jf(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,_u(ed.bind(null,r,i,e),[e]),r.flags|=2048,Qr(9,qf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=de.identifierPrefix;if(Y){var n=_t,r=Et;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R0={readContext:Xe,useCallback:ad,useContext:Xe,useEffect:ia,useImperativeHandle:sd,useInsertionEffect:ld,useLayoutEffect:id,useMemo:ud,useReducer:vo,useRef:rd,useState:function(){return vo(Hr)},useDebugValue:oa,useDeferredValue:function(e){var t=Je();return cd(t,se.memoizedState,e)},useTransition:function(){var e=vo(Hr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Xf,useId:fd,unstable_isNewReconciler:!1},j0={readContext:Xe,useCallback:ad,useContext:Xe,useEffect:ia,useImperativeHandle:sd,useInsertionEffect:ld,useLayoutEffect:id,useMemo:ud,useReducer:yo,useRef:rd,useState:function(){return yo(Hr)},useDebugValue:oa,useDeferredValue:function(e){var t=Je();return se===null?t.memoizedState=e:cd(t,se.memoizedState,e)},useTransition:function(){var e=yo(Hr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Xf,useId:fd,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _i={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),l=Yt(e),i=Pt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,l),t!==null&&(lt(t,e,l,r),jl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),l=Yt(e),i=Pt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,l),t!==null&&(lt(t,e,l,r),jl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Yt(e),l=Pt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Qt(e,l,r),t!==null&&(lt(t,e,r,n),jl(t,e,r))}};function $u(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(l,i):!0}function md(e,t,n){var r=!1,l=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(l=je(t)?mn:ke.current,r=t.contextTypes,i=(r=r!=null)?Yn(e,l):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_i,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_i.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Js(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Xe(i):(i=je(t)?mn:ke.current,l.context=Yn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(rs(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&_i.enqueueReplaceState(l,l.state,null),ii(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=ah(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function gd(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,ms=r),is(e,t)},n}function vd(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){is(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){is(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new I0;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Z0.bind(null,e,t,n),t.then(e,e))}function Nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var F0=Ot.ReactCurrentOwner,Oe=!1;function Ee(e,t,n,r){t.child=e===null?Qf(t,null,n,r):Gn(t,e.child,n,r)}function zu(e,t,n,r,l){n=n.render;var i=t.ref;return Mn(t,l),r=ra(e,t,n,r,i,l),n=la(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(Y&&n&&Hs(t),t.flags|=1,Ee(e,t,r,l),t.child)}function Ou(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ha(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yd(e,t,i,r,l)):(e=Bl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(o,r)&&e.ref===t.ref)return zt(e,t,l)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,zt(e,t,l)}return os(e,t,n,r,l)}function wd(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Un,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Un,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,M(Un,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,M(Un,Ue),Ue|=r;return Ee(e,t,l,n),t.child}function Sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function os(e,t,n,r,l){var i=je(n)?mn:ke.current;return i=Yn(t,i),Mn(t,l),n=ra(e,t,n,r,i,l),r=la(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(Y&&r&&Hs(t),t.flags|=1,Ee(e,t,n,l),t.child)}function Ru(e,t,n,r,l){if(je(n)){var i=!0;ei(t)}else i=!1;if(Mn(t,l),t.stateNode===null)Dl(e,t),md(t,n,r),ls(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=je(n)?mn:ke.current,u=Yn(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Pu(t,o,r,u),Ft=!1;var g=t.memoizedState;o.state=g,ii(t,r,o,l),a=t.memoizedState,s!==r||g!==a||Re.current||Ft?(typeof m=="function"&&(rs(t,n,m,r),a=t.memoizedState),(s=Ft||$u(t,n,s,r,g,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Yf(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:et(t.type,s),o.props=u,p=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=je(n)?mn:ke.current,a=Yn(t,a));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||g!==a)&&Pu(t,o,r,a),Ft=!1,g=t.memoizedState,o.state=g,ii(t,r,o,l);var S=t.memoizedState;s!==p||g!==S||Re.current||Ft?(typeof w=="function"&&(rs(t,n,w,r),S=t.memoizedState),(u=Ft||$u(t,n,u,r,g,S,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ss(e,t,n,r,i,l)}function ss(e,t,n,r,l,i){Sd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&yu(t,n,!1),zt(e,t,i);r=t.stateNode,F0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,s,i)):Ee(e,t,s,i),t.memoizedState=r.state,l&&yu(t,n,!0),t.child}function xd(e){var t=e.stateNode;t.pendingContext?vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vu(e,t.context,!1),qs(e,t.containerInfo)}function ju(e,t,n,r,l){return Zn(),Ks(l),t.flags|=256,Ee(e,t,n,r),t.child}var as={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var r=t.pendingProps,l=G.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(G,l&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Li(o,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=us(n),t.memoizedState=as,e):sa(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return D0(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Zt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Zt(s,i):(i=pn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?us(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=as,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sa(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kl(e,t,n,r){return r!==null&&Ks(r),Gn(t,e.child,null,n),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function D0(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(_(422))),kl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Li({mode:"visible",children:r.children},l,0,null),i=pn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,o),t.child.memoizedState=us(o),t.memoizedState=as,i);if(!(t.mode&1))return kl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=wo(i,r,void 0),kl(e,t,o,r)}if(s=(o&e.childLanes)!==0,Oe||s){if(r=de,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Tt(e,l),lt(r,e,l,-1))}return pa(),r=wo(Error(_(421))),kl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=G0.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Be=Ht(l.nextSibling),be=t,Y=!0,nt=null,e!==null&&(Ke[Ye++]=Et,Ke[Ye++]=_t,Ke[Ye++]=gn,Et=e.id,_t=e.overflow,gn=t),t=sa(t,r.children),t.flags|=4096,t)}function Iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ns(e.return,t,n)}function So(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Cd(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ee(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,n,t);else if(e.tag===19)Iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),So(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&oi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}So(t,!0,n,null,i);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function A0(e,t,n){switch(t.tag){case 3:xd(t),Zn();break;case 5:Zf(t);break;case 1:je(t.type)&&ei(t);break;case 4:qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(ri,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?kd(e,t,n):(M(G,G.current&1),e=zt(e,t,n),e!==null?e.sibling:null);M(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,wd(e,t,n)}return zt(e,t,n)}var Ed,cs,_d,$d;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cs=function(){};_d=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,fn(mt.current);var i=null;switch(n){case"input":l=Oo(e,l),r=Oo(e,r),i=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":l=Io(e,l),r=Io(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jl)}Do(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};$d=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function U0(e,t,n){var r=t.pendingProps;switch(Qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return je(t.type)&&ql(),we(t),null;case 3:return r=t.stateNode,Xn(),Q(Re),Q(ke),ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(ys(nt),nt=null))),cs(e,t),we(t),null;case 5:ea(t);var l=fn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return we(t),null}if(e=fn(mt.current),Sl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[br]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<xr.length;l++)H(xr[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ma(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Qa(r,i),H("invalid",r)}Do(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&wl(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&wl(r.textContent,s,e),l=["children",""+s]):zr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":fl(r),Ha(r,i,!0);break;case"textarea":fl(r),Ka(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Jl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[br]=r,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ao(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<xr.length;l++)H(xr[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":Ma(e,r),l=Oo(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),H("invalid",e);break;case"textarea":Qa(e,r),l=Io(e,r),H("invalid",e);break;default:l=r}Do(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?nf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ef(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Or(e,a):typeof a=="number"&&Or(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&H("scroll",e):a!=null&&zs(e,i,a,o))}switch(n){case"input":fl(e),Ha(e,r,!1);break;case"textarea":fl(e),Ka(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)$d(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=fn(Vr.current),fn(mt.current),Sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:wl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return we(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Be!==null&&t.mode&1&&!(t.flags&128))Mf(),Zn(),t.flags|=98560,i=!1;else if(i=Sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[pt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else nt!==null&&(ys(nt),nt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ae===0&&(ae=3):pa())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Xn(),cs(e,t),e===null&&Ur(t.stateNode.containerInfo),we(t),null;case 10:return Gs(t.type._context),we(t),null;case 17:return je(t.type)&&ql(),we(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)mr(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oi(e),o!==null){for(t.flags|=128,mr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>qn&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=oi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Y)return we(t),null}else 2*ee()-i.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=G.current,M(G,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return da(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function B0(e,t){switch(Qs(t),t.tag){case 1:return je(t.type)&&ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),Q(Re),Q(ke),ta(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ea(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Xn(),null;case 10:return Gs(t.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var Cl=!1,xe=!1,b0=typeof WeakSet=="function"?WeakSet:Set,z=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function fs(e,t,n){try{n()}catch(r){q(e,t,r)}}var Fu=!1;function W0(e,t){if(Yo=Zl,e=zf(),Ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,u=0,m=0,p=e,g=null;t:for(;;){for(var w;p!==n||l!==0&&p.nodeType!==3||(s=o+l),p!==i||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===e)break t;if(g===n&&++u===l&&(s=o),g===i&&++m===r&&(a=o),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zo={focusedElem:e,selectionRange:n},Zl=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,$=S.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:et(t.type,v),$);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return S=Fu,Fu=!1,S}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&fs(t,n,i)}l=l.next}while(l!==r)}}function $i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ds(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[br],delete t[Jo],delete t[E0],delete t[_0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jl));else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}var he=null,tt=!1;function jt(e,t,n){for(n=n.child;n!==null;)Nd(e,t,n),n=n.sibling}function Nd(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 5:xe||An(n,t);case 6:var r=he,l=tt;he=null,jt(e,t,n),he=r,tt=l,he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?po(e.parentNode,n):e.nodeType===1&&po(e,n),Fr(e)):po(he,n.stateNode));break;case 4:r=he,l=tt,he=n.stateNode.containerInfo,tt=!0,jt(e,t,n),he=r,tt=l;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&fs(n,t,o),l=l.next}while(l!==r)}jt(e,t,n);break;case 1:if(!xe&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,jt(e,t,n),xe=r):jt(e,t,n);break;default:jt(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new b0),t.forEach(function(r){var l=X0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,tt=!1;break e;case 3:he=s.stateNode.containerInfo,tt=!0;break e;case 4:he=s.stateNode.containerInfo,tt=!0;break e}s=s.return}if(he===null)throw Error(_(160));Nd(i,o,l),he=null,tt=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){q(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Td(t,e),t=t.sibling}function Td(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ut(e),r&4){try{Lr(3,e,e.return),$i(3,e)}catch(v){q(e,e.return,v)}try{Lr(5,e,e.return)}catch(v){q(e,e.return,v)}}break;case 1:qe(t,e),ut(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(qe(t,e),ut(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var l=e.stateNode;try{Or(l,"")}catch(v){q(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Xc(l,i),Ao(s,o);var u=Ao(s,i);for(o=0;o<a.length;o+=2){var m=a[o],p=a[o+1];m==="style"?nf(l,p):m==="dangerouslySetInnerHTML"?ef(l,p):m==="children"?Or(l,p):zs(l,m,p,u)}switch(s){case"input":Ro(l,i);break;case"textarea":Jc(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Bn(l,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?Bn(l,!!i.multiple,i.defaultValue,!0):Bn(l,!!i.multiple,i.multiple?[]:"",!1))}l[br]=i}catch(v){q(e,e.return,v)}}break;case 6:if(qe(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){q(e,e.return,v)}}break;case 3:if(qe(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(v){q(e,e.return,v)}break;case 4:qe(t,e),ut(e);break;case 13:qe(t,e),ut(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ca=ee())),r&4&&Au(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||m,qe(t,e),xe=u):qe(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(p=z=m;z!==null;){switch(g=z,w=g.child,g.tag){case 0:case 11:case 14:case 15:Lr(4,g,g.return);break;case 1:An(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){q(r,n,v)}}break;case 5:An(g,g.return);break;case 22:if(g.memoizedState!==null){Bu(p);continue}}w!==null?(w.return=g,z=w):Bu(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=tf("display",o))}catch(v){q(e,e.return,v)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){q(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qe(t,e),ut(e),r&4&&Au(e);break;case 21:break;default:qe(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ld(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Or(l,""),r.flags&=-33);var i=Du(e);hs(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Du(e);ps(e,s,o);break;default:throw Error(_(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V0(e,t,n){z=e,zd(e)}function zd(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var l=z,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Cl;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||xe;s=Cl;var u=xe;if(Cl=o,(xe=a)&&!u)for(z=l;z!==null;)o=z,a=o.child,o.tag===22&&o.memoizedState!==null?bu(l):a!==null?(a.return=o,z=a):bu(l);for(;i!==null;)z=i,zd(i),i=i.sibling;z=l,Cl=s,xe=u}Uu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,z=i):Uu(e)}}function Uu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||$i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Fr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}xe||t.flags&512&&ds(t)}catch(g){q(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Bu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function bu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$i(4,t)}catch(a){q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){q(t,l,a)}}var i=t.return;try{ds(t)}catch(a){q(t,i,a)}break;case 5:var o=t.return;try{ds(t)}catch(a){q(t,o,a)}}}catch(a){q(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var M0=Math.ceil,ui=Ot.ReactCurrentDispatcher,aa=Ot.ReactCurrentOwner,Ge=Ot.ReactCurrentBatchConfig,U=0,de=null,le=null,ge=0,Ue=0,Un=qt(0),ae=0,Kr=null,yn=0,Pi=0,ua=0,Nr=null,ze=null,ca=0,qn=1/0,kt=null,ci=!1,ms=null,Kt=null,El=!1,Bt=null,fi=0,Tr=0,gs=null,Al=-1,Ul=0;function _e(){return U&6?ee():Al!==-1?Al:Al=ee()}function Yt(e){return e.mode&1?U&2&&ge!==0?ge&-ge:P0.transition!==null?(Ul===0&&(Ul=mf()),Ul):(e=W,e!==0||(e=window.event,e=e===void 0?16:kf(e.type)),e):1}function lt(e,t,n,r){if(50<Tr)throw Tr=0,gs=null,Error(_(185));el(e,n,r),(!(U&2)||e!==de)&&(e===de&&(!(U&2)&&(Pi|=n),ae===4&&At(e,ge)),Ie(e,r),n===1&&U===0&&!(t.mode&1)&&(qn=ee()+500,Ci&&en()))}function Ie(e,t){var n=e.callbackNode;Ph(e,t);var r=Yl(e,e===de?ge:0);if(r===0)n!==null&&Ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ga(n),t===1)e.tag===0?$0(Wu.bind(null,e)):bf(Wu.bind(null,e)),k0(function(){!(U&6)&&en()}),n=null;else{switch(gf(r)){case 1:n=Fs;break;case 4:n=pf;break;case 16:n=Kl;break;case 536870912:n=hf;break;default:n=Kl}n=Ud(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(Al=-1,Ul=0,U&6)throw Error(_(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=Yl(e,e===de?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var l=U;U|=2;var i=jd();(de!==e||ge!==t)&&(kt=null,qn=ee()+500,dn(e,t));do try{K0();break}catch(s){Rd(e,s)}while(!0);Zs(),ui.current=i,U=l,le!==null?t=0:(de=null,ge=0,t=ae)}if(t!==0){if(t===2&&(l=Vo(e),l!==0&&(r=l,t=vs(e,l))),t===1)throw n=Kr,dn(e,0),At(e,r),Ie(e,ee()),n;if(t===6)At(e,r);else{if(l=e.current.alternate,!(r&30)&&!H0(l)&&(t=di(e,r),t===2&&(i=Vo(e),i!==0&&(r=i,t=vs(e,i))),t===1))throw n=Kr,dn(e,0),At(e,r),Ie(e,ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:an(e,ze,kt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=ca+500-ee(),10<t)){if(Yl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Xo(an.bind(null,e,ze,kt),t);break}an(e,ze,kt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-rt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){e.timeoutHandle=Xo(an.bind(null,e,ze,kt),r);break}an(e,ze,kt);break;case 5:an(e,ze,kt);break;default:throw Error(_(329))}}}return Ie(e,ee()),e.callbackNode===n?Od.bind(null,e):null}function vs(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=di(e,t),e!==2&&(t=ze,ze=n,t!==null&&ys(t)),e}function ys(e){ze===null?ze=e:ze.push.apply(ze,e)}function H0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!it(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~ua,t&=~Pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Wu(e){if(U&6)throw Error(_(327));Hn();var t=Yl(e,0);if(!(t&1))return Ie(e,ee()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=Vo(e);r!==0&&(t=r,n=vs(e,r))}if(n===1)throw n=Kr,dn(e,0),At(e,t),Ie(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,ze,kt),Ie(e,ee()),null}function fa(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(qn=ee()+500,Ci&&en())}}function wn(e){Bt!==null&&Bt.tag===0&&!(U&6)&&Hn();var t=U;U|=1;var n=Ge.transition,r=W;try{if(Ge.transition=null,W=1,e)return e()}finally{W=r,Ge.transition=n,U=t,!(U&6)&&en()}}function da(){Ue=Un.current,Q(Un)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,x0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ql();break;case 3:Xn(),Q(Re),Q(ke),ta();break;case 5:ea(r);break;case 4:Xn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Gs(r.type._context);break;case 22:case 23:da()}n=n.return}if(de=e,le=e=Zt(e.current,null),ge=Ue=t,ae=0,Kr=null,ua=Pi=yn=0,ze=Nr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}cn=null}return e}function Rd(e,t){do{var n=le;try{if(Zs(),Il.current=ai,si){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}si=!1}if(vn=0,fe=se=X=null,Pr=!1,Mr=0,aa.current=null,n===null||n.return===null){ae=1,Kr=t,le=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=ge,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Nu(o);if(w!==null){w.flags&=-257,Tu(w,o,s,i,t),w.mode&1&&Lu(i,u,t),t=w,a=u;var S=t.updateQueue;if(S===null){var v=new Set;v.add(a),t.updateQueue=v}else S.add(a);break e}else{if(!(t&1)){Lu(i,u,t),pa();break e}a=Error(_(426))}}else if(Y&&s.mode&1){var $=Nu(o);if($!==null){!($.flags&65536)&&($.flags|=256),Tu($,o,s,i,t),Ks(Jn(a,s));break e}}i=a=Jn(a,s),ae!==4&&(ae=2),Nr===null?Nr=[i]:Nr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=gd(i,a,t);ku(i,f);break e;case 1:s=a;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Kt===null||!Kt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=vd(i,s,t);ku(i,x);break e}}i=i.return}while(i!==null)}Fd(n)}catch(L){t=L,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function jd(){var e=ui.current;return ui.current=ai,e===null?ai:e}function pa(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(yn&268435455)&&!(Pi&268435455)||At(de,ge)}function di(e,t){var n=U;U|=2;var r=jd();(de!==e||ge!==t)&&(kt=null,dn(e,t));do try{Q0();break}catch(l){Rd(e,l)}while(!0);if(Zs(),U=n,ui.current=r,le!==null)throw Error(_(261));return de=null,ge=0,ae}function Q0(){for(;le!==null;)Id(le)}function K0(){for(;le!==null&&!yh();)Id(le)}function Id(e){var t=Ad(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Fd(e):le=t,aa.current=null}function Fd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=B0(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,le=null;return}}else if(n=U0(n,t,Ue),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ae===0&&(ae=5)}function an(e,t,n){var r=W,l=Ge.transition;try{Ge.transition=null,W=1,Y0(e,t,n,r)}finally{Ge.transition=l,W=r}return null}function Y0(e,t,n,r){do Hn();while(Bt!==null);if(U&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Lh(e,i),e===de&&(le=de=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,Ud(Kl,function(){return Hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var o=W;W=1;var s=U;U|=4,aa.current=null,W0(e,n),Td(n,e),h0(Zo),Zl=!!Yo,Zo=Yo=null,e.current=n,V0(n),wh(),U=s,W=o,Ge.transition=i}else e.current=n;if(El&&(El=!1,Bt=e,fi=l),i=e.pendingLanes,i===0&&(Kt=null),kh(n.stateNode),Ie(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ci)throw ci=!1,e=ms,ms=null,e;return fi&1&&e.tag!==0&&Hn(),i=e.pendingLanes,i&1?e===gs?Tr++:(Tr=0,gs=e):Tr=0,en(),null}function Hn(){if(Bt!==null){var e=gf(fi),t=Ge.transition,n=W;try{if(Ge.transition=null,W=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,fi=0,U&6)throw Error(_(331));var l=U;for(U|=4,z=e.current;z!==null;){var i=z,o=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(z=u;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Lr(8,m,i)}var p=m.child;if(p!==null)p.return=m,z=p;else for(;z!==null;){m=z;var g=m.sibling,w=m.return;if(Pd(m),m===u){z=null;break}if(g!==null){g.return=w,z=g;break}z=w}}}var S=i.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var $=v.sibling;v.sibling=null,v=$}while(v!==null)}}z=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,z=o;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,z=f;break e}z=i.return}}var c=e.current;for(z=c;z!==null;){o=z;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,z=h;else e:for(o=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:$i(9,s)}}catch(L){q(s,s.return,L)}if(s===o){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(U=l,en(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(yi,e)}catch{}r=!0}return r}finally{W=n,Ge.transition=t}}return!1}function Vu(e,t,n){t=Jn(n,t),t=gd(e,t,1),e=Qt(e,t,1),t=_e(),e!==null&&(el(e,1,t),Ie(e,t))}function q(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=Jn(n,e),e=vd(t,e,1),t=Qt(t,e,1),e=_e(),t!==null&&(el(t,1,e),Ie(t,e));break}}t=t.return}}function Z0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(ge&n)===n&&(ae===4||ae===3&&(ge&130023424)===ge&&500>ee()-ca?dn(e,0):ua|=n),Ie(e,t)}function Dd(e,t){t===0&&(e.mode&1?(t=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):t=1);var n=_e();e=Tt(e,t),e!==null&&(el(e,t,n),Ie(e,n))}function G0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dd(e,n)}function X0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Dd(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,A0(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,Y&&t.flags&1048576&&Wf(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dl(e,t),e=t.pendingProps;var l=Yn(t,ke.current);Mn(t,n),l=ra(null,t,r,e,l,n);var i=la();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,ei(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Js(t),l.updater=_i,t.stateNode=l,l._reactInternals=t,ls(t,r,e,n),t=ss(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&Hs(t),Ee(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=q0(r),e=et(r,e),l){case 0:t=os(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=Ou(null,t,r,et(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),os(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),Ru(e,t,r,l,n);case 3:e:{if(xd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Yf(e,t),ii(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Jn(Error(_(423)),t),t=ju(e,t,r,n,l);break e}else if(r!==l){l=Jn(Error(_(424)),t),t=ju(e,t,r,n,l);break e}else for(Be=Ht(t.stateNode.containerInfo.firstChild),be=t,Y=!0,nt=null,n=Qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===l){t=zt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Zf(t),e===null&&ts(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Go(r,l)?o=null:i!==null&&Go(r,i)&&(t.flags|=32),Sd(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&ts(t),null;case 13:return kd(e,t,n);case 4:return qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),zu(e,t,r,l,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,M(ri,r._currentValue),r._currentValue=o,i!==null)if(it(i.value,o)){if(i.children===l.children&&!Re.current){t=zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ns(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ns(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ee(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Mn(t,n),l=Xe(l),r=r(l),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,l=et(r,t.pendingProps),l=et(r.type,l),Ou(e,t,r,l,n);case 15:return yd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),Dl(e,t),t.tag=1,je(r)?(e=!0,ei(t)):e=!1,Mn(t,n),md(t,r,l),ls(t,r,l,n),ss(null,t,r,!0,e,n);case 19:return Cd(e,t,n);case 22:return wd(e,t,n)}throw Error(_(156,t.tag))};function Ud(e,t){return df(e,t)}function J0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new J0(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function q0(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rs)return 11;if(e===js)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")ha(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Nn:return pn(n.children,l,i,t);case Os:o=8,l|=8;break;case Lo:return e=Ze(12,n,t,l|2),e.elementType=Lo,e.lanes=i,e;case No:return e=Ze(13,n,t,l),e.elementType=No,e.lanes=i,e;case To:return e=Ze(19,n,t,l),e.elementType=To,e.lanes=i,e;case Yc:return Li(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qc:o=10;break e;case Kc:o=9;break e;case Rs:o=11;break e;case js:o=14;break e;case It:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ze(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Li(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Yc,e.lanes=n,e.stateNode={isHidden:!1},e}function xo(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function em(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=to(0),this.expirationTimes=to(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ma(e,t,n,r,l,i,o,s,a){return e=new em(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Js(i),e}function tm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bd(e){if(!e)return Xt;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(je(n))return Bf(e,n,t)}return t}function bd(e,t,n,r,l,i,o,s,a){return e=ma(n,r,!0,e,l,i,o,s,a),e.context=Bd(null),n=e.current,r=_e(),l=Yt(n),i=Pt(r,l),i.callback=t??null,Qt(n,i,l),e.current.lanes=l,el(e,l,r),Ie(e,r),e}function Ni(e,t,n,r){var l=t.current,i=_e(),o=Yt(l);return n=Bd(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(l,t,o),e!==null&&(lt(e,l,o,i),jl(e,l,o)),o}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ga(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function nm(){return null}var Wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function va(e){this._internalRoot=e}Ti.prototype.render=va.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ni(e,t,null,null)};Ti.prototype.unmount=va.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Ni(null,e,null,null)}),t[Nt]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&xf(e)}};function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function rm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=pi(o);i.call(u)}}var o=bd(t,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=o,e[Nt]=o.current,Ur(e.nodeType===8?e.parentNode:e),wn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=pi(a);s.call(u)}}var a=ma(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=a,e[Nt]=a.current,Ur(e.nodeType===8?e.parentNode:e),wn(function(){Ni(t,a,n,r)}),a}function Oi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=pi(o);s.call(a)}}Ni(t,o,e,l)}else o=rm(n,t,e,l,r);return pi(o)}vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(Ds(t,n|1),Ie(t,ee()),!(U&6)&&(qn=ee()+500,en()))}break;case 13:wn(function(){var r=Tt(e,1);if(r!==null){var l=_e();lt(r,e,1,l)}}),ga(e,1)}};As=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=_e();lt(t,e,134217728,n)}ga(e,134217728)}};yf=function(e){if(e.tag===13){var t=Yt(e),n=Tt(e,t);if(n!==null){var r=_e();lt(n,e,t,r)}ga(e,t)}};wf=function(){return W};Sf=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Bo=function(e,t,n){switch(t){case"input":if(Ro(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ki(r);if(!l)throw Error(_(90));Gc(r),Ro(r,l)}}}break;case"textarea":Jc(e,n);break;case"select":t=n.value,t!=null&&Bn(e,!!n.multiple,t,!1)}};of=fa;sf=wn;var lm={usingClientEntryPoint:!1,Events:[nl,Rn,ki,rf,lf,fa]},gr={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},im={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cf(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{yi=_l.inject(im),ht=_l}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ya(t))throw Error(_(200));return tm(e,t,null,n)};Me.createRoot=function(e,t){if(!ya(e))throw Error(_(299));var n=!1,r="",l=Wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ma(e,1,!1,null,null,n,!1,r,l),e[Nt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new va(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=cf(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return wn(e)};Me.hydrate=function(e,t,n){if(!zi(t))throw Error(_(200));return Oi(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!ya(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Wd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=bd(t,null,e,1,n??null,l,!1,i,o),e[Nt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ti(t)};Me.render=function(e,t,n){if(!zi(t))throw Error(_(200));return Oi(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!zi(e))throw Error(_(40));return e._reactRootContainer?(wn(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Me.unstable_batchedUpdates=fa;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Oi(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vd)}catch(e){console.error(e)}}Vd(),Wc.exports=Me;var om=Wc.exports,Qu=om;$o.createRoot=Qu.createRoot,$o.hydrateRoot=Qu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yr(){return Yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yr.apply(this,arguments)}var bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bt||(bt={}));const Ku="popstate";function sm(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:s}=r.location;return ws("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Md(l)}return um(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function am(){return Math.random().toString(36).substr(2,8)}function Yu(e,t){return{usr:e.state,key:e.key,idx:t}}function ws(e,t,n,r){return n===void 0&&(n=null),Yr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?lr(t):t,{state:n,key:t&&t.key||r||am()})}function Md(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function lr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function um(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=bt.Pop,a=null,u=m();u==null&&(u=0,o.replaceState(Yr({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function p(){s=bt.Pop;let $=m(),f=$==null?null:$-u;u=$,a&&a({action:s,location:v.location,delta:f})}function g($,f){s=bt.Push;let c=ws(v.location,$,f);u=m()+1;let h=Yu(c,u),x=v.createHref(c);try{o.pushState(h,"",x)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(x)}i&&a&&a({action:s,location:v.location,delta:1})}function w($,f){s=bt.Replace;let c=ws(v.location,$,f);u=m();let h=Yu(c,u),x=v.createHref(c);o.replaceState(h,"",x),i&&a&&a({action:s,location:v.location,delta:0})}function S($){let f=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof $=="string"?$:Md($);return c=c.replace(/ $/,"%20"),ie(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return s},get location(){return e(l,o)},listen($){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Ku,p),a=$,()=>{l.removeEventListener(Ku,p),a=null}},createHref($){return t(l,$)},createURL:S,encodeLocation($){let f=S($);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go($){return o.go($)}};return v}var Zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zu||(Zu={}));function cm(e,t,n){return n===void 0&&(n="/"),fm(e,t,n)}function fm(e,t,n,r){let l=typeof t=="string"?lr(t):t,i=Kd(l.pathname||"/",n);if(i==null)return null;let o=Hd(e);dm(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let u=Em(i);s=xm(o[a],u)}return s}function Hd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=hn([r,a.relativePath]),m=n.concat(a);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hd(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:wm(u,i.index),routesMeta:m})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of Qd(i.path))l(i,o,a)}),t}function Qd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Qd(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function dm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pm=/^:[\w-]+$/,hm=3,mm=2,gm=1,vm=10,ym=-2,Gu=e=>e==="*";function wm(e,t){let n=e.split("/"),r=n.length;return n.some(Gu)&&(r+=ym),t&&(r+=mm),n.filter(l=>!Gu(l)).reduce((l,i)=>l+(pm.test(i)?hm:i===""?gm:vm),r)}function Sm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function xm(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=km({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},m),g=a.route;if(!p)return null;Object.assign(l,p.params),o.push({params:l,pathname:hn([i,p.pathname]),pathnameBase:Nm(hn([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=hn([i,p.pathnameBase]))}return o}function km(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Cm(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,m,p)=>{let{paramName:g,isOptional:w}=m;if(g==="*"){let v=s[p]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const S=s[p];return w&&!S?u[g]=void 0:u[g]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Cm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Em(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const _m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$m=e=>_m.test(e);function Pm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?lr(e):e,i;if(n)if($m(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),wa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Xu(n.substring(1),"/"):i=Xu(n,t)}else i=t;return{pathname:i,search:Tm(r),hash:zm(l)}}function Xu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Co(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yd(e,t){let n=Lm(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zd(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=lr(e):(l=Yr({},e),ie(!l.pathname||!l.pathname.includes("?"),Co("?","pathname","search",l)),ie(!l.pathname||!l.pathname.includes("#"),Co("#","pathname","hash",l)),ie(!l.search||!l.search.includes("#"),Co("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;l.pathname=g.join("/")}s=p>=0?t[p]:"/"}let a=Pm(l,s),u=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||m)&&(a.pathname+="/"),a}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Nm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gd=["post","put","patch","delete"];new Set(Gd);const Rm=["get",...Gd];new Set(Rm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zr.apply(this,arguments)}const Sa=C.createContext(null),jm=C.createContext(null),ll=C.createContext(null),Ri=C.createContext(null),kn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Xd=C.createContext(null);function il(){return C.useContext(Ri)!=null}function xa(){return il()||ie(!1),C.useContext(Ri).location}function Jd(e){C.useContext(ll).static||C.useLayoutEffect(e)}function ji(){let{isDataRoute:e}=C.useContext(kn);return e?Km():Im()}function Im(){il()||ie(!1);let e=C.useContext(Sa),{basename:t,future:n,navigator:r}=C.useContext(ll),{matches:l}=C.useContext(kn),{pathname:i}=xa(),o=JSON.stringify(Yd(l,n.v7_relativeSplatPath)),s=C.useRef(!1);return Jd(()=>{s.current=!0}),C.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=Zd(u,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:hn([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,o,i,e])}function Fm(e,t){return Dm(e,t)}function Dm(e,t,n,r){il()||ie(!1);let{navigator:l}=C.useContext(ll),{matches:i}=C.useContext(kn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=xa(),m;if(t){var p;let $=typeof t=="string"?lr(t):t;a==="/"||(p=$.pathname)!=null&&p.startsWith(a)||ie(!1),m=$}else m=u;let g=m.pathname||"/",w=g;if(a!=="/"){let $=a.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice($.length).join("/")}let S=cm(e,{pathname:w}),v=Wm(S&&S.map($=>Object.assign({},$,{params:Object.assign({},s,$.params),pathname:hn([a,l.encodeLocation?l.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?a:hn([a,l.encodeLocation?l.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&v?C.createElement(Ri.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:bt.Pop}},v):v}function Am(){let e=Qm(),t=Om(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:l},n):null,null)}const Um=C.createElement(Am,null);class Bm extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(kn.Provider,{value:this.props.routeContext},C.createElement(Xd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bm(e){let{routeContext:t,match:n,children:r}=e,l=C.useContext(Sa);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(kn.Provider,{value:t},r)}function Wm(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let m=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||ie(!1),o=o.slice(0,Math.min(o.length,m+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:g,errors:w}=n,S=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||S){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,p,g)=>{let w,S=!1,v=null,$=null;n&&(w=s&&p.route.id?s[p.route.id]:void 0,v=p.route.errorElement||Um,a&&(u<0&&g===0?(Ym("route-fallback"),S=!0,$=null):u===g&&(S=!0,$=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),c=()=>{let h;return w?h=v:S?h=$:p.route.Component?h=C.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,C.createElement(bm,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?C.createElement(Bm,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var qd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qd||{}),ep=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ep||{});function Vm(e){let t=C.useContext(Sa);return t||ie(!1),t}function Mm(e){let t=C.useContext(jm);return t||ie(!1),t}function Hm(e){let t=C.useContext(kn);return t||ie(!1),t}function tp(e){let t=Hm(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Qm(){var e;let t=C.useContext(Xd),n=Mm(),r=tp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Km(){let{router:e}=Vm(qd.UseNavigateStable),t=tp(ep.UseNavigateStable),n=C.useRef(!1);return Jd(()=>{n.current=!0}),C.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Zr({fromRouteId:t},i)))},[e,t])}const Ju={};function Ym(e,t,n){Ju[e]||(Ju[e]=!0)}function Zm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Gm(e){let{to:t,replace:n,state:r,relative:l}=e;il()||ie(!1);let{future:i,static:o}=C.useContext(ll),{matches:s}=C.useContext(kn),{pathname:a}=xa(),u=ji(),m=Zd(t,Yd(s,i.v7_relativeSplatPath),a,l==="path"),p=JSON.stringify(m);return C.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:l}),[u,p,l,n,r]),null}function Pn(e){ie(!1)}function Xm(e){let{basename:t="/",children:n=null,location:r,navigationType:l=bt.Pop,navigator:i,static:o=!1,future:s}=e;il()&&ie(!1);let a=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:a,navigator:i,static:o,future:Zr({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=lr(r));let{pathname:m="/",search:p="",hash:g="",state:w=null,key:S="default"}=r,v=C.useMemo(()=>{let $=Kd(m,a);return $==null?null:{location:{pathname:$,search:p,hash:g,state:w,key:S},navigationType:l}},[a,m,p,g,w,S,l]);return v==null?null:C.createElement(ll.Provider,{value:u},C.createElement(Ri.Provider,{children:n,value:v}))}function Jm(e){let{children:t,location:n}=e;return Fm(Ss(t),n)}new Promise(()=>{});function Ss(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,l)=>{if(!C.isValidElement(r))return;let i=[...t,l];if(r.type===C.Fragment){n.push.apply(n,Ss(r.props.children,i));return}r.type!==Pn&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ss(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const qm="6";try{window.__reactRouterVersion=qm}catch{}const e1="startTransition",qu=_o[e1];function t1(e){let{basename:t,children:n,future:r,window:l}=e,i=C.useRef();i.current==null&&(i.current=sm({window:l,v5Compat:!0}));let o=i.current,[s,a]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=C.useCallback(p=>{u&&qu?qu(()=>a(p)):a(p)},[a,u]);return C.useLayoutEffect(()=>o.listen(m),[o,m]),C.useEffect(()=>Zm(r),[r]),C.createElement(Xm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tc||(tc={}));function n1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function r1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var l1=function(){function e(n){var r=this;this._insertTag=function(l){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(l,i),r.tags.push(l)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(r1(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var i=n1(l);try{i.insertRule(r,i.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var l;return(l=r.parentNode)==null?void 0:l.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Se="-ms-",hi="-moz-",B="-webkit-",np="comm",ka="rule",Ca="decl",i1="@import",rp="@keyframes",o1="@layer",s1=Math.abs,Ii=String.fromCharCode,a1=Object.assign;function u1(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function lp(e){return e.trim()}function c1(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function xs(e,t){return e.indexOf(t)}function me(e,t){return e.charCodeAt(t)|0}function Gr(e,t,n){return e.slice(t,n)}function ft(e){return e.length}function Ea(e){return e.length}function $l(e,t){return t.push(e),e}function f1(e,t){return e.map(t).join("")}var Fi=1,er=1,ip=0,Fe=0,re=0,ir="";function Di(e,t,n,r,l,i,o){return{value:e,root:t,parent:n,type:r,props:l,children:i,line:Fi,column:er,length:o,return:""}}function vr(e,t){return a1(Di("",null,null,"",null,null,0),e,{length:-e.length},t)}function d1(){return re}function p1(){return re=Fe>0?me(ir,--Fe):0,er--,re===10&&(er=1,Fi--),re}function We(){return re=Fe<ip?me(ir,Fe++):0,er++,re===10&&(er=1,Fi++),re}function gt(){return me(ir,Fe)}function bl(){return Fe}function ol(e,t){return Gr(ir,e,t)}function Xr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function op(e){return Fi=er=1,ip=ft(ir=e),Fe=0,[]}function sp(e){return ir="",e}function Wl(e){return lp(ol(Fe-1,ks(e===91?e+2:e===40?e+1:e)))}function h1(e){for(;(re=gt())&&re<33;)We();return Xr(e)>2||Xr(re)>3?"":" "}function m1(e,t){for(;--t&&We()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return ol(e,bl()+(t<6&&gt()==32&&We()==32))}function ks(e){for(;We();)switch(re){case e:return Fe;case 34:case 39:e!==34&&e!==39&&ks(re);break;case 40:e===41&&ks(e);break;case 92:We();break}return Fe}function g1(e,t){for(;We()&&e+re!==57;)if(e+re===84&&gt()===47)break;return"/*"+ol(t,Fe-1)+"*"+Ii(e===47?e:We())}function v1(e){for(;!Xr(gt());)We();return ol(e,Fe)}function y1(e){return sp(Vl("",null,null,null,[""],e=op(e),0,[0],e))}function Vl(e,t,n,r,l,i,o,s,a){for(var u=0,m=0,p=o,g=0,w=0,S=0,v=1,$=1,f=1,c=0,h="",x=l,L=i,N=r,P=h;$;)switch(S=c,c=We()){case 40:if(S!=108&&me(P,p-1)==58){xs(P+=b(Wl(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:P+=Wl(c);break;case 9:case 10:case 13:case 32:P+=h1(S);break;case 92:P+=m1(bl()-1,7);continue;case 47:switch(gt()){case 42:case 47:$l(w1(g1(We(),bl()),t,n),a);break;default:P+="/"}break;case 123*v:s[u++]=ft(P)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:$=0;case 59+m:f==-1&&(P=b(P,/\f/g,"")),w>0&&ft(P)-p&&$l(w>32?rc(P+";",r,n,p-1):rc(b(P," ","")+";",r,n,p-2),a);break;case 59:P+=";";default:if($l(N=nc(P,t,n,u,m,l,s,h,x=[],L=[],p),i),c===123)if(m===0)Vl(P,t,N,N,x,i,p,s,L);else switch(g===99&&me(P,3)===110?100:g){case 100:case 108:case 109:case 115:Vl(e,N,N,r&&$l(nc(e,N,N,0,0,l,s,h,l,x=[],p),L),l,L,p,s,r?x:L);break;default:Vl(P,N,N,N,[""],L,0,s,L)}}u=m=w=0,v=f=1,h=P="",p=o;break;case 58:p=1+ft(P),w=S;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&p1()==125)continue}switch(P+=Ii(c),c*v){case 38:f=m>0?1:(P+="\f",-1);break;case 44:s[u++]=(ft(P)-1)*f,f=1;break;case 64:gt()===45&&(P+=Wl(We())),g=gt(),m=p=ft(h=P+=v1(bl())),c++;break;case 45:S===45&&ft(P)==2&&(v=0)}}return i}function nc(e,t,n,r,l,i,o,s,a,u,m){for(var p=l-1,g=l===0?i:[""],w=Ea(g),S=0,v=0,$=0;S<r;++S)for(var f=0,c=Gr(e,p+1,p=s1(v=o[S])),h=e;f<w;++f)(h=lp(v>0?g[f]+" "+c:b(c,/&\f/g,g[f])))&&(a[$++]=h);return Di(e,t,n,l===0?ka:s,a,u,m)}function w1(e,t,n){return Di(e,t,n,np,Ii(d1()),Gr(e,2,-2),0)}function rc(e,t,n,r){return Di(e,t,n,Ca,Gr(e,0,r),Gr(e,r+1,-1),r)}function Qn(e,t){for(var n="",r=Ea(e),l=0;l<r;l++)n+=t(e[l],l,e,t)||"";return n}function S1(e,t,n,r){switch(e.type){case o1:if(e.children.length)break;case i1:case Ca:return e.return=e.return||e.value;case np:return"";case rp:return e.return=e.value+"{"+Qn(e.children,r)+"}";case ka:e.value=e.props.join(",")}return ft(n=Qn(e.children,r))?e.return=e.value+"{"+n+"}":""}function x1(e){var t=Ea(e);return function(n,r,l,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,l,i)||"";return o}}function k1(e){return function(t){t.root||(t=t.return)&&e(t)}}function C1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var E1=function(t,n,r){for(var l=0,i=0;l=i,i=gt(),l===38&&i===12&&(n[r]=1),!Xr(i);)We();return ol(t,Fe)},_1=function(t,n){var r=-1,l=44;do switch(Xr(l)){case 0:l===38&&gt()===12&&(n[r]=1),t[r]+=E1(Fe-1,n,r);break;case 2:t[r]+=Wl(l);break;case 4:if(l===44){t[++r]=gt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ii(l)}while(l=We());return t},$1=function(t,n){return sp(_1(op(t),n))},lc=new WeakMap,P1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,l=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!lc.get(r))&&!l){lc.set(t,!0);for(var i=[],o=$1(n,i),s=r.props,a=0,u=0;a<o.length;a++)for(var m=0;m<s.length;m++,u++)t.props[u]=i[a]?o[a].replace(/&\f/g,s[m]):s[m]+" "+o[a]}}},L1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ap(e,t){switch(u1(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+hi+e+Se+e+e;case 6828:case 4268:return B+e+Se+e+e;case 6165:return B+e+Se+"flex-"+e+e;case 5187:return B+e+b(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return B+e+Se+"flex-item-"+b(e,/flex-|-self/,"")+e;case 4675:return B+e+Se+"flex-line-pack"+b(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Se+b(e,"shrink","negative")+e;case 5292:return B+e+Se+b(e,"basis","preferred-size")+e;case 6060:return B+"box-"+b(e,"-grow","")+B+e+Se+b(e,"grow","positive")+e;case 4554:return B+b(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+hi+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xs(e,"stretch")?ap(b(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(me(e,t+1)!==115)break;case 6444:switch(me(e,ft(e)-3-(~xs(e,"!important")&&10))){case 107:return b(e,":",":"+B)+e;case 101:return b(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(me(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Se+"$2box$3")+e}break;case 5936:switch(me(e,t+11)){case 114:return B+e+Se+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Se+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Se+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Se+e+e}return e}var N1=function(t,n,r,l){if(t.length>-1&&!t.return)switch(t.type){case Ca:t.return=ap(t.value,t.length);break;case rp:return Qn([vr(t,{value:b(t.value,"@","@"+B)})],l);case ka:if(t.length)return f1(t.props,function(i){switch(c1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Qn([vr(t,{props:[b(i,/:(read-\w+)/,":"+hi+"$1")]})],l);case"::placeholder":return Qn([vr(t,{props:[b(i,/:(plac\w+)/,":"+B+"input-$1")]}),vr(t,{props:[b(i,/:(plac\w+)/,":"+hi+"$1")]}),vr(t,{props:[b(i,/:(plac\w+)/,Se+"input-$1")]})],l)}return""})}},T1=[N1],z1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var $=v.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var l=t.stylisPlugins||T1,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var $=v.getAttribute("data-emotion").split(" "),f=1;f<$.length;f++)i[$[f]]=!0;s.push(v)});var a,u=[P1,L1];{var m,p=[S1,k1(function(v){m.insert(v)})],g=x1(u.concat(l,p)),w=function($){return Qn(y1($),g)};a=function($,f,c,h){m=c,w($?$+"{"+f.styles+"}":f.styles),h&&(S.inserted[f.name]=!0)}}var S={key:n,sheet:new l1({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return S.sheet.hydrate(s),S},up={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=typeof Symbol=="function"&&Symbol.for,_a=pe?Symbol.for("react.element"):60103,$a=pe?Symbol.for("react.portal"):60106,Ai=pe?Symbol.for("react.fragment"):60107,Ui=pe?Symbol.for("react.strict_mode"):60108,Bi=pe?Symbol.for("react.profiler"):60114,bi=pe?Symbol.for("react.provider"):60109,Wi=pe?Symbol.for("react.context"):60110,Pa=pe?Symbol.for("react.async_mode"):60111,Vi=pe?Symbol.for("react.concurrent_mode"):60111,Mi=pe?Symbol.for("react.forward_ref"):60112,Hi=pe?Symbol.for("react.suspense"):60113,O1=pe?Symbol.for("react.suspense_list"):60120,Qi=pe?Symbol.for("react.memo"):60115,Ki=pe?Symbol.for("react.lazy"):60116,R1=pe?Symbol.for("react.block"):60121,j1=pe?Symbol.for("react.fundamental"):60117,I1=pe?Symbol.for("react.responder"):60118,F1=pe?Symbol.for("react.scope"):60119;function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _a:switch(e=e.type,e){case Pa:case Vi:case Ai:case Bi:case Ui:case Hi:return e;default:switch(e=e&&e.$$typeof,e){case Wi:case Mi:case Ki:case Qi:case bi:return e;default:return t}}case $a:return t}}}function cp(e){return Qe(e)===Vi}V.AsyncMode=Pa;V.ConcurrentMode=Vi;V.ContextConsumer=Wi;V.ContextProvider=bi;V.Element=_a;V.ForwardRef=Mi;V.Fragment=Ai;V.Lazy=Ki;V.Memo=Qi;V.Portal=$a;V.Profiler=Bi;V.StrictMode=Ui;V.Suspense=Hi;V.isAsyncMode=function(e){return cp(e)||Qe(e)===Pa};V.isConcurrentMode=cp;V.isContextConsumer=function(e){return Qe(e)===Wi};V.isContextProvider=function(e){return Qe(e)===bi};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_a};V.isForwardRef=function(e){return Qe(e)===Mi};V.isFragment=function(e){return Qe(e)===Ai};V.isLazy=function(e){return Qe(e)===Ki};V.isMemo=function(e){return Qe(e)===Qi};V.isPortal=function(e){return Qe(e)===$a};V.isProfiler=function(e){return Qe(e)===Bi};V.isStrictMode=function(e){return Qe(e)===Ui};V.isSuspense=function(e){return Qe(e)===Hi};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ai||e===Vi||e===Bi||e===Ui||e===Hi||e===O1||typeof e=="object"&&e!==null&&(e.$$typeof===Ki||e.$$typeof===Qi||e.$$typeof===bi||e.$$typeof===Wi||e.$$typeof===Mi||e.$$typeof===j1||e.$$typeof===I1||e.$$typeof===F1||e.$$typeof===R1)};V.typeOf=Qe;up.exports=V;var D1=up.exports,fp=D1,A1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},U1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dp={};dp[fp.ForwardRef]=A1;dp[fp.Memo]=U1;var B1=!0;function b1(e,t,n){var r="";return n.split(" ").forEach(function(l){e[l]!==void 0?t.push(e[l]+";"):l&&(r+=l+" ")}),r}var pp=function(t,n,r){var l=t.key+"-"+n.name;(r===!1||B1===!1)&&t.registered[l]===void 0&&(t.registered[l]=n.styles)},W1=function(t,n,r){pp(t,n,r);var l=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+l:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function V1(e){for(var t=0,n,r=0,l=e.length;l>=4;++r,l-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(l){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var M1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},H1=/[A-Z]|^ms/g,Q1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hp=function(t){return t.charCodeAt(1)===45},ic=function(t){return t!=null&&typeof t!="boolean"},Eo=C1(function(e){return hp(e)?e:e.replace(H1,"-$&").toLowerCase()}),oc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Q1,function(r,l,i){return dt={name:l,styles:i,next:dt},l})}return M1[t]!==1&&!hp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Jr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var l=n;if(l.anim===1)return dt={name:l.name,styles:l.styles,next:dt},l.name;var i=n;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)dt={name:o.name,styles:o.styles,next:dt},o=o.next;var s=i.styles+";";return s}return K1(e,t,n)}case"function":{if(e!==void 0){var a=dt,u=n(e);return dt=a,Jr(e,t,u)}break}}var m=n;return m}function K1(e,t,n){var r="";if(Array.isArray(n))for(var l=0;l<n.length;l++)r+=Jr(e,t,n[l])+";";else for(var i in n){var o=n[i];if(typeof o!="object"){var s=o;ic(s)&&(r+=Eo(i)+":"+oc(i,s)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var a=0;a<o.length;a++)ic(o[a])&&(r+=Eo(i)+":"+oc(i,o[a])+";");else{var u=Jr(e,t,o);switch(i){case"animation":case"animationName":{r+=Eo(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var sc=/label:\s*([^\s;{]+)\s*(;|$)/g,dt;function mp(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,l="";dt=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,l+=Jr(n,t,i);else{var o=i;l+=o[0]}for(var s=1;s<e.length;s++)if(l+=Jr(n,t,e[s]),r){var a=i;l+=a[s]}sc.lastIndex=0;for(var u="",m;(m=sc.exec(l))!==null;)u+="-"+m[1];var p=V1(l)+u;return{name:p,styles:l,next:dt}}var Y1=function(t){return t()},Z1=_o.useInsertionEffect?_o.useInsertionEffect:!1,G1=Z1||Y1,gp=C.createContext(typeof HTMLElement<"u"?z1({key:"css"}):null);gp.Provider;var X1=function(t){return C.forwardRef(function(n,r){var l=C.useContext(gp);return t(n,l,r)})},J1=C.createContext({}),sl={}.hasOwnProperty,Cs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",La=function(t,n){var r={};for(var l in n)sl.call(n,l)&&(r[l]=n[l]);return r[Cs]=t,r},q1=function(t){var n=t.cache,r=t.serialized,l=t.isStringTag;return pp(n,r,l),G1(function(){return W1(n,r,l)}),null},eg=X1(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var l=e[Cs],i=[r],o="";typeof e.className=="string"?o=b1(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var s=mp(i,void 0,C.useContext(J1));o+=t.key+"-"+s.name;var a={};for(var u in e)sl.call(e,u)&&u!=="css"&&u!==Cs&&(a[u]=e[u]);return a.className=o,n&&(a.ref=n),C.createElement(C.Fragment,null,C.createElement(q1,{cache:t,serialized:s,isStringTag:typeof l=="string"}),C.createElement(l,a))}),Na=eg,ne=oe.Fragment,d=function(t,n,r){return sl.call(n,"css")?oe.jsx(Na,La(t,n),r):oe.jsx(t,n,r)},E=function(t,n,r){return sl.call(n,"css")?oe.jsxs(Na,La(t,n),r):oe.jsxs(t,n,r)},ac=function(t,n){var r=arguments;if(n==null||!sl.call(n,"css"))return C.createElement.apply(void 0,r);var l=r.length,i=new Array(l);i[0]=Na,i[1]=La(t,n);for(var o=2;o<l;o++)i[o]=r[o];return C.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(ac||(ac={}));function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mp(t)}const uc="/strack",tg=e=>y`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#1a1a1a":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  transition: background-color 0.3s ease;

  @media (min-width: 480px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,ng=e=>y`
  position: absolute;
  top: max(1rem, env(safe-area-inset-top));
  right: max(1rem, env(safe-area-inset-right));
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e?"#e0e0e0":"#1a1a1a"};
  transition: color 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`,rg=e=>y`
  background-color: ${e?"#2d2d2d":"#FFFFFF"};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, ${e?.4:.08});
  padding: 1.5rem 1.25rem;
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 480px) {
    padding: 2rem 1.5rem;
    margin-top: 2.5rem;
    border-radius: 15px;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
    margin-top: 3rem;
  }
`,lg=y`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 480px) {
    margin-bottom: 2rem;
  }
`,ig=e=>y`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;

  svg {
    width: 28px;
    height: 28px;
    stroke: ${e?"#e0e0e0":"#1a1a1a"};
  }

  @media (min-width: 480px) {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`,og=e=>y`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#1a1a1a"};
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`,sg=e=>y`
  font-size: 0.85rem;
  color: ${e?"#a0a0a0":"#666666"};
  font-weight: 400;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`,ag=y`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 480px) {
    gap: 1.5rem;
  }
`,cc=y`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,fc=e=>y`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e?"#e0e0e0":"#1a1a1a"};

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`,ug=y`
  position: relative;
  display: flex;
  align-items: center;
`,vp=e=>y`
  padding: 0.75rem 1rem;
  min-height: 48px;
  width: 100%;
  border: 1px solid ${e?"#404040":"#e0e0e0"};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  color: ${e?"#ffffff":"#1a1a1a"};
  transition: border-color 0.2s ease, background-color 0.3s ease;

  &::placeholder {
    color: ${e?"#606060":"#999999"};
  }

  &:focus {
    outline: none;
    border-color: ${e?"#6b6b6b":"#1a1a1a"};
  }
`,cg=e=>y`
  ${vp(e)};
  padding-right: 3rem;
`,fg=e=>y`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: ${e?"#a0a0a0":"#666666"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    color: ${e?"#e0e0e0":"#1a1a1a"};
  }
`,dg=y`
  padding: 0.875rem 1.5rem;
  min-height: 48px;
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #333333;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,pg=y`
  color: #c0392b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,hg=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})}),mg=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"24",height:"24",children:d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),gg=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"24",height:"24",children:d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),vg=()=>E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),yg=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function wg({darkMode:e,onToggleDarkMode:t}){const[n,r]=C.useState(""),[l,i]=C.useState(""),[o,s]=C.useState(!1),[a,u]=C.useState(""),[m,p]=C.useState(!1),g=async w=>{if(w.preventDefault(),u(""),!n.trim()){u("Please enter your email.");return}if(!l){u("Please enter your password.");return}p(!0);try{const v=await(await fetch(`${uc}/backend/login.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.trim(),password:l})})).text();let $;try{$=JSON.parse(v)}catch{u("Server error. Check that setup_accounts.php was run.");return}if($.success){const f=$.user||{},c=f.role||"student",h=c==="admin"?"/admin":c==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(f))}catch{}window.location.href=`${uc}${h}`}else u($.message||"Invalid email or password.")}catch{u("Unable to connect. Check the backend URL and run setup_accounts.php.")}finally{p(!1)}};return E("div",{css:tg(e),children:[d("button",{css:ng(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?d(gg,{}):d(mg,{})}),E("div",{css:rg(e),children:[E("header",{css:lg,children:[d("div",{css:ig(e),children:d(hg,{})}),d("h1",{css:og(e),children:"Welcome Back"}),d("p",{css:sg(e),children:"Sign in to your account to continue"})]}),E("form",{css:ag,onSubmit:g,children:[E("div",{css:cc,children:[d("label",{css:fc(e),htmlFor:"email",children:"Email"}),d("input",{css:vp(e),id:"email",type:"email",placeholder:"Enter your email",value:n,onChange:w=>r(w.target.value),autoComplete:"email",disabled:m})]}),E("div",{css:cc,children:[d("label",{css:fc(e),htmlFor:"password",children:"Password"}),E("div",{css:ug,children:[d("input",{css:cg(e),id:"password",type:o?"text":"password",placeholder:"Enter your password",value:l,onChange:w=>i(w.target.value),autoComplete:"current-password",disabled:m}),d("button",{type:"button",css:fg(e),onClick:()=>s(!o),"aria-label":o?"Hide password":"Show password",tabIndex:-1,children:o?d(yg,{}):d(vg,{})})]})]}),a&&d("p",{css:pg,children:a}),d("button",{type:"submit",css:dg,disabled:m,children:m?"Signing in...":"Submit"})]})]})]})}var yp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dc=$t.createContext&&$t.createContext(yp),Sg=["attr","size","title"];function xg(e,t){if(e==null)return{};var n,r,l=kg(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function kg(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(null,arguments)}function pc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function gi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pc(Object(n),!0).forEach(function(r){Cg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cg(e,t,n){return(t=Eg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eg(e){var t=_g(e,"string");return typeof t=="symbol"?t:t+""}function _g(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wp(e){return e&&e.map((t,n)=>$t.createElement(t.tag,gi({key:n},t.attr),wp(t.child)))}function ue(e){return t=>$t.createElement($g,mi({attr:gi({},e.attr)},t),wp(e.child))}function $g(e){var t=n=>{var{attr:r,size:l,title:i}=e,o=xg(e,Sg),s=l||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),$t.createElement("svg",mi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:gi(gi({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&$t.createElement("title",null,i),e.children)};return dc!==void 0?$t.createElement(dc.Consumer,null,n=>t(n)):t(yp)}function hc(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function Sp(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function xp(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function mc(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function Ta(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function kp(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function za(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function Pg(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function gc(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function Oa(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function vc(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function Lg(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function Ng(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function Cp(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function Ra(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function Ep(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function ja(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function Ia(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function Yi(e){return ue({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const De="0.35s ease",Tg=e=>y`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${De};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,zg=e=>y`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${De}, box-shadow ${De};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,Og=y`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Rg=y`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,jg=e=>y`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${De};
  }
`,Ig=e=>y`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${De};
`,Fg=e=>y`
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
  transition: color ${De};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,Dg=y`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,Ag=y`
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
`,Ug=y`
  flex: 1;
  min-width: 0;
`,Bg=e=>y`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${De};
`,bg=e=>y`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${De};
`,Wg=e=>y`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${De};
`,Vg=y`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,Mg=e=>y`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${De};
`,Hg=e=>y`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${De};
`,Qg=y`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Kg=(e,t)=>y`
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
  transition: background ${De}, color ${De};

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
`,Yg=y`
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
`,Zg=e=>y`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${De};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Gg=e=>y`
  max-width: 800px;
  margin: 0 auto;
`,nn=y`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,rn=y`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Xg=[{id:"dashboard",label:"Dashboard",icon:za},{id:"courses",label:"Courses",icon:ja},{id:"calendar",label:"Calendar",icon:Ra},{id:"leaderboard",label:"Leaderboard",icon:Cp},{id:"badges",label:"Badges",icon:Pg},{id:"rewards",label:"Rewards",icon:kp},{id:"profile",label:"Profile",icon:Sp}];function Jg(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function qg({darkMode:e,onToggleDarkMode:t}){const n=ji(),[r,l]=C.useState("dashboard");let i="Alex Thompson",o=2450;try{const a=localStorage.getItem("strack_user");if(a){const u=JSON.parse(a);u!=null&&u.name&&(i=u.name)}}catch{}const s=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return E("div",{css:Tg(e),children:[E("aside",{css:zg(e),children:[E("header",{css:Og,children:[E("div",{css:Rg,children:[d("div",{css:jg(e),children:d(Yi,{})}),d("span",{css:Ig(e),children:"Strack"})]}),d("button",{type:"button",css:Fg(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?d(Ta,{}):d(Oa,{})})]}),E("div",{css:Dg,children:[d("div",{css:Ag,children:Jg(i)}),E("div",{css:Ug,children:[d("div",{css:Bg(e),children:i}),d("div",{css:bg(e),children:"Student"})]})]}),d("div",{css:Wg(e),children:E("div",{css:Vg,children:[E("span",{css:Mg(e),children:[d(Lg,{})," Points"]}),d("span",{css:Hg(e),children:o})]})}),d("nav",{css:Qg,children:Xg.map(({id:a,label:u,icon:m})=>E("button",{css:Kg(e,r===a),onClick:()=>l(a),children:[d(m,{}),u]},a))}),E("button",{css:Yg,onClick:s,children:[d(Ia,{}),"Logout"]})]}),d("main",{css:Zg(e),children:E("div",{css:Gg(),children:[r==="dashboard"&&E(ne,{children:[d("h1",{css:nn,children:"Dashboard"}),d("p",{css:rn,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),r==="courses"&&E(ne,{children:[d("h1",{css:nn,children:"Courses"}),d("p",{css:rn,children:"This is the courses page. View your enrolled courses, materials, and grades here."})]}),r==="calendar"&&E(ne,{children:[d("h1",{css:nn,children:"Calendar"}),d("p",{css:rn,children:"This is the calendar page. View your schedule, deadlines, and important dates here."})]}),r==="leaderboard"&&E(ne,{children:[d("h1",{css:nn,children:"Leaderboard"}),d("p",{css:rn,children:"This is the leaderboard page. See how you rank against other students and track your position."})]}),r==="badges"&&E(ne,{children:[d("h1",{css:nn,children:"Badges"}),d("p",{css:rn,children:"This is the badges page. View and collect achievement badges earned from your activities."})]}),r==="rewards"&&E(ne,{children:[d("h1",{css:nn,children:"Rewards"}),d("p",{css:rn,children:"This is the rewards page. Redeem your points for rewards and see what you can earn."})]}),r==="profile"&&E(ne,{children:[d("h1",{css:nn,children:"Profile"}),d("p",{css:rn,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const ot="0.35s ease",ev=e=>y`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${ot};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,tv=e=>y`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${ot}, box-shadow ${ot};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,nv=y`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,rv=y`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,lv=e=>y`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${ot};
  }
`,iv=e=>y`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${ot};
`,ov=e=>y`
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
  transition: color ${ot};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,sv=y`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,av=y`
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
`,uv=y`
  flex: 1;
  min-width: 0;
`,cv=e=>y`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${ot};
`,fv=e=>y`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${ot};
`,dv=y`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,pv=(e,t)=>y`
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
  transition: background ${ot}, color ${ot};

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
`,hv=y`
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
`,mv=e=>y`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${ot};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,gv=e=>y`
  max-width: 800px;
  margin: 0 auto;
`,ln=y`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,on=y`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,vv=[{id:"dashboard",label:"Dashboard",icon:za},{id:"students",label:"Students",icon:xp},{id:"attendance",label:"Attendance",icon:Ng},{id:"performance",label:"Performance",icon:Cp},{id:"courses",label:"Courses",icon:ja},{id:"calendar",label:"Calendar",icon:Ra},{id:"profile",label:"Profile",icon:Sp}];function yv(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function wv({darkMode:e,onToggleDarkMode:t}){const n=ji(),[r,l]=C.useState("dashboard");let i="Lecturer";try{const s=localStorage.getItem("strack_user");if(s){const a=JSON.parse(s);a!=null&&a.name&&(i=a.name)}}catch{}const o=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return E("div",{css:ev(e),children:[E("aside",{css:tv(e),children:[E("header",{css:nv,children:[E("div",{css:rv,children:[d("div",{css:lv(e),children:d(Yi,{})}),d("span",{css:iv(e),children:"Strack"})]}),d("button",{type:"button",css:ov(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?d(Ta,{}):d(Oa,{})})]}),E("div",{css:sv,children:[d("div",{css:av,children:yv(i)}),E("div",{css:uv,children:[d("div",{css:cv(e),children:i}),d("div",{css:fv(e),children:"Lecturer"})]})]}),d("nav",{css:dv,children:vv.map(({id:s,label:a,icon:u})=>E("button",{type:"button",css:pv(e,r===s),onClick:()=>l(s),children:[d(u,{}),a]},s))}),E("button",{type:"button",css:hv,onClick:o,children:[d(Ia,{}),"Logout"]})]}),d("main",{css:mv(e),children:E("div",{css:gv(),children:[r==="dashboard"&&E(ne,{children:[d("h1",{css:ln,children:"Dashboard"}),d("p",{css:on,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),r==="students"&&E(ne,{children:[d("h1",{css:ln,children:"Students"}),d("p",{css:on,children:"This is the students page. View your class lists and student details here."})]}),r==="attendance"&&E(ne,{children:[d("h1",{css:ln,children:"Attendance"}),d("p",{css:on,children:"This is the attendance page. Mark and view student attendance for your classes here."})]}),r==="performance"&&E(ne,{children:[d("h1",{css:ln,children:"Performance"}),d("p",{css:on,children:"This is the performance page. View and analyse student performance and grades here."})]}),r==="courses"&&E(ne,{children:[d("h1",{css:ln,children:"Courses"}),d("p",{css:on,children:"This is the courses page. Manage your courses, materials, and class lists here."})]}),r==="calendar"&&E(ne,{children:[d("h1",{css:ln,children:"Calendar"}),d("p",{css:on,children:"This is the calendar page. View your teaching schedule, deadlines, and important dates here."})]}),r==="profile"&&E(ne,{children:[d("h1",{css:ln,children:"Profile"}),d("p",{css:on,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const yt="/strack",F="0.35s ease",Sv=e=>y`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${F};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,xv=e=>y`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${F}, box-shadow ${F};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,kv=y`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Cv=y`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Ev=e=>y`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${F};
  }
`,_v=e=>y`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${F};
`,$v=e=>y`
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
  transition: color ${F};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,Pv=y`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,Lv=y`
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
`,Nv=y`
  flex: 1;
  min-width: 0;
`,Tv=e=>y`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${F};
`,zv=e=>y`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${F};
`,Ov=y`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Rv=(e,t)=>y`
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
  transition: background ${F}, color ${F};

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
`,jv=y`
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
`,Iv=e=>y`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${F};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Fv=(e,t)=>y`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,Dv=y`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Av=y`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Uv=e=>y`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${F};
`,Bv=y`
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
`,bv=e=>y`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  margin-bottom: 1rem;
  transition: border-color ${F}, background ${F};

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
`,Wv=(e,t)=>y`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${F}, color ${F};
`,Vv=y`
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
`,Pl=y`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Ll=y`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Mv=y`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Hv=y`
  flex: 1;
  min-width: 0;
`,Qv=y`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Kv=e=>y`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${F};
`,Yv=y`
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
`,Zv=e=>y`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${F}, box-shadow ${F};
`,Gv=e=>y`
  width: 40px;
  height: 40px;
  color: #2563eb;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
  }
`,Xv=e=>y`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${F};
`,Jv=e=>y`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${F};
`,qv=y`
  margin-top: 1.5rem;
`,ey=y`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,ty=y`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,ny=e=>y`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  transition: border-color ${F}, background ${F};

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
`,yc=e=>y`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${F}, box-shadow ${F};
`,Te=e=>y`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1a1a1a":"#f9fafb"};
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  transition: color ${F}, background ${F}, border-color ${F};
`,ce=e=>y`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${F}, border-color ${F};
`,wc=y`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Es=e=>y`
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
`,Sc=e=>y`
  ${Es(e)}
  &:hover {
    color: #dc2626;
  }
`,xc=y`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,kc=e=>y`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${F};
`,Cc=e=>y`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${F};
`,Ec=e=>y`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${F};
`,_c=e=>y`
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
`,$c=y`
  padding: 1.5rem;
`,wt=y`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,St=e=>y`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${F};
`,xt=e=>y`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${F}, background ${F};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${e?"#6b7280":"#9ca3af"};
  }
`,ry=e=>y`
  ${xt(e)}
  min-height: 80px;
  resize: vertical;
`,Pc=e=>y`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${F};
`,Lc=e=>y`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${F}, background ${F};

  &:hover {
    background: ${e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"};
  }
`,Nc=y`
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
`,ly=[{id:"dashboard",label:"Dashboard",icon:za},{id:"students",label:"Students",icon:xp},{id:"lecturers",label:"Lecturers",icon:Yi},{id:"courses",label:"Courses",icon:ja},{id:"departments",label:"Departments",icon:Ep},{id:"calendar",label:"Calendar",icon:Ra}];function iy(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function oy({darkMode:e,onToggleDarkMode:t}){const n=ji(),[r,l]=C.useState("dashboard"),[i,o]=C.useState([]),[s,a]=C.useState(!1),[u,m]=C.useState(""),[p,g]=C.useState(!1),[w,S]=C.useState(null),[v,$]=C.useState({code:"",name:"",description:""}),[f,c]=C.useState(!1),h=C.useCallback(async()=>{a(!0);try{const I=await(await fetch(`${yt}/backend/departments.php`)).json();I.success&&o(I.departments||[])}catch{o([])}finally{a(!1)}},[]);C.useEffect(()=>{r==="departments"&&h()},[r,h]);const[x,L]=C.useState([]),[N,P]=C.useState(!1),[O,Z]=C.useState(""),[D,Ce]=C.useState(!1),[Le,Rt]=C.useState(null),[st,at]=C.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:""}),[Cn,En]=C.useState(!1),[T,R]=C.useState([]),j=C.useCallback(async()=>{P(!0);try{const I=await(await fetch(`${yt}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();I.success&&L(I.students||[])}catch{L([])}finally{P(!1)}},[]),K=C.useCallback(async()=>{try{const I=await(await fetch(`${yt}/backend/departments.php`)).json();I.success&&R(I.departments||[])}catch{R([])}},[]);C.useEffect(()=>{r==="students"&&(j(),K())},[r,j,K]);const te=()=>{Rt(null),at({student_id:"",full_name:"",email:"",password:"",department:"",year:""}),Ce(!0)},_n=k=>{Rt(k.id),at({student_id:k.student_id,full_name:k.full_name,email:k.email,password:k.password||"",department:k.department||"",year:k.year||""}),Ce(!0)},Ae=()=>Ce(!1),or=async()=>{const{student_id:k,full_name:I,email:Ne,password:ar,department:al,year:Da}=st;if(!(!k.trim()||!I.trim()||!Ne.trim())&&!(!Le&&!ar.trim())){En(!0);try{Le?(await(await fetch(`${yt}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Le,student_id:k.trim(),full_name:I.trim(),email:Ne.trim(),password:ar.trim(),department:al.trim()||"",year:Da.trim()||""})})).json()).success&&(Ae(),j()):(await(await fetch(`${yt}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:k.trim(),full_name:I.trim(),email:Ne.trim(),password:ar.trim(),department:al.trim()||"",year:Da.trim()||""})})).json()).success&&(Ae(),j())}finally{En(!1)}}},vt=async k=>{if(confirm("Delete this student?"))try{(await(await fetch(`${yt}/backend/students.php?id=${k}`,{method:"DELETE"})).json()).success&&j()}catch{}},tn=x.filter(k=>!O||(k.student_id||"").toLowerCase().includes(O.toLowerCase())||(k.full_name||"").toLowerCase().includes(O.toLowerCase())||(k.email||"").toLowerCase().includes(O.toLowerCase())||(k.department||"").toLowerCase().includes(O.toLowerCase())),_p=["Foundation","Year 1","Year 2","Placement Year","Year 4"],$p=()=>{S(null),$({code:"",name:"",description:""}),g(!0)},Pp=k=>{S(k.id),$({code:k.code,name:k.name,description:k.description||""}),g(!0)},sr=()=>g(!1),Lp=async()=>{const{code:k,name:I,description:Ne}=v;if(!(!k.trim()||!I.trim())){c(!0);try{w?(await(await fetch(`${yt}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:w,code:k.trim(),name:I.trim(),description:Ne.trim()})})).json()).success&&(sr(),h()):(await(await fetch(`${yt}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:k.trim(),name:I.trim(),description:Ne.trim()})})).json()).success&&(sr(),h())}finally{c(!1)}}},Np=async k=>{if(confirm("Delete this department?"))try{(await(await fetch(`${yt}/backend/departments.php?id=${k}`,{method:"DELETE"})).json()).success&&h()}catch{}},Fa=i.filter(k=>!u||k.code.toLowerCase().includes(u.toLowerCase())||k.name.toLowerCase().includes(u.toLowerCase())||(k.description||"").toLowerCase().includes(u.toLowerCase()));let Zi="Admin Portal";try{const k=localStorage.getItem("strack_user");if(k){const I=JSON.parse(k),Ne=(I==null?void 0:I.name)||"";Zi=Ne==="Test Admin"||Ne==="Admin"?"Admin Portal":Ne||"Admin Portal"}}catch{}const Tp=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return E("div",{css:Sv(e),children:[E("aside",{css:xv(e),children:[E("header",{css:kv,children:[E("div",{css:Cv,children:[d("div",{css:Ev(e),children:d(Yi,{})}),d("span",{css:_v(e),children:"Strack"})]}),d("button",{type:"button",css:$v(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?d(Ta,{}):d(Oa,{})})]}),E("div",{css:Pv,children:[d("div",{css:Lv,children:iy(Zi)}),E("div",{css:Nv,children:[d("div",{css:Tv(e),children:Zi}),d("div",{css:zv(e),children:"Admin"})]})]}),d("nav",{css:Ov,children:ly.map(({id:k,label:I,icon:Ne})=>E("button",{type:"button",css:Rv(e,r===k),onClick:()=>l(k),children:[d(Ne,{}),I]},k))}),E("button",{type:"button",css:jv,onClick:Tp,children:[d(Ia,{}),"Logout"]})]}),d("main",{css:Iv(e),children:E("div",{css:Fv(e,r==="departments"||r==="students"),children:[r==="dashboard"&&E(ne,{children:[d("h1",{css:Pl,children:"Dashboard"}),d("p",{css:Ll,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),r==="students"&&E(ne,{children:[E("div",{css:Dv,children:[E("div",{children:[d("h1",{css:Av,children:"Manage Students"}),d("p",{css:Uv(e),children:"Add, edit, or remove student records."})]}),d("button",{type:"button",css:Bv,onClick:te,children:"+ Add Student"})]}),E("div",{css:bv(e),children:[d(vc,{}),d("input",{type:"text",placeholder:"Search students...",value:O,onChange:k=>Z(k.target.value)})]}),E("table",{css:yc(e),children:[d("thead",{children:E("tr",{children:[d("th",{css:Te(e),children:"Student ID"}),d("th",{css:Te(e),children:"Name"}),d("th",{css:Te(e),children:"Email"}),d("th",{css:Te(e),children:"Password"}),d("th",{css:Te(e),children:"Department"}),d("th",{css:Te(e),children:"Year"}),d("th",{css:Te(e),children:"GPA"}),d("th",{css:Te(e),children:"Points"}),d("th",{css:Te(e),children:"Attendance"}),d("th",{css:Te(e),children:"Actions"})]})}),d("tbody",{children:N?d("tr",{children:d("td",{css:ce(e),colSpan:10,children:"Loading..."})}):tn.length===0?d("tr",{children:d("td",{css:ce(e),colSpan:10,children:"No students found."})}):tn.map(k=>E("tr",{children:[d("td",{css:ce(e),children:k.student_id}),d("td",{css:ce(e),children:k.full_name}),d("td",{css:ce(e),children:k.email}),d("td",{css:ce(e),children:k.password||"—"}),d("td",{css:ce(e),children:k.department||"—"}),d("td",{css:ce(e),children:k.year||"—"}),d("td",{css:ce(e),children:Number(k.gpa)||0}),d("td",{css:ce(e),children:E("span",{css:Vv,children:[d(kp,{}),Number(k.points)||0]})}),d("td",{css:ce(e),children:E("span",{css:Wv(Number(k.attendance)||0,e),children:[Number(k.attendance)||0,"%"]})}),d("td",{css:ce(e),children:E("div",{css:wc,children:[d("button",{type:"button",css:Es(e),onClick:()=>_n(k),title:"Edit",children:d(gc,{})}),d("button",{type:"button",css:Sc(e),onClick:()=>vt(k.id),title:"Delete",children:d(mc,{})})]})})]},k.id))})]})]}),r==="lecturers"&&E(ne,{children:[d("h1",{css:Pl,children:"Lecturers"}),d("p",{css:Ll,children:"This is the lecturers page. View and manage lecturer accounts and teaching assignments here."})]}),r==="courses"&&E(ne,{children:[d("h1",{css:Pl,children:"Courses"}),d("p",{css:Ll,children:"This is the courses page. Manage course catalog, assignments, and offerings here."})]}),r==="departments"&&E(ne,{children:[E("div",{css:Mv,children:[E("div",{css:Hv,children:[d("h1",{css:Qv,children:"Departments"}),d("p",{css:Kv(e),children:"Manage university departments."})]}),d("button",{type:"button",css:Yv,onClick:$p,children:"+ Add Department"})]}),E("div",{css:Zv(e),children:[d("div",{css:Gv(),children:d(Ep,{})}),E("div",{children:[d("p",{css:Xv(e),children:s?"...":i.length}),d("p",{css:Jv(e),children:"Total Departments"})]})]}),E("div",{css:qv,children:[E("div",{css:ey,children:[d("h2",{css:ty,children:"All Departments"}),E("div",{css:ny(e),children:[d(vc,{}),d("input",{type:"text",placeholder:"Search departments...",value:u,onChange:k=>m(k.target.value)})]})]}),E("table",{css:yc(e),children:[d("thead",{children:E("tr",{children:[d("th",{css:Te(e),children:"Code"}),d("th",{css:Te(e),children:"Name"}),d("th",{css:Te(e),children:"Description"}),d("th",{css:Te(e),children:"Actions"})]})}),d("tbody",{children:s?d("tr",{children:d("td",{css:ce(e),colSpan:4,children:"Loading..."})}):Fa.length===0?d("tr",{children:d("td",{css:ce(e),colSpan:4,children:"No departments found."})}):Fa.map(k=>E("tr",{children:[d("td",{css:ce(e),children:k.code}),d("td",{css:ce(e),children:k.name}),d("td",{css:ce(e),children:k.description||"—"}),d("td",{css:ce(e),children:E("div",{css:wc,children:[d("button",{type:"button",css:Es(e),onClick:()=>Pp(k),title:"Edit",children:d(gc,{})}),d("button",{type:"button",css:Sc(e),onClick:()=>Np(k.id),title:"Delete",children:d(mc,{})})]})})]},k.id))})]})]})]}),r==="calendar"&&E(ne,{children:[d("h1",{css:Pl,children:"Calendar"}),d("p",{css:Ll,children:"This is the calendar page. View and manage academic calendar, deadlines, and events here."})]})]})}),D&&d("div",{css:xc,onClick:Ae,children:E("div",{css:kc(e),onClick:k=>k.stopPropagation(),children:[E("div",{css:Cc(e),children:[d("h3",{css:Ec(e),children:Le?"Edit Student":"Add Student"}),d("button",{type:"button",css:_c(e),onClick:Ae,"aria-label":"Close",children:d(hc,{})})]}),E("div",{css:$c,children:[E("div",{css:wt,children:[d("label",{css:St(e),children:"Full Name *"}),d("input",{type:"text",css:xt(e),placeholder:"e.g. Ava Thomas",value:st.full_name,onChange:k=>at(I=>({...I,full_name:k.target.value}))})]}),E("div",{css:wt,children:[d("label",{css:St(e),children:"Email *"}),d("input",{type:"email",css:xt(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:st.email,onChange:k=>at(I=>({...I,email:k.target.value}))})]}),E("div",{css:wt,children:[E("label",{css:St(e),children:["Password ",Le?"(leave blank to keep current)":"*"]}),d("input",{type:"text",css:xt(e),placeholder:"e.g. student123",value:st.password,onChange:k=>at(I=>({...I,password:k.target.value}))})]}),E("div",{css:wt,children:[E("label",{css:St(e),children:["Student ID ",Le?"":"*"]}),d("input",{type:"text",css:xt(e),placeholder:"e.g. STU2024008",value:st.student_id,onChange:k=>at(I=>({...I,student_id:k.target.value})),readOnly:!!Le})]}),E("div",{css:wt,children:[d("label",{css:St(e),children:"Department"}),E("select",{css:xt(e),value:st.department,onChange:k=>at(I=>({...I,department:k.target.value})),children:[d("option",{value:"",children:"Select department"}),T.map(k=>d("option",{value:k.name,children:k.name},k.id))]})]}),E("div",{css:wt,children:[d("label",{css:St(e),children:"Year"}),E("select",{css:xt(e),value:st.year,onChange:k=>at(I=>({...I,year:k.target.value})),children:[d("option",{value:"",children:"Select year"}),_p.map(k=>d("option",{value:k,children:k},k))]})]})]}),E("div",{css:Pc(e),children:[d("button",{type:"button",css:Lc(e),onClick:Ae,children:"Cancel"}),d("button",{type:"button",css:Nc,onClick:or,disabled:Cn,children:Cn?"Saving...":Le?"Save Changes":"Add Student"})]})]})}),p&&d("div",{css:xc,onClick:sr,children:E("div",{css:kc(e),onClick:k=>k.stopPropagation(),children:[E("div",{css:Cc(e),children:[d("h3",{css:Ec(e),children:w?"Edit Department":"Add New Department"}),d("button",{type:"button",css:_c(e),onClick:sr,"aria-label":"Close",children:d(hc,{})})]}),E("div",{css:$c,children:[E("div",{css:wt,children:[d("label",{css:St(e),children:"Department Name"}),d("input",{type:"text",css:xt(e),placeholder:"e.g. Newcastle Business School",value:v.name,onChange:k=>$(I=>({...I,name:k.target.value}))})]}),E("div",{css:wt,children:[d("label",{css:St(e),children:"Department Code"}),d("input",{type:"text",css:xt(e),placeholder:"e.g. NBS",value:v.code,onChange:k=>$(I=>({...I,code:k.target.value}))})]}),E("div",{css:wt,children:[d("label",{css:St(e),children:"Description"}),d("textarea",{css:ry(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:v.description,onChange:k=>$(I=>({...I,description:k.target.value}))})]})]}),E("div",{css:Pc(e),children:[d("button",{type:"button",css:Lc(e),onClick:sr,children:"Cancel"}),d("button",{type:"button",css:Nc,onClick:Lp,disabled:f,children:f?"Saving...":w?"Update Department":"Add Department"})]})]})})]})}const sy="/strack",Tc="strack_dark";function ay(){const[e,t]=C.useState(()=>{try{return localStorage.getItem(Tc)==="true"}catch{return!1}});C.useEffect(()=>{try{localStorage.setItem(Tc,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return oe.jsx(t1,{basename:sy,children:oe.jsxs(Jm,{children:[oe.jsx(Pn,{path:"/",element:oe.jsx(wg,{darkMode:e,onToggleDarkMode:n})}),oe.jsx(Pn,{path:"/dashboard",element:oe.jsx(qg,{darkMode:e,onToggleDarkMode:n})}),oe.jsx(Pn,{path:"/lecturer",element:oe.jsx(wv,{darkMode:e,onToggleDarkMode:n})}),oe.jsx(Pn,{path:"/admin",element:oe.jsx(oy,{darkMode:e,onToggleDarkMode:n})}),oe.jsx(Pn,{path:"*",element:oe.jsx(Gm,{to:"/",replace:!0})})]})})}$o.createRoot(document.getElementById("root")).render(oe.jsx($t.StrictMode,{children:oe.jsx(ay,{})}));
