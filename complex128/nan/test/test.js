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
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var COMPLEX128_NAN = require( './../lib' );


// TESTS //

tape( 'main export is a complex floating-point number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( isComplex128( COMPLEX128_NAN ), true, 'main export is a complex number' );
	t.end();
});

tape( 'export is equal to a canonical complex floating-point NaN', function test( t ) {
	t.strictEqual( isnan( real( COMPLEX128_NAN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( COMPLEX128_NAN ) ), true, 'returns expected value' );
	t.end();
});
