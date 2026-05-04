(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var sm={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function hS(){if(Ev)return Kl;Ev=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:f,ref:o!==void 0?o:null,props:u}}return Kl.Fragment=e,Kl.jsx=n,Kl.jsxs=n,Kl}var wv;function fS(){return wv||(wv=1,sm.exports=hS()),sm.exports}var b=fS(),rm={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function dS(){if(Sv)return Re;Sv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),V=Symbol.iterator;function F(M){return M===null||typeof M!="object"?null:(M=V&&M[V]||M["@@iterator"],typeof M=="function"?M:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,ee={};function me(M,Q,ne){this.props=M,this.context=Q,this.refs=ee,this.updater=ne||W}me.prototype.isReactComponent={},me.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},me.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function ve(){}ve.prototype=me.prototype;function de(M,Q,ne){this.props=M,this.context=Q,this.refs=ee,this.updater=ne||W}var Te=de.prototype=new ve;Te.constructor=de,ie(Te,me.prototype),Te.isPureReactComponent=!0;var we=Array.isArray;function ge(){}var I={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function x(M,Q,ne){var re=ne.ref;return{$$typeof:s,type:M,key:Q,ref:re!==void 0?re:null,props:ne}}function k(M,Q){return x(M.type,Q,M.props)}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function U(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ne){return Q[ne]})}var R=/\/+/g;function Xe(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?U(""+M.key):Q.toString(36)}function ht(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(ge,ge):(M.status="pending",M.then(function(Q){M.status==="pending"&&(M.status="fulfilled",M.value=Q)},function(Q){M.status==="pending"&&(M.status="rejected",M.reason=Q)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function G(M,Q,ne,re,X){var he=typeof M;(he==="undefined"||he==="boolean")&&(M=null);var Me=!1;if(M===null)Me=!0;else switch(he){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(M.$$typeof){case s:case e:Me=!0;break;case E:return Me=M._init,G(Me(M._payload),Q,ne,re,X)}}if(Me)return X=X(M),Me=re===""?"."+Xe(M,0):re,we(X)?(ne="",Me!=null&&(ne=Me.replace(R,"$&/")+"/"),G(X,Q,ne,"",function(Qi){return Qi})):X!=null&&(N(X)&&(X=k(X,ne+(X.key==null||M&&M.key===X.key?"":(""+X.key).replace(R,"$&/")+"/")+Me)),Q.push(X)),1;Me=0;var bt=re===""?".":re+":";if(we(M))for(var it=0;it<M.length;it++)re=M[it],he=bt+Xe(re,it),Me+=G(re,Q,ne,he,X);else if(it=F(M),typeof it=="function")for(M=it.call(M),it=0;!(re=M.next()).done;)re=re.value,he=bt+Xe(re,it++),Me+=G(re,Q,ne,he,X);else if(he==="object"){if(typeof M.then=="function")return G(ht(M),Q,ne,re,X);throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Me}function te(M,Q,ne){if(M==null)return M;var re=[],X=0;return G(M,re,"","",function(he){return Q.call(ne,he,X++)}),re}function ce(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(ne){(M._status===0||M._status===-1)&&(M._status=1,M._result=ne)},function(ne){(M._status===0||M._status===-1)&&(M._status=2,M._result=ne)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Se=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},ke={map:te,forEach:function(M,Q,ne){te(M,function(){Q.apply(this,arguments)},ne)},count:function(M){var Q=0;return te(M,function(){Q++}),Q},toArray:function(M){return te(M,function(Q){return Q})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Re.Activity=S,Re.Children=ke,Re.Component=me,Re.Fragment=n,Re.Profiler=o,Re.PureComponent=de,Re.StrictMode=r,Re.Suspense=g,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,Re.__COMPILER_RUNTIME={__proto__:null,c:function(M){return I.H.useMemoCache(M)}},Re.cache=function(M){return function(){return M.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(M,Q,ne){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var re=ie({},M.props),X=M.key;if(Q!=null)for(he in Q.key!==void 0&&(X=""+Q.key),Q)!A.call(Q,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&Q.ref===void 0||(re[he]=Q[he]);var he=arguments.length-2;if(he===1)re.children=ne;else if(1<he){for(var Me=Array(he),bt=0;bt<he;bt++)Me[bt]=arguments[bt+2];re.children=Me}return x(M.type,X,re)},Re.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},Re.createElement=function(M,Q,ne){var re,X={},he=null;if(Q!=null)for(re in Q.key!==void 0&&(he=""+Q.key),Q)A.call(Q,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(X[re]=Q[re]);var Me=arguments.length-2;if(Me===1)X.children=ne;else if(1<Me){for(var bt=Array(Me),it=0;it<Me;it++)bt[it]=arguments[it+2];X.children=bt}if(M&&M.defaultProps)for(re in Me=M.defaultProps,Me)X[re]===void 0&&(X[re]=Me[re]);return x(M,he,X)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(M){return{$$typeof:p,render:M}},Re.isValidElement=N,Re.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:ce}},Re.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},Re.startTransition=function(M){var Q=I.T,ne={};I.T=ne;try{var re=M(),X=I.S;X!==null&&X(ne,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(ge,Se)}catch(he){Se(he)}finally{Q!==null&&ne.types!==null&&(Q.types=ne.types),I.T=Q}},Re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},Re.use=function(M){return I.H.use(M)},Re.useActionState=function(M,Q,ne){return I.H.useActionState(M,Q,ne)},Re.useCallback=function(M,Q){return I.H.useCallback(M,Q)},Re.useContext=function(M){return I.H.useContext(M)},Re.useDebugValue=function(){},Re.useDeferredValue=function(M,Q){return I.H.useDeferredValue(M,Q)},Re.useEffect=function(M,Q){return I.H.useEffect(M,Q)},Re.useEffectEvent=function(M){return I.H.useEffectEvent(M)},Re.useId=function(){return I.H.useId()},Re.useImperativeHandle=function(M,Q,ne){return I.H.useImperativeHandle(M,Q,ne)},Re.useInsertionEffect=function(M,Q){return I.H.useInsertionEffect(M,Q)},Re.useLayoutEffect=function(M,Q){return I.H.useLayoutEffect(M,Q)},Re.useMemo=function(M,Q){return I.H.useMemo(M,Q)},Re.useOptimistic=function(M,Q){return I.H.useOptimistic(M,Q)},Re.useReducer=function(M,Q,ne){return I.H.useReducer(M,Q,ne)},Re.useRef=function(M){return I.H.useRef(M)},Re.useState=function(M){return I.H.useState(M)},Re.useSyncExternalStore=function(M,Q,ne){return I.H.useSyncExternalStore(M,Q,ne)},Re.useTransition=function(){return I.H.useTransition()},Re.version="19.2.5",Re}var Av;function sp(){return Av||(Av=1,rm.exports=dS()),rm.exports}var Ce=sp(),am={exports:{}},Yl={},om={exports:{}},lm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function mS(){return xv||(xv=1,(function(s){function e(G,te){var ce=G.length;G.push(te);e:for(;0<ce;){var Se=ce-1>>>1,ke=G[Se];if(0<o(ke,te))G[Se]=te,G[ce]=ke,ce=Se;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var te=G[0],ce=G.pop();if(ce!==te){G[0]=ce;e:for(var Se=0,ke=G.length,M=ke>>>1;Se<M;){var Q=2*(Se+1)-1,ne=G[Q],re=Q+1,X=G[re];if(0>o(ne,ce))re<ke&&0>o(X,ne)?(G[Se]=X,G[re]=ce,Se=re):(G[Se]=ne,G[Q]=ce,Se=Q);else if(re<ke&&0>o(X,ce))G[Se]=X,G[re]=ce,Se=re;else break e}}return te}function o(G,te){var ce=G.sortIndex-te.sortIndex;return ce!==0?ce:G.id-te.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var g=[],y=[],E=1,S=null,V=3,F=!1,W=!1,ie=!1,ee=!1,me=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function Te(G){for(var te=n(y);te!==null;){if(te.callback===null)r(y);else if(te.startTime<=G)r(y),te.sortIndex=te.expirationTime,e(g,te);else break;te=n(y)}}function we(G){if(ie=!1,Te(G),!W)if(n(g)!==null)W=!0,ge||(ge=!0,U());else{var te=n(y);te!==null&&ht(we,te.startTime-G)}}var ge=!1,I=-1,A=5,x=-1;function k(){return ee?!0:!(s.unstable_now()-x<A)}function N(){if(ee=!1,ge){var G=s.unstable_now();x=G;var te=!0;try{e:{W=!1,ie&&(ie=!1,ve(I),I=-1),F=!0;var ce=V;try{t:{for(Te(G),S=n(g);S!==null&&!(S.expirationTime>G&&k());){var Se=S.callback;if(typeof Se=="function"){S.callback=null,V=S.priorityLevel;var ke=Se(S.expirationTime<=G);if(G=s.unstable_now(),typeof ke=="function"){S.callback=ke,Te(G),te=!0;break t}S===n(g)&&r(g),Te(G)}else r(g);S=n(g)}if(S!==null)te=!0;else{var M=n(y);M!==null&&ht(we,M.startTime-G),te=!1}}break e}finally{S=null,V=ce,F=!1}te=void 0}}finally{te?U():ge=!1}}}var U;if(typeof de=="function")U=function(){de(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Xe=R.port2;R.port1.onmessage=N,U=function(){Xe.postMessage(null)}}else U=function(){me(N,0)};function ht(G,te){I=me(function(){G(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return V},s.unstable_next=function(G){switch(V){case 1:case 2:case 3:var te=3;break;default:te=V}var ce=V;V=te;try{return G()}finally{V=ce}},s.unstable_requestPaint=function(){ee=!0},s.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ce=V;V=G;try{return te()}finally{V=ce}},s.unstable_scheduleCallback=function(G,te,ce){var Se=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Se+ce:Se):ce=Se,G){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=ce+ke,G={id:E++,callback:te,priorityLevel:G,startTime:ce,expirationTime:ke,sortIndex:-1},ce>Se?(G.sortIndex=ce,e(y,G),n(g)===null&&G===n(y)&&(ie?(ve(I),I=-1):ie=!0,ht(we,ce-Se))):(G.sortIndex=ke,e(g,G),W||F||(W=!0,ge||(ge=!0,U()))),G},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(G){var te=V;return function(){var ce=V;V=te;try{return G.apply(this,arguments)}finally{V=ce}}}})(lm)),lm}var Rv;function pS(){return Rv||(Rv=1,om.exports=mS()),om.exports}var um={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function gS(){if(Iv)return nn;Iv=1;var s=sp();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:g,containerInfo:y,implementation:E}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,nn.createPortal=function(g,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(g,y,null,E)},nn.flushSync=function(g){var y=f.T,E=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=y,r.p=E,r.d.f()}},nn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(g,y))},nn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},nn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var E=y.as,S=p(E,y.crossOrigin),V=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?r.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:V,fetchPriority:F}):E==="script"&&r.d.X(g,{crossOrigin:S,integrity:V,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},nn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=p(y.as,y.crossOrigin);r.d.M(g,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(g)},nn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=p(E,y.crossOrigin);r.d.L(g,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},nn.preloadModule=function(g,y){if(typeof g=="string")if(y){var E=p(y.as,y.crossOrigin);r.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(g)},nn.requestFormReset=function(g){r.d.r(g)},nn.unstable_batchedUpdates=function(g,y){return g(y)},nn.useFormState=function(g,y,E){return f.H.useFormState(g,y,E)},nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},nn.version="19.2.5",nn}var Cv;function yS(){if(Cv)return um.exports;Cv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),um.exports=gS(),um.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function _S(){if(Nv)return Yl;Nv=1;var s=pS(),e=sp(),n=yS();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function g(t){if(u(t)!==t)throw Error(r(188))}function y(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),t;if(d===l)return g(h),i;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,T=h.child;T;){if(T===a){_=!0,a=h,l=d;break}if(T===l){_=!0,l=h,a=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===a){_=!0,a=d,l=h;break}if(T===l){_=!0,l=d,a=h;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:i}function E(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=E(t),i!==null)return i;t=t.sibling}return null}var S=Object.assign,V=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),ve=Symbol.for("react.consumer"),de=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function U(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function Xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ie:return"Fragment";case me:return"Profiler";case ee:return"StrictMode";case we:return"Suspense";case ge:return"SuspenseList";case x:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case de:return t.displayName||"Context";case ve:return(t._context.displayName||"Context")+".Consumer";case Te:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:Xe(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return Xe(t(i))}catch{}}return null}var ht=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Se=[],ke=-1;function M(t){return{current:t}}function Q(t){0>ke||(t.current=Se[ke],Se[ke]=null,ke--)}function ne(t,i){ke++,Se[ke]=t.current,t.current=i}var re=M(null),X=M(null),he=M(null),Me=M(null);function bt(t,i){switch(ne(he,i),ne(X,t),ne(re,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?G_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=G_(i),t=K_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(re),ne(re,t)}function it(){Q(re),Q(X),Q(he)}function Qi(t){t.memoizedState!==null&&ne(Me,t);var i=re.current,a=K_(i,t.type);i!==a&&(ne(X,t),ne(re,a))}function Ln(t){X.current===t&&(Q(re),Q(X)),Me.current===t&&(Q(Me),ql._currentValue=ce)}var Xi,xs;function wn(t){if(Xi===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Xi=i&&i[1]||"",xs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+t+xs}var $i=!1;function ti(t,i){if(!t||$i)return"";$i=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(H){var B=H}Reflect.construct(t,[],$)}else{try{$.call()}catch(H){B=H}t.call($.prototype)}}else{try{throw Error()}catch(H){B=H}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var C=_.split(`
`),z=T.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===z.length)for(l=C.length-1,h=z.length-1;1<=l&&0<=h&&C[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==z[h]){var K=`
`+C[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{$i=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?wn(a):""}function ni(t,i){switch(t.tag){case 26:case 27:case 5:return wn(t.type);case 16:return wn("Lazy");case 13:return t.child!==i&&i!==null?wn("Suspense Fallback"):wn("Suspense");case 19:return wn("SuspenseList");case 0:case 15:return ti(t.type,!1);case 11:return ti(t.type.render,!1);case 1:return ti(t.type,!0);case 31:return wn("Activity");default:return""}}function Ji(t){try{var i="",a=null;do i+=ni(t,a),a=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var mt=Object.prototype.hasOwnProperty,rt=s.unstable_scheduleCallback,jn=s.unstable_cancelCallback,Go=s.unstable_shouldYield,Rs=s.unstable_requestPaint,Yt=s.unstable_now,Zi=s.unstable_getCurrentPriorityLevel,Ir=s.unstable_ImmediatePriority,Cr=s.unstable_UserBlockingPriority,_i=s.unstable_NormalPriority,Ko=s.unstable_LowPriority,Ra=s.unstable_IdlePriority,Ia=s.log,Ca=s.unstable_setDisableYieldValue,Sn=null,Vt=null;function At(t){if(typeof Ia=="function"&&Ca(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Sn,t)}catch{}}var pt=Math.clz32?Math.clz32:Cs,Nr=Math.log,Is=Math.LN2;function Cs(t){return t>>>=0,t===0?32:31-(Nr(t)/Is|0)|0}var D=256,oe=262144,le=4194304;function Ut(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function An(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Ut(l):(_&=T,_!==0?h=Ut(_):a||(a=T&~t,a!==0&&(h=Ut(a))))):(T=l&~d,T!==0?h=Ut(T):_!==0?h=Ut(_):a||(a=l&~t,a!==0&&(h=Ut(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function fn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function vi(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Na(){var t=le;return le<<=1,(le&62914560)===0&&(le=4194304),t}function bi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Dr(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function uf(t,i,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,C=t.expirationTimes,z=t.hiddenUpdates;for(a=_&~a;0<a;){var K=31-pt(a),$=1<<K;T[K]=0,C[K]=-1;var B=z[K];if(B!==null)for(z[K]=null,K=0;K<B.length;K++){var H=B[K];H!==null&&(H.lane&=-536870913)}a&=~$}l!==0&&Or(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~i))}function Or(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-pt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Yo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-pt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function Qo(t,i){var a=i&-i;return a=(a&42)!==0?1:Mr(a),(a&(t.suspendedLanes|i))!==0?0:a}function Mr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Iu(){var t=te.p;return t!==0?t:(t=window.event,t===void 0?32:pv(t.type))}function ii(t,i){var a=te.p;try{return te.p=t,i()}finally{te.p=a}}var si=Math.random().toString(36).slice(2),xt="__reactFiber$"+si,Ht="__reactProps$"+si,Ti="__reactContainer$"+si,Da="__reactEvents$"+si,cf="__reactListeners$"+si,Cu="__reactHandles$"+si,Nu="__reactResources$"+si,Ei="__reactMarker$"+si;function Oa(t){delete t[xt],delete t[Ht],delete t[Da],delete t[cf],delete t[Cu]}function wi(t){var i=t[xt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ti]||a[xt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=W_(t);t!==null;){if(a=t[xt])return a;t=W_(t)}return i}t=a,a=t.parentNode}return null}function Pn(t){if(t=t[xt]||t[Ti]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function xn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Si(t){var i=t[Nu];return i||(i=t[Nu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Rt(t){t[Ei]=!0}var Xo=new Set,$o={};function Ai(t,i){xi(t,i),xi(t+"Capture",i)}function xi(t,i){for($o[t]=i,t=0;t<i.length;t++)Xo.add(i[t])}var Jo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zo={},Wo={};function Du(t){return mt.call(Wo,t)?!0:mt.call(Zo,t)?!1:Jo.test(t)?Wo[t]=!0:(Zo[t]=!0,!1)}function Ma(t,i,a){if(Du(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function Rn(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function It(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ns(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function el(t,i,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function $e(t){if(!t._valueTracker){var i=Ns(t)?"checked":"value";t._valueTracker=el(t,i,""+t[i])}}function kr(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ns(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Ri(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vr=/[\n"\\]/g;function dn(t){return t.replace(Vr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ka(t,i,a,l,h,d,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Ft(i)):t.value!==""+Ft(i)&&(t.value=""+Ft(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?tl(t,_,Ft(i)):a!=null?tl(t,_,Ft(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Ft(T):t.removeAttribute("name")}function Ou(t,i,a,l,h,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){$e(t);return}a=a!=null?""+Ft(a):"",i=i!=null?""+Ft(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),$e(t)}function tl(t,i,a){i==="number"&&Ri(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ds(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ft(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Mu(t,i,a){if(i!=null&&(i=""+Ft(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Ft(a):""}function Os(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(r(92));if(ht(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Ft(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),$e(t)}function mn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ku=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nl(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||ku.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function il(t,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&nl(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&nl(t,d,i[d])}function Va(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ms=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ua(t){return Ms.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ri(){}var sl=null;function zn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ks=null,Ii=null;function Ur(t){var i=Pn(t);if(i&&(t=i.stateNode)){var a=t[Ht]||null;e:switch(t=i.stateNode,i.type){case"input":if(ka(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Ht]||null;if(!h)throw Error(r(90));ka(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&kr(l)}break e;case"textarea":Mu(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ds(t,!!a.multiple,i,!1)}}}var La=!1;function Vs(t,i,a){if(La)return t(i,a);La=!0;try{var l=t(i);return l}finally{if(La=!1,(ks!==null||Ii!==null)&&(Ic(),ks&&(i=ks,t=Ii,Ii=ks=null,Ur(i),t)))for(i=0;i<t.length;i++)Ur(t[i])}}function ai(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Ht]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lr=!1;if(Bn)try{var We={};Object.defineProperty(We,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch{Lr=!1}var Ci=null,rl=null,jr=null;function al(){if(jr)return jr;var t,i=rl,a=i.length,l,h="value"in Ci?Ci.value:Ci.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&i[a-l]===h[d-l];l++);return jr=h.slice(t,1<l?1-l:void 0)}function Pr(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function es(){return!0}function oi(){return!1}function Qt(t){function i(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?es:oi,this.isPropagationStopped=oi,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=es)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=es)},persist:function(){},isPersistent:es}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=Qt(ts),Us=S({},ts,{view:0,detail:0}),ol=Qt(Us),Ls,ja,Di,Pa=S({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(Ls=t.screenX-Di.screenX,ja=t.screenY-Di.screenY):ja=Ls=0,Di=t),Ls)},movementY:function(t){return"movementY"in t?t.movementY:ja}}),ll=Qt(Pa),zr=S({},Pa,{dataTransfer:0}),Uu=Qt(zr),Lu=S({},Us,{relatedTarget:0}),Br=Qt(Lu),ul=S({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),ju=Qt(ul),za=S({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pu=Qt(za),zu=S({},ts,{data:0}),Oi=Qt(zu),Bu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fu(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Hu[t])?!!i[t]:!1}function js(){return Fu}var ln=S({},Us,{key:function(t){if(t.key){var i=Bu[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Pr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(t){return t.type==="keypress"?Pr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gu=Qt(ln),Ku=S({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ns=Qt(Ku),c=S({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),m=Qt(c),v=S({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),w=Qt(v),j=S({},Pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q=Qt(j),se=S({},ts,{newState:0,oldState:0}),Ne=Qt(se),Tt=[9,13,27,32],Ke=Bn&&"CompositionEvent"in window,ft=null;Bn&&"documentMode"in document&&(ft=document.documentMode);var qn=Bn&&"TextEvent"in window&&!ft,Mi=Bn&&(!Ke||ft&&8<ft&&11>=ft),li=" ",ui=!1;function qr(t,i){switch(t){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ba(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qa=!1;function V1(t,i){switch(t){case"compositionend":return Ba(i);case"keypress":return i.which!==32?null:(ui=!0,li);case"textInput":return t=i.data,t===li&&ui?null:t;default:return null}}function U1(t,i){if(qa)return t==="compositionend"||!Ke&&qr(t,i)?(t=al(),jr=rl=Ci=null,qa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mi&&i.locale!=="ko"?null:i.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!L1[t.type]:i==="textarea"}function ig(t,i,a,l){ks?Ii?Ii.push(l):Ii=[l]:ks=l,i=Vc(i,"onChange"),0<i.length&&(a=new Ni("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var cl=null,hl=null;function j1(t){P_(t,0)}function Yu(t){var i=xn(t);if(kr(i))return t}function sg(t,i){if(t==="change")return i}var rg=!1;if(Bn){var hf;if(Bn){var ff="oninput"in document;if(!ff){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),ff=typeof ag.oninput=="function"}hf=ff}else hf=!1;rg=hf&&(!document.documentMode||9<document.documentMode)}function og(){cl&&(cl.detachEvent("onpropertychange",lg),hl=cl=null)}function lg(t){if(t.propertyName==="value"&&Yu(hl)){var i=[];ig(i,hl,t,zn(t)),Vs(j1,i)}}function P1(t,i,a){t==="focusin"?(og(),cl=i,hl=a,cl.attachEvent("onpropertychange",lg)):t==="focusout"&&og()}function z1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(hl)}function B1(t,i){if(t==="click")return Yu(i)}function q1(t,i){if(t==="input"||t==="change")return Yu(i)}function H1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var In=typeof Object.is=="function"?Object.is:H1;function fl(t,i){if(In(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!mt.call(i,h)||!In(t[h],i[h]))return!1}return!0}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cg(t,i){var a=ug(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ug(a)}}function hg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?hg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function fg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ri(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Ri(t.document)}return i}function df(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var F1=Bn&&"documentMode"in document&&11>=document.documentMode,Ha=null,mf=null,dl=null,pf=!1;function dg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||Ha==null||Ha!==Ri(l)||(l=Ha,"selectionStart"in l&&df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),dl&&fl(dl,l)||(dl=l,l=Vc(mf,"onSelect"),0<l.length&&(i=new Ni("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Ha)))}function Hr(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Fa={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionrun:Hr("Transition","TransitionRun"),transitionstart:Hr("Transition","TransitionStart"),transitioncancel:Hr("Transition","TransitionCancel"),transitionend:Hr("Transition","TransitionEnd")},gf={},mg={};Bn&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Fr(t){if(gf[t])return gf[t];if(!Fa[t])return t;var i=Fa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in mg)return gf[t]=i[a];return t}var pg=Fr("animationend"),gg=Fr("animationiteration"),yg=Fr("animationstart"),G1=Fr("transitionrun"),K1=Fr("transitionstart"),Y1=Fr("transitioncancel"),_g=Fr("transitionend"),vg=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function ci(t,i){vg.set(t,i),Ai(i,[t])}var Qu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Hn=[],Ga=0,_f=0;function Xu(){for(var t=Ga,i=_f=Ga=0;i<t;){var a=Hn[i];Hn[i++]=null;var l=Hn[i];Hn[i++]=null;var h=Hn[i];Hn[i++]=null;var d=Hn[i];if(Hn[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&bg(a,h,d)}}function $u(t,i,a,l){Hn[Ga++]=t,Hn[Ga++]=i,Hn[Ga++]=a,Hn[Ga++]=l,_f|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function vf(t,i,a,l){return $u(t,i,a,l),Ju(t)}function Gr(t,i){return $u(t,null,null,i),Ju(t)}function bg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-pt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Ju(t){if(50<Vl)throw Vl=0,Id=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ka={};function Q1(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,i,a,l){return new Q1(t,i,a,l)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function is(t,i){var a=t.alternate;return a===null?(a=Cn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zu(t,i,a,l,h,d){var _=0;if(l=t,typeof t=="function")bf(t)&&(_=1);else if(typeof t=="string")_=Ww(t,a,re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case x:return t=Cn(31,a,i,h),t.elementType=x,t.lanes=d,t;case ie:return Kr(a.children,h,d,i);case ee:_=8,h|=24;break;case me:return t=Cn(12,a,i,h|2),t.elementType=me,t.lanes=d,t;case we:return t=Cn(13,a,i,h),t.elementType=we,t.lanes=d,t;case ge:return t=Cn(19,a,i,h),t.elementType=ge,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case de:_=10;break e;case ve:_=9;break e;case Te:_=11;break e;case I:_=14;break e;case A:_=16,l=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Cn(_,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Kr(t,i,a,l){return t=Cn(7,t,l,i),t.lanes=a,t}function Tf(t,i,a){return t=Cn(6,t,null,i),t.lanes=a,t}function Eg(t){var i=Cn(18,null,null,0);return i.stateNode=t,i}function Ef(t,i,a){return i=Cn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var wg=new WeakMap;function Fn(t,i){if(typeof t=="object"&&t!==null){var a=wg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Ji(i)},wg.set(t,i),i)}return{value:t,source:i,stack:Ji(i)}}var Ya=[],Qa=0,Wu=null,ml=0,Gn=[],Kn=0,Ps=null,ki=1,Vi="";function ss(t,i){Ya[Qa++]=ml,Ya[Qa++]=Wu,Wu=t,ml=i}function Sg(t,i,a){Gn[Kn++]=ki,Gn[Kn++]=Vi,Gn[Kn++]=Ps,Ps=t;var l=ki;t=Vi;var h=32-pt(l)-1;l&=~(1<<h),a+=1;var d=32-pt(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,ki=1<<32-pt(i)+h|a<<h|l,Vi=d+t}else ki=1<<d|a<<h|l,Vi=t}function wf(t){t.return!==null&&(ss(t,1),Sg(t,1,0))}function Sf(t){for(;t===Wu;)Wu=Ya[--Qa],Ya[Qa]=null,ml=Ya[--Qa],Ya[Qa]=null;for(;t===Ps;)Ps=Gn[--Kn],Gn[Kn]=null,Vi=Gn[--Kn],Gn[Kn]=null,ki=Gn[--Kn],Gn[Kn]=null}function Ag(t,i){Gn[Kn++]=ki,Gn[Kn++]=Vi,Gn[Kn++]=Ps,ki=i.id,Vi=i.overflow,Ps=t}var Xt=null,at=null,qe=!1,zs=null,Yn=!1,Af=Error(r(519));function Bs(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw pl(Fn(i,t)),Af}function xg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[xt]=t,i[Ht]=l,a){case"dialog":Ue("cancel",i),Ue("close",i);break;case"iframe":case"object":case"embed":Ue("load",i);break;case"video":case"audio":for(a=0;a<Ll.length;a++)Ue(Ll[a],i);break;case"source":Ue("error",i);break;case"img":case"image":case"link":Ue("error",i),Ue("load",i);break;case"details":Ue("toggle",i);break;case"input":Ue("invalid",i),Ou(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ue("invalid",i);break;case"textarea":Ue("invalid",i),Os(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||H_(i.textContent,a)?(l.popover!=null&&(Ue("beforetoggle",i),Ue("toggle",i)),l.onScroll!=null&&Ue("scroll",i),l.onScrollEnd!=null&&Ue("scrollend",i),l.onClick!=null&&(i.onclick=ri),i=!0):i=!1,i||Bs(t,!0)}function Rg(t){for(Xt=t.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:Yn=!1;return;case 27:case 3:Yn=!0;return;default:Xt=Xt.return}}function Xa(t){if(t!==Xt)return!1;if(!qe)return Rg(t),qe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hd(t.type,t.memoizedProps)),a=!a),a&&at&&Bs(t),Rg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));at=Z_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));at=Z_(t)}else i===27?(i=at,tr(t.type)?(t=Qd,Qd=null,at=t):at=i):at=Xt?Xn(t.stateNode.nextSibling):null;return!0}function Yr(){at=Xt=null,qe=!1}function xf(){var t=zs;return t!==null&&(_n===null?_n=t:_n.push.apply(_n,t),zs=null),t}function pl(t){zs===null?zs=[t]:zs.push(t)}var Rf=M(null),Qr=null,rs=null;function qs(t,i,a){ne(Rf,i._currentValue),i._currentValue=a}function as(t){t._currentValue=Rf.current,Q(Rf)}function If(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Cf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var C=0;C<i.length;C++)if(T.context===i[C]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),If(d.return,a,t),l||(_=null);break e}d=T.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(r(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),If(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function $a(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=h.type;In(h.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(h===Me.current){if(_=h.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(ql):t=[ql])}h=h.return}t!==null&&Cf(i,t,a,l),i.flags|=262144}function ec(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xr(t){Qr=t,rs=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return Ig(Qr,t)}function tc(t,i){return Qr===null&&Xr(t),Ig(t,i)}function Ig(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},rs===null){if(t===null)throw Error(r(308));rs=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else rs=rs.next=i;return a}var X1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},$1=s.unstable_scheduleCallback,J1=s.unstable_NormalPriority,Ct={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nf(){return{controller:new X1,data:new Map,refCount:0}}function gl(t){t.refCount--,t.refCount===0&&$1(J1,function(){t.controller.abort()})}var yl=null,Df=0,Ja=0,Za=null;function Z1(t,i){if(yl===null){var a=yl=[];Df=0,Ja=kd(),Za={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Df++,i.then(Cg,Cg),i}function Cg(){if(--Df===0&&yl!==null){Za!==null&&(Za.status="fulfilled");var t=yl;yl=null,Ja=0,Za=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function W1(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Ng=G.S;G.S=function(t,i){d_=Yt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Z1(t,i),Ng!==null&&Ng(t,i)};var $r=M(null);function Of(){var t=$r.current;return t!==null?t:st.pooledCache}function nc(t,i){i===null?ne($r,$r.current):ne($r,i.pool)}function Dg(){var t=Of();return t===null?null:{parent:Ct._currentValue,pool:t}}var Wa=Error(r(460)),Mf=Error(r(474)),ic=Error(r(542)),sc={then:function(){}};function Og(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(ri,ri),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vg(t),t;default:if(typeof i.status=="string")i.then(ri,ri);else{if(t=st,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vg(t),t}throw Zr=i,Wa}}function Jr(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Zr=a,Wa):a}}var Zr=null;function kg(){if(Zr===null)throw Error(r(459));var t=Zr;return Zr=null,t}function Vg(t){if(t===Wa||t===ic)throw Error(r(483))}var eo=null,_l=0;function rc(t){var i=_l;return _l+=1,eo===null&&(eo=[]),Mg(eo,t,i)}function vl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ac(t,i){throw i.$$typeof===V?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ug(t){function i(L,O){if(t){var P=L.deletions;P===null?(L.deletions=[O],L.flags|=16):P.push(O)}}function a(L,O){if(!t)return null;for(;O!==null;)i(L,O),O=O.sibling;return null}function l(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function h(L,O){return L=is(L,O),L.index=0,L.sibling=null,L}function d(L,O,P){return L.index=P,t?(P=L.alternate,P!==null?(P=P.index,P<O?(L.flags|=67108866,O):P):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function _(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function T(L,O,P,Y){return O===null||O.tag!==6?(O=Tf(P,L.mode,Y),O.return=L,O):(O=h(O,P),O.return=L,O)}function C(L,O,P,Y){var ye=P.type;return ye===ie?K(L,O,P.props.children,Y,P.key):O!==null&&(O.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===A&&Jr(ye)===O.type)?(O=h(O,P.props),vl(O,P),O.return=L,O):(O=Zu(P.type,P.key,P.props,null,L.mode,Y),vl(O,P),O.return=L,O)}function z(L,O,P,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==P.containerInfo||O.stateNode.implementation!==P.implementation?(O=Ef(P,L.mode,Y),O.return=L,O):(O=h(O,P.children||[]),O.return=L,O)}function K(L,O,P,Y,ye){return O===null||O.tag!==7?(O=Kr(P,L.mode,Y,ye),O.return=L,O):(O=h(O,P),O.return=L,O)}function $(L,O,P){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Tf(""+O,L.mode,P),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case F:return P=Zu(O.type,O.key,O.props,null,L.mode,P),vl(P,O),P.return=L,P;case W:return O=Ef(O,L.mode,P),O.return=L,O;case A:return O=Jr(O),$(L,O,P)}if(ht(O)||U(O))return O=Kr(O,L.mode,P,null),O.return=L,O;if(typeof O.then=="function")return $(L,rc(O),P);if(O.$$typeof===de)return $(L,tc(L,O),P);ac(L,O)}return null}function B(L,O,P,Y){var ye=O!==null?O.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ye!==null?null:T(L,O,""+P,Y);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case F:return P.key===ye?C(L,O,P,Y):null;case W:return P.key===ye?z(L,O,P,Y):null;case A:return P=Jr(P),B(L,O,P,Y)}if(ht(P)||U(P))return ye!==null?null:K(L,O,P,Y,null);if(typeof P.then=="function")return B(L,O,rc(P),Y);if(P.$$typeof===de)return B(L,O,tc(L,P),Y);ac(L,P)}return null}function H(L,O,P,Y,ye){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return L=L.get(P)||null,T(O,L,""+Y,ye);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case F:return L=L.get(Y.key===null?P:Y.key)||null,C(O,L,Y,ye);case W:return L=L.get(Y.key===null?P:Y.key)||null,z(O,L,Y,ye);case A:return Y=Jr(Y),H(L,O,P,Y,ye)}if(ht(Y)||U(Y))return L=L.get(P)||null,K(O,L,Y,ye,null);if(typeof Y.then=="function")return H(L,O,P,rc(Y),ye);if(Y.$$typeof===de)return H(L,O,P,tc(O,Y),ye);ac(O,Y)}return null}function ue(L,O,P,Y){for(var ye=null,Fe=null,fe=O,Oe=O=0,je=null;fe!==null&&Oe<P.length;Oe++){fe.index>Oe?(je=fe,fe=null):je=fe.sibling;var Ge=B(L,fe,P[Oe],Y);if(Ge===null){fe===null&&(fe=je);break}t&&fe&&Ge.alternate===null&&i(L,fe),O=d(Ge,O,Oe),Fe===null?ye=Ge:Fe.sibling=Ge,Fe=Ge,fe=je}if(Oe===P.length)return a(L,fe),qe&&ss(L,Oe),ye;if(fe===null){for(;Oe<P.length;Oe++)fe=$(L,P[Oe],Y),fe!==null&&(O=d(fe,O,Oe),Fe===null?ye=fe:Fe.sibling=fe,Fe=fe);return qe&&ss(L,Oe),ye}for(fe=l(fe);Oe<P.length;Oe++)je=H(fe,L,Oe,P[Oe],Y),je!==null&&(t&&je.alternate!==null&&fe.delete(je.key===null?Oe:je.key),O=d(je,O,Oe),Fe===null?ye=je:Fe.sibling=je,Fe=je);return t&&fe.forEach(function(ar){return i(L,ar)}),qe&&ss(L,Oe),ye}function be(L,O,P,Y){if(P==null)throw Error(r(151));for(var ye=null,Fe=null,fe=O,Oe=O=0,je=null,Ge=P.next();fe!==null&&!Ge.done;Oe++,Ge=P.next()){fe.index>Oe?(je=fe,fe=null):je=fe.sibling;var ar=B(L,fe,Ge.value,Y);if(ar===null){fe===null&&(fe=je);break}t&&fe&&ar.alternate===null&&i(L,fe),O=d(ar,O,Oe),Fe===null?ye=ar:Fe.sibling=ar,Fe=ar,fe=je}if(Ge.done)return a(L,fe),qe&&ss(L,Oe),ye;if(fe===null){for(;!Ge.done;Oe++,Ge=P.next())Ge=$(L,Ge.value,Y),Ge!==null&&(O=d(Ge,O,Oe),Fe===null?ye=Ge:Fe.sibling=Ge,Fe=Ge);return qe&&ss(L,Oe),ye}for(fe=l(fe);!Ge.done;Oe++,Ge=P.next())Ge=H(fe,L,Oe,Ge.value,Y),Ge!==null&&(t&&Ge.alternate!==null&&fe.delete(Ge.key===null?Oe:Ge.key),O=d(Ge,O,Oe),Fe===null?ye=Ge:Fe.sibling=Ge,Fe=Ge);return t&&fe.forEach(function(cS){return i(L,cS)}),qe&&ss(L,Oe),ye}function nt(L,O,P,Y){if(typeof P=="object"&&P!==null&&P.type===ie&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case F:e:{for(var ye=P.key;O!==null;){if(O.key===ye){if(ye=P.type,ye===ie){if(O.tag===7){a(L,O.sibling),Y=h(O,P.props.children),Y.return=L,L=Y;break e}}else if(O.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===A&&Jr(ye)===O.type){a(L,O.sibling),Y=h(O,P.props),vl(Y,P),Y.return=L,L=Y;break e}a(L,O);break}else i(L,O);O=O.sibling}P.type===ie?(Y=Kr(P.props.children,L.mode,Y,P.key),Y.return=L,L=Y):(Y=Zu(P.type,P.key,P.props,null,L.mode,Y),vl(Y,P),Y.return=L,L=Y)}return _(L);case W:e:{for(ye=P.key;O!==null;){if(O.key===ye)if(O.tag===4&&O.stateNode.containerInfo===P.containerInfo&&O.stateNode.implementation===P.implementation){a(L,O.sibling),Y=h(O,P.children||[]),Y.return=L,L=Y;break e}else{a(L,O);break}else i(L,O);O=O.sibling}Y=Ef(P,L.mode,Y),Y.return=L,L=Y}return _(L);case A:return P=Jr(P),nt(L,O,P,Y)}if(ht(P))return ue(L,O,P,Y);if(U(P)){if(ye=U(P),typeof ye!="function")throw Error(r(150));return P=ye.call(P),be(L,O,P,Y)}if(typeof P.then=="function")return nt(L,O,rc(P),Y);if(P.$$typeof===de)return nt(L,O,tc(L,P),Y);ac(L,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,O!==null&&O.tag===6?(a(L,O.sibling),Y=h(O,P),Y.return=L,L=Y):(a(L,O),Y=Tf(P,L.mode,Y),Y.return=L,L=Y),_(L)):a(L,O)}return function(L,O,P,Y){try{_l=0;var ye=nt(L,O,P,Y);return eo=null,ye}catch(fe){if(fe===Wa||fe===ic)throw fe;var Fe=Cn(29,fe,null,L.mode);return Fe.lanes=Y,Fe.return=L,Fe}finally{}}}var Wr=Ug(!0),Lg=Ug(!1),Hs=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Gs(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Ju(t),bg(t,null,a),i}return $u(t,l,i,a),Ju(t)}function bl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Yo(t,a)}}function Uf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Lf=!1;function Tl(){if(Lf){var t=Za;if(t!==null)throw t}}function El(t,i,a,l){Lf=!1;var h=t.updateQueue;Hs=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var C=T,z=C.next;C.next=null,_===null?d=z:_.next=z,_=C;var K=t.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=z:T.next=z,K.lastBaseUpdate=C))}if(d!==null){var $=h.baseState;_=0,K=z=C=null,T=d;do{var B=T.lane&-536870913,H=B!==T.lane;if(H?(Le&B)===B:(l&B)===B){B!==0&&B===Ja&&(Lf=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ue=t,be=T;B=i;var nt=a;switch(be.tag){case 1:if(ue=be.payload,typeof ue=="function"){$=ue.call(nt,$,B);break e}$=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=be.payload,B=typeof ue=="function"?ue.call(nt,$,B):ue,B==null)break e;$=S({},$,B);break e;case 2:Hs=!0}}B=T.callback,B!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[B]:H.push(B))}else H={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(z=K=H,C=$):K=K.next=H,_|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);K===null&&(C=$),h.baseState=C,h.firstBaseUpdate=z,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),$s|=_,t.lanes=_,t.memoizedState=$}}function jg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Pg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)jg(a[t],i)}var to=M(null),oc=M(0);function zg(t,i){t=ps,ne(oc,t),ne(to,i),ps=t|i.baseLanes}function jf(){ne(oc,ps),ne(to,to.current)}function Pf(){ps=oc.current,Q(to),Q(oc)}var Nn=M(null),Qn=null;function Ks(t){var i=t.alternate;ne(Et,Et.current&1),ne(Nn,t),Qn===null&&(i===null||to.current!==null||i.memoizedState!==null)&&(Qn=t)}function zf(t){ne(Et,Et.current),ne(Nn,t),Qn===null&&(Qn=t)}function Bg(t){t.tag===22?(ne(Et,Et.current),ne(Nn,t),Qn===null&&(Qn=t)):Ys()}function Ys(){ne(Et,Et.current),ne(Nn,Nn.current)}function Dn(t){Q(Nn),Qn===t&&(Qn=null),Q(Et)}var Et=M(0);function lc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kd(a)||Yd(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var os=0,De=null,et=null,Nt=null,uc=!1,no=!1,ea=!1,cc=0,wl=0,io=null,ew=0;function _t(){throw Error(r(321))}function Bf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!In(t[a],i[a]))return!1;return!0}function qf(t,i,a,l,h,d){return os=d,De=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=t===null||t.memoizedState===null?Sy:id,ea=!1,d=a(l,h),ea=!1,no&&(d=Hg(i,a,l,h)),qg(t),d}function qg(t){G.H=xl;var i=et!==null&&et.next!==null;if(os=0,Nt=et=De=null,uc=!1,wl=0,io=null,i)throw Error(r(300));t===null||Dt||(t=t.dependencies,t!==null&&ec(t)&&(Dt=!0))}function Hg(t,i,a,l){De=t;var h=0;do{if(no&&(io=null),wl=0,no=!1,25<=h)throw Error(r(301));if(h+=1,Nt=et=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=Ay,d=i(a,l)}while(no);return d}function tw(){var t=G.H,i=t.useState()[0];return i=typeof i.then=="function"?Sl(i):i,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(De.flags|=1024),i}function Hf(){var t=cc!==0;return cc=0,t}function Ff(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Gf(t){if(uc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uc=!1}os=0,Nt=et=De=null,no=!1,wl=cc=0,io=null}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?De.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function wt(){if(et===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var i=Nt===null?De.memoizedState:Nt.next;if(i!==null)Nt=i,et=t;else{if(t===null)throw De.alternate===null?Error(r(467)):Error(r(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Nt===null?De.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(t){var i=wl;return wl+=1,io===null&&(io=[]),t=Mg(io,t,i),i=De,(Nt===null?i.memoizedState:Nt.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Sy:id),t}function fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Sl(t);if(t.$$typeof===de)return $t(t)}throw Error(r(438,String(t)))}function Kf(t){var i=null,a=De.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=De.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=hc(),De.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=k;return i.index++,a}function ls(t,i){return typeof i=="function"?i(t):i}function dc(t){var i=wt();return Yf(i,et,t)}function Yf(t,i,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=_=null,C=null,z=i,K=!1;do{var $=z.lane&-536870913;if($!==z.lane?(Le&$)===$:(os&$)===$){var B=z.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),$===Ja&&(K=!0);else if((os&B)===B){z=z.next,B===Ja&&(K=!0);continue}else $={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=$,_=d):C=C.next=$,De.lanes|=B,$s|=B;$=z.action,ea&&a(d,$),d=z.hasEagerState?z.eagerState:a(d,$)}else B={lane:$,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=B,_=d):C=C.next=B,De.lanes|=$,$s|=$;z=z.next}while(z!==null&&z!==i);if(C===null?_=d:C.next=T,!In(d,t.memoizedState)&&(Dt=!0,K&&(a=Za,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=C,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Qf(t){var i=wt(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);In(d,i.memoizedState)||(Dt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Fg(t,i,a){var l=De,h=wt(),d=qe;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=i();var _=!In((et||h).memoizedState,a);if(_&&(h.memoizedState=a,Dt=!0),h=h.queue,Jf(Yg.bind(null,l,h,t),[t]),h.getSnapshot!==i||_||Nt!==null&&Nt.memoizedState.tag&1){if(l.flags|=2048,so(9,{destroy:void 0},Kg.bind(null,l,h,a,i),null),st===null)throw Error(r(349));d||(os&127)!==0||Gg(l,i,a)}return a}function Gg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=De.updateQueue,i===null?(i=hc(),De.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Kg(t,i,a,l){i.value=a,i.getSnapshot=l,Qg(i)&&Xg(t)}function Yg(t,i,a){return a(function(){Qg(i)&&Xg(t)})}function Qg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!In(t,a)}catch{return!0}}function Xg(t){var i=Gr(t,2);i!==null&&vn(i,t,2)}function Xf(t){var i=un();if(typeof t=="function"){var a=t;if(t=a(),ea){At(!0);try{a()}finally{At(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},i}function $g(t,i,a,l){return t.baseState=a,Yf(t,et,typeof l=="function"?l:ls)}function nw(t,i,a,l,h){if(gc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};G.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Jg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Jg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=G.T,_={};G.T=_;try{var T=a(h,l),C=G.S;C!==null&&C(_,T),Zg(t,i,T)}catch(z){$f(t,i,z)}finally{d!==null&&_.types!==null&&(d.types=_.types),G.T=d}}else try{d=a(h,l),Zg(t,i,d)}catch(z){$f(t,i,z)}}function Zg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wg(t,i,l)},function(l){return $f(t,i,l)}):Wg(t,i,a)}function Wg(t,i,a){i.status="fulfilled",i.value=a,ey(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Jg(t,a)))}function $f(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,ey(i),i=i.next;while(i!==l)}t.action=null}function ey(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ty(t,i){return i}function ny(t,i){if(qe){var a=st.formState;if(a!==null){e:{var l=De;if(qe){if(at){t:{for(var h=at,d=Yn;h.nodeType!==8;){if(!d){h=null;break t}if(h=Xn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){at=Xn(h.nextSibling),l=h.data==="F!";break e}}Bs(l)}l=!1}l&&(i=a[0])}}return a=un(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ty,lastRenderedState:i},a.queue=l,a=Ty.bind(null,De,l),l.dispatch=a,l=Xf(!1),d=nd.bind(null,De,!1,l.queue),l=un(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=nw.bind(null,De,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function iy(t){var i=wt();return sy(i,et,t)}function sy(t,i,a){if(i=Yf(t,i,ty)[0],t=dc(ls)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Sl(i)}catch(_){throw _===Wa?ic:_}else l=i;i=wt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(De.flags|=2048,so(9,{destroy:void 0},iw.bind(null,h,a),null)),[l,d,t]}function iw(t,i){t.action=i}function ry(t){var i=wt(),a=et;if(a!==null)return sy(i,a,t);wt(),i=i.memoizedState,a=wt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function so(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=De.updateQueue,i===null&&(i=hc(),De.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function ay(){return wt().memoizedState}function mc(t,i,a,l){var h=un();De.flags|=t,h.memoizedState=so(1|i,{destroy:void 0},a,l===void 0?null:l)}function pc(t,i,a,l){var h=wt();l=l===void 0?null:l;var d=h.memoizedState.inst;et!==null&&l!==null&&Bf(l,et.memoizedState.deps)?h.memoizedState=so(i,d,a,l):(De.flags|=t,h.memoizedState=so(1|i,d,a,l))}function oy(t,i){mc(8390656,8,t,i)}function Jf(t,i){pc(2048,8,t,i)}function sw(t){De.flags|=4;var i=De.updateQueue;if(i===null)i=hc(),De.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function ly(t){var i=wt().memoizedState;return sw({ref:i,nextImpl:t}),function(){if((Ye&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function uy(t,i){return pc(4,2,t,i)}function cy(t,i){return pc(4,4,t,i)}function hy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function fy(t,i,a){a=a!=null?a.concat([t]):null,pc(4,4,hy.bind(null,i,t),a)}function Zf(){}function dy(t,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Bf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function my(t,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Bf(i,l[1]))return l[0];if(l=t(),ea){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[l,i],l}function Wf(t,i,a){return a===void 0||(os&1073741824)!==0&&(Le&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=p_(),De.lanes|=t,$s|=t,a)}function py(t,i,a,l){return In(a,i)?a:to.current!==null?(t=Wf(t,a,l),In(t,i)||(Dt=!0),t):(os&42)===0||(os&1073741824)!==0&&(Le&261930)===0?(Dt=!0,t.memoizedState=a):(t=p_(),De.lanes|=t,$s|=t,i)}function gy(t,i,a,l,h){var d=te.p;te.p=d!==0&&8>d?d:8;var _=G.T,T={};G.T=T,nd(t,!1,i,a);try{var C=h(),z=G.S;if(z!==null&&z(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var K=W1(C,l);Al(t,i,K,kn(t))}else Al(t,i,l,kn(t))}catch($){Al(t,i,{then:function(){},status:"rejected",reason:$},kn())}finally{te.p=d,_!==null&&T.types!==null&&(_.types=T.types),G.T=_}}function rw(){}function ed(t,i,a,l){if(t.tag!==5)throw Error(r(476));var h=yy(t).queue;gy(t,h,i,ce,a===null?rw:function(){return _y(t),a(l)})}function yy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:ce},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _y(t){var i=yy(t);i.next===null&&(i=t.alternate.memoizedState),Al(t,i.next.queue,{},kn())}function td(){return $t(ql)}function vy(){return wt().memoizedState}function by(){return wt().memoizedState}function aw(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=kn();t=Fs(a);var l=Gs(i,t,a);l!==null&&(vn(l,i,a),bl(l,i,a)),i={cache:Nf()},t.payload=i;return}i=i.return}}function ow(t,i,a){var l=kn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gc(t)?Ey(i,a):(a=vf(t,i,a,l),a!==null&&(vn(a,t,l),wy(a,i,l)))}function Ty(t,i,a){var l=kn();Al(t,i,a,l)}function Al(t,i,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gc(t))Ey(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,T=d(_,a);if(h.hasEagerState=!0,h.eagerState=T,In(T,_))return $u(t,i,h,0),st===null&&Xu(),!1}catch{}finally{}if(a=vf(t,i,h,l),a!==null)return vn(a,t,l),wy(a,i,l),!0}return!1}function nd(t,i,a,l){if(l={lane:2,revertLane:kd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gc(t)){if(i)throw Error(r(479))}else i=vf(t,a,l,2),i!==null&&vn(i,t,2)}function gc(t){var i=t.alternate;return t===De||i!==null&&i===De}function Ey(t,i){no=uc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function wy(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Yo(t,a)}}var xl={readContext:$t,use:fc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};xl.useEffectEvent=_t;var Sy={readContext:$t,use:fc,useCallback:function(t,i){return un().memoizedState=[t,i===void 0?null:i],t},useContext:$t,useEffect:oy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,mc(4194308,4,hy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return mc(4194308,4,t,i)},useInsertionEffect:function(t,i){mc(4,2,t,i)},useMemo:function(t,i){var a=un();i=i===void 0?null:i;var l=t();if(ea){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=un();if(a!==void 0){var h=a(i);if(ea){At(!0);try{a(i)}finally{At(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=ow.bind(null,De,t),[l.memoizedState,t]},useRef:function(t){var i=un();return t={current:t},i.memoizedState=t},useState:function(t){t=Xf(t);var i=t.queue,a=Ty.bind(null,De,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Zf,useDeferredValue:function(t,i){var a=un();return Wf(a,t,i)},useTransition:function(){var t=Xf(!1);return t=gy.bind(null,De,t.queue,!0,!1),un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=De,h=un();if(qe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),st===null)throw Error(r(349));(Le&127)!==0||Gg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,oy(Yg.bind(null,l,d,t),[t]),l.flags|=2048,so(9,{destroy:void 0},Kg.bind(null,l,d,a,i),null),a},useId:function(){var t=un(),i=st.identifierPrefix;if(qe){var a=Vi,l=ki;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=cc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=ew++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:td,useFormState:ny,useActionState:ny,useOptimistic:function(t){var i=un();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=nd.bind(null,De,!0,a),a.dispatch=i,[t,i]},useMemoCache:Kf,useCacheRefresh:function(){return un().memoizedState=aw.bind(null,De)},useEffectEvent:function(t){var i=un(),a={impl:t};return i.memoizedState=a,function(){if((Ye&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},id={readContext:$t,use:fc,useCallback:dy,useContext:$t,useEffect:Jf,useImperativeHandle:fy,useInsertionEffect:uy,useLayoutEffect:cy,useMemo:my,useReducer:dc,useRef:ay,useState:function(){return dc(ls)},useDebugValue:Zf,useDeferredValue:function(t,i){var a=wt();return py(a,et.memoizedState,t,i)},useTransition:function(){var t=dc(ls)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:Sl(t),i]},useSyncExternalStore:Fg,useId:vy,useHostTransitionStatus:td,useFormState:iy,useActionState:iy,useOptimistic:function(t,i){var a=wt();return $g(a,et,t,i)},useMemoCache:Kf,useCacheRefresh:by};id.useEffectEvent=ly;var Ay={readContext:$t,use:fc,useCallback:dy,useContext:$t,useEffect:Jf,useImperativeHandle:fy,useInsertionEffect:uy,useLayoutEffect:cy,useMemo:my,useReducer:Qf,useRef:ay,useState:function(){return Qf(ls)},useDebugValue:Zf,useDeferredValue:function(t,i){var a=wt();return et===null?Wf(a,t,i):py(a,et.memoizedState,t,i)},useTransition:function(){var t=Qf(ls)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:Sl(t),i]},useSyncExternalStore:Fg,useId:vy,useHostTransitionStatus:td,useFormState:ry,useActionState:ry,useOptimistic:function(t,i){var a=wt();return et!==null?$g(a,et,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Kf,useCacheRefresh:by};Ay.useEffectEvent=ly;function sd(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:S({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rd={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=kn(),h=Fs(l);h.payload=i,a!=null&&(h.callback=a),i=Gs(t,h,l),i!==null&&(vn(i,t,l),bl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=kn(),h=Fs(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Gs(t,h,l),i!==null&&(vn(i,t,l),bl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=kn(),l=Fs(a);l.tag=2,i!=null&&(l.callback=i),i=Gs(t,l,a),i!==null&&(vn(i,t,a),bl(i,t,a))}};function xy(t,i,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!fl(a,l)||!fl(h,d):!0}function Ry(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&rd.enqueueReplaceState(i,i.state,null)}function ta(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=S({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}function Iy(t){Qu(t)}function Cy(t){console.error(t)}function Ny(t){Qu(t)}function yc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Dy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ad(t,i,a){return a=Fs(a),a.tag=3,a.payload={element:null},a.callback=function(){yc(t,i)},a}function Oy(t){return t=Fs(t),t.tag=3,t}function My(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Dy(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Dy(i,a,l),typeof h!="function"&&(Js===null?Js=new Set([this]):Js.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function lw(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&$a(i,a,h,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:return Qn===null?Cc():a.alternate===null&&vt===0&&(vt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===sc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Dd(t,l,h)),!1;case 22:return a.flags|=65536,l===sc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Dd(t,l,h)),!1}throw Error(r(435,a.tag))}return Dd(t,l,h),Cc(),!1}if(qe)return i=Nn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Af&&(t=Error(r(422),{cause:l}),pl(Fn(t,a)))):(l!==Af&&(i=Error(r(423),{cause:l}),pl(Fn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Fn(l,a),h=ad(t.stateNode,l,h),Uf(t,h),vt!==4&&(vt=2)),!1;var d=Error(r(520),{cause:l});if(d=Fn(d,a),kl===null?kl=[d]:kl.push(d),vt!==4&&(vt=2),i===null)return!0;l=Fn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=ad(a.stateNode,l,t),Uf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Js===null||!Js.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Oy(h),My(h,t,a,l),Uf(a,h),!1}a=a.return}while(a!==null);return!1}var od=Error(r(461)),Dt=!1;function Jt(t,i,a,l){i.child=t===null?Lg(i,null,a,l):Wr(i,t.child,a,l)}function ky(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return Xr(i),l=qf(t,i,a,_,d,h),T=Hf(),t!==null&&!Dt?(Ff(t,i,h),us(t,i,h)):(qe&&T&&wf(i),i.flags|=1,Jt(t,i,l,h),i.child)}function Vy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!bf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Uy(t,i,d,l,h)):(t=Zu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!pd(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:fl,a(_,l)&&t.ref===i.ref)return us(t,i,h)}return i.flags|=1,t=is(d,l),t.ref=i.ref,t.return=i,i.child=t}function Uy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(fl(d,l)&&t.ref===i.ref)if(Dt=!1,i.pendingProps=l=d,pd(t,h))(t.flags&131072)!==0&&(Dt=!0);else return i.lanes=t.lanes,us(t,i,h)}return ld(t,i,a,l,h)}function Ly(t,i,a,l){var h=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(l=i.child=t.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return jy(t,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&nc(i,d!==null?d.cachePool:null),d!==null?zg(i,d):jf(),Bg(i);else return l=i.lanes=536870912,jy(t,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(nc(i,d.cachePool),zg(i,d),Ys(),i.memoizedState=null):(t!==null&&nc(i,null),jf(),Ys());return Jt(t,i,h,a),i.child}function Rl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function jy(t,i,a,l,h){var d=Of();return d=d===null?null:{parent:Ct._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},t!==null&&nc(i,null),jf(),Bg(i),t!==null&&$a(t,i,l,!0),i.childLanes=h,null}function _c(t,i){return i=bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Py(t,i,a){return Wr(i,t.child,null,a),t=_c(i,i.pendingProps),t.flags|=2,Dn(i),i.memoizedState=null,t}function uw(t,i,a){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(qe){if(l.mode==="hidden")return t=_c(i,l),i.lanes=536870912,Rl(null,t);if(zf(i),(t=at)?(t=J_(t,Yn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ps!==null?{id:ki,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Eg(t),a.return=i,i.child=a,Xt=i,at=null)):t=null,t===null)throw Bs(i);return i.lanes=536870912,null}return _c(i,l)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(zf(i),h)if(i.flags&256)i.flags&=-257,i=Py(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(Dt||$a(t,i,a,!1),h=(a&t.childLanes)!==0,Dt||h){if(l=st,l!==null&&(_=Qo(l,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,Gr(t,_),vn(l,t,_),od;Cc(),i=Py(t,i,a)}else t=d.treeContext,at=Xn(_.nextSibling),Xt=i,qe=!0,zs=null,Yn=!1,t!==null&&Ag(i,t),i=_c(i,l),i.flags|=4096;return i}return t=is(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function vc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function ld(t,i,a,l,h){return Xr(i),a=qf(t,i,a,l,void 0,h),l=Hf(),t!==null&&!Dt?(Ff(t,i,h),us(t,i,h)):(qe&&l&&wf(i),i.flags|=1,Jt(t,i,a,h),i.child)}function zy(t,i,a,l,h,d){return Xr(i),i.updateQueue=null,a=Hg(i,l,a,h),qg(t),l=Hf(),t!==null&&!Dt?(Ff(t,i,d),us(t,i,d)):(qe&&l&&wf(i),i.flags|=1,Jt(t,i,a,d),i.child)}function By(t,i,a,l,h){if(Xr(i),i.stateNode===null){var d=Ka,_=a.contextType;typeof _=="object"&&_!==null&&(d=$t(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=rd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},kf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?$t(_):Ka,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(sd(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&rd.enqueueReplaceState(d,d.state,null),El(i,l,d,h),Tl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,C=ta(a,T);d.props=C;var z=d.context,K=a.contextType;_=Ka,typeof K=="object"&&K!==null&&(_=$t(K));var $=a.getDerivedStateFromProps;K=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==_)&&Ry(i,d,l,_),Hs=!1;var B=i.memoizedState;d.state=B,El(i,l,d,h),Tl(),z=i.memoizedState,T||B!==z||Hs?(typeof $=="function"&&(sd(i,a,$,l),z=i.memoizedState),(C=Hs||xy(i,a,C,l,B,z,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=_,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Vf(t,i),_=i.memoizedProps,K=ta(a,_),d.props=K,$=i.pendingProps,B=d.context,z=a.contextType,C=Ka,typeof z=="object"&&z!==null&&(C=$t(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==$||B!==C)&&Ry(i,d,l,C),Hs=!1,B=i.memoizedState,d.state=B,El(i,l,d,h),Tl();var H=i.memoizedState;_!==$||B!==H||Hs||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof T=="function"&&(sd(i,a,T,l),H=i.memoizedState),(K=Hs||xy(i,a,K,l,B,H,C)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=C,l=K):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,vc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Wr(i,t.child,null,h),i.child=Wr(i,null,a,h)):Jt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=us(t,i,h),t}function qy(t,i,a,l){return Yr(),i.flags|=256,Jt(t,i,a,l),i.child}var ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cd(t){return{baseLanes:t,cachePool:Dg()}}function hd(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Mn),t}function Hy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(Et.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(qe){if(h?Ks(i):Ys(),(t=at)?(t=J_(t,Yn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ps!==null?{id:ki,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Eg(t),a.return=i,i.child=a,Xt=i,at=null)):t=null,t===null)throw Bs(i);return Yd(t)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,h?(Ys(),h=i.mode,T=bc({mode:"hidden",children:T},h),l=Kr(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=cd(a),l.childLanes=hd(t,_,a),i.memoizedState=ud,Rl(null,l)):(Ks(i),fd(i,T))}var C=t.memoizedState;if(C!==null&&(T=C.dehydrated,T!==null)){if(d)i.flags&256?(Ks(i),i.flags&=-257,i=dd(t,i,a)):i.memoizedState!==null?(Ys(),i.child=t.child,i.flags|=128,i=null):(Ys(),T=l.fallback,h=i.mode,l=bc({mode:"visible",children:l.children},h),T=Kr(T,h,a,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,Wr(i,t.child,null,a),l=i.child,l.memoizedState=cd(a),l.childLanes=hd(t,_,a),i.memoizedState=ud,i=Rl(null,l));else if(Ks(i),Yd(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var z=_.dgst;_=z,l=Error(r(419)),l.stack="",l.digest=_,pl({value:l,source:null,stack:null}),i=dd(t,i,a)}else if(Dt||$a(t,i,a,!1),_=(a&t.childLanes)!==0,Dt||_){if(_=st,_!==null&&(l=Qo(_,a),l!==0&&l!==C.retryLane))throw C.retryLane=l,Gr(t,l),vn(_,t,l),od;Kd(T)||Cc(),i=dd(t,i,a)}else Kd(T)?(i.flags|=192,i.child=t.child,i=null):(t=C.treeContext,at=Xn(T.nextSibling),Xt=i,qe=!0,zs=null,Yn=!1,t!==null&&Ag(i,t),i=fd(i,l.children),i.flags|=4096);return i}return h?(Ys(),T=l.fallback,h=i.mode,C=t.child,z=C.sibling,l=is(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,z!==null?T=is(z,T):(T=Kr(T,h,a,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,Rl(null,l),l=i.child,T=t.child.memoizedState,T===null?T=cd(a):(h=T.cachePool,h!==null?(C=Ct._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=Dg(),T={baseLanes:T.baseLanes|a,cachePool:h}),l.memoizedState=T,l.childLanes=hd(t,_,a),i.memoizedState=ud,Rl(t.child,l)):(Ks(i),a=t.child,t=a.sibling,a=is(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=a,i.memoizedState=null,a)}function fd(t,i){return i=bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function bc(t,i){return t=Cn(22,t,null,i),t.lanes=0,t}function dd(t,i,a){return Wr(i,t.child,null,a),t=fd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Fy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),If(t.return,i,a)}function md(t,i,a,l,h,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function Gy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var _=Et.current,T=(_&2)!==0;if(T?(_=_&1|2,i.flags|=128):_&=1,ne(Et,_),Jt(t,i,l,a),l=qe?ml:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,a,i);else if(t.tag===19)Fy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&lc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),md(i,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&lc(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}md(i,!0,a,null,d,l);break;case"together":md(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function us(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),$s|=i.lanes,(a&i.childLanes)===0)if(t!==null){if($a(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,a=is(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=is(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function pd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function cw(t,i,a){switch(i.tag){case 3:bt(i,i.stateNode.containerInfo),qs(i,Ct,t.memoizedState.cache),Yr();break;case 27:case 5:Qi(i);break;case 4:bt(i,i.stateNode.containerInfo);break;case 10:qs(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,zf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ks(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Hy(t,i,a):(Ks(i),t=us(t,i,a),t!==null?t.sibling:null);Ks(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||($a(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Gy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ne(Et,Et.current),l)break;return null;case 22:return i.lanes=0,Ly(t,i,a,i.pendingProps);case 24:qs(i,Ct,t.memoizedState.cache)}return us(t,i,a)}function Ky(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Dt=!0;else{if(!pd(t,a)&&(i.flags&128)===0)return Dt=!1,cw(t,i,a);Dt=(t.flags&131072)!==0}else Dt=!1,qe&&(i.flags&1048576)!==0&&Sg(i,ml,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Jr(i.elementType),i.type=t,typeof t=="function")bf(t)?(l=ta(t,l),i.tag=1,i=By(null,i,t,l,a)):(i.tag=0,i=ld(null,i,t,l,a));else{if(t!=null){var h=t.$$typeof;if(h===Te){i.tag=11,i=ky(null,i,t,l,a);break e}else if(h===I){i.tag=14,i=Vy(null,i,t,l,a);break e}}throw i=Xe(t)||t,Error(r(306,i,""))}}return i;case 0:return ld(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=ta(l,i.pendingProps),By(t,i,l,h,a);case 3:e:{if(bt(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Vf(t,i),El(i,l,null,a);var _=i.memoizedState;if(l=_.cache,qs(i,Ct,l),l!==d.cache&&Cf(i,[Ct],a,!0),Tl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=qy(t,i,l,a);break e}else if(l!==h){h=Fn(Error(r(424)),i),pl(h),i=qy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(at=Xn(t.firstChild),Xt=i,qe=!0,zs=null,Yn=!0,a=Lg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Yr(),l===h){i=us(t,i,a);break e}Jt(t,i,l,a)}i=i.child}return i;case 26:return vc(t,i),t===null?(a=iv(i.type,null,i.pendingProps,null))?i.memoizedState=a:qe||(a=i.type,t=i.pendingProps,l=Uc(he.current).createElement(a),l[xt]=i,l[Ht]=t,Zt(l,a,t),Rt(l),i.stateNode=l):i.memoizedState=iv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Qi(i),t===null&&qe&&(l=i.stateNode=ev(i.type,i.pendingProps,he.current),Xt=i,Yn=!0,h=at,tr(i.type)?(Qd=h,at=Xn(l.firstChild)):at=h),Jt(t,i,i.pendingProps.children,a),vc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&qe&&((h=l=at)&&(l=zw(l,i.type,i.pendingProps,Yn),l!==null?(i.stateNode=l,Xt=i,at=Xn(l.firstChild),Yn=!1,h=!0):h=!1),h||Bs(i)),Qi(i),h=i.type,d=i.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,Hd(h,d)?l=null:_!==null&&Hd(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=qf(t,i,tw,null,null,a),ql._currentValue=h),vc(t,i),Jt(t,i,l,a),i.child;case 6:return t===null&&qe&&((t=a=at)&&(a=Bw(a,i.pendingProps,Yn),a!==null?(i.stateNode=a,Xt=i,at=null,t=!0):t=!1),t||Bs(i)),null;case 13:return Hy(t,i,a);case 4:return bt(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Wr(i,null,l,a):Jt(t,i,l,a),i.child;case 11:return ky(t,i,i.type,i.pendingProps,a);case 7:return Jt(t,i,i.pendingProps,a),i.child;case 8:return Jt(t,i,i.pendingProps.children,a),i.child;case 12:return Jt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,qs(i,i.type,l.value),Jt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Xr(i),h=$t(h),l=l(h),i.flags|=1,Jt(t,i,l,a),i.child;case 14:return Vy(t,i,i.type,i.pendingProps,a);case 15:return Uy(t,i,i.type,i.pendingProps,a);case 19:return Gy(t,i,a);case 31:return uw(t,i,a);case 22:return Ly(t,i,a,i.pendingProps);case 24:return Xr(i),l=$t(Ct),t===null?(h=Of(),h===null&&(h=st,d=Nf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},kf(i),qs(i,Ct,h)):((t.lanes&a)!==0&&(Vf(t,i),El(i,null,null,a),Tl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),qs(i,Ct,l)):(l=d.cache,qs(i,Ct,l),l!==h.cache&&Cf(i,[Ct],a,!0))),Jt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function cs(t){t.flags|=4}function gd(t,i,a,l,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(v_())t.flags|=8192;else throw Zr=sc,Mf}else t.flags&=-16777217}function Yy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!lv(i))if(v_())t.flags|=8192;else throw Zr=sc,Mf}function Tc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Na():536870912,t.lanes|=i,lo|=i)}function Il(t,i){if(!qe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ot(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function hw(t,i,a){var l=i.pendingProps;switch(Sf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return ot(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),as(Ct),it(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xa(i)?cs(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xf())),ot(i),null;case 26:var h=i.type,d=i.memoizedState;return t===null?(cs(i),d!==null?(ot(i),Yy(i,d)):(ot(i),gd(i,h,null,l,a))):d?d!==t.memoizedState?(cs(i),ot(i),Yy(i,d)):(ot(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&cs(i),ot(i),gd(i,h,t,l,a)),null;case 27:if(Ln(i),a=he.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&cs(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return ot(i),null}t=re.current,Xa(i)?xg(i):(t=ev(h,l,a),i.stateNode=t,cs(i))}return ot(i),null;case 5:if(Ln(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&cs(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return ot(i),null}if(d=re.current,Xa(i))xg(i);else{var _=Uc(he.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}d[xt]=i,d[Ht]=l;e:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break e;for(;_.sibling===null;){if(_.return===null||_.return===i)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;e:switch(Zt(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&cs(i)}}return ot(i),gd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&cs(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=he.current,Xa(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=Xt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[xt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||H_(t.nodeValue,a)),t||Bs(i,!0)}else t=Uc(t).createTextNode(l),t[xt]=i,i.stateNode=t}return ot(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(l=Xa(i),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[xt]=i}else Yr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),t=!1}else a=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(Dn(i),i):(Dn(i),null);if((i.flags&128)!==0)throw Error(r(558))}return ot(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[xt]=i}else Yr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),h=!1}else h=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Dn(i),i):(Dn(i),null)}return Dn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),Tc(i,i.updateQueue),ot(i),null);case 4:return it(),t===null&&jd(i.stateNode.containerInfo),ot(i),null;case 10:return as(i.type),ot(i),null;case 19:if(Q(Et),l=i.memoizedState,l===null)return ot(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)Il(l,!1);else{if(vt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=lc(t),d!==null){for(i.flags|=128,Il(l,!1),t=d.updateQueue,i.updateQueue=t,Tc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Tg(a,t),a=a.sibling;return ne(Et,Et.current&1|2),qe&&ss(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Yt()>xc&&(i.flags|=128,h=!0,Il(l,!1),i.lanes=4194304)}else{if(!h)if(t=lc(d),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,Tc(i,t),Il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!qe)return ot(i),null}else 2*Yt()-l.renderingStartTime>xc&&a!==536870912&&(i.flags|=128,h=!0,Il(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Yt(),t.sibling=null,a=Et.current,ne(Et,h?a&1|2:a&1),qe&&ss(i,l.treeForkCount),t):(ot(i),null);case 22:case 23:return Dn(i),Pf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),a=i.updateQueue,a!==null&&Tc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&Q($r),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),as(Ct),ot(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function fw(t,i){switch(Sf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return as(Ct),it(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ln(i),null;case 31:if(i.memoizedState!==null){if(Dn(i),i.alternate===null)throw Error(r(340));Yr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Dn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Yr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(Et),null;case 4:return it(),null;case 10:return as(i.type),null;case 22:case 23:return Dn(i),Pf(),t!==null&&Q($r),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return as(Ct),null;case 25:return null;default:return null}}function Qy(t,i){switch(Sf(i),i.tag){case 3:as(Ct),it();break;case 26:case 27:case 5:Ln(i);break;case 4:it();break;case 31:i.memoizedState!==null&&Dn(i);break;case 13:Dn(i);break;case 19:Q(Et);break;case 10:as(i.type);break;case 22:case 23:Dn(i),Pf(),t!==null&&Q($r);break;case 24:as(Ct)}}function Cl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(T){Ze(i,i.return,T)}}function Qs(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,h=i;var C=a,z=T;try{z()}catch(K){Ze(h,C,K)}}}l=l.next}while(l!==d)}}catch(K){Ze(i,i.return,K)}}function Xy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Pg(i,a)}catch(l){Ze(t,t.return,l)}}}function $y(t,i,a){a.props=ta(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ze(t,i,l)}}function Nl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ze(t,i,h)}}function Ui(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ze(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ze(t,i,h)}else a.current=null}function Jy(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ze(t,t.return,h)}}function yd(t,i,a){try{var l=t.stateNode;kw(l,t.type,a,i),l[Ht]=i}catch(h){Ze(t,t.return,h)}}function Zy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tr(t.type)||t.tag===4}function _d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ri));else if(l!==4&&(l===27&&tr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(vd(t,i,a),t=t.sibling;t!==null;)vd(t,i,a),t=t.sibling}function Ec(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&tr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ec(t,i,a),t=t.sibling;t!==null;)Ec(t,i,a),t=t.sibling}function Wy(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Zt(i,l,a),i[xt]=t,i[Ht]=a}catch(d){Ze(t,t.return,d)}}var hs=!1,Ot=!1,bd=!1,e_=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function dw(t,i){if(t=t.containerInfo,Bd=Hc,t=fg(t),df(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,T=-1,C=-1,z=0,K=0,$=t,B=null;t:for(;;){for(var H;$!==a||h!==0&&$.nodeType!==3||(T=_+h),$!==d||l!==0&&$.nodeType!==3||(C=_+l),$.nodeType===3&&(_+=$.nodeValue.length),(H=$.firstChild)!==null;)B=$,$=H;for(;;){if($===t)break t;if(B===a&&++z===h&&(T=_),B===d&&++K===l&&(C=_),(H=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=H}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(qd={focusedElem:t,selectionRange:a},Hc=!1,Gt=i;Gt!==null;)if(i=Gt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Gt=t;else for(;Gt!==null;){switch(i=Gt,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)h=t[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ue=ta(a.type,h);t=l.getSnapshotBeforeUpdate(ue,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(be){Ze(a,a.return,be)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Gd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Gt=t;break}Gt=i.return}}function t_(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ds(t,a),l&4&&Cl(5,a);break;case 1:if(ds(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(_){Ze(a,a.return,_)}else{var h=ta(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ze(a,a.return,_)}}l&64&&Xy(a),l&512&&Nl(a,a.return);break;case 3:if(ds(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Pg(t,i)}catch(_){Ze(a,a.return,_)}}break;case 27:i===null&&l&4&&Wy(a);case 26:case 5:ds(t,a),i===null&&l&4&&Jy(a),l&512&&Nl(a,a.return);break;case 12:ds(t,a);break;case 31:ds(t,a),l&4&&s_(t,a);break;case 13:ds(t,a),l&4&&r_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ew.bind(null,a),qw(t,a))));break;case 22:if(l=a.memoizedState!==null||hs,!l){i=i!==null&&i.memoizedState!==null||Ot,h=hs;var d=Ot;hs=l,(Ot=i)&&!d?ms(t,a,(a.subtreeFlags&8772)!==0):ds(t,a),hs=h,Ot=d}break;case 30:break;default:ds(t,a)}}function n_(t){var i=t.alternate;i!==null&&(t.alternate=null,n_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Oa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,pn=!1;function fs(t,i,a){for(a=a.child;a!==null;)i_(t,i,a),a=a.sibling}function i_(t,i,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Sn,a)}catch{}switch(a.tag){case 26:Ot||Ui(a,i),fs(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||Ui(a,i);var l=dt,h=pn;tr(a.type)&&(dt=a.stateNode,pn=!1),fs(t,i,a),Pl(a.stateNode),dt=l,pn=h;break;case 5:Ot||Ui(a,i);case 6:if(l=dt,h=pn,dt=null,fs(t,i,a),dt=l,pn=h,dt!==null)if(pn)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(a.stateNode)}catch(d){Ze(a,i,d)}else try{dt.removeChild(a.stateNode)}catch(d){Ze(a,i,d)}break;case 18:dt!==null&&(pn?(t=dt,X_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),yo(t)):X_(dt,a.stateNode));break;case 4:l=dt,h=pn,dt=a.stateNode.containerInfo,pn=!0,fs(t,i,a),dt=l,pn=h;break;case 0:case 11:case 14:case 15:Qs(2,a,i),Ot||Qs(4,a,i),fs(t,i,a);break;case 1:Ot||(Ui(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&$y(a,i,l)),fs(t,i,a);break;case 21:fs(t,i,a);break;case 22:Ot=(l=Ot)||a.memoizedState!==null,fs(t,i,a),Ot=l;break;default:fs(t,i,a)}}function s_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{yo(t)}catch(a){Ze(i,i.return,a)}}}function r_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yo(t)}catch(a){Ze(i,i.return,a)}}function mw(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new e_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new e_),i;default:throw Error(r(435,t.tag))}}function wc(t,i){var a=mw(t);i.forEach(function(l){if(!a.has(l)){a.add(l);var h=ww.bind(null,t,l);l.then(h,h)}})}function gn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(tr(T.type)){dt=T.stateNode,pn=!1;break e}break;case 5:dt=T.stateNode,pn=!1;break e;case 3:case 4:dt=T.stateNode.containerInfo,pn=!0;break e}T=T.return}if(dt===null)throw Error(r(160));i_(d,_,h),dt=null,pn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)a_(i,t),i=i.sibling}var hi=null;function a_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:gn(i,t),yn(t),l&4&&(Qs(3,t,t.return),Cl(3,t),Qs(5,t,t.return));break;case 1:gn(i,t),yn(t),l&512&&(Ot||a===null||Ui(a,a.return)),l&64&&hs&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=hi;if(gn(i,t),yn(t),l&512&&(Ot||a===null||Ui(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Ei]||d[xt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Zt(d,l,a),d[xt]=t,Rt(d),l=d;break e;case"link":var _=av("link","href",h).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}d=h.createElement(l),Zt(d,l,a),h.head.appendChild(d);break;case"meta":if(_=av("meta","content",h).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}d=h.createElement(l),Zt(d,l,a),h.head.appendChild(d);break;default:throw Error(r(468,l))}d[xt]=t,Rt(d),l=d}t.stateNode=l}else ov(h,t.type,t.stateNode);else t.stateNode=rv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?ov(h,t.type,t.stateNode):rv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&yd(t,t.memoizedProps,a.memoizedProps)}break;case 27:gn(i,t),yn(t),l&512&&(Ot||a===null||Ui(a,a.return)),a!==null&&l&4&&yd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(gn(i,t),yn(t),l&512&&(Ot||a===null||Ui(a,a.return)),t.flags&32){h=t.stateNode;try{mn(h,"")}catch(ue){Ze(t,t.return,ue)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,yd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(bd=!0);break;case 6:if(gn(i,t),yn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ue){Ze(t,t.return,ue)}}break;case 3:if(Pc=null,h=hi,hi=Lc(i.containerInfo),gn(i,t),hi=h,yn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(i.containerInfo)}catch(ue){Ze(t,t.return,ue)}bd&&(bd=!1,o_(t));break;case 4:l=hi,hi=Lc(t.stateNode.containerInfo),gn(i,t),yn(t),hi=l;break;case 12:gn(i,t),yn(t);break;case 31:gn(i,t),yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,wc(t,l)));break;case 13:gn(i,t),yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ac=Yt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,wc(t,l)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,z=hs,K=Ot;if(hs=z||h,Ot=K||C,gn(i,t),Ot=K,hs=z,yn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||C||hs||Ot||na(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=C.stateNode;var $=C.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ue){Ze(C,C.return,ue)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(ue){Ze(C,C.return,ue)}}}else if(i.tag===18){if(a===null){C=i;try{var H=C.stateNode;h?$_(H,!0):$_(C.stateNode,!1)}catch(ue){Ze(C,C.return,ue)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,wc(t,a))));break;case 19:gn(i,t),yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,wc(t,l)));break;case 30:break;case 21:break;default:gn(i,t),yn(t)}}function yn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(Zy(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var h=a.stateNode,d=_d(t);Ec(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(mn(_,""),a.flags&=-33);var T=_d(t);Ec(t,T,_);break;case 3:case 4:var C=a.stateNode.containerInfo,z=_d(t);vd(t,z,C);break;default:throw Error(r(161))}}catch(K){Ze(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function o_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;o_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ds(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)t_(t,i.alternate,i),i=i.sibling}function na(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Qs(4,i,i.return),na(i);break;case 1:Ui(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&$y(i,i.return,a),na(i);break;case 27:Pl(i.stateNode);case 26:case 5:Ui(i,i.return),na(i);break;case 22:i.memoizedState===null&&na(i);break;case 30:na(i);break;default:na(i)}t=t.sibling}}function ms(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:ms(h,d,a),Cl(4,d);break;case 1:if(ms(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Ze(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)jg(C[h],T)}catch(z){Ze(l,l.return,z)}}a&&_&64&&Xy(d),Nl(d,d.return);break;case 27:Wy(d);case 26:case 5:ms(h,d,a),a&&l===null&&_&4&&Jy(d),Nl(d,d.return);break;case 12:ms(h,d,a);break;case 31:ms(h,d,a),a&&_&4&&s_(h,d);break;case 13:ms(h,d,a),a&&_&4&&r_(h,d);break;case 22:d.memoizedState===null&&ms(h,d,a),Nl(d,d.return);break;case 30:break;default:ms(h,d,a)}i=i.sibling}}function Td(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&gl(a))}function Ed(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&gl(t))}function fi(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)l_(t,i,a,l),i=i.sibling}function l_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:fi(t,i,a,l),h&2048&&Cl(9,i);break;case 1:fi(t,i,a,l);break;case 3:fi(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&gl(t)));break;case 12:if(h&2048){fi(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){Ze(i,i.return,C)}}else fi(t,i,a,l);break;case 31:fi(t,i,a,l);break;case 13:fi(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?fi(t,i,a,l):Dl(t,i):d._visibility&2?fi(t,i,a,l):(d._visibility|=2,ro(t,i,a,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Td(_,i);break;case 24:fi(t,i,a,l),h&2048&&Ed(i.alternate,i);break;default:fi(t,i,a,l)}}function ro(t,i,a,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,_=i,T=a,C=l,z=_.flags;switch(_.tag){case 0:case 11:case 15:ro(d,_,T,C,h),Cl(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?ro(d,_,T,C,h):Dl(d,_):(K._visibility|=2,ro(d,_,T,C,h)),h&&z&2048&&Td(_.alternate,_);break;case 24:ro(d,_,T,C,h),h&&z&2048&&Ed(_.alternate,_);break;default:ro(d,_,T,C,h)}i=i.sibling}}function Dl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:Dl(a,l),h&2048&&Td(l.alternate,l);break;case 24:Dl(a,l),h&2048&&Ed(l.alternate,l);break;default:Dl(a,l)}i=i.sibling}}var Ol=8192;function ao(t,i,a){if(t.subtreeFlags&Ol)for(t=t.child;t!==null;)u_(t,i,a),t=t.sibling}function u_(t,i,a){switch(t.tag){case 26:ao(t,i,a),t.flags&Ol&&t.memoizedState!==null&&eS(a,hi,t.memoizedState,t.memoizedProps);break;case 5:ao(t,i,a);break;case 3:case 4:var l=hi;hi=Lc(t.stateNode.containerInfo),ao(t,i,a),hi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ol,Ol=16777216,ao(t,i,a),Ol=l):ao(t,i,a));break;default:ao(t,i,a)}}function c_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ml(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Gt=l,f_(l,t)}c_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)h_(t),t=t.sibling}function h_(t){switch(t.tag){case 0:case 11:case 15:Ml(t),t.flags&2048&&Qs(9,t,t.return);break;case 3:Ml(t);break;case 12:Ml(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Sc(t)):Ml(t);break;default:Ml(t)}}function Sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Gt=l,f_(l,t)}c_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Qs(8,i,i.return),Sc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Sc(i));break;default:Sc(i)}t=t.sibling}}function f_(t,i){for(;Gt!==null;){var a=Gt;switch(a.tag){case 0:case 11:case 15:Qs(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Gt=l;else e:for(a=t;Gt!==null;){l=Gt;var h=l.sibling,d=l.return;if(n_(l),l===a){Gt=null;break e}if(h!==null){h.return=d,Gt=h;break e}Gt=d}}}var pw={getCacheForType:function(t){var i=$t(Ct),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return $t(Ct).controller.signal}},gw=typeof WeakMap=="function"?WeakMap:Map,Ye=0,st=null,Ve=null,Le=0,Je=0,On=null,Xs=!1,oo=!1,wd=!1,ps=0,vt=0,$s=0,ia=0,Sd=0,Mn=0,lo=0,kl=null,_n=null,Ad=!1,Ac=0,d_=0,xc=1/0,Rc=null,Js=null,Lt=0,Zs=null,uo=null,gs=0,xd=0,Rd=null,m_=null,Vl=0,Id=null;function kn(){return(Ye&2)!==0&&Le!==0?Le&-Le:G.T!==null?kd():Iu()}function p_(){if(Mn===0)if((Le&536870912)===0||qe){var t=oe;oe<<=1,(oe&3932160)===0&&(oe=262144),Mn=t}else Mn=536870912;return t=Nn.current,t!==null&&(t.flags|=32),Mn}function vn(t,i,a){(t===st&&(Je===2||Je===9)||t.cancelPendingCommit!==null)&&(co(t,0),Ws(t,Le,Mn,!1)),Dr(t,a),((Ye&2)===0||t!==st)&&(t===st&&((Ye&2)===0&&(ia|=a),vt===4&&Ws(t,Le,Mn,!1)),Li(t))}function g_(t,i,a){if((Ye&6)!==0)throw Error(r(327));var l=!a&&(i&127)===0&&(i&t.expiredLanes)===0||fn(t,i),h=l?vw(t,i):Nd(t,i,!0),d=l;do{if(h===0){oo&&!l&&Ws(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!yw(a)){h=Nd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var T=t;h=kl;var C=T.current.memoizedState.isDehydrated;if(C&&(co(T,_).flags|=256),_=Nd(T,_,!1),_!==2){if(wd&&!C){T.errorRecoveryDisabledLanes|=d,ia|=d,h=4;break e}d=_n,_n=h,d!==null&&(_n===null?_n=d:_n.push.apply(_n,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){co(t,0),Ws(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ws(l,i,Mn,!Xs);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=Ac+300-Yt(),10<h)){if(Ws(l,i,Mn,!Xs),An(l,0,!0)!==0)break e;gs=i,l.timeoutHandle=Y_(y_.bind(null,l,a,_n,Rc,Ad,i,Mn,ia,lo,Xs,d,"Throttled",-0,0),h);break e}y_(l,a,_n,Rc,Ad,i,Mn,ia,lo,Xs,d,null,-0,0)}}break}while(!0);Li(t)}function y_(t,i,a,l,h,d,_,T,C,z,K,$,B,H){if(t.timeoutHandle=-1,$=i.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ri},u_(i,d,$);var ue=(d&62914560)===d?Ac-Yt():(d&4194048)===d?d_-Yt():0;if(ue=tS($,ue),ue!==null){gs=d,t.cancelPendingCommit=ue(A_.bind(null,t,i,d,a,l,h,_,T,C,K,$,null,B,H)),Ws(t,d,_,!z);return}}A_(t,i,d,a,l,h,_,T,C)}function yw(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!In(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ws(t,i,a,l){i&=~Sd,i&=~ia,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-pt(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&Or(t,a,i)}function Ic(){return(Ye&6)===0?(Ul(0),!1):!0}function Cd(){if(Ve!==null){if(Je===0)var t=Ve.return;else t=Ve,rs=Qr=null,Gf(t),eo=null,_l=0,t=Ve;for(;t!==null;)Qy(t.alternate,t),t=t.return;Ve=null}}function co(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Lw(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),gs=0,Cd(),st=t,Ve=a=is(t.current,null),Le=i,Je=0,On=null,Xs=!1,oo=fn(t,i),wd=!1,lo=Mn=Sd=ia=$s=vt=0,_n=kl=null,Ad=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-pt(l),d=1<<h;i|=t[h],l&=~d}return ps=i,Xu(),a}function __(t,i){De=null,G.H=xl,i===Wa||i===ic?(i=kg(),Je=3):i===Mf?(i=kg(),Je=4):Je=i===od?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,On=i,Ve===null&&(vt=1,yc(t,Fn(i,t.current)))}function v_(){var t=Nn.current;return t===null?!0:(Le&4194048)===Le?Qn===null:(Le&62914560)===Le||(Le&536870912)!==0?t===Qn:!1}function b_(){var t=G.H;return G.H=xl,t===null?xl:t}function T_(){var t=G.A;return G.A=pw,t}function Cc(){vt=4,Xs||(Le&4194048)!==Le&&Nn.current!==null||(oo=!0),($s&134217727)===0&&(ia&134217727)===0||st===null||Ws(st,Le,Mn,!1)}function Nd(t,i,a){var l=Ye;Ye|=2;var h=b_(),d=T_();(st!==t||Le!==i)&&(Rc=null,co(t,i)),i=!1;var _=vt;e:do try{if(Je!==0&&Ve!==null){var T=Ve,C=On;switch(Je){case 8:Cd(),_=6;break e;case 3:case 2:case 9:case 6:Nn.current===null&&(i=!0);var z=Je;if(Je=0,On=null,ho(t,T,C,z),a&&oo){_=0;break e}break;default:z=Je,Je=0,On=null,ho(t,T,C,z)}}_w(),_=vt;break}catch(K){__(t,K)}while(!0);return i&&t.shellSuspendCounter++,rs=Qr=null,Ye=l,G.H=h,G.A=d,Ve===null&&(st=null,Le=0,Xu()),_}function _w(){for(;Ve!==null;)E_(Ve)}function vw(t,i){var a=Ye;Ye|=2;var l=b_(),h=T_();st!==t||Le!==i?(Rc=null,xc=Yt()+500,co(t,i)):oo=fn(t,i);e:do try{if(Je!==0&&Ve!==null){i=Ve;var d=On;t:switch(Je){case 1:Je=0,On=null,ho(t,i,d,1);break;case 2:case 9:if(Og(d)){Je=0,On=null,w_(i);break}i=function(){Je!==2&&Je!==9||st!==t||(Je=7),Li(t)},d.then(i,i);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:Og(d)?(Je=0,On=null,w_(i)):(Je=0,On=null,ho(t,i,d,7));break;case 5:var _=null;switch(Ve.tag){case 26:_=Ve.memoizedState;case 5:case 27:var T=Ve;if(_?lv(_):T.stateNode.complete){Je=0,On=null;var C=T.sibling;if(C!==null)Ve=C;else{var z=T.return;z!==null?(Ve=z,Nc(z)):Ve=null}break t}}Je=0,On=null,ho(t,i,d,5);break;case 6:Je=0,On=null,ho(t,i,d,6);break;case 8:Cd(),vt=6;break e;default:throw Error(r(462))}}bw();break}catch(K){__(t,K)}while(!0);return rs=Qr=null,G.H=l,G.A=h,Ye=a,Ve!==null?0:(st=null,Le=0,Xu(),vt)}function bw(){for(;Ve!==null&&!Go();)E_(Ve)}function E_(t){var i=Ky(t.alternate,t,ps);t.memoizedProps=t.pendingProps,i===null?Nc(t):Ve=i}function w_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=zy(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=zy(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:Gf(i);default:Qy(a,i),i=Ve=Tg(i,ps),i=Ky(a,i,ps)}t.memoizedProps=t.pendingProps,i===null?Nc(t):Ve=i}function ho(t,i,a,l){rs=Qr=null,Gf(i),eo=null,_l=0;var h=i.return;try{if(lw(t,h,i,a,Le)){vt=1,yc(t,Fn(a,t.current)),Ve=null;return}}catch(d){if(h!==null)throw Ve=h,d;vt=1,yc(t,Fn(a,t.current)),Ve=null;return}i.flags&32768?(qe||l===1?t=!0:oo||(Le&536870912)!==0?t=!1:(Xs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Nn.current,l!==null&&l.tag===13&&(l.flags|=16384))),S_(i,t)):Nc(i)}function Nc(t){var i=t;do{if((i.flags&32768)!==0){S_(i,Xs);return}t=i.return;var a=hw(i.alternate,i,ps);if(a!==null){Ve=a;return}if(i=i.sibling,i!==null){Ve=i;return}Ve=i=t}while(i!==null);vt===0&&(vt=5)}function S_(t,i){do{var a=fw(t.alternate,t);if(a!==null){a.flags&=32767,Ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ve=t;return}Ve=t=a}while(t!==null);vt=6,Ve=null}function A_(t,i,a,l,h,d,_,T,C){t.cancelPendingCommit=null;do Dc();while(Lt!==0);if((Ye&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=_f,uf(t,a,d,_,T,C),t===st&&(Ve=st=null,Le=0),uo=i,Zs=t,gs=a,xd=d,Rd=h,m_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sw(_i,function(){return N_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,h=te.p,te.p=2,_=Ye,Ye|=4;try{dw(t,i,a)}finally{Ye=_,te.p=h,G.T=l}}Lt=1,x_(),R_(),I_()}}function x_(){if(Lt===1){Lt=0;var t=Zs,i=uo,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=te.p;te.p=2;var h=Ye;Ye|=4;try{a_(i,t);var d=qd,_=fg(t.containerInfo),T=d.focusedElem,C=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&hg(T.ownerDocument.documentElement,T)){if(C!==null&&df(T)){var z=C.start,K=C.end;if(K===void 0&&(K=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(K,T.value.length);else{var $=T.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var H=B.getSelection(),ue=T.textContent.length,be=Math.min(C.start,ue),nt=C.end===void 0?be:Math.min(C.end,ue);!H.extend&&be>nt&&(_=nt,nt=be,be=_);var L=cg(T,be),O=cg(T,nt);if(L&&O&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var P=$.createRange();P.setStart(L.node,L.offset),H.removeAllRanges(),be>nt?(H.addRange(P),H.extend(O.node,O.offset)):(P.setEnd(O.node,O.offset),H.addRange(P))}}}}for($=[],H=T;H=H.parentNode;)H.nodeType===1&&$.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<$.length;T++){var Y=$[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Hc=!!Bd,qd=Bd=null}finally{Ye=h,te.p=l,G.T=a}}t.current=i,Lt=2}}function R_(){if(Lt===2){Lt=0;var t=Zs,i=uo,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=te.p;te.p=2;var h=Ye;Ye|=4;try{t_(t,i.alternate,i)}finally{Ye=h,te.p=l,G.T=a}}Lt=3}}function I_(){if(Lt===4||Lt===3){Lt=0,Rs();var t=Zs,i=uo,a=gs,l=m_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Lt=5:(Lt=0,uo=Zs=null,C_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Js=null),Wi(a),i=i.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Sn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=G.T,h=te.p,te.p=2,G.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{G.T=i,te.p=h}}(gs&3)!==0&&Dc(),Li(t),h=t.pendingLanes,(a&261930)!==0&&(h&42)!==0?t===Id?Vl++:(Vl=0,Id=t):Vl=0,Ul(0)}}function C_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,gl(i)))}function Dc(){return x_(),R_(),I_(),N_()}function N_(){if(Lt!==5)return!1;var t=Zs,i=xd;xd=0;var a=Wi(gs),l=G.T,h=te.p;try{te.p=32>a?32:a,G.T=null,a=Rd,Rd=null;var d=Zs,_=gs;if(Lt=0,uo=Zs=null,gs=0,(Ye&6)!==0)throw Error(r(331));var T=Ye;if(Ye|=4,h_(d.current),l_(d,d.current,_,a),Ye=T,Ul(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Sn,d)}catch{}return!0}finally{te.p=h,G.T=l,C_(t,i)}}function D_(t,i,a){i=Fn(a,i),i=ad(t.stateNode,i,2),t=Gs(t,i,2),t!==null&&(Dr(t,2),Li(t))}function Ze(t,i,a){if(t.tag===3)D_(t,t,a);else for(;i!==null;){if(i.tag===3){D_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Js===null||!Js.has(l))){t=Fn(a,t),a=Oy(2),l=Gs(i,a,2),l!==null&&(My(a,l,i,t),Dr(l,2),Li(l));break}}i=i.return}}function Dd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new gw;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(wd=!0,h.add(a),t=Tw.bind(null,t,i,a),i.then(t,t))}function Tw(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,st===t&&(Le&a)===a&&(vt===4||vt===3&&(Le&62914560)===Le&&300>Yt()-Ac?(Ye&2)===0&&co(t,0):Sd|=a,lo===Le&&(lo=0)),Li(t)}function O_(t,i){i===0&&(i=Na()),t=Gr(t,i),t!==null&&(Dr(t,i),Li(t))}function Ew(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),O_(t,a)}function ww(t,i){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),O_(t,a)}function Sw(t,i){return rt(t,i)}var Oc=null,fo=null,Od=!1,Mc=!1,Md=!1,er=0;function Li(t){t!==fo&&t.next===null&&(fo===null?Oc=fo=t:fo=fo.next=t),Mc=!0,Od||(Od=!0,xw())}function Ul(t,i){if(!Md&&Mc){Md=!0;do for(var a=!1,l=Oc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-pt(42|t)+1)-1,d&=h&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,U_(l,d))}else d=Le,d=An(l,l===st?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||fn(l,d)||(a=!0,U_(l,d));l=l.next}while(a);Md=!1}}function Aw(){M_()}function M_(){Mc=Od=!1;var t=0;er!==0&&Uw()&&(t=er);for(var i=Yt(),a=null,l=Oc;l!==null;){var h=l.next,d=k_(l,i);d===0?(l.next=null,a===null?Oc=h:a.next=h,h===null&&(fo=a)):(a=l,(t!==0||(d&3)!==0)&&(Mc=!0)),l=h}Lt!==0&&Lt!==5||Ul(t),er!==0&&(er=0)}function k_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-pt(d),T=1<<_,C=h[_];C===-1?((T&a)===0||(T&l)!==0)&&(h[_]=vi(T,i)):C<=i&&(t.expiredLanes|=T),d&=~T}if(i=st,a=Le,a=An(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Je===2||Je===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&jn(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||fn(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&jn(l),Wi(a)){case 2:case 8:a=Cr;break;case 32:a=_i;break;case 268435456:a=Ra;break;default:a=_i}return l=V_.bind(null,t),a=rt(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&jn(l),t.callbackPriority=2,t.callbackNode=null,2}function V_(t,i){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dc()&&t.callbackNode!==a)return null;var l=Le;return l=An(t,t===st?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(g_(t,l,i),k_(t,Yt()),t.callbackNode!=null&&t.callbackNode===a?V_.bind(null,t):null)}function U_(t,i){if(Dc())return null;g_(t,i,!0)}function xw(){jw(function(){(Ye&6)!==0?rt(Ir,Aw):M_()})}function kd(){if(er===0){var t=Ja;t===0&&(t=D,D<<=1,(D&261888)===0&&(D=256)),er=t}return er}function L_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ua(""+t)}function j_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Rw(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=L_((h[Ht]||null).action),_=l.submitter;_&&(i=(i=_[Ht]||null)?L_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var T=new Ni("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(er!==0){var C=_?j_(h,_):new FormData(h);ed(a,{pending:!0,data:C,method:h.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=_?j_(h,_):new FormData(h),ed(a,{pending:!0,data:C,method:h.method,action:d},d,C))},currentTarget:h}]})}}for(var Vd=0;Vd<yf.length;Vd++){var Ud=yf[Vd],Iw=Ud.toLowerCase(),Cw=Ud[0].toUpperCase()+Ud.slice(1);ci(Iw,"on"+Cw)}ci(pg,"onAnimationEnd"),ci(gg,"onAnimationIteration"),ci(yg,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(G1,"onTransitionRun"),ci(K1,"onTransitionStart"),ci(Y1,"onTransitionCancel"),ci(_g,"onTransitionEnd"),xi("onMouseEnter",["mouseout","mouseover"]),xi("onMouseLeave",["mouseout","mouseover"]),xi("onPointerEnter",["pointerout","pointerover"]),xi("onPointerLeave",["pointerout","pointerover"]),Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ll));function P_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],C=T.instance,z=T.currentTarget;if(T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=z;try{d(h)}catch(K){Qu(K)}h.currentTarget=null,d=C}else for(_=0;_<l.length;_++){if(T=l[_],C=T.instance,z=T.currentTarget,T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=z;try{d(h)}catch(K){Qu(K)}h.currentTarget=null,d=C}}}}function Ue(t,i){var a=i[Da];a===void 0&&(a=i[Da]=new Set);var l=t+"__bubble";a.has(l)||(z_(i,t,2,!1),a.add(l))}function Ld(t,i,a){var l=0;i&&(l|=4),z_(a,t,l,i)}var kc="_reactListening"+Math.random().toString(36).slice(2);function jd(t){if(!t[kc]){t[kc]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(Nw.has(a)||Ld(a,!1,t),Ld(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[kc]||(i[kc]=!0,Ld("selectionchange",!1,i))}}function z_(t,i,a,l){switch(pv(i)){case 2:var h=sS;break;case 8:h=rS;break;default:h=Wd}a=h.bind(null,i,a,t),h=void 0,!Lr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Pd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===h)break;if(_===4)for(_=l.return;_!==null;){var C=_.tag;if((C===3||C===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;T!==null;){if(_=wi(T),_===null)return;if(C=_.tag,C===5||C===6||C===26||C===27){l=d=_;continue e}T=T.parentNode}}l=l.return}Vs(function(){var z=d,K=zn(a),$=[];e:{var B=vg.get(t);if(B!==void 0){var H=Ni,ue=t;switch(t){case"keypress":if(Pr(a)===0)break e;case"keydown":case"keyup":H=Gu;break;case"focusin":ue="focus",H=Br;break;case"focusout":ue="blur",H=Br;break;case"beforeblur":case"afterblur":H=Br;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Uu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=m;break;case pg:case gg:case yg:H=ju;break;case _g:H=w;break;case"scroll":case"scrollend":H=ol;break;case"wheel":H=q;break;case"copy":case"cut":case"paste":H=Pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=ns;break;case"toggle":case"beforetoggle":H=Ne}var be=(i&4)!==0,nt=!be&&(t==="scroll"||t==="scrollend"),L=be?B!==null?B+"Capture":null:B;be=[];for(var O=z,P;O!==null;){var Y=O;if(P=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||P===null||L===null||(Y=ai(O,L),Y!=null&&be.push(jl(O,Y,P))),nt)break;O=O.return}0<be.length&&(B=new H(B,ue,null,a,K),$.push({event:B,listeners:be}))}}if((i&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",B&&a!==sl&&(ue=a.relatedTarget||a.fromElement)&&(wi(ue)||ue[Ti]))break e;if((H||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,H?(ue=a.relatedTarget||a.toElement,H=z,ue=ue?wi(ue):null,ue!==null&&(nt=u(ue),be=ue.tag,ue!==nt||be!==5&&be!==27&&be!==6)&&(ue=null)):(H=null,ue=z),H!==ue)){if(be=ll,Y="onMouseLeave",L="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(be=ns,Y="onPointerLeave",L="onPointerEnter",O="pointer"),nt=H==null?B:xn(H),P=ue==null?B:xn(ue),B=new be(Y,O+"leave",H,a,K),B.target=nt,B.relatedTarget=P,Y=null,wi(K)===z&&(be=new be(L,O+"enter",ue,a,K),be.target=P,be.relatedTarget=nt,Y=be),nt=Y,H&&ue)t:{for(be=Dw,L=H,O=ue,P=0,Y=L;Y;Y=be(Y))P++;Y=0;for(var ye=O;ye;ye=be(ye))Y++;for(;0<P-Y;)L=be(L),P--;for(;0<Y-P;)O=be(O),Y--;for(;P--;){if(L===O||O!==null&&L===O.alternate){be=L;break t}L=be(L),O=be(O)}be=null}else be=null;H!==null&&B_($,B,H,be,!1),ue!==null&&nt!==null&&B_($,nt,ue,be,!0)}}e:{if(B=z?xn(z):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var Fe=sg;else if(ng(B))if(rg)Fe=q1;else{Fe=z1;var fe=P1}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&Va(z.elementType)&&(Fe=sg):Fe=B1;if(Fe&&(Fe=Fe(t,z))){ig($,Fe,a,K);break e}fe&&fe(t,B,z),t==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&tl(B,"number",B.value)}switch(fe=z?xn(z):window,t){case"focusin":(ng(fe)||fe.contentEditable==="true")&&(Ha=fe,mf=z,dl=null);break;case"focusout":dl=mf=Ha=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,dg($,a,K);break;case"selectionchange":if(F1)break;case"keydown":case"keyup":dg($,a,K)}var Oe;if(Ke)e:{switch(t){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else qa?qr(t,a)&&(je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(je="onCompositionStart");je&&(Mi&&a.locale!=="ko"&&(qa||je!=="onCompositionStart"?je==="onCompositionEnd"&&qa&&(Oe=al()):(Ci=K,rl="value"in Ci?Ci.value:Ci.textContent,qa=!0)),fe=Vc(z,je),0<fe.length&&(je=new Oi(je,t,null,a,K),$.push({event:je,listeners:fe}),Oe?je.data=Oe:(Oe=Ba(a),Oe!==null&&(je.data=Oe)))),(Oe=qn?V1(t,a):U1(t,a))&&(je=Vc(z,"onBeforeInput"),0<je.length&&(fe=new Oi("onBeforeInput","beforeinput",null,a,K),$.push({event:fe,listeners:je}),fe.data=Oe)),Rw($,t,z,a,K)}P_($,i)})}function jl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Vc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ai(t,a),h!=null&&l.unshift(jl(t,h,d)),h=ai(t,i),h!=null&&l.push(jl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Dw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B_(t,i,a,l,h){for(var d=i._reactName,_=[];a!==null&&a!==l;){var T=a,C=T.alternate,z=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||z===null||(C=z,h?(z=ai(a,d),z!=null&&_.unshift(jl(a,z,C))):h||(z=ai(a,d),z!=null&&_.push(jl(a,z,C)))),a=a.return}_.length!==0&&t.push({event:i,listeners:_})}var Ow=/\r\n?/g,Mw=/\u0000|\uFFFD/g;function q_(t){return(typeof t=="string"?t:""+t).replace(Ow,`
`).replace(Mw,"")}function H_(t,i){return i=q_(i),q_(t)===i}function tt(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||mn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&mn(t,""+l);break;case"className":Rn(t,"class",l);break;case"tabIndex":Rn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(t,a,l);break;case"style":il(t,l,d);break;case"data":if(i!=="object"){Rn(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ua(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&tt(t,i,"name",h.name,h,null),tt(t,i,"formEncType",h.formEncType,h,null),tt(t,i,"formMethod",h.formMethod,h,null),tt(t,i,"formTarget",h.formTarget,h,null)):(tt(t,i,"encType",h.encType,h,null),tt(t,i,"method",h.method,h,null),tt(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ua(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ri);break;case"onScroll":l!=null&&Ue("scroll",t);break;case"onScrollEnd":l!=null&&Ue("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ua(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ue("beforetoggle",t),Ue("toggle",t),Ma(t,"popover",l);break;case"xlinkActuate":It(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":It(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":It(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":It(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":It(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":It(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":It(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":It(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":It(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ma(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vu.get(a)||a,Ma(t,a,l))}}function zd(t,i,a,l,h,d){switch(a){case"style":il(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?mn(t,l):(typeof l=="number"||typeof l=="bigint")&&mn(t,""+l);break;case"onScroll":l!=null&&Ue("scroll",t);break;case"onScrollEnd":l!=null&&Ue("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ri);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$o.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Ht]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ma(t,a,l)}}}function Zt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",t),Ue("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:tt(t,i,d,_,a,null)}}h&&tt(t,i,"srcSet",a.srcSet,a,null),l&&tt(t,i,"src",a.src,a,null);return;case"input":Ue("invalid",t);var T=d=_=h=null,C=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":_=K;break;case"checked":C=K;break;case"defaultChecked":z=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,i));break;default:tt(t,i,l,K,a,null)}}Ou(t,d,T,C,z,_,h,!1);return;case"select":Ue("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:tt(t,i,h,T,a,null)}i=d,a=_,t.multiple=!!l,i!=null?Ds(t,!!l,i,!1):a!=null&&Ds(t,!!l,a,!0);return;case"textarea":Ue("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:tt(t,i,_,T,a,null)}Os(t,l,h,d);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tt(t,i,C,l,a,null)}return;case"dialog":Ue("beforetoggle",t),Ue("toggle",t),Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":Ue("load",t);break;case"video":case"audio":for(l=0;l<Ll.length;l++)Ue(Ll[l],t);break;case"image":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"embed":case"source":case"link":Ue("error",t),Ue("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:tt(t,i,z,l,a,null)}return;default:if(Va(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&zd(t,i,K,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&tt(t,i,T,l,a,null))}function kw(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,T=null,C=null,z=null,K=null;for(H in a){var $=a[H];if(a.hasOwnProperty(H)&&$!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":C=$;default:l.hasOwnProperty(H)||tt(t,i,H,null,l,$)}}for(var B in l){var H=l[B];if($=a[B],l.hasOwnProperty(B)&&(H!=null||$!=null))switch(B){case"type":d=H;break;case"name":h=H;break;case"checked":z=H;break;case"defaultChecked":K=H;break;case"value":_=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,i));break;default:H!==$&&tt(t,i,B,H,l,$)}}ka(t,_,T,C,z,K,d,h);return;case"select":H=_=T=B=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":H=C;default:l.hasOwnProperty(d)||tt(t,i,d,null,l,C)}for(h in l)if(d=l[h],C=a[h],l.hasOwnProperty(h)&&(d!=null||C!=null))switch(h){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==C&&tt(t,i,h,d,l,C)}i=T,a=_,l=H,B!=null?Ds(t,!!a,B,!1):!!l!=!!a&&(i!=null?Ds(t,!!a,i,!0):Ds(t,!!a,a?[]:"",!1));return;case"textarea":H=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:tt(t,i,T,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":B=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==d&&tt(t,i,_,h,l,d)}Mu(t,B,H);return;case"option":for(var ue in a)if(B=a[ue],a.hasOwnProperty(ue)&&B!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:tt(t,i,ue,null,l,B)}for(C in l)if(B=l[C],H=a[C],l.hasOwnProperty(C)&&B!==H&&(B!=null||H!=null))switch(C){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:tt(t,i,C,B,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in a)B=a[be],a.hasOwnProperty(be)&&B!=null&&!l.hasOwnProperty(be)&&tt(t,i,be,null,l,B);for(z in l)if(B=l[z],H=a[z],l.hasOwnProperty(z)&&B!==H&&(B!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,i));break;default:tt(t,i,z,B,l,H)}return;default:if(Va(i)){for(var nt in a)B=a[nt],a.hasOwnProperty(nt)&&B!==void 0&&!l.hasOwnProperty(nt)&&zd(t,i,nt,void 0,l,B);for(K in l)B=l[K],H=a[K],!l.hasOwnProperty(K)||B===H||B===void 0&&H===void 0||zd(t,i,K,B,l,H);return}}for(var L in a)B=a[L],a.hasOwnProperty(L)&&B!=null&&!l.hasOwnProperty(L)&&tt(t,i,L,null,l,B);for($ in l)B=l[$],H=a[$],!l.hasOwnProperty($)||B===H||B==null&&H==null||tt(t,i,$,B,l,H)}function F_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,_=h.initiatorType,T=h.duration;if(d&&T&&F_(_)){for(_=0,T=h.responseEnd,l+=1;l<a.length;l++){var C=a[l],z=C.startTime;if(z>T)break;var K=C.transferSize,$=C.initiatorType;K&&F_($)&&(C=C.responseEnd,_+=K*(C<T?1:(T-z)/(C-z)))}if(--l,i+=8*(d+_)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bd=null,qd=null;function Uc(t){return t.nodeType===9?t:t.ownerDocument}function G_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Hd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fd=null;function Uw(){var t=window.event;return t&&t.type==="popstate"?t===Fd?!1:(Fd=t,!0):(Fd=null,!1)}var Y_=typeof setTimeout=="function"?setTimeout:void 0,Lw=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,jw=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(t){return Q_.resolve(null).then(t).catch(Pw)}:Y_;function Pw(t){setTimeout(function(){throw t})}function tr(t){return t==="head"}function X_(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(h),yo(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Pl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Pl(a);for(var d=a.firstChild;d;){var _=d.nextSibling,T=d.nodeName;d[Ei]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&Pl(t.ownerDocument.body);a=h}while(a);yo(i)}function $_(t,i){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Gd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gd(a),Oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function zw(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ei])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Xn(t.nextSibling),t===null)break}return null}function Bw(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Xn(t.nextSibling),t===null))return null;return t}function J_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Xn(t.nextSibling),t===null))return null;return t}function Kd(t){return t.data==="$?"||t.data==="$~"}function Yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qw(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Xn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Qd=null;function Z_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return Xn(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function W_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function ev(t,i,a){switch(i=Uc(a),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Pl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Oa(t)}var $n=new Map,tv=new Set;function Lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ys=te.d;te.d={f:Hw,r:Fw,D:Gw,C:Kw,L:Yw,m:Qw,X:$w,S:Xw,M:Jw};function Hw(){var t=ys.f(),i=Ic();return t||i}function Fw(t){var i=Pn(t);i!==null&&i.tag===5&&i.type==="form"?_y(i):ys.r(t)}var mo=typeof document>"u"?null:document;function nv(t,i,a){var l=mo;if(l&&typeof i=="string"&&i){var h=dn(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),tv.has(h)||(tv.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Zt(i,"link",t),Rt(i),l.head.appendChild(i)))}}function Gw(t){ys.D(t),nv("dns-prefetch",t,null)}function Kw(t,i){ys.C(t,i),nv("preconnect",t,i)}function Yw(t,i,a){ys.L(t,i,a);var l=mo;if(l&&t&&i){var h='link[rel="preload"][as="'+dn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+dn(a.imageSizes)+'"]')):h+='[href="'+dn(t)+'"]';var d=h;switch(i){case"style":d=po(t);break;case"script":d=go(t)}$n.has(d)||(t=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),$n.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(zl(d))||i==="script"&&l.querySelector(Bl(d))||(i=l.createElement("link"),Zt(i,"link",t),Rt(i),l.head.appendChild(i)))}}function Qw(t,i){ys.m(t,i);var a=mo;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+dn(l)+'"][href="'+dn(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=go(t)}if(!$n.has(d)&&(t=S({rel:"modulepreload",href:t},i),$n.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bl(d)))return}l=a.createElement("link"),Zt(l,"link",t),Rt(l),a.head.appendChild(l)}}}function Xw(t,i,a){ys.S(t,i,a);var l=mo;if(l&&t){var h=Si(l).hoistableStyles,d=po(t);i=i||"default";var _=h.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(zl(d)))T.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":i},a),(a=$n.get(d))&&Xd(t,a);var C=_=l.createElement("link");Rt(C),Zt(C,"link",t),C._p=new Promise(function(z,K){C.onload=z,C.onerror=K}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,jc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},h.set(d,_)}}}function $w(t,i){ys.X(t,i);var a=mo;if(a&&t){var l=Si(a).hoistableScripts,h=go(t),d=l.get(h);d||(d=a.querySelector(Bl(h)),d||(t=S({src:t,async:!0},i),(i=$n.get(h))&&$d(t,i),d=a.createElement("script"),Rt(d),Zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Jw(t,i){ys.M(t,i);var a=mo;if(a&&t){var l=Si(a).hoistableScripts,h=go(t),d=l.get(h);d||(d=a.querySelector(Bl(h)),d||(t=S({src:t,async:!0,type:"module"},i),(i=$n.get(h))&&$d(t,i),d=a.createElement("script"),Rt(d),Zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function iv(t,i,a,l){var h=(h=he.current)?Lc(h):null;if(!h)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=po(a.href),a=Si(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=po(a.href);var d=Si(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(zl(t)))&&!d._p&&(_.instance=d,_.state.loading=5),$n.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$n.set(t,a),d||Zw(h,t,a,_.state))),i&&l===null)throw Error(r(528,""));return _}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=go(a),a=Si(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function po(t){return'href="'+dn(t)+'"'}function zl(t){return'link[rel="stylesheet"]['+t+"]"}function sv(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function Zw(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Zt(i,"link",a),Rt(i),t.head.appendChild(i))}function go(t){return'[src="'+dn(t)+'"]'}function Bl(t){return"script[async]"+t}function rv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(l)return i.instance=l,Rt(l),l;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Rt(l),Zt(l,"style",h),jc(l,a.precedence,t),i.instance=l;case"stylesheet":h=po(a.href);var d=t.querySelector(zl(h));if(d)return i.state.loading|=4,i.instance=d,Rt(d),d;l=sv(a),(h=$n.get(h))&&Xd(l,h),d=(t.ownerDocument||t).createElement("link"),Rt(d);var _=d;return _._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),Zt(d,"link",l),i.state.loading|=4,jc(d,a.precedence,t),i.instance=d;case"script":return d=go(a.src),(h=t.querySelector(Bl(d)))?(i.instance=h,Rt(h),h):(l=a,(h=$n.get(d))&&(l=S({},a),$d(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Rt(h),Zt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,jc(l,a.precedence,t));return i.instance}function jc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Xd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function $d(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Pc=null;function av(t,i,a){if(Pc===null){var l=new Map,h=Pc=new Map;h.set(a,l)}else h=Pc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[Ei]||d[xt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=t+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function ov(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function Ww(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function lv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eS(t,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=po(l.href),d=i.querySelector(zl(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=zc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=d,Rt(d);return}d=i.ownerDocument||i,l=sv(l),(h=$n.get(h))&&Xd(l,h),d=d.createElement("link"),Rt(d);var _=d;_._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),Zt(d,"link",l),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var Jd=0;function tS(t,i){return t.stylesheets&&t.count===0&&qc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Jd===0&&(Jd=62500*Vw());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Jd?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bc=null;function qc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bc=new Map,i.forEach(nS,t),Bc=null,zc.call(t))}function nS(t,i){if(!(i.state.loading&4)){var a=Bc.get(t);if(a)var l=a.get(null);else{a=new Map,Bc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=zc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var ql={$$typeof:de,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function iS(t,i,a,l,h,d,_,T,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.hiddenUpdates=bi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function uv(t,i,a,l,h,d,_,T,C,z,K,$){return t=new iS(t,i,a,_,C,z,K,$,T),i=1,d===!0&&(i|=24),d=Cn(3,null,null,i),t.current=d,d.stateNode=t,i=Nf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},kf(d),t}function cv(t){return t?(t=Ka,t):Ka}function hv(t,i,a,l,h,d){h=cv(h),l.context===null?l.context=h:l.pendingContext=h,l=Fs(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Gs(t,l,i),a!==null&&(vn(a,t,i),bl(a,t,i))}function fv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Zd(t,i){fv(t,i),(t=t.alternate)&&fv(t,i)}function dv(t){if(t.tag===13||t.tag===31){var i=Gr(t,67108864);i!==null&&vn(i,t,67108864),Zd(t,67108864)}}function mv(t){if(t.tag===13||t.tag===31){var i=kn();i=Mr(i);var a=Gr(t,i);a!==null&&vn(a,t,i),Zd(t,i)}}var Hc=!0;function sS(t,i,a,l){var h=G.T;G.T=null;var d=te.p;try{te.p=2,Wd(t,i,a,l)}finally{te.p=d,G.T=h}}function rS(t,i,a,l){var h=G.T;G.T=null;var d=te.p;try{te.p=8,Wd(t,i,a,l)}finally{te.p=d,G.T=h}}function Wd(t,i,a,l){if(Hc){var h=em(l);if(h===null)Pd(t,i,l,Fc,a),gv(t,l);else if(oS(h,t,i,a,l))l.stopPropagation();else if(gv(t,l),i&4&&-1<aS.indexOf(t)){for(;h!==null;){var d=Pn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Ut(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var C=1<<31-pt(_);T.entanglements[1]|=C,_&=~C}Li(d),(Ye&6)===0&&(xc=Yt()+500,Ul(0))}}break;case 31:case 13:T=Gr(d,2),T!==null&&vn(T,d,2),Ic(),Zd(d,2)}if(d=em(l),d===null&&Pd(t,i,l,Fc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Pd(t,i,l,null,a)}}function em(t){return t=zn(t),tm(t)}var Fc=null;function tm(t){if(Fc=null,t=wi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===31){if(t=p(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Fc=t,null}function pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zi()){case Ir:return 2;case Cr:return 8;case _i:case Ko:return 32;case Ra:return 268435456;default:return 32}default:return 32}}var nm=!1,nr=null,ir=null,sr=null,Hl=new Map,Fl=new Map,rr=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gv(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(i.pointerId)}}function Gl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Pn(i),i!==null&&dv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function oS(t,i,a,l,h){switch(i){case"focusin":return nr=Gl(nr,t,i,a,l,h),!0;case"dragenter":return ir=Gl(ir,t,i,a,l,h),!0;case"mouseover":return sr=Gl(sr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Hl.set(d,Gl(Hl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Fl.set(d,Gl(Fl.get(d)||null,t,i,a,l,h)),!0}return!1}function yv(t){var i=wi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,ii(t.priority,function(){mv(a)});return}}else if(i===31){if(i=p(a),i!==null){t.blockedOn=i,ii(t.priority,function(){mv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=em(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);sl=l,a.target.dispatchEvent(l),sl=null}else return i=Pn(a),i!==null&&dv(i),t.blockedOn=a,!1;i.shift()}return!0}function _v(t,i,a){Gc(t)&&a.delete(i)}function lS(){nm=!1,nr!==null&&Gc(nr)&&(nr=null),ir!==null&&Gc(ir)&&(ir=null),sr!==null&&Gc(sr)&&(sr=null),Hl.forEach(_v),Fl.forEach(_v)}function Kc(t,i){t.blockedOn===i&&(t.blockedOn=null,nm||(nm=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lS)))}var Yc=null;function vv(t){Yc!==t&&(Yc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(tm(l||a)===null)continue;break}var d=Pn(a);d!==null&&(t.splice(i,3),i-=3,ed(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function yo(t){function i(C){return Kc(C,t)}nr!==null&&Kc(nr,t),ir!==null&&Kc(ir,t),sr!==null&&Kc(sr,t),Hl.forEach(i),Fl.forEach(i);for(var a=0;a<rr.length;a++){var l=rr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)yv(a),a.blockedOn===null&&rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Ht]||null;if(typeof d=="function")_||vv(a);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Ht]||null)T=_.formAction;else if(tm(h)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),vv(a)}}}function bv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function im(t){this._internalRoot=t}Qc.prototype.render=im.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,l=kn();hv(a,l,t,i,null,null)},Qc.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;hv(t.current,2,null,t,null,null),Ic(),i[Ti]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Iu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,t),a===0&&yv(t)}};var Tv=e.version;if(Tv!=="19.2.5")throw Error(r(527,Tv,"19.2.5"));te.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=y(i),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var uS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{Sn=Xc.inject(uS),Vt=Xc}catch{}}return Yl.createRoot=function(t,i){if(!o(t))throw Error(r(299));var a=!1,l="",h=Iy,d=Cy,_=Ny;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=uv(t,1,!1,null,null,a,l,null,h,d,_,bv),t[Ti]=i.current,jd(t),new im(i)},Yl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(r(299));var l=!1,h="",d=Iy,_=Cy,T=Ny,C=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(C=a.formState)),i=uv(t,1,!0,i,a??null,l,h,C,d,_,T,bv),i.context=cv(null),a=i.current,l=kn(),l=Mr(l),h=Fs(l),h.callback=null,Gs(a,h,l),a=l,i.current.lanes=a,Dr(i,a),Li(i),t[Ti]=i.current,jd(t),new Qc(i)},Yl.version="19.2.5",Yl}var Dv;function vS(){if(Dv)return am.exports;Dv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),am.exports=_S(),am.exports}var bS=vS();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ES=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Ov=s=>{const e=ES(s);return e.charAt(0).toUpperCase()+e.slice(1)},wb=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),wS=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=Ce.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:f,...p},g)=>Ce.createElement("svg",{ref:g,...SS,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:wb("lucide",o),...!u&&!wS(p)&&{"aria-hidden":"true"},...p},[...f.map(([y,E])=>Ce.createElement(y,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(s,e)=>{const n=Ce.forwardRef(({className:r,...o},u)=>Ce.createElement(AS,{ref:u,iconNode:e,className:wb(`lucide-${TS(Ov(s))}`,`lucide-${s}`,r),...o}));return n.displayName=Ov(s),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Mv=qt("check",xS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],IS=qt("download",RS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],NS=qt("facebook",CS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],OS=qt("fast-forward",DS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],kv=qt("link",MS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],VS=qt("log-out",kS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],LS=qt("maximize",US);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],PS=qt("menu",jS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],BS=qt("pause",zS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ra=qt("play",qS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z",key:"2a1g8i"}],["path",{d:"M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z",key:"rg3s36"}]],FS=qt("rewind",HS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$c=qt("search",GS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],YS=qt("settings",KS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],XS=qt("square-pen",QS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Vv=qt("tv",$S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],cm=qt("users",JS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],WS=qt("volume-2",ZS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],tA=qt("volume-x",eA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ur=qt("x",nA),iA=()=>{};var Uv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=function(s){const e=[];let n=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},sA=function(s){const e=[];let n=0,r=0;for(;n<s.length;){const o=s[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[n++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[n++],f=s[n++],p=s[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const u=s[n++],f=s[n++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},Ab={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],f=o+1<s.length,p=f?s[o+1]:0,g=o+2<s.length,y=g?s[o+2]:0,E=u>>2,S=(u&3)<<4|p>>4;let V=(p&15)<<2|y>>6,F=y&63;g||(F=64,f||(V=64)),r.push(n[E],n[S],n[V],n[F])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Sb(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):sA(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=n[s.charAt(o++)],p=o<s.length?n[s.charAt(o)]:0;++o;const y=o<s.length?n[s.charAt(o)]:64;++o;const S=o<s.length?n[s.charAt(o)]:64;if(++o,u==null||p==null||y==null||S==null)throw new rA;const V=u<<2|p>>4;if(r.push(V),y!==64){const F=p<<4&240|y>>2;if(r.push(F),S!==64){const W=y<<6&192|S;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class rA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aA=function(s){const e=Sb(s);return Ab.encodeByteArray(e,!0)},gh=function(s){return aA(s).replace(/\./g,"")},xb=function(s){try{return Ab.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=()=>oA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof Uv>"u")return;const s=Uv.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},cA=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&xb(s[1]);return e&&JSON.parse(e)},Ph=()=>{try{return iA()||lA()||uA()||cA()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Rb=s=>{var e,n;return(n=(e=Ph())==null?void 0:e.emulatorHosts)==null?void 0:n[s]},Ib=s=>{const e=Rb(s);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cb=()=>{var s;return(s=Ph())==null?void 0:s.config},Nb=s=>{var e;return(e=Ph())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...s};return[gh(JSON.stringify(n)),gh(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function dA(){var e;const s=(e=Ph())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ob(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function pA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const s=on();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function yA(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mb(){try{return typeof indexedDB=="object"}catch{return!1}}function kb(){return new Promise((s,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function _A(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="FirebaseError";class ei extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vA,Object.setPrototypeOf(this,ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?bA(u,r):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new ei(o,p,r)}}function bA(s,e){return s.replace(TA,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const TA=/\{\$([^}]+)}/g;function EA(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function br(s,e){if(s===e)return!0;const n=Object.keys(s),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const u=s[o],f=e[o];if(Lv(u)&&Lv(f)){if(!br(u,f))return!1}else if(u!==f)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Lv(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(s){const e=[];for(const[n,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wA(s,e){const n=new SA(s,e);return n.subscribe.bind(n)}class SA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AA(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=hm),o.error===void 0&&(o.error=hm),o.complete===void 0&&(o.complete=hm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AA(s,e){if(typeof s!="object"||s===null)return!1;for(const n of e)if(n in s&&typeof s[n]=="function")return!0;return!1}function hm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=1e3,RA=2,IA=14400*1e3,CA=.5;function jv(s,e=xA,n=RA){const r=e*Math.pow(n,s),o=Math.round(CA*r*(Math.random()-.5)*2);return Math.min(IA,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(s){return s&&s._delegate?s._delegate:s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rp(s){return(await fetch(s,{credentials:"include"})).ok}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OA(e))try{this.getOrInitializeService({instanceIdentifier:sa})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=sa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sa){return this.instances.has(e)}getOptions(e=sa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);r===p&&f.resolve(o)}return o}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const u=this.instances.get(r);return u&&e(u,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sa){return this.component?this.component.multipleInstances?e:sa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DA(s){return s===sa?void 0:s}function OA(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Pe||(Pe={}));const kA={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},VA=Pe.INFO,UA={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},LA=(s,e,...n)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=UA[e];if(o)console[o](`[${r}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=VA,this._logHandler=LA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const jA=(s,e)=>e.some(n=>s instanceof n);let Pv,zv;function PA(){return Pv||(Pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zA(){return zv||(zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vb=new WeakMap,Dm=new WeakMap,Ub=new WeakMap,fm=new WeakMap,ap=new WeakMap;function BA(s){const e=new Promise((n,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",f)},u=()=>{n(gr(s.result)),o()},f=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&Vb.set(n,s)}).catch(()=>{}),ap.set(e,s),e}function qA(s){if(Dm.has(s))return;const e=new Promise((n,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",f),s.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",f),s.addEventListener("abort",f)});Dm.set(s,e)}let Om={get(s,e,n){if(s instanceof IDBTransaction){if(e==="done")return Dm.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Ub.get(s);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(s[e])},set(s,e,n){return s[e]=n,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function HA(s){Om=s(Om)}function FA(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=s.call(dm(this),e,...n);return Ub.set(r,e.sort?e.sort():[e]),gr(r)}:zA().includes(s)?function(...e){return s.apply(dm(this),e),gr(Vb.get(this))}:function(...e){return gr(s.apply(dm(this),e))}}function GA(s){return typeof s=="function"?FA(s):(s instanceof IDBTransaction&&qA(s),jA(s,PA())?new Proxy(s,Om):s)}function gr(s){if(s instanceof IDBRequest)return BA(s);if(fm.has(s))return fm.get(s);const e=GA(s);return e!==s&&(fm.set(s,e),ap.set(e,s)),e}const dm=s=>ap.get(s);function Lb(s,e,{blocked:n,upgrade:r,blocking:o,terminated:u}={}){const f=indexedDB.open(s,e),p=gr(f);return r&&f.addEventListener("upgradeneeded",g=>{r(gr(f.result),g.oldVersion,g.newVersion,gr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const KA=["get","getKey","getAll","getAllKeys","count"],YA=["put","add","delete","clear"],mm=new Map;function Bv(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(mm.get(e))return mm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=YA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||KA.includes(n)))return;const u=async function(f,...p){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return r&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),o&&g.done]))[0]};return mm.set(e,u),u}HA(s=>({...s,get:(e,n,r)=>Bv(e,n)||s.get(e,n,r),has:(e,n)=>!!Bv(e,n)||s.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XA(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mm="@firebase/app",qv="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new zh("@firebase/app"),$A="@firebase/app-compat",JA="@firebase/analytics-compat",ZA="@firebase/analytics",WA="@firebase/app-check-compat",ex="@firebase/app-check",tx="@firebase/auth",nx="@firebase/auth-compat",ix="@firebase/database",sx="@firebase/data-connect",rx="@firebase/database-compat",ax="@firebase/functions",ox="@firebase/functions-compat",lx="@firebase/installations",ux="@firebase/installations-compat",cx="@firebase/messaging",hx="@firebase/messaging-compat",fx="@firebase/performance",dx="@firebase/performance-compat",mx="@firebase/remote-config",px="@firebase/remote-config-compat",gx="@firebase/storage",yx="@firebase/storage-compat",_x="@firebase/firestore",vx="@firebase/ai",bx="@firebase/firestore-compat",Tx="firebase",Ex="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="[DEFAULT]",wx={[Mm]:"fire-core",[$A]:"fire-core-compat",[ZA]:"fire-analytics",[JA]:"fire-analytics-compat",[ex]:"fire-app-check",[WA]:"fire-app-check-compat",[tx]:"fire-auth",[nx]:"fire-auth-compat",[ix]:"fire-rtdb",[sx]:"fire-data-connect",[rx]:"fire-rtdb-compat",[ax]:"fire-fn",[ox]:"fire-fn-compat",[lx]:"fire-iid",[ux]:"fire-iid-compat",[cx]:"fire-fcm",[hx]:"fire-fcm-compat",[fx]:"fire-perf",[dx]:"fire-perf-compat",[mx]:"fire-rc",[px]:"fire-rc-compat",[gx]:"fire-gcs",[yx]:"fire-gcs-compat",[_x]:"fire-fst",[bx]:"fire-fst-compat",[vx]:"fire-vertex","fire-js":"fire-js",[Tx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new Map,Sx=new Map,Vm=new Map;function Hv(s,e){try{s.container.addComponent(e)}catch(n){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,n)}}function yi(s){const e=s.name;if(Vm.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;Vm.set(e,s);for(const n of yh.values())Hv(n,s);for(const n of Sx.values())Hv(n,s);return!0}function Rr(s,e){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(e)}function di(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new ba("app","Firebase",Ax);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=Ex;function jb(s,e={}){let n=s;typeof e!="object"&&(e={name:e});const r={name:km,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw yr.create("bad-app-name",{appName:String(o)});if(n||(n=Cb()),!n)throw yr.create("no-options");const u=yh.get(o);if(u){if(br(n,u.options)&&br(r,u.config))return u;throw yr.create("duplicate-app",{appName:o})}const f=new MA(o);for(const g of Vm.values())f.addComponent(g);const p=new xx(n,r,f);return yh.set(o,p),p}function Bh(s=km){const e=yh.get(s);if(!e&&s===km&&Cb())return jb();if(!e)throw yr.create("no-app",{appName:s});return e}function En(s,e,n){let r=wx[s]??s;n&&(r+=`-${n}`);const o=r.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${r}" with version "${e}":`];o&&f.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(f.join(" "));return}yi(new Wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="firebase-heartbeat-database",Ix=1,lu="firebase-heartbeat-store";let pm=null;function Pb(){return pm||(pm=Lb(Rx,Ix,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(lu)}catch(n){console.warn(n)}}}}).catch(s=>{throw yr.create("idb-open",{originalErrorMessage:s.message})})),pm}async function Cx(s){try{const n=(await Pb()).transaction(lu),r=await n.objectStore(lu).get(zb(s));return await n.done,r}catch(e){if(e instanceof ei)Ts.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ts.warn(n.message)}}}async function Fv(s,e){try{const r=(await Pb()).transaction(lu,"readwrite");await r.objectStore(lu).put(e,zb(s)),await r.done}catch(n){if(n instanceof ei)Ts.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ts.warn(r.message)}}}function zb(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=1024,Dx=30;class Ox{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Gv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Dx){const f=Vx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ts.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gv(),{heartbeatsToSend:r,unsentEntries:o}=Mx(this._heartbeatsCache.heartbeats),u=gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Ts.warn(n),""}}}function Gv(){return new Date().toISOString().substring(0,10)}function Mx(s,e=Nx){const n=[];let r=s.slice();for(const o of s){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Kv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Kv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mb()?kb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kv(s){return gh(JSON.stringify({version:2,heartbeats:s})).length}function Vx(s){if(s.length===0)return-1;let e=0,n=s[0].date;for(let r=1;r<s.length;r++)s[r].date<n&&(n=s[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(s){yi(new Wn("platform-logger",e=>new QA(e),"PRIVATE")),yi(new Wn("heartbeat",e=>new Ox(e),"PRIVATE")),En(Mm,qv,s),En(Mm,qv,"esm2020"),En("fire-js","")}Ux("");var Lx="firebase",jx="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(Lx,jx,"app");var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,Bb;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,A){function x(){}x.prototype=A.prototype,I.F=A.prototype,I.prototype=new x,I.prototype.constructor=I,I.D=function(k,N,U){for(var R=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)R[Xe-2]=arguments[Xe];return A.prototype[N].apply(k,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,A,x){x||(x=0);const k=Array(16);if(typeof A=="string")for(var N=0;N<16;++N)k[N]=A.charCodeAt(x++)|A.charCodeAt(x++)<<8|A.charCodeAt(x++)<<16|A.charCodeAt(x++)<<24;else for(N=0;N<16;++N)k[N]=A[x++]|A[x++]<<8|A[x++]<<16|A[x++]<<24;A=I.g[0],x=I.g[1],N=I.g[2];let U=I.g[3],R;R=A+(U^x&(N^U))+k[0]+3614090360&4294967295,A=x+(R<<7&4294967295|R>>>25),R=U+(N^A&(x^N))+k[1]+3905402710&4294967295,U=A+(R<<12&4294967295|R>>>20),R=N+(x^U&(A^x))+k[2]+606105819&4294967295,N=U+(R<<17&4294967295|R>>>15),R=x+(A^N&(U^A))+k[3]+3250441966&4294967295,x=N+(R<<22&4294967295|R>>>10),R=A+(U^x&(N^U))+k[4]+4118548399&4294967295,A=x+(R<<7&4294967295|R>>>25),R=U+(N^A&(x^N))+k[5]+1200080426&4294967295,U=A+(R<<12&4294967295|R>>>20),R=N+(x^U&(A^x))+k[6]+2821735955&4294967295,N=U+(R<<17&4294967295|R>>>15),R=x+(A^N&(U^A))+k[7]+4249261313&4294967295,x=N+(R<<22&4294967295|R>>>10),R=A+(U^x&(N^U))+k[8]+1770035416&4294967295,A=x+(R<<7&4294967295|R>>>25),R=U+(N^A&(x^N))+k[9]+2336552879&4294967295,U=A+(R<<12&4294967295|R>>>20),R=N+(x^U&(A^x))+k[10]+4294925233&4294967295,N=U+(R<<17&4294967295|R>>>15),R=x+(A^N&(U^A))+k[11]+2304563134&4294967295,x=N+(R<<22&4294967295|R>>>10),R=A+(U^x&(N^U))+k[12]+1804603682&4294967295,A=x+(R<<7&4294967295|R>>>25),R=U+(N^A&(x^N))+k[13]+4254626195&4294967295,U=A+(R<<12&4294967295|R>>>20),R=N+(x^U&(A^x))+k[14]+2792965006&4294967295,N=U+(R<<17&4294967295|R>>>15),R=x+(A^N&(U^A))+k[15]+1236535329&4294967295,x=N+(R<<22&4294967295|R>>>10),R=A+(N^U&(x^N))+k[1]+4129170786&4294967295,A=x+(R<<5&4294967295|R>>>27),R=U+(x^N&(A^x))+k[6]+3225465664&4294967295,U=A+(R<<9&4294967295|R>>>23),R=N+(A^x&(U^A))+k[11]+643717713&4294967295,N=U+(R<<14&4294967295|R>>>18),R=x+(U^A&(N^U))+k[0]+3921069994&4294967295,x=N+(R<<20&4294967295|R>>>12),R=A+(N^U&(x^N))+k[5]+3593408605&4294967295,A=x+(R<<5&4294967295|R>>>27),R=U+(x^N&(A^x))+k[10]+38016083&4294967295,U=A+(R<<9&4294967295|R>>>23),R=N+(A^x&(U^A))+k[15]+3634488961&4294967295,N=U+(R<<14&4294967295|R>>>18),R=x+(U^A&(N^U))+k[4]+3889429448&4294967295,x=N+(R<<20&4294967295|R>>>12),R=A+(N^U&(x^N))+k[9]+568446438&4294967295,A=x+(R<<5&4294967295|R>>>27),R=U+(x^N&(A^x))+k[14]+3275163606&4294967295,U=A+(R<<9&4294967295|R>>>23),R=N+(A^x&(U^A))+k[3]+4107603335&4294967295,N=U+(R<<14&4294967295|R>>>18),R=x+(U^A&(N^U))+k[8]+1163531501&4294967295,x=N+(R<<20&4294967295|R>>>12),R=A+(N^U&(x^N))+k[13]+2850285829&4294967295,A=x+(R<<5&4294967295|R>>>27),R=U+(x^N&(A^x))+k[2]+4243563512&4294967295,U=A+(R<<9&4294967295|R>>>23),R=N+(A^x&(U^A))+k[7]+1735328473&4294967295,N=U+(R<<14&4294967295|R>>>18),R=x+(U^A&(N^U))+k[12]+2368359562&4294967295,x=N+(R<<20&4294967295|R>>>12),R=A+(x^N^U)+k[5]+4294588738&4294967295,A=x+(R<<4&4294967295|R>>>28),R=U+(A^x^N)+k[8]+2272392833&4294967295,U=A+(R<<11&4294967295|R>>>21),R=N+(U^A^x)+k[11]+1839030562&4294967295,N=U+(R<<16&4294967295|R>>>16),R=x+(N^U^A)+k[14]+4259657740&4294967295,x=N+(R<<23&4294967295|R>>>9),R=A+(x^N^U)+k[1]+2763975236&4294967295,A=x+(R<<4&4294967295|R>>>28),R=U+(A^x^N)+k[4]+1272893353&4294967295,U=A+(R<<11&4294967295|R>>>21),R=N+(U^A^x)+k[7]+4139469664&4294967295,N=U+(R<<16&4294967295|R>>>16),R=x+(N^U^A)+k[10]+3200236656&4294967295,x=N+(R<<23&4294967295|R>>>9),R=A+(x^N^U)+k[13]+681279174&4294967295,A=x+(R<<4&4294967295|R>>>28),R=U+(A^x^N)+k[0]+3936430074&4294967295,U=A+(R<<11&4294967295|R>>>21),R=N+(U^A^x)+k[3]+3572445317&4294967295,N=U+(R<<16&4294967295|R>>>16),R=x+(N^U^A)+k[6]+76029189&4294967295,x=N+(R<<23&4294967295|R>>>9),R=A+(x^N^U)+k[9]+3654602809&4294967295,A=x+(R<<4&4294967295|R>>>28),R=U+(A^x^N)+k[12]+3873151461&4294967295,U=A+(R<<11&4294967295|R>>>21),R=N+(U^A^x)+k[15]+530742520&4294967295,N=U+(R<<16&4294967295|R>>>16),R=x+(N^U^A)+k[2]+3299628645&4294967295,x=N+(R<<23&4294967295|R>>>9),R=A+(N^(x|~U))+k[0]+4096336452&4294967295,A=x+(R<<6&4294967295|R>>>26),R=U+(x^(A|~N))+k[7]+1126891415&4294967295,U=A+(R<<10&4294967295|R>>>22),R=N+(A^(U|~x))+k[14]+2878612391&4294967295,N=U+(R<<15&4294967295|R>>>17),R=x+(U^(N|~A))+k[5]+4237533241&4294967295,x=N+(R<<21&4294967295|R>>>11),R=A+(N^(x|~U))+k[12]+1700485571&4294967295,A=x+(R<<6&4294967295|R>>>26),R=U+(x^(A|~N))+k[3]+2399980690&4294967295,U=A+(R<<10&4294967295|R>>>22),R=N+(A^(U|~x))+k[10]+4293915773&4294967295,N=U+(R<<15&4294967295|R>>>17),R=x+(U^(N|~A))+k[1]+2240044497&4294967295,x=N+(R<<21&4294967295|R>>>11),R=A+(N^(x|~U))+k[8]+1873313359&4294967295,A=x+(R<<6&4294967295|R>>>26),R=U+(x^(A|~N))+k[15]+4264355552&4294967295,U=A+(R<<10&4294967295|R>>>22),R=N+(A^(U|~x))+k[6]+2734768916&4294967295,N=U+(R<<15&4294967295|R>>>17),R=x+(U^(N|~A))+k[13]+1309151649&4294967295,x=N+(R<<21&4294967295|R>>>11),R=A+(N^(x|~U))+k[4]+4149444226&4294967295,A=x+(R<<6&4294967295|R>>>26),R=U+(x^(A|~N))+k[11]+3174756917&4294967295,U=A+(R<<10&4294967295|R>>>22),R=N+(A^(U|~x))+k[2]+718787259&4294967295,N=U+(R<<15&4294967295|R>>>17),R=x+(U^(N|~A))+k[9]+3951481745&4294967295,I.g[0]=I.g[0]+A&4294967295,I.g[1]=I.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+N&4294967295,I.g[3]=I.g[3]+U&4294967295}r.prototype.v=function(I,A){A===void 0&&(A=I.length);const x=A-this.blockSize,k=this.C;let N=this.h,U=0;for(;U<A;){if(N==0)for(;U<=x;)o(this,I,U),U+=this.blockSize;if(typeof I=="string"){for(;U<A;)if(k[N++]=I.charCodeAt(U++),N==this.blockSize){o(this,k),N=0;break}}else for(;U<A;)if(k[N++]=I[U++],N==this.blockSize){o(this,k),N=0;break}}this.h=N,this.o+=A},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var A=1;A<I.length-8;++A)I[A]=0;A=this.o*8;for(var x=I.length-8;x<I.length;++x)I[x]=A&255,A/=256;for(this.v(I),I=Array(16),A=0,x=0;x<4;++x)for(let k=0;k<32;k+=8)I[A++]=this.g[x]>>>k&255;return I};function u(I,A){var x=p;return Object.prototype.hasOwnProperty.call(x,I)?x[I]:x[I]=A(I)}function f(I,A){this.h=A;const x=[];let k=!0;for(let N=I.length-1;N>=0;N--){const U=I[N]|0;k&&U==A||(x[N]=U,k=!1)}this.g=x}var p={};function g(I){return-128<=I&&I<128?u(I,function(A){return new f([A|0],A<0?-1:0)}):new f([I|0],I<0?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return S;if(I<0)return ee(y(-I));const A=[];let x=1;for(let k=0;I>=x;k++)A[k]=I/x|0,x*=4294967296;return new f(A,0)}function E(I,A){if(I.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(I.charAt(0)=="-")return ee(E(I.substring(1),A));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=y(Math.pow(A,8));let k=S;for(let U=0;U<I.length;U+=8){var N=Math.min(8,I.length-U);const R=parseInt(I.substring(U,U+N),A);N<8?(N=y(Math.pow(A,N)),k=k.j(N).add(y(R))):(k=k.j(x),k=k.add(y(R)))}return k}var S=g(0),V=g(1),F=g(16777216);s=f.prototype,s.m=function(){if(ie(this))return-ee(this).m();let I=0,A=1;for(let x=0;x<this.g.length;x++){const k=this.i(x);I+=(k>=0?k:4294967296+k)*A,A*=4294967296}return I},s.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(W(this))return"0";if(ie(this))return"-"+ee(this).toString(I);const A=y(Math.pow(I,6));var x=this;let k="";for(;;){const N=Te(x,A).g;x=me(x,N.j(A));let U=((x.g.length>0?x.g[0]:x.h)>>>0).toString(I);if(x=N,W(x))return U+k;for(;U.length<6;)U="0"+U;k=U+k}},s.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function W(I){if(I.h!=0)return!1;for(let A=0;A<I.g.length;A++)if(I.g[A]!=0)return!1;return!0}function ie(I){return I.h==-1}s.l=function(I){return I=me(this,I),ie(I)?-1:W(I)?0:1};function ee(I){const A=I.g.length,x=[];for(let k=0;k<A;k++)x[k]=~I.g[k];return new f(x,~I.h).add(V)}s.abs=function(){return ie(this)?ee(this):this},s.add=function(I){const A=Math.max(this.g.length,I.g.length),x=[];let k=0;for(let N=0;N<=A;N++){let U=k+(this.i(N)&65535)+(I.i(N)&65535),R=(U>>>16)+(this.i(N)>>>16)+(I.i(N)>>>16);k=R>>>16,U&=65535,R&=65535,x[N]=R<<16|U}return new f(x,x[x.length-1]&-2147483648?-1:0)};function me(I,A){return I.add(ee(A))}s.j=function(I){if(W(this)||W(I))return S;if(ie(this))return ie(I)?ee(this).j(ee(I)):ee(ee(this).j(I));if(ie(I))return ee(this.j(ee(I)));if(this.l(F)<0&&I.l(F)<0)return y(this.m()*I.m());const A=this.g.length+I.g.length,x=[];for(var k=0;k<2*A;k++)x[k]=0;for(k=0;k<this.g.length;k++)for(let N=0;N<I.g.length;N++){const U=this.i(k)>>>16,R=this.i(k)&65535,Xe=I.i(N)>>>16,ht=I.i(N)&65535;x[2*k+2*N]+=R*ht,ve(x,2*k+2*N),x[2*k+2*N+1]+=U*ht,ve(x,2*k+2*N+1),x[2*k+2*N+1]+=R*Xe,ve(x,2*k+2*N+1),x[2*k+2*N+2]+=U*Xe,ve(x,2*k+2*N+2)}for(I=0;I<A;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=A;I<2*A;I++)x[I]=0;return new f(x,0)};function ve(I,A){for(;(I[A]&65535)!=I[A];)I[A+1]+=I[A]>>>16,I[A]&=65535,A++}function de(I,A){this.g=I,this.h=A}function Te(I,A){if(W(A))throw Error("division by zero");if(W(I))return new de(S,S);if(ie(I))return A=Te(ee(I),A),new de(ee(A.g),ee(A.h));if(ie(A))return A=Te(I,ee(A)),new de(ee(A.g),A.h);if(I.g.length>30){if(ie(I)||ie(A))throw Error("slowDivide_ only works with positive integers.");for(var x=V,k=A;k.l(I)<=0;)x=we(x),k=we(k);var N=ge(x,1),U=ge(k,1);for(k=ge(k,2),x=ge(x,2);!W(k);){var R=U.add(k);R.l(I)<=0&&(N=N.add(x),U=R),k=ge(k,1),x=ge(x,1)}return A=me(I,N.j(A)),new de(N,A)}for(N=S;I.l(A)>=0;){for(x=Math.max(1,Math.floor(I.m()/A.m())),k=Math.ceil(Math.log(x)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),U=y(x),R=U.j(A);ie(R)||R.l(I)>0;)x-=k,U=y(x),R=U.j(A);W(U)&&(U=V),N=N.add(U),I=me(I,R)}return new de(N,I)}s.B=function(I){return Te(this,I).h},s.and=function(I){const A=Math.max(this.g.length,I.g.length),x=[];for(let k=0;k<A;k++)x[k]=this.i(k)&I.i(k);return new f(x,this.h&I.h)},s.or=function(I){const A=Math.max(this.g.length,I.g.length),x=[];for(let k=0;k<A;k++)x[k]=this.i(k)|I.i(k);return new f(x,this.h|I.h)},s.xor=function(I){const A=Math.max(this.g.length,I.g.length),x=[];for(let k=0;k<A;k++)x[k]=this.i(k)^I.i(k);return new f(x,this.h^I.h)};function we(I){const A=I.g.length+1,x=[];for(let k=0;k<A;k++)x[k]=I.i(k)<<1|I.i(k-1)>>>31;return new f(x,I.h)}function ge(I,A){const x=A>>5;A%=32;const k=I.g.length-x,N=[];for(let U=0;U<k;U++)N[U]=A>0?I.i(U+x)>>>A|I.i(U+x+1)<<32-A:I.i(U+x);return new f(N,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Bb=r,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,_r=f}).apply(typeof Yv<"u"?Yv:typeof self<"u"?self:typeof window<"u"?window:{});var Jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qb,$l,Hb,ah,Um,Fb,Gb,Kb;(function(){var s,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jc=="object"&&Jc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function o(c,m){if(m)e:{var v=r;c=c.split(".");for(var w=0;w<c.length-1;w++){var j=c[w];if(!(j in v))break e;v=v[j]}c=c[c.length-1],w=v[c],m=m(w),m!=w&&m!=null&&e(v,c,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(m){var v=[],w;for(w in m)Object.prototype.hasOwnProperty.call(m,w)&&v.push([w,m[w]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function g(c,m,v){return c.call.apply(c.bind,arguments)}function y(c,m,v){return y=g,y.apply(null,arguments)}function E(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function S(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(w,j,q){for(var se=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)se[Ne-2]=arguments[Ne];return m.prototype[j].apply(w,se)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function F(c){const m=c.length;if(m>0){const v=Array(m);for(let w=0;w<m;w++)v[w]=c[w];return v}return[]}function W(c,m){for(let w=1;w<arguments.length;w++){const j=arguments[w];var v=typeof j;if(v=v!="object"?v:j?Array.isArray(j)?"array":v:"null",v=="array"||v=="object"&&typeof j.length=="number"){v=c.length||0;const q=j.length||0;c.length=v+q;for(let se=0;se<q;se++)c[v+se]=j[se]}else c.push(j)}}class ie{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ee(c){f.setTimeout(()=>{throw c},0)}function me(){var c=I;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class ve{constructor(){this.h=this.g=null}add(m,v){const w=de.get();w.set(m,v),this.h?this.h.next=w:this.g=w,this.h=w}}var de=new ie(()=>new Te,c=>c.reset());class Te{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ge=!1,I=new ve,A=()=>{const c=Promise.resolve(void 0);we=()=>{c.then(x)}};function x(){for(var c;c=me();){try{c.h.call(c.g)}catch(v){ee(v)}var m=de;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}ge=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var U=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c})();function R(c){return/^[\s\xa0]*$/.test(c)}function Xe(c,m){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}S(Xe,N),Xe.prototype.init=function(c,m){const v=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Xe.Z.h.call(this)},Xe.prototype.h=function(){Xe.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),G=0;function te(c,m,v,w,j){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!w,this.ha=j,this.key=++G,this.da=this.fa=!1}function ce(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Se(c,m,v){for(const w in c)m.call(v,c[w],w,c)}function ke(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function M(c){const m={};for(const v in c)m[v]=c[v];return m}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(c,m){let v,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(v in w)c[v]=w[v];for(let q=0;q<Q.length;q++)v=Q[q],Object.prototype.hasOwnProperty.call(w,v)&&(c[v]=w[v])}}function re(c){this.src=c,this.g={},this.h=0}re.prototype.add=function(c,m,v,w,j){const q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);const se=he(c,m,w,j);return se>-1?(m=c[se],v||(m.fa=!1)):(m=new te(m,this.src,q,!!w,j),m.fa=v,c.push(m)),m};function X(c,m){const v=m.type;if(v in c.g){var w=c.g[v],j=Array.prototype.indexOf.call(w,m,void 0),q;(q=j>=0)&&Array.prototype.splice.call(w,j,1),q&&(ce(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function he(c,m,v,w){for(let j=0;j<c.length;++j){const q=c[j];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==w)return j}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),bt={};function it(c,m,v,w,j){if(Array.isArray(m)){for(let q=0;q<m.length;q++)it(c,m[q],v,w,j);return null}return v=Ji(v),c&&c[ht]?c.J(m,v,p(w)?!!w.capture:!1,j):Qi(c,m,v,!1,w,j)}function Qi(c,m,v,w,j,q){if(!m)throw Error("Invalid event type");const se=p(j)?!!j.capture:!!j;let Ne=ti(c);if(Ne||(c[Me]=Ne=new re(c)),v=Ne.add(m,v,w,se,q),v.proxy)return v;if(w=Ln(),v.proxy=w,w.src=c,w.listener=v,c.addEventListener)U||(j=se),j===void 0&&(j=!1),c.addEventListener(m.toString(),w,j);else if(c.attachEvent)c.attachEvent(wn(m.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ln(){function c(v){return m.call(c.src,c.listener,v)}const m=$i;return c}function Xi(c,m,v,w,j){if(Array.isArray(m))for(var q=0;q<m.length;q++)Xi(c,m[q],v,w,j);else w=p(w)?!!w.capture:!!w,v=Ji(v),c&&c[ht]?(c=c.i,q=String(m).toString(),q in c.g&&(m=c.g[q],v=he(m,v,w,j),v>-1&&(ce(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[q],c.h--)))):c&&(c=ti(c))&&(m=c.g[m.toString()],c=-1,m&&(c=he(m,v,w,j)),(v=c>-1?m[c]:null)&&xs(v))}function xs(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[ht])X(m.i,c);else{var v=c.type,w=c.proxy;m.removeEventListener?m.removeEventListener(v,w,c.capture):m.detachEvent?m.detachEvent(wn(v),w):m.addListener&&m.removeListener&&m.removeListener(w),(v=ti(m))?(X(v,c),v.h==0&&(v.src=null,m[Me]=null)):ce(c)}}}function wn(c){return c in bt?bt[c]:bt[c]="on"+c}function $i(c,m){if(c.da)c=!0;else{m=new Xe(m,this);const v=c.listener,w=c.ha||c.src;c.fa&&xs(c),c=v.call(w,m)}return c}function ti(c){return c=c[Me],c instanceof re?c:null}var ni="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ji(c){return typeof c=="function"?c:(c[ni]||(c[ni]=function(m){return c.handleEvent(m)}),c[ni])}function mt(){k.call(this),this.i=new re(this),this.M=this,this.G=null}S(mt,k),mt.prototype[ht]=!0,mt.prototype.removeEventListener=function(c,m,v,w){Xi(this,c,m,v,w)};function rt(c,m){var v,w=c.G;if(w)for(v=[];w;w=w.G)v.push(w);if(c=c.M,w=m.type||m,typeof m=="string")m=new N(m,c);else if(m instanceof N)m.target=m.target||c;else{var j=m;m=new N(w,c),ne(m,j)}j=!0;let q,se;if(v)for(se=v.length-1;se>=0;se--)q=m.g=v[se],j=jn(q,w,!0,m)&&j;if(q=m.g=c,j=jn(q,w,!0,m)&&j,j=jn(q,w,!1,m)&&j,v)for(se=0;se<v.length;se++)q=m.g=v[se],j=jn(q,w,!1,m)&&j}mt.prototype.N=function(){if(mt.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let w=0;w<v.length;w++)ce(v[w]);delete c.g[m],c.h--}}this.G=null},mt.prototype.J=function(c,m,v,w){return this.i.add(String(c),m,!1,v,w)},mt.prototype.K=function(c,m,v,w){return this.i.add(String(c),m,!0,v,w)};function jn(c,m,v,w){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let j=!0;for(let q=0;q<m.length;++q){const se=m[q];if(se&&!se.da&&se.capture==v){const Ne=se.listener,Tt=se.ha||se.src;se.fa&&X(c.i,se),j=Ne.call(Tt,w)!==!1&&j}}return j&&!w.defaultPrevented}function Go(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function Rs(c){c.g=Go(()=>{c.g=null,c.i&&(c.i=!1,Rs(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Yt extends k{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Rs(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(c){k.call(this),this.h=c,this.g={}}S(Zi,k);var Ir=[];function Cr(c){Se(c.g,function(m,v){this.g.hasOwnProperty(v)&&xs(m)},c),c.g={}}Zi.prototype.N=function(){Zi.Z.N.call(this),Cr(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _i=f.JSON.stringify,Ko=f.JSON.parse,Ra=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function Ia(){}function Ca(){}var Sn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vt(){N.call(this,"d")}S(Vt,N);function At(){N.call(this,"c")}S(At,N);var pt={},Nr=null;function Is(){return Nr=Nr||new mt}pt.Ia="serverreachability";function Cs(c){N.call(this,pt.Ia,c)}S(Cs,N);function D(c){const m=Is();rt(m,new Cs(m))}pt.STAT_EVENT="statevent";function oe(c,m){N.call(this,pt.STAT_EVENT,c),this.stat=m}S(oe,N);function le(c){const m=Is();rt(m,new oe(m,c))}pt.Ja="timingevent";function Ut(c,m){N.call(this,pt.Ja,c),this.size=m}S(Ut,N);function An(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function fn(){this.g=!0}fn.prototype.ua=function(){this.g=!1};function vi(c,m,v,w,j,q){c.info(function(){if(c.g)if(q){var se="",Ne=q.split("&");for(let Ke=0;Ke<Ne.length;Ke++){var Tt=Ne[Ke].split("=");if(Tt.length>1){const ft=Tt[0];Tt=Tt[1];const qn=ft.split("_");se=qn.length>=2&&qn[1]=="type"?se+(ft+"="+Tt+"&"):se+(ft+"=redacted&")}}}else se=null;else se=q;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+m+`
`+v+`
`+se})}function Na(c,m,v,w,j,q,se){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+m+`
`+v+`
`+q+" "+se})}function bi(c,m,v,w){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+uf(c,v)+(w?" "+w:"")})}function Dr(c,m){c.info(function(){return"TIMEOUT: "+m})}fn.prototype.info=function(){};function uf(c,m){if(!c.g)return m;if(!m)return null;try{const q=JSON.parse(m);if(q){for(c=0;c<q.length;c++)if(Array.isArray(q[c])){var v=q[c];if(!(v.length<2)){var w=v[1];if(Array.isArray(w)&&!(w.length<1)){var j=w[0];if(j!="noop"&&j!="stop"&&j!="close")for(let se=1;se<w.length;se++)w[se]=""}}}}return _i(q)}catch{return m}}var Or={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qo;function Mr(){}S(Mr,Ia),Mr.prototype.g=function(){return new XMLHttpRequest},Qo=new Mr;function Wi(c){return encodeURIComponent(String(c))}function Iu(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function ii(c,m,v,w){this.j=c,this.i=m,this.l=v,this.S=w||1,this.V=new Zi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new si}function si(){this.i=null,this.g="",this.h=!1}var xt={},Ht={};function Ti(c,m,v){c.M=1,c.A=kr(It(m)),c.u=v,c.R=!0,Da(c,null)}function Da(c,m){c.F=Date.now(),Ei(c),c.B=It(c.A);var v=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),Va(v.i,"t",w),c.C=0,v=c.j.L,c.h=new si,c.g=Hu(c.j,v?m:null,!c.u),c.P>0&&(c.O=new Yt(y(c.Y,c,c.g),c.P)),m=c.V,v=c.g,w=c.ba;var j="readystatechange";Array.isArray(j)||(j&&(Ir[0]=j.toString()),j=Ir);for(let q=0;q<j.length;q++){const se=it(v,j[q],w||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),D(),vi(c.i,c.v,c.B,c.l,c.S,c.u)}ii.prototype.ba=function(c){c=c.target;const m=this.O;m&&oi(c)==3?m.j():this.Y(c)},ii.prototype.Y=function(c){try{if(c==this.g)e:{const Ne=oi(this.g),Tt=this.g.ya(),Ke=this.g.ca();if(!(Ne<3)&&(Ne!=3||this.g&&(this.h.h||this.g.la()||Qt(this.g)))){this.K||Ne!=4||Tt==7||(Tt==8||Ke<=0?D(3):D(2)),wi(this);var m=this.g.ca();this.X=m;var v=cf(this);if(this.o=m==200,Na(this.i,this.v,this.B,this.l,this.S,Ne,m),this.o){if(this.U&&!this.L){t:{if(this.g){var w,j=this.g;if((w=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(w)){var q=w;break t}}q=null}if(c=q)bi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Si(this,c);else{this.o=!1,this.m=3,le(12),xn(this),Pn(this);break e}}if(this.R){c=!0;let ft;for(;!this.K&&this.C<v.length;)if(ft=Nu(this,v),ft==Ht){Ne==4&&(this.m=4,le(14),c=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==xt){this.m=4,le(15),bi(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else bi(this.i,this.l,ft,null),Si(this,ft);if(Cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||v.length!=0||this.h.h||(this.m=1,le(16),c=!1),this.o=this.o&&c,!c)bi(this.i,this.l,v,"[Invalid Chunked Response]"),xn(this),Pn(this);else if(v.length>0&&!this.W){this.W=!0;var se=this.j;se.g==this&&se.aa&&!se.P&&(se.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),ul(se),se.P=!0,le(11))}}else bi(this.i,this.l,v,null),Si(this,v);Ne==4&&xn(this),this.o&&!this.K&&(Ne==4?Pu(this.j,this):(this.o=!1,Ei(this)))}else ts(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,le(12)):(this.m=0,le(13)),xn(this),Pn(this)}}}catch{}finally{}};function cf(c){if(!Cu(c))return c.g.la();const m=Qt(c.g);if(m==="")return"";let v="";const w=m.length,j=oi(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return xn(c),Pn(c),"";c.h.i=new f.TextDecoder}for(let q=0;q<w;q++)c.h.h=!0,v+=c.h.i.decode(m[q],{stream:!(j&&q==w-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function Cu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Nu(c,m){var v=c.C,w=m.indexOf(`
`,v);return w==-1?Ht:(v=Number(m.substring(v,w)),isNaN(v)?xt:(w+=1,w+v>m.length?Ht:(m=m.slice(w,w+v),c.C=w+v,m)))}ii.prototype.cancel=function(){this.K=!0,xn(this)};function Ei(c){c.T=Date.now()+c.H,Oa(c,c.H)}function Oa(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=An(y(c.aa,c),m)}function wi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}ii.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Dr(this.i,this.B),this.M!=2&&(D(),le(17)),xn(this),this.m=2,Pn(this)):Oa(this,this.T-c)};function Pn(c){c.j.I==0||c.K||Pu(c.j,c)}function xn(c){wi(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Cr(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function Si(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||xi(v.h,c))){if(!c.L&&xi(v.h,c)&&v.I==3){try{var w=v.Ba.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)za(v),Ls(v);else break e;Br(v),le(18)}}else v.xa=j[1],0<v.xa-v.K&&j[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=An(y(v.Va,v),6e3));Ai(v.h)<=1&&v.ta&&(v.ta=void 0)}else Oi(v,11)}else if((c.L||v.g==c)&&za(v),!R(m))for(j=v.Ba.g.parse(m),m=0;m<j.length;m++){let Ke=j[m];const ft=Ke[0];if(!(ft<=v.K))if(v.K=ft,Ke=Ke[1],v.I==2)if(Ke[0]=="c"){v.M=Ke[1],v.ba=Ke[2];const qn=Ke[3];qn!=null&&(v.ka=qn,v.j.info("VER="+v.ka));const Mi=Ke[4];Mi!=null&&(v.za=Mi,v.j.info("SVER="+v.za));const li=Ke[5];li!=null&&typeof li=="number"&&li>0&&(w=1.5*li,v.O=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const ui=c.g;if(ui){const qr=ui.g?ui.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qr){var q=w.h;q.g||qr.indexOf("spdy")==-1&&qr.indexOf("quic")==-1&&qr.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Jo(q,q.h),q.h=null))}if(w.G){const Ba=ui.g?ui.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(w.wa=Ba,$e(w.J,w.G,Ba))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),w=v;var se=c;if(w.na=qu(w,w.L?w.ba:null,w.W),se.L){Zo(w.h,se);var Ne=se,Tt=w.O;Tt&&(Ne.H=Tt),Ne.D&&(wi(Ne),Ei(Ne)),w.g=se}else Lu(w);v.i.length>0&&Di(v)}else Ke[0]!="stop"&&Ke[0]!="close"||Oi(v,7);else v.I==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?Oi(v,7):ol(v):Ke[0]!="noop"&&v.l&&v.l.qa(Ke),v.A=0)}}D(4)}catch{}}var Rt=class{constructor(c,m){this.g=c,this.map=m}};function Xo(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $o(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ai(c){return c.h?1:c.g?c.g.size:0}function xi(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Jo(c,m){c.g?c.g.add(m):c.h=m}function Zo(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Xo.prototype.cancel=function(){if(this.i=Wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Wo(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return F(c.i)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ma(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const w=c[v].indexOf("=");let j,q=null;w>=0?(j=c[v].substring(0,w),q=c[v].substring(w+1)):j=c[v],m(j,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Rn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof Rn?(this.l=c.l,Ft(this,c.j),this.o=c.o,this.g=c.g,Ns(this,c.u),this.h=c.h,el(this,Vu(c.i)),this.m=c.m):c&&(m=String(c).match(Du))?(this.l=!1,Ft(this,m[1]||"",!0),this.o=Ri(m[2]||""),this.g=Ri(m[3]||"",!0),Ns(this,m[4]),this.h=Ri(m[5]||"",!0),el(this,m[6]||"",!0),this.m=Ri(m[7]||"")):(this.l=!1,this.i=new Os(null,this.l))}Rn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(Vr(m,ka,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Vr(m,ka,!0),"@"),c.push(Wi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Vr(v,v.charAt(0)=="/"?tl:Ou,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Vr(v,Mu)),c.join("")},Rn.prototype.resolve=function(c){const m=It(this);let v=!!c.j;v?Ft(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var w=c.h;if(v)Ns(m,c.u);else if(v=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var j=m.h.lastIndexOf("/");j!=-1&&(w=m.h.slice(0,j+1)+w)}if(j=w,j==".."||j==".")w="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){w=j.lastIndexOf("/",0)==0,j=j.split("/");const q=[];for(let se=0;se<j.length;){const Ne=j[se++];Ne=="."?w&&se==j.length&&q.push(""):Ne==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),w&&se==j.length&&q.push("")):(q.push(Ne),w=!0)}w=q.join("/")}else w=j}return v?m.h=w:v=c.i.toString()!=="",v?el(m,Vu(c.i)):v=!!c.m,v&&(m.m=c.m),m};function It(c){return new Rn(c)}function Ft(c,m,v){c.j=v?Ri(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Ns(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function el(c,m,v){m instanceof Os?(c.i=m,Ua(c.i,c.l)):(v||(m=Vr(m,Ds)),c.i=new Os(m,c.l))}function $e(c,m,v){c.i.set(m,v)}function kr(c){return $e(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ri(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Vr(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,dn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function dn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ka=/[#\/\?@]/g,Ou=/[#\?:]/g,tl=/[#\?]/g,Ds=/[#\?@]/g,Mu=/#/g;function Os(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function mn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ma(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}s=Os.prototype,s.add=function(c,m){mn(this),this.i=null,c=Ms(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function ku(c,m){mn(c),m=Ms(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function nl(c,m){return mn(c),m=Ms(c,m),c.g.has(m)}s.forEach=function(c,m){mn(this),this.g.forEach(function(v,w){v.forEach(function(j){c.call(m,j,w,this)},this)},this)};function il(c,m){mn(c);let v=[];if(typeof m=="string")nl(c,m)&&(v=v.concat(c.g.get(Ms(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}s.set=function(c,m){return mn(this),this.i=null,c=Ms(this,c),nl(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},s.get=function(c,m){return c?(c=il(this,c),c.length>0?String(c[0]):m):m};function Va(c,m,v){ku(c,m),v.length>0&&(c.i=null,c.g.set(Ms(c,m),F(v)),c.h+=v.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let w=0;w<m.length;w++){var v=m[w];const j=Wi(v);v=il(this,v);for(let q=0;q<v.length;q++){let se=j;v[q]!==""&&(se+="="+Wi(v[q])),c.push(se)}}return this.i=c.join("&")};function Vu(c){const m=new Os;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function Ms(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Ua(c,m){m&&!c.j&&(mn(c),c.i=null,c.g.forEach(function(v,w){const j=w.toLowerCase();w!=j&&(ku(this,w),Va(this,j,v))},c)),c.j=m}function ri(c,m){const v=new fn;if(f.Image){const w=new Image;w.onload=E(zn,v,"TestLoadImage: loaded",!0,m,w),w.onerror=E(zn,v,"TestLoadImage: error",!1,m,w),w.onabort=E(zn,v,"TestLoadImage: abort",!1,m,w),w.ontimeout=E(zn,v,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else m(!1)}function sl(c,m){const v=new fn,w=new AbortController,j=setTimeout(()=>{w.abort(),zn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:w.signal}).then(q=>{clearTimeout(j),q.ok?zn(v,"TestPingServer: ok",!0,m):zn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),zn(v,"TestPingServer: error",!1,m)})}function zn(c,m,v,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(v)}catch{}}function ks(){this.g=new Ra}function Ii(c){this.i=c.Sb||null,this.h=c.ab||!1}S(Ii,Ia),Ii.prototype.g=function(){return new Ur(this.i,this.h)};function Ur(c,m){mt.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ur,mt),s=Ur.prototype,s.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,ai(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;La(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function La(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Vs(this):ai(this),this.readyState==3&&La(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,Vs(this))},s.Na=function(c){this.g&&(this.response=c,Vs(this))},s.ga=function(){this.g&&Vs(this)};function Vs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ai(c)}s.setRequestHeader=function(c,m){this.A.append(c,m)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function ai(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Bn(c){let m="";return Se(c,function(v,w){m+=w,m+=":",m+=v,m+=`\r
`}),m}function Lr(c,m,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=Bn(v),typeof c=="string"?v!=null&&Wi(v):$e(c,m,v))}function We(c){mt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(We,mt);var Ci=/^https?$/i,rl=["POST","PUT"];s=We.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,m,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qo.g(),this.g.onreadystatechange=V(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){jr(this,q);return}if(c=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)v.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const q of w.keys())v.set(q,w.get(q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),j=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(rl,m,void 0)>=0)||w||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,se]of v)this.g.setRequestHeader(q,se);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(q){jr(this,q)}};function jr(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,al(c),es(c)}function al(c){c.A||(c.A=!0,rt(c,"complete"),rt(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,rt(this,"complete"),rt(this,"abort"),es(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),es(this,!0)),We.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Pr(this):this.Xa())},s.Xa=function(){Pr(this)};function Pr(c){if(c.h&&typeof u<"u"){if(c.v&&oi(c)==4)setTimeout(c.Ca.bind(c),0);else if(rt(c,"readystatechange"),oi(c)==4){c.h=!1;try{const q=c.ca();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var w;if(w=q===0){let se=String(c.D).match(Du)[1]||null;!se&&f.self&&f.self.location&&(se=f.self.location.protocol.slice(0,-1)),w=!Ci.test(se?se.toLowerCase():"")}v=w}if(v)rt(c,"complete"),rt(c,"success");else{c.o=6;try{var j=oi(c)>2?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.ca()+"]",al(c)}}finally{es(c)}}}}function es(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||rt(c,"ready");try{v.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function oi(c){return c.g?c.g.readyState:0}s.ca=function(){try{return oi(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Ko(m)}};function Qt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ts(c){const m={};c=(c.g&&oi(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(R(c[w]))continue;var v=Iu(c[w]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[j]||[];m[j]=q,q.push(v)}ke(m,function(w){return w.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ni(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Us(c){this.za=0,this.i=[],this.j=new fn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ni("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ni("baseRetryDelayMs",5e3,c),this.Za=Ni("retryDelaySeedMs",1e4,c),this.Ta=Ni("forwardChannelMaxRetries",2,c),this.va=Ni("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Xo(c&&c.concurrentRequestLimit),this.Ba=new ks,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Us.prototype,s.ka=8,s.I=1,s.connect=function(c,m,v,w){le(0),this.W=c,this.H=m||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.J=qu(this,null,this.W),Di(this)};function ol(c){if(ja(c),c.I==3){var m=c.V++,v=It(c.J);if($e(v,"SID",c.M),$e(v,"RID",m),$e(v,"TYPE","terminate"),zr(c,v),m=new ii(c,c.j,m),m.M=2,m.A=kr(It(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=Hu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Ei(m)}Bu(c)}function Ls(c){c.g&&(ul(c),c.g.cancel(),c.g=null)}function ja(c){Ls(c),c.v&&(f.clearTimeout(c.v),c.v=null),za(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Di(c){if(!$o(c.h)&&!c.m){c.m=!0;var m=c.Ea;we||A(),ge||(we(),ge=!0),I.add(m,c),c.D=0}}function Pa(c,m){return Ai(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=An(y(c.Ea,c,m),zu(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const j=new ii(this,this.j,c);let q=this.o;if(this.U&&(q?(q=M(q),ne(q,this.U)):q=this.U),this.u!==null||this.R||(j.J=q,q=null),this.S)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,m>4096){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Uu(this,j,m),v=It(this.J),$e(v,"RID",c),$e(v,"CVER",22),this.G&&$e(v,"X-HTTP-Session-Id",this.G),zr(this,v),q&&(this.R?m="headers="+Wi(Bn(q))+"&"+m:this.u&&Lr(v,this.u,q)),Jo(this.h,j),this.Ra&&$e(v,"TYPE","init"),this.S?($e(v,"$req",m),$e(v,"SID","null"),j.U=!0,Ti(j,v,null)):Ti(j,v,m),this.I=2}}else this.I==3&&(c?ll(this,c):this.i.length==0||$o(this.h)||ll(this))};function ll(c,m){var v;m?v=m.l:v=c.V++;const w=It(c.J);$e(w,"SID",c.M),$e(w,"RID",v),$e(w,"AID",c.K),zr(c,w),c.u&&c.o&&Lr(w,c.u,c.o),v=new ii(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=Uu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Jo(c.h,v),Ti(v,w,m)}function zr(c,m){c.H&&Se(c.H,function(v,w){$e(m,w,v)}),c.l&&Se({},function(v,w){$e(m,w,v)})}function Uu(c,m,v){v=Math.min(c.i.length,v);const w=c.l?y(c.l.Ka,c.l,c):null;e:{var j=c.i;let Ne=-1;for(;;){const Tt=["count="+v];Ne==-1?v>0?(Ne=j[0].g,Tt.push("ofs="+Ne)):Ne=0:Tt.push("ofs="+Ne);let Ke=!0;for(let ft=0;ft<v;ft++){var q=j[ft].g;const qn=j[ft].map;if(q-=Ne,q<0)Ne=Math.max(0,j[ft].g-100),Ke=!1;else try{q="req"+q+"_"||"";try{var se=qn instanceof Map?qn:Object.entries(qn);for(const[Mi,li]of se){let ui=li;p(li)&&(ui=_i(li)),Tt.push(q+Mi+"="+encodeURIComponent(ui))}}catch(Mi){throw Tt.push(q+"type="+encodeURIComponent("_badmap")),Mi}}catch{w&&w(qn)}}if(Ke){se=Tt.join("&");break e}}se=void 0}return c=c.i.splice(0,v),m.G=c,se}function Lu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;we||A(),ge||(we(),ge=!0),I.add(m,c),c.A=0}}function Br(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=An(y(c.Da,c),zu(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,ju(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=An(y(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,le(10),Ls(this),ju(this))};function ul(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function ju(c){c.g=new ii(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=It(c.na);$e(m,"RID","rpc"),$e(m,"SID",c.M),$e(m,"AID",c.K),$e(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&$e(m,"TO",c.ia),$e(m,"TYPE","xmlhttp"),zr(c,m),c.u&&c.o&&Lr(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=kr(It(m)),v.u=null,v.R=!0,Da(v,c)}s.Va=function(){this.C!=null&&(this.C=null,Ls(this),Br(this),le(19))};function za(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Pu(c,m){var v=null;if(c.g==m){za(c),ul(c),c.g=null;var w=2}else if(xi(c.h,m))v=m.G,Zo(c.h,m),w=1;else return;if(c.I!=0){if(m.o)if(w==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var j=c.D;w=Is(),rt(w,new Ut(w,v)),Di(c)}else Lu(c);else if(j=m.m,j==3||j==0&&m.X>0||!(w==1&&Pa(c,m)||w==2&&Br(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),j){case 1:Oi(c,5);break;case 4:Oi(c,10);break;case 3:Oi(c,6);break;default:Oi(c,2)}}}function zu(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function Oi(c,m){if(c.j.info("Error code "+m),m==2){var v=y(c.bb,c),w=c.Ua;const j=!w;w=new Rn(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ft(w,"https"),kr(w),j?ri(w.toString(),v):sl(w.toString(),v)}else le(2);c.I=0,c.l&&c.l.pa(m),Bu(c),ja(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function Bu(c){if(c.I=0,c.ja=[],c.l){const m=Wo(c.h);(m.length!=0||c.i.length!=0)&&(W(c.ja,m),W(c.ja,c.i),c.h.i.length=0,F(c.i),c.i.length=0),c.l.oa()}}function qu(c,m,v){var w=v instanceof Rn?It(v):new Rn(v);if(w.g!="")m&&(w.g=m+"."+w.g),Ns(w,w.u);else{var j=f.location;w=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;const q=new Rn(null);w&&Ft(q,w),m&&(q.g=m),j&&Ns(q,j),v&&(q.h=v),w=q}return v=c.G,m=c.wa,v&&m&&$e(w,v,m),$e(w,"VER",c.ka),zr(c,w),w}function Hu(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new We(new Ii({ab:v})):new We(c.ma),m.Fa(c.L),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fu(){}s=Fu.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function js(){}js.prototype.g=function(c,m){return new ln(c,m)};function ln(c,m){mt.call(this),this.g=new Us(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!R(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ns(this)}S(ln,mt),ln.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){ol(this.g)},ln.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=_i(c),c=v);m.i.push(new Rt(m.Ya++,c)),m.I==3&&Di(m)},ln.prototype.N=function(){this.g.l=null,delete this.j,ol(this.g),delete this.g,ln.Z.N.call(this)};function Gu(c){Vt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const v in m){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}S(Gu,Vt);function Ku(){At.call(this),this.status=1}S(Ku,At);function ns(c){this.g=c}S(ns,Fu),ns.prototype.ra=function(){rt(this.g,"a")},ns.prototype.qa=function(c){rt(this.g,new Gu(c))},ns.prototype.pa=function(c){rt(this.g,new Ku)},ns.prototype.oa=function(){rt(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,Kb=function(){return new js},Gb=function(){return Is()},Fb=pt,Um={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,ah=Or,Yo.COMPLETE="complete",Hb=Yo,Ca.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",mt.prototype.listen=mt.prototype.J,$l=Ca,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,qb=We}).apply(typeof Jc<"u"?Jc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po="12.12.0";function Px(s){Po=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new zh("@firebase/firestore");function vo(){return da.logLevel}function ae(s,...e){if(da.logLevel<=Pe.DEBUG){const n=e.map(op);da.debug(`Firestore (${Po}): ${s}`,...n)}}function Es(s,...e){if(da.logLevel<=Pe.ERROR){const n=e.map(op);da.error(`Firestore (${Po}): ${s}`,...n)}}function ma(s,...e){if(da.logLevel<=Pe.WARN){const n=e.map(op);da.warn(`Firestore (${Po}): ${s}`,...n)}}function op(s){if(typeof s=="string")return s;try{return(function(n){return JSON.stringify(n)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(s,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Yb(s,r,n)}function Yb(s,e,n){let r=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Es(r),new Error(r)}function Qe(s,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,s||Yb(e,o,r)}function Ie(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends ei{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(rn.UNAUTHENTICATED)))}shutdown(){}}class Bx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class qx{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Qe(this.o===void 0,42304);let r=this.i;const o=g=>this.i!==r?(r=this.i,n(g)):Promise.resolve();let u=new la;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new la,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new la)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string",31837,{l:r}),new Qb(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new rn(e)}}class Hx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Fx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Hx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(rn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,di(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Qe(this.o===void 0,3512);const r=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>r(u)))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<s;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=Kx(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<n&&(r+=e.charAt(o[u]%62))}return r}}function ze(s,e){return s<e?-1:s>e?1:0}function Lm(s,e){const n=Math.min(s.length,e.length);for(let r=0;r<n;r++){const o=s.charAt(r),u=e.charAt(r);if(o!==u)return gm(o)===gm(u)?ze(o,u):gm(o)?1:-1}return ze(s.length,e.length)}const Yx=55296,Qx=57343;function gm(s){const e=s.charCodeAt(0);return e>=Yx&&e<=Qx}function Mo(s,e,n){return s.length===e.length&&s.every(((r,o)=>n(r,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="__name__";class ji{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const u=ji.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return ze(e.length,n.length)}static compareSegments(e,n){const r=ji.isNumericId(e),o=ji.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?ji.extractNumericId(e).compare(ji.extractNumericId(n)):Lm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class lt extends ji{construct(e,n,r){return new lt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new pe(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((o=>o.length>0)))}return new lt(n)}static emptyPath(){return new lt([])}}const Xx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends ji{construct(e,n,r){return new en(e,n,r)}static isValidIdentifier(e){return Xx.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xv}static keyField(){return new en([Xv])}static fromServerFormat(e){const n=[];let r="",o=0;const u=()=>{if(r.length===0)throw new pe(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new pe(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new pe(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=g,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(r+=p,o++):(u(),o++)}if(u(),f)throw new pe(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(n)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(lt.fromString(e))}static fromName(e){return new _e(lt.fromString(e).popFirst(5))}static empty(){return new _e(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return lt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(s,e,n){if(!n)throw new pe(Z.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function $x(s,e,n,r){if(e===!0&&r===!0)throw new pe(Z.INVALID_ARGUMENT,`${s} and ${n} cannot be used together.`)}function $v(s){if(!_e.isDocumentKey(s))throw new pe(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Jv(s){if(_e.isDocumentKey(s))throw new pe(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function $b(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function up(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":Ee(12329,{type:typeof s})}function ua(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new pe(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=up(s);throw new pe(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(s,e){const n={typeString:s};return e&&(n.value=e),n}function _u(s,e){if(!$b(s))throw new pe(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const o=e[r].typeString,u="value"in e[r]?{value:e[r].value}:void 0;if(!(r in s)){n=`JSON missing required field: '${r}'`;break}const f=s[r];if(o&&typeof f!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${r}' field to equal '${u.value}'`;break}}if(n)throw new pe(Z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=-62135596800,Wv=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Wv);return new ut(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new pe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new pe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zv)throw new pe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wv}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_u(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:kt("string",ut._jsonSchemaVersion),seconds:kt("number"),nanoseconds:kt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new ut(0,0))}static max(){return new xe(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-1;function Jx(s,e){const n=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,o=xe.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Tr(o,_e.empty(),e)}function Zx(s){return new Tr(s.readTime,s.key,uu)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(xe.min(),_e.empty(),uu)}static max(){return new Tr(xe.max(),_e.empty(),uu)}}function Wx(s,e){let n=s.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(s.documentKey,e.documentKey),n!==0?n:ze(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class t2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(s){if(s.code!==Z.FAILED_PRECONDITION||s.message!==e2)throw s;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J(((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(r,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):J.reject(n)}static resolve(e){return new J(((n,r)=>{n(e)}))}static reject(e){return new J(((n,r)=>{r(e)}))}static waitFor(e){return new J(((n,r)=>{let o=0,u=0,f=!1;e.forEach((p=>{++o,p.next((()=>{++u,f&&u===o&&n()}),(g=>r(g)))})),f=!0,u===o&&n()}))}static or(e){let n=J.resolve(!1);for(const r of e)n=n.next((o=>o?J.resolve(o):r()));return n}static forEach(e,n){const r=[];return e.forEach(((o,u)=>{r.push(n.call(this,o,u))})),this.waitFor(r)}static mapArray(e,n){return new J(((r,o)=>{const u=e.length,f=new Array(u);let p=0;for(let g=0;g<u;g++){const y=g;n(e[y]).next((E=>{f[y]=E,++p,p===u&&r(f)}),(E=>o(E)))}}))}static doWhile(e,n){return new J(((r,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):r()};u()}))}}function n2(s){const e=s.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bo(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=-1;function Hh(s){return s==null}function _h(s){return s===0&&1/s==-1/0}function i2(s){return typeof s=="number"&&Number.isInteger(s)&&!_h(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="";function s2(s){let e="";for(let n=0;n<s.length;n++)e.length>0&&(e=e0(e)),e=r2(s.get(n),e);return e0(e)}function r2(s,e){let n=e;const r=s.length;for(let o=0;o<r;o++){const u=s.charAt(o);switch(u){case"\0":n+="";break;case Jb:n+="";break;default:n+=u}}return n}function e0(s){return s+Jb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(s){let e=0;for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&e++;return e}function wa(s,e){for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&e(n,s[n])}function Zb(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Wt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zc(this.root,e,this.comparator,!0)}}class Zc{constructor(e,n,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?r(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,n,r,o,u){this.key=e,this.value=n,this.color=r??Wt.RED,this.left=o??Wt.EMPTY,this.right=u??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,o,u){return new Wt(e??this.key,n??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const u=r(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,r),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Wt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,n,r,o,u){return this}insert(e,n,r){return new Wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n0(this.data.getIterator())}getIteratorFrom(e){return new n0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new zt(this.comparator);return n.data=e,n}}class n0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new mi([])}unionWith(e){let n=new zt(en.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Wb("Invalid base64 string: "+u):u}})(e);return new tn(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const a2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(s){if(Qe(!!s,39018),typeof s=="string"){let e=0;const n=a2.exec(s);if(Qe(!!n,46558,{timestamp:s}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:St(s.seconds),nanos:St(s.nanos)}}function St(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function wr(s){return typeof s=="string"?tn.fromBase64String(s):tn.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="server_timestamp",tT="__type__",nT="__previous_value__",iT="__local_write_time__";function hp(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[tT])==null?void 0:r.stringValue)===eT}function Fh(s){const e=s.mapValue.fields[nT];return hp(e)?Fh(e):e}function cu(s){const e=Er(s.mapValue.fields[iT].timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n,r,o,u,f,p,g,y,E,S){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E,this.apiKey=S}}const vh="(default)";class hu{constructor(e,n){this.projectId=e,this.database=n||vh}static empty(){return new hu("","")}get isDefaultDatabase(){return this.database===vh}isEqual(e){return e instanceof hu&&e.projectId===this.projectId&&e.database===this.database}}function l2(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new pe(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hu(s.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="__type__",u2="__max__",Wc={mapValue:{}},rT="__vector__",bh="value";function Sr(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?hp(s)?4:h2(s)?9007199254740991:c2(s)?10:11:Ee(28295,{value:s})}function Ki(s,e){if(s===e)return!0;const n=Sr(s);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return cu(s).isEqual(cu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Er(o.timestampValue),p=Er(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(o,u){return wr(o.bytesValue).isEqual(wr(u.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(o,u){return St(o.geoPointValue.latitude)===St(u.geoPointValue.latitude)&&St(o.geoPointValue.longitude)===St(u.geoPointValue.longitude)})(s,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return St(o.integerValue)===St(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=St(o.doubleValue),p=St(u.doubleValue);return f===p?_h(f)===_h(p):isNaN(f)&&isNaN(p)}return!1})(s,e);case 9:return Mo(s.arrayValue.values||[],e.arrayValue.values||[],Ki);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(t0(f)!==t0(p))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(p[g]===void 0||!Ki(f[g],p[g])))return!1;return!0})(s,e);default:return Ee(52216,{left:s})}}function fu(s,e){return(s.values||[]).find((n=>Ki(n,e)))!==void 0}function ko(s,e){if(s===e)return 0;const n=Sr(s),r=Sr(e);if(n!==r)return ze(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ze(s.booleanValue,e.booleanValue);case 2:return(function(u,f){const p=St(u.integerValue||u.doubleValue),g=St(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(s,e);case 3:return i0(s.timestampValue,e.timestampValue);case 4:return i0(cu(s),cu(e));case 5:return Lm(s.stringValue,e.stringValue);case 6:return(function(u,f){const p=wr(u),g=wr(f);return p.compareTo(g)})(s.bytesValue,e.bytesValue);case 7:return(function(u,f){const p=u.split("/"),g=f.split("/");for(let y=0;y<p.length&&y<g.length;y++){const E=ze(p[y],g[y]);if(E!==0)return E}return ze(p.length,g.length)})(s.referenceValue,e.referenceValue);case 8:return(function(u,f){const p=ze(St(u.latitude),St(f.latitude));return p!==0?p:ze(St(u.longitude),St(f.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return s0(s.arrayValue,e.arrayValue);case 10:return(function(u,f){var V,F,W,ie;const p=u.fields||{},g=f.fields||{},y=(V=p[bh])==null?void 0:V.arrayValue,E=(F=g[bh])==null?void 0:F.arrayValue,S=ze(((W=y==null?void 0:y.values)==null?void 0:W.length)||0,((ie=E==null?void 0:E.values)==null?void 0:ie.length)||0);return S!==0?S:s0(y,E)})(s.mapValue,e.mapValue);case 11:return(function(u,f){if(u===Wc.mapValue&&f===Wc.mapValue)return 0;if(u===Wc.mapValue)return 1;if(f===Wc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),y=f.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const V=Lm(g[S],E[S]);if(V!==0)return V;const F=ko(p[g[S]],y[E[S]]);if(F!==0)return F}return ze(g.length,E.length)})(s.mapValue,e.mapValue);default:throw Ee(23264,{he:n})}}function i0(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return ze(s,e);const n=Er(s),r=Er(e),o=ze(n.seconds,r.seconds);return o!==0?o:ze(n.nanos,r.nanos)}function s0(s,e){const n=s.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const u=ko(n[o],r[o]);if(u)return u}return ze(n.length,r.length)}function Vo(s){return jm(s)}function jm(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(n){return wr(n).toBase64()})(s.bytesValue):"referenceValue"in s?(function(n){return _e.fromName(n).toString()})(s.referenceValue):"geoPointValue"in s?(function(n){return`geo(${n.latitude},${n.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(n){let r="[",o=!0;for(const u of n.values||[])o?o=!1:r+=",",r+=jm(u);return r+"]"})(s.arrayValue):"mapValue"in s?(function(n){const r=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of r)u?u=!1:o+=",",o+=`${f}:${jm(n.fields[f])}`;return o+"}"})(s.mapValue):Ee(61005,{value:s})}function oh(s){switch(Sr(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fh(s);return e?16+oh(e):16;case 5:return 2*s.stringValue.length;case 6:return wr(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,u)=>o+oh(u)),0)})(s.arrayValue);case 10:case 11:return(function(r){let o=0;return wa(r.fields,((u,f)=>{o+=u.length+oh(f)})),o})(s.mapValue);default:throw Ee(13486,{value:s})}}function Pm(s){return!!s&&"integerValue"in s}function fp(s){return!!s&&"arrayValue"in s}function r0(s){return!!s&&"nullValue"in s}function a0(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function lh(s){return!!s&&"mapValue"in s}function c2(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[sT])==null?void 0:r.stringValue)===rT}function eu(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return wa(s.mapValue.fields,((n,r)=>e.mapValue.fields[n]=eu(r))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(s.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eu(s.arrayValue.values[n]);return e}return{...s}}function h2(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===u2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.value=e}static empty(){return new Jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eu(n)}setAll(e){let n=en.emptyPath(),r={},o=[];e.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,r,o),r={},o=[],n=p.popLast()}f?r[p.lastSegment()]=eu(f):o.push(p.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,r,o)}delete(e){const n=this.field(e.popLast());lh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ki(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=n.mapValue.fields[e.get(r)];lh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,r){wa(n,((o,u)=>e[o]=u));for(const o of r)delete e[o]}clone(){return new Jn(eu(this.value))}}function aT(s){const e=[];return wa(s.fields,((n,r)=>{const o=new en([n]);if(lh(r)){const u=aT(r.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new mi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,r,o,u,f,p){this.key=e,this.documentType=n,this.version=r,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(e){return new an(e,0,xe.min(),xe.min(),xe.min(),Jn.empty(),0)}static newFoundDocument(e,n,r,o){return new an(e,1,n,xe.min(),r,o,0)}static newNoDocument(e,n){return new an(e,2,n,xe.min(),xe.min(),Jn.empty(),0)}static newUnknownDocument(e,n){return new an(e,3,n,xe.min(),xe.min(),Jn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n){this.position=e,this.inclusive=n}}function o0(s,e,n){let r=0;for(let o=0;o<s.position.length;o++){const u=e[o],f=s.position[o];if(u.field.isKeyField()?r=_e.comparator(_e.fromName(f.referenceValue),n.key):r=ko(f,n.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function l0(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let n=0;n<s.position.length;n++)if(!Ki(s.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n="asc"){this.field=e,this.dir=n}}function f2(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{}class jt extends oT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new m2(e,n,r):n==="array-contains"?new y2(e,r):n==="in"?new _2(e,r):n==="not-in"?new v2(e,r):n==="array-contains-any"?new b2(e,r):new jt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new p2(e,r):new g2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ko(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(ko(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yi extends oT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Yi(e,n)}matches(e){return lT(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lT(s){return s.op==="and"}function uT(s){return d2(s)&&lT(s)}function d2(s){for(const e of s.filters)if(e instanceof Yi)return!1;return!0}function zm(s){if(s instanceof jt)return s.field.canonicalString()+s.op.toString()+Vo(s.value);if(uT(s))return s.filters.map((e=>zm(e))).join(",");{const e=s.filters.map((n=>zm(n))).join(",");return`${s.op}(${e})`}}function cT(s,e){return s instanceof jt?(function(r,o){return o instanceof jt&&r.op===o.op&&r.field.isEqual(o.field)&&Ki(r.value,o.value)})(s,e):s instanceof Yi?(function(r,o){return o instanceof Yi&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((u,f,p)=>u&&cT(f,o.filters[p])),!0):!1})(s,e):void Ee(19439)}function hT(s){return s instanceof jt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Vo(n.value)}`})(s):s instanceof Yi?(function(n){return n.op.toString()+" {"+n.getFilters().map(hT).join(" ,")+"}"})(s):"Filter"}class m2 extends jt{constructor(e,n,r){super(e,n,r),this.key=_e.fromName(r.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class p2 extends jt{constructor(e,n){super(e,"in",n),this.keys=fT("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class g2 extends jt{constructor(e,n){super(e,"not-in",n),this.keys=fT("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function fT(s,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class y2 extends jt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fp(n)&&fu(n.arrayValue,this.value)}}class _2 extends jt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fu(this.value.arrayValue,n)}}class v2 extends jt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fu(this.value.arrayValue,n)}}class b2 extends jt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>fu(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n=null,r=[],o=[],u=null,f=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function u0(s,e=null,n=[],r=[],o=null,u=null,f=null){return new T2(s,e,n,r,o,u,f)}function dp(s){const e=Ie(s);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>zm(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(u){return u.field.canonicalString()+u.dir})(r))).join(","),Hh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Vo(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Vo(r))).join(",")),e.Te=n}return e.Te}function mp(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<s.orderBy.length;n++)if(!f2(s.orderBy[n],e.orderBy[n]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let n=0;n<s.filters.length;n++)if(!cT(s.filters[n],e.filters[n]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!l0(s.startAt,e.startAt)&&l0(s.endAt,e.endAt)}function Bm(s){return _e.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n=null,r=[],o=[],u=null,f="F",p=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function E2(s,e,n,r,o,u,f,p){return new Gh(s,e,n,r,o,u,f,p)}function pp(s){return new Gh(s)}function c0(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function w2(s){return _e.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function S2(s){return s.collectionGroup!==null}function tu(s){const e=Ie(s);if(e.Ee===null){e.Ee=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),n.add(u.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new zt(en.comparator);return f.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Eh(u,r))})),n.has(en.keyField().canonicalString())||e.Ee.push(new Eh(en.keyField(),r))}return e.Ee}function zi(s){const e=Ie(s);return e.Ie||(e.Ie=A2(e,tu(s))),e.Ie}function A2(s,e){if(s.limitType==="F")return u0(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Eh(o.field,u)}));const n=s.endAt?new Th(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new Th(s.startAt.position,s.startAt.inclusive):null;return u0(s.path,s.collectionGroup,e,s.filters,s.limit,n,r)}}function qm(s,e,n){return new Gh(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,n,s.startAt,s.endAt)}function Kh(s,e){return mp(zi(s),zi(e))&&s.limitType===e.limitType}function dT(s){return`${dp(zi(s))}|lt:${s.limitType}`}function bo(s){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((o=>hT(o))).join(", ")}]`),Hh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((o=>Vo(o))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((o=>Vo(o))).join(",")),`Target(${r})`})(zi(s))}; limitType=${s.limitType})`}function Yh(s,e){return e.isFoundDocument()&&(function(r,o){const u=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):_e.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)})(s,e)&&(function(r,o){for(const u of tu(r))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(s,e)&&(function(r,o){for(const u of r.filters)if(!u.matches(o))return!1;return!0})(s,e)&&(function(r,o){return!(r.startAt&&!(function(f,p,g){const y=o0(f,p,g);return f.inclusive?y<=0:y<0})(r.startAt,tu(r),o)||r.endAt&&!(function(f,p,g){const y=o0(f,p,g);return f.inclusive?y>=0:y>0})(r.endAt,tu(r),o))})(s,e)}function x2(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function mT(s){return(e,n)=>{let r=!1;for(const o of tu(s)){const u=R2(o,e,n);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function R2(s,e,n){const r=s.field.isKeyField()?_e.comparator(e.key,n.key):(function(u,f,p){const g=f.data.field(u),y=p.data.field(u);return g!==null&&y!==null?ko(g,y):Ee(42886)})(s.field,e,n);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return Ee(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){wa(this.inner,((n,r)=>{for(const[o,u]of r)e(o,u)}))}isEmpty(){return Zb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=new gt(_e.comparator);function ws(){return I2}const pT=new gt(_e.comparator);function Jl(...s){let e=pT;for(const n of s)e=e.insert(n.key,n);return e}function gT(s){let e=pT;return s.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function aa(){return nu()}function yT(){return nu()}function nu(){return new Sa((s=>s.toString()),((s,e)=>s.isEqual(e)))}const C2=new gt(_e.comparator),N2=new zt(_e.comparator);function Be(...s){let e=N2;for(const n of s)e=e.add(n);return e}const D2=new zt(ze);function O2(){return D2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_h(e)?"-0":e}}function _T(s){return{integerValue:""+s}}function M2(s,e){return i2(e)?_T(e):gp(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this._=void 0}}function k2(s,e,n){return s instanceof wh?(function(o,u){const f={fields:{[tT]:{stringValue:eT},[iT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&hp(u)&&(u=Fh(u)),u&&(f.fields[nT]=u),{mapValue:f}})(n,e):s instanceof du?bT(s,e):s instanceof mu?TT(s,e):(function(o,u){const f=vT(o,u),p=h0(f)+h0(o.Ae);return Pm(f)&&Pm(o.Ae)?_T(p):gp(o.serializer,p)})(s,e)}function V2(s,e,n){return s instanceof du?bT(s,e):s instanceof mu?TT(s,e):n}function vT(s,e){return s instanceof Sh?(function(r){return Pm(r)||(function(u){return!!u&&"doubleValue"in u})(r)})(e)?e:{integerValue:0}:null}class wh extends Qh{}class du extends Qh{constructor(e){super(),this.elements=e}}function bT(s,e){const n=ET(e);for(const r of s.elements)n.some((o=>Ki(o,r)))||n.push(r);return{arrayValue:{values:n}}}class mu extends Qh{constructor(e){super(),this.elements=e}}function TT(s,e){let n=ET(e);for(const r of s.elements)n=n.filter((o=>!Ki(o,r)));return{arrayValue:{values:n}}}class Sh extends Qh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function h0(s){return St(s.integerValue||s.doubleValue)}function ET(s){return fp(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function U2(s,e){return s.field.isEqual(e.field)&&(function(r,o){return r instanceof du&&o instanceof du||r instanceof mu&&o instanceof mu?Mo(r.elements,o.elements,Ki):r instanceof Sh&&o instanceof Sh?Ki(r.Ae,o.Ae):r instanceof wh&&o instanceof wh})(s.transform,e.transform)}class L2{constructor(e,n){this.version=e,this.transformResults=n}}class Bi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bi}static exists(e){return new Bi(void 0,e)}static updateTime(e){return new Bi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uh(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Xh{}function wT(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new yp(s.key,Bi.none()):new vu(s.key,s.data,Bi.none());{const n=s.data,r=Jn.empty();let o=new zt(en.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?r.delete(u):r.set(u,f),o=o.add(u)}return new Aa(s.key,r,new mi(o.toArray()),Bi.none())}}function j2(s,e,n){s instanceof vu?(function(o,u,f){const p=o.value.clone(),g=d0(o.fieldTransforms,u,f.transformResults);p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(s,e,n):s instanceof Aa?(function(o,u,f){if(!uh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=d0(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(ST(o)),g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(s,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function iu(s,e,n,r){return s instanceof vu?(function(u,f,p,g){if(!uh(u.precondition,f))return p;const y=u.value.clone(),E=m0(u.fieldTransforms,g,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(s,e,n,r):s instanceof Aa?(function(u,f,p,g){if(!uh(u.precondition,f))return p;const y=m0(u.fieldTransforms,g,f),E=f.data;return E.setAll(ST(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(s,e,n,r):(function(u,f,p){return uh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(s,e,n)}function P2(s,e){let n=null;for(const r of s.fieldTransforms){const o=e.data.field(r.field),u=vT(r.transform,o||null);u!=null&&(n===null&&(n=Jn.empty()),n.set(r.field,u))}return n||null}function f0(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Mo(r,o,((u,f)=>U2(u,f)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class vu extends Xh{constructor(e,n,r,o=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Aa extends Xh{constructor(e,n,r,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function ST(s){const e=new Map;return s.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=s.data.field(n);e.set(n,r)}})),e}function d0(s,e,n){const r=new Map;Qe(s.length===n.length,32656,{Ve:n.length,de:s.length});for(let o=0;o<n.length;o++){const u=s[o],f=u.transform,p=e.data.field(u.field);r.set(u.field,V2(f,p,n[o]))}return r}function m0(s,e,n){const r=new Map;for(const o of s){const u=o.transform,f=n.data.field(o.field);r.set(o.field,k2(u,f,e))}return r}class yp extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z2 extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n,r,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&j2(u,e,r[o])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=iu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=iu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yT();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(o.key)?null:p;const g=wT(f,p);g!==null&&r.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(xe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Be())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,((n,r)=>f0(n,r)))&&Mo(this.baseMutations,e.baseMutations,((n,r)=>f0(n,r)))}}class _p{constructor(e,n,r,o){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(e,n,r){Qe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let o=(function(){return C2})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,r[f].version);return new _p(e,n,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,He;function F2(s){switch(s){case Z.OK:return Ee(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Ee(15467,{code:s})}}function AT(s){if(s===void 0)return Es("GRPC error has no .code"),Z.UNKNOWN;switch(s){case Mt.OK:return Z.OK;case Mt.CANCELLED:return Z.CANCELLED;case Mt.UNKNOWN:return Z.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return Z.INTERNAL;case Mt.UNAVAILABLE:return Z.UNAVAILABLE;case Mt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Mt.NOT_FOUND:return Z.NOT_FOUND;case Mt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Mt.ABORTED:return Z.ABORTED;case Mt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Mt.DATA_LOSS:return Z.DATA_LOSS;default:return Ee(39323,{code:s})}}(He=Mt||(Mt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=new _r([4294967295,4294967295],0);function p0(s){const e=G2().encode(s),n=new Bb;return n.update(e),new Uint8Array(n.digest())}function g0(s){const e=new DataView(s.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new _r([n,r],0),new _r([o,u],0)]}class vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zl(`Invalid padding: ${n}`);if(r<0)throw new Zl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let o=e.add(n.multiply(_r.fromNumber(r)));return o.compare(K2)===1&&(o=new _r([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=p0(e),[r,o]=g0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(r,o,u);if(!this.we(f))return!1}return!0}static create(e,n,r){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new vp(u,o,n);return r.forEach((p=>f.insert(p))),f}insert(e){if(this.ge===0)return;const n=p0(e),[r,o]=g0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(r,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const o=new Map;return o.set(e,bu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $h(xe.min(),o,new gt(ze),ws(),Be())}}class bu{constructor(e,n,r,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bu(r,n,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,o){this.be=e,this.removedTargetIds=n,this.key=r,this.De=o}}class xT{constructor(e,n){this.targetId=e,this.Ce=n}}class RT{constructor(e,n,r=tn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=o}}class y0{constructor(){this.ve=0,this.Fe=_0(),this.Me=tn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Be(),n=Be(),r=Be();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:Ee(38017,{changeType:u})}})),new bu(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=_0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Y2{constructor(e){this.Ge=e,this.ze=new Map,this.je=ws(),this.Je=eh(),this.He=eh(),this.Ze=new gt(ze)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,r=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Bm(u))if(r===0){const f=new _e(u.path);this.et(n,f,an.newNoDocument(f,xe.min()))}else Qe(r===1,20013,{expectedCount:r});else{const f=this._t(n);if(f!==r){const p=this.ut(e),g=p?this.ct(p,e,f):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:u=0}=n;let f,p;try{f=wr(r).toUint8Array()}catch(g){if(g instanceof Wb)return ma("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new vp(f,o,u)}catch(g){return ma(g instanceof Zl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let o=0;return r.forEach((u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(n,u,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const p=this.ot(f);if(p){if(u.current&&Bm(p.target)){const g=new _e(p.target.path);this.Et(g).has(f)||this.It(f,g)||this.et(f,g,an.newNoDocument(g,e))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let r=Be();this.He.forEach(((u,f)=>{let p=!0;f.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new $h(e,n,this.Ze,this.je,r);return this.je=ws(),this.Je=eh(),this.He=eh(),this.Ze=new gt(ze),o}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const o=this.nt(e);this.It(e,n)?o.Ke(n,1):o.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new y0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new zt(ze),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new zt(ze),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new y0),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function eh(){return new gt(_e.comparator)}function _0(){return new gt(_e.comparator)}const Q2={asc:"ASCENDING",desc:"DESCENDING"},X2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$2={and:"AND",or:"OR"};class J2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hm(s,e){return s.useProto3Json||Hh(e)?e:{value:e}}function Ah(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IT(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function Z2(s,e){return Ah(s,e.toTimestamp())}function qi(s){return Qe(!!s,49232),xe.fromTimestamp((function(n){const r=Er(n);return new ut(r.seconds,r.nanos)})(s))}function bp(s,e){return Fm(s,e).canonicalString()}function Fm(s,e){const n=(function(o){return new lt(["projects",o.projectId,"databases",o.database])})(s).child("documents");return e===void 0?n:n.child(e)}function CT(s){const e=lt.fromString(s);return Qe(kT(e),10190,{key:e.toString()}),e}function Gm(s,e){return bp(s.databaseId,e.path)}function ym(s,e){const n=CT(e);if(n.get(1)!==s.databaseId.projectId)throw new pe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+s.databaseId.projectId);if(n.get(3)!==s.databaseId.database)throw new pe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+s.databaseId.database);return new _e(DT(n))}function NT(s,e){return bp(s.databaseId,e)}function W2(s){const e=CT(s);return e.length===4?lt.emptyPath():DT(e)}function Km(s){return new lt(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function DT(s){return Qe(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function v0(s,e,n){return{name:Gm(s,e),fields:n.value.mapValue.fields}}function eR(s,e){let n;if("targetChange"in e){e.targetChange;const r=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,E){return y.useProto3Json?(Qe(E===void 0||typeof E=="string",58123),tn.fromBase64String(E||"")):(Qe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),tn.fromUint8Array(E||new Uint8Array))})(s,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&(function(y){const E=y.code===void 0?Z.UNKNOWN:AT(y.code);return new pe(E,y.message||"")})(f);n=new RT(r,o,u,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=ym(s,r.document.name),u=qi(r.document.updateTime),f=r.document.createTime?qi(r.document.createTime):xe.min(),p=new Jn({mapValue:{fields:r.document.fields}}),g=an.newFoundDocument(o,u,f,p),y=r.targetIds||[],E=r.removedTargetIds||[];n=new ch(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=ym(s,r.document),u=r.readTime?qi(r.readTime):xe.min(),f=an.newNoDocument(o,u),p=r.removedTargetIds||[];n=new ch([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=ym(s,r.document),u=r.removedTargetIds||[];n=new ch([],u,o,null)}else{if(!("filter"in e))return Ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:u}=r,f=new H2(o,u),p=r.targetId;n=new xT(p,f)}}return n}function tR(s,e){let n;if(e instanceof vu)n={update:v0(s,e.key,e.value)};else if(e instanceof yp)n={delete:Gm(s,e.key)};else if(e instanceof Aa)n={update:v0(s,e.key,e.data),updateMask:cR(e.fieldMask)};else{if(!(e instanceof z2))return Ee(16599,{dt:e.type});n={verify:Gm(s,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(u,f){const p=f.transform;if(p instanceof wh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof du)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof mu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Sh)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw Ee(20930,{transform:f.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:Z2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ee(27497)})(s,e.precondition)),n}function nR(s,e){return s&&s.length>0?(Qe(e!==void 0,14353),s.map((n=>(function(o,u){let f=o.updateTime?qi(o.updateTime):qi(u);return f.isEqual(xe.min())&&(f=qi(u)),new L2(f,o.transformResults||[])})(n,e)))):[]}function iR(s,e){return{documents:[NT(s,e.path)]}}function sR(s,e){const n={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NT(s,o);const u=(function(y){if(y.length!==0)return MT(Yi.create(y,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((E=>(function(V){return{field:To(V.field),direction:oR(V.dir)}})(E)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const p=Hm(s,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function rR(s){let e=W2(s.parent);const n=s.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Qe(r===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=(function(S){const V=OT(S);return V instanceof Yi&&uT(V)?V.getFilters():[V]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((V=>(function(W){return new Eh(Eo(W.field),(function(ee){switch(ee){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(V)))})(n.orderBy));let p=null;n.limit&&(p=(function(S){let V;return V=typeof S=="object"?S.value:S,Hh(V)?null:V})(n.limit));let g=null;n.startAt&&(g=(function(S){const V=!!S.before,F=S.values||[];return new Th(F,V)})(n.startAt));let y=null;return n.endAt&&(y=(function(S){const V=!S.before,F=S.values||[];return new Th(F,V)})(n.endAt)),E2(e,o,f,u,p,"F",g,y)}function aR(s,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OT(s){return s.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Eo(n.unaryFilter.field);return jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(n.unaryFilter.field);return jt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Eo(n.unaryFilter.field);return jt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Eo(n.unaryFilter.field);return jt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(s):s.fieldFilter!==void 0?(function(n){return jt.create(Eo(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(n){return Yi.create(n.compositeFilter.filters.map((r=>OT(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(n.compositeFilter.op))})(s):Ee(30097,{filter:s})}function oR(s){return Q2[s]}function lR(s){return X2[s]}function uR(s){return $2[s]}function To(s){return{fieldPath:s.canonicalString()}}function Eo(s){return en.fromServerFormat(s.fieldPath)}function MT(s){return s instanceof jt?(function(n){if(n.op==="=="){if(a0(n.value))return{unaryFilter:{field:To(n.field),op:"IS_NAN"}};if(r0(n.value))return{unaryFilter:{field:To(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(a0(n.value))return{unaryFilter:{field:To(n.field),op:"IS_NOT_NAN"}};if(r0(n.value))return{unaryFilter:{field:To(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(n.field),op:lR(n.op),value:n.value}}})(s):s instanceof Yi?(function(n){const r=n.getFilters().map((o=>MT(o)));return r.length===1?r[0]:{compositeFilter:{op:uR(n.op),filters:r}}})(s):Ee(54877,{filter:s})}function cR(s){const e=[];return s.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function kT(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function VT(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,o,u=xe.min(),f=xe.min(),p=tn.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.yt=e}}function fR(s){const e=rR({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?qm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.bn=new mR}addToCollectionParentIndex(e,n){return this.bn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(Tr.min())}updateCollectionGroup(e,n,r){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class mR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n]||new zt(lt.comparator),u=!o.has(r);return this.index[n]=o.add(r),u}has(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(e){return(this.index[e]||new zt(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},UT=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(UT,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Uo(0)}static ar(){return new Uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="LruGarbageCollector",pR=1048576;function E0([s,e],[n,r]){const o=ze(s,n);return o===0?ze(e,r):o}class gR{constructor(e){this.Pr=e,this.buffer=new zt(E0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();E0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ae(T0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bo(n)?ae(T0,"Ignoring IndexedDB error during garbage collection: ",n):await zo(n)}await this.Ar(3e5)}))}}class _R{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return J.resolve(qh.ce);const r=new gR(n);return this.Vr.forEachTarget(e,(o=>r.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>r.Ir(o))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(b0)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),b0):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,o,u,f,p,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(r=S,p=Date.now(),this.removeTargets(e,r,n)))).next((S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,r)))).next((S=>(y=Date.now(),vo()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function vR(s,e){return new _R(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.changes=new Sa((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?J.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,r,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(r!==null&&iu(r.mutation,o,mi.empty(),ut.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Be()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Be()){const o=aa();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,r).next((u=>{let f=Jl();return u.forEach(((p,g)=>{f=f.insert(p,g.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const r=aa();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Be())))}populateOverlays(e,n,r){const o=[];return r.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(e,n,r,o){let u=ws();const f=nu(),p=(function(){return nu()})();return n.forEach(((g,y)=>{const E=r.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Aa)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),iu(E.mutation,y,E.mutation.getFieldMask(),ut.now())):f.set(y.key,mi.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((y,E)=>f.set(y,E))),n.forEach(((y,E)=>p.set(y,new TR(E,f.get(y)??null)))),p)))}recalculateAndSaveOverlays(e,n){const r=nu();let o=new gt(((f,p)=>f-p)),u=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const p of f)p.keys().forEach((g=>{const y=n.get(g);if(y===null)return;let E=r.get(g)||mi.empty();E=p.applyToLocalView(y,E),r.set(g,E);const S=(o.get(p.batchId)||Be()).add(g);o=o.insert(p.batchId,S)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,E=g.value,S=yT();E.forEach((V=>{if(!u.has(V)){const F=wT(n.get(V),r.get(V));F!==null&&S.set(V,F),u=u.add(V)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,S))}return J.waitFor(f)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,o){return w2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):S2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,o):this.getDocumentsMatchingCollectionQuery(e,n,r,o)}getNextDocuments(e,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,o-u.size):J.resolve(aa());let p=uu,g=u;return f.next((y=>J.forEach(y,((E,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(E)?J.resolve():this.remoteDocumentCache.getEntry(e,E).next((V=>{g=g.insert(E,V)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,g,y,Be()))).next((E=>({batchId:p,changes:gT(E)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next((r=>{let o=Jl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,o){const u=n.collectionGroup;let f=Jl();return this.indexManager.getCollectionParents(e,u).next((p=>J.forEach(p,(g=>{const y=(function(S,V){return new Gh(V,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,r,o).next((E=>{E.forEach(((S,V)=>{f=f.insert(S,V)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,r,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,u,o)))).next((f=>{u.forEach(((g,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,an.newInvalidDocument(E)))}));let p=Jl();return f.forEach(((g,y)=>{const E=u.get(g);E!==void 0&&iu(E.mutation,y,mi.empty(),ut.now()),Yh(n,y)&&(p=p.insert(g,y))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return J.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:qi(o.createTime)}})(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(o){return{name:o.name,query:fR(o.bundledQuery),readTime:qi(o.readTime)}})(n)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.overlays=new gt(_e.comparator),this.Lr=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const r=aa();return J.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&r.set(o,u)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((o,u)=>{this.St(e,n,u)})),J.resolve()}removeOverlaysForBatchId(e,n,r){const o=this.Lr.get(r);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(r)),J.resolve()}getOverlaysForCollection(e,n,r){const o=aa(),u=n.length+1,f=new _e(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>r&&o.set(g.getKey(),g)}return J.resolve(o)}getOverlaysForCollectionGroup(e,n,r,o){let u=new gt(((y,E)=>y-E));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>r){let E=u.get(y.largestBatchId);E===null&&(E=aa(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const p=aa(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>p.set(y,E))),!(p.size()>=o)););return J.resolve(p)}St(e,n,r){const o=this.overlays.get(r.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(r.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(r.key,new q2(n,r));let u=this.Lr.get(n);u===void 0&&(u=Be(),this.Lr.set(n,u)),this.Lr.set(n,u.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.kr=new zt(Kt.qr),this.Kr=new zt(Kt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Kt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Kt(e,n))}Qr(e,n){e.forEach((r=>this.removeReference(r,n)))}Gr(e){const n=new _e(new lt([])),r=new Kt(n,e),o=new Kt(n,e+1),u=[];return this.Kr.forEachInRange([r,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new _e(new lt([])),r=new Kt(n,e),o=new Kt(n,e+1);let u=Be();return this.Kr.forEachInRange([r,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new Kt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Kt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return _e.comparator(e.key,n.key)||ze(e.Jr,n.Jr)}static Ur(e,n){return ze(e.Jr,n.Jr)||_e.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new zt(Kt.qr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new B2(u,n,r,o);this.mutationQueue.push(f);for(const p of o)this.Hr=this.Hr.add(new Kt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return J.resolve(f)}lookupMutationBatch(e,n){return J.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,o=this.Xr(r),u=o<0?0:o;return J.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?cp:this.Yn-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Kt(n,0),o=new Kt(n,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([r,o],(f=>{const p=this.Zr(f.Jr);u.push(p)})),J.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new zt(ze);return n.forEach((o=>{const u=new Kt(o,0),f=new Kt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,f],(p=>{r=r.add(p.Jr)}))})),J.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,o=r.length+1;let u=r;_e.isDocumentKey(u)||(u=u.child(""));const f=new Kt(new _e(u),0);let p=new zt(ze);return this.Hr.forEachWhile((g=>{const y=g.key.path;return!!r.isPrefixOf(y)&&(y.length===o&&(p=p.add(g.Jr)),!0)}),f),J.resolve(this.Yr(p))}Yr(e){const n=[];return e.forEach((r=>{const o=this.Zr(r);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){Qe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return J.forEach(n.mutations,(o=>{const u=new Kt(o.key,n.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,n){const r=new Kt(n,0),o=this.Hr.firstAfterOrEqual(r);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.ti=e,this.docs=(function(){return new gt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,o=this.docs.get(r),u=o?o.size:0,f=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return J.resolve(r?r.document.mutableCopy():an.newInvalidDocument(n))}getEntries(e,n){let r=ws();return n.forEach((o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():an.newInvalidDocument(o))})),J.resolve(r)}getDocumentsMatchingQuery(e,n,r,o){let u=ws();const f=n.path,p=new _e(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||Wx(Zx(E),r)<=0||(o.has(E.key)||Yh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return J.resolve(u)}getAllFromCollectionGroup(e,n,r,o){Ee(9500)}ni(e,n){return J.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new IR(this)}getSize(e){return J.resolve(this.size)}}class IR extends bR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?n.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(r)})),J.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.persistence=e,this.ri=new Sa((n=>dp(n)),mp),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.ii=0,this.si=new Tp,this.targetCount=0,this.oi=Uo._r()}forEachTarget(e,n){return this.ri.forEach(((r,o)=>n(o))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),J.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Uo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.lr(n),J.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,r){let o=0;const u=[];return this.ri.forEach(((f,p)=>{p.sequenceNumber<=n&&r.get(p.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),J.waitFor(u).next((()=>o))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return J.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),J.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),J.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return J.resolve(r)}containsKey(e,n){return J.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this._i={},this.overlays={},this.ai=new qh(0),this.ui=!1,this.ui=!0,this.ci=new AR,this.referenceDelegate=e(this),this.li=new CR(this),this.indexManager=new dR,this.remoteDocumentCache=(function(o){return new RR(o)})((r=>this.referenceDelegate.hi(r))),this.serializer=new hR(n),this.Pi=new wR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new xR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const o=new NR(this.ai.next());return this.referenceDelegate.Ti(),r(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,n){return J.or(Object.values(this._i).map((r=>()=>r.containsKey(e,n))))}}class NR extends t2{constructor(e){super(),this.currentSequenceNumber=e}}class Ep{constructor(e){this.persistence=e,this.Ri=new Tp,this.Ai=null}static Vi(e){return new Ep(e)}get di(){if(this.Ai)return this.Ai;throw Ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),J.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((o=>this.di.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>r.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,(r=>{const o=_e.fromPath(r);return this.mi(e,o).next((u=>{u||n.removeEntry(o,xe.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class xh{constructor(e,n){this.persistence=e,this.fi=new Sa((r=>s2(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=vR(this,n)}static Vi(e,n){return new xh(e,n)}Ti(){}Ei(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((o=>r+o))))}pr(e){let n=0;return this.mr(e,(r=>{n++})).next((()=>n))}mr(e,n){return J.forEach(this.fi,((r,o)=>this.wr(e,r,o).next((u=>u?J.resolve():n(o)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(f=>this.wr(e,f,n).next((p=>{p||(r++,u.removeEntry(f,xe.min()))})))).next((()=>u.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),J.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),J.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=oh(e.data.value)),n}wr(e,n,r){return J.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.fi.get(n);return J.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,r,o){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=o}static Is(e,n){let r=Be(),o=Be();for(const u of n.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new wp(e,n.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return yA()?8:n2(on())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,o){const u={result:null};return this.gs(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(e,n,o,r).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new DR;return this.ys(e,n,f).next((p=>{if(u.result=p,this.As)return this.ws(e,n,f,p.size)}))})).next((()=>u.result))}ws(e,n,r,o){return r.documentReadCount<this.Vs?(vo()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",bo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(vo()<=Pe.DEBUG&&ae("QueryEngine","Query:",bo(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ds*o?(vo()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",bo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zi(n))):J.resolve())}gs(e,n){if(c0(n))return J.resolve(null);let r=zi(n);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=qm(n,null,"F"),r=zi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((u=>{const f=Be(...u);return this.fs.getDocuments(e,f).next((p=>this.indexManager.getMinOffset(e,r).next((g=>{const y=this.Ss(n,p);return this.bs(n,y,f,g.readTime)?this.gs(e,qm(n,null,"F")):this.Ds(e,y,n,g)}))))})))))}ps(e,n,r,o){return c0(n)||o.isEqual(xe.min())?J.resolve(null):this.fs.getDocuments(e,r).next((u=>{const f=this.Ss(n,u);return this.bs(n,f,r,o)?J.resolve(null):(vo()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),bo(n)),this.Ds(e,f,n,Jx(o,uu)).next((p=>p)))}))}Ss(e,n){let r=new zt(mT(e));return n.forEach(((o,u)=>{Yh(e,u)&&(r=r.add(u))})),r}bs(e,n,r,o){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,n,r){return vo()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",bo(n)),this.fs.getDocumentsMatchingQuery(e,n,Tr.min(),r)}Ds(e,n,r,o){return this.fs.getDocumentsMatchingQuery(e,r,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="LocalStore",MR=3e8;class kR{constructor(e,n,r,o){this.persistence=e,this.Cs=n,this.serializer=o,this.vs=new gt(ze),this.Fs=new Sa((u=>dp(u)),mp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ER(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function VR(s,e,n,r){return new kR(s,e,n,r)}async function jT(s,e){const n=Ie(s);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next((u=>(o=u,n.Os(e),n.mutationQueue.getAllMutationBatches(r)))).next((u=>{const f=[],p=[];let g=Be();for(const y of o){f.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of u){p.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(r,g).next((y=>({Ns:y,removedBatchIds:f,addedBatchIds:p})))}))}))}function UR(s,e){const n=Ie(s);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),u=n.xs.newChangeBuffer({trackRemovals:!0});return(function(p,g,y,E){const S=y.batch,V=S.keys();let F=J.resolve();return V.forEach((W=>{F=F.next((()=>E.getEntry(g,W))).next((ie=>{const ee=y.docVersions.get(W);Qe(ee!==null,48541),ie.version.compareTo(ee)<0&&(S.applyToRemoteDocument(ie,y),ie.isValidDocument()&&(ie.setReadTime(y.commitVersion),E.addEntry(ie)))}))})),F.next((()=>p.mutationQueue.removeMutationBatch(g,S)))})(n,r,e,u).next((()=>u.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let g=Be();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g})(e)))).next((()=>n.localDocuments.getDocuments(r,o)))}))}function PT(s){const e=Ie(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function LR(s,e){const n=Ie(s),r=e.snapshotVersion;let o=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});o=n.vs;const p=[];e.targetChanges.forEach(((E,S)=>{const V=o.get(S);if(!V)return;p.push(n.li.removeMatchingKeys(u,E.removedDocuments,S).next((()=>n.li.addMatchingKeys(u,E.addedDocuments,S))));let F=V.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?F=F.withResumeToken(tn.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,r)),o=o.insert(S,F),(function(ie,ee,me){return ie.resumeToken.approximateByteSize()===0||ee.snapshotVersion.toMicroseconds()-ie.snapshotVersion.toMicroseconds()>=MR?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(V,F,E)&&p.push(n.li.updateTargetData(u,F))}));let g=ws(),y=Be();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),p.push(jR(u,f,e.documentUpdates).next((E=>{g=E.Bs,y=E.Ls}))),!r.isEqual(xe.min())){const E=n.li.getLastRemoteSnapshotVersion(u).next((S=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,r)));p.push(E)}return J.waitFor(p).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,g,y))).next((()=>g))})).then((u=>(n.vs=o,u)))}function jR(s,e,n){let r=Be(),o=Be();return n.forEach((u=>r=r.add(u))),e.getEntries(s,r).next((u=>{let f=ws();return n.forEach(((p,g)=>{const y=u.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(xe.min())?(e.removeEntry(p,g.readTime),f=f.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),f=f.insert(p,g)):ae(Sp,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)})),{Bs:f,Ls:o}}))}function PR(s,e){const n=Ie(s);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=cp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function zR(s,e){const n=Ie(s);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return n.li.getTargetData(r,e).next((u=>u?(o=u,J.resolve(o)):n.li.allocateTargetId(r).next((f=>(o=new pr(e,f,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=n.vs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r}))}async function Ym(s,e,n){const r=Ie(s),o=r.vs.get(e),u=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",u,(f=>r.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Bo(f))throw f;ae(Sp,`Failed to update sequence numbers for target ${e}: ${f}`)}r.vs=r.vs.remove(e),r.Fs.delete(o.target)}function w0(s,e,n){const r=Ie(s);let o=xe.min(),u=Be();return r.persistence.runTransaction("Execute query","readwrite",(f=>(function(g,y,E){const S=Ie(g),V=S.Fs.get(E);return V!==void 0?J.resolve(S.vs.get(V)):S.li.getTargetData(y,E)})(r,f,zi(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(f,p.targetId).next((g=>{u=g}))})).next((()=>r.Cs.getDocumentsMatchingQuery(f,e,n?o:xe.min(),n?u:Be()))).next((p=>(BR(r,x2(e),p),{documents:p,ks:u})))))}function BR(s,e,n){let r=s.Ms.get(e)||xe.min();n.forEach(((o,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)})),s.Ms.set(e,r)}class S0{constructor(){this.activeTargetIds=O2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.vo=new S0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new S0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="ConnectivityMonitor";class x0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ae(A0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ae(A0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th=null;function Qm(){return th===null?th=(function(){return 268435456+Math.round(2147483648*Math.random())})():th++,"0x"+th.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="RestConnection",FR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class GR{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.$o=this.databaseId.database===vh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,n,r,o,u){const f=Qm(),p=this.Qo(e,n.toUriEncodedString());ae(_m,`Sending RPC '${e}' ${f}:`,p,r);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:y}=new URL(p),E=Ta(y);return this.zo(e,p,g,r,E).then((S=>(ae(_m,`Received RPC '${e}' ${f}: `,S),S)),(S=>{throw ma(_m,`RPC '${e}' ${f} failed with error: `,S,"url: ",p,"request:",r),S}))}jo(e,n,r,o,u,f){return this.Wo(e,n,r,o,u)}Go(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Po})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),r&&r.headers.forEach(((o,u)=>e[u]=o))}Qo(e,n){const r=FR[e];let o=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="WebChannelConnection",Ql=(s,e,n)=>{s.listen(e,(r=>{try{n(r)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Ao extends GR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ao.c_){const e=Gb();Ql(e,Fb.STAT_EVENT,(n=>{n.stat===Um.PROXY?ae(sn,"STAT_EVENT: detected buffering proxy"):n.stat===Um.NOPROXY&&ae(sn,"STAT_EVENT: detected no buffering proxy")})),Ao.c_=!0}}zo(e,n,r,o,u){const f=Qm();return new Promise(((p,g)=>{const y=new qb;y.setWithCredentials(!0),y.listenOnce(Hb.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case ah.NO_ERROR:const S=y.getResponseJson();ae(sn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(S)),p(S);break;case ah.TIMEOUT:ae(sn,`RPC '${e}' ${f} timed out`),g(new pe(Z.DEADLINE_EXCEEDED,"Request time out"));break;case ah.HTTP_ERROR:const V=y.getStatus();if(ae(sn,`RPC '${e}' ${f} failed with status:`,V,"response text:",y.getResponseText()),V>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const W=F==null?void 0:F.error;if(W&&W.status&&W.message){const ie=(function(me){const ve=me.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ve)>=0?ve:Z.UNKNOWN})(W.status);g(new pe(ie,W.message))}else g(new pe(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new pe(Z.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ae(sn,`RPC '${e}' ${f} completed.`)}}));const E=JSON.stringify(o);ae(sn,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",E,r,15)}))}T_(e,n,r){const o=Qm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,n,r),p.encodeInitMessageHeaders=!0;const y=u.join("");ae(sn,`Creating RPC '${e}' stream ${o}: ${y}`,p);const E=f.createWebChannel(y,p);this.E_(E);let S=!1,V=!1;const F=new KR({Jo:W=>{V?ae(sn,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(S||(ae(sn,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),ae(sn,`RPC '${e}' stream ${o} sending:`,W),E.send(W))},Ho:()=>E.close()});return Ql(E,$l.EventType.OPEN,(()=>{V||(ae(sn,`RPC '${e}' stream ${o} transport opened.`),F.i_())})),Ql(E,$l.EventType.CLOSE,(()=>{V||(V=!0,ae(sn,`RPC '${e}' stream ${o} transport closed`),F.o_(),this.I_(E))})),Ql(E,$l.EventType.ERROR,(W=>{V||(V=!0,ma(sn,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),F.o_(new pe(Z.UNAVAILABLE,"The operation could not be completed")))})),Ql(E,$l.EventType.MESSAGE,(W=>{var ie;if(!V){const ee=W.data[0];Qe(!!ee,16349);const me=ee,ve=(me==null?void 0:me.error)||((ie=me[0])==null?void 0:ie.error);if(ve){ae(sn,`RPC '${e}' stream ${o} received error:`,ve);const de=ve.status;let Te=(function(I){const A=Mt[I];if(A!==void 0)return AT(A)})(de),we=ve.message;de==="NOT_FOUND"&&we.includes("database")&&we.includes("does not exist")&&we.includes(this.databaseId.database)&&ma(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Te===void 0&&(Te=Z.INTERNAL,we="Unknown error status: "+de+" with message "+ve.message),V=!0,F.o_(new pe(Te,we)),E.close()}else ae(sn,`RPC '${e}' stream ${o} received:`,ee),F.__(ee)}})),Ao.u_(),setTimeout((()=>{F.s_()}),0),F}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Kb()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(s){return new Ao(s)}function vm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(s){return new J2(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ao.c_=!1;class zT{constructor(e,n,r=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-r);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="PersistentStream";class BT{constructor(e,n,r,o,u,f,p,g){this.Ci=e,this.S_=r,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Es(n.toString()),Es("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===n&&this.G_(r,o)}),(r=>{e((()=>{const o=new pe(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(R0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(ae(R0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class QR extends BT{constructor(e,n,r,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eR(this.serializer,e),r=(function(u){if(!("targetChange"in u))return xe.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?xe.min():f.readTime?qi(f.readTime):xe.min()})(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Km(this.serializer),n.addTarget=(function(u,f){let p;const g=f.target;if(p=Bm(g)?{documents:iR(u,g)}:{query:sR(u,g).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=IT(u,f.resumeToken);const y=Hm(u,f.expectedCount);y!==null&&(p.expectedCount=y)}else if(f.snapshotVersion.compareTo(xe.min())>0){p.readTime=Ah(u,f.snapshotVersion.toTimestamp());const y=Hm(u,f.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const r=aR(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Km(this.serializer),n.removeTarget=e,this.q_(n)}}class XR extends BT{constructor(e,n,r,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,f),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nR(e.writeResults,e.commitTime),r=qi(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Km(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>tR(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{}class JR extends $R{constructor(e,n,r,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new pe(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(e,Fm(n,r),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pe(Z.UNKNOWN,u.toString())}))}jo(e,n,r,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.jo(e,Fm(n,r),o,f,p,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pe(Z.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function ZR(s,e,n,r){return new JR(s,e,n,r)}class WR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Es(n),this.aa=!1):ae("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="RemoteStore";class eI{constructor(e,n,r,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{r.enqueueAndForget((async()=>{xa(this)&&(ae(pa,"Restarting streams for network reachability change."),await(async function(g){const y=Ie(g);y.Ia.add(4),await Tu(y),y.Va.set("Unknown"),y.Ia.delete(4),await Zh(y)})(this))}))})),this.Va=new WR(r,o)}}async function Zh(s){if(xa(s))for(const e of s.Ra)await e(!0)}async function Tu(s){for(const e of s.Ra)await e(!1)}function qT(s,e){const n=Ie(s);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Ip(n)?Rp(n):qo(n).O_()&&xp(n,e))}function Ap(s,e){const n=Ie(s),r=qo(n);n.Ea.delete(e),r.O_()&&HT(n,e),n.Ea.size===0&&(r.O_()?r.L_():xa(n)&&n.Va.set("Unknown"))}function xp(s,e){if(s.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const n=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qo(s).Z_(e)}function HT(s,e){s.da.$e(e),qo(s).X_(e)}function Rp(s){s.da=new Y2({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ea.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),qo(s).start(),s.Va.ua()}function Ip(s){return xa(s)&&!qo(s).x_()&&s.Ea.size>0}function xa(s){return Ie(s).Ia.size===0}function FT(s){s.da=void 0}async function tI(s){s.Va.set("Online")}async function nI(s){s.Ea.forEach(((e,n)=>{xp(s,e)}))}async function iI(s,e){FT(s),Ip(s)?(s.Va.ha(e),Rp(s)):s.Va.set("Unknown")}async function sI(s,e,n){if(s.Va.set("Online"),e instanceof RT&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ea.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ea.delete(p),o.da.removeTarget(p))})(s,e)}catch(r){ae(pa,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rh(s,r)}else if(e instanceof ch?s.da.Xe(e):e instanceof xT?s.da.st(e):s.da.tt(e),!n.isEqual(xe.min()))try{const r=await PT(s.localStore);n.compareTo(r)>=0&&await(function(u,f){const p=u.da.Tt(f);return p.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ea.get(y);E&&u.Ea.set(y,E.withResumeToken(g.resumeToken,f))}})),p.targetMismatches.forEach(((g,y)=>{const E=u.Ea.get(g);if(!E)return;u.Ea.set(g,E.withResumeToken(tn.EMPTY_BYTE_STRING,E.snapshotVersion)),HT(u,g);const S=new pr(E.target,g,y,E.sequenceNumber);xp(u,S)})),u.remoteSyncer.applyRemoteEvent(p)})(s,n)}catch(r){ae(pa,"Failed to raise snapshot:",r),await Rh(s,r)}}async function Rh(s,e,n){if(!Bo(e))throw e;s.Ia.add(1),await Tu(s),s.Va.set("Offline"),n||(n=()=>PT(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{ae(pa,"Retrying IndexedDB access"),await n(),s.Ia.delete(1),await Zh(s)}))}function GT(s,e){return e().catch((n=>Rh(s,n,e)))}async function Wh(s){const e=Ie(s),n=Ar(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cp;for(;rI(e);)try{const o=await PR(e.localStore,r);if(o===null){e.Ta.length===0&&n.L_();break}r=o.batchId,aI(e,o)}catch(o){await Rh(e,o)}KT(e)&&YT(e)}function rI(s){return xa(s)&&s.Ta.length<10}function aI(s,e){s.Ta.push(e);const n=Ar(s);n.O_()&&n.Y_&&n.ea(e.mutations)}function KT(s){return xa(s)&&!Ar(s).x_()&&s.Ta.length>0}function YT(s){Ar(s).start()}async function oI(s){Ar(s).ra()}async function lI(s){const e=Ar(s);for(const n of s.Ta)e.ea(n.mutations)}async function uI(s,e,n){const r=s.Ta.shift(),o=_p.from(r,e,n);await GT(s,(()=>s.remoteSyncer.applySuccessfulWrite(o))),await Wh(s)}async function cI(s,e){e&&Ar(s).Y_&&await(async function(r,o){if((function(f){return F2(f)&&f!==Z.ABORTED})(o.code)){const u=r.Ta.shift();Ar(r).B_(),await GT(r,(()=>r.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Wh(r)}})(s,e),KT(s)&&YT(s)}async function I0(s,e){const n=Ie(s);n.asyncQueue.verifyOperationInProgress(),ae(pa,"RemoteStore received new credentials");const r=xa(n);n.Ia.add(3),await Tu(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Zh(n)}async function hI(s,e){const n=Ie(s);e?(n.Ia.delete(2),await Zh(n)):e||(n.Ia.add(2),await Tu(n),n.Va.set("Unknown"))}function qo(s){return s.ma||(s.ma=(function(n,r,o){const u=Ie(n);return u.sa(),new QR(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(s.datastore,s.asyncQueue,{Zo:tI.bind(null,s),Yo:nI.bind(null,s),t_:iI.bind(null,s),H_:sI.bind(null,s)}),s.Ra.push((async e=>{e?(s.ma.B_(),Ip(s)?Rp(s):s.Va.set("Unknown")):(await s.ma.stop(),FT(s))}))),s.ma}function Ar(s){return s.fa||(s.fa=(function(n,r,o){const u=Ie(n);return u.sa(),new XR(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(s.datastore,s.asyncQueue,{Zo:()=>Promise.resolve(),Yo:oI.bind(null,s),t_:cI.bind(null,s),ta:lI.bind(null,s),na:uI.bind(null,s)}),s.Ra.push((async e=>{e?(s.fa.B_(),await Wh(s)):(await s.fa.stop(),s.Ta.length>0&&(ae(pa,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new la,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,u){const f=Date.now()+r,p=new Cp(e,n,f,o,u);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Np(s,e){if(Es("AsyncQueue",`${e}: ${s}`),Bo(s))return new pe(Z.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{static emptySet(e){return new xo(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||_e.comparator(n.key,r.key):(n,r)=>_e.comparator(n.key,r.key),this.keyedMap=Jl(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.ga=new gt(_e.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Lo{constructor(e,n,r,o,u,f,p,g,y){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,r,o,u){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new Lo(e,n,xo.emptySet(n),f,r,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class dI{constructor(){this.queries=N0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const o=Ie(n),u=o.queries;o.queries=N0(),u.forEach(((f,p)=>{for(const g of p.Sa)g.onError(r)}))})(this,new pe(Z.ABORTED,"Firestore shutting down"))}}function N0(){return new Sa((s=>dT(s)),Kh)}async function mI(s,e){const n=Ie(s);let r=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(r=2):(u=new fI,r=e.Da()?0:1);try{switch(r){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Np(f,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&Dp(n)}async function pI(s,e){const n=Ie(s),r=e.query;let o=3;const u=n.queries.get(r);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gI(s,e){const n=Ie(s);let r=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const p of f.Sa)p.Fa(o)&&(r=!0);f.wa=o}}r&&Dp(n)}function yI(s,e,n){const r=Ie(s),o=r.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);r.queries.delete(e)}function Dp(s){s.Ca.forEach((e=>{e.next()}))}var Xm,D0;(D0=Xm||(Xm={})).Ma="default",D0.Cache="cache";class _I{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Xm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.key=e}}class XT{constructor(e){this.key=e}}class vI{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Be(),this.mutatedKeys=Be(),this.eu=mT(e),this.tu=new xo(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new C0,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,S)=>{const V=o.get(E),F=Yh(this.query,S)?S:null,W=!!V&&this.mutatedKeys.has(V.key),ie=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let ee=!1;V&&F?V.data.isEqual(F.data)?W!==ie&&(r.track({type:3,doc:F}),ee=!0):this.su(V,F)||(r.track({type:2,doc:F}),ee=!0,(g&&this.eu(F,g)>0||y&&this.eu(F,y)<0)&&(p=!0)):!V&&F?(r.track({type:0,doc:F}),ee=!0):V&&!F&&(r.track({type:1,doc:V}),ee=!0,(g||y)&&(p=!0)),ee&&(F?(f=f.add(F),u=ie?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),r.track({type:1,doc:E})}return{tu:f,iu:r,bs:p,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((E,S)=>(function(F,W){const ie=ee=>{switch(ee){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Vt:ee})}};return ie(F)-ie(W)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(r),o=o??!1;const p=n&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,y=g!==this.Xa;return this.Xa=g,f.length!==0||y?{snapshot:new Lo(this.query,e.tu,u,f,e.mutatedKeys,g===0,y,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new C0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Be(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return e.forEach((r=>{this.Ya.has(r)||n.push(new XT(r))})),this.Ya.forEach((r=>{e.has(r)||n.push(new QT(r))})),n}cu(e){this.Za=e.ks,this.Ya=Be();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Op="SyncEngine";class bI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TI{constructor(e){this.key=e,this.hu=!1}}class EI{constructor(e,n,r,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Sa((p=>dT(p)),Kh),this.Eu=new Map,this.Iu=new Set,this.Ru=new gt(_e.comparator),this.Au=new Map,this.Vu=new Tp,this.du={},this.mu=new Map,this.fu=Uo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wI(s,e,n=!0){const r=tE(s);let o;const u=r.Tu.get(e);return u?(r.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await $T(r,e,n,!0),o}async function SI(s,e){const n=tE(s);await $T(n,e,!0,!1)}async function $T(s,e,n,r){const o=await zR(s.localStore,zi(e)),u=o.targetId,f=s.sharedClientState.addLocalQueryTarget(u,n);let p;return r&&(p=await AI(s,e,u,f==="current",o.resumeToken)),s.isPrimaryClient&&n&&qT(s.remoteStore,o),p}async function AI(s,e,n,r,o){s.pu=(S,V,F)=>(async function(ie,ee,me,ve){let de=ee.view.ru(me);de.bs&&(de=await w0(ie.localStore,ee.query,!1).then((({documents:I})=>ee.view.ru(I,de))));const Te=ve&&ve.targetChanges.get(ee.targetId),we=ve&&ve.targetMismatches.get(ee.targetId)!=null,ge=ee.view.applyChanges(de,ie.isPrimaryClient,Te,we);return M0(ie,ee.targetId,ge.au),ge.snapshot})(s,S,V,F);const u=await w0(s.localStore,e,!0),f=new vI(e,u.ks),p=f.ru(u.documents),g=bu.createSynthesizedTargetChangeForCurrentChange(n,r&&s.onlineState!=="Offline",o),y=f.applyChanges(p,s.isPrimaryClient,g);M0(s,n,y.au);const E=new bI(e,n,f);return s.Tu.set(e,E),s.Eu.has(n)?s.Eu.get(n).push(e):s.Eu.set(n,[e]),y.snapshot}async function xI(s,e,n){const r=Ie(s),o=r.Tu.get(e),u=r.Eu.get(o.targetId);if(u.length>1)return r.Eu.set(o.targetId,u.filter((f=>!Kh(f,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Ym(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),n&&Ap(r.remoteStore,o.targetId),$m(r,o.targetId)})).catch(zo)):($m(r,o.targetId),await Ym(r.localStore,o.targetId,!0))}async function RI(s,e){const n=Ie(s),r=n.Tu.get(e),o=n.Eu.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ap(n.remoteStore,r.targetId))}async function II(s,e,n){const r=VI(s);try{const o=await(function(f,p){const g=Ie(f),y=ut.now(),E=p.reduce(((F,W)=>F.add(W.key)),Be());let S,V;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let W=ws(),ie=Be();return g.xs.getEntries(F,E).next((ee=>{W=ee,W.forEach(((me,ve)=>{ve.isValidDocument()||(ie=ie.add(me))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,W))).next((ee=>{S=ee;const me=[];for(const ve of p){const de=P2(ve,S.get(ve.key).overlayedDocument);de!=null&&me.push(new Aa(ve.key,de,aT(de.value.mapValue),Bi.exists(!0)))}return g.mutationQueue.addMutationBatch(F,y,me,p)})).next((ee=>{V=ee;const me=ee.applyToLocalDocumentSet(S,ie);return g.documentOverlayCache.saveOverlays(F,ee.batchId,me)}))})).then((()=>({batchId:V.batchId,changes:gT(S)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(f,p,g){let y=f.du[f.currentUser.toKey()];y||(y=new gt(ze)),y=y.insert(p,g),f.du[f.currentUser.toKey()]=y})(r,o.batchId,n),await Eu(r,o.changes),await Wh(r.remoteStore)}catch(o){const u=Np(o,"Failed to persist write");n.reject(u)}}async function JT(s,e){const n=Ie(s);try{const r=await LR(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Qe(f.hu,14607):o.removedDocuments.size>0&&(Qe(f.hu,42227),f.hu=!1))})),await Eu(n,r,e)}catch(r){await zo(r)}}function O0(s,e,n){const r=Ie(s);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Tu.forEach(((u,f)=>{const p=f.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const g=Ie(f);g.onlineState=p;let y=!1;g.queries.forEach(((E,S)=>{for(const V of S.Sa)V.va(p)&&(y=!0)})),y&&Dp(g)})(r.eventManager,e),o.length&&r.Pu.H_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CI(s,e,n){const r=Ie(s);r.sharedClientState.updateQueryState(e,"rejected",n);const o=r.Au.get(e),u=o&&o.key;if(u){let f=new gt(_e.comparator);f=f.insert(u,an.newNoDocument(u,xe.min()));const p=Be().add(u),g=new $h(xe.min(),new Map,new gt(ze),f,p);await JT(r,g),r.Ru=r.Ru.remove(u),r.Au.delete(e),Mp(r)}else await Ym(r.localStore,e,!1).then((()=>$m(r,e,n))).catch(zo)}async function NI(s,e){const n=Ie(s),r=e.batch.batchId;try{const o=await UR(n.localStore,e);WT(n,r,null),ZT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Eu(n,o)}catch(o){await zo(o)}}async function DI(s,e,n){const r=Ie(s);try{const o=await(function(f,p){const g=Ie(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,p).next((S=>(Qe(S!==null,37113),E=S.keys(),g.mutationQueue.removeMutationBatch(y,S)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(r.localStore,e);WT(r,e,n),ZT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Eu(r,o)}catch(o){await zo(o)}}function ZT(s,e){(s.mu.get(e)||[]).forEach((n=>{n.resolve()})),s.mu.delete(e)}function WT(s,e,n){const r=Ie(s);let o=r.du[r.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),r.du[r.currentUser.toKey()]=o}}function $m(s,e,n=null){s.sharedClientState.removeLocalQueryTarget(e);for(const r of s.Eu.get(e))s.Tu.delete(r),n&&s.Pu.yu(r,n);s.Eu.delete(e),s.isPrimaryClient&&s.Vu.Gr(e).forEach((r=>{s.Vu.containsKey(r)||eE(s,r)}))}function eE(s,e){s.Iu.delete(e.path.canonicalString());const n=s.Ru.get(e);n!==null&&(Ap(s.remoteStore,n),s.Ru=s.Ru.remove(e),s.Au.delete(n),Mp(s))}function M0(s,e,n){for(const r of n)r instanceof QT?(s.Vu.addReference(r.key,e),OI(s,r)):r instanceof XT?(ae(Op,"Document no longer in limbo: "+r.key),s.Vu.removeReference(r.key,e),s.Vu.containsKey(r.key)||eE(s,r.key)):Ee(19791,{wu:r})}function OI(s,e){const n=e.key,r=n.path.canonicalString();s.Ru.get(n)||s.Iu.has(r)||(ae(Op,"New document in limbo: "+n),s.Iu.add(r),Mp(s))}function Mp(s){for(;s.Iu.size>0&&s.Ru.size<s.maxConcurrentLimboResolutions;){const e=s.Iu.values().next().value;s.Iu.delete(e);const n=new _e(lt.fromString(e)),r=s.fu.next();s.Au.set(r,new TI(n)),s.Ru=s.Ru.insert(n,r),qT(s.remoteStore,new pr(zi(pp(n.path)),r,"TargetPurposeLimboResolution",qh.ce))}}async function Eu(s,e,n){const r=Ie(s),o=[],u=[],f=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,g)=>{f.push(r.pu(g,e,n).then((y=>{var E;if((y||n)&&r.isPrimaryClient){const S=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(g.targetId))==null?void 0:E.current;r.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){o.push(y);const S=wp.Is(g.targetId,y);u.push(S)}})))})),await Promise.all(f),r.Pu.H_(o),await(async function(g,y){const E=Ie(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>J.forEach(y,(V=>J.forEach(V.Ts,(F=>E.persistence.referenceDelegate.addReference(S,V.targetId,F))).next((()=>J.forEach(V.Es,(F=>E.persistence.referenceDelegate.removeReference(S,V.targetId,F)))))))))}catch(S){if(!Bo(S))throw S;ae(Sp,"Failed to update sequence numbers: "+S)}for(const S of y){const V=S.targetId;if(!S.fromCache){const F=E.vs.get(V),W=F.snapshotVersion,ie=F.withLastLimboFreeSnapshotVersion(W);E.vs=E.vs.insert(V,ie)}}})(r.localStore,u))}async function MI(s,e){const n=Ie(s);if(!n.currentUser.isEqual(e)){ae(Op,"User change. New user:",e.toKey());const r=await jT(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((p=>{p.forEach((g=>{g.reject(new pe(Z.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Eu(n,r.Ns)}}function kI(s,e){const n=Ie(s),r=n.Au.get(e);if(r&&r.hu)return Be().add(r.key);{let o=Be();const u=n.Eu.get(e);if(!u)return o;for(const f of u){const p=n.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function tE(s){const e=Ie(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=JT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CI.bind(null,e),e.Pu.H_=gI.bind(null,e.eventManager),e.Pu.yu=yI.bind(null,e.eventManager),e}function VI(s){const e=Ie(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DI.bind(null,e),e}class Ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return VR(this.persistence,new OR,e.initialUser,this.serializer)}Cu(e){return new LT(Ep.Vi,this.serializer)}Du(e){return new qR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ih.provider={build:()=>new Ih};class UI extends Ih{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Qe(this.persistence.referenceDelegate instanceof xh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new LT((r=>xh.Vi(r,n)),this.serializer)}}class Jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>O0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MI.bind(null,this.syncEngine),await hI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new dI})()}createDatastore(e){const n=Jh(e.databaseInfo.databaseId),r=YR(e.databaseInfo);return ZR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,o,u,f,p){return new eI(r,o,u,f,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>O0(this.syncEngine,n,0)),(function(){return x0.v()?new x0:new HR})())}createSyncEngine(e,n){return(function(o,u,f,p,g,y,E){const S=new EI(o,u,f,p,g,y);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(o){const u=Ie(o);ae(pa,"RemoteStore shutting down."),u.Ia.add(5),await Tu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Jm.provider={build:()=>new Jm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Es("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class jI{constructor(e,n,r,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=o,this.user=rn.UNAUTHENTICATED,this.clientId=lp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,(async f=>{ae(xr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(r,(f=>(ae(xr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new la;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Np(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function bm(s,e){s.asyncQueue.verifyOperationInProgress(),ae(xr,"Initializing OfflineComponentProvider");const n=s.configuration;await e.initialize(n);let r=n.initialUser;s.setCredentialChangeListener((async o=>{r.isEqual(o)||(await jT(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function k0(s,e){s.asyncQueue.verifyOperationInProgress();const n=await PI(s);ae(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,s.configuration),s.setCredentialChangeListener((r=>I0(e.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,o)=>I0(e.remoteStore,o))),s._onlineComponents=e}async function PI(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){ae(xr,"Using user provided OfflineComponentProvider");try{await bm(s,s._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;ma("Error using user provided cache. Falling back to memory cache: "+n),await bm(s,new Ih)}}else ae(xr,"Using default OfflineComponentProvider"),await bm(s,new UI(void 0));return s._offlineComponents}async function nE(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(ae(xr,"Using user provided OnlineComponentProvider"),await k0(s,s._uninitializedComponentsProvider._online)):(ae(xr,"Using default OnlineComponentProvider"),await k0(s,new Jm))),s._onlineComponents}function zI(s){return nE(s).then((e=>e.syncEngine))}async function V0(s){const e=await nE(s),n=e.eventManager;return n.onListen=wI.bind(null,e.syncEngine),n.onUnlisten=xI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RI.bind(null,e.syncEngine),n}function BI(s,e,n,r){const o=new LI(r),u=new _I(e,o,n);return s.asyncQueue.enqueueAndForget((async()=>mI(await V0(s),u))),()=>{o.Nu(),s.asyncQueue.enqueueAndForget((async()=>pI(await V0(s),u)))}}function qI(s,e){const n=new la;return s.asyncQueue.enqueueAndForget((async()=>II(await zI(s),e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="ComponentProvider",U0=new Map;function FI(s,e,n,r,o){return new o2(s,e,n,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,iE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firestore.googleapis.com",L0=!0;class j0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new pe(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sE,this.ssl=L0}else this.host=e.host,this.ssl=e.ssl??L0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=UT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pR)throw new pe(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$x("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iE(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new zx;switch(r.type){case"firstParty":return new Fx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new pe(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=U0.get(n);r&&(ae(HI,"Removing Datastore"),U0.delete(n),r.terminate())})(this),Promise.resolve()}}function GI(s,e,n,r={}){var y;s=ua(s,ef);const o=Ta(e),u=s._getSettings(),f={...u,emulatorOptions:s._getEmulatorOptions()},p=`${e}:${n}`;o&&rp(`https://${p}`),u.host!==sE&&u.host!==p&&ma("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:p,ssl:o,emulatorOptions:r};if(!br(g,f)&&(s._setSettings(g),r.mockUserToken)){let E,S;if(typeof r.mockUserToken=="string")E=r.mockUserToken,S=rn.MOCK_USER;else{E=Db(r.mockUserToken,(y=s._app)==null?void 0:y.options.projectId);const V=r.mockUserToken.sub||r.mockUserToken.user_id;if(!V)throw new pe(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new rn(V)}s._authCredentials=new Bx(new Qb(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tf(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}toJSON(){return{type:Pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(_u(n,Pt._jsonSchema))return new Pt(e,r||null,new _e(lt.fromString(n.referencePath)))}}Pt._jsonSchemaVersion="firestore/documentReference/1.0",Pt._jsonSchema={type:kt("string",Pt._jsonSchemaVersion),referencePath:kt("string")};class vr extends tf{constructor(e,n,r){super(e,n,pp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new _e(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function KI(s,e,...n){if(s=Bt(s),Xb("collection","path",e),s instanceof ef){const r=lt.fromString(e,...n);return Jv(r),new vr(s,null,r)}{if(!(s instanceof Pt||s instanceof vr))throw new pe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(lt.fromString(e,...n));return Jv(r),new vr(s.firestore,null,r)}}function su(s,e,...n){if(s=Bt(s),arguments.length===1&&(e=lp.newId()),Xb("doc","path",e),s instanceof ef){const r=lt.fromString(e,...n);return $v(r),new Pt(s,null,new _e(r))}{if(!(s instanceof Pt||s instanceof vr))throw new pe(Z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(lt.fromString(e,...n));return $v(r),new Pt(s.firestore,s instanceof vr?s.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="AsyncQueue";class z0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zT(this,"async_queue_retry"),this._c=()=>{const r=vm();r&&ae(P0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=vm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=vm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new la;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Bo(e))throw e;ae(P0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Es("INTERNAL UNHANDLED ERROR: ",B0(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Cp.createAndSchedule(this,e,n,r,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Ee(47125,{Pc:B0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function B0(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class pu extends ef{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new z0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new z0(e),this._firestoreClient=void 0,await e}}}function YI(s,e){const n=typeof s=="object"?s:Bh(),r=typeof s=="string"?s:vh,o=Rr(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=Ib("firestore");u&&GI(o,...u)}return o}function rE(s){if(s._terminated)throw new pe(Z.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||QI(s),s._firestoreClient}function QI(s){var r,o,u,f;const e=s._freezeSettings(),n=FI(s._databaseId,((r=s._app)==null?void 0:r.options.appId)||"",s._persistenceKey,(o=s._app)==null?void 0:o.options.apiKey,e);s._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((f=e.localCache)!=null&&f._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new jI(s._authCredentials,s._appCheckCredentials,s._queue,n,s._componentsProvider&&(function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(tn.fromBase64String(e))}catch(n){throw new pe(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zn(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_u(e,Zn._jsonSchema))return Zn.fromBase64String(e.bytes)}}Zn._jsonSchemaVersion="firestore/bytes/1.0",Zn._jsonSchema={type:kt("string",Zn._jsonSchemaVersion),bytes:kt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new pe(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new pe(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new pe(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Hi._jsonSchemaVersion}}static fromJSON(e){if(_u(e,Hi._jsonSchema))return new Hi(e.latitude,e.longitude)}}Hi._jsonSchemaVersion="firestore/geoPoint/1.0",Hi._jsonSchema={type:kt("string",Hi._jsonSchemaVersion),latitude:kt("number"),longitude:kt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_u(e,gi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new gi(e.vectorValues);throw new pe(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gi._jsonSchemaVersion="firestore/vectorValue/1.0",gi._jsonSchema={type:kt("string",gi._jsonSchemaVersion),vectorValues:kt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=/^__.*__$/;class $I{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Aa(e,this.data,this.fieldMask,n,this.fieldTransforms):new vu(e,this.data,n,this.fieldTransforms)}}function lE(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{dataSource:s})}}class kp{constructor(e,n,r,o,u,f){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new kp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ch(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(lE(this.dataSource)&&XI.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class JI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jh(e)}I(e,n,r,o=!1){return new kp({dataSource:e,methodName:n,targetDoc:r,path:en.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZI(s){const e=s._freezeSettings(),n=Jh(s._databaseId);return new JI(s._databaseId,!!e.ignoreUndefinedProperties,n)}function WI(s,e,n,r,o,u={}){const f=s.I(u.merge||u.mergeFields?2:0,e,n,o);fE("Data must be an object, but it was:",f,r);const p=cE(r,f);let g,y;if(u.merge)g=new mi(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const V=Vp(e,S,n);if(!f.contains(V))throw new pe(Z.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);nC(E,V)||E.push(V)}g=new mi(E),y=f.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,y=f.fieldTransforms;return new $I(new Jn(p),g,y)}function uE(s,e){if(hE(s=Bt(s)))return fE("Unsupported field value:",e,s),cE(s,e);if(s instanceof oE)return(function(r,o){if(!lE(o.dataSource))throw o.yc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${r._methodName}() is not currently supported inside arrays`);const u=r._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,o){const u=[];let f=0;for(const p of r){let g=uE(p,o.gc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}})(s,e)}return(function(r,o){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return M2(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const u=ut.fromDate(r);return{timestampValue:Ah(o.serializer,u)}}if(r instanceof ut){const u=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ah(o.serializer,u)}}if(r instanceof Hi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:IT(o.serializer,r._byteString)};if(r instanceof Pt){const u=o.databaseId,f=r.firestore._databaseId;if(!f.isEqual(u))throw o.yc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:bp(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof gi)return(function(f,p){const g=f instanceof gi?f.toArray():f;return{mapValue:{fields:{[sT]:{stringValue:rT},[bh]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw p.yc("VectorValues must only contain numeric values.");return gp(p.serializer,E)}))}}}}}})(r,o);if(VT(r))return r._toProto(o.serializer);throw o.yc(`Unsupported field value: ${up(r)}`)})(s,e)}function cE(s,e){const n={};return Zb(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wa(s,((r,o)=>{const u=uE(o,e.dc(r));u!=null&&(n[r]=u)})),{mapValue:{fields:n}}}function hE(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ut||s instanceof Hi||s instanceof Zn||s instanceof Pt||s instanceof oE||s instanceof gi||VT(s))}function fE(s,e,n){if(!hE(n)||!$b(n)){const r=up(n);throw r==="an object"?e.yc(s+" a custom object"):e.yc(s+" "+r)}}function Vp(s,e,n){if((e=Bt(e))instanceof aE)return e._internalPath;if(typeof e=="string")return tC(s,e);throw Ch("Field path arguments must be of type string or ",s,!1,void 0,n)}const eC=new RegExp("[~\\*/\\[\\]]");function tC(s,e,n){if(e.search(eC)>=0)throw Ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,n);try{return new aE(...e.split("."))._internalPath}catch{throw Ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,n)}}function Ch(s,e,n,r,o){const u=r&&!r.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${r}`),f&&(g+=` in document ${o}`),g+=")"),new pe(Z.INVALID_ARGUMENT,p+s+g)}function nC(s,e){return s.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wa(e,((o,u)=>{r[o]=this.convertValue(u,n)})),r}convertVectorValue(e){var r,o,u;const n=(u=(o=(r=e.fields)==null?void 0:r[bh].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>St(f.doubleValue)));return new gi(n)}convertGeoPoint(e){return new Hi(St(e.latitude),St(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cu(e));default:return null}}convertTimestamp(e){const n=Er(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=lt.fromString(e);Qe(kT(r),9688,{name:e});const o=new hu(r.get(1),r.get(3)),u=new _e(r.popFirst(5));return o.isEqual(n)||Es(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE extends iC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}const q0="@firebase/firestore",H0="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(s){return(function(n,r){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of r)if(u in o&&typeof o[u]=="function")return!0;return!1})(s,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n,r,o,u){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Vp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sC extends mE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new pe(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function aC(s,e,n){let r;return r=s?s.toFirestore(e):e,r}class Wl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ca extends mE{constructor(e,n,r,o,u,f){super(e,n,r,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ca._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ca._jsonSchemaVersion="firestore/documentSnapshot/1.0",ca._jsonSchema={type:kt("string",ca._jsonSchemaVersion),bundleSource:kt("string","DocumentSnapshot"),bundleName:kt("string"),bundle:kt("string")};class hh extends ca{data(e={}){return super.data(e)}}class Ro{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Wl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new hh(this._firestore,this._userDataWriter,r.key,r,new Wl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new pe(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const g=new hh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Wl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const g=new hh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Wl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return p.type!==0&&(y=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),E=f.indexOf(p.doc.key)),{type:oC(p.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),r.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oC(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:s})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ro._jsonSchemaVersion="firestore/querySnapshot/1.0",Ro._jsonSchema={type:kt("string",Ro._jsonSchemaVersion),bundleSource:kt("string","QuerySnapshot"),bundleName:kt("string"),bundle:kt("string")};function Zm(s,e,n){s=ua(s,Pt);const r=ua(s.firestore,pu),o=aC(s.converter,e),u=ZI(r);return gE(r,[WI(u,"setDoc",s._key,o,s.converter!==null,n).toMutation(s._key,Bi.none())])}function lC(s){return gE(ua(s.firestore,pu),[new yp(s._key,Bi.none())])}function pE(s,...e){var y,E,S;s=Bt(s);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||F0(e[r])||(n=e[r++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(F0(e[r])){const V=e[r];e[r]=(y=V.next)==null?void 0:y.bind(V),e[r+1]=(E=V.error)==null?void 0:E.bind(V),e[r+2]=(S=V.complete)==null?void 0:S.bind(V)}let u,f,p;if(s instanceof Pt)f=ua(s.firestore,pu),p=pp(s._key.path),u={next:V=>{e[r]&&e[r](uC(f,s,V))},error:e[r+1],complete:e[r+2]};else{const V=ua(s,tf);f=ua(V.firestore,pu),p=V._query;const F=new dE(f);u={next:W=>{e[r]&&e[r](new Ro(f,F,V,W))},error:e[r+1],complete:e[r+2]},rC(s._query)}const g=rE(f);return BI(g,p,o,u)}function gE(s,e){const n=rE(s);return qI(n,e)}function uC(s,e,n){const r=n.docs.get(e._key),o=new dE(s);return new ca(s,o,e._key,r,new Wl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Px(Ea),yi(new Wn("firestore",((r,{instanceIdentifier:o,options:u})=>{const f=r.getProvider("app").getImmediate(),p=new pu(new qx(r.getProvider("auth-internal")),new Gx(f,r.getProvider("app-check-internal")),l2(f,o),f);return u={useFetchStreams:n,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),En(q0,H0,e),En(q0,H0,"esm2020")})();const yE="@firebase/installations",Up="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=1e4,vE=`w:${Up}`,bE="FIS_v2",cC="https://firebaseinstallations.googleapis.com/v1",hC=3600*1e3,fC="installations",dC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ga=new ba(fC,dC,mC);function TE(s){return s instanceof ei&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE({projectId:s}){return`${cC}/projects/${s}/installations`}function wE(s){return{token:s.token,requestStatus:2,expiresIn:gC(s.expiresIn),creationTime:Date.now()}}async function SE(s,e){const r=(await e.json()).error;return ga.create("request-failed",{requestName:s,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function AE({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function pC(s,{refreshToken:e}){const n=AE(s);return n.append("Authorization",yC(e)),n}async function xE(s){const e=await s();return e.status>=500&&e.status<600?s():e}function gC(s){return Number(s.replace("s","000"))}function yC(s){return`${bE} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C({appConfig:s,heartbeatServiceProvider:e},{fid:n}){const r=EE(s),o=AE(s),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:bE,appId:s.appId,sdkVersion:vE},p={method:"POST",headers:o,body:JSON.stringify(f)},g=await xE(()=>fetch(r,p));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:wE(y.authToken)}}else throw await SE("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(s){return new Promise(e=>{setTimeout(e,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=/^[cdef][\w-]{21}$/,Wm="";function TC(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const n=EC(s);return bC.test(n)?n:Wm}catch{return Wm}}function EC(s){return vC(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new Map;function CE(s,e){const n=nf(s);NE(n,e),wC(n,e)}function NE(s,e){const n=IE.get(s);if(n)for(const r of n)r(e)}function wC(s,e){const n=SC();n&&n.postMessage({key:s,fid:e}),AC()}let oa=null;function SC(){return!oa&&"BroadcastChannel"in self&&(oa=new BroadcastChannel("[Firebase] FID Change"),oa.onmessage=s=>{NE(s.data.key,s.data.fid)}),oa}function AC(){IE.size===0&&oa&&(oa.close(),oa=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="firebase-installations-database",RC=1,ya="firebase-installations-store";let Tm=null;function Lp(){return Tm||(Tm=Lb(xC,RC,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(ya)}}})),Tm}async function Nh(s,e){const n=nf(s),o=(await Lp()).transaction(ya,"readwrite"),u=o.objectStore(ya),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&CE(s,e.fid),e}async function DE(s){const e=nf(s),r=(await Lp()).transaction(ya,"readwrite");await r.objectStore(ya).delete(e),await r.done}async function sf(s,e){const n=nf(s),o=(await Lp()).transaction(ya,"readwrite"),u=o.objectStore(ya),f=await u.get(n),p=e(f);return p===void 0?await u.delete(n):await u.put(p,n),await o.done,p&&(!f||f.fid!==p.fid)&&CE(s,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(s){let e;const n=await sf(s.appConfig,r=>{const o=IC(r),u=CC(s,o);return e=u.registrationPromise,u.installationEntry});return n.fid===Wm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function IC(s){const e=s||{fid:TC(),registrationStatus:0};return OE(e)}function CC(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ga.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NC(s,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DC(s)}:{installationEntry:e}}async function NC(s,e){try{const n=await _C(s,e);return Nh(s.appConfig,n)}catch(n){throw TE(n)&&n.customData.serverCode===409?await DE(s.appConfig):await Nh(s.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DC(s){let e=await G0(s.appConfig);for(;e.registrationStatus===1;)await RE(100),e=await G0(s.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jp(s);return r||n}return e}function G0(s){return sf(s,e=>{if(!e)throw ga.create("installation-not-found");return OE(e)})}function OE(s){return OC(s)?{fid:s.fid,registrationStatus:0}:s}function OC(s){return s.registrationStatus===1&&s.registrationTime+_E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC({appConfig:s,heartbeatServiceProvider:e},n){const r=kC(s,n),o=pC(s,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:vE,appId:s.appId}},p={method:"POST",headers:o,body:JSON.stringify(f)},g=await xE(()=>fetch(r,p));if(g.ok){const y=await g.json();return wE(y)}else throw await SE("Generate Auth Token",g)}function kC(s,{fid:e}){return`${EE(s)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(s,e=!1){let n;const r=await sf(s.appConfig,u=>{if(!ME(u))throw ga.create("not-registered");const f=u.authToken;if(!e&&LC(f))return u;if(f.requestStatus===1)return n=VC(s,e),u;{if(!navigator.onLine)throw ga.create("app-offline");const p=PC(u);return n=UC(s,p),p}});return n?await n:r.authToken}async function VC(s,e){let n=await K0(s.appConfig);for(;n.authToken.requestStatus===1;)await RE(100),n=await K0(s.appConfig);const r=n.authToken;return r.requestStatus===0?Pp(s,e):r}function K0(s){return sf(s,e=>{if(!ME(e))throw ga.create("not-registered");const n=e.authToken;return zC(n)?{...e,authToken:{requestStatus:0}}:e})}async function UC(s,e){try{const n=await MC(s,e),r={...e,authToken:n};return await Nh(s.appConfig,r),n}catch(n){if(TE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await DE(s.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Nh(s.appConfig,r)}throw n}}function ME(s){return s!==void 0&&s.registrationStatus===2}function LC(s){return s.requestStatus===2&&!jC(s)}function jC(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+hC}function PC(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function zC(s){return s.requestStatus===1&&s.requestTime+_E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(s){const e=s,{installationEntry:n,registrationPromise:r}=await jp(e);return r?r.catch(console.error):Pp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(s,e=!1){const n=s;return await HC(n),(await Pp(n,e)).token}async function HC(s){const{registrationPromise:e}=await jp(s);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(s){if(!s||!s.options)throw Em("App Configuration");if(!s.name)throw Em("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!s.options[n])throw Em(n);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function Em(s){return ga.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="installations",GC="installations-internal",KC=s=>{const e=s.getProvider("app").getImmediate(),n=FC(e),r=Rr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YC=s=>{const e=s.getProvider("app").getImmediate(),n=Rr(e,kE).getImmediate();return{getId:()=>BC(n),getToken:o=>qC(n,o)}};function QC(){yi(new Wn(kE,KC,"PUBLIC")),yi(new Wn(GC,YC,"PRIVATE"))}QC();En(yE,Up);En(yE,Up,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="analytics",XC="firebase_id",$C="origin",JC=60*1e3,ZC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new zh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Un=new ba("analytics","Analytics",WC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(s){if(!s.startsWith(zp)){const e=Un.create("invalid-gtag-resource",{gtagURL:s});return hn.warn(e.message),""}return s}function VE(s){return Promise.all(s.map(e=>e.catch(n=>n)))}function tN(s,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(s,e)),n}function nN(s,e){const n=tN("firebase-js-sdk-policy",{createScriptURL:eN}),r=document.createElement("script"),o=`${zp}?l=${s}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function iN(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function sN(s,e,n,r,o,u){const f=r[o];try{if(f)await e[f];else{const g=(await VE(n)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(p){hn.error(p)}s("config",o,u)}async function rN(s,e,n,r,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const p=await VE(n);for(const g of f){const y=p.find(S=>S.measurementId===g),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),s("event",r,o||{})}catch(u){hn.error(u)}}function aN(s,e,n,r){async function o(u,...f){try{if(u==="event"){const[p,g]=f;await rN(s,e,n,p,g)}else if(u==="config"){const[p,g]=f;await sN(s,e,n,r,p,g)}else if(u==="consent"){const[p,g]=f;s("consent",p,g)}else if(u==="get"){const[p,g,y]=f;s("get",p,g,y)}else if(u==="set"){const[p]=f;s("set",p)}else s(u,...f)}catch(p){hn.error(p)}}return o}function oN(s,e,n,r,o){let u=function(...f){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=aN(u,s,e,n),{gtagCore:u,wrappedGtag:window[o]}}function lN(s){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zp)&&n.src.includes(s))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=30,cN=1e3;class hN{constructor(e={},n=cN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const UE=new hN;function fN(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function dN(s){var f;const{appId:e,apiKey:n}=s,r={method:"GET",headers:fN(n)},o=ZC.replace("{app-id}",e),u=await fetch(o,r);if(u.status!==200&&u.status!==304){let p="";try{const g=await u.json();(f=g.error)!=null&&f.message&&(p=g.error.message)}catch{}throw Un.create("config-fetch-failed",{httpStatus:u.status,responseMessage:p})}return u.json()}async function mN(s,e=UE,n){const{appId:r,apiKey:o,measurementId:u}=s.options;if(!r)throw Un.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:r};throw Un.create("no-api-key")}const f=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new yN;return setTimeout(async()=>{p.abort()},JC),LE({appId:r,apiKey:o,measurementId:u},f,p,e)}async function LE(s,{throttleEndTimeMillis:e,backoffCount:n},r,o=UE){var p;const{appId:u,measurementId:f}=s;try{await pN(r,e)}catch(g){if(f)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:f};throw g}try{const g=await dN(s);return o.deleteThrottleMetadata(u),g}catch(g){const y=g;if(!gN(y)){if(o.deleteThrottleMetadata(u),f)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:f};throw g}const E=Number((p=y==null?void 0:y.customData)==null?void 0:p.httpStatus)===503?jv(n,o.intervalMillis,uN):jv(n,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(u,S),hn.debug(`Calling attemptFetch again in ${E} millis`),LE(s,S,r,o)}}function pN(s,e){return new Promise((n,r)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);s.addEventListener(()=>{clearTimeout(u),r(Un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gN(s){if(!(s instanceof ei)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class yN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _N(s,e,n,r,o){if(o&&o.global){s("event",n,r);return}else{const u=await e,f={...r,send_to:u};s("event",n,f)}}async function vN(s,e,n,r){if(r&&r.global){const o={};for(const u of Object.keys(n))o[`user_properties.${u}`]=n[u];return s("set",o),Promise.resolve()}else{const o=await e;s("config",o,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(){if(Mb())try{await kb()}catch(s){return hn.warn(Un.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return hn.warn(Un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TN(s,e,n,r,o,u,f){const p=mN(s);p.then(V=>{n[V.measurementId]=V.appId,s.options.measurementId&&V.measurementId!==s.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${V.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(V=>hn.error(V)),e.push(p);const g=bN().then(V=>{if(V)return r.getId()}),[y,E]=await Promise.all([p,g]);lN(u)||nN(u,y.measurementId),o("js",new Date);const S=(f==null?void 0:f.config)??{};return S[$C]="firebase",S.update=!0,E!=null&&(S[XC]=E),o("config",y.measurementId,S),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.app=e}_delete(){return delete Io[this.app.options.appId],Promise.resolve()}}let Io={},Y0=[];const Q0={};let wm="dataLayer",wN="gtag",X0,Bp,$0=!1;function SN(){const s=[];if(Ob()&&s.push("This is a browser extension environment."),_A()||s.push("Cookies are not available."),s.length>0){const e=s.map((r,o)=>`(${o+1}) ${r}`).join(" "),n=Un.create("invalid-analytics-context",{errorInfo:e});hn.warn(n.message)}}function AN(s,e,n){SN();const r=s.options.appId;if(!r)throw Un.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Un.create("no-api-key");if(Io[r]!=null)throw Un.create("already-exists",{id:r});if(!$0){iN(wm);const{wrappedGtag:u,gtagCore:f}=oN(Io,Y0,Q0,wm,wN);Bp=u,X0=f,$0=!0}return Io[r]=TN(s,Y0,Q0,e,X0,wm,n),new EN(s)}function xN(s=Bh()){s=Bt(s);const e=Rr(s,Dh);return e.isInitialized()?e.getImmediate():RN(s)}function RN(s,e={}){const n=Rr(s,Dh);if(n.isInitialized()){const o=n.getImmediate();if(br(e,n.getOptions()))return o;throw Un.create("already-initialized")}return n.initialize({options:e})}function IN(s,e,n){s=Bt(s),vN(Bp,Io[s.app.options.appId],e,n).catch(r=>hn.error(r))}function CN(s,e,n,r){s=Bt(s),_N(Bp,Io[s.app.options.appId],e,n,r).catch(o=>hn.error(o))}const J0="@firebase/analytics",Z0="0.10.21";function NN(){yi(new Wn(Dh,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return AN(r,o,n)},"PUBLIC")),yi(new Wn("analytics-internal",s,"PRIVATE")),En(J0,Z0),En(J0,Z0,"esm2020");function s(e){try{const n=e.getProvider(Dh).getImmediate();return{logEvent:(r,o,u)=>CN(n,r,o,u),setUserProperties:(r,o)=>IN(n,r,o)}}catch(n){throw Un.create("interop-component-reg-failed",{reason:n})}}}NN();function jE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DN=jE,PE=new ba("auth","Firebase",jE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new zh("@firebase/auth");function ON(s,...e){Oh.logLevel<=Pe.WARN&&Oh.warn(`Auth (${Ea}): ${s}`,...e)}function fh(s,...e){Oh.logLevel<=Pe.ERROR&&Oh.error(`Auth (${Ea}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(s,...e){throw qp(s,...e)}function Fi(s,...e){return qp(s,...e)}function zE(s,e,n){const r={...DN(),[e]:n};return new ba("auth","Firebase",r).create(e,{appName:s.name})}function ha(s){return zE(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qp(s,...e){if(typeof s!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(n,...r)}return PE.create(s,...e)}function Ae(s,e,...n){if(!s)throw qp(e,...n)}function _s(s){const e="INTERNAL ASSERTION FAILED: "+s;throw fh(e),new Error(e)}function As(s,e){s||_s(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function MN(){return W0()==="http:"||W0()==="https:"}function W0(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MN()||Ob()||"connection"in navigator)?navigator.onLine:!0}function VN(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.shortDelay=e,this.longDelay=n,As(n>e,"Short delay should be less than long delay!"),this.isMobile=fA()||pA()}get(){return kN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(s,e){As(s.emulator,"Emulator should always be set here");const{url:n}=s.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jN=new wu(3e4,6e4);function Fp(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Ho(s,e,n,r,o={}){return qE(s,o,async()=>{let u={},f={};r&&(e==="GET"?f=r:u={body:JSON.stringify(r)});const p=yu({key:s.config.apiKey,...f}).slice(1),g=await s._getAdditionalHeaders();g["Content-Type"]="application/json",s.languageCode&&(g["X-Firebase-Locale"]=s.languageCode);const y={method:e,headers:g,...u};return mA()||(y.referrerPolicy="no-referrer"),s.emulatorConfig&&Ta(s.emulatorConfig.host)&&(y.credentials="include"),BE.fetch()(await HE(s,s.config.apiHost,n,p),y)})}async function qE(s,e,n){s._canInitEmulator=!1;const r={...UN,...e};try{const o=new zN(s),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw nh(s,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw nh(s,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw nh(s,"email-already-in-use",f);if(g==="USER_DISABLED")throw nh(s,"user-disabled",f);const E=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw zE(s,E,y);Ss(s,E)}}catch(o){if(o instanceof ei)throw o;Ss(s,"network-request-failed",{message:String(o)})}}async function PN(s,e,n,r,o={}){const u=await Ho(s,e,n,r,o);return"mfaPendingCredential"in u&&Ss(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function HE(s,e,n,r){const o=`${e}${n}?${r}`,u=s,f=u.config.emulator?Hp(s.config,o):`${s.config.apiScheme}://${o}`;return LN.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class zN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fi(this.auth,"network-request-failed")),jN.get())})}}function nh(s,e,n){const r={appName:s.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Fi(s,e,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(s,e){return Ho(s,"POST","/v1/accounts:delete",e)}async function Mh(s,e){return Ho(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qN(s,e=!1){const n=Bt(s),r=await n.getIdToken(e),o=Gp(r);Ae(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:ru(Sm(o.auth_time)),issuedAtTime:ru(Sm(o.iat)),expirationTime:ru(Sm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Sm(s){return Number(s)*1e3}function Gp(s){const[e,n,r]=s.split(".");if(e===void 0||n===void 0||r===void 0)return fh("JWT malformed, contained fewer than 3 sections"),null;try{const o=xb(n);return o?JSON.parse(o):(fh("Failed to decode base64 JWT payload"),null)}catch(o){return fh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function eb(s){const e=Gp(s);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(s,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ei&&HN(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function HN({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ru(this.lastLoginAt),this.creationTime=ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(s){var S;const e=s.auth,n=await s.getIdToken(),r=await gu(s,Mh(e,{idToken:n}));Ae(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];s._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?FE(o.providerUserInfo):[],f=KN(s.providerData,u),p=s.isAnonymous,g=!(s.email&&o.passwordHash)&&!(f!=null&&f.length),y=p?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new tp(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(s,E)}async function GN(s){const e=Bt(s);await kh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KN(s,e){return[...s.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function FE(s){return s.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(s,e){const n=await qE(s,{},async()=>{const r=yu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,f=await HE(s,o,"/v1/token",`key=${u}`),p=await s._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:r};return s.emulatorConfig&&Ta(s.emulatorConfig.host)&&(g.credentials="include"),BE.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QN(s,e){return Ho(s,"POST","/v2/accounts:revokeToken",Fp(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const n=eb(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:u}=await YN(e,n);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:u}=n,f=new Co;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),f.refreshToken=r),o&&(Ae(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Ae(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(s,e){Ae(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class pi{constructor({uid:e,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new FN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new tp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await gu(this,this.stsTokenManager.getToken(this.auth,e));return Ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qN(this,e)}reload(){return GN(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await kh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(di(this.auth.app))return Promise.reject(ha(this.auth));const e=await this.getIdToken();return await gu(this,BN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:V,isAnonymous:F,providerData:W,stsTokenManager:ie}=n;Ae(S&&ie,e,"internal-error");const ee=Co.fromJSON(this.name,ie);Ae(typeof S=="string",e,"internal-error"),or(r,e.name),or(o,e.name),Ae(typeof V=="boolean",e,"internal-error"),Ae(typeof F=="boolean",e,"internal-error"),or(u,e.name),or(f,e.name),or(p,e.name),or(g,e.name),or(y,e.name),or(E,e.name);const me=new pi({uid:S,auth:e,email:o,emailVerified:V,displayName:r,isAnonymous:F,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:ee,createdAt:y,lastLoginAt:E});return W&&Array.isArray(W)&&(me.providerData=W.map(ve=>({...ve}))),g&&(me._redirectEventId=g),me}static async _fromIdTokenResponse(e,n,r=!1){const o=new Co;o.updateFromServerResponse(n);const u=new pi({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await kh(u),u}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];Ae(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?FE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Co;p.updateFromIdToken(r);const g=new pi({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new tp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new Map;function vs(s){As(s instanceof Function,"Expected a class definition");let e=tb.get(s);return e?(As(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,tb.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GE.type="NONE";const nb=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(s,e,n){return`firebase:${s}:${e}:${n}`}class No{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=dh(this.userKey,o.apiKey,u),this.fullPersistenceKey=dh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Mh(this.auth,{idToken:e}).catch(()=>{});return n?pi._fromGetAccountInfoResponse(this.auth,n,e):null}return pi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new No(vs(nb),e,r);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||vs(nb);const f=dh(r,e.config.apiKey,e.name);let p=null;for(const y of n)try{const E=await y._get(f);if(E){let S;if(typeof E=="string"){const V=await Mh(e,{idToken:E}).catch(()=>{});if(!V)break;S=await pi._fromGetAccountInfoResponse(e,V,E)}else S=pi._fromJSON(e,E);y!==u&&(p=S),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new No(u,e,r):(u=g[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new No(u,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JE(e))return"Blackberry";if(ZE(e))return"Webos";if(YE(e))return"Safari";if((e.includes("chrome/")||QE(e))&&!e.includes("edge/"))return"Chrome";if($E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KE(s=on()){return/firefox\//i.test(s)}function YE(s=on()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QE(s=on()){return/crios\//i.test(s)}function XE(s=on()){return/iemobile/i.test(s)}function $E(s=on()){return/android/i.test(s)}function JE(s=on()){return/blackberry/i.test(s)}function ZE(s=on()){return/webos/i.test(s)}function Kp(s=on()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function XN(s=on()){var e;return Kp(s)&&!!((e=window.navigator)!=null&&e.standalone)}function $N(){return gA()&&document.documentMode===10}function WE(s=on()){return Kp(s)||$E(s)||ZE(s)||JE(s)||/windows phone/i.test(s)||XE(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(s,e=[]){let n;switch(s){case"Browser":n=ib(on());break;case"Worker":n=`${ib(on())}-${s}`;break;default:n=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ea}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=u=>new Promise((f,p)=>{try{const g=e(u);f(g)}catch(g){p(g)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(s,e={}){return Ho(s,"GET","/v2/passwordPolicy",Fp(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=6;class eD{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??WN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sb(this),this.idTokenSubscription=new sb(this),this.beforeStateQueue=new JN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vs(n)),this._initializationPromise=this.queue(async()=>{var r,o,u;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mh(this,{idToken:e}),r=await pi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(di(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=r==null?void 0:r._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===p)&&(g!=null&&g.user)&&(r=g.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(f){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(di(this.app))return Promise.reject(ha(this));const n=e?Bt(e):null;return n&&Ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return di(this.app)?Promise.reject(ha(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return di(this.app)?Promise.reject(ha(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZN(this),n=new eD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vs(e)||this._popupRedirectResolver;Ae(n,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[vs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,r,o);return()=>{f=!0,g()}}else{const g=e.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(di(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ON(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yp(s){return Bt(s)}class sb{constructor(e){this.auth=e,this.observer=null,this.addObserver=wA(n=>this.observer=n)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nD(s){Qp=s}function iD(s){return Qp.loadJS(s)}function sD(){return Qp.gapiScript}function rD(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(s,e){const n=Rr(s,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(br(u,e??{}))return o;Ss(o,"already-initialized")}return n.initialize({options:e})}function oD(s,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vs);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lD(s,e,n){const r=Yp(s);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,u=t1(e),{host:f,port:p}=uD(e),g=p===null?"":`:${p}`,y={url:`${u}//${f}${g}/`},E=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(br(y,r.config.emulator)&&br(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=y,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,Ta(f)?rp(`${u}//${f}${g}`):cD()}function t1(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function uD(s){const e=t1(s),n=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:rb(r.substr(u.length+1))}}else{const[u,f]=r.split(":");return{host:u,port:rb(f)}}}function rb(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function cD(){function s(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _s("not implemented")}_getIdTokenResponse(e){return _s("not implemented")}_linkToIdToken(e,n){return _s("not implemented")}_getReauthenticationResolver(e){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(s,e){return PN(s,"POST","/v1/accounts:signInWithIdp",Fp(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="http://localhost";class _a extends n1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _a(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ss("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...u}=n;if(!r||!o)return null;const f=new _a(r,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Do(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Do(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Do(e,n)}buildRequest(){const e={requestUri:hD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends i1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Su{constructor(){super("facebook.com")}static credential(e){return _a._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _a._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Su{constructor(){super("github.com")}static credential(e){return _a._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Su{constructor(){super("twitter.com")}static credential(e,n){return _a._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const u=await pi._fromIdTokenResponse(e,r,o),f=ab(r);return new jo({user:u,providerId:f,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=ab(r);return new jo({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function ab(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends ei{constructor(e,n,r,o){super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Vh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new Vh(e,n,r,o)}}function s1(s,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(s):n._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Vh._fromErrorAndOperation(s,u,e,r):u})}async function fD(s,e,n=!1){const r=await gu(s,e._linkToIdToken(s.auth,await s.getIdToken()),n);return jo._forOperation(s,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(s,e,n=!1){const{auth:r}=s;if(di(r.app))return Promise.reject(ha(r));const o="reauthenticate";try{const u=await gu(s,s1(r,o,e,s),n);Ae(u.idToken,r,"internal-error");const f=Gp(u.idToken);Ae(f,r,"internal-error");const{sub:p}=f;return Ae(s.uid===p,r,"user-mismatch"),jo._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ss(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(s,e,n=!1){if(di(s.app))return Promise.reject(ha(s));const r="signIn",o=await s1(s,r,e),u=await jo._fromIdTokenResponse(s,r,o);return n||await s._updateCurrentUser(u.user),u}function pD(s,e,n,r){return Bt(s).onIdTokenChanged(e,n,r)}function gD(s,e,n){return Bt(s).beforeAuthStateChanged(e,n)}const Uh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uh,"1"),this.storage.removeItem(Uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=1e3,_D=10;class a1 extends r1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,p,g)=>{this.notifyListeners(f,g)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(r);!n&&this.localCache[r]===f||this.notifyListeners(r,f)},u=this.storage.getItem(r);$N()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,_D):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a1.type="LOCAL";const vD=a1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1 extends r1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o1.type="SESSION";const l1=o1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new rf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(f).map(async y=>y(n.origin,u)),g=await bD(p);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(s="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return s+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,g)=>{const y=Xp("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},r);f={messageChannel:o,onMessage(S){const V=S;if(V.data.eventId===y)switch(V.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(V.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return window}function ED(s){Gi().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){return typeof Gi().WorkerGlobalScope<"u"&&typeof Gi().importScripts=="function"}async function wD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SD(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function AD(){return u1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1="firebaseLocalStorageDb",xD=1,Lh="firebaseLocalStorage",h1="fbase_key";class Au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function af(s,e){return s.transaction([Lh],e?"readwrite":"readonly").objectStore(Lh)}function RD(){const s=indexedDB.deleteDatabase(c1);return new Au(s).toPromise()}function np(){const s=indexedDB.open(c1,xD);return new Promise((e,n)=>{s.addEventListener("error",()=>{n(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Lh,{keyPath:h1})}catch(o){n(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Lh)?e(r):(r.close(),await RD(),e(await np()))})})}async function ob(s,e,n){const r=af(s,!0).put({[h1]:e,value:n});return new Au(r).toPromise()}async function ID(s,e){const n=af(s,!1).get(e),r=await new Au(n).toPromise();return r===void 0?null:r.value}function lb(s,e){const n=af(s,!0).delete(e);return new Au(n).toPromise()}const CD=800,ND=3;class f1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await np(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ND)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rf._getInstance(AD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await wD(),!this.activeServiceWorker)return;this.sender=new TD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await np();return await ob(e,Uh,"1"),await lb(e,Uh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ob(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ID(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=af(o,!1).getAll();return new Au(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f1.type="LOCAL";const DD=f1;new wu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(s,e){return e?vs(e):(Ae(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends n1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Do(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MD(s){return mD(s.auth,new $p(s),s.bypassAuthState)}function kD(s){const{auth:e,user:n}=s;return Ae(n,e,"internal-error"),dD(n,new $p(s),s.bypassAuthState)}async function VD(s){const{auth:e,user:n}=s;return Ae(n,e,"internal-error"),fD(n,new $p(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:u,error:f,type:p}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MD;case"linkViaPopup":case"linkViaRedirect":return VD;case"reauthViaPopup":case"reauthViaRedirect":return kD;default:Ss(this.auth,"internal-error")}}resolve(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=new wu(2e3,1e4);class So extends d1{constructor(e,n,r,o,u){super(e,n,o,u),this.provider=r,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){As(this.filter.length===1,"Popup operations only handle one event");const e=Xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UD.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="pendingRedirect",mh=new Map;class jD extends d1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mh.get(this.auth._key());if(!e){try{const r=await PD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mh.set(this.auth._key(),e)}return this.bypassAuthState||mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PD(s,e){const n=qD(e),r=BD(s);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function zD(s,e){mh.set(s._key(),e)}function BD(s){return vs(s._redirectPersistence)}function qD(s){return dh(LD,s.config.apiKey,s.name)}async function HD(s,e,n=!1){if(di(s.app))return Promise.reject(ha(s));const r=Yp(s),o=OD(r,e),f=await new jD(r,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await r._persistUserIfCurrent(f.user),await r._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=600*1e3;class GD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m1(e)){const o=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FD&&this.cachedEventUids.clear(),this.cachedEventUids.has(ub(e))}saveEventToCache(e){this.cachedEventUids.add(ub(e)),this.lastProcessedEventTime=Date.now()}}function ub(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function m1({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KD(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m1(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(s,e={}){return Ho(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XD=/^https?/;async function $D(s){if(s.config.emulator)return;const{authorizedDomains:e}=await YD(s);for(const n of e)try{if(JD(n))return}catch{}Ss(s,"unauthorized-domain")}function JD(s){const e=ep(),{protocol:n,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const f=new URL(s);return f.hostname===""&&r===""?n==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===r}if(!XD.test(n))return!1;if(QD.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=new wu(3e4,6e4);function cb(){const s=Gi().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let n=0;n<s.CP.length;n++)s.CP[n]=null}}function WD(s){return new Promise((e,n)=>{var o,u,f;function r(){cb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cb(),n(Fi(s,"network-request-failed"))},timeout:ZD.get()})}if((u=(o=Gi().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Gi().gapi)!=null&&f.load)r();else{const p=rD("iframefcb");return Gi()[p]=()=>{gapi.load?r():n(Fi(s,"network-request-failed"))},iD(`${sD()}?onload=${p}`).catch(g=>n(g))}}).catch(e=>{throw ph=null,e})}let ph=null;function eO(s){return ph=ph||WD(s),ph}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new wu(5e3,15e3),nO="__/auth/iframe",iO="emulator/auth/iframe",sO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aO(s){const e=s.config;Ae(e.authDomain,s,"auth-domain-config-required");const n=e.emulator?Hp(e,iO):`https://${s.config.authDomain}/${nO}`,r={apiKey:e.apiKey,appName:s.name,v:Ea},o=rO.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${n}?${yu(r).slice(1)}`}async function oO(s){const e=await eO(s),n=Gi().gapi;return Ae(n,s,"internal-error"),e.open({where:document.body,url:aO(s),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sO,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const f=Fi(s,"network-request-failed"),p=Gi().setTimeout(()=>{u(f)},tO.get());function g(){Gi().clearTimeout(p),o(r)}r.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uO=500,cO=600,hO="_blank",fO="http://localhost";class hb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dO(s,e,n,r=uO,o=cO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const g={...lO,width:r.toString(),height:o.toString(),top:u,left:f},y=on().toLowerCase();n&&(p=QE(y)?hO:n),KE(y)&&(e=e||fO,g.scrollbars="yes");const E=Object.entries(g).reduce((V,[F,W])=>`${V}${F}=${W},`,"");if(XN(y)&&p!=="_self")return mO(e||"",p),new hb(null);const S=window.open(e||"",p,E);Ae(S,s,"popup-blocked");try{S.focus()}catch{}return new hb(S)}function mO(s,e){const n=document.createElement("a");n.href=s,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="__/auth/handler",gO="emulator/auth/handler",yO=encodeURIComponent("fac");async function fb(s,e,n,r,o,u){Ae(s.config.authDomain,s,"auth-domain-config-required"),Ae(s.config.apiKey,s,"invalid-api-key");const f={apiKey:s.config.apiKey,appName:s.name,authType:n,redirectUrl:r,v:Ea,eventId:o};if(e instanceof i1){e.setDefaultLanguage(s.languageCode),f.providerId=e.providerId||"",EA(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(e instanceof Su){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}s.tenantId&&(f.tid=s.tenantId);const p=f;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await s._getAppCheckToken(),y=g?`#${yO}=${encodeURIComponent(g)}`:"";return`${_O(s)}?${yu(p).slice(1)}${y}`}function _O({config:s}){return s.emulator?Hp(s,gO):`https://${s.authDomain}/${pO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="webStorageSupport";class vO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l1,this._completeRedirectFn=HD,this._overrideRedirectResult=zD}async _openPopup(e,n,r,o){var f;As((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await fb(e,n,r,ep(),o);return dO(e,u,Xp())}async _openRedirect(e,n,r,o){await this._originValidation(e);const u=await fb(e,n,r,ep(),o);return ED(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(As(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oO(e),r=new GD(e);return n.register("authEvent",o=>(Ae(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Am,{type:Am},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[Am];u!==void 0&&n(!!u),Ss(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$D(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WE()||YE()||Kp()}}const bO=vO;var db="@firebase/auth",mb="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wO(s){yi(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=r.options;Ae(f&&!f.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:f,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(s)},y=new tD(r,o,u,g);return oD(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yi(new Wn("auth-internal",e=>{const n=Yp(e.getProvider("auth").getImmediate());return(r=>new TO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(db,mb,EO(s)),En(db,mb,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=300,AO=Nb("authIdTokenMaxAge")||SO;let pb=null;const xO=s=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AO)return;const o=n==null?void 0:n.token;pb!==o&&(pb=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function RO(s=Bh()){const e=Rr(s,"auth");if(e.isInitialized())return e.getImmediate();const n=aD(s,{popupRedirectResolver:bO,persistence:[DD,vD,l1]}),r=Nb("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const f=xO(u.toString());gD(n,f,()=>f(n.currentUser)),pD(n,p=>f(p))}}const o=Rb("auth");return o&&lD(n,`http://${o}`),n}function IO(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}nD({loadJS(s){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const u=Fi("internal-error");u.customData=o,n(u)},r.type="text/javascript",r.charset="UTF-8",IO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wO("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="firebasestorage.googleapis.com",g1="storageBucket",CO=120*1e3,NO=600*1e3,DO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends ei{constructor(e,n,r=0){super(xm(e),`Firebase Storage: ${n} (${xm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ct;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ct||(ct={}));function xm(s){return"storage/"+s}function Jp(){const s="An unknown error occurred, please check the error payload for server response.";return new yt(ct.UNKNOWN,s)}function OO(s){return new yt(ct.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}function MO(s){return new yt(ct.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kO(){const s="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new yt(ct.UNAUTHENTICATED,s)}function VO(){return new yt(ct.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function UO(s){return new yt(ct.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")}function y1(){return new yt(ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _1(){return new yt(ct.CANCELED,"User canceled the upload/download.")}function LO(s){return new yt(ct.INVALID_URL,"Invalid URL '"+s+"'.")}function jO(s){return new yt(ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function PO(){return new yt(ct.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+g1+"' property when initializing the app?")}function v1(){return new yt(ct.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zO(){return new yt(ct.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function BO(){return new yt(ct.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qO(s){return new yt(ct.UNSUPPORTED_ENVIRONMENT,`${s} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ip(s){return new yt(ct.INVALID_ARGUMENT,s)}function b1(){return new yt(ct.APP_DELETED,"The Firebase app was deleted.")}function HO(s){return new yt(ct.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function au(s,e){return new yt(ct.INVALID_FORMAT,"String does not match format '"+s+"': "+e)}function Xl(s){throw new yt(ct.INTERNAL_ERROR,"Internal error: "+s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vn.makeFromUrl(e,n)}catch{return new Vn(e,"")}if(r.path==="")return r;throw jO(e)}static makeFromUrl(e,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function u(Te){Te.path.charAt(Te.path.length-1)==="/"&&(Te.path_=Te.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function y(Te){Te.path_=decodeURIComponent(Te.path)}const E="v[A-Za-z0-9_]+",S=n.replace(/[.]/g,"\\."),V="(/([^?#]*).*)?$",F=new RegExp(`^https?://${S}/${E}/b/${o}/o${V}`,"i"),W={bucket:1,path:3},ie=n===p1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,ee="([^?#]*)",me=new RegExp(`^https?://${ie}/${o}/${ee}`,"i"),de=[{regex:p,indices:g,postModify:u},{regex:F,indices:W,postModify:y},{regex:me,indices:{bucket:1,path:2},postModify:y}];for(let Te=0;Te<de.length;Te++){const we=de[Te],ge=we.regex.exec(e);if(ge){const I=ge[we.indices.bucket];let A=ge[we.indices.path];A||(A=""),r=new Vn(I,A),we.postModify(r);break}}if(r==null)throw LO(e);return r}}class FO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(s,e,n){let r=1,o=null,u=null,f=!1,p=0;function g(){return p===2}let y=!1;function E(...ee){y||(y=!0,e.apply(null,ee))}function S(ee){o=setTimeout(()=>{o=null,s(F,g())},ee)}function V(){u&&clearTimeout(u)}function F(ee,...me){if(y){V();return}if(ee){V(),E.call(null,ee,...me);return}if(g()||f){V(),E.call(null,ee,...me);return}r<64&&(r*=2);let de;p===1?(p=2,de=0):de=(r+Math.random())*1e3,S(de)}let W=!1;function ie(ee){W||(W=!0,V(),!y&&(o!==null?(ee||(p=2),clearTimeout(o),S(0)):ee||(p=1)))}return S(0),u=setTimeout(()=>{f=!0,ie(!0)},n),ie}function KO(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(s){return s!==void 0}function QO(s){return typeof s=="function"}function XO(s){return typeof s=="object"&&!Array.isArray(s)}function of(s){return typeof s=="string"||s instanceof String}function gb(s){return Zp()&&s instanceof Blob}function Zp(){return typeof Blob<"u"}function yb(s,e,n,r){if(r<e)throw ip(`Invalid value for '${s}'. Expected ${e} or greater.`);if(r>n)throw ip(`Invalid value for '${s}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(s,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${s}`}function T1(s){const e=encodeURIComponent;let n="?";for(const r in s)if(s.hasOwnProperty(r)){const o=e(r)+"="+e(s[r]);n=n+o+"&"}return n=n.slice(0,-1),n}var fa;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(fa||(fa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(s,e){const n=s>=500&&s<600,o=[408,429].indexOf(s)!==-1,u=e.indexOf(s)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,r,o,u,f,p,g,y,E,S,V=!0,F=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=S,this.retry=V,this.isUsingEmulator=F,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((W,ie)=>{this.resolve_=W,this.reject_=ie,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new ih(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=p=>{const g=p.loaded,y=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const p=u.getErrorCode()===fa.NO_ERROR,g=u.getStatus();if(!p||E1(g,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===fa.ABORT;r(!1,new ih(!1,null,E));return}const y=this.successCodes_.indexOf(g)!==-1;r(!0,new ih(y,u))})},n=(r,o)=>{const u=this.resolve_,f=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(p,p.getResponse());YO(g)?u(g):u()}catch(g){f(g)}else if(p!==null){const g=Jp();g.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,g)):f(g)}else if(o.canceled){const g=this.appDelete_?b1():_1();f(g)}else{const g=y1();f(g)}};this.canceled_?n(!1,new ih(!1,null,!0)):this.backoffId_=GO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ih{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JO(s,e){e!==null&&e.length>0&&(s.Authorization="Firebase "+e)}function ZO(s,e){s["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WO(s,e){e&&(s["X-Firebase-GMPID"]=e)}function e4(s,e){e!==null&&(s["X-Firebase-AppCheck"]=e)}function t4(s,e,n,r,o,u,f=!0,p=!1){const g=T1(s.urlParams),y=s.url+g,E=Object.assign({},s.headers);return WO(E,e),JO(E,n),ZO(E,u),e4(E,r),new $O(y,s.method,E,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,o,f,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function i4(...s){const e=n4();if(e!==void 0){const n=new e;for(let r=0;r<s.length;r++)n.append(s[r]);return n.getBlob()}else{if(Zp())return new Blob(s);throw new yt(ct.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function s4(s,e,n){return s.webkitSlice?s.webkitSlice(e,n):s.mozSlice?s.mozSlice(e,n):s.slice?s.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(s){if(typeof atob>"u")throw qO("base-64");return atob(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rm{constructor(e,n){this.data=e,this.contentType=n||null}}function a4(s,e){switch(s){case Pi.RAW:return new Rm(w1(e));case Pi.BASE64:case Pi.BASE64URL:return new Rm(S1(s,e));case Pi.DATA_URL:return new Rm(l4(e),u4(e))}throw Jp()}function w1(s){const e=[];for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<s.length-1&&(s.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const u=r,f=s.charCodeAt(++n);r=65536|(u&1023)<<10|f&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function o4(s){let e;try{e=decodeURIComponent(s)}catch{throw au(Pi.DATA_URL,"Malformed data URL.")}return w1(e)}function S1(s,e){switch(s){case Pi.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw au(s,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Pi.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw au(s,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=r4(e)}catch(o){throw o.message.includes("polyfill")?o:au(s,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class A1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw au(Pi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=c4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function l4(s){const e=new A1(s);return e.base64?S1(Pi.BASE64,e.rest):o4(e.rest)}function u4(s){return new A1(s).contentType}function c4(s,e){return s.length>=e.length?s.substring(s.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,o="";gb(e)?(this.data_=e,r=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(gb(this.data_)){const r=this.data_,o=s4(r,e,n);return o===null?null:new mr(o)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Zp()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(i4.apply(null,n))}else{const n=e.map(f=>of(f)?a4(Pi.RAW,f).data:f.data_);let r=0;n.forEach(f=>{r+=f.byteLength});const o=new Uint8Array(r);let u=0;return n.forEach(f=>{for(let p=0;p<f.length;p++)o[u++]=f[p]}),new mr(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(s){let e;try{e=JSON.parse(s)}catch{return null}return XO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h4(s){if(s.length===0)return null;const e=s.lastIndexOf("/");return e===-1?"":s.slice(0,e)}function f4(s,e){const n=e.split("/").filter(r=>r.length>0).join("/");return s.length===0?n:s+"/"+n}function R1(s){const e=s.lastIndexOf("/",s.length-2);return e===-1?s:s.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d4(s,e){return e}class cn{constructor(e,n,r,o){this.server=e,this.local=n||e,this.writable=!!r,this.xform=o||d4}}let sh=null;function m4(s){return!of(s)||s.length<2?s:R1(s)}function I1(){if(sh)return sh;const s=[];s.push(new cn("bucket")),s.push(new cn("generation")),s.push(new cn("metageneration")),s.push(new cn("name","fullPath",!0));function e(u,f){return m4(f)}const n=new cn("name");n.xform=e,s.push(n);function r(u,f){return f!==void 0?Number(f):f}const o=new cn("size");return o.xform=r,s.push(o),s.push(new cn("timeCreated")),s.push(new cn("updated")),s.push(new cn("md5Hash",null,!0)),s.push(new cn("cacheControl",null,!0)),s.push(new cn("contentDisposition",null,!0)),s.push(new cn("contentEncoding",null,!0)),s.push(new cn("contentLanguage",null,!0)),s.push(new cn("contentType",null,!0)),s.push(new cn("metadata","customMetadata",!0)),sh=s,sh}function p4(s,e){function n(){const r=s.bucket,o=s.fullPath,u=new Vn(r,o);return e._makeStorageReference(u)}Object.defineProperty(s,"ref",{get:n})}function g4(s,e,n){const r={};r.type="file";const o=n.length;for(let u=0;u<o;u++){const f=n[u];r[f.local]=f.xform(r,e[f.server])}return p4(r,s),r}function C1(s,e,n){const r=x1(e);return r===null?null:g4(s,r,n)}function y4(s,e,n,r){const o=x1(e);if(o===null||!of(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(y=>{const E=s.bucket,S=s.fullPath,V="/b/"+f(E)+"/o/"+f(S),F=xu(V,n,r),W=T1({alt:"media",token:y});return F+W})[0]}function N1(s,e){const n={},r=e.length;for(let o=0;o<r;o++){const u=e[o];u.writable&&(n[u.server]=s[u.local])}return JSON.stringify(n)}class Fo{constructor(e,n,r,o){this.url=e,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(s){if(!s)throw Jp()}function Wp(s,e){function n(r,o){const u=C1(s,o,e);return bs(u!==null),u}return n}function _4(s,e){function n(r,o){const u=C1(s,o,e);return bs(u!==null),y4(u,o,s.host,s._protocol)}return n}function Ru(s){function e(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=VO():o=kO():n.getStatus()===402?o=MO(s.bucket):n.getStatus()===403?o=UO(s.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return e}function D1(s){const e=Ru(s);function n(r,o){let u=e(r,o);return r.getStatus()===404&&(u=OO(s.path)),u.serverResponse=o.serverResponse,u}return n}function v4(s,e,n){const r=e.fullServerUrl(),o=xu(r,s.host,s._protocol),u="GET",f=s.maxOperationRetryTime,p=new Fo(o,u,Wp(s,n),f);return p.errorHandler=D1(e),p}function b4(s,e,n){const r=e.fullServerUrl(),o=xu(r,s.host,s._protocol),u="GET",f=s.maxOperationRetryTime,p=new Fo(o,u,_4(s,n),f);return p.errorHandler=D1(e),p}function T4(s,e){return s&&s.contentType||e&&e.type()||"application/octet-stream"}function O1(s,e,n){const r=Object.assign({},n);return r.fullPath=s.path,r.size=e.size(),r.contentType||(r.contentType=T4(null,e)),r}function E4(s,e,n,r,o){const u=e.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function p(){let de="";for(let Te=0;Te<2;Te++)de=de+Math.random().toString().slice(2);return de}const g=p();f["Content-Type"]="multipart/related; boundary="+g;const y=O1(e,r,o),E=N1(y,n),S="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+g+`\r
Content-Type: `+y.contentType+`\r
\r
`,V=`\r
--`+g+"--",F=mr.getBlob(S,r,V);if(F===null)throw v1();const W={name:y.fullPath},ie=xu(u,s.host,s._protocol),ee="POST",me=s.maxUploadRetryTime,ve=new Fo(ie,ee,Wp(s,n),me);return ve.urlParams=W,ve.headers=f,ve.body=F.uploadData(),ve.errorHandler=Ru(e),ve}class jh{constructor(e,n,r,o){this.current=e,this.total=n,this.finalized=!!r,this.metadata=o||null}}function eg(s,e){let n=null;try{n=s.getResponseHeader("X-Goog-Upload-Status")}catch{bs(!1)}return bs(!!n&&(e||["active"]).indexOf(n)!==-1),n}function w4(s,e,n,r,o){const u=e.bucketOnlyServerUrl(),f=O1(e,r,o),p={name:f.fullPath},g=xu(u,s.host,s._protocol),y="POST",E={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":f.contentType,"Content-Type":"application/json; charset=utf-8"},S=N1(f,n),V=s.maxUploadRetryTime;function F(ie){eg(ie);let ee;try{ee=ie.getResponseHeader("X-Goog-Upload-URL")}catch{bs(!1)}return bs(of(ee)),ee}const W=new Fo(g,y,F,V);return W.urlParams=p,W.headers=E,W.body=S,W.errorHandler=Ru(e),W}function S4(s,e,n,r){const o={"X-Goog-Upload-Command":"query"};function u(y){const E=eg(y,["active","final"]);let S=null;try{S=y.getResponseHeader("X-Goog-Upload-Size-Received")}catch{bs(!1)}S||bs(!1);const V=Number(S);return bs(!isNaN(V)),new jh(V,r.size(),E==="final")}const f="POST",p=s.maxUploadRetryTime,g=new Fo(n,f,u,p);return g.headers=o,g.errorHandler=Ru(e),g}const _b=256*1024;function A4(s,e,n,r,o,u,f,p){const g=new jh(0,0);if(f?(g.current=f.current,g.total=f.total):(g.current=0,g.total=r.size()),r.size()!==g.total)throw zO();const y=g.total-g.current;let E=y;o>0&&(E=Math.min(E,o));const S=g.current,V=S+E;let F="";E===0?F="finalize":y===E?F="upload, finalize":F="upload";const W={"X-Goog-Upload-Command":F,"X-Goog-Upload-Offset":`${g.current}`},ie=r.slice(S,V);if(ie===null)throw v1();function ee(Te,we){const ge=eg(Te,["active","final"]),I=g.current+E,A=r.size();let x;return ge==="final"?x=Wp(e,u)(Te,we):x=null,new jh(I,A,ge==="final",x)}const me="POST",ve=e.maxUploadRetryTime,de=new Fo(n,me,ee,ve);return de.headers=W,de.body=ie.uploadData(),de.progressCallback=p||null,de.errorHandler=Ru(s),de}const Tn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Im(s){switch(s){case"running":case"pausing":case"canceling":return Tn.RUNNING;case"paused":return Tn.PAUSED;case"success":return Tn.SUCCESS;case"canceled":return Tn.CANCELED;case"error":return Tn.ERROR;default:return Tn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n,r){if(QO(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const u=e;this.next=u.next,this.error=u.error,this.complete=u.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(s){return(...e)=>{Promise.resolve().then(()=>s(...e))}}class R4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fa.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fa.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fa.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,o,u){if(this.sent_)throw Xl("cannot .send() more than once");if(Ta(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),u!==void 0)for(const f in u)u.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,u[f].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class I4 extends R4{initXhr(){this.xhr_.responseType="text"}}function wo(){return new I4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=I1(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(ct.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const u=this.isExponentialBackoffExpired();if(E1(o.status,[]))if(u)o=y1();else{this.sleepTime=Math.max(this.sleepTime*2,DO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(ct.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,u)=>{this._resolve=o,this._reject=u,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=w4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(r,wo,e,n);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._uploadUrl=u,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const o=S4(this._ref.storage,this._ref._location,e,this._blob),u=this._ref.storage._makeRequest(o,wo,n,r);this._request=u,u.getPromise().then(f=>{f=f,this._request=void 0,this._updateProgress(f.current),this._needToFetchStatus=!1,f.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=_b*this._chunkMultiplier,n=new jh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((o,u)=>{let f;try{f=A4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(g){this._error=g,this._transition("error");return}const p=this._ref.storage._makeRequest(f,wo,o,u,!1);this._request=p,p.getPromise().then(g=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(g.current),g.finalized?(this._metadata=g.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){_b*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=v4(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(r,wo,e,n);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=E4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(r,wo,e,n);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Im(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,o){const u=new x4(n||void 0,r||void 0,o||void 0);return this._addObserver(u),()=>{this._removeObserver(u)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Im(this._state)){case Tn.SUCCESS:_o(this._resolve.bind(null,this.snapshot))();break;case Tn.CANCELED:case Tn.ERROR:const n=this._reject;_o(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Im(this._state)){case Tn.RUNNING:case Tn.PAUSED:e.next&&_o(e.next.bind(e,this.snapshot))();break;case Tn.SUCCESS:e.complete&&_o(e.complete.bind(e))();break;case Tn.CANCELED:case Tn.ERROR:e.error&&_o(e.error.bind(e,this._error))();break;default:e.error&&_o(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this._service=e,n instanceof Vn?this._location=n:this._location=Vn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new va(e,n)}get root(){const e=new Vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return R1(this._location.path)}get storage(){return this._service}get parent(){const e=h4(this._location.path);if(e===null)return null;const n=new Vn(this._location.bucket,e);return new va(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HO(e)}}function N4(s,e,n){return s._throwIfRoot("uploadBytesResumable"),new C4(s,new mr(e),n)}function D4(s){s._throwIfRoot("getDownloadURL");const e=b4(s.storage,s._location,I1());return s.storage.makeRequestWithTokens(e,wo).then(n=>{if(n===null)throw BO();return n})}function O4(s,e){const n=f4(s._location.path,e),r=new Vn(s._location.bucket,n);return new va(s.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(s){return/^[A-Za-z]+:\/\//.test(s)}function k4(s,e){return new va(s,e)}function M1(s,e){if(s instanceof tg){const n=s;if(n._bucket==null)throw PO();const r=new va(n,n._bucket);return e!=null?M1(r,e):r}else return e!==void 0?O4(s,e):s}function V4(s,e){if(e&&M4(e)){if(s instanceof tg)return k4(s,e);throw ip("To use ref(service, url), the first argument must be a Storage instance.")}else return M1(s,e)}function vb(s,e){const n=e==null?void 0:e[g1];return n==null?null:Vn.makeFromBucketSpec(n,s)}function U4(s,e,n,r={}){s.host=`${e}:${n}`;const o=Ta(e);o&&rp(`https://${s.host}/b`),s._isUsingEmulator=!0,s._protocol=o?"https":"http";const{mockUserToken:u}=r;u&&(s._overrideAuthToken=typeof u=="string"?u:Db(u,s.app.options.projectId))}class tg{constructor(e,n,r,o,u,f=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=p1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CO,this._maxUploadRetryTime=NO,this._requests=new Set,o!=null?this._bucket=Vn.makeFromBucketSpec(o,this._host):this._bucket=vb(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vn.makeFromBucketSpec(this._url,e):this._bucket=vb(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yb("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yb("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(di(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new va(this,e)}_makeRequest(e,n,r,o,u=!0){if(this._deleted)return new FO(b1());{const f=t4(e,this._appId,r,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,o).getPromise()}}const bb="@firebase/storage",Tb="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="storage";function L4(s,e,n){return s=Bt(s),N4(s,e,n)}function j4(s){return s=Bt(s),D4(s)}function P4(s,e){return s=Bt(s),V4(s,e)}function z4(s=Bh(),e){s=Bt(s);const r=Rr(s,k1).getImmediate({identifier:e}),o=Ib("storage");return o&&B4(r,...o),r}function B4(s,e,n,r={}){U4(s,e,n,r)}function q4(s,{instanceIdentifier:e}){const n=s.getProvider("app").getImmediate(),r=s.getProvider("auth-internal"),o=s.getProvider("app-check-internal");return new tg(n,r,o,e,Ea)}function H4(){yi(new Wn(k1,q4,"PUBLIC").setMultipleInstances(!0)),En(bb,Tb,""),En(bb,Tb,"esm2020")}H4();const F4={apiKey:"AIzaSyB4DNhS-zCvy8KIcgx_0PeYVWhDVL1ZPLQ",authDomain:"dub-hub-9cc39.firebaseapp.com",projectId:"dub-hub-9cc39",storageBucket:"dub-hub-9cc39.firebasestorage.app",messagingSenderId:"1047450916221",appId:"1:1047450916221:web:94361dbe146e12a0f3a814",measurementId:"G-SYQD8LSHP9"},lf=jb(F4),Oo=YI(lf);typeof window<"u"&&xN(lf);const rh=RO(lf),G4=z4(lf);function ou(s,e,n){var o,u,f,p;const r={error:s instanceof Error?s.message:String(s),authInfo:{userId:(o=rh.currentUser)==null?void 0:o.uid,email:(u=rh.currentUser)==null?void 0:u.email,emailVerified:(f=rh.currentUser)==null?void 0:f.emailVerified,isAnonymous:(p=rh.currentUser)==null?void 0:p.isAnonymous},operationType:e,path:n};console.error("Firestore Error: ",JSON.stringify(r)),r.error.includes("Missing or insufficient permissions")&&console.error("Firestore Permission Denied! Because you are using your own Firebase project (dub-hub-9cc39), you need to update your Security Rules in the Firebase Console. Go to Firebase Console -> Firestore Database -> Rules and temporarily set: allow read, write: if true;")}function lr(s){const[e,n]=Ce.useState([]);return Ce.useEffect(()=>{const o=pE(KI(Oo,s),u=>{n(u.docs.map(f=>f.data()).sort((f,p)=>Number(f.id)-Number(p.id)))},u=>ou(u,"get",s));return()=>o()},[s]),[e,o=>{n(u=>{const f=typeof o=="function"?o(u):o;new Set(u.map(g=>String(g.id)));const p=new Set(f.map(g=>String(g.id)));for(const g of u)p.has(String(g.id))||lC(su(Oo,s,String(g.id))).catch(y=>ou(y,"delete",`${s}/${g.id}`));for(const g of f)Zm(su(Oo,s,String(g.id)),g).catch(y=>ou(y,"write",`${s}/${g.id}`));return f})}]}function Cm(s,e){const[n,r]=s.split("/"),[o,u]=Ce.useState(e),f=typeof e!="object"||e===null;return Ce.useEffect(()=>{const g=pE(su(Oo,n,r),y=>{if(y.exists()){const E=y.data();u(f?E&&E.value!==void 0?E.value:e:{...e,...E})}else Zm(su(Oo,n,r),f?{value:e}:e).catch(E=>console.warn("Failed initial setDoc",E))},y=>ou(y,"get",s));return()=>g()},[n,r]),[o,g=>{u(y=>{const E=typeof g=="function"?g(y):g;return Zm(su(Oo,n,r),f?{value:E}:E).catch(S=>ou(S,"write",s)),E})}]}const Nm={Moderator:"#ff4d6d",Unknown:"#1e90ff",C:"#ff8c00",B:"#cd7f32",A:"#9b59b6",S:"#c0c0c0","Immortal/SS":"#ffd700"},Eb=["Immortal/SS","S","A","B","C","Unknown"];function K4(){const[s,e]=lr("recruitment"),[n,r]=lr("members"),[o,u]=lr("followers"),[f,p]=lr("followerApps"),[g]=lr("socials"),[y,E]=lr("footerLinks"),[S,V]=Ce.useState({name:"",url:""}),[F,W]=lr("clips"),[ie,ee]=lr("episodes"),[me,ve]=Cm("config/adminPass","NAFIJR.01"),[de,Te]=Ce.useState(!1),[we,ge]=Ce.useState(null),[I,A]=Ce.useState(!1),[x,k]=Cm("stats/dub-hub-stats",{projects:"60+",artists:"65+",members:"8K+"}),[N,U]=Cm("config/webParams",{title:`BRINGING
ANIME
TO LIFE`,desc:"Professional Bengali dubbing. Quality meets passion.",about:"DUB HUB is a leading Bengali Anime Dubbing platform where passion meets creativity.",adminName:"N A F I",adminBio:"Founder & Director",adminColor:"admin-multiple",adminImage:"/logo.png"}),[R,Xe]=Ce.useState(""),[ht,G]=Ce.useState(""),[te,ce]=Ce.useState({name:"",email:"",fb:"",hobby:"",image:""}),[Se,ke]=Ce.useState({name:"",fb:"",image:""}),[M,Q]=Ce.useState({name:"",url:""}),[ne,re]=Ce.useState({title:"",thumbSrc:"",videoSrc:""}),[X,he]=Ce.useState({animeName:"",season:"",title:"",thumbSrc:"",videoSrc:""}),[Me,bt]=Ce.useState(""),[it,Qi]=Ce.useState(""),[Ln,Xi]=Ce.useState(""),[xs,wn]=Ce.useState(1),[$i,ti]=Ce.useState("home"),[ni,Ji]=Ce.useState(""),[mt,rt]=Ce.useState(null),[jn,Go]=Ce.useState(!1),[Rs,Yt]=Ce.useState(!1),Zi=()=>{ht===me?(Te(!0),ge("dashboard"),G(""),wn(1),Xi("")):alert("Wrong Password!")},Ir=()=>{const D=Ln.toLowerCase()==="admin"||Ln.toLowerCase()===N.adminName.toLowerCase(),oe=n.some(le=>(le.email.toLowerCase()===Ln.toLowerCase()||le.name.toLowerCase()===Ln.toLowerCase())&&le.rank==="Admin");D||oe?wn(2):alert("Verification Failed. You are not an Admin!")},Cr=()=>{if(!te.name||!te.email||!te.fb||!te.hobby)return alert("Bhai, sob gulo thik moto puron koro!");e([...s,{id:Date.now(),...te,image:te.image||"/logo.png"}]),alert("Application Sent!"),ge(null),ce({name:"",email:"",fb:"",hobby:"",image:""})},_i=()=>{if(!Se.name||!Se.fb)return alert("Please fill all details!");p([...f,{id:Date.now(),...Se,image:Se.image||"/logo.png"}]),alert("Application to join as follower sent!"),ge(null),ke({name:"",fb:"",image:""})},Ko=D=>{const oe=f.find(le=>le.id===D);oe&&(u([...o,oe]),p(f.filter(le=>le.id!==D)))},Ra=D=>{p(f.filter(oe=>oe.id!==D))},Ia=D=>{confirm("Are you sure you want to remove this follower?")&&u(o.filter(oe=>oe.id!==D))},Ca=D=>{const oe=s.find(le=>le.id===D);oe&&(r([...n,{...oe,rank:"Unknown",special:!1}]),e(s.filter(le=>le.id!==D)))},Sn=()=>{if(!ne.title||!ne.thumbSrc||!ne.videoSrc)return alert("Please fill all fields");const D={id:Date.now(),title:ne.title,thumbSrc:ne.thumbSrc,videoSrc:ne.videoSrc};W([...F,D]),re({title:"",thumbSrc:"",videoSrc:""}),alert("Clip Added!")},Vt=()=>{if(!X.animeName||!X.season||!X.title||!X.thumbSrc||!X.videoSrc)return alert("Please fill all fields");const D={id:Date.now(),animeName:X.animeName,season:X.season,title:X.title,thumbSrc:X.thumbSrc,videoSrc:X.videoSrc};ee([...ie,D]),he({animeName:"",season:"",title:"",thumbSrc:"",videoSrc:""}),alert("Episode Added!")},At=(D,oe)=>{var fn;const le=(fn=D.target.files)==null?void 0:fn[0];if(!le)return;oe("Uploading...");const Ut=P4(G4,`uploads/${Date.now()}_${le.name.replace(/[^a-zA-Z0-9.]/g,"")}`),An=L4(Ut,le);An.on("state_changed",vi=>{const Na=Math.round(vi.bytesTransferred/vi.totalBytes*100);oe(`Uploading... ${Na}%`)},vi=>{console.error("Upload failed",vi),alert(`Firebase Storage Permission Denied!

Because you are using your own Firebase project, you need to update your Storage Security Rules.

Go to Firebase Console -> Storage -> Rules and temporarily set:
allow read, write: if true;`),oe("")},()=>{j4(An.snapshot.ref).then(vi=>{oe(vi)})})},pt=n.filter(D=>D.rank==="Admin"),Nr=n.filter(D=>D.rank==="Moderator"),Is=n.filter(D=>D.rank!=="Moderator"&&D.rank!=="Admin").sort((D,oe)=>Eb.indexOf(D.rank)-Eb.indexOf(oe.rank)),Cs=()=>{ti("home"),Ji(""),window.scrollTo({top:0,behavior:"smooth"})};return b.jsxs(b.Fragment,{children:[b.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"fixed inset-0 w-full h-full object-cover z-[-1] opacity-20 pointer-events-none",src:"/dubhub_intro_video.mp4"}),b.jsxs("header",{className:"flex justify-between items-center py-4 md:py-5 px-[5%] max-w-[1400px] w-full mx-auto bg-[#0b0e14]/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/5",children:[b.jsx("div",{onClick:Cs,className:"text-[22px] md:text-[26px] font-bold rainbow-text uppercase cursor-pointer hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(138,43,226,0.6)] shrink-0",children:"DUB HUB"}),b.jsxs("nav",{className:"hidden xl:flex space-x-6 items-center",children:[b.jsx("button",{onClick:Cs,className:"text-white hover:text-[#00ced1] transition-colors font-medium text-sm",children:"HOME"}),b.jsx("a",{href:"#team-section",className:"text-white hover:text-[#00ced1] transition-colors font-medium text-sm",children:"TEAM"}),b.jsx("button",{onClick:()=>ge("join"),className:"text-white hover:text-[#00ced1] transition-colors font-medium text-sm",children:"JOIN TEAM"}),b.jsx("button",{onClick:()=>ge("join-follower"),className:"text-[#e85a71] hover:text-[#ff7b90] transition-colors font-medium text-sm",children:"JOIN AS FOLLOWER"}),b.jsx("button",{onClick:()=>ge("meet-followers"),className:"text-[#e85a71] hover:text-[#ff7b90] transition-colors font-medium text-sm",children:"MEET FOLLOWERS"}),b.jsxs("button",{onClick:()=>ge("login"),className:"text-white hover:text-[#00ced1] transition-colors font-medium relative text-sm",children:["ADMIN PANEL",s.length>0&&b.jsx("span",{className:"absolute -top-2.5 -right-3.5 bg-red-600 text-white text-[10px] py-[2px] px-[6px] rounded-full",children:s.length})]})]}),b.jsxs("button",{onClick:()=>A(!0),className:"xl:hidden text-white hover:text-[#00ced1] relative p-1 transition-colors",children:[b.jsx(PS,{size:28}),s.length>0&&b.jsx("span",{className:"absolute top-1 right-1 bg-red-600 w-2.5 h-2.5 rounded-full border border-[#0b0e14]"})]})]}),I&&b.jsxs("div",{className:"fixed inset-0 bg-[#0b0e14] z-[8000] flex flex-col pt-20 px-8 overflow-y-auto pb-10 animate-in slide-in-from-right-8 duration-300",children:[b.jsx("button",{onClick:()=>A(!1),className:"absolute top-6 right-6 text-gray-300 hover:text-red-500 bg-white/5 p-2 rounded-full",children:b.jsx(ur,{size:28})}),b.jsxs("div",{className:"flex flex-col gap-6 mt-8",children:[b.jsx("button",{onClick:()=>{A(!1),Cs()},className:"text-left text-2xl font-bold text-white hover:text-[#00ced1] uppercase transition-colors",children:"Home"}),b.jsx("a",{href:"#team-section",onClick:()=>A(!1),className:"text-left text-2xl font-bold text-white hover:text-[#00ced1] uppercase transition-colors",children:"Team"}),b.jsx("button",{onClick:()=>{A(!1),ge("join")},className:"text-left text-2xl font-bold text-white hover:text-[#00ced1] uppercase transition-colors",children:"Join Team"}),b.jsx("button",{onClick:()=>{A(!1),ge("join-follower")},className:"text-left text-2xl font-bold text-[#e85a71] hover:text-[#ff7b90] uppercase transition-colors",children:"Join as Follower"}),b.jsx("button",{onClick:()=>{A(!1),ge("meet-followers")},className:"text-left text-2xl font-bold text-[#e85a71] hover:text-[#ff7b90] uppercase transition-colors",children:"Meet Followers"}),b.jsx("div",{className:"h-[1px] w-full bg-white/10 my-2"}),b.jsxs("button",{onClick:()=>{A(!1),ge("login")},className:"text-left text-2xl font-bold text-[#8a2be2] hover:text-[#00ced1] uppercase transition-colors flex items-center justify-between",children:[b.jsx("span",{children:"Admin Panel"}),s.length>0&&b.jsxs("span",{className:"text-sm bg-red-600 text-white px-3 py-1 rounded-full",children:[s.length," pending"]})]})]})]}),g.length>0&&b.jsx("div",{className:"flex justify-center flex-wrap gap-5 p-4 bg-white/5 backdrop-blur-sm",children:g.map((D,oe)=>b.jsxs("a",{href:D.url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-white hover:text-[#00ced1] hover:scale-110 transition-all text-sm font-medium",children:[D.name.toLowerCase().includes("facebook")?b.jsx(NS,{size:20,className:"text-[#00ced1]"}):b.jsx(kv,{size:20,className:"text-[#00ced1]"}),D.name]},oe))}),$i==="home"&&b.jsxs(b.Fragment,{children:[b.jsxs("section",{className:"py-[60px] px-[5%] flex flex-col md:flex-row justify-between items-center min-h-[60vh]",children:[b.jsxs("div",{className:"max-w-xl z-10",children:[b.jsx("h1",{className:"text-[38px] sm:text-5xl md:text-[55px] leading-[1.1] mb-5 font-bold whitespace-pre-line",children:N.title}),b.jsx("p",{className:"text-[#b1b1b1] mb-8 text-lg font-medium",children:N.desc}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mt-8",children:[b.jsxs("button",{onClick:()=>ti("clips"),className:"watch-btn px-6 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base",children:[b.jsx(ra,{size:20,className:"text-[#00ced1]"})," Watch Dubbing Clip with DUB HUB"]}),b.jsxs("button",{onClick:()=>ti("anime"),className:"watch-btn px-6 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base",children:[b.jsx(Vv,{size:20,className:"text-[#00ced1]"})," Watch Bangla Anime With DUB HUB"]})]})]}),b.jsx("div",{className:"mt-12 md:mt-0 z-10 hidden md:block",children:b.jsx("img",{src:"/logo.png",alt:"Logo",className:"w-[350px] h-[350px] object-cover rounded-[20px] shadow-[0_0_30px_rgba(138,43,226,0.6)] float-anim"})})]}),b.jsxs("div",{className:"flex flex-col md:flex-row justify-around p-8 bg-[#161b22]/80 backdrop-blur-md rounded-[20px] mx-[5%] max-w-5xl xl:mx-auto border border-[#333] mb-16 gap-8 relative z-10",children:[b.jsxs("div",{className:"text-center",children:[b.jsx("h2",{className:"text-[35px] text-[#00ced1] font-bold m-0",children:(x==null?void 0:x.projects)||"0"}),b.jsx("p",{className:"text-[#b1b1b1] font-medium mt-2 tracking-wider text-sm",children:"PROJECTS"})]}),b.jsxs("div",{className:"text-center",children:[b.jsx("h2",{className:"text-[35px] text-[#00ced1] font-bold m-0",children:(x==null?void 0:x.artists)||"0"}),b.jsx("p",{className:"text-[#b1b1b1] font-medium mt-2 tracking-wider text-sm",children:"ARTISTS"})]}),b.jsxs("div",{className:"text-center",children:[b.jsx("h2",{className:"text-[35px] text-[#00ced1] font-bold m-0",children:(x==null?void 0:x.members)||"0"}),b.jsx("p",{className:"text-[#b1b1b1] font-medium mt-2 tracking-wider text-sm",children:"MEMBERS"})]})]}),b.jsx("h2",{id:"team-section",className:"text-center text-[35px] font-bold my-[60px] tracking-wide relative z-10",children:"LEGENDARY TEAM"}),b.jsxs("div",{className:"relative z-10",children:[b.jsxs("div",{className:"flex justify-center flex-wrap gap-8 mb-10 px-[5%] max-w-5xl mx-auto",children:[b.jsxs("div",{className:`bg-[#161b22] p-[25px] rounded-[15px] text-center w-[250px] relative ${N.adminColor}`,children:[b.jsx("span",{className:"text-[11px] py-1 px-3 rounded-[20px] font-bold text-white bg-black",children:"Rank-ADMIN"}),b.jsx("br",{}),b.jsx("br",{}),b.jsx("img",{src:N.adminImage||"/logo.png",className:"w-[100px] h-[100px] rounded-full mb-[15px] border-4 border-white object-cover mx-auto"}),b.jsx("h3",{className:"font-bold text-xl",children:N.adminName}),b.jsx("p",{className:"text-sm mt-1",children:N.adminBio})]}),pt.map(D=>b.jsxs("div",{className:`bg-[#161b22] p-[25px] rounded-[15px] text-center w-[220px] transition-all relative border-b-4 border-[#8a2be2] shadow-[0_4px_15px_rgba(138,43,226,0.2)] ${D.special?"float-special":"float-anim"}`,children:[b.jsx("span",{className:"text-[11px] py-1 px-3 rounded-[20px] font-bold text-white bg-[#8a2be2]",children:"Rank-Admin"}),b.jsx("br",{}),b.jsx("br",{}),b.jsx("img",{src:D.image||"/logo.png",className:"w-[100px] h-[100px] rounded-full mb-[15px] border-2 border-white object-cover mx-auto"}),b.jsx("h3",{className:"font-bold text-lg",children:D.name}),b.jsx("p",{className:"text-xs text-[#b1b1b1] mt-2",children:D.hobby})]},D.id))]}),Nr.length>0&&b.jsx("div",{className:"flex justify-center flex-wrap gap-8 mb-12 px-[5%] max-w-3xl mx-auto",children:Nr.map(D=>b.jsxs("div",{className:`bg-[#161b22] p-[25px] rounded-[15px] text-center w-[220px] transition-all relative border-b-4 border-[#ff4d6d] shadow-[0_4px_15px_rgba(255,77,109,0.2)] ${D.special?"float-special":"float-anim"}`,children:[b.jsx("span",{className:"text-[11px] py-1 px-3 rounded-[20px] font-bold text-white bg-[#ff4d6d]",children:"Rank-Moderator"}),b.jsx("br",{}),b.jsx("br",{}),b.jsx("img",{src:D.image||"/logo.png",className:"w-[100px] h-[100px] rounded-full mb-[15px] border-2 border-white object-cover mx-auto"}),b.jsx("h3",{className:"font-bold text-lg",children:D.name}),b.jsx("p",{className:"text-xs text-[#b1b1b1] mt-2",children:D.hobby})]},D.id))}),b.jsx("div",{className:"grid grid-cols-2 gap-8 px-[5%] pb-[100px] max-w-3xl mx-auto",children:Is.map(D=>{const oe=Nm[D.rank]||Nm.Unknown;return b.jsxs("div",{className:`bg-[#161b22]/90 p-[20px] sm:p-[25px] rounded-[15px] text-center transition-all relative border-b-4 ${D.special?"float-special":"float-anim"}`,style:{borderColor:oe},children:[b.jsxs("span",{className:"text-[10px] sm:text-[11px] py-1 px-2 sm:px-3 rounded-[20px] font-bold text-black",style:{background:oe},children:["Rank-",D.rank]}),b.jsx("br",{}),b.jsx("br",{}),b.jsx("img",{src:D.image||"/logo.png",className:"w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full mb-[15px] border-2 border-white object-cover mx-auto"}),b.jsx("h3",{className:"font-bold text-base sm:text-lg",children:D.name}),b.jsx("p",{className:"text-[10px] sm:text-xs text-[#b1b1b1] mt-2 line-clamp-2",children:D.hobby})]},D.id)})})]})]}),$i==="clips"&&b.jsx("div",{className:"min-h-screen pt-10 px-[5%] relative z-10 pb-20",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsx("h2",{className:"text-3xl font-bold mb-6 text-center text-[#00ced1] clip-text",children:"DUBBING CLIPS"}),b.jsxs("div",{className:"relative mb-10 w-full max-w-2xl mx-auto",children:[b.jsx($c,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:20}),b.jsx("input",{type:"text",placeholder:"Search clips...",value:ni,onChange:D=>Ji(D.target.value),className:"w-full bg-[#161b22] border border-[#333] rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#00ced1] shadow-[0_0_15px_rgba(0,206,209,0.1)] transition-all"})]}),b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[F.filter(D=>D.title.toLowerCase().includes(ni.toLowerCase())).map(D=>b.jsxs("div",{onClick:()=>rt({type:"clip",id:D.id}),className:"bg-[#161b22] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform border border-[#333] hover:border-[#00ced1] group relative",children:[b.jsxs("div",{className:"aspect-video relative bg-[#0b0e14]",children:[b.jsx("img",{src:D.thumbSrc,alt:D.title,className:"w-full h-full object-cover"}),b.jsx("div",{className:"absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center",children:b.jsx(ra,{className:"text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg",size:48})})]}),b.jsx("div",{className:"p-4",children:b.jsx("h3",{className:"font-bold text-lg",children:D.title})})]},D.id)),F.length===0&&b.jsx("p",{className:"text-center text-gray-400 col-span-2 py-10",children:"No clips available yet. Check back later!"})]})]})}),$i==="anime"&&b.jsx("div",{className:"min-h-screen pt-10 px-[5%] relative z-10 pb-20",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsx("h2",{className:"text-3xl font-bold mb-6 text-center text-[#ff4d6d] clip-text uppercase",children:"Bangla Anime Episodes"}),b.jsxs("div",{className:"relative mb-10 w-full max-w-2xl mx-auto",children:[b.jsx($c,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:20}),b.jsx("input",{type:"text",placeholder:"Search anime or episodes...",value:ni,onChange:D=>Ji(D.target.value),className:"w-full bg-[#161b22] border border-[#333] rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#ff4d6d] shadow-[0_0_15px_rgba(255,77,109,0.1)] transition-all"})]}),b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[ie.filter(D=>D.animeName.toLowerCase().includes(ni.toLowerCase())||D.title.toLowerCase().includes(ni.toLowerCase())).map(D=>b.jsxs("div",{onClick:()=>rt({type:"episode",id:D.id}),className:"bg-[#161b22] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform border border-[#333] hover:border-[#ff4d6d] group relative",children:[b.jsxs("div",{className:"aspect-video relative bg-[#0b0e14]",children:[b.jsx("img",{src:D.thumbSrc,alt:D.title,className:"w-full h-full object-cover"}),b.jsx("div",{className:"absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center",children:b.jsx(ra,{className:"text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg",size:48})}),b.jsx("div",{className:"absolute top-2 left-2 bg-[#ff4d6d] text-white text-xs font-bold px-2 py-1 rounded",children:D.season})]}),b.jsxs("div",{className:"p-4",children:[b.jsx("p",{className:"text-[#00ced1] text-xs font-bold uppercase mb-1",children:D.animeName}),b.jsx("h3",{className:"font-bold text-lg leading-tight",children:D.title})]})]},D.id)),ie.length===0&&b.jsx("p",{className:"text-center text-gray-400 col-span-2 py-10",children:"No anime episodes available yet. Check back later!"})]})]})}),b.jsxs("footer",{className:"bg-[#06080a] py-[60px] px-[5%] text-center relative z-10 border-t border-white/10",children:[b.jsx("div",{className:"max-w-[700px] mx-auto mb-6 text-[#b1b1b1] text-sm leading-[1.6]",dangerouslySetInnerHTML:{__html:N.about}}),y.length>0&&b.jsx("div",{className:"flex justify-center gap-4 flex-wrap my-8",children:y.map(D=>b.jsx("a",{href:D.url,target:"_blank",rel:"noreferrer",className:"rainbow-text text-lg md:text-xl font-bold uppercase transition-transform hover:scale-105",children:D.name},D.id))}),b.jsxs("p",{className:"text-sm font-medium text-gray-400",children:["Created by ",b.jsx("a",{href:"https://www.facebook.com/md.an.nafi.1212",target:"_blank",rel:"noreferrer",className:"rainbow-text font-bold text-base tracking-widest cursor-pointer ml-1",children:"N A F I"})]})]}),mt&&b.jsx(Y4,{activeVideo:mt,onClose:()=>rt(null),allClips:F,allEpisodes:ie,setActiveVideo:rt}),we&&we!=="dashboard"&&b.jsx("div",{className:"fixed inset-0 bg-black/85 z-[3000] flex items-center justify-center p-4 backdrop-blur-sm",children:b.jsxs("div",{className:"bg-[#161b22] p-[30px] rounded-[20px] shadow-2xl w-full max-w-[450px] border border-[#8a2be2]/50 max-h-[85vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200",children:[b.jsx("button",{onClick:()=>ge(null),className:"absolute top-4 right-4 text-gray-400 hover:text-white",children:b.jsx(ur,{size:20})}),we==="login"&&b.jsxs(b.Fragment,{children:[b.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-[#00ced1] uppercase",children:"Admin Access"}),xs===1?b.jsxs(b.Fragment,{children:[b.jsx("p",{className:"text-center text-sm text-gray-400 mb-6",children:"Enter your email or admin name to verify identity."}),b.jsx("input",{type:"text",placeholder:"Admin Name or Email Address",value:Ln,onChange:D=>Xi(D.target.value),className:"w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"}),b.jsx("button",{onClick:Ir,className:"w-full py-3 rounded-lg font-semibold text-black bg-[#00ced1] hover:bg-[#00ced1]/90 shadow-[0_0_15px_rgba(0,206,209,0.3)] transition-all",children:"Verify Identity"})]}):b.jsxs(b.Fragment,{children:[b.jsx("p",{className:"text-center text-sm text-[#00ced1] mb-6",children:"Identity Verified. Please enter password."}),b.jsx("input",{type:"password",placeholder:"Enter Dashboard Password",value:ht,onChange:D=>G(D.target.value),className:"w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"}),b.jsx("button",{onClick:Zi,className:"w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#8a2be2] to-[#00ced1] hover:opacity-90",children:"Login"})]})]}),we==="join"&&b.jsxs(b.Fragment,{children:[b.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Join Team"}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"text-xs text-[#00ced1] uppercase font-bold mb-1 block",children:"Profile Picture (Optional)"}),b.jsx("input",{type:"file",accept:"image/*",onChange:D=>At(D,oe=>ce(le=>({...le,image:oe}))),className:"w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00ced1]/20 file:text-[#00ced1] hover:file:bg-[#00ced1]/30 mb-2"}),te.image.startsWith("Uploading...")&&b.jsx("p",{className:"text-[#00ced1] text-xs font-bold",children:te.image}),b.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Leave empty to use default logo. Upload progress may take a moment."})]}),b.jsx("input",{type:"text",placeholder:"Full Name",value:te.name,onChange:D=>ce({...te,name:D.target.value}),className:"w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"}),b.jsx("input",{type:"email",placeholder:"Email Address",value:te.email,onChange:D=>ce({...te,email:D.target.value}),className:"w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"}),b.jsx("input",{type:"text",placeholder:"Facebook Profile URL",value:te.fb,onChange:D=>ce({...te,fb:D.target.value}),className:"w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"}),b.jsx("input",{type:"text",placeholder:"Hobby / Skills",value:te.hobby,onChange:D=>ce({...te,hobby:D.target.value}),className:"w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"}),b.jsx("button",{onClick:Cr,disabled:te.image.startsWith("Uploading..."),className:"w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#8a2be2] to-[#00ced1] hover:opacity-90 disabled:opacity-50",children:"Submit Application"})]}),we==="join-follower"&&b.jsxs(b.Fragment,{children:[b.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-[#e85a71]",children:"Join as Follower"}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"text-xs text-[#e85a71] uppercase font-bold mb-1 block",children:"Profile Picture (Optional)"}),b.jsx("input",{type:"file",accept:"image/*",onChange:D=>At(D,oe=>ke(le=>({...le,image:oe}))),className:"w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#e85a71]/20 file:text-[#e85a71] hover:file:bg-[#e85a71]/30 mb-2"}),Se.image.startsWith("Uploading...")&&b.jsx("p",{className:"text-[#e85a71] text-xs font-bold",children:Se.image}),b.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Leave empty to use default logo. Upload progress may take a moment."})]}),b.jsx("input",{type:"text",placeholder:"Full Name",value:Se.name,onChange:D=>ke({...Se,name:D.target.value}),className:"w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#e85a71] outline-none"}),b.jsx("input",{type:"text",placeholder:"Facebook Profile URL",value:Se.fb,onChange:D=>ke({...Se,fb:D.target.value}),className:"w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#e85a71] outline-none"}),b.jsx("button",{onClick:_i,disabled:Se.image.startsWith("Uploading..."),className:"w-full py-3 rounded-lg font-semibold text-white bg-[#e85a71] hover:bg-[#d6415a] disabled:opacity-50",children:"Join Now"})]}),we==="meet-followers"&&b.jsxs(b.Fragment,{children:[b.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-[#e85a71]",children:"Our Followers"}),o.length===0?b.jsx("p",{className:"text-center text-gray-400",children:"No followers yet. Be the first!"}):b.jsx("div",{className:"grid grid-cols-2 gap-4",children:o.map(D=>b.jsxs("div",{className:"bg-[#e85a71]/10 border border-[#e85a71]/30 p-4 rounded-xl text-center float-follower flex flex-col items-center",children:[b.jsx("div",{className:"relative w-[50px] h-[50px] bg-[#2a2a3e] rounded-full border-2 border-[#e85a71] mb-2 flex items-center justify-center text-lg font-bold text-white uppercase overflow-hidden",children:D.image&&D.image!=="/logo.png"?b.jsx("img",{src:D.image,className:"w-full h-full object-cover"}):D.name[0]}),b.jsx("h4",{className:"font-bold text-[#e85a71] truncate w-full text-sm",children:D.name}),b.jsx("a",{href:D.fb,target:"_blank",rel:"noreferrer",className:"text-[10px] text-blue-400 hover:text-blue-300 mt-1",children:"FB Profile"})]},D.id))})]})]})}),we==="dashboard"&&de&&b.jsx("div",{className:"fixed inset-0 bg-[#0b0e14] z-[4000] p-4 md:p-8 overflow-y-auto w-full box-border",children:b.jsxs("div",{className:"max-w-6xl mx-auto pb-20",children:[b.jsxs("div",{className:"flex justify-between items-center mb-10 sticky top-0 bg-[#0b0e14] py-4 z-10 border-b border-[#333]",children:[b.jsx("h1",{className:"text-2xl md:text-3xl font-bold clip-text uppercase",children:"ADMIN DASHBOARD"}),b.jsxs("button",{onClick:()=>{Te(!1),ge(null)},className:"px-4 py-2 text-sm bg-[#e74c3c] text-white rounded-lg font-bold flex items-center gap-2 hover:bg-red-700 transition-colors",children:[b.jsx(VS,{size:16})," ",b.jsx("span",{className:"hidden sm:inline",children:"LOGOUT"})]})]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[b.jsxs("div",{className:"bg-[#161b22] p-6 rounded-2xl border border-[#00ced1] md:col-span-2 shadow-[0_0_15px_rgba(0,206,209,0.1)]",children:[b.jsxs("h3",{className:"flex items-center gap-2 text-xl font-bold mb-6 text-[#00ced1]",children:[b.jsx(Vv,{size:20})," Content Upload Control"]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[b.jsxs("div",{className:"bg-[#0b0e14] p-5 rounded-xl border border-[#333]",children:[b.jsx("h4",{className:"font-bold text-lg mb-4 text-white",children:"Add Dubbing Clip"}),b.jsx("input",{type:"text",placeholder:"Clip Title",value:ne.title,onChange:D=>re({...ne,title:D.target.value}),className:"w-full p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white"}),b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{className:"text-xs text-gray-400 mb-1 block",children:"Thumbnail Banner"}),b.jsx("input",{type:"file",accept:"image/*",onChange:D=>At(D,oe=>re(le=>({...le,thumbSrc:oe}))),className:"w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00ced1]/20 file:text-[#00ced1] hover:file:bg-[#00ced1]/30 mb-2"}),ne.thumbSrc.startsWith("Uploading...")&&b.jsx("p",{className:"text-[#00ced1] text-xs font-bold",children:ne.thumbSrc})]}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"text-xs text-gray-400 mb-1 block",children:"Video File"}),b.jsx("input",{type:"file",accept:"video/*",onChange:D=>At(D,oe=>re(le=>({...le,videoSrc:oe}))),className:"w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8a2be2]/20 file:text-[#8a2be2] hover:file:bg-[#8a2be2]/30 mb-2"}),ne.videoSrc.startsWith("Uploading...")&&b.jsx("p",{className:"text-[#8a2be2] text-xs font-bold",children:ne.videoSrc})]}),b.jsx("button",{onClick:Sn,disabled:ne.videoSrc.startsWith("Uploading...")||ne.thumbSrc.startsWith("Uploading..."),className:"w-full py-3 rounded-lg bg-[#00ced1] text-black font-bold hover:bg-opacity-90 mb-4 disabled:opacity-50",children:"Publish Clip"}),b.jsx("button",{onClick:()=>Go(!jn),className:"w-full py-2 border border-[#00ced1] text-[#00ced1] rounded-lg font-bold hover:bg-[#00ced1]/10 transition mb-4",children:jn?"Hide All Clips":"See All Clips"}),jn&&b.jsxs("div",{className:"flex flex-col gap-2 max-h-[300px] overflow-y-auto",children:[b.jsx("input",{type:"text",placeholder:"Search Clips...",className:"w-full p-2 mb-2 bg-[#161b22] border border-[#333] rounded text-white text-sm",onChange:D=>{const oe=D.target.value.toLowerCase();W(le=>[...le].map(Ut=>({...Ut,_hidden:!Ut.title.toLowerCase().includes(oe)})))}}),F.filter(D=>!D._hidden).map(D=>b.jsxs("div",{className:"flex justify-between items-center bg-[#161b22] p-2 rounded border border-[#333]",children:[b.jsx("span",{className:"text-white text-sm truncate max-w-[150px]",children:D.title}),b.jsxs("div",{className:"flex gap-2",children:[b.jsx("button",{onClick:()=>rt({type:"clip",id:D.id}),className:"text-[#00ced1] p-1 hover:bg-[#00ced1]/20 rounded",children:b.jsx(ra,{size:16})}),b.jsx("button",{onClick:()=>{confirm("Delete clip?")&&W(oe=>oe.filter(le=>le.id!==D.id))},className:"text-red-500 p-1 hover:bg-red-500/20 rounded",children:b.jsx(ur,{size:16})})]})]},D.id)),F.length===0&&b.jsx("p",{className:"text-gray-500 text-sm",children:"No clips found."})]})]}),b.jsxs("div",{className:"bg-[#0b0e14] p-5 rounded-xl border border-[#333]",children:[b.jsx("h4",{className:"font-bold text-lg mb-4 text-[#ff4d6d]",children:"Add Anime Episode"}),b.jsxs("div",{className:"flex gap-2",children:[b.jsx("input",{type:"text",placeholder:"Anime Name",value:X.animeName,onChange:D=>he({...X,animeName:D.target.value}),className:"flex-[2] p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white"}),b.jsx("input",{type:"text",placeholder:"Season",value:X.season,onChange:D=>he({...X,season:D.target.value}),className:"flex-1 p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white text-center"})]}),b.jsx("input",{type:"text",placeholder:"Episode Title",value:X.title,onChange:D=>he({...X,title:D.target.value}),className:"w-full p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white"}),b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{className:"text-xs text-gray-400 mb-1 block",children:"Thumbnail Banner"}),b.jsx("input",{type:"file",accept:"image/*",onChange:D=>At(D,oe=>he(le=>({...le,thumbSrc:oe}))),className:"w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ff4d6d]/20 file:text-[#ff4d6d] hover:file:bg-[#ff4d6d]/30 mb-2"}),X.thumbSrc.startsWith("Uploading...")&&b.jsx("p",{className:"text-[#ff4d6d] text-xs font-bold",children:X.thumbSrc})]}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"text-xs text-gray-400 mb-1 block",children:"Video File"}),b.jsx("input",{type:"file",accept:"video/*",onChange:D=>At(D,oe=>he(le=>({...le,videoSrc:oe}))),className:"w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8a2be2]/20 file:text-[#8a2be2] hover:file:bg-[#8a2be2]/30 mb-2"}),X.videoSrc.startsWith("Uploading...")&&b.jsx("p",{className:"text-[#8a2be2] text-xs font-bold",children:X.videoSrc})]}),b.jsx("button",{onClick:Vt,disabled:X.videoSrc.startsWith("Uploading...")||X.thumbSrc.startsWith("Uploading..."),className:"w-full py-3 rounded-lg bg-[#ff4d6d] text-white font-bold hover:bg-opacity-90 mb-4 disabled:opacity-50",children:"Publish Episode"}),b.jsx("button",{onClick:()=>Yt(!Rs),className:"w-full py-2 border border-[#ff4d6d] text-[#ff4d6d] rounded-lg font-bold hover:bg-[#ff4d6d]/10 transition mb-4",children:Rs?"Hide All Episodes":"See All Episodes"}),Rs&&b.jsxs("div",{className:"flex flex-col gap-2 max-h-[300px] overflow-y-auto",children:[b.jsx("input",{type:"text",placeholder:"Search Episodes...",className:"w-full p-2 mb-2 bg-[#161b22] border border-[#333] rounded text-white text-sm",onChange:D=>{const oe=D.target.value.toLowerCase();ee(le=>[...le].map(Ut=>({...Ut,_hidden:!Ut.title.toLowerCase().includes(oe)&&!Ut.animeName.toLowerCase().includes(oe)})))}}),ie.filter(D=>!D._hidden).map(D=>b.jsxs("div",{className:"flex justify-between items-center bg-[#161b22] p-2 rounded border border-[#333]",children:[b.jsxs("span",{className:"text-white text-sm truncate max-w-[150px]",children:[D.animeName," - ",D.title]}),b.jsxs("div",{className:"flex gap-2",children:[b.jsx("button",{onClick:()=>rt({type:"episode",id:D.id}),className:"text-[#ff4d6d] p-1 hover:bg-[#ff4d6d]/20 rounded",children:b.jsx(ra,{size:16})}),b.jsx("button",{onClick:()=>{confirm("Delete episode?")&&ee(oe=>oe.filter(le=>le.id!==D.id))},className:"text-red-500 p-1 hover:bg-red-500/20 rounded",children:b.jsx(ur,{size:16})})]})]},D.id)),ie.length===0&&b.jsx("p",{className:"text-gray-500 text-sm",children:"No episodes found."})]})]})]})]}),b.jsxs("div",{className:"bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2",children:[b.jsxs("h3",{className:"flex items-center gap-2 text-xl font-bold mb-4 text-[#00ced1]",children:[b.jsx(XS,{size:20})," New Applications (",s.length,")"]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[s.map(D=>b.jsxs("div",{className:"bg-[#0b0e14] p-4 rounded-xl border border-[#333]",children:[b.jsxs("p",{className:"mb-1",children:[b.jsx("span",{className:"text-gray-400 text-xs",children:"NAME:"})," ",D.name]}),b.jsxs("p",{className:"mb-1",children:[b.jsx("span",{className:"text-gray-400 text-xs",children:"EMAIL:"})," ",D.email]}),b.jsxs("p",{className:"mb-1",children:[b.jsx("span",{className:"text-gray-400 text-xs",children:"FB:"})," ",b.jsx("a",{href:D.fb,target:"_blank",className:"text-[#00ced1] hover:underline",children:"Link"})]}),b.jsxs("p",{className:"mb-4",children:[b.jsx("span",{className:"text-gray-400 text-xs",children:"HOBBY:"})," ",D.hobby]}),b.jsxs("button",{onClick:()=>Ca(D.id),className:"w-full py-2 bg-gradient-to-r from-[#8a2be2] to-[#00ced1] rounded-lg font-bold flex items-center justify-center gap-2 text-sm",children:[b.jsx(Mv,{size:16})," Approve"]})]},D.id)),s.length===0&&b.jsx("p",{className:"text-gray-500",children:"No applications."})]})]}),b.jsxs("div",{className:"bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2",children:[b.jsxs("h3",{className:"flex items-center gap-2 text-xl font-bold mb-4 text-[#e85a71]",children:[b.jsx(cm,{size:20})," Follower Requests (",f.length,")"]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[f.map(D=>b.jsxs("div",{className:"bg-[#0b0e14] p-4 rounded-xl border border-[#333]",children:[b.jsxs("p",{className:"mb-1",children:[b.jsx("span",{className:"text-gray-400 text-xs",children:"NAME:"})," ",D.name]}),b.jsxs("p",{className:"mb-4",children:[b.jsx("span",{className:"text-gray-400 text-xs",children:"FB:"})," ",b.jsx("a",{href:D.fb,target:"_blank",className:"text-[#00ced1] hover:underline",children:"Link"})]}),b.jsxs("div",{className:"flex gap-2",children:[b.jsxs("button",{onClick:()=>Ko(D.id),className:"flex-1 py-2 bg-[#e85a71] rounded-lg font-bold flex items-center justify-center gap-2 text-sm text-white hover:bg-opacity-90",children:[b.jsx(Mv,{size:16})," Approve"]}),b.jsxs("button",{onClick:()=>Ra(D.id),className:"flex-1 py-2 bg-red-600 rounded-lg font-bold flex items-center justify-center gap-2 text-sm text-white hover:bg-opacity-90",children:[b.jsx(ur,{size:16})," Reject"]})]})]},`f-${D.id}`)),f.length===0&&b.jsx("p",{className:"text-gray-500",children:"No follower requests."})]})]}),b.jsxs("div",{className:"bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2",children:[b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4",children:[b.jsxs("h3",{className:"flex items-center gap-2 text-xl font-bold text-[#e85a71]",children:[b.jsx(cm,{size:20})," Followers List (",o.length,")"]}),b.jsxs("div",{className:"relative w-full md:w-auto",children:[b.jsx($c,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),b.jsx("input",{type:"text",placeholder:"Search Followers...",value:it,onChange:D=>Qi(D.target.value),className:"w-full md:w-64 pl-9 p-2 bg-[#0b0e14] border border-[#333] rounded-lg text-white text-sm outline-none focus:border-[#e85a71]"})]})]}),b.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",children:[o.filter(D=>D.name.toLowerCase().includes(it.toLowerCase())).map(D=>b.jsxs("div",{className:"bg-[#0b0e14] p-3 rounded-xl border border-[#333] flex flex-col items-center text-center",children:[b.jsx("img",{src:D.image||"/logo.png",className:"w-12 h-12 rounded-full mb-2 object-cover border-2 border-[#e85a71]"}),b.jsx("p",{className:"font-bold text-white text-xs mb-1 truncate w-full",children:D.name}),b.jsx("a",{href:D.fb,target:"_blank",className:"text-[#00ced1] text-[10px] hover:underline mb-2",children:"FB Profile"}),b.jsx("button",{onClick:()=>Ia(D.id),className:"w-full py-1 bg-red-600/20 text-red-500 rounded text-xs font-bold hover:bg-red-600 hover:text-white transition-colors",children:"Remove"})]},D.id)),o.length===0&&b.jsx("p",{className:"text-gray-500 col-span-2",children:"No followers yet."})]})]}),b.jsxs("div",{className:"bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2",children:[b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4",children:[b.jsxs("h3",{className:"flex items-center gap-2 text-xl font-bold text-[#00ced1]",children:[b.jsx(cm,{size:20})," Team Management (",n.length,")"]}),b.jsxs("div",{className:"relative w-full md:w-auto",children:[b.jsx($c,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),b.jsx("input",{type:"text",placeholder:"Search Team...",value:Me,onChange:D=>bt(D.target.value),className:"w-full md:w-64 pl-9 p-2 bg-[#0b0e14] border border-[#333] rounded-lg text-white text-sm outline-none focus:border-[#00ced1]"})]})]}),b.jsx("div",{className:"overflow-x-auto",children:b.jsxs("table",{className:"w-full text-left min-w-[600px]",children:[b.jsx("thead",{className:"bg-[#0b0e14] text-xs uppercase text-gray-400",children:b.jsxs("tr",{children:[b.jsx("th",{className:"p-3",children:"Member"}),b.jsx("th",{className:"p-3",children:"Rank"}),b.jsx("th",{className:"p-3",children:"Special"}),b.jsx("th",{className:"p-3 text-right",children:"Delete"})]})}),b.jsx("tbody",{children:n.filter(D=>D.name.toLowerCase().includes(Me.toLowerCase())||D.email.toLowerCase().includes(Me.toLowerCase())).map(D=>b.jsxs("tr",{className:"border-b border-[#333] hover:bg-[#0b0e14]/50 transition-colors",children:[b.jsx("td",{className:"p-3",children:b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:D.image||"/logo.png",className:"w-10 h-10 rounded-full object-cover border border-[#333]"}),b.jsxs("div",{children:[b.jsx("p",{className:"font-semibold text-sm",children:D.name}),b.jsx("p",{className:"text-xs text-gray-500",children:D.email}),b.jsx("a",{href:D.fb,target:"_blank",className:"text-[10px] text-[#00ced1]",children:"FB Link"})]})]})}),b.jsx("td",{className:"p-3",children:b.jsxs("select",{value:D.rank,onChange:oe=>r(n.map(le=>le.id===D.id?{...le,rank:oe.target.value}:le)),className:"bg-[#0b0e14] border border-[#555] rounded px-2 py-1 text-sm text-white",children:[Object.keys(Nm).map(oe=>b.jsx("option",{value:oe,children:oe},oe)),b.jsx("option",{value:"Admin",children:"Admin"})]})}),b.jsx("td",{className:"p-3",children:b.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm",children:[b.jsx("input",{type:"checkbox",checked:D.special,onChange:oe=>r(n.map(le=>le.id===D.id?{...le,special:oe.target.checked}:le)),className:"w-4 h-4 accent-[#00ced1]"}),"FX"]})}),b.jsx("td",{className:"p-3 text-right",children:b.jsx("button",{onClick:()=>{confirm("Remove member?")&&r(n.filter(oe=>oe.id!==D.id))},className:"text-red-500 hover:bg-red-600 hover:text-white p-1.5 rounded transition-colors",children:b.jsx(ur,{size:16})})})]},D.id))})]})})]}),b.jsxs("div",{className:"bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2",children:[b.jsxs("h3",{className:"flex items-center gap-2 text-xl font-bold mb-4 text-[#00ced1]",children:[b.jsx(YS,{size:20})," Configs"]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[b.jsxs("div",{children:[b.jsx("h4",{className:"text-white font-bold mb-2",children:"Edit Status"}),b.jsx("input",{type:"text",placeholder:"Projects (e.g. 60+)",value:(x==null?void 0:x.projects)||"",onChange:D=>k({...x,projects:D.target.value}),className:"w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white"}),b.jsx("input",{type:"text",placeholder:"Artists (e.g. 65+)",value:(x==null?void 0:x.artists)||"",onChange:D=>k({...x,artists:D.target.value}),className:"w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white"}),b.jsx("input",{type:"text",placeholder:"Members (e.g. 8K+)",value:(x==null?void 0:x.members)||"",onChange:D=>k({...x,members:D.target.value}),className:"w-full p-2 mb-4 bg-[#0b0e14] border border-[#333] rounded text-white"})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-white font-bold mb-2",children:"Admin Profile"}),b.jsx("input",{type:"file",accept:"image/*",onChange:D=>At(D,oe=>U(le=>({...le,adminImage:oe}))),className:"w-full text-sm text-gray-400 mb-2 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#8a2be2]/20 file:text-[#8a2be2]"}),N.adminImage.startsWith("Uploading...")&&b.jsx("p",{className:"text-[#8a2be2] text-xs font-bold mb-2",children:N.adminImage}),b.jsx("input",{type:"text",placeholder:"Admin Name",value:N.adminName,onChange:D=>U({...N,adminName:D.target.value}),className:"w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white"}),b.jsx("input",{type:"text",placeholder:"Admin Rank/Bio",value:N.adminBio,onChange:D=>U({...N,adminBio:D.target.value}),className:"w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white"}),b.jsxs("select",{value:N.adminColor,onChange:D=>U({...N,adminColor:D.target.value}),className:"w-full p-2 mb-4 bg-[#0b0e14] border border-[#333] rounded text-white outline-none",children:[b.jsx("option",{value:"admin-multiple",children:"Rainbow Glow"}),b.jsx("option",{value:"admin-vivid-orange-red",children:"Vivid Orange Red"}),b.jsx("option",{value:"admin-dark-green-grey",children:"Dark Green Grey"}),b.jsx("option",{value:"admin-frosty-blue-grey",children:"Frosty Blue Grey"})]})]}),b.jsxs("div",{className:"md:col-span-2",children:[b.jsx("h4",{className:"text-white font-bold mb-2",children:"Edit About (HTML supported)"}),b.jsx("textarea",{placeholder:"About text (e.g. <h1>email: xyz</h1>)",value:N.about,onChange:D=>U({...N,about:D.target.value}),className:"w-full p-2 bg-[#0b0e14] border border-[#333] rounded text-white",rows:4})]}),b.jsxs("div",{className:"md:col-span-2",children:[b.jsx("h4",{className:"text-white font-bold mb-2",children:"Change Password"}),b.jsx("input",{type:"text",placeholder:"New Admin Pass",value:R,onChange:D=>Xe(D.target.value),className:"w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white"}),b.jsx("button",{onClick:()=>{R&&(ve(R),Xe(""),alert("Updated"))},className:"px-4 py-2 bg-[#8a2be2] rounded text-sm font-bold text-white",children:"Update Pass"})]})]})]}),b.jsxs("div",{className:"bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2",children:[b.jsxs("h3",{className:"flex items-center gap-2 text-xl font-bold mb-4 text-[#ff00c8]",children:[b.jsx(kv,{size:20})," Add Link"]}),b.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-4",children:[b.jsx("input",{type:"text",placeholder:"Site Name",value:S.name,onChange:D=>V({...S,name:D.target.value}),className:"flex-1 p-3 bg-[#0b0e14] border border-[#333] rounded-lg text-white outline-none focus:border-[#ff00c8]"}),b.jsx("input",{type:"text",placeholder:"URL / Link",value:S.url,onChange:D=>V({...S,url:D.target.value}),className:"flex-1 p-3 bg-[#0b0e14] border border-[#333] rounded-lg text-white outline-none focus:border-[#ff00c8]"}),b.jsx("button",{onClick:()=>{if(!S.name||!S.url)return alert("Fill all fields");E([...y,{id:Date.now(),...S}]),V({name:"",url:""})},className:"py-3 px-6 bg-[#ff00c8] font-bold text-white rounded-lg hover:bg-[#d600a9] transition-colors",children:"Add Link"})]}),y.length>0&&b.jsx("div",{className:"flex flex-col flex-wrap gap-2",children:y.map(D=>b.jsxs("div",{className:"flex justify-between items-center bg-[#0b0e14] p-3 rounded border border-[#333]",children:[b.jsxs("div",{children:[b.jsx("span",{className:"font-bold text-white mr-2",children:D.name}),b.jsx("a",{href:D.url,target:"_blank",className:"text-gray-400 text-xs hover:text-[#00ced1] break-all",children:D.url})]}),b.jsx("button",{onClick:()=>E(y.filter(oe=>oe.id!==D.id)),className:"text-red-500 hover:bg-red-500/20 p-2 rounded transition-colors",children:b.jsx(ur,{size:16})})]},D.id))})]})]})]})})]})}function Y4({activeVideo:s,onClose:e,allClips:n,allEpisodes:r,setActiveVideo:o}){const u=s.type==="clip",f=u?n:r,p=f.findIndex(X=>X.id===s.id),g=f[p],y=Ce.useRef(null),E=Ce.useRef(null),[S,V]=Ce.useState(!1),[F,W]=Ce.useState(!1),[ie,ee]=Ce.useState(1),[me,ve]=Ce.useState("420fps"),[de,Te]=Ce.useState(!1),[we,ge]=Ce.useState(0),[I,A]=Ce.useState(0),[x,k]=Ce.useState(1),[N,U]=Ce.useState(!1),R=X=>{if(isNaN(X))return"00:00";const he=Math.floor(X/60).toString().padStart(2,"0"),Me=Math.floor(X%60).toString().padStart(2,"0");return`${he}:${Me}`},Xe=X=>{const he=Number(X.target.value);k(he),y.current&&(y.current.volume=he,y.current.muted=he===0,U(he===0))},ht=()=>{y.current&&(y.current.muted=!N,U(!N),N&&x===0&&(k(1),y.current.volume=1))},G=()=>{alert(`Starting Download...

DUB-HUB watermark will be automatically integrated during the download process!`);const X=document.createElement("a");X.href=g.videoSrc,X.download=`${(g.title||"dubhub-content").replace(/[^a-z0-9]/gi,"_").toLowerCase()}.mp4`,document.body.appendChild(X),X.click(),document.body.removeChild(X)},te=()=>{if(y.current){const X=y.current.currentTime;ge(X),X>0&&Math.floor(X)%180<10?Te(!0):Te(!1)}},ce=()=>{y.current&&A(y.current.duration)},Se=X=>{const he=Number(X.target.value);y.current&&(y.current.currentTime=he,ge(he))};if(Ce.useEffect(()=>{y.current&&(y.current.playbackRate=ie,y.current.play().then(()=>V(!0)).catch(()=>V(!1)))},[g,ie]),Ce.useEffect(()=>{const X=()=>{W(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",X),()=>document.removeEventListener("fullscreenchange",X)},[]),!g)return null;const ke=()=>{y.current&&(S?y.current.pause():y.current.play(),V(!S))},M=X=>{y.current&&(y.current.currentTime+=X)},Q=async()=>{var X;if(document.fullscreenElement){await document.exitFullscreen();try{screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock()}catch{}}else{await((X=E.current)==null?void 0:X.requestFullscreen({navigationUI:"hide"}).catch(he=>{console.error(`Error attempting to enable fullscreen: ${he.message}`)}));try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}},ne=()=>{p<f.length-1&&o({type:s.type,id:f[p+1].id})},re=()=>{p>0&&o({type:s.type,id:f[p-1].id})};return b.jsxs("div",{className:"fixed inset-0 bg-black/95 z-[5000] flex flex-col pt-10",children:[b.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-white hover:text-red-500 z-50 bg-black/50 p-2 rounded-full",children:b.jsx(ur,{size:24})}),b.jsxs("div",{className:"max-w-5xl w-full mx-auto flex flex-col h-full px-4 pb-4",children:[b.jsx("div",{className:"mb-4",children:u?b.jsx("h2",{className:"text-2xl font-bold text-white max-w-[80vw] truncate",children:g.title}):b.jsxs("h2",{className:"text-xl font-bold text-white max-w-[80vw] truncate",children:[b.jsxs("span",{className:"text-[#ff4d6d] mr-2",children:["[",g.season,"]"]})," ",g.title]})}),b.jsxs("div",{ref:E,className:`relative bg-black rounded-lg overflow-hidden flex-shrink-0 mx-auto w-full group flex items-center justify-center transition-all ${F?"h-screen w-screen rounded-none max-h-none":"aspect-video max-h-[60vh] md:max-h-[75vh]"}`,children:[b.jsx("video",{ref:y,src:g.videoSrc,className:"w-full h-full object-contain",onClick:ke,onTimeUpdate:te,onLoadedMetadata:ce,onEnded:()=>{V(!1),ne()}}),de&&b.jsx("div",{className:"absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 pointer-events-none z-10 animate-in fade-in duration-500",children:b.jsx("h1",{className:"rainbow-text text-base sm:text-lg md:text-xl font-black drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] opacity-90 tracking-widest uppercase",children:"DUB-HUB"})}),b.jsxs("div",{className:`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-16 pb-2 px-3 sm:px-4 transition-opacity duration-300 z-20 ${S?"opacity-0 group-hover:opacity-100":"opacity-100"}`,children:[b.jsxs("div",{className:"absolute top-4 left-3 right-3 sm:left-4 sm:right-4 h-1.5 sm:h-2 group/progress cursor-pointer flex items-center",children:[b.jsx("input",{type:"range",min:"0",max:I||0,value:we,onChange:Se,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"}),b.jsx("div",{className:"w-full bg-white/30 h-1 sm:h-1.5 rounded-full overflow-hidden relative group-hover/progress:h-1.5 sm:group-hover/progress:h-2 transition-all",children:b.jsx("div",{className:"h-full rainbow-bg rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-100",style:{width:`${I>0?we/I*100:0}%`}})}),b.jsx("div",{className:"absolute h-3 w-3 sm:h-4 sm:w-4 rainbow-bg rounded-full shadow-[0_0_8px_rgba(255,255,255,1)] transform -translate-x-1/2 scale-0 group-hover/progress:scale-100 transition-transform pointer-events-none",style:{left:`${I>0?we/I*100:0}%`}})]}),b.jsxs("div",{className:"flex items-center justify-between gap-4 mt-2",children:[b.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[b.jsx("button",{onClick:ke,className:"text-white hover:text-[#00ced1] transition-colors",children:S?b.jsx(BS,{size:28}):b.jsx(ra,{size:28})}),b.jsx("button",{onClick:()=>M(-10),className:"text-white hover:text-[#00ced1] transition-colors",children:b.jsx(FS,{size:20})}),b.jsx("button",{onClick:()=>M(10),className:"text-white hover:text-[#00ced1] transition-colors",children:b.jsx(OS,{size:20})}),b.jsxs("div",{className:"flex items-center gap-2 group/volume relative hidden sm:flex ml-2",children:[b.jsx("button",{onClick:ht,className:"text-white hover:text-[#00ced1] transition-colors",children:N||x===0?b.jsx(tA,{size:20}):b.jsx(WS,{size:20})}),b.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:N?0:x,onChange:Xe,className:"w-0 opacity-0 group-hover/volume:w-20 group-hover/volume:opacity-100 transition-all duration-300 origin-left accent-[#00ced1]"})]}),b.jsxs("div",{className:"text-white text-[10px] sm:text-xs font-medium tracking-wide font-mono ml-2",children:[R(we)," ",b.jsx("span",{className:"text-gray-400 mx-1",children:"/"})," ",R(I)]})]}),b.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[b.jsx("button",{onClick:G,className:"text-white hover:text-[#ff4d6d] transition-colors",title:"Download Video",children:b.jsx(IS,{size:22})}),b.jsxs("select",{value:me,onChange:X=>ve(X.target.value),className:"bg-black/50 text-white text-xs p-1 rounded outline-none border border-white/20",children:[b.jsx("option",{value:"420fps",children:"420fps"}),b.jsx("option",{value:"320fps",children:"320fps"})]}),b.jsxs("select",{value:ie,onChange:X=>ee(Number(X.target.value)),className:"bg-black/50 text-white text-xs p-1 rounded outline-none border border-white/20 hidden sm:block",children:[b.jsx("option",{value:.5,children:"0.5x"}),b.jsx("option",{value:1,children:"1x"}),b.jsx("option",{value:1.5,children:"1.5x"}),b.jsx("option",{value:2,children:"2x"})]}),b.jsxs("button",{onClick:Q,className:"text-white hover:text-[#00ced1] transition-colors flex items-center",children:[F?b.jsx("span",{className:"text-xs font-bold mr-1 hidden sm:inline",children:"Short Screen"}):b.jsx("span",{className:"text-xs font-bold mr-1 hidden sm:inline",children:"Full Screen"}),b.jsx(LS,{size:20})]})]})]})]})]}),!F&&b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"flex justify-between items-center mt-6",children:[b.jsx("button",{onClick:re,disabled:p===0,className:`px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm md:text-base ${p===0?"bg-gray-800 text-gray-600":"bg-gray-800 text-white hover:bg-gray-700"}`,children:"← Previous"}),b.jsx("button",{onClick:ne,disabled:p===f.length-1,className:`px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm md:text-base ${p===f.length-1?"bg-gray-800 text-gray-600":"bg-[#00ced1] text-black hover:bg-opacity-90"}`,children:"Next →"})]}),!u&&r.filter(X=>X.animeName===g.animeName&&X.season===g.season&&X.id!==g.id).length>0&&b.jsxs("div",{className:"mt-8 animate-in slide-in-from-bottom-5 duration-500 pb-10",children:[b.jsxs("h3",{className:"text-[#ff4d6d] font-bold text-xl mb-4 font-poppins",children:["More from ",g.animeName," ",b.jsx("span",{className:"text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded ml-2",children:g.season})]}),b.jsx("div",{className:"flex gap-4 overflow-x-auto pb-4 hide-scroll",children:r.filter(X=>X.animeName===g.animeName&&X.season===g.season&&X.id!==g.id).map(X=>b.jsxs("div",{onClick:()=>o({type:"episode",id:X.id}),className:"w-[180px] sm:w-[220px] bg-[#161b22] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] hover:border-[#ff4d6d] border border-[#333] transition-all shrink-0",children:[b.jsxs("div",{className:"aspect-video relative bg-[#0b0e14]",children:[b.jsx("img",{src:X.thumbSrc,alt:X.title,className:"w-full h-full object-cover"}),b.jsx("div",{className:"absolute inset-0 bg-black/30 hover:bg-black/10 flex items-center justify-center transition-colors",children:b.jsx(ra,{size:32,className:"text-white opacity-70"})})]}),b.jsx("div",{className:"p-3",children:b.jsx("h4",{className:"font-bold text-sm leading-tight text-white line-clamp-2",children:X.title})})]},X.id))})]})]})]})]})}bS.createRoot(document.getElementById("root")).render(b.jsx(Ce.StrictMode,{children:b.jsx(K4,{})}));
