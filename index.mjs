// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function o(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(d("0aj2t,G9","iter",t.iter)):null:new TypeError(d("0aj2V,FD",t))}function m(n){var s,i,d,l,j,p;if(s={iter:0xdefddd2d1d18},arguments.length&&(l=o(s,n)))throw l;return p=0,j=1,e(i={},"next",a),e(i,"return",f),t&&e(i,t,u),i;function a(){if(p+=1,d||p>s.iter)return{done:!0};if(p<2)return{value:2,done:!1};for(j+=2;!1===r(j);)j+=2;return{value:j,done:!1}}function f(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return m(s)}}export{m as default};
//# sourceMappingURL=index.mjs.map
