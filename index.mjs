// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(m){var l,j,p,f,u,a;if(l={iter:0xdefddd2d1d18},arguments.length&&(f=function(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(d("0aj2t","iter",t.iter)):null:new TypeError(d("0aj2V",t))}(l,m),f))throw f;return a=0,u=1,e(j={},"next",(function(){if(a+=1,p||a>l.iter)return{done:!0};if(a<2)return{value:2,done:!1};u+=2;for(;!1===r(u);)u+=2;return{value:u,done:!1}})),e(j,"return",(function(e){if(p=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),t&&e(j,t,(function(){return o(l)})),j}export{o as default};
//# sourceMappingURL=index.mjs.map
