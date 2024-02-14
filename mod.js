// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function n(r,e,i){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=i?r+t(a):t(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=n(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=n(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(r){return"string"==typeof r}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),r.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):u.call(t)}function E(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function x(r,e,i){var t=e-r.length;return t<0?r:r=i?r+E(t):E(t)+r}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,i,t,a,o,p,u,l,f;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",u=1,l=0;l<r.length;l++)if(s(t=r[l]))p+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,S(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",u+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,i,t,n;for(i=[],n=0,t=$.exec(r);t;)(e=r.slice(n,$.lastIndex-t[0].length)).length&&i.push(e),i.push(F(t)),n=$.lastIndex,t=$.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function _(r){return"string"==typeof r}function O(r){var e,i;if(!_(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return j.apply(null,e)}var A,C=Object.prototype,R=C.toString,Z=C.__defineGetter__,P=C.__defineSetter__,N=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=C,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,i.get),o&&P&&P.call(r,e,i.set),r};var L=A;function G(r,e,i){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&U.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0;var B="function"==typeof M&&"symbol"==typeof M("foo")&&X(M,"iterator")&&"symbol"==typeof M.iterator?Symbol.iterator:null,z=Math.sqrt,Y=Math.floor,q={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};function D(r){var e,i;if(Y(r)!==r)return!1;if(r<=3)return r>1;if(r>9007199254740991||r%2==0)return!1;if(r<9)return!0;if(r%3==0)return!1;if(r%5==0)return!1;if(r%7==0)return!1;if(q[r])return!0;for(e=Y(z(r)),i=11;i<=e;i+=210)if(r%i==0||r%(i+2)==0||r%(i+6)==0||r%(i+8)==0||r%(i+12)==0||r%(i+18)==0||r%(i+20)==0||r%(i+26)==0||r%(i+30)==0||r%(i+32)==0||r%(i+36)==0||r%(i+42)==0||r%(i+48)==0||r%(i+50)==0||r%(i+56)==0||r%(i+60)==0||r%(i+62)==0||r%(i+68)==0||r%(i+72)==0||r%(i+78)==0||r%(i+86)==0||r%(i+90)==0||r%(i+92)==0||r%(i+96)==0||r%(i+98)==0||r%(i+102)==0||r%(i+110)==0||r%(i+116)==0||r%(i+120)==0||r%(i+126)==0||r%(i+128)==0||r%(i+132)==0||r%(i+138)==0||r%(i+140)==0||r%(i+146)==0||r%(i+152)==0||r%(i+156)==0||r%(i+158)==0||r%(i+162)==0||r%(i+168)==0||r%(i+170)==0||r%(i+176)==0||r%(i+180)==0||r%(i+182)==0||r%(i+186)==0||r%(i+188)==0||r%(i+198)==0||r%(i+200)==0)return!1;return!0}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return H&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q="function"==typeof M?M.toStringTag:"";var rr=J()?function(r){var e,i,t;if(null==r)return K.call(r);i=r[Q],e=X(r,Q);try{r[Q]=void 0}catch(e){return K.call(r)}return t=K.call(r),e?r[Q]=i:delete r[Q],t}:function(r){return K.call(r)};var er=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var ir=/./;function tr(r){return"boolean"==typeof r}var nr=Boolean,ar=Boolean.prototype.toString;var or=J();function cr(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function sr(r){return tr(r)||cr(r)}function pr(r){return"number"==typeof r}function ur(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function lr(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+ur(n):ur(n)+r,t&&(r="-"+r)),r}G(sr,"isPrimitive",tr),G(sr,"isObject",cr);var fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase;function dr(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!pr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=lr(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=lr(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===gr.call(r.specifier)?gr.call(i):fr.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function hr(r){return"string"==typeof r}var wr=Math.abs,br=String.prototype.toLowerCase,vr=String.prototype.toUpperCase,yr=String.prototype.replace,mr=/e\+(\d)$/,Er=/e-(\d)$/,xr=/^(\d+)$/,kr=/^(\d+)e/,Sr=/\.0$/,Vr=/\.0*e/,Ir=/(\..*[^0])0*e/;function jr(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":wr(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=yr.call(i,Ir,"$1e"),i=yr.call(i,Vr,"e"),i=yr.call(i,Sr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=yr.call(i,mr,"e+0$1"),i=yr.call(i,Er,"e-0$1"),r.alternate&&(i=yr.call(i,xr,"$1."),i=yr.call(i,kr,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===vr.call(r.specifier)?vr.call(i):br.call(i)}function $r(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function Fr(r,e,i){var t=e-r.length;return t<0?r:r=i?r+$r(t):$r(t)+r}var Tr=String.fromCharCode,_r=isNaN,Or=Array.isArray;function Ar(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Cr(r){var e,i,t,n,a,o,c,s,p;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(hr(t=r[s]))o+=t;else{if(e=void 0!==t.precision,!(t=Ar(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_r(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_r(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=dr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_r(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_r(a)?String(t.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=jr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=lr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Fr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Rr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Zr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Pr(r){var e,i,t,n;for(i=[],n=0,t=Rr.exec(r);t;)(e=r.slice(n,Rr.lastIndex-t[0].length)).length&&i.push(e),i.push(Zr(t)),n=Rr.lastIndex,t=Rr.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function Nr(r){return"string"==typeof r}function Wr(r){var e,i;if(!Nr(r))throw new TypeError(Wr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Pr(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return Cr.apply(null,e)}function Lr(){return new Function("return this;")()}var Gr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Mr="object"==typeof Xr?Xr:null,Br="object"==typeof globalThis?globalThis:null;var zr=function(r){if(arguments.length){if(!tr(r))throw new TypeError(Wr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Lr()}if(Br)return Br;if(Gr)return Gr;if(Ur)return Ur;if(Mr)return Mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=zr.document&&zr.document.childNodes,qr=Int8Array;function Dr(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function Jr(r){return"number"==typeof r}function Kr(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function Qr(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+Kr(n):Kr(n)+r,t&&(r="-"+r)),r}G(Dr,"REGEXP",Hr);var re=String.prototype.toLowerCase,ee=String.prototype.toUpperCase;function ie(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!Jr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=Qr(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=Qr(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===ee.call(r.specifier)?ee.call(i):re.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function te(r){return"string"==typeof r}var ne=Math.abs,ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase,ce=String.prototype.replace,se=/e\+(\d)$/,pe=/e-(\d)$/,ue=/^(\d+)$/,le=/^(\d+)e/,fe=/\.0$/,ge=/\.0*e/,de=/(\..*[^0])0*e/;function he(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!Jr(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":ne(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=ce.call(i,de,"$1e"),i=ce.call(i,ge,"e"),i=ce.call(i,fe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=ce.call(i,se,"e+0$1"),i=ce.call(i,pe,"e-0$1"),r.alternate&&(i=ce.call(i,ue,"$1."),i=ce.call(i,le,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===oe.call(r.specifier)?oe.call(i):ae.call(i)}function we(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function be(r,e,i){var t=e-r.length;return t<0?r:r=i?r+we(t):we(t)+r}var ve=String.fromCharCode,ye=isNaN,me=Array.isArray;function Ee(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function xe(r){var e,i,t,n,a,o,c,s,p;if(!me(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(te(t=r[s]))o+=t;else{if(e=void 0!==t.precision,!(t=Ee(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,ye(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,ye(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ie(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!ye(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ye(a)?String(t.arg):ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=he(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Qr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=be(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var ke=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Se(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ve(r){var e,i,t,n;for(i=[],n=0,t=ke.exec(r);t;)(e=r.slice(n,ke.lastIndex-t[0].length)).length&&i.push(e),i.push(Se(t)),n=ke.lastIndex,t=ke.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function Ie(r){return"string"==typeof r}function je(r){var e,i;if(!Ie(r))throw new TypeError(je("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ve(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return xe.apply(null,e)}function $e(r){return null!==r&&"object"==typeof r}function Fe(r){var e,i,t,n;if(("Object"===(i=rr(r).slice(8,-1))||"Error"===i)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=Hr.exec(t.toString()))return e[1]}return $e(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G($e,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(je("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var i,t;if(!er(e))return!1;if(0===(i=e.length))return!1;for(t=0;t<i;t++)if(!1===r(e[t]))return!1;return!0}}($e));var Te="function"==typeof ir||"object"==typeof qr||"function"==typeof Yr?function(r){return Fe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Fe(r).toLowerCase():e};function _e(r){return"function"===Te(r)}var Oe,Ae=Object,Ce=Object.getPrototypeOf;Oe=_e(Object.getPrototypeOf)?Ce:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Re=Oe;var Ze=Object.prototype;function Pe(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!er(r)}(r)&&(e=function(r){return null==r?null:(r=Ae(r),Re(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&_e(e.constructor)&&"[object Function]"===rr(e.constructor)&&X(e,"isPrototypeOf")&&_e(e.isPrototypeOf)&&(e===Ze||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}function Ne(r){return"number"==typeof r}var We=Number,Le=We.prototype.toString;var Ge=J();function Ue(r){return"object"==typeof r&&(r instanceof We||(Ge?function(r){try{return Le.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Xe(r){return Ne(r)||Ue(r)}G(Xe,"isPrimitive",Ne),G(Xe,"isObject",Ue);var Me=Number.POSITIVE_INFINITY,Be=We.NEGATIVE_INFINITY;function ze(r){return r<Me&&r>Be&&Y(e=r)===e;var e}function Ye(r){return Ne(r)&&ze(r)}function qe(r){return Ue(r)&&ze(r.valueOf())}function De(r){return Ye(r)||qe(r)}function He(r){return Ye(r)&&r>=0}function Je(r){return qe(r)&&r.valueOf()>=0}function Ke(r){return He(r)||Je(r)}function Qe(r){return"number"==typeof r}function ri(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function ei(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+ri(n):ri(n)+r,t&&(r="-"+r)),r}G(De,"isPrimitive",Ye),G(De,"isObject",qe),G(Ke,"isPrimitive",He),G(Ke,"isObject",Je);var ii=String.prototype.toLowerCase,ti=String.prototype.toUpperCase;function ni(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!Qe(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=ei(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=ei(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===ti.call(r.specifier)?ti.call(i):ii.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ai(r){return"string"==typeof r}var oi=Math.abs,ci=String.prototype.toLowerCase,si=String.prototype.toUpperCase,pi=String.prototype.replace,ui=/e\+(\d)$/,li=/e-(\d)$/,fi=/^(\d+)$/,gi=/^(\d+)e/,di=/\.0$/,hi=/\.0*e/,wi=/(\..*[^0])0*e/;function bi(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!Qe(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":oi(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=pi.call(i,wi,"$1e"),i=pi.call(i,hi,"e"),i=pi.call(i,di,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=pi.call(i,ui,"e+0$1"),i=pi.call(i,li,"e-0$1"),r.alternate&&(i=pi.call(i,fi,"$1."),i=pi.call(i,gi,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===si.call(r.specifier)?si.call(i):ci.call(i)}function vi(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function yi(r,e,i){var t=e-r.length;return t<0?r:r=i?r+vi(t):vi(t)+r}var mi=String.fromCharCode,Ei=isNaN,xi=Array.isArray;function ki(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Si(r){var e,i,t,n,a,o,c,s,p;if(!xi(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ai(t=r[s]))o+=t;else{if(e=void 0!==t.precision,!(t=ki(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Ei(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Ei(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ni(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Ei(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ei(a)?String(t.arg):mi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=bi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ei(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=yi(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Vi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ii(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ji(r){var e,i,t,n;for(i=[],n=0,t=Vi.exec(r);t;)(e=r.slice(n,Vi.lastIndex-t[0].length)).length&&i.push(e),i.push(Ii(t)),n=Vi.lastIndex,t=Vi.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function $i(r){return"string"==typeof r}function Fi(r){var e,i,t;if(!$i(r))throw new TypeError(Fi("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ji(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return Si.apply(null,i)}function Ti(r,e){return Pe(e)?X(e,"iter")&&(r.iter=e.iter,!He(e.iter))?new TypeError(Fi("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Fi("invalid argument. Options argument must be an object. Value: `%s`.",e))}function _i(r){var e,i,t,n,a,o;if(e={iter:0xdefddd2d1d18},arguments.length&&(n=Ti(e,r)))throw n;return o=0,a=1,G(i={},"next",c),G(i,"return",s),B&&G(i,B,p),i;function c(){if(o+=1,t||o>e.iter)return{done:!0};if(o<2)return{value:2,done:!1};for(a+=2;!1===D(a);)a+=2;return{value:a,done:!1}}function s(r){return t=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){return _i(e)}}export{_i as default};
//# sourceMappingURL=mod.js.map
