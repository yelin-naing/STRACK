function dh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function ph(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rf={exports:{}},zi={},lf={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),hh=Symbol.for("react.portal"),mh=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),wh=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),kh=Symbol.for("react.memo"),Ch=Symbol.for("react.lazy"),wu=Symbol.iterator;function Eh(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,af={};function or(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||of}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uf(){}uf.prototype=or.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||of}var ra=na.prototype=new uf;ra.constructor=na;sf(ra,or.prototype);ra.isPureReactComponent=!0;var Su=Array.isArray,cf=Object.prototype.hasOwnProperty,la={current:null},ff={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)cf.call(t,r)&&!ff.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:dl,type:e,key:i,ref:o,props:l,_owner:la.current}}function _h(e,t){return{$$typeof:dl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===dl}function $h(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xu=/\/+/g;function co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$h(""+e.key):t.toString(36)}function Ul(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case dl:case hh:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+co(o,0):r,Su(l)?(n="",e!=null&&(n=e.replace(xu,"$&/")+"/"),Ul(l,t,n,"",function(u){return u})):l!=null&&(ia(l)&&(l=_h(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(xu,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Su(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+co(i,s);o+=Ul(i,t,n,a,l)}else if(a=Eh(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+co(i,s++),o+=Ul(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function kl(e,t,n){if(e==null)return e;var r=[],l=0;return Ul(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Ph(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Bl={transition:null},Lh={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:la};function pf(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:kl,forEach:function(e,t,n){kl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kl(e,function(){t++}),t},toArray:function(e){return kl(e,function(t){return t})||[]},only:function(e){if(!ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=or;A.Fragment=mh;A.Profiler=vh;A.PureComponent=na;A.StrictMode=gh;A.Suspense=xh;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh;A.act=pf;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sf({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=la.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)cf.call(t,a)&&!ff.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:dl,type:e.type,key:l,ref:i,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:wh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yh,_context:e},e.Consumer=e};A.createElement=df;A.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Sh,render:e}};A.isValidElement=ia;A.lazy=function(e){return{$$typeof:Ch,_payload:{_status:-1,_result:e},_init:Ph}};A.memo=function(e,t){return{$$typeof:kh,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Bl.transition;Bl.transition={};try{e()}finally{Bl.transition=t}};A.unstable_act=pf;A.useCallback=function(e,t){return Le.current.useCallback(e,t)};A.useContext=function(e){return Le.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};A.useEffect=function(e,t){return Le.current.useEffect(e,t)};A.useId=function(){return Le.current.useId()};A.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Le.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};A.useRef=function(e){return Le.current.useRef(e)};A.useState=function(e){return Le.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Le.current.useTransition()};A.version="18.3.1";lf.exports=A;var E=lf.exports;const Pt=ph(E),rs=dh({__proto__:null,default:Pt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=E,Th=Symbol.for("react.element"),zh=Symbol.for("react.fragment"),Oh=Object.prototype.hasOwnProperty,Rh=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jh={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Oh.call(t,r)&&!jh.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Th,type:e,key:i,ref:o,props:l,_owner:Rh.current}}zi.Fragment=zh;zi.jsx=hf;zi.jsxs=hf;rf.exports=zi;var ue=rf.exports,ls={},mf={exports:{}},Ye={},gf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var I=T.length;T.push(j);e:for(;0<I;){var Y=I-1>>>1,te=T[Y];if(0<l(te,j))T[Y]=j,T[I]=te,I=Y;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],I=T.pop();if(I!==j){T[0]=I;e:for(var Y=0,te=T.length,nn=te>>>1;Y<nn;){var rt=2*(Y+1)-1,$n=T[rt],ze=rt+1,Pn=T[ze];if(0>l($n,I))ze<te&&0>l(Pn,$n)?(T[Y]=Pn,T[ze]=I,Y=ze):(T[Y]=$n,T[rt]=I,Y=rt);else if(ze<te&&0>l(Pn,I))T[Y]=Pn,T[ze]=I,Y=ze;else break e}}return j}function l(T,j){var I=T.sortIndex-j.sortIndex;return I!==0?I:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],m=1,p=null,g=3,x=!1,k=!1,S=!1,$=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(u)}}function C(T){if(S=!1,h(T),!k)if(n(a)!==null)k=!0,En(L);else{var j=n(u);j!==null&&_n(C,j.startTime-T)}}function L(T,j){k=!1,S&&(S=!1,d(R),R=-1),x=!0;var I=g;try{for(h(j),p=n(a);p!==null&&(!(p.expirationTime>j)||T&&!_e());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var te=Y(p.expirationTime<=j);j=e.unstable_now(),typeof te=="function"?p.callback=te:p===n(a)&&r(a),h(j)}else r(a);p=n(a)}if(p!==null)var nn=!0;else{var rt=n(u);rt!==null&&_n(C,rt.startTime-j),nn=!1}return nn}finally{p=null,g=I,x=!1}}var N=!1,P=null,R=-1,G=5,D=-1;function _e(){return!(e.unstable_now()-D<G)}function Te(){if(P!==null){var T=e.unstable_now();D=T;var j=!0;try{j=P(!0,T)}finally{j?jt():(N=!1,P=null)}}else N=!1}var jt;if(typeof f=="function")jt=function(){f(Te)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,pt=dt.port2;dt.port1.onmessage=Te,jt=function(){pt.postMessage(null)}}else jt=function(){$(Te,0)};function En(T){P=T,N||(N=!0,jt())}function _n(T,j){R=$(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,En(L))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var I=g;g=j;try{return T()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=g;g=T;try{return j()}finally{g=I}},e.unstable_scheduleCallback=function(T,j,I){var Y=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Y+I:Y):I=Y,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=I+te,T={id:m++,callback:j,priorityLevel:T,startTime:I,expirationTime:te,sortIndex:-1},I>Y?(T.sortIndex=I,t(u,T),n(a)===null&&T===n(u)&&(S?(d(R),R=-1):S=!0,_n(C,I-Y))):(T.sortIndex=te,t(a,T),k||x||(k=!0,En(L))),T},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(T){var j=g;return function(){var I=g;g=j;try{return T.apply(this,arguments)}finally{g=I}}}})(vf);gf.exports=vf;var Ih=gf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=E,Ke=Ih;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yf=new Set,Vr={};function xn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Vr[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),is=Object.prototype.hasOwnProperty,Dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},Cu={};function Ah(e){return is.call(Cu,e)?!0:is.call(ku,e)?!1:Dh.test(e)?Cu[e]=!0:(ku[e]=!0,!1)}function bh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uh(e,t,n,r){if(t===null||typeof t>"u"||bh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oa,sa);we[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oa,sa);we[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oa,sa);we[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,t,n,r){var l=we.hasOwnProperty(t)?we[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uh(t,n,l,r)&&(n=null),r||l===null?Ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),ss=Symbol.for("react.suspense"),as=Symbol.for("react.suspense_list"),fa=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),xf=Symbol.for("react.offscreen"),Eu=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,fo;function Tr(e){if(fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fo=t&&t[1]||""}return`
`+fo+e}var po=!1;function ho(e,t){if(!e||po)return"";po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{po=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Bh(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=ho(e.type,!1),e;case 11:return e=ho(e.type.render,!1),e;case 1:return e=ho(e.type,!0),e;default:return""}}function us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Rn:return"Portal";case os:return"Profiler";case ua:return"StrictMode";case ss:return"Suspense";case as:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sf:return(e.displayName||"Context")+".Consumer";case wf:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fa:return t=e.displayName||null,t!==null?t:us(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return us(e(t))}catch{}}return null}function Wh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return us(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vh(e){var t=kf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function El(e){e._valueTracker||(e._valueTracker=Vh(e))}function Cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ef(e,t){t=t.checked,t!=null&&aa(e,"checked",t,!1)}function fs(e,t){Ef(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ds(e,t.type,n):t.hasOwnProperty("defaultValue")&&ds(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,t,n){(t!=="number"||ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(zr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function _f(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _l,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_l.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hh=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function Lf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function Nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Lf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qh=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ms(e,t){if(t){if(Qh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,Mn=null,Kn=null;function Nu(e){if(e=ml(e)){if(typeof ys!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Fi(t),ys(e.stateNode,e.type,t))}}function Tf(e){Mn?Kn?Kn.push(e):Kn=[e]:Mn=e}function zf(){if(Mn){var e=Mn,t=Kn;if(Kn=Mn=null,Nu(e),t)for(e=0;e<t.length;e++)Nu(t[e])}}function Of(e,t){return e(t)}function Rf(){}var mo=!1;function jf(e,t,n){if(mo)return e(t,n);mo=!0;try{return Of(e,t,n)}finally{mo=!1,(Mn!==null||Kn!==null)&&(Rf(),zf())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Fi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ws=!1;if(Nt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ws=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ws=!1}function Mh(e,t,n,r,l,i,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Ir=!1,li=null,ii=!1,Ss=null,Kh={onError:function(e){Ir=!0,li=e}};function Yh(e,t,n,r,l,i,o,s,a){Ir=!1,li=null,Mh.apply(Kh,arguments)}function Zh(e,t,n,r,l,i,o,s,a){if(Yh.apply(this,arguments),Ir){if(Ir){var u=li;Ir=!1,li=null}else throw Error(_(198));ii||(ii=!0,Ss=u)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function If(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tu(e){if(kn(e)!==e)throw Error(_(188))}function Gh(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Tu(l),e;if(i===r)return Tu(l),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ff(e){return e=Gh(e),e!==null?Df(e):null}function Df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Df(e);if(t!==null)return t;e=e.sibling}return null}var Af=Ke.unstable_scheduleCallback,zu=Ke.unstable_cancelCallback,Xh=Ke.unstable_shouldYield,Jh=Ke.unstable_requestPaint,re=Ke.unstable_now,qh=Ke.unstable_getCurrentPriorityLevel,pa=Ke.unstable_ImmediatePriority,bf=Ke.unstable_UserBlockingPriority,oi=Ke.unstable_NormalPriority,em=Ke.unstable_LowPriority,Uf=Ke.unstable_IdlePriority,Oi=null,wt=null;function tm(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Oi,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:lm,nm=Math.log,rm=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(nm(e)/rm|0)|0}var $l=64,Pl=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Or(s):(i&=o,i!==0&&(r=Or(i)))}else o=n&~l,o!==0?r=Or(o):i!==0&&(r=Or(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),l=1<<n,r|=e[n],t&=~l;return r}function im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function om(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-at(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=im(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bf(){var e=$l;return $l<<=1,!($l&4194240)&&($l=64),e}function go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function sm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-at(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function Wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vf,ma,Hf,Qf,Mf,ks=!1,Ll=[],Vt=null,Ht=null,Qt=null,Mr=new Map,Kr=new Map,At=[],am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function yr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ml(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function um(e,t,n,r,l){switch(t){case"focusin":return Vt=yr(Vt,e,t,n,r,l),!0;case"dragenter":return Ht=yr(Ht,e,t,n,r,l),!0;case"mouseover":return Qt=yr(Qt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Mr.set(i,yr(Mr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Kr.set(i,yr(Kr.get(i)||null,e,t,n,r,l)),!0}return!1}function Kf(e){var t=cn(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=If(n),t!==null){e.blockedOn=t,Mf(e.priority,function(){Hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vs=r,n.target.dispatchEvent(r),vs=null}else return t=ml(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function Ru(e,t,n){Wl(e)&&n.delete(t)}function cm(){ks=!1,Vt!==null&&Wl(Vt)&&(Vt=null),Ht!==null&&Wl(Ht)&&(Ht=null),Qt!==null&&Wl(Qt)&&(Qt=null),Mr.forEach(Ru),Kr.forEach(Ru)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,ks||(ks=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,cm)))}function Yr(e){function t(l){return wr(l,e)}if(0<Ll.length){wr(Ll[0],e);for(var n=1;n<Ll.length;n++){var r=Ll[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&wr(Vt,e),Ht!==null&&wr(Ht,e),Qt!==null&&wr(Qt,e),Mr.forEach(t),Kr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Kf(n),n.blockedOn===null&&At.shift()}var Yn=Rt.ReactCurrentBatchConfig,ai=!0;function fm(e,t,n,r){var l=W,i=Yn.transition;Yn.transition=null;try{W=1,ga(e,t,n,r)}finally{W=l,Yn.transition=i}}function dm(e,t,n,r){var l=W,i=Yn.transition;Yn.transition=null;try{W=4,ga(e,t,n,r)}finally{W=l,Yn.transition=i}}function ga(e,t,n,r){if(ai){var l=Cs(e,t,n,r);if(l===null)$o(e,t,r,ui,n),Ou(e,r);else if(um(l,e,t,n,r))r.stopPropagation();else if(Ou(e,r),t&4&&-1<am.indexOf(e)){for(;l!==null;){var i=ml(l);if(i!==null&&Vf(i),i=Cs(e,t,n,r),i===null&&$o(e,t,r,ui,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else $o(e,t,r,null,n)}}var ui=null;function Cs(e,t,n,r){if(ui=null,e=da(r),e=cn(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=If(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function Yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qh()){case pa:return 1;case bf:return 4;case oi:case em:return 16;case Uf:return 536870912;default:return 16}default:return 16}}var Ut=null,va=null,Vl=null;function Zf(){if(Vl)return Vl;var e,t=va,n=t.length,r,l="value"in Ut?Ut.value:Ut.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Vl=l.slice(e,1<r?1-r:void 0)}function Hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function ju(){return!1}function Ze(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nl:ju,this.isPropagationStopped=ju,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Ze(sr),hl=ee({},sr,{view:0,detail:0}),pm=Ze(hl),vo,yo,Sr,Ri=ee({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(vo=e.screenX-Sr.screenX,yo=e.screenY-Sr.screenY):yo=vo=0,Sr=e),vo)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),Iu=Ze(Ri),hm=ee({},Ri,{dataTransfer:0}),mm=Ze(hm),gm=ee({},hl,{relatedTarget:0}),wo=Ze(gm),vm=ee({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),ym=Ze(vm),wm=ee({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sm=Ze(wm),xm=ee({},sr,{data:0}),Fu=Ze(xm),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function wa(){return _m}var $m=ee({},hl,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=Ze($m),Lm=ee({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=Ze(Lm),Nm=ee({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),Tm=Ze(Nm),zm=ee({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Ze(zm),Rm=ee({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jm=Ze(Rm),Im=[9,13,27,32],Sa=Nt&&"CompositionEvent"in window,Fr=null;Nt&&"documentMode"in document&&(Fr=document.documentMode);var Fm=Nt&&"TextEvent"in window&&!Fr,Gf=Nt&&(!Sa||Fr&&8<Fr&&11>=Fr),Au=" ",bu=!1;function Xf(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Dm(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:(bu=!0,Au);case"textInput":return e=t.data,e===Au&&bu?null:e;default:return null}}function Am(e,t){if(In)return e==="compositionend"||!Sa&&Xf(e,t)?(e=Zf(),Vl=va=Ut=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function qf(e,t,n,r){Tf(r),t=ci(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Zr=null;function Um(e){cd(e,0)}function ji(e){var t=An(e);if(Cf(t))return e}function Bm(e,t){if(e==="change")return t}var ed=!1;if(Nt){var So;if(Nt){var xo="oninput"in document;if(!xo){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),xo=typeof Bu.oninput=="function"}So=xo}else So=!1;ed=So&&(!document.documentMode||9<document.documentMode)}function Wu(){Dr&&(Dr.detachEvent("onpropertychange",td),Zr=Dr=null)}function td(e){if(e.propertyName==="value"&&ji(Zr)){var t=[];qf(t,Zr,e,da(e)),jf(Um,t)}}function Wm(e,t,n){e==="focusin"?(Wu(),Dr=t,Zr=n,Dr.attachEvent("onpropertychange",td)):e==="focusout"&&Wu()}function Vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(Zr)}function Hm(e,t){if(e==="click")return ji(t)}function Qm(e,t){if(e==="input"||e==="change")return ji(t)}function Mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Mm;function Gr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!is.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vu(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rd(){for(var e=window,t=ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ri(e.document)}return t}function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Km(e){var t=rd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nd(n.ownerDocument.documentElement,n)){if(r!==null&&xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Hu(n,i);var o=Hu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ym=Nt&&"documentMode"in document&&11>=document.documentMode,Fn=null,Es=null,Ar=null,_s=!1;function Qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_s||Fn==null||Fn!==ri(r)||(r=Fn,"selectionStart"in r&&xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Gr(Ar,r)||(Ar=r,r=ci(Es,"onSelect"),0<r.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function Tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},ko={},ld={};Nt&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Ii(e){if(ko[e])return ko[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ld)return ko[e]=t[n];return e}var id=Ii("animationend"),od=Ii("animationiteration"),sd=Ii("animationstart"),ad=Ii("transitionend"),ud=new Map,Mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){ud.set(e,t),xn(t,[e])}for(var Co=0;Co<Mu.length;Co++){var Eo=Mu[Co],Zm=Eo.toLowerCase(),Gm=Eo[0].toUpperCase()+Eo.slice(1);qt(Zm,"on"+Gm)}qt(id,"onAnimationEnd");qt(od,"onAnimationIteration");qt(sd,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(ad,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zh(r,t,void 0,e),e.currentTarget=null}function cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;Ku(l,s,u),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;Ku(l,s,u),i=a}}}if(ii)throw e=Ss,ii=!1,Ss=null,e}function M(e,t){var n=t[Ts];n===void 0&&(n=t[Ts]=new Set);var r=e+"__bubble";n.has(r)||(fd(t,e,2,!1),n.add(r))}function _o(e,t,n){var r=0;t&&(r|=4),fd(n,e,r,t)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[zl]){e[zl]=!0,yf.forEach(function(n){n!=="selectionchange"&&(Xm.has(n)||_o(n,!1,e),_o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zl]||(t[zl]=!0,_o("selectionchange",!1,t))}}function fd(e,t,n,r){switch(Yf(t)){case 1:var l=fm;break;case 4:l=dm;break;default:l=ga}n=l.bind(null,t,n,e),l=void 0,!ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function $o(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=cn(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}jf(function(){var u=i,m=da(n),p=[];e:{var g=ud.get(e);if(g!==void 0){var x=ya,k=e;switch(e){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":x=Pm;break;case"focusin":k="focus",x=wo;break;case"focusout":k="blur",x=wo;break;case"beforeblur":case"afterblur":x=wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Tm;break;case id:case od:case sd:x=ym;break;case ad:x=Om;break;case"scroll":x=pm;break;case"wheel":x=jm;break;case"copy":case"cut":case"paste":x=Sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Du}var S=(t&4)!==0,$=!S&&e==="scroll",d=S?g!==null?g+"Capture":null:g;S=[];for(var f=u,h;f!==null;){h=f;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,d!==null&&(C=Qr(f,d),C!=null&&S.push(Jr(f,C,h)))),$)break;f=f.return}0<S.length&&(g=new x(g,k,null,n,m),p.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==vs&&(k=n.relatedTarget||n.fromElement)&&(cn(k)||k[Tt]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=u,k=k?cn(k):null,k!==null&&($=kn(k),k!==$||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=u),x!==k)){if(S=Iu,C="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=Du,C="onPointerLeave",d="onPointerEnter",f="pointer"),$=x==null?g:An(x),h=k==null?g:An(k),g=new S(C,f+"leave",x,n,m),g.target=$,g.relatedTarget=h,C=null,cn(m)===u&&(S=new S(d,f+"enter",k,n,m),S.target=h,S.relatedTarget=$,C=S),$=C,x&&k)t:{for(S=x,d=k,f=0,h=S;h;h=zn(h))f++;for(h=0,C=d;C;C=zn(C))h++;for(;0<f-h;)S=zn(S),f--;for(;0<h-f;)d=zn(d),h--;for(;f--;){if(S===d||d!==null&&S===d.alternate)break t;S=zn(S),d=zn(d)}S=null}else S=null;x!==null&&Yu(p,g,x,S,!1),k!==null&&$!==null&&Yu(p,$,k,S,!0)}}e:{if(g=u?An(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var L=Bm;else if(Uu(g))if(ed)L=Qm;else{L=Vm;var N=Wm}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=Hm);if(L&&(L=L(e,u))){qf(p,L,n,m);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&ds(g,"number",g.value)}switch(N=u?An(u):window,e){case"focusin":(Uu(N)||N.contentEditable==="true")&&(Fn=N,Es=u,Ar=null);break;case"focusout":Ar=Es=Fn=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,Qu(p,n,m);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":Qu(p,n,m)}var P;if(Sa)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else In?Xf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Gf&&n.locale!=="ko"&&(In||R!=="onCompositionStart"?R==="onCompositionEnd"&&In&&(P=Zf()):(Ut=m,va="value"in Ut?Ut.value:Ut.textContent,In=!0)),N=ci(u,R),0<N.length&&(R=new Fu(R,e,null,n,m),p.push({event:R,listeners:N}),P?R.data=P:(P=Jf(n),P!==null&&(R.data=P)))),(P=Fm?Dm(e,n):Am(e,n))&&(u=ci(u,"onBeforeInput"),0<u.length&&(m=new Fu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=P))}cd(p,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Qr(e,n),i!=null&&r.unshift(Jr(e,i,l)),i=Qr(e,t),i!=null&&r.push(Jr(e,i,l))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=Qr(n,i),a!=null&&o.unshift(Jr(n,a,s))):l||(a=Qr(n,i),a!=null&&o.push(Jr(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jm=/\r\n?/g,qm=/\u0000|\uFFFD/g;function Zu(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace(qm,"")}function Ol(e,t,n){if(t=Zu(t),Zu(e)!==t&&n)throw Error(_(425))}function fi(){}var $s=null,Ps=null;function Ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(n0)}:Ns;function n0(e){setTimeout(function(){throw e})}function Po(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Yr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),yt="__reactFiber$"+ar,qr="__reactProps$"+ar,Tt="__reactContainer$"+ar,Ts="__reactEvents$"+ar,r0="__reactListeners$"+ar,l0="__reactHandles$"+ar;function cn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xu(e);e!==null;){if(n=e[yt])return n;e=Xu(e)}return t}e=n,n=e.parentNode}return null}function ml(e){return e=e[yt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Fi(e){return e[qr]||null}var zs=[],bn=-1;function en(e){return{current:e}}function K(e){0>bn||(e.current=zs[bn],zs[bn]=null,bn--)}function H(e,t){bn++,zs[bn]=e.current,e.current=t}var Jt={},Ee=en(Jt),je=en(!1),gn=Jt;function qn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ie(e){return e=e.childContextTypes,e!=null}function di(){K(je),K(Ee)}function Ju(e,t,n){if(Ee.current!==Jt)throw Error(_(168));H(Ee,t),H(je,n)}function dd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,Wh(e)||"Unknown",l));return ee({},n,r)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,gn=Ee.current,H(Ee,e),H(je,je.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=dd(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,K(je),K(Ee),H(Ee,e)):K(je),H(je,n)}var Et=null,Di=!1,Lo=!1;function pd(e){Et===null?Et=[e]:Et.push(e)}function i0(e){Di=!0,pd(e)}function tn(){if(!Lo&&Et!==null){Lo=!0;var e=0,t=W;try{var n=Et;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,Di=!1}catch(l){throw Et!==null&&(Et=Et.slice(e+1)),Af(pa,tn),l}finally{W=t,Lo=!1}}return null}var Un=[],Bn=0,hi=null,mi=0,Xe=[],Je=0,vn=null,_t=1,$t="";function an(e,t){Un[Bn++]=mi,Un[Bn++]=hi,hi=e,mi=t}function hd(e,t,n){Xe[Je++]=_t,Xe[Je++]=$t,Xe[Je++]=vn,vn=e;var r=_t;e=$t;var l=32-at(r)-1;r&=~(1<<l),n+=1;var i=32-at(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,_t=1<<32-at(t)+l|n<<l|r,$t=i+e}else _t=1<<i|n<<l|r,$t=e}function ka(e){e.return!==null&&(an(e,1),hd(e,1,0))}function Ca(e){for(;e===hi;)hi=Un[--Bn],Un[Bn]=null,mi=Un[--Bn],Un[Bn]=null;for(;e===vn;)vn=Xe[--Je],Xe[Je]=null,$t=Xe[--Je],Xe[Je]=null,_t=Xe[--Je],Xe[Je]=null}var Qe=null,He=null,Z=!1,st=null;function md(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,He=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:_t,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,He=null,!0):!1;default:return!1}}function Os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rs(e){if(Z){var t=He;if(t){var n=t;if(!ec(e,t)){if(Os(e))throw Error(_(418));t=Mt(n.nextSibling);var r=Qe;t&&ec(e,t)?md(r,n):(e.flags=e.flags&-4097|2,Z=!1,Qe=e)}}else{if(Os(e))throw Error(_(418));e.flags=e.flags&-4097|2,Z=!1,Qe=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Rl(e){if(e!==Qe)return!1;if(!Z)return tc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ls(e.type,e.memoizedProps)),t&&(t=He)){if(Os(e))throw gd(),Error(_(418));for(;t;)md(e,t),t=Mt(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Qe?Mt(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=He;e;)e=Mt(e.nextSibling)}function er(){He=Qe=null,Z=!1}function Ea(e){st===null?st=[e]:st.push(e)}var o0=Rt.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function jl(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function vd(e){function t(d,f){if(e){var h=d.deletions;h===null?(d.deletions=[f],d.flags|=16):h.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function l(d,f){return d=Gt(d,f),d.index=0,d.sibling=null,d}function i(d,f,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<f?(d.flags|=2,f):h):(d.flags|=2,f)):(d.flags|=1048576,f)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,f,h,C){return f===null||f.tag!==6?(f=Io(h,d.mode,C),f.return=d,f):(f=l(f,h),f.return=d,f)}function a(d,f,h,C){var L=h.type;return L===jn?m(d,f,h.props.children,C,h.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ft&&nc(L)===f.type)?(C=l(f,h.props),C.ref=xr(d,f,h),C.return=d,C):(C=Xl(h.type,h.key,h.props,null,d.mode,C),C.ref=xr(d,f,h),C.return=d,C)}function u(d,f,h,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Fo(h,d.mode,C),f.return=d,f):(f=l(f,h.children||[]),f.return=d,f)}function m(d,f,h,C,L){return f===null||f.tag!==7?(f=hn(h,d.mode,C,L),f.return=d,f):(f=l(f,h),f.return=d,f)}function p(d,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Io(""+f,d.mode,h),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Cl:return h=Xl(f.type,f.key,f.props,null,d.mode,h),h.ref=xr(d,null,f),h.return=d,h;case Rn:return f=Fo(f,d.mode,h),f.return=d,f;case Ft:var C=f._init;return p(d,C(f._payload),h)}if(zr(f)||gr(f))return f=hn(f,d.mode,h,null),f.return=d,f;jl(d,f)}return null}function g(d,f,h,C){var L=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return L!==null?null:s(d,f,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Cl:return h.key===L?a(d,f,h,C):null;case Rn:return h.key===L?u(d,f,h,C):null;case Ft:return L=h._init,g(d,f,L(h._payload),C)}if(zr(h)||gr(h))return L!==null?null:m(d,f,h,C,null);jl(d,h)}return null}function x(d,f,h,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return d=d.get(h)||null,s(f,d,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Cl:return d=d.get(C.key===null?h:C.key)||null,a(f,d,C,L);case Rn:return d=d.get(C.key===null?h:C.key)||null,u(f,d,C,L);case Ft:var N=C._init;return x(d,f,h,N(C._payload),L)}if(zr(C)||gr(C))return d=d.get(h)||null,m(f,d,C,L,null);jl(f,C)}return null}function k(d,f,h,C){for(var L=null,N=null,P=f,R=f=0,G=null;P!==null&&R<h.length;R++){P.index>R?(G=P,P=null):G=P.sibling;var D=g(d,P,h[R],C);if(D===null){P===null&&(P=G);break}e&&P&&D.alternate===null&&t(d,P),f=i(D,f,R),N===null?L=D:N.sibling=D,N=D,P=G}if(R===h.length)return n(d,P),Z&&an(d,R),L;if(P===null){for(;R<h.length;R++)P=p(d,h[R],C),P!==null&&(f=i(P,f,R),N===null?L=P:N.sibling=P,N=P);return Z&&an(d,R),L}for(P=r(d,P);R<h.length;R++)G=x(P,d,R,h[R],C),G!==null&&(e&&G.alternate!==null&&P.delete(G.key===null?R:G.key),f=i(G,f,R),N===null?L=G:N.sibling=G,N=G);return e&&P.forEach(function(_e){return t(d,_e)}),Z&&an(d,R),L}function S(d,f,h,C){var L=gr(h);if(typeof L!="function")throw Error(_(150));if(h=L.call(h),h==null)throw Error(_(151));for(var N=L=null,P=f,R=f=0,G=null,D=h.next();P!==null&&!D.done;R++,D=h.next()){P.index>R?(G=P,P=null):G=P.sibling;var _e=g(d,P,D.value,C);if(_e===null){P===null&&(P=G);break}e&&P&&_e.alternate===null&&t(d,P),f=i(_e,f,R),N===null?L=_e:N.sibling=_e,N=_e,P=G}if(D.done)return n(d,P),Z&&an(d,R),L;if(P===null){for(;!D.done;R++,D=h.next())D=p(d,D.value,C),D!==null&&(f=i(D,f,R),N===null?L=D:N.sibling=D,N=D);return Z&&an(d,R),L}for(P=r(d,P);!D.done;R++,D=h.next())D=x(P,d,R,D.value,C),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?R:D.key),f=i(D,f,R),N===null?L=D:N.sibling=D,N=D);return e&&P.forEach(function(Te){return t(d,Te)}),Z&&an(d,R),L}function $(d,f,h,C){if(typeof h=="object"&&h!==null&&h.type===jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Cl:e:{for(var L=h.key,N=f;N!==null;){if(N.key===L){if(L=h.type,L===jn){if(N.tag===7){n(d,N.sibling),f=l(N,h.props.children),f.return=d,d=f;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ft&&nc(L)===N.type){n(d,N.sibling),f=l(N,h.props),f.ref=xr(d,N,h),f.return=d,d=f;break e}n(d,N);break}else t(d,N);N=N.sibling}h.type===jn?(f=hn(h.props.children,d.mode,C,h.key),f.return=d,d=f):(C=Xl(h.type,h.key,h.props,null,d.mode,C),C.ref=xr(d,f,h),C.return=d,d=C)}return o(d);case Rn:e:{for(N=h.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(d,f.sibling),f=l(f,h.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=Fo(h,d.mode,C),f.return=d,d=f}return o(d);case Ft:return N=h._init,$(d,f,N(h._payload),C)}if(zr(h))return k(d,f,h,C);if(gr(h))return S(d,f,h,C);jl(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(d,f.sibling),f=l(f,h),f.return=d,d=f):(n(d,f),f=Io(h,d.mode,C),f.return=d,d=f),o(d)):n(d,f)}return $}var tr=vd(!0),yd=vd(!1),gi=en(null),vi=null,Wn=null,_a=null;function $a(){_a=Wn=vi=null}function Pa(e){var t=gi.current;K(gi),e._currentValue=t}function js(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){vi=e,_a=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(vi===null)throw Error(_(308));Wn=e,vi.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var fn=null;function La(e){fn===null?fn=[e]:fn.push(e)}function wd(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,La(t)):(n.next=l.next,l.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,zt(e,n)}return l=r.interleaved,l===null?(t.next=t,La(r)):(t.next=l.next,l.next=t),r.interleaved=t,zt(e,n)}function Ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yi(e,t,n,r){var l=e.updateQueue;Dt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=a))}if(i!==null){var p=l.baseState;o=0,m=u=a=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,S=s;switch(g=t,x=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){p=k.call(x,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,g=typeof k=="function"?k.call(x,p,g):k,g==null)break e;p=ee({},p,g);break e;case 2:Dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=x,a=p):m=m.next=x,o|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(a=p),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);wn|=o,e.lanes=o,e.memoizedState=p}}function lc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var gl={},St=en(gl),el=en(gl),tl=en(gl);function dn(e){if(e===gl)throw Error(_(174));return e}function Ta(e,t){switch(H(tl,t),H(el,e),H(St,gl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hs(t,e)}K(St),H(St,t)}function nr(){K(St),K(el),K(tl)}function xd(e){dn(tl.current);var t=dn(St.current),n=hs(t,e.type);t!==n&&(H(el,e),H(St,n))}function za(e){el.current===e&&(K(St),K(el))}var J=en(0);function wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No=[];function Oa(){for(var e=0;e<No.length;e++)No[e]._workInProgressVersionPrimary=null;No.length=0}var Ml=Rt.ReactCurrentDispatcher,To=Rt.ReactCurrentBatchConfig,yn=0,q=null,ce=null,pe=null,Si=!1,br=!1,nl=0,s0=0;function Se(){throw Error(_(321))}function Ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function ja(e,t,n,r,l,i){if(yn=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ml.current=e===null||e.memoizedState===null?f0:d0,e=n(r,l),br){i=0;do{if(br=!1,nl=0,25<=i)throw Error(_(301));i+=1,pe=ce=null,t.updateQueue=null,Ml.current=p0,e=n(r,l)}while(br)}if(Ml.current=xi,t=ce!==null&&ce.next!==null,yn=0,pe=ce=q=null,Si=!1,t)throw Error(_(300));return e}function Ia(){var e=nl!==0;return nl=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?q.memoizedState=pe=e:pe=pe.next=e,pe}function nt(){if(ce===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?q.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(_(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?q.memoizedState=pe=e:pe=pe.next=e}return pe}function rl(e,t){return typeof t=="function"?t(e):t}function zo(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ce,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,u=i;do{var m=u.lane;if((yn&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,o=r):a=a.next=p,q.lanes|=m,wn|=m}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=s,ct(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,q.lanes|=i,wn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oo(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);ct(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function kd(){}function Cd(e,t){var n=q,r=nt(),l=t(),i=!ct(r.memoizedState,l);if(i&&(r.memoizedState=l,Re=!0),r=r.queue,Fa($d.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,ll(9,_d.bind(null,n,r,l,t),void 0,null),he===null)throw Error(_(349));yn&30||Ed(n,t,l)}return l}function Ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,r){t.value=n,t.getSnapshot=r,Pd(t)&&Ld(e)}function $d(e,t,n){return n(function(){Pd(t)&&Ld(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Ld(e){var t=zt(e,1);t!==null&&ut(t,e,1,-1)}function ic(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:e},t.queue=e,e=e.dispatch=c0.bind(null,q,e),[t.memoizedState,e]}function ll(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nd(){return nt().memoizedState}function Kl(e,t,n,r){var l=mt();q.flags|=e,l.memoizedState=ll(1|t,n,void 0,r===void 0?null:r)}function Ai(e,t,n,r){var l=nt();r=r===void 0?null:r;var i=void 0;if(ce!==null){var o=ce.memoizedState;if(i=o.destroy,r!==null&&Ra(r,o.deps)){l.memoizedState=ll(t,n,i,r);return}}q.flags|=e,l.memoizedState=ll(1|t,n,i,r)}function oc(e,t){return Kl(8390656,8,e,t)}function Fa(e,t){return Ai(2048,8,e,t)}function Td(e,t){return Ai(4,2,e,t)}function zd(e,t){return Ai(4,4,e,t)}function Od(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4,4,Od.bind(null,t,e),n)}function Da(){}function jd(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Id(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fd(e,t,n){return yn&21?(ct(n,t)||(n=Bf(),q.lanes|=n,wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function a0(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=To.transition;To.transition={};try{e(!1),t()}finally{W=n,To.transition=r}}function Dd(){return nt().memoizedState}function u0(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ad(e))bd(t,n);else if(n=wd(e,t,n,r),n!==null){var l=Pe();ut(n,e,r,l),Ud(n,t,r)}}function c0(e,t,n){var r=Zt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ad(e))bd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,ct(s,o)){var a=t.interleaved;a===null?(l.next=l,La(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=wd(e,t,l,r),n!==null&&(l=Pe(),ut(n,e,r,l),Ud(n,t,r))}}function Ad(e){var t=e.alternate;return e===q||t!==null&&t===q}function bd(e,t){br=Si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ud(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var xi={readContext:tt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},f0={readContext:tt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4194308,4,Od.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kl(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Da,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=a0.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,l=mt();if(Z){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),he===null)throw Error(_(349));yn&30||Ed(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,oc($d.bind(null,r,i,e),[e]),r.flags|=2048,ll(9,_d.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=mt(),t=he.identifierPrefix;if(Z){var n=$t,r=_t;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=s0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d0={readContext:tt,useCallback:jd,useContext:tt,useEffect:Fa,useImperativeHandle:Rd,useInsertionEffect:Td,useLayoutEffect:zd,useMemo:Id,useReducer:zo,useRef:Nd,useState:function(){return zo(rl)},useDebugValue:Da,useDeferredValue:function(e){var t=nt();return Fd(t,ce.memoizedState,e)},useTransition:function(){var e=zo(rl)[0],t=nt().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Cd,useId:Dd,unstable_isNewReconciler:!1},p0={readContext:tt,useCallback:jd,useContext:tt,useEffect:Fa,useImperativeHandle:Rd,useInsertionEffect:Td,useLayoutEffect:zd,useMemo:Id,useReducer:Oo,useRef:Nd,useState:function(){return Oo(rl)},useDebugValue:Da,useDeferredValue:function(e){var t=nt();return ce===null?t.memoizedState=e:Fd(t,ce.memoizedState,e)},useTransition:function(){var e=Oo(rl)[0],t=nt().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Cd,useId:Dd,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bi={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),l=Zt(e),i=Lt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,l),t!==null&&(ut(t,e,l,r),Ql(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),l=Zt(e),i=Lt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,l),t!==null&&(ut(t,e,l,r),Ql(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Zt(e),l=Lt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Kt(e,l,r),t!==null&&(ut(t,e,r,n),Ql(t,e,r))}};function sc(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(l,i):!0}function Bd(e,t,n){var r=!1,l=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(l=Ie(t)?gn:Ee.current,r=t.contextTypes,i=(r=r!=null)?qn(e,l):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bi.enqueueReplaceState(t,t.state,null)}function Fs(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Na(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=tt(i):(i=Ie(t)?gn:Ee.current,l.context=qn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Is(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&bi.enqueueReplaceState(l,l.state,null),yi(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=Bh(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ro(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function Wd(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ci||(Ci=!0,Ks=r),Ds(e,t)},n}function Vd(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ds(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ds(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new h0;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=L0.bind(null,e,t,n),t.then(e,e))}function cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var m0=Rt.ReactCurrentOwner,Re=!1;function $e(e,t,n,r){t.child=e===null?yd(t,null,n,r):tr(t,e.child,n,r)}function dc(e,t,n,r,l){n=n.render;var i=t.ref;return Zn(t,l),r=ja(e,t,n,r,i,l),n=Ia(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(Z&&n&&ka(t),t.flags|=1,$e(e,t,r,l),t.child)}function pc(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hd(e,t,i,r,l)):(e=Xl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(o,r)&&e.ref===t.ref)return Ot(e,t,l)}return t.flags|=1,e=Gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hd(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Ot(e,t,l)}return As(e,t,n,r,l)}function Qd(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Hn,Ve),Ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Hn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(Hn,Ve),Ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(Hn,Ve),Ve|=r;return $e(e,t,l,n),t.child}function Md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function As(e,t,n,r,l){var i=Ie(n)?gn:Ee.current;return i=qn(t,i),Zn(t,l),n=ja(e,t,n,r,i,l),r=Ia(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(Z&&r&&ka(t),t.flags|=1,$e(e,t,n,l),t.child)}function hc(e,t,n,r,l){if(Ie(n)){var i=!0;pi(t)}else i=!1;if(Zn(t,l),t.stateNode===null)Yl(e,t),Bd(t,n,r),Fs(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Ie(n)?gn:Ee.current,u=qn(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ac(t,o,r,u),Dt=!1;var g=t.memoizedState;o.state=g,yi(t,r,o,l),a=t.memoizedState,s!==r||g!==a||je.current||Dt?(typeof m=="function"&&(Is(t,n,m,r),a=t.memoizedState),(s=Dt||sc(t,n,s,r,g,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Sd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:it(t.type,s),o.props=u,p=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Ie(n)?gn:Ee.current,a=qn(t,a));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||g!==a)&&ac(t,o,r,a),Dt=!1,g=t.memoizedState,o.state=g,yi(t,r,o,l);var k=t.memoizedState;s!==p||g!==k||je.current||Dt?(typeof x=="function"&&(Is(t,n,x,r),k=t.memoizedState),(u=Dt||sc(t,n,u,r,g,k,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return bs(e,t,n,r,i,l)}function bs(e,t,n,r,l,i){Md(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&qu(t,n,!1),Ot(e,t,i);r=t.stateNode,m0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tr(t,e.child,null,i),t.child=tr(t,null,s,i)):$e(e,t,s,i),t.memoizedState=r.state,l&&qu(t,n,!0),t.child}function Kd(e){var t=e.stateNode;t.pendingContext?Ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ju(e,t.context,!1),Ta(e,t.containerInfo)}function mc(e,t,n,r,l){return er(),Ea(l),t.flags|=256,$e(e,t,n,r),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yd(e,t,n){var r=t.pendingProps,l=J.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(J,l&1),e===null)return Rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wi(o,r,0,null),e=hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bs(n),t.memoizedState=Us,e):Aa(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return g0(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Gt(s,i):(i=hn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Bs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Us,r}return i=e.child,e=i.sibling,r=Gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=Wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Il(e,t,n,r){return r!==null&&Ea(r),tr(t,e.child,null,n),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g0(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ro(Error(_(422))),Il(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Wi({mode:"visible",children:r.children},l,0,null),i=hn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tr(t,e.child,null,o),t.child.memoizedState=Bs(o),t.memoizedState=Us,i);if(!(t.mode&1))return Il(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Ro(i,r,void 0),Il(e,t,o,r)}if(s=(o&e.childLanes)!==0,Re||s){if(r=he,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,zt(e,l),ut(r,e,l,-1))}return Ha(),r=Ro(Error(_(421))),Il(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=N0.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,He=Mt(l.nextSibling),Qe=t,Z=!0,st=null,e!==null&&(Xe[Je++]=_t,Xe[Je++]=$t,Xe[Je++]=vn,_t=e.id,$t=e.overflow,vn=t),t=Aa(t,r.children),t.flags|=4096,t)}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),js(e.return,t,n)}function jo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Zd(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(J,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),jo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}jo(t,!0,n,null,i);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v0(e,t,n){switch(t.tag){case 3:Kd(t),er();break;case 5:xd(t);break;case 1:Ie(t.type)&&pi(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(gi,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Yd(e,t,n):(H(J,J.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);H(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Qd(e,t,n)}return Ot(e,t,n)}var Gd,Ws,Xd,Jd;Gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ws=function(){};Xd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,dn(St.current);var i=null;switch(n){case"input":l=cs(e,l),r=cs(e,r),i=[];break;case"select":l=ee({},l,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":l=ps(e,l),r=ps(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}ms(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&M("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Jd=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y0(e,t,n){var r=t.pendingProps;switch(Ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Ie(t.type)&&di(),xe(t),null;case 3:return r=t.stateNode,nr(),K(je),K(Ee),Oa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Gs(st),st=null))),Ws(e,t),xe(t),null;case 5:za(t);var l=dn(tl.current);if(n=t.type,e!==null&&t.stateNode!=null)Xd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return xe(t),null}if(e=dn(St.current),Rl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[yt]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<Rr.length;l++)M(Rr[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":_u(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":Pu(r,i),M("invalid",r)}ms(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ol(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ol(r.textContent,s,e),l=["children",""+s]):Vr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&M("scroll",r)}switch(n){case"input":El(r),$u(r,i,!0);break;case"textarea":El(r),Lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fi)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$f(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yt]=t,e[qr]=r,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(o=gs(n,r),n){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<Rr.length;l++)M(Rr[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":_u(e,r),l=cs(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ee({},r,{value:void 0}),M("invalid",e);break;case"textarea":Pu(e,r),l=ps(e,r),M("invalid",e);break;default:l=r}ms(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Nf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Pf(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hr(e,a):typeof a=="number"&&Hr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&M("scroll",e):a!=null&&aa(e,i,a,o))}switch(n){case"input":El(e),$u(e,r,!1);break;case"textarea":El(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Jd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=dn(tl.current),dn(St.current),Rl(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Ol(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ol(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return xe(t),null;case 13:if(K(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&He!==null&&t.mode&1&&!(t.flags&128))gd(),er(),t.flags|=98560,i=!1;else if(i=Rl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[yt]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else st!==null&&(Gs(st),st=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?fe===0&&(fe=3):Ha())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return nr(),Ws(e,t),e===null&&Xr(t.stateNode.containerInfo),xe(t),null;case 10:return Pa(t.type._context),xe(t),null;case 17:return Ie(t.type)&&di(),xe(t),null;case 19:if(K(J),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)kr(i,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=wi(e),o!==null){for(t.flags|=128,kr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>lr&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=wi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return xe(t),null}else 2*re()-i.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=J.current,H(J,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function w0(e,t){switch(Ca(t),t.tag){case 1:return Ie(t.type)&&di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),K(je),K(Ee),Oa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return za(t),null;case 13:if(K(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(J),null;case 4:return nr(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var Fl=!1,Ce=!1,S0=typeof WeakSet=="function"?WeakSet:Set,O=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Vs(e,t,n){try{n()}catch(r){ne(e,t,r)}}var vc=!1;function x0(e,t){if($s=ai,e=rd(),xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,u=0,m=0,p=e,g=null;t:for(;;){for(var x;p!==n||l!==0&&p.nodeType!==3||(s=o+l),p!==i||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)g=p,p=x;for(;;){if(p===e)break t;if(g===n&&++u===l&&(s=o),g===i&&++m===r&&(a=o),(x=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ps={focusedElem:e,selectionRange:n},ai=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,$=k.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:it(t.type,S),$);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(C){ne(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return k=vc,vc=!1,k}function Ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Vs(t,n,i)}l=l.next}while(l!==r)}}function Ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[qr],delete t[Ts],delete t[r0],delete t[l0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}function Ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ms(e,t,n),e=e.sibling;e!==null;)Ms(e,t,n),e=e.sibling}var ge=null,ot=!1;function It(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Oi,n)}catch{}switch(n.tag){case 5:Ce||Vn(n,t);case 6:var r=ge,l=ot;ge=null,It(e,t,n),ge=r,ot=l,ge!==null&&(ot?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(ot?(e=ge,n=n.stateNode,e.nodeType===8?Po(e.parentNode,n):e.nodeType===1&&Po(e,n),Yr(e)):Po(ge,n.stateNode));break;case 4:r=ge,l=ot,ge=n.stateNode.containerInfo,ot=!0,It(e,t,n),ge=r,ot=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Vs(n,t,o),l=l.next}while(l!==r)}It(e,t,n);break;case 1:if(!Ce&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,It(e,t,n),Ce=r):It(e,t,n);break;default:It(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new S0),t.forEach(function(r){var l=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,ot=!1;break e;case 3:ge=s.stateNode.containerInfo,ot=!0;break e;case 4:ge=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(ge===null)throw Error(_(160));tp(i,o,l),ge=null,ot=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){ne(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),ht(e),r&4){try{Ur(3,e,e.return),Ui(3,e)}catch(S){ne(e,e.return,S)}try{Ur(5,e,e.return)}catch(S){ne(e,e.return,S)}}break;case 1:lt(t,e),ht(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(lt(t,e),ht(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var l=e.stateNode;try{Hr(l,"")}catch(S){ne(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ef(l,i),gs(s,o);var u=gs(s,i);for(o=0;o<a.length;o+=2){var m=a[o],p=a[o+1];m==="style"?Nf(l,p):m==="dangerouslySetInnerHTML"?Pf(l,p):m==="children"?Hr(l,p):aa(l,m,p,u)}switch(s){case"input":fs(l,i);break;case"textarea":_f(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Qn(l,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qn(l,!!i.multiple,i.defaultValue,!0):Qn(l,!!i.multiple,i.multiple?[]:"",!1))}l[qr]=i}catch(S){ne(e,e.return,S)}}break;case 6:if(lt(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(S){ne(e,e.return,S)}}break;case 3:if(lt(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(S){ne(e,e.return,S)}break;case 4:lt(t,e),ht(e);break;case 13:lt(t,e),ht(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ba=re())),r&4&&wc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||m,lt(t,e),Ce=u):lt(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(O=e,m=e.child;m!==null;){for(p=O=m;O!==null;){switch(g=O,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ur(4,g,g.return);break;case 1:Vn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(S){ne(r,n,S)}}break;case 5:Vn(g,g.return);break;case 22:if(g.memoizedState!==null){xc(p);continue}}x!==null?(x.return=g,O=x):xc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Lf("display",o))}catch(S){ne(e,e.return,S)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){ne(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),ht(e),r&4&&wc(e);break;case 21:break;default:lt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ep(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hr(l,""),r.flags&=-33);var i=yc(e);Ms(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=yc(e);Qs(e,s,o);break;default:throw Error(_(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k0(e,t,n){O=e,rp(e)}function rp(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var l=O,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Fl;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||Ce;s=Fl;var u=Ce;if(Fl=o,(Ce=a)&&!u)for(O=l;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?kc(l):a!==null?(a.return=o,O=a):kc(l);for(;i!==null;)O=i,rp(i),i=i.sibling;O=l,Fl=s,Ce=u}Sc(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,O=i):Sc(e)}}function Sc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&lc(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Yr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ce||t.flags&512&&Hs(t)}catch(g){ne(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function xc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function kc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ui(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){ne(t,l,a)}}var i=t.return;try{Hs(t)}catch(a){ne(t,i,a)}break;case 5:var o=t.return;try{Hs(t)}catch(a){ne(t,o,a)}}}catch(a){ne(t,t.return,a)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var C0=Math.ceil,ki=Rt.ReactCurrentDispatcher,ba=Rt.ReactCurrentOwner,et=Rt.ReactCurrentBatchConfig,b=0,he=null,oe=null,ye=0,Ve=0,Hn=en(0),fe=0,il=null,wn=0,Bi=0,Ua=0,Br=null,Oe=null,Ba=0,lr=1/0,Ct=null,Ci=!1,Ks=null,Yt=null,Dl=!1,Bt=null,Ei=0,Wr=0,Ys=null,Zl=-1,Gl=0;function Pe(){return b&6?re():Zl!==-1?Zl:Zl=re()}function Zt(e){return e.mode&1?b&2&&ye!==0?ye&-ye:o0.transition!==null?(Gl===0&&(Gl=Bf()),Gl):(e=W,e!==0||(e=window.event,e=e===void 0?16:Yf(e.type)),e):1}function ut(e,t,n,r){if(50<Wr)throw Wr=0,Ys=null,Error(_(185));pl(e,n,r),(!(b&2)||e!==he)&&(e===he&&(!(b&2)&&(Bi|=n),fe===4&&bt(e,ye)),Fe(e,r),n===1&&b===0&&!(t.mode&1)&&(lr=re()+500,Di&&tn()))}function Fe(e,t){var n=e.callbackNode;om(e,t);var r=si(e,e===he?ye:0);if(r===0)n!==null&&zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zu(n),t===1)e.tag===0?i0(Cc.bind(null,e)):pd(Cc.bind(null,e)),t0(function(){!(b&6)&&tn()}),n=null;else{switch(Wf(r)){case 1:n=pa;break;case 4:n=bf;break;case 16:n=oi;break;case 536870912:n=Uf;break;default:n=oi}n=fp(n,lp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lp(e,t){if(Zl=-1,Gl=0,b&6)throw Error(_(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=si(e,e===he?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_i(e,r);else{t=r;var l=b;b|=2;var i=op();(he!==e||ye!==t)&&(Ct=null,lr=re()+500,pn(e,t));do try{$0();break}catch(s){ip(e,s)}while(!0);$a(),ki.current=i,b=l,oe!==null?t=0:(he=null,ye=0,t=fe)}if(t!==0){if(t===2&&(l=xs(e),l!==0&&(r=l,t=Zs(e,l))),t===1)throw n=il,pn(e,0),bt(e,r),Fe(e,re()),n;if(t===6)bt(e,r);else{if(l=e.current.alternate,!(r&30)&&!E0(l)&&(t=_i(e,r),t===2&&(i=xs(e),i!==0&&(r=i,t=Zs(e,i))),t===1))throw n=il,pn(e,0),bt(e,r),Fe(e,re()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:un(e,Oe,Ct);break;case 3:if(bt(e,r),(r&130023424)===r&&(t=Ba+500-re(),10<t)){if(si(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ns(un.bind(null,e,Oe,Ct),t);break}un(e,Oe,Ct);break;case 4:if(bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-at(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*C0(r/1960))-r,10<r){e.timeoutHandle=Ns(un.bind(null,e,Oe,Ct),r);break}un(e,Oe,Ct);break;case 5:un(e,Oe,Ct);break;default:throw Error(_(329))}}}return Fe(e,re()),e.callbackNode===n?lp.bind(null,e):null}function Zs(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=_i(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Gs(t)),e}function Gs(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function E0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!ct(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~Ua,t&=~Bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(b&6)throw Error(_(327));Gn();var t=si(e,0);if(!(t&1))return Fe(e,re()),null;var n=_i(e,t);if(e.tag!==0&&n===2){var r=xs(e);r!==0&&(t=r,n=Zs(e,r))}if(n===1)throw n=il,pn(e,0),bt(e,t),Fe(e,re()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Oe,Ct),Fe(e,re()),null}function Wa(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(lr=re()+500,Di&&tn())}}function Sn(e){Bt!==null&&Bt.tag===0&&!(b&6)&&Gn();var t=b;b|=1;var n=et.transition,r=W;try{if(et.transition=null,W=1,e)return e()}finally{W=r,et.transition=n,b=t,!(b&6)&&tn()}}function Va(){Ve=Hn.current,K(Hn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&di();break;case 3:nr(),K(je),K(Ee),Oa();break;case 5:za(r);break;case 4:nr();break;case 13:K(J);break;case 19:K(J);break;case 10:Pa(r.type._context);break;case 22:case 23:Va()}n=n.return}if(he=e,oe=e=Gt(e.current,null),ye=Ve=t,fe=0,il=null,Ua=Bi=wn=0,Oe=Br=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}fn=null}return e}function ip(e,t){do{var n=oe;try{if($a(),Ml.current=xi,Si){for(var r=q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Si=!1}if(yn=0,pe=ce=q=null,br=!1,nl=0,ba.current=null,n===null||n.return===null){fe=1,il=t,oe=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=ye,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=cc(o);if(x!==null){x.flags&=-257,fc(x,o,s,i,t),x.mode&1&&uc(i,u,t),t=x,a=u;var k=t.updateQueue;if(k===null){var S=new Set;S.add(a),t.updateQueue=S}else k.add(a);break e}else{if(!(t&1)){uc(i,u,t),Ha();break e}a=Error(_(426))}}else if(Z&&s.mode&1){var $=cc(o);if($!==null){!($.flags&65536)&&($.flags|=256),fc($,o,s,i,t),Ea(rr(a,s));break e}}i=a=rr(a,s),fe!==4&&(fe=2),Br===null?Br=[i]:Br.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Wd(i,a,t);rc(i,d);break e;case 1:s=a;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Yt===null||!Yt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=Vd(i,s,t);rc(i,C);break e}}i=i.return}while(i!==null)}ap(n)}catch(L){t=L,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function op(){var e=ki.current;return ki.current=xi,e===null?xi:e}function Ha(){(fe===0||fe===3||fe===2)&&(fe=4),he===null||!(wn&268435455)&&!(Bi&268435455)||bt(he,ye)}function _i(e,t){var n=b;b|=2;var r=op();(he!==e||ye!==t)&&(Ct=null,pn(e,t));do try{_0();break}catch(l){ip(e,l)}while(!0);if($a(),b=n,ki.current=r,oe!==null)throw Error(_(261));return he=null,ye=0,fe}function _0(){for(;oe!==null;)sp(oe)}function $0(){for(;oe!==null&&!Xh();)sp(oe)}function sp(e){var t=cp(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?ap(e):oe=t,ba.current=null}function ap(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w0(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,oe=null;return}}else if(n=y0(n,t,Ve),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);fe===0&&(fe=5)}function un(e,t,n){var r=W,l=et.transition;try{et.transition=null,W=1,P0(e,t,n,r)}finally{et.transition=l,W=r}return null}function P0(e,t,n,r){do Gn();while(Bt!==null);if(b&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(sm(e,i),e===he&&(oe=he=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,fp(oi,function(){return Gn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var o=W;W=1;var s=b;b|=4,ba.current=null,x0(e,n),np(n,e),Km(Ps),ai=!!$s,Ps=$s=null,e.current=n,k0(n),Jh(),b=s,W=o,et.transition=i}else e.current=n;if(Dl&&(Dl=!1,Bt=e,Ei=l),i=e.pendingLanes,i===0&&(Yt=null),tm(n.stateNode),Fe(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ci)throw Ci=!1,e=Ks,Ks=null,e;return Ei&1&&e.tag!==0&&Gn(),i=e.pendingLanes,i&1?e===Ys?Wr++:(Wr=0,Ys=e):Wr=0,tn(),null}function Gn(){if(Bt!==null){var e=Wf(Ei),t=et.transition,n=W;try{if(et.transition=null,W=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,Ei=0,b&6)throw Error(_(331));var l=b;for(b|=4,O=e.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(O=u;O!==null;){var m=O;switch(m.tag){case 0:case 11:case 15:Ur(8,m,i)}var p=m.child;if(p!==null)p.return=m,O=p;else for(;O!==null;){m=O;var g=m.sibling,x=m.return;if(qd(m),m===u){O=null;break}if(g!==null){g.return=x,O=g;break}O=x}}}var k=i.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var $=S.sibling;S.sibling=null,S=$}while(S!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ur(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,O=d;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){o=O;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,O=h;else e:for(o=f;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ui(9,s)}}catch(L){ne(s,s.return,L)}if(s===o){O=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,O=C;break e}O=s.return}}if(b=l,tn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Oi,e)}catch{}r=!0}return r}finally{W=n,et.transition=t}}return!1}function Ec(e,t,n){t=rr(n,t),t=Wd(e,t,1),e=Kt(e,t,1),t=Pe(),e!==null&&(pl(e,1,t),Fe(e,t))}function ne(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=rr(n,e),e=Vd(t,e,1),t=Kt(t,e,1),e=Pe(),t!==null&&(pl(t,1,e),Fe(t,e));break}}t=t.return}}function L0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ye&n)===n&&(fe===4||fe===3&&(ye&130023424)===ye&&500>re()-Ba?pn(e,0):Ua|=n),Fe(e,t)}function up(e,t){t===0&&(e.mode&1?(t=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):t=1);var n=Pe();e=zt(e,t),e!==null&&(pl(e,t,n),Fe(e,n))}function N0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),up(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),up(e,n)}var cp;cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,v0(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&hd(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yl(e,t),e=t.pendingProps;var l=qn(t,Ee.current);Zn(t,n),l=ja(null,t,r,e,l,n);var i=Ia();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,pi(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Na(t),l.updater=bi,t.stateNode=l,l._reactInternals=t,Fs(t,r,e,n),t=bs(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&ka(t),$e(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=O0(r),e=it(r,e),l){case 0:t=As(null,t,r,e,n);break e;case 1:t=hc(null,t,r,e,n);break e;case 11:t=dc(null,t,r,e,n);break e;case 14:t=pc(null,t,r,it(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),As(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),hc(e,t,r,l,n);case 3:e:{if(Kd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Sd(e,t),yi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rr(Error(_(423)),t),t=mc(e,t,r,n,l);break e}else if(r!==l){l=rr(Error(_(424)),t),t=mc(e,t,r,n,l);break e}else for(He=Mt(t.stateNode.containerInfo.firstChild),Qe=t,Z=!0,st=null,n=yd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===l){t=Ot(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return xd(t),e===null&&Rs(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ls(r,l)?o=null:i!==null&&Ls(r,i)&&(t.flags|=32),Md(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&Rs(t),null;case 13:return Yd(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),dc(e,t,r,l,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,H(gi,r._currentValue),r._currentValue=o,i!==null)if(ct(i.value,o)){if(i.children===l.children&&!je.current){t=Ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Lt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),js(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),js(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}$e(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zn(t,n),l=tt(l),r=r(l),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,l=it(r,t.pendingProps),l=it(r.type,l),pc(e,t,r,l,n);case 15:return Hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),Yl(e,t),t.tag=1,Ie(r)?(e=!0,pi(t)):e=!1,Zn(t,n),Bd(t,r,l),Fs(t,r,l,n),bs(null,t,r,!0,e,n);case 19:return Zd(e,t,n);case 22:return Qd(e,t,n)}throw Error(_(156,t.tag))};function fp(e,t){return Af(e,t)}function z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new z0(e,t,n,r)}function Qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O0(e){if(typeof e=="function")return Qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===fa)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Qa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jn:return hn(n.children,l,i,t);case ua:o=8,l|=8;break;case os:return e=qe(12,n,t,l|2),e.elementType=os,e.lanes=i,e;case ss:return e=qe(13,n,t,l),e.elementType=ss,e.lanes=i,e;case as:return e=qe(19,n,t,l),e.elementType=as,e.lanes=i,e;case xf:return Wi(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wf:o=10;break e;case Sf:o=9;break e;case ca:o=11;break e;case fa:o=14;break e;case Ft:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=qe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function hn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Wi(e,t,n,r){return e=qe(22,e,r,t),e.elementType=xf,e.lanes=n,e.stateNode={isHidden:!1},e}function Io(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Fo(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function R0(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=go(0),this.expirationTimes=go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ma(e,t,n,r,l,i,o,s,a){return e=new R0(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(i),e}function j0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dp(e){if(!e)return Jt;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ie(n))return dd(e,n,t)}return t}function pp(e,t,n,r,l,i,o,s,a){return e=Ma(n,r,!0,e,l,i,o,s,a),e.context=dp(null),n=e.current,r=Pe(),l=Zt(n),i=Lt(r,l),i.callback=t??null,Kt(n,i,l),e.current.lanes=l,pl(e,l,r),Fe(e,r),e}function Vi(e,t,n,r){var l=t.current,i=Pe(),o=Zt(l);return n=dp(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(l,t,o),e!==null&&(ut(e,l,o,i),Ql(e,l,o)),o}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ka(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function I0(){return null}var hp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ya(e){this._internalRoot=e}Hi.prototype.render=Ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Vi(e,t,null,null)};Hi.prototype.unmount=Ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Vi(null,e,null,null)}),t[Tt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Kf(e)}};function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function F0(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=$i(o);i.call(u)}}var o=pp(t,r,e,0,null,!1,!1,"",$c);return e._reactRootContainer=o,e[Tt]=o.current,Xr(e.nodeType===8?e.parentNode:e),Sn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=$i(a);s.call(u)}}var a=Ma(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=a,e[Tt]=a.current,Xr(e.nodeType===8?e.parentNode:e),Sn(function(){Vi(t,a,n,r)}),a}function Mi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=$i(o);s.call(a)}}Vi(t,o,e,l)}else o=F0(n,t,e,l,r);return $i(o)}Vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Or(t.pendingLanes);n!==0&&(ha(t,n|1),Fe(t,re()),!(b&6)&&(lr=re()+500,tn()))}break;case 13:Sn(function(){var r=zt(e,1);if(r!==null){var l=Pe();ut(r,e,1,l)}}),Ka(e,1)}};ma=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Pe();ut(t,e,134217728,n)}Ka(e,134217728)}};Hf=function(e){if(e.tag===13){var t=Zt(e),n=zt(e,t);if(n!==null){var r=Pe();ut(n,e,t,r)}Ka(e,t)}};Qf=function(){return W};Mf=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};ys=function(e,t,n){switch(t){case"input":if(fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Fi(r);if(!l)throw Error(_(90));Cf(r),fs(r,l)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};Of=Wa;Rf=Sn;var D0={usingClientEntryPoint:!1,Events:[ml,An,Fi,Tf,zf,Wa]},Cr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ff(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Oi=Al.inject(A0),wt=Al}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(t))throw Error(_(200));return j0(e,t,null,n)};Ye.createRoot=function(e,t){if(!Za(e))throw Error(_(299));var n=!1,r="",l=hp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ma(e,1,!1,null,null,n,!1,r,l),e[Tt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new Ya(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ff(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Sn(e)};Ye.hydrate=function(e,t,n){if(!Qi(t))throw Error(_(200));return Mi(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Za(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=hp;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pp(t,null,e,1,n??null,l,!1,i,o),e[Tt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Hi(t)};Ye.render=function(e,t,n){if(!Qi(t))throw Error(_(200));return Mi(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Qi(e))throw Error(_(40));return e._reactRootContainer?(Sn(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Wa;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Mi(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp)}catch(e){console.error(e)}}mp(),mf.exports=Ye;var b0=mf.exports,Pc=b0;ls.createRoot=Pc.createRoot,ls.hydrateRoot=Pc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ol.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const Lc="popstate";function U0(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:s}=r.location;return Xs("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:gp(l)}return W0(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ga(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function B0(){return Math.random().toString(36).substr(2,8)}function Nc(e,t){return{usr:e.state,key:e.key,idx:t}}function Xs(e,t,n,r){return n===void 0&&(n=null),ol({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ur(t):t,{state:n,key:t&&t.key||r||B0()})}function gp(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function W0(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=Wt.Pop,a=null,u=m();u==null&&(u=0,o.replaceState(ol({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function p(){s=Wt.Pop;let $=m(),d=$==null?null:$-u;u=$,a&&a({action:s,location:S.location,delta:d})}function g($,d){s=Wt.Push;let f=Xs(S.location,$,d);u=m()+1;let h=Nc(f,u),C=S.createHref(f);try{o.pushState(h,"",C)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(C)}i&&a&&a({action:s,location:S.location,delta:1})}function x($,d){s=Wt.Replace;let f=Xs(S.location,$,d);u=m();let h=Nc(f,u),C=S.createHref(f);o.replaceState(h,"",C),i&&a&&a({action:s,location:S.location,delta:0})}function k($){let d=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof $=="string"?$:gp($);return f=f.replace(/ $/,"%20"),se(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let S={get action(){return s},get location(){return e(l,o)},listen($){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Lc,p),a=$,()=>{l.removeEventListener(Lc,p),a=null}},createHref($){return t(l,$)},createURL:k,encodeLocation($){let d=k($);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:x,go($){return o.go($)}};return S}var Tc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tc||(Tc={}));function V0(e,t,n){return n===void 0&&(n="/"),H0(e,t,n)}function H0(e,t,n,r){let l=typeof t=="string"?ur(t):t,i=wp(l.pathname||"/",n);if(i==null)return null;let o=vp(e);Q0(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let u=r1(i);s=e1(o[a],u)}return s}function vp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=mn([r,a.relativePath]),m=n.concat(a);i.children&&i.children.length>0&&(se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vp(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:J0(u,i.index),routesMeta:m})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of yp(i.path))l(i,o,a)}),t}function yp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=yp(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Q0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M0=/^:[\w-]+$/,K0=3,Y0=2,Z0=1,G0=10,X0=-2,zc=e=>e==="*";function J0(e,t){let n=e.split("/"),r=n.length;return n.some(zc)&&(r+=X0),t&&(r+=Y0),n.filter(l=>!zc(l)).reduce((l,i)=>l+(M0.test(i)?K0:i===""?Z0:G0),r)}function q0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function e1(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=t1({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},m),g=a.route;if(!p)return null;Object.assign(l,p.params),o.push({params:l,pathname:mn([i,p.pathname]),pathnameBase:a1(mn([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=mn([i,p.pathnameBase]))}return o}function t1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=n1(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,m,p)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let S=s[p]||"";o=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const k=s[p];return x&&!k?u[g]=void 0:u[g]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function n1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ga(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function r1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ga(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const l1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,i1=e=>l1.test(e);function o1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?ur(e):e,i;if(n)if(i1(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Ga(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Oc(n.substring(1),"/"):i=Oc(n,t)}else i=t;return{pathname:i,search:u1(r),hash:c1(l)}}function Oc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Do(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sp(e,t){let n=s1(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xp(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=ur(e):(l=ol({},e),se(!l.pathname||!l.pathname.includes("?"),Do("?","pathname","search",l)),se(!l.pathname||!l.pathname.includes("#"),Do("#","pathname","hash",l)),se(!l.search||!l.search.includes("#"),Do("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;l.pathname=g.join("/")}s=p>=0?t[p]:"/"}let a=o1(l,s),u=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||m)&&(a.pathname+="/"),a}const mn=e=>e.join("/").replace(/\/\/+/g,"/"),a1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),u1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,c1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function f1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kp=["post","put","patch","delete"];new Set(kp);const d1=["get",...kp];new Set(d1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}const Xa=E.createContext(null),p1=E.createContext(null),vl=E.createContext(null),Ki=E.createContext(null),Cn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Cp=E.createContext(null);function yl(){return E.useContext(Ki)!=null}function Ja(){return yl()||se(!1),E.useContext(Ki).location}function Ep(e){E.useContext(vl).static||E.useLayoutEffect(e)}function Yi(){let{isDataRoute:e}=E.useContext(Cn);return e?$1():h1()}function h1(){yl()||se(!1);let e=E.useContext(Xa),{basename:t,future:n,navigator:r}=E.useContext(vl),{matches:l}=E.useContext(Cn),{pathname:i}=Ja(),o=JSON.stringify(Sp(l,n.v7_relativeSplatPath)),s=E.useRef(!1);return Ep(()=>{s.current=!0}),E.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=xp(u,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:mn([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,o,i,e])}function m1(e,t){return g1(e,t)}function g1(e,t,n,r){yl()||se(!1);let{navigator:l}=E.useContext(vl),{matches:i}=E.useContext(Cn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Ja(),m;if(t){var p;let $=typeof t=="string"?ur(t):t;a==="/"||(p=$.pathname)!=null&&p.startsWith(a)||se(!1),m=$}else m=u;let g=m.pathname||"/",x=g;if(a!=="/"){let $=a.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice($.length).join("/")}let k=V0(e,{pathname:x}),S=x1(k&&k.map($=>Object.assign({},$,{params:Object.assign({},s,$.params),pathname:mn([a,l.encodeLocation?l.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?a:mn([a,l.encodeLocation?l.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&S?E.createElement(Ki.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Wt.Pop}},S):S}function v1(){let e=_1(),t=f1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:l},n):null,null)}const y1=E.createElement(v1,null);class w1 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Cn.Provider,{value:this.props.routeContext},E.createElement(Cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S1(e){let{routeContext:t,match:n,children:r}=e,l=E.useContext(Xa);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Cn.Provider,{value:t},r)}function x1(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let m=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||se(!1),o=o.slice(0,Math.min(o.length,m+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:g,errors:x}=n,k=p.route.loader&&g[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||k){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,p,g)=>{let x,k=!1,S=null,$=null;n&&(x=s&&p.route.id?s[p.route.id]:void 0,S=p.route.errorElement||y1,a&&(u<0&&g===0?(P1("route-fallback"),k=!0,$=null):u===g&&(k=!0,$=p.route.hydrateFallbackElement||null)));let d=t.concat(o.slice(0,g+1)),f=()=>{let h;return x?h=S:k?h=$:p.route.Component?h=E.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,E.createElement(S1,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?E.createElement(w1,{location:n.location,revalidation:n.revalidation,component:S,error:x,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var _p=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_p||{}),$p=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($p||{});function k1(e){let t=E.useContext(Xa);return t||se(!1),t}function C1(e){let t=E.useContext(p1);return t||se(!1),t}function E1(e){let t=E.useContext(Cn);return t||se(!1),t}function Pp(e){let t=E1(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function _1(){var e;let t=E.useContext(Cp),n=C1(),r=Pp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $1(){let{router:e}=k1(_p.UseNavigateStable),t=Pp($p.UseNavigateStable),n=E.useRef(!1);return Ep(()=>{n.current=!0}),E.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,sl({fromRouteId:t},i)))},[e,t])}const Rc={};function P1(e,t,n){Rc[e]||(Rc[e]=!0)}function L1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function N1(e){let{to:t,replace:n,state:r,relative:l}=e;yl()||se(!1);let{future:i,static:o}=E.useContext(vl),{matches:s}=E.useContext(Cn),{pathname:a}=Ja(),u=Yi(),m=xp(t,Sp(s,i.v7_relativeSplatPath),a,l==="path"),p=JSON.stringify(m);return E.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:l}),[u,p,l,n,r]),null}function On(e){se(!1)}function T1(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Wt.Pop,navigator:i,static:o=!1,future:s}=e;yl()&&se(!1);let a=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:i,static:o,future:sl({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=ur(r));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:k="default"}=r,S=E.useMemo(()=>{let $=wp(m,a);return $==null?null:{location:{pathname:$,search:p,hash:g,state:x,key:k},navigationType:l}},[a,m,p,g,x,k,l]);return S==null?null:E.createElement(vl.Provider,{value:u},E.createElement(Ki.Provider,{children:n,value:S}))}function z1(e){let{children:t,location:n}=e;return m1(Js(t),n)}new Promise(()=>{});function Js(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,l)=>{if(!E.isValidElement(r))return;let i=[...t,l];if(r.type===E.Fragment){n.push.apply(n,Js(r.props.children,i));return}r.type!==On&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Js(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const O1="6";try{window.__reactRouterVersion=O1}catch{}const R1="startTransition",jc=rs[R1];function j1(e){let{basename:t,children:n,future:r,window:l}=e,i=E.useRef();i.current==null&&(i.current=U0({window:l,v5Compat:!0}));let o=i.current,[s,a]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=E.useCallback(p=>{u&&jc?jc(()=>a(p)):a(p)},[a,u]);return E.useLayoutEffect(()=>o.listen(m),[o,m]),E.useEffect(()=>L1(r),[r]),E.createElement(T1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Ic;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ic||(Ic={}));var Fc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fc||(Fc={}));function I1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function F1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var D1=function(){function e(n){var r=this;this._insertTag=function(l){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(l,i),r.tags.push(l)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(F1(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var i=I1(l);try{i.insertRule(r,i.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var l;return(l=r.parentNode)==null?void 0:l.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ke="-ms-",Pi="-moz-",U="-webkit-",Lp="comm",qa="rule",eu="decl",A1="@import",Np="@keyframes",b1="@layer",U1=Math.abs,Zi=String.fromCharCode,B1=Object.assign;function W1(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function Tp(e){return e.trim()}function V1(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function qs(e,t){return e.indexOf(t)}function ve(e,t){return e.charCodeAt(t)|0}function al(e,t,n){return e.slice(t,n)}function gt(e){return e.length}function tu(e){return e.length}function bl(e,t){return t.push(e),e}function H1(e,t){return e.map(t).join("")}var Gi=1,ir=1,zp=0,De=0,ie=0,cr="";function Xi(e,t,n,r,l,i,o){return{value:e,root:t,parent:n,type:r,props:l,children:i,line:Gi,column:ir,length:o,return:""}}function Er(e,t){return B1(Xi("",null,null,"",null,null,0),e,{length:-e.length},t)}function Q1(){return ie}function M1(){return ie=De>0?ve(cr,--De):0,ir--,ie===10&&(ir=1,Gi--),ie}function Me(){return ie=De<zp?ve(cr,De++):0,ir++,ie===10&&(ir=1,Gi++),ie}function xt(){return ve(cr,De)}function Jl(){return De}function wl(e,t){return al(cr,e,t)}function ul(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Op(e){return Gi=ir=1,zp=gt(cr=e),De=0,[]}function Rp(e){return cr="",e}function ql(e){return Tp(wl(De-1,ea(e===91?e+2:e===40?e+1:e)))}function K1(e){for(;(ie=xt())&&ie<33;)Me();return ul(e)>2||ul(ie)>3?"":" "}function Y1(e,t){for(;--t&&Me()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return wl(e,Jl()+(t<6&&xt()==32&&Me()==32))}function ea(e){for(;Me();)switch(ie){case e:return De;case 34:case 39:e!==34&&e!==39&&ea(ie);break;case 40:e===41&&ea(e);break;case 92:Me();break}return De}function Z1(e,t){for(;Me()&&e+ie!==57;)if(e+ie===84&&xt()===47)break;return"/*"+wl(t,De-1)+"*"+Zi(e===47?e:Me())}function G1(e){for(;!ul(xt());)Me();return wl(e,De)}function X1(e){return Rp(ei("",null,null,null,[""],e=Op(e),0,[0],e))}function ei(e,t,n,r,l,i,o,s,a){for(var u=0,m=0,p=o,g=0,x=0,k=0,S=1,$=1,d=1,f=0,h="",C=l,L=i,N=r,P=h;$;)switch(k=f,f=Me()){case 40:if(k!=108&&ve(P,p-1)==58){qs(P+=B(ql(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:P+=ql(f);break;case 9:case 10:case 13:case 32:P+=K1(k);break;case 92:P+=Y1(Jl()-1,7);continue;case 47:switch(xt()){case 42:case 47:bl(J1(Z1(Me(),Jl()),t,n),a);break;default:P+="/"}break;case 123*S:s[u++]=gt(P)*d;case 125*S:case 59:case 0:switch(f){case 0:case 125:$=0;case 59+m:d==-1&&(P=B(P,/\f/g,"")),x>0&&gt(P)-p&&bl(x>32?Ac(P+";",r,n,p-1):Ac(B(P," ","")+";",r,n,p-2),a);break;case 59:P+=";";default:if(bl(N=Dc(P,t,n,u,m,l,s,h,C=[],L=[],p),i),f===123)if(m===0)ei(P,t,N,N,C,i,p,s,L);else switch(g===99&&ve(P,3)===110?100:g){case 100:case 108:case 109:case 115:ei(e,N,N,r&&bl(Dc(e,N,N,0,0,l,s,h,l,C=[],p),L),l,L,p,s,r?C:L);break;default:ei(P,N,N,N,[""],L,0,s,L)}}u=m=x=0,S=d=1,h=P="",p=o;break;case 58:p=1+gt(P),x=k;default:if(S<1){if(f==123)--S;else if(f==125&&S++==0&&M1()==125)continue}switch(P+=Zi(f),f*S){case 38:d=m>0?1:(P+="\f",-1);break;case 44:s[u++]=(gt(P)-1)*d,d=1;break;case 64:xt()===45&&(P+=ql(Me())),g=xt(),m=p=gt(h=P+=G1(Jl())),f++;break;case 45:k===45&&gt(P)==2&&(S=0)}}return i}function Dc(e,t,n,r,l,i,o,s,a,u,m){for(var p=l-1,g=l===0?i:[""],x=tu(g),k=0,S=0,$=0;k<r;++k)for(var d=0,f=al(e,p+1,p=U1(S=o[k])),h=e;d<x;++d)(h=Tp(S>0?g[d]+" "+f:B(f,/&\f/g,g[d])))&&(a[$++]=h);return Xi(e,t,n,l===0?qa:s,a,u,m)}function J1(e,t,n){return Xi(e,t,n,Lp,Zi(Q1()),al(e,2,-2),0)}function Ac(e,t,n,r){return Xi(e,t,n,eu,al(e,0,r),al(e,r+1,-1),r)}function Xn(e,t){for(var n="",r=tu(e),l=0;l<r;l++)n+=t(e[l],l,e,t)||"";return n}function q1(e,t,n,r){switch(e.type){case b1:if(e.children.length)break;case A1:case eu:return e.return=e.return||e.value;case Lp:return"";case Np:return e.return=e.value+"{"+Xn(e.children,r)+"}";case qa:e.value=e.props.join(",")}return gt(n=Xn(e.children,r))?e.return=e.value+"{"+n+"}":""}function eg(e){var t=tu(e);return function(n,r,l,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,l,i)||"";return o}}function tg(e){return function(t){t.root||(t=t.return)&&e(t)}}function ng(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var rg=function(t,n,r){for(var l=0,i=0;l=i,i=xt(),l===38&&i===12&&(n[r]=1),!ul(i);)Me();return wl(t,De)},lg=function(t,n){var r=-1,l=44;do switch(ul(l)){case 0:l===38&&xt()===12&&(n[r]=1),t[r]+=rg(De-1,n,r);break;case 2:t[r]+=ql(l);break;case 4:if(l===44){t[++r]=xt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Zi(l)}while(l=Me());return t},ig=function(t,n){return Rp(lg(Op(t),n))},bc=new WeakMap,og=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,l=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bc.get(r))&&!l){bc.set(t,!0);for(var i=[],o=ig(n,i),s=r.props,a=0,u=0;a<o.length;a++)for(var m=0;m<s.length;m++,u++)t.props[u]=i[a]?o[a].replace(/&\f/g,s[m]):s[m]+" "+o[a]}}},sg=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function jp(e,t){switch(W1(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Pi+e+ke+e+e;case 6828:case 4268:return U+e+ke+e+e;case 6165:return U+e+ke+"flex-"+e+e;case 5187:return U+e+B(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return U+e+ke+"flex-item-"+B(e,/flex-|-self/,"")+e;case 4675:return U+e+ke+"flex-line-pack"+B(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+ke+B(e,"shrink","negative")+e;case 5292:return U+e+ke+B(e,"basis","preferred-size")+e;case 6060:return U+"box-"+B(e,"-grow","")+U+e+ke+B(e,"grow","positive")+e;case 4554:return U+B(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Pi+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qs(e,"stretch")?jp(B(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ve(e,t+1)!==115)break;case 6444:switch(ve(e,gt(e)-3-(~qs(e,"!important")&&10))){case 107:return B(e,":",":"+U)+e;case 101:return B(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(ve(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+ke+"$2box$3")+e}break;case 5936:switch(ve(e,t+11)){case 114:return U+e+ke+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+ke+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+ke+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+ke+e+e}return e}var ag=function(t,n,r,l){if(t.length>-1&&!t.return)switch(t.type){case eu:t.return=jp(t.value,t.length);break;case Np:return Xn([Er(t,{value:B(t.value,"@","@"+U)})],l);case qa:if(t.length)return H1(t.props,function(i){switch(V1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Xn([Er(t,{props:[B(i,/:(read-\w+)/,":"+Pi+"$1")]})],l);case"::placeholder":return Xn([Er(t,{props:[B(i,/:(plac\w+)/,":"+U+"input-$1")]}),Er(t,{props:[B(i,/:(plac\w+)/,":"+Pi+"$1")]}),Er(t,{props:[B(i,/:(plac\w+)/,ke+"input-$1")]})],l)}return""})}},ug=[ag],cg=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var $=S.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var l=t.stylisPlugins||ug,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var $=S.getAttribute("data-emotion").split(" "),d=1;d<$.length;d++)i[$[d]]=!0;s.push(S)});var a,u=[og,sg];{var m,p=[q1,tg(function(S){m.insert(S)})],g=eg(u.concat(l,p)),x=function($){return Xn(X1($),g)};a=function($,d,f,h){m=f,x($?$+"{"+d.styles+"}":d.styles),h&&(k.inserted[d.name]=!0)}}var k={key:n,sheet:new D1({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return k.sheet.hydrate(s),k},Ip={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=typeof Symbol=="function"&&Symbol.for,nu=me?Symbol.for("react.element"):60103,ru=me?Symbol.for("react.portal"):60106,Ji=me?Symbol.for("react.fragment"):60107,qi=me?Symbol.for("react.strict_mode"):60108,eo=me?Symbol.for("react.profiler"):60114,to=me?Symbol.for("react.provider"):60109,no=me?Symbol.for("react.context"):60110,lu=me?Symbol.for("react.async_mode"):60111,ro=me?Symbol.for("react.concurrent_mode"):60111,lo=me?Symbol.for("react.forward_ref"):60112,io=me?Symbol.for("react.suspense"):60113,fg=me?Symbol.for("react.suspense_list"):60120,oo=me?Symbol.for("react.memo"):60115,so=me?Symbol.for("react.lazy"):60116,dg=me?Symbol.for("react.block"):60121,pg=me?Symbol.for("react.fundamental"):60117,hg=me?Symbol.for("react.responder"):60118,mg=me?Symbol.for("react.scope"):60119;function Ge(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nu:switch(e=e.type,e){case lu:case ro:case Ji:case eo:case qi:case io:return e;default:switch(e=e&&e.$$typeof,e){case no:case lo:case so:case oo:case to:return e;default:return t}}case ru:return t}}}function Fp(e){return Ge(e)===ro}V.AsyncMode=lu;V.ConcurrentMode=ro;V.ContextConsumer=no;V.ContextProvider=to;V.Element=nu;V.ForwardRef=lo;V.Fragment=Ji;V.Lazy=so;V.Memo=oo;V.Portal=ru;V.Profiler=eo;V.StrictMode=qi;V.Suspense=io;V.isAsyncMode=function(e){return Fp(e)||Ge(e)===lu};V.isConcurrentMode=Fp;V.isContextConsumer=function(e){return Ge(e)===no};V.isContextProvider=function(e){return Ge(e)===to};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nu};V.isForwardRef=function(e){return Ge(e)===lo};V.isFragment=function(e){return Ge(e)===Ji};V.isLazy=function(e){return Ge(e)===so};V.isMemo=function(e){return Ge(e)===oo};V.isPortal=function(e){return Ge(e)===ru};V.isProfiler=function(e){return Ge(e)===eo};V.isStrictMode=function(e){return Ge(e)===qi};V.isSuspense=function(e){return Ge(e)===io};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ji||e===ro||e===eo||e===qi||e===io||e===fg||typeof e=="object"&&e!==null&&(e.$$typeof===so||e.$$typeof===oo||e.$$typeof===to||e.$$typeof===no||e.$$typeof===lo||e.$$typeof===pg||e.$$typeof===hg||e.$$typeof===mg||e.$$typeof===dg)};V.typeOf=Ge;Ip.exports=V;var gg=Ip.exports,Dp=gg,vg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ap={};Ap[Dp.ForwardRef]=vg;Ap[Dp.Memo]=yg;var wg=!0;function Sg(e,t,n){var r="";return n.split(" ").forEach(function(l){e[l]!==void 0?t.push(e[l]+";"):l&&(r+=l+" ")}),r}var bp=function(t,n,r){var l=t.key+"-"+n.name;(r===!1||wg===!1)&&t.registered[l]===void 0&&(t.registered[l]=n.styles)},xg=function(t,n,r){bp(t,n,r);var l=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+l:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function kg(e){for(var t=0,n,r=0,l=e.length;l>=4;++r,l-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(l){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Cg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Eg=/[A-Z]|^ms/g,_g=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Up=function(t){return t.charCodeAt(1)===45},Uc=function(t){return t!=null&&typeof t!="boolean"},Ao=ng(function(e){return Up(e)?e:e.replace(Eg,"-$&").toLowerCase()}),Bc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_g,function(r,l,i){return vt={name:l,styles:i,next:vt},l})}return Cg[t]!==1&&!Up(t)&&typeof n=="number"&&n!==0?n+"px":n};function cl(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var l=n;if(l.anim===1)return vt={name:l.name,styles:l.styles,next:vt},l.name;var i=n;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)vt={name:o.name,styles:o.styles,next:vt},o=o.next;var s=i.styles+";";return s}return $g(e,t,n)}case"function":{if(e!==void 0){var a=vt,u=n(e);return vt=a,cl(e,t,u)}break}}var m=n;return m}function $g(e,t,n){var r="";if(Array.isArray(n))for(var l=0;l<n.length;l++)r+=cl(e,t,n[l])+";";else for(var i in n){var o=n[i];if(typeof o!="object"){var s=o;Uc(s)&&(r+=Ao(i)+":"+Bc(i,s)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var a=0;a<o.length;a++)Uc(o[a])&&(r+=Ao(i)+":"+Bc(i,o[a])+";");else{var u=cl(e,t,o);switch(i){case"animation":case"animationName":{r+=Ao(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var Wc=/label:\s*([^\s;{]+)\s*(;|$)/g,vt;function Bp(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,l="";vt=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,l+=cl(n,t,i);else{var o=i;l+=o[0]}for(var s=1;s<e.length;s++)if(l+=cl(n,t,e[s]),r){var a=i;l+=a[s]}Wc.lastIndex=0;for(var u="",m;(m=Wc.exec(l))!==null;)u+="-"+m[1];var p=kg(l)+u;return{name:p,styles:l,next:vt}}var Pg=function(t){return t()},Lg=rs.useInsertionEffect?rs.useInsertionEffect:!1,Ng=Lg||Pg,Wp=E.createContext(typeof HTMLElement<"u"?cg({key:"css"}):null);Wp.Provider;var Tg=function(t){return E.forwardRef(function(n,r){var l=E.useContext(Wp);return t(n,l,r)})},zg=E.createContext({}),Sl={}.hasOwnProperty,ta="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",iu=function(t,n){var r={};for(var l in n)Sl.call(n,l)&&(r[l]=n[l]);return r[ta]=t,r},Og=function(t){var n=t.cache,r=t.serialized,l=t.isStringTag;return bp(n,r,l),Ng(function(){return xg(n,r,l)}),null},Rg=Tg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var l=e[ta],i=[r],o="";typeof e.className=="string"?o=Sg(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var s=Bp(i,void 0,E.useContext(zg));o+=t.key+"-"+s.name;var a={};for(var u in e)Sl.call(e,u)&&u!=="css"&&u!==ta&&(a[u]=e[u]);return a.className=o,n&&(a.ref=n),E.createElement(E.Fragment,null,E.createElement(Og,{cache:t,serialized:s,isStringTag:typeof l=="string"}),E.createElement(l,a))}),ou=Rg,le=ue.Fragment,c=function(t,n,r){return Sl.call(n,"css")?ue.jsx(ou,iu(t,n),r):ue.jsx(t,n,r)},y=function(t,n,r){return Sl.call(n,"css")?ue.jsxs(ou,iu(t,n),r):ue.jsxs(t,n,r)},Vc=function(t,n){var r=arguments;if(n==null||!Sl.call(n,"css"))return E.createElement.apply(void 0,r);var l=r.length,i=new Array(l);i[0]=ou,i[1]=iu(t,n);for(var o=2;o<l;o++)i[o]=r[o];return E.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Vc||(Vc={}));function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Bp(t)}const Hc="/strack",jg=e=>w`
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
`,Ig=e=>w`
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
`,Fg=e=>w`
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
`,Dg=w`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 480px) {
    margin-bottom: 2rem;
  }
`,Ag=e=>w`
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
`,bg=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#1a1a1a"};
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`,Ug=e=>w`
  font-size: 0.85rem;
  color: ${e?"#a0a0a0":"#666666"};
  font-weight: 400;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`,Bg=w`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 480px) {
    gap: 1.5rem;
  }
`,Qc=w`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Mc=e=>w`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e?"#e0e0e0":"#1a1a1a"};

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`,Wg=w`
  position: relative;
  display: flex;
  align-items: center;
`,Vp=e=>w`
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
`,Vg=e=>w`
  ${Vp(e)};
  padding-right: 3rem;
`,Hg=e=>w`
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
`,Qg=w`
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
`,Mg=w`
  color: #c0392b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,Kg=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:c("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})}),Yg=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"24",height:"24",children:c("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),Zg=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"24",height:"24",children:c("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),Gg=()=>y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[c("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),c("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Xg=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:c("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function Jg({darkMode:e,onToggleDarkMode:t}){const[n,r]=E.useState(""),[l,i]=E.useState(""),[o,s]=E.useState(!1),[a,u]=E.useState(""),[m,p]=E.useState(!1),g=async x=>{if(x.preventDefault(),u(""),!n.trim()){u("Please enter your email.");return}if(!l){u("Please enter your password.");return}p(!0);try{const S=await(await fetch(`${Hc}/backend/login.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.trim(),password:l})})).text();let $;try{$=JSON.parse(S)}catch{u("Server error. Check that setup_accounts.php was run.");return}if($.success){const d=$.user||{},f=d.role||"student",h=f==="admin"?"/admin":f==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(d))}catch{}window.location.href=`${Hc}${h}`}else u($.message||"Invalid email or password.")}catch{u("Unable to connect. Check the backend URL and run setup_accounts.php.")}finally{p(!1)}};return y("div",{css:jg(e),children:[c("button",{css:Ig(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?c(Zg,{}):c(Yg,{})}),y("div",{css:Fg(e),children:[y("header",{css:Dg,children:[c("div",{css:Ag(e),children:c(Kg,{})}),c("h1",{css:bg(e),children:"Welcome Back"}),c("p",{css:Ug(e),children:"Sign in to your account to continue"})]}),y("form",{css:Bg,onSubmit:g,children:[y("div",{css:Qc,children:[c("label",{css:Mc(e),htmlFor:"email",children:"Email"}),c("input",{css:Vp(e),id:"email",type:"email",placeholder:"Enter your email",value:n,onChange:x=>r(x.target.value),autoComplete:"email",disabled:m})]}),y("div",{css:Qc,children:[c("label",{css:Mc(e),htmlFor:"password",children:"Password"}),y("div",{css:Wg,children:[c("input",{css:Vg(e),id:"password",type:o?"text":"password",placeholder:"Enter your password",value:l,onChange:x=>i(x.target.value),autoComplete:"current-password",disabled:m}),c("button",{type:"button",css:Hg(e),onClick:()=>s(!o),"aria-label":o?"Hide password":"Show password",tabIndex:-1,children:o?c(Xg,{}):c(Gg,{})})]})]}),a&&c("p",{css:Mg,children:a}),c("button",{type:"submit",css:Qg,disabled:m,children:m?"Signing in...":"Submit"})]})]})]})}var Hp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kc=Pt.createContext&&Pt.createContext(Hp),qg=["attr","size","title"];function ev(e,t){if(e==null)return{};var n,r,l=tv(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function tv(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Li(){return Li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Li.apply(null,arguments)}function Yc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Ni(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yc(Object(n),!0).forEach(function(r){nv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nv(e,t,n){return(t=rv(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rv(e){var t=lv(e,"string");return typeof t=="symbol"?t:t+""}function lv(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qp(e){return e&&e.map((t,n)=>Pt.createElement(t.tag,Ni({key:n},t.attr),Qp(t.child)))}function de(e){return t=>Pt.createElement(iv,Li({attr:Ni({},e.attr)},t),Qp(e.child))}function iv(e){var t=n=>{var{attr:r,size:l,title:i}=e,o=ev(e,qg),s=l||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Pt.createElement("svg",Li({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:Ni(Ni({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Pt.createElement("title",null,i),e.children)};return Kc!==void 0?Pt.createElement(Kc.Consumer,null,n=>t(n)):t(Hp)}function bo(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function Mp(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function Ti(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function Uo(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function su(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function Kp(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function au(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function ov(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function Bo(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function uu(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function Wo(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function sv(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function av(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function Yp(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function cu(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function ti(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function fu(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function du(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function fl(e){return de({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const Ae="0.35s ease",uv=e=>w`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${Ae};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,cv=e=>w`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${Ae}, box-shadow ${Ae};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,fv=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,dv=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,pv=e=>w`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Ae};
  }
`,hv=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ae};
`,mv=e=>w`
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
  transition: color ${Ae};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,gv=w`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,vv=w`
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
`,yv=w`
  flex: 1;
  min-width: 0;
`,wv=e=>w`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ae};
`,Sv=e=>w`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Ae};
`,xv=e=>w`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${Ae};
`,kv=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,Cv=e=>w`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${Ae};
`,Ev=e=>w`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${Ae};
`,_v=w`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,$v=(e,t)=>w`
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
  transition: background ${Ae}, color ${Ae};

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
`,Pv=w`
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
`,Lv=e=>w`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${Ae};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Nv=e=>w`
  max-width: 800px;
  margin: 0 auto;
`,rn=w`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,ln=w`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Tv=[{id:"dashboard",label:"Dashboard",icon:au},{id:"courses",label:"Courses",icon:fu},{id:"calendar",label:"Calendar",icon:cu},{id:"leaderboard",label:"Leaderboard",icon:Yp},{id:"badges",label:"Badges",icon:ov},{id:"rewards",label:"Rewards",icon:Kp},{id:"profile",label:"Profile",icon:Mp}];function zv(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Ov({darkMode:e,onToggleDarkMode:t}){const n=Yi(),[r,l]=E.useState("dashboard");let i="Alex Thompson",o=2450;try{const a=localStorage.getItem("strack_user");if(a){const u=JSON.parse(a);u!=null&&u.name&&(i=u.name)}}catch{}const s=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return y("div",{css:uv(e),children:[y("aside",{css:cv(e),children:[y("header",{css:fv,children:[y("div",{css:dv,children:[c("div",{css:pv(e),children:c(fl,{})}),c("span",{css:hv(e),children:"Strack"})]}),c("button",{type:"button",css:mv(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?c(su,{}):c(uu,{})})]}),y("div",{css:gv,children:[c("div",{css:vv,children:zv(i)}),y("div",{css:yv,children:[c("div",{css:wv(e),children:i}),c("div",{css:Sv(e),children:"Student"})]})]}),c("div",{css:xv(e),children:y("div",{css:kv,children:[y("span",{css:Cv(e),children:[c(sv,{})," Points"]}),c("span",{css:Ev(e),children:o})]})}),c("nav",{css:_v,children:Tv.map(({id:a,label:u,icon:m})=>y("button",{css:$v(e,r===a),onClick:()=>l(a),children:[c(m,{}),u]},a))}),y("button",{css:Pv,onClick:s,children:[c(du,{}),"Logout"]})]}),c("main",{css:Lv(e),children:y("div",{css:Nv(),children:[r==="dashboard"&&y(le,{children:[c("h1",{css:rn,children:"Dashboard"}),c("p",{css:ln,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),r==="courses"&&y(le,{children:[c("h1",{css:rn,children:"Courses"}),c("p",{css:ln,children:"This is the courses page. View your enrolled courses, materials, and grades here."})]}),r==="calendar"&&y(le,{children:[c("h1",{css:rn,children:"Calendar"}),c("p",{css:ln,children:"This is the calendar page. View your schedule, deadlines, and important dates here."})]}),r==="leaderboard"&&y(le,{children:[c("h1",{css:rn,children:"Leaderboard"}),c("p",{css:ln,children:"This is the leaderboard page. See how you rank against other students and track your position."})]}),r==="badges"&&y(le,{children:[c("h1",{css:rn,children:"Badges"}),c("p",{css:ln,children:"This is the badges page. View and collect achievement badges earned from your activities."})]}),r==="rewards"&&y(le,{children:[c("h1",{css:rn,children:"Rewards"}),c("p",{css:ln,children:"This is the rewards page. Redeem your points for rewards and see what you can earn."})]}),r==="profile"&&y(le,{children:[c("h1",{css:rn,children:"Profile"}),c("p",{css:ln,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const ft="0.35s ease",Rv=e=>w`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${ft};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,jv=e=>w`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition: background-color ${ft}, box-shadow ${ft};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,Iv=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Fv=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Dv=e=>w`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${ft};
  }
`,Av=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${ft};
`,bv=e=>w`
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
  transition: color ${ft};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,Uv=w`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,Bv=w`
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
`,Wv=w`
  flex: 1;
  min-width: 0;
`,Vv=e=>w`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${ft};
`,Hv=e=>w`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${ft};
`,Qv=w`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Mv=(e,t)=>w`
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
  transition: background ${ft}, color ${ft};

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
`,Kv=w`
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
`,Yv=e=>w`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${ft};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Zv=e=>w`
  max-width: 800px;
  margin: 0 auto;
`,on=w`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,sn=w`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Gv=[{id:"dashboard",label:"Dashboard",icon:au},{id:"students",label:"Students",icon:Ti},{id:"attendance",label:"Attendance",icon:av},{id:"performance",label:"Performance",icon:Yp},{id:"courses",label:"Courses",icon:fu},{id:"calendar",label:"Calendar",icon:cu},{id:"profile",label:"Profile",icon:Mp}];function Xv(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Jv({darkMode:e,onToggleDarkMode:t}){const n=Yi(),[r,l]=E.useState("dashboard");let i="Lecturer";try{const s=localStorage.getItem("strack_user");if(s){const a=JSON.parse(s);a!=null&&a.name&&(i=a.name)}}catch{}const o=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return y("div",{css:Rv(e),children:[y("aside",{css:jv(e),children:[y("header",{css:Iv,children:[y("div",{css:Fv,children:[c("div",{css:Dv(e),children:c(fl,{})}),c("span",{css:Av(e),children:"Strack"})]}),c("button",{type:"button",css:bv(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?c(su,{}):c(uu,{})})]}),y("div",{css:Uv,children:[c("div",{css:Bv,children:Xv(i)}),y("div",{css:Wv,children:[c("div",{css:Vv(e),children:i}),c("div",{css:Hv(e),children:"Lecturer"})]})]}),c("nav",{css:Qv,children:Gv.map(({id:s,label:a,icon:u})=>y("button",{type:"button",css:Mv(e,r===s),onClick:()=>l(s),children:[c(u,{}),a]},s))}),y("button",{type:"button",css:Kv,onClick:o,children:[c(du,{}),"Logout"]})]}),c("main",{css:Yv(e),children:y("div",{css:Zv(),children:[r==="dashboard"&&y(le,{children:[c("h1",{css:on,children:"Dashboard"}),c("p",{css:sn,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),r==="students"&&y(le,{children:[c("h1",{css:on,children:"Students"}),c("p",{css:sn,children:"This is the students page. View your class lists and student details here."})]}),r==="attendance"&&y(le,{children:[c("h1",{css:on,children:"Attendance"}),c("p",{css:sn,children:"This is the attendance page. Mark and view student attendance for your classes here."})]}),r==="performance"&&y(le,{children:[c("h1",{css:on,children:"Performance"}),c("p",{css:sn,children:"This is the performance page. View and analyse student performance and grades here."})]}),r==="courses"&&y(le,{children:[c("h1",{css:on,children:"Courses"}),c("p",{css:sn,children:"This is the courses page. Manage your courses, materials, and class lists here."})]}),r==="calendar"&&y(le,{children:[c("h1",{css:on,children:"Calendar"}),c("p",{css:sn,children:"This is the calendar page. View your teaching schedule, deadlines, and important dates here."})]}),r==="profile"&&y(le,{children:[c("h1",{css:on,children:"Profile"}),c("p",{css:sn,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const be="/strack",F="0.35s ease",qv=e=>w`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${F};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,ey=e=>w`
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
`,ty=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,ny=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,ry=e=>w`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${F};
  }
`,ly=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${F};
`,iy=e=>w`
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
`,oy=w`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,sy=w`
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
`,ay=w`
  flex: 1;
  min-width: 0;
`,uy=e=>w`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${F};
`,cy=e=>w`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${F};
`,fy=w`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,dy=(e,t)=>w`
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
`,py=w`
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
`,hy=e=>w`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${F};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,my=(e,t)=>w`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,Zc=w`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Gc=w`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Xc=e=>w`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${F};
`,Jc=w`
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
`,qc=e=>w`
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
`,ef=w`
  margin-bottom: 1rem;
`,tf=w`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,_r=e=>w`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,$r=e=>w`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,Pr=e=>w`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;w`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const Lr=e=>w`
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
`,Nr=w`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,gy=(e,t)=>w`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${F}, color ${F};
`,vy=w`
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
`,Vo=w`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Ho=w`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,yy=w`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,wy=w`
  flex: 1;
  min-width: 0;
`,Sy=w`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,xy=e=>w`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${F};
`,ky=w`
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
`,Cy=e=>w`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${F}, box-shadow ${F};
`,Ey=e=>w`
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
`,_y=e=>w`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${F};
`,$y=e=>w`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${F};
`,Py=w`
  margin-top: 1.5rem;
`,Ly=w`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,Ny=w`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,Ty=e=>w`
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
`,Qo=e=>w`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${F}, box-shadow ${F};
`,ae=e=>w`
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
`,Q=e=>w`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${F}, border-color ${F};
`,Mo=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ni=e=>w`
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
`,Ko=e=>w`
  ${ni(e)}
  &:hover {
    color: #dc2626;
  }
`,Yo=w`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Zo=e=>w`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${F};
`,Go=e=>w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${F};
`,Xo=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${F};
`,Jo=e=>w`
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
`,qo=w`
  padding: 1.5rem;
`,Ue=w`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,Be=e=>w`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${F};
`,We=e=>w`
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
`,zy=e=>w`
  ${We(e)}
  min-height: 80px;
  resize: vertical;
`,es=e=>w`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${F};
`,ts=e=>w`
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
`,ns=w`
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
`,Oy=[{id:"dashboard",label:"Dashboard",icon:au},{id:"students",label:"Students",icon:Ti},{id:"lecturers",label:"Lecturers",icon:fl},{id:"courses",label:"Courses",icon:fu},{id:"departments",label:"Departments",icon:ti},{id:"calendar",label:"Calendar",icon:cu}];function Ry(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function jy({darkMode:e,onToggleDarkMode:t}){const n=Yi(),[r,l]=E.useState("dashboard"),[i,o]=E.useState([]),[s,a]=E.useState(!1),[u,m]=E.useState(""),[p,g]=E.useState(!1),[x,k]=E.useState(null),[S,$]=E.useState({code:"",name:"",description:""}),[d,f]=E.useState(!1),h=E.useCallback(async()=>{a(!0);try{const z=await(await fetch(`${be}/backend/departments.php`)).json();z.success&&o(z.departments||[])}catch{o([])}finally{a(!1)}},[]);E.useEffect(()=>{r==="departments"&&h()},[r,h]);const[C,L]=E.useState([]),[N,P]=E.useState(!1),[R,G]=E.useState(""),[D,_e]=E.useState(!1),[Te,jt]=E.useState(null),[dt,pt]=E.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:""}),[En,_n]=E.useState(!1),[T,j]=E.useState([]),I=E.useCallback(async()=>{P(!0);try{const z=await(await fetch(`${be}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();z.success&&L(z.students||[])}catch{L([])}finally{P(!1)}},[]),Y=E.useCallback(async()=>{try{const z=await(await fetch(`${be}/backend/departments.php`)).json();z.success&&j(z.departments||[])}catch{j([])}},[]);E.useEffect(()=>{r==="students"&&I(),(r==="students"||r==="lecturers")&&Y()},[r,I,Y]);const[te,nn]=E.useState([]),[rt,$n]=E.useState(!1),[ze,Pn]=E.useState(""),[Zp,ao]=E.useState(!1),[Ln,pu]=E.useState(null),[fr,Nn]=E.useState({lecturer_id:"",full_name:"",email:"",department:""}),[hu,mu]=E.useState(!1),dr=E.useCallback(async()=>{$n(!0);try{const z=await(await fetch(`${be}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();z.success&&nn(z.lecturers||[])}catch{nn([])}finally{$n(!1)}},[]);E.useEffect(()=>{r==="lecturers"&&dr()},[r,dr]);const Gp=()=>{pu(null),Nn({lecturer_id:"",full_name:"",email:"",department:""}),ao(!0)},Xp=v=>{pu(v.id),Nn({lecturer_id:v.lecturer_id||"",full_name:v.full_name||"",email:v.email||"",department:v.department||""}),ao(!0)},pr=()=>ao(!1),Jp=async()=>{const{lecturer_id:v,full_name:z,email:X,department:kt}=fr;if(!(!v.trim()||!z.trim()||!X.trim()||!kt.trim())){mu(!0);try{Ln?(await(await fetch(`${be}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Ln,lecturer_id:v.trim(),full_name:z.trim(),email:X.trim(),department:kt.trim()})})).json()).success&&(pr(),dr()):(await(await fetch(`${be}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:v.trim(),full_name:z.trim(),email:X.trim(),department:kt.trim()})})).json()).success&&(pr(),dr())}finally{mu(!1)}}},qp=async v=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${be}/backend/lecturers.php?id=${v}`,{method:"DELETE"})).json()).success&&dr()}catch{}},gu=te.filter(v=>!ze||(v.lecturer_id||"").toLowerCase().includes(ze.toLowerCase())||(v.full_name||"").toLowerCase().includes(ze.toLowerCase())||(v.email||"").toLowerCase().includes(ze.toLowerCase())||(v.department||"").toLowerCase().includes(ze.toLowerCase())),eh=()=>{jt(null),pt({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:""}),_e(!0)},th=v=>{jt(v.id),pt({student_id:v.student_id,full_name:v.full_name,email:v.email,password:"",department:v.department||"",year:v.year||""}),_e(!0)},hr=()=>_e(!1),nh=async()=>{const{student_id:v,full_name:z,email:X,password:kt,department:Tn,year:xl}=dt;if(!(!v.trim()||!z.trim()||!X.trim())&&!(!Te&&!kt.trim())){_n(!0);try{Te?(await(await fetch(`${be}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Te,student_id:v.trim(),full_name:z.trim(),email:X.trim(),password:kt.trim(),department:Tn.trim()||"",year:xl.trim()||""})})).json()).success&&(hr(),I()):(await(await fetch(`${be}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:v.trim(),full_name:z.trim(),email:X.trim(),password:kt.trim(),department:Tn.trim()||"",year:xl.trim()||""})})).json()).success&&(hr(),I())}finally{_n(!1)}}},rh=async v=>{if(confirm("Delete this student?"))try{(await(await fetch(`${be}/backend/students.php?id=${v}`,{method:"DELETE"})).json()).success&&I()}catch{}},vu=C.filter(v=>!R||(v.student_id||"").toLowerCase().includes(R.toLowerCase())||(v.full_name||"").toLowerCase().includes(R.toLowerCase())||(v.email||"").toLowerCase().includes(R.toLowerCase())||(v.department||"").toLowerCase().includes(R.toLowerCase())),lh=["Foundation","Year 1","Year 2","Placement Year","Year 4"],ih=()=>{k(null),$({code:"",name:"",description:""}),g(!0)},oh=v=>{k(v.id),$({code:v.code,name:v.name,description:v.description||""}),g(!0)},mr=()=>g(!1),sh=async()=>{const{code:v,name:z,description:X}=S;if(!(!v.trim()||!z.trim())){f(!0);try{x?(await(await fetch(`${be}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:x,code:v.trim(),name:z.trim(),description:X.trim()})})).json()).success&&(mr(),h()):(await(await fetch(`${be}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:v.trim(),name:z.trim(),description:X.trim()})})).json()).success&&(mr(),h())}finally{f(!1)}}},ah=async v=>{if(confirm("Delete this department?"))try{(await(await fetch(`${be}/backend/departments.php?id=${v}`,{method:"DELETE"})).json()).success&&h()}catch{}},yu=i.filter(v=>!u||v.code.toLowerCase().includes(u.toLowerCase())||v.name.toLowerCase().includes(u.toLowerCase())||(v.description||"").toLowerCase().includes(u.toLowerCase()));let uo="Admin Portal";try{const v=localStorage.getItem("strack_user");if(v){const z=JSON.parse(v),X=(z==null?void 0:z.name)||"";uo=X==="Test Admin"||X==="Admin"?"Admin Portal":X||"Admin Portal"}}catch{}const uh=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return y("div",{css:qv(e),children:[y("aside",{css:ey(e),children:[y("header",{css:ty,children:[y("div",{css:ny,children:[c("div",{css:ry(e),children:c(fl,{})}),c("span",{css:ly(e),children:"Strack"})]}),c("button",{type:"button",css:iy(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?c(su,{}):c(uu,{})})]}),y("div",{css:oy,children:[c("div",{css:sy,children:Ry(uo)}),y("div",{css:ay,children:[c("div",{css:uy(e),children:uo}),c("div",{css:cy(e),children:"Admin"})]})]}),c("nav",{css:fy,children:Oy.map(({id:v,label:z,icon:X})=>y("button",{type:"button",css:dy(e,r===v),onClick:()=>l(v),children:[c(X,{}),z]},v))}),y("button",{type:"button",css:py,onClick:uh,children:[c(du,{}),"Logout"]})]}),c("main",{css:hy(e),children:y("div",{css:my(e,r==="departments"||r==="students"||r==="lecturers"),children:[r==="dashboard"&&y(le,{children:[c("h1",{css:Vo,children:"Dashboard"}),c("p",{css:Ho,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),r==="students"&&y(le,{children:[y("div",{css:Zc,children:[y("div",{children:[c("h1",{css:Gc,children:"Manage Students"}),c("p",{css:Xc(e),children:"Add, edit, or remove student records."})]}),c("button",{type:"button",css:Jc,onClick:eh,children:"+ Add Student"})]}),y("div",{css:ef,children:[y("div",{css:_r(e),children:[c("span",{css:Lr(e),children:c(Ti,{})}),y("div",{css:Nr,children:[c("p",{css:Pr(e),children:"Total Students"}),c("p",{css:$r(e),children:N?"...":C.length})]})]}),y("div",{css:tf,children:[T.length>0?T.map(v=>{const z=C.filter(X=>(X.department||"")===v.name).length;return y("div",{css:_r(e),children:[c("span",{css:Lr(e),children:c(ti,{})}),y("div",{css:Nr,children:[c("p",{css:Pr(e),children:v.name}),c("p",{css:$r(e),children:N?"...":z})]})]},v.id)}):null,(()=>{const v=C.filter(z=>!z.department).length;return v<=0?null:y("div",{css:_r(e),children:[c("span",{css:Lr(e),children:c(fl,{})}),y("div",{css:Nr,children:[c("p",{css:Pr(e),children:"Unassigned"}),c("p",{css:$r(e),children:N?"...":v})]})]})})()]})]}),y("div",{css:qc(e),children:[c(Wo,{}),c("input",{type:"text",placeholder:"Search students...",value:R,onChange:v=>G(v.target.value)})]}),y("table",{css:Qo(e),children:[c("thead",{children:y("tr",{children:[c("th",{css:ae(e),children:"Student ID"}),c("th",{css:ae(e),children:"Name"}),c("th",{css:ae(e),children:"Email"}),c("th",{css:ae(e),children:"Department"}),c("th",{css:ae(e),children:"Year"}),c("th",{css:ae(e),children:"GPA"}),c("th",{css:ae(e),children:"Points"}),c("th",{css:ae(e),children:"Attendance"}),c("th",{css:ae(e),children:"Actions"})]})}),c("tbody",{children:N?c("tr",{children:c("td",{css:Q(e),colSpan:9,children:"Loading..."})}):vu.length===0?c("tr",{children:c("td",{css:Q(e),colSpan:9,children:"No students found."})}):vu.map(v=>y("tr",{children:[c("td",{css:Q(e),children:v.student_id}),c("td",{css:Q(e),children:v.full_name}),c("td",{css:Q(e),children:v.email}),c("td",{css:Q(e),children:v.department||"—"}),c("td",{css:Q(e),children:v.year||"—"}),c("td",{css:Q(e),children:Number(v.gpa)||0}),c("td",{css:Q(e),children:y("span",{css:vy,children:[c(Kp,{}),Number(v.points)||0]})}),c("td",{css:Q(e),children:y("span",{css:gy(Number(v.attendance)||0,e),children:[Number(v.attendance)||0,"%"]})}),c("td",{css:Q(e),children:y("div",{css:Mo,children:[c("button",{type:"button",css:ni(e),onClick:()=>th(v),title:"Edit",children:c(Bo,{})}),c("button",{type:"button",css:Ko(e),onClick:()=>rh(v.id),title:"Delete",children:c(Uo,{})})]})})]},v.id))})]})]}),r==="lecturers"&&y(le,{children:[y("div",{css:Zc,children:[y("div",{children:[c("h1",{css:Gc,children:"Lecturer Management"}),c("p",{css:Xc(e),children:"Manage teaching staff and teaching assignments."})]}),c("button",{type:"button",css:Jc,onClick:Gp,children:"+ Add Lecturer"})]}),y("div",{css:ef,children:[y("div",{css:_r(e),children:[c("span",{css:Lr(e),children:c(Ti,{})}),y("div",{css:Nr,children:[c("p",{css:Pr(e),children:"Total Lecturers"}),c("p",{css:$r(e),children:rt?"...":te.length})]})]}),c("div",{css:tf,children:T.length>0?T.map(v=>{const z=te.filter(X=>(X.department||"")===v.name).length;return y("div",{css:_r(e),children:[c("span",{css:Lr(e),children:c(ti,{})}),y("div",{css:Nr,children:[c("p",{css:Pr(e),children:v.name}),c("p",{css:$r(e),children:rt?"...":z})]})]},v.id)}):null})]}),y("div",{css:qc(e),children:[c(Wo,{}),c("input",{type:"text",placeholder:"Search lecturers...",value:ze,onChange:v=>Pn(v.target.value)})]}),y("table",{css:Qo(e),children:[c("thead",{children:y("tr",{children:[c("th",{css:ae(e),children:"Lecturer ID"}),c("th",{css:ae(e),children:"Name"}),c("th",{css:ae(e),children:"Email"}),c("th",{css:ae(e),children:"Department"}),c("th",{css:ae(e),children:"Modules"}),c("th",{css:ae(e),children:"Actions"})]})}),c("tbody",{children:rt?c("tr",{children:c("td",{css:Q(e),colSpan:6,children:"Loading..."})}):gu.length===0?c("tr",{children:c("td",{css:Q(e),colSpan:6,children:"No lecturers found."})}):gu.map(v=>y("tr",{children:[c("td",{css:Q(e),children:v.lecturer_id}),c("td",{css:Q(e),children:v.full_name}),c("td",{css:Q(e),children:v.email}),c("td",{css:Q(e),children:v.department||"—"}),c("td",{css:Q(e),children:Number(v.modules)||0}),c("td",{css:Q(e),children:y("div",{css:Mo,children:[c("button",{type:"button",css:ni(e),onClick:()=>Xp(v),title:"Edit",children:c(Bo,{})}),c("button",{type:"button",css:Ko(e),onClick:()=>qp(v.id),title:"Delete",children:c(Uo,{})})]})})]},v.id))})]})]}),r==="courses"&&y(le,{children:[c("h1",{css:Vo,children:"Courses"}),c("p",{css:Ho,children:"This is the courses page. Manage course catalog, assignments, and offerings here."})]}),r==="departments"&&y(le,{children:[y("div",{css:yy,children:[y("div",{css:wy,children:[c("h1",{css:Sy,children:"Departments"}),c("p",{css:xy(e),children:"Manage university departments."})]}),c("button",{type:"button",css:ky,onClick:ih,children:"+ Add Department"})]}),y("div",{css:Cy(e),children:[c("div",{css:Ey(e),children:c(ti,{})}),y("div",{children:[c("p",{css:$y(e),children:"Total Departments"}),c("p",{css:_y(e),children:s?"...":i.length})]})]}),y("div",{css:Py,children:[y("div",{css:Ly,children:[c("h2",{css:Ny,children:"All Departments"}),y("div",{css:Ty(e),children:[c(Wo,{}),c("input",{type:"text",placeholder:"Search departments...",value:u,onChange:v=>m(v.target.value)})]})]}),y("table",{css:Qo(e),children:[c("thead",{children:y("tr",{children:[c("th",{css:ae(e),children:"Code"}),c("th",{css:ae(e),children:"Name"}),c("th",{css:ae(e),children:"Description"}),c("th",{css:ae(e),children:"Actions"})]})}),c("tbody",{children:s?c("tr",{children:c("td",{css:Q(e),colSpan:4,children:"Loading..."})}):yu.length===0?c("tr",{children:c("td",{css:Q(e),colSpan:4,children:"No departments found."})}):yu.map(v=>y("tr",{children:[c("td",{css:Q(e),children:v.code}),c("td",{css:Q(e),children:v.name}),c("td",{css:Q(e),children:v.description||"—"}),c("td",{css:Q(e),children:y("div",{css:Mo,children:[c("button",{type:"button",css:ni(e),onClick:()=>oh(v),title:"Edit",children:c(Bo,{})}),c("button",{type:"button",css:Ko(e),onClick:()=>ah(v.id),title:"Delete",children:c(Uo,{})})]})})]},v.id))})]})]})]}),r==="calendar"&&y(le,{children:[c("h1",{css:Vo,children:"Calendar"}),c("p",{css:Ho,children:"This is the calendar page. View and manage academic calendar, deadlines, and events here."})]})]})}),D&&c("div",{css:Yo,onClick:hr,children:y("div",{css:Zo(e),onClick:v=>v.stopPropagation(),children:[y("div",{css:Go(e),children:[c("h3",{css:Xo(e),children:Te?"Edit Student":"Add Student"}),c("button",{type:"button",css:Jo(e),onClick:hr,"aria-label":"Close",children:c(bo,{})})]}),y("div",{css:qo,children:[y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Full Name *"}),c("input",{type:"text",css:We(e),placeholder:"e.g. Ava Thomas",value:dt.full_name,onChange:v=>pt(z=>({...z,full_name:v.target.value}))})]}),y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Email *"}),c("input",{type:"email",css:We(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:dt.email,onChange:v=>pt(z=>({...z,email:v.target.value}))})]}),!Te&&y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Password *"}),c("input",{type:"password",css:We(e),placeholder:"e.g. student123",value:dt.password,onChange:v=>pt(z=>({...z,password:v.target.value}))})]}),y("div",{css:Ue,children:[y("label",{css:Be(e),children:["Student ID ",Te?"":"*"]}),c("input",{type:"text",css:We(e),placeholder:"e.g. STU2024008",value:dt.student_id,onChange:v=>pt(z=>({...z,student_id:v.target.value})),readOnly:!!Te})]}),y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Department"}),y("select",{css:We(e),value:dt.department,onChange:v=>pt(z=>({...z,department:v.target.value})),children:[c("option",{value:"",children:"Select department"}),T.map(v=>c("option",{value:v.name,children:v.name},v.id))]})]}),y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Year"}),y("select",{css:We(e),value:dt.year,onChange:v=>pt(z=>({...z,year:v.target.value})),children:[c("option",{value:"",children:"Select year"}),lh.map(v=>c("option",{value:v,children:v},v))]})]})]}),y("div",{css:es(e),children:[c("button",{type:"button",css:ts(e),onClick:hr,children:"Cancel"}),c("button",{type:"button",css:ns,onClick:nh,disabled:En,children:En?"Saving...":Te?"Save Changes":"Add Student"})]})]})}),Zp&&c("div",{css:Yo,onClick:pr,children:y("div",{css:Zo(e),onClick:v=>v.stopPropagation(),children:[y("div",{css:Go(e),children:[c("h3",{css:Xo(e),children:Ln?"Edit Lecturer":"Add Lecturer"}),c("button",{type:"button",css:Jo(e),onClick:pr,"aria-label":"Close",children:c(bo,{})})]}),y("div",{css:qo,children:[y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Full Name *"}),c("input",{type:"text",css:We(e),placeholder:"e.g. Dr. Sarah Johnson",value:fr.full_name,onChange:v=>Nn(z=>({...z,full_name:v.target.value}))})]}),y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Email *"}),c("input",{type:"email",css:We(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:fr.email,onChange:v=>Nn(z=>({...z,email:v.target.value}))})]}),y("div",{css:Ue,children:[y("label",{css:Be(e),children:["Lecturer ID ",Ln?"":"*"]}),c("input",{type:"text",css:We(e),placeholder:"e.g. LEC001",value:fr.lecturer_id,onChange:v=>Nn(z=>({...z,lecturer_id:v.target.value})),readOnly:!!Ln})]}),y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Department"}),y("select",{css:We(e),value:fr.department,onChange:v=>Nn(z=>({...z,department:v.target.value})),children:[c("option",{value:"",children:"Select department"}),T.map(v=>c("option",{value:v.name,children:v.name},v.id))]})]})]}),y("div",{css:es(e),children:[c("button",{type:"button",css:ts(e),onClick:pr,children:"Cancel"}),c("button",{type:"button",css:ns,onClick:Jp,disabled:hu,children:hu?"Saving...":Ln?"Update Lecturer":"Add Lecturer"})]})]})}),p&&c("div",{css:Yo,onClick:mr,children:y("div",{css:Zo(e),onClick:v=>v.stopPropagation(),children:[y("div",{css:Go(e),children:[c("h3",{css:Xo(e),children:x?"Edit Department":"Add New Department"}),c("button",{type:"button",css:Jo(e),onClick:mr,"aria-label":"Close",children:c(bo,{})})]}),y("div",{css:qo,children:[y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Department Name"}),c("input",{type:"text",css:We(e),placeholder:"e.g. Newcastle Business School",value:S.name,onChange:v=>$(z=>({...z,name:v.target.value}))})]}),y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Department Code"}),c("input",{type:"text",css:We(e),placeholder:"e.g. NBS",value:S.code,onChange:v=>$(z=>({...z,code:v.target.value}))})]}),y("div",{css:Ue,children:[c("label",{css:Be(e),children:"Description"}),c("textarea",{css:zy(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:S.description,onChange:v=>$(z=>({...z,description:v.target.value}))})]})]}),y("div",{css:es(e),children:[c("button",{type:"button",css:ts(e),onClick:mr,children:"Cancel"}),c("button",{type:"button",css:ns,onClick:sh,disabled:d,children:d?"Saving...":x?"Update Department":"Add Department"})]})]})})]})}const Iy="/strack",nf="strack_dark";function Fy(){const[e,t]=E.useState(()=>{try{return localStorage.getItem(nf)==="true"}catch{return!1}});E.useEffect(()=>{try{localStorage.setItem(nf,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return ue.jsx(j1,{basename:Iy,children:ue.jsxs(z1,{children:[ue.jsx(On,{path:"/",element:ue.jsx(Jg,{darkMode:e,onToggleDarkMode:n})}),ue.jsx(On,{path:"/dashboard",element:ue.jsx(Ov,{darkMode:e,onToggleDarkMode:n})}),ue.jsx(On,{path:"/lecturer",element:ue.jsx(Jv,{darkMode:e,onToggleDarkMode:n})}),ue.jsx(On,{path:"/admin",element:ue.jsx(jy,{darkMode:e,onToggleDarkMode:n})}),ue.jsx(On,{path:"*",element:ue.jsx(N1,{to:"/",replace:!0})})]})})}ls.createRoot(document.getElementById("root")).render(ue.jsx(Pt.StrictMode,{children:ue.jsx(Fy,{})}));
