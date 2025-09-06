/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import ABS_MASK = require( './../../../float32/abs-mask' );
import CBRT_EPS = require( './../../../float32/cbrt-eps' );
import E = require( './../../../float32/e' );
import EPS = require( './../../../float32/eps' );
import EXPONENT_BIAS = require( './../../../float32/exponent-bias' );
import EXPONENT_MASK = require( './../../../float32/exponent-mask' );
import FOURTH_PI = require( './../../../float32/fourth-pi' );
import HALF_LN_TWO = require( './../../../float32/half-ln-two' );
import HALF_PI = require( './../../../float32/half-pi' );
import LN_HALF = require( './../../../float32/ln-half' );
import LN_PI = require( './../../../float32/ln-pi' );
import LN_TEN = require( './../../../float32/ln-ten' );
import LN_TWO = require( './../../../float32/ln-two' );
import MAX = require( './../../../float32/max' );
import MAX_BASE2_EXPONENT = require( './../../../float32/max-base2-exponent' );
import MAX_BASE2_EXPONENT_SUBNORMAL = require( './../../../float32/max-base2-exponent-subnormal' );
import MAX_BASE10_EXPONENT = require( './../../../float32/max-base10-exponent' );
import MAX_BASE10_EXPONENT_SUBNORMAL = require( './../../../float32/max-base10-exponent-subnormal' );
import MAX_SAFE_FIBONACCI = require( './../../../float32/max-safe-fibonacci' );
import MAX_SAFE_INTEGER = require( './../../../float32/max-safe-integer' );
import MAX_SAFE_NTH_FACTORIAL = require( './../../../float32/max-safe-nth-factorial' );
import MAX_SAFE_NTH_FIBONACCI = require( './../../../float32/max-safe-nth-fibonacci' );
import MAX_SAFE_NTH_LUCAS = require( './../../../float32/max-safe-nth-lucas' );
import MIN_BASE2_EXPONENT = require( './../../../float32/min-base2-exponent' );
import MIN_BASE2_EXPONENT_SUBNORMAL = require( './../../../float32/min-base2-exponent-subnormal' );
import MIN_BASE10_EXPONENT = require( './../../../float32/min-base10-exponent' );
import MIN_BASE10_EXPONENT_SUBNORMAL = require( './../../../float32/min-base10-exponent-subnormal' );
import MIN_SAFE_INTEGER = require( './../../../float32/min-safe-integer' );
import NAN = require( './../../../float32/nan' );
import NINF = require( './../../../float32/ninf' );
import NUM_BYTES = require( './../../../float32/num-bytes' );
import PHI = require( './../../../float32/phi' );
import PI = require( './../../../float32/pi' );
import PINF = require( './../../../float32/pinf' );
import PRECISION = require( './../../../float32/precision' );
import SIGN_MASK = require( './../../../float32/sign-mask' );
import SIGNIFICAND_MASK = require( './../../../float32/significand-mask' );
import SMALLEST_NORMAL = require( './../../../float32/smallest-normal' );
import SMALLEST_SUBNORMAL = require( './../../../float32/smallest-subnormal' );
import SQRT_EPS = require( './../../../float32/sqrt-eps' );
import SQRT_HALF = require( './../../../float32/sqrt-half' );
import SQRT_HALF_PI = require( './../../../float32/sqrt-half-pi' );
import SQRT_PHI = require( './../../../float32/sqrt-phi' );
import SQRT_PI = require( './../../../float32/sqrt-pi' );
import SQRT_THREE = require( './../../../float32/sqrt-three' );
import SQRT_TWO = require( './../../../float32/sqrt-two' );
import SQRT_TWO_PI = require( './../../../float32/sqrt-two-pi' );
import TWO_PI = require( './../../../float32/two-pi' );

/**
* Interface describing the `float32` namespace.
*/
interface Namespace {
	/**
	* Mask for excluding the sign bit of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.ABS_MASK;
	* // returns 2147483647
	*/
	ABS_MASK: typeof ABS_MASK;

	/**
	* Cube root of single-precision floating-point epsilon.
	*
	* @example
	* var eps = ns.CBRT_EPS;
	* // returns 0.004921566694974899
	*/
	CBRT_EPS: typeof CBRT_EPS;

	/**
	* Euler's number.
	*
	* @example
	* var e = ns.E;
	* // returns 2.7182817459106445
	*/
	E: typeof E;

	/**
	* Difference between one and the smallest value greater than one that can be represented as a single-precision floating-point number.
	*
	* @example
	* var eps = ns.EPS;
	* // returns 1.1920928955078125e-7
	*/
	EPS: typeof EPS;

	/**
	* The bias of a single-precision floating-point number's exponent.
	*
	* @example
	* var bias = ns.EXPONENT_BIAS;
	* // returns 127
	*/
	EXPONENT_BIAS: typeof EXPONENT_BIAS;

	/**
	* Mask for the exponent of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.EXPONENT_MASK;
	* // returns 2139095040
	*/
	EXPONENT_MASK: typeof EXPONENT_MASK;

	/**
	* One fourth times the mathematical constant `π`.
	*
	* @example
	* var val = ns.FOURTH_PI;
	* // returns 7.853981852531433e-1
	*/
	FOURTH_PI: typeof FOURTH_PI;

	/**
	* One half times the natural logarithm of 2 as a single-precision floating-point number.
	*
	* @example
	* var val = ns.HALF_LN_TWO;
	* // returns 0.3465735912322998
	*/
	HALF_LN_TWO: typeof HALF_LN_TWO;

	/**
	* One half times the mathematical constant `π`.
	*
	* @example
	* var val = ns.HALF_PI;
	* // returns 1.5707963705062866
	*/
	HALF_PI: typeof HALF_PI;

	/**
	* Natural logarithm of `1/2` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.LN_HALF;
	* // returns -0.6931471824645996
	*/
	LN_HALF: typeof LN_HALF;

	/**
	* Natural logarithm of the mathematical constant `π` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.LN_PI;
	* // returns 1.1447298526763916
	*/
	LN_PI: typeof LN_PI;

	/**
	* Natural logarithm of `10` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.LN_TEN;
	* // returns  2.3025851249694824
	*/
	LN_TEN: typeof LN_TEN;

	/**
	* Natural logarithm of `2` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.LN_TWO;
	* // returns 0.6931471824645996
	*/
	LN_TWO: typeof LN_TWO;

	/**
	* Maximum single-precision floating-point number.
	*
	* @example
	* var max = ns.MAX;
	* // returns 3.4028234663852886e+38
	*/
	MAX: typeof MAX;

	/**
	* The maximum biased base 2 exponent for a single-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE2_EXPONENT;
	* // returns 127
	*/
	MAX_BASE2_EXPONENT: typeof MAX_BASE2_EXPONENT;

	/**
	* The maximum biased base 2 exponent for a subnormal single-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE2_EXPONENT_SUBNORMAL;
	* // returns -127
	*/
	MAX_BASE2_EXPONENT_SUBNORMAL: typeof MAX_BASE2_EXPONENT_SUBNORMAL;

	/**
	* The maximum base 10 exponent for a single-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE10_EXPONENT;
	* // returns 38
	*/
	MAX_BASE10_EXPONENT: typeof MAX_BASE10_EXPONENT;

	/**
	* The maximum base 10 exponent for a subnormal single-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE10_EXPONENT_SUBNORMAL;
	* // returns -38
	*/
	MAX_BASE10_EXPONENT_SUBNORMAL: typeof MAX_BASE10_EXPONENT_SUBNORMAL;

	/**
	* Maximum safe Fibonacci number when stored in single-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_FIBONACCI;
	* // returns 14930352
	*/
	MAX_SAFE_FIBONACCI: typeof MAX_SAFE_FIBONACCI;

	/**
	* Maximum safe single-precision floating-point integer.
	*
	* @example
	* var max = ns.MAX_SAFE_INTEGER;
	* // returns 16777215
	*/
	MAX_SAFE_INTEGER: typeof MAX_SAFE_INTEGER;

	/**
	* Maximum safe nth factorial when stored in single-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_NTH_FACTORIAL;
	* // returns 10
	*/
	MAX_SAFE_NTH_FACTORIAL: typeof MAX_SAFE_NTH_FACTORIAL;

	/**
	* Maximum safe nth Fibonacci number when stored in single-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_NTH_FIBONACCI;
	* // returns 36
	*/
	MAX_SAFE_NTH_FIBONACCI: typeof MAX_SAFE_NTH_FIBONACCI;

	/**
	* Maximum safe nth Lucas number when stored in single-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_NTH_LUCAS;
	* // returns 34
	*/
	MAX_SAFE_NTH_LUCAS: typeof MAX_SAFE_NTH_LUCAS;

	/**
	* The minimum biased base 2 exponent for a normal single-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE2_EXPONENT;
	* // returns -126
	*/
	MIN_BASE2_EXPONENT: typeof MIN_BASE2_EXPONENT;

	/**
	* The minimum biased base 2 exponent for a subnormal single-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE2_EXPONENT_SUBNORMAL;
	* // returns -149
	*/
	MIN_BASE2_EXPONENT_SUBNORMAL: typeof MIN_BASE2_EXPONENT_SUBNORMAL;

	/**
	* The minimum base 10 exponent for a normal single-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE10_EXPONENT;
	* // returns -37
	*/
	MIN_BASE10_EXPONENT: typeof MIN_BASE10_EXPONENT;

	/**
	* The minimum base 10 exponent for a subnormal single-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE10_EXPONENT_SUBNORMAL;
	* // returns -45
	*/
	MIN_BASE10_EXPONENT_SUBNORMAL: typeof MIN_BASE10_EXPONENT_SUBNORMAL;

	/**
	* Minimum safe single-precision floating-point integer.
	*
	* @example
	* var min = ns.MIN_SAFE_INTEGER;
	* // returns -16777215
	*/
	MIN_SAFE_INTEGER: typeof MIN_SAFE_INTEGER;

	/**
	* Single-precision floating-point NaN.
	*
	* @example
	* var nan = ns.NAN;
	* // returns NaN
	*/
	NAN: typeof NAN;

	/**
	* Single-precision floating-point negative infinity.
	*
	* @example
	* var ninf = ns.NINF;
	* // returns -Infinity
	*/
	NINF: typeof NINF;

	/**
	* Size (in bytes) of a single-precision floating-point number.
	*
	* @example
	* var bytes = ns.NUM_BYTES;
	* // returns 4
	*/
	NUM_BYTES: typeof NUM_BYTES;

	/**
	* Golden ratio.
	*
	* @example
	* var val = ns.PHI;
	* // returns 1.6180340051651
	*/
	PHI: typeof PHI;

	/**
	* The mathematical constant `π`.
	*
	* @example
	* var val = ns.PI;
	* // returns 3.1415927410125732
	*/
	PI: typeof PI;

	/**
	* Single-precision floating-point positive infinity.
	*
	* @example
	* var pinf = ns.PINF;
	* // returns Infinity
	*/
	PINF: typeof PINF;

	/**
	* Effective number of bits in the significand of a single-precision floating-point number.
	*
	* @example
	* var precision = ns.PRECISION;
	* // returns 24
	*/
	PRECISION: typeof PRECISION;

	/**
	* Mask for the sign bit of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.SIGN_MASK;
	* // returns 2147483648
	*/
	SIGN_MASK: typeof SIGN_MASK;

	/**
	* Mask for the significand of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.SIGNIFICAND_MASK;
	* // returns 8388607
	*/
	SIGNIFICAND_MASK: typeof SIGNIFICAND_MASK;

	/**
	* Smallest positive single-precision floating-point normal number.
	*
	* @example
	* var smallest = ns.SMALLEST_NORMAL;
	* // returns 1.1754943508222875e-38
	*/
	SMALLEST_NORMAL: typeof SMALLEST_NORMAL;

	/**
	* Smallest positive single-precision floating-point subnormal number.
	*
	* @example
	* var smallest = ns.SMALLEST_SUBNORMAL;
	* // returns 1.401298464324817e-45
	*/
	SMALLEST_SUBNORMAL: typeof SMALLEST_SUBNORMAL;

	/**
	* Square root of single-precision floating-point epsilon.
	*
	* @example
	* var eps = ns.SQRT_EPS;
	* // returns 0.0003452669770922512
	*/
	SQRT_EPS: typeof SQRT_EPS;

	/**
	* Square root of `1/2` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.SQRT_HALF;
	* // returns 0.7071067690849304
	*/
	SQRT_HALF: typeof SQRT_HALF;

	/**
	* Square root of the mathematical constant `π` divided by `2` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.SQRT_HALF_PI;
	* // returns 1.2533141374588013
	*/
	SQRT_HALF_PI: typeof SQRT_HALF_PI;

	/**
	* Square root of the golden ratio as a single-precision floating-point number.
	*
	* @example
	* var val = ns.SQRT_PHI;
	* // returns 1.272019624710083
	*/
	SQRT_PHI: typeof SQRT_PHI;

	/**
	* Square root of the mathematical constant `π` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.SQRT_PI;
	* // returns 1.7724539041519165
	*/
	SQRT_PI: typeof SQRT_PI;

	/**
	* Square root of `3` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.SQRT_THREE;
	* // returns 1.7320507764816284
	*/
	SQRT_THREE: typeof SQRT_THREE;

	/**
	* Square root of `2` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.SQRT_TWO;
	* // returns 1.4142135381698608
	*/
	SQRT_TWO: typeof SQRT_TWO;

	/**
	* Square root of the mathematical constant `π` times `2` as a single-precision floating-point number.
	*
	* @example
	* var val = ns.SQRT_TWO_PI;
	* // returns 2.5066282749176025
	*/
	SQRT_TWO_PI: typeof SQRT_TWO_PI;

	/**
	* The mathematical constant `π` times `2`.
	*
	* @example
	* var val = ns.TWO_PI;
	* // returns 6.2831854820251465
	*/
	TWO_PI: typeof TWO_PI;
}

/**
* Single-precision floating-point mathematical constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
