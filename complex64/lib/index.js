/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name NAN
* @memberof ns
* @readonly
* @constant
* @type {Complex64}
* @see {@link module:@stdlib/constants/complex64/nan}
*/
setReadOnly( ns, 'NAN', require( './../../complex64/nan' ) );

/**
* @name NUM_BYTES
* @memberof ns
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/complex64/num-bytes}
*/
setReadOnly( ns, 'NUM_BYTES', require( './../../complex64/num-bytes' ) );

/**
* @name ZERO
* @memberof ns
* @readonly
* @constant
* @type {Complex64}
* @see {@link module:@stdlib/constants/complex64/zero}
*/
setReadOnly( ns, 'ZERO', require( './../../complex64/zero' ) );


// EXPORTS //

module.exports = ns;
