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

// MODULES //

var tape = require( 'tape' );
var pow = require( '@stdlib/math/base/special/pow' );
var lnf = require( '@stdlib/math/base/special/lnf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var SMALLEST_NORMAL = require( './../../../float32/smallest-normal' );
var FLOAT32_MIN_LN = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_MIN_LN, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a single-precision floating-point number equal to the natural logarithm of the smallest normalized single-precision floating-point number', function test( t ) {
	t.equal( FLOAT32_MIN_LN, -lnf( float64ToFloat32( pow( 2, 126 ) ) ), 'returns expected value' );
	t.equal( FLOAT32_MIN_LN, lnf( SMALLEST_NORMAL ), 'returns expected value' );
	t.end();
});
