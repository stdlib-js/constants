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
var Number = require( '@stdlib/number/ctor' );
var FLOAT16_PINF = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT16_PINF, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is equal to positive infinity', function test( t ) {
	// Note: we rely on implicit type promotion. A 16-bit infinity should be promoted to a 64-bit infinity...
	t.equal( FLOAT16_PINF, Number.POSITIVE_INFINITY, 'returns expected value' );
	t.end();
});
