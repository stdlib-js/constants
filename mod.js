// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,_=/e-(\d)$/,E=/^(\d+)$/,N=/^(\d+)e/,S=/\.0$/,h=/\.0*e/,I=/(\..*[^0])0*e/;function A(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,I,"$1e"),n=f.call(n,h,"e"),n=f.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,_,"e-0$1"),e.alternate&&(n=f.call(n,E,"$1."),n=f.call(n,N,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function g(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var m=String.fromCharCode,d=Array.isArray;function T(e){return e!=e}function v(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function y(e){var r,t,n,a,o,u,l,s,f,p,_,E,N;if(!d(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=v(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):m(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,_=n.width,E=n.padRight,N=void 0,(N=_-p.length)<0?p:p=E?p+g(N):g(N)+p)),u+=n.arg||"",l+=1}return u}var w=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function b(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function M(e){var r,t,n,i;for(t=[],i=0,n=w.exec(e);n;)(r=e.slice(i,w.lastIndex-n[0].length)).length&&t.push(r),t.push(b(n)),i=w.lastIndex,n=w.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[M(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return y.apply(null,r)}var L=Object.prototype,R=L.toString,P=L.__defineGetter__,F=L.__defineSetter__,U=L.__lookupGetter__,X=L.__lookupSetter__;var B=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||X.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&F&&F.call(e,r,t.set),e};function C(e,r,t){B(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var D={};function H(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(e){return"number"==typeof e}C(D,"MAX_ARRAY_LENGTH",4294967295),C(D,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function k(){return G&&"symbol"==typeof Symbol.toStringTag}var x=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var V,W="function"==typeof Symbol?Symbol:void 0,K="function"==typeof W?W.toStringTag:"";V=k()?function(e){var r,t,n,i,a;if(null==e)return x.call(e);t=e[K],a=K,r=null!=(i=e)&&j.call(i,a);try{e[K]=void 0}catch(r){return x.call(e)}return n=x.call(e),r?e[K]=t:delete e[K],n}:function(e){return x.call(e)};var Q=V,$=Number,Z=$.prototype.toString;var z=k();function J(e){return"object"==typeof e&&(e instanceof $||(z?function(e){try{return Z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function q(e){return Y(e)||J(e)}H(q,"isPrimitive",Y),H(q,"isObject",J);var ee="function"==typeof Math.fround?Math.fround:null,re="function"==typeof Float32Array;var te=Number.POSITIVE_INFINITY,ne="function"==typeof Float32Array?Float32Array:null;var ie="function"==typeof Float32Array?Float32Array:void 0;var ae=function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,5e40]),t=r,e=(re&&t instanceof Float32Array||"[object Float32Array]"===Q(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?ie:function(){throw new Error("not implemented")},oe=new ae(1);var ce="function"==typeof ee?ee:function(e){return oe[0]=e,oe[0]};function ue(e,r){if(!(this instanceof ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Y(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Y(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return B(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ce(e)}),B(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ce(r)}),this}H(ue,"BYTES_PER_ELEMENT",4),H(ue.prototype,"BYTES_PER_ELEMENT",4),H(ue.prototype,"byteLength",8),H(ue.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),H(ue.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var le=new ue(NaN,NaN),se=new ue(0,0),fe={};function pe(e,r){if(!(this instanceof pe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Y(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Y(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return B(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),B(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}C(fe,"NAN",le),C(fe,"NUM_BYTES",8),C(fe,"ZERO",se),H(pe,"BYTES_PER_ELEMENT",8),H(pe.prototype,"BYTES_PER_ELEMENT",8),H(pe.prototype,"byteLength",16),H(pe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),H(pe.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var _e=new pe(NaN,NaN),Ee=new pe(0,0),Ne={};C(Ne,"NAN",_e),C(Ne,"NUM_BYTES",16),C(Ne,"ZERO",Ee);var Se=$.NEGATIVE_INFINITY,he=$.POSITIVE_INFINITY,Ie={};C(Ie,"CBRT_EPS",.09921256574801247),C(Ie,"EPS",.0009765625),C(Ie,"EXPONENT_BIAS",15),C(Ie,"MAX",65504),C(Ie,"MAX_SAFE_INTEGER",2047),C(Ie,"MIN_SAFE_INTEGER",-2047),C(Ie,"NINF",Se),C(Ie,"NUM_BYTES",2),C(Ie,"PINF",he),C(Ie,"PRECISION",11),C(Ie,"SMALLEST_NORMAL",6103515625e-14),C(Ie,"SMALLEST_SUBNORMAL",5.960464477539063e-8),C(Ie,"SQRT_EPS",.03125);var Ae=ce(.004921566601151848),ge=ce(1.1920928955078125e-7),me="function"==typeof Uint32Array;var de="function"==typeof Uint32Array?Uint32Array:null;var Te="function"==typeof Uint32Array?Uint32Array:void 0;var ve=function(){var e,r,t;if("function"!=typeof de)return!1;try{r=new de(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(me&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")},ye=new ae(1);new ve(ye.buffer)[0]=4286578688;var we=ye[0],be=new ae(1);new ve(be.buffer)[0]=2139095040;var Me=be[0],Oe=ce(.0003452669770922512),Le={};C(Le,"ABS_MASK",2147483647),C(Le,"CBRT_EPS",Ae),C(Le,"EPS",ge),C(Le,"EXPONENT_BIAS",127),C(Le,"EXPONENT_MASK",2139095040),C(Le,"MAX",34028234663852886e22),C(Le,"MAX_SAFE_INTEGER",16777215),C(Le,"MIN_SAFE_INTEGER",-16777215),C(Le,"NAN",NaN),C(Le,"NINF",we),C(Le,"NUM_BYTES",4),C(Le,"PINF",Me),C(Le,"PRECISION",24),C(Le,"SIGN_MASK",2147483648),C(Le,"SIGNIFICAND_MASK",8388607),C(Le,"SMALLEST_NORMAL",11754943508222875e-54),C(Le,"SMALLEST_SUBNORMAL",1401298464324817e-60),C(Le,"SQRT_EPS",Oe);var Re=$.NEGATIVE_INFINITY,Pe=Number.POSITIVE_INFINITY,Fe={};C(Fe,"APERY",1.2020569031595942),C(Fe,"CATALAN",.915965594177219),C(Fe,"CBRT_EPS",60554544523933395e-22),C(Fe,"E",2.718281828459045),C(Fe,"EPS",2220446049250313e-31),C(Fe,"EULERGAMMA",.5772156649015329),C(Fe,"EXPONENT_BIAS",1023),C(Fe,"FOURTH_PI",.7853981633974483),C(Fe,"FOURTH_ROOT_EPS",.0001220703125),C(Fe,"GAMMA_LANCZOS_G",10.900511),C(Fe,"GLAISHER",1.2824271291006226),C(Fe,"HALF_LN2",.34657359027997264),C(Fe,"HALF_PI",1.5707963267948966),C(Fe,"HIGH_WORD_ABS_MASK",2147483647),C(Fe,"HIGH_WORD_EXPONENT_MASK",2146435072),C(Fe,"HIGH_WORD_SIGN_MASK",2147483648),C(Fe,"HIGH_WORD_SIGNIFICAND_MASK",1048575),C(Fe,"LN_HALF",-.6931471805599453),C(Fe,"LN_PI",1.1447298858494002),C(Fe,"LN_SQRT_TWO_PI",.9189385332046728),C(Fe,"LN10",2.302585092994046),C(Fe,"LN2",.6931471805599453),C(Fe,"LN_TWO_PI",1.8378770664093456),C(Fe,"LOG2E",1.4426950408889634),C(Fe,"LOG10E",.4342944819032518),C(Fe,"MAX",17976931348623157e292),C(Fe,"MAX_BASE2_EXPONENT",1023),C(Fe,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),C(Fe,"MAX_BASE10_EXPONENT",308),C(Fe,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),C(Fe,"MAX_LN",709.782712893384),C(Fe,"MAX_SAFE_FIBONACCI",8944394323791464),C(Fe,"MAX_SAFE_INTEGER",9007199254740991),C(Fe,"MAX_SAFE_LUCAS",7639424778862807),C(Fe,"MAX_SAFE_NTH_FIBONACCI",78),C(Fe,"MAX_SAFE_NTH_LUCAS",76),C(Fe,"MIN_BASE2_EXPONENT",-1022),C(Fe,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),C(Fe,"MIN_BASE10_EXPONENT",-308),C(Fe,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),C(Fe,"MIN_LN",-708.3964185322641),C(Fe,"MIN_SAFE_INTEGER",-9007199254740991),C(Fe,"NAN",NaN),C(Fe,"NINF",Re),C(Fe,"NUM_BYTES",8),C(Fe,"PHI",1.618033988749895),C(Fe,"PI",3.141592653589793),C(Fe,"PI_SQUARED",9.869604401089358),C(Fe,"PINF",Pe),C(Fe,"PRECISION",53),C(Fe,"SMALLEST_NORMAL",22250738585072014e-324),C(Fe,"SMALLEST_SUBNORMAL",5e-324),C(Fe,"SQRT_EPS",1.4901161193847656e-8),C(Fe,"SQRT_HALF",.7071067811865476),C(Fe,"SQRT_HALF_PI",1.2533141373155003),C(Fe,"SQRT_PHI",1.272019649514069),C(Fe,"SQRT_PI",1.772453850905516),C(Fe,"SQRT_THREE",1.7320508075688772),C(Fe,"SQRT_TWO",1.4142135623730951),C(Fe,"SQRT_TWO_PI",2.5066282746310007),C(Fe,"TWO_PI",6.283185307179586);var Ue={};C(Ue,"MAX",127),C(Ue,"MIN",-128),C(Ue,"NUM_BYTES",1);var Xe={};C(Xe,"MAX",32767),C(Xe,"MIN",-32768),C(Xe,"NUM_BYTES",2);var Be={};function Ce(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}C(Be,"MAX",2147483647),C(Be,"MIN",-2147483648),C(Be,"NUM_BYTES",4);var De="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function He(){throw new Error("setTimeout has not been defined")}function Ye(){throw new Error("clearTimeout has not been defined")}var Ge=He,ke=Ye;function xe(e){if(Ge===setTimeout)return setTimeout(e,0);if((Ge===He||!Ge)&&setTimeout)return Ge=setTimeout,setTimeout(e,0);try{return Ge(e,0)}catch(r){try{return Ge.call(null,e,0)}catch(r){return Ge.call(this,e,0)}}}"function"==typeof De.setTimeout&&(Ge=setTimeout),"function"==typeof De.clearTimeout&&(ke=clearTimeout);var je,Ve=[],We=!1,Ke=-1;function Qe(){We&&je&&(We=!1,je.length?Ve=je.concat(Ve):Ke=-1,Ve.length&&$e())}function $e(){if(!We){var e=xe(Qe);We=!0;for(var r=Ve.length;r;){for(je=Ve,Ve=[];++Ke<r;)je&&je[Ke].run();Ke=-1,r=Ve.length}je=null,We=!1,function(e){if(ke===clearTimeout)return clearTimeout(e);if((ke===Ye||!ke)&&clearTimeout)return ke=clearTimeout,clearTimeout(e);try{return ke(e)}catch(r){try{return ke.call(null,e)}catch(r){return ke.call(this,e)}}}(e)}}function Ze(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Ve.push(new ze(e,r)),1!==Ve.length||We||xe($e)}function ze(e,r){this.fun=e,this.array=r}ze.prototype.run=function(){this.fun.apply(null,this.array)};var Je="browser",qe="browser",er={},rr=[],tr={},nr={},ir={};function ar(){}var or=ar,cr=ar,ur=ar,lr=ar,sr=ar,fr=ar,pr=ar;function _r(e){throw new Error("process.binding is not supported")}function Er(){return"/"}function Nr(e){throw new Error("process.chdir is not supported")}function Sr(){return 0}var hr=De.performance||{},Ir=hr.now||hr.mozNow||hr.msNow||hr.oNow||hr.webkitNow||function(){return(new Date).getTime()};function Ar(e){var r=.001*Ir.call(hr),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var gr=new Date;function mr(){return(new Date-gr)/1e3}var dr={nextTick:Ze,title:Je,browser:true,env:er,argv:rr,version:"",versions:tr,on:or,addListener:cr,once:ur,off:lr,removeListener:sr,removeAllListeners:fr,emit:pr,binding:_r,cwd:Er,chdir:Nr,umask:Sr,hrtime:Ar,platform:qe,release:nr,config:ir,uptime:mr},Tr="win32"===Ce(Object.freeze({__proto__:null,addListener:cr,argv:rr,binding:_r,browser:true,chdir:Nr,config:ir,cwd:Er,default:dr,emit:pr,env:er,hrtime:Ar,nextTick:Ze,off:lr,on:or,once:ur,platform:qe,release:nr,removeAllListeners:fr,removeListener:sr,title:Je,umask:Sr,uptime:mr,version:"",versions:tr})).platform,vr=Tr?"\\":"/",yr={};C(yr,"DELIMITER",Tr?";":":"),C(yr,"DELIMITER_POSIX",":"),C(yr,"DELIMITER_WIN32",";"),C(yr,"SEP",vr),C(yr,"SEP_POSIX","/"),C(yr,"SEP_WIN32","\\");var wr={};C(wr,"HOURS_IN_DAY",24),C(wr,"HOURS_IN_WEEK",168),C(wr,"MILLISECONDS_IN_DAY",864e5),C(wr,"MILLISECONDS_IN_HOUR",36e5),C(wr,"MILLISECONDS_IN_MINUTE",6e4),C(wr,"MILLISECONDS_IN_SECOND",1e3),C(wr,"MILLISECONDS_IN_WEEK",6048e5),C(wr,"MINUTES_IN_DAY",1440),C(wr,"MINUTES_IN_HOUR",60),C(wr,"MINUTES_IN_WEEK",10080),C(wr,"MONTHS_IN_YEAR",12),C(wr,"SECONDS_IN_DAY",86400),C(wr,"SECONDS_IN_HOUR",3600),C(wr,"SECONDS_IN_MINUTE",60),C(wr,"SECONDS_IN_WEEK",604800);var br={};C(br,"MAX",255),C(br,"NUM_BYTES",1);var Mr={};C(Mr,"MAX",65535),C(Mr,"NUM_BYTES",2);var Or={};C(Or,"MAX",4294967295),C(Or,"NUM_BYTES",4);var Lr={};C(Lr,"MAX",1114111),C(Lr,"MAX_BMP",65535);var Rr={};C(Rr,"array",D),C(Rr,"complex64",fe),C(Rr,"complex128",Ne),C(Rr,"float16",Ie),C(Rr,"float32",Le),C(Rr,"float64",Fe),C(Rr,"int8",Ue),C(Rr,"int16",Xe),C(Rr,"int32",Be),C(Rr,"path",yr),C(Rr,"time",wr),C(Rr,"uint8",br),C(Rr,"uint16",Mr),C(Rr,"uint32",Or),C(Rr,"unicode",Lr);export{D as array,Ne as complex128,fe as complex64,Rr as default,Ie as float16,Le as float32,Fe as float64,Xe as int16,Be as int32,Ue as int8,yr as path,wr as time,Mr as uint16,Or as uint32,br as uint8,Lr as unicode};
//# sourceMappingURL=mod.js.map
