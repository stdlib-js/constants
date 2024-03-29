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

# EPS

> Difference between one and the smallest value greater than one that can be represented as a [double-precision floating-point number][ieee754].

<section class="intro">

[Epsilon][machine-epsilon] is defined as

<!-- <equation class="equation" label="eq:epsilon_float64" align="center" raw="\epsilon = b^{-(p-1)}" alt="Epsilon for a double-precision floating-point number."> -->

```math
\epsilon = b^{-(p-1)}
```

<!-- <div class="equation" align="center" data-raw-text="\epsilon = b^{-(p-1)}" data-equation="eq:epsilon_float64">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6e1cf583c4854b3d982f22f361f53a30c9f552dc/lib/node_modules/@stdlib/constants/float64/eps/docs/img/equation_epsilon_float64.svg" alt="Epsilon for a double-precision floating-point number.">
    <br>
</div> -->

<!-- </equation> -->

where `b` is the radix (base) and `p` is the precision (number of radix bits in the significand). For [double-precision floating-point numbers][ieee754], `b` is `2` and `p` is `53`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );
```

#### EPS

Difference between one and the smallest value greater than one that can be represented as a [double-precision floating-point number][ieee754].

```javascript
var bool = ( EPS === 2.220446049250313e-16 );
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
var EPS = require( '@stdlib/constants/float64/eps' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = abs( a - b );
    tol = EPS * max( abs( a ), abs( b ) );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = randu() * 10.0;
    b = a + (randu()*5.0e-15) - 2.5e-15;
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
#include "stdlib/constants/float64/eps.h"
```

#### STDLIB_CONSTANT_FLOAT64_EPS

Macro for the difference between one and the smallest value greater than one that can be represented as a [double-precision floating-point number][ieee754].

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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[machine-epsilon]: https://en.wikipedia.org/wiki/Machine_epsilon

<!-- <related-links> -->

[@stdlib/constants/float32/eps]: https://github.com/stdlib-js/constants/tree/main/float32/eps

<!-- </related-links> -->

</section>

<!-- /.links -->
