"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=s(function(N,f){
var w=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function O(e,r){return w(r)?x(r,"iter")&&(e.iter=r.iter,!y(r.iter))?new TypeError(o('0aj2t',"iter",r.iter)):null:new TypeError(o('0aj2V',r));}f.exports=O
});var g=s(function(R,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/symbol-iterator/dist'),P=require('@stdlib/math-base-assert-is-prime/dist'),E=l(),T=0xdefddd2d1d18;function c(e){var r,t,v,a,i,n;if(r={iter:T},arguments.length&&(a=E(r,e),a))throw a;return n=0,i=1,t={},u(t,"next",q),u(t,"return",p),m&&u(t,m,b),t;function q(){if(n+=1,v||n>r.iter)return{done:!0};if(n<2)return{value:2,done:!1};for(i+=2;P(i)===!1;)i+=2;return{value:i,done:!1}}function p(h){return v=!0,arguments.length?{value:h,done:!0}:{done:!0}}function b(){return c(r)}}d.exports=c
});var j=g();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
