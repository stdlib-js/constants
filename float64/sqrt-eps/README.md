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

# SQRT_EPS

> [Square root][@stdlib/math/base/special/sqrt] of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

<section class="usage">

## Usage

```javascript
var SQRT_EPS = require( '@stdlib/constants/float64/sqrt-eps' );
```

#### SQRT_EPS

[Square root][@stdlib/math/base/special/sqrt] of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

```javascript
var bool = ( SQRT_EPS === 0.14901161193847656e-7 );
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
var randu = require( '@stdlib/random/base/randu' );
var SQRT_EPS = require( '@stdlib/constants/float64/sqrt-eps' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = abs( a - b );
    tol = SQRT_EPS * max( abs( a ), abs( b ) );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = randu() * 10.0;
    b = a + (randu()*5.0e-7) - 2.5e-7;
    bool = isApprox( a, b );
    console.log( '%d %s approximately equal to %d. Delta: %d.', a, ( bool ) ? 'is' : 'is not', b, abs( a - b ) );
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
#include "stdlib/constants/float64/sqrt_eps.h"
```

#### STDLIB_CONSTANT_FLOAT64_SQRT_EPS

Macro for the [square root][@stdlib/math/base/special/sqrt] of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

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

-   <span class="package-name">[`@stdlib/constants/float64/eps`][@stdlib/constants/float64/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt

<!-- <related-links> -->

[@stdlib/constants/float64/eps]: https://github.com/stdlib-js/constants/tree/main/float64/eps

<!-- </related-links> -->

</section>

<!-- /.links -->
