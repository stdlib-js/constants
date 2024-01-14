// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.1.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.1.1-esm/index.mjs";var e={};_(e,"MAX_ARRAY_LENGTH",4294967295),_(e,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var t=new N(0,0),s={};_(s,"NUM_BYTES",8),_(s,"ZERO",t);var O=new E(0,0),r={};_(r,"NUM_BYTES",16),_(r,"ZERO",O);var R=S.NEGATIVE_INFINITY,a=S.POSITIVE_INFINITY,L={};_(L,"CBRT_EPS",.09921256574801247),_(L,"EPS",.0009765625),_(L,"EXPONENT_BIAS",15),_(L,"MAX",65504),_(L,"MAX_SAFE_INTEGER",2047),_(L,"MIN_SAFE_INTEGER",-2047),_(L,"NINF",R),_(L,"NUM_BYTES",2),_(L,"PINF",a),_(L,"PRECISION",11),_(L,"SMALLEST_NORMAL",6103515625e-14),_(L,"SMALLEST_SUBNORMAL",5.960464477539063e-8),_(L,"SQRT_EPS",.03125);var i=I(.004921566601151848),P=I(1.1920928955078125e-7),n=new A(1);new M(n.buffer)[0]=4286578688;var m=n[0],o=new A(1);new M(o.buffer)[0]=2139095040;var X=o[0],d=I(.0003452669770922512),B={};_(B,"ABS_MASK",2147483647),_(B,"CBRT_EPS",i),_(B,"EPS",P),_(B,"EXPONENT_BIAS",127),_(B,"EXPONENT_MASK",2139095040),_(B,"MAX",34028234663852886e22),_(B,"MAX_SAFE_INTEGER",16777215),_(B,"MIN_SAFE_INTEGER",-16777215),_(B,"NINF",m),_(B,"NUM_BYTES",4),_(B,"PINF",X),_(B,"PRECISION",24),_(B,"SIGN_MASK",2147483648),_(B,"SIGNIFICAND_MASK",8388607),_(B,"SMALLEST_NORMAL",11754943508222875e-54),_(B,"SMALLEST_SUBNORMAL",1401298464324817e-60),_(B,"SQRT_EPS",d);var l=S.NEGATIVE_INFINITY,v=Number.POSITIVE_INFINITY,U={};_(U,"APERY",1.2020569031595942),_(U,"CATALAN",.915965594177219),_(U,"CBRT_EPS",60554544523933395e-22),_(U,"E",2.718281828459045),_(U,"EPS",2220446049250313e-31),_(U,"EULERGAMMA",.5772156649015329),_(U,"EXPONENT_BIAS",1023),_(U,"FOURTH_PI",.7853981633974483),_(U,"FOURTH_ROOT_EPS",.0001220703125),_(U,"GAMMA_LANCZOS_G",10.900511),_(U,"GLAISHER",1.2824271291006226),_(U,"HALF_LN2",.34657359027997264),_(U,"HALF_PI",1.5707963267948966),_(U,"HIGH_WORD_ABS_MASK",2147483647),_(U,"HIGH_WORD_EXPONENT_MASK",2146435072),_(U,"HIGH_WORD_SIGN_MASK",2147483648),_(U,"HIGH_WORD_SIGNIFICAND_MASK",1048575),_(U,"LN_HALF",-.6931471805599453),_(U,"LN_PI",1.1447298858494002),_(U,"LN_SQRT_TWO_PI",.9189385332046728),_(U,"LN10",2.302585092994046),_(U,"LN2",.6931471805599453),_(U,"LN_TWO_PI",1.8378770664093456),_(U,"LOG2E",1.4426950408889634),_(U,"LOG10E",.4342944819032518),_(U,"MAX",17976931348623157e292),_(U,"MAX_BASE2_EXPONENT",1023),_(U,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),_(U,"MAX_BASE10_EXPONENT",308),_(U,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),_(U,"MAX_LN",709.782712893384),_(U,"MAX_SAFE_FIBONACCI",8944394323791464),_(U,"MAX_SAFE_INTEGER",9007199254740991),_(U,"MAX_SAFE_LUCAS",7639424778862807),_(U,"MAX_SAFE_NTH_FIBONACCI",78),_(U,"MAX_SAFE_NTH_LUCAS",76),_(U,"MIN_BASE2_EXPONENT",-1022),_(U,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),_(U,"MIN_BASE10_EXPONENT",-308),_(U,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),_(U,"MIN_LN",-708.3964185322641),_(U,"MIN_SAFE_INTEGER",-9007199254740991),_(U,"NINF",l),_(U,"NUM_BYTES",8),_(U,"PHI",1.618033988749895),_(U,"PI",3.141592653589793),_(U,"PI_SQUARED",9.869604401089358),_(U,"PINF",v),_(U,"PRECISION",53),_(U,"SMALLEST_NORMAL",22250738585072014e-324),_(U,"SMALLEST_SUBNORMAL",5e-324),_(U,"SQRT_EPS",1.4901161193847656e-8),_(U,"SQRT_HALF",.7071067811865476),_(U,"SQRT_HALF_PI",1.2533141373155003),_(U,"SQRT_PHI",1.272019649514069),_(U,"SQRT_PI",1.772453850905516),_(U,"SQRT_THREE",1.7320508075688772),_(U,"SQRT_TWO",1.4142135623730951),_(U,"SQRT_TWO_PI",2.5066282746310007),_(U,"TWO_PI",6.283185307179586);var F={};_(F,"MAX",127),_(F,"MIN",-128),_(F,"NUM_BYTES",1);var H={};_(H,"MAX",32767),_(H,"MIN",-32768),_(H,"NUM_BYTES",2);var p={};_(p,"MAX",2147483647),_(p,"MIN",-2147483648),_(p,"NUM_BYTES",4);var C=T?"\\":"/",f={};_(f,"DELIMITER",T?";":":"),_(f,"DELIMITER_POSIX",":"),_(f,"DELIMITER_WIN32",";"),_(f,"SEP",C),_(f,"SEP_POSIX","/"),_(f,"SEP_WIN32","\\");var D={};_(D,"HOURS_IN_DAY",24),_(D,"HOURS_IN_WEEK",168),_(D,"MILLISECONDS_IN_DAY",864e5),_(D,"MILLISECONDS_IN_HOUR",36e5),_(D,"MILLISECONDS_IN_MINUTE",6e4),_(D,"MILLISECONDS_IN_SECOND",1e3),_(D,"MILLISECONDS_IN_WEEK",6048e5),_(D,"MINUTES_IN_DAY",1440),_(D,"MINUTES_IN_HOUR",60),_(D,"MINUTES_IN_WEEK",10080),_(D,"MONTHS_IN_YEAR",12),_(D,"SECONDS_IN_DAY",86400),_(D,"SECONDS_IN_HOUR",3600),_(D,"SECONDS_IN_MINUTE",60),_(D,"SECONDS_IN_WEEK",604800);var j={};_(j,"MAX",255),_(j,"NUM_BYTES",1);var G={};_(G,"MAX",65535),_(G,"NUM_BYTES",2);var Y={};_(Y,"MAX",4294967295),_(Y,"NUM_BYTES",4);var h={};_(h,"MAX",1114111),_(h,"MAX_BMP",65535);var c={};_(c,"array",e),_(c,"complex64",s),_(c,"complex128",r),_(c,"float16",L),_(c,"float32",B),_(c,"float64",U),_(c,"int8",F),_(c,"int16",H),_(c,"int32",p),_(c,"path",f),_(c,"time",D),_(c,"uint8",j),_(c,"uint16",G),_(c,"uint32",Y),_(c,"unicode",h);export{e as array,r as complex128,s as complex64,c as default,L as float16,B as float32,U as float64,H as int16,p as int32,F as int8,f as path,D as time,G as uint16,Y as uint32,j as uint8,h as unicode};
//# sourceMappingURL=index.mjs.map
