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

# Square Root of Epsilon

> [Square root][@stdlib/math/base/special/sqrt] of [half-precision floating-point epsilon][@stdlib/constants/float16/eps].

<section class="usage">

## Usage

```javascript
var FLOAT16_SQRT_EPSILON = require( '@stdlib/constants/float16/sqrt-eps' );
```

#### FLOAT16_SQRT_EPSILON

[Square root][@stdlib/math/base/special/sqrt] of [half-precision floating-point epsilon][@stdlib/constants/float16/eps].

```javascript
var bool = ( FLOAT16_SQRT_EPSILON === 0.03125 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
var maxabs = require( '@stdlib/math/base/special/maxabs' );
var randu = require( '@stdlib/random/base/randu' );
var FLOAT16_SQRT_EPSILON = require( '@stdlib/constants/float16/sqrt-eps' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = abs( a - b );
    tol = FLOAT16_SQRT_EPSILON * maxabs( a, b );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = randu() * 10.0;
    b = a + (randu()*0.2) - 0.1;
    bool = isApprox( a, b );
    console.log( '%d %s approximately equal to %d', a, ( bool ) ? 'is' : 'is not', b );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float16/eps`][@stdlib/constants/float16/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a half-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants/float32/sqrt-eps`][@stdlib/constants/float32/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of single-precision floating-point epsilon.</span>
-   <span class="package-name">[`@stdlib/constants/float64/sqrt-eps`][@stdlib/constants/float64/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of double-precision floating-point epsilon.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt

<!-- <related-links> -->

[@stdlib/constants/float16/eps]: https://github.com/stdlib-js/constants/tree/main/float16/eps

[@stdlib/constants/float32/sqrt-eps]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-eps

[@stdlib/constants/float64/sqrt-eps]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-eps

<!-- </related-links> -->

</section>

<!-- /.links -->
