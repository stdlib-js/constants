/*
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

// TypeScript Version: 4.1

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import MAX = require( './../../../int32/max' );
import MIN = require( './../../../int32/min' );
import NUM_BYTES = require( './../../../int32/num-bytes' );

/**
* Interface describing the `int32` namespace.
*/
interface Namespace {
	/**
	* Maximum signed 32-bit integer.
	*
	* @example
	* var max = ns.MAX;
	* // returns 2147483647
	*/
	MAX: typeof MAX;

	/**
	* Minimum signed 32-bit integer.
	*
	* @example
	* var min = ns.MIN;
	* // returns -2147483648
	*/
	MIN: typeof MIN;

	/**
	* Size (in bytes) of a 32-bit signed integer.
	*
	* @example
	* var bytes = ns.NUM_BYTES;
	* // returns 4
	*/
	NUM_BYTES: typeof NUM_BYTES;
}

/**
* 32-bit signed integer mathematical constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
