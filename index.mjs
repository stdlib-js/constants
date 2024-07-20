// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import N from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@v0.2.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.2.1-esm/index.mjs";var e={};N(e,"MAX_ARRAY_LENGTH",4294967295),N(e,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var t=new _(NaN,NaN),s=new _(0,0),O={};N(O,"NAN",t),N(O,"NUM_BYTES",8),N(O,"ZERO",s);var a=new E(NaN,NaN),r=new E(0,0),R={};N(R,"NAN",a),N(R,"NUM_BYTES",16),N(R,"ZERO",r);var L=S.NEGATIVE_INFINITY,i=S.POSITIVE_INFINITY,n={};N(n,"CBRT_EPS",.09921256574801247),N(n,"EPS",.0009765625),N(n,"EXPONENT_BIAS",15),N(n,"MAX",65504),N(n,"MAX_SAFE_INTEGER",2047),N(n,"MIN_SAFE_INTEGER",-2047),N(n,"NINF",L),N(n,"NUM_BYTES",2),N(n,"PINF",i),N(n,"PRECISION",11),N(n,"SMALLEST_NORMAL",6103515625e-14),N(n,"SMALLEST_SUBNORMAL",5.960464477539063e-8),N(n,"SQRT_EPS",.03125);var P=I(.004921566601151848),m=I(1.1920928955078125e-7),o=new A(1);new M(o.buffer)[0]=4286578688;var X=o[0],d=new A(1);new M(d.buffer)[0]=2139095040;var B=d[0],l=I(.0003452669770922512),v={};N(v,"ABS_MASK",2147483647),N(v,"CBRT_EPS",P),N(v,"EPS",m),N(v,"EXPONENT_BIAS",127),N(v,"EXPONENT_MASK",2139095040),N(v,"MAX",34028234663852886e22),N(v,"MAX_SAFE_INTEGER",16777215),N(v,"MIN_SAFE_INTEGER",-16777215),N(v,"NAN",NaN),N(v,"NINF",X),N(v,"NUM_BYTES",4),N(v,"PINF",B),N(v,"PRECISION",24),N(v,"SIGN_MASK",2147483648),N(v,"SIGNIFICAND_MASK",8388607),N(v,"SMALLEST_NORMAL",11754943508222875e-54),N(v,"SMALLEST_SUBNORMAL",1401298464324817e-60),N(v,"SQRT_EPS",l);var U=S.NEGATIVE_INFINITY,F=Number.POSITIVE_INFINITY,H={};N(H,"APERY",1.2020569031595942),N(H,"CATALAN",.915965594177219),N(H,"CBRT_EPS",60554544523933395e-22),N(H,"E",2.718281828459045),N(H,"EPS",2220446049250313e-31),N(H,"EULERGAMMA",.5772156649015329),N(H,"EXPONENT_BIAS",1023),N(H,"FOURTH_PI",.7853981633974483),N(H,"FOURTH_ROOT_EPS",.0001220703125),N(H,"GAMMA_LANCZOS_G",10.900511),N(H,"GLAISHER",1.2824271291006226),N(H,"HALF_LN2",.34657359027997264),N(H,"HALF_PI",1.5707963267948966),N(H,"HIGH_WORD_ABS_MASK",2147483647),N(H,"HIGH_WORD_EXPONENT_MASK",2146435072),N(H,"HIGH_WORD_SIGN_MASK",2147483648),N(H,"HIGH_WORD_SIGNIFICAND_MASK",1048575),N(H,"LN_HALF",-.6931471805599453),N(H,"LN_PI",1.1447298858494002),N(H,"LN_SQRT_TWO_PI",.9189385332046728),N(H,"LN10",2.302585092994046),N(H,"LN2",.6931471805599453),N(H,"LN_TWO_PI",1.8378770664093456),N(H,"LOG2E",1.4426950408889634),N(H,"LOG10E",.4342944819032518),N(H,"MAX",17976931348623157e292),N(H,"MAX_BASE2_EXPONENT",1023),N(H,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),N(H,"MAX_BASE10_EXPONENT",308),N(H,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),N(H,"MAX_LN",709.782712893384),N(H,"MAX_SAFE_FIBONACCI",8944394323791464),N(H,"MAX_SAFE_INTEGER",9007199254740991),N(H,"MAX_SAFE_LUCAS",7639424778862807),N(H,"MAX_SAFE_NTH_FIBONACCI",78),N(H,"MAX_SAFE_NTH_LUCAS",76),N(H,"MIN_BASE2_EXPONENT",-1022),N(H,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),N(H,"MIN_BASE10_EXPONENT",-308),N(H,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),N(H,"MIN_LN",-708.3964185322641),N(H,"MIN_SAFE_INTEGER",-9007199254740991),N(H,"NAN",NaN),N(H,"NINF",U),N(H,"NUM_BYTES",8),N(H,"PHI",1.618033988749895),N(H,"PI",3.141592653589793),N(H,"PI_SQUARED",9.869604401089358),N(H,"PINF",F),N(H,"PRECISION",53),N(H,"SMALLEST_NORMAL",22250738585072014e-324),N(H,"SMALLEST_SUBNORMAL",5e-324),N(H,"SQRT_EPS",1.4901161193847656e-8),N(H,"SQRT_HALF",.7071067811865476),N(H,"SQRT_HALF_PI",1.2533141373155003),N(H,"SQRT_PHI",1.272019649514069),N(H,"SQRT_PI",1.772453850905516),N(H,"SQRT_THREE",1.7320508075688772),N(H,"SQRT_TWO",1.4142135623730951),N(H,"SQRT_TWO_PI",2.5066282746310007),N(H,"TWO_PI",6.283185307179586);var p={};N(p,"MAX",127),N(p,"MIN",-128),N(p,"NUM_BYTES",1);var C={};N(C,"MAX",32767),N(C,"MIN",-32768),N(C,"NUM_BYTES",2);var f={};N(f,"MAX",2147483647),N(f,"MIN",-2147483648),N(f,"NUM_BYTES",4);var D=T?"\\":"/",j={};N(j,"DELIMITER",T?";":":"),N(j,"DELIMITER_POSIX",":"),N(j,"DELIMITER_WIN32",";"),N(j,"SEP",D),N(j,"SEP_POSIX","/"),N(j,"SEP_WIN32","\\");var G={};N(G,"HOURS_IN_DAY",24),N(G,"HOURS_IN_WEEK",168),N(G,"MILLISECONDS_IN_DAY",864e5),N(G,"MILLISECONDS_IN_HOUR",36e5),N(G,"MILLISECONDS_IN_MINUTE",6e4),N(G,"MILLISECONDS_IN_SECOND",1e3),N(G,"MILLISECONDS_IN_WEEK",6048e5),N(G,"MINUTES_IN_DAY",1440),N(G,"MINUTES_IN_HOUR",60),N(G,"MINUTES_IN_WEEK",10080),N(G,"MONTHS_IN_YEAR",12),N(G,"SECONDS_IN_DAY",86400),N(G,"SECONDS_IN_HOUR",3600),N(G,"SECONDS_IN_MINUTE",60),N(G,"SECONDS_IN_WEEK",604800);var Y={};N(Y,"MAX",255),N(Y,"NUM_BYTES",1);var c={};N(c,"MAX",65535),N(c,"NUM_BYTES",2);var h={};N(h,"MAX",4294967295),N(h,"NUM_BYTES",4);var u={};N(u,"MAX",1114111),N(u,"MAX_BMP",65535);var x={};N(x,"array",e),N(x,"complex64",O),N(x,"complex128",R),N(x,"float16",n),N(x,"float32",v),N(x,"float64",H),N(x,"int8",p),N(x,"int16",C),N(x,"int32",f),N(x,"path",j),N(x,"time",G),N(x,"uint8",Y),N(x,"uint16",c),N(x,"uint32",h),N(x,"unicode",u);export{e as array,R as complex128,O as complex64,x as default,n as float16,v as float32,H as float64,C as int16,f as int32,p as int8,j as path,G as time,c as uint16,h as uint32,Y as uint8,u as unicode};
//# sourceMappingURL=index.mjs.map
