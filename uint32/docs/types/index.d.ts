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

/* eslint-disable max-lines */

import MAX = require( './../../../uint32/max' );
import NUM_BYTES = require( './../../../uint32/num-bytes' );

/**
* Interface describing the `uint32` namespace.
*/
interface Namespace {
	/**
	* Maximum unsigned 32-bit integer.
	*
	* @example
	* var max = ns.MAX;
	* // returns 4294967295
	*/
	MAX: typeof MAX;

	/**
	* Size (in bytes) of a 32-bit unsigned integer.
	*
	* @example
	* var bytes = ns.NUM_BYTES;
	* // returns 4
	*/
	NUM_BYTES: typeof NUM_BYTES;
}

/**
* 32-bit unsigned integer mathematical constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
