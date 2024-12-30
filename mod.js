// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,_=String.prototype.replace,f=/e\+(\d)$/,E=/e-(\d)$/,p=/^(\d+)$/,N=/^(\d+)e/,S=/\.0$/,A=/\.0*e/,I=/(\..*[^0])0*e/;function T(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=_.call(n,I,"$1e"),n=_.call(n,A,"e"),n=_.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=_.call(n,f,"e+0$1"),n=_.call(n,E,"e-0$1"),e.alternate&&(n=_.call(n,p,"$1."),n=_.call(n,N,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function h(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var g=String.fromCharCode,m=Array.isArray;function d(e){return e!=e}function v(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function y(e){var r,t,n,a,o,u,l,s,_,f,E,p,N;if(!m(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=v(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,_=0;_<t.length;_++)switch(a=t.charAt(_)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,d(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,d(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!d(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=d(o)?String(n.arg):g(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=T(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,E=n.width,p=n.padRight,N=void 0,(N=E-f.length)<0?f:f=p?f+h(N):h(N)+f)),u+=n.arg||"",l+=1}return u}var w=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function b(e){var r,t,n,i;for(t=[],i=0,n=w.exec(e);n;)(r=e.slice(i,w.lastIndex-n[0].length)).length&&t.push(r),t.push(M(n)),i=w.lastIndex,n=w.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[b(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return y.apply(null,r)}var L=Object.prototype,R=L.toString,P=L.__defineGetter__,F=L.__defineSetter__,X=L.__lookupGetter__,B=L.__lookupSetter__;var U=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||B.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&F&&F.call(e,r,t.set),e};function C(e,r,t){U(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var H={};function D(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(e){return"number"==typeof e}C(H,"MAX_ARRAY_LENGTH",4294967295),C(H,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function k(){return G&&"symbol"==typeof Symbol.toStringTag}var x=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var j,V="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof V?V.toStringTag:"";j=k()?function(e){var r,t,n,i,a;if(null==e)return x.call(e);t=e[Q],a=Q,r=null!=(i=e)&&W.call(i,a);try{e[Q]=void 0}catch(r){return x.call(e)}return n=x.call(e),r?e[Q]=t:delete e[Q],n}:function(e){return x.call(e)};var K=j,$=Number,Z=$.prototype.toString;var z=k();function J(e){return"object"==typeof e&&(e instanceof $||(z?function(e){try{return Z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function q(e){return Y(e)||J(e)}D(q,"isPrimitive",Y),D(q,"isObject",J);var ee="function"==typeof Math.fround?Math.fround:null,re="function"==typeof Float32Array;var te=Number.POSITIVE_INFINITY,ne="function"==typeof Float32Array?Float32Array:null;var ie="function"==typeof Float32Array?Float32Array:void 0;var ae=function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,5e40]),t=r,e=(re&&t instanceof Float32Array||"[object Float32Array]"===K(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?ie:function(){throw new Error("not implemented")},oe=new ae(1);var ce="function"==typeof ee?ee:function(e){return oe[0]=e,oe[0]};function ue(e,r){if(!(this instanceof ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Y(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Y(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ce(e)}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ce(r)}),this}D(ue,"BYTES_PER_ELEMENT",4),D(ue.prototype,"BYTES_PER_ELEMENT",4),D(ue.prototype,"byteLength",8),D(ue.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),D(ue.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var le=new ue(NaN,NaN),se=new ue(0,0),_e={};function fe(e,r){if(!(this instanceof fe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Y(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Y(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}C(_e,"NAN",le),C(_e,"NUM_BYTES",8),C(_e,"ZERO",se),D(fe,"BYTES_PER_ELEMENT",8),D(fe.prototype,"BYTES_PER_ELEMENT",8),D(fe.prototype,"byteLength",16),D(fe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),D(fe.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ee=new fe(NaN,NaN),pe=new fe(0,0),Ne={};C(Ne,"NAN",Ee),C(Ne,"NUM_BYTES",16),C(Ne,"ZERO",pe);var Se=$.NEGATIVE_INFINITY,Ae=$.POSITIVE_INFINITY,Ie={};C(Ie,"CBRT_EPS",.09921256574801247),C(Ie,"EPS",.0009765625),C(Ie,"EXPONENT_BIAS",15),C(Ie,"MAX",65504),C(Ie,"MAX_SAFE_INTEGER",2047),C(Ie,"MIN_SAFE_INTEGER",-2047),C(Ie,"NINF",Se),C(Ie,"NUM_BYTES",2),C(Ie,"PINF",Ae),C(Ie,"PRECISION",11),C(Ie,"SMALLEST_NORMAL",6103515625e-14),C(Ie,"SMALLEST_SUBNORMAL",5.960464477539063e-8),C(Ie,"SQRT_EPS",.03125);var Te=ce(.004921566601151848),he=ce(2.718281828459045),ge=ce(1.1920928955078125e-7),me=ce(.7853981633974483),de=ce(1.5707963267948966),ve=ce(-.6931471805599453),ye=ce(2.302585092994046),we="function"==typeof Uint32Array;var Me="function"==typeof Uint32Array?Uint32Array:null;var be="function"==typeof Uint32Array?Uint32Array:void 0;var Oe=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(we&&t instanceof Uint32Array||"[object Uint32Array]"===K(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?be:function(){throw new Error("not implemented")},Le=new ae(1);new Oe(Le.buffer)[0]=4286578688;var Re=Le[0],Pe=ce(1.618033988749895),Fe=ce(3.141592653589793),Xe=new ae(1);new Oe(Xe.buffer)[0]=2139095040;var Be=Xe[0],Ue=ce(.0003452669770922512),Ce=ce(1.772453850905516),He=ce(1.4142135623730951),De=ce(2.5066282746310007),Ye=ce(6.283185307179586),Ge={};C(Ge,"ABS_MASK",2147483647),C(Ge,"CBRT_EPS",Te),C(Ge,"E",he),C(Ge,"EPS",ge),C(Ge,"EXPONENT_BIAS",127),C(Ge,"EXPONENT_MASK",2139095040),C(Ge,"FOURTH_PI",me),C(Ge,"HALF_LN_TWO",.3465735912322998),C(Ge,"HALF_PI",de),C(Ge,"LN_HALF",ve),C(Ge,"LN_PI",1.1447298526763916),C(Ge,"LN_TEN",ye),C(Ge,"LN_TWO",.6931471824645996),C(Ge,"MAX",34028234663852886e22),C(Ge,"MAX_BASE2_EXPONENT",127),C(Ge,"MAX_BASE2_EXPONENT_SUBNORMAL",-127),C(Ge,"MAX_BASE10_EXPONENT",38),C(Ge,"MAX_BASE10_EXPONENT_SUBNORMAL",-38),C(Ge,"MAX_SAFE_FIBONACCI",14930352),C(Ge,"MAX_SAFE_INTEGER",16777215),C(Ge,"MAX_SAFE_NTH_FACTORIAL",34),C(Ge,"MAX_SAFE_NTH_FIBONACCI",36),C(Ge,"MAX_SAFE_NTH_LUCAS",34),C(Ge,"MIN_BASE2_EXPONENT",-126),C(Ge,"MIN_BASE2_EXPONENT_SUBNORMAL",-149),C(Ge,"MIN_BASE10_EXPONENT",-37),C(Ge,"MIN_BASE10_EXPONENT_SUBNORMAL",-45),C(Ge,"MIN_SAFE_INTEGER",-16777215),C(Ge,"NAN",NaN),C(Ge,"NINF",Re),C(Ge,"NUM_BYTES",4),C(Ge,"PHI",Pe),C(Ge,"PI",Fe),C(Ge,"PINF",Be),C(Ge,"PRECISION",24),C(Ge,"SIGN_MASK",2147483648),C(Ge,"SIGNIFICAND_MASK",8388607),C(Ge,"SMALLEST_NORMAL",11754943508222875e-54),C(Ge,"SMALLEST_SUBNORMAL",1401298464324817e-60),C(Ge,"SQRT_EPS",Ue),C(Ge,"SQRT_HALF",.7071067690849304),C(Ge,"SQRT_HALF_PI",1.2533141374588013),C(Ge,"SQRT_PHI",1.272019624710083),C(Ge,"SQRT_PI",Ce),C(Ge,"SQRT_THREE",1.7320507764816284),C(Ge,"SQRT_TWO",He),C(Ge,"SQRT_TWO_PI",De),C(Ge,"TWO_PI",Ye);var ke=$.NEGATIVE_INFINITY,xe=Number.POSITIVE_INFINITY,We={};C(We,"APERY",1.2020569031595942),C(We,"CATALAN",.915965594177219),C(We,"CBRT_EPS",60554544523933395e-22),C(We,"E",2.718281828459045),C(We,"EPS",2220446049250313e-31),C(We,"EULERGAMMA",.5772156649015329),C(We,"EXPONENT_BIAS",1023),C(We,"FOURTH_PI",.7853981633974483),C(We,"FOURTH_ROOT_EPS",.0001220703125),C(We,"GAMMA_LANCZOS_G",10.900511),C(We,"GLAISHER",1.2824271291006226),C(We,"HALF_LN2",.34657359027997264),C(We,"HALF_PI",1.5707963267948966),C(We,"HIGH_WORD_ABS_MASK",2147483647),C(We,"HIGH_WORD_EXPONENT_MASK",2146435072),C(We,"HIGH_WORD_SIGN_MASK",2147483648),C(We,"HIGH_WORD_SIGNIFICAND_MASK",1048575),C(We,"LN_HALF",-.6931471805599453),C(We,"LN_PI",1.1447298858494002),C(We,"LN_SQRT_TWO_PI",.9189385332046728),C(We,"LN10",2.302585092994046),C(We,"LN2",.6931471805599453),C(We,"LN_TWO_PI",1.8378770664093456),C(We,"LOG2E",1.4426950408889634),C(We,"LOG10E",.4342944819032518),C(We,"MAX",17976931348623157e292),C(We,"MAX_BASE2_EXPONENT",1023),C(We,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),C(We,"MAX_BASE10_EXPONENT",308),C(We,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),C(We,"MAX_LN",709.782712893384),C(We,"MAX_SAFE_FIBONACCI",8944394323791464),C(We,"MAX_SAFE_INTEGER",9007199254740991),C(We,"MAX_SAFE_LUCAS",7639424778862807),C(We,"MAX_SAFE_NTH_FIBONACCI",78),C(We,"MAX_SAFE_NTH_LUCAS",76),C(We,"MIN_BASE2_EXPONENT",-1022),C(We,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),C(We,"MIN_BASE10_EXPONENT",-308),C(We,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),C(We,"MIN_LN",-708.3964185322641),C(We,"MIN_SAFE_INTEGER",-9007199254740991),C(We,"NAN",NaN),C(We,"NINF",ke),C(We,"NUM_BYTES",8),C(We,"PHI",1.618033988749895),C(We,"PI",3.141592653589793),C(We,"PI_SQUARED",9.869604401089358),C(We,"PINF",xe),C(We,"PRECISION",53),C(We,"SMALLEST_NORMAL",22250738585072014e-324),C(We,"SMALLEST_SUBNORMAL",5e-324),C(We,"SQRT_EPS",1.4901161193847656e-8),C(We,"SQRT_HALF",.7071067811865476),C(We,"SQRT_HALF_PI",1.2533141373155003),C(We,"SQRT_PHI",1.272019649514069),C(We,"SQRT_PI",1.772453850905516),C(We,"SQRT_THREE",1.7320508075688772),C(We,"SQRT_TWO",1.4142135623730951),C(We,"SQRT_TWO_PI",2.5066282746310007),C(We,"TWO_PI",6.283185307179586);var je={};C(je,"MAX",127),C(je,"MIN",-128),C(je,"NUM_BYTES",1);var Ve={};C(Ve,"MAX",32767),C(Ve,"MIN",-32768),C(Ve,"NUM_BYTES",2);var Qe={};function Ke(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}C(Qe,"MAX",2147483647),C(Qe,"MIN",-2147483648),C(Qe,"NUM_BYTES",4);var $e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Ze(){throw new Error("setTimeout has not been defined")}function ze(){throw new Error("clearTimeout has not been defined")}var Je=Ze,qe=ze;function er(e){if(Je===setTimeout)return setTimeout(e,0);if((Je===Ze||!Je)&&setTimeout)return Je=setTimeout,setTimeout(e,0);try{return Je(e,0)}catch(r){try{return Je.call(null,e,0)}catch(r){return Je.call(this,e,0)}}}"function"==typeof $e.setTimeout&&(Je=setTimeout),"function"==typeof $e.clearTimeout&&(qe=clearTimeout);var rr,tr=[],nr=!1,ir=-1;function ar(){nr&&rr&&(nr=!1,rr.length?tr=rr.concat(tr):ir=-1,tr.length&&or())}function or(){if(!nr){var e=er(ar);nr=!0;for(var r=tr.length;r;){for(rr=tr,tr=[];++ir<r;)rr&&rr[ir].run();ir=-1,r=tr.length}rr=null,nr=!1,function(e){if(qe===clearTimeout)return clearTimeout(e);if((qe===ze||!qe)&&clearTimeout)return qe=clearTimeout,clearTimeout(e);try{return qe(e)}catch(r){try{return qe.call(null,e)}catch(r){return qe.call(this,e)}}}(e)}}function cr(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];tr.push(new ur(e,r)),1!==tr.length||nr||er(or)}function ur(e,r){this.fun=e,this.array=r}ur.prototype.run=function(){this.fun.apply(null,this.array)};var lr="browser",sr="browser",_r={},fr=[],Er={},pr={},Nr={};function Sr(){}var Ar=Sr,Ir=Sr,Tr=Sr,hr=Sr,gr=Sr,mr=Sr,dr=Sr;function vr(e){throw new Error("process.binding is not supported")}function yr(){return"/"}function wr(e){throw new Error("process.chdir is not supported")}function Mr(){return 0}var br=$e.performance||{},Or=br.now||br.mozNow||br.msNow||br.oNow||br.webkitNow||function(){return(new Date).getTime()};function Lr(e){var r=.001*Or.call(br),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Rr=new Date;function Pr(){return(new Date-Rr)/1e3}var Fr={nextTick:cr,title:lr,browser:true,env:_r,argv:fr,version:"",versions:Er,on:Ar,addListener:Ir,once:Tr,off:hr,removeListener:gr,removeAllListeners:mr,emit:dr,binding:vr,cwd:yr,chdir:wr,umask:Mr,hrtime:Lr,platform:sr,release:pr,config:Nr,uptime:Pr},Xr="win32"===Ke(Object.freeze({__proto__:null,addListener:Ir,argv:fr,binding:vr,browser:true,chdir:wr,config:Nr,cwd:yr,default:Fr,emit:dr,env:_r,hrtime:Lr,nextTick:cr,off:hr,on:Ar,once:Tr,platform:sr,release:pr,removeAllListeners:mr,removeListener:gr,title:lr,umask:Mr,uptime:Pr,version:"",versions:Er})).platform,Br=Xr?"\\":"/",Ur={};C(Ur,"DELIMITER",Xr?";":":"),C(Ur,"DELIMITER_POSIX",":"),C(Ur,"DELIMITER_WIN32",";"),C(Ur,"SEP",Br),C(Ur,"SEP_POSIX","/"),C(Ur,"SEP_WIN32","\\");var Cr={};C(Cr,"HOURS_IN_DAY",24),C(Cr,"HOURS_IN_WEEK",168),C(Cr,"MILLISECONDS_IN_DAY",864e5),C(Cr,"MILLISECONDS_IN_HOUR",36e5),C(Cr,"MILLISECONDS_IN_MINUTE",6e4),C(Cr,"MILLISECONDS_IN_SECOND",1e3),C(Cr,"MILLISECONDS_IN_WEEK",6048e5),C(Cr,"MINUTES_IN_DAY",1440),C(Cr,"MINUTES_IN_HOUR",60),C(Cr,"MINUTES_IN_WEEK",10080),C(Cr,"MONTHS_IN_YEAR",12),C(Cr,"SECONDS_IN_DAY",86400),C(Cr,"SECONDS_IN_HOUR",3600),C(Cr,"SECONDS_IN_MINUTE",60),C(Cr,"SECONDS_IN_WEEK",604800);var Hr={};C(Hr,"MAX",255),C(Hr,"NUM_BYTES",1);var Dr={};C(Dr,"MAX",65535),C(Dr,"NUM_BYTES",2);var Yr={};C(Yr,"MAX",4294967295),C(Yr,"NUM_BYTES",4);var Gr={};C(Gr,"MAX",1114111),C(Gr,"MAX_BMP",65535);var kr={};C(kr,"array",H),C(kr,"complex64",_e),C(kr,"complex128",Ne),C(kr,"float16",Ie),C(kr,"float32",Ge),C(kr,"float64",We),C(kr,"int8",je),C(kr,"int16",Ve),C(kr,"int32",Qe),C(kr,"path",Ur),C(kr,"time",Cr),C(kr,"uint8",Hr),C(kr,"uint16",Dr),C(kr,"uint32",Yr),C(kr,"unicode",Gr);export{H as array,Ne as complex128,_e as complex64,kr as default,Ie as float16,Ge as float32,We as float64,Ve as int16,Qe as int32,je as int8,Ur as path,Cr as time,Dr as uint16,Yr as uint32,Hr as uint8,Gr as unicode};
//# sourceMappingURL=mod.js.map
