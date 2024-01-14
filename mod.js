// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,N=/^(\d+)$/,S=/^(\d+)e/,h=/\.0$/,I=/\.0*e/,A=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,A,"$1e"),n=p.call(n,I,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,_,"e+0$1"),n=p.call(n,E,"e-0$1"),e.alternate&&(n=p.call(n,N,"$1."),n=p.call(n,S,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function d(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function v(e,r,t){var n=r-e.length;return n<0?e:e=t?e+d(n):d(n)+e}var g=String.fromCharCode,y=isNaN,T=Array.isArray;function w(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function b(e){var r,t,n,a,o,l,s,f,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(c(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=w(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,y(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,y(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!y(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=y(o)?String(n.arg):g(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=v(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=M.exec(e);n;)(r=e.slice(i,M.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),i=M.lastIndex,n=M.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function P(e){var r,t;if(!R(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[L(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return b.apply(null,r)}var F=Object.prototype,U=F.toString,X=F.__defineGetter__,B=F.__defineSetter__,C=F.__lookupGetter__,D=F.__lookupSetter__;var H=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||D.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&X&&X.call(e,r,t.get),o&&B&&B.call(e,r,t.set),e};function Y(e,r,t){H(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G={};function k(e,r,t){H(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function x(e){return"number"==typeof e}Y(G,"MAX_ARRAY_LENGTH",4294967295),Y(G,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function V(){return j&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;var Q,$="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof $?$.toStringTag:"";Q=V()?function(e){var r,t,n,i,a;if(null==e)return W.call(e);t=e[Z],a=Z,r=null!=(i=e)&&K.call(i,a);try{e[Z]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[Z]=t:delete e[Z],n}:function(e){return W.call(e)};var z=Q,J=Number,q=J.prototype.toString;var ee=V();function re(e){return"object"==typeof e&&(e instanceof J||(ee?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function te(e){return x(e)||re(e)}k(te,"isPrimitive",x),k(te,"isObject",re);var ne="function"==typeof Math.fround?Math.fround:null,ie="function"==typeof Float32Array;var ae=Number.POSITIVE_INFINITY,oe="function"==typeof Float32Array?Float32Array:null;var ue="function"==typeof Float32Array?Float32Array:void 0;var ce=function(){var e,r,t;if("function"!=typeof oe)return!1;try{r=new oe([1,3.14,-3.14,5e40]),t=r,e=(ie&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ae}catch(r){e=!1}return e}()?ue:function(){throw new Error("not implemented")},le=new ce(1);var se="function"==typeof ne?ne:function(e){return le[0]=e,le[0]};function fe(e,r){if(!(this instanceof fe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!x(e))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",e));if(!x(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return H(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:se(e)}),H(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:se(r)}),this}k(fe,"BYTES_PER_ELEMENT",4),k(fe.prototype,"BYTES_PER_ELEMENT",4),k(fe.prototype,"byteLength",8),k(fe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),k(fe.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var pe=new fe(NaN,NaN),_e=new fe(0,0),Ee={};function Ne(e,r){if(!(this instanceof Ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!x(e))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",e));if(!x(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return H(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),H(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Ee,"NAN",pe),Y(Ee,"NUM_BYTES",8),Y(Ee,"ZERO",_e),k(Ne,"BYTES_PER_ELEMENT",8),k(Ne.prototype,"BYTES_PER_ELEMENT",8),k(Ne.prototype,"byteLength",16),k(Ne.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),k(Ne.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Se=new Ne(NaN,NaN),he=new Ne(0,0),Ie={};Y(Ie,"NAN",Se),Y(Ie,"NUM_BYTES",16),Y(Ie,"ZERO",he);var Ae=J.NEGATIVE_INFINITY,me=J.POSITIVE_INFINITY,de={};Y(de,"CBRT_EPS",.09921256574801247),Y(de,"EPS",.0009765625),Y(de,"EXPONENT_BIAS",15),Y(de,"MAX",65504),Y(de,"MAX_SAFE_INTEGER",2047),Y(de,"MIN_SAFE_INTEGER",-2047),Y(de,"NINF",Ae),Y(de,"NUM_BYTES",2),Y(de,"PINF",me),Y(de,"PRECISION",11),Y(de,"SMALLEST_NORMAL",6103515625e-14),Y(de,"SMALLEST_SUBNORMAL",5.960464477539063e-8),Y(de,"SQRT_EPS",.03125);var ve=se(.004921566601151848),ge=se(1.1920928955078125e-7),ye="function"==typeof Uint32Array;var Te="function"==typeof Uint32Array?Uint32Array:null;var we="function"==typeof Uint32Array?Uint32Array:void 0;var be=function(){var e,r,t;if("function"!=typeof Te)return!1;try{r=new Te(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ye&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?we:function(){throw new Error("not implemented")},Me=new ce(1);new be(Me.buffer)[0]=4286578688;var Oe=Me[0],Le=new ce(1);new be(Le.buffer)[0]=2139095040;var Re=Le[0],Pe=se(.0003452669770922512),Fe={};Y(Fe,"ABS_MASK",2147483647),Y(Fe,"CBRT_EPS",ve),Y(Fe,"EPS",ge),Y(Fe,"EXPONENT_BIAS",127),Y(Fe,"EXPONENT_MASK",2139095040),Y(Fe,"MAX",34028234663852886e22),Y(Fe,"MAX_SAFE_INTEGER",16777215),Y(Fe,"MIN_SAFE_INTEGER",-16777215),Y(Fe,"NINF",Oe),Y(Fe,"NUM_BYTES",4),Y(Fe,"PINF",Re),Y(Fe,"PRECISION",24),Y(Fe,"SIGN_MASK",2147483648),Y(Fe,"SIGNIFICAND_MASK",8388607),Y(Fe,"SMALLEST_NORMAL",11754943508222875e-54),Y(Fe,"SMALLEST_SUBNORMAL",1401298464324817e-60),Y(Fe,"SQRT_EPS",Pe);var Ue=J.NEGATIVE_INFINITY,Xe=Number.POSITIVE_INFINITY,Be={};Y(Be,"APERY",1.2020569031595942),Y(Be,"CATALAN",.915965594177219),Y(Be,"CBRT_EPS",60554544523933395e-22),Y(Be,"E",2.718281828459045),Y(Be,"EPS",2220446049250313e-31),Y(Be,"EULERGAMMA",.5772156649015329),Y(Be,"EXPONENT_BIAS",1023),Y(Be,"FOURTH_PI",.7853981633974483),Y(Be,"FOURTH_ROOT_EPS",.0001220703125),Y(Be,"GAMMA_LANCZOS_G",10.900511),Y(Be,"GLAISHER",1.2824271291006226),Y(Be,"HALF_LN2",.34657359027997264),Y(Be,"HALF_PI",1.5707963267948966),Y(Be,"HIGH_WORD_ABS_MASK",2147483647),Y(Be,"HIGH_WORD_EXPONENT_MASK",2146435072),Y(Be,"HIGH_WORD_SIGN_MASK",2147483648),Y(Be,"HIGH_WORD_SIGNIFICAND_MASK",1048575),Y(Be,"LN_HALF",-.6931471805599453),Y(Be,"LN_PI",1.1447298858494002),Y(Be,"LN_SQRT_TWO_PI",.9189385332046728),Y(Be,"LN10",2.302585092994046),Y(Be,"LN2",.6931471805599453),Y(Be,"LN_TWO_PI",1.8378770664093456),Y(Be,"LOG2E",1.4426950408889634),Y(Be,"LOG10E",.4342944819032518),Y(Be,"MAX",17976931348623157e292),Y(Be,"MAX_BASE2_EXPONENT",1023),Y(Be,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),Y(Be,"MAX_BASE10_EXPONENT",308),Y(Be,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),Y(Be,"MAX_LN",709.782712893384),Y(Be,"MAX_SAFE_FIBONACCI",8944394323791464),Y(Be,"MAX_SAFE_INTEGER",9007199254740991),Y(Be,"MAX_SAFE_LUCAS",7639424778862807),Y(Be,"MAX_SAFE_NTH_FIBONACCI",78),Y(Be,"MAX_SAFE_NTH_LUCAS",76),Y(Be,"MIN_BASE2_EXPONENT",-1022),Y(Be,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),Y(Be,"MIN_BASE10_EXPONENT",-308),Y(Be,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),Y(Be,"MIN_LN",-708.3964185322641),Y(Be,"MIN_SAFE_INTEGER",-9007199254740991),Y(Be,"NINF",Ue),Y(Be,"NUM_BYTES",8),Y(Be,"PHI",1.618033988749895),Y(Be,"PI",3.141592653589793),Y(Be,"PI_SQUARED",9.869604401089358),Y(Be,"PINF",Xe),Y(Be,"PRECISION",53),Y(Be,"SMALLEST_NORMAL",22250738585072014e-324),Y(Be,"SMALLEST_SUBNORMAL",5e-324),Y(Be,"SQRT_EPS",1.4901161193847656e-8),Y(Be,"SQRT_HALF",.7071067811865476),Y(Be,"SQRT_HALF_PI",1.2533141373155003),Y(Be,"SQRT_PHI",1.272019649514069),Y(Be,"SQRT_PI",1.772453850905516),Y(Be,"SQRT_THREE",1.7320508075688772),Y(Be,"SQRT_TWO",1.4142135623730951),Y(Be,"SQRT_TWO_PI",2.5066282746310007),Y(Be,"TWO_PI",6.283185307179586);var Ce={};Y(Ce,"MAX",127),Y(Ce,"MIN",-128),Y(Ce,"NUM_BYTES",1);var De={};Y(De,"MAX",32767),Y(De,"MIN",-32768),Y(De,"NUM_BYTES",2);var He={};function Ye(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}Y(He,"MAX",2147483647),Y(He,"MIN",-2147483648),Y(He,"NUM_BYTES",4);var Ge="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ke(){throw new Error("setTimeout has not been defined")}function xe(){throw new Error("clearTimeout has not been defined")}var je=ke,Ve=xe;function We(e){if(je===setTimeout)return setTimeout(e,0);if((je===ke||!je)&&setTimeout)return je=setTimeout,setTimeout(e,0);try{return je(e,0)}catch(r){try{return je.call(null,e,0)}catch(r){return je.call(this,e,0)}}}"function"==typeof Ge.setTimeout&&(je=setTimeout),"function"==typeof Ge.clearTimeout&&(Ve=clearTimeout);var Ke,Qe=[],$e=!1,Ze=-1;function ze(){$e&&Ke&&($e=!1,Ke.length?Qe=Ke.concat(Qe):Ze=-1,Qe.length&&Je())}function Je(){if(!$e){var e=We(ze);$e=!0;for(var r=Qe.length;r;){for(Ke=Qe,Qe=[];++Ze<r;)Ke&&Ke[Ze].run();Ze=-1,r=Qe.length}Ke=null,$e=!1,function(e){if(Ve===clearTimeout)return clearTimeout(e);if((Ve===xe||!Ve)&&clearTimeout)return Ve=clearTimeout,clearTimeout(e);try{Ve(e)}catch(r){try{return Ve.call(null,e)}catch(r){return Ve.call(this,e)}}}(e)}}function qe(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Qe.push(new er(e,r)),1!==Qe.length||$e||We(Je)}function er(e,r){this.fun=e,this.array=r}er.prototype.run=function(){this.fun.apply(null,this.array)};var rr={},tr=[],nr={},ir={},ar={};function or(){}var ur=or,cr=or,lr=or,sr=or,fr=or,pr=or,_r=or;function Er(e){throw new Error("process.binding is not supported")}function Nr(){return"/"}function Sr(e){throw new Error("process.chdir is not supported")}function hr(){return 0}var Ir=Ge.performance||{},Ar=Ir.now||Ir.mozNow||Ir.msNow||Ir.oNow||Ir.webkitNow||function(){return(new Date).getTime()};function mr(e){var r=.001*Ar.call(Ir),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var dr=new Date;function vr(){return(new Date-dr)/1e3}var gr={nextTick:qe,title:"browser",browser:true,env:rr,argv:tr,version:"",versions:nr,on:ur,addListener:cr,once:lr,off:sr,removeListener:fr,removeAllListeners:pr,emit:_r,binding:Er,cwd:Nr,chdir:Sr,umask:hr,hrtime:mr,platform:"browser",release:ir,config:ar,uptime:vr},yr="win32"===Ye(Object.freeze({__proto__:null,addListener:cr,argv:tr,binding:Er,browser:true,chdir:Sr,config:ar,cwd:Nr,default:gr,emit:_r,env:rr,hrtime:mr,nextTick:qe,off:sr,on:ur,once:lr,platform:"browser",release:ir,removeAllListeners:pr,removeListener:fr,title:"browser",umask:hr,uptime:vr,version:"",versions:nr})).platform,Tr=yr?"\\":"/",wr={};Y(wr,"DELIMITER",yr?";":":"),Y(wr,"DELIMITER_POSIX",":"),Y(wr,"DELIMITER_WIN32",";"),Y(wr,"SEP",Tr),Y(wr,"SEP_POSIX","/"),Y(wr,"SEP_WIN32","\\");var br={};Y(br,"HOURS_IN_DAY",24),Y(br,"HOURS_IN_WEEK",168),Y(br,"MILLISECONDS_IN_DAY",864e5),Y(br,"MILLISECONDS_IN_HOUR",36e5),Y(br,"MILLISECONDS_IN_MINUTE",6e4),Y(br,"MILLISECONDS_IN_SECOND",1e3),Y(br,"MILLISECONDS_IN_WEEK",6048e5),Y(br,"MINUTES_IN_DAY",1440),Y(br,"MINUTES_IN_HOUR",60),Y(br,"MINUTES_IN_WEEK",10080),Y(br,"MONTHS_IN_YEAR",12),Y(br,"SECONDS_IN_DAY",86400),Y(br,"SECONDS_IN_HOUR",3600),Y(br,"SECONDS_IN_MINUTE",60),Y(br,"SECONDS_IN_WEEK",604800);var Mr={};Y(Mr,"MAX",255),Y(Mr,"NUM_BYTES",1);var Or={};Y(Or,"MAX",65535),Y(Or,"NUM_BYTES",2);var Lr={};Y(Lr,"MAX",4294967295),Y(Lr,"NUM_BYTES",4);var Rr={};Y(Rr,"MAX",1114111),Y(Rr,"MAX_BMP",65535);var Pr={};Y(Pr,"array",G),Y(Pr,"complex64",Ee),Y(Pr,"complex128",Ie),Y(Pr,"float16",de),Y(Pr,"float32",Fe),Y(Pr,"float64",Be),Y(Pr,"int8",Ce),Y(Pr,"int16",De),Y(Pr,"int32",He),Y(Pr,"path",wr),Y(Pr,"time",br),Y(Pr,"uint8",Mr),Y(Pr,"uint16",Or),Y(Pr,"uint32",Lr),Y(Pr,"unicode",Rr);export{G as array,Ie as complex128,Ee as complex64,Pr as default,de as float16,Fe as float32,Be as float64,De as int16,He as int32,Ce as int8,wr as path,br as time,Or as uint16,Lr as uint32,Mr as uint8,Rr as unicode};
//# sourceMappingURL=mod.js.map
