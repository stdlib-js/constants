/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var ln = require( '@stdlib/math/base/special/ln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var TWO_PI = require( './../../../float64/two-pi' );
var EPS = require( './../../../float64/eps' );
var LN_SQRT_TWO_PI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof LN_SQRT_TWO_PI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 0.9189385332046728', function test( t ) {
	t.equal( LN_SQRT_TWO_PI, 0.9189385332046728, 'equals 0.9189385332046728' );
	t.end();
});

tape( 'export equals ln(sqrt(2π))', function test( t ) {
	var delta;
	var tol;
	var v;

	v = ln( sqrt( TWO_PI ) );

	delta = abs( v - LN_SQRT_TWO_PI );
	tol = EPS * LN_SQRT_TWO_PI;

	t.ok( delta <= tol, 'equals ln(sqrt(2π)) within tolerance '+tol );

	t.end();
});
