<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# FLOAT32_SQRT_EPS

> [Square root][@stdlib/math/base/special/sqrt] of [single-precision floating-point epsilon][@stdlib/constants/float32/eps].

<section class="usage">

## Usage

```javascript
var FLOAT32_SQRT_EPS = require( '@stdlib/constants/float32/sqrt-eps' );
```

#### FLOAT32_SQRT_EPS

[Square root][@stdlib/math/base/special/sqrt] of [single-precision floating-point epsilon][@stdlib/constants/float32/eps].

```javascript
var bool = ( FLOAT32_SQRT_EPS === 0.0003452669770922512 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
var max = require( '@stdlib/math/base/special/max' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var randu = require( '@stdlib/random/base/randu' );
var FLOAT32_SQRT_EPS = require( '@stdlib/constants/float32/sqrt-eps' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = float64ToFloat32( abs( a - b ) );
    tol = float64ToFloat32( FLOAT32_SQRT_EPS * max( abs( a ), abs( b ) ) );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = float64ToFloat32( randu()*10.0 );
    b = float64ToFloat32( a + (randu()*2.0e-2) - 1.0e-2 );
    bool = isApprox( a, b );
    console.log( '%d %s approximately equal to %d', a, ( bool ) ? 'is' : 'is not', b );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/constants/float32/sqrt_eps.h"
```

#### STDLIB_CONSTANT_FLOAT32_SQRT_EPS

Macro for the [square root][@stdlib/math/base/special/sqrt] of [single-precision floating-point epsilon][@stdlib/constants/float32/eps].

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float32/eps`][@stdlib/constants/float32/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants/float64/sqrt-eps`][@stdlib/constants/float64/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of double-precision floating-point epsilon.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt

<!-- <related-links> -->

[@stdlib/constants/float32/eps]: https://github.com/stdlib-js/constants/tree/main/float32/eps

[@stdlib/constants/float64/sqrt-eps]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-eps

<!-- </related-links> -->

</section>

<!-- /.links -->
