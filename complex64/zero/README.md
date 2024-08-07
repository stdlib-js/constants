<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ZERO

> Single-precision complex floating-point zero.

<section class="usage">

## Usage

```javascript
var COMPLEX64_ZERO = require( '@stdlib/constants/complex64/zero' );
```

#### COMPLEX64_ZERO

Single-precision complex floating-point zero.

```javascript
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var re = realf( COMPLEX64_ZERO );
// returns 0.0

var im = imagf( COMPLEX64_ZERO );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var Complex64Array = require( '@stdlib/array/complex64' );
var COMPLEX64_ZERO = require( '@stdlib/constants/complex64/zero' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
// returns <Complex64Array>

var v = x.get( 0 );
// returns <Complex64>

var re = realf( v );
// returns 1.0

var im = imagf( v );
// returns 2.0

x.fill( COMPLEX64_ZERO );

v = x.get( 0 );
// returns <Complex64>

re = realf( v );
// returns 0.0

im = imagf( v );
// returns 0.0
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/complex128/zero`][@stdlib/constants/complex128/zero]</span><span class="delimiter">: </span><span class="description">double-precision complex floating-point zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/constants/complex128/zero]: https://github.com/stdlib-js/constants/tree/main/complex128/zero

<!-- </related-links> -->

</section>

<!-- /.links -->
