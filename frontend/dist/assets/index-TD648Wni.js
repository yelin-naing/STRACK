function q1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function M1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pm={exports:{}},Ql={},hm={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),ey=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),ry=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),sy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ly=Symbol.for("react.suspense"),ay=Symbol.for("react.memo"),cy=Symbol.for("react.lazy"),Wf=Symbol.iterator;function uy(e){return e===null||typeof e!="object"?null:(e=Wf&&e[Wf]||e["@@iterator"],typeof e=="function"?e:null)}var mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gm=Object.assign,ym={};function Ei(e,t,n){this.props=e,this.context=t,this.refs=ym,this.updater=n||mm}Ei.prototype.isReactComponent={};Ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vm(){}vm.prototype=Ei.prototype;function td(e,t,n){this.props=e,this.context=t,this.refs=ym,this.updater=n||mm}var nd=td.prototype=new vm;nd.constructor=td;gm(nd,Ei.prototype);nd.isPureReactComponent=!0;var Vf=Array.isArray,wm=Object.prototype.hasOwnProperty,rd={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)wm.call(t,r)&&!xm.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),m=0;m<u;m++)d[m]=arguments[m+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Ks,type:e,key:o,ref:l,props:i,_owner:rd.current}}function dy(e,t){return{$$typeof:Ks,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function id(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ks}function fy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yf=/\/+/g;function za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fy(""+e.key):t.toString(36)}function Jo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ks:case ey:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+za(l,0):r,Vf(i)?(n="",e!=null&&(n=e.replace(Yf,"$&/")+"/"),Jo(i,t,n,"",function(m){return m})):i!=null&&(id(i)&&(i=dy(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Yf,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Vf(e))for(var u=0;u<e.length;u++){o=e[u];var d=r+za(o,u);l+=Jo(o,t,n,d,i)}else if(d=uy(e),typeof d=="function")for(e=d.call(e),u=0;!(o=e.next()).done;)o=o.value,d=r+za(o,u++),l+=Jo(o,t,n,d,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ao(e,t,n){if(e==null)return e;var r=[],i=0;return Jo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function py(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},Go={transition:null},hy={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Go,ReactCurrentOwner:rd};function Sm(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ao,forEach:function(e,t,n){ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!id(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=Ei;ee.Fragment=ty;ee.Profiler=ry;ee.PureComponent=td;ee.StrictMode=ny;ee.Suspense=ly;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;ee.act=Sm;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gm({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=rd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)wm.call(t,d)&&!xm.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var m=0;m<d;m++)u[m]=arguments[m+2];r.children=u}return{$$typeof:Ks,type:e.type,key:i,ref:o,props:r,_owner:l}};ee.createContext=function(e){return e={$$typeof:sy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iy,_context:e},e.Consumer=e};ee.createElement=bm;ee.createFactory=function(e){var t=bm.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:oy,render:e}};ee.isValidElement=id;ee.lazy=function(e){return{$$typeof:cy,_payload:{_status:-1,_result:e},_init:py}};ee.memo=function(e,t){return{$$typeof:ay,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};ee.unstable_act=Sm;ee.useCallback=function(e,t){return st.current.useCallback(e,t)};ee.useContext=function(e){return st.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return st.current.useDeferredValue(e)};ee.useEffect=function(e,t){return st.current.useEffect(e,t)};ee.useId=function(){return st.current.useId()};ee.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return st.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};ee.useRef=function(e){return st.current.useRef(e)};ee.useState=function(e){return st.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return st.current.useTransition()};ee.version="18.3.1";hm.exports=ee;var h=hm.exports;const hn=M1(h),eu=q1({__proto__:null,default:hn},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=h,gy=Symbol.for("react.element"),yy=Symbol.for("react.fragment"),vy=Object.prototype.hasOwnProperty,wy=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xy={key:!0,ref:!0,__self:!0,__source:!0};function Cm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)vy.call(t,r)&&!xy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:gy,type:e,key:o,ref:l,props:i,_owner:wy.current}}Ql.Fragment=yy;Ql.jsx=Cm;Ql.jsxs=Cm;pm.exports=Ql;var Ie=pm.exports,tu={},$m={exports:{}},St={},_m={exports:{}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,D){var B=S.length;S.push(D);e:for(;0<B;){var U=B-1>>>1,E=S[U];if(0<i(E,D))S[U]=D,S[B]=E,B=U;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var D=S[0],B=S.pop();if(B!==D){S[0]=B;e:for(var U=0,E=S.length,Q=E>>>1;U<Q;){var te=2*(U+1)-1,ne=S[te],oe=te+1,ce=S[oe];if(0>i(ne,B))oe<E&&0>i(ce,ne)?(S[U]=ce,S[oe]=B,U=oe):(S[U]=ne,S[te]=B,U=te);else if(oe<E&&0>i(ce,B))S[U]=ce,S[oe]=B,U=oe;else break e}}return D}function i(S,D){var B=S.sortIndex-D.sortIndex;return B!==0?B:S.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],m=[],y=1,v=null,w=3,_=!1,C=!1,b=!1,z=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(S){for(var D=n(m);D!==null;){if(D.callback===null)r(m);else if(D.startTime<=S)r(m),D.sortIndex=D.expirationTime,t(d,D);else break;D=n(m)}}function k(S){if(b=!1,x(S),!C)if(n(d)!==null)C=!0,R($);else{var D=n(m);D!==null&&K(k,D.startTime-S)}}function $(S,D){C=!1,b&&(b=!1,g(F),F=-1),_=!0;var B=w;try{for(x(D),v=n(d);v!==null&&(!(v.expirationTime>D)||S&&!G());){var U=v.callback;if(typeof U=="function"){v.callback=null,w=v.priorityLevel;var E=U(v.expirationTime<=D);D=e.unstable_now(),typeof E=="function"?v.callback=E:v===n(d)&&r(d),x(D)}else r(d);v=n(d)}if(v!==null)var Q=!0;else{var te=n(m);te!==null&&K(k,te.startTime-D),Q=!1}return Q}finally{v=null,w=B,_=!1}}var N=!1,P=null,F=-1,W=5,V=-1;function G(){return!(e.unstable_now()-V<W)}function A(){if(P!==null){var S=e.unstable_now();V=S;var D=!0;try{D=P(!0,S)}finally{D?O():(N=!1,P=null)}}else N=!1}var O;if(typeof f=="function")O=function(){f(A)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Z=j.port2;j.port1.onmessage=A,O=function(){Z.postMessage(null)}}else O=function(){z(A,0)};function R(S){P=S,N||(N=!0,O())}function K(S,D){F=z(function(){S(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){C||_||(C=!0,R($))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(S){switch(w){case 1:case 2:case 3:var D=3;break;default:D=w}var B=w;w=D;try{return S()}finally{w=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,D){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var B=w;w=S;try{return D()}finally{w=B}},e.unstable_scheduleCallback=function(S,D,B){var U=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?U+B:U):B=U,S){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=B+E,S={id:y++,callback:D,priorityLevel:S,startTime:B,expirationTime:E,sortIndex:-1},B>U?(S.sortIndex=B,t(m,S),n(d)===null&&S===n(m)&&(b?(g(F),F=-1):b=!0,K(k,B-U))):(S.sortIndex=E,t(d,S),C||_||(C=!0,R($))),S},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(S){var D=w;return function(){var B=w;w=D;try{return S.apply(this,arguments)}finally{w=B}}}})(Em);_m.exports=Em;var by=_m.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=h,bt=by;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,Ss={};function kr(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(Ss[e]=t,e=0;e<t.length;e++)km.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,Cy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qf={},Kf={};function $y(e){return nu.call(Kf,e)?!0:nu.call(Qf,e)?!1:Cy.test(e)?Kf[e]=!0:(Qf[e]=!0,!1)}function _y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ey(e,t,n,r){if(t===null||typeof t>"u"||_y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function od(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sd,od);Ge[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sd,od);Ge[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sd,od);Ge[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function ld(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ey(t,n,i,r)&&(n=null),r||i===null?$y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bn=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),Zf=Symbol.iterator;function Hi(e){return e===null||typeof e!="object"?null:(e=Zf&&e[Zf]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Pa;function os(e){if(Pa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pa=t&&t[1]||""}return`
`+Pa+e}var Da=!1;function Ta(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var i=m.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?os(e):""}function ky(e){switch(e.tag){case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function ou(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Xr:return"Portal";case ru:return"Profiler";case ad:return"StrictMode";case iu:return"Suspense";case su:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nm:return(e.displayName||"Context")+".Consumer";case Lm:return(e._context.displayName||"Context")+".Provider";case cd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ud:return t=e.displayName||null,t!==null?t:ou(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return ou(e(t))}catch{}}return null}function Ly(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(t);case 8:return t===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ny(e){var t=Pm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){e._valueTracker||(e._valueTracker=Ny(e))}function Dm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lu(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tm(e,t){t=t.checked,t!=null&&ld(e,"checked",t,!1)}function au(e,t){Tm(e,t);var n=Yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&cu(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cu(e,t,n){(t!=="number"||ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ls=Array.isArray;function ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function uu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ls(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yn(n)}}function jm(e,t){var n=Yn(t.value),r=Yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Om(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function du(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Om(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,Rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zy=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(e){zy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ds[t]=ds[e]})});function Am(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ds.hasOwnProperty(e)&&ds[e]?(""+t).trim():t+"px"}function Im(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Am(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Py=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fu(e,t){if(t){if(Py[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function pu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function dd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mu=null,ui=null,di=null;function Mf(e){if(e=Gs(e)){if(typeof mu!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Xl(t),mu(e.stateNode,e.type,t))}}function Bm(e){ui?di?di.push(e):di=[e]:ui=e}function Fm(){if(ui){var e=ui,t=di;if(di=ui=null,Mf(e),t)for(e=0;e<t.length;e++)Mf(t[e])}}function Um(e,t){return e(t)}function Hm(){}var ja=!1;function Wm(e,t,n){if(ja)return e(t,n);ja=!0;try{return Um(e,t,n)}finally{ja=!1,(ui!==null||di!==null)&&(Hm(),Fm())}}function $s(e,t){var n=e.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var gu=!1;if(yn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{gu=!1}function Dy(e,t,n,r,i,o,l,u,d){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var fs=!1,dl=null,fl=!1,yu=null,Ty={onError:function(e){fs=!0,dl=e}};function jy(e,t,n,r,i,o,l,u,d){fs=!1,dl=null,Dy.apply(Ty,arguments)}function Oy(e,t,n,r,i,o,l,u,d){if(jy.apply(this,arguments),fs){if(fs){var m=dl;fs=!1,dl=null}else throw Error(I(198));fl||(fl=!0,yu=m)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ep(e){if(Lr(e)!==e)throw Error(I(188))}function Ry(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ep(i),e;if(o===r)return ep(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Ym(e){return e=Ry(e),e!==null?Qm(e):null}function Qm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qm(e);if(t!==null)return t;e=e.sibling}return null}var Km=bt.unstable_scheduleCallback,tp=bt.unstable_cancelCallback,Ay=bt.unstable_shouldYield,Iy=bt.unstable_requestPaint,ze=bt.unstable_now,By=bt.unstable_getCurrentPriorityLevel,fd=bt.unstable_ImmediatePriority,Zm=bt.unstable_UserBlockingPriority,pl=bt.unstable_NormalPriority,Fy=bt.unstable_LowPriority,Jm=bt.unstable_IdlePriority,Kl=null,en=null;function Uy(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Vy,Hy=Math.log,Wy=Math.LN2;function Vy(e){return e>>>=0,e===0?32:31-(Hy(e)/Wy|0)|0}var po=64,ho=4194304;function as(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=as(u):(o&=l,o!==0&&(r=as(o)))}else l=n&~i,l!==0?r=as(l):o!==0&&(r=as(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Yy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ht(o),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Yy(u,t)):d<=t&&(e.expiredLanes|=u),o&=~u}}function vu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gm(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function Oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function Ky(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Xm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qm,hd,Mm,e0,t0,wu=!1,mo=[],Rn=null,An=null,In=null,_s=new Map,Es=new Map,Nn=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":_s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(t.pointerId)}}function Vi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gs(t),t!==null&&hd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jy(e,t,n,r,i){switch(t){case"focusin":return Rn=Vi(Rn,e,t,n,r,i),!0;case"dragenter":return An=Vi(An,e,t,n,r,i),!0;case"mouseover":return In=Vi(In,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _s.set(o,Vi(_s.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Es.set(o,Vi(Es.get(o)||null,e,t,n,r,i)),!0}return!1}function n0(e){var t=ar(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=Vm(n),t!==null){e.blockedOn=t,t0(e.priority,function(){Mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hu=r,n.target.dispatchEvent(r),hu=null}else return t=Gs(n),t!==null&&hd(t),e.blockedOn=n,!1;t.shift()}return!0}function rp(e,t,n){Xo(e)&&n.delete(t)}function Gy(){wu=!1,Rn!==null&&Xo(Rn)&&(Rn=null),An!==null&&Xo(An)&&(An=null),In!==null&&Xo(In)&&(In=null),_s.forEach(rp),Es.forEach(rp)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,Gy)))}function ks(e){function t(i){return Yi(i,e)}if(0<mo.length){Yi(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Yi(Rn,e),An!==null&&Yi(An,e),In!==null&&Yi(In,e),_s.forEach(t),Es.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)n0(n),n.blockedOn===null&&Nn.shift()}var fi=bn.ReactCurrentBatchConfig,ml=!0;function Xy(e,t,n,r){var i=he,o=fi.transition;fi.transition=null;try{he=1,md(e,t,n,r)}finally{he=i,fi.transition=o}}function qy(e,t,n,r){var i=he,o=fi.transition;fi.transition=null;try{he=4,md(e,t,n,r)}finally{he=i,fi.transition=o}}function md(e,t,n,r){if(ml){var i=xu(e,t,n,r);if(i===null)Ya(e,t,r,gl,n),np(e,r);else if(Jy(i,e,t,n,r))r.stopPropagation();else if(np(e,r),t&4&&-1<Zy.indexOf(e)){for(;i!==null;){var o=Gs(i);if(o!==null&&qm(o),o=xu(e,t,n,r),o===null&&Ya(e,t,r,gl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ya(e,t,r,null,n)}}var gl=null;function xu(e,t,n,r){if(gl=null,e=dd(r),e=ar(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gl=e,null}function r0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case fd:return 1;case Zm:return 4;case pl:case Fy:return 16;case Jm:return 536870912;default:return 16}default:return 16}}var Dn=null,gd=null,qo=null;function i0(){if(qo)return qo;var e,t=gd,n=t.length,r,i="value"in Dn?Dn.value:Dn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return qo=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function ip(){return!1}function Ct(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?go:ip,this.isPropagationStopped=ip,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=Ct(ki),Js=Ee({},ki,{view:0,detail:0}),My=Ct(Js),Ra,Aa,Qi,Zl=Ee({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(Ra=e.screenX-Qi.screenX,Aa=e.screenY-Qi.screenY):Aa=Ra=0,Qi=e),Ra)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),sp=Ct(Zl),e2=Ee({},Zl,{dataTransfer:0}),t2=Ct(e2),n2=Ee({},Js,{relatedTarget:0}),Ia=Ct(n2),r2=Ee({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),i2=Ct(r2),s2=Ee({},ki,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o2=Ct(s2),l2=Ee({},ki,{data:0}),op=Ct(l2),a2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u2[e])?!!t[e]:!1}function vd(){return d2}var f2=Ee({},Js,{key:function(e){if(e.key){var t=a2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p2=Ct(f2),h2=Ee({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Ct(h2),m2=Ee({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),g2=Ct(m2),y2=Ee({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),v2=Ct(y2),w2=Ee({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x2=Ct(w2),b2=[9,13,27,32],wd=yn&&"CompositionEvent"in window,ps=null;yn&&"documentMode"in document&&(ps=document.documentMode);var S2=yn&&"TextEvent"in window&&!ps,s0=yn&&(!wd||ps&&8<ps&&11>=ps),ap=" ",cp=!1;function o0(e,t){switch(e){case"keyup":return b2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function C2(e,t){switch(e){case"compositionend":return l0(t);case"keypress":return t.which!==32?null:(cp=!0,ap);case"textInput":return e=t.data,e===ap&&cp?null:e;default:return null}}function $2(e,t){if(Mr)return e==="compositionend"||!wd&&o0(e,t)?(e=i0(),qo=gd=Dn=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return s0&&t.locale!=="ko"?null:t.data;default:return null}}var _2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_2[e.type]:t==="textarea"}function a0(e,t,n,r){Bm(r),t=yl(t,"onChange"),0<t.length&&(n=new yd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hs=null,Ls=null;function E2(e){w0(e,0)}function Jl(e){var t=ni(e);if(Dm(t))return e}function k2(e,t){if(e==="change")return t}var c0=!1;if(yn){var Ba;if(yn){var Fa="oninput"in document;if(!Fa){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Fa=typeof dp.oninput=="function"}Ba=Fa}else Ba=!1;c0=Ba&&(!document.documentMode||9<document.documentMode)}function fp(){hs&&(hs.detachEvent("onpropertychange",u0),Ls=hs=null)}function u0(e){if(e.propertyName==="value"&&Jl(Ls)){var t=[];a0(t,Ls,e,dd(e)),Wm(E2,t)}}function L2(e,t,n){e==="focusin"?(fp(),hs=t,Ls=n,hs.attachEvent("onpropertychange",u0)):e==="focusout"&&fp()}function N2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(Ls)}function z2(e,t){if(e==="click")return Jl(t)}function P2(e,t){if(e==="input"||e==="change")return Jl(t)}function D2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:D2;function Ns(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nu.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,t){var n=pp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function d0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?d0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function f0(){for(var e=window,t=ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ul(e.document)}return t}function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function T2(e){var t=f0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&d0(n.ownerDocument.documentElement,n)){if(r!==null&&xd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hp(n,o);var l=hp(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j2=yn&&"documentMode"in document&&11>=document.documentMode,ei=null,bu=null,ms=null,Su=!1;function mp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||ei==null||ei!==ul(r)||(r=ei,"selectionStart"in r&&xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ms&&Ns(ms,r)||(ms=r,r=yl(bu,"onSelect"),0<r.length&&(t=new yd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ti={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Ua={},p0={};yn&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Gl(e){if(Ua[e])return Ua[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in p0)return Ua[e]=t[n];return e}var h0=Gl("animationend"),m0=Gl("animationiteration"),g0=Gl("animationstart"),y0=Gl("transitionend"),v0=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){v0.set(e,t),kr(t,[e])}for(var Ha=0;Ha<gp.length;Ha++){var Wa=gp[Ha],O2=Wa.toLowerCase(),R2=Wa[0].toUpperCase()+Wa.slice(1);Kn(O2,"on"+R2)}Kn(h0,"onAnimationEnd");Kn(m0,"onAnimationIteration");Kn(g0,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(y0,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A2=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function yp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Oy(r,t,void 0,e),e.currentTarget=null}function w0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,m=u.currentTarget;if(u=u.listener,d!==o&&i.isPropagationStopped())break e;yp(i,u,m),o=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,m=u.currentTarget,u=u.listener,d!==o&&i.isPropagationStopped())break e;yp(i,u,m),o=d}}}if(fl)throw e=yu,fl=!1,yu=null,e}function we(e,t){var n=t[ku];n===void 0&&(n=t[ku]=new Set);var r=e+"__bubble";n.has(r)||(x0(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),x0(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function zs(e){if(!e[vo]){e[vo]=!0,km.forEach(function(n){n!=="selectionchange"&&(A2.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,Va("selectionchange",!1,t))}}function x0(e,t,n,r){switch(r0(t)){case 1:var i=Xy;break;case 4:i=qy;break;default:i=md}n=i.bind(null,t,n,e),i=void 0,!gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ya(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=ar(u),l===null)return;if(d=l.tag,d===5||d===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Wm(function(){var m=o,y=dd(n),v=[];e:{var w=v0.get(e);if(w!==void 0){var _=yd,C=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":_=p2;break;case"focusin":C="focus",_=Ia;break;case"focusout":C="blur",_=Ia;break;case"beforeblur":case"afterblur":_=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=t2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=g2;break;case h0:case m0:case g0:_=i2;break;case y0:_=v2;break;case"scroll":_=My;break;case"wheel":_=x2;break;case"copy":case"cut":case"paste":_=o2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=lp}var b=(t&4)!==0,z=!b&&e==="scroll",g=b?w!==null?w+"Capture":null:w;b=[];for(var f=m,x;f!==null;){x=f;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,g!==null&&(k=$s(f,g),k!=null&&b.push(Ps(f,k,x)))),z)break;f=f.return}0<b.length&&(w=new _(w,C,null,n,y),v.push({event:w,listeners:b}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",w&&n!==hu&&(C=n.relatedTarget||n.fromElement)&&(ar(C)||C[vn]))break e;if((_||w)&&(w=y.window===y?y:(w=y.ownerDocument)?w.defaultView||w.parentWindow:window,_?(C=n.relatedTarget||n.toElement,_=m,C=C?ar(C):null,C!==null&&(z=Lr(C),C!==z||C.tag!==5&&C.tag!==6)&&(C=null)):(_=null,C=m),_!==C)){if(b=sp,k="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=lp,k="onPointerLeave",g="onPointerEnter",f="pointer"),z=_==null?w:ni(_),x=C==null?w:ni(C),w=new b(k,f+"leave",_,n,y),w.target=z,w.relatedTarget=x,k=null,ar(y)===m&&(b=new b(g,f+"enter",C,n,y),b.target=x,b.relatedTarget=z,k=b),z=k,_&&C)t:{for(b=_,g=C,f=0,x=b;x;x=Or(x))f++;for(x=0,k=g;k;k=Or(k))x++;for(;0<f-x;)b=Or(b),f--;for(;0<x-f;)g=Or(g),x--;for(;f--;){if(b===g||g!==null&&b===g.alternate)break t;b=Or(b),g=Or(g)}b=null}else b=null;_!==null&&vp(v,w,_,b,!1),C!==null&&z!==null&&vp(v,z,C,b,!0)}}e:{if(w=m?ni(m):window,_=w.nodeName&&w.nodeName.toLowerCase(),_==="select"||_==="input"&&w.type==="file")var $=k2;else if(up(w))if(c0)$=P2;else{$=N2;var N=L2}else(_=w.nodeName)&&_.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&($=z2);if($&&($=$(e,m))){a0(v,$,n,y);break e}N&&N(e,w,m),e==="focusout"&&(N=w._wrapperState)&&N.controlled&&w.type==="number"&&cu(w,"number",w.value)}switch(N=m?ni(m):window,e){case"focusin":(up(N)||N.contentEditable==="true")&&(ei=N,bu=m,ms=null);break;case"focusout":ms=bu=ei=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,mp(v,n,y);break;case"selectionchange":if(j2)break;case"keydown":case"keyup":mp(v,n,y)}var P;if(wd)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Mr?o0(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(s0&&n.locale!=="ko"&&(Mr||F!=="onCompositionStart"?F==="onCompositionEnd"&&Mr&&(P=i0()):(Dn=y,gd="value"in Dn?Dn.value:Dn.textContent,Mr=!0)),N=yl(m,F),0<N.length&&(F=new op(F,e,null,n,y),v.push({event:F,listeners:N}),P?F.data=P:(P=l0(n),P!==null&&(F.data=P)))),(P=S2?C2(e,n):$2(e,n))&&(m=yl(m,"onBeforeInput"),0<m.length&&(y=new op("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:m}),y.data=P))}w0(v,t)})}function Ps(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$s(e,n),o!=null&&r.unshift(Ps(e,o,i)),o=$s(e,t),o!=null&&r.push(Ps(e,o,i))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vp(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,m=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&m!==null&&(u=m,i?(d=$s(n,o),d!=null&&l.unshift(Ps(n,d,u))):i||(d=$s(n,o),d!=null&&l.push(Ps(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var I2=/\r\n?/g,B2=/\u0000|\uFFFD/g;function wp(e){return(typeof e=="string"?e:""+e).replace(I2,`
`).replace(B2,"")}function wo(e,t,n){if(t=wp(t),wp(e)!==t&&n)throw Error(I(425))}function vl(){}var Cu=null,$u=null;function _u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,U2=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(e){return xp.resolve(null).then(e).catch(H2)}:Eu;function H2(e){setTimeout(function(){throw e})}function Qa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ks(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ks(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Li,Ds="__reactProps$"+Li,vn="__reactContainer$"+Li,ku="__reactEvents$"+Li,W2="__reactListeners$"+Li,V2="__reactHandles$"+Li;function ar(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vn]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bp(e);e!==null;){if(n=e[Mt])return n;e=bp(e)}return t}e=n,n=e.parentNode}return null}function Gs(e){return e=e[Mt]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Xl(e){return e[Ds]||null}var Lu=[],ri=-1;function Zn(e){return{current:e}}function xe(e){0>ri||(e.current=Lu[ri],Lu[ri]=null,ri--)}function ge(e,t){ri++,Lu[ri]=e.current,e.current=t}var Qn={},nt=Zn(Qn),ft=Zn(!1),wr=Qn;function yi(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function wl(){xe(ft),xe(nt)}function Sp(e,t,n){if(nt.current!==Qn)throw Error(I(168));ge(nt,t),ge(ft,n)}function b0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Ly(e)||"Unknown",i));return Ee({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,wr=nt.current,ge(nt,e),ge(ft,ft.current),!0}function Cp(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=b0(e,t,wr),r.__reactInternalMemoizedMergedChildContext=e,xe(ft),xe(nt),ge(nt,e)):xe(ft),ge(ft,n)}var dn=null,ql=!1,Ka=!1;function S0(e){dn===null?dn=[e]:dn.push(e)}function Y2(e){ql=!0,S0(e)}function Jn(){if(!Ka&&dn!==null){Ka=!0;var e=0,t=he;try{var n=dn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dn=null,ql=!1}catch(i){throw dn!==null&&(dn=dn.slice(e+1)),Km(fd,Jn),i}finally{he=t,Ka=!1}}return null}var ii=[],si=0,bl=null,Sl=0,Lt=[],Nt=0,xr=null,fn=1,pn="";function rr(e,t){ii[si++]=Sl,ii[si++]=bl,bl=e,Sl=t}function C0(e,t,n){Lt[Nt++]=fn,Lt[Nt++]=pn,Lt[Nt++]=xr,xr=e;var r=fn;e=pn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,fn=1<<32-Ht(t)+i|n<<i|r,pn=o+e}else fn=1<<o|n<<i|r,pn=e}function bd(e){e.return!==null&&(rr(e,1),C0(e,1,0))}function Sd(e){for(;e===bl;)bl=ii[--si],ii[si]=null,Sl=ii[--si],ii[si]=null;for(;e===xr;)xr=Lt[--Nt],Lt[Nt]=null,pn=Lt[--Nt],Lt[Nt]=null,fn=Lt[--Nt],Lt[Nt]=null}var wt=null,vt=null,Se=!1,It=null;function $0(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $p(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,vt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,wt=e,vt=null,!0):!1;default:return!1}}function Nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zu(e){if(Se){var t=vt;if(t){var n=t;if(!$p(e,t)){if(Nu(e))throw Error(I(418));t=Bn(n.nextSibling);var r=wt;t&&$p(e,t)?$0(r,n):(e.flags=e.flags&-4097|2,Se=!1,wt=e)}}else{if(Nu(e))throw Error(I(418));e.flags=e.flags&-4097|2,Se=!1,wt=e}}}function _p(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function xo(e){if(e!==wt)return!1;if(!Se)return _p(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_u(e.type,e.memoizedProps)),t&&(t=vt)){if(Nu(e))throw _0(),Error(I(418));for(;t;)$0(e,t),t=Bn(t.nextSibling)}if(_p(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=wt?Bn(e.stateNode.nextSibling):null;return!0}function _0(){for(var e=vt;e;)e=Bn(e.nextSibling)}function vi(){vt=wt=null,Se=!1}function Cd(e){It===null?It=[e]:It.push(e)}var Q2=bn.ReactCurrentBatchConfig;function Ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ep(e){var t=e._init;return t(e._payload)}function E0(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Wn(g,f),g.index=0,g.sibling=null,g}function o(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,f,x,k){return f===null||f.tag!==6?(f=ec(x,g.mode,k),f.return=g,f):(f=i(f,x),f.return=g,f)}function d(g,f,x,k){var $=x.type;return $===qr?y(g,f,x.props.children,k,x.key):f!==null&&(f.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===kn&&Ep($)===f.type)?(k=i(f,x.props),k.ref=Ki(g,f,x),k.return=g,k):(k=ol(x.type,x.key,x.props,null,g.mode,k),k.ref=Ki(g,f,x),k.return=g,k)}function m(g,f,x,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=tc(x,g.mode,k),f.return=g,f):(f=i(f,x.children||[]),f.return=g,f)}function y(g,f,x,k,$){return f===null||f.tag!==7?(f=yr(x,g.mode,k,$),f.return=g,f):(f=i(f,x),f.return=g,f)}function v(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ec(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case co:return x=ol(f.type,f.key,f.props,null,g.mode,x),x.ref=Ki(g,null,f),x.return=g,x;case Xr:return f=tc(f,g.mode,x),f.return=g,f;case kn:var k=f._init;return v(g,k(f._payload),x)}if(ls(f)||Hi(f))return f=yr(f,g.mode,x,null),f.return=g,f;bo(g,f)}return null}function w(g,f,x,k){var $=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return $!==null?null:u(g,f,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case co:return x.key===$?d(g,f,x,k):null;case Xr:return x.key===$?m(g,f,x,k):null;case kn:return $=x._init,w(g,f,$(x._payload),k)}if(ls(x)||Hi(x))return $!==null?null:y(g,f,x,k,null);bo(g,x)}return null}function _(g,f,x,k,$){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(x)||null,u(f,g,""+k,$);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case co:return g=g.get(k.key===null?x:k.key)||null,d(f,g,k,$);case Xr:return g=g.get(k.key===null?x:k.key)||null,m(f,g,k,$);case kn:var N=k._init;return _(g,f,x,N(k._payload),$)}if(ls(k)||Hi(k))return g=g.get(x)||null,y(f,g,k,$,null);bo(f,k)}return null}function C(g,f,x,k){for(var $=null,N=null,P=f,F=f=0,W=null;P!==null&&F<x.length;F++){P.index>F?(W=P,P=null):W=P.sibling;var V=w(g,P,x[F],k);if(V===null){P===null&&(P=W);break}e&&P&&V.alternate===null&&t(g,P),f=o(V,f,F),N===null?$=V:N.sibling=V,N=V,P=W}if(F===x.length)return n(g,P),Se&&rr(g,F),$;if(P===null){for(;F<x.length;F++)P=v(g,x[F],k),P!==null&&(f=o(P,f,F),N===null?$=P:N.sibling=P,N=P);return Se&&rr(g,F),$}for(P=r(g,P);F<x.length;F++)W=_(P,g,F,x[F],k),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?F:W.key),f=o(W,f,F),N===null?$=W:N.sibling=W,N=W);return e&&P.forEach(function(G){return t(g,G)}),Se&&rr(g,F),$}function b(g,f,x,k){var $=Hi(x);if(typeof $!="function")throw Error(I(150));if(x=$.call(x),x==null)throw Error(I(151));for(var N=$=null,P=f,F=f=0,W=null,V=x.next();P!==null&&!V.done;F++,V=x.next()){P.index>F?(W=P,P=null):W=P.sibling;var G=w(g,P,V.value,k);if(G===null){P===null&&(P=W);break}e&&P&&G.alternate===null&&t(g,P),f=o(G,f,F),N===null?$=G:N.sibling=G,N=G,P=W}if(V.done)return n(g,P),Se&&rr(g,F),$;if(P===null){for(;!V.done;F++,V=x.next())V=v(g,V.value,k),V!==null&&(f=o(V,f,F),N===null?$=V:N.sibling=V,N=V);return Se&&rr(g,F),$}for(P=r(g,P);!V.done;F++,V=x.next())V=_(P,g,F,V.value,k),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?F:V.key),f=o(V,f,F),N===null?$=V:N.sibling=V,N=V);return e&&P.forEach(function(A){return t(g,A)}),Se&&rr(g,F),$}function z(g,f,x,k){if(typeof x=="object"&&x!==null&&x.type===qr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case co:e:{for(var $=x.key,N=f;N!==null;){if(N.key===$){if($=x.type,$===qr){if(N.tag===7){n(g,N.sibling),f=i(N,x.props.children),f.return=g,g=f;break e}}else if(N.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===kn&&Ep($)===N.type){n(g,N.sibling),f=i(N,x.props),f.ref=Ki(g,N,x),f.return=g,g=f;break e}n(g,N);break}else t(g,N);N=N.sibling}x.type===qr?(f=yr(x.props.children,g.mode,k,x.key),f.return=g,g=f):(k=ol(x.type,x.key,x.props,null,g.mode,k),k.ref=Ki(g,f,x),k.return=g,g=k)}return l(g);case Xr:e:{for(N=x.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(g,f.sibling),f=i(f,x.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=tc(x,g.mode,k),f.return=g,g=f}return l(g);case kn:return N=x._init,z(g,f,N(x._payload),k)}if(ls(x))return C(g,f,x,k);if(Hi(x))return b(g,f,x,k);bo(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,x),f.return=g,g=f):(n(g,f),f=ec(x,g.mode,k),f.return=g,g=f),l(g)):n(g,f)}return z}var wi=E0(!0),k0=E0(!1),Cl=Zn(null),$l=null,oi=null,$d=null;function _d(){$d=oi=$l=null}function Ed(e){var t=Cl.current;xe(Cl),e._currentValue=t}function Pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pi(e,t){$l=e,$d=oi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if($d!==e)if(e={context:e,memoizedValue:t,next:null},oi===null){if($l===null)throw Error(I(308));oi=e,$l.dependencies={lanes:0,firstContext:e}}else oi=oi.next=e;return t}var cr=null;function kd(e){cr===null?cr=[e]:cr.push(e)}function L0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kd(t)):(n.next=i.next,i.next=n),t.interleaved=n,wn(e,r)}function wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function Ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wn(e,n)}return i=r.interleaved,i===null?(t.next=t,kd(r)):(t.next=i.next,i.next=t),r.interleaved=t,wn(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pd(e,n)}}function kp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _l(e,t,n,r){var i=e.updateQueue;Ln=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,m=d.next;d.next=null,l===null?o=m:l.next=m,l=d;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==l&&(u===null?y.firstBaseUpdate=m:u.next=m,y.lastBaseUpdate=d))}if(o!==null){var v=i.baseState;l=0,y=m=d=null,u=o;do{var w=u.lane,_=u.eventTime;if((r&w)===w){y!==null&&(y=y.next={eventTime:_,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var C=e,b=u;switch(w=t,_=n,b.tag){case 1:if(C=b.payload,typeof C=="function"){v=C.call(_,v,w);break e}v=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=b.payload,w=typeof C=="function"?C.call(_,v,w):C,w==null)break e;v=Ee({},v,w);break e;case 2:Ln=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[u]:w.push(u))}else _={eventTime:_,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(m=y=_,d=v):y=y.next=_,l|=w;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;w=u,u=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(y===null&&(d=v),i.baseState=d,i.firstBaseUpdate=m,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sr|=l,e.lanes=l,e.memoizedState=v}}function Lp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Xs={},tn=Zn(Xs),Ts=Zn(Xs),js=Zn(Xs);function ur(e){if(e===Xs)throw Error(I(174));return e}function Nd(e,t){switch(ge(js,t),ge(Ts,e),ge(tn,Xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:du(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=du(t,e)}xe(tn),ge(tn,t)}function xi(){xe(tn),xe(Ts),xe(js)}function z0(e){ur(js.current);var t=ur(tn.current),n=du(t,e.type);t!==n&&(ge(Ts,e),ge(tn,n))}function zd(e){Ts.current===e&&(xe(tn),xe(Ts))}var $e=Zn(0);function El(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function Pd(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var tl=bn.ReactCurrentDispatcher,Ja=bn.ReactCurrentBatchConfig,br=0,_e=null,Be=null,He=null,kl=!1,gs=!1,Os=0,K2=0;function Xe(){throw Error(I(321))}function Dd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Td(e,t,n,r,i,o){if(br=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.current=e===null||e.memoizedState===null?X2:q2,e=n(r,i),gs){o=0;do{if(gs=!1,Os=0,25<=o)throw Error(I(301));o+=1,He=Be=null,t.updateQueue=null,tl.current=M2,e=n(r,i)}while(gs)}if(tl.current=Ll,t=Be!==null&&Be.next!==null,br=0,He=Be=_e=null,kl=!1,t)throw Error(I(300));return e}function jd(){var e=Os!==0;return Os=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?_e.memoizedState=He=e:He=He.next=e,He}function jt(){if(Be===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=He===null?_e.memoizedState:He.next;if(t!==null)He=t,Be=e;else{if(e===null)throw Error(I(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},He===null?_e.memoizedState=He=e:He=He.next=e}return He}function Rs(e,t){return typeof t=="function"?t(e):t}function Ga(e){var t=jt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,d=null,m=o;do{var y=m.lane;if((br&y)===y)d!==null&&(d=d.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var v={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};d===null?(u=d=v,l=r):d=d.next=v,_e.lanes|=y,Sr|=y}m=m.next}while(m!==null&&m!==o);d===null?l=r:d.next=u,Vt(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Sr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xa(e){var t=jt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Vt(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function P0(){}function D0(e,t){var n=_e,r=jt(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,dt=!0),r=r.queue,Od(O0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,As(9,j0.bind(null,n,r,i,t),void 0,null),We===null)throw Error(I(349));br&30||T0(n,t,i)}return i}function T0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function j0(e,t,n,r){t.value=n,t.getSnapshot=r,R0(t)&&A0(e)}function O0(e,t,n){return n(function(){R0(t)&&A0(e)})}function R0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function A0(e){var t=wn(e,1);t!==null&&Wt(t,e,1,-1)}function Np(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},t.queue=e,e=e.dispatch=G2.bind(null,_e,e),[t.memoizedState,e]}function As(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function I0(){return jt().memoizedState}function nl(e,t,n,r){var i=Jt();_e.flags|=e,i.memoizedState=As(1|t,n,void 0,r===void 0?null:r)}function Ml(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(Be!==null){var l=Be.memoizedState;if(o=l.destroy,r!==null&&Dd(r,l.deps)){i.memoizedState=As(t,n,o,r);return}}_e.flags|=e,i.memoizedState=As(1|t,n,o,r)}function zp(e,t){return nl(8390656,8,e,t)}function Od(e,t){return Ml(2048,8,e,t)}function B0(e,t){return Ml(4,2,e,t)}function F0(e,t){return Ml(4,4,e,t)}function U0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function H0(e,t,n){return n=n!=null?n.concat([e]):null,Ml(4,4,U0.bind(null,t,e),n)}function Rd(){}function W0(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function V0(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Y0(e,t,n){return br&21?(Vt(n,t)||(n=Gm(),_e.lanes|=n,Sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function Z2(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Ja.transition;Ja.transition={};try{e(!1),t()}finally{he=n,Ja.transition=r}}function Q0(){return jt().memoizedState}function J2(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(e))Z0(t,n);else if(n=L0(e,t,n,r),n!==null){var i=it();Wt(n,e,r,i),J0(n,t,r)}}function G2(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(e))Z0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,Vt(u,l)){var d=t.interleaved;d===null?(i.next=i,kd(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=L0(e,t,i,r),n!==null&&(i=it(),Wt(n,e,r,i),J0(n,t,r))}}function K0(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Z0(e,t){gs=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function J0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pd(e,n)}}var Ll={readContext:Tt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},X2={readContext:Tt,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:zp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,nl(4194308,4,U0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var n=Jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=J2.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Np,useDebugValue:Rd,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Np(!1),t=e[0];return e=Z2.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=Jt();if(Se){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),We===null)throw Error(I(349));br&30||T0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,zp(O0.bind(null,r,o,e),[e]),r.flags|=2048,As(9,j0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Jt(),t=We.identifierPrefix;if(Se){var n=pn,r=fn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Os++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},q2={readContext:Tt,useCallback:W0,useContext:Tt,useEffect:Od,useImperativeHandle:H0,useInsertionEffect:B0,useLayoutEffect:F0,useMemo:V0,useReducer:Ga,useRef:I0,useState:function(){return Ga(Rs)},useDebugValue:Rd,useDeferredValue:function(e){var t=jt();return Y0(t,Be.memoizedState,e)},useTransition:function(){var e=Ga(Rs)[0],t=jt().memoizedState;return[e,t]},useMutableSource:P0,useSyncExternalStore:D0,useId:Q0,unstable_isNewReconciler:!1},M2={readContext:Tt,useCallback:W0,useContext:Tt,useEffect:Od,useImperativeHandle:H0,useInsertionEffect:B0,useLayoutEffect:F0,useMemo:V0,useReducer:Xa,useRef:I0,useState:function(){return Xa(Rs)},useDebugValue:Rd,useDeferredValue:function(e){var t=jt();return Be===null?t.memoizedState=e:Y0(t,Be.memoizedState,e)},useTransition:function(){var e=Xa(Rs)[0],t=jt().memoizedState;return[e,t]},useMutableSource:P0,useSyncExternalStore:D0,useId:Q0,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Du(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ea={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=Hn(e),o=mn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Wt(t,e,i,r),el(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=Hn(e),o=mn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Wt(t,e,i,r),el(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=Hn(e),i=mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Wt(t,e,r,n),el(t,e,r))}};function Pp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ns(n,r)||!Ns(i,o):!0}function G0(e,t,n){var r=!1,i=Qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Tt(o):(i=pt(t)?wr:nt.current,r=t.contextTypes,o=(r=r!=null)?yi(e,i):Qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ea.enqueueReplaceState(t,t.state,null)}function Tu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ld(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Tt(o):(o=pt(t)?wr:nt.current,i.context=yi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Du(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ea.enqueueReplaceState(i,i.state,null),_l(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,t){try{var n="",r=t;do n+=ky(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e5=typeof WeakMap=="function"?WeakMap:Map;function X0(e,t,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zl||(zl=!0,Vu=r),ju(e,t)},n}function q0(e,t,n){n=mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ju(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ju(e,t),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Tp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=h5.bind(null,e,t,n),t.then(e,e))}function jp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Op(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var t5=bn.ReactCurrentOwner,dt=!1;function rt(e,t,n,r){t.child=e===null?k0(t,null,n,r):wi(t,e.child,n,r)}function Rp(e,t,n,r,i){n=n.render;var o=t.ref;return pi(t,i),r=Td(e,t,n,r,o,i),n=jd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(Se&&n&&bd(t),t.flags|=1,rt(e,t,r,i),t.child)}function Ap(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,M0(e,t,o,r,i)):(e=ol(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ns,n(l,r)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=Wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function M0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ns(o,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,xn(e,t,i)}return Ou(e,t,n,r,i)}function eg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ai,yt),yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(ai,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(ai,yt),yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(ai,yt),yt|=r;return rt(e,t,i,n),t.child}function tg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ou(e,t,n,r,i){var o=pt(n)?wr:nt.current;return o=yi(t,o),pi(t,i),n=Td(e,t,n,r,o,i),r=jd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(Se&&r&&bd(t),t.flags|=1,rt(e,t,n,i),t.child)}function Ip(e,t,n,r,i){if(pt(n)){var o=!0;xl(t)}else o=!1;if(pi(t,i),t.stateNode===null)rl(e,t),G0(t,n,r),Tu(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,m=n.contextType;typeof m=="object"&&m!==null?m=Tt(m):(m=pt(n)?wr:nt.current,m=yi(t,m));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==m)&&Dp(t,l,r,m),Ln=!1;var w=t.memoizedState;l.state=w,_l(t,r,l,i),d=t.memoizedState,u!==r||w!==d||ft.current||Ln?(typeof y=="function"&&(Du(t,n,y,r),d=t.memoizedState),(u=Ln||Pp(t,n,u,r,w,d,m))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=m,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,N0(e,t),u=t.memoizedProps,m=t.type===t.elementType?u:Rt(t.type,u),l.props=m,v=t.pendingProps,w=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Tt(d):(d=pt(n)?wr:nt.current,d=yi(t,d));var _=n.getDerivedStateFromProps;(y=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==v||w!==d)&&Dp(t,l,r,d),Ln=!1,w=t.memoizedState,l.state=w,_l(t,r,l,i);var C=t.memoizedState;u!==v||w!==C||ft.current||Ln?(typeof _=="function"&&(Du(t,n,_,r),C=t.memoizedState),(m=Ln||Pp(t,n,m,r,w,C,d)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,C,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,C,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),l.props=r,l.state=C,l.context=d,r=m):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Ru(e,t,n,r,o,i)}function Ru(e,t,n,r,i,o){tg(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Cp(t,n,!1),xn(e,t,o);r=t.stateNode,t5.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=wi(t,e.child,null,o),t.child=wi(t,null,u,o)):rt(e,t,u,o),t.memoizedState=r.state,i&&Cp(t,n,!0),t.child}function ng(e){var t=e.stateNode;t.pendingContext?Sp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sp(e,t.context,!1),Nd(e,t.containerInfo)}function Bp(e,t,n,r,i){return vi(),Cd(i),t.flags|=256,rt(e,t,n,r),t.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function rg(e,t,n){var r=t.pendingProps,i=$e.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge($e,i&1),e===null)return zu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ra(l,r,0,null),e=yr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Iu(n),t.memoizedState=Au,e):Ad(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return n5(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Wn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Wn(u,o):(o=yr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Iu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Au,r}return o=e.child,e=o.sibling,r=Wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ad(e,t){return t=ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&Cd(r),wi(t,e.child,null,n),e=Ad(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n5(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=qa(Error(I(422))),So(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ra({mode:"visible",children:r.children},i,0,null),o=yr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&wi(t,e.child,null,l),t.child.memoizedState=Iu(l),t.memoizedState=Au,o);if(!(t.mode&1))return So(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(I(419)),r=qa(o,r,void 0),So(e,t,l,r)}if(u=(l&e.childLanes)!==0,dt||u){if(r=We,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wn(e,i),Wt(r,e,i,-1))}return Wd(),r=qa(Error(I(421))),So(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Bn(i.nextSibling),wt=t,Se=!0,It=null,e!==null&&(Lt[Nt++]=fn,Lt[Nt++]=pn,Lt[Nt++]=xr,fn=e.id,pn=e.overflow,xr=t),t=Ad(t,r.children),t.flags|=4096,t)}function Fp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pu(e.return,t,n)}function Ma(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ig(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(rt(e,t,r.children,n),r=$e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fp(e,n,t);else if(e.tag===19)Fp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge($e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&El(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ma(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&El(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ma(t,!0,n,null,o);break;case"together":Ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r5(e,t,n){switch(t.tag){case 3:ng(t),vi();break;case 5:z0(t);break;case 1:pt(t.type)&&xl(t);break;case 4:Nd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?rg(e,t,n):(ge($e,$e.current&1),e=xn(e,t,n),e!==null?e.sibling:null);ge($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ig(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,eg(e,t,n)}return xn(e,t,n)}var sg,Bu,og,lg;sg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};og=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ur(tn.current);var o=null;switch(n){case"input":i=lu(e,i),r=lu(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=uu(e,i),r=uu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}fu(n,r);var l;n=null;for(m in i)if(!r.hasOwnProperty(m)&&i.hasOwnProperty(m)&&i[m]!=null)if(m==="style"){var u=i[m];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(Ss.hasOwnProperty(m)?o||(o=[]):(o=o||[]).push(m,null));for(m in r){var d=r[m];if(u=i!=null?i[m]:void 0,r.hasOwnProperty(m)&&d!==u&&(d!=null||u!=null))if(m==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(m,n)),n=d;else m==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(o=o||[]).push(m,d)):m==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(m,""+d):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(m)?(d!=null&&m==="onScroll"&&we("scroll",e),o||u===d||(o=[])):(o=o||[]).push(m,d))}n&&(o=o||[]).push("style",n);var m=o;(t.updateQueue=m)&&(t.flags|=4)}};lg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i5(e,t,n){var r=t.pendingProps;switch(Sd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return pt(t.type)&&wl(),qe(t),null;case 3:return r=t.stateNode,xi(),xe(ft),xe(nt),Pd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(Ku(It),It=null))),Bu(e,t),qe(t),null;case 5:zd(t);var i=ur(js.current);if(n=t.type,e!==null&&t.stateNode!=null)og(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return qe(t),null}if(e=ur(tn.current),xo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[Ds]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<cs.length;i++)we(cs[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Jf(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":Xf(r,o),we("invalid",r)}fu(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,u,e),i=["children",""+u]):Ss.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&we("scroll",r)}switch(n){case"input":uo(r),Gf(r,o,!0);break;case"textarea":uo(r),qf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Om(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Mt]=t,e[Ds]=r,sg(e,t,!1,!1),t.stateNode=e;e:{switch(l=pu(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<cs.length;i++)we(cs[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":Jf(e,r),i=lu(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),we("invalid",e);break;case"textarea":Xf(e,r),i=uu(e,r),we("invalid",e);break;default:i=r}fu(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var d=u[o];o==="style"?Im(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Rm(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Cs(e,d):typeof d=="number"&&Cs(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ss.hasOwnProperty(o)?d!=null&&o==="onScroll"&&we("scroll",e):d!=null&&ld(e,o,d,l))}switch(n){case"input":uo(e),Gf(e,r,!1);break;case"textarea":uo(e),qf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)lg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=ur(js.current),ur(tn.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=wt,e!==null))switch(e.tag){case 3:wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return qe(t),null;case 13:if(xe($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&vt!==null&&t.mode&1&&!(t.flags&128))_0(),vi(),t.flags|=98560,o=!1;else if(o=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Mt]=t}else vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),o=!1}else It!==null&&(Ku(It),It=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?Fe===0&&(Fe=3):Wd())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return xi(),Bu(e,t),e===null&&zs(t.stateNode.containerInfo),qe(t),null;case 10:return Ed(t.type._context),qe(t),null;case 17:return pt(t.type)&&wl(),qe(t),null;case 19:if(xe($e),o=t.memoizedState,o===null)return qe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Zi(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=El(e),l!==null){for(t.flags|=128,Zi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge($e,$e.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Si&&(t.flags|=128,r=!0,Zi(o,!1),t.lanes=4194304)}else{if(!r)if(e=El(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Se)return qe(t),null}else 2*ze()-o.renderingStartTime>Si&&n!==1073741824&&(t.flags|=128,r=!0,Zi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=$e.current,ge($e,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Hd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?yt&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function s5(e,t){switch(Sd(t),t.tag){case 1:return pt(t.type)&&wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xi(),xe(ft),xe(nt),Pd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zd(t),null;case 13:if(xe($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe($e),null;case 4:return xi(),null;case 10:return Ed(t.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var Co=!1,et=!1,o5=typeof WeakSet=="function"?WeakSet:Set,Y=null;function li(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function Fu(e,t,n){try{n()}catch(r){ke(e,t,r)}}var Up=!1;function l5(e,t){if(Cu=ml,e=f0(),xd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,m=0,y=0,v=e,w=null;t:for(;;){for(var _;v!==n||i!==0&&v.nodeType!==3||(u=l+i),v!==o||r!==0&&v.nodeType!==3||(d=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(_=v.firstChild)!==null;)w=v,v=_;for(;;){if(v===e)break t;if(w===n&&++m===i&&(u=l),w===o&&++y===r&&(d=l),(_=v.nextSibling)!==null)break;v=w,w=v.parentNode}v=_}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:e,selectionRange:n},ml=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var b=C.memoizedProps,z=C.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Rt(t.type,b),z);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(k){ke(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return C=Up,Up=!1,C}function ys(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fu(t,n,o)}i=i.next}while(i!==r)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ag(e){var t=e.alternate;t!==null&&(e.alternate=null,ag(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Ds],delete t[ku],delete t[W2],delete t[V2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cg(e){return e.tag===5||e.tag===3||e.tag===4}function Hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function Wu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wu(e,t,n),e=e.sibling;e!==null;)Wu(e,t,n),e=e.sibling}var Ke=null,At=!1;function $n(e,t,n){for(n=n.child;n!==null;)ug(e,t,n),n=n.sibling}function ug(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:et||li(n,t);case 6:var r=Ke,i=At;Ke=null,$n(e,t,n),Ke=r,At=i,Ke!==null&&(At?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(At?(e=Ke,n=n.stateNode,e.nodeType===8?Qa(e.parentNode,n):e.nodeType===1&&Qa(e,n),ks(e)):Qa(Ke,n.stateNode));break;case 4:r=Ke,i=At,Ke=n.stateNode.containerInfo,At=!0,$n(e,t,n),Ke=r,At=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Fu(n,t,l),i=i.next}while(i!==r)}$n(e,t,n);break;case 1:if(!et&&(li(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ke(n,t,u)}$n(e,t,n);break;case 21:$n(e,t,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,$n(e,t,n),et=r):$n(e,t,n);break;default:$n(e,t,n)}}function Wp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new o5),t.forEach(function(r){var i=g5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ke=u.stateNode,At=!1;break e;case 3:Ke=u.stateNode.containerInfo,At=!0;break e;case 4:Ke=u.stateNode.containerInfo,At=!0;break e}u=u.return}if(Ke===null)throw Error(I(160));ug(o,l,i),Ke=null,At=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(m){ke(i,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dg(t,e),t=t.sibling}function dg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Kt(e),r&4){try{ys(3,e,e.return),ta(3,e)}catch(b){ke(e,e.return,b)}try{ys(5,e,e.return)}catch(b){ke(e,e.return,b)}}break;case 1:Ot(t,e),Kt(e),r&512&&n!==null&&li(n,n.return);break;case 5:if(Ot(t,e),Kt(e),r&512&&n!==null&&li(n,n.return),e.flags&32){var i=e.stateNode;try{Cs(i,"")}catch(b){ke(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Tm(i,o),pu(u,l);var m=pu(u,o);for(l=0;l<d.length;l+=2){var y=d[l],v=d[l+1];y==="style"?Im(i,v):y==="dangerouslySetInnerHTML"?Rm(i,v):y==="children"?Cs(i,v):ld(i,y,v,m)}switch(u){case"input":au(i,o);break;case"textarea":jm(i,o);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?ci(i,!!o.multiple,_,!1):w!==!!o.multiple&&(o.defaultValue!=null?ci(i,!!o.multiple,o.defaultValue,!0):ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ds]=o}catch(b){ke(e,e.return,b)}}break;case 6:if(Ot(t,e),Kt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){ke(e,e.return,b)}}break;case 3:if(Ot(t,e),Kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ks(t.containerInfo)}catch(b){ke(e,e.return,b)}break;case 4:Ot(t,e),Kt(e);break;case 13:Ot(t,e),Kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fd=ze())),r&4&&Wp(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(et=(m=et)||y,Ot(t,e),et=m):Ot(t,e),Kt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&e.mode&1)for(Y=e,y=e.child;y!==null;){for(v=Y=y;Y!==null;){switch(w=Y,_=w.child,w.tag){case 0:case 11:case 14:case 15:ys(4,w,w.return);break;case 1:li(w,w.return);var C=w.stateNode;if(typeof C.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(b){ke(r,n,b)}}break;case 5:li(w,w.return);break;case 22:if(w.memoizedState!==null){Yp(v);continue}}_!==null?(_.return=w,Y=_):Yp(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,m?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Am("display",l))}catch(b){ke(e,e.return,b)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=m?"":v.memoizedProps}catch(b){ke(e,e.return,b)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ot(t,e),Kt(e),r&4&&Wp(e);break;case 21:break;default:Ot(t,e),Kt(e)}}function Kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cg(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cs(i,""),r.flags&=-33);var o=Hp(e);Wu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Hp(e);Hu(e,u,l);break;default:throw Error(I(161))}}catch(d){ke(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function a5(e,t,n){Y=e,fg(e)}function fg(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Co;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||et;u=Co;var m=et;if(Co=l,(et=d)&&!m)for(Y=i;Y!==null;)l=Y,d=l.child,l.tag===22&&l.memoizedState!==null?Qp(i):d!==null?(d.return=l,Y=d):Qp(i);for(;o!==null;)Y=o,fg(o),o=o.sibling;Y=i,Co=u,et=m}Vp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):Vp(e)}}function Vp(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Lp(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lp(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&ks(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}et||t.flags&512&&Uu(t)}catch(w){ke(t,t.return,w)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Yp(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Qp(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ta(4,t)}catch(d){ke(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){ke(t,i,d)}}var o=t.return;try{Uu(t)}catch(d){ke(t,o,d)}break;case 5:var l=t.return;try{Uu(t)}catch(d){ke(t,l,d)}}}catch(d){ke(t,t.return,d)}if(t===e){Y=null;break}var u=t.sibling;if(u!==null){u.return=t.return,Y=u;break}Y=t.return}}var c5=Math.ceil,Nl=bn.ReactCurrentDispatcher,Id=bn.ReactCurrentOwner,Dt=bn.ReactCurrentBatchConfig,ae=0,We=null,Oe=null,Je=0,yt=0,ai=Zn(0),Fe=0,Is=null,Sr=0,na=0,Bd=0,vs=null,at=null,Fd=0,Si=1/0,un=null,zl=!1,Vu=null,Un=null,$o=!1,Tn=null,Pl=0,ws=0,Yu=null,il=-1,sl=0;function it(){return ae&6?ze():il!==-1?il:il=ze()}function Hn(e){return e.mode&1?ae&2&&Je!==0?Je&-Je:Q2.transition!==null?(sl===0&&(sl=Gm()),sl):(e=he,e!==0||(e=window.event,e=e===void 0?16:r0(e.type)),e):1}function Wt(e,t,n,r){if(50<ws)throw ws=0,Yu=null,Error(I(185));Zs(e,n,r),(!(ae&2)||e!==We)&&(e===We&&(!(ae&2)&&(na|=n),Fe===4&&zn(e,Je)),ht(e,r),n===1&&ae===0&&!(t.mode&1)&&(Si=ze()+500,ql&&Jn()))}function ht(e,t){var n=e.callbackNode;Qy(e,t);var r=hl(e,e===We?Je:0);if(r===0)n!==null&&tp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tp(n),t===1)e.tag===0?Y2(Kp.bind(null,e)):S0(Kp.bind(null,e)),U2(function(){!(ae&6)&&Jn()}),n=null;else{switch(Xm(r)){case 1:n=fd;break;case 4:n=Zm;break;case 16:n=pl;break;case 536870912:n=Jm;break;default:n=pl}n=xg(n,pg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pg(e,t){if(il=-1,sl=0,ae&6)throw Error(I(327));var n=e.callbackNode;if(hi()&&e.callbackNode!==n)return null;var r=hl(e,e===We?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Dl(e,r);else{t=r;var i=ae;ae|=2;var o=mg();(We!==e||Je!==t)&&(un=null,Si=ze()+500,gr(e,t));do try{f5();break}catch(u){hg(e,u)}while(!0);_d(),Nl.current=o,ae=i,Oe!==null?t=0:(We=null,Je=0,t=Fe)}if(t!==0){if(t===2&&(i=vu(e),i!==0&&(r=i,t=Qu(e,i))),t===1)throw n=Is,gr(e,0),zn(e,r),ht(e,ze()),n;if(t===6)zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!u5(i)&&(t=Dl(e,r),t===2&&(o=vu(e),o!==0&&(r=o,t=Qu(e,o))),t===1))throw n=Is,gr(e,0),zn(e,r),ht(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:ir(e,at,un);break;case 3:if(zn(e,r),(r&130023424)===r&&(t=Fd+500-ze(),10<t)){if(hl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eu(ir.bind(null,e,at,un),t);break}ir(e,at,un);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ht(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c5(r/1960))-r,10<r){e.timeoutHandle=Eu(ir.bind(null,e,at,un),r);break}ir(e,at,un);break;case 5:ir(e,at,un);break;default:throw Error(I(329))}}}return ht(e,ze()),e.callbackNode===n?pg.bind(null,e):null}function Qu(e,t){var n=vs;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=Dl(e,t),e!==2&&(t=at,at=n,t!==null&&Ku(t)),e}function Ku(e){at===null?at=e:at.push.apply(at,e)}function u5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~Bd,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function Kp(e){if(ae&6)throw Error(I(327));hi();var t=hl(e,0);if(!(t&1))return ht(e,ze()),null;var n=Dl(e,t);if(e.tag!==0&&n===2){var r=vu(e);r!==0&&(t=r,n=Qu(e,r))}if(n===1)throw n=Is,gr(e,0),zn(e,t),ht(e,ze()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,at,un),ht(e,ze()),null}function Ud(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Si=ze()+500,ql&&Jn())}}function Cr(e){Tn!==null&&Tn.tag===0&&!(ae&6)&&hi();var t=ae;ae|=1;var n=Dt.transition,r=he;try{if(Dt.transition=null,he=1,e)return e()}finally{he=r,Dt.transition=n,ae=t,!(ae&6)&&Jn()}}function Hd(){yt=ai.current,xe(ai)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F2(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:xi(),xe(ft),xe(nt),Pd();break;case 5:zd(r);break;case 4:xi();break;case 13:xe($e);break;case 19:xe($e);break;case 10:Ed(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(We=e,Oe=e=Wn(e.current,null),Je=yt=t,Fe=0,Is=null,Bd=na=Sr=0,at=vs=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}cr=null}return e}function hg(e,t){do{var n=Oe;try{if(_d(),tl.current=Ll,kl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(br=0,He=Be=_e=null,gs=!1,Os=0,Id.current=null,n===null||n.return===null){Fe=1,Is=t,Oe=null;break}e:{var o=e,l=n.return,u=n,d=t;if(t=Je,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var m=d,y=u,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var w=y.alternate;w?(y.updateQueue=w.updateQueue,y.memoizedState=w.memoizedState,y.lanes=w.lanes):(y.updateQueue=null,y.memoizedState=null)}var _=jp(l);if(_!==null){_.flags&=-257,Op(_,l,u,o,t),_.mode&1&&Tp(o,m,t),t=_,d=m;var C=t.updateQueue;if(C===null){var b=new Set;b.add(d),t.updateQueue=b}else C.add(d);break e}else{if(!(t&1)){Tp(o,m,t),Wd();break e}d=Error(I(426))}}else if(Se&&u.mode&1){var z=jp(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Op(z,l,u,o,t),Cd(bi(d,u));break e}}o=d=bi(d,u),Fe!==4&&(Fe=2),vs===null?vs=[o]:vs.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=X0(o,d,t);kp(o,g);break e;case 1:u=d;var f=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Un===null||!Un.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=q0(o,u,t);kp(o,k);break e}}o=o.return}while(o!==null)}yg(n)}catch($){t=$,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function mg(){var e=Nl.current;return Nl.current=Ll,e===null?Ll:e}function Wd(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||!(Sr&268435455)&&!(na&268435455)||zn(We,Je)}function Dl(e,t){var n=ae;ae|=2;var r=mg();(We!==e||Je!==t)&&(un=null,gr(e,t));do try{d5();break}catch(i){hg(e,i)}while(!0);if(_d(),ae=n,Nl.current=r,Oe!==null)throw Error(I(261));return We=null,Je=0,Fe}function d5(){for(;Oe!==null;)gg(Oe)}function f5(){for(;Oe!==null&&!Ay();)gg(Oe)}function gg(e){var t=wg(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?yg(e):Oe=t,Id.current=null}function yg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s5(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Oe=null;return}}else if(n=i5(n,t,yt),n!==null){Oe=n;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Fe===0&&(Fe=5)}function ir(e,t,n){var r=he,i=Dt.transition;try{Dt.transition=null,he=1,p5(e,t,n,r)}finally{Dt.transition=i,he=r}return null}function p5(e,t,n,r){do hi();while(Tn!==null);if(ae&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ky(e,o),e===We&&(Oe=We=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,xg(pl,function(){return hi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var l=he;he=1;var u=ae;ae|=4,Id.current=null,l5(e,n),dg(n,e),T2($u),ml=!!Cu,$u=Cu=null,e.current=n,a5(n),Iy(),ae=u,he=l,Dt.transition=o}else e.current=n;if($o&&($o=!1,Tn=e,Pl=i),o=e.pendingLanes,o===0&&(Un=null),Uy(n.stateNode),ht(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zl)throw zl=!1,e=Vu,Vu=null,e;return Pl&1&&e.tag!==0&&hi(),o=e.pendingLanes,o&1?e===Yu?ws++:(ws=0,Yu=e):ws=0,Jn(),null}function hi(){if(Tn!==null){var e=Xm(Pl),t=Dt.transition,n=he;try{if(Dt.transition=null,he=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,Pl=0,ae&6)throw Error(I(331));var i=ae;for(ae|=4,Y=e.current;Y!==null;){var o=Y,l=o.child;if(Y.flags&16){var u=o.deletions;if(u!==null){for(var d=0;d<u.length;d++){var m=u[d];for(Y=m;Y!==null;){var y=Y;switch(y.tag){case 0:case 11:case 15:ys(8,y,o)}var v=y.child;if(v!==null)v.return=y,Y=v;else for(;Y!==null;){y=Y;var w=y.sibling,_=y.return;if(ag(y),y===m){Y=null;break}if(w!==null){w.return=_,Y=w;break}Y=_}}}var C=o.alternate;if(C!==null){var b=C.child;if(b!==null){C.child=null;do{var z=b.sibling;b.sibling=null,b=z}while(b!==null)}}Y=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Y=l;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ys(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,Y=g;break e}Y=o.return}}var f=e.current;for(Y=f;Y!==null;){l=Y;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Y=x;else e:for(l=f;Y!==null;){if(u=Y,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ta(9,u)}}catch($){ke(u,u.return,$)}if(u===l){Y=null;break e}var k=u.sibling;if(k!==null){k.return=u.return,Y=k;break e}Y=u.return}}if(ae=i,Jn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Kl,e)}catch{}r=!0}return r}finally{he=n,Dt.transition=t}}return!1}function Zp(e,t,n){t=bi(n,t),t=X0(e,t,1),e=Fn(e,t,1),t=it(),e!==null&&(Zs(e,1,t),ht(e,t))}function ke(e,t,n){if(e.tag===3)Zp(e,e,n);else for(;t!==null;){if(t.tag===3){Zp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=bi(n,e),e=q0(t,e,1),t=Fn(t,e,1),e=it(),t!==null&&(Zs(t,1,e),ht(t,e));break}}t=t.return}}function h5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Je&n)===n&&(Fe===4||Fe===3&&(Je&130023424)===Je&&500>ze()-Fd?gr(e,0):Bd|=n),ht(e,t)}function vg(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=it();e=wn(e,t),e!==null&&(Zs(e,t,n),ht(e,n))}function m5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vg(e,n)}function g5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),vg(e,n)}var wg;wg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,r5(e,t,n);dt=!!(e.flags&131072)}else dt=!1,Se&&t.flags&1048576&&C0(t,Sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=yi(t,nt.current);pi(t,n),i=Td(null,t,r,e,i,n);var o=jd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(o=!0,xl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ld(t),i.updater=ea,t.stateNode=i,i._reactInternals=t,Tu(t,r,e,n),t=Ru(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&bd(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=v5(r),e=Rt(r,e),i){case 0:t=Ou(null,t,r,e,n);break e;case 1:t=Ip(null,t,r,e,n);break e;case 11:t=Rp(null,t,r,e,n);break e;case 14:t=Ap(null,t,r,Rt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Ou(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Ip(e,t,r,i,n);case 3:e:{if(ng(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,N0(e,t),_l(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=bi(Error(I(423)),t),t=Bp(e,t,r,n,i);break e}else if(r!==i){i=bi(Error(I(424)),t),t=Bp(e,t,r,n,i);break e}else for(vt=Bn(t.stateNode.containerInfo.firstChild),wt=t,Se=!0,It=null,n=k0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),r===i){t=xn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return z0(t),e===null&&zu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,_u(r,i)?l=null:o!==null&&_u(r,o)&&(t.flags|=32),tg(e,t),rt(e,t,l,n),t.child;case 6:return e===null&&zu(t),null;case 13:return rg(e,t,n);case 4:return Nd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wi(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Rp(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ge(Cl,r._currentValue),r._currentValue=l,o!==null)if(Vt(o.value,l)){if(o.children===i.children&&!ft.current){t=xn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=mn(-1,n&-n),d.tag=2;var m=o.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?d.next=d:(d.next=y.next,y.next=d),m.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Pu(o.return,n,t),u.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(I(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Pu(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pi(t,n),i=Tt(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),Ap(e,t,r,i,n);case 15:return M0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),rl(e,t),t.tag=1,pt(r)?(e=!0,xl(t)):e=!1,pi(t,n),G0(t,r,i),Tu(t,r,i,n),Ru(null,t,r,!0,e,n);case 19:return ig(e,t,n);case 22:return eg(e,t,n)}throw Error(I(156,t.tag))};function xg(e,t){return Km(e,t)}function y5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new y5(e,t,n,r)}function Vd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v5(e){if(typeof e=="function")return Vd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cd)return 11;if(e===ud)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ol(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Vd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qr:return yr(n.children,i,o,t);case ad:l=8,i|=8;break;case ru:return e=Pt(12,n,t,i|2),e.elementType=ru,e.lanes=o,e;case iu:return e=Pt(13,n,t,i),e.elementType=iu,e.lanes=o,e;case su:return e=Pt(19,n,t,i),e.elementType=su,e.lanes=o,e;case zm:return ra(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lm:l=10;break e;case Nm:l=9;break e;case cd:l=11;break e;case ud:l=14;break e;case kn:l=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Pt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function yr(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function ra(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=zm,e.lanes=n,e.stateNode={isHidden:!1},e}function ec(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function tc(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function w5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yd(e,t,n,r,i,o,l,u,d){return e=new w5(e,t,n,u,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(o),e}function x5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bg(e){if(!e)return Qn;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(pt(n))return b0(e,n,t)}return t}function Sg(e,t,n,r,i,o,l,u,d){return e=Yd(n,r,!0,e,i,o,l,u,d),e.context=bg(null),n=e.current,r=it(),i=Hn(n),o=mn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,Zs(e,i,r),ht(e,r),e}function ia(e,t,n,r){var i=t.current,o=it(),l=Hn(i);return n=bg(n),t.context===null?t.context=n:t.pendingContext=n,t=mn(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,l),e!==null&&(Wt(e,i,l,o),el(e,i,l)),l}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qd(e,t){Jp(e,t),(e=e.alternate)&&Jp(e,t)}function b5(){return null}var Cg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kd(e){this._internalRoot=e}sa.prototype.render=Kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));ia(e,t,null,null)};sa.prototype.unmount=Kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cr(function(){ia(null,e,null,null)}),t[vn]=null}};function sa(e){this._internalRoot=e}sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=e0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&n0(e)}};function Zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function S5(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var m=Tl(l);o.call(m)}}var l=Sg(t,r,e,0,null,!1,!1,"",Gp);return e._reactRootContainer=l,e[vn]=l.current,zs(e.nodeType===8?e.parentNode:e),Cr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var m=Tl(d);u.call(m)}}var d=Yd(e,0,!1,null,null,!1,!1,"",Gp);return e._reactRootContainer=d,e[vn]=d.current,zs(e.nodeType===8?e.parentNode:e),Cr(function(){ia(t,d,n,r)}),d}function la(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var d=Tl(l);u.call(d)}}ia(t,l,e,i)}else l=S5(n,t,e,i,r);return Tl(l)}qm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=as(t.pendingLanes);n!==0&&(pd(t,n|1),ht(t,ze()),!(ae&6)&&(Si=ze()+500,Jn()))}break;case 13:Cr(function(){var r=wn(e,1);if(r!==null){var i=it();Wt(r,e,1,i)}}),Qd(e,1)}};hd=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var n=it();Wt(t,e,134217728,n)}Qd(e,134217728)}};Mm=function(e){if(e.tag===13){var t=Hn(e),n=wn(e,t);if(n!==null){var r=it();Wt(n,e,t,r)}Qd(e,t)}};e0=function(){return he};t0=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};mu=function(e,t,n){switch(t){case"input":if(au(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xl(r);if(!i)throw Error(I(90));Dm(r),au(r,i)}}}break;case"textarea":jm(e,n);break;case"select":t=n.value,t!=null&&ci(e,!!n.multiple,t,!1)}};Um=Ud;Hm=Cr;var C5={usingClientEntryPoint:!1,Events:[Gs,ni,Xl,Bm,Fm,Ud]},Ji={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$5={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ym(e),e===null?null:e.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||b5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Kl=_o.inject($5),en=_o}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C5;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(t))throw Error(I(200));return x5(e,t,null,n)};St.createRoot=function(e,t){if(!Zd(e))throw Error(I(299));var n=!1,r="",i=Cg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yd(e,1,!1,null,null,n,!1,r,i),e[vn]=t.current,zs(e.nodeType===8?e.parentNode:e),new Kd(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Ym(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return Cr(e)};St.hydrate=function(e,t,n){if(!oa(t))throw Error(I(200));return la(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!Zd(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Cg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Sg(t,null,e,1,n??null,i,!1,o,l),e[vn]=t.current,zs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sa(t)};St.render=function(e,t,n){if(!oa(t))throw Error(I(200));return la(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!oa(e))throw Error(I(40));return e._reactRootContainer?(Cr(function(){la(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};St.unstable_batchedUpdates=Ud;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oa(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return la(e,t,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(e){console.error(e)}}$g(),$m.exports=St;var _5=$m.exports,Xp=_5;tu.createRoot=Xp.createRoot,tu.hydrateRoot=Xp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bs.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const qp="popstate";function E5(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:u}=r.location;return Zu("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_g(i)}return L5(t,n,null,e)}function Re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function k5(){return Math.random().toString(36).substr(2,8)}function Mp(e,t){return{usr:e.state,key:e.key,idx:t}}function Zu(e,t,n,r){return n===void 0&&(n=null),Bs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ni(t):t,{state:n,key:t&&t.key||r||k5()})}function _g(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ni(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function L5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,u=jn.Pop,d=null,m=y();m==null&&(m=0,l.replaceState(Bs({},l.state,{idx:m}),""));function y(){return(l.state||{idx:null}).idx}function v(){u=jn.Pop;let z=y(),g=z==null?null:z-m;m=z,d&&d({action:u,location:b.location,delta:g})}function w(z,g){u=jn.Push;let f=Zu(b.location,z,g);m=y()+1;let x=Mp(f,m),k=b.createHref(f);try{l.pushState(x,"",k)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(k)}o&&d&&d({action:u,location:b.location,delta:1})}function _(z,g){u=jn.Replace;let f=Zu(b.location,z,g);m=y();let x=Mp(f,m),k=b.createHref(f);l.replaceState(x,"",k),o&&d&&d({action:u,location:b.location,delta:0})}function C(z){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof z=="string"?z:_g(z);return f=f.replace(/ $/,"%20"),Re(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let b={get action(){return u},get location(){return e(i,l)},listen(z){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(qp,v),d=z,()=>{i.removeEventListener(qp,v),d=null}},createHref(z){return t(i,z)},createURL:C,encodeLocation(z){let g=C(z);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:w,replace:_,go(z){return l.go(z)}};return b}var eh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(eh||(eh={}));function N5(e,t,n){return n===void 0&&(n="/"),z5(e,t,n)}function z5(e,t,n,r){let i=typeof t=="string"?Ni(t):t,o=Lg(i.pathname||"/",n);if(o==null)return null;let l=Eg(e);P5(l);let u=null;for(let d=0;u==null&&d<l.length;++d){let m=W5(o);u=F5(l[d],m)}return u}function Eg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};d.relativePath.startsWith("/")&&(Re(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let m=vr([r,d.relativePath]),y=n.concat(d);o.children&&o.children.length>0&&(Re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Eg(o.children,t,y,m)),!(o.path==null&&!o.index)&&t.push({path:m,score:I5(m,o.index),routesMeta:y})};return e.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,l);else for(let d of kg(o.path))i(o,l,d)}),t}function kg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=kg(r.join("/")),u=[];return u.push(...l.map(d=>d===""?o:[o,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function P5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:B5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D5=/^:[\w-]+$/,T5=3,j5=2,O5=1,R5=10,A5=-2,th=e=>e==="*";function I5(e,t){let n=e.split("/"),r=n.length;return n.some(th)&&(r+=A5),t&&(r+=j5),n.filter(i=>!th(i)).reduce((i,o)=>i+(D5.test(o)?T5:o===""?O5:R5),r)}function B5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function F5(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let u=0;u<r.length;++u){let d=r[u],m=u===r.length-1,y=o==="/"?t:t.slice(o.length)||"/",v=U5({path:d.relativePath,caseSensitive:d.caseSensitive,end:m},y),w=d.route;if(!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:vr([o,v.pathname]),pathnameBase:Z5(vr([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=vr([o,v.pathnameBase]))}return l}function U5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((m,y,v)=>{let{paramName:w,isOptional:_}=y;if(w==="*"){let b=u[v]||"";l=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const C=u[v];return _&&!C?m[w]=void 0:m[w]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:l,pattern:e}}function H5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,d)=>(r.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function W5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Lg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const V5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y5=e=>V5.test(e);function Q5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ni(e):e,o;if(n)if(Y5(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Jd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=nh(n.substring(1),"/"):o=nh(n,t)}else o=t;return{pathname:o,search:J5(r),hash:G5(i)}}function nh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ng(e,t){let n=K5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ni(e):(i=Bs({},e),Re(!i.pathname||!i.pathname.includes("?"),nc("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),nc("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),nc("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,u;if(l==null)u=n;else{let v=t.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),v-=1;i.pathname=w.join("/")}u=v>=0?t[v]:"/"}let d=Q5(i,u),m=l&&l!=="/"&&l.endsWith("/"),y=(o||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(m||y)&&(d.pathname+="/"),d}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),Z5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Pg=["post","put","patch","delete"];new Set(Pg);const q5=["get",...Pg];new Set(q5);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}const Gd=h.createContext(null),M5=h.createContext(null),qs=h.createContext(null),aa=h.createContext(null),Nr=h.createContext({outlet:null,matches:[],isDataRoute:!1}),Dg=h.createContext(null);function Ms(){return h.useContext(aa)!=null}function Xd(){return Ms()||Re(!1),h.useContext(aa).location}function Tg(e){h.useContext(qs).static||h.useLayoutEffect(e)}function eo(){let{isDataRoute:e}=h.useContext(Nr);return e?fv():ev()}function ev(){Ms()||Re(!1);let e=h.useContext(Gd),{basename:t,future:n,navigator:r}=h.useContext(qs),{matches:i}=h.useContext(Nr),{pathname:o}=Xd(),l=JSON.stringify(Ng(i,n.v7_relativeSplatPath)),u=h.useRef(!1);return Tg(()=>{u.current=!0}),h.useCallback(function(m,y){if(y===void 0&&(y={}),!u.current)return;if(typeof m=="number"){r.go(m);return}let v=zg(m,JSON.parse(l),o,y.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:vr([t,v.pathname])),(y.replace?r.replace:r.push)(v,y.state,y)},[t,r,l,o,e])}function tv(e,t){return nv(e,t)}function nv(e,t,n,r){Ms()||Re(!1);let{navigator:i}=h.useContext(qs),{matches:o}=h.useContext(Nr),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let m=Xd(),y;if(t){var v;let z=typeof t=="string"?Ni(t):t;d==="/"||(v=z.pathname)!=null&&v.startsWith(d)||Re(!1),y=z}else y=m;let w=y.pathname||"/",_=w;if(d!=="/"){let z=d.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(z.length).join("/")}let C=N5(e,{pathname:_}),b=lv(C&&C.map(z=>Object.assign({},z,{params:Object.assign({},u,z.params),pathname:vr([d,i.encodeLocation?i.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?d:vr([d,i.encodeLocation?i.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),o,n,r);return t&&b?h.createElement(aa.Provider,{value:{location:Fs({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:jn.Pop}},b):b}function rv(){let e=dv(),t=X5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),n?h.createElement("pre",{style:i},n):null,null)}const iv=h.createElement(rv,null);class sv extends h.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?h.createElement(Nr.Provider,{value:this.props.routeContext},h.createElement(Dg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ov(e){let{routeContext:t,match:n,children:r}=e,i=h.useContext(Gd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),h.createElement(Nr.Provider,{value:t},r)}function lv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=(i=n)==null?void 0:i.errors;if(u!=null){let y=l.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);y>=0||Re(!1),l=l.slice(0,Math.min(l.length,y+1))}let d=!1,m=-1;if(n&&r&&r.v7_partialHydration)for(let y=0;y<l.length;y++){let v=l[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=y),v.route.id){let{loaderData:w,errors:_}=n,C=v.route.loader&&w[v.route.id]===void 0&&(!_||_[v.route.id]===void 0);if(v.route.lazy||C){d=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((y,v,w)=>{let _,C=!1,b=null,z=null;n&&(_=u&&v.route.id?u[v.route.id]:void 0,b=v.route.errorElement||iv,d&&(m<0&&w===0?(pv("route-fallback"),C=!0,z=null):m===w&&(C=!0,z=v.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,w+1)),f=()=>{let x;return _?x=b:C?x=z:v.route.Component?x=h.createElement(v.route.Component,null):v.route.element?x=v.route.element:x=y,h.createElement(ov,{match:v,routeContext:{outlet:y,matches:g,isDataRoute:n!=null},children:x})};return n&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?h.createElement(sv,{location:n.location,revalidation:n.revalidation,component:b,error:_,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var jg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(jg||{}),Og=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Og||{});function av(e){let t=h.useContext(Gd);return t||Re(!1),t}function cv(e){let t=h.useContext(M5);return t||Re(!1),t}function uv(e){let t=h.useContext(Nr);return t||Re(!1),t}function Rg(e){let t=uv(),n=t.matches[t.matches.length-1];return n.route.id||Re(!1),n.route.id}function dv(){var e;let t=h.useContext(Dg),n=cv(),r=Rg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function fv(){let{router:e}=av(jg.UseNavigateStable),t=Rg(Og.UseNavigateStable),n=h.useRef(!1);return Tg(()=>{n.current=!0}),h.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Fs({fromRouteId:t},o)))},[e,t])}const rh={};function pv(e,t,n){rh[e]||(rh[e]=!0)}function hv(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function mv(e){let{to:t,replace:n,state:r,relative:i}=e;Ms()||Re(!1);let{future:o,static:l}=h.useContext(qs),{matches:u}=h.useContext(Nr),{pathname:d}=Xd(),m=eo(),y=zg(t,Ng(u,o.v7_relativeSplatPath),d,i==="path"),v=JSON.stringify(y);return h.useEffect(()=>m(JSON.parse(v),{replace:n,state:r,relative:i}),[m,v,i,n,r]),null}function Gr(e){Re(!1)}function gv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:o,static:l=!1,future:u}=e;Ms()&&Re(!1);let d=t.replace(/^\/*/,"/"),m=h.useMemo(()=>({basename:d,navigator:o,static:l,future:Fs({v7_relativeSplatPath:!1},u)}),[d,u,o,l]);typeof r=="string"&&(r=Ni(r));let{pathname:y="/",search:v="",hash:w="",state:_=null,key:C="default"}=r,b=h.useMemo(()=>{let z=Lg(y,d);return z==null?null:{location:{pathname:z,search:v,hash:w,state:_,key:C},navigationType:i}},[d,y,v,w,_,C,i]);return b==null?null:h.createElement(qs.Provider,{value:m},h.createElement(aa.Provider,{children:n,value:b}))}function yv(e){let{children:t,location:n}=e;return tv(Ju(t),n)}new Promise(()=>{});function Ju(e,t){t===void 0&&(t=[]);let n=[];return h.Children.forEach(e,(r,i)=>{if(!h.isValidElement(r))return;let o=[...t,i];if(r.type===h.Fragment){n.push.apply(n,Ju(r.props.children,o));return}r.type!==Gr&&Re(!1),!r.props.index||!r.props.children||Re(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ju(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vv="6";try{window.__reactRouterVersion=vv}catch{}const wv="startTransition",ih=eu[wv];function xv(e){let{basename:t,children:n,future:r,window:i}=e,o=h.useRef();o.current==null&&(o.current=E5({window:i,v5Compat:!0}));let l=o.current,[u,d]=h.useState({action:l.action,location:l.location}),{v7_startTransition:m}=r||{},y=h.useCallback(v=>{m&&ih?ih(()=>d(v)):d(v)},[d,m]);return h.useLayoutEffect(()=>l.listen(y),[l,y]),h.useEffect(()=>hv(r),[r]),h.createElement(gv,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:l,future:r})}var sh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sh||(sh={}));var oh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(oh||(oh={}));function bv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Sv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Cv=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Sv(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=bv(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Me="-ms-",jl="-moz-",de="-webkit-",Ag="comm",qd="rule",Md="decl",$v="@import",Ig="@keyframes",_v="@layer",Ev=Math.abs,ca=String.fromCharCode,kv=Object.assign;function Lv(e,t){return Ze(e,0)^45?(((t<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}function Bg(e){return e.trim()}function Nv(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Gu(e,t){return e.indexOf(t)}function Ze(e,t){return e.charCodeAt(t)|0}function Us(e,t,n){return e.slice(t,n)}function Gt(e){return e.length}function ef(e){return e.length}function Eo(e,t){return t.push(e),e}function zv(e,t){return e.map(t).join("")}var ua=1,Ci=1,Fg=0,mt=0,je=0,zi="";function da(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ua,column:Ci,length:l,return:""}}function Gi(e,t){return kv(da("",null,null,"",null,null,0),e,{length:-e.length},t)}function Pv(){return je}function Dv(){return je=mt>0?Ze(zi,--mt):0,Ci--,je===10&&(Ci=1,ua--),je}function xt(){return je=mt<Fg?Ze(zi,mt++):0,Ci++,je===10&&(Ci=1,ua++),je}function nn(){return Ze(zi,mt)}function ll(){return mt}function to(e,t){return Us(zi,e,t)}function Hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ug(e){return ua=Ci=1,Fg=Gt(zi=e),mt=0,[]}function Hg(e){return zi="",e}function al(e){return Bg(to(mt-1,Xu(e===91?e+2:e===40?e+1:e)))}function Tv(e){for(;(je=nn())&&je<33;)xt();return Hs(e)>2||Hs(je)>3?"":" "}function jv(e,t){for(;--t&&xt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return to(e,ll()+(t<6&&nn()==32&&xt()==32))}function Xu(e){for(;xt();)switch(je){case e:return mt;case 34:case 39:e!==34&&e!==39&&Xu(je);break;case 40:e===41&&Xu(e);break;case 92:xt();break}return mt}function Ov(e,t){for(;xt()&&e+je!==57;)if(e+je===84&&nn()===47)break;return"/*"+to(t,mt-1)+"*"+ca(e===47?e:xt())}function Rv(e){for(;!Hs(nn());)xt();return to(e,mt)}function Av(e){return Hg(cl("",null,null,null,[""],e=Ug(e),0,[0],e))}function cl(e,t,n,r,i,o,l,u,d){for(var m=0,y=0,v=l,w=0,_=0,C=0,b=1,z=1,g=1,f=0,x="",k=i,$=o,N=r,P=x;z;)switch(C=f,f=xt()){case 40:if(C!=108&&Ze(P,v-1)==58){Gu(P+=fe(al(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:P+=al(f);break;case 9:case 10:case 13:case 32:P+=Tv(C);break;case 92:P+=jv(ll()-1,7);continue;case 47:switch(nn()){case 42:case 47:Eo(Iv(Ov(xt(),ll()),t,n),d);break;default:P+="/"}break;case 123*b:u[m++]=Gt(P)*g;case 125*b:case 59:case 0:switch(f){case 0:case 125:z=0;case 59+y:g==-1&&(P=fe(P,/\f/g,"")),_>0&&Gt(P)-v&&Eo(_>32?ah(P+";",r,n,v-1):ah(fe(P," ","")+";",r,n,v-2),d);break;case 59:P+=";";default:if(Eo(N=lh(P,t,n,m,y,i,u,x,k=[],$=[],v),o),f===123)if(y===0)cl(P,t,N,N,k,o,v,u,$);else switch(w===99&&Ze(P,3)===110?100:w){case 100:case 108:case 109:case 115:cl(e,N,N,r&&Eo(lh(e,N,N,0,0,i,u,x,i,k=[],v),$),i,$,v,u,r?k:$);break;default:cl(P,N,N,N,[""],$,0,u,$)}}m=y=_=0,b=g=1,x=P="",v=l;break;case 58:v=1+Gt(P),_=C;default:if(b<1){if(f==123)--b;else if(f==125&&b++==0&&Dv()==125)continue}switch(P+=ca(f),f*b){case 38:g=y>0?1:(P+="\f",-1);break;case 44:u[m++]=(Gt(P)-1)*g,g=1;break;case 64:nn()===45&&(P+=al(xt())),w=nn(),y=v=Gt(x=P+=Rv(ll())),f++;break;case 45:C===45&&Gt(P)==2&&(b=0)}}return o}function lh(e,t,n,r,i,o,l,u,d,m,y){for(var v=i-1,w=i===0?o:[""],_=ef(w),C=0,b=0,z=0;C<r;++C)for(var g=0,f=Us(e,v+1,v=Ev(b=l[C])),x=e;g<_;++g)(x=Bg(b>0?w[g]+" "+f:fe(f,/&\f/g,w[g])))&&(d[z++]=x);return da(e,t,n,i===0?qd:u,d,m,y)}function Iv(e,t,n){return da(e,t,n,Ag,ca(Pv()),Us(e,2,-2),0)}function ah(e,t,n,r){return da(e,t,n,Md,Us(e,0,r),Us(e,r+1,-1),r)}function mi(e,t){for(var n="",r=ef(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Bv(e,t,n,r){switch(e.type){case _v:if(e.children.length)break;case $v:case Md:return e.return=e.return||e.value;case Ag:return"";case Ig:return e.return=e.value+"{"+mi(e.children,r)+"}";case qd:e.value=e.props.join(",")}return Gt(n=mi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Fv(e){var t=ef(e);return function(n,r,i,o){for(var l="",u=0;u<t;u++)l+=e[u](n,r,i,o)||"";return l}}function Uv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Hv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Wv=function(t,n,r){for(var i=0,o=0;i=o,o=nn(),i===38&&o===12&&(n[r]=1),!Hs(o);)xt();return to(t,mt)},Vv=function(t,n){var r=-1,i=44;do switch(Hs(i)){case 0:i===38&&nn()===12&&(n[r]=1),t[r]+=Wv(mt-1,n,r);break;case 2:t[r]+=al(i);break;case 4:if(i===44){t[++r]=nn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ca(i)}while(i=xt());return t},Yv=function(t,n){return Hg(Vv(Ug(t),n))},ch=new WeakMap,Qv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ch.get(r))&&!i){ch.set(t,!0);for(var o=[],l=Yv(n,o),u=r.props,d=0,m=0;d<l.length;d++)for(var y=0;y<u.length;y++,m++)t.props[m]=o[d]?l[d].replace(/&\f/g,u[y]):u[y]+" "+l[d]}}},Kv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Wg(e,t){switch(Lv(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+jl+e+Me+e+e;case 6828:case 4268:return de+e+Me+e+e;case 6165:return de+e+Me+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+Me+"flex-$1$2")+e;case 5443:return de+e+Me+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+Me+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+Me+fe(e,"shrink","negative")+e;case 5292:return de+e+Me+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+Me+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+Me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(e)-1-t>6)switch(Ze(e,t+1)){case 109:if(Ze(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+jl+(Ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gu(e,"stretch")?Wg(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ze(e,t+1)!==115)break;case 6444:switch(Ze(e,Gt(e)-3-(~Gu(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(Ze(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+Me+"$2box$3")+e}break;case 5936:switch(Ze(e,t+11)){case 114:return de+e+Me+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+Me+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+Me+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+Me+e+e}return e}var Zv=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Md:t.return=Wg(t.value,t.length);break;case Ig:return mi([Gi(t,{value:fe(t.value,"@","@"+de)})],i);case qd:if(t.length)return zv(t.props,function(o){switch(Nv(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mi([Gi(t,{props:[fe(o,/:(read-\w+)/,":"+jl+"$1")]})],i);case"::placeholder":return mi([Gi(t,{props:[fe(o,/:(plac\w+)/,":"+de+"input-$1")]}),Gi(t,{props:[fe(o,/:(plac\w+)/,":"+jl+"$1")]}),Gi(t,{props:[fe(o,/:(plac\w+)/,Me+"input-$1")]})],i)}return""})}},Jv=[Zv],Gv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(b){var z=b.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var i=t.stylisPlugins||Jv,o={},l,u=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var z=b.getAttribute("data-emotion").split(" "),g=1;g<z.length;g++)o[z[g]]=!0;u.push(b)});var d,m=[Qv,Kv];{var y,v=[Bv,Uv(function(b){y.insert(b)})],w=Fv(m.concat(i,v)),_=function(z){return mi(Av(z),w)};d=function(z,g,f,x){y=f,_(z?z+"{"+g.styles+"}":g.styles),x&&(C.inserted[g.name]=!0)}}var C={key:n,sheet:new Cv({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:d};return C.sheet.hydrate(u),C},Vg={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=typeof Symbol=="function"&&Symbol.for,tf=Ve?Symbol.for("react.element"):60103,nf=Ve?Symbol.for("react.portal"):60106,fa=Ve?Symbol.for("react.fragment"):60107,pa=Ve?Symbol.for("react.strict_mode"):60108,ha=Ve?Symbol.for("react.profiler"):60114,ma=Ve?Symbol.for("react.provider"):60109,ga=Ve?Symbol.for("react.context"):60110,rf=Ve?Symbol.for("react.async_mode"):60111,ya=Ve?Symbol.for("react.concurrent_mode"):60111,va=Ve?Symbol.for("react.forward_ref"):60112,wa=Ve?Symbol.for("react.suspense"):60113,Xv=Ve?Symbol.for("react.suspense_list"):60120,xa=Ve?Symbol.for("react.memo"):60115,ba=Ve?Symbol.for("react.lazy"):60116,qv=Ve?Symbol.for("react.block"):60121,Mv=Ve?Symbol.for("react.fundamental"):60117,ew=Ve?Symbol.for("react.responder"):60118,tw=Ve?Symbol.for("react.scope"):60119;function $t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tf:switch(e=e.type,e){case rf:case ya:case fa:case ha:case pa:case wa:return e;default:switch(e=e&&e.$$typeof,e){case ga:case va:case ba:case xa:case ma:return e;default:return t}}case nf:return t}}}function Yg(e){return $t(e)===ya}me.AsyncMode=rf;me.ConcurrentMode=ya;me.ContextConsumer=ga;me.ContextProvider=ma;me.Element=tf;me.ForwardRef=va;me.Fragment=fa;me.Lazy=ba;me.Memo=xa;me.Portal=nf;me.Profiler=ha;me.StrictMode=pa;me.Suspense=wa;me.isAsyncMode=function(e){return Yg(e)||$t(e)===rf};me.isConcurrentMode=Yg;me.isContextConsumer=function(e){return $t(e)===ga};me.isContextProvider=function(e){return $t(e)===ma};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tf};me.isForwardRef=function(e){return $t(e)===va};me.isFragment=function(e){return $t(e)===fa};me.isLazy=function(e){return $t(e)===ba};me.isMemo=function(e){return $t(e)===xa};me.isPortal=function(e){return $t(e)===nf};me.isProfiler=function(e){return $t(e)===ha};me.isStrictMode=function(e){return $t(e)===pa};me.isSuspense=function(e){return $t(e)===wa};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fa||e===ya||e===ha||e===pa||e===wa||e===Xv||typeof e=="object"&&e!==null&&(e.$$typeof===ba||e.$$typeof===xa||e.$$typeof===ma||e.$$typeof===ga||e.$$typeof===va||e.$$typeof===Mv||e.$$typeof===ew||e.$$typeof===tw||e.$$typeof===qv)};me.typeOf=$t;Vg.exports=me;var nw=Vg.exports,Qg=nw,rw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},iw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kg={};Kg[Qg.ForwardRef]=rw;Kg[Qg.Memo]=iw;var sw=!0;function ow(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var Zg=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||sw===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},lw=function(t,n,r){Zg(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function aw(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var cw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uw=/[A-Z]|^ms/g,dw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Jg=function(t){return t.charCodeAt(1)===45},uh=function(t){return t!=null&&typeof t!="boolean"},rc=Hv(function(e){return Jg(e)?e:e.replace(uw,"-$&").toLowerCase()}),dh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(dw,function(r,i,o){return Xt={name:i,styles:o,next:Xt},i})}return cw[t]!==1&&!Jg(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ws(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Xt={name:i.name,styles:i.styles,next:Xt},i.name;var o=n;if(o.styles!==void 0){var l=o.next;if(l!==void 0)for(;l!==void 0;)Xt={name:l.name,styles:l.styles,next:Xt},l=l.next;var u=o.styles+";";return u}return fw(e,t,n)}case"function":{if(e!==void 0){var d=Xt,m=n(e);return Xt=d,Ws(e,t,m)}break}}var y=n;return y}function fw(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ws(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object"){var u=l;uh(u)&&(r+=rc(o)+":"+dh(o,u)+";")}else if(Array.isArray(l)&&typeof l[0]=="string"&&t==null)for(var d=0;d<l.length;d++)uh(l[d])&&(r+=rc(o)+":"+dh(o,l[d])+";");else{var m=Ws(e,t,l);switch(o){case"animation":case"animationName":{r+=rc(o)+":"+m+";";break}default:r+=o+"{"+m+"}"}}}return r}var fh=/label:\s*([^\s;{]+)\s*(;|$)/g,Xt;function Gg(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";Xt=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=Ws(n,t,o);else{var l=o;i+=l[0]}for(var u=1;u<e.length;u++)if(i+=Ws(n,t,e[u]),r){var d=o;i+=d[u]}fh.lastIndex=0;for(var m="",y;(y=fh.exec(i))!==null;)m+="-"+y[1];var v=aw(i)+m;return{name:v,styles:i,next:Xt}}var pw=function(t){return t()},hw=eu.useInsertionEffect?eu.useInsertionEffect:!1,mw=hw||pw,Xg=h.createContext(typeof HTMLElement<"u"?Gv({key:"css"}):null);Xg.Provider;var gw=function(t){return h.forwardRef(function(n,r){var i=h.useContext(Xg);return t(n,i,r)})},yw=h.createContext({}),no={}.hasOwnProperty,qu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",sf=function(t,n){var r={};for(var i in n)no.call(n,i)&&(r[i]=n[i]);return r[qu]=t,r},vw=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Zg(n,r,i),mw(function(){return lw(n,r,i)}),null},ww=gw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[qu],o=[r],l="";typeof e.className=="string"?l=ow(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var u=Gg(o,void 0,h.useContext(yw));l+=t.key+"-"+u.name;var d={};for(var m in e)no.call(e,m)&&m!=="css"&&m!==qu&&(d[m]=e[m]);return d.className=l,n&&(d.ref=n),h.createElement(h.Fragment,null,h.createElement(vw,{cache:t,serialized:u,isStringTag:typeof i=="string"}),h.createElement(i,d))}),of=ww,zt=Ie.Fragment,s=function(t,n,r){return no.call(n,"css")?Ie.jsx(of,sf(t,n),r):Ie.jsx(t,n,r)},a=function(t,n,r){return no.call(n,"css")?Ie.jsxs(of,sf(t,n),r):Ie.jsxs(t,n,r)},ph=function(t,n){var r=arguments;if(n==null||!no.call(n,"css"))return h.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=of,o[1]=sf(t,n);for(var l=2;l<i;l++)o[l]=r[l];return h.createElement.apply(null,o)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(ph||(ph={}));function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Gg(t)}const xw="/strack/".replace(/\/$/,""),bw=e=>c`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`,Sw=e=>c`
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
`,Cw=c`
  position: relative;
  z-index: 1;
  max-width: 28rem;
`,$w=e=>c`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${e?"#f8fafc":"#0f172a"};
`,_w=e=>c`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${e?"rgba(226, 232, 240, 0.78)":"rgba(15, 23, 42, 0.72)"};
  max-width: 22rem;
`,Ew=e=>c`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  background: ${e?"#0f0f0f":"#f4f4f5"};
`,kw=e=>c`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: ${e?"#1c1c1e":"#ffffff"};
  box-shadow: ${e?"0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)":"0 20px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)"};
`,Lw=e=>c`
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
  margin-bottom: 0.35rem;
`,Nw=e=>c`
  font-size: 0.9rem;
  color: ${e?"#a1a1aa":"#64748b"};
  margin-bottom: 1.5rem;
`,zw=c`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,hh=e=>c`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${e?"#e4e4e7":"#374151"};
  margin-bottom: 0.4rem;
`,qg=e=>c`
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
`,Pw=c`
  position: relative;
  display: flex;
  align-items: center;
`,Dw=e=>c`
  ${qg(e)};
  padding-right: 2.75rem;
`,Tw=e=>c`
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
`,jw=e=>c`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${e?"#fca5a5":"#b91c1c"};
  background: ${e?"rgba(127, 29, 29, 0.25)":"#fef2f2"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.35)":"#fecaca"};
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
`,Ow=c`
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
`,Rw=e=>c`
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
`,Aw=c`
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
`,Iw=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),Bw=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),Fw=()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Uw=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function Hw(e){return e?{message:"The server did not return JSON. Open the site at …/strack/ and ensure backend/login.php is deployed."}:{message:null}}function Ww({darkMode:e,onToggleDarkMode:t}){const n=eo(),[r,i]=h.useState(""),[o,l]=h.useState(""),[u,d]=h.useState(!1),[m,y]=h.useState(""),[v,w]=h.useState(!1),_=async C=>{if(C.preventDefault(),y(""),!r.trim()){y("Enter your university email address.");return}if(!o){y("Enter your password.");return}w(!0);const b=`${xw}/backend/login.php`;try{const g=await(await fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.trim(),password:o})})).text();let f,x=!1;try{f=JSON.parse(g)}catch{x=!0,f={}}const k=Hw(x);if(k.message){y(k.message);return}if(f.success){const $=f.user||{},N=$.role||"student",P=N==="admin"?"/admin":N==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify($))}catch{}n(P,{replace:!0});return}y(f.message||"Invalid email or password.")}catch{y(`Cannot reach ${b}. On NUWebSpace use your full /strack/ URL; locally run PHP and the Vite dev server with the proxy enabled.`)}finally{w(!1)}};return a("div",{css:bw(),children:[s("button",{type:"button",css:Rw(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(Bw,{}):s(Iw,{})}),s("section",{css:Sw(e),"aria-hidden":"false",children:a("div",{css:Cw,children:[s("h1",{css:$w(e),children:"Strack"}),s("p",{css:_w(e),children:"Sign in to track attendance, engagement, and performance in one place."})]})}),s("section",{css:Ew(e),children:a("div",{css:kw(e),children:[s("h2",{css:Lw(e),children:"Sign in"}),s("p",{css:Nw(e),children:"Use the email and password from your administrator or module leader."}),a("form",{css:zw,onSubmit:_,noValidate:!0,children:[a("div",{children:[s("label",{css:hh(e),htmlFor:"strack-email",children:"Email"}),s("input",{id:"strack-email",css:qg(e),type:"email",autoComplete:"username",inputMode:"email",placeholder:"you@uni.ac.uk",value:r,onChange:C=>i(C.target.value),disabled:v})]}),a("div",{children:[s("label",{css:hh(e),htmlFor:"strack-password",children:"Password"}),a("div",{css:Pw,children:[s("input",{id:"strack-password",css:Dw(e),type:u?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:o,onChange:C=>l(C.target.value),disabled:v}),s("button",{type:"button",css:Tw(e),onClick:()=>d(C=>!C),"aria-label":u?"Hide password":"Show password",tabIndex:-1,children:u?s(Uw,{}):s(Fw,{})})]})]}),m?s("div",{role:"alert",css:jw(e),children:m}):null,s("button",{type:"submit",css:Ow,disabled:v,children:v?a(zt,{children:[s("span",{css:Aw,"aria-hidden":!0}),"Signing in…"]}):"Sign in"})]})]})})]})}var Mg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mh=hn.createContext&&hn.createContext(Mg),Vw=["attr","size","title"];function Yw(e,t){if(e==null)return{};var n,r,i=Qw(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Qw(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ol(){return Ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ol.apply(null,arguments)}function gh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gh(Object(n),!0).forEach(function(r){Kw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kw(e,t,n){return(t=Zw(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zw(e){var t=Jw(e,"string");return typeof t=="symbol"?t:t+""}function Jw(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function e1(e){return e&&e.map((t,n)=>hn.createElement(t.tag,Rl({key:n},t.attr),e1(t.child)))}function M(e){return t=>hn.createElement(Gw,Ol({attr:Rl({},e.attr)},t),e1(e.child))}function Gw(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=Yw(e,Vw),u=i||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),hn.createElement("svg",Ol({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:d,style:Rl(Rl({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&hn.createElement("title",null,o),e.children)};return mh!==void 0?hn.createElement(mh.Consumer,null,n=>t(n)):t(Mg)}function Te(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function Xw(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function qw(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function Mw(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"},child:[]}]})(e)}function $r(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function On(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function lf(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"},child:[]}]})(e)}function lr(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function $i(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function Sa(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function Ca(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function Al(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function t1(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"},child:[]}]})(e)}function n1(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"},child:[]}]})(e)}function Pn(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function _i(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function Vn(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"},child:[]}]})(e)}function Xi(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function ex(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"},child:[]}]})(e)}function tx(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"},child:[]}]})(e)}function nx(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.625 11.505v8.25a1.5 1.5 0 0 1-1.5 1.5H4.875a1.5 1.5 0 0 1-1.5-1.5v-8.25m8.25-6.375A2.625 2.625 0 1 0 9 7.755h2.625m0-2.625v2.625m0-2.625a2.625 2.625 0 1 1 2.625 2.625h-2.625m0 0v13.5M3 11.505h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.622-.504-1.125-1.125-1.125H3c-.621 0-1.125.503-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function ic(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]}]})(e)}function sc(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"},child:[]}]})(e)}function af(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"},child:[]}]})(e)}function _r(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"},child:[]}]})(e)}function tt(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function rx(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function cf(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"},child:[]}]})(e)}function uf(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"},child:[]}]})(e)}function ix(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function df(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function gn(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function sx(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"},child:[]}]})(e)}function us(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function ox(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"},child:[]}]})(e)}function sn(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function lx(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"},child:[]}]})(e)}function ff(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},child:[]}]})(e)}function ax(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"},child:[]}]})(e)}function pf(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function r1(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"},child:[]}]})(e)}function Vs(e){return M({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const cx="/strack/".replace(/\/$/,""),Pi="#6366f1",ux=[{id:"food_drink",title:"Food & drink vouchers",description:"£15 credit for campus cafés and selected partner outlets.",cost:300,category:"vouchers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80&auto=format&fit=crop"},{id:"discount_local",title:"Local business discount codes",description:"Exclusive codes for shops and services near campus.",cost:400,category:"vouchers",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop"},{id:"digital_custom",title:"Digital customisation items",description:"Wallpapers, icons, and profile themes for your Strack account.",cost:250,category:"merchandise",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80&auto=format&fit=crop"},{id:"uni_merch",title:"University merchandise",description:"Hoodie, bottle, or cap from the official union store.",cost:550,category:"merchandise",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&q=80&auto=format&fit=crop"},{id:"recognition",title:"Recognition",description:"Certificate of achievement and spotlight on the leaderboard.",cost:200,category:"recognition",image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=80&auto=format&fit=crop"},{id:"print_credits",title:"Print credits",description:"500 mono pages or equivalent colour printing.",cost:150,category:"credits",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop"},{id:"charity",title:"Charity donations",description:"We donate £5 to your chosen university charity partner.",cost:350,category:"charity",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"},{id:"priority_booking",title:"Priority booking",description:"Register for modules and events one day before general release.",cost:800,category:"privileges",image:"https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80&auto=format&fit=crop"}];function dx(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t=n=>Array.from({length:n},()=>e[Math.floor(Math.random()*e.length)]).join("");return`STR-${t(4)}-${t(4)}`}function i1(e){return`strack_redeemed_${(e||"").toLowerCase()}`}function fx(e){try{const t=localStorage.getItem(i1(e));if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function yh(e,t){try{localStorage.setItem(i1(e),JSON.stringify(t))}catch{}}const px=e=>c`
  max-width: 1120px;
  margin: 0 auto;
  color: ${e?"#f3f4f6":"#111827"};
`,hx=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,mx=c`
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
`,gx=e=>c`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  background: ${e?"#1f2937":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  box-shadow: ${e?"none":"0 4px 14px rgba(15, 23, 42, 0.06)"};
  min-width: 160px;
`,yx=c`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,vx=c`
  font-size: 1.65rem;
  font-weight: 800;
  font-family: inherit;
  color: ${Pi};
  letter-spacing: -0.02em;
`,wx=c`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Pi};
  flex-shrink: 0;
  svg {
    width: 22px;
    height: 22px;
  }
`,vh=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${e?"none":"0 8px 30px rgba(15, 23, 42, 0.06)"};
`,wh=c`
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
    color: ${Pi};
  }
`,xx=c`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,bx=e=>c`
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
`,Sx=c`
  aspect-ratio: 16 / 10;
  background: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Cx=c`
  padding: 0.9rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`,$x=c`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`,_x=c`
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.45;
  flex: 1;
`,Ex=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,kx=c`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${Pi};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,Lx=e=>c`
  font-size: 0.7rem;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#1f2937":"#ffffff"};
  text-transform: lowercase;
`,Nx=c`
  width: 100%;
  margin-top: 0.65rem;
  padding: 0.65rem 0.9rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  background: ${Pi};
  color: #ffffff;
  transition: filter 0.15s ease, opacity 0.15s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,zx=e=>c`
  min-height: 140px;
  border: 1px dashed ${e?"#4b5563":"#d1d5db"};
  border-radius: 12px;
  padding: 1.25rem;
  font-size: 0.9rem;
  color: #9ca3af;
`,Px=c`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,Dx=e=>c`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  background: ${e?"#1f2937":"#f3f4f6"};
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#374151"};
`,Tx=c`
  flex: 1;
  min-width: 0;
`,jx=c`
  font-weight: 600;
  margin-bottom: 0.35rem;
`,Ox=e=>c`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: ${e?"#a5b4fc":Pi};
  letter-spacing: 0.02em;
`,Rx=c`
  font-weight: 700;
  color: #6b7280;
  white-space: nowrap;
  font-size: 0.82rem;
`,Ax=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,Ix=e=>c`
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
`,Bx=c`
  font-size: 0.85rem;
  color: #b91c1c;
  margin-bottom: 0.75rem;
`,xh=()=>a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":!0,children:[s("circle",{cx:"9",cy:"12",r:"6"}),s("circle",{cx:"15",cy:"12",r:"6"})]});function Fx({darkMode:e,userEmail:t,points:n,onPointsChange:r}){const[i,o]=h.useState([]),[l,u]=h.useState({}),[d,m]=h.useState("");h.useEffect(()=>{t&&o(fx(t))},[t]);const y=()=>{o([]),yh(t,[])},v=async w=>{if(!t){m("Sign in again to redeem rewards.");return}if(n<w.cost){m("Not enough points for this reward.");return}m(""),u(_=>({..._,[w.id]:!0}));try{const C=await(await fetch(`${cx}/backend/redeem_reward.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rewardId:w.id})})).json();if(!C.success){m(C.message||"Could not redeem."),typeof C.points=="number"&&r(C.points);return}r(C.points);const b=[...i,{title:w.title,rewardId:w.id,cost:w.cost,at:new Date().toISOString(),promoCode:dx()}];o(b),yh(t,b)}catch{m("Network error.")}finally{u(_=>({..._,[w.id]:!1}))}};return a("div",{css:px(e),children:[a("div",{css:hx,children:[a("div",{css:mx,children:[s("h1",{children:"Rewards Store"}),s("p",{children:"Redeem your points for exciting rewards"})]}),a("div",{css:gx(e),children:[s("div",{css:wx,children:s(xh,{})}),a("div",{children:[s("div",{css:yx,children:"Your points"}),s("div",{css:vx,children:n})]})]})]}),d?s("div",{css:Bx,role:"alert",children:d}):null,a("div",{css:vh(e),children:[a("div",{css:wh,children:[s(nx,{"aria-hidden":!0}),"Available rewards"]}),s("div",{css:xx,children:ux.map(w=>{const _=!!l[w.id],C=n<w.cost||_;return a("article",{css:bx(e),children:[s("div",{css:Sx,children:s("img",{src:w.image,alt:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",onError:b=>{b.target.style.display="none"}})}),a("div",{css:Cx,children:[s("h2",{css:$x,children:w.title}),s("p",{css:_x,children:w.description}),a("div",{css:Ex,children:[a("span",{css:kx,children:[s(xh,{}),w.cost]}),s("span",{css:Lx(e),children:w.category})]}),s("button",{type:"button",css:Nx,disabled:C,onClick:()=>v(w),children:_?"...":"Redeem"})]})]},w.id)})})]}),a("div",{css:vh(e),children:[a("div",{css:Ax,children:[s("div",{css:wh,children:"My rewards"}),s("button",{type:"button",css:Ix(e),onClick:y,disabled:i.length===0,children:"Clear history"})]}),s("p",{css:c`
            font-size: 0.78rem;
            color: #9ca3af;
            margin: -0.5rem 0 0.85rem;
          `,children:"Demo: each redemption shows a random promo-style code for display only."}),i.length===0?s("div",{css:zx(e),children:"Your redeemed rewards will appear here."}):s("ul",{css:Px,children:i.map((w,_)=>a("li",{css:Dx(e),children:[a("div",{css:Tx,children:[s("div",{css:jx,children:w.title}),w.promoCode?a("div",{css:Ox(e),children:["Promo: ",w.promoCode]}):null]}),a("span",{css:Rx,children:["-",w.cost," pts"]})]},`${w.rewardId}-${_}`))})]}),s("p",{css:c`
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        `,children:"Reward images are from Unsplash (third-party photos)."})]})}const s1=e=>c`
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
`,o1=c`
  margin: 0 0 0.25rem;
  padding: 0 0.1rem;
`,l1=e=>c`
  font-size: clamp(1.5rem, 3.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.45rem;
  color: ${e?"#f9fafb":"#111827"};
`,a1=e=>c`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${e?"#9ca3af":"#6b7280"};
  max-width: 36rem;
`,c1=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.25rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08)"};
`,u1=c`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 1.25rem;
`,d1=c`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  flex: 1;
`,f1=c`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  flex: 1;
`,p1=c`
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
`,h1=c`
  font-size: clamp(1.25rem, 2.8vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
`,Il=e=>c`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.875rem;
  line-height: 1.45;
`,m1=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.35rem;
`,g1=c`
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
`,y1=e=>c`
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
`,v1=c`
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
`,Ux=c`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
`,Hx=c`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`,dr=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 0.95rem 0.85rem;
  color: ${e?"#f3f4f6":"#111827"};
  box-shadow: ${e?"none":"0 1px 2px rgba(15, 23, 42, 0.04)"};
`,fr=c`
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
`,pr=c`
  font-size: 0.68rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  line-height: 1.2;
`,hr=c`
  font-size: 1.45rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
  color: inherit;
  @media (min-width: 480px) {
    font-size: 1.65rem;
  }
`,mr=e=>c`
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.3;
`,hf=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.4rem 1.5rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 28px rgba(15, 23, 42, 0.06)"};
`,mf=e=>c`
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.85rem;
  padding: 0 0 0.65rem;
  border-bottom: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.28)"};
`,w1=c`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1.25rem;
  }
`,ct=c`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`,x1=c`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,Wx=c`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,ut=c`
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
`,Bt=e=>c`
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
`,Ft=c`
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
`,Ut=c`
  flex: 1;
  min-width: 0;
  word-break: break-word;
`,rn=e=>c`
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
`,Bl=e=>c`
  ${rn(e)};
  background: ${e?"#1f2937":"#f3f4f6"};
  color: ${e?"#9ca3af":"#4b5563"};
  cursor: default;
  &:focus {
    border-color: ${e?"#4b5563":"#d1d5db"};
    box-shadow: none;
  }
`,b1=e=>c`
  ${rn(e)};
  min-height: 88px;
  line-height: 1.45;
  resize: vertical;
`,S1=e=>c`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.22)"};
`,Ys=e=>c`
  border: 1px solid ${e?"#6366f1":"#d1d5db"};
  background: ${e?"#6366f1":"#ffffff"};
  color: ${e?"#ffffff":"#374151"};
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
`,gf=e=>c`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(248, 113, 113, 0.12)":"rgba(185, 28, 28, 0.08)"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.25)":"rgba(185, 28, 28, 0.2)"};
  color: ${e?"#fca5a5":"#b91c1c"};
  font-size: 0.8rem;
  line-height: 1.4;
`,Vx=e=>c`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(34, 197, 94, 0.14)":"rgba(22, 163, 74, 0.1)"};
  border: 1px solid ${e?"rgba(74, 222, 128, 0.3)":"rgba(22, 163, 74, 0.25)"};
  color: ${e?"#86efac":"#166534"};
  font-size: 0.8rem;
  line-height: 1.4;
`,Yx=c`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
`,Qx=c`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.15rem;
`,oc=c`
  position: relative;
  width: 100%;
`,lc=e=>c`
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
`,Kx="/strack/".replace(/\/$/,""),Zx="Password updated successfully";function C1({darkMode:e,userEmail:t}){const[n,r]=h.useState(""),[i,o]=h.useState(""),[l,u]=h.useState(""),[d,m]=h.useState(!1),[y,v]=h.useState(!1),[w,_]=h.useState(!1),[C,b]=h.useState(""),[z,g]=h.useState(!1),[f,x]=h.useState(!1),k=()=>{r(""),o(""),u("")},$=async N=>{N.preventDefault(),b(""),g(!1);const P=(t||"").trim();if(!P){b("Email is missing. Please sign in again.");return}if(i!==l){b("New password and confirmation do not match.");return}if(i.length<6){b("New password must be at least 6 characters.");return}if(i===n){b("New password must be different from your current password.");return}x(!0);try{const W=await(await fetch(`${Kx}/backend/change_password.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:P,current_password:n,new_password:i})})).json().catch(()=>({}));W.success?(g(!0),b(Zx),k()):b(W.message||"Could not update password.")}catch{b("Network error. Check your connection and try again.")}finally{x(!1)}};return a("section",{css:hf(e),"aria-labelledby":"password-change-heading",children:[s("h2",{id:"password-change-heading",css:mf(e),children:"Change password"}),s("p",{css:c`
          margin: -0.35rem 0 0.75rem;
          font-size: 0.85rem;
          line-height: 1.45;
          color: ${e?"#9ca3af":"#6b7280"};
        `,children:"Use a strong password you do not use elsewhere."}),a("form",{css:Yx,onSubmit:$,noValidate:!0,children:[a("div",{css:ct,children:[s("label",{css:ut,htmlFor:"pwd-current",children:"Current password"}),a("div",{css:oc,children:[s("input",{id:"pwd-current",type:d?"text":"password",autoComplete:"current-password",css:c`
                ${rn(e)};
                padding-right: 2.75rem;
              `,value:n,onChange:N=>r(N.target.value)}),s("button",{type:"button",css:lc(e),onClick:()=>m(N=>!N),"aria-label":d?"Hide current password":"Show current password","aria-pressed":d,children:d?s(sc,{"aria-hidden":!0}):s(ic,{"aria-hidden":!0})})]})]}),a("div",{css:ct,children:[s("label",{css:ut,htmlFor:"pwd-new",children:"New password"}),a("div",{css:oc,children:[s("input",{id:"pwd-new",type:y?"text":"password",autoComplete:"new-password",css:c`
                ${rn(e)};
                padding-right: 2.75rem;
              `,value:i,onChange:N=>o(N.target.value)}),s("button",{type:"button",css:lc(e),onClick:()=>v(N=>!N),"aria-label":y?"Hide new password":"Show new password","aria-pressed":y,children:y?s(sc,{"aria-hidden":!0}):s(ic,{"aria-hidden":!0})})]})]}),a("div",{css:ct,children:[s("label",{css:ut,htmlFor:"pwd-confirm",children:"Confirm new password"}),a("div",{css:oc,children:[s("input",{id:"pwd-confirm",type:w?"text":"password",autoComplete:"new-password",css:c`
                ${rn(e)};
                padding-right: 2.75rem;
              `,value:l,onChange:N=>u(N.target.value)}),s("button",{type:"button",css:lc(e),onClick:()=>_(N=>!N),"aria-label":w?"Hide password confirmation":"Show password confirmation","aria-pressed":w,children:w?s(sc,{"aria-hidden":!0}):s(ic,{"aria-hidden":!0})})]})]}),s("div",{css:Qx,children:s("button",{type:"submit",disabled:f,css:c`
              ${Ys(!0)};
              &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
              }
            `,children:f?"Updating…":"Update password"})}),C?s("div",{css:z?Vx(e):gf(e),role:"status",children:C}):null]})]})}const ac="/strack",Qs="#6366f1";function _n(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function cc(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function qi(e){if(!e)return"";const[t,n]=e.split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n).padStart(2,"0")} ${i}`}function Jx(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),o=r.getDay(),l=[];for(let u=0;u<o;u++)l.push({type:"pad"});for(let u=1;u<=i.getDate();u++)l.push({type:"day",date:new Date(t,n,u)});for(;l.length%7!==0;)l.push({type:"pad"});return l}const Gx=c`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`,uc=e=>c`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
`,Xx=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`,qx=e=>c`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#f9fafb":"#111827"};
`,bh=e=>c`
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
`,Mx=c`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`,eb=e=>c`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  margin-bottom: 0.1rem;
`,Sh=(e,t,n,r)=>c`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid
    ${t?Qs:n?e?"#a5b4fc":"#c7d2fe":e?"#404040":"#e5e7eb"};
  background: ${t?Qs:r?e?"#1f1f1f":"#fafafa":n?e?"rgba(99,102,241,0.16)":"rgba(99,102,241,0.08)":e?"#262626":"#fff"};
  color: ${t?"#fff":"inherit"};
  padding: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${r?"default":"pointer"};
`,tb=c`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`,nb=e=>c`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${e?"#fff":"#111827"};
  opacity: 0.9;
`,rb=e=>c`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Ch=(e,t)=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-left: 4px solid ${t==="event"?"#ef4444":Qs};
  background: ${e?"#1f1f1f":"#fff"};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
  cursor: pointer;
`,dc=c`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,fc=e=>c`
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
`,ib=c`
  display: grid;
  gap: 1rem;
`,$h=e=>c`
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
    color: ${Qs};
  }
`,sb=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
  background: ${e?"#1f1f1f":"#fff"};
`,ob=e=>c`
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
  color: ${e?"#d1d5db":"#6b7280"};
`,Mi=e=>c`
  margin: 0.25rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
`,lb=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,ab=e=>c`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${e?"#1a1a1a":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  box-shadow: 0 24px 30px -12px rgba(0, 0, 0, 0.25);
`,cb=e=>c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,ub=e=>c`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,db=e=>c`
  border: none;
  background: transparent;
  color: ${e?"#d1d5db":"#4b5563"};
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.05)"};
  }

  svg {
    width: 19px;
    height: 19px;
  }
`,fb=c`
  padding: 1rem 1.1rem 1.2rem;
`,ko=e=>c`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0;
  color: ${e?"#d1d5db":"#4b5563"};
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${e?"#a5b4fc":Qs};
    flex-shrink: 0;
  }
`;function pb({darkMode:e,userEmail:t,studentId:n}){const[r,i]=h.useState(new Date),[o,l]=h.useState([]),[u,d]=h.useState(!0),[m,y]=h.useState(_n(new Date)),[v,w]=h.useState([]),[_,C]=h.useState(""),[b,z]=h.useState(!1),[g,f]=h.useState(null),x=h.useMemo(()=>{const R=new Date;return R.setHours(0,0,0,0),R},[]),k=h.useMemo(()=>{const R=r.getFullYear(),K=r.getMonth();return{from:_n(new Date(R,K,1)),to:_n(new Date(R,K+1,0))}},[r]);h.useEffect(()=>{let R=!0;async function K(){d(!0);try{const D=await(await fetch(`${ac}/backend/timetable.php?from=${encodeURIComponent(k.from)}&to=${encodeURIComponent(k.to)}`)).json();if(!R)return;l(D.success?D.entries||[]:[])}catch{if(!R)return;l([])}finally{R&&d(!1)}}return K(),()=>{R=!1}},[k.from,k.to]),h.useEffect(()=>{let R=!0;async function K(){z(!1);try{const[S,D]=await Promise.all([fetch(`${ac}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ac}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),B=await S.json(),U=await D.json();if(!R)return;const E=B.success?B.students||[]:[],Q=U.success?U.courses||[]:[],te=String(t||"").trim().toLowerCase(),ne=String(n||"").trim().toUpperCase(),oe=E.find(re=>String(re.email||"").trim().toLowerCase()===te)||E.find(re=>String(re.student_id||"").trim().toUpperCase()===ne)||null;if(!oe){w([]),C(""),z(!0);return}C(String(oe.degree||"").trim());const ce=Q.filter(re=>Array.isArray(re.student_ids)&&re.student_ids.map(gt=>Number(gt)).includes(Number(oe.id))).map(re=>Number(re.id)).filter(re=>Number.isFinite(re)&&re>0),Pe=ce.length===0?Q.filter(re=>String(re.department||"").trim()!==""&&String(re.department||"").trim()===String(oe.department||"").trim()).map(re=>Number(re.id)).filter(re=>Number.isFinite(re)&&re>0):[];w(Array.from(new Set(ce.length>0?ce:Pe)))}catch{if(!R)return;w([]),C("")}finally{R&&z(!0)}}return K(),()=>{R=!1}},[t,n]);const $=h.useMemo(()=>{if(!b)return[];const R=new Set((v||[]).map(K=>Number(K)));return o.filter(K=>{if(K.entry_type!=="class")return!0;const S=Number(K.course_id);return!Number.isFinite(S)||S<=0?!1:R.has(S)})},[o,v,b]),N=h.useMemo(()=>{const R={};for(const K of $)R[K.entry_date]||(R[K.entry_date]=[]),R[K.entry_date].push(K);return Object.keys(R).forEach(K=>R[K].sort((S,D)=>S.start_time.localeCompare(D.start_time))),R},[$]),P=h.useMemo(()=>Jx(r),[r]),F=N[m]||[],W=N[_n(x)]||[],V=h.useMemo(()=>$.filter(K=>K.entry_date>_n(x)||K.entry_date===_n(x)&&K.start_time>="00:00:00").sort((K,S)=>`${K.entry_date} ${K.start_time}`.localeCompare(`${S.entry_date} ${S.start_time}`)).slice(0,5),[$,x]),G=r.toLocaleDateString(void 0,{month:"long",year:"numeric"}),A=cc(m).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),O=()=>i(R=>new Date(R.getFullYear(),R.getMonth()-1,1)),j=()=>i(R=>new Date(R.getFullYear(),R.getMonth()+1,1)),Z=()=>f(null);return a("div",{css:Gx,children:[a("div",{css:uc(e),children:[a("div",{css:Xx,children:[s("h2",{css:qx(e),children:G}),a("div",{style:{display:"inline-flex",gap:"0.35rem"},children:[s("button",{type:"button",css:bh(e),onClick:O,"aria-label":"Previous month",children:s(uf,{})}),s("button",{type:"button",css:bh(e),onClick:j,"aria-label":"Next month",children:s(cf,{})})]})]}),a("div",{css:Mx,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(R=>s("div",{css:eb(e),children:R},R)),P.map((R,K)=>{if(R.type==="pad")return s("div",{css:Sh(e,!1,!1,!0)},`pad-${K}`);const S=_n(R.date),D=S===m,B=S===_n(x),U=(N[S]||[]).length>0;return a("div",{role:"button",tabIndex:0,css:Sh(e,D,B,!1),onClick:()=>y(S),onKeyDown:E=>E.key==="Enter"&&y(S),children:[s("div",{css:tb,children:R.date.getDate()}),U?s("div",{css:nb(D)}):s("div",{})]},S)})]}),a("h3",{css:rb(e),children:["Events on ",A]}),_?a("p",{css:Mi(e),style:{marginTop:0,marginBottom:"0.5rem"},children:["Showing timetable for degree: ",_]}):null,u||!b?s("p",{css:Mi(e),children:"Loading events..."}):F.length===0?s("p",{css:Mi(e),children:"No events for this date."}):F.map(R=>s("div",{css:Ch(e,R.entry_type),children:a("button",{type:"button",onClick:()=>f(R),css:c`
                  all: unset;
                  display: block;
                  width: 100%;
                  cursor: pointer;
                `,children:[s("p",{css:dc,children:R.entry_type==="class"?R.course_name||R.course_code:R.event_title}),a("div",{css:fc(e),children:[a("span",{children:[s(tt,{}),qi(R.start_time)]}),(R.room_location||"").trim()?a("span",{children:[s(Vn,{}),R.room_location]}):null]})]})},R.id))]}),a("div",{css:ib,children:[a("div",{css:uc(e),children:[a("h3",{css:$h(e),children:[s(gn,{}),"Today's Schedule"]}),W.length===0?s("p",{css:Mi(e),children:"No classes or events today."}):W.map(R=>s("div",{css:Ch(e,R.entry_type),children:a("button",{type:"button",onClick:()=>f(R),css:c`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `,children:[s("p",{css:dc,children:R.entry_type==="class"?R.course_name||R.course_code:R.event_title}),a("div",{css:fc(e),children:[a("span",{children:[s(tt,{}),qi(R.start_time)]}),(R.room_location||"").trim()?a("span",{children:[s(Vn,{}),R.room_location]}):null]})]})},`today-${R.id}`))]}),a("div",{css:uc(e),children:[a("h3",{css:$h(e),children:[s(tt,{}),"Upcoming"]}),V.length===0?s("p",{css:Mi(e),children:"No upcoming entries."}):V.map(R=>s("div",{css:sb(e),children:a("button",{type:"button",onClick:()=>f(R),css:c`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `,children:[a("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s("strong",{style:{fontSize:"0.92rem"},children:R.entry_type==="class"?R.course_name||R.course_code:R.event_title}),s("span",{css:ob(e),children:R.entry_type==="class"?"Lecture":"Event"})]}),a("div",{css:fc(e),style:{marginTop:"0.25rem"},children:[a("span",{children:[s(gn,{}),cc(R.entry_date).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),a("span",{children:[s(tt,{}),qi(R.start_time)]})]})]})},`up-${R.id}`))]})]}),g?s("div",{css:lb,onClick:Z,children:a("div",{css:ab(e),onClick:R=>R.stopPropagation(),children:[a("div",{css:cb(e),children:[s("h3",{css:ub(e),children:"Event Details"}),s("button",{type:"button",css:db(e),onClick:Z,"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:fb,children:[s("p",{css:dc,style:{marginBottom:"0.45rem"},children:g.entry_type==="class"?g.course_name||g.course_code:g.event_title||"Event"}),a("div",{css:ko(e),children:[s(gn,{}),s("span",{children:cc(g.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})})]}),a("div",{css:ko(e),children:[s(tt,{}),a("span",{children:[qi(g.start_time)," - ",qi(g.end_time)]})]}),a("div",{css:ko(e),children:[s(Vn,{}),s("span",{children:(g.room_location||"").trim()||"Location not specified"})]}),(g.lecturers||[]).length>0?a("div",{css:ko(e),children:[s($r,{}),s("span",{children:g.lecturers.map(R=>R.full_name).join(", ")})]}):null,g.entry_type==="event"&&g.event_description?s("p",{css:c`
                    margin: 0.7rem 0 0;
                    font-size: 0.9rem;
                    line-height: 1.45;
                    color: ${e?"#d1d5db":"#374151"};
                  `,children:g.event_description}):null]})]})}):null]})}const pc=[{id:"assignment-master",name:"Assignment Master",icon:"📝",locked:!0,unlockHint:"Submit all assignments on time for the current term."},{id:"perfect-attendance",name:"Perfect Attendance",icon:"⭐",locked:!0,unlockHint:"Maintain 100% attendance across all scheduled classes."},{id:"first-class-scholar",name:"First Class Scholar",icon:"🎓",locked:!0,unlockHint:"Achieve first-class level grades in your modules."},{id:"extra-mile",name:"Extra Mile",icon:"🚀",locked:!0,unlockHint:"Complete optional academic activities and bonus tasks."},{id:"halfway-hero",name:"Halfway Hero",icon:"🏆",locked:!0,unlockHint:"Reach the midpoint milestone of your degree progression."},{id:"rising-star",name:"Rising Star",icon:"📈",locked:!0,unlockHint:"Show consistent improvement in academic performance."},{id:"peer-champion",name:"Peer Champion",icon:"🤝",locked:!0,unlockHint:"Actively help classmates through peer support activities."},{id:"academic-contributor",name:"Academic Contributor",icon:"✭",locked:!0,unlockHint:"Contribute to extracurricular academic events and initiatives."}],hb=c`
  width: 100%;
`,mb=c`
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
`,gb=e=>c`
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,yb=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#262626":"#fff"};
  padding: 1rem;
`,vb=e=>c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};

  svg {
    width: 18px;
    height: 18px;
    color: #6366f1;
  }
`,wb=c`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.85rem;
`,xb=(e,t)=>c`
  border: 1px dashed ${e?"#3f3f46":"#e5e7eb"};
  border-radius: 12px;
  min-height: 150px;
  padding: 0.9rem 0.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${e?"#1f1f1f":"#fff"};
  opacity: ${t?.55:1};
`,bb=e=>c`
  font-size: 2.85rem;
  line-height: 1;
  margin-bottom: 0.65rem;
  filter: ${e?"grayscale(100%)":"none"};
`,Sb=e=>c`
  margin: 0 0 0.45rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#e5e7eb":"#1f2937"};
`,Cb=e=>c`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};

  svg {
    width: 15px;
    height: 15px;
  }
`,$b=c`
  all: unset;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,_b=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Eb=e=>c`
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
`,kb=e=>c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,Lb=e=>c`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Nb=e=>c`
  border: none;
  background: transparent;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  color: ${e?"#d1d5db":"#4b5563"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,zb=e=>c`
  padding: 1rem;
  color: ${e?"#d1d5db":"#374151"};
  line-height: 1.5;
`;function Pb({darkMode:e}){const[t,n]=h.useState(null),r=pc.filter(i=>!i.locked).length;return a("div",{css:hb,children:[s("h1",{css:mb,children:"Badges"}),s("p",{css:gb(e),children:"Collect badges by achieving academic milestones"}),a("section",{css:yb(e),children:[a("h2",{css:vb(e),children:[s(lf,{}),"All Badges (",r,"/",pc.length,")"]}),s("div",{css:wb,children:pc.map(i=>s("article",{css:xb(e,i.locked),children:a("button",{type:"button",css:$b,onClick:()=>{i.locked&&n(i)},children:[s("div",{css:bb(i.locked),children:i.icon}),s("p",{css:Sb(e),children:i.name}),i.locked?a("div",{css:Cb(e),children:[s(ex,{}),"Locked"]}):null]})},i.id))})]}),t?s("div",{css:_b,onClick:()=>n(null),children:a("div",{css:Eb(e),onClick:i=>i.stopPropagation(),children:[a("div",{css:kb(e),children:[a("h3",{css:Lb(e),children:["How to unlock: ",t.name]}),s("button",{type:"button",css:Nb(e),onClick:()=>n(null),"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:zb(e),children:[a("p",{css:c`margin: 0 0 0.6rem 0;`,children:[s("strong",{children:"Requirement:"})," ",t.unlockHint]}),s("p",{css:c`margin: 0; font-size: 0.88rem; opacity: 0.9;`,children:"Keep progressing in the portal. This badge will unlock once the requirement is met."})]})]})}):null]})}const es="/strack/".replace(/\/$/,""),xs="#6366f1";function hc(e){const[t,n,r]=String(e||"").split("-").map(Number);return new Date(t,(n||1)-1,r||1)}function mc(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Lo(e){if(!e)return"";const[t,n]=String(e).split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n||0).padStart(2,"0")} ${i}`}function Db(e){const t=Number(e)||0;return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/1024/1024).toFixed(1)} MB`}const Tb=c`width: 100%;`,jb=c`margin: 0; font-size: 1.5rem; font-weight: 700; line-height: 1.2;`,lt=e=>c`margin: 0.2rem 0 .9rem; font-size: .95rem; color: ${e?"#9ca3af":"#6b7280"}; line-height: 1.4;`,Ob=c`display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .8rem; margin-bottom: .95rem; @media (max-width:1024px){grid-template-columns: repeat(2,minmax(0,1fr));}`,yf=e=>c`background:${e?"#262626":"#fff"}; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:14px;`,No=e=>c`${yf(e)}; padding:.95rem;`,zo=e=>c`font-size:.78rem; letter-spacing:.03em; font-weight:700; color:${e?"#9ca3af":"#6b7280"}; text-transform: uppercase;`,Po=c`margin:.6rem 0 .15rem; font-size:1.85rem; font-weight:800; line-height:1.1;`,Do=e=>c`margin:0; font-size:.95rem; color:${e?"#9ca3af":"#6b7280"};`,Rb=e=>c`${yf(e)}; padding:.95rem; margin-bottom:.95rem;`,Ab=c`display:flex; align-items:center; gap:.5rem; margin:0 0 .8rem; font-size:1.3rem; font-weight:700;`,Ib=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:12px; padding:.9rem; margin-bottom:.8rem;`,Bb=c`display:flex; align-items:center; gap:.5rem; flex-wrap:wrap;`,gc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:600;`,Fb=c`margin-left:auto; border:1px solid #bbf7d0; color:#059669; background:#ecfdf5; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:700;`,Ub=c`margin:.55rem 0 .2rem; font-size:1.8rem; font-weight:800; line-height:1.2;`,Hb=e=>c`display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:.8rem; margin:.7rem 0 .6rem; font-size:.95rem; color:${e?"#d1d5db":"#374151"}; @media (max-width:900px){grid-template-columns:1fr;}`,Wb=e=>c`height:10px; border-radius:999px; background:${e?"#404040":"#e5e7eb"}; overflow:hidden;`,Vb=e=>c`height:100%; width:${Math.max(0,Math.min(100,e))}%; background:${xs};`,Yb=c`display:flex; gap:.55rem; margin-top:.75rem; flex-wrap:wrap;`,Qb=c`border:none; background:${xs}; color:#fff; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,yc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; background:transparent; color:inherit; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,vc=c`position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem;`,wc=e=>c`${yf(e)}; width:100%; max-width:980px; max-height:90vh; overflow:auto;`,xc=e=>c`display:flex; align-items:start; justify-content:space-between; padding:1rem; border-bottom:1px solid ${e?"#404040":"#e5e7eb"};`,bc=c`margin:0; font-size:1.45rem; font-weight:800;`,Sc=e=>c`margin:.2rem 0 0; color:${e?"#9ca3af":"#6b7280"};`,Cc=e=>c`border:1px solid ${e?"#4b5563":"#d1d5db"}; background:transparent; width:38px; height:38px; border-radius:10px; cursor:pointer;`,$c=c`padding:1rem;`,Kb=e=>c`display:flex; align-items:center; justify-content:space-between; gap:.8rem; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.6rem;`,_c=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`;function Zb({darkMode:e,userEmail:t,studentId:n}){const[r,i]=h.useState([]),[o,l]=h.useState([]),[u,d]=h.useState([]),[m,y]=h.useState(!0),[v,w]=h.useState(null),[_,C]=h.useState(null),[b,z]=h.useState(null),[g,f]=h.useState([]),[x,k]=h.useState(!1),[$,N]=h.useState(""),P=A=>`${es}/backend/course_resources.php?download=1&id=${A}&student_email=${encodeURIComponent(t||"")}`;h.useEffect(()=>{if(!(v!=null&&v.id)||!t){f([]),N("");return}let A=!0;async function O(){k(!0),N("");try{const Z=await(await fetch(`${es}/backend/course_resources.php?course_id=${v.id}&student_email=${encodeURIComponent(t)}`,{cache:"no-store"})).json();if(!A)return;Z.success?f(Z.resources||[]):N(Z.error||"Could not load resources")}catch{A&&N("Network error")}finally{A&&k(!1)}}return O(),()=>{A=!1}},[v==null?void 0:v.id,t]),h.useEffect(()=>{let A=!0;async function O(){y(!0);try{const j=new Date,Z=new Date(j);Z.setMonth(Z.getMonth()-6);const R=new Date(j);R.setMonth(R.getMonth()+6);const[K,S,D]=await Promise.all([fetch(`${es}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${es}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${es}/backend/timetable.php?from=${encodeURIComponent(mc(Z))}&to=${encodeURIComponent(mc(R))}`,{cache:"no-store"})]),B=await K.json(),U=await S.json(),E=await D.json();if(!A)return;i(B.success?B.courses||[]:[]),l(U.success?U.students||[]:[]),d(E.success?E.entries||[]:[])}catch{if(!A)return;i([]),l([]),d([])}finally{A&&y(!1)}}return O(),()=>{A=!1}},[]);const F=h.useMemo(()=>{const A=String(t||"").trim().toLowerCase(),O=String(n||"").trim().toUpperCase();return o.find(j=>String(j.email||"").trim().toLowerCase()===A)||o.find(j=>String(j.student_id||"").trim().toUpperCase()===O)||null},[o,t,n]),W=h.useMemo(()=>{if(!F)return[];const A=r.filter(O=>Array.isArray(O.student_ids)&&O.student_ids.map(Number).includes(Number(F.id)));return A.length>0?A:r.filter(O=>(O.department||"")===(F.department||""))},[r,F]),V=h.useMemo(()=>{const A=mc(new Date);return W.map(O=>{const j=Number(O.id),Z=u.filter(U=>U.entry_type==="class"&&Number(U.course_id)===j).sort((U,E)=>`${U.entry_date} ${U.start_time}`.localeCompare(`${E.entry_date} ${E.start_time}`)),R=u.filter(U=>U.entry_type==="event"&&Number(U.course_id)===j).sort((U,E)=>`${U.entry_date} ${U.start_time}`.localeCompare(`${E.entry_date} ${E.start_time}`)).map(U=>{let E="Not Started";return U.entry_date<A?E="Completed":U.entry_date===A&&(E="In Progress"),{id:U.id,title:U.event_title||"Assignment",description:U.event_description||"No description provided.",due:U.entry_date,dueTime:U.start_time,status:E}}),K=R.filter(U=>U.status==="Completed").length,S=R.length?Math.round(K/R.length*100):0,D=Z.find(U=>U.entry_date>=A)||null,B=Number(O.enrolled_count)||(Array.isArray(O.students)?O.students.length:0);return{...O,meta:{instructor:O.lecturer_name||"TBA",enrolled:B,description:`You are enrolled in ${O.course_name} (${O.course_code}) in ${O.department||"General"}.`,classes:Z,assignments:R,completedAssignments:K,nextLecture:D?`${hc(D.entry_date).toLocaleDateString(void 0,{weekday:"short"})} ${Lo(D.start_time)}`:"No upcoming session",progress:S}}})},[W,u]),G=h.useMemo(()=>{const A=V.length,O=V.reduce((K,S)=>K+(Number(S.credits)||0),0),j=A?Math.round(V.reduce((K,S)=>K+S.meta.progress,0)/A):0,Z=V.reduce((K,S)=>K+S.meta.completedAssignments,0),R=V.reduce((K,S)=>K+S.meta.assignments.length,0);return{totalCourses:A,totalCredits:O,avgProgress:j,completed:Z,totalAssignments:R}},[V]);return a("div",{css:Tb,children:[s("h1",{css:jb,children:"My Courses"}),s("p",{css:lt(e),children:"Modules you take, timetable sessions, and assignment due dates"}),a("div",{css:Ob,children:[a("div",{css:No(e),children:[s("p",{css:zo(e),children:"Total Courses"}),s("p",{css:Po,children:G.totalCourses}),s("p",{css:Do(e),children:"Active enrollments"})]}),a("div",{css:No(e),children:[s("p",{css:zo(e),children:"Total Credits"}),s("p",{css:Po,children:G.totalCredits}),s("p",{css:Do(e),children:"Credit hours"})]}),a("div",{css:No(e),children:[s("p",{css:zo(e),children:"Timeline"}),a("p",{css:Po,children:[G.avgProgress,"%"]}),s("p",{css:Do(e),children:"Assignments completed"})]}),a("div",{css:No(e),children:[s("p",{css:zo(e),children:"Due dates"}),a("p",{css:Po,children:[G.completed,"/",G.totalAssignments]}),s("p",{css:Do(e),children:"Completed / total"})]})]}),a("section",{css:Rb(e),children:[a("h2",{css:Ab,children:[s(sn,{style:{color:xs,width:24,height:24}}),"Active Courses"]}),m?s("p",{children:"Loading courses..."}):V.length===0?s("p",{children:"No enrolled courses found."}):V.map(A=>a("article",{css:Ib(e),children:[a("div",{css:Bb,children:[s("span",{css:gc(e),children:A.course_code}),a("span",{css:gc(e),children:[Number(A.credits)||0," Credits"]}),s("span",{css:Fb,children:"Active"})]}),s("h3",{css:Ub,children:A.course_name}),s("p",{css:lt(e),style:{marginBottom:".4rem"},children:A.department||"General"}),a("div",{css:Hb(e),children:[a("span",{children:[s(On,{})," Students: ",s("strong",{children:A.meta.enrolled})]}),a("span",{children:[s(tt,{})," Next: ",s("strong",{children:A.meta.nextLecture})]}),a("span",{children:[s(_r,{})," Assignments: ",a("strong",{children:[A.meta.completedAssignments,"/",A.meta.assignments.length]})," ","done"]})]}),a("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".3rem"},children:[s("span",{css:lt(e),style:{margin:0},children:"Assignment timeline"}),a("strong",{children:[A.meta.progress,"%"]})]}),s("div",{css:Wb(e),children:s("div",{css:Vb(A.meta.progress)})}),a("div",{css:Yb,children:[s("button",{type:"button",css:Qb,onClick:()=>z(A),children:"View Course"}),s("button",{type:"button",css:yc(e),onClick:()=>w(A),children:"Resources"}),s("button",{type:"button",css:yc(e),onClick:()=>C(A),children:"Assignments"})]})]},A.id))]}),v?s("div",{css:vc,onClick:()=>w(null),children:a("div",{css:wc(e),onClick:A=>A.stopPropagation(),children:[a("div",{css:xc(e),children:[a("div",{children:[s("h3",{css:bc,children:"Course Resources"}),a("p",{css:Sc(e),children:["Materials for ",v.course_name]})]}),s("button",{type:"button",css:Cc(e),onClick:()=>w(null),children:s(Te,{})})]}),a("div",{css:$c,children:[$?s("p",{style:{color:"#dc2626",margin:"0 0 .75rem",fontSize:".9rem"},children:$}):null,x?s("p",{css:lt(e),style:{margin:0},children:"Loading resources…"}):g.length===0?s("p",{css:lt(e),style:{margin:0},children:"No files uploaded for this course yet."}):g.map(A=>a("div",{css:Kb(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".75rem",minWidth:0},children:[s("span",{style:{width:42,height:42,borderRadius:8,background:"#eef2ff",display:"inline-flex",alignItems:"center",justifyContent:"center",color:xs,flexShrink:0},children:s(_r,{})}),a("div",{style:{minWidth:0},children:[s("strong",{style:{wordBreak:"break-word"},children:A.original_filename}),a("p",{css:lt(e),style:{margin:".1rem 0 0"},children:[Db(A.file_size),A.created_at?` · ${new Date(A.created_at.replace(" ","T")).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}`:""]})]})]}),a("a",{href:P(A.id),css:yc(e),style:{textDecoration:"none",flexShrink:0},children:[s(r1,{})," Download"]})]},A.id))]})]})}):null,_?s("div",{css:vc,onClick:()=>C(null),children:a("div",{css:wc(e),onClick:A=>A.stopPropagation(),children:[a("div",{css:xc(e),children:[a("div",{children:[s("h3",{css:bc,children:"Course Assignments"}),a("p",{css:Sc(e),children:["Due dates for ",_.course_name]})]}),s("button",{type:"button",css:Cc(e),onClick:()=>C(null),children:s(Te,{})})]}),s("div",{css:$c,children:_.meta.assignments.length===0?s("p",{css:lt(e),style:{margin:0},children:"No assignment due dates found for this course yet."}):_.meta.assignments.map((A,O)=>a("div",{css:_c(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".6rem",flexWrap:"wrap"},children:[s("h4",{style:{margin:0,fontSize:"1.5rem",fontWeight:800},children:A.title}),s("span",{css:gc(e),style:{color:A.status==="Completed"?"#059669":A.status==="In Progress"?"#ca8a04":"#2563eb",borderColor:A.status==="Completed"?"#86efac":A.status==="In Progress"?"#fde68a":"#bfdbfe",background:A.status==="Completed"?"#ecfdf5":A.status==="In Progress"?"#fffbeb":"#eff6ff"},children:A.status})]}),s("p",{css:lt(e),style:{marginTop:".3rem"},children:A.description}),a("p",{css:lt(e),style:{marginTop:".15rem"},children:["Due: ",hc(A.due).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),A.dueTime?` · Time: ${Lo(A.dueTime)}`:""]})]},`${A.title}-${O}`))})]})}):null,b?s("div",{css:vc,onClick:()=>z(null),children:a("div",{css:wc(e),onClick:A=>A.stopPropagation(),children:[a("div",{css:xc(e),children:[a("div",{children:[s("h3",{css:bc,children:b.course_name}),a("p",{css:Sc(e),children:[b.course_code," · ",Number(b.credits)||0," Credits · ",b.department||"General"]})]}),s("button",{type:"button",css:Cc(e),onClick:()=>z(null),children:s(Te,{})})]}),a("div",{css:$c,children:[s("h4",{style:{margin:0,fontSize:"1.8rem"},children:"Overview"}),s("p",{css:lt(e),children:b.meta.description}),a("p",{css:lt(e),style:{marginTop:".35rem"},children:[s("strong",{children:"Instructor:"})," ",b.meta.instructor]}),s("h4",{style:{margin:"0.75rem 0 .45rem 0",fontSize:"1.8rem"},children:"Scheduled Sessions"}),s("div",{children:b.meta.classes.length===0?s("p",{css:lt(e),style:{margin:0},children:"No scheduled classes found in timetable."}):b.meta.classes.map((A,O)=>a("div",{style:{display:"grid",gridTemplateColumns:"28px 1fr",gap:".5rem",padding:".5rem .6rem",borderBottom:`1px solid ${e?"#303030":"#f3f4f6"}`},children:[a("strong",{style:{color:xs},children:[O+1,"."]}),a("span",{children:[hc(A.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})," ·"," ",Lo(A.start_time),"-",Lo(A.end_time),A.room_location?` · ${A.room_location}`:""]})]},`${A.id}-${O}`))}),s("h4",{style:{margin:".8rem 0 .45rem 0",fontSize:"1.8rem"},children:"Course Information"}),a("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".8rem"},children:[a("div",{css:_c(e),children:[s("p",{css:lt(e),style:{margin:0},children:"Enrolled students"}),s("strong",{children:b.meta.enrolled})]}),a("div",{css:_c(e),children:[s("p",{css:lt(e),style:{margin:0},children:"Next session"}),s("strong",{children:b.meta.nextLecture})]})]})]})]})}):null]})}const Jb="/strack/".replace(/\/$/,""),Fl="#6366f1";function Gb(e){const t=Number(e);return Number.isFinite(t)?String(Math.round(Math.min(100,Math.max(0,t)))):"0"}const Xb=c`
  width: 100%;
  max-width: 100%;
`,qb=c`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
`,Rr=e=>c`
  margin: 0.35rem 0 0;
  font-size: 0.95rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.45;
`,Mb=e=>c`
  height: 1px;
  background: ${e?"#404040":"#e5e7eb"};
  margin: 1rem 0 1.1rem;
  border: none;
`,e4=e=>c`
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
  padding: 0.2rem;
  border-radius: 10px;
  background: ${e?"#1f1f1f":"#f3f4f6"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
`,_h=(e,t)=>c`
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 0.55rem 0.75rem;
  font-size: 0.88rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${t?e?"#4f46e5":Fl:"transparent"};
  color: ${t?"#fff":e?"#d1d5db":"#374151"};
  &:hover {
    color: ${t?"#fff":Fl};
  }
`,t4=e=>c`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 1rem 0.85rem;
  box-shadow: ${e?"none":"0 1px 2px rgba(0,0,0,0.04)"};
`,n4=c`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.85rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: inherit;
`,r4=c`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-bottom: 0.35rem;
`,i4=(e,t,n)=>c`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.95rem;
  flex-shrink: 0;
  background: ${t===1?e?"rgba(251, 146, 60, 0.2)":"#ffedd5":n?e?"rgba(99, 102, 241, 0.25)":"#e0e7ff":e?"#374151":"#f3f4f6"};
  color: ${t===1?"#c2410c":n?Fl:e?"#d1d5db":"#4b5563"};
  border: 1px solid
    ${t===1?e?"rgba(251, 146, 60, 0.45)":"#fed7aa":n?e?"rgba(99,102,241,0.5)":"#c7d2fe":e?"#4b5563":"#e5e7eb"};
`,s4=(e,t)=>c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 0.95rem;
  border-radius: 12px;
  border: 1px solid ${t?e?"rgba(129, 140, 248, 0.55)":"#c4b5fd":e?"#404040":"#e5e7eb"};
  background: ${t?e?"rgba(99, 102, 241, 0.12)":"#f5f3ff":e?"#1f1f1f":"#fafafa"};
`,o4=c`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0;
  min-height: 44px;
`,To=c`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,l4=c`
  flex: 1;
  min-width: 0;
`,a4=c`
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
`,c4=e=>c`
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,u4=c`
  text-align: right;
  flex-shrink: 0;
`,d4=c`
  margin: 0;
  font-weight: 800;
  font-size: 1.05rem;
  line-height: 1.1;
`,f4=e=>c`
  margin: 0.1rem 0 0;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-weight: 500;
`,p4=e=>c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.35rem 0.55rem;
  border-radius: 6px;
  background: ${e?"#374151":"#e5e7eb"};
  color: ${e?"#e5e7eb":"#374151"};
  line-height: 1;
`;function h4({rank:e}){return e===1?s("span",{css:To,title:"1st place","aria-hidden":!0,style:{fontSize:"1.2rem",lineHeight:1},children:"👑"}):e===2?s("span",{css:To,title:"2nd place","aria-hidden":!0,style:{color:"#6b7280"},children:s(lf,{style:{width:24,height:24,strokeWidth:2}})}):e===3?s("span",{css:To,title:"3rd place","aria-hidden":!0,style:{color:"#2563eb"},children:s(Sa,{style:{width:24,height:24,strokeWidth:2}})}):s("span",{css:To,"aria-hidden":!0})}function m4({darkMode:e,userEmail:t}){const[n,r]=h.useState("public"),[i,o]=h.useState([]),[l,u]=h.useState(!0),[d,m]=h.useState(""),[y,v]=h.useState(""),w=h.useCallback(async()=>{u(!0),m(""),v("");try{const b=new URLSearchParams;b.set("scope",n),t&&b.set("viewer_email",t);const g=await(await fetch(`${Jb}/backend/leaderboard.php?${b.toString()}`,{cache:"no-store"})).json();g.success&&Array.isArray(g.entries)?(o(g.entries),typeof g.message=="string"&&g.message&&v(g.message)):(o([]),m(g.error||"Could not load leaderboard"))}catch{o([]),m("Network error")}finally{u(!1)}},[n,t]);h.useEffect(()=>{w()},[w]);const _=h.useMemo(()=>i.some(b=>b.is_me),[i]),C=n==="public"?"University rankings":"Your class cohort";return a("div",{css:Xb,children:[s("h1",{css:qb,children:"Anonymous Leaderboard"}),s("p",{css:Rr(e),children:"Names are hidden. Compare points with everyone, or with students on the same degree, year, and class of."}),s("hr",{css:Mb(e)}),a("div",{css:e4(e),role:"tablist","aria-label":"Leaderboard scope",children:[s("button",{type:"button",role:"tab","aria-selected":n==="public",css:_h(e,n==="public"),onClick:()=>r("public"),children:"Public"}),s("button",{type:"button",role:"tab","aria-selected":n==="my_class",css:_h(e,n==="my_class"),onClick:()=>r("my_class"),children:"My class"})]}),a("section",{css:t4(e),children:[a("h2",{css:n4,children:[s(lf,{style:{width:22,height:22,color:Fl,flexShrink:0},"aria-hidden":!0}),C]}),l?s("p",{css:Rr(e),style:{marginBottom:"1rem"},children:"Loading…"}):d?s("p",{css:Rr(e),style:{marginBottom:"1rem",color:"#dc2626"},children:d}):i.length===0?s("p",{css:Rr(e),style:{marginBottom:"1rem"},children:y||"No students to show yet."}):s("div",{css:r4,children:i.map((b,z)=>{const g=Gb(b.attendance),f=!!b.is_me,x=b.label||`Student #${b.rank}`;return a("div",{css:s4(e,f),children:[s("div",{css:i4(e,b.rank,f),children:b.rank}),s(h4,{rank:b.rank}),a("div",{css:l4,children:[s("p",{css:a4,children:x}),a("p",{css:c4(e),children:[g,"% attendance"]})]}),a("div",{css:o4,children:[f?s("span",{css:p4(e),"aria-label":"Your rank",children:"You"}):null,a("div",{css:u4,children:[s("p",{css:d4,children:b.points}),s("p",{css:f4(e),children:"points"})]})]})]},`${n}-${b.rank}-${z}-${b.points}`)})})]}),!l&&!d&&t&&!_&&n==="public"&&i.length>0?s("p",{css:Rr(e),style:{marginTop:"0.85rem",fontSize:"0.88rem"},children:"Sign in with a student email that exists in the database to highlight your row."}):null,!l&&!d&&t&&!_&&n==="my_class"&&i.length>0?s("p",{css:Rr(e),style:{marginTop:"0.85rem",fontSize:"0.88rem"},children:"We could not match your row. Check your degree, year, and class of on your student record."}):null]})}const Ec="/strack/".replace(/\/$/,""),g4="#6366f1",y4=c`
  position: relative;
`,v4=e=>c`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: transparent;
  color: ${e?"#ffffff":"#1a1a1a"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }
`,w4=c`
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem;
  line-height: 1;
`,x4=e=>c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,b4=c`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,S4=c`
  border: none;
  background: transparent;
  color: ${g4};
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
  padding: 0;
`,C4=c`
  max-height: 360px;
  overflow: auto;
`,kc=(e,t)=>c`
  padding: 0.7rem 0.85rem;
  border-bottom: 1px solid ${e?"#303030":"#f3f4f6"};
  background: ${t?e?"rgba(99,102,241,0.12)":"#eef2ff":"transparent"};
`,$4=c`
  margin: 0;
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.3;
`,Lc=e=>c`
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: ${e?"#d1d5db":"#4b5563"};
  line-height: 1.35;
`,_4=e=>c`
  margin: 0.3rem 0 0;
  font-size: 0.72rem;
  color: ${e?"#9ca3af":"#6b7280"};
`;function E4(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const n=Date.now()-t.getTime(),r=Math.floor(n/6e4);if(r<1)return"just now";if(r<60)return`${r}m ago`;const i=Math.floor(r/60);if(i<24)return`${i}h ago`;const o=Math.floor(i/24);return o<7?`${o}d ago`:t.toLocaleDateString()}const k4=(e,t)=>c`
  position: absolute;
  top: calc(100% + 0.5rem);
  ${t==="sidebar"?"left: calc(100% + 0.6rem);":"right: 0;"}
  width: min(400px, 92vw);
  max-height: 460px;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
  box-shadow: ${e?"0 10px 28px rgba(0,0,0,0.45)":"0 10px 28px rgba(0,0,0,0.12)"};
  overflow: hidden;
  z-index: 1200;
  @media (max-width: 767.98px) {
    right: 0;
    left: auto;
    width: min(360px, 92vw);
  }
`;function Ul({darkMode:e,userEmail:t,placement:n="default"}){const r=h.useRef(null),[i,o]=h.useState(!1),[l,u]=h.useState(!1),[d,m]=h.useState([]),[y,v]=h.useState(0),w=async()=>{if(!t){m([]),v(0);return}u(!0);try{const z=await(await fetch(`${Ec}/backend/notifications.php?email=${encodeURIComponent(t)}&limit=40`,{cache:"no-store"})).json();z.success&&(m(Array.isArray(z.notifications)?z.notifications:[]),v(Number(z.unread_count)||0))}catch{m([]),v(0)}finally{u(!1)}};h.useEffect(()=>{w();const b=window.setInterval(w,45e3);return()=>window.clearInterval(b)},[t]),h.useEffect(()=>{i&&w()},[i]),h.useEffect(()=>{const b=z=>{r.current&&(r.current.contains(z.target)||o(!1))};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]);const _=async b=>{try{await fetch(`${Ec}/backend/notifications.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,id:b})})}catch{}m(z=>z.map(g=>g.id===b?{...g,is_read:!0}:g)),v(z=>Math.max(0,z-1))},C=async()=>{try{await fetch(`${Ec}/backend/notifications.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,mark_all:!0})})}catch{}m(b=>b.map(z=>({...z,is_read:!0}))),v(0)};return a("div",{css:y4,ref:r,children:[a("button",{type:"button",css:v4(e),onClick:()=>o(b=>!b),"aria-label":"Notifications",title:"Notifications",children:[s(lx,{style:{width:22,height:22}}),y>0?s("span",{css:w4,children:y>9?"9+":y}):null]}),i?a("div",{css:k4(e,n),children:[a("div",{css:x4(e),children:[s("h3",{css:b4,children:"Notifications"}),s("button",{type:"button",css:S4,onClick:C,disabled:y===0,children:"Mark all read"})]}),s("div",{css:C4,children:l?s("div",{css:kc(e,!1),children:s("p",{css:Lc(e),children:"Loading..."})}):d.length===0?s("div",{css:kc(e,!1),children:s("p",{css:Lc(e),children:"No notifications yet."})}):d.map(b=>a("button",{type:"button",css:[kc(e,!b.is_read),c`
                      width: 100%;
                      text-align: left;
                      border: none;
                      cursor: pointer;
                      color: inherit;
                    `],onClick:()=>{b.is_read||_(b.id)},children:[s("p",{css:$4,children:b.title||"Notification"}),s("p",{css:Lc(e),children:b.message||""}),s("p",{css:_4(e),children:E4(b.created_at)})]},b.id))})]}):null]})}const L4="(min-width: 768px)",N4="(max-width: 767.98px)";function vf(){const[e,t]=h.useState(!1),n=h.useCallback(()=>t(!1),[]);return h.useEffect(()=>{const r=window.matchMedia(L4),i=()=>{r.matches&&t(!1)};return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),h.useEffect(()=>{const r=window.matchMedia(N4);if(e&&r.matches){const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}}},[e]),{mobileMenuOpen:e,setMobileMenuOpen:t,closeMenu:n}}const Hl="0.35s ease",wf=e=>c`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${Hl};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,xf=(e,t)=>c`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition:
    background-color ${Hl},
    box-shadow ${Hl},
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
`,bf=e=>c`
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
`,Sf=c`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,Cf=e=>c`
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
`,$f=e=>c`
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
`,_f=e=>c`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#111827"};
  min-width: 0;
`,Ef=e=>c`
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
`,kf=e=>c`
  flex: 1;
  min-height: 0;
  min-width: 0;
  padding: 0.65rem max(0.75rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(0.75rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  overflow-x: hidden;
  transition: color ${Hl};

  @media (min-width: 768px) {
    padding: max(1rem, env(safe-area-inset-top)) 2rem 2rem 2rem;
  }
`,z4="/strack/".replace(/\/$/,""),on="0.35s ease",P4=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,D4=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,T4=e=>c`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${on};
  }
`,j4=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${on};
`,Eh=e=>c`
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
  transition: color ${on};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,O4=c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,R4=c`
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
`,A4=c`
  flex: 1;
  min-width: 0;
`,I4=e=>c`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${on};
`,B4=e=>c`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${on};
`,F4=e=>c`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${on};
`,U4=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,H4=e=>c`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${on};
`,W4=e=>c`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${on};
`,V4=c`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Y4=(e,t)=>c`
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
  transition: background ${on}, color ${on};

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
`,Q4=c`
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
`,K4=(e,t,n)=>c`
  max-width: ${n?"min(100%, 1280px)":t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,Z4=c`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,J4=c`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,G4=[{id:"dashboard",label:"Dashboard",icon:Ca},{id:"courses",label:"Courses",icon:sn},{id:"calendar",label:"Calendar",icon:gn},{id:"leaderboard",label:"Leaderboard",icon:df},{id:"badges",label:"Badges",icon:Al},{id:"rewards",label:"Rewards",icon:Sa},{id:"profile",label:"Profile",icon:$r}];function kh(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function X4(e){const t=String(e||"").trim();if(/^STU/i.test(t))return t.toUpperCase();if(/^s\d+$/i.test(t)){const n=Number(t.slice(1));if(Number.isFinite(n))return`STU${String(n).padStart(3,"0")}`}return/^\d+$/.test(t)?`STU${String(Number(t)).padStart(3,"0")}`:"STU001"}function Lh(e){return`strack_profile_extra_${(e||"").toLowerCase()}`}function Nh(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function q4({darkMode:e,onToggleDarkMode:t}){const n=eo(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:o}=vf(),[l,u]=h.useState("dashboard"),[d,m]=h.useState(0),[y,v]=h.useState(""),[w,_]=h.useState("STU001"),[C,b]=h.useState(!1),[z,g]=h.useState(""),[f,x]=h.useState({phone:"+44 7700 900123",address:"123 University Avenue, Newcastle",bio:"Computer Science student passionate about software development."}),[k,$]=h.useState(f);let N="Student";try{const O=localStorage.getItem("strack_user");if(O){const j=JSON.parse(O);j!=null&&j.name&&(N=j.name)}}catch{}h.useEffect(()=>{try{const O=localStorage.getItem("strack_user");if(O){const j=JSON.parse(O);j!=null&&j.email&&v(j.email),j!=null&&j.id&&_(X4(j.id))}}catch{}},[]),h.useEffect(()=>{if(y)try{const O=localStorage.getItem(Lh(y));if(!O)return;const j=JSON.parse(O),Z={phone:Nh(j==null?void 0:j.phone),address:String((j==null?void 0:j.address)||f.address),bio:String((j==null?void 0:j.bio)||f.bio)};x(Z),$(Z)}catch{}},[y]);const P=h.useCallback(async()=>{if(y)try{const j=await(await fetch(`${z4}/backend/student_points.php?email=${encodeURIComponent(y)}`,{cache:"no-store"})).json();j.success&&typeof j.points=="number"&&m(j.points)}catch{}},[y]);h.useEffect(()=>{P()},[P]);const F=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},W=()=>{$(f),g(""),b(!0)},V=()=>{$(f),g(""),b(!1)},G=()=>{const O=Nh(k.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(O.replace(/\s+/g," "))){g("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const Z={phone:O,address:(k.address||"").trim()||f.address,bio:(k.bio||"").trim()||f.bio};x(Z),$(Z),g(""),b(!1);try{localStorage.setItem(Lh(y),JSON.stringify(Z))}catch{}},A=O=>{u(O),o()};return a("div",{css:wf(e),children:[r?s("button",{type:"button",css:bf(e),onClick:o,"aria-label":"Close menu"}):null,a("aside",{css:xf(e,r),children:[a("header",{css:P4,children:[a("div",{css:D4,children:[s("div",{css:T4(e),children:s(Vs,{})}),s("span",{css:j4(e),children:"Strack"})]}),a("div",{css:c`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s(Ul,{darkMode:e,userEmail:y,placement:"sidebar"}),s("button",{type:"button",css:Eh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s($i,{}):s(_i,{})}),s("button",{type:"button",css:Ef(e),onClick:o,"aria-label":"Close menu",children:s(Te,{})})]})]}),a("div",{css:O4,children:[s("div",{css:R4,children:kh(N)}),a("div",{css:A4,children:[s("div",{css:I4(e),children:N}),s("div",{css:B4(e),children:"Student"})]})]}),s("div",{css:F4(e),children:a("div",{css:U4,children:[a("span",{css:H4(e),children:[s(tt,{})," Points"]}),s("span",{css:W4(e),children:d})]})}),s("nav",{css:V4,children:G4.map(({id:O,label:j,icon:Z})=>a("button",{css:Y4(e,l===O),onClick:()=>A(O),children:[s(Z,{}),j]},O))}),a("button",{css:Q4,onClick:F,children:[s(pf,{}),"Logout"]})]}),a("div",{css:Sf,children:[a("header",{css:Cf(e),children:[s("button",{type:"button",css:$f(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(ff,{})}),s("span",{css:_f(e),children:"Strack"}),a("div",{css:c`display: inline-flex; align-items: center; gap: 0.3rem;`,children:[s(Ul,{darkMode:e,userEmail:y}),s("button",{type:"button",css:Eh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s($i,{}):s(_i,{})})]})]}),s("main",{css:kf(e),children:l==="rewards"?s(Fx,{darkMode:e,userEmail:y,points:d,onPointsChange:m}):a("div",{css:K4(e,l==="profile",l==="calendar"||l==="courses"||l==="leaderboard"||l==="badges"),children:[l==="dashboard"&&a(zt,{children:[s("h1",{css:Z4,children:"Dashboard"}),s("p",{css:J4,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),l==="courses"&&s(Zb,{darkMode:e,userEmail:y,studentId:w}),l==="calendar"&&s(pb,{darkMode:e,userEmail:y,studentId:w}),l==="leaderboard"&&s(m4,{darkMode:e,userEmail:y}),l==="badges"&&s(Pb,{darkMode:e}),l==="profile"&&a("div",{css:s1(e),children:[a("header",{css:o1,children:[s("h1",{css:l1(e),children:"My Profile"}),s("p",{css:a1(e),children:"Manage your personal information and account details."})]}),s("section",{css:c1(e),children:a("div",{css:u1,children:[a("div",{css:d1,children:[s("div",{css:p1,children:kh(N)}),a("div",{css:f1,children:[s("h2",{css:h1,children:N}),a("div",{css:Il(e),children:["Student ID: ",w]}),s("div",{css:Il(e),children:"Computer Science"}),a("div",{css:m1,children:[s("span",{css:g1,children:"Student"}),s("span",{css:y1(e),children:"Undergraduate"})]})]})]}),C?null:a("button",{type:"button",css:v1,onClick:W,children:[s(Pn,{"aria-hidden":!0}),"Edit Profile"]})]})}),a("section",{css:Ux,"aria-label":"Profile statistics",children:[a("article",{css:dr(e),children:[a("div",{css:fr,children:[s(Sa,{"aria-hidden":!0}),s("span",{css:pr,children:"Points"})]}),s("div",{css:hr,children:d}),s("div",{css:mr(e),children:"Total earned"})]}),a("article",{css:dr(e),children:[a("div",{css:fr,children:[s(Al,{"aria-hidden":!0}),s("span",{css:pr,children:"Badges"})]}),s("div",{css:hr,children:"3"}),s("div",{css:mr(e),children:"Achievements"})]}),a("article",{css:dr(e),children:[a("div",{css:fr,children:[s(sn,{"aria-hidden":!0}),s("span",{css:pr,children:"Courses"})]}),s("div",{css:hr,children:"6"}),s("div",{css:mr(e),children:"Enrolled"})]}),a("article",{css:dr(e),children:[a("div",{css:fr,children:[s(df,{"aria-hidden":!0}),s("span",{css:pr,children:"Rank"})]}),s("div",{css:hr,children:"#3"}),s("div",{css:mr(e),children:"Leaderboard"})]})]}),a("section",{css:hf(e),children:[s("h2",{css:mf(e),children:"Personal Information"}),a("div",{css:w1,children:[a("div",{css:ct,children:[s("span",{css:ut,children:"Full Name"}),C?s("input",{css:Bl(e),value:N,readOnly:!0,"aria-readonly":"true"}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s($r,{"aria-hidden":!0})}),s("span",{css:Ut,children:N})]})]}),a("div",{css:ct,children:[s("span",{css:ut,children:"Email Address"}),C?s("input",{css:Bl(e),value:y||"student@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(af,{"aria-hidden":!0})}),s("span",{css:Ut,children:y||"student@uni.ac.uk"})]})]}),a("div",{css:ct,children:[s("span",{css:ut,children:"Phone Number"}),C?s("input",{css:rn(e),value:k.phone,onChange:O=>$(j=>({...j,phone:O.target.value})),placeholder:"+44 7700 900123"}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(n1,{"aria-hidden":!0})}),s("span",{css:Ut,children:f.phone})]})]}),a("div",{css:ct,children:[s("span",{css:ut,children:"Address"}),C?s("input",{css:rn(e),value:k.address,onChange:O=>$(j=>({...j,address:O.target.value}))}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(Vn,{"aria-hidden":!0})}),s("span",{css:Ut,children:f.address})]})]}),a("div",{css:[ct,x1],children:[s("span",{css:ut,children:"Bio"}),C?s("textarea",{css:b1(e),value:k.bio,onChange:O=>$(j=>({...j,bio:O.target.value}))}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(_r,{"aria-hidden":!0})}),s("span",{css:Ut,children:f.bio})]})]})]}),C?a("div",{css:S1(e),children:[s("button",{type:"button",css:Ys(!0),onClick:G,children:"Save"}),s("button",{type:"button",css:Ys(!1),onClick:V,children:"Cancel"})]}):null,z?s("div",{css:gf(e),children:z}):null]}),s(C1,{darkMode:e,userEmail:y})]})]})})]})]})}const ts="/strack",Wl="#6366f1";function cn(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function zh(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function Nc(e){if(!e)return"";const[t,n]=e.split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n).padStart(2,"0")} ${i}`}function M4(e){const[t,n]=String(e||"00:00").split(":").map(Number),r=new Date;return r.setHours(t||0,n||0,0,0),r.setHours(r.getHours()+1),`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`}function eS(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),o=r.getDay(),l=[];for(let u=0;u<o;u++)l.push({type:"pad"});for(let u=1;u<=i.getDate();u++)l.push({type:"day",date:new Date(t,n,u)});for(;l.length%7!==0;)l.push({type:"pad"});return l}const tS=c`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`,zc=e=>c`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
`,nS=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`,rS=e=>c`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#f9fafb":"#111827"};
`,Ph=e=>c`
  width: 32px;
  height: 32px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Dh=c`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: none;
  border-radius: 8px;
  background: ${Wl};
  color: #fff;
  padding: 0.45rem 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
`,iS=c`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`,sS=e=>c`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
`,Th=(e,t,n,r)=>c`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid ${t?Wl:n?"#c7d2fe":e?"#404040":"#e5e7eb"};
  background: ${t?Wl:r?e?"#1f1f1f":"#fafafa":n?e?"rgba(99,102,241,0.16)":"rgba(99,102,241,0.08)":e?"#262626":"#fff"};
  color: ${t?"#fff":"inherit"};
  padding: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${r?"default":"pointer"};
`,oS=c`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`,lS=e=>c`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${e?"#fff":"#111827"};
`,aS=e=>c`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,jh=(e,t)=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-left: 4px solid ${t==="event"?"#ef4444":Wl};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
`,Oh=c`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Pc=e=>c`
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
`,cS=c`
  display: grid;
  gap: 1rem;
`,Rh=e=>c`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.7rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,uS=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
`,dS=e=>c`
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
  color: ${e?"#d1d5db":"#6b7280"};
`,jo=e=>c`
  margin: 0.25rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
`,fS=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,pS=e=>c`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${e?"#1a1a1a":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
`,hS=e=>c`
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,mS=e=>c`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,gS=e=>c`
  border: none;
  background: transparent;
  color: ${e?"#d1d5db":"#4b5563"};
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,yS=c`
  padding: 1rem 1.1rem 1.2rem;
`,Ar=e=>c`
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1px solid ${e?"#404040":"#d1d5db"};
  border-radius: 8px;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
`,Ir=c`
  margin-bottom: 0.8rem;
`,Br=e=>c`
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: ${e?"#d1d5db":"#374151"};
`,vS=e=>c`
  padding: 0.85rem 1.1rem 1rem;
  border-top: 1px solid ${e?"#404040":"#e5e7eb"};
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
`,wS=e=>c`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: transparent;
  color: inherit;
  border-radius: 8px;
  padding: 0.45rem 0.8rem;
  cursor: pointer;
`;function xS({darkMode:e,userEmail:t}){const[n,r]=h.useState(new Date),[i,o]=h.useState([]),[l,u]=h.useState([]),[d,m]=h.useState(!0),[y,v]=h.useState(cn(new Date)),[w,_]=h.useState(null),[C,b]=h.useState(!1),[z,g]=h.useState(!1),[f,x]=h.useState({course_id:"",title:"",description:"",due_date:cn(new Date),due_time:"23:59",location:"Online"}),k=h.useMemo(()=>{const S=new Date;return S.setHours(0,0,0,0),S},[]),$=h.useMemo(()=>{const S=n.getFullYear(),D=n.getMonth();return{from:cn(new Date(S,D,1)),to:cn(new Date(S,D+1,0))}},[n]);h.useEffect(()=>{let S=!0;async function D(){try{const[B,U]=await Promise.all([fetch(`${ts}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ts}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),E=await B.json(),Q=await U.json();if(!S)return;const ne=(E.success?E.lecturers||[]:[]).find(oe=>String(oe.email||"").trim().toLowerCase()===String(t||"").trim().toLowerCase())||null;_(ne),u(Q.success?Q.courses||[]:[])}catch{if(!S)return;_(null),u([])}}return D(),()=>{S=!1}},[t]),h.useEffect(()=>{let S=!0;async function D(){m(!0);try{const U=await(await fetch(`${ts}/backend/timetable.php?from=${encodeURIComponent($.from)}&to=${encodeURIComponent($.to)}`)).json();if(!S)return;o(U.success?U.entries||[]:[])}catch{if(!S)return;o([])}finally{S&&m(!1)}}return D(),()=>{S=!1}},[$.from,$.to]);const N=h.useMemo(()=>{if(!w)return[];const S=String(w.lecturer_id||"").trim();return l.filter(D=>String(D.lecturer_id||"").trim()===S)},[l,w]),P=h.useMemo(()=>{if(!w)return[];const S=new Set(N.map(D=>Number(D.id)));return i.filter(D=>D.entry_type==="class"?S.has(Number(D.course_id)):Array.isArray(D.lecturers)&&D.lecturers.some(B=>Number(B.id)===Number(w.id)))},[i,w,N]),F=h.useMemo(()=>{const S={};for(const D of P)S[D.entry_date]||(S[D.entry_date]=[]),S[D.entry_date].push(D);return Object.keys(S).forEach(D=>S[D].sort((B,U)=>B.start_time.localeCompare(U.start_time))),S},[P]),W=F[y]||[],V=F[cn(k)]||[],G=h.useMemo(()=>P.filter(D=>D.entry_date>cn(k)||D.entry_date===cn(k)&&D.start_time>="00:00:00").sort((D,B)=>`${D.entry_date} ${D.start_time}`.localeCompare(`${B.entry_date} ${B.start_time}`)).slice(0,5),[P,k]),A=h.useMemo(()=>eS(n),[n]),O=n.toLocaleDateString(void 0,{month:"long",year:"numeric"}),j=zh(y).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),Z=()=>r(S=>new Date(S.getFullYear(),S.getMonth()-1,1)),R=()=>r(S=>new Date(S.getFullYear(),S.getMonth()+1,1)),K=async()=>{if(!(!w||!f.course_id||!f.title.trim()||!f.due_date||!f.due_time)){g(!0);try{const S={entry_type:"event",course_id:Number(f.course_id),event_title:`Assignment Due: ${f.title.trim()}`,event_description:f.description.trim(),entry_date:f.due_date,start_time:f.due_time,end_time:M4(f.due_time),room_location:(f.location||"").trim()||"Online",lecturer_account_ids:[Number(w.id)]},B=await(await fetch(`${ts}/backend/timetable.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)})).json();if(!B.success){window.alert(B.error||"Could not save assignment due date");return}b(!1),x(Q=>({...Q,title:"",description:"",due_time:"23:59",location:"Online"}));const E=await(await fetch(`${ts}/backend/timetable.php?from=${encodeURIComponent($.from)}&to=${encodeURIComponent($.to)}`,{cache:"no-store"})).json();o(E.success?E.entries||[]:[])}catch{window.alert("Network error while saving assignment.")}finally{g(!1)}}};return a("div",{css:tS,children:[a("div",{css:zc(e),children:[a("div",{css:nS,children:[s("h2",{css:rS(e),children:O}),a("div",{style:{display:"inline-flex",gap:"0.35rem",alignItems:"center"},children:[a("button",{type:"button",css:Dh,onClick:()=>b(!0),children:[s(t1,{})," Assignment Due Date"]}),s("button",{type:"button",css:Ph(e),onClick:Z,"aria-label":"Previous month",children:s(uf,{})}),s("button",{type:"button",css:Ph(e),onClick:R,"aria-label":"Next month",children:s(cf,{})})]})]}),a("div",{css:iS,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(S=>s("div",{css:sS(e),children:S},S)),A.map((S,D)=>{if(S.type==="pad")return s("div",{css:Th(e,!1,!1,!0)},`pad-${D}`);const B=cn(S.date),U=B===y,E=B===cn(k),Q=(F[B]||[]).length>0;return a("div",{role:"button",tabIndex:0,css:Th(e,U,E,!1),onClick:()=>v(B),onKeyDown:te=>te.key==="Enter"&&v(B),children:[s("div",{css:oS,children:S.date.getDate()}),Q?s("div",{css:lS(U)}):s("div",{})]},B)})]}),a("h3",{css:aS(e),children:["Events on ",j]}),d?s("p",{css:jo(e),children:"Loading events..."}):W.length===0?s("p",{css:jo(e),children:"No events for this date."}):W.map(S=>a("div",{css:jh(e,S.entry_type),children:[s("p",{css:Oh,children:S.entry_type==="class"?S.course_name||S.course_code:S.event_title}),a("div",{css:Pc(e),children:[a("span",{children:[s(tt,{}),Nc(S.start_time)]}),(S.room_location||"").trim()?a("span",{children:[s(Vn,{}),S.room_location]}):null]})]},S.id))]}),a("div",{css:cS,children:[a("div",{css:zc(e),children:[a("h3",{css:Rh(e),children:[s(gn,{}),"Today's Schedule"]}),V.length===0?s("p",{css:jo(e),children:"No classes or deadlines today."}):V.map(S=>a("div",{css:jh(e,S.entry_type),children:[s("p",{css:Oh,children:S.entry_type==="class"?S.course_name||S.course_code:S.event_title}),s("div",{css:Pc(e),children:a("span",{children:[s(tt,{}),Nc(S.start_time)]})})]},`today-${S.id}`))]}),a("div",{css:zc(e),children:[a("h3",{css:Rh(e),children:[s(tt,{}),"Upcoming"]}),G.length===0?s("p",{css:jo(e),children:"No upcoming entries."}):G.map(S=>a("div",{css:uS(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s("strong",{style:{fontSize:"0.92rem"},children:S.entry_type==="class"?S.course_name||S.course_code:S.event_title}),s("span",{css:dS(e),children:S.entry_type==="class"?"Lecture":"Assignment"})]}),a("div",{css:Pc(e),style:{marginTop:"0.25rem"},children:[a("span",{children:[s(gn,{}),zh(S.entry_date).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),a("span",{children:[s(tt,{}),Nc(S.start_time)]})]})]},`up-${S.id}`))]})]}),C?s("div",{css:fS,onClick:()=>b(!1),children:a("div",{css:pS(e),onClick:S=>S.stopPropagation(),children:[a("div",{css:hS(e),children:[s("h3",{css:mS(e),children:"Add Assignment Due Date"}),s("button",{type:"button",css:gS(e),onClick:()=>b(!1),"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:yS,children:[a("div",{css:Ir,children:[s("label",{css:Br(e),children:"Course"}),a("select",{css:Ar(e),value:f.course_id,onChange:S=>x(D=>({...D,course_id:S.target.value})),children:[s("option",{value:"",children:"Select your course"}),N.map(S=>a("option",{value:String(S.id),children:[S.course_code," - ",S.course_name]},S.id))]})]}),a("div",{css:Ir,children:[s("label",{css:Br(e),children:"Assignment Title"}),s("input",{type:"text",css:Ar(e),placeholder:"e.g. Lab Report 2",value:f.title,onChange:S=>x(D=>({...D,title:S.target.value}))})]}),a("div",{css:Ir,children:[s("label",{css:Br(e),children:"Description"}),s("textarea",{css:Ar(e),style:{minHeight:"80px",resize:"vertical"},value:f.description,onChange:S=>x(D=>({...D,description:S.target.value}))})]}),a("div",{css:Ir,children:[s("label",{css:Br(e),children:"Due Date"}),s("input",{type:"date",css:Ar(e),value:f.due_date,onChange:S=>x(D=>({...D,due_date:S.target.value}))})]}),a("div",{css:Ir,children:[s("label",{css:Br(e),children:"Due Time"}),s("input",{type:"time",css:Ar(e),value:f.due_time,onChange:S=>x(D=>({...D,due_time:S.target.value}))})]}),a("div",{css:Ir,children:[s("label",{css:Br(e),children:"Location"}),s("input",{type:"text",css:Ar(e),value:f.location,onChange:S=>x(D=>({...D,location:S.target.value}))})]})]}),a("div",{css:vS(e),children:[s("button",{type:"button",css:wS(e),onClick:()=>b(!1),children:"Cancel"}),a("button",{type:"button",css:Dh,onClick:K,disabled:z,children:[s(_r,{}),z?"Saving...":"Save Due Date"]})]})]})}):null]})}const En="/strack/".replace(/\/$/,""),qt="#6366f1";function Dc(e){const[t,n,r]=String(e||"").split("-").map(Number);return new Date(t,(n||1)-1,r||1)}function Tc(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Oo(e){if(!e)return"";const[t,n]=String(e).split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n||0).padStart(2,"0")} ${i}`}function bS(e){const t=Number(e)||0;return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/1024/1024).toFixed(1)} MB`}const SS=c`width: 100%;`,CS=c`margin: 0; font-size: 1.5rem; font-weight: 700; line-height: 1.2;`,Ue=e=>c`margin: 0.2rem 0 .9rem; font-size: .95rem; color: ${e?"#9ca3af":"#6b7280"}; line-height: 1.4;`,$S=c`display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .8rem; margin-bottom: .95rem; @media (max-width:1024px){grid-template-columns: repeat(2,minmax(0,1fr));}`,$a=e=>c`background:${e?"#262626":"#fff"}; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:14px;`,Ro=e=>c`${$a(e)}; padding:.95rem;`,Ao=e=>c`font-size:.78rem; letter-spacing:.03em; font-weight:700; color:${e?"#9ca3af":"#6b7280"}; text-transform: uppercase;`,Io=c`margin:.6rem 0 .15rem; font-size:1.85rem; font-weight:800; line-height:1.1;`,Bo=e=>c`margin:0; font-size:.95rem; color:${e?"#9ca3af":"#6b7280"};`,_S=e=>c`${$a(e)}; padding:.95rem; margin-bottom:.95rem;`,ES=c`display:flex; align-items:center; gap:.5rem; margin:0 0 .8rem; font-size:1.3rem; font-weight:700;`,kS=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:12px; padding:.9rem; margin-bottom:.8rem;`,LS=c`display:flex; align-items:center; gap:.5rem; flex-wrap:wrap;`,jc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:600;`,NS=c`margin-left:auto; border:1px solid #bbf7d0; color:#059669; background:#ecfdf5; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:700;`,zS=c`margin:.55rem 0 .2rem; font-size:1.8rem; font-weight:800; line-height:1.2;`,PS=e=>c`display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:.8rem; margin:.7rem 0 .6rem; font-size:.95rem; color:${e?"#d1d5db":"#374151"}; @media (max-width:900px){grid-template-columns:1fr;}`,DS=e=>c`height:10px; border-radius:999px; background:${e?"#404040":"#e5e7eb"}; overflow:hidden;`,TS=e=>c`height:100%; width:${Math.max(0,Math.min(100,e))}%; background:${qt};`,jS=c`display:flex; gap:.55rem; margin-top:.75rem; flex-wrap:wrap;`,Ah=c`border:none; background:${qt}; color:#fff; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,Oc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; background:transparent; color:inherit; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,Fo=c`position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem;`,Rc=e=>c`${$a(e)}; width:100%; max-width:980px; max-height:90vh; overflow:auto;`,Uo=e=>c`display:flex; align-items:start; justify-content:space-between; padding:1rem; border-bottom:1px solid ${e?"#404040":"#e5e7eb"};`,Ho=c`margin:0; font-size:1.45rem; font-weight:800;`,Wo=e=>c`margin:.2rem 0 0; color:${e?"#9ca3af":"#6b7280"};`,Vo=e=>c`border:1px solid ${e?"#4b5563":"#d1d5db"}; background:transparent; width:38px; height:38px; border-radius:10px; cursor:pointer;`,Yo=c`padding:1rem;`,OS=e=>c`display:flex; align-items:center; justify-content:space-between; gap:.8rem; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.6rem;`,RS=e=>c`border:1px solid ${e?"#7f1d1d":"#fecaca"}; color:#dc2626; background:${e?"rgba(127,29,29,0.22)":"#fef2f2"}; border-radius:10px; padding:.4rem .65rem; font-weight:700; font-size:.85rem; cursor:pointer; display:inline-flex; align-items:center; gap:.35rem;`,AS=e=>c`display:flex; flex-wrap:wrap; align-items:center; gap:.55rem; margin-bottom:1rem; padding:.75rem; border-radius:10px; border:1px dashed ${e?"#525252":"#d1d5db"}; background:${e?"#1f1f1f":"#f9fafb"};`,Ac=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`,IS=e=>c`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font: inherit;
  font-size: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
  max-width: 100%;
  &:hover {
    color: ${qt};
  }
  &:focus-visible {
    outline: 2px solid ${qt};
    outline-offset: 2px;
  }
`,BS=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
  margin-bottom: 0.55rem;
`,FS=e=>c`
  ${$a(e)};
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  overflow: auto;
`;function US({darkMode:e,userEmail:t}){const[n,r]=h.useState([]),[i,o]=h.useState(null),[l,u]=h.useState([]),[d,m]=h.useState(!0),[y,v]=h.useState(null),[w,_]=h.useState(null),[C,b]=h.useState(null),[z,g]=h.useState([]),[f,x]=h.useState(!1),[k,$]=h.useState(""),[N,P]=h.useState(null),[F,W]=h.useState(!1),V=h.useRef(null),[G,A]=h.useState(null),O=(E,Q)=>{Q&&b(null),A(E)},j=E=>Array.isArray(E==null?void 0:E.students)?[...E.students].sort((Q,te)=>String(Q.full_name||"").localeCompare(String(te.full_name||""))):[],Z=E=>`${En}/backend/course_resources.php?download=1&id=${E}&lecturer_email=${encodeURIComponent(t||"")}`;h.useEffect(()=>{if(!(y!=null&&y.id)||!t){g([]),$("");return}let E=!0;async function Q(){x(!0),$("");try{const ne=await(await fetch(`${En}/backend/course_resources.php?course_id=${y.id}&lecturer_email=${encodeURIComponent(t)}`,{cache:"no-store"})).json();if(!E)return;ne.success?g(ne.resources||[]):$(ne.error||"Could not load resources")}catch{E&&$("Network error")}finally{E&&x(!1)}}return Q(),()=>{E=!1}},[y==null?void 0:y.id,t]);const R=async E=>{var te;const Q=(te=E.target.files)==null?void 0:te[0];if(E.target.value="",!(!Q||!(y!=null&&y.id)||!t)){W(!0),$(""),P(null);try{const ne=new FormData;ne.append("file",Q),ne.append("course_id",String(y.id)),ne.append("lecturer_email",t);const ce=await(await fetch(`${En}/backend/course_resources.php`,{method:"POST",body:ne})).json();if(!ce.success){$(ce.error||"Upload failed");return}const Pe=ce.notifications||{};P({inApp:Number(Pe.in_app_created)||0});const gt=await(await fetch(`${En}/backend/course_resources.php?course_id=${y.id}&lecturer_email=${encodeURIComponent(t)}`,{cache:"no-store"})).json();gt.success&&g(gt.resources||[])}catch{$("Upload failed")}finally{W(!1)}}},K=async E=>{if(!(!t||!window.confirm("Remove this file for all students?"))){$("");try{const te=await(await fetch(`${En}/backend/course_resources.php`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:E,lecturer_email:t})})).json();if(!te.success){$(te.error||"Delete failed");return}g(ne=>ne.filter(oe=>oe.id!==E))}catch{$("Delete failed")}}};h.useEffect(()=>{let E=!0;async function Q(){m(!0);try{const te=new Date,ne=new Date(te);ne.setMonth(ne.getMonth()-6);const oe=new Date(te);oe.setMonth(oe.getMonth()+6);const[ce,Pe,re]=await Promise.all([fetch(`${En}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${En}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${En}/backend/timetable.php?from=${encodeURIComponent(Tc(ne))}&to=${encodeURIComponent(Tc(oe))}`,{cache:"no-store"})]),gt=await ce.json(),ue=await Pe.json(),De=await re.json();if(!E)return;const Yt=(gt.success?gt.lecturers||[]:[]).find(Qt=>String(Qt.email||"").trim().toLowerCase()===String(t||"").trim().toLowerCase())||null;o(Yt),r(ue.success?ue.courses||[]:[]),u(De.success?De.entries||[]:[])}catch{if(!E)return;o(null),r([]),u([])}finally{E&&m(!1)}}return Q(),()=>{E=!1}},[t]);const S=h.useMemo(()=>{if(!i)return[];const E=String(i.lecturer_id||"").trim();return n.filter(Q=>String(Q.lecturer_id||"").trim()===E)},[n,i]),D=h.useMemo(()=>{const E=Tc(new Date);return S.map(Q=>{const te=Number(Q.id),ne=l.filter(ue=>ue.entry_type==="class"&&Number(ue.course_id)===te).sort((ue,De)=>`${ue.entry_date} ${ue.start_time}`.localeCompare(`${De.entry_date} ${De.start_time}`)),oe=l.filter(ue=>ue.entry_type==="event"&&Number(ue.course_id)===te).sort((ue,De)=>`${ue.entry_date} ${ue.start_time}`.localeCompare(`${De.entry_date} ${De.start_time}`)).map(ue=>{let De="Upcoming";return ue.entry_date<E?De="Past due":ue.entry_date===E&&(De="Due today"),{id:ue.id,title:ue.event_title||"Assignment",description:ue.event_description||"No description provided.",due:ue.entry_date,dueTime:ue.start_time,status:De}}),ce=oe.filter(ue=>ue.status==="Past due").length,Pe=oe.length?Math.round(ce/oe.length*100):0,re=ne.find(ue=>ue.entry_date>=E)||null,gt=Number(Q.enrolled_count)||(Array.isArray(Q.students)?Q.students.length:0);return{...Q,meta:{instructor:Q.lecturer_name||"TBA",enrolled:gt,description:`You teach ${Q.course_name} (${Q.course_code}) in ${Q.department||"General"}.`,classes:ne,assignments:oe,completedAssignments:ce,nextLecture:re?`${Dc(re.entry_date).toLocaleDateString(void 0,{weekday:"short"})} ${Oo(re.start_time)}`:"No upcoming session",progress:Pe}}})},[S,l]),B=h.useMemo(()=>{const E=D.length,Q=D.reduce((ce,Pe)=>ce+(Number(Pe.credits)||0),0),te=E?Math.round(D.reduce((ce,Pe)=>ce+Pe.meta.progress,0)/E):0,ne=D.reduce((ce,Pe)=>ce+Pe.meta.completedAssignments,0),oe=D.reduce((ce,Pe)=>ce+Pe.meta.assignments.length,0);return{totalCourses:E,totalCredits:Q,avgProgress:te,pastDue:ne,totalAssignments:oe}},[D]),U=i?"No courses are assigned to you yet.":"We could not match your account to a lecturer profile. Check that your email matches the staff record.";return a("div",{css:SS,children:[s("h1",{css:CS,children:"My Courses"}),s("p",{css:Ue(e),children:"Modules you teach, timetable sessions, and assignment due dates"}),a("div",{css:$S,children:[a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Total Courses"}),s("p",{css:Io,children:B.totalCourses}),s("p",{css:Bo(e),children:"Your modules"})]}),a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Total Credits"}),s("p",{css:Io,children:B.totalCredits}),s("p",{css:Bo(e),children:"Teaching load"})]}),a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Timeline"}),a("p",{css:Io,children:[B.avgProgress,"%"]}),s("p",{css:Bo(e),children:"Past due dates"})]}),a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Due dates"}),a("p",{css:Io,children:[B.pastDue,"/",B.totalAssignments]}),s("p",{css:Bo(e),children:"Past / total"})]})]}),a("section",{css:_S(e),children:[a("h2",{css:ES,children:[s(sn,{style:{color:qt,width:24,height:24}}),"Active Courses"]}),d?s("p",{children:"Loading courses..."}):D.length===0?s("p",{children:U}):D.map(E=>a("article",{css:kS(e),children:[a("div",{css:LS,children:[s("span",{css:jc(e),children:E.course_code}),a("span",{css:jc(e),children:[Number(E.credits)||0," Credits"]}),s("span",{css:NS,children:"Active"})]}),s("h3",{css:zS,children:E.course_name}),s("p",{css:Ue(e),style:{marginBottom:".4rem"},children:E.department||"General"}),a("div",{css:PS(e),children:[a("button",{type:"button",css:IS(),onClick:()=>O(E,!1),title:"View enrolled students",children:[s(On,{"aria-hidden":!0})," Students: ",s("strong",{children:E.meta.enrolled})]}),a("span",{children:[s(tt,{})," Next: ",s("strong",{children:E.meta.nextLecture})]}),a("span",{children:[s(_r,{})," Due dates: ",a("strong",{children:[E.meta.completedAssignments,"/",E.meta.assignments.length]})," ","past"]})]}),a("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".3rem"},children:[s("span",{css:Ue(e),style:{margin:0},children:"Assignment timeline"}),a("strong",{children:[E.meta.progress,"%"]})]}),s("div",{css:DS(e),children:s("div",{css:TS(E.meta.progress)})}),a("div",{css:jS,children:[s("button",{type:"button",css:Ah,onClick:()=>b(E),children:"View Course"}),s("button",{type:"button",css:Oc(e),onClick:()=>v(E),children:"Resources"}),s("button",{type:"button",css:Oc(e),onClick:()=>_(E),children:"Assignments"})]})]},E.id))]}),y?s("div",{css:Fo,onClick:()=>v(null),children:a("div",{css:Rc(e),onClick:E=>E.stopPropagation(),children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{css:Ho,children:"Course Resources"}),a("p",{css:Wo(e),children:["Materials for ",y.course_name]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>v(null),children:s(Te,{})})]}),a("div",{css:Yo,children:[s("input",{ref:V,type:"file",accept:".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.zip,.png,.jpg,.jpeg,.gif,.webp",css:c`display:none;`,onChange:R}),a("div",{css:AS(e),children:[a("button",{type:"button",css:Ah,disabled:F,onClick:()=>{var E;return(E=V.current)==null?void 0:E.click()},children:[s(ax,{style:{display:"inline",verticalAlign:"middle"}})," ",F?"Uploading…":"Upload file"]}),s("span",{css:Ue(e),style:{margin:0},children:"PDF, Office, images, zip — max 20 MB"})]}),k?s("p",{style:{color:"#dc2626",margin:"0 0 .75rem",fontSize:".9rem"},children:k}):null,N?a("div",{css:c`
                    border: 1px solid #86efac;
                    background: #ecfdf5;
                    color: #065f46;
                    border-radius: 10px;
                    padding: 0.6rem 0.7rem;
                    margin: 0 0 0.75rem;
                    font-size: 0.9rem;
                  `,children:["Upload complete. In-app notifications created: ",s("strong",{children:N.inApp}),"."]}):null,f?s("p",{css:Ue(e),style:{margin:0},children:"Loading resources…"}):z.length===0?s("p",{css:Ue(e),style:{margin:0},children:"No files yet. Upload materials for students to download."}):z.map(E=>a("div",{css:OS(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".75rem",minWidth:0},children:[s("span",{style:{width:42,height:42,borderRadius:8,background:"#eef2ff",display:"inline-flex",alignItems:"center",justifyContent:"center",color:qt,flexShrink:0},children:s(_r,{})}),a("div",{style:{minWidth:0},children:[s("strong",{style:{wordBreak:"break-word"},children:E.original_filename}),a("p",{css:Ue(e),style:{margin:".1rem 0 0"},children:[bS(E.file_size),E.created_at?` · ${new Date(E.created_at.replace(" ","T")).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}`:""]})]})]}),a("div",{style:{display:"flex",flexWrap:"wrap",gap:".45rem",flexShrink:0},children:[a("a",{href:Z(E.id),css:Oc(e),style:{textDecoration:"none"},children:[s(r1,{})," Download"]}),a("button",{type:"button",css:RS(e),onClick:()=>K(E.id),children:[s(lr,{})," Remove"]})]})]},E.id))]})]})}):null,w?s("div",{css:Fo,onClick:()=>_(null),children:a("div",{css:Rc(e),onClick:E=>E.stopPropagation(),children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{css:Ho,children:"Course Assignments"}),a("p",{css:Wo(e),children:["Due dates for ",w.course_name]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>_(null),children:s(Te,{})})]}),s("div",{css:Yo,children:w.meta.assignments.length===0?s("p",{css:Ue(e),style:{margin:0},children:"No assignment due dates found for this course yet. Add them from the Calendar tab."}):w.meta.assignments.map((E,Q)=>a("div",{css:Ac(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".6rem",flexWrap:"wrap"},children:[s("h4",{style:{margin:0,fontSize:"1.5rem",fontWeight:800},children:E.title}),s("span",{css:jc(e),style:{color:E.status==="Past due"?"#059669":E.status==="Due today"?"#ca8a04":"#2563eb",borderColor:E.status==="Past due"?"#86efac":E.status==="Due today"?"#fde68a":"#bfdbfe",background:E.status==="Past due"?"#ecfdf5":E.status==="Due today"?"#fffbeb":"#eff6ff"},children:E.status})]}),s("p",{css:Ue(e),style:{marginTop:".3rem"},children:E.description}),a("p",{css:Ue(e),style:{marginTop:".15rem"},children:["Due: ",Dc(E.due).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),E.dueTime?` · Time: ${Oo(E.dueTime)}`:""]})]},`${E.title}-${Q}`))})]})}):null,G?s("div",{css:Fo,onClick:()=>A(null),children:a("div",{css:FS(e),onClick:E=>E.stopPropagation(),role:"dialog","aria-labelledby":"enrolled-modal-title",children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{id:"enrolled-modal-title",css:Ho,children:"Enrolled students"}),a("p",{css:Wo(e),children:[G.course_name," (",G.course_code,")"]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>A(null),"aria-label":"Close",children:s(Te,{})})]}),s("div",{css:Yo,children:j(G).length===0?s("p",{css:Ue(e),style:{margin:0},children:"No students are enrolled in this module yet."}):j(G).map(E=>a("div",{css:BS(e),children:[s("strong",{style:{display:"block",marginBottom:"0.25rem"},children:E.full_name||"—"}),a("p",{css:Ue(e),style:{margin:0,display:"flex",alignItems:"center",gap:"0.35rem",flexWrap:"wrap"},children:[s(af,{style:{flexShrink:0,opacity:.85},"aria-hidden":!0}),E.email&&String(E.email).trim()?s("a",{href:`mailto:${String(E.email).trim()}`,css:c`
                            color: ${qt};
                            text-decoration: none;
                            word-break: break-all;
                            &:hover {
                              text-decoration: underline;
                            }
                          `,children:String(E.email).trim()}):s("span",{children:"—"})]}),E.student_id?a("p",{css:Ue(e),style:{margin:"0.35rem 0 0",fontSize:"0.82rem"},children:["ID: ",E.student_id]}):null]},E.id))})]})}):null,C?s("div",{css:Fo,onClick:()=>b(null),children:a("div",{css:Rc(e),onClick:E=>E.stopPropagation(),children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{css:Ho,children:C.course_name}),a("p",{css:Wo(e),children:[C.course_code," · ",Number(C.credits)||0," Credits · ",C.department||"General"]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>b(null),children:s(Te,{})})]}),a("div",{css:Yo,children:[s("h4",{style:{margin:0,fontSize:"1.8rem"},children:"Overview"}),s("p",{css:Ue(e),children:C.meta.description}),s("h4",{style:{margin:"0 0 .45rem 0",fontSize:"1.8rem"},children:"Scheduled Sessions"}),s("div",{children:C.meta.classes.length===0?s("p",{css:Ue(e),style:{margin:0},children:"No scheduled classes found in timetable."}):C.meta.classes.map((E,Q)=>a("div",{style:{display:"grid",gridTemplateColumns:"28px 1fr",gap:".5rem",padding:".5rem .6rem",borderBottom:`1px solid ${e?"#303030":"#f3f4f6"}`},children:[a("strong",{style:{color:qt},children:[Q+1,"."]}),a("span",{children:[Dc(E.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})," ·"," ",Oo(E.start_time),"-",Oo(E.end_time),E.room_location?` · ${E.room_location}`:""]})]},`${E.id}-${Q}`))}),s("h4",{style:{margin:".8rem 0 .45rem 0",fontSize:"1.8rem"},children:"Course Information"}),a("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".8rem"},children:[a("button",{type:"button",css:[Ac(e),c`
                      cursor: pointer;
                      text-align: left;
                      font: inherit;
                      color: inherit;
                      transition: border-color 0.15s, box-shadow 0.15s;
                      &:hover {
                        border-color: ${qt};
                        box-shadow: 0 0 0 1px ${qt}33;
                      }
                    `],onClick:()=>O(C,!0),children:[s("p",{css:Ue(e),style:{margin:0},children:"Enrolled students"}),s("strong",{children:C.meta.enrolled}),s("p",{css:Ue(e),style:{margin:"0.35rem 0 0",fontSize:"0.82rem"},children:"Click to view names and emails"})]}),a("div",{css:Ac(e),children:[s("p",{css:Ue(e),style:{margin:0},children:"Next session"}),s("strong",{children:C.meta.nextLecture})]})]})]})]})}):null]})}const Ih="/strack/".replace(/\/$/,""),Vl="#6366f1",HS={present:"Present",late:"Late",absent:"Absent"};function WS(){const e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Bh(e,t,n){return`strack_attendance_${String(e||"").toLowerCase()}_${t}_${n}`}function VS(e){const t=String(e||"").trim();if(!t)return"S";const n=t.split(/\s+/);return n.length<2?t.slice(0,2).toUpperCase():`${n[0][0]}${n[n.length-1][0]}`.toUpperCase()}function YS(e){const t=["#6366f1","#8b5cf6","#0ea5e9","#14b8a6","#f97316","#ec4899"],n=String(e||"");let r=0;for(let i=0;i<n.length;i+=1)r=r*31+n.charCodeAt(i)>>>0;return t[r%t.length]}const QS=c`
  width: 100%;
`,KS=c`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,ZS=c`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.15;
`,JS=e=>c`
  margin: 0.25rem 0 0;
  font-size: 1.1rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,GS=e=>c`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
  color: ${Vl};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Fh=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#262626":"#fff"};
  padding: 1rem 1.1rem;
  margin-bottom: 1rem;
`,Uh=c`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
`,Hh=e=>c`
  margin: 0.25rem 0 0.75rem;
  font-size: 1rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,XS=e=>c`
  width: 100%;
  border: 1px solid ${e?"#404040":"#d1d5db"};
  border-radius: 10px;
  background: ${e?"#1f1f1f":"#fff"};
  color: inherit;
  padding: 0.7rem 0.8rem;
  font-size: 1rem;
  font-family: inherit;
`,qS=e=>c`
  margin-top: 0.75rem;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 8px;
  background: ${e?"#1f2937":"#eef2f7"};
  color: ${e?"#d1d5db":"#1f2937"};
  padding: 0.55rem 0.7rem;
  font-size: 0.95rem;
  font-weight: 700;
`,MS=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.75rem;
`,e3=c`
  border: none;
  border-radius: 8px;
  background: ${Vl};
  color: #fff;
  padding: 0.55rem 0.95rem;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
`,Ic=e=>c`
  margin: 0.2rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 1rem;
`,t3=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.65rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.8rem;
  align-items: center;
`,n3=c`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
`,r3=e=>c`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: ${e};
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,i3=c`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
`,s3=e=>c`
  margin: 0.1rem 0 0;
  font-size: 0.92rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,o3=c`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
`,l3=(e,t)=>c`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 7px;
  padding: 0.25rem 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${t==="present"?"#059669":t==="late"?"#d97706":t==="absent"?"#dc2626":e?"#9ca3af":"#6b7280"};
  background: ${t==="present"?"rgba(16,185,129,0.12)":t==="late"?"rgba(245,158,11,0.12)":t==="absent"?"rgba(239,68,68,0.12)":"transparent"};
`,Bc=(e,t)=>c`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid ${t?Vl:e?"#4b5563":"#d1d5db"};
  background: ${t?e?"rgba(99,102,241,0.2)":"rgba(99,102,241,0.1)":"transparent"};
  color: ${t?Vl:e?"#d1d5db":"#4b5563"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,a3=c`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,Fc=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  background: ${e?"#262626":"#fff"};
  padding: 0.9rem;
`,Uc=c`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Hc=c`
  margin: 0.8rem 0 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
`,c3=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#262626":"#fff"};
  min-height: 220px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 1rem;
`;function u3({darkMode:e,userEmail:t}){const[n,r]=h.useState(""),[i,o]=h.useState([]),[l,u]=h.useState(""),[d,m]=h.useState({}),[y,v]=h.useState(!0),[w,_]=h.useState(""),C=h.useMemo(()=>WS(),[]),b=h.useMemo(()=>new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),[]);h.useEffect(()=>{let $=!0;async function N(){v(!0);try{const[P,F]=await Promise.all([fetch(`${Ih}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${Ih}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),W=await P.json(),V=await F.json();if(!$)return;const A=(W.success?W.lecturers||[]:[]).find(R=>String(R.email||"").trim().toLowerCase()===String(t||"").trim().toLowerCase()),O=String((A==null?void 0:A.lecturer_id)||"");r(O);const Z=(V.success?V.courses||[]:[]).filter(R=>String(R.lecturer_id||"").trim()===O);o(Z)}catch{if(!$)return;r(""),o([])}finally{$&&v(!1)}}return N(),()=>{$=!1}},[t]),h.useEffect(()=>{if(!l){m({});return}try{const $=Bh(t,l,C),N=localStorage.getItem($),P=N?JSON.parse(N):{};m(P&&typeof P=="object"?P:{})}catch{m({})}},[l,t,C]);const z=h.useMemo(()=>i.find($=>String($.id)===String(l))||null,[i,l]),g=h.useMemo(()=>Array.isArray(z==null?void 0:z.students)?z.students:[],[z]),f=h.useMemo(()=>{const $=g.length,N=g.filter(F=>["present","late","absent"].includes(d[F.id])).length,P=g.filter(F=>d[F.id]==="present").length;return{total:$,marked:N,present:P}},[g,d]),x=($,N)=>{_(""),m(P=>({...P,[$]:N}))},k=()=>{if(l)try{const $=Bh(t,l,C);localStorage.setItem($,JSON.stringify(d)),_("Attendance saved for today."),window.setTimeout(()=>_(""),2200)}catch{_("Could not save attendance locally."),window.setTimeout(()=>_(""),2200)}};return a("div",{css:QS,children:[a("div",{css:KS,children:[a("div",{children:[s("h1",{css:ZS,children:"Mark Attendance"}),s("p",{css:JS(e),children:"Track student attendance for your classes"})]}),s("div",{css:GS(e),"aria-hidden":!0,children:s(sx,{style:{width:24,height:24}})})]}),a("section",{css:Fh(e),children:[s("h2",{css:Uh,children:"Select Module"}),s("p",{css:Hh(e),children:"Choose a module to mark attendance"}),a("select",{css:XS(e),value:l,onChange:$=>u($.target.value),disabled:y||i.length===0,children:[s("option",{value:"",children:"Select a module"}),i.map($=>a("option",{value:String($.id),children:[$.course_code," - ",$.course_name]},$.id))]}),l?a("div",{css:qS(e),children:["Today: ",b]}):null]}),l?a(zt,{children:[a("section",{css:Fh(e),children:[a("div",{css:MS,children:[a("div",{children:[s("h2",{css:Uh,children:"Students"}),s("p",{css:Hh(e),children:"Mark attendance for each student"})]}),s("button",{type:"button",css:e3,onClick:k,children:"Save Attendance"})]}),g.map($=>{const N=d[$.id]||"";return a("article",{css:t3(e),children:[a("div",{css:n3,children:[s("span",{css:r3(YS($.student_id||$.id)),children:VS($.full_name)}),a("div",{children:[s("p",{css:i3,children:$.full_name||"Unknown student"}),s("p",{css:s3(e),children:$.student_id||"No student id"})]})]}),a("div",{css:o3,children:[s("span",{css:l3(e,N),children:N?HS[N]:"Not Marked"}),s("button",{type:"button",css:Bc(e,N==="present"),onClick:()=>x($.id,"present"),"aria-label":`Mark ${$.full_name} present`,children:s(ix,{})}),s("button",{type:"button",css:Bc(e,N==="late"),onClick:()=>x($.id,"late"),"aria-label":`Mark ${$.full_name} late`,children:s(tt,{})}),s("button",{type:"button",css:Bc(e,N==="absent"),onClick:()=>x($.id,"absent"),"aria-label":`Mark ${$.full_name} absent`,children:s(Xw,{})})]})]},$.id)}),g.length===0?s("p",{css:Ic(e),children:"No students enrolled in this module yet."}):null,w?s("p",{css:c`margin: 0.6rem 0 0; font-size: 0.9rem; color: #059669; font-weight: 600;`,children:w}):null]}),a("section",{css:a3,children:[a("article",{css:Fc(e),children:[s("h3",{css:Uc,children:"Total Students"}),s("p",{css:Hc,children:f.total})]}),a("article",{css:Fc(e),children:[s("h3",{css:Uc,children:"Marked Today"}),s("p",{css:Hc,children:f.marked})]}),a("article",{css:Fc(e),children:[s("h3",{css:Uc,children:"Present"}),s("p",{css:Hc,children:f.present})]})]})]}):s("div",{css:c3(e),children:a("div",{children:[s(Mw,{style:{width:38,height:38,opacity:.5}}),s("h3",{css:c`margin: 0.75rem 0 0.35rem; font-size: 1.75rem;`,children:"Select a module to begin"}),s("p",{css:Ic(e),children:"Choose a module from the dropdown above to mark attendance"})]})}),!y&&!n?s("p",{css:Ic(e),style:{marginTop:"0.9rem"},children:"We could not match your account to a lecturer profile."}):null]})}const Wh="/strack/".replace(/\/$/,""),Er="0.35s ease",d3=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,f3=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,p3=e=>c`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Er};
  }
`,h3=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Er};
`,Vh=e=>c`
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
  transition: color ${Er};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,m3=c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,g3=c`
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
`,y3=c`
  flex: 1;
  min-width: 0;
`,v3=e=>c`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Er};
`,w3=e=>c`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Er};
`,x3=c`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,b3=(e,t)=>c`
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
  transition: background ${Er}, color ${Er};

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
`,S3=c`
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
`,C3=(e,t,n)=>c`
  max-width: ${n?"min(100%, 1280px)":t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,Yh=c`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Qh=c`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,$3=[{id:"dashboard",label:"Dashboard",icon:Ca},{id:"attendance",label:"Attendance",icon:rx},{id:"performance",label:"Performance",icon:df},{id:"courses",label:"Courses",icon:sn},{id:"calendar",label:"Calendar",icon:gn},{id:"profile",label:"Profile",icon:$r}];function Kh(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Zh(e){return`strack_lecturer_profile_extra_${(e||"").toLowerCase()}`}function Jh(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function _3({darkMode:e,onToggleDarkMode:t}){const n=eo(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:o}=vf(),[l,u]=h.useState("dashboard"),[d,m]=h.useState(""),[y,v]=h.useState(""),[w,_]=h.useState(""),[C,b]=h.useState(!1),[z,g]=h.useState(""),[f,x]=h.useState({phone:"+44 7700 900123",office:"Building A, Room 305",address:"123 University Avenue, Newcastle upon Tyne",bio:"Computer Science lecturer focused on software engineering and student success."}),[k,$]=h.useState(f);let N="Lecturer";try{const O=localStorage.getItem("strack_user");if(O){const j=JSON.parse(O);j!=null&&j.name&&(N=j.name)}}catch{}h.useEffect(()=>{try{const O=localStorage.getItem("strack_user");if(O){const j=JSON.parse(O);j!=null&&j.email&&m(j.email);const Z=typeof(j==null?void 0:j.department)=="string"?j.department.trim():"",R=typeof(j==null?void 0:j.department_code)=="string"?j.department_code.trim():"";Z&&v(Z),R&&_(R)}}catch{}},[]);const P=h.useCallback(async()=>{if(d)try{const[O,j]=await Promise.all([fetch(`${Wh}/backend/lecturers.php`,{cache:"no-store"}),fetch(`${Wh}/backend/departments.php`,{cache:"no-store"})]),Z=await O.json(),R=await j.json(),K=Z.success?Z.lecturers||[]:[],S=d.toLowerCase().trim(),D=K.find(Q=>String(Q.email||"").toLowerCase().trim()===S),B=(D==null?void 0:D.department)!=null?String(D.department).trim():"";if(!B)return;const E=(R.success?R.departments||[]:[]).find(Q=>String(Q.name||"").trim()===B||String(Q.code||"").trim()===B||String(Q.name||"").trim().toLowerCase()===B.toLowerCase()||String(Q.code||"").trim().toLowerCase()===B.toLowerCase());E?(v(String(E.name||B).trim()),_(String(E.code||"").trim())):(v(B),_(""))}catch{}},[d]);h.useEffect(()=>{P()},[P]),h.useEffect(()=>{if(d)try{const O=localStorage.getItem(Zh(d));if(!O)return;const j=JSON.parse(O),Z={phone:Jh(j==null?void 0:j.phone),office:String((j==null?void 0:j.office)||f.office),address:String((j==null?void 0:j.address)||f.address),bio:String((j==null?void 0:j.bio)||f.bio)};x(Z),$(Z)}catch{}},[d]);const F=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},W=O=>{u(O),o()},V=()=>{$(f),g(""),b(!0)},G=()=>{$(f),g(""),b(!1)},A=()=>{const O=Jh(k.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(O.replace(/\s+/g," "))){g("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const Z={phone:O,office:(k.office||"").trim()||f.office,address:(k.address||"").trim()||f.address,bio:(k.bio||"").trim()||f.bio};x(Z),$(Z),g(""),b(!1);try{localStorage.setItem(Zh(d),JSON.stringify(Z))}catch{}};return a("div",{css:wf(e),children:[r?s("button",{type:"button",css:bf(e),onClick:o,"aria-label":"Close menu"}):null,a("aside",{css:xf(e,r),children:[a("header",{css:d3,children:[a("div",{css:f3,children:[s("div",{css:p3(e),children:s(Vs,{})}),s("span",{css:h3(e),children:"Strack"})]}),a("div",{css:c`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s(Ul,{darkMode:e,userEmail:d,placement:"sidebar"}),s("button",{type:"button",css:Vh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s($i,{}):s(_i,{})}),s("button",{type:"button",css:Ef(e),onClick:o,"aria-label":"Close menu",children:s(Te,{})})]})]}),a("div",{css:m3,children:[s("div",{css:g3,children:Kh(N)}),a("div",{css:y3,children:[s("div",{css:v3(e),children:N}),s("div",{css:w3(e),children:"Lecturer"})]})]}),s("nav",{css:x3,children:$3.map(({id:O,label:j,icon:Z})=>a("button",{type:"button",css:b3(e,l===O),onClick:()=>W(O),children:[s(Z,{}),j]},O))}),a("button",{type:"button",css:S3,onClick:F,children:[s(pf,{}),"Logout"]})]}),a("div",{css:Sf,children:[a("header",{css:Cf(e),children:[s("button",{type:"button",css:$f(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(ff,{})}),s("span",{css:_f(e),children:"Strack"}),a("div",{css:c`display: inline-flex; align-items: center; gap: 0.3rem;`,children:[s(Ul,{darkMode:e,userEmail:d}),s("button",{type:"button",css:Vh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s($i,{}):s(_i,{})})]})]}),s("main",{css:kf(e),children:a("div",{css:C3(e,l==="profile",l==="calendar"||l==="courses"||l==="attendance"),children:[l==="dashboard"&&a(zt,{children:[s("h1",{css:Yh,children:"Dashboard"}),s("p",{css:Qh,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),l==="attendance"&&s(u3,{darkMode:e,userEmail:d}),l==="performance"&&a(zt,{children:[s("h1",{css:Yh,children:"Performance"}),s("p",{css:Qh,children:"This is the performance page. View and analyse student performance and grades here."})]}),l==="courses"&&s(US,{darkMode:e,userEmail:d}),l==="calendar"&&s(xS,{darkMode:e,userEmail:d}),l==="profile"&&a("div",{css:s1(e),children:[a("header",{css:o1,children:[s("h1",{css:l1(e),children:"My Profile"}),s("p",{css:a1(e),children:"Manage your personal information and teaching profile."})]}),s("section",{css:c1(e),children:a("div",{css:u1,children:[a("div",{css:d1,children:[s("div",{css:p1,children:Kh(N)}),a("div",{css:f1,children:[s("h2",{css:h1,children:N}),a("div",{css:Il(e),children:["Department: ",y||"—"]}),a("div",{css:Il(e),children:["Department code: ",w||"—"]}),a("div",{css:m1,children:[s("span",{css:g1,children:"Lecturer"}),s("span",{css:y1(e),children:"2 Courses"})]})]})]}),C?null:a("button",{type:"button",css:v1,onClick:V,children:[s(Pn,{"aria-hidden":!0}),"Edit Profile"]})]})}),a("section",{css:Hx,"aria-label":"Teaching statistics",children:[a("article",{css:dr(e),children:[a("div",{css:fr,children:[s(sn,{"aria-hidden":!0}),s("span",{css:pr,children:"Courses"})]}),s("div",{css:hr,children:"2"}),s("div",{css:mr(e),children:"Active courses"})]}),a("article",{css:dr(e),children:[a("div",{css:fr,children:[s(On,{"aria-hidden":!0}),s("span",{css:pr,children:"Students"})]}),s("div",{css:hr,children:"156"}),s("div",{css:mr(e),children:"Total enrolled"})]}),a("article",{css:dr(e),children:[a("div",{css:fr,children:[s(tt,{"aria-hidden":!0}),s("span",{css:pr,children:"Hours / week"})]}),s("div",{css:hr,children:"18"}),s("div",{css:mr(e),children:"Teaching hours"})]})]}),a("section",{css:hf(e),children:[s("h2",{css:mf(e),children:"Personal Information"}),a("div",{css:w1,children:[a("div",{css:ct,children:[s("span",{css:ut,children:"Full Name"}),C?s("input",{css:Bl(e),value:N,readOnly:!0,"aria-readonly":"true"}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s($r,{"aria-hidden":!0})}),s("span",{css:Ut,children:N})]})]}),a("div",{css:ct,children:[s("span",{css:ut,children:"Email Address"}),C?s("input",{css:Bl(e),value:d||"lecturer@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(af,{"aria-hidden":!0})}),s("span",{css:Ut,children:d||"lecturer@uni.ac.uk"})]})]}),a("div",{css:ct,children:[s("span",{css:ut,children:"Phone Number"}),C?s("input",{css:rn(e),value:k.phone,onChange:O=>$(j=>({...j,phone:O.target.value})),placeholder:"+44 7700 900123"}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(n1,{"aria-hidden":!0})}),s("span",{css:Ut,children:f.phone})]})]}),a("div",{css:ct,children:[s("span",{css:ut,children:"Office Location"}),C?s("input",{css:rn(e),value:k.office,onChange:O=>$(j=>({...j,office:O.target.value}))}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(ox,{"aria-hidden":!0})}),s("span",{css:Ut,children:f.office})]})]}),a("div",{css:[ct,Wx],children:[s("span",{css:ut,children:"Address"}),C?s("input",{css:rn(e),value:k.address,onChange:O=>$(j=>({...j,address:O.target.value}))}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(Vn,{"aria-hidden":!0})}),s("span",{css:Ut,children:f.address})]})]}),a("div",{css:[ct,x1],children:[s("span",{css:ut,children:"Bio"}),C?s("textarea",{css:b1(e),value:k.bio,onChange:O=>$(j=>({...j,bio:O.target.value}))}):a("div",{css:Bt(e),children:[s("span",{css:Ft,children:s(_r,{"aria-hidden":!0})}),s("span",{css:Ut,children:f.bio})]})]})]}),C?a("div",{css:S1(e),children:[s("button",{type:"button",css:Ys(!0),onClick:A,children:"Save"}),s("button",{type:"button",css:Ys(!1),onClick:G,children:"Cancel"})]}):null,z?s("div",{css:gf(e),children:z}):null]}),s(C1,{darkMode:e,userEmail:d})]})]})})]})]})}const Fr="/strack",Mu="0.35s ease",ro="#7c3aed",Lf="#6d28d9",Wc=[{bar:"#2563eb",bg:"rgba(37, 99, 235, 0.12)"},{bar:"#7c3aed",bg:"rgba(124, 58, 237, 0.12)"},{bar:"#db2777",bg:"rgba(219, 39, 119, 0.12)"},{bar:"#059669",bg:"rgba(5, 150, 105, 0.12)"},{bar:"#ea580c",bg:"rgba(234, 88, 12, 0.12)"}];function kt(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Gh(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function E3(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function ed(e){const t=new Date(e);t.setHours(0,0,0,0);const n=t.getDay(),r=n===0?-6:1-n;return t.setDate(t.getDate()+r),t}function Xn(e){if(!e)return"";const t=e.split(":");return`${t[0]}:${t[1]}`}function Xh(e){const t=e.split(":").map(Number);return t[0]*60+(t[1]||0)}function Vc(e){const t=e.entry_type==="class"&&e.course_code?e.course_code:`${e.entry_type}-${e.id}-${e.event_title||""}`;let n=0;for(let r=0;r<t.length;r++)n=(n+t.charCodeAt(r)*(r+1))%1e5;return Math.abs(n)%5}function Qo(e){return e.entry_type==="event"?e.event_title||"School event":e.course_code||"Class"}function Yc(e,t){if(!e)return[];const n=(e.lecturer_id||"").toString().trim();if(!n)return[];const r=n.toLowerCase();return t.filter(i=>(i.lecturer_id||"").toString().trim().toLowerCase()===r)}function k3(e,t){if(e==="monthly"){const i=t.getFullYear(),o=t.getMonth(),l=new Date(i,o,1),u=new Date(i,o+1,0);return{from:kt(l),to:kt(u)}}const n=ed(t),r=new Date(n);return r.setDate(r.getDate()+6),{from:kt(n),to:kt(r)}}const Qc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],L3=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],N3=c`
  width: 100%;
`,z3=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,P3=c`
  flex: 1;
  min-width: 0;
`,D3=c`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,T3=e=>c`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};
  margin: 0;
  transition: color ${Mu};
`,j3=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`,O3=e=>c`
  display: inline-flex;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  overflow: hidden;
  background: ${e?"#262626":"#fff"};
`,Kc=(e,t)=>c`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  cursor: pointer;
  background: ${t?ro:"transparent"};
  color: ${t?"#fff":e?"#e5e7eb":"#1a1a1a"};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${t?Lf:e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"};
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    flex-shrink: 0;
  }
`,R3=c`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: ${ro};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${Lf};
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }
`,A3=e=>c`
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
  transition: background ${Mu}, border-color ${Mu};
`,qh=c`
  flex: 1;
  min-width: 160px;
`,Et=e=>c`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
`,Ko=e=>c`
  width: 100%;
  padding: 0.55rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${e?"#1a1a1a":"#fff"};
  color: inherit;
  box-sizing: border-box;
`,I3=c`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
`,Mh=e=>c`
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
`,B3=e=>c`
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
`,F3=e=>c`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e?"#e5e7eb":"#111827"};
  min-width: 140px;
  text-align: center;
`,U3=e=>c`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.5rem;
  background: ${e?"#1a1a1a":"#f3f4f6"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  padding: 0.75rem;
`,H3=e=>c`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.25rem;
`,em=(e,t,n)=>c`
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
`,W3=(e,t)=>c`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${t?e?"#e9d5ff":"#6d28d9":e?"#f3f4f6":"#111827"};
`,V3=e=>c`
  font-size: 0.7rem;
  color: ${"#9ca3af"};
  margin-bottom: 0.35rem;
`,Y3=c`
  font-size: 0.72rem;
  color: #9ca3af;
  font-style: italic;
  margin-top: 0.25rem;
`,Q3=e=>c`
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
`,K3=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  overflow: auto;
  background: ${e?"#1a1a1a":"#fff"};
`,Z3=c`
  display: flex;
  min-width: 720px;
`,J3=e=>c`
  width: 56px;
  flex-shrink: 0;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,G3=(e,t)=>c`
  flex: 1;
  min-width: 92px;
  text-align: center;
  padding: 0.55rem 0.3rem;
  font-size: 0.78rem;
  font-weight: 700;
  border-left: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  border-bottom: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${t?e?"rgba(124,58,237,0.24)":"rgba(124,58,237,0.10)":e?"#262626":"#f9fafb"};
`,X3=c`
  display: flex;
  min-width: 720px;
`,q3=e=>c`
  width: 56px;
  flex-shrink: 0;
  height: ${$1}px;
  border-right: 1px solid ${e?"#404040":"#e5e7eb"};
  position: relative;
`,M3=e=>c`
  position: absolute;
  left: 0;
  right: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  text-align: right;
  transform: translateY(-0.45rem);
`,e6=(e,t)=>c`
  flex: 1;
  min-width: 92px;
  height: ${$1}px;
  position: relative;
  border-left: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${t?e?"repeating-linear-gradient(to bottom, rgba(124,58,237,0.16) 0, rgba(124,58,237,0.16) 47px, #5b21b6 47px, #5b21b6 48px)":"repeating-linear-gradient(to bottom, rgba(124,58,237,0.06) 0, rgba(124,58,237,0.06) 47px, #ddd6fe 47px, #ddd6fe 48px)":e?"repeating-linear-gradient(to bottom, #1a1a1a 0, #1a1a1a 47px, #333 47px, #333 48px)":"repeating-linear-gradient(to bottom, #fff 0, #fff 47px, #f3f4f6 47px, #f3f4f6 48px)"};
`,t6=(e,t,n,r,i)=>c`
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
`,n6=e=>c`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
`,r6=(e,t)=>c`
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
    color: ${ro};
  }
`,i6=e=>c`
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
`,s6=e=>c`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: ${e?"#7c3aed":"#ede9fe"};
  color: ${e?"#fff":"#5b21b6"};
`,o6=(e,t)=>c`
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
`,l6=c`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  min-width: 0;
`,a6=e=>c`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
  margin-left: 0.35rem;
  vertical-align: middle;
`,c6=e=>c`
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
`,u6=c`
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
`,Zc=(e,t)=>c`
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
`,d6=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,f6=e=>c`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
`,p6=e=>c`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
`,h6=e=>c`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${e?"#fff":"#111"};
`,tm=e=>c`
  margin: 0.35rem 0 0 0;
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,m6=c`
  padding: 1.25rem 1.5rem;
`,g6=e=>c`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid ${e?"#404040":"#f3f4f6"};
`,y6=c`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`,v6=c`
  padding: 0.5rem 1.1rem;
  border: none;
  border-radius: 8px;
  background: ${ro};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${Lf};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,w6=e=>c`
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
`,Zt=c`
  margin-bottom: 1rem;
`,sr=e=>c`
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
    border-color: ${ro};
  }
`,x6=e=>c`
  ${sr(e)}
  min-height: 88px;
  resize: vertical;
`,b6=c`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`,S6=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem;
  max-height: 160px;
  overflow: auto;
`,C6=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.25rem;
  font-size: 0.88rem;
`,nm=e=>c`
  padding: 2rem;
  text-align: center;
  color: ${e?"#9ca3af":"#6b7280"};
`,bs=8,Nf=18,Yl=48,$1=(Nf-bs)*Yl;function $6(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),o=r.getDay(),l=i.getDate(),u=[];for(let d=0;d<o;d++)u.push({type:"pad",date:null});for(let d=1;d<=l;d++)u.push({type:"day",date:new Date(t,n,d)});for(;u.length%7!==0;)u.push({type:"pad",date:null});return u}function _6(e){const t=Xh(e.start_time),n=Xh(e.end_time),r=bs*60,i=Nf*60;if(n<=r||t>=i)return null;const o=Math.max(t,r),l=Math.min(n,i),u=(o-r)/60*Yl,d=Math.max((l-o)/60*Yl,28);return{top:u,height:d}}function E6({darkMode:e}){const[t,n]=h.useState("monthly"),[r,i]=h.useState(()=>new Date),[o,l]=h.useState(""),[u,d]=h.useState(""),[m,y]=h.useState([]),[v,w]=h.useState(!0),[_,C]=h.useState([]),[b,z]=h.useState([]),[g,f]=h.useState([]),[x,k]=h.useState(!1),[$,N]=h.useState(null),[P,F]=h.useState(!1),[W,V]=h.useState({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:"",start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),G=r.getTime(),{from:A,to:O}=h.useMemo(()=>k3(t,r),[t,G]),j=h.useCallback(async()=>{try{const[L,H,J]=await Promise.all([fetch(`${Fr}/backend/courses.php`),fetch(`${Fr}/backend/lecturers.php`),fetch(`${Fr}/backend/departments.php`)]),pe=await L.json(),be=await H.json(),ie=await J.json();pe.success&&C(pe.courses||[]),be.success&&z(be.lecturers||[]),ie.success&&f(ie.departments||[])}catch{C([]),z([]),f([])}},[]),Z=h.useCallback(async()=>{w(!0);try{const H=await(await fetch(`${Fr}/backend/timetable.php?from=${encodeURIComponent(A)}&to=${encodeURIComponent(O)}`,{cache:"no-store"})).json();H.success?y(H.entries||[]):y([])}catch{y([])}finally{w(!1)}},[A,O]);h.useEffect(()=>{j()},[j]),h.useEffect(()=>{Z()},[Z]);const R=h.useMemo(()=>m.filter(L=>{if(o&&!(L.department&&L.department===o||L.lecturers&&L.lecturers.some(J=>J.department===o)))return!1;if(u){const H=parseInt(u,10);if(!(L.lecturers&&L.lecturers.some(pe=>pe.id===H)))return!1}return!0}),[m,o,u]),K=h.useMemo(()=>{const L=new Set(g.map(H=>H.name).filter(Boolean));return _.forEach(H=>{H.department&&L.add(H.department)}),Array.from(L).sort()},[g,_]),S=h.useMemo(()=>W.course_id?_.find(L=>String(L.id)===String(W.course_id)):null,[_,W.course_id]),D=h.useMemo(()=>Yc(S,b),[S,b]),B=h.useMemo(()=>{if(t==="monthly")return r.toLocaleString(void 0,{month:"long",year:"numeric"});const L=ed(r),H=new Date(L);return H.setDate(H.getDate()+6),`${kt(L).replace(/-/g,"/")} – ${kt(H).replace(/-/g,"/")}`},[t,G]),U=L=>{N(null);const H=kt(L||new Date);V({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:H,start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),k(!0)},E=L=>{N(L.id);const H=L.entry_type==="class"&&L.course_id?_.find(be=>Number(be.id)===Number(L.course_id)):null,J=new Set(Yc(H,b).map(be=>be.id)),pe=L.entry_type==="class"?(L.lecturers||[]).map(be=>be.id).filter(be=>J.has(be)):[];V({entry_type:L.entry_type,course_id:L.course_id?String(L.course_id):"",event_title:L.event_title||"",event_description:L.event_description||"",entry_date:L.entry_date,start_time:Xn(L.start_time),end_time:Xn(L.end_time),room_location:L.room_location||"",lecturer_ids:pe}),k(!0)},Q=()=>k(!1),te=L=>{V(H=>{const J=new Set(H.lecturer_ids);return J.has(L)?J.delete(L):J.add(L),{...H,lecturer_ids:Array.from(J)}})},ne=async()=>{const L={entry_type:W.entry_type,course_id:W.entry_type==="class"?parseInt(W.course_id,10):0,event_title:W.event_title,event_description:W.event_description,entry_date:W.entry_date,start_time:W.start_time,end_time:W.end_time,room_location:W.room_location,lecturer_account_ids:W.entry_type==="class"?W.lecturer_ids:[]};if(W.entry_type==="class"&&!L.course_id){window.alert("Please select a module.");return}if(W.entry_type==="event"&&!L.event_title.trim()){window.alert("Please enter an event title.");return}F(!0);try{const H=`${Fr}/backend/timetable.php`,J=$?{method:"PUT",body:JSON.stringify({id:$,...L})}:{method:"POST",body:JSON.stringify(L)},be=await(await fetch(H,{...J,headers:{"Content-Type":"application/json"}})).json();if(!be.success){window.alert(be.error||"Could not save.");return}Q(),Z()}catch{window.alert("Network error.")}finally{F(!1)}},oe=async L=>{if(window.confirm("Delete this timetable entry?"))try{const J=await(await fetch(`${Fr}/backend/timetable.php?id=${L.id}`,{method:"DELETE"})).json();if(!J.success){window.alert(J.error||"Could not delete.");return}Z()}catch{window.alert("Network error.")}},ce=()=>i(new Date),Pe=()=>{i(t==="monthly"?L=>new Date(L.getFullYear(),L.getMonth()-1,1):L=>{const H=new Date(L);return H.setDate(H.getDate()-7),H})},re=()=>{i(t==="monthly"?L=>new Date(L.getFullYear(),L.getMonth()+1,1):L=>{const H=new Date(L);return H.setDate(H.getDate()+7),H})},gt=W.entry_date?L3[Gh(W.entry_date).getDay()]:"",ue=h.useMemo(()=>{const L=new Date;return L.setHours(0,0,0,0),L},[]),De=kt(ue),ln=h.useMemo(()=>$6(r),[G,t]),Yt=h.useMemo(()=>{const L={};return R.forEach(H=>{L[H.entry_date]||(L[H.entry_date]=[]),L[H.entry_date].push(H)}),Object.keys(L).forEach(H=>L[H].sort((J,pe)=>J.start_time.localeCompare(pe.start_time))),L},[R]),Qt=h.useMemo(()=>Object.keys(Yt).sort().map(H=>({date:H,items:Yt[H]})),[Yt]),Sn=ed(r),Di=Array.from({length:7},(L,H)=>{const J=new Date(Sn);return J.setDate(J.getDate()+H),J}),io=Array.from({length:Nf-bs},(L,H)=>bs+H);return a("div",{css:N3,children:[a("div",{css:z3,children:[a("div",{css:P3,children:[s("h1",{css:D3,children:"Timetable Management"}),s("p",{css:T3(e),children:"Manage class schedules and school events"})]}),a("div",{css:j3,children:[a("div",{css:O3(e),children:[a("button",{type:"button",css:Kc(e,t==="monthly"),onClick:()=>n("monthly"),children:[s(Ca,{"aria-hidden":!0}),"Monthly"]}),a("button",{type:"button",css:Kc(e,t==="weekly"),onClick:()=>n("weekly"),children:[s(qw,{"aria-hidden":!0}),"Weekly"]}),a("button",{type:"button",css:Kc(e,t==="list"),onClick:()=>n("list"),children:[s(tx,{"aria-hidden":!0}),"List"]})]}),a("button",{type:"button",css:R3,onClick:()=>U(null),children:[s(t1,{"aria-hidden":!0}),"Add Entry"]})]})]}),a("div",{css:A3(e),children:[a("div",{css:qh,children:[s("label",{css:Et(e),children:"Filter by Department"}),a("select",{css:Ko(e),value:o,onChange:L=>l(L.target.value),children:[s("option",{value:"",children:"All Departments"}),K.map(L=>s("option",{value:L,children:L},L))]})]}),a("div",{css:qh,children:[s("label",{css:Et(e),children:"Filter by Lecturer"}),a("select",{css:Ko(e),value:u,onChange:L=>d(L.target.value),children:[s("option",{value:"",children:"All Lecturers"}),b.map(L=>a("option",{value:String(L.id),children:[L.full_name," (",L.lecturer_id,")"]},L.id))]})]}),a("div",{css:I3,children:[s("button",{type:"button",css:Mh(e),onClick:Pe,"aria-label":"Previous",children:s(uf,{})}),s("button",{type:"button",css:B3(e),onClick:ce,children:"Today"}),s("button",{type:"button",css:Mh(e),onClick:re,"aria-label":"Next",children:s(cf,{})}),s("span",{css:F3(e),children:B})]})]}),v?s("p",{css:nm(e),children:"Loading timetable…"}):t==="monthly"?a("div",{css:U3(e),children:[Qc.map(L=>s("div",{css:H3(e),children:L},L)),ln.map((L,H)=>{if(L.type==="pad")return s("div",{css:em(e,!0,!1)},`pad-${H}`);const J=kt(L.date),pe=J===De,be=Yt[J]||[],ie=be.slice(0,3),an=be.length-ie.length;return a("div",{role:"button",tabIndex:0,css:em(e,!1,pe),onClick:()=>U(L.date),onKeyDown:Ye=>Ye.key==="Enter"&&U(L.date),children:[a("div",{css:W3(e,pe),children:[L.date.getDate()," ",pe?"• Today":""]}),s("div",{css:V3(e),children:Qc[L.date.getDay()]}),ie.length===0?s("p",{css:Y3,children:"Click to add"}):ie.map(Ye=>{const zr=Vc(Ye),Ti=Wc[zr];return a("div",{css:Q3(Ti.bar),onClick:Pr=>{Pr.stopPropagation(),E(Ye)},onKeyDown:Pr=>Pr.stopPropagation(),role:"presentation",children:[s(tt,{}),Qo(Ye),s("span",{style:{opacity:.95,fontWeight:600},children:Xn(Ye.start_time)})]},Ye.id)}),an>0&&a("div",{style:{fontSize:"0.65rem",color:"#6b7280",marginTop:2},children:["+",an," more"]})]},J)})]}):t==="weekly"?a("div",{css:K3(e),children:[a("div",{css:Z3,children:[s("div",{css:J3(e)}),Di.map(L=>a("div",{css:G3(e,E3(L,ue)),children:[Qc[L.getDay()],s("div",{style:{fontWeight:500,fontSize:"0.75rem",opacity:.85},children:L.getDate()})]},kt(L)))]}),a("div",{css:X3,children:[s("div",{css:q3(e),children:io.map(L=>a("div",{css:M3(e),style:{top:(L-bs)*Yl},children:[String(L).padStart(2,"0"),":00"]},L))}),Di.map(L=>{const H=kt(L);return s("div",{css:e6(e,H===De),children:(Yt[H]||[]).map(J=>{const pe=_6(J);if(!pe)return null;const be=Vc(J),ie=Wc[be],an=J.entry_type==="event";return a("div",{role:"button",tabIndex:0,css:t6(e,pe.top,pe.height,ie.bar,ie.bg),onClick:()=>E(J),onKeyDown:Ye=>Ye.key==="Enter"&&E(J),children:[an&&s(Al,{style:{width:11,height:11,opacity:.9,marginBottom:2,display:"block"}}),s("div",{style:{fontWeight:800},children:Qo(J)}),a("div",{style:{fontWeight:500,opacity:.95,marginTop:2},children:[Xn(J.start_time)," – ",Xn(J.end_time)]}),J.room_location&&a("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:4,fontWeight:600,opacity:.9},children:[s(Vn,{style:{width:12,height:12}}),J.room_location]}),(J.lecturers||[]).length>0&&a("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:2,fontWeight:500,fontSize:"0.68rem",opacity:.95},children:[s($r,{style:{width:12,height:12}}),J.lecturers[0].full_name,(J.lecturers||[]).length>1?"…":""]})]},J.id)})},H)})]})]}):s("div",{children:Qt.length===0?s("p",{css:nm(e),children:"No entries in this range. Use Add Entry or pick another week."}):Qt.map(({date:L,items:H})=>{const J=Gh(L),pe=L===De,be=J.toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"});return a("div",{css:n6(e),children:[a("div",{css:r6(e,pe),children:[s(gn,{"aria-hidden":!0}),be,pe&&s("span",{css:s6(e),children:"Today"}),a("span",{css:i6(e),children:[H.length," ",H.length===1?"entry":"entries"]})]}),H.map(ie=>{const an=Vc(ie),Ye=Wc[an];return s("div",{css:o6(e,Ye.bar),children:a("div",{css:l6,children:[a("div",{style:{minWidth:0,flex:1},children:[a("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.35rem"},children:[ie.entry_type==="event"?s(Al,{style:{width:18,height:18,color:Ye.bar}}):s(sn,{style:{width:18,height:18,color:Ye.bar}}),s("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:ie.entry_type==="class"?`${Qo(ie)} – ${ie.course_name||"Module"}`:Qo(ie)}),s("span",{css:a6(e),children:ie.entry_type==="class"?"Class":"Event"})]}),ie.entry_type==="event"&&ie.event_description&&s("p",{style:{margin:"0.35rem 0 0 0",fontSize:"0.85rem",opacity:.85},children:ie.event_description}),a("div",{css:c6(e),children:[a("span",{children:[s(tt,{}),Xn(ie.start_time)," – ",Xn(ie.end_time)]}),ie.room_location&&a("span",{children:[s(Vn,{}),ie.room_location]}),(ie.lecturers||[]).length>0&&a("span",{children:[s($r,{}),(ie.lecturers||[]).map(zr=>zr.full_name).join(", ")]})]})]}),a("div",{css:u6,children:[s("button",{type:"button",css:Zc(e,!1),title:"Edit",onClick:()=>E(ie),children:s(Pn,{})}),s("button",{type:"button",css:Zc(e,!0),title:"Delete",onClick:()=>oe(ie),children:s(lr,{})})]})]})},ie.id)})]},L)})}),x&&s("div",{css:d6,role:"presentation",onClick:Q,children:a("div",{css:f6(e),onClick:L=>L.stopPropagation(),children:[s("div",{css:p6(e),children:a("div",{css:y6,children:[a("div",{children:[s("h3",{css:h6(e),children:$?"Edit Timetable Entry":"Add New Timetable Entry"}),s("p",{css:tm(e),children:"Create or update a class or school event."})]}),s("button",{type:"button",css:Zc(e,!1),onClick:Q,"aria-label":"Close",children:s(Te,{})})]})}),a("div",{css:m6,children:[a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Entry Type"}),a("select",{css:Ko(e),value:W.entry_type,onChange:L=>{const H=L.target.value==="event"?"event":"class";V(J=>({...J,entry_type:H,lecturer_ids:H==="event"?[]:J.entry_type==="event"?[]:J.lecturer_ids}))},children:[s("option",{value:"class",children:"Class"}),s("option",{value:"event",children:"School Event"})]})]}),W.entry_type==="class"?a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Module"}),a("select",{css:Ko(e),value:W.course_id,onChange:L=>{const H=L.target.value,J=_.find(ie=>String(ie.id)===H),pe=Yc(J,b),be=pe.length===1?[pe[0].id]:[];V(ie=>({...ie,course_id:H,lecturer_ids:be}))},children:[s("option",{value:"",children:"Select module"}),_.map(L=>a("option",{value:String(L.id),children:[L.course_code," — ",L.course_name]},L.id))]})]}):a(zt,{children:[a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Event Title"}),s("input",{type:"text",css:sr(e),placeholder:"e.g. Annual Sports Day",value:W.event_title,onChange:L=>V(H=>({...H,event_title:L.target.value}))})]}),a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Event Description"}),s("textarea",{css:x6(e),placeholder:"Brief description of the event",value:W.event_description,onChange:L=>V(H=>({...H,event_description:L.target.value}))})]})]}),a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Specific Date"}),s("input",{type:"date",css:sr(e),value:W.entry_date,onChange:L=>V(H=>({...H,entry_date:L.target.value}))}),s("p",{css:tm(e),style:{marginTop:"0.35rem"},children:"Select the specific date for this class or event."})]}),a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Day (auto-filled)"}),s("input",{type:"text",css:sr(e),value:gt,readOnly:!0,disabled:!0,placeholder:"Will be set based on selected date"})]}),a("div",{css:b6,children:[a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Start Time"}),s("input",{type:"time",css:sr(e),value:W.start_time,onChange:L=>V(H=>({...H,start_time:L.target.value}))})]}),a("div",{css:Zt,children:[s("label",{css:Et(e),children:"End Time"}),s("input",{type:"time",css:sr(e),value:W.end_time,onChange:L=>V(H=>({...H,end_time:L.target.value}))})]})]}),a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Room / Location"}),s("input",{type:"text",css:sr(e),placeholder:"e.g. CS-101, Lab 3",value:W.room_location,onChange:L=>V(H=>({...H,room_location:L.target.value}))})]}),W.entry_type==="class"&&a("div",{css:Zt,children:[s("label",{css:Et(e),children:"Lecturer(s) for this module"}),s("div",{css:S6(e),children:W.course_id?D.length===0?s("span",{style:{fontSize:"0.85rem",opacity:.8},children:"This module has no linked lecturer. Assign one in the Courses section."}):D.map(L=>a("label",{css:C6,children:[s("input",{type:"checkbox",checked:W.lecturer_ids.includes(L.id),onChange:()=>te(L.id)}),L.full_name,L.department?` (${L.department})`:""]},L.id)):s("span",{style:{fontSize:"0.85rem",opacity:.8},children:"Select a module to see assigned lecturer(s)."})})]})]}),a("div",{css:g6(e),children:[s("button",{type:"button",css:w6(e),onClick:Q,children:"Cancel"}),s("button",{type:"button",css:v6,onClick:ne,disabled:P,children:P?"Saving…":$?"Save Changes":"Create Entry"})]})]})})]})}const Ne="/strack",se="0.35s ease",k6=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,L6=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,N6=e=>c`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${se};
  }
`,z6=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${se};
`,rm=e=>c`
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
  transition: color ${se};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,P6=c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,D6=c`
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
`,T6=c`
  flex: 1;
  min-width: 0;
`,j6=e=>c`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${se};
`,O6=e=>c`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${se};
`,R6=c`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,A6=(e,t)=>c`
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
  transition: background ${se}, color ${se};

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
`,I6=c`
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
`,B6=(e,t)=>c`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,Jc=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Gc=c`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Ur=e=>c`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${se};
`,Xc=c`
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
`,Zo=e=>c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  margin-bottom: 1rem;
  transition: border-color ${se}, background ${se};

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
`,qc=c`
  margin-bottom: 1rem;
`,Mc=c`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,qn=e=>c`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,Mn=e=>c`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,er=e=>c`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const tr=e=>c`
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
`,nr=c`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,F6=(e,t)=>c`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${se}, color ${se};
`,U6=c`
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
`,H6=c`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,W6=c`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,im=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,sm=c`
  flex: 1;
  min-width: 0;
`,om=c`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,lm=e=>c`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${se};
`,am=c`
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
`,V6=e=>c`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${se}, box-shadow ${se};
`,Y6=e=>c`
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
`,Q6=e=>c`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${se};
`,K6=e=>c`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${se};
`,Z6=e=>c`
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
`,J6=c`
  margin-top: 1.5rem;
`,G6=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,X6=c`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,q6=e=>c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  transition: border-color ${se}, background ${se};

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
`,ns=e=>c`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${se}, box-shadow ${se};
`,le=e=>c`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1a1a1a":"#f9fafb"};
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  transition: color ${se}, background ${se}, border-color ${se};
`,X=e=>c`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${se}, border-color ${se};
`,rs=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,or=e=>c`
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
`,is=e=>c`
  ${or(e)}
  &:hover {
    color: #dc2626;
  }
`,Hr=c`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Wr=e=>c`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${se};
`,Vr=e=>c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${se};
`,Yr=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${se};
`,Qr=e=>c`
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
`,Kr=c`
  padding: 1.5rem;
`,ye=c`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,ve=e=>c`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${se};
`,M6=e=>c`
  margin: 0.35rem 0 0;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.35;
`,Ce=e=>c`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${se}, background ${se};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${e?"#6b7280":"#9ca3af"};
  }
`,cm=e=>c`
  ${Ce(e)}
  min-height: 80px;
  resize: vertical;
`,um=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
  max-height: 180px;
  overflow: auto;
  background: ${e?"#262626":"#fff"};
`,dm=e=>c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.15rem;
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#1f2937"};
`,Zr=e=>c`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${se};
`,Jr=e=>c`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${se}, background ${se};

  &:hover {
    background: ${e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"};
  }
`,ss=c`
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
`,e7=[{id:"dashboard",label:"Dashboard",icon:Ca},{id:"students",label:"Students",icon:On},{id:"lecturers",label:"Lecturers",icon:Vs},{id:"courses",label:"Courses",icon:sn},{id:"departments",label:"Departments",icon:us},{id:"degrees",label:"Degrees",icon:sn},{id:"calendar",label:"Calendar",icon:gn}];function t7(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function n7({darkMode:e,onToggleDarkMode:t}){const n=eo(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:o}=vf(),[l,u]=h.useState("dashboard"),[d,m]=h.useState([]),[y,v]=h.useState(!1),[w,_]=h.useState(""),[C,b]=h.useState(!1),[z,g]=h.useState(null),[f,x]=h.useState({code:"",name:"",description:""}),[k,$]=h.useState(!1),N=h.useCallback(async()=>{v(!0);try{const T=await(await fetch(`${Ne}/backend/departments.php`)).json();T.success&&m(T.departments||[])}catch{m([])}finally{v(!1)}},[]);h.useEffect(()=>{l==="departments"&&N()},[l,N]);const[P,F]=h.useState([]),[W,V]=h.useState(!1),[G,A]=h.useState(""),[O,j]=h.useState(!1),[Z,R]=h.useState(null),[K,S]=h.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:"",degree:"",class_of:""}),[D,B]=h.useState(!1),[U,E]=h.useState([]),Q=h.useCallback(async()=>{V(!0);try{const T=await(await fetch(`${Ne}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();T.success&&F(T.students||[])}catch{F([])}finally{V(!1)}},[]),te=h.useCallback(async()=>{try{const T=await(await fetch(`${Ne}/backend/departments.php`)).json();T.success&&E(T.departments||[])}catch{E([])}},[]);h.useEffect(()=>{(l==="students"||l==="courses")&&Q(),(l==="students"||l==="lecturers"||l==="courses"||l==="degrees")&&te()},[l,Q,te]);const[ne,oe]=h.useState([]),[ce,Pe]=h.useState(!1),[re,gt]=h.useState(""),[ue,De]=h.useState(!1),[ln,Yt]=h.useState(null),[Qt,Sn]=h.useState({lecturer_id:"",full_name:"",email:"",department:""}),[Di,io]=h.useState(!1),L=h.useCallback(async()=>{Pe(!0);try{const T=await(await fetch(`${Ne}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();T.success&&oe(T.lecturers||[])}catch{oe([])}finally{Pe(!1)}},[]);h.useEffect(()=>{(l==="lecturers"||l==="courses")&&L()},[l,L]);const H=()=>{Yt(null),Sn({lecturer_id:"",full_name:"",email:"",department:""}),De(!0)},J=p=>{Yt(p.id),Sn({lecturer_id:p.lecturer_id||"",full_name:p.full_name||"",email:p.email||"",department:p.department||""}),De(!0)},pe=()=>De(!1),be=async()=>{const{lecturer_id:p,full_name:T,email:q,department:Le}=Qt;if(!(!p.trim()||!T.trim()||!q.trim()||!Le.trim())){io(!0);try{ln?(await(await fetch(`${Ne}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:ln,lecturer_id:p.trim(),full_name:T.trim(),email:q.trim(),department:Le.trim()})})).json()).success&&(pe(),L()):(await(await fetch(`${Ne}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:p.trim(),full_name:T.trim(),email:q.trim(),department:Le.trim()})})).json()).success&&(pe(),L())}finally{io(!1)}}},ie=async p=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${Ne}/backend/lecturers.php?id=${p}`,{method:"DELETE"})).json()).success&&L()}catch{}},an=ne.filter(p=>!re||(p.lecturer_id||"").toLowerCase().includes(re.toLowerCase())||(p.full_name||"").toLowerCase().includes(re.toLowerCase())||(p.email||"").toLowerCase().includes(re.toLowerCase())||(p.department||"").toLowerCase().includes(re.toLowerCase())),[Ye,zr]=h.useState([]),[Ti,Pr]=h.useState(!1),[Dr,_1]=h.useState(""),[E1,_a]=h.useState(!1),[ji,zf]=h.useState(null),[Gn,Pf]=h.useState(null),[_t,Cn]=h.useState({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,student_ids:[]}),[Df,Tf]=h.useState(!1),Oi=h.useCallback(async()=>{Pr(!0);try{const T=await(await fetch(`${Ne}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})).json();T.success&&zr(T.courses||[])}catch{zr([])}finally{Pr(!1)}},[]);h.useEffect(()=>{l==="courses"&&Oi()},[l,Oi]);const k1=()=>{zf(null),Cn({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,student_ids:[]}),_a(!0)},L1=p=>{zf(p.id),Cn({course_code:p.course_code||"",course_name:p.course_name||"",department:p.department||"",lecturer_id:p.lecturer_id||"",credits:Number(p.credits)||0,student_ids:Array.isArray(p.student_ids)?p.student_ids.map(T=>Number(T)):[]}),_a(!0)},Ri=()=>_a(!1),Ea=()=>Pf(null),N1=p=>Pf(p),z1=async()=>{const{course_code:p,course_name:T,department:q,lecturer_id:Le,credits:Qe,student_ids:Ae}=_t;if(!(!p.trim()||!T.trim())){Tf(!0);try{ji?(await(await fetch(`${Ne}/backend/courses.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:ji,course_code:p.trim(),course_name:T.trim(),department:q.trim()||"",lecturer_id:Le.trim()||"",credits:Number(Qe)||0,student_ids:Array.isArray(Ae)?Ae:[]})})).json()).success&&(Ri(),Oi()):(await(await fetch(`${Ne}/backend/courses.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({course_code:p.trim(),course_name:T.trim(),department:q.trim()||"",lecturer_id:Le.trim()||"",credits:Number(Qe)||0,student_ids:Array.isArray(Ae)?Ae:[]})})).json()).success&&(Ri(),Oi())}finally{Tf(!1)}}},P1=async p=>{if(confirm("Delete this course?"))try{(await(await fetch(`${Ne}/backend/courses.php?id=${p}`,{method:"DELETE"})).json()).success&&Oi()}catch{}},jf=Ye.filter(p=>!Dr||(p.course_code||"").toLowerCase().includes(Dr.toLowerCase())||(p.course_name||"").toLowerCase().includes(Dr.toLowerCase())||(p.department||"").toLowerCase().includes(Dr.toLowerCase())||(p.lecturer_name||"").toLowerCase().includes(Dr.toLowerCase())),[ka,Of]=h.useState([]),[D1,Rf]=h.useState(!1),[Tr,T1]=h.useState(""),[j1,La]=h.useState(!1),[so,Af]=h.useState(null),[Ai,jr]=h.useState({code:"",name:"",department:"",description:""}),[If,Bf]=h.useState(!1),Ii=h.useCallback(async()=>{Rf(!0);try{const T=await(await fetch(`${Ne}/backend/degrees.php?t=${Date.now()}`,{cache:"no-store"})).json();T.success&&Of(T.degrees||[])}catch{Of([])}finally{Rf(!1)}},[]);h.useEffect(()=>{(l==="degrees"||l==="students")&&Ii()},[l,Ii]);const O1=()=>{Af(null),jr({code:"",name:"",department:"",description:""}),La(!0)},R1=p=>{Af(p.id),jr({code:p.code||"",name:p.name||"",department:p.department||"",description:p.description||""}),La(!0)},Bi=()=>La(!1),A1=async()=>{const{code:p,name:T,department:q,description:Le}=Ai;if(!(!p.trim()||!T.trim())){Bf(!0);try{so?(await(await fetch(`${Ne}/backend/degrees.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:so,code:p.trim(),name:T.trim(),department:q.trim(),description:Le.trim()})})).json()).success&&(Bi(),Ii()):(await(await fetch(`${Ne}/backend/degrees.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:p.trim(),name:T.trim(),department:q.trim(),description:Le.trim()})})).json()).success&&(Bi(),Ii())}finally{Bf(!1)}}},I1=async p=>{if(confirm("Delete this degree?"))try{(await(await fetch(`${Ne}/backend/degrees.php?id=${p}`,{method:"DELETE"})).json()).success&&Ii()}catch{}},Ff=ka.filter(p=>!Tr||(p.code||"").toLowerCase().includes(Tr.toLowerCase())||(p.name||"").toLowerCase().includes(Tr.toLowerCase())||(p.department||"").toLowerCase().includes(Tr.toLowerCase())||(p.description||"").toLowerCase().includes(Tr.toLowerCase())),B1=()=>{R(null),S({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:"",degree:"",class_of:""}),j(!0)},F1=p=>{R(p.id),S({student_id:p.student_id,full_name:p.full_name,email:p.email,password:"",department:p.department||"",year:p.year||"",degree:p.degree||"",class_of:p.class_of!=null&&p.class_of!==""?String(p.class_of):""}),j(!0)},Fi=()=>j(!1),U1=async()=>{const{student_id:p,full_name:T,email:q,password:Le,department:Qe,year:Ae,degree:oo,class_of:lo}=K;if(!(!p.trim()||!T.trim()||!q.trim())&&!(!Z&&!Le.trim())){B(!0);try{Z?(await(await fetch(`${Ne}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Z,student_id:p.trim(),full_name:T.trim(),email:q.trim(),password:Le.trim(),department:Qe.trim()||"",year:Ae.trim()||"",degree:oo.trim()||"",class_of:lo.trim()||""})})).json()).success&&(Fi(),Q()):(await(await fetch(`${Ne}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:p.trim(),full_name:T.trim(),email:q.trim(),password:Le.trim(),department:Qe.trim()||"",year:Ae.trim()||"",degree:oo.trim()||"",class_of:lo.trim()||""})})).json()).success&&(Fi(),Q())}finally{B(!1)}}},H1=async p=>{if(confirm("Delete this student?"))try{(await(await fetch(`${Ne}/backend/students.php?id=${p}`,{method:"DELETE"})).json()).success&&Q()}catch{}},Uf=P.filter(p=>!G||(p.student_id||"").toLowerCase().includes(G.toLowerCase())||(p.full_name||"").toLowerCase().includes(G.toLowerCase())||(p.email||"").toLowerCase().includes(G.toLowerCase())||(p.department||"").toLowerCase().includes(G.toLowerCase())||(p.degree||"").toLowerCase().includes(G.toLowerCase())||String(p.class_of||"").toLowerCase().includes(G.toLowerCase())),W1=["Foundation","Year 1","Year 2","Placement Year","Year 4"],V1=()=>{g(null),x({code:"",name:"",description:""}),b(!0)},Y1=p=>{g(p.id),x({code:p.code,name:p.name,description:p.description||""}),b(!0)},Ui=()=>b(!1),Q1=async()=>{const{code:p,name:T,description:q}=f;if(!(!p.trim()||!T.trim())){$(!0);try{z?(await(await fetch(`${Ne}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:z,code:p.trim(),name:T.trim(),description:q.trim()})})).json()).success&&(Ui(),N()):(await(await fetch(`${Ne}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:p.trim(),name:T.trim(),description:q.trim()})})).json()).success&&(Ui(),N())}finally{$(!1)}}},K1=async p=>{if(confirm("Delete this department?"))try{(await(await fetch(`${Ne}/backend/departments.php?id=${p}`,{method:"DELETE"})).json()).success&&N()}catch{}},Hf=d.filter(p=>!w||p.code.toLowerCase().includes(w.toLowerCase())||p.name.toLowerCase().includes(w.toLowerCase())||(p.description||"").toLowerCase().includes(w.toLowerCase()));let Na="Admin Portal";try{const p=localStorage.getItem("strack_user");if(p){const T=JSON.parse(p),q=(T==null?void 0:T.name)||"";Na=q==="Test Admin"||q==="Admin"?"Admin Portal":q||"Admin Portal"}}catch{}const Z1=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},J1=p=>{u(p),o()};return a("div",{css:wf(e),children:[r?s("button",{type:"button",css:bf(e),onClick:o,"aria-label":"Close menu"}):null,a("aside",{css:xf(e,r),children:[a("header",{css:k6,children:[a("div",{css:L6,children:[s("div",{css:N6(e),children:s(Vs,{})}),s("span",{css:z6(e),children:"Strack"})]}),a("div",{css:c`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s("button",{type:"button",css:rm(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s($i,{}):s(_i,{})}),s("button",{type:"button",css:Ef(e),onClick:o,"aria-label":"Close menu",children:s(Te,{})})]})]}),a("div",{css:P6,children:[s("div",{css:D6,children:t7(Na)}),a("div",{css:T6,children:[s("div",{css:j6(e),children:Na}),s("div",{css:O6(e),children:"Admin"})]})]}),s("nav",{css:R6,children:e7.map(({id:p,label:T,icon:q})=>a("button",{type:"button",css:A6(e,l===p),onClick:()=>J1(p),children:[s(q,{}),T]},p))}),a("button",{type:"button",css:I6,onClick:Z1,children:[s(pf,{}),"Logout"]})]}),a("div",{css:Sf,children:[a("header",{css:Cf(e),children:[s("button",{type:"button",css:$f(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(ff,{})}),s("span",{css:_f(e),children:"Strack"}),s("button",{type:"button",css:rm(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s($i,{}):s(_i,{})})]}),s("main",{css:kf(e),children:a("div",{css:B6(e,l==="departments"||l==="students"||l==="lecturers"||l==="courses"||l==="degrees"||l==="calendar"),children:[l==="dashboard"&&a(zt,{children:[s("h1",{css:H6,children:"Dashboard"}),s("p",{css:W6,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),l==="students"&&a(zt,{children:[a("div",{css:Jc,children:[a("div",{children:[s("h1",{css:Gc,children:"Manage Students"}),s("p",{css:Ur(e),children:"Add, edit, or remove student records."})]}),s("button",{type:"button",css:Xc,onClick:B1,children:"+ Add Student"})]}),a("div",{css:qc,children:[a("div",{css:qn(e),children:[s("span",{css:tr(e),children:s(On,{})}),a("div",{css:nr,children:[s("p",{css:er(e),children:"Total Students"}),s("p",{css:Mn(e),children:W?"...":P.length})]})]}),a("div",{css:Mc,children:[U.length>0?U.map(p=>{const T=P.filter(q=>(q.department||"")===p.name).length;return a("div",{css:qn(e),children:[s("span",{css:tr(e),children:s(us,{})}),a("div",{css:nr,children:[s("p",{css:er(e),children:p.name}),s("p",{css:Mn(e),children:W?"...":T})]})]},p.id)}):null,(()=>{const p=P.filter(T=>!T.department).length;return p<=0?null:a("div",{css:qn(e),children:[s("span",{css:tr(e),children:s(Vs,{})}),a("div",{css:nr,children:[s("p",{css:er(e),children:"Unassigned"}),s("p",{css:Mn(e),children:W?"...":p})]})]})})()]})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search students...",value:G,onChange:p=>A(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:le(e),children:"Student ID"}),s("th",{css:le(e),children:"Name"}),s("th",{css:le(e),children:"Email"}),s("th",{css:le(e),children:"Department"}),s("th",{css:le(e),children:"Degree"}),s("th",{css:le(e),children:"Year"}),s("th",{css:le(e),children:"Class of"}),s("th",{css:le(e),children:"GPA"}),s("th",{css:le(e),children:"Points"}),s("th",{css:le(e),children:"Attendance"}),s("th",{css:le(e),children:"Actions"})]})}),s("tbody",{children:W?s("tr",{children:s("td",{css:X(e),colSpan:11,children:"Loading..."})}):Uf.length===0?s("tr",{children:s("td",{css:X(e),colSpan:11,children:"No students found."})}):Uf.map(p=>{var T;return a("tr",{children:[s("td",{css:X(e),children:p.student_id}),s("td",{css:X(e),children:p.full_name}),s("td",{css:X(e),children:p.email}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:((T=ka.find(q=>q.code===p.degree))==null?void 0:T.name)||p.degree||"—"}),s("td",{css:X(e),children:p.year||"—"}),s("td",{css:X(e),children:p.class_of?String(p.class_of):"—"}),s("td",{css:X(e),children:Number(p.gpa)||0}),s("td",{css:X(e),children:a("span",{css:U6,children:[s(Sa,{}),Number(p.points)||0]})}),s("td",{css:X(e),children:a("span",{css:F6(Number(p.attendance)||0,e),children:[Number(p.attendance)||0,"%"]})}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:or(e),onClick:()=>F1(p),title:"Edit",children:s(Pn,{})}),s("button",{type:"button",css:is(e),onClick:()=>H1(p.id),title:"Delete",children:s(lr,{})})]})})]},p.id)})})]})]}),l==="lecturers"&&a(zt,{children:[a("div",{css:Jc,children:[a("div",{children:[s("h1",{css:Gc,children:"Lecturer Management"}),s("p",{css:Ur(e),children:"Manage teaching staff and teaching assignments."})]}),s("button",{type:"button",css:Xc,onClick:H,children:"+ Add Lecturer"})]}),a("div",{css:qc,children:[a("div",{css:qn(e),children:[s("span",{css:tr(e),children:s(On,{})}),a("div",{css:nr,children:[s("p",{css:er(e),children:"Total Lecturers"}),s("p",{css:Mn(e),children:ce?"...":ne.length})]})]}),s("div",{css:Mc,children:U.length>0?U.map(p=>{const T=ne.filter(q=>(q.department||"")===p.name).length;return a("div",{css:qn(e),children:[s("span",{css:tr(e),children:s(us,{})}),a("div",{css:nr,children:[s("p",{css:er(e),children:p.name}),s("p",{css:Mn(e),children:ce?"...":T})]})]},p.id)}):null})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search lecturers...",value:re,onChange:p=>gt(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:le(e),children:"Lecturer ID"}),s("th",{css:le(e),children:"Name"}),s("th",{css:le(e),children:"Email"}),s("th",{css:le(e),children:"Department"}),s("th",{css:le(e),children:"Modules"}),s("th",{css:le(e),children:"Actions"})]})}),s("tbody",{children:ce?s("tr",{children:s("td",{css:X(e),colSpan:6,children:"Loading..."})}):an.length===0?s("tr",{children:s("td",{css:X(e),colSpan:6,children:"No lecturers found."})}):an.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.lecturer_id}),s("td",{css:X(e),children:p.full_name}),s("td",{css:X(e),children:p.email}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:Number(p.modules)||0}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:or(e),onClick:()=>J(p),title:"Edit",children:s(Pn,{})}),s("button",{type:"button",css:is(e),onClick:()=>ie(p.id),title:"Delete",children:s(lr,{})})]})})]},p.id))})]})]}),l==="courses"&&a(zt,{children:[a("div",{css:Jc,children:[a("div",{children:[s("h1",{css:Gc,children:"Course Management"}),s("p",{css:Ur(e),children:"Manage course catalog."})]}),s("button",{type:"button",css:Xc,onClick:k1,children:"+ Add Course"})]}),a("div",{css:qc,children:[a("div",{css:qn(e),children:[s("span",{css:tr(e),children:s(sn,{})}),a("div",{css:nr,children:[s("p",{css:er(e),children:"Total Courses"}),s("p",{css:Mn(e),children:Ti?"...":Ye.length})]})]}),s("div",{css:Mc,children:U.length>0?U.map(p=>{const T=Ye.filter(q=>(q.department||"")===p.name).length;return a("div",{css:qn(e),children:[s("span",{css:tr(e),children:s(us,{})}),a("div",{css:nr,children:[s("p",{css:er(e),children:p.name}),s("p",{css:Mn(e),children:Ti?"...":T})]})]},p.id)}):null})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search courses...",value:Dr,onChange:p=>_1(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:le(e),children:"Course Code"}),s("th",{css:le(e),children:"Course Name"}),s("th",{css:le(e),children:"Department"}),s("th",{css:le(e),children:"Lecturer"}),s("th",{css:le(e),children:"Credits"}),s("th",{css:le(e),children:"Students"}),s("th",{css:le(e),children:"Actions"})]})}),s("tbody",{children:Ti?s("tr",{children:s("td",{css:X(e),colSpan:7,children:"Loading..."})}):jf.length===0?s("tr",{children:s("td",{css:X(e),colSpan:7,children:"No courses found."})}):jf.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.course_code}),s("td",{css:X(e),children:p.course_name}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:p.lecturer_name||"—"}),s("td",{css:X(e),children:a("span",{css:Z6(),children:[Number(p.credits)||0," credits"]})}),s("td",{css:X(e),children:Number(p.enrolled_count)||0}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:or(e),onClick:()=>N1(p),title:"View enrolled students",children:s(On,{})}),s("button",{type:"button",css:or(e),onClick:()=>L1(p),title:"Edit",children:s(Pn,{})}),s("button",{type:"button",css:is(e),onClick:()=>P1(p.id),title:"Delete",children:s(lr,{})})]})})]},p.id))})]})]}),l==="degrees"&&a(zt,{children:[a("div",{css:im,children:[a("div",{css:sm,children:[s("h1",{css:om,children:"Degrees"}),s("p",{css:lm(e),children:"Create, view, edit, and delete degrees."})]}),s("button",{type:"button",css:am,onClick:O1,children:"+ Add Degree"})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search degrees...",value:Tr,onChange:p=>T1(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:le(e),children:"Code"}),s("th",{css:le(e),children:"Name"}),s("th",{css:le(e),children:"Department"}),s("th",{css:le(e),children:"Description"}),s("th",{css:le(e),children:"Actions"})]})}),s("tbody",{children:D1?s("tr",{children:s("td",{css:X(e),colSpan:5,children:"Loading..."})}):Ff.length===0?s("tr",{children:s("td",{css:X(e),colSpan:5,children:"No degrees found."})}):Ff.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.code}),s("td",{css:X(e),children:p.name}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:p.description||"—"}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:or(e),onClick:()=>R1(p),title:"Edit",children:s(Pn,{})}),s("button",{type:"button",css:is(e),onClick:()=>I1(p.id),title:"Delete",children:s(lr,{})})]})})]},p.id))})]})]}),l==="departments"&&a(zt,{children:[a("div",{css:im,children:[a("div",{css:sm,children:[s("h1",{css:om,children:"Departments"}),s("p",{css:lm(e),children:"Manage university departments."})]}),s("button",{type:"button",css:am,onClick:V1,children:"+ Add Department"})]}),a("div",{css:V6(e),children:[s("div",{css:Y6(e),children:s(us,{})}),a("div",{children:[s("p",{css:K6(e),children:"Total Departments"}),s("p",{css:Q6(e),children:y?"...":d.length})]})]}),a("div",{css:J6,children:[a("div",{css:G6,children:[s("h2",{css:X6,children:"All Departments"}),a("div",{css:q6(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search departments...",value:w,onChange:p=>_(p.target.value)})]})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:le(e),children:"Code"}),s("th",{css:le(e),children:"Name"}),s("th",{css:le(e),children:"Description"}),s("th",{css:le(e),children:"Actions"})]})}),s("tbody",{children:y?s("tr",{children:s("td",{css:X(e),colSpan:4,children:"Loading..."})}):Hf.length===0?s("tr",{children:s("td",{css:X(e),colSpan:4,children:"No departments found."})}):Hf.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.code}),s("td",{css:X(e),children:p.name}),s("td",{css:X(e),children:p.description||"—"}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:or(e),onClick:()=>Y1(p),title:"Edit",children:s(Pn,{})}),s("button",{type:"button",css:is(e),onClick:()=>K1(p.id),title:"Delete",children:s(lr,{})})]})})]},p.id))})]})]})]}),l==="calendar"&&s(E6,{darkMode:e})]})})]}),O&&s("div",{css:Hr,onClick:Fi,children:a("div",{css:Wr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Vr(e),children:[s("h3",{css:Yr(e),children:Z?"Edit Student":"Add Student"}),s("button",{type:"button",css:Qr(e),onClick:Fi,"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:Kr,children:[a("div",{css:ye,children:[s("label",{css:ve(e),children:"Full Name *"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. Ava Thomas",value:K.full_name,onChange:p=>S(T=>({...T,full_name:p.target.value}))})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Email *"}),s("input",{type:"email",css:Ce(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:K.email,onChange:p=>S(T=>({...T,email:p.target.value}))})]}),!Z&&a("div",{css:ye,children:[s("label",{css:ve(e),children:"Password *"}),s("input",{type:"password",css:Ce(e),placeholder:"e.g. student123",value:K.password,onChange:p=>S(T=>({...T,password:p.target.value}))})]}),a("div",{css:ye,children:[a("label",{css:ve(e),children:["Student ID ",Z?"":"*"]}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. STU2024008",value:K.student_id,onChange:p=>S(T=>({...T,student_id:p.target.value})),readOnly:!!Z})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Department"}),a("select",{css:Ce(e),value:K.department,onChange:p=>S(T=>({...T,department:p.target.value})),children:[s("option",{value:"",children:"Select department"}),U.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Degree"}),a("select",{css:Ce(e),value:K.degree,onChange:p=>S(T=>({...T,degree:p.target.value})),children:[s("option",{value:"",children:"Select degree"}),ka.map(p=>s("option",{value:p.code,children:p.name},p.id))]})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Year"}),a("select",{css:Ce(e),value:K.year,onChange:p=>S(T=>({...T,year:p.target.value})),children:[s("option",{value:"",children:"Select year"}),W1.map(p=>s("option",{value:p,children:p},p))]})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Class of"}),s("input",{type:"text",inputMode:"numeric",css:Ce(e),placeholder:"e.g. 2027",maxLength:10,value:K.class_of,onChange:p=>S(T=>({...T,class_of:p.target.value.replace(/[^\d]/g,"").slice(0,4)}))}),s("p",{css:M6(e),children:"Graduation year (optional)."})]})]}),a("div",{css:Zr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Fi,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:U1,disabled:D,children:D?"Saving...":Z?"Save Changes":"Add Student"})]})]})}),ue&&s("div",{css:Hr,onClick:pe,children:a("div",{css:Wr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Vr(e),children:[s("h3",{css:Yr(e),children:ln?"Edit Lecturer":"Add Lecturer"}),s("button",{type:"button",css:Qr(e),onClick:pe,"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:Kr,children:[a("div",{css:ye,children:[s("label",{css:ve(e),children:"Full Name *"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. Dr. Sarah Johnson",value:Qt.full_name,onChange:p=>Sn(T=>({...T,full_name:p.target.value}))})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Email *"}),s("input",{type:"email",css:Ce(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:Qt.email,onChange:p=>Sn(T=>({...T,email:p.target.value}))})]}),a("div",{css:ye,children:[a("label",{css:ve(e),children:["Lecturer ID ",ln?"":"*"]}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. LEC001",value:Qt.lecturer_id,onChange:p=>Sn(T=>({...T,lecturer_id:p.target.value})),readOnly:!!ln})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Department"}),a("select",{css:Ce(e),value:Qt.department,onChange:p=>Sn(T=>({...T,department:p.target.value})),children:[s("option",{value:"",children:"Select department"}),U.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]})]}),a("div",{css:Zr(e),children:[s("button",{type:"button",css:Jr(e),onClick:pe,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:be,disabled:Di,children:Di?"Saving...":ln?"Update Lecturer":"Add Lecturer"})]})]})}),E1&&s("div",{css:Hr,onClick:Ri,children:a("div",{css:Wr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Vr(e),children:[s("h3",{css:Yr(e),children:ji?"Edit Course":"Add Course"}),s("button",{type:"button",css:Qr(e),onClick:Ri,"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:Kr,children:[a("div",{css:ye,children:[s("label",{css:ve(e),children:"Course Code *"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. CS201",value:_t.course_code,onChange:p=>Cn(T=>({...T,course_code:p.target.value})),readOnly:!!ji})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Course Name *"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. Data Structures and Algorithms",value:_t.course_name,onChange:p=>Cn(T=>({...T,course_name:p.target.value}))})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Department"}),a("select",{css:Ce(e),value:_t.department,onChange:p=>{const T=p.target.value;Cn(q=>{const Le=new Set(P.filter(Ae=>!T||(Ae.department||"")===T).map(Ae=>Number(Ae.id))),Qe=(Array.isArray(q.student_ids)?q.student_ids:[]).filter(Ae=>Le.has(Number(Ae)));return{...q,department:T,student_ids:Qe}})},children:[s("option",{value:"",children:"Select department"}),U.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Lecturer"}),a("select",{css:Ce(e),value:_t.lecturer_id,onChange:p=>Cn(T=>({...T,lecturer_id:p.target.value})),children:[s("option",{value:"",children:"Select lecturer"}),ne.filter(p=>!_t.department||(p.department||"")===_t.department).map(p=>s("option",{value:p.lecturer_id,children:p.full_name},p.id))]})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Credits"}),s("input",{type:"number",css:Ce(e),placeholder:"e.g. 4",value:_t.credits,onChange:p=>Cn(T=>({...T,credits:Number(p.target.value)||0})),min:0})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Students who should attend this course"}),s("div",{css:um(e),children:P.length===0?s("p",{css:Ur(e),style:{margin:0},children:"No students found."}):P.filter(p=>!_t.department||(p.department||"")===_t.department).map(p=>a("label",{css:dm(e),children:[s("input",{type:"checkbox",checked:Array.isArray(_t.student_ids)&&_t.student_ids.includes(Number(p.id)),onChange:T=>{const q=Number(p.id);Cn(Le=>{const Qe=new Set(Array.isArray(Le.student_ids)?Le.student_ids.map(Ae=>Number(Ae)):[]);return T.target.checked?Qe.add(q):Qe.delete(q),{...Le,student_ids:Array.from(Qe)}})}}),a("span",{children:[p.full_name," (",p.student_id,")"]})]},p.id))})]})]}),a("div",{css:Zr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Ri,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:z1,disabled:Df,children:Df?"Saving...":ji?"Update Course":"Add Course"})]})]})}),Gn&&s("div",{css:Hr,onClick:Ea,children:a("div",{css:Wr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Vr(e),children:[a("h3",{css:Yr(e),children:["Students in ",Gn.course_code||"Course"]}),s("button",{type:"button",css:Qr(e),onClick:Ea,"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:Kr,children:[a("p",{css:Ur(e),style:{marginTop:0},children:[Gn.course_name||""," - ",Number(Gn.enrolled_count)||0," student(s)"]}),s("div",{css:um(e),children:Array.isArray(Gn.students)&&Gn.students.length>0?Gn.students.map(p=>a("div",{css:dm(e),children:[s(On,{style:{width:16,height:16,opacity:.8}}),a("span",{children:[p.full_name," (",p.student_id,")"]})]},p.id)):s("p",{css:Ur(e),style:{margin:0},children:"No students assigned yet."})})]}),s("div",{css:Zr(e),children:s("button",{type:"button",css:Jr(e),onClick:Ea,children:"Close"})})]})}),j1&&s("div",{css:Hr,onClick:Bi,children:a("div",{css:Wr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Vr(e),children:[s("h3",{css:Yr(e),children:so?"Edit Degree":"Add Degree"}),s("button",{type:"button",css:Qr(e),onClick:Bi,"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:Kr,children:[a("div",{css:ye,children:[s("label",{css:ve(e),children:"Code *"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. CS",value:Ai.code,onChange:p=>jr(T=>({...T,code:p.target.value}))})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Name *"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. BSc Computer Science",value:Ai.name,onChange:p=>jr(T=>({...T,name:p.target.value}))})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Department"}),a("select",{css:Ce(e),value:Ai.department,onChange:p=>jr(T=>({...T,department:p.target.value})),children:[s("option",{value:"",children:"Select department"}),U.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Description"}),s("textarea",{css:cm(e),placeholder:"Optional description",value:Ai.description,onChange:p=>jr(T=>({...T,description:p.target.value}))})]})]}),a("div",{css:Zr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Bi,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:A1,disabled:If,children:If?"Saving...":so?"Update Degree":"Add Degree"})]})]})}),C&&s("div",{css:Hr,onClick:Ui,children:a("div",{css:Wr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Vr(e),children:[s("h3",{css:Yr(e),children:z?"Edit Department":"Add New Department"}),s("button",{type:"button",css:Qr(e),onClick:Ui,"aria-label":"Close",children:s(Te,{})})]}),a("div",{css:Kr,children:[a("div",{css:ye,children:[s("label",{css:ve(e),children:"Department Name"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. Newcastle Business School",value:f.name,onChange:p=>x(T=>({...T,name:p.target.value}))})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Department Code"}),s("input",{type:"text",css:Ce(e),placeholder:"e.g. NBS",value:f.code,onChange:p=>x(T=>({...T,code:p.target.value}))})]}),a("div",{css:ye,children:[s("label",{css:ve(e),children:"Description"}),s("textarea",{css:cm(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:f.description,onChange:p=>x(T=>({...T,description:p.target.value}))})]})]}),a("div",{css:Zr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Ui,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:Q1,disabled:k,children:k?"Saving...":z?"Update Department":"Add Department"})]})]})})]})}const r7="/strack",fm="strack_dark";function i7(){const[e,t]=h.useState(()=>{try{return localStorage.getItem(fm)==="true"}catch{return!1}});h.useEffect(()=>{try{localStorage.setItem(fm,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return Ie.jsx(xv,{basename:r7,children:Ie.jsxs(yv,{children:[Ie.jsx(Gr,{path:"/",element:Ie.jsx(Ww,{darkMode:e,onToggleDarkMode:n})}),Ie.jsx(Gr,{path:"/dashboard",element:Ie.jsx(q4,{darkMode:e,onToggleDarkMode:n})}),Ie.jsx(Gr,{path:"/lecturer",element:Ie.jsx(_3,{darkMode:e,onToggleDarkMode:n})}),Ie.jsx(Gr,{path:"/admin",element:Ie.jsx(n7,{darkMode:e,onToggleDarkMode:n})}),Ie.jsx(Gr,{path:"*",element:Ie.jsx(mv,{to:"/",replace:!0})})]})})}tu.createRoot(document.getElementById("root")).render(Ie.jsx(hn.StrictMode,{children:Ie.jsx(i7,{})}));
