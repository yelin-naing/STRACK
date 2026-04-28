import{r as a,a as Fu,R as mc,b as Dn,c as xt,P as Uu,d as Wu,C as no,T as Ct,L as Nr,B as zn,e as Nt,X as Dt,Y as zt,f as It,g as js,h as Qn}from"./recharts-2w4YECxn.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(c){if(c.ep)return;c.ep=!0;const l=i(c);fetch(c.href,l)}})();var Hu={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=a,sh=Symbol.for("react.element"),ih=Symbol.for("react.fragment"),oh=Object.prototype.hasOwnProperty,ah=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ch={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,n,i){var o,c={},l=null,u=null;i!==void 0&&(l=""+i),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(u=n.ref);for(o in n)oh.call(n,o)&&!ch.hasOwnProperty(o)&&(c[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)c[o]===void 0&&(c[o]=n[o]);return{$$typeof:sh,type:e,key:l,ref:u,props:c,_owner:ah.current}}bo.Fragment=ih;bo.jsx=Yu;bo.jsxs=Yu;Hu.exports=bo;var tt=Hu.exports,hc={},ol=Fu;hc.createRoot=ol.createRoot,hc.hydrateRoot=ol.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Rs.apply(this,arguments)}var Nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nn||(Nn={}));const al="popstate";function lh(e){e===void 0&&(e={});function n(o,c){let{pathname:l,search:u,hash:p}=o.location;return fc("",{pathname:l,search:u,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(o,c){return typeof c=="string"?c:Ku(c)}return uh(n,i,null,e)}function st(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Cc(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function dh(){return Math.random().toString(36).substr(2,8)}function cl(e,n){return{usr:e.state,key:e.key,idx:n}}function fc(e,n,i,o){return i===void 0&&(i=null),Rs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Rr(n):n,{state:i,key:n&&n.key||o||dh()})}function Ku(e){let{pathname:n="/",search:i="",hash:o=""}=e;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Rr(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substr(i),e=e.substr(0,i));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function uh(e,n,i,o){o===void 0&&(o={});let{window:c=document.defaultView,v5Compat:l=!1}=o,u=c.history,p=Nn.Pop,b=null,v=g();v==null&&(v=0,u.replaceState(Rs({},u.state,{idx:v}),""));function g(){return(u.state||{idx:null}).idx}function y(){p=Nn.Pop;let _=g(),L=_==null?null:_-v;v=_,b&&b({action:p,location:A.location,delta:L})}function w(_,L){p=Nn.Push;let z=fc(A.location,_,L);v=g()+1;let W=cl(z,v),F=A.createHref(z);try{u.pushState(W,"",F)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;c.location.assign(F)}l&&b&&b({action:p,location:A.location,delta:1})}function P(_,L){p=Nn.Replace;let z=fc(A.location,_,L);v=g();let W=cl(z,v),F=A.createHref(z);u.replaceState(W,"",F),l&&b&&b({action:p,location:A.location,delta:0})}function x(_){let L=c.location.origin!=="null"?c.location.origin:c.location.href,z=typeof _=="string"?_:Ku(_);return z=z.replace(/ $/,"%20"),st(L,"No window.location.(origin|href) available to create URL for href: "+z),new URL(z,L)}let A={get action(){return p},get location(){return e(c,u)},listen(_){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(al,y),b=_,()=>{c.removeEventListener(al,y),b=null}},createHref(_){return n(c,_)},createURL:x,encodeLocation(_){let L=x(_);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:w,replace:P,go(_){return u.go(_)}};return A}var ll;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ll||(ll={}));function mh(e,n,i){return i===void 0&&(i="/"),hh(e,n,i)}function hh(e,n,i,o){let c=typeof n=="string"?Rr(n):n,l=Ju(c.pathname||"/",i);if(l==null)return null;let u=Vu(e);fh(u);let p=null;for(let b=0;p==null&&b<u.length;++b){let v=Ah(l);p=$h(u[b],v)}return p}function Vu(e,n,i,o){n===void 0&&(n=[]),i===void 0&&(i=[]),o===void 0&&(o="");let c=(l,u,p)=>{let b={relativePath:p===void 0?l.path||"":p,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};b.relativePath.startsWith("/")&&(st(b.relativePath.startsWith(o),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(o.length));let v=Mn([o,b.relativePath]),g=i.concat(b);l.children&&l.children.length>0&&(st(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Vu(l.children,n,g,v)),!(l.path==null&&!l.index)&&n.push({path:v,score:xh(v,l.index),routesMeta:g})};return e.forEach((l,u)=>{var p;if(l.path===""||!((p=l.path)!=null&&p.includes("?")))c(l,u);else for(let b of Gu(l.path))c(l,u,b)}),n}function Gu(e){let n=e.split("/");if(n.length===0)return[];let[i,...o]=n,c=i.endsWith("?"),l=i.replace(/\?$/,"");if(o.length===0)return c?[l,""]:[l];let u=Gu(o.join("/")),p=[];return p.push(...u.map(b=>b===""?l:[l,b].join("/"))),c&&p.push(...u),p.map(b=>e.startsWith("/")&&b===""?"/":b)}function fh(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:Sh(n.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const ph=/^:[\w-]+$/,gh=3,bh=2,yh=1,wh=10,vh=-2,dl=e=>e==="*";function xh(e,n){let i=e.split("/"),o=i.length;return i.some(dl)&&(o+=vh),n&&(o+=bh),i.filter(c=>!dl(c)).reduce((c,l)=>c+(ph.test(l)?gh:l===""?yh:wh),o)}function Sh(e,n){return e.length===n.length&&e.slice(0,-1).every((o,c)=>o===n[c])?e[e.length-1]-n[n.length-1]:0}function $h(e,n,i){let{routesMeta:o}=e,c={},l="/",u=[];for(let p=0;p<o.length;++p){let b=o[p],v=p===o.length-1,g=l==="/"?n:n.slice(l.length)||"/",y=Ch({path:b.relativePath,caseSensitive:b.caseSensitive,end:v},g),w=b.route;if(!y)return null;Object.assign(c,y.params),u.push({params:c,pathname:Mn([l,y.pathname]),pathnameBase:Th(Mn([l,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(l=Mn([l,y.pathnameBase]))}return u}function Ch(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=_h(e.path,e.caseSensitive,e.end),c=n.match(i);if(!c)return null;let l=c[0],u=l.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:o.reduce((v,g,y)=>{let{paramName:w,isOptional:P}=g;if(w==="*"){let A=p[y]||"";u=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const x=p[y];return P&&!x?v[w]=void 0:v[w]=(x||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:u,pattern:e}}function _h(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),Cc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,p,b)=>(o.push({paramName:p,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":e!==""&&e!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,n?void 0:"i"),o]}function Ah(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Cc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ju(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}const Lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nh=e=>Lh.test(e);function Dh(e,n){n===void 0&&(n="/");let{pathname:i,search:o="",hash:c=""}=typeof e=="string"?Rr(e):e,l;if(i)if(Nh(i))l=i;else{if(i.includes("//")){let u=i;i=i.replace(/\/\/+/g,"/"),Cc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+i))}i.startsWith("/")?l=ul(i.substring(1),"/"):l=ul(i,n)}else l=n;return{pathname:l,search:Eh(o),hash:jh(c)}}function ul(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Wo(e,n,i,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zh(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Zu(e,n){let i=zh(e);return n?i.map((o,c)=>c===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function qu(e,n,i,o){o===void 0&&(o=!1);let c;typeof e=="string"?c=Rr(e):(c=Rs({},e),st(!c.pathname||!c.pathname.includes("?"),Wo("?","pathname","search",c)),st(!c.pathname||!c.pathname.includes("#"),Wo("#","pathname","hash",c)),st(!c.search||!c.search.includes("#"),Wo("#","search","hash",c)));let l=e===""||c.pathname==="",u=l?"/":c.pathname,p;if(u==null)p=i;else{let y=n.length-1;if(!o&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),y-=1;c.pathname=w.join("/")}p=y>=0?n[y]:"/"}let b=Dh(c,p),v=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&i.endsWith("/");return!b.pathname.endsWith("/")&&(v||g)&&(b.pathname+="/"),b}const Mn=e=>e.join("/").replace(/\/\/+/g,"/"),Th=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Eh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xu=["post","put","patch","delete"];new Set(Xu);const Ph=["get",...Xu];new Set(Ph);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ps(){return Ps=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Ps.apply(this,arguments)}const _c=a.createContext(null),Bh=a.createContext(null),Us=a.createContext(null),yo=a.createContext(null),ir=a.createContext({outlet:null,matches:[],isDataRoute:!1}),Qu=a.createContext(null);function Ws(){return a.useContext(yo)!=null}function Ac(){return Ws()||st(!1),a.useContext(yo).location}function Mu(e){a.useContext(Us).static||a.useLayoutEffect(e)}function Hs(){let{isDataRoute:e}=a.useContext(ir);return e?Zh():Oh()}function Oh(){Ws()||st(!1);let e=a.useContext(_c),{basename:n,future:i,navigator:o}=a.useContext(Us),{matches:c}=a.useContext(ir),{pathname:l}=Ac(),u=JSON.stringify(Zu(c,i.v7_relativeSplatPath)),p=a.useRef(!1);return Mu(()=>{p.current=!0}),a.useCallback(function(v,g){if(g===void 0&&(g={}),!p.current)return;if(typeof v=="number"){o.go(v);return}let y=qu(v,JSON.parse(u),l,g.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:Mn([n,y.pathname])),(g.replace?o.replace:o.push)(y,g.state,g)},[n,o,u,l,e])}function Ih(e,n){return kh(e,n)}function kh(e,n,i,o){Ws()||st(!1);let{navigator:c}=a.useContext(Us),{matches:l}=a.useContext(ir),u=l[l.length-1],p=u?u.params:{};u&&u.pathname;let b=u?u.pathnameBase:"/";u&&u.route;let v=Ac(),g;if(n){var y;let _=typeof n=="string"?Rr(n):n;b==="/"||(y=_.pathname)!=null&&y.startsWith(b)||st(!1),g=_}else g=v;let w=g.pathname||"/",P=w;if(b!=="/"){let _=b.replace(/^\//,"").split("/");P="/"+w.replace(/^\//,"").split("/").slice(_.length).join("/")}let x=mh(e,{pathname:P}),A=Yh(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},p,_.params),pathname:Mn([b,c.encodeLocation?c.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?b:Mn([b,c.encodeLocation?c.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,i,o);return n&&A?a.createElement(yo.Provider,{value:{location:Ps({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Nn.Pop}},A):A}function Fh(){let e=Jh(),n=Rh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},n),i?a.createElement("pre",{style:c},i):null,null)}const Uh=a.createElement(Fh,null);class Wh extends a.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?a.createElement(ir.Provider,{value:this.props.routeContext},a.createElement(Qu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hh(e){let{routeContext:n,match:i,children:o}=e,c=a.useContext(_c);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),a.createElement(ir.Provider,{value:n},o)}function Yh(e,n,i,o){var c;if(n===void 0&&(n=[]),i===void 0&&(i=null),o===void 0&&(o=null),e==null){var l;if(!i)return null;if(i.errors)e=i.matches;else if((l=o)!=null&&l.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let u=e,p=(c=i)==null?void 0:c.errors;if(p!=null){let g=u.findIndex(y=>y.route.id&&(p==null?void 0:p[y.route.id])!==void 0);g>=0||st(!1),u=u.slice(0,Math.min(u.length,g+1))}let b=!1,v=-1;if(i&&o&&o.v7_partialHydration)for(let g=0;g<u.length;g++){let y=u[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(v=g),y.route.id){let{loaderData:w,errors:P}=i,x=y.route.loader&&w[y.route.id]===void 0&&(!P||P[y.route.id]===void 0);if(y.route.lazy||x){b=!0,v>=0?u=u.slice(0,v+1):u=[u[0]];break}}}return u.reduceRight((g,y,w)=>{let P,x=!1,A=null,_=null;i&&(P=p&&y.route.id?p[y.route.id]:void 0,A=y.route.errorElement||Uh,b&&(v<0&&w===0?(qh("route-fallback"),x=!0,_=null):v===w&&(x=!0,_=y.route.hydrateFallbackElement||null)));let L=n.concat(u.slice(0,w+1)),z=()=>{let W;return P?W=A:x?W=_:y.route.Component?W=a.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=g,a.createElement(Hh,{match:y,routeContext:{outlet:g,matches:L,isDataRoute:i!=null},children:W})};return i&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?a.createElement(Wh,{location:i.location,revalidation:i.revalidation,component:A,error:P,children:z(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):z()},null)}var em=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(em||{}),tm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tm||{});function Kh(e){let n=a.useContext(_c);return n||st(!1),n}function Vh(e){let n=a.useContext(Bh);return n||st(!1),n}function Gh(e){let n=a.useContext(ir);return n||st(!1),n}function nm(e){let n=Gh(),i=n.matches[n.matches.length-1];return i.route.id||st(!1),i.route.id}function Jh(){var e;let n=a.useContext(Qu),i=Vh(),o=nm();return n!==void 0?n:(e=i.errors)==null?void 0:e[o]}function Zh(){let{router:e}=Kh(em.UseNavigateStable),n=nm(tm.UseNavigateStable),i=a.useRef(!1);return Mu(()=>{i.current=!0}),a.useCallback(function(c,l){l===void 0&&(l={}),i.current&&(typeof c=="number"?e.navigate(c):e.navigate(c,Ps({fromRouteId:n},l)))},[e,n])}const ml={};function qh(e,n,i){ml[e]||(ml[e]=!0)}function Xh(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qh(e){let{to:n,replace:i,state:o,relative:c}=e;Ws()||st(!1);let{future:l,static:u}=a.useContext(Us),{matches:p}=a.useContext(ir),{pathname:b}=Ac(),v=Hs(),g=qu(n,Zu(p,l.v7_relativeSplatPath),b,c==="path"),y=JSON.stringify(g);return a.useEffect(()=>v(JSON.parse(y),{replace:i,state:o,relative:c}),[v,y,c,i,o]),null}function Ar(e){st(!1)}function Mh(e){let{basename:n="/",children:i=null,location:o,navigationType:c=Nn.Pop,navigator:l,static:u=!1,future:p}=e;Ws()&&st(!1);let b=n.replace(/^\/*/,"/"),v=a.useMemo(()=>({basename:b,navigator:l,static:u,future:Ps({v7_relativeSplatPath:!1},p)}),[b,p,l,u]);typeof o=="string"&&(o=Rr(o));let{pathname:g="/",search:y="",hash:w="",state:P=null,key:x="default"}=o,A=a.useMemo(()=>{let _=Ju(g,b);return _==null?null:{location:{pathname:_,search:y,hash:w,state:P,key:x},navigationType:c}},[b,g,y,w,P,x,c]);return A==null?null:a.createElement(Us.Provider,{value:v},a.createElement(yo.Provider,{children:i,value:A}))}function e0(e){let{children:n,location:i}=e;return Ih(pc(n),i)}new Promise(()=>{});function pc(e,n){n===void 0&&(n=[]);let i=[];return a.Children.forEach(e,(o,c)=>{if(!a.isValidElement(o))return;let l=[...n,c];if(o.type===a.Fragment){i.push.apply(i,pc(o.props.children,l));return}o.type!==Ar&&st(!1),!o.props.index||!o.props.children||st(!1);let u={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=pc(o.props.children,l)),i.push(u)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const t0="6";try{window.__reactRouterVersion=t0}catch{}const n0="startTransition",hl=mc[n0];function r0(e){let{basename:n,children:i,future:o,window:c}=e,l=a.useRef();l.current==null&&(l.current=lh({window:c,v5Compat:!0}));let u=l.current,[p,b]=a.useState({action:u.action,location:u.location}),{v7_startTransition:v}=o||{},g=a.useCallback(y=>{v&&hl?hl(()=>b(y)):b(y)},[b,v]);return a.useLayoutEffect(()=>u.listen(g),[u,g]),a.useEffect(()=>Xh(o),[o]),a.createElement(Mh,{basename:n,children:i,location:p.location,navigationType:p.action,navigator:u,future:o})}var fl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fl||(fl={}));var pl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pl||(pl={}));function s0(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function i0(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var o0=function(){function e(i){var o=this;this._insertTag=function(c){var l;o.tags.length===0?o.insertionPoint?l=o.insertionPoint.nextSibling:o.prepend?l=o.container.firstChild:l=o.before:l=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(c,l),o.tags.push(c)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(o){o.forEach(this._insertTag)},n.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(i0(this));var c=this.tags[this.tags.length-1];if(this.isSpeedy){var l=s0(c);try{l.insertRule(o,l.cssRules.length)}catch{}}else c.appendChild(document.createTextNode(o));this.ctr++},n.flush=function(){this.tags.forEach(function(o){var c;return(c=o.parentNode)==null?void 0:c.removeChild(o)}),this.tags=[],this.ctr=0},e}(),pt="-ms-",ro="-moz-",Oe="-webkit-",rm="comm",Lc="rule",Nc="decl",a0="@import",sm="@keyframes",c0="@layer",l0=Math.abs,wo=String.fromCharCode,d0=Object.assign;function u0(e,n){return ft(e,0)^45?(((n<<2^ft(e,0))<<2^ft(e,1))<<2^ft(e,2))<<2^ft(e,3):0}function im(e){return e.trim()}function m0(e,n){return(e=n.exec(e))?e[0]:e}function Ie(e,n,i){return e.replace(n,i)}function gc(e,n){return e.indexOf(n)}function ft(e,n){return e.charCodeAt(n)|0}function Bs(e,n,i){return e.slice(n,i)}function Zt(e){return e.length}function Dc(e){return e.length}function si(e,n){return n.push(e),e}function h0(e,n){return e.map(n).join("")}var vo=1,zr=1,om=0,_t=0,nt=0,Pr="";function xo(e,n,i,o,c,l,u){return{value:e,root:n,parent:i,type:o,props:c,children:l,line:vo,column:zr,length:u,return:""}}function Jr(e,n){return d0(xo("",null,null,"",null,null,0),e,{length:-e.length},n)}function f0(){return nt}function p0(){return nt=_t>0?ft(Pr,--_t):0,zr--,nt===10&&(zr=1,vo--),nt}function Tt(){return nt=_t<om?ft(Pr,_t++):0,zr++,nt===10&&(zr=1,vo++),nt}function en(){return ft(Pr,_t)}function Qi(){return _t}function Ys(e,n){return Bs(Pr,e,n)}function Os(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function am(e){return vo=zr=1,om=Zt(Pr=e),_t=0,[]}function cm(e){return Pr="",e}function Mi(e){return im(Ys(_t-1,bc(e===91?e+2:e===40?e+1:e)))}function g0(e){for(;(nt=en())&&nt<33;)Tt();return Os(e)>2||Os(nt)>3?"":" "}function b0(e,n){for(;--n&&Tt()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return Ys(e,Qi()+(n<6&&en()==32&&Tt()==32))}function bc(e){for(;Tt();)switch(nt){case e:return _t;case 34:case 39:e!==34&&e!==39&&bc(nt);break;case 40:e===41&&bc(e);break;case 92:Tt();break}return _t}function y0(e,n){for(;Tt()&&e+nt!==57;)if(e+nt===84&&en()===47)break;return"/*"+Ys(n,_t-1)+"*"+wo(e===47?e:Tt())}function w0(e){for(;!Os(en());)Tt();return Ys(e,_t)}function v0(e){return cm(eo("",null,null,null,[""],e=am(e),0,[0],e))}function eo(e,n,i,o,c,l,u,p,b){for(var v=0,g=0,y=u,w=0,P=0,x=0,A=1,_=1,L=1,z=0,W="",F=c,V=l,B=o,R=W;_;)switch(x=z,z=Tt()){case 40:if(x!=108&&ft(R,y-1)==58){gc(R+=Ie(Mi(z),"&","&\f"),"&\f")!=-1&&(L=-1);break}case 34:case 39:case 91:R+=Mi(z);break;case 9:case 10:case 13:case 32:R+=g0(x);break;case 92:R+=b0(Qi()-1,7);continue;case 47:switch(en()){case 42:case 47:si(x0(y0(Tt(),Qi()),n,i),b);break;default:R+="/"}break;case 123*A:p[v++]=Zt(R)*L;case 125*A:case 59:case 0:switch(z){case 0:case 125:_=0;case 59+g:L==-1&&(R=Ie(R,/\f/g,"")),P>0&&Zt(R)-y&&si(P>32?bl(R+";",o,i,y-1):bl(Ie(R," ","")+";",o,i,y-2),b);break;case 59:R+=";";default:if(si(B=gl(R,n,i,v,g,c,p,W,F=[],V=[],y),l),z===123)if(g===0)eo(R,n,B,B,F,l,y,p,V);else switch(w===99&&ft(R,3)===110?100:w){case 100:case 108:case 109:case 115:eo(e,B,B,o&&si(gl(e,B,B,0,0,c,p,W,c,F=[],y),V),c,V,y,p,o?F:V);break;default:eo(R,B,B,B,[""],V,0,p,V)}}v=g=P=0,A=L=1,W=R="",y=u;break;case 58:y=1+Zt(R),P=x;default:if(A<1){if(z==123)--A;else if(z==125&&A++==0&&p0()==125)continue}switch(R+=wo(z),z*A){case 38:L=g>0?1:(R+="\f",-1);break;case 44:p[v++]=(Zt(R)-1)*L,L=1;break;case 64:en()===45&&(R+=Mi(Tt())),w=en(),g=y=Zt(W=R+=w0(Qi())),z++;break;case 45:x===45&&Zt(R)==2&&(A=0)}}return l}function gl(e,n,i,o,c,l,u,p,b,v,g){for(var y=c-1,w=c===0?l:[""],P=Dc(w),x=0,A=0,_=0;x<o;++x)for(var L=0,z=Bs(e,y+1,y=l0(A=u[x])),W=e;L<P;++L)(W=im(A>0?w[L]+" "+z:Ie(z,/&\f/g,w[L])))&&(b[_++]=W);return xo(e,n,i,c===0?Lc:p,b,v,g)}function x0(e,n,i){return xo(e,n,i,rm,wo(f0()),Bs(e,2,-2),0)}function bl(e,n,i,o){return xo(e,n,i,Nc,Bs(e,0,o),Bs(e,o+1,-1),o)}function Dr(e,n){for(var i="",o=Dc(e),c=0;c<o;c++)i+=n(e[c],c,e,n)||"";return i}function S0(e,n,i,o){switch(e.type){case c0:if(e.children.length)break;case a0:case Nc:return e.return=e.return||e.value;case rm:return"";case sm:return e.return=e.value+"{"+Dr(e.children,o)+"}";case Lc:e.value=e.props.join(",")}return Zt(i=Dr(e.children,o))?e.return=e.value+"{"+i+"}":""}function $0(e){var n=Dc(e);return function(i,o,c,l){for(var u="",p=0;p<n;p++)u+=e[p](i,o,c,l)||"";return u}}function C0(e){return function(n){n.root||(n=n.return)&&e(n)}}function _0(e){var n=Object.create(null);return function(i){return n[i]===void 0&&(n[i]=e(i)),n[i]}}var A0=function(n,i,o){for(var c=0,l=0;c=l,l=en(),c===38&&l===12&&(i[o]=1),!Os(l);)Tt();return Ys(n,_t)},L0=function(n,i){var o=-1,c=44;do switch(Os(c)){case 0:c===38&&en()===12&&(i[o]=1),n[o]+=A0(_t-1,i,o);break;case 2:n[o]+=Mi(c);break;case 4:if(c===44){n[++o]=en()===58?"&\f":"",i[o]=n[o].length;break}default:n[o]+=wo(c)}while(c=Tt());return n},N0=function(n,i){return cm(L0(am(n),i))},yl=new WeakMap,D0=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var i=n.value,o=n.parent,c=n.column===o.column&&n.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(n.props.length===1&&i.charCodeAt(0)!==58&&!yl.get(o))&&!c){yl.set(n,!0);for(var l=[],u=N0(i,l),p=o.props,b=0,v=0;b<u.length;b++)for(var g=0;g<p.length;g++,v++)n.props[v]=l[b]?u[b].replace(/&\f/g,p[g]):p[g]+" "+u[b]}}},z0=function(n){if(n.type==="decl"){var i=n.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(n.return="",n.value="")}};function lm(e,n){switch(u0(e,n)){case 5103:return Oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+e+ro+e+pt+e+e;case 6828:case 4268:return Oe+e+pt+e+e;case 6165:return Oe+e+pt+"flex-"+e+e;case 5187:return Oe+e+Ie(e,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return Oe+e+pt+"flex-item-"+Ie(e,/flex-|-self/,"")+e;case 4675:return Oe+e+pt+"flex-line-pack"+Ie(e,/align-content|flex-|-self/,"")+e;case 5548:return Oe+e+pt+Ie(e,"shrink","negative")+e;case 5292:return Oe+e+pt+Ie(e,"basis","preferred-size")+e;case 6060:return Oe+"box-"+Ie(e,"-grow","")+Oe+e+pt+Ie(e,"grow","positive")+e;case 4554:return Oe+Ie(e,/([^-])(transform)/g,"$1"+Oe+"$2")+e;case 6187:return Ie(Ie(Ie(e,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),e,"")+e;case 5495:case 3959:return Ie(e,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Ie(Ie(e,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+e+e;case 4095:case 3583:case 4068:case 2532:return Ie(e,/(.+)-inline(.+)/,Oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(e)-1-n>6)switch(ft(e,n+1)){case 109:if(ft(e,n+4)!==45)break;case 102:return Ie(e,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+ro+(ft(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~gc(e,"stretch")?lm(Ie(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(ft(e,n+1)!==115)break;case 6444:switch(ft(e,Zt(e)-3-(~gc(e,"!important")&&10))){case 107:return Ie(e,":",":"+Oe)+e;case 101:return Ie(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(ft(e,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+pt+"$2box$3")+e}break;case 5936:switch(ft(e,n+11)){case 114:return Oe+e+pt+Ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Oe+e+pt+Ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Oe+e+pt+Ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Oe+e+pt+e+e}return e}var T0=function(n,i,o,c){if(n.length>-1&&!n.return)switch(n.type){case Nc:n.return=lm(n.value,n.length);break;case sm:return Dr([Jr(n,{value:Ie(n.value,"@","@"+Oe)})],c);case Lc:if(n.length)return h0(n.props,function(l){switch(m0(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dr([Jr(n,{props:[Ie(l,/:(read-\w+)/,":"+ro+"$1")]})],c);case"::placeholder":return Dr([Jr(n,{props:[Ie(l,/:(plac\w+)/,":"+Oe+"input-$1")]}),Jr(n,{props:[Ie(l,/:(plac\w+)/,":"+ro+"$1")]}),Jr(n,{props:[Ie(l,/:(plac\w+)/,pt+"input-$1")]})],c)}return""})}},E0=[T0],j0=function(n){var i=n.key;if(i==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(A){var _=A.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(A),A.setAttribute("data-s",""))})}var c=n.stylisPlugins||E0,l={},u,p=[];u=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(A){for(var _=A.getAttribute("data-emotion").split(" "),L=1;L<_.length;L++)l[_[L]]=!0;p.push(A)});var b,v=[D0,z0];{var g,y=[S0,C0(function(A){g.insert(A)})],w=$0(v.concat(c,y)),P=function(_){return Dr(v0(_),w)};b=function(_,L,z,W){g=z,P(_?_+"{"+L.styles+"}":L.styles),W&&(x.inserted[L.name]=!0)}}var x={key:i,sheet:new o0({key:i,container:u,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:l,registered:{},insert:b};return x.sheet.hydrate(p),x},dm={exports:{}},Ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,zc=ht?Symbol.for("react.element"):60103,Tc=ht?Symbol.for("react.portal"):60106,So=ht?Symbol.for("react.fragment"):60107,$o=ht?Symbol.for("react.strict_mode"):60108,Co=ht?Symbol.for("react.profiler"):60114,_o=ht?Symbol.for("react.provider"):60109,Ao=ht?Symbol.for("react.context"):60110,Ec=ht?Symbol.for("react.async_mode"):60111,Lo=ht?Symbol.for("react.concurrent_mode"):60111,No=ht?Symbol.for("react.forward_ref"):60112,Do=ht?Symbol.for("react.suspense"):60113,R0=ht?Symbol.for("react.suspense_list"):60120,zo=ht?Symbol.for("react.memo"):60115,To=ht?Symbol.for("react.lazy"):60116,P0=ht?Symbol.for("react.block"):60121,B0=ht?Symbol.for("react.fundamental"):60117,O0=ht?Symbol.for("react.responder"):60118,I0=ht?Symbol.for("react.scope"):60119;function Et(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case zc:switch(e=e.type,e){case Ec:case Lo:case So:case Co:case $o:case Do:return e;default:switch(e=e&&e.$$typeof,e){case Ao:case No:case To:case zo:case _o:return e;default:return n}}case Tc:return n}}}function um(e){return Et(e)===Lo}Ue.AsyncMode=Ec;Ue.ConcurrentMode=Lo;Ue.ContextConsumer=Ao;Ue.ContextProvider=_o;Ue.Element=zc;Ue.ForwardRef=No;Ue.Fragment=So;Ue.Lazy=To;Ue.Memo=zo;Ue.Portal=Tc;Ue.Profiler=Co;Ue.StrictMode=$o;Ue.Suspense=Do;Ue.isAsyncMode=function(e){return um(e)||Et(e)===Ec};Ue.isConcurrentMode=um;Ue.isContextConsumer=function(e){return Et(e)===Ao};Ue.isContextProvider=function(e){return Et(e)===_o};Ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zc};Ue.isForwardRef=function(e){return Et(e)===No};Ue.isFragment=function(e){return Et(e)===So};Ue.isLazy=function(e){return Et(e)===To};Ue.isMemo=function(e){return Et(e)===zo};Ue.isPortal=function(e){return Et(e)===Tc};Ue.isProfiler=function(e){return Et(e)===Co};Ue.isStrictMode=function(e){return Et(e)===$o};Ue.isSuspense=function(e){return Et(e)===Do};Ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===So||e===Lo||e===Co||e===$o||e===Do||e===R0||typeof e=="object"&&e!==null&&(e.$$typeof===To||e.$$typeof===zo||e.$$typeof===_o||e.$$typeof===Ao||e.$$typeof===No||e.$$typeof===B0||e.$$typeof===O0||e.$$typeof===I0||e.$$typeof===P0)};Ue.typeOf=Et;dm.exports=Ue;var k0=dm.exports,mm=k0,F0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},U0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hm={};hm[mm.ForwardRef]=F0;hm[mm.Memo]=U0;var W0=!0;function H0(e,n,i){var o="";return i.split(" ").forEach(function(c){e[c]!==void 0?n.push(e[c]+";"):c&&(o+=c+" ")}),o}var fm=function(n,i,o){var c=n.key+"-"+i.name;(o===!1||W0===!1)&&n.registered[c]===void 0&&(n.registered[c]=i.styles)},Y0=function(n,i,o){fm(n,i,o);var c=n.key+"-"+i.name;if(n.inserted[i.name]===void 0){var l=i;do n.insert(i===l?"."+c:"",l,n.sheet,!0),l=l.next;while(l!==void 0)}};function K0(e){for(var n=0,i,o=0,c=e.length;c>=4;++o,c-=4)i=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,n=(i&65535)*1540483477+((i>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(c){case 3:n^=(e.charCodeAt(o+2)&255)<<16;case 2:n^=(e.charCodeAt(o+1)&255)<<8;case 1:n^=e.charCodeAt(o)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var V0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},G0=/[A-Z]|^ms/g,J0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pm=function(n){return n.charCodeAt(1)===45},wl=function(n){return n!=null&&typeof n!="boolean"},Ho=_0(function(e){return pm(e)?e:e.replace(G0,"-$&").toLowerCase()}),vl=function(n,i){switch(n){case"animation":case"animationName":if(typeof i=="string")return i.replace(J0,function(o,c,l){return qt={name:c,styles:l,next:qt},c})}return V0[n]!==1&&!pm(n)&&typeof i=="number"&&i!==0?i+"px":i};function Is(e,n,i){if(i==null)return"";var o=i;if(o.__emotion_styles!==void 0)return o;switch(typeof i){case"boolean":return"";case"object":{var c=i;if(c.anim===1)return qt={name:c.name,styles:c.styles,next:qt},c.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)qt={name:u.name,styles:u.styles,next:qt},u=u.next;var p=l.styles+";";return p}return Z0(e,n,i)}case"function":{if(e!==void 0){var b=qt,v=i(e);return qt=b,Is(e,n,v)}break}}var g=i;return g}function Z0(e,n,i){var o="";if(Array.isArray(i))for(var c=0;c<i.length;c++)o+=Is(e,n,i[c])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var p=u;wl(p)&&(o+=Ho(l)+":"+vl(l,p)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&n==null)for(var b=0;b<u.length;b++)wl(u[b])&&(o+=Ho(l)+":"+vl(l,u[b])+";");else{var v=Is(e,n,u);switch(l){case"animation":case"animationName":{o+=Ho(l)+":"+v+";";break}default:o+=l+"{"+v+"}"}}}return o}var xl=/label:\s*([^\s;{]+)\s*(;|$)/g,qt;function gm(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var o=!0,c="";qt=void 0;var l=e[0];if(l==null||l.raw===void 0)o=!1,c+=Is(i,n,l);else{var u=l;c+=u[0]}for(var p=1;p<e.length;p++)if(c+=Is(i,n,e[p]),o){var b=l;c+=b[p]}xl.lastIndex=0;for(var v="",g;(g=xl.exec(c))!==null;)v+="-"+g[1];var y=K0(c)+v;return{name:y,styles:c,next:qt}}var q0=function(n){return n()},X0=mc.useInsertionEffect?mc.useInsertionEffect:!1,Q0=X0||q0,bm=a.createContext(typeof HTMLElement<"u"?j0({key:"css"}):null);bm.Provider;var M0=function(n){return a.forwardRef(function(i,o){var c=a.useContext(bm);return n(i,c,o)})},ef=a.createContext({}),Ks={}.hasOwnProperty,yc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jc=function(n,i){var o={};for(var c in i)Ks.call(i,c)&&(o[c]=i[c]);return o[yc]=n,o},tf=function(n){var i=n.cache,o=n.serialized,c=n.isStringTag;return fm(i,o,c),Q0(function(){return Y0(i,o,c)}),null},nf=M0(function(e,n,i){var o=e.css;typeof o=="string"&&n.registered[o]!==void 0&&(o=n.registered[o]);var c=e[yc],l=[o],u="";typeof e.className=="string"?u=H0(n.registered,l,e.className):e.className!=null&&(u=e.className+" ");var p=gm(l,void 0,a.useContext(ef));u+=n.key+"-"+p.name;var b={};for(var v in e)Ks.call(e,v)&&v!=="css"&&v!==yc&&(b[v]=e[v]);return b.className=u,i&&(b.ref=i),a.createElement(a.Fragment,null,a.createElement(tf,{cache:n,serialized:p,isStringTag:typeof c=="string"}),a.createElement(c,b))}),Rc=nf,rt=tt.Fragment,t=function(n,i,o){return Ks.call(i,"css")?tt.jsx(Rc,jc(n,i),o):tt.jsx(n,i,o)},r=function(n,i,o){return Ks.call(i,"css")?tt.jsxs(Rc,jc(n,i),o):tt.jsxs(n,i,o)},Sl=function(n,i){var o=arguments;if(i==null||!Ks.call(i,"css"))return a.createElement.apply(void 0,o);var c=o.length,l=new Array(c);l[0]=Rc,l[1]=jc(n,i);for(var u=2;u<c;u++)l[u]=o[u];return a.createElement.apply(null,l)};(function(e){var n;n||(n=e.JSX||(e.JSX={}))})(Sl||(Sl={}));function s(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return gm(n)}function Vs(){var e=s.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}const tr="@media (prefers-reduced-motion: no-preference)",ym=Vs`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rf=Vs`
  from {
    opacity: 0;
    transform: translate3d(0, 32px, 0) scale(0.88);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`,sf=Vs`
  from {
    transform: rotate(-6deg) translate3d(36px, 44px, 0) scale(0.82);
  }
  to {
    transform: rotate(-6deg) translate3d(0, 0, 0) scale(1);
  }
`,of=Vs`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.52;
  }
`,af=Vs`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  33% {
    transform: translate3d(10%, -8%, 0) scale(1.14);
  }
  66% {
    transform: translate3d(-9%, 11%, 0) scale(0.9);
  }
`,cf="/strack/".replace(/\/$/,""),lf=e=>s`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`,df=e=>s`
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
  &::before {
    content: '';
    position: absolute;
    width: min(56rem, 175%);
    height: min(56rem, 175%);
    right: -28%;
    bottom: -38%;
    border-radius: 50%;
    background: ${e?"radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, rgba(56, 189, 248, 0.08) 42%, transparent 68%)":"radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(59, 130, 246, 0.1) 45%, transparent 70%)"};
    pointer-events: none;
    z-index: 0;
    ${tr} {
      animation: ${af} 22s ease-in-out infinite;
    }
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${e?"radial-gradient(ellipse 80% 50% at 20% 20%, rgba(56, 189, 248, 0.12), transparent 55%)":"radial-gradient(ellipse 70% 45% at 15% 15%, rgba(59, 130, 246, 0.15), transparent 50%)"};
    pointer-events: none;
    z-index: 0;
    ${tr} {
      animation: ${of} 8s ease-in-out infinite;
    }
  }
`,uf=s`
  position: relative;
  z-index: 2;
  max-width: 28rem;
`,mf=e=>s`
  position: absolute;
  right: clamp(-6rem, -14vw, -1rem);
  bottom: clamp(-5rem, -12vw, -1.5rem);
  width: min(34rem, 88vw);
  aspect-ratio: 1 / 0.9;
  z-index: 1;
  opacity: ${e?.78:.7};
  pointer-events: none;
  transform: rotate(-6deg);
  @media (min-width: 900px) {
    right: clamp(0.5rem, 3vw, 3.5rem);
    bottom: clamp(1.5rem, 7vh, 5.5rem);
    width: min(42rem, 52vw);
    opacity: 0.95;
  }
  ${tr} {
    animation: ${sf} 1.15s cubic-bezier(0.22, 1, 0.36, 1) 0.18s both;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    * {
      animation: none !important;
    }
  }
`,hf=e=>s`
  position: absolute;
  inset: 10% 4% 16% 10%;
  border-radius: 8px;
  border: 1px solid ${e?"rgba(148, 163, 184, 0.16)":"rgba(37, 99, 235, 0.13)"};
  background:
    linear-gradient(${e?"rgba(148, 163, 184, 0.08)":"rgba(37, 99, 235, 0.08)"} 1px, transparent 1px),
    linear-gradient(90deg, ${e?"rgba(148, 163, 184, 0.08)":"rgba(37, 99, 235, 0.08)"} 1px, transparent 1px);
  background-size: 48px 48px;
  box-shadow: inset 0 1px 0 ${e?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.6)"};
  ${tr} {
    animation: strack-grid-drift 26s linear infinite;
  }
  @keyframes strack-grid-drift {
    from {
      background-position: 0 0, 0 0;
    }
    to {
      background-position: 144px 72px, -96px 52px;
    }
  }
`,Yo=(e,n)=>s`
  position: absolute;
  left: ${n===0?"0":n===1?"46%":"17%"};
  top: ${n===0?"18%":n===1?"8%":"58%"};
  width: ${n===1?"12.5rem":"14rem"};
  border-radius: 8px;
  padding: 0.8rem;
  background: ${e?"rgba(15, 23, 42, 0.76)":"rgba(255, 255, 255, 0.78)"};
  border: 1px solid ${e?"rgba(148, 163, 184, 0.18)":"rgba(37, 99, 235, 0.13)"};
  box-shadow: ${e?"0 18px 36px rgba(0, 0, 0, 0.32)":"0 18px 36px rgba(37, 99, 235, 0.13)"};
  backdrop-filter: blur(14px);
  animation: strack-panel-float-${n} ${n===1?"7.8s":"8.6s"}
    cubic-bezier(0.42, 0, 0.2, 1) infinite;
  animation-delay: ${n*-1.55}s;
  @media (max-width: 520px) {
    width: ${n===1?"10.5rem":"11.5rem"};
  }
  @keyframes strack-panel-float-0 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0.95rem, -1.35rem, 0);
    }
  }
  @keyframes strack-panel-float-1 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-1.1rem, 1.1rem, 0);
    }
  }
  @keyframes strack-panel-float-2 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(1.15rem, 0.95rem, 0);
    }
  }
`,Ko=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
  color: ${e?"#e2e8f0":"#1e293b"};
  font-size: 0.78rem;
  font-weight: 700;
`,Vo=e=>s`
  border-radius: 999px;
  padding: 0.16rem 0.45rem;
  color: ${e?"#bfdbfe":"#1d4ed8"};
  background: ${e?"rgba(37, 99, 235, 0.18)":"rgba(37, 99, 235, 0.1)"};
  font-size: 0.68rem;
  font-weight: 700;
`,ff=e=>s`
  margin: 0 0 0.55rem;
  color: ${e?"#f8fafc":"#0f172a"};
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
`,pf=(e,n="0s")=>s`
  height: 0.45rem;
  border-radius: 999px;
  overflow: hidden;
  background: ${e?"rgba(148, 163, 184, 0.18)":"rgba(148, 163, 184, 0.22)"};
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 76%;
    border-radius: inherit;
    background: linear-gradient(90deg, #7c3aed, #38bdf8, #22c55e);
    transform-origin: left;
    animation: strack-progress 4.2s cubic-bezier(0.45, 0, 0.35, 1) infinite;
    animation-delay: ${n};
  }
  @keyframes strack-progress {
    0%, 100% {
      transform: scaleX(0.38);
    }
    45%, 70% {
      transform: scaleX(1);
    }
  }
`,gf=s`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: end;
  gap: 0.32rem;
  height: 3.1rem;
`,bf=(e,n)=>s`
  height: ${[42,66,50,78,58,86,70][n]}%;
  min-height: 0.45rem;
  border-radius: 6px 6px 2px 2px;
  background: ${n%3===0?"linear-gradient(180deg, #38bdf8, #2563eb)":n%3===1?"linear-gradient(180deg, #a78bfa, #7c3aed)":"linear-gradient(180deg, #34d399, #059669)"};
  opacity: ${e?.9:.82};
  animation: strack-bar-rise 3.2s cubic-bezier(0.45, 0, 0.35, 1) infinite;
  animation-delay: ${n*-.18}s;
  @keyframes strack-bar-rise {
    0%, 100% {
      transform: scaleY(0.55);
    }
    45% {
      transform: scaleY(1);
    }
  }
`,yf=s`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,wf=(e,n)=>s`
  display: grid;
  grid-template-columns: 0.55rem 1fr;
  align-items: center;
  gap: 0.45rem;
  &::before {
    content: '';
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 3px;
    background: ${n===0?"#38bdf8":n===1?"#a78bfa":"#34d399"};
    box-shadow: 0 0 0 4px ${e?"rgba(96, 165, 250, 0.12)":"rgba(37, 99, 235, 0.1)"};
    animation: strack-tick 3.4s cubic-bezier(0.45, 0, 0.35, 1) infinite;
    animation-delay: ${n*-.42}s;
  }
  span {
    height: 0.48rem;
    border-radius: 999px;
    background: ${e?"rgba(226, 232, 240, 0.22)":"rgba(30, 41, 59, 0.18)"};
    overflow: hidden;
  }
  span::after {
    content: '';
    display: block;
    width: ${[72,58,86][n]}%;
    height: 100%;
    border-radius: inherit;
    background: ${e?"rgba(226, 232, 240, 0.42)":"rgba(37, 99, 235, 0.36)"};
  }
  @keyframes strack-tick {
    0%, 100% {
      transform: scale(0.82);
    }
    45% {
      transform: scale(1.35);
    }
  }
`,vf=e=>s`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${e?"#f8fafc":"#0f172a"};
  ${tr} {
    animation: ${ym} 0.82s cubic-bezier(0.22, 1, 0.36, 1) 0.06s both;
  }
`,xf=e=>s`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${e?"rgba(226, 232, 240, 0.78)":"rgba(15, 23, 42, 0.72)"};
  max-width: 22rem;
  ${tr} {
    animation: ${ym} 0.88s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
  }
`,Sf=e=>s`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  background: ${e?"#0f0f0f":"#f4f4f5"};
`,$f=e=>s`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: ${e?"#1c1c1e":"#ffffff"};
  box-shadow: ${e?"0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)":"0 20px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)"};
  ${tr} {
    animation: ${rf} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
  }
`,Cf=e=>s`
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
  margin-bottom: 0.35rem;
`,_f=e=>s`
  font-size: 0.9rem;
  color: ${e?"#a1a1aa":"#64748b"};
  margin-bottom: 1.5rem;
`,Af=s`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,$l=e=>s`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${e?"#e4e4e7":"#374151"};
  margin-bottom: 0.4rem;
`,wm=e=>s`
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
`,Lf=s`
  position: relative;
  display: flex;
  align-items: center;
`,Nf=e=>s`
  ${wm(e)};
  padding-right: 2.75rem;
`,Df=e=>s`
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
`,zf=e=>s`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${e?"#fca5a5":"#b91c1c"};
  background: ${e?"rgba(127, 29, 29, 0.25)":"#fef2f2"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.35)":"#fecaca"};
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
`,Tf=s`
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
`,Ef=e=>s`
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
`,jf=s`
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
`,Rf=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),Pf=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"22",height:"22",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),Bf=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:[t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Of=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"20",height:"20",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})});function If(e){return e?{message:"The server did not return JSON. Open the site at …/strack/ and ensure backend/login.php is deployed."}:{message:null}}function kf({darkMode:e,onToggleDarkMode:n}){const i=Hs(),[o,c]=a.useState(""),[l,u]=a.useState(""),[p,b]=a.useState(!1),[v,g]=a.useState(""),[y,w]=a.useState(!1),P=async x=>{if(x.preventDefault(),g(""),!o.trim()){g("Enter your university email address.");return}if(!l){g("Enter your password.");return}w(!0);const A=`${cf}/backend/login.php`;try{const L=await(await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.trim(),password:l})})).text();let z,W=!1;try{z=JSON.parse(L)}catch{W=!0,z={}}const F=If(W);if(F.message){g(F.message);return}if(z.success){const V=z.user||{},B=V.role||"student",R=B==="admin"?"/admin":B==="teacher"?"/lecturer":"/dashboard";try{localStorage.setItem("strack_user",JSON.stringify(V))}catch{}i(R,{replace:!0});return}g(z.message||"Invalid email or password.")}catch{g(`Cannot reach ${A}. On NUWebSpace use your full /strack/ URL; locally run PHP and the Vite dev server with the proxy enabled.`)}finally{w(!1)}};return r("div",{css:lf(),children:[t("button",{type:"button",css:Ef(e),onClick:n,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?t(Pf,{}):t(Rf,{})}),r("section",{css:df(e),"aria-hidden":"false",children:[r("div",{css:mf(e),"aria-hidden":"true",children:[t("div",{css:hf(e)}),r("div",{css:Yo(e,0),children:[r("div",{css:Ko(e),children:[t("span",{children:"Attendance"}),t("span",{css:Vo(e),children:"Live"})]}),t("p",{css:ff(e),children:"92%"}),t("div",{css:pf(e)})]}),r("div",{css:Yo(e,1),children:[r("div",{css:Ko(e),children:[t("span",{children:"Points"}),t("span",{css:Vo(e),children:"+18"})]}),t("div",{css:gf,children:[0,1,2,3,4,5,6].map(x=>t("span",{css:bf(e,x)},x))})]}),r("div",{css:Yo(e,2),children:[r("div",{css:Ko(e),children:[t("span",{children:"Modules"}),t("span",{css:Vo(e),children:"Now"})]}),t("div",{css:yf,children:[0,1,2].map(x=>t("div",{css:wf(e,x),children:t("span",{})},x))})]})]}),r("div",{css:uf,children:[t("h1",{css:vf(e),children:"STRACK"}),t("p",{css:xf(e),children:"Sign in to track attendance, engagement, and performance in one place."})]})]}),t("section",{css:Sf(e),children:r("div",{css:$f(e),children:[t("h2",{css:Cf(e),children:"Sign in"}),t("p",{css:_f(e),children:"Use the email and password from your administrator or module leader."}),r("form",{css:Af,onSubmit:P,noValidate:!0,children:[r("div",{children:[t("label",{css:$l(e),htmlFor:"strack-email",children:"Email"}),t("input",{id:"strack-email",css:wm(e),type:"email",autoComplete:"username",inputMode:"email",placeholder:"you@uni.ac.uk",value:o,onChange:x=>c(x.target.value),disabled:y})]}),r("div",{children:[t("label",{css:$l(e),htmlFor:"strack-password",children:"Password"}),r("div",{css:Lf,children:[t("input",{id:"strack-password",css:Nf(e),type:p?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:l,onChange:x=>u(x.target.value),disabled:y}),t("button",{type:"button",css:Df(e),onClick:()=>b(x=>!x),"aria-label":p?"Hide password":"Show password",tabIndex:-1,children:p?t(Of,{}):t(Bf,{})})]})]}),v?t("div",{role:"alert",css:zf(e),children:v}):null,t("button",{type:"submit",css:Tf,disabled:y,children:y?r(rt,{children:[t("span",{css:jf,"aria-hidden":!0}),"Signing in…"]}):"Sign in"})]})]})})]})}var vm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cl=Dn.createContext&&Dn.createContext(vm),Ff=["attr","size","title"];function Uf(e,n){if(e==null)return{};var i,o,c=Wf(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],n.indexOf(i)===-1&&{}.propertyIsEnumerable.call(e,i)&&(c[i]=e[i])}return c}function Wf(e,n){if(e==null)return{};var i={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;i[o]=e[o]}return i}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},so.apply(null,arguments)}function _l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),i.push.apply(i,o)}return i}function io(e){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?_l(Object(i),!0).forEach(function(o){Hf(e,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_l(Object(i)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(i,o))})}return e}function Hf(e,n,i){return(n=Yf(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function Yf(e){var n=Kf(e,"string");return typeof n=="symbol"?n:n+""}function Kf(e,n){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var o=i.call(e,n);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function xm(e){return e&&e.map((n,i)=>Dn.createElement(n.tag,io({key:i},n.attr),xm(n.child)))}function pe(e){return n=>Dn.createElement(Vf,so({attr:io({},e.attr)},n),xm(e.child))}function Vf(e){var n=i=>{var{attr:o,size:c,title:l}=e,u=Uf(e,Ff),p=c||i.size||"1em",b;return i.className&&(b=i.className),e.className&&(b=(b?b+" ":"")+e.className),Dn.createElement("svg",so({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,u,{className:b,style:io(io({color:e.color||i.color},i.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&Dn.createElement("title",null,l),e.children)};return Cl!==void 0?Dn.createElement(Cl.Consumer,null,i=>n(i)):n(vm)}function Fe(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"},child:[]}]})(e)}function Gf(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function Jf(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function Zf(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"},child:[]}]})(e)}function nr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function kt(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},child:[]}]})(e)}function Pc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]}]})(e)}function or(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"},child:[]}]})(e)}function bn(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},child:[]}]})(e)}function Tr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"},child:[]}]})(e)}function qf(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"},child:[]}]})(e)}function ar(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},child:[]}]})(e)}function Eo(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"},child:[]}]})(e)}function Er(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},child:[]}]})(e)}function Bc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"},child:[]}]})(e)}function Xf(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"},child:[]}]})(e)}function Qf(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"},child:[]}]})(e)}function Sm(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"},child:[]}]})(e)}function yn(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"},child:[]}]})(e)}function Mf(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"},child:[]}]})(e)}function ep(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 5.25v13.5m-7.5-13.5v13.5"},child:[]}]})(e)}function rr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"},child:[]}]})(e)}function tp(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"},child:[]}]})(e)}function Tn(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"},child:[]}]})(e)}function Ln(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"},child:[]}]})(e)}function np(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"},child:[]}]})(e)}function rp(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"},child:[]}]})(e)}function sp(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.625 11.505v8.25a1.5 1.5 0 0 1-1.5 1.5H4.875a1.5 1.5 0 0 1-1.5-1.5v-8.25m8.25-6.375A2.625 2.625 0 1 0 9 7.755h2.625m0-2.625v2.625m0-2.625a2.625 2.625 0 1 1 2.625 2.625h-2.625m0 0v13.5M3 11.505h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.622-.504-1.125-1.125-1.125H3c-.621 0-1.125.503-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"},child:[]}]})(e)}function Go(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},child:[]}]})(e)}function Jo(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"},child:[]}]})(e)}function Oc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"},child:[]}]})(e)}function En(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"},child:[]}]})(e)}function ip(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"},child:[]}]})(e)}function lt(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function jo(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"},child:[]}]})(e)}function Ic(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"},child:[]}]})(e)}function kc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"},child:[]}]})(e)}function op(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"},child:[]}]})(e)}function Vn(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},child:[]}]})(e)}function ap(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"},child:[]}]})(e)}function cp(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"},child:[]}]})(e)}function vn(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"},child:[]}]})(e)}function wn(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"},child:[]}]})(e)}function Ds(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"},child:[]}]})(e)}function Lr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"},child:[]}]})(e)}function lp(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"},child:[]}]})(e)}function St(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"},child:[]}]})(e)}function dp(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"},child:[]}]})(e)}function $m(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"},child:[]}]})(e)}function Fc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},child:[]}]})(e)}function wc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"},child:[]}]})(e)}function up(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"},child:[]}]})(e)}function Cm(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"},child:[]}]})(e)}function Uc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(e)}function vc(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"},child:[]}]})(e)}function oo(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"},child:[]}]})(e)}function Al(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"},child:[]}]})(e)}function jr(e){return pe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"},child:[]}]})(e)}const mp="/strack/".replace(/\/$/,""),Br="#6366f1",hp=[{id:"food_drink",title:"Food & drink vouchers",description:"£15 credit for campus cafés and selected partner outlets.",cost:500,category:"vouchers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80&auto=format&fit=crop"},{id:"discount_local",title:"Local business discount codes",description:"Exclusive codes for shops and services near campus.",cost:600,category:"vouchers",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop"},{id:"digital_custom",title:"Digital customisation items",description:"Wallpapers, icons, and profile themes for your STRACK account.",cost:350,category:"merchandise",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80&auto=format&fit=crop"},{id:"uni_merch",title:"University merchandise",description:"Hoodie, bottle, or cap from the official union store.",cost:800,category:"merchandise",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&q=80&auto=format&fit=crop"},{id:"recognition",title:"Recognition",description:"Certificate of achievement and spotlight on the leaderboard.",cost:300,category:"recognition",image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=80&auto=format&fit=crop"},{id:"print_credits",title:"Print credits",description:"500 mono pages or equivalent colour printing.",cost:250,category:"credits",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop"},{id:"charity",title:"Charity donations",description:"We donate £5 to your chosen university charity partner.",cost:550,category:"charity",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"},{id:"priority_booking",title:"Priority booking",description:"Register for modules and events one day before general release.",cost:1e3,category:"privileges",image:"https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80&auto=format&fit=crop"}];function fp(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",n=i=>Array.from({length:i},()=>e[Math.floor(Math.random()*e.length)]).join("");return`STR-${n(4)}-${n(4)}`}function _m(e){return`strack_redeemed_${(e||"").toLowerCase()}`}function pp(e){try{const n=localStorage.getItem(_m(e));if(!n)return[];const i=JSON.parse(n);return Array.isArray(i)?i:[]}catch{return[]}}function Ll(e,n){try{localStorage.setItem(_m(e),JSON.stringify(n))}catch{}}const gp=e=>s`
  max-width: 1120px;
  margin: 0 auto;
  color: ${e?"#f3f4f6":"#111827"};
`,bp=s`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,yp=s`
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
`,wp=e=>s`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  background: ${e?"#1f2937":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  box-shadow: ${e?"none":"0 4px 14px rgba(15, 23, 42, 0.06)"};
  min-width: 160px;
`,vp=s`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,xp=s`
  font-size: 1.65rem;
  font-weight: 800;
  font-family: inherit;
  color: ${Br};
  letter-spacing: -0.02em;
`,Sp=s`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Br};
  flex-shrink: 0;
  svg {
    width: 22px;
    height: 22px;
  }
`,Nl=e=>s`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${e?"none":"0 8px 30px rgba(15, 23, 42, 0.06)"};
`,Dl=s`
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
    color: ${Br};
  }
`,$p=s`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Cp=e=>s`
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
`,_p=s`
  aspect-ratio: 16 / 10;
  background: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Ap=s`
  padding: 0.9rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`,Lp=s`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`,Np=s`
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.45;
  flex: 1;
`,Dp=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,zp=s`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${Br};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,Tp=e=>s`
  font-size: 0.7rem;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: ${e?"#1f2937":"#ffffff"};
  text-transform: lowercase;
`,Ep=s`
  width: 100%;
  margin-top: 0.65rem;
  padding: 0.65rem 0.9rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  background: ${Br};
  color: #ffffff;
  transition: filter 0.15s ease, opacity 0.15s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,jp=e=>s`
  min-height: 140px;
  border: 1px dashed ${e?"#4b5563":"#d1d5db"};
  border-radius: 12px;
  padding: 1.25rem;
  font-size: 0.9rem;
  color: #9ca3af;
`,Rp=s`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,Pp=e=>s`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  background: ${e?"#1f2937":"#f3f4f6"};
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#374151"};
`,Bp=s`
  flex: 1;
  min-width: 0;
`,Op=s`
  font-weight: 600;
  margin-bottom: 0.35rem;
`,Ip=e=>s`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: ${e?"#a5b4fc":Br};
  letter-spacing: 0.02em;
`,kp=s`
  font-weight: 700;
  color: #6b7280;
  white-space: nowrap;
  font-size: 0.82rem;
`,Fp=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,Up=e=>s`
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
`,Wp=s`
  font-size: 0.85rem;
  color: #b91c1c;
  margin-bottom: 0.75rem;
`,zl=()=>r("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":!0,children:[t("circle",{cx:"9",cy:"12",r:"6"}),t("circle",{cx:"15",cy:"12",r:"6"})]});function Hp({darkMode:e,userEmail:n,points:i,onPointsChange:o}){const[c,l]=a.useState([]),[u,p]=a.useState({}),[b,v]=a.useState("");a.useEffect(()=>{n&&l(pp(n))},[n]);const g=()=>{l([]),Ll(n,[])},y=async w=>{if(!n){v("Sign in again to redeem rewards.");return}if(i<w.cost){v("Not enough points for this reward.");return}v(""),p(P=>({...P,[w.id]:!0}));try{const x=await(await fetch(`${mp}/backend/redeem_reward.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,rewardId:w.id})})).json();if(!x.success){v(x.message||"Could not redeem."),typeof x.points=="number"&&o(x.points);return}o(x.points);const A=[...c,{title:w.title,rewardId:w.id,cost:w.cost,at:new Date().toISOString(),promoCode:fp()}];l(A),Ll(n,A)}catch{v("Network error.")}finally{p(P=>({...P,[w.id]:!1}))}};return r("div",{css:gp(e),children:[r("div",{css:bp,children:[r("div",{css:yp,children:[t("h1",{children:"Rewards Store"}),t("p",{children:"Redeem your points for exciting rewards"})]}),r("div",{css:wp(e),children:[t("div",{css:Sp,children:t(zl,{})}),r("div",{children:[t("div",{css:vp,children:"Your points"}),t("div",{css:xp,children:i})]})]})]}),b?t("div",{css:Wp,role:"alert",children:b}):null,r("div",{css:Nl(e),children:[r("div",{css:Dl,children:[t(sp,{"aria-hidden":!0}),"Available rewards"]}),t("div",{css:$p,children:hp.map(w=>{const P=!!u[w.id],x=i<w.cost||P;return r("article",{css:Cp(e),children:[t("div",{css:_p,children:t("img",{src:w.image,alt:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",onError:A=>{A.target.style.display="none"}})}),r("div",{css:Ap,children:[t("h2",{css:Lp,children:w.title}),t("p",{css:Np,children:w.description}),r("div",{css:Dp,children:[r("span",{css:zp,children:[t(zl,{}),w.cost]}),t("span",{css:Tp(e),children:w.category})]}),t("button",{type:"button",css:Ep,disabled:x,onClick:()=>y(w),children:P?"...":"Redeem"})]})]},w.id)})})]}),r("div",{css:Nl(e),children:[r("div",{css:Fp,children:[t("div",{css:Dl,children:"My rewards"}),t("button",{type:"button",css:Up(e),onClick:g,disabled:c.length===0,children:"Clear history"})]}),t("p",{css:s`
            font-size: 0.78rem;
            color: #9ca3af;
            margin: -0.5rem 0 0.85rem;
          `,children:"Demo: each redemption shows a random promo-style code for display only."}),c.length===0?t("div",{css:jp(e),children:"Your redeemed rewards will appear here."}):t("ul",{css:Rp,children:c.map((w,P)=>r("li",{css:Pp(e),children:[r("div",{css:Bp,children:[t("div",{css:Op,children:w.title}),w.promoCode?r("div",{css:Ip(e),children:["Promo: ",w.promoCode]}):null]}),r("span",{css:kp,children:["-",w.cost," pts"]})]},`${w.rewardId}-${P}`))})]}),t("p",{css:s`
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        `,children:"Reward images are from Unsplash (third-party photos)."})]})}const Am=e=>s`
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
`,Lm=s`
  margin: 0 0 0.25rem;
  padding: 0 0.1rem;
`,Nm=e=>s`
  font-size: clamp(1.5rem, 3.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.45rem;
  color: ${e?"#f9fafb":"#111827"};
`,Dm=e=>s`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${e?"#9ca3af":"#6b7280"};
  max-width: 36rem;
`,zm=e=>s`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.25rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08)"};
`,Tm=s`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 1.25rem;
`,Em=s`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  flex: 1;
`,jm=s`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  flex: 1;
`,Rm=s`
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
`,Pm=s`
  font-size: clamp(1.25rem, 2.8vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
`,zs=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.875rem;
  line-height: 1.45;
`,Bm=s`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.35rem;
`,Om=s`
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
`,Im=e=>s`
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
`,km=s`
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
`,Yp=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
`,Kp=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`,Gn=e=>s`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 0.95rem 0.85rem;
  color: ${e?"#f3f4f6":"#111827"};
  box-shadow: ${e?"none":"0 1px 2px rgba(15, 23, 42, 0.04)"};
`,Jn=s`
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
`,Zn=s`
  font-size: 0.68rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  line-height: 1.2;
`,qn=s`
  font-size: 1.45rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
  color: inherit;
  @media (min-width: 480px) {
    font-size: 1.65rem;
  }
`,Xn=e=>s`
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.3;
`,Wc=e=>s`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#374151":"#e5e7eb"};
  border-radius: 16px;
  padding: 1.35rem 1.4rem 1.5rem;
  margin: 0;
  box-shadow: ${e?"none":"0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 28px rgba(15, 23, 42, 0.06)"};
`,Hc=e=>s`
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.85rem;
  padding: 0 0 0.65rem;
  border-bottom: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.28)"};
`,Fm=s`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1.25rem;
  }
`,gt=s`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`,Vp=s`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,Gp=s`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`,bt=s`
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
`,At=e=>s`
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
`,Qt=s`
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
`,Lt=s`
  flex: 1;
  min-width: 0;
  word-break: break-word;
`,tn=e=>s`
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
`,ao=e=>s`
  ${tn(e)};
  background: ${e?"#1f2937":"#f3f4f6"};
  color: ${e?"#9ca3af":"#4b5563"};
  cursor: default;
  &:focus {
    border-color: ${e?"#4b5563":"#d1d5db"};
    box-shadow: none;
  }
`,Jp=e=>s`
  ${tn(e)};
  min-height: 88px;
  line-height: 1.45;
  resize: vertical;
`,Um=e=>s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${e?"#374151":"rgba(107, 114, 128, 0.22)"};
`,ks=e=>s`
  border: 1px solid ${e?"#6366f1":"#d1d5db"};
  background: ${e?"#6366f1":"#ffffff"};
  color: ${e?"#ffffff":"#374151"};
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
`,Yc=e=>s`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(248, 113, 113, 0.12)":"rgba(185, 28, 28, 0.08)"};
  border: 1px solid ${e?"rgba(248, 113, 113, 0.25)":"rgba(185, 28, 28, 0.2)"};
  color: ${e?"#fca5a5":"#b91c1c"};
  font-size: 0.8rem;
  line-height: 1.4;
`,Zp=e=>s`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${e?"rgba(34, 197, 94, 0.14)":"rgba(22, 163, 74, 0.1)"};
  border: 1px solid ${e?"rgba(74, 222, 128, 0.3)":"rgba(22, 163, 74, 0.25)"};
  color: ${e?"#86efac":"#166534"};
  font-size: 0.8rem;
  line-height: 1.4;
`,qp=s`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
`,Xp=s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.15rem;
`,Zo=s`
  position: relative;
  width: 100%;
`,qo=e=>s`
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
`,Qp="/strack/".replace(/\/$/,""),Mp="Password updated successfully";function Wm({darkMode:e,userEmail:n}){const[i,o]=a.useState(""),[c,l]=a.useState(""),[u,p]=a.useState(""),[b,v]=a.useState(!1),[g,y]=a.useState(!1),[w,P]=a.useState(!1),[x,A]=a.useState(""),[_,L]=a.useState(!1),[z,W]=a.useState(!1),F=()=>{o(""),l(""),p("")},V=async B=>{B.preventDefault(),A(""),L(!1);const R=(n||"").trim();if(!R){A("Email is missing. Please sign in again.");return}if(c!==u){A("New password and confirmation do not match.");return}if(c.length<6){A("New password must be at least 6 characters.");return}if(c===i){A("New password must be different from your current password.");return}W(!0);try{const H=await(await fetch(`${Qp}/backend/change_password.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:R,current_password:i,new_password:c})})).json().catch(()=>({}));H.success?(L(!0),A(Mp),F()):A(H.message||"Could not update password.")}catch{A("Network error. Check your connection and try again.")}finally{W(!1)}};return r("section",{css:Wc(e),"aria-labelledby":"password-change-heading",children:[t("h2",{id:"password-change-heading",css:Hc(e),children:"Change password"}),t("p",{css:s`
          margin: -0.35rem 0 0.75rem;
          font-size: 0.85rem;
          line-height: 1.45;
          color: ${e?"#9ca3af":"#6b7280"};
        `,children:"Use a strong password you do not use elsewhere."}),r("form",{css:qp,onSubmit:V,noValidate:!0,children:[r("div",{css:gt,children:[t("label",{css:bt,htmlFor:"pwd-current",children:"Current password"}),r("div",{css:Zo,children:[t("input",{id:"pwd-current",type:b?"text":"password",autoComplete:"current-password",css:s`
                ${tn(e)};
                padding-right: 2.75rem;
              `,value:i,onChange:B=>o(B.target.value)}),t("button",{type:"button",css:qo(e),onClick:()=>v(B=>!B),"aria-label":b?"Hide current password":"Show current password","aria-pressed":b,children:b?t(Jo,{"aria-hidden":!0}):t(Go,{"aria-hidden":!0})})]})]}),r("div",{css:gt,children:[t("label",{css:bt,htmlFor:"pwd-new",children:"New password"}),r("div",{css:Zo,children:[t("input",{id:"pwd-new",type:g?"text":"password",autoComplete:"new-password",css:s`
                ${tn(e)};
                padding-right: 2.75rem;
              `,value:c,onChange:B=>l(B.target.value)}),t("button",{type:"button",css:qo(e),onClick:()=>y(B=>!B),"aria-label":g?"Hide new password":"Show new password","aria-pressed":g,children:g?t(Jo,{"aria-hidden":!0}):t(Go,{"aria-hidden":!0})})]})]}),r("div",{css:gt,children:[t("label",{css:bt,htmlFor:"pwd-confirm",children:"Confirm new password"}),r("div",{css:Zo,children:[t("input",{id:"pwd-confirm",type:w?"text":"password",autoComplete:"new-password",css:s`
                ${tn(e)};
                padding-right: 2.75rem;
              `,value:u,onChange:B=>p(B.target.value)}),t("button",{type:"button",css:qo(e),onClick:()=>P(B=>!B),"aria-label":w?"Hide password confirmation":"Show password confirmation","aria-pressed":w,children:w?t(Jo,{"aria-hidden":!0}):t(Go,{"aria-hidden":!0})})]})]}),t("div",{css:Xp,children:t("button",{type:"submit",disabled:z,css:s`
              ${ks(!0)};
              &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
              }
            `,children:z?"Updating…":"Update password"})}),x?t("div",{css:_?Zp(e):Yc(e),role:"status",children:x}):null]})]})}const co=[{value:"",label:"— Month —"},{value:"Sep",label:"September"},{value:"Jan",label:"January"},{value:"May",label:"May"}],Gs=[{value:"",label:"— Not set —"},{value:"1st semester",label:"1st semester"},{value:"2nd semester",label:"2nd semester"}],Or=[{value:"",label:"— Not set —"},{value:"Foundation",label:"Foundation"},{value:"1",label:"Year 1"},{value:"2",label:"Year 2"},{value:"3",label:"Year 3"},{value:"4",label:"Year 4"}];function Kc(){const e=new Date().getFullYear()-2,n=[];for(let i=e;i<=e+12;i+=1)n.push(i);return n}function Xt(e){const n=e==null?void 0:e.intake_month,i=e==null?void 0:e.intake_year;if(!n&&(i==null||i===""||Number(i)<=0))return"—";const o=co.find(l=>l.value===n),c=o&&o.value?o.label:n||"";return i!=null&&i!==""&&Number(i)>0?`${c} ${i}`.trim():c||"—"}function Mt(e){const n=String(e??"").trim();if(!n)return"—";const i=Or.find(o=>o.value===n);return i&&i.value?i.label:n}function eg(e,n){if(!e||!n)return!0;const i=String(e.intake_month||"").trim(),o=Number(e.intake_year);if(!i||!Number.isFinite(o)||o<=0)return!0;const c=String(n.intake_month||"").trim(),l=Number(n.intake_year);return!c||!Number.isFinite(l)||l<=0?!1:i===c&&o===l}function Xo(e){return String(e??"").trim().toLowerCase()}function Js(e,n){if(!n||!Array.isArray(e))return[];const i=Xo(n.department),o=p=>eg(n,p),c=e.filter(p=>o(p)&&Array.isArray(p.student_ids)&&p.student_ids.map(Number).includes(Number(n.id))),l=i===""?e.filter(p=>o(p)&&Xo(p.department)===""):e.filter(p=>o(p)&&Xo(p.department)===i),u=new Map;for(const p of c)u.set(Number(p.id),p);for(const p of l)u.set(Number(p.id),p);return Array.from(u.values())}function cr(e,{userEmail:n,studentId:i,studentDatabaseId:o}){const c=Array.isArray(e)?e:[],l=o!=null&&Number.isFinite(Number(o))?Number(o):null;if(l!=null&&l>0){const b=c.find(v=>Number(v.id)===l);if(b)return b}const u=String(n||"").trim().toLowerCase(),p=String(i||"").trim().toUpperCase();return c.find(b=>String(b.email||"").trim().toLowerCase()===u)||c.find(b=>String(b.student_id||"").trim().toUpperCase()===p)||null}const ii="/strack",Fs="#6366f1";function on(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function Qo(e){const[n,i,o]=e.split("-").map(Number);return new Date(n,i-1,o)}function Zr(e){if(!e)return"";const[n,i]=e.split(":").map(Number),o=(n+11)%12+1,c=n>=12?"PM":"AM";return`${o}:${String(i).padStart(2,"0")} ${c}`}function Tl(e,n){const i=e.course_id,o=i!=null&&i!==""?Number(i):NaN,c=Number.isFinite(o)&&o>0;return e.entry_type==="event"?c?n.has(o):!0:e.entry_type==="class"&&c?n.has(o):!1}function tg(e){const n=e.getFullYear(),i=e.getMonth(),o=new Date(n,i,1),c=new Date(n,i+1,0),l=o.getDay(),u=[];for(let p=0;p<l;p++)u.push({type:"pad"});for(let p=1;p<=c.getDate();p++)u.push({type:"day",date:new Date(n,i,p)});for(;u.length%7!==0;)u.push({type:"pad"});return u}const ng=s`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`,Mo=e=>s`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
`,rg=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`,sg=e=>s`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#f9fafb":"#111827"};
`,El=e=>s`
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
`,ig=s`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`,og=e=>s`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  margin-bottom: 0.1rem;
`,jl=(e,n,i,o)=>s`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid
    ${n?Fs:i?e?"#a5b4fc":"#c7d2fe":e?"#404040":"#e5e7eb"};
  background: ${n?Fs:o?e?"#1f1f1f":"#fafafa":i?e?"rgba(99,102,241,0.16)":"rgba(99,102,241,0.08)":e?"#262626":"#fff"};
  color: ${n?"#fff":"inherit"};
  padding: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${o?"default":"pointer"};
`,ag=s`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`,cg=e=>s`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${e?"#fff":"#111827"};
  opacity: 0.9;
`,lg=e=>s`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Rl=(e,n)=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-left: 4px solid ${n==="event"?"#ef4444":Fs};
  background: ${e?"#1f1f1f":"#fff"};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
  cursor: pointer;
`,ea=s`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,ta=e=>s`
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
`,dg=s`
  display: grid;
  gap: 1rem;
`,Pl=e=>s`
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
    color: ${Fs};
  }
`,ug=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
  background: ${e?"#1f1f1f":"#fff"};
`,mg=e=>s`
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
  color: ${e?"#d1d5db":"#6b7280"};
`,qr=e=>s`
  margin: 0.25rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
`,hg=s`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,fg=e=>s`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${e?"#1a1a1a":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  box-shadow: 0 24px 30px -12px rgba(0, 0, 0, 0.25);
`,pg=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,gg=e=>s`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,bg=e=>s`
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
`,yg=s`
  padding: 1rem 1.1rem 1.2rem;
`,oi=e=>s`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0;
  color: ${e?"#d1d5db":"#4b5563"};
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${e?"#a5b4fc":Fs};
    flex-shrink: 0;
  }
`,wg=200;function vg({darkMode:e,userEmail:n,studentId:i,studentDatabaseId:o}){const[c,l]=a.useState(new Date),[u,p]=a.useState([]),[b,v]=a.useState([]),[g,y]=a.useState(!0),[w,P]=a.useState(on(new Date)),[x,A]=a.useState([]),[_,L]=a.useState(""),[z,W]=a.useState(!1),[F,V]=a.useState(null),B=a.useMemo(()=>{const C=new Date;return C.setHours(0,0,0,0),C},[]),R=a.useMemo(()=>{const C=c.getFullYear(),X=c.getMonth();return{from:on(new Date(C,X,1)),to:on(new Date(C,X+1,0))}},[c]);a.useEffect(()=>{let C=!0;async function X(){y(!0);try{const G=await(await fetch(`${ii}/backend/timetable.php?from=${encodeURIComponent(R.from)}&to=${encodeURIComponent(R.to)}`)).json();if(!C)return;p(G.success?G.entries||[]:[])}catch{if(!C)return;p([])}finally{C&&y(!1)}}return X(),()=>{C=!1}},[R.from,R.to]),a.useEffect(()=>{let C=!0;async function X(){try{const J=new Date;J.setHours(0,0,0,0);const G=new Date(J);G.setDate(G.getDate()+wg);const me=on(J),ye=on(G),ze=await(await fetch(`${ii}/backend/timetable.php?from=${encodeURIComponent(me)}&to=${encodeURIComponent(ye)}`)).json();if(!C)return;v(ze.success?ze.entries||[]:[])}catch{if(!C)return;v([])}}return X(),()=>{C=!1}},[]),a.useEffect(()=>{let C=!0;async function X(){W(!1);try{const[J,G]=await Promise.all([fetch(`${ii}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ii}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),me=await J.json(),ye=await G.json();if(!C)return;const he=me.success?me.students||[]:[],ze=ye.success?ye.courses||[]:[],ve=cr(he,{userEmail:n,studentId:i,studentDatabaseId:o});if(!ve){A([]),L(""),W(!0);return}L(String(ve.degree||"").trim());const Y=Js(ze,ve).map(re=>Number(re.id)).filter(re=>Number.isFinite(re)&&re>0);A(Array.from(new Set(Y)))}catch{if(!C)return;A([]),L("")}finally{C&&W(!0)}}return X(),()=>{C=!1}},[n,i,o]);const q=a.useMemo(()=>{if(!z)return[];const C=new Set((x||[]).map(X=>Number(X)));return u.filter(X=>Tl(X,C))},[u,x,z]),H=a.useMemo(()=>{if(!z)return[];const C=new Set((x||[]).map(X=>Number(X)));return b.filter(X=>Tl(X,C))},[b,x,z]),Q=a.useMemo(()=>{const C={};for(const X of q)C[X.entry_date]||(C[X.entry_date]=[]),C[X.entry_date].push(X);return Object.keys(C).forEach(X=>C[X].sort((J,G)=>J.start_time.localeCompare(G.start_time))),C},[q]),ce=a.useMemo(()=>tg(c),[c]),oe=Q[w]||[],ie=Q[on(B)]||[],ue=a.useMemo(()=>{const C=on(B);return H.filter(J=>J.entry_date>C||J.entry_date===C&&String(J.start_time||"")>="00:00:00").sort((J,G)=>`${J.entry_date} ${J.start_time}`.localeCompare(`${G.entry_date} ${G.start_time}`)).slice(0,5)},[H,B]),N=c.toLocaleDateString(void 0,{month:"long",year:"numeric"}),M=Qo(w).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),ee=()=>l(C=>new Date(C.getFullYear(),C.getMonth()-1,1)),j=()=>l(C=>new Date(C.getFullYear(),C.getMonth()+1,1)),E=()=>V(null);return r("div",{css:ng,children:[r("div",{css:Mo(e),children:[r("div",{css:rg,children:[t("h2",{css:sg(e),children:N}),r("div",{style:{display:"inline-flex",gap:"0.35rem"},children:[t("button",{type:"button",css:El(e),onClick:ee,"aria-label":"Previous month",children:t(kc,{})}),t("button",{type:"button",css:El(e),onClick:j,"aria-label":"Next month",children:t(Ic,{})})]})]}),r("div",{css:ig,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(C=>t("div",{css:og(e),children:C},C)),ce.map((C,X)=>{if(C.type==="pad")return t("div",{css:jl(e,!1,!1,!0)},`pad-${X}`);const J=on(C.date),G=J===w,me=J===on(B),ye=(Q[J]||[]).length>0;return r("div",{role:"button",tabIndex:0,css:jl(e,G,me,!1),onClick:()=>P(J),onKeyDown:he=>he.key==="Enter"&&P(J),children:[t("div",{css:ag,children:C.date.getDate()}),ye?t("div",{css:cg(G)}):t("div",{})]},J)})]}),r("h3",{css:lg(e),children:["Events on ",M]}),_?r("p",{css:qr(e),style:{marginTop:0,marginBottom:"0.5rem"},children:["Showing timetable for degree: ",_]}):null,g||!z?t("p",{css:qr(e),children:"Loading events..."}):oe.length===0?t("p",{css:qr(e),children:"No events for this date."}):oe.map(C=>t("div",{css:Rl(e,C.entry_type),children:r("button",{type:"button",onClick:()=>V(C),css:s`
                  all: unset;
                  display: block;
                  width: 100%;
                  cursor: pointer;
                `,children:[t("p",{css:ea,children:C.entry_type==="class"?C.course_name||C.course_code:C.event_title}),r("div",{css:ta(e),children:[r("span",{children:[t(lt,{}),Zr(C.start_time)]}),(C.room_location||"").trim()?r("span",{children:[t(Tn,{}),C.room_location]}):null]})]})},C.id))]}),r("div",{css:dg,children:[r("div",{css:Mo(e),children:[r("h3",{css:Pl(e),children:[t(wn,{}),"Today's Schedule"]}),ie.length===0?t("p",{css:qr(e),children:"No classes or events today."}):ie.map(C=>t("div",{css:Rl(e,C.entry_type),children:r("button",{type:"button",onClick:()=>V(C),css:s`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `,children:[t("p",{css:ea,children:C.entry_type==="class"?C.course_name||C.course_code:C.event_title}),r("div",{css:ta(e),children:[r("span",{children:[t(lt,{}),Zr(C.start_time)]}),(C.room_location||"").trim()?r("span",{children:[t(Tn,{}),C.room_location]}):null]})]})},`today-${C.id}`))]}),r("div",{css:Mo(e),children:[r("h3",{css:Pl(e),children:[t(lt,{}),"Upcoming"]}),ue.length===0?t("p",{css:qr(e),children:"No upcoming entries."}):ue.map(C=>t("div",{css:ug(e),children:r("button",{type:"button",onClick:()=>V(C),css:s`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `,children:[r("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[t("strong",{style:{fontSize:"0.92rem"},children:C.entry_type==="class"?C.course_name||C.course_code:C.event_title||"Assignment"}),t("span",{css:mg(e),children:C.entry_type==="class"?"Lecture":"Assignment"})]}),C.entry_type==="event"&&(C.course_code||C.course_name)?t("div",{style:{fontSize:"0.78rem",fontWeight:600,color:e?"#9ca3af":"#6b7280",marginTop:"0.2rem"},children:[C.course_code,C.course_name].filter(Boolean).join(" — ")}):null,r("div",{css:ta(e),style:{marginTop:"0.25rem"},children:[r("span",{children:[t(wn,{}),Qo(C.entry_date).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),r("span",{children:[t(lt,{}),Zr(C.start_time)]})]})]})},`up-${C.id}`))]})]}),F?t("div",{css:hg,onClick:E,children:r("div",{css:fg(e),onClick:C=>C.stopPropagation(),children:[r("div",{css:pg(e),children:[t("h3",{css:gg(e),children:"Event Details"}),t("button",{type:"button",css:bg(e),onClick:E,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:yg,children:[t("p",{css:ea,style:{marginBottom:"0.45rem"},children:F.entry_type==="class"?F.course_name||F.course_code:F.event_title||"Event"}),r("div",{css:oi(e),children:[t(wn,{}),t("span",{children:Qo(F.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})})]}),r("div",{css:oi(e),children:[t(lt,{}),r("span",{children:[Zr(F.start_time)," - ",Zr(F.end_time)]})]}),r("div",{css:oi(e),children:[t(Tn,{}),t("span",{children:(F.room_location||"").trim()||"Location not specified"})]}),(F.lecturers||[]).length>0?r("div",{css:oi(e),children:[t(nr,{}),t("span",{children:F.lecturers.map(C=>C.full_name).join(", ")})]}):null,F.entry_type==="event"&&F.event_description?t("p",{css:s`
                    margin: 0.7rem 0 0;
                    font-size: 0.9rem;
                    line-height: 1.45;
                    color: ${e?"#d1d5db":"#374151"};
                  `,children:F.event_description}):null]})]})}):null]})}const Ro=10,er=[{id:"assignment-master",name:"Assignment Master",icon:"📝",pointsAward:900,unlockHint:"Submit all assignments on time for the current term."},{id:"perfect-attendance",name:"Perfect Attendance",icon:"⭐",pointsAward:800,unlockHint:"Maintain 100% attendance across all scheduled classes."},{id:"first-class-scholar",name:"First Class Scholar",icon:"🎓",pointsAward:1e3,unlockHint:"Achieve first-class level grades in your modules."},{id:"extra-mile",name:"Extra Mile",icon:"🚀",pointsAward:500,unlockHint:"Complete optional academic activities and bonus tasks."},{id:"halfway-hero",name:"Halfway Hero",icon:"🏆",pointsAward:600,unlockHint:"Reach the midpoint milestone of your degree progression."},{id:"rising-star",name:"Rising Star",icon:"📈",pointsAward:400,unlockHint:"Show consistent improvement in academic performance."},{id:"peer-champion",name:"Peer Champion",icon:"🤝",pointsAward:250,unlockHint:"Actively help classmates through peer support activities."},{id:"academic-contributor",name:"Academic Contributor",icon:"✭",pointsAward:300,unlockHint:"Contribute to extracurricular academic events and initiatives."},{id:"pomodoro-focus",name:"Pomodoro Focus",icon:"🍅",pointsAward:200,unlockHint:`Complete at least ${Ro} Pomodoro sessions from the Study timer (each run must finish and be logged with a module).`}];function xg(e){return er.find(n=>n.id===e)||null}function Hm(e,n){const i=new Set((e||[]).map(o=>o.badge_id).filter(Boolean));return Number(n)>=Ro&&i.add("pomodoro-focus"),i.size}const Bl="/strack/".replace(/\/$/,""),Sg=s`
  width: 100%;
`,$g=s`
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
`,Cg=e=>s`
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,_g=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#262626":"#fff"};
  padding: 1.25rem 1.35rem 1.4rem;
`,Ag=e=>s`
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
`,Lg=e=>s`
  margin: 0 0 0.9rem 0;
  border: 1px solid ${e?"#4338ca":"#c7d2fe"};
  background: ${e?"rgba(67, 56, 202, 0.18)":"#eef2ff"};
  color: ${e?"#e0e7ff":"#3730a3"};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
`,Ng=s`
  margin: 0 0 0.3rem 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Dg=s`
  margin: 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.2rem;
  font-size: 0.88rem;
`,zg=s`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1rem 1.25rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,Tg=(e,n)=>s`
  border: 1px dashed ${e?"#3f3f46":"#e5e7eb"};
  border-radius: 14px;
  min-height: 220px;
  padding: 1.35rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${e?"#1f1f1f":"#fff"};
  opacity: ${n?.55:1};
`,Eg=e=>s`
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0.85rem;
  filter: ${e?"grayscale(100%)":"none"};
`,jg=e=>s`
  margin: 0 0 0.45rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#e5e7eb":"#1f2937"};
`,Rg=(e,n)=>s`
  margin: 0 0 0.35rem 0;
  font-size: 0.82rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: ${n?e?"#a3a3a3":"#6b7280":"#059669"};
`,Pg=e=>s`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};

  svg {
    width: 15px;
    height: 15px;
  }
`,Bg=e=>s`
  margin: 0.35rem 0 0 0;
  font-size: 0.75rem;
  line-height: 1.3;
  color: ${e?"#a3a3a3":"#6b7280"};
  text-align: center;
  max-width: 100%;
`,Og=s`
  all: unset;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ig=s`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,kg=e=>s`
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
`,Fg=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,Ug=e=>s`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Wg=e=>s`
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
`,Hg=e=>s`
  padding: 1rem;
  color: ${e?"#d1d5db":"#374151"};
  line-height: 1.5;
`;function Yg({darkMode:e,userEmail:n,studentId:i,studentDatabaseId:o,badgesRefreshKey:c=0}){const[l,u]=a.useState(null),[p,b]=a.useState(0),[v,g]=a.useState([]);a.useEffect(()=>{if(!n){b(0);return}let x=!1;return(async()=>{try{const _=await(await fetch(`${Bl}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json().catch(()=>({}));if(x)return;const L=_.success?_.students||[]:[],z=cr(L,{userEmail:n,studentId:i,studentDatabaseId:o});b(Number((z==null?void 0:z.pomodoro_sessions_count)||0))}catch{x||b(0)}})(),()=>{x=!0}},[n,i,o]),a.useEffect(()=>{if(!n){g([]);return}let x=!1;return(async()=>{try{const _=await(await fetch(`${Bl}/backend/student_badges.php?user_email=${encodeURIComponent(n)}&t=${Date.now()}`,{cache:"no-store"})).json().catch(()=>({}));if(x)return;g(_.success&&Array.isArray(_.awards)?_.awards:[])}catch{x||g([])}})(),()=>{x=!0}},[n,c]);const y=a.useMemo(()=>{const x=new Map;for(const A of v)A.badge_id&&!x.has(A.badge_id)&&x.set(A.badge_id,A);return x},[v]),w=a.useMemo(()=>er.map(x=>{const A=y.get(x.id);return A?{...x,locked:!1,award:A}:x.id==="pomodoro-focus"&&p>=Ro?{...x,locked:!1,award:null}:{...x,locked:!0,award:null}}),[p,y]),P=w.filter(x=>!x.locked).length;return r("div",{css:Sg,children:[t("h1",{css:$g,children:"Badges"}),t("p",{css:Cg(e),children:"Collect badges by meeting milestones or when your lecturer awards you in the portal. Each badge adds points to your account when earned (see cards below)."}),r("section",{css:_g(e),children:[r("h2",{css:Ag(e),children:[t(or,{}),"All Badges (",P,"/",w.length,")"]}),r("div",{css:Lg(e),children:[t("p",{css:Ng,children:"Semester Reset Notice"}),r("ul",{css:Dg,children:[t("li",{children:"Points reset every semester."}),t("li",{children:"Badges can be earned again."})]})]}),t("div",{css:zg,children:w.map(x=>t("article",{css:Tg(e,x.locked),children:r("button",{type:"button",css:Og,onClick:()=>{x.locked&&u(x)},children:[t("div",{css:Eg(x.locked),children:x.icon}),t("p",{css:jg(e),children:x.name}),r("p",{css:Rg(e,x.locked),children:["+",x.pointsAward," pts"]}),!x.locked&&x.award?r("p",{css:Bg(e),children:["Awarded by ",x.award.lecturer_name||"Lecturer"]}):null,x.locked?r("div",{css:Pg(e),children:[t(np,{}),"Locked"]}):null]})},x.id))})]}),l?t("div",{css:Ig,onClick:()=>u(null),children:r("div",{css:kg(e),onClick:x=>x.stopPropagation(),children:[r("div",{css:Fg(e),children:[r("h3",{css:Ug(e),children:["How to unlock: ",l.name]}),t("button",{type:"button",css:Wg(e),onClick:()=>u(null),"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:Hg(e),children:[r("p",{css:s`margin: 0 0 0.5rem 0;`,children:[t("strong",{children:"Points reward:"})," +",l.pointsAward," pts when you earn this badge"]}),r("p",{css:s`margin: 0 0 0.6rem 0;`,children:[t("strong",{children:"Requirement:"})," ",l.unlockHint]}),t("p",{css:s`margin: 0; font-size: 0.88rem; opacity: 0.9;`,children:"Your lecturer can also award this badge to you from their dashboard. Otherwise, keep meeting the requirement above to unlock it automatically where applicable."})]})]})}):null]})}const Sn="/strack/".replace(/\/$/,""),Ts="#6366f1";function ai(e){const[n,i,o]=String(e||"").split("-").map(Number);return new Date(n,(i||1)-1,o||1)}function na(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function Xr(e){if(!e)return"";const[n,i]=String(e).split(":").map(Number),o=(n+11)%12+1,c=n>=12?"PM":"AM";return`${o}:${String(i||0).padStart(2,"0")} ${c}`}function Ol(e){const n=Number(e)||0;return n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/1024/1024).toFixed(1)} MB`}const Kg=s`width: 100%;`,Vg=s`margin: 0; font-size: 1.5rem; font-weight: 700; line-height: 1.2;`,et=e=>s`margin: 0.2rem 0 .9rem; font-size: .95rem; color: ${e?"#9ca3af":"#6b7280"}; line-height: 1.4;`,Gg=s`display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .8rem; margin-bottom: .95rem; @media (max-width:1024px){grid-template-columns: repeat(2,minmax(0,1fr));}`,Vc=e=>s`background:${e?"#262626":"#fff"}; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:14px;`,ci=e=>s`${Vc(e)}; padding:.95rem;`,li=e=>s`font-size:.78rem; letter-spacing:.03em; font-weight:700; color:${e?"#9ca3af":"#6b7280"}; text-transform: uppercase;`,di=s`margin:.6rem 0 .15rem; font-size:1.85rem; font-weight:800; line-height:1.1;`,ui=e=>s`margin:0; font-size:.95rem; color:${e?"#9ca3af":"#6b7280"};`,Jg=e=>s`${Vc(e)}; padding:.95rem; margin-bottom:.95rem;`,Zg=s`display:flex; align-items:center; gap:.5rem; margin:0 0 .8rem; font-size:1.3rem; font-weight:700;`,qg=e=>s`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:12px; padding:.9rem; margin-bottom:.8rem;`,Xg=s`display:flex; align-items:center; gap:.5rem; flex-wrap:wrap;`,Qr=e=>s`border:1px solid ${e?"#4b5563":"#e5e7eb"}; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:600;`,Qg=s`margin-left:auto; border:1px solid #bbf7d0; color:#059669; background:#ecfdf5; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:700;`,Mg=s`margin:.55rem 0 .2rem; font-size:1.8rem; font-weight:800; line-height:1.2;`,e1=e=>s`display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:.8rem; margin:.7rem 0 .6rem; font-size:.95rem; color:${e?"#d1d5db":"#374151"}; @media (max-width:900px){grid-template-columns:1fr;}`,t1=e=>s`height:10px; border-radius:999px; background:${e?"#404040":"#e5e7eb"}; overflow:hidden;`,n1=e=>s`height:100%; width:${Math.max(0,Math.min(100,e))}%; background:${Ts};`,r1=s`display:flex; gap:.55rem; margin-top:.75rem; flex-wrap:wrap;`,Il=s`border:none; background:${Ts}; color:#fff; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,Mr=e=>s`border:1px solid ${e?"#4b5563":"#e5e7eb"}; background:transparent; color:inherit; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,ra=s`position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem;`,sa=e=>s`${Vc(e)}; width:100%; max-width:980px; max-height:90vh; overflow:auto;`,ia=e=>s`display:flex; align-items:start; justify-content:space-between; padding:1rem; border-bottom:1px solid ${e?"#404040":"#e5e7eb"};`,oa=s`margin:0; font-size:1.45rem; font-weight:800;`,aa=e=>s`margin:.2rem 0 0; color:${e?"#9ca3af":"#6b7280"};`,ca=e=>s`border:1px solid ${e?"#4b5563":"#d1d5db"}; background:transparent; width:38px; height:38px; border-radius:10px; cursor:pointer;`,la=s`padding:1rem;`,s1=e=>s`display:flex; align-items:center; justify-content:space-between; gap:.8rem; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.6rem;`,mi=e=>s`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`,i1=e=>s`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.95rem;
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#f9fafb"};
`,kl=e=>s`
  min-width: 8.5rem;
  padding: 0.42rem 0.55rem;
  border-radius: 8px;
  border: 1px solid ${e?"#525252":"#d1d5db"};
  background: ${e?"#262626":"#fff"};
  color: inherit;
  font: inherit;
  font-size: 0.92rem;
`,o1=e=>s`
  flex: 1 1 12rem;
  min-width: min(100%, 12rem);
  padding: 0.42rem 0.65rem 0.42rem 2.15rem;
  border-radius: 8px;
  border: 1px solid ${e?"#525252":"#d1d5db"};
  background: ${e?"#262626":"#fff"};
  color: inherit;
  font: inherit;
  font-size: 0.92rem;
`,a1=s`
  position: relative;
  flex: 1 1 12rem;
  min-width: min(100%, 12rem);
  display: flex;
  align-items: center;
`;function c1(e,n){const i=String(n||"").trim().toLowerCase();return i?[e.course_name,e.course_code,e.department,e.lecturer_name,Mt(e.course_study_year),e.semester,Xt(e)].filter(Boolean).join(" ").toLowerCase().includes(i):!0}function l1({darkMode:e,userEmail:n,studentId:i,studentDatabaseId:o}){var Se;const[c,l]=a.useState([]),[u,p]=a.useState([]),[b,v]=a.useState([]),[g,y]=a.useState(!0),[w,P]=a.useState(null),[x,A]=a.useState(null),[_,L]=a.useState(null),[z,W]=a.useState([]),[F,V]=a.useState(!1),[B,R]=a.useState(""),[q,H]=a.useState(""),[Q,ce]=a.useState(""),[oe,ie]=a.useState(""),[ue,N]=a.useState([]),[M,ee]=a.useState(!1),[j,E]=a.useState(""),[C,X]=a.useState(""),J=a.useRef(null),G=D=>`${Sn}/backend/course_resources.php?download=1&id=${D}&student_email=${encodeURIComponent(n||"")}`;a.useEffect(()=>{if(!(w!=null&&w.id)||!n){W([]),R("");return}let D=!0;async function ae(){V(!0),R("");try{const T=await(await fetch(`${Sn}/backend/course_resources.php?course_id=${w.id}&student_email=${encodeURIComponent(n)}`,{cache:"no-store"})).json();if(!D)return;T.success?W(T.resources||[]):R(T.error||"Could not load resources")}catch{D&&R("Network error")}finally{D&&V(!1)}}return ae(),()=>{D=!1}},[w==null?void 0:w.id,n]),a.useEffect(()=>{if(!(x!=null&&x.id)||!n){N([]),E("");return}let D=!0;async function ae(){ee(!0),E("");try{const T=await(await fetch(`${Sn}/backend/demo_assignment_submissions.php?user_email=${encodeURIComponent(n)}&course_id=${x.id}&t=${Date.now()}`,{cache:"no-store"})).json().catch(()=>({}));if(!D)return;T.success?N(Array.isArray(T.submissions)?T.submissions:[]):E(T.error||"Could not load demo uploads")}catch{D&&E("Could not load demo uploads")}finally{D&&ee(!1)}}return ae(),()=>{D=!1}},[x==null?void 0:x.id,n]),a.useEffect(()=>{var ae;if(!x){X("");return}const D=((ae=x.meta)==null?void 0:ae.assignments)||[];if(D.length===0){X("");return}X(ge=>ge&&D.some(T=>String(T.id)===String(ge))?ge:String(D[0].id))},[x]);const me=async D=>{if(!(!(x!=null&&x.id)||!n||!D)){if(!C){E("Select which assignment you are submitting for.");return}E(""),ee(!0);try{const ae=new FormData;ae.append("user_email",n),ae.append("course_id",String(x.id)),ae.append("timetable_entry_id",C),ae.append("file",D);const T=await(await fetch(`${Sn}/backend/demo_assignment_submissions.php`,{method:"POST",body:ae})).json().catch(()=>({}));if(T.success){E("Uploaded — your lecturer sees on-time / late / missing in Assignment submission trends (vs this due date).");const m=await(await fetch(`${Sn}/backend/demo_assignment_submissions.php?user_email=${encodeURIComponent(n)}&course_id=${x.id}&t=${Date.now()}`,{cache:"no-store"})).json().catch(()=>({}));m.success&&N(Array.isArray(m.submissions)?m.submissions:[])}else E(T.error||"Upload failed")}catch{E("Upload failed")}finally{ee(!1),J.current&&(J.current.value="")}}};a.useEffect(()=>{let D=!0;async function ae(){y(!0);try{const ge=new Date,T=new Date(ge);T.setMonth(T.getMonth()-6);const h=new Date(ge);h.setMonth(h.getMonth()+6);const[m,$,O]=await Promise.all([fetch(`${Sn}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${Sn}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${Sn}/backend/timetable.php?from=${encodeURIComponent(na(T))}&to=${encodeURIComponent(na(h))}`,{cache:"no-store"})]),ne=await m.json(),k=await $.json(),te=await O.json();if(!D)return;l(ne.success?ne.courses||[]:[]),p(k.success?k.students||[]:[]),v(te.success?te.entries||[]:[])}catch{if(!D)return;l([]),p([]),v([])}finally{D&&y(!1)}}return ae(),()=>{D=!1}},[]);const ye=a.useMemo(()=>cr(u,{userEmail:n,studentId:i,studentDatabaseId:o}),[u,n,i,o]),he=a.useMemo(()=>Js(c,ye),[c,ye]),ze=a.useMemo(()=>he.filter(D=>!(!c1(D,q)||Q&&String(D.semester||"")!==Q||oe&&String(D.course_study_year||"")!==oe)),[he,q,Q,oe]),ve=a.useMemo(()=>{const D=na(new Date);return ze.map(ae=>{const ge=Number(ae.id),T=b.filter(k=>k.entry_type==="class"&&Number(k.course_id)===ge).sort((k,te)=>`${k.entry_date} ${k.start_time}`.localeCompare(`${te.entry_date} ${te.start_time}`)),h=b.filter(k=>k.entry_type==="event"&&Number(k.course_id)===ge).sort((k,te)=>`${k.entry_date} ${k.start_time}`.localeCompare(`${te.entry_date} ${te.start_time}`)).map(k=>{let te="Not Started";return k.entry_date<D?te="Completed":k.entry_date===D&&(te="In Progress"),{id:k.id,title:k.event_title||"Assignment",description:k.event_description||"No description provided.",due:k.entry_date,dueTime:k.start_time,status:te}}),m=h.filter(k=>k.status==="Completed").length,$=h.length?Math.round(m/h.length*100):0,O=T.find(k=>k.entry_date>=D)||null,ne=Number(ae.enrolled_count)||(Array.isArray(ae.students)?ae.students.length:0);return{...ae,meta:{instructor:ae.lecturer_name||"TBA",enrolled:ne,description:`You are enrolled in ${ae.course_name} (${ae.course_code}) in ${ae.department||"General"}.`,classes:T,assignments:h,completedAssignments:m,nextLecture:O?`${ai(O.entry_date).toLocaleDateString(void 0,{weekday:"short"})} ${Xr(O.start_time)}`:"No upcoming session",progress:$}}})},[ze,b]),fe=a.useMemo(()=>{const D=ve.length,ae=ve.reduce((m,$)=>m+(Number($.credits)||0),0),ge=D?Math.round(ve.reduce((m,$)=>m+$.meta.progress,0)/D):0,T=ve.reduce((m,$)=>m+$.meta.completedAssignments,0),h=ve.reduce((m,$)=>m+$.meta.assignments.length,0);return{totalCourses:D,totalCredits:ae,avgProgress:ge,completed:T,totalAssignments:h}},[ve]),Y=!!q.trim()||!!Q||!!oe,re=()=>{H(""),ce(""),ie("")},xe=he.length===0?"No enrolled courses found.":Y?"No courses match your filters.":"No enrolled courses found.";return r("div",{css:Kg,children:[t("h1",{css:Vg,children:"My Courses"}),t("p",{css:et(e),children:"Modules you take, timetable sessions, and assignment due dates"}),r("div",{css:Gg,children:[r("div",{css:ci(e),children:[t("p",{css:li(e),children:"Total Courses"}),t("p",{css:di,children:fe.totalCourses}),t("p",{css:ui(e),children:"Active enrollments"})]}),r("div",{css:ci(e),children:[t("p",{css:li(e),children:"Total Credits"}),t("p",{css:di,children:fe.totalCredits}),t("p",{css:ui(e),children:"Credit hours"})]}),r("div",{css:ci(e),children:[t("p",{css:li(e),children:"Timeline"}),r("p",{css:di,children:[fe.avgProgress,"%"]}),t("p",{css:ui(e),children:"Assignments completed"})]}),r("div",{css:ci(e),children:[t("p",{css:li(e),children:"Due dates"}),r("p",{css:di,children:[fe.completed,"/",fe.totalAssignments]}),t("p",{css:ui(e),children:"Completed / total"})]})]}),!g&&he.length>0?r("div",{css:i1(e),role:"search","aria-label":"Filter your courses",children:[t("span",{css:et(e),style:{margin:0,fontWeight:700},children:"Filters"}),r("div",{css:a1,children:[t(Ln,{"aria-hidden":!0,style:{position:"absolute",left:"0.55rem",width:"1.1rem",height:"1.1rem",color:e?"#9ca3af":"#6b7280",pointerEvents:"none"}}),t("input",{type:"search",css:o1(e),placeholder:"Search name, code, department…",value:q,onChange:D=>H(D.target.value),"aria-label":"Search courses"})]}),t("select",{css:kl(e),value:Q,onChange:D=>ce(D.target.value),"aria-label":"Semester",children:Gs.map(D=>t("option",{value:D.value,children:D.value?D.label:"Any semester"},D.value||"all-s"))}),t("select",{css:kl(e),value:oe,onChange:D=>ie(D.target.value),"aria-label":"Study year",children:Or.map(D=>t("option",{value:D.value,children:D.value?D.label:"Any study year"},D.value||"all-y"))}),Y?t("button",{type:"button",css:Mr(e),onClick:re,children:"Clear filters"}):null]}):null,r("section",{css:Jg(e),children:[r("h2",{css:Zg,children:[t(St,{style:{color:Ts,width:24,height:24}}),"Active Courses"]}),g?t("p",{children:"Loading courses..."}):ve.length===0?r("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.55rem"},children:[t("p",{style:{margin:0},children:xe}),Y&&he.length>0?t("button",{type:"button",css:Mr(e),onClick:re,children:"Reset filters"}):null]}):ve.map(D=>r("article",{css:qg(e),children:[r("div",{css:Xg,children:[t("span",{css:Qr(e),children:D.course_code}),r("span",{css:Qr(e),children:[Number(D.credits)||0," Credits"]}),D.semester?t("span",{css:Qr(e),children:D.semester}):null,D.course_study_year?t("span",{css:Qr(e),children:Mt(D.course_study_year)}):null,t("span",{css:Qg,children:"Active"})]}),t("h3",{css:Mg,children:D.course_name}),t("p",{css:et(e),style:{marginBottom:".4rem"},children:D.department||"General"}),r("div",{css:e1(e),children:[r("span",{children:[t(kt,{})," Students: ",t("strong",{children:D.meta.enrolled})]}),r("span",{children:[t(lt,{})," Next: ",t("strong",{children:D.meta.nextLecture})]}),r("span",{children:[t(En,{})," Assignments: ",r("strong",{children:[D.meta.completedAssignments,"/",D.meta.assignments.length]})," ","done"]})]}),r("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".3rem"},children:[t("span",{css:et(e),style:{margin:0},children:"Assignment timeline"}),r("strong",{children:[D.meta.progress,"%"]})]}),t("div",{css:t1(e),children:t("div",{css:n1(D.meta.progress)})}),r("div",{css:r1,children:[t("button",{type:"button",css:Il,onClick:()=>L(D),children:"View Course"}),t("button",{type:"button",css:Mr(e),onClick:()=>P(D),children:"Resources"}),t("button",{type:"button",css:Mr(e),onClick:()=>A(D),children:"Assignments"})]})]},D.id))]}),w?t("div",{css:ra,onClick:()=>P(null),children:r("div",{css:sa(e),onClick:D=>D.stopPropagation(),children:[r("div",{css:ia(e),children:[r("div",{children:[t("h3",{css:oa,children:"Course Resources"}),r("p",{css:aa(e),children:["Materials for ",w.course_name]})]}),t("button",{type:"button",css:ca(e),onClick:()=>P(null),children:t(Fe,{})})]}),r("div",{css:la,children:[B?t("p",{style:{color:"#dc2626",margin:"0 0 .75rem",fontSize:".9rem"},children:B}):null,F?t("p",{css:et(e),style:{margin:0},children:"Loading resources…"}):z.length===0?t("p",{css:et(e),style:{margin:0},children:"No files uploaded for this course yet."}):z.map(D=>r("div",{css:s1(e),children:[r("div",{style:{display:"flex",alignItems:"center",gap:".75rem",minWidth:0},children:[t("span",{style:{width:42,height:42,borderRadius:8,background:"#eef2ff",display:"inline-flex",alignItems:"center",justifyContent:"center",color:Ts,flexShrink:0},children:t(En,{})}),r("div",{style:{minWidth:0},children:[t("strong",{style:{wordBreak:"break-word"},children:D.original_filename}),r("p",{css:et(e),style:{margin:".1rem 0 0"},children:[Ol(D.file_size),D.created_at?` · ${new Date(D.created_at.replace(" ","T")).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}`:""]})]})]}),r("a",{href:G(D.id),css:Mr(e),style:{textDecoration:"none",flexShrink:0},children:[t(oo,{})," Download"]})]},D.id))]})]})}):null,x?t("div",{css:ra,onClick:()=>A(null),children:r("div",{css:sa(e),onClick:D=>D.stopPropagation(),children:[r("div",{css:ia(e),children:[r("div",{children:[t("h3",{css:oa,children:"Course Assignments"}),r("p",{css:aa(e),children:["Due dates for ",x.course_name]})]}),t("button",{type:"button",css:ca(e),onClick:()=>A(null),children:t(Fe,{})})]}),r("div",{css:la,children:[r("div",{css:mi(e),style:{marginBottom:"1rem"},children:[r("h4",{style:{margin:"0 0 0.35rem",fontSize:"1.1rem",fontWeight:800,display:"flex",alignItems:"center",gap:"0.45rem"},children:[t(wc,{"aria-hidden":!0}),"Demo assignment upload"]}),r("p",{css:et(e),style:{margin:"0 0 0.55rem"},children:["Pick the assignment, then upload a file. Your module leader sees ",t("strong",{children:"on-time"})," (before/on deadline), ",t("strong",{children:"late"})," (after), and ",t("strong",{children:"missing"})," (no file) on"," ",t("strong",{children:"Assignment submission trends"}),"."]}),t("label",{htmlFor:"demo-assignment-pick",css:et(e),style:{display:"block",margin:"0 0 0.35rem",fontWeight:700},children:"Which assignment is this file for?"}),t("select",{id:"demo-assignment-pick",value:C,onChange:D=>X(D.target.value),disabled:M||!((Se=x.meta.assignments)!=null&&Se.length),style:{width:"100%",maxWidth:"28rem",marginBottom:"0.55rem",padding:"0.45rem 0.5rem",borderRadius:8,fontSize:"0.9rem",fontWeight:600,border:e?"1px solid #4b5563":"1px solid #d1d5db",background:e?"#1f1f1f":"#fff",color:"inherit"},children:x.meta.assignments.map(D=>r("option",{value:String(D.id),children:[D.title," — due"," ",ai(D.due).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),D.dueTime?` · ${Xr(D.dueTime)}`:""]},D.id))}),t("input",{ref:J,type:"file",accept:".pdf,.doc,.docx,.ppt,.pptx,.txt,.zip,.png,.jpg,.jpeg",style:{display:"none"},onChange:D=>{var ge;const ae=(ge=D.target.files)==null?void 0:ge[0];ae&&me(ae)}}),t("button",{type:"button",css:Il,disabled:M||!C,onClick:()=>{var D;return(D=J.current)==null?void 0:D.click()},children:M?"Working…":"Choose file to upload"}),j?t("p",{css:et(e),style:{margin:"0.5rem 0 0"},children:j}):null,ue.length>0?r("div",{style:{marginTop:"0.65rem"},children:[t("p",{css:et(e),style:{margin:"0 0 0.35rem",fontWeight:700},children:"Your recent demo uploads"}),t("ul",{style:{margin:0,paddingLeft:"1.1rem",fontSize:"0.9rem"},children:ue.slice(0,8).map(D=>r("li",{css:et(e),children:[D.original_filename," ",r("span",{style:{opacity:.85},children:["(",Ol(D.file_size),D.uploaded_at?` · ${new Date(String(D.uploaded_at).replace(" ","T")).toLocaleString(void 0,{dateStyle:"short",timeStyle:"short"})}`:"",")"]})]},D.id))})]}):null]}),x.meta.assignments.length===0?t("p",{css:et(e),style:{margin:0},children:"No assignment due dates found for this course yet."}):x.meta.assignments.map((D,ae)=>r("div",{css:mi(e),children:[r("div",{style:{display:"flex",alignItems:"center",gap:".6rem",flexWrap:"wrap"},children:[t("h4",{style:{margin:0,fontSize:"1.5rem",fontWeight:800},children:D.title}),t("span",{css:Qr(e),style:{color:D.status==="Completed"?"#059669":D.status==="In Progress"?"#ca8a04":"#2563eb",borderColor:D.status==="Completed"?"#86efac":D.status==="In Progress"?"#fde68a":"#bfdbfe",background:D.status==="Completed"?"#ecfdf5":D.status==="In Progress"?"#fffbeb":"#eff6ff"},children:D.status})]}),t("p",{css:et(e),style:{marginTop:".3rem"},children:D.description}),r("p",{css:et(e),style:{marginTop:".15rem"},children:["Due: ",ai(D.due).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),D.dueTime?` · Time: ${Xr(D.dueTime)}`:""]})]},`${D.title}-${ae}`))]})]})}):null,_?t("div",{css:ra,onClick:()=>L(null),children:r("div",{css:sa(e),onClick:D=>D.stopPropagation(),children:[r("div",{css:ia(e),children:[r("div",{children:[t("h3",{css:oa,children:_.course_name}),r("p",{css:aa(e),children:[_.course_code," · ",Number(_.credits)||0," Credits · ",_.department||"General",t("br",{}),r("span",{style:{fontSize:"0.92rem"},children:["Intake ",Xt(_),_.semester?` · ${_.semester}`:"",_.course_study_year?` · ${Mt(_.course_study_year)}`:""]})]})]}),t("button",{type:"button",css:ca(e),onClick:()=>L(null),children:t(Fe,{})})]}),r("div",{css:la,children:[t("h4",{style:{margin:0,fontSize:"1.8rem"},children:"Overview"}),t("p",{css:et(e),children:_.meta.description}),r("p",{css:et(e),style:{marginTop:".35rem"},children:[t("strong",{children:"Instructor:"})," ",_.meta.instructor]}),t("h4",{style:{margin:"0.75rem 0 .45rem 0",fontSize:"1.8rem"},children:"Scheduled Sessions"}),t("div",{children:_.meta.classes.length===0?t("p",{css:et(e),style:{margin:0},children:"No scheduled classes found in timetable."}):_.meta.classes.map((D,ae)=>r("div",{style:{display:"grid",gridTemplateColumns:"28px 1fr",gap:".5rem",padding:".5rem .6rem",borderBottom:`1px solid ${e?"#303030":"#f3f4f6"}`},children:[r("strong",{style:{color:Ts},children:[ae+1,"."]}),r("span",{children:[ai(D.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})," ·"," ",Xr(D.start_time),"-",Xr(D.end_time),D.room_location?` · ${D.room_location}`:""]})]},`${D.id}-${ae}`))}),t("h4",{style:{margin:".8rem 0 .45rem 0",fontSize:"1.8rem"},children:"Course Information"}),r("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".8rem"},children:[r("div",{css:mi(e),children:[t("p",{css:et(e),style:{margin:0},children:"Enrolled students"}),t("strong",{children:_.meta.enrolled})]}),r("div",{css:mi(e),children:[t("p",{css:et(e),style:{margin:0},children:"Next session"}),t("strong",{children:_.meta.nextLecture})]})]})]})]})}):null]})}const da="/strack/".replace(/\/$/,""),Fl=er.length,d1=s`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,u1=s`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`,ua=e=>s`
  margin: 0.25rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
`,m1=s`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1rem 1.25rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,h1=e=>s`
  border: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#171717":"#fff"};
  padding: 1.35rem 1.4rem 1.25rem;
  min-height: 178px;
  display: flex;
  flex-direction: column;
`,f1=s`
  all: unset;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  min-height: 0;
`,p1=s`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.55rem;
  width: 100%;
`,g1=s`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,b1=s`
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;
  word-break: break-word;
`,ma=e=>s`
  margin: 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.88rem;
  line-height: 1.4;
  width: 100%;
  word-break: break-word;
`,y1=s`
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,w1=e=>s`
  font-size: 0.86rem;
  color: ${e?"#a5b4fc":"#4f46e5"};
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`,v1=s`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,x1=e=>s`
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  overflow: auto;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
`,S1=e=>s`
  padding: 0.9rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,$1=e=>s`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,C1=s`
  padding: 1rem;
  display: grid;
  gap: 1rem;
`,Ul=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.8rem;
`,Wl=s`
  margin: 0 0 0.55rem;
  font-weight: 700;
`,_1=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;
`,es=e=>s`
  border: 1px solid ${e?"#3f3f46":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.55rem 0.65rem;
`,ts=e=>s`
  margin: 0;
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,ns=s`
  margin: 0.2rem 0 0;
  font-weight: 700;
`,A1=s`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.55rem;
`,L1=(e,n)=>s`
  border: 1px dashed ${e?"#4b5563":"#d1d5db"};
  border-radius: 10px;
  padding: 0.55rem;
  opacity: ${n?1:.55};
  background: ${e?"#262626":"#fff"};
`;function N1(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);return n.length?n.length===1?n[0].slice(0,2).toUpperCase():`${n[0][0]}${n[n.length-1][0]}`.toUpperCase():"?"}function D1(e,n){const i=Number(e.pomodoro_sessions_count||0),o=new Map;for(const c of n||[])c.badge_id&&!o.has(c.badge_id)&&o.set(c.badge_id,c);return er.map(c=>o.has(c.id)?{id:c.id,name:c.name,icon:c.icon,unlocked:!0}:c.id==="pomodoro-focus"&&i>=Ro?{id:c.id,name:c.name,icon:c.icon,unlocked:!0}:{id:c.id,name:c.name,icon:c.icon,unlocked:!1})}function Hl(e,n,i){if(!i)return[];const o=n.filter(l=>Array.isArray(l.student_ids)&&l.student_ids.map(Number).includes(Number(i.id))).map(l=>Number(l.id)),c=new Map;return o.length>0?n.forEach(l=>{o.includes(Number(l.id))&&(l.students||[]).forEach(u=>{if(Number(u.id)!==Number(i.id))if(c.has(Number(u.id))){const p=c.get(Number(u.id));p&&!p.sharedCourses.includes(l.course_code)&&p.sharedCourses.push(l.course_code)}else{const p=e.find(b=>Number(b.id)===Number(u.id));p&&c.set(Number(u.id),{...p,sharedCourses:[l.course_code]})}})}):e.filter(l=>Number(l.id)!==Number(i.id)&&(l.department||"")===(i.department||"")).forEach(l=>{c.set(Number(l.id),{...l,sharedCourses:[]})}),Array.from(c.values()).sort((l,u)=>String(l.full_name||"").localeCompare(String(u.full_name||"")))}function z1({darkMode:e,userEmail:n,studentId:i,studentDatabaseId:o}){const[c,l]=a.useState([]),[u,p]=a.useState([]),[b,v]=a.useState(!0),[g,y]=a.useState(null),[w,P]=a.useState({}),[x,A]=a.useState("idle");a.useEffect(()=>{let z=!0;async function W(){v(!0);try{const[F,V]=await Promise.all([fetch(`${da}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${da}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),[B,R]=await Promise.all([F.json(),V.json()]);if(!z)return;l(B.success?B.students||[]:[]),p(R.success?R.courses||[]:[])}catch{if(!z)return;l([]),p([])}finally{z&&v(!1)}}return W(),()=>{z=!1}},[]);const _=a.useMemo(()=>cr(c,{userEmail:n,studentId:i,studentDatabaseId:o}),[c,n,i,o]);a.useEffect(()=>{if(b||!_){P({}),A("idle");return}const z=Hl(c,u,_);if(z.length===0){P({}),A("ready");return}let W=!0;return A("loading"),P({}),(async()=>{const F=await Promise.all(z.map(async B=>{const R=String(B.email||"").trim();if(!R)return{id:B.id,awards:[]};try{const H=await(await fetch(`${da}/backend/student_badges.php?user_email=${encodeURIComponent(R)}&t=${Date.now()}`,{cache:"no-store"})).json().catch(()=>({}));return{id:B.id,awards:H.success&&Array.isArray(H.awards)?H.awards:[]}}catch{return{id:B.id,awards:[]}}}));if(!W)return;const V={};for(const B of F)V[B.id]={awards:B.awards};P(V),A("ready")})(),()=>{W=!1}},[b,c,u,_]);const L=a.useMemo(()=>{if(!_)return[];const z=x==="loading";return Hl(c,u,_).map(W=>{var q;const F=z?[]:((q=w[W.id])==null?void 0:q.awards)??[],V=D1(W,F),B=Number(W.pomodoro_sessions_count||0),R=z?null:Hm(F,B);return{...W,badges:V,unlockedCount:R,badgesCountPending:z}})},[c,u,_,w,x]);return r("div",{css:d1,children:[t("h1",{css:u1,children:"Classmates"}),t("p",{css:ua(e),children:"See students in your shared classes and view their profile details."}),b?t("p",{css:ua(e),children:"Loading classmates..."}):null,!b&&L.length===0?t("p",{css:ua(e),children:"No classmates found yet."}):null,t("div",{css:m1,children:L.map(z=>t("article",{css:h1(e),children:r("button",{type:"button",css:f1,onClick:()=>y(z),children:[r("div",{css:p1,children:[t("div",{css:g1,"aria-hidden":!0,children:N1(z.full_name)}),t("p",{css:b1,children:z.full_name}),t("p",{css:ma(e),children:z.email||"No Gmail available"})]}),t("div",{css:y1,children:r("span",{css:w1(e),children:[t(ar,{}),z.badgesCountPending?`… / ${Fl}`:`${z.unlockedCount??0}/${Fl} badges`]})})]})},z.id))}),g?t("div",{css:v1,onClick:()=>y(null),children:r("div",{css:x1(e),onClick:z=>z.stopPropagation(),children:[r("header",{css:S1(e),children:[r("div",{css:s`display:flex; gap:.65rem; align-items:center;`,children:[t("div",{css:s`width:42px;height:42px;border-radius:50%;background:#eef2ff;color:#4f46e5;display:flex;align-items:center;justify-content:center;`,children:t(Pc,{style:{width:24,height:24}})}),r("div",{children:[t("h3",{css:s`margin:0;font-size:1.2rem;`,children:g.full_name}),r("p",{css:ma(e),children:[g.student_id||"Student"," · ",g.email]})]})]}),t("button",{type:"button",css:$1(e),onClick:()=>y(null),"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:C1,children:[r("section",{css:Ul(e),children:[t("h4",{css:Wl,children:"Student Details"}),r("div",{css:_1,children:[r("div",{css:es(e),children:[t("p",{css:ts(e),children:"Email"}),t("p",{css:ns,children:g.email||"N/A"})]}),r("div",{css:es(e),children:[t("p",{css:ts(e),children:"Department"}),t("p",{css:ns,children:g.department||"N/A"})]}),r("div",{css:es(e),children:[t("p",{css:ts(e),children:"Degree"}),t("p",{css:ns,children:g.degree||"N/A"})]}),r("div",{css:es(e),children:[t("p",{css:ts(e),children:"Year"}),t("p",{css:ns,children:g.year||"N/A"})]}),r("div",{css:es(e),children:[t("p",{css:ts(e),children:"Class Of"}),t("p",{css:ns,children:g.class_of||"N/A"})]})]})]}),r("section",{css:Ul(e),children:[t("h4",{css:Wl,children:"Badges"}),t("div",{css:A1,children:(g.badges||[]).map(z=>r("div",{css:L1(e,z.unlocked),children:[t("div",{css:s`font-size:1.4rem;`,children:z.icon}),t("div",{css:s`font-weight:700;margin-top:.15rem;`,children:z.name}),t("div",{css:ma(e),children:z.unlocked?"Unlocked":"Locked"})]},z.id))})]})]})]})}):null]})}const T1="/strack/".replace(/\/$/,""),lo="#6366f1";function E1(e){const n=Number(e);return Number.isFinite(n)?String(Math.round(Math.min(100,Math.max(0,n)))):"0"}const j1=s`
  width: 100%;
  max-width: 100%;
`,R1=s`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
`,fr=e=>s`
  margin: 0.35rem 0 0;
  font-size: 0.95rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.45;
`,P1=e=>s`
  height: 1px;
  background: ${e?"#404040":"#e5e7eb"};
  margin: 1rem 0 1.1rem;
  border: none;
`,B1=e=>s`
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
  padding: 0.2rem;
  border-radius: 10px;
  background: ${e?"#1f1f1f":"#f3f4f6"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
`,Yl=(e,n)=>s`
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 0.55rem 0.75rem;
  font-size: 0.88rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${n?e?"#4f46e5":lo:"transparent"};
  color: ${n?"#fff":e?"#d1d5db":"#374151"};
  &:hover {
    color: ${n?"#fff":lo};
  }
`,O1=e=>s`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 1rem 0.85rem;
  box-shadow: ${e?"none":"0 1px 2px rgba(0,0,0,0.04)"};
`,I1=s`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.85rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: inherit;
`,k1=s`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-bottom: 0.35rem;
`,F1=(e,n,i)=>s`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.95rem;
  flex-shrink: 0;
  background: ${n===1?e?"rgba(251, 146, 60, 0.2)":"#ffedd5":i?e?"rgba(99, 102, 241, 0.25)":"#e0e7ff":e?"#374151":"#f3f4f6"};
  color: ${n===1?"#c2410c":i?lo:e?"#d1d5db":"#4b5563"};
  border: 1px solid
    ${n===1?e?"rgba(251, 146, 60, 0.45)":"#fed7aa":i?e?"rgba(99,102,241,0.5)":"#c7d2fe":e?"#4b5563":"#e5e7eb"};
`,U1=(e,n)=>s`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 0.95rem;
  border-radius: 12px;
  border: 1px solid ${n?e?"rgba(129, 140, 248, 0.55)":"#c4b5fd":e?"#404040":"#e5e7eb"};
  background: ${n?e?"rgba(99, 102, 241, 0.12)":"#f5f3ff":e?"#1f1f1f":"#fafafa"};
`,W1=s`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0;
  min-height: 44px;
`,hi=s`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,H1=s`
  flex: 1;
  min-width: 0;
`,Y1=s`
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
`,K1=e=>s`
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,V1=s`
  text-align: right;
  flex-shrink: 0;
`,G1=s`
  margin: 0;
  font-weight: 800;
  font-size: 1.05rem;
  line-height: 1.1;
`,J1=e=>s`
  margin: 0.1rem 0 0;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-weight: 500;
`,Z1=e=>s`
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
`;function q1({rank:e}){return e===1?t("span",{css:hi,title:"1st place","aria-hidden":!0,style:{fontSize:"1.2rem",lineHeight:1},children:"👑"}):e===2?t("span",{css:hi,title:"2nd place","aria-hidden":!0,style:{color:"#6b7280"},children:t(or,{style:{width:24,height:24,strokeWidth:2}})}):e===3?t("span",{css:hi,title:"3rd place","aria-hidden":!0,style:{color:"#2563eb"},children:t(ar,{style:{width:24,height:24,strokeWidth:2}})}):t("span",{css:hi,"aria-hidden":!0})}function X1({darkMode:e,userEmail:n}){const[i,o]=a.useState("public"),[c,l]=a.useState([]),[u,p]=a.useState(!0),[b,v]=a.useState(""),[g,y]=a.useState(""),w=a.useCallback(async()=>{p(!0),v(""),y("");try{const A=new URLSearchParams;A.set("scope",i),n&&A.set("viewer_email",n);const L=await(await fetch(`${T1}/backend/leaderboard.php?${A.toString()}`,{cache:"no-store"})).json();L.success&&Array.isArray(L.entries)?(l(L.entries),typeof L.message=="string"&&L.message&&y(L.message)):(l([]),v(L.error||"Could not load leaderboard"))}catch{l([]),v("Network error")}finally{p(!1)}},[i,n]);a.useEffect(()=>{w()},[w]);const P=a.useMemo(()=>c.some(A=>A.is_me),[c]),x=i==="public"?"University rankings":"Your class cohort";return r("div",{css:j1,children:[t("h1",{css:R1,children:"Anonymous Leaderboard"}),t("p",{css:fr(e),children:"Names are hidden. Compare points with everyone, or with students on the same degree, year, and class of."}),t("hr",{css:P1(e)}),r("div",{css:B1(e),role:"tablist","aria-label":"Leaderboard scope",children:[t("button",{type:"button",role:"tab","aria-selected":i==="public",css:Yl(e,i==="public"),onClick:()=>o("public"),children:"Public"}),t("button",{type:"button",role:"tab","aria-selected":i==="my_class",css:Yl(e,i==="my_class"),onClick:()=>o("my_class"),children:"My class"})]}),r("section",{css:O1(e),children:[r("h2",{css:I1,children:[t(or,{style:{width:22,height:22,color:lo,flexShrink:0},"aria-hidden":!0}),x]}),u?t("p",{css:fr(e),style:{marginBottom:"1rem"},children:"Loading…"}):b?t("p",{css:fr(e),style:{marginBottom:"1rem",color:"#dc2626"},children:b}):c.length===0?t("p",{css:fr(e),style:{marginBottom:"1rem"},children:g||"No students to show yet."}):t("div",{css:k1,children:c.map((A,_)=>{const L=E1(A.attendance),z=!!A.is_me,W=A.label||`Student #${A.rank}`;return r("div",{css:U1(e,z),children:[t("div",{css:F1(e,A.rank,z),children:A.rank}),t(q1,{rank:A.rank}),r("div",{css:H1,children:[t("p",{css:Y1,children:W}),r("p",{css:K1(e),children:[L,"% attendance"]})]}),r("div",{css:W1,children:[z?t("span",{css:Z1(e),"aria-label":"Your rank",children:"You"}):null,r("div",{css:V1,children:[t("p",{css:G1,children:A.points}),t("p",{css:J1(e),children:"points"})]})]})]},`${i}-${A.rank}-${_}-${A.points}`)})})]}),!u&&!b&&n&&!P&&i==="public"&&c.length>0?t("p",{css:fr(e),style:{marginTop:"0.85rem",fontSize:"0.88rem"},children:"Sign in with a student email that exists in the database to highlight your row."}):null,!u&&!b&&n&&!P&&i==="my_class"&&c.length>0?t("p",{css:fr(e),style:{marginTop:"0.85rem",fontSize:"0.88rem"},children:"We could not match your row. Check your degree, year, and class of on your student record."}):null]})}const fi="/strack/".replace(/\/$/,""),Q1=[{id:"like",emoji:"👍"},{id:"love",emoji:"❤️"},{id:"celebrate",emoji:"🎉"},{id:"idea",emoji:"💡"},{id:"fire",emoji:"🔥"}],M1=s`
  display: grid;
  gap: 1.12rem;
`,eb=s`
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.55rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
`,tb=e=>s`
  margin: 0.3rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 1rem;
`,nb=e=>s`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
  border-radius: 12px;
  padding: 1.1rem 1rem;
`,rb=s`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
`,sb=e=>s`
  width: min(320px, 100%);
  border: 1px solid ${e?"#3f3f46":"#d1d5db"};
  background: ${e?"#09090b":"#fff"};
  color: inherit;
  border-radius: 9px;
  padding: 0.53rem 0.68rem;
  font-size: 0.92rem;
`,ib=e=>s`
  background: ${e?"#171717":"#fff"};
  border: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
  border-radius: 12px;
  padding: 1.18rem 1.2rem 1.08rem;
`,ob=s`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`,ab=s`
  display: inline-flex;
  gap: 0.58rem;
  align-items: center;
`,cb=s`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
`,lb=s`
  display: grid;
  gap: 0.16rem;
`,db=s`
  font-weight: 700;
  font-size: 0.92rem;
`,ub=e=>s`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,mb=s`
  margin: 0.72rem 0 0.56rem;
  font-size: clamp(1.75rem, 2.6vw, 2.2rem);
  line-height: 1.15;
  letter-spacing: -0.018em;
`,hb=e=>s`
  margin: 0 0 0.75rem;
  color: ${e?"#d1d5db":"#374151"};
  white-space: pre-wrap;
  font-size: 1.02rem;
  line-height: 1.5;
`,fb=s`
  display: flex;
  gap: 0.35rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.7rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
`,pb=(e,n)=>s`
  border: 1px solid ${n?"#6366f1":e?"#3f3f46":"#e5e7eb"};
  background: ${n?e?"rgba(99,102,241,0.2)":"#eef2ff":"transparent"};
  color: inherit;
  border-radius: 8px;
  font-size: 0.86rem;
  padding: 0.28rem 0.5rem;
  cursor: pointer;
`,gb=e=>s`
  margin-top: 0.65rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.86rem;

  svg {
    width: 0.92rem;
    height: 0.92rem;
  }
`,bb=s`
  margin-top: 0.62rem;
  display: grid;
  gap: 0.52rem;
`,yb=e=>s`
  border: 1px solid ${e?"#3f3f46":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.56rem 0.68rem;
`,wb=s`
  display: inline-flex;
  align-items: center;
  gap: 0.36rem;
`,vb=s`
  width: 1.05rem;
  height: 1.05rem;
  color: #6b7280;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`,xb=s`
  font-size: 0.83rem;
  font-weight: 700;
`,Sb=e=>s`
  font-size: 0.77rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,$b=e=>s`
  margin-top: 0.35rem;
  white-space: pre-wrap;
  color: ${e?"#d1d5db":"#374151"};
  font-size: 0.9rem;
  line-height: 1.45;
`,Cb=s`
  margin-top: 0.62rem;
  display: flex;
  gap: 0.5rem;
`,_b=e=>s`
  flex: 1;
  border: 1px solid ${e?"#3f3f46":"#d1d5db"};
  border-radius: 9px;
  padding: 0.52rem 0.68rem;
  background: ${e?"#09090b":"#fff"};
  color: inherit;
  font-size: 0.9rem;
`,Ab=s`
  border: none;
  border-radius: 9px;
  background: #6366f1;
  color: #fff;
  font-weight: 600;
  padding: 0.52rem 0.82rem;
  font-size: 0.88rem;
  cursor: pointer;
`,ha=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
`;function Kl(e){if(!e)return"";const n=new Date(e);return Number.isNaN(n.getTime())?String(e):n.toLocaleString([],{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}function Lb(e){const n=String(e).trim().split(/\s+/).filter(Boolean);return n.length===0?"?":n.length===1?n[0].slice(0,2).toUpperCase():`${n[0][0]}${n[n.length-1][0]}`.toUpperCase()}function Nb({darkMode:e,userEmail:n}){const[i,o]=a.useState(!1),[c,l]=a.useState(""),[u,p]=a.useState([]),[b,v]=a.useState([]),[g,y]=a.useState(""),[w,P]=a.useState({}),[x,A]=a.useState(0),_=a.useMemo(()=>String(n||"").trim()!=="",[n]),L=a.useCallback(async()=>{if(_){o(!0),l("");try{const F=new URLSearchParams({user_email:n});g&&F.set("course_id",g);const B=await(await fetch(`${fi}/backend/announcements.php?${F.toString()}`,{cache:"no-store"})).json();if(!(B!=null&&B.success))throw new Error((B==null?void 0:B.error)||"Failed to load announcements");p(Array.isArray(B.available_courses)?B.available_courses:[]),v(Array.isArray(B.announcements)?B.announcements:[])}catch(F){l(F instanceof Error?F.message:"Failed to load announcements")}finally{o(!1)}}},[_,n,g]);a.useEffect(()=>{L()},[L]);const z=async(F,V,B)=>{if(_){A(F);try{const R={user_email:n,announcement_id:F};V===B?await fetch(`${fi}/backend/announcement_reactions.php`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)}):await fetch(`${fi}/backend/announcement_reactions.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...R,reaction_type:V})}),await L()}catch{l("Could not update your reaction. Please try again.")}finally{A(0)}}},W=async F=>{const V=String(w[F]||"").trim();if(!(!V||!_)){A(F);try{const R=await(await fetch(`${fi}/backend/announcement_comments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:n,announcement_id:F,comment_text:V})})).json();if(!(R!=null&&R.success))throw new Error((R==null?void 0:R.error)||"Unable to post comment");P(q=>({...q,[F]:""})),await L()}catch{l("Could not post your comment. Please try again.")}finally{A(0)}}};return r("section",{css:M1,children:[r("header",{children:[t("h1",{css:eb,children:"Class Announcements"}),t("p",{css:tb(e),children:"Stay updated with your course announcements"})]}),r("div",{css:nb(e),children:[t("label",{css:rb,htmlFor:"student-ann-course",children:"Filter by course:"}),r("select",{id:"student-ann-course",css:sb(e),value:g,onChange:F=>y(F.target.value),children:[t("option",{value:"",children:"All Courses"}),u.map(F=>r("option",{value:F.id,children:[F.course_code," ",F.course_name?`- ${F.course_name}`:""]},F.id))]})]}),c?t("p",{css:ha(e),children:c}):null,i?t("p",{css:ha(e),children:"Loading announcements..."}):null,!i&&b.length===0?t("p",{css:ha(e),children:"No announcements available yet."}):null,b.map(F=>{const V=F.my_reaction||"",B=F.reaction_counts||{},R=Array.isArray(F.comments)?F.comments:[];return r("article",{css:ib(e),children:[t("div",{css:ob,children:r("div",{css:ab,children:[t("div",{css:cb,children:Lb(F.lecturer_name||"Lecturer")}),r("div",{css:lb,children:[t("div",{css:db,children:F.lecturer_name||"Lecturer"}),t("div",{css:ub(e),children:(F.course_code||"General")+" · "+Kl(F.created_at)})]})]})}),t("h2",{css:mb,children:F.title}),t("p",{css:hb(e),children:F.content}),t("div",{css:fb,children:Q1.map(q=>{const H=Number(B[q.id]||0),Q=V===q.id;return r("button",{type:"button",css:pb(e,Q),onClick:()=>z(F.id,q.id,V),disabled:x===F.id,children:[q.emoji," ",H>0?H:""]},q.id)})}),r("div",{css:gb(e),children:[t(ap,{}),F.comment_count||0," comments"]}),r("div",{css:bb,children:[R.map(q=>r("div",{css:yb(e),children:[r("div",{css:wb,children:[t("span",{css:vb,children:t(Pc,{})}),t("span",{css:xb,children:q.student_name}),t("span",{css:Sb(e),children:Kl(q.created_at)})]}),t("div",{css:$b(e),children:q.comment_text})]},q.id)),r("div",{css:Cb,children:[t("input",{css:_b(e),placeholder:"Write a comment...",value:w[F.id]||"",onChange:q=>P(H=>({...H,[F.id]:q.target.value})),maxLength:1e3}),t("button",{type:"button",css:Ab,disabled:x===F.id,onClick:()=>W(F.id),children:"Post"})]})]})]},F.id)})]})}const On="/strack/".replace(/\/$/,""),to="#6366f1",Vl="#22c55e",Gl=["#a78bfa","#60a5fa","#ec4899","#34d399","#fbbf24","#38bdf8","#fb923c"],Db={Present:"#22c55e",Late:"#eab308",Absent:"#ef4444"},fa=40,zb=[e=>Number(e.attendance||0)>=95,e=>Number(e.gpa||0)>=3.7,e=>Number(e.points||0)>=500,e=>Number(e.gpa||0)>=3.3,e=>Number(e.points||0)>=250,e=>Number(e.points||0)>=900,e=>Number(e.pomodoro_sessions_count||0)>=10],Tb=s`
  width: 100%;
`,Eb=s`
  margin: 0;
  font-size: clamp(1.35rem, 2.3vw, 1.85rem);
  line-height: 1.15;
  font-weight: 800;
`,jb=e=>s`
  margin: 0.25rem 0 1rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.95rem;
`,Rb=s`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
  margin-bottom: 0.9rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,pi=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  background: ${e?"#262626":"#fff"};
  padding: 0.95rem;
`,gi=e=>s`
  margin: 0;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,bi=s`
  margin: 0.55rem 0 0.15rem;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 800;
`,yi=e=>s`
  margin: 0;
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Pb=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,Jl=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 0.95rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,wi=s`
  width: 100%;
  min-height: 260px;
`,Bb=s`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(3px);
`,Ob=e=>s`
  width: 100%;
  max-width: 22rem;
  max-height: min(85vh, 28rem);
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  border: 1px solid ${e?"#525252":"#e5e7eb"};
  background: ${e?"#262626":"#f3f4f6"};
  box-shadow: ${e?"0 24px 48px rgba(0,0,0,0.55)":"0 20px 40px rgba(0,0,0,0.12)"};
  overflow: hidden;
`,Ib=e=>s`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1rem 0.65rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
`,kb=e=>s`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
`,Fb=e=>s`
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.35;
`,Ub=e=>s`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: ${e?"#404040":"#e5e7eb"};
  color: ${e?"#f9fafb":"#111827"};

  &:hover {
    background: ${e?"#525252":"#d1d5db"};
  }
`,Wb=s`
  padding: 0.85rem 1rem 1rem;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,Hb=e=>s`
  margin: 0 0 0.75rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${e?"#d1d5db":"#374151"};
`,Yb=s`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.42rem 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Kb=e=>s`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .recharts-responsive-container {
    width: 100% !important;
    max-width: ${e<=1?"min(100%, 22rem)":e<=2?"min(100%, 32rem)":e<=4?"min(100%, 48rem)":"100%"};
  }
`,Zl=e=>s`
  margin: -0.15rem 0 0.75rem;
  padding: 0.65rem 0.7rem;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#f9fafb"};
`,ql=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,vi=e=>s`
  width: 100%;
  margin-top: 0.35rem;
  border-radius: 10px;
  border: 1px solid ${e?"#525252":"#d1d5db"};
  background: ${e?"#262626":"#fff"};
  color: ${e?"#e5e7eb":"#111827"};
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 0.6rem;
  font-family: inherit;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px ${e?"rgba(99, 102, 241, 0.35)":"rgba(99, 102, 241, 0.22)"};
  }
`,Vb=e=>s`
  margin-bottom: 0.75rem;
  padding: 0.65rem 0.7rem;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#f9fafb"};
`,rs=e=>s`
  margin: 0 0 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${e?"#9ca3af":"#6b7280"};
`,Gb=s`
  position: relative;
  width: 100%;
`,Jb=(e,n)=>s`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-align: left;
  border-radius: 10px;
  border: 1px solid ${n?"#6366f1":e?"#525252":"#d1d5db"};
  background: ${e?"#262626":"#fff"};
  color: ${e?"#e5e7eb":"#111827"};
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.52rem 0.65rem;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: ${n?`0 0 0 2px ${e?"rgba(99, 102, 241, 0.35)":"rgba(99, 102, 241, 0.22)"}`:"none"};

  &:hover {
    border-color: #6366f1;
  }
`,Zb=e=>s`
  flex-shrink: 0;
  width: 1.15rem;
  height: 1.15rem;
  transition: transform 0.15s ease;
  transform: ${e?"rotate(180deg)":"none"};
  opacity: 0.75;
`,qb=e=>s`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 0.35rem);
  z-index: 40;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#262626":"#fff"};
  box-shadow: ${e?"0 12px 32px rgba(0,0,0,0.45)":"0 10px 28px rgba(0,0,0,0.1)"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: min(22rem, 70vh);
`,Xb=e=>s`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.55rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#f9fafb"};
`,Qb=e=>s`
  flex: 1;
  min-width: 0;
  border: 1px solid ${e?"#525252":"#d1d5db"};
  border-radius: 8px;
  padding: 0.38rem 0.5rem;
  font-size: 0.84rem;
  font-family: inherit;
  background: ${e?"#262626":"#fff"};
  color: ${e?"#e5e7eb":"#111827"};
  outline: none;

  &:focus {
    border-color: #6366f1;
  }
`,Mb=e=>s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.85rem;
  padding: 0.45rem 0.55rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  font-size: 0.78rem;
`,e5=e=>s`
  overflow-y: auto;
  max-height: 14rem;
  padding: 0.25rem 0.35rem 0.45rem;
  scrollbar-width: thin;
  scrollbar-color: ${e?"#525252 transparent":"#d1d5db transparent"};
`,t5=e=>s`
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  padding: 0.38rem 0.45rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.84rem;
  color: ${e?"#e5e7eb":"#111827"};

  &:hover {
    background: ${e?"rgba(99,102,241,0.12)":"#f3f4f6"};
  }

  input {
    margin-top: 0.15rem;
    accent-color: #6366f1;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }
`,n5=e=>s`
  display: block;
  font-size: 0.72rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-weight: 500;
  margin-top: 0.08rem;
`,r5=s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.45rem;
`,s5=e=>s`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  max-width: 100%;
  padding: 0.22rem 0.4rem 0.22rem 0.5rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  border: 1px solid ${e?"#6366f1":"#c7d2fe"};
  background: ${e?"rgba(99, 102, 241, 0.2)":"#eef2ff"};
  color: ${e?"#e0e7ff":"#3730a3"};
`,i5=e=>s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0.1rem;
  margin: 0;
  cursor: pointer;
  border-radius: 4px;
  color: inherit;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    background: ${e?"rgba(0,0,0,0.2)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 0.85rem;
    height: 0.85rem;
  }
`,xi=e=>s`
  border: none;
  background: transparent;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${e?"#a5b4fc":"#4f46e5"};
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
`,$n=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  background: ${e?"#262626":"#fff"};
  padding: 0.95rem;
`,Cn=s`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
`,_n=e=>s`
  margin: 0;
  font-size: 1.02rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
  display: inline-flex;
  gap: 0.4rem;
  align-items: center;

  svg {
    width: 1.05rem;
    height: 1.05rem;
    color: #6366f1;
  }
`,o5=e=>s`
  border: none;
  background: transparent;
  color: ${e?"#d1d5db":"#374151"};
  font-size: 0.86rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  padding: 0;
`,qe=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
`,a5=s`
  display: flex;
  align-items: center;
  gap: 0.58rem;
`,c5=s`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.73rem;
  font-weight: 700;
  flex-shrink: 0;
`,l5=s`
  margin: 0.55rem 0 0.45rem;
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.18;
`,d5=e=>s`
  margin: 0 0 0.5rem;
  color: ${e?"#d1d5db":"#374151"};
  line-height: 1.45;
`,u5=(e,n)=>s`
  padding-bottom: 0.9rem;
  margin-bottom: 0.9rem;
  border-bottom: ${n?"none":`1px solid ${e?"#404040":"#e5e7eb"}`};
`,an=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.84rem;
`,m5=s`
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
`,h5=e=>s`
  margin: 0.18rem 0 0.25rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
`,f5=s`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`,p5=s`
  margin: 0;
  font-size: 1.45rem;
  font-weight: 800;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,g5=s`
  display: inline-flex;
  gap: 0.65rem;
  font-size: 0.82rem;
  margin-bottom: 0.2rem;
`,b5=e=>s`
  height: 8px;
  border-radius: 999px;
  background: ${e?"#404040":"#e5e7eb"};
  overflow: hidden;
`,y5=e=>s`
  height: 100%;
  width: ${Math.max(0,Math.min(100,e))}%;
  background: ${to};
`,w5=(e,n)=>s`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  overflow-y: ${n?"scroll":"auto"};
  overflow-x: hidden;
  padding-right: 0.2rem;
  margin-right: -0.1rem;
  scrollbar-width: thin;
  scrollbar-color: ${e?"#737373 #2a2a2a":"#c4c4c4 #f3f4f6"};
  scrollbar-gutter: ${n?"stable":"auto"};
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${e?"#2a2a2a":"#f3f4f6"};
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e?"#737373":"#c4c4c4"};
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,Xl=e=>s`
  max-height: min(22rem, 52vh);
  overflow-y: auto;
  padding-right: 0.25rem;
  margin-right: -0.05rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  scrollbar-width: thin;
  scrollbar-color: ${e?"#525252 transparent":"#d1d5db transparent"};

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e?"#525252":"#d1d5db"};
    border-radius: 999px;
  }
`,v5=(e,n)=>s`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  overflow-y: ${n?"scroll":"auto"};
  overflow-x: hidden;
  padding-right: 0.25rem;
  margin-right: -0.05rem;
  scrollbar-width: thin;
  scrollbar-color: ${e?"#737373 #2a2a2a":"#c4c4c4 #f3f4f6"};
  scrollbar-gutter: ${n?"stable":"auto"};
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${e?"#2a2a2a":"#f3f4f6"};
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e?"#737373":"#c4c4c4"};
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,x5=s`
  border-radius: 8px;
  background: #6366f1;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.08rem 0.38rem;
  flex-shrink: 0;
`,S5=s`
  border-radius: 8px;
  background: #7c3aed;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.08rem 0.38rem;
  flex-shrink: 0;
`,Ql=e=>s`
  border: 1px solid ${e?"#4c1d95":"#c7d2fe"};
  background: ${e?"rgba(99, 102, 241, 0.18)":"#eef2ff"};
  border-radius: 10px;
  padding: 0.8rem;
`,Ml=s`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.45rem;
`,$5=s`
  border-radius: 8px;
  background: #6366f1;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.1rem 0.42rem;
`,ed=s`
  margin: 0 0 0.25rem;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.18;
`,C5=e=>s`
  border: 1px solid ${e?"#4b5563":"#f3e8b2"};
  background: ${e?"#3f3a26":"#fffde7"};
  border-radius: 10px;
  padding: 0.75rem;
  margin-bottom: 0;
`,_5=s`
  display: inline-flex;
  gap: 0.45rem;
  align-items: center;
  margin-bottom: 0.3rem;
`,A5=s`
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.06);
  padding: 0.08rem 0.38rem;
  font-size: 0.78rem;
  font-weight: 700;
`,L5=s`
  margin: 0;
  font-size: 1.38rem;
  line-height: 1.2;
  font-weight: 800;
`,N5=s`
  margin-top: 0.28rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`;function td(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function Si(e){if(!e)return"";const[n,i]=String(e).split(":").map(Number),o=(n+11)%12+1,c=n>=12?"PM":"AM";return`${o}:${String(i||0).padStart(2,"0")} ${c}`}function D5(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);return n.length?n.length===1?n[0].slice(0,2).toUpperCase():`${n[0][0]}${n[n.length-1][0]}`.toUpperCase():"S"}function z5(e){if(!e)return"";const n=new Date(e);return Number.isNaN(n.getTime())?String(e):n.toLocaleString([],{month:"numeric",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}function T5(e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),o=new Date(`${e}T00:00:00`).getTime();return Math.ceil((o-i)/(24*60*60*1e3))}function E5(e){return/^Assignment Due:/i.test(String((e==null?void 0:e.event_title)||"").trim())}function pa(e){if(!e)return"";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?String(e):n.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"})}function j5(e){if(!e||typeof e!="object")return null;const i=[e.payload,e].filter(o=>o&&typeof o=="object");for(const o of i){const c=Number(o.courseId??o.course_id);if(Number.isFinite(c)&&c>0)return o}for(const o of i)if(o.label!=null&&String(o.label).trim()!=="")return o;return null}function nd(e,n){if(!e||typeof e!="object"||Array.isArray(e))return[];const i=Number(n);if(!Number.isFinite(i)||i<=0)return[];const o=e[i]??e[String(i)];if(Array.isArray(o))return o;for(const[c,l]of Object.entries(e))if(Number(c)===i&&Array.isArray(l))return l;return[]}function R5(e,n,i){if(!e||Number.isNaN(e.getTime()))return!1;const o=Number(n),c=Number(i);if(!Number.isFinite(o)||!Number.isFinite(c)||c<1||c>12)return!1;const l=new Date(o,c-1,1,0,0,0,0).getTime(),u=new Date(o,c,1,0,0,0,0).getTime(),p=e.getTime();return p>=l&&p<u}const P5=[{value:1,label:"January"},{value:2,label:"February"},{value:3,label:"March"},{value:4,label:"April"},{value:5,label:"May"},{value:6,label:"June"},{value:7,label:"July"},{value:8,label:"August"},{value:9,label:"September"},{value:10,label:"October"},{value:11,label:"November"},{value:12,label:"December"}];function B5(e){if(!e||typeof e!="object")return null;const n=new Date(e.completed_at);if(Number.isNaN(n.getTime()))return null;const i=Number(e.duration_minutes??25);return{at:n,courseCode:String(e.course_code??""),durationMinutes:Number.isFinite(i)&&i>0?Math.min(240,i):25}}function rd(e){const n=Math.max(0,Math.ceil(Number(e)||0));let i=n<=0?60:Math.ceil(n*1.08);i=Math.max(30,Math.min(i,24*60)),i=Math.ceil(i/15)*15;const o=i<=90?15:i<=180?30:60,c=[];for(let l=0;l<=i;l+=o)c.push(l);return c}function O5(e){const n=Or.map(o=>o.value).filter(Boolean),i=o=>{const c=n.indexOf(String(o));return c===-1?999:c};return[...e].sort((o,c)=>i(o)-i(c)||String(o).localeCompare(String(c)))}function I5(e){const n=String(e??"").trim();if(!n)return"";const i=Gs.find(o=>o.value===n);return i&&i.value?i.label:n}function k5({darkMode:e,userEmail:n,studentId:i,studentDatabaseId:o,userName:c,userPoints:l,onOpenAnnouncements:u}){const[p,b]=a.useState([]),[v,g]=a.useState([]),[y,w]=a.useState([]),[P,x]=a.useState([]),[A,_]=a.useState([]),[L,z]=a.useState({present:0,late:0,absent:0}),[W,F]=a.useState([]),[V,B]=a.useState({}),[R,q]=a.useState(null),[H,Q]=a.useState(""),[ce,oe]=a.useState(""),[ie,ue]=a.useState(()=>new Date().getFullYear()),[N,M]=a.useState(()=>new Date().getMonth()+1),[ee,j]=a.useState(null),[E,C]=a.useState(!1),[X,J]=a.useState(""),G=a.useRef(null),[me,ye]=a.useState(!0),[he,ze]=a.useState([]);a.useEffect(()=>{if(!n)return;let f=!0;async function U(){ye(!0);try{const Z=new Date,de=new Date(Z);de.setMonth(Z.getMonth()-2);const Le=new Date(Z);Le.setMonth(Z.getMonth()+2);const[Ne,je,Ve,mt,vt,Qe,Pn]=await Promise.all([fetch(`${On}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${On}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${On}/backend/timetable.php?from=${encodeURIComponent(td(de))}&to=${encodeURIComponent(td(Le))}&t=${Date.now()}`,{cache:"no-store"}),fetch(`${On}/backend/announcements.php?user_email=${encodeURIComponent(n)}&t=${Date.now()}`,{cache:"no-store"}),fetch(`${On}/backend/attendance_marks.php?user_email=${encodeURIComponent(n)}&student_summary=1&t=${Date.now()}`,{cache:"no-store"}),fetch(`${On}/backend/assessment_scores.php?user_email=${encodeURIComponent(n)}&t=${Date.now()}`,{cache:"no-store"}),fetch(`${On}/backend/study_sessions.php?user_email=${encodeURIComponent(n)}&t=${Date.now()}`,{cache:"no-store"})]),[We,Me,ni,ri,Wt,ur,Yr]=await Promise.all([Ne.json(),je.json(),Ve.json(),mt.json(),vt.json(),Qe.json(),Pn.json()]);if(!f)return;b(We.success?We.students||[]:[]),g(Me.success?Me.courses||[]:[]),w(ni.success?ni.entries||[]:[]),x(ri.success?ri.announcements||[]:[]),_(Wt.success?Wt.by_course||[]:[]);const mr=Wt.success&&Wt.rollup?Wt.rollup:{};z({present:Number(mr.present||0),late:Number(mr.late||0),absent:Number(mr.absent||0)}),F(ur.success?ur.bars_by_course||[]:[]);const hr=ur.marks_by_course,Io=ur.success&&hr&&typeof hr=="object"&&!Array.isArray(hr)?hr:{};B(Io),Yr.success&&Array.isArray(Yr.events)?ze(Yr.events.map(B5).filter(Boolean)):ze([])}catch{if(!f)return;b([]),g([]),w([]),x([]),_([]),z({present:0,late:0,absent:0}),F([]),B({}),ze([])}finally{f&&ye(!1)}}return U(),()=>{f=!1}},[n]);const ve=a.useMemo(()=>cr(p,{userEmail:n,studentId:i,studentDatabaseId:o}),[p,n,i,o]),fe=a.useMemo(()=>Js(v,ve),[v,ve]),Y=a.useMemo(()=>{const f=new Map;for(const U of v){const Z=Number(U.id);Number.isFinite(Z)&&Z>0&&f.set(Z,U)}return f},[v]),re=a.useMemo(()=>{const f=new Set;for(const U of v){const Z=String(U.course_study_year??"").trim();Z&&f.add(Z)}return O5([...f])},[v]),xe=a.useMemo(()=>{const f=new Set;for(const Z of v){const de=String(Z.semester??"").trim();de&&f.add(de)}const U=["1st semester","2nd semester"];return[...f].sort((Z,de)=>{const Le=U.indexOf(Z),Ne=U.indexOf(de);return(Le===-1?99:Le)-(Ne===-1?99:Ne)||Z.localeCompare(de)})},[v]);a.useEffect(()=>{H&&!re.includes(H)&&Q("")},[H,re]),a.useEffect(()=>{ce&&!xe.includes(ce)&&oe("")},[ce,xe]);const Se=a.useMemo(()=>fe.map(f=>Number(f.id)).filter(f=>Number.isFinite(f)&&f>0).sort((f,U)=>f-U),[fe]);a.useEffect(()=>{j(null)},[n]),a.useEffect(()=>{Q(""),oe("")},[n]),a.useEffect(()=>{const f=new Date;ue(f.getFullYear()),M(f.getMonth()+1)},[n]),a.useEffect(()=>{if(Se.length===0){j(null);return}j(f=>{if(f===null)return[...Se];if(f.length===0)return[];const U=new Set(Se),Z=f.filter(Le=>U.has(Le)),de=Se.filter(Le=>!f.includes(Le));return[...Z,...de].sort((Le,Ne)=>Le-Ne)})},[Se]);const D=a.useMemo(()=>fe.map(f=>Number(f.id)),[fe]),ae=a.useMemo(()=>y.filter(f=>f.entry_type==="class"&&f.course_id!=null&&D.includes(Number(f.course_id))),[y,D]),ge=a.useMemo(()=>y.filter(f=>{if(f.entry_type!=="event")return!1;const U=f.course_id!=null&&f.course_id!==""?Number(f.course_id):NaN;return Number.isFinite(U)&&U>0?D.includes(U):!0}),[y,D]),h=new Date().getTime(),m=a.useMemo(()=>{const f=[],U=(Z,de)=>{const Ne=String(Z.start_time||"").trim()||(de==="event"?"23:59:00":"09:00:00"),je=new Date(`${Z.entry_date}T${Ne}`);Number.isNaN(je.getTime())||je.getTime()<h||f.push({...Z,kind:de,dt:je})};return ae.forEach(Z=>U(Z,"class")),ge.forEach(Z=>U(Z,"event")),f.sort((Z,de)=>Z.dt.getTime()-de.dt.getTime()),f.slice(0,fa)},[ae,ge,h]),$=a.useMemo(()=>{const f=new Map(A.map(Z=>[Number(Z.course_id),Z])),U=fe.map(Z=>{const de=f.get(Number(Z.id))||{},Le=Number(de.present||0),Ne=Number(de.late||0),je=Number(de.absent||0),Ve=Number(de.total||0),mt=Number(de.attendance_rate||0),vt=je+Ne;return{courseId:Number(Z.id),courseCode:Z.course_code||"COURSE",courseName:Z.course_name||"Course",rate:mt,present:Le,absent:vt,total:Ve}});return U.sort((Z,de)=>de.courseId-Z.courseId),U},[fe,A]),O=a.useMemo(()=>$.map(f=>f.courseId).join(","),[$]),ne=a.useRef(null),k=a.useRef(null),te=a.useRef(null),[Ce,$e]=a.useState(null),[S,K]=a.useState(null);a.useLayoutEffect(()=>{if(me||!ve||$.length===0){$e(null),K(null);return}const f=Ne=>{const je=getComputedStyle(Ne).gap||"0.65rem",Ve=String(je).trim().split(/\s+/)[0]||"0.65rem",mt=Ve.match(/^([\d.]+)px$/i);if(mt)return Math.round(parseFloat(mt[1]));const vt=Ve.match(/^([\d.]+)rem$/i);if(vt){const Qe=parseFloat(getComputedStyle(document.documentElement).fontSize)||16;return Math.round(parseFloat(vt[1])*Qe)}return 10},U=()=>{const Ne=ne.current,je=k.current,Ve=te.current;if(!Ne||!je)return;const mt=Math.ceil(je.getBoundingClientRect().height),vt=Ve?Math.ceil(Ve.getBoundingClientRect().height):mt,Qe=Math.max(mt,vt,72),Pn=f(Ne),We=Qe*2+Pn;$e(Me=>Me===Qe?Me:Qe),K(Me=>Me===We?Me:We)};if(U(),typeof ResizeObserver>"u")return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U);const Z=k.current,de=te.current;if(!Z)return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U);const Le=new ResizeObserver(()=>{requestAnimationFrame(U)});return Le.observe(Z),de&&Le.observe(de),window.addEventListener("resize",U),()=>{Le.disconnect(),window.removeEventListener("resize",U)}},[me,ve,O,e,$.length]);const se=a.useMemo(()=>ge.filter(U=>E5(U)).filter(U=>{const Z=new Date(`${U.entry_date}T${U.start_time||"23:59:00"}`);return!Number.isNaN(Z.getTime())&&Z.getTime()>=h}).sort((U,Z)=>{const de=new Date(`${U.entry_date}T${U.start_time||"23:59:00"}`).getTime(),Le=new Date(`${Z.entry_date}T${Z.start_time||"23:59:00"}`).getTime();return de-Le}).slice(0,fa).map(U=>({...U,days:T5(U.entry_date)})),[ge,h]),le=a.useMemo(()=>{const f=Array.isArray(P)?[...P]:[];return f.sort((U,Z)=>new Date(Z.created_at||0).getTime()-new Date(U.created_at||0).getTime()),f.slice(0,fa)},[P]),_e=a.useMemo(()=>le.map(f=>f.id??`${f.created_at}`).join(","),[le]),He=a.useRef(null),it=a.useRef(null),Ae=a.useRef(null),[Te,Je]=a.useState(null);a.useLayoutEffect(()=>{if(me||le.length<=1){Je(null);return}const f=()=>{const Le=He.current,Ne=it.current,je=Ae.current;if(!Le||!Ne||!je)return;const Ve=Le.getBoundingClientRect(),mt=je.getBoundingClientRect().top-Ve.top;if(mt<=1)return;const vt=Math.floor(mt);Je(Qe=>Qe===vt?Qe:vt)};if(f(),typeof ResizeObserver>"u")return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f);const U=it.current,Z=Ae.current;if(!U||!Z)return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f);const de=new ResizeObserver(()=>{requestAnimationFrame(f)});return de.observe(U),de.observe(Z),window.addEventListener("resize",f),()=>{de.disconnect(),window.removeEventListener("resize",f)}},[me,_e,e,le.length]);const yt=a.useMemo(()=>zb.filter(f=>f(ve||{})).length,[ve]),Ze=a.useMemo(()=>{const f=$.reduce((Z,de)=>Z+Number(de.total||0),0),U=$.reduce((Z,de)=>Z+Number(de.present||0),0);return f<=0?0:Math.round(U/f*100)},[$]),wt=Number((ve==null?void 0:ve.gpa)||0),Ke=a.useMemo(()=>ee===null?Se:ee,[ee,Se]),dt=a.useMemo(()=>{const f=new Set(Ke);if(f.size===0)return{present:0,late:0,absent:0};const U=new Map(A.map(Ne=>[Number(Ne.course_id),Ne]));let Z=0,de=0,Le=0;return f.forEach(Ne=>{const je=U.get(Ne);je&&(Z+=Number(je.present||0),de+=Number(je.late||0),Le+=Number(je.absent||0))}),{present:Z,late:de,absent:Le}},[A,Ke]),ot=a.useMemo(()=>{const{present:f,late:U,absent:Z}=dt;return[{name:"Present",value:f},{name:"Late",value:U},{name:"Absent",value:Z}].filter(de=>de.value>0)},[dt]),Xs=a.useMemo(()=>dt.present+dt.late+dt.absent,[dt]),ut=a.useMemo(()=>L.present+L.late+L.absent>0,[L]),$t=()=>{j([...Se])},Qs=()=>{j([])},Ir=f=>{const U=Number(f);!Number.isFinite(U)||U<=0||j(Z=>{const de=Z===null?[...Se]:[...Z];return de.includes(U)?de.filter(Le=>Le!==U):[...de,U].sort((Le,Ne)=>Le-Ne)})};a.useEffect(()=>{if(!E)return;const f=Z=>{G.current&&!G.current.contains(Z.target)&&(C(!1),J(""))},U=Z=>{Z.key==="Escape"&&(C(!1),J(""))};return document.addEventListener("mousedown",f),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("keydown",U)}},[E]);const Yt=X.trim().toLowerCase(),jn=a.useMemo(()=>Yt?fe.filter(f=>{const U=String(f.course_code||"").toLowerCase(),Z=String(f.course_name||"").toLowerCase();return U.includes(Yt)||Z.includes(Yt)}):fe,[fe,Yt]),kr=a.useMemo(()=>{const f=new Set(Ke);return fe.filter(U=>f.has(Number(U.id)))},[fe,Ke]),Bo=a.useMemo(()=>{const f=Ke.length,U=fe.length;return U===0?"No modules":f===0?"No modules selected — tap to choose":f===U?`All ${f} module${f===1?"":"s"}`:`${f} module${f===1?"":"s"} selected`},[Ke,fe.length]),Rn=kr.length>0&&kr.length<fe.length,Ft=a.useMemo(()=>W.map(f=>{const U=Number(f.course_id),Z=Array.isArray(f.marks)?f.marks:[],de=Z.length>0?Z:nd(V,U);return{courseId:U,label:String(f.course_code||"Module").trim()||"Module",fullName:String(f.course_name||f.course_code||"").trim(),score:Math.round(Number(f.avg_score)*10)/10,assessmentCount:Number(f.assessment_count)||0,marks:de}}),[W,V]),Fr=a.useMemo(()=>{const f=String(H||"").trim(),U=String(ce||"").trim();return!f&&!U?Ft:Ft.filter(Z=>{const de=Y.get(Number(Z.courseId));return!(!de||f&&String(de.course_study_year??"").trim()!==f||U&&String(de.semester??"").trim()!==U)})},[Ft,Y,H,ce]),lr=a.useCallback(f=>{if(!f||typeof f!="object")return;const U=Number(f.courseId??f.course_id),Z=Number.isFinite(U)&&U>0?Ft.find(Ve=>Ve.courseId===U):null,de=!Z&&f.label!=null?Ft.find(Ve=>Ve.label===f.label):null,Ne=Z||de||f;let je=Array.isArray(Ne.marks)?Ne.marks:[];je.length===0&&Number.isFinite(U)&&U>0&&(je=[...nd(V,U)]),q({code:String(Ne.label||f.label||"Module").trim()||"Module",title:String(Ne.fullName||Ne.label||f.fullName||f.label||"Module").trim()||"Module",avgScore:Ne.score??f.score,assessmentCount:Number(Ne.assessmentCount??f.assessmentCount)||0,marks:je})},[Ft,V]),Ur=a.useCallback(f=>{const U=j5(f);U&&lr(U)},[lr]);a.useEffect(()=>{if(!R)return;const f=document.body.style.overflow;document.body.style.overflow="hidden";const U=Z=>{Z.key==="Escape"&&q(null)};return window.addEventListener("keydown",U),()=>{document.body.style.overflow=f,window.removeEventListener("keydown",U)}},[R]);const jt=Fr.length,Oo=a.useMemo(()=>{const f=new Set,U=new Date().getFullYear();for(let Z=U-2;Z<=U+1;Z+=1)f.add(Z);return he.forEach(Z=>f.add(Z.at.getFullYear())),f.add(ie),[...f].sort((Z,de)=>Z-de)},[he,ie]),dr=a.useMemo(()=>new Intl.DateTimeFormat("en-GB",{month:"long",year:"numeric"}).format(new Date(ie,N-1,1)),[ie,N]),Wr=a.useMemo(()=>he.filter(f=>R5(f.at,ie,N)),[he,ie,N]),Ut=a.useMemo(()=>{const f=We=>We.durationMinutes||25,U=Wr,de=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(We=>({day:We,minutes:0}));U.forEach(We=>{const Me=We.at.getDay();de[Me].minutes+=f(We)});const Le=Math.max(30,...de.map(We=>We.minutes),1),Ne=new Map;U.forEach(We=>{const Me=We.courseCode||"Module";Ne.set(Me,(Ne.get(Me)||0)+f(We))});const je=Array.from(Ne.entries()).map(([We,Me])=>({code:We,minutes:Math.round(Me)})).sort((We,Me)=>Me.minutes-We.minutes);je.length===0&&fe.slice(0,8).forEach(We=>{je.push({code:We.course_code||"Course",minutes:0})}),je.length===0&&je.push({code:"—",minutes:0});const Ve=Math.max(30,...je.map(We=>We.minutes),1),mt=rd(Le),vt=mt[mt.length-1]||30,Qe=rd(Ve),Pn=Qe[Qe.length-1]||30;return{byDow:de,moduleRows:je,weekYTicks:mt,weekYMax:vt,moduleYTicks:Qe,moduleYMax:Pn}},[Wr,fe]),Ms=a.useMemo(()=>{const f=jt;return f<=1?{left:56,right:56}:f===2?{left:40,right:40}:f<=3?{left:28,right:28}:f<=5?{left:16,right:16}:f<=8?{left:8,right:8}:{left:0,right:0}},[jt]),ei=a.useMemo(()=>jt<=2?"26%":jt<=4?"18%":"12%",[jt]),ti=a.useMemo(()=>({top:8,right:jt<=4?12:8,left:0,bottom:48}),[jt]),Kt=a.useMemo(()=>({backgroundColor:e?"#374151":"#fff",border:`1px solid ${e?"#525252":"#e5e7eb"}`,borderRadius:8,color:e?"#f9fafb":"#111827"}),[e]),rn=e?"#9ca3af":"#6b7280",Hr=e?"#404040":"#e5e7eb";return r("section",{css:Tb,children:[r("h1",{css:Eb,children:["Welcome Back, ",c||"Student"]}),t("p",{css:jb(e),children:"Here's your performance overview"}),r("div",{css:Rb,children:[r("article",{css:pi(e),children:[t("p",{css:gi(e),children:"KPI"}),r("p",{css:bi,children:[l," ",t("span",{css:s`font-size:1rem;font-weight:500;`,children:"pts"})]}),t("p",{css:yi(e),children:"Total Points"})]}),r("article",{css:pi(e),children:[t("p",{css:gi(e),children:"KPI"}),r("p",{css:bi,children:[Ze,"%"]}),t("p",{css:yi(e),children:"Attendance Rate"})]}),r("article",{css:pi(e),children:[t("p",{css:gi(e),children:"KPI"}),r("p",{css:bi,children:[wt.toFixed(1)," ",t("span",{css:s`font-size:1rem;font-weight:500;`,children:"/4.0"})]}),t("p",{css:yi(e),children:"Current GPA"})]}),r("article",{css:pi(e),children:[t("p",{css:gi(e),children:"KPI"}),t("p",{css:bi,children:yt}),t("p",{css:yi(e),children:"Badges Earned"})]})]}),r("div",{css:Pb,children:[r("section",{css:$n(e),children:[r("div",{css:Cn,children:[r("h2",{css:_n(e),children:[t(tp,{}),"Latest Announcements"]}),r("button",{type:"button",css:o5(e),onClick:u,children:["View All ",t(Cm,{})]})]}),me?t("p",{css:qe(e),children:"Loading announcements..."}):le.length>0?r(rt,{children:[le.length>1?t("p",{css:s`
                    margin: -0.15rem 0 0.5rem;
                    font-size: 0.82rem;
                    color: ${e?"#9ca3af":"#6b7280"};
                  `,children:"Showing one announcement — scroll down for more."}):null,t("div",{ref:He,css:v5(e,le.length>1),style:{maxHeight:Te!=null?`${Te}px`:le.length>1?"min(20rem, 48vh)":void 0},tabIndex:0,role:"region","aria-label":"Latest announcements. Scroll for more.",children:le.map((f,U)=>r("div",{ref:U===0?it:U===1?Ae:void 0,css:u5(e,U===le.length-1),children:[r("div",{css:a5,children:[t("div",{css:c5,children:D5(f.lecturer_name)}),r("div",{children:[t("div",{css:s`font-weight:700;`,children:f.lecturer_name}),t("div",{css:an(e),children:f.course_code||"General"})]})]}),t("h3",{css:l5,children:f.title}),t("p",{css:d5(e),children:f.content}),t("p",{css:an(e),children:z5(f.created_at)})]},f.id??`${f.created_at}-${U}`))})]}):t("p",{css:qe(e),children:"No announcements yet."})]}),r("section",{css:$n(e),children:[t("div",{css:Cn,children:r("h2",{css:_n(e),children:[t(vn,{}),"Course Attendance"]})}),me?t("p",{css:qe(e),children:"Loading attendance..."}):ve?$.length===0?t("p",{css:qe(e),children:"No courses to show. Your account must match a student record, and courses must list you as enrolled or use the same department as you."}):r(rt,{children:[$.length>2?t("p",{css:s`
                    margin: -0.2rem 0 0.55rem;
                    font-size: 0.82rem;
                    color: ${e?"#9ca3af":"#6b7280"};
                  `,children:"Up to two courses are visible — scroll to see the rest."}):null,t("div",{ref:ne,css:w5(e,$.length>2),style:{maxHeight:S!=null?`${S}px`:$.length>0?"clamp(10rem, 30vh, 15rem)":void 0},tabIndex:0,role:"region","aria-label":"Attendance by course. Scroll for more modules.",children:$.map((f,U)=>r("div",{ref:U===0?k:U===1?te:void 0,css:m5,style:Ce!=null?{height:Ce,overflow:"hidden"}:{overflow:"hidden"},children:[r("div",{css:f5,children:[r("div",{css:s`min-width: 0;`,children:[t("p",{css:p5,children:f.courseCode}),t("p",{css:h5(e),title:f.courseName,children:f.courseName})]}),r("strong",{css:s`flex-shrink: 0;`,children:[f.rate,"%"]})]}),r("div",{css:g5,children:[r("span",{children:["🟢 Present: ",f.present]}),r("span",{children:["🔴 Absent: ",f.absent]})]}),t("div",{css:b5(e),children:t("div",{css:y5(f.rate)})})]},f.courseId))})]}):t("p",{css:qe(e),children:"Student profile not found for this login."})]}),r("section",{css:$n(e),children:[t("div",{css:Cn,children:r("h2",{css:_n(e),children:[t(St,{}),"Next Classes and Events"]})}),me?t("p",{css:qe(e),children:"Loading schedule..."}):m.length>0?t("div",{css:Xl(e),children:m.map(f=>f.kind==="class"?r("div",{css:Ql(e),children:[r("div",{css:Ml,children:[t("span",{css:$5,children:f.course_code||"COURSE"}),t("span",{css:x5,children:"Class"})]}),t("p",{css:s`
                        margin: 0 0 0.35rem;
                        font-size: 0.88rem;
                        font-weight: 700;
                        color: ${e?"#d1d5db":"#374151"};
                      `,children:pa(f.entry_date)}),t("h3",{css:ed,children:f.course_name||"Class Session"}),r("p",{css:an(e),children:[t(lt,{style:{width:14,height:14,verticalAlign:"text-bottom"}})," ",Si(f.start_time)," - ",Si(f.end_time)]}),r("p",{css:an(e),children:[t(Ds,{style:{width:14,height:14,verticalAlign:"text-bottom"}})," ","Room ",f.room_location||"TBA"]})]},`class-${f.id}`):r("div",{css:Ql(e),children:[t("div",{css:Ml,children:t("span",{css:S5,children:"Event"})}),t("p",{css:s`
                        margin: 0 0 0.35rem;
                        font-size: 0.88rem;
                        font-weight: 700;
                        color: ${e?"#d1d5db":"#374151"};
                      `,children:pa(f.entry_date)}),t("h3",{css:ed,children:f.event_title||f.course_name||"Scheduled event"}),f.event_description?t("p",{css:s`
                          margin: 0.25rem 0 0.35rem;
                          font-size: 0.88rem;
                          line-height: 1.4;
                          color: ${e?"#d1d5db":"#4b5563"};
                        `,children:f.event_description}):null,r("p",{css:an(e),children:[t(lt,{style:{width:14,height:14,verticalAlign:"text-bottom"}})," ",Si(f.start_time),f.end_time?` – ${Si(f.end_time)}`:""]}),f.room_location?r("p",{css:an(e),children:[t(Ds,{style:{width:14,height:14,verticalAlign:"text-bottom"}})," ",f.room_location]}):null]},`event-${f.id}`))}):t("p",{css:qe(e),children:"No upcoming classes or timetable events."})]}),r("section",{css:$n(e),children:[t("div",{css:Cn,children:r("h2",{css:_n(e),children:[t(Er,{}),"Assessment Deadlines"]})}),me?t("p",{css:qe(e),children:"Loading deadlines..."}):se.length===0?t("p",{css:qe(e),children:"No upcoming deadlines."}):t("div",{css:Xl(e),children:se.map(f=>r("article",{css:C5(e),children:[r("div",{css:_5,children:[t("span",{css:A5,children:f.course_code||"COURSE"}),t("span",{css:an(e),children:f.event_title?"Assignment":"Assessment"})]}),t("p",{css:s`
                      margin: 0 0 0.35rem;
                      font-size: 0.86rem;
                      font-weight: 700;
                      color: ${e?"#d1d5db":"#374151"};
                    `,children:pa(f.entry_date)}),t("h3",{css:L5,children:f.event_title||"Assessment deadline"}),t("p",{css:an(e),children:f.event_description||"Complete and submit before due date."}),r("div",{css:N5,children:[t("span",{css:an(e),children:new Date(`${f.entry_date}T${f.start_time||"23:59:00"}`).toLocaleString([],{month:"numeric",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}),t("strong",{css:s`color:#d97706;`,children:f.days<=0?"Today":`${f.days} days`})]})]},f.id))})]})]}),r("div",{css:Jl,children:[r("section",{css:$n(e),children:[t("div",{css:Cn,children:r("h2",{css:_n(e),children:[t(vn,{}),"Attendance distribution"]})}),me?t("p",{css:qe(e),children:"Loading chart..."}):ut?fe.length===0?t("p",{css:qe(e),children:"No courses to filter — link your student profile to see modules."}):r(rt,{children:[r("div",{css:Vb(e),children:[t("p",{css:rs(e),children:"Include modules"}),r("div",{ref:G,css:Gb,children:[r("button",{type:"button",css:Jb(e,E),"aria-expanded":E,"aria-haspopup":"listbox","aria-label":"Choose modules for attendance chart",onClick:()=>{C(f=>!f),E&&J("")},children:[t("span",{css:s`min-width: 0;`,children:Bo}),t(op,{css:Zb(E),"aria-hidden":!0})]}),Rn?t("div",{css:r5,children:kr.map(f=>{const U=Number(f.id),Z=String(f.course_code||"Module").trim()||"Module";return r("span",{css:s5(e),children:[Z,t("button",{type:"button",css:i5(e),"aria-label":`Remove ${Z} from chart filter`,onClick:()=>Ir(U),children:t(Fe,{"aria-hidden":!0})})]},U)})}):null,E?r("div",{css:qb(e),role:"listbox","aria-label":"Module list",children:[r("div",{css:Xb(e),children:[t(Ln,{"aria-hidden":!0,style:{width:"1.05rem",height:"1.05rem",opacity:.65,flexShrink:0}}),t("input",{type:"search",css:Qb(e),placeholder:"Search by code or name…",value:X,onChange:f=>J(f.target.value),autoComplete:"off","aria-label":"Search modules"})]}),r("div",{css:Mb(e),children:[t("button",{type:"button",css:xi(e),onClick:$t,children:"Select all"}),t("button",{type:"button",css:xi(e),onClick:Qs,children:"Clear all"})]}),t("div",{css:e5(e),children:jn.length===0?t("p",{css:qe(e),style:{margin:"0.35rem 0.4rem",fontSize:"0.84rem"},children:"No modules match your search."}):jn.map(f=>{const U=Number(f.id),Z=`attendance-filter-${U}`,de=Ke.includes(U);return r("label",{htmlFor:Z,css:t5(e),children:[t("input",{id:Z,type:"checkbox",checked:de,onChange:()=>Ir(U)}),r("span",{css:s`min-width: 0;`,children:[t("span",{css:s`font-weight: 700;`,children:f.course_code||"Course"}),f.course_name?t("span",{css:n5(e),children:f.course_name}):null]})]},U)})})]}):null]})]}),Ke.length===0?t("p",{css:qe(e),children:"Choose one or more modules with the filter above to update the chart."}):Xs<=0?t("p",{css:qe(e),children:"No attendance marks for the selected modules yet."}):ot.length===0?t("p",{css:qe(e),children:"Not enough data to chart for this selection."}):t("div",{css:wi,children:t(xt,{width:"100%",height:280,children:r(Uu,{children:[t(Wu,{data:ot,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:52,outerRadius:96,paddingAngle:2,isAnimationActive:!0,children:ot.map(f=>t(no,{fill:Db[f.name]||to,stroke:"none"},f.name))}),t(Ct,{formatter:(f,U)=>{const Z=Number(f);return[`${Z} session${Z===1?"":"s"}`,U]},contentStyle:Kt}),t(Nr,{verticalAlign:"bottom",formatter:f=>t("span",{style:{color:e?"#e5e7eb":"#374151"},children:f})})]})})})]}):t("p",{css:qe(e),children:"No attendance sessions recorded yet. Your lecturer will mark classes as they happen."})]}),r("section",{css:$n(e),children:[t("div",{css:Cn,children:r("h2",{css:_n(e),children:[t(ar,{}),"Performance — by module"]})}),me?t("p",{css:qe(e),children:"Loading chart..."}):Ft.length===0?r("p",{css:qe(e),children:["No marks published yet. Your module leader saves assessment scores under"," ",t("strong",{children:"Performance"})," in the lecturer portal; each bar below will be one module (average of all assessments saved for that course, 0–100)."]}):r(rt,{children:[r("div",{css:Zl(e),children:[r("div",{css:ql,children:[r("div",{children:[t("label",{htmlFor:"perf-module-study-year",css:rs(e),children:"Study year"}),r("select",{id:"perf-module-study-year",css:vi(e),value:H,onChange:f=>Q(f.target.value),"aria-label":"Filter performance chart by study year",children:[t("option",{value:"",children:"All study years"}),re.map(f=>t("option",{value:f,children:Mt(f)},f))]})]}),r("div",{children:[t("label",{htmlFor:"perf-module-semester",css:rs(e),children:"Semester"}),r("select",{id:"perf-module-semester",css:vi(e),value:ce,onChange:f=>oe(f.target.value),"aria-label":"Filter performance chart by semester",children:[t("option",{value:"",children:"All semesters"}),xe.map(f=>t("option",{value:f,children:I5(f)},f))]})]})]}),(H||ce)&&t("div",{css:s`margin-top: 0.55rem;`,children:t("button",{type:"button",css:xi(e),onClick:()=>{Q(""),oe("")},children:"Clear chart filters"})})]}),Fr.length===0?t("p",{css:qe(e),children:"No modules match this study year / semester. Choose “All” or adjust the filters above."}):t("div",{css:wi,children:t("div",{css:Kb(jt),children:t(xt,{width:"100%",height:280,children:r(zn,{data:Fr,margin:ti,barCategoryGap:ei,children:[t(Nt,{strokeDasharray:"3 3",stroke:Hr,vertical:!1}),t(Dt,{dataKey:"label",tick:{fill:rn,fontSize:11},interval:0,angle:-22,textAnchor:"end",height:56,padding:Ms}),t(zt,{domain:[0,100],tick:{fill:rn,fontSize:11},width:36,label:{value:"Avg (%)",angle:-90,position:"insideLeft",fill:rn,fontSize:11}}),t(It,{dataKey:"score",name:"Module average",fill:to,radius:[6,6,0,0],maxBarSize:56,cursor:"pointer",onClick:Ur})]})})})})]})]})]}),r("div",{css:s`
          margin-top: 0.95rem;
        `,children:[r("div",{css:Zl(e),children:[r("div",{css:ql,children:[r("div",{children:[t("label",{htmlFor:"study-chart-month",css:rs(e),children:"Month"}),t("select",{id:"study-chart-month",css:vi(e),value:N,onChange:f=>M(Number(f.target.value)),"aria-label":"Filter study charts by month",children:P5.map(f=>t("option",{value:f.value,children:f.label},f.value))})]}),r("div",{children:[t("label",{htmlFor:"study-chart-year",css:rs(e),children:"Year"}),t("select",{id:"study-chart-year",css:vi(e),value:ie,onChange:f=>ue(Number(f.target.value)),"aria-label":"Filter study charts by year",children:Oo.map(f=>t("option",{value:f,children:f},f))})]})]}),(()=>{const f=new Date;return f.getFullYear()===ie&&f.getMonth()+1===N?null:t("div",{css:s`margin-top: 0.55rem;`,children:t("button",{type:"button",css:xi(e),onClick:()=>{const Z=new Date;ue(Z.getFullYear()),M(Z.getMonth()+1)},children:"Current month"})})})()]}),r("div",{css:Jl,children:[r("section",{css:$n(e),children:[t("div",{css:Cn,children:r("h2",{css:_n(e),children:[t(Ds,{}),"Study time by weekday"]})}),r("p",{css:s`
                margin: -0.35rem 0 0.65rem;
                font-size: 0.82rem;
                color: ${e?"#9ca3af":"#6b7280"};
              `,children:[dr," — minutes per weekday (all Mondays summed, etc.)"]}),me?t("p",{css:qe(e),children:"Loading study chart..."}):t("div",{css:wi,children:t(xt,{width:"100%",height:280,children:r(zn,{data:Ut.byDow,margin:{top:10,right:12,left:0,bottom:8},children:[t(Nt,{strokeDasharray:"3 3",stroke:Hr,vertical:!1}),t(Dt,{dataKey:"day",tick:{fill:rn,fontSize:12}}),t(zt,{domain:[0,Ut.weekYMax],tick:{fill:rn,fontSize:11},width:40,ticks:Ut.weekYTicks,tickFormatter:f=>`${Math.round(f)}m`}),t(Ct,{formatter:f=>[`${typeof f=="number"?Math.round(f):f} min`,`Study time (${dr})`],contentStyle:Kt}),t(It,{dataKey:"minutes",fill:to,radius:[6,6,0,0],maxBarSize:48})]})})})]}),r("section",{css:$n(e),children:[t("div",{css:Cn,children:t("h2",{css:_n(e),children:"Study time by module"})}),t("p",{css:s`
                margin: -0.35rem 0 0.65rem;
                font-size: 0.82rem;
                color: ${e?"#9ca3af":"#6b7280"};
              `,children:dr}),me?t("p",{css:qe(e),children:"Loading study chart..."}):t("div",{css:wi,children:t(xt,{width:"100%",height:280,children:r(js,{data:Ut.moduleRows,margin:{top:8,right:8,left:0,bottom:36},children:[t(Nt,{strokeDasharray:"3 3",stroke:Hr}),t(Dt,{dataKey:"code",tick:{fill:rn,fontSize:11},interval:0,angle:-12,textAnchor:"end",height:48}),t(zt,{domain:[0,Ut.moduleYMax],tick:{fill:rn,fontSize:11},width:40,ticks:Ut.moduleYTicks,tickFormatter:f=>`${Math.round(f)}m`}),t(Ct,{formatter:f=>[`${typeof f=="number"?Math.round(f):f} min`,dr],contentStyle:Kt}),t(Qn,{type:"monotone",dataKey:"minutes",stroke:Vl,strokeWidth:2,dot:{r:4,fill:Vl}})]})})})]})]})]}),R&&typeof document<"u"?Fu.createPortal(t("div",{css:Bb,role:"presentation",onClick:()=>q(null),children:r("div",{role:"dialog","aria-modal":"true","aria-labelledby":"perf-marks-modal-title",css:Ob(e),onClick:f=>f.stopPropagation(),children:[r("div",{css:Ib(e),children:[r("div",{css:s`min-width: 0;`,children:[t("h2",{id:"perf-marks-modal-title",css:kb(e),children:R.code}),R.title!==R.code?t("p",{css:Fb(e),children:R.title}):null]}),t("button",{type:"button",css:Ub(e),"aria-label":"Close",onClick:()=>q(null),children:t(Fe,{style:{width:"1.25rem",height:"1.25rem"},"aria-hidden":!0})})]}),r("div",{css:Wb,children:[r("p",{css:Hb(e),children:["Module average: ",r("strong",{children:[R.avgScore,"%"]}),R.assessmentCount?r("span",{children:[" ","(",R.assessmentCount," assessment",R.assessmentCount===1?"":"s",")"]}):null]}),R.marks.length>0?R.marks.map((f,U)=>{const Z=Gl[U%Gl.length],de=String(f.mark_status||"")==="not_marked";return r("div",{css:Yb,children:[r("span",{style:{color:Z,minWidth:0,wordBreak:"break-word"},children:[f.label," ",t("span",{style:{color:e?"#9ca3af":"#6b7280"},children:":"})]}),t("span",{style:{flexShrink:0,textAlign:"right"},children:de?t("span",{style:{color:e?"#a3a3a3":"#6b7280",fontWeight:700},children:"Not marked"}):r("span",{style:{color:Z,fontWeight:700},children:[f.score,"%"]})})]},`perf-mark-${U}-${String(f.assessment_id)}`)}):t("p",{css:qe(e),style:{margin:0,fontSize:"0.88rem"},children:"No individual assessments are stored for this module yet."})]})]})}),document.body):null]})}const sd="/strack/".replace(/\/$/,""),F5=s`
  position: fixed;
  inset: 0;
  z-index: 2400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
`,U5=e=>s`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  border: 1px solid ${e?"#525252":"#e5e7eb"};
  background: ${e?"#262626":"#fff"};
  box-shadow: ${e?"0 24px 48px rgba(0,0,0,0.55)":"0 20px 40px rgba(0,0,0,0.12)"};
  overflow: hidden;
`,W5=e=>s`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1rem 0.65rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(124,58,237,0.12) 100%)":"linear-gradient(135deg, #eef2ff 0%, #faf5ff 100%)"};
`,H5=e=>s`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${e?"#fafafa":"#111827"};
  display: flex;
  align-items: center;
  gap: 0.45rem;

  svg {
    width: 1.35rem;
    height: 1.35rem;
    color: #6366f1;
    flex-shrink: 0;
  }
`,Y5=e=>s`
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${e?"#404040":"#e5e7eb"};
  color: ${e?"#f9fafb":"#111827"};

  &:hover {
    background: ${e?"#525252":"#d1d5db"};
  }
`,K5=e=>s`
  padding: 1rem 1.1rem 1.15rem;
  color: ${e?"#d1d5db":"#374151"};
  font-size: 0.92rem;
  line-height: 1.45;
`,V5=s`
  margin: 0.65rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,G5=e=>s`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.55rem 0.65rem;
  border-radius: 10px;
  background: ${e?"#1f1f1f":"#f9fafb"};
  border: 1px solid ${e?"#3f3f46":"#e5e7eb"};
  font-size: 0.88rem;
`,J5=s`
  font-size: 1.35rem;
  line-height: 1;
  flex-shrink: 0;
`,Z5=s`
  width: 100%;
  margin-top: 0.9rem;
  border: none;
  border-radius: 10px;
  padding: 0.55rem 1rem;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  background: #6366f1;
  color: #fff;

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;function q5({darkMode:e,userEmail:n,onAcknowledged:i}){const[o,c]=a.useState(!1),[l,u]=a.useState([]),[p,b]=a.useState(!1);a.useEffect(()=>{if(!n){u([]),c(!1);return}let g=!1;return(async()=>{try{const w=await(await fetch(`${sd}/backend/student_badges.php?user_email=${encodeURIComponent(n)}&unseen_only=1&t=${Date.now()}`,{cache:"no-store"})).json().catch(()=>({}));if(g)return;const P=w.success&&Array.isArray(w.awards)?w.awards:[];P.length>0?(u(P),c(!0)):(u([]),c(!1))}catch{g||(u([]),c(!1))}})(),()=>{g=!0}},[n]);const v=async()=>{if(!n||l.length===0){c(!1);return}const g=l.map(y=>y.id).filter(y=>Number.isFinite(y)&&y>0);if(g.length===0){c(!1);return}b(!0);try{(await(await fetch(`${sd}/backend/student_badge_popup_ack.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:n,award_ids:g})})).json().catch(()=>({}))).success&&(c(!1),u([]),typeof i=="function"&&i())}catch{c(!1)}finally{b(!1)}};return!o||l.length===0?null:t("div",{css:F5,role:"dialog","aria-modal":"true","aria-labelledby":"badge-reward-title",onClick:v,children:r("div",{css:U5(e),onClick:g=>g.stopPropagation(),children:[r("div",{css:W5(e),children:[r("h2",{id:"badge-reward-title",css:H5(e),children:[t(or,{}),l.length===1?"You received a badge!":`You received ${l.length} new badges!`]}),t("button",{type:"button",css:Y5(e),onClick:v,"aria-label":"Close",disabled:p,children:t(Fe,{style:{width:20,height:20}})})]}),r("div",{css:K5(e),children:[r("p",{css:s`margin: 0;`,children:[t(Er,{style:{display:"inline",verticalAlign:"text-top",width:18,height:18,color:"#a78bfa"}})," ","Your lecturer awarded you the following. Points have been added to your account."]}),t("ul",{css:V5,children:l.map(g=>{const y=xg(g.badge_id);return r("li",{css:G5(e),children:[t("span",{css:J5,children:(y==null?void 0:y.icon)||"🏅"}),r("span",{children:[t("strong",{children:(y==null?void 0:y.name)||g.badge_id})," — ",r("span",{style:{color:e?"#a3e635":"#15803d"},children:["+",g.points_awarded," pts"]}),g.lecturer_name?r("span",{css:s`display: block; margin-top: 0.2rem; font-size: 0.8rem; opacity: 0.9;`,children:["From ",g.lecturer_name]}):null]})]},g.id)})}),t("button",{type:"button",css:Z5,onClick:v,disabled:p,children:p?"Saving…":"Got it"})]})]})})}const Ym=a.createContext(null);function X5({children:e}){const[n,i]=a.useState(!1),o=a.useMemo(()=>({simulatedDnd:n,setSimulatedDnd:i}),[n]);return tt.jsx(Ym.Provider,{value:o,children:e})}function Km(){const e=a.useContext(Ym);return e||{simulatedDnd:!1,setSimulatedDnd:()=>{}}}const uo="/strack/".replace(/\/$/,""),xn="#6366f1",id="#22c55e",Ls=25*60,Vm=5*60,Q5=15*60,M5=8,e2=4*60;function Gm(e){return`strack_study_timer_${String(e||"").toLowerCase()}`}function od(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function t2(e){const n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=n.getDay();return n.setDate(n.getDate()-i),n.setHours(0,0,0,0),n.getTime()}function ad(e){return`${Math.floor(e.at.getTime()/1e3)}_${e.courseId}`}function Jm(e){if(!e||typeof e!="object")return null;const n=e.at??e.completed_at,i=new Date(n);if(Number.isNaN(i.getTime()))return null;const o=Number(e.durationMinutes??e.duration_minutes??25),c=Number(e.courseId??e.course_id)||0,u=e.kind==="pomodoro"||String(e.session_kind||"").toLowerCase()==="pomodoro"||c>0?"pomodoro":null;return{at:i,courseId:c,courseCode:String(e.courseCode??e.course_code??""),courseName:String(e.courseName??e.course_name??""),kind:u,durationMinutes:Number.isFinite(o)&&o>0?Math.min(240,o):25}}function cd(e){return Jm({at:e.completed_at,courseId:e.course_id,courseCode:e.course_code,courseName:e.course_name,duration_minutes:e.duration_minutes,kind:"pomodoro"})}function ld(e,n){const i=new Map;for(const o of e)!o||o.kind!=="pomodoro"||i.set(ad(o),o);for(const o of n){if(!o||o.kind!=="pomodoro")continue;const c=ad(o);i.has(c)||i.set(c,o)}return Array.from(i.values()).sort((o,c)=>o.at.getTime()-c.at.getTime())}async function dd(e,n){if(!e||!(n!=null&&n.courseId))return{success:!1,message:"Missing email or course"};try{return await(await fetch(`${uo}/backend/study_sessions.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:e,course_id:n.courseId,duration_minutes:n.durationMinutes||25,completed_at:n.at.toISOString(),kind:"pomodoro"})})).json().catch(()=>({}))}catch{return{success:!1,message:"Network error"}}}async function ud(e){if(!e)return{success:!1,events:[]};try{return await(await fetch(`${uo}/backend/study_sessions.php?user_email=${encodeURIComponent(e)}&t=${Date.now()}`,{cache:"no-store"})).json()}catch{return{success:!1,events:[]}}}function md(e){try{const n=localStorage.getItem(Gm(e));if(!n)return[];const i=JSON.parse(n);return(Array.isArray(i==null?void 0:i.events)?i.events:[]).map(Jm).filter(Boolean).filter(c=>c.kind==="pomodoro")}catch{return[]}}function hd(e,n){try{localStorage.setItem(Gm(e),JSON.stringify({version:1,events:n.map(i=>({at:i.at.toISOString(),courseId:i.courseId,courseCode:i.courseCode,courseName:i.courseName,durationMinutes:i.durationMinutes||25,kind:"pomodoro"}))}))}catch{}}const n2=e=>s`
  margin: 0;
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  font-weight: 800;
  color: ${e?"#f9fafb":"#111827"};
`,r2=e=>s`
  margin: 0.35rem 0 1.1rem;
  font-size: 0.95rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,s2=s`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 320px);
  gap: 0.9rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`,i2=s`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  min-height: 100%;
`,o2=e=>s`
  ${Zs(e)}
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,a2=s`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 0.9rem;
`,c2=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,fd=e=>s`
  ${Zs(e)}
  display: flex;
  flex-direction: column;
  min-height: 0;
`,pd=s`
  flex: 1;
  min-height: 260px;
  width: 100%;
`,Zs=e=>s`
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#262626":"#fff"};
  padding: 1rem 1.05rem;
  box-shadow: ${e?"none":"0 1px 2px rgba(0,0,0,0.04)"};
`,l2=e=>s`
  ${Zs(e)}
  padding: 1.1rem 1.15rem 1.15rem;
`,d2=e=>s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.35rem;
  border-radius: 12px;
  background: ${e?"#1f1f1f":"#f3f4f6"};
  margin-bottom: 1rem;
`,ga=(e,n)=>s`
  flex: 1;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: none;
  border-radius: 10px;
  padding: 0.55rem 0.65rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${n?e?"#262626":"#fff":"transparent"};
  color: ${n?xn:e?"#9ca3af":"#6b7280"};
  box-shadow: ${n&&!e?"0 1px 2px rgba(0,0,0,0.06)":"none"};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }

  &:hover {
    color: ${n?xn:e?"#e5e7eb":"#374151"};
  }
`,u2=e=>s`
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${e?"#9ca3af":"#6b7280"};
  margin-bottom: 0.4rem;
`,m2=e=>s`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${e?"#525252":"#d1d5db"};
  background: ${e?"#1f1f1f":"#fff"};
  color: ${e?"#e5e7eb":"#111827"};
  font-size: 0.92rem;
  padding: 0.55rem 0.65rem;
  margin-bottom: 1rem;
  font-family: inherit;
  outline: none;

  &:focus {
    border-color: ${xn};
    box-shadow: 0 0 0 2px ${e?"rgba(99,102,241,0.35)":"rgba(99,102,241,0.2)"};
  }
`,h2=e=>s`
  font-size: clamp(2.8rem, 8vw, 4.25rem);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0.2rem 0 0.65rem;
  color: ${e?"#f9fafb":"#111827"};
`,gd=e=>s`
  height: 6px;
  border-radius: 999px;
  background: ${e?"#404040":"#e5e7eb"};
  overflow: hidden;
  margin-bottom: 0.5rem;
`,bd=e=>s`
  height: 100%;
  width: ${Math.max(0,Math.min(100,e))}%;
  background: ${xn};
  border-radius: 999px;
  transition: width 0.3s linear;
`,f2=e=>s`
  text-align: center;
  font-size: 0.88rem;
  color: ${e?"#9ca3af":"#6b7280"};
  margin: 0 0 1rem;
  min-height: 1.25em;
`,p2=s`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  justify-content: center;
`,g2=s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border: none;
  border-radius: 10px;
  padding: 0.62rem 1.35rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  background: ${xn};
  color: #fff;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`,b2=e=>s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border: 1px solid ${e?"#525252":"#d1d5db"};
  border-radius: 10px;
  padding: 0.62rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  background: ${e?"#262626":"#fff"};
  color: ${e?"#e5e7eb":"#374151"};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`,y2=e=>s`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1f1f1f":"#f3f4f6"};

  svg {
    width: 1rem;
    height: 1rem;
  }
`,ba=e=>s`
  margin: 0 0 0.85rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${e?"#f9fafb":"#111827"};
`,yd=s`
  margin-bottom: 0.85rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,wd=s`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.35rem;
`,vd=e=>s`
  font-size: 0.86rem;
  font-weight: 600;
  color: ${e?"#d1d5db":"#374151"};
`,xd=e=>s`
  font-size: 0.86rem;
  font-weight: 800;
  color: ${e?"#f9fafb":"#111827"};
`,w2=s`
  display: flex;
  gap: 0.28rem;
`,v2=(e,n)=>s`
  flex: 1;
  height: 6px;
  border-radius: 4px;
  background: ${n?xn:e?"#404040":"#e5e7eb"};
`,x2=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  background: ${e?"rgba(99, 102, 241, 0.2)":"#eef2ff"};
  margin-bottom: 0.55rem;
  font-weight: 700;
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#3730a3"};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }
`,S2=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  padding: 0.55rem 0.15rem;
  font-weight: 700;
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#111827"};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
    color: ${e?"#9ca3af":"#6b7280"};
  }
`,$2=e=>s`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${e?"#f9fafb":"#111827"};

  svg {
    width: 1.15rem;
    height: 1.15rem;
    color: ${xn};
  }
`,C2=e=>s`
  ${Zs(e)}
  background: ${e?"rgba(99, 102, 241, 0.12)":"#f5f3ff"};
  border-color: ${e?"#4c1d95":"#ddd6fe"};
`,_2=e=>s`
  margin: 0 0 0.75rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${e?"#e9d5ff":"#5b21b6"};
`,A2=s`
  display: grid;
  gap: 0.65rem 1.25rem;
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  & > div {
    margin-bottom: 0;
  }
`,$i=e=>s`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${e?"#d1d5db":"#4b5563"};
  margin-bottom: 0.55rem;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    width: 1.05rem;
    height: 1.05rem;
    flex-shrink: 0;
    margin-top: 0.12rem;
    color: ${xn};
  }
`,L2=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.88rem;
  text-align: center;
  padding: 1rem 0;
`,N2=e=>s`
  margin: 0 0 0.85rem;
  padding: 0.55rem 0.75rem;
  border-radius: 10px;
  font-size: 0.86rem;
  line-height: 1.4;
  border: 1px solid ${e?"#854d0e":"#fcd34d"};
  background: ${e?"rgba(234, 179, 8, 0.12)":"#fffbeb"};
  color: ${e?"#fcd34d":"#92400e"};
`,D2=s`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.32rem 0.65rem;
  padding-top: max(0.3rem, env(safe-area-inset-top, 0px));
  background: linear-gradient(90deg, #4338ca, #6366f1);
  color: #fff;
  font-size: 0.74rem;
  line-height: 1.3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
`,z2=s`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem 0.45rem;
`,T2=s`
  font-weight: 800;
  font-size: 0.8rem;
  white-space: nowrap;
`,E2=s`
  opacity: 0.92;
  font-size: 0.72rem;
  text-align: center;
  max-width: 36rem;
`;function j2(e){const n=Math.floor(Math.max(0,e)/60),i=Math.max(0,e)%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Ci(e){return e==="short"?Vm:e==="long"?Q5:Ls}function Sd(e){const n=Math.max(0,Math.ceil(Number(e)||0));let i=n<=0?60:Math.ceil(n*1.08);i=Math.max(30,Math.min(i,24*60)),i=Math.ceil(i/15)*15;const o=i<=90?15:i<=180?30:60,c=[];for(let l=0;l<=i;l+=o)c.push(l);return c}function R2({darkMode:e,userEmail:n,studentId:i,studentDatabaseId:o}){const{setSimulatedDnd:c}=Km(),[l,u]=a.useState([]),[p,b]=a.useState([]),[v,g]=a.useState(!0),[y,w]=a.useState([]),[P,x]=a.useState(null),[A,_]=a.useState("pomodoro"),[L,z]=a.useState(Ls),[W,F]=a.useState(!1),[V,B]=a.useState("Ready to start"),[R,q]=a.useState(""),H=a.useRef(0);a.useEffect(()=>(c(W),()=>c(!1)),[W,c]),a.useEffect(()=>{if(!n)return;let Y=!0;async function re(){g(!0),x(null);try{const[xe,Se,D]=await Promise.all([fetch(`${uo}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${uo}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),ud(n)]),[ae,ge]=await Promise.all([xe.json(),Se.json()]);if(!Y)return;u(ae.success?ae.students||[]:[]),b(ge.success?ge.courses||[]:[]);const T=md(n);let h=[];D.success&&Array.isArray(D.events)&&(h=D.events.map(cd).filter(Boolean));let m=ld(h,T);if(D.success&&h.length===0&&T.length>0){let $=!1;for(const ne of T)(await dd(n,ne)).success||($=!0);$&&x("Some older sessions could not be uploaded; they remain on this device.");const O=await ud(n);if(Y&&O.success&&Array.isArray(O.events)){const ne=O.events.map(cd).filter(Boolean);m=ld(ne,T)}}D.success||x("Server study log unavailable — showing on-device history only."),Y&&(w(m),hd(n,m))}catch{Y&&(u([]),b([]),w(md(n)),x("Could not reach server — showing on-device history only."))}finally{Y&&g(!1)}}return re(),()=>{Y=!1}},[n]);const Q=a.useMemo(()=>cr(l,{userEmail:n,studentId:i,studentDatabaseId:o}),[l,n,i,o]),ce=a.useMemo(()=>Js(p,Q),[p,Q]);a.useEffect(()=>{if(ce.length===0){q("");return}q(Y=>{const re=new Set(ce.map(xe=>String(xe.id)));return Y&&re.has(Y)?Y:String(ce[0].id)})},[ce]);const oe=Ci(A),ie=W||L<oe?(oe-L)/oe*100:0,ue=a.useMemo(()=>od(new Date),[]),N=a.useMemo(()=>t2(new Date),[]),M=a.useMemo(()=>{const Y=k=>k.durationMinutes||25,re=y.filter(k=>od(k.at)===ue),xe=re.filter(k=>(k.durationMinutes||25)>=25).length,Se=re.reduce((k,te)=>k+Y(te),0),D=y.filter(k=>k.at.getTime()>=N),ae=D.reduce((k,te)=>k+Y(te),0),ge=ae/7,h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(k=>({day:k,minutes:0}));D.forEach(k=>{const te=k.at.getDay();h[te].minutes+=Y(k)});const m=Math.max(30,...h.map(k=>k.minutes),1),$=new Map;D.forEach(k=>{const te=k.courseCode||"Module";$.set(te,($.get(te)||0)+Y(k))});const O=Array.from($.entries()).map(([k,te])=>({code:k,minutes:Math.round(te)})).sort((k,te)=>te.minutes-k.minutes);O.length===0&&ce.slice(0,8).forEach(k=>{O.push({code:k.course_code||"Course",minutes:0})});const ne=Math.max(30,...O.map(k=>k.minutes),1);return{todayPomos:xe,studyMinutesToday:Se,weekMinutesTotal:ae,dailyAvgMinutes:ge,byDow:h,maxDayMinutes:m,moduleRows:O,maxModMinutes:ne}},[y,ue,N,ce]),ee=a.useCallback(Y=>{const re=Math.floor(Number(Y)||0);if(re<1)return;const xe=Math.min(240,re),Se=ce.find(ae=>String(ae.id)===String(R));if(!Se||!R)return;const D={at:new Date,courseId:Number(Se.id),courseCode:Se.course_code||"",courseName:Se.course_name||"",kind:"pomodoro",durationMinutes:xe};w(ae=>{const ge=Date.now(),T=ae[ae.length-1];if(T&&ge-T.at.getTime()<900)return ae;const h=[...ae,D];return hd(n,h),dd(n,D).then(m=>{m!=null&&m.success?x(null):x(m!=null&&m.message?`Could not save to server: ${m.message} (session kept on this device).`:"Could not save to server (session kept on this device).")}),h})},[ce,R,n]),j=a.useCallback(Y=>{if(Y<0||Y>Ls)return;const xe=Ls-Y-H.current,Se=Math.floor(xe/60);Se<1||(ee(Se),H.current+=Se*60)},[ee]);a.useEffect(()=>{if(!W)return;const Y=setInterval(()=>{z(re=>re<=1?(clearInterval(Y),0):re-1)},1e3);return()=>clearInterval(Y)},[W]),a.useEffect(()=>{!W||L!==0||(F(!1),A==="pomodoro"?(j(0),H.current=0,B("Session complete — take a break when you are ready."),_("short"),z(Vm)):(B("Break finished. Ready for another focus block?"),_("pomodoro"),z(Ls)))},[W,L,A,j]);const E=Y=>{F(!1),A==="pomodoro"&&(j(L),H.current=0),_(Y),z(Ci(Y)),B("Ready to start")},C=()=>{F(!1),A==="pomodoro"&&(j(L),H.current=0),z(Ci(A)),B("Ready to start")},X=()=>{if(W){A==="pomodoro"&&j(L),F(!1),B("Paused");return}if(A==="pomodoro"&&!R){B("Select a module to start tracking.");return}L<=0&&z(Ci(A)),F(!0),B(A==="pomodoro"?"Stay focused…":"Relax and recharge…")},J={background:e?"#262626":"#fff",border:`1px solid ${e?"#404040":"#e5e7eb"}`,borderRadius:8,fontSize:12,color:e?"#e5e7eb":"#111827"},G=e?"#9ca3af":"#6b7280",me=e?"#404040":"#e5e7eb",ye=A==="pomodoro"&&!R,he=Sd(M.maxDayMinutes),ze=he[he.length-1]||30,ve=Sd(M.maxModMinutes),fe=ve[ve.length-1]||30;return r("div",{css:s`
        width: 100%;
        padding-top: ${W?"2.55rem":"0"};
        transition: padding-top 0.2s ease;
      `,children:[W?t("div",{css:D2,role:"status","aria-live":"polite",children:r("div",{css:z2,children:[t($m,{style:{width:17,height:17,flexShrink:0},"aria-hidden":!0}),t("span",{css:T2,children:"Do Not Disturb is on"}),t("span",{css:E2,children:"Notifications, pop-ups, and non-essential banners are simulated as off. Prototype only — not your device settings; ends when you pause, reset, or finish."})]})}):null,t("h1",{css:n2(e),children:"Pomodoro Study Timer"}),t("p",{css:r2(e),children:"Track your study sessions and stay focused"}),P&&!W?t("div",{css:N2(e),role:"status",children:P}):null,v?t("p",{css:L2(e),children:"Loading your modules…"}):r(rt,{children:[r("div",{css:s2,children:[r("section",{css:l2(e),children:[r("div",{css:d2(e),children:[r("button",{type:"button",css:ga(e,A==="pomodoro"),onClick:()=>E("pomodoro"),children:[t(ip,{"aria-hidden":!0}),"Pomodoro"]}),r("button",{type:"button",css:ga(e,A==="short"),onClick:()=>E("short"),children:[t(qf,{"aria-hidden":!0}),"Short Break"]}),r("button",{type:"button",css:ga(e,A==="long"),onClick:()=>E("long"),children:[t(rr,{"aria-hidden":!0}),"Long Break"]})]}),t("label",{css:u2(e),htmlFor:"study-timer-module",children:"Select module"}),t("select",{id:"study-timer-module",css:m2(e),value:R,onChange:Y=>q(Y.target.value),children:ce.length===0?t("option",{value:"",children:"No modules linked"}):ce.map(Y=>t("option",{value:String(Y.id),children:[Y.course_code||"Course",Y.course_name].filter(Boolean).join(" — ")},Y.id))}),t("div",{css:h2(e),children:j2(L)}),t("div",{css:gd(e),children:t("div",{css:bd(ie)})}),t("p",{css:f2(e),children:V}),r("div",{css:p2,children:[r("button",{type:"button",css:g2,onClick:X,disabled:ye&&!W,children:[W?t(ep,{"aria-hidden":!0}):t(Xf,{"aria-hidden":!0}),W?"Pause":"Start"]}),r("button",{type:"button",css:b2(e),onClick:C,children:[t(vc,{"aria-hidden":!0}),"Reset"]})]}),r("div",{css:y2(e),children:[t(lt,{"aria-hidden":!0}),M.todayPomos," Pomodoro",M.todayPomos===1?"":"s"," completed today"]})]}),r("div",{css:i2,children:[r("section",{css:Zs(e),children:[t("h2",{css:ba(e),children:"Today's Progress"}),r("div",{css:yd,children:[r("div",{css:wd,children:[t("span",{css:vd(e),children:"Study time"}),r("span",{css:xd(e),children:[Math.round(M.studyMinutesToday),"m"]})]}),t("div",{css:gd(e),children:t("div",{css:bd(Math.min(100,M.studyMinutesToday/e2*100))})})]}),r("div",{css:yd,children:[r("div",{css:wd,children:[t("span",{css:vd(e),children:"Pomodoros"}),t("span",{css:xd(e),children:M.todayPomos})]}),t("div",{css:w2,children:Array.from({length:M5},(Y,re)=>t("div",{css:v2(e,re<M.todayPomos)},re))})]})]}),r("section",{css:o2(e),children:[t("h2",{css:ba(e),children:"Weekly Summary"}),r("div",{css:x2(e),children:[r("span",{css:s`display:inline-flex;align-items:center;gap:.45rem;`,children:[t(lt,{"aria-hidden":!0}),"Total (this week)"]}),r("span",{children:[Math.round(M.weekMinutesTotal),"m"]})]}),r("div",{css:S2(e),children:[r("span",{css:s`display:inline-flex;align-items:center;gap:.45rem;`,children:[t(up,{"aria-hidden":!0}),"Daily average"]}),r("span",{children:[Math.round(M.dailyAvgMinutes),"m"]})]})]})]})]}),r("div",{css:a2,children:[r("div",{css:c2,children:[r("section",{css:fd(e),children:[r("h2",{css:$2(e),children:[t(Ds,{"aria-hidden":!0}),"This Week's Study Time"]}),t("div",{css:pd,children:t(xt,{width:"100%",height:"100%",children:r(zn,{data:M.byDow,margin:{top:10,right:12,left:0,bottom:8},children:[t(Nt,{strokeDasharray:"3 3",stroke:me,vertical:!1}),t(Dt,{dataKey:"day",tick:{fill:G,fontSize:12}}),t(zt,{domain:[0,ze],tick:{fill:G,fontSize:11},width:40,ticks:he,tickFormatter:Y=>`${Math.round(Y)}m`}),t(Ct,{formatter:Y=>[`${typeof Y=="number"?Math.round(Y):Y} min`,"Study time"],contentStyle:J}),t(It,{dataKey:"minutes",fill:xn,radius:[6,6,0,0],maxBarSize:48})]})})})]}),r("section",{css:fd(e),children:[t("h2",{css:ba(e),children:"Study time by module"}),t("div",{css:pd,children:t(xt,{width:"100%",height:"100%",children:r(js,{data:M.moduleRows,margin:{top:8,right:8,left:0,bottom:36},children:[t(Nt,{strokeDasharray:"3 3",stroke:me}),t(Dt,{dataKey:"code",tick:{fill:G,fontSize:11},interval:0,angle:-12,textAnchor:"end",height:48}),t(zt,{domain:[0,fe],tick:{fill:G,fontSize:11},width:40,ticks:ve,tickFormatter:Y=>`${Math.round(Y)}m`}),t(Ct,{formatter:Y=>[`${typeof Y=="number"?Math.round(Y):Y} min`,"This week"],contentStyle:J}),t(Qn,{type:"monotone",dataKey:"minutes",stroke:id,strokeWidth:2,dot:{r:4,fill:id}})]})})})]})]}),r("section",{css:C2(e),children:[t("h2",{css:_2(e),children:"Pomodoro Tips"}),r("div",{css:A2,children:[r("div",{css:$i(e),children:[t(Vn,{"aria-hidden":!0}),t("span",{children:"Work for 25 minutes without distractions"})]}),r("div",{css:$i(e),children:[t(Vn,{"aria-hidden":!0}),t("span",{children:"Take 5-minute breaks between sessions"})]}),r("div",{css:$i(e),children:[t(Vn,{"aria-hidden":!0}),t("span",{children:"After 4 pomodoros, take a 15-minute break"})]}),r("div",{css:$i(e),children:[t(Vn,{"aria-hidden":!0}),t("span",{children:"Select a module to track your study time"})]})]})]})]})]})]})}const P2="/strack/".replace(/\/$/,""),B2=s`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,O2=s`
  margin: 0;
  font-size: clamp(1.65rem, 2.5vw, 2.1rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
`,$d=e=>s`
  border: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem 1.05rem;
  background: ${e?"#171717":"#fff"};
`,I2=s`
  margin: 0 0 0.65rem;
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.25;
`,k2=e=>s`
  margin: 0 0 0.85rem;
  font-size: 0.82rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,F2=e=>s`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  max-height: min(72vh, 720px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  border: 1px solid ${e?"#2a2a2a":"#e5e7eb"};
  border-radius: 10px;
  scrollbar-width: thin;
  scrollbar-color: ${e?"#525252 #171717":"#bdbdbd #f3f4f6"};

  @media (max-width: 767.98px) {
    max-height: min(62vh, 520px);
  }
`,U2=s`
  width: 100%;
  min-width: 480px;
  border-collapse: collapse;
  font-size: 0.9rem;
`,ss=e=>s`
  text-align: left;
  padding: 0.55rem 0.65rem;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#111":"#f9fafb"};
  border-bottom: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
`,is=e=>s`
  padding: 0.55rem 0.65rem;
  border-bottom: 1px solid ${e?"#262626":"#f3f4f6"};
  vertical-align: middle;
`,os=e=>s`
  padding: 0.65rem 0.65rem;
  border-top: 2px solid ${e?"#3f3f3f":"#e5e7eb"};
  vertical-align: middle;
  background: ${e?"#141414":"#fafafa"};
  font-weight: 800;
  font-size: 0.9rem;
`,ya=(e,n)=>s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  padding: 0.15rem 0.45rem;
  border-radius: 8px;
  font-weight: 900;
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
  color: ${e==="—"?n?"#e5e5e5":"#374151":"#fff"};
  background: ${e==="—"?n?"#404040":"#d1d5db":W2(e)};
`,wa=s`
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,_i=e=>s`
  margin: 0;
  font-size: 0.92rem;
  color: ${e?"#9ca3af":"#6b7280"};
`;function va(e){const n=Number(e);return Number.isFinite(n)?`${Math.round(n*10)/10}/100`:"0/100"}function xc(e){const n=Number(e);return Number.isFinite(n)?n>=70?"D":n>=60?"M":n>=40?"P":"F":"—"}function W2(e){switch(e){case"D":return"#22c55e";case"M":return"#38bdf8";case"P":return"#f59e0b";case"F":return"#f87171";default:return"#71717a"}}function Zm(e){const n=new Map;return Array.isArray(e)&&e.forEach(i=>{const o=String(i.assessment_id??"");if(!o)return;const c=Number(i.weight);Number.isFinite(c)&&c>0&&n.set(o,c)}),n}function H2(e){if(!Array.isArray(e))return null;let n=0;return e.forEach(i=>{const o=Number(i.weight);Number.isFinite(o)&&o>0&&(n+=o)}),Math.round(n*10)/10}function Y2(e,n){const i=Zm(n),o=i.size>0;let c=0,l=0;for(const g of e){if(String(g.mark_status||"")==="not_marked")continue;const y=String(g.assessment_id||""),w=Number(g.score??0),P=i.get(y);P==null||!Number.isFinite(P)||P<=0||(c+=w*P,l+=P)}if(o&&l>0){const g=Math.round(c/l*10)/10;return{avg:g,band:xc(g),mode:"weighted"}}const u=e.filter(g=>String(g.mark_status||"")!=="not_marked");if(!u.length)return null;const b=u.reduce((g,y)=>g+Number(y.score??0),0)/u.length,v=Math.round(b*10)/10;return{avg:v,band:xc(v),mode:"simple"}}function K2(e,n){const i=e.get(String(n||""));return i==null||!Number.isFinite(i)?"—":`${Math.round(Number(i)*10)/10}%`}function Cd(e){const n=Number(e);return Number.isFinite(n)?n>=70?"#22c55e":n>=60?"#38bdf8":n>=40?"#f59e0b":"#f87171":"#71717a"}function V2({darkMode:e,userEmail:n}){const[i,o]=a.useState(!0),[c,l]=a.useState(""),[u,p]=a.useState([]);a.useEffect(()=>{if(!n){o(!1),p([]);return}let v=!1;return(async()=>{o(!0),l("");try{const y=await(await fetch(`${P2}/backend/assessment_scores.php?user_email=${encodeURIComponent(n)}&t=${Date.now()}`,{cache:"no-store"})).json().catch(()=>({}));if(v)return;if(!y.success){l(String(y.error||"Could not load grades.")),p([]);return}const w=Array.isArray(y.bars_by_course)?y.bars_by_course:[];p(w)}catch{v||(l("Could not reach the server."),p([]))}finally{v||o(!1)}})(),()=>{v=!0}},[n]);const b=a.useMemo(()=>[...u].sort((v,g)=>String(v.course_code||"").localeCompare(String(g.course_code||""),void 0,{sensitivity:"base"})),[u]);return r("div",{css:B2,children:[r("div",{css:s`display:flex;align-items:center;gap:0.55rem;`,children:[t(jo,{"aria-hidden":!0,style:{width:"1.85rem",height:"1.85rem",color:"#6366f1",flexShrink:0}}),t("h1",{css:O2,children:"Assignments & grades"})]}),i?t("p",{css:_i(e),children:"Loading…"}):c?t("p",{css:_i(e),children:c}):b.length===0?t("div",{css:$d(e),children:t("p",{css:_i(e),style:{margin:0},children:"No grades have been published for you yet. When your module leaders save marks in STRACK, they will show up here grouped by module."})}):b.map(v=>{const g=Array.isArray(v.marks)?v.marks:[],y=Array.isArray(v.assessment_weights)?v.assessment_weights:[],w=Zm(y),P=H2(y),x=Y2(g,y),A=[v.course_code,v.course_name].filter(Boolean).join(" — ")||"Module";return r("article",{css:$d(e),children:[t("h2",{css:I2,children:A}),r("p",{css:k2(e),children:[g.length," assessment",g.length===1?"":"s",P!=null&&P>0?` · Weights total ${P}%`:"",x!=null?` · Module overall ${va(x.avg)} (${x.band})${x.mode==="simple"?" — simple average (weights not published yet)":""}`:g.length>0?" · Complete at least one assessment to see module overall":""]}),g.length===0?t("p",{css:_i(e),style:{margin:0},children:"No individual marks listed for this module."}):t("div",{css:F2(e),children:r("table",{css:U2,children:[t("thead",{children:r("tr",{children:[t("th",{css:ss(e),children:"Assessment"}),t("th",{css:ss(e),children:"Weight"}),t("th",{css:ss(e),children:"Status"}),t("th",{css:ss(e),children:"Your mark"}),t("th",{css:ss(e),children:"Band"})]})}),t("tbody",{children:g.map((_,L)=>{const z=String(_.label||_.assessment_id||"Assessment").trim(),W=String(_.assessment_id||""),F=String(_.mark_status||"")==="not_marked",V=F?"—":xc(_.score);return r("tr",{children:[t("td",{css:is(e),children:t("span",{css:s`font-weight:600;`,children:z})}),t("td",{css:is(e),children:t("span",{css:s`
                                  font-weight: 700;
                                  font-variant-numeric: tabular-nums;
                                  color: ${e?"#d4d4d4":"#374151"};
                                `,children:K2(w,W)})}),t("td",{css:is(e),children:t("span",{css:s`
                                  font-weight: 700;
                                  font-size: 0.85rem;
                                  color: ${F?e?"#a3a3a3":"#6b7280":"#059669"};
                                `,children:F?"Not marked":"Completed"})}),t("td",{css:is(e),children:F?t("span",{css:[wa,s`color: ${e?"#737373":"#9ca3af"};`],children:"—"}):t("span",{css:[wa,s`color: ${Cd(_.score)};`],children:va(_.score)})}),t("td",{css:is(e),children:t("span",{css:ya(V,e),children:V})})]},`${v.course_id}-${W}-${L}`)})}),t("tfoot",{children:r("tr",{children:[t("td",{css:os(e),children:"Module overall"}),t("td",{css:os(e),children:P!=null&&P>0?`${P}%`:"—"}),t("td",{css:os(e)}),t("td",{css:os(e),children:x!=null?t("span",{css:[wa,s`color: ${Cd(x.avg)};`],children:va(x.avg)}):t("span",{css:s`color: ${e?"#737373":"#9ca3af"};`,children:"—"})}),t("td",{css:os(e),children:x!=null?t("span",{css:ya(x.band,e),children:x.band}):t("span",{css:ya("—",e),children:"—"})})]})})]})})]},v.course_id)})]})}const xa="/strack/".replace(/\/$/,""),G2="#6366f1",J2=s`
  position: relative;
`,Z2=(e,n)=>s`
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
  cursor: ${n?"not-allowed":"pointer"};
  opacity: ${n?.48:1};
  &:hover {
    background: ${n?"transparent":e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }
`,q2=s`
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
`,X2=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,Q2=s`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,M2=s`
  border: none;
  background: transparent;
  color: ${G2};
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
  padding: 0;
`,ey=s`
  max-height: 360px;
  overflow: auto;
`,Sa=(e,n)=>s`
  padding: 0.7rem 0.85rem;
  border-bottom: 1px solid ${e?"#303030":"#f3f4f6"};
  background: ${n?e?"rgba(99,102,241,0.12)":"#eef2ff":"transparent"};
`,ty=s`
  margin: 0;
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.3;
`,$a=e=>s`
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: ${e?"#d1d5db":"#4b5563"};
  line-height: 1.35;
`,ny=e=>s`
  margin: 0.3rem 0 0;
  font-size: 0.72rem;
  color: ${e?"#9ca3af":"#6b7280"};
`;function ry(e){const n=new Date(e);if(Number.isNaN(n.getTime()))return"";const i=Date.now()-n.getTime(),o=Math.floor(i/6e4);if(o<1)return"just now";if(o<60)return`${o}m ago`;const c=Math.floor(o/60);if(c<24)return`${c}h ago`;const l=Math.floor(c/24);return l<7?`${l}d ago`:n.toLocaleDateString()}const sy=(e,n)=>s`
  position: absolute;
  top: calc(100% + 0.5rem);
  ${n==="sidebar"?"left: calc(100% + 0.6rem);":"right: 0;"}
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
`;function mo({darkMode:e,userEmail:n,placement:i="default"}){const{simulatedDnd:o}=Km(),c=a.useRef(null),[l,u]=a.useState(!1),[p,b]=a.useState(!1),[v,g]=a.useState([]),[y,w]=a.useState(0),P=async()=>{if(!n){g([]),w(0);return}b(!0);try{const L=await(await fetch(`${xa}/backend/notifications.php?email=${encodeURIComponent(n)}&limit=40`,{cache:"no-store"})).json();L.success&&(g(Array.isArray(L.notifications)?L.notifications:[]),w(Number(L.unread_count)||0))}catch{g([]),w(0)}finally{b(!1)}};a.useEffect(()=>{o&&u(!1)},[o]),a.useEffect(()=>{if(!n||o)return;P();const _=window.setInterval(P,45e3);return()=>window.clearInterval(_)},[n,o]),a.useEffect(()=>{!l||o||P()},[l,o]),a.useEffect(()=>{const _=L=>{c.current&&(c.current.contains(L.target)||u(!1))};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]);const x=async _=>{try{await fetch(`${xa}/backend/notifications.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,id:_})})}catch{}g(L=>L.map(z=>z.id===_?{...z,is_read:!0}:z)),w(L=>Math.max(0,L-1))},A=async()=>{try{await fetch(`${xa}/backend/notifications.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,mark_all:!0})})}catch{}g(_=>_.map(L=>({...L,is_read:!0}))),w(0)};return r("div",{css:J2,ref:c,children:[r("button",{type:"button",css:Z2(e,o),onClick:()=>{o||u(_=>!_)},"aria-label":o?"Notifications (Do Not Disturb — panel disabled)":"Notifications",title:o?"Notifications are simulated as muted while the study timer runs.":"Notifications",children:[o?t($m,{style:{width:22,height:22},"aria-hidden":!0}):t(dp,{style:{width:22,height:22},"aria-hidden":!0}),!o&&y>0?t("span",{css:q2,children:y>9?"9+":y}):null]}),l&&!o?r("div",{css:sy(e,i),children:[r("div",{css:X2(e),children:[t("h3",{css:Q2,children:"Notifications"}),t("button",{type:"button",css:M2,onClick:A,disabled:y===0,children:"Mark all read"})]}),t("div",{css:ey,children:p?t("div",{css:Sa(e,!1),children:t("p",{css:$a(e),children:"Loading..."})}):v.length===0?t("div",{css:Sa(e,!1),children:t("p",{css:$a(e),children:"No notifications yet."})}):v.map(_=>r("button",{type:"button",css:[Sa(e,!_.is_read),s`
                      width: 100%;
                      text-align: left;
                      border: none;
                      cursor: pointer;
                      color: inherit;
                    `],onClick:()=>{_.is_read||x(_.id)},children:[t("p",{css:ty,children:_.title||"Notification"}),t("p",{css:$a(e),children:_.message||""}),t("p",{css:ny(e),children:ry(_.created_at)})]},_.id))})]}):null]})}const iy="(min-width: 768px)",oy="(max-width: 767.98px)";function Gc(){const[e,n]=a.useState(!1),i=a.useCallback(()=>n(!1),[]);return a.useEffect(()=>{const o=window.matchMedia(iy),c=()=>{o.matches&&n(!1)};return o.addEventListener("change",c),()=>o.removeEventListener("change",c)},[]),a.useEffect(()=>{const o=window.matchMedia(oy);if(e&&o.matches){const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}}},[e]),{mobileMenuOpen:e,setMobileMenuOpen:n,closeMenu:i}}const ho="0.35s ease",Jc=e=>s`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${e?"#0f0f0f":"#F8F8F8"};
  display: flex;
  flex-direction: column;
  transition: background-color ${ho};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Zc=(e,n)=>s`
  background-color: ${e?"#1a1a1a":"#FFFFFF"};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${e?"none":"0 2px 12px rgba(0,0,0,0.06)"};
  transition:
    background-color ${ho},
    box-shadow ${ho},
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
    transform: translateX(${n?"0":"-100%"});
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
`,qc=e=>s`
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
`,Xc=s`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,Qc=e=>s`
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
`,Mc=e=>s`
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
`,el=e=>s`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e?"#ffffff":"#111827"};
  min-width: 0;
`,tl=e=>s`
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
`,nl=e=>s`
  flex: 1;
  min-height: 0;
  min-width: 0;
  padding: 0.65rem max(0.75rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(0.75rem, env(safe-area-inset-left));
  color: ${e?"#f3f4f6":"#1a1a1a"};
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  transition: color ${ho};

  @media (min-width: 768px) {
    padding: max(1rem, env(safe-area-inset-top)) 2rem 2rem 2rem;
  }
`,as=e=>s`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  max-height: min(72vh, 72dvh, 800px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  box-shadow: ${e?"none":"0 1px 3px rgba(0, 0, 0, 0.06)"};
  scrollbar-width: thin;
  scrollbar-color: ${e?"#525252 #262626":"#bdbdbd #f3f4f6"};

  @media (max-width: 767.98px) {
    max-height: min(62vh, 62dvh, 560px);
  }
`,cs="/strack/".replace(/\/$/,""),nn="0.35s ease",ay=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,cy=s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,ly=e=>s`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${nn};
  }
`,dy=e=>s`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${nn};
`,_d=e=>s`
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
`,uy=s`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`,my=s`
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
`,hy=s`
  flex: 1;
  min-width: 0;
`,fy=e=>s`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${nn};
`,py=e=>s`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${nn};
`,gy=e=>s`
  background: ${e?"#262626":"rgba(124,58,237,0.08)"};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${nn};
`,by=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,yy=e=>s`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6d28d9"};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${nn};
`,wy=e=>s`
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#3b82f6":"#7c3aed"};
  transition: color ${nn};
`,vy=s`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,xy=(e,n)=>s`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${n?e?"rgba(124, 58, 237, 0.4)":"#7c3aed":"transparent"};
  color: ${n?"#fff":e?"#d1d5db":"#1a1a1a"};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${nn}, color ${nn};

  &:hover {
    background: ${n?e?"rgba(124, 58, 237, 0.5)":"#6d28d9":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,Sy=s`
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
`,$y=(e,n,i)=>s`
  max-width: ${i?"min(100%, 1280px)":n?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`;s`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;s`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;const Cy=[{id:"dashboard",label:"Dashboard",icon:Eo},{id:"studyTimer",label:"Study timer",icon:Qf},{id:"courses",label:"Courses",icon:St},{id:"grades",label:"Grades",icon:jo},{id:"announcements",label:"Announcements",icon:En},{id:"classmates",label:"Classmates",icon:kt},{id:"calendar",label:"Calendar",icon:wn},{id:"leaderboard",label:"Leaderboard",icon:vn},{id:"badges",label:"Badges",icon:Er},{id:"rewards",label:"Rewards",icon:ar},{id:"profile",label:"Profile",icon:nr}];function Ad(e){if(!e||typeof e!="string")return"?";const n=e.trim().split(/\s+/);return n.length>=2?(n[0][0]+n[n.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function _y(e){const n=String(e||"").trim();if(/^STU/i.test(n))return n.toUpperCase();if(/^s\d+$/i.test(n)){const i=Number(n.slice(1));if(Number.isFinite(i))return`STU${String(i).padStart(3,"0")}`}return/^\d+$/.test(n)?`STU${String(Number(n)).padStart(3,"0")}`:"STU001"}function Ld(e){return`strack_profile_extra_${(e||"").toLowerCase()}`}function Nd(e){const n=String(e||"").trim().replace(/\s+/g," ");return n||"+44 7700 900123"}function Ay(e){const n=Number(e);return Number.isFinite(n)?n.toFixed(2):"—"}function Ly(e){const n=Number(e);return Number.isFinite(n)?`${Math.round(n*10)/10}%`:"—"}function Ny({darkMode:e,onToggleDarkMode:n}){const i=Hs(),{mobileMenuOpen:o,setMobileMenuOpen:c,closeMenu:l}=Gc(),[u,p]=a.useState("dashboard"),[b,v]=a.useState(0),[g,y]=a.useState(0),[w,P]=a.useState(""),[x,A]=a.useState("STU001"),[_,L]=a.useState(null),[z,W]=a.useState(!1),[F,V]=a.useState(""),[B,R]=a.useState({phone:"+44 7700 900123",address:"123 University Avenue, Newcastle",bio:"Computer Science student passionate about software development."}),[q,H]=a.useState(B),[Q,ce]=a.useState(null),[oe,ie]=a.useState(!1),[ue,N]=a.useState(null),[M,ee]=a.useState(null),[j,E]=a.useState(null),[C,X]=a.useState(0);let J="Student";try{const Y=localStorage.getItem("strack_user");if(Y){const re=JSON.parse(Y);re!=null&&re.name&&(J=re.name)}}catch{}const G=a.useMemo(()=>{const Y=Q==null?void 0:Q.full_name;return Y!=null&&String(Y).trim()!==""?String(Y).trim():J},[Q,J]);a.useEffect(()=>{try{const Y=localStorage.getItem("strack_user");if(Y){const re=JSON.parse(Y);if(re!=null&&re.email&&P(re.email),re!=null&&re.id&&A(_y(re.id)),(re==null?void 0:re.student_db_id)!=null&&Number.isFinite(Number(re.student_db_id)))L(Number(re.student_db_id));else if((re==null?void 0:re.id)!=null){const xe=/^s(\d+)$/i.exec(String(re.id).trim());L(xe?Number(xe[1]):null)}else L(null)}}catch{}},[]),a.useEffect(()=>{if(w)try{const Y=localStorage.getItem(Ld(w));if(!Y)return;const re=JSON.parse(Y),xe={phone:Nd(re==null?void 0:re.phone),address:String((re==null?void 0:re.address)||B.address),bio:String((re==null?void 0:re.bio)||B.bio)};R(xe),H(xe)}catch{}},[w]);const me=a.useCallback(async()=>{if(w)try{const re=await(await fetch(`${cs}/backend/student_points.php?email=${encodeURIComponent(w)}`,{cache:"no-store"})).json();re.success&&typeof re.points=="number"&&v(re.points)}catch{}},[w]);a.useEffect(()=>{me()},[me]),a.useEffect(()=>{if(!w){ce(null),N(null),ee(null),E(null);return}let Y=!0;return(async()=>{ie(!0);try{const[re,xe,Se,D]=await Promise.all([fetch(`${cs}/backend/students.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${cs}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${cs}/backend/student_badges.php?user_email=${encodeURIComponent(w)}&t=${Date.now()}`,{cache:"no-store"}),fetch(`${cs}/backend/leaderboard.php?scope=public&viewer_email=${encodeURIComponent(w)}&t=${Date.now()}`,{cache:"no-store"})]),[ae,ge,T,h]=await Promise.all([re.json(),xe.json(),Se.json(),D.json()]);if(!Y)return;const m=ae.success?ae.students||[]:[],$=cr(m,{userEmail:w,studentId:x,studentDatabaseId:_});ce($);const O=ge.success?ge.courses||[]:[],ne=$?Js(O,$):[];N(ne.length);const k=T.success&&Array.isArray(T.awards)?T.awards:[],te=Number(($==null?void 0:$.pomodoro_sessions_count)||0);if(ee(Hm(k,te)),h.success&&Array.isArray(h.entries)){const Ce=h.entries.find($e=>$e.is_me);E(Ce&&typeof Ce.rank=="number"?Ce.rank:null)}else E(null);await me()}catch{Y&&(ce(null),N(null),ee(null),E(null))}finally{Y&&ie(!1)}})(),()=>{Y=!1}},[w,x,_,me,C]);const ye=()=>{try{localStorage.removeItem("strack_user")}catch{}i("/")},he=()=>{H(B),V(""),W(!0)},ze=()=>{H(B),V(""),W(!1)},ve=()=>{const Y=Nd(q.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(Y.replace(/\s+/g," "))){V("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const xe={phone:Y,address:(q.address||"").trim()||B.address,bio:(q.bio||"").trim()||B.bio};R(xe),H(xe),V(""),W(!1);try{localStorage.setItem(Ld(w),JSON.stringify(xe))}catch{}},fe=Y=>{p(Y),l()};return r(X5,{children:[r("div",{css:Jc(e),children:[o?t("button",{type:"button",css:qc(e),onClick:l,"aria-label":"Close menu"}):null,r("aside",{css:Zc(e,o),children:[r("header",{css:ay,children:[r("div",{css:cy,children:[t("div",{css:ly(e),children:t(jr,{})}),t("span",{css:dy(e),children:"STRACK"})]}),r("div",{css:s`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[t(mo,{darkMode:e,userEmail:w,placement:"sidebar"}),t("button",{type:"button",css:_d(e),onClick:n,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?t(Tr,{}):t(rr,{})}),t("button",{type:"button",css:tl(e),onClick:l,"aria-label":"Close menu",children:t(Fe,{})})]})]}),r("div",{css:uy,children:[t("div",{css:my,children:Ad(G)}),r("div",{css:hy,children:[t("div",{css:fy(e),children:G}),t("div",{css:py(e),children:"Student"})]})]}),t("div",{css:gy(e),children:r("div",{css:by,children:[r("span",{css:yy(e),children:[t(lt,{})," Points"]}),t("span",{css:wy(e),children:b})]})}),t("nav",{css:vy,children:Cy.map(({id:Y,label:re,icon:xe})=>r("button",{css:xy(e,u===Y),onClick:()=>fe(Y),children:[t(xe,{}),re]},Y))}),r("button",{css:Sy,onClick:ye,children:[t(Uc,{}),"Logout"]})]}),r("div",{css:Xc,children:[r("header",{css:Qc(e),children:[t("button",{type:"button",css:Mc(e),onClick:()=>c(!0),"aria-label":"Open menu",children:t(Fc,{})}),t("span",{css:el(e),children:"STRACK"}),r("div",{css:s`display: inline-flex; align-items: center; gap: 0.3rem;`,children:[t(mo,{darkMode:e,userEmail:w}),t("button",{type:"button",css:_d(e),onClick:n,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?t(Tr,{}):t(rr,{})})]})]}),t("main",{css:nl(e),children:u==="rewards"?t(Hp,{darkMode:e,userEmail:w,points:b,onPointsChange:v}):r("div",{css:$y(e,u==="profile",u==="dashboard"||u==="studyTimer"||u==="calendar"||u==="courses"||u==="grades"||u==="announcements"||u==="classmates"||u==="leaderboard"||u==="badges"),children:[u==="dashboard"&&t(k5,{darkMode:e,userEmail:w,studentId:x,studentDatabaseId:_,userName:G,userPoints:b,onOpenAnnouncements:()=>fe("announcements")}),u==="studyTimer"&&t(R2,{darkMode:e,userEmail:w,studentId:x,studentDatabaseId:_}),u==="courses"&&t(l1,{darkMode:e,userEmail:w,studentId:x,studentDatabaseId:_}),u==="grades"&&t(V2,{darkMode:e,userEmail:w}),u==="announcements"&&t(Nb,{darkMode:e,userEmail:w}),u==="classmates"&&t(z1,{darkMode:e,userEmail:w,studentId:x,studentDatabaseId:_}),u==="calendar"&&t(vg,{darkMode:e,userEmail:w,studentId:x,studentDatabaseId:_}),u==="leaderboard"&&t(X1,{darkMode:e,userEmail:w}),u==="badges"&&t(Yg,{darkMode:e,userEmail:w,studentId:x,studentDatabaseId:_,badgesRefreshKey:g}),u==="profile"&&r("div",{css:Am(e),children:[r("header",{css:Lm,children:[t("h1",{css:Nm(e),children:"My Profile"}),t("p",{css:Dm(e),children:"Manage your personal information and account details."})]}),t("section",{css:zm(e),children:r("div",{css:Tm,children:[r("div",{css:Em,children:[t("div",{css:Rm,children:Ad(G)}),r("div",{css:jm,children:[t("h2",{css:Pm,children:G}),r("div",{css:zs(e),children:["Student ID: ",(Q==null?void 0:Q.student_id)!=null&&String(Q.student_id).trim()!==""?String(Q.student_id).trim():x]}),t("div",{css:zs(e),children:Q&&[Q.department,Q.degree].filter(Y=>Y&&String(Y).trim()!=="").join(" · ")||"—"}),t("div",{css:zs(e),children:Q&&[Q.year&&`Year ${String(Q.year).trim()}`,Q.class_of&&`Class of ${String(Q.class_of).trim()}`].filter(Boolean).join(" · ")||"—"}),r("div",{css:Bm,children:[t("span",{css:Om,children:"Student"}),Q!=null&&Q.degree&&String(Q.degree).trim()!==""?t("span",{css:Im(e),children:String(Q.degree).trim()}):null]})]})]}),z?null:r("button",{type:"button",css:km,onClick:he,children:[t(yn,{"aria-hidden":!0}),"Edit Profile"]})]})}),r("section",{css:Yp,"aria-label":"Profile statistics",children:[r("article",{css:Gn(e),children:[r("div",{css:Jn,children:[t(ar,{"aria-hidden":!0}),t("span",{css:Zn,children:"Points"})]}),t("div",{css:qn,children:b}),t("div",{css:Xn(e),children:"Total earned"})]}),r("article",{css:Gn(e),children:[r("div",{css:Jn,children:[t(Er,{"aria-hidden":!0}),t("span",{css:Zn,children:"Badges"})]}),t("div",{css:qn,children:oe?"…":M??"—"}),t("div",{css:Xn(e),children:"Unlocked (incl. Pomodoro)"})]}),r("article",{css:Gn(e),children:[r("div",{css:Jn,children:[t(St,{"aria-hidden":!0}),t("span",{css:Zn,children:"Courses"})]}),t("div",{css:qn,children:oe?"…":ue??"—"}),t("div",{css:Xn(e),children:"Visible in portal"})]}),r("article",{css:Gn(e),children:[r("div",{css:Jn,children:[t(vn,{"aria-hidden":!0}),t("span",{css:Zn,children:"Rank"})]}),t("div",{css:qn,children:oe?"…":j!=null?`#${j}`:"—"}),t("div",{css:Xn(e),children:"University (by points)"})]})]}),r("section",{css:Wc(e),children:[t("h2",{css:Hc(e),children:"Personal Information"}),r("div",{css:Fm,children:[r("div",{css:gt,children:[t("span",{css:bt,children:"Full Name"}),z?t("input",{css:ao(e),value:G,readOnly:!0,"aria-readonly":"true"}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(nr,{"aria-hidden":!0})}),t("span",{css:Lt,children:G})]})]}),r("div",{css:gt,children:[t("span",{css:bt,children:"Email Address"}),z?t("input",{css:ao(e),value:(Q==null?void 0:Q.email)||w||"",readOnly:!0,"aria-readonly":"true"}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(Oc,{"aria-hidden":!0})}),t("span",{css:Lt,children:(Q==null?void 0:Q.email)||w||"—"})]})]}),Q?r(rt,{children:[r("div",{css:gt,children:[t("span",{css:bt,children:"Department"}),t("div",{css:At(e),children:t("span",{css:Lt,children:String(Q.department||"").trim()||"—"})})]}),r("div",{css:gt,children:[t("span",{css:bt,children:"GPA"}),t("div",{css:At(e),children:t("span",{css:Lt,children:Ay(Q.gpa)})})]}),r("div",{css:gt,children:[t("span",{css:bt,children:"Attendance (overall)"}),t("div",{css:At(e),children:t("span",{css:Lt,children:Ly(Q.attendance)})})]})]}):null,t("p",{css:s`
                        grid-column: 1 / -1;
                        margin: 0.25rem 0 0;
                        font-size: 0.8rem;
                        color: ${e?"#9ca3af":"#6b7280"};
                      `,children:"Phone, address, and bio are saved in this browser. Name, ID, and academic fields come from the university record."}),r("div",{css:gt,children:[t("span",{css:bt,children:"Phone Number"}),z?t("input",{css:tn(e),value:q.phone,onChange:Y=>H(re=>({...re,phone:Y.target.value})),placeholder:"+44 7700 900123"}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(Sm,{"aria-hidden":!0})}),t("span",{css:Lt,children:B.phone})]})]}),r("div",{css:gt,children:[t("span",{css:bt,children:"Address"}),z?t("input",{css:tn(e),value:q.address,onChange:Y=>H(re=>({...re,address:Y.target.value}))}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(Tn,{"aria-hidden":!0})}),t("span",{css:Lt,children:B.address})]})]}),r("div",{css:[gt,Vp],children:[t("span",{css:bt,children:"Bio"}),z?t("textarea",{css:Jp(e),value:q.bio,onChange:Y=>H(re=>({...re,bio:Y.target.value}))}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(En,{"aria-hidden":!0})}),t("span",{css:Lt,children:B.bio})]})]})]}),z?r("div",{css:Um(e),children:[t("button",{type:"button",css:ks(!0),onClick:ve,children:"Save"}),t("button",{type:"button",css:ks(!1),onClick:ze,children:"Cancel"})]}):null,F?t("div",{css:Yc(e),children:F}):null]}),t(Wm,{darkMode:e,userEmail:w})]})]})})]})]}),t(q5,{darkMode:e,userEmail:w,onAcknowledged:()=>{me(),y(Y=>Y+1),X(Y=>Y+1)}})]})}const ls="/strack",fo="#6366f1";function cn(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function Dd(e){const[n,i,o]=e.split("-").map(Number);return new Date(n,i-1,o)}function Ca(e){if(!e)return"";const[n,i]=e.split(":").map(Number),o=(n+11)%12+1,c=n>=12?"PM":"AM";return`${o}:${String(i).padStart(2,"0")} ${c}`}function Dy(e){const[n,i]=String(e||"00:00").split(":").map(Number),o=new Date;return o.setHours(n||0,i||0,0,0),o.setHours(o.getHours()+1),`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`}function zy(e){const n=e.getFullYear(),i=e.getMonth(),o=new Date(n,i,1),c=new Date(n,i+1,0),l=o.getDay(),u=[];for(let p=0;p<l;p++)u.push({type:"pad"});for(let p=1;p<=c.getDate();p++)u.push({type:"day",date:new Date(n,i,p)});for(;u.length%7!==0;)u.push({type:"pad"});return u}const Ty=s`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`,_a=e=>s`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
`,Ey=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`,jy=e=>s`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#f9fafb":"#111827"};
`,zd=e=>s`
  width: 32px;
  height: 32px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Td=s`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: none;
  border-radius: 8px;
  background: ${fo};
  color: #fff;
  padding: 0.45rem 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
`,Ry=s`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`,Py=e=>s`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
`,Ed=(e,n,i,o)=>s`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid ${n?fo:i?"#c7d2fe":e?"#404040":"#e5e7eb"};
  background: ${n?fo:o?e?"#1f1f1f":"#fafafa":i?e?"rgba(99,102,241,0.16)":"rgba(99,102,241,0.08)":e?"#262626":"#fff"};
  color: ${n?"#fff":"inherit"};
  padding: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${o?"default":"pointer"};
`,By=s`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`,Oy=e=>s`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${e?"#fff":"#111827"};
`,Iy=e=>s`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,jd=(e,n)=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-left: 4px solid ${n==="event"?"#ef4444":fo};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
`,Rd=s`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Aa=e=>s`
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
`,ky=s`
  display: grid;
  gap: 1rem;
`,Pd=e=>s`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.7rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Fy=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
`,Uy=e=>s`
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
  color: ${e?"#d1d5db":"#6b7280"};
`,Ai=e=>s`
  margin: 0.25rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
`,Wy=s`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,Hy=e=>s`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${e?"#1a1a1a":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
`,Yy=e=>s`
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ky=e=>s`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,Vy=e=>s`
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
`,Gy=s`
  padding: 1rem 1.1rem 1.2rem;
`,pr=e=>s`
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1px solid ${e?"#404040":"#d1d5db"};
  border-radius: 8px;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
`,gr=s`
  margin-bottom: 0.8rem;
`,br=e=>s`
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: ${e?"#d1d5db":"#374151"};
`,Jy=e=>s`
  padding: 0.85rem 1.1rem 1rem;
  border-top: 1px solid ${e?"#404040":"#e5e7eb"};
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
`,Zy=e=>s`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  background: transparent;
  color: inherit;
  border-radius: 8px;
  padding: 0.45rem 0.8rem;
  cursor: pointer;
`;function qy({darkMode:e,userEmail:n}){const[i,o]=a.useState(new Date),[c,l]=a.useState([]),[u,p]=a.useState([]),[b,v]=a.useState(!0),[g,y]=a.useState(cn(new Date)),[w,P]=a.useState(null),[x,A]=a.useState(!1),[_,L]=a.useState(!1),[z,W]=a.useState({course_id:"",title:"",description:"",due_date:cn(new Date),due_time:"23:59",location:"Online"}),F=a.useMemo(()=>{const j=new Date;return j.setHours(0,0,0,0),j},[]),V=a.useMemo(()=>{const j=i.getFullYear(),E=i.getMonth();return{from:cn(new Date(j,E,1)),to:cn(new Date(j,E+1,0))}},[i]);a.useEffect(()=>{let j=!0;async function E(){try{const[C,X]=await Promise.all([fetch(`${ls}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ls}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),J=await C.json(),G=await X.json();if(!j)return;const ye=(J.success?J.lecturers||[]:[]).find(he=>String(he.email||"").trim().toLowerCase()===String(n||"").trim().toLowerCase())||null;P(ye),p(G.success?G.courses||[]:[])}catch{if(!j)return;P(null),p([])}}return E(),()=>{j=!1}},[n]),a.useEffect(()=>{let j=!0;async function E(){v(!0);try{const X=await(await fetch(`${ls}/backend/timetable.php?from=${encodeURIComponent(V.from)}&to=${encodeURIComponent(V.to)}`)).json();if(!j)return;l(X.success?X.entries||[]:[])}catch{if(!j)return;l([])}finally{j&&v(!1)}}return E(),()=>{j=!1}},[V.from,V.to]);const B=a.useMemo(()=>{if(!w)return[];const j=String(w.lecturer_id||"").trim();return u.filter(E=>String(E.lecturer_id||"").trim()===j)},[u,w]),R=a.useMemo(()=>{if(!w)return[];const j=new Set(B.map(E=>Number(E.id)));return c.filter(E=>{if(E.entry_type==="class"){const J=Number(E.course_id);return Number.isFinite(J)&&J>0&&j.has(J)}const C=E.course_id!=null&&E.course_id!==""?Number(E.course_id):NaN;return!Number.isFinite(C)||C<=0||j.has(C)?!0:Array.isArray(E.lecturers)&&E.lecturers.some(J=>Number(J.id)===Number(w.id))})},[c,w,B]),q=a.useMemo(()=>{const j={};for(const E of R)j[E.entry_date]||(j[E.entry_date]=[]),j[E.entry_date].push(E);return Object.keys(j).forEach(E=>j[E].sort((C,X)=>C.start_time.localeCompare(X.start_time))),j},[R]),H=q[g]||[],Q=q[cn(F)]||[],ce=a.useMemo(()=>R.filter(E=>E.entry_date>cn(F)||E.entry_date===cn(F)&&E.start_time>="00:00:00").sort((E,C)=>`${E.entry_date} ${E.start_time}`.localeCompare(`${C.entry_date} ${C.start_time}`)).slice(0,5),[R,F]),oe=a.useMemo(()=>zy(i),[i]),ie=i.toLocaleDateString(void 0,{month:"long",year:"numeric"}),ue=Dd(g).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),N=()=>o(j=>new Date(j.getFullYear(),j.getMonth()-1,1)),M=()=>o(j=>new Date(j.getFullYear(),j.getMonth()+1,1)),ee=async()=>{if(!(!w||!z.course_id||!z.title.trim()||!z.due_date||!z.due_time)){L(!0);try{const j={entry_type:"event",course_id:Number(z.course_id),event_title:`Assignment Due: ${z.title.trim()}`,event_description:z.description.trim(),entry_date:z.due_date,start_time:z.due_time,end_time:Dy(z.due_time),room_location:(z.location||"").trim()||"Online",lecturer_account_ids:[Number(w.id)]},C=await(await fetch(`${ls}/backend/timetable.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)})).json();if(!C.success){window.alert(C.error||"Could not save assignment due date");return}A(!1),W(G=>({...G,title:"",description:"",due_time:"23:59",location:"Online"}));const J=await(await fetch(`${ls}/backend/timetable.php?from=${encodeURIComponent(V.from)}&to=${encodeURIComponent(V.to)}`,{cache:"no-store"})).json();l(J.success?J.entries||[]:[])}catch{window.alert("Network error while saving assignment.")}finally{L(!1)}}};return r("div",{css:Ty,children:[r("div",{css:_a(e),children:[r("div",{css:Ey,children:[t("h2",{css:jy(e),children:ie}),r("div",{style:{display:"inline-flex",gap:"0.35rem",alignItems:"center"},children:[r("button",{type:"button",css:Td,onClick:()=>A(!0),children:[t(Bc,{})," Assignment Due Date"]}),t("button",{type:"button",css:zd(e),onClick:N,"aria-label":"Previous month",children:t(kc,{})}),t("button",{type:"button",css:zd(e),onClick:M,"aria-label":"Next month",children:t(Ic,{})})]})]}),r("div",{css:Ry,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(j=>t("div",{css:Py(e),children:j},j)),oe.map((j,E)=>{if(j.type==="pad")return t("div",{css:Ed(e,!1,!1,!0)},`pad-${E}`);const C=cn(j.date),X=C===g,J=C===cn(F),G=(q[C]||[]).length>0;return r("div",{role:"button",tabIndex:0,css:Ed(e,X,J,!1),onClick:()=>y(C),onKeyDown:me=>me.key==="Enter"&&y(C),children:[t("div",{css:By,children:j.date.getDate()}),G?t("div",{css:Oy(X)}):t("div",{})]},C)})]}),r("h3",{css:Iy(e),children:["Events on ",ue]}),b?t("p",{css:Ai(e),children:"Loading events..."}):H.length===0?t("p",{css:Ai(e),children:"No events for this date."}):H.map(j=>r("div",{css:jd(e,j.entry_type),children:[t("p",{css:Rd,children:j.entry_type==="class"?j.course_name||j.course_code:j.event_title}),r("div",{css:Aa(e),children:[r("span",{children:[t(lt,{}),Ca(j.start_time)]}),(j.room_location||"").trim()?r("span",{children:[t(Tn,{}),j.room_location]}):null]})]},j.id))]}),r("div",{css:ky,children:[r("div",{css:_a(e),children:[r("h3",{css:Pd(e),children:[t(wn,{}),"Today's Schedule"]}),Q.length===0?t("p",{css:Ai(e),children:"No classes or deadlines today."}):Q.map(j=>r("div",{css:jd(e,j.entry_type),children:[t("p",{css:Rd,children:j.entry_type==="class"?j.course_name||j.course_code:j.event_title}),t("div",{css:Aa(e),children:r("span",{children:[t(lt,{}),Ca(j.start_time)]})})]},`today-${j.id}`))]}),r("div",{css:_a(e),children:[r("h3",{css:Pd(e),children:[t(lt,{}),"Upcoming"]}),ce.length===0?t("p",{css:Ai(e),children:"No upcoming entries."}):ce.map(j=>r("div",{css:Fy(e),children:[r("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[t("strong",{style:{fontSize:"0.92rem"},children:j.entry_type==="class"?j.course_name||j.course_code:j.event_title}),t("span",{css:Uy(e),children:j.entry_type==="class"?"Lecture":"Assignment"})]}),r("div",{css:Aa(e),style:{marginTop:"0.25rem"},children:[r("span",{children:[t(wn,{}),Dd(j.entry_date).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),r("span",{children:[t(lt,{}),Ca(j.start_time)]})]})]},`up-${j.id}`))]})]}),x?t("div",{css:Wy,onClick:()=>A(!1),children:r("div",{css:Hy(e),onClick:j=>j.stopPropagation(),children:[r("div",{css:Yy(e),children:[t("h3",{css:Ky(e),children:"Add Assignment Due Date"}),t("button",{type:"button",css:Vy(e),onClick:()=>A(!1),"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:Gy,children:[r("div",{css:gr,children:[t("label",{css:br(e),children:"Course"}),r("select",{css:pr(e),value:z.course_id,onChange:j=>W(E=>({...E,course_id:j.target.value})),children:[t("option",{value:"",children:"Select your course"}),B.map(j=>r("option",{value:String(j.id),children:[j.course_code," - ",j.course_name]},j.id))]})]}),r("div",{css:gr,children:[t("label",{css:br(e),children:"Assignment Title"}),t("input",{type:"text",css:pr(e),placeholder:"e.g. Lab Report 2",value:z.title,onChange:j=>W(E=>({...E,title:j.target.value}))})]}),r("div",{css:gr,children:[t("label",{css:br(e),children:"Description"}),t("textarea",{css:pr(e),style:{minHeight:"80px",resize:"vertical"},value:z.description,onChange:j=>W(E=>({...E,description:j.target.value}))})]}),r("div",{css:gr,children:[t("label",{css:br(e),children:"Due Date"}),t("input",{type:"date",css:pr(e),value:z.due_date,onChange:j=>W(E=>({...E,due_date:j.target.value}))})]}),r("div",{css:gr,children:[t("label",{css:br(e),children:"Due Time"}),t("input",{type:"time",css:pr(e),value:z.due_time,onChange:j=>W(E=>({...E,due_time:j.target.value}))})]}),r("div",{css:gr,children:[t("label",{css:br(e),children:"Location"}),t("input",{type:"text",css:pr(e),value:z.location,onChange:j=>W(E=>({...E,location:j.target.value}))})]})]}),r("div",{css:Jy(e),children:[t("button",{type:"button",css:Zy(e),onClick:()=>A(!1),children:"Cancel"}),r("button",{type:"button",css:Td,onClick:ee,disabled:_,children:[t(En,{}),_?"Saving...":"Save Due Date"]})]})]})}):null]})}const Vt="/strack/".replace(/\/$/,""),Ht="#6366f1",Xy=Kc();function La(e){const[n,i,o]=String(e||"").split("-").map(Number);return new Date(n,(i||1)-1,o||1)}function Na(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function Li(e){if(!e)return"";const[n,i]=String(e).split(":").map(Number),o=(n+11)%12+1,c=n>=12?"PM":"AM";return`${o}:${String(i||0).padStart(2,"0")} ${c}`}function Bd(e){const n=Number(e)||0;return n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/1024/1024).toFixed(1)} MB`}const Qy=s`width: 100%;`,My=s`margin: 0; font-size: 1.5rem; font-weight: 700; line-height: 1.2;`,Ye=e=>s`margin: 0.2rem 0 .9rem; font-size: .95rem; color: ${e?"#9ca3af":"#6b7280"}; line-height: 1.4;`,ew=s`display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .8rem; margin-bottom: .95rem; @media (max-width:1024px){grid-template-columns: repeat(2,minmax(0,1fr));}`,Po=e=>s`background:${e?"#262626":"#fff"}; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:14px;`,Ni=e=>s`${Po(e)}; padding:.95rem;`,Di=e=>s`font-size:.78rem; letter-spacing:.03em; font-weight:700; color:${e?"#9ca3af":"#6b7280"}; text-transform: uppercase;`,zi=s`margin:.6rem 0 .15rem; font-size:1.85rem; font-weight:800; line-height:1.1;`,Ti=e=>s`margin:0; font-size:.95rem; color:${e?"#9ca3af":"#6b7280"};`,tw=e=>s`${Po(e)}; padding:.95rem; margin-bottom:.95rem;`,nw=s`display:flex; align-items:center; gap:.5rem; margin:0 0 .8rem; font-size:1.3rem; font-weight:700;`,rw=e=>s`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:12px; padding:.9rem; margin-bottom:.8rem;`,sw=s`display:flex; align-items:center; gap:.5rem; flex-wrap:wrap;`,yr=e=>s`border:1px solid ${e?"#4b5563":"#e5e7eb"}; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:600;`,iw=s`margin-left:auto; border:1px solid #bbf7d0; color:#059669; background:#ecfdf5; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:700;`,ow=s`margin:.55rem 0 .2rem; font-size:1.8rem; font-weight:800; line-height:1.2;`,aw=e=>s`display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:.8rem; margin:.7rem 0 .6rem; font-size:.95rem; color:${e?"#d1d5db":"#374151"}; @media (max-width:900px){grid-template-columns:1fr;}`,cw=e=>s`height:10px; border-radius:999px; background:${e?"#404040":"#e5e7eb"}; overflow:hidden;`,lw=e=>s`height:100%; width:${Math.max(0,Math.min(100,e))}%; background:${Ht};`,dw=s`display:flex; gap:.55rem; margin-top:.75rem; flex-wrap:wrap;`,Od=s`border:none; background:${Ht}; color:#fff; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,Ei=e=>s`border:1px solid ${e?"#4b5563":"#e5e7eb"}; background:transparent; color:inherit; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`,ji=s`position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem;`,Da=e=>s`${Po(e)}; width:100%; max-width:980px; max-height:90vh; overflow:auto;`,Ri=e=>s`display:flex; align-items:start; justify-content:space-between; padding:1rem; border-bottom:1px solid ${e?"#404040":"#e5e7eb"};`,Pi=s`margin:0; font-size:1.45rem; font-weight:800;`,Bi=e=>s`margin:.2rem 0 0; color:${e?"#9ca3af":"#6b7280"};`,Oi=e=>s`border:1px solid ${e?"#4b5563":"#d1d5db"}; background:transparent; width:38px; height:38px; border-radius:10px; cursor:pointer;`,Ii=s`padding:1rem;`,Id=e=>s`display:flex; align-items:center; justify-content:space-between; gap:.8rem; border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.6rem;`,uw=e=>s`border:1px solid ${e?"#7f1d1d":"#fecaca"}; color:#dc2626; background:${e?"rgba(127,29,29,0.22)":"#fef2f2"}; border-radius:10px; padding:.4rem .65rem; font-weight:700; font-size:.85rem; cursor:pointer; display:inline-flex; align-items:center; gap:.35rem;`,kd=e=>s`display:flex; flex-wrap:wrap; align-items:center; gap:.55rem; margin-bottom:1rem; padding:.75rem; border-radius:10px; border:1px dashed ${e?"#525252":"#d1d5db"}; background:${e?"#1f1f1f":"#f9fafb"};`,za=e=>s`border:1px solid ${e?"#404040":"#e5e7eb"}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`,mw=e=>s`
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
    color: ${Ht};
  }
  &:focus-visible {
    outline: 2px solid ${Ht};
    outline-offset: 2px;
  }
`,hw=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
  margin-bottom: 0.55rem;
`,fw=e=>s`
  ${Po(e)};
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  overflow: auto;
`,pw=e=>s`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.95rem;
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#f9fafb"};
`,ki=e=>s`
  min-width: 8.5rem;
  padding: 0.42rem 0.55rem;
  border-radius: 8px;
  border: 1px solid ${e?"#525252":"#d1d5db"};
  background: ${e?"#262626":"#fff"};
  color: inherit;
  font: inherit;
  font-size: 0.92rem;
`;function gw({darkMode:e,userEmail:n}){const[i,o]=a.useState([]),[c,l]=a.useState(null),[u,p]=a.useState([]),[b,v]=a.useState(!0),[g,y]=a.useState(null),[w,P]=a.useState(null),[x,A]=a.useState(null),[_,L]=a.useState([]),[z,W]=a.useState(!1),[F,V]=a.useState(""),[B,R]=a.useState(null),[q,H]=a.useState(!1),Q=a.useRef(null),[ce,oe]=a.useState(null),[ie,ue]=a.useState(""),[N,M]=a.useState(""),[ee,j]=a.useState(""),[E,C]=a.useState(""),[X,J]=a.useState([]),[G,me]=a.useState(!1),[ye,he]=a.useState(""),ze=h=>`${Vt}/backend/demo_assignment_submissions.php?download=1&submission_id=${encodeURIComponent(String(h))}&lecturer_email=${encodeURIComponent(n||"")}`,ve=(h,m)=>{m&&A(null),oe(h)},fe=h=>Array.isArray(h==null?void 0:h.students)?[...h.students].sort((m,$)=>String(m.full_name||"").localeCompare(String($.full_name||""))):[],Y=h=>`${Vt}/backend/course_resources.php?download=1&id=${h}&lecturer_email=${encodeURIComponent(n||"")}`;a.useEffect(()=>{if(!(w!=null&&w.id)||!n){J([]),he("");return}let h=!1;async function m(){me(!0),he("");try{const O=await(await fetch(`${Vt}/backend/demo_assignment_submissions.php?course_id=${encodeURIComponent(String(w.id))}&lecturer_email=${encodeURIComponent(n)}`,{cache:"no-store"})).json().catch(()=>({}));if(h)return;O.success?J(Array.isArray(O.submissions)?O.submissions:[]):he(O.error||"Could not load student uploads")}catch{h||he("Could not load student uploads")}finally{h||me(!1)}}return m(),()=>{h=!0}},[w==null?void 0:w.id,n]),a.useEffect(()=>{if(!(g!=null&&g.id)||!n){L([]),V("");return}let h=!0;async function m(){W(!0),V("");try{const O=await(await fetch(`${Vt}/backend/course_resources.php?course_id=${g.id}&lecturer_email=${encodeURIComponent(n)}`,{cache:"no-store"})).json();if(!h)return;O.success?L(O.resources||[]):V(O.error||"Could not load resources")}catch{h&&V("Network error")}finally{h&&W(!1)}}return m(),()=>{h=!1}},[g==null?void 0:g.id,n]);const re=async h=>{var $;const m=($=h.target.files)==null?void 0:$[0];if(h.target.value="",!(!m||!(g!=null&&g.id)||!n)){H(!0),V(""),R(null);try{const O=new FormData;O.append("file",m),O.append("course_id",String(g.id)),O.append("lecturer_email",n);const k=await(await fetch(`${Vt}/backend/course_resources.php`,{method:"POST",body:O})).json();if(!k.success){V(k.error||"Upload failed");return}const te=k.notifications||{};R({inApp:Number(te.in_app_created)||0});const $e=await(await fetch(`${Vt}/backend/course_resources.php?course_id=${g.id}&lecturer_email=${encodeURIComponent(n)}`,{cache:"no-store"})).json();$e.success&&L($e.resources||[])}catch{V("Upload failed")}finally{H(!1)}}},xe=async h=>{if(!(!n||!window.confirm("Remove this file for all students?"))){V("");try{const $=await(await fetch(`${Vt}/backend/course_resources.php`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:h,lecturer_email:n})})).json();if(!$.success){V($.error||"Delete failed");return}L(O=>O.filter(ne=>ne.id!==h))}catch{V("Delete failed")}}};a.useEffect(()=>{let h=!0;async function m(){v(!0);try{const $=new Date,O=new Date($);O.setMonth(O.getMonth()-6);const ne=new Date($);ne.setMonth(ne.getMonth()+6);const[k,te,Ce]=await Promise.all([fetch(`${Vt}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${Vt}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${Vt}/backend/timetable.php?from=${encodeURIComponent(Na(O))}&to=${encodeURIComponent(Na(ne))}`,{cache:"no-store"})]),$e=await k.json(),S=await te.json(),K=await Ce.json();if(!h)return;const le=($e.success?$e.lecturers||[]:[]).find(_e=>String(_e.email||"").trim().toLowerCase()===String(n||"").trim().toLowerCase())||null;l(le),o(S.success?S.courses||[]:[]),p(K.success?K.entries||[]:[])}catch{if(!h)return;l(null),o([]),p([])}finally{h&&v(!1)}}return m(),()=>{h=!1}},[n]);const Se=a.useMemo(()=>{if(!c)return[];const h=String(c.lecturer_id||"").trim();return i.filter(m=>String(m.lecturer_id||"").trim()===h)},[i,c]),D=a.useMemo(()=>Se.filter(h=>!(ie&&String(h.intake_month||"")!==ie||N&&String(h.intake_year??"")!==N||ee&&String(h.semester||"")!==ee||E&&String(h.course_study_year||"")!==E)),[Se,ie,N,ee,E]),ae=a.useMemo(()=>{const h=Na(new Date);return D.map(m=>{const $=Number(m.id),O=u.filter(S=>S.entry_type==="class"&&Number(S.course_id)===$).sort((S,K)=>`${S.entry_date} ${S.start_time}`.localeCompare(`${K.entry_date} ${K.start_time}`)),ne=u.filter(S=>S.entry_type==="event"&&Number(S.course_id)===$).sort((S,K)=>`${S.entry_date} ${S.start_time}`.localeCompare(`${K.entry_date} ${K.start_time}`)).map(S=>{let K="Upcoming";return S.entry_date<h?K="Past due":S.entry_date===h&&(K="Due today"),{id:S.id,title:S.event_title||"Assignment",description:S.event_description||"No description provided.",due:S.entry_date,dueTime:S.start_time,status:K}}),k=ne.filter(S=>S.status==="Past due").length,te=ne.length?Math.round(k/ne.length*100):0,Ce=O.find(S=>S.entry_date>=h)||null,$e=Number(m.enrolled_count)||(Array.isArray(m.students)?m.students.length:0);return{...m,meta:{instructor:m.lecturer_name||"TBA",enrolled:$e,description:`You teach ${m.course_name} (${m.course_code}) in ${m.department||"General"}.`,classes:O,assignments:ne,completedAssignments:k,nextLecture:Ce?`${La(Ce.entry_date).toLocaleDateString(void 0,{weekday:"short"})} ${Li(Ce.start_time)}`:"No upcoming session",progress:te}}})},[D,u]),ge=a.useMemo(()=>{const h=ae.length,m=ae.reduce((k,te)=>k+(Number(te.credits)||0),0),$=h?Math.round(ae.reduce((k,te)=>k+te.meta.progress,0)/h):0,O=ae.reduce((k,te)=>k+te.meta.completedAssignments,0),ne=ae.reduce((k,te)=>k+te.meta.assignments.length,0);return{totalCourses:h,totalCredits:m,avgProgress:$,pastDue:O,totalAssignments:ne}},[ae]),T=c?Se.length===0?"No courses are assigned to you yet.":D.length===0?"No courses match the selected filters.":"No courses are assigned to you yet.":"We could not match your account to a lecturer profile. Check that your email matches the staff record.";return r("div",{css:Qy,children:[t("h1",{css:My,children:"My Courses"}),r("p",{css:Ye(e),children:["Modules you teach, timetable sessions, and assignment due dates. Open ",t("strong",{children:"Assignments"})," on a module to view due dates and to ",t("strong",{children:"see and download"})," files students upload from their Courses page (demo assignment submissions)."]}),c?r("div",{css:pw(e),role:"search","aria-label":"Filter courses",children:[t("span",{css:Ye(e),style:{margin:0,fontWeight:700},children:"Filters"}),t("select",{css:ki(e),value:ie,onChange:h=>ue(h.target.value),"aria-label":"Intake month",children:co.map(h=>t("option",{value:h.value,children:h.value?h.label:"Any month"},h.value||"all-m"))}),r("select",{css:ki(e),value:N,onChange:h=>M(h.target.value),"aria-label":"Intake year",children:[t("option",{value:"",children:"Any intake year"}),Xy.map(h=>t("option",{value:String(h),children:h},h))]}),t("select",{css:ki(e),value:ee,onChange:h=>j(h.target.value),"aria-label":"Semester",children:Gs.map(h=>t("option",{value:h.value,children:h.value?h.label:"Any semester"},h.value||"all-s"))}),t("select",{css:ki(e),value:E,onChange:h=>C(h.target.value),"aria-label":"Course study year",children:Or.map(h=>t("option",{value:h.value,children:h.value?h.label:"Any study year"},h.value||"all-y"))})]}):null,r("div",{css:ew,children:[r("div",{css:Ni(e),children:[t("p",{css:Di(e),children:"Total Courses"}),t("p",{css:zi,children:ge.totalCourses}),t("p",{css:Ti(e),children:"Your modules"})]}),r("div",{css:Ni(e),children:[t("p",{css:Di(e),children:"Total Credits"}),t("p",{css:zi,children:ge.totalCredits}),t("p",{css:Ti(e),children:"Teaching load"})]}),r("div",{css:Ni(e),children:[t("p",{css:Di(e),children:"Timeline"}),r("p",{css:zi,children:[ge.avgProgress,"%"]}),t("p",{css:Ti(e),children:"Past due dates"})]}),r("div",{css:Ni(e),children:[t("p",{css:Di(e),children:"Due dates"}),r("p",{css:zi,children:[ge.pastDue,"/",ge.totalAssignments]}),t("p",{css:Ti(e),children:"Past / total"})]})]}),r("section",{css:tw(e),children:[r("h2",{css:nw,children:[t(St,{style:{color:Ht,width:24,height:24}}),"Active Courses"]}),b?t("p",{children:"Loading courses..."}):ae.length===0?t("p",{children:T}):ae.map(h=>r("article",{css:rw(e),children:[r("div",{css:sw,children:[t("span",{css:yr(e),children:h.course_code}),r("span",{css:yr(e),children:[Number(h.credits)||0," Credits"]}),t("span",{css:yr(e),title:"Cohort intake",children:Xt(h)}),h.semester?t("span",{css:yr(e),children:h.semester}):null,h.course_study_year?t("span",{css:yr(e),children:Mt(h.course_study_year)}):null,t("span",{css:iw,children:"Active"})]}),t("h3",{css:ow,children:h.course_name}),t("p",{css:Ye(e),style:{marginBottom:".4rem"},children:h.department||"General"}),r("div",{css:aw(e),children:[r("button",{type:"button",css:mw(),onClick:()=>ve(h,!1),title:"View enrolled students",children:[t(kt,{"aria-hidden":!0})," Students: ",t("strong",{children:h.meta.enrolled})]}),r("span",{children:[t(lt,{})," Next: ",t("strong",{children:h.meta.nextLecture})]}),r("span",{children:[t(En,{})," Due dates: ",r("strong",{children:[h.meta.completedAssignments,"/",h.meta.assignments.length]})," ","past"]})]}),r("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".3rem"},children:[t("span",{css:Ye(e),style:{margin:0},children:"Assignment timeline"}),r("strong",{children:[h.meta.progress,"%"]})]}),t("div",{css:cw(e),children:t("div",{css:lw(h.meta.progress)})}),r("div",{css:dw,children:[t("button",{type:"button",css:Od,onClick:()=>A(h),children:"View Course"}),t("button",{type:"button",css:Ei(e),onClick:()=>y(h),children:"Resources"}),t("button",{type:"button",css:Ei(e),onClick:()=>P(h),children:"Assignments"})]})]},h.id))]}),g?t("div",{css:ji,onClick:()=>y(null),children:r("div",{css:Da(e),onClick:h=>h.stopPropagation(),children:[r("div",{css:Ri(e),children:[r("div",{children:[t("h3",{css:Pi,children:"Course Resources"}),r("p",{css:Bi(e),children:["Materials for ",g.course_name]})]}),t("button",{type:"button",css:Oi(e),onClick:()=>y(null),children:t(Fe,{})})]}),r("div",{css:Ii,children:[t("input",{ref:Q,type:"file",accept:".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.zip,.png,.jpg,.jpeg,.gif,.webp",css:s`display:none;`,onChange:re}),r("div",{css:kd(e),children:[r("button",{type:"button",css:Od,disabled:q,onClick:()=>{var h;return(h=Q.current)==null?void 0:h.click()},children:[t(wc,{style:{display:"inline",verticalAlign:"middle"}})," ",q?"Uploading…":"Upload file"]}),t("span",{css:Ye(e),style:{margin:0},children:"PDF, Office, images, zip — max 20 MB"})]}),F?t("p",{style:{color:"#dc2626",margin:"0 0 .75rem",fontSize:".9rem"},children:F}):null,B?r("div",{css:s`
                    border: 1px solid #86efac;
                    background: #ecfdf5;
                    color: #065f46;
                    border-radius: 10px;
                    padding: 0.6rem 0.7rem;
                    margin: 0 0 0.75rem;
                    font-size: 0.9rem;
                  `,children:["Upload complete. In-app notifications created: ",t("strong",{children:B.inApp}),"."]}):null,z?t("p",{css:Ye(e),style:{margin:0},children:"Loading resources…"}):_.length===0?t("p",{css:Ye(e),style:{margin:0},children:"No files yet. Upload materials for students to download."}):_.map(h=>r("div",{css:Id(e),children:[r("div",{style:{display:"flex",alignItems:"center",gap:".75rem",minWidth:0},children:[t("span",{style:{width:42,height:42,borderRadius:8,background:"#eef2ff",display:"inline-flex",alignItems:"center",justifyContent:"center",color:Ht,flexShrink:0},children:t(En,{})}),r("div",{style:{minWidth:0},children:[t("strong",{style:{wordBreak:"break-word"},children:h.original_filename}),r("p",{css:Ye(e),style:{margin:".1rem 0 0"},children:[Bd(h.file_size),h.created_at?` · ${new Date(h.created_at.replace(" ","T")).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}`:""]})]})]}),r("div",{style:{display:"flex",flexWrap:"wrap",gap:".45rem",flexShrink:0},children:[r("a",{href:Y(h.id),css:Ei(e),style:{textDecoration:"none"},children:[t(oo,{})," Download"]}),r("button",{type:"button",css:uw(e),onClick:()=>xe(h.id),children:[t(bn,{})," Remove"]})]})]},h.id))]})]})}):null,w?t("div",{css:ji,onClick:()=>P(null),children:r("div",{css:Da(e),onClick:h=>h.stopPropagation(),children:[r("div",{css:Ri(e),children:[r("div",{children:[t("h3",{css:Pi,children:"Course Assignments"}),r("p",{css:Bi(e),children:["Due dates for ",w.course_name]})]}),t("button",{type:"button",css:Oi(e),onClick:()=>P(null),children:t(Fe,{})})]}),r("div",{css:Ii,children:[r("div",{css:kd(e),style:{marginBottom:"1rem"},children:[t(wc,{style:{width:22,height:22,flexShrink:0,color:Ht},"aria-hidden":!0}),r("p",{css:Ye(e),style:{margin:0,flex:"1 1 12rem",lineHeight:1.45},children:[t("strong",{children:"Student uploads:"})," When students use ",t("strong",{children:"Courses → Assignments → Upload a demo file"}),", their files appear below. You can open or download each file here."]})]}),w.meta.assignments.length===0?t("p",{css:Ye(e),style:{margin:0},children:"No assignment due dates found for this course yet. Add them from the Calendar tab."}):w.meta.assignments.map((h,m)=>r("div",{css:za(e),children:[r("div",{style:{display:"flex",alignItems:"center",gap:".6rem",flexWrap:"wrap"},children:[t("h4",{style:{margin:0,fontSize:"1.5rem",fontWeight:800},children:h.title}),t("span",{css:yr(e),style:{color:h.status==="Past due"?"#059669":h.status==="Due today"?"#ca8a04":"#2563eb",borderColor:h.status==="Past due"?"#86efac":h.status==="Due today"?"#fde68a":"#bfdbfe",background:h.status==="Past due"?"#ecfdf5":h.status==="Due today"?"#fffbeb":"#eff6ff"},children:h.status})]}),t("p",{css:Ye(e),style:{marginTop:".3rem"},children:h.description}),r("p",{css:Ye(e),style:{marginTop:".15rem"},children:["Due: ",La(h.due).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),h.dueTime?` · Time: ${Li(h.dueTime)}`:""]})]},`${h.title}-${m}`)),t("h4",{style:{margin:"1.25rem 0 0.5rem",fontSize:"1.05rem",fontWeight:800},children:"Uploaded assignment files"}),G?t("p",{css:Ye(e),style:{margin:0},children:"Loading student uploads…"}):ye?t("p",{css:Ye(e),style:{margin:0,color:"#dc2626"},children:ye}):X.length===0?r("p",{css:Ye(e),style:{margin:0},children:["No demo files uploaded for this module yet. Students submit from their ",t("strong",{children:"Courses"})," page."]}):X.map(h=>r("div",{css:Id(e),children:[r("div",{style:{minWidth:0},children:[t("strong",{style:{wordBreak:"break-word"},children:h.original_filename||"File"}),r("p",{css:Ye(e),style:{margin:".15rem 0 0"},children:[h.student_name||"Student",h.student_email?` · ${h.student_email}`:"",h.file_size!=null?` · ${Bd(h.file_size)}`:"",h.uploaded_at?` · ${new Date(String(h.uploaded_at).replace(" ","T")).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}`:""]})]}),r("a",{href:ze(h.id),css:Ei(e),style:{textDecoration:"none",flexShrink:0},children:[t(oo,{"aria-hidden":!0})," Download"]})]},h.id))]})]})}):null,ce?t("div",{css:ji,onClick:()=>oe(null),children:r("div",{css:fw(e),onClick:h=>h.stopPropagation(),role:"dialog","aria-labelledby":"enrolled-modal-title",children:[r("div",{css:Ri(e),children:[r("div",{children:[t("h3",{id:"enrolled-modal-title",css:Pi,children:"Enrolled students"}),r("p",{css:Bi(e),children:[ce.course_name," (",ce.course_code,")"]})]}),t("button",{type:"button",css:Oi(e),onClick:()=>oe(null),"aria-label":"Close",children:t(Fe,{})})]}),t("div",{css:Ii,children:fe(ce).length===0?t("p",{css:Ye(e),style:{margin:0},children:"No students are enrolled in this module yet."}):fe(ce).map(h=>r("div",{css:hw(e),children:[t("strong",{style:{display:"block",marginBottom:"0.25rem"},children:h.full_name||"—"}),r("p",{css:Ye(e),style:{margin:0,display:"flex",alignItems:"center",gap:"0.35rem",flexWrap:"wrap"},children:[t(Oc,{style:{flexShrink:0,opacity:.85},"aria-hidden":!0}),h.email&&String(h.email).trim()?t("a",{href:`mailto:${String(h.email).trim()}`,css:s`
                            color: ${Ht};
                            text-decoration: none;
                            word-break: break-all;
                            &:hover {
                              text-decoration: underline;
                            }
                          `,children:String(h.email).trim()}):t("span",{children:"—"})]}),h.student_id?r("p",{css:Ye(e),style:{margin:"0.35rem 0 0",fontSize:"0.82rem"},children:["ID: ",h.student_id]}):null]},h.id))})]})}):null,x?t("div",{css:ji,onClick:()=>A(null),children:r("div",{css:Da(e),onClick:h=>h.stopPropagation(),children:[r("div",{css:Ri(e),children:[r("div",{children:[t("h3",{css:Pi,children:x.course_name}),r("p",{css:Bi(e),children:[x.course_code," · ",Number(x.credits)||0," Credits · ",x.department||"General",t("br",{}),r("span",{style:{fontSize:"0.92rem"},children:["Intake ",Xt(x),x.semester?` · ${x.semester}`:"",x.course_study_year?` · ${Mt(x.course_study_year)}`:""]})]})]}),t("button",{type:"button",css:Oi(e),onClick:()=>A(null),children:t(Fe,{})})]}),r("div",{css:Ii,children:[t("h4",{style:{margin:0,fontSize:"1.8rem"},children:"Overview"}),t("p",{css:Ye(e),children:x.meta.description}),t("h4",{style:{margin:"0 0 .45rem 0",fontSize:"1.8rem"},children:"Scheduled Sessions"}),t("div",{children:x.meta.classes.length===0?t("p",{css:Ye(e),style:{margin:0},children:"No scheduled classes found in timetable."}):x.meta.classes.map((h,m)=>r("div",{style:{display:"grid",gridTemplateColumns:"28px 1fr",gap:".5rem",padding:".5rem .6rem",borderBottom:`1px solid ${e?"#303030":"#f3f4f6"}`},children:[r("strong",{style:{color:Ht},children:[m+1,"."]}),r("span",{children:[La(h.entry_date).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})," ·"," ",Li(h.start_time),"-",Li(h.end_time),h.room_location?` · ${h.room_location}`:""]})]},`${h.id}-${m}`))}),t("h4",{style:{margin:".8rem 0 .45rem 0",fontSize:"1.8rem"},children:"Course Information"}),r("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".8rem"},children:[r("button",{type:"button",css:[za(e),s`
                      cursor: pointer;
                      text-align: left;
                      font: inherit;
                      color: inherit;
                      transition: border-color 0.15s, box-shadow 0.15s;
                      &:hover {
                        border-color: ${Ht};
                        box-shadow: 0 0 0 1px ${Ht}33;
                      }
                    `],onClick:()=>ve(x,!0),children:[t("p",{css:Ye(e),style:{margin:0},children:"Enrolled students"}),t("strong",{children:x.meta.enrolled}),t("p",{css:Ye(e),style:{margin:"0.35rem 0 0",fontSize:"0.82rem"},children:"Click to view names and emails"})]}),r("div",{css:za(e),children:[t("p",{css:Ye(e),style:{margin:0},children:"Next session"}),t("strong",{children:x.meta.nextLecture})]})]})]})]})}):null]})}const ds="/strack/".replace(/\/$/,""),po="#6366f1",bw={present:"Present",late:"Late",absent:"Absent"};function yw(){const e=new Date,n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function ww(){const e=new Date,n=new Date(e),i=new Date(e);n.setDate(e.getDate()-365),i.setDate(e.getDate()+365);const o=c=>`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`;return{from:o(n),to:o(i)}}function Fd(e){const n=String(e||""),i=n.split(":");return i.length<2?n:`${i[0]}:${i[1]}`}function vw(e){const n=String(e||"").trim();if(!n)return"S";const i=n.split(/\s+/);return i.length<2?n.slice(0,2).toUpperCase():`${i[0][0]}${i[i.length-1][0]}`.toUpperCase()}function xw(e){const n=["#6366f1","#8b5cf6","#0ea5e9","#14b8a6","#f97316","#ec4899"],i=String(e||"");let o=0;for(let c=0;c<i.length;c+=1)o=o*31+i.charCodeAt(c)>>>0;return n[o%n.length]}const Sw=s`
  width: 100%;
`,$w=s`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,Cw=s`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.15;
`,_w=e=>s`
  margin: 0.25rem 0 0;
  font-size: 1.1rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Aw=e=>s`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  background: ${e?"#1f1f1f":"#fff"};
  color: ${po};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Ud=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#262626":"#fff"};
  padding: 1rem 1.1rem;
  margin-bottom: 1rem;
`,Wd=s`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
`,Hd=e=>s`
  margin: 0.25rem 0 0.75rem;
  font-size: 1rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Yd=e=>s`
  width: 100%;
  border: 1px solid ${e?"#404040":"#d1d5db"};
  border-radius: 10px;
  background: ${e?"#1f1f1f":"#fff"};
  color: inherit;
  padding: 0.7rem 0.8rem;
  font-size: 1rem;
  font-family: inherit;
`,Lw=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,Nw=e=>s`
  margin-top: 0.75rem;
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 8px;
  background: ${e?"#1f2937":"#eef2f7"};
  color: ${e?"#d1d5db":"#1f2937"};
  padding: 0.55rem 0.7rem;
  font-size: 0.95rem;
  font-weight: 700;
`,Dw=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.75rem;
`,zw=s`
  border: none;
  border-radius: 8px;
  background: ${po};
  color: #fff;
  padding: 0.55rem 0.95rem;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
`,Ta=e=>s`
  margin: 0.2rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 1rem;
`,Tw=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.65rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.8rem;
  align-items: center;
`,Ew=s`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
`,jw=e=>s`
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
`,Rw=s`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
`,Pw=e=>s`
  margin: 0.1rem 0 0;
  font-size: 0.92rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Bw=s`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
`,Ow=(e,n)=>s`
  border: 1px solid ${e?"#4b5563":"#d1d5db"};
  border-radius: 7px;
  padding: 0.25rem 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${n==="present"?"#059669":n==="late"?"#d97706":n==="absent"?"#dc2626":e?"#9ca3af":"#6b7280"};
  background: ${n==="present"?"rgba(16,185,129,0.12)":n==="late"?"rgba(245,158,11,0.12)":n==="absent"?"rgba(239,68,68,0.12)":"transparent"};
`,Kd=(e,n)=>s`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid ${n?po:e?"#4b5563":"#d1d5db"};
  background: ${n?e?"rgba(99,102,241,0.2)":"rgba(99,102,241,0.1)":"transparent"};
  color: ${n?po:e?"#d1d5db":"#4b5563"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Iw=s`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,Ea=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  background: ${e?"#262626":"#fff"};
  padding: 0.9rem;
`,ja=s`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`,Ra=s`
  margin: 0.8rem 0 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
`,kw=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#262626":"#fff"};
  min-height: 220px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 1rem;
`;function Fw({darkMode:e,userEmail:n}){const[i,o]=a.useState(""),[c,l]=a.useState(""),[u,p]=a.useState([]),[b,v]=a.useState([]),[g,y]=a.useState(""),[w,P]=a.useState(""),[x,A]=a.useState({}),[_,L]=a.useState(!0),[z,W]=a.useState(!1),[F,V]=a.useState("");a.useEffect(()=>{let N=!0;async function M(){L(!0);try{const[ee,j]=await Promise.all([fetch(`${ds}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${ds}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),E=await ee.json(),C=await j.json();if(!N)return;const J=(E.success?E.lecturers||[]:[]).find(ze=>String(ze.email||"").trim().toLowerCase()===String(n||"").trim().toLowerCase()),G=String((J==null?void 0:J.lecturer_id)||""),me=String((J==null?void 0:J.id)||"");o(G),l(me);const he=(C.success?C.courses||[]:[]).filter(ze=>String(ze.lecturer_id||"").trim()===G);p(he)}catch{if(!N)return;o(""),l(""),p([])}finally{N&&L(!1)}}return M(),()=>{N=!1}},[n]),a.useEffect(()=>{let N=!0;async function M(){if(!c&&u.length===0){v([]),P("");return}try{const ee=ww(),E=await(await fetch(`${ds}/backend/timetable.php?from=${encodeURIComponent(ee.from)}&to=${encodeURIComponent(ee.to)}&t=${Date.now()}`,{cache:"no-store"})).json();if(!N)return;const C=E.success?E.entries||[]:[],X=new Set(u.map(G=>String(G.id))),J=C.filter(G=>{if(G.entry_type!=="class")return!1;const me=Array.isArray(G.lecturers)?G.lecturers.some(he=>Number(he.id)===Number(c)):!1,ye=X.has(String(G.course_id||""));return me||ye});v(J)}catch{if(!N)return;v([])}}return M(),()=>{N=!1}},[u,c]),a.useEffect(()=>{P(N=>{const M=b.filter(ee=>String(ee.course_id||"")===String(g));return M.some(ee=>String(ee.id)===String(N))?N:M[0]?String(M[0].id):""})},[b,g]),a.useEffect(()=>{if(!w)return;const N=b.find(ee=>String(ee.id)===String(w)),M=(N==null?void 0:N.course_id)!=null?String(N.course_id):"";M&&M!==g&&y(M)},[b,w,g]);const B=a.useMemo(()=>u.find(N=>String(N.id)===String(g))||null,[u,g]),R=a.useMemo(()=>Array.isArray(B==null?void 0:B.students)?B.students:[],[B]),q=a.useMemo(()=>b.filter(N=>String(N.course_id||"")===String(g)),[b,g]),H=a.useMemo(()=>q.find(N=>String(N.id)===String(w))||null,[q,w]),Q=(H==null?void 0:H.entry_date)||yw(),ce=a.useMemo(()=>new Date(`${Q}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),[Q]);a.useEffect(()=>{if(!g||!w){A({});return}let N=!0;async function M(){try{const ee=new URLSearchParams({user_email:n,class_id:String(w)}),E=await(await fetch(`${ds}/backend/attendance_marks.php?${ee.toString()}`,{cache:"no-store"})).json();if(!N)return;E!=null&&E.success&&E.marks&&typeof E.marks=="object"?A(E.marks):A({})}catch{N&&A({})}}return M(),()=>{N=!1}},[w,g,n]);const oe=a.useMemo(()=>{const N=R.length,M=R.filter(j=>["present","late","absent"].includes(x[j.id])).length,ee=R.filter(j=>x[j.id]==="present").length;return{total:N,marked:M,present:ee}},[R,x]),ie=(N,M)=>{V(""),A(ee=>({...ee,[N]:M}))},ue=async()=>{if(!(!g||!w)){W(!0);try{const M=await(await fetch(`${ds}/backend/attendance_marks.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:n,class_id:Number(w),marks:x})})).json();if(!(M!=null&&M.success))throw new Error((M==null?void 0:M.error)||"Failed to save attendance");V(`Attendance saved for ${ce}.`),window.setTimeout(()=>V(""),2200)}catch{V("Could not save attendance to database."),window.setTimeout(()=>V(""),2200)}finally{W(!1)}}};return r("div",{css:Sw,children:[r("div",{css:$w,children:[r("div",{children:[t("h1",{css:Cw,children:"Mark Attendance"}),t("p",{css:_w(e),children:"Track student attendance for your classes"})]}),t("div",{css:Aw(e),"aria-hidden":!0,children:t(Ds,{style:{width:24,height:24}})})]}),r("section",{css:Ud(e),children:[t("h2",{css:Wd,children:"Select Module"}),t("p",{css:Hd(e),children:"Choose a module, then select one assigned class to mark attendance."}),r("div",{css:Lw,children:[r("select",{css:Yd(e),value:g,onChange:N=>y(N.target.value),disabled:_||u.length===0,children:[t("option",{value:"",children:"Select a module"}),u.map(N=>r("option",{value:String(N.id),children:[N.course_code," - ",N.course_name]},N.id))]}),r("select",{css:Yd(e),value:w,onChange:N=>P(N.target.value),disabled:!g||_||q.length===0,children:[t("option",{value:"",children:g?"Select an assigned class":"Select a module first"}),q.map(N=>r("option",{value:String(N.id),children:[N.course_code||"Class"," | ",N.entry_date," | ",Fd(N.start_time),"-",Fd(N.end_time)]},N.id))]})]}),g?r("div",{css:Nw(e),children:["Classes found: ",q.length,H?` | Class date: ${ce}`:""]}):null]}),!g||!w?t("div",{css:kw(e),children:r("div",{children:[t(Zf,{style:{width:38,height:38,opacity:.5}}),t("h3",{css:s`margin: 0.75rem 0 0.35rem; font-size: 1.75rem;`,children:"Select module and class to begin"}),t("p",{css:Ta(e),children:"After choosing a module, select one assigned class to show enrolled students."})]})}):r(rt,{children:[r("section",{css:Ud(e),children:[r("div",{css:Dw,children:[r("div",{children:[t("h2",{css:Wd,children:"Students"}),t("p",{css:Hd(e),children:"Mark attendance for each student"})]}),t("button",{type:"button",css:zw,onClick:ue,children:z?"Saving...":"Save Attendance"})]}),R.map(N=>{const M=x[N.id]||"";return r("article",{css:Tw(e),children:[r("div",{css:Ew,children:[t("span",{css:jw(xw(N.student_id||N.id)),children:vw(N.full_name)}),r("div",{children:[t("p",{css:Rw,children:N.full_name||"Unknown student"}),t("p",{css:Pw(e),children:N.student_id||"No student id"})]})]}),r("div",{css:Bw,children:[t("span",{css:Ow(e,M),children:M?bw[M]:"Not Marked"}),t("button",{type:"button",css:Kd(e,M==="present"),onClick:()=>ie(N.id,"present"),"aria-label":`Mark ${N.full_name} present`,children:t(Vn,{})}),t("button",{type:"button",css:Kd(e,M==="absent"),onClick:()=>ie(N.id,"absent"),"aria-label":`Mark ${N.full_name} absent`,children:t(Gf,{})})]})]},N.id)}),R.length===0?t("p",{css:Ta(e),children:"No students enrolled in this module yet."}):null,F?t("p",{css:s`margin: 0.6rem 0 0; font-size: 0.9rem; color: #059669; font-weight: 600;`,children:F}):null]}),r("section",{css:Iw,children:[r("article",{css:Ea(e),children:[t("h3",{css:ja,children:"Total Students"}),t("p",{css:Ra,children:oe.total})]}),r("article",{css:Ea(e),children:[t("h3",{css:ja,children:"Marked for Class"}),t("p",{css:Ra,children:oe.marked})]}),r("article",{css:Ea(e),children:[t("h3",{css:ja,children:"Present"}),t("p",{css:Ra,children:oe.present})]})]})]}),!_&&!i?t("p",{css:Ta(e),style:{marginTop:"0.9rem"},children:"We could not match your account to a lecturer profile."}):null]})}const wr="/strack/".replace(/\/$/,""),Uw="0.25s ease",Ww=s`
  display: grid;
  gap: 1rem;
`,Hw=s`
  font-size: 1.5rem;
  margin: 0;
`,Yw=e=>s`
  margin: 0.25rem 0 0;
  color: ${e?"#a3a3a3":"#6b7280"};
`,Kw=s`
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`,Pa=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.1)":"#e5e7eb"};
  border-radius: 16px;
  padding: 1rem;
  background: ${e?"#111827":"#fff"};
`,Ba=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${e?"#d1d5db":"#374151"};
  font-weight: 700;
  font-size: 0.95rem;
`,Oa=s`
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0.75rem;
  line-height: 1;
`,Ia=(e,n="neutral")=>s`
  margin-top: 0.35rem;
  font-size: 0.92rem;
  color: ${n==="success"?"#059669":n==="danger"?"#dc2626":e?"#9ca3af":"#6b7280"};
  font-weight: 600;
`,Vw=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.1)":"#e5e7eb"};
  border-radius: 16px;
  background: ${e?"#111827":"#fff"};
  padding: 1rem;
`,Vd=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
`,Gw=s`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 1.05rem;
`,Jw=s`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: minmax(180px, 2fr) minmax(180px, 1.3fr) auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,vr=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.15)":"#d1d5db"};
  border-radius: 10px;
  background: ${e?"#0b1220":"#fff"};
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  transition: border-color ${Uw};

  &:focus-within {
    border-color: #7c3aed;
  }

  svg {
    flex-shrink: 0;
    color: ${e?"#9ca3af":"#6b7280"};
  }

  input,
  select {
    border: none;
    background: transparent;
    color: ${e?"#fff":"#111827"};
    font: inherit;
    width: 100%;
    outline: none;
  }
`,ka=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.2)":"#d1d5db"};
  background: transparent;
  color: ${e?"#e5e7eb":"#111827"};
  border-radius: 10px;
  padding: 0 0.95rem;
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  cursor: pointer;
  font-weight: 700;
`,Gd=s`
  border: none;
  background: #7c3aed;
  color: #fff;
  border-radius: 9px;
  padding: 0.58rem 0.95rem;
  font-weight: 700;
  cursor: pointer;
`,Jd=e=>s`
  font-size: 0.86rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Zw=s`
  display: grid;
  gap: 0.6rem;
  grid-template-columns: minmax(120px, 1.4fr) minmax(90px, 0.6fr) auto;
  margin-top: 0.75rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,qw=s`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Xw=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.17)":"#d1d5db"};
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.55rem 0.2rem 0.7rem;
  font-size: 0.84rem;
  font-weight: 700;
`,Qw=s`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Mw=e=>s`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  max-height: min(72vh, 800px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  border: 1px solid ${e?"rgba(255,255,255,0.1)":"#e5e7eb"};
  border-radius: 16px;
  background: ${e?"#111827":"#fff"};
  scrollbar-width: thin;
  scrollbar-color: ${e?"#4b5563 #111827":"#bdbdbd #f3f4f6"};

  @media (max-width: 767.98px) {
    max-height: min(62vh, 560px);
  }
`,ev=s`
  width: 100%;
  border-collapse: collapse;
  min-width: 860px;
`,xr=e=>s`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 800;
  text-align: left;
  padding: 0.8rem 0.9rem;
  border-bottom: 1px solid ${e?"rgba(255,255,255,0.1)":"#e5e7eb"};
  white-space: nowrap;
  color: ${e?"#d1d5db":"#374151"};
`,An=e=>s`
  padding: 0.75rem 0.9rem;
  border-bottom: 1px solid ${e?"rgba(255,255,255,0.08)":"#f1f5f9"};
  white-space: nowrap;
`,tv=s`
  background: #4f46e5;
  color: #fff;
  border-radius: 8px;
  min-width: 34px;
  text-align: center;
  font-weight: 700;
  padding: 0.2rem 0.45rem;
`,Zd=e=>s`
  border: none;
  background: transparent;
  color: ${e?"#e5e7eb":"#111827"};
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 7px;

  &:hover {
    background: ${e?"rgba(255,255,255,0.09)":"#f3f4f6"};
  }
`,nv=s`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
  padding: 1rem;
`,rv=e=>s`
  width: min(100%, 520px);
  border-radius: 14px;
  border: 1px solid ${e?"rgba(255,255,255,0.15)":"#d1d5db"};
  background: ${e?"#0f172a":"#fff"};
  padding: 1rem;
`,qd=e=>e>=70?"#16a34a":e>=60?"#2563eb":e>=40?"#d97706":"#dc2626",sv=e=>e>=70?"D":e>=60?"M":e>=40?"P":"F",gn=e=>String(e||"").trim().toLowerCase(),Xd=e=>`strack_perf_assessments_${gn(e)}`,Qd=e=>`strack_perf_scores_${gn(e)}`,Md=e=>`strack_perf_status_${gn(e)}`,Bt="not_marked",Ns="completed",Fa=(e,n)=>{if(!e)return n;try{const i=JSON.parse(e);return i&&typeof i=="object"?i:n}catch{return n}};function iv(e,n){const i={...e&&typeof e=="object"?e:{}};return!n||typeof n!="object"||Object.keys(n).forEach(o=>{const c=n[o];!c||typeof c!="object"||(i[o]={...i[o]||{}},Object.keys(c).forEach(l=>{const u=c[l];if(!u||typeof u!="object")return;const b={...i[o][l]&&typeof i[o][l]=="object"?i[o][l]:{}};Object.keys(u).forEach(v=>{const g=u[v];b[v]=typeof g=="number"&&Number.isFinite(g)?g:Number(g)||0}),i[o][l]=b}))}),i}function ov(e,n){const i={...e&&typeof e=="object"?e:{}};return!n||typeof n!="object"||Object.keys(n).forEach(o=>{const c=n[o];!c||typeof c!="object"||(i[o]={...i[o]||{}},Object.keys(c).forEach(l=>{const u=c[l];if(!u||typeof u!="object")return;const b={...i[o][l]&&typeof i[o][l]=="object"?i[o][l]:{}};Object.keys(u).forEach(v=>{const g=u[v];b[v]=g===Ns||g===Bt?g:Bt}),i[o][l]=b}))}),i}function av(e){const n=String(e??"");return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(n):n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function cv({darkMode:e,userEmail:n,performanceIntent:i=null,onConsumePerformanceIntent:o}){var ge;const c=a.useRef(null),[l,u]=a.useState(0),[p,b]=a.useState(!1),[v,g]=a.useState(!1),[y,w]=a.useState([]),[P,x]=a.useState(""),[A,_]=a.useState(""),[L,z]=a.useState({}),[W,F]=a.useState({}),[V,B]=a.useState({}),[R,q]=a.useState(!1),[H,Q]=a.useState(""),[ce,oe]=a.useState("20"),[ie,ue]=a.useState(null),[N,M]=a.useState({}),[ee,j]=a.useState({}),E=a.useCallback(async()=>{if(!n){b(!1),w([]),x(""),z({}),F({}),B({}),g(!1);return}b(!0),g(!1);try{const[T,h]=await Promise.all([fetch(`${wr}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${wr}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})]),[m,$]=await Promise.all([T.json(),h.json()]),O=m.success?m.courses||[]:[],k=($.success?$.lecturers||[]:[]).find(Ae=>gn(Ae.email)===gn(n)),te=String((k==null?void 0:k.lecturer_id)||"").trim(),Ce=te?O.filter(Ae=>String(Ae.lecturer_id||"").trim()===te):O;w(Ce),x(Ae=>Ce.some(Te=>String(Te.id)===Ae)?Ae:Ce[0]?String(Ce[0].id):"");const S={...Fa(localStorage.getItem(Xd(n)),{})};Ce.forEach(Ae=>{const Te=String(Ae.id);Array.isArray(S[Te])||(S[Te]=[])}),z(S);const se={...Fa(localStorage.getItem(Qd(n)),{})};Ce.forEach(Ae=>{const Te=String(Ae.id),Je=Array.isArray(Ae.students)?Ae.students:[],yt=Array.isArray(S[Te])?S[Te]:[],Ze={...se[Te]||{}};Je.forEach(wt=>{const Ke=String(wt.id),dt={...Ze[Ke]||{}};yt.forEach(ot=>{typeof dt[ot.id]!="number"&&(dt[ot.id]=0)}),Ze[Ke]=dt}),se[Te]=Ze});const _e={...Fa(localStorage.getItem(Md(n)),{})};Ce.forEach(Ae=>{const Te=String(Ae.id),Je=Array.isArray(Ae.students)?Ae.students:[],yt=Array.isArray(S[Te])?S[Te]:[],Ze={..._e[Te]||{}};Je.forEach(wt=>{const Ke=String(wt.id),dt={...Ze[Ke]||{}};yt.forEach(ot=>{dt[ot.id]!==Ns&&dt[ot.id]!==Bt&&(dt[ot.id]=Bt)}),Ze[Ke]=dt}),_e[Te]=Ze});let He=se,it=_e;try{const Te=await(await fetch(`${wr}/backend/assessment_scores.php?user_email=${encodeURIComponent(n)}&lecturer_sync=1&t=${Date.now()}`,{cache:"no-store"})).json();Te.success&&Te.nested&&typeof Te.nested=="object"&&(He=iv(se,Te.nested)),Te.success&&Te.nested_status&&typeof Te.nested_status=="object"&&(it=ov(_e,Te.nested_status))}catch{}F(He),B(it)}catch{w([])}finally{g(!0),b(!1)}},[n]);a.useEffect(()=>{g(!1),E()},[E]),a.useEffect(()=>{if(!i||!v)return;const{courseId:T,assessmentId:h}=i;h?(c.current=String(h),u(m=>m+1)):c.current=null,T&&y.some(m=>String(m.id)===String(T))&&x(String(T)),o==null||o()},[i,v,y,o]),a.useEffect(()=>{const T=c.current;if(!T||!v)return;if(!(Array.isArray(L[P])?L[P]:[]).some($=>String($.id)===String(T))){c.current=null;return}const m=window.setTimeout(()=>{const $=document.querySelector(`[data-assessment-id="${av(T)}"]`);$==null||$.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),c.current=null},220);return()=>window.clearTimeout(m)},[P,L,v,l]),a.useEffect(()=>{if(!(!n||!v))try{localStorage.setItem(Xd(n),JSON.stringify(L))}catch{}},[L,v,n]),a.useEffect(()=>{if(!(!n||!v))try{localStorage.setItem(Qd(n),JSON.stringify(W))}catch{}},[W,v,n]),a.useEffect(()=>{if(!(!n||!v))try{localStorage.setItem(Md(n),JSON.stringify(V))}catch{}},[V,v,n]),a.useEffect(()=>{if(!n||!v||!y.length)return;const T=window.setTimeout(()=>{y.forEach(h=>{const m=L[String(h.id)];Array.isArray(m)&&fetch(`${wr}/backend/assessment_scores.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:n,set_course_assessment_structure:!0,course_id:Number(h.id),assessments:m.map($=>({id:String($.id),name:String($.name??""),weight:Number($.weight)||0}))})}).catch(()=>{})})},650);return()=>window.clearTimeout(T)},[L,y,n,v]);const C=a.useMemo(()=>{const T=[];return y.forEach(h=>{(Array.isArray(h.students)?h.students:[]).forEach($=>{T.push({rowId:`${h.id}_${$.id}`,courseId:String(h.id),courseLabel:`${h.course_code} - ${h.course_name}`,studentId:String($.id),studentCode:$.student_id||"-",studentName:$.full_name||"Unknown Student"})})}),T},[y]),X=a.useMemo(()=>{const T=gn(A);return C.filter(h=>h.courseId===P?T?gn(h.studentName).includes(T)||gn(h.studentCode).includes(T)||gn(h.courseLabel).includes(T):!0:!1)},[C,A,P]),J=a.useMemo(()=>Array.isArray(L[P])?L[P]:[],[L,P]),G=a.useCallback((T,h)=>{var ne,k;const $=(Array.isArray(L[T.courseId])?L[T.courseId]:[]).find(te=>te.id===h.id);if(!$)return null;const O=(k=(ne=W==null?void 0:W[T.courseId])==null?void 0:ne[T.studentId])==null?void 0:k[$.id];return typeof O=="number"&&Number.isFinite(O)?O:0},[W,L,P]),me=a.useCallback((T,h)=>{var ne,k;const $=(Array.isArray(L[T.courseId])?L[T.courseId]:[]).find(te=>te.id===h.id);if(!$)return Bt;const O=(k=(ne=V==null?void 0:V[T.courseId])==null?void 0:ne[T.studentId])==null?void 0:k[$.id];return O===Ns||O===Bt?O:Bt},[V,L]),ye=a.useCallback(T=>{const h=Array.isArray(L[T.courseId])?L[T.courseId]:[];if(!h.length)return 0;let m=0,$=0;return h.forEach(O=>{if(me(T,O)!==Ns)return;const ne=G(T,O);if(ne==null)return;const k=Number(O.weight)>0?Number(O.weight):1;m+=ne*k,$+=k}),$?Number((m/$).toFixed(1)):0},[L,G,me]),he=a.useMemo(()=>X.map(T=>{const h=ye(T);return{...T,overall:h,letter:sv(h)}}),[X,ye]),ze=a.useMemo(()=>{if(!he.length)return 0;const T=he.reduce((h,m)=>h+m.overall,0);return Number((T/he.length).toFixed(1))},[he]),ve=a.useMemo(()=>he.filter(T=>T.overall>=70).length,[he]),fe=a.useMemo(()=>he.filter(T=>T.overall<40).length,[he]),Y=()=>{const T=H.trim(),h=Number(ce);if(!T||!Number.isFinite(h)||h<=0)return;const m=`${Date.now()}_${Math.round(Math.random()*1e4)}`;z($=>({...$,[P]:[...Array.isArray($[P])?$[P]:[],{id:m,name:T,weight:Number(h.toFixed(2))}]})),F($=>{const O={...$},ne={...O[P]||{}},k=y.find(Ce=>String(Ce.id)===P);return(Array.isArray(k==null?void 0:k.students)?k.students:[]).forEach(Ce=>{const $e=String(Ce.id),S={...ne[$e]||{}};typeof S[m]!="number"&&(S[m]=0),ne[$e]=S}),O[P]=ne,O}),B($=>{const O={...$},ne=y.find(Ce=>String(Ce.id)===P),k=Array.isArray(ne==null?void 0:ne.students)?ne.students:[],te={...O[P]||{}};return k.forEach(Ce=>{const $e=String(Ce.id);te[$e]={...te[$e]||{},[m]:Bt}}),O[P]=te,O}),Q(""),oe("20")},re=async(T,h)=>{try{const m=await fetch(`${wr}/backend/assessment_scores.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:n,delete_assessment_column:!0,course_id:Number(T),assessment_id:String(h)})}),$=await m.json().catch(()=>({}));if(!m.ok||!$.success){window.alert(String($.error||"Could not remove this assessment on the server."));return}}catch{window.alert("Could not reach the server. The assessment column was not removed.");return}z(m=>({...m,[T]:(Array.isArray(m[T])?m[T]:[]).filter($=>$.id!==h)})),F(m=>{const $={...m},O={...$[T]||{}};return Object.keys(O).forEach(ne=>{const k={...O[ne]||{}};delete k[h],O[ne]=k}),$[T]=O,$}),B(m=>{const $={...m},O={...$[T]||{}};return Object.keys(O).forEach(ne=>{const k={...O[ne]||{}};delete k[h],O[ne]=k}),$[T]=O,$})},xe=T=>{const h=Array.isArray(L[T.courseId])?L[T.courseId]:[],m={};h.forEach(O=>{m[O.id]=G(T,O)});const $={};h.forEach(O=>{$[O.id]=me(T,O)}),ue(T),M(m),j($)},Se=async()=>{if(!ie)return;F(h=>({...h,[ie.courseId]:{...h[ie.courseId]||{},[ie.studentId]:{...N}}})),B(h=>{var m;return{...h,[ie.courseId]:{...h[ie.courseId]||{},[ie.studentId]:{...((m=h[ie.courseId])==null?void 0:m[ie.studentId])||{},...ee}}}});const T={};(L[ie.courseId]||[]).forEach(h=>{T[h.id]=h.name});try{await fetch(`${wr}/backend/assessment_scores.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:n,course_id:Number(ie.courseId),student_id:Number(ie.studentId),scores:N,assessment_labels:T,assessment_statuses:ee})})}catch{}ue(null),j({})},D=()=>{const h=[["Student","Student ID","Module",...J.map(k=>k.name),"Overall"]];he.forEach(k=>{const te=[k.studentName,k.studentCode,k.courseLabel,...J.map(Ce=>{const $e=G(k,Ce),S=me(k,Ce),K=$e==null?"-":`${$e}`;return S===Bt?`${K} (Not marked)`:`${K} (Completed)`}),`${k.overall}`];h.push(te)});const m=h.map(k=>k.map(te=>`"${String(te).replace(/"/g,'""')}"`).join(",")).join(`
`),$=new Blob([m],{type:"text/csv;charset=utf-8;"}),O=URL.createObjectURL($),ne=document.createElement("a");ne.href=O,ne.download="performance-export.csv",ne.click(),URL.revokeObjectURL(O)},ae=((ge=y.find(T=>String(T.id)===P))==null?void 0:ge.course_name)||"selected module";return r("section",{css:Ww,children:[r("div",{children:[t("h1",{css:Hw,children:"Performance"}),r("p",{css:Yw(e),children:["Create assessment columns per module and track student outcomes in one place. Marks you save are stored for students and power the ",t("strong",{children:"Performance — by module"})," chart (one bar per course) on their dashboard."]})]}),r("section",{css:Kw,children:[r("article",{css:Pa(e),children:[r("div",{css:Ba(e),children:["Average Grade",t(ar,{})]}),t("div",{css:Oa,children:ze}),t("div",{css:Ia(e,ze>=80?"success":"neutral"),children:"Average marks from current assessment columns"})]}),r("article",{css:Pa(e),children:[r("div",{css:Ba(e),children:["Top Performers",t(vn,{})]}),t("div",{css:Oa,children:ve}),t("div",{css:Ia(e,"success"),children:"Students with Distinction"})]}),r("article",{css:Pa(e),children:[r("div",{css:Ba(e),children:["At Risk",t(Al,{})]}),t("div",{css:Oa,children:fe}),t("div",{css:Ia(e,fe>0?"danger":"neutral"),children:"Students below Pass mark"})]})]}),r("section",{css:Vw(e),children:[r("div",{css:Vd,children:[r("h2",{css:Gw,children:[t(Al,{}),"Performance Filters"]}),r("button",{type:"button",css:ka(e),onClick:()=>q(T=>!T),children:[t(Bc,{}),"Assessment Columns"]})]}),r("div",{css:Jw,children:[r("label",{css:vr(e),children:[t(Ln,{}),t("input",{value:A,onChange:T=>_(T.target.value),placeholder:"Search by name or student ID..."})]}),t("label",{css:vr(e),children:t("select",{value:P,onChange:T=>x(T.target.value),children:y.map(T=>r("option",{value:String(T.id),children:[T.course_code," - ",T.course_name]},T.id))})}),r("button",{type:"button",css:ka(e),onClick:D,children:[t(oo,{}),"Export"]})]}),R?r(rt,{children:[r("div",{css:Zw,children:[t("label",{css:vr(e),children:t("input",{value:H,onChange:T=>Q(T.target.value),placeholder:"Assessment name (e.g. Report)"})}),t("label",{css:vr(e),children:t("input",{type:"number",min:"1",step:"1",value:ce,onChange:T=>oe(T.target.value),placeholder:"Weight %"})}),t("button",{type:"button",css:Gd,onClick:Y,children:"Add Column"})]}),t("p",{css:Jd(e),children:`Assessment structure for ${ae}.`}),t("div",{css:qw,children:(L[P]||[]).map(T=>r("span",{css:Xw(e),children:[T.name," (",T.weight,"%)",t("button",{type:"button",css:Qw,onClick:()=>re(P,T.id),"aria-label":`Remove ${T.name}`,children:t(Fe,{})})]},T.id))})]}):null]}),t("section",{css:Mw(e),children:r("table",{css:ev,children:[t("thead",{children:r("tr",{children:[t("th",{css:xr(e),children:"Student"}),t("th",{css:xr(e),children:"Student ID"}),J.map(T=>t("th",{"data-assessment-id":T.id,css:xr(e),children:T.name},T.id)),t("th",{css:xr(e),children:"Overall"}),t("th",{css:xr(e),children:"Grade"}),t("th",{css:xr(e),children:"Action"})]})}),t("tbody",{children:p?t("tr",{children:t("td",{css:An(e),colSpan:7+J.length,children:"Loading performance data..."})}):he.length?he.map(T=>r("tr",{children:[t("td",{css:An(e),children:T.studentName}),t("td",{css:An(e),children:T.studentCode}),J.map(h=>{const m=G(T,h),$=me(T,h);return t("td",{css:An(e),children:$===Bt?t("span",{css:s`
                              color: ${e?"#9ca3af":"#6b7280"};
                              font-weight: 700;
                            `,children:"Not marked"}):t("span",{css:s`color: ${qd(m)}; font-weight: 700;`,children:m})},`${T.rowId}_${h.id}`)}),t("td",{css:[An(e),s`font-size: 1.85rem; font-weight: 800; color: ${qd(T.overall)};`],children:T.overall}),t("td",{css:An(e),children:t("span",{css:tv,children:T.letter})}),t("td",{css:An(e),children:t("button",{type:"button",css:Zd(e),onClick:()=>xe(T),"aria-label":"Edit marks",children:t(yn,{})})})]},T.rowId)):t("tr",{children:t("td",{css:An(e),colSpan:7+J.length,children:"No students found for this filter."})})})]})}),t("p",{css:Jd(e),children:"Grade key: D = Distinction, M = Merit, P = Pass."}),ie?t("div",{css:nv,onClick:()=>{ue(null),j({})},children:r("div",{css:rv(e),onClick:T=>T.stopPropagation(),children:[r("div",{css:Vd,children:[r("h3",{css:s`margin: 0;`,children:["Edit scores for ",ie.studentName]}),t("button",{type:"button",css:Zd(e),onClick:()=>{ue(null),j({})},children:t(Fe,{})})]}),t("div",{css:s`display: grid; gap: 0.75rem;`,children:(L[ie.courseId]||[]).map(T=>r("div",{css:s`
                    display: grid;
                    gap: 0.45rem;
                    padding: 0.55rem 0;
                    border-bottom: 1px solid ${e?"rgba(255,255,255,0.08)":"#e5e7eb"};
                    &:last-of-type {
                      border-bottom: none;
                    }
                  `,children:[t("span",{css:s`font-weight: 800; font-size: 0.9rem;`,children:T.name}),r("div",{css:s`
                      display: grid;
                      gap: 0.45rem;
                      grid-template-columns: 1fr 1fr;
                      align-items: center;
                      @media (max-width: 520px) {
                        grid-template-columns: 1fr;
                      }
                    `,children:[r("label",{css:vr(e),children:[t("span",{css:s`font-size: 0.75rem; font-weight: 700; color: ${e?"#9ca3af":"#6b7280"};`,children:"Mark (0–100)"}),t("input",{type:"number",min:"0",max:"100",step:"0.1",value:N[T.id]??"",onChange:h=>M(m=>({...m,[T.id]:Number(h.target.value)}))})]}),r("label",{css:vr(e),children:[t("span",{css:s`font-size: 0.75rem; font-weight: 700; color: ${e?"#9ca3af":"#6b7280"};`,children:"Status"}),r("select",{value:ee[T.id]??Bt,onChange:h=>j(m=>({...m,[T.id]:h.target.value})),children:[t("option",{value:Bt,children:"Not marked"}),t("option",{value:Ns,children:"Completed"})]})]})]})]},T.id))}),r("div",{css:s`display: flex; justify-content: flex-end; gap: 0.6rem; margin-top: 0.9rem;`,children:[t("button",{type:"button",css:ka(e),onClick:()=>{ue(null),j({})},children:"Cancel"}),t("button",{type:"button",css:Gd,onClick:Se,children:"Save"})]})]})}):null]})}const Fi="/strack/".replace(/\/$/,""),lv=s`
  display: grid;
  gap: 1.1rem;
`,dv=s`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`,uv=s`
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.55rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
`,mv=e=>s`
  margin: 0.3rem 0 0;
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 1rem;
`,eu=s`
  border: none;
  border-radius: 9px;
  background: #6366f1;
  color: #fff;
  font-weight: 700;
  padding: 0.66rem 1rem;
  font-size: 0.93rem;
  cursor: pointer;
`,hv=e=>s`
  background: ${e?"#171717":"#ffffff"};
  border: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
  border-radius: 12px;
  padding: 1.1rem 1rem;
`,Ui=s`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
`,tu=e=>s`
  width: min(320px, 100%);
  border: 1px solid ${e?"#3f3f46":"#d1d5db"};
  background: ${e?"#09090b":"#fff"};
  color: inherit;
  border-radius: 9px;
  padding: 0.53rem 0.68rem;
  font-size: 0.92rem;
`,fv=e=>s`
  background: ${e?"#171717":"#fff"};
  border: 1px solid ${e?"#3f3f46":"#d1d5db"};
  border-radius: 12px;
  padding: 1rem;
  display: grid;
  gap: 0.62rem;
`,qm=e=>s`
  border: 1px solid ${e?"#3f3f46":"#d1d5db"};
  border-radius: 9px;
  padding: 0.52rem 0.68rem;
  background: ${e?"#09090b":"#fff"};
  color: inherit;
  font-size: 0.93rem;
`,pv=e=>s`
  ${qm(e)};
  min-height: 132px;
  resize: vertical;
`,gv=s`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`,bv=e=>s`
  border: 1px solid ${e?"#3f3f46":"#d1d5db"};
  border-radius: 9px;
  background: transparent;
  color: inherit;
  font-weight: 600;
  padding: 0.53rem 0.82rem;
  cursor: pointer;
`,yv=e=>s`
  background: ${e?"#171717":"#fff"};
  border: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
  border-radius: 12px;
  padding: 1.15rem 1.2rem 1.05rem;
`,wv=s`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
`,vv=s`
  display: grid;
  gap: 0.2rem;
`,xv=s`
  font-size: 0.9rem;
  font-weight: 600;
`,Sv=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.8rem;
`,$v=s`
  margin: 0.72rem 0 0.55rem;
  font-size: clamp(1.75rem, 2.6vw, 2.2rem);
  line-height: 1.15;
  letter-spacing: -0.018em;
`,Cv=e=>s`
  margin: 0 0 0.75rem;
  color: ${e?"#d1d5db":"#374151"};
  white-space: pre-wrap;
  font-size: 1.02rem;
  line-height: 1.5;
`,_v=e=>s`
  margin-top: 0.58rem;
  padding-top: 0.65rem;
  border-top: 1px solid ${e?"#2f2f2f":"#e5e7eb"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.86rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Av=s`
  display: inline-flex;
  gap: 0.1rem;
`,nu=(e=!1)=>s`
  border: none;
  background: transparent;
  color: ${e?"#ef4444":"#6366f1"};
  cursor: pointer;
  font-weight: 700;
  padding: 0.2rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`,Lv=e=>s`
  border: none;
  background: transparent;
  color: ${e?"#a5b4fc":"#4f46e5"};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.86rem;
  padding: 0;

  svg {
    width: 0.92rem;
    height: 0.92rem;
  }
`,Nv=s`
  margin-top: 0.62rem;
  display: grid;
  gap: 0.52rem;
`,Dv=e=>s`
  border: 1px solid ${e?"#3f3f46":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.55rem 0.66rem;
`,zv=s`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`,Tv=s`
  display: inline-flex;
  align-items: center;
  gap: 0.36rem;
  min-width: 0;
`,Ev=s`
  width: 1.05rem;
  height: 1.05rem;
  color: #6b7280;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`,jv=s`
  font-size: 0.83rem;
  font-weight: 700;
`,Rv=e=>s`
  font-size: 0.77rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,Pv=e=>s`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  line-height: 1.45;
  color: ${e?"#d1d5db":"#374151"};
  white-space: pre-wrap;
`,Bv=s`
  border: none;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem;

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }
`,Wi=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
`;function ru(e){if(!e)return"";const n=new Date(e);return Number.isNaN(n.getTime())?String(e):n.toLocaleString([],{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}function Ov({darkMode:e,userEmail:n}){const[i,o]=a.useState(!1),[c,l]=a.useState(!1),[u,p]=a.useState(""),[b,v]=a.useState([]),[g,y]=a.useState([]),[w,P]=a.useState(""),[x,A]=a.useState(!1),[_,L]=a.useState(0),[z,W]=a.useState({}),[F,V]=a.useState(0),[B,R]=a.useState({course_id:"",title:"",content:""}),q=a.useMemo(()=>String(n||"").trim()!=="",[n]),H=()=>{R({course_id:"",title:"",content:""}),L(0),A(!1)},Q=a.useCallback(async()=>{if(q){o(!0),p("");try{const N=new URLSearchParams({user_email:n});w&&N.set("course_id",w);const ee=await(await fetch(`${Fi}/backend/announcements.php?${N.toString()}`,{cache:"no-store"})).json();if(!(ee!=null&&ee.success))throw new Error((ee==null?void 0:ee.error)||"Failed to load announcements");v(Array.isArray(ee.available_courses)?ee.available_courses:[]),y(Array.isArray(ee.announcements)?ee.announcements:[])}catch(N){p(N instanceof Error?N.message:"Failed to load announcements")}finally{o(!1)}}},[q,w,n]);a.useEffect(()=>{Q()},[Q]);const ce=async()=>{const N=B.title.trim(),M=B.content.trim();if(!N||!M||!q){p("Title and content are required.");return}l(!0),p("");try{const ee={user_email:n,course_id:B.course_id?Number(B.course_id):null,title:N,content:M},j=_>0?"PUT":"POST",C=await(await fetch(`${Fi}/backend/announcements.php`,{method:j,headers:{"Content-Type":"application/json"},body:JSON.stringify(_>0?{...ee,id:_}:ee)})).json();if(!(C!=null&&C.success))throw new Error((C==null?void 0:C.error)||"Failed to save announcement");H(),await Q()}catch(ee){p(ee instanceof Error?ee.message:"Failed to save announcement")}finally{l(!1)}},oe=N=>{A(!0),L(Number(N.id||0)),R({course_id:N.course_id?String(N.course_id):"",title:N.title||"",content:N.content||""})},ie=async N=>{if(!(!q||!N||!window.confirm("Delete this announcement?"))){l(!0),p("");try{const ee=new URLSearchParams({id:String(N),user_email:n}),E=await(await fetch(`${Fi}/backend/announcements.php?${ee.toString()}`,{method:"DELETE"})).json();if(!(E!=null&&E.success))throw new Error((E==null?void 0:E.error)||"Failed to delete announcement");await Q()}catch(ee){p(ee instanceof Error?ee.message:"Failed to delete announcement")}finally{l(!1)}}},ue=async N=>{if(!(!q||!N||!window.confirm("Delete this comment?"))){V(N),p("");try{const j=await(await fetch(`${Fi}/backend/announcement_comments.php`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:n,comment_id:N})})).json();if(!(j!=null&&j.success))throw new Error((j==null?void 0:j.error)||"Failed to delete comment");await Q()}catch(ee){p(ee instanceof Error?ee.message:"Failed to delete comment")}finally{V(0)}}};return r("section",{css:lv,children:[r("header",{css:dv,children:[r("div",{children:[t("h1",{css:uv,children:"Class Announcements"}),t("p",{css:mv(e),children:"Post updates and communicate with your students"})]}),t("button",{type:"button",css:eu,onClick:()=>{A(!0),L(0),R({course_id:"",title:"",content:""})},children:"+ New Announcement"})]}),r("div",{css:hv(e),children:[t("label",{css:Ui,htmlFor:"lecturer-ann-course-filter",children:"Filter by course:"}),r("select",{id:"lecturer-ann-course-filter",css:tu(e),value:w,onChange:N=>P(N.target.value),children:[t("option",{value:"",children:"All Courses"}),b.map(N=>r("option",{value:N.id,children:[N.course_code," ",N.course_name?`- ${N.course_name}`:""]},N.id))]})]}),x?r("section",{css:fv(e),children:[t("strong",{children:_>0?"Edit announcement":"New announcement"}),t("label",{css:Ui,htmlFor:"lecturer-ann-course",children:"Course (optional):"}),r("select",{id:"lecturer-ann-course",css:tu(e),value:B.course_id,onChange:N=>R(M=>({...M,course_id:N.target.value})),children:[t("option",{value:"",children:"All Courses (General)"}),b.map(N=>r("option",{value:N.id,children:[N.course_code," ",N.course_name?`- ${N.course_name}`:""]},N.id))]}),t("label",{css:Ui,htmlFor:"lecturer-ann-title",children:"Title:"}),t("input",{id:"lecturer-ann-title",css:qm(e),value:B.title,onChange:N=>R(M=>({...M,title:N.target.value})),maxLength:255}),t("label",{css:Ui,htmlFor:"lecturer-ann-content",children:"Message:"}),t("textarea",{id:"lecturer-ann-content",css:pv(e),value:B.content,onChange:N=>R(M=>({...M,content:N.target.value}))}),r("div",{css:gv,children:[t("button",{type:"button",css:bv(e),onClick:H,disabled:c,children:"Cancel"}),t("button",{type:"button",css:eu,onClick:ce,disabled:c,children:_>0?"Update":"Post"})]})]}):null,u?t("p",{css:Wi(e),children:u}):null,i?t("p",{css:Wi(e),children:"Loading announcements..."}):null,!i&&g.length===0?t("p",{css:Wi(e),children:"No announcements yet. Create your first update."}):null,g.map(N=>{var M,ee,j;return r("article",{css:yv(e),children:[r("div",{css:wv,children:[r("div",{css:vv,children:[t("span",{css:xv,children:N.course_code||"General"}),t("span",{css:Sv(e),children:ru(N.created_at)})]}),N.editable?r("div",{css:Av,children:[t("button",{type:"button",css:nu(!1),onClick:()=>oe(N),title:"Edit announcement","aria-label":"Edit announcement",children:t(Mf,{})}),t("button",{type:"button",css:nu(!0),onClick:()=>ie(N.id),title:"Delete announcement","aria-label":"Delete announcement",children:t(bn,{})})]}):null]}),t("h2",{css:$v,children:N.title}),t("p",{css:Cv(e),children:N.content}),r("div",{css:_v(e),children:[r("button",{type:"button",css:Lv(e),onClick:()=>W(E=>({...E,[N.id]:!E[N.id]})),children:[t(cp,{}),N.comment_count||0," comments"]}),r("span",{children:["👍 ",((M=N.reaction_counts)==null?void 0:M.like)||0," · ❤️ ",((ee=N.reaction_counts)==null?void 0:ee.love)||0," · 🎉"," ",((j=N.reaction_counts)==null?void 0:j.celebrate)||0]})]}),z[N.id]?t("div",{css:Nv,children:(N.comments||[]).length===0?t("div",{css:Wi(e),children:"No comments yet."}):(N.comments||[]).map(E=>r("div",{css:Dv(e),children:[r("div",{css:zv,children:[r("div",{css:Tv,children:[t("span",{css:Ev,children:t(Pc,{})}),t("span",{css:jv,children:E.student_name||"Student"}),t("span",{css:Rv(e),children:ru(E.created_at)})]}),E.can_delete?t("button",{type:"button",css:Bv,title:"Delete comment","aria-label":"Delete comment",onClick:()=>ue(E.id),disabled:F===E.id,children:t(bn,{})}):null]}),t("div",{css:Pv(e),children:E.comment_text})]},E.id))}):null]},N.id)})]})}const us="/strack/".replace(/\/$/,""),Iv="#7c3aed",kv="#8b5cf6",Fv="#94a3b8",Uv="#34d399",Hi={P:"#60a5fa",M:"#a78bfa",D:"#34d399",U:"#94a3b8"},Sr={onTime:"#22c55e",late:"#f97316",missing:"#ef4444"},Wv=s`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,Hv=s`
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0 0 0.35rem;
  letter-spacing: -0.02em;
`,Yv=e=>s`
  margin: 0 0 0.25rem;
  font-size: 0.95rem;
  color: ${e?"#a3a3a3":"#6b7280"};
  line-height: 1.45;
`,Kv=s`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Ua=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.12)":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
  background: ${e?"#111827":"#fff"};
`,Wa=s`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #7c3aed;
  margin-bottom: 0.45rem;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
`,Ha=s`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
`,Vv=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,Gv=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.15rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Jv=s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.32);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(124, 58, 237, 0.42);
  }

  &:focus-visible {
    outline: 2px solid #a78bfa;
    outline-offset: 2px;
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
    flex-shrink: 0;
  }
`,Zv=e=>s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  background: ${e?"#111827":"#fff"};
  color: ${e?"#f9fafb":"#111827"};
  border: 1px solid ${e?"rgba(255, 255, 255, 0.18)":"#d1d5db"};
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${e?"rgba(167, 139, 250, 0.55)":"#9ca3af"};
    background: ${e?"#1f2937":"#f9fafb"};
  }

  &:focus-visible {
    outline: 2px solid ${e?"#a78bfa":"#7c3aed"};
    outline-offset: 2px;
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
    flex-shrink: 0;
    color: inherit;
  }
`,ms=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.12)":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
  background: ${e?"#111827":"#fff"};
`,Yi=e=>s`
  margin: 0 0 0.75rem;
  font-size: 1.02rem;
  font-weight: 800;
  color: ${e?"#f9fafb":"#111827"};
`,qv=e=>s`
  margin-bottom: 0.85rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  border: 1px solid ${e?"rgba(255,255,255,0.12)":"#e5e7eb"};
  background: ${e?"#0b1220":"#f9fafb"};
`,su=e=>s`
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${e?"#9ca3af":"#6b7280"};
`,iu=s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,Ya=(e,n)=>s`
  border: 1px solid ${n?"#7c3aed":e?"rgba(255,255,255,0.15)":"#d1d5db"};
  background: ${n?e?"rgba(124,58,237,0.25)":"#ede9fe":e?"#111827":"#fff"};
  color: ${e?"#e5e7eb":"#111827"};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: #7c3aed;
  }
`,Ki=s`
  width: 100%;
  min-height: 260px;
`,ct=e=>s`
  margin: 0;
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};
`;function Xv(e,n,i,o){return!(n&&String((e==null?void 0:e.intake_year)??"")!==String(n)||i&&String((e==null?void 0:e.semester)||"")!==i||o&&String((e==null?void 0:e.course_study_year)||"")!==o)}const Vi=s`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
`,Gi=e=>s`
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${e?"#9ca3af":"#6b7280"};
`,Qv=e=>s`
  width: 100%;
  max-width: 22rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
  border: 1px solid ${e?"rgba(255,255,255,0.15)":"#d1d5db"};
  background: ${e?"#111827":"#fff"};
  color: ${e?"#f9fafb":"#111827"};
  font-family: inherit;
`,Mv=s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-end;
  margin-top: 0.55rem;
`,Ka=e=>s`
  min-width: 8.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.38rem 0.5rem;
  border-radius: 10px;
  border: 1px solid ${e?"rgba(255,255,255,0.15)":"#d1d5db"};
  background: ${e?"#111827":"#fff"};
  color: ${e?"#f9fafb":"#111827"};
  font-family: inherit;
`,ex=s`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.55);
`,tx=e=>s`
  width: 100%;
  max-width: 420px;
  border-radius: 14px;
  padding: 1.1rem 1.15rem;
  border: 1px solid ${e?"rgba(255,255,255,0.12)":"#e5e7eb"};
  background: ${e?"#111827":"#fff"};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
`,nx=e=>s`
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: ${e?"#f9fafb":"#111827"};
  line-height: 1.3;
`,Va=e=>s`
  margin: 0 0 0.85rem;
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,rx=s`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Ga=e=>s`
  border-radius: 10px;
  padding: 0.55rem 0.5rem;
  text-align: center;
  border: 1px solid ${e?"rgba(255,255,255,0.1)":"#e5e7eb"};
  background: ${e?"#0b1220":"#f9fafb"};
`,Ja=e=>s`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: ${e?"#f9fafb":"#111827"};
`,Za=e=>s`
  margin: 0.2rem 0 0;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${e?"#9ca3af":"#6b7280"};
`,sx=s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
`,ix=e=>s`
  border: 1px solid ${e?"rgba(255,255,255,0.2)":"#d1d5db"};
  background: transparent;
  color: ${e?"#e5e7eb":"#374151"};
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
`,ox=s`
  border: none;
  background: #7c3aed;
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
`,ax=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`,cx=e=>s`
  margin: 0;
  font-size: 1.22rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${e?"#f9fafb":"#111827"};
`,lx=e=>s`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  color: #7c3aed;
  padding: 0.35rem 0.25rem;
  border-radius: 8px;
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: #6d28d9;
    background: ${e?"rgba(124, 58, 237, 0.12)":"rgba(124, 58, 237, 0.08)"};
  }

  &:focus-visible {
    outline: 2px solid #a78bfa;
    outline-offset: 2px;
  }

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`,dx=e=>s`
  margin-top: 0.65rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 0.25rem;
  scrollbar-gutter: stable;

  max-height: 17.5rem;

  @media (max-width: 768px) {
    max-height: 30rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${e?"rgba(255,255,255,0.06)":"#f3f4f6"};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e?"rgba(167, 139, 250, 0.35)":"#c4b5fd"};
    border-radius: 8px;
  }
`,ux=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,mx=e=>s`
  border: 1px solid ${e?"rgba(255, 255, 255, 0.1)":"#e5e7eb"};
  border-radius: 12px;
  padding: 1rem 1rem 0.85rem;
  background: ${e?"#0b1220":"#fff"};
  display: flex;
  flex-direction: column;
  min-height: 0;
  transition:
    box-shadow 0.22s ease,
    transform 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${e?"rgba(167, 139, 250, 0.5)":"#d8b4fe"};
    box-shadow:
      0 14px 32px ${e?"rgba(0, 0, 0, 0.45)":"rgba(17, 24, 39, 0.1)"},
      0 0 0 1px ${e?"rgba(167, 139, 250, 0.2)":"rgba(124, 58, 237, 0.12)"};
  }
`,hx=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
`,fx=e=>s`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: ${e?"#d1d5db":"#4b5563"};
  background: ${e?"rgba(255, 255, 255, 0.08)":"#f3f4f6"};
  border: 1px solid ${e?"rgba(255, 255, 255, 0.12)":"#e5e7eb"};
  padding: 0.22rem 0.55rem;
  border-radius: 8px;
`,px=e=>s`
  width: 1.35rem;
  height: 1.35rem;
  color: ${"#9ca3af"};
  flex-shrink: 0;
`,gx=e=>s`
  margin: 0 0 0.45rem;
  font-size: 1.12rem;
  font-weight: 800;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${e?"#f9fafb":"#111827"};
`,bx=e=>s`
  margin: 0 0 auto;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${e?"#9ca3af":"#6b7280"};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.55em;
`,yx=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${e?"rgba(255, 255, 255, 0.08)":"#f3f4f6"};
  font-size: 0.82rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
`,wx=s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 800;
  color: #fff;
  background: #7c3aed;
  box-shadow: 0 2px 6px rgba(124, 58, 237, 0.35);
`;function vx(e){const n=Number(e);return Number.isFinite(n)?n>=70?"D":n>=60?"M":n>=40?"P":"U":null}function xx(e){const n=String(e.course_name||"Module").trim(),i=String(e.department||"").trim(),o=String(e.semester||"").trim(),c=String(e.course_study_year||"").trim(),l=[o,c].filter(Boolean).join(" · ");return l&&i?`${n}. ${l} · ${i}.`:l?`${n}. ${l}.`:i?`${n} — ${i}.`:`${n}.`}const Sx="strack_perf_assessments_";function $x(e){return String(e||"").trim().toLowerCase()}function Cx(e){if(!e)return{};try{const n=localStorage.getItem(`${Sx}${$x(e)}`);if(!n)return{};const i=JSON.parse(n);if(!i||typeof i!="object"||Array.isArray(i))return{};const o={};return Object.entries(i).forEach(([c,l])=>{if(!Array.isArray(l))return;const u={};l.forEach(p=>{if(!p||p.id==null)return;const b=String(p.id),v=String(p.name??"").trim();v&&(u[b]=v)}),o[String(c)]=u}),o}catch{return{}}}function _x(e,n,i){const o=String(e),c=String((n==null?void 0:n[o])??"").trim(),l=String((i==null?void 0:i[o])??"").trim();return l&&l!==o?l:c&&c!==o||c?c:l||o}function Ax(e,n,i,o,c=null){const l=e==null?void 0:e[n];if(!l||typeof l!="object")return[];const u=i&&typeof i=="object"?i:{},p=o&&typeof o=="object"?o:{},b=new Map;Object.entries(l).forEach(([g,y])=>{!y||typeof y!="object"||Object.entries(y).forEach(([w,P])=>{var L,z;if(((z=(L=c==null?void 0:c[n])==null?void 0:L[g])==null?void 0:z[w])==="not_marked")return;const A=Number(P);if(!Number.isFinite(A))return;const _=String(w);b.has(_)||b.set(_,[]),b.get(_).push(A)})});const v=[];return b.forEach((g,y)=>{const w=String(y),P=Math.min(...g),x=Math.max(...g),A=g.reduce((L,z)=>L+z,0)/g.length,_=_x(w,u,p);v.push({assessmentId:w,fullLabel:_,name:_.length>18?`${_.slice(0,16)}…`:_,min:Math.round(P*10)/10,max:Math.round(x*10)/10,avg:Math.round(A*10)/10,markCount:g.length,apiAssessmentLabel:String(u[w]??"").trim(),localColumnTitle:String(p[w]??"").trim()})}),v.sort((g,y)=>g.fullLabel.localeCompare(y.fullLabel,void 0,{sensitivity:"base"})),v}function Lx(e){return Array.isArray(e)?e.map(n=>{const i=String(n.entry_date||""),o=String(n.course_code||"Module"),c=i.length>=10?`${i.slice(5)} · ${o}`:o,l=String(n.start_time||"00:00:00").slice(0,8);return{id:n.timetable_entry_id,dueDate:i,xLabel:c,sortKey:`${i}T${l}#${n.timetable_entry_id}`,assignmentTitle:String(n.event_title||"Assignment"),courseLine:n.course_name?`${n.course_code} — ${n.course_name}`:String(n.course_code||""),onTime:Number(n.on_time)||0,late:Number(n.late)||0,missing:Number(n.missing)||0,enrolled:Number(n.enrolled)||0,onTimeCount:Number(n.on_time_count)||0,lateCount:Number(n.late_count)||0,missingCount:Number(n.missing_count)||0}}).sort((n,i)=>n.sortKey.localeCompare(i.sortKey)):[]}function Nx({darkMode:e,userEmail:n,onOpenPerformance:i,onGoToAttendance:o,onGoToGrades:c,onViewAllCourses:l}){const[u,p]=a.useState(!0),[b,v]=a.useState([]),[g,y]=a.useState({}),[w,P]=a.useState({}),[x,A]=a.useState({present:0,late:0,absent:0,total:0,rate:0}),[_,L]=a.useState([]),[z,W]=a.useState([]),[F,V]=a.useState({}),[B,R]=a.useState(""),[q,H]=a.useState(null),[Q,ce]=a.useState(0),[oe,ie]=a.useState(null),[ue,N]=a.useState(""),[M,ee]=a.useState(""),[j,E]=a.useState(""),C=a.useMemo(()=>b.filter(S=>Xv(S,ue,M,j)),[b,ue,M,j]),X=a.useMemo(()=>C.map(S=>Number(S.id)).filter(S=>Number.isFinite(S)&&S>0).sort((S,K)=>S-K),[C]),J=a.useMemo(()=>{const S=new Set;b.forEach(le=>{const _e=Number(le.intake_year);Number.isFinite(_e)&&_e>0&&S.add(_e)});const K=Kc();return[...new Set([...K,...S])].sort((le,_e)=>le-_e)},[b]);a.useEffect(()=>{ie(null)},[ue,M,j]),a.useEffect(()=>{if(X.length===0){ie([]);return}ie(S=>{if(S===null)return null;if(S.length===0)return[];const K=new Set(X);return[...S.filter(se=>K.has(se)),...X.filter(se=>!S.includes(se))].sort((se,le)=>se-le)})},[X]);const G=a.useMemo(()=>{if(oe===null)return X;const S=new Set(X);return oe.filter(K=>S.has(K))},[oe,X]),me=a.useMemo(()=>G.join(","),[G]),ye=a.useMemo(()=>{const S=new Set(G);return[...b].filter(K=>S.has(Number(K.id))).sort((K,se)=>String(K.course_code||"").localeCompare(String(se.course_code||"")))},[b,G]),he=a.useMemo(()=>{const S=new Set(G);return[...C].filter(K=>S.has(Number(K.id))).sort((K,se)=>String(K.course_code||"").localeCompare(String(se.course_code||"")))},[C,G]),ze=a.useCallback(async()=>{if(!n)return;if(G.length===0){A({present:0,late:0,absent:0,total:0,rate:0}),L([]);return}const S=new URLSearchParams({user_email:n,lecturer_summary:"1",t:String(Date.now())});G.length>0&&S.set("course_ids",G.join(","));const se=await(await fetch(`${us}/backend/attendance_marks.php?${S}`,{cache:"no-store"})).json().catch(()=>({}));if(!se.success){A({present:0,late:0,absent:0,total:0,rate:0}),L([]);return}A(se.rollup||{present:0,late:0,absent:0,total:0,rate:0}),L(Array.isArray(se.trend)?se.trend:[])},[n,G,me,X.join(",")]);a.useEffect(()=>{if(!n)return;let S=!0;async function K(){p(!0);try{const[se,le]=await Promise.all([fetch(`${us}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${us}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})]),[_e,He]=await Promise.all([se.json(),le.json()]);if(!S)return;const it=_e.success?_e.lecturers||[]:[],Ae=He.success?He.courses||[]:[],Te=String(n).trim().toLowerCase(),Je=it.find(wt=>String(wt.email||"").trim().toLowerCase()===Te),yt=String((Je==null?void 0:Je.lecturer_id)||"").trim(),Ze=Ae.filter(wt=>String(wt.lecturer_id||"").trim()===yt);v(Ze),N(""),ee(""),E(""),ie(null)}catch{if(!S)return;v([]),y({}),P({}),V({}),A({present:0,late:0,absent:0,total:0,rate:0}),L([])}finally{S&&p(!1)}}return K(),()=>{S=!1}},[n]),a.useEffect(()=>{if(!n||b.length===0){y({}),P({}),V({});return}if(G.length===0){y({}),P({}),V({});return}let S=!1;const K=new URLSearchParams({user_email:n,lecturer_sync:"1",t:String(Date.now())});return G.length>0&&K.set("course_ids",G.join(",")),(async()=>{try{const le=await(await fetch(`${us}/backend/assessment_scores.php?${K}`,{cache:"no-store"})).json().catch(()=>({}));if(S)return;le.success&&le.nested&&typeof le.nested=="object"?y(le.nested):y({}),le.success&&le.nested_status&&typeof le.nested_status=="object"?P(le.nested_status):P({});const _e=le.labels_by_course;if(_e&&typeof _e=="object"&&!Array.isArray(_e)){const He={};Object.entries(_e).forEach(([it,Ae])=>{if(Ae&&typeof Ae=="object"&&!Array.isArray(Ae)){const Te={};Object.entries(Ae).forEach(([Je,yt])=>{Te[String(Je)]=String(yt??"").trim()||String(Je)}),He[String(it)]=Te}}),V(He)}else V({});ce(He=>He+1)}catch{S||(y({}),P({}),V({}))}})(),()=>{S=!0}},[n,b.length,me,X.join(",")]),a.useEffect(()=>{if(!n||G.length===0){W([]);return}let S=!1;const K=new Date;K.setMonth(K.getMonth()-6);const se=new Date;se.setMonth(se.getMonth()+12);const le=K.toISOString().slice(0,10),_e=se.toISOString().slice(0,10);return(async()=>{try{const He=new URLSearchParams({lecturer_submission_bands:"1",lecturer_email:n,course_ids:G.join(","),from:le,to:_e,t:String(Date.now())}),Ae=await(await fetch(`${us}/backend/demo_assignment_submissions.php?${He}`,{cache:"no-store"})).json().catch(()=>({}));if(S)return;W(Array.isArray(Ae.submission_bands)?Ae.submission_bands:[])}catch{S||W([])}})(),()=>{S=!0}},[n,me]),a.useEffect(()=>{if(!n)return;let S=!1;return(async()=>{try{await ze()}catch{S||(A({present:0,late:0,absent:0,total:0,rate:0}),L([]))}})(),()=>{S=!0}},[n,ze]),a.useEffect(()=>{const S=()=>ce(se=>se+1);window.addEventListener("focus",S);const K=()=>{document.visibilityState==="visible"&&S()};return document.addEventListener("visibilitychange",K),()=>{window.removeEventListener("focus",S),document.removeEventListener("visibilitychange",K)}},[]),a.useEffect(()=>{if(!B)return;const S=Number(B);(!Number.isFinite(S)||!G.includes(S))&&R("")},[me,B,G]),a.useLayoutEffect(()=>{if(!u){if(ye.length===0){R("");return}R(S=>{const K=new Set(ye.map(se=>String(se.id)));return S&&K.has(String(S))?S:String(ye[0].id)})}},[u,ye]),a.useEffect(()=>{if(!q)return;const S=document.body.style.overflow;document.body.style.overflow="hidden";const K=se=>{se.key==="Escape"&&H(null)};return window.addEventListener("keydown",K),()=>{document.body.style.overflow=S,window.removeEventListener("keydown",K)}},[q]);const ve=a.useMemo(()=>{if(!B)return"";const S=b.find(le=>String(le.id)===String(B));if(!S)return"";const K=S.course_code||"Module",se=S.course_name?` — ${S.course_name}`:"";return`${K}${se}`},[b,B]),fe=a.useMemo(()=>Cx(n),[n,Q]),Y=a.useMemo(()=>Lx(z),[z]),re=a.useMemo(()=>{if(!B)return[];const S=String(B);return Ax(g,S,F[S]||{},fe[S]||{},w)},[g,w,B,F,fe]),xe=a.useMemo(()=>{const S=new Set,K=new Set(G);return b.forEach(se=>{const le=Number(se.id);K.has(le)&&(Array.isArray(se.students)?se.students:[]).forEach(_e=>{S.add(String(_e.id))})}),S.size},[b,G]),Se=a.useMemo(()=>G.length,[G]),D=a.useMemo(()=>{const S=Number(x.total||0),K=Number(x.present||0);return S<=0?0:Math.round(K/S*100)},[x]),ae=a.useMemo(()=>{const S=new Set(G),K=[];return Object.entries(g).forEach(([se,le])=>{const _e=Number(se);S.has(_e)&&(!le||typeof le!="object"||Object.entries(le).forEach(([He,it])=>{!it||typeof it!="object"||Object.entries(it).forEach(([Ae,Te])=>{var Ze,wt;if(((wt=(Ze=w==null?void 0:w[se])==null?void 0:Ze[He])==null?void 0:wt[Ae])==="not_marked")return;const yt=Number(Te);Number.isFinite(yt)&&K.push(yt)})}))}),K},[g,w,G]),ge=a.useMemo(()=>{let S=0,K=0,se=0,le=0;return ae.forEach(_e=>{const He=vx(_e);He==="P"?S+=1:He==="M"?K+=1:He==="D"?se+=1:le+=1}),[{band:"F",key:"U",count:le,fill:Hi.U},{band:"P (Pass)",key:"P",count:S,fill:Hi.P},{band:"M (Merit)",key:"M",count:K,fill:Hi.M},{band:"D (Distinction)",key:"D",count:se,fill:Hi.D}]},[ae]),T=a.useMemo(()=>_.map(S=>{const K=Number(S.total)||0,se=Number(S.absent)||0,le=K>0?Math.round(se/K*100):0;return{...S,absentRate:le,label:S.session_date&&String(S.session_date).length>=10?String(S.session_date).slice(5):S.session_date||""}}),[_]),h=a.useCallback(S=>{const K=S!=null&&S.payload&&typeof S.payload=="object"?S.payload:S;K!=null&&K.assessmentId&&H({assessmentId:String(K.assessmentId),fullLabel:String(K.fullLabel||K.name||"Assessment"),min:Number(K.min)||0,avg:Number(K.avg)||0,max:Number(K.max)||0,markCount:Number(K.markCount)||0,apiAssessmentLabel:String(K.apiAssessmentLabel??"").trim(),localColumnTitle:String(K.localColumnTitle??"").trim()})},[]),m=a.useCallback(()=>{!(q!=null&&q.assessmentId)||!B||!i||(i({assessmentId:String(q.assessmentId),courseId:String(B)}),H(null))},[q,B,i]),$=a.useMemo(()=>({backgroundColor:e?"#1f2937":"#fff",border:`1px solid ${e?"#374151":"#e5e7eb"}`,borderRadius:8,color:e?"#f9fafb":"#111827"}),[e]),O=e?"#9ca3af":"#6b7280",ne=e?"#374151":"#e5e7eb",k=S=>{const K=Number(S);!Number.isFinite(K)||K<=0||ie(se=>{const le=se===null?[...X]:[...se];return le.includes(K)?le.filter(_e=>_e!==K):[...le,K].sort((_e,He)=>_e-He)})},te=()=>ie(null),Ce=()=>ie([]),$e=X.length===0?"No modules match cohort filters":G.length===0?"None selected":oe===null||G.length===X.length?`All ${X.length} module${X.length===1?"":"s"}`:`${G.length} module${G.length===1?"":"s"}`;return r("div",{css:Wv,children:[t("h1",{css:Hv,children:"Dashboard"}),r("p",{css:Yv(e),children:["Overview of your teaching load, cohort attendance, and assessment outcomes. Narrow by intake year, semester, and study year, then use module chips (reload defaults to ",t("strong",{children:"all modules"})," selected)."]}),r("div",{css:Kv,children:[r("article",{css:Ua(e),children:[r("div",{css:Wa,children:[t(kt,{"aria-hidden":!0}),t("span",{children:"Total students"})]}),t("p",{css:Ha,children:u?"—":xe})]}),r("article",{css:Ua(e),children:[r("div",{css:Wa,children:[t(jo,{"aria-hidden":!0}),t("span",{children:"Avg attendance"})]}),t("p",{css:Ha,children:u?"—":`${D}%`})]}),r("article",{css:Ua(e),children:[r("div",{css:Wa,children:[t(St,{"aria-hidden":!0}),t("span",{children:"Active courses"})]}),t("p",{css:Ha,children:u?"—":Se})]})]}),r("div",{css:qv(e),children:[t("p",{css:su(e),children:"Cohort & module filters"}),r("div",{css:Mv,children:[r("div",{css:Vi,style:{marginBottom:0,minWidth:"7.5rem"},children:[t("label",{css:Gi(e),htmlFor:"dash-flt-intake",children:"Intake year"}),r("select",{id:"dash-flt-intake",css:Ka(e),value:ue,onChange:S=>N(S.target.value),children:[t("option",{value:"",children:"Any"}),J.map(S=>t("option",{value:String(S),children:S},S))]})]}),r("div",{css:Vi,style:{marginBottom:0,minWidth:"9.5rem"},children:[t("label",{css:Gi(e),htmlFor:"dash-flt-sem",children:"Semester"}),t("select",{id:"dash-flt-sem",css:Ka(e),value:M,onChange:S=>ee(S.target.value),children:Gs.map(S=>t("option",{value:S.value,children:S.value?S.label:"Any"},S.value||"any"))})]}),r("div",{css:Vi,style:{marginBottom:0,minWidth:"9rem"},children:[t("label",{css:Gi(e),htmlFor:"dash-flt-study",children:"Study year"}),t("select",{id:"dash-flt-study",css:Ka(e),value:j,onChange:S=>E(S.target.value),children:Or.map(S=>t("option",{value:S.value,children:S.value?S.label:"Any"},S.value||"any"))})]})]}),t("p",{css:[su(e),s`margin-top:0.65rem;`],children:"Modules in scope"}),r("div",{css:iu,children:[t("button",{type:"button",css:Ya(e,!1),onClick:te,children:"Select all"}),t("button",{type:"button",css:Ya(e,!1),onClick:Ce,children:"Clear"}),t("span",{css:s`align-self:center;font-size:0.82rem;color:${e?"#9ca3af":"#6b7280"};font-weight:600;`,children:$e})]}),C.length>0?t("div",{css:[iu,s`margin-top:0.55rem;`],children:C.map(S=>{const K=Number(S.id),se=G.includes(K);return t("button",{type:"button",css:Ya(e,se),onClick:()=>k(K),children:S.course_code||"Module"},K)})}):b.length>0?t("p",{css:ct(e),style:{marginTop:"0.45rem"},children:'No modules match the cohort filters above. Set filters to "Any" to see all your modules.'}):t("p",{css:ct(e),style:{marginTop:"0.45rem"},children:"No courses assigned to your lecturer account."})]}),r("div",{css:Vv,children:[r("section",{css:ms(e),children:[r("h2",{css:Yi(e),children:[t(vn,{style:{display:"inline",verticalAlign:"text-bottom",marginRight:6}}),"Grade distribution (all bands)"]}),u?t("p",{css:ct(e),children:"Loading…"}):r("div",{css:Ki,children:[t(xt,{width:"100%",height:280,children:r(zn,{data:ge,margin:{top:8,right:12,left:0,bottom:8},children:[t(Nt,{strokeDasharray:"3 3",stroke:ne,vertical:!1}),t(Dt,{dataKey:"band",tick:{fill:O,fontSize:10},interval:0,angle:-12,textAnchor:"end",height:52}),t(zt,{allowDecimals:!1,tick:{fill:O,fontSize:11},width:40}),t(Ct,{formatter:S=>[String(S),"Total students"],contentStyle:$}),t(It,{dataKey:"count",radius:[6,6,0,0],maxBarSize:56,children:ge.map(S=>t(no,{fill:S.fill},S.key))})]})}),ae.length===0?t("p",{css:[ct(e),s`margin-top: 0.25rem;`],children:"No assessment marks yet. Add scores under Performance."}):null]})]}),r("section",{css:ms(e),children:[t("h2",{css:Yi(e),children:"Attendance trend"}),u?t("p",{css:ct(e),children:"Loading…"}):G.length===0?t("p",{css:ct(e),children:"Select at least one module to show attendance."}):T.length===0?t("p",{css:ct(e),children:"No attendance sessions recorded for this selection yet."}):t("div",{css:Ki,children:t(xt,{width:"100%",height:280,children:r(js,{data:T,margin:{top:8,right:12,left:0,bottom:8},children:[t(Nt,{strokeDasharray:"3 3",stroke:ne}),t(Dt,{dataKey:"label",tick:{fill:O,fontSize:10},interval:"preserveStartEnd"}),t(zt,{domain:[0,100],tick:{fill:O,fontSize:11},width:36,tickFormatter:S=>`${S}%`}),t(Ct,{formatter:(S,K,se)=>{const le=se==null?void 0:se.dataKey;return le==="rate"?[`${S}%`,"Present rate"]:le==="absentRate"?[`${S}%`,"Absent rate"]:[`${S}%`,K]},labelFormatter:S=>`Class day ${S}`,contentStyle:$}),t(Nr,{}),t(Qn,{type:"monotone",dataKey:"rate",name:"Present %",stroke:Iv,strokeWidth:2,dot:{r:3}}),t(Qn,{type:"monotone",dataKey:"absentRate",name:"Absent %",stroke:"#ef4444",strokeWidth:2,dot:{r:3},connectNulls:!0})]})})})]}),r("section",{css:ms(e),children:[r("h2",{css:Yi(e),children:[t(Vn,{style:{display:"inline",verticalAlign:"text-bottom",marginRight:6}}),"Assignment submission trends"]}),u?t("p",{css:ct(e),children:"Loading…"}):G.length===0?t("p",{css:ct(e),children:"Select at least one module to show charts."}):r("div",{css:Ki,children:[t(xt,{width:"100%",height:320,children:r(zn,{data:Y,margin:{top:8,right:12,left:0,bottom:52},barCategoryGap:"18%",children:[t(Nt,{strokeDasharray:"3 3",stroke:ne,vertical:!1}),t(Dt,{dataKey:"xLabel",tick:{fill:O,fontSize:10},interval:0,angle:-32,textAnchor:"end",height:68}),t(zt,{domain:[0,100],tick:{fill:O,fontSize:11},width:44,tickFormatter:S=>`${S}%`}),t(Ct,{content:({active:S,payload:K})=>{if(!S||!(K!=null&&K.length))return null;const se=K[0].payload,le=se.dueDate&&/^\d{4}-\d{2}-\d{2}$/.test(se.dueDate)?new Date(`${se.dueDate}T12:00:00`).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"}):se.dueDate||"",_e=Number(se.enrolled)>0;return r("div",{style:{padding:"0.5rem 0.65rem",fontSize:"0.82rem",lineHeight:1.45,maxWidth:"22rem",backgroundColor:e?"#1f2937":"#fff",border:`1px solid ${e?"#374151":"#e5e7eb"}`,borderRadius:8,color:e?"#f9fafb":"#111827"},children:[t("div",{style:{fontWeight:800,marginBottom:"0.35rem"},children:le}),t("div",{style:{opacity:.95},children:se.courseLine}),t("div",{style:{marginTop:"0.25rem",fontWeight:600},children:se.assignmentTitle}),_e?r("div",{style:{marginTop:"0.45rem"},children:[r("div",{style:{color:Sr.onTime},children:["On time (by deadline): ",r("strong",{children:[se.onTime,"%"]}),se.onTimeCount!=null?` (${se.onTimeCount} students)`:""]}),r("div",{style:{color:Sr.late},children:["Late (after deadline): ",r("strong",{children:[se.late,"%"]}),se.lateCount!=null?` (${se.lateCount} students)`:""]}),r("div",{style:{color:Sr.missing},children:["Missing (no upload): ",r("strong",{children:[se.missing,"%"]}),se.missingCount!=null?` (${se.missingCount} students)`:""]}),r("div",{style:{marginTop:"0.35rem",fontSize:"0.78rem",opacity:.88},children:["Enrolled students: ",se.enrolled]})]}):t("div",{style:{marginTop:"0.4rem",fontSize:"0.8rem",opacity:.88},children:"No students enrolled on this module for this count."})]})}}),t(Nr,{}),t(It,{dataKey:"onTime",name:"On time (by deadline)",stackId:"bands",fill:Sr.onTime,maxBarSize:48,radius:[0,0,0,0]}),t(It,{dataKey:"late",name:"Late (after deadline)",stackId:"bands",fill:Sr.late,maxBarSize:48,radius:[0,0,0,0]}),t(It,{dataKey:"missing",name:"Missing (no upload)",stackId:"bands",fill:Sr.missing,maxBarSize:48,radius:[6,6,0,0]})]})}),Y.length===0?t("p",{css:[ct(e),s`margin-top: 0.25rem;`],children:"No assignment due dates in Calendar for the selected modules (add events in the Calendar tab)."}):null]})]}),r("section",{css:ms(e),children:[r("h2",{css:Yi(e),children:[t(vn,{style:{display:"inline",verticalAlign:"text-bottom",marginRight:6}}),"Performance by assessment"]}),u?t("p",{css:ct(e),children:"Loading…"}):G.length===0?t("p",{css:ct(e),children:"Select at least one module in the filter above to use this chart."}):ye.length===0?t("p",{css:ct(e),children:"No modules in the current selection."}):r(rt,{children:[r("div",{css:Vi,children:[t("label",{htmlFor:"perf-module-select",css:Gi(e),children:"Module (one subject)"}),t("select",{id:"perf-module-select",css:Qv(e),value:B,onChange:S=>R(S.target.value),children:ye.map(S=>t("option",{value:String(S.id),children:(S.course_code||"Module")+(S.course_name?` — ${S.course_name}`:"")},S.id))})]}),B?re.length===0?t("p",{css:ct(e),children:"No assessment marks saved for this module yet. Enter scores under Performance."}):t("div",{css:Ki,children:t(xt,{width:"100%",height:300,children:r(zn,{data:re,margin:{top:8,right:12,left:0,bottom:56},children:[t(Nt,{strokeDasharray:"3 3",stroke:ne,vertical:!1}),t(Dt,{dataKey:"name",tick:{fill:O,fontSize:10},interval:0,angle:-20,textAnchor:"end",height:52}),t(zt,{domain:[0,100],tick:{fill:O,fontSize:11},width:40,tickFormatter:S=>`${S}%`}),t(Ct,{contentStyle:$,formatter:(S,K)=>[`${S}%`,K],labelFormatter:(S,K)=>{var se,le;return((le=(se=K==null?void 0:K[0])==null?void 0:se.payload)==null?void 0:le.fullLabel)||""}}),t(Nr,{}),t(It,{dataKey:"min",name:"Min",fill:Fv,radius:[6,0,0,6],maxBarSize:28,cursor:"pointer",onClick:h}),t(It,{dataKey:"avg",name:"Average",fill:kv,maxBarSize:28,cursor:"pointer",onClick:h}),t(It,{dataKey:"max",name:"Max",fill:Uv,radius:[0,6,6,0],maxBarSize:28,cursor:"pointer",onClick:h})]})})}):t("p",{css:ct(e),children:"Loading…"})]})]})]}),(o||c)&&r("div",{css:Gv,children:[o?r("button",{type:"button",css:Jv,onClick:o,"aria-label":"Open attendance – mark attendance for your sessions",children:[t(Vn,{"aria-hidden":!0}),"Mark Attendance"]}):null,c?r("button",{type:"button",css:Zv(e),onClick:c,"aria-label":"Open performance – update grades",children:[t(or,{"aria-hidden":!0}),"Update Grades"]}):null]}),r("section",{css:ms(e),"aria-labelledby":"dash-my-courses-heading",children:[r("div",{css:ax,children:[t("h2",{id:"dash-my-courses-heading",css:cx(e),children:"My Courses"}),l&&!u&&he.length>0?r("button",{type:"button",css:lx(e),onClick:l,"aria-label":"View all courses — open Courses section",children:["View all",t(Cm,{"aria-hidden":!0})]}):null]}),u?t("p",{css:ct(e),style:{marginTop:"0.5rem"},children:"Loading…"}):C.length===0?t("p",{css:ct(e),style:{marginTop:"0.5rem"},children:'No modules match the cohort filters. Set intake, semester, or study year to "Any" to see your modules.'}):G.length===0?t("p",{css:ct(e),style:{marginTop:"0.5rem"},children:"Select at least one module in the filter above to list courses here."}):he.length===0?t("p",{css:ct(e),style:{marginTop:"0.5rem"},children:"No modules in the current selection."}):t("div",{css:dx(e),role:"region","aria-label":"Course cards — scroll for more",children:t("div",{css:ux,children:he.map(S=>{const K=String(S.course_code||"Module").trim()||"Module",se=String(S.course_name||"Untitled module").trim(),le=Number(S.credits),_e=Number.isFinite(le)&&le>0?String(le):"—";return r("article",{css:mx(e),children:[r("div",{css:hx,children:[t("span",{css:fx(e),children:K}),t(St,{css:px(e),"aria-hidden":!0})]}),t("h3",{css:gx(e),children:se}),t("p",{css:bx(e),children:xx(S)}),r("div",{css:yx(e),children:[t("span",{children:"Credits"}),t("span",{css:wx,children:_e})]})]},S.id)})})})]}),q&&t("div",{css:ex,onClick:()=>H(null),onKeyDown:S=>S.key==="Escape"&&H(null),role:"presentation",children:r("div",{css:tx(e),role:"dialog","aria-modal":"true","aria-labelledby":"perf-assessment-modal-title",onClick:S=>S.stopPropagation(),children:[t("h3",{id:"perf-assessment-modal-title",css:nx(e),children:q.fullLabel}),t("p",{css:Va(e),children:ve||"Selected module"}),r("p",{css:Va(e),style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:"0.78rem",lineHeight:1.45,marginBottom:"0.85rem"},children:[t("strong",{children:"Database"})," (table ",t("code",{children:"strack_assessment_scores"}),"):",t("br",{}),"• assessment_id: ",q.assessmentId,t("br",{}),"• assessment_label:"," ",q.apiAssessmentLabel?q.apiAssessmentLabel===q.assessmentId?`${q.apiAssessmentLabel} (same as id — save again from Performance to store a proper title)`:q.apiAssessmentLabel:"(empty in DB — open Performance, edit marks, Save to store the column name)",q.localColumnTitle?r(rt,{children:[t("br",{}),"• Performance column title (this device): ",q.localColumnTitle]}):null]}),r("div",{css:rx,children:[r("div",{css:Ga(e),children:[r("p",{css:Ja(e),children:[q.min,"%"]}),t("p",{css:Za(e),children:"Min"})]}),r("div",{css:Ga(e),children:[r("p",{css:Ja(e),children:[q.avg,"%"]}),t("p",{css:Za(e),children:"Average"})]}),r("div",{css:Ga(e),children:[r("p",{css:Ja(e),children:[q.max,"%"]}),t("p",{css:Za(e),children:"Max"})]})]}),r("p",{css:Va(e),style:{marginBottom:"1rem"},children:["Based on ",t("strong",{children:q.markCount})," saved mark",q.markCount===1?"":"s"," (all students on this assessment)."]}),r("div",{css:sx,children:[t("button",{type:"button",css:ix(e),onClick:()=>H(null),children:"Close"}),i?t("button",{type:"button",css:ox,onClick:m,children:"Open in Performance"}):null]})]})})]})}const hs="/strack/".replace(/\/$/,""),Dx=s`
  width: 100%;
`,zx=s`
  margin: 0 0 0.25rem;
  font-size: clamp(1.45rem, 2.2vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
`,ou=e=>s`
  margin: 0 0 1.1rem;
  max-width: 40rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${e?"#9ca3af":"#6b7280"};
`,au=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 14px;
  background: ${e?"#1f1f1f":"#fff"};
  padding: 1.1rem 1.2rem 1.25rem;
  margin-bottom: 1rem;
`,qa=e=>s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    color: #6366f1;
    flex-shrink: 0;
  }
`,cu=s`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.9rem;
`,lu=e=>s`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
`,du=e=>s`
  width: 100%;
  max-width: 28rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  border: 1px solid ${e?"#404040":"#d1d5db"};
  background: ${e?"#262626":"#fff"};
  color: inherit;
  font: inherit;
  font-size: 0.95rem;
  box-sizing: border-box;
`,Xa=e=>s`
  margin: 0.25rem 0 0;
  font-size: 0.82rem;
  color: ${e?"#9ca3af":"#6b7280"};
  max-width: 32rem;
`,Tx=s`
  border: none;
  border-radius: 10px;
  background: #6366f1;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.55rem 1.1rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,Ex=s`
  border: 1px solid #dc2626;
  border-radius: 10px;
  background: transparent;
  color: #dc2626;
  font-weight: 700;
  font-size: 0.92rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,jx=e=>s`
  border: 1px solid ${e?"rgba(248, 113, 113, 0.4)":"#fecaca"};
  border-radius: 14px;
  background: ${e?"rgba(127, 29, 29, 0.2)":"#fff7ed"};
  padding: 1.1rem 1.2rem 1.25rem;
  margin-top: 1rem;
`,uu=(e,n)=>s`
  margin: 0.75rem 0 0;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  max-width: 32rem;
  color: ${e?n?"#a7f3d0":"#065f46":n?"#fecaca":"#991b1b"};
  background: ${e?n?"rgba(6, 95, 70, 0.25)":"#ecfdf5":n?"rgba(127, 29, 29, 0.25)":"#fef2f2"};
  border: 1px solid
    ${e?n?"rgba(16, 185, 129, 0.4)":"#a7f3d0":n?"rgba(248, 113, 113, 0.35)":"#fecaca"};
`,Rx=e=>s`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-top: 0.4rem;
  font-size: 0.86rem;
  color: ${e?"#9ca3af":"#6b7280"};
  font-variant-numeric: tabular-nums;
`;function Px({darkMode:e,userEmail:n}){var B;const[i,o]=a.useState(!0),[c,l]=a.useState([]),[u,p]=a.useState(""),[b,v]=a.useState(((B=er[0])==null?void 0:B.id)||""),[g,y]=a.useState(!1),[w,P]=a.useState(null),[x,A]=a.useState(!1),[_,L]=a.useState(null),z=a.useCallback(async()=>{if(!n){o(!1),l([]);return}o(!0),P(null);try{const[R,q,H]=await Promise.all([fetch(`${hs}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${hs}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${hs}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})]),[Q,ce,oe]=await Promise.all([R.json(),q.json(),H.json()]),ie=Q.success?Q.lecturers||[]:[],ue=String(n).toLowerCase().trim(),N=ie.find(J=>String(J.email||"").toLowerCase().trim()===ue)||null,M=N?String(N.lecturer_id||"").trim():"",ee=ce.success?ce.courses||[]:[],j=oe.success?oe.students||[]:[],E=M?ee.filter(J=>String(J.lecturer_id||"").trim()===M):[],C=new Set;E.forEach(J=>{(Array.isArray(J.students)?J.students:[]).forEach(me=>{const ye=Number(me.id);Number.isFinite(ye)&&ye>0&&C.add(ye)})});const X=j.filter(J=>C.has(Number(J.id))).map(J=>({id:Number(J.id),label:[J.full_name,J.email,J.student_id].filter(Boolean).join(" · ")})).sort((J,G)=>J.label.localeCompare(G.label,void 0,{sensitivity:"base"}));l(X)}catch{l([])}finally{o(!1)}},[n]);a.useEffect(()=>{z()},[z]);const W=a.useMemo(()=>er.find(R=>R.id===b)||null,[b]),F=async R=>{if(R.preventDefault(),!(!n||!u||!b)){y(!0),P(null);try{const H=await(await fetch(`${hs}/backend/lecturer_award_badge.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_email:n,student_id:Number(u),badge_id:b})})).json().catch(()=>({}));H.success?(P({ok:!0,text:`Badge awarded. +${H.points_added} points added. Student’s total points: ${H.student_points}.`}),p("")):P({ok:!1,text:H.message||"Could not award badge."})}catch{P({ok:!1,text:"Network error. Try again."})}finally{y(!1)}}},V=async()=>{if(n&&window.confirm(`Reset all badge awards that you have issued? This cannot be undone.

• Those badges will show as locked again for affected students (except Pomodoro if earned via Study Timer).
• Each affected student’s total points will be set to 0 in STRACK.

Continue?`)){A(!0),L(null);try{const q=await(await fetch(`${hs}/backend/lecturer_reset_badge_awards.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_email:n})})).json().catch(()=>({}));q.success?(L({ok:!0,text:`Removed ${q.awards_deleted} award row(s). ${q.students_reset} student(s) affected; points set to 0 for each.`}),z()):L({ok:!1,text:q.message||"Could not reset."})}catch{L({ok:!1,text:"Network error. Try again."})}finally{A(!1)}}};return r("div",{css:Dx,children:[t("h1",{css:zx,children:"Badge awards"}),r("p",{css:ou(e),children:["Choose a student on one of your modules and a badge. The student’s points increase immediately and the badge records on their profile in ",t("strong",{children:"Badges"}),". Each badge can only be granted once per student."]}),i?t("p",{css:ou(e),children:"Loading your classes…"}):c.length===0?r("div",{css:au(e),children:[r("h2",{css:qa(e),children:[t(kt,{}),"No students available"]}),t("p",{css:Xa(e),children:"Add students to your modules in Courses, then you can award badges here."})]}):r("form",{css:au(e),onSubmit:F,children:[r("h2",{css:qa(e),children:[t(or,{}),"Award a badge"]}),r("div",{css:cu,children:[t("label",{htmlFor:"award-student",css:lu(e),children:"Student"}),r("select",{id:"award-student",css:du(e),value:u,onChange:R=>p(R.target.value),required:!0,children:[t("option",{value:"",children:"Select a student"}),c.map(R=>t("option",{value:R.id,children:R.label},R.id))]}),t("p",{css:Xa(e),children:"Only students enrolled on your modules are listed."})]}),r("div",{css:cu,children:[t("label",{htmlFor:"award-badge",css:lu(e),children:"Badge"}),t("select",{id:"award-badge",css:du(e),value:b,onChange:R=>v(R.target.value),required:!0,children:er.map(R=>r("option",{value:R.id,children:[R.icon," ",R.name," (+",R.pointsAward," pts)"]},R.id))}),W?t("p",{css:Rx(e),children:r("span",{children:[t("strong",{children:"Points to add:"})," ",W.pointsAward]})}):null]}),t("button",{type:"submit",css:Tx,disabled:g||!u||!b,children:g?"Awarding…":"Award badge"}),w?t("p",{css:uu(w.ok,e),role:"status",children:w.text}):null]}),!i&&n?r("div",{css:jx(e),children:[r("h2",{css:qa(e),children:[t(vc,{}),"Reset your badge awards"]}),r("p",{css:Xa(e),children:["Removes ",t("strong",{children:"every"})," badge you have issued to any student. Affected students will see those badges as locked again, and ",t("strong",{children:"their points total will be set to 0"})," (Pomodoro progress from the Study Timer is separate). Use at the end of a term or for demos."]}),r("button",{type:"button",css:Ex,onClick:V,disabled:x,children:[t(vc,{style:{width:18,height:18}}),x?"Resetting…":"Reset all my badge awards"]}),_?t("p",{css:uu(_.ok,e),style:{marginTop:"0.75rem"},role:"status",children:_.text}):null]}):null]})}const fs="/strack/".replace(/\/$/,""),sr="0.35s ease",Bx=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,Ox=s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,Ix=e=>s`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${sr};
  }
`,kx=e=>s`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${sr};
`,mu=e=>s`
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
  transition: color ${sr};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,Fx=s`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,Ux=s`
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
`,Wx=s`
  flex: 1;
  min-width: 0;
`,Hx=e=>s`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${sr};
`,Yx=e=>s`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${sr};
`,Kx=s`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Vx=(e,n)=>s`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${n?e?"rgba(124, 58, 237, 0.4)":"#7c3aed":"transparent"};
  color: ${n?"#fff":e?"#d1d5db":"#1a1a1a"};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${sr}, color ${sr};

  &:hover {
    background: ${n?e?"rgba(124, 58, 237, 0.5)":"#6d28d9":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,Gx=s`
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
`,Jx=(e,n,i)=>s`
  max-width: ${i?"min(100%, 1280px)":n?"min(100%, 920px)":"800px"};
  margin: 0 auto;
  width: 100%;
`,Zx=[{id:"dashboard",label:"Dashboard",icon:Eo},{id:"attendance",label:"Attendance",icon:jo},{id:"performance",label:"Performance",icon:vn},{id:"courses",label:"Courses",icon:St},{id:"badges",label:"Badge awards",icon:or},{id:"announcements",label:"Announcements",icon:En},{id:"calendar",label:"Calendar",icon:wn},{id:"profile",label:"Profile",icon:nr}];function hu(e){if(!e||typeof e!="string")return"?";const n=e.trim().split(/\s+/);return n.length>=2?(n[0][0]+n[n.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function fu(e){return`strack_lecturer_profile_extra_${(e||"").toLowerCase()}`}function pu(e){const n=String(e||"").trim().replace(/\s+/g," ");return n||"+44 7700 900123"}function gu(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function qx(){const e=new Date,n=e.getDay(),i=n===0?-6:1-n,o=new Date(e);o.setDate(e.getDate()+i);const c=new Date(o);return c.setDate(o.getDate()+6),{from:gu(o),to:gu(c)}}function bu(e){const i=String(e||"").split(":");if(i.length<2)return null;const o=Number(i[0]),c=Number(i[1]);return!Number.isFinite(o)||!Number.isFinite(c)?null:o*60+c}function Xx({darkMode:e,onToggleDarkMode:n}){const i=Hs(),{mobileMenuOpen:o,setMobileMenuOpen:c,closeMenu:l}=Gc(),[u,p]=a.useState("dashboard"),[b,v]=a.useState(null),g=a.useCallback(()=>v(null),[]),[y,w]=a.useState(""),[P,x]=a.useState(""),[A,_]=a.useState(""),[L,z]=a.useState(!1),[W,F]=a.useState(""),[V,B]=a.useState({courses:0,students:0,hoursPerWeek:0}),[R,q]=a.useState({phone:"+44 7700 900123",office:"Building A, Room 305",address:"123 University Avenue, Newcastle upon Tyne"}),[H,Q]=a.useState(R);a.useEffect(()=>{u!=="performance"&&v(null)},[u]);let ce="Lecturer";try{const E=localStorage.getItem("strack_user");if(E){const C=JSON.parse(E);C!=null&&C.name&&(ce=C.name)}}catch{}a.useEffect(()=>{try{const E=localStorage.getItem("strack_user");if(E){const C=JSON.parse(E);C!=null&&C.email&&w(C.email);const X=typeof(C==null?void 0:C.department)=="string"?C.department.trim():"",J=typeof(C==null?void 0:C.department_code)=="string"?C.department_code.trim():"";X&&x(X),J&&_(J)}}catch{}},[]);const oe=a.useCallback(async()=>{if(y)try{const[E,C]=await Promise.all([fetch(`${fs}/backend/lecturers.php`,{cache:"no-store"}),fetch(`${fs}/backend/departments.php`,{cache:"no-store"})]),X=await E.json(),J=await C.json(),G=X.success?X.lecturers||[]:[],me=y.toLowerCase().trim(),ye=G.find(fe=>String(fe.email||"").toLowerCase().trim()===me),he=(ye==null?void 0:ye.department)!=null?String(ye.department).trim():"";if(!he)return;const ve=(J.success?J.departments||[]:[]).find(fe=>String(fe.name||"").trim()===he||String(fe.code||"").trim()===he||String(fe.name||"").trim().toLowerCase()===he.toLowerCase()||String(fe.code||"").trim().toLowerCase()===he.toLowerCase());ve?(x(String(ve.name||he).trim()),_(String(ve.code||"").trim())):(x(he),_(""))}catch{}},[y]);a.useEffect(()=>{oe()},[oe]);const ie=a.useCallback(async()=>{if(y)try{const E=qx(),[C,X,J]=await Promise.all([fetch(`${fs}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${fs}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"}),fetch(`${fs}/backend/timetable.php?from=${encodeURIComponent(E.from)}&to=${encodeURIComponent(E.to)}&t=${Date.now()}`,{cache:"no-store"})]),[G,me,ye]=await Promise.all([C.json(),X.json(),J.json()]),he=G.success?G.lecturers||[]:[],ze=me.success?me.courses||[]:[],ve=ye.success?ye.entries||[]:[],fe=he.find(D=>String(D.email||"").trim().toLowerCase()===String(y).trim().toLowerCase());if(!fe){B({courses:0,students:0,hoursPerWeek:0});return}const Y=String(fe.lecturer_id||"").trim(),re=ze.filter(D=>String(D.lecturer_id||"").trim()===Y),xe=new Set;re.forEach(D=>{(Array.isArray(D.students)?D.students:[]).forEach(ae=>{xe.add(String(ae.id))})});const Se=ve.reduce((D,ae)=>{if(!(Array.isArray(ae.lecturers)&&ae.lecturers.some(m=>Number(m.id)===Number(fe.id)))||ae.entry_type!=="class")return D;const T=bu(ae.start_time),h=bu(ae.end_time);return T==null||h==null||h<=T?D:D+(h-T)},0);B({courses:re.length,students:xe.size,hoursPerWeek:Number((Se/60).toFixed(1))})}catch{B({courses:0,students:0,hoursPerWeek:0})}},[y]);a.useEffect(()=>{ie()},[ie]),a.useEffect(()=>{if(y)try{const E=localStorage.getItem(fu(y));if(!E)return;const C=JSON.parse(E),X={phone:pu(C==null?void 0:C.phone),office:String((C==null?void 0:C.office)||R.office),address:String((C==null?void 0:C.address)||R.address)};q(X),Q(X)}catch{}},[y]);const ue=()=>{try{localStorage.removeItem("strack_user")}catch{}i("/")},N=E=>{p(E),l()},M=()=>{Q(R),F(""),z(!0)},ee=()=>{Q(R),F(""),z(!1)},j=()=>{const E=pu(H.phone);if(!/^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(E.replace(/\s+/g," "))){F("Please enter a UK mobile format like +44 7700 900123 or 07700 900123.");return}const X={phone:E,office:(H.office||"").trim()||R.office,address:(H.address||"").trim()||R.address};q(X),Q(X),F(""),z(!1);try{localStorage.setItem(fu(y),JSON.stringify(X))}catch{}};return r("div",{css:Jc(e),children:[o?t("button",{type:"button",css:qc(e),onClick:l,"aria-label":"Close menu"}):null,r("aside",{css:Zc(e,o),children:[r("header",{css:Bx,children:[r("div",{css:Ox,children:[t("div",{css:Ix(e),children:t(jr,{})}),t("span",{css:kx(e),children:"STRACK"})]}),r("div",{css:s`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[t(mo,{darkMode:e,userEmail:y,placement:"sidebar"}),t("button",{type:"button",css:mu(e),onClick:n,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?t(Tr,{}):t(rr,{})}),t("button",{type:"button",css:tl(e),onClick:l,"aria-label":"Close menu",children:t(Fe,{})})]})]}),r("div",{css:Fx,children:[t("div",{css:Ux,children:hu(ce)}),r("div",{css:Wx,children:[t("div",{css:Hx(e),children:ce}),t("div",{css:Yx(e),children:"Lecturer"})]})]}),t("nav",{css:Kx,children:Zx.map(({id:E,label:C,icon:X})=>r("button",{type:"button",css:Vx(e,u===E),onClick:()=>N(E),children:[t(X,{}),C]},E))}),r("button",{type:"button",css:Gx,onClick:ue,children:[t(Uc,{}),"Logout"]})]}),r("div",{css:Xc,children:[r("header",{css:Qc(e),children:[t("button",{type:"button",css:Mc(e),onClick:()=>c(!0),"aria-label":"Open menu",children:t(Fc,{})}),t("span",{css:el(e),children:"STRACK"}),r("div",{css:s`display: inline-flex; align-items: center; gap: 0.3rem;`,children:[t(mo,{darkMode:e,userEmail:y}),t("button",{type:"button",css:mu(e),onClick:n,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?t(Tr,{}):t(rr,{})})]})]}),t("main",{css:nl(e),children:r("div",{css:Jx(e,u==="profile",u==="calendar"||u==="courses"||u==="badges"||u==="announcements"||u==="attendance"||u==="performance"||u==="dashboard"),children:[u==="dashboard"&&t(Nx,{darkMode:e,userEmail:y,onOpenPerformance:E=>{v(E&&typeof E=="object"?E:{}),p("performance")},onGoToAttendance:()=>{p("attendance"),l()},onGoToGrades:()=>{v({}),p("performance"),l()},onViewAllCourses:()=>{p("courses"),l()}}),u==="attendance"&&t(Fw,{darkMode:e,userEmail:y}),u==="performance"&&t(cv,{darkMode:e,userEmail:y,performanceIntent:b,onConsumePerformanceIntent:g}),u==="courses"&&t(gw,{darkMode:e,userEmail:y}),u==="badges"&&t(Px,{darkMode:e,userEmail:y}),u==="announcements"&&t(Ov,{darkMode:e,userEmail:y}),u==="calendar"&&t(qy,{darkMode:e,userEmail:y}),u==="profile"&&r("div",{css:Am(e),children:[r("header",{css:Lm,children:[t("h1",{css:Nm(e),children:"My Profile"}),t("p",{css:Dm(e),children:"Manage your personal information and teaching profile."})]}),t("section",{css:zm(e),children:r("div",{css:Tm,children:[r("div",{css:Em,children:[t("div",{css:Rm,children:hu(ce)}),r("div",{css:jm,children:[t("h2",{css:Pm,children:ce}),r("div",{css:zs(e),children:["Department: ",P||"—"]}),r("div",{css:zs(e),children:["Department code: ",A||"—"]}),r("div",{css:Bm,children:[t("span",{css:Om,children:"Lecturer"}),r("span",{css:Im(e),children:[V.courses," Courses"]})]})]})]}),L?null:r("button",{type:"button",css:km,onClick:M,children:[t(yn,{"aria-hidden":!0}),"Edit Profile"]})]})}),r("section",{css:Kp,"aria-label":"Teaching statistics",children:[r("article",{css:Gn(e),children:[r("div",{css:Jn,children:[t(St,{"aria-hidden":!0}),t("span",{css:Zn,children:"Courses"})]}),t("div",{css:qn,children:V.courses}),t("div",{css:Xn(e),children:"Active courses"})]}),r("article",{css:Gn(e),children:[r("div",{css:Jn,children:[t(kt,{"aria-hidden":!0}),t("span",{css:Zn,children:"Students"})]}),t("div",{css:qn,children:V.students}),t("div",{css:Xn(e),children:"Total enrolled"})]}),r("article",{css:Gn(e),children:[r("div",{css:Jn,children:[t(lt,{"aria-hidden":!0}),t("span",{css:Zn,children:"Hours / week"})]}),t("div",{css:qn,children:V.hoursPerWeek}),t("div",{css:Xn(e),children:"Teaching hours"})]})]}),r("section",{css:Wc(e),children:[t("h2",{css:Hc(e),children:"Personal Information"}),r("div",{css:Fm,children:[r("div",{css:gt,children:[t("span",{css:bt,children:"Full Name"}),L?t("input",{css:ao(e),value:ce,readOnly:!0,"aria-readonly":"true"}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(nr,{"aria-hidden":!0})}),t("span",{css:Lt,children:ce})]})]}),r("div",{css:gt,children:[t("span",{css:bt,children:"Email Address"}),L?t("input",{css:ao(e),value:y||"lecturer@uni.ac.uk",readOnly:!0,"aria-readonly":"true"}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(Oc,{"aria-hidden":!0})}),t("span",{css:Lt,children:y||"lecturer@uni.ac.uk"})]})]}),r("div",{css:gt,children:[t("span",{css:bt,children:"Phone Number"}),L?t("input",{css:tn(e),value:H.phone,onChange:E=>Q(C=>({...C,phone:E.target.value})),placeholder:"+44 7700 900123"}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(Sm,{"aria-hidden":!0})}),t("span",{css:Lt,children:R.phone})]})]}),r("div",{css:gt,children:[t("span",{css:bt,children:"Office Location"}),L?t("input",{css:tn(e),value:H.office,onChange:E=>Q(C=>({...C,office:E.target.value}))}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(lp,{"aria-hidden":!0})}),t("span",{css:Lt,children:R.office})]})]}),r("div",{css:[gt,Gp],children:[t("span",{css:bt,children:"Address"}),L?t("input",{css:tn(e),value:H.address,onChange:E=>Q(C=>({...C,address:E.target.value}))}):r("div",{css:At(e),children:[t("span",{css:Qt,children:t(Tn,{"aria-hidden":!0})}),t("span",{css:Lt,children:R.address})]})]})]}),L?r("div",{css:Um(e),children:[t("button",{type:"button",css:ks(!0),onClick:j,children:"Save"}),t("button",{type:"button",css:ks(!1),onClick:ee,children:"Cancel"})]}):null,W?t("div",{css:Yc(e),children:W}):null]}),t(Wm,{darkMode:e,userEmail:y})]})]})})]})]})}const $r="/strack",Sc="0.35s ease",qs="#7c3aed",rl="#6d28d9",Qa=[{bar:"#2563eb",bg:"rgba(37, 99, 235, 0.12)"},{bar:"#7c3aed",bg:"rgba(124, 58, 237, 0.12)"},{bar:"#db2777",bg:"rgba(219, 39, 119, 0.12)"},{bar:"#059669",bg:"rgba(5, 150, 105, 0.12)"},{bar:"#ea580c",bg:"rgba(234, 88, 12, 0.12)"}];function Ot(e){const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${o}`}function yu(e){const[n,i,o]=e.split("-").map(Number);return new Date(n,i-1,o)}function Qx(e,n){return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate()}function $c(e){const n=new Date(e);n.setHours(0,0,0,0);const i=n.getDay(),o=i===0?-6:1-i;return n.setDate(n.getDate()+o),n}function In(e){if(!e)return"";const n=e.split(":");return`${n[0]}:${n[1]}`}function wu(e){const n=e.split(":").map(Number);return n[0]*60+(n[1]||0)}function Ma(e){const n=e.entry_type==="class"&&e.course_code?e.course_code:`${e.entry_type}-${e.id}-${e.event_title||""}`;let i=0;for(let o=0;o<n.length;o++)i=(i+n.charCodeAt(o)*(o+1))%1e5;return Math.abs(i)%5}function Ji(e){return e.entry_type==="event"?e.event_title||"School event":e.course_code||"Class"}function ec(e,n){if(!e)return[];const i=(e.lecturer_id||"").toString().trim();if(!i)return[];const o=i.toLowerCase();return n.filter(c=>(c.lecturer_id||"").toString().trim().toLowerCase()===o)}function Mx(e,n){if(e==="monthly"){const c=n.getFullYear(),l=n.getMonth(),u=new Date(c,l,1),p=new Date(c,l+1,0);return{from:Ot(u),to:Ot(p)}}const i=$c(n),o=new Date(i);return o.setDate(o.getDate()+6),{from:Ot(i),to:Ot(o)}}const tc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e4=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t4=s`
  width: 100%;
`,n4=s`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,r4=s`
  flex: 1;
  min-width: 0;
`,s4=s`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,i4=e=>s`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#6b7280"};
  margin: 0;
  transition: color ${Sc};
`,o4=s`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`,a4=e=>s`
  display: inline-flex;
  border-radius: 10px;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  overflow: hidden;
  background: ${e?"#262626":"#fff"};
`,nc=(e,n)=>s`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  cursor: pointer;
  background: ${n?qs:"transparent"};
  color: ${n?"#fff":e?"#e5e7eb":"#1a1a1a"};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${n?rl:e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"};
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    flex-shrink: 0;
  }
`,c4=s`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: ${qs};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${rl};
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }
`,l4=e=>s`
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
  transition: background ${Sc}, border-color ${Sc};
`,vu=s`
  flex: 1;
  min-width: 160px;
`,Rt=e=>s`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
`,Zi=e=>s`
  width: 100%;
  padding: 0.55rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${e?"#1a1a1a":"#fff"};
  color: inherit;
  box-sizing: border-box;
`,d4=s`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
`,xu=e=>s`
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
`,u4=e=>s`
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
`,m4=e=>s`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e?"#e5e7eb":"#111827"};
  min-width: 140px;
  text-align: center;
`,h4=e=>s`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.5rem;
  background: ${e?"#1a1a1a":"#f3f4f6"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  padding: 0.75rem;
`,f4=e=>s`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${e?"#9ca3af":"#6b7280"};
  padding: 0.25rem;
`,Su=(e,n,i)=>s`
  min-height: 104px;
  background: ${n?e?"#141414":"#f9fafb":i?e?"rgba(124, 58, 237, 0.16)":"rgba(124, 58, 237, 0.10)":e?"#262626":"#fff"};
  border: 1px solid
    ${i?e?"rgba(167,139,250,0.65)":"rgba(124,58,237,0.45)":e?"#404040":"#e5e7eb"};
  border-radius: 10px;
  padding: 0.4rem 0.45rem;
  cursor: ${n?"default":"pointer"};
  transition: box-shadow 0.15s, border-color 0.15s, background 0.2s;

  &:hover {
    box-shadow: ${n?"none":e?"0 0 0 1px rgba(167,139,250,0.4)":"0 0 0 1px rgba(124,58,237,0.25)"};
  }
`,p4=(e,n)=>s`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${n?e?"#e9d5ff":"#6d28d9":e?"#f3f4f6":"#111827"};
`,g4=e=>s`
  font-size: 0.7rem;
  color: ${"#9ca3af"};
  margin-bottom: 0.35rem;
`,b4=s`
  font-size: 0.72rem;
  color: #9ca3af;
  font-style: italic;
  margin-top: 0.25rem;
`,y4=e=>s`
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
`,w4=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  max-height: min(78vh, 920px);
  background: ${e?"#1a1a1a":"#fff"};
  scrollbar-width: thin;

  @media (max-width: 767.98px) {
    max-height: min(68vh, 640px);
  }
`,v4=s`
  display: flex;
  min-width: 720px;
`,x4=e=>s`
  width: 56px;
  flex-shrink: 0;
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
`,S4=(e,n)=>s`
  flex: 1;
  min-width: 92px;
  text-align: center;
  padding: 0.55rem 0.3rem;
  font-size: 0.78rem;
  font-weight: 700;
  border-left: 1px solid ${n?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  border-bottom: 1px solid ${n?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${n?e?"rgba(124,58,237,0.24)":"rgba(124,58,237,0.10)":e?"#262626":"#f9fafb"};
`,$4=s`
  display: flex;
  min-width: 720px;
`,C4=e=>s`
  width: 56px;
  flex-shrink: 0;
  height: ${Xm}px;
  border-right: 1px solid ${e?"#404040":"#e5e7eb"};
  position: relative;
`,_4=e=>s`
  position: absolute;
  left: 0;
  right: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#6b7280"};
  text-align: right;
  transform: translateY(-0.45rem);
`,A4=(e,n)=>s`
  flex: 1;
  min-width: 92px;
  height: ${Xm}px;
  position: relative;
  border-left: 1px solid ${n?e?"#7c3aed":"#a78bfa":e?"#404040":"#e5e7eb"};
  background: ${n?e?"repeating-linear-gradient(to bottom, rgba(124,58,237,0.16) 0, rgba(124,58,237,0.16) 47px, #5b21b6 47px, #5b21b6 48px)":"repeating-linear-gradient(to bottom, rgba(124,58,237,0.06) 0, rgba(124,58,237,0.06) 47px, #ddd6fe 47px, #ddd6fe 48px)":e?"repeating-linear-gradient(to bottom, #1a1a1a 0, #1a1a1a 47px, #333 47px, #333 48px)":"repeating-linear-gradient(to bottom, #fff 0, #fff 47px, #f3f4f6 47px, #f3f4f6 48px)"};
`,L4=(e,n,i,o,c)=>s`
  position: absolute;
  left: 4px;
  right: 4px;
  top: ${n}px;
  height: ${i}px;
  background: ${c};
  border-left: 3px solid ${o};
  border-radius: 8px;
  padding: 0.3rem 0.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${e?"#f3f4f6":"#111827"};
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
`,N4=e=>s`
  background: ${e?"#262626":"#fff"};
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
`,D4=(e,n)=>s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  font-weight: 700;
  font-size: 0.95rem;
  background: ${n?e?"rgba(124,58,237,0.18)":"rgba(124,58,237,0.08)":"transparent"};

  svg {
    width: 20px;
    height: 20px;
    color: ${qs};
  }
`,z4=e=>s`
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
`,T4=e=>s`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: ${e?"#7c3aed":"#ede9fe"};
  color: ${e?"#fff":"#5b21b6"};
`,E4=(e,n)=>s`
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
    background: ${n};
  }
`,j4=s`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  min-width: 0;
`,R4=e=>s`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: ${e?"#404040":"#f3f4f6"};
  color: ${e?"#d1d5db":"#6b7280"};
  margin-left: 0.35rem;
  vertical-align: middle;
`,P4=e=>s`
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
`,B4=s`
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
`,rc=(e,n)=>s`
  padding: 0.4rem;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: ${n?"#dc2626":e?"#9ca3af":"#6b7280"};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${n?"rgba(220,38,38,0.12)":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
    color: ${n?"#b91c1c":e?"#fff":"#111"};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,O4=s`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(1rem, env(safe-area-inset-left));
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`,I4=e=>s`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 520px;
  max-height: min(92vh, 92dvh, 900px);
  margin: 0.5rem 0 1.5rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
`,k4=e=>s`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
`,F4=e=>s`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${e?"#fff":"#111"};
`,$u=e=>s`
  margin: 0.35rem 0 0 0;
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#6b7280"};
`,U4=s`
  padding: 1.25rem 1.5rem;
`,W4=e=>s`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid ${e?"#404040":"#f3f4f6"};
`,H4=s`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`,Y4=s`
  padding: 0.5rem 1.1rem;
  border: none;
  border-radius: 8px;
  background: ${qs};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${rl};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,K4=e=>s`
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
`,Gt=s`
  margin-bottom: 1rem;
`,Yn=e=>s`
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
    border-color: ${qs};
  }
`,V4=e=>s`
  ${Yn(e)}
  min-height: 88px;
  resize: vertical;
`,G4=s`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,J4=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem;
  max-height: min(160px, 35vh);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,Z4=s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.25rem;
  font-size: 0.88rem;
`,Cu=e=>s`
  padding: 2rem;
  text-align: center;
  color: ${e?"#9ca3af":"#6b7280"};
`,Es=8,sl=18,go=48,Xm=(sl-Es)*go;function q4(e){const n=e.getFullYear(),i=e.getMonth(),o=new Date(n,i,1),c=new Date(n,i+1,0),l=o.getDay(),u=c.getDate(),p=[];for(let b=0;b<l;b++)p.push({type:"pad",date:null});for(let b=1;b<=u;b++)p.push({type:"day",date:new Date(n,i,b)});for(;p.length%7!==0;)p.push({type:"pad",date:null});return p}function X4(e){const n=wu(e.start_time),i=wu(e.end_time),o=Es*60,c=sl*60;if(i<=o||n>=c)return null;const l=Math.max(n,o),u=Math.min(i,c),p=(l-o)/60*go,b=Math.max((u-l)/60*go,28);return{top:p,height:b}}function Q4({darkMode:e}){const[n,i]=a.useState("monthly"),[o,c]=a.useState(()=>new Date),[l,u]=a.useState(""),[p,b]=a.useState(""),[v,g]=a.useState([]),[y,w]=a.useState(!0),[P,x]=a.useState([]),[A,_]=a.useState([]),[L,z]=a.useState([]),[W,F]=a.useState(!1),[V,B]=a.useState(null),[R,q]=a.useState(!1),[H,Q]=a.useState({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:"",start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),ce=o.getTime(),{from:oe,to:ie}=a.useMemo(()=>Mx(n,o),[n,ce]),ue=a.useCallback(async()=>{try{const[m,$,O]=await Promise.all([fetch(`${$r}/backend/courses.php`),fetch(`${$r}/backend/lecturers.php`),fetch(`${$r}/backend/departments.php`)]),ne=await m.json(),k=await $.json(),te=await O.json();ne.success&&x(ne.courses||[]),k.success&&_(k.lecturers||[]),te.success&&z(te.departments||[])}catch{x([]),_([]),z([])}},[]),N=a.useCallback(async()=>{w(!0);try{const $=await(await fetch(`${$r}/backend/timetable.php?from=${encodeURIComponent(oe)}&to=${encodeURIComponent(ie)}`,{cache:"no-store"})).json();$.success?g($.entries||[]):g([])}catch{g([])}finally{w(!1)}},[oe,ie]);a.useEffect(()=>{ue()},[ue]),a.useEffect(()=>{N()},[N]);const M=a.useMemo(()=>v.filter(m=>{if(l&&!(m.department&&m.department===l||m.lecturers&&m.lecturers.some(O=>O.department===l)))return!1;if(p){const $=parseInt(p,10);if(!(m.lecturers&&m.lecturers.some(ne=>ne.id===$)))return!1}return!0}),[v,l,p]),ee=a.useMemo(()=>{const m=new Set(L.map($=>$.name).filter(Boolean));return P.forEach($=>{$.department&&m.add($.department)}),Array.from(m).sort()},[L,P]),j=a.useMemo(()=>H.course_id?P.find(m=>String(m.id)===String(H.course_id)):null,[P,H.course_id]),E=a.useMemo(()=>ec(j,A),[j,A]),C=a.useMemo(()=>{if(n==="monthly")return o.toLocaleString(void 0,{month:"long",year:"numeric"});const m=$c(o),$=new Date(m);return $.setDate($.getDate()+6),`${Ot(m).replace(/-/g,"/")} – ${Ot($).replace(/-/g,"/")}`},[n,ce]),X=m=>{B(null);const $=Ot(m||new Date);Q({entry_type:"class",course_id:"",event_title:"",event_description:"",entry_date:$,start_time:"09:00",end_time:"11:00",room_location:"",lecturer_ids:[]}),F(!0)},J=m=>{B(m.id);const $=m.entry_type==="class"&&m.course_id?P.find(k=>Number(k.id)===Number(m.course_id)):null,O=new Set(ec($,A).map(k=>k.id)),ne=m.entry_type==="class"?(m.lecturers||[]).map(k=>k.id).filter(k=>O.has(k)):[];Q({entry_type:m.entry_type,course_id:m.course_id?String(m.course_id):"",event_title:m.event_title||"",event_description:m.event_description||"",entry_date:m.entry_date,start_time:In(m.start_time),end_time:In(m.end_time),room_location:m.room_location||"",lecturer_ids:ne}),F(!0)},G=()=>F(!1),me=m=>{Q($=>{const O=new Set($.lecturer_ids);return O.has(m)?O.delete(m):O.add(m),{...$,lecturer_ids:Array.from(O)}})},ye=async()=>{const m={entry_type:H.entry_type,course_id:H.entry_type==="class"?parseInt(H.course_id,10):0,event_title:H.event_title,event_description:H.event_description,entry_date:H.entry_date,start_time:H.start_time,end_time:H.end_time,room_location:H.room_location,lecturer_account_ids:H.entry_type==="class"?H.lecturer_ids:[]};if(H.entry_type==="class"&&!m.course_id){window.alert("Please select a module.");return}if(H.entry_type==="event"&&!m.event_title.trim()){window.alert("Please enter an event title.");return}q(!0);try{const $=`${$r}/backend/timetable.php`,O=V?{method:"PUT",body:JSON.stringify({id:V,...m})}:{method:"POST",body:JSON.stringify(m)},k=await(await fetch($,{...O,headers:{"Content-Type":"application/json"}})).json();if(!k.success){window.alert(k.error||"Could not save.");return}G(),N()}catch{window.alert("Network error.")}finally{q(!1)}},he=async m=>{if(window.confirm("Delete this timetable entry?"))try{const O=await(await fetch(`${$r}/backend/timetable.php?id=${m.id}`,{method:"DELETE"})).json();if(!O.success){window.alert(O.error||"Could not delete.");return}N()}catch{window.alert("Network error.")}},ze=()=>c(new Date),ve=()=>{c(n==="monthly"?m=>new Date(m.getFullYear(),m.getMonth()-1,1):m=>{const $=new Date(m);return $.setDate($.getDate()-7),$})},fe=()=>{c(n==="monthly"?m=>new Date(m.getFullYear(),m.getMonth()+1,1):m=>{const $=new Date(m);return $.setDate($.getDate()+7),$})},Y=H.entry_date?e4[yu(H.entry_date).getDay()]:"",re=a.useMemo(()=>{const m=new Date;return m.setHours(0,0,0,0),m},[]),xe=Ot(re),Se=a.useMemo(()=>q4(o),[ce,n]),D=a.useMemo(()=>{const m={};return M.forEach($=>{m[$.entry_date]||(m[$.entry_date]=[]),m[$.entry_date].push($)}),Object.keys(m).forEach($=>m[$].sort((O,ne)=>O.start_time.localeCompare(ne.start_time))),m},[M]),ae=a.useMemo(()=>Object.keys(D).sort().map($=>({date:$,items:D[$]})),[D]),ge=$c(o),T=Array.from({length:7},(m,$)=>{const O=new Date(ge);return O.setDate(O.getDate()+$),O}),h=Array.from({length:sl-Es},(m,$)=>Es+$);return r("div",{css:t4,children:[r("div",{css:n4,children:[r("div",{css:r4,children:[t("h1",{css:s4,children:"Timetable Management"}),t("p",{css:i4(e),children:"Manage class schedules and school events"})]}),r("div",{css:o4,children:[r("div",{css:a4(e),children:[r("button",{type:"button",css:nc(e,n==="monthly"),onClick:()=>i("monthly"),children:[t(Eo,{"aria-hidden":!0}),"Monthly"]}),r("button",{type:"button",css:nc(e,n==="weekly"),onClick:()=>i("weekly"),children:[t(Jf,{"aria-hidden":!0}),"Weekly"]}),r("button",{type:"button",css:nc(e,n==="list"),onClick:()=>i("list"),children:[t(rp,{"aria-hidden":!0}),"List"]})]}),r("button",{type:"button",css:c4,onClick:()=>X(null),children:[t(Bc,{"aria-hidden":!0}),"Add Entry"]})]})]}),r("div",{css:l4(e),children:[r("div",{css:vu,children:[t("label",{css:Rt(e),children:"Filter by Department"}),r("select",{css:Zi(e),value:l,onChange:m=>u(m.target.value),children:[t("option",{value:"",children:"All Departments"}),ee.map(m=>t("option",{value:m,children:m},m))]})]}),r("div",{css:vu,children:[t("label",{css:Rt(e),children:"Filter by Lecturer"}),r("select",{css:Zi(e),value:p,onChange:m=>b(m.target.value),children:[t("option",{value:"",children:"All Lecturers"}),A.map(m=>r("option",{value:String(m.id),children:[m.full_name," (",m.lecturer_id,")"]},m.id))]})]}),r("div",{css:d4,children:[t("button",{type:"button",css:xu(e),onClick:ve,"aria-label":"Previous",children:t(kc,{})}),t("button",{type:"button",css:u4(e),onClick:ze,children:"Today"}),t("button",{type:"button",css:xu(e),onClick:fe,"aria-label":"Next",children:t(Ic,{})}),t("span",{css:m4(e),children:C})]})]}),y?t("p",{css:Cu(e),children:"Loading timetable…"}):n==="monthly"?r("div",{css:h4(e),children:[tc.map(m=>t("div",{css:f4(e),children:m},m)),Se.map((m,$)=>{if(m.type==="pad")return t("div",{css:Su(e,!0,!1)},`pad-${$}`);const O=Ot(m.date),ne=O===xe,k=D[O]||[],te=k.slice(0,3),Ce=k.length-te.length;return r("div",{role:"button",tabIndex:0,css:Su(e,!1,ne),onClick:()=>X(m.date),onKeyDown:$e=>$e.key==="Enter"&&X(m.date),children:[r("div",{css:p4(e,ne),children:[m.date.getDate()," ",ne?"• Today":""]}),t("div",{css:g4(e),children:tc[m.date.getDay()]}),te.length===0?t("p",{css:b4,children:"Click to add"}):te.map($e=>{const S=Ma($e),K=Qa[S];return r("div",{css:y4(K.bar),onClick:se=>{se.stopPropagation(),J($e)},onKeyDown:se=>se.stopPropagation(),role:"presentation",children:[t(lt,{}),Ji($e),t("span",{style:{opacity:.95,fontWeight:600},children:In($e.start_time)})]},$e.id)}),Ce>0&&r("div",{style:{fontSize:"0.65rem",color:"#6b7280",marginTop:2},children:["+",Ce," more"]})]},O)})]}):n==="weekly"?r("div",{css:w4(e),children:[r("div",{css:v4,children:[t("div",{css:x4(e)}),T.map(m=>r("div",{css:S4(e,Qx(m,re)),children:[tc[m.getDay()],t("div",{style:{fontWeight:500,fontSize:"0.75rem",opacity:.85},children:m.getDate()})]},Ot(m)))]}),r("div",{css:$4,children:[t("div",{css:C4(e),children:h.map(m=>r("div",{css:_4(e),style:{top:(m-Es)*go},children:[String(m).padStart(2,"0"),":00"]},m))}),T.map(m=>{const $=Ot(m);return t("div",{css:A4(e,$===xe),children:(D[$]||[]).map(O=>{const ne=X4(O);if(!ne)return null;const k=Ma(O),te=Qa[k],Ce=O.entry_type==="event";return r("div",{role:"button",tabIndex:0,css:L4(e,ne.top,ne.height,te.bar,te.bg),onClick:()=>J(O),onKeyDown:$e=>$e.key==="Enter"&&J(O),children:[Ce&&t(Er,{style:{width:11,height:11,opacity:.9,marginBottom:2,display:"block"}}),t("div",{style:{fontWeight:800},children:Ji(O)}),r("div",{style:{fontWeight:500,opacity:.95,marginTop:2},children:[In(O.start_time)," – ",In(O.end_time)]}),O.room_location&&r("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:4,fontWeight:600,opacity:.9},children:[t(Tn,{style:{width:12,height:12}}),O.room_location]}),(O.lecturers||[]).length>0&&r("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:2,fontWeight:500,fontSize:"0.68rem",opacity:.95},children:[t(nr,{style:{width:12,height:12}}),O.lecturers[0].full_name,(O.lecturers||[]).length>1?"…":""]})]},O.id)})},$)})]})]}):t("div",{children:ae.length===0?t("p",{css:Cu(e),children:"No entries in this range. Use Add Entry or pick another week."}):ae.map(({date:m,items:$})=>{const O=yu(m),ne=m===xe,k=O.toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"});return r("div",{css:N4(e),children:[r("div",{css:D4(e,ne),children:[t(wn,{"aria-hidden":!0}),k,ne&&t("span",{css:T4(e),children:"Today"}),r("span",{css:z4(e),children:[$.length," ",$.length===1?"entry":"entries"]})]}),$.map(te=>{const Ce=Ma(te),$e=Qa[Ce];return t("div",{css:E4(e,$e.bar),children:r("div",{css:j4,children:[r("div",{style:{minWidth:0,flex:1},children:[r("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.35rem"},children:[te.entry_type==="event"?t(Er,{style:{width:18,height:18,color:$e.bar}}):t(St,{style:{width:18,height:18,color:$e.bar}}),t("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:te.entry_type==="class"?`${Ji(te)} – ${te.course_name||"Module"}`:Ji(te)}),t("span",{css:R4(e),children:te.entry_type==="class"?"Class":"Event"})]}),te.entry_type==="event"&&te.event_description&&t("p",{style:{margin:"0.35rem 0 0 0",fontSize:"0.85rem",opacity:.85},children:te.event_description}),r("div",{css:P4(e),children:[r("span",{children:[t(lt,{}),In(te.start_time)," – ",In(te.end_time)]}),te.room_location&&r("span",{children:[t(Tn,{}),te.room_location]}),(te.lecturers||[]).length>0&&r("span",{children:[t(nr,{}),(te.lecturers||[]).map(S=>S.full_name).join(", ")]})]})]}),r("div",{css:B4,children:[t("button",{type:"button",css:rc(e,!1),title:"Edit",onClick:()=>J(te),children:t(yn,{})}),t("button",{type:"button",css:rc(e,!0),title:"Delete",onClick:()=>he(te),children:t(bn,{})})]})]})},te.id)})]},m)})}),W&&t("div",{css:O4,role:"presentation",onClick:G,children:r("div",{css:I4(e),onClick:m=>m.stopPropagation(),children:[t("div",{css:k4(e),children:r("div",{css:H4,children:[r("div",{children:[t("h3",{css:F4(e),children:V?"Edit Timetable Entry":"Add New Timetable Entry"}),t("p",{css:$u(e),children:"Create or update a class or school event."})]}),t("button",{type:"button",css:rc(e,!1),onClick:G,"aria-label":"Close",children:t(Fe,{})})]})}),r("div",{css:U4,children:[r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Entry Type"}),r("select",{css:Zi(e),value:H.entry_type,onChange:m=>{const $=m.target.value==="event"?"event":"class";Q(O=>({...O,entry_type:$,lecturer_ids:$==="event"?[]:O.entry_type==="event"?[]:O.lecturer_ids}))},children:[t("option",{value:"class",children:"Class"}),t("option",{value:"event",children:"School Event"})]})]}),H.entry_type==="class"?r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Module"}),r("select",{css:Zi(e),value:H.course_id,onChange:m=>{const $=m.target.value,O=P.find(te=>String(te.id)===$),ne=ec(O,A),k=ne.length===1?[ne[0].id]:[];Q(te=>({...te,course_id:$,lecturer_ids:k}))},children:[t("option",{value:"",children:"Select module"}),P.map(m=>r("option",{value:String(m.id),children:[m.course_code," — ",m.course_name]},m.id))]})]}):r(rt,{children:[r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Event Title"}),t("input",{type:"text",css:Yn(e),placeholder:"e.g. Annual Sports Day",value:H.event_title,onChange:m=>Q($=>({...$,event_title:m.target.value}))})]}),r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Event Description"}),t("textarea",{css:V4(e),placeholder:"Brief description of the event",value:H.event_description,onChange:m=>Q($=>({...$,event_description:m.target.value}))})]})]}),r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Specific Date"}),t("input",{type:"date",css:Yn(e),value:H.entry_date,onChange:m=>Q($=>({...$,entry_date:m.target.value}))}),t("p",{css:$u(e),style:{marginTop:"0.35rem"},children:"Select the specific date for this class or event."})]}),r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Day (auto-filled)"}),t("input",{type:"text",css:Yn(e),value:Y,readOnly:!0,disabled:!0,placeholder:"Will be set based on selected date"})]}),r("div",{css:G4,children:[r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Start Time"}),t("input",{type:"time",css:Yn(e),value:H.start_time,onChange:m=>Q($=>({...$,start_time:m.target.value}))})]}),r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"End Time"}),t("input",{type:"time",css:Yn(e),value:H.end_time,onChange:m=>Q($=>({...$,end_time:m.target.value}))})]})]}),r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Room / Location"}),t("input",{type:"text",css:Yn(e),placeholder:"e.g. CS-101, Lab 3",value:H.room_location,onChange:m=>Q($=>({...$,room_location:m.target.value}))})]}),H.entry_type==="class"&&r("div",{css:Gt,children:[t("label",{css:Rt(e),children:"Lecturer(s) for this module"}),t("div",{css:J4(e),children:H.course_id?E.length===0?t("span",{style:{fontSize:"0.85rem",opacity:.8},children:"This module has no linked lecturer. Assign one in the Courses section."}):E.map(m=>r("label",{css:Z4,children:[t("input",{type:"checkbox",checked:H.lecturer_ids.includes(m.id),onChange:()=>me(m.id)}),m.full_name,m.department?` (${m.department})`:""]},m.id)):t("span",{style:{fontSize:"0.85rem",opacity:.8},children:"Select a module to see assigned lecturer(s)."})})]})]}),r("div",{css:W4(e),children:[t("button",{type:"button",css:K4(e),onClick:G,children:"Cancel"}),t("button",{type:"button",css:Y4,onClick:ye,disabled:R,children:R?"Saving…":V?"Save Changes":"Create Entry"})]})]})})]})}const M4="/strack/".replace(/\/$/,""),_u=["#7c3aed","#2563eb","#0891b2","#059669","#65a30d","#ca8a04","#ea580c","#dc2626","#db2777","#4f46e5","#0d9488","#15803d","#b45309","#be185d","#475569","#a855f7"],eS=s`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`,tS=s`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
`,ps=e=>s`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  border: 1px solid ${e?"#333":"rgba(0, 0, 0, 0.06)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`,gs=e=>s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${e?"#a78bfa":"#2563eb"};
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${e?"rgba(167, 139, 250, 0.14)":"rgba(37, 99, 235, 0.1)"};
  svg {
    width: 22px;
    height: 22px;
  }
`,bs=e=>s`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e?"#9ca3af":"#64748b"};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,ys=e=>s`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${e?"#fff":"#111"};
  margin: 0;
  line-height: 1.2;
`,nS=e=>s`
  margin: 0.25rem 0 0;
  font-size: 0.72rem;
  font-weight: 500;
  color: ${e?"#6b7280":"#64748b"};
  line-height: 1.25;
`,rS=s`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,ws=e=>s`
  border: 1px solid ${e?"#333":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
  background: ${e?"#1a1a1a":"#fafafa"};
  min-height: 320px;
`,vs=e=>s`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${e?"#f9fafb":"#111827"};
`,xs=e=>s`
  margin: 0 0 0.75rem;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.4;
`,Au=e=>s`
  margin: 0.6rem 0 0;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${e?"#e5e7eb":"#111827"};
`,sS=e=>s`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.82rem;

  label {
    font-weight: 600;
    color: ${e?"#d1d5db":"#374151"};
  }

  select {
    font-size: 0.88rem;
    font-weight: 600;
    padding: 0.4rem 0.65rem;
    border-radius: 10px;
    border: 1px solid ${e?"rgba(255,255,255,0.18)":"#d1d5db"};
    background: ${e?"#111827":"#fff"};
    color: ${e?"#f9fafb":"#111827"};
    font-family: inherit;
    min-width: 10rem;
  }
`,Lu=["#2563eb","#7c3aed","#059669"],Jt=e=>s`
  color: ${e?"#9ca3af":"#6b7280"};
  font-size: 0.9rem;
  margin: 0;
`;function iS(e){return{backgroundColor:e?"#262626":"#fff",border:`1px solid ${e?"#404040":"#e5e7eb"}`,borderRadius:8,color:e?"#f9fafb":"#111827"}}function oS({darkMode:e}){var ce;const[n,i]=a.useState(!0),[o,c]=a.useState(""),[l,u]=a.useState(null),[p,b]=a.useState("");a.useEffect(()=>{let oe=!1;async function ie(){i(!0),c("");try{const ue=new URLSearchParams;ue.set("t",String(Date.now())),p!==""&&ue.set("enrollment_intake_year",p);const M=await(await fetch(`${M4}/backend/admin_analytics.php?${ue.toString()}`,{cache:"no-store"})).json().catch(()=>({}));if(oe)return;if(!M.success){c(String(M.error||"Could not load dashboard data.")),u(null);return}u(M)}catch{oe||(c("Could not reach the server."),u(null))}finally{oe||i(!1)}}return ie(),()=>{oe=!0}},[p]);const v=l==null?void 0:l.kpis,g=a.useMemo(()=>iS(e),[e]),y=e?"#9ca3af":"#6b7280",w=e?"#404040":"#e5e7eb",P=Array.isArray(l==null?void 0:l.students_by_department)?l.students_by_department:[],x=Array.isArray(l==null?void 0:l.gpa_distribution)?l.gpa_distribution:[],A=l==null?void 0:l.gpa_distribution_source,_=Array.isArray(l==null?void 0:l.gpa_monthly_trend)?l.gpa_monthly_trend:[],L=Array.isArray(l==null?void 0:l.attendance_trend)?l.attendance_trend:[],z=Array.isArray(l==null?void 0:l.enrollment_by_intake)?l.enrollment_by_intake:[],W=Array.isArray(l==null?void 0:l.enrollment_intake_years)?l.enrollment_intake_years:[],F=(l==null?void 0:l.enrollment_intake_total)!=null?Number(l.enrollment_intake_total):z.reduce((oe,ie)=>oe+(Number(ie.count)||0),0),V=a.useMemo(()=>(l==null?void 0:l.marks_distribution_total)!=null?Number(l.marks_distribution_total):x.reduce((oe,ie)=>oe+(Number(ie.count)||0),0),[l==null?void 0:l.marks_distribution_total,x]),B=v==null?void 0:v.headline_kind,R=v==null?void 0:v.headline_average,q=R!=null?B==="assessment_pct"?`${Number(R).toFixed(1)}%`:`${Number(R).toFixed(2)}`:"—",H=B==="assessment_pct"?"Avg. mark (all scores)":B==="profile_gpa"?"Average GPA":"Average performance",Q=B==="assessment_pct"&&(v==null?void 0:v.average_gpa)!=null?`Profile GPA mean: ${Number(v.average_gpa).toFixed(2)}`:B==="profile_gpa"&&(v==null?void 0:v.average_assessment_pct)!=null?`Mean mark % in DB: ${Number(v.average_assessment_pct).toFixed(1)}%`:null;return r("div",{css:eS,children:[r("div",{children:[t("h1",{css:s`
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 0 0.35rem;
          `,children:"Dashboard"}),t("p",{css:Jt(e),children:"Overview of students, staff, modules, and trends across STRACK."})]}),n?t("p",{css:Jt(e),children:"Loading analytics…"}):o?t("p",{css:Jt(e),children:o}):r(rt,{children:[r("div",{css:tS,children:[r("div",{css:ps(e),children:[t("span",{css:gs(e),children:t(kt,{"aria-hidden":!0})}),r("div",{children:[t("p",{css:bs(e),children:"Total students"}),t("p",{css:ys(e),children:(v==null?void 0:v.total_students)??0})]})]}),r("div",{css:ps(e),children:[t("span",{css:gs(e),children:t(jr,{"aria-hidden":!0})}),r("div",{children:[t("p",{css:bs(e),children:"Total lecturers"}),t("p",{css:ys(e),children:(v==null?void 0:v.total_lecturers)??0})]})]}),r("div",{css:ps(e),children:[t("span",{css:gs(e),children:t(St,{"aria-hidden":!0})}),r("div",{children:[t("p",{css:bs(e),children:"Total courses"}),t("p",{css:ys(e),children:(v==null?void 0:v.total_courses)??0})]})]}),r("div",{css:ps(e),children:[t("span",{css:gs(e),children:t(Lr,{"aria-hidden":!0})}),r("div",{children:[t("p",{css:bs(e),children:"Departments"}),t("p",{css:ys(e),children:(v==null?void 0:v.total_departments)??0})]})]}),r("div",{css:ps(e),children:[t("span",{css:gs(e),children:t(vn,{"aria-hidden":!0})}),r("div",{children:[t("p",{css:bs(e),children:H}),t("p",{css:ys(e),children:q}),Q?t("p",{css:nS(e),children:Q}):null]})]})]}),r("div",{css:rS,children:[r("div",{css:ws(e),children:[t("h2",{css:vs(e),children:"Students by department"}),r("p",{css:xs(e),children:["Slices use ",t("strong",{children:"department codes"})," from strack_departments (or N/A / initials). Hover a slice for the full department name and student count."]}),P.length===0||P.every(oe=>!oe.value)?t("p",{css:Jt(e),children:"No student rows to chart."}):t(xt,{width:"100%",height:260,children:r(Uu,{children:[t(Wu,{data:P,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:88,label:({name:oe,percent:ie})=>`${oe} ${ie!=null?(ie*100).toFixed(0):0}%`,children:P.map((oe,ie)=>{var ue;return t(no,{fill:_u[ie%_u.length],stroke:e?"#171717":"#fff",strokeWidth:1},`${(ue=P[ie])==null?void 0:ue.name}-${ie}`)})}),t(Ct,{content:({active:oe,payload:ie})=>{if(!oe||!(ie!=null&&ie.length))return null;const ue=ie[0].payload,N=(ue==null?void 0:ue.name)??"",M=(ue==null?void 0:ue.fullName)??N,ee=(ue==null?void 0:ue.value)??0;return r("div",{style:{...g,padding:"10px 12px",fontSize:"0.85rem"},children:[t("div",{style:{fontWeight:800,marginBottom:4},children:N}),t("div",{style:{opacity:.92,marginBottom:6},children:M}),r("div",{children:[t("strong",{children:ee})," students"]})]})}}),t(Nr,{})]})})]}),r("div",{css:ws(e),children:[t("h2",{css:vs(e),children:"Marks distribution"}),t("p",{css:xs(e),children:A==="assessment_scores"?"Count of marks in each percentage band (rows in strack_assessment_scores).":"Count of students in each GPA band from strack_students.gpa (no saved marks yet)."}),x.length===0||x.length===1&&((ce=x[0])==null?void 0:ce.name)==="No data"?t("p",{css:Jt(e),children:"No marks or GPA values in the database yet."}):r(rt,{children:[t(xt,{width:"100%",height:260,children:r(zn,{data:x,margin:{top:8,right:8,left:4,bottom:0},children:[t(Nt,{strokeDasharray:"3 3",stroke:w,vertical:!1}),t(Dt,{dataKey:"name",tick:{fill:y,fontSize:11}}),t(zt,{allowDecimals:!1,tick:{fill:y,fontSize:11},width:40,label:{value:"Count",angle:-90,position:"insideLeft",fill:y,fontSize:11,offset:4}}),t(Ct,{contentStyle:g,formatter:oe=>[oe,"Count"]}),t(It,{dataKey:"count",name:"Count",fill:"#7c3aed",radius:[6,6,0,0],maxBarSize:48})]})}),r("p",{css:Au(e),children:["Total count: ",V]})]})]}),r("div",{css:ws(e),children:[t("h2",{css:vs(e),children:"GPA-related history"}),t("p",{css:xs(e),children:"Monthly average of saved assessment scores (%), institution-wide — shows grading activity over time."}),_.length===0?t("p",{css:Jt(e),children:"No assessment scores in the database yet."}):t(xt,{width:"100%",height:260,children:r(js,{data:_,margin:{top:8,right:8,left:0,bottom:0},children:[t(Nt,{strokeDasharray:"3 3",stroke:w}),t(Dt,{dataKey:"month",tick:{fill:y,fontSize:10}}),t(zt,{domain:[0,100],tick:{fill:y,fontSize:11},width:36,tickFormatter:oe=>`${oe}%`}),t(Ct,{contentStyle:g,formatter:oe=>[`${oe}%`,"Avg score"]}),t(Qn,{type:"monotone",dataKey:"avgAssessmentPct",name:"Avg assessment %",stroke:"#7c3aed",strokeWidth:2,dot:{r:3}})]})})]}),r("div",{css:ws(e),children:[t("h2",{css:vs(e),children:"Attendance trend"}),t("p",{css:xs(e),children:"Present and absent shares by calendar month (each mark is one student-class session; percentages are of all marks that month)."}),L.length===0?t("p",{css:Jt(e),children:"No attendance marks yet."}):t(xt,{width:"100%",height:260,children:r(js,{data:L,margin:{top:8,right:8,left:0,bottom:8},children:[t(Nt,{strokeDasharray:"3 3",stroke:w}),t(Dt,{dataKey:"month",tick:{fill:y,fontSize:10}}),t(zt,{domain:[0,100],tick:{fill:y,fontSize:11},width:36,tickFormatter:oe=>`${oe}%`}),t(Ct,{contentStyle:g,formatter:(oe,ie)=>[`${oe}%`,ie]}),t(Nr,{}),t(Qn,{type:"monotone",dataKey:"presentRate",name:"Present %",stroke:"#059669",strokeWidth:2,dot:{r:3}}),t(Qn,{type:"monotone",dataKey:"absentRate",name:"Absent %",stroke:"#dc2626",strokeWidth:2,dot:{r:3}})]})})]}),r("div",{css:[ws(e),s`grid-column: 1 / -1;`],children:[t("h2",{css:vs(e),children:"Enrollment by intake"}),r("p",{css:xs(e),children:["Students with ",t("strong",{children:"Sep / Jan / May"})," intake on their record (strack_students). The intake year filter below only changes this chart; other dashboard figures stay institution-wide."]}),r("div",{css:sS(e),children:[t("label",{htmlFor:"admin-enrollment-intake-year",children:"Intake year"}),r("select",{id:"admin-enrollment-intake-year",value:p,onChange:oe=>b(oe.target.value),"aria-label":"Filter enrollment chart by intake year",children:[t("option",{value:"",children:"All years"}),W.map(oe=>t("option",{value:String(oe),children:oe},oe))]}),l!=null&&l.enrollment_intake_year_applied?r("span",{css:Jt(e),style:{fontSize:"0.78rem"},children:["Showing intake year ",l.enrollment_intake_year_applied]}):null]}),z.length===0?t("p",{css:Jt(e),children:"No intake chart data returned. Ensure strack_students has intake_month and intake_year columns."}):r(rt,{children:[F===0?t("p",{css:Jt(e),style:{marginBottom:"0.65rem"},children:'No students with September / January / May intake for this filter. Try "All years" or check student intake fields in Manage Students.'}):null,t(xt,{width:"100%",height:280,children:r(zn,{data:z,margin:{top:8,right:12,left:8,bottom:52},children:[t(Nt,{strokeDasharray:"3 3",stroke:w,vertical:!1}),t(Dt,{dataKey:"label",tick:{fill:y,fontSize:10},interval:0,angle:-14,textAnchor:"end",height:56}),t(zt,{allowDecimals:!1,tick:{fill:y,fontSize:11},width:40,label:{value:"Students",angle:-90,position:"insideLeft",fill:y,fontSize:11,offset:4}}),t(Ct,{contentStyle:g,formatter:oe=>[oe,"Students"]}),t(It,{dataKey:"count",name:"Students",radius:[6,6,0,0],maxBarSize:72,children:z.map((oe,ie)=>{var ue;return t(no,{fill:Lu[ie%Lu.length]},((ue=z[ie])==null?void 0:ue.key)??ie)})})]})}),r("p",{css:Au(e),children:["Total students (this chart): ",F]})]})]})]})]})]})}const Xe="/strack";function qi(e){return String(e??"").trim().toLowerCase()}const Nu=Kc(),Ee="0.35s ease",aS=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`,cS=s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`,lS=e=>s`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${e?"#a78bfa":"#1a1a1a"};
    transition: stroke ${Ee};
  }
`,dS=e=>s`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ee};
`,Du=e=>s`
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
  transition: color ${Ee};

  &:hover {
    background: ${e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`,uS=s`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`,mS=s`
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
`,hS=s`
  flex: 1;
  min-width: 0;
`,fS=e=>s`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e?"#ffffff":"inherit"};
  transition: color ${Ee};
`,pS=e=>s`
  font-size: 0.8rem;
  color: ${e?"#9ca3af":"#666666"};
  font-weight: 400;
  transition: color ${Ee};
`,gS=s`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,bS=(e,n)=>s`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${n?e?"rgba(124, 58, 237, 0.4)":"#7c3aed":"transparent"};
  color: ${n?"#fff":e?"#d1d5db":"#1a1a1a"};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${Ee}, color ${Ee};

  &:hover {
    background: ${n?e?"rgba(124, 58, 237, 0.5)":"#6d28d9":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`,yS=s`
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
`,wS=(e,n)=>s`
  max-width: ${n?"100%":"800px"};
  margin: 0 auto;
`,sc=s`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,ic=s`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,Pt=e=>s`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${Ee};
`,oc=s`
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
`,Xi=e=>s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  margin-bottom: 1rem;
  transition: border-color ${Ee}, background ${Ee};

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
`,ac=s`
  margin-bottom: 1rem;
`,cc=s`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`,kn=e=>s`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  border: 1px solid ${e?"#333333":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`,Fn=e=>s`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
`,Un=e=>s`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
`;s`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const Wn=e=>s`
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
`,Hn=s`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`,vS=(e,n)=>s`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e>0?"#7c3aed":n?"#404040":"#e5e7eb"};
  color: ${e>0?"#fff":n?"#9ca3af":"#6b7280"};
  transition: background ${Ee}, color ${Ee};
`,xS=s`
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
`;s`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;s`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;const zu=s`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Tu=s`
  flex: 1;
  min-width: 0;
`,Eu=s`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`,ju=e=>s`
  font-size: 0.9rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${Ee};
`,Ru=s`
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
`,SS=e=>s`
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${Ee}, box-shadow ${Ee};
`,$S=e=>s`
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
`,CS=e=>s`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${e?"#fff":"#1a1a1a"};
  margin: 0;
  transition: color ${Ee};
`,_S=e=>s`
  font-size: 0.85rem;
  color: ${e?"#9ca3af":"#666"};
  margin: 0;
  transition: color ${Ee};
`,AS=e=>s`
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
`,LS=s`
  margin-top: 1.5rem;
`,NS=s`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,DS=s`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`,zS=e=>s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: ${e?"#1a1a1a":"#fff"};
  min-width: 200px;
  transition: border-color ${Ee}, background ${Ee};

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
`,TS=e=>s`
  width: 100%;
  border-collapse: collapse;
  background: ${e?"#262626":"#fff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e?"none":"0 1px 3px rgba(0,0,0,0.08)"};
  transition: background ${Ee}, box-shadow ${Ee};
`,Ss=e=>s`
  ${TS(e)}
  width: max-content;
  min-width: 100%;
`,ES=e=>s`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  font-size: inherit;
  color: ${e?"#a5b4fc":"#4f46e5"};
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-align: left;

  &:hover {
    color: ${e?"#c7d2fe":"#3730a3"};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
    text-decoration: none;
  }
`,De=e=>s`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e?"#9ca3af":"#6b7280"};
  background: ${e?"#1a1a1a":"#f9fafb"};
  border-bottom: 1px solid ${e?"#404040":"#e5e7eb"};
  transition: color ${Ee}, background ${Ee}, border-color ${Ee};
`,we=e=>s`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1a1a1a"};
  border-bottom: 1px solid ${e?"#404040":"#f3f4f6"};
  transition: color ${Ee}, border-color ${Ee};
`,$s=s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kn=e=>s`
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
`,Cs=e=>s`
  ${Kn(e)}
  &:hover {
    color: #dc2626;
  }
`,Pu=e=>s`
  border: none;
  border-radius: 8px;
  background: ${e?"rgba(99, 102, 241, 0.2)":"#eef2ff"};
  color: ${e?"#c7d2fe":"#3730a3"};
  font-weight: 700;
  font-size: 0.9rem;
  font-family: inherit;
  padding: 0.25rem 0.6rem;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${e?"rgba(99, 102, 241, 0.32)":"#e0e7ff"};
    color: ${e?"#e0e7ff":"#312e81"};
  }
`,ln=s`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(1rem, env(safe-area-inset-left));
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`,Cr=e=>s`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  max-height: min(92vh, 920px);
  margin: 0.5rem 0 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  transition: background ${Ee};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
`,lc=e=>s`
  background: ${e?"#1a1a1a":"#fff"};
  border-radius: 12px;
  width: 100%;
  max-width: 560px;
  max-height: min(85vh, 85dvh, 900px);
  margin: 0.5rem 0 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${Ee};
`,dc=s`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,_r=s`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,dn=e=>s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${Ee};
`,un=e=>s`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${e?"#fff":"#1a1a1a"};
  transition: color ${Ee};
`,mn=e=>s`
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
`,hn=s`
  padding: 1.5rem;
`,Be=s`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,Pe=e=>s`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${e?"#d1d5db":"#374151"};
  transition: color ${Ee};
`,Bu=e=>s`
  margin: 0.35rem 0 0;
  font-size: 0.78rem;
  color: ${e?"#9ca3af":"#6b7280"};
  line-height: 1.35;
`,ke=e=>s`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${e?"#262626":"#fff"};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${Ee}, background ${Ee};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${e?"#6b7280":"#9ca3af"};
  }
`,Ou=e=>s`
  ${ke(e)}
  min-height: 80px;
  resize: vertical;
`,Iu=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
  max-height: min(180px, 40vh);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  background: ${e?"#262626":"#fff"};
`,uc=e=>s`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.15rem;
  font-size: 0.88rem;
  color: ${e?"#e5e7eb":"#1f2937"};
`,jS=e=>s`
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  padding: 0.65rem 0.8rem;
  font-size: 0.9rem;
  color: ${e?"#e5e7eb":"#1f2937"};
`,_s=e=>s`
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  line-height: 1.35;
  color: ${e?"#9ca3af":"#6b7280"};
`,fn=e=>s`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${e?"#404040":"rgba(0,0,0,0.08)"};
  transition: border-color ${Ee};
`,pn=e=>s`
  padding: 0.5rem 1rem;
  border: 1px solid ${e?"#404040":"#e5e7eb"};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${Ee}, background ${Ee};

  &:hover {
    background: ${e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"};
  }
`,As=s`
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
`,RS=[{id:"dashboard",label:"Dashboard",icon:Eo},{id:"students",label:"Students",icon:kt},{id:"lecturers",label:"Lecturers",icon:jr},{id:"courses",label:"Courses",icon:St},{id:"departments",label:"Departments",icon:Lr},{id:"degrees",label:"Degrees",icon:St},{id:"calendar",label:"Calendar",icon:wn}];function PS(e){if(!e||typeof e!="string")return"?";const n=e.trim().split(/\s+/);return n.length>=2?(n[0][0]+n[n.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function BS({darkMode:e,onToggleDarkMode:n}){const i=Hs(),{mobileMenuOpen:o,setMobileMenuOpen:c,closeMenu:l}=Gc(),[u,p]=a.useState("dashboard"),[b,v]=a.useState([]),[g,y]=a.useState(!1),[w,P]=a.useState(""),[x,A]=a.useState(!1),[_,L]=a.useState(null),[z,W]=a.useState({code:"",name:"",description:""}),[F,V]=a.useState(!1),B=a.useCallback(async()=>{y(!0);try{const I=await(await fetch(`${Xe}/backend/departments.php`)).json();I.success&&v(I.departments||[])}catch{v([])}finally{y(!1)}},[]);a.useEffect(()=>{u==="departments"&&B()},[u,B]);const[R,q]=a.useState([]),[H,Q]=a.useState(!1),[ce,oe]=a.useState(""),[ie,ue]=a.useState(!1),[N,M]=a.useState(null),[ee,j]=a.useState({student_id:"",full_name:"",email:"",password:"",department:"",year:"",degree:"",class_of:"",intake_month:"",intake_year:""}),[E,C]=a.useState(!1),[X,J]=a.useState([]),G=a.useCallback(async()=>{Q(!0);try{const I=await(await fetch(`${Xe}/backend/students.php?t=${Date.now()}`,{cache:"no-store"})).json();I.success&&q(I.students||[])}catch{q([])}finally{Q(!1)}},[]),me=a.useCallback(async()=>{try{const I=await(await fetch(`${Xe}/backend/departments.php`)).json();I.success&&J(I.departments||[])}catch{J([])}},[]);a.useEffect(()=>{(u==="students"||u==="courses")&&G(),(u==="students"||u==="lecturers"||u==="courses"||u==="degrees")&&me()},[u,G,me]);const[ye,he]=a.useState([]),[ze,ve]=a.useState(!1),[fe,Y]=a.useState(""),[re,xe]=a.useState(!1),[Se,D]=a.useState(null),[ae,ge]=a.useState({lecturer_id:"",full_name:"",email:"",department:""}),[T,h]=a.useState(!1),m=a.useCallback(async()=>{ve(!0);try{const I=await(await fetch(`${Xe}/backend/lecturers.php?t=${Date.now()}`,{cache:"no-store"})).json();I.success&&he(I.lecturers||[])}catch{he([])}finally{ve(!1)}},[]);a.useEffect(()=>{(u==="lecturers"||u==="courses")&&m()},[u,m]);const $=()=>{D(null),ge({lecturer_id:"",full_name:"",email:"",department:""}),xe(!0)},O=d=>{D(d.id),ge({lecturer_id:d.lecturer_id||"",full_name:d.full_name||"",email:d.email||"",department:d.department||""}),xe(!0)},ne=()=>xe(!1),k=async()=>{const{lecturer_id:d,full_name:I,email:be,department:Re}=ae;if(!(!d.trim()||!I.trim()||!be.trim()||!Re.trim())){h(!0);try{Se?(await(await fetch(`${Xe}/backend/lecturers.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Se,lecturer_id:d.trim(),full_name:I.trim(),email:be.trim(),department:Re.trim()})})).json()).success&&(ne(),m()):(await(await fetch(`${Xe}/backend/lecturers.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lecturer_id:d.trim(),full_name:I.trim(),email:be.trim(),department:Re.trim()})})).json()).success&&(ne(),m())}finally{h(!1)}}},te=async d=>{if(confirm("Delete this lecturer?"))try{(await(await fetch(`${Xe}/backend/lecturers.php?id=${d}`,{method:"DELETE"})).json()).success&&m()}catch{}},Ce=ye.filter(d=>!fe||(d.lecturer_id||"").toLowerCase().includes(fe.toLowerCase())||(d.full_name||"").toLowerCase().includes(fe.toLowerCase())||(d.email||"").toLowerCase().includes(fe.toLowerCase())||(d.department||"").toLowerCase().includes(fe.toLowerCase())),[$e,S]=a.useState([]),[K,se]=a.useState(!1),[le,_e]=a.useState(""),[He,it]=a.useState(!1),[Ae,Te]=a.useState(null),[Je,yt]=a.useState(null),[Ze,wt]=a.useState(null),[Ke,dt]=a.useState(null),[ot,Xs]=a.useState(null),[ut,$t]=a.useState({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,intake_month:"",intake_year:"",semester:"",course_study_year:"",student_ids:[]}),[Qs,Ir]=a.useState(!1),Yt=a.useCallback(async()=>{se(!0);try{const I=await(await fetch(`${Xe}/backend/courses.php?t=${Date.now()}`,{cache:"no-store"})).json();I.success&&S(I.courses||[])}catch{S([])}finally{se(!1)}},[]);a.useEffect(()=>{(u==="courses"||u==="lecturers"||u==="degrees")&&Yt()},[u,Yt]);const jn=a.useMemo(()=>{const d=new Map;for(const I of $e){const be=String(I.lecturer_id||"").trim();be&&(d.has(be)||d.set(be,[]),d.get(be).push(I))}for(const[,I]of d)I.sort((be,Re)=>String(be.course_code||"").localeCompare(String(Re.course_code||"")));return d},[$e]),kr=()=>{Te(null),$t({course_code:"",course_name:"",department:"",lecturer_id:"",credits:0,intake_month:"",intake_year:"",semester:"",course_study_year:"",student_ids:[]}),it(!0)},Bo=d=>{Te(d.id),$t({course_code:d.course_code||"",course_name:d.course_name||"",department:d.department||"",lecturer_id:d.lecturer_id||"",credits:Number(d.credits)||0,intake_month:d.intake_month||"",intake_year:d.intake_year!=null&&d.intake_year!==""?String(d.intake_year):"",semester:d.semester||"",course_study_year:d.course_study_year!=null&&d.course_study_year!==""?String(d.course_study_year):"",student_ids:Array.isArray(d.student_ids)?d.student_ids.map(I=>Number(I)):[]}),it(!0)},Rn=()=>it(!1),Ft=()=>yt(null),Fr=d=>yt(d),lr=()=>wt(null),Ur=()=>dt(null),jt=()=>Xs(null),Oo=async()=>{const{course_code:d,course_name:I,department:be,lecturer_id:Re,credits:Ge,intake_month:at,intake_year:Bn,semester:Vr,course_study_year:Gr,student_ids:sn}=ut;if(!(!d.trim()||!I.trim())){Ir(!0);try{Ae?(await(await fetch(`${Xe}/backend/courses.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Ae,course_code:d.trim(),course_name:I.trim(),department:be.trim()||"",lecturer_id:Re.trim()||"",credits:Number(Ge)||0,intake_month:at||"",intake_year:Bn===""?"":Number(Bn)||0,semester:Vr||"",course_study_year:Gr||"",student_ids:Array.isArray(sn)?sn:[]})})).json()).success&&(Rn(),Yt()):(await(await fetch(`${Xe}/backend/courses.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({course_code:d.trim(),course_name:I.trim(),department:be.trim()||"",lecturer_id:Re.trim()||"",credits:Number(Ge)||0,intake_month:at||"",intake_year:Bn===""?"":Number(Bn)||0,semester:Vr||"",course_study_year:Gr||"",student_ids:Array.isArray(sn)?sn:[]})})).json()).success&&(Rn(),Yt())}finally{Ir(!1)}}},dr=async d=>{if(confirm("Delete this course?"))try{(await(await fetch(`${Xe}/backend/courses.php?id=${d}`,{method:"DELETE"})).json()).success&&Yt()}catch{}},Wr=$e.filter(d=>!le||(d.course_code||"").toLowerCase().includes(le.toLowerCase())||(d.course_name||"").toLowerCase().includes(le.toLowerCase())||(d.department||"").toLowerCase().includes(le.toLowerCase())||(d.lecturer_name||"").toLowerCase().includes(le.toLowerCase())||Xt(d).toLowerCase().includes(le.toLowerCase())||(d.semester||"").toLowerCase().includes(le.toLowerCase())||Mt(d.course_study_year).toLowerCase().includes(le.toLowerCase())),[Ut,Ms]=a.useState([]),[ei,ti]=a.useState(!1),[Kt,rn]=a.useState(""),[Hr,f]=a.useState(!1),[U,Z]=a.useState(null),[de,Le]=a.useState({code:"",name:"",department:"",description:""}),[Ne,je]=a.useState(!1),Ve=a.useCallback(async()=>{ti(!0);try{const I=await(await fetch(`${Xe}/backend/degrees.php?t=${Date.now()}`,{cache:"no-store"})).json();I.success&&Ms(I.degrees||[])}catch{Ms([])}finally{ti(!1)}},[]);a.useEffect(()=>{(u==="degrees"||u==="students"||u==="departments")&&Ve()},[u,Ve]);const mt=()=>{Z(null),Le({code:"",name:"",department:"",description:""}),f(!0)},vt=d=>{Z(d.id),Le({code:d.code||"",name:d.name||"",department:d.department||"",description:d.description||""}),f(!0)},Qe=()=>f(!1),Pn=async()=>{const{code:d,name:I,department:be,description:Re}=de;if(!(!d.trim()||!I.trim())){je(!0);try{U?(await(await fetch(`${Xe}/backend/degrees.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:U,code:d.trim(),name:I.trim(),department:be.trim(),description:Re.trim()})})).json()).success&&(Qe(),Ve()):(await(await fetch(`${Xe}/backend/degrees.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:d.trim(),name:I.trim(),department:be.trim(),description:Re.trim()})})).json()).success&&(Qe(),Ve())}finally{je(!1)}}},We=async d=>{if(confirm("Delete this degree?"))try{(await(await fetch(`${Xe}/backend/degrees.php?id=${d}`,{method:"DELETE"})).json()).success&&Ve()}catch{}},Me=Ut.filter(d=>!Kt||(d.code||"").toLowerCase().includes(Kt.toLowerCase())||(d.name||"").toLowerCase().includes(Kt.toLowerCase())||(d.department||"").toLowerCase().includes(Kt.toLowerCase())||(d.description||"").toLowerCase().includes(Kt.toLowerCase())),ni=()=>{M(null),j({student_id:"",full_name:"",email:"",password:"asd123",department:"",year:"",degree:"",class_of:"",intake_month:"",intake_year:""}),ue(!0)},ri=d=>{M(d.id),j({student_id:d.student_id,full_name:d.full_name,email:d.email,password:"",department:d.department||"",year:d.year||"",degree:d.degree||"",class_of:d.class_of!=null&&d.class_of!==""?String(d.class_of):"",intake_month:d.intake_month||"",intake_year:d.intake_year!=null&&d.intake_year!==""?String(d.intake_year):""}),ue(!0)},Wt=()=>ue(!1),ur=async()=>{const{student_id:d,full_name:I,email:be,password:Re,department:Ge,year:at,degree:Bn,class_of:Vr,intake_month:Gr,intake_year:sn}=ee;if(!(!d.trim()||!I.trim()||!be.trim())&&!(!N&&!Re.trim())){C(!0);try{N?(await(await fetch(`${Xe}/backend/students.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:N,student_id:d.trim(),full_name:I.trim(),email:be.trim(),password:Re.trim(),department:Ge.trim()||"",year:at.trim()||"",degree:Bn.trim()||"",class_of:Vr.trim()||"",intake_month:Gr||"",intake_year:sn===""?"":Number(sn)||0})})).json()).success&&(Wt(),G()):(await(await fetch(`${Xe}/backend/students.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student_id:d.trim(),full_name:I.trim(),email:be.trim(),password:Re.trim(),department:Ge.trim()||"",year:at.trim()||"",degree:Bn.trim()||"",class_of:Vr.trim()||"",intake_month:Gr||"",intake_year:sn===""?"":Number(sn)||0})})).json()).success&&(Wt(),G())}finally{C(!1)}}},Yr=async d=>{if(confirm("Delete this student?"))try{(await(await fetch(`${Xe}/backend/students.php?id=${d}`,{method:"DELETE"})).json()).success&&G()}catch{}},mr=R.filter(d=>!ce||(d.student_id||"").toLowerCase().includes(ce.toLowerCase())||(d.full_name||"").toLowerCase().includes(ce.toLowerCase())||(d.email||"").toLowerCase().includes(ce.toLowerCase())||(d.department||"").toLowerCase().includes(ce.toLowerCase())||(d.degree||"").toLowerCase().includes(ce.toLowerCase())||String(d.class_of||"").toLowerCase().includes(ce.toLowerCase())||Xt(d).toLowerCase().includes(ce.toLowerCase())),hr=["Foundation","Year 1","Year 2","Placement Year","Year 4"],Io=()=>{L(null),W({code:"",name:"",description:""}),A(!0)},Qm=d=>{L(d.id),W({code:d.code,name:d.name,description:d.description||""}),A(!0)},Kr=()=>A(!1),Mm=async()=>{const{code:d,name:I,description:be}=z;if(!(!d.trim()||!I.trim())){V(!0);try{_?(await(await fetch(`${Xe}/backend/departments.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:_,code:d.trim(),name:I.trim(),description:be.trim()})})).json()).success&&(Kr(),B()):(await(await fetch(`${Xe}/backend/departments.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:d.trim(),name:I.trim(),description:be.trim()})})).json()).success&&(Kr(),B())}finally{V(!1)}}},eh=async d=>{if(confirm("Delete this department?"))try{(await(await fetch(`${Xe}/backend/departments.php?id=${d}`,{method:"DELETE"})).json()).success&&B()}catch{}},il=b.filter(d=>!w||d.code.toLowerCase().includes(w.toLowerCase())||d.name.toLowerCase().includes(w.toLowerCase())||(d.description||"").toLowerCase().includes(w.toLowerCase()));let ko="Admin Portal";try{const d=localStorage.getItem("strack_user");if(d){const I=JSON.parse(d),be=(I==null?void 0:I.name)||"";ko=be==="Test Admin"||be==="Admin"?"Admin Portal":be||"Admin Portal"}}catch{}const th=()=>{try{localStorage.removeItem("strack_user")}catch{}i("/")},nh=d=>{p(d),l()};return r("div",{css:Jc(e),children:[o?t("button",{type:"button",css:qc(e),onClick:l,"aria-label":"Close menu"}):null,r("aside",{css:Zc(e,o),children:[r("header",{css:aS,children:[r("div",{css:cS,children:[t("div",{css:lS(e),children:t(jr,{})}),t("span",{css:dS(e),children:"STRACK"})]}),r("div",{css:s`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`,children:[t("button",{type:"button",css:Du(e),onClick:n,"aria-label":e?"Switch to light mode":"Switch to dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?t(Tr,{}):t(rr,{})}),t("button",{type:"button",css:tl(e),onClick:l,"aria-label":"Close menu",children:t(Fe,{})})]})]}),r("div",{css:uS,children:[t("div",{css:mS,children:PS(ko)}),r("div",{css:hS,children:[t("div",{css:fS(e),children:ko}),t("div",{css:pS(e),children:"Admin"})]})]}),t("nav",{css:gS,children:RS.map(({id:d,label:I,icon:be})=>r("button",{type:"button",css:bS(e,u===d),onClick:()=>nh(d),children:[t(be,{}),I]},d))}),r("button",{type:"button",css:yS,onClick:th,children:[t(Uc,{}),"Logout"]})]}),r("div",{css:Xc,children:[r("header",{css:Qc(e),children:[t("button",{type:"button",css:Mc(e),onClick:()=>c(!0),"aria-label":"Open menu",children:t(Fc,{})}),t("span",{css:el(e),children:"STRACK"}),t("button",{type:"button",css:Du(e),onClick:n,"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?t(Tr,{}):t(rr,{})})]}),t("main",{css:nl(e),children:r("div",{css:wS(e,u==="dashboard"||u==="departments"||u==="students"||u==="lecturers"||u==="courses"||u==="degrees"||u==="calendar"),children:[u==="dashboard"&&t(oS,{darkMode:e}),u==="students"&&r(rt,{children:[r("div",{css:sc,children:[r("div",{children:[t("h1",{css:ic,children:"Manage Students"}),t("p",{css:Pt(e),children:"Add, edit, or remove student records."})]}),t("button",{type:"button",css:oc,onClick:ni,children:"+ Add Student"})]}),r("div",{css:ac,children:[r("div",{css:kn(e),children:[t("span",{css:Wn(e),children:t(kt,{})}),r("div",{css:Hn,children:[t("p",{css:Un(e),children:"Total Students"}),t("p",{css:Fn(e),children:H?"...":R.length})]})]}),r("div",{css:cc,children:[X.length>0?X.map(d=>{const I=R.filter(be=>(be.department||"")===d.name).length;return r("div",{css:kn(e),children:[t("span",{css:Wn(e),children:t(Lr,{})}),r("div",{css:Hn,children:[t("p",{css:Un(e),children:d.name}),t("p",{css:Fn(e),children:H?"...":I})]})]},d.id)}):null,(()=>{const d=R.filter(I=>!I.department).length;return d<=0?null:r("div",{css:kn(e),children:[t("span",{css:Wn(e),children:t(jr,{})}),r("div",{css:Hn,children:[t("p",{css:Un(e),children:"Unassigned"}),t("p",{css:Fn(e),children:H?"...":d})]})]})})()]})]}),r("div",{css:Xi(e),children:[t(Ln,{}),t("input",{type:"text",placeholder:"Search students...",value:ce,onChange:d=>oe(d.target.value)})]}),t("div",{css:as(e),children:r("table",{css:Ss(e),children:[t("thead",{children:r("tr",{children:[t("th",{css:De(e),children:"Student ID"}),t("th",{css:De(e),children:"Name"}),t("th",{css:De(e),children:"Email"}),t("th",{css:De(e),children:"Department"}),t("th",{css:De(e),children:"Intake"}),t("th",{css:De(e),children:"Degree"}),t("th",{css:De(e),children:"Year"}),t("th",{css:De(e),children:"Class of"}),t("th",{css:De(e),children:"GPA"}),t("th",{css:De(e),children:"Points"}),t("th",{css:De(e),children:"Attendance"}),t("th",{css:De(e),children:"Actions"})]})}),t("tbody",{children:H?t("tr",{children:t("td",{css:we(e),colSpan:12,children:"Loading..."})}):mr.length===0?t("tr",{children:t("td",{css:we(e),colSpan:12,children:"No students found."})}):mr.map(d=>{var I;return r("tr",{children:[t("td",{css:we(e),children:d.student_id}),t("td",{css:we(e),children:d.full_name}),t("td",{css:we(e),children:d.email}),t("td",{css:we(e),children:d.department||"—"}),t("td",{css:we(e),children:Xt(d)}),t("td",{css:we(e),children:((I=Ut.find(be=>be.code===d.degree))==null?void 0:I.name)||d.degree||"—"}),t("td",{css:we(e),children:d.year||"—"}),t("td",{css:we(e),children:d.class_of?String(d.class_of):"—"}),t("td",{css:we(e),children:Number(d.gpa)||0}),t("td",{css:we(e),children:r("span",{css:xS,children:[t(ar,{}),Number(d.points)||0]})}),t("td",{css:we(e),children:r("span",{css:vS(Number(d.attendance)||0,e),children:[Number(d.attendance)||0,"%"]})}),t("td",{css:we(e),children:r("div",{css:$s,children:[t("button",{type:"button",css:Kn(e),onClick:()=>ri(d),title:"Edit",children:t(yn,{})}),t("button",{type:"button",css:Cs(e),onClick:()=>Yr(d.id),title:"Delete",children:t(bn,{})})]})})]},d.id)})})]})})]}),u==="lecturers"&&r(rt,{children:[r("div",{css:sc,children:[r("div",{children:[t("h1",{css:ic,children:"Lecturer Management"}),t("p",{css:Pt(e),children:"Manage teaching staff and teaching assignments."})]}),t("button",{type:"button",css:oc,onClick:$,children:"+ Add Lecturer"})]}),r("div",{css:ac,children:[r("div",{css:kn(e),children:[t("span",{css:Wn(e),children:t(kt,{})}),r("div",{css:Hn,children:[t("p",{css:Un(e),children:"Total Lecturers"}),t("p",{css:Fn(e),children:ze?"...":ye.length})]})]}),t("div",{css:cc,children:X.length>0?X.map(d=>{const I=ye.filter(be=>(be.department||"")===d.name).length;return r("div",{css:kn(e),children:[t("span",{css:Wn(e),children:t(Lr,{})}),r("div",{css:Hn,children:[t("p",{css:Un(e),children:d.name}),t("p",{css:Fn(e),children:ze?"...":I})]})]},d.id)}):null})]}),r("div",{css:Xi(e),children:[t(Ln,{}),t("input",{type:"text",placeholder:"Search lecturers...",value:fe,onChange:d=>Y(d.target.value)})]}),t("div",{css:as(e),children:r("table",{css:Ss(e),children:[t("thead",{children:r("tr",{children:[t("th",{css:De(e),children:"Lecturer ID"}),t("th",{css:De(e),children:"Name"}),t("th",{css:De(e),children:"Email"}),t("th",{css:De(e),children:"Department"}),t("th",{css:De(e),children:"Modules"}),t("th",{css:De(e),children:"Actions"})]})}),t("tbody",{children:ze?t("tr",{children:t("td",{css:we(e),colSpan:6,children:"Loading..."})}):Ce.length===0?t("tr",{children:t("td",{css:we(e),colSpan:6,children:"No lecturers found."})}):Ce.map(d=>{const I=String(d.lecturer_id||"").trim(),Re=(jn.get(I)||[]).length;return r("tr",{children:[t("td",{css:we(e),children:d.lecturer_id}),t("td",{css:we(e),children:d.full_name}),t("td",{css:we(e),children:d.email}),t("td",{css:we(e),children:d.department||"—"}),t("td",{css:we(e),children:K?t("span",{style:{color:e?"#9ca3af":"#6b7280"},children:"…"}):t("button",{type:"button",css:ES(e),onClick:()=>wt(d),title:"View modules from course catalog",children:Re===0?"No modules":`${Re} module${Re===1?"":"s"}`})}),t("td",{css:we(e),children:r("div",{css:$s,children:[t("button",{type:"button",css:Kn(e),onClick:()=>O(d),title:"Edit",children:t(yn,{})}),t("button",{type:"button",css:Cs(e),onClick:()=>te(d.id),title:"Delete",children:t(bn,{})})]})})]},d.id)})})]})})]}),u==="courses"&&r(rt,{children:[r("div",{css:sc,children:[r("div",{children:[t("h1",{css:ic,children:"Course Management"}),t("p",{css:Pt(e),children:"Manage course catalog."})]}),t("button",{type:"button",css:oc,onClick:kr,children:"+ Add Course"})]}),r("div",{css:ac,children:[r("div",{css:kn(e),children:[t("span",{css:Wn(e),children:t(St,{})}),r("div",{css:Hn,children:[t("p",{css:Un(e),children:"Total Courses"}),t("p",{css:Fn(e),children:K?"...":$e.length})]})]}),t("div",{css:cc,children:X.length>0?X.map(d=>{const I=$e.filter(be=>(be.department||"")===d.name).length;return r("div",{css:kn(e),children:[t("span",{css:Wn(e),children:t(Lr,{})}),r("div",{css:Hn,children:[t("p",{css:Un(e),children:d.name}),t("p",{css:Fn(e),children:K?"...":I})]})]},d.id)}):null})]}),r("div",{css:Xi(e),children:[t(Ln,{}),t("input",{type:"text",placeholder:"Search courses...",value:le,onChange:d=>_e(d.target.value)})]}),t("div",{css:as(e),children:r("table",{css:Ss(e),children:[t("thead",{children:r("tr",{children:[t("th",{css:De(e),children:"Course Code"}),t("th",{css:De(e),children:"Course Name"}),t("th",{css:De(e),children:"Department"}),t("th",{css:De(e),children:"Lecturer"}),t("th",{css:De(e),children:"Intake"}),t("th",{css:De(e),children:"Semester"}),t("th",{css:De(e),children:"Study year"}),t("th",{css:De(e),children:"Credits"}),t("th",{css:De(e),children:"Students"}),t("th",{css:De(e),children:"Actions"})]})}),t("tbody",{children:K?t("tr",{children:t("td",{css:we(e),colSpan:10,children:"Loading..."})}):Wr.length===0?t("tr",{children:t("td",{css:we(e),colSpan:10,children:"No courses found."})}):Wr.map(d=>r("tr",{children:[t("td",{css:we(e),children:d.course_code}),t("td",{css:we(e),children:d.course_name}),t("td",{css:we(e),children:d.department||"—"}),t("td",{css:we(e),children:d.lecturer_name||"—"}),t("td",{css:we(e),children:Xt(d)}),t("td",{css:we(e),children:d.semester||"—"}),t("td",{css:we(e),children:Mt(d.course_study_year)}),t("td",{css:we(e),children:r("span",{css:AS(),children:[Number(d.credits)||0," credits"]})}),t("td",{css:we(e),children:Number(d.enrolled_count)||0}),t("td",{css:we(e),children:r("div",{css:$s,children:[t("button",{type:"button",css:Kn(e),onClick:()=>Fr(d),title:"View enrolled students",children:t(kt,{})}),t("button",{type:"button",css:Kn(e),onClick:()=>Bo(d),title:"Edit",children:t(yn,{})}),t("button",{type:"button",css:Cs(e),onClick:()=>dr(d.id),title:"Delete",children:t(bn,{})})]})})]},d.id))})]})})]}),u==="degrees"&&r(rt,{children:[r("div",{css:zu,children:[r("div",{css:Tu,children:[t("h1",{css:Eu,children:"Degrees"}),t("p",{css:ju(e),children:"Create, view, edit, and delete degrees."})]}),t("button",{type:"button",css:Ru,onClick:mt,children:"+ Add Degree"})]}),r("div",{css:Xi(e),children:[t(Ln,{}),t("input",{type:"text",placeholder:"Search degrees...",value:Kt,onChange:d=>rn(d.target.value)})]}),t("div",{css:as(e),children:r("table",{css:Ss(e),children:[t("thead",{children:r("tr",{children:[t("th",{css:De(e),children:"Code"}),t("th",{css:De(e),children:"Name"}),t("th",{css:De(e),children:"Department"}),t("th",{css:De(e),children:"Modules"}),t("th",{css:De(e),children:"Actions"})]})}),t("tbody",{children:ei?t("tr",{children:t("td",{css:we(e),colSpan:5,children:"Loading..."})}):Me.length===0?t("tr",{children:t("td",{css:we(e),colSpan:5,children:"No degrees found."})}):Me.map(d=>{const I=qi(d.department),Re=(I?$e.filter(Ge=>qi(Ge.department)===I):[]).slice().sort((Ge,at)=>String(Ge.course_code||"").localeCompare(String(at.course_code||""),void 0,{sensitivity:"base"}));return r("tr",{children:[t("td",{css:we(e),children:d.code}),t("td",{css:we(e),children:d.name}),t("td",{css:we(e),children:d.department||"—"}),t("td",{css:we(e),children:K?"…":t("button",{type:"button",css:Pu(e),onClick:()=>Xs({degree:d,modules:Re}),children:Re.length})}),t("td",{css:we(e),children:r("div",{css:$s,children:[t("button",{type:"button",css:Kn(e),onClick:()=>vt(d),title:"Edit",children:t(yn,{})}),t("button",{type:"button",css:Cs(e),onClick:()=>We(d.id),title:"Delete",children:t(bn,{})})]})})]},d.id)})})]})})]}),u==="departments"&&r(rt,{children:[r("div",{css:zu,children:[r("div",{css:Tu,children:[t("h1",{css:Eu,children:"Departments"}),t("p",{css:ju(e),children:"Manage university departments."})]}),t("button",{type:"button",css:Ru,onClick:Io,children:"+ Add Department"})]}),r("div",{css:SS(e),children:[t("div",{css:$S(e),children:t(Lr,{})}),r("div",{children:[t("p",{css:_S(e),children:"Total Departments"}),t("p",{css:CS(e),children:g?"...":b.length})]})]}),r("div",{css:LS,children:[r("div",{css:NS,children:[t("h2",{css:DS,children:"All Departments"}),r("div",{css:zS(e),children:[t(Ln,{}),t("input",{type:"text",placeholder:"Search departments...",value:w,onChange:d=>P(d.target.value)})]})]}),t("div",{css:as(e),children:r("table",{css:Ss(e),children:[t("thead",{children:r("tr",{children:[t("th",{css:De(e),children:"Code"}),t("th",{css:De(e),children:"Name"}),t("th",{css:De(e),children:"Description"}),t("th",{css:De(e),children:"Degrees"}),t("th",{css:De(e),children:"Actions"})]})}),t("tbody",{children:g?t("tr",{children:t("td",{css:we(e),colSpan:5,children:"Loading..."})}):il.length===0?t("tr",{children:t("td",{css:we(e),colSpan:5,children:"No departments found."})}):il.map(d=>{const I=qi(d.name),be=I?Ut.filter(Re=>qi(Re.department)===I).slice().sort((Re,Ge)=>String(Re.code||"").localeCompare(String(Ge.code||""),void 0,{sensitivity:"base"})):[];return r("tr",{children:[t("td",{css:we(e),children:d.code}),t("td",{css:we(e),children:d.name}),t("td",{css:we(e),children:d.description||"—"}),t("td",{css:we(e),children:ei?"…":t("button",{type:"button",css:Pu(e),onClick:()=>dt({department:d,degrees:be}),children:be.length})}),t("td",{css:we(e),children:r("div",{css:$s,children:[t("button",{type:"button",css:Kn(e),onClick:()=>Qm(d),title:"Edit",children:t(yn,{})}),t("button",{type:"button",css:Cs(e),onClick:()=>eh(d.id),title:"Delete",children:t(bn,{})})]})})]},d.id)})})]})})]})]}),u==="calendar"&&t(Q4,{darkMode:e})]})})]}),ie&&t("div",{css:ln,onClick:Wt,children:r("div",{css:Cr(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[t("h3",{css:un(e),children:N?"Edit Student":"Add Student"}),t("button",{type:"button",css:mn(e),onClick:Wt,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,_r],children:[r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Full Name *"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. Ava Thomas",value:ee.full_name,onChange:d=>j(I=>({...I,full_name:d.target.value}))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Email *"}),t("input",{type:"email",css:ke(e),placeholder:"e.g. ava.thomas@uni.ac.uk",value:ee.email,onChange:d=>j(I=>({...I,email:d.target.value}))})]}),!N&&r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Password *"}),t("input",{type:"password",css:ke(e),placeholder:"e.g. student123",value:ee.password,onChange:d=>j(I=>({...I,password:d.target.value}))})]}),r("div",{css:Be,children:[r("label",{css:Pe(e),children:["Student ID ",N?"":"*"]}),t("input",{type:"text",css:ke(e),placeholder:"e.g. STU2024008",value:ee.student_id,onChange:d=>j(I=>({...I,student_id:d.target.value})),readOnly:!!N})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Department"}),r("select",{css:ke(e),value:ee.department,onChange:d=>j(I=>({...I,department:d.target.value})),children:[t("option",{value:"",children:"Select department"}),X.map(d=>t("option",{value:d.name,children:d.name},d.id))]})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Intake (month)"}),t("select",{css:ke(e),value:ee.intake_month,onChange:d=>j(I=>({...I,intake_month:d.target.value})),children:co.map(d=>t("option",{value:d.value,children:d.label},d.value||"none"))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Intake (year)"}),r("select",{css:ke(e),value:ee.intake_year,onChange:d=>j(I=>({...I,intake_year:d.target.value})),children:[t("option",{value:"",children:"— Year —"}),Nu.map(d=>t("option",{value:String(d),children:d},d))]}),t("p",{css:Bu(e),children:"When set, the student only sees courses with the same intake."})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Degree"}),r("select",{css:ke(e),value:ee.degree,onChange:d=>j(I=>({...I,degree:d.target.value})),children:[t("option",{value:"",children:"Select degree"}),Ut.map(d=>t("option",{value:d.code,children:d.name},d.id))]})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Year"}),r("select",{css:ke(e),value:ee.year,onChange:d=>j(I=>({...I,year:d.target.value})),children:[t("option",{value:"",children:"Select year"}),hr.map(d=>t("option",{value:d,children:d},d))]})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Class of"}),t("input",{type:"text",inputMode:"numeric",css:ke(e),placeholder:"e.g. 2027",maxLength:10,value:ee.class_of,onChange:d=>j(I=>({...I,class_of:d.target.value.replace(/[^\d]/g,"").slice(0,4)}))}),t("p",{css:Bu(e),children:"Graduation year (optional)."})]})]}),r("div",{css:fn(e),children:[t("button",{type:"button",css:pn(e),onClick:Wt,children:"Cancel"}),t("button",{type:"button",css:As,onClick:ur,disabled:E,children:E?"Saving...":N?"Save Changes":"Add Student"})]})]})}),re&&t("div",{css:ln,onClick:ne,children:r("div",{css:Cr(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[t("h3",{css:un(e),children:Se?"Edit Lecturer":"Add Lecturer"}),t("button",{type:"button",css:mn(e),onClick:ne,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,_r],children:[r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Full Name *"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. Dr. Sarah Johnson",value:ae.full_name,onChange:d=>ge(I=>({...I,full_name:d.target.value}))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Email *"}),t("input",{type:"email",css:ke(e),placeholder:"e.g. sarah.johnson@uni.ac.uk",value:ae.email,onChange:d=>ge(I=>({...I,email:d.target.value}))})]}),r("div",{css:Be,children:[r("label",{css:Pe(e),children:["Lecturer ID ",Se?"":"*"]}),t("input",{type:"text",css:ke(e),placeholder:"e.g. LEC001",value:ae.lecturer_id,onChange:d=>ge(I=>({...I,lecturer_id:d.target.value})),readOnly:!!Se})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Department"}),r("select",{css:ke(e),value:ae.department,onChange:d=>ge(I=>({...I,department:d.target.value})),children:[t("option",{value:"",children:"Select department"}),X.map(d=>t("option",{value:d.name,children:d.name},d.id))]})]})]}),r("div",{css:fn(e),children:[t("button",{type:"button",css:pn(e),onClick:ne,children:"Cancel"}),t("button",{type:"button",css:As,onClick:k,disabled:T,children:T?"Saving...":Se?"Update Lecturer":"Add Lecturer"})]})]})}),He&&t("div",{css:ln,onClick:Rn,children:r("div",{css:Cr(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[t("h3",{css:un(e),children:Ae?"Edit Course":"Add Course"}),t("button",{type:"button",css:mn(e),onClick:Rn,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,_r],children:[r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Course Code *"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. CS201",value:ut.course_code,onChange:d=>$t(I=>({...I,course_code:d.target.value})),readOnly:!!Ae})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Course Name *"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. Data Structures and Algorithms",value:ut.course_name,onChange:d=>$t(I=>({...I,course_name:d.target.value}))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Department"}),r("select",{css:ke(e),value:ut.department,onChange:d=>{const I=d.target.value;$t(be=>{const Re=new Set(R.filter(at=>!I||(at.department||"")===I).map(at=>Number(at.id))),Ge=(Array.isArray(be.student_ids)?be.student_ids:[]).filter(at=>Re.has(Number(at)));return{...be,department:I,student_ids:Ge}})},children:[t("option",{value:"",children:"Select department"}),X.map(d=>t("option",{value:d.name,children:d.name},d.id))]})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Lecturer"}),r("select",{css:ke(e),value:ut.lecturer_id,onChange:d=>$t(I=>({...I,lecturer_id:d.target.value})),children:[t("option",{value:"",children:"Select lecturer"}),ye.filter(d=>!ut.department||(d.department||"")===ut.department).map(d=>t("option",{value:d.lecturer_id,children:d.full_name},d.id))]})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Credits"}),t("input",{type:"number",css:ke(e),placeholder:"e.g. 4",value:ut.credits,onChange:d=>$t(I=>({...I,credits:Number(d.target.value)||0})),min:0})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Intake (month)"}),t("select",{css:ke(e),value:ut.intake_month,onChange:d=>$t(I=>({...I,intake_month:d.target.value})),children:co.map(d=>t("option",{value:d.value,children:d.label},d.value||"none"))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Intake (year)"}),r("select",{css:ke(e),value:ut.intake_year,onChange:d=>$t(I=>({...I,intake_year:d.target.value})),children:[t("option",{value:"",children:"— Year —"}),Nu.map(d=>t("option",{value:String(d),children:d},d))]})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Semester"}),t("select",{css:ke(e),value:ut.semester,onChange:d=>$t(I=>({...I,semester:d.target.value})),children:Gs.map(d=>t("option",{value:d.value,children:d.label},d.value||"none"))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Course study year"}),t("select",{css:ke(e),value:ut.course_study_year,onChange:d=>$t(I=>({...I,course_study_year:d.target.value})),children:Or.map(d=>t("option",{value:d.value,children:d.label},d.value||"none"))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Students who should attend this course"}),t("div",{css:Iu(e),children:R.length===0?t("p",{css:Pt(e),style:{margin:0},children:"No students found."}):R.filter(d=>!ut.department||(d.department||"")===ut.department).map(d=>r("label",{css:uc(e),children:[t("input",{type:"checkbox",checked:Array.isArray(ut.student_ids)&&ut.student_ids.includes(Number(d.id)),onChange:I=>{const be=Number(d.id);$t(Re=>{const Ge=new Set(Array.isArray(Re.student_ids)?Re.student_ids.map(at=>Number(at)):[]);return I.target.checked?Ge.add(be):Ge.delete(be),{...Re,student_ids:Array.from(Ge)}})}}),r("span",{children:[d.full_name," (",d.student_id,")"]})]},d.id))})]})]}),r("div",{css:fn(e),children:[t("button",{type:"button",css:pn(e),onClick:Rn,children:"Cancel"}),t("button",{type:"button",css:As,onClick:Oo,disabled:Qs,children:Qs?"Saving...":Ae?"Update Course":"Add Course"})]})]})}),Je&&t("div",{css:ln,onClick:Ft,children:r("div",{css:Cr(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[r("h3",{css:un(e),children:["Students in ",Je.course_code||"Course"]}),t("button",{type:"button",css:mn(e),onClick:Ft,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,_r],children:[r("p",{css:Pt(e),style:{marginTop:0},children:[Je.course_name||""," - ",Number(Je.enrolled_count)||0," student(s)"]}),t("div",{css:Iu(e),children:Array.isArray(Je.students)&&Je.students.length>0?Je.students.map(d=>r("div",{css:uc(e),children:[t(kt,{style:{width:16,height:16,opacity:.8}}),r("span",{children:[d.full_name," (",d.student_id,")"]})]},d.id)):t("p",{css:Pt(e),style:{margin:0},children:"No students assigned yet."})})]}),t("div",{css:fn(e),children:t("button",{type:"button",css:pn(e),onClick:Ft,children:"Close"})})]})}),Ke&&t("div",{css:ln,onClick:Ur,children:r("div",{css:lc(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[r("h3",{css:un(e),children:["Degrees — ",Ke.department.name]}),t("button",{type:"button",css:mn(e),onClick:Ur,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,dc],children:[r("p",{css:_s(e),style:{marginTop:0},children:[Ke.department.code,Ke.department.description?` · ${Ke.department.description}`:""]}),t("div",{css:s`
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                `,children:Ke.degrees.length?Ke.degrees.map(d=>r("div",{css:s`
                        padding: 0.65rem 0.75rem;
                        border-radius: 8px;
                        border: 1px solid ${e?"#404040":"#e5e7eb"};
                        background: ${e?"#262626":"#f9fafb"};
                      `,children:[r("p",{css:Pe(e),style:{margin:0},children:[d.code," — ",d.name]}),d.description?t("p",{css:Pt(e),style:{margin:"0.35rem 0 0"},children:d.description}):null]},d.id)):r("p",{css:Pt(e),style:{margin:0},children:["No degrees list this department yet. Edit a degree and set its Department to “",Ke.department.name,"”."]})})]}),t("div",{css:fn(e),children:t("button",{type:"button",css:pn(e),onClick:Ur,children:"Close"})})]})}),ot&&t("div",{css:ln,onClick:jt,children:r("div",{css:lc(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[r("h3",{css:un(e),children:["Modules — ",ot.degree.name]}),t("button",{type:"button",css:mn(e),onClick:jt,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,dc],children:[r("p",{css:_s(e),style:{marginTop:0},children:[ot.degree.code,ot.degree.department?` · Department: ${ot.degree.department}`:""]}),ot.degree.department?t("div",{css:s`
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                  `,children:ot.modules.length?ot.modules.map(d=>r("div",{css:s`
                          padding: 0.65rem 0.75rem;
                          border-radius: 8px;
                          border: 1px solid ${e?"#404040":"#e5e7eb"};
                          background: ${e?"#262626":"#f9fafb"};
                        `,children:[r("p",{css:Pe(e),style:{margin:0},children:[d.course_code," — ",d.course_name]}),r("p",{css:_s(e),style:{margin:"0.35rem 0 0"},children:[Number(d.credits)||0," credits",d.lecturer_name?` · ${d.lecturer_name}`:"",d.department?` · ${d.department}`:""]})]},d.id)):t("p",{css:Pt(e),style:{margin:0},children:"No courses use this department name yet. Add or edit a course under Courses and set Department to match."})}):t("p",{css:Pt(e),style:{margin:"0.75rem 0 0"},children:"Set a department on this degree to link modules. Modules are courses in the catalog with the same department name."})]}),t("div",{css:fn(e),children:t("button",{type:"button",css:pn(e),onClick:jt,children:"Close"})})]})}),Ze?t("div",{css:ln,onClick:lr,children:r("div",{css:lc(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[t("h3",{css:un(e),children:"Modules taught"}),t("button",{type:"button",css:mn(e),onClick:lr,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,dc],children:[t("p",{css:Pe(e),style:{marginTop:0},children:Ze.full_name}),r("p",{css:_s(e),style:{marginTop:"-0.25rem"},children:[Ze.lecturer_id," · ",Ze.email]}),r("p",{css:Pt(e),style:{margin:"0.75rem 0 0.5rem"},children:["Courses in the catalog where this lecturer is assigned (",(jn.get(String(Ze.lecturer_id||"").trim())||[]).length,")."]}),t("div",{css:s`
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                `,children:(jn.get(String(Ze.lecturer_id||"").trim())||[]).length?(jn.get(String(Ze.lecturer_id||"").trim())||[]).map(d=>{const I=[d.department||null,Xt(d)!=="—"?Xt(d):null,d.semester||null,Mt(d.course_study_year)!=="—"?Mt(d.course_study_year):null].filter(Boolean);return t("div",{css:jS(e),children:r("div",{css:uc(e),style:{padding:0,alignItems:"flex-start"},children:[t(St,{style:{width:18,height:18,flexShrink:0,marginTop:2}}),r("div",{style:{minWidth:0},children:[t("strong",{children:d.course_code}),r("span",{children:[" — ",d.course_name]}),I.length?t("p",{css:_s(e),children:I.join(" · ")}):null]})]})},d.id)}):t("p",{css:Pt(e),style:{margin:0},children:"No courses are linked to this lecturer yet. Assign them in Course Management."})})]}),t("div",{css:fn(e),children:t("button",{type:"button",css:pn(e),onClick:lr,children:"Close"})})]})}):null,Hr&&t("div",{css:ln,onClick:Qe,children:r("div",{css:Cr(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[t("h3",{css:un(e),children:U?"Edit Degree":"Add Degree"}),t("button",{type:"button",css:mn(e),onClick:Qe,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,_r],children:[r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Code *"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. CS",value:de.code,onChange:d=>Le(I=>({...I,code:d.target.value}))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Name *"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. BSc Computer Science",value:de.name,onChange:d=>Le(I=>({...I,name:d.target.value}))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Department"}),r("select",{css:ke(e),value:de.department,onChange:d=>Le(I=>({...I,department:d.target.value})),children:[t("option",{value:"",children:"Select department"}),X.map(d=>t("option",{value:d.name,children:d.name},d.id))]})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Description"}),t("textarea",{css:Ou(e),placeholder:"Optional description",value:de.description,onChange:d=>Le(I=>({...I,description:d.target.value}))})]})]}),r("div",{css:fn(e),children:[t("button",{type:"button",css:pn(e),onClick:Qe,children:"Cancel"}),t("button",{type:"button",css:As,onClick:Pn,disabled:Ne,children:Ne?"Saving...":U?"Update Degree":"Add Degree"})]})]})}),x&&t("div",{css:ln,onClick:Kr,children:r("div",{css:Cr(e),onClick:d=>d.stopPropagation(),children:[r("div",{css:dn(e),children:[t("h3",{css:un(e),children:_?"Edit Department":"Add New Department"}),t("button",{type:"button",css:mn(e),onClick:Kr,"aria-label":"Close",children:t(Fe,{})})]}),r("div",{css:[hn,_r],children:[r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Department Name"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. Newcastle Business School",value:z.name,onChange:d=>W(I=>({...I,name:d.target.value}))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Department Code"}),t("input",{type:"text",css:ke(e),placeholder:"e.g. NBS",value:z.code,onChange:d=>W(I=>({...I,code:d.target.value}))})]}),r("div",{css:Be,children:[t("label",{css:Pe(e),children:"Description"}),t("textarea",{css:Ou(e),placeholder:"e.g. Part of Faculty of Society and Culture",value:z.description,onChange:d=>W(I=>({...I,description:d.target.value}))})]})]}),r("div",{css:fn(e),children:[t("button",{type:"button",css:pn(e),onClick:Kr,children:"Cancel"}),t("button",{type:"button",css:As,onClick:Mm,disabled:F,children:F?"Saving...":_?"Update Department":"Add Department"})]})]})})]})}const OS="/strack",ku="strack_dark";function IS(){const[e,n]=a.useState(()=>{try{return localStorage.getItem(ku)==="true"}catch{return!1}});a.useEffect(()=>{try{localStorage.setItem(ku,String(e)),document.documentElement.classList.toggle("dark",e)}catch{}},[e]);const i=()=>n(o=>!o);return tt.jsx(r0,{basename:OS,children:tt.jsxs(e0,{children:[tt.jsx(Ar,{path:"/",element:tt.jsx(kf,{darkMode:e,onToggleDarkMode:i})}),tt.jsx(Ar,{path:"/dashboard",element:tt.jsx(Ny,{darkMode:e,onToggleDarkMode:i})}),tt.jsx(Ar,{path:"/lecturer",element:tt.jsx(Xx,{darkMode:e,onToggleDarkMode:i})}),tt.jsx(Ar,{path:"/admin",element:tt.jsx(BS,{darkMode:e,onToggleDarkMode:i})}),tt.jsx(Ar,{path:"*",element:tt.jsx(Qh,{to:"/",replace:!0})})]})})}hc.createRoot(document.getElementById("root")).render(tt.jsx(Dn.StrictMode,{children:tt.jsx(IS,{})}));
