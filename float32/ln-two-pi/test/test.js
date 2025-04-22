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
var absf = require( '@stdlib/math/base/special/absf' );
var EPS = require( './../../../float32/eps' );
var PI = require( './../../../float32/pi' );
var FLOAT32_LN_TWO_PI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_LN_TWO_PI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a single-precision floating-point number equal to `1.8378770351409912`', function test( t ) {
	t.equal( FLOAT32_LN_TWO_PI, 1.8378770351409912, 'returns expected value' );
	t.end();
});

tape( 'export equals `ln(2*pi)`', function test( t ) {
	var delta;
	var tol;
	var v;

	v = lnf( 2.0*PI );
	delta = absf( v - FLOAT32_LN_TWO_PI );
	tol = EPS * FLOAT32_LN_TWO_PI;

	t.ok( delta <= tol, 'equals ln(2*pi) within tolerance '+tol );

	t.end();
});
