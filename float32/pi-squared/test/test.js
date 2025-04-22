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
var absf = require( '@stdlib/math/base/special/absf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var EPS = require( './../../../float32/eps' );
var PI = require( './../../../float32/pi' );
var FLOAT32_PI_SQUARED = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_PI_SQUARED, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 9.869604110717773', function test( t ) {
	t.equal( FLOAT32_PI_SQUARED, 9.869604110717773, 'returns expected value' );
	t.end();
});

tape( 'export equals π²', function test( t ) {
	var delta;
	var tol;
	var v;

	v = float64ToFloat32( pow( PI, 2 ) );

	delta = absf( FLOAT32_PI_SQUARED - v );
	tol = EPS * v;

	t.ok( delta <= tol, 'equals π² within tolerance '+tol+'. v: '+v+'. π²: '+FLOAT32_PI_SQUARED+'.' );
	t.end();
});
