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
var FLOAT32_LN10 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_LN10, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a single-precision floating-point number equal to `2.3025851249694824`', function test( t ) {
	t.strictEqual( FLOAT32_LN10, 2.3025851249694824, 'returns expected value' );
	t.end();
});

tape( 'export equals `lnf(10)`', function test( t ) {
	var delta;
	var tol;
	var v;

	v = lnf( 10.0 );
	delta = absf( v - FLOAT32_LN10 );
	tol = EPS * FLOAT32_LN10;

	t.ok( delta <= tol, 'equals lnf(10) within tolerance '+tol );
	t.end();
});
