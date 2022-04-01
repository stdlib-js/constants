// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).constants=r()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty;var i=function(e){return"number"==typeof e};function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}var a=function(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e},c=i,u=a,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase;var s=function(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},_=i,p=Math.abs,E=String.prototype.toLowerCase,N=String.prototype.toUpperCase,S=String.prototype.replace,I=/e\+(\d)$/,d=/e-(\d)$/,A=/^(\d+)$/,T=/^(\d+)e/,h=/\.0$/,g=/\.0*e/,v=/(\..*[^0])0*e/;var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function y(e){return{mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],hasPeriod:"."===e[4],precision:e[5],specifier:e[6]}}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var m=s,b=function(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!_(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=S.call(t,v,"$1e"),t=S.call(t,g,"e"),t=S.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=S.call(t,I,"e+0$1"),t=S.call(t,d,"e-0$1"),e.alternate&&(t=S.call(t,A,"$1."),t=S.call(t,T,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===N.call(e.specifier)?N.call(t):E.call(t)},O=function(e){var r,t,n,i;for(t=[],i=0,n=M.exec(e);n;)(r=e.slice(i,M.lastIndex-n[0].length)).length&&t.push(r),t.push(y(n)),i=M.lastIndex,n=M.exec(e);return(r=e.slice(i)).length&&t.push(r),t},L=function(e,r,t){var n=r-e.length;return n<0?e:e=t?e+w(n):w(n)+e},P=a,R=function(e){return"string"==typeof e},F=String.fromCharCode,U=isNaN;var X=function e(r){var t,n,i,o,a,c,u,l,f;if(!R(r))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=O(r),c="",u=1,l=0;l<t.length;l++)if(i=t[l],R(i))c+=i;else{for(i.mapping&&(u=i.mapping),n=i.flags,f=0;f<n.length;f++)switch(o=n.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=n.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,U(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if("*"===i.precision&&i.hasPeriod){if(i.precision=parseInt(arguments[u],10),u+=1,U(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,i.hasPeriod=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":i.hasPeriod&&(i.padZeros=!1),i.arg=m(i);break;case"s":i.maxWidth=i.hasPeriod?i.precision:-1;break;case"c":if(!U(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=U(a)?String(i.arg):F(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":i.hasPeriod||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=P(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=L(i.arg,i.width,i.padRight)),c+=i.arg||"",u+=1}return c},B=X,C=Object.prototype,D=C.toString,H=C.__defineGetter__,Y=C.__defineSetter__,k=C.__lookupGetter__,G=C.__lookupSetter__;var x=n,j=function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(k.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&H&&H.call(e,r,t.get),a&&Y&&Y.call(e,r,t.set),e},W=t()?x:j;var V=function(e,r,t){W(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})},Q=V,$={};Q($,"MAX_ARRAY_LENGTH",4294967295),Q($,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var K=$,Z={};V(Z,"NUM_BYTES",8);var z=Z,q={};V(q,"NUM_BYTES",16);var J=q,ee=Number,re=ee.NEGATIVE_INFINITY,te=ee.POSITIVE_INFINITY,ne=V,ie={};ne(ie,"CBRT_EPS",.09921256574801247),ne(ie,"EPS",.0009765625),ne(ie,"EXPONENT_BIAS",15),ne(ie,"MAX",65504),ne(ie,"MAX_SAFE_INTEGER",2047),ne(ie,"MIN_SAFE_INTEGER",-2047),ne(ie,"NINF",re),ne(ie,"NUM_BYTES",2),ne(ie,"PINF",te),ne(ie,"PRECISION",11),ne(ie,"SMALLEST_NORMAL",6103515625e-14),ne(ie,"SMALLEST_SUBNORMAL",5.960464477539063e-8),ne(ie,"SQRT_EPS",.03125);var oe=ie,ae="function"==typeof Math.fround?Math.fround:null;var ce=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var ue=function(){return ce&&"symbol"==typeof Symbol.toStringTag},le=Object.prototype.toString,fe=le;var se=function(e){return fe.call(e)},_e=Object.prototype.hasOwnProperty;var pe=function(e,r){return null!=e&&_e.call(e,r)},Ee="function"==typeof Symbol?Symbol.toStringTag:"",Ne=pe,Se=Ee,Ie=le;var de=function(e){var r,t,n;if(null==e)return Ie.call(e);t=e[Se],r=Ne(e,Se);try{e[Se]=void 0}catch(r){return Ie.call(e)}return n=Ie.call(e),r?e[Se]=t:delete e[Se],n},Ae=se,Te=de,he=ue()?Te:Ae,ge=he,ve="function"==typeof Float32Array;var Me=function(e){return ve&&e instanceof Float32Array||"[object Float32Array]"===ge(e)},ye=Number.POSITIVE_INFINITY,we="function"==typeof Float32Array?Float32Array:null,me=Me,be=ye,Oe=we;var Le="function"==typeof Float32Array?Float32Array:void 0,Pe=function(){throw new Error("not implemented")},Re=function(){var e,r;if("function"!=typeof Oe)return!1;try{r=new Oe([1,3.14,-3.14,5e40]),e=me(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===be}catch(r){e=!1}return e}()?Le:Pe,Fe=new Re(1);var Ue=ae;"function"!=typeof Ue&&(Ue=function(e){return Fe[0]=e,Fe[0]});var Xe=Ue,Be=Xe(.004921566601151848),Ce=Xe(1.1920928955078125e-7),De=he,He="function"==typeof Uint32Array;var Ye="function"==typeof Uint32Array?Uint32Array:null,ke=function(e){return He&&e instanceof Uint32Array||"[object Uint32Array]"===De(e)},Ge=Ye;var xe="function"==typeof Uint32Array?Uint32Array:void 0,je=function(){throw new Error("not implemented")},We=function(){var e,r;if("function"!=typeof Ge)return!1;try{r=new Ge(r=[1,3.14,-3.14,4294967296,4294967297]),e=ke(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?xe:je,Ve=We,Qe=new Re(1);new Ve(Qe.buffer)[0]=4286578688;var $e=Qe[0],Ke=We,Ze=new Re(1);new Ke(Ze.buffer)[0]=2139095040;var ze=Ze[0],qe=Xe(.0003452669770922512),Je=V,er={};Je(er,"CBRT_EPS",Be),Je(er,"EPS",Ce),Je(er,"EXPONENT_BIAS",127),Je(er,"MAX",34028234663852886e22),Je(er,"MAX_SAFE_INTEGER",16777215),Je(er,"MIN_SAFE_INTEGER",-16777215),Je(er,"NINF",$e),Je(er,"NUM_BYTES",4),Je(er,"PINF",ze),Je(er,"PRECISION",24),Je(er,"SMALLEST_NORMAL",11754943508222875e-54),Je(er,"SMALLEST_SUBNORMAL",1401298464324817e-60),Je(er,"SQRT_EPS",qe);var rr=er,tr=ee.NEGATIVE_INFINITY,nr=Number.POSITIVE_INFINITY,ir=V,or={};ir(or,"APERY",1.2020569031595942),ir(or,"CATALAN",.915965594177219),ir(or,"CBRT_EPS",60554544523933395e-22),ir(or,"E",2.718281828459045),ir(or,"EPS",2220446049250313e-31),ir(or,"EULERGAMMA",.5772156649015329),ir(or,"EXPONENT_BIAS",1023),ir(or,"FOURTH_PI",.7853981633974483),ir(or,"FOURTH_ROOT_EPS",.0001220703125),ir(or,"GAMMA_LANCZOS_G",10.900511),ir(or,"GLAISHER",1.2824271291006226),ir(or,"HALF_LN2",.34657359027997264),ir(or,"HALF_PI",1.5707963267948966),ir(or,"HIGH_WORD_EXPONENT_MASK",2146435072),ir(or,"HIGH_WORD_SIGNIFICAND_MASK",1048575),ir(or,"LN_HALF",-.6931471805599453),ir(or,"LN_PI",1.1447298858494002),ir(or,"LN_SQRT_TWO_PI",.9189385332046728),ir(or,"LN10",2.302585092994046),ir(or,"LN2",.6931471805599453),ir(or,"LN_TWO_PI",1.8378770664093456),ir(or,"LOG2E",1.4426950408889634),ir(or,"LOG10E",.4342944819032518),ir(or,"MAX",17976931348623157e292),ir(or,"MAX_BASE2_EXPONENT",1023),ir(or,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),ir(or,"MAX_BASE10_EXPONENT",308),ir(or,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),ir(or,"MAX_LN",709.782712893384),ir(or,"MAX_SAFE_FIBONACCI",8944394323791464),ir(or,"MAX_SAFE_INTEGER",9007199254740991),ir(or,"MAX_SAFE_LUCAS",7639424778862807),ir(or,"MAX_SAFE_NTH_FIBONACCI",78),ir(or,"MAX_SAFE_NTH_LUCAS",76),ir(or,"MIN_BASE2_EXPONENT",-1022),ir(or,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),ir(or,"MIN_BASE10_EXPONENT",-308),ir(or,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),ir(or,"MIN_LN",-708.3964185322641),ir(or,"MIN_SAFE_INTEGER",-9007199254740991),ir(or,"NINF",tr),ir(or,"NUM_BYTES",8),ir(or,"PHI",1.618033988749895),ir(or,"PI",3.141592653589793),ir(or,"PI_SQUARED",9.869604401089358),ir(or,"PINF",nr),ir(or,"PRECISION",53),ir(or,"SMALLEST_NORMAL",22250738585072014e-324),ir(or,"SMALLEST_SUBNORMAL",5e-324),ir(or,"SQRT_EPS",1.4901161193847656e-8),ir(or,"SQRT_HALF",.7071067811865476),ir(or,"SQRT_HALF_PI",1.2533141373155003),ir(or,"SQRT_PHI",1.272019649514069),ir(or,"SQRT_PI",1.772453850905516),ir(or,"SQRT_THREE",1.7320508075688772),ir(or,"SQRT_TWO",1.4142135623730951),ir(or,"SQRT_TWO_PI",2.5066282746310007),ir(or,"TWO_PI",6.283185307179586);var ar=or,cr=V,ur={};cr(ur,"MAX",127),cr(ur,"MIN",-128),cr(ur,"NUM_BYTES",1);var lr=ur,fr=V,sr={};fr(sr,"MAX",32767),fr(sr,"MIN",-32768),fr(sr,"NUM_BYTES",2);var _r=sr,pr=V,Er={};pr(Er,"MAX",2147483647),pr(Er,"MIN",-2147483648),pr(Er,"NUM_BYTES",4);var Nr=Er,Sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Ir(){throw new Error("setTimeout has not been defined")}function dr(){throw new Error("clearTimeout has not been defined")}var Ar=Ir,Tr=dr;function hr(e){if(Ar===setTimeout)return setTimeout(e,0);if((Ar===Ir||!Ar)&&setTimeout)return Ar=setTimeout,setTimeout(e,0);try{return Ar(e,0)}catch(r){try{return Ar.call(null,e,0)}catch(r){return Ar.call(this,e,0)}}}"function"==typeof Sr.setTimeout&&(Ar=setTimeout),"function"==typeof Sr.clearTimeout&&(Tr=clearTimeout);var gr,vr=[],Mr=!1,yr=-1;function wr(){Mr&&gr&&(Mr=!1,gr.length?vr=gr.concat(vr):yr=-1,vr.length&&mr())}function mr(){if(!Mr){var e=hr(wr);Mr=!0;for(var r=vr.length;r;){for(gr=vr,vr=[];++yr<r;)gr&&gr[yr].run();yr=-1,r=vr.length}gr=null,Mr=!1,function(e){if(Tr===clearTimeout)return clearTimeout(e);if((Tr===dr||!Tr)&&clearTimeout)return Tr=clearTimeout,clearTimeout(e);try{Tr(e)}catch(r){try{return Tr.call(null,e)}catch(r){return Tr.call(this,e)}}}(e)}}function br(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];vr.push(new Or(e,r)),1!==vr.length||Mr||hr(mr)}function Or(e,r){this.fun=e,this.array=r}Or.prototype.run=function(){this.fun.apply(null,this.array)};var Lr="browser",Pr="browser",Rr={},Fr=[],Ur={},Xr={},Br={};function Cr(){}var Dr=Cr,Hr=Cr,Yr=Cr,kr=Cr,Gr=Cr,xr=Cr,jr=Cr;function Wr(e){throw new Error("process.binding is not supported")}function Vr(){return"/"}function Qr(e){throw new Error("process.chdir is not supported")}function $r(){return 0}var Kr=Sr.performance||{},Zr=Kr.now||Kr.mozNow||Kr.msNow||Kr.oNow||Kr.webkitNow||function(){return(new Date).getTime()};function zr(e){var r=.001*Zr.call(Kr),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var qr=new Date;function Jr(){return(new Date-qr)/1e3}var et={nextTick:br,title:Lr,browser:true,env:Rr,argv:Fr,version:"",versions:Ur,on:Dr,addListener:Hr,once:Yr,off:kr,removeListener:Gr,removeAllListeners:xr,emit:jr,binding:Wr,cwd:Vr,chdir:Qr,umask:$r,hrtime:zr,platform:Pr,release:Xr,config:Br,uptime:Jr},rt="win32"===e(Object.freeze({__proto__:null,addListener:Hr,argv:Fr,binding:Wr,browser:true,chdir:Qr,config:Br,cwd:Vr,default:et,emit:jr,env:Rr,hrtime:zr,nextTick:br,off:kr,on:Dr,once:Yr,platform:Pr,release:Xr,removeAllListeners:xr,removeListener:Gr,title:Lr,umask:$r,uptime:Jr,version:"",versions:Ur})).platform,tt=rt?"\\":"/",nt=V,it={};nt(it,"DELIMITER",rt?";":":"),nt(it,"DELIMITER_POSIX",":"),nt(it,"DELIMITER_WIN32",";"),nt(it,"SEP",tt),nt(it,"SEP_POSIX","/"),nt(it,"SEP_WIN32","\\");var ot=it,at=V,ct={};at(ct,"HOURS_IN_DAY",24),at(ct,"HOURS_IN_WEEK",168),at(ct,"MILLISECONDS_IN_DAY",864e5),at(ct,"MILLISECONDS_IN_HOUR",36e5),at(ct,"MILLISECONDS_IN_MINUTE",6e4),at(ct,"MILLISECONDS_IN_SECOND",1e3),at(ct,"MILLISECONDS_IN_WEEK",6048e5),at(ct,"MINUTES_IN_DAY",1440),at(ct,"MINUTES_IN_HOUR",60),at(ct,"MINUTES_IN_WEEK",10080),at(ct,"MONTHS_IN_YEAR",12),at(ct,"SECONDS_IN_DAY",86400),at(ct,"SECONDS_IN_HOUR",3600),at(ct,"SECONDS_IN_MINUTE",60),at(ct,"SECONDS_IN_WEEK",604800);var ut=ct,lt=V,ft={};lt(ft,"MAX",255),lt(ft,"NUM_BYTES",1);var st=ft,_t=V,pt={};_t(pt,"MAX",65535),_t(pt,"NUM_BYTES",2);var Et=pt,Nt=V,St={};Nt(St,"MAX",4294967295),Nt(St,"NUM_BYTES",4);var It=St,dt=V,At={};dt(At,"MAX",1114111),dt(At,"MAX_BMP",65535);var Tt=At,ht=V,gt={};return ht(gt,"array",K),ht(gt,"complex64",z),ht(gt,"complex128",J),ht(gt,"float16",oe),ht(gt,"float32",rr),ht(gt,"float64",ar),ht(gt,"int8",lr),ht(gt,"int16",_r),ht(gt,"int32",Nr),ht(gt,"path",ot),ht(gt,"time",ut),ht(gt,"uint8",st),ht(gt,"uint16",Et),ht(gt,"uint32",It),ht(gt,"unicode",Tt),gt}));
//# sourceMappingURL=bundle.js.map
