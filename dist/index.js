"use strict";var s=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var l=s(function(N,f){
var w=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function O(t,r){return w(r)?x(r,"iter")&&(t.iter=r.iter,!y(r.iter))?new TypeError(o('0aj2t',"iter",r.iter)):null:new TypeError(o('0aj2V',r));}f.exports=O
});var g=s(function(R,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/symbol-iterator/dist'),P=require('@stdlib/math-base-assert-is-prime/dist'),E=l(),T=0xdefddd2d1d18;function c(t){var r,e,v,a,i,n;if(r={iter:T},arguments.length&&(a=E(r,t),a))throw a;return n=0,i=1,e={},u(e,"next",q),u(e,"return",p),m&&u(e,m,b),e;function q(){if(n+=1,v||n>r.iter)return{done:!0};if(n<2)return{value:2,done:!1};for(i+=2;P(i)===!1;)i+=2;return{value:i,done:!1}}function p(h){return v=!0,arguments.length?{value:h,done:!0}:{done:!0}}function b(){return c(r)}}d.exports=c
});var j=g();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
