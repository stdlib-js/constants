/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Natural logarithm of the smallest normalized single-precision floating-point number.
*
* @module @stdlib/constants/float32/min-ln
* @type {number}
*
* @example
* var FLOAT32_MIN_LN = require( '@stdlib/constants/float32/min-ln' );
* // returns -87.3365478515625
*/

// MAIN //

/**
* Natural logarithm of the smallest normalized single-precision floating-point number.
*
* ## Notes
*
* The number has the value
*
* ```tex
* -\ln \left( 2^{127-1} \right)
* ```
*
* @constant
* @type {number}
* @default -87.3365478515625
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MIN_LN = -87.3365478515625;


// EXPORTS //

module.exports = FLOAT32_MIN_LN;
