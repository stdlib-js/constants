// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@v0.1.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.0-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.0-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.0-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.1.1-esm/index.mjs";var M={};_(M,"MAX_ARRAY_LENGTH",4294967295),_(M,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var T={};_(T,"NUM_BYTES",8);var e={};_(e,"NUM_BYTES",16);var O=N.NEGATIVE_INFINITY,t=N.POSITIVE_INFINITY,L={};_(L,"CBRT_EPS",.09921256574801247),_(L,"EPS",.0009765625),_(L,"EXPONENT_BIAS",15),_(L,"MAX",65504),_(L,"MAX_SAFE_INTEGER",2047),_(L,"MIN_SAFE_INTEGER",-2047),_(L,"NINF",O),_(L,"NUM_BYTES",2),_(L,"PINF",t),_(L,"PRECISION",11),_(L,"SMALLEST_NORMAL",6103515625e-14),_(L,"SMALLEST_SUBNORMAL",5.960464477539063e-8),_(L,"SQRT_EPS",.03125);var s=E(.004921566601151848),R=E(1.1920928955078125e-7),a=new S(1);new I(a.buffer)[0]=4286578688;var r=a[0],P=new S(1);new I(P.buffer)[0]=2139095040;var i=P[0],n=E(.0003452669770922512),X={};_(X,"ABS_MASK",2147483647),_(X,"CBRT_EPS",s),_(X,"EPS",R),_(X,"EXPONENT_BIAS",127),_(X,"EXPONENT_MASK",2139095040),_(X,"MAX",34028234663852886e22),_(X,"MAX_SAFE_INTEGER",16777215),_(X,"MIN_SAFE_INTEGER",-16777215),_(X,"NINF",r),_(X,"NUM_BYTES",4),_(X,"PINF",i),_(X,"PRECISION",24),_(X,"SIGN_MASK",2147483648),_(X,"SIGNIFICAND_MASK",8388607),_(X,"SMALLEST_NORMAL",11754943508222875e-54),_(X,"SMALLEST_SUBNORMAL",1401298464324817e-60),_(X,"SQRT_EPS",n);var B=N.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,m={};_(m,"APERY",1.2020569031595942),_(m,"CATALAN",.915965594177219),_(m,"CBRT_EPS",60554544523933395e-22),_(m,"E",2.718281828459045),_(m,"EPS",2220446049250313e-31),_(m,"EULERGAMMA",.5772156649015329),_(m,"EXPONENT_BIAS",1023),_(m,"FOURTH_PI",.7853981633974483),_(m,"FOURTH_ROOT_EPS",.0001220703125),_(m,"GAMMA_LANCZOS_G",10.900511),_(m,"GLAISHER",1.2824271291006226),_(m,"HALF_LN2",.34657359027997264),_(m,"HALF_PI",1.5707963267948966),_(m,"HIGH_WORD_ABS_MASK",2147483647),_(m,"HIGH_WORD_EXPONENT_MASK",2146435072),_(m,"HIGH_WORD_SIGN_MASK",2147483648),_(m,"HIGH_WORD_SIGNIFICAND_MASK",1048575),_(m,"LN_HALF",-.6931471805599453),_(m,"LN_PI",1.1447298858494002),_(m,"LN_SQRT_TWO_PI",.9189385332046728),_(m,"LN10",2.302585092994046),_(m,"LN2",.6931471805599453),_(m,"LN_TWO_PI",1.8378770664093456),_(m,"LOG2E",1.4426950408889634),_(m,"LOG10E",.4342944819032518),_(m,"MAX",17976931348623157e292),_(m,"MAX_BASE2_EXPONENT",1023),_(m,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),_(m,"MAX_BASE10_EXPONENT",308),_(m,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),_(m,"MAX_LN",709.782712893384),_(m,"MAX_SAFE_FIBONACCI",8944394323791464),_(m,"MAX_SAFE_INTEGER",9007199254740991),_(m,"MAX_SAFE_LUCAS",7639424778862807),_(m,"MAX_SAFE_NTH_FIBONACCI",78),_(m,"MAX_SAFE_NTH_LUCAS",76),_(m,"MIN_BASE2_EXPONENT",-1022),_(m,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),_(m,"MIN_BASE10_EXPONENT",-308),_(m,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),_(m,"MIN_LN",-708.3964185322641),_(m,"MIN_SAFE_INTEGER",-9007199254740991),_(m,"NINF",B),_(m,"NUM_BYTES",8),_(m,"PHI",1.618033988749895),_(m,"PI",3.141592653589793),_(m,"PI_SQUARED",9.869604401089358),_(m,"PINF",U),_(m,"PRECISION",53),_(m,"SMALLEST_NORMAL",22250738585072014e-324),_(m,"SMALLEST_SUBNORMAL",5e-324),_(m,"SQRT_EPS",1.4901161193847656e-8),_(m,"SQRT_HALF",.7071067811865476),_(m,"SQRT_HALF_PI",1.2533141373155003),_(m,"SQRT_PHI",1.272019649514069),_(m,"SQRT_PI",1.772453850905516),_(m,"SQRT_THREE",1.7320508075688772),_(m,"SQRT_TWO",1.4142135623730951),_(m,"SQRT_TWO_PI",2.5066282746310007),_(m,"TWO_PI",6.283185307179586);var o={};_(o,"MAX",127),_(o,"MIN",-128),_(o,"NUM_BYTES",1);var F={};_(F,"MAX",32767),_(F,"MIN",-32768),_(F,"NUM_BYTES",2);var d={};_(d,"MAX",2147483647),_(d,"MIN",-2147483648),_(d,"NUM_BYTES",4);var v=A?"\\":"/",H={};_(H,"DELIMITER",A?";":":"),_(H,"DELIMITER_POSIX",":"),_(H,"DELIMITER_WIN32",";"),_(H,"SEP",v),_(H,"SEP_POSIX","/"),_(H,"SEP_WIN32","\\");var l={};_(l,"HOURS_IN_DAY",24),_(l,"HOURS_IN_WEEK",168),_(l,"MILLISECONDS_IN_DAY",864e5),_(l,"MILLISECONDS_IN_HOUR",36e5),_(l,"MILLISECONDS_IN_MINUTE",6e4),_(l,"MILLISECONDS_IN_SECOND",1e3),_(l,"MILLISECONDS_IN_WEEK",6048e5),_(l,"MINUTES_IN_DAY",1440),_(l,"MINUTES_IN_HOUR",60),_(l,"MINUTES_IN_WEEK",10080),_(l,"MONTHS_IN_YEAR",12),_(l,"SECONDS_IN_DAY",86400),_(l,"SECONDS_IN_HOUR",3600),_(l,"SECONDS_IN_MINUTE",60),_(l,"SECONDS_IN_WEEK",604800);var C={};_(C,"MAX",255),_(C,"NUM_BYTES",1);var D={};_(D,"MAX",65535),_(D,"NUM_BYTES",2);var G={};_(G,"MAX",4294967295),_(G,"NUM_BYTES",4);var Y={};_(Y,"MAX",1114111),_(Y,"MAX_BMP",65535);var f={};_(f,"array",M),_(f,"complex64",T),_(f,"complex128",e),_(f,"float16",L),_(f,"float32",X),_(f,"float64",m),_(f,"int8",o),_(f,"int16",F),_(f,"int32",d),_(f,"path",H),_(f,"time",l),_(f,"uint8",C),_(f,"uint16",D),_(f,"uint32",G),_(f,"unicode",Y);export{M as array,e as complex128,T as complex64,f as default,L as float16,X as float32,m as float64,F as int16,d as int32,o as int8,H as path,l as time,D as uint16,G as uint32,C as uint8,Y as unicode};
//# sourceMappingURL=index.mjs.map
