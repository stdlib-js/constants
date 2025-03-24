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
var lnf = require( '@stdlib/math/base/special/lnf' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var absf = require( '@stdlib/math/base/special/absf' );
var FLOAT32_TWO_PI = require( './../../../float32/two-pi' );
var EPS = require( './../../../float32/eps' );
var FLOAT32_LN_SQRT_TWO_PI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_LN_SQRT_TWO_PI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a single-precision floating-point number equal to 0.9189385175704956', function test( t ) {
	t.equal( FLOAT32_LN_SQRT_TWO_PI, 0.9189385175704956, 'equals 0.9189385175704956' );
	t.end();
});

tape( 'export equals ln(sqrt(2π))', function test( t ) {
	var delta;
	var tol;
	var v;

	v = lnf( sqrtf( FLOAT32_TWO_PI ) );

	delta = absf( v - FLOAT32_LN_SQRT_TWO_PI );
	tol = EPS * FLOAT32_LN_SQRT_TWO_PI;

	t.ok( delta <= tol, 'equals ln(sqrt(2π)) within tolerance '+tol );

	t.end();
});
