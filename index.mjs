// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.2-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.3-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@v0.2.2-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.2-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.2-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.2.2-esm/index.mjs";var e={};_(e,"MAX_ARRAY_LENGTH",4294967295),_(e,"MAX_TYPED_ARRAY_LENGTH",9007199254740991);var t=new N(NaN,NaN),s=new N(0,0),L={};_(L,"NAN",t),_(L,"NUM_BYTES",8),_(L,"ZERO",s);var R=new E(NaN,NaN),P=new E(0,0),a={};_(a,"NAN",R),_(a,"NUM_BYTES",16),_(a,"ZERO",P);var r=S.NEGATIVE_INFINITY,i=S.POSITIVE_INFINITY,n={};_(n,"CBRT_EPS",.09921256574801247),_(n,"EPS",.0009765625),_(n,"EXPONENT_BIAS",15),_(n,"MAX",65504),_(n,"MAX_SAFE_INTEGER",2047),_(n,"MIN_SAFE_INTEGER",-2047),_(n,"NINF",r),_(n,"NUM_BYTES",2),_(n,"PINF",i),_(n,"PRECISION",11),_(n,"SMALLEST_NORMAL",6103515625e-14),_(n,"SMALLEST_SUBNORMAL",5.960464477539063e-8),_(n,"SQRT_EPS",.03125);var X=A(.004921566601151848),B=A(2.718281828459045),m=A(1.1920928955078125e-7),o=A(.7853981633974483),F=A(1.5707963267948966),d=A(-.6931471805599453),H=A(2.302585092994046),l=new I(1);new T(l.buffer)[0]=4286578688;var U=l[0],v=A(1.618033988749895),C=A(3.141592653589793),p=new I(1);new T(p.buffer)[0]=2139095040;var f=p[0],j=A(.0003452669770922512),D=M(1.772453850905516),G=M(1.4142135623730951),Y=M(2.5066282746310007),c=M(6.283185307179586),h={};_(h,"ABS_MASK",2147483647),_(h,"CBRT_EPS",X),_(h,"E",B),_(h,"EPS",m),_(h,"EXPONENT_BIAS",127),_(h,"EXPONENT_MASK",2139095040),_(h,"FOURTH_PI",o),_(h,"HALF_LN_TWO",.3465735912322998),_(h,"HALF_PI",F),_(h,"LN_HALF",d),_(h,"LN_PI",1.1447298526763916),_(h,"LN_TEN",H),_(h,"LN_TWO",.6931471824645996),_(h,"MAX",34028234663852886e22),_(h,"MAX_BASE2_EXPONENT",127),_(h,"MAX_BASE2_EXPONENT_SUBNORMAL",-127),_(h,"MAX_BASE10_EXPONENT",38),_(h,"MAX_BASE10_EXPONENT_SUBNORMAL",-38),_(h,"MAX_SAFE_FIBONACCI",14930352),_(h,"MAX_SAFE_INTEGER",16777215),_(h,"MAX_SAFE_NTH_FACTORIAL",34),_(h,"MAX_SAFE_NTH_FIBONACCI",36),_(h,"MAX_SAFE_NTH_LUCAS",34),_(h,"MIN_BASE2_EXPONENT",-126),_(h,"MIN_BASE2_EXPONENT_SUBNORMAL",-149),_(h,"MIN_BASE10_EXPONENT",-37),_(h,"MIN_BASE10_EXPONENT_SUBNORMAL",-45),_(h,"MIN_SAFE_INTEGER",-16777215),_(h,"NAN",NaN),_(h,"NINF",U),_(h,"NUM_BYTES",4),_(h,"PHI",v),_(h,"PI",C),_(h,"PINF",f),_(h,"PRECISION",24),_(h,"SIGN_MASK",2147483648),_(h,"SIGNIFICAND_MASK",8388607),_(h,"SMALLEST_NORMAL",11754943508222875e-54),_(h,"SMALLEST_SUBNORMAL",1401298464324817e-60),_(h,"SQRT_EPS",j),_(h,"SQRT_HALF",.7071067690849304),_(h,"SQRT_HALF_PI",1.2533141374588013),_(h,"SQRT_PHI",1.272019624710083),_(h,"SQRT_PI",D),_(h,"SQRT_THREE",1.7320507764816284),_(h,"SQRT_TWO",G),_(h,"SQRT_TWO_PI",Y),_(h,"TWO_PI",c);var W=S.NEGATIVE_INFINITY,Q=Number.POSITIVE_INFINITY,b={};_(b,"APERY",1.2020569031595942),_(b,"CATALAN",.915965594177219),_(b,"CBRT_EPS",60554544523933395e-22),_(b,"E",2.718281828459045),_(b,"EPS",2220446049250313e-31),_(b,"EULERGAMMA",.5772156649015329),_(b,"EXPONENT_BIAS",1023),_(b,"FOURTH_PI",.7853981633974483),_(b,"FOURTH_ROOT_EPS",.0001220703125),_(b,"GAMMA_LANCZOS_G",10.900511),_(b,"GLAISHER",1.2824271291006226),_(b,"HALF_LN2",.34657359027997264),_(b,"HALF_PI",1.5707963267948966),_(b,"HIGH_WORD_ABS_MASK",2147483647),_(b,"HIGH_WORD_EXPONENT_MASK",2146435072),_(b,"HIGH_WORD_SIGN_MASK",2147483648),_(b,"HIGH_WORD_SIGNIFICAND_MASK",1048575),_(b,"LN_HALF",-.6931471805599453),_(b,"LN_PI",1.1447298858494002),_(b,"LN_SQRT_TWO_PI",.9189385332046728),_(b,"LN10",2.302585092994046),_(b,"LN2",.6931471805599453),_(b,"LN_TWO_PI",1.8378770664093456),_(b,"LOG2E",1.4426950408889634),_(b,"LOG10E",.4342944819032518),_(b,"MAX",17976931348623157e292),_(b,"MAX_BASE2_EXPONENT",1023),_(b,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),_(b,"MAX_BASE10_EXPONENT",308),_(b,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),_(b,"MAX_LN",709.782712893384),_(b,"MAX_SAFE_FIBONACCI",8944394323791464),_(b,"MAX_SAFE_INTEGER",9007199254740991),_(b,"MAX_SAFE_LUCAS",7639424778862807),_(b,"MAX_SAFE_NTH_FIBONACCI",78),_(b,"MAX_SAFE_NTH_LUCAS",76),_(b,"MIN_BASE2_EXPONENT",-1022),_(b,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),_(b,"MIN_BASE10_EXPONENT",-308),_(b,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),_(b,"MIN_LN",-708.3964185322641),_(b,"MIN_SAFE_INTEGER",-9007199254740991),_(b,"NAN",NaN),_(b,"NINF",W),_(b,"NUM_BYTES",8),_(b,"PHI",1.618033988749895),_(b,"PI",3.141592653589793),_(b,"PI_SQUARED",9.869604401089358),_(b,"PINF",Q),_(b,"PRECISION",53),_(b,"SMALLEST_NORMAL",22250738585072014e-324),_(b,"SMALLEST_SUBNORMAL",5e-324),_(b,"SQRT_EPS",1.4901161193847656e-8),_(b,"SQRT_HALF",.7071067811865476),_(b,"SQRT_HALF_PI",1.2533141373155003),_(b,"SQRT_PHI",1.272019649514069),_(b,"SQRT_PI",1.772453850905516),_(b,"SQRT_THREE",1.7320508075688772),_(b,"SQRT_TWO",1.4142135623730951),_(b,"SQRT_TWO_PI",2.5066282746310007),_(b,"TWO_PI",6.283185307179586);var u={};_(u,"MAX",127),_(u,"MIN",-128),_(u,"NUM_BYTES",1);var x={};_(x,"MAX",32767),_(x,"MIN",-32768),_(x,"NUM_BYTES",2);var K={};_(K,"MAX",2147483647),_(K,"MIN",-2147483648),_(K,"NUM_BYTES",4);var w=O?"\\":"/",g={};_(g,"DELIMITER",O?";":":"),_(g,"DELIMITER_POSIX",":"),_(g,"DELIMITER_WIN32",";"),_(g,"SEP",w),_(g,"SEP_POSIX","/"),_(g,"SEP_WIN32","\\");var y={};_(y,"HOURS_IN_DAY",24),_(y,"HOURS_IN_WEEK",168),_(y,"MILLISECONDS_IN_DAY",864e5),_(y,"MILLISECONDS_IN_HOUR",36e5),_(y,"MILLISECONDS_IN_MINUTE",6e4),_(y,"MILLISECONDS_IN_SECOND",1e3),_(y,"MILLISECONDS_IN_WEEK",6048e5),_(y,"MINUTES_IN_DAY",1440),_(y,"MINUTES_IN_HOUR",60),_(y,"MINUTES_IN_WEEK",10080),_(y,"MONTHS_IN_YEAR",12),_(y,"SECONDS_IN_DAY",86400),_(y,"SECONDS_IN_HOUR",3600),_(y,"SECONDS_IN_MINUTE",60),_(y,"SECONDS_IN_WEEK",604800);var V={};_(V,"MAX",255),_(V,"NUM_BYTES",1);var Z={};_(Z,"MAX",65535),_(Z,"NUM_BYTES",2);var k={};_(k,"MAX",4294967295),_(k,"NUM_BYTES",4);var q={};_(q,"MAX",1114111),_(q,"MAX_BMP",65535);var z={};_(z,"array",e),_(z,"complex64",L),_(z,"complex128",a),_(z,"float16",n),_(z,"float32",h),_(z,"float64",b),_(z,"int8",u),_(z,"int16",x),_(z,"int32",K),_(z,"path",g),_(z,"time",y),_(z,"uint8",V),_(z,"uint16",Z),_(z,"uint32",k),_(z,"unicode",q);export{e as array,a as complex128,L as complex64,z as default,n as float16,h as float32,b as float64,x as int16,K as int32,u as int8,g as path,y as time,Z as uint16,k as uint32,V as uint8,q as unicode};
//# sourceMappingURL=index.mjs.map
