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
var pow = require( '@stdlib/math/base/special/pow' );
var FLOAT16_SMALLEST_SUBNORMAL = require( './../lib' );


// TESTS //

tape( 'the main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof FLOAT16_SMALLEST_SUBNORMAL, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the smallest half-precision floating-point denormalized value', function test( t ) {
	t.equal( FLOAT16_SMALLEST_SUBNORMAL, pow( 2.0, -14 )*pow( 2.0, -10 ), 'equals 2**-14 * 2**-10' );
	t.end();
});