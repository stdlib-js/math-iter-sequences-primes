// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function d(e,t){return r(t)?i(t,"iter")&&(e.iter=t.iter,!s(t.iter))?new TypeError(o("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(o("invalid argument. Options argument must be an object. Value: `%s`.",t))}function m(r){var i,s,o,l,a,p;if(i={iter:0xdefddd2d1d18},arguments.length&&(l=d(i,r)))throw l;return p=0,a=1,e(s={},"next",u),e(s,"return",j),t&&e(s,t,v),s;function u(){if(p+=1,o||p>i.iter)return{done:!0};if(p<2)return{value:2,done:!1};for(a+=2;!1===n(a);)a+=2;return{value:a,done:!1}}function j(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return m(i)}}export{m as default};
//# sourceMappingURL=index.mjs.map