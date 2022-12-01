// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(d("0IH35","iter",t.iter)):null:new TypeError(d("0IH2h",t))}function m(n){var s,i,d,l,p,j;if(s={iter:0xdefddd2d1d18},arguments.length&&(l=o(s,n)))throw l;return j=0,p=1,e(i={},"next",f),e(i,"return",h),t&&e(i,t,u),i;function f(){if(j+=1,d||j>s.iter)return{done:!0};if(j<2)return{value:2,done:!1};for(p+=2;!1===r(p);)p+=2;return{value:p,done:!1}}function h(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return m(s)}}export{m as default};
//# sourceMappingURL=index.mjs.map
