function sm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function am(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ad={exports:{}},ao={},Ud={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),um=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),dm=Symbol.for("react.strict_mode"),fm=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),vm=Symbol.for("react.memo"),ym=Symbol.for("react.lazy"),ec=Symbol.iterator;function wm(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var Bd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wd=Object.assign,Vd={};function yr(e,t,n){this.props=e,this.context=t,this.refs=Vd,this.updater=n||Bd}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hd(){}Hd.prototype=yr.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=Vd,this.updater=n||Bd}var La=$a.prototype=new Hd;La.constructor=$a;Wd(La,yr.prototype);La.isPureReactComponent=!0;var tc=Array.isArray,Qd=Object.prototype.hasOwnProperty,Pa={current:null},Kd={key:!0,ref:!0,__self:!0,__source:!0};function Yd(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Qd.call(t,r)&&!Kd.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Vi,type:e,key:l,ref:o,props:i,_owner:Pa.current}}function Sm(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function xm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nc=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xm(""+e.key):t.toString(36)}function wl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Vi:case um:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Yo(o,0):r,tc(i)?(n="",e!=null&&(n=e.replace(nc,"$&/")+"/"),wl(i,t,n,"",function(d){return d})):i!=null&&(Na(i)&&(i=Sm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",tc(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Yo(l,s);o+=wl(l,t,n,a,i)}else if(a=wm(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Yo(l,s++),o+=wl(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function el(e,t,n){if(e==null)return e;var r=[],i=0;return wl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Sl={transition:null},km={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Pa};function Zd(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:el,forEach:function(e,t,n){el(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return el(e,function(){t++}),t},toArray:function(e){return el(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=yr;A.Fragment=cm;A.Profiler=fm;A.PureComponent=$a;A.StrictMode=dm;A.Suspense=gm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;A.act=Zd;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wd({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Pa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Qd.call(t,a)&&!Kd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Vi,type:e.type,key:i,ref:l,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pm,_context:e},e.Consumer=e};A.createElement=Yd;A.createFactory=function(e){var t=Yd.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:mm,render:e}};A.isValidElement=Na;A.lazy=function(e){return{$$typeof:ym,_payload:{_status:-1,_result:e},_init:Cm}};A.memo=function(e,t){return{$$typeof:vm,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Sl.transition;Sl.transition={};try{e()}finally{Sl.transition=t}};A.unstable_act=Zd;A.useCallback=function(e,t){return je.current.useCallback(e,t)};A.useContext=function(e){return je.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return je.current.useDeferredValue(e)};A.useEffect=function(e,t){return je.current.useEffect(e,t)};A.useId=function(){return je.current.useId()};A.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return je.current.useMemo(e,t)};A.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};A.useRef=function(e){return je.current.useRef(e)};A.useState=function(e){return je.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return je.current.useTransition()};A.version="18.3.1";Ud.exports=A;var w=Ud.exports;const Pt=am(w),Ls=sm({__proto__:null,default:Pt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=w,_m=Symbol.for("react.element"),$m=Symbol.for("react.fragment"),Lm=Object.prototype.hasOwnProperty,Pm=Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nm={key:!0,ref:!0,__self:!0,__source:!0};function Gd(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Lm.call(t,r)&&!Nm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_m,type:e,key:l,ref:o,props:i,_owner:Pm.current}}ao.Fragment=$m;ao.jsx=Gd;ao.jsxs=Gd;Ad.exports=ao;var pe=Ad.exports,Ps={},Xd={exports:{}},Ge={},Jd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var R=T.length;T.push(D);e:for(;0<R;){var X=R-1>>>1,q=T[X];if(0<i(q,D))T[X]=D,T[R]=q,R=X;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],R=T.pop();if(R!==D){T[0]=R;e:for(var X=0,q=T.length,on=q>>>1;X<on;){var ot=2*(X+1)-1,Rn=T[ot],be=ot+1,bn=T[be];if(0>i(Rn,R))be<q&&0>i(bn,Rn)?(T[X]=bn,T[be]=R,X=be):(T[X]=Rn,T[ot]=R,X=ot);else if(be<q&&0>i(bn,R))T[X]=bn,T[be]=R,X=be;else break e}}return D}function i(T,D){var R=T.sortIndex-D.sortIndex;return R!==0?R:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],d=[],g=1,h=null,y=3,C=!1,E=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var D=n(d);D!==null;){if(D.callback===null)r(d);else if(D.startTime<=T)r(d),D.sortIndex=D.expirationTime,t(a,D);else break;D=n(d)}}function _(T){if(x=!1,m(T),!E)if(n(a)!==null)E=!0,jn(N);else{var D=n(d);D!==null&&Dn(_,D.startTime-T)}}function N(T,D){E=!1,x&&(x=!1,p(j),j=-1),C=!0;var R=y;try{for(m(D),h=n(a);h!==null&&(!(h.expirationTime>D)||T&&!Ne());){var X=h.callback;if(typeof X=="function"){h.callback=null,y=h.priorityLevel;var q=X(h.expirationTime<=D);D=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(a)&&r(a),m(D)}else r(a);h=n(a)}if(h!==null)var on=!0;else{var ot=n(d);ot!==null&&Dn(_,ot.startTime-D),on=!1}return on}finally{h=null,y=R,C=!1}}var z=!1,P=null,j=-1,M=5,F=-1;function Ne(){return!(e.unstable_now()-F<M)}function Re(){if(P!==null){var T=e.unstable_now();F=T;var D=!0;try{D=P(!0,T)}finally{D?Rt():(z=!1,P=null)}}else z=!1}var Rt;if(typeof f=="function")Rt=function(){f(Re)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=Re,Rt=function(){lt.postMessage(null)}}else Rt=function(){L(Re,0)};function jn(T){P=T,z||(z=!0,Rt())}function Dn(T,D){j=L(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){E||C||(E=!0,jn(N))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(y){case 1:case 2:case 3:var D=3;break;default:D=y}var R=y;y=D;try{return T()}finally{y=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=y;y=T;try{return D()}finally{y=R}},e.unstable_scheduleCallback=function(T,D,R){var X=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?X+R:X):R=X,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,T={id:g++,callback:D,priorityLevel:T,startTime:R,expirationTime:q,sortIndex:-1},R>X?(T.sortIndex=R,t(d,T),n(a)===null&&T===n(d)&&(x?(p(j),j=-1):x=!0,Dn(_,R-X))):(T.sortIndex=q,t(a,T),E||C||(E=!0,jn(N))),T},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(T){var D=y;return function(){var R=y;y=D;try{return T.apply(this,arguments)}finally{y=R}}}})(Md);Jd.exports=Md;var Tm=Jd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=w,Ze=Tm;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qd=new Set,wi={};function Tn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(wi[e]=t,e=0;e<t.length;e++)qd.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=Object.prototype.hasOwnProperty,Om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc={},ic={};function jm(e){return Ns.call(ic,e)?!0:Ns.call(rc,e)?!1:Om.test(e)?ic[e]=!0:(rc[e]=!0,!1)}function Dm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rm(e,t,n,r){if(t===null||typeof t>"u"||Dm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,za);ke[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,za);ke[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,za);ke[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oa(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rm(t,n,i,r)&&(n=null),r||i===null?jm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dt=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),ef=Symbol.for("react.provider"),tf=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),Ra=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),nf=Symbol.for("react.offscreen"),lc=Symbol.iterator;function Dr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Zo;function li(e){if(Zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||""}return`
`+Zo+e}var Go=!1;function Xo(e,t){if(!e||Go)return"";Go=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Go=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function bm(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=Xo(e.type,!1),e;case 11:return e=Xo(e.type.render,!1),e;case 1:return e=Xo(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case Ts:return"Profiler";case ja:return"StrictMode";case zs:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tf:return(e.displayName||"Context")+".Consumer";case ef:return(e._context.displayName||"Context")+".Provider";case Da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ra:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function Im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fm(e){var t=rf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nl(e){e._valueTracker||(e._valueTracker=Fm(e))}function lf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function of(e,t){t=t.checked,t!=null&&Oa(e,"checked",t,!1)}function Rs(e,t){of(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&bs(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bs(e,t,n){(t!=="number"||Dl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oi=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Is(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(oi(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function sf(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function af(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?af(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rl,uf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Am=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){Am.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function cf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function df(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Um=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,t){if(t){if(Um[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bs=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,ir=null,lr=null;function cc(e){if(e=Ki(e)){if(typeof Ws!="function")throw Error($(280));var t=e.stateNode;t&&(t=ho(t),Ws(e.stateNode,e.type,t))}}function ff(e){ir?lr?lr.push(e):lr=[e]:ir=e}function pf(){if(ir){var e=ir,t=lr;if(lr=ir=null,cc(e),t)for(e=0;e<t.length;e++)cc(t[e])}}function hf(e,t){return e(t)}function mf(){}var Jo=!1;function gf(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return hf(e,t,n)}finally{Jo=!1,(ir!==null||lr!==null)&&(mf(),pf())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Vs=!1;if(Tt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Vs=!1}function Bm(e,t,n,r,i,l,o,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var di=!1,Rl=null,bl=!1,Hs=null,Wm={onError:function(e){di=!0,Rl=e}};function Vm(e,t,n,r,i,l,o,s,a){di=!1,Rl=null,Bm.apply(Wm,arguments)}function Hm(e,t,n,r,i,l,o,s,a){if(Vm.apply(this,arguments),di){if(di){var d=Rl;di=!1,Rl=null}else throw Error($(198));bl||(bl=!0,Hs=d)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dc(e){if(zn(e)!==e)throw Error($(188))}function Qm(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return dc(i),e;if(l===r)return dc(i),t;l=l.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function yf(e){return e=Qm(e),e!==null?wf(e):null}function wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wf(e);if(t!==null)return t;e=e.sibling}return null}var Sf=Ze.unstable_scheduleCallback,fc=Ze.unstable_cancelCallback,Km=Ze.unstable_shouldYield,Ym=Ze.unstable_requestPaint,ue=Ze.unstable_now,Zm=Ze.unstable_getCurrentPriorityLevel,Ia=Ze.unstable_ImmediatePriority,xf=Ze.unstable_UserBlockingPriority,Il=Ze.unstable_NormalPriority,Gm=Ze.unstable_LowPriority,Cf=Ze.unstable_IdlePriority,uo=null,xt=null;function Xm(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:qm,Jm=Math.log,Mm=Math.LN2;function qm(e){return e>>>=0,e===0?32:31-(Jm(e)/Mm|0)|0}var il=64,ll=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=si(s):(l&=o,l!==0&&(r=si(l)))}else o=n&~i,o!==0?r=si(o):l!==0&&(r=si(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function e0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ft(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=e0(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kf(){var e=il;return il<<=1,!(il&4194240)&&(il=64),e}function Mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function n0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _f,Aa,$f,Lf,Pf,Ks=!1,ol=[],Kt=null,Yt=null,Zt=null,Ci=new Map,ki=new Map,Bt=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function br(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Aa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function i0(e,t,n,r,i){switch(t){case"focusin":return Kt=br(Kt,e,t,n,r,i),!0;case"dragenter":return Yt=br(Yt,e,t,n,r,i),!0;case"mouseover":return Zt=br(Zt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Ci.set(l,br(Ci.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,ki.set(l,br(ki.get(l)||null,e,t,n,r,i)),!0}return!1}function Nf(e){var t=wn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=vf(n),t!==null){e.blockedOn=t,Pf(e.priority,function(){$f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bs=r,n.target.dispatchEvent(r),Bs=null}else return t=Ki(n),t!==null&&Aa(t),e.blockedOn=n,!1;t.shift()}return!0}function hc(e,t,n){xl(e)&&n.delete(t)}function l0(){Ks=!1,Kt!==null&&xl(Kt)&&(Kt=null),Yt!==null&&xl(Yt)&&(Yt=null),Zt!==null&&xl(Zt)&&(Zt=null),Ci.forEach(hc),ki.forEach(hc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ks||(Ks=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,l0)))}function Ei(e){function t(i){return Ir(i,e)}if(0<ol.length){Ir(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Ir(Kt,e),Yt!==null&&Ir(Yt,e),Zt!==null&&Ir(Zt,e),Ci.forEach(t),ki.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Nf(n),n.blockedOn===null&&Bt.shift()}var or=Dt.ReactCurrentBatchConfig,Al=!0;function o0(e,t,n,r){var i=Q,l=or.transition;or.transition=null;try{Q=1,Ua(e,t,n,r)}finally{Q=i,or.transition=l}}function s0(e,t,n,r){var i=Q,l=or.transition;or.transition=null;try{Q=4,Ua(e,t,n,r)}finally{Q=i,or.transition=l}}function Ua(e,t,n,r){if(Al){var i=Ys(e,t,n,r);if(i===null)as(e,t,r,Ul,n),pc(e,r);else if(i0(i,e,t,n,r))r.stopPropagation();else if(pc(e,r),t&4&&-1<r0.indexOf(e)){for(;i!==null;){var l=Ki(i);if(l!==null&&_f(l),l=Ys(e,t,n,r),l===null&&as(e,t,r,Ul,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else as(e,t,r,null,n)}}var Ul=null;function Ys(e,t,n,r){if(Ul=null,e=ba(r),e=wn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ul=e,null}function Tf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zm()){case Ia:return 1;case xf:return 4;case Il:case Gm:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var Vt=null,Ba=null,Cl=null;function zf(){if(Cl)return Cl;var e,t=Ba,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Cl=i.slice(e,1<r?1-r:void 0)}function kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function mc(){return!1}function Xe(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?sl:mc,this.isPropagationStopped=mc,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Xe(wr),Qi=ie({},wr,{view:0,detail:0}),a0=Xe(Qi),qo,es,Fr,co=ie({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(qo=e.screenX-Fr.screenX,es=e.screenY-Fr.screenY):es=qo=0,Fr=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:es}}),gc=Xe(co),u0=ie({},co,{dataTransfer:0}),c0=Xe(u0),d0=ie({},Qi,{relatedTarget:0}),ts=Xe(d0),f0=ie({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=Xe(f0),h0=ie({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m0=Xe(h0),g0=ie({},wr,{data:0}),vc=Xe(g0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w0[e])?!!t[e]:!1}function Va(){return S0}var x0=ie({},Qi,{key:function(e){if(e.key){var t=v0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Va,charCode:function(e){return e.type==="keypress"?kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C0=Xe(x0),k0=ie({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=Xe(k0),E0=ie({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Va}),_0=Xe(E0),$0=ie({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=Xe($0),P0=ie({},co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=Xe(P0),T0=[9,13,27,32],Ha=Tt&&"CompositionEvent"in window,fi=null;Tt&&"documentMode"in document&&(fi=document.documentMode);var z0=Tt&&"TextEvent"in window&&!fi,Of=Tt&&(!Ha||fi&&8<fi&&11>=fi),wc=" ",Sc=!1;function jf(e,t){switch(e){case"keyup":return T0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function O0(e,t){switch(e){case"compositionend":return Df(t);case"keypress":return t.which!==32?null:(Sc=!0,wc);case"textInput":return e=t.data,e===wc&&Sc?null:e;default:return null}}function j0(e,t){if(Yn)return e==="compositionend"||!Ha&&jf(e,t)?(e=zf(),Cl=Ba=Vt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Of&&t.locale!=="ko"?null:t.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D0[e.type]:t==="textarea"}function Rf(e,t,n,r){ff(r),t=Bl(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,_i=null;function R0(e){Kf(e,0)}function fo(e){var t=Xn(e);if(lf(t))return e}function b0(e,t){if(e==="change")return t}var bf=!1;if(Tt){var ns;if(Tt){var rs="oninput"in document;if(!rs){var Cc=document.createElement("div");Cc.setAttribute("oninput","return;"),rs=typeof Cc.oninput=="function"}ns=rs}else ns=!1;bf=ns&&(!document.documentMode||9<document.documentMode)}function kc(){pi&&(pi.detachEvent("onpropertychange",If),_i=pi=null)}function If(e){if(e.propertyName==="value"&&fo(_i)){var t=[];Rf(t,_i,e,ba(e)),gf(R0,t)}}function I0(e,t,n){e==="focusin"?(kc(),pi=t,_i=n,pi.attachEvent("onpropertychange",If)):e==="focusout"&&kc()}function F0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo(_i)}function A0(e,t){if(e==="click")return fo(t)}function U0(e,t){if(e==="input"||e==="change")return fo(t)}function B0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:B0;function $i(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ns.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var n=Ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function Ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(){for(var e=window,t=Dl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dl(e.document)}return t}function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function W0(e){var t=Af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ff(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=_c(n,l);var o=_c(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var V0=Tt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Zs=null,hi=null,Gs=!1;function $c(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gs||Zn==null||Zn!==Dl(r)||(r=Zn,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&$i(hi,r)||(hi=r,r=Bl(Zs,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},is={},Uf={};Tt&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function po(e){if(is[e])return is[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uf)return is[e]=t[n];return e}var Bf=po("animationend"),Wf=po("animationiteration"),Vf=po("animationstart"),Hf=po("transitionend"),Qf=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Qf.set(e,t),Tn(t,[e])}for(var ls=0;ls<Lc.length;ls++){var os=Lc[ls],H0=os.toLowerCase(),Q0=os[0].toUpperCase()+os.slice(1);nn(H0,"on"+Q0)}nn(Bf,"onAnimationEnd");nn(Wf,"onAnimationIteration");nn(Vf,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Hf,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function Pc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hm(r,t,void 0,e),e.currentTarget=null}function Kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Pc(i,s,d),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,d=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Pc(i,s,d),l=a}}}if(bl)throw e=Hs,bl=!1,Hs=null,e}function Z(e,t){var n=t[ea];n===void 0&&(n=t[ea]=new Set);var r=e+"__bubble";n.has(r)||(Yf(t,e,2,!1),n.add(r))}function ss(e,t,n){var r=0;t&&(r|=4),Yf(n,e,r,t)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[ul]){e[ul]=!0,qd.forEach(function(n){n!=="selectionchange"&&(K0.has(n)||ss(n,!1,e),ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ul]||(t[ul]=!0,ss("selectionchange",!1,t))}}function Yf(e,t,n,r){switch(Tf(t)){case 1:var i=o0;break;case 4:i=s0;break;default:i=Ua}n=i.bind(null,t,n,e),i=void 0,!Vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function as(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=wn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}gf(function(){var d=l,g=ba(n),h=[];e:{var y=Qf.get(e);if(y!==void 0){var C=Wa,E=e;switch(e){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":C=C0;break;case"focusin":E="focus",C=ts;break;case"focusout":E="blur",C=ts;break;case"beforeblur":case"afterblur":C=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=c0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=_0;break;case Bf:case Wf:case Vf:C=p0;break;case Hf:C=L0;break;case"scroll":C=a0;break;case"wheel":C=N0;break;case"copy":case"cut":case"paste":C=m0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=yc}var x=(t&4)!==0,L=!x&&e==="scroll",p=x?y!==null?y+"Capture":null:y;x=[];for(var f=d,m;f!==null;){m=f;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=xi(f,p),_!=null&&x.push(Pi(f,_,m)))),L)break;f=f.return}0<x.length&&(y=new C(y,E,null,n,g),h.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",y&&n!==Bs&&(E=n.relatedTarget||n.fromElement)&&(wn(E)||E[zt]))break e;if((C||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,C?(E=n.relatedTarget||n.toElement,C=d,E=E?wn(E):null,E!==null&&(L=zn(E),E!==L||E.tag!==5&&E.tag!==6)&&(E=null)):(C=null,E=d),C!==E)){if(x=gc,_="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=yc,_="onPointerLeave",p="onPointerEnter",f="pointer"),L=C==null?y:Xn(C),m=E==null?y:Xn(E),y=new x(_,f+"leave",C,n,g),y.target=L,y.relatedTarget=m,_=null,wn(g)===d&&(x=new x(p,f+"enter",E,n,g),x.target=m,x.relatedTarget=L,_=x),L=_,C&&E)t:{for(x=C,p=E,f=0,m=x;m;m=Wn(m))f++;for(m=0,_=p;_;_=Wn(_))m++;for(;0<f-m;)x=Wn(x),f--;for(;0<m-f;)p=Wn(p),m--;for(;f--;){if(x===p||p!==null&&x===p.alternate)break t;x=Wn(x),p=Wn(p)}x=null}else x=null;C!==null&&Nc(h,y,C,x,!1),E!==null&&L!==null&&Nc(h,L,E,x,!0)}}e:{if(y=d?Xn(d):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var N=b0;else if(xc(y))if(bf)N=U0;else{N=F0;var z=I0}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=A0);if(N&&(N=N(e,d))){Rf(h,N,n,g);break e}z&&z(e,y,d),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&bs(y,"number",y.value)}switch(z=d?Xn(d):window,e){case"focusin":(xc(z)||z.contentEditable==="true")&&(Zn=z,Zs=d,hi=null);break;case"focusout":hi=Zs=Zn=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,$c(h,n,g);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":$c(h,n,g)}var P;if(Ha)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Yn?jf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Of&&n.locale!=="ko"&&(Yn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Yn&&(P=zf()):(Vt=g,Ba="value"in Vt?Vt.value:Vt.textContent,Yn=!0)),z=Bl(d,j),0<z.length&&(j=new vc(j,e,null,n,g),h.push({event:j,listeners:z}),P?j.data=P:(P=Df(n),P!==null&&(j.data=P)))),(P=z0?O0(e,n):j0(e,n))&&(d=Bl(d,"onBeforeInput"),0<d.length&&(g=new vc("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=P))}Kf(h,t)})}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=xi(e,n),l!=null&&r.unshift(Pi(e,l,i)),l=xi(e,t),l!=null&&r.push(Pi(e,l,i))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,i?(a=xi(n,l),a!=null&&o.unshift(Pi(n,a,s))):i||(a=xi(n,l),a!=null&&o.push(Pi(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Y0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(Y0,`
`).replace(Z0,"")}function cl(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error($(425))}function Wl(){}var Xs=null,Js=null;function Ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qs=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,X0=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(J0)}:qs;function J0(e){setTimeout(function(){throw e})}function us(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),St="__reactFiber$"+Sr,Ni="__reactProps$"+Sr,zt="__reactContainer$"+Sr,ea="__reactEvents$"+Sr,M0="__reactListeners$"+Sr,q0="__reactHandles$"+Sr;function wn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oc(e);e!==null;){if(n=e[St])return n;e=Oc(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[St]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function ho(e){return e[Ni]||null}var ta=[],Jn=-1;function rn(e){return{current:e}}function G(e){0>Jn||(e.current=ta[Jn],ta[Jn]=null,Jn--)}function Y(e,t){Jn++,ta[Jn]=e.current,e.current=t}var tn={},Pe=rn(tn),Ae=rn(!1),_n=tn;function dr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function Vl(){G(Ae),G(Pe)}function jc(e,t,n){if(Pe.current!==tn)throw Error($(168));Y(Pe,t),Y(Ae,n)}function Zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,Im(e)||"Unknown",i));return ie({},n,r)}function Hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,_n=Pe.current,Y(Pe,e),Y(Ae,Ae.current),!0}function Dc(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Zf(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,G(Ae),G(Pe),Y(Pe,e)):G(Ae),Y(Ae,n)}var _t=null,mo=!1,cs=!1;function Gf(e){_t===null?_t=[e]:_t.push(e)}function e1(e){mo=!0,Gf(e)}function ln(){if(!cs&&_t!==null){cs=!0;var e=0,t=Q;try{var n=_t;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,mo=!1}catch(i){throw _t!==null&&(_t=_t.slice(e+1)),Sf(Ia,ln),i}finally{Q=t,cs=!1}}return null}var Mn=[],qn=0,Ql=null,Kl=0,Me=[],qe=0,$n=null,$t=1,Lt="";function vn(e,t){Mn[qn++]=Kl,Mn[qn++]=Ql,Ql=e,Kl=t}function Xf(e,t,n){Me[qe++]=$t,Me[qe++]=Lt,Me[qe++]=$n,$n=e;var r=$t;e=Lt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var l=32-ft(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$t=1<<32-ft(t)+i|n<<i|r,Lt=l+e}else $t=1<<l|n<<i|r,Lt=e}function Ka(e){e.return!==null&&(vn(e,1),Xf(e,1,0))}function Ya(e){for(;e===Ql;)Ql=Mn[--qn],Mn[qn]=null,Kl=Mn[--qn],Mn[qn]=null;for(;e===$n;)$n=Me[--qe],Me[qe]=null,Lt=Me[--qe],Me[qe]=null,$t=Me[--qe],Me[qe]=null}var Ke=null,Qe=null,J=!1,dt=null;function Jf(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:$t,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Qe=null,!0):!1;default:return!1}}function na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if(J){var t=Qe;if(t){var n=t;if(!Rc(e,t)){if(na(e))throw Error($(418));t=Gt(n.nextSibling);var r=Ke;t&&Rc(e,t)?Jf(r,n):(e.flags=e.flags&-4097|2,J=!1,Ke=e)}}else{if(na(e))throw Error($(418));e.flags=e.flags&-4097|2,J=!1,Ke=e}}}function bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function dl(e){if(e!==Ke)return!1;if(!J)return bc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ms(e.type,e.memoizedProps)),t&&(t=Qe)){if(na(e))throw Mf(),Error($(418));for(;t;)Jf(e,t),t=Gt(t.nextSibling)}if(bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ke?Gt(e.stateNode.nextSibling):null;return!0}function Mf(){for(var e=Qe;e;)e=Gt(e.nextSibling)}function fr(){Qe=Ke=null,J=!1}function Za(e){dt===null?dt=[e]:dt.push(e)}var t1=Dt.ReactCurrentBatchConfig;function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function fl(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ic(e){var t=e._init;return t(e._payload)}function qf(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=qt(p,f),p.index=0,p.sibling=null,p}function l(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,m,_){return f===null||f.tag!==6?(f=vs(m,p.mode,_),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,_){var N=m.type;return N===Kn?g(p,f,m.props.children,_,m.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===At&&Ic(N)===f.type)?(_=i(f,m.props),_.ref=Ar(p,f,m),_.return=p,_):(_=Tl(m.type,m.key,m.props,null,p.mode,_),_.ref=Ar(p,f,m),_.return=p,_)}function d(p,f,m,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ys(m,p.mode,_),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function g(p,f,m,_,N){return f===null||f.tag!==7?(f=kn(m,p.mode,_,N),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=vs(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tl:return m=Tl(f.type,f.key,f.props,null,p.mode,m),m.ref=Ar(p,null,f),m.return=p,m;case Qn:return f=ys(f,p.mode,m),f.return=p,f;case At:var _=f._init;return h(p,_(f._payload),m)}if(oi(f)||Dr(f))return f=kn(f,p.mode,m,null),f.return=p,f;fl(p,f)}return null}function y(p,f,m,_){var N=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:s(p,f,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case tl:return m.key===N?a(p,f,m,_):null;case Qn:return m.key===N?d(p,f,m,_):null;case At:return N=m._init,y(p,f,N(m._payload),_)}if(oi(m)||Dr(m))return N!==null?null:g(p,f,m,_,null);fl(p,m)}return null}function C(p,f,m,_,N){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,s(f,p,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:return p=p.get(_.key===null?m:_.key)||null,a(f,p,_,N);case Qn:return p=p.get(_.key===null?m:_.key)||null,d(f,p,_,N);case At:var z=_._init;return C(p,f,m,z(_._payload),N)}if(oi(_)||Dr(_))return p=p.get(m)||null,g(f,p,_,N,null);fl(f,_)}return null}function E(p,f,m,_){for(var N=null,z=null,P=f,j=f=0,M=null;P!==null&&j<m.length;j++){P.index>j?(M=P,P=null):M=P.sibling;var F=y(p,P,m[j],_);if(F===null){P===null&&(P=M);break}e&&P&&F.alternate===null&&t(p,P),f=l(F,f,j),z===null?N=F:z.sibling=F,z=F,P=M}if(j===m.length)return n(p,P),J&&vn(p,j),N;if(P===null){for(;j<m.length;j++)P=h(p,m[j],_),P!==null&&(f=l(P,f,j),z===null?N=P:z.sibling=P,z=P);return J&&vn(p,j),N}for(P=r(p,P);j<m.length;j++)M=C(P,p,j,m[j],_),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?j:M.key),f=l(M,f,j),z===null?N=M:z.sibling=M,z=M);return e&&P.forEach(function(Ne){return t(p,Ne)}),J&&vn(p,j),N}function x(p,f,m,_){var N=Dr(m);if(typeof N!="function")throw Error($(150));if(m=N.call(m),m==null)throw Error($(151));for(var z=N=null,P=f,j=f=0,M=null,F=m.next();P!==null&&!F.done;j++,F=m.next()){P.index>j?(M=P,P=null):M=P.sibling;var Ne=y(p,P,F.value,_);if(Ne===null){P===null&&(P=M);break}e&&P&&Ne.alternate===null&&t(p,P),f=l(Ne,f,j),z===null?N=Ne:z.sibling=Ne,z=Ne,P=M}if(F.done)return n(p,P),J&&vn(p,j),N;if(P===null){for(;!F.done;j++,F=m.next())F=h(p,F.value,_),F!==null&&(f=l(F,f,j),z===null?N=F:z.sibling=F,z=F);return J&&vn(p,j),N}for(P=r(p,P);!F.done;j++,F=m.next())F=C(P,p,j,F.value,_),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?j:F.key),f=l(F,f,j),z===null?N=F:z.sibling=F,z=F);return e&&P.forEach(function(Re){return t(p,Re)}),J&&vn(p,j),N}function L(p,f,m,_){if(typeof m=="object"&&m!==null&&m.type===Kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case tl:e:{for(var N=m.key,z=f;z!==null;){if(z.key===N){if(N=m.type,N===Kn){if(z.tag===7){n(p,z.sibling),f=i(z,m.props.children),f.return=p,p=f;break e}}else if(z.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===At&&Ic(N)===z.type){n(p,z.sibling),f=i(z,m.props),f.ref=Ar(p,z,m),f.return=p,p=f;break e}n(p,z);break}else t(p,z);z=z.sibling}m.type===Kn?(f=kn(m.props.children,p.mode,_,m.key),f.return=p,p=f):(_=Tl(m.type,m.key,m.props,null,p.mode,_),_.ref=Ar(p,f,m),_.return=p,p=_)}return o(p);case Qn:e:{for(z=m.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ys(m,p.mode,_),f.return=p,p=f}return o(p);case At:return z=m._init,L(p,f,z(m._payload),_)}if(oi(m))return E(p,f,m,_);if(Dr(m))return x(p,f,m,_);fl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=vs(m,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return L}var pr=qf(!0),ep=qf(!1),Yl=rn(null),Zl=null,er=null,Ga=null;function Xa(){Ga=er=Zl=null}function Ja(e){var t=Yl.current;G(Yl),e._currentValue=t}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Zl=e,Ga=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ga!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(Zl===null)throw Error($(308));er=e,Zl.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var Sn=null;function Ma(e){Sn===null?Sn=[e]:Sn.push(e)}function tp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ma(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Ma(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function El(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gl(e,t,n,r){var i=e.updateQueue;Ut=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,d=a.next;a.next=null,o===null?l=d:o.next=d,o=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,g=d=a=null,s=l;do{var y=s.lane,C=s.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:C,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,x=s;switch(y=t,C=n,x.tag){case 1:if(E=x.payload,typeof E=="function"){h=E.call(C,h,y);break e}h=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=x.payload,y=typeof E=="function"?E.call(C,h,y):E,y==null)break e;h=ie({},h,y);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else C={eventTime:C,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=C,a=h):g=g.next=C,o|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(g===null&&(a=h),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Pn|=o,e.lanes=o,e.memoizedState=h}}function Ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Yi={},Ct=rn(Yi),Ti=rn(Yi),zi=rn(Yi);function xn(e){if(e===Yi)throw Error($(174));return e}function eu(e,t){switch(Y(zi,t),Y(Ti,e),Y(Ct,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fs(t,e)}G(Ct),Y(Ct,t)}function hr(){G(Ct),G(Ti),G(zi)}function rp(e){xn(zi.current);var t=xn(Ct.current),n=Fs(t,e.type);t!==n&&(Y(Ti,e),Y(Ct,n))}function tu(e){Ti.current===e&&(G(Ct),G(Ti))}var ne=rn(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ds=[];function nu(){for(var e=0;e<ds.length;e++)ds[e]._workInProgressVersionPrimary=null;ds.length=0}var _l=Dt.ReactCurrentDispatcher,fs=Dt.ReactCurrentBatchConfig,Ln=0,re=null,he=null,ve=null,Jl=!1,mi=!1,Oi=0,n1=0;function Ee(){throw Error($(321))}function ru(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function iu(e,t,n,r,i,l){if(Ln=l,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_l.current=e===null||e.memoizedState===null?o1:s1,e=n(r,i),mi){l=0;do{if(mi=!1,Oi=0,25<=l)throw Error($(301));l+=1,ve=he=null,t.updateQueue=null,_l.current=a1,e=n(r,i)}while(mi)}if(_l.current=Ml,t=he!==null&&he.next!==null,Ln=0,ve=he=re=null,Jl=!1,t)throw Error($(300));return e}function lu(){var e=Oi!==0;return Oi=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?re.memoizedState=ve=e:ve=ve.next=e,ve}function rt(){if(he===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?re.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error($(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?re.memoizedState=ve=e:ve=ve.next=e}return ve}function ji(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=rt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,d=l;do{var g=d.lane;if((Ln&g)===g)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,re.lanes|=g,Pn|=g}d=d.next}while(d!==null&&d!==l);a===null?o=r:a.next=s,ht(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,re.lanes|=l,Pn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hs(e){var t=rt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ht(l,t.memoizedState)||(Fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ip(){}function lp(e,t){var n=re,r=rt(),i=t(),l=!ht(r.memoizedState,i);if(l&&(r.memoizedState=i,Fe=!0),r=r.queue,ou(ap.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Di(9,sp.bind(null,n,r,i,t),void 0,null),ye===null)throw Error($(349));Ln&30||op(n,t,i)}return i}function op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sp(e,t,n,r){t.value=n,t.getSnapshot=r,up(t)&&cp(e)}function ap(e,t,n){return n(function(){up(t)&&cp(e)})}function up(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function cp(e){var t=Ot(e,1);t!==null&&pt(t,e,1,-1)}function Uc(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t.queue=e,e=e.dispatch=l1.bind(null,re,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dp(){return rt().memoizedState}function $l(e,t,n,r){var i=vt();re.flags|=e,i.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function go(e,t,n,r){var i=rt();r=r===void 0?null:r;var l=void 0;if(he!==null){var o=he.memoizedState;if(l=o.destroy,r!==null&&ru(r,o.deps)){i.memoizedState=Di(t,n,l,r);return}}re.flags|=e,i.memoizedState=Di(1|t,n,l,r)}function Bc(e,t){return $l(8390656,8,e,t)}function ou(e,t){return go(2048,8,e,t)}function fp(e,t){return go(4,2,e,t)}function pp(e,t){return go(4,4,e,t)}function hp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mp(e,t,n){return n=n!=null?n.concat([e]):null,go(4,4,hp.bind(null,t,e),n)}function su(){}function gp(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ru(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vp(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ru(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yp(e,t,n){return Ln&21?(ht(n,t)||(n=kf(),re.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function r1(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=fs.transition;fs.transition={};try{e(!1),t()}finally{Q=n,fs.transition=r}}function wp(){return rt().memoizedState}function i1(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sp(e))xp(t,n);else if(n=tp(e,t,n,r),n!==null){var i=Oe();pt(n,e,r,i),Cp(n,t,r)}}function l1(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sp(e))xp(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,ht(s,o)){var a=t.interleaved;a===null?(i.next=i,Ma(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=tp(e,t,i,r),n!==null&&(i=Oe(),pt(n,e,r,i),Cp(n,t,r))}}function Sp(e){var t=e.alternate;return e===re||t!==null&&t===re}function xp(e,t){mi=Jl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}var Ml={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},o1={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$l(4194308,4,hp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $l(4194308,4,e,t)},useInsertionEffect:function(e,t){return $l(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i1.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Uc,useDebugValue:su,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Uc(!1),t=e[0];return e=r1.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=vt();if(J){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ye===null)throw Error($(349));Ln&30||op(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Bc(ap.bind(null,r,l,e),[e]),r.flags|=2048,Di(9,sp.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=vt(),t=ye.identifierPrefix;if(J){var n=Lt,r=$t;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s1={readContext:nt,useCallback:gp,useContext:nt,useEffect:ou,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:pp,useMemo:vp,useReducer:ps,useRef:dp,useState:function(){return ps(ji)},useDebugValue:su,useDeferredValue:function(e){var t=rt();return yp(t,he.memoizedState,e)},useTransition:function(){var e=ps(ji)[0],t=rt().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:lp,useId:wp,unstable_isNewReconciler:!1},a1={readContext:nt,useCallback:gp,useContext:nt,useEffect:ou,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:pp,useMemo:vp,useReducer:hs,useRef:dp,useState:function(){return hs(ji)},useDebugValue:su,useDeferredValue:function(e){var t=rt();return he===null?t.memoizedState=e:yp(t,he.memoizedState,e)},useTransition:function(){var e=hs(ji)[0],t=rt().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:lp,useId:wp,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function la(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vo={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=Mt(e),l=Nt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Xt(e,l,i),t!==null&&(pt(t,e,i,r),El(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=Mt(e),l=Nt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Xt(e,l,i),t!==null&&(pt(t,e,i,r),El(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=Mt(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Xt(e,i,r),t!==null&&(pt(t,e,r,n),El(t,e,r))}};function Wc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!$i(n,r)||!$i(i,l):!0}function kp(e,t,n){var r=!1,i=tn,l=t.contextType;return typeof l=="object"&&l!==null?l=nt(l):(i=Ue(t)?_n:Pe.current,r=t.contextTypes,l=(r=r!=null)?dr(e,i):tn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function oa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},qa(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=nt(l):(l=Ue(t)?_n:Pe.current,i.context=dr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(la(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vo.enqueueReplaceState(i,i.state,null),Gl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var n="",r=t;do n+=bm(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var u1=typeof WeakMap=="function"?WeakMap:Map;function Ep(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){eo||(eo=!0,va=r),sa(e,t)},n}function _p(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){sa(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Hc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new u1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=k1.bind(null,e,t,n),t.then(e,e))}function Qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var c1=Dt.ReactCurrentOwner,Fe=!1;function ze(e,t,n,r){t.child=e===null?ep(t,null,n,r):pr(t,e.child,n,r)}function Yc(e,t,n,r,i){n=n.render;var l=t.ref;return sr(t,i),r=iu(e,t,n,r,l,i),n=lu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(J&&n&&Ka(t),t.flags|=1,ze(e,t,r,i),t.child)}function Zc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!mu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$p(e,t,l,r,i)):(e=Tl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:$i,n(o,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=qt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $p(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if($i(l,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,jt(e,t,i)}return aa(e,t,n,r,i)}function Lp(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(nr,He),He|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(nr,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Y(nr,He),He|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Y(nr,He),He|=r;return ze(e,t,i,n),t.child}function Pp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,i){var l=Ue(n)?_n:Pe.current;return l=dr(t,l),sr(t,i),n=iu(e,t,n,r,l,i),r=lu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(J&&r&&Ka(t),t.flags|=1,ze(e,t,n,i),t.child)}function Gc(e,t,n,r,i){if(Ue(n)){var l=!0;Hl(t)}else l=!1;if(sr(t,i),t.stateNode===null)Ll(e,t),kp(t,n,r),oa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=nt(d):(d=Ue(n)?_n:Pe.current,d=dr(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Vc(t,o,r,d),Ut=!1;var y=t.memoizedState;o.state=y,Gl(t,r,o,i),a=t.memoizedState,s!==r||y!==a||Ae.current||Ut?(typeof g=="function"&&(la(t,n,g,r),a=t.memoizedState),(s=Ut||Wc(t,n,s,r,y,a,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,np(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:ut(t.type,s),o.props=d,h=t.pendingProps,y=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ue(n)?_n:Pe.current,a=dr(t,a));var C=n.getDerivedStateFromProps;(g=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||y!==a)&&Vc(t,o,r,a),Ut=!1,y=t.memoizedState,o.state=y,Gl(t,r,o,i);var E=t.memoizedState;s!==h||y!==E||Ae.current||Ut?(typeof C=="function"&&(la(t,n,C,r),E=t.memoizedState),(d=Ut||Wc(t,n,d,r,y,E,a)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return ua(e,t,n,r,l,i)}function ua(e,t,n,r,i,l){Pp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Dc(t,n,!1),jt(e,t,l);r=t.stateNode,c1.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pr(t,e.child,null,l),t.child=pr(t,null,s,l)):ze(e,t,s,l),t.memoizedState=r.state,i&&Dc(t,n,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jc(e,t.context,!1),eu(e,t.containerInfo)}function Xc(e,t,n,r,i){return fr(),Za(i),t.flags|=256,ze(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,t,n){var r=t.pendingProps,i=ne.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ne,i&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=So(o,r,0,null),e=kn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=da(n),t.memoizedState=ca,e):au(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return d1(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=qt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=qt(s,l):(l=kn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?da(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return l=e.child,e=l.sibling,r=qt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function au(e,t){return t=So({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pl(e,t,n,r){return r!==null&&Za(r),pr(t,e.child,null,n),e=au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d1(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=ms(Error($(422))),pl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=So({mode:"visible",children:r.children},i,0,null),l=kn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&pr(t,e.child,null,o),t.child.memoizedState=da(o),t.memoizedState=ca,l);if(!(t.mode&1))return pl(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error($(419)),r=ms(l,r,void 0),pl(e,t,o,r)}if(s=(o&e.childLanes)!==0,Fe||s){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ot(e,i),pt(r,e,i,-1))}return hu(),r=ms(Error($(421))),pl(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=E1.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Qe=Gt(i.nextSibling),Ke=t,J=!0,dt=null,e!==null&&(Me[qe++]=$t,Me[qe++]=Lt,Me[qe++]=$n,$t=e.id,Lt=e.overflow,$n=t),t=au(t,r.children),t.flags|=4096,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function gs(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function zp(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ze(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),gs(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}gs(t,!0,n,null,l);break;case"together":gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ll(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f1(e,t,n){switch(t.tag){case 3:Np(t),fr();break;case 5:rp(t);break;case 1:Ue(t.type)&&Hl(t);break;case 4:eu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Tp(e,t,n):(Y(ne,ne.current&1),e=jt(e,t,n),e!==null?e.sibling:null);Y(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Lp(e,t,n)}return jt(e,t,n)}var Op,fa,jp,Dp;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fa=function(){};jp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(Ct.current);var l=null;switch(n){case"input":i=Ds(e,i),r=Ds(e,r),l=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),l=[];break;case"textarea":i=Is(e,i),r=Is(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wl)}As(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(wi.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var a=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(wi.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&Z("scroll",e),l||s===a||(l=[])):(l=l||[]).push(d,a))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Dp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p1(e,t,n){var r=t.pendingProps;switch(Ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ue(t.type)&&Vl(),_e(t),null;case 3:return r=t.stateNode,hr(),G(Ae),G(Pe),nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Sa(dt),dt=null))),fa(e,t),_e(t),null;case 5:tu(t);var i=xn(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)jp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return _e(t),null}if(e=xn(Ct.current),dl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[St]=t,r[Ni]=l,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)Z(ai[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":oc(r,l),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Z("invalid",r);break;case"textarea":ac(r,l),Z("invalid",r)}As(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&cl(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&cl(r.textContent,s,e),i=["children",""+s]):wi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":nl(r),sc(r,l,!0);break;case"textarea":nl(r),uc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Wl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=af(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[St]=t,e[Ni]=r,Op(e,t,!1,!1),t.stateNode=e;e:{switch(o=Us(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)Z(ai[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":oc(e,r),i=Ds(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Z("invalid",e);break;case"textarea":ac(e,r),i=Is(e,r),Z("invalid",e);break;default:i=r}As(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?df(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&uf(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Si(e,a):typeof a=="number"&&Si(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wi.hasOwnProperty(l)?a!=null&&l==="onScroll"&&Z("scroll",e):a!=null&&Oa(e,l,a,o))}switch(n){case"input":nl(e),sc(e,r,!1);break;case"textarea":nl(e),uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?rr(e,!!r.multiple,l,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Dp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=xn(zi.current),xn(Ct.current),dl(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(l=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:cl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return _e(t),null;case 13:if(G(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Qe!==null&&t.mode&1&&!(t.flags&128))Mf(),fr(),t.flags|=98560,l=!1;else if(l=dl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error($(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error($(317));l[St]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),l=!1}else dt!==null&&(Sa(dt),dt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?me===0&&(me=3):hu())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return hr(),fa(e,t),e===null&&Li(t.stateNode.containerInfo),_e(t),null;case 10:return Ja(t.type._context),_e(t),null;case 17:return Ue(t.type)&&Vl(),_e(t),null;case 19:if(G(ne),l=t.memoizedState,l===null)return _e(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Ur(l,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xl(e),o!==null){for(t.flags|=128,Ur(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ne,ne.current&1|2),t.child}e=e.sibling}l.tail!==null&&ue()>gr&&(t.flags|=128,r=!0,Ur(l,!1),t.lanes=4194304)}else{if(!r)if(e=Xl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!J)return _e(t),null}else 2*ue()-l.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Ur(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ue(),t.sibling=null,n=ne.current,Y(ne,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function h1(e,t){switch(Ya(t),t.tag){case 1:return Ue(t.type)&&Vl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),G(Ae),G(Pe),nu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tu(t),null;case 13:if(G(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(ne),null;case 4:return hr(),null;case 10:return Ja(t.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var hl=!1,Le=!1,m1=typeof WeakSet=="function"?WeakSet:Set,O=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function pa(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Mc=!1;function g1(e,t){if(Xs=Al,e=Af(),Qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,d=0,g=0,h=e,y=null;t:for(;;){for(var C;h!==n||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(C=h.firstChild)!==null;)y=h,h=C;for(;;){if(h===e)break t;if(y===n&&++d===i&&(s=o),y===l&&++g===r&&(a=o),(C=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=C}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Js={focusedElem:e,selectionRange:n},Al=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var x=E.memoizedProps,L=E.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:ut(t.type,x),L);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(_){oe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return E=Mc,Mc=!1,E}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&pa(t,n,l)}i=i.next}while(i!==r)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rp(e){var t=e.alternate;t!==null&&(e.alternate=null,Rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Ni],delete t[ea],delete t[M0],delete t[q0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bp(e){return e.tag===5||e.tag===3||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wl));else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}var Se=null,ct=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Ip(e,t,n),n=n.sibling}function Ip(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(uo,n)}catch{}switch(n.tag){case 5:Le||tr(n,t);case 6:var r=Se,i=ct;Se=null,Ft(e,t,n),Se=r,ct=i,Se!==null&&(ct?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ct?(e=Se,n=n.stateNode,e.nodeType===8?us(e.parentNode,n):e.nodeType===1&&us(e,n),Ei(e)):us(Se,n.stateNode));break;case 4:r=Se,i=ct,Se=n.stateNode.containerInfo,ct=!0,Ft(e,t,n),Se=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&pa(n,t,o),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!Le&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Ft(e,t,n),Le=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m1),t.forEach(function(r){var i=_1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Se=s.stateNode,ct=!1;break e;case 3:Se=s.stateNode.containerInfo,ct=!0;break e;case 4:Se=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(Se===null)throw Error($(160));Ip(l,o,i),Se=null,ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){oe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fp(t,e),t=t.sibling}function Fp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{gi(3,e,e.return),yo(3,e)}catch(x){oe(e,e.return,x)}try{gi(5,e,e.return)}catch(x){oe(e,e.return,x)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(x){oe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&of(i,l),Us(s,o);var d=Us(s,l);for(o=0;o<a.length;o+=2){var g=a[o],h=a[o+1];g==="style"?df(i,h):g==="dangerouslySetInnerHTML"?uf(i,h):g==="children"?Si(i,h):Oa(i,g,h,d)}switch(s){case"input":Rs(i,l);break;case"textarea":sf(i,l);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?rr(i,!!l.multiple,C,!1):y!==!!l.multiple&&(l.defaultValue!=null?rr(i,!!l.multiple,l.defaultValue,!0):rr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ni]=l}catch(x){oe(e,e.return,x)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){oe(e,e.return,x)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(x){oe(e,e.return,x)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(du=ue())),r&4&&ed(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(d=Le)||g,at(t,e),Le=d):at(t,e),gt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(O=e,g=e.child;g!==null;){for(h=O=g;O!==null;){switch(y=O,C=y.child,y.tag){case 0:case 11:case 14:case 15:gi(4,y,y.return);break;case 1:tr(y,y.return);var E=y.stateNode;if(typeof E.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(x){oe(r,n,x)}}break;case 5:tr(y,y.return);break;case 22:if(y.memoizedState!==null){nd(h);continue}}C!==null?(C.return=y,O=C):nd(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=cf("display",o))}catch(x){oe(e,e.return,x)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(x){oe(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:at(t,e),gt(e),r&4&&ed(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bp(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var l=qc(e);ga(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=qc(e);ma(e,s,o);break;default:throw Error($(161))}}catch(a){oe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v1(e,t,n){O=e,Ap(e)}function Ap(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hl;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Le;s=hl;var d=Le;if(hl=o,(Le=a)&&!d)for(O=i;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?rd(i):a!==null?(a.return=o,O=a):rd(i);for(;l!==null;)O=l,Ap(l),l=l.sibling;O=i,hl=s,Le=d}td(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,O=l):td(e)}}function td(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ac(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ac(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Ei(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Le||t.flags&512&&ha(t)}catch(y){oe(t,t.return,y)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function nd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function rd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yo(4,t)}catch(a){oe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){oe(t,i,a)}}var l=t.return;try{ha(t)}catch(a){oe(t,l,a)}break;case 5:var o=t.return;try{ha(t)}catch(a){oe(t,o,a)}}}catch(a){oe(t,t.return,a)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var y1=Math.ceil,ql=Dt.ReactCurrentDispatcher,uu=Dt.ReactCurrentOwner,tt=Dt.ReactCurrentBatchConfig,B=0,ye=null,de=null,Ce=0,He=0,nr=rn(0),me=0,Ri=null,Pn=0,wo=0,cu=0,vi=null,Ie=null,du=0,gr=1/0,Et=null,eo=!1,va=null,Jt=null,ml=!1,Ht=null,to=0,yi=0,ya=null,Pl=-1,Nl=0;function Oe(){return B&6?ue():Pl!==-1?Pl:Pl=ue()}function Mt(e){return e.mode&1?B&2&&Ce!==0?Ce&-Ce:t1.transition!==null?(Nl===0&&(Nl=kf()),Nl):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Tf(e.type)),e):1}function pt(e,t,n,r){if(50<yi)throw yi=0,ya=null,Error($(185));Hi(e,n,r),(!(B&2)||e!==ye)&&(e===ye&&(!(B&2)&&(wo|=n),me===4&&Wt(e,Ce)),Be(e,r),n===1&&B===0&&!(t.mode&1)&&(gr=ue()+500,mo&&ln()))}function Be(e,t){var n=e.callbackNode;t0(e,t);var r=Fl(e,e===ye?Ce:0);if(r===0)n!==null&&fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fc(n),t===1)e.tag===0?e1(id.bind(null,e)):Gf(id.bind(null,e)),X0(function(){!(B&6)&&ln()}),n=null;else{switch(Ef(r)){case 1:n=Ia;break;case 4:n=xf;break;case 16:n=Il;break;case 536870912:n=Cf;break;default:n=Il}n=Yp(n,Up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Up(e,t){if(Pl=-1,Nl=0,B&6)throw Error($(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=Fl(e,e===ye?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=no(e,r);else{t=r;var i=B;B|=2;var l=Wp();(ye!==e||Ce!==t)&&(Et=null,gr=ue()+500,Cn(e,t));do try{x1();break}catch(s){Bp(e,s)}while(!0);Xa(),ql.current=l,B=i,de!==null?t=0:(ye=null,Ce=0,t=me)}if(t!==0){if(t===2&&(i=Qs(e),i!==0&&(r=i,t=wa(e,i))),t===1)throw n=Ri,Cn(e,0),Wt(e,r),Be(e,ue()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!w1(i)&&(t=no(e,r),t===2&&(l=Qs(e),l!==0&&(r=l,t=wa(e,l))),t===1))throw n=Ri,Cn(e,0),Wt(e,r),Be(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:yn(e,Ie,Et);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=du+500-ue(),10<t)){if(Fl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qs(yn.bind(null,e,Ie,Et),t);break}yn(e,Ie,Et);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ft(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y1(r/1960))-r,10<r){e.timeoutHandle=qs(yn.bind(null,e,Ie,Et),r);break}yn(e,Ie,Et);break;case 5:yn(e,Ie,Et);break;default:throw Error($(329))}}}return Be(e,ue()),e.callbackNode===n?Up.bind(null,e):null}function wa(e,t){var n=vi;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=no(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Sa(t)),e}function Sa(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function w1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!ht(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~cu,t&=~wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function id(e){if(B&6)throw Error($(327));ar();var t=Fl(e,0);if(!(t&1))return Be(e,ue()),null;var n=no(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=wa(e,r))}if(n===1)throw n=Ri,Cn(e,0),Wt(e,t),Be(e,ue()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Ie,Et),Be(e,ue()),null}function fu(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(gr=ue()+500,mo&&ln())}}function Nn(e){Ht!==null&&Ht.tag===0&&!(B&6)&&ar();var t=B;B|=1;var n=tt.transition,r=Q;try{if(tt.transition=null,Q=1,e)return e()}finally{Q=r,tt.transition=n,B=t,!(B&6)&&ln()}}function pu(){He=nr.current,G(nr)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,G0(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vl();break;case 3:hr(),G(Ae),G(Pe),nu();break;case 5:tu(r);break;case 4:hr();break;case 13:G(ne);break;case 19:G(ne);break;case 10:Ja(r.type._context);break;case 22:case 23:pu()}n=n.return}if(ye=e,de=e=qt(e.current,null),Ce=He=t,me=0,Ri=null,cu=wo=Pn=0,Ie=vi=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Sn=null}return e}function Bp(e,t){do{var n=de;try{if(Xa(),_l.current=Ml,Jl){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jl=!1}if(Ln=0,ve=he=re=null,mi=!1,Oi=0,uu.current=null,n===null||n.return===null){me=1,Ri=t,de=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=Ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var C=Qc(o);if(C!==null){C.flags&=-257,Kc(C,o,s,l,t),C.mode&1&&Hc(l,d,t),t=C,a=d;var E=t.updateQueue;if(E===null){var x=new Set;x.add(a),t.updateQueue=x}else E.add(a);break e}else{if(!(t&1)){Hc(l,d,t),hu();break e}a=Error($(426))}}else if(J&&s.mode&1){var L=Qc(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Kc(L,o,s,l,t),Za(mr(a,s));break e}}l=a=mr(a,s),me!==4&&(me=2),vi===null?vi=[l]:vi.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Ep(l,a,t);Fc(l,p);break e;case 1:s=a;var f=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jt===null||!Jt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var _=_p(l,s,t);Fc(l,_);break e}}l=l.return}while(l!==null)}Hp(n)}catch(N){t=N,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Wp(){var e=ql.current;return ql.current=Ml,e===null?Ml:e}function hu(){(me===0||me===3||me===2)&&(me=4),ye===null||!(Pn&268435455)&&!(wo&268435455)||Wt(ye,Ce)}function no(e,t){var n=B;B|=2;var r=Wp();(ye!==e||Ce!==t)&&(Et=null,Cn(e,t));do try{S1();break}catch(i){Bp(e,i)}while(!0);if(Xa(),B=n,ql.current=r,de!==null)throw Error($(261));return ye=null,Ce=0,me}function S1(){for(;de!==null;)Vp(de)}function x1(){for(;de!==null&&!Km();)Vp(de)}function Vp(e){var t=Kp(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Hp(e):de=t,uu.current=null}function Hp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=h1(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(n=p1(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function yn(e,t,n){var r=Q,i=tt.transition;try{tt.transition=null,Q=1,C1(e,t,n,r)}finally{tt.transition=i,Q=r}return null}function C1(e,t,n,r){do ar();while(Ht!==null);if(B&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(n0(e,l),e===ye&&(de=ye=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,Yp(Il,function(){return ar(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=tt.transition,tt.transition=null;var o=Q;Q=1;var s=B;B|=4,uu.current=null,g1(e,n),Fp(n,e),W0(Js),Al=!!Xs,Js=Xs=null,e.current=n,v1(n),Ym(),B=s,Q=o,tt.transition=l}else e.current=n;if(ml&&(ml=!1,Ht=e,to=i),l=e.pendingLanes,l===0&&(Jt=null),Xm(n.stateNode),Be(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=va,va=null,e;return to&1&&e.tag!==0&&ar(),l=e.pendingLanes,l&1?e===ya?yi++:(yi=0,ya=e):yi=0,ln(),null}function ar(){if(Ht!==null){var e=Ef(to),t=tt.transition,n=Q;try{if(tt.transition=null,Q=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,to=0,B&6)throw Error($(331));var i=B;for(B|=4,O=e.current;O!==null;){var l=O,o=l.child;if(O.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(O=d;O!==null;){var g=O;switch(g.tag){case 0:case 11:case 15:gi(8,g,l)}var h=g.child;if(h!==null)h.return=g,O=h;else for(;O!==null;){g=O;var y=g.sibling,C=g.return;if(Rp(g),g===d){O=null;break}if(y!==null){y.return=C,O=y;break}O=C}}}var E=l.alternate;if(E!==null){var x=E.child;if(x!==null){E.child=null;do{var L=x.sibling;x.sibling=null,x=L}while(x!==null)}}O=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,O=o;else e:for(;O!==null;){if(l=O,l.flags&2048)switch(l.tag){case 0:case 11:case 15:gi(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,O=p;break e}O=l.return}}var f=e.current;for(O=f;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=f;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yo(9,s)}}catch(N){oe(s,s.return,N)}if(s===o){O=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,O=_;break e}O=s.return}}if(B=i,ln(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(uo,e)}catch{}r=!0}return r}finally{Q=n,tt.transition=t}}return!1}function ld(e,t,n){t=mr(n,t),t=Ep(e,t,1),e=Xt(e,t,1),t=Oe(),e!==null&&(Hi(e,1,t),Be(e,t))}function oe(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=mr(n,e),e=_p(t,e,1),t=Xt(t,e,1),e=Oe(),t!==null&&(Hi(t,1,e),Be(t,e));break}}t=t.return}}function k1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Ce&n)===n&&(me===4||me===3&&(Ce&130023424)===Ce&&500>ue()-du?Cn(e,0):cu|=n),Be(e,t)}function Qp(e,t){t===0&&(e.mode&1?(t=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):t=1);var n=Oe();e=Ot(e,t),e!==null&&(Hi(e,t,n),Be(e,n))}function E1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qp(e,n)}function _1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Qp(e,n)}var Kp;Kp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,f1(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,J&&t.flags&1048576&&Xf(t,Kl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ll(e,t),e=t.pendingProps;var i=dr(t,Pe.current);sr(t,n),i=iu(null,t,r,e,i,n);var l=lu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(l=!0,Hl(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qa(t),i.updater=vo,t.stateNode=i,i._reactInternals=t,oa(t,r,e,n),t=ua(null,t,r,!0,l,n)):(t.tag=0,J&&l&&Ka(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ll(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=L1(r),e=ut(r,e),i){case 0:t=aa(null,t,r,e,n);break e;case 1:t=Gc(null,t,r,e,n);break e;case 11:t=Yc(null,t,r,e,n);break e;case 14:t=Zc(null,t,r,ut(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),aa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Gc(e,t,r,i,n);case 3:e:{if(Np(t),e===null)throw Error($(387));r=t.pendingProps,l=t.memoizedState,i=l.element,np(e,t),Gl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=mr(Error($(423)),t),t=Xc(e,t,r,n,i);break e}else if(r!==i){i=mr(Error($(424)),t),t=Xc(e,t,r,n,i);break e}else for(Qe=Gt(t.stateNode.containerInfo.firstChild),Ke=t,J=!0,dt=null,n=ep(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=jt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return rp(t),e===null&&ra(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ms(r,i)?o=null:l!==null&&Ms(r,l)&&(t.flags|=32),Pp(e,t),ze(e,t,o,n),t.child;case 6:return e===null&&ra(t),null;case 13:return Tp(e,t,n);case 4:return eu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Yc(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,Y(Yl,r._currentValue),r._currentValue=o,l!==null)if(ht(l.value,o)){if(l.children===i.children&&!Ae.current){t=jt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Nt(-1,n&-n),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?a.next=a:(a.next=g.next,g.next=a),d.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ia(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error($(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ia(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sr(t,n),i=nt(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Zc(e,t,r,i,n);case 15:return $p(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ll(e,t),t.tag=1,Ue(r)?(e=!0,Hl(t)):e=!1,sr(t,n),kp(t,r,i),oa(t,r,i,n),ua(null,t,r,!0,e,n);case 19:return zp(e,t,n);case 22:return Lp(e,t,n)}throw Error($(156,t.tag))};function Yp(e,t){return Sf(e,t)}function $1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new $1(e,t,n,r)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L1(e){if(typeof e=="function")return mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Da)return 11;if(e===Ra)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")mu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return kn(n.children,i,l,t);case ja:o=8,i|=8;break;case Ts:return e=et(12,n,t,i|2),e.elementType=Ts,e.lanes=l,e;case zs:return e=et(13,n,t,i),e.elementType=zs,e.lanes=l,e;case Os:return e=et(19,n,t,i),e.elementType=Os,e.lanes=l,e;case nf:return So(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ef:o=10;break e;case tf:o=9;break e;case Da:o=11;break e;case Ra:o=14;break e;case At:o=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=et(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function kn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function So(e,t,n,r){return e=et(22,e,r,t),e.elementType=nf,e.lanes=n,e.stateNode={isHidden:!1},e}function vs(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function ys(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mo(0),this.expirationTimes=Mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gu(e,t,n,r,i,l,o,s,a){return e=new P1(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=et(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(l),e}function N1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zp(e){if(!e)return tn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Zf(e,n,t)}return t}function Gp(e,t,n,r,i,l,o,s,a){return e=gu(n,r,!0,e,i,l,o,s,a),e.context=Zp(null),n=e.current,r=Oe(),i=Mt(n),l=Nt(r,i),l.callback=t??null,Xt(n,l,i),e.current.lanes=i,Hi(e,i,r),Be(e,r),e}function xo(e,t,n,r){var i=t.current,l=Oe(),o=Mt(i);return n=Zp(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(i,t,o),e!==null&&(pt(e,i,o,l),El(e,i,o)),o}function ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vu(e,t){od(e,t),(e=e.alternate)&&od(e,t)}function T1(){return null}var Xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function yu(e){this._internalRoot=e}Co.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));xo(e,t,null,null)};Co.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){xo(null,e,null,null)}),t[zt]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Nf(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sd(){}function z1(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=ro(o);l.call(d)}}var o=Gp(t,r,e,0,null,!1,!1,"",sd);return e._reactRootContainer=o,e[zt]=o.current,Li(e.nodeType===8?e.parentNode:e),Nn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=ro(a);s.call(d)}}var a=gu(e,0,!1,null,null,!1,!1,"",sd);return e._reactRootContainer=a,e[zt]=a.current,Li(e.nodeType===8?e.parentNode:e),Nn(function(){xo(t,a,n,r)}),a}function Eo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=ro(o);s.call(a)}}xo(t,o,e,i)}else o=z1(n,t,e,i,r);return ro(o)}_f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(Fa(t,n|1),Be(t,ue()),!(B&6)&&(gr=ue()+500,ln()))}break;case 13:Nn(function(){var r=Ot(e,1);if(r!==null){var i=Oe();pt(r,e,1,i)}}),vu(e,1)}};Aa=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Oe();pt(t,e,134217728,n)}vu(e,134217728)}};$f=function(e){if(e.tag===13){var t=Mt(e),n=Ot(e,t);if(n!==null){var r=Oe();pt(n,e,t,r)}vu(e,t)}};Lf=function(){return Q};Pf=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ws=function(e,t,n){switch(t){case"input":if(Rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ho(r);if(!i)throw Error($(90));lf(r),Rs(r,i)}}}break;case"textarea":sf(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};hf=fu;mf=Nn;var O1={usingClientEntryPoint:!1,Events:[Ki,Xn,ho,ff,pf,fu]},Br={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j1={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yf(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||T1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{uo=gl.inject(j1),xt=gl}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error($(200));return N1(e,t,null,n)};Ge.createRoot=function(e,t){if(!wu(e))throw Error($(299));var n=!1,r="",i=Xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gu(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,Li(e.nodeType===8?e.parentNode:e),new yu(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=yf(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Nn(e)};Ge.hydrate=function(e,t,n){if(!ko(t))throw Error($(200));return Eo(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!wu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Gp(t,null,e,1,n??null,i,!1,l,o),e[zt]=t.current,Li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Co(t)};Ge.render=function(e,t,n){if(!ko(t))throw Error($(200));return Eo(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ko(e))throw Error($(40));return e._reactRootContainer?(Nn(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ge.unstable_batchedUpdates=fu;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Eo(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(e){console.error(e)}}Jp(),Xd.exports=Ge;var D1=Xd.exports,ad=D1;Ps.createRoot=ad.createRoot,Ps.hydrateRoot=ad.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const ud="popstate";function R1(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return xa("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mp(i)}return I1(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Su(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function b1(){return Math.random().toString(36).substr(2,8)}function cd(e,t){return{usr:e.state,key:e.key,idx:t}}function xa(e,t,n,r){return n===void 0&&(n=null),bi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xr(t):t,{state:n,key:t&&t.key||r||b1()})}function Mp(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=Qt.Pop,a=null,d=g();d==null&&(d=0,o.replaceState(bi({},o.state,{idx:d}),""));function g(){return(o.state||{idx:null}).idx}function h(){s=Qt.Pop;let L=g(),p=L==null?null:L-d;d=L,a&&a({action:s,location:x.location,delta:p})}function y(L,p){s=Qt.Push;let f=xa(x.location,L,p);d=g()+1;let m=cd(f,d),_=x.createHref(f);try{o.pushState(m,"",_)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(_)}l&&a&&a({action:s,location:x.location,delta:1})}function C(L,p){s=Qt.Replace;let f=xa(x.location,L,p);d=g();let m=cd(f,d),_=x.createHref(f);o.replaceState(m,"",_),l&&a&&a({action:s,location:x.location,delta:0})}function E(L){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof L=="string"?L:Mp(L);return f=f.replace(/ $/,"%20"),fe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let x={get action(){return s},get location(){return e(i,o)},listen(L){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ud,h),a=L,()=>{i.removeEventListener(ud,h),a=null}},createHref(L){return t(i,L)},createURL:E,encodeLocation(L){let p=E(L);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:C,go(L){return o.go(L)}};return x}var dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dd||(dd={}));function F1(e,t,n){return n===void 0&&(n="/"),A1(e,t,n)}function A1(e,t,n,r){let i=typeof t=="string"?xr(t):t,l=th(i.pathname||"/",n);if(l==null)return null;let o=qp(e);U1(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let d=M1(l);s=G1(o[a],d)}return s}function qp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(fe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let d=En([r,a.relativePath]),g=n.concat(a);l.children&&l.children.length>0&&(fe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),qp(l.children,t,g,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Y1(d,l.index),routesMeta:g})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of eh(l.path))i(l,o,a)}),t}function eh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=eh(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function U1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Z1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const B1=/^:[\w-]+$/,W1=3,V1=2,H1=1,Q1=10,K1=-2,fd=e=>e==="*";function Y1(e,t){let n=e.split("/"),r=n.length;return n.some(fd)&&(r+=K1),t&&(r+=V1),n.filter(i=>!fd(i)).reduce((i,l)=>i+(B1.test(l)?W1:l===""?H1:Q1),r)}function Z1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function G1(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],d=s===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",h=X1({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},g),y=a.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:En([l,h.pathname]),pathnameBase:rg(En([l,h.pathnameBase])),route:y}),h.pathnameBase!=="/"&&(l=En([l,h.pathnameBase]))}return o}function X1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=J1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,g,h)=>{let{paramName:y,isOptional:C}=g;if(y==="*"){let x=s[h]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const E=s[h];return C&&!E?d[y]=void 0:d[y]=(E||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:o,pattern:e}}function J1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Su(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function M1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Su(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function th(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eg=e=>q1.test(e);function tg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?xr(e):e,l;if(n)if(eg(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Su(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=pd(n.substring(1),"/"):l=pd(n,t)}else l=t;return{pathname:l,search:ig(r),hash:lg(i)}}function pd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ws(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ng(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function nh(e,t){let n=ng(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=xr(e):(i=bi({},e),fe(!i.pathname||!i.pathname.includes("?"),ws("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),ws("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),ws("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),h-=1;i.pathname=y.join("/")}s=h>=0?t[h]:"/"}let a=tg(i,s),d=o&&o!=="/"&&o.endsWith("/"),g=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(d||g)&&(a.pathname+="/"),a}const En=e=>e.join("/").replace(/\/\/+/g,"/"),rg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ig=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function og(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ih=["post","put","patch","delete"];new Set(ih);const sg=["get",...ih];new Set(sg);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}const xu=w.createContext(null),ag=w.createContext(null),Zi=w.createContext(null),_o=w.createContext(null),On=w.createContext({outlet:null,matches:[],isDataRoute:!1}),lh=w.createContext(null);function Gi(){return w.useContext(_o)!=null}function Cu(){return Gi()||fe(!1),w.useContext(_o).location}function oh(e){w.useContext(Zi).static||w.useLayoutEffect(e)}function $o(){let{isDataRoute:e}=w.useContext(On);return e?xg():ug()}function ug(){Gi()||fe(!1);let e=w.useContext(xu),{basename:t,future:n,navigator:r}=w.useContext(Zi),{matches:i}=w.useContext(On),{pathname:l}=Cu(),o=JSON.stringify(nh(i,n.v7_relativeSplatPath)),s=w.useRef(!1);return oh(()=>{s.current=!0}),w.useCallback(function(d,g){if(g===void 0&&(g={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let h=rh(d,JSON.parse(o),l,g.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:En([t,h.pathname])),(g.replace?r.replace:r.push)(h,g.state,g)},[t,r,o,l,e])}function cg(e,t){return dg(e,t)}function dg(e,t,n,r){Gi()||fe(!1);let{navigator:i}=w.useContext(Zi),{matches:l}=w.useContext(On),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let d=Cu(),g;if(t){var h;let L=typeof t=="string"?xr(t):t;a==="/"||(h=L.pathname)!=null&&h.startsWith(a)||fe(!1),g=L}else g=d;let y=g.pathname||"/",C=y;if(a!=="/"){let L=a.replace(/^\//,"").split("/");C="/"+y.replace(/^\//,"").split("/").slice(L.length).join("/")}let E=F1(e,{pathname:C}),x=gg(E&&E.map(L=>Object.assign({},L,{params:Object.assign({},s,L.params),pathname:En([a,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?a:En([a,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,n,r);return t&&x?w.createElement(_o.Provider,{value:{location:Ii({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Qt.Pop}},x):x}function fg(){let e=Sg(),t=og(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const pg=w.createElement(fg,null);class hg extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(On.Provider,{value:this.props.routeContext},w.createElement(lh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mg(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(xu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(On.Provider,{value:t},r)}function gg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let g=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);g>=0||fe(!1),o=o.slice(0,Math.min(o.length,g+1))}let a=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<o.length;g++){let h=o[g];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=g),h.route.id){let{loaderData:y,errors:C}=n,E=h.route.loader&&y[h.route.id]===void 0&&(!C||C[h.route.id]===void 0);if(h.route.lazy||E){a=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((g,h,y)=>{let C,E=!1,x=null,L=null;n&&(C=s&&h.route.id?s[h.route.id]:void 0,x=h.route.errorElement||pg,a&&(d<0&&y===0?(Cg("route-fallback"),E=!0,L=null):d===y&&(E=!0,L=h.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,y+1)),f=()=>{let m;return C?m=x:E?m=L:h.route.Component?m=w.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=g,w.createElement(mg,{match:h,routeContext:{outlet:g,matches:p,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?w.createElement(hg,{location:n.location,revalidation:n.revalidation,component:x,error:C,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var sh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sh||{}),ah=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ah||{});function vg(e){let t=w.useContext(xu);return t||fe(!1),t}function yg(e){let t=w.useContext(ag);return t||fe(!1),t}function wg(e){let t=w.useContext(On);return t||fe(!1),t}function uh(e){let t=wg(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Sg(){var e;let t=w.useContext(lh),n=yg(),r=uh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function xg(){let{router:e}=vg(sh.UseNavigateStable),t=uh(ah.UseNavigateStable),n=w.useRef(!1);return oh(()=>{n.current=!0}),w.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ii({fromRouteId:t},l)))},[e,t])}const hd={};function Cg(e,t,n){hd[e]||(hd[e]=!0)}function kg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Eg(e){let{to:t,replace:n,state:r,relative:i}=e;Gi()||fe(!1);let{future:l,static:o}=w.useContext(Zi),{matches:s}=w.useContext(On),{pathname:a}=Cu(),d=$o(),g=rh(t,nh(s,l.v7_relativeSplatPath),a,i==="path"),h=JSON.stringify(g);return w.useEffect(()=>d(JSON.parse(h),{replace:n,state:r,relative:i}),[d,h,i,n,r]),null}function Vn(e){fe(!1)}function _g(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:l,static:o=!1,future:s}=e;Gi()&&fe(!1);let a=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:a,navigator:l,static:o,future:Ii({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=xr(r));let{pathname:g="/",search:h="",hash:y="",state:C=null,key:E="default"}=r,x=w.useMemo(()=>{let L=th(g,a);return L==null?null:{location:{pathname:L,search:h,hash:y,state:C,key:E},navigationType:i}},[a,g,h,y,C,E,i]);return x==null?null:w.createElement(Zi.Provider,{value:d},w.createElement(_o.Provider,{children:n,value:x}))}function $g(e){let{children:t,location:n}=e;return cg(Ca(t),n)}new Promise(()=>{});function Ca(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let l=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Ca(r.props.children,l));return}r.type!==Vn&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ca(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Lg="6";try{window.__reactRouterVersion=Lg}catch{}const Pg="startTransition",md=Ls[Pg];function Ng(e){let{basename:t,children:n,future:r,window:i}=e,l=w.useRef();l.current==null&&(l.current=R1({window:i,v5Compat:!0}));let o=l.current,[s,a]=w.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},g=w.useCallback(h=>{d&&md?md(()=>a(h)):a(h)},[a,d]);return w.useLayoutEffect(()=>o.listen(g),[o,g]),w.useEffect(()=>kg(r),[r]),w.createElement(_g,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var gd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gd||(gd={}));var vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function Tg(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function zg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Og=function(){function e(n){var r=this;this._insertTag=function(i){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,l),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(zg(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Tg(i);try{l.insertRule(r,l.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),$e="-ms-",io="-moz-",V="-webkit-",ch="comm",ku="rule",Eu="decl",jg="@import",dh="@keyframes",Dg="@layer",Rg=Math.abs,Lo=String.fromCharCode,bg=Object.assign;function Ig(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function fh(e){return e.trim()}function Fg(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function ka(e,t){return e.indexOf(t)}function xe(e,t){return e.charCodeAt(t)|0}function Fi(e,t,n){return e.slice(t,n)}function yt(e){return e.length}function _u(e){return e.length}function vl(e,t){return t.push(e),e}function Ag(e,t){return e.map(t).join("")}var Po=1,vr=1,ph=0,We=0,ce=0,Cr="";function No(e,t,n,r,i,l,o){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Po,column:vr,length:o,return:""}}function Wr(e,t){return bg(No("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ug(){return ce}function Bg(){return ce=We>0?xe(Cr,--We):0,vr--,ce===10&&(vr=1,Po--),ce}function Ye(){return ce=We<ph?xe(Cr,We++):0,vr++,ce===10&&(vr=1,Po++),ce}function kt(){return xe(Cr,We)}function zl(){return We}function Xi(e,t){return Fi(Cr,e,t)}function Ai(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hh(e){return Po=vr=1,ph=yt(Cr=e),We=0,[]}function mh(e){return Cr="",e}function Ol(e){return fh(Xi(We-1,Ea(e===91?e+2:e===40?e+1:e)))}function Wg(e){for(;(ce=kt())&&ce<33;)Ye();return Ai(e)>2||Ai(ce)>3?"":" "}function Vg(e,t){for(;--t&&Ye()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Xi(e,zl()+(t<6&&kt()==32&&Ye()==32))}function Ea(e){for(;Ye();)switch(ce){case e:return We;case 34:case 39:e!==34&&e!==39&&Ea(ce);break;case 40:e===41&&Ea(e);break;case 92:Ye();break}return We}function Hg(e,t){for(;Ye()&&e+ce!==57;)if(e+ce===84&&kt()===47)break;return"/*"+Xi(t,We-1)+"*"+Lo(e===47?e:Ye())}function Qg(e){for(;!Ai(kt());)Ye();return Xi(e,We)}function Kg(e){return mh(jl("",null,null,null,[""],e=hh(e),0,[0],e))}function jl(e,t,n,r,i,l,o,s,a){for(var d=0,g=0,h=o,y=0,C=0,E=0,x=1,L=1,p=1,f=0,m="",_=i,N=l,z=r,P=m;L;)switch(E=f,f=Ye()){case 40:if(E!=108&&xe(P,h-1)==58){ka(P+=H(Ol(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:P+=Ol(f);break;case 9:case 10:case 13:case 32:P+=Wg(E);break;case 92:P+=Vg(zl()-1,7);continue;case 47:switch(kt()){case 42:case 47:vl(Yg(Hg(Ye(),zl()),t,n),a);break;default:P+="/"}break;case 123*x:s[d++]=yt(P)*p;case 125*x:case 59:case 0:switch(f){case 0:case 125:L=0;case 59+g:p==-1&&(P=H(P,/\f/g,"")),C>0&&yt(P)-h&&vl(C>32?wd(P+";",r,n,h-1):wd(H(P," ","")+";",r,n,h-2),a);break;case 59:P+=";";default:if(vl(z=yd(P,t,n,d,g,i,s,m,_=[],N=[],h),l),f===123)if(g===0)jl(P,t,z,z,_,l,h,s,N);else switch(y===99&&xe(P,3)===110?100:y){case 100:case 108:case 109:case 115:jl(e,z,z,r&&vl(yd(e,z,z,0,0,i,s,m,i,_=[],h),N),i,N,h,s,r?_:N);break;default:jl(P,z,z,z,[""],N,0,s,N)}}d=g=C=0,x=p=1,m=P="",h=o;break;case 58:h=1+yt(P),C=E;default:if(x<1){if(f==123)--x;else if(f==125&&x++==0&&Bg()==125)continue}switch(P+=Lo(f),f*x){case 38:p=g>0?1:(P+="\f",-1);break;case 44:s[d++]=(yt(P)-1)*p,p=1;break;case 64:kt()===45&&(P+=Ol(Ye())),y=kt(),g=h=yt(m=P+=Qg(zl())),f++;break;case 45:E===45&&yt(P)==2&&(x=0)}}return l}function yd(e,t,n,r,i,l,o,s,a,d,g){for(var h=i-1,y=i===0?l:[""],C=_u(y),E=0,x=0,L=0;E<r;++E)for(var p=0,f=Fi(e,h+1,h=Rg(x=o[E])),m=e;p<C;++p)(m=fh(x>0?y[p]+" "+f:H(f,/&\f/g,y[p])))&&(a[L++]=m);return No(e,t,n,i===0?ku:s,a,d,g)}function Yg(e,t,n){return No(e,t,n,ch,Lo(Ug()),Fi(e,2,-2),0)}function wd(e,t,n,r){return No(e,t,n,Eu,Fi(e,0,r),Fi(e,r+1,-1),r)}function ur(e,t){for(var n="",r=_u(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Zg(e,t,n,r){switch(e.type){case Dg:if(e.children.length)break;case jg:case Eu:return e.return=e.return||e.value;case ch:return"";case dh:return e.return=e.value+"{"+ur(e.children,r)+"}";case ku:e.value=e.props.join(",")}return yt(n=ur(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gg(e){var t=_u(e);return function(n,r,i,l){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,l)||"";return o}}function Xg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Jg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Mg=function(t,n,r){for(var i=0,l=0;i=l,l=kt(),i===38&&l===12&&(n[r]=1),!Ai(l);)Ye();return Xi(t,We)},qg=function(t,n){var r=-1,i=44;do switch(Ai(i)){case 0:i===38&&kt()===12&&(n[r]=1),t[r]+=Mg(We-1,n,r);break;case 2:t[r]+=Ol(i);break;case 4:if(i===44){t[++r]=kt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Lo(i)}while(i=Ye());return t},ev=function(t,n){return mh(qg(hh(t),n))},Sd=new WeakMap,tv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Sd.get(r))&&!i){Sd.set(t,!0);for(var l=[],o=ev(n,l),s=r.props,a=0,d=0;a<o.length;a++)for(var g=0;g<s.length;g++,d++)t.props[d]=l[a]?o[a].replace(/&\f/g,s[g]):s[g]+" "+o[a]}}},nv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function gh(e,t){switch(Ig(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+io+e+$e+e+e;case 6828:case 4268:return V+e+$e+e+e;case 6165:return V+e+$e+"flex-"+e+e;case 5187:return V+e+H(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+$e+"flex-$1$2")+e;case 5443:return V+e+$e+"flex-item-"+H(e,/flex-|-self/,"")+e;case 4675:return V+e+$e+"flex-line-pack"+H(e,/align-content|flex-|-self/,"")+e;case 5548:return V+e+$e+H(e,"shrink","negative")+e;case 5292:return V+e+$e+H(e,"basis","preferred-size")+e;case 6060:return V+"box-"+H(e,"-grow","")+V+e+$e+H(e,"grow","positive")+e;case 4554:return V+H(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+io+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ka(e,"stretch")?gh(H(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(xe(e,t+1)!==115)break;case 6444:switch(xe(e,yt(e)-3-(~ka(e,"!important")&&10))){case 107:return H(e,":",":"+V)+e;case 101:return H(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+V+(xe(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+$e+"$2box$3")+e}break;case 5936:switch(xe(e,t+11)){case 114:return V+e+$e+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+$e+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+$e+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return V+e+$e+e+e}return e}var rv=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Eu:t.return=gh(t.value,t.length);break;case dh:return ur([Wr(t,{value:H(t.value,"@","@"+V)})],i);case ku:if(t.length)return Ag(t.props,function(l){switch(Fg(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ur([Wr(t,{props:[H(l,/:(read-\w+)/,":"+io+"$1")]})],i);case"::placeholder":return ur([Wr(t,{props:[H(l,/:(plac\w+)/,":"+V+"input-$1")]}),Wr(t,{props:[H(l,/:(plac\w+)/,":"+io+"$1")]}),Wr(t,{props:[H(l,/:(plac\w+)/,$e+"input-$1")]})],i)}return""})}},iv=[rv],lv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var L=x.getAttribute("data-emotion");L.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||iv,l={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var L=x.getAttribute("data-emotion").split(" "),p=1;p<L.length;p++)l[L[p]]=!0;s.push(x)});var a,d=[tv,nv];{var g,h=[Zg,Xg(function(x){g.insert(x)})],y=Gg(d.concat(i,h)),C=function(L){return ur(Kg(L),y)};a=function(L,p,f,m){g=f,C(L?L+"{"+p.styles+"}":p.styles),m&&(E.inserted[p.name]=!0)}}var E={key:n,sheet:new Og({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:a};return E.sheet.hydrate(s),E},vh={exports:{}},K={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=typeof Symbol=="function"&&Symbol.for,$u=we?Symbol.for("react.element"):60103,Lu=we?Symbol.for("react.portal"):60106,To=we?Symbol.for("react.fragment"):60107,zo=we?Symbol.for("react.strict_mode"):60108,Oo=we?Symbol.for("react.profiler"):60114,jo=we?Symbol.for("react.provider"):60109,Do=we?Symbol.for("react.context"):60110,Pu=we?Symbol.for("react.async_mode"):60111,Ro=we?Symbol.for("react.concurrent_mode"):60111,bo=we?Symbol.for("react.forward_ref"):60112,Io=we?Symbol.for("react.suspense"):60113,ov=we?Symbol.for("react.suspense_list"):60120,Fo=we?Symbol.for("react.memo"):60115,Ao=we?Symbol.for("react.lazy"):60116,sv=we?Symbol.for("react.block"):60121,av=we?Symbol.for("react.fundamental"):60117,uv=we?Symbol.for("react.responder"):60118,cv=we?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case $u:switch(e=e.type,e){case Pu:case Ro:case To:case Oo:case zo:case Io:return e;default:switch(e=e&&e.$$typeof,e){case Do:case bo:case Ao:case Fo:case jo:return e;default:return t}}case Lu:return t}}}function yh(e){return Je(e)===Ro}K.AsyncMode=Pu;K.ConcurrentMode=Ro;K.ContextConsumer=Do;K.ContextProvider=jo;K.Element=$u;K.ForwardRef=bo;K.Fragment=To;K.Lazy=Ao;K.Memo=Fo;K.Portal=Lu;K.Profiler=Oo;K.StrictMode=zo;K.Suspense=Io;K.isAsyncMode=function(e){return yh(e)||Je(e)===Pu};K.isConcurrentMode=yh;K.isContextConsumer=function(e){return Je(e)===Do};K.isContextProvider=function(e){return Je(e)===jo};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$u};K.isForwardRef=function(e){return Je(e)===bo};K.isFragment=function(e){return Je(e)===To};K.isLazy=function(e){return Je(e)===Ao};K.isMemo=function(e){return Je(e)===Fo};K.isPortal=function(e){return Je(e)===Lu};K.isProfiler=function(e){return Je(e)===Oo};K.isStrictMode=function(e){return Je(e)===zo};K.isSuspense=function(e){return Je(e)===Io};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===To||e===Ro||e===Oo||e===zo||e===Io||e===ov||typeof e=="object"&&e!==null&&(e.$$typeof===Ao||e.$$typeof===Fo||e.$$typeof===jo||e.$$typeof===Do||e.$$typeof===bo||e.$$typeof===av||e.$$typeof===uv||e.$$typeof===cv||e.$$typeof===sv)};K.typeOf=Je;vh.exports=K;var dv=vh.exports,wh=dv,fv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sh={};Sh[wh.ForwardRef]=fv;Sh[wh.Memo]=pv;var hv=!0;function mv(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var xh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||hv===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},gv=function(t,n,r){xh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+i:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function vv(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var yv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wv=/[A-Z]|^ms/g,Sv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ch=function(t){return t.charCodeAt(1)===45},xd=function(t){return t!=null&&typeof t!="boolean"},Ss=Jg(function(e){return Ch(e)?e:e.replace(wv,"-$&").toLowerCase()}),Cd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Sv,function(r,i,l){return wt={name:i,styles:l,next:wt},i})}return yv[t]!==1&&!Ch(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ui(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return wt={name:i.name,styles:i.styles,next:wt},i.name;var l=n;if(l.styles!==void 0){var o=l.next;if(o!==void 0)for(;o!==void 0;)wt={name:o.name,styles:o.styles,next:wt},o=o.next;var s=l.styles+";";return s}return xv(e,t,n)}case"function":{if(e!==void 0){var a=wt,d=n(e);return wt=a,Ui(e,t,d)}break}}var g=n;return g}function xv(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ui(e,t,n[i])+";";else for(var l in n){var o=n[l];if(typeof o!="object"){var s=o;xd(s)&&(r+=Ss(l)+":"+Cd(l,s)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var a=0;a<o.length;a++)xd(o[a])&&(r+=Ss(l)+":"+Cd(l,o[a])+";");else{var d=Ui(e,t,o);switch(l){case"animation":case"animationName":{r+=Ss(l)+":"+d+";";break}default:r+=l+"{"+d+"}"}}}return r}var kd=/label:\s*([^\s;{]+)\s*(;|$)/g,wt;function kh(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";wt=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,i+=Ui(n,t,l);else{var o=l;i+=o[0]}for(var s=1;s<e.length;s++)if(i+=Ui(n,t,e[s]),r){var a=l;i+=a[s]}kd.lastIndex=0;for(var d="",g;(g=kd.exec(i))!==null;)d+="-"+g[1];var h=vv(i)+d;return{name:h,styles:i,next:wt}}var Cv=function(t){return t()},kv=Ls.useInsertionEffect?Ls.useInsertionEffect:!1,Ev=kv||Cv,Eh=w.createContext(typeof HTMLElement<"u"?lv({key:"css"}):null);Eh.Provider;var _v=function(t){return w.forwardRef(function(n,r){var i=w.useContext(Eh);return t(n,i,r)})},$v=w.createContext({}),Ji={}.hasOwnProperty,_a="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Nu=function(t,n){var r={};for(var i in n)Ji.call(n,i)&&(r[i]=n[i]);return r[_a]=t,r},Lv=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return xh(n,r,i),Ev(function(){return gv(n,r,i)}),null},Pv=_v(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[_a],l=[r],o="";typeof e.className=="string"?o=mv(t.registered,l,e.className):e.className!=null&&(o=e.className+" ");var s=kh(l,void 0,w.useContext($v));o+=t.key+"-"+s.name;var a={};for(var d in e)Ji.call(e,d)&&d!=="css"&&d!==_a&&(a[d]=e[d]);return a.className=o,n&&(a.ref=n),w.createElement(w.Fragment,null,w.createElement(Lv,{cache:t,serialized:s,isStringTag:typeof i=="string"}),w.createElement(i,a))}),Tu=Pv,ae=pe.Fragment,u=function(t,n,r){return Ji.call(n,"css")?pe.jsx(Tu,Nu(t,n),r):pe.jsx(t,n,r)},v=function(t,n,r){return Ji.call(n,"css")?pe.jsxs(Tu,Nu(t,n),r):pe.jsxs(t,n,r)},Ed=function(t,n){var r=arguments;if(n==null||!Ji.call(n,"css"))return w.createElement.apply(void 0,r);var i=r.length,l=new Array(i);l[0]=Tu,l[1]=Nu(t,n);for(var o=2;o<i;o++)l[o]=r[o];return w.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Ed||(Ed={}));function S(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return kh(t)}const _d="/strack",Nv=e=>S`
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
`,Tv=e=>S`
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
`,zv=e=>S`
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
`,Ov=S`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 480px) {
    margin-bottom: 2rem;
  }
`,jv=e=>S`
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
`,Dv=e=>S`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#1a1a1a"};
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`,Rv=e=>S`
  font-size: 0.85rem;
  color: ${e?"#a0a0a0":"#666666"};
  font-weight: 400;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`,bv=S`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 480px) {
    gap: 1.5rem;
  }
`,$d=S`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ld=e=>S`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e?"#e0e0e0":"#1a1a1a"};

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`,Iv=S`
  position: relative;
  display: flex;
  align-items: center;
`,_h=e=>S`
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
`,Fv=e=>S`
  ${_h(e)};
  padding-right: 3rem;
`,Av=e=>S`
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
`,Uv=S`
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
`,Bv=S`
  color: #c0392b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,Wv=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})}),Vv=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"24",height:"24",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),Hv=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"24",height:"24",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),Qv=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Kv=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function Yv({darkMode:e,onToggleDarkMode:t}){const[n,r]=w.useState(""),[i,l]=w.useState(""),[o,s]=w.useState(!1),[a,d]=w.useState(""),[g,h]=w.useState(!1),y=async C=>{if(C.preventDefault(),d(""),!n.trim()){d("Please enter your email.");return}if(!i){d("Please enter your password.");return}h(!0);try{const x=await(await fetch(`${_d}/backend/login.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.trim(),password:i})})).text();let L;try{L=JSON.parse(x)}catch{d("Server error. Check that setup_accounts.php was run.");return}if(L.success){const p=L.user||{},f=p.role||"student",m=f==="admin"?"/admin":f==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(p))}catch{}window.location.href=`${_d}${m}`}else d(L.message||"Invalid email or password.")}catch{d("Unable to connect. Check the backend URL and run setup_accounts.php.")}finally{h(!1)}};return v("div",{css:Nv(e),children:[u("button",{css:Tv(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?u(Hv,{}):u(Vv,{})}),v("div",{css:zv(e),children:[v("header",{css:Ov,children:[u("div",{css:jv(e),children:u(Wv,{})}),u("h1",{css:Dv(e),children:"Welcome Back"}),u("p",{css:Rv(e),children:"Sign in to your account to continue"})]}),v("form",{css:bv,onSubmit:y,children:[v("div",{css:$d,children:[u("label",{css:Ld(e),htmlFor:"email",children:"Email"}),u("input",{css:_h(e),id:"email",type:"email",placeholder:"Enter your email",value:n,onChange:C=>r(C.target.value),autoComplete:"email",disabled:g})]}),v("div",{css:$d,children:[u("label",{css:Ld(e),htmlFor:"password",children:"Password"}),v("div",{css:Iv,children:[u("input",{css:Fv(e),id:"password",type:o?"text":"password",placeholder:"Enter your password",value:i,onChange:C=>l(C.target.value),autoComplete:"current-password",disabled:g}),u("button",{type:"button",css:Av(e),onClick:()=>s(!o),"aria-label":o?"Hide password":"Show password",tabIndex:-1,children:o?u(Kv,{}):u(Qv,{})})]})]}),a&&u("p",{css:Bv,children:a}),u("button",{type:"submit",css:Uv,disabled:g,children:g?"Signing in...":"Submit"})]})]})]})}var $h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pd=Pt.createContext&&Pt.createContext($h),Zv=["attr","size","title"];function Gv(e,t){if(e==null)return{};var n,r,i=Xv(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Xv(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(null,arguments)}function Nd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function oo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nd(Object(n),!0).forEach(function(r){Jv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jv(e,t,n){return(t=Mv(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mv(e){var t=qv(e,"string");return typeof t=="symbol"?t:t+""}function qv(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lh(e){return e&&e.map((t,n)=>Pt.createElement(t.tag,oo({key:n},t.attr),Lh(t.child)))}function ge(e){return t=>Pt.createElement(ey,lo({attr:oo({},e.attr)},t),Lh(e.child))}function ey(e){var t=n=>{var{attr:r,size:i,title:l}=e,o=Gv(e,Zv),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Pt.createElement("svg",lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:oo(oo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&Pt.createElement("title",null,l),e.children)};return Pd!==void 0?Pt.createElement(Pd.Consumer,null,n=>t(n)):t($h)}function Vr(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function Ph(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function so(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function Hr(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function zu(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function Nh(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function Ou(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function ty(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function Qr(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function ju(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function Kr(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function ny(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function ry(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function Th(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function Du(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function ui(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function Bi(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function Ru(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function Wi(e){return ge({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const Ve="0.35s ease",iy=e=>S`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${Ve};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,ly=e=>S`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${Ve}, box-shadow ${Ve};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,oy=S`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,sy=S`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,ay=e=>S`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Ve};
  }
`,uy=e=>S`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ve};
`,cy=e=>S`
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
  transition: color ${Ve};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,dy=S`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,fy=S`
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
`,py=S`
  flex: 1;
  min-width: 0;
`,hy=e=>S`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ve};
`,my=e=>S`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Ve};
`,gy=e=>S`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${Ve};
`,vy=S`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,yy=e=>S`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${Ve};
`,wy=e=>S`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${Ve};
`,Sy=S`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,xy=(e,t)=>S`
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
  transition: background ${Ve}, color ${Ve};

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
`,Cy=S`
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
`,ky=e=>S`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${Ve};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Ey=e=>S`
  max-width: 800px;
  margin: 0 auto;
`,an=S`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,un=S`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,_y=[{id:"dashboard",label:"Dashboard",icon:Ou},{id:"courses",label:"Courses",icon:Bi},{id:"calendar",label:"Calendar",icon:Du},{id:"leaderboard",label:"Leaderboard",icon:Th},{id:"badges",label:"Badges",icon:ty},{id:"rewards",label:"Rewards",icon:Nh},{id:"profile",label:"Profile",icon:Ph}];function $y(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Ly({darkMode:e,onToggleDarkMode:t}){const n=$o(),[r,i]=w.useState("dashboard");let l="Alex Thompson",o=2450;try{const a=localStorage.getItem("strack_user");if(a){const d=JSON.parse(a);d!=null&&d.name&&(l=d.name)}}catch{}const s=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return v("div",{css:iy(e),children:[v("aside",{css:ly(e),children:[v("header",{css:oy,children:[v("div",{css:sy,children:[u("div",{css:ay(e),children:u(Wi,{})}),u("span",{css:uy(e),children:"Strack"})]}),u("button",{type:"button",css:cy(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?u(zu,{}):u(ju,{})})]}),v("div",{css:dy,children:[u("div",{css:fy,children:$y(l)}),v("div",{css:py,children:[u("div",{css:hy(e),children:l}),u("div",{css:my(e),children:"Student"})]})]}),u("div",{css:gy(e),children:v("div",{css:vy,children:[v("span",{css:yy(e),children:[u(ny,{})," Points"]}),u("span",{css:wy(e),children:o})]})}),u("nav",{css:Sy,children:_y.map(({id:a,label:d,icon:g})=>v("button",{css:xy(e,r===a),onClick:()=>i(a),children:[u(g,{}),d]},a))}),v("button",{css:Cy,onClick:s,children:[u(Ru,{}),"Logout"]})]}),u("main",{css:ky(e),children:v("div",{css:Ey(),children:[r==="dashboard"&&v(ae,{children:[u("h1",{css:an,children:"Dashboard"}),u("p",{css:un,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),r==="courses"&&v(ae,{children:[u("h1",{css:an,children:"Courses"}),u("p",{css:un,children:"This is the courses page. View your enrolled courses, materials, and grades here."})]}),r==="calendar"&&v(ae,{children:[u("h1",{css:an,children:"Calendar"}),u("p",{css:un,children:"This is the calendar page. View your schedule, deadlines, and important dates here."})]}),r==="leaderboard"&&v(ae,{children:[u("h1",{css:an,children:"Leaderboard"}),u("p",{css:un,children:"This is the leaderboard page. See how you rank against other students and track your position."})]}),r==="badges"&&v(ae,{children:[u("h1",{css:an,children:"Badges"}),u("p",{css:un,children:"This is the badges page. View and collect achievement badges earned from your activities."})]}),r==="rewards"&&v(ae,{children:[u("h1",{css:an,children:"Rewards"}),u("p",{css:un,children:"This is the rewards page. Redeem your points for rewards and see what you can earn."})]}),r==="profile"&&v(ae,{children:[u("h1",{css:an,children:"Profile"}),u("p",{css:un,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const mt="0.35s ease",Py=e=>S`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${mt};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Ny=e=>S`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${mt}, box-shadow ${mt};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,Ty=S`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,zy=S`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Oy=e=>S`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${mt};
  }
`,jy=e=>S`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${mt};
`,Dy=e=>S`
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
  transition: color ${mt};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,Ry=S`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,by=S`
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
`,Iy=S`
  flex: 1;
  min-width: 0;
`,Fy=e=>S`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${mt};
`,Ay=e=>S`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${mt};
`,Uy=S`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,By=(e,t)=>S`
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
  transition: background ${mt}, color ${mt};

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
`,Wy=S`
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
`,Vy=e=>S`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${mt};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Hy=e=>S`
  max-width: 800px;
  margin: 0 auto;
`,cn=S`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,dn=S`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Qy=[{id:"dashboard",label:"Dashboard",icon:Ou},{id:"students",label:"Students",icon:so},{id:"attendance",label:"Attendance",icon:ry},{id:"performance",label:"Performance",icon:Th},{id:"courses",label:"Courses",icon:Bi},{id:"calendar",label:"Calendar",icon:Du},{id:"profile",label:"Profile",icon:Ph}];function Ky(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Yy({darkMode:e,onToggleDarkMode:t}){const n=$o(),[r,i]=w.useState("dashboard");let l="Lecturer";try{const s=localStorage.getItem("strack_user");if(s){const a=JSON.parse(s);a!=null&&a.name&&(l=a.name)}}catch{}const o=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return v("div",{css:Py(e),children:[v("aside",{css:Ny(e),children:[v("header",{css:Ty,children:[v("div",{css:zy,children:[u("div",{css:Oy(e),children:u(Wi,{})}),u("span",{css:jy(e),children:"Strack"})]}),u("button",{type:"button",css:Dy(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?u(zu,{}):u(ju,{})})]}),v("div",{css:Ry,children:[u("div",{css:by,children:Ky(l)}),v("div",{css:Iy,children:[u("div",{css:Fy(e),children:l}),u("div",{css:Ay(e),children:"Lecturer"})]})]}),u("nav",{css:Uy,children:Qy.map(({id:s,label:a,icon:d})=>v("button",{type:"button",css:By(e,r===s),onClick:()=>i(s),children:[u(d,{}),a]},s))}),v("button",{type:"button",css:Wy,onClick:o,children:[u(Ru,{}),"Logout"]})]}),u("main",{css:Vy(e),children:v("div",{css:Hy(),children:[r==="dashboard"&&v(ae,{children:[u("h1",{css:cn,children:"Dashboard"}),u("p",{css:dn,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),r==="students"&&v(ae,{children:[u("h1",{css:cn,children:"Students"}),u("p",{css:dn,children:"This is the students page. View your class lists and student details here."})]}),r==="attendance"&&v(ae,{children:[u("h1",{css:cn,children:"Attendance"}),u("p",{css:dn,children:"This is the attendance page. Mark and view student attendance for your classes here."})]}),r==="performance"&&v(ae,{children:[u("h1",{css:cn,children:"Performance"}),u("p",{css:dn,children:"This is the performance page. View and analyse student performance and grades here."})]}),r==="courses"&&v(ae,{children:[u("h1",{css:cn,children:"Courses"}),u("p",{css:dn,children:"This is the courses page. Manage your courses, materials, and class lists here."})]}),r==="calendar"&&v(ae,{children:[u("h1",{css:cn,children:"Calendar"}),u("p",{css:dn,children:"This is the calendar page. View your teaching schedule, deadlines, and important dates here."})]}),r==="profile"&&v(ae,{children:[u("h1",{css:cn,children:"Profile"}),u("p",{css:dn,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const se="/strack",I="0.35s ease",Zy=e=>S`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${I};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Gy=e=>S`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${I}, box-shadow ${I};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,Xy=S`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Jy=S`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,My=e=>S`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${I};
  }
`,qy=e=>S`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${I};
`,e2=e=>S`
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
  transition: color ${I};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,t2=S`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,n2=S`
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
`,r2=S`
  flex: 1;
  min-width: 0;
`,i2=e=>S`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${I};
`,l2=e=>S`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${I};
`,o2=S`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,s2=(e,t)=>S`
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
  transition: background ${I}, color ${I};

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
`,a2=S`
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
`,u2=e=>S`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${I};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,c2=(e,t)=>S`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,xs=S`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Cs=S`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,ks=e=>S`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${I};
`,Es=S`
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
`,yl=e=>S`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  margin-bottom: 1rem;
  transition: border-color ${I}, background ${I};

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
`,_s=S`
  margin-bottom: 1rem;
`,$s=S`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,fn=e=>S`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,pn=e=>S`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,hn=e=>S`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;S`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const mn=e=>S`
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
`,gn=S`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,d2=(e,t)=>S`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${I}, color ${I};
`,f2=S`
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
`,Td=S`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,zd=S`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Od=S`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,jd=S`
  flex: 1;
  min-width: 0;
`,Dd=S`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Rd=e=>S`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${I};
`,bd=S`
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
`,p2=e=>S`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${I}, box-shadow ${I};
`,h2=e=>S`
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
`,m2=e=>S`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${I};
`,g2=e=>S`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${I};
`,v2=e=>S`
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
`,y2=S`
  margin-top: 1.5rem;
`,w2=S`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,S2=S`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,x2=e=>S`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  transition: border-color ${I}, background ${I};

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
`,Yr=e=>S`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${I}, box-shadow ${I};
`,W=e=>S`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1a1a1a":"#f9fafb"};
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  transition: color ${I}, background ${I}, border-color ${I};
`,b=e=>S`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${I}, border-color ${I};
`,Zr=S`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hn=e=>S`
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
`,Gr=e=>S`
  ${Hn(e)}
  &:hover {
    color: #dc2626;
  }
`,Xr=S`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Jr=e=>S`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${I};
`,Mr=e=>S`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${I};
`,qr=e=>S`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${I};
`,ei=e=>S`
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
`,ti=S`
  padding: 1.5rem;
`,ee=S`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,te=e=>S`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${I};
`,le=e=>S`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${I}, background ${I};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${e?"#6b7280":"#9ca3af"};
  }
`,Id=e=>S`
  ${le(e)}
  min-height: 80px;
  resize: vertical;
`,ni=e=>S`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${I};
`,ri=e=>S`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${I}, background ${I};

  &:hover {
    background: ${e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"};
  }
`,ii=S`
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
`,C2=[{id:"dashboard",label:"Dashboard",icon:Ou},{id:"students",label:"Students",icon:so},{id:"lecturers",label:"Lecturers",icon:Wi},{id:"courses",label:"Courses",icon:Bi},{id:"departments",label:"Departments",icon:ui},{id:"degrees",label:"Degrees",icon:Bi},{id:"calendar",label:"Calendar",icon:Du}];function k2(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function E2({darkMode:e,onToggleDarkMode:t}){const n=$o(),[r,i]=w.useState("dashboard"),[l,o]=w.useState([]),[s,a]=w.useState(!1),[d,g]=w.useState(""),[h,y]=w.useState(!1),[C,E]=w.useState(null),[x,L]=w.useState({code:"",name:"",description:""}),[p,f]=w.useState(!1),m=w.useCallback(async()=>{a(!0);try{const k=await(await fetch(`${se}/backend/departments.php`)).json();k.success&&o(k.departments||[])}catch{o([])}finally{a(!1)}},[]);w.useEffect(()=>{r==="departments"&&m()},[r,m]);const[_,N]=w.useState([]),[z,P]=w.useState(!1),[j,M]=w.useState(""),[F,Ne]=w.useState(!1),[Re,Rt]=w.useState(null),[it,lt]=w.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:"",degree:""}),[jn,Dn]=w.useState(!1),[T,D]=w.useState([]),R=w.useCallback(async()=>{P(!0);try{const k=await(await fetch(`${se}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();k.success&&N(k.students||[])}catch{N([])}finally{P(!1)}},[]),X=w.useCallback(async()=>{try{const k=await(await fetch(`${se}/backend/departments.php`)).json();k.success&&D(k.departments||[])}catch{D([])}},[]);w.useEffect(()=>{r==="students"&&R(),(r==="students"||r==="lecturers"||r==="courses"||r==="degrees")&&X()},[r,R,X]);const[q,on]=w.useState([]),[ot,Rn]=w.useState(!1),[be,bn]=w.useState(""),[zh,Uo]=w.useState(!1),[In,bu]=w.useState(null),[kr,Fn]=w.useState({lecturer_id:"",full_name:"",email:"",department:""}),[Iu,Fu]=w.useState(!1),Er=w.useCallback(async()=>{Rn(!0);try{const k=await(await fetch(`${se}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();k.success&&on(k.lecturers||[])}catch{on([])}finally{Rn(!1)}},[]);w.useEffect(()=>{(r==="lecturers"||r==="courses")&&Er()},[r,Er]);const Oh=()=>{bu(null),Fn({lecturer_id:"",full_name:"",email:"",department:""}),Uo(!0)},jh=c=>{bu(c.id),Fn({lecturer_id:c.lecturer_id||"",full_name:c.full_name||"",email:c.email||"",department:c.department||""}),Uo(!0)},_r=()=>Uo(!1),Dh=async()=>{const{lecturer_id:c,full_name:k,email:U,department:Te}=kr;if(!(!c.trim()||!k.trim()||!U.trim()||!Te.trim())){Fu(!0);try{In?(await(await fetch(`${se}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:In,lecturer_id:c.trim(),full_name:k.trim(),email:U.trim(),department:Te.trim()})})).json()).success&&(_r(),Er()):(await(await fetch(`${se}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:c.trim(),full_name:k.trim(),email:U.trim(),department:Te.trim()})})).json()).success&&(_r(),Er())}finally{Fu(!1)}}},Rh=async c=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${se}/backend/lecturers.php?id=${c}`,{method:"DELETE"})).json()).success&&Er()}catch{}},Au=q.filter(c=>!be||(c.lecturer_id||"").toLowerCase().includes(be.toLowerCase())||(c.full_name||"").toLowerCase().includes(be.toLowerCase())||(c.email||"").toLowerCase().includes(be.toLowerCase())||(c.department||"").toLowerCase().includes(be.toLowerCase())),[Bo,Uu]=w.useState([]),[Wo,Bu]=w.useState(!1),[An,bh]=w.useState(""),[Ih,Vo]=w.useState(!1),[$r,Wu]=w.useState(null),[bt,sn]=w.useState({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0}),[Vu,Hu]=w.useState(!1),Lr=w.useCallback(async()=>{Bu(!0);try{const k=await(await fetch(`${se}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})).json();k.success&&Uu(k.courses||[])}catch{Uu([])}finally{Bu(!1)}},[]);w.useEffect(()=>{r==="courses"&&Lr()},[r,Lr]);const Fh=()=>{Wu(null),sn({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0}),Vo(!0)},Ah=c=>{Wu(c.id),sn({course_code:c.course_code||"",course_name:c.course_name||"",department:c.department||"",lecturer_id:c.lecturer_id||"",credits:Number(c.credits)||0}),Vo(!0)},Pr=()=>Vo(!1),Uh=async()=>{const{course_code:c,course_name:k,department:U,lecturer_id:Te,credits:st}=bt;if(!(!c.trim()||!k.trim())){Hu(!0);try{$r?(await(await fetch(`${se}/backend/courses.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:$r,course_code:c.trim(),course_name:k.trim(),department:U.trim()||"",lecturer_id:Te.trim()||"",credits:Number(st)||0})})).json()).success&&(Pr(),Lr()):(await(await fetch(`${se}/backend/courses.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({course_code:c.trim(),course_name:k.trim(),department:U.trim()||"",lecturer_id:Te.trim()||"",credits:Number(st)||0})})).json()).success&&(Pr(),Lr())}finally{Hu(!1)}}},Bh=async c=>{if(confirm("Delete this course?"))try{(await(await fetch(`${se}/backend/courses.php?id=${c}`,{method:"DELETE"})).json()).success&&Lr()}catch{}},Qu=Bo.filter(c=>!An||(c.course_code||"").toLowerCase().includes(An.toLowerCase())||(c.course_name||"").toLowerCase().includes(An.toLowerCase())||(c.department||"").toLowerCase().includes(An.toLowerCase())||(c.lecturer_name||"").toLowerCase().includes(An.toLowerCase())),[Ho,Ku]=w.useState([]),[Wh,Yu]=w.useState(!1),[Un,Vh]=w.useState(""),[Hh,Qo]=w.useState(!1),[Mi,Zu]=w.useState(null),[Nr,Bn]=w.useState({code:"",name:"",department:"",description:""}),[Gu,Xu]=w.useState(!1),Tr=w.useCallback(async()=>{Yu(!0);try{const k=await(await fetch(`${se}/backend/degrees.php?t=${Date.now()}`,{cache:"no-store"})).json();k.success&&Ku(k.degrees||[])}catch{Ku([])}finally{Yu(!1)}},[]);w.useEffect(()=>{(r==="degrees"||r==="students")&&Tr()},[r,Tr]);const Qh=()=>{Zu(null),Bn({code:"",name:"",department:"",description:""}),Qo(!0)},Kh=c=>{Zu(c.id),Bn({code:c.code||"",name:c.name||"",department:c.department||"",description:c.description||""}),Qo(!0)},zr=()=>Qo(!1),Yh=async()=>{const{code:c,name:k,department:U,description:Te}=Nr;if(!(!c.trim()||!k.trim())){Xu(!0);try{Mi?(await(await fetch(`${se}/backend/degrees.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Mi,code:c.trim(),name:k.trim(),department:U.trim(),description:Te.trim()})})).json()).success&&(zr(),Tr()):(await(await fetch(`${se}/backend/degrees.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:c.trim(),name:k.trim(),department:U.trim(),description:Te.trim()})})).json()).success&&(zr(),Tr())}finally{Xu(!1)}}},Zh=async c=>{if(confirm("Delete this degree?"))try{(await(await fetch(`${se}/backend/degrees.php?id=${c}`,{method:"DELETE"})).json()).success&&Tr()}catch{}},Ju=Ho.filter(c=>!Un||(c.code||"").toLowerCase().includes(Un.toLowerCase())||(c.name||"").toLowerCase().includes(Un.toLowerCase())||(c.department||"").toLowerCase().includes(Un.toLowerCase())||(c.description||"").toLowerCase().includes(Un.toLowerCase())),Gh=()=>{Rt(null),lt({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:"",degree:""}),Ne(!0)},Xh=c=>{Rt(c.id),lt({student_id:c.student_id,full_name:c.full_name,email:c.email,password:"",department:c.department||"",year:c.year||"",degree:c.degree||""}),Ne(!0)},Or=()=>Ne(!1),Jh=async()=>{const{student_id:c,full_name:k,email:U,password:Te,department:st,year:It,degree:qi}=it;if(!(!c.trim()||!k.trim()||!U.trim())&&!(!Re&&!Te.trim())){Dn(!0);try{Re?(await(await fetch(`${se}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Re,student_id:c.trim(),full_name:k.trim(),email:U.trim(),password:Te.trim(),department:st.trim()||"",year:It.trim()||"",degree:qi.trim()||""})})).json()).success&&(Or(),R()):(await(await fetch(`${se}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:c.trim(),full_name:k.trim(),email:U.trim(),password:Te.trim(),department:st.trim()||"",year:It.trim()||"",degree:qi.trim()||""})})).json()).success&&(Or(),R())}finally{Dn(!1)}}},Mh=async c=>{if(confirm("Delete this student?"))try{(await(await fetch(`${se}/backend/students.php?id=${c}`,{method:"DELETE"})).json()).success&&R()}catch{}},Mu=_.filter(c=>!j||(c.student_id||"").toLowerCase().includes(j.toLowerCase())||(c.full_name||"").toLowerCase().includes(j.toLowerCase())||(c.email||"").toLowerCase().includes(j.toLowerCase())||(c.department||"").toLowerCase().includes(j.toLowerCase())||(c.degree||"").toLowerCase().includes(j.toLowerCase())),qh=["Foundation","Year 1","Year 2","Placement Year","Year 4"],em=()=>{E(null),L({code:"",name:"",description:""}),y(!0)},tm=c=>{E(c.id),L({code:c.code,name:c.name,description:c.description||""}),y(!0)},jr=()=>y(!1),nm=async()=>{const{code:c,name:k,description:U}=x;if(!(!c.trim()||!k.trim())){f(!0);try{C?(await(await fetch(`${se}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:C,code:c.trim(),name:k.trim(),description:U.trim()})})).json()).success&&(jr(),m()):(await(await fetch(`${se}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:c.trim(),name:k.trim(),description:U.trim()})})).json()).success&&(jr(),m())}finally{f(!1)}}},rm=async c=>{if(confirm("Delete this department?"))try{(await(await fetch(`${se}/backend/departments.php?id=${c}`,{method:"DELETE"})).json()).success&&m()}catch{}},qu=l.filter(c=>!d||c.code.toLowerCase().includes(d.toLowerCase())||c.name.toLowerCase().includes(d.toLowerCase())||(c.description||"").toLowerCase().includes(d.toLowerCase()));let Ko="Admin Portal";try{const c=localStorage.getItem("strack_user");if(c){const k=JSON.parse(c),U=(k==null?void 0:k.name)||"";Ko=U==="Test Admin"||U==="Admin"?"Admin Portal":U||"Admin Portal"}}catch{}const im=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return v("div",{css:Zy(e),children:[v("aside",{css:Gy(e),children:[v("header",{css:Xy,children:[v("div",{css:Jy,children:[u("div",{css:My(e),children:u(Wi,{})}),u("span",{css:qy(e),children:"Strack"})]}),u("button",{type:"button",css:e2(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?u(zu,{}):u(ju,{})})]}),v("div",{css:t2,children:[u("div",{css:n2,children:k2(Ko)}),v("div",{css:r2,children:[u("div",{css:i2(e),children:Ko}),u("div",{css:l2(e),children:"Admin"})]})]}),u("nav",{css:o2,children:C2.map(({id:c,label:k,icon:U})=>v("button",{type:"button",css:s2(e,r===c),onClick:()=>i(c),children:[u(U,{}),k]},c))}),v("button",{type:"button",css:a2,onClick:im,children:[u(Ru,{}),"Logout"]})]}),u("main",{css:u2(e),children:v("div",{css:c2(e,r==="departments"||r==="students"||r==="lecturers"||r==="courses"||r==="degrees"),children:[r==="dashboard"&&v(ae,{children:[u("h1",{css:Td,children:"Dashboard"}),u("p",{css:zd,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),r==="students"&&v(ae,{children:[v("div",{css:xs,children:[v("div",{children:[u("h1",{css:Cs,children:"Manage Students"}),u("p",{css:ks(e),children:"Add, edit, or remove student records."})]}),u("button",{type:"button",css:Es,onClick:Gh,children:"+ Add Student"})]}),v("div",{css:_s,children:[v("div",{css:fn(e),children:[u("span",{css:mn(e),children:u(so,{})}),v("div",{css:gn,children:[u("p",{css:hn(e),children:"Total Students"}),u("p",{css:pn(e),children:z?"...":_.length})]})]}),v("div",{css:$s,children:[T.length>0?T.map(c=>{const k=_.filter(U=>(U.department||"")===c.name).length;return v("div",{css:fn(e),children:[u("span",{css:mn(e),children:u(ui,{})}),v("div",{css:gn,children:[u("p",{css:hn(e),children:c.name}),u("p",{css:pn(e),children:z?"...":k})]})]},c.id)}):null,(()=>{const c=_.filter(k=>!k.department).length;return c<=0?null:v("div",{css:fn(e),children:[u("span",{css:mn(e),children:u(Wi,{})}),v("div",{css:gn,children:[u("p",{css:hn(e),children:"Unassigned"}),u("p",{css:pn(e),children:z?"...":c})]})]})})()]})]}),v("div",{css:yl(e),children:[u(Kr,{}),u("input",{type:"text",placeholder:"Search students...",value:j,onChange:c=>M(c.target.value)})]}),v("table",{css:Yr(e),children:[u("thead",{children:v("tr",{children:[u("th",{css:W(e),children:"Student ID"}),u("th",{css:W(e),children:"Name"}),u("th",{css:W(e),children:"Email"}),u("th",{css:W(e),children:"Department"}),u("th",{css:W(e),children:"Degree"}),u("th",{css:W(e),children:"Year"}),u("th",{css:W(e),children:"GPA"}),u("th",{css:W(e),children:"Points"}),u("th",{css:W(e),children:"Attendance"}),u("th",{css:W(e),children:"Actions"})]})}),u("tbody",{children:z?u("tr",{children:u("td",{css:b(e),colSpan:10,children:"Loading..."})}):Mu.length===0?u("tr",{children:u("td",{css:b(e),colSpan:10,children:"No students found."})}):Mu.map(c=>{var k;return v("tr",{children:[u("td",{css:b(e),children:c.student_id}),u("td",{css:b(e),children:c.full_name}),u("td",{css:b(e),children:c.email}),u("td",{css:b(e),children:c.department||"—"}),u("td",{css:b(e),children:((k=Ho.find(U=>U.code===c.degree))==null?void 0:k.name)||c.degree||"—"}),u("td",{css:b(e),children:c.year||"—"}),u("td",{css:b(e),children:Number(c.gpa)||0}),u("td",{css:b(e),children:v("span",{css:f2,children:[u(Nh,{}),Number(c.points)||0]})}),u("td",{css:b(e),children:v("span",{css:d2(Number(c.attendance)||0,e),children:[Number(c.attendance)||0,"%"]})}),u("td",{css:b(e),children:v("div",{css:Zr,children:[u("button",{type:"button",css:Hn(e),onClick:()=>Xh(c),title:"Edit",children:u(Qr,{})}),u("button",{type:"button",css:Gr(e),onClick:()=>Mh(c.id),title:"Delete",children:u(Hr,{})})]})})]},c.id)})})]})]}),r==="lecturers"&&v(ae,{children:[v("div",{css:xs,children:[v("div",{children:[u("h1",{css:Cs,children:"Lecturer Management"}),u("p",{css:ks(e),children:"Manage teaching staff and teaching assignments."})]}),u("button",{type:"button",css:Es,onClick:Oh,children:"+ Add Lecturer"})]}),v("div",{css:_s,children:[v("div",{css:fn(e),children:[u("span",{css:mn(e),children:u(so,{})}),v("div",{css:gn,children:[u("p",{css:hn(e),children:"Total Lecturers"}),u("p",{css:pn(e),children:ot?"...":q.length})]})]}),u("div",{css:$s,children:T.length>0?T.map(c=>{const k=q.filter(U=>(U.department||"")===c.name).length;return v("div",{css:fn(e),children:[u("span",{css:mn(e),children:u(ui,{})}),v("div",{css:gn,children:[u("p",{css:hn(e),children:c.name}),u("p",{css:pn(e),children:ot?"...":k})]})]},c.id)}):null})]}),v("div",{css:yl(e),children:[u(Kr,{}),u("input",{type:"text",placeholder:"Search lecturers...",value:be,onChange:c=>bn(c.target.value)})]}),v("table",{css:Yr(e),children:[u("thead",{children:v("tr",{children:[u("th",{css:W(e),children:"Lecturer ID"}),u("th",{css:W(e),children:"Name"}),u("th",{css:W(e),children:"Email"}),u("th",{css:W(e),children:"Department"}),u("th",{css:W(e),children:"Modules"}),u("th",{css:W(e),children:"Actions"})]})}),u("tbody",{children:ot?u("tr",{children:u("td",{css:b(e),colSpan:6,children:"Loading..."})}):Au.length===0?u("tr",{children:u("td",{css:b(e),colSpan:6,children:"No lecturers found."})}):Au.map(c=>v("tr",{children:[u("td",{css:b(e),children:c.lecturer_id}),u("td",{css:b(e),children:c.full_name}),u("td",{css:b(e),children:c.email}),u("td",{css:b(e),children:c.department||"—"}),u("td",{css:b(e),children:Number(c.modules)||0}),u("td",{css:b(e),children:v("div",{css:Zr,children:[u("button",{type:"button",css:Hn(e),onClick:()=>jh(c),title:"Edit",children:u(Qr,{})}),u("button",{type:"button",css:Gr(e),onClick:()=>Rh(c.id),title:"Delete",children:u(Hr,{})})]})})]},c.id))})]})]}),r==="courses"&&v(ae,{children:[v("div",{css:xs,children:[v("div",{children:[u("h1",{css:Cs,children:"Course Management"}),u("p",{css:ks(e),children:"Manage course catalog."})]}),u("button",{type:"button",css:Es,onClick:Fh,children:"+ Add Course"})]}),v("div",{css:_s,children:[v("div",{css:fn(e),children:[u("span",{css:mn(e),children:u(Bi,{})}),v("div",{css:gn,children:[u("p",{css:hn(e),children:"Total Courses"}),u("p",{css:pn(e),children:Wo?"...":Bo.length})]})]}),u("div",{css:$s,children:T.length>0?T.map(c=>{const k=Bo.filter(U=>(U.department||"")===c.name).length;return v("div",{css:fn(e),children:[u("span",{css:mn(e),children:u(ui,{})}),v("div",{css:gn,children:[u("p",{css:hn(e),children:c.name}),u("p",{css:pn(e),children:Wo?"...":k})]})]},c.id)}):null})]}),v("div",{css:yl(e),children:[u(Kr,{}),u("input",{type:"text",placeholder:"Search courses...",value:An,onChange:c=>bh(c.target.value)})]}),v("table",{css:Yr(e),children:[u("thead",{children:v("tr",{children:[u("th",{css:W(e),children:"Course Code"}),u("th",{css:W(e),children:"Course Name"}),u("th",{css:W(e),children:"Department"}),u("th",{css:W(e),children:"Lecturer"}),u("th",{css:W(e),children:"Credits"}),u("th",{css:W(e),children:"Actions"})]})}),u("tbody",{children:Wo?u("tr",{children:u("td",{css:b(e),colSpan:6,children:"Loading..."})}):Qu.length===0?u("tr",{children:u("td",{css:b(e),colSpan:6,children:"No courses found."})}):Qu.map(c=>v("tr",{children:[u("td",{css:b(e),children:c.course_code}),u("td",{css:b(e),children:c.course_name}),u("td",{css:b(e),children:c.department||"—"}),u("td",{css:b(e),children:c.lecturer_name||"—"}),u("td",{css:b(e),children:v("span",{css:v2(),children:[Number(c.credits)||0," credits"]})}),u("td",{css:b(e),children:v("div",{css:Zr,children:[u("button",{type:"button",css:Hn(e),onClick:()=>Ah(c),title:"Edit",children:u(Qr,{})}),u("button",{type:"button",css:Gr(e),onClick:()=>Bh(c.id),title:"Delete",children:u(Hr,{})})]})})]},c.id))})]})]}),r==="degrees"&&v(ae,{children:[v("div",{css:Od,children:[v("div",{css:jd,children:[u("h1",{css:Dd,children:"Degrees"}),u("p",{css:Rd(e),children:"Create, view, edit, and delete degrees."})]}),u("button",{type:"button",css:bd,onClick:Qh,children:"+ Add Degree"})]}),v("div",{css:yl(e),children:[u(Kr,{}),u("input",{type:"text",placeholder:"Search degrees...",value:Un,onChange:c=>Vh(c.target.value)})]}),v("table",{css:Yr(e),children:[u("thead",{children:v("tr",{children:[u("th",{css:W(e),children:"Code"}),u("th",{css:W(e),children:"Name"}),u("th",{css:W(e),children:"Department"}),u("th",{css:W(e),children:"Description"}),u("th",{css:W(e),children:"Actions"})]})}),u("tbody",{children:Wh?u("tr",{children:u("td",{css:b(e),colSpan:5,children:"Loading..."})}):Ju.length===0?u("tr",{children:u("td",{css:b(e),colSpan:5,children:"No degrees found."})}):Ju.map(c=>v("tr",{children:[u("td",{css:b(e),children:c.code}),u("td",{css:b(e),children:c.name}),u("td",{css:b(e),children:c.department||"—"}),u("td",{css:b(e),children:c.description||"—"}),u("td",{css:b(e),children:v("div",{css:Zr,children:[u("button",{type:"button",css:Hn(e),onClick:()=>Kh(c),title:"Edit",children:u(Qr,{})}),u("button",{type:"button",css:Gr(e),onClick:()=>Zh(c.id),title:"Delete",children:u(Hr,{})})]})})]},c.id))})]})]}),r==="departments"&&v(ae,{children:[v("div",{css:Od,children:[v("div",{css:jd,children:[u("h1",{css:Dd,children:"Departments"}),u("p",{css:Rd(e),children:"Manage university departments."})]}),u("button",{type:"button",css:bd,onClick:em,children:"+ Add Department"})]}),v("div",{css:p2(e),children:[u("div",{css:h2(e),children:u(ui,{})}),v("div",{children:[u("p",{css:g2(e),children:"Total Departments"}),u("p",{css:m2(e),children:s?"...":l.length})]})]}),v("div",{css:y2,children:[v("div",{css:w2,children:[u("h2",{css:S2,children:"All Departments"}),v("div",{css:x2(e),children:[u(Kr,{}),u("input",{type:"text",placeholder:"Search departments...",value:d,onChange:c=>g(c.target.value)})]})]}),v("table",{css:Yr(e),children:[u("thead",{children:v("tr",{children:[u("th",{css:W(e),children:"Code"}),u("th",{css:W(e),children:"Name"}),u("th",{css:W(e),children:"Description"}),u("th",{css:W(e),children:"Actions"})]})}),u("tbody",{children:s?u("tr",{children:u("td",{css:b(e),colSpan:4,children:"Loading..."})}):qu.length===0?u("tr",{children:u("td",{css:b(e),colSpan:4,children:"No departments found."})}):qu.map(c=>v("tr",{children:[u("td",{css:b(e),children:c.code}),u("td",{css:b(e),children:c.name}),u("td",{css:b(e),children:c.description||"—"}),u("td",{css:b(e),children:v("div",{css:Zr,children:[u("button",{type:"button",css:Hn(e),onClick:()=>tm(c),title:"Edit",children:u(Qr,{})}),u("button",{type:"button",css:Gr(e),onClick:()=>rm(c.id),title:"Delete",children:u(Hr,{})})]})})]},c.id))})]})]})]}),r==="calendar"&&v(ae,{children:[u("h1",{css:Td,children:"Calendar"}),u("p",{css:zd,children:"This is the calendar page. View and manage academic calendar, deadlines, and events here."})]})]})}),F&&u("div",{css:Xr,onClick:Or,children:v("div",{css:Jr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:Mr(e),children:[u("h3",{css:qr(e),children:Re?"Edit Student":"Add Student"}),u("button",{type:"button",css:ei(e),onClick:Or,"aria-label":"Close",children:u(Vr,{})})]}),v("div",{css:ti,children:[v("div",{css:ee,children:[u("label",{css:te(e),children:"Full Name *"}),u("input",{type:"text",css:le(e),placeholder:"e.g. Ava Thomas",value:it.full_name,onChange:c=>lt(k=>({...k,full_name:c.target.value}))})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Email *"}),u("input",{type:"email",css:le(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:it.email,onChange:c=>lt(k=>({...k,email:c.target.value}))})]}),!Re&&v("div",{css:ee,children:[u("label",{css:te(e),children:"Password *"}),u("input",{type:"password",css:le(e),placeholder:"e.g. student123",value:it.password,onChange:c=>lt(k=>({...k,password:c.target.value}))})]}),v("div",{css:ee,children:[v("label",{css:te(e),children:["Student ID ",Re?"":"*"]}),u("input",{type:"text",css:le(e),placeholder:"e.g. STU2024008",value:it.student_id,onChange:c=>lt(k=>({...k,student_id:c.target.value})),readOnly:!!Re})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:it.department,onChange:c=>lt(k=>({...k,department:c.target.value})),children:[u("option",{value:"",children:"Select department"}),T.map(c=>u("option",{value:c.name,children:c.name},c.id))]})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Degree"}),v("select",{css:le(e),value:it.degree,onChange:c=>lt(k=>({...k,degree:c.target.value})),children:[u("option",{value:"",children:"Select degree"}),Ho.map(c=>u("option",{value:c.code,children:c.name},c.id))]})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Year"}),v("select",{css:le(e),value:it.year,onChange:c=>lt(k=>({...k,year:c.target.value})),children:[u("option",{value:"",children:"Select year"}),qh.map(c=>u("option",{value:c,children:c},c))]})]})]}),v("div",{css:ni(e),children:[u("button",{type:"button",css:ri(e),onClick:Or,children:"Cancel"}),u("button",{type:"button",css:ii,onClick:Jh,disabled:jn,children:jn?"Saving...":Re?"Save Changes":"Add Student"})]})]})}),zh&&u("div",{css:Xr,onClick:_r,children:v("div",{css:Jr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:Mr(e),children:[u("h3",{css:qr(e),children:In?"Edit Lecturer":"Add Lecturer"}),u("button",{type:"button",css:ei(e),onClick:_r,"aria-label":"Close",children:u(Vr,{})})]}),v("div",{css:ti,children:[v("div",{css:ee,children:[u("label",{css:te(e),children:"Full Name *"}),u("input",{type:"text",css:le(e),placeholder:"e.g. Dr. Sarah Johnson",value:kr.full_name,onChange:c=>Fn(k=>({...k,full_name:c.target.value}))})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Email *"}),u("input",{type:"email",css:le(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:kr.email,onChange:c=>Fn(k=>({...k,email:c.target.value}))})]}),v("div",{css:ee,children:[v("label",{css:te(e),children:["Lecturer ID ",In?"":"*"]}),u("input",{type:"text",css:le(e),placeholder:"e.g. LEC001",value:kr.lecturer_id,onChange:c=>Fn(k=>({...k,lecturer_id:c.target.value})),readOnly:!!In})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:kr.department,onChange:c=>Fn(k=>({...k,department:c.target.value})),children:[u("option",{value:"",children:"Select department"}),T.map(c=>u("option",{value:c.name,children:c.name},c.id))]})]})]}),v("div",{css:ni(e),children:[u("button",{type:"button",css:ri(e),onClick:_r,children:"Cancel"}),u("button",{type:"button",css:ii,onClick:Dh,disabled:Iu,children:Iu?"Saving...":In?"Update Lecturer":"Add Lecturer"})]})]})}),Ih&&u("div",{css:Xr,onClick:Pr,children:v("div",{css:Jr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:Mr(e),children:[u("h3",{css:qr(e),children:$r?"Edit Course":"Add Course"}),u("button",{type:"button",css:ei(e),onClick:Pr,"aria-label":"Close",children:u(Vr,{})})]}),v("div",{css:ti,children:[v("div",{css:ee,children:[u("label",{css:te(e),children:"Course Code *"}),u("input",{type:"text",css:le(e),placeholder:"e.g. CS201",value:bt.course_code,onChange:c=>sn(k=>({...k,course_code:c.target.value})),readOnly:!!$r})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Course Name *"}),u("input",{type:"text",css:le(e),placeholder:"e.g. Data Structures and Algorithms",value:bt.course_name,onChange:c=>sn(k=>({...k,course_name:c.target.value}))})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:bt.department,onChange:c=>sn(k=>({...k,department:c.target.value})),children:[u("option",{value:"",children:"Select department"}),T.map(c=>u("option",{value:c.name,children:c.name},c.id))]})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Lecturer"}),v("select",{css:le(e),value:bt.lecturer_id,onChange:c=>sn(k=>({...k,lecturer_id:c.target.value})),children:[u("option",{value:"",children:"Select lecturer"}),q.filter(c=>!bt.department||(c.department||"")===bt.department).map(c=>u("option",{value:c.lecturer_id,children:c.full_name},c.id))]})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Credits"}),u("input",{type:"number",css:le(e),placeholder:"e.g. 4",value:bt.credits,onChange:c=>sn(k=>({...k,credits:Number(c.target.value)||0})),min:0})]})]}),v("div",{css:ni(e),children:[u("button",{type:"button",css:ri(e),onClick:Pr,children:"Cancel"}),u("button",{type:"button",css:ii,onClick:Uh,disabled:Vu,children:Vu?"Saving...":$r?"Update Course":"Add Course"})]})]})}),Hh&&u("div",{css:Xr,onClick:zr,children:v("div",{css:Jr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:Mr(e),children:[u("h3",{css:qr(e),children:Mi?"Edit Degree":"Add Degree"}),u("button",{type:"button",css:ei(e),onClick:zr,"aria-label":"Close",children:u(Vr,{})})]}),v("div",{css:ti,children:[v("div",{css:ee,children:[u("label",{css:te(e),children:"Code *"}),u("input",{type:"text",css:le(e),placeholder:"e.g. CS",value:Nr.code,onChange:c=>Bn(k=>({...k,code:c.target.value}))})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Name *"}),u("input",{type:"text",css:le(e),placeholder:"e.g. BSc Computer Science",value:Nr.name,onChange:c=>Bn(k=>({...k,name:c.target.value}))})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:Nr.department,onChange:c=>Bn(k=>({...k,department:c.target.value})),children:[u("option",{value:"",children:"Select department"}),T.map(c=>u("option",{value:c.name,children:c.name},c.id))]})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Description"}),u("textarea",{css:Id(e),placeholder:"Optional description",value:Nr.description,onChange:c=>Bn(k=>({...k,description:c.target.value}))})]})]}),v("div",{css:ni(e),children:[u("button",{type:"button",css:ri(e),onClick:zr,children:"Cancel"}),u("button",{type:"button",css:ii,onClick:Yh,disabled:Gu,children:Gu?"Saving...":Mi?"Update Degree":"Add Degree"})]})]})}),h&&u("div",{css:Xr,onClick:jr,children:v("div",{css:Jr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:Mr(e),children:[u("h3",{css:qr(e),children:C?"Edit Department":"Add New Department"}),u("button",{type:"button",css:ei(e),onClick:jr,"aria-label":"Close",children:u(Vr,{})})]}),v("div",{css:ti,children:[v("div",{css:ee,children:[u("label",{css:te(e),children:"Department Name"}),u("input",{type:"text",css:le(e),placeholder:"e.g. Newcastle Business School",value:x.name,onChange:c=>L(k=>({...k,name:c.target.value}))})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Department Code"}),u("input",{type:"text",css:le(e),placeholder:"e.g. NBS",value:x.code,onChange:c=>L(k=>({...k,code:c.target.value}))})]}),v("div",{css:ee,children:[u("label",{css:te(e),children:"Description"}),u("textarea",{css:Id(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:x.description,onChange:c=>L(k=>({...k,description:c.target.value}))})]})]}),v("div",{css:ni(e),children:[u("button",{type:"button",css:ri(e),onClick:jr,children:"Cancel"}),u("button",{type:"button",css:ii,onClick:nm,disabled:p,children:p?"Saving...":C?"Update Department":"Add Department"})]})]})})]})}const _2="/strack",Fd="strack_dark";function $2(){const[e,t]=w.useState(()=>{try{return localStorage.getItem(Fd)==="true"}catch{return!1}});w.useEffect(()=>{try{localStorage.setItem(Fd,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return pe.jsx(Ng,{basename:_2,children:pe.jsxs($g,{children:[pe.jsx(Vn,{path:"/",element:pe.jsx(Yv,{darkMode:e,onToggleDarkMode:n})}),pe.jsx(Vn,{path:"/dashboard",element:pe.jsx(Ly,{darkMode:e,onToggleDarkMode:n})}),pe.jsx(Vn,{path:"/lecturer",element:pe.jsx(Yy,{darkMode:e,onToggleDarkMode:n})}),pe.jsx(Vn,{path:"/admin",element:pe.jsx(E2,{darkMode:e,onToggleDarkMode:n})}),pe.jsx(Vn,{path:"*",element:pe.jsx(Eg,{to:"/",replace:!0})})]})})}Ps.createRoot(document.getElementById("root")).render(pe.jsx(Pt.StrictMode,{children:pe.jsx($2,{})}));
