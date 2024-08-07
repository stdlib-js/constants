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

# NAN

> Canonical single-precision complex floating-point `NaN`.

<section class="usage">

## Usage

```javascript
var COMPLEX64_NAN = require( '@stdlib/constants/complex64/nan' );
```

#### COMPLEX64_NAN

Canonical single-precision complex floating-point `NaN`.

```javascript
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var re = realf( COMPLEX64_NAN );
// returns NaN

var im = imagf( COMPLEX64_NAN );
// returns NaN
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
var COMPLEX64_NAN = require( '@stdlib/constants/complex64/nan' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
// returns <Complex64Array>

var v = x.get( 0 );
// returns <Complex64>

var re = realf( v );
// returns 1.0

var im = imagf( v );
// returns 2.0

x.fill( COMPLEX64_NAN );

v = x.get( 0 );
// returns <Complex64>

re = realf( v );
// returns NaN

im = imagf( v );
// returns NaN
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/complex128/nan`][@stdlib/constants/complex128/nan]</span><span class="delimiter">: </span><span class="description">canonical double-precision complex floating-point NaN.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/constants/complex128/nan]: https://github.com/stdlib-js/constants/tree/main/complex128/nan

<!-- </related-links> -->

</section>

<!-- /.links -->
