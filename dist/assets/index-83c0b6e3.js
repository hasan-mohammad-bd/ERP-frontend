import{c as J,R as m,M as Ne,r as M,a,b as L,F as E,G as ie,H as Be,J as se,N as ke,Q as Ie,U as Re,V as fe,W as ee,X as Fe,Y as te,Z as Ve,_ as We,$ as Ge,a0 as He,a1 as Ke,A as me,a2 as qe,B as Xe,a3 as Ye,C as Qe}from"./index-e8c93185.js";import{T as Ue,c as Ze}from"./tabs-35e05170.js";import{u as Je,b as et,c as tt,i as _,d as rt,e as nt,f as G,w as ve,g as Pe,h as Oe,j as _e,C as Ce,k as B,l as at,L as X,m as U,n as re,A as it,o as V,p as xe,q as st,r as ye,s as lt,t as Ee,G as ot,v as pe,x as ge,D as ct,y as dt,X as le,Y as ut,z as ht,R as ft,T as mt,B as vt,a as xt}from"./BarChart-091859be.js";import"./index-e8e5dbb3.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=J("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=J("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=J("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=J("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);var jt=["x1","y1","x2","y2","key"],At=["offset"];function F(e){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(e)}function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?be(Object(n),!0).forEach(function(r){wt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wt(e,t,n){return t=Nt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nt(e){var t=kt(e,"string");return F(t)=="symbol"?t:String(t)}function kt(e,t){if(F(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(F(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function je(e,t){if(e==null)return{};var n=Pt(e,t),r,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Pt(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Ot=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,i=t.x,l=t.y,s=t.width,o=t.height;return m.createElement("rect",{x:i,y:l,width:s,height:o,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function Se(e,t){var n;if(m.isValidElement(e))n=m.cloneElement(e,t);else if(G(e))n=e(t);else{var r=t.x1,i=t.y1,l=t.x2,s=t.y2,o=t.key,u=je(t,jt),c=B(u,!1);c.offset;var d=je(c,At);n=m.createElement("line",I({},d,{x1:r,y1:i,x2:l,y2:s,fill:"none",key:o}))}return n}function _t(e){var t=e.x,n=e.width,r=e.horizontal,i=r===void 0?!0:r,l=e.horizontalPoints;if(!i||!l||!l.length)return null;var s=l.map(function(o,u){var c=k(k({},e),{},{x1:t,y1:o,x2:t+n,y2:o,key:"line-".concat(u),index:u});return Se(i,c)});return m.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function Ct(e){var t=e.y,n=e.height,r=e.vertical,i=r===void 0?!0:r,l=e.verticalPoints;if(!i||!l||!l.length)return null;var s=l.map(function(o,u){var c=k(k({},e),{},{x1:o,y1:t,x2:o,y2:t+n,key:"line-".concat(u),index:u});return Se(i,c)});return m.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function Et(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,i=e.y,l=e.width,s=e.height,o=e.horizontalPoints,u=e.horizontal,c=u===void 0?!0:u;if(!c||!t||!t.length)return null;var d=o.map(function(h){return Math.round(h+i-i)}).sort(function(h,x){return h-x});i!==d[0]&&d.unshift(0);var f=d.map(function(h,x){var b=!d[x+1],A=b?i+s-h:d[x+1]-h;if(A<=0)return null;var p=x%t.length;return m.createElement("rect",{key:"react-".concat(x),y:h,x:r,height:A,width:l,stroke:"none",fill:t[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},f)}function St(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,i=e.fillOpacity,l=e.x,s=e.y,o=e.width,u=e.height,c=e.verticalPoints;if(!n||!r||!r.length)return null;var d=c.map(function(h){return Math.round(h+l-l)}).sort(function(h,x){return h-x});l!==d[0]&&d.unshift(0);var f=d.map(function(h,x){var b=!d[x+1],A=b?l+o-h:d[x+1]-h;if(A<=0)return null;var p=x%r.length;return m.createElement("rect",{key:"react-".concat(x),x:h,y:s,width:A,height:u,stroke:"none",fill:r[p],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},f)}var zt=function(t,n){var r=t.xAxis,i=t.width,l=t.height,s=t.offset;return Pe(Oe(k(k(k({},Ce.defaultProps),r),{},{ticks:_e(r,!0),viewBox:{x:0,y:0,width:i,height:l}})),s.left,s.left+s.width,n)},Dt=function(t,n){var r=t.yAxis,i=t.width,l=t.height,s=t.offset;return Pe(Oe(k(k(k({},Ce.defaultProps),r),{},{ticks:_e(r,!0),viewBox:{x:0,y:0,width:i,height:l}})),s.top,s.top+s.height,n)},W={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function oe(e){var t,n,r,i,l,s,o=Je(),u=et(),c=tt(),d=k(k({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:W.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:W.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:W.horizontal,horizontalFill:(i=e.horizontalFill)!==null&&i!==void 0?i:W.horizontalFill,vertical:(l=e.vertical)!==null&&l!==void 0?l:W.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:W.verticalFill,x:_(e.x)?e.x:c.left,y:_(e.y)?e.y:c.top,width:_(e.width)?e.width:c.width,height:_(e.height)?e.height:c.height}),f=d.x,h=d.y,x=d.width,b=d.height,A=d.syncWithTicks,p=d.horizontalValues,v=d.verticalValues,j=rt(),N=nt();if(!_(x)||x<=0||!_(b)||b<=0||!_(f)||f!==+f||!_(h)||h!==+h)return null;var y=d.verticalCoordinatesGenerator||zt,g=d.horizontalCoordinatesGenerator||Dt,w=d.horizontalPoints,P=d.verticalPoints;if((!w||!w.length)&&G(g)){var O=p&&p.length,S=g({yAxis:N?k(k({},N),{},{ticks:O?p:N.ticks}):void 0,width:o,height:u,offset:c},O?!0:A);ve(Array.isArray(S),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(F(S),"]")),Array.isArray(S)&&(w=S)}if((!P||!P.length)&&G(y)){var z=v&&v.length,C=y({xAxis:j?k(k({},j),{},{ticks:z?v:j.ticks}):void 0,width:o,height:u,offset:c},z?!0:A);ve(Array.isArray(C),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(F(C),"]")),Array.isArray(C)&&(P=C)}return m.createElement("g",{className:"recharts-cartesian-grid"},m.createElement(Ot,{fill:d.fill,fillOpacity:d.fillOpacity,x:d.x,y:d.y,width:d.width,height:d.height}),m.createElement(_t,I({},d,{offset:c,horizontalPoints:w,xAxis:j,yAxis:N})),m.createElement(Ct,I({},d,{offset:c,verticalPoints:P,xAxis:j,yAxis:N})),m.createElement(Et,I({},d,{horizontalPoints:w})),m.createElement(St,I({},d,{verticalPoints:P})))}oe.displayName="CartesianGrid";var Lt=["layout","type","stroke","connectNulls","isRange","ref"],ze;function H(e){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function Tt(e,t){if(e==null)return{};var n=$t(e,t),r,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $t(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ae(Object(n),!0).forEach(function(r){D(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Le(r.key),r)}}function Bt(e,t,n){return t&&we(e.prototype,t),n&&we(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function It(e,t,n){return t=Z(t),Rt(e,De()?Reflect.construct(t,n||[],Z(e).constructor):t.apply(e,n))}function Rt(e,t){if(t&&(H(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(e)}function De(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(De=function(){return!!e})()}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Z(e)}function Y(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ft(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ne(e,t)}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ne(e,t)}function D(e,t,n){return t=Le(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Le(e){var t=Vt(e,"string");return H(t)=="symbol"?t:String(t)}function Vt(e,t){if(H(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(H(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var T=function(e){Ft(t,e);function t(){var n;Mt(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return n=It(this,t,[].concat(i)),D(Y(n),"state",{isAnimationFinished:!0}),D(Y(n),"id",at("recharts-area-")),D(Y(n),"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),G(s)&&s()}),D(Y(n),"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),G(s)&&s()}),n}return Bt(t,[{key:"renderDots",value:function(r,i,l){var s=this.props.isAnimationActive,o=this.state.isAnimationFinished;if(s&&!o)return null;var u=this.props,c=u.dot,d=u.points,f=u.dataKey,h=B(this.props,!1),x=B(c,!0),b=d.map(function(p,v){var j=$($($({key:"dot-".concat(v),r:3},h),x),{},{index:v,cx:p.x,cy:p.y,dataKey:f,value:p.value,payload:p.payload,points:d});return t.renderDotItem(c,j)}),A={clipPath:r?"url(#clipPath-".concat(i?"":"dots-").concat(l,")"):null};return m.createElement(X,R({className:"recharts-area-dots"},A),b)}},{key:"renderHorizontalRect",value:function(r){var i=this.props,l=i.baseLine,s=i.points,o=i.strokeWidth,u=s[0].x,c=s[s.length-1].x,d=r*Math.abs(u-c),f=U(s.map(function(h){return h.y||0}));return _(l)&&typeof l=="number"?f=Math.max(l,f):l&&Array.isArray(l)&&l.length&&(f=Math.max(U(l.map(function(h){return h.y||0})),f)),_(f)?m.createElement("rect",{x:u<c?u:u-d,y:0,width:d,height:Math.floor(f+(o?parseInt("".concat(o),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var i=this.props,l=i.baseLine,s=i.points,o=i.strokeWidth,u=s[0].y,c=s[s.length-1].y,d=r*Math.abs(u-c),f=U(s.map(function(h){return h.x||0}));return _(l)&&typeof l=="number"?f=Math.max(l,f):l&&Array.isArray(l)&&l.length&&(f=Math.max(U(l.map(function(h){return h.x||0})),f)),_(f)?m.createElement("rect",{x:0,y:u<c?u:u-d,width:f+(o?parseInt("".concat(o),10):1),height:Math.floor(d)}):null}},{key:"renderClipRect",value:function(r){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,i,l,s){var o=this.props,u=o.layout,c=o.type,d=o.stroke,f=o.connectNulls,h=o.isRange;o.ref;var x=Tt(o,Lt);return m.createElement(X,{clipPath:l?"url(#clipPath-".concat(s,")"):null},m.createElement(re,R({},B(x,!0),{points:r,connectNulls:f,type:c,baseLine:i,layout:u,stroke:"none",className:"recharts-area-area"})),d!=="none"&&m.createElement(re,R({},B(this.props,!1),{className:"recharts-area-curve",layout:u,type:c,connectNulls:f,fill:"none",points:r})),d!=="none"&&h&&m.createElement(re,R({},B(this.props,!1),{className:"recharts-area-curve",layout:u,type:c,connectNulls:f,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(r,i){var l=this,s=this.props,o=s.points,u=s.baseLine,c=s.isAnimationActive,d=s.animationBegin,f=s.animationDuration,h=s.animationEasing,x=s.animationId,b=this.state,A=b.prevPoints,p=b.prevBaseLine;return m.createElement(it,{begin:d,duration:f,isActive:c,easing:h,from:{t:0},to:{t:1},key:"area-".concat(x),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var j=v.t;if(A){var N=A.length/o.length,y=o.map(function(O,S){var z=Math.floor(S*N);if(A[z]){var C=A[z],K=V(C.x,O.x),q=V(C.y,O.y);return $($({},O),{},{x:K(j),y:q(j)})}return O}),g;if(_(u)&&typeof u=="number"){var w=V(p,u);g=w(j)}else if(xe(u)||st(u)){var P=V(p,0);g=P(j)}else g=u.map(function(O,S){var z=Math.floor(S*N);if(p[z]){var C=p[z],K=V(C.x,O.x),q=V(C.y,O.y);return $($({},O),{},{x:K(j),y:q(j)})}return O});return l.renderAreaStatically(y,g,r,i)}return m.createElement(X,null,m.createElement("defs",null,m.createElement("clipPath",{id:"animationClipPath-".concat(i)},l.renderClipRect(j))),m.createElement(X,{clipPath:"url(#animationClipPath-".concat(i,")")},l.renderAreaStatically(o,u,r,i)))})}},{key:"renderArea",value:function(r,i){var l=this.props,s=l.points,o=l.baseLine,u=l.isAnimationActive,c=this.state,d=c.prevPoints,f=c.prevBaseLine,h=c.totalLength;return u&&s&&s.length&&(!d&&h>0||!ye(d,s)||!ye(f,o))?this.renderAreaWithAnimation(r,i):this.renderAreaStatically(s,o,r,i)}},{key:"render",value:function(){var r,i=this.props,l=i.hide,s=i.dot,o=i.points,u=i.className,c=i.top,d=i.left,f=i.xAxis,h=i.yAxis,x=i.width,b=i.height,A=i.isAnimationActive,p=i.id;if(l||!o||!o.length)return null;var v=this.state.isAnimationFinished,j=o.length===1,N=Ne("recharts-area",u),y=f&&f.allowDataOverflow,g=h&&h.allowDataOverflow,w=y||g,P=xe(p)?this.id:p,O=(r=B(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},S=O.r,z=S===void 0?3:S,C=O.strokeWidth,K=C===void 0?2:C,q=lt(s)?s:{},ue=q.clipDot,he=ue===void 0?!0:ue,Q=z*2+K;return m.createElement(X,{className:N},y||g?m.createElement("defs",null,m.createElement("clipPath",{id:"clipPath-".concat(P)},m.createElement("rect",{x:y?d:d-x/2,y:g?c:c-b/2,width:y?x:x*2,height:g?b:b*2})),!he&&m.createElement("clipPath",{id:"clipPath-dots-".concat(P)},m.createElement("rect",{x:d-Q/2,y:c-Q/2,width:x+Q,height:b+Q}))):null,j?null:this.renderArea(w,P),(s||j)&&this.renderDots(w,he,P),(!A||v)&&Ee.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:r.points!==i.curPoints||r.baseLine!==i.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}]),t}(M.PureComponent);ze=T;D(T,"displayName","Area");D(T,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!ot.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});D(T,"getBaseValue",function(e,t,n,r){var i=e.layout,l=e.baseValue,s=t.props.baseValue,o=s??l;if(_(o)&&typeof o=="number")return o;var u=i==="horizontal"?r:n,c=u.scale.domain();if(u.type==="number"){var d=Math.max(c[0],c[1]),f=Math.min(c[0],c[1]);return o==="dataMin"?f:o==="dataMax"||d<0?d:Math.max(Math.min(c[0],c[1]),0)}return o==="dataMin"?c[0]:o==="dataMax"?c[1]:c[0]});D(T,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,i=e.yAxis,l=e.xAxisTicks,s=e.yAxisTicks,o=e.bandSize,u=e.dataKey,c=e.stackedData,d=e.dataStartIndex,f=e.displayedData,h=e.offset,x=t.layout,b=c&&c.length,A=ze.getBaseValue(t,n,r,i),p=x==="horizontal",v=!1,j=f.map(function(y,g){var w;b?w=c[d+g]:(w=pe(y,u),Array.isArray(w)?v=!0:w=[A,w]);var P=w[1]==null||b&&pe(y,u)==null;return p?{x:ge({axis:r,ticks:l,bandSize:o,entry:y,index:g}),y:P?null:i.scale(w[1]),value:w,payload:y}:{x:P?null:r.scale(w[1]),y:ge({axis:i,ticks:s,bandSize:o,entry:y,index:g}),value:w,payload:y}}),N;return b||v?N=j.map(function(y){var g=Array.isArray(y.value)?y.value[0]:null;return p?{x:y.x,y:g!=null&&y.y!=null?i.scale(g):null}:{x:g!=null?r.scale(g):null,y:y.y}}):N=p?i.scale(A):r.scale(A),$({points:j,baseLine:N,layout:x,isRange:v},h)});D(T,"renderDotItem",function(e,t){var n;if(m.isValidElement(e))n=m.cloneElement(e,t);else if(G(e))n=e(t);else{var r=Ne("recharts-area-dot",typeof e!="boolean"?e.className:"");n=m.createElement(ct,R({},t,{className:r}))}return n});var Wt=dt({chartName:"AreaChart",GraphicalChild:T,axisComponents:[{axisType:"xAxis",AxisComp:le},{axisType:"yAxis",AxisComp:ut}],formatAxisMap:ht});const Gt={light:"",dark:".dark"},Te=M.createContext(null);function $e(){const e=M.useContext(Te);if(!e)throw new Error("useChart must be used within a <ChartContainer />");return e}const ce=M.forwardRef(({id:e,className:t,children:n,config:r,...i},l)=>{const s=M.useId(),o=`chart-${e||s.replace(/:/g,"")}`;return a.jsx(Te.Provider,{value:{config:r},children:a.jsxs("div",{"data-chart":o,ref:l,className:L("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",t),...i,children:[a.jsx(Ht,{id:o,config:r}),a.jsx(ft,{children:n})]})})});ce.displayName="Chart";const Ht=({id:e,config:t})=>{const n=Object.entries(t).filter(([r,i])=>i.theme||i.color);return n.length?a.jsx("style",{dangerouslySetInnerHTML:{__html:Object.entries(Gt).map(([r,i])=>`
${i} [data-chart=${e}] {
${n.map(([l,s])=>{var u;const o=((u=s.theme)==null?void 0:u[r])||s.color;return o?`  --color-${l}: ${o};`:null}).join(`
`)}
}
`).join(`
`)}}):null},Me=mt,de=M.forwardRef(({active:e,payload:t,className:n,indicator:r="dot",hideLabel:i=!1,hideIndicator:l=!1,label:s,labelFormatter:o,labelClassName:u,formatter:c,color:d,nameKey:f,labelKey:h},x)=>{const{config:b}=$e(),A=M.useMemo(()=>{var g;if(i||!(t!=null&&t.length))return null;const[v]=t,j=`${h||v.dataKey||v.name||"value"}`,N=ae(b,v,j),y=!h&&typeof s=="string"?((g=b[s])==null?void 0:g.label)||s:N==null?void 0:N.label;return o?a.jsx("div",{className:L("font-medium",u),children:o(y,t)}):y?a.jsx("div",{className:L("font-medium",u),children:y}):null},[s,o,t,i,u,b,h]);if(!e||!(t!=null&&t.length))return null;const p=t.length===1&&r!=="dot";return a.jsxs("div",{ref:x,className:L("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",n),children:[p?null:A,a.jsx("div",{className:"grid gap-1.5",children:t.map((v,j)=>{const N=`${f||v.name||v.dataKey||"value"}`,y=ae(b,v,N),g=d||v.payload.fill||v.color;return a.jsx("div",{className:L("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",r==="dot"&&"items-center"),children:c&&(v==null?void 0:v.value)!==void 0&&v.name?c(v.value,v.name,v,j,v.payload):a.jsxs(a.Fragment,{children:[y!=null&&y.icon?a.jsx(y.icon,{}):!l&&a.jsx("div",{className:L("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":r==="dot","w-1":r==="line","w-0 border-[1.5px] border-dashed bg-transparent":r==="dashed","my-0.5":p&&r==="dashed"}),style:{"--color-bg":g,"--color-border":g}}),a.jsxs("div",{className:L("flex flex-1 justify-between leading-none",p?"items-end":"items-center"),children:[a.jsxs("div",{className:"grid gap-1.5",children:[p?A:null,a.jsx("span",{className:"text-muted-foreground",children:(y==null?void 0:y.label)||v.name})]}),v.value&&a.jsx("span",{className:"font-mono font-medium tabular-nums text-foreground",children:v.value.toLocaleString()})]})]})},v.dataKey)})})]})});de.displayName="ChartTooltip";const Kt=M.forwardRef(({className:e,hideIcon:t=!1,payload:n,verticalAlign:r="bottom",nameKey:i},l)=>{const{config:s}=$e();return n!=null&&n.length?a.jsx("div",{ref:l,className:L("flex items-center justify-center gap-4",r==="top"?"pb-3":"pt-3",e),children:n.map(o=>{const u=`${i||o.dataKey||"value"}`,c=ae(s,o,u);return a.jsxs("div",{className:L("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[c!=null&&c.icon&&!t?a.jsx(c.icon,{}):a.jsx("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:o.color}}),c==null?void 0:c.label]},o.value)})}):null});Kt.displayName="ChartLegend";function ae(e,t,n){if(typeof t!="object"||t===null)return;const r="payload"in t&&typeof t.payload=="object"&&t.payload!==null?t.payload:void 0;let i=n;return n in t&&typeof t[n]=="string"?i=t[n]:r&&n in r&&typeof r[n]=="string"&&(i=r[n]),i in e?e[i]:e[n]}const qt={desktop:{label:"income",color:"hsl(var(--chart-1))"},mobile:{label:"expense",color:"hsl(var(--chart-2))"}};function Xt({chartData:e}){var t,n;return a.jsxs(E,{children:[a.jsx(ie,{children:a.jsx(Be,{className:"text-md font-normal",children:"Income vs Expense"})}),a.jsx(se,{children:a.jsx(ce,{config:qt,children:a.jsxs(Wt,{accessibilityLayer:!0,data:e,margin:{left:12,right:12},children:[a.jsx(oe,{vertical:!1}),a.jsx(le,{dataKey:"full_name",tickLine:!1,axisLine:!1,tickMargin:8,tickFormatter:r=>r.slice(0,3)}),a.jsx(Me,{cursor:!1,content:a.jsx(de,{indicator:"dot"})}),a.jsx(T,{dataKey:"expense",type:"natural",fill:"var(--color-mobile)",fillOpacity:.4,stroke:"var(--color-mobile)",stackId:"a"}),a.jsx(T,{dataKey:"income",type:"natural",fill:"var(--color-desktop)",fillOpacity:.4,stroke:"var(--color-desktop)",stackId:"a"})]})})}),a.jsx(ke,{children:a.jsx("div",{className:"flex w-full items-start gap-2 text-sm",children:a.jsx("div",{className:"grid gap-2",children:a.jsxs("div",{className:"flex items-center gap-2 leading-none text-muted-foreground",children:[(t=e[0])==null?void 0:t.full_name," - ",(n=e[e.length-1])==null?void 0:n.full_name]})})})})]})}const Yt=({tableData:e})=>a.jsx("div",{children:a.jsxs(Ie,{children:[a.jsx(Re,{children:a.jsxs(fe,{children:[a.jsx(ee,{children:"Date"}),a.jsx(ee,{children:"Account Code"}),a.jsx(ee,{children:"Amount"})]})}),a.jsx(Fe,{children:e.slice(0,10).map(t=>a.jsxs(fe,{children:[a.jsx(te,{children:t.date}),a.jsx(te,{children:t.entry_number}),a.jsx(te,{children:t.total})]},t.id))})]})}),Qt=()=>{const e=Ve(),{data:t,isLoading:n}=We("per_page=1000&page=1"),r=(t==null?void 0:t.data)||[];return n?a.jsx(Ge,{}):a.jsx(a.Fragment,{children:a.jsxs(E,{className:"p-3",children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h2",{className:"text-md ml-0 px-2",children:"Recent Transaction"})," ",a.jsxs("div",{className:"flex items-center  cursor-pointer",children:[a.jsx("h2",{onClick:()=>e("/accounts/reports/transaction"),children:"View All "})," ",a.jsx(He,{size:16})]})]}),r&&a.jsx("div",{children:a.jsx(Yt,{tableData:r})})]})})},Ut=Ke.injectEndpoints({endpoints:e=>({getDashboardSummaries:e.query({query:t=>`reports/summery?${t}`,providesTags:["dashboard-summery"]})}),overrideExisting:!1}),{useGetDashboardSummariesQuery:Zt}=Ut,Jt={desktop:{label:"Desktop",color:"hsl(var(--chart-1))"}};function er({chartData:e}){var t,n;return a.jsxs(E,{children:[a.jsx(ie,{}),a.jsx(se,{children:a.jsx(ce,{config:Jt,children:a.jsxs(vt,{accessibilityLayer:!0,data:e,margin:{top:20,right:12,bottom:20,left:12},children:[a.jsx(oe,{vertical:!1}),a.jsx(le,{dataKey:"full_name",tickLine:!1,tickMargin:10,axisLine:!1,tickFormatter:r=>r.slice(0,3)}),a.jsx(Me,{cursor:!1,content:a.jsx(de,{hideLabel:!0})}),a.jsx(xt,{dataKey:"sales",fill:"var(--color-desktop)",radius:8,children:a.jsx(Ee,{position:"top",offset:12,className:"fill-foreground",fontSize:12})})]})})}),a.jsx(ke,{className:"flex-col items-start gap-2 text-sm",children:a.jsxs("div",{className:"flex gap-2 font-medium leading-none",children:[(t=e[0])==null?void 0:t.full_name," - ",(n=e[e.length-1])==null?void 0:n.full_name]})})]})}const ir=()=>{var u,c,d,f,h,x;const[e,t]=m.useState(new Date),[n,r]=m.useState(new Date),i=me(e||new Date,"yyyy-MM-dd"),l=me(n||new Date,"yyyy-MM-dd"),{data:s}=Zt(`start_date=${i||""}&end_date=${l||""}`),o=(s==null?void 0:s.data)||[];return a.jsx("div",{className:"flex h-full flex-col",children:a.jsxs("div",{className:"flex-1 space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between space-y-2",children:[a.jsx("h2",{className:"text-xl tracking-tight",children:"Accounts Dashboard"}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(qe,{setStartDate:t,setEndDate:r}),a.jsx(Xe,{size:"sm",children:"Download"})]})]}),a.jsx(Ue,{defaultValue:"overview",className:"space-y-4",children:a.jsx(Ze,{value:"overview",className:"space-y-4",children:a.jsxs("div",{className:"grid grid-cols-5 gap-3",children:[a.jsxs("div",{className:"col-span-3",children:[a.jsxs("div",{className:"",children:[a.jsxs(E,{className:"p-3",children:[a.jsx("div",{className:"flex justify-between mb-2",children:a.jsx("h3",{className:"text-md ",children:"Growth Pluses"})}),a.jsxs("div",{className:"grid gap-3 md:grid-cols-2 lg:grid-cols-3",children:[a.jsxs(E,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-2 rounded-md bg-blue-200",children:a.jsx(pt,{size:16})}),a.jsxs("div",{className:"ml-3 text-lg font-bold",children:[((u=s==null?void 0:s.growth)==null?void 0:u.income)||0," BDT"]})]}),a.jsx("h2",{className:"mt-2 text-sm",children:"Total Income"})]}),a.jsxs(E,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-2 rounded-md bg-red-200",children:a.jsx(bt,{size:16})}),a.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",((c=s==null?void 0:s.growth)==null?void 0:c.expence)||0," BDT"]})]}),a.jsx("h2",{className:"mt-2 text-sm",children:"Total Expense"})]}),a.jsxs(E,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-2 rounded-md bg-green-200",children:a.jsx(gt,{size:16})}),a.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",((d=s==null?void 0:s.growth)==null?void 0:d.net_profit)||0," BDT"]})]}),a.jsx("h2",{className:"mt-2 text-sm",children:"Net Profit"})]})]})]}),a.jsxs(E,{className:"p-3 mt-3",children:[a.jsx("div",{className:"flex justify-between mb-2",children:a.jsx("h3",{children:"Revenue Projection"})}),a.jsxs("div",{className:"grid gap-3 md:grid-cols-2 lg:grid-cols-3",children:[a.jsxs(E,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-2 rounded-md bg-green-200",children:a.jsx(Ye,{size:16})}),a.jsxs("div",{className:"ml-3 text-lg font-bold",children:[((f=s==null?void 0:s.revenue)==null?void 0:f.accounts_receivable)||0," BDT"]})]}),a.jsx("h2",{className:"mt-2 text-sm",children:"Total Receivable"})]}),a.jsxs(E,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-2 rounded-md bg-red-200",children:a.jsx(Qe,{size:16})}),a.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",(h=s==null?void 0:s.revenue)==null?void 0:h.accounts_payable," BDT"]})]}),a.jsx("h2",{className:"mt-2 text-sm",children:"Total Payable"})]}),a.jsxs(E,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-2 rounded-md bg-blue-200",children:a.jsx(yt,{size:16})}),a.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",(x=s==null?void 0:s.revenue)==null?void 0:x.difference," BDT"]})]}),a.jsx("h2",{className:"mt-2 text-sm",children:"Difference"})]})]})]})]}),a.jsxs(E,{className:"mt-3",children:[a.jsx(ie,{children:a.jsx("h2",{className:"text-md ",children:"Sales per month"})}),a.jsx(se,{className:"pl-2",children:a.jsx(er,{chartData:o})})]})]}),a.jsxs("div",{className:"col-span-2",children:[a.jsx("div",{className:"",children:a.jsx(Xt,{chartData:o})}),a.jsx("div",{className:"mt-3",children:a.jsx(Qt,{})})]})]})})})]})})};export{ir as default};
