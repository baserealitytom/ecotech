(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function rv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zm={exports:{}},jl={},Qm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),sv=Symbol.for("react.portal"),ov=Symbol.for("react.fragment"),av=Symbol.for("react.strict_mode"),lv=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),dv=Symbol.for("react.forward_ref"),fv=Symbol.for("react.suspense"),hv=Symbol.for("react.memo"),pv=Symbol.for("react.lazy"),$f=Symbol.iterator;function mv(n){return n===null||typeof n!="object"?null:(n=$f&&n[$f]||n["@@iterator"],typeof n=="function"?n:null)}var Jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eg=Object.assign,tg={};function Ys(n,e,t){this.props=n,this.context=e,this.refs=tg,this.updater=t||Jm}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ys.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ng(){}ng.prototype=Ys.prototype;function Ud(n,e,t){this.props=n,this.context=e,this.refs=tg,this.updater=t||Jm}var Od=Ud.prototype=new ng;Od.constructor=Ud;eg(Od,Ys.prototype);Od.isPureReactComponent=!0;var Zf=Array.isArray,ig=Object.prototype.hasOwnProperty,Fd={current:null},rg={key:!0,ref:!0,__self:!0,__source:!0};function sg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ig.call(e,i)&&!rg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ia,type:n,key:s,ref:o,props:r,_owner:Fd.current}}function gv(n,e){return{$$typeof:ia,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function kd(n){return typeof n=="object"&&n!==null&&n.$$typeof===ia}function _v(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qf=/\/+/g;function mu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?_v(""+n.key):e.toString(36)}function il(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ia:case sv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+mu(o,0):i,Zf(r)?(t="",n!=null&&(t=n.replace(Qf,"$&/")+"/"),il(r,e,t,"",function(u){return u})):r!=null&&(kd(r)&&(r=gv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+mu(s,a);o+=il(s,e,t,l,r)}else if(l=mv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+mu(s,a++),o+=il(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(n,e,t){if(n==null)return n;var i=[],r=0;return il(n,i,"","",function(s){return e.call(t,s,r++)}),i}function vv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Jt={current:null},rl={transition:null},yv={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:rl,ReactCurrentOwner:Fd};Ve.Children={map:ma,forEach:function(n,e,t){ma(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ma(n,function(){e++}),e},toArray:function(n){return ma(n,function(e){return e})||[]},only:function(n){if(!kd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ve.Component=Ys;Ve.Fragment=ov;Ve.Profiler=lv;Ve.PureComponent=Ud;Ve.StrictMode=av;Ve.Suspense=fv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;Ve.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=eg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ig.call(e,l)&&!rg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ia,type:n.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(n){return n={$$typeof:cv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:uv,_context:n},n.Consumer=n};Ve.createElement=sg;Ve.createFactory=function(n){var e=sg.bind(null,n);return e.type=n,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(n){return{$$typeof:dv,render:n}};Ve.isValidElement=kd;Ve.lazy=function(n){return{$$typeof:pv,_payload:{_status:-1,_result:n},_init:vv}};Ve.memo=function(n,e){return{$$typeof:hv,type:n,compare:e===void 0?null:e}};Ve.startTransition=function(n){var e=rl.transition;rl.transition={};try{n()}finally{rl.transition=e}};Ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ve.useCallback=function(n,e){return Jt.current.useCallback(n,e)};Ve.useContext=function(n){return Jt.current.useContext(n)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(n){return Jt.current.useDeferredValue(n)};Ve.useEffect=function(n,e){return Jt.current.useEffect(n,e)};Ve.useId=function(){return Jt.current.useId()};Ve.useImperativeHandle=function(n,e,t){return Jt.current.useImperativeHandle(n,e,t)};Ve.useInsertionEffect=function(n,e){return Jt.current.useInsertionEffect(n,e)};Ve.useLayoutEffect=function(n,e){return Jt.current.useLayoutEffect(n,e)};Ve.useMemo=function(n,e){return Jt.current.useMemo(n,e)};Ve.useReducer=function(n,e,t){return Jt.current.useReducer(n,e,t)};Ve.useRef=function(n){return Jt.current.useRef(n)};Ve.useState=function(n){return Jt.current.useState(n)};Ve.useSyncExternalStore=function(n,e,t){return Jt.current.useSyncExternalStore(n,e,t)};Ve.useTransition=function(){return Jt.current.useTransition()};Ve.version="18.2.0";Qm.exports=Ve;var vt=Qm.exports;const xv=rv(vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv=vt,Mv=Symbol.for("react.element"),Ev=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,wv=Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Av={key:!0,ref:!0,__self:!0,__source:!0};function og(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Tv.call(e,i)&&!Av.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Mv,type:n,key:s,ref:o,props:r,_owner:wv.current}}jl.Fragment=Ev;jl.jsx=og;jl.jsxs=og;Zm.exports=jl;var qe=Zm.exports,wc={},ag={exports:{}},gn={},lg={exports:{}},ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,W){var z=D.length;D.push(W);e:for(;0<z;){var se=z-1>>>1,U=D[se];if(0<r(U,W))D[se]=W,D[z]=U,z=se;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],z=D.pop();if(z!==W){D[0]=z;e:for(var se=0,U=D.length,ee=U>>>1;se<ee;){var J=2*(se+1)-1,de=D[J],ue=J+1,ve=D[ue];if(0>r(de,z))ue<U&&0>r(ve,de)?(D[se]=ve,D[ue]=z,se=ue):(D[se]=de,D[J]=z,se=J);else if(ue<U&&0>r(ve,z))D[se]=ve,D[ue]=z,se=ue;else break e}}return W}function r(D,W){var z=D.sortIndex-W.sortIndex;return z!==0?z:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,y=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var W=t(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(u)}}function x(D){if(v=!1,g(D),!y)if(t(l)!==null)y=!0,Q(S);else{var W=t(u);W!==null&&Y(x,W.startTime-D)}}function S(D,W){y=!1,v&&(v=!1,d(L),L=-1),p=!0;var z=h;try{for(g(W),f=t(l);f!==null&&(!(f.expirationTime>W)||D&&!X());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var U=se(f.expirationTime<=W);W=n.unstable_now(),typeof U=="function"?f.callback=U:f===t(l)&&i(l),g(W)}else i(l);f=t(l)}if(f!==null)var ee=!0;else{var J=t(u);J!==null&&Y(x,J.startTime-W),ee=!1}return ee}finally{f=null,h=z,p=!1}}var w=!1,b=null,L=-1,M=5,A=-1;function X(){return!(n.unstable_now()-A<M)}function $(){if(b!==null){var D=n.unstable_now();A=D;var W=!0;try{W=b(!0,D)}finally{W?N():(w=!1,b=null)}}else w=!1}var N;if(typeof _=="function")N=function(){_($)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,V=B.port2;B.port1.onmessage=$,N=function(){V.postMessage(null)}}else N=function(){m($,0)};function Q(D){b=D,w||(w=!0,N())}function Y(D,W){L=m(function(){D(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){y||p||(y=!0,Q(S))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var z=h;h=W;try{return D()}finally{h=z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=h;h=D;try{return W()}finally{h=z}},n.unstable_scheduleCallback=function(D,W,z){var se=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?se+z:se):z=se,D){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=z+U,D={id:c++,callback:W,priorityLevel:D,startTime:z,expirationTime:U,sortIndex:-1},z>se?(D.sortIndex=z,e(u,D),t(l)===null&&D===t(u)&&(v?(d(L),L=-1):v=!0,Y(x,z-se))):(D.sortIndex=U,e(l,D),y||p||(y=!0,Q(S))),D},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(D){var W=h;return function(){var z=h;h=W;try{return D.apply(this,arguments)}finally{h=z}}}})(ug);lg.exports=ug;var Rv=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg=vt,pn=Rv;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,Uo={};function kr(n,e){Is(n,e),Is(n+"Capture",e)}function Is(n,e){for(Uo[n]=e,n=0;n<e.length;n++)dg.add(e[n])}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=Object.prototype.hasOwnProperty,bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},eh={};function Cv(n){return Ac.call(eh,n)?!0:Ac.call(Jf,n)?!1:bv.test(n)?eh[n]=!0:(Jf[n]=!0,!1)}function Lv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Pv(n,e,t,i){if(e===null||typeof e>"u"||Lv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ot[n]=new en(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ot[e]=new en(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ot[n]=new en(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ot[n]=new en(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ot[n]=new en(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ot[n]=new en(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ot[n]=new en(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ot[n]=new en(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ot[n]=new en(n,5,!1,n.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function zd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Bd,zd);Ot[e]=new en(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Bd,zd);Ot[e]=new en(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Bd,zd);Ot[e]=new en(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ot[n]=new en(n,1,!1,n.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ot[n]=new en(n,1,!1,n.toLowerCase(),null,!0,!0)});function Hd(n,e,t,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pv(e,t,r,i)&&(t=null),i||r===null?Cv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var bi=cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),hg=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),pg=Symbol.for("react.offscreen"),th=Symbol.iterator;function eo(n){return n===null||typeof n!="object"?null:(n=th&&n[th]||n["@@iterator"],typeof n=="function"?n:null)}var lt=Object.assign,gu;function vo(n){if(gu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+n}var _u=!1;function vu(n,e){if(!n||_u)return"";_u=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?vo(n):""}function Iv(n){switch(n.tag){case 5:return vo(n.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return n=vu(n.type,!1),n;case 11:return n=vu(n.type.render,!1),n;case 1:return n=vu(n.type,!0),n;default:return""}}function Lc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case cs:return"Fragment";case us:return"Portal";case Rc:return"Profiler";case Vd:return"StrictMode";case bc:return"Suspense";case Cc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case hg:return(n.displayName||"Context")+".Consumer";case fg:return(n._context.displayName||"Context")+".Provider";case Gd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Wd:return e=n.displayName||null,e!==null?e:Lc(n.type)||"Memo";case Fi:e=n._payload,n=n._init;try{return Lc(n(e))}catch{}}return null}function Dv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lc(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function mg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nv(n){var e=mg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function _a(n){n._valueTracker||(n._valueTracker=Nv(n))}function gg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=mg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function yl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pc(n,e){var t=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function nh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=tr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _g(n,e){e=e.checked,e!=null&&Hd(n,"checked",e,!1)}function Ic(n,e){_g(n,e);var t=tr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Dc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Dc(n,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ih(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Dc(n,e,t){(e!=="number"||yl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var yo=Array.isArray;function Ms(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+tr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Nc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(yo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:tr(t)}}function vg(n,e){var t=tr(e.value),i=tr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function sh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function yg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?yg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var va,xg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Oo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(n){Uv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Eo[e]=Eo[n]})});function Sg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Eo.hasOwnProperty(n)&&Eo[n]?(""+e).trim():e+"px"}function Mg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Sg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ov=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oc(n,e){if(e){if(Ov[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Fc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kc=null;function Xd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Bc=null,Es=null,Ts=null;function oh(n){if(n=oa(n)){if(typeof Bc!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Zl(e),Bc(n.stateNode,n.type,e))}}function Eg(n){Es?Ts?Ts.push(n):Ts=[n]:Es=n}function Tg(){if(Es){var n=Es,e=Ts;if(Ts=Es=null,oh(n),e)for(n=0;n<e.length;n++)oh(e[n])}}function wg(n,e){return n(e)}function Ag(){}var yu=!1;function Rg(n,e,t){if(yu)return n(e,t);yu=!0;try{return wg(n,e,t)}finally{yu=!1,(Es!==null||Ts!==null)&&(Ag(),Tg())}}function Fo(n,e){var t=n.stateNode;if(t===null)return null;var i=Zl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var zc=!1;if(Ei)try{var to={};Object.defineProperty(to,"passive",{get:function(){zc=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{zc=!1}function Fv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var To=!1,xl=null,Sl=!1,Hc=null,kv={onError:function(n){To=!0,xl=n}};function Bv(n,e,t,i,r,s,o,a,l){To=!1,xl=null,Fv.apply(kv,arguments)}function zv(n,e,t,i,r,s,o,a,l){if(Bv.apply(this,arguments),To){if(To){var u=xl;To=!1,xl=null}else throw Error(te(198));Sl||(Sl=!0,Hc=u)}}function Br(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function bg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ah(n){if(Br(n)!==n)throw Error(te(188))}function Hv(n){var e=n.alternate;if(!e){if(e=Br(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ah(r),n;if(s===i)return ah(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function Cg(n){return n=Hv(n),n!==null?Lg(n):null}function Lg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Lg(n);if(e!==null)return e;n=n.sibling}return null}var Pg=pn.unstable_scheduleCallback,lh=pn.unstable_cancelCallback,Vv=pn.unstable_shouldYield,Gv=pn.unstable_requestPaint,pt=pn.unstable_now,Wv=pn.unstable_getCurrentPriorityLevel,jd=pn.unstable_ImmediatePriority,Ig=pn.unstable_UserBlockingPriority,Ml=pn.unstable_NormalPriority,Xv=pn.unstable_LowPriority,Dg=pn.unstable_IdlePriority,Yl=null,Zn=null;function jv(n){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Yl,n,void 0,(n.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:qv,Yv=Math.log,Kv=Math.LN2;function qv(n){return n>>>=0,n===0?32:31-(Yv(n)/Kv|0)|0}var ya=64,xa=4194304;function xo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function El(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=xo(a):(s&=o,s!==0&&(i=xo(s)))}else o=t&~r,o!==0?i=xo(o):s!==0&&(i=xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Hn(e),r=1<<t,i|=n[t],e&=~r;return i}function $v(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=$v(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Vc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ng(){var n=ya;return ya<<=1,!(ya&4194240)&&(ya=64),n}function xu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ra(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Hn(e),n[e]=t}function Qv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Hn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Yd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Hn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var $e=0;function Ug(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Og,Kd,Fg,kg,Bg,Gc=!1,Sa=[],Xi=null,ji=null,Yi=null,ko=new Map,Bo=new Map,zi=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(n,e){switch(n){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function no(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oa(e),e!==null&&Kd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ey(n,e,t,i,r){switch(e){case"focusin":return Xi=no(Xi,n,e,t,i,r),!0;case"dragenter":return ji=no(ji,n,e,t,i,r),!0;case"mouseover":return Yi=no(Yi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,no(ko.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,no(Bo.get(s)||null,n,e,t,i,r)),!0}return!1}function zg(n){var e=xr(n.target);if(e!==null){var t=Br(e);if(t!==null){if(e=t.tag,e===13){if(e=bg(t),e!==null){n.blockedOn=e,Bg(n.priority,function(){Fg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Wc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);kc=i,t.target.dispatchEvent(i),kc=null}else return e=oa(t),e!==null&&Kd(e),n.blockedOn=t,!1;e.shift()}return!0}function ch(n,e,t){sl(n)&&t.delete(e)}function ty(){Gc=!1,Xi!==null&&sl(Xi)&&(Xi=null),ji!==null&&sl(ji)&&(ji=null),Yi!==null&&sl(Yi)&&(Yi=null),ko.forEach(ch),Bo.forEach(ch)}function io(n,e){n.blockedOn===e&&(n.blockedOn=null,Gc||(Gc=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,ty)))}function zo(n){function e(r){return io(r,n)}if(0<Sa.length){io(Sa[0],n);for(var t=1;t<Sa.length;t++){var i=Sa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Xi!==null&&io(Xi,n),ji!==null&&io(ji,n),Yi!==null&&io(Yi,n),ko.forEach(e),Bo.forEach(e),t=0;t<zi.length;t++)i=zi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<zi.length&&(t=zi[0],t.blockedOn===null);)zg(t),t.blockedOn===null&&zi.shift()}var ws=bi.ReactCurrentBatchConfig,Tl=!0;function ny(n,e,t,i){var r=$e,s=ws.transition;ws.transition=null;try{$e=1,qd(n,e,t,i)}finally{$e=r,ws.transition=s}}function iy(n,e,t,i){var r=$e,s=ws.transition;ws.transition=null;try{$e=4,qd(n,e,t,i)}finally{$e=r,ws.transition=s}}function qd(n,e,t,i){if(Tl){var r=Wc(n,e,t,i);if(r===null)Lu(n,e,i,wl,t),uh(n,i);else if(ey(r,n,e,t,i))i.stopPropagation();else if(uh(n,i),e&4&&-1<Jv.indexOf(n)){for(;r!==null;){var s=oa(r);if(s!==null&&Og(s),s=Wc(n,e,t,i),s===null&&Lu(n,e,i,wl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lu(n,e,i,null,t)}}var wl=null;function Wc(n,e,t,i){if(wl=null,n=Xd(i),n=xr(n),n!==null)if(e=Br(n),e===null)n=null;else if(t=e.tag,t===13){if(n=bg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return wl=n,null}function Hg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wv()){case jd:return 1;case Ig:return 4;case Ml:case Xv:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var Vi=null,$d=null,ol=null;function Vg(){if(ol)return ol;var n,e=$d,t=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ol=r.slice(n,1<i?1-i:void 0)}function al(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ma(){return!0}function dh(){return!1}function _n(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:dh,this.isPropagationStopped=dh,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zd=_n(Ks),sa=lt({},Ks,{view:0,detail:0}),ry=_n(sa),Su,Mu,ro,Kl=lt({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ro&&(ro&&n.type==="mousemove"?(Su=n.screenX-ro.screenX,Mu=n.screenY-ro.screenY):Mu=Su=0,ro=n),Su)},movementY:function(n){return"movementY"in n?n.movementY:Mu}}),fh=_n(Kl),sy=lt({},Kl,{dataTransfer:0}),oy=_n(sy),ay=lt({},sa,{relatedTarget:0}),Eu=_n(ay),ly=lt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=_n(ly),cy=lt({},Ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dy=_n(cy),fy=lt({},Ks,{data:0}),hh=_n(fy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=my[n])?!!e[n]:!1}function Qd(){return gy}var _y=lt({},sa,{key:function(n){if(n.key){var e=hy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=al(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?py[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(n){return n.type==="keypress"?al(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?al(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vy=_n(_y),yy=lt({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=_n(yy),xy=lt({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),Sy=_n(xy),My=lt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=_n(My),Ty=lt({},Kl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=_n(Ty),Ay=[9,13,27,32],Jd=Ei&&"CompositionEvent"in window,wo=null;Ei&&"documentMode"in document&&(wo=document.documentMode);var Ry=Ei&&"TextEvent"in window&&!wo,Gg=Ei&&(!Jd||wo&&8<wo&&11>=wo),mh=String.fromCharCode(32),gh=!1;function Wg(n,e){switch(n){case"keyup":return Ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function by(n,e){switch(n){case"compositionend":return Xg(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return n=e.data,n===mh&&gh?null:n;default:return null}}function Cy(n,e){if(ds)return n==="compositionend"||!Jd&&Wg(n,e)?(n=Vg(),ol=$d=Vi=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var Ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ly[n.type]:e==="textarea"}function jg(n,e,t,i){Eg(i),e=Al(e,"onChange"),0<e.length&&(t=new Zd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ao=null,Ho=null;function Py(n){i_(n,0)}function ql(n){var e=ps(n);if(gg(e))return n}function Iy(n,e){if(n==="change")return e}var Yg=!1;if(Ei){var Tu;if(Ei){var wu="oninput"in document;if(!wu){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),wu=typeof vh.oninput=="function"}Tu=wu}else Tu=!1;Yg=Tu&&(!document.documentMode||9<document.documentMode)}function yh(){Ao&&(Ao.detachEvent("onpropertychange",Kg),Ho=Ao=null)}function Kg(n){if(n.propertyName==="value"&&ql(Ho)){var e=[];jg(e,Ho,n,Xd(n)),Rg(Py,e)}}function Dy(n,e,t){n==="focusin"?(yh(),Ao=e,Ho=t,Ao.attachEvent("onpropertychange",Kg)):n==="focusout"&&yh()}function Ny(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ql(Ho)}function Uy(n,e){if(n==="click")return ql(e)}function Oy(n,e){if(n==="input"||n==="change")return ql(e)}function Fy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Xn=typeof Object.is=="function"?Object.is:Fy;function Vo(n,e){if(Xn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ac.call(e,r)||!Xn(n[r],e[r]))return!1}return!0}function xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,e){var t=xh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xh(t)}}function qg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?qg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $g(){for(var n=window,e=yl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=yl(n.document)}return e}function ef(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ky(n){var e=$g(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&qg(t.ownerDocument.documentElement,t)){if(i!==null&&ef(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Sh(t,s);var o=Sh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var By=Ei&&"documentMode"in document&&11>=document.documentMode,fs=null,Xc=null,Ro=null,jc=!1;function Mh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jc||fs==null||fs!==yl(i)||(i=fs,"selectionStart"in i&&ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ro&&Vo(Ro,i)||(Ro=i,i=Al(Xc,"onSelect"),0<i.length&&(e=new Zd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=fs)))}function Ea(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var hs={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},Au={},Zg={};Ei&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function $l(n){if(Au[n])return Au[n];if(!hs[n])return n;var e=hs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Zg)return Au[n]=e[t];return n}var Qg=$l("animationend"),Jg=$l("animationiteration"),e_=$l("animationstart"),t_=$l("transitionend"),n_=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,e){n_.set(n,e),kr(e,[n])}for(var Ru=0;Ru<Eh.length;Ru++){var bu=Eh[Ru],zy=bu.toLowerCase(),Hy=bu[0].toUpperCase()+bu.slice(1);ir(zy,"on"+Hy)}ir(Qg,"onAnimationEnd");ir(Jg,"onAnimationIteration");ir(e_,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(t_,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Th(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,zv(i,e,void 0,n),n.currentTarget=null}function i_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,u),s=l}}}if(Sl)throw n=Hc,Sl=!1,Hc=null,n}function nt(n,e){var t=e[Zc];t===void 0&&(t=e[Zc]=new Set);var i=n+"__bubble";t.has(i)||(r_(e,n,2,!1),t.add(i))}function Cu(n,e,t){var i=0;e&&(i|=4),r_(t,n,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[Ta]){n[Ta]=!0,dg.forEach(function(t){t!=="selectionchange"&&(Vy.has(t)||Cu(t,!1,n),Cu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Cu("selectionchange",!1,e))}}function r_(n,e,t,i){switch(Hg(e)){case 1:var r=ny;break;case 4:r=iy;break;default:r=qd}t=r.bind(null,e,t,n),r=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Lu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Rg(function(){var u=s,c=Xd(t),f=[];e:{var h=n_.get(n);if(h!==void 0){var p=Zd,y=n;switch(n){case"keypress":if(al(t)===0)break e;case"keydown":case"keyup":p=vy;break;case"focusin":y="focus",p=Eu;break;case"focusout":y="blur",p=Eu;break;case"beforeblur":case"afterblur":p=Eu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sy;break;case Qg:case Jg:case e_:p=uy;break;case t_:p=Ey;break;case"scroll":p=ry;break;case"wheel":p=wy;break;case"copy":case"cut":case"paste":p=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ph}var v=(e&4)!==0,m=!v&&n==="scroll",d=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,g;_!==null;){g=_;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,d!==null&&(x=Fo(_,d),x!=null&&v.push(Wo(_,x,g)))),m)break;_=_.return}0<v.length&&(h=new p(h,y,null,t,c),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==kc&&(y=t.relatedTarget||t.fromElement)&&(xr(y)||y[Ti]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=t.relatedTarget||t.toElement,p=u,y=y?xr(y):null,y!==null&&(m=Br(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=fh,x="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=ph,x="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?h:ps(p),g=y==null?h:ps(y),h=new v(x,_+"leave",p,t,c),h.target=m,h.relatedTarget=g,x=null,xr(c)===u&&(v=new v(d,_+"enter",y,t,c),v.target=g,v.relatedTarget=m,x=v),m=x,p&&y)t:{for(v=p,d=y,_=0,g=v;g;g=Hr(g))_++;for(g=0,x=d;x;x=Hr(x))g++;for(;0<_-g;)v=Hr(v),_--;for(;0<g-_;)d=Hr(d),g--;for(;_--;){if(v===d||d!==null&&v===d.alternate)break t;v=Hr(v),d=Hr(d)}v=null}else v=null;p!==null&&wh(f,h,p,v,!1),y!==null&&m!==null&&wh(f,m,y,v,!0)}}e:{if(h=u?ps(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=Iy;else if(_h(h))if(Yg)S=Oy;else{S=Ny;var w=Dy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Uy);if(S&&(S=S(n,u))){jg(f,S,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Dc(h,"number",h.value)}switch(w=u?ps(u):window,n){case"focusin":(_h(w)||w.contentEditable==="true")&&(fs=w,Xc=u,Ro=null);break;case"focusout":Ro=Xc=fs=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Mh(f,t,c);break;case"selectionchange":if(By)break;case"keydown":case"keyup":Mh(f,t,c)}var b;if(Jd)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ds?Wg(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Gg&&t.locale!=="ko"&&(ds||L!=="onCompositionStart"?L==="onCompositionEnd"&&ds&&(b=Vg()):(Vi=c,$d="value"in Vi?Vi.value:Vi.textContent,ds=!0)),w=Al(u,L),0<w.length&&(L=new hh(L,n,null,t,c),f.push({event:L,listeners:w}),b?L.data=b:(b=Xg(t),b!==null&&(L.data=b)))),(b=Ry?by(n,t):Cy(n,t))&&(u=Al(u,"onBeforeInput"),0<u.length&&(c=new hh("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=b))}i_(f,e)})}function Wo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Al(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fo(n,t),s!=null&&i.unshift(Wo(n,s,r)),s=Fo(n,e),s!=null&&i.push(Wo(n,s,r))),n=n.return}return i}function Hr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Fo(t,s),l!=null&&o.unshift(Wo(t,l,a))):r||(l=Fo(t,s),l!=null&&o.push(Wo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Gy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function Ah(n){return(typeof n=="string"?n:""+n).replace(Gy,`
`).replace(Wy,"")}function wa(n,e,t){if(e=Ah(e),Ah(n)!==e&&t)throw Error(te(425))}function Rl(){}var Yc=null,Kc=null;function qc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(Yy)}:$c;function Yy(n){setTimeout(function(){throw n})}function Pu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),zo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zo(e)}function Ki(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function bh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),$n="__reactFiber$"+qs,Xo="__reactProps$"+qs,Ti="__reactContainer$"+qs,Zc="__reactEvents$"+qs,Ky="__reactListeners$"+qs,qy="__reactHandles$"+qs;function xr(n){var e=n[$n];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ti]||t[$n]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=bh(n);n!==null;){if(t=n[$n])return t;n=bh(n)}return e}n=t,t=n.parentNode}return null}function oa(n){return n=n[$n]||n[Ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Zl(n){return n[Xo]||null}var Qc=[],ms=-1;function rr(n){return{current:n}}function it(n){0>ms||(n.current=Qc[ms],Qc[ms]=null,ms--)}function et(n,e){ms++,Qc[ms]=n.current,n.current=e}var nr={},Gt=rr(nr),sn=rr(!1),Cr=nr;function Ds(n,e){var t=n.type.contextTypes;if(!t)return nr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function on(n){return n=n.childContextTypes,n!=null}function bl(){it(sn),it(Gt)}function Ch(n,e,t){if(Gt.current!==nr)throw Error(te(168));et(Gt,e),et(sn,t)}function s_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Dv(n)||"Unknown",r));return lt({},t,i)}function Cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Cr=Gt.current,et(Gt,n),et(sn,sn.current),!0}function Lh(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=s_(n,e,Cr),i.__reactInternalMemoizedMergedChildContext=n,it(sn),it(Gt),et(Gt,n)):it(sn),et(sn,t)}var hi=null,Ql=!1,Iu=!1;function o_(n){hi===null?hi=[n]:hi.push(n)}function $y(n){Ql=!0,o_(n)}function sr(){if(!Iu&&hi!==null){Iu=!0;var n=0,e=$e;try{var t=hi;for($e=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}hi=null,Ql=!1}catch(r){throw hi!==null&&(hi=hi.slice(n+1)),Pg(jd,sr),r}finally{$e=e,Iu=!1}}return null}var gs=[],_s=0,Ll=null,Pl=0,xn=[],Sn=0,Lr=null,mi=1,gi="";function mr(n,e){gs[_s++]=Pl,gs[_s++]=Ll,Ll=n,Pl=e}function a_(n,e,t){xn[Sn++]=mi,xn[Sn++]=gi,xn[Sn++]=Lr,Lr=n;var i=mi;n=gi;var r=32-Hn(i)-1;i&=~(1<<r),t+=1;var s=32-Hn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mi=1<<32-Hn(e)+r|t<<r|i,gi=s+n}else mi=1<<s|t<<r|i,gi=n}function tf(n){n.return!==null&&(mr(n,1),a_(n,1,0))}function nf(n){for(;n===Ll;)Ll=gs[--_s],gs[_s]=null,Pl=gs[--_s],gs[_s]=null;for(;n===Lr;)Lr=xn[--Sn],xn[Sn]=null,gi=xn[--Sn],xn[Sn]=null,mi=xn[--Sn],xn[Sn]=null}var hn=null,fn=null,rt=!1,Fn=null;function l_(n,e){var t=Tn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ph(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hn=n,fn=Ki(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hn=n,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lr!==null?{id:mi,overflow:gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Tn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hn=n,fn=null,!0):!1;default:return!1}}function Jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ed(n){if(rt){var e=fn;if(e){var t=e;if(!Ph(n,e)){if(Jc(n))throw Error(te(418));e=Ki(t.nextSibling);var i=hn;e&&Ph(n,e)?l_(i,t):(n.flags=n.flags&-4097|2,rt=!1,hn=n)}}else{if(Jc(n))throw Error(te(418));n.flags=n.flags&-4097|2,rt=!1,hn=n}}}function Ih(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function Aa(n){if(n!==hn)return!1;if(!rt)return Ih(n),rt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!qc(n.type,n.memoizedProps)),e&&(e=fn)){if(Jc(n))throw u_(),Error(te(418));for(;e;)l_(n,e),e=Ki(e.nextSibling)}if(Ih(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){fn=Ki(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}fn=null}}else fn=hn?Ki(n.stateNode.nextSibling):null;return!0}function u_(){for(var n=fn;n;)n=Ki(n.nextSibling)}function Ns(){fn=hn=null,rt=!1}function rf(n){Fn===null?Fn=[n]:Fn.push(n)}var Zy=bi.ReactCurrentBatchConfig;function Un(n,e){if(n&&n.defaultProps){e=lt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Il=rr(null),Dl=null,vs=null,sf=null;function of(){sf=vs=Dl=null}function af(n){var e=Il.current;it(Il),n._currentValue=e}function td(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function As(n,e){Dl=n,sf=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(rn=!0),n.firstContext=null)}function An(n){var e=n._currentValue;if(sf!==n)if(n={context:n,memoizedValue:e,next:null},vs===null){if(Dl===null)throw Error(te(308));vs=n,Dl.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return e}var Sr=null;function lf(n){Sr===null?Sr=[n]:Sr.push(n)}function c_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,lf(e)):(t.next=r.next,r.next=t),e.interleaved=t,wi(n,i)}function wi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ki=!1;function uf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Si(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(n,t)}return r=i.interleaved,r===null?(e.next=e,lf(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(n,t)}function ll(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Yd(n,t)}}function Dh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Nl(n,e,t,i){var r=n.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,v=a;switch(h=e,p=t,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=lt({},f,h);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,n.lanes=o,n.memoizedState=f}}function Nh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var f_=new cg.Component().refs;function nd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:lt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Br(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=$t(),r=Zi(n),s=Si(i,r);s.payload=e,t!=null&&(s.callback=t),e=qi(n,s,r),e!==null&&(Vn(e,n,r,i),ll(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=$t(),r=Zi(n),s=Si(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=qi(n,s,r),e!==null&&(Vn(e,n,r,i),ll(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=$t(),i=Zi(n),r=Si(t,i);r.tag=2,e!=null&&(r.callback=e),e=qi(n,r,i),e!==null&&(Vn(e,n,i,t),ll(e,n,i))}};function Uh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(t,i)||!Vo(r,s):!0}function h_(n,e,t){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=on(e)?Cr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ds(n,r):nr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Oh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Jl.enqueueReplaceState(e,e.state,null)}function id(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=f_,uf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=on(e)?Cr:Gt.current,r.context=Ds(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Nl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===f_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Ra(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Fh(n){var e=n._init;return e(n._payload)}function p_(n){function e(d,_){if(n){var g=d.deletions;g===null?(d.deletions=[_],d.flags|=16):g.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Qi(d,_),d.index=0,d.sibling=null,d}function s(d,_,g){return d.index=g,n?(g=d.alternate,g!==null?(g=g.index,g<_?(d.flags|=2,_):g):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,_,g,x){return _===null||_.tag!==6?(_=Bu(g,d.mode,x),_.return=d,_):(_=r(_,g),_.return=d,_)}function l(d,_,g,x){var S=g.type;return S===cs?c(d,_,g.props.children,x,g.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fi&&Fh(S)===_.type)?(x=r(_,g.props),x.ref=so(d,_,g),x.return=d,x):(x=pl(g.type,g.key,g.props,null,d.mode,x),x.ref=so(d,_,g),x.return=d,x)}function u(d,_,g,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=zu(g,d.mode,x),_.return=d,_):(_=r(_,g.children||[]),_.return=d,_)}function c(d,_,g,x,S){return _===null||_.tag!==7?(_=Tr(g,d.mode,x,S),_.return=d,_):(_=r(_,g),_.return=d,_)}function f(d,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bu(""+_,d.mode,g),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ga:return g=pl(_.type,_.key,_.props,null,d.mode,g),g.ref=so(d,null,_),g.return=d,g;case us:return _=zu(_,d.mode,g),_.return=d,_;case Fi:var x=_._init;return f(d,x(_._payload),g)}if(yo(_)||eo(_))return _=Tr(_,d.mode,g,null),_.return=d,_;Ra(d,_)}return null}function h(d,_,g,x){var S=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(d,_,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ga:return g.key===S?l(d,_,g,x):null;case us:return g.key===S?u(d,_,g,x):null;case Fi:return S=g._init,h(d,_,S(g._payload),x)}if(yo(g)||eo(g))return S!==null?null:c(d,_,g,x,null);Ra(d,g)}return null}function p(d,_,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(g)||null,a(_,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:return d=d.get(x.key===null?g:x.key)||null,l(_,d,x,S);case us:return d=d.get(x.key===null?g:x.key)||null,u(_,d,x,S);case Fi:var w=x._init;return p(d,_,g,w(x._payload),S)}if(yo(x)||eo(x))return d=d.get(g)||null,c(_,d,x,S,null);Ra(_,x)}return null}function y(d,_,g,x){for(var S=null,w=null,b=_,L=_=0,M=null;b!==null&&L<g.length;L++){b.index>L?(M=b,b=null):M=b.sibling;var A=h(d,b,g[L],x);if(A===null){b===null&&(b=M);break}n&&b&&A.alternate===null&&e(d,b),_=s(A,_,L),w===null?S=A:w.sibling=A,w=A,b=M}if(L===g.length)return t(d,b),rt&&mr(d,L),S;if(b===null){for(;L<g.length;L++)b=f(d,g[L],x),b!==null&&(_=s(b,_,L),w===null?S=b:w.sibling=b,w=b);return rt&&mr(d,L),S}for(b=i(d,b);L<g.length;L++)M=p(b,d,L,g[L],x),M!==null&&(n&&M.alternate!==null&&b.delete(M.key===null?L:M.key),_=s(M,_,L),w===null?S=M:w.sibling=M,w=M);return n&&b.forEach(function(X){return e(d,X)}),rt&&mr(d,L),S}function v(d,_,g,x){var S=eo(g);if(typeof S!="function")throw Error(te(150));if(g=S.call(g),g==null)throw Error(te(151));for(var w=S=null,b=_,L=_=0,M=null,A=g.next();b!==null&&!A.done;L++,A=g.next()){b.index>L?(M=b,b=null):M=b.sibling;var X=h(d,b,A.value,x);if(X===null){b===null&&(b=M);break}n&&b&&X.alternate===null&&e(d,b),_=s(X,_,L),w===null?S=X:w.sibling=X,w=X,b=M}if(A.done)return t(d,b),rt&&mr(d,L),S;if(b===null){for(;!A.done;L++,A=g.next())A=f(d,A.value,x),A!==null&&(_=s(A,_,L),w===null?S=A:w.sibling=A,w=A);return rt&&mr(d,L),S}for(b=i(d,b);!A.done;L++,A=g.next())A=p(b,d,L,A.value,x),A!==null&&(n&&A.alternate!==null&&b.delete(A.key===null?L:A.key),_=s(A,_,L),w===null?S=A:w.sibling=A,w=A);return n&&b.forEach(function($){return e(d,$)}),rt&&mr(d,L),S}function m(d,_,g,x){if(typeof g=="object"&&g!==null&&g.type===cs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ga:e:{for(var S=g.key,w=_;w!==null;){if(w.key===S){if(S=g.type,S===cs){if(w.tag===7){t(d,w.sibling),_=r(w,g.props.children),_.return=d,d=_;break e}}else if(w.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fi&&Fh(S)===w.type){t(d,w.sibling),_=r(w,g.props),_.ref=so(d,w,g),_.return=d,d=_;break e}t(d,w);break}else e(d,w);w=w.sibling}g.type===cs?(_=Tr(g.props.children,d.mode,x,g.key),_.return=d,d=_):(x=pl(g.type,g.key,g.props,null,d.mode,x),x.ref=so(d,_,g),x.return=d,d=x)}return o(d);case us:e:{for(w=g.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){t(d,_.sibling),_=r(_,g.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=zu(g,d.mode,x),_.return=d,d=_}return o(d);case Fi:return w=g._init,m(d,_,w(g._payload),x)}if(yo(g))return y(d,_,g,x);if(eo(g))return v(d,_,g,x);Ra(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,g),_.return=d,d=_):(t(d,_),_=Bu(g,d.mode,x),_.return=d,d=_),o(d)):t(d,_)}return m}var Us=p_(!0),m_=p_(!1),aa={},Qn=rr(aa),jo=rr(aa),Yo=rr(aa);function Mr(n){if(n===aa)throw Error(te(174));return n}function cf(n,e){switch(et(Yo,e),et(jo,n),et(Qn,aa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Uc(e,n)}it(Qn),et(Qn,e)}function Os(){it(Qn),it(jo),it(Yo)}function g_(n){Mr(Yo.current);var e=Mr(Qn.current),t=Uc(e,n.type);e!==t&&(et(jo,n),et(Qn,t))}function df(n){jo.current===n&&(it(Qn),it(jo))}var st=rr(0);function Ul(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function ff(){for(var n=0;n<Du.length;n++)Du[n]._workInProgressVersionPrimary=null;Du.length=0}var ul=bi.ReactCurrentDispatcher,Nu=bi.ReactCurrentBatchConfig,Pr=0,ot=null,Mt=null,Ct=null,Ol=!1,bo=!1,Ko=0,Qy=0;function Ft(){throw Error(te(321))}function hf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Xn(n[t],e[t]))return!1;return!0}function pf(n,e,t,i,r,s){if(Pr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=n===null||n.memoizedState===null?nx:ix,n=t(i,r),bo){s=0;do{if(bo=!1,Ko=0,25<=s)throw Error(te(301));s+=1,Ct=Mt=null,e.updateQueue=null,ul.current=rx,n=t(i,r)}while(bo)}if(ul.current=Fl,e=Mt!==null&&Mt.next!==null,Pr=0,Ct=Mt=ot=null,Ol=!1,e)throw Error(te(300));return n}function mf(){var n=Ko!==0;return Ko=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ot.memoizedState=Ct=n:Ct=Ct.next=n,Ct}function Rn(){if(Mt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=Mt.next;var e=Ct===null?ot.memoizedState:Ct.next;if(e!==null)Ct=e,Mt=n;else{if(n===null)throw Error(te(310));Mt=n,n={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Ct===null?ot.memoizedState=Ct=n:Ct=Ct.next=n}return Ct}function qo(n,e){return typeof e=="function"?e(n):e}function Uu(n){var e=Rn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Mt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ot.lanes|=c,Ir|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ot.lanes|=s,Ir|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ou(n){var e=Rn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function __(){}function v_(n,e){var t=ot,i=Rn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,gf(S_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(t.flags|=2048,$o(9,x_.bind(null,t,i,r,e),void 0,null),Pt===null)throw Error(te(349));Pr&30||y_(t,e,r)}return r}function y_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function x_(n,e,t,i){e.value=t,e.getSnapshot=i,M_(e)&&E_(n)}function S_(n,e,t){return t(function(){M_(e)&&E_(n)})}function M_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Xn(n,t)}catch{return!0}}function E_(n){var e=wi(n,1);e!==null&&Vn(e,n,1,-1)}function kh(n){var e=Kn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},e.queue=n,n=n.dispatch=tx.bind(null,ot,n),[e.memoizedState,n]}function $o(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function T_(){return Rn().memoizedState}function cl(n,e,t,i){var r=Kn();ot.flags|=n,r.memoizedState=$o(1|e,t,void 0,i===void 0?null:i)}function eu(n,e,t,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&hf(i,o.deps)){r.memoizedState=$o(e,t,s,i);return}}ot.flags|=n,r.memoizedState=$o(1|e,t,s,i)}function Bh(n,e){return cl(8390656,8,n,e)}function gf(n,e){return eu(2048,8,n,e)}function w_(n,e){return eu(4,2,n,e)}function A_(n,e){return eu(4,4,n,e)}function R_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function b_(n,e,t){return t=t!=null?t.concat([n]):null,eu(4,4,R_.bind(null,e,n),t)}function _f(){}function C_(n,e){var t=Rn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function L_(n,e){var t=Rn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function P_(n,e,t){return Pr&21?(Xn(t,e)||(t=Ng(),ot.lanes|=t,Ir|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,rn=!0),n.memoizedState=t)}function Jy(n,e){var t=$e;$e=t!==0&&4>t?t:4,n(!0);var i=Nu.transition;Nu.transition={};try{n(!1),e()}finally{$e=t,Nu.transition=i}}function I_(){return Rn().memoizedState}function ex(n,e,t){var i=Zi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},D_(n))N_(e,t);else if(t=c_(n,e,t,i),t!==null){var r=$t();Vn(t,n,i,r),U_(t,e,i)}}function tx(n,e,t){var i=Zi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(D_(n))N_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,lf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=c_(n,e,r,i),t!==null&&(r=$t(),Vn(t,n,i,r),U_(t,e,i))}}function D_(n){var e=n.alternate;return n===ot||e!==null&&e===ot}function N_(n,e){bo=Ol=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function U_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Yd(n,t)}}var Fl={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},nx={readContext:An,useCallback:function(n,e){return Kn().memoizedState=[n,e===void 0?null:e],n},useContext:An,useEffect:Bh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cl(4194308,4,R_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cl(4194308,4,n,e)},useInsertionEffect:function(n,e){return cl(4,2,n,e)},useMemo:function(n,e){var t=Kn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Kn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ex.bind(null,ot,n),[i.memoizedState,n]},useRef:function(n){var e=Kn();return n={current:n},e.memoizedState=n},useState:kh,useDebugValue:_f,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=kh(!1),e=n[0];return n=Jy.bind(null,n[1]),Kn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ot,r=Kn();if(rt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Pt===null)throw Error(te(349));Pr&30||y_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Bh(S_.bind(null,i,s,n),[n]),i.flags|=2048,$o(9,x_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Kn(),e=Pt.identifierPrefix;if(rt){var t=gi,i=mi;t=(i&~(1<<32-Hn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ko++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Qy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ix={readContext:An,useCallback:C_,useContext:An,useEffect:gf,useImperativeHandle:b_,useInsertionEffect:w_,useLayoutEffect:A_,useMemo:L_,useReducer:Uu,useRef:T_,useState:function(){return Uu(qo)},useDebugValue:_f,useDeferredValue:function(n){var e=Rn();return P_(e,Mt.memoizedState,n)},useTransition:function(){var n=Uu(qo)[0],e=Rn().memoizedState;return[n,e]},useMutableSource:__,useSyncExternalStore:v_,useId:I_,unstable_isNewReconciler:!1},rx={readContext:An,useCallback:C_,useContext:An,useEffect:gf,useImperativeHandle:b_,useInsertionEffect:w_,useLayoutEffect:A_,useMemo:L_,useReducer:Ou,useRef:T_,useState:function(){return Ou(qo)},useDebugValue:_f,useDeferredValue:function(n){var e=Rn();return Mt===null?e.memoizedState=n:P_(e,Mt.memoizedState,n)},useTransition:function(){var n=Ou(qo)[0],e=Rn().memoizedState;return[n,e]},useMutableSource:__,useSyncExternalStore:v_,useId:I_,unstable_isNewReconciler:!1};function Fs(n,e){try{var t="",i=e;do t+=Iv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Fu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function rd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var sx=typeof WeakMap=="function"?WeakMap:Map;function O_(n,e,t){t=Si(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Bl||(Bl=!0,pd=i),rd(n,e)},t}function F_(n,e,t){t=Si(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){rd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){rd(n,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function zh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new sx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=yx.bind(null,n,e,t),e.then(n,n))}function Hh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Vh(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Si(-1,1),e.tag=2,qi(t,e,1))),t.lanes|=1),n)}var ox=bi.ReactCurrentOwner,rn=!1;function Kt(n,e,t,i){e.child=n===null?m_(e,null,t,i):Us(e,n.child,t,i)}function Gh(n,e,t,i,r){t=t.render;var s=e.ref;return As(e,r),i=pf(n,e,t,i,s,r),t=mf(),n!==null&&!rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ai(n,e,r)):(rt&&t&&tf(e),e.flags|=1,Kt(n,e,i,r),e.child)}function Wh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!wf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,k_(n,e,s,i,r)):(n=pl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Vo,t(o,i)&&n.ref===e.ref)return Ai(n,e,r)}return e.flags|=1,n=Qi(s,i),n.ref=e.ref,n.return=e,e.child=n}function k_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Vo(s,i)&&n.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(rn=!0);else return e.lanes=n.lanes,Ai(n,e,r)}return sd(n,e,t,i,r)}function B_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(xs,dn),dn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,et(xs,dn),dn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,et(xs,dn),dn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,et(xs,dn),dn|=i;return Kt(n,e,r,t),e.child}function z_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function sd(n,e,t,i,r){var s=on(t)?Cr:Gt.current;return s=Ds(e,s),As(e,r),t=pf(n,e,t,i,s,r),i=mf(),n!==null&&!rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ai(n,e,r)):(rt&&i&&tf(e),e.flags|=1,Kt(n,e,t,r),e.child)}function Xh(n,e,t,i,r){if(on(t)){var s=!0;Cl(e)}else s=!1;if(As(e,r),e.stateNode===null)dl(n,e),h_(e,t,i),id(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=An(u):(u=on(t)?Cr:Gt.current,u=Ds(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Oh(e,o,i,u),ki=!1;var h=e.memoizedState;o.state=h,Nl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||sn.current||ki?(typeof c=="function"&&(nd(e,t,c,i),l=e.memoizedState),(a=ki||Uh(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d_(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Un(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=An(l):(l=on(t)?Cr:Gt.current,l=Ds(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Oh(e,o,i,l),ki=!1,h=e.memoizedState,o.state=h,Nl(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||sn.current||ki?(typeof p=="function"&&(nd(e,t,p,i),y=e.memoizedState),(u=ki||Uh(e,t,u,i,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return od(n,e,t,i,s,r)}function od(n,e,t,i,r,s){z_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lh(e,t,!1),Ai(n,e,s);i=e.stateNode,ox.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Us(e,n.child,null,s),e.child=Us(e,null,a,s)):Kt(n,e,a,s),e.memoizedState=i.state,r&&Lh(e,t,!0),e.child}function H_(n){var e=n.stateNode;e.pendingContext?Ch(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ch(n,e.context,!1),cf(n,e.containerInfo)}function jh(n,e,t,i,r){return Ns(),rf(r),e.flags|=256,Kt(n,e,t,i),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ld(n){return{baseLanes:n,cachePool:null,transitions:null}}function V_(n,e,t){var i=e.pendingProps,r=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),et(st,r&1),n===null)return ed(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,i,0,null),n=Tr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ld(t),e.memoizedState=ad,n):vf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ax(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qi(a,s):(s=Tr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ld(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ad,i}return s=n.child,n=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function vf(n,e){return e=iu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ba(n,e,t,i){return i!==null&&rf(i),Us(e,n.child,null,t),n=vf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ax(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Fu(Error(te(422))),ba(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=iu({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,n.child,null,o),e.child.memoizedState=ld(o),e.memoizedState=ad,s);if(!(e.mode&1))return ba(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Fu(s,i,void 0),ba(n,e,o,i)}if(a=(o&n.childLanes)!==0,rn||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wi(n,r),Vn(i,n,r,-1))}return Tf(),i=Fu(Error(te(421))),ba(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=xx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,fn=Ki(r.nextSibling),hn=e,rt=!0,Fn=null,n!==null&&(xn[Sn++]=mi,xn[Sn++]=gi,xn[Sn++]=Lr,mi=n.id,gi=n.overflow,Lr=e),e=vf(e,i.children),e.flags|=4096,e)}function Yh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),td(n.return,e,t)}function ku(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function G_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(n,e,i.children,t),i=st.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yh(n,t,e);else if(n.tag===19)Yh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(et(st,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ul(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ku(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ul(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ku(e,!0,t,null,s);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ai(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ir|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=Qi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Qi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function lx(n,e,t){switch(e.tag){case 3:H_(e),Ns();break;case 5:g_(e);break;case 1:on(e.type)&&Cl(e);break;case 4:cf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(st,st.current&1),e.flags|=128,null):t&e.child.childLanes?V_(n,e,t):(et(st,st.current&1),n=Ai(n,e,t),n!==null?n.sibling:null);et(st,st.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return G_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(st,st.current),i)break;return null;case 22:case 23:return e.lanes=0,B_(n,e,t)}return Ai(n,e,t)}var W_,ud,X_,j_;W_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ud=function(){};X_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Mr(Qn.current);var s=null;switch(t){case"input":r=Pc(n,r),i=Pc(n,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=Nc(n,r),i=Nc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Rl)}Oc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};j_=function(n,e,t,i){t!==i&&(e.flags|=4)};function oo(n,e){if(!rt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ux(n,e,t){var i=e.pendingProps;switch(nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return on(e.type)&&bl(),kt(e),null;case 3:return i=e.stateNode,Os(),it(sn),it(Gt),ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Aa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(_d(Fn),Fn=null))),ud(n,e),kt(e),null;case 5:df(e);var r=Mr(Yo.current);if(t=e.type,n!==null&&e.stateNode!=null)X_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return kt(e),null}if(n=Mr(Qn.current),Aa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Xo]=s,n=(e.mode&1)!==0,t){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<So.length;r++)nt(So[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":nh(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":rh(i,s),nt("invalid",i)}Oc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,n),r=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(t){case"input":_a(i),ih(i,s,!0);break;case"textarea":_a(i),sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=yg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[$n]=e,n[Xo]=i,W_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Fc(t,i),t){case"dialog":nt("cancel",n),nt("close",n),r=i;break;case"iframe":case"object":case"embed":nt("load",n),r=i;break;case"video":case"audio":for(r=0;r<So.length;r++)nt(So[r],n);r=i;break;case"source":nt("error",n),r=i;break;case"img":case"image":case"link":nt("error",n),nt("load",n),r=i;break;case"details":nt("toggle",n),r=i;break;case"input":nh(n,i),r=Pc(n,i),nt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),nt("invalid",n);break;case"textarea":rh(n,i),r=Nc(n,i),nt("invalid",n);break;default:r=i}Oc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Oo(n,l):typeof l=="number"&&Oo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",n):l!=null&&Hd(n,s,l,o))}switch(t){case"input":_a(n),ih(n,i,!1);break;case"textarea":_a(n),sh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+tr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ms(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Rl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(n&&e.stateNode!=null)j_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Mr(Yo.current),Mr(Qn.current),Aa(e)){if(i=e.stateNode,t=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==t)&&(n=hn,n!==null))switch(n.tag){case 3:wa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return kt(e),null;case 13:if(it(st),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rt&&fn!==null&&e.mode&1&&!(e.flags&128))u_(),Ns(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[$n]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Fn!==null&&(_d(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||st.current&1?Et===0&&(Et=3):Tf())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Os(),ud(n,e),n===null&&Go(e.stateNode.containerInfo),kt(e),null;case 10:return af(e.type._context),kt(e),null;case 17:return on(e.type)&&bl(),kt(e),null;case 19:if(it(st),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oo(s,!1);else{if(Et!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ul(n),o!==null){for(e.flags|=128,oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return et(st,st.current&1|2),e.child}n=n.sibling}s.tail!==null&&pt()>ks&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ul(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return kt(e),null}else 2*pt()-s.renderingStartTime>ks&&t!==1073741824&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,t=st.current,et(st,i?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return Ef(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function cx(n,e){switch(nf(e),e.tag){case 1:return on(e.type)&&bl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Os(),it(sn),it(Gt),ff(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return df(e),null;case 13:if(it(st),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ns()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return it(st),null;case 4:return Os(),null;case 10:return af(e.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var Ca=!1,Ht=!1,dx=typeof WeakSet=="function"?WeakSet:Set,fe=null;function ys(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){dt(n,e,i)}else t.current=null}function cd(n,e,t){try{t()}catch(i){dt(n,e,i)}}var Kh=!1;function fx(n,e){if(Yc=Tl,n=$g(),ef(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kc={focusedElem:n,selectionRange:t},Tl=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,m=y.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Un(e.type,v),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){dt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return y=Kh,Kh=!1,y}function Co(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&cd(e,t,s)}r=r.next}while(r!==i)}}function tu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function dd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Y_(n){var e=n.alternate;e!==null&&(n.alternate=null,Y_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[$n],delete e[Xo],delete e[Zc],delete e[Ky],delete e[qy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function K_(n){return n.tag===5||n.tag===3||n.tag===4}function qh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||K_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(n=n.child,n!==null))for(fd(n,e,t),n=n.sibling;n!==null;)fd(n,e,t),n=n.sibling}function hd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(hd(n,e,t),n=n.sibling;n!==null;)hd(n,e,t),n=n.sibling}var It=null,On=!1;function Li(n,e,t){for(t=t.child;t!==null;)q_(n,e,t),t=t.sibling}function q_(n,e,t){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Yl,t)}catch{}switch(t.tag){case 5:Ht||ys(t,e);case 6:var i=It,r=On;It=null,Li(n,e,t),It=i,On=r,It!==null&&(On?(n=It,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):It.removeChild(t.stateNode));break;case 18:It!==null&&(On?(n=It,t=t.stateNode,n.nodeType===8?Pu(n.parentNode,t):n.nodeType===1&&Pu(n,t),zo(n)):Pu(It,t.stateNode));break;case 4:i=It,r=On,It=t.stateNode.containerInfo,On=!0,Li(n,e,t),It=i,On=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cd(t,e,o),r=r.next}while(r!==i)}Li(n,e,t);break;case 1:if(!Ht&&(ys(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){dt(t,e,a)}Li(n,e,t);break;case 21:Li(n,e,t);break;case 22:t.mode&1?(Ht=(i=Ht)||t.memoizedState!==null,Li(n,e,t),Ht=i):Li(n,e,t);break;default:Li(n,e,t)}}function $h(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new dx),e.forEach(function(i){var r=Sx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ln(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,On=!1;break e;case 3:It=a.stateNode.containerInfo,On=!0;break e;case 4:It=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(It===null)throw Error(te(160));q_(s,o,r),It=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$_(e,n),e=e.sibling}function $_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(e,n),Yn(n),i&4){try{Co(3,n,n.return),tu(3,n)}catch(v){dt(n,n.return,v)}try{Co(5,n,n.return)}catch(v){dt(n,n.return,v)}}break;case 1:Ln(e,n),Yn(n),i&512&&t!==null&&ys(t,t.return);break;case 5:if(Ln(e,n),Yn(n),i&512&&t!==null&&ys(t,t.return),n.flags&32){var r=n.stateNode;try{Oo(r,"")}catch(v){dt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_g(r,s),Fc(a,o);var u=Fc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Mg(r,f):c==="dangerouslySetInnerHTML"?xg(r,f):c==="children"?Oo(r,f):Hd(r,c,f,u)}switch(a){case"input":Ic(r,s);break;case"textarea":vg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ms(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xo]=s}catch(v){dt(n,n.return,v)}}break;case 6:if(Ln(e,n),Yn(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){dt(n,n.return,v)}}break;case 3:if(Ln(e,n),Yn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(v){dt(n,n.return,v)}break;case 4:Ln(e,n),Yn(n);break;case 13:Ln(e,n),Yn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Sf=pt())),i&4&&$h(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Ht=(u=Ht)||c,Ln(e,n),Ht=u):Ln(e,n),Yn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(fe=n,c=n.child;c!==null;){for(f=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Co(4,h,h.return);break;case 1:ys(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){dt(i,t,v)}}break;case 5:ys(h,h.return);break;case 22:if(h.memoizedState!==null){Qh(f);continue}}p!==null?(p.return=h,fe=p):Qh(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sg("display",o))}catch(v){dt(n,n.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){dt(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,n),Yn(n),i&4&&$h(n);break;case 21:break;default:Ln(e,n),Yn(n)}}function Yn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(K_(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oo(r,""),i.flags&=-33);var s=qh(n);hd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=qh(n);fd(n,a,o);break;default:throw Error(te(161))}}catch(l){dt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function hx(n,e,t){fe=n,Z_(n)}function Z_(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Ca;var u=Ht;if(Ca=o,(Ht=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Jh(r):l!==null?(l.return=o,fe=l):Jh(r);for(;s!==null;)fe=s,Z_(s),s=s.sibling;fe=r,Ca=a,Ht=u}Zh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Zh(n)}}function Zh(n){for(;fe!==null;){var e=fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Un(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Nh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ht||e.flags&512&&dd(e)}catch(h){dt(e,e.return,h)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Qh(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Jh(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tu(4,e)}catch(l){dt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{dd(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{dd(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var px=Math.ceil,kl=bi.ReactCurrentDispatcher,yf=bi.ReactCurrentOwner,wn=bi.ReactCurrentBatchConfig,Xe=0,Pt=null,yt=null,Nt=0,dn=0,xs=rr(0),Et=0,Zo=null,Ir=0,nu=0,xf=0,Lo=null,tn=null,Sf=0,ks=1/0,fi=null,Bl=!1,pd=null,$i=null,La=!1,Gi=null,zl=0,Po=0,md=null,fl=-1,hl=0;function $t(){return Xe&6?pt():fl!==-1?fl:fl=pt()}function Zi(n){return n.mode&1?Xe&2&&Nt!==0?Nt&-Nt:Zy.transition!==null?(hl===0&&(hl=Ng()),hl):(n=$e,n!==0||(n=window.event,n=n===void 0?16:Hg(n.type)),n):1}function Vn(n,e,t,i){if(50<Po)throw Po=0,md=null,Error(te(185));ra(n,t,i),(!(Xe&2)||n!==Pt)&&(n===Pt&&(!(Xe&2)&&(nu|=t),Et===4&&Hi(n,Nt)),an(n,i),t===1&&Xe===0&&!(e.mode&1)&&(ks=pt()+500,Ql&&sr()))}function an(n,e){var t=n.callbackNode;Zv(n,e);var i=El(n,n===Pt?Nt:0);if(i===0)t!==null&&lh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&lh(t),e===1)n.tag===0?$y(ep.bind(null,n)):o_(ep.bind(null,n)),jy(function(){!(Xe&6)&&sr()}),t=null;else{switch(Ug(i)){case 1:t=jd;break;case 4:t=Ig;break;case 16:t=Ml;break;case 536870912:t=Dg;break;default:t=Ml}t=s0(t,Q_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Q_(n,e){if(fl=-1,hl=0,Xe&6)throw Error(te(327));var t=n.callbackNode;if(Rs()&&n.callbackNode!==t)return null;var i=El(n,n===Pt?Nt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Hl(n,i);else{e=i;var r=Xe;Xe|=2;var s=e0();(Pt!==n||Nt!==e)&&(fi=null,ks=pt()+500,Er(n,e));do try{_x();break}catch(a){J_(n,a)}while(1);of(),kl.current=s,Xe=r,yt!==null?e=0:(Pt=null,Nt=0,e=Et)}if(e!==0){if(e===2&&(r=Vc(n),r!==0&&(i=r,e=gd(n,r))),e===1)throw t=Zo,Er(n,0),Hi(n,i),an(n,pt()),t;if(e===6)Hi(n,i);else{if(r=n.current.alternate,!(i&30)&&!mx(r)&&(e=Hl(n,i),e===2&&(s=Vc(n),s!==0&&(i=s,e=gd(n,s))),e===1))throw t=Zo,Er(n,0),Hi(n,i),an(n,pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:gr(n,tn,fi);break;case 3:if(Hi(n,i),(i&130023424)===i&&(e=Sf+500-pt(),10<e)){if(El(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){$t(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=$c(gr.bind(null,n,tn,fi),e);break}gr(n,tn,fi);break;case 4:if(Hi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Hn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*px(i/1960))-i,10<i){n.timeoutHandle=$c(gr.bind(null,n,tn,fi),i);break}gr(n,tn,fi);break;case 5:gr(n,tn,fi);break;default:throw Error(te(329))}}}return an(n,pt()),n.callbackNode===t?Q_.bind(null,n):null}function gd(n,e){var t=Lo;return n.current.memoizedState.isDehydrated&&(Er(n,e).flags|=256),n=Hl(n,e),n!==2&&(e=tn,tn=t,e!==null&&_d(e)),n}function _d(n){tn===null?tn=n:tn.push.apply(tn,n)}function mx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(n,e){for(e&=~xf,e&=~nu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Hn(e),i=1<<t;n[t]=-1,e&=~i}}function ep(n){if(Xe&6)throw Error(te(327));Rs();var e=El(n,0);if(!(e&1))return an(n,pt()),null;var t=Hl(n,e);if(n.tag!==0&&t===2){var i=Vc(n);i!==0&&(e=i,t=gd(n,i))}if(t===1)throw t=Zo,Er(n,0),Hi(n,e),an(n,pt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,gr(n,tn,fi),an(n,pt()),null}function Mf(n,e){var t=Xe;Xe|=1;try{return n(e)}finally{Xe=t,Xe===0&&(ks=pt()+500,Ql&&sr())}}function Dr(n){Gi!==null&&Gi.tag===0&&!(Xe&6)&&Rs();var e=Xe;Xe|=1;var t=wn.transition,i=$e;try{if(wn.transition=null,$e=1,n)return n()}finally{$e=i,wn.transition=t,Xe=e,!(Xe&6)&&sr()}}function Ef(){dn=xs.current,it(xs)}function Er(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Xy(t)),yt!==null)for(t=yt.return;t!==null;){var i=t;switch(nf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:Os(),it(sn),it(Gt),ff();break;case 5:df(i);break;case 4:Os();break;case 13:it(st);break;case 19:it(st);break;case 10:af(i.type._context);break;case 22:case 23:Ef()}t=t.return}if(Pt=n,yt=n=Qi(n.current,null),Nt=dn=e,Et=0,Zo=null,xf=nu=Ir=0,tn=Lo=null,Sr!==null){for(e=0;e<Sr.length;e++)if(t=Sr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Sr=null}return n}function J_(n,e){do{var t=yt;try{if(of(),ul.current=Fl,Ol){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Pr=0,Ct=Mt=ot=null,bo=!1,Ko=0,yf.current=null,t===null||t.return===null){Et=1,Zo=e,yt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Hh(o);if(p!==null){p.flags&=-257,Vh(p,o,a,s,e),p.mode&1&&zh(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){zh(s,u,e),Tf();break e}l=Error(te(426))}}else if(rt&&a.mode&1){var m=Hh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vh(m,o,a,s,e),rf(Fs(l,a));break e}}s=l=Fs(l,a),Et!==4&&(Et=2),Lo===null?Lo=[s]:Lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=O_(s,l,e);Dh(s,d);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($i===null||!$i.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=F_(s,a,e);Dh(s,x);break e}}s=s.return}while(s!==null)}n0(t)}catch(S){e=S,yt===t&&t!==null&&(yt=t=t.return);continue}break}while(1)}function e0(){var n=kl.current;return kl.current=Fl,n===null?Fl:n}function Tf(){(Et===0||Et===3||Et===2)&&(Et=4),Pt===null||!(Ir&268435455)&&!(nu&268435455)||Hi(Pt,Nt)}function Hl(n,e){var t=Xe;Xe|=2;var i=e0();(Pt!==n||Nt!==e)&&(fi=null,Er(n,e));do try{gx();break}catch(r){J_(n,r)}while(1);if(of(),Xe=t,kl.current=i,yt!==null)throw Error(te(261));return Pt=null,Nt=0,Et}function gx(){for(;yt!==null;)t0(yt)}function _x(){for(;yt!==null&&!Vv();)t0(yt)}function t0(n){var e=r0(n.alternate,n,dn);n.memoizedProps=n.pendingProps,e===null?n0(n):yt=e,yf.current=null}function n0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=cx(t,e),t!==null){t.flags&=32767,yt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Et=6,yt=null;return}}else if(t=ux(t,e,dn),t!==null){yt=t;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=n}while(e!==null);Et===0&&(Et=5)}function gr(n,e,t){var i=$e,r=wn.transition;try{wn.transition=null,$e=1,vx(n,e,t,i)}finally{wn.transition=r,$e=i}return null}function vx(n,e,t,i){do Rs();while(Gi!==null);if(Xe&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Qv(n,s),n===Pt&&(yt=Pt=null,Nt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||La||(La=!0,s0(Ml,function(){return Rs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=$e;$e=1;var a=Xe;Xe|=4,yf.current=null,fx(n,t),$_(t,n),ky(Kc),Tl=!!Yc,Kc=Yc=null,n.current=t,hx(t),Gv(),Xe=a,$e=o,wn.transition=s}else n.current=t;if(La&&(La=!1,Gi=n,zl=r),s=n.pendingLanes,s===0&&($i=null),jv(t.stateNode),an(n,pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,n=pd,pd=null,n;return zl&1&&n.tag!==0&&Rs(),s=n.pendingLanes,s&1?n===md?Po++:(Po=0,md=n):Po=0,sr(),null}function Rs(){if(Gi!==null){var n=Ug(zl),e=wn.transition,t=$e;try{if(wn.transition=null,$e=16>n?16:n,Gi===null)var i=!1;else{if(n=Gi,Gi=null,zl=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:Co(8,c,s)}var f=c.child;if(f!==null)f.return=c,fe=f;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(Y_(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,fe=d;break e}fe=s.return}}var _=n.current;for(fe=_;fe!==null;){o=fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,fe=g;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(S){dt(a,a.return,S)}if(a===o){fe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,fe=x;break e}fe=a.return}}if(Xe=r,sr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Yl,n)}catch{}i=!0}return i}finally{$e=t,wn.transition=e}}return!1}function tp(n,e,t){e=Fs(t,e),e=O_(n,e,1),n=qi(n,e,1),e=$t(),n!==null&&(ra(n,1,e),an(n,e))}function dt(n,e,t){if(n.tag===3)tp(n,n,t);else for(;e!==null;){if(e.tag===3){tp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){n=Fs(t,n),n=F_(e,n,1),e=qi(e,n,1),n=$t(),e!==null&&(ra(e,1,n),an(e,n));break}}e=e.return}}function yx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=$t(),n.pingedLanes|=n.suspendedLanes&t,Pt===n&&(Nt&t)===t&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>pt()-Sf?Er(n,0):xf|=t),an(n,e)}function i0(n,e){e===0&&(n.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var t=$t();n=wi(n,e),n!==null&&(ra(n,e,t),an(n,t))}function xx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),i0(n,t)}function Sx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),i0(n,t)}var r0;r0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return rn=!1,lx(n,e,t);rn=!!(n.flags&131072)}else rn=!1,rt&&e.flags&1048576&&a_(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dl(n,e),n=e.pendingProps;var r=Ds(e,Gt.current);As(e,t),r=pf(null,e,i,n,r,t);var s=mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,Cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uf(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,id(e,i,n,t),e=od(null,e,i,!0,s,t)):(e.tag=0,rt&&s&&tf(e),Kt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(dl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ex(i),n=Un(i,n),r){case 0:e=sd(null,e,i,n,t);break e;case 1:e=Xh(null,e,i,n,t);break e;case 11:e=Gh(null,e,i,n,t);break e;case 14:e=Wh(null,e,i,Un(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),sd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Xh(n,e,i,r,t);case 3:e:{if(H_(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d_(n,e),Nl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(te(423)),e),e=jh(n,e,i,t,r);break e}else if(i!==r){r=Fs(Error(te(424)),e),e=jh(n,e,i,t,r);break e}else for(fn=Ki(e.stateNode.containerInfo.firstChild),hn=e,rt=!0,Fn=null,t=m_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ns(),i===r){e=Ai(n,e,t);break e}Kt(n,e,i,t)}e=e.child}return e;case 5:return g_(e),n===null&&ed(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,qc(i,r)?o=null:s!==null&&qc(i,s)&&(e.flags|=32),z_(n,e),Kt(n,e,o,t),e.child;case 6:return n===null&&ed(e),null;case 13:return V_(n,e,t);case 4:return cf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Us(e,null,i,t):Kt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Gh(n,e,i,r,t);case 7:return Kt(n,e,e.pendingProps,t),e.child;case 8:return Kt(n,e,e.pendingProps.children,t),e.child;case 12:return Kt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Il,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!sn.current){e=Ai(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),td(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),td(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,t),r=An(r),i=i(r),e.flags|=1,Kt(n,e,i,t),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Wh(n,e,i,r,t);case 15:return k_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),dl(n,e),e.tag=1,on(i)?(n=!0,Cl(e)):n=!1,As(e,t),h_(e,i,r),id(e,i,r,t),od(null,e,i,!0,n,t);case 19:return G_(n,e,t);case 22:return B_(n,e,t)}throw Error(te(156,e.tag))};function s0(n,e){return Pg(n,e)}function Mx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,e,t,i){return new Mx(n,e,t,i)}function wf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ex(n){if(typeof n=="function")return wf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Gd)return 11;if(n===Wd)return 14}return 2}function Qi(n,e){var t=n.alternate;return t===null?(t=Tn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function pl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")wf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case cs:return Tr(t.children,r,s,e);case Vd:o=8,r|=8;break;case Rc:return n=Tn(12,t,e,r|2),n.elementType=Rc,n.lanes=s,n;case bc:return n=Tn(13,t,e,r),n.elementType=bc,n.lanes=s,n;case Cc:return n=Tn(19,t,e,r),n.elementType=Cc,n.lanes=s,n;case pg:return iu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fg:o=10;break e;case hg:o=9;break e;case Gd:o=11;break e;case Wd:o=14;break e;case Fi:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Tn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Tr(n,e,t,i){return n=Tn(7,n,i,e),n.lanes=t,n}function iu(n,e,t,i){return n=Tn(22,n,i,e),n.elementType=pg,n.lanes=t,n.stateNode={isHidden:!1},n}function Bu(n,e,t){return n=Tn(6,n,null,e),n.lanes=t,n}function zu(n,e,t){return e=Tn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Tx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Af(n,e,t,i,r,s,o,a,l){return n=new Tx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),n}function wx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function o0(n){if(!n)return nr;n=n._reactInternals;e:{if(Br(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(on(t))return s_(n,t,e)}return e}function a0(n,e,t,i,r,s,o,a,l){return n=Af(t,i,!0,n,r,s,o,a,l),n.context=o0(null),t=n.current,i=$t(),r=Zi(t),s=Si(i,r),s.callback=e??null,qi(t,s,r),n.current.lanes=r,ra(n,r,i),an(n,i),n}function ru(n,e,t,i){var r=e.current,s=$t(),o=Zi(r);return t=o0(t),e.context===null?e.context=t:e.pendingContext=t,e=Si(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=qi(r,e,o),n!==null&&(Vn(n,r,o,s),ll(n,r,o)),o}function Vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function np(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Rf(n,e){np(n,e),(n=n.alternate)&&np(n,e)}function Ax(){return null}var l0=typeof reportError=="function"?reportError:function(n){console.error(n)};function bf(n){this._internalRoot=n}su.prototype.render=bf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));ru(n,e,null,null)};su.prototype.unmount=bf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Dr(function(){ru(null,n,null,null)}),e[Ti]=null}};function su(n){this._internalRoot=n}su.prototype.unstable_scheduleHydration=function(n){if(n){var e=kg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<zi.length&&e!==0&&e<zi[t].priority;t++);zi.splice(t,0,n),t===0&&zg(n)}};function Cf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ip(){}function Rx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vl(o);s.call(u)}}var o=a0(e,i,n,0,null,!1,!1,"",ip);return n._reactRootContainer=o,n[Ti]=o.current,Go(n.nodeType===8?n.parentNode:n),Dr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vl(l);a.call(u)}}var l=Af(n,0,!1,null,null,!1,!1,"",ip);return n._reactRootContainer=l,n[Ti]=l.current,Go(n.nodeType===8?n.parentNode:n),Dr(function(){ru(e,l,t,i)}),l}function au(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vl(o);a.call(l)}}ru(e,o,n,r)}else o=Rx(t,e,n,r,i);return Vl(o)}Og=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=xo(e.pendingLanes);t!==0&&(Yd(e,t|1),an(e,pt()),!(Xe&6)&&(ks=pt()+500,sr()))}break;case 13:Dr(function(){var i=wi(n,1);if(i!==null){var r=$t();Vn(i,n,1,r)}}),Rf(n,1)}};Kd=function(n){if(n.tag===13){var e=wi(n,134217728);if(e!==null){var t=$t();Vn(e,n,134217728,t)}Rf(n,134217728)}};Fg=function(n){if(n.tag===13){var e=Zi(n),t=wi(n,e);if(t!==null){var i=$t();Vn(t,n,e,i)}Rf(n,e)}};kg=function(){return $e};Bg=function(n,e){var t=$e;try{return $e=n,e()}finally{$e=t}};Bc=function(n,e,t){switch(e){case"input":if(Ic(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zl(i);if(!r)throw Error(te(90));gg(i),Ic(i,r)}}}break;case"textarea":vg(n,t);break;case"select":e=t.value,e!=null&&Ms(n,!!t.multiple,e,!1)}};wg=Mf;Ag=Dr;var bx={usingClientEntryPoint:!1,Events:[oa,ps,Zl,Eg,Tg,Mf]},ao={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cx={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cg(n),n===null?null:n.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Yl=Pa.inject(Cx),Zn=Pa}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx;gn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(te(200));return wx(n,e,null,t)};gn.createRoot=function(n,e){if(!Cf(n))throw Error(te(299));var t=!1,i="",r=l0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Af(n,1,!1,null,null,t,!1,i,r),n[Ti]=e.current,Go(n.nodeType===8?n.parentNode:n),new bf(e)};gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=Cg(e),n=n===null?null:n.stateNode,n};gn.flushSync=function(n){return Dr(n)};gn.hydrate=function(n,e,t){if(!ou(e))throw Error(te(200));return au(null,n,e,!0,t)};gn.hydrateRoot=function(n,e,t){if(!Cf(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=l0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=a0(e,null,n,1,t??null,r,!1,s,o),n[Ti]=e.current,Go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new su(e)};gn.render=function(n,e,t){if(!ou(e))throw Error(te(200));return au(null,n,e,!1,t)};gn.unmountComponentAtNode=function(n){if(!ou(n))throw Error(te(40));return n._reactRootContainer?(Dr(function(){au(null,null,n,!1,function(){n._reactRootContainer=null,n[Ti]=null})}),!0):!1};gn.unstable_batchedUpdates=Mf;gn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ou(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return au(n,e,t,!1,i)};gn.version="18.2.0-next-9e3b772b8-20220608";function u0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0)}catch(n){console.error(n)}}u0(),ag.exports=gn;var Lx=ag.exports,rp=Lx;wc.createRoot=rp.createRoot,wc.hydrateRoot=rp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="153",Vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Px=0,sp=1,Ix=2,c0=1,Dx=2,di=3,Ri=0,Zt=1,Bn=2,Ji=0,bs=1,vd=2,op=3,ap=4,Nx=5,ls=100,Ux=101,Ox=102,lp=103,up=104,Fx=200,kx=201,Bx=202,zx=203,d0=204,f0=205,Hx=206,Vx=207,Gx=208,Wx=209,Xx=210,jx=0,Yx=1,Kx=2,yd=3,qx=4,$x=5,Zx=6,Qx=7,h0=0,Jx=1,eS=2,Mi=0,tS=1,nS=2,iS=3,rS=4,sS=5,p0=300,Bs=301,zs=302,xd=303,Sd=304,lu=306,Hs=1e3,Mn=1001,Gl=1002,Lt=1003,Md=1004,ml=1005,nn=1006,m0=1007,Nr=1008,er=1009,oS=1010,aS=1011,Pf=1012,g0=1013,Wi=1014,_i=1015,Qo=1016,_0=1017,v0=1018,wr=1020,lS=1021,En=1023,uS=1024,cS=1025,Ar=1026,Vs=1027,dS=1028,y0=1029,fS=1030,x0=1031,S0=1033,Hu=33776,Vu=33777,Gu=33778,Wu=33779,cp=35840,dp=35841,fp=35842,hp=35843,hS=36196,pp=37492,mp=37496,gp=37808,_p=37809,vp=37810,yp=37811,xp=37812,Sp=37813,Mp=37814,Ep=37815,Tp=37816,wp=37817,Ap=37818,Rp=37819,bp=37820,Cp=37821,Xu=36492,pS=36283,Lp=36284,Pp=36285,Ip=36286,Jo=2300,Gs=2301,ju=2302,Dp=2400,Np=2401,Up=2402,mS=2500,gS=0,M0=1,Ed=2,E0=3e3,Rr=3001,_S=3200,vS=3201,T0=0,yS=1,br="",be="srgb",ei="srgb-linear",w0="display-p3",Yu=7680,xS=519,SS=512,MS=513,ES=514,TS=515,wS=516,AS=517,RS=518,bS=519,Td=35044,Op="300 es",wd=1035,vi=2e3,Wl=2001;class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fp=1234567;const Io=Math.PI/180,Ws=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function If(n,e){return(n%e+e)%e}function CS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function LS(n,e,t){return n!==e?(t-n)/(e-n):0}function Do(n,e,t){return(1-t)*n+t*e}function PS(n,e,t,i){return Do(n,e,1-Math.exp(-t*i))}function IS(n,e=1){return e-Math.abs(If(n,e*2)-e)}function DS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function NS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function US(n,e){return n+Math.floor(Math.random()*(e-n+1))}function OS(n,e){return n+Math.random()*(e-n)}function FS(n){return n*(.5-Math.random())}function kS(n){n!==void 0&&(Fp=n);let e=Fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BS(n){return n*Io}function zS(n){return n*Ws}function Ad(n){return(n&n-1)===0&&n!==0}function A0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function HS(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),y=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*y,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*y,a*u);break;case"ZYZ":n.set(l*y,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const R0={DEG2RAD:Io,RAD2DEG:Ws,generateUUID:Gn,clamp:Dt,euclideanModulo:If,mapLinear:CS,inverseLerp:LS,lerp:Do,damp:PS,pingpong:IS,smoothstep:DS,smootherstep:NS,randInt:US,randFloat:OS,randFloatSpread:FS,seededRandom:kS,degToRad:BS,radToDeg:zS,isPowerOfTwo:Ad,ceilPowerOfTwo:A0,floorPowerOfTwo:Xl,setQuaternionFromProperEuler:HS,normalize:Qe,denormalize:yi};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],y=i[8],v=r[0],m=r[3],d=r[6],_=r[1],g=r[4],x=r[7],S=r[2],w=r[5],b=r[8];return s[0]=o*v+a*_+l*S,s[3]=o*m+a*g+l*w,s[6]=o*d+a*x+l*b,s[1]=u*v+c*_+f*S,s[4]=u*m+c*g+f*w,s[7]=u*d+c*x+f*b,s[2]=h*v+p*_+y*S,s[5]=h*m+p*g+y*w,s[8]=h*d+p*x+y*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,y=t*f+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new Fe;function b0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const kp={};function No(n){n in kp||(kp[n]=!0,console.warn(n))}function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const VS=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),GS=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function WS(n){return n.convertSRGBToLinear().applyMatrix3(GS)}function XS(n){return n.applyMatrix3(VS).convertLinearToSRGB()}const jS={[ei]:n=>n,[be]:n=>n.convertSRGBToLinear(),[w0]:WS},YS={[ei]:n=>n,[be]:n=>n.convertLinearToSRGB(),[w0]:XS},Pn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return ei},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=jS[e],r=YS[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Wr;class C0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wr===void 0&&(Wr=ea("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cs(t[i]/255)*255):t[i]=Cs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class L0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($u(r[o].image)):s.push($u(r[o]))}else s=$u(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $u(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qS=0;class Ut extends zr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Mn,r=Mn,s=nn,o=Nr,a=En,l=er,u=Ut.DEFAULT_ANISOTROPY,c=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Gn(),this.name="",this.source=new L0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(No("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Rr?be:br),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return No("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?Rr:E0}set encoding(e){No("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rr?be:br}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=p0;Ut.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],y=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,x=(p+1)/2,S=(d+1)/2,w=(c+h)/4,b=(f+v)/4,L=(y+m)/4;return g>x&&g>S?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=b/i):x>S?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=L/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=b/s,r=L/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-y)*(m-y)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-y)/_,this.y=(f-v)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ur extends zr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(No("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rr?be:br),this.texture=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:nn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new L0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class P0 extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $S extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==h||u!==p||c!==y){let m=1-a;const d=l*h+u*p+c*y+f*v,_=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const S=Math.sqrt(g),w=Math.atan2(S,d*_);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const x=a*_;if(l=l*m+h*x,u=u*m+p*x,c=c*m+y*x,f=f*m+v*x,m===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+c*f+l*p-u*h,e[t+1]=l*y+c*h+u*f-a*p,e[t+2]=u*y+c*p+a*h-l*f,e[t+3]=c*y-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*y,this._y=u*p*f-h*c*y,this._z=u*c*y+h*p*f,this._w=u*c*f-h*p*y;break;case"YXZ":this._x=h*c*f+u*p*y,this._y=u*p*f-h*c*y,this._z=u*c*y-h*p*f,this._w=u*c*f+h*p*y;break;case"ZXY":this._x=h*c*f-u*p*y,this._y=u*p*f+h*c*y,this._z=u*c*y+h*p*f,this._w=u*c*f-h*p*y;break;case"ZYX":this._x=h*c*f-u*p*y,this._y=u*p*f+h*c*y,this._z=u*c*y-h*p*f,this._w=u*c*f+h*p*y;break;case"YZX":this._x=h*c*f+u*p*y,this._y=u*p*f+h*c*y,this._z=u*c*y-h*p*f,this._w=u*c*f-h*p*y;break;case"XZY":this._x=h*c*f-u*p*y,this._y=u*p*f-h*c*y,this._z=u*c*y+h*p*f,this._w=u*c*f+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-f*-o,this.y=c*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new I,Bp=new mn;class Ci{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)si.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(si)}else r.boundingBox===null&&r.computeBoundingBox(),Xr.copy(r.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ia.subVectors(this.max,lo),jr.subVectors(e.a,lo),Yr.subVectors(e.b,lo),Kr.subVectors(e.c,lo),Pi.subVectors(Yr,jr),Ii.subVectors(Kr,Yr),cr.subVectors(jr,Kr);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-cr.z,cr.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,cr.z,0,-cr.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-cr.y,cr.x,0];return!Qu(t,jr,Yr,Kr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Qu(t,jr,Yr,Kr,Ia))?!1:(Da.crossVectors(Pi,Ii),t=[Da.x,Da.y,Da.z],Qu(t,jr,Yr,Kr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new I,new I,new I,new I,new I,new I,new I,new I],si=new I,Xr=new Ci,jr=new I,Yr=new I,Kr=new I,Pi=new I,Ii=new I,cr=new I,lo=new I,Ia=new I,Da=new I,dr=new I;function Qu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){dr.fromArray(n,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),u=t.dot(dr),c=i.dot(dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ZS=new Ci,uo=new I,Ju=new I;class ti{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ZS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(Ju)),this.expandByPoint(uo.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new I,ec=new I,Na=new I,Di=new I,tc=new I,Ua=new I,nc=new I;class la{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ec.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Na),a=Di.dot(this.direction),l=-Di.dot(Na),u=Di.lengthSq(),c=Math.abs(1-o*o);let f,h,p,y;if(c>0)if(f=o*l-a,h=o*a-l,y=s*c,f>=0)if(h>=-y)if(h<=y){const v=1/c;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ec).addScaledVector(Na,h),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,r,s){tc.subVectors(t,e),Ua.subVectors(i,e),nc.crossVectors(tc,Ua);let o=this.direction.dot(nc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(Ua.crossVectors(Di,Ua));if(l<0)return null;const u=a*this.direction.dot(tc.cross(Di));if(u<0||l+u>o)return null;const c=-a*Di.dot(nc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,y,v,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,y,v,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,y,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=y,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,y=a*c,v=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+y*u,t[5]=h-v*u,t[9]=-a*l,t[2]=v-h*u,t[6]=y+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,y=u*c,v=u*f;t[0]=h+v*a,t[4]=y*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-y,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,y=u*c,v=u*f;t[0]=h-v*a,t[4]=-o*f,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*c,t[9]=v-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,y=a*c,v=a*f;t[0]=l*c,t[4]=y*u-p,t[8]=h*u+v,t[1]=l*f,t[5]=v*u+h,t[9]=p*u-y,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,y=a*l,v=a*u;t[0]=l*c,t[4]=v-h*f,t[8]=y*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+y,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*u,y=a*l,v=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+v,t[5]=o*c,t[9]=p*f-y,t[2]=y*f-p,t[6]=a*c,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ni.crossVectors(i,un),Ni.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ni.crossVectors(i,un)),Ni.normalize(),Oa.crossVectors(un,Ni),r[0]=Ni.x,r[4]=Oa.x,r[8]=un.x,r[1]=Ni.y,r[5]=Oa.y,r[9]=un.y,r[2]=Ni.z,r[6]=Oa.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],y=i[2],v=i[6],m=i[10],d=i[14],_=i[3],g=i[7],x=i[11],S=i[15],w=r[0],b=r[4],L=r[8],M=r[12],A=r[1],X=r[5],$=r[9],N=r[13],B=r[2],V=r[6],Q=r[10],Y=r[14],D=r[3],W=r[7],z=r[11],se=r[15];return s[0]=o*w+a*A+l*B+u*D,s[4]=o*b+a*X+l*V+u*W,s[8]=o*L+a*$+l*Q+u*z,s[12]=o*M+a*N+l*Y+u*se,s[1]=c*w+f*A+h*B+p*D,s[5]=c*b+f*X+h*V+p*W,s[9]=c*L+f*$+h*Q+p*z,s[13]=c*M+f*N+h*Y+p*se,s[2]=y*w+v*A+m*B+d*D,s[6]=y*b+v*X+m*V+d*W,s[10]=y*L+v*$+m*Q+d*z,s[14]=y*M+v*N+m*Y+d*se,s[3]=_*w+g*A+x*B+S*D,s[7]=_*b+g*X+x*V+S*W,s[11]=_*L+g*$+x*Q+S*z,s[15]=_*M+g*N+x*Y+S*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],y=e[3],v=e[7],m=e[11],d=e[15];return y*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+v*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],y=e[12],v=e[13],m=e[14],d=e[15],_=f*m*u-v*h*u+v*l*p-a*m*p-f*l*d+a*h*d,g=y*h*u-c*m*u-y*l*p+o*m*p+c*l*d-o*h*d,x=c*v*u-y*f*u+y*a*p-o*v*p-c*a*d+o*f*d,S=y*f*l-c*v*l-y*a*h+o*v*h+c*a*m-o*f*m,w=t*_+i*g+r*x+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=_*b,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*b,e[2]=(a*m*s-v*l*s+v*r*u-i*m*u-a*r*d+i*l*d)*b,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*b,e[4]=g*b,e[5]=(c*m*s-y*h*s+y*r*p-t*m*p-c*r*d+t*h*d)*b,e[6]=(y*l*s-o*m*s-y*r*u+t*m*u+o*r*d-t*l*d)*b,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*b,e[8]=x*b,e[9]=(y*f*s-c*v*s-y*i*p+t*v*p+c*i*d-t*f*d)*b,e[10]=(o*v*s-y*a*s+y*i*u-t*v*u-o*i*d+t*a*d)*b,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*b,e[12]=S*b,e[13]=(c*v*r-y*f*r+y*i*h-t*v*h-c*i*m+t*f*m)*b,e[14]=(y*a*r-o*v*r-y*i*l+t*v*l+o*i*m-t*a*m)*b,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,y=s*f,v=o*c,m=o*f,d=a*f,_=l*u,g=l*c,x=l*f,S=i.x,w=i.y,b=i.z;return r[0]=(1-(v+d))*S,r[1]=(p+x)*S,r[2]=(y-g)*S,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(h+d))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(y+g)*b,r[9]=(m-_)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const u=1/s,c=1/o,f=1/a;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=c,In.elements[5]*=c,In.elements[6]*=c,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,y;if(a===vi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Wl)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let y,v;if(a===vi)y=(o+s)*f,v=-2*f;else if(a===Wl)y=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qr=new I,In=new ke,QS=new I(0,0,0),JS=new I(1,1,1),Ni=new I,Oa=new I,un=new I,zp=new ke,Hp=new mn;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const Vp=new I,$r=new mn,ai=new ke,Fa=new I,co=new I,tM=new I,nM=new mn,Gp=new I(1,0,0),Wp=new I(0,1,0),Xp=new I(0,0,1),iM={type:"added"},jp={type:"removed"};class at extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new I,t=new pi,i=new mn,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Fe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,t){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(co,Fa,this.up):ai.lookAt(Fa,co,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(ai),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(iM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}at.DEFAULT_UP=new I(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new I,li=new I,ic=new I,ui=new I,Zr=new I,Qr=new I,Yp=new I,rc=new I,sc=new I,oc=new I;let ka=!1;class kn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Dn.subVectors(e,t),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Dn.subVectors(r,t),li.subVectors(i,t),ic.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(li),l=Dn.dot(ic),u=li.dot(li),c=li.dot(ic),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(u*l-a*c)*h,y=(o*c-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,i,r,s,o,a,l){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ui),l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l}static isFrontFacing(e,t,i,r){return Dn.subVectors(i,t),li.subVectors(e,t),Dn.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Dn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,i),Qr.subVectors(s,i),rc.subVectors(e,i);const l=Zr.dot(rc),u=Qr.dot(rc);if(l<=0&&u<=0)return t.copy(i);sc.subVectors(e,r);const c=Zr.dot(sc),f=Qr.dot(sc);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Zr,o);oc.subVectors(e,s);const p=Zr.dot(oc),y=Qr.dot(oc);if(y>=0&&p<=y)return t.copy(s);const v=p*u-l*y;if(v<=0&&u>=0&&y<=0)return a=u/(u-y),t.copy(i).addScaledVector(Qr,a);const m=c*y-p*f;if(m<=0&&f-c>=0&&p-y>=0)return Yp.subVectors(s,r),a=(f-c)/(f-c+(p-y)),t.copy(r).addScaledVector(Yp,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(Zr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let rM=0;class Jn extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=bs,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=d0,this.blendDst=f0,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yu,this.stencilZFail=Yu,this.stencilZPass=Yu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function ac(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Pn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Pn.workingColorSpace){if(e=If(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ac(o,s,e+1/3),this.g=ac(o,s,e),this.b=ac(o,s,e-1/3)}return Pn.toWorkingColorSpace(this,r),this}setStyle(e,t=be){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=be){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=qu(e.r),this.g=qu(e.g),this.b=qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=be){return Pn.fromWorkingColorSpace(zt.copy(this),e),Math.round(Dt(zt.r*255,0,255))*65536+Math.round(Dt(zt.g*255,0,255))*256+Math.round(Dt(zt.b*255,0,255))}getHexString(e=be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pn.workingColorSpace){Pn.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Pn.workingColorSpace){return Pn.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=be){Pn.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==be?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),Nn.h+=e,Nn.s+=t,Nn.l+=i,this.setHSL(Nn.h,Nn.s,Nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Ba);const i=Do(Nn.h,Ba.h,t),r=Do(Nn.s,Ba.s,t),s=Do(Nn.l,Ba.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ae;Ae.NAMES=I0;class zn extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new I,za=new Ee;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Td,this.updateRange={offset:0,count:-1},this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Td&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class D0 extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class N0 extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sM=0;const vn=new ke,lc=new at,Jr=new I,cn=new Ci,fo=new Ci,bt=new I;class bn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?N0:D0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(cn.min,fo.min),cn.expandByPoint(bt),bt.addVectors(cn.max,fo.max),cn.expandByPoint(bt)):(cn.expandByPoint(fo.min),cn.expandByPoint(fo.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),bt.add(Jr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new I,c[A]=new I;const f=new I,h=new I,p=new I,y=new Ee,v=new Ee,m=new Ee,d=new I,_=new I;function g(A,X,$){f.fromArray(r,A*3),h.fromArray(r,X*3),p.fromArray(r,$*3),y.fromArray(o,A*2),v.fromArray(o,X*2),m.fromArray(o,$*2),h.sub(f),p.sub(f),v.sub(y),m.sub(y);const N=1/(v.x*m.y-m.x*v.y);isFinite(N)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(N),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(N),u[A].add(d),u[X].add(d),u[$].add(d),c[A].add(_),c[X].add(_),c[$].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,X=x.length;A<X;++A){const $=x[A],N=$.start,B=$.count;for(let V=N,Q=N+B;V<Q;V+=3)g(i[V+0],i[V+1],i[V+2])}const S=new I,w=new I,b=new I,L=new I;function M(A){b.fromArray(s,A*3),L.copy(b);const X=u[A];S.copy(X),S.sub(b.multiplyScalar(b.dot(X))).normalize(),w.crossVectors(L,X);const N=w.dot(c[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=N}for(let A=0,X=x.length;A<X;++A){const $=x[A],N=$.start,B=$.count;for(let V=N,Q=N+B;V<Q;V+=3)M(i[V+0]),M(i[V+1]),M(i[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let d=0;d<c;d++)h[y++]=u[p++]}return new Qt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new ke,fr=new la,Ha=new ti,qp=new I,es=new I,ts=new I,ns=new I,uc=new I,Va=new I,Ga=new Ee,Wa=new Ee,Xa=new Ee,$p=new I,Zp=new I,Qp=new I,ja=new I,Ya=new I;class Vt extends at{constructor(e=new bn,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Va.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(uc.fromBufferAttribute(f,e),o?Va.addScaledVector(uc,c):Va.addScaledVector(uc.sub(t),c))}t.add(Va)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Ha.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Ha,qp)===null||fr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Kp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Kp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const m=h[y],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,S=g;x<S;x+=3){const w=a.getX(x),b=a.getX(x+1),L=a.getX(x+2);r=Ka(this,d,e,i,u,c,f,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=y,d=v;m<d;m+=3){const _=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Ka(this,o,e,i,u,c,f,_,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const m=h[y],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,S=g;x<S;x+=3){const w=x,b=x+1,L=x+2;r=Ka(this,d,e,i,u,c,f,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,d=v;m<d;m+=3){const _=m,g=m+1,x=m+2;r=Ka(this,o,e,i,u,c,f,_,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function oM(n,e,t,i,r,s,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ri,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ya);return u<t.near||u>t.far?null:{distance:u,point:Ya.clone(),object:n}}function Ka(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,es),n.getVertexPosition(l,ts),n.getVertexPosition(u,ns);const c=oM(n,e,t,i,es,ts,ns,ja);if(c){r&&(Ga.fromBufferAttribute(r,a),Wa.fromBufferAttribute(r,l),Xa.fromBufferAttribute(r,u),c.uv=kn.getInterpolation(ja,es,ts,ns,Ga,Wa,Xa,new Ee)),s&&(Ga.fromBufferAttribute(s,a),Wa.fromBufferAttribute(s,l),Xa.fromBufferAttribute(s,u),c.uv1=kn.getInterpolation(ja,es,ts,ns,Ga,Wa,Xa,new Ee),c.uv2=c.uv1),o&&($p.fromBufferAttribute(o,a),Zp.fromBufferAttribute(o,l),Qp.fromBufferAttribute(o,u),c.normal=kn.getInterpolation(ja,es,ts,ns,$p,Zp,Qp,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new I,materialIndex:0};kn.getNormal(es,ts,ns,f.normal),c.face=f}return c}class ua extends bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(u,3)),this.setAttribute("normal",new Wn(c,3)),this.setAttribute("uv",new Wn(f,2));function y(v,m,d,_,g,x,S,w,b,L,M){const A=x/b,X=S/L,$=x/2,N=S/2,B=w/2,V=b+1,Q=L+1;let Y=0,D=0;const W=new I;for(let z=0;z<Q;z++){const se=z*X-N;for(let U=0;U<V;U++){const ee=U*A-$;W[v]=ee*_,W[m]=se*g,W[d]=B,u.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[d]=w>0?1:-1,c.push(W.x,W.y,W.z),f.push(U/b),f.push(1-z/L),Y+=1}}for(let z=0;z<L;z++)for(let se=0;se<b;se++){const U=h+se+V*z,ee=h+se+V*(z+1),J=h+(se+1)+V*(z+1),de=h+(se+1)+V*z;l.push(U,ee,de),l.push(ee,J,de),D+=6}a.addGroup(p,D,M),p+=D,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Xs(n[t]);for(const r in i)e[r]=i[r]}return e}function aM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function U0(n){return n.getRenderTarget()===null?n.outputColorSpace:ei}const lM={clone:Xs,merge:Yt};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class O0 extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends O0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,rs=1;class dM extends at{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new qt(is,rs,e,t);r.layers=this.layers,this.add(r);const s=new qt(is,rs,e,t);s.layers=this.layers,this.add(s);const o=new qt(is,rs,e,t);o.layers=this.layers,this.add(o);const a=new qt(is,rs,e,t);a.layers=this.layers,this.add(a);const l=new qt(is,rs,e,t);l.layers=this.layers,this.add(l);const u=new qt(is,rs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Mi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class F0 extends Ut{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(No("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Rr?be:br),this.texture=new F0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ua(5,5,5),s=new Or({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Ji});s.uniforms.tEquirect.value=t;const o=new Vt(r,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=nn),new dM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const cc=new I,hM=new I,pM=new Fe;class _r{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cc.subVectors(i,t).cross(hM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pM.getNormalMatrix(e),r=this.coplanarPoint(cc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new ti,qa=new I;class Nf{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],y=r[9],v=r[10],m=r[11],d=r[12],_=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-d).normalize(),i[1].setComponents(l+s,h+u,m+p,x+d).normalize(),i[2].setComponents(l+o,h+c,m+y,x+_).normalize(),i[3].setComponents(l-o,h-c,m-y,x-_).normalize(),i[4].setComponents(l-a,h-f,m-v,x-g).normalize(),t===vi)i[5].setComponents(l+a,h+f,m+v,x+g).normalize();else if(t===Wl)i[5].setComponents(a,f,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function k0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,f,h),u.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const h=c.array,p=c.updateRange;n.bindBuffer(f,u),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Ls extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],y=[],v=[],m=[];for(let d=0;d<c;d++){const _=d*h-o;for(let g=0;g<u;g++){const x=g*f-s;y.push(x,-_,0),v.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const g=_+u*d,x=_+u*(d+1),S=_+1+u*(d+1),w=_+1+u*d;p.push(g,x,w),p.push(x,S,w)}this.setIndex(p),this.setAttribute("position",new Wn(y,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM="vec3 transformed = vec3( position );",EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,UM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,dE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,xE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ME=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,RE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,LE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aT=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uT=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_T=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ET=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,GT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:gM,alphamap_pars_fragment:_M,alphatest_fragment:vM,alphatest_pars_fragment:yM,aomap_fragment:xM,aomap_pars_fragment:SM,begin_vertex:MM,beginnormal_vertex:EM,bsdfs:TM,iridescence_fragment:wM,bumpmap_pars_fragment:AM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:LM,color_fragment:PM,color_pars_fragment:IM,color_pars_vertex:DM,color_vertex:NM,common:UM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:FM,displacementmap_pars_vertex:kM,displacementmap_vertex:BM,emissivemap_fragment:zM,emissivemap_pars_fragment:HM,encodings_fragment:VM,encodings_pars_fragment:GM,envmap_fragment:WM,envmap_common_pars_fragment:XM,envmap_pars_fragment:jM,envmap_pars_vertex:YM,envmap_physical_pars_fragment:sE,envmap_vertex:KM,fog_vertex:qM,fog_pars_vertex:$M,fog_fragment:ZM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_fragment:eE,lightmap_pars_fragment:tE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:rE,lights_toon_fragment:oE,lights_toon_pars_fragment:aE,lights_phong_fragment:lE,lights_phong_pars_fragment:uE,lights_physical_fragment:cE,lights_physical_pars_fragment:dE,lights_fragment_begin:fE,lights_fragment_maps:hE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:vE,map_fragment:yE,map_pars_fragment:xE,map_particle_fragment:SE,map_particle_pars_fragment:ME,metalnessmap_fragment:EE,metalnessmap_pars_fragment:TE,morphcolor_vertex:wE,morphnormal_vertex:AE,morphtarget_pars_vertex:RE,morphtarget_vertex:bE,normal_fragment_begin:CE,normal_fragment_maps:LE,normal_pars_fragment:PE,normal_pars_vertex:IE,normal_vertex:DE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:kE,output_fragment:BE,packing:zE,premultiplied_alpha_fragment:HE,project_vertex:VE,dithering_fragment:GE,dithering_pars_fragment:WE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:jE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:KE,shadowmap_vertex:qE,shadowmask_pars_fragment:$E,skinbase_vertex:ZE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:eT,specularmap_fragment:tT,specularmap_pars_fragment:nT,tonemapping_fragment:iT,tonemapping_pars_fragment:rT,transmission_fragment:sT,transmission_pars_fragment:oT,uv_pars_fragment:aT,uv_pars_vertex:lT,uv_vertex:uT,worldpos_vertex:cT,background_vert:dT,background_frag:fT,backgroundCube_vert:hT,backgroundCube_frag:pT,cube_vert:mT,cube_frag:gT,depth_vert:_T,depth_frag:vT,distanceRGBA_vert:yT,distanceRGBA_frag:xT,equirect_vert:ST,equirect_frag:MT,linedashed_vert:ET,linedashed_frag:TT,meshbasic_vert:wT,meshbasic_frag:AT,meshlambert_vert:RT,meshlambert_frag:bT,meshmatcap_vert:CT,meshmatcap_frag:LT,meshnormal_vert:PT,meshnormal_frag:IT,meshphong_vert:DT,meshphong_frag:NT,meshphysical_vert:UT,meshphysical_frag:OT,meshtoon_vert:FT,meshtoon_frag:kT,points_vert:BT,points_frag:zT,shadow_vert:HT,shadow_frag:VT,sprite_vert:GT,sprite_frag:WT},ae={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},qn={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};qn.physical={uniforms:Yt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const $a={r:0,b:0,g:0};function XT(n,e,t,i,r,s,o){const a=new Ae(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function y(m,d){let _=!1,g=d.isScene===!0?d.background:null;switch(g&&g.isTexture&&(g=(d.backgroundBlurriness>0?t:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0),n.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===lu)?(c===void 0&&(c=new Vt(new ua(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:Xs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=g.colorSpace!==be,(f!==g||h!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Vt(new Ls(2,2),new Or({name:"BackgroundMaterial",uniforms:Xs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=g.colorSpace!==be,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,d){m.getRGB($a,U0(n)),i.buffers.color.setClear($a.r,$a.g,$a.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:y}}function jT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(B,V,Q,Y,D){let W=!1;if(o){const z=v(Y,Q,V);u!==z&&(u=z,p(u.object)),W=d(B,Y,Q,D),W&&_(B,Y,Q,D)}else{const z=V.wireframe===!0;(u.geometry!==Y.id||u.program!==Q.id||u.wireframe!==z)&&(u.geometry=Y.id,u.program=Q.id,u.wireframe=z,W=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(W||c)&&(c=!1,L(B,V,Q,Y),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(B){return i.isWebGL2?n.bindVertexArray(B):s.bindVertexArrayOES(B)}function y(B){return i.isWebGL2?n.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function v(B,V,Q){const Y=Q.wireframe===!0;let D=a[B.id];D===void 0&&(D={},a[B.id]=D);let W=D[V.id];W===void 0&&(W={},D[V.id]=W);let z=W[Y];return z===void 0&&(z=m(h()),W[Y]=z),z}function m(B){const V=[],Q=[],Y=[];for(let D=0;D<r;D++)V[D]=0,Q[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:Y,object:B,attributes:{},index:null}}function d(B,V,Q,Y){const D=u.attributes,W=V.attributes;let z=0;const se=Q.getAttributes();for(const U in se)if(se[U].location>=0){const J=D[U];let de=W[U];if(de===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;z++}return u.attributesNum!==z||u.index!==Y}function _(B,V,Q,Y){const D={},W=V.attributes;let z=0;const se=Q.getAttributes();for(const U in se)if(se[U].location>=0){let J=W[U];J===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(J=B.instanceColor));const de={};de.attribute=J,J&&J.data&&(de.data=J.data),D[U]=de,z++}u.attributes=D,u.attributesNum=z,u.index=Y}function g(){const B=u.newAttributes;for(let V=0,Q=B.length;V<Q;V++)B[V]=0}function x(B){S(B,0)}function S(B,V){const Q=u.newAttributes,Y=u.enabledAttributes,D=u.attributeDivisors;Q[B]=1,Y[B]===0&&(n.enableVertexAttribArray(B),Y[B]=1),D[B]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,V),D[B]=V)}function w(){const B=u.newAttributes,V=u.enabledAttributes;for(let Q=0,Y=V.length;Q<Y;Q++)V[Q]!==B[Q]&&(n.disableVertexAttribArray(Q),V[Q]=0)}function b(B,V,Q,Y,D,W,z){z===!0?n.vertexAttribIPointer(B,V,Q,D,W):n.vertexAttribPointer(B,V,Q,Y,D,W)}function L(B,V,Q,Y){if(i.isWebGL2===!1&&(B.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=Y.attributes,W=Q.getAttributes(),z=V.defaultAttributeValues;for(const se in W){const U=W[se];if(U.location>=0){let ee=D[se];if(ee===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ee!==void 0){const J=ee.normalized,de=ee.itemSize,ue=t.get(ee);if(ue===void 0)continue;const ve=ue.buffer,Ne=ue.type,Te=ue.bytesPerElement,ft=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||ee.gpuType===g0);if(ee.isInterleavedBufferAttribute){const Be=ee.data,F=Be.stride,xt=ee.offset;if(Be.isInstancedInterleavedBuffer){for(let xe=0;xe<U.locationSize;xe++)S(U.location+xe,Be.meshPerAttribute);B.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let xe=0;xe<U.locationSize;xe++)x(U.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let xe=0;xe<U.locationSize;xe++)b(U.location+xe,de/U.locationSize,Ne,J,F*Te,(xt+de/U.locationSize*xe)*Te,ft)}else{if(ee.isInstancedBufferAttribute){for(let Be=0;Be<U.locationSize;Be++)S(U.location+Be,ee.meshPerAttribute);B.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Be=0;Be<U.locationSize;Be++)x(U.location+Be);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Be=0;Be<U.locationSize;Be++)b(U.location+Be,de/U.locationSize,Ne,J,de*Te,de/U.locationSize*Be*Te,ft)}}else if(z!==void 0){const J=z[se];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(U.location,J);break;case 3:n.vertexAttrib3fv(U.location,J);break;case 4:n.vertexAttrib4fv(U.location,J);break;default:n.vertexAttrib1fv(U.location,J)}}}}w()}function M(){$();for(const B in a){const V=a[B];for(const Q in V){const Y=V[Q];for(const D in Y)y(Y[D].object),delete Y[D];delete V[Q]}delete a[B]}}function A(B){if(a[B.id]===void 0)return;const V=a[B.id];for(const Q in V){const Y=V[Q];for(const D in Y)y(Y[D].object),delete Y[D];delete V[Q]}delete a[B.id]}function X(B){for(const V in a){const Q=a[V];if(Q[B.id]===void 0)continue;const Y=Q[B.id];for(const D in Y)y(Y[D].object),delete Y[D];delete Q[B.id]}}function $(){N(),c=!0,u!==l&&(u=l,p(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:X,initAttributes:g,enableAttribute:x,disableUnusedAttributes:w}}function YT(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function KT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),S=g&&x,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:w}}function qT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _r,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const y=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||y===null||y.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,g=_*4;let x=d.clippingState||null;l.value=x,x=c(y,h,g,p);for(let S=0;S!==g;++S)x[S]=t[S];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,y){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const d=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,x=p;g!==v;++g,x+=4)o.copy(f[g]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $T(n){let e=new WeakMap;function t(o,a){return a===xd?o.mapping=Bs:a===Sd&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xd||a===Sd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new fM(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uf extends O0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ss=4,Jp=[.125,.215,.35,.446,.526,.582],yr=20,dc=new Uf,em=new Ae;let fc=null;const vr=(1+Math.sqrt(5))/2,ss=1/vr,tm=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,vr,ss),new I(0,vr,-ss),new I(ss,0,vr),new I(-ss,0,vr),new I(vr,ss,0),new I(-vr,ss,0)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){fc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Qo,format:En,colorSpace:ei,depthBuffer:!1},r=im(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZT(s)),this._blurMaterial=QT(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,i,r){const a=new qt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(em),c.toneMapping=Mi,c.autoClear=!1;const p=new zn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),y=new Vt(new ua,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(em),v=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const g=this._cubeSize;Za(r,_*g,d>2?g:0,g,g),c.setRenderTarget(r),v&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bs||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Za(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,dc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tm[(r-1)%tm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Vt(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),v=s/y,m=isFinite(s)?1+Math.floor(c*v):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const d=[];let _=0;for(let b=0;b<yr;++b){const L=b/v,M=Math.exp(-L*L/2);d.push(M),b===0?_+=M:b<m&&(_+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-i;const x=this._sizeLods[r],S=3*x*(r>g-Ss?r-g+Ss:0),w=4*(this._cubeSize-x);Za(t,S,w,3*x,2*x),l.setRenderTarget(t),l.render(f,dc)}}function ZT(n){const e=[],t=[],i=[];let r=n;const s=n-Ss+1+Jp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ss?l=Jp[o-n+Ss-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,y=6,v=3,m=2,d=1,_=new Float32Array(v*y*p),g=new Float32Array(m*y*p),x=new Float32Array(d*y*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,L=w>2?0:-1,M=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];_.set(M,v*y*w),g.set(h,m*y*w);const A=[w,w,w,w,w,w];x.set(A,d*y*w)}const S=new bn;S.setAttribute("position",new Qt(_,v)),S.setAttribute("uv",new Qt(g,m)),S.setAttribute("faceIndex",new Qt(x,d)),e.push(S),r>Ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function im(n,e,t){const i=new Ur(n,e,t);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function QT(n,e,t){const i=new Float32Array(yr),r=new I(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function rm(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function sm(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===xd||l===Sd,c=l===Bs||l===zs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new nm(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new nm(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ew(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tw(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const v=h.morphAttributes[y];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const y in h)e.update(h[y],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const y in p){const v=p[y];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,y=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let g=0,x=_.length;g<x;g+=3){const S=_[g+0],w=_[g+1],b=_[g+2];h.push(S,w,w,b,b,S)}}else{const _=y.array;v=y.version;for(let g=0,x=_.length/3-1;g<x;g+=3){const S=g+0,w=g+1,b=g+2;h.push(S,w,w,b,b,S)}}const m=new(b0(h)?N0:D0)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function nw(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,y){if(y===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,y),t.update(p,s,y)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function iw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rw(n,e){return n[0]-e[0]}function sw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ow(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Je,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=y!==void 0?y.length:0;let m=s.get(c);if(m===void 0||m.count!==v){let V=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var p=V;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),S===!0&&(M=3);let A=c.attributes.position.count*M,X=1;A>e.maxTextureSize&&(X=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const $=new Float32Array(A*X*4*v),N=new P0($,A,X,v);N.type=_i,N.needsUpdate=!0;const B=M*4;for(let Q=0;Q<v;Q++){const Y=w[Q],D=b[Q],W=L[Q],z=A*X*4*Q;for(let se=0;se<Y.count;se++){const U=se*B;g===!0&&(o.fromBufferAttribute(Y,se),$[z+U+0]=o.x,$[z+U+1]=o.y,$[z+U+2]=o.z,$[z+U+3]=0),x===!0&&(o.fromBufferAttribute(D,se),$[z+U+4]=o.x,$[z+U+5]=o.y,$[z+U+6]=o.z,$[z+U+7]=0),S===!0&&(o.fromBufferAttribute(W,se),$[z+U+8]=o.x,$[z+U+9]=o.y,$[z+U+10]=o.z,$[z+U+11]=W.itemSize===4?o.w:1)}}m={count:v,texture:N,size:new Ee(A,X)},s.set(c,m),c.addEventListener("dispose",V)}let d=0;for(let g=0;g<h.length;g++)d+=h[g];const _=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const y=h===void 0?0:h.length;let v=i[c.id];if(v===void 0||v.length!==y){v=[];for(let x=0;x<y;x++)v[x]=[x,0];i[c.id]=v}for(let x=0;x<y;x++){const S=v[x];S[0]=x,S[1]=h[x]}v.sort(sw);for(let x=0;x<8;x++)x<y&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(rw);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const S=a[x],w=S[0],b=S[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&c.getAttribute("morphTarget"+x)!==m[w]&&c.setAttribute("morphTarget"+x,m[w]),d&&c.getAttribute("morphNormal"+x)!==d[w]&&c.setAttribute("morphNormal"+x,d[w]),r[x]=b,_+=b):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),d&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const g=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",g),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function aw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const B0=new Ut,z0=new P0,H0=new $S,V0=new F0,om=[],am=[],lm=new Float32Array(16),um=new Float32Array(9),cm=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=om[r];if(s===void 0&&(s=new Float32Array(r),om[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uu(n,e){let t=am[e];t===void 0&&(t=new Int32Array(e),am[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function fw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;cm.set(i),n.uniformMatrix2fv(this.addr,!1,cm),wt(t,i)}}function hw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;um.set(i),n.uniformMatrix3fv(this.addr,!1,um),wt(t,i)}}function pw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;lm.set(i),n.uniformMatrix4fv(this.addr,!1,lm),wt(t,i)}}function mw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function _w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function yw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Ew(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||B0,r)}function Tw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||H0,r)}function ww(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||V0,r)}function Aw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||z0,r)}function Rw(n){switch(n){case 5126:return lw;case 35664:return uw;case 35665:return cw;case 35666:return dw;case 35674:return fw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return _w;case 35669:case 35673:return vw;case 5125:return yw;case 36294:return xw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Aw}}function bw(n,e){n.uniform1fv(this.addr,e)}function Cw(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function Lw(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function Pw(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function Iw(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dw(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Nw(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Uw(n,e){n.uniform1iv(this.addr,e)}function Ow(n,e){n.uniform2iv(this.addr,e)}function Fw(n,e){n.uniform3iv(this.addr,e)}function kw(n,e){n.uniform4iv(this.addr,e)}function Bw(n,e){n.uniform1uiv(this.addr,e)}function zw(n,e){n.uniform2uiv(this.addr,e)}function Hw(n,e){n.uniform3uiv(this.addr,e)}function Vw(n,e){n.uniform4uiv(this.addr,e)}function Gw(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||B0,s[o])}function Ww(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||H0,s[o])}function Xw(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||V0,s[o])}function jw(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||z0,s[o])}function Yw(n){switch(n){case 5126:return bw;case 35664:return Cw;case 35665:return Lw;case 35666:return Pw;case 35674:return Iw;case 35675:return Dw;case 35676:return Nw;case 5124:case 35670:return Uw;case 35667:case 35671:return Ow;case 35668:case 35672:return Fw;case 35669:case 35673:return kw;case 5125:return Bw;case 36294:return zw;case 36295:return Hw;case 36296:return Vw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return jw}}class Kw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Rw(t.type)}}class qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Yw(t.type)}}class $w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function dm(n,e){n.seq.push(e),n.map[e.id]=e}function Zw(n,e,t){const i=n.name,r=i.length;for(hc.lastIndex=0;;){const s=hc.exec(i),o=hc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){dm(t,u===void 0?new Kw(a,n,e):new qw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new $w(a),dm(t,f)),t=f}}}class gl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Zw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function fm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Qw=0;function Jw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function eA(n){switch(n){case ei:return["Linear","( value )"];case be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function hm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jw(n.getShaderSource(e),o)}else return r}function tA(n,e){const t=eA(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function nA(n,e){let t;switch(e){case tS:t="Linear";break;case nS:t="Reinhard";break;case iS:t="OptimizedCineon";break;case rS:t="ACESFilmic";break;case sS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mo).join(`
`)}function rA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mo(n){return n!==""}function pm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(n){return n.replace(oA,aA)}function aA(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Rd(t)}const lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(n){return n.replace(lA,uA)}function uA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _m(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function dA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function hA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case h0:e="ENVMAP_BLENDING_MULTIPLY";break;case Jx:e="ENVMAP_BLENDING_MIX";break;case eS:e="ENVMAP_BLENDING_ADD";break}return e}function pA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cA(t),u=dA(t),c=fA(t),f=hA(t),h=pA(t),p=t.isWebGL2?"":iA(t),y=rA(s),v=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Mo).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Mo).join(`
`),d.length>0&&(d+=`
`)):(m=[_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),d=[p,_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Mi?nA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,tA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=Rd(o),o=pm(o,t),o=mm(o,t),a=Rd(a),a=pm(a,t),a=mm(a,t),o=gm(o),a=gm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=_+m+o,x=_+d+a,S=fm(r,r.VERTEX_SHADER,g),w=fm(r,r.FRAGMENT_SHADER,x);if(r.attachShader(v,S),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(S).trim(),X=r.getShaderInfoLog(w).trim();let $=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,S,w);else{const B=hm(r,S,"vertex"),V=hm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+V)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||X==="")&&(N=!1);N&&(this.diagnostics={runnable:$,programLog:M,vertexShader:{log:A,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(S),r.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new gl(r,v)),b};let L;return this.getAttributes=function(){return L===void 0&&(L=sA(r,v)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let gA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vA(e),t.set(e,i)),i}}class vA{constructor(e){this.id=gA++,this.code=e,this.usedTimes=0}}function yA(n,e,t,i,r,s,o){const a=new Df,l=new _A,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,A,X,$,N){const B=$.fog,V=N.geometry,Q=M.isMeshStandardMaterial?$.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),D=Y&&Y.mapping===lu?Y.image.height:null,W=y[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=z!==void 0?z.length:0;let U=0;V.morphAttributes.position!==void 0&&(U=1),V.morphAttributes.normal!==void 0&&(U=2),V.morphAttributes.color!==void 0&&(U=3);let ee,J,de,ue;if(W){const mt=qn[W];ee=mt.vertexShader,J=mt.fragmentShader}else ee=M.vertexShader,J=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const ve=n.getRenderTarget(),Ne=N.isInstancedMesh===!0,Te=!!M.map,ft=!!M.matcap,Be=!!Y,F=!!M.aoMap,xt=!!M.lightMap,xe=!!M.bumpMap,Ie=!!M.normalMap,Se=!!M.displacementMap,Ze=!!M.emissiveMap,Oe=!!M.metalnessMap,Le=!!M.roughnessMap,Ye=M.anisotropy>0,St=M.clearcoat>0,At=M.iridescence>0,R=M.sheen>0,E=M.transmission>0,j=Ye&&!!M.anisotropyMap,re=St&&!!M.clearcoatMap,ie=St&&!!M.clearcoatNormalMap,C=St&&!!M.clearcoatRoughnessMap,Z=At&&!!M.iridescenceMap,ne=At&&!!M.iridescenceThicknessMap,G=R&&!!M.sheenColorMap,me=R&&!!M.sheenRoughnessMap,ye=!!M.specularMap,_e=!!M.specularColorMap,ge=!!M.specularIntensityMap,he=E&&!!M.transmissionMap,we=E&&!!M.thicknessMap,He=!!M.gradientMap,P=!!M.alphaMap,le=M.alphaTest>0,H=!!M.extensions,oe=!!V.attributes.uv1,ce=!!V.attributes.uv2,je=!!V.attributes.uv3;return{isWebGL2:c,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:J,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ei,map:Te,matcap:ft,envMap:Be,envMapMode:Be&&Y.mapping,envMapCubeUVHeight:D,aoMap:F,lightMap:xt,bumpMap:xe,normalMap:Ie,displacementMap:h&&Se,emissiveMap:Ze,normalMapObjectSpace:Ie&&M.normalMapType===yS,normalMapTangentSpace:Ie&&M.normalMapType===T0,metalnessMap:Oe,roughnessMap:Le,anisotropy:Ye,anisotropyMap:j,clearcoat:St,clearcoatMap:re,clearcoatNormalMap:ie,clearcoatRoughnessMap:C,iridescence:At,iridescenceMap:Z,iridescenceThicknessMap:ne,sheen:R,sheenColorMap:G,sheenRoughnessMap:me,specularMap:ye,specularColorMap:_e,specularIntensityMap:ge,transmission:E,transmissionMap:he,thicknessMap:we,gradientMap:He,opaque:M.transparent===!1&&M.blending===bs,alphaMap:P,alphaTest:le,combine:M.combine,mapUv:Te&&v(M.map.channel),aoMapUv:F&&v(M.aoMap.channel),lightMapUv:xt&&v(M.lightMap.channel),bumpMapUv:xe&&v(M.bumpMap.channel),normalMapUv:Ie&&v(M.normalMap.channel),displacementMapUv:Se&&v(M.displacementMap.channel),emissiveMapUv:Ze&&v(M.emissiveMap.channel),metalnessMapUv:Oe&&v(M.metalnessMap.channel),roughnessMapUv:Le&&v(M.roughnessMap.channel),anisotropyMapUv:j&&v(M.anisotropyMap.channel),clearcoatMapUv:re&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:G&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(M.sheenRoughnessMap.channel),specularMapUv:ye&&v(M.specularMap.channel),specularColorMapUv:_e&&v(M.specularColorMap.channel),specularIntensityMapUv:ge&&v(M.specularIntensityMap.channel),transmissionMapUv:he&&v(M.transmissionMap.channel),thicknessMapUv:we&&v(M.thicknessMap.channel),alphaMapUv:P&&v(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ie||Ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:ce,vertexUv3s:je,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Te||P),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:U,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Mi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bn,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:H&&M.extensions.derivatives===!0,extensionFragDepth:H&&M.extensions.fragDepth===!0,extensionDrawBuffers:H&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(_(A,M),g(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function g(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),M.push(a.mask)}function x(M){const A=y[M.type];let X;if(A){const $=qn[A];X=lM.clone($.uniforms)}else X=M.uniforms;return X}function S(M,A){let X;for(let $=0,N=u.length;$<N;$++){const B=u[$];if(B.cacheKey===A){X=B,++X.usedTimes;break}}return X===void 0&&(X=new mA(n,A,M,s),u.push(X)),X}function w(M){if(--M.usedTimes===0){const A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:L}}function xA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function SA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ym(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,y,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:y,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=y,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,y,v,m){const d=o(f,h,p,y,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,y,v,m){const d=o(f,h,p,y,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||SA),i.length>1&&i.sort(h||vm),r.length>1&&r.sort(h||vm)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function MA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ym,n.set(i,[o])):r>=s.length?(o=new ym,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function TA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wA=0;function AA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RA(n,e){const t=new EA,i=TA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new I);const s=new I,o=new ke,a=new ke;function l(c,f){let h=0,p=0,y=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let v=0,m=0,d=0,_=0,g=0,x=0,S=0,w=0,b=0,L=0;c.sort(AA);const M=f===!0?Math.PI:1;for(let X=0,$=c.length;X<$;X++){const N=c[X],B=N.color,V=N.intensity,Q=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=B.r*V*M,p+=B.g*V*M,y+=B.b*V*M;else if(N.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(N.sh.coefficients[D],V);else if(N.isDirectionalLight){const D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const W=N.shadow,z=i.get(N);z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,r.directionalShadow[v]=z,r.directionalShadowMap[v]=Y,r.directionalShadowMatrix[v]=N.shadow.matrix,x++}r.directional[v]=D,v++}else if(N.isSpotLight){const D=t.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(B).multiplyScalar(V*M),D.distance=Q,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,r.spot[d]=D;const W=N.shadow;if(N.map&&(r.spotLightMap[b]=N.map,b++,W.updateMatrices(N),N.castShadow&&L++),r.spotLightMatrix[d]=W.matrix,N.castShadow){const z=i.get(N);z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,r.spotShadow[d]=z,r.spotShadowMap[d]=Y,w++}d++}else if(N.isRectAreaLight){const D=t.get(N);D.color.copy(B).multiplyScalar(V),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),r.rectArea[_]=D,_++}else if(N.isPointLight){const D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*M),D.distance=N.distance,D.decay=N.decay,N.castShadow){const W=N.shadow,z=i.get(N);z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,r.pointShadow[m]=z,r.pointShadowMap[m]=Y,r.pointShadowMatrix[m]=N.shadow.matrix,S++}r.point[m]=D,m++}else if(N.isHemisphereLight){const D=t.get(N);D.skyColor.copy(N.color).multiplyScalar(V*M),D.groundColor.copy(N.groundColor).multiplyScalar(V*M),r.hemi[g]=D,g++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=y;const A=r.hash;(A.directionalLength!==v||A.pointLength!==m||A.spotLength!==d||A.rectAreaLength!==_||A.hemiLength!==g||A.numDirectionalShadows!==x||A.numPointShadows!==S||A.numSpotShadows!==w||A.numSpotMaps!==b)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=w+b-L,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=L,A.directionalLength=v,A.pointLength=m,A.spotLength=d,A.rectAreaLength=_,A.hemiLength=g,A.numDirectionalShadows=x,A.numPointShadows=S,A.numSpotShadows=w,A.numSpotMaps=b,r.version=wA++)}function u(c,f){let h=0,p=0,y=0,v=0,m=0;const d=f.matrixWorldInverse;for(let _=0,g=c.length;_<g;_++){const x=c[_];if(x.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(x.isSpotLight){const S=r.spot[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),y++}else if(x.isRectAreaLight){const S=r.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(x.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function xm(n,e){const t=new RA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function bA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new xm(n,e),t.set(s,[l])):o>=a.length?(l=new xm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class CA extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LA extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DA(n,e,t){let i=new Nf;const r=new Ee,s=new Ee,o=new Je,a=new CA({depthPacking:vS}),l=new LA,u={},c=t.maxTextureSize,f={[Ri]:Zt,[Zt]:Ri,[Bn]:Bn},h=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:PA,fragmentShader:IA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new bn;y.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vt(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let d=this.type;this.render=function(S,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Ji),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const $=d!==di&&this.type===di,N=d===di&&this.type!==di;for(let B=0,V=S.length;B<V;B++){const Q=S[B],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const D=Y.getFrameExtents();if(r.multiply(D),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/D.x),r.x=s.x*D.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/D.y),r.y=s.y*D.y,Y.mapSize.y=s.y)),Y.map===null||$===!0||N===!0){const z=this.type!==di?{minFilter:Lt,magFilter:Lt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ur(r.x,r.y,z),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const W=Y.getViewportCount();for(let z=0;z<W;z++){const se=Y.getViewport(z);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),X.viewport(o),Y.updateMatrices(Q,z),i=Y.getFrustum(),x(w,b,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===di&&_(Y,b),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(L,M,A)};function _(S,w){const b=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,b,h,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,b,p,v,null)}function g(S,w,b,L){let M=null;const A=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)M=A;else if(M=b.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=M.uuid,$=w.uuid;let N=u[X];N===void 0&&(N={},u[X]=N);let B=N[$];B===void 0&&(B=M.clone(),N[$]=B),M=B}if(M.visible=w.visible,M.wireframe=w.wireframe,L===di?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=n.properties.get(M);X.light=b}return M}function x(S,w,b,L,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===di)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const $=e.update(S),N=S.material;if(Array.isArray(N)){const B=$.groups;for(let V=0,Q=B.length;V<Q;V++){const Y=B[V],D=N[Y.materialIndex];if(D&&D.visible){const W=g(S,D,L,M);n.renderBufferDirect(b,null,$,W,S,Y)}}}else if(N.visible){const B=g(S,N,L,M);n.renderBufferDirect(b,null,$,B,S,null)}}const X=S.children;for(let $=0,N=X.length;$<N;$++)x(X[$],w,b,L,M)}}function NA(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const le=new Je;let H=null;const oe=new Je(0,0,0,0);return{setMask:function(ce){H!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){P=ce},setClear:function(ce,je,ut,mt,ar){ar===!0&&(ce*=mt,je*=mt,ut*=mt),le.set(ce,je,ut,mt),oe.equals(le)===!1&&(n.clearColor(ce,je,ut,mt),oe.copy(le))},reset:function(){P=!1,H=null,oe.set(-1,0,0,0)}}}function s(){let P=!1,le=null,H=null,oe=null;return{setTest:function(ce){ce?ve(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(ce){le!==ce&&!P&&(n.depthMask(ce),le=ce)},setFunc:function(ce){if(H!==ce){switch(ce){case jx:n.depthFunc(n.NEVER);break;case Yx:n.depthFunc(n.ALWAYS);break;case Kx:n.depthFunc(n.LESS);break;case yd:n.depthFunc(n.LEQUAL);break;case qx:n.depthFunc(n.EQUAL);break;case $x:n.depthFunc(n.GEQUAL);break;case Zx:n.depthFunc(n.GREATER);break;case Qx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}H=ce}},setLocked:function(ce){P=ce},setClear:function(ce){oe!==ce&&(n.clearDepth(ce),oe=ce)},reset:function(){P=!1,le=null,H=null,oe=null}}}function o(){let P=!1,le=null,H=null,oe=null,ce=null,je=null,ut=null,mt=null,ar=null;return{setTest:function(ct){P||(ct?ve(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(ct){le!==ct&&!P&&(n.stencilMask(ct),le=ct)},setFunc:function(ct,jn,Wt){(H!==ct||oe!==jn||ce!==Wt)&&(n.stencilFunc(ct,jn,Wt),H=ct,oe=jn,ce=Wt)},setOp:function(ct,jn,Wt){(je!==ct||ut!==jn||mt!==Wt)&&(n.stencilOp(ct,jn,Wt),je=ct,ut=jn,mt=Wt)},setLocked:function(ct){P=ct},setClear:function(ct){ar!==ct&&(n.clearStencil(ct),ar=ct)},reset:function(){P=!1,le=null,H=null,oe=null,ce=null,je=null,ut=null,mt=null,ar=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},y=new WeakMap,v=[],m=null,d=!1,_=null,g=null,x=null,S=null,w=null,b=null,L=null,M=!1,A=null,X=null,$=null,N=null,B=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(D)[1]),Q=Y>=1):D.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Q=Y>=2);let W=null,z={};const se=n.getParameter(n.SCISSOR_BOX),U=n.getParameter(n.VIEWPORT),ee=new Je().fromArray(se),J=new Je().fromArray(U);function de(P,le,H,oe){const ce=new Uint8Array(4),je=n.createTexture();n.bindTexture(P,je),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<H;ut++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(le+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return je}const ue={};ue[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(n.DEPTH_TEST),l.setFunc(yd),Se(!1),Ze(sp),ve(n.CULL_FACE),xe(Ji);function ve(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Ne(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Te(P,le){return p[P]!==le?(n.bindFramebuffer(P,le),p[P]=le,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function ft(P,le){let H=v,oe=!1;if(P)if(H=y.get(le),H===void 0&&(H=[],y.set(le,H)),P.isWebGLMultipleRenderTargets){const ce=P.texture;if(H.length!==ce.length||H[0]!==n.COLOR_ATTACHMENT0){for(let je=0,ut=ce.length;je<ut;je++)H[je]=n.COLOR_ATTACHMENT0+je;H.length=ce.length,oe=!0}}else H[0]!==n.COLOR_ATTACHMENT0&&(H[0]=n.COLOR_ATTACHMENT0,oe=!0);else H[0]!==n.BACK&&(H[0]=n.BACK,oe=!0);oe&&(t.isWebGL2?n.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Be(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const F={[ls]:n.FUNC_ADD,[Ux]:n.FUNC_SUBTRACT,[Ox]:n.FUNC_REVERSE_SUBTRACT};if(i)F[lp]=n.MIN,F[up]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(F[lp]=P.MIN_EXT,F[up]=P.MAX_EXT)}const xt={[Fx]:n.ZERO,[kx]:n.ONE,[Bx]:n.SRC_COLOR,[d0]:n.SRC_ALPHA,[Xx]:n.SRC_ALPHA_SATURATE,[Gx]:n.DST_COLOR,[Hx]:n.DST_ALPHA,[zx]:n.ONE_MINUS_SRC_COLOR,[f0]:n.ONE_MINUS_SRC_ALPHA,[Wx]:n.ONE_MINUS_DST_COLOR,[Vx]:n.ONE_MINUS_DST_ALPHA};function xe(P,le,H,oe,ce,je,ut,mt){if(P===Ji){d===!0&&(Ne(n.BLEND),d=!1);return}if(d===!1&&(ve(n.BLEND),d=!0),P!==Nx){if(P!==_||mt!==M){if((g!==ls||w!==ls)&&(n.blendEquation(n.FUNC_ADD),g=ls,w=ls),mt)switch(P){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vd:n.blendFunc(n.ONE,n.ONE);break;case op:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ap:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case op:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ap:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,S=null,b=null,L=null,_=P,M=mt}return}ce=ce||le,je=je||H,ut=ut||oe,(le!==g||ce!==w)&&(n.blendEquationSeparate(F[le],F[ce]),g=le,w=ce),(H!==x||oe!==S||je!==b||ut!==L)&&(n.blendFuncSeparate(xt[H],xt[oe],xt[je],xt[ut]),x=H,S=oe,b=je,L=ut),_=P,M=!1}function Ie(P,le){P.side===Bn?Ne(n.CULL_FACE):ve(n.CULL_FACE);let H=P.side===Zt;le&&(H=!H),Se(H),P.blending===bs&&P.transparent===!1?xe(Ji):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const oe=P.stencilWrite;u.setTest(oe),oe&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Le(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(P){A!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),A=P)}function Ze(P){P!==Px?(ve(n.CULL_FACE),P!==X&&(P===sp?n.cullFace(n.BACK):P===Ix?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),X=P}function Oe(P){P!==$&&(Q&&n.lineWidth(P),$=P)}function Le(P,le,H){P?(ve(n.POLYGON_OFFSET_FILL),(N!==le||B!==H)&&(n.polygonOffset(le,H),N=le,B=H)):Ne(n.POLYGON_OFFSET_FILL)}function Ye(P){P?ve(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function St(P){P===void 0&&(P=n.TEXTURE0+V-1),W!==P&&(n.activeTexture(P),W=P)}function At(P,le,H){H===void 0&&(W===null?H=n.TEXTURE0+V-1:H=W);let oe=z[H];oe===void 0&&(oe={type:void 0,texture:void 0},z[H]=oe),(oe.type!==P||oe.texture!==le)&&(W!==H&&(n.activeTexture(H),W=H),n.bindTexture(P,le||ue[P]),oe.type=P,oe.texture=le)}function R(){const P=z[W];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){ee.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function ge(P){J.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function he(P,le){let H=f.get(le);H===void 0&&(H=new WeakMap,f.set(le,H));let oe=H.get(P);oe===void 0&&(oe=n.getUniformBlockIndex(le,P.name),H.set(P,oe))}function we(P,le){const oe=f.get(le).get(P);c.get(le)!==oe&&(n.uniformBlockBinding(le,oe,P.__bindingPointIndex),c.set(le,oe))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},W=null,z={},p={},y=new WeakMap,v=[],m=null,d=!1,_=null,g=null,x=null,S=null,w=null,b=null,L=null,M=!1,A=null,X=null,$=null,N=null,B=null,ee.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:Ne,bindFramebuffer:Te,drawBuffers:ft,useProgram:Be,setBlending:xe,setMaterial:Ie,setFlipSided:Se,setCullFace:Ze,setLineWidth:Oe,setPolygonOffset:Le,setScissorTest:Ye,activeTexture:St,bindTexture:At,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:me,texImage3D:ye,updateUBOMapping:he,uniformBlockBinding:we,texStorage2D:ne,texStorage3D:G,texSubImage2D:re,texSubImage3D:ie,compressedTexSubImage2D:C,compressedTexSubImage3D:Z,scissor:_e,viewport:ge,reset:He}}function UA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return d?new OffscreenCanvas(R,E):ea("canvas")}function g(R,E,j,re){let ie=1;if((R.width>re||R.height>re)&&(ie=re/Math.max(R.width,R.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const C=E?Xl:Math.floor,Z=C(ie*R.width),ne=C(ie*R.height);v===void 0&&(v=_(Z,ne));const G=j?_(Z,ne):v;return G.width=Z,G.height=ne,G.getContext("2d").drawImage(R,0,0,Z,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Z+"x"+ne+")."),G}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return Ad(R.width)&&Ad(R.height)}function S(R){return a?!1:R.wrapS!==Mn||R.wrapT!==Mn||R.minFilter!==Lt&&R.minFilter!==nn}function w(R,E){return R.generateMipmaps&&E&&R.minFilter!==Lt&&R.minFilter!==nn}function b(R){n.generateMipmap(R)}function L(R,E,j,re,ie=!1){if(a===!1)return E;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let C=E;return E===n.RED&&(j===n.FLOAT&&(C=n.R32F),j===n.HALF_FLOAT&&(C=n.R16F),j===n.UNSIGNED_BYTE&&(C=n.R8)),E===n.RG&&(j===n.FLOAT&&(C=n.RG32F),j===n.HALF_FLOAT&&(C=n.RG16F),j===n.UNSIGNED_BYTE&&(C=n.RG8)),E===n.RGBA&&(j===n.FLOAT&&(C=n.RGBA32F),j===n.HALF_FLOAT&&(C=n.RGBA16F),j===n.UNSIGNED_BYTE&&(C=re===be&&ie===!1?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(C=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(C=n.RGB5_A1)),(C===n.R16F||C===n.R32F||C===n.RG16F||C===n.RG32F||C===n.RGBA16F||C===n.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function M(R,E,j){return w(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){return R===Lt||R===Md||R===ml?n.NEAREST:n.LINEAR}function X(R){const E=R.target;E.removeEventListener("dispose",X),N(E),E.isVideoTexture&&y.delete(E)}function $(R){const E=R.target;E.removeEventListener("dispose",$),V(E)}function N(R){const E=i.get(R);if(E.__webglInit===void 0)return;const j=R.source,re=m.get(j);if(re){const ie=re[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(R),Object.keys(re).length===0&&m.delete(j)}i.remove(R)}function B(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const j=R.source,re=m.get(j);delete re[E.__cacheKey],o.memory.textures--}function V(R){const E=R.texture,j=i.get(R),re=i.get(E);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer(j.__webglFramebuffer[ie]),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ie=0;ie<j.__webglColorRenderbuffer.length;ie++)j.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ie]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,C=E.length;ie<C;ie++){const Z=i.get(E[ie]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(E[ie])}i.remove(E),i.remove(R)}let Q=0;function Y(){Q=0}function D(){const R=Q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Q+=1,R}function W(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function z(R,E){const j=i.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(j,R,E);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function se(R,E){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Te(j,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function U(R,E){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Te(j,R,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function ee(R,E){const j=i.get(R);if(R.version>0&&j.__version!==R.version){ft(j,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}const J={[Hs]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Gl]:n.MIRRORED_REPEAT},de={[Lt]:n.NEAREST,[Md]:n.NEAREST_MIPMAP_NEAREST,[ml]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[m0]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},ue={[SS]:n.NEVER,[bS]:n.ALWAYS,[MS]:n.LESS,[TS]:n.LEQUAL,[ES]:n.EQUAL,[RS]:n.GEQUAL,[wS]:n.GREATER,[AS]:n.NOTEQUAL};function ve(R,E,j){if(j?(n.texParameteri(R,n.TEXTURE_WRAP_S,J[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,J[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,J[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,de[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,de[E.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Mn||E.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,A(E.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Lt&&E.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Lt||E.minFilter!==ml&&E.minFilter!==Nr||E.type===_i&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Qo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Ne(R,E){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",X));const re=E.source;let ie=m.get(re);ie===void 0&&(ie={},m.set(re,ie));const C=W(E);if(C!==R.__cacheKey){ie[C]===void 0&&(ie[C]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ie[C].usedTimes++;const Z=ie[R.__cacheKey];Z!==void 0&&(ie[R.__cacheKey].usedTimes--,Z.usedTimes===0&&B(E)),R.__cacheKey=C,R.__webglTexture=ie[C].texture}return j}function Te(R,E,j){let re=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=n.TEXTURE_3D);const ie=Ne(R,E),C=E.source;t.bindTexture(re,R.__webglTexture,n.TEXTURE0+j);const Z=i.get(C);if(C.version!==Z.__version||ie===!0){t.activeTexture(n.TEXTURE0+j),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ne=S(E)&&x(E.image)===!1;let G=g(E.image,ne,!1,c);G=At(E,G);const me=x(G)||a,ye=s.convert(E.format,E.colorSpace);let _e=s.convert(E.type),ge=L(E.internalFormat,ye,_e,E.colorSpace);ve(re,E,me);let he;const we=E.mipmaps,He=a&&E.isVideoTexture!==!0,P=Z.__version===void 0||ie===!0,le=M(E,G,me);if(E.isDepthTexture)ge=n.DEPTH_COMPONENT,a?E.type===_i?ge=n.DEPTH_COMPONENT32F:E.type===Wi?ge=n.DEPTH_COMPONENT24:E.type===wr?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:E.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ar&&ge===n.DEPTH_COMPONENT&&E.type!==Pf&&E.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Wi,_e=s.convert(E.type)),E.format===Vs&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,E.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=wr,_e=s.convert(E.type))),P&&(He?t.texStorage2D(n.TEXTURE_2D,1,ge,G.width,G.height):t.texImage2D(n.TEXTURE_2D,0,ge,G.width,G.height,0,ye,_e,null));else if(E.isDataTexture)if(we.length>0&&me){He&&P&&t.texStorage2D(n.TEXTURE_2D,le,ge,we[0].width,we[0].height);for(let H=0,oe=we.length;H<oe;H++)he=we[H],He?t.texSubImage2D(n.TEXTURE_2D,H,0,0,he.width,he.height,ye,_e,he.data):t.texImage2D(n.TEXTURE_2D,H,ge,he.width,he.height,0,ye,_e,he.data);E.generateMipmaps=!1}else He?(P&&t.texStorage2D(n.TEXTURE_2D,le,ge,G.width,G.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,G.width,G.height,ye,_e,G.data)):t.texImage2D(n.TEXTURE_2D,0,ge,G.width,G.height,0,ye,_e,G.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ge,we[0].width,we[0].height,G.depth);for(let H=0,oe=we.length;H<oe;H++)he=we[H],E.format!==En?ye!==null?He?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,G.depth,ye,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,ge,he.width,he.height,G.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,G.depth,ye,_e,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,ge,he.width,he.height,G.depth,0,ye,_e,he.data)}else{He&&P&&t.texStorage2D(n.TEXTURE_2D,le,ge,we[0].width,we[0].height);for(let H=0,oe=we.length;H<oe;H++)he=we[H],E.format!==En?ye!==null?He?t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,he.width,he.height,ye,he.data):t.compressedTexImage2D(n.TEXTURE_2D,H,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(n.TEXTURE_2D,H,0,0,he.width,he.height,ye,_e,he.data):t.texImage2D(n.TEXTURE_2D,H,ge,he.width,he.height,0,ye,_e,he.data)}else if(E.isDataArrayTexture)He?(P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ge,G.width,G.height,G.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ye,_e,G.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,G.width,G.height,G.depth,0,ye,_e,G.data);else if(E.isData3DTexture)He?(P&&t.texStorage3D(n.TEXTURE_3D,le,ge,G.width,G.height,G.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ye,_e,G.data)):t.texImage3D(n.TEXTURE_3D,0,ge,G.width,G.height,G.depth,0,ye,_e,G.data);else if(E.isFramebufferTexture){if(P)if(He)t.texStorage2D(n.TEXTURE_2D,le,ge,G.width,G.height);else{let H=G.width,oe=G.height;for(let ce=0;ce<le;ce++)t.texImage2D(n.TEXTURE_2D,ce,ge,H,oe,0,ye,_e,null),H>>=1,oe>>=1}}else if(we.length>0&&me){He&&P&&t.texStorage2D(n.TEXTURE_2D,le,ge,we[0].width,we[0].height);for(let H=0,oe=we.length;H<oe;H++)he=we[H],He?t.texSubImage2D(n.TEXTURE_2D,H,0,0,ye,_e,he):t.texImage2D(n.TEXTURE_2D,H,ge,ye,_e,he);E.generateMipmaps=!1}else He?(P&&t.texStorage2D(n.TEXTURE_2D,le,ge,G.width,G.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,_e,G)):t.texImage2D(n.TEXTURE_2D,0,ge,ye,_e,G);w(E,me)&&b(re),Z.__version=C.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ft(R,E,j){if(E.image.length!==6)return;const re=Ne(R,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+j);const C=i.get(ie);if(ie.version!==C.__version||re===!0){t.activeTexture(n.TEXTURE0+j),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Z=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,G=[];for(let H=0;H<6;H++)!Z&&!ne?G[H]=g(E.image[H],!1,!0,u):G[H]=ne?E.image[H].image:E.image[H],G[H]=At(E,G[H]);const me=G[0],ye=x(me)||a,_e=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),he=L(E.internalFormat,_e,ge,E.colorSpace),we=a&&E.isVideoTexture!==!0,He=C.__version===void 0||re===!0;let P=M(E,me,ye);ve(n.TEXTURE_CUBE_MAP,E,ye);let le;if(Z){we&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,P,he,me.width,me.height);for(let H=0;H<6;H++){le=G[H].mipmaps;for(let oe=0;oe<le.length;oe++){const ce=le[oe];E.format!==En?_e!==null?we?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,0,0,ce.width,ce.height,_e,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,he,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,0,0,ce.width,ce.height,_e,ge,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,he,ce.width,ce.height,0,_e,ge,ce.data)}}}else{le=E.mipmaps,we&&He&&(le.length>0&&P++,t.texStorage2D(n.TEXTURE_CUBE_MAP,P,he,G[0].width,G[0].height));for(let H=0;H<6;H++)if(ne){we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,G[H].width,G[H].height,_e,ge,G[H].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,he,G[H].width,G[H].height,0,_e,ge,G[H].data);for(let oe=0;oe<le.length;oe++){const je=le[oe].image[H].image;we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,0,0,je.width,je.height,_e,ge,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,he,je.width,je.height,0,_e,ge,je.data)}}else{we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,_e,ge,G[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,he,_e,ge,G[H]);for(let oe=0;oe<le.length;oe++){const ce=le[oe];we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,0,0,_e,ge,ce.image[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,he,_e,ge,ce.image[H])}}}w(E,ye)&&b(n.TEXTURE_CUBE_MAP),C.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Be(R,E,j,re,ie){const C=s.convert(j.format,j.colorSpace),Z=s.convert(j.type),ne=L(j.internalFormat,C,Z,j.colorSpace);i.get(E).__hasExternalTextures||(ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,ne,E.width,E.height,E.depth,0,C,Z,null):t.texImage2D(ie,0,ne,E.width,E.height,0,C,Z,null)),t.bindFramebuffer(n.FRAMEBUFFER,R),Ye(E)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ie,i.get(j).__webglTexture,0,Le(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ie,i.get(j).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(R,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let re=n.DEPTH_COMPONENT16;if(j||Ye(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===_i?re=n.DEPTH_COMPONENT32F:ie.type===Wi&&(re=n.DEPTH_COMPONENT24));const C=Le(E);Ye(E)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,re,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,C,re,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const re=Le(E);j&&Ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,E.width,E.height):Ye(E)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<re.length;ie++){const C=re[ie],Z=s.convert(C.format,C.colorSpace),ne=s.convert(C.type),G=L(C.internalFormat,Z,ne,C.colorSpace),me=Le(E);j&&Ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,G,E.width,E.height):Ye(E)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,G,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,G,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const re=i.get(E.depthTexture).__webglTexture,ie=Le(E);if(E.depthTexture.format===Ar)Ye(E)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(E.depthTexture.format===Vs)Ye(E)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(R){const E=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");xt(E.__webglFramebuffer,R)}else if(j){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=n.createRenderbuffer(),F(E.__webglDepthbuffer[re],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),F(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(R,E,j){const re=i.get(R);E!==void 0&&Be(re.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),j!==void 0&&xe(R)}function Se(R){const E=R.texture,j=i.get(R),re=i.get(E);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=E.version,o.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,C=R.isWebGLMultipleRenderTargets===!0,Z=x(R)||a;if(ie){j.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)j.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(j.__webglFramebuffer=n.createFramebuffer(),C)if(r.drawBuffers){const ne=R.texture;for(let G=0,me=ne.length;G<me;G++){const ye=i.get(ne[G]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ye(R)===!1){const ne=C?E:[E];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let G=0;G<ne.length;G++){const me=ne[G];j.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[G]);const ye=s.convert(me.format,me.colorSpace),_e=s.convert(me.type),ge=L(me.internalFormat,ye,_e,me.colorSpace,R.isXRRenderTarget===!0),he=Le(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ge,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,j.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),F(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ve(n.TEXTURE_CUBE_MAP,E,Z);for(let ne=0;ne<6;ne++)Be(j.__webglFramebuffer[ne],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne);w(E,Z)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(C){const ne=R.texture;for(let G=0,me=ne.length;G<me;G++){const ye=ne[G],_e=i.get(ye);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),ve(n.TEXTURE_2D,ye,Z),Be(j.__webglFramebuffer,R,ye,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D),w(ye,Z)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ne=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,re.__webglTexture),ve(ne,E,Z),Be(j.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,ne),w(E,Z)&&b(ne),t.unbindTexture()}R.depthBuffer&&xe(R)}function Ze(R){const E=x(R)||a,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,ie=j.length;re<ie;re++){const C=j[re];if(w(C,E)){const Z=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ne=i.get(C).__webglTexture;t.bindTexture(Z,ne),b(Z),t.unbindTexture()}}}function Oe(R){if(a&&R.samples>0&&Ye(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,re=R.height;let ie=n.COLOR_BUFFER_BIT;const C=[],Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=i.get(R),G=R.isWebGLMultipleRenderTargets===!0;if(G)for(let me=0;me<E.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let me=0;me<E.length;me++){C.push(n.COLOR_ATTACHMENT0+me),R.depthBuffer&&C.push(Z);const ye=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(ye===!1&&(R.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),G&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ne.__webglColorRenderbuffer[me]),ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Z]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Z])),G){const _e=i.get(E[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,j,re,0,0,j,re,ie,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let me=0;me<E.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ne.__webglColorRenderbuffer[me]);const ye=i.get(E[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(f,R.samples)}function Ye(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function St(R){const E=o.render.frame;y.get(R)!==E&&(y.set(R,E),R.update())}function At(R,E){const j=R.colorSpace,re=R.format,ie=R.type;return R.isCompressedTexture===!0||R.format===wd||j!==ei&&j!==br&&(j===be?a===!1?e.has("EXT_sRGB")===!0&&re===En?(R.format=wd,R.minFilter=nn,R.generateMipmaps=!1):E=C0.sRGBToLinear(E):(re!==En||ie!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=D,this.resetTextureUnits=Y,this.setTexture2D=z,this.setTexture2DArray=se,this.setTexture3D=U,this.setTextureCube=ee,this.rebindTextures=Ie,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Ye}function OA(n,e,t){const i=t.isWebGL2;function r(s,o=br){let a;if(s===er)return n.UNSIGNED_BYTE;if(s===_0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===v0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===oS)return n.BYTE;if(s===aS)return n.SHORT;if(s===Pf)return n.UNSIGNED_SHORT;if(s===g0)return n.INT;if(s===Wi)return n.UNSIGNED_INT;if(s===_i)return n.FLOAT;if(s===Qo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lS)return n.ALPHA;if(s===En)return n.RGBA;if(s===uS)return n.LUMINANCE;if(s===cS)return n.LUMINANCE_ALPHA;if(s===Ar)return n.DEPTH_COMPONENT;if(s===Vs)return n.DEPTH_STENCIL;if(s===wd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dS)return n.RED;if(s===y0)return n.RED_INTEGER;if(s===fS)return n.RG;if(s===x0)return n.RG_INTEGER;if(s===S0)return n.RGBA_INTEGER;if(s===Hu||s===Vu||s===Gu||s===Wu)if(o===be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cp||s===dp||s===fp||s===hp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pp||s===mp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===pp)return o===be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===mp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gp||s===_p||s===vp||s===yp||s===xp||s===Sp||s===Mp||s===Ep||s===Tp||s===wp||s===Ap||s===Rp||s===bp||s===Cp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===gp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_p)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ap)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cp)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xu)return o===be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===pS||s===Lp||s===Pp||s===Ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class FA extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kA={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(u,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,y=.005;u.inputState.pinching&&h>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class BA extends Ut{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Ar,c!==Ar&&c!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ar&&(i=Wi),i===void 0&&c===Vs&&(i=wr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zA extends zr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,y=null;const v=t.getContextAttributes();let m=null,d=null;const _=[],g=[];let x=null;const S=new qt;S.layers.enable(1),S.viewport=new Je;const w=new qt;w.layers.enable(2),w.viewport=new Je;const b=[S,w],L=new FA;L.layers.enable(1),L.layers.enable(2);let M=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(U){x=U},this.getController=function(U){let ee=_[U];return ee===void 0&&(ee=new pc,_[U]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(U){let ee=_[U];return ee===void 0&&(ee=new pc,_[U]=ee),ee.getGripSpace()},this.getHand=function(U){let ee=_[U];return ee===void 0&&(ee=new pc,_[U]=ee),ee.getHandSpace()};function X(U){const ee=g.indexOf(U.inputSource);if(ee===-1)return;const J=_[ee];J!==void 0&&(J.update(U.inputSource,U.frame,u||o),J.dispatchEvent({type:U.type,data:U.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",N);for(let U=0;U<_.length;U++){const ee=g[U];ee!==null&&(g[U]=null,_[U].disconnect(ee))}M=null,A=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),d=new Ur(p.framebufferWidth,p.framebufferHeight,{format:En,type:er,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,J=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Vs:Ar,J=v.stencil?wr:Wi);const ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),d=new Ur(h.textureWidth,h.textureHeight,{format:En,type:er,depthTexture:new BA(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ve=e.properties.get(d);ve.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(U){for(let ee=0;ee<U.removed.length;ee++){const J=U.removed[ee],de=g.indexOf(J);de>=0&&(g[de]=null,_[de].disconnect(J))}for(let ee=0;ee<U.added.length;ee++){const J=U.added[ee];let de=g.indexOf(J);if(de===-1){for(let ve=0;ve<_.length;ve++)if(ve>=g.length){g.push(J),de=ve;break}else if(g[ve]===null){g[ve]=J,de=ve;break}if(de===-1)break}const ue=_[de];ue&&ue.connect(J)}}const B=new I,V=new I;function Q(U,ee,J){B.setFromMatrixPosition(ee.matrixWorld),V.setFromMatrixPosition(J.matrixWorld);const de=B.distanceTo(V),ue=ee.projectionMatrix.elements,ve=J.projectionMatrix.elements,Ne=ue[14]/(ue[10]-1),Te=ue[14]/(ue[10]+1),ft=(ue[9]+1)/ue[5],Be=(ue[9]-1)/ue[5],F=(ue[8]-1)/ue[0],xt=(ve[8]+1)/ve[0],xe=Ne*F,Ie=Ne*xt,Se=de/(-F+xt),Ze=Se*-F;ee.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ze),U.translateZ(Se),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Oe=Ne+Se,Le=Te+Se,Ye=xe-Ze,St=Ie+(de-Ze),At=ft*Te/Le*Oe,R=Be*Te/Le*Oe;U.projectionMatrix.makePerspective(Ye,St,At,R,Oe,Le),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Y(U,ee){ee===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(ee.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCameraXR=function(U){if(r===null)return U;x&&(U=x),L.near=w.near=S.near=U.near,L.far=w.far=S.far=U.far,(M!==L.near||A!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),M=L.near,A=L.far);const ee=U.parent,J=L.cameras;Y(L,ee);for(let de=0;de<J.length;de++)Y(J[de],ee);return J.length===2?Q(L,S,w):L.projectionMatrix.copy(S.projectionMatrix),x&&D(L,ee),L};function D(U,ee){const J=x;ee===null?J.matrix.copy(U.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(U.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const de=J.children;for(let ue=0,ve=de.length;ue<ve;ue++)de[ue].updateMatrixWorld(!0);J.projectionMatrix.copy(U.projectionMatrix),J.projectionMatrixInverse.copy(U.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ws*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let W=null;function z(U,ee){if(c=ee.getViewerPose(u||o),y=ee,c!==null){const J=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let de=!1;J.length!==L.cameras.length&&(L.cameras.length=0,de=!0);for(let ue=0;ue<J.length;ue++){const ve=J[ue];let Ne=null;if(p!==null)Ne=p.getViewport(ve);else{const ft=f.getViewSubImage(h,ve);Ne=ft.viewport,ue===0&&(e.setRenderTargetTextures(d,ft.colorTexture,h.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(d))}let Te=b[ue];Te===void 0&&(Te=new qt,Te.layers.enable(ue),Te.viewport=new Je,b[ue]=Te),Te.matrix.fromArray(ve.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ve.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ue===0&&(L.matrix.copy(Te.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),de===!0&&L.cameras.push(Te)}}for(let J=0;J<_.length;J++){const de=g[J],ue=_[J];de!==null&&ue!==void 0&&ue.update(de,ee,u||o)}W&&W(U,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),y=null}const se=new k0;se.setAnimationLoop(z),this.setAnimationLoop=function(U){W=U},this.dispose=function(){}}}function HA(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,U0(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const g=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=g*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const x=g.program;i.uniformBlockBinding(_,x)}function u(_,g){let x=r[_.id];x===void 0&&(y(_),x=c(_),r[_.id]=x,_.addEventListener("dispose",m));const S=g.program;i.updateUBOMapping(_,S);const w=e.render.frame;s[_.id]!==w&&(h(_),s[_.id]=w)}function c(_){const g=f();_.__bindingPointIndex=g;const x=n.createBuffer(),S=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,S,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,x),x}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],x=_.uniforms,S=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let w=0,b=x.length;w<b;w++){const L=x[w];if(p(L,w,S)===!0){const M=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let $=0;$<A.length;$++){const N=A[$],B=v(N);typeof N=="number"?(L.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,M+X,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=N.elements[0],L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=N.elements[0],L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=N.elements[0]):(N.toArray(L.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,g,x){const S=_.value;if(x[g]===void 0){if(typeof S=="number")x[g]=S;else{const w=Array.isArray(S)?S:[S],b=[];for(let L=0;L<w.length;L++)b.push(w[L].clone());x[g]=b}return!0}else if(typeof S=="number"){if(x[g]!==S)return x[g]=S,!0}else{const w=Array.isArray(x[g])?x[g]:[x[g]],b=Array.isArray(S)?S:[S];for(let L=0;L<w.length;L++){const M=w[L];if(M.equals(b[L])===!1)return M.copy(b[L]),!0}}return!1}function y(_){const g=_.uniforms;let x=0;const S=16;let w=0;for(let b=0,L=g.length;b<L;b++){const M=g[b],A={boundary:0,storage:0},X=Array.isArray(M.value)?M.value:[M.value];for(let $=0,N=X.length;$<N;$++){const B=X[$],V=v(B);A.boundary+=V.boundary,A.storage+=V.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,b>0){w=x%S;const $=S-w;w!==0&&$-A.boundary<0&&(x+=S-w,M.__offset=x)}x+=A.storage}return w=x%S,w>0&&(x+=S-w),_.__size=x,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}function GA(){const n=ea("canvas");return n.style.display="block",n}class G0{constructor(e={}){const{canvas:t=GA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),y=new Int32Array(4);let v=null,m=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=be,this.useLegacyLights=!0,this.toneMapping=Mi,this.toneMappingExposure=1;const g=this;let x=!1,S=0,w=0,b=null,L=-1,M=null;const A=new Je,X=new Je;let $=null;const N=new Ae(0);let B=0,V=t.width,Q=t.height,Y=1,D=null,W=null;const z=new Je(0,0,V,Q),se=new Je(0,0,V,Q);let U=!1;const ee=new Nf;let J=!1,de=!1,ue=null;const ve=new ke,Ne=new Ee,Te=new I,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return b===null?Y:1}let F=i;function xt(T,k){for(let K=0;K<T.length;K++){const O=T[K],q=t.getContext(O,k);if(q!==null)return q}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lf}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",oe,!1),F===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),F=xt(k,T),F===null)throw xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,Ie,Se,Ze,Oe,Le,Ye,St,At,R,E,j,re,ie,C,Z,ne,G,me,ye,_e,ge,he,we;function He(){xe=new ew(F),Ie=new KT(F,xe,e),xe.init(Ie),ge=new OA(F,xe,Ie),Se=new NA(F,xe,Ie),Ze=new iw(F),Oe=new xA,Le=new UA(F,xe,Se,Oe,Ie,ge,Ze),Ye=new $T(g),St=new JT(g),At=new mM(F,Ie),he=new jT(F,xe,At,Ie),R=new tw(F,At,Ze,he),E=new aw(F,R,At,Ze),me=new ow(F,Ie,Le),Z=new qT(Oe),j=new yA(g,Ye,St,xe,Ie,he,Z),re=new HA(g,Oe),ie=new MA,C=new bA(xe,Ie),G=new XT(g,Ye,St,Se,E,h,l),ne=new DA(g,E,Ie),we=new VA(F,Ze,Ie,Se),ye=new YT(F,xe,Ze,Ie),_e=new nw(F,xe,Ze,Ie),Ze.programs=j.programs,g.capabilities=Ie,g.extensions=xe,g.properties=Oe,g.renderLists=ie,g.shadowMap=ne,g.state=Se,g.info=Ze}He();const P=new zA(g,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(V,Q,!1))},this.getSize=function(T){return T.set(V,Q)},this.setSize=function(T,k,K=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,Q=k,t.width=Math.floor(T*Y),t.height=Math.floor(k*Y),K===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(V*Y,Q*Y).floor()},this.setDrawingBufferSize=function(T,k,K){V=T,Q=k,Y=K,t.width=Math.floor(T*K),t.height=Math.floor(k*K),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,k,K,O){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,k,K,O),Se.viewport(A.copy(z).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,k,K,O){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,k,K,O),Se.scissor(X.copy(se).multiplyScalar(Y).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){Se.setScissorTest(U=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(T=!0,k=!0,K=!0){let O=0;if(T){let q=!1;if(b!==null){const pe=b.texture.format;q=pe===S0||pe===x0||pe===y0}if(q){const pe=b.texture.type,Me=pe===er||pe===Wi||pe===Pf||pe===wr||pe===_0||pe===v0,Re=G.getClearColor(),Ce=G.getClearAlpha(),ze=Re.r,Pe=Re.g,De=Re.b,tt=Oe.get(b).__webglFramebuffer;Me?(p[0]=ze,p[1]=Pe,p[2]=De,p[3]=Ce,F.clearBufferuiv(F.COLOR,tt,p)):(y[0]=ze,y[1]=Pe,y[2]=De,y[3]=Ce,F.clearBufferiv(F.COLOR,tt,y))}else O|=F.COLOR_BUFFER_BIT}k&&(O|=F.DEPTH_BUFFER_BIT),K&&(O|=F.STENCIL_BUFFER_BIT),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ie.dispose(),C.dispose(),Oe.dispose(),Ye.dispose(),St.dispose(),E.dispose(),he.dispose(),we.dispose(),j.dispose(),P.dispose(),P.removeEventListener("sessionstart",ct),P.removeEventListener("sessionend",jn),ue&&(ue.dispose(),ue=null),Wt.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=Ze.autoReset,k=ne.enabled,K=ne.autoUpdate,O=ne.needsUpdate,q=ne.type;He(),Ze.autoReset=T,ne.enabled=k,ne.autoUpdate=K,ne.needsUpdate=O,ne.type=q}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const k=T.target;k.removeEventListener("dispose",ce),je(k)}function je(T){ut(T),Oe.remove(T)}function ut(T){const k=Oe.get(T).programs;k!==void 0&&(k.forEach(function(K){j.releaseProgram(K)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,K,O,q,pe){k===null&&(k=ft);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Re=ev(T,k,K,O,q);Se.setMaterial(O,Me);let Ce=K.index,ze=1;O.wireframe===!0&&(Ce=R.getWireframeAttribute(K),ze=2);const Pe=K.drawRange,De=K.attributes.position;let tt=Pe.start*ze,ht=(Pe.start+Pe.count)*ze;pe!==null&&(tt=Math.max(tt,pe.start*ze),ht=Math.min(ht,(pe.start+pe.count)*ze)),Ce!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Ce.count)):De!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,De.count));const Cn=ht-tt;if(Cn<0||Cn===1/0)return;he.setup(q,O,Re,K,Ce);let ii,gt=ye;if(Ce!==null&&(ii=At.get(Ce),gt=_e,gt.setIndex(ii)),q.isMesh)O.wireframe===!0?(Se.setLineWidth(O.wireframeLinewidth*Be()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(q.isLine){let We=O.linewidth;We===void 0&&(We=1),Se.setLineWidth(We*Be()),q.isLineSegments?gt.setMode(F.LINES):q.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else q.isPoints?gt.setMode(F.POINTS):q.isSprite&&gt.setMode(F.TRIANGLES);if(q.isInstancedMesh)gt.renderInstances(tt,Cn,q.count);else if(K.isInstancedBufferGeometry){const We=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,du=Math.min(K.instanceCount,We);gt.renderInstances(tt,Cn,du)}else gt.render(tt,Cn)},this.compile=function(T,k){function K(O,q,pe){O.transparent===!0&&O.side===Bn&&O.forceSinglePass===!1?(O.side=Zt,O.needsUpdate=!0,pa(O,q,pe),O.side=Ri,O.needsUpdate=!0,pa(O,q,pe),O.side=Bn):pa(O,q,pe)}m=C.get(T),m.init(),_.push(m),T.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(g.useLegacyLights),T.traverse(function(O){const q=O.material;if(q)if(Array.isArray(q))for(let pe=0;pe<q.length;pe++){const Me=q[pe];K(Me,T,O)}else K(q,T,O)}),_.pop(),m=null};let mt=null;function ar(T){mt&&mt(T)}function ct(){Wt.stop()}function jn(){Wt.start()}const Wt=new k0;Wt.setAnimationLoop(ar),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(T){mt=T,P.setAnimationLoop(T),T===null?Wt.stop():Wt.start()},P.addEventListener("sessionstart",ct),P.addEventListener("sessionend",jn),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(k=P.updateCameraXR(k)),T.isScene===!0&&T.onBeforeRender(g,T,k,b),m=C.get(T,_.length),m.init(),_.push(m),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(ve),de=this.localClippingEnabled,J=Z.init(this.clippingPlanes,de),v=ie.get(T,d.length),v.init(),d.push(v),Wf(T,k,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(D,W),J===!0&&Z.beginShadows();const K=m.state.shadowsArray;if(ne.render(K,T,k),J===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,G.render(v,T),m.setupLights(g.useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let q=0,pe=O.length;q<pe;q++){const Me=O[q];Xf(v,T,Me,Me.viewport)}}else Xf(v,T,k);b!==null&&(Le.updateMultisampleRenderTarget(b),Le.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(g,T,k),he.resetDefaultState(),L=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Wf(T,k,K,O){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){O&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const Me=E.update(T),Re=T.material;Re.visible&&v.push(T,Me,Re,K,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==Ze.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ze.render.frame);const Me=E.update(T),Re=T.material;if(O&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Te.copy(Me.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){const Ce=Me.groups;for(let ze=0,Pe=Ce.length;ze<Pe;ze++){const De=Ce[ze],tt=Re[De.materialIndex];tt&&tt.visible&&v.push(T,Me,tt,K,Te.z,De)}}else Re.visible&&v.push(T,Me,Re,K,Te.z,null)}}const pe=T.children;for(let Me=0,Re=pe.length;Me<Re;Me++)Wf(pe[Me],k,K,O)}function Xf(T,k,K,O){const q=T.opaque,pe=T.transmissive,Me=T.transparent;m.setupLightsView(K),J===!0&&Z.setGlobalState(g.clippingPlanes,K),pe.length>0&&J0(q,pe,k,K),O&&Se.viewport(A.copy(O)),q.length>0&&ha(q,k,K),pe.length>0&&ha(pe,k,K),Me.length>0&&ha(Me,k,K),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function J0(T,k,K,O){const q=Ie.isWebGL2;ue===null&&(ue=new Ur(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Qo:er,minFilter:Nr,samples:q&&a===!0?4:0})),g.getDrawingBufferSize(Ne),q?ue.setSize(Ne.x,Ne.y):ue.setSize(Xl(Ne.x),Xl(Ne.y));const pe=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(N),B=g.getClearAlpha(),B<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=Mi,ha(T,K,O),Le.updateMultisampleRenderTarget(ue),Le.updateRenderTargetMipmap(ue);let Re=!1;for(let Ce=0,ze=k.length;Ce<ze;Ce++){const Pe=k[Ce],De=Pe.object,tt=Pe.geometry,ht=Pe.material,Cn=Pe.group;if(ht.side===Bn&&De.layers.test(O.layers)){const ii=ht.side;ht.side=Zt,ht.needsUpdate=!0,jf(De,K,O,tt,ht,Cn),ht.side=ii,ht.needsUpdate=!0,Re=!0}}Re===!0&&(Le.updateMultisampleRenderTarget(ue),Le.updateRenderTargetMipmap(ue)),g.setRenderTarget(pe),g.setClearColor(N,B),g.toneMapping=Me}function ha(T,k,K){const O=k.isScene===!0?k.overrideMaterial:null;for(let q=0,pe=T.length;q<pe;q++){const Me=T[q],Re=Me.object,Ce=Me.geometry,ze=O===null?Me.material:O,Pe=Me.group;Re.layers.test(K.layers)&&jf(Re,k,K,Ce,ze,Pe)}}function jf(T,k,K,O,q,pe){T.onBeforeRender(g,k,K,O,q,pe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(g,k,K,O,T,pe),q.transparent===!0&&q.side===Bn&&q.forceSinglePass===!1?(q.side=Zt,q.needsUpdate=!0,g.renderBufferDirect(K,k,O,q,T,pe),q.side=Ri,q.needsUpdate=!0,g.renderBufferDirect(K,k,O,q,T,pe),q.side=Bn):g.renderBufferDirect(K,k,O,q,T,pe),T.onAfterRender(g,k,K,O,q,pe)}function pa(T,k,K){k.isScene!==!0&&(k=ft);const O=Oe.get(T),q=m.state.lights,pe=m.state.shadowsArray,Me=q.state.version,Re=j.getParameters(T,q.state,pe,k,K),Ce=j.getProgramCacheKey(Re);let ze=O.programs;O.environment=T.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(T.isMeshStandardMaterial?St:Ye).get(T.envMap||O.environment),ze===void 0&&(T.addEventListener("dispose",ce),ze=new Map,O.programs=ze);let Pe=ze.get(Ce);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===Me)return Yf(T,Re),Pe}else Re.uniforms=j.getUniforms(T),T.onBuild(K,Re,g),T.onBeforeCompile(Re,g),Pe=j.acquireProgram(Re,Ce),ze.set(Ce,Pe),O.uniforms=Re.uniforms;const De=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Z.uniform),Yf(T,Re),O.needsLights=nv(T),O.lightsStateVersion=Me,O.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix);const tt=Pe.getUniforms(),ht=gl.seqWithValue(tt.seq,De);return O.currentProgram=Pe,O.uniformsList=ht,Pe}function Yf(T,k){const K=Oe.get(T);K.outputColorSpace=k.outputColorSpace,K.instancing=k.instancing,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function ev(T,k,K,O,q){k.isScene!==!0&&(k=ft),Le.resetTextureUnits();const pe=k.fog,Me=O.isMeshStandardMaterial?k.environment:null,Re=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ei,Ce=(O.isMeshStandardMaterial?St:Ye).get(O.envMap||Me),ze=O.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Pe=!!K.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),De=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,ht=!!K.morphAttributes.color,Cn=O.toneMapped?g.toneMapping:Mi,ii=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=ii!==void 0?ii.length:0,We=Oe.get(O),du=m.state.lights;if(J===!0&&(de===!0||T!==M)){const ln=T===M&&O.id===L;Z.setState(O,T,ln)}let Rt=!1;O.version===We.__version?(We.needsLights&&We.lightsStateVersion!==du.state.version||We.outputColorSpace!==Re||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ce||O.fog===!0&&We.fog!==pe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Z.numPlanes||We.numIntersection!==Z.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Pe||We.morphTargets!==De||We.morphNormals!==tt||We.morphColors!==ht||We.toneMapping!==Cn||Ie.isWebGL2===!0&&We.morphTargetsCount!==gt)&&(Rt=!0):(Rt=!0,We.__version=O.version);let lr=We.currentProgram;Rt===!0&&(lr=pa(O,k,q));let Kf=!1,Js=!1,fu=!1;const Xt=lr.getUniforms(),ur=We.uniforms;if(Se.useProgram(lr.program)&&(Kf=!0,Js=!0,fu=!0),O.id!==L&&(L=O.id,Js=!0),Kf||M!==T){if(Xt.setValue(F,"projectionMatrix",T.projectionMatrix),Ie.logarithmicDepthBuffer&&Xt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Js=!0,fu=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const ln=Xt.map.cameraPosition;ln!==void 0&&ln.setValue(F,Te.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Xt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&Xt.setValue(F,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Xt.setOptional(F,q,"bindMatrix"),Xt.setOptional(F,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(Ie.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Xt.setValue(F,"boneTexture",ln.boneTexture,Le),Xt.setValue(F,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const hu=K.morphAttributes;if((hu.position!==void 0||hu.normal!==void 0||hu.color!==void 0&&Ie.isWebGL2===!0)&&me.update(q,K,lr),(Js||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,Xt.setValue(F,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ur.envMap.value=Ce,ur.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Js&&(Xt.setValue(F,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&tv(ur,fu),pe&&O.fog===!0&&re.refreshFogUniforms(ur,pe),re.refreshMaterialUniforms(ur,O,Y,Q,ue),gl.upload(F,We.uniformsList,ur,Le)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(gl.upload(F,We.uniformsList,ur,Le),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Xt.setValue(F,"center",q.center),Xt.setValue(F,"modelViewMatrix",q.modelViewMatrix),Xt.setValue(F,"normalMatrix",q.normalMatrix),Xt.setValue(F,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ln=O.uniformsGroups;for(let pu=0,iv=ln.length;pu<iv;pu++)if(Ie.isWebGL2){const qf=ln[pu];we.update(qf,lr),we.bind(qf,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function tv(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function nv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,k,K){Oe.get(T.texture).__webglTexture=k,Oe.get(T.depthTexture).__webglTexture=K;const O=Oe.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=K===void 0,O.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const K=Oe.get(T);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,K=0){b=T,S=k,w=K;let O=!0,q=null,pe=!1,Me=!1;if(T){const Ce=Oe.get(T);Ce.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(F.FRAMEBUFFER,null),O=!1):Ce.__webglFramebuffer===void 0?Le.setupRenderTarget(T):Ce.__hasExternalTextures&&Le.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const Pe=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Pe[k],pe=!0):Ie.isWebGL2&&T.samples>0&&Le.useMultisampledRTT(T)===!1?q=Oe.get(T).__webglMultisampledFramebuffer:q=Pe,A.copy(T.viewport),X.copy(T.scissor),$=T.scissorTest}else A.copy(z).multiplyScalar(Y).floor(),X.copy(se).multiplyScalar(Y).floor(),$=U;if(Se.bindFramebuffer(F.FRAMEBUFFER,q)&&Ie.drawBuffers&&O&&Se.drawBuffers(T,q),Se.viewport(A),Se.scissor(X),Se.setScissorTest($),pe){const Ce=Oe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,K)}else if(Me){const Ce=Oe.get(T.texture),ze=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,K||0,ze)}L=-1},this.readRenderTargetPixels=function(T,k,K,O,q,pe,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){Se.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ce=T.texture,ze=Ce.format,Pe=Ce.type;if(ze!==En&&ge.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===Qo&&(xe.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Pe!==er&&ge.convert(Pe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===_i&&(Ie.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-O&&K>=0&&K<=T.height-q&&F.readPixels(k,K,O,q,ge.convert(ze),ge.convert(Pe),pe)}finally{const Ce=b!==null?Oe.get(b).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,k,K=0){const O=Math.pow(2,-K),q=Math.floor(k.image.width*O),pe=Math.floor(k.image.height*O);Le.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,T.x,T.y,q,pe),Se.unbindTexture()},this.copyTextureToTexture=function(T,k,K,O=0){const q=k.image.width,pe=k.image.height,Me=ge.convert(K.format),Re=ge.convert(K.type);Le.setTexture2D(K,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,T.x,T.y,q,pe,Me,Re,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Me,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,O,T.x,T.y,Me,Re,k.image),O===0&&K.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,k,K,O,q=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Ce=ge.convert(O.format),ze=ge.convert(O.type);let Pe;if(O.isData3DTexture)Le.setTexture3D(O,0),Pe=F.TEXTURE_3D;else if(O.isDataArrayTexture)Le.setTexture2DArray(O,0),Pe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),tt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ht=F.getParameter(F.UNPACK_SKIP_PIXELS),Cn=F.getParameter(F.UNPACK_SKIP_ROWS),ii=F.getParameter(F.UNPACK_SKIP_IMAGES),gt=K.isCompressedTexture?K.mipmaps[0]:K.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),K.isDataTexture||K.isData3DTexture?F.texSubImage3D(Pe,q,k.x,k.y,k.z,pe,Me,Re,Ce,ze,gt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Pe,q,k.x,k.y,k.z,pe,Me,Re,Ce,gt.data)):F.texSubImage3D(Pe,q,k.x,k.y,k.z,pe,Me,Re,Ce,ze,gt),F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,Cn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ii),q===0&&O.generateMipmaps&&F.generateMipmap(Pe),Se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Le.setTextureCube(T,0):T.isData3DTexture?Le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Le.setTexture2DArray(T,0):Le.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){S=0,w=0,b=null,Se.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?Rr:E0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rr?be:ei}}class WA extends G0{}WA.prototype.isWebGL1Renderer=!0;class XA extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class jA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Td,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new I;class Ff{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ff(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sm=new I,Mm=new Je,Em=new Je,YA=new I,Tm=new ke,os=new I,mc=new ti,wm=new ke,gc=new la;class KA extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)os.fromBufferAttribute(t,i),this.applyBoneTransform(i,os),this.boundingBox.expandByPoint(os)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)os.fromBufferAttribute(t,i),this.applyBoneTransform(i,os),this.boundingSphere.expandByPoint(os)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(r),e.ray.intersectsSphere(mc)!==!1&&(wm.copy(r).invert(),gc.copy(e.ray).applyMatrix4(wm),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Mm.fromBufferAttribute(r.attributes.skinIndex,e),Em.fromBufferAttribute(r.attributes.skinWeight,e),Sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Em.getComponent(s);if(o!==0){const a=Mm.getComponent(s);Tm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(YA.copy(Sm).applyMatrix4(Tm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class W0 extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qA extends Ut{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Lt,c=Lt,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Am=new ke,$A=new ke;class kf{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:$A;Am.multiplyMatrices(a,t[s]),Am.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new kf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=A0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new qA(t,e,e,En,_i);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new W0),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Rm extends Qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new ke,bm=new ke,Qa=[],Cm=new Ci,ZA=new ke,ho=new Vt,po=new ti;class QA extends Vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ZA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,as),Cm.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Cm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,as),po.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,as),bm.multiplyMatrices(i,as),ho.matrixWorld=bm,ho.raycast(e,Qa);for(let o=0,a=Qa.length;o<a;o++){const l=Qa[o];l.instanceId=s,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Bf extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lm=new I,Pm=new I,Im=new ke,_c=new la,Ja=new ti;class cu extends at{constructor(e=new bn,t=new Bf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Lm.fromBufferAttribute(t,r-1),Pm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Lm.distanceTo(Pm);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;Im.copy(r).invert(),_c.copy(e.ray).applyMatrix4(Im);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new I,c=new I,f=new I,h=new I,p=this.isLineSegments?2:1,y=i.index,m=i.attributes.position;if(y!==null){const d=Math.max(0,o.start),_=Math.min(y.count,o.start+o.count);for(let g=d,x=_-1;g<x;g+=p){const S=y.getX(g),w=y.getX(g+1);if(u.fromBufferAttribute(m,S),c.fromBufferAttribute(m,w),_c.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=d,x=_-1;g<x;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),_c.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Dm=new I,Nm=new I;class JA extends cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Dm.fromBufferAttribute(t,r),Nm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dm.distanceTo(Nm);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e1 extends cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class X0 extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new ke,bd=new la,el=new ti,tl=new I;class t1 extends at{constructor(e=new bn,t=new X0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Um.copy(r).invert(),bd.copy(e.ray).applyMatrix4(Um);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=h,v=p;y<v;y++){const m=u.getX(y);tl.fromBufferAttribute(f,m),Om(tl,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let y=h,v=p;y<v;y++)tl.fromBufferAttribute(f,y),Om(tl,y,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Om(n,e,t,i,r,s,o){const a=bd.distanceSqToPoint(n);if(a<t){const l=new I;bd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class zf extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=T0,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class or extends zf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ui(n,e,t){return j0(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function nl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function j0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function n1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Fm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Y0(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ca{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class i1 extends ca{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dp,endingEnd:Dp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Np:s=e,a=2*t-i;break;case Up:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Np:o=e,l=2*i-t;break;case Up:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,y=(i-t)/(r-t),v=y*y,m=v*y,d=-h*m+2*h*v-h*y,_=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*y+1,g=(-1-p)*m+(1.5+p)*v+.5*y,x=p*m-p*v;for(let S=0;S!==a;++S)s[S]=d*o[c+S]+_*o[u+S]+g*o[l+S]+x*o[f+S];return s}}class r1 extends ca{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),f=1-c;for(let h=0;h!==a;++h)s[h]=o[u+h]*f+o[l+h]*c;return s}}class s1 extends ca{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nl(t,this.TimeBufferType),this.values=nl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nl(e.times,Array),values:nl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new s1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new r1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new i1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jo:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case ju:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return ju}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Ui(i,s,o),this.values=Ui(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&j0(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=Ui(this.times),t=Ui(this.values),i=this.getValueSize(),r=this.getInterpolation()===ju,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,p=f+i;for(let y=0;y!==i;++y){const v=t[f+y];if(v!==t[h+y]||v!==t[p+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=Ui(e,0,o),this.values=Ui(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=Ui(this.times,0),t=Ui(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Gs;class Zs extends ni{}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Jo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class K0 extends ni{}K0.prototype.ValueTypeName="color";class ta extends ni{}ta.prototype.ValueTypeName="number";class o1 extends ca{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let c=u+a;u!==c;u+=4)mn.slerpFlat(s,0,o,u-a,o,u,l);return s}}class Fr extends ni{InterpolantFactoryMethodLinear(e){return new o1(this.times,this.values,this.getValueSize(),e)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=Gs;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends ni{}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Jo;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends ni{}na.prototype.ValueTypeName="vector";class a1{constructor(e,t=-1,i,r=mS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(u1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ni.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const c=n1(l);l=Fm(l,1,c),u=Fm(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new ta(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let h=r[f];h||(r[f]=h=[]),h.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,y,v){if(p.length!==0){const m=[],d=[];Y0(p,m,d,y),m.length!==0&&v.push(new f(h,m,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const h=u[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let y;for(y=0;y<h.length;y++)if(h[y].morphTargets)for(let v=0;v<h[y].morphTargets.length;v++)p[h[y].morphTargets[v]]=-1;for(const v in p){const m=[],d=[];for(let _=0;_!==h[y].morphTargets.length;++_){const g=h[y];m.push(g.time),d.push(g.morphTarget===v?1:0)}r.push(new ta(".morphTargetInfluence["+v+"]",m,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(na,p+".position",h,"pos",r),i(Fr,p+".quaternion",h,"rot",r),i(na,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function l1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ta;case"vector":case"vector2":case"vector3":case"vector4":return na;case"color":return K0;case"quaternion":return Fr;case"bool":case"boolean":return Zs;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function u1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=l1(n.type);if(n.times===void 0){const t=[],i=[];Y0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const js={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class c1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],y=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return y}return null}}}const d1=new c1;class da{constructor(e){this.manager=e!==void 0?e:d1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ci={};class f1 extends Error{constructor(e,t){super(e),this.response=t}}class q0 extends da{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=js.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:i,onError:r});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ci[e],f=u.body.getReader(),h=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=h?parseInt(h):0,y=p!==0;let v=0;const m=new ReadableStream({start(d){_();function _(){f.read().then(({done:g,value:x})=>{if(g)d.close();else{v+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:y,loaded:v,total:p});for(let w=0,b=c.length;w<b;w++){const L=c[w];L.onProgress&&L.onProgress(S)}d.enqueue(x),_()}})}}});return new Response(m)}else throw new f1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(y=>p.decode(y))}}}).then(u=>{js.add(e,u);const c=ci[e];delete ci[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=ci[e];if(c===void 0)throw this.manager.itemError(e),u;delete ci[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class h1 extends da{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=js.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ea("img");function l(){c(),js.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $0 extends da{constructor(e){super(e)}load(e,t,i,r){const s=new Ut,o=new h1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fa extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const vc=new ke,km=new I,Bm=new I;class Hf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nf,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;km.setFromMatrixPosition(e.matrixWorld),t.position.copy(km),Bm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bm),t.updateMatrixWorld(),vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p1 extends Hf{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ws*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class m1 extends fa{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new p1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zm=new ke,mo=new I,yc=new I;class g1 extends Hf{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),yc.copy(i.position),yc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yc),i.updateMatrixWorld(),r.makeTranslation(-mo.x,-mo.y,-mo.z),zm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zm)}}class _1 extends fa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new g1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class v1 extends Hf{constructor(){super(new Uf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cd extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new v1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hm extends fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class y1 extends fa{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ld{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class x1 extends da{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=js.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){js.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Vf="\\[\\]\\.:\\/",S1=new RegExp("["+Vf+"]","g"),Gf="[^"+Vf+"]",M1="[^"+Vf.replace("\\.","")+"]",E1=/((?:WC+[\/:])*)/.source.replace("WC",Gf),T1=/(WCOD+)?/.source.replace("WCOD",M1),w1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gf),A1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gf),R1=new RegExp("^"+E1+T1+w1+A1+"$"),b1=["material","materials","bones","map"];class C1{constructor(e,t,i){const r=i||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ke{constructor(e,t,i){this.path=t,this.parsedPath=i||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,i):new Ke(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S1,"")}static parseTrackName(e){const t=R1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);b1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=C1;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class L1{constructor(e,t,i=0,r=1/0){this.ray=new la(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Df,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Pd(e,this,i,t),i.sort(Vm),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pd(e[r],this,i,t);return i.sort(Vm),i}}function Vm(n,e){return n.distance-e.distance}function Pd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Pd(r[s],e,t,!0)}}class Gm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);const Wm={type:"change"},xc={type:"start"},Xm={type:"end"};class P1 extends zr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ye),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wm),i.update(),s=r.NONE},this.update=function(){const C=new I,Z=new mn().setFromUnitVectors(e.up,new I(0,1,0)),ne=Z.clone().invert(),G=new I,me=new mn,ye=new I,_e=2*Math.PI;return function(){const he=i.object.position;C.copy(he).sub(i.target),C.applyQuaternion(Z),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&M(b()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let we=i.minAzimuthAngle,He=i.maxAzimuthAngle;return isFinite(we)&&isFinite(He)&&(we<-Math.PI?we+=_e:we>Math.PI&&(we-=_e),He<-Math.PI?He+=_e:He>Math.PI&&(He-=_e),we<=He?a.theta=Math.max(we,Math.min(He,a.theta)):a.theta=a.theta>(we+He)/2?Math.max(we,a.theta):Math.min(He,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(a),C.applyQuaternion(ne),he.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||G.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o||ye.distanceToSquared(i.target)>0?(i.dispatchEvent(Wm),G.copy(i.object.position),me.copy(i.object.quaternion),ye.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",R),i.domElement.removeEventListener("pointerdown",xe),i.domElement.removeEventListener("pointercancel",Se),i.domElement.removeEventListener("wheel",Le),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Se),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ye),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gm,l=new Gm;let u=1;const c=new I;let f=!1;const h=new Ee,p=new Ee,y=new Ee,v=new Ee,m=new Ee,d=new Ee,_=new Ee,g=new Ee,x=new Ee,S=[],w={};function b(){return 2*Math.PI/60/60*i.autoRotateSpeed}function L(){return Math.pow(.95,i.zoomSpeed)}function M(C){l.theta-=C}function A(C){l.phi-=C}const X=function(){const C=new I;return function(ne,G){C.setFromMatrixColumn(G,0),C.multiplyScalar(-ne),c.add(C)}}(),$=function(){const C=new I;return function(ne,G){i.screenSpacePanning===!0?C.setFromMatrixColumn(G,1):(C.setFromMatrixColumn(G,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ne),c.add(C)}}(),N=function(){const C=new I;return function(ne,G){const me=i.domElement;if(i.object.isPerspectiveCamera){const ye=i.object.position;C.copy(ye).sub(i.target);let _e=C.length();_e*=Math.tan(i.object.fov/2*Math.PI/180),X(2*ne*_e/me.clientHeight,i.object.matrix),$(2*G*_e/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(ne*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),$(G*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(C){h.set(C.clientX,C.clientY)}function Y(C){_.set(C.clientX,C.clientY)}function D(C){v.set(C.clientX,C.clientY)}function W(C){p.set(C.clientX,C.clientY),y.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Z=i.domElement;M(2*Math.PI*y.x/Z.clientHeight),A(2*Math.PI*y.y/Z.clientHeight),h.copy(p),i.update()}function z(C){g.set(C.clientX,C.clientY),x.subVectors(g,_),x.y>0?B(L()):x.y<0&&V(L()),_.copy(g),i.update()}function se(C){m.set(C.clientX,C.clientY),d.subVectors(m,v).multiplyScalar(i.panSpeed),N(d.x,d.y),v.copy(m),i.update()}function U(C){C.deltaY<0?V(L()):C.deltaY>0&&B(L()),i.update()}function ee(C){let Z=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),Z=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),Z=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),Z=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),Z=!0;break}Z&&(C.preventDefault(),i.update())}function J(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);h.set(C,Z)}}function de(){if(S.length===1)v.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);v.set(C,Z)}}function ue(){const C=S[0].pageX-S[1].pageX,Z=S[0].pageY-S[1].pageY,ne=Math.sqrt(C*C+Z*Z);_.set(0,ne)}function ve(){i.enableZoom&&ue(),i.enablePan&&de()}function Ne(){i.enableZoom&&ue(),i.enableRotate&&J()}function Te(C){if(S.length==1)p.set(C.pageX,C.pageY);else{const ne=ie(C),G=.5*(C.pageX+ne.x),me=.5*(C.pageY+ne.y);p.set(G,me)}y.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Z=i.domElement;M(2*Math.PI*y.x/Z.clientHeight),A(2*Math.PI*y.y/Z.clientHeight),h.copy(p)}function ft(C){if(S.length===1)m.set(C.pageX,C.pageY);else{const Z=ie(C),ne=.5*(C.pageX+Z.x),G=.5*(C.pageY+Z.y);m.set(ne,G)}d.subVectors(m,v).multiplyScalar(i.panSpeed),N(d.x,d.y),v.copy(m)}function Be(C){const Z=ie(C),ne=C.pageX-Z.x,G=C.pageY-Z.y,me=Math.sqrt(ne*ne+G*G);g.set(0,me),x.set(0,Math.pow(g.y/_.y,i.zoomSpeed)),B(x.y),_.copy(g)}function F(C){i.enableZoom&&Be(C),i.enablePan&&ft(C)}function xt(C){i.enableZoom&&Be(C),i.enableRotate&&Te(C)}function xe(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",Se)),E(C),C.pointerType==="touch"?St(C):Ze(C))}function Ie(C){i.enabled!==!1&&(C.pointerType==="touch"?At(C):Oe(C))}function Se(C){j(C),S.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Se)),i.dispatchEvent(Xm),s=r.NONE}function Ze(C){let Z;switch(C.button){case 0:Z=i.mouseButtons.LEFT;break;case 1:Z=i.mouseButtons.MIDDLE;break;case 2:Z=i.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Vr.DOLLY:if(i.enableZoom===!1)return;Y(C),s=r.DOLLY;break;case Vr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;D(C),s=r.PAN}else{if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}break;case Vr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}else{if(i.enablePan===!1)return;D(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(xc)}function Oe(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(C);break;case r.DOLLY:if(i.enableZoom===!1)return;z(C);break;case r.PAN:if(i.enablePan===!1)return;se(C);break}}function Le(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(xc),U(C),i.dispatchEvent(Xm))}function Ye(C){i.enabled===!1||i.enablePan===!1||ee(C)}function St(C){switch(re(C),S.length){case 1:switch(i.touches.ONE){case Gr.ROTATE:if(i.enableRotate===!1)return;J(),s=r.TOUCH_ROTATE;break;case Gr.PAN:if(i.enablePan===!1)return;de(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Gr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ve(),s=r.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(xc)}function At(C){switch(re(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Te(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ft(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xt(C),i.update();break;default:s=r.NONE}}function R(C){i.enabled!==!1&&C.preventDefault()}function E(C){S.push(C)}function j(C){delete w[C.pointerId];for(let Z=0;Z<S.length;Z++)if(S[Z].pointerId==C.pointerId){S.splice(Z,1);return}}function re(C){let Z=w[C.pointerId];Z===void 0&&(Z=new Ee,w[C.pointerId]=Z),Z.set(C.pageX,C.pageY)}function ie(C){const Z=C.pointerId===S[0].pointerId?S[1]:S[0];return w[Z.pointerId]}i.domElement.addEventListener("contextmenu",R),i.domElement.addEventListener("pointerdown",xe),i.domElement.addEventListener("pointercancel",Se),i.domElement.addEventListener("wheel",Le,{passive:!1}),this.update()}}function jm(n,e){if(e===gS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ed||e===M0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Ed)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class I1 extends da{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new F1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new q1(t)})}load(e,t,i,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ld.extractUrlBase(e),this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new q0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(c){t(c),s.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Z0){try{o[Ge.KHR_BINARY_GLTF]=new $1(e)}catch(f){r&&r(f);return}s=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new uR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const f=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(f){case Ge.KHR_MATERIALS_UNLIT:o[f]=new U1;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[f]=new Z1(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[f]=new Q1;break;case Ge.KHR_MESH_QUANTIZATION:o[f]=new J1;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function D1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class N1{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Ae(16777215);l.color!==void 0&&c.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Cd(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new _1(c),u.distance=f;break;case"spot":u=new m1(c),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,Bi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class U1{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return zn}extendParams(e,t,i){const r=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,be))}return Promise.all(r)}}class O1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class F1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(a,a)}return Promise.all(s)}}class k1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class B1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,be)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class z1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class H1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae(a[0],a[1],a[2]),Promise.all(s)}}class V1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class G1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,be)),Promise.all(s)}}class W1{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:or}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class X1{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class j1{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Y1{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class K1{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,f=r.byteStride,h=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,f,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(c*f);return o.decodeGltfBuffer(new Uint8Array(p),c,f,h,r.mode,r.filter),p})})}else return null}}class q1{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==yn.TRIANGLES&&u.mode!==yn.TRIANGLE_STRIP&&u.mode!==yn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(c=>(l[u]=c,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const c=u.pop(),f=c.isGroup?c.children:[c],h=u[0].count,p=[];for(const y of f){const v=new ke,m=new I,d=new mn,_=new I(1,1,1),g=new QA(y.geometry,y.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),g.setMatrixAt(x,v.compose(m,d,_));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&y.geometry.setAttribute(x,l[x]);at.prototype.copy.call(g,y),this.parser.assignFinalMaterial(g),p.push(g)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const Z0="glTF",go=12,Ym={JSON:1313821514,BIN:5130562};class $1{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Z0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-go,s=new DataView(e,go);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Ym.JSON){const u=new Uint8Array(e,go+o,a);this.content=i.decode(u)}else if(l===Ym.BIN){const u=go+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Z1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const c in o){const f=Id[c]||c.toLowerCase();a[f]=o[c]}for(const c in e.attributes){const f=Id[c]||c.toLowerCase();if(o[c]!==void 0){const h=i.accessors[e.attributes[c]],p=Ps[h.componentType];u[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(f){r.decodeDracoFile(c,function(h){for(const p in h.attributes){const y=h.attributes[p],v=l[p];v!==void 0&&(y.normalized=v)}f(h)},a,u)})})}}class Q1{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class J1{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Q0 extends ca{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,c=r-t,f=(i-t)/c,h=f*f,p=h*f,y=e*u,v=y-u,m=-2*p+3*h,d=p-h,_=1-m,g=d-h+f;for(let x=0;x!==a;x++){const S=o[v+x+a],w=o[v+x+l]*c,b=o[y+x+a],L=o[y+x]*c;s[x]=_*S+g*w+m*b+d*L}return s}}const eR=new mn;class tR extends Q0{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return eR.fromArray(s).normalize().toArray(s),s}}const yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Km={9728:Lt,9729:nn,9984:Md,9985:m0,9986:ml,9987:Nr},qm={33071:Mn,33648:Gl,10497:Hs},Sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nR={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Jo},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new zf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),n.DefaultMaterial}function pr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Bi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rR(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,c=e.length;u<c;u++){const f=e[u];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],h=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function sR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oR(n){let e;const t=n.extensions&&n.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ec(t.attributes):e=n.indices+":"+Ec(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ec(n.targets[i]);return e}function Ec(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Dd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const lR=new ke;class uR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new D1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new $0(this.options.manager):this.textureLoader=new x1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new q0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};pr(s,a,r),Bi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,c]of o.children.entries())s(c,a.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ld.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Sc[r.type],a=Ps[r.componentType],l=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new Qt(u,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Sc[r.type],u=Ps[r.componentType],c=u.BYTES_PER_ELEMENT,f=c*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,y=r.normalized===!0;let v,m;if(p&&p!==f){const d=Math.floor(h/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let g=t.cache.get(_);g||(v=new u(a,d*p,r.count*p/c),g=new jA(v,p/c),t.cache.add(_,g)),m=new Ff(g,l,h%p/c,y)}else a===null?v=new u(r.count*l):v=new u(a,h,r.count*l),m=new Qt(v,l,y);if(r.sparse!==void 0){const d=Sc.SCALAR,_=Ps[r.sparse.indices.componentType],g=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new _(o[1],g,r.sparse.count*d),w=new u(o[2],x,r.sparse.count*l);a!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized));for(let b=0,L=S.length;b<L;b++){const M=S[b];if(m.setX(M,w[b*l]),l>=2&&m.setY(M,w[b*l+1]),l>=3&&m.setZ(M,w[b*l+2]),l>=4&&m.setW(M,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return c.magFilter=Km[h.magFilter]||nn,c.minFilter=Km[h.minFilter]||Nr,c.wrapS=qm[h.wrapS]||Hs,c.wrapT=qm[h.wrapT]||Hs,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){u=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let y=h;t.isImageBitmapLoader===!0&&(y=function(v){const m=new Ut(v);m.needsUpdate=!0,h(m)}),t.load(Ld.resolveURL(f,s.path),y,void 0,p)})}).then(function(f){return u===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||aR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new X0,Jn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Bf,Jn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return zf}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const f=r[Ge.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),u.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",f.baseColorTexture,be)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Bn);const c=s.alphaMode||Mc.OPAQUE;if(c===Mc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===Mc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==zn&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&o!==zn&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==zn&&(a.emissive=new Ae().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==zn&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,be)),Promise.all(u).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Bi(f,s),t.associations.set(f,{materials:e}),s.extensions&&pr(r,f,s),f})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $m(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],c=oR(u),f=r[c];if(f)o.push(f.promise);else{let h;u.extensions&&u.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?h=s(u):h=$m(new bn,u,t),r[c]={primitive:u,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const c=o[l].material===void 0?iR(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],f=[];for(let p=0,y=c.length;p<y;p++){const v=c[p],m=o[p];let d;const _=u[p];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new KA(v,_):new Vt(v,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?d.geometry=jm(d.geometry,M0):m.mode===yn.TRIANGLE_FAN&&(d.geometry=jm(d.geometry,Ed));else if(m.mode===yn.LINES)d=new JA(v,_);else if(m.mode===yn.LINE_STRIP)d=new cu(v,_);else if(m.mode===yn.LINE_LOOP)d=new e1(v,_);else if(m.mode===yn.POINTS)d=new t1(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&sR(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Bi(d,s),m.extensions&&pr(r,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,y=f.length;p<y;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&pr(r,f[0],s),f[0];const h=new xi;s.extensions&&pr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,y=f.length;p<y;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new qt(R0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Uf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Bi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let u=0,c=o.length;u<c;u++){const f=o[u];if(f){a.push(f);const h=new ke;s!==null&&h.fromArray(s.array,u*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new kf(a,l)})}loadAnimation(e){const i=this.json.animations[e],r=i.name?i.name:"animation_"+e,s=[],o=[],a=[],l=[],u=[];for(let c=0,f=i.channels.length;c<f;c++){const h=i.channels[c],p=i.samplers[h.sampler],y=h.target,v=y.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,d=i.parameters!==void 0?i.parameters[p.output]:p.output;y.node!==void 0&&(s.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",d)),l.push(p),u.push(y))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u)]).then(function(c){const f=c[0],h=c[1],p=c[2],y=c[3],v=c[4],m=[];for(let d=0,_=f.length;d<_;d++){const g=f[d],x=h[d],S=p[d],w=y[d],b=v[d];if(g===void 0)continue;g.updateMatrix();let L;switch(Oi[b.path]){case Oi.weights:L=ta;break;case Oi.rotation:L=Fr;break;case Oi.position:case Oi.scale:default:L=na;break}const M=g.name?g.name:g.uuid,A=w.interpolation!==void 0?nR[w.interpolation]:Gs,X=[];Oi[b.path]===Oi.weights?g.traverse(function(N){N.morphTargetInfluences&&X.push(N.name?N.name:N.uuid)}):X.push(M);let $=S.array;if(S.normalized){const N=Dd($.constructor),B=new Float32Array($.length);for(let V=0,Q=$.length;V<Q;V++)B[V]=$[V]*N;$=B}for(let N=0,B=X.length;N<B;N++){const V=new L(X[N]+"."+Oi[b.path],x.array,$,A);w.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(Y){const D=this instanceof Fr?tR:Q0;return new D(this.times,this.values,this.getValueSize()/3,Y)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(V)}}return new a1(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,c=a.length;u<c;u++)o.push(i.getDependency("node",a[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(u){const c=u[0],f=u[1],h=u[2];h!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(h,lR)});for(let p=0,y=f.length;p<y;p++)c.add(f[p]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let c;if(s.isBone===!0?c=new W0:u.length>1?c=new xi:u.length===1?c=u[0]:c=new at,c!==u[0])for(let f=0,h=u.length;f<h;f++)c.add(u[f]);if(s.name&&(c.userData.name=s.name,c.name=o),Bi(c,s),s.extensions&&pr(i,c,s),s.matrix!==void 0){const f=new ke;f.fromArray(s.matrix),c.applyMatrix4(f)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new xi;i.name&&(s.name=r.createUniqueName(i.name)),Bi(s,i),i.extensions&&pr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,f=l.length;c<f;c++)s.add(l[c]);const u=c=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof Jn||h instanceof Ut)&&f.set(h,p);return c.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=u(s),s})}}function cR(n,e,t){const i=e.attributes,r=new Ci;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(u[0],u[1],u[2])),a.normalized){const c=Dd(Ps[a.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let u=0,c=s.length;u<c;u++){const f=s[u];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,y=h.max;if(p!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(y[2]))),h.normalized){const v=Dd(Ps[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new ti;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function $m(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Id[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Bi(n,e),cR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?rR(n,e.targets,t):n})}class dR extends cu{constructor(e,t){const i=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new bn;r.setAttribute("position",new Wn(i,3)),r.computeBoundingSphere();const s=new Bf({fog:!1});super(r,s),this.light=e,this.color=t,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new bn;a.setAttribute("position",new Wn(o,3)),a.computeBoundingSphere(),this.add(new Vt(a,new zn({side:Zt,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const e=this.material.color,t=Math.max(e.r,e.g,e.b);t>1&&e.multiplyScalar(1/t),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Nd=n=>{const e=vt.useRef(null);vt.useEffect(()=>{n.display?r():t()},[n.display]);const t=()=>{e.current.style.opacity="0",e.current.style.pointerEvents="none"},i=()=>{n.onButtonClicked&&n.onButtonClicked(n.index),t()},r=()=>{e.current.style.opacity="1",e.current.style.pointerEvents="all"};return qe.jsxs("div",{ref:e,className:n.className,style:{opacity:"0",pointerEvents:"none","--transitionSeconds":n.transitionSeconds},children:[qe.jsx("span",{children:n.description}),n.isButton&&qe.jsx("button",{onPointerDown:i,children:n.buttonDescription})]})},fR=n=>{const[e,t]=vt.useState(0),[i,r]=vt.useState(0),s=o=>{const a=o+1;if(a<n.UIPanelProperties.length){const l=n.UIPanelProperties[o].transitionSeconds*1e3;setTimeout(()=>t(a),l)}else n.onPanelsCompletion()};return vt.useEffect(()=>{e!==i&&r(e)},[e]),qe.jsx(qe.Fragment,{children:n.UIPanelProperties.map((o,a)=>vt.createElement(Nd,{...o,display:a===e,onButtonClicked:s,index:a,key:`UIPanelMultistage${a}`,transitionSeconds:1,className:n.className}))})};let _l=!1,_o,vl=new Ee(window.innerWidth*.2,0),Tc=new mn;const hR=()=>qe.jsxs("div",{className:"LoadingScreen",children:[qe.jsx("img",{src:"/ecotech/ecotechlogo.png"}),qe.jsx("span",{children:"Loading"})]}),pR=n=>{const e=vt.useRef(null),[t,i]=vt.useState(!1);return vt.useEffect(()=>{e.current.addEventListener("pointerdown",()=>{_l=!0}),window.addEventListener("pointerup",()=>{_l=!1}),window.addEventListener("pointermove",s=>{_l&&(vl=new Ee(s.clientX,s.clientY))}),requestAnimationFrame(r);function r(){e.current.style.left=`${vl.x}px`,t===!1&&vl.x>=window.innerWidth/2&&(n.onSliderCompletion(),i(!0)),requestAnimationFrame(r)}},[]),qe.jsxs("div",{ref:e,className:"Slider",children:[qe.jsx("div",{className:"SliderLine"}),qe.jsx("div",{className:"SliderButton"})]})},mR=()=>{const n=vt.useRef(null),e=new L1,t=new Ee;let i=!1,r;window.addEventListener("pointerdown",()=>{i=!0}),window.addEventListener("pointerup",()=>{i=!1});const s=v=>v*Math.PI/180;let o={x:0,y:0};window.addEventListener("pointermove",v=>{t.x=v.clientX/window.innerWidth*2-1,t.y=-(v.clientY/window.innerHeight)*2+1;var m={x:v.clientX-o.x,y:v.clientY-o.y};if(i&&!_l&&r){const d=new mn().setFromEuler(new pi(0,s(m.x),0,"XYZ"));Tc=new mn().copy(r.quaternion).multiply(d)}o={x:v.clientX,y:v.clientY}});const a=[],l=(v,m,d,_,g)=>{_.update();const x=.5,S=c(d,vl);_o.position.set(S.x*(1-x)+_o.position.x*x,0,-d.position.z),e.setFromCamera(t,d),Tc&&g.quaternion.slerp(Tc,.1),a.map(w=>{w.lookAt(d.position)}),v.autoClear=!0,d.layers.set(0),v.render(m,d),v.autoClear=!1,d.layers.set(1),v.render(m,d),requestAnimationFrame(()=>l(v,m,d,_,g))},u=(v,m,d,_,g,x)=>{const S=new Ls(v,m),w=new zn({color:d});w.side=Bn;const b=new Vt(S,w);b.rotation.copy(x),b.position.copy(g),_.add(b),b.layers.set(1)},c=(v,m)=>{const d=m.x/window.innerWidth*2-1,_=m.y/window.innerHeight*2-1,x=new I(d,-_,0).unproject(v).sub(v.position).normalize(),S=-v.position.z/x.z;return v.position.clone().add(x.multiplyScalar(S))},f=v=>{const m=v.position.z,d=R0.degToRad(v.fov),_=2*Math.tan(d/2)*m,g=_*v.aspect;return new Ee(g,_)},h=v=>{const m=new Ls(1,1),d=new zn({color:"0xffffff",transparent:!0,opacity:.5,colorWrite:!1}),_=new Vt(m,d);_.renderOrder=1;const g=()=>{const x=f(v);_.scale.set(x.width/2,x.height,1),_.position.set(_.scale.x/2,0,0)};_o=new xi,_o.add(_),v.add(_o),g()},p=(v,m,d,_,g)=>{const x=new y1(new Ae(16777215),20,v*1.5,m*1.5),S=new dR(x);x.layers.set(1),x.rotation.copy(g),x.position.copy(_),d.add(x),d.add(S)},y=(v,m,d)=>{const _=new Ls(1,1),g=new zn({map:d,transparent:!0,blending:vd,depthWrite:!1,opacity:.7}),x=new Vt(_,g);v.add(x),x.position.copy(m);const S=.6;x.scale.set(S,S,1),x.layers.set(1),a.push(x)};return vt.useEffect(()=>{const v=new XA,m=new G0({canvas:n.current,antialias:!0});m.setClearColor(new Ae(16438432),0);const d=new qt(50,window.innerWidth/window.innerHeight,1,1e4);d.aspect=n.current.clientWidth/n.current.clientHeight,d.position.z=10;const _=new P1(d,m.domElement);v.add(d);const g=new xi;v.add(g),r=g,g.scale.set(1.5,1.5,1.5),g.position.set(0,-1,-3.5),_.autoRotate=!1,_.enableRotate=!1,_.autoRotateSpeed=1,_.enableDamping=!0,_.dampingFactor=.01,_.update();const x=new Cd(new Ae(16777215),.4);x.layers.set(0),g.add(x);const S=new Hm(new Ae(16777215),.5);S.layers.set(0),g.add(S);const w=new Cd(new Ae(16777215),.5);w.layers.set(1),g.add(w);const b=new Hm(new Ae(16777215),.3);b.layers.set(1),g.add(b),p(.55,1.05,g,new I(1.03,1.2,-.2),new pi(0,Math.PI/2,0)),p(.425,.85,g,new I(1.03,1.2,1.275),new pi(0,Math.PI/2,0)),p(.5,.95,g,new I(.57,1.045,-1.95),new pi(0,Math.PI,0)),u(.33,.18,new Ae(16777215),g,new I(-1.055,.37,1.535),new pi(0,0,0));const L=new I1,M="/ecotech/house.glb";L.load(M,$=>{const N=$.scene;g.add(N),N.scale.set(.1,.1,.1),N.position.set(-.5,0,0),N.traverse(B=>B.renderOrder=2),N.traverse(B=>B.layers.set(1))});const A=new $0().load("/ecotech/touchpoint.png");y(g,new I(-1.1,.7,1.535),A),y(g,new I(-1.1,.7,-1.5),A),y(g,new I(.7,.7,1.535),A),h(d),L.load(M,$=>{const N=$.scene;g.add(N),N.scale.set(.1,.1,.1),N.position.set(-.5,0,0),N.traverse(B=>B.renderOrder=0),N.traverse(B=>B.layers.set(0))}),_.target.set(0,0,0);const X=.1;_.minPolarAngle=Math.PI/4-X,_.maxPolarAngle=Math.PI/4+X*5,_.update(),_.enableZoom=!1,_.enableRotate=!1,m.setSize(window.innerWidth,window.innerHeight),requestAnimationFrame(()=>l(m,v,d,_,g)),window.onresize=()=>{const $=window.innerWidth,N=window.innerHeight;m.setSize($,N),d.aspect=$/N,d.updateProjectionMatrix()}}),qe.jsx("canvas",{ref:n})},gR=()=>qe.jsxs("div",{className:"watermark",children:[qe.jsx("img",{src:"/ecotech/ecotechlogo.png"}),qe.jsx("span",{style:{right:"0"},children:"SmartThermo™"})]}),_R=()=>qe.jsx("div",{className:"smartThermostat"}),vR=()=>{const[n,e]=vt.useState(!1),[t,i]=vt.useState(!1),[r,s]=vt.useState(!1),[o,a]=vt.useState(!1),[l,u]=vt.useState(!1),c=500,f=[{description:"SmartThermo brings peace of mind to your home",isButton:!0,buttonDescription:"See the benefits",transitionSeconds:1},{description:"Slide the swiper to reveal the difference",isButton:!0,buttonDescription:"Take me there",transitionSeconds:1}],h={description:"Slide the swiper to reveal the SmartThermo home",isButton:!1,transitionSeconds:1},p={description:"The SmartThermo home leverages AI to reduce bills & energy consumption",isButton:!1,transitionSeconds:1};vt.useEffect(()=>{setTimeout(()=>{e(!0),setTimeout(()=>i(!0),1e3)},c)},[]);const y=()=>{u(!0),s(!0)},v=()=>{s(!1),setTimeout(()=>a(!0),1e3)};return qe.jsxs("div",{children:[!n&&qe.jsx(hR,{}),l&&qe.jsx(pR,{onSliderCompletion:v}),qe.jsx(gR,{}),qe.jsx(Nd,{display:o,index:0,className:"topPanel",...p}),qe.jsx(Nd,{display:r,index:0,className:"topPanel",...h}),qe.jsx(fR,{UIPanelProperties:f,show:t,onPanelsCompletion:y,className:"UIPanel"}),!n&&qe.jsx(_R,{})]})},yR=()=>qe.jsxs("div",{children:[qe.jsx(vR,{}),qe.jsx(mR,{})]});wc.createRoot(document.getElementById("root")).render(qe.jsx(xv.StrictMode,{children:qe.jsx(yR,{})}));
