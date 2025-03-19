/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace constants
*/
var constants = {};

/**
* @name ABS_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/abs-mask}
*/
setReadOnly( constants, 'ABS_MASK', require( './../../float32/abs-mask' ) );

/**
* @name CBRT_EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/cbrt-eps}
*/
setReadOnly( constants, 'CBRT_EPS', require( './../../float32/cbrt-eps' ) );

/**
* @name E
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/e}
*/
setReadOnly( constants, 'E', require( './../../float32/e' ) );

/**
* @name EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/eps}
*/
setReadOnly( constants, 'EPS', require( './../../float32/eps' ) );

/**
* @name EXPONENT_BIAS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/exponent-bias}
*/
setReadOnly( constants, 'EXPONENT_BIAS', require( './../../float32/exponent-bias' ) );

/**
* @name EXPONENT_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/exponent-mask}
*/
setReadOnly( constants, 'EXPONENT_MASK', require( './../../float32/exponent-mask' ) );

/**
* @name FOURTH_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/fourth-pi}
*/
setReadOnly( constants, 'FOURTH_PI', require( './../../float32/fourth-pi' ) );

/**
* @name HALF_LN_TWO
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/half-ln-two}
*/
setReadOnly( constants, 'HALF_LN_TWO', require( './../../float32/half-ln-two' ) );

/**
* @name HALF_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/half-pi}
*/
setReadOnly( constants, 'HALF_PI', require( './../../float32/half-pi' ) );

/**
* @name LN_HALF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/ln-half}
*/
setReadOnly( constants, 'LN_HALF', require( './../../float32/ln-half' ) );

/**
* @name LN_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/ln-pi}
*/
setReadOnly( constants, 'LN_PI', require( './../../float32/ln-pi' ) );

/**
* @name LN_TEN
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/ln-ten}
*/
setReadOnly( constants, 'LN_TEN', require( './../../float32/ln-ten' ) );

/**
* @name LN_TWO
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/ln-two}
*/
setReadOnly( constants, 'LN_TWO', require( './../../float32/ln-two' ) );

/**
* @name MAX
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max}
*/
setReadOnly( constants, 'MAX', require( './../../float32/max' ) );

/**
* @name MAX_BASE2_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-base2-exponent}
*/
setReadOnly( constants, 'MAX_BASE2_EXPONENT', require( './../../float32/max-base2-exponent' ) );

/**
* @name MAX_BASE2_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-base2-exponent-subnormal}
*/
setReadOnly( constants, 'MAX_BASE2_EXPONENT_SUBNORMAL', require( './../../float32/max-base2-exponent-subnormal' ) );

/**
* @name MAX_BASE10_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-base10-exponent}
*/
setReadOnly( constants, 'MAX_BASE10_EXPONENT', require( './../../float32/max-base10-exponent' ) );

/**
* @name MAX_BASE10_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-base10-exponent-subnormal}
*/
setReadOnly( constants, 'MAX_BASE10_EXPONENT_SUBNORMAL', require( './../../float32/max-base10-exponent-subnormal' ) );

/**
* @name MAX_SAFE_FIBONACCI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-safe-fibonacci}
*/
setReadOnly( constants, 'MAX_SAFE_FIBONACCI', require( './../../float32/max-safe-fibonacci' ) );

/**
* @name MAX_SAFE_INTEGER
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-safe-integer}
*/
setReadOnly( constants, 'MAX_SAFE_INTEGER', require( './../../float32/max-safe-integer' ) );

/**
* @name MAX_SAFE_NTH_FACTORIAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-safe-nth-factorial}
*/
setReadOnly( constants, 'MAX_SAFE_NTH_FACTORIAL', require( './../../float32/max-safe-nth-factorial' ) );

/**
* @name MAX_SAFE_NTH_FIBONACCI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-safe-nth-fibonacci}
*/
setReadOnly( constants, 'MAX_SAFE_NTH_FIBONACCI', require( './../../float32/max-safe-nth-fibonacci' ) );

/**
* @name MAX_SAFE_NTH_LUCAS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/max-safe-nth-lucas}
*/
setReadOnly( constants, 'MAX_SAFE_NTH_LUCAS', require( './../../float32/max-safe-nth-lucas' ) );

/**
* @name MIN_BASE2_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/min-base2-exponent}
*/
setReadOnly( constants, 'MIN_BASE2_EXPONENT', require( './../../float32/min-base2-exponent' ) );

/**
* @name MIN_BASE2_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/min-base2-exponent-subnormal}
*/
setReadOnly( constants, 'MIN_BASE2_EXPONENT_SUBNORMAL', require( './../../float32/min-base2-exponent-subnormal' ) );

/**
* @name MIN_BASE10_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/min-base10-exponent}
*/
setReadOnly( constants, 'MIN_BASE10_EXPONENT', require( './../../float32/min-base10-exponent' ) );

/**
* @name MIN_BASE10_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/min-base10-exponent-subnormal}
*/
setReadOnly( constants, 'MIN_BASE10_EXPONENT_SUBNORMAL', require( './../../float32/min-base10-exponent-subnormal' ) );

/**
* @name MIN_SAFE_INTEGER
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/min-safe-integer}
*/
setReadOnly( constants, 'MIN_SAFE_INTEGER', require( './../../float32/min-safe-integer' ) );

/**
* @name NAN
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/nan}
*/
setReadOnly( constants, 'NAN', require( './../../float32/nan' ) );

/**
* @name NINF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/ninf}
*/
setReadOnly( constants, 'NINF', require( './../../float32/ninf' ) );

/**
* @name NUM_BYTES
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/num-bytes}
*/
setReadOnly( constants, 'NUM_BYTES', require( './../../float32/num-bytes' ) );

/**
* @name PHI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/phi}
*/
setReadOnly( constants, 'PHI', require( './../../float32/phi' ) );

/**
* @name PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/pi}
*/
setReadOnly( constants, 'PI', require( './../../float32/pi' ) );

/**
* @name PINF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/pinf}
*/
setReadOnly( constants, 'PINF', require( './../../float32/pinf' ) );

/**
* @name PRECISION
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/precision}
*/
setReadOnly( constants, 'PRECISION', require( './../../float32/precision' ) );

/**
* @name SIGN_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sign-mask}
*/
setReadOnly( constants, 'SIGN_MASK', require( './../../float32/sign-mask' ) );

/**
* @name SIGNIFICAND_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/significand-mask}
*/
setReadOnly( constants, 'SIGNIFICAND_MASK', require( './../../float32/significand-mask' ) );

/**
* @name SMALLEST_NORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/smallest-normal}
*/
setReadOnly( constants, 'SMALLEST_NORMAL', require( './../../float32/smallest-normal' ) );

/**
* @name SMALLEST_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/smallest-subnormal}
*/
setReadOnly( constants, 'SMALLEST_SUBNORMAL', require( './../../float32/smallest-subnormal' ) );

/**
* @name SQRT_EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-eps}
*/
setReadOnly( constants, 'SQRT_EPS', require( './../../float32/sqrt-eps' ) );

/**
* @name SQRT_HALF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-half}
*/
setReadOnly( constants, 'SQRT_HALF', require( './../../float32/sqrt-half' ) );

/**
* @name SQRT_HALF_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-half-pi}
*/
setReadOnly( constants, 'SQRT_HALF_PI', require( './../../float32/sqrt-half-pi' ) );

/**
* @name SQRT_PHI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-phi}
*/
setReadOnly( constants, 'SQRT_PHI', require( './../../float32/sqrt-phi' ) );

/**
* @name SQRT_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-pi}
*/
setReadOnly( constants, 'SQRT_PI', require( './../../float32/sqrt-pi' ) );

/**
* @name SQRT_THREE
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-three}
*/
setReadOnly( constants, 'SQRT_THREE', require( './../../float32/sqrt-three' ) );

/**
* @name SQRT_TWO
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-two}
*/
setReadOnly( constants, 'SQRT_TWO', require( './../../float32/sqrt-two' ) );

/**
* @name SQRT_TWO_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/sqrt-two-pi}
*/
setReadOnly( constants, 'SQRT_TWO_PI', require( './../../float32/sqrt-two-pi' ) );

/**
* @name TWO_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float32/two-pi}
*/
setReadOnly( constants, 'TWO_PI', require( './../../float32/two-pi' ) );


// EXPORTS //

module.exports = constants;
