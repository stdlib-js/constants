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

// MODULES //

var tape = require( 'tape' );
var lnf = require( '@stdlib/math/base/special/lnf' );
var absf = require( '@stdlib/math/base/special/absf' );
var EPS = require( './../../../float32/eps' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var FLOAT32_HALF_LN2 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_HALF_LN2, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a single-precision floating-point number equal to `0.3465735912322998`', function test( t ) {
	t.equal( FLOAT32_HALF_LN2, float64ToFloat32( 3.46573590279972654709e-01 ), 'returns expected value' );
	t.end();
});

tape( 'export equals `0.5*lnf(2)`', function test( t ) {
	var delta;
	var tol;
	var v;

	v = float64ToFloat32( 0.5 * lnf( 2.0 ) );
	delta = absf( float64ToFloat32( v - FLOAT32_HALF_LN2 ) );
	tol = EPS * FLOAT32_HALF_LN2;

	t.ok( delta <= tol, 'equals 0.5*lnf(2) within tolerance '+tol );

	t.end();
});
