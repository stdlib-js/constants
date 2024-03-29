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

import array = require( './../../array' );
import complex64 = require( './../../complex64' );
import complex128 = require( './../../complex128' );
import float16 = require( './../../float16' );
import float32 = require( './../../float32' );
import float64 = require( './../../float64' );
import int8 = require( './../../int8' );
import int16 = require( './../../int16' );
import int32 = require( './../../int32' );
import path = require( './../../path' );
import time = require( './../../time' );
import uint8 = require( './../../uint8' );
import uint16 = require( './../../uint16' );
import uint32 = require( './../../uint32' );
import unicode = require( './../../unicode' );

/**
* Interface describing the `constants` namespace.
*/
interface Namespace {
	/**
	* Array constants.
	*/
	array: typeof array;

	/**
	* 64-bit complex number mathematical constants.
	*/
	complex64: typeof complex64;

	/**
	* 128-bit complex number mathematical constants.
	*/
	complex128: typeof complex128;

	/**
	* Half-precision floating-point mathematical constants.
	*/
	float16: typeof float16;

	/**
	* Single-precision floating-point mathematical constants.
	*/
	float32: typeof float32;

	/**
	* Double-precision floating-point mathematical constants.
	*/
	float64: typeof float64;

	/**
	* 8-bit signed integer mathematical constants.
	*/
	int8: typeof int8;

	/**
	* 16-bit signed integer mathematical constants.
	*/
	int16: typeof int16;

	/**
	* 32-bit signed integer mathematical constants.
	*/
	int32: typeof int32;

	/**
	* Standard string path constants.
	*/
	path: typeof path;

	/**
	* Time constants.
	*/
	time: typeof time;

	/**
	* 8-bit unsigned integer mathematical constants.
	*/
	uint8: typeof uint8;

	/**
	* 16-bit unsigned integer mathematical constants.
	*/
	uint16: typeof uint16;

	/**
	* 32-bit unsigned integer mathematical constants.
	*/
	uint32: typeof uint32;

	/**
	* Standard string unicode constants.
	*/
	unicode: typeof unicode;
}

/**
* Constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
