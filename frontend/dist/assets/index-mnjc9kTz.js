function dm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function fm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wd={exports:{}},co={},Vd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),pm=Symbol.for("react.portal"),hm=Symbol.for("react.fragment"),mm=Symbol.for("react.strict_mode"),gm=Symbol.for("react.profiler"),vm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),xm=Symbol.for("react.suspense"),Sm=Symbol.for("react.memo"),Cm=Symbol.for("react.lazy"),tc=Symbol.iterator;function km(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var Hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,Kd={};function yr(e,t,n){this.props=e,this.context=t,this.refs=Kd,this.updater=n||Hd}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=yr.prototype;function La(e,t,n){this.props=e,this.context=t,this.refs=Kd,this.updater=n||Hd}var Pa=La.prototype=new Yd;Pa.constructor=La;Qd(Pa,yr.prototype);Pa.isPureReactComponent=!0;var nc=Array.isArray,Zd=Object.prototype.hasOwnProperty,ba={current:null},Gd={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Zd.call(t,r)&&!Gd.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Hi,type:e,key:l,ref:o,props:i,_owner:ba.current}}function Em(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function _m(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rc=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_m(""+e.key):t.toString(36)}function Sl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Hi:case pm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Zo(o,0):r,nc(i)?(n="",e!=null&&(n=e.replace(rc,"$&/")+"/"),Sl(i,t,n,"",function(d){return d})):i!=null&&(Na(i)&&(i=Em(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",nc(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Zo(l,s);o+=Sl(l,t,n,u,i)}else if(u=km(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Zo(l,s++),o+=Sl(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(e,t,n){if(e==null)return e;var r=[],i=0;return Sl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function $m(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Cl={transition:null},Lm={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:ba};function Xd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:nl,forEach:function(e,t,n){nl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nl(e,function(){t++}),t},toArray:function(e){return nl(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=yr;F.Fragment=hm;F.Profiler=gm;F.PureComponent=La;F.StrictMode=mm;F.Suspense=xm;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;F.act=Xd;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qd({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Zd.call(t,u)&&!Gd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Hi,type:e.type,key:i,ref:l,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vm,_context:e},e.Consumer=e};F.createElement=Jd;F.createFactory=function(e){var t=Jd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:wm,render:e}};F.isValidElement=Na;F.lazy=function(e){return{$$typeof:Cm,_payload:{_status:-1,_result:e},_init:$m}};F.memo=function(e,t){return{$$typeof:Sm,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Cl.transition;Cl.transition={};try{e()}finally{Cl.transition=t}};F.unstable_act=Xd;F.useCallback=function(e,t){return Oe.current.useCallback(e,t)};F.useContext=function(e){return Oe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};F.useEffect=function(e,t){return Oe.current.useEffect(e,t)};F.useId=function(){return Oe.current.useId()};F.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Oe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};F.useRef=function(e){return Oe.current.useRef(e)};F.useState=function(e){return Oe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Oe.current.useTransition()};F.version="18.3.1";Vd.exports=F;var x=Vd.exports;const Pt=fm(x),Ps=dm({__proto__:null,default:Pt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=x,bm=Symbol.for("react.element"),Nm=Symbol.for("react.fragment"),Tm=Object.prototype.hasOwnProperty,zm=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Om={key:!0,ref:!0,__self:!0,__source:!0};function Md(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Tm.call(t,r)&&!Om.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bm,type:e,key:l,ref:o,props:i,_owner:zm.current}}co.Fragment=Nm;co.jsx=Md;co.jsxs=Md;Wd.exports=co;var he=Wd.exports,bs={},qd={exports:{}},Ge={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var R=T.length;T.push(j);e:for(;0<R;){var J=R-1>>>1,q=T[J];if(0<i(q,j))T[J]=j,T[R]=q,R=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],R=T.pop();if(R!==j){T[0]=R;e:for(var J=0,q=T.length,on=q>>>1;J<on;){var ot=2*(J+1)-1,On=T[ot],De=ot+1,jn=T[De];if(0>i(On,R))De<q&&0>i(jn,On)?(T[J]=jn,T[De]=R,J=De):(T[J]=On,T[ot]=R,J=ot);else if(De<q&&0>i(jn,R))T[J]=jn,T[De]=R,J=De;else break e}}return j}function i(T,j){var R=T.sortIndex-j.sortIndex;return R!==0?R:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],y=1,m=null,h=3,S=!1,k=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var j=n(d);j!==null;){if(j.callback===null)r(d);else if(j.startTime<=T)r(d),j.sortIndex=j.expirationTime,t(u,j);else break;j=n(d)}}function E(T){if(C=!1,g(T),!k)if(n(u)!==null)k=!0,Tn(b);else{var j=n(d);j!==null&&zn(E,j.startTime-T)}}function b(T,j){k=!1,C&&(C=!1,p(O),O=-1),S=!0;var R=h;try{for(g(j),m=n(u);m!==null&&(!(m.expirationTime>j)||T&&!be());){var J=m.callback;if(typeof J=="function"){m.callback=null,h=m.priorityLevel;var q=J(m.expirationTime<=j);j=e.unstable_now(),typeof q=="function"?m.callback=q:m===n(u)&&r(u),g(j)}else r(u);m=n(u)}if(m!==null)var on=!0;else{var ot=n(d);ot!==null&&zn(E,ot.startTime-j),on=!1}return on}finally{m=null,h=R,S=!1}}var N=!1,L=null,O=-1,M=5,A=-1;function be(){return!(e.unstable_now()-A<M)}function Re(){if(L!==null){var T=e.unstable_now();A=T;var j=!0;try{j=L(!0,T)}finally{j?Rt():(N=!1,L=null)}}else N=!1}var Rt;if(typeof f=="function")Rt=function(){f(Re)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=Re,Rt=function(){lt.postMessage(null)}}else Rt=function(){P(Re,0)};function Tn(T){L=T,N||(N=!0,Rt())}function zn(T,j){O=P(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||S||(k=!0,Tn(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var R=h;h=j;try{return T()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=h;h=T;try{return j()}finally{h=R}},e.unstable_scheduleCallback=function(T,j,R){var J=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?J+R:J):R=J,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,T={id:y++,callback:j,priorityLevel:T,startTime:R,expirationTime:q,sortIndex:-1},R>J?(T.sortIndex=R,t(d,T),n(u)===null&&T===n(d)&&(C?(p(O),O=-1):C=!0,zn(E,R-J))):(T.sortIndex=q,t(u,T),k||S||(k=!0,Tn(b))),T},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(T){var j=h;return function(){var R=h;h=j;try{return T.apply(this,arguments)}finally{h=R}}}})(tf);ef.exports=tf;var jm=ef.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm=x,Ze=jm;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nf=new Set,xi={};function Pn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(xi[e]=t,e=0;e<t.length;e++)nf.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=Object.prototype.hasOwnProperty,Dm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},lc={};function Im(e){return Ns.call(lc,e)?!0:Ns.call(ic,e)?!1:Dm.test(e)?lc[e]=!0:(ic[e]=!0,!1)}function Am(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fm(e,t,n,r){if(t===null||typeof t>"u"||Am(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,za);ke[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,za);ke[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,za);ke[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oa(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fm(t,n,i,r)&&(n=null),r||i===null?Im(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),lf=Symbol.for("react.context"),Ra=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),of=Symbol.for("react.offscreen"),oc=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Go;function oi(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||""}return`
`+Go+e}var Jo=!1;function Xo(e,t){if(!e||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function Um(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=Xo(e.type,!1),e;case 11:return e=Xo(e.type.render,!1),e;case 1:return e=Xo(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case Ts:return"Profiler";case ja:return"StrictMode";case zs:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lf:return(e.displayName||"Context")+".Consumer";case rf:return(e._context.displayName||"Context")+".Provider";case Ra:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function Bm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wm(e){var t=sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function il(e){e._valueTracker||(e._valueTracker=Wm(e))}function af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uf(e,t){t=t.checked,t!=null&&Oa(e,"checked",t,!1)}function Ds(e,t){uf(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Is(e,t.type,n):t.hasOwnProperty("defaultValue")&&Is(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ac(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Is(e,t,n){(t!=="number"||Dl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var si=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function As(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(si(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function cf(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ll,ff=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ll.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vm=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){Vm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function pf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function hf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hm=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(Hm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,ir=null,lr=null;function dc(e){if(e=Yi(e)){if(typeof Vs!="function")throw Error($(280));var t=e.stateNode;t&&(t=go(t),Vs(e.stateNode,e.type,t))}}function mf(e){ir?lr?lr.push(e):lr=[e]:ir=e}function gf(){if(ir){var e=ir,t=lr;if(lr=ir=null,dc(e),t)for(e=0;e<t.length;e++)dc(t[e])}}function vf(e,t){return e(t)}function yf(){}var Mo=!1;function wf(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return vf(e,t,n)}finally{Mo=!1,(ir!==null||lr!==null)&&(yf(),gf())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Hs=!1;if(Nt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Hs=!1}function Qm(e,t,n,r,i,l,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var fi=!1,Il=null,Al=!1,Qs=null,Km={onError:function(e){fi=!0,Il=e}};function Ym(e,t,n,r,i,l,o,s,u){fi=!1,Il=null,Qm.apply(Km,arguments)}function Zm(e,t,n,r,i,l,o,s,u){if(Ym.apply(this,arguments),fi){if(fi){var d=Il;fi=!1,Il=null}else throw Error($(198));Al||(Al=!0,Qs=d)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(bn(e)!==e)throw Error($(188))}function Gm(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return fc(i),e;if(l===r)return fc(i),t;l=l.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Sf(e){return e=Gm(e),e!==null?Cf(e):null}function Cf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cf(e);if(t!==null)return t;e=e.sibling}return null}var kf=Ze.unstable_scheduleCallback,pc=Ze.unstable_cancelCallback,Jm=Ze.unstable_shouldYield,Xm=Ze.unstable_requestPaint,ue=Ze.unstable_now,Mm=Ze.unstable_getCurrentPriorityLevel,Aa=Ze.unstable_ImmediatePriority,Ef=Ze.unstable_UserBlockingPriority,Fl=Ze.unstable_NormalPriority,qm=Ze.unstable_LowPriority,_f=Ze.unstable_IdlePriority,fo=null,St=null;function e0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(e){return e>>>=0,e===0?32:31-(t0(e)/n0|0)|0}var ol=64,sl=4194304;function ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=ai(s):(l&=o,l!==0&&(r=ai(l)))}else o=n&~i,o!==0?r=ai(o):l!==0&&(r=ai(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function i0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ft(l),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=i0(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $f(){var e=ol;return ol<<=1,!(ol&4194240)&&(ol=64),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function o0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pf,Ua,bf,Nf,Tf,Ys=!1,al=[],Kt=null,Yt=null,Zt=null,ki=new Map,Ei=new Map,Bt=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Ir(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Yi(t),t!==null&&Ua(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function a0(e,t,n,r,i){switch(t){case"focusin":return Kt=Ir(Kt,e,t,n,r,i),!0;case"dragenter":return Yt=Ir(Yt,e,t,n,r,i),!0;case"mouseover":return Zt=Ir(Zt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return ki.set(l,Ir(ki.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ei.set(l,Ir(Ei.get(l)||null,e,t,n,r,i)),!0}return!1}function zf(e){var t=vn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=xf(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=Yi(n),t!==null&&Ua(t),e.blockedOn=n,!1;t.shift()}return!0}function mc(e,t,n){kl(e)&&n.delete(t)}function u0(){Ys=!1,Kt!==null&&kl(Kt)&&(Kt=null),Yt!==null&&kl(Yt)&&(Yt=null),Zt!==null&&kl(Zt)&&(Zt=null),ki.forEach(mc),Ei.forEach(mc)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,u0)))}function _i(e){function t(i){return Ar(i,e)}if(0<al.length){Ar(al[0],e);for(var n=1;n<al.length;n++){var r=al[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Ar(Kt,e),Yt!==null&&Ar(Yt,e),Zt!==null&&Ar(Zt,e),ki.forEach(t),Ei.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)zf(n),n.blockedOn===null&&Bt.shift()}var or=jt.ReactCurrentBatchConfig,Bl=!0;function c0(e,t,n,r){var i=Q,l=or.transition;or.transition=null;try{Q=1,Ba(e,t,n,r)}finally{Q=i,or.transition=l}}function d0(e,t,n,r){var i=Q,l=or.transition;or.transition=null;try{Q=4,Ba(e,t,n,r)}finally{Q=i,or.transition=l}}function Ba(e,t,n,r){if(Bl){var i=Zs(e,t,n,r);if(i===null)us(e,t,r,Wl,n),hc(e,r);else if(a0(i,e,t,n,r))r.stopPropagation();else if(hc(e,r),t&4&&-1<s0.indexOf(e)){for(;i!==null;){var l=Yi(i);if(l!==null&&Pf(l),l=Zs(e,t,n,r),l===null&&us(e,t,r,Wl,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else us(e,t,r,null,n)}}var Wl=null;function Zs(e,t,n,r){if(Wl=null,e=Ia(r),e=vn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wl=e,null}function Of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mm()){case Aa:return 1;case Ef:return 4;case Fl:case qm:return 16;case _f:return 536870912;default:return 16}default:return 16}}var Vt=null,Wa=null,El=null;function jf(){if(El)return El;var e,t=Wa,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return El=i.slice(e,1<r?1-r:void 0)}function _l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function gc(){return!1}function Je(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ul:gc,this.isPropagationStopped=gc,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=Je(wr),Ki=ie({},wr,{view:0,detail:0}),f0=Je(Ki),es,ts,Fr,po=ie({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(es=e.screenX-Fr.screenX,ts=e.screenY-Fr.screenY):ts=es=0,Fr=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),vc=Je(po),p0=ie({},po,{dataTransfer:0}),h0=Je(p0),m0=ie({},Ki,{relatedTarget:0}),ns=Je(m0),g0=ie({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=Je(g0),y0=ie({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=Je(y0),x0=ie({},wr,{data:0}),yc=Je(x0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k0[e])?!!t[e]:!1}function Ha(){return E0}var _0=ie({},Ki,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=Je(_0),L0=ie({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Je(L0),P0=ie({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),b0=Je(P0),N0=ie({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=Je(N0),z0=ie({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=Je(z0),j0=[9,13,27,32],Qa=Nt&&"CompositionEvent"in window,pi=null;Nt&&"documentMode"in document&&(pi=document.documentMode);var R0=Nt&&"TextEvent"in window&&!pi,Rf=Nt&&(!Qa||pi&&8<pi&&11>=pi),xc=" ",Sc=!1;function Df(e,t){switch(e){case"keyup":return j0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function D0(e,t){switch(e){case"compositionend":return If(t);case"keypress":return t.which!==32?null:(Sc=!0,xc);case"textInput":return e=t.data,e===xc&&Sc?null:e;default:return null}}function I0(e,t){if(Yn)return e==="compositionend"||!Qa&&Df(e,t)?(e=jf(),El=Wa=Vt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rf&&t.locale!=="ko"?null:t.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A0[e.type]:t==="textarea"}function Af(e,t,n,r){mf(r),t=Vl(t,"onChange"),0<t.length&&(n=new Va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hi=null,$i=null;function F0(e){Gf(e,0)}function ho(e){var t=Jn(e);if(af(t))return e}function U0(e,t){if(e==="change")return t}var Ff=!1;if(Nt){var rs;if(Nt){var is="oninput"in document;if(!is){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),is=typeof kc.oninput=="function"}rs=is}else rs=!1;Ff=rs&&(!document.documentMode||9<document.documentMode)}function Ec(){hi&&(hi.detachEvent("onpropertychange",Uf),$i=hi=null)}function Uf(e){if(e.propertyName==="value"&&ho($i)){var t=[];Af(t,$i,e,Ia(e)),wf(F0,t)}}function B0(e,t,n){e==="focusin"?(Ec(),hi=t,$i=n,hi.attachEvent("onpropertychange",Uf)):e==="focusout"&&Ec()}function W0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho($i)}function V0(e,t){if(e==="click")return ho(t)}function H0(e,t){if(e==="input"||e==="change")return ho(t)}function Q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Q0;function Li(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ns.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $c(e,t){var n=_c(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_c(n)}}function Bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wf(){for(var e=window,t=Dl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dl(e.document)}return t}function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K0(e){var t=Wf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bf(n.ownerDocument.documentElement,n)){if(r!==null&&Ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=$c(n,l);var o=$c(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y0=Nt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Gs=null,mi=null,Js=!1;function Lc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||Zn==null||Zn!==Dl(r)||(r=Zn,"selectionStart"in r&&Ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Li(mi,r)||(mi=r,r=Vl(Gs,"onSelect"),0<r.length&&(t=new Va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},ls={},Vf={};Nt&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function mo(e){if(ls[e])return ls[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vf)return ls[e]=t[n];return e}var Hf=mo("animationend"),Qf=mo("animationiteration"),Kf=mo("animationstart"),Yf=mo("transitionend"),Zf=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Zf.set(e,t),Pn(t,[e])}for(var os=0;os<Pc.length;os++){var ss=Pc[os],Z0=ss.toLowerCase(),G0=ss[0].toUpperCase()+ss.slice(1);nn(Z0,"on"+G0)}nn(Hf,"onAnimationEnd");nn(Qf,"onAnimationIteration");nn(Kf,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Yf,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zm(r,t,void 0,e),e.currentTarget=null}function Gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;bc(i,s,d),l=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;bc(i,s,d),l=u}}}if(Al)throw e=Qs,Al=!1,Qs=null,e}function Z(e,t){var n=t[ta];n===void 0&&(n=t[ta]=new Set);var r=e+"__bubble";n.has(r)||(Jf(t,e,2,!1),n.add(r))}function as(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[dl]){e[dl]=!0,nf.forEach(function(n){n!=="selectionchange"&&(J0.has(n)||as(n,!1,e),as(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dl]||(t[dl]=!0,as("selectionchange",!1,t))}}function Jf(e,t,n,r){switch(Of(t)){case 1:var i=c0;break;case 4:i=d0;break;default:i=Ba}n=i.bind(null,t,n,e),i=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function us(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=vn(s),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}s=s.parentNode}}r=r.return}wf(function(){var d=l,y=Ia(n),m=[];e:{var h=Zf.get(e);if(h!==void 0){var S=Va,k=e;switch(e){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":S=$0;break;case"focusin":k="focus",S=ns;break;case"focusout":k="blur",S=ns;break;case"beforeblur":case"afterblur":S=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=b0;break;case Hf:case Qf:case Kf:S=v0;break;case Yf:S=T0;break;case"scroll":S=f0;break;case"wheel":S=O0;break;case"copy":case"cut":case"paste":S=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=wc}var C=(t&4)!==0,P=!C&&e==="scroll",p=C?h!==null?h+"Capture":null:h;C=[];for(var f=d,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Ci(f,p),E!=null&&C.push(bi(f,E,g)))),P)break;f=f.return}0<C.length&&(h=new S(h,k,null,n,y),m.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==Ws&&(k=n.relatedTarget||n.fromElement)&&(vn(k)||k[Tt]))break e;if((S||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=d,k=k?vn(k):null,k!==null&&(P=bn(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=d),S!==k)){if(C=vc,E="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(C=wc,E="onPointerLeave",p="onPointerEnter",f="pointer"),P=S==null?h:Jn(S),g=k==null?h:Jn(k),h=new C(E,f+"leave",S,n,y),h.target=P,h.relatedTarget=g,E=null,vn(y)===d&&(C=new C(p,f+"enter",k,n,y),C.target=g,C.relatedTarget=P,E=C),P=E,S&&k)t:{for(C=S,p=k,f=0,g=C;g;g=Un(g))f++;for(g=0,E=p;E;E=Un(E))g++;for(;0<f-g;)C=Un(C),f--;for(;0<g-f;)p=Un(p),g--;for(;f--;){if(C===p||p!==null&&C===p.alternate)break t;C=Un(C),p=Un(p)}C=null}else C=null;S!==null&&Nc(m,h,S,C,!1),k!==null&&P!==null&&Nc(m,P,k,C,!0)}}e:{if(h=d?Jn(d):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var b=U0;else if(Cc(h))if(Ff)b=H0;else{b=W0;var N=B0}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=V0);if(b&&(b=b(e,d))){Af(m,b,n,y);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Is(h,"number",h.value)}switch(N=d?Jn(d):window,e){case"focusin":(Cc(N)||N.contentEditable==="true")&&(Zn=N,Gs=d,mi=null);break;case"focusout":mi=Gs=Zn=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,Lc(m,n,y);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":Lc(m,n,y)}var L;if(Qa)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Yn?Df(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Rf&&n.locale!=="ko"&&(Yn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Yn&&(L=jf()):(Vt=y,Wa="value"in Vt?Vt.value:Vt.textContent,Yn=!0)),N=Vl(d,O),0<N.length&&(O=new yc(O,e,null,n,y),m.push({event:O,listeners:N}),L?O.data=L:(L=If(n),L!==null&&(O.data=L)))),(L=R0?D0(e,n):I0(e,n))&&(d=Vl(d,"onBeforeInput"),0<d.length&&(y=new yc("onBeforeInput","beforeinput",null,n,y),m.push({event:y,listeners:d}),y.data=L))}Gf(m,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ci(e,n),l!=null&&r.unshift(bi(e,l,i)),l=Ci(e,t),l!=null&&r.push(bi(e,l,i))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=Ci(n,l),u!=null&&o.unshift(bi(n,u,s))):i||(u=Ci(n,l),u!=null&&o.push(bi(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var X0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(X0,`
`).replace(M0,"")}function fl(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error($(425))}function Hl(){}var Xs=null,Ms=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(t1)}:ea;function t1(e){setTimeout(function(){throw e})}function cs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_i(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),xt="__reactFiber$"+xr,Ni="__reactProps$"+xr,Tt="__reactContainer$"+xr,ta="__reactEvents$"+xr,n1="__reactListeners$"+xr,r1="__reactHandles$"+xr;function vn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oc(e);e!==null;){if(n=e[xt])return n;e=Oc(e)}return t}e=n,n=e.parentNode}return null}function Yi(e){return e=e[xt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function go(e){return e[Ni]||null}var na=[],Xn=-1;function rn(e){return{current:e}}function G(e){0>Xn||(e.current=na[Xn],na[Xn]=null,Xn--)}function Y(e,t){Xn++,na[Xn]=e.current,e.current=t}var tn={},Pe=rn(tn),Fe=rn(!1),kn=tn;function dr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function Ql(){G(Fe),G(Pe)}function jc(e,t,n){if(Pe.current!==tn)throw Error($(168));Y(Pe,t),Y(Fe,n)}function Xf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,Bm(e)||"Unknown",i));return ie({},n,r)}function Kl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,kn=Pe.current,Y(Pe,e),Y(Fe,Fe.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Xf(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,G(Fe),G(Pe),Y(Pe,e)):G(Fe),Y(Fe,n)}var _t=null,vo=!1,ds=!1;function Mf(e){_t===null?_t=[e]:_t.push(e)}function i1(e){vo=!0,Mf(e)}function ln(){if(!ds&&_t!==null){ds=!0;var e=0,t=Q;try{var n=_t;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,vo=!1}catch(i){throw _t!==null&&(_t=_t.slice(e+1)),kf(Aa,ln),i}finally{Q=t,ds=!1}}return null}var Mn=[],qn=0,Yl=null,Zl=0,Me=[],qe=0,En=null,$t=1,Lt="";function mn(e,t){Mn[qn++]=Zl,Mn[qn++]=Yl,Yl=e,Zl=t}function qf(e,t,n){Me[qe++]=$t,Me[qe++]=Lt,Me[qe++]=En,En=e;var r=$t;e=Lt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var l=32-ft(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$t=1<<32-ft(t)+i|n<<i|r,Lt=l+e}else $t=1<<l|n<<i|r,Lt=e}function Ya(e){e.return!==null&&(mn(e,1),qf(e,1,0))}function Za(e){for(;e===Yl;)Yl=Mn[--qn],Mn[qn]=null,Zl=Mn[--qn],Mn[qn]=null;for(;e===En;)En=Me[--qe],Me[qe]=null,Lt=Me[--qe],Me[qe]=null,$t=Me[--qe],Me[qe]=null}var Ke=null,Qe=null,X=!1,dt=null;function ep(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:$t,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Qe=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ia(e){if(X){var t=Qe;if(t){var n=t;if(!Dc(e,t)){if(ra(e))throw Error($(418));t=Gt(n.nextSibling);var r=Ke;t&&Dc(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,X=!1,Ke=e)}}else{if(ra(e))throw Error($(418));e.flags=e.flags&-4097|2,X=!1,Ke=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function pl(e){if(e!==Ke)return!1;if(!X)return Ic(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=Qe)){if(ra(e))throw tp(),Error($(418));for(;t;)ep(e,t),t=Gt(t.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ke?Gt(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=Qe;e;)e=Gt(e.nextSibling)}function fr(){Qe=Ke=null,X=!1}function Ga(e){dt===null?dt=[e]:dt.push(e)}var l1=jt.ReactCurrentBatchConfig;function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function hl(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ac(e){var t=e._init;return t(e._payload)}function np(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=qt(p,f),p.index=0,p.sibling=null,p}function l(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,g,E){return f===null||f.tag!==6?(f=ys(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function u(p,f,g,E){var b=g.type;return b===Kn?y(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ft&&Ac(b)===f.type)?(E=i(f,g.props),E.ref=Ur(p,f,g),E.return=p,E):(E=zl(g.type,g.key,g.props,null,p.mode,E),E.ref=Ur(p,f,g),E.return=p,E)}function d(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ws(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function y(p,f,g,E,b){return f===null||f.tag!==7?(f=Sn(g,p.mode,E,b),f.return=p,f):(f=i(f,g),f.return=p,f)}function m(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ys(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rl:return g=zl(f.type,f.key,f.props,null,p.mode,g),g.ref=Ur(p,null,f),g.return=p,g;case Qn:return f=ws(f,p.mode,g),f.return=p,f;case Ft:var E=f._init;return m(p,E(f._payload),g)}if(si(f)||Rr(f))return f=Sn(f,p.mode,g,null),f.return=p,f;hl(p,f)}return null}function h(p,f,g,E){var b=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:s(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:return g.key===b?u(p,f,g,E):null;case Qn:return g.key===b?d(p,f,g,E):null;case Ft:return b=g._init,h(p,f,b(g._payload),E)}if(si(g)||Rr(g))return b!==null?null:y(p,f,g,E,null);hl(p,g)}return null}function S(p,f,g,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,s(f,p,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case rl:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,b);case Qn:return p=p.get(E.key===null?g:E.key)||null,d(f,p,E,b);case Ft:var N=E._init;return S(p,f,g,N(E._payload),b)}if(si(E)||Rr(E))return p=p.get(g)||null,y(f,p,E,b,null);hl(f,E)}return null}function k(p,f,g,E){for(var b=null,N=null,L=f,O=f=0,M=null;L!==null&&O<g.length;O++){L.index>O?(M=L,L=null):M=L.sibling;var A=h(p,L,g[O],E);if(A===null){L===null&&(L=M);break}e&&L&&A.alternate===null&&t(p,L),f=l(A,f,O),N===null?b=A:N.sibling=A,N=A,L=M}if(O===g.length)return n(p,L),X&&mn(p,O),b;if(L===null){for(;O<g.length;O++)L=m(p,g[O],E),L!==null&&(f=l(L,f,O),N===null?b=L:N.sibling=L,N=L);return X&&mn(p,O),b}for(L=r(p,L);O<g.length;O++)M=S(L,p,O,g[O],E),M!==null&&(e&&M.alternate!==null&&L.delete(M.key===null?O:M.key),f=l(M,f,O),N===null?b=M:N.sibling=M,N=M);return e&&L.forEach(function(be){return t(p,be)}),X&&mn(p,O),b}function C(p,f,g,E){var b=Rr(g);if(typeof b!="function")throw Error($(150));if(g=b.call(g),g==null)throw Error($(151));for(var N=b=null,L=f,O=f=0,M=null,A=g.next();L!==null&&!A.done;O++,A=g.next()){L.index>O?(M=L,L=null):M=L.sibling;var be=h(p,L,A.value,E);if(be===null){L===null&&(L=M);break}e&&L&&be.alternate===null&&t(p,L),f=l(be,f,O),N===null?b=be:N.sibling=be,N=be,L=M}if(A.done)return n(p,L),X&&mn(p,O),b;if(L===null){for(;!A.done;O++,A=g.next())A=m(p,A.value,E),A!==null&&(f=l(A,f,O),N===null?b=A:N.sibling=A,N=A);return X&&mn(p,O),b}for(L=r(p,L);!A.done;O++,A=g.next())A=S(L,p,O,A.value,E),A!==null&&(e&&A.alternate!==null&&L.delete(A.key===null?O:A.key),f=l(A,f,O),N===null?b=A:N.sibling=A,N=A);return e&&L.forEach(function(Re){return t(p,Re)}),X&&mn(p,O),b}function P(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:e:{for(var b=g.key,N=f;N!==null;){if(N.key===b){if(b=g.type,b===Kn){if(N.tag===7){n(p,N.sibling),f=i(N,g.props.children),f.return=p,p=f;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ft&&Ac(b)===N.type){n(p,N.sibling),f=i(N,g.props),f.ref=Ur(p,N,g),f.return=p,p=f;break e}n(p,N);break}else t(p,N);N=N.sibling}g.type===Kn?(f=Sn(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=zl(g.type,g.key,g.props,null,p.mode,E),E.ref=Ur(p,f,g),E.return=p,p=E)}return o(p);case Qn:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ws(g,p.mode,E),f.return=p,p=f}return o(p);case Ft:return N=g._init,P(p,f,N(g._payload),E)}if(si(g))return k(p,f,g,E);if(Rr(g))return C(p,f,g,E);hl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ys(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return P}var pr=np(!0),rp=np(!1),Gl=rn(null),Jl=null,er=null,Ja=null;function Xa(){Ja=er=Jl=null}function Ma(e){var t=Gl.current;G(Gl),e._currentValue=t}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Jl=e,Ja=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(Jl===null)throw Error($(308));er=e,Jl.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var yn=null;function qa(e){yn===null?yn=[e]:yn.push(e)}function ip(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qa(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,qa(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function $l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xl(e,t,n,r){var i=e.updateQueue;Ut=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?l=d:o.next=d,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=u))}if(l!==null){var m=i.baseState;o=0,y=d=u=null,s=l;do{var h=s.lane,S=s.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,C=s;switch(h=t,S=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){m=k.call(S,m,h);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,h=typeof k=="function"?k.call(S,m,h):k,h==null)break e;m=ie({},m,h);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=S,u=m):y=y.next=S,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);$n|=o,e.lanes=o,e.memoizedState=m}}function Uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Zi={},Ct=rn(Zi),Ti=rn(Zi),zi=rn(Zi);function wn(e){if(e===Zi)throw Error($(174));return e}function tu(e,t){switch(Y(zi,t),Y(Ti,e),Y(Ct,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fs(t,e)}G(Ct),Y(Ct,t)}function hr(){G(Ct),G(Ti),G(zi)}function op(e){wn(zi.current);var t=wn(Ct.current),n=Fs(t,e.type);t!==n&&(Y(Ti,e),Y(Ct,n))}function nu(e){Ti.current===e&&(G(Ct),G(Ti))}var ne=rn(0);function Ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fs=[];function ru(){for(var e=0;e<fs.length;e++)fs[e]._workInProgressVersionPrimary=null;fs.length=0}var Ll=jt.ReactCurrentDispatcher,ps=jt.ReactCurrentBatchConfig,_n=0,re=null,me=null,ve=null,ql=!1,gi=!1,Oi=0,o1=0;function Ee(){throw Error($(321))}function iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function lu(e,t,n,r,i,l){if(_n=l,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ll.current=e===null||e.memoizedState===null?c1:d1,e=n(r,i),gi){l=0;do{if(gi=!1,Oi=0,25<=l)throw Error($(301));l+=1,ve=me=null,t.updateQueue=null,Ll.current=f1,e=n(r,i)}while(gi)}if(Ll.current=eo,t=me!==null&&me.next!==null,_n=0,ve=me=re=null,ql=!1,t)throw Error($(300));return e}function ou(){var e=Oi!==0;return Oi=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?re.memoizedState=ve=e:ve=ve.next=e,ve}function rt(){if(me===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?re.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error($(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?re.memoizedState=ve=e:ve=ve.next=e}return ve}function ji(e,t){return typeof t=="function"?t(e):t}function hs(e){var t=rt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,u=null,d=l;do{var y=d.lane;if((_n&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,o=r):u=u.next=m,re.lanes|=y,$n|=y}d=d.next}while(d!==null&&d!==l);u===null?o=r:u.next=s,ht(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,re.lanes|=l,$n|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ms(e){var t=rt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ht(l,t.memoizedState)||(Ae=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function sp(){}function ap(e,t){var n=re,r=rt(),i=t(),l=!ht(r.memoizedState,i);if(l&&(r.memoizedState=i,Ae=!0),r=r.queue,su(dp.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Ri(9,cp.bind(null,n,r,i,t),void 0,null),ye===null)throw Error($(349));_n&30||up(n,t,i)}return i}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,fp(t)&&pp(e)}function dp(e,t,n){return n(function(){fp(t)&&pp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function pp(e){var t=zt(e,1);t!==null&&pt(t,e,1,-1)}function Bc(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t.queue=e,e=e.dispatch=u1.bind(null,re,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hp(){return rt().memoizedState}function Pl(e,t,n,r){var i=vt();re.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var i=rt();r=r===void 0?null:r;var l=void 0;if(me!==null){var o=me.memoizedState;if(l=o.destroy,r!==null&&iu(r,o.deps)){i.memoizedState=Ri(t,n,l,r);return}}re.flags|=e,i.memoizedState=Ri(1|t,n,l,r)}function Wc(e,t){return Pl(8390656,8,e,t)}function su(e,t){return yo(2048,8,e,t)}function mp(e,t){return yo(4,2,e,t)}function gp(e,t){return yo(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yp(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,vp.bind(null,t,e),n)}function au(){}function wp(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xp(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sp(e,t,n){return _n&21?(ht(n,t)||(n=$f(),re.lanes|=n,$n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function s1(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=ps.transition;ps.transition={};try{e(!1),t()}finally{Q=n,ps.transition=r}}function Cp(){return rt().memoizedState}function a1(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(e))Ep(t,n);else if(n=ip(e,t,n,r),n!==null){var i=ze();pt(n,e,r,i),_p(n,t,r)}}function u1(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(e))Ep(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,ht(s,o)){var u=t.interleaved;u===null?(i.next=i,qa(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ip(e,t,i,r),n!==null&&(i=ze(),pt(n,e,r,i),_p(n,t,r))}}function kp(e){var t=e.alternate;return e===re||t!==null&&t===re}function Ep(e,t){gi=ql=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _p(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}var eo={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},c1={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pl(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pl(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=a1.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Bc,useDebugValue:au,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Bc(!1),t=e[0];return e=s1.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=vt();if(X){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ye===null)throw Error($(349));_n&30||up(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Wc(dp.bind(null,r,l,e),[e]),r.flags|=2048,Ri(9,cp.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=vt(),t=ye.identifierPrefix;if(X){var n=Lt,r=$t;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=o1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d1={readContext:nt,useCallback:wp,useContext:nt,useEffect:su,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:hs,useRef:hp,useState:function(){return hs(ji)},useDebugValue:au,useDeferredValue:function(e){var t=rt();return Sp(t,me.memoizedState,e)},useTransition:function(){var e=hs(ji)[0],t=rt().memoizedState;return[e,t]},useMutableSource:sp,useSyncExternalStore:ap,useId:Cp,unstable_isNewReconciler:!1},f1={readContext:nt,useCallback:wp,useContext:nt,useEffect:su,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:ms,useRef:hp,useState:function(){return ms(ji)},useDebugValue:au,useDeferredValue:function(e){var t=rt();return me===null?t.memoizedState=e:Sp(t,me.memoizedState,e)},useTransition:function(){var e=ms(ji)[0],t=rt().memoizedState;return[e,t]},useMutableSource:sp,useSyncExternalStore:ap,useId:Cp,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wo={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Mt(e),l=bt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,i),t!==null&&(pt(t,e,i,r),$l(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Mt(e),l=bt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,i),t!==null&&(pt(t,e,i,r),$l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Mt(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(pt(t,e,r,n),$l(t,e,r))}};function Vc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Li(n,r)||!Li(i,l):!0}function $p(e,t,n){var r=!1,i=tn,l=t.contextType;return typeof l=="object"&&l!==null?l=nt(l):(i=Ue(t)?kn:Pe.current,r=t.contextTypes,l=(r=r!=null)?dr(e,i):tn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wo.enqueueReplaceState(t,t.state,null)}function sa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eu(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=nt(l):(l=Ue(t)?kn:Pe.current,i.context=dr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(oa(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wo.enqueueReplaceState(i,i.state,null),Xl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var n="",r=t;do n+=Um(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function gs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p1=typeof WeakMap=="function"?WeakMap:Map;function Lp(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){no||(no=!0,ya=r),aa(e,t)},n}function Pp(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){aa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){aa(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new p1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=L1.bind(null,e,t,n),t.then(e,e))}function Kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var h1=jt.ReactCurrentOwner,Ae=!1;function Te(e,t,n,r){t.child=e===null?rp(t,null,n,r):pr(t,e.child,n,r)}function Zc(e,t,n,r,i){n=n.render;var l=t.ref;return sr(t,i),r=lu(e,t,n,r,l,i),n=ou(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ot(e,t,i)):(X&&n&&Ya(t),t.flags|=1,Te(e,t,r,i),t.child)}function Gc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!gu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,bp(e,t,l,r,i)):(e=zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(o,r)&&e.ref===t.ref)return Ot(e,t,i)}return t.flags|=1,e=qt(l,r),e.ref=t.ref,e.return=t,t.child=e}function bp(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Li(l,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Ot(e,t,i)}return ua(e,t,n,r,i)}function Np(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(nr,He),He|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(nr,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Y(nr,He),He|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Y(nr,He),He|=r;return Te(e,t,i,n),t.child}function Tp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ua(e,t,n,r,i){var l=Ue(n)?kn:Pe.current;return l=dr(t,l),sr(t,i),n=lu(e,t,n,r,l,i),r=ou(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ot(e,t,i)):(X&&r&&Ya(t),t.flags|=1,Te(e,t,n,i),t.child)}function Jc(e,t,n,r,i){if(Ue(n)){var l=!0;Kl(t)}else l=!1;if(sr(t,i),t.stateNode===null)bl(e,t),$p(t,n,r),sa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=nt(d):(d=Ue(n)?kn:Pe.current,d=dr(t,d));var y=n.getDerivedStateFromProps,m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Hc(t,o,r,d),Ut=!1;var h=t.memoizedState;o.state=h,Xl(t,r,o,i),u=t.memoizedState,s!==r||h!==u||Fe.current||Ut?(typeof y=="function"&&(oa(t,n,y,r),u=t.memoizedState),(s=Ut||Vc(t,n,s,r,h,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,lp(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:ut(t.type,s),o.props=d,m=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nt(u):(u=Ue(n)?kn:Pe.current,u=dr(t,u));var S=n.getDerivedStateFromProps;(y=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||h!==u)&&Hc(t,o,r,u),Ut=!1,h=t.memoizedState,o.state=h,Xl(t,r,o,i);var k=t.memoizedState;s!==m||h!==k||Fe.current||Ut?(typeof S=="function"&&(oa(t,n,S,r),k=t.memoizedState),(d=Ut||Vc(t,n,d,r,h,k,u)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ca(e,t,n,r,l,i)}function ca(e,t,n,r,i,l){Tp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Rc(t,n,!1),Ot(e,t,l);r=t.stateNode,h1.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pr(t,e.child,null,l),t.child=pr(t,null,s,l)):Te(e,t,s,l),t.memoizedState=r.state,i&&Rc(t,n,!0),t.child}function zp(e){var t=e.stateNode;t.pendingContext?jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jc(e,t.context,!1),tu(e,t.containerInfo)}function Xc(e,t,n,r,i){return fr(),Ga(i),t.flags|=256,Te(e,t,n,r),t.child}var da={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Op(e,t,n){var r=t.pendingProps,i=ne.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ne,i&1),e===null)return ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Co(o,r,0,null),e=Sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=fa(n),t.memoizedState=da,e):uu(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return m1(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=qt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=qt(s,l):(l=Sn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?fa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=da,r}return l=e.child,e=l.sibling,r=qt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uu(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ml(e,t,n,r){return r!==null&&Ga(r),pr(t,e.child,null,n),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m1(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=gs(Error($(422))),ml(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),l=Sn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&pr(t,e.child,null,o),t.child.memoizedState=fa(o),t.memoizedState=da,l);if(!(t.mode&1))return ml(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error($(419)),r=gs(l,r,void 0),ml(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ae||s){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,zt(e,i),pt(r,e,i,-1))}return mu(),r=gs(Error($(421))),ml(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=P1.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Qe=Gt(i.nextSibling),Ke=t,X=!0,dt=null,e!==null&&(Me[qe++]=$t,Me[qe++]=Lt,Me[qe++]=En,$t=e.id,Lt=e.overflow,En=t),t=uu(t,r.children),t.flags|=4096,t)}function Mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function vs(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function jp(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Te(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mc(e,n,t);else if(e.tag===19)Mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ml(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vs(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ml(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vs(t,!0,n,null,l);break;case"together":vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function g1(e,t,n){switch(t.tag){case 3:zp(t),fr();break;case 5:op(t);break;case 1:Ue(t.type)&&Kl(t);break;case 4:tu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Gl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Op(e,t,n):(Y(ne,ne.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);Y(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Np(e,t,n)}return Ot(e,t,n)}var Rp,pa,Dp,Ip;Rp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pa=function(){};Dp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(Ct.current);var l=null;switch(n){case"input":i=Rs(e,i),r=Rs(e,r),l=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),l=[];break;case"textarea":i=As(e,i),r=As(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hl)}Us(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xi.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xi.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Z("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Ip=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function v1(e,t,n){var r=t.pendingProps;switch(Za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ue(t.type)&&Ql(),_e(t),null;case 3:return r=t.stateNode,hr(),G(Fe),G(Pe),ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Sa(dt),dt=null))),pa(e,t),_e(t),null;case 5:nu(t);var i=wn(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)Dp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return _e(t),null}if(e=wn(Ct.current),pl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[xt]=t,r[Ni]=l,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)Z(ui[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":sc(r,l),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Z("invalid",r);break;case"textarea":uc(r,l),Z("invalid",r)}Us(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&fl(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&fl(r.textContent,s,e),i=["children",""+s]):xi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":il(r),ac(r,l,!0);break;case"textarea":il(r),cc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=df(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[Ni]=r,Rp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bs(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)Z(ui[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":sc(e,r),i=Rs(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Z("invalid",e);break;case"textarea":uc(e,r),i=As(e,r),Z("invalid",e);break;default:i=r}Us(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?hf(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ff(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Si(e,u):typeof u=="number"&&Si(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xi.hasOwnProperty(l)?u!=null&&l==="onScroll"&&Z("scroll",e):u!=null&&Oa(e,l,u,o))}switch(n){case"input":il(e),ac(e,r,!1);break;case"textarea":il(e),cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?rr(e,!!r.multiple,l,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Ip(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=wn(zi.current),wn(Ct.current),pl(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(l=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:fl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return _e(t),null;case 13:if(G(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Qe!==null&&t.mode&1&&!(t.flags&128))tp(),fr(),t.flags|=98560,l=!1;else if(l=pl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error($(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error($(317));l[xt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),l=!1}else dt!==null&&(Sa(dt),dt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ge===0&&(ge=3):mu())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return hr(),pa(e,t),e===null&&Pi(t.stateNode.containerInfo),_e(t),null;case 10:return Ma(t.type._context),_e(t),null;case 17:return Ue(t.type)&&Ql(),_e(t),null;case 19:if(G(ne),l=t.memoizedState,l===null)return _e(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Br(l,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ml(e),o!==null){for(t.flags|=128,Br(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ne,ne.current&1|2),t.child}e=e.sibling}l.tail!==null&&ue()>gr&&(t.flags|=128,r=!0,Br(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ml(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!X)return _e(t),null}else 2*ue()-l.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Br(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ue(),t.sibling=null,n=ne.current,Y(ne,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return hu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function y1(e,t){switch(Za(t),t.tag){case 1:return Ue(t.type)&&Ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),G(Fe),G(Pe),ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nu(t),null;case 13:if(G(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(ne),null;case 4:return hr(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var gl=!1,Le=!1,w1=typeof WeakSet=="function"?WeakSet:Set,z=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function ha(e,t,n){try{n()}catch(r){oe(e,t,r)}}var qc=!1;function x1(e,t){if(Xs=Bl,e=Wf(),Ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,y=0,m=e,h=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(s=o+i),m!==l||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)h=m,m=S;for(;;){if(m===e)break t;if(h===n&&++d===i&&(s=o),h===l&&++y===r&&(u=o),(S=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},Bl=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,P=k.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:ut(t.type,C),P);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(E){oe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return k=qc,qc=!1,k}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ha(t,n,l)}i=i.next}while(i!==r)}}function xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ap(e){var t=e.alternate;t!==null&&(e.alternate=null,Ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Ni],delete t[ta],delete t[n1],delete t[r1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hl));else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}var xe=null,ct=!1;function At(e,t,n){for(n=n.child;n!==null;)Up(e,t,n),n=n.sibling}function Up(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(fo,n)}catch{}switch(n.tag){case 5:Le||tr(n,t);case 6:var r=xe,i=ct;xe=null,At(e,t,n),xe=r,ct=i,xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?cs(e.parentNode,n):e.nodeType===1&&cs(e,n),_i(e)):cs(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,At(e,t,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ha(n,t,o),i=i.next}while(i!==r)}At(e,t,n);break;case 1:if(!Le&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,At(e,t,n),Le=r):At(e,t,n);break;default:At(e,t,n)}}function td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new w1),t.forEach(function(r){var i=b1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,ct=!1;break e;case 3:xe=s.stateNode.containerInfo,ct=!0;break e;case 4:xe=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(xe===null)throw Error($(160));Up(l,o,i),xe=null,ct=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){oe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{vi(3,e,e.return),xo(3,e)}catch(C){oe(e,e.return,C)}try{vi(5,e,e.return)}catch(C){oe(e,e.return,C)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(C){oe(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&uf(i,l),Bs(s,o);var d=Bs(s,l);for(o=0;o<u.length;o+=2){var y=u[o],m=u[o+1];y==="style"?hf(i,m):y==="dangerouslySetInnerHTML"?ff(i,m):y==="children"?Si(i,m):Oa(i,y,m,d)}switch(s){case"input":Ds(i,l);break;case"textarea":cf(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?rr(i,!!l.multiple,S,!1):h!==!!l.multiple&&(l.defaultValue!=null?rr(i,!!l.multiple,l.defaultValue,!0):rr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ni]=l}catch(C){oe(e,e.return,C)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(C){oe(e,e.return,C)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(t.containerInfo)}catch(C){oe(e,e.return,C)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(fu=ue())),r&4&&td(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(d=Le)||y,at(t,e),Le=d):at(t,e),gt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(z=e,y=e.child;y!==null;){for(m=z=y;z!==null;){switch(h=z,S=h.child,h.tag){case 0:case 11:case 14:case 15:vi(4,h,h.return);break;case 1:tr(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(C){oe(r,n,C)}}break;case 5:tr(h,h.return);break;case 22:if(h.memoizedState!==null){rd(m);continue}}S!==null?(S.return=h,z=S):rd(m)}y=y.sibling}e:for(y=null,m=e;;){if(m.tag===5){if(y===null){y=m;try{i=m.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=pf("display",o))}catch(C){oe(e,e.return,C)}}}else if(m.tag===6){if(y===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(C){oe(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;y===m&&(y=null),m=m.return}y===m&&(y=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:at(t,e),gt(e),r&4&&td(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var l=ed(e);va(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ed(e);ga(e,s,o);break;default:throw Error($(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S1(e,t,n){z=e,Wp(e)}function Wp(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gl;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Le;s=gl;var d=Le;if(gl=o,(Le=u)&&!d)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?id(i):u!==null?(u.return=o,z=u):id(i);for(;l!==null;)z=l,Wp(l),l=l.sibling;z=i,gl=s,Le=d}nd(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,z=l):nd(e)}}function nd(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Uc(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var m=y.dehydrated;m!==null&&_i(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Le||t.flags&512&&ma(t)}catch(h){oe(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function rd(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function id(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xo(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){oe(t,i,u)}}var l=t.return;try{ma(t)}catch(u){oe(t,l,u)}break;case 5:var o=t.return;try{ma(t)}catch(u){oe(t,o,u)}}}catch(u){oe(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var C1=Math.ceil,to=jt.ReactCurrentDispatcher,cu=jt.ReactCurrentOwner,tt=jt.ReactCurrentBatchConfig,B=0,ye=null,de=null,Ce=0,He=0,nr=rn(0),ge=0,Di=null,$n=0,So=0,du=0,yi=null,Ie=null,fu=0,gr=1/0,Et=null,no=!1,ya=null,Xt=null,vl=!1,Ht=null,ro=0,wi=0,wa=null,Nl=-1,Tl=0;function ze(){return B&6?ue():Nl!==-1?Nl:Nl=ue()}function Mt(e){return e.mode&1?B&2&&Ce!==0?Ce&-Ce:l1.transition!==null?(Tl===0&&(Tl=$f()),Tl):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Of(e.type)),e):1}function pt(e,t,n,r){if(50<wi)throw wi=0,wa=null,Error($(185));Qi(e,n,r),(!(B&2)||e!==ye)&&(e===ye&&(!(B&2)&&(So|=n),ge===4&&Wt(e,Ce)),Be(e,r),n===1&&B===0&&!(t.mode&1)&&(gr=ue()+500,vo&&ln()))}function Be(e,t){var n=e.callbackNode;l0(e,t);var r=Ul(e,e===ye?Ce:0);if(r===0)n!==null&&pc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pc(n),t===1)e.tag===0?i1(ld.bind(null,e)):Mf(ld.bind(null,e)),e1(function(){!(B&6)&&ln()}),n=null;else{switch(Lf(r)){case 1:n=Aa;break;case 4:n=Ef;break;case 16:n=Fl;break;case 536870912:n=_f;break;default:n=Fl}n=Jp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(Nl=-1,Tl=0,B&6)throw Error($(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=Ul(e,e===ye?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=io(e,r);else{t=r;var i=B;B|=2;var l=Qp();(ye!==e||Ce!==t)&&(Et=null,gr=ue()+500,xn(e,t));do try{_1();break}catch(s){Hp(e,s)}while(!0);Xa(),to.current=l,B=i,de!==null?t=0:(ye=null,Ce=0,t=ge)}if(t!==0){if(t===2&&(i=Ks(e),i!==0&&(r=i,t=xa(e,i))),t===1)throw n=Di,xn(e,0),Wt(e,r),Be(e,ue()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!k1(i)&&(t=io(e,r),t===2&&(l=Ks(e),l!==0&&(r=l,t=xa(e,l))),t===1))throw n=Di,xn(e,0),Wt(e,r),Be(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:gn(e,Ie,Et);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=fu+500-ue(),10<t)){if(Ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ea(gn.bind(null,e,Ie,Et),t);break}gn(e,Ie,Et);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ft(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*C1(r/1960))-r,10<r){e.timeoutHandle=ea(gn.bind(null,e,Ie,Et),r);break}gn(e,Ie,Et);break;case 5:gn(e,Ie,Et);break;default:throw Error($(329))}}}return Be(e,ue()),e.callbackNode===n?Vp.bind(null,e):null}function xa(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=io(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Sa(t)),e}function Sa(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function k1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!ht(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~du,t&=~So,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function ld(e){if(B&6)throw Error($(327));ar();var t=Ul(e,0);if(!(t&1))return Be(e,ue()),null;var n=io(e,t);if(e.tag!==0&&n===2){var r=Ks(e);r!==0&&(t=r,n=xa(e,r))}if(n===1)throw n=Di,xn(e,0),Wt(e,t),Be(e,ue()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Ie,Et),Be(e,ue()),null}function pu(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(gr=ue()+500,vo&&ln())}}function Ln(e){Ht!==null&&Ht.tag===0&&!(B&6)&&ar();var t=B;B|=1;var n=tt.transition,r=Q;try{if(tt.transition=null,Q=1,e)return e()}finally{Q=r,tt.transition=n,B=t,!(B&6)&&ln()}}function hu(){He=nr.current,G(nr)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,q0(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:hr(),G(Fe),G(Pe),ru();break;case 5:nu(r);break;case 4:hr();break;case 13:G(ne);break;case 19:G(ne);break;case 10:Ma(r.type._context);break;case 22:case 23:hu()}n=n.return}if(ye=e,de=e=qt(e.current,null),Ce=He=t,ge=0,Di=null,du=So=$n=0,Ie=yi=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}yn=null}return e}function Hp(e,t){do{var n=de;try{if(Xa(),Ll.current=eo,ql){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(_n=0,ve=me=re=null,gi=!1,Oi=0,cu.current=null,n===null||n.return===null){ge=1,Di=t,de=null;break}e:{var l=e,o=n.return,s=n,u=t;if(t=Ce,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=s,m=y.tag;if(!(y.mode&1)&&(m===0||m===11||m===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Kc(o);if(S!==null){S.flags&=-257,Yc(S,o,s,l,t),S.mode&1&&Qc(l,d,t),t=S,u=d;var k=t.updateQueue;if(k===null){var C=new Set;C.add(u),t.updateQueue=C}else k.add(u);break e}else{if(!(t&1)){Qc(l,d,t),mu();break e}u=Error($(426))}}else if(X&&s.mode&1){var P=Kc(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Yc(P,o,s,l,t),Ga(mr(u,s));break e}}l=u=mr(u,s),ge!==4&&(ge=2),yi===null?yi=[l]:yi.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Lp(l,u,t);Fc(l,p);break e;case 1:s=u;var f=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xt===null||!Xt.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=Pp(l,s,t);Fc(l,E);break e}}l=l.return}while(l!==null)}Yp(n)}catch(b){t=b,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Qp(){var e=to.current;return to.current=eo,e===null?eo:e}function mu(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||!($n&268435455)&&!(So&268435455)||Wt(ye,Ce)}function io(e,t){var n=B;B|=2;var r=Qp();(ye!==e||Ce!==t)&&(Et=null,xn(e,t));do try{E1();break}catch(i){Hp(e,i)}while(!0);if(Xa(),B=n,to.current=r,de!==null)throw Error($(261));return ye=null,Ce=0,ge}function E1(){for(;de!==null;)Kp(de)}function _1(){for(;de!==null&&!Jm();)Kp(de)}function Kp(e){var t=Gp(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Yp(e):de=t,cu.current=null}function Yp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=y1(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,de=null;return}}else if(n=v1(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ge===0&&(ge=5)}function gn(e,t,n){var r=Q,i=tt.transition;try{tt.transition=null,Q=1,$1(e,t,n,r)}finally{tt.transition=i,Q=r}return null}function $1(e,t,n,r){do ar();while(Ht!==null);if(B&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(o0(e,l),e===ye&&(de=ye=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,Jp(Fl,function(){return ar(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=tt.transition,tt.transition=null;var o=Q;Q=1;var s=B;B|=4,cu.current=null,x1(e,n),Bp(n,e),K0(Ms),Bl=!!Xs,Ms=Xs=null,e.current=n,S1(n),Xm(),B=s,Q=o,tt.transition=l}else e.current=n;if(vl&&(vl=!1,Ht=e,ro=i),l=e.pendingLanes,l===0&&(Xt=null),e0(n.stateNode),Be(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(no)throw no=!1,e=ya,ya=null,e;return ro&1&&e.tag!==0&&ar(),l=e.pendingLanes,l&1?e===wa?wi++:(wi=0,wa=e):wi=0,ln(),null}function ar(){if(Ht!==null){var e=Lf(ro),t=tt.transition,n=Q;try{if(tt.transition=null,Q=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,ro=0,B&6)throw Error($(331));var i=B;for(B|=4,z=e.current;z!==null;){var l=z,o=l.child;if(z.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(z=d;z!==null;){var y=z;switch(y.tag){case 0:case 11:case 15:vi(8,y,l)}var m=y.child;if(m!==null)m.return=y,z=m;else for(;z!==null;){y=z;var h=y.sibling,S=y.return;if(Ap(y),y===d){z=null;break}if(h!==null){h.return=S,z=h;break}z=S}}}var k=l.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}z=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,z=o;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:vi(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,z=p;break e}z=l.return}}var f=e.current;for(z=f;z!==null;){o=z;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,z=g;else e:for(o=f;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xo(9,s)}}catch(b){oe(s,s.return,b)}if(s===o){z=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,z=E;break e}z=s.return}}if(B=i,ln(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(fo,e)}catch{}r=!0}return r}finally{Q=n,tt.transition=t}}return!1}function od(e,t,n){t=mr(n,t),t=Lp(e,t,1),e=Jt(e,t,1),t=ze(),e!==null&&(Qi(e,1,t),Be(e,t))}function oe(e,t,n){if(e.tag===3)od(e,e,n);else for(;t!==null;){if(t.tag===3){od(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=mr(n,e),e=Pp(t,e,1),t=Jt(t,e,1),e=ze(),t!==null&&(Qi(t,1,e),Be(t,e));break}}t=t.return}}function L1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Ce&n)===n&&(ge===4||ge===3&&(Ce&130023424)===Ce&&500>ue()-fu?xn(e,0):du|=n),Be(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):t=1);var n=ze();e=zt(e,t),e!==null&&(Qi(e,t,n),Be(e,n))}function P1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function b1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Zp(e,n)}var Gp;Gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,g1(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,X&&t.flags&1048576&&qf(t,Zl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bl(e,t),e=t.pendingProps;var i=dr(t,Pe.current);sr(t,n),i=lu(null,t,r,e,i,n);var l=ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(l=!0,Kl(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eu(t),i.updater=wo,t.stateNode=i,i._reactInternals=t,sa(t,r,e,n),t=ca(null,t,r,!0,l,n)):(t.tag=0,X&&l&&Ya(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T1(r),e=ut(r,e),i){case 0:t=ua(null,t,r,e,n);break e;case 1:t=Jc(null,t,r,e,n);break e;case 11:t=Zc(null,t,r,e,n);break e;case 14:t=Gc(null,t,r,ut(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ua(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Jc(e,t,r,i,n);case 3:e:{if(zp(t),e===null)throw Error($(387));r=t.pendingProps,l=t.memoizedState,i=l.element,lp(e,t),Xl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=mr(Error($(423)),t),t=Xc(e,t,r,n,i);break e}else if(r!==i){i=mr(Error($(424)),t),t=Xc(e,t,r,n,i);break e}else for(Qe=Gt(t.stateNode.containerInfo.firstChild),Ke=t,X=!0,dt=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=Ot(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return op(t),e===null&&ia(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,qs(r,i)?o=null:l!==null&&qs(r,l)&&(t.flags|=32),Tp(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&ia(t),null;case 13:return Op(e,t,n);case 4:return tu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Zc(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,Y(Gl,r._currentValue),r._currentValue=o,l!==null)if(ht(l.value,o)){if(l.children===i.children&&!Fe.current){t=Ot(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=bt(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),la(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error($(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),la(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sr(t,n),i=nt(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Gc(e,t,r,i,n);case 15:return bp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),bl(e,t),t.tag=1,Ue(r)?(e=!0,Kl(t)):e=!1,sr(t,n),$p(t,r,i),sa(t,r,i,n),ca(null,t,r,!0,e,n);case 19:return jp(e,t,n);case 22:return Np(e,t,n)}throw Error($(156,t.tag))};function Jp(e,t){return kf(e,t)}function N1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new N1(e,t,n,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T1(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ra)return 11;if(e===Da)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")gu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return Sn(n.children,i,l,t);case ja:o=8,i|=8;break;case Ts:return e=et(12,n,t,i|2),e.elementType=Ts,e.lanes=l,e;case zs:return e=et(13,n,t,i),e.elementType=zs,e.lanes=l,e;case Os:return e=et(19,n,t,i),e.elementType=Os,e.lanes=l,e;case of:return Co(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rf:o=10;break e;case lf:o=9;break e;case Ra:o=11;break e;case Da:o=14;break e;case Ft:o=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=et(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Sn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=et(22,e,r,t),e.elementType=of,e.lanes=n,e.stateNode={isHidden:!1},e}function ys(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vu(e,t,n,r,i,l,o,s,u){return e=new z1(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=et(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(l),e}function O1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return tn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Xf(e,n,t)}return t}function Mp(e,t,n,r,i,l,o,s,u){return e=vu(n,r,!0,e,i,l,o,s,u),e.context=Xp(null),n=e.current,r=ze(),i=Mt(n),l=bt(r,i),l.callback=t??null,Jt(n,l,i),e.current.lanes=i,Qi(e,i,r),Be(e,r),e}function ko(e,t,n,r){var i=t.current,l=ze(),o=Mt(i);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,o),e!==null&&(pt(e,i,o,l),$l(e,i,o)),o}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yu(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function j1(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function wu(e){this._internalRoot=e}Eo.prototype.render=wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));ko(e,t,null,null)};Eo.prototype.unmount=wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){ko(null,e,null,null)}),t[Tt]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&zf(e)}};function xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function R1(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=lo(o);l.call(d)}}var o=Mp(t,r,e,0,null,!1,!1,"",ad);return e._reactRootContainer=o,e[Tt]=o.current,Pi(e.nodeType===8?e.parentNode:e),Ln(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=lo(u);s.call(d)}}var u=vu(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=u,e[Tt]=u.current,Pi(e.nodeType===8?e.parentNode:e),Ln(function(){ko(t,u,n,r)}),u}function $o(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var u=lo(o);s.call(u)}}ko(t,o,e,i)}else o=R1(n,t,e,i,r);return lo(o)}Pf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ai(t.pendingLanes);n!==0&&(Fa(t,n|1),Be(t,ue()),!(B&6)&&(gr=ue()+500,ln()))}break;case 13:Ln(function(){var r=zt(e,1);if(r!==null){var i=ze();pt(r,e,1,i)}}),yu(e,1)}};Ua=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=ze();pt(t,e,134217728,n)}yu(e,134217728)}};bf=function(e){if(e.tag===13){var t=Mt(e),n=zt(e,t);if(n!==null){var r=ze();pt(n,e,t,r)}yu(e,t)}};Nf=function(){return Q};Tf=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Vs=function(e,t,n){switch(t){case"input":if(Ds(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=go(r);if(!i)throw Error($(90));af(r),Ds(r,i)}}}break;case"textarea":cf(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};vf=pu;yf=Ln;var D1={usingClientEntryPoint:!1,Events:[Yi,Jn,go,mf,gf,pu]},Wr={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I1={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||j1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{fo=yl.inject(I1),St=yl}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(t))throw Error($(200));return O1(e,t,null,n)};Ge.createRoot=function(e,t){if(!xu(e))throw Error($(299));var n=!1,r="",i=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vu(e,1,!1,null,null,n,!1,r,i),e[Tt]=t.current,Pi(e.nodeType===8?e.parentNode:e),new wu(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Sf(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Ln(e)};Ge.hydrate=function(e,t,n){if(!_o(t))throw Error($(200));return $o(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!xu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=qp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mp(t,null,e,1,n??null,i,!1,l,o),e[Tt]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};Ge.render=function(e,t,n){if(!_o(t))throw Error($(200));return $o(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!_o(e))throw Error($(40));return e._reactRootContainer?(Ln(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Ge.unstable_batchedUpdates=pu;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return $o(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function eh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh)}catch(e){console.error(e)}}eh(),qd.exports=Ge;var A1=qd.exports,ud=A1;bs.createRoot=ud.createRoot,bs.hydrateRoot=ud.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const cd="popstate";function F1(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return Ca("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:th(i)}return B1(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Su(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function U1(){return Math.random().toString(36).substr(2,8)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,r){return n===void 0&&(n=null),Ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Sr(t):t,{state:n,key:t&&t.key||r||U1()})}function th(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function B1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=Qt.Pop,u=null,d=y();d==null&&(d=0,o.replaceState(Ii({},o.state,{idx:d}),""));function y(){return(o.state||{idx:null}).idx}function m(){s=Qt.Pop;let P=y(),p=P==null?null:P-d;d=P,u&&u({action:s,location:C.location,delta:p})}function h(P,p){s=Qt.Push;let f=Ca(C.location,P,p);d=y()+1;let g=dd(f,d),E=C.createHref(f);try{o.pushState(g,"",E)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(E)}l&&u&&u({action:s,location:C.location,delta:1})}function S(P,p){s=Qt.Replace;let f=Ca(C.location,P,p);d=y();let g=dd(f,d),E=C.createHref(f);o.replaceState(g,"",E),l&&u&&u({action:s,location:C.location,delta:0})}function k(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof P=="string"?P:th(P);return f=f.replace(/ $/,"%20"),fe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let C={get action(){return s},get location(){return e(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(cd,m),u=P,()=>{i.removeEventListener(cd,m),u=null}},createHref(P){return t(i,P)},createURL:k,encodeLocation(P){let p=k(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:S,go(P){return o.go(P)}};return C}var fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fd||(fd={}));function W1(e,t,n){return n===void 0&&(n="/"),V1(e,t,n)}function V1(e,t,n,r){let i=typeof t=="string"?Sr(t):t,l=ih(i.pathname||"/",n);if(l==null)return null;let o=nh(e);H1(o);let s=null;for(let u=0;s==null&&u<o.length;++u){let d=ng(l);s=q1(o[u],d)}return s}function nh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let u={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};u.relativePath.startsWith("/")&&(fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Cn([r,u.relativePath]),y=n.concat(u);l.children&&l.children.length>0&&(fe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),nh(l.children,t,y,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:X1(d,l.index),routesMeta:y})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let u of rh(l.path))i(l,o,u)}),t}function rh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=rh(r.join("/")),s=[];return s.push(...o.map(u=>u===""?l:[l,u].join("/"))),i&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function H1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Q1=/^:[\w-]+$/,K1=3,Y1=2,Z1=1,G1=10,J1=-2,pd=e=>e==="*";function X1(e,t){let n=e.split("/"),r=n.length;return n.some(pd)&&(r+=J1),t&&(r+=Y1),n.filter(i=>!pd(i)).reduce((i,l)=>i+(Q1.test(l)?K1:l===""?Z1:G1),r)}function M1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function q1(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],d=s===r.length-1,y=l==="/"?t:t.slice(l.length)||"/",m=eg({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},y),h=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Cn([l,m.pathname]),pathnameBase:sg(Cn([l,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(l=Cn([l,m.pathnameBase]))}return o}function eg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,y,m)=>{let{paramName:h,isOptional:S}=y;if(h==="*"){let C=s[m]||"";o=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const k=s[m];return S&&!k?d[h]=void 0:d[h]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:o,pattern:e}}function tg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Su(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ng(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Su(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ih(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ig=e=>rg.test(e);function lg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Sr(e):e,l;if(n)if(ig(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Su(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=hd(n.substring(1),"/"):l=hd(n,t)}else l=t;return{pathname:l,search:ag(r),hash:ug(i)}}function hd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function og(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lh(e,t){let n=og(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function oh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Sr(e):(i=Ii({},e),fe(!i.pathname||!i.pathname.includes("?"),xs("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),xs("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),xs("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}s=m>=0?t[m]:"/"}let u=lg(i,s),d=o&&o!=="/"&&o.endsWith("/"),y=(l||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||y)&&(u.pathname+="/"),u}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),sg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ag=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ug=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sh=["post","put","patch","delete"];new Set(sh);const dg=["get",...sh];new Set(dg);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}const Cu=x.createContext(null),fg=x.createContext(null),Gi=x.createContext(null),Lo=x.createContext(null),Nn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),ah=x.createContext(null);function Ji(){return x.useContext(Lo)!=null}function ku(){return Ji()||fe(!1),x.useContext(Lo).location}function uh(e){x.useContext(Gi).static||x.useLayoutEffect(e)}function Xi(){let{isDataRoute:e}=x.useContext(Nn);return e?_g():pg()}function pg(){Ji()||fe(!1);let e=x.useContext(Cu),{basename:t,future:n,navigator:r}=x.useContext(Gi),{matches:i}=x.useContext(Nn),{pathname:l}=ku(),o=JSON.stringify(lh(i,n.v7_relativeSplatPath)),s=x.useRef(!1);return uh(()=>{s.current=!0}),x.useCallback(function(d,y){if(y===void 0&&(y={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let m=oh(d,JSON.parse(o),l,y.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Cn([t,m.pathname])),(y.replace?r.replace:r.push)(m,y.state,y)},[t,r,o,l,e])}function hg(e,t){return mg(e,t)}function mg(e,t,n,r){Ji()||fe(!1);let{navigator:i}=x.useContext(Gi),{matches:l}=x.useContext(Nn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=ku(),y;if(t){var m;let P=typeof t=="string"?Sr(t):t;u==="/"||(m=P.pathname)!=null&&m.startsWith(u)||fe(!1),y=P}else y=d;let h=y.pathname||"/",S=h;if(u!=="/"){let P=u.replace(/^\//,"").split("/");S="/"+h.replace(/^\//,"").split("/").slice(P.length).join("/")}let k=W1(e,{pathname:S}),C=xg(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:Cn([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Cn([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&C?x.createElement(Lo.Provider,{value:{location:Ai({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Qt.Pop}},C):C}function gg(){let e=Eg(),t=cg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const vg=x.createElement(gg,null);class yg extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(Nn.Provider,{value:this.props.routeContext},x.createElement(ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wg(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Cu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Nn.Provider,{value:t},r)}function xg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let y=o.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);y>=0||fe(!1),o=o.slice(0,Math.min(o.length,y+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let y=0;y<o.length;y++){let m=o[y];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=y),m.route.id){let{loaderData:h,errors:S}=n,k=m.route.loader&&h[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||k){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((y,m,h)=>{let S,k=!1,C=null,P=null;n&&(S=s&&m.route.id?s[m.route.id]:void 0,C=m.route.errorElement||vg,u&&(d<0&&h===0?($g("route-fallback"),k=!0,P=null):d===h&&(k=!0,P=m.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,h+1)),f=()=>{let g;return S?g=C:k?g=P:m.route.Component?g=x.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=y,x.createElement(wg,{match:m,routeContext:{outlet:y,matches:p,isDataRoute:n!=null},children:g})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?x.createElement(yg,{location:n.location,revalidation:n.revalidation,component:C,error:S,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var ch=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ch||{}),dh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dh||{});function Sg(e){let t=x.useContext(Cu);return t||fe(!1),t}function Cg(e){let t=x.useContext(fg);return t||fe(!1),t}function kg(e){let t=x.useContext(Nn);return t||fe(!1),t}function fh(e){let t=kg(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Eg(){var e;let t=x.useContext(ah),n=Cg(),r=fh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _g(){let{router:e}=Sg(ch.UseNavigateStable),t=fh(dh.UseNavigateStable),n=x.useRef(!1);return uh(()=>{n.current=!0}),x.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ai({fromRouteId:t},l)))},[e,t])}const md={};function $g(e,t,n){md[e]||(md[e]=!0)}function Lg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pg(e){let{to:t,replace:n,state:r,relative:i}=e;Ji()||fe(!1);let{future:l,static:o}=x.useContext(Gi),{matches:s}=x.useContext(Nn),{pathname:u}=ku(),d=Xi(),y=oh(t,lh(s,l.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(y);return x.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function Vn(e){fe(!1)}function bg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:l,static:o=!1,future:s}=e;Ji()&&fe(!1);let u=t.replace(/^\/*/,"/"),d=x.useMemo(()=>({basename:u,navigator:l,static:o,future:Ai({v7_relativeSplatPath:!1},s)}),[u,s,l,o]);typeof r=="string"&&(r=Sr(r));let{pathname:y="/",search:m="",hash:h="",state:S=null,key:k="default"}=r,C=x.useMemo(()=>{let P=ih(y,u);return P==null?null:{location:{pathname:P,search:m,hash:h,state:S,key:k},navigationType:i}},[u,y,m,h,S,k,i]);return C==null?null:x.createElement(Gi.Provider,{value:d},x.createElement(Lo.Provider,{children:n,value:C}))}function Ng(e){let{children:t,location:n}=e;return hg(ka(t),n)}new Promise(()=>{});function ka(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let l=[...t,i];if(r.type===x.Fragment){n.push.apply(n,ka(r.props.children,l));return}r.type!==Vn&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ka(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Tg="6";try{window.__reactRouterVersion=Tg}catch{}const zg="startTransition",gd=Ps[zg];function Og(e){let{basename:t,children:n,future:r,window:i}=e,l=x.useRef();l.current==null&&(l.current=F1({window:i,v5Compat:!0}));let o=l.current,[s,u]=x.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},y=x.useCallback(m=>{d&&gd?gd(()=>u(m)):u(m)},[u,d]);return x.useLayoutEffect(()=>o.listen(y),[o,y]),x.useEffect(()=>Lg(r),[r]),x.createElement(bg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var vd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vd||(vd={}));var yd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yd||(yd={}));function jg(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Rg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Dg=function(){function e(n){var r=this;this._insertTag=function(i){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,l),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Rg(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var l=jg(i);try{l.insertRule(r,l.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),$e="-ms-",oo="-moz-",V="-webkit-",ph="comm",Eu="rule",_u="decl",Ig="@import",hh="@keyframes",Ag="@layer",Fg=Math.abs,Po=String.fromCharCode,Ug=Object.assign;function Bg(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function mh(e){return e.trim()}function Wg(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function Ea(e,t){return e.indexOf(t)}function Se(e,t){return e.charCodeAt(t)|0}function Fi(e,t,n){return e.slice(t,n)}function yt(e){return e.length}function $u(e){return e.length}function wl(e,t){return t.push(e),e}function Vg(e,t){return e.map(t).join("")}var bo=1,vr=1,gh=0,We=0,ce=0,Cr="";function No(e,t,n,r,i,l,o){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:bo,column:vr,length:o,return:""}}function Vr(e,t){return Ug(No("",null,null,"",null,null,0),e,{length:-e.length},t)}function Hg(){return ce}function Qg(){return ce=We>0?Se(Cr,--We):0,vr--,ce===10&&(vr=1,bo--),ce}function Ye(){return ce=We<gh?Se(Cr,We++):0,vr++,ce===10&&(vr=1,bo++),ce}function kt(){return Se(Cr,We)}function Ol(){return We}function Mi(e,t){return Fi(Cr,e,t)}function Ui(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vh(e){return bo=vr=1,gh=yt(Cr=e),We=0,[]}function yh(e){return Cr="",e}function jl(e){return mh(Mi(We-1,_a(e===91?e+2:e===40?e+1:e)))}function Kg(e){for(;(ce=kt())&&ce<33;)Ye();return Ui(e)>2||Ui(ce)>3?"":" "}function Yg(e,t){for(;--t&&Ye()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Mi(e,Ol()+(t<6&&kt()==32&&Ye()==32))}function _a(e){for(;Ye();)switch(ce){case e:return We;case 34:case 39:e!==34&&e!==39&&_a(ce);break;case 40:e===41&&_a(e);break;case 92:Ye();break}return We}function Zg(e,t){for(;Ye()&&e+ce!==57;)if(e+ce===84&&kt()===47)break;return"/*"+Mi(t,We-1)+"*"+Po(e===47?e:Ye())}function Gg(e){for(;!Ui(kt());)Ye();return Mi(e,We)}function Jg(e){return yh(Rl("",null,null,null,[""],e=vh(e),0,[0],e))}function Rl(e,t,n,r,i,l,o,s,u){for(var d=0,y=0,m=o,h=0,S=0,k=0,C=1,P=1,p=1,f=0,g="",E=i,b=l,N=r,L=g;P;)switch(k=f,f=Ye()){case 40:if(k!=108&&Se(L,m-1)==58){Ea(L+=H(jl(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:L+=jl(f);break;case 9:case 10:case 13:case 32:L+=Kg(k);break;case 92:L+=Yg(Ol()-1,7);continue;case 47:switch(kt()){case 42:case 47:wl(Xg(Zg(Ye(),Ol()),t,n),u);break;default:L+="/"}break;case 123*C:s[d++]=yt(L)*p;case 125*C:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+y:p==-1&&(L=H(L,/\f/g,"")),S>0&&yt(L)-m&&wl(S>32?xd(L+";",r,n,m-1):xd(H(L," ","")+";",r,n,m-2),u);break;case 59:L+=";";default:if(wl(N=wd(L,t,n,d,y,i,s,g,E=[],b=[],m),l),f===123)if(y===0)Rl(L,t,N,N,E,l,m,s,b);else switch(h===99&&Se(L,3)===110?100:h){case 100:case 108:case 109:case 115:Rl(e,N,N,r&&wl(wd(e,N,N,0,0,i,s,g,i,E=[],m),b),i,b,m,s,r?E:b);break;default:Rl(L,N,N,N,[""],b,0,s,b)}}d=y=S=0,C=p=1,g=L="",m=o;break;case 58:m=1+yt(L),S=k;default:if(C<1){if(f==123)--C;else if(f==125&&C++==0&&Qg()==125)continue}switch(L+=Po(f),f*C){case 38:p=y>0?1:(L+="\f",-1);break;case 44:s[d++]=(yt(L)-1)*p,p=1;break;case 64:kt()===45&&(L+=jl(Ye())),h=kt(),y=m=yt(g=L+=Gg(Ol())),f++;break;case 45:k===45&&yt(L)==2&&(C=0)}}return l}function wd(e,t,n,r,i,l,o,s,u,d,y){for(var m=i-1,h=i===0?l:[""],S=$u(h),k=0,C=0,P=0;k<r;++k)for(var p=0,f=Fi(e,m+1,m=Fg(C=o[k])),g=e;p<S;++p)(g=mh(C>0?h[p]+" "+f:H(f,/&\f/g,h[p])))&&(u[P++]=g);return No(e,t,n,i===0?Eu:s,u,d,y)}function Xg(e,t,n){return No(e,t,n,ph,Po(Hg()),Fi(e,2,-2),0)}function xd(e,t,n,r){return No(e,t,n,_u,Fi(e,0,r),Fi(e,r+1,-1),r)}function ur(e,t){for(var n="",r=$u(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Mg(e,t,n,r){switch(e.type){case Ag:if(e.children.length)break;case Ig:case _u:return e.return=e.return||e.value;case ph:return"";case hh:return e.return=e.value+"{"+ur(e.children,r)+"}";case Eu:e.value=e.props.join(",")}return yt(n=ur(e.children,r))?e.return=e.value+"{"+n+"}":""}function qg(e){var t=$u(e);return function(n,r,i,l){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,l)||"";return o}}function ev(e){return function(t){t.root||(t=t.return)&&e(t)}}function tv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var nv=function(t,n,r){for(var i=0,l=0;i=l,l=kt(),i===38&&l===12&&(n[r]=1),!Ui(l);)Ye();return Mi(t,We)},rv=function(t,n){var r=-1,i=44;do switch(Ui(i)){case 0:i===38&&kt()===12&&(n[r]=1),t[r]+=nv(We-1,n,r);break;case 2:t[r]+=jl(i);break;case 4:if(i===44){t[++r]=kt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Po(i)}while(i=Ye());return t},iv=function(t,n){return yh(rv(vh(t),n))},Sd=new WeakMap,lv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Sd.get(r))&&!i){Sd.set(t,!0);for(var l=[],o=iv(n,l),s=r.props,u=0,d=0;u<o.length;u++)for(var y=0;y<s.length;y++,d++)t.props[d]=l[u]?o[u].replace(/&\f/g,s[y]):s[y]+" "+o[u]}}},ov=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function wh(e,t){switch(Bg(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+oo+e+$e+e+e;case 6828:case 4268:return V+e+$e+e+e;case 6165:return V+e+$e+"flex-"+e+e;case 5187:return V+e+H(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+$e+"flex-$1$2")+e;case 5443:return V+e+$e+"flex-item-"+H(e,/flex-|-self/,"")+e;case 4675:return V+e+$e+"flex-line-pack"+H(e,/align-content|flex-|-self/,"")+e;case 5548:return V+e+$e+H(e,"shrink","negative")+e;case 5292:return V+e+$e+H(e,"basis","preferred-size")+e;case 6060:return V+"box-"+H(e,"-grow","")+V+e+$e+H(e,"grow","positive")+e;case 4554:return V+H(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yt(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+oo+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ea(e,"stretch")?wh(H(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Se(e,t+1)!==115)break;case 6444:switch(Se(e,yt(e)-3-(~Ea(e,"!important")&&10))){case 107:return H(e,":",":"+V)+e;case 101:return H(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+V+(Se(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+$e+"$2box$3")+e}break;case 5936:switch(Se(e,t+11)){case 114:return V+e+$e+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+$e+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+$e+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return V+e+$e+e+e}return e}var sv=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case _u:t.return=wh(t.value,t.length);break;case hh:return ur([Vr(t,{value:H(t.value,"@","@"+V)})],i);case Eu:if(t.length)return Vg(t.props,function(l){switch(Wg(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ur([Vr(t,{props:[H(l,/:(read-\w+)/,":"+oo+"$1")]})],i);case"::placeholder":return ur([Vr(t,{props:[H(l,/:(plac\w+)/,":"+V+"input-$1")]}),Vr(t,{props:[H(l,/:(plac\w+)/,":"+oo+"$1")]}),Vr(t,{props:[H(l,/:(plac\w+)/,$e+"input-$1")]})],i)}return""})}},av=[sv],uv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(C){var P=C.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(C),C.setAttribute("data-s",""))})}var i=t.stylisPlugins||av,l={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(C){for(var P=C.getAttribute("data-emotion").split(" "),p=1;p<P.length;p++)l[P[p]]=!0;s.push(C)});var u,d=[lv,ov];{var y,m=[Mg,ev(function(C){y.insert(C)})],h=qg(d.concat(i,m)),S=function(P){return ur(Jg(P),h)};u=function(P,p,f,g){y=f,S(P?P+"{"+p.styles+"}":p.styles),g&&(k.inserted[p.name]=!0)}}var k={key:n,sheet:new Dg({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:u};return k.sheet.hydrate(s),k},xh={exports:{}},K={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=typeof Symbol=="function"&&Symbol.for,Lu=we?Symbol.for("react.element"):60103,Pu=we?Symbol.for("react.portal"):60106,To=we?Symbol.for("react.fragment"):60107,zo=we?Symbol.for("react.strict_mode"):60108,Oo=we?Symbol.for("react.profiler"):60114,jo=we?Symbol.for("react.provider"):60109,Ro=we?Symbol.for("react.context"):60110,bu=we?Symbol.for("react.async_mode"):60111,Do=we?Symbol.for("react.concurrent_mode"):60111,Io=we?Symbol.for("react.forward_ref"):60112,Ao=we?Symbol.for("react.suspense"):60113,cv=we?Symbol.for("react.suspense_list"):60120,Fo=we?Symbol.for("react.memo"):60115,Uo=we?Symbol.for("react.lazy"):60116,dv=we?Symbol.for("react.block"):60121,fv=we?Symbol.for("react.fundamental"):60117,pv=we?Symbol.for("react.responder"):60118,hv=we?Symbol.for("react.scope"):60119;function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Lu:switch(e=e.type,e){case bu:case Do:case To:case Oo:case zo:case Ao:return e;default:switch(e=e&&e.$$typeof,e){case Ro:case Io:case Uo:case Fo:case jo:return e;default:return t}}case Pu:return t}}}function Sh(e){return Xe(e)===Do}K.AsyncMode=bu;K.ConcurrentMode=Do;K.ContextConsumer=Ro;K.ContextProvider=jo;K.Element=Lu;K.ForwardRef=Io;K.Fragment=To;K.Lazy=Uo;K.Memo=Fo;K.Portal=Pu;K.Profiler=Oo;K.StrictMode=zo;K.Suspense=Ao;K.isAsyncMode=function(e){return Sh(e)||Xe(e)===bu};K.isConcurrentMode=Sh;K.isContextConsumer=function(e){return Xe(e)===Ro};K.isContextProvider=function(e){return Xe(e)===jo};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lu};K.isForwardRef=function(e){return Xe(e)===Io};K.isFragment=function(e){return Xe(e)===To};K.isLazy=function(e){return Xe(e)===Uo};K.isMemo=function(e){return Xe(e)===Fo};K.isPortal=function(e){return Xe(e)===Pu};K.isProfiler=function(e){return Xe(e)===Oo};K.isStrictMode=function(e){return Xe(e)===zo};K.isSuspense=function(e){return Xe(e)===Ao};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===To||e===Do||e===Oo||e===zo||e===Ao||e===cv||typeof e=="object"&&e!==null&&(e.$$typeof===Uo||e.$$typeof===Fo||e.$$typeof===jo||e.$$typeof===Ro||e.$$typeof===Io||e.$$typeof===fv||e.$$typeof===pv||e.$$typeof===hv||e.$$typeof===dv)};K.typeOf=Xe;xh.exports=K;var mv=xh.exports,Ch=mv,gv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kh={};kh[Ch.ForwardRef]=gv;kh[Ch.Memo]=vv;var yv=!0;function wv(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var Eh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||yv===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},xv=function(t,n,r){Eh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+i:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function Sv(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Cv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kv=/[A-Z]|^ms/g,Ev=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_h=function(t){return t.charCodeAt(1)===45},Cd=function(t){return t!=null&&typeof t!="boolean"},Ss=tv(function(e){return _h(e)?e:e.replace(kv,"-$&").toLowerCase()}),kd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ev,function(r,i,l){return wt={name:i,styles:l,next:wt},i})}return Cv[t]!==1&&!_h(t)&&typeof n=="number"&&n!==0?n+"px":n};function Bi(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return wt={name:i.name,styles:i.styles,next:wt},i.name;var l=n;if(l.styles!==void 0){var o=l.next;if(o!==void 0)for(;o!==void 0;)wt={name:o.name,styles:o.styles,next:wt},o=o.next;var s=l.styles+";";return s}return _v(e,t,n)}case"function":{if(e!==void 0){var u=wt,d=n(e);return wt=u,Bi(e,t,d)}break}}var y=n;return y}function _v(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Bi(e,t,n[i])+";";else for(var l in n){var o=n[l];if(typeof o!="object"){var s=o;Cd(s)&&(r+=Ss(l)+":"+kd(l,s)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var u=0;u<o.length;u++)Cd(o[u])&&(r+=Ss(l)+":"+kd(l,o[u])+";");else{var d=Bi(e,t,o);switch(l){case"animation":case"animationName":{r+=Ss(l)+":"+d+";";break}default:r+=l+"{"+d+"}"}}}return r}var Ed=/label:\s*([^\s;{]+)\s*(;|$)/g,wt;function $h(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";wt=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,i+=Bi(n,t,l);else{var o=l;i+=o[0]}for(var s=1;s<e.length;s++)if(i+=Bi(n,t,e[s]),r){var u=l;i+=u[s]}Ed.lastIndex=0;for(var d="",y;(y=Ed.exec(i))!==null;)d+="-"+y[1];var m=Sv(i)+d;return{name:m,styles:i,next:wt}}var $v=function(t){return t()},Lv=Ps.useInsertionEffect?Ps.useInsertionEffect:!1,Pv=Lv||$v,Lh=x.createContext(typeof HTMLElement<"u"?uv({key:"css"}):null);Lh.Provider;var bv=function(t){return x.forwardRef(function(n,r){var i=x.useContext(Lh);return t(n,i,r)})},Nv=x.createContext({}),qi={}.hasOwnProperty,$a="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Nu=function(t,n){var r={};for(var i in n)qi.call(n,i)&&(r[i]=n[i]);return r[$a]=t,r},Tv=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Eh(n,r,i),Pv(function(){return xv(n,r,i)}),null},zv=bv(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[$a],l=[r],o="";typeof e.className=="string"?o=wv(t.registered,l,e.className):e.className!=null&&(o=e.className+" ");var s=$h(l,void 0,x.useContext(Nv));o+=t.key+"-"+s.name;var u={};for(var d in e)qi.call(e,d)&&d!=="css"&&d!==$a&&(u[d]=e[d]);return u.className=o,n&&(u.ref=n),x.createElement(x.Fragment,null,x.createElement(Tv,{cache:t,serialized:s,isStringTag:typeof i=="string"}),x.createElement(i,u))}),Tu=zv,ae=he.Fragment,a=function(t,n,r){return qi.call(n,"css")?he.jsx(Tu,Nu(t,n),r):he.jsx(t,n,r)},v=function(t,n,r){return qi.call(n,"css")?he.jsxs(Tu,Nu(t,n),r):he.jsxs(t,n,r)},_d=function(t,n){var r=arguments;if(n==null||!qi.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,l=new Array(i);l[0]=Tu,l[1]=Nu(t,n);for(var o=2;o<i;o++)l[o]=r[o];return x.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(_d||(_d={}));function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return $h(t)}const Ov="/strack/".replace(/\/$/,""),jv=e=>w`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`,Rv=e=>w`
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
`,Dv=w`
  position: relative;
  z-index: 1;
  max-width: 28rem;
`,Iv=e=>w`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${e?"#f8fafc":"#0f172a"};
`,Av=e=>w`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${e?"rgba(226, 232, 240, 0.78)":"rgba(15, 23, 42, 0.72)"};
  max-width: 22rem;
`,Fv=e=>w`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  background: ${e?"#0f0f0f":"#f4f4f5"};
`,Uv=e=>w`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: ${e?"#1c1c1e":"#ffffff"};
  box-shadow: ${e?"0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)":"0 20px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)"};
`,Bv=e=>w`
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
  margin-bottom: 0.35rem;
`,Wv=e=>w`
  font-size: 0.9rem;
  color: ${e?"#a1a1aa":"#64748b"};
  margin-bottom: 1.5rem;
`,Vv=w`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,$d=e=>w`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${e?"#e4e4e7":"#374151"};
  margin-bottom: 0.4rem;
`,Ph=e=>w`
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
`,Hv=w`
  position: relative;
  display: flex;
  align-items: center;
`,Qv=e=>w`
  ${Ph(e)};
  padding-right: 2.75rem;
`,Kv=e=>w`
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
`,Yv=e=>w`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${e?"#fca5a5":"#b91c1c"};
  background: ${e?"rgba(127, 29, 29, 0.25)":"#fef2f2"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.35)":"#fecaca"};
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
`,Zv=w`
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
`,Gv=e=>w`
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
`,Jv=w`
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
`,Xv=()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),Mv=()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),qv=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),ey=()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function ty(e){return e?{message:"The server did not return JSON. Open the site at …/strack/ and ensure backend/login.php is deployed."}:{message:null}}function ny({darkMode:e,onToggleDarkMode:t}){const n=Xi(),[r,i]=x.useState(""),[l,o]=x.useState(""),[s,u]=x.useState(!1),[d,y]=x.useState(""),[m,h]=x.useState(!1),S=async k=>{if(k.preventDefault(),y(""),!r.trim()){y("Enter your university email address.");return}if(!l){y("Enter your password.");return}h(!0);const C=`${Ov}/backend/login.php`;try{const p=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.trim(),password:l})})).text();let f,g=!1;try{f=JSON.parse(p)}catch{g=!0,f={}}const E=ty(g);if(E.message){y(E.message);return}if(f.success){const b=f.user||{},N=b.role||"student",L=N==="admin"?"/admin":N==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(b))}catch{}n(L,{replace:!0});return}y(f.message||"Invalid email or password.")}catch{y(`Cannot reach ${C}. On NUWebSpace use your full /strack/ URL; locally run PHP and the Vite dev server with the proxy enabled.`)}finally{h(!1)}};return v("div",{css:jv(),children:[a("button",{type:"button",css:Gv(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?a(Mv,{}):a(Xv,{})}),a("section",{css:Rv(e),"aria-hidden":"false",children:v("div",{css:Dv,children:[a("h1",{css:Iv(e),children:"Strack"}),a("p",{css:Av(e),children:"Sign in to track attendance, engagement, and performance in one place."})]})}),a("section",{css:Fv(e),children:v("div",{css:Uv(e),children:[a("h2",{css:Bv(e),children:"Sign in"}),a("p",{css:Wv(e),children:"Use the email and password from your administrator or module leader."}),v("form",{css:Vv,onSubmit:S,noValidate:!0,children:[v("div",{children:[a("label",{css:$d(e),htmlFor:"strack-email",children:"Email"}),a("input",{id:"strack-email",css:Ph(e),type:"email",autoComplete:"username",inputMode:"email",placeholder:"you@uni.ac.uk",value:r,onChange:k=>i(k.target.value),disabled:m})]}),v("div",{children:[a("label",{css:$d(e),htmlFor:"strack-password",children:"Password"}),v("div",{css:Hv,children:[a("input",{id:"strack-password",css:Qv(e),type:s?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:l,onChange:k=>o(k.target.value),disabled:m}),a("button",{type:"button",css:Kv(e),onClick:()=>u(k=>!k),"aria-label":s?"Hide password":"Show password",tabIndex:-1,children:s?a(ey,{}):a(qv,{})})]})]}),d?a("div",{role:"alert",css:Yv(e),children:d}):null,a("button",{type:"submit",css:Zv,disabled:m,children:m?v(ae,{children:[a("span",{css:Jv,"aria-hidden":!0}),"Signing in…"]}):"Sign in"})]})]})})]})}var bh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ld=Pt.createContext&&Pt.createContext(bh),ry=["attr","size","title"];function iy(e,t){if(e==null)return{};var n,r,i=ly(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ly(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(null,arguments)}function Pd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pd(Object(n),!0).forEach(function(r){oy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oy(e,t,n){return(t=sy(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sy(e){var t=ay(e,"string");return typeof t=="symbol"?t:t+""}function ay(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nh(e){return e&&e.map((t,n)=>Pt.createElement(t.tag,ao({key:n},t.attr),Nh(t.child)))}function pe(e){return t=>Pt.createElement(uy,so({attr:ao({},e.attr)},t),Nh(e.child))}function uy(e){var t=n=>{var{attr:r,size:i,title:l}=e,o=iy(e,ry),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Pt.createElement("svg",so({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:ao(ao({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&Pt.createElement("title",null,l),e.children)};return Ld!==void 0?Pt.createElement(Ld.Consumer,null,n=>t(n)):t(bh)}function Hr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function Th(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function uo(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function Qr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function zu(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function zh(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function Ou(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function cy(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function Kr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function ju(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function Yr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function dy(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.625 11.505v8.25a1.5 1.5 0 0 1-1.5 1.5H4.875a1.5 1.5 0 0 1-1.5-1.5v-8.25m8.25-6.375A2.625 2.625 0 1 0 9 7.755h2.625m0-2.625v2.625m0-2.625a2.625 2.625 0 1 1 2.625 2.625h-2.625m0 0v13.5M3 11.505h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.622-.504-1.125-1.125-1.125H3c-.621 0-1.125.503-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function fy(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function py(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function Oh(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function Ru(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function ci(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function Wi(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function Du(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function Vi(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const hy="/strack/".replace(/\/$/,""),kr="#6366f1",my=[{id:"food_drink",title:"Food & drink vouchers",description:"£15 credit for campus cafés and selected partner outlets.",cost:300,category:"vouchers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80&auto=format&fit=crop"},{id:"discount_local",title:"Local business discount codes",description:"Exclusive codes for shops and services near campus.",cost:400,category:"vouchers",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop"},{id:"digital_custom",title:"Digital customisation items",description:"Wallpapers, icons, and profile themes for your Strack account.",cost:250,category:"merchandise",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80&auto=format&fit=crop"},{id:"uni_merch",title:"University merchandise",description:"Hoodie, bottle, or cap from the official union store.",cost:550,category:"merchandise",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&q=80&auto=format&fit=crop"},{id:"recognition",title:"Recognition",description:"Certificate of achievement and spotlight on the leaderboard.",cost:200,category:"recognition",image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=80&auto=format&fit=crop"},{id:"print_credits",title:"Print credits",description:"500 mono pages or equivalent colour printing.",cost:150,category:"credits",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop"},{id:"charity",title:"Charity donations",description:"We donate £5 to your chosen university charity partner.",cost:350,category:"charity",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"},{id:"priority_booking",title:"Priority booking",description:"Register for modules and events one day before general release.",cost:800,category:"privileges",image:"https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80&auto=format&fit=crop"}];function gy(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t=n=>Array.from({length:n},()=>e[Math.floor(Math.random()*e.length)]).join("");return`STR-${t(4)}-${t(4)}`}function jh(e){return`strack_redeemed_${(e||"").toLowerCase()}`}function vy(e){try{const t=localStorage.getItem(jh(e));if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function bd(e,t){try{localStorage.setItem(jh(e),JSON.stringify(t))}catch{}}const yy=e=>w`
  max-width: 1120px;
  margin: 0 auto;
  color: ${e?"#f3f4f6":"#111827"};
`,wy=w`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,xy=w`
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
`,Sy=e=>w`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  background: ${e?"#1f2937":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  box-shadow: ${e?"none":"0 4px 14px rgba(15, 23, 42, 0.06)"};
  min-width: 160px;
`,Cy=w`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,ky=w`
  font-size: 1.65rem;
  font-weight: 800;
  font-family: inherit;
  color: ${kr};
  letter-spacing: -0.02em;
`,Ey=w`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${kr};
  flex-shrink: 0;
  svg {
    width: 22px;
    height: 22px;
  }
`,Nd=e=>w`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${e?"none":"0 8px 30px rgba(15, 23, 42, 0.06)"};
`,Td=w`
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
    color: ${kr};
  }
`,_y=w`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,$y=e=>w`
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
`,Ly=w`
  aspect-ratio: 16 / 10;
  background: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Py=w`
  padding: 0.9rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`,by=w`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`,Ny=w`
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.45;
  flex: 1;
`,Ty=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,zy=w`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${kr};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,Oy=e=>w`
  font-size: 0.7rem;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#1f2937":"#ffffff"};
  text-transform: lowercase;
`,jy=w`
  width: 100%;
  margin-top: 0.65rem;
  padding: 0.65rem 0.9rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  background: ${kr};
  color: #ffffff;
  transition: filter 0.15s ease, opacity 0.15s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,Ry=e=>w`
  min-height: 140px;
  border: 1px dashed ${e?"#4b5563":"#d1d5db"};
  border-radius: 12px;
  padding: 1.25rem;
  font-size: 0.9rem;
  color: #9ca3af;
`,Dy=w`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,Iy=e=>w`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  background: ${e?"#1f2937":"#f3f4f6"};
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#374151"};
`,Ay=w`
  flex: 1;
  min-width: 0;
`,Fy=w`
  font-weight: 600;
  margin-bottom: 0.35rem;
`,Uy=e=>w`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: ${e?"#a5b4fc":kr};
  letter-spacing: 0.02em;
`,By=w`
  font-weight: 700;
  color: #6b7280;
  white-space: nowrap;
  font-size: 0.82rem;
`,Wy=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,Vy=e=>w`
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
`,Hy=w`
  font-size: 0.85rem;
  color: #b91c1c;
  margin-bottom: 0.75rem;
`,zd=()=>v("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":!0,children:[a("circle",{cx:"9",cy:"12",r:"6"}),a("circle",{cx:"15",cy:"12",r:"6"})]});function Qy({darkMode:e,userEmail:t,points:n,onPointsChange:r}){const[i,l]=x.useState([]),[o,s]=x.useState({}),[u,d]=x.useState("");x.useEffect(()=>{t&&l(vy(t))},[t]);const y=()=>{l([]),bd(t,[])},m=async h=>{if(!t){d("Sign in again to redeem rewards.");return}if(n<h.cost){d("Not enough points for this reward.");return}d(""),s(S=>({...S,[h.id]:!0}));try{const k=await(await fetch(`${hy}/backend/redeem_reward.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,rewardId:h.id})})).json();if(!k.success){d(k.message||"Could not redeem."),typeof k.points=="number"&&r(k.points);return}r(k.points);const C=[...i,{title:h.title,rewardId:h.id,cost:h.cost,at:new Date().toISOString(),promoCode:gy()}];l(C),bd(t,C)}catch{d("Network error.")}finally{s(S=>({...S,[h.id]:!1}))}};return v("div",{css:yy(e),children:[v("div",{css:wy,children:[v("div",{css:xy,children:[a("h1",{children:"Rewards Store"}),a("p",{children:"Redeem your points for exciting rewards"})]}),v("div",{css:Sy(e),children:[a("div",{css:Ey,children:a(zd,{})}),v("div",{children:[a("div",{css:Cy,children:"Your points"}),a("div",{css:ky,children:n})]})]})]}),u?a("div",{css:Hy,role:"alert",children:u}):null,v("div",{css:Nd(e),children:[v("div",{css:Td,children:[a(dy,{"aria-hidden":!0}),"Available rewards"]}),a("div",{css:_y,children:my.map(h=>{const S=!!o[h.id],k=n<h.cost||S;return v("article",{css:$y(e),children:[a("div",{css:Ly,children:a("img",{src:h.image,alt:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",onError:C=>{C.target.style.display="none"}})}),v("div",{css:Py,children:[a("h2",{css:by,children:h.title}),a("p",{css:Ny,children:h.description}),v("div",{css:Ty,children:[v("span",{css:zy,children:[a(zd,{}),h.cost]}),a("span",{css:Oy(e),children:h.category})]}),a("button",{type:"button",css:jy,disabled:k,onClick:()=>m(h),children:S?"...":"Redeem"})]})]},h.id)})})]}),v("div",{css:Nd(e),children:[v("div",{css:Wy,children:[a("div",{css:Td,children:"My rewards"}),a("button",{type:"button",css:Vy(e),onClick:y,disabled:i.length===0,children:"Clear history"})]}),a("p",{css:w`
            font-size: 0.78rem;
            color: #9ca3af;
            margin: -0.5rem 0 0.85rem;
          `,children:"Demo: each redemption shows a random promo-style code for display only."}),i.length===0?a("div",{css:Ry(e),children:"Your redeemed rewards will appear here."}):a("ul",{css:Dy,children:i.map((h,S)=>v("li",{css:Iy(e),children:[v("div",{css:Ay,children:[a("div",{css:Fy,children:h.title}),h.promoCode?v("div",{css:Uy(e),children:["Promo: ",h.promoCode]}):null]}),v("span",{css:By,children:["-",h.cost," pts"]})]},`${h.rewardId}-${S}`))})]}),a("p",{css:w`
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        `,children:"Reward images are from Unsplash (third-party photos)."})]})}const Ky="/strack/".replace(/\/$/,""),Ve="0.35s ease",Yy=e=>w`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${Ve};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Zy=e=>w`
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
`,Gy=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Jy=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Xy=e=>w`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Ve};
  }
`,My=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ve};
`,qy=e=>w`
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
`,e2=w`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,t2=w`
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
`,n2=w`
  flex: 1;
  min-width: 0;
`,r2=e=>w`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ve};
`,i2=e=>w`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Ve};
`,l2=e=>w`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${Ve};
`,o2=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,s2=e=>w`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${Ve};
`,a2=e=>w`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${Ve};
`,u2=w`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,c2=(e,t)=>w`
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
`,d2=w`
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
`,f2=e=>w`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${Ve};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,p2=e=>w`
  max-width: 800px;
  margin: 0 auto;
`,Bn=w`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Wn=w`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,h2=[{id:"dashboard",label:"Dashboard",icon:Ou},{id:"courses",label:"Courses",icon:Wi},{id:"calendar",label:"Calendar",icon:Ru},{id:"leaderboard",label:"Leaderboard",icon:Oh},{id:"badges",label:"Badges",icon:cy},{id:"rewards",label:"Rewards",icon:zh},{id:"profile",label:"Profile",icon:Th}];function m2(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function g2({darkMode:e,onToggleDarkMode:t}){const n=Xi(),[r,i]=x.useState("dashboard"),[l,o]=x.useState(0),[s,u]=x.useState("");let d="Student";try{const h=localStorage.getItem("strack_user");if(h){const S=JSON.parse(h);S!=null&&S.name&&(d=S.name)}}catch{}x.useEffect(()=>{try{const h=localStorage.getItem("strack_user");if(h){const S=JSON.parse(h);S!=null&&S.email&&u(S.email)}}catch{}},[]);const y=x.useCallback(async()=>{if(s)try{const S=await(await fetch(`${Ky}/backend/student_points.php?email=${encodeURIComponent(s)}`,{cache:"no-store"})).json();S.success&&typeof S.points=="number"&&o(S.points)}catch{}},[s]);x.useEffect(()=>{y()},[y]);const m=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return v("div",{css:Yy(e),children:[v("aside",{css:Zy(e),children:[v("header",{css:Gy,children:[v("div",{css:Jy,children:[a("div",{css:Xy(e),children:a(Vi,{})}),a("span",{css:My(e),children:"Strack"})]}),a("button",{type:"button",css:qy(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?a(zu,{}):a(ju,{})})]}),v("div",{css:e2,children:[a("div",{css:t2,children:m2(d)}),v("div",{css:n2,children:[a("div",{css:r2(e),children:d}),a("div",{css:i2(e),children:"Student"})]})]}),a("div",{css:l2(e),children:v("div",{css:o2,children:[v("span",{css:s2(e),children:[a(fy,{})," Points"]}),a("span",{css:a2(e),children:l})]})}),a("nav",{css:u2,children:h2.map(({id:h,label:S,icon:k})=>v("button",{css:c2(e,r===h),onClick:()=>i(h),children:[a(k,{}),S]},h))}),v("button",{css:d2,onClick:m,children:[a(Du,{}),"Logout"]})]}),a("main",{css:f2(e),children:r==="rewards"?a(Qy,{darkMode:e,userEmail:s,points:l,onPointsChange:o}):v("div",{css:p2(),children:[r==="dashboard"&&v(ae,{children:[a("h1",{css:Bn,children:"Dashboard"}),a("p",{css:Wn,children:"Welcome to the student portal. Here you can view your performance, grades, and progress."})]}),r==="courses"&&v(ae,{children:[a("h1",{css:Bn,children:"Courses"}),a("p",{css:Wn,children:"This is the courses page. View your enrolled courses, materials, and grades here."})]}),r==="calendar"&&v(ae,{children:[a("h1",{css:Bn,children:"Calendar"}),a("p",{css:Wn,children:"This is the calendar page. View your schedule, deadlines, and important dates here."})]}),r==="leaderboard"&&v(ae,{children:[a("h1",{css:Bn,children:"Leaderboard"}),a("p",{css:Wn,children:"This is the leaderboard page. See how you rank against other students and track your position."})]}),r==="badges"&&v(ae,{children:[a("h1",{css:Bn,children:"Badges"}),a("p",{css:Wn,children:"This is the badges page. View and collect achievement badges earned from your activities."})]}),r==="profile"&&v(ae,{children:[a("h1",{css:Bn,children:"Profile"}),a("p",{css:Wn,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const mt="0.35s ease",v2=e=>w`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${mt};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,y2=e=>w`
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
`,w2=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,x2=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,S2=e=>w`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${mt};
  }
`,C2=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${mt};
`,k2=e=>w`
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
`,E2=w`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,_2=w`
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
`,$2=w`
  flex: 1;
  min-width: 0;
`,L2=e=>w`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${mt};
`,P2=e=>w`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${mt};
`,b2=w`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,N2=(e,t)=>w`
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
`,T2=w`
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
`,z2=e=>w`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${mt};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,O2=e=>w`
  max-width: 800px;
  margin: 0 auto;
`,an=w`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,un=w`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,j2=[{id:"dashboard",label:"Dashboard",icon:Ou},{id:"students",label:"Students",icon:uo},{id:"attendance",label:"Attendance",icon:py},{id:"performance",label:"Performance",icon:Oh},{id:"courses",label:"Courses",icon:Wi},{id:"calendar",label:"Calendar",icon:Ru},{id:"profile",label:"Profile",icon:Th}];function R2(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function D2({darkMode:e,onToggleDarkMode:t}){const n=Xi(),[r,i]=x.useState("dashboard");let l="Lecturer";try{const s=localStorage.getItem("strack_user");if(s){const u=JSON.parse(s);u!=null&&u.name&&(l=u.name)}}catch{}const o=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return v("div",{css:v2(e),children:[v("aside",{css:y2(e),children:[v("header",{css:w2,children:[v("div",{css:x2,children:[a("div",{css:S2(e),children:a(Vi,{})}),a("span",{css:C2(e),children:"Strack"})]}),a("button",{type:"button",css:k2(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?a(zu,{}):a(ju,{})})]}),v("div",{css:E2,children:[a("div",{css:_2,children:R2(l)}),v("div",{css:$2,children:[a("div",{css:L2(e),children:l}),a("div",{css:P2(e),children:"Lecturer"})]})]}),a("nav",{css:b2,children:j2.map(({id:s,label:u,icon:d})=>v("button",{type:"button",css:N2(e,r===s),onClick:()=>i(s),children:[a(d,{}),u]},s))}),v("button",{type:"button",css:T2,onClick:o,children:[a(Du,{}),"Logout"]})]}),a("main",{css:z2(e),children:v("div",{css:O2(),children:[r==="dashboard"&&v(ae,{children:[a("h1",{css:an,children:"Dashboard"}),a("p",{css:un,children:"Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades."})]}),r==="students"&&v(ae,{children:[a("h1",{css:an,children:"Students"}),a("p",{css:un,children:"This is the students page. View your class lists and student details here."})]}),r==="attendance"&&v(ae,{children:[a("h1",{css:an,children:"Attendance"}),a("p",{css:un,children:"This is the attendance page. Mark and view student attendance for your classes here."})]}),r==="performance"&&v(ae,{children:[a("h1",{css:an,children:"Performance"}),a("p",{css:un,children:"This is the performance page. View and analyse student performance and grades here."})]}),r==="courses"&&v(ae,{children:[a("h1",{css:an,children:"Courses"}),a("p",{css:un,children:"This is the courses page. Manage your courses, materials, and class lists here."})]}),r==="calendar"&&v(ae,{children:[a("h1",{css:an,children:"Calendar"}),a("p",{css:un,children:"This is the calendar page. View your teaching schedule, deadlines, and important dates here."})]}),r==="profile"&&v(ae,{children:[a("h1",{css:an,children:"Profile"}),a("p",{css:un,children:"This is your profile page. Manage your account details, preferences, and settings here."})]})]})})]})}const se="/strack",I="0.35s ease",I2=e=>w`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${I};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,A2=e=>w`
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
`,F2=w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,U2=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,B2=e=>w`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${I};
  }
`,W2=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${I};
`,V2=e=>w`
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
`,H2=w`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,Q2=w`
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
`,K2=w`
  flex: 1;
  min-width: 0;
`,Y2=e=>w`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${I};
`,Z2=e=>w`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${I};
`,G2=w`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,J2=(e,t)=>w`
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
`,X2=w`
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
`,M2=e=>w`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  transition: color ${I};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,q2=(e,t)=>w`
  max-width: ${t?"100%":"800px"};
  margin: 0 auto;
`,Cs=w`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,ks=w`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Es=e=>w`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${I};
`,_s=w`
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
`,xl=e=>w`
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
`,$s=w`
  margin-bottom: 1rem;
`,Ls=w`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,cn=e=>w`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,dn=e=>w`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,fn=e=>w`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;w`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const pn=e=>w`
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
`,hn=w`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,e5=(e,t)=>w`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":t?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":t?"#9ca3af":"#6b7280"};
  transition: background ${I}, color ${I};
`,t5=w`
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
`,Od=w`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,jd=w`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`,Rd=w`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Dd=w`
  flex: 1;
  min-width: 0;
`,Id=w`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Ad=e=>w`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${I};
`,Fd=w`
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
`,n5=e=>w`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${I}, box-shadow ${I};
`,r5=e=>w`
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
`,i5=e=>w`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${I};
`,l5=e=>w`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${I};
`,o5=e=>w`
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
`,s5=w`
  margin-top: 1.5rem;
`,a5=w`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,u5=w`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,c5=e=>w`
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
`,Zr=e=>w`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${I}, box-shadow ${I};
`,W=e=>w`
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
`,D=e=>w`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${I}, border-color ${I};
`,Gr=w`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hn=e=>w`
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
`,Jr=e=>w`
  ${Hn(e)}
  &:hover {
    color: #dc2626;
  }
`,Xr=w`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Mr=e=>w`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${I};
`,qr=e=>w`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${I};
`,ei=e=>w`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${I};
`,ti=e=>w`
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
`,ni=w`
  padding: 1.5rem;
`,ee=w`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,te=e=>w`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${I};
`,le=e=>w`
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
`,Ud=e=>w`
  ${le(e)}
  min-height: 80px;
  resize: vertical;
`,ri=e=>w`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${I};
`,ii=e=>w`
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
`,li=w`
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
`,d5=[{id:"dashboard",label:"Dashboard",icon:Ou},{id:"students",label:"Students",icon:uo},{id:"lecturers",label:"Lecturers",icon:Vi},{id:"courses",label:"Courses",icon:Wi},{id:"departments",label:"Departments",icon:ci},{id:"degrees",label:"Degrees",icon:Wi},{id:"calendar",label:"Calendar",icon:Ru}];function f5(e){if(!e||typeof e!="string")return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function p5({darkMode:e,onToggleDarkMode:t}){const n=Xi(),[r,i]=x.useState("dashboard"),[l,o]=x.useState([]),[s,u]=x.useState(!1),[d,y]=x.useState(""),[m,h]=x.useState(!1),[S,k]=x.useState(null),[C,P]=x.useState({code:"",name:"",description:""}),[p,f]=x.useState(!1),g=x.useCallback(async()=>{u(!0);try{const _=await(await fetch(`${se}/backend/departments.php`)).json();_.success&&o(_.departments||[])}catch{o([])}finally{u(!1)}},[]);x.useEffect(()=>{r==="departments"&&g()},[r,g]);const[E,b]=x.useState([]),[N,L]=x.useState(!1),[O,M]=x.useState(""),[A,be]=x.useState(!1),[Re,Rt]=x.useState(null),[it,lt]=x.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:"",degree:""}),[Tn,zn]=x.useState(!1),[T,j]=x.useState([]),R=x.useCallback(async()=>{L(!0);try{const _=await(await fetch(`${se}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();_.success&&b(_.students||[])}catch{b([])}finally{L(!1)}},[]),J=x.useCallback(async()=>{try{const _=await(await fetch(`${se}/backend/departments.php`)).json();_.success&&j(_.departments||[])}catch{j([])}},[]);x.useEffect(()=>{r==="students"&&R(),(r==="students"||r==="lecturers"||r==="courses"||r==="degrees")&&J()},[r,R,J]);const[q,on]=x.useState([]),[ot,On]=x.useState(!1),[De,jn]=x.useState(""),[Rh,Bo]=x.useState(!1),[Rn,Iu]=x.useState(null),[Er,Dn]=x.useState({lecturer_id:"",full_name:"",email:"",department:""}),[Au,Fu]=x.useState(!1),_r=x.useCallback(async()=>{On(!0);try{const _=await(await fetch(`${se}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();_.success&&on(_.lecturers||[])}catch{on([])}finally{On(!1)}},[]);x.useEffect(()=>{(r==="lecturers"||r==="courses")&&_r()},[r,_r]);const Dh=()=>{Iu(null),Dn({lecturer_id:"",full_name:"",email:"",department:""}),Bo(!0)},Ih=c=>{Iu(c.id),Dn({lecturer_id:c.lecturer_id||"",full_name:c.full_name||"",email:c.email||"",department:c.department||""}),Bo(!0)},$r=()=>Bo(!1),Ah=async()=>{const{lecturer_id:c,full_name:_,email:U,department:Ne}=Er;if(!(!c.trim()||!_.trim()||!U.trim()||!Ne.trim())){Fu(!0);try{Rn?(await(await fetch(`${se}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Rn,lecturer_id:c.trim(),full_name:_.trim(),email:U.trim(),department:Ne.trim()})})).json()).success&&($r(),_r()):(await(await fetch(`${se}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:c.trim(),full_name:_.trim(),email:U.trim(),department:Ne.trim()})})).json()).success&&($r(),_r())}finally{Fu(!1)}}},Fh=async c=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${se}/backend/lecturers.php?id=${c}`,{method:"DELETE"})).json()).success&&_r()}catch{}},Uu=q.filter(c=>!De||(c.lecturer_id||"").toLowerCase().includes(De.toLowerCase())||(c.full_name||"").toLowerCase().includes(De.toLowerCase())||(c.email||"").toLowerCase().includes(De.toLowerCase())||(c.department||"").toLowerCase().includes(De.toLowerCase())),[Wo,Bu]=x.useState([]),[Vo,Wu]=x.useState(!1),[In,Uh]=x.useState(""),[Bh,Ho]=x.useState(!1),[Lr,Vu]=x.useState(null),[Dt,sn]=x.useState({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0}),[Hu,Qu]=x.useState(!1),Pr=x.useCallback(async()=>{Wu(!0);try{const _=await(await fetch(`${se}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})).json();_.success&&Bu(_.courses||[])}catch{Bu([])}finally{Wu(!1)}},[]);x.useEffect(()=>{r==="courses"&&Pr()},[r,Pr]);const Wh=()=>{Vu(null),sn({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0}),Ho(!0)},Vh=c=>{Vu(c.id),sn({course_code:c.course_code||"",course_name:c.course_name||"",department:c.department||"",lecturer_id:c.lecturer_id||"",credits:Number(c.credits)||0}),Ho(!0)},br=()=>Ho(!1),Hh=async()=>{const{course_code:c,course_name:_,department:U,lecturer_id:Ne,credits:st}=Dt;if(!(!c.trim()||!_.trim())){Qu(!0);try{Lr?(await(await fetch(`${se}/backend/courses.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Lr,course_code:c.trim(),course_name:_.trim(),department:U.trim()||"",lecturer_id:Ne.trim()||"",credits:Number(st)||0})})).json()).success&&(br(),Pr()):(await(await fetch(`${se}/backend/courses.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({course_code:c.trim(),course_name:_.trim(),department:U.trim()||"",lecturer_id:Ne.trim()||"",credits:Number(st)||0})})).json()).success&&(br(),Pr())}finally{Qu(!1)}}},Qh=async c=>{if(confirm("Delete this course?"))try{(await(await fetch(`${se}/backend/courses.php?id=${c}`,{method:"DELETE"})).json()).success&&Pr()}catch{}},Ku=Wo.filter(c=>!In||(c.course_code||"").toLowerCase().includes(In.toLowerCase())||(c.course_name||"").toLowerCase().includes(In.toLowerCase())||(c.department||"").toLowerCase().includes(In.toLowerCase())||(c.lecturer_name||"").toLowerCase().includes(In.toLowerCase())),[Qo,Yu]=x.useState([]),[Kh,Zu]=x.useState(!1),[An,Yh]=x.useState(""),[Zh,Ko]=x.useState(!1),[el,Gu]=x.useState(null),[Nr,Fn]=x.useState({code:"",name:"",department:"",description:""}),[Ju,Xu]=x.useState(!1),Tr=x.useCallback(async()=>{Zu(!0);try{const _=await(await fetch(`${se}/backend/degrees.php?t=${Date.now()}`,{cache:"no-store"})).json();_.success&&Yu(_.degrees||[])}catch{Yu([])}finally{Zu(!1)}},[]);x.useEffect(()=>{(r==="degrees"||r==="students")&&Tr()},[r,Tr]);const Gh=()=>{Gu(null),Fn({code:"",name:"",department:"",description:""}),Ko(!0)},Jh=c=>{Gu(c.id),Fn({code:c.code||"",name:c.name||"",department:c.department||"",description:c.description||""}),Ko(!0)},zr=()=>Ko(!1),Xh=async()=>{const{code:c,name:_,department:U,description:Ne}=Nr;if(!(!c.trim()||!_.trim())){Xu(!0);try{el?(await(await fetch(`${se}/backend/degrees.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:el,code:c.trim(),name:_.trim(),department:U.trim(),description:Ne.trim()})})).json()).success&&(zr(),Tr()):(await(await fetch(`${se}/backend/degrees.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:c.trim(),name:_.trim(),department:U.trim(),description:Ne.trim()})})).json()).success&&(zr(),Tr())}finally{Xu(!1)}}},Mh=async c=>{if(confirm("Delete this degree?"))try{(await(await fetch(`${se}/backend/degrees.php?id=${c}`,{method:"DELETE"})).json()).success&&Tr()}catch{}},Mu=Qo.filter(c=>!An||(c.code||"").toLowerCase().includes(An.toLowerCase())||(c.name||"").toLowerCase().includes(An.toLowerCase())||(c.department||"").toLowerCase().includes(An.toLowerCase())||(c.description||"").toLowerCase().includes(An.toLowerCase())),qh=()=>{Rt(null),lt({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:"",degree:""}),be(!0)},em=c=>{Rt(c.id),lt({student_id:c.student_id,full_name:c.full_name,email:c.email,password:"",department:c.department||"",year:c.year||"",degree:c.degree||""}),be(!0)},Or=()=>be(!1),tm=async()=>{const{student_id:c,full_name:_,email:U,password:Ne,department:st,year:It,degree:tl}=it;if(!(!c.trim()||!_.trim()||!U.trim())&&!(!Re&&!Ne.trim())){zn(!0);try{Re?(await(await fetch(`${se}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Re,student_id:c.trim(),full_name:_.trim(),email:U.trim(),password:Ne.trim(),department:st.trim()||"",year:It.trim()||"",degree:tl.trim()||""})})).json()).success&&(Or(),R()):(await(await fetch(`${se}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:c.trim(),full_name:_.trim(),email:U.trim(),password:Ne.trim(),department:st.trim()||"",year:It.trim()||"",degree:tl.trim()||""})})).json()).success&&(Or(),R())}finally{zn(!1)}}},nm=async c=>{if(confirm("Delete this student?"))try{(await(await fetch(`${se}/backend/students.php?id=${c}`,{method:"DELETE"})).json()).success&&R()}catch{}},qu=E.filter(c=>!O||(c.student_id||"").toLowerCase().includes(O.toLowerCase())||(c.full_name||"").toLowerCase().includes(O.toLowerCase())||(c.email||"").toLowerCase().includes(O.toLowerCase())||(c.department||"").toLowerCase().includes(O.toLowerCase())||(c.degree||"").toLowerCase().includes(O.toLowerCase())),rm=["Foundation","Year 1","Year 2","Placement Year","Year 4"],im=()=>{k(null),P({code:"",name:"",description:""}),h(!0)},lm=c=>{k(c.id),P({code:c.code,name:c.name,description:c.description||""}),h(!0)},jr=()=>h(!1),om=async()=>{const{code:c,name:_,description:U}=C;if(!(!c.trim()||!_.trim())){f(!0);try{S?(await(await fetch(`${se}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:S,code:c.trim(),name:_.trim(),description:U.trim()})})).json()).success&&(jr(),g()):(await(await fetch(`${se}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:c.trim(),name:_.trim(),description:U.trim()})})).json()).success&&(jr(),g())}finally{f(!1)}}},sm=async c=>{if(confirm("Delete this department?"))try{(await(await fetch(`${se}/backend/departments.php?id=${c}`,{method:"DELETE"})).json()).success&&g()}catch{}},ec=l.filter(c=>!d||c.code.toLowerCase().includes(d.toLowerCase())||c.name.toLowerCase().includes(d.toLowerCase())||(c.description||"").toLowerCase().includes(d.toLowerCase()));let Yo="Admin Portal";try{const c=localStorage.getItem("strack_user");if(c){const _=JSON.parse(c),U=(_==null?void 0:_.name)||"";Yo=U==="Test Admin"||U==="Admin"?"Admin Portal":U||"Admin Portal"}}catch{}const am=()=>{try{localStorage.removeItem("strack_user")}catch{}n("/")};return v("div",{css:I2(e),children:[v("aside",{css:A2(e),children:[v("header",{css:F2,children:[v("div",{css:U2,children:[a("div",{css:B2(e),children:a(Vi,{})}),a("span",{css:W2(e),children:"Strack"})]}),a("button",{type:"button",css:V2(e),onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?a(zu,{}):a(ju,{})})]}),v("div",{css:H2,children:[a("div",{css:Q2,children:f5(Yo)}),v("div",{css:K2,children:[a("div",{css:Y2(e),children:Yo}),a("div",{css:Z2(e),children:"Admin"})]})]}),a("nav",{css:G2,children:d5.map(({id:c,label:_,icon:U})=>v("button",{type:"button",css:J2(e,r===c),onClick:()=>i(c),children:[a(U,{}),_]},c))}),v("button",{type:"button",css:X2,onClick:am,children:[a(Du,{}),"Logout"]})]}),a("main",{css:M2(e),children:v("div",{css:q2(e,r==="departments"||r==="students"||r==="lecturers"||r==="courses"||r==="degrees"),children:[r==="dashboard"&&v(ae,{children:[a("h1",{css:Od,children:"Dashboard"}),a("p",{css:jd,children:"Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings."})]}),r==="students"&&v(ae,{children:[v("div",{css:Cs,children:[v("div",{children:[a("h1",{css:ks,children:"Manage Students"}),a("p",{css:Es(e),children:"Add, edit, or remove student records."})]}),a("button",{type:"button",css:_s,onClick:qh,children:"+ Add Student"})]}),v("div",{css:$s,children:[v("div",{css:cn(e),children:[a("span",{css:pn(e),children:a(uo,{})}),v("div",{css:hn,children:[a("p",{css:fn(e),children:"Total Students"}),a("p",{css:dn(e),children:N?"...":E.length})]})]}),v("div",{css:Ls,children:[T.length>0?T.map(c=>{const _=E.filter(U=>(U.department||"")===c.name).length;return v("div",{css:cn(e),children:[a("span",{css:pn(e),children:a(ci,{})}),v("div",{css:hn,children:[a("p",{css:fn(e),children:c.name}),a("p",{css:dn(e),children:N?"...":_})]})]},c.id)}):null,(()=>{const c=E.filter(_=>!_.department).length;return c<=0?null:v("div",{css:cn(e),children:[a("span",{css:pn(e),children:a(Vi,{})}),v("div",{css:hn,children:[a("p",{css:fn(e),children:"Unassigned"}),a("p",{css:dn(e),children:N?"...":c})]})]})})()]})]}),v("div",{css:xl(e),children:[a(Yr,{}),a("input",{type:"text",placeholder:"Search students...",value:O,onChange:c=>M(c.target.value)})]}),v("table",{css:Zr(e),children:[a("thead",{children:v("tr",{children:[a("th",{css:W(e),children:"Student ID"}),a("th",{css:W(e),children:"Name"}),a("th",{css:W(e),children:"Email"}),a("th",{css:W(e),children:"Department"}),a("th",{css:W(e),children:"Degree"}),a("th",{css:W(e),children:"Year"}),a("th",{css:W(e),children:"GPA"}),a("th",{css:W(e),children:"Points"}),a("th",{css:W(e),children:"Attendance"}),a("th",{css:W(e),children:"Actions"})]})}),a("tbody",{children:N?a("tr",{children:a("td",{css:D(e),colSpan:10,children:"Loading..."})}):qu.length===0?a("tr",{children:a("td",{css:D(e),colSpan:10,children:"No students found."})}):qu.map(c=>{var _;return v("tr",{children:[a("td",{css:D(e),children:c.student_id}),a("td",{css:D(e),children:c.full_name}),a("td",{css:D(e),children:c.email}),a("td",{css:D(e),children:c.department||"—"}),a("td",{css:D(e),children:((_=Qo.find(U=>U.code===c.degree))==null?void 0:_.name)||c.degree||"—"}),a("td",{css:D(e),children:c.year||"—"}),a("td",{css:D(e),children:Number(c.gpa)||0}),a("td",{css:D(e),children:v("span",{css:t5,children:[a(zh,{}),Number(c.points)||0]})}),a("td",{css:D(e),children:v("span",{css:e5(Number(c.attendance)||0,e),children:[Number(c.attendance)||0,"%"]})}),a("td",{css:D(e),children:v("div",{css:Gr,children:[a("button",{type:"button",css:Hn(e),onClick:()=>em(c),title:"Edit",children:a(Kr,{})}),a("button",{type:"button",css:Jr(e),onClick:()=>nm(c.id),title:"Delete",children:a(Qr,{})})]})})]},c.id)})})]})]}),r==="lecturers"&&v(ae,{children:[v("div",{css:Cs,children:[v("div",{children:[a("h1",{css:ks,children:"Lecturer Management"}),a("p",{css:Es(e),children:"Manage teaching staff and teaching assignments."})]}),a("button",{type:"button",css:_s,onClick:Dh,children:"+ Add Lecturer"})]}),v("div",{css:$s,children:[v("div",{css:cn(e),children:[a("span",{css:pn(e),children:a(uo,{})}),v("div",{css:hn,children:[a("p",{css:fn(e),children:"Total Lecturers"}),a("p",{css:dn(e),children:ot?"...":q.length})]})]}),a("div",{css:Ls,children:T.length>0?T.map(c=>{const _=q.filter(U=>(U.department||"")===c.name).length;return v("div",{css:cn(e),children:[a("span",{css:pn(e),children:a(ci,{})}),v("div",{css:hn,children:[a("p",{css:fn(e),children:c.name}),a("p",{css:dn(e),children:ot?"...":_})]})]},c.id)}):null})]}),v("div",{css:xl(e),children:[a(Yr,{}),a("input",{type:"text",placeholder:"Search lecturers...",value:De,onChange:c=>jn(c.target.value)})]}),v("table",{css:Zr(e),children:[a("thead",{children:v("tr",{children:[a("th",{css:W(e),children:"Lecturer ID"}),a("th",{css:W(e),children:"Name"}),a("th",{css:W(e),children:"Email"}),a("th",{css:W(e),children:"Department"}),a("th",{css:W(e),children:"Modules"}),a("th",{css:W(e),children:"Actions"})]})}),a("tbody",{children:ot?a("tr",{children:a("td",{css:D(e),colSpan:6,children:"Loading..."})}):Uu.length===0?a("tr",{children:a("td",{css:D(e),colSpan:6,children:"No lecturers found."})}):Uu.map(c=>v("tr",{children:[a("td",{css:D(e),children:c.lecturer_id}),a("td",{css:D(e),children:c.full_name}),a("td",{css:D(e),children:c.email}),a("td",{css:D(e),children:c.department||"—"}),a("td",{css:D(e),children:Number(c.modules)||0}),a("td",{css:D(e),children:v("div",{css:Gr,children:[a("button",{type:"button",css:Hn(e),onClick:()=>Ih(c),title:"Edit",children:a(Kr,{})}),a("button",{type:"button",css:Jr(e),onClick:()=>Fh(c.id),title:"Delete",children:a(Qr,{})})]})})]},c.id))})]})]}),r==="courses"&&v(ae,{children:[v("div",{css:Cs,children:[v("div",{children:[a("h1",{css:ks,children:"Course Management"}),a("p",{css:Es(e),children:"Manage course catalog."})]}),a("button",{type:"button",css:_s,onClick:Wh,children:"+ Add Course"})]}),v("div",{css:$s,children:[v("div",{css:cn(e),children:[a("span",{css:pn(e),children:a(Wi,{})}),v("div",{css:hn,children:[a("p",{css:fn(e),children:"Total Courses"}),a("p",{css:dn(e),children:Vo?"...":Wo.length})]})]}),a("div",{css:Ls,children:T.length>0?T.map(c=>{const _=Wo.filter(U=>(U.department||"")===c.name).length;return v("div",{css:cn(e),children:[a("span",{css:pn(e),children:a(ci,{})}),v("div",{css:hn,children:[a("p",{css:fn(e),children:c.name}),a("p",{css:dn(e),children:Vo?"...":_})]})]},c.id)}):null})]}),v("div",{css:xl(e),children:[a(Yr,{}),a("input",{type:"text",placeholder:"Search courses...",value:In,onChange:c=>Uh(c.target.value)})]}),v("table",{css:Zr(e),children:[a("thead",{children:v("tr",{children:[a("th",{css:W(e),children:"Course Code"}),a("th",{css:W(e),children:"Course Name"}),a("th",{css:W(e),children:"Department"}),a("th",{css:W(e),children:"Lecturer"}),a("th",{css:W(e),children:"Credits"}),a("th",{css:W(e),children:"Actions"})]})}),a("tbody",{children:Vo?a("tr",{children:a("td",{css:D(e),colSpan:6,children:"Loading..."})}):Ku.length===0?a("tr",{children:a("td",{css:D(e),colSpan:6,children:"No courses found."})}):Ku.map(c=>v("tr",{children:[a("td",{css:D(e),children:c.course_code}),a("td",{css:D(e),children:c.course_name}),a("td",{css:D(e),children:c.department||"—"}),a("td",{css:D(e),children:c.lecturer_name||"—"}),a("td",{css:D(e),children:v("span",{css:o5(),children:[Number(c.credits)||0," credits"]})}),a("td",{css:D(e),children:v("div",{css:Gr,children:[a("button",{type:"button",css:Hn(e),onClick:()=>Vh(c),title:"Edit",children:a(Kr,{})}),a("button",{type:"button",css:Jr(e),onClick:()=>Qh(c.id),title:"Delete",children:a(Qr,{})})]})})]},c.id))})]})]}),r==="degrees"&&v(ae,{children:[v("div",{css:Rd,children:[v("div",{css:Dd,children:[a("h1",{css:Id,children:"Degrees"}),a("p",{css:Ad(e),children:"Create, view, edit, and delete degrees."})]}),a("button",{type:"button",css:Fd,onClick:Gh,children:"+ Add Degree"})]}),v("div",{css:xl(e),children:[a(Yr,{}),a("input",{type:"text",placeholder:"Search degrees...",value:An,onChange:c=>Yh(c.target.value)})]}),v("table",{css:Zr(e),children:[a("thead",{children:v("tr",{children:[a("th",{css:W(e),children:"Code"}),a("th",{css:W(e),children:"Name"}),a("th",{css:W(e),children:"Department"}),a("th",{css:W(e),children:"Description"}),a("th",{css:W(e),children:"Actions"})]})}),a("tbody",{children:Kh?a("tr",{children:a("td",{css:D(e),colSpan:5,children:"Loading..."})}):Mu.length===0?a("tr",{children:a("td",{css:D(e),colSpan:5,children:"No degrees found."})}):Mu.map(c=>v("tr",{children:[a("td",{css:D(e),children:c.code}),a("td",{css:D(e),children:c.name}),a("td",{css:D(e),children:c.department||"—"}),a("td",{css:D(e),children:c.description||"—"}),a("td",{css:D(e),children:v("div",{css:Gr,children:[a("button",{type:"button",css:Hn(e),onClick:()=>Jh(c),title:"Edit",children:a(Kr,{})}),a("button",{type:"button",css:Jr(e),onClick:()=>Mh(c.id),title:"Delete",children:a(Qr,{})})]})})]},c.id))})]})]}),r==="departments"&&v(ae,{children:[v("div",{css:Rd,children:[v("div",{css:Dd,children:[a("h1",{css:Id,children:"Departments"}),a("p",{css:Ad(e),children:"Manage university departments."})]}),a("button",{type:"button",css:Fd,onClick:im,children:"+ Add Department"})]}),v("div",{css:n5(e),children:[a("div",{css:r5(e),children:a(ci,{})}),v("div",{children:[a("p",{css:l5(e),children:"Total Departments"}),a("p",{css:i5(e),children:s?"...":l.length})]})]}),v("div",{css:s5,children:[v("div",{css:a5,children:[a("h2",{css:u5,children:"All Departments"}),v("div",{css:c5(e),children:[a(Yr,{}),a("input",{type:"text",placeholder:"Search departments...",value:d,onChange:c=>y(c.target.value)})]})]}),v("table",{css:Zr(e),children:[a("thead",{children:v("tr",{children:[a("th",{css:W(e),children:"Code"}),a("th",{css:W(e),children:"Name"}),a("th",{css:W(e),children:"Description"}),a("th",{css:W(e),children:"Actions"})]})}),a("tbody",{children:s?a("tr",{children:a("td",{css:D(e),colSpan:4,children:"Loading..."})}):ec.length===0?a("tr",{children:a("td",{css:D(e),colSpan:4,children:"No departments found."})}):ec.map(c=>v("tr",{children:[a("td",{css:D(e),children:c.code}),a("td",{css:D(e),children:c.name}),a("td",{css:D(e),children:c.description||"—"}),a("td",{css:D(e),children:v("div",{css:Gr,children:[a("button",{type:"button",css:Hn(e),onClick:()=>lm(c),title:"Edit",children:a(Kr,{})}),a("button",{type:"button",css:Jr(e),onClick:()=>sm(c.id),title:"Delete",children:a(Qr,{})})]})})]},c.id))})]})]})]}),r==="calendar"&&v(ae,{children:[a("h1",{css:Od,children:"Calendar"}),a("p",{css:jd,children:"This is the calendar page. View and manage academic calendar, deadlines, and events here."})]})]})}),A&&a("div",{css:Xr,onClick:Or,children:v("div",{css:Mr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:qr(e),children:[a("h3",{css:ei(e),children:Re?"Edit Student":"Add Student"}),a("button",{type:"button",css:ti(e),onClick:Or,"aria-label":"Close",children:a(Hr,{})})]}),v("div",{css:ni,children:[v("div",{css:ee,children:[a("label",{css:te(e),children:"Full Name *"}),a("input",{type:"text",css:le(e),placeholder:"e.g. Ava Thomas",value:it.full_name,onChange:c=>lt(_=>({..._,full_name:c.target.value}))})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Email *"}),a("input",{type:"email",css:le(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:it.email,onChange:c=>lt(_=>({..._,email:c.target.value}))})]}),!Re&&v("div",{css:ee,children:[a("label",{css:te(e),children:"Password *"}),a("input",{type:"password",css:le(e),placeholder:"e.g. student123",value:it.password,onChange:c=>lt(_=>({..._,password:c.target.value}))})]}),v("div",{css:ee,children:[v("label",{css:te(e),children:["Student ID ",Re?"":"*"]}),a("input",{type:"text",css:le(e),placeholder:"e.g. STU2024008",value:it.student_id,onChange:c=>lt(_=>({..._,student_id:c.target.value})),readOnly:!!Re})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:it.department,onChange:c=>lt(_=>({..._,department:c.target.value})),children:[a("option",{value:"",children:"Select department"}),T.map(c=>a("option",{value:c.name,children:c.name},c.id))]})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Degree"}),v("select",{css:le(e),value:it.degree,onChange:c=>lt(_=>({..._,degree:c.target.value})),children:[a("option",{value:"",children:"Select degree"}),Qo.map(c=>a("option",{value:c.code,children:c.name},c.id))]})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Year"}),v("select",{css:le(e),value:it.year,onChange:c=>lt(_=>({..._,year:c.target.value})),children:[a("option",{value:"",children:"Select year"}),rm.map(c=>a("option",{value:c,children:c},c))]})]})]}),v("div",{css:ri(e),children:[a("button",{type:"button",css:ii(e),onClick:Or,children:"Cancel"}),a("button",{type:"button",css:li,onClick:tm,disabled:Tn,children:Tn?"Saving...":Re?"Save Changes":"Add Student"})]})]})}),Rh&&a("div",{css:Xr,onClick:$r,children:v("div",{css:Mr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:qr(e),children:[a("h3",{css:ei(e),children:Rn?"Edit Lecturer":"Add Lecturer"}),a("button",{type:"button",css:ti(e),onClick:$r,"aria-label":"Close",children:a(Hr,{})})]}),v("div",{css:ni,children:[v("div",{css:ee,children:[a("label",{css:te(e),children:"Full Name *"}),a("input",{type:"text",css:le(e),placeholder:"e.g. Dr. Sarah Johnson",value:Er.full_name,onChange:c=>Dn(_=>({..._,full_name:c.target.value}))})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Email *"}),a("input",{type:"email",css:le(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:Er.email,onChange:c=>Dn(_=>({..._,email:c.target.value}))})]}),v("div",{css:ee,children:[v("label",{css:te(e),children:["Lecturer ID ",Rn?"":"*"]}),a("input",{type:"text",css:le(e),placeholder:"e.g. LEC001",value:Er.lecturer_id,onChange:c=>Dn(_=>({..._,lecturer_id:c.target.value})),readOnly:!!Rn})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:Er.department,onChange:c=>Dn(_=>({..._,department:c.target.value})),children:[a("option",{value:"",children:"Select department"}),T.map(c=>a("option",{value:c.name,children:c.name},c.id))]})]})]}),v("div",{css:ri(e),children:[a("button",{type:"button",css:ii(e),onClick:$r,children:"Cancel"}),a("button",{type:"button",css:li,onClick:Ah,disabled:Au,children:Au?"Saving...":Rn?"Update Lecturer":"Add Lecturer"})]})]})}),Bh&&a("div",{css:Xr,onClick:br,children:v("div",{css:Mr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:qr(e),children:[a("h3",{css:ei(e),children:Lr?"Edit Course":"Add Course"}),a("button",{type:"button",css:ti(e),onClick:br,"aria-label":"Close",children:a(Hr,{})})]}),v("div",{css:ni,children:[v("div",{css:ee,children:[a("label",{css:te(e),children:"Course Code *"}),a("input",{type:"text",css:le(e),placeholder:"e.g. CS201",value:Dt.course_code,onChange:c=>sn(_=>({..._,course_code:c.target.value})),readOnly:!!Lr})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Course Name *"}),a("input",{type:"text",css:le(e),placeholder:"e.g. Data Structures and Algorithms",value:Dt.course_name,onChange:c=>sn(_=>({..._,course_name:c.target.value}))})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:Dt.department,onChange:c=>sn(_=>({..._,department:c.target.value})),children:[a("option",{value:"",children:"Select department"}),T.map(c=>a("option",{value:c.name,children:c.name},c.id))]})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Lecturer"}),v("select",{css:le(e),value:Dt.lecturer_id,onChange:c=>sn(_=>({..._,lecturer_id:c.target.value})),children:[a("option",{value:"",children:"Select lecturer"}),q.filter(c=>!Dt.department||(c.department||"")===Dt.department).map(c=>a("option",{value:c.lecturer_id,children:c.full_name},c.id))]})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Credits"}),a("input",{type:"number",css:le(e),placeholder:"e.g. 4",value:Dt.credits,onChange:c=>sn(_=>({..._,credits:Number(c.target.value)||0})),min:0})]})]}),v("div",{css:ri(e),children:[a("button",{type:"button",css:ii(e),onClick:br,children:"Cancel"}),a("button",{type:"button",css:li,onClick:Hh,disabled:Hu,children:Hu?"Saving...":Lr?"Update Course":"Add Course"})]})]})}),Zh&&a("div",{css:Xr,onClick:zr,children:v("div",{css:Mr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:qr(e),children:[a("h3",{css:ei(e),children:el?"Edit Degree":"Add Degree"}),a("button",{type:"button",css:ti(e),onClick:zr,"aria-label":"Close",children:a(Hr,{})})]}),v("div",{css:ni,children:[v("div",{css:ee,children:[a("label",{css:te(e),children:"Code *"}),a("input",{type:"text",css:le(e),placeholder:"e.g. CS",value:Nr.code,onChange:c=>Fn(_=>({..._,code:c.target.value}))})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Name *"}),a("input",{type:"text",css:le(e),placeholder:"e.g. BSc Computer Science",value:Nr.name,onChange:c=>Fn(_=>({..._,name:c.target.value}))})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Department"}),v("select",{css:le(e),value:Nr.department,onChange:c=>Fn(_=>({..._,department:c.target.value})),children:[a("option",{value:"",children:"Select department"}),T.map(c=>a("option",{value:c.name,children:c.name},c.id))]})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Description"}),a("textarea",{css:Ud(e),placeholder:"Optional description",value:Nr.description,onChange:c=>Fn(_=>({..._,description:c.target.value}))})]})]}),v("div",{css:ri(e),children:[a("button",{type:"button",css:ii(e),onClick:zr,children:"Cancel"}),a("button",{type:"button",css:li,onClick:Xh,disabled:Ju,children:Ju?"Saving...":el?"Update Degree":"Add Degree"})]})]})}),m&&a("div",{css:Xr,onClick:jr,children:v("div",{css:Mr(e),onClick:c=>c.stopPropagation(),children:[v("div",{css:qr(e),children:[a("h3",{css:ei(e),children:S?"Edit Department":"Add New Department"}),a("button",{type:"button",css:ti(e),onClick:jr,"aria-label":"Close",children:a(Hr,{})})]}),v("div",{css:ni,children:[v("div",{css:ee,children:[a("label",{css:te(e),children:"Department Name"}),a("input",{type:"text",css:le(e),placeholder:"e.g. Newcastle Business School",value:C.name,onChange:c=>P(_=>({..._,name:c.target.value}))})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Department Code"}),a("input",{type:"text",css:le(e),placeholder:"e.g. NBS",value:C.code,onChange:c=>P(_=>({..._,code:c.target.value}))})]}),v("div",{css:ee,children:[a("label",{css:te(e),children:"Description"}),a("textarea",{css:Ud(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:C.description,onChange:c=>P(_=>({..._,description:c.target.value}))})]})]}),v("div",{css:ri(e),children:[a("button",{type:"button",css:ii(e),onClick:jr,children:"Cancel"}),a("button",{type:"button",css:li,onClick:om,disabled:p,children:p?"Saving...":S?"Update Department":"Add Department"})]})]})})]})}const h5="/strack",Bd="strack_dark";function m5(){const[e,t]=x.useState(()=>{try{return localStorage.getItem(Bd)==="true"}catch{return!1}});x.useEffect(()=>{try{localStorage.setItem(Bd,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const n=()=>t(r=>!r);return he.jsx(Og,{basename:h5,children:he.jsxs(Ng,{children:[he.jsx(Vn,{path:"/",element:he.jsx(ny,{darkMode:e,onToggleDarkMode:n})}),he.jsx(Vn,{path:"/dashboard",element:he.jsx(g2,{darkMode:e,onToggleDarkMode:n})}),he.jsx(Vn,{path:"/lecturer",element:he.jsx(D2,{darkMode:e,onToggleDarkMode:n})}),he.jsx(Vn,{path:"/admin",element:he.jsx(p5,{darkMode:e,onToggleDarkMode:n})}),he.jsx(Vn,{path:"*",element:he.jsx(Pg,{to:"/",replace:!0})})]})})}bs.createRoot(document.getElementById("root")).render(he.jsx(Pt.StrictMode,{children:he.jsx(m5,{})}));
