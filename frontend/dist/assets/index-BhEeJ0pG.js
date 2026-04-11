function A1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function I1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qh={exports:{}},Ql={},Mh={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),B1=Symbol.for("react.portal"),F1=Symbol.for("react.fragment"),U1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),W1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),Q1=Symbol.for("react.suspense"),K1=Symbol.for("react.memo"),J1=Symbol.for("react.lazy"),jf=Symbol.iterator;function G1(e){return e===null||typeof e!="object"?null:(e=jf&&e[jf]||e["@@iterator"],typeof e=="function"?e:null)}var em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tm=Object.assign,nm={};function _i(e,t,n){this.props=e,this.context=t,this.refs=nm,this.updater=n||em}_i.prototype.isReactComponent={};_i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rm(){}rm.prototype=_i.prototype;function Ku(e,t,n){this.props=e,this.context=t,this.refs=nm,this.updater=n||em}var Ju=Ku.prototype=new rm;Ju.constructor=Ku;tm(Ju,_i.prototype);Ju.isPureReactComponent=!0;var Rf=Array.isArray,im=Object.prototype.hasOwnProperty,Gu={current:null},sm={key:!0,ref:!0,__self:!0,__source:!0};function om(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)im.call(t,r)&&!sm.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),h=0;h<u;h++)d[h]=arguments[h+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Ks,type:e,key:o,ref:l,props:i,_owner:Gu.current}}function Z1(e,t){return{$$typeof:Ks,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ks}function X1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Af=/\/+/g;function Pa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X1(""+e.key):t.toString(36)}function Xo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ks:case B1:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Pa(l,0):r,Rf(i)?(n="",e!=null&&(n=e.replace(Af,"$&/")+"/"),Xo(i,t,n,"",function(h){return h})):i!=null&&(Zu(i)&&(i=Z1(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Af,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Rf(e))for(var u=0;u<e.length;u++){o=e[u];var d=r+Pa(o,u);l+=Xo(o,t,n,d,i)}else if(d=G1(e),typeof d=="function")for(e=d.call(e),u=0;!(o=e.next()).done;)o=o.value,d=r+Pa(o,u++),l+=Xo(o,t,n,d,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ao(e,t,n){if(e==null)return e;var r=[],i=0;return Xo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function q1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},qo={transition:null},M1={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:qo,ReactCurrentOwner:Gu};function lm(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ao,forEach:function(e,t,n){ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!Zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=_i;ee.Fragment=F1;ee.Profiler=H1;ee.PureComponent=Ku;ee.StrictMode=U1;ee.Suspense=Q1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M1;ee.act=lm;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tm({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Gu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)im.call(t,d)&&!sm.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var h=0;h<d;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:Ks,type:e.type,key:i,ref:o,props:r,_owner:l}};ee.createContext=function(e){return e={$$typeof:V1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:W1,_context:e},e.Consumer=e};ee.createElement=om;ee.createFactory=function(e){var t=om.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:Y1,render:e}};ee.isValidElement=Zu;ee.lazy=function(e){return{$$typeof:J1,_payload:{_status:-1,_result:e},_init:q1}};ee.memo=function(e,t){return{$$typeof:K1,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};ee.unstable_act=lm;ee.useCallback=function(e,t){return rt.current.useCallback(e,t)};ee.useContext=function(e){return rt.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};ee.useEffect=function(e,t){return rt.current.useEffect(e,t)};ee.useId=function(){return rt.current.useId()};ee.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return rt.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};ee.useRef=function(e){return rt.current.useRef(e)};ee.useState=function(e){return rt.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return rt.current.useTransition()};ee.version="18.3.1";Mh.exports=ee;var m=Mh.exports;const fn=I1(m),Qc=A1({__proto__:null,default:fn},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey=m,ty=Symbol.for("react.element"),ny=Symbol.for("react.fragment"),ry=Object.prototype.hasOwnProperty,iy=ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sy={key:!0,ref:!0,__self:!0,__source:!0};function am(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ry.call(t,r)&&!sy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ty,type:e,key:o,ref:l,props:i,_owner:iy.current}}Ql.Fragment=ny;Ql.jsx=am;Ql.jsxs=am;qh.exports=Ql;var je=qh.exports,Kc={},cm={exports:{}},xt={},um={exports:{}},dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,D){var C=b.length;b.push(D);e:for(;0<C;){var O=C-1>>>1,W=b[O];if(0<i(W,D))b[O]=D,b[C]=W,C=O;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var D=b[0],C=b.pop();if(C!==D){b[0]=C;e:for(var O=0,W=b.length,G=W>>>1;O<G;){var le=2*(O+1)-1,ue=b[le],oe=le+1,be=b[oe];if(0>i(ue,C))oe<W&&0>i(be,ue)?(b[O]=be,b[oe]=C,O=oe):(b[O]=ue,b[le]=C,O=le);else if(oe<W&&0>i(be,C))b[O]=be,b[oe]=C,O=oe;else break e}}return D}function i(b,D){var C=b.sortIndex-D.sortIndex;return C!==0?C:b.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],h=[],y=1,v=null,w=3,E=!1,$=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(b){for(var D=n(h);D!==null;){if(D.callback===null)r(h);else if(D.startTime<=b)r(h),D.sortIndex=D.expirationTime,t(d,D);else break;D=n(h)}}function _(b){if(S=!1,x(b),!$)if(n(d)!==null)$=!0,R(L);else{var D=n(h);D!==null&&Y(_,D.startTime-b)}}function L(b,D){$=!1,S&&(S=!1,g(F),F=-1),E=!0;var C=w;try{for(x(D),v=n(d);v!==null&&(!(v.expirationTime>D)||b&&!q());){var O=v.callback;if(typeof O=="function"){v.callback=null,w=v.priorityLevel;var W=O(v.expirationTime<=D);D=e.unstable_now(),typeof W=="function"?v.callback=W:v===n(d)&&r(d),x(D)}else r(d);v=n(d)}if(v!==null)var G=!0;else{var le=n(h);le!==null&&Y(_,le.startTime-D),G=!1}return G}finally{v=null,w=C,E=!1}}var N=!1,z=null,F=-1,H=5,V=-1;function q(){return!(e.unstable_now()-V<H)}function I(){if(z!==null){var b=e.unstable_now();V=b;var D=!0;try{D=z(!0,b)}finally{D?A():(N=!1,z=null)}}else N=!1}var A;if(typeof f=="function")A=function(){f(I)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,K=j.port2;j.port1.onmessage=I,A=function(){K.postMessage(null)}}else A=function(){T(I,0)};function R(b){z=b,N||(N=!0,A())}function Y(b,D){F=T(function(){b(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){$||E||($=!0,R(L))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(b){switch(w){case 1:case 2:case 3:var D=3;break;default:D=w}var C=w;w=D;try{return b()}finally{w=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,D){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var C=w;w=b;try{return D()}finally{w=C}},e.unstable_scheduleCallback=function(b,D,C){var O=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?O+C:O):C=O,b){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=C+W,b={id:y++,callback:D,priorityLevel:b,startTime:C,expirationTime:W,sortIndex:-1},C>O?(b.sortIndex=C,t(h,b),n(d)===null&&b===n(h)&&(S?(g(F),F=-1):S=!0,Y(_,C-O))):(b.sortIndex=W,t(d,b),$||E||($=!0,R(L))),b},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(b){var D=w;return function(){var C=w;w=D;try{return b.apply(this,arguments)}finally{w=C}}}})(dm);um.exports=dm;var oy=um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=m,wt=oy;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fm=new Set,Ss={};function Er(e,t){mi(e,t),mi(e+"Capture",t)}function mi(e,t){for(Ss[e]=t,e=0;e<t.length;e++)fm.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,If={},Bf={};function cy(e){return Jc.call(Bf,e)?!0:Jc.call(If,e)?!1:ay.test(e)?Bf[e]=!0:(If[e]=!0,!1)}function uy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dy(e,t,n,r){if(t===null||typeof t>"u"||uy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xu,qu);Je[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xu,qu);Je[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xu,qu);Je[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mu(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dy(t,n,i,r)&&(n=null),r||i===null?cy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wn=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),nd=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),Ff=Symbol.iterator;function Hi(e){return e===null||typeof e!="object"?null:(e=Ff&&e[Ff]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,za;function os(e){if(za===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);za=t&&t[1]||""}return`
`+za+e}var Da=!1;function Ta(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?os(e):""}function fy(e){switch(e.tag){case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xr:return"Fragment";case Zr:return"Portal";case Gc:return"Profiler";case ed:return"StrictMode";case Zc:return"Suspense";case Xc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hm:return(e.displayName||"Context")+".Consumer";case pm:return(e._context.displayName||"Context")+".Provider";case td:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nd:return t=e.displayName||null,t!==null?t:qc(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return qc(e(t))}catch{}}return null}function py(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(t);case 8:return t===ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hy(e){var t=gm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){e._valueTracker||(e._valueTracker=hy(e))}function ym(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mc(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vm(e,t){t=t.checked,t!=null&&Mu(e,"checked",t,!1)}function eu(e,t){vm(e,t);var n=Vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tu(e,t.type,n):t.hasOwnProperty("defaultValue")&&tu(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tu(e,t,n){(t!=="number"||fl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ls=Array.isArray;function ai(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(ls(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vn(n)}}function wm(e,t){var n=Vn(t.value),r=Vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,bm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},my=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(e){my.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ds[t]=ds[e]})});function Sm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ds.hasOwnProperty(e)&&ds[e]?(""+t).trim():t+"px"}function Cm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gy=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(e,t){if(t){if(gy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function su(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function rd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lu=null,ci=null,ui=null;function Yf(e){if(e=Zs(e)){if(typeof lu!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Xl(t),lu(e.stateNode,e.type,t))}}function $m(e){ci?ui?ui.push(e):ui=[e]:ci=e}function _m(){if(ci){var e=ci,t=ui;if(ui=ci=null,Yf(e),t)for(e=0;e<t.length;e++)Yf(t[e])}}function Em(e,t){return e(t)}function km(){}var Oa=!1;function Lm(e,t,n){if(Oa)return e(t,n);Oa=!0;try{return Em(e,t,n)}finally{Oa=!1,(ci!==null||ui!==null)&&(km(),_m())}}function $s(e,t){var n=e.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var au=!1;if(mn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){au=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{au=!1}function yy(e,t,n,r,i,o,l,u,d){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(y){this.onError(y)}}var fs=!1,pl=null,hl=!1,cu=null,vy={onError:function(e){fs=!0,pl=e}};function wy(e,t,n,r,i,o,l,u,d){fs=!1,pl=null,yy.apply(vy,arguments)}function xy(e,t,n,r,i,o,l,u,d){if(wy.apply(this,arguments),fs){if(fs){var h=pl;fs=!1,pl=null}else throw Error(B(198));hl||(hl=!0,cu=h)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qf(e){if(kr(e)!==e)throw Error(B(188))}function by(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qf(i),e;if(o===r)return Qf(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Pm(e){return e=by(e),e!==null?zm(e):null}function zm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zm(e);if(t!==null)return t;e=e.sibling}return null}var Dm=wt.unstable_scheduleCallback,Kf=wt.unstable_cancelCallback,Sy=wt.unstable_shouldYield,Cy=wt.unstable_requestPaint,Ne=wt.unstable_now,$y=wt.unstable_getCurrentPriorityLevel,id=wt.unstable_ImmediatePriority,Tm=wt.unstable_UserBlockingPriority,ml=wt.unstable_NormalPriority,_y=wt.unstable_LowPriority,Om=wt.unstable_IdlePriority,Kl=null,Xt=null;function Ey(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Ny,ky=Math.log,Ly=Math.LN2;function Ny(e){return e>>>=0,e===0?32:31-(ky(e)/Ly|0)|0}var po=64,ho=4194304;function as(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=as(u):(o&=l,o!==0&&(r=as(o)))}else l=n&~i,l!==0?r=as(l):o!==0&&(r=as(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Py(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ft(o),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Py(u,t)):d<=t&&(e.expiredLanes|=u),o&=~u}}function uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jm(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Js(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function Dy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Rm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Am,od,Im,Bm,Fm,du=!1,mo=[],jn=null,Rn=null,An=null,_s=new Map,Es=new Map,Nn=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":_s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(t.pointerId)}}function Vi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zs(t),t!==null&&od(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Oy(e,t,n,r,i){switch(t){case"focusin":return jn=Vi(jn,e,t,n,r,i),!0;case"dragenter":return Rn=Vi(Rn,e,t,n,r,i),!0;case"mouseover":return An=Vi(An,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _s.set(o,Vi(_s.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Es.set(o,Vi(Es.get(o)||null,e,t,n,r,i)),!0}return!1}function Um(e){var t=lr(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Nm(n),t!==null){e.blockedOn=t,Fm(e.priority,function(){Im(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ou=r,n.target.dispatchEvent(r),ou=null}else return t=Zs(n),t!==null&&od(t),e.blockedOn=n,!1;t.shift()}return!0}function Gf(e,t,n){Mo(e)&&n.delete(t)}function jy(){du=!1,jn!==null&&Mo(jn)&&(jn=null),Rn!==null&&Mo(Rn)&&(Rn=null),An!==null&&Mo(An)&&(An=null),_s.forEach(Gf),Es.forEach(Gf)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,jy)))}function ks(e){function t(i){return Yi(i,e)}if(0<mo.length){Yi(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&Yi(jn,e),Rn!==null&&Yi(Rn,e),An!==null&&Yi(An,e),_s.forEach(t),Es.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Um(n),n.blockedOn===null&&Nn.shift()}var di=wn.ReactCurrentBatchConfig,yl=!0;function Ry(e,t,n,r){var i=fe,o=di.transition;di.transition=null;try{fe=1,ld(e,t,n,r)}finally{fe=i,di.transition=o}}function Ay(e,t,n,r){var i=fe,o=di.transition;di.transition=null;try{fe=4,ld(e,t,n,r)}finally{fe=i,di.transition=o}}function ld(e,t,n,r){if(yl){var i=fu(e,t,n,r);if(i===null)Ya(e,t,r,vl,n),Jf(e,r);else if(Oy(i,e,t,n,r))r.stopPropagation();else if(Jf(e,r),t&4&&-1<Ty.indexOf(e)){for(;i!==null;){var o=Zs(i);if(o!==null&&Am(o),o=fu(e,t,n,r),o===null&&Ya(e,t,r,vl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ya(e,t,r,null,n)}}var vl=null;function fu(e,t,n,r){if(vl=null,e=rd(r),e=lr(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vl=e,null}function Hm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($y()){case id:return 1;case Tm:return 4;case ml:case _y:return 16;case Om:return 536870912;default:return 16}default:return 16}}var Dn=null,ad=null,el=null;function Wm(){if(el)return el;var e,t=ad,n=t.length,r,i="value"in Dn?Dn.value:Dn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return el=i.slice(e,1<r?1-r:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Zf(){return!1}function bt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?go:Zf,this.isPropagationStopped=Zf,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=bt(Ei),Gs=_e({},Ei,{view:0,detail:0}),Iy=bt(Gs),Ra,Aa,Qi,Jl=_e({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(Ra=e.screenX-Qi.screenX,Aa=e.screenY-Qi.screenY):Aa=Ra=0,Qi=e),Ra)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),Xf=bt(Jl),By=_e({},Jl,{dataTransfer:0}),Fy=bt(By),Uy=_e({},Gs,{relatedTarget:0}),Ia=bt(Uy),Hy=_e({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=bt(Hy),Vy=_e({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yy=bt(Vy),Qy=_e({},Ei,{data:0}),qf=bt(Qy),Ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gy[e])?!!t[e]:!1}function ud(){return Zy}var Xy=_e({},Gs,{key:function(e){if(e.key){var t=Ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qy=bt(Xy),My=_e({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=bt(My),e2=_e({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),t2=bt(e2),n2=_e({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),r2=bt(n2),i2=_e({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s2=bt(i2),o2=[9,13,27,32],dd=mn&&"CompositionEvent"in window,ps=null;mn&&"documentMode"in document&&(ps=document.documentMode);var l2=mn&&"TextEvent"in window&&!ps,Vm=mn&&(!dd||ps&&8<ps&&11>=ps),ep=" ",tp=!1;function Ym(e,t){switch(e){case"keyup":return o2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function a2(e,t){switch(e){case"compositionend":return Qm(t);case"keypress":return t.which!==32?null:(tp=!0,ep);case"textInput":return e=t.data,e===ep&&tp?null:e;default:return null}}function c2(e,t){if(qr)return e==="compositionend"||!dd&&Ym(e,t)?(e=Wm(),el=ad=Dn=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vm&&t.locale!=="ko"?null:t.data;default:return null}}var u2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u2[e.type]:t==="textarea"}function Km(e,t,n,r){$m(r),t=wl(t,"onChange"),0<t.length&&(n=new cd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hs=null,Ls=null;function d2(e){i0(e,0)}function Gl(e){var t=ti(e);if(ym(t))return e}function f2(e,t){if(e==="change")return t}var Jm=!1;if(mn){var Ba;if(mn){var Fa="oninput"in document;if(!Fa){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Fa=typeof rp.oninput=="function"}Ba=Fa}else Ba=!1;Jm=Ba&&(!document.documentMode||9<document.documentMode)}function ip(){hs&&(hs.detachEvent("onpropertychange",Gm),Ls=hs=null)}function Gm(e){if(e.propertyName==="value"&&Gl(Ls)){var t=[];Km(t,Ls,e,rd(e)),Lm(d2,t)}}function p2(e,t,n){e==="focusin"?(ip(),hs=t,Ls=n,hs.attachEvent("onpropertychange",Gm)):e==="focusout"&&ip()}function h2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gl(Ls)}function m2(e,t){if(e==="click")return Gl(t)}function g2(e,t){if(e==="input"||e==="change")return Gl(t)}function y2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:y2;function Ns(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jc.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,t){var n=sp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sp(n)}}function Zm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xm(){for(var e=window,t=fl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fl(e.document)}return t}function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v2(e){var t=Xm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zm(n.ownerDocument.documentElement,n)){if(r!==null&&fd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=op(n,o);var l=op(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w2=mn&&"documentMode"in document&&11>=document.documentMode,Mr=null,pu=null,ms=null,hu=!1;function lp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Mr==null||Mr!==fl(r)||(r=Mr,"selectionStart"in r&&fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ms&&Ns(ms,r)||(ms=r,r=wl(pu,"onSelect"),0<r.length&&(t=new cd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Ua={},qm={};mn&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Zl(e){if(Ua[e])return Ua[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qm)return Ua[e]=t[n];return e}var Mm=Zl("animationend"),e0=Zl("animationiteration"),t0=Zl("animationstart"),n0=Zl("transitionend"),r0=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){r0.set(e,t),Er(t,[e])}for(var Ha=0;Ha<ap.length;Ha++){var Wa=ap[Ha],x2=Wa.toLowerCase(),b2=Wa[0].toUpperCase()+Wa.slice(1);Qn(x2,"on"+b2)}Qn(Mm,"onAnimationEnd");Qn(e0,"onAnimationIteration");Qn(t0,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(n0,"onTransitionEnd");mi("onMouseEnter",["mouseout","mouseover"]);mi("onMouseLeave",["mouseout","mouseover"]);mi("onPointerEnter",["pointerout","pointerover"]);mi("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S2=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function cp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xy(r,t,void 0,e),e.currentTarget=null}function i0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,h=u.currentTarget;if(u=u.listener,d!==o&&i.isPropagationStopped())break e;cp(i,u,h),o=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,h=u.currentTarget,u=u.listener,d!==o&&i.isPropagationStopped())break e;cp(i,u,h),o=d}}}if(hl)throw e=cu,hl=!1,cu=null,e}function ye(e,t){var n=t[wu];n===void 0&&(n=t[wu]=new Set);var r=e+"__bubble";n.has(r)||(s0(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),s0(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Ps(e){if(!e[vo]){e[vo]=!0,fm.forEach(function(n){n!=="selectionchange"&&(S2.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,Va("selectionchange",!1,t))}}function s0(e,t,n,r){switch(Hm(t)){case 1:var i=Ry;break;case 4:i=Ay;break;default:i=ld}n=i.bind(null,t,n,e),i=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ya(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=lr(u),l===null)return;if(d=l.tag,d===5||d===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Lm(function(){var h=o,y=rd(n),v=[];e:{var w=r0.get(e);if(w!==void 0){var E=cd,$=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":E=qy;break;case"focusin":$="focus",E=Ia;break;case"focusout":$="blur",E=Ia;break;case"beforeblur":case"afterblur":E=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=t2;break;case Mm:case e0:case t0:E=Wy;break;case n0:E=r2;break;case"scroll":E=Iy;break;case"wheel":E=s2;break;case"copy":case"cut":case"paste":E=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Mf}var S=(t&4)!==0,T=!S&&e==="scroll",g=S?w!==null?w+"Capture":null:w;S=[];for(var f=h,x;f!==null;){x=f;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,g!==null&&(_=$s(f,g),_!=null&&S.push(zs(f,_,x)))),T)break;f=f.return}0<S.length&&(w=new E(w,$,null,n,y),v.push({event:w,listeners:S}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",w&&n!==ou&&($=n.relatedTarget||n.fromElement)&&(lr($)||$[gn]))break e;if((E||w)&&(w=y.window===y?y:(w=y.ownerDocument)?w.defaultView||w.parentWindow:window,E?($=n.relatedTarget||n.toElement,E=h,$=$?lr($):null,$!==null&&(T=kr($),$!==T||$.tag!==5&&$.tag!==6)&&($=null)):(E=null,$=h),E!==$)){if(S=Xf,_="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=Mf,_="onPointerLeave",g="onPointerEnter",f="pointer"),T=E==null?w:ti(E),x=$==null?w:ti($),w=new S(_,f+"leave",E,n,y),w.target=T,w.relatedTarget=x,_=null,lr(y)===h&&(S=new S(g,f+"enter",$,n,y),S.target=x,S.relatedTarget=T,_=S),T=_,E&&$)t:{for(S=E,g=$,f=0,x=S;x;x=Or(x))f++;for(x=0,_=g;_;_=Or(_))x++;for(;0<f-x;)S=Or(S),f--;for(;0<x-f;)g=Or(g),x--;for(;f--;){if(S===g||g!==null&&S===g.alternate)break t;S=Or(S),g=Or(g)}S=null}else S=null;E!==null&&up(v,w,E,S,!1),$!==null&&T!==null&&up(v,T,$,S,!0)}}e:{if(w=h?ti(h):window,E=w.nodeName&&w.nodeName.toLowerCase(),E==="select"||E==="input"&&w.type==="file")var L=f2;else if(np(w))if(Jm)L=g2;else{L=h2;var N=p2}else(E=w.nodeName)&&E.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(L=m2);if(L&&(L=L(e,h))){Km(v,L,n,y);break e}N&&N(e,w,h),e==="focusout"&&(N=w._wrapperState)&&N.controlled&&w.type==="number"&&tu(w,"number",w.value)}switch(N=h?ti(h):window,e){case"focusin":(np(N)||N.contentEditable==="true")&&(Mr=N,pu=h,ms=null);break;case"focusout":ms=pu=Mr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,lp(v,n,y);break;case"selectionchange":if(w2)break;case"keydown":case"keyup":lp(v,n,y)}var z;if(dd)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else qr?Ym(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Vm&&n.locale!=="ko"&&(qr||F!=="onCompositionStart"?F==="onCompositionEnd"&&qr&&(z=Wm()):(Dn=y,ad="value"in Dn?Dn.value:Dn.textContent,qr=!0)),N=wl(h,F),0<N.length&&(F=new qf(F,e,null,n,y),v.push({event:F,listeners:N}),z?F.data=z:(z=Qm(n),z!==null&&(F.data=z)))),(z=l2?a2(e,n):c2(e,n))&&(h=wl(h,"onBeforeInput"),0<h.length&&(y=new qf("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:h}),y.data=z))}i0(v,t)})}function zs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$s(e,n),o!=null&&r.unshift(zs(e,o,i)),o=$s(e,t),o!=null&&r.push(zs(e,o,i))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function up(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,h=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&h!==null&&(u=h,i?(d=$s(n,o),d!=null&&l.unshift(zs(n,d,u))):i||(d=$s(n,o),d!=null&&l.push(zs(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var C2=/\r\n?/g,$2=/\u0000|\uFFFD/g;function dp(e){return(typeof e=="string"?e:""+e).replace(C2,`
`).replace($2,"")}function wo(e,t,n){if(t=dp(t),dp(e)!==t&&n)throw Error(B(425))}function xl(){}var mu=null,gu=null;function yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,_2=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,E2=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(e){return fp.resolve(null).then(e).catch(k2)}:vu;function k2(e){setTimeout(function(){throw e})}function Qa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ks(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ks(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Zt="__reactFiber$"+ki,Ds="__reactProps$"+ki,gn="__reactContainer$"+ki,wu="__reactEvents$"+ki,L2="__reactListeners$"+ki,N2="__reactHandles$"+ki;function lr(e){var t=e[Zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gn]||n[Zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pp(e);e!==null;){if(n=e[Zt])return n;e=pp(e)}return t}e=n,n=e.parentNode}return null}function Zs(e){return e=e[Zt]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Xl(e){return e[Ds]||null}var xu=[],ni=-1;function Kn(e){return{current:e}}function ve(e){0>ni||(e.current=xu[ni],xu[ni]=null,ni--)}function he(e,t){ni++,xu[ni]=e.current,e.current=t}var Yn={},Me=Kn(Yn),ut=Kn(!1),vr=Yn;function gi(e,t){var n=e.type.contextTypes;if(!n)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function bl(){ve(ut),ve(Me)}function hp(e,t,n){if(Me.current!==Yn)throw Error(B(168));he(Me,t),he(ut,n)}function o0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,py(e)||"Unknown",i));return _e({},n,r)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,vr=Me.current,he(Me,e),he(ut,ut.current),!0}function mp(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=o0(e,t,vr),r.__reactInternalMemoizedMergedChildContext=e,ve(ut),ve(Me),he(Me,e)):ve(ut),he(ut,n)}var an=null,ql=!1,Ka=!1;function l0(e){an===null?an=[e]:an.push(e)}function P2(e){ql=!0,l0(e)}function Jn(){if(!Ka&&an!==null){Ka=!0;var e=0,t=fe;try{var n=an;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}an=null,ql=!1}catch(i){throw an!==null&&(an=an.slice(e+1)),Dm(id,Jn),i}finally{fe=t,Ka=!1}}return null}var ri=[],ii=0,Cl=null,$l=0,Et=[],kt=0,wr=null,cn=1,un="";function nr(e,t){ri[ii++]=$l,ri[ii++]=Cl,Cl=e,$l=t}function a0(e,t,n){Et[kt++]=cn,Et[kt++]=un,Et[kt++]=wr,wr=e;var r=cn;e=un;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,cn=1<<32-Ft(t)+i|n<<i|r,un=o+e}else cn=1<<o|n<<i|r,un=e}function pd(e){e.return!==null&&(nr(e,1),a0(e,1,0))}function hd(e){for(;e===Cl;)Cl=ri[--ii],ri[ii]=null,$l=ri[--ii],ri[ii]=null;for(;e===wr;)wr=Et[--kt],Et[kt]=null,un=Et[--kt],Et[kt]=null,cn=Et[--kt],Et[kt]=null}var yt=null,gt=null,xe=!1,Rt=null;function c0(e,t){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,gt=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wr!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,gt=null,!0):!1;default:return!1}}function bu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Su(e){if(xe){var t=gt;if(t){var n=t;if(!gp(e,t)){if(bu(e))throw Error(B(418));t=In(n.nextSibling);var r=yt;t&&gp(e,t)?c0(r,n):(e.flags=e.flags&-4097|2,xe=!1,yt=e)}}else{if(bu(e))throw Error(B(418));e.flags=e.flags&-4097|2,xe=!1,yt=e}}}function yp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function xo(e){if(e!==yt)return!1;if(!xe)return yp(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yu(e.type,e.memoizedProps)),t&&(t=gt)){if(bu(e))throw u0(),Error(B(418));for(;t;)c0(e,t),t=In(t.nextSibling)}if(yp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=In(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=yt?In(e.stateNode.nextSibling):null;return!0}function u0(){for(var e=gt;e;)e=In(e.nextSibling)}function yi(){gt=yt=null,xe=!1}function md(e){Rt===null?Rt=[e]:Rt.push(e)}var z2=wn.ReactCurrentBatchConfig;function Ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vp(e){var t=e._init;return t(e._payload)}function d0(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Hn(g,f),g.index=0,g.sibling=null,g}function o(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,f,x,_){return f===null||f.tag!==6?(f=ec(x,g.mode,_),f.return=g,f):(f=i(f,x),f.return=g,f)}function d(g,f,x,_){var L=x.type;return L===Xr?y(g,f,x.props.children,_,x.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===kn&&vp(L)===f.type)?(_=i(f,x.props),_.ref=Ki(g,f,x),_.return=g,_):(_=al(x.type,x.key,x.props,null,g.mode,_),_.ref=Ki(g,f,x),_.return=g,_)}function h(g,f,x,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=tc(x,g.mode,_),f.return=g,f):(f=i(f,x.children||[]),f.return=g,f)}function y(g,f,x,_,L){return f===null||f.tag!==7?(f=gr(x,g.mode,_,L),f.return=g,f):(f=i(f,x),f.return=g,f)}function v(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ec(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case co:return x=al(f.type,f.key,f.props,null,g.mode,x),x.ref=Ki(g,null,f),x.return=g,x;case Zr:return f=tc(f,g.mode,x),f.return=g,f;case kn:var _=f._init;return v(g,_(f._payload),x)}if(ls(f)||Hi(f))return f=gr(f,g.mode,x,null),f.return=g,f;bo(g,f)}return null}function w(g,f,x,_){var L=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:u(g,f,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case co:return x.key===L?d(g,f,x,_):null;case Zr:return x.key===L?h(g,f,x,_):null;case kn:return L=x._init,w(g,f,L(x._payload),_)}if(ls(x)||Hi(x))return L!==null?null:y(g,f,x,_,null);bo(g,x)}return null}function E(g,f,x,_,L){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(x)||null,u(f,g,""+_,L);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case co:return g=g.get(_.key===null?x:_.key)||null,d(f,g,_,L);case Zr:return g=g.get(_.key===null?x:_.key)||null,h(f,g,_,L);case kn:var N=_._init;return E(g,f,x,N(_._payload),L)}if(ls(_)||Hi(_))return g=g.get(x)||null,y(f,g,_,L,null);bo(f,_)}return null}function $(g,f,x,_){for(var L=null,N=null,z=f,F=f=0,H=null;z!==null&&F<x.length;F++){z.index>F?(H=z,z=null):H=z.sibling;var V=w(g,z,x[F],_);if(V===null){z===null&&(z=H);break}e&&z&&V.alternate===null&&t(g,z),f=o(V,f,F),N===null?L=V:N.sibling=V,N=V,z=H}if(F===x.length)return n(g,z),xe&&nr(g,F),L;if(z===null){for(;F<x.length;F++)z=v(g,x[F],_),z!==null&&(f=o(z,f,F),N===null?L=z:N.sibling=z,N=z);return xe&&nr(g,F),L}for(z=r(g,z);F<x.length;F++)H=E(z,g,F,x[F],_),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?F:H.key),f=o(H,f,F),N===null?L=H:N.sibling=H,N=H);return e&&z.forEach(function(q){return t(g,q)}),xe&&nr(g,F),L}function S(g,f,x,_){var L=Hi(x);if(typeof L!="function")throw Error(B(150));if(x=L.call(x),x==null)throw Error(B(151));for(var N=L=null,z=f,F=f=0,H=null,V=x.next();z!==null&&!V.done;F++,V=x.next()){z.index>F?(H=z,z=null):H=z.sibling;var q=w(g,z,V.value,_);if(q===null){z===null&&(z=H);break}e&&z&&q.alternate===null&&t(g,z),f=o(q,f,F),N===null?L=q:N.sibling=q,N=q,z=H}if(V.done)return n(g,z),xe&&nr(g,F),L;if(z===null){for(;!V.done;F++,V=x.next())V=v(g,V.value,_),V!==null&&(f=o(V,f,F),N===null?L=V:N.sibling=V,N=V);return xe&&nr(g,F),L}for(z=r(g,z);!V.done;F++,V=x.next())V=E(z,g,F,V.value,_),V!==null&&(e&&V.alternate!==null&&z.delete(V.key===null?F:V.key),f=o(V,f,F),N===null?L=V:N.sibling=V,N=V);return e&&z.forEach(function(I){return t(g,I)}),xe&&nr(g,F),L}function T(g,f,x,_){if(typeof x=="object"&&x!==null&&x.type===Xr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case co:e:{for(var L=x.key,N=f;N!==null;){if(N.key===L){if(L=x.type,L===Xr){if(N.tag===7){n(g,N.sibling),f=i(N,x.props.children),f.return=g,g=f;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===kn&&vp(L)===N.type){n(g,N.sibling),f=i(N,x.props),f.ref=Ki(g,N,x),f.return=g,g=f;break e}n(g,N);break}else t(g,N);N=N.sibling}x.type===Xr?(f=gr(x.props.children,g.mode,_,x.key),f.return=g,g=f):(_=al(x.type,x.key,x.props,null,g.mode,_),_.ref=Ki(g,f,x),_.return=g,g=_)}return l(g);case Zr:e:{for(N=x.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(g,f.sibling),f=i(f,x.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=tc(x,g.mode,_),f.return=g,g=f}return l(g);case kn:return N=x._init,T(g,f,N(x._payload),_)}if(ls(x))return $(g,f,x,_);if(Hi(x))return S(g,f,x,_);bo(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,x),f.return=g,g=f):(n(g,f),f=ec(x,g.mode,_),f.return=g,g=f),l(g)):n(g,f)}return T}var vi=d0(!0),f0=d0(!1),_l=Kn(null),El=null,si=null,gd=null;function yd(){gd=si=El=null}function vd(e){var t=_l.current;ve(_l),e._currentValue=t}function Cu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fi(e,t){El=e,gd=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(gd!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if(El===null)throw Error(B(308));si=e,El.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var ar=null;function wd(e){ar===null?ar=[e]:ar.push(e)}function p0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wd(t)):(n.next=i.next,i.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yn(e,n)}return i=r.interleaved,i===null?(t.next=t,wd(r)):(t.next=i.next,i.next=t),r.interleaved=t,yn(e,n)}function nl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sd(e,n)}}function wp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var i=e.updateQueue;Ln=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,h=d.next;d.next=null,l===null?o=h:l.next=h,l=d;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==l&&(u===null?y.firstBaseUpdate=h:u.next=h,y.lastBaseUpdate=d))}if(o!==null){var v=i.baseState;l=0,y=h=d=null,u=o;do{var w=u.lane,E=u.eventTime;if((r&w)===w){y!==null&&(y=y.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var $=e,S=u;switch(w=t,E=n,S.tag){case 1:if($=S.payload,typeof $=="function"){v=$.call(E,v,w);break e}v=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=S.payload,w=typeof $=="function"?$.call(E,v,w):$,w==null)break e;v=_e({},v,w);break e;case 2:Ln=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[u]:w.push(u))}else E={eventTime:E,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(h=y=E,d=v):y=y.next=E,l|=w;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;w=u,u=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(y===null&&(d=v),i.baseState=d,i.firstBaseUpdate=h,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);br|=l,e.lanes=l,e.memoizedState=v}}function xp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Xs={},qt=Kn(Xs),Ts=Kn(Xs),Os=Kn(Xs);function cr(e){if(e===Xs)throw Error(B(174));return e}function bd(e,t){switch(he(Os,t),he(Ts,e),he(qt,Xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ru(t,e)}ve(qt),he(qt,t)}function wi(){ve(qt),ve(Ts),ve(Os)}function m0(e){cr(Os.current);var t=cr(qt.current),n=ru(t,e.type);t!==n&&(he(Ts,e),he(qt,n))}function Sd(e){Ts.current===e&&(ve(qt),ve(Ts))}var Ce=Kn(0);function Ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ja=[];function Cd(){for(var e=0;e<Ja.length;e++)Ja[e]._workInProgressVersionPrimary=null;Ja.length=0}var rl=wn.ReactCurrentDispatcher,Ga=wn.ReactCurrentBatchConfig,xr=0,$e=null,Re=null,Fe=null,Nl=!1,gs=!1,js=0,D2=0;function Ge(){throw Error(B(321))}function $d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function _d(e,t,n,r,i,o){if(xr=o,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rl.current=e===null||e.memoizedState===null?R2:A2,e=n(r,i),gs){o=0;do{if(gs=!1,js=0,25<=o)throw Error(B(301));o+=1,Fe=Re=null,t.updateQueue=null,rl.current=I2,e=n(r,i)}while(gs)}if(rl.current=Pl,t=Re!==null&&Re.next!==null,xr=0,Fe=Re=$e=null,Nl=!1,t)throw Error(B(300));return e}function Ed(){var e=js!==0;return js=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?$e.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function zt(){if(Re===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Fe===null?$e.memoizedState:Fe.next;if(t!==null)Fe=t,Re=e;else{if(e===null)throw Error(B(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Fe===null?$e.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Rs(e,t){return typeof t=="function"?t(e):t}function Za(e){var t=zt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,d=null,h=o;do{var y=h.lane;if((xr&y)===y)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var v={lane:y,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(u=d=v,l=r):d=d.next=v,$e.lanes|=y,br|=y}h=h.next}while(h!==null&&h!==o);d===null?l=r:d.next=u,Ht(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,$e.lanes|=o,br|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xa(e){var t=zt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ht(o,t.memoizedState)||(ct=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function g0(){}function y0(e,t){var n=$e,r=zt(),i=t(),o=!Ht(r.memoizedState,i);if(o&&(r.memoizedState=i,ct=!0),r=r.queue,kd(x0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,As(9,w0.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(B(349));xr&30||v0(n,t,i)}return i}function v0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function w0(e,t,n,r){t.value=n,t.getSnapshot=r,b0(t)&&S0(e)}function x0(e,t,n){return n(function(){b0(t)&&S0(e)})}function b0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function S0(e){var t=yn(e,1);t!==null&&Ut(t,e,1,-1)}function bp(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},t.queue=e,e=e.dispatch=j2.bind(null,$e,e),[t.memoizedState,e]}function As(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function C0(){return zt().memoizedState}function il(e,t,n,r){var i=Qt();$e.flags|=e,i.memoizedState=As(1|t,n,void 0,r===void 0?null:r)}function Ml(e,t,n,r){var i=zt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var l=Re.memoizedState;if(o=l.destroy,r!==null&&$d(r,l.deps)){i.memoizedState=As(t,n,o,r);return}}$e.flags|=e,i.memoizedState=As(1|t,n,o,r)}function Sp(e,t){return il(8390656,8,e,t)}function kd(e,t){return Ml(2048,8,e,t)}function $0(e,t){return Ml(4,2,e,t)}function _0(e,t){return Ml(4,4,e,t)}function E0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function k0(e,t,n){return n=n!=null?n.concat([e]):null,Ml(4,4,E0.bind(null,t,e),n)}function Ld(){}function L0(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function N0(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function P0(e,t,n){return xr&21?(Ht(n,t)||(n=jm(),$e.lanes|=n,br|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n)}function T2(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Ga.transition;Ga.transition={};try{e(!1),t()}finally{fe=n,Ga.transition=r}}function z0(){return zt().memoizedState}function O2(e,t,n){var r=Un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D0(e))T0(t,n);else if(n=p0(e,t,n,r),n!==null){var i=nt();Ut(n,e,r,i),O0(n,t,r)}}function j2(e,t,n){var r=Un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D0(e))T0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,Ht(u,l)){var d=t.interleaved;d===null?(i.next=i,wd(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=p0(e,t,i,r),n!==null&&(i=nt(),Ut(n,e,r,i),O0(n,t,r))}}function D0(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function T0(e,t){gs=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function O0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sd(e,n)}}var Pl={readContext:Pt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},R2={readContext:Pt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Sp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,il(4194308,4,E0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return il(4194308,4,e,t)},useInsertionEffect:function(e,t){return il(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O2.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:bp,useDebugValue:Ld,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=bp(!1),t=e[0];return e=T2.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,i=Qt();if(xe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),Ue===null)throw Error(B(349));xr&30||v0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Sp(x0.bind(null,r,o,e),[e]),r.flags|=2048,As(9,w0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Qt(),t=Ue.identifierPrefix;if(xe){var n=un,r=cn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=js++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},A2={readContext:Pt,useCallback:L0,useContext:Pt,useEffect:kd,useImperativeHandle:k0,useInsertionEffect:$0,useLayoutEffect:_0,useMemo:N0,useReducer:Za,useRef:C0,useState:function(){return Za(Rs)},useDebugValue:Ld,useDeferredValue:function(e){var t=zt();return P0(t,Re.memoizedState,e)},useTransition:function(){var e=Za(Rs)[0],t=zt().memoizedState;return[e,t]},useMutableSource:g0,useSyncExternalStore:y0,useId:z0,unstable_isNewReconciler:!1},I2={readContext:Pt,useCallback:L0,useContext:Pt,useEffect:kd,useImperativeHandle:k0,useInsertionEffect:$0,useLayoutEffect:_0,useMemo:N0,useReducer:Xa,useRef:C0,useState:function(){return Xa(Rs)},useDebugValue:Ld,useDeferredValue:function(e){var t=zt();return Re===null?t.memoizedState=e:P0(t,Re.memoizedState,e)},useTransition:function(){var e=Xa(Rs)[0],t=zt().memoizedState;return[e,t]},useMutableSource:g0,useSyncExternalStore:y0,useId:z0,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $u(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ea={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Un(e),o=pn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Bn(e,o,i),t!==null&&(Ut(t,e,i,r),nl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Un(e),o=pn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bn(e,o,i),t!==null&&(Ut(t,e,i,r),nl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Un(e),i=pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bn(e,i,r),t!==null&&(Ut(t,e,r,n),nl(t,e,r))}};function Cp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ns(n,r)||!Ns(i,o):!0}function j0(e,t,n){var r=!1,i=Yn,o=t.contextType;return typeof o=="object"&&o!==null?o=Pt(o):(i=dt(t)?vr:Me.current,r=t.contextTypes,o=(r=r!=null)?gi(e,i):Yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $p(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ea.enqueueReplaceState(t,t.state,null)}function _u(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pt(o):(o=dt(t)?vr:Me.current,i.context=gi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($u(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ea.enqueueReplaceState(i,i.state,null),kl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xi(e,t){try{var n="",r=t;do n+=fy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B2=typeof WeakMap=="function"?WeakMap:Map;function R0(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Dl||(Dl=!0,Ru=r),Eu(e,t)},n}function A0(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Eu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Eu(e,t),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _p(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=M2.bind(null,e,t,n),t.then(e,e))}function Ep(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Bn(n,t,1))),n.lanes|=1),e)}var F2=wn.ReactCurrentOwner,ct=!1;function et(e,t,n,r){t.child=e===null?f0(t,null,n,r):vi(t,e.child,n,r)}function Lp(e,t,n,r,i){n=n.render;var o=t.ref;return fi(t,i),r=_d(e,t,n,r,o,i),n=Ed(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(xe&&n&&pd(t),t.flags|=1,et(e,t,r,i),t.child)}function Np(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Rd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,I0(e,t,o,r,i)):(e=al(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ns,n(l,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=Hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function I0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ns(o,r)&&e.ref===t.ref)if(ct=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,vn(e,t,i)}return ku(e,t,n,r,i)}function B0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(li,ht),ht|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(li,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(li,ht),ht|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(li,ht),ht|=r;return et(e,t,i,n),t.child}function F0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ku(e,t,n,r,i){var o=dt(n)?vr:Me.current;return o=gi(t,o),fi(t,i),n=_d(e,t,n,r,o,i),r=Ed(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(xe&&r&&pd(t),t.flags|=1,et(e,t,n,i),t.child)}function Pp(e,t,n,r,i){if(dt(n)){var o=!0;Sl(t)}else o=!1;if(fi(t,i),t.stateNode===null)sl(e,t),j0(t,n,r),_u(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=Pt(h):(h=dt(n)?vr:Me.current,h=gi(t,h));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==h)&&$p(t,l,r,h),Ln=!1;var w=t.memoizedState;l.state=w,kl(t,r,l,i),d=t.memoizedState,u!==r||w!==d||ut.current||Ln?(typeof y=="function"&&($u(t,n,y,r),d=t.memoizedState),(u=Ln||Cp(t,n,u,r,w,d,h))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=h,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,h0(e,t),u=t.memoizedProps,h=t.type===t.elementType?u:Ot(t.type,u),l.props=h,v=t.pendingProps,w=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Pt(d):(d=dt(n)?vr:Me.current,d=gi(t,d));var E=n.getDerivedStateFromProps;(y=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==v||w!==d)&&$p(t,l,r,d),Ln=!1,w=t.memoizedState,l.state=w,kl(t,r,l,i);var $=t.memoizedState;u!==v||w!==$||ut.current||Ln?(typeof E=="function"&&($u(t,n,E,r),$=t.memoizedState),(h=Ln||Cp(t,n,h,r,w,$,d)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,$,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,$,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),l.props=r,l.state=$,l.context=d,r=h):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Lu(e,t,n,r,o,i)}function Lu(e,t,n,r,i,o){F0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&mp(t,n,!1),vn(e,t,o);r=t.stateNode,F2.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=vi(t,e.child,null,o),t.child=vi(t,null,u,o)):et(e,t,u,o),t.memoizedState=r.state,i&&mp(t,n,!0),t.child}function U0(e){var t=e.stateNode;t.pendingContext?hp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hp(e,t.context,!1),bd(e,t.containerInfo)}function zp(e,t,n,r,i){return yi(),md(i),t.flags|=256,et(e,t,n,r),t.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function H0(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ce,i&1),e===null)return Su(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ra(l,r,0,null),e=gr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Pu(n),t.memoizedState=Nu,e):Nd(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return U2(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Hn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Hn(u,o):(o=gr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Pu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Nu,r}return o=e.child,e=o.sibling,r=Hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nd(e,t){return t=ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&md(r),vi(t,e.child,null,n),e=Nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U2(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=qa(Error(B(422))),So(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ra({mode:"visible",children:r.children},i,0,null),o=gr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vi(t,e.child,null,l),t.child.memoizedState=Pu(l),t.memoizedState=Nu,o);if(!(t.mode&1))return So(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(B(419)),r=qa(o,r,void 0),So(e,t,l,r)}if(u=(l&e.childLanes)!==0,ct||u){if(r=Ue,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yn(e,i),Ut(r,e,i,-1))}return jd(),r=qa(Error(B(421))),So(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=e5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,gt=In(i.nextSibling),yt=t,xe=!0,Rt=null,e!==null&&(Et[kt++]=cn,Et[kt++]=un,Et[kt++]=wr,cn=e.id,un=e.overflow,wr=t),t=Nd(t,r.children),t.flags|=4096,t)}function Dp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cu(e.return,t,n)}function Ma(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function W0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dp(e,n,t);else if(e.tag===19)Dp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ll(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ma(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ll(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ma(t,!0,n,null,o);break;case"together":Ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),br|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function H2(e,t,n){switch(t.tag){case 3:U0(t),yi();break;case 5:m0(t);break;case 1:dt(t.type)&&Sl(t);break;case 4:bd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?H0(e,t,n):(he(Ce,Ce.current&1),e=vn(e,t,n),e!==null?e.sibling:null);he(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return W0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,B0(e,t,n)}return vn(e,t,n)}var V0,zu,Y0,Q0;V0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};Y0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(qt.current);var o=null;switch(n){case"input":i=Mc(e,i),r=Mc(e,r),o=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),o=[];break;case"textarea":i=nu(e,i),r=nu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xl)}iu(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var u=i[h];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ss.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var d=r[h];if(u=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&d!==u&&(d!=null||u!=null))if(h==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&ye("scroll",e),o||u===d||(o=[])):(o=o||[]).push(h,d))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};Q0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ji(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function W2(e,t,n){var r=t.pendingProps;switch(hd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return dt(t.type)&&bl(),Ze(t),null;case 3:return r=t.stateNode,wi(),ve(ut),ve(Me),Cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(Bu(Rt),Rt=null))),zu(e,t),Ze(t),null;case 5:Sd(t);var i=cr(Os.current);if(n=t.type,e!==null&&t.stateNode!=null)Y0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return Ze(t),null}if(e=cr(qt.current),xo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Zt]=t,r[Ds]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<cs.length;i++)ye(cs[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Uf(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Wf(r,o),ye("invalid",r)}iu(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,u,e),i=["children",""+u]):Ss.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ye("scroll",r)}switch(n){case"input":uo(r),Hf(r,o,!0);break;case"textarea":uo(r),Vf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Zt]=t,e[Ds]=r,V0(e,t,!1,!1),t.stateNode=e;e:{switch(l=su(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<cs.length;i++)ye(cs[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Uf(e,r),i=Mc(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Wf(e,r),i=nu(e,r),ye("invalid",e);break;default:i=r}iu(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var d=u[o];o==="style"?Cm(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&bm(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Cs(e,d):typeof d=="number"&&Cs(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ss.hasOwnProperty(o)?d!=null&&o==="onScroll"&&ye("scroll",e):d!=null&&Mu(e,o,d,l))}switch(n){case"input":uo(e),Hf(e,r,!1);break;case"textarea":uo(e),Vf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ai(e,!!r.multiple,o,!1):r.defaultValue!=null&&ai(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Q0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=cr(Os.current),cr(qt.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Zt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&gt!==null&&t.mode&1&&!(t.flags&128))u0(),yi(),t.flags|=98560,o=!1;else if(o=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Zt]=t}else yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Rt!==null&&(Bu(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Ae===0&&(Ae=3):jd())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return wi(),zu(e,t),e===null&&Ps(t.stateNode.containerInfo),Ze(t),null;case 10:return vd(t.type._context),Ze(t),null;case 17:return dt(t.type)&&bl(),Ze(t),null;case 19:if(ve(Ce),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ji(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ll(e),l!==null){for(t.flags|=128,Ji(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ne()>bi&&(t.flags|=128,r=!0,Ji(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ll(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ji(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!xe)return Ze(t),null}else 2*Ne()-o.renderingStartTime>bi&&n!==1073741824&&(t.flags|=128,r=!0,Ji(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ne(),t.sibling=null,n=Ce.current,he(Ce,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ht&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function V2(e,t){switch(hd(t),t.tag){case 1:return dt(t.type)&&bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),ve(ut),ve(Me),Cd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sd(t),null;case 13:if(ve(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ce),null;case 4:return wi(),null;case 10:return vd(t.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var Co=!1,qe=!1,Y2=typeof WeakSet=="function"?WeakSet:Set,Q=null;function oi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Du(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Tp=!1;function Q2(e,t){if(mu=yl,e=Xm(),fd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,h=0,y=0,v=e,w=null;t:for(;;){for(var E;v!==n||i!==0&&v.nodeType!==3||(u=l+i),v!==o||r!==0&&v.nodeType!==3||(d=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(E=v.firstChild)!==null;)w=v,v=E;for(;;){if(v===e)break t;if(w===n&&++h===i&&(u=l),w===o&&++y===r&&(d=l),(E=v.nextSibling)!==null)break;v=w,w=v.parentNode}v=E}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:e,selectionRange:n},yl=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var $=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var S=$.memoizedProps,T=$.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ot(t.type,S),T);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(_){Ee(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return $=Tp,Tp=!1,$}function ys(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Du(t,n,o)}i=i.next}while(i!==r)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function K0(e){var t=e.alternate;t!==null&&(e.alternate=null,K0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zt],delete t[Ds],delete t[wu],delete t[L2],delete t[N2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function J0(e){return e.tag===5||e.tag===3||e.tag===4}function Op(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||J0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xl));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}var Ye=null,jt=!1;function $n(e,t,n){for(n=n.child;n!==null;)G0(e,t,n),n=n.sibling}function G0(e,t,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:qe||oi(n,t);case 6:var r=Ye,i=jt;Ye=null,$n(e,t,n),Ye=r,jt=i,Ye!==null&&(jt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(jt?(e=Ye,n=n.stateNode,e.nodeType===8?Qa(e.parentNode,n):e.nodeType===1&&Qa(e,n),ks(e)):Qa(Ye,n.stateNode));break;case 4:r=Ye,i=jt,Ye=n.stateNode.containerInfo,jt=!0,$n(e,t,n),Ye=r,jt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Du(n,t,l),i=i.next}while(i!==r)}$n(e,t,n);break;case 1:if(!qe&&(oi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ee(n,t,u)}$n(e,t,n);break;case 21:$n(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,$n(e,t,n),qe=r):$n(e,t,n);break;default:$n(e,t,n)}}function jp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Y2),t.forEach(function(r){var i=t5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ye=u.stateNode,jt=!1;break e;case 3:Ye=u.stateNode.containerInfo,jt=!0;break e;case 4:Ye=u.stateNode.containerInfo,jt=!0;break e}u=u.return}if(Ye===null)throw Error(B(160));G0(o,l,i),Ye=null,jt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(h){Ee(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Z0(t,e),t=t.sibling}function Z0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Vt(e),r&4){try{ys(3,e,e.return),ta(3,e)}catch(S){Ee(e,e.return,S)}try{ys(5,e,e.return)}catch(S){Ee(e,e.return,S)}}break;case 1:Tt(t,e),Vt(e),r&512&&n!==null&&oi(n,n.return);break;case 5:if(Tt(t,e),Vt(e),r&512&&n!==null&&oi(n,n.return),e.flags&32){var i=e.stateNode;try{Cs(i,"")}catch(S){Ee(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&vm(i,o),su(u,l);var h=su(u,o);for(l=0;l<d.length;l+=2){var y=d[l],v=d[l+1];y==="style"?Cm(i,v):y==="dangerouslySetInnerHTML"?bm(i,v):y==="children"?Cs(i,v):Mu(i,y,v,h)}switch(u){case"input":eu(i,o);break;case"textarea":wm(i,o);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?ai(i,!!o.multiple,E,!1):w!==!!o.multiple&&(o.defaultValue!=null?ai(i,!!o.multiple,o.defaultValue,!0):ai(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ds]=o}catch(S){Ee(e,e.return,S)}}break;case 6:if(Tt(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){Ee(e,e.return,S)}}break;case 3:if(Tt(t,e),Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ks(t.containerInfo)}catch(S){Ee(e,e.return,S)}break;case 4:Tt(t,e),Vt(e);break;case 13:Tt(t,e),Vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Dd=Ne())),r&4&&jp(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(h=qe)||y,Tt(t,e),qe=h):Tt(t,e),Vt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!y&&e.mode&1)for(Q=e,y=e.child;y!==null;){for(v=Q=y;Q!==null;){switch(w=Q,E=w.child,w.tag){case 0:case 11:case 14:case 15:ys(4,w,w.return);break;case 1:oi(w,w.return);var $=w.stateNode;if(typeof $.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(S){Ee(r,n,S)}}break;case 5:oi(w,w.return);break;case 22:if(w.memoizedState!==null){Ap(v);continue}}E!==null?(E.return=w,Q=E):Ap(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Sm("display",l))}catch(S){Ee(e,e.return,S)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=h?"":v.memoizedProps}catch(S){Ee(e,e.return,S)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Tt(t,e),Vt(e),r&4&&jp(e);break;case 21:break;default:Tt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(J0(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cs(i,""),r.flags&=-33);var o=Op(e);ju(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Op(e);Ou(e,u,l);break;default:throw Error(B(161))}}catch(d){Ee(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K2(e,t,n){Q=e,X0(e)}function X0(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Co;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||qe;u=Co;var h=qe;if(Co=l,(qe=d)&&!h)for(Q=i;Q!==null;)l=Q,d=l.child,l.tag===22&&l.memoizedState!==null?Ip(i):d!==null?(d.return=l,Q=d):Ip(i);for(;o!==null;)Q=o,X0(o),o=o.sibling;Q=i,Co=u,qe=h}Rp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):Rp(e)}}function Rp(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xp(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xp(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var y=h.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&ks(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}qe||t.flags&512&&Tu(t)}catch(w){Ee(t,t.return,w)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ap(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ip(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ta(4,t)}catch(d){Ee(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Ee(t,i,d)}}var o=t.return;try{Tu(t)}catch(d){Ee(t,o,d)}break;case 5:var l=t.return;try{Tu(t)}catch(d){Ee(t,l,d)}}}catch(d){Ee(t,t.return,d)}if(t===e){Q=null;break}var u=t.sibling;if(u!==null){u.return=t.return,Q=u;break}Q=t.return}}var J2=Math.ceil,zl=wn.ReactCurrentDispatcher,Pd=wn.ReactCurrentOwner,Nt=wn.ReactCurrentBatchConfig,se=0,Ue=null,De=null,Ke=0,ht=0,li=Kn(0),Ae=0,Is=null,br=0,na=0,zd=0,vs=null,ot=null,Dd=0,bi=1/0,ln=null,Dl=!1,Ru=null,Fn=null,$o=!1,Tn=null,Tl=0,ws=0,Au=null,ol=-1,ll=0;function nt(){return se&6?Ne():ol!==-1?ol:ol=Ne()}function Un(e){return e.mode&1?se&2&&Ke!==0?Ke&-Ke:z2.transition!==null?(ll===0&&(ll=jm()),ll):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Hm(e.type)),e):1}function Ut(e,t,n,r){if(50<ws)throw ws=0,Au=null,Error(B(185));Js(e,n,r),(!(se&2)||e!==Ue)&&(e===Ue&&(!(se&2)&&(na|=n),Ae===4&&Pn(e,Ke)),ft(e,r),n===1&&se===0&&!(t.mode&1)&&(bi=Ne()+500,ql&&Jn()))}function ft(e,t){var n=e.callbackNode;zy(e,t);var r=gl(e,e===Ue?Ke:0);if(r===0)n!==null&&Kf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kf(n),t===1)e.tag===0?P2(Bp.bind(null,e)):l0(Bp.bind(null,e)),E2(function(){!(se&6)&&Jn()}),n=null;else{switch(Rm(r)){case 1:n=id;break;case 4:n=Tm;break;case 16:n=ml;break;case 536870912:n=Om;break;default:n=ml}n=sg(n,q0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function q0(e,t){if(ol=-1,ll=0,se&6)throw Error(B(327));var n=e.callbackNode;if(pi()&&e.callbackNode!==n)return null;var r=gl(e,e===Ue?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ol(e,r);else{t=r;var i=se;se|=2;var o=eg();(Ue!==e||Ke!==t)&&(ln=null,bi=Ne()+500,mr(e,t));do try{X2();break}catch(u){M0(e,u)}while(!0);yd(),zl.current=o,se=i,De!==null?t=0:(Ue=null,Ke=0,t=Ae)}if(t!==0){if(t===2&&(i=uu(e),i!==0&&(r=i,t=Iu(e,i))),t===1)throw n=Is,mr(e,0),Pn(e,r),ft(e,Ne()),n;if(t===6)Pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!G2(i)&&(t=Ol(e,r),t===2&&(o=uu(e),o!==0&&(r=o,t=Iu(e,o))),t===1))throw n=Is,mr(e,0),Pn(e,r),ft(e,Ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:rr(e,ot,ln);break;case 3:if(Pn(e,r),(r&130023424)===r&&(t=Dd+500-Ne(),10<t)){if(gl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vu(rr.bind(null,e,ot,ln),t);break}rr(e,ot,ln);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ft(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J2(r/1960))-r,10<r){e.timeoutHandle=vu(rr.bind(null,e,ot,ln),r);break}rr(e,ot,ln);break;case 5:rr(e,ot,ln);break;default:throw Error(B(329))}}}return ft(e,Ne()),e.callbackNode===n?q0.bind(null,e):null}function Iu(e,t){var n=vs;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=Ol(e,t),e!==2&&(t=ot,ot=n,t!==null&&Bu(t)),e}function Bu(e){ot===null?ot=e:ot.push.apply(ot,e)}function G2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t){for(t&=~zd,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Bp(e){if(se&6)throw Error(B(327));pi();var t=gl(e,0);if(!(t&1))return ft(e,Ne()),null;var n=Ol(e,t);if(e.tag!==0&&n===2){var r=uu(e);r!==0&&(t=r,n=Iu(e,r))}if(n===1)throw n=Is,mr(e,0),Pn(e,t),ft(e,Ne()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,ot,ln),ft(e,Ne()),null}function Td(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(bi=Ne()+500,ql&&Jn())}}function Sr(e){Tn!==null&&Tn.tag===0&&!(se&6)&&pi();var t=se;se|=1;var n=Nt.transition,r=fe;try{if(Nt.transition=null,fe=1,e)return e()}finally{fe=r,Nt.transition=n,se=t,!(se&6)&&Jn()}}function Od(){ht=li.current,ve(li)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_2(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(hd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:wi(),ve(ut),ve(Me),Cd();break;case 5:Sd(r);break;case 4:wi();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:vd(r.type._context);break;case 22:case 23:Od()}n=n.return}if(Ue=e,De=e=Hn(e.current,null),Ke=ht=t,Ae=0,Is=null,zd=na=br=0,ot=vs=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}ar=null}return e}function M0(e,t){do{var n=De;try{if(yd(),rl.current=Pl,Nl){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(xr=0,Fe=Re=$e=null,gs=!1,js=0,Pd.current=null,n===null||n.return===null){Ae=1,Is=t,De=null;break}e:{var o=e,l=n.return,u=n,d=t;if(t=Ke,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,y=u,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var w=y.alternate;w?(y.updateQueue=w.updateQueue,y.memoizedState=w.memoizedState,y.lanes=w.lanes):(y.updateQueue=null,y.memoizedState=null)}var E=Ep(l);if(E!==null){E.flags&=-257,kp(E,l,u,o,t),E.mode&1&&_p(o,h,t),t=E,d=h;var $=t.updateQueue;if($===null){var S=new Set;S.add(d),t.updateQueue=S}else $.add(d);break e}else{if(!(t&1)){_p(o,h,t),jd();break e}d=Error(B(426))}}else if(xe&&u.mode&1){var T=Ep(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),kp(T,l,u,o,t),md(xi(d,u));break e}}o=d=xi(d,u),Ae!==4&&(Ae=2),vs===null?vs=[o]:vs.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=R0(o,d,t);wp(o,g);break e;case 1:u=d;var f=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Fn===null||!Fn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=A0(o,u,t);wp(o,_);break e}}o=o.return}while(o!==null)}ng(n)}catch(L){t=L,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function eg(){var e=zl.current;return zl.current=Pl,e===null?Pl:e}function jd(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ue===null||!(br&268435455)&&!(na&268435455)||Pn(Ue,Ke)}function Ol(e,t){var n=se;se|=2;var r=eg();(Ue!==e||Ke!==t)&&(ln=null,mr(e,t));do try{Z2();break}catch(i){M0(e,i)}while(!0);if(yd(),se=n,zl.current=r,De!==null)throw Error(B(261));return Ue=null,Ke=0,Ae}function Z2(){for(;De!==null;)tg(De)}function X2(){for(;De!==null&&!Sy();)tg(De)}function tg(e){var t=ig(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?ng(e):De=t,Pd.current=null}function ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=V2(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,De=null;return}}else if(n=W2(n,t,ht),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ae===0&&(Ae=5)}function rr(e,t,n){var r=fe,i=Nt.transition;try{Nt.transition=null,fe=1,q2(e,t,n,r)}finally{Nt.transition=i,fe=r}return null}function q2(e,t,n,r){do pi();while(Tn!==null);if(se&6)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dy(e,o),e===Ue&&(De=Ue=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,sg(ml,function(){return pi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Nt.transition,Nt.transition=null;var l=fe;fe=1;var u=se;se|=4,Pd.current=null,Q2(e,n),Z0(n,e),v2(gu),yl=!!mu,gu=mu=null,e.current=n,K2(n),Cy(),se=u,fe=l,Nt.transition=o}else e.current=n;if($o&&($o=!1,Tn=e,Tl=i),o=e.pendingLanes,o===0&&(Fn=null),Ey(n.stateNode),ft(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dl)throw Dl=!1,e=Ru,Ru=null,e;return Tl&1&&e.tag!==0&&pi(),o=e.pendingLanes,o&1?e===Au?ws++:(ws=0,Au=e):ws=0,Jn(),null}function pi(){if(Tn!==null){var e=Rm(Tl),t=Nt.transition,n=fe;try{if(Nt.transition=null,fe=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,Tl=0,se&6)throw Error(B(331));var i=se;for(se|=4,Q=e.current;Q!==null;){var o=Q,l=o.child;if(Q.flags&16){var u=o.deletions;if(u!==null){for(var d=0;d<u.length;d++){var h=u[d];for(Q=h;Q!==null;){var y=Q;switch(y.tag){case 0:case 11:case 15:ys(8,y,o)}var v=y.child;if(v!==null)v.return=y,Q=v;else for(;Q!==null;){y=Q;var w=y.sibling,E=y.return;if(K0(y),y===h){Q=null;break}if(w!==null){w.return=E,Q=w;break}Q=E}}}var $=o.alternate;if($!==null){var S=$.child;if(S!==null){$.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}Q=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Q=l;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ys(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,Q=g;break e}Q=o.return}}var f=e.current;for(Q=f;Q!==null;){l=Q;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Q=x;else e:for(l=f;Q!==null;){if(u=Q,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ta(9,u)}}catch(L){Ee(u,u.return,L)}if(u===l){Q=null;break e}var _=u.sibling;if(_!==null){_.return=u.return,Q=_;break e}Q=u.return}}if(se=i,Jn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Kl,e)}catch{}r=!0}return r}finally{fe=n,Nt.transition=t}}return!1}function Fp(e,t,n){t=xi(n,t),t=R0(e,t,1),e=Bn(e,t,1),t=nt(),e!==null&&(Js(e,1,t),ft(e,t))}function Ee(e,t,n){if(e.tag===3)Fp(e,e,n);else for(;t!==null;){if(t.tag===3){Fp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=xi(n,e),e=A0(t,e,1),t=Bn(t,e,1),e=nt(),t!==null&&(Js(t,1,e),ft(t,e));break}}t=t.return}}function M2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Ke&n)===n&&(Ae===4||Ae===3&&(Ke&130023424)===Ke&&500>Ne()-Dd?mr(e,0):zd|=n),ft(e,t)}function rg(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=nt();e=yn(e,t),e!==null&&(Js(e,t,n),ft(e,n))}function e5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rg(e,n)}function t5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),rg(e,n)}var ig;ig=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)ct=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ct=!1,H2(e,t,n);ct=!!(e.flags&131072)}else ct=!1,xe&&t.flags&1048576&&a0(t,$l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sl(e,t),e=t.pendingProps;var i=gi(t,Me.current);fi(t,n),i=_d(null,t,r,e,i,n);var o=Ed();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(o=!0,Sl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xd(t),i.updater=ea,t.stateNode=i,i._reactInternals=t,_u(t,r,e,n),t=Lu(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&pd(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=r5(r),e=Ot(r,e),i){case 0:t=ku(null,t,r,e,n);break e;case 1:t=Pp(null,t,r,e,n);break e;case 11:t=Lp(null,t,r,e,n);break e;case 14:t=Np(null,t,r,Ot(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ku(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Pp(e,t,r,i,n);case 3:e:{if(U0(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,h0(e,t),kl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xi(Error(B(423)),t),t=zp(e,t,r,n,i);break e}else if(r!==i){i=xi(Error(B(424)),t),t=zp(e,t,r,n,i);break e}else for(gt=In(t.stateNode.containerInfo.firstChild),yt=t,xe=!0,Rt=null,n=f0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){t=vn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return m0(t),e===null&&Su(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,yu(r,i)?l=null:o!==null&&yu(r,o)&&(t.flags|=32),F0(e,t),et(e,t,l,n),t.child;case 6:return e===null&&Su(t),null;case 13:return H0(e,t,n);case 4:return bd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vi(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Lp(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,he(_l,r._currentValue),r._currentValue=l,o!==null)if(Ht(o.value,l)){if(o.children===i.children&&!ut.current){t=vn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=pn(-1,n&-n),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var y=h.pending;y===null?d.next=d:(d.next=y.next,y.next=d),h.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Cu(o.return,n,t),u.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Cu(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fi(t,n),i=Pt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),Np(e,t,r,i,n);case 15:return I0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),sl(e,t),t.tag=1,dt(r)?(e=!0,Sl(t)):e=!1,fi(t,n),j0(t,r,i),_u(t,r,i,n),Lu(null,t,r,!0,e,n);case 19:return W0(e,t,n);case 22:return B0(e,t,n)}throw Error(B(156,t.tag))};function sg(e,t){return Dm(e,t)}function n5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,r){return new n5(e,t,n,r)}function Rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function r5(e){if(typeof e=="function")return Rd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===td)return 11;if(e===nd)return 14}return 2}function Hn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function al(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Rd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xr:return gr(n.children,i,o,t);case ed:l=8,i|=8;break;case Gc:return e=Lt(12,n,t,i|2),e.elementType=Gc,e.lanes=o,e;case Zc:return e=Lt(13,n,t,i),e.elementType=Zc,e.lanes=o,e;case Xc:return e=Lt(19,n,t,i),e.elementType=Xc,e.lanes=o,e;case mm:return ra(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pm:l=10;break e;case hm:l=9;break e;case td:l=11;break e;case nd:l=14;break e;case kn:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=Lt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gr(e,t,n,r){return e=Lt(7,e,r,t),e.lanes=n,e}function ra(e,t,n,r){return e=Lt(22,e,r,t),e.elementType=mm,e.lanes=n,e.stateNode={isHidden:!1},e}function ec(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function tc(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function i5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ja(0),this.expirationTimes=ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(e,t,n,r,i,o,l,u,d){return e=new i5(e,t,n,u,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Lt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(o),e}function s5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function og(e){if(!e)return Yn;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(dt(n))return o0(e,n,t)}return t}function lg(e,t,n,r,i,o,l,u,d){return e=Ad(n,r,!0,e,i,o,l,u,d),e.context=og(null),n=e.current,r=nt(),i=Un(n),o=pn(r,i),o.callback=t??null,Bn(n,o,i),e.current.lanes=i,Js(e,i,r),ft(e,r),e}function ia(e,t,n,r){var i=t.current,o=nt(),l=Un(i);return n=og(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bn(i,t,l),e!==null&&(Ut(e,i,l,o),nl(e,i,l)),l}function jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Id(e,t){Up(e,t),(e=e.alternate)&&Up(e,t)}function o5(){return null}var ag=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bd(e){this._internalRoot=e}sa.prototype.render=Bd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));ia(e,t,null,null)};sa.prototype.unmount=Bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sr(function(){ia(null,e,null,null)}),t[gn]=null}};function sa(e){this._internalRoot=e}sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&Um(e)}};function Fd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function l5(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=jl(l);o.call(h)}}var l=lg(t,r,e,0,null,!1,!1,"",Hp);return e._reactRootContainer=l,e[gn]=l.current,Ps(e.nodeType===8?e.parentNode:e),Sr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var h=jl(d);u.call(h)}}var d=Ad(e,0,!1,null,null,!1,!1,"",Hp);return e._reactRootContainer=d,e[gn]=d.current,Ps(e.nodeType===8?e.parentNode:e),Sr(function(){ia(t,d,n,r)}),d}function la(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var d=jl(l);u.call(d)}}ia(t,l,e,i)}else l=l5(n,t,e,i,r);return jl(l)}Am=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=as(t.pendingLanes);n!==0&&(sd(t,n|1),ft(t,Ne()),!(se&6)&&(bi=Ne()+500,Jn()))}break;case 13:Sr(function(){var r=yn(e,1);if(r!==null){var i=nt();Ut(r,e,1,i)}}),Id(e,1)}};od=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=nt();Ut(t,e,134217728,n)}Id(e,134217728)}};Im=function(e){if(e.tag===13){var t=Un(e),n=yn(e,t);if(n!==null){var r=nt();Ut(n,e,t,r)}Id(e,t)}};Bm=function(){return fe};Fm=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};lu=function(e,t,n){switch(t){case"input":if(eu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xl(r);if(!i)throw Error(B(90));ym(r),eu(r,i)}}}break;case"textarea":wm(e,n);break;case"select":t=n.value,t!=null&&ai(e,!!n.multiple,t,!1)}};Em=Td;km=Sr;var a5={usingClientEntryPoint:!1,Events:[Zs,ti,Xl,$m,_m,Td]},Gi={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c5={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pm(e),e===null?null:e.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||o5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Kl=_o.inject(c5),Xt=_o}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a5;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(t))throw Error(B(200));return s5(e,t,null,n)};xt.createRoot=function(e,t){if(!Fd(e))throw Error(B(299));var n=!1,r="",i=ag;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ad(e,1,!1,null,null,n,!1,r,i),e[gn]=t.current,Ps(e.nodeType===8?e.parentNode:e),new Bd(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Pm(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return Sr(e)};xt.hydrate=function(e,t,n){if(!oa(t))throw Error(B(200));return la(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Fd(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ag;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lg(t,null,e,1,n??null,i,!1,o,l),e[gn]=t.current,Ps(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sa(t)};xt.render=function(e,t,n){if(!oa(t))throw Error(B(200));return la(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!oa(e))throw Error(B(40));return e._reactRootContainer?(Sr(function(){la(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1};xt.unstable_batchedUpdates=Td;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oa(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return la(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function cg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cg)}catch(e){console.error(e)}}cg(),cm.exports=xt;var u5=cm.exports,Wp=u5;Kc.createRoot=Wp.createRoot,Kc.hydrateRoot=Wp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bs.apply(this,arguments)}var On;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(On||(On={}));const Vp="popstate";function d5(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:u}=r.location;return Fu("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ug(i)}return p5(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ud(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function f5(){return Math.random().toString(36).substr(2,8)}function Yp(e,t){return{usr:e.state,key:e.key,idx:t}}function Fu(e,t,n,r){return n===void 0&&(n=null),Bs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Li(t):t,{state:n,key:t&&t.key||r||f5()})}function ug(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Li(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,u=On.Pop,d=null,h=y();h==null&&(h=0,l.replaceState(Bs({},l.state,{idx:h}),""));function y(){return(l.state||{idx:null}).idx}function v(){u=On.Pop;let T=y(),g=T==null?null:T-h;h=T,d&&d({action:u,location:S.location,delta:g})}function w(T,g){u=On.Push;let f=Fu(S.location,T,g);h=y()+1;let x=Yp(f,h),_=S.createHref(f);try{l.pushState(x,"",_)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(_)}o&&d&&d({action:u,location:S.location,delta:1})}function E(T,g){u=On.Replace;let f=Fu(S.location,T,g);h=y();let x=Yp(f,h),_=S.createHref(f);l.replaceState(x,"",_),o&&d&&d({action:u,location:S.location,delta:0})}function $(T){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:ug(T);return f=f.replace(/ $/,"%20"),Te(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let S={get action(){return u},get location(){return e(i,l)},listen(T){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Vp,v),d=T,()=>{i.removeEventListener(Vp,v),d=null}},createHref(T){return t(i,T)},createURL:$,encodeLocation(T){let g=$(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:w,replace:E,go(T){return l.go(T)}};return S}var Qp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qp||(Qp={}));function h5(e,t,n){return n===void 0&&(n="/"),m5(e,t,n)}function m5(e,t,n,r){let i=typeof t=="string"?Li(t):t,o=pg(i.pathname||"/",n);if(o==null)return null;let l=dg(e);g5(l);let u=null;for(let d=0;u==null&&d<l.length;++d){let h=L5(o);u=_5(l[d],h)}return u}function dg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};d.relativePath.startsWith("/")&&(Te(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let h=yr([r,d.relativePath]),y=n.concat(d);o.children&&o.children.length>0&&(Te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),dg(o.children,t,y,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:C5(h,o.index),routesMeta:y})};return e.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,l);else for(let d of fg(o.path))i(o,l,d)}),t}function fg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=fg(r.join("/")),u=[];return u.push(...l.map(d=>d===""?o:[o,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function g5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y5=/^:[\w-]+$/,v5=3,w5=2,x5=1,b5=10,S5=-2,Kp=e=>e==="*";function C5(e,t){let n=e.split("/"),r=n.length;return n.some(Kp)&&(r+=S5),t&&(r+=w5),n.filter(i=>!Kp(i)).reduce((i,o)=>i+(y5.test(o)?v5:o===""?x5:b5),r)}function $5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function _5(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let u=0;u<r.length;++u){let d=r[u],h=u===r.length-1,y=o==="/"?t:t.slice(o.length)||"/",v=E5({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},y),w=d.route;if(!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:yr([o,v.pathname]),pathnameBase:T5(yr([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=yr([o,v.pathnameBase]))}return l}function E5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=k5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((h,y,v)=>{let{paramName:w,isOptional:E}=y;if(w==="*"){let S=u[v]||"";l=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const $=u[v];return E&&!$?h[w]=void 0:h[w]=($||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:l,pattern:e}}function k5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ud(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,d)=>(r.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function L5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ud(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const N5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P5=e=>N5.test(e);function z5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Li(e):e,o;if(n)if(P5(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Ud(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=Jp(n.substring(1),"/"):o=Jp(n,t)}else o=t;return{pathname:o,search:O5(r),hash:j5(i)}}function Jp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hg(e,t){let n=D5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Li(e):(i=Bs({},e),Te(!i.pathname||!i.pathname.includes("?"),nc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),nc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),nc("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,u;if(l==null)u=n;else{let v=t.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),v-=1;i.pathname=w.join("/")}u=v>=0?t[v]:"/"}let d=z5(i,u),h=l&&l!=="/"&&l.endsWith("/"),y=(o||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||y)&&(d.pathname+="/"),d}const yr=e=>e.join("/").replace(/\/\/+/g,"/"),T5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function R5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gg=["post","put","patch","delete"];new Set(gg);const A5=["get",...gg];new Set(A5);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}const Hd=m.createContext(null),I5=m.createContext(null),qs=m.createContext(null),aa=m.createContext(null),Lr=m.createContext({outlet:null,matches:[],isDataRoute:!1}),yg=m.createContext(null);function Ms(){return m.useContext(aa)!=null}function Wd(){return Ms()||Te(!1),m.useContext(aa).location}function vg(e){m.useContext(qs).static||m.useLayoutEffect(e)}function eo(){let{isDataRoute:e}=m.useContext(Lr);return e?X5():B5()}function B5(){Ms()||Te(!1);let e=m.useContext(Hd),{basename:t,future:n,navigator:r}=m.useContext(qs),{matches:i}=m.useContext(Lr),{pathname:o}=Wd(),l=JSON.stringify(hg(i,n.v7_relativeSplatPath)),u=m.useRef(!1);return vg(()=>{u.current=!0}),m.useCallback(function(h,y){if(y===void 0&&(y={}),!u.current)return;if(typeof h=="number"){r.go(h);return}let v=mg(h,JSON.parse(l),o,y.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:yr([t,v.pathname])),(y.replace?r.replace:r.push)(v,y.state,y)},[t,r,l,o,e])}function F5(e,t){return U5(e,t)}function U5(e,t,n,r){Ms()||Te(!1);let{navigator:i}=m.useContext(qs),{matches:o}=m.useContext(Lr),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let h=Wd(),y;if(t){var v;let T=typeof t=="string"?Li(t):t;d==="/"||(v=T.pathname)!=null&&v.startsWith(d)||Te(!1),y=T}else y=h;let w=y.pathname||"/",E=w;if(d!=="/"){let T=d.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(T.length).join("/")}let $=h5(e,{pathname:E}),S=Q5($&&$.map(T=>Object.assign({},T,{params:Object.assign({},u,T.params),pathname:yr([d,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?d:yr([d,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),o,n,r);return t&&S?m.createElement(aa.Provider,{value:{location:Fs({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:On.Pop}},S):S}function H5(){let e=Z5(),t=R5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const W5=m.createElement(H5,null);class V5 extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Lr.Provider,{value:this.props.routeContext},m.createElement(yg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y5(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(Hd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Lr.Provider,{value:t},r)}function Q5(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=(i=n)==null?void 0:i.errors;if(u!=null){let y=l.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);y>=0||Te(!1),l=l.slice(0,Math.min(l.length,y+1))}let d=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let y=0;y<l.length;y++){let v=l[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=y),v.route.id){let{loaderData:w,errors:E}=n,$=v.route.loader&&w[v.route.id]===void 0&&(!E||E[v.route.id]===void 0);if(v.route.lazy||$){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((y,v,w)=>{let E,$=!1,S=null,T=null;n&&(E=u&&v.route.id?u[v.route.id]:void 0,S=v.route.errorElement||W5,d&&(h<0&&w===0?(q5("route-fallback"),$=!0,T=null):h===w&&($=!0,T=v.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,w+1)),f=()=>{let x;return E?x=S:$?x=T:v.route.Component?x=m.createElement(v.route.Component,null):v.route.element?x=v.route.element:x=y,m.createElement(Y5,{match:v,routeContext:{outlet:y,matches:g,isDataRoute:n!=null},children:x})};return n&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?m.createElement(V5,{location:n.location,revalidation:n.revalidation,component:S,error:E,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var wg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wg||{}),xg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xg||{});function K5(e){let t=m.useContext(Hd);return t||Te(!1),t}function J5(e){let t=m.useContext(I5);return t||Te(!1),t}function G5(e){let t=m.useContext(Lr);return t||Te(!1),t}function bg(e){let t=G5(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function Z5(){var e;let t=m.useContext(yg),n=J5(),r=bg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function X5(){let{router:e}=K5(wg.UseNavigateStable),t=bg(xg.UseNavigateStable),n=m.useRef(!1);return vg(()=>{n.current=!0}),m.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Fs({fromRouteId:t},o)))},[e,t])}const Gp={};function q5(e,t,n){Gp[e]||(Gp[e]=!0)}function M5(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ev(e){let{to:t,replace:n,state:r,relative:i}=e;Ms()||Te(!1);let{future:o,static:l}=m.useContext(qs),{matches:u}=m.useContext(Lr),{pathname:d}=Wd(),h=eo(),y=mg(t,hg(u,o.v7_relativeSplatPath),d,i==="path"),v=JSON.stringify(y);return m.useEffect(()=>h(JSON.parse(v),{replace:n,state:r,relative:i}),[h,v,i,n,r]),null}function Gr(e){Te(!1)}function tv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=On.Pop,navigator:o,static:l=!1,future:u}=e;Ms()&&Te(!1);let d=t.replace(/^\/*/,"/"),h=m.useMemo(()=>({basename:d,navigator:o,static:l,future:Fs({v7_relativeSplatPath:!1},u)}),[d,u,o,l]);typeof r=="string"&&(r=Li(r));let{pathname:y="/",search:v="",hash:w="",state:E=null,key:$="default"}=r,S=m.useMemo(()=>{let T=pg(y,d);return T==null?null:{location:{pathname:T,search:v,hash:w,state:E,key:$},navigationType:i}},[d,y,v,w,E,$,i]);return S==null?null:m.createElement(qs.Provider,{value:h},m.createElement(aa.Provider,{children:n,value:S}))}function nv(e){let{children:t,location:n}=e;return F5(Uu(t),n)}new Promise(()=>{});function Uu(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,i)=>{if(!m.isValidElement(r))return;let o=[...t,i];if(r.type===m.Fragment){n.push.apply(n,Uu(r.props.children,o));return}r.type!==Gr&&Te(!1),!r.props.index||!r.props.children||Te(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Uu(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const rv="6";try{window.__reactRouterVersion=rv}catch{}const iv="startTransition",Zp=Qc[iv];function sv(e){let{basename:t,children:n,future:r,window:i}=e,o=m.useRef();o.current==null&&(o.current=d5({window:i,v5Compat:!0}));let l=o.current,[u,d]=m.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},y=m.useCallback(v=>{h&&Zp?Zp(()=>d(v)):d(v)},[d,h]);return m.useLayoutEffect(()=>l.listen(y),[l,y]),m.useEffect(()=>M5(r),[r]),m.createElement(tv,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:l,future:r})}var Xp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xp||(Xp={}));var qp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qp||(qp={}));function ov(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function lv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var av=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lv(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ov(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Xe="-ms-",Rl="-moz-",ae="-webkit-",Sg="comm",Vd="rule",Yd="decl",cv="@import",Cg="@keyframes",uv="@layer",dv=Math.abs,ca=String.fromCharCode,fv=Object.assign;function pv(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function $g(e){return e.trim()}function hv(e,t){return(e=t.exec(e))?e[0]:e}function ce(e,t,n){return e.replace(t,n)}function Hu(e,t){return e.indexOf(t)}function Qe(e,t){return e.charCodeAt(t)|0}function Us(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Qd(e){return e.length}function Eo(e,t){return t.push(e),e}function mv(e,t){return e.map(t).join("")}var ua=1,Si=1,_g=0,pt=0,ze=0,Ni="";function da(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ua,column:Si,length:l,return:""}}function Zi(e,t){return fv(da("",null,null,"",null,null,0),e,{length:-e.length},t)}function gv(){return ze}function yv(){return ze=pt>0?Qe(Ni,--pt):0,Si--,ze===10&&(Si=1,ua--),ze}function vt(){return ze=pt<_g?Qe(Ni,pt++):0,Si++,ze===10&&(Si=1,ua++),ze}function Mt(){return Qe(Ni,pt)}function cl(){return pt}function to(e,t){return Us(Ni,e,t)}function Hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Eg(e){return ua=Si=1,_g=Kt(Ni=e),pt=0,[]}function kg(e){return Ni="",e}function ul(e){return $g(to(pt-1,Wu(e===91?e+2:e===40?e+1:e)))}function vv(e){for(;(ze=Mt())&&ze<33;)vt();return Hs(e)>2||Hs(ze)>3?"":" "}function wv(e,t){for(;--t&&vt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return to(e,cl()+(t<6&&Mt()==32&&vt()==32))}function Wu(e){for(;vt();)switch(ze){case e:return pt;case 34:case 39:e!==34&&e!==39&&Wu(ze);break;case 40:e===41&&Wu(e);break;case 92:vt();break}return pt}function xv(e,t){for(;vt()&&e+ze!==57;)if(e+ze===84&&Mt()===47)break;return"/*"+to(t,pt-1)+"*"+ca(e===47?e:vt())}function bv(e){for(;!Hs(Mt());)vt();return to(e,pt)}function Sv(e){return kg(dl("",null,null,null,[""],e=Eg(e),0,[0],e))}function dl(e,t,n,r,i,o,l,u,d){for(var h=0,y=0,v=l,w=0,E=0,$=0,S=1,T=1,g=1,f=0,x="",_=i,L=o,N=r,z=x;T;)switch($=f,f=vt()){case 40:if($!=108&&Qe(z,v-1)==58){Hu(z+=ce(ul(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:z+=ul(f);break;case 9:case 10:case 13:case 32:z+=vv($);break;case 92:z+=wv(cl()-1,7);continue;case 47:switch(Mt()){case 42:case 47:Eo(Cv(xv(vt(),cl()),t,n),d);break;default:z+="/"}break;case 123*S:u[h++]=Kt(z)*g;case 125*S:case 59:case 0:switch(f){case 0:case 125:T=0;case 59+y:g==-1&&(z=ce(z,/\f/g,"")),E>0&&Kt(z)-v&&Eo(E>32?eh(z+";",r,n,v-1):eh(ce(z," ","")+";",r,n,v-2),d);break;case 59:z+=";";default:if(Eo(N=Mp(z,t,n,h,y,i,u,x,_=[],L=[],v),o),f===123)if(y===0)dl(z,t,N,N,_,o,v,u,L);else switch(w===99&&Qe(z,3)===110?100:w){case 100:case 108:case 109:case 115:dl(e,N,N,r&&Eo(Mp(e,N,N,0,0,i,u,x,i,_=[],v),L),i,L,v,u,r?_:L);break;default:dl(z,N,N,N,[""],L,0,u,L)}}h=y=E=0,S=g=1,x=z="",v=l;break;case 58:v=1+Kt(z),E=$;default:if(S<1){if(f==123)--S;else if(f==125&&S++==0&&yv()==125)continue}switch(z+=ca(f),f*S){case 38:g=y>0?1:(z+="\f",-1);break;case 44:u[h++]=(Kt(z)-1)*g,g=1;break;case 64:Mt()===45&&(z+=ul(vt())),w=Mt(),y=v=Kt(x=z+=bv(cl())),f++;break;case 45:$===45&&Kt(z)==2&&(S=0)}}return o}function Mp(e,t,n,r,i,o,l,u,d,h,y){for(var v=i-1,w=i===0?o:[""],E=Qd(w),$=0,S=0,T=0;$<r;++$)for(var g=0,f=Us(e,v+1,v=dv(S=l[$])),x=e;g<E;++g)(x=$g(S>0?w[g]+" "+f:ce(f,/&\f/g,w[g])))&&(d[T++]=x);return da(e,t,n,i===0?Vd:u,d,h,y)}function Cv(e,t,n){return da(e,t,n,Sg,ca(gv()),Us(e,2,-2),0)}function eh(e,t,n,r){return da(e,t,n,Yd,Us(e,0,r),Us(e,r+1,-1),r)}function hi(e,t){for(var n="",r=Qd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function $v(e,t,n,r){switch(e.type){case uv:if(e.children.length)break;case cv:case Yd:return e.return=e.return||e.value;case Sg:return"";case Cg:return e.return=e.value+"{"+hi(e.children,r)+"}";case Vd:e.value=e.props.join(",")}return Kt(n=hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function _v(e){var t=Qd(e);return function(n,r,i,o){for(var l="",u=0;u<t;u++)l+=e[u](n,r,i,o)||"";return l}}function Ev(e){return function(t){t.root||(t=t.return)&&e(t)}}function kv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Lv=function(t,n,r){for(var i=0,o=0;i=o,o=Mt(),i===38&&o===12&&(n[r]=1),!Hs(o);)vt();return to(t,pt)},Nv=function(t,n){var r=-1,i=44;do switch(Hs(i)){case 0:i===38&&Mt()===12&&(n[r]=1),t[r]+=Lv(pt-1,n,r);break;case 2:t[r]+=ul(i);break;case 4:if(i===44){t[++r]=Mt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ca(i)}while(i=vt());return t},Pv=function(t,n){return kg(Nv(Eg(t),n))},th=new WeakMap,zv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!th.get(r))&&!i){th.set(t,!0);for(var o=[],l=Pv(n,o),u=r.props,d=0,h=0;d<l.length;d++)for(var y=0;y<u.length;y++,h++)t.props[h]=o[d]?l[d].replace(/&\f/g,u[y]):u[y]+" "+l[d]}}},Dv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Lg(e,t){switch(pv(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+Rl+e+Xe+e+e;case 6828:case 4268:return ae+e+Xe+e+e;case 6165:return ae+e+Xe+"flex-"+e+e;case 5187:return ae+e+ce(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+Xe+"flex-$1$2")+e;case 5443:return ae+e+Xe+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return ae+e+Xe+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+Xe+ce(e,"shrink","negative")+e;case 5292:return ae+e+Xe+ce(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+ce(e,"-grow","")+ae+e+Xe+ce(e,"grow","positive")+e;case 4554:return ae+ce(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+Rl+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hu(e,"stretch")?Lg(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Qe(e,t+1)!==115)break;case 6444:switch(Qe(e,Kt(e)-3-(~Hu(e,"!important")&&10))){case 107:return ce(e,":",":"+ae)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(Qe(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+Xe+"$2box$3")+e}break;case 5936:switch(Qe(e,t+11)){case 114:return ae+e+Xe+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+Xe+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+Xe+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+Xe+e+e}return e}var Tv=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Yd:t.return=Lg(t.value,t.length);break;case Cg:return hi([Zi(t,{value:ce(t.value,"@","@"+ae)})],i);case Vd:if(t.length)return mv(t.props,function(o){switch(hv(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return hi([Zi(t,{props:[ce(o,/:(read-\w+)/,":"+Rl+"$1")]})],i);case"::placeholder":return hi([Zi(t,{props:[ce(o,/:(plac\w+)/,":"+ae+"input-$1")]}),Zi(t,{props:[ce(o,/:(plac\w+)/,":"+Rl+"$1")]}),Zi(t,{props:[ce(o,/:(plac\w+)/,Xe+"input-$1")]})],i)}return""})}},Ov=[Tv],jv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var T=S.getAttribute("data-emotion");T.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ov,o={},l,u=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var T=S.getAttribute("data-emotion").split(" "),g=1;g<T.length;g++)o[T[g]]=!0;u.push(S)});var d,h=[zv,Dv];{var y,v=[$v,Ev(function(S){y.insert(S)})],w=_v(h.concat(i,v)),E=function(T){return hi(Sv(T),w)};d=function(T,g,f,x){y=f,E(T?T+"{"+g.styles+"}":g.styles),x&&($.inserted[g.name]=!0)}}var $={key:n,sheet:new av({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:d};return $.sheet.hydrate(u),$},Ng={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,Kd=He?Symbol.for("react.element"):60103,Jd=He?Symbol.for("react.portal"):60106,fa=He?Symbol.for("react.fragment"):60107,pa=He?Symbol.for("react.strict_mode"):60108,ha=He?Symbol.for("react.profiler"):60114,ma=He?Symbol.for("react.provider"):60109,ga=He?Symbol.for("react.context"):60110,Gd=He?Symbol.for("react.async_mode"):60111,ya=He?Symbol.for("react.concurrent_mode"):60111,va=He?Symbol.for("react.forward_ref"):60112,wa=He?Symbol.for("react.suspense"):60113,Rv=He?Symbol.for("react.suspense_list"):60120,xa=He?Symbol.for("react.memo"):60115,ba=He?Symbol.for("react.lazy"):60116,Av=He?Symbol.for("react.block"):60121,Iv=He?Symbol.for("react.fundamental"):60117,Bv=He?Symbol.for("react.responder"):60118,Fv=He?Symbol.for("react.scope"):60119;function St(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kd:switch(e=e.type,e){case Gd:case ya:case fa:case ha:case pa:case wa:return e;default:switch(e=e&&e.$$typeof,e){case ga:case va:case ba:case xa:case ma:return e;default:return t}}case Jd:return t}}}function Pg(e){return St(e)===ya}pe.AsyncMode=Gd;pe.ConcurrentMode=ya;pe.ContextConsumer=ga;pe.ContextProvider=ma;pe.Element=Kd;pe.ForwardRef=va;pe.Fragment=fa;pe.Lazy=ba;pe.Memo=xa;pe.Portal=Jd;pe.Profiler=ha;pe.StrictMode=pa;pe.Suspense=wa;pe.isAsyncMode=function(e){return Pg(e)||St(e)===Gd};pe.isConcurrentMode=Pg;pe.isContextConsumer=function(e){return St(e)===ga};pe.isContextProvider=function(e){return St(e)===ma};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kd};pe.isForwardRef=function(e){return St(e)===va};pe.isFragment=function(e){return St(e)===fa};pe.isLazy=function(e){return St(e)===ba};pe.isMemo=function(e){return St(e)===xa};pe.isPortal=function(e){return St(e)===Jd};pe.isProfiler=function(e){return St(e)===ha};pe.isStrictMode=function(e){return St(e)===pa};pe.isSuspense=function(e){return St(e)===wa};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fa||e===ya||e===ha||e===pa||e===wa||e===Rv||typeof e=="object"&&e!==null&&(e.$$typeof===ba||e.$$typeof===xa||e.$$typeof===ma||e.$$typeof===ga||e.$$typeof===va||e.$$typeof===Iv||e.$$typeof===Bv||e.$$typeof===Fv||e.$$typeof===Av)};pe.typeOf=St;Ng.exports=pe;var Uv=Ng.exports,zg=Uv,Hv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dg={};Dg[zg.ForwardRef]=Hv;Dg[zg.Memo]=Wv;var Vv=!0;function Yv(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var Tg=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Vv===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Qv=function(t,n,r){Tg(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Kv(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Jv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gv=/[A-Z]|^ms/g,Zv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Og=function(t){return t.charCodeAt(1)===45},nh=function(t){return t!=null&&typeof t!="boolean"},rc=kv(function(e){return Og(e)?e:e.replace(Gv,"-$&").toLowerCase()}),rh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zv,function(r,i,o){return Jt={name:i,styles:o,next:Jt},i})}return Jv[t]!==1&&!Og(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ws(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Jt={name:i.name,styles:i.styles,next:Jt},i.name;var o=n;if(o.styles!==void 0){var l=o.next;if(l!==void 0)for(;l!==void 0;)Jt={name:l.name,styles:l.styles,next:Jt},l=l.next;var u=o.styles+";";return u}return Xv(e,t,n)}case"function":{if(e!==void 0){var d=Jt,h=n(e);return Jt=d,Ws(e,t,h)}break}}var y=n;return y}function Xv(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ws(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object"){var u=l;nh(u)&&(r+=rc(o)+":"+rh(o,u)+";")}else if(Array.isArray(l)&&typeof l[0]=="string"&&t==null)for(var d=0;d<l.length;d++)nh(l[d])&&(r+=rc(o)+":"+rh(o,l[d])+";");else{var h=Ws(e,t,l);switch(o){case"animation":case"animationName":{r+=rc(o)+":"+h+";";break}default:r+=o+"{"+h+"}"}}}return r}var ih=/label:\s*([^\s;{]+)\s*(;|$)/g,Jt;function jg(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";Jt=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=Ws(n,t,o);else{var l=o;i+=l[0]}for(var u=1;u<e.length;u++)if(i+=Ws(n,t,e[u]),r){var d=o;i+=d[u]}ih.lastIndex=0;for(var h="",y;(y=ih.exec(i))!==null;)h+="-"+y[1];var v=Kv(i)+h;return{name:v,styles:i,next:Jt}}var qv=function(t){return t()},Mv=Qc.useInsertionEffect?Qc.useInsertionEffect:!1,ew=Mv||qv,Rg=m.createContext(typeof HTMLElement<"u"?jv({key:"css"}):null);Rg.Provider;var tw=function(t){return m.forwardRef(function(n,r){var i=m.useContext(Rg);return t(n,i,r)})},nw=m.createContext({}),no={}.hasOwnProperty,Vu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Zd=function(t,n){var r={};for(var i in n)no.call(n,i)&&(r[i]=n[i]);return r[Vu]=t,r},rw=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Tg(n,r,i),ew(function(){return Qv(n,r,i)}),null},iw=tw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Vu],o=[r],l="";typeof e.className=="string"?l=Yv(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var u=jg(o,void 0,m.useContext(nw));l+=t.key+"-"+u.name;var d={};for(var h in e)no.call(e,h)&&h!=="css"&&h!==Vu&&(d[h]=e[h]);return d.className=l,n&&(d.ref=n),m.createElement(m.Fragment,null,m.createElement(rw,{cache:t,serialized:u,isStringTag:typeof i=="string"}),m.createElement(i,d))}),Xd=iw,mt=je.Fragment,s=function(t,n,r){return no.call(n,"css")?je.jsx(Xd,Zd(t,n),r):je.jsx(t,n,r)},a=function(t,n,r){return no.call(n,"css")?je.jsxs(Xd,Zd(t,n),r):je.jsxs(t,n,r)},sh=function(t,n){var r=arguments;if(n==null||!no.call(n,"css"))return m.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=Xd,o[1]=Zd(t,n);for(var l=2;l<i;l++)o[l]=r[l];return m.createElement.apply(null,o)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(sh||(sh={}));function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return jg(t)}const sw="/strack/".replace(/\/$/,""),ow=e=>c`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`,lw=e=>c`
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
`,aw=c`
  position: relative;
  z-index: 1;
  max-width: 28rem;
`,cw=e=>c`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${e?"#f8fafc":"#0f172a"};
`,uw=e=>c`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${e?"rgba(226, 232, 240, 0.78)":"rgba(15, 23, 42, 0.72)"};
  max-width: 22rem;
`,dw=e=>c`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  background: ${e?"#0f0f0f":"#f4f4f5"};
`,fw=e=>c`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: ${e?"#1c1c1e":"#ffffff"};
  box-shadow: ${e?"0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)":"0 20px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)"};
`,pw=e=>c`
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
  margin-bottom: 0.35rem;
`,hw=e=>c`
  font-size: 0.9rem;
  color: ${e?"#a1a1aa":"#64748b"};
  margin-bottom: 1.5rem;
`,mw=c`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,oh=e=>c`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${e?"#e4e4e7":"#374151"};
  margin-bottom: 0.4rem;
`,Ag=e=>c`
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
`,gw=c`
  position: relative;
  display: flex;
  align-items: center;
`,yw=e=>c`
  ${Ag(e)};
  padding-right: 2.75rem;
`,vw=e=>c`
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
`,ww=e=>c`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${e?"#fca5a5":"#b91c1c"};
  background: ${e?"rgba(127, 29, 29, 0.25)":"#fef2f2"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.35)":"#fecaca"};
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
`,xw=c`
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
`,bw=e=>c`
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
`,Sw=c`
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
`,Cw=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),$w=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),_w=()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Ew=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function kw(e){return e?{message:"The server did not return JSON. Open the site at …/strack/ and ensure backend/login.php is deployed."}:{message:null}}function Lw({darkMode:e,onToggleDarkMode:t}){const n=eo(),[r,i]=m.useState(""),[o,l]=m.useState(""),[u,d]=m.useState(!1),[h,y]=m.useState(""),[v,w]=m.useState(!1),E=async $=>{if($.preventDefault(),y(""),!r.trim()){y("Enter your university email address.");return}if(!o){y("Enter your password.");return}w(!0);const S=`${sw}/backend/login.php`;try{const g=await(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.trim(),password:o})})).text();let f,x=!1;try{f=JSON.parse(g)}catch{x=!0,f={}}const _=kw(x);if(_.message){y(_.message);return}if(f.success){const L=f.user||{},N=L.role||"student",z=N==="admin"?"/admin":N==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(L))}catch{}n(z,{replace:!0});return}y(f.message||"Invalid email or password.")}catch{y(`Cannot reach ${S}. On NUWebSpace use your full /strack/ URL; locally run PHP and the Vite dev server with the proxy enabled.`)}finally{w(!1)}};return a("div",{css:ow(),children:[s("button",{type:"button",css:bw(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s($w,{}):s(Cw,{})}),s("section",{css:lw(e),"aria-hidden":"false",children:a("div",{css:aw,children:[s("h1",{css:cw(e),children:"Strack"}),s("p",{css:uw(e),children:"Sign in to track attendance, engagement, and performance in one place."})]})}),s("section",{css:dw(e),children:a("div",{css:fw(e),children:[s("h2",{css:pw(e),children:"Sign in"}),s("p",{css:hw(e),children:"Use the email and password from your administrator or module leader."}),a("form",{css:mw,onSubmit:E,noValidate:!0,children:[a("div",{children:[s("label",{css:oh(e),htmlFor:"strack-email",children:"Email"}),s("input",{id:"strack-email",css:Ag(e),type:"email",autoComplete:"username",inputMode:"email",placeholder:"you@uni.ac.uk",value:r,onChange:$=>i($.target.value),disabled:v})]}),a("div",{children:[s("label",{css:oh(e),htmlFor:"strack-password",children:"Password"}),a("div",{css:gw,children:[s("input",{id:"strack-password",css:yw(e),type:u?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:o,onChange:$=>l($.target.value),disabled:v}),s("button",{type:"button",css:vw(e),onClick:()=>d($=>!$),"aria-label":u?"Hide password":"Show password",tabIndex:-1,children:u?s(Ew,{}):s(_w,{})})]})]}),h?s("div",{role:"alert",css:ww(e),children:h}):null,s("button",{type:"submit",css:xw,disabled:v,children:v?a(mt,{children:[s("span",{css:Sw,"aria-hidden":!0}),"Signing in…"]}):"Sign in"})]})]})})]})}var Ig={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lh=fn.createContext&&fn.createContext(Ig),Nw=["attr","size","title"];function Pw(e,t){if(e==null)return{};var n,r,i=zw(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function zw(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(null,arguments)}function ah(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Il(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ah(Object(n),!0).forEach(function(r){Dw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ah(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dw(e,t,n){return(t=Tw(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tw(e){var t=Ow(e,"string");return typeof t=="symbol"?t:t+""}function Ow(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bg(e){return e&&e.map((t,n)=>fn.createElement(t.tag,Il({key:n},t.attr),Bg(t.child)))}function te(e){return t=>fn.createElement(jw,Al({attr:Il({},e.attr)},t),Bg(e.child))}function jw(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=Pw(e,Nw),u=i||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),fn.createElement("svg",Al({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:d,style:Il(Il({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&fn.createElement("title",null,o),e.children)};return lh!==void 0?fn.createElement(lh.Consumer,null,n=>t(n)):t(Ig)}function Pe(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function Rw(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function Cr(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function dn(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function qd(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"},child:[]}]})(e)}function or(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function Ci(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function Sa(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function Ca(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function Bl(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function Fg(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"},child:[]}]})(e)}function Ug(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"},child:[]}]})(e)}function zn(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function $i(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function Wn(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"},child:[]}]})(e)}function Xi(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function Aw(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"},child:[]}]})(e)}function Iw(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"},child:[]}]})(e)}function Bw(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.625 11.505v8.25a1.5 1.5 0 0 1-1.5 1.5H4.875a1.5 1.5 0 0 1-1.5-1.5v-8.25m8.25-6.375A2.625 2.625 0 1 0 9 7.755h2.625m0-2.625v2.625m0-2.625a2.625 2.625 0 1 1 2.625 2.625h-2.625m0 0v13.5M3 11.505h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.622-.504-1.125-1.125-1.125H3c-.621 0-1.125.503-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function ic(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]}]})(e)}function sc(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"},child:[]}]})(e)}function Md(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"},child:[]}]})(e)}function $r(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"},child:[]}]})(e)}function tt(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function Fw(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function ef(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"},child:[]}]})(e)}function tf(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"},child:[]}]})(e)}function nf(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function hn(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function us(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function Uw(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"},child:[]}]})(e)}function tn(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function rf(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},child:[]}]})(e)}function Hw(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"},child:[]}]})(e)}function sf(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function Hg(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"},child:[]}]})(e)}function Vs(e){return te({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const Ww="/strack/".replace(/\/$/,""),Pi="#6366f1",Vw=[{id:"food_drink",title:"Food & drink vouchers",description:"£15 credit for campus cafés and selected partner outlets.",cost:300,category:"vouchers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80&auto=format&fit=crop"},{id:"discount_local",title:"Local business discount codes",description:"Exclusive codes for shops and services near campus.",cost:400,category:"vouchers",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop"},{id:"digital_custom",title:"Digital customisation items",description:"Wallpapers, icons, and profile themes for your Strack account.",cost:250,category:"merchandise",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80&auto=format&fit=crop"},{id:"uni_merch",title:"University merchandise",description:"Hoodie, bottle, or cap from the official union store.",cost:550,category:"merchandise",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&q=80&auto=format&fit=crop"},{id:"recognition",title:"Recognition",description:"Certificate of achievement and spotlight on the leaderboard.",cost:200,category:"recognition",image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=80&auto=format&fit=crop"},{id:"print_credits",title:"Print credits",description:"500 mono pages or equivalent colour printing.",cost:150,category:"credits",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop"},{id:"charity",title:"Charity donations",description:"We donate £5 to your chosen university charity partner.",cost:350,category:"charity",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"},{id:"priority_booking",title:"Priority booking",description:"Register for modules and events one day before general release.",cost:800,category:"privileges",image:"https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80&auto=format&fit=crop"}];function Yw(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t=n=>Array.from({length:n},()=>e[Math.floor(Math.random()*e.length)]).join("");return`STR-${t(4)}-${t(4)}`}function Wg(e){return`strack_redeemed_${(e||"").toLowerCase()}`}function Qw(e){try{const t=localStorage.getItem(Wg(e));if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function ch(e,t){try{localStorage.setItem(Wg(e),JSON.stringify(t))}catch{}}const Kw=e=>c`
  max-width: 1120px;
  margin: 0 auto;
  color: ${e?"#f3f4f6":"#111827"};
`,Jw=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,Gw=c`
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
`,Zw=e=>c`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  background: ${e?"#1f2937":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  box-shadow: ${e?"none":"0 4px 14px rgba(15, 23, 42, 0.06)"};
  min-width: 160px;
`,Xw=c`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,qw=c`
  font-size: 1.65rem;
  font-weight: 800;
  font-family: inherit;
  color: ${Pi};
  letter-spacing: -0.02em;
`,Mw=c`
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
`,uh=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${e?"none":"0 8px 30px rgba(15, 23, 42, 0.06)"};
`,dh=c`
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
`,ex=c`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,tx=e=>c`
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
`,nx=c`
  aspect-ratio: 16 / 10;
  background: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,rx=c`
  padding: 0.9rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`,ix=c`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`,sx=c`
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.45;
  flex: 1;
`,ox=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,lx=c`
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
`,ax=e=>c`
  font-size: 0.7rem;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#1f2937":"#ffffff"};
  text-transform: lowercase;
`,cx=c`
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
`,ux=e=>c`
  min-height: 140px;
  border: 1px dashed ${e?"#4b5563":"#d1d5db"};
  border-radius: 12px;
  padding: 1.25rem;
  font-size: 0.9rem;
  color: #9ca3af;
`,dx=c`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,fx=e=>c`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  background: ${e?"#1f2937":"#f3f4f6"};
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#374151"};
`,px=c`
  flex: 1;
  min-width: 0;
`,hx=c`
  font-weight: 600;
  margin-bottom: 0.35rem;
`,mx=e=>c`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: ${e?"#a5b4fc":Pi};
  letter-spacing: 0.02em;
`,gx=c`
  font-weight: 700;
  color: #6b7280;
  white-space: nowrap;
  font-size: 0.82rem;
`,yx=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,vx=e=>c`
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
`,wx=c`
  font-size: 0.85rem;
  color: #b91c1c;
  margin-bottom: 0.75rem;
`,fh=()=>a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":!0,children:[s("circle",{cx:"9",cy:"12",r:"6"}),s("circle",{cx:"15",cy:"12",r:"6"})]});function xx({darkMode:e,userEmail:t,points:n,onPointsChange:r}){const[i,o]=m.useState([]),[l,u]=m.useState({}),[d,h]=m.useState("");m.useEffect(()=>{t&&o(Qw(t))},[t]);const y=()=>{o([]),ch(t,[])},v=async w=>{if(!t){h("Sign in again to redeem rewards.");return}if(n<w.cost){h("Not enough points for this reward.");return}h(""),u(E=>({...E,[w.id]:!0}));try{const $=await(await fetch(`${Ww}/backend/redeem_reward.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rewardId:w.id})})).json();if(!$.success){h($.message||"Could not redeem."),typeof $.points=="number"&&r($.points);return}r($.points);const S=[...i,{title:w.title,rewardId:w.id,cost:w.cost,at:new Date().toISOString(),promoCode:Yw()}];o(S),ch(t,S)}catch{h("Network error.")}finally{u(E=>({...E,[w.id]:!1}))}};return a("div",{css:Kw(e),children:[a("div",{css:Jw,children:[a("div",{css:Gw,children:[s("h1",{children:"Rewards Store"}),s("p",{children:"Redeem your points for exciting rewards"})]}),a("div",{css:Zw(e),children:[s("div",{css:Mw,children:s(fh,{})}),a("div",{children:[s("div",{css:Xw,children:"Your points"}),s("div",{css:qw,children:n})]})]})]}),d?s("div",{css:wx,role:"alert",children:d}):null,a("div",{css:uh(e),children:[a("div",{css:dh,children:[s(Bw,{"aria-hidden":!0}),"Available rewards"]}),s("div",{css:ex,children:Vw.map(w=>{const E=!!l[w.id],$=n<w.cost||E;return a("article",{css:tx(e),children:[s("div",{css:nx,children:s("img",{src:w.image,alt:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",onError:S=>{S.target.style.display="none"}})}),a("div",{css:rx,children:[s("h2",{css:ix,children:w.title}),s("p",{css:sx,children:w.description}),a("div",{css:ox,children:[a("span",{css:lx,children:[s(fh,{}),w.cost]}),s("span",{css:ax(e),children:w.category})]}),s("button",{type:"button",css:cx,disabled:$,onClick:()=>v(w),children:E?"...":"Redeem"})]})]},w.id)})})]}),a("div",{css:uh(e),children:[a("div",{css:yx,children:[s("div",{css:dh,children:"My rewards"}),s("button",{type:"button",css:vx(e),onClick:y,disabled:i.length===0,children:"Clear history"})]}),s("p",{css:c`
            font-size: 0.78rem;
            color: #9ca3af;
            margin: -0.5rem 0 0.85rem;
          `,children:"Demo: each redemption shows a random promo-style code for display only."}),i.length===0?s("div",{css:ux(e),children:"Your redeemed rewards will appear here."}):s("ul",{css:dx,children:i.map((w,E)=>a("li",{css:fx(e),children:[a("div",{css:px,children:[s("div",{css:hx,children:w.title}),w.promoCode?a("div",{css:mx(e),children:["Promo: ",w.promoCode]}):null]}),a("span",{css:gx,children:["-",w.cost," pts"]})]},`${w.rewardId}-${E}`))})]}),s("p",{css:c`
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        `,children:"Reward images are from Unsplash (third-party photos)."})]})}const Vg=e=>c`
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
`,Yg=c`
  margin: 0 0 0.25rem;
  padding: 0 0.1rem;
`,Qg=e=>c`
  font-size: clamp(1.5rem, 3.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.45rem;
  color: ${e?"#f9fafb":"#111827"};
`,Kg=e=>c`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${e?"#9ca3af":"#6b7280"};
  max-width: 36rem;
`,Jg=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.25rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08)"};
`,Gg=c`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 1.25rem;
`,Zg=c`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  flex: 1;
`,Xg=c`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  flex: 1;
`,qg=c`
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
`,Mg=c`
  font-size: clamp(1.25rem, 2.8vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
`,Fl=e=>c`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.875rem;
  line-height: 1.45;
`,e1=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.35rem;
`,t1=c`
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
`,n1=e=>c`
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
`,r1=c`
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
`,bx=c`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
`,Sx=c`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`,ur=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 0.95rem 0.85rem;
  color: ${e?"#f3f4f6":"#111827"};
  box-shadow: ${e?"none":"0 1px 2px rgba(15, 23, 42, 0.04)"};
`,dr=c`
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
`,fr=c`
  font-size: 0.68rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  line-height: 1.2;
`,pr=c`
  font-size: 1.45rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
  color: inherit;
  @media (min-width: 480px) {
    font-size: 1.65rem;
  }
`,hr=e=>c`
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.3;
`,of=e=>c`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.4rem 1.5rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 28px rgba(15, 23, 42, 0.06)"};
`,lf=e=>c`
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.85rem;
  padding: 0 0 0.65rem;
  border-bottom: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.28)"};
`,i1=c`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1.25rem;
  }
`,lt=c`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`,s1=c`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,Cx=c`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,at=c`
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
`,At=e=>c`
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
`,It=c`
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
`,Bt=c`
  flex: 1;
  min-width: 0;
  word-break: break-word;
`,en=e=>c`
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
`,Ul=e=>c`
  ${en(e)};
  background: ${e?"#1f2937":"#f3f4f6"};
  color: ${e?"#9ca3af":"#4b5563"};
  cursor: default;
  &:focus {
    border-color: ${e?"#4b5563":"#d1d5db"};
    box-shadow: none;
  }
`,o1=e=>c`
  ${en(e)};
  min-height: 88px;
  line-height: 1.45;
  resize: vertical;
`,l1=e=>c`
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
`,af=e=>c`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(248, 113, 113, 0.12)":"rgba(185, 28, 28, 0.08)"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.25)":"rgba(185, 28, 28, 0.2)"};
  color: ${e?"#fca5a5":"#b91c1c"};
  font-size: 0.8rem;
  line-height: 1.4;
`,$x=e=>c`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(34, 197, 94, 0.14)":"rgba(22, 163, 74, 0.1)"};
  border: 1px solid ${e?"rgba(74, 222, 128, 0.3)":"rgba(22, 163, 74, 0.25)"};
  color: ${e?"#86efac":"#166534"};
  font-size: 0.8rem;
  line-height: 1.4;
`,_x=c`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
`,Ex=c`
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
`,kx="/strack/".replace(/\/$/,""),Lx="Password updated successfully";function a1({darkMode:e,userEmail:t}){const[n,r]=m.useState(""),[i,o]=m.useState(""),[l,u]=m.useState(""),[d,h]=m.useState(!1),[y,v]=m.useState(!1),[w,E]=m.useState(!1),[$,S]=m.useState(""),[T,g]=m.useState(!1),[f,x]=m.useState(!1),_=()=>{r(""),o(""),u("")},L=async N=>{N.preventDefault(),S(""),g(!1);const z=(t||"").trim();if(!z){S("Email is missing. Please sign in again.");return}if(i!==l){S("New password and confirmation do not match.");return}if(i.length<6){S("New password must be at least 6 characters.");return}if(i===n){S("New password must be different from your current password.");return}x(!0);try{const H=await(await fetch(`${kx}/backend/change_password.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:z,current_password:n,new_password:i})})).json().catch(()=>({}));H.success?(g(!0),S(Lx),_()):S(H.message||"Could not update password.")}catch{S("Network error. Check your connection and try again.")}finally{x(!1)}};return a("section",{css:of(e),"aria-labelledby":"password-change-heading",children:[s("h2",{id:"password-change-heading",css:lf(e),children:"Change password"}),s("p",{css:c`
          margin: -0.35rem 0 0.75rem;
          font-size: 0.85rem;
          line-height: 1.45;
          color: ${e?"#9ca3af":"#6b7280"};
        `,children:"Use a strong password you do not use elsewhere."}),a("form",{css:_x,onSubmit:L,noValidate:!0,children:[a("div",{css:lt,children:[s("label",{css:at,htmlFor:"pwd-current",children:"Current password"}),a("div",{css:oc,children:[s("input",{id:"pwd-current",type:d?"text":"password",autoComplete:"current-password",css:c`
                ${en(e)};
                padding-right: 2.75rem;
              `,value:n,onChange:N=>r(N.target.value)}),s("button",{type:"button",css:lc(e),onClick:()=>h(N=>!N),"aria-label":d?"Hide current password":"Show current password","aria-pressed":d,children:d?s(sc,{"aria-hidden":!0}):s(ic,{"aria-hidden":!0})})]})]}),a("div",{css:lt,children:[s("label",{css:at,htmlFor:"pwd-new",children:"New password"}),a("div",{css:oc,children:[s("input",{id:"pwd-new",type:y?"text":"password",autoComplete:"new-password",css:c`
                ${en(e)};
                padding-right: 2.75rem;
              `,value:i,onChange:N=>o(N.target.value)}),s("button",{type:"button",css:lc(e),onClick:()=>v(N=>!N),"aria-label":y?"Hide new password":"Show new password","aria-pressed":y,children:y?s(sc,{"aria-hidden":!0}):s(ic,{"aria-hidden":!0})})]})]}),a("div",{css:lt,children:[s("label",{css:at,htmlFor:"pwd-confirm",children:"Confirm new password"}),a("div",{css:oc,children:[s("input",{id:"pwd-confirm",type:w?"text":"password",autoComplete:"new-password",css:c`
                ${en(e)};
                padding-right: 2.75rem;
              `,value:l,onChange:N=>u(N.target.value)}),s("button",{type:"button",css:lc(e),onClick:()=>E(N=>!N),"aria-label":w?"Hide password confirmation":"Show password confirmation","aria-pressed":w,children:w?s(sc,{"aria-hidden":!0}):s(ic,{"aria-hidden":!0})})]})]}),s("div",{css:Ex,children:s("button",{type:"submit",disabled:f,css:c`
              ${Ys(!0)};
              &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
              }
            `,children:f?"Updating…":"Update password"})}),$?s("div",{css:T?$x(e):af(e),role:"status",children:$}):null]})]})}const ac="/strack",Qs="#6366f1";function _n(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function cc(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function qi(e){if(!e)return"";const[t,n]=e.split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n).padStart(2,"0")} ${i}`}function Nx(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),o=r.getDay(),l=[];for(let u=0;u<o;u++)l.push({type:"pad"});for(let u=1;u<=i.getDate();u++)l.push({type:"day",date:new Date(t,n,u)});for(;l.length%7!==0;)l.push({type:"pad"});return l}const Px=c`
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
`,zx=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`,Dx=e=>c`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#f9fafb":"#111827"};
`,ph=e=>c`
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
`,Tx=c`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`,Ox=e=>c`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  margin-bottom: 0.1rem;
`,hh=(e,t,n,r)=>c`
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
`,jx=c`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`,Rx=e=>c`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${e?"#fff":"#111827"};
  opacity: 0.9;
`,Ax=e=>c`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,mh=(e,t)=>c`
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
`,Ix=c`
  display: grid;
  gap: 1rem;
`,gh=e=>c`
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
`,Bx=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
  background: ${e?"#1f1f1f":"#fff"};
`,Fx=e=>c`
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
`,Ux=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Hx=e=>c`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${e?"#1a1a1a":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  box-shadow: 0 24px 30px -12px rgba(0, 0, 0, 0.25);
`,Wx=e=>c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,Vx=e=>c`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Yx=e=>c`
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
`,Qx=c`
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
`;function Kx({darkMode:e,userEmail:t,studentId:n}){const[r,i]=m.useState(new Date),[o,l]=m.useState([]),[u,d]=m.useState(!0),[h,y]=m.useState(_n(new Date)),[v,w]=m.useState([]),[E,$]=m.useState(""),[S,T]=m.useState(!1),[g,f]=m.useState(null),x=m.useMemo(()=>{const R=new Date;return R.setHours(0,0,0,0),R},[]),_=m.useMemo(()=>{const R=r.getFullYear(),Y=r.getMonth();return{from:_n(new Date(R,Y,1)),to:_n(new Date(R,Y+1,0))}},[r]);m.useEffect(()=>{let R=!0;async function Y(){d(!0);try{const D=await(await fetch(`${ac}/backend/timetable.php?from=${encodeURIComponent(_.from)}&to=${encodeURIComponent(_.to)}`)).json();if(!R)return;l(D.success?D.entries||[]:[])}catch{if(!R)return;l([])}finally{R&&d(!1)}}return Y(),()=>{R=!1}},[_.from,_.to]),m.useEffect(()=>{let R=!0;async function Y(){T(!1);try{const[b,D]=await Promise.all([fetch(`${ac}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ac}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),C=await b.json(),O=await D.json();if(!R)return;const W=C.success?C.students||[]:[],G=O.success?O.courses||[]:[],le=String(t||"").trim().toLowerCase(),ue=String(n||"").trim().toUpperCase(),oe=W.find(J=>String(J.email||"").trim().toLowerCase()===le)||W.find(J=>String(J.student_id||"").trim().toUpperCase()===ue)||null;if(!oe){w([]),$(""),T(!0);return}$(String(oe.degree||"").trim());const be=G.filter(J=>Array.isArray(J.student_ids)&&J.student_ids.map(Ie=>Number(Ie)).includes(Number(oe.id))).map(J=>Number(J.id)).filter(J=>Number.isFinite(J)&&J>0),Dt=be.length===0?G.filter(J=>String(J.department||"").trim()!==""&&String(J.department||"").trim()===String(oe.department||"").trim()).map(J=>Number(J.id)).filter(J=>Number.isFinite(J)&&J>0):[];w(Array.from(new Set(be.length>0?be:Dt)))}catch{if(!R)return;w([]),$("")}finally{R&&T(!0)}}return Y(),()=>{R=!1}},[t,n]);const L=m.useMemo(()=>{if(!S)return[];const R=new Set((v||[]).map(Y=>Number(Y)));return o.filter(Y=>{if(Y.entry_type!=="class")return!0;const b=Number(Y.course_id);return!Number.isFinite(b)||b<=0?!1:R.has(b)})},[o,v,S]),N=m.useMemo(()=>{const R={};for(const Y of L)R[Y.entry_date]||(R[Y.entry_date]=[]),R[Y.entry_date].push(Y);return Object.keys(R).forEach(Y=>R[Y].sort((b,D)=>b.start_time.localeCompare(D.start_time))),R},[L]),z=m.useMemo(()=>Nx(r),[r]),F=N[h]||[],H=N[_n(x)]||[],V=m.useMemo(()=>L.filter(Y=>Y.entry_date>_n(x)||Y.entry_date===_n(x)&&Y.start_time>="00:00:00").sort((Y,b)=>`${Y.entry_date} ${Y.start_time}`.localeCompare(`${b.entry_date} ${b.start_time}`)).slice(0,5),[L,x]),q=r.toLocaleDateString(void 0,{month:"long",year:"numeric"}),I=cc(h).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),A=()=>i(R=>new Date(R.getFullYear(),R.getMonth()-1,1)),j=()=>i(R=>new Date(R.getFullYear(),R.getMonth()+1,1)),K=()=>f(null);return a("div",{css:Px,children:[a("div",{css:uc(e),children:[a("div",{css:zx,children:[s("h2",{css:Dx(e),children:q}),a("div",{style:{display:"inline-flex",gap:"0.35rem"},children:[s("button",{type:"button",css:ph(e),onClick:A,"aria-label":"Previous month",children:s(tf,{})}),s("button",{type:"button",css:ph(e),onClick:j,"aria-label":"Next month",children:s(ef,{})})]})]}),a("div",{css:Tx,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(R=>s("div",{css:Ox(e),children:R},R)),z.map((R,Y)=>{if(R.type==="pad")return s("div",{css:hh(e,!1,!1,!0)},`pad-${Y}`);const b=_n(R.date),D=b===h,C=b===_n(x),O=(N[b]||[]).length>0;return a("div",{role:"button",tabIndex:0,css:hh(e,D,C,!1),onClick:()=>y(b),onKeyDown:W=>W.key==="Enter"&&y(b),children:[s("div",{css:jx,children:R.date.getDate()}),O?s("div",{css:Rx(D)}):s("div",{})]},b)})]}),a("h3",{css:Ax(e),children:["Events on ",I]}),E?a("p",{css:Mi(e),style:{marginTop:0,marginBottom:"0.5rem"},children:["Showing timetable for degree: ",E]}):null,u||!S?s("p",{css:Mi(e),children:"Loading events..."}):F.length===0?s("p",{css:Mi(e),children:"No events for this date."}):F.map(R=>s("div",{css:mh(e,R.entry_type),children:a("button",{type:"button",onClick:()=>f(R),css:c`
                  all: unset;
                  display: block;
                  width: 100%;
                  cursor: pointer;
                `,children:[s("p",{css:dc,children:R.entry_type==="class"?R.course_name||R.course_code:R.event_title}),a("div",{css:fc(e),children:[a("span",{children:[s(tt,{}),qi(R.start_time)]}),(R.room_location||"").trim()?a("span",{children:[s(Wn,{}),R.room_location]}):null]})]})},R.id))]}),a("div",{css:Ix,children:[a("div",{css:uc(e),children:[a("h3",{css:gh(e),children:[s(hn,{}),"Today's Schedule"]}),H.length===0?s("p",{css:Mi(e),children:"No classes or events today."}):H.map(R=>s("div",{css:mh(e,R.entry_type),children:a("button",{type:"button",onClick:()=>f(R),css:c`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `,children:[s("p",{css:dc,children:R.entry_type==="class"?R.course_name||R.course_code:R.event_title}),a("div",{css:fc(e),children:[a("span",{children:[s(tt,{}),qi(R.start_time)]}),(R.room_location||"").trim()?a("span",{children:[s(Wn,{}),R.room_location]}):null]})]})},`today-${R.id}`))]}),a("div",{css:uc(e),children:[a("h3",{css:gh(e),children:[s(tt,{}),"Upcoming"]}),V.length===0?s("p",{css:Mi(e),children:"No upcoming entries."}):V.map(R=>s("div",{css:Bx(e),children:a("button",{type:"button",onClick:()=>f(R),css:c`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `,children:[a("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s("strong",{style:{fontSize:"0.92rem"},children:R.entry_type==="class"?R.course_name||R.course_code:R.event_title}),s("span",{css:Fx(e),children:R.entry_type==="class"?"Lecture":"Event"})]}),a("div",{css:fc(e),style:{marginTop:"0.25rem"},children:[a("span",{children:[s(hn,{}),cc(R.entry_date).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),a("span",{children:[s(tt,{}),qi(R.start_time)]})]})]})},`up-${R.id}`))]})]}),g?s("div",{css:Ux,onClick:K,children:a("div",{css:Hx(e),onClick:R=>R.stopPropagation(),children:[a("div",{css:Wx(e),children:[s("h3",{css:Vx(e),children:"Event Details"}),s("button",{type:"button",css:Yx(e),onClick:K,"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Qx,children:[s("p",{css:dc,style:{marginBottom:"0.45rem"},children:g.entry_type==="class"?g.course_name||g.course_code:g.event_title||"Event"}),a("div",{css:ko(e),children:[s(hn,{}),s("span",{children:cc(g.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})})]}),a("div",{css:ko(e),children:[s(tt,{}),a("span",{children:[qi(g.start_time)," - ",qi(g.end_time)]})]}),a("div",{css:ko(e),children:[s(Wn,{}),s("span",{children:(g.room_location||"").trim()||"Location not specified"})]}),(g.lecturers||[]).length>0?a("div",{css:ko(e),children:[s(Cr,{}),s("span",{children:g.lecturers.map(R=>R.full_name).join(", ")})]}):null,g.entry_type==="event"&&g.event_description?s("p",{css:c`
                    margin: 0.7rem 0 0;
                    font-size: 0.9rem;
                    line-height: 1.45;
                    color: ${e?"#d1d5db":"#374151"};
                  `,children:g.event_description}):null]})]})}):null]})}const pc=[{id:"assignment-master",name:"Assignment Master",icon:"📝",locked:!0,unlockHint:"Submit all assignments on time for the current term."},{id:"perfect-attendance",name:"Perfect Attendance",icon:"⭐",locked:!0,unlockHint:"Maintain 100% attendance across all scheduled classes."},{id:"first-class-scholar",name:"First Class Scholar",icon:"🎓",locked:!0,unlockHint:"Achieve first-class level grades in your modules."},{id:"extra-mile",name:"Extra Mile",icon:"🚀",locked:!0,unlockHint:"Complete optional academic activities and bonus tasks."},{id:"halfway-hero",name:"Halfway Hero",icon:"🏆",locked:!0,unlockHint:"Reach the midpoint milestone of your degree progression."},{id:"rising-star",name:"Rising Star",icon:"📈",locked:!0,unlockHint:"Show consistent improvement in academic performance."},{id:"peer-champion",name:"Peer Champion",icon:"🤝",locked:!0,unlockHint:"Actively help classmates through peer support activities."},{id:"academic-contributor",name:"Academic Contributor",icon:"✭",locked:!0,unlockHint:"Contribute to extracurricular academic events and initiatives."}],Jx=c`
  width: 100%;
`,Gx=c`
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
`,Zx=e=>c`
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Xx=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#262626":"#fff"};
  padding: 1rem;
`,qx=e=>c`
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
`,Mx=c`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.85rem;
`,e4=(e,t)=>c`
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
`,t4=e=>c`
  font-size: 2.85rem;
  line-height: 1;
  margin-bottom: 0.65rem;
  filter: ${e?"grayscale(100%)":"none"};
`,n4=e=>c`
  margin: 0 0 0.45rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#e5e7eb":"#1f2937"};
`,r4=e=>c`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};

  svg {
    width: 15px;
    height: 15px;
  }
`,i4=c`
  all: unset;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,s4=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,o4=e=>c`
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
`,l4=e=>c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,a4=e=>c`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,c4=e=>c`
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
`,u4=e=>c`
  padding: 1rem;
  color: ${e?"#d1d5db":"#374151"};
  line-height: 1.5;
`;function d4({darkMode:e}){const[t,n]=m.useState(null),r=pc.filter(i=>!i.locked).length;return a("div",{css:Jx,children:[s("h1",{css:Gx,children:"Badges"}),s("p",{css:Zx(e),children:"Collect badges by achieving academic milestones"}),a("section",{css:Xx(e),children:[a("h2",{css:qx(e),children:[s(qd,{}),"All Badges (",r,"/",pc.length,")"]}),s("div",{css:Mx,children:pc.map(i=>s("article",{css:e4(e,i.locked),children:a("button",{type:"button",css:i4,onClick:()=>{i.locked&&n(i)},children:[s("div",{css:t4(i.locked),children:i.icon}),s("p",{css:n4(e),children:i.name}),i.locked?a("div",{css:r4(e),children:[s(Aw,{}),"Locked"]}):null]})},i.id))})]}),t?s("div",{css:s4,onClick:()=>n(null),children:a("div",{css:o4(e),onClick:i=>i.stopPropagation(),children:[a("div",{css:l4(e),children:[a("h3",{css:a4(e),children:["How to unlock: ",t.name]}),s("button",{type:"button",css:c4(e),onClick:()=>n(null),"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:u4(e),children:[a("p",{css:c`margin: 0 0 0.6rem 0;`,children:[s("strong",{children:"Requirement:"})," ",t.unlockHint]}),s("p",{css:c`margin: 0; font-size: 0.88rem; opacity: 0.9;`,children:"Keep progressing in the portal. This badge will unlock once the requirement is met."})]})]})}):null]})}const es="/strack/".replace(/\/$/,""),xs="#6366f1";function hc(e){const[t,n,r]=String(e||"").split("-").map(Number);return new Date(t,(n||1)-1,r||1)}function mc(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Lo(e){if(!e)return"";const[t,n]=String(e).split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n||0).padStart(2,"0")} ${i}`}function f4(e){const t=Number(e)||0;return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/1024/1024).toFixed(1)} MB`}const p4=c`width: 100%;`,h4=c`margin: 0; font-size: 1.5rem; font-weight: 700; line-height: 1.2;`,st=e=>c`margin: 0.2rem 0 .9rem; font-size: .95rem; color: ${e?"#9ca3af":"#6b7280"}; line-height: 1.4;`,m4=c`display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .8rem; margin-bottom: .95rem; @media (max-width:1024px){grid-template-columns: repeat(2,minmax(0,1fr));}`,cf=e=>c`background:${e?"#262626":"#fff"}; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:14px;`,No=e=>c`${cf(e)}; padding:.95rem;`,Po=e=>c`font-size:.78rem; letter-spacing:.03em; font-weight:700; color:${e?"#9ca3af":"#6b7280"}; text-transform: uppercase;`,zo=c`margin:.6rem 0 .15rem; font-size:1.85rem; font-weight:800; line-height:1.1;`,Do=e=>c`margin:0; font-size:.95rem; color:${e?"#9ca3af":"#6b7280"};`,g4=e=>c`${cf(e)}; padding:.95rem; margin-bottom:.95rem;`,y4=c`display:flex; align-items:center; gap:.5rem; margin:0 0 .8rem; font-size:1.3rem; font-weight:700;`,v4=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:12px; padding:.9rem; margin-bottom:.8rem;`,w4=c`display:flex; align-items:center; gap:.5rem; flex-wrap:wrap;`,gc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:600;`,x4=c`margin-left:auto; border:1px solid #bbf7d0; color:#059669; background:#ecfdf5; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:700;`,b4=c`margin:.55rem 0 .2rem; font-size:1.8rem; font-weight:800; line-height:1.2;`,S4=e=>c`display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:.8rem; margin:.7rem 0 .6rem; font-size:.95rem; color:${e?"#d1d5db":"#374151"}; @media (max-width:900px){grid-template-columns:1fr;}`,C4=e=>c`height:10px; border-radius:999px; background:${e?"#404040":"#e5e7eb"}; overflow:hidden;`,$4=e=>c`height:100%; width:${Math.max(0,Math.min(100,e))}%; background:${xs};`,_4=c`display:flex; gap:.55rem; margin-top:.75rem; flex-wrap:wrap;`,E4=c`border:none; background:${xs}; color:#fff; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,yc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; background:transparent; color:inherit; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,vc=c`position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem;`,wc=e=>c`${cf(e)}; width:100%; max-width:980px; max-height:90vh; overflow:auto;`,xc=e=>c`display:flex; align-items:start; justify-content:space-between; padding:1rem; border-bottom:1px solid ${e?"#404040":"#e5e7eb"};`,bc=c`margin:0; font-size:1.45rem; font-weight:800;`,Sc=e=>c`margin:.2rem 0 0; color:${e?"#9ca3af":"#6b7280"};`,Cc=e=>c`border:1px solid ${e?"#4b5563":"#d1d5db"}; background:transparent; width:38px; height:38px; border-radius:10px; cursor:pointer;`,$c=c`padding:1rem;`,k4=e=>c`display:flex; align-items:center; justify-content:space-between; gap:.8rem; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.6rem;`,_c=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`;function L4({darkMode:e,userEmail:t,studentId:n}){const[r,i]=m.useState([]),[o,l]=m.useState([]),[u,d]=m.useState([]),[h,y]=m.useState(!0),[v,w]=m.useState(null),[E,$]=m.useState(null),[S,T]=m.useState(null),[g,f]=m.useState([]),[x,_]=m.useState(!1),[L,N]=m.useState(""),z=I=>`${es}/backend/course_resources.php?download=1&id=${I}&student_email=${encodeURIComponent(t||"")}`;m.useEffect(()=>{if(!(v!=null&&v.id)||!t){f([]),N("");return}let I=!0;async function A(){_(!0),N("");try{const K=await(await fetch(`${es}/backend/course_resources.php?course_id=${v.id}&student_email=${encodeURIComponent(t)}`,{cache:"no-store"})).json();if(!I)return;K.success?f(K.resources||[]):N(K.error||"Could not load resources")}catch{I&&N("Network error")}finally{I&&_(!1)}}return A(),()=>{I=!1}},[v==null?void 0:v.id,t]),m.useEffect(()=>{let I=!0;async function A(){y(!0);try{const j=new Date,K=new Date(j);K.setMonth(K.getMonth()-6);const R=new Date(j);R.setMonth(R.getMonth()+6);const[Y,b,D]=await Promise.all([fetch(`${es}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${es}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${es}/backend/timetable.php?from=${encodeURIComponent(mc(K))}&to=${encodeURIComponent(mc(R))}`,{cache:"no-store"})]),C=await Y.json(),O=await b.json(),W=await D.json();if(!I)return;i(C.success?C.courses||[]:[]),l(O.success?O.students||[]:[]),d(W.success?W.entries||[]:[])}catch{if(!I)return;i([]),l([]),d([])}finally{I&&y(!1)}}return A(),()=>{I=!1}},[]);const F=m.useMemo(()=>{const I=String(t||"").trim().toLowerCase(),A=String(n||"").trim().toUpperCase();return o.find(j=>String(j.email||"").trim().toLowerCase()===I)||o.find(j=>String(j.student_id||"").trim().toUpperCase()===A)||null},[o,t,n]),H=m.useMemo(()=>{if(!F)return[];const I=r.filter(A=>Array.isArray(A.student_ids)&&A.student_ids.map(Number).includes(Number(F.id)));return I.length>0?I:r.filter(A=>(A.department||"")===(F.department||""))},[r,F]),V=m.useMemo(()=>{const I=mc(new Date);return H.map(A=>{const j=Number(A.id),K=u.filter(O=>O.entry_type==="class"&&Number(O.course_id)===j).sort((O,W)=>`${O.entry_date} ${O.start_time}`.localeCompare(`${W.entry_date} ${W.start_time}`)),R=u.filter(O=>O.entry_type==="event"&&Number(O.course_id)===j).sort((O,W)=>`${O.entry_date} ${O.start_time}`.localeCompare(`${W.entry_date} ${W.start_time}`)).map(O=>{let W="Not Started";return O.entry_date<I?W="Completed":O.entry_date===I&&(W="In Progress"),{id:O.id,title:O.event_title||"Assignment",description:O.event_description||"No description provided.",due:O.entry_date,dueTime:O.start_time,status:W}}),Y=R.filter(O=>O.status==="Completed").length,b=R.length?Math.round(Y/R.length*100):0,D=K.find(O=>O.entry_date>=I)||null,C=Number(A.enrolled_count)||(Array.isArray(A.students)?A.students.length:0);return{...A,meta:{instructor:A.lecturer_name||"TBA",enrolled:C,description:`You are enrolled in ${A.course_name} (${A.course_code}) in ${A.department||"General"}.`,classes:K,assignments:R,completedAssignments:Y,nextLecture:D?`${hc(D.entry_date).toLocaleDateString(void 0,{weekday:"short"})} ${Lo(D.start_time)}`:"No upcoming session",progress:b}}})},[H,u]),q=m.useMemo(()=>{const I=V.length,A=V.reduce((Y,b)=>Y+(Number(b.credits)||0),0),j=I?Math.round(V.reduce((Y,b)=>Y+b.meta.progress,0)/I):0,K=V.reduce((Y,b)=>Y+b.meta.completedAssignments,0),R=V.reduce((Y,b)=>Y+b.meta.assignments.length,0);return{totalCourses:I,totalCredits:A,avgProgress:j,completed:K,totalAssignments:R}},[V]);return a("div",{css:p4,children:[s("h1",{css:h4,children:"My Courses"}),s("p",{css:st(e),children:"Modules you take, timetable sessions, and assignment due dates"}),a("div",{css:m4,children:[a("div",{css:No(e),children:[s("p",{css:Po(e),children:"Total Courses"}),s("p",{css:zo,children:q.totalCourses}),s("p",{css:Do(e),children:"Active enrollments"})]}),a("div",{css:No(e),children:[s("p",{css:Po(e),children:"Total Credits"}),s("p",{css:zo,children:q.totalCredits}),s("p",{css:Do(e),children:"Credit hours"})]}),a("div",{css:No(e),children:[s("p",{css:Po(e),children:"Timeline"}),a("p",{css:zo,children:[q.avgProgress,"%"]}),s("p",{css:Do(e),children:"Assignments completed"})]}),a("div",{css:No(e),children:[s("p",{css:Po(e),children:"Due dates"}),a("p",{css:zo,children:[q.completed,"/",q.totalAssignments]}),s("p",{css:Do(e),children:"Completed / total"})]})]}),a("section",{css:g4(e),children:[a("h2",{css:y4,children:[s(tn,{style:{color:xs,width:24,height:24}}),"Active Courses"]}),h?s("p",{children:"Loading courses..."}):V.length===0?s("p",{children:"No enrolled courses found."}):V.map(I=>a("article",{css:v4(e),children:[a("div",{css:w4,children:[s("span",{css:gc(e),children:I.course_code}),a("span",{css:gc(e),children:[Number(I.credits)||0," Credits"]}),s("span",{css:x4,children:"Active"})]}),s("h3",{css:b4,children:I.course_name}),s("p",{css:st(e),style:{marginBottom:".4rem"},children:I.department||"General"}),a("div",{css:S4(e),children:[a("span",{children:[s(dn,{})," Students: ",s("strong",{children:I.meta.enrolled})]}),a("span",{children:[s(tt,{})," Next: ",s("strong",{children:I.meta.nextLecture})]}),a("span",{children:[s($r,{})," Assignments: ",a("strong",{children:[I.meta.completedAssignments,"/",I.meta.assignments.length]})," ","done"]})]}),a("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".3rem"},children:[s("span",{css:st(e),style:{margin:0},children:"Assignment timeline"}),a("strong",{children:[I.meta.progress,"%"]})]}),s("div",{css:C4(e),children:s("div",{css:$4(I.meta.progress)})}),a("div",{css:_4,children:[s("button",{type:"button",css:E4,onClick:()=>T(I),children:"View Course"}),s("button",{type:"button",css:yc(e),onClick:()=>w(I),children:"Resources"}),s("button",{type:"button",css:yc(e),onClick:()=>$(I),children:"Assignments"})]})]},I.id))]}),v?s("div",{css:vc,onClick:()=>w(null),children:a("div",{css:wc(e),onClick:I=>I.stopPropagation(),children:[a("div",{css:xc(e),children:[a("div",{children:[s("h3",{css:bc,children:"Course Resources"}),a("p",{css:Sc(e),children:["Materials for ",v.course_name]})]}),s("button",{type:"button",css:Cc(e),onClick:()=>w(null),children:s(Pe,{})})]}),a("div",{css:$c,children:[L?s("p",{style:{color:"#dc2626",margin:"0 0 .75rem",fontSize:".9rem"},children:L}):null,x?s("p",{css:st(e),style:{margin:0},children:"Loading resources…"}):g.length===0?s("p",{css:st(e),style:{margin:0},children:"No files uploaded for this course yet."}):g.map(I=>a("div",{css:k4(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".75rem",minWidth:0},children:[s("span",{style:{width:42,height:42,borderRadius:8,background:"#eef2ff",display:"inline-flex",alignItems:"center",justifyContent:"center",color:xs,flexShrink:0},children:s($r,{})}),a("div",{style:{minWidth:0},children:[s("strong",{style:{wordBreak:"break-word"},children:I.original_filename}),a("p",{css:st(e),style:{margin:".1rem 0 0"},children:[f4(I.file_size),I.created_at?` · ${new Date(I.created_at.replace(" ","T")).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}`:""]})]})]}),a("a",{href:z(I.id),css:yc(e),style:{textDecoration:"none",flexShrink:0},children:[s(Hg,{})," Download"]})]},I.id))]})]})}):null,E?s("div",{css:vc,onClick:()=>$(null),children:a("div",{css:wc(e),onClick:I=>I.stopPropagation(),children:[a("div",{css:xc(e),children:[a("div",{children:[s("h3",{css:bc,children:"Course Assignments"}),a("p",{css:Sc(e),children:["Due dates for ",E.course_name]})]}),s("button",{type:"button",css:Cc(e),onClick:()=>$(null),children:s(Pe,{})})]}),s("div",{css:$c,children:E.meta.assignments.length===0?s("p",{css:st(e),style:{margin:0},children:"No assignment due dates found for this course yet."}):E.meta.assignments.map((I,A)=>a("div",{css:_c(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".6rem",flexWrap:"wrap"},children:[s("h4",{style:{margin:0,fontSize:"1.5rem",fontWeight:800},children:I.title}),s("span",{css:gc(e),style:{color:I.status==="Completed"?"#059669":I.status==="In Progress"?"#ca8a04":"#2563eb",borderColor:I.status==="Completed"?"#86efac":I.status==="In Progress"?"#fde68a":"#bfdbfe",background:I.status==="Completed"?"#ecfdf5":I.status==="In Progress"?"#fffbeb":"#eff6ff"},children:I.status})]}),s("p",{css:st(e),style:{marginTop:".3rem"},children:I.description}),a("p",{css:st(e),style:{marginTop:".15rem"},children:["Due: ",hc(I.due).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),I.dueTime?` · Time: ${Lo(I.dueTime)}`:""]})]},`${I.title}-${A}`))})]})}):null,S?s("div",{css:vc,onClick:()=>T(null),children:a("div",{css:wc(e),onClick:I=>I.stopPropagation(),children:[a("div",{css:xc(e),children:[a("div",{children:[s("h3",{css:bc,children:S.course_name}),a("p",{css:Sc(e),children:[S.course_code," · ",Number(S.credits)||0," Credits · ",S.department||"General"]})]}),s("button",{type:"button",css:Cc(e),onClick:()=>T(null),children:s(Pe,{})})]}),a("div",{css:$c,children:[s("h4",{style:{margin:0,fontSize:"1.8rem"},children:"Overview"}),s("p",{css:st(e),children:S.meta.description}),a("p",{css:st(e),style:{marginTop:".35rem"},children:[s("strong",{children:"Instructor:"})," ",S.meta.instructor]}),s("h4",{style:{margin:"0.75rem 0 .45rem 0",fontSize:"1.8rem"},children:"Scheduled Sessions"}),s("div",{children:S.meta.classes.length===0?s("p",{css:st(e),style:{margin:0},children:"No scheduled classes found in timetable."}):S.meta.classes.map((I,A)=>a("div",{style:{display:"grid",gridTemplateColumns:"28px 1fr",gap:".5rem",padding:".5rem .6rem",borderBottom:`1px solid ${e?"#303030":"#f3f4f6"}`},children:[a("strong",{style:{color:xs},children:[A+1,"."]}),a("span",{children:[hc(I.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})," ·"," ",Lo(I.start_time),"-",Lo(I.end_time),I.room_location?` · ${I.room_location}`:""]})]},`${I.id}-${A}`))}),s("h4",{style:{margin:".8rem 0 .45rem 0",fontSize:"1.8rem"},children:"Course Information"}),a("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".8rem"},children:[a("div",{css:_c(e),children:[s("p",{css:st(e),style:{margin:0},children:"Enrolled students"}),s("strong",{children:S.meta.enrolled})]}),a("div",{css:_c(e),children:[s("p",{css:st(e),style:{margin:0},children:"Next session"}),s("strong",{children:S.meta.nextLecture})]})]})]})]})}):null]})}const N4="/strack/".replace(/\/$/,""),Hl="#6366f1";function P4(e){const t=Number(e)||0;return Math.max(1,1+Math.floor(t/100))}function z4(e){const t=Number(e);return Number.isFinite(t)?String(Math.round(Math.min(100,Math.max(0,t)))):"0"}const D4=c`
  width: 100%;
  max-width: 100%;
`,T4=c`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
`,jr=e=>c`
  margin: 0.35rem 0 0;
  font-size: 0.95rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.45;
`,O4=e=>c`
  height: 1px;
  background: ${e?"#404040":"#e5e7eb"};
  margin: 1rem 0 1.1rem;
  border: none;
`,j4=e=>c`
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
  padding: 0.2rem;
  border-radius: 10px;
  background: ${e?"#1f1f1f":"#f3f4f6"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
`,yh=(e,t)=>c`
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 0.55rem 0.75rem;
  font-size: 0.88rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${t?e?"#4f46e5":Hl:"transparent"};
  color: ${t?"#fff":e?"#d1d5db":"#374151"};
  &:hover {
    color: ${t?"#fff":Hl};
  }
`,R4=e=>c`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 1rem 0.85rem;
  box-shadow: ${e?"none":"0 1px 2px rgba(0,0,0,0.04)"};
`,A4=c`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.85rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: inherit;
`,I4=c`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-bottom: 0.35rem;
`,B4=(e,t,n)=>c`
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
  color: ${t===1?"#c2410c":n?Hl:e?"#d1d5db":"#4b5563"};
  border: 1px solid
    ${t===1?e?"rgba(251, 146, 60, 0.45)":"#fed7aa":n?e?"rgba(99,102,241,0.5)":"#c7d2fe":e?"#4b5563":"#e5e7eb"};
`,F4=(e,t)=>c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 0.95rem;
  border-radius: 12px;
  border: 1px solid ${t?e?"rgba(129, 140, 248, 0.55)":"#c4b5fd":e?"#404040":"#e5e7eb"};
  background: ${t?e?"rgba(99, 102, 241, 0.12)":"#f5f3ff":e?"#1f1f1f":"#fafafa"};
`,U4=c`
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
`,H4=c`
  flex: 1;
  min-width: 0;
`,W4=c`
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
`,V4=e=>c`
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Y4=c`
  text-align: right;
  flex-shrink: 0;
`,Q4=c`
  margin: 0;
  font-weight: 800;
  font-size: 1.05rem;
  line-height: 1.1;
`,K4=e=>c`
  margin: 0.1rem 0 0;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-weight: 500;
`,J4=e=>c`
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
`;function G4({rank:e}){return e===1?s("span",{css:To,title:"1st place","aria-hidden":!0,style:{fontSize:"1.2rem",lineHeight:1},children:"👑"}):e===2?s("span",{css:To,title:"2nd place","aria-hidden":!0,style:{color:"#6b7280"},children:s(qd,{style:{width:24,height:24,strokeWidth:2}})}):e===3?s("span",{css:To,title:"3rd place","aria-hidden":!0,style:{color:"#2563eb"},children:s(Sa,{style:{width:24,height:24,strokeWidth:2}})}):s("span",{css:To,"aria-hidden":!0})}function Z4({darkMode:e,userEmail:t}){const[n,r]=m.useState("public"),[i,o]=m.useState([]),[l,u]=m.useState(!0),[d,h]=m.useState(""),[y,v]=m.useState(""),w=m.useCallback(async()=>{u(!0),h(""),v("");try{const S=new URLSearchParams;S.set("scope",n),t&&S.set("viewer_email",t);const g=await(await fetch(`${N4}/backend/leaderboard.php?${S.toString()}`,{cache:"no-store"})).json();g.success&&Array.isArray(g.entries)?(o(g.entries),typeof g.message=="string"&&g.message&&v(g.message)):(o([]),h(g.error||"Could not load leaderboard"))}catch{o([]),h("Network error")}finally{u(!1)}},[n,t]);m.useEffect(()=>{w()},[w]);const E=m.useMemo(()=>i.some(S=>S.is_me),[i]),$=n==="public"?"University rankings":"Your class cohort";return a("div",{css:D4,children:[s("h1",{css:T4,children:"Anonymous Leaderboard"}),s("p",{css:jr(e),children:"Names are hidden. Compare points with everyone, or with students on the same degree, year, and class of."}),s("hr",{css:O4(e)}),a("div",{css:j4(e),role:"tablist","aria-label":"Leaderboard scope",children:[s("button",{type:"button",role:"tab","aria-selected":n==="public",css:yh(e,n==="public"),onClick:()=>r("public"),children:"Public"}),s("button",{type:"button",role:"tab","aria-selected":n==="my_class",css:yh(e,n==="my_class"),onClick:()=>r("my_class"),children:"My class"})]}),a("section",{css:R4(e),children:[a("h2",{css:A4,children:[s(qd,{style:{width:22,height:22,color:Hl,flexShrink:0},"aria-hidden":!0}),$]}),l?s("p",{css:jr(e),style:{marginBottom:"1rem"},children:"Loading…"}):d?s("p",{css:jr(e),style:{marginBottom:"1rem",color:"#dc2626"},children:d}):i.length===0?s("p",{css:jr(e),style:{marginBottom:"1rem"},children:y||"No students to show yet."}):s("div",{css:I4,children:i.map((S,T)=>{const g=P4(S.points),f=z4(S.attendance),x=!!S.is_me,_=S.label||`Student #${S.rank}`;return a("div",{css:F4(e,x),children:[s("div",{css:B4(e,S.rank,x),children:S.rank}),s(G4,{rank:S.rank}),a("div",{css:H4,children:[s("p",{css:W4,children:_}),a("p",{css:V4(e),children:["Level ",g," • ",f,"% attendance"]})]}),a("div",{css:U4,children:[x?s("span",{css:J4(e),"aria-label":"Your rank",children:"You"}):null,a("div",{css:Y4,children:[s("p",{css:Q4,children:S.points}),s("p",{css:K4(e),children:"points"})]})]})]},`${n}-${S.rank}-${T}-${S.points}`)})})]}),!l&&!d&&t&&!E&&n==="public"&&i.length>0?s("p",{css:jr(e),style:{marginTop:"0.85rem",fontSize:"0.88rem"},children:"Sign in with a student email that exists in the database to highlight your row."}):null,!l&&!d&&t&&!E&&n==="my_class"&&i.length>0?s("p",{css:jr(e),style:{marginTop:"0.85rem",fontSize:"0.88rem"},children:"We could not match your row. Check your degree, year, and class of on your student record."}):null]})}const X4="(min-width: 768px)",q4="(max-width: 767.98px)";function uf(){const[e,t]=m.useState(!1),n=m.useCallback(()=>t(!1),[]);return m.useEffect(()=>{const r=window.matchMedia(X4),i=()=>{r.matches&&t(!1)};return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),m.useEffect(()=>{const r=window.matchMedia(q4);if(e&&r.matches){const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}}},[e]),{mobileMenuOpen:e,setMobileMenuOpen:t,closeMenu:n}}const Wl="0.35s ease",df=e=>c`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${Wl};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,ff=(e,t)=>c`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition:
    background-color ${Wl},
    box-shadow ${Wl},
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
`,pf=e=>c`
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
`,hf=c`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,mf=e=>c`
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
`,gf=e=>c`
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
`,yf=e=>c`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#111827"};
  min-width: 0;
`,vf=e=>c`
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
`,wf=e=>c`
  flex: 1;
  min-height: 0;
  min-width: 0;
  padding: 0.65rem max(0.75rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(0.75rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  overflow-x: hidden;
  transition: color ${Wl};

  @media (min-width: 768px) {
    padding: max(1rem, env(safe-area-inset-top)) 2rem 2rem 2rem;
  }
`,M4="/strack/".replace(/\/$/,""),nn="0.35s ease",eb=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,tb=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,nb=e=>c`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${nn};
  }
`,rb=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${nn};
`,vh=e=>c`
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
  transition: color ${nn};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,ib=c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,sb=c`
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
`,ob=c`
  flex: 1;
  min-width: 0;
`,lb=e=>c`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${nn};
`,ab=e=>c`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${nn};
`,cb=e=>c`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${nn};
`,ub=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,db=e=>c`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${nn};
`,fb=e=>c`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${nn};
`,pb=c`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,hb=(e,t)=>c`
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
  transition: background ${nn}, color ${nn};

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
`,mb=c`
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
`,gb=(e,t,n)=>c`
  max-width: ${n?"min(100%, 1280px)":t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,yb=c`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,vb=c`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,wb=[{id:"dashboard",label:"Dashboard",icon:Ca},{id:"courses",label:"Courses",icon:tn},{id:"calendar",label:"Calendar",icon:hn},{id:"leaderboard",label:"Leaderboard",icon:nf},{id:"badges",label:"Badges",icon:Bl},{id:"rewards",label:"Rewards",icon:Sa},{id:"profile",label:"Profile",icon:Cr}];function wh(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function xb(e){const t=String(e||"").trim();if(/^STU/i.test(t))return t.toUpperCase();if(/^s\d+$/i.test(t)){const n=Number(t.slice(1));if(Number.isFinite(n))return`STU${String(n).padStart(3,"0")}`}return/^\d+$/.test(t)?`STU${String(Number(t)).padStart(3,"0")}`:"STU001"}function xh(e){return`strack_profile_extra_${(e||"").toLowerCase()}`}function bh(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function bb({darkMode:e,onToggleDarkMode:t}){const n=eo(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:o}=uf(),[l,u]=m.useState("dashboard"),[d,h]=m.useState(0),[y,v]=m.useState(""),[w,E]=m.useState("STU001"),[$,S]=m.useState(!1),[T,g]=m.useState(""),[f,x]=m.useState({phone:"+44 7700 900123",address:"123 University Avenue, Newcastle",bio:"Computer Science student passionate about software development."}),[_,L]=m.useState(f);let N="Student";try{const A=localStorage.getItem("strack_user");if(A){const j=JSON.parse(A);j!=null&&j.name&&(N=j.name)}}catch{}m.useEffect(()=>{try{const A=localStorage.getItem("strack_user");if(A){const j=JSON.parse(A);j!=null&&j.email&&v(j.email),j!=null&&j.id&&E(xb(j.id))}}catch{}},[]),m.useEffect(()=>{if(y)try{const A=localStorage.getItem(xh(y));if(!A)return;const j=JSON.parse(A),K={phone:bh(j==null?void 0:j.phone),address:String((j==null?void 0:j.address)||f.address),bio:String((j==null?void 0:j.bio)||f.bio)};x(K),L(K)}catch{}},[y]);const z=m.useCallback(async()=>{if(y)try{const j=await(await fetch(`${M4}/backend/student_points.php?email=${encodeURIComponent(y)}`,{cache:"no-store"})).json();j.success&&typeof j.points=="number"&&h(j.points)}catch{}},[y]);m.useEffect(()=>{z()},[z]);const F=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},H=()=>{L(f),g(""),S(!0)},V=()=>{L(f),g(""),S(!1)},q=()=>{const A=bh(_.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(A.replace(/\s+/g," "))){g("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const K={phone:A,address:(_.address||"").trim()||f.address,bio:(_.bio||"").trim()||f.bio};x(K),L(K),g(""),S(!1);try{localStorage.setItem(xh(y),JSON.stringify(K))}catch{}},I=A=>{u(A),o()};return a("div",{css:df(e),children:[r?s("button",{type:"button",css:pf(e),onClick:o,"aria-label":"Close menu"}):null,a("aside",{css:ff(e,r),children:[a("header",{css:eb,children:[a("div",{css:tb,children:[s("div",{css:nb(e),children:s(Vs,{})}),s("span",{css:rb(e),children:"Strack"})]}),a("div",{css:c`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s("button",{type:"button",css:vh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s(Ci,{}):s($i,{})}),s("button",{type:"button",css:vf(e),onClick:o,"aria-label":"Close menu",children:s(Pe,{})})]})]}),a("div",{css:ib,children:[s("div",{css:sb,children:wh(N)}),a("div",{css:ob,children:[s("div",{css:lb(e),children:N}),s("div",{css:ab(e),children:"Student"})]})]}),s("div",{css:cb(e),children:a("div",{css:ub,children:[a("span",{css:db(e),children:[s(tt,{})," Points"]}),s("span",{css:fb(e),children:d})]})}),s("nav",{css:pb,children:wb.map(({id:A,label:j,icon:K})=>a("button",{css:hb(e,l===A),onClick:()=>I(A),children:[s(K,{}),j]},A))}),a("button",{css:mb,onClick:F,children:[s(sf,{}),"Logout"]})]}),a("div",{css:hf,children:[a("header",{css:mf(e),children:[s("button",{type:"button",css:gf(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(rf,{})}),s("span",{css:yf(e),children:"Strack"}),s("button",{type:"button",css:vh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(Ci,{}):s($i,{})})]}),s("main",{css:wf(e),children:l==="rewards"?s(xx,{darkMode:e,userEmail:y,points:d,onPointsChange:h}):a("div",{css:gb(e,l==="profile",l==="calendar"||l==="courses"||l==="leaderboard"),children:[l==="dashboard"&&a(mt,{children:[s("h1",{css:yb,children:"Dashboard"}),s("p",{css:vb,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),l==="courses"&&s(L4,{darkMode:e,userEmail:y,studentId:w}),l==="calendar"&&s(Kx,{darkMode:e,userEmail:y,studentId:w}),l==="leaderboard"&&s(Z4,{darkMode:e,userEmail:y}),l==="badges"&&s(d4,{darkMode:e}),l==="profile"&&a("div",{css:Vg(e),children:[a("header",{css:Yg,children:[s("h1",{css:Qg(e),children:"My Profile"}),s("p",{css:Kg(e),children:"Manage your personal information and account details."})]}),s("section",{css:Jg(e),children:a("div",{css:Gg,children:[a("div",{css:Zg,children:[s("div",{css:qg,children:wh(N)}),a("div",{css:Xg,children:[s("h2",{css:Mg,children:N}),a("div",{css:Fl(e),children:["Student ID: ",w]}),s("div",{css:Fl(e),children:"Computer Science"}),a("div",{css:e1,children:[s("span",{css:t1,children:"Student"}),s("span",{css:n1(e),children:"Undergraduate"})]})]})]}),$?null:a("button",{type:"button",css:r1,onClick:H,children:[s(zn,{"aria-hidden":!0}),"Edit Profile"]})]})}),a("section",{css:bx,"aria-label":"Profile statistics",children:[a("article",{css:ur(e),children:[a("div",{css:dr,children:[s(Sa,{"aria-hidden":!0}),s("span",{css:fr,children:"Points"})]}),s("div",{css:pr,children:d}),s("div",{css:hr(e),children:"Total earned"})]}),a("article",{css:ur(e),children:[a("div",{css:dr,children:[s(Bl,{"aria-hidden":!0}),s("span",{css:fr,children:"Badges"})]}),s("div",{css:pr,children:"3"}),s("div",{css:hr(e),children:"Achievements"})]}),a("article",{css:ur(e),children:[a("div",{css:dr,children:[s(tn,{"aria-hidden":!0}),s("span",{css:fr,children:"Courses"})]}),s("div",{css:pr,children:"6"}),s("div",{css:hr(e),children:"Enrolled"})]}),a("article",{css:ur(e),children:[a("div",{css:dr,children:[s(nf,{"aria-hidden":!0}),s("span",{css:fr,children:"Rank"})]}),s("div",{css:pr,children:"#3"}),s("div",{css:hr(e),children:"Leaderboard"})]})]}),a("section",{css:of(e),children:[s("h2",{css:lf(e),children:"Personal Information"}),a("div",{css:i1,children:[a("div",{css:lt,children:[s("span",{css:at,children:"Full Name"}),$?s("input",{css:Ul(e),value:N,readOnly:!0,"aria-readonly":"true"}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Cr,{"aria-hidden":!0})}),s("span",{css:Bt,children:N})]})]}),a("div",{css:lt,children:[s("span",{css:at,children:"Email Address"}),$?s("input",{css:Ul(e),value:y||"student@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Md,{"aria-hidden":!0})}),s("span",{css:Bt,children:y||"student@uni.ac.uk"})]})]}),a("div",{css:lt,children:[s("span",{css:at,children:"Phone Number"}),$?s("input",{css:en(e),value:_.phone,onChange:A=>L(j=>({...j,phone:A.target.value})),placeholder:"+44 7700 900123"}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Ug,{"aria-hidden":!0})}),s("span",{css:Bt,children:f.phone})]})]}),a("div",{css:lt,children:[s("span",{css:at,children:"Address"}),$?s("input",{css:en(e),value:_.address,onChange:A=>L(j=>({...j,address:A.target.value}))}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Wn,{"aria-hidden":!0})}),s("span",{css:Bt,children:f.address})]})]}),a("div",{css:[lt,s1],children:[s("span",{css:at,children:"Bio"}),$?s("textarea",{css:o1(e),value:_.bio,onChange:A=>L(j=>({...j,bio:A.target.value}))}):a("div",{css:At(e),children:[s("span",{css:It,children:s($r,{"aria-hidden":!0})}),s("span",{css:Bt,children:f.bio})]})]})]}),$?a("div",{css:l1(e),children:[s("button",{type:"button",css:Ys(!0),onClick:q,children:"Save"}),s("button",{type:"button",css:Ys(!1),onClick:V,children:"Cancel"})]}):null,T?s("div",{css:af(e),children:T}):null]}),s(a1,{darkMode:e,userEmail:y})]})]})})]})]})}const ts="/strack",Vl="#6366f1";function on(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Sh(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function Ec(e){if(!e)return"";const[t,n]=e.split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n).padStart(2,"0")} ${i}`}function Sb(e){const[t,n]=String(e||"00:00").split(":").map(Number),r=new Date;return r.setHours(t||0,n||0,0,0),r.setHours(r.getHours()+1),`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`}function Cb(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),o=r.getDay(),l=[];for(let u=0;u<o;u++)l.push({type:"pad"});for(let u=1;u<=i.getDate();u++)l.push({type:"day",date:new Date(t,n,u)});for(;l.length%7!==0;)l.push({type:"pad"});return l}const $b=c`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`,kc=e=>c`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
`,_b=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`,Eb=e=>c`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#f9fafb":"#111827"};
`,Ch=e=>c`
  width: 32px;
  height: 32px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,$h=c`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: none;
  border-radius: 8px;
  background: ${Vl};
  color: #fff;
  padding: 0.45rem 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
`,kb=c`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`,Lb=e=>c`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
`,_h=(e,t,n,r)=>c`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid ${t?Vl:n?"#c7d2fe":e?"#404040":"#e5e7eb"};
  background: ${t?Vl:r?e?"#1f1f1f":"#fafafa":n?e?"rgba(99,102,241,0.16)":"rgba(99,102,241,0.08)":e?"#262626":"#fff"};
  color: ${t?"#fff":"inherit"};
  padding: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${r?"default":"pointer"};
`,Nb=c`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`,Pb=e=>c`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${e?"#fff":"#111827"};
`,zb=e=>c`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Eh=(e,t)=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-left: 4px solid ${t==="event"?"#ef4444":Vl};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
`,kh=c`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Lc=e=>c`
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
`,Db=c`
  display: grid;
  gap: 1rem;
`,Lh=e=>c`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.7rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Tb=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
`,Ob=e=>c`
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
  color: ${e?"#d1d5db":"#6b7280"};
`,Oo=e=>c`
  margin: 0.25rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
`,jb=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Rb=e=>c`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${e?"#1a1a1a":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
`,Ab=e=>c`
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ib=e=>c`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Bb=e=>c`
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
`,Fb=c`
  padding: 1rem 1.1rem 1.2rem;
`,Rr=e=>c`
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1px solid ${e?"#404040":"#d1d5db"};
  border-radius: 8px;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
`,Ar=c`
  margin-bottom: 0.8rem;
`,Ir=e=>c`
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: ${e?"#d1d5db":"#374151"};
`,Ub=e=>c`
  padding: 0.85rem 1.1rem 1rem;
  border-top: 1px solid ${e?"#404040":"#e5e7eb"};
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
`,Hb=e=>c`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: transparent;
  color: inherit;
  border-radius: 8px;
  padding: 0.45rem 0.8rem;
  cursor: pointer;
`;function Wb({darkMode:e,userEmail:t}){const[n,r]=m.useState(new Date),[i,o]=m.useState([]),[l,u]=m.useState([]),[d,h]=m.useState(!0),[y,v]=m.useState(on(new Date)),[w,E]=m.useState(null),[$,S]=m.useState(!1),[T,g]=m.useState(!1),[f,x]=m.useState({course_id:"",title:"",description:"",due_date:on(new Date),due_time:"23:59",location:"Online"}),_=m.useMemo(()=>{const b=new Date;return b.setHours(0,0,0,0),b},[]),L=m.useMemo(()=>{const b=n.getFullYear(),D=n.getMonth();return{from:on(new Date(b,D,1)),to:on(new Date(b,D+1,0))}},[n]);m.useEffect(()=>{let b=!0;async function D(){try{const[C,O]=await Promise.all([fetch(`${ts}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ts}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),W=await C.json(),G=await O.json();if(!b)return;const ue=(W.success?W.lecturers||[]:[]).find(oe=>String(oe.email||"").trim().toLowerCase()===String(t||"").trim().toLowerCase())||null;E(ue),u(G.success?G.courses||[]:[])}catch{if(!b)return;E(null),u([])}}return D(),()=>{b=!1}},[t]),m.useEffect(()=>{let b=!0;async function D(){h(!0);try{const O=await(await fetch(`${ts}/backend/timetable.php?from=${encodeURIComponent(L.from)}&to=${encodeURIComponent(L.to)}`)).json();if(!b)return;o(O.success?O.entries||[]:[])}catch{if(!b)return;o([])}finally{b&&h(!1)}}return D(),()=>{b=!1}},[L.from,L.to]);const N=m.useMemo(()=>{if(!w)return[];const b=String(w.lecturer_id||"").trim();return l.filter(D=>String(D.lecturer_id||"").trim()===b)},[l,w]),z=m.useMemo(()=>{if(!w)return[];const b=new Set(N.map(D=>Number(D.id)));return i.filter(D=>D.entry_type==="class"?b.has(Number(D.course_id)):Array.isArray(D.lecturers)&&D.lecturers.some(C=>Number(C.id)===Number(w.id)))},[i,w,N]),F=m.useMemo(()=>{const b={};for(const D of z)b[D.entry_date]||(b[D.entry_date]=[]),b[D.entry_date].push(D);return Object.keys(b).forEach(D=>b[D].sort((C,O)=>C.start_time.localeCompare(O.start_time))),b},[z]),H=F[y]||[],V=F[on(_)]||[],q=m.useMemo(()=>z.filter(D=>D.entry_date>on(_)||D.entry_date===on(_)&&D.start_time>="00:00:00").sort((D,C)=>`${D.entry_date} ${D.start_time}`.localeCompare(`${C.entry_date} ${C.start_time}`)).slice(0,5),[z,_]),I=m.useMemo(()=>Cb(n),[n]),A=n.toLocaleDateString(void 0,{month:"long",year:"numeric"}),j=Sh(y).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),K=()=>r(b=>new Date(b.getFullYear(),b.getMonth()-1,1)),R=()=>r(b=>new Date(b.getFullYear(),b.getMonth()+1,1)),Y=async()=>{if(!(!w||!f.course_id||!f.title.trim()||!f.due_date||!f.due_time)){g(!0);try{const b={entry_type:"event",course_id:Number(f.course_id),event_title:`Assignment Due: ${f.title.trim()}`,event_description:f.description.trim(),entry_date:f.due_date,start_time:f.due_time,end_time:Sb(f.due_time),room_location:(f.location||"").trim()||"Online",lecturer_account_ids:[Number(w.id)]},C=await(await fetch(`${ts}/backend/timetable.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)})).json();if(!C.success){window.alert(C.error||"Could not save assignment due date");return}S(!1),x(G=>({...G,title:"",description:"",due_time:"23:59",location:"Online"}));const W=await(await fetch(`${ts}/backend/timetable.php?from=${encodeURIComponent(L.from)}&to=${encodeURIComponent(L.to)}`,{cache:"no-store"})).json();o(W.success?W.entries||[]:[])}catch{window.alert("Network error while saving assignment.")}finally{g(!1)}}};return a("div",{css:$b,children:[a("div",{css:kc(e),children:[a("div",{css:_b,children:[s("h2",{css:Eb(e),children:A}),a("div",{style:{display:"inline-flex",gap:"0.35rem",alignItems:"center"},children:[a("button",{type:"button",css:$h,onClick:()=>S(!0),children:[s(Fg,{})," Assignment Due Date"]}),s("button",{type:"button",css:Ch(e),onClick:K,"aria-label":"Previous month",children:s(tf,{})}),s("button",{type:"button",css:Ch(e),onClick:R,"aria-label":"Next month",children:s(ef,{})})]})]}),a("div",{css:kb,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(b=>s("div",{css:Lb(e),children:b},b)),I.map((b,D)=>{if(b.type==="pad")return s("div",{css:_h(e,!1,!1,!0)},`pad-${D}`);const C=on(b.date),O=C===y,W=C===on(_),G=(F[C]||[]).length>0;return a("div",{role:"button",tabIndex:0,css:_h(e,O,W,!1),onClick:()=>v(C),onKeyDown:le=>le.key==="Enter"&&v(C),children:[s("div",{css:Nb,children:b.date.getDate()}),G?s("div",{css:Pb(O)}):s("div",{})]},C)})]}),a("h3",{css:zb(e),children:["Events on ",j]}),d?s("p",{css:Oo(e),children:"Loading events..."}):H.length===0?s("p",{css:Oo(e),children:"No events for this date."}):H.map(b=>a("div",{css:Eh(e,b.entry_type),children:[s("p",{css:kh,children:b.entry_type==="class"?b.course_name||b.course_code:b.event_title}),a("div",{css:Lc(e),children:[a("span",{children:[s(tt,{}),Ec(b.start_time)]}),(b.room_location||"").trim()?a("span",{children:[s(Wn,{}),b.room_location]}):null]})]},b.id))]}),a("div",{css:Db,children:[a("div",{css:kc(e),children:[a("h3",{css:Lh(e),children:[s(hn,{}),"Today's Schedule"]}),V.length===0?s("p",{css:Oo(e),children:"No classes or deadlines today."}):V.map(b=>a("div",{css:Eh(e,b.entry_type),children:[s("p",{css:kh,children:b.entry_type==="class"?b.course_name||b.course_code:b.event_title}),s("div",{css:Lc(e),children:a("span",{children:[s(tt,{}),Ec(b.start_time)]})})]},`today-${b.id}`))]}),a("div",{css:kc(e),children:[a("h3",{css:Lh(e),children:[s(tt,{}),"Upcoming"]}),q.length===0?s("p",{css:Oo(e),children:"No upcoming entries."}):q.map(b=>a("div",{css:Tb(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s("strong",{style:{fontSize:"0.92rem"},children:b.entry_type==="class"?b.course_name||b.course_code:b.event_title}),s("span",{css:Ob(e),children:b.entry_type==="class"?"Lecture":"Assignment"})]}),a("div",{css:Lc(e),style:{marginTop:"0.25rem"},children:[a("span",{children:[s(hn,{}),Sh(b.entry_date).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),a("span",{children:[s(tt,{}),Ec(b.start_time)]})]})]},`up-${b.id}`))]})]}),$?s("div",{css:jb,onClick:()=>S(!1),children:a("div",{css:Rb(e),onClick:b=>b.stopPropagation(),children:[a("div",{css:Ab(e),children:[s("h3",{css:Ib(e),children:"Add Assignment Due Date"}),s("button",{type:"button",css:Bb(e),onClick:()=>S(!1),"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Fb,children:[a("div",{css:Ar,children:[s("label",{css:Ir(e),children:"Course"}),a("select",{css:Rr(e),value:f.course_id,onChange:b=>x(D=>({...D,course_id:b.target.value})),children:[s("option",{value:"",children:"Select your course"}),N.map(b=>a("option",{value:String(b.id),children:[b.course_code," - ",b.course_name]},b.id))]})]}),a("div",{css:Ar,children:[s("label",{css:Ir(e),children:"Assignment Title"}),s("input",{type:"text",css:Rr(e),placeholder:"e.g. Lab Report 2",value:f.title,onChange:b=>x(D=>({...D,title:b.target.value}))})]}),a("div",{css:Ar,children:[s("label",{css:Ir(e),children:"Description"}),s("textarea",{css:Rr(e),style:{minHeight:"80px",resize:"vertical"},value:f.description,onChange:b=>x(D=>({...D,description:b.target.value}))})]}),a("div",{css:Ar,children:[s("label",{css:Ir(e),children:"Due Date"}),s("input",{type:"date",css:Rr(e),value:f.due_date,onChange:b=>x(D=>({...D,due_date:b.target.value}))})]}),a("div",{css:Ar,children:[s("label",{css:Ir(e),children:"Due Time"}),s("input",{type:"time",css:Rr(e),value:f.due_time,onChange:b=>x(D=>({...D,due_time:b.target.value}))})]}),a("div",{css:Ar,children:[s("label",{css:Ir(e),children:"Location"}),s("input",{type:"text",css:Rr(e),value:f.location,onChange:b=>x(D=>({...D,location:b.target.value}))})]})]}),a("div",{css:Ub(e),children:[s("button",{type:"button",css:Hb(e),onClick:()=>S(!1),children:"Cancel"}),a("button",{type:"button",css:$h,onClick:Y,disabled:T,children:[s($r,{}),T?"Saving...":"Save Due Date"]})]})]})}):null]})}const En="/strack/".replace(/\/$/,""),Gt="#6366f1";function Nc(e){const[t,n,r]=String(e||"").split("-").map(Number);return new Date(t,(n||1)-1,r||1)}function Pc(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function jo(e){if(!e)return"";const[t,n]=String(e).split(":").map(Number),r=(t+11)%12+1,i=t>=12?"PM":"AM";return`${r}:${String(n||0).padStart(2,"0")} ${i}`}function Vb(e){const t=Number(e)||0;return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/1024/1024).toFixed(1)} MB`}const Yb=c`width: 100%;`,Qb=c`margin: 0; font-size: 1.5rem; font-weight: 700; line-height: 1.2;`,Be=e=>c`margin: 0.2rem 0 .9rem; font-size: .95rem; color: ${e?"#9ca3af":"#6b7280"}; line-height: 1.4;`,Kb=c`display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .8rem; margin-bottom: .95rem; @media (max-width:1024px){grid-template-columns: repeat(2,minmax(0,1fr));}`,$a=e=>c`background:${e?"#262626":"#fff"}; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:14px;`,Ro=e=>c`${$a(e)}; padding:.95rem;`,Ao=e=>c`font-size:.78rem; letter-spacing:.03em; font-weight:700; color:${e?"#9ca3af":"#6b7280"}; text-transform: uppercase;`,Io=c`margin:.6rem 0 .15rem; font-size:1.85rem; font-weight:800; line-height:1.1;`,Bo=e=>c`margin:0; font-size:.95rem; color:${e?"#9ca3af":"#6b7280"};`,Jb=e=>c`${$a(e)}; padding:.95rem; margin-bottom:.95rem;`,Gb=c`display:flex; align-items:center; gap:.5rem; margin:0 0 .8rem; font-size:1.3rem; font-weight:700;`,Zb=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:12px; padding:.9rem; margin-bottom:.8rem;`,Xb=c`display:flex; align-items:center; gap:.5rem; flex-wrap:wrap;`,zc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:600;`,qb=c`margin-left:auto; border:1px solid #bbf7d0; color:#059669; background:#ecfdf5; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:700;`,Mb=c`margin:.55rem 0 .2rem; font-size:1.8rem; font-weight:800; line-height:1.2;`,eS=e=>c`display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:.8rem; margin:.7rem 0 .6rem; font-size:.95rem; color:${e?"#d1d5db":"#374151"}; @media (max-width:900px){grid-template-columns:1fr;}`,tS=e=>c`height:10px; border-radius:999px; background:${e?"#404040":"#e5e7eb"}; overflow:hidden;`,nS=e=>c`height:100%; width:${Math.max(0,Math.min(100,e))}%; background:${Gt};`,rS=c`display:flex; gap:.55rem; margin-top:.75rem; flex-wrap:wrap;`,Nh=c`border:none; background:${Gt}; color:#fff; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,Dc=e=>c`border:1px solid ${e?"#4b5563":"#e5e7eb"}; background:transparent; color:inherit; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,Fo=c`position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem;`,Tc=e=>c`${$a(e)}; width:100%; max-width:980px; max-height:90vh; overflow:auto;`,Uo=e=>c`display:flex; align-items:start; justify-content:space-between; padding:1rem; border-bottom:1px solid ${e?"#404040":"#e5e7eb"};`,Ho=c`margin:0; font-size:1.45rem; font-weight:800;`,Wo=e=>c`margin:.2rem 0 0; color:${e?"#9ca3af":"#6b7280"};`,Vo=e=>c`border:1px solid ${e?"#4b5563":"#d1d5db"}; background:transparent; width:38px; height:38px; border-radius:10px; cursor:pointer;`,Yo=c`padding:1rem;`,iS=e=>c`display:flex; align-items:center; justify-content:space-between; gap:.8rem; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.6rem;`,sS=e=>c`border:1px solid ${e?"#7f1d1d":"#fecaca"}; color:#dc2626; background:${e?"rgba(127,29,29,0.22)":"#fef2f2"}; border-radius:10px; padding:.4rem .65rem; font-weight:700; font-size:.85rem; cursor:pointer; display:inline-flex; align-items:center; gap:.35rem;`,oS=e=>c`display:flex; flex-wrap:wrap; align-items:center; gap:.55rem; margin-bottom:1rem; padding:.75rem; border-radius:10px; border:1px dashed ${e?"#525252":"#d1d5db"}; background:${e?"#1f1f1f":"#f9fafb"};`,Oc=e=>c`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`,lS=e=>c`
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
    color: ${Gt};
  }
  &:focus-visible {
    outline: 2px solid ${Gt};
    outline-offset: 2px;
  }
`,aS=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
  margin-bottom: 0.55rem;
`,cS=e=>c`
  ${$a(e)};
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  overflow: auto;
`;function uS({darkMode:e,userEmail:t}){const[n,r]=m.useState([]),[i,o]=m.useState(null),[l,u]=m.useState([]),[d,h]=m.useState(!0),[y,v]=m.useState(null),[w,E]=m.useState(null),[$,S]=m.useState(null),[T,g]=m.useState([]),[f,x]=m.useState(!1),[_,L]=m.useState(""),[N,z]=m.useState(!1),F=m.useRef(null),[H,V]=m.useState(null),q=(C,O)=>{O&&S(null),V(C)},I=C=>Array.isArray(C==null?void 0:C.students)?[...C.students].sort((O,W)=>String(O.full_name||"").localeCompare(String(W.full_name||""))):[],A=C=>`${En}/backend/course_resources.php?download=1&id=${C}&lecturer_email=${encodeURIComponent(t||"")}`;m.useEffect(()=>{if(!(y!=null&&y.id)||!t){g([]),L("");return}let C=!0;async function O(){x(!0),L("");try{const G=await(await fetch(`${En}/backend/course_resources.php?course_id=${y.id}&lecturer_email=${encodeURIComponent(t)}`,{cache:"no-store"})).json();if(!C)return;G.success?g(G.resources||[]):L(G.error||"Could not load resources")}catch{C&&L("Network error")}finally{C&&x(!1)}}return O(),()=>{C=!1}},[y==null?void 0:y.id,t]);const j=async C=>{var W;const O=(W=C.target.files)==null?void 0:W[0];if(C.target.value="",!(!O||!(y!=null&&y.id)||!t)){z(!0),L("");try{const G=new FormData;G.append("file",O),G.append("course_id",String(y.id)),G.append("lecturer_email",t);const ue=await(await fetch(`${En}/backend/course_resources.php`,{method:"POST",body:G})).json();if(!ue.success){L(ue.error||"Upload failed");return}const be=await(await fetch(`${En}/backend/course_resources.php?course_id=${y.id}&lecturer_email=${encodeURIComponent(t)}`,{cache:"no-store"})).json();be.success&&g(be.resources||[])}catch{L("Upload failed")}finally{z(!1)}}},K=async C=>{if(!(!t||!window.confirm("Remove this file for all students?"))){L("");try{const W=await(await fetch(`${En}/backend/course_resources.php`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:C,lecturer_email:t})})).json();if(!W.success){L(W.error||"Delete failed");return}g(G=>G.filter(le=>le.id!==C))}catch{L("Delete failed")}}};m.useEffect(()=>{let C=!0;async function O(){h(!0);try{const W=new Date,G=new Date(W);G.setMonth(G.getMonth()-6);const le=new Date(W);le.setMonth(le.getMonth()+6);const[ue,oe,be]=await Promise.all([fetch(`${En}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${En}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${En}/backend/timetable.php?from=${encodeURIComponent(Pc(G))}&to=${encodeURIComponent(Pc(le))}`,{cache:"no-store"})]),Dt=await ue.json(),J=await oe.json(),Ie=await be.json();if(!C)return;const rn=(Dt.success?Dt.lecturers||[]:[]).find(Wt=>String(Wt.email||"").trim().toLowerCase()===String(t||"").trim().toLowerCase())||null;o(rn),r(J.success?J.courses||[]:[]),u(Ie.success?Ie.entries||[]:[])}catch{if(!C)return;o(null),r([]),u([])}finally{C&&h(!1)}}return O(),()=>{C=!1}},[t]);const R=m.useMemo(()=>{if(!i)return[];const C=String(i.lecturer_id||"").trim();return n.filter(O=>String(O.lecturer_id||"").trim()===C)},[n,i]),Y=m.useMemo(()=>{const C=Pc(new Date);return R.map(O=>{const W=Number(O.id),G=l.filter(J=>J.entry_type==="class"&&Number(J.course_id)===W).sort((J,Ie)=>`${J.entry_date} ${J.start_time}`.localeCompare(`${Ie.entry_date} ${Ie.start_time}`)),le=l.filter(J=>J.entry_type==="event"&&Number(J.course_id)===W).sort((J,Ie)=>`${J.entry_date} ${J.start_time}`.localeCompare(`${Ie.entry_date} ${Ie.start_time}`)).map(J=>{let Ie="Upcoming";return J.entry_date<C?Ie="Past due":J.entry_date===C&&(Ie="Due today"),{id:J.id,title:J.event_title||"Assignment",description:J.event_description||"No description provided.",due:J.entry_date,dueTime:J.start_time,status:Ie}}),ue=le.filter(J=>J.status==="Past due").length,oe=le.length?Math.round(ue/le.length*100):0,be=G.find(J=>J.entry_date>=C)||null,Dt=Number(O.enrolled_count)||(Array.isArray(O.students)?O.students.length:0);return{...O,meta:{instructor:O.lecturer_name||"TBA",enrolled:Dt,description:`You teach ${O.course_name} (${O.course_code}) in ${O.department||"General"}.`,classes:G,assignments:le,completedAssignments:ue,nextLecture:be?`${Nc(be.entry_date).toLocaleDateString(void 0,{weekday:"short"})} ${jo(be.start_time)}`:"No upcoming session",progress:oe}}})},[R,l]),b=m.useMemo(()=>{const C=Y.length,O=Y.reduce((ue,oe)=>ue+(Number(oe.credits)||0),0),W=C?Math.round(Y.reduce((ue,oe)=>ue+oe.meta.progress,0)/C):0,G=Y.reduce((ue,oe)=>ue+oe.meta.completedAssignments,0),le=Y.reduce((ue,oe)=>ue+oe.meta.assignments.length,0);return{totalCourses:C,totalCredits:O,avgProgress:W,pastDue:G,totalAssignments:le}},[Y]),D=i?"No courses are assigned to you yet.":"We could not match your account to a lecturer profile. Check that your email matches the staff record.";return a("div",{css:Yb,children:[s("h1",{css:Qb,children:"My Courses"}),s("p",{css:Be(e),children:"Modules you teach, timetable sessions, and assignment due dates"}),a("div",{css:Kb,children:[a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Total Courses"}),s("p",{css:Io,children:b.totalCourses}),s("p",{css:Bo(e),children:"Your modules"})]}),a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Total Credits"}),s("p",{css:Io,children:b.totalCredits}),s("p",{css:Bo(e),children:"Teaching load"})]}),a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Timeline"}),a("p",{css:Io,children:[b.avgProgress,"%"]}),s("p",{css:Bo(e),children:"Past due dates"})]}),a("div",{css:Ro(e),children:[s("p",{css:Ao(e),children:"Due dates"}),a("p",{css:Io,children:[b.pastDue,"/",b.totalAssignments]}),s("p",{css:Bo(e),children:"Past / total"})]})]}),a("section",{css:Jb(e),children:[a("h2",{css:Gb,children:[s(tn,{style:{color:Gt,width:24,height:24}}),"Active Courses"]}),d?s("p",{children:"Loading courses..."}):Y.length===0?s("p",{children:D}):Y.map(C=>a("article",{css:Zb(e),children:[a("div",{css:Xb,children:[s("span",{css:zc(e),children:C.course_code}),a("span",{css:zc(e),children:[Number(C.credits)||0," Credits"]}),s("span",{css:qb,children:"Active"})]}),s("h3",{css:Mb,children:C.course_name}),s("p",{css:Be(e),style:{marginBottom:".4rem"},children:C.department||"General"}),a("div",{css:eS(e),children:[a("button",{type:"button",css:lS(),onClick:()=>q(C,!1),title:"View enrolled students",children:[s(dn,{"aria-hidden":!0})," Students: ",s("strong",{children:C.meta.enrolled})]}),a("span",{children:[s(tt,{})," Next: ",s("strong",{children:C.meta.nextLecture})]}),a("span",{children:[s($r,{})," Due dates: ",a("strong",{children:[C.meta.completedAssignments,"/",C.meta.assignments.length]})," ","past"]})]}),a("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".3rem"},children:[s("span",{css:Be(e),style:{margin:0},children:"Assignment timeline"}),a("strong",{children:[C.meta.progress,"%"]})]}),s("div",{css:tS(e),children:s("div",{css:nS(C.meta.progress)})}),a("div",{css:rS,children:[s("button",{type:"button",css:Nh,onClick:()=>S(C),children:"View Course"}),s("button",{type:"button",css:Dc(e),onClick:()=>v(C),children:"Resources"}),s("button",{type:"button",css:Dc(e),onClick:()=>E(C),children:"Assignments"})]})]},C.id))]}),y?s("div",{css:Fo,onClick:()=>v(null),children:a("div",{css:Tc(e),onClick:C=>C.stopPropagation(),children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{css:Ho,children:"Course Resources"}),a("p",{css:Wo(e),children:["Materials for ",y.course_name]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>v(null),children:s(Pe,{})})]}),a("div",{css:Yo,children:[s("input",{ref:F,type:"file",accept:".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.zip,.png,.jpg,.jpeg,.gif,.webp",css:c`display:none;`,onChange:j}),a("div",{css:oS(e),children:[a("button",{type:"button",css:Nh,disabled:N,onClick:()=>{var C;return(C=F.current)==null?void 0:C.click()},children:[s(Hw,{style:{display:"inline",verticalAlign:"middle"}})," ",N?"Uploading…":"Upload file"]}),s("span",{css:Be(e),style:{margin:0},children:"PDF, Office, images, zip — max 20 MB"})]}),_?s("p",{style:{color:"#dc2626",margin:"0 0 .75rem",fontSize:".9rem"},children:_}):null,f?s("p",{css:Be(e),style:{margin:0},children:"Loading resources…"}):T.length===0?s("p",{css:Be(e),style:{margin:0},children:"No files yet. Upload materials for students to download."}):T.map(C=>a("div",{css:iS(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".75rem",minWidth:0},children:[s("span",{style:{width:42,height:42,borderRadius:8,background:"#eef2ff",display:"inline-flex",alignItems:"center",justifyContent:"center",color:Gt,flexShrink:0},children:s($r,{})}),a("div",{style:{minWidth:0},children:[s("strong",{style:{wordBreak:"break-word"},children:C.original_filename}),a("p",{css:Be(e),style:{margin:".1rem 0 0"},children:[Vb(C.file_size),C.created_at?` · ${new Date(C.created_at.replace(" ","T")).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}`:""]})]})]}),a("div",{style:{display:"flex",flexWrap:"wrap",gap:".45rem",flexShrink:0},children:[a("a",{href:A(C.id),css:Dc(e),style:{textDecoration:"none"},children:[s(Hg,{})," Download"]}),a("button",{type:"button",css:sS(e),onClick:()=>K(C.id),children:[s(or,{})," Remove"]})]})]},C.id))]})]})}):null,w?s("div",{css:Fo,onClick:()=>E(null),children:a("div",{css:Tc(e),onClick:C=>C.stopPropagation(),children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{css:Ho,children:"Course Assignments"}),a("p",{css:Wo(e),children:["Due dates for ",w.course_name]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>E(null),children:s(Pe,{})})]}),s("div",{css:Yo,children:w.meta.assignments.length===0?s("p",{css:Be(e),style:{margin:0},children:"No assignment due dates found for this course yet. Add them from the Calendar tab."}):w.meta.assignments.map((C,O)=>a("div",{css:Oc(e),children:[a("div",{style:{display:"flex",alignItems:"center",gap:".6rem",flexWrap:"wrap"},children:[s("h4",{style:{margin:0,fontSize:"1.5rem",fontWeight:800},children:C.title}),s("span",{css:zc(e),style:{color:C.status==="Past due"?"#059669":C.status==="Due today"?"#ca8a04":"#2563eb",borderColor:C.status==="Past due"?"#86efac":C.status==="Due today"?"#fde68a":"#bfdbfe",background:C.status==="Past due"?"#ecfdf5":C.status==="Due today"?"#fffbeb":"#eff6ff"},children:C.status})]}),s("p",{css:Be(e),style:{marginTop:".3rem"},children:C.description}),a("p",{css:Be(e),style:{marginTop:".15rem"},children:["Due: ",Nc(C.due).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),C.dueTime?` · Time: ${jo(C.dueTime)}`:""]})]},`${C.title}-${O}`))})]})}):null,H?s("div",{css:Fo,onClick:()=>V(null),children:a("div",{css:cS(e),onClick:C=>C.stopPropagation(),role:"dialog","aria-labelledby":"enrolled-modal-title",children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{id:"enrolled-modal-title",css:Ho,children:"Enrolled students"}),a("p",{css:Wo(e),children:[H.course_name," (",H.course_code,")"]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>V(null),"aria-label":"Close",children:s(Pe,{})})]}),s("div",{css:Yo,children:I(H).length===0?s("p",{css:Be(e),style:{margin:0},children:"No students are enrolled in this module yet."}):I(H).map(C=>a("div",{css:aS(e),children:[s("strong",{style:{display:"block",marginBottom:"0.25rem"},children:C.full_name||"—"}),a("p",{css:Be(e),style:{margin:0,display:"flex",alignItems:"center",gap:"0.35rem",flexWrap:"wrap"},children:[s(Md,{style:{flexShrink:0,opacity:.85},"aria-hidden":!0}),C.email&&String(C.email).trim()?s("a",{href:`mailto:${String(C.email).trim()}`,css:c`
                            color: ${Gt};
                            text-decoration: none;
                            word-break: break-all;
                            &:hover {
                              text-decoration: underline;
                            }
                          `,children:String(C.email).trim()}):s("span",{children:"—"})]}),C.student_id?a("p",{css:Be(e),style:{margin:"0.35rem 0 0",fontSize:"0.82rem"},children:["ID: ",C.student_id]}):null]},C.id))})]})}):null,$?s("div",{css:Fo,onClick:()=>S(null),children:a("div",{css:Tc(e),onClick:C=>C.stopPropagation(),children:[a("div",{css:Uo(e),children:[a("div",{children:[s("h3",{css:Ho,children:$.course_name}),a("p",{css:Wo(e),children:[$.course_code," · ",Number($.credits)||0," Credits · ",$.department||"General"]})]}),s("button",{type:"button",css:Vo(e),onClick:()=>S(null),children:s(Pe,{})})]}),a("div",{css:Yo,children:[s("h4",{style:{margin:0,fontSize:"1.8rem"},children:"Overview"}),s("p",{css:Be(e),children:$.meta.description}),s("h4",{style:{margin:"0 0 .45rem 0",fontSize:"1.8rem"},children:"Scheduled Sessions"}),s("div",{children:$.meta.classes.length===0?s("p",{css:Be(e),style:{margin:0},children:"No scheduled classes found in timetable."}):$.meta.classes.map((C,O)=>a("div",{style:{display:"grid",gridTemplateColumns:"28px 1fr",gap:".5rem",padding:".5rem .6rem",borderBottom:`1px solid ${e?"#303030":"#f3f4f6"}`},children:[a("strong",{style:{color:Gt},children:[O+1,"."]}),a("span",{children:[Nc(C.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})," ·"," ",jo(C.start_time),"-",jo(C.end_time),C.room_location?` · ${C.room_location}`:""]})]},`${C.id}-${O}`))}),s("h4",{style:{margin:".8rem 0 .45rem 0",fontSize:"1.8rem"},children:"Course Information"}),a("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".8rem"},children:[a("button",{type:"button",css:[Oc(e),c`
                      cursor: pointer;
                      text-align: left;
                      font: inherit;
                      color: inherit;
                      transition: border-color 0.15s, box-shadow 0.15s;
                      &:hover {
                        border-color: ${Gt};
                        box-shadow: 0 0 0 1px ${Gt}33;
                      }
                    `],onClick:()=>q($,!0),children:[s("p",{css:Be(e),style:{margin:0},children:"Enrolled students"}),s("strong",{children:$.meta.enrolled}),s("p",{css:Be(e),style:{margin:"0.35rem 0 0",fontSize:"0.82rem"},children:"Click to view names and emails"})]}),a("div",{css:Oc(e),children:[s("p",{css:Be(e),style:{margin:0},children:"Next session"}),s("strong",{children:$.meta.nextLecture})]})]})]})]})}):null]})}const Ph="/strack/".replace(/\/$/,""),_r="0.35s ease",dS=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,fS=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,pS=e=>c`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${_r};
  }
`,hS=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${_r};
`,zh=e=>c`
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
  transition: color ${_r};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,mS=c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,gS=c`
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
`,yS=c`
  flex: 1;
  min-width: 0;
`,vS=e=>c`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${_r};
`,wS=e=>c`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${_r};
`,xS=c`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,bS=(e,t)=>c`
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
  transition: background ${_r}, color ${_r};

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
`,SS=c`
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
`,CS=(e,t,n)=>c`
  max-width: ${n?"min(100%, 1280px)":t?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,Qo=c`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Ko=c`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,$S=[{id:"dashboard",label:"Dashboard",icon:Ca},{id:"students",label:"Students",icon:dn},{id:"attendance",label:"Attendance",icon:Fw},{id:"performance",label:"Performance",icon:nf},{id:"courses",label:"Courses",icon:tn},{id:"calendar",label:"Calendar",icon:hn},{id:"profile",label:"Profile",icon:Cr}];function Dh(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Th(e){return`strack_lecturer_profile_extra_${(e||"").toLowerCase()}`}function Oh(e){const t=String(e||"").trim().replace(/\s+/g," ");return t||"+44 7700 900123"}function _S({darkMode:e,onToggleDarkMode:t}){const n=eo(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:o}=uf(),[l,u]=m.useState("dashboard"),[d,h]=m.useState(""),[y,v]=m.useState(""),[w,E]=m.useState(""),[$,S]=m.useState(!1),[T,g]=m.useState(""),[f,x]=m.useState({phone:"+44 7700 900123",office:"Building A, Room 305",address:"123 University Avenue, Newcastle upon Tyne",bio:"Computer Science lecturer focused on software engineering and student success."}),[_,L]=m.useState(f);let N="Lecturer";try{const A=localStorage.getItem("strack_user");if(A){const j=JSON.parse(A);j!=null&&j.name&&(N=j.name)}}catch{}m.useEffect(()=>{try{const A=localStorage.getItem("strack_user");if(A){const j=JSON.parse(A);j!=null&&j.email&&h(j.email);const K=typeof(j==null?void 0:j.department)=="string"?j.department.trim():"",R=typeof(j==null?void 0:j.department_code)=="string"?j.department_code.trim():"";K&&v(K),R&&E(R)}}catch{}},[]);const z=m.useCallback(async()=>{if(d)try{const[A,j]=await Promise.all([fetch(`${Ph}/backend/lecturers.php`,{cache:"no-store"}),fetch(`${Ph}/backend/departments.php`,{cache:"no-store"})]),K=await A.json(),R=await j.json(),Y=K.success?K.lecturers||[]:[],b=d.toLowerCase().trim(),D=Y.find(G=>String(G.email||"").toLowerCase().trim()===b),C=(D==null?void 0:D.department)!=null?String(D.department).trim():"";if(!C)return;const W=(R.success?R.departments||[]:[]).find(G=>String(G.name||"").trim()===C||String(G.code||"").trim()===C||String(G.name||"").trim().toLowerCase()===C.toLowerCase()||String(G.code||"").trim().toLowerCase()===C.toLowerCase());W?(v(String(W.name||C).trim()),E(String(W.code||"").trim())):(v(C),E(""))}catch{}},[d]);m.useEffect(()=>{z()},[z]),m.useEffect(()=>{if(d)try{const A=localStorage.getItem(Th(d));if(!A)return;const j=JSON.parse(A),K={phone:Oh(j==null?void 0:j.phone),office:String((j==null?void 0:j.office)||f.office),address:String((j==null?void 0:j.address)||f.address),bio:String((j==null?void 0:j.bio)||f.bio)};x(K),L(K)}catch{}},[d]);const F=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},H=A=>{u(A),o()},V=()=>{L(f),g(""),S(!0)},q=()=>{L(f),g(""),S(!1)},I=()=>{const A=Oh(_.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(A.replace(/\s+/g," "))){g("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const K={phone:A,office:(_.office||"").trim()||f.office,address:(_.address||"").trim()||f.address,bio:(_.bio||"").trim()||f.bio};x(K),L(K),g(""),S(!1);try{localStorage.setItem(Th(d),JSON.stringify(K))}catch{}};return a("div",{css:df(e),children:[r?s("button",{type:"button",css:pf(e),onClick:o,"aria-label":"Close menu"}):null,a("aside",{css:ff(e,r),children:[a("header",{css:dS,children:[a("div",{css:fS,children:[s("div",{css:pS(e),children:s(Vs,{})}),s("span",{css:hS(e),children:"Strack"})]}),a("div",{css:c`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s("button",{type:"button",css:zh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s(Ci,{}):s($i,{})}),s("button",{type:"button",css:vf(e),onClick:o,"aria-label":"Close menu",children:s(Pe,{})})]})]}),a("div",{css:mS,children:[s("div",{css:gS,children:Dh(N)}),a("div",{css:yS,children:[s("div",{css:vS(e),children:N}),s("div",{css:wS(e),children:"Lecturer"})]})]}),s("nav",{css:xS,children:$S.map(({id:A,label:j,icon:K})=>a("button",{type:"button",css:bS(e,l===A),onClick:()=>H(A),children:[s(K,{}),j]},A))}),a("button",{type:"button",css:SS,onClick:F,children:[s(sf,{}),"Logout"]})]}),a("div",{css:hf,children:[a("header",{css:mf(e),children:[s("button",{type:"button",css:gf(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(rf,{})}),s("span",{css:yf(e),children:"Strack"}),s("button",{type:"button",css:zh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(Ci,{}):s($i,{})})]}),s("main",{css:wf(e),children:a("div",{css:CS(e,l==="profile",l==="calendar"||l==="courses"),children:[l==="dashboard"&&a(mt,{children:[s("h1",{css:Qo,children:"Dashboard"}),s("p",{css:Ko,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),l==="students"&&a(mt,{children:[s("h1",{css:Qo,children:"Students"}),s("p",{css:Ko,children:"This is the students page. View your class lists and student details here."})]}),l==="attendance"&&a(mt,{children:[s("h1",{css:Qo,children:"Attendance"}),s("p",{css:Ko,children:"This is the attendance page. Mark and view student attendance for your classes here."})]}),l==="performance"&&a(mt,{children:[s("h1",{css:Qo,children:"Performance"}),s("p",{css:Ko,children:"This is the performance page. View and analyse student performance and grades here."})]}),l==="courses"&&s(uS,{darkMode:e,userEmail:d}),l==="calendar"&&s(Wb,{darkMode:e,userEmail:d}),l==="profile"&&a("div",{css:Vg(e),children:[a("header",{css:Yg,children:[s("h1",{css:Qg(e),children:"My Profile"}),s("p",{css:Kg(e),children:"Manage your personal information and teaching profile."})]}),s("section",{css:Jg(e),children:a("div",{css:Gg,children:[a("div",{css:Zg,children:[s("div",{css:qg,children:Dh(N)}),a("div",{css:Xg,children:[s("h2",{css:Mg,children:N}),a("div",{css:Fl(e),children:["Department: ",y||"—"]}),a("div",{css:Fl(e),children:["Department code: ",w||"—"]}),a("div",{css:e1,children:[s("span",{css:t1,children:"Lecturer"}),s("span",{css:n1(e),children:"2 Courses"})]})]})]}),$?null:a("button",{type:"button",css:r1,onClick:V,children:[s(zn,{"aria-hidden":!0}),"Edit Profile"]})]})}),a("section",{css:Sx,"aria-label":"Teaching statistics",children:[a("article",{css:ur(e),children:[a("div",{css:dr,children:[s(tn,{"aria-hidden":!0}),s("span",{css:fr,children:"Courses"})]}),s("div",{css:pr,children:"2"}),s("div",{css:hr(e),children:"Active courses"})]}),a("article",{css:ur(e),children:[a("div",{css:dr,children:[s(dn,{"aria-hidden":!0}),s("span",{css:fr,children:"Students"})]}),s("div",{css:pr,children:"156"}),s("div",{css:hr(e),children:"Total enrolled"})]}),a("article",{css:ur(e),children:[a("div",{css:dr,children:[s(tt,{"aria-hidden":!0}),s("span",{css:fr,children:"Hours / week"})]}),s("div",{css:pr,children:"18"}),s("div",{css:hr(e),children:"Teaching hours"})]})]}),a("section",{css:of(e),children:[s("h2",{css:lf(e),children:"Personal Information"}),a("div",{css:i1,children:[a("div",{css:lt,children:[s("span",{css:at,children:"Full Name"}),$?s("input",{css:Ul(e),value:N,readOnly:!0,"aria-readonly":"true"}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Cr,{"aria-hidden":!0})}),s("span",{css:Bt,children:N})]})]}),a("div",{css:lt,children:[s("span",{css:at,children:"Email Address"}),$?s("input",{css:Ul(e),value:d||"lecturer@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Md,{"aria-hidden":!0})}),s("span",{css:Bt,children:d||"lecturer@uni.ac.uk"})]})]}),a("div",{css:lt,children:[s("span",{css:at,children:"Phone Number"}),$?s("input",{css:en(e),value:_.phone,onChange:A=>L(j=>({...j,phone:A.target.value})),placeholder:"+44 7700 900123"}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Ug,{"aria-hidden":!0})}),s("span",{css:Bt,children:f.phone})]})]}),a("div",{css:lt,children:[s("span",{css:at,children:"Office Location"}),$?s("input",{css:en(e),value:_.office,onChange:A=>L(j=>({...j,office:A.target.value}))}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Uw,{"aria-hidden":!0})}),s("span",{css:Bt,children:f.office})]})]}),a("div",{css:[lt,Cx],children:[s("span",{css:at,children:"Address"}),$?s("input",{css:en(e),value:_.address,onChange:A=>L(j=>({...j,address:A.target.value}))}):a("div",{css:At(e),children:[s("span",{css:It,children:s(Wn,{"aria-hidden":!0})}),s("span",{css:Bt,children:f.address})]})]}),a("div",{css:[lt,s1],children:[s("span",{css:at,children:"Bio"}),$?s("textarea",{css:o1(e),value:_.bio,onChange:A=>L(j=>({...j,bio:A.target.value}))}):a("div",{css:At(e),children:[s("span",{css:It,children:s($r,{"aria-hidden":!0})}),s("span",{css:Bt,children:f.bio})]})]})]}),$?a("div",{css:l1(e),children:[s("button",{type:"button",css:Ys(!0),onClick:I,children:"Save"}),s("button",{type:"button",css:Ys(!1),onClick:q,children:"Cancel"})]}):null,T?s("div",{css:af(e),children:T}):null]}),s(a1,{darkMode:e,userEmail:d})]})]})})]})]})}const Br="/strack",Yu="0.35s ease",ro="#7c3aed",xf="#6d28d9",jc=[{bar:"#2563eb",bg:"rgba(37, 99, 235, 0.12)"},{bar:"#7c3aed",bg:"rgba(124, 58, 237, 0.12)"},{bar:"#db2777",bg:"rgba(219, 39, 119, 0.12)"},{bar:"#059669",bg:"rgba(5, 150, 105, 0.12)"},{bar:"#ea580c",bg:"rgba(234, 88, 12, 0.12)"}];function _t(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function jh(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function ES(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Qu(e){const t=new Date(e);t.setHours(0,0,0,0);const n=t.getDay(),r=n===0?-6:1-n;return t.setDate(t.getDate()+r),t}function Zn(e){if(!e)return"";const t=e.split(":");return`${t[0]}:${t[1]}`}function Rh(e){const t=e.split(":").map(Number);return t[0]*60+(t[1]||0)}function Rc(e){const t=e.entry_type==="class"&&e.course_code?e.course_code:`${e.entry_type}-${e.id}-${e.event_title||""}`;let n=0;for(let r=0;r<t.length;r++)n=(n+t.charCodeAt(r)*(r+1))%1e5;return Math.abs(n)%5}function Jo(e){return e.entry_type==="event"?e.event_title||"School event":e.course_code||"Class"}function Ac(e,t){if(!e)return[];const n=(e.lecturer_id||"").toString().trim();if(!n)return[];const r=n.toLowerCase();return t.filter(i=>(i.lecturer_id||"").toString().trim().toLowerCase()===r)}function kS(e,t){if(e==="monthly"){const i=t.getFullYear(),o=t.getMonth(),l=new Date(i,o,1),u=new Date(i,o+1,0);return{from:_t(l),to:_t(u)}}const n=Qu(t),r=new Date(n);return r.setDate(r.getDate()+6),{from:_t(n),to:_t(r)}}const Ic=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],LS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],NS=c`
  width: 100%;
`,PS=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,zS=c`
  flex: 1;
  min-width: 0;
`,DS=c`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,TS=e=>c`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};
  margin: 0;
  transition: color ${Yu};
`,OS=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`,jS=e=>c`
  display: inline-flex;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  overflow: hidden;
  background: ${e?"#262626":"#fff"};
`,Bc=(e,t)=>c`
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
    background: ${t?xf:e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"};
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    flex-shrink: 0;
  }
`,RS=c`
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
    background: ${xf};
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }
`,AS=e=>c`
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
  transition: background ${Yu}, border-color ${Yu};
`,Ah=c`
  flex: 1;
  min-width: 160px;
`,$t=e=>c`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
`,Go=e=>c`
  width: 100%;
  padding: 0.55rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${e?"#1a1a1a":"#fff"};
  color: inherit;
  box-sizing: border-box;
`,IS=c`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
`,Ih=e=>c`
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
`,BS=e=>c`
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
`,FS=e=>c`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e?"#e5e7eb":"#111827"};
  min-width: 140px;
  text-align: center;
`,US=e=>c`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.5rem;
  background: ${e?"#1a1a1a":"#f3f4f6"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  padding: 0.75rem;
`,HS=e=>c`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.25rem;
`,Bh=(e,t,n)=>c`
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
`,WS=(e,t)=>c`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${t?e?"#e9d5ff":"#6d28d9":e?"#f3f4f6":"#111827"};
`,VS=e=>c`
  font-size: 0.7rem;
  color: ${"#9ca3af"};
  margin-bottom: 0.35rem;
`,YS=c`
  font-size: 0.72rem;
  color: #9ca3af;
  font-style: italic;
  margin-top: 0.25rem;
`,QS=e=>c`
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
`,KS=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  overflow: auto;
  background: ${e?"#1a1a1a":"#fff"};
`,JS=c`
  display: flex;
  min-width: 720px;
`,GS=e=>c`
  width: 56px;
  flex-shrink: 0;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,ZS=(e,t)=>c`
  flex: 1;
  min-width: 92px;
  text-align: center;
  padding: 0.55rem 0.3rem;
  font-size: 0.78rem;
  font-weight: 700;
  border-left: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  border-bottom: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${t?e?"rgba(124,58,237,0.24)":"rgba(124,58,237,0.10)":e?"#262626":"#f9fafb"};
`,XS=c`
  display: flex;
  min-width: 720px;
`,qS=e=>c`
  width: 56px;
  flex-shrink: 0;
  height: ${c1}px;
  border-right: 1px solid ${e?"#404040":"#e5e7eb"};
  position: relative;
`,MS=e=>c`
  position: absolute;
  left: 0;
  right: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  text-align: right;
  transform: translateY(-0.45rem);
`,e3=(e,t)=>c`
  flex: 1;
  min-width: 92px;
  height: ${c1}px;
  position: relative;
  border-left: 1px solid ${t?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${t?e?"repeating-linear-gradient(to bottom, rgba(124,58,237,0.16) 0, rgba(124,58,237,0.16) 47px, #5b21b6 47px, #5b21b6 48px)":"repeating-linear-gradient(to bottom, rgba(124,58,237,0.06) 0, rgba(124,58,237,0.06) 47px, #ddd6fe 47px, #ddd6fe 48px)":e?"repeating-linear-gradient(to bottom, #1a1a1a 0, #1a1a1a 47px, #333 47px, #333 48px)":"repeating-linear-gradient(to bottom, #fff 0, #fff 47px, #f3f4f6 47px, #f3f4f6 48px)"};
`,t3=(e,t,n,r,i)=>c`
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
`,n3=e=>c`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
`,r3=(e,t)=>c`
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
`,i3=e=>c`
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
`,s3=e=>c`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: ${e?"#7c3aed":"#ede9fe"};
  color: ${e?"#fff":"#5b21b6"};
`,o3=(e,t)=>c`
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
`,l3=c`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  min-width: 0;
`,a3=e=>c`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
  margin-left: 0.35rem;
  vertical-align: middle;
`,c3=e=>c`
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
`,u3=c`
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
`,Fc=(e,t)=>c`
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
`,d3=c`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,f3=e=>c`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
`,p3=e=>c`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
`,h3=e=>c`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${e?"#fff":"#111"};
`,Fh=e=>c`
  margin: 0.35rem 0 0 0;
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,m3=c`
  padding: 1.25rem 1.5rem;
`,g3=e=>c`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid ${e?"#404040":"#f3f4f6"};
`,y3=c`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`,v3=c`
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
    background: ${xf};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,w3=e=>c`
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
`,Yt=c`
  margin-bottom: 1rem;
`,ir=e=>c`
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
`,x3=e=>c`
  ${ir(e)}
  min-height: 88px;
  resize: vertical;
`,b3=c`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`,S3=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem;
  max-height: 160px;
  overflow: auto;
`,C3=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.25rem;
  font-size: 0.88rem;
`,Uh=e=>c`
  padding: 2rem;
  text-align: center;
  color: ${e?"#9ca3af":"#6b7280"};
`,bs=8,bf=18,Yl=48,c1=(bf-bs)*Yl;function $3(e){const t=e.getFullYear(),n=e.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),o=r.getDay(),l=i.getDate(),u=[];for(let d=0;d<o;d++)u.push({type:"pad",date:null});for(let d=1;d<=l;d++)u.push({type:"day",date:new Date(t,n,d)});for(;u.length%7!==0;)u.push({type:"pad",date:null});return u}function _3(e){const t=Rh(e.start_time),n=Rh(e.end_time),r=bs*60,i=bf*60;if(n<=r||t>=i)return null;const o=Math.max(t,r),l=Math.min(n,i),u=(o-r)/60*Yl,d=Math.max((l-o)/60*Yl,28);return{top:u,height:d}}function E3({darkMode:e}){const[t,n]=m.useState("monthly"),[r,i]=m.useState(()=>new Date),[o,l]=m.useState(""),[u,d]=m.useState(""),[h,y]=m.useState([]),[v,w]=m.useState(!0),[E,$]=m.useState([]),[S,T]=m.useState([]),[g,f]=m.useState([]),[x,_]=m.useState(!1),[L,N]=m.useState(null),[z,F]=m.useState(!1),[H,V]=m.useState({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:"",start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),q=r.getTime(),{from:I,to:A}=m.useMemo(()=>kS(t,r),[t,q]),j=m.useCallback(async()=>{try{const[k,U,Z]=await Promise.all([fetch(`${Br}/backend/courses.php`),fetch(`${Br}/backend/lecturers.php`),fetch(`${Br}/backend/departments.php`)]),de=await k.json(),we=await U.json(),ne=await Z.json();de.success&&$(de.courses||[]),we.success&&T(we.lecturers||[]),ne.success&&f(ne.departments||[])}catch{$([]),T([]),f([])}},[]),K=m.useCallback(async()=>{w(!0);try{const U=await(await fetch(`${Br}/backend/timetable.php?from=${encodeURIComponent(I)}&to=${encodeURIComponent(A)}`,{cache:"no-store"})).json();U.success?y(U.entries||[]):y([])}catch{y([])}finally{w(!1)}},[I,A]);m.useEffect(()=>{j()},[j]),m.useEffect(()=>{K()},[K]);const R=m.useMemo(()=>h.filter(k=>{if(o&&!(k.department&&k.department===o||k.lecturers&&k.lecturers.some(Z=>Z.department===o)))return!1;if(u){const U=parseInt(u,10);if(!(k.lecturers&&k.lecturers.some(de=>de.id===U)))return!1}return!0}),[h,o,u]),Y=m.useMemo(()=>{const k=new Set(g.map(U=>U.name).filter(Boolean));return E.forEach(U=>{U.department&&k.add(U.department)}),Array.from(k).sort()},[g,E]),b=m.useMemo(()=>H.course_id?E.find(k=>String(k.id)===String(H.course_id)):null,[E,H.course_id]),D=m.useMemo(()=>Ac(b,S),[b,S]),C=m.useMemo(()=>{if(t==="monthly")return r.toLocaleString(void 0,{month:"long",year:"numeric"});const k=Qu(r),U=new Date(k);return U.setDate(U.getDate()+6),`${_t(k).replace(/-/g,"/")} – ${_t(U).replace(/-/g,"/")}`},[t,q]),O=k=>{N(null);const U=_t(k||new Date);V({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:U,start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),_(!0)},W=k=>{N(k.id);const U=k.entry_type==="class"&&k.course_id?E.find(we=>Number(we.id)===Number(k.course_id)):null,Z=new Set(Ac(U,S).map(we=>we.id)),de=k.entry_type==="class"?(k.lecturers||[]).map(we=>we.id).filter(we=>Z.has(we)):[];V({entry_type:k.entry_type,course_id:k.course_id?String(k.course_id):"",event_title:k.event_title||"",event_description:k.event_description||"",entry_date:k.entry_date,start_time:Zn(k.start_time),end_time:Zn(k.end_time),room_location:k.room_location||"",lecturer_ids:de}),_(!0)},G=()=>_(!1),le=k=>{V(U=>{const Z=new Set(U.lecturer_ids);return Z.has(k)?Z.delete(k):Z.add(k),{...U,lecturer_ids:Array.from(Z)}})},ue=async()=>{const k={entry_type:H.entry_type,course_id:H.entry_type==="class"?parseInt(H.course_id,10):0,event_title:H.event_title,event_description:H.event_description,entry_date:H.entry_date,start_time:H.start_time,end_time:H.end_time,room_location:H.room_location,lecturer_account_ids:H.entry_type==="class"?H.lecturer_ids:[]};if(H.entry_type==="class"&&!k.course_id){window.alert("Please select a module.");return}if(H.entry_type==="event"&&!k.event_title.trim()){window.alert("Please enter an event title.");return}F(!0);try{const U=`${Br}/backend/timetable.php`,Z=L?{method:"PUT",body:JSON.stringify({id:L,...k})}:{method:"POST",body:JSON.stringify(k)},we=await(await fetch(U,{...Z,headers:{"Content-Type":"application/json"}})).json();if(!we.success){window.alert(we.error||"Could not save.");return}G(),K()}catch{window.alert("Network error.")}finally{F(!1)}},oe=async k=>{if(window.confirm("Delete this timetable entry?"))try{const Z=await(await fetch(`${Br}/backend/timetable.php?id=${k.id}`,{method:"DELETE"})).json();if(!Z.success){window.alert(Z.error||"Could not delete.");return}K()}catch{window.alert("Network error.")}},be=()=>i(new Date),Dt=()=>{i(t==="monthly"?k=>new Date(k.getFullYear(),k.getMonth()-1,1):k=>{const U=new Date(k);return U.setDate(U.getDate()-7),U})},J=()=>{i(t==="monthly"?k=>new Date(k.getFullYear(),k.getMonth()+1,1):k=>{const U=new Date(k);return U.setDate(U.getDate()+7),U})},Ie=H.entry_date?LS[jh(H.entry_date).getDay()]:"",zi=m.useMemo(()=>{const k=new Date;return k.setHours(0,0,0,0),k},[]),rn=_t(zi),Wt=m.useMemo(()=>$3(r),[q,t]),xn=m.useMemo(()=>{const k={};return R.forEach(U=>{k[U.entry_date]||(k[U.entry_date]=[]),k[U.entry_date].push(U)}),Object.keys(k).forEach(U=>k[U].sort((Z,de)=>Z.start_time.localeCompare(de.start_time))),k},[R]),bn=m.useMemo(()=>Object.keys(xn).sort().map(U=>({date:U,items:xn[U]})),[xn]),Sn=Qu(r),Di=Array.from({length:7},(k,U)=>{const Z=new Date(Sn);return Z.setDate(Z.getDate()+U),Z}),io=Array.from({length:bf-bs},(k,U)=>bs+U);return a("div",{css:NS,children:[a("div",{css:PS,children:[a("div",{css:zS,children:[s("h1",{css:DS,children:"Timetable Management"}),s("p",{css:TS(e),children:"Manage class schedules and school events"})]}),a("div",{css:OS,children:[a("div",{css:jS(e),children:[a("button",{type:"button",css:Bc(e,t==="monthly"),onClick:()=>n("monthly"),children:[s(Ca,{"aria-hidden":!0}),"Monthly"]}),a("button",{type:"button",css:Bc(e,t==="weekly"),onClick:()=>n("weekly"),children:[s(Rw,{"aria-hidden":!0}),"Weekly"]}),a("button",{type:"button",css:Bc(e,t==="list"),onClick:()=>n("list"),children:[s(Iw,{"aria-hidden":!0}),"List"]})]}),a("button",{type:"button",css:RS,onClick:()=>O(null),children:[s(Fg,{"aria-hidden":!0}),"Add Entry"]})]})]}),a("div",{css:AS(e),children:[a("div",{css:Ah,children:[s("label",{css:$t(e),children:"Filter by Department"}),a("select",{css:Go(e),value:o,onChange:k=>l(k.target.value),children:[s("option",{value:"",children:"All Departments"}),Y.map(k=>s("option",{value:k,children:k},k))]})]}),a("div",{css:Ah,children:[s("label",{css:$t(e),children:"Filter by Lecturer"}),a("select",{css:Go(e),value:u,onChange:k=>d(k.target.value),children:[s("option",{value:"",children:"All Lecturers"}),S.map(k=>a("option",{value:String(k.id),children:[k.full_name," (",k.lecturer_id,")"]},k.id))]})]}),a("div",{css:IS,children:[s("button",{type:"button",css:Ih(e),onClick:Dt,"aria-label":"Previous",children:s(tf,{})}),s("button",{type:"button",css:BS(e),onClick:be,children:"Today"}),s("button",{type:"button",css:Ih(e),onClick:J,"aria-label":"Next",children:s(ef,{})}),s("span",{css:FS(e),children:C})]})]}),v?s("p",{css:Uh(e),children:"Loading timetable…"}):t==="monthly"?a("div",{css:US(e),children:[Ic.map(k=>s("div",{css:HS(e),children:k},k)),Wt.map((k,U)=>{if(k.type==="pad")return s("div",{css:Bh(e,!0,!1)},`pad-${U}`);const Z=_t(k.date),de=Z===rn,we=xn[Z]||[],ne=we.slice(0,3),sn=we.length-ne.length;return a("div",{role:"button",tabIndex:0,css:Bh(e,!1,de),onClick:()=>O(k.date),onKeyDown:We=>We.key==="Enter"&&O(k.date),children:[a("div",{css:WS(e,de),children:[k.date.getDate()," ",de?"• Today":""]}),s("div",{css:VS(e),children:Ic[k.date.getDay()]}),ne.length===0?s("p",{css:YS,children:"Click to add"}):ne.map(We=>{const Nr=Rc(We),Ti=jc[Nr];return a("div",{css:QS(Ti.bar),onClick:Pr=>{Pr.stopPropagation(),W(We)},onKeyDown:Pr=>Pr.stopPropagation(),role:"presentation",children:[s(tt,{}),Jo(We),s("span",{style:{opacity:.95,fontWeight:600},children:Zn(We.start_time)})]},We.id)}),sn>0&&a("div",{style:{fontSize:"0.65rem",color:"#6b7280",marginTop:2},children:["+",sn," more"]})]},Z)})]}):t==="weekly"?a("div",{css:KS(e),children:[a("div",{css:JS,children:[s("div",{css:GS(e)}),Di.map(k=>a("div",{css:ZS(e,ES(k,zi)),children:[Ic[k.getDay()],s("div",{style:{fontWeight:500,fontSize:"0.75rem",opacity:.85},children:k.getDate()})]},_t(k)))]}),a("div",{css:XS,children:[s("div",{css:qS(e),children:io.map(k=>a("div",{css:MS(e),style:{top:(k-bs)*Yl},children:[String(k).padStart(2,"0"),":00"]},k))}),Di.map(k=>{const U=_t(k);return s("div",{css:e3(e,U===rn),children:(xn[U]||[]).map(Z=>{const de=_3(Z);if(!de)return null;const we=Rc(Z),ne=jc[we],sn=Z.entry_type==="event";return a("div",{role:"button",tabIndex:0,css:t3(e,de.top,de.height,ne.bar,ne.bg),onClick:()=>W(Z),onKeyDown:We=>We.key==="Enter"&&W(Z),children:[sn&&s(Bl,{style:{width:11,height:11,opacity:.9,marginBottom:2,display:"block"}}),s("div",{style:{fontWeight:800},children:Jo(Z)}),a("div",{style:{fontWeight:500,opacity:.95,marginTop:2},children:[Zn(Z.start_time)," – ",Zn(Z.end_time)]}),Z.room_location&&a("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:4,fontWeight:600,opacity:.9},children:[s(Wn,{style:{width:12,height:12}}),Z.room_location]}),(Z.lecturers||[]).length>0&&a("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:2,fontWeight:500,fontSize:"0.68rem",opacity:.95},children:[s(Cr,{style:{width:12,height:12}}),Z.lecturers[0].full_name,(Z.lecturers||[]).length>1?"…":""]})]},Z.id)})},U)})]})]}):s("div",{children:bn.length===0?s("p",{css:Uh(e),children:"No entries in this range. Use Add Entry or pick another week."}):bn.map(({date:k,items:U})=>{const Z=jh(k),de=k===rn,we=Z.toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"});return a("div",{css:n3(e),children:[a("div",{css:r3(e,de),children:[s(hn,{"aria-hidden":!0}),we,de&&s("span",{css:s3(e),children:"Today"}),a("span",{css:i3(e),children:[U.length," ",U.length===1?"entry":"entries"]})]}),U.map(ne=>{const sn=Rc(ne),We=jc[sn];return s("div",{css:o3(e,We.bar),children:a("div",{css:l3,children:[a("div",{style:{minWidth:0,flex:1},children:[a("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.35rem"},children:[ne.entry_type==="event"?s(Bl,{style:{width:18,height:18,color:We.bar}}):s(tn,{style:{width:18,height:18,color:We.bar}}),s("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:ne.entry_type==="class"?`${Jo(ne)} – ${ne.course_name||"Module"}`:Jo(ne)}),s("span",{css:a3(e),children:ne.entry_type==="class"?"Class":"Event"})]}),ne.entry_type==="event"&&ne.event_description&&s("p",{style:{margin:"0.35rem 0 0 0",fontSize:"0.85rem",opacity:.85},children:ne.event_description}),a("div",{css:c3(e),children:[a("span",{children:[s(tt,{}),Zn(ne.start_time)," – ",Zn(ne.end_time)]}),ne.room_location&&a("span",{children:[s(Wn,{}),ne.room_location]}),(ne.lecturers||[]).length>0&&a("span",{children:[s(Cr,{}),(ne.lecturers||[]).map(Nr=>Nr.full_name).join(", ")]})]})]}),a("div",{css:u3,children:[s("button",{type:"button",css:Fc(e,!1),title:"Edit",onClick:()=>W(ne),children:s(zn,{})}),s("button",{type:"button",css:Fc(e,!0),title:"Delete",onClick:()=>oe(ne),children:s(or,{})})]})]})},ne.id)})]},k)})}),x&&s("div",{css:d3,role:"presentation",onClick:G,children:a("div",{css:f3(e),onClick:k=>k.stopPropagation(),children:[s("div",{css:p3(e),children:a("div",{css:y3,children:[a("div",{children:[s("h3",{css:h3(e),children:L?"Edit Timetable Entry":"Add New Timetable Entry"}),s("p",{css:Fh(e),children:"Create or update a class or school event."})]}),s("button",{type:"button",css:Fc(e,!1),onClick:G,"aria-label":"Close",children:s(Pe,{})})]})}),a("div",{css:m3,children:[a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Entry Type"}),a("select",{css:Go(e),value:H.entry_type,onChange:k=>{const U=k.target.value==="event"?"event":"class";V(Z=>({...Z,entry_type:U,lecturer_ids:U==="event"?[]:Z.entry_type==="event"?[]:Z.lecturer_ids}))},children:[s("option",{value:"class",children:"Class"}),s("option",{value:"event",children:"School Event"})]})]}),H.entry_type==="class"?a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Module"}),a("select",{css:Go(e),value:H.course_id,onChange:k=>{const U=k.target.value,Z=E.find(ne=>String(ne.id)===U),de=Ac(Z,S),we=de.length===1?[de[0].id]:[];V(ne=>({...ne,course_id:U,lecturer_ids:we}))},children:[s("option",{value:"",children:"Select module"}),E.map(k=>a("option",{value:String(k.id),children:[k.course_code," — ",k.course_name]},k.id))]})]}):a(mt,{children:[a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Event Title"}),s("input",{type:"text",css:ir(e),placeholder:"e.g. Annual Sports Day",value:H.event_title,onChange:k=>V(U=>({...U,event_title:k.target.value}))})]}),a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Event Description"}),s("textarea",{css:x3(e),placeholder:"Brief description of the event",value:H.event_description,onChange:k=>V(U=>({...U,event_description:k.target.value}))})]})]}),a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Specific Date"}),s("input",{type:"date",css:ir(e),value:H.entry_date,onChange:k=>V(U=>({...U,entry_date:k.target.value}))}),s("p",{css:Fh(e),style:{marginTop:"0.35rem"},children:"Select the specific date for this class or event."})]}),a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Day (auto-filled)"}),s("input",{type:"text",css:ir(e),value:Ie,readOnly:!0,disabled:!0,placeholder:"Will be set based on selected date"})]}),a("div",{css:b3,children:[a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Start Time"}),s("input",{type:"time",css:ir(e),value:H.start_time,onChange:k=>V(U=>({...U,start_time:k.target.value}))})]}),a("div",{css:Yt,children:[s("label",{css:$t(e),children:"End Time"}),s("input",{type:"time",css:ir(e),value:H.end_time,onChange:k=>V(U=>({...U,end_time:k.target.value}))})]})]}),a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Room / Location"}),s("input",{type:"text",css:ir(e),placeholder:"e.g. CS-101, Lab 3",value:H.room_location,onChange:k=>V(U=>({...U,room_location:k.target.value}))})]}),H.entry_type==="class"&&a("div",{css:Yt,children:[s("label",{css:$t(e),children:"Lecturer(s) for this module"}),s("div",{css:S3(e),children:H.course_id?D.length===0?s("span",{style:{fontSize:"0.85rem",opacity:.8},children:"This module has no linked lecturer. Assign one in the Courses section."}):D.map(k=>a("label",{css:C3,children:[s("input",{type:"checkbox",checked:H.lecturer_ids.includes(k.id),onChange:()=>le(k.id)}),k.full_name,k.department?` (${k.department})`:""]},k.id)):s("span",{style:{fontSize:"0.85rem",opacity:.8},children:"Select a module to see assigned lecturer(s)."})})]})]}),a("div",{css:g3(e),children:[s("button",{type:"button",css:w3(e),onClick:G,children:"Cancel"}),s("button",{type:"button",css:v3,onClick:ue,disabled:z,children:z?"Saving…":L?"Save Changes":"Create Entry"})]})]})})]})}const Le="/strack",re="0.35s ease",k3=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,L3=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,N3=e=>c`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${re};
  }
`,P3=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${re};
`,Hh=e=>c`
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
  transition: color ${re};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,z3=c`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,D3=c`
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
`,T3=c`
  flex: 1;
  min-width: 0;
`,O3=e=>c`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${re};
`,j3=e=>c`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${re};
`,R3=c`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,A3=(e,t)=>c`
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
  transition: background ${re}, color ${re};

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
`,I3=c`
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
`,B3=(e,t)=>c`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,Uc=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Hc=c`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Fr=e=>c`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${re};
`,Wc=c`
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
  transition: border-color ${re}, background ${re};

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
`,Vc=c`
  margin-bottom: 1rem;
`,Yc=c`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,Xn=e=>c`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,qn=e=>c`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,Mn=e=>c`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const er=e=>c`
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
`,tr=c`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,F3=(e,t)=>c`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${re}, color ${re};
`,U3=c`
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
`,H3=c`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,W3=c`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Wh=c`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Vh=c`
  flex: 1;
  min-width: 0;
`,Yh=c`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Qh=e=>c`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${re};
`,Kh=c`
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
`,V3=e=>c`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${re}, box-shadow ${re};
`,Y3=e=>c`
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
`,Q3=e=>c`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${re};
`,K3=e=>c`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${re};
`,J3=e=>c`
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
`,G3=c`
  margin-top: 1.5rem;
`,Z3=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,X3=c`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,q3=e=>c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  transition: border-color ${re}, background ${re};

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
  transition: background ${re}, box-shadow ${re};
`,ie=e=>c`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1a1a1a":"#f9fafb"};
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  transition: color ${re}, background ${re}, border-color ${re};
`,X=e=>c`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${re}, border-color ${re};
`,rs=c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,sr=e=>c`
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
  ${sr(e)}
  &:hover {
    color: #dc2626;
  }
`,Ur=c`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Hr=e=>c`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${re};
`,Wr=e=>c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${re};
`,Vr=e=>c`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${re};
`,Yr=e=>c`
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
`,Qr=c`
  padding: 1.5rem;
`,me=c`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,ge=e=>c`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${re};
`,M3=e=>c`
  margin: 0.35rem 0 0;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.35;
`,Se=e=>c`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${re}, background ${re};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${e?"#6b7280":"#9ca3af"};
  }
`,Jh=e=>c`
  ${Se(e)}
  min-height: 80px;
  resize: vertical;
`,Gh=e=>c`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
  max-height: 180px;
  overflow: auto;
  background: ${e?"#262626":"#fff"};
`,Zh=e=>c`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.15rem;
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#1f2937"};
`,Kr=e=>c`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${re};
`,Jr=e=>c`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${re}, background ${re};

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
`,e6=[{id:"dashboard",label:"Dashboard",icon:Ca},{id:"students",label:"Students",icon:dn},{id:"lecturers",label:"Lecturers",icon:Vs},{id:"courses",label:"Courses",icon:tn},{id:"departments",label:"Departments",icon:us},{id:"degrees",label:"Degrees",icon:tn},{id:"calendar",label:"Calendar",icon:hn}];function t6(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function n6({darkMode:e,onToggleDarkMode:t}){const n=eo(),{mobileMenuOpen:r,setMobileMenuOpen:i,closeMenu:o}=uf(),[l,u]=m.useState("dashboard"),[d,h]=m.useState([]),[y,v]=m.useState(!1),[w,E]=m.useState(""),[$,S]=m.useState(!1),[T,g]=m.useState(null),[f,x]=m.useState({code:"",name:"",description:""}),[_,L]=m.useState(!1),N=m.useCallback(async()=>{v(!0);try{const P=await(await fetch(`${Le}/backend/departments.php`)).json();P.success&&h(P.departments||[])}catch{h([])}finally{v(!1)}},[]);m.useEffect(()=>{l==="departments"&&N()},[l,N]);const[z,F]=m.useState([]),[H,V]=m.useState(!1),[q,I]=m.useState(""),[A,j]=m.useState(!1),[K,R]=m.useState(null),[Y,b]=m.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:"",degree:"",class_of:""}),[D,C]=m.useState(!1),[O,W]=m.useState([]),G=m.useCallback(async()=>{V(!0);try{const P=await(await fetch(`${Le}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();P.success&&F(P.students||[])}catch{F([])}finally{V(!1)}},[]),le=m.useCallback(async()=>{try{const P=await(await fetch(`${Le}/backend/departments.php`)).json();P.success&&W(P.departments||[])}catch{W([])}},[]);m.useEffect(()=>{(l==="students"||l==="courses")&&G(),(l==="students"||l==="lecturers"||l==="courses"||l==="degrees")&&le()},[l,G,le]);const[ue,oe]=m.useState([]),[be,Dt]=m.useState(!1),[J,Ie]=m.useState(""),[zi,rn]=m.useState(!1),[Wt,xn]=m.useState(null),[bn,Sn]=m.useState({lecturer_id:"",full_name:"",email:"",department:""}),[Di,io]=m.useState(!1),k=m.useCallback(async()=>{Dt(!0);try{const P=await(await fetch(`${Le}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();P.success&&oe(P.lecturers||[])}catch{oe([])}finally{Dt(!1)}},[]);m.useEffect(()=>{(l==="lecturers"||l==="courses")&&k()},[l,k]);const U=()=>{xn(null),Sn({lecturer_id:"",full_name:"",email:"",department:""}),rn(!0)},Z=p=>{xn(p.id),Sn({lecturer_id:p.lecturer_id||"",full_name:p.full_name||"",email:p.email||"",department:p.department||""}),rn(!0)},de=()=>rn(!1),we=async()=>{const{lecturer_id:p,full_name:P,email:M,department:ke}=bn;if(!(!p.trim()||!P.trim()||!M.trim()||!ke.trim())){io(!0);try{Wt?(await(await fetch(`${Le}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Wt,lecturer_id:p.trim(),full_name:P.trim(),email:M.trim(),department:ke.trim()})})).json()).success&&(de(),k()):(await(await fetch(`${Le}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:p.trim(),full_name:P.trim(),email:M.trim(),department:ke.trim()})})).json()).success&&(de(),k())}finally{io(!1)}}},ne=async p=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${Le}/backend/lecturers.php?id=${p}`,{method:"DELETE"})).json()).success&&k()}catch{}},sn=ue.filter(p=>!J||(p.lecturer_id||"").toLowerCase().includes(J.toLowerCase())||(p.full_name||"").toLowerCase().includes(J.toLowerCase())||(p.email||"").toLowerCase().includes(J.toLowerCase())||(p.department||"").toLowerCase().includes(J.toLowerCase())),[We,Nr]=m.useState([]),[Ti,Pr]=m.useState(!1),[zr,u1]=m.useState(""),[d1,_a]=m.useState(!1),[Oi,Sf]=m.useState(null),[Gn,Cf]=m.useState(null),[Ct,Cn]=m.useState({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,student_ids:[]}),[$f,_f]=m.useState(!1),ji=m.useCallback(async()=>{Pr(!0);try{const P=await(await fetch(`${Le}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})).json();P.success&&Nr(P.courses||[])}catch{Nr([])}finally{Pr(!1)}},[]);m.useEffect(()=>{l==="courses"&&ji()},[l,ji]);const f1=()=>{Sf(null),Cn({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,student_ids:[]}),_a(!0)},p1=p=>{Sf(p.id),Cn({course_code:p.course_code||"",course_name:p.course_name||"",department:p.department||"",lecturer_id:p.lecturer_id||"",credits:Number(p.credits)||0,student_ids:Array.isArray(p.student_ids)?p.student_ids.map(P=>Number(P)):[]}),_a(!0)},Ri=()=>_a(!1),Ea=()=>Cf(null),h1=p=>Cf(p),m1=async()=>{const{course_code:p,course_name:P,department:M,lecturer_id:ke,credits:Ve,student_ids:Oe}=Ct;if(!(!p.trim()||!P.trim())){_f(!0);try{Oi?(await(await fetch(`${Le}/backend/courses.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Oi,course_code:p.trim(),course_name:P.trim(),department:M.trim()||"",lecturer_id:ke.trim()||"",credits:Number(Ve)||0,student_ids:Array.isArray(Oe)?Oe:[]})})).json()).success&&(Ri(),ji()):(await(await fetch(`${Le}/backend/courses.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({course_code:p.trim(),course_name:P.trim(),department:M.trim()||"",lecturer_id:ke.trim()||"",credits:Number(Ve)||0,student_ids:Array.isArray(Oe)?Oe:[]})})).json()).success&&(Ri(),ji())}finally{_f(!1)}}},g1=async p=>{if(confirm("Delete this course?"))try{(await(await fetch(`${Le}/backend/courses.php?id=${p}`,{method:"DELETE"})).json()).success&&ji()}catch{}},Ef=We.filter(p=>!zr||(p.course_code||"").toLowerCase().includes(zr.toLowerCase())||(p.course_name||"").toLowerCase().includes(zr.toLowerCase())||(p.department||"").toLowerCase().includes(zr.toLowerCase())||(p.lecturer_name||"").toLowerCase().includes(zr.toLowerCase())),[ka,kf]=m.useState([]),[y1,Lf]=m.useState(!1),[Dr,v1]=m.useState(""),[w1,La]=m.useState(!1),[so,Nf]=m.useState(null),[Ai,Tr]=m.useState({code:"",name:"",department:"",description:""}),[Pf,zf]=m.useState(!1),Ii=m.useCallback(async()=>{Lf(!0);try{const P=await(await fetch(`${Le}/backend/degrees.php?t=${Date.now()}`,{cache:"no-store"})).json();P.success&&kf(P.degrees||[])}catch{kf([])}finally{Lf(!1)}},[]);m.useEffect(()=>{(l==="degrees"||l==="students")&&Ii()},[l,Ii]);const x1=()=>{Nf(null),Tr({code:"",name:"",department:"",description:""}),La(!0)},b1=p=>{Nf(p.id),Tr({code:p.code||"",name:p.name||"",department:p.department||"",description:p.description||""}),La(!0)},Bi=()=>La(!1),S1=async()=>{const{code:p,name:P,department:M,description:ke}=Ai;if(!(!p.trim()||!P.trim())){zf(!0);try{so?(await(await fetch(`${Le}/backend/degrees.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:so,code:p.trim(),name:P.trim(),department:M.trim(),description:ke.trim()})})).json()).success&&(Bi(),Ii()):(await(await fetch(`${Le}/backend/degrees.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:p.trim(),name:P.trim(),department:M.trim(),description:ke.trim()})})).json()).success&&(Bi(),Ii())}finally{zf(!1)}}},C1=async p=>{if(confirm("Delete this degree?"))try{(await(await fetch(`${Le}/backend/degrees.php?id=${p}`,{method:"DELETE"})).json()).success&&Ii()}catch{}},Df=ka.filter(p=>!Dr||(p.code||"").toLowerCase().includes(Dr.toLowerCase())||(p.name||"").toLowerCase().includes(Dr.toLowerCase())||(p.department||"").toLowerCase().includes(Dr.toLowerCase())||(p.description||"").toLowerCase().includes(Dr.toLowerCase())),$1=()=>{R(null),b({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:"",degree:"",class_of:""}),j(!0)},_1=p=>{R(p.id),b({student_id:p.student_id,full_name:p.full_name,email:p.email,password:"",department:p.department||"",year:p.year||"",degree:p.degree||"",class_of:p.class_of!=null&&p.class_of!==""?String(p.class_of):""}),j(!0)},Fi=()=>j(!1),E1=async()=>{const{student_id:p,full_name:P,email:M,password:ke,department:Ve,year:Oe,degree:oo,class_of:lo}=Y;if(!(!p.trim()||!P.trim()||!M.trim())&&!(!K&&!ke.trim())){C(!0);try{K?(await(await fetch(`${Le}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:K,student_id:p.trim(),full_name:P.trim(),email:M.trim(),password:ke.trim(),department:Ve.trim()||"",year:Oe.trim()||"",degree:oo.trim()||"",class_of:lo.trim()||""})})).json()).success&&(Fi(),G()):(await(await fetch(`${Le}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:p.trim(),full_name:P.trim(),email:M.trim(),password:ke.trim(),department:Ve.trim()||"",year:Oe.trim()||"",degree:oo.trim()||"",class_of:lo.trim()||""})})).json()).success&&(Fi(),G())}finally{C(!1)}}},k1=async p=>{if(confirm("Delete this student?"))try{(await(await fetch(`${Le}/backend/students.php?id=${p}`,{method:"DELETE"})).json()).success&&G()}catch{}},Tf=z.filter(p=>!q||(p.student_id||"").toLowerCase().includes(q.toLowerCase())||(p.full_name||"").toLowerCase().includes(q.toLowerCase())||(p.email||"").toLowerCase().includes(q.toLowerCase())||(p.department||"").toLowerCase().includes(q.toLowerCase())||(p.degree||"").toLowerCase().includes(q.toLowerCase())||String(p.class_of||"").toLowerCase().includes(q.toLowerCase())),L1=["Foundation","Year 1","Year 2","Placement Year","Year 4"],N1=()=>{g(null),x({code:"",name:"",description:""}),S(!0)},P1=p=>{g(p.id),x({code:p.code,name:p.name,description:p.description||""}),S(!0)},Ui=()=>S(!1),z1=async()=>{const{code:p,name:P,description:M}=f;if(!(!p.trim()||!P.trim())){L(!0);try{T?(await(await fetch(`${Le}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:T,code:p.trim(),name:P.trim(),description:M.trim()})})).json()).success&&(Ui(),N()):(await(await fetch(`${Le}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:p.trim(),name:P.trim(),description:M.trim()})})).json()).success&&(Ui(),N())}finally{L(!1)}}},D1=async p=>{if(confirm("Delete this department?"))try{(await(await fetch(`${Le}/backend/departments.php?id=${p}`,{method:"DELETE"})).json()).success&&N()}catch{}},Of=d.filter(p=>!w||p.code.toLowerCase().includes(w.toLowerCase())||p.name.toLowerCase().includes(w.toLowerCase())||(p.description||"").toLowerCase().includes(w.toLowerCase()));let Na="Admin Portal";try{const p=localStorage.getItem("strack_user");if(p){const P=JSON.parse(p),M=(P==null?void 0:P.name)||"";Na=M==="Test Admin"||M==="Admin"?"Admin Portal":M||"Admin Portal"}}catch{}const T1=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")},O1=p=>{u(p),o()};return a("div",{css:df(e),children:[r?s("button",{type:"button",css:pf(e),onClick:o,"aria-label":"Close menu"}):null,a("aside",{css:ff(e,r),children:[a("header",{css:k3,children:[a("div",{css:L3,children:[s("div",{css:N3(e),children:s(Vs,{})}),s("span",{css:P3(e),children:"Strack"})]}),a("div",{css:c`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[s("button",{type:"button",css:Hh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?s(Ci,{}):s($i,{})}),s("button",{type:"button",css:vf(e),onClick:o,"aria-label":"Close menu",children:s(Pe,{})})]})]}),a("div",{css:z3,children:[s("div",{css:D3,children:t6(Na)}),a("div",{css:T3,children:[s("div",{css:O3(e),children:Na}),s("div",{css:j3(e),children:"Admin"})]})]}),s("nav",{css:R3,children:e6.map(({id:p,label:P,icon:M})=>a("button",{type:"button",css:A3(e,l===p),onClick:()=>O1(p),children:[s(M,{}),P]},p))}),a("button",{type:"button",css:I3,onClick:T1,children:[s(sf,{}),"Logout"]})]}),a("div",{css:hf,children:[a("header",{css:mf(e),children:[s("button",{type:"button",css:gf(e),onClick:()=>i(!0),"aria-label":"Open menu",children:s(rf,{})}),s("span",{css:yf(e),children:"Strack"}),s("button",{type:"button",css:Hh(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?s(Ci,{}):s($i,{})})]}),s("main",{css:wf(e),children:a("div",{css:B3(e,l==="departments"||l==="students"||l==="lecturers"||l==="courses"||l==="degrees"||l==="calendar"),children:[l==="dashboard"&&a(mt,{children:[s("h1",{css:H3,children:"Dashboard"}),s("p",{css:W3,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),l==="students"&&a(mt,{children:[a("div",{css:Uc,children:[a("div",{children:[s("h1",{css:Hc,children:"Manage Students"}),s("p",{css:Fr(e),children:"Add, edit, or remove student records."})]}),s("button",{type:"button",css:Wc,onClick:$1,children:"+ Add Student"})]}),a("div",{css:Vc,children:[a("div",{css:Xn(e),children:[s("span",{css:er(e),children:s(dn,{})}),a("div",{css:tr,children:[s("p",{css:Mn(e),children:"Total Students"}),s("p",{css:qn(e),children:H?"...":z.length})]})]}),a("div",{css:Yc,children:[O.length>0?O.map(p=>{const P=z.filter(M=>(M.department||"")===p.name).length;return a("div",{css:Xn(e),children:[s("span",{css:er(e),children:s(us,{})}),a("div",{css:tr,children:[s("p",{css:Mn(e),children:p.name}),s("p",{css:qn(e),children:H?"...":P})]})]},p.id)}):null,(()=>{const p=z.filter(P=>!P.department).length;return p<=0?null:a("div",{css:Xn(e),children:[s("span",{css:er(e),children:s(Vs,{})}),a("div",{css:tr,children:[s("p",{css:Mn(e),children:"Unassigned"}),s("p",{css:qn(e),children:H?"...":p})]})]})})()]})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search students...",value:q,onChange:p=>I(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:ie(e),children:"Student ID"}),s("th",{css:ie(e),children:"Name"}),s("th",{css:ie(e),children:"Email"}),s("th",{css:ie(e),children:"Department"}),s("th",{css:ie(e),children:"Degree"}),s("th",{css:ie(e),children:"Year"}),s("th",{css:ie(e),children:"Class of"}),s("th",{css:ie(e),children:"GPA"}),s("th",{css:ie(e),children:"Points"}),s("th",{css:ie(e),children:"Attendance"}),s("th",{css:ie(e),children:"Actions"})]})}),s("tbody",{children:H?s("tr",{children:s("td",{css:X(e),colSpan:11,children:"Loading..."})}):Tf.length===0?s("tr",{children:s("td",{css:X(e),colSpan:11,children:"No students found."})}):Tf.map(p=>{var P;return a("tr",{children:[s("td",{css:X(e),children:p.student_id}),s("td",{css:X(e),children:p.full_name}),s("td",{css:X(e),children:p.email}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:((P=ka.find(M=>M.code===p.degree))==null?void 0:P.name)||p.degree||"—"}),s("td",{css:X(e),children:p.year||"—"}),s("td",{css:X(e),children:p.class_of?String(p.class_of):"—"}),s("td",{css:X(e),children:Number(p.gpa)||0}),s("td",{css:X(e),children:a("span",{css:U3,children:[s(Sa,{}),Number(p.points)||0]})}),s("td",{css:X(e),children:a("span",{css:F3(Number(p.attendance)||0,e),children:[Number(p.attendance)||0,"%"]})}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:sr(e),onClick:()=>_1(p),title:"Edit",children:s(zn,{})}),s("button",{type:"button",css:is(e),onClick:()=>k1(p.id),title:"Delete",children:s(or,{})})]})})]},p.id)})})]})]}),l==="lecturers"&&a(mt,{children:[a("div",{css:Uc,children:[a("div",{children:[s("h1",{css:Hc,children:"Lecturer Management"}),s("p",{css:Fr(e),children:"Manage teaching staff and teaching assignments."})]}),s("button",{type:"button",css:Wc,onClick:U,children:"+ Add Lecturer"})]}),a("div",{css:Vc,children:[a("div",{css:Xn(e),children:[s("span",{css:er(e),children:s(dn,{})}),a("div",{css:tr,children:[s("p",{css:Mn(e),children:"Total Lecturers"}),s("p",{css:qn(e),children:be?"...":ue.length})]})]}),s("div",{css:Yc,children:O.length>0?O.map(p=>{const P=ue.filter(M=>(M.department||"")===p.name).length;return a("div",{css:Xn(e),children:[s("span",{css:er(e),children:s(us,{})}),a("div",{css:tr,children:[s("p",{css:Mn(e),children:p.name}),s("p",{css:qn(e),children:be?"...":P})]})]},p.id)}):null})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search lecturers...",value:J,onChange:p=>Ie(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:ie(e),children:"Lecturer ID"}),s("th",{css:ie(e),children:"Name"}),s("th",{css:ie(e),children:"Email"}),s("th",{css:ie(e),children:"Department"}),s("th",{css:ie(e),children:"Modules"}),s("th",{css:ie(e),children:"Actions"})]})}),s("tbody",{children:be?s("tr",{children:s("td",{css:X(e),colSpan:6,children:"Loading..."})}):sn.length===0?s("tr",{children:s("td",{css:X(e),colSpan:6,children:"No lecturers found."})}):sn.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.lecturer_id}),s("td",{css:X(e),children:p.full_name}),s("td",{css:X(e),children:p.email}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:Number(p.modules)||0}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:sr(e),onClick:()=>Z(p),title:"Edit",children:s(zn,{})}),s("button",{type:"button",css:is(e),onClick:()=>ne(p.id),title:"Delete",children:s(or,{})})]})})]},p.id))})]})]}),l==="courses"&&a(mt,{children:[a("div",{css:Uc,children:[a("div",{children:[s("h1",{css:Hc,children:"Course Management"}),s("p",{css:Fr(e),children:"Manage course catalog."})]}),s("button",{type:"button",css:Wc,onClick:f1,children:"+ Add Course"})]}),a("div",{css:Vc,children:[a("div",{css:Xn(e),children:[s("span",{css:er(e),children:s(tn,{})}),a("div",{css:tr,children:[s("p",{css:Mn(e),children:"Total Courses"}),s("p",{css:qn(e),children:Ti?"...":We.length})]})]}),s("div",{css:Yc,children:O.length>0?O.map(p=>{const P=We.filter(M=>(M.department||"")===p.name).length;return a("div",{css:Xn(e),children:[s("span",{css:er(e),children:s(us,{})}),a("div",{css:tr,children:[s("p",{css:Mn(e),children:p.name}),s("p",{css:qn(e),children:Ti?"...":P})]})]},p.id)}):null})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search courses...",value:zr,onChange:p=>u1(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:ie(e),children:"Course Code"}),s("th",{css:ie(e),children:"Course Name"}),s("th",{css:ie(e),children:"Department"}),s("th",{css:ie(e),children:"Lecturer"}),s("th",{css:ie(e),children:"Credits"}),s("th",{css:ie(e),children:"Students"}),s("th",{css:ie(e),children:"Actions"})]})}),s("tbody",{children:Ti?s("tr",{children:s("td",{css:X(e),colSpan:7,children:"Loading..."})}):Ef.length===0?s("tr",{children:s("td",{css:X(e),colSpan:7,children:"No courses found."})}):Ef.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.course_code}),s("td",{css:X(e),children:p.course_name}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:p.lecturer_name||"—"}),s("td",{css:X(e),children:a("span",{css:J3(),children:[Number(p.credits)||0," credits"]})}),s("td",{css:X(e),children:Number(p.enrolled_count)||0}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:sr(e),onClick:()=>h1(p),title:"View enrolled students",children:s(dn,{})}),s("button",{type:"button",css:sr(e),onClick:()=>p1(p),title:"Edit",children:s(zn,{})}),s("button",{type:"button",css:is(e),onClick:()=>g1(p.id),title:"Delete",children:s(or,{})})]})})]},p.id))})]})]}),l==="degrees"&&a(mt,{children:[a("div",{css:Wh,children:[a("div",{css:Vh,children:[s("h1",{css:Yh,children:"Degrees"}),s("p",{css:Qh(e),children:"Create, view, edit, and delete degrees."})]}),s("button",{type:"button",css:Kh,onClick:x1,children:"+ Add Degree"})]}),a("div",{css:Zo(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search degrees...",value:Dr,onChange:p=>v1(p.target.value)})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:ie(e),children:"Code"}),s("th",{css:ie(e),children:"Name"}),s("th",{css:ie(e),children:"Department"}),s("th",{css:ie(e),children:"Description"}),s("th",{css:ie(e),children:"Actions"})]})}),s("tbody",{children:y1?s("tr",{children:s("td",{css:X(e),colSpan:5,children:"Loading..."})}):Df.length===0?s("tr",{children:s("td",{css:X(e),colSpan:5,children:"No degrees found."})}):Df.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.code}),s("td",{css:X(e),children:p.name}),s("td",{css:X(e),children:p.department||"—"}),s("td",{css:X(e),children:p.description||"—"}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:sr(e),onClick:()=>b1(p),title:"Edit",children:s(zn,{})}),s("button",{type:"button",css:is(e),onClick:()=>C1(p.id),title:"Delete",children:s(or,{})})]})})]},p.id))})]})]}),l==="departments"&&a(mt,{children:[a("div",{css:Wh,children:[a("div",{css:Vh,children:[s("h1",{css:Yh,children:"Departments"}),s("p",{css:Qh(e),children:"Manage university departments."})]}),s("button",{type:"button",css:Kh,onClick:N1,children:"+ Add Department"})]}),a("div",{css:V3(e),children:[s("div",{css:Y3(e),children:s(us,{})}),a("div",{children:[s("p",{css:K3(e),children:"Total Departments"}),s("p",{css:Q3(e),children:y?"...":d.length})]})]}),a("div",{css:G3,children:[a("div",{css:Z3,children:[s("h2",{css:X3,children:"All Departments"}),a("div",{css:q3(e),children:[s(Xi,{}),s("input",{type:"text",placeholder:"Search departments...",value:w,onChange:p=>E(p.target.value)})]})]}),a("table",{css:ns(e),children:[s("thead",{children:a("tr",{children:[s("th",{css:ie(e),children:"Code"}),s("th",{css:ie(e),children:"Name"}),s("th",{css:ie(e),children:"Description"}),s("th",{css:ie(e),children:"Actions"})]})}),s("tbody",{children:y?s("tr",{children:s("td",{css:X(e),colSpan:4,children:"Loading..."})}):Of.length===0?s("tr",{children:s("td",{css:X(e),colSpan:4,children:"No departments found."})}):Of.map(p=>a("tr",{children:[s("td",{css:X(e),children:p.code}),s("td",{css:X(e),children:p.name}),s("td",{css:X(e),children:p.description||"—"}),s("td",{css:X(e),children:a("div",{css:rs,children:[s("button",{type:"button",css:sr(e),onClick:()=>P1(p),title:"Edit",children:s(zn,{})}),s("button",{type:"button",css:is(e),onClick:()=>D1(p.id),title:"Delete",children:s(or,{})})]})})]},p.id))})]})]})]}),l==="calendar"&&s(E3,{darkMode:e})]})})]}),A&&s("div",{css:Ur,onClick:Fi,children:a("div",{css:Hr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Wr(e),children:[s("h3",{css:Vr(e),children:K?"Edit Student":"Add Student"}),s("button",{type:"button",css:Yr(e),onClick:Fi,"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Qr,children:[a("div",{css:me,children:[s("label",{css:ge(e),children:"Full Name *"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. Ava Thomas",value:Y.full_name,onChange:p=>b(P=>({...P,full_name:p.target.value}))})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Email *"}),s("input",{type:"email",css:Se(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:Y.email,onChange:p=>b(P=>({...P,email:p.target.value}))})]}),!K&&a("div",{css:me,children:[s("label",{css:ge(e),children:"Password *"}),s("input",{type:"password",css:Se(e),placeholder:"e.g. student123",value:Y.password,onChange:p=>b(P=>({...P,password:p.target.value}))})]}),a("div",{css:me,children:[a("label",{css:ge(e),children:["Student ID ",K?"":"*"]}),s("input",{type:"text",css:Se(e),placeholder:"e.g. STU2024008",value:Y.student_id,onChange:p=>b(P=>({...P,student_id:p.target.value})),readOnly:!!K})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Department"}),a("select",{css:Se(e),value:Y.department,onChange:p=>b(P=>({...P,department:p.target.value})),children:[s("option",{value:"",children:"Select department"}),O.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Degree"}),a("select",{css:Se(e),value:Y.degree,onChange:p=>b(P=>({...P,degree:p.target.value})),children:[s("option",{value:"",children:"Select degree"}),ka.map(p=>s("option",{value:p.code,children:p.name},p.id))]})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Year"}),a("select",{css:Se(e),value:Y.year,onChange:p=>b(P=>({...P,year:p.target.value})),children:[s("option",{value:"",children:"Select year"}),L1.map(p=>s("option",{value:p,children:p},p))]})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Class of"}),s("input",{type:"text",inputMode:"numeric",css:Se(e),placeholder:"e.g. 2027",maxLength:10,value:Y.class_of,onChange:p=>b(P=>({...P,class_of:p.target.value.replace(/[^\d]/g,"").slice(0,4)}))}),s("p",{css:M3(e),children:"Graduation year (optional)."})]})]}),a("div",{css:Kr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Fi,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:E1,disabled:D,children:D?"Saving...":K?"Save Changes":"Add Student"})]})]})}),zi&&s("div",{css:Ur,onClick:de,children:a("div",{css:Hr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Wr(e),children:[s("h3",{css:Vr(e),children:Wt?"Edit Lecturer":"Add Lecturer"}),s("button",{type:"button",css:Yr(e),onClick:de,"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Qr,children:[a("div",{css:me,children:[s("label",{css:ge(e),children:"Full Name *"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. Dr. Sarah Johnson",value:bn.full_name,onChange:p=>Sn(P=>({...P,full_name:p.target.value}))})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Email *"}),s("input",{type:"email",css:Se(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:bn.email,onChange:p=>Sn(P=>({...P,email:p.target.value}))})]}),a("div",{css:me,children:[a("label",{css:ge(e),children:["Lecturer ID ",Wt?"":"*"]}),s("input",{type:"text",css:Se(e),placeholder:"e.g. LEC001",value:bn.lecturer_id,onChange:p=>Sn(P=>({...P,lecturer_id:p.target.value})),readOnly:!!Wt})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Department"}),a("select",{css:Se(e),value:bn.department,onChange:p=>Sn(P=>({...P,department:p.target.value})),children:[s("option",{value:"",children:"Select department"}),O.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]})]}),a("div",{css:Kr(e),children:[s("button",{type:"button",css:Jr(e),onClick:de,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:we,disabled:Di,children:Di?"Saving...":Wt?"Update Lecturer":"Add Lecturer"})]})]})}),d1&&s("div",{css:Ur,onClick:Ri,children:a("div",{css:Hr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Wr(e),children:[s("h3",{css:Vr(e),children:Oi?"Edit Course":"Add Course"}),s("button",{type:"button",css:Yr(e),onClick:Ri,"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Qr,children:[a("div",{css:me,children:[s("label",{css:ge(e),children:"Course Code *"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. CS201",value:Ct.course_code,onChange:p=>Cn(P=>({...P,course_code:p.target.value})),readOnly:!!Oi})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Course Name *"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. Data Structures and Algorithms",value:Ct.course_name,onChange:p=>Cn(P=>({...P,course_name:p.target.value}))})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Department"}),a("select",{css:Se(e),value:Ct.department,onChange:p=>{const P=p.target.value;Cn(M=>{const ke=new Set(z.filter(Oe=>!P||(Oe.department||"")===P).map(Oe=>Number(Oe.id))),Ve=(Array.isArray(M.student_ids)?M.student_ids:[]).filter(Oe=>ke.has(Number(Oe)));return{...M,department:P,student_ids:Ve}})},children:[s("option",{value:"",children:"Select department"}),O.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Lecturer"}),a("select",{css:Se(e),value:Ct.lecturer_id,onChange:p=>Cn(P=>({...P,lecturer_id:p.target.value})),children:[s("option",{value:"",children:"Select lecturer"}),ue.filter(p=>!Ct.department||(p.department||"")===Ct.department).map(p=>s("option",{value:p.lecturer_id,children:p.full_name},p.id))]})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Credits"}),s("input",{type:"number",css:Se(e),placeholder:"e.g. 4",value:Ct.credits,onChange:p=>Cn(P=>({...P,credits:Number(p.target.value)||0})),min:0})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Students who should attend this course"}),s("div",{css:Gh(e),children:z.length===0?s("p",{css:Fr(e),style:{margin:0},children:"No students found."}):z.filter(p=>!Ct.department||(p.department||"")===Ct.department).map(p=>a("label",{css:Zh(e),children:[s("input",{type:"checkbox",checked:Array.isArray(Ct.student_ids)&&Ct.student_ids.includes(Number(p.id)),onChange:P=>{const M=Number(p.id);Cn(ke=>{const Ve=new Set(Array.isArray(ke.student_ids)?ke.student_ids.map(Oe=>Number(Oe)):[]);return P.target.checked?Ve.add(M):Ve.delete(M),{...ke,student_ids:Array.from(Ve)}})}}),a("span",{children:[p.full_name," (",p.student_id,")"]})]},p.id))})]})]}),a("div",{css:Kr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Ri,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:m1,disabled:$f,children:$f?"Saving...":Oi?"Update Course":"Add Course"})]})]})}),Gn&&s("div",{css:Ur,onClick:Ea,children:a("div",{css:Hr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Wr(e),children:[a("h3",{css:Vr(e),children:["Students in ",Gn.course_code||"Course"]}),s("button",{type:"button",css:Yr(e),onClick:Ea,"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Qr,children:[a("p",{css:Fr(e),style:{marginTop:0},children:[Gn.course_name||""," - ",Number(Gn.enrolled_count)||0," student(s)"]}),s("div",{css:Gh(e),children:Array.isArray(Gn.students)&&Gn.students.length>0?Gn.students.map(p=>a("div",{css:Zh(e),children:[s(dn,{style:{width:16,height:16,opacity:.8}}),a("span",{children:[p.full_name," (",p.student_id,")"]})]},p.id)):s("p",{css:Fr(e),style:{margin:0},children:"No students assigned yet."})})]}),s("div",{css:Kr(e),children:s("button",{type:"button",css:Jr(e),onClick:Ea,children:"Close"})})]})}),w1&&s("div",{css:Ur,onClick:Bi,children:a("div",{css:Hr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Wr(e),children:[s("h3",{css:Vr(e),children:so?"Edit Degree":"Add Degree"}),s("button",{type:"button",css:Yr(e),onClick:Bi,"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Qr,children:[a("div",{css:me,children:[s("label",{css:ge(e),children:"Code *"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. CS",value:Ai.code,onChange:p=>Tr(P=>({...P,code:p.target.value}))})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Name *"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. BSc Computer Science",value:Ai.name,onChange:p=>Tr(P=>({...P,name:p.target.value}))})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Department"}),a("select",{css:Se(e),value:Ai.department,onChange:p=>Tr(P=>({...P,department:p.target.value})),children:[s("option",{value:"",children:"Select department"}),O.map(p=>s("option",{value:p.name,children:p.name},p.id))]})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Description"}),s("textarea",{css:Jh(e),placeholder:"Optional description",value:Ai.description,onChange:p=>Tr(P=>({...P,description:p.target.value}))})]})]}),a("div",{css:Kr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Bi,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:S1,disabled:Pf,children:Pf?"Saving...":so?"Update Degree":"Add Degree"})]})]})}),$&&s("div",{css:Ur,onClick:Ui,children:a("div",{css:Hr(e),onClick:p=>p.stopPropagation(),children:[a("div",{css:Wr(e),children:[s("h3",{css:Vr(e),children:T?"Edit Department":"Add New Department"}),s("button",{type:"button",css:Yr(e),onClick:Ui,"aria-label":"Close",children:s(Pe,{})})]}),a("div",{css:Qr,children:[a("div",{css:me,children:[s("label",{css:ge(e),children:"Department Name"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. Newcastle Business School",value:f.name,onChange:p=>x(P=>({...P,name:p.target.value}))})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Department Code"}),s("input",{type:"text",css:Se(e),placeholder:"e.g. NBS",value:f.code,onChange:p=>x(P=>({...P,code:p.target.value}))})]}),a("div",{css:me,children:[s("label",{css:ge(e),children:"Description"}),s("textarea",{css:Jh(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:f.description,onChange:p=>x(P=>({...P,description:p.target.value}))})]})]}),a("div",{css:Kr(e),children:[s("button",{type:"button",css:Jr(e),onClick:Ui,children:"Cancel"}),s("button",{type:"button",css:ss,onClick:z1,disabled:_,children:_?"Saving...":T?"Update Department":"Add Department"})]})]})})]})}const r6="/strack",Xh="strack_dark";function i6(){const[e,t]=m.useState(()=>{try{return localStorage.getItem(Xh)==="true"}catch{return!1}});m.useEffect(()=>{try{localStorage.setItem(Xh,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return je.jsx(sv,{basename:r6,children:je.jsxs(nv,{children:[je.jsx(Gr,{path:"/",element:je.jsx(Lw,{darkMode:e,onToggleDarkMode:n})}),je.jsx(Gr,{path:"/dashboard",element:je.jsx(bb,{darkMode:e,onToggleDarkMode:n})}),je.jsx(Gr,{path:"/lecturer",element:je.jsx(_S,{darkMode:e,onToggleDarkMode:n})}),je.jsx(Gr,{path:"/admin",element:je.jsx(n6,{darkMode:e,onToggleDarkMode:n})}),je.jsx(Gr,{path:"*",element:je.jsx(ev,{to:"/",replace:!0})})]})})}Kc.createRoot(document.getElementById("root")).render(je.jsx(fn.StrictMode,{children:je.jsx(i6,{})}));
