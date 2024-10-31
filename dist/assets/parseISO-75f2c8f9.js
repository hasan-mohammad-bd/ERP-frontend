import{bL as m,bM as D}from"./index-464ea72c.js";function F(t,e){const r=(e==null?void 0:e.additionalDigits)??2,n=U(t);let a;if(n.date){const i=w(n.date,r);a=h(i.restDateString,i.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);const s=a.getTime();let o=0,u;if(n.time&&(o=C(n.time),isNaN(o)))return new Date(NaN);if(n.timezone){if(u=I(n.timezone),isNaN(u))return new Date(NaN)}else{const i=new Date(s+o),c=new Date(0);return c.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),c.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),c}return new Date(s+o+u)}const f={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},p=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,g=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,T=/^([+-])(\d{2})(?::?(\d{2}))?$/;function U(t){const e={},r=t.split(f.dateTimeDelimiter);let n;if(r.length>2)return e;if(/:/.test(r[0])?n=r[0]:(e.date=r[0],n=r[1],f.timeZoneDelimiter.test(e.date)&&(e.date=t.split(f.timeZoneDelimiter)[0],n=t.substr(e.date.length,t.length))),n){const a=f.timezone.exec(n);a?(e.time=n.replace(a[1],""),e.timezone=a[1]):e.time=n}return e}function w(t,e){const r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(r);if(!n)return{year:NaN,restDateString:""};const a=n[1]?parseInt(n[1]):null,s=n[2]?parseInt(n[2]):null;return{year:s===null?a:s*100,restDateString:t.slice((n[1]||n[2]).length)}}function h(t,e){if(e===null)return new Date(NaN);const r=t.match(p);if(!r)return new Date(NaN);const n=!!r[4],a=l(r[1]),s=l(r[2])-1,o=l(r[3]),u=l(r[4]),i=l(r[5])-1;if(n)return M(e,u,i)?x(e,u,i):new Date(NaN);{const c=new Date(0);return!y(e,s,o)||!z(e,a)?new Date(NaN):(c.setUTCFullYear(e,s,Math.max(a,o)),c)}}function l(t){return t?parseInt(t):1}function C(t){const e=t.match(g);if(!e)return NaN;const r=d(e[1]),n=d(e[2]),a=d(e[3]);return O(r,n,a)?r*m+n*D+a*1e3:NaN}function d(t){return t&&parseFloat(t.replace(",","."))||0}function I(t){if(t==="Z")return 0;const e=t.match(T);if(!e)return 0;const r=e[1]==="+"?-1:1,n=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return Z(n,a)?r*(n*m+a*D):NaN}function x(t,e,r){const n=new Date(0);n.setUTCFullYear(t,0,4);const a=n.getUTCDay()||7,s=(e-1)*7+r+1-a;return n.setUTCDate(n.getUTCDate()+s),n}const Y=[31,null,31,30,31,30,31,31,30,31,30,31];function N(t){return t%400===0||t%4===0&&t%100!==0}function y(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(Y[e]||(N(t)?29:28))}function z(t,e){return e>=1&&e<=(N(t)?366:365)}function M(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}function O(t,e,r){return t===24?e===0&&r===0:r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}function Z(t,e){return e>=0&&e<=59}export{F as p};
