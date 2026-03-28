function Pm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Nm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var If={exports:{}},Po={},Af={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),zm=Symbol.for("react.portal"),Tm=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),jm=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Fm=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),Fu=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=Fu&&e[Fu]||e["@@iterator"],typeof e=="function"?e:null)}var Ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Uf={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Uf,this.updater=n||Ff}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wf(){}Wf.prototype=Or.prototype;function Ga(e,t,n){this.props=e,this.context=t,this.refs=Uf,this.updater=n||Ff}var Xa=Ga.prototype=new Wf;Xa.constructor=Ga;Bf(Xa,Or.prototype);Xa.isPureReactComponent=!0;var Bu=Array.isArray,Hf=Object.prototype.hasOwnProperty,qa={current:null},Vf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Hf.call(t,r)&&!Vf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ol,type:e,key:l,ref:o,props:i,_owner:qa.current}}function Wm(e,t){return{$$typeof:ol,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===ol}function Hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uu=/\/+/g;function ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hm(""+e.key):t.toString(36)}function Il(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ol:case zm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ps(o,0):r,Bu(i)?(n="",e!=null&&(n=e.replace(Uu,"$&/")+"/"),Il(i,t,n,"",function(p){return p})):i!=null&&(Ma(i)&&(i=Wm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Bu(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+ps(l,a);o+=Il(l,t,n,c,i)}else if(c=Um(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+ps(l,a++),o+=Il(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(e,t,n){if(e==null)return e;var r=[],i=0;return Il(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Vm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Al={transition:null},Qm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Al,ReactCurrentOwner:qa};function Kf(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:yl,forEach:function(e,t,n){yl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yl(e,function(){t++}),t},toArray:function(e){return yl(e,function(t){return t})||[]},only:function(e){if(!Ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Or;B.Fragment=Tm;B.Profiler=jm;B.PureComponent=Ga;B.StrictMode=Om;B.Suspense=Am;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;B.act=Kf;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bf({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=qa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Hf.call(t,c)&&!Vf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var p=0;p<c;p++)a[p]=arguments[p+2];r.children=a}return{$$typeof:ol,type:e.type,key:i,ref:l,props:r,_owner:o}};B.createContext=function(e){return e={$$typeof:Dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rm,_context:e},e.Consumer=e};B.createElement=Qf;B.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Im,render:e}};B.isValidElement=Ma;B.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Vm}};B.memo=function(e,t){return{$$typeof:Fm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Al.transition;Al.transition={};try{e()}finally{Al.transition=t}};B.unstable_act=Kf;B.useCallback=function(e,t){return Ie.current.useCallback(e,t)};B.useContext=function(e){return Ie.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ie.current.useEffect(e,t)};B.useId=function(){return Ie.current.useId()};B.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ie.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};B.useRef=function(e){return Ie.current.useRef(e)};B.useState=function(e){return Ie.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ie.current.useTransition()};B.version="18.3.1";Af.exports=B;var x=Af.exports;const It=Nm(x),Xs=Pm({__proto__:null,default:It},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=x,Ym=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),Jm=Object.prototype.hasOwnProperty,Gm=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xm={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Jm.call(t,r)&&!Xm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ym,type:e,key:l,ref:o,props:i,_owner:Gm.current}}Po.Fragment=Zm;Po.jsx=Yf;Po.jsxs=Yf;If.exports=Po;var ve=If.exports,qs={},Zf={exports:{}},et={},Jf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var I=T.length;T.push(D);e:for(;0<I;){var Q=I-1>>>1,ee=T[Q];if(0<i(ee,D))T[Q]=D,T[I]=ee,I=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],I=T.pop();if(I!==D){T[0]=I;e:for(var Q=0,ee=T.length,ke=ee>>>1;Q<ke;){var St=2*(Q+1)-1,Vt=T[St],Ct=St+1,Qt=T[Ct];if(0>i(Vt,I))Ct<ee&&0>i(Qt,Vt)?(T[Q]=Qt,T[Ct]=I,Q=Ct):(T[Q]=Vt,T[St]=I,Q=St);else if(Ct<ee&&0>i(Qt,I))T[Q]=Qt,T[Ct]=I,Q=Ct;else break e}}return D}function i(T,D){var I=T.sortIndex-D.sortIndex;return I!==0?I:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var c=[],p=[],v=1,g=null,w=3,k=!1,S=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var D=n(p);D!==null;){if(D.callback===null)r(p);else if(D.startTime<=T)r(p),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(p)}}function b(T){if(C=!1,y(T),!S)if(n(c)!==null)S=!0,Fe(_);else{var D=n(p);D!==null&&Be(b,D.startTime-T)}}function _(T,D){S=!1,C&&(C=!1,h(R),R=-1),k=!0;var I=w;try{for(y(D),g=n(c);g!==null&&(!(g.expirationTime>D)||T&&!ie());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,w=g.priorityLevel;var ee=Q(g.expirationTime<=D);D=e.unstable_now(),typeof ee=="function"?g.callback=ee:g===n(c)&&r(c),y(D)}else r(c);g=n(c)}if(g!==null)var ke=!0;else{var St=n(p);St!==null&&Be(b,St.startTime-D),ke=!1}return ke}finally{g=null,w=I,k=!1}}var $=!1,L=null,R=-1,V=5,A=-1;function ie(){return!(e.unstable_now()-A<V)}function ct(){if(L!==null){var T=e.unstable_now();A=T;var D=!0;try{D=L(!0,T)}finally{D?O():($=!1,L=null)}}else $=!1}var O;if(typeof d=="function")O=function(){d(ct)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,H=z.port2;z.port1.onmessage=ct,O=function(){H.postMessage(null)}}else O=function(){P(ct,0)};function Fe(T){L=T,$||($=!0,O())}function Be(T,D){R=P(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,Fe(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(w){case 1:case 2:case 3:var D=3;break;default:D=w}var I=w;w=D;try{return T()}finally{w=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=w;w=T;try{return D()}finally{w=I}},e.unstable_scheduleCallback=function(T,D,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=I+ee,T={id:v++,callback:D,priorityLevel:T,startTime:I,expirationTime:ee,sortIndex:-1},I>Q?(T.sortIndex=I,t(p,T),n(c)===null&&T===n(p)&&(C?(h(R),R=-1):C=!0,Be(b,I-Q))):(T.sortIndex=ee,t(c,T),S||k||(S=!0,Fe(_))),T},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(T){var D=w;return function(){var I=w;w=D;try{return T.apply(this,arguments)}finally{w=I}}}})(Gf);Jf.exports=Gf;var qm=Jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=x,Me=qm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xf=new Set,Ri={};function Vn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(Ri[e]=t,e=0;e<t.length;e++)Xf.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,e1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wu={},Hu={};function t1(e){return Ms.call(Hu,e)?!0:Ms.call(Wu,e)?!1:e1.test(e)?Hu[e]=!0:(Wu[e]=!0,!1)}function n1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function r1(e,t,n,r){if(t===null||typeof t>"u"||n1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ec,tc);Le[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ec,tc);Le[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ec,tc);Le[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function nc(e,t,n,r){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(r1(t,n,i,r)&&(n=null),r||i===null?t1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),ir=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),ea=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),ep=Symbol.for("react.offscreen"),Vu=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Vu&&e[Vu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,hs;function Si(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var ms=!1;function gs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=a);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function i1(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=gs(e.type,!1),e;case 11:return e=gs(e.type.render,!1),e;case 1:return e=gs(e.type,!0),e;default:return""}}function ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ir:return"Portal";case ea:return"Profiler";case rc:return"StrictMode";case ta:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mf:return(e.displayName||"Context")+".Consumer";case qf:return(e._context.displayName||"Context")+".Provider";case ic:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lc:return t=e.displayName||null,t!==null?t:ra(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return ra(e(t))}catch{}}return null}function l1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ra(t);case 8:return t===rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function o1(e){var t=tp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xl(e){e._valueTracker||(e._valueTracker=o1(e))}function np(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ia(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rp(e,t){t=t.checked,t!=null&&nc(e,"checked",t,!1)}function la(e,t){rp(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&oa(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oa(e,t,n){(t!=="number"||ql(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Ci(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function ip(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sl,op=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sl=Sl||document.createElement("div"),Sl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(e){s1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$i[t]=$i[e]})});function sp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$i.hasOwnProperty(e)&&$i[e]?(""+t).trim():t+"px"}function ap(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var a1=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(a1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,vr=null,yr=null;function Ju(e){if(e=cl(e)){if(typeof fa!="function")throw Error(N(280));var t=e.stateNode;t&&(t=jo(t),fa(e.stateNode,e.type,t))}}function cp(e){vr?yr?yr.push(e):yr=[e]:vr=e}function up(){if(vr){var e=vr,t=yr;if(yr=vr=null,Ju(e),t)for(e=0;e<t.length;e++)Ju(t[e])}}function dp(e,t){return e(t)}function fp(){}var vs=!1;function pp(e,t,n){if(vs)return e(t,n);vs=!0;try{return dp(e,t,n)}finally{vs=!1,(vr!==null||yr!==null)&&(fp(),up())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var pa=!1;if(Ft)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){pa=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{pa=!1}function c1(e,t,n,r,i,l,o,a,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(v){this.onError(v)}}var _i=!1,Ml=null,eo=!1,ha=null,u1={onError:function(e){_i=!0,Ml=e}};function d1(e,t,n,r,i,l,o,a,c){_i=!1,Ml=null,c1.apply(u1,arguments)}function f1(e,t,n,r,i,l,o,a,c){if(d1.apply(this,arguments),_i){if(_i){var p=Ml;_i=!1,Ml=null}else throw Error(N(198));eo||(eo=!0,ha=p)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gu(e){if(Qn(e)!==e)throw Error(N(188))}function p1(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Gu(i),e;if(l===r)return Gu(i),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function mp(e){return e=p1(e),e!==null?gp(e):null}function gp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gp(e);if(t!==null)return t;e=e.sibling}return null}var vp=Me.unstable_scheduleCallback,Xu=Me.unstable_cancelCallback,h1=Me.unstable_shouldYield,m1=Me.unstable_requestPaint,pe=Me.unstable_now,g1=Me.unstable_getCurrentPriorityLevel,sc=Me.unstable_ImmediatePriority,yp=Me.unstable_UserBlockingPriority,to=Me.unstable_NormalPriority,v1=Me.unstable_LowPriority,wp=Me.unstable_IdlePriority,No=null,Lt=null;function y1(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:S1,w1=Math.log,x1=Math.LN2;function S1(e){return e>>>=0,e===0?32:31-(w1(e)/x1|0)|0}var Cl=64,bl=4194304;function bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bi(a):(l&=o,l!==0&&(r=bi(l)))}else o=n&~i,o!==0?r=bi(o):l!==0&&(r=bi(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function C1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-yt(l),a=1<<o,c=i[o];c===-1?(!(a&n)||a&r)&&(i[o]=C1(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xp(){var e=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function k1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function ac(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Sp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cp,cc,bp,kp,Ep,ga=!1,kl=[],rn=null,ln=null,on=null,Ai=new Map,Fi=new Map,qt=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qu(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function qr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=cl(t),t!==null&&cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $1(e,t,n,r,i){switch(t){case"focusin":return rn=qr(rn,e,t,n,r,i),!0;case"dragenter":return ln=qr(ln,e,t,n,r,i),!0;case"mouseover":return on=qr(on,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Ai.set(l,qr(Ai.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Fi.set(l,qr(Fi.get(l)||null,e,t,n,r,i)),!0}return!1}function $p(e){var t=$n(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=hp(n),t!==null){e.blockedOn=t,Ep(e.priority,function(){bp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);da=r,n.target.dispatchEvent(r),da=null}else return t=cl(n),t!==null&&cc(t),e.blockedOn=n,!1;t.shift()}return!0}function Mu(e,t,n){Fl(e)&&n.delete(t)}function _1(){ga=!1,rn!==null&&Fl(rn)&&(rn=null),ln!==null&&Fl(ln)&&(ln=null),on!==null&&Fl(on)&&(on=null),Ai.forEach(Mu),Fi.forEach(Mu)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ga||(ga=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,_1)))}function Bi(e){function t(i){return Mr(i,e)}if(0<kl.length){Mr(kl[0],e);for(var n=1;n<kl.length;n++){var r=kl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Mr(rn,e),ln!==null&&Mr(ln,e),on!==null&&Mr(on,e),Ai.forEach(t),Fi.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)$p(n),n.blockedOn===null&&qt.shift()}var wr=Ht.ReactCurrentBatchConfig,ro=!0;function L1(e,t,n,r){var i=G,l=wr.transition;wr.transition=null;try{G=1,uc(e,t,n,r)}finally{G=i,wr.transition=l}}function P1(e,t,n,r){var i=G,l=wr.transition;wr.transition=null;try{G=4,uc(e,t,n,r)}finally{G=i,wr.transition=l}}function uc(e,t,n,r){if(ro){var i=va(e,t,n,r);if(i===null)Ls(e,t,r,io,n),qu(e,r);else if($1(i,e,t,n,r))r.stopPropagation();else if(qu(e,r),t&4&&-1<E1.indexOf(e)){for(;i!==null;){var l=cl(i);if(l!==null&&Cp(l),l=va(e,t,n,r),l===null&&Ls(e,t,r,io,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ls(e,t,r,null,n)}}var io=null;function va(e,t,n,r){if(io=null,e=oc(r),e=$n(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function _p(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g1()){case sc:return 1;case yp:return 4;case to:case v1:return 16;case wp:return 536870912;default:return 16}default:return 16}}var en=null,dc=null,Bl=null;function Lp(){if(Bl)return Bl;var e,t=dc,n=t.length,r,i="value"in en?en.value:en.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Bl=i.slice(e,1<r?1-r:void 0)}function Ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function ed(){return!1}function tt(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?El:ed,this.isPropagationStopped=ed,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=tt(jr),al=ce({},jr,{view:0,detail:0}),N1=tt(al),ws,xs,ei,zo=ce({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(ws=e.screenX-ei.screenX,xs=e.screenY-ei.screenY):xs=ws=0,ei=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),td=tt(zo),z1=ce({},zo,{dataTransfer:0}),T1=tt(z1),O1=ce({},al,{relatedTarget:0}),Ss=tt(O1),j1=ce({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),R1=tt(j1),D1=ce({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I1=tt(D1),A1=ce({},jr,{data:0}),nd=tt(A1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=U1[e])?!!t[e]:!1}function pc(){return W1}var H1=ce({},al,{key:function(e){if(e.key){var t=F1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V1=tt(H1),Q1=ce({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=tt(Q1),K1=ce({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Y1=tt(K1),Z1=ce({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=tt(Z1),G1=ce({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X1=tt(G1),q1=[9,13,27,32],hc=Ft&&"CompositionEvent"in window,Li=null;Ft&&"documentMode"in document&&(Li=document.documentMode);var M1=Ft&&"TextEvent"in window&&!Li,Pp=Ft&&(!hc||Li&&8<Li&&11>=Li),id=" ",ld=!1;function Np(e,t){switch(e){case"keyup":return q1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function eg(e,t){switch(e){case"compositionend":return zp(t);case"keypress":return t.which!==32?null:(ld=!0,id);case"textInput":return e=t.data,e===id&&ld?null:e;default:return null}}function tg(e,t){if(or)return e==="compositionend"||!hc&&Np(e,t)?(e=Lp(),Bl=dc=en=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pp&&t.locale!=="ko"?null:t.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ng[e.type]:t==="textarea"}function Tp(e,t,n,r){cp(r),t=lo(t,"onChange"),0<t.length&&(n=new fc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pi=null,Ui=null;function rg(e){Hp(e,0)}function To(e){var t=cr(e);if(np(t))return e}function ig(e,t){if(e==="change")return t}var Op=!1;if(Ft){var Cs;if(Ft){var bs="oninput"in document;if(!bs){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),bs=typeof sd.oninput=="function"}Cs=bs}else Cs=!1;Op=Cs&&(!document.documentMode||9<document.documentMode)}function ad(){Pi&&(Pi.detachEvent("onpropertychange",jp),Ui=Pi=null)}function jp(e){if(e.propertyName==="value"&&To(Ui)){var t=[];Tp(t,Ui,e,oc(e)),pp(rg,t)}}function lg(e,t,n){e==="focusin"?(ad(),Pi=t,Ui=n,Pi.attachEvent("onpropertychange",jp)):e==="focusout"&&ad()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Ui)}function sg(e,t){if(e==="click")return To(t)}function ag(e,t){if(e==="input"||e==="change")return To(t)}function cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:cg;function Wi(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ud(e,t){var n=cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cd(n)}}function Rp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dp(){for(var e=window,t=ql();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ql(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ug(e){var t=Dp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rp(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ud(n,l);var o=ud(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dg=Ft&&"documentMode"in document&&11>=document.documentMode,sr=null,ya=null,Ni=null,wa=!1;function dd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||sr==null||sr!==ql(r)||(r=sr,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ni&&Wi(Ni,r)||(Ni=r,r=lo(ya,"onSelect"),0<r.length&&(t=new fc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function $l(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},ks={},Ip={};Ft&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Oo(e){if(ks[e])return ks[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ip)return ks[e]=t[n];return e}var Ap=Oo("animationend"),Fp=Oo("animationiteration"),Bp=Oo("animationstart"),Up=Oo("transitionend"),Wp=new Map,fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){Wp.set(e,t),Vn(t,[e])}for(var Es=0;Es<fd.length;Es++){var $s=fd[Es],fg=$s.toLowerCase(),pg=$s[0].toUpperCase()+$s.slice(1);hn(fg,"on"+pg)}hn(Ap,"onAnimationEnd");hn(Fp,"onAnimationIteration");hn(Bp,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Up,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function pd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,f1(r,t,void 0,e),e.currentTarget=null}function Hp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,p=a.currentTarget;if(a=a.listener,c!==l&&i.isPropagationStopped())break e;pd(i,a,p),l=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,p=a.currentTarget,a=a.listener,c!==l&&i.isPropagationStopped())break e;pd(i,a,p),l=c}}}if(eo)throw e=ha,eo=!1,ha=null,e}function te(e,t){var n=t[ka];n===void 0&&(n=t[ka]=new Set);var r=e+"__bubble";n.has(r)||(Vp(t,e,2,!1),n.add(r))}function _s(e,t,n){var r=0;t&&(r|=4),Vp(n,e,r,t)}var _l="_reactListening"+Math.random().toString(36).slice(2);function Hi(e){if(!e[_l]){e[_l]=!0,Xf.forEach(function(n){n!=="selectionchange"&&(hg.has(n)||_s(n,!1,e),_s(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_l]||(t[_l]=!0,_s("selectionchange",!1,t))}}function Vp(e,t,n,r){switch(_p(t)){case 1:var i=L1;break;case 4:i=P1;break;default:i=uc}n=i.bind(null,t,n,e),i=void 0,!pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ls(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$n(a),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}a=a.parentNode}}r=r.return}pp(function(){var p=l,v=oc(n),g=[];e:{var w=Wp.get(e);if(w!==void 0){var k=fc,S=e;switch(e){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":k=V1;break;case"focusin":S="focus",k=Ss;break;case"focusout":S="blur",k=Ss;break;case"beforeblur":case"afterblur":k=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=T1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Y1;break;case Ap:case Fp:case Bp:k=R1;break;case Up:k=J1;break;case"scroll":k=N1;break;case"wheel":k=X1;break;case"copy":case"cut":case"paste":k=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=rd}var C=(t&4)!==0,P=!C&&e==="scroll",h=C?w!==null?w+"Capture":null:w;C=[];for(var d=p,y;d!==null;){y=d;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,h!==null&&(b=Ii(d,h),b!=null&&C.push(Vi(d,b,y)))),P)break;d=d.return}0<C.length&&(w=new k(w,S,null,n,v),g.push({event:w,listeners:C}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",w&&n!==da&&(S=n.relatedTarget||n.fromElement)&&($n(S)||S[Bt]))break e;if((k||w)&&(w=v.window===v?v:(w=v.ownerDocument)?w.defaultView||w.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=p,S=S?$n(S):null,S!==null&&(P=Qn(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=p),k!==S)){if(C=td,b="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=rd,b="onPointerLeave",h="onPointerEnter",d="pointer"),P=k==null?w:cr(k),y=S==null?w:cr(S),w=new C(b,d+"leave",k,n,v),w.target=P,w.relatedTarget=y,b=null,$n(v)===p&&(C=new C(h,d+"enter",S,n,v),C.target=y,C.relatedTarget=P,b=C),P=b,k&&S)t:{for(C=k,h=S,d=0,y=C;y;y=Mn(y))d++;for(y=0,b=h;b;b=Mn(b))y++;for(;0<d-y;)C=Mn(C),d--;for(;0<y-d;)h=Mn(h),y--;for(;d--;){if(C===h||h!==null&&C===h.alternate)break t;C=Mn(C),h=Mn(h)}C=null}else C=null;k!==null&&hd(g,w,k,C,!1),S!==null&&P!==null&&hd(g,P,S,C,!0)}}e:{if(w=p?cr(p):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var _=ig;else if(od(w))if(Op)_=ag;else{_=og;var $=lg}else(k=w.nodeName)&&k.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(_=sg);if(_&&(_=_(e,p))){Tp(g,_,n,v);break e}$&&$(e,w,p),e==="focusout"&&($=w._wrapperState)&&$.controlled&&w.type==="number"&&oa(w,"number",w.value)}switch($=p?cr(p):window,e){case"focusin":(od($)||$.contentEditable==="true")&&(sr=$,ya=p,Ni=null);break;case"focusout":Ni=ya=sr=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,dd(g,n,v);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":dd(g,n,v)}var L;if(hc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else or?Np(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Pp&&n.locale!=="ko"&&(or||R!=="onCompositionStart"?R==="onCompositionEnd"&&or&&(L=Lp()):(en=v,dc="value"in en?en.value:en.textContent,or=!0)),$=lo(p,R),0<$.length&&(R=new nd(R,e,null,n,v),g.push({event:R,listeners:$}),L?R.data=L:(L=zp(n),L!==null&&(R.data=L)))),(L=M1?eg(e,n):tg(e,n))&&(p=lo(p,"onBeforeInput"),0<p.length&&(v=new nd("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:p}),v.data=L))}Hp(g,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ii(e,n),l!=null&&r.unshift(Vi(e,l,i)),l=Ii(e,t),l!=null&&r.push(Vi(e,l,i))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hd(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,p=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&p!==null&&(a=p,i?(c=Ii(n,l),c!=null&&o.unshift(Vi(n,c,a))):i||(c=Ii(n,l),c!=null&&o.push(Vi(n,c,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var mg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function md(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(gg,"")}function Ll(e,t,n){if(t=md(t),md(e)!==t&&n)throw Error(N(425))}function oo(){}var xa=null,Sa=null;function Ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,yg=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(e){return gd.resolve(null).then(e).catch(wg)}:ba;function wg(e){setTimeout(function(){throw e})}function Ps(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bi(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Rr,Qi="__reactProps$"+Rr,Bt="__reactContainer$"+Rr,ka="__reactEvents$"+Rr,xg="__reactListeners$"+Rr,Sg="__reactHandles$"+Rr;function $n(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vd(e);e!==null;){if(n=e[_t])return n;e=vd(e)}return t}e=n,n=e.parentNode}return null}function cl(e){return e=e[_t]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function jo(e){return e[Qi]||null}var Ea=[],ur=-1;function mn(e){return{current:e}}function ne(e){0>ur||(e.current=Ea[ur],Ea[ur]=null,ur--)}function M(e,t){ur++,Ea[ur]=e.current,e.current=t}var pn={},Oe=mn(pn),Qe=mn(!1),In=pn;function kr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function so(){ne(Qe),ne(Oe)}function yd(e,t,n){if(Oe.current!==pn)throw Error(N(168));M(Oe,t),M(Qe,n)}function Qp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,l1(e)||"Unknown",i));return ce({},n,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,In=Oe.current,M(Oe,e),M(Qe,Qe.current),!0}function wd(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Qp(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,ne(Qe),ne(Oe),M(Oe,e)):ne(Qe),M(Qe,n)}var jt=null,Ro=!1,Ns=!1;function Kp(e){jt===null?jt=[e]:jt.push(e)}function Cg(e){Ro=!0,Kp(e)}function gn(){if(!Ns&&jt!==null){Ns=!0;var e=0,t=G;try{var n=jt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Ro=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),vp(sc,gn),i}finally{G=t,Ns=!1}}return null}var dr=[],fr=0,co=null,uo=0,rt=[],it=0,An=null,Rt=1,Dt="";function bn(e,t){dr[fr++]=uo,dr[fr++]=co,co=e,uo=t}function Yp(e,t,n){rt[it++]=Rt,rt[it++]=Dt,rt[it++]=An,An=e;var r=Rt;e=Dt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var l=32-yt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-yt(t)+i|n<<i|r,Dt=l+e}else Rt=1<<l|n<<i|r,Dt=e}function gc(e){e.return!==null&&(bn(e,1),Yp(e,1,0))}function vc(e){for(;e===co;)co=dr[--fr],dr[fr]=null,uo=dr[--fr],dr[fr]=null;for(;e===An;)An=rt[--it],rt[it]=null,Dt=rt[--it],rt[it]=null,Rt=rt[--it],rt[it]=null}var Xe=null,Ge=null,re=!1,ht=null;function Zp(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Rt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ge=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _a(e){if(re){var t=Ge;if(t){var n=t;if(!xd(e,t)){if($a(e))throw Error(N(418));t=sn(n.nextSibling);var r=Xe;t&&xd(e,t)?Zp(r,n):(e.flags=e.flags&-4097|2,re=!1,Xe=e)}}else{if($a(e))throw Error(N(418));e.flags=e.flags&-4097|2,re=!1,Xe=e}}}function Sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Pl(e){if(e!==Xe)return!1;if(!re)return Sd(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ca(e.type,e.memoizedProps)),t&&(t=Ge)){if($a(e))throw Jp(),Error(N(418));for(;t;)Zp(e,t),t=sn(t.nextSibling)}if(Sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?sn(e.stateNode.nextSibling):null;return!0}function Jp(){for(var e=Ge;e;)e=sn(e.nextSibling)}function Er(){Ge=Xe=null,re=!1}function yc(e){ht===null?ht=[e]:ht.push(e)}var bg=Ht.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Nl(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cd(e){var t=e._init;return t(e._payload)}function Gp(e){function t(h,d){if(e){var y=h.deletions;y===null?(h.deletions=[d],h.flags|=16):y.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=dn(h,d),h.index=0,h.sibling=null,h}function l(h,d,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<d?(h.flags|=2,d):y):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,y,b){return d===null||d.tag!==6?(d=Is(y,h.mode,b),d.return=h,d):(d=i(d,y),d.return=h,d)}function c(h,d,y,b){var _=y.type;return _===lr?v(h,d,y.props.children,b,y.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Jt&&Cd(_)===d.type)?(b=i(d,y.props),b.ref=ti(h,d,y),b.return=h,b):(b=Zl(y.type,y.key,y.props,null,h.mode,b),b.ref=ti(h,d,y),b.return=h,b)}function p(h,d,y,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=As(y,h.mode,b),d.return=h,d):(d=i(d,y.children||[]),d.return=h,d)}function v(h,d,y,b,_){return d===null||d.tag!==7?(d=Rn(y,h.mode,b,_),d.return=h,d):(d=i(d,y),d.return=h,d)}function g(h,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Is(""+d,h.mode,y),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wl:return y=Zl(d.type,d.key,d.props,null,h.mode,y),y.ref=ti(h,null,d),y.return=h,y;case ir:return d=As(d,h.mode,y),d.return=h,d;case Jt:var b=d._init;return g(h,b(d._payload),y)}if(Ci(d)||Gr(d))return d=Rn(d,h.mode,y,null),d.return=h,d;Nl(h,d)}return null}function w(h,d,y,b){var _=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:a(h,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wl:return y.key===_?c(h,d,y,b):null;case ir:return y.key===_?p(h,d,y,b):null;case Jt:return _=y._init,w(h,d,_(y._payload),b)}if(Ci(y)||Gr(y))return _!==null?null:v(h,d,y,b,null);Nl(h,y)}return null}function k(h,d,y,b,_){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(y)||null,a(d,h,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wl:return h=h.get(b.key===null?y:b.key)||null,c(d,h,b,_);case ir:return h=h.get(b.key===null?y:b.key)||null,p(d,h,b,_);case Jt:var $=b._init;return k(h,d,y,$(b._payload),_)}if(Ci(b)||Gr(b))return h=h.get(y)||null,v(d,h,b,_,null);Nl(d,b)}return null}function S(h,d,y,b){for(var _=null,$=null,L=d,R=d=0,V=null;L!==null&&R<y.length;R++){L.index>R?(V=L,L=null):V=L.sibling;var A=w(h,L,y[R],b);if(A===null){L===null&&(L=V);break}e&&L&&A.alternate===null&&t(h,L),d=l(A,d,R),$===null?_=A:$.sibling=A,$=A,L=V}if(R===y.length)return n(h,L),re&&bn(h,R),_;if(L===null){for(;R<y.length;R++)L=g(h,y[R],b),L!==null&&(d=l(L,d,R),$===null?_=L:$.sibling=L,$=L);return re&&bn(h,R),_}for(L=r(h,L);R<y.length;R++)V=k(L,h,R,y[R],b),V!==null&&(e&&V.alternate!==null&&L.delete(V.key===null?R:V.key),d=l(V,d,R),$===null?_=V:$.sibling=V,$=V);return e&&L.forEach(function(ie){return t(h,ie)}),re&&bn(h,R),_}function C(h,d,y,b){var _=Gr(y);if(typeof _!="function")throw Error(N(150));if(y=_.call(y),y==null)throw Error(N(151));for(var $=_=null,L=d,R=d=0,V=null,A=y.next();L!==null&&!A.done;R++,A=y.next()){L.index>R?(V=L,L=null):V=L.sibling;var ie=w(h,L,A.value,b);if(ie===null){L===null&&(L=V);break}e&&L&&ie.alternate===null&&t(h,L),d=l(ie,d,R),$===null?_=ie:$.sibling=ie,$=ie,L=V}if(A.done)return n(h,L),re&&bn(h,R),_;if(L===null){for(;!A.done;R++,A=y.next())A=g(h,A.value,b),A!==null&&(d=l(A,d,R),$===null?_=A:$.sibling=A,$=A);return re&&bn(h,R),_}for(L=r(h,L);!A.done;R++,A=y.next())A=k(L,h,R,A.value,b),A!==null&&(e&&A.alternate!==null&&L.delete(A.key===null?R:A.key),d=l(A,d,R),$===null?_=A:$.sibling=A,$=A);return e&&L.forEach(function(ct){return t(h,ct)}),re&&bn(h,R),_}function P(h,d,y,b){if(typeof y=="object"&&y!==null&&y.type===lr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case wl:e:{for(var _=y.key,$=d;$!==null;){if($.key===_){if(_=y.type,_===lr){if($.tag===7){n(h,$.sibling),d=i($,y.props.children),d.return=h,h=d;break e}}else if($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Jt&&Cd(_)===$.type){n(h,$.sibling),d=i($,y.props),d.ref=ti(h,$,y),d.return=h,h=d;break e}n(h,$);break}else t(h,$);$=$.sibling}y.type===lr?(d=Rn(y.props.children,h.mode,b,y.key),d.return=h,h=d):(b=Zl(y.type,y.key,y.props,null,h.mode,b),b.ref=ti(h,d,y),b.return=h,h=b)}return o(h);case ir:e:{for($=y.key;d!==null;){if(d.key===$)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(h,d.sibling),d=i(d,y.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=As(y,h.mode,b),d.return=h,h=d}return o(h);case Jt:return $=y._init,P(h,d,$(y._payload),b)}if(Ci(y))return S(h,d,y,b);if(Gr(y))return C(h,d,y,b);Nl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,y),d.return=h,h=d):(n(h,d),d=Is(y,h.mode,b),d.return=h,h=d),o(h)):n(h,d)}return P}var $r=Gp(!0),Xp=Gp(!1),fo=mn(null),po=null,pr=null,wc=null;function xc(){wc=pr=po=null}function Sc(e){var t=fo.current;ne(fo),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){po=e,wc=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(wc!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(po===null)throw Error(N(308));pr=e,po.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var _n=null;function Cc(e){_n===null?_n=[e]:_n.push(e)}function qp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Cc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}function bd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var i=e.updateQueue;Gt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,p=c.next;c.next=null,o===null?l=p:o.next=p,o=c;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==o&&(a===null?v.firstBaseUpdate=p:a.next=p,v.lastBaseUpdate=c))}if(l!==null){var g=i.baseState;o=0,v=p=c=null,a=l;do{var w=a.lane,k=a.eventTime;if((r&w)===w){v!==null&&(v=v.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,C=a;switch(w=t,k=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){g=S.call(k,g,w);break e}g=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,w=typeof S=="function"?S.call(k,g,w):S,w==null)break e;g=ce({},g,w);break e;case 2:Gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[a]:w.push(a))}else k={eventTime:k,lane:w,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(p=v=k,c=g):v=v.next=k,o|=w;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;w=a,a=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(v===null&&(c=g),i.baseState=c,i.firstBaseUpdate=p,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Bn|=o,e.lanes=o,e.memoizedState=g}}function kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var ul={},Pt=mn(ul),Ki=mn(ul),Yi=mn(ul);function Ln(e){if(e===ul)throw Error(N(174));return e}function kc(e,t){switch(M(Yi,t),M(Ki,e),M(Pt,ul),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:aa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=aa(t,e)}ne(Pt),M(Pt,t)}function _r(){ne(Pt),ne(Ki),ne(Yi)}function eh(e){Ln(Yi.current);var t=Ln(Pt.current),n=aa(t,e.type);t!==n&&(M(Ki,e),M(Pt,n))}function Ec(e){Ki.current===e&&(ne(Pt),ne(Ki))}var se=mn(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zs=[];function $c(){for(var e=0;e<zs.length;e++)zs[e]._workInProgressVersionPrimary=null;zs.length=0}var Hl=Ht.ReactCurrentDispatcher,Ts=Ht.ReactCurrentBatchConfig,Fn=0,ae=null,ye=null,Se=null,go=!1,zi=!1,Zi=0,kg=0;function Pe(){throw Error(N(321))}function _c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Lc(e,t,n,r,i,l){if(Fn=l,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hl.current=e===null||e.memoizedState===null?Lg:Pg,e=n(r,i),zi){l=0;do{if(zi=!1,Zi=0,25<=l)throw Error(N(301));l+=1,Se=ye=null,t.updateQueue=null,Hl.current=Ng,e=n(r,i)}while(zi)}if(Hl.current=vo,t=ye!==null&&ye.next!==null,Fn=0,Se=ye=ae=null,go=!1,t)throw Error(N(300));return e}function Pc(){var e=Zi!==0;return Zi=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=e:Se=Se.next=e,Se}function at(){if(ye===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ae.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(N(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ae.memoizedState=Se=e:Se=Se.next=e}return Se}function Ji(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=at(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,c=null,p=l;do{var v=p.lane;if((Fn&v)===v)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var g={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(a=c=g,o=r):c=c.next=g,ae.lanes|=v,Bn|=v}p=p.next}while(p!==null&&p!==l);c===null?o=r:c.next=a,xt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ae.lanes|=l,Bn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function js(e){var t=at(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);xt(l,t.memoizedState)||(Ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function th(){}function nh(e,t){var n=ae,r=at(),i=t(),l=!xt(r.memoizedState,i);if(l&&(r.memoizedState=i,Ve=!0),r=r.queue,Nc(lh.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Gi(9,ih.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(N(349));Fn&30||rh(n,t,i)}return i}function rh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ih(e,t,n,r){t.value=n,t.getSnapshot=r,oh(t)&&sh(e)}function lh(e,t,n){return n(function(){oh(t)&&sh(e)})}function oh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function sh(e){var t=Ut(e,1);t!==null&&wt(t,e,1,-1)}function Ed(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t.queue=e,e=e.dispatch=_g.bind(null,ae,e),[t.memoizedState,e]}function Gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ah(){return at().memoizedState}function Vl(e,t,n,r){var i=kt();ae.flags|=e,i.memoizedState=Gi(1|t,n,void 0,r===void 0?null:r)}function Do(e,t,n,r){var i=at();r=r===void 0?null:r;var l=void 0;if(ye!==null){var o=ye.memoizedState;if(l=o.destroy,r!==null&&_c(r,o.deps)){i.memoizedState=Gi(t,n,l,r);return}}ae.flags|=e,i.memoizedState=Gi(1|t,n,l,r)}function $d(e,t){return Vl(8390656,8,e,t)}function Nc(e,t){return Do(2048,8,e,t)}function ch(e,t){return Do(4,2,e,t)}function uh(e,t){return Do(4,4,e,t)}function dh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fh(e,t,n){return n=n!=null?n.concat([e]):null,Do(4,4,dh.bind(null,t,e),n)}function zc(){}function ph(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mh(e,t,n){return Fn&21?(xt(n,t)||(n=xp(),ae.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Eg(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Ts.transition;Ts.transition={};try{e(!1),t()}finally{G=n,Ts.transition=r}}function gh(){return at().memoizedState}function $g(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vh(e))yh(t,n);else if(n=qp(e,t,n,r),n!==null){var i=De();wt(n,e,r,i),wh(n,t,r)}}function _g(e,t,n){var r=un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vh(e))yh(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,xt(a,o)){var c=t.interleaved;c===null?(i.next=i,Cc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=qp(e,t,i,r),n!==null&&(i=De(),wt(n,e,r,i),wh(n,t,r))}}function vh(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function yh(e,t){zi=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}var vo={readContext:st,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Lg={readContext:st,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:$d,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vl(4194308,4,dh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vl(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$g.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Ed,useDebugValue:zc,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Ed(!1),t=e[0];return e=Eg.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=kt();if(re){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Ce===null)throw Error(N(349));Fn&30||rh(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,$d(lh.bind(null,r,l,e),[e]),r.flags|=2048,Gi(9,ih.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=kt(),t=Ce.identifierPrefix;if(re){var n=Dt,r=Rt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pg={readContext:st,useCallback:ph,useContext:st,useEffect:Nc,useImperativeHandle:fh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:hh,useReducer:Os,useRef:ah,useState:function(){return Os(Ji)},useDebugValue:zc,useDeferredValue:function(e){var t=at();return mh(t,ye.memoizedState,e)},useTransition:function(){var e=Os(Ji)[0],t=at().memoizedState;return[e,t]},useMutableSource:th,useSyncExternalStore:nh,useId:gh,unstable_isNewReconciler:!1},Ng={readContext:st,useCallback:ph,useContext:st,useEffect:Nc,useImperativeHandle:fh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:hh,useReducer:js,useRef:ah,useState:function(){return js(Ji)},useDebugValue:zc,useDeferredValue:function(e){var t=at();return ye===null?t.memoizedState=e:mh(t,ye.memoizedState,e)},useTransition:function(){var e=js(Ji)[0],t=at().memoizedState;return[e,t]},useMutableSource:th,useSyncExternalStore:nh,useId:gh,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=un(e),l=At(r,i);l.payload=t,n!=null&&(l.callback=n),t=an(e,l,i),t!==null&&(wt(t,e,i,r),Wl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=un(e),l=At(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=an(e,l,i),t!==null&&(wt(t,e,i,r),Wl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=un(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=an(e,i,r),t!==null&&(wt(t,e,r,n),Wl(t,e,r))}};function _d(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Wi(n,r)||!Wi(i,l):!0}function xh(e,t,n){var r=!1,i=pn,l=t.contextType;return typeof l=="object"&&l!==null?l=st(l):(i=Ke(t)?In:Oe.current,r=t.contextTypes,l=(r=r!=null)?kr(e,i):pn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ld(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function Na(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bc(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=st(l):(l=Ke(t)?In:Oe.current,i.context=kr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Pa(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Io.enqueueReplaceState(i,i.state,null),ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var n="",r=t;do n+=i1(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Rs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zg=typeof WeakMap=="function"?WeakMap:Map;function Sh(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,Ua=r),za(e,t)},n}function Ch(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){za(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function Nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Tg=Ht.ReactCurrentOwner,Ve=!1;function Re(e,t,n,r){t.child=e===null?Xp(t,null,n,r):$r(t,e.child,n,r)}function Td(e,t,n,r,i){n=n.render;var l=t.ref;return xr(t,i),r=Lc(e,t,n,r,l,i),n=Pc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(re&&n&&gc(t),t.flags|=1,Re(e,t,r,i),t.child)}function Od(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Fc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,bh(e,t,l,r,i)):(e=Zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=dn(l,r),e.ref=t.ref,e.return=t,t.child=e}function bh(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Wi(l,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return Ta(e,t,n,r,i)}function kh(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(mr,Je),Je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(mr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,M(mr,Je),Je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,M(mr,Je),Je|=r;return Re(e,t,i,n),t.child}function Eh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,r,i){var l=Ke(n)?In:Oe.current;return l=kr(t,l),xr(t,i),n=Lc(e,t,n,r,l,i),r=Pc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(re&&r&&gc(t),t.flags|=1,Re(e,t,n,i),t.child)}function jd(e,t,n,r,i){if(Ke(n)){var l=!0;ao(t)}else l=!1;if(xr(t,i),t.stateNode===null)Ql(e,t),xh(t,n,r),Na(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var c=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=st(p):(p=Ke(n)?In:Oe.current,p=kr(t,p));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==p)&&Ld(t,o,r,p),Gt=!1;var w=t.memoizedState;o.state=w,ho(t,r,o,i),c=t.memoizedState,a!==r||w!==c||Qe.current||Gt?(typeof v=="function"&&(Pa(t,n,v,r),c=t.memoizedState),(a=Gt||_d(t,n,a,r,w,c,p))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=p,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mp(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:ft(t.type,a),o.props=p,g=t.pendingProps,w=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=Ke(n)?In:Oe.current,c=kr(t,c));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||w!==c)&&Ld(t,o,r,c),Gt=!1,w=t.memoizedState,o.state=w,ho(t,r,o,i);var S=t.memoizedState;a!==g||w!==S||Qe.current||Gt?(typeof k=="function"&&(Pa(t,n,k,r),S=t.memoizedState),(p=Gt||_d(t,n,p,r,w,S,c)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=c,r=p):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Oa(e,t,n,r,l,i)}function Oa(e,t,n,r,i,l){Eh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&wd(t,n,!1),Wt(e,t,l);r=t.stateNode,Tg.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=$r(t,e.child,null,l),t.child=$r(t,null,a,l)):Re(e,t,a,l),t.memoizedState=r.state,i&&wd(t,n,!0),t.child}function $h(e){var t=e.stateNode;t.pendingContext?yd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yd(e,t.context,!1),kc(e,t.containerInfo)}function Rd(e,t,n,r,i){return Er(),yc(i),t.flags|=256,Re(e,t,n,r),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function _h(e,t,n){var r=t.pendingProps,i=se.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(se,i&1),e===null)return _a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Bo(o,r,0,null),e=Rn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ra(n),t.memoizedState=ja,e):Tc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Og(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=dn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=dn(a,l):(l=Rn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Ra(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ja,r}return l=e.child,e=l.sibling,r=dn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tc(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zl(e,t,n,r){return r!==null&&yc(r),$r(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Og(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Rs(Error(N(422))),zl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Bo({mode:"visible",children:r.children},i,0,null),l=Rn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&$r(t,e.child,null,o),t.child.memoizedState=Ra(o),t.memoizedState=ja,l);if(!(t.mode&1))return zl(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(N(419)),r=Rs(l,r,void 0),zl(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ve||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ut(e,i),wt(r,e,i,-1))}return Ac(),r=Rs(Error(N(421))),zl(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kg.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ge=sn(i.nextSibling),Xe=t,re=!0,ht=null,e!==null&&(rt[it++]=Rt,rt[it++]=Dt,rt[it++]=An,Rt=e.id,Dt=e.overflow,An=t),t=Tc(t,r.children),t.flags|=4096,t)}function Dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function Ds(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Lh(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Re(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,n,t);else if(e.tag===19)Dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ds(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ds(t,!0,n,null,l);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ql(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jg(e,t,n){switch(t.tag){case 3:$h(t),Er();break;case 5:eh(t);break;case 1:Ke(t.type)&&ao(t);break;case 4:kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;M(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?_h(e,t,n):(M(se,se.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);M(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,kh(e,t,n)}return Wt(e,t,n)}var Ph,Da,Nh,zh;Ph=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Da=function(){};Nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Pt.current);var l=null;switch(n){case"input":i=ia(e,i),r=ia(e,r),l=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),l=[];break;case"textarea":i=sa(e,i),r=sa(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}ca(n,r);var o;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var a=i[p];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ri.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var c=r[p];if(a=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&c!==a&&(c!=null||a!=null))if(p==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(p,n)),n=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&te("scroll",e),l||a===c||(l=[])):(l=l||[]).push(p,c))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}};zh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rg(e,t,n){var r=t.pendingProps;switch(vc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ke(t.type)&&so(),Ne(t),null;case 3:return r=t.stateNode,_r(),ne(Qe),ne(Oe),$c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Va(ht),ht=null))),Da(e,t),Ne(t),null;case 5:Ec(t);var i=Ln(Yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ne(t),null}if(e=Ln(Pt.current),Pl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[_t]=t,r[Qi]=l,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)te(ki[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Qu(r,l),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},te("invalid",r);break;case"textarea":Yu(r,l),te("invalid",r)}ca(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ll(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ll(r.textContent,a,e),i=["children",""+a]):Ri.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":xl(r),Ku(r,l,!0);break;case"textarea":xl(r),Zu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[_t]=t,e[Qi]=r,Ph(e,t,!1,!1),t.stateNode=e;e:{switch(o=ua(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)te(ki[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":Qu(e,r),i=ia(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),te("invalid",e);break;case"textarea":Yu(e,r),i=sa(e,r),te("invalid",e);break;default:i=r}ca(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?ap(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&op(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Di(e,c):typeof c=="number"&&Di(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ri.hasOwnProperty(l)?c!=null&&l==="onScroll"&&te("scroll",e):c!=null&&nc(e,l,c,o))}switch(n){case"input":xl(e),Ku(e,r,!1);break;case"textarea":xl(e),Zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?gr(e,!!r.multiple,l,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)zh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ln(Yi.current),Ln(Pt.current),Pl(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(l=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ll(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Ne(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ge!==null&&t.mode&1&&!(t.flags&128))Jp(),Er(),t.flags|=98560,l=!1;else if(l=Pl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[_t]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),l=!1}else ht!==null&&(Va(ht),ht=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?xe===0&&(xe=3):Ac())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return _r(),Da(e,t),e===null&&Hi(t.stateNode.containerInfo),Ne(t),null;case 10:return Sc(t.type._context),Ne(t),null;case 17:return Ke(t.type)&&so(),Ne(t),null;case 19:if(ne(se),l=t.memoizedState,l===null)return Ne(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)ni(l,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,ni(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(se,se.current&1|2),t.child}e=e.sibling}l.tail!==null&&pe()>Pr&&(t.flags|=128,r=!0,ni(l,!1),t.lanes=4194304)}else{if(!r)if(e=mo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!re)return Ne(t),null}else 2*pe()-l.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,ni(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=pe(),t.sibling=null,n=se.current,M(se,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Dg(e,t){switch(vc(t),t.tag){case 1:return Ke(t.type)&&so(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),ne(Qe),ne(Oe),$c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ec(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return _r(),null;case 10:return Sc(t.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var Tl=!1,Te=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,j=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Ia(e,t,n){try{n()}catch(r){de(e,t,r)}}var Id=!1;function Ag(e,t){if(xa=ro,e=Dp(),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,p=0,v=0,g=e,w=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(a=o+i),g!==l||r!==0&&g.nodeType!==3||(c=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)w=g,g=k;for(;;){if(g===e)break t;if(w===n&&++p===i&&(a=o),w===l&&++v===r&&(c=o),(k=g.nextSibling)!==null)break;g=w,w=g.parentNode}g=k}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},ro=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,P=S.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?C:ft(t.type,C),P);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){de(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return S=Id,Id=!1,S}function Ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ia(t,n,l)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Th(e){var t=e.alternate;t!==null&&(e.alternate=null,Th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Qi],delete t[ka],delete t[xg],delete t[Sg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oh(e){return e.tag===5||e.tag===3||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}function Ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}var Ee=null,pt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)jh(e,t,n),n=n.sibling}function jh(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:Te||hr(n,t);case 6:var r=Ee,i=pt;Ee=null,Zt(e,t,n),Ee=r,pt=i,Ee!==null&&(pt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(pt?(e=Ee,n=n.stateNode,e.nodeType===8?Ps(e.parentNode,n):e.nodeType===1&&Ps(e,n),Bi(e)):Ps(Ee,n.stateNode));break;case 4:r=Ee,i=pt,Ee=n.stateNode.containerInfo,pt=!0,Zt(e,t,n),Ee=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Ia(n,t,o),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Te&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Zt(e,t,n),Te=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ig),t.forEach(function(r){var i=Yg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,pt=!1;break e;case 3:Ee=a.stateNode.containerInfo,pt=!0;break e;case 4:Ee=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Ee===null)throw Error(N(160));jh(l,o,i),Ee=null,pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(p){de(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rh(t,e),t=t.sibling}function Rh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),bt(e),r&4){try{Ti(3,e,e.return),Ao(3,e)}catch(C){de(e,e.return,C)}try{Ti(5,e,e.return)}catch(C){de(e,e.return,C)}}break;case 1:dt(t,e),bt(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(dt(t,e),bt(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var i=e.stateNode;try{Di(i,"")}catch(C){de(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&rp(i,l),ua(a,o);var p=ua(a,l);for(o=0;o<c.length;o+=2){var v=c[o],g=c[o+1];v==="style"?ap(i,g):v==="dangerouslySetInnerHTML"?op(i,g):v==="children"?Di(i,g):nc(i,v,g,p)}switch(a){case"input":la(i,l);break;case"textarea":ip(i,l);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?gr(i,!!l.multiple,k,!1):w!==!!l.multiple&&(l.defaultValue!=null?gr(i,!!l.multiple,l.defaultValue,!0):gr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Qi]=l}catch(C){de(e,e.return,C)}}break;case 6:if(dt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(C){de(e,e.return,C)}}break;case 3:if(dt(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(C){de(e,e.return,C)}break;case 4:dt(t,e),bt(e);break;case 13:dt(t,e),bt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Rc=pe())),r&4&&Fd(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(p=Te)||v,dt(t,e),Te=p):dt(t,e),bt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&e.mode&1)for(j=e,v=e.child;v!==null;){for(g=j=v;j!==null;){switch(w=j,k=w.child,w.tag){case 0:case 11:case 14:case 15:Ti(4,w,w.return);break;case 1:hr(w,w.return);var S=w.stateNode;if(typeof S.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(C){de(r,n,C)}}break;case 5:hr(w,w.return);break;case 22:if(w.memoizedState!==null){Ud(g);continue}}k!==null?(k.return=w,j=k):Ud(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,p?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,c=g.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=sp("display",o))}catch(C){de(e,e.return,C)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(C){de(e,e.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:dt(t,e),bt(e),r&4&&Fd(e);break;case 21:break;default:dt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oh(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Di(i,""),r.flags&=-33);var l=Ad(e);Ba(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ad(e);Fa(e,a,o);break;default:throw Error(N(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fg(e,t,n){j=e,Dh(e)}function Dh(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Te;a=Tl;var p=Te;if(Tl=o,(Te=c)&&!p)for(j=i;j!==null;)o=j,c=o.child,o.tag===22&&o.memoizedState!==null?Wd(i):c!==null?(c.return=o,j=c):Wd(i);for(;l!==null;)j=l,Dh(l),l=l.sibling;j=i,Tl=a,Te=p}Bd(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,j=l):Bd(e)}}function Bd(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&kd(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Bi(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Te||t.flags&512&&Aa(t)}catch(w){de(t,t.return,w)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ud(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Wd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(c){de(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){de(t,i,c)}}var l=t.return;try{Aa(t)}catch(c){de(t,l,c)}break;case 5:var o=t.return;try{Aa(t)}catch(c){de(t,o,c)}}}catch(c){de(t,t.return,c)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Bg=Math.ceil,yo=Ht.ReactCurrentDispatcher,Oc=Ht.ReactCurrentOwner,ot=Ht.ReactCurrentBatchConfig,K=0,Ce=null,me=null,_e=0,Je=0,mr=mn(0),xe=0,Xi=null,Bn=0,Fo=0,jc=0,Oi=null,Ue=null,Rc=0,Pr=1/0,Ot=null,wo=!1,Ua=null,cn=null,Ol=!1,tn=null,xo=0,ji=0,Wa=null,Kl=-1,Yl=0;function De(){return K&6?pe():Kl!==-1?Kl:Kl=pe()}function un(e){return e.mode&1?K&2&&_e!==0?_e&-_e:bg.transition!==null?(Yl===0&&(Yl=xp()),Yl):(e=G,e!==0||(e=window.event,e=e===void 0?16:_p(e.type)),e):1}function wt(e,t,n,r){if(50<ji)throw ji=0,Wa=null,Error(N(185));sl(e,n,r),(!(K&2)||e!==Ce)&&(e===Ce&&(!(K&2)&&(Fo|=n),xe===4&&Mt(e,_e)),Ye(e,r),n===1&&K===0&&!(t.mode&1)&&(Pr=pe()+500,Ro&&gn()))}function Ye(e,t){var n=e.callbackNode;b1(e,t);var r=no(e,e===Ce?_e:0);if(r===0)n!==null&&Xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xu(n),t===1)e.tag===0?Cg(Hd.bind(null,e)):Kp(Hd.bind(null,e)),yg(function(){!(K&6)&&gn()}),n=null;else{switch(Sp(r)){case 1:n=sc;break;case 4:n=yp;break;case 16:n=to;break;case 536870912:n=wp;break;default:n=to}n=Vh(n,Ih.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ih(e,t){if(Kl=-1,Yl=0,K&6)throw Error(N(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=no(e,e===Ce?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=K;K|=2;var l=Fh();(Ce!==e||_e!==t)&&(Ot=null,Pr=pe()+500,jn(e,t));do try{Hg();break}catch(a){Ah(e,a)}while(!0);xc(),yo.current=l,K=i,me!==null?t=0:(Ce=null,_e=0,t=xe)}if(t!==0){if(t===2&&(i=ma(e),i!==0&&(r=i,t=Ha(e,i))),t===1)throw n=Xi,jn(e,0),Mt(e,r),Ye(e,pe()),n;if(t===6)Mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ug(i)&&(t=So(e,r),t===2&&(l=ma(e),l!==0&&(r=l,t=Ha(e,l))),t===1))throw n=Xi,jn(e,0),Mt(e,r),Ye(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:kn(e,Ue,Ot);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Rc+500-pe(),10<t)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ba(kn.bind(null,e,Ue,Ot),t);break}kn(e,Ue,Ot);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-yt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bg(r/1960))-r,10<r){e.timeoutHandle=ba(kn.bind(null,e,Ue,Ot),r);break}kn(e,Ue,Ot);break;case 5:kn(e,Ue,Ot);break;default:throw Error(N(329))}}}return Ye(e,pe()),e.callbackNode===n?Ih.bind(null,e):null}function Ha(e,t){var n=Oi;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=So(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Va(t)),e}function Va(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function Ug(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!xt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~jc,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Hd(e){if(K&6)throw Error(N(327));Sr();var t=no(e,0);if(!(t&1))return Ye(e,pe()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=ma(e);r!==0&&(t=r,n=Ha(e,r))}if(n===1)throw n=Xi,jn(e,0),Mt(e,t),Ye(e,pe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ue,Ot),Ye(e,pe()),null}function Dc(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Pr=pe()+500,Ro&&gn())}}function Un(e){tn!==null&&tn.tag===0&&!(K&6)&&Sr();var t=K;K|=1;var n=ot.transition,r=G;try{if(ot.transition=null,G=1,e)return e()}finally{G=r,ot.transition=n,K=t,!(K&6)&&gn()}}function Ic(){Je=mr.current,ne(mr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vg(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(vc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:_r(),ne(Qe),ne(Oe),$c();break;case 5:Ec(r);break;case 4:_r();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Sc(r.type._context);break;case 22:case 23:Ic()}n=n.return}if(Ce=e,me=e=dn(e.current,null),_e=Je=t,xe=0,Xi=null,jc=Fo=Bn=0,Ue=Oi=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}_n=null}return e}function Ah(e,t){do{var n=me;try{if(xc(),Hl.current=vo,go){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(Fn=0,Se=ye=ae=null,zi=!1,Zi=0,Oc.current=null,n===null||n.return===null){xe=1,Xi=t,me=null;break}e:{var l=e,o=n.return,a=n,c=t;if(t=_e,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,v=a,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var w=v.alternate;w?(v.updateQueue=w.updateQueue,v.memoizedState=w.memoizedState,v.lanes=w.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Nd(o);if(k!==null){k.flags&=-257,zd(k,o,a,l,t),k.mode&1&&Pd(l,p,t),t=k,c=p;var S=t.updateQueue;if(S===null){var C=new Set;C.add(c),t.updateQueue=C}else S.add(c);break e}else{if(!(t&1)){Pd(l,p,t),Ac();break e}c=Error(N(426))}}else if(re&&a.mode&1){var P=Nd(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),zd(P,o,a,l,t),yc(Lr(c,a));break e}}l=c=Lr(c,a),xe!==4&&(xe=2),Oi===null?Oi=[l]:Oi.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Sh(l,c,t);bd(l,h);break e;case 1:a=c;var d=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(cn===null||!cn.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var b=Ch(l,a,t);bd(l,b);break e}}l=l.return}while(l!==null)}Uh(n)}catch(_){t=_,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Fh(){var e=yo.current;return yo.current=vo,e===null?vo:e}function Ac(){(xe===0||xe===3||xe===2)&&(xe=4),Ce===null||!(Bn&268435455)&&!(Fo&268435455)||Mt(Ce,_e)}function So(e,t){var n=K;K|=2;var r=Fh();(Ce!==e||_e!==t)&&(Ot=null,jn(e,t));do try{Wg();break}catch(i){Ah(e,i)}while(!0);if(xc(),K=n,yo.current=r,me!==null)throw Error(N(261));return Ce=null,_e=0,xe}function Wg(){for(;me!==null;)Bh(me)}function Hg(){for(;me!==null&&!h1();)Bh(me)}function Bh(e){var t=Hh(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Uh(e):me=t,Oc.current=null}function Uh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dg(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(n=Rg(n,t,Je),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);xe===0&&(xe=5)}function kn(e,t,n){var r=G,i=ot.transition;try{ot.transition=null,G=1,Vg(e,t,n,r)}finally{ot.transition=i,G=r}return null}function Vg(e,t,n,r){do Sr();while(tn!==null);if(K&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(k1(e,l),e===Ce&&(me=Ce=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ol||(Ol=!0,Vh(to,function(){return Sr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ot.transition,ot.transition=null;var o=G;G=1;var a=K;K|=4,Oc.current=null,Ag(e,n),Rh(n,e),ug(Sa),ro=!!xa,Sa=xa=null,e.current=n,Fg(n),m1(),K=a,G=o,ot.transition=l}else e.current=n;if(Ol&&(Ol=!1,tn=e,xo=i),l=e.pendingLanes,l===0&&(cn=null),y1(n.stateNode),Ye(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=Ua,Ua=null,e;return xo&1&&e.tag!==0&&Sr(),l=e.pendingLanes,l&1?e===Wa?ji++:(ji=0,Wa=e):ji=0,gn(),null}function Sr(){if(tn!==null){var e=Sp(xo),t=ot.transition,n=G;try{if(ot.transition=null,G=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,xo=0,K&6)throw Error(N(331));var i=K;for(K|=4,j=e.current;j!==null;){var l=j,o=l.child;if(j.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var p=a[c];for(j=p;j!==null;){var v=j;switch(v.tag){case 0:case 11:case 15:Ti(8,v,l)}var g=v.child;if(g!==null)g.return=v,j=g;else for(;j!==null;){v=j;var w=v.sibling,k=v.return;if(Th(v),v===p){j=null;break}if(w!==null){w.return=k,j=w;break}j=k}}}var S=l.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}j=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,j=o;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ti(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,j=h;break e}j=l.return}}var d=e.current;for(j=d;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=d;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ao(9,a)}}catch(_){de(a,a.return,_)}if(a===o){j=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,j=b;break e}j=a.return}}if(K=i,gn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{G=n,ot.transition=t}}return!1}function Vd(e,t,n){t=Lr(n,t),t=Sh(e,t,1),e=an(e,t,1),t=De(),e!==null&&(sl(e,1,t),Ye(e,t))}function de(e,t,n){if(e.tag===3)Vd(e,e,n);else for(;t!==null;){if(t.tag===3){Vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Lr(n,e),e=Ch(t,e,1),t=an(t,e,1),e=De(),t!==null&&(sl(t,1,e),Ye(t,e));break}}t=t.return}}function Qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(_e&n)===n&&(xe===4||xe===3&&(_e&130023424)===_e&&500>pe()-Rc?jn(e,0):jc|=n),Ye(e,t)}function Wh(e,t){t===0&&(e.mode&1?(t=bl,bl<<=1,!(bl&130023424)&&(bl=4194304)):t=1);var n=De();e=Ut(e,t),e!==null&&(sl(e,t,n),Ye(e,n))}function Kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wh(e,n)}function Yg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Wh(e,n)}var Hh;Hh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,jg(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,re&&t.flags&1048576&&Yp(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ql(e,t),e=t.pendingProps;var i=kr(t,Oe.current);xr(t,n),i=Lc(null,t,r,e,i,n);var l=Pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(l=!0,ao(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bc(t),i.updater=Io,t.stateNode=i,i._reactInternals=t,Na(t,r,e,n),t=Oa(null,t,r,!0,l,n)):(t.tag=0,re&&l&&gc(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ql(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Jg(r),e=ft(r,e),i){case 0:t=Ta(null,t,r,e,n);break e;case 1:t=jd(null,t,r,e,n);break e;case 11:t=Td(null,t,r,e,n);break e;case 14:t=Od(null,t,r,ft(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Ta(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),jd(e,t,r,i,n);case 3:e:{if($h(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Mp(e,t),ho(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Lr(Error(N(423)),t),t=Rd(e,t,r,n,i);break e}else if(r!==i){i=Lr(Error(N(424)),t),t=Rd(e,t,r,n,i);break e}else for(Ge=sn(t.stateNode.containerInfo.firstChild),Xe=t,re=!0,ht=null,n=Xp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=Wt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return eh(t),e===null&&_a(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ca(r,i)?o=null:l!==null&&Ca(r,l)&&(t.flags|=32),Eh(e,t),Re(e,t,o,n),t.child;case 6:return e===null&&_a(t),null;case 13:return _h(e,t,n);case 4:return kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Td(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,M(fo,r._currentValue),r._currentValue=o,l!==null)if(xt(l.value,o)){if(l.children===i.children&&!Qe.current){t=Wt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=At(-1,n&-n),c.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?c.next=c:(c.next=v.next,v.next=c),p.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),La(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),La(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=st(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),Od(e,t,r,i,n);case 15:return bh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Ql(e,t),t.tag=1,Ke(r)?(e=!0,ao(t)):e=!1,xr(t,n),xh(t,r,i),Na(t,r,i,n),Oa(null,t,r,!0,e,n);case 19:return Lh(e,t,n);case 22:return kh(e,t,n)}throw Error(N(156,t.tag))};function Vh(e,t){return vp(e,t)}function Zg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new Zg(e,t,n,r)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return Fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ic)return 11;if(e===lc)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Fc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return Rn(n.children,i,l,t);case rc:o=8,i|=8;break;case ea:return e=lt(12,n,t,i|2),e.elementType=ea,e.lanes=l,e;case ta:return e=lt(13,n,t,i),e.elementType=ta,e.lanes=l,e;case na:return e=lt(19,n,t,i),e.elementType=na,e.lanes=l,e;case ep:return Bo(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qf:o=10;break e;case Mf:o=9;break e;case ic:o=11;break e;case lc:o=14;break e;case Jt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=lt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Rn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=lt(22,e,r,t),e.elementType=ep,e.lanes=n,e.stateNode={isHidden:!1},e}function Is(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function As(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,l,o,a,c){return e=new Gg(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=lt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(l),e}function Xg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qh(e){if(!e)return pn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Qp(e,n,t)}return t}function Kh(e,t,n,r,i,l,o,a,c){return e=Bc(n,r,!0,e,i,l,o,a,c),e.context=Qh(null),n=e.current,r=De(),i=un(n),l=At(r,i),l.callback=t??null,an(n,l,i),e.current.lanes=i,sl(e,i,r),Ye(e,r),e}function Uo(e,t,n,r){var i=t.current,l=De(),o=un(i);return n=Qh(n),t.context===null?t.context=n:t.pendingContext=n,t=At(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(i,t,o),e!==null&&(wt(e,i,o,l),Wl(e,i,o)),o}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uc(e,t){Qd(e,t),(e=e.alternate)&&Qd(e,t)}function qg(){return null}var Yh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}Wo.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Uo(e,t,null,null)};Wo.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Uo(null,e,null,null)}),t[Bt]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=kp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&$p(e)}};function Hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function Mg(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var p=Co(o);l.call(p)}}var o=Kh(t,r,e,0,null,!1,!1,"",Kd);return e._reactRootContainer=o,e[Bt]=o.current,Hi(e.nodeType===8?e.parentNode:e),Un(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var p=Co(c);a.call(p)}}var c=Bc(e,0,!1,null,null,!1,!1,"",Kd);return e._reactRootContainer=c,e[Bt]=c.current,Hi(e.nodeType===8?e.parentNode:e),Un(function(){Uo(t,c,n,r)}),c}function Vo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var c=Co(o);a.call(c)}}Uo(t,o,e,i)}else o=Mg(n,t,e,i,r);return Co(o)}Cp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bi(t.pendingLanes);n!==0&&(ac(t,n|1),Ye(t,pe()),!(K&6)&&(Pr=pe()+500,gn()))}break;case 13:Un(function(){var r=Ut(e,1);if(r!==null){var i=De();wt(r,e,1,i)}}),Uc(e,1)}};cc=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=De();wt(t,e,134217728,n)}Uc(e,134217728)}};bp=function(e){if(e.tag===13){var t=un(e),n=Ut(e,t);if(n!==null){var r=De();wt(n,e,t,r)}Uc(e,t)}};kp=function(){return G};Ep=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};fa=function(e,t,n){switch(t){case"input":if(la(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jo(r);if(!i)throw Error(N(90));np(r),la(r,i)}}}break;case"textarea":ip(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};dp=Dc;fp=Un;var ev={usingClientEntryPoint:!1,Events:[cl,cr,jo,cp,up,Dc]},ri={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mp(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{No=jl.inject(tv),Lt=jl}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(t))throw Error(N(200));return Xg(e,t,null,n)};et.createRoot=function(e,t){if(!Hc(e))throw Error(N(299));var n=!1,r="",i=Yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,Hi(e.nodeType===8?e.parentNode:e),new Wc(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=mp(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Un(e)};et.hydrate=function(e,t,n){if(!Ho(t))throw Error(N(200));return Vo(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Hc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Yh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Kh(t,null,e,1,n??null,i,!1,l,o),e[Bt]=t.current,Hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wo(t)};et.render=function(e,t,n){if(!Ho(t))throw Error(N(200));return Vo(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Ho(e))throw Error(N(40));return e._reactRootContainer?(Un(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};et.unstable_batchedUpdates=Dc;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ho(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Vo(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zh)}catch(e){console.error(e)}}Zh(),Zf.exports=et;var nv=Zf.exports,Yd=nv;qs.createRoot=Yd.createRoot,qs.hydrateRoot=Yd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nn||(nn={}));const Zd="popstate";function rv(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:a}=r.location;return Qa("",{pathname:l,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jh(i)}return lv(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function iv(){return Math.random().toString(36).substr(2,8)}function Jd(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n,r){return n===void 0&&(n=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dr(t):t,{state:n,key:t&&t.key||r||iv()})}function Jh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=nn.Pop,c=null,p=v();p==null&&(p=0,o.replaceState(qi({},o.state,{idx:p}),""));function v(){return(o.state||{idx:null}).idx}function g(){a=nn.Pop;let P=v(),h=P==null?null:P-p;p=P,c&&c({action:a,location:C.location,delta:h})}function w(P,h){a=nn.Push;let d=Qa(C.location,P,h);p=v()+1;let y=Jd(d,p),b=C.createHref(d);try{o.pushState(y,"",b)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(b)}l&&c&&c({action:a,location:C.location,delta:1})}function k(P,h){a=nn.Replace;let d=Qa(C.location,P,h);p=v();let y=Jd(d,p),b=C.createHref(d);o.replaceState(y,"",b),l&&c&&c({action:a,location:C.location,delta:0})}function S(P){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof P=="string"?P:Jh(P);return d=d.replace(/ $/,"%20"),ge(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let C={get action(){return a},get location(){return e(i,o)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Zd,g),c=P,()=>{i.removeEventListener(Zd,g),c=null}},createHref(P){return t(i,P)},createURL:S,encodeLocation(P){let h=S(P);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:w,replace:k,go(P){return o.go(P)}};return C}var Gd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gd||(Gd={}));function ov(e,t,n){return n===void 0&&(n="/"),sv(e,t,n)}function sv(e,t,n,r){let i=typeof t=="string"?Dr(t):t,l=qh(i.pathname||"/",n);if(l==null)return null;let o=Gh(e);av(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let p=xv(l);a=vv(o[c],p)}return a}function Gh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let p=Dn([r,c.relativePath]),v=n.concat(c);l.children&&l.children.length>0&&(ge(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Gh(l.children,t,v,p)),!(l.path==null&&!l.index)&&t.push({path:p,score:mv(p,l.index),routesMeta:v})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let c of Xh(l.path))i(l,o,c)}),t}function Xh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Xh(r.join("/")),a=[];return a.push(...o.map(c=>c===""?l:[l,c].join("/"))),i&&a.push(...o),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function av(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cv=/^:[\w-]+$/,uv=3,dv=2,fv=1,pv=10,hv=-2,Xd=e=>e==="*";function mv(e,t){let n=e.split("/"),r=n.length;return n.some(Xd)&&(r+=hv),t&&(r+=dv),n.filter(i=>!Xd(i)).reduce((i,l)=>i+(cv.test(l)?uv:l===""?fv:pv),r)}function gv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vv(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],p=a===r.length-1,v=l==="/"?t:t.slice(l.length)||"/",g=yv({path:c.relativePath,caseSensitive:c.caseSensitive,end:p},v),w=c.route;if(!g)return null;Object.assign(i,g.params),o.push({params:i,pathname:Dn([l,g.pathname]),pathnameBase:Ev(Dn([l,g.pathnameBase])),route:w}),g.pathnameBase!=="/"&&(l=Dn([l,g.pathnameBase]))}return o}function yv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((p,v,g)=>{let{paramName:w,isOptional:k}=v;if(w==="*"){let C=a[g]||"";o=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const S=a[g];return k&&!S?p[w]=void 0:p[w]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:o,pattern:e}}function wv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cv=e=>Sv.test(e);function bv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Dr(e):e,l;if(n)if(Cv(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Vc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=qd(n.substring(1),"/"):l=qd(n,t)}else l=t;return{pathname:l,search:$v(r),hash:_v(i)}}function qd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mh(e,t){let n=kv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function e0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dr(e):(i=qi({},e),ge(!i.pathname||!i.pathname.includes("?"),Fs("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Fs("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Fs("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=n;else{let g=t.length-1;if(!r&&o.startsWith("..")){let w=o.split("/");for(;w[0]==="..";)w.shift(),g-=1;i.pathname=w.join("/")}a=g>=0?t[g]:"/"}let c=bv(i,a),p=o&&o!=="/"&&o.endsWith("/"),v=(l||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(p||v)&&(c.pathname+="/"),c}const Dn=e=>e.join("/").replace(/\/\/+/g,"/"),Ev=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$v=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t0=["post","put","patch","delete"];new Set(t0);const Pv=["get",...t0];new Set(Pv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}const Qc=x.createContext(null),Nv=x.createContext(null),dl=x.createContext(null),Qo=x.createContext(null),Kn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),n0=x.createContext(null);function fl(){return x.useContext(Qo)!=null}function Kc(){return fl()||ge(!1),x.useContext(Qo).location}function r0(e){x.useContext(dl).static||x.useLayoutEffect(e)}function pl(){let{isDataRoute:e}=x.useContext(Kn);return e?Hv():zv()}function zv(){fl()||ge(!1);let e=x.useContext(Qc),{basename:t,future:n,navigator:r}=x.useContext(dl),{matches:i}=x.useContext(Kn),{pathname:l}=Kc(),o=JSON.stringify(Mh(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return r0(()=>{a.current=!0}),x.useCallback(function(p,v){if(v===void 0&&(v={}),!a.current)return;if(typeof p=="number"){r.go(p);return}let g=e0(p,JSON.parse(o),l,v.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Dn([t,g.pathname])),(v.replace?r.replace:r.push)(g,v.state,v)},[t,r,o,l,e])}function Tv(e,t){return Ov(e,t)}function Ov(e,t,n,r){fl()||ge(!1);let{navigator:i}=x.useContext(dl),{matches:l}=x.useContext(Kn),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let p=Kc(),v;if(t){var g;let P=typeof t=="string"?Dr(t):t;c==="/"||(g=P.pathname)!=null&&g.startsWith(c)||ge(!1),v=P}else v=p;let w=v.pathname||"/",k=w;if(c!=="/"){let P=c.replace(/^\//,"").split("/");k="/"+w.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=ov(e,{pathname:k}),C=Av(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Dn([c,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?c:Dn([c,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&C?x.createElement(Qo.Provider,{value:{location:Mi({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:nn.Pop}},C):C}function jv(){let e=Wv(),t=Lv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const Rv=x.createElement(jv,null);class Dv extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(Kn.Provider,{value:this.props.routeContext},x.createElement(n0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Iv(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Kn.Provider,{value:t},r)}function Av(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let v=o.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);v>=0||ge(!1),o=o.slice(0,Math.min(o.length,v+1))}let c=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<o.length;v++){let g=o[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=v),g.route.id){let{loaderData:w,errors:k}=n,S=g.route.loader&&w[g.route.id]===void 0&&(!k||k[g.route.id]===void 0);if(g.route.lazy||S){c=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((v,g,w)=>{let k,S=!1,C=null,P=null;n&&(k=a&&g.route.id?a[g.route.id]:void 0,C=g.route.errorElement||Rv,c&&(p<0&&w===0?(Vv("route-fallback"),S=!0,P=null):p===w&&(S=!0,P=g.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,w+1)),d=()=>{let y;return k?y=C:S?y=P:g.route.Component?y=x.createElement(g.route.Component,null):g.route.element?y=g.route.element:y=v,x.createElement(Iv,{match:g,routeContext:{outlet:v,matches:h,isDataRoute:n!=null},children:y})};return n&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?x.createElement(Dv,{location:n.location,revalidation:n.revalidation,component:C,error:k,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var i0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(i0||{}),l0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(l0||{});function Fv(e){let t=x.useContext(Qc);return t||ge(!1),t}function Bv(e){let t=x.useContext(Nv);return t||ge(!1),t}function Uv(e){let t=x.useContext(Kn);return t||ge(!1),t}function o0(e){let t=Uv(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function Wv(){var e;let t=x.useContext(n0),n=Bv(),r=o0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Hv(){let{router:e}=Fv(i0.UseNavigateStable),t=o0(l0.UseNavigateStable),n=x.useRef(!1);return r0(()=>{n.current=!0}),x.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Mi({fromRouteId:t},l)))},[e,t])}const Md={};function Vv(e,t,n){Md[e]||(Md[e]=!0)}function Qv(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Kv(e){let{to:t,replace:n,state:r,relative:i}=e;fl()||ge(!1);let{future:l,static:o}=x.useContext(dl),{matches:a}=x.useContext(Kn),{pathname:c}=Kc(),p=pl(),v=e0(t,Mh(a,l.v7_relativeSplatPath),c,i==="path"),g=JSON.stringify(v);return x.useEffect(()=>p(JSON.parse(g),{replace:n,state:r,relative:i}),[p,g,i,n,r]),null}function nr(e){ge(!1)}function Yv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:l,static:o=!1,future:a}=e;fl()&&ge(!1);let c=t.replace(/^\/*/,"/"),p=x.useMemo(()=>({basename:c,navigator:l,static:o,future:Mi({v7_relativeSplatPath:!1},a)}),[c,a,l,o]);typeof r=="string"&&(r=Dr(r));let{pathname:v="/",search:g="",hash:w="",state:k=null,key:S="default"}=r,C=x.useMemo(()=>{let P=qh(v,c);return P==null?null:{location:{pathname:P,search:g,hash:w,state:k,key:S},navigationType:i}},[c,v,g,w,k,S,i]);return C==null?null:x.createElement(dl.Provider,{value:p},x.createElement(Qo.Provider,{children:n,value:C}))}function Zv(e){let{children:t,location:n}=e;return Tv(Ka(t),n)}new Promise(()=>{});function Ka(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let l=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Ka(r.props.children,l));return}r.type!==nr&&ge(!1),!r.props.index||!r.props.children||ge(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ka(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Jv="6";try{window.__reactRouterVersion=Jv}catch{}const Gv="startTransition",ef=Xs[Gv];function Xv(e){let{basename:t,children:n,future:r,window:i}=e,l=x.useRef();l.current==null&&(l.current=rv({window:i,v5Compat:!0}));let o=l.current,[a,c]=x.useState({action:o.action,location:o.location}),{v7_startTransition:p}=r||{},v=x.useCallback(g=>{p&&ef?ef(()=>c(g)):c(g)},[c,p]);return x.useLayoutEffect(()=>o.listen(v),[o,v]),x.useEffect(()=>Qv(r),[r]),x.createElement(Yv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var tf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tf||(tf={}));var nf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nf||(nf={}));function qv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Mv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var e2=function(){function e(n){var r=this;this._insertTag=function(i){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,l),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Mv(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var l=qv(i);try{l.insertRule(r,l.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ze="-ms-",bo="-moz-",Z="-webkit-",s0="comm",Yc="rule",Zc="decl",t2="@import",a0="@keyframes",n2="@layer",r2=Math.abs,Ko=String.fromCharCode,i2=Object.assign;function l2(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function c0(e){return e.trim()}function o2(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function Ya(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function el(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function Jc(e){return e.length}function Rl(e,t){return t.push(e),e}function s2(e,t){return e.map(t).join("")}var Yo=1,Nr=1,u0=0,Ze=0,he=0,Ir="";function Zo(e,t,n,r,i,l,o){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Yo,column:Nr,length:o,return:""}}function ii(e,t){return i2(Zo("",null,null,"",null,null,0),e,{length:-e.length},t)}function a2(){return he}function c2(){return he=Ze>0?$e(Ir,--Ze):0,Nr--,he===10&&(Nr=1,Yo--),he}function qe(){return he=Ze<u0?$e(Ir,Ze++):0,Nr++,he===10&&(Nr=1,Yo++),he}function Nt(){return $e(Ir,Ze)}function Jl(){return Ze}function hl(e,t){return el(Ir,e,t)}function tl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d0(e){return Yo=Nr=1,u0=Et(Ir=e),Ze=0,[]}function f0(e){return Ir="",e}function Gl(e){return c0(hl(Ze-1,Za(e===91?e+2:e===40?e+1:e)))}function u2(e){for(;(he=Nt())&&he<33;)qe();return tl(e)>2||tl(he)>3?"":" "}function d2(e,t){for(;--t&&qe()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return hl(e,Jl()+(t<6&&Nt()==32&&qe()==32))}function Za(e){for(;qe();)switch(he){case e:return Ze;case 34:case 39:e!==34&&e!==39&&Za(he);break;case 40:e===41&&Za(e);break;case 92:qe();break}return Ze}function f2(e,t){for(;qe()&&e+he!==57;)if(e+he===84&&Nt()===47)break;return"/*"+hl(t,Ze-1)+"*"+Ko(e===47?e:qe())}function p2(e){for(;!tl(Nt());)qe();return hl(e,Ze)}function h2(e){return f0(Xl("",null,null,null,[""],e=d0(e),0,[0],e))}function Xl(e,t,n,r,i,l,o,a,c){for(var p=0,v=0,g=o,w=0,k=0,S=0,C=1,P=1,h=1,d=0,y="",b=i,_=l,$=r,L=y;P;)switch(S=d,d=qe()){case 40:if(S!=108&&$e(L,g-1)==58){Ya(L+=J(Gl(d),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:L+=Gl(d);break;case 9:case 10:case 13:case 32:L+=u2(S);break;case 92:L+=d2(Jl()-1,7);continue;case 47:switch(Nt()){case 42:case 47:Rl(m2(f2(qe(),Jl()),t,n),c);break;default:L+="/"}break;case 123*C:a[p++]=Et(L)*h;case 125*C:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+v:h==-1&&(L=J(L,/\f/g,"")),k>0&&Et(L)-g&&Rl(k>32?lf(L+";",r,n,g-1):lf(J(L," ","")+";",r,n,g-2),c);break;case 59:L+=";";default:if(Rl($=rf(L,t,n,p,v,i,a,y,b=[],_=[],g),l),d===123)if(v===0)Xl(L,t,$,$,b,l,g,a,_);else switch(w===99&&$e(L,3)===110?100:w){case 100:case 108:case 109:case 115:Xl(e,$,$,r&&Rl(rf(e,$,$,0,0,i,a,y,i,b=[],g),_),i,_,g,a,r?b:_);break;default:Xl(L,$,$,$,[""],_,0,a,_)}}p=v=k=0,C=h=1,y=L="",g=o;break;case 58:g=1+Et(L),k=S;default:if(C<1){if(d==123)--C;else if(d==125&&C++==0&&c2()==125)continue}switch(L+=Ko(d),d*C){case 38:h=v>0?1:(L+="\f",-1);break;case 44:a[p++]=(Et(L)-1)*h,h=1;break;case 64:Nt()===45&&(L+=Gl(qe())),w=Nt(),v=g=Et(y=L+=p2(Jl())),d++;break;case 45:S===45&&Et(L)==2&&(C=0)}}return l}function rf(e,t,n,r,i,l,o,a,c,p,v){for(var g=i-1,w=i===0?l:[""],k=Jc(w),S=0,C=0,P=0;S<r;++S)for(var h=0,d=el(e,g+1,g=r2(C=o[S])),y=e;h<k;++h)(y=c0(C>0?w[h]+" "+d:J(d,/&\f/g,w[h])))&&(c[P++]=y);return Zo(e,t,n,i===0?Yc:a,c,p,v)}function m2(e,t,n){return Zo(e,t,n,s0,Ko(a2()),el(e,2,-2),0)}function lf(e,t,n,r){return Zo(e,t,n,Zc,el(e,0,r),el(e,r+1,-1),r)}function Cr(e,t){for(var n="",r=Jc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function g2(e,t,n,r){switch(e.type){case n2:if(e.children.length)break;case t2:case Zc:return e.return=e.return||e.value;case s0:return"";case a0:return e.return=e.value+"{"+Cr(e.children,r)+"}";case Yc:e.value=e.props.join(",")}return Et(n=Cr(e.children,r))?e.return=e.value+"{"+n+"}":""}function v2(e){var t=Jc(e);return function(n,r,i,l){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,l)||"";return o}}function y2(e){return function(t){t.root||(t=t.return)&&e(t)}}function w2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var x2=function(t,n,r){for(var i=0,l=0;i=l,l=Nt(),i===38&&l===12&&(n[r]=1),!tl(l);)qe();return hl(t,Ze)},S2=function(t,n){var r=-1,i=44;do switch(tl(i)){case 0:i===38&&Nt()===12&&(n[r]=1),t[r]+=x2(Ze-1,n,r);break;case 2:t[r]+=Gl(i);break;case 4:if(i===44){t[++r]=Nt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ko(i)}while(i=qe());return t},C2=function(t,n){return f0(S2(d0(t),n))},of=new WeakMap,b2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!of.get(r))&&!i){of.set(t,!0);for(var l=[],o=C2(n,l),a=r.props,c=0,p=0;c<o.length;c++)for(var v=0;v<a.length;v++,p++)t.props[p]=l[c]?o[c].replace(/&\f/g,a[v]):a[v]+" "+o[c]}}},k2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function p0(e,t){switch(l2(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+bo+e+ze+e+e;case 6828:case 4268:return Z+e+ze+e+e;case 6165:return Z+e+ze+"flex-"+e+e;case 5187:return Z+e+J(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ze+"flex-$1$2")+e;case 5443:return Z+e+ze+"flex-item-"+J(e,/flex-|-self/,"")+e;case 4675:return Z+e+ze+"flex-line-pack"+J(e,/align-content|flex-|-self/,"")+e;case 5548:return Z+e+ze+J(e,"shrink","negative")+e;case 5292:return Z+e+ze+J(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+J(e,"-grow","")+Z+e+ze+J(e,"grow","positive")+e;case 4554:return Z+J(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+bo+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ya(e,"stretch")?p0(J(e,"stretch","fill-available"),t)+e:e}break;case 4949:if($e(e,t+1)!==115)break;case 6444:switch($e(e,Et(e)-3-(~Ya(e,"!important")&&10))){case 107:return J(e,":",":"+Z)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Z+($e(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ze+"$2box$3")+e}break;case 5936:switch($e(e,t+11)){case 114:return Z+e+ze+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+ze+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+ze+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Z+e+ze+e+e}return e}var E2=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Zc:t.return=p0(t.value,t.length);break;case a0:return Cr([ii(t,{value:J(t.value,"@","@"+Z)})],i);case Yc:if(t.length)return s2(t.props,function(l){switch(o2(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cr([ii(t,{props:[J(l,/:(read-\w+)/,":"+bo+"$1")]})],i);case"::placeholder":return Cr([ii(t,{props:[J(l,/:(plac\w+)/,":"+Z+"input-$1")]}),ii(t,{props:[J(l,/:(plac\w+)/,":"+bo+"$1")]}),ii(t,{props:[J(l,/:(plac\w+)/,ze+"input-$1")]})],i)}return""})}},$2=[E2],_2=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(C){var P=C.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(C),C.setAttribute("data-s",""))})}var i=t.stylisPlugins||$2,l={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(C){for(var P=C.getAttribute("data-emotion").split(" "),h=1;h<P.length;h++)l[P[h]]=!0;a.push(C)});var c,p=[b2,k2];{var v,g=[g2,y2(function(C){v.insert(C)})],w=v2(p.concat(i,g)),k=function(P){return Cr(h2(P),w)};c=function(P,h,d,y){v=d,k(P?P+"{"+h.styles+"}":h.styles),y&&(S.inserted[h.name]=!0)}}var S={key:n,sheet:new e2({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:c};return S.sheet.hydrate(a),S},h0={exports:{}},X={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be=typeof Symbol=="function"&&Symbol.for,Gc=be?Symbol.for("react.element"):60103,Xc=be?Symbol.for("react.portal"):60106,Jo=be?Symbol.for("react.fragment"):60107,Go=be?Symbol.for("react.strict_mode"):60108,Xo=be?Symbol.for("react.profiler"):60114,qo=be?Symbol.for("react.provider"):60109,Mo=be?Symbol.for("react.context"):60110,qc=be?Symbol.for("react.async_mode"):60111,es=be?Symbol.for("react.concurrent_mode"):60111,ts=be?Symbol.for("react.forward_ref"):60112,ns=be?Symbol.for("react.suspense"):60113,L2=be?Symbol.for("react.suspense_list"):60120,rs=be?Symbol.for("react.memo"):60115,is=be?Symbol.for("react.lazy"):60116,P2=be?Symbol.for("react.block"):60121,N2=be?Symbol.for("react.fundamental"):60117,z2=be?Symbol.for("react.responder"):60118,T2=be?Symbol.for("react.scope"):60119;function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gc:switch(e=e.type,e){case qc:case es:case Jo:case Xo:case Go:case ns:return e;default:switch(e=e&&e.$$typeof,e){case Mo:case ts:case is:case rs:case qo:return e;default:return t}}case Xc:return t}}}function m0(e){return nt(e)===es}X.AsyncMode=qc;X.ConcurrentMode=es;X.ContextConsumer=Mo;X.ContextProvider=qo;X.Element=Gc;X.ForwardRef=ts;X.Fragment=Jo;X.Lazy=is;X.Memo=rs;X.Portal=Xc;X.Profiler=Xo;X.StrictMode=Go;X.Suspense=ns;X.isAsyncMode=function(e){return m0(e)||nt(e)===qc};X.isConcurrentMode=m0;X.isContextConsumer=function(e){return nt(e)===Mo};X.isContextProvider=function(e){return nt(e)===qo};X.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gc};X.isForwardRef=function(e){return nt(e)===ts};X.isFragment=function(e){return nt(e)===Jo};X.isLazy=function(e){return nt(e)===is};X.isMemo=function(e){return nt(e)===rs};X.isPortal=function(e){return nt(e)===Xc};X.isProfiler=function(e){return nt(e)===Xo};X.isStrictMode=function(e){return nt(e)===Go};X.isSuspense=function(e){return nt(e)===ns};X.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Jo||e===es||e===Xo||e===Go||e===ns||e===L2||typeof e=="object"&&e!==null&&(e.$$typeof===is||e.$$typeof===rs||e.$$typeof===qo||e.$$typeof===Mo||e.$$typeof===ts||e.$$typeof===N2||e.$$typeof===z2||e.$$typeof===T2||e.$$typeof===P2)};X.typeOf=nt;h0.exports=X;var O2=h0.exports,g0=O2,j2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},R2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v0={};v0[g0.ForwardRef]=j2;v0[g0.Memo]=R2;var D2=!0;function I2(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var y0=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||D2===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},A2=function(t,n,r){y0(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+i:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function F2(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var B2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},U2=/[A-Z]|^ms/g,W2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,w0=function(t){return t.charCodeAt(1)===45},sf=function(t){return t!=null&&typeof t!="boolean"},Bs=w2(function(e){return w0(e)?e:e.replace(U2,"-$&").toLowerCase()}),af=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(W2,function(r,i,l){return $t={name:i,styles:l,next:$t},i})}return B2[t]!==1&&!w0(t)&&typeof n=="number"&&n!==0?n+"px":n};function nl(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return $t={name:i.name,styles:i.styles,next:$t},i.name;var l=n;if(l.styles!==void 0){var o=l.next;if(o!==void 0)for(;o!==void 0;)$t={name:o.name,styles:o.styles,next:$t},o=o.next;var a=l.styles+";";return a}return H2(e,t,n)}case"function":{if(e!==void 0){var c=$t,p=n(e);return $t=c,nl(e,t,p)}break}}var v=n;return v}function H2(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=nl(e,t,n[i])+";";else for(var l in n){var o=n[l];if(typeof o!="object"){var a=o;sf(a)&&(r+=Bs(l)+":"+af(l,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var c=0;c<o.length;c++)sf(o[c])&&(r+=Bs(l)+":"+af(l,o[c])+";");else{var p=nl(e,t,o);switch(l){case"animation":case"animationName":{r+=Bs(l)+":"+p+";";break}default:r+=l+"{"+p+"}"}}}return r}var cf=/label:\s*([^\s;{]+)\s*(;|$)/g,$t;function x0(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";$t=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,i+=nl(n,t,l);else{var o=l;i+=o[0]}for(var a=1;a<e.length;a++)if(i+=nl(n,t,e[a]),r){var c=l;i+=c[a]}cf.lastIndex=0;for(var p="",v;(v=cf.exec(i))!==null;)p+="-"+v[1];var g=F2(i)+p;return{name:g,styles:i,next:$t}}var V2=function(t){return t()},Q2=Xs.useInsertionEffect?Xs.useInsertionEffect:!1,K2=Q2||V2,S0=x.createContext(typeof HTMLElement<"u"?_2({key:"css"}):null);S0.Provider;var Y2=function(t){return x.forwardRef(function(n,r){var i=x.useContext(S0);return t(n,i,r)})},Z2=x.createContext({}),ml={}.hasOwnProperty,Ja="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Mc=function(t,n){var r={};for(var i in n)ml.call(n,i)&&(r[i]=n[i]);return r[Ja]=t,r},J2=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return y0(n,r,i),K2(function(){return A2(n,r,i)}),null},G2=Y2(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ja],l=[r],o="";typeof e.className=="string"?o=I2(t.registered,l,e.className):e.className!=null&&(o=e.className+" ");var a=x0(l,void 0,x.useContext(Z2));o+=t.key+"-"+a.name;var c={};for(var p in e)ml.call(e,p)&&p!=="css"&&p!==Ja&&(c[p]=e[p]);return c.className=o,n&&(c.ref=n),x.createElement(x.Fragment,null,x.createElement(J2,{cache:t,serialized:a,isStringTag:typeof i=="string"}),x.createElement(i,c))}),eu=G2,we=ve.Fragment,s=function(t,n,r){return ml.call(n,"css")?ve.jsx(eu,Mc(t,n),r):ve.jsx(t,n,r)},f=function(t,n,r){return ml.call(n,"css")?ve.jsxs(eu,Mc(t,n),r):ve.jsxs(t,n,r)},uf=function(t,n){var r=arguments;if(n==null||!ml.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,l=new Array(i);l[0]=eu,l[1]=Mc(t,n);for(var o=2;o<i;o++)l[o]=r[o];return x.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(uf||(uf={}));function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return x0(t)}const X2="/strack/".replace(/\/$/,""),q2=e=>m`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`,M2=e=>m`
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
`,e5=m`
  position: relative;
  z-index: 1;
  max-width: 28rem;
`,t5=e=>m`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${e?"#f8fafc":"#0f172a"};
`,n5=e=>m`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${e?"rgba(226, 232, 240, 0.78)":"rgba(15, 23, 42, 0.72)"};
  max-width: 22rem;
`,r5=e=>m`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  background: ${e?"#0f0f0f":"#f4f4f5"};
`,i5=e=>m`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: ${e?"#1c1c1e":"#ffffff"};
  box-shadow: ${e?"0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)":"0 20px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)"};
`,l5=e=>m`
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
  margin-bottom: 0.35rem;
`,o5=e=>m`
  font-size: 0.9rem;
  color: ${e?"#a1a1aa":"#64748b"};
  margin-bottom: 1.5rem;
`,s5=m`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,df=e=>m`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${e?"#e4e4e7":"#374151"};
  margin-bottom: 0.4rem;
`,C0=e=>m`
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
`,a5=m`
  position: relative;
  display: flex;
  align-items: center;
`,c5=e=>m`
  ${C0(e)};
  padding-right: 2.75rem;
`,u5=e=>m`
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
`,d5=e=>m`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${e?"#fca5a5":"#b91c1c"};
  background: ${e?"rgba(127, 29, 29, 0.25)":"#fef2f2"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.35)":"#fecaca"};
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
`,f5=m`
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
`,p5=e=>m`
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
`,h5=m`
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
`,m5=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),g5=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),v5=()=>f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),y5=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function w5(e){return e?{message:"The server did not return JSON. Open the site at …/strack/ and ensure backend/login.php is deployed."}:{message:null}}function x5({darkMode:e,onToggleDarkMode:t}){const n=pl(),[r,i]=x.useState(""),[l,o]=x.useState(""),[a,c]=x.useState(!1),[p,v]=x.useState(""),[g,w]=x.useState(!1),k=async S=>{if(S.preventDefault(),v(""),!r.trim()){v("Enter your university email address.");return}if(!l){v("Enter your password.");return}w(!0);const C=`${X2}/backend/login.php`;try{const h=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.trim(),password:l})})).text();let d,y=!1;try{d=JSON.parse(h)}catch{y=!0,d={}}const b=w5(y);if(b.message){v(b.message);return}if(d.success){const _=d.user||{},$=_.role||"student",L=$==="admin"?"/admin":$==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(_))}catch{}n(L,{replace:!0});return}v(d.message||"Invalid email or password.")}catch{v(`Cannot reach ${C}. On NUWebSpace use your full /strack/ URL; locally run PHP and the Vite dev server with the proxy enabled.`)}finally{w(!1)}};return f("div",{css:q2(),children:[s("button",{type:"button",css:p5(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(g5,{}):s(m5,{})}),s("section",{css:M2(e),"aria-hidden":"false",children:f("div",{css:e5,children:[s("h1",{css:t5(e),children:"Strack"}),s("p",{css:n5(e),children:"Sign in to track attendance, engagement, and performance in one place."})]})}),s("section",{css:r5(e),children:f("div",{css:i5(e),children:[s("h2",{css:l5(e),children:"Sign in"}),s("p",{css:o5(e),children:"Use the email and password from your administrator or module leader."}),f("form",{css:s5,onSubmit:k,noValidate:!0,children:[f("div",{children:[s("label",{css:df(e),htmlFor:"strack-email",children:"Email"}),s("input",{id:"strack-email",css:C0(e),type:"email",autoComplete:"username",inputMode:"email",placeholder:"you@uni.ac.uk",value:r,onChange:S=>i(S.target.value),disabled:g})]}),f("div",{children:[s("label",{css:df(e),htmlFor:"strack-password",children:"Password"}),f("div",{css:a5,children:[s("input",{id:"strack-password",css:c5(e),type:a?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:l,onChange:S=>o(S.target.value),disabled:g}),s("button",{type:"button",css:u5(e),onClick:()=>c(S=>!S),"aria-label":a?"Hide password":"Show password",tabIndex:-1,children:a?s(y5,{}):s(v5,{})})]})]}),p?s("div",{role:"alert",css:d5(e),children:p}):null,s("button",{type:"submit",css:f5,disabled:g,children:g?f(we,{children:[s("span",{css:h5,"aria-hidden":!0}),"Signing in…"]}):"Sign in"})]})]})})]})}var b0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ff=It.createContext&&It.createContext(b0),S5=["attr","size","title"];function C5(e,t){if(e==null)return{};var n,r,i=b5(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function b5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ko.apply(null,arguments)}function pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Eo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pf(Object(n),!0).forEach(function(r){k5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k5(e,t,n){return(t=E5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E5(e){var t=$5(e,"string");return typeof t=="symbol"?t:t+""}function $5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k0(e){return e&&e.map((t,n)=>It.createElement(t.tag,Eo({key:n},t.attr),k0(t.child)))}function q(e){return t=>It.createElement(_5,ko({attr:Eo({},e.attr)},t),k0(e.child))}function _5(e){var t=n=>{var{attr:r,size:i,title:l}=e,o=C5(e,S5),a=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),It.createElement("svg",ko({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:Eo(Eo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&It.createElement("title",null,l),e.children)};return ff!==void 0?It.createElement(ff.Consumer,null,n=>t(n)):t(b0)}function Xt(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function ls(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function rl(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function li(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function zr(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function tu(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function nu(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function E0(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function $0(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"},child:[]}]})(e)}function En(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function Tr(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function _0(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"},child:[]}]})(e)}function oi(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function L5(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.625 11.505v8.25a1.5 1.5 0 0 1-1.5 1.5H4.875a1.5 1.5 0 0 1-1.5-1.5v-8.25m8.25-6.375A2.625 2.625 0 1 0 9 7.755h2.625m0-2.625v2.625m0-2.625a2.625 2.625 0 1 1 2.625 2.625h-2.625m0 0v13.5M3 11.505h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.622-.504-1.125-1.125-1.125H3c-.621 0-1.125.503-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function Us(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]}]})(e)}function Ws(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"},child:[]}]})(e)}function L0(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"},child:[]}]})(e)}function P0(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"},child:[]}]})(e)}function N0(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function P5(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function ru(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function iu(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function Ei(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function N5(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"},child:[]}]})(e)}function Wn(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function lu(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},child:[]}]})(e)}function ou(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function il(e){return q({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const z5="/strack/".replace(/\/$/,""),Ar="#6366f1",T5=[{id:"food_drink",title:"Food & drink vouchers",description:"£15 credit for campus cafés and selected partner outlets.",cost:300,category:"vouchers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80&auto=format&fit=crop"},{id:"discount_local",title:"Local business discount codes",description:"Exclusive codes for shops and services near campus.",cost:400,category:"vouchers",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop"},{id:"digital_custom",title:"Digital customisation items",description:"Wallpapers, icons, and profile themes for your Strack account.",cost:250,category:"merchandise",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80&auto=format&fit=crop"},{id:"uni_merch",title:"University merchandise",description:"Hoodie, bottle, or cap from the official union store.",cost:550,category:"merchandise",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&q=80&auto=format&fit=crop"},{id:"recognition",title:"Recognition",description:"Certificate of achievement and spotlight on the leaderboard.",cost:200,category:"recognition",image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=80&auto=format&fit=crop"},{id:"print_credits",title:"Print credits",description:"500 mono pages or equivalent colour printing.",cost:150,category:"credits",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop"},{id:"charity",title:"Charity donations",description:"We donate £5 to your chosen university charity partner.",cost:350,category:"charity",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"},{id:"priority_booking",title:"Priority booking",description:"Register for modules and events one day before general release.",cost:800,category:"privileges",image:"https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80&auto=format&fit=crop"}];function O5(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t=n=>Array.from({length:n},()=>e[Math.floor(Math.random()*e.length)]).join("");return`STR-${t(4)}-${t(4)}`}function z0(e){return`strack_redeemed_${(e||"").toLowerCase()}`}function j5(e){try{const t=localStorage.getItem(z0(e));if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function hf(e,t){try{localStorage.setItem(z0(e),JSON.stringify(t))}catch{}}const R5=e=>m`
  max-width: 1120px;
  margin: 0 auto;
  color: ${e?"#f3f4f6":"#111827"};
`,D5=m`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,I5=m`
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
`,A5=e=>m`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  background: ${e?"#1f2937":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  box-shadow: ${e?"none":"0 4px 14px rgba(15, 23, 42, 0.06)"};
  min-width: 160px;
`,F5=m`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,B5=m`
  font-size: 1.65rem;
  font-weight: 800;
  font-family: inherit;
  color: ${Ar};
  letter-spacing: -0.02em;
`,U5=m`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Ar};
  flex-shrink: 0;
  svg {
    width: 22px;
    height: 22px;
  }
`,mf=e=>m`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${e?"none":"0 8px 30px rgba(15, 23, 42, 0.06)"};
`,gf=m`
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
    color: ${Ar};
  }
`,W5=m`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,H5=e=>m`
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
`,V5=m`
  aspect-ratio: 16 / 10;
  background: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Q5=m`
  padding: 0.9rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`,K5=m`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`,Y5=m`
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.45;
  flex: 1;
`,Z5=m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,J5=m`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${Ar};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,G5=e=>m`
  font-size: 0.7rem;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#1f2937":"#ffffff"};
  text-transform: lowercase;
`,X5=m`
  width: 100%;
  margin-top: 0.65rem;
  padding: 0.65rem 0.9rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  background: ${Ar};
  color: #ffffff;
  transition: filter 0.15s ease, opacity 0.15s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,q5=e=>m`
  min-height: 140px;
  border: 1px dashed ${e?"#4b5563":"#d1d5db"};
  border-radius: 12px;
  padding: 1.25rem;
  font-size: 0.9rem;
  color: #9ca3af;
`,M5=m`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,ey=e=>m`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  background: ${e?"#1f2937":"#f3f4f6"};
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#374151"};
`,ty=m`
  flex: 1;
  min-width: 0;
`,ny=m`
  font-weight: 600;
  margin-bottom: 0.35rem;
`,ry=e=>m`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: ${e?"#a5b4fc":Ar};
  letter-spacing: 0.02em;
`,iy=m`
  font-weight: 700;
  color: #6b7280;
  white-space: nowrap;
  font-size: 0.82rem;
`,ly=m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,oy=e=>m`
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
`,sy=m`
  font-size: 0.85rem;
  color: #b91c1c;
  margin-bottom: 0.75rem;
`,vf=()=>f("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":!0,children:[s("circle",{cx:"9",cy:"12",r:"6"}),s("circle",{cx:"15",cy:"12",r:"6"})]});function ay({darkMode:e,userEmail:t,points:n,onPointsChange:r}){const[i,l]=x.useState([]),[o,a]=x.useState({}),[c,p]=x.useState("");x.useEffect(()=>{t&&l(j5(t))},[t]);const v=()=>{l([]),hf(t,[])},g=async w=>{if(!t){p("Sign in again to redeem rewards.");return}if(n<w.cost){p("Not enough points for this reward.");return}p(""),a(k=>({...k,[w.id]:!0}));try{const S=await(await fetch(`${z5}/backend/redeem_reward.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rewardId:w.id})})).json();if(!S.success){p(S.message||"Could not redeem."),typeof S.points=="number"&&r(S.points);return}r(S.points);const C=[...i,{title:w.title,rewardId:w.id,cost:w.cost,at:new Date().toISOString(),promoCode:O5()}];l(C),hf(t,C)}catch{p("Network error.")}finally{a(k=>({...k,[w.id]:!1}))}};return f("div",{css:R5(e),children:[f("div",{css:D5,children:[f("div",{css:I5,children:[s("h1",{children:"Rewards Store"}),s("p",{children:"Redeem your points for exciting rewards"})]}),f("div",{css:A5(e),children:[s("div",{css:U5,children:s(vf,{})}),f("div",{children:[s("div",{css:F5,children:"Your points"}),s("div",{css:B5,children:n})]})]})]}),c?s("div",{css:sy,role:"alert",children:c}):null,f("div",{css:mf(e),children:[f("div",{css:gf,children:[s(L5,{"aria-hidden":!0}),"Available rewards"]}),s("div",{css:W5,children:T5.map(w=>{const k=!!o[w.id],S=n<w.cost||k;return f("article",{css:H5(e),children:[s("div",{css:V5,children:s("img",{src:w.image,alt:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",onError:C=>{C.target.style.display="none"}})}),f("div",{css:Q5,children:[s("h2",{css:K5,children:w.title}),s("p",{css:Y5,children:w.description}),f("div",{css:Z5,children:[f("span",{css:J5,children:[s(vf,{}),w.cost]}),s("span",{css:G5(e),children:w.category})]}),s("button",{type:"button",css:X5,disabled:S,onClick:()=>g(w),children:k?"...":"Redeem"})]})]},w.id)})})]}),f("div",{css:mf(e),children:[f("div",{css:ly,children:[s("div",{css:gf,children:"My rewards"}),s("button",{type:"button",css:oy(e),onClick:v,disabled:i.length===0,children:"Clear history"})]}),s("p",{css:m`
            font-size: 0.78rem;
            color: #9ca3af;
            margin: -0.5rem 0 0.85rem;
          `,children:"Demo: each redemption shows a random promo-style code for display only."}),i.length===0?s("div",{css:q5(e),children:"Your redeemed rewards will appear here."}):s("ul",{css:M5,children:i.map((w,k)=>f("li",{css:ey(e),children:[f("div",{css:ty,children:[s("div",{css:ny,children:w.title}),w.promoCode?f("div",{css:ry(e),children:["Promo: ",w.promoCode]}):null]}),f("span",{css:iy,children:["-",w.cost," pts"]})]},`${w.rewardId}-${k}`))})]}),s("p",{css:m`
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        `,children:"Reward images are from Unsplash (third-party photos)."})]})}const T0=e=>m`
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
`,O0=m`
  margin: 0 0 0.25rem;
  padding: 0 0.1rem;
`,j0=e=>m`
  font-size: clamp(1.5rem, 3.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.45rem;
  color: ${e?"#f9fafb":"#111827"};
`,R0=e=>m`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${e?"#9ca3af":"#6b7280"};
  max-width: 36rem;
`,D0=e=>m`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.25rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08)"};
`,I0=m`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 1.25rem;
`,A0=m`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  flex: 1;
`,F0=m`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  flex: 1;
`,B0=m`
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
`,U0=m`
  font-size: clamp(1.25rem, 2.8vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
`,$o=e=>m`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.875rem;
  line-height: 1.45;
`,W0=m`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.35rem;
`,H0=m`
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
`,V0=e=>m`
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
`,Q0=m`
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
`,cy=m`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
`,uy=m`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`,Pn=e=>m`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 0.95rem 0.85rem;
  color: ${e?"#f3f4f6":"#111827"};
  box-shadow: ${e?"none":"0 1px 2px rgba(15, 23, 42, 0.04)"};
`,Nn=m`
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
`,zn=m`
  font-size: 0.68rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  line-height: 1.2;
`,Tn=m`
  font-size: 1.45rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
  color: inherit;
  @media (min-width: 480px) {
    font-size: 1.65rem;
  }
`,On=e=>m`
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.3;
`,su=e=>m`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.4rem 1.5rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 28px rgba(15, 23, 42, 0.06)"};
`,au=e=>m`
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.85rem;
  padding: 0 0 0.65rem;
  border-bottom: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.28)"};
`,K0=m`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1.25rem;
  }
`,We=m`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`,Y0=m`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,dy=m`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,He=m`
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
`,mt=e=>m`
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
`,gt=m`
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
`,vt=m`
  flex: 1;
  min-width: 0;
  word-break: break-word;
`,zt=e=>m`
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
`,_o=e=>m`
  ${zt(e)};
  background: ${e?"#1f2937":"#f3f4f6"};
  color: ${e?"#9ca3af":"#4b5563"};
  cursor: default;
  &:focus {
    border-color: ${e?"#4b5563":"#d1d5db"};
    box-shadow: none;
  }
`,Z0=e=>m`
  ${zt(e)};
  min-height: 88px;
  line-height: 1.45;
  resize: vertical;
`,J0=e=>m`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.22)"};
`,ll=e=>m`
  border: 1px solid ${e?"#6366f1":"#d1d5db"};
  background: ${e?"#6366f1":"#ffffff"};
  color: ${e?"#ffffff":"#374151"};
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
`,cu=e=>m`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(248, 113, 113, 0.12)":"rgba(185, 28, 28, 0.08)"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.25)":"rgba(185, 28, 28, 0.2)"};
  color: ${e?"#fca5a5":"#b91c1c"};
  font-size: 0.8rem;
  line-height: 1.4;
`,fy=e=>m`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(34, 197, 94, 0.14)":"rgba(22, 163, 74, 0.1)"};
  border: 1px solid ${e?"rgba(74, 222, 128, 0.3)":"rgba(22, 163, 74, 0.25)"};
  color: ${e?"#86efac":"#166534"};
  font-size: 0.8rem;
  line-height: 1.4;
`,py=m`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
`,hy=m`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.15rem;
`,Hs=m`
  position: relative;
  width: 100%;
`,Vs=e=>m`
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
`,my="/strack/".replace(/\/$/,""),gy="Password updated successfully";function G0({darkMode:e,userEmail:t}){const[n,r]=x.useState(""),[i,l]=x.useState(""),[o,a]=x.useState(""),[c,p]=x.useState(!1),[v,g]=x.useState(!1),[w,k]=x.useState(!1),[S,C]=x.useState(""),[P,h]=x.useState(!1),[d,y]=x.useState(!1),b=()=>{r(""),l(""),a("")},_=async $=>{$.preventDefault(),C(""),h(!1);const L=(t||"").trim();if(!L){C("Email is missing. Please sign in again.");return}if(i!==o){C("New password and confirmation do not match.");return}if(i.length<6){C("New password must be at least 6 characters.");return}if(i===n){C("New password must be different from your current password.");return}y(!0);try{const V=await(await fetch(`${my}/backend/change_password.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,current_password:n,new_password:i})})).json().catch(()=>({}));V.success?(h(!0),C(gy),b()):C(V.message||"Could not update password.")}catch{C("Network error. Check your connection and try again.")}finally{y(!1)}};return f("section",{css:su(e),"aria-labelledby":"password-change-heading",children:[s("h2",{id:"password-change-heading",css:au(e),children:"Change password"}),s("p",{css:m`
          margin: -0.35rem 0 0.75rem;
          font-size: 0.85rem;
          line-height: 1.45;
          color: ${e?"#9ca3af":"#6b7280"};
        `,children:"Use a strong password you do not use elsewhere."}),f("form",{css:py,onSubmit:_,noValidate:!0,children:[f("div",{css:We,children:[s("label",{css:He,htmlFor:"pwd-current",children:"Current password"}),f("div",{css:Hs,children:[s("input",{id:"pwd-current",type:c?"text":"password",autoComplete:"current-password",css:m`
                ${zt(e)};
                padding-right: 2.75rem;
              `,value:n,onChange:$=>r($.target.value)}),s("button",{type:"button",css:Vs(e),onClick:()=>p($=>!$),"aria-label":c?"Hide current password":"Show current password","aria-pressed":c,children:c?s(Ws,{"aria-hidden":!0}):s(Us,{"aria-hidden":!0})})]})]}),f("div",{css:We,children:[s("label",{css:He,htmlFor:"pwd-new",children:"New password"}),f("div",{css:Hs,children:[s("input",{id:"pwd-new",type:v?"text":"password",autoComplete:"new-password",css:m`
                ${zt(e)};
                padding-right: 2.75rem;
              `,value:i,onChange:$=>l($.target.value)}),s("button",{type:"button",css:Vs(e),onClick:()=>g($=>!$),"aria-label":v?"Hide new password":"Show new password","aria-pressed":v,children:v?s(Ws,{"aria-hidden":!0}):s(Us,{"aria-hidden":!0})})]})]}),f("div",{css:We,children:[s("label",{css:He,htmlFor:"pwd-confirm",children:"Confirm new password"}),f("div",{css:Hs,children:[s("input",{id:"pwd-confirm",type:w?"text":"password",autoComplete:"new-password",css:m`
                ${zt(e)};
                padding-right: 2.75rem;
              `,value:o,onChange:$=>a($.target.value)}),s("button",{type:"button",css:Vs(e),onClick:()=>k($=>!$),"aria-label":w?"Hide password confirmation":"Show password confirmation","aria-pressed":w,children:w?s(Ws,{"aria-hidden":!0}):s(Us,{"aria-hidden":!0})})]})]}),s("div",{css:hy,children:s("button",{type:"submit",disabled:d,css:m`
              ${ll(!0)};
              &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
              }
            `,children:d?"Updating…":"Update password"})}),S?s("div",{css:P?fy(e):cu(e),role:"status",children:S}):null]})]})}const vy="(min-width: 768px)",yy="(max-width: 767.98px)";function uu(){const[e,t]=x.useState(!1),n=x.useCallback(()=>t(!1),[]);return x.useEffect(()=>{const r=window.matchMedia(vy),i=()=>{r.matches&&t(!1)};return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),x.useEffect(()=>{const r=window.matchMedia(yy);if(e&&r.matches){const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}}},[e]),{mobileMenuOpen:e,setMobileMenuOpen:t,closeMenu:n}}const Lo="0.35s ease",du=e=>m`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${Lo};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,fu=(e,t)=>m`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition:
    background-color ${Lo},
    box-shadow ${Lo},
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
`,pu=e=>m`
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
`,hu=m`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,mu=e=>m`
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
`,gu=e=>m`
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
`,vu=e=>m`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#111827"};
  min-width: 0;
`,yu=e=>m`
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
`,wu=e=>m`
  flex: 1;
  min-height: 0;
  min-width: 0;
  padding: 0.65rem max(0.75rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(0.75rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  overflow-x: hidden;
  transition: color ${Lo};

  @media (min-width: 768px) {
    padding: max(1rem, env(safe-area-inset-top)) 2rem 2rem 2rem;
  }
`,wy="/strack/".replace(/\/$/,""),Tt="0.35s ease",xy=m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Sy=m`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Cy=e=>m`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Tt};
  }
`,by=e=>m`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Tt};
`,yf=e=>m`
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
  transition: color ${Tt};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,ky=m`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,Ey=m`
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
`,$y=m`
  flex: 1;
  min-width: 0;
`,_y=e=>m`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Tt};
`,Ly=e=>m`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Tt};
`,Py=e=>m`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${Tt};
`,Ny=m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,zy=e=>m`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${Tt};
`,Ty=e=>m`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${Tt};
`,Oy=m`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,jy=(e,t)=>m`
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
  transition: background ${Tt}, color ${Tt};

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
`,Ry=m`
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
`,Dy=(e,t)=>m`
  max-width: ${t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,si=m`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,ai=m`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Iy=[{id:"dashboard",label:"Dashboard",icon:nu},{id:"courses",label:"Courses",icon:Wn},{id:"calendar",label:"Calendar",icon:iu},{id:"leaderboard",label:"Leaderboard",icon:ru},{id:"badges",label:"Badges",icon:E0},{id:"rewards",label:"Rewards",icon:tu},{id:"profile",label:"Profile",icon:ls}];function wf(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Ay(e){const t=String(e||"").trim();if(/^STU/i.test(t))return t.toUpperCase();if(/^s\d+$/i.test(t)){const n=Number(t.slice(1));if(Number.isFinite(n))return`STU${String(n).padStart(3,"0")}`}return/^\d+$/.test(t)?`STU${String(Number(t)).padStart(3,"0")}`:"STU001"}function xf(e){return`strack_profile_extra_${(e||"").toLowerCase()}`}function Sf(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function Fy({darkMode:e,onToggleDarkMode:t}){const n=pl(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:l}=uu(),[o,a]=x.useState("dashboard"),[c,p]=x.useState(0),[v,g]=x.useState(""),[w,k]=x.useState("STU001"),[S,C]=x.useState(!1),[P,h]=x.useState(""),[d,y]=x.useState({phone:"+44 7700 900123",address:"123 University Avenue, Newcastle",bio:"Computer Science student passionate about software development."}),[b,_]=x.useState(d);let $="Student";try{const O=localStorage.getItem("strack_user");if(O){const z=JSON.parse(O);z!=null&&z.name&&($=z.name)}}catch{}x.useEffect(()=>{try{const O=localStorage.getItem("strack_user");if(O){const z=JSON.parse(O);z!=null&&z.email&&g(z.email),z!=null&&z.id&&k(Ay(z.id))}}catch{}},[]),x.useEffect(()=>{if(v)try{const O=localStorage.getItem(xf(v));if(!O)return;const z=JSON.parse(O),H={phone:Sf(z==null?void 0:z.phone),address:String((z==null?void 0:z.address)||d.address),bio:String((z==null?void 0:z.bio)||d.bio)};y(H),_(H)}catch{}},[v]);const L=x.useCallback(async()=>{if(v)try{const z=await(await fetch(`${wy}/backend/student_points.php?email=${encodeURIComponent(v)}`,{cache:"no-store"})).json();z.success&&typeof z.points=="number"&&p(z.points)}catch{}},[v]);x.useEffect(()=>{L()},[L]);const R=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},V=()=>{_(d),h(""),C(!0)},A=()=>{_(d),h(""),C(!1)},ie=()=>{const O=Sf(b.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(O.replace(/\s+/g," "))){h("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const H={phone:O,address:(b.address||"").trim()||d.address,bio:(b.bio||"").trim()||d.bio};y(H),_(H),h(""),C(!1);try{localStorage.setItem(xf(v),JSON.stringify(H))}catch{}},ct=O=>{a(O),l()};return f("div",{css:du(e),children:[r?s("button",{type:"button",css:pu(e),onClick:l,"aria-label":"Close menu"}):null,f("aside",{css:fu(e,r),children:[f("header",{css:xy,children:[f("div",{css:Sy,children:[s("div",{css:Cy(e),children:s(il,{})}),s("span",{css:by(e),children:"Strack"})]}),f("div",{css:m`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s("button",{type:"button",css:yf(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s(zr,{}):s(Tr,{})}),s("button",{type:"button",css:yu(e),onClick:l,"aria-label":"Close menu",children:s(Xt,{})})]})]}),f("div",{css:ky,children:[s("div",{css:Ey,children:wf($)}),f("div",{css:$y,children:[s("div",{css:_y(e),children:$}),s("div",{css:Ly(e),children:"Student"})]})]}),s("div",{css:Py(e),children:f("div",{css:Ny,children:[f("span",{css:zy(e),children:[s(N0,{})," Points"]}),s("span",{css:Ty(e),children:c})]})}),s("nav",{css:Oy,children:Iy.map(({id:O,label:z,icon:H})=>f("button",{css:jy(e,o===O),onClick:()=>ct(O),children:[s(H,{}),z]},O))}),f("button",{css:Ry,onClick:R,children:[s(ou,{}),"Logout"]})]}),f("div",{css:hu,children:[f("header",{css:mu(e),children:[s("button",{type:"button",css:gu(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(lu,{})}),s("span",{css:vu(e),children:"Strack"}),s("button",{type:"button",css:yf(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(zr,{}):s(Tr,{})})]}),s("main",{css:wu(e),children:o==="rewards"?s(ay,{darkMode:e,userEmail:v,points:c,onPointsChange:p}):f("div",{css:Dy(e,o==="profile"),children:[o==="dashboard"&&f(we,{children:[s("h1",{css:si,children:"Dashboard"}),s("p",{css:ai,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),o==="courses"&&f(we,{children:[s("h1",{css:si,children:"Courses"}),s("p",{css:ai,children:"This is the courses page. View your enrolled courses, materials, and grades here."})]}),o==="calendar"&&f(we,{children:[s("h1",{css:si,children:"Calendar"}),s("p",{css:ai,children:"This is the calendar page. View your schedule, deadlines, and important dates here."})]}),o==="leaderboard"&&f(we,{children:[s("h1",{css:si,children:"Leaderboard"}),s("p",{css:ai,children:"This is the leaderboard page. See how you rank against other students and track your position."})]}),o==="badges"&&f(we,{children:[s("h1",{css:si,children:"Badges"}),s("p",{css:ai,children:"This is the badges page. View and collect achievement badges earned from your activities."})]}),o==="profile"&&f("div",{css:T0(e),children:[f("header",{css:O0,children:[s("h1",{css:j0(e),children:"My Profile"}),s("p",{css:R0(e),children:"Manage your personal information and account details."})]}),s("section",{css:D0(e),children:f("div",{css:I0,children:[f("div",{css:A0,children:[s("div",{css:B0,children:wf($)}),f("div",{css:F0,children:[s("h2",{css:U0,children:$}),f("div",{css:$o(e),children:["Student ID: ",w]}),s("div",{css:$o(e),children:"Computer Science"}),f("div",{css:W0,children:[s("span",{css:H0,children:"Student"}),s("span",{css:V0(e),children:"Undergraduate"})]})]})]}),S?null:f("button",{type:"button",css:Q0,onClick:V,children:[s(En,{"aria-hidden":!0}),"Edit Profile"]})]})}),f("section",{css:cy,"aria-label":"Profile statistics",children:[f("article",{css:Pn(e),children:[f("div",{css:Nn,children:[s(tu,{"aria-hidden":!0}),s("span",{css:zn,children:"Points"})]}),s("div",{css:Tn,children:c}),s("div",{css:On(e),children:"Total earned"})]}),f("article",{css:Pn(e),children:[f("div",{css:Nn,children:[s(E0,{"aria-hidden":!0}),s("span",{css:zn,children:"Badges"})]}),s("div",{css:Tn,children:"3"}),s("div",{css:On(e),children:"Achievements"})]}),f("article",{css:Pn(e),children:[f("div",{css:Nn,children:[s(Wn,{"aria-hidden":!0}),s("span",{css:zn,children:"Courses"})]}),s("div",{css:Tn,children:"6"}),s("div",{css:On(e),children:"Enrolled"})]}),f("article",{css:Pn(e),children:[f("div",{css:Nn,children:[s(ru,{"aria-hidden":!0}),s("span",{css:zn,children:"Rank"})]}),s("div",{css:Tn,children:"#3"}),s("div",{css:On(e),children:"Leaderboard"})]})]}),f("section",{css:su(e),children:[s("h2",{css:au(e),children:"Personal Information"}),f("div",{css:K0,children:[f("div",{css:We,children:[s("span",{css:He,children:"Full Name"}),S?s("input",{css:_o(e),value:$,readOnly:!0,"aria-readonly":"true"}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(ls,{"aria-hidden":!0})}),s("span",{css:vt,children:$})]})]}),f("div",{css:We,children:[s("span",{css:He,children:"Email Address"}),S?s("input",{css:_o(e),value:v||"student@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(L0,{"aria-hidden":!0})}),s("span",{css:vt,children:v||"student@uni.ac.uk"})]})]}),f("div",{css:We,children:[s("span",{css:He,children:"Phone Number"}),S?s("input",{css:zt(e),value:b.phone,onChange:O=>_(z=>({...z,phone:O.target.value})),placeholder:"+44 7700 900123"}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s($0,{"aria-hidden":!0})}),s("span",{css:vt,children:d.phone})]})]}),f("div",{css:We,children:[s("span",{css:He,children:"Address"}),S?s("input",{css:zt(e),value:b.address,onChange:O=>_(z=>({...z,address:O.target.value}))}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(_0,{"aria-hidden":!0})}),s("span",{css:vt,children:d.address})]})]}),f("div",{css:[We,Y0],children:[s("span",{css:He,children:"Bio"}),S?s("textarea",{css:Z0(e),value:b.bio,onChange:O=>_(z=>({...z,bio:O.target.value}))}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(P0,{"aria-hidden":!0})}),s("span",{css:vt,children:d.bio})]})]})]}),S?f("div",{css:J0(e),children:[s("button",{type:"button",css:ll(!0),onClick:ie,children:"Save"}),s("button",{type:"button",css:ll(!1),onClick:A,children:"Cancel"})]}):null,P?s("div",{css:cu(e),children:P}):null]}),s(G0,{darkMode:e,userEmail:v})]})]})})]})]})}const Cf="/strack/".replace(/\/$/,""),Hn="0.35s ease",By=m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Uy=m`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Wy=e=>m`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Hn};
  }
`,Hy=e=>m`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Hn};
`,bf=e=>m`
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
  transition: color ${Hn};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,Vy=m`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,Qy=m`
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
`,Ky=m`
  flex: 1;
  min-width: 0;
`,Yy=e=>m`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Hn};
`,Zy=e=>m`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Hn};
`,Jy=m`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Gy=(e,t)=>m`
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
  transition: background ${Hn}, color ${Hn};

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
`,Xy=m`
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
`,qy=(e,t)=>m`
  max-width: ${t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,er=m`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,tr=m`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,My=[{id:"dashboard",label:"Dashboard",icon:nu},{id:"students",label:"Students",icon:rl},{id:"attendance",label:"Attendance",icon:P5},{id:"performance",label:"Performance",icon:ru},{id:"courses",label:"Courses",icon:Wn},{id:"calendar",label:"Calendar",icon:iu},{id:"profile",label:"Profile",icon:ls}];function kf(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Ef(e){return`strack_lecturer_profile_extra_${(e||"").toLowerCase()}`}function $f(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function ew({darkMode:e,onToggleDarkMode:t}){const n=pl(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:l}=uu(),[o,a]=x.useState("dashboard"),[c,p]=x.useState(""),[v,g]=x.useState(""),[w,k]=x.useState(""),[S,C]=x.useState(!1),[P,h]=x.useState(""),[d,y]=x.useState({phone:"+44 7700 900123",office:"Building A, Room 305",address:"123 University Avenue, Newcastle upon Tyne",bio:"Computer Science lecturer focused on software engineering and student success."}),[b,_]=x.useState(d);let $="Lecturer";try{const O=localStorage.getItem("strack_user");if(O){const z=JSON.parse(O);z!=null&&z.name&&($=z.name)}}catch{}x.useEffect(()=>{try{const O=localStorage.getItem("strack_user");if(O){const z=JSON.parse(O);z!=null&&z.email&&p(z.email);const H=typeof(z==null?void 0:z.department)=="string"?z.department.trim():"",Fe=typeof(z==null?void 0:z.department_code)=="string"?z.department_code.trim():"";H&&g(H),Fe&&k(Fe)}}catch{}},[]);const L=x.useCallback(async()=>{if(c)try{const[O,z]=await Promise.all([fetch(`${Cf}/backend/lecturers.php`,{cache:"no-store"}),fetch(`${Cf}/backend/departments.php`,{cache:"no-store"})]),H=await O.json(),Fe=await z.json(),Be=H.success?H.lecturers||[]:[],T=c.toLowerCase().trim(),D=Be.find(ke=>String(ke.email||"").toLowerCase().trim()===T),I=(D==null?void 0:D.department)!=null?String(D.department).trim():"";if(!I)return;const ee=(Fe.success?Fe.departments||[]:[]).find(ke=>String(ke.name||"").trim()===I||String(ke.code||"").trim()===I||String(ke.name||"").trim().toLowerCase()===I.toLowerCase()||String(ke.code||"").trim().toLowerCase()===I.toLowerCase());ee?(g(String(ee.name||I).trim()),k(String(ee.code||"").trim())):(g(I),k(""))}catch{}},[c]);x.useEffect(()=>{L()},[L]),x.useEffect(()=>{if(c)try{const O=localStorage.getItem(Ef(c));if(!O)return;const z=JSON.parse(O),H={phone:$f(z==null?void 0:z.phone),office:String((z==null?void 0:z.office)||d.office),address:String((z==null?void 0:z.address)||d.address),bio:String((z==null?void 0:z.bio)||d.bio)};y(H),_(H)}catch{}},[c]);const R=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},V=O=>{a(O),l()},A=()=>{_(d),h(""),C(!0)},ie=()=>{_(d),h(""),C(!1)},ct=()=>{const O=$f(b.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(O.replace(/\s+/g," "))){h("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const H={phone:O,office:(b.office||"").trim()||d.office,address:(b.address||"").trim()||d.address,bio:(b.bio||"").trim()||d.bio};y(H),_(H),h(""),C(!1);try{localStorage.setItem(Ef(c),JSON.stringify(H))}catch{}};return f("div",{css:du(e),children:[r?s("button",{type:"button",css:pu(e),onClick:l,"aria-label":"Close menu"}):null,f("aside",{css:fu(e,r),children:[f("header",{css:By,children:[f("div",{css:Uy,children:[s("div",{css:Wy(e),children:s(il,{})}),s("span",{css:Hy(e),children:"Strack"})]}),f("div",{css:m`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s("button",{type:"button",css:bf(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s(zr,{}):s(Tr,{})}),s("button",{type:"button",css:yu(e),onClick:l,"aria-label":"Close menu",children:s(Xt,{})})]})]}),f("div",{css:Vy,children:[s("div",{css:Qy,children:kf($)}),f("div",{css:Ky,children:[s("div",{css:Yy(e),children:$}),s("div",{css:Zy(e),children:"Lecturer"})]})]}),s("nav",{css:Jy,children:My.map(({id:O,label:z,icon:H})=>f("button",{type:"button",css:Gy(e,o===O),onClick:()=>V(O),children:[s(H,{}),z]},O))}),f("button",{type:"button",css:Xy,onClick:R,children:[s(ou,{}),"Logout"]})]}),f("div",{css:hu,children:[f("header",{css:mu(e),children:[s("button",{type:"button",css:gu(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(lu,{})}),s("span",{css:vu(e),children:"Strack"}),s("button",{type:"button",css:bf(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(zr,{}):s(Tr,{})})]}),s("main",{css:wu(e),children:f("div",{css:qy(e,o==="profile"),children:[o==="dashboard"&&f(we,{children:[s("h1",{css:er,children:"Dashboard"}),s("p",{css:tr,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),o==="students"&&f(we,{children:[s("h1",{css:er,children:"Students"}),s("p",{css:tr,children:"This is the students page. View your class lists and student details here."})]}),o==="attendance"&&f(we,{children:[s("h1",{css:er,children:"Attendance"}),s("p",{css:tr,children:"This is the attendance page. Mark and view student attendance for your classes here."})]}),o==="performance"&&f(we,{children:[s("h1",{css:er,children:"Performance"}),s("p",{css:tr,children:"This is the performance page. View and analyse student performance and grades here."})]}),o==="courses"&&f(we,{children:[s("h1",{css:er,children:"Courses"}),s("p",{css:tr,children:"This is the courses page. Manage your courses, materials, and class lists here."})]}),o==="calendar"&&f(we,{children:[s("h1",{css:er,children:"Calendar"}),s("p",{css:tr,children:"This is the calendar page. View your teaching schedule, deadlines, and important dates here."})]}),o==="profile"&&f("div",{css:T0(e),children:[f("header",{css:O0,children:[s("h1",{css:j0(e),children:"My Profile"}),s("p",{css:R0(e),children:"Manage your personal information and teaching profile."})]}),s("section",{css:D0(e),children:f("div",{css:I0,children:[f("div",{css:A0,children:[s("div",{css:B0,children:kf($)}),f("div",{css:F0,children:[s("h2",{css:U0,children:$}),f("div",{css:$o(e),children:["Department: ",v||"—"]}),f("div",{css:$o(e),children:["Department code: ",w||"—"]}),f("div",{css:W0,children:[s("span",{css:H0,children:"Lecturer"}),s("span",{css:V0(e),children:"2 Courses"})]})]})]}),S?null:f("button",{type:"button",css:Q0,onClick:A,children:[s(En,{"aria-hidden":!0}),"Edit Profile"]})]})}),f("section",{css:uy,"aria-label":"Teaching statistics",children:[f("article",{css:Pn(e),children:[f("div",{css:Nn,children:[s(Wn,{"aria-hidden":!0}),s("span",{css:zn,children:"Courses"})]}),s("div",{css:Tn,children:"2"}),s("div",{css:On(e),children:"Active courses"})]}),f("article",{css:Pn(e),children:[f("div",{css:Nn,children:[s(rl,{"aria-hidden":!0}),s("span",{css:zn,children:"Students"})]}),s("div",{css:Tn,children:"156"}),s("div",{css:On(e),children:"Total enrolled"})]}),f("article",{css:Pn(e),children:[f("div",{css:Nn,children:[s(N0,{"aria-hidden":!0}),s("span",{css:zn,children:"Hours / week"})]}),s("div",{css:Tn,children:"18"}),s("div",{css:On(e),children:"Teaching hours"})]})]}),f("section",{css:su(e),children:[s("h2",{css:au(e),children:"Personal Information"}),f("div",{css:K0,children:[f("div",{css:We,children:[s("span",{css:He,children:"Full Name"}),S?s("input",{css:_o(e),value:$,readOnly:!0,"aria-readonly":"true"}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(ls,{"aria-hidden":!0})}),s("span",{css:vt,children:$})]})]}),f("div",{css:We,children:[s("span",{css:He,children:"Email Address"}),S?s("input",{css:_o(e),value:c||"lecturer@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(L0,{"aria-hidden":!0})}),s("span",{css:vt,children:c||"lecturer@uni.ac.uk"})]})]}),f("div",{css:We,children:[s("span",{css:He,children:"Phone Number"}),S?s("input",{css:zt(e),value:b.phone,onChange:O=>_(z=>({...z,phone:O.target.value})),placeholder:"+44 7700 900123"}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s($0,{"aria-hidden":!0})}),s("span",{css:vt,children:d.phone})]})]}),f("div",{css:We,children:[s("span",{css:He,children:"Office Location"}),S?s("input",{css:zt(e),value:b.office,onChange:O=>_(z=>({...z,office:O.target.value}))}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(N5,{"aria-hidden":!0})}),s("span",{css:vt,children:d.office})]})]}),f("div",{css:[We,dy],children:[s("span",{css:He,children:"Address"}),S?s("input",{css:zt(e),value:b.address,onChange:O=>_(z=>({...z,address:O.target.value}))}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(_0,{"aria-hidden":!0})}),s("span",{css:vt,children:d.address})]})]}),f("div",{css:[We,Y0],children:[s("span",{css:He,children:"Bio"}),S?s("textarea",{css:Z0(e),value:b.bio,onChange:O=>_(z=>({...z,bio:O.target.value}))}):f("div",{css:mt(e),children:[s("span",{css:gt,children:s(P0,{"aria-hidden":!0})}),s("span",{css:vt,children:d.bio})]})]})]}),S?f("div",{css:J0(e),children:[s("button",{type:"button",css:ll(!0),onClick:ct,children:"Save"}),s("button",{type:"button",css:ll(!1),onClick:ie,children:"Cancel"})]}):null,P?s("div",{css:cu(e),children:P}):null]}),s(G0,{darkMode:e,userEmail:c})]})]})})]})]})}const fe="/strack",W="0.35s ease",tw=m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,nw=m`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,rw=e=>m`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${W};
  }
`,iw=e=>m`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${W};
`,_f=e=>m`
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
  transition: color ${W};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,lw=m`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,ow=m`
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
`,sw=m`
  flex: 1;
  min-width: 0;
`,aw=e=>m`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${W};
`,cw=e=>m`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${W};
`,uw=m`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,dw=(e,t)=>m`
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
  transition: background ${W}, color ${W};

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
`,fw=m`
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
`,pw=(e,t)=>m`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,Qs=m`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Ks=m`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Ys=e=>m`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${W};
`,Zs=m`
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
`,Dl=e=>m`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  margin-bottom: 1rem;
  transition: border-color ${W}, background ${W};

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
`,Js=m`
  margin-bottom: 1rem;
`,Gs=m`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,yn=e=>m`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,wn=e=>m`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,xn=e=>m`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;m`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const Sn=e=>m`
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
`,Cn=m`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,hw=(e,t)=>m`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${W}, color ${W};
`,mw=m`
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
`,Lf=m`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Pf=m`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Nf=m`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,zf=m`
  flex: 1;
  min-width: 0;
`,Tf=m`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Of=e=>m`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${W};
`,jf=m`
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
`,gw=e=>m`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${W}, box-shadow ${W};
`,vw=e=>m`
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
`,yw=e=>m`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${W};
`,ww=e=>m`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${W};
`,xw=e=>m`
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
`,Sw=m`
  margin-top: 1.5rem;
`,Cw=m`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,bw=m`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,kw=e=>m`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  transition: border-color ${W}, background ${W};

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
`,ci=e=>m`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${W}, box-shadow ${W};
`,Y=e=>m`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1a1a1a":"#f9fafb"};
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  transition: color ${W}, background ${W}, border-color ${W};
`,F=e=>m`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${W}, border-color ${W};
`,ui=m`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rr=e=>m`
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
`,di=e=>m`
  ${rr(e)}
  &:hover {
    color: #dc2626;
  }
`,fi=m`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,pi=e=>m`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${W};
`,hi=e=>m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${W};
`,mi=e=>m`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${W};
`,gi=e=>m`
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
`,vi=m`
  padding: 1.5rem;
`,le=m`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,oe=e=>m`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${W};
`,ue=e=>m`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${W}, background ${W};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${e?"#6b7280":"#9ca3af"};
  }
`,Rf=e=>m`
  ${ue(e)}
  min-height: 80px;
  resize: vertical;
`,yi=e=>m`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${W};
`,wi=e=>m`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${W}, background ${W};

  &:hover {
    background: ${e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"};
  }
`,xi=m`
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
`,Ew=[{id:"dashboard",label:"Dashboard",icon:nu},{id:"students",label:"Students",icon:rl},{id:"lecturers",label:"Lecturers",icon:il},{id:"courses",label:"Courses",icon:Wn},{id:"departments",label:"Departments",icon:Ei},{id:"degrees",label:"Degrees",icon:Wn},{id:"calendar",label:"Calendar",icon:iu}];function $w(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function _w({darkMode:e,onToggleDarkMode:t}){const n=pl(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:l}=uu(),[o,a]=x.useState("dashboard"),[c,p]=x.useState([]),[v,g]=x.useState(!1),[w,k]=x.useState(""),[S,C]=x.useState(!1),[P,h]=x.useState(null),[d,y]=x.useState({code:"",name:"",description:""}),[b,_]=x.useState(!1),$=x.useCallback(async()=>{g(!0);try{const E=await(await fetch(`${fe}/backend/departments.php`)).json();E.success&&p(E.departments||[])}catch{p([])}finally{g(!1)}},[]);x.useEffect(()=>{o==="departments"&&$()},[o,$]);const[L,R]=x.useState([]),[V,A]=x.useState(!1),[ie,ct]=x.useState(""),[O,z]=x.useState(!1),[H,Fe]=x.useState(null),[Be,T]=x.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:"",degree:""}),[D,I]=x.useState(!1),[Q,ee]=x.useState([]),ke=x.useCallback(async()=>{A(!0);try{const E=await(await fetch(`${fe}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();E.success&&R(E.students||[])}catch{R([])}finally{A(!1)}},[]),St=x.useCallback(async()=>{try{const E=await(await fetch(`${fe}/backend/departments.php`)).json();E.success&&ee(E.departments||[])}catch{ee([])}},[]);x.useEffect(()=>{o==="students"&&ke(),(o==="students"||o==="lecturers"||o==="courses"||o==="degrees")&&St()},[o,ke,St]);const[Vt,Ct]=x.useState([]),[Qt,xu]=x.useState(!1),[Yn,X0]=x.useState(""),[q0,os]=x.useState(!1),[Zn,Su]=x.useState(null),[Fr,Jn]=x.useState({lecturer_id:"",full_name:"",email:"",department:""}),[Cu,bu]=x.useState(!1),Br=x.useCallback(async()=>{xu(!0);try{const E=await(await fetch(`${fe}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();E.success&&Ct(E.lecturers||[])}catch{Ct([])}finally{xu(!1)}},[]);x.useEffect(()=>{(o==="lecturers"||o==="courses")&&Br()},[o,Br]);const M0=()=>{Su(null),Jn({lecturer_id:"",full_name:"",email:"",department:""}),os(!0)},em=u=>{Su(u.id),Jn({lecturer_id:u.lecturer_id||"",full_name:u.full_name||"",email:u.email||"",department:u.department||""}),os(!0)},Ur=()=>os(!1),tm=async()=>{const{lecturer_id:u,full_name:E,email:U,department:je}=Fr;if(!(!u.trim()||!E.trim()||!U.trim()||!je.trim())){bu(!0);try{Zn?(await(await fetch(`${fe}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Zn,lecturer_id:u.trim(),full_name:E.trim(),email:U.trim(),department:je.trim()})})).json()).success&&(Ur(),Br()):(await(await fetch(`${fe}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:u.trim(),full_name:E.trim(),email:U.trim(),department:je.trim()})})).json()).success&&(Ur(),Br())}finally{bu(!1)}}},nm=async u=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${fe}/backend/lecturers.php?id=${u}`,{method:"DELETE"})).json()).success&&Br()}catch{}},ku=Vt.filter(u=>!Yn||(u.lecturer_id||"").toLowerCase().includes(Yn.toLowerCase())||(u.full_name||"").toLowerCase().includes(Yn.toLowerCase())||(u.email||"").toLowerCase().includes(Yn.toLowerCase())||(u.department||"").toLowerCase().includes(Yn.toLowerCase())),[ss,Eu]=x.useState([]),[as,$u]=x.useState(!1),[Gn,rm]=x.useState(""),[im,cs]=x.useState(!1),[Wr,_u]=x.useState(null),[Kt,vn]=x.useState({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0}),[Lu,Pu]=x.useState(!1),Hr=x.useCallback(async()=>{$u(!0);try{const E=await(await fetch(`${fe}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})).json();E.success&&Eu(E.courses||[])}catch{Eu([])}finally{$u(!1)}},[]);x.useEffect(()=>{o==="courses"&&Hr()},[o,Hr]);const lm=()=>{_u(null),vn({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0}),cs(!0)},om=u=>{_u(u.id),vn({course_code:u.course_code||"",course_name:u.course_name||"",department:u.department||"",lecturer_id:u.lecturer_id||"",credits:Number(u.credits)||0}),cs(!0)},Vr=()=>cs(!1),sm=async()=>{const{course_code:u,course_name:E,department:U,lecturer_id:je,credits:ut}=Kt;if(!(!u.trim()||!E.trim())){Pu(!0);try{Wr?(await(await fetch(`${fe}/backend/courses.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Wr,course_code:u.trim(),course_name:E.trim(),department:U.trim()||"",lecturer_id:je.trim()||"",credits:Number(ut)||0})})).json()).success&&(Vr(),Hr()):(await(await fetch(`${fe}/backend/courses.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({course_code:u.trim(),course_name:E.trim(),department:U.trim()||"",lecturer_id:je.trim()||"",credits:Number(ut)||0})})).json()).success&&(Vr(),Hr())}finally{Pu(!1)}}},am=async u=>{if(confirm("Delete this course?"))try{(await(await fetch(`${fe}/backend/courses.php?id=${u}`,{method:"DELETE"})).json()).success&&Hr()}catch{}},Nu=ss.filter(u=>!Gn||(u.course_code||"").toLowerCase().includes(Gn.toLowerCase())||(u.course_name||"").toLowerCase().includes(Gn.toLowerCase())||(u.department||"").toLowerCase().includes(Gn.toLowerCase())||(u.lecturer_name||"").toLowerCase().includes(Gn.toLowerCase())),[us,zu]=x.useState([]),[cm,Tu]=x.useState(!1),[Xn,um]=x.useState(""),[dm,ds]=x.useState(!1),[gl,Ou]=x.useState(null),[Qr,qn]=x.useState({code:"",name:"",department:"",description:""}),[ju,Ru]=x.useState(!1),Kr=x.useCallback(async()=>{Tu(!0);try{const E=await(await fetch(`${fe}/backend/degrees.php?t=${Date.now()}`,{cache:"no-store"})).json();E.success&&zu(E.degrees||[])}catch{zu([])}finally{Tu(!1)}},[]);x.useEffect(()=>{(o==="degrees"||o==="students")&&Kr()},[o,Kr]);const fm=()=>{Ou(null),qn({code:"",name:"",department:"",description:""}),ds(!0)},pm=u=>{Ou(u.id),qn({code:u.code||"",name:u.name||"",department:u.department||"",description:u.description||""}),ds(!0)},Yr=()=>ds(!1),hm=async()=>{const{code:u,name:E,department:U,description:je}=Qr;if(!(!u.trim()||!E.trim())){Ru(!0);try{gl?(await(await fetch(`${fe}/backend/degrees.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:gl,code:u.trim(),name:E.trim(),department:U.trim(),description:je.trim()})})).json()).success&&(Yr(),Kr()):(await(await fetch(`${fe}/backend/degrees.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:u.trim(),name:E.trim(),department:U.trim(),description:je.trim()})})).json()).success&&(Yr(),Kr())}finally{Ru(!1)}}},mm=async u=>{if(confirm("Delete this degree?"))try{(await(await fetch(`${fe}/backend/degrees.php?id=${u}`,{method:"DELETE"})).json()).success&&Kr()}catch{}},Du=us.filter(u=>!Xn||(u.code||"").toLowerCase().includes(Xn.toLowerCase())||(u.name||"").toLowerCase().includes(Xn.toLowerCase())||(u.department||"").toLowerCase().includes(Xn.toLowerCase())||(u.description||"").toLowerCase().includes(Xn.toLowerCase())),gm=()=>{Fe(null),T({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:"",degree:""}),z(!0)},vm=u=>{Fe(u.id),T({student_id:u.student_id,full_name:u.full_name,email:u.email,password:"",department:u.department||"",year:u.year||"",degree:u.degree||""}),z(!0)},Zr=()=>z(!1),ym=async()=>{const{student_id:u,full_name:E,email:U,password:je,department:ut,year:Yt,degree:vl}=Be;if(!(!u.trim()||!E.trim()||!U.trim())&&!(!H&&!je.trim())){I(!0);try{H?(await(await fetch(`${fe}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:H,student_id:u.trim(),full_name:E.trim(),email:U.trim(),password:je.trim(),department:ut.trim()||"",year:Yt.trim()||"",degree:vl.trim()||""})})).json()).success&&(Zr(),ke()):(await(await fetch(`${fe}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:u.trim(),full_name:E.trim(),email:U.trim(),password:je.trim(),department:ut.trim()||"",year:Yt.trim()||"",degree:vl.trim()||""})})).json()).success&&(Zr(),ke())}finally{I(!1)}}},wm=async u=>{if(confirm("Delete this student?"))try{(await(await fetch(`${fe}/backend/students.php?id=${u}`,{method:"DELETE"})).json()).success&&ke()}catch{}},Iu=L.filter(u=>!ie||(u.student_id||"").toLowerCase().includes(ie.toLowerCase())||(u.full_name||"").toLowerCase().includes(ie.toLowerCase())||(u.email||"").toLowerCase().includes(ie.toLowerCase())||(u.department||"").toLowerCase().includes(ie.toLowerCase())||(u.degree||"").toLowerCase().includes(ie.toLowerCase())),xm=["Foundation","Year 1","Year 2","Placement Year","Year 4"],Sm=()=>{h(null),y({code:"",name:"",description:""}),C(!0)},Cm=u=>{h(u.id),y({code:u.code,name:u.name,description:u.description||""}),C(!0)},Jr=()=>C(!1),bm=async()=>{const{code:u,name:E,description:U}=d;if(!(!u.trim()||!E.trim())){_(!0);try{P?(await(await fetch(`${fe}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:P,code:u.trim(),name:E.trim(),description:U.trim()})})).json()).success&&(Jr(),$()):(await(await fetch(`${fe}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:u.trim(),name:E.trim(),description:U.trim()})})).json()).success&&(Jr(),$())}finally{_(!1)}}},km=async u=>{if(confirm("Delete this department?"))try{(await(await fetch(`${fe}/backend/departments.php?id=${u}`,{method:"DELETE"})).json()).success&&$()}catch{}},Au=c.filter(u=>!w||u.code.toLowerCase().includes(w.toLowerCase())||u.name.toLowerCase().includes(w.toLowerCase())||(u.description||"").toLowerCase().includes(w.toLowerCase()));let fs="Admin Portal";try{const u=localStorage.getItem("strack_user");if(u){const E=JSON.parse(u),U=(E==null?void 0:E.name)||"";fs=U==="Test Admin"||U==="Admin"?"Admin Portal":U||"Admin Portal"}}catch{}const Em=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},$m=u=>{a(u),l()};return f("div",{css:du(e),children:[r?s("button",{type:"button",css:pu(e),onClick:l,"aria-label":"Close menu"}):null,f("aside",{css:fu(e,r),children:[f("header",{css:tw,children:[f("div",{css:nw,children:[s("div",{css:rw(e),children:s(il,{})}),s("span",{css:iw(e),children:"Strack"})]}),f("div",{css:m`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s("button",{type:"button",css:_f(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s(zr,{}):s(Tr,{})}),s("button",{type:"button",css:yu(e),onClick:l,"aria-label":"Close menu",children:s(Xt,{})})]})]}),f("div",{css:lw,children:[s("div",{css:ow,children:$w(fs)}),f("div",{css:sw,children:[s("div",{css:aw(e),children:fs}),s("div",{css:cw(e),children:"Admin"})]})]}),s("nav",{css:uw,children:Ew.map(({id:u,label:E,icon:U})=>f("button",{type:"button",css:dw(e,o===u),onClick:()=>$m(u),children:[s(U,{}),E]},u))}),f("button",{type:"button",css:fw,onClick:Em,children:[s(ou,{}),"Logout"]})]}),f("div",{css:hu,children:[f("header",{css:mu(e),children:[s("button",{type:"button",css:gu(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(lu,{})}),s("span",{css:vu(e),children:"Strack"}),s("button",{type:"button",css:_f(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(zr,{}):s(Tr,{})})]}),s("main",{css:wu(e),children:f("div",{css:pw(e,o==="departments"||o==="students"||o==="lecturers"||o==="courses"||o==="degrees"),children:[o==="dashboard"&&f(we,{children:[s("h1",{css:Lf,children:"Dashboard"}),s("p",{css:Pf,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),o==="students"&&f(we,{children:[f("div",{css:Qs,children:[f("div",{children:[s("h1",{css:Ks,children:"Manage Students"}),s("p",{css:Ys(e),children:"Add, edit, or remove student records."})]}),s("button",{type:"button",css:Zs,onClick:gm,children:"+ Add Student"})]}),f("div",{css:Js,children:[f("div",{css:yn(e),children:[s("span",{css:Sn(e),children:s(rl,{})}),f("div",{css:Cn,children:[s("p",{css:xn(e),children:"Total Students"}),s("p",{css:wn(e),children:V?"...":L.length})]})]}),f("div",{css:Gs,children:[Q.length>0?Q.map(u=>{const E=L.filter(U=>(U.department||"")===u.name).length;return f("div",{css:yn(e),children:[s("span",{css:Sn(e),children:s(Ei,{})}),f("div",{css:Cn,children:[s("p",{css:xn(e),children:u.name}),s("p",{css:wn(e),children:V?"...":E})]})]},u.id)}):null,(()=>{const u=L.filter(E=>!E.department).length;return u<=0?null:f("div",{css:yn(e),children:[s("span",{css:Sn(e),children:s(il,{})}),f("div",{css:Cn,children:[s("p",{css:xn(e),children:"Unassigned"}),s("p",{css:wn(e),children:V?"...":u})]})]})})()]})]}),f("div",{css:Dl(e),children:[s(oi,{}),s("input",{type:"text",placeholder:"Search students...",value:ie,onChange:u=>ct(u.target.value)})]}),f("table",{css:ci(e),children:[s("thead",{children:f("tr",{children:[s("th",{css:Y(e),children:"Student ID"}),s("th",{css:Y(e),children:"Name"}),s("th",{css:Y(e),children:"Email"}),s("th",{css:Y(e),children:"Department"}),s("th",{css:Y(e),children:"Degree"}),s("th",{css:Y(e),children:"Year"}),s("th",{css:Y(e),children:"GPA"}),s("th",{css:Y(e),children:"Points"}),s("th",{css:Y(e),children:"Attendance"}),s("th",{css:Y(e),children:"Actions"})]})}),s("tbody",{children:V?s("tr",{children:s("td",{css:F(e),colSpan:10,children:"Loading..."})}):Iu.length===0?s("tr",{children:s("td",{css:F(e),colSpan:10,children:"No students found."})}):Iu.map(u=>{var E;return f("tr",{children:[s("td",{css:F(e),children:u.student_id}),s("td",{css:F(e),children:u.full_name}),s("td",{css:F(e),children:u.email}),s("td",{css:F(e),children:u.department||"—"}),s("td",{css:F(e),children:((E=us.find(U=>U.code===u.degree))==null?void 0:E.name)||u.degree||"—"}),s("td",{css:F(e),children:u.year||"—"}),s("td",{css:F(e),children:Number(u.gpa)||0}),s("td",{css:F(e),children:f("span",{css:mw,children:[s(tu,{}),Number(u.points)||0]})}),s("td",{css:F(e),children:f("span",{css:hw(Number(u.attendance)||0,e),children:[Number(u.attendance)||0,"%"]})}),s("td",{css:F(e),children:f("div",{css:ui,children:[s("button",{type:"button",css:rr(e),onClick:()=>vm(u),title:"Edit",children:s(En,{})}),s("button",{type:"button",css:di(e),onClick:()=>wm(u.id),title:"Delete",children:s(li,{})})]})})]},u.id)})})]})]}),o==="lecturers"&&f(we,{children:[f("div",{css:Qs,children:[f("div",{children:[s("h1",{css:Ks,children:"Lecturer Management"}),s("p",{css:Ys(e),children:"Manage teaching staff and teaching assignments."})]}),s("button",{type:"button",css:Zs,onClick:M0,children:"+ Add Lecturer"})]}),f("div",{css:Js,children:[f("div",{css:yn(e),children:[s("span",{css:Sn(e),children:s(rl,{})}),f("div",{css:Cn,children:[s("p",{css:xn(e),children:"Total Lecturers"}),s("p",{css:wn(e),children:Qt?"...":Vt.length})]})]}),s("div",{css:Gs,children:Q.length>0?Q.map(u=>{const E=Vt.filter(U=>(U.department||"")===u.name).length;return f("div",{css:yn(e),children:[s("span",{css:Sn(e),children:s(Ei,{})}),f("div",{css:Cn,children:[s("p",{css:xn(e),children:u.name}),s("p",{css:wn(e),children:Qt?"...":E})]})]},u.id)}):null})]}),f("div",{css:Dl(e),children:[s(oi,{}),s("input",{type:"text",placeholder:"Search lecturers...",value:Yn,onChange:u=>X0(u.target.value)})]}),f("table",{css:ci(e),children:[s("thead",{children:f("tr",{children:[s("th",{css:Y(e),children:"Lecturer ID"}),s("th",{css:Y(e),children:"Name"}),s("th",{css:Y(e),children:"Email"}),s("th",{css:Y(e),children:"Department"}),s("th",{css:Y(e),children:"Modules"}),s("th",{css:Y(e),children:"Actions"})]})}),s("tbody",{children:Qt?s("tr",{children:s("td",{css:F(e),colSpan:6,children:"Loading..."})}):ku.length===0?s("tr",{children:s("td",{css:F(e),colSpan:6,children:"No lecturers found."})}):ku.map(u=>f("tr",{children:[s("td",{css:F(e),children:u.lecturer_id}),s("td",{css:F(e),children:u.full_name}),s("td",{css:F(e),children:u.email}),s("td",{css:F(e),children:u.department||"—"}),s("td",{css:F(e),children:Number(u.modules)||0}),s("td",{css:F(e),children:f("div",{css:ui,children:[s("button",{type:"button",css:rr(e),onClick:()=>em(u),title:"Edit",children:s(En,{})}),s("button",{type:"button",css:di(e),onClick:()=>nm(u.id),title:"Delete",children:s(li,{})})]})})]},u.id))})]})]}),o==="courses"&&f(we,{children:[f("div",{css:Qs,children:[f("div",{children:[s("h1",{css:Ks,children:"Course Management"}),s("p",{css:Ys(e),children:"Manage course catalog."})]}),s("button",{type:"button",css:Zs,onClick:lm,children:"+ Add Course"})]}),f("div",{css:Js,children:[f("div",{css:yn(e),children:[s("span",{css:Sn(e),children:s(Wn,{})}),f("div",{css:Cn,children:[s("p",{css:xn(e),children:"Total Courses"}),s("p",{css:wn(e),children:as?"...":ss.length})]})]}),s("div",{css:Gs,children:Q.length>0?Q.map(u=>{const E=ss.filter(U=>(U.department||"")===u.name).length;return f("div",{css:yn(e),children:[s("span",{css:Sn(e),children:s(Ei,{})}),f("div",{css:Cn,children:[s("p",{css:xn(e),children:u.name}),s("p",{css:wn(e),children:as?"...":E})]})]},u.id)}):null})]}),f("div",{css:Dl(e),children:[s(oi,{}),s("input",{type:"text",placeholder:"Search courses...",value:Gn,onChange:u=>rm(u.target.value)})]}),f("table",{css:ci(e),children:[s("thead",{children:f("tr",{children:[s("th",{css:Y(e),children:"Course Code"}),s("th",{css:Y(e),children:"Course Name"}),s("th",{css:Y(e),children:"Department"}),s("th",{css:Y(e),children:"Lecturer"}),s("th",{css:Y(e),children:"Credits"}),s("th",{css:Y(e),children:"Actions"})]})}),s("tbody",{children:as?s("tr",{children:s("td",{css:F(e),colSpan:6,children:"Loading..."})}):Nu.length===0?s("tr",{children:s("td",{css:F(e),colSpan:6,children:"No courses found."})}):Nu.map(u=>f("tr",{children:[s("td",{css:F(e),children:u.course_code}),s("td",{css:F(e),children:u.course_name}),s("td",{css:F(e),children:u.department||"—"}),s("td",{css:F(e),children:u.lecturer_name||"—"}),s("td",{css:F(e),children:f("span",{css:xw(),children:[Number(u.credits)||0," credits"]})}),s("td",{css:F(e),children:f("div",{css:ui,children:[s("button",{type:"button",css:rr(e),onClick:()=>om(u),title:"Edit",children:s(En,{})}),s("button",{type:"button",css:di(e),onClick:()=>am(u.id),title:"Delete",children:s(li,{})})]})})]},u.id))})]})]}),o==="degrees"&&f(we,{children:[f("div",{css:Nf,children:[f("div",{css:zf,children:[s("h1",{css:Tf,children:"Degrees"}),s("p",{css:Of(e),children:"Create, view, edit, and delete degrees."})]}),s("button",{type:"button",css:jf,onClick:fm,children:"+ Add Degree"})]}),f("div",{css:Dl(e),children:[s(oi,{}),s("input",{type:"text",placeholder:"Search degrees...",value:Xn,onChange:u=>um(u.target.value)})]}),f("table",{css:ci(e),children:[s("thead",{children:f("tr",{children:[s("th",{css:Y(e),children:"Code"}),s("th",{css:Y(e),children:"Name"}),s("th",{css:Y(e),children:"Department"}),s("th",{css:Y(e),children:"Description"}),s("th",{css:Y(e),children:"Actions"})]})}),s("tbody",{children:cm?s("tr",{children:s("td",{css:F(e),colSpan:5,children:"Loading..."})}):Du.length===0?s("tr",{children:s("td",{css:F(e),colSpan:5,children:"No degrees found."})}):Du.map(u=>f("tr",{children:[s("td",{css:F(e),children:u.code}),s("td",{css:F(e),children:u.name}),s("td",{css:F(e),children:u.department||"—"}),s("td",{css:F(e),children:u.description||"—"}),s("td",{css:F(e),children:f("div",{css:ui,children:[s("button",{type:"button",css:rr(e),onClick:()=>pm(u),title:"Edit",children:s(En,{})}),s("button",{type:"button",css:di(e),onClick:()=>mm(u.id),title:"Delete",children:s(li,{})})]})})]},u.id))})]})]}),o==="departments"&&f(we,{children:[f("div",{css:Nf,children:[f("div",{css:zf,children:[s("h1",{css:Tf,children:"Departments"}),s("p",{css:Of(e),children:"Manage university departments."})]}),s("button",{type:"button",css:jf,onClick:Sm,children:"+ Add Department"})]}),f("div",{css:gw(e),children:[s("div",{css:vw(e),children:s(Ei,{})}),f("div",{children:[s("p",{css:ww(e),children:"Total Departments"}),s("p",{css:yw(e),children:v?"...":c.length})]})]}),f("div",{css:Sw,children:[f("div",{css:Cw,children:[s("h2",{css:bw,children:"All Departments"}),f("div",{css:kw(e),children:[s(oi,{}),s("input",{type:"text",placeholder:"Search departments...",value:w,onChange:u=>k(u.target.value)})]})]}),f("table",{css:ci(e),children:[s("thead",{children:f("tr",{children:[s("th",{css:Y(e),children:"Code"}),s("th",{css:Y(e),children:"Name"}),s("th",{css:Y(e),children:"Description"}),s("th",{css:Y(e),children:"Actions"})]})}),s("tbody",{children:v?s("tr",{children:s("td",{css:F(e),colSpan:4,children:"Loading..."})}):Au.length===0?s("tr",{children:s("td",{css:F(e),colSpan:4,children:"No departments found."})}):Au.map(u=>f("tr",{children:[s("td",{css:F(e),children:u.code}),s("td",{css:F(e),children:u.name}),s("td",{css:F(e),children:u.description||"—"}),s("td",{css:F(e),children:f("div",{css:ui,children:[s("button",{type:"button",css:rr(e),onClick:()=>Cm(u),title:"Edit",children:s(En,{})}),s("button",{type:"button",css:di(e),onClick:()=>km(u.id),title:"Delete",children:s(li,{})})]})})]},u.id))})]})]})]}),o==="calendar"&&f(we,{children:[s("h1",{css:Lf,children:"Calendar"}),s("p",{css:Pf,children:"This is the calendar page. View and manage academic calendar, deadlines, and events here."})]})]})})]}),O&&s("div",{css:fi,onClick:Zr,children:f("div",{css:pi(e),onClick:u=>u.stopPropagation(),children:[f("div",{css:hi(e),children:[s("h3",{css:mi(e),children:H?"Edit Student":"Add Student"}),s("button",{type:"button",css:gi(e),onClick:Zr,"aria-label":"Close",children:s(Xt,{})})]}),f("div",{css:vi,children:[f("div",{css:le,children:[s("label",{css:oe(e),children:"Full Name *"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. Ava Thomas",value:Be.full_name,onChange:u=>T(E=>({...E,full_name:u.target.value}))})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Email *"}),s("input",{type:"email",css:ue(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:Be.email,onChange:u=>T(E=>({...E,email:u.target.value}))})]}),!H&&f("div",{css:le,children:[s("label",{css:oe(e),children:"Password *"}),s("input",{type:"password",css:ue(e),placeholder:"e.g. student123",value:Be.password,onChange:u=>T(E=>({...E,password:u.target.value}))})]}),f("div",{css:le,children:[f("label",{css:oe(e),children:["Student ID ",H?"":"*"]}),s("input",{type:"text",css:ue(e),placeholder:"e.g. STU2024008",value:Be.student_id,onChange:u=>T(E=>({...E,student_id:u.target.value})),readOnly:!!H})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Department"}),f("select",{css:ue(e),value:Be.department,onChange:u=>T(E=>({...E,department:u.target.value})),children:[s("option",{value:"",children:"Select department"}),Q.map(u=>s("option",{value:u.name,children:u.name},u.id))]})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Degree"}),f("select",{css:ue(e),value:Be.degree,onChange:u=>T(E=>({...E,degree:u.target.value})),children:[s("option",{value:"",children:"Select degree"}),us.map(u=>s("option",{value:u.code,children:u.name},u.id))]})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Year"}),f("select",{css:ue(e),value:Be.year,onChange:u=>T(E=>({...E,year:u.target.value})),children:[s("option",{value:"",children:"Select year"}),xm.map(u=>s("option",{value:u,children:u},u))]})]})]}),f("div",{css:yi(e),children:[s("button",{type:"button",css:wi(e),onClick:Zr,children:"Cancel"}),s("button",{type:"button",css:xi,onClick:ym,disabled:D,children:D?"Saving...":H?"Save Changes":"Add Student"})]})]})}),q0&&s("div",{css:fi,onClick:Ur,children:f("div",{css:pi(e),onClick:u=>u.stopPropagation(),children:[f("div",{css:hi(e),children:[s("h3",{css:mi(e),children:Zn?"Edit Lecturer":"Add Lecturer"}),s("button",{type:"button",css:gi(e),onClick:Ur,"aria-label":"Close",children:s(Xt,{})})]}),f("div",{css:vi,children:[f("div",{css:le,children:[s("label",{css:oe(e),children:"Full Name *"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. Dr. Sarah Johnson",value:Fr.full_name,onChange:u=>Jn(E=>({...E,full_name:u.target.value}))})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Email *"}),s("input",{type:"email",css:ue(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:Fr.email,onChange:u=>Jn(E=>({...E,email:u.target.value}))})]}),f("div",{css:le,children:[f("label",{css:oe(e),children:["Lecturer ID ",Zn?"":"*"]}),s("input",{type:"text",css:ue(e),placeholder:"e.g. LEC001",value:Fr.lecturer_id,onChange:u=>Jn(E=>({...E,lecturer_id:u.target.value})),readOnly:!!Zn})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Department"}),f("select",{css:ue(e),value:Fr.department,onChange:u=>Jn(E=>({...E,department:u.target.value})),children:[s("option",{value:"",children:"Select department"}),Q.map(u=>s("option",{value:u.name,children:u.name},u.id))]})]})]}),f("div",{css:yi(e),children:[s("button",{type:"button",css:wi(e),onClick:Ur,children:"Cancel"}),s("button",{type:"button",css:xi,onClick:tm,disabled:Cu,children:Cu?"Saving...":Zn?"Update Lecturer":"Add Lecturer"})]})]})}),im&&s("div",{css:fi,onClick:Vr,children:f("div",{css:pi(e),onClick:u=>u.stopPropagation(),children:[f("div",{css:hi(e),children:[s("h3",{css:mi(e),children:Wr?"Edit Course":"Add Course"}),s("button",{type:"button",css:gi(e),onClick:Vr,"aria-label":"Close",children:s(Xt,{})})]}),f("div",{css:vi,children:[f("div",{css:le,children:[s("label",{css:oe(e),children:"Course Code *"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. CS201",value:Kt.course_code,onChange:u=>vn(E=>({...E,course_code:u.target.value})),readOnly:!!Wr})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Course Name *"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. Data Structures and Algorithms",value:Kt.course_name,onChange:u=>vn(E=>({...E,course_name:u.target.value}))})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Department"}),f("select",{css:ue(e),value:Kt.department,onChange:u=>vn(E=>({...E,department:u.target.value})),children:[s("option",{value:"",children:"Select department"}),Q.map(u=>s("option",{value:u.name,children:u.name},u.id))]})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Lecturer"}),f("select",{css:ue(e),value:Kt.lecturer_id,onChange:u=>vn(E=>({...E,lecturer_id:u.target.value})),children:[s("option",{value:"",children:"Select lecturer"}),Vt.filter(u=>!Kt.department||(u.department||"")===Kt.department).map(u=>s("option",{value:u.lecturer_id,children:u.full_name},u.id))]})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Credits"}),s("input",{type:"number",css:ue(e),placeholder:"e.g. 4",value:Kt.credits,onChange:u=>vn(E=>({...E,credits:Number(u.target.value)||0})),min:0})]})]}),f("div",{css:yi(e),children:[s("button",{type:"button",css:wi(e),onClick:Vr,children:"Cancel"}),s("button",{type:"button",css:xi,onClick:sm,disabled:Lu,children:Lu?"Saving...":Wr?"Update Course":"Add Course"})]})]})}),dm&&s("div",{css:fi,onClick:Yr,children:f("div",{css:pi(e),onClick:u=>u.stopPropagation(),children:[f("div",{css:hi(e),children:[s("h3",{css:mi(e),children:gl?"Edit Degree":"Add Degree"}),s("button",{type:"button",css:gi(e),onClick:Yr,"aria-label":"Close",children:s(Xt,{})})]}),f("div",{css:vi,children:[f("div",{css:le,children:[s("label",{css:oe(e),children:"Code *"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. CS",value:Qr.code,onChange:u=>qn(E=>({...E,code:u.target.value}))})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Name *"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. BSc Computer Science",value:Qr.name,onChange:u=>qn(E=>({...E,name:u.target.value}))})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Department"}),f("select",{css:ue(e),value:Qr.department,onChange:u=>qn(E=>({...E,department:u.target.value})),children:[s("option",{value:"",children:"Select department"}),Q.map(u=>s("option",{value:u.name,children:u.name},u.id))]})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Description"}),s("textarea",{css:Rf(e),placeholder:"Optional description",value:Qr.description,onChange:u=>qn(E=>({...E,description:u.target.value}))})]})]}),f("div",{css:yi(e),children:[s("button",{type:"button",css:wi(e),onClick:Yr,children:"Cancel"}),s("button",{type:"button",css:xi,onClick:hm,disabled:ju,children:ju?"Saving...":gl?"Update Degree":"Add Degree"})]})]})}),S&&s("div",{css:fi,onClick:Jr,children:f("div",{css:pi(e),onClick:u=>u.stopPropagation(),children:[f("div",{css:hi(e),children:[s("h3",{css:mi(e),children:P?"Edit Department":"Add New Department"}),s("button",{type:"button",css:gi(e),onClick:Jr,"aria-label":"Close",children:s(Xt,{})})]}),f("div",{css:vi,children:[f("div",{css:le,children:[s("label",{css:oe(e),children:"Department Name"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. Newcastle Business School",value:d.name,onChange:u=>y(E=>({...E,name:u.target.value}))})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Department Code"}),s("input",{type:"text",css:ue(e),placeholder:"e.g. NBS",value:d.code,onChange:u=>y(E=>({...E,code:u.target.value}))})]}),f("div",{css:le,children:[s("label",{css:oe(e),children:"Description"}),s("textarea",{css:Rf(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:d.description,onChange:u=>y(E=>({...E,description:u.target.value}))})]})]}),f("div",{css:yi(e),children:[s("button",{type:"button",css:wi(e),onClick:Jr,children:"Cancel"}),s("button",{type:"button",css:xi,onClick:bm,disabled:b,children:b?"Saving...":P?"Update Department":"Add Department"})]})]})})]})}const Lw="/strack",Df="strack_dark";function Pw(){const[e,t]=x.useState(()=>{try{return localStorage.getItem(Df)==="true"}catch{return!1}});x.useEffect(()=>{try{localStorage.setItem(Df,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return ve.jsx(Xv,{basename:Lw,children:ve.jsxs(Zv,{children:[ve.jsx(nr,{path:"/",element:ve.jsx(x5,{darkMode:e,onToggleDarkMode:n})}),ve.jsx(nr,{path:"/dashboard",element:ve.jsx(Fy,{darkMode:e,onToggleDarkMode:n})}),ve.jsx(nr,{path:"/lecturer",element:ve.jsx(ew,{darkMode:e,onToggleDarkMode:n})}),ve.jsx(nr,{path:"/admin",element:ve.jsx(_w,{darkMode:e,onToggleDarkMode:n})}),ve.jsx(nr,{path:"*",element:ve.jsx(Kv,{to:"/",replace:!0})})]})})}qs.createRoot(document.getElementById("root")).render(ve.jsx(It.StrictMode,{children:ve.jsx(Pw,{})}));
