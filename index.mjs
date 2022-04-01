// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var d=n,m=i,a=s.isPrimitive,l=o;var p=e,u=t,j=r,f=function(e,t){return d(t)?m(t,"iter")&&(e.iter=t.iter,!a(t.iter))?new TypeError(l("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",t))};var h=function e(t){var r,n,i,s,o,d;if(r={iter:0xdefddd2d1d18},arguments.length&&(s=f(r,t)))throw s;return d=0,o=1,p(n={},"next",m),p(n,"return",a),u&&p(n,u,l),n;function m(){if(d+=1,i||d>r.iter)return{done:!0};if(d<2)return{value:2,done:!1};for(o+=2;!1===j(o);)o+=2;return{value:o,done:!1}}function a(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(r)}},v=h;export{v as default};
//# sourceMappingURL=index.mjs.map
