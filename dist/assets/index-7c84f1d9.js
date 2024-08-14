import{c as Z,R as m,M as ge,r as L,x as Ie,a as n,b as z,y as Be,z as Re,B as be,A as ee,D as Fe,E as Ve,F as _,G as je,H as He,J as Ae,N as We,Q as Ge,U as Ke,V as ce,W as te,X as Je,Y as re,Z as Xe,_ as Ye,$ as qe,a0 as Qe,a1 as Ue,C as Ze}from"./index-e05f5e98.js";import{T as et,c as tt}from"./tabs-202a1862.js";import{u as rt,b as at,c as nt,i as C,d as it,e as st,f as W,w as de,g as we,h as Ne,j as Pe,k as ke,l as I,m as lt,L as X,n as Q,o as ae,A as ot,p as V,q as he,r as ct,s as ue,t as dt,v as ht,G as ut,x as fe,y as me,D as ft,z as mt,X as se,Y as Oe,E as vt,C as xt,R as Ce,B as yt,a as pt,T as gt}from"./BarChart-c7cefc2f.js";import"./index-e8e5dbb3.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=Z("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=Z("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=Z("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=Z("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);var Nt=["x1","y1","x2","y2","key"],Pt=["offset"];function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function ve(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,r)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ve(Object(a),!0).forEach(function(r){kt(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ve(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}function kt(t,e,a){return e=Ot(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Ot(t){var e=Ct(t,"string");return F(e)=="symbol"?e:String(e)}function Ct(t,e){if(F(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e||"default");if(F(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},B.apply(this,arguments)}function xe(t,e){if(t==null)return{};var a=Et(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function Et(t,e){if(t==null)return{};var a={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(a[i]=t[i]);return a}var Mt=function(e){var a=e.fill;if(!a||a==="none")return null;var r=e.fillOpacity,i=e.x,s=e.y,l=e.width,o=e.height;return m.createElement("rect",{x:i,y:s,width:l,height:o,stroke:"none",fill:a,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function Ee(t,e){var a;if(m.isValidElement(t))a=m.cloneElement(t,e);else if(W(t))a=t(e);else{var r=e.x1,i=e.y1,s=e.x2,l=e.y2,o=e.key,h=xe(e,Nt),c=I(h,!1);c.offset;var d=xe(c,Pt);a=m.createElement("line",B({},d,{x1:r,y1:i,x2:s,y2:l,fill:"none",key:o}))}return a}function _t(t){var e=t.x,a=t.width,r=t.horizontal,i=r===void 0?!0:r,s=t.horizontalPoints;if(!i||!s||!s.length)return null;var l=s.map(function(o,h){var c=P(P({},t),{},{x1:e,y1:o,x2:e+a,y2:o,key:"line-".concat(h),index:h});return Ee(i,c)});return m.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function zt(t){var e=t.y,a=t.height,r=t.vertical,i=r===void 0?!0:r,s=t.verticalPoints;if(!i||!s||!s.length)return null;var l=s.map(function(o,h){var c=P(P({},t),{},{x1:o,y1:e,x2:o,y2:e+a,key:"line-".concat(h),index:h});return Ee(i,c)});return m.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function St(t){var e=t.horizontalFill,a=t.fillOpacity,r=t.x,i=t.y,s=t.width,l=t.height,o=t.horizontalPoints,h=t.horizontal,c=h===void 0?!0:h;if(!c||!e||!e.length)return null;var d=o.map(function(u){return Math.round(u+i-i)}).sort(function(u,y){return u-y});i!==d[0]&&d.unshift(0);var f=d.map(function(u,y){var b=!d[y+1],A=b?i+l-u:d[y+1]-u;if(A<=0)return null;var p=y%e.length;return m.createElement("rect",{key:"react-".concat(y),y:u,x:r,height:A,width:s,stroke:"none",fill:e[p],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},f)}function Dt(t){var e=t.vertical,a=e===void 0?!0:e,r=t.verticalFill,i=t.fillOpacity,s=t.x,l=t.y,o=t.width,h=t.height,c=t.verticalPoints;if(!a||!r||!r.length)return null;var d=c.map(function(u){return Math.round(u+s-s)}).sort(function(u,y){return u-y});s!==d[0]&&d.unshift(0);var f=d.map(function(u,y){var b=!d[y+1],A=b?s+o-u:d[y+1]-u;if(A<=0)return null;var p=y%r.length;return m.createElement("rect",{key:"react-".concat(y),x:u,y:l,width:A,height:h,stroke:"none",fill:r[p],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},f)}var Lt=function(e,a){var r=e.xAxis,i=e.width,s=e.height,l=e.offset;return we(Ne(P(P(P({},ke.defaultProps),r),{},{ticks:Pe(r,!0),viewBox:{x:0,y:0,width:i,height:s}})),l.left,l.left+l.width,a)},Tt=function(e,a){var r=e.yAxis,i=e.width,s=e.height,l=e.offset;return we(Ne(P(P(P({},ke.defaultProps),r),{},{ticks:Pe(r,!0),viewBox:{x:0,y:0,width:i,height:s}})),l.top,l.top+l.height,a)},H={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Me(t){var e,a,r,i,s,l,o=rt(),h=at(),c=nt(),d=P(P({},t),{},{stroke:(e=t.stroke)!==null&&e!==void 0?e:H.stroke,fill:(a=t.fill)!==null&&a!==void 0?a:H.fill,horizontal:(r=t.horizontal)!==null&&r!==void 0?r:H.horizontal,horizontalFill:(i=t.horizontalFill)!==null&&i!==void 0?i:H.horizontalFill,vertical:(s=t.vertical)!==null&&s!==void 0?s:H.vertical,verticalFill:(l=t.verticalFill)!==null&&l!==void 0?l:H.verticalFill,x:C(t.x)?t.x:c.left,y:C(t.y)?t.y:c.top,width:C(t.width)?t.width:c.width,height:C(t.height)?t.height:c.height}),f=d.x,u=d.y,y=d.width,b=d.height,A=d.syncWithTicks,p=d.horizontalValues,v=d.verticalValues,j=it(),N=st();if(!C(y)||y<=0||!C(b)||b<=0||!C(f)||f!==+f||!C(u)||u!==+u)return null;var x=d.verticalCoordinatesGenerator||Lt,g=d.horizontalCoordinatesGenerator||Tt,w=d.horizontalPoints,k=d.verticalPoints;if((!w||!w.length)&&W(g)){var O=p&&p.length,M=g({yAxis:N?P(P({},N),{},{ticks:O?p:N.ticks}):void 0,width:o,height:h,offset:c},O?!0:A);de(Array.isArray(M),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(F(M),"]")),Array.isArray(M)&&(w=M)}if((!k||!k.length)&&W(x)){var S=v&&v.length,E=x({xAxis:j?P(P({},j),{},{ticks:S?v:j.ticks}):void 0,width:o,height:h,offset:c},S?!0:A);de(Array.isArray(E),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(F(E),"]")),Array.isArray(E)&&(k=E)}return m.createElement("g",{className:"recharts-cartesian-grid"},m.createElement(Mt,{fill:d.fill,fillOpacity:d.fillOpacity,x:d.x,y:d.y,width:d.width,height:d.height}),m.createElement(_t,B({},d,{offset:c,horizontalPoints:w,xAxis:j,yAxis:N})),m.createElement(zt,B({},d,{offset:c,verticalPoints:k,xAxis:j,yAxis:N})),m.createElement(St,B({},d,{horizontalPoints:w})),m.createElement(Dt,B({},d,{verticalPoints:k})))}Me.displayName="CartesianGrid";var $t=["layout","type","stroke","connectNulls","isRange","ref"],_e;function G(t){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(t)}function It(t,e){if(t==null)return{};var a=Bt(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function Bt(t,e){if(t==null)return{};var a={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(a[i]=t[i]);return a}function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},R.apply(this,arguments)}function ye(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,r)}return a}function $(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(a),!0).forEach(function(r){D(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ye(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}function Rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pe(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Se(r.key),r)}}function Ft(t,e,a){return e&&pe(t.prototype,e),a&&pe(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function Vt(t,e,a){return e=U(e),Ht(t,ze()?Reflect.construct(e,a||[],U(t).constructor):e.apply(t,a))}function Ht(t,e){if(e&&(G(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(t)}function ze(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ze=function(){return!!t})()}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},U(t)}function Y(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Wt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ne(t,e)}function ne(t,e){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ne(t,e)}function D(t,e,a){return e=Se(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Se(t){var e=Gt(t,"string");return G(e)=="symbol"?e:String(e)}function Gt(t,e){if(G(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e||"default");if(G(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var T=function(t){Wt(e,t);function e(){var a;Rt(this,e);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return a=Vt(this,e,[].concat(i)),D(Y(a),"state",{isAnimationFinished:!0}),D(Y(a),"id",lt("recharts-area-")),D(Y(a),"handleAnimationEnd",function(){var l=a.props.onAnimationEnd;a.setState({isAnimationFinished:!0}),W(l)&&l()}),D(Y(a),"handleAnimationStart",function(){var l=a.props.onAnimationStart;a.setState({isAnimationFinished:!1}),W(l)&&l()}),a}return Ft(e,[{key:"renderDots",value:function(r,i,s){var l=this.props.isAnimationActive,o=this.state.isAnimationFinished;if(l&&!o)return null;var h=this.props,c=h.dot,d=h.points,f=h.dataKey,u=I(this.props,!1),y=I(c,!0),b=d.map(function(p,v){var j=$($($({key:"dot-".concat(v),r:3},u),y),{},{index:v,cx:p.x,cy:p.y,dataKey:f,value:p.value,payload:p.payload,points:d});return e.renderDotItem(c,j)}),A={clipPath:r?"url(#clipPath-".concat(i?"":"dots-").concat(s,")"):null};return m.createElement(X,R({className:"recharts-area-dots"},A),b)}},{key:"renderHorizontalRect",value:function(r){var i=this.props,s=i.baseLine,l=i.points,o=i.strokeWidth,h=l[0].x,c=l[l.length-1].x,d=r*Math.abs(h-c),f=Q(l.map(function(u){return u.y||0}));return C(s)&&typeof s=="number"?f=Math.max(s,f):s&&Array.isArray(s)&&s.length&&(f=Math.max(Q(s.map(function(u){return u.y||0})),f)),C(f)?m.createElement("rect",{x:h<c?h:h-d,y:0,width:d,height:Math.floor(f+(o?parseInt("".concat(o),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var i=this.props,s=i.baseLine,l=i.points,o=i.strokeWidth,h=l[0].y,c=l[l.length-1].y,d=r*Math.abs(h-c),f=Q(l.map(function(u){return u.x||0}));return C(s)&&typeof s=="number"?f=Math.max(s,f):s&&Array.isArray(s)&&s.length&&(f=Math.max(Q(s.map(function(u){return u.x||0})),f)),C(f)?m.createElement("rect",{x:0,y:h<c?h:h-d,width:f+(o?parseInt("".concat(o),10):1),height:Math.floor(d)}):null}},{key:"renderClipRect",value:function(r){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,i,s,l){var o=this.props,h=o.layout,c=o.type,d=o.stroke,f=o.connectNulls,u=o.isRange;o.ref;var y=It(o,$t);return m.createElement(X,{clipPath:s?"url(#clipPath-".concat(l,")"):null},m.createElement(ae,R({},I(y,!0),{points:r,connectNulls:f,type:c,baseLine:i,layout:h,stroke:"none",className:"recharts-area-area"})),d!=="none"&&m.createElement(ae,R({},I(this.props,!1),{className:"recharts-area-curve",layout:h,type:c,connectNulls:f,fill:"none",points:r})),d!=="none"&&u&&m.createElement(ae,R({},I(this.props,!1),{className:"recharts-area-curve",layout:h,type:c,connectNulls:f,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(r,i){var s=this,l=this.props,o=l.points,h=l.baseLine,c=l.isAnimationActive,d=l.animationBegin,f=l.animationDuration,u=l.animationEasing,y=l.animationId,b=this.state,A=b.prevPoints,p=b.prevBaseLine;return m.createElement(ot,{begin:d,duration:f,isActive:c,easing:u,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var j=v.t;if(A){var N=A.length/o.length,x=o.map(function(O,M){var S=Math.floor(M*N);if(A[S]){var E=A[S],K=V(E.x,O.x),J=V(E.y,O.y);return $($({},O),{},{x:K(j),y:J(j)})}return O}),g;if(C(h)&&typeof h=="number"){var w=V(p,h);g=w(j)}else if(he(h)||ct(h)){var k=V(p,0);g=k(j)}else g=h.map(function(O,M){var S=Math.floor(M*N);if(p[S]){var E=p[S],K=V(E.x,O.x),J=V(E.y,O.y);return $($({},O),{},{x:K(j),y:J(j)})}return O});return s.renderAreaStatically(x,g,r,i)}return m.createElement(X,null,m.createElement("defs",null,m.createElement("clipPath",{id:"animationClipPath-".concat(i)},s.renderClipRect(j))),m.createElement(X,{clipPath:"url(#animationClipPath-".concat(i,")")},s.renderAreaStatically(o,h,r,i)))})}},{key:"renderArea",value:function(r,i){var s=this.props,l=s.points,o=s.baseLine,h=s.isAnimationActive,c=this.state,d=c.prevPoints,f=c.prevBaseLine,u=c.totalLength;return h&&l&&l.length&&(!d&&u>0||!ue(d,l)||!ue(f,o))?this.renderAreaWithAnimation(r,i):this.renderAreaStatically(l,o,r,i)}},{key:"render",value:function(){var r,i=this.props,s=i.hide,l=i.dot,o=i.points,h=i.className,c=i.top,d=i.left,f=i.xAxis,u=i.yAxis,y=i.width,b=i.height,A=i.isAnimationActive,p=i.id;if(s||!o||!o.length)return null;var v=this.state.isAnimationFinished,j=o.length===1,N=ge("recharts-area",h),x=f&&f.allowDataOverflow,g=u&&u.allowDataOverflow,w=x||g,k=he(p)?this.id:p,O=(r=I(l,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},M=O.r,S=M===void 0?3:M,E=O.strokeWidth,K=E===void 0?2:E,J=dt(l)?l:{},le=J.clipDot,oe=le===void 0?!0:le,q=S*2+K;return m.createElement(X,{className:N},x||g?m.createElement("defs",null,m.createElement("clipPath",{id:"clipPath-".concat(k)},m.createElement("rect",{x:x?d:d-y/2,y:g?c:c-b/2,width:x?y:y*2,height:g?b:b*2})),!oe&&m.createElement("clipPath",{id:"clipPath-dots-".concat(k)},m.createElement("rect",{x:d-q/2,y:c-q/2,width:y+q,height:b+q}))):null,j?null:this.renderArea(w,k),(l||j)&&this.renderDots(w,oe,k),(!A||v)&&ht.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:r.points!==i.curPoints||r.baseLine!==i.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}]),e}(L.PureComponent);_e=T;D(T,"displayName","Area");D(T,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!ut.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});D(T,"getBaseValue",function(t,e,a,r){var i=t.layout,s=t.baseValue,l=e.props.baseValue,o=l??s;if(C(o)&&typeof o=="number")return o;var h=i==="horizontal"?r:a,c=h.scale.domain();if(h.type==="number"){var d=Math.max(c[0],c[1]),f=Math.min(c[0],c[1]);return o==="dataMin"?f:o==="dataMax"||d<0?d:Math.max(Math.min(c[0],c[1]),0)}return o==="dataMin"?c[0]:o==="dataMax"?c[1]:c[0]});D(T,"getComposedData",function(t){var e=t.props,a=t.item,r=t.xAxis,i=t.yAxis,s=t.xAxisTicks,l=t.yAxisTicks,o=t.bandSize,h=t.dataKey,c=t.stackedData,d=t.dataStartIndex,f=t.displayedData,u=t.offset,y=e.layout,b=c&&c.length,A=_e.getBaseValue(e,a,r,i),p=y==="horizontal",v=!1,j=f.map(function(x,g){var w;b?w=c[d+g]:(w=fe(x,h),Array.isArray(w)?v=!0:w=[A,w]);var k=w[1]==null||b&&fe(x,h)==null;return p?{x:me({axis:r,ticks:s,bandSize:o,entry:x,index:g}),y:k?null:i.scale(w[1]),value:w,payload:x}:{x:k?null:r.scale(w[1]),y:me({axis:i,ticks:l,bandSize:o,entry:x,index:g}),value:w,payload:x}}),N;return b||v?N=j.map(function(x){var g=Array.isArray(x.value)?x.value[0]:null;return p?{x:x.x,y:g!=null&&x.y!=null?i.scale(g):null}:{x:g!=null?r.scale(g):null,y:x.y}}):N=p?i.scale(A):r.scale(A),$({points:j,baseLine:N,layout:y,isRange:v},u)});D(T,"renderDotItem",function(t,e){var a;if(m.isValidElement(t))a=m.cloneElement(t,e);else if(W(t))a=t(e);else{var r=ge("recharts-area-dot",typeof t!="boolean"?t.className:"");a=m.createElement(ft,R({},e,{className:r}))}return a});var Kt=mt({chartName:"AreaChart",GraphicalChild:T,axisComponents:[{axisType:"xAxis",AxisComp:se},{axisType:"yAxis",AxisComp:Oe}],formatAxisMap:vt});function Jt({className:t}){const[e,a]=L.useState({from:new Date(2023,0,20),to:Ie(new Date(2023,0,20),20)});return n.jsx("div",{className:z("grid gap-2",t),children:n.jsxs(Be,{children:[n.jsx(Re,{asChild:!0,children:n.jsxs(be,{id:"date",variant:"outline",className:z("w-[260px] justify-start text-left font-normal",!e&&"text-muted-foreground"),children:[n.jsx(xt,{size:16,className:"mr-2"}),e!=null&&e.from?e.to?n.jsxs(n.Fragment,{children:[ee(e.from,"LLL dd, y")," -"," ",ee(e.to,"LLL dd, y")]}):ee(e.from,"LLL dd, y"):n.jsx("span",{children:"Pick a date"})]})}),n.jsx(Fe,{className:"w-auto p-0",align:"end",children:n.jsx(Ve,{initialFocus:!0,mode:"range",defaultMonth:e==null?void 0:e.from,selected:e,onSelect:a,numberOfMonths:2})})]})})}const Xt=[{name:"Jan",total:Math.floor(Math.random()*5e3)+1e3},{name:"Feb",total:Math.floor(Math.random()*5e3)+1e3},{name:"Mar",total:Math.floor(Math.random()*5e3)+1e3},{name:"Apr",total:Math.floor(Math.random()*5e3)+1e3},{name:"May",total:Math.floor(Math.random()*5e3)+1e3},{name:"Jun",total:Math.floor(Math.random()*5e3)+1e3},{name:"Jul",total:Math.floor(Math.random()*5e3)+1e3},{name:"Aug",total:Math.floor(Math.random()*5e3)+1e3},{name:"Sep",total:Math.floor(Math.random()*5e3)+1e3},{name:"Oct",total:Math.floor(Math.random()*5e3)+1e3},{name:"Nov",total:Math.floor(Math.random()*5e3)+1e3},{name:"Dec",total:Math.floor(Math.random()*5e3)+1e3}];function Yt(){return n.jsx(Ce,{width:"100%",height:350,children:n.jsxs(yt,{data:Xt,children:[n.jsx(se,{dataKey:"name",stroke:"#888888",tickLine:!1,axisLine:!1}),n.jsx(Oe,{stroke:"#888888",tickLine:!1,axisLine:!1,tickFormatter:t=>`$${t}`}),n.jsx(pt,{dataKey:"total",className:"fill-primary",radius:[4,4,0,0]})]})})}const qt={light:"",dark:".dark"},De=L.createContext(null);function Le(){const t=L.useContext(De);if(!t)throw new Error("useChart must be used within a <ChartContainer />");return t}const Te=L.forwardRef(({id:t,className:e,children:a,config:r,...i},s)=>{const l=L.useId(),o=`chart-${t||l.replace(/:/g,"")}`;return n.jsx(De.Provider,{value:{config:r},children:n.jsxs("div",{"data-chart":o,ref:s,className:z("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",e),...i,children:[n.jsx(Qt,{id:o,config:r}),n.jsx(Ce,{children:a})]})})});Te.displayName="Chart";const Qt=({id:t,config:e})=>{const a=Object.entries(e).filter(([r,i])=>i.theme||i.color);return a.length?n.jsx("style",{dangerouslySetInnerHTML:{__html:Object.entries(qt).map(([r,i])=>`
${i} [data-chart=${t}] {
${a.map(([s,l])=>{var h;const o=((h=l.theme)==null?void 0:h[r])||l.color;return o?`  --color-${s}: ${o};`:null}).join(`
`)}
}
`).join(`
`)}}):null},Ut=gt,$e=L.forwardRef(({active:t,payload:e,className:a,indicator:r="dot",hideLabel:i=!1,hideIndicator:s=!1,label:l,labelFormatter:o,labelClassName:h,formatter:c,color:d,nameKey:f,labelKey:u},y)=>{const{config:b}=Le(),A=L.useMemo(()=>{var g;if(i||!(e!=null&&e.length))return null;const[v]=e,j=`${u||v.dataKey||v.name||"value"}`,N=ie(b,v,j),x=!u&&typeof l=="string"?((g=b[l])==null?void 0:g.label)||l:N==null?void 0:N.label;return o?n.jsx("div",{className:z("font-medium",h),children:o(x,e)}):x?n.jsx("div",{className:z("font-medium",h),children:x}):null},[l,o,e,i,h,b,u]);if(!t||!(e!=null&&e.length))return null;const p=e.length===1&&r!=="dot";return n.jsxs("div",{ref:y,className:z("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",a),children:[p?null:A,n.jsx("div",{className:"grid gap-1.5",children:e.map((v,j)=>{const N=`${f||v.name||v.dataKey||"value"}`,x=ie(b,v,N),g=d||v.payload.fill||v.color;return n.jsx("div",{className:z("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",r==="dot"&&"items-center"),children:c&&(v==null?void 0:v.value)!==void 0&&v.name?c(v.value,v.name,v,j,v.payload):n.jsxs(n.Fragment,{children:[x!=null&&x.icon?n.jsx(x.icon,{}):!s&&n.jsx("div",{className:z("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":r==="dot","w-1":r==="line","w-0 border-[1.5px] border-dashed bg-transparent":r==="dashed","my-0.5":p&&r==="dashed"}),style:{"--color-bg":g,"--color-border":g}}),n.jsxs("div",{className:z("flex flex-1 justify-between leading-none",p?"items-end":"items-center"),children:[n.jsxs("div",{className:"grid gap-1.5",children:[p?A:null,n.jsx("span",{className:"text-muted-foreground",children:(x==null?void 0:x.label)||v.name})]}),v.value&&n.jsx("span",{className:"font-mono font-medium tabular-nums text-foreground",children:v.value.toLocaleString()})]})]})},v.dataKey)})})]})});$e.displayName="ChartTooltip";const Zt=L.forwardRef(({className:t,hideIcon:e=!1,payload:a,verticalAlign:r="bottom",nameKey:i},s)=>{const{config:l}=Le();return a!=null&&a.length?n.jsx("div",{ref:s,className:z("flex items-center justify-center gap-4",r==="top"?"pb-3":"pt-3",t),children:a.map(o=>{const h=`${i||o.dataKey||"value"}`,c=ie(l,o,h);return n.jsxs("div",{className:z("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[c!=null&&c.icon&&!e?n.jsx(c.icon,{}):n.jsx("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:o.color}}),c==null?void 0:c.label]},o.value)})}):null});Zt.displayName="ChartLegend";function ie(t,e,a){if(typeof e!="object"||e===null)return;const r="payload"in e&&typeof e.payload=="object"&&e.payload!==null?e.payload:void 0;let i=a;return a in e&&typeof e[a]=="string"?i=e[a]:r&&a in r&&typeof r[a]=="string"&&(i=r[a]),i in t?t[i]:t[a]}const er=[{month:"January",income:186,expense:80},{month:"February",income:305,expense:200},{month:"March",income:237,expense:120},{month:"April",income:73,expense:190},{month:"May",income:209,expense:130},{month:"June",income:214,expense:140}],tr={desktop:{label:"Income",color:"hsl(var(--chart-1))"},mobile:{label:"Expense",color:"hsl(var(--chart-2))"}};function rr(){return n.jsxs(_,{children:[n.jsx(je,{children:n.jsx(He,{className:"text-md font-normal",children:"Income vs Expense"})}),n.jsx(Ae,{children:n.jsx(Te,{config:tr,children:n.jsxs(Kt,{accessibilityLayer:!0,data:er,margin:{left:12,right:12},children:[n.jsx(Me,{vertical:!1}),n.jsx(se,{dataKey:"month",tickLine:!1,axisLine:!1,tickMargin:8,tickFormatter:t=>t.slice(0,3)}),n.jsx(Ut,{cursor:!1,content:n.jsx($e,{indicator:"dot"})}),n.jsx(T,{dataKey:"income",type:"natural",fill:"var(--color-mobile)",fillOpacity:.4,stroke:"var(--color-mobile)",stackId:"a"}),n.jsx(T,{dataKey:"expense",type:"natural",fill:"var(--color-desktop)",fillOpacity:.4,stroke:"var(--color-desktop)",stackId:"a"})]})})}),n.jsx(We,{children:n.jsx("div",{className:"flex w-full items-start gap-2 text-sm",children:n.jsx("div",{className:"grid gap-2",children:n.jsx("div",{className:"flex items-center gap-2 leading-none text-muted-foreground",children:"January - June 2024"})})})})]})}const ar=({tableData:t})=>n.jsx("div",{children:n.jsxs(Ge,{children:[n.jsx(Ke,{children:n.jsxs(ce,{children:[n.jsx(te,{children:"Date"}),n.jsx(te,{children:"Account Code"}),n.jsx(te,{children:"Amount"})]})}),n.jsx(Je,{children:t.slice(0,10).map(e=>n.jsxs(ce,{children:[n.jsx(re,{children:e.date}),n.jsx(re,{children:e.entry_number}),n.jsx(re,{children:e.total})]},e.id))})]})}),nr=()=>{const t=Xe(),{data:e,isLoading:a}=Ye("per_page=1000&page=1"),r=(e==null?void 0:e.data)||[];return a?n.jsx(qe,{}):n.jsx(n.Fragment,{children:n.jsxs(_,{className:"p-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("h2",{className:"text-md ml-0 px-2",children:"Recent Transaction"})," ",n.jsxs("div",{className:"flex items-center  cursor-pointer",children:[n.jsx("h2",{onClick:()=>t("/accounts/reports/transaction"),children:"View All "})," ",n.jsx(Qe,{size:16})]})]}),r&&n.jsx("div",{children:n.jsx(ar,{tableData:r})})]})})},cr=()=>n.jsx("div",{className:"flex h-full flex-col",children:n.jsxs("div",{className:"flex-1 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between space-y-2",children:[n.jsx("h2",{className:"text-xl tracking-tight",children:"Accounts Dashboard"}),n.jsxs("div",{className:"flex items-center space-x-2",children:[n.jsx(Jt,{}),n.jsx(be,{size:"sm",children:"Download"})]})]}),n.jsx(et,{defaultValue:"overview",className:"space-y-4",children:n.jsxs(tt,{value:"overview",className:"space-y-4",children:[n.jsxs("div",{className:"grid grid-cols-5 gap-3",children:[n.jsxs("div",{className:" col-span-3",children:[n.jsxs(_,{className:"p-3",children:[n.jsx("div",{className:"flex justify-between mb-2",children:n.jsx("h3",{className:"text-md ",children:"Growth Pluses"})}),n.jsxs("div",{className:"grid gap-3 md:grid-cols-2 lg:grid-cols-3",children:[n.jsxs(_,{className:"p-4",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"p-2 rounded-md bg-blue-200",children:n.jsx(jt,{size:16})}),n.jsx("div",{className:"ml-3 text-lg font-bold",children:"2334543 BDT"})]}),n.jsx("h2",{className:"mt-2 text-sm",children:"Total Income"})]}),n.jsxs(_,{className:"p-4",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"p-2 rounded-md bg-red-200",children:n.jsx(wt,{size:16})}),n.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ","2334543 BDT"]})]}),n.jsx("h2",{className:"mt-2 text-sm",children:"Total Expense"})]}),n.jsxs(_,{className:"p-4",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"p-2 rounded-md bg-green-200",children:n.jsx(At,{size:16})}),n.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ","24543 BDT"]})]}),n.jsx("h2",{className:"mt-2 text-sm",children:"Net Profit"})]})]})]}),n.jsxs(_,{className:"p-3 mt-3",children:[n.jsx("div",{className:"flex justify-between mb-2",children:n.jsx("h3",{children:"Revenue Projection"})}),n.jsxs("div",{className:"grid gap-3 md:grid-cols-2 lg:grid-cols-3",children:[n.jsxs(_,{className:"p-4",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"p-2 rounded-md bg-green-200",children:n.jsx(Ue,{size:16})}),n.jsx("div",{className:"ml-3 text-lg font-bold",children:"2334543 BDT"})]}),n.jsx("h2",{className:"mt-2 text-sm",children:"Total Receivable"})]}),n.jsxs(_,{className:"p-4",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"p-2 rounded-md bg-red-200",children:n.jsx(Ze,{size:16})}),n.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ","2334543 BDT"]})]}),n.jsx("h2",{className:"mt-2 text-sm",children:"Total Payable"})]}),n.jsxs(_,{className:"p-4",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"p-2 rounded-md bg-blue-200",children:n.jsx(bt,{size:16})}),n.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ","2334543 BDT"]})]}),n.jsx("h2",{className:"mt-2 text-sm",children:"Difference"})]})]})]})]}),n.jsx("div",{className:"col-span-2",children:n.jsx(rr,{})})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-5",children:[n.jsxs(_,{className:"col-span-3",children:[n.jsx(je,{children:n.jsx("h2",{className:"text-md ",children:"Sells per month"})}),n.jsx(Ae,{className:"pl-2",children:n.jsx(Yt,{})})]}),n.jsx("div",{className:"col-span-2",children:n.jsx(nr,{})})]})]})})]})});export{cr as default};
