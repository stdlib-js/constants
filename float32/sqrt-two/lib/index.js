/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Square root of `2` as a single-precision floating-point number.
*
* @module @stdlib/constants/float32/sqrt-two
* @type {number}
*
* @example
* var FLOAT32_SQRT2 = require( '@stdlib/constants/float32/sqrt-two' );
* // returns 1.4142135381698608
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Square root of `2` as a single-precision floating-point number.
*
* ```tex
* \sqrt{2}
* ```
*
* @constant
* @type {number}
* @default 1.4142135381698608
*/
var FLOAT32_SQRT2 = float64ToFloat32( 1.41421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157273501384623e+00 ); // eslint-disable-line max-len


// EXPORTS //

module.exports = FLOAT32_SQRT2;
