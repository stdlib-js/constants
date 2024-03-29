<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Constants

> Single-precision floating-point mathematical constants.

<section class="usage">

## Usage

```javascript
var constants = require( '@stdlib/constants/float32' );
```

#### constants

Single-precision floating-point mathematical constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`ABS_MASK`][@stdlib/constants/float32/abs-mask]</span><span class="delimiter">: </span><span class="description">mask for excluding the sign bit of a single-precision floating-point number.</span>
-   <span class="signature">[`CBRT_EPS`][@stdlib/constants/float32/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of single-precision floating-point epsilon.</span>
-   <span class="signature">[`EPS`][@stdlib/constants/float32/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a single-precision floating-point number.</span>
-   <span class="signature">[`EXPONENT_BIAS`][@stdlib/constants/float32/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a single-precision floating-point number's exponent.</span>
-   <span class="signature">[`EXPONENT_MASK`][@stdlib/constants/float32/exponent-mask]</span><span class="delimiter">: </span><span class="description">mask for the exponent of a single-precision floating-point number.</span>
-   <span class="signature">[`MAX_SAFE_INTEGER`][@stdlib/constants/float32/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe single-precision floating-point integer.</span>
-   <span class="signature">[`MAX`][@stdlib/constants/float32/max]</span><span class="delimiter">: </span><span class="description">maximum single-precision floating-point number.</span>
-   <span class="signature">[`MIN_SAFE_INTEGER`][@stdlib/constants/float32/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe single-precision floating-point integer.</span>
-   <span class="signature">[`NAN`][@stdlib/constants/float32/nan]</span><span class="delimiter">: </span><span class="description">single-precision floating-point `NaN`.</span>
-   <span class="signature">[`NINF`][@stdlib/constants/float32/ninf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point negative infinity.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/float32/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a single-precision floating-point number.</span>
-   <span class="signature">[`PINF`][@stdlib/constants/float32/pinf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point positive infinity.</span>
-   <span class="signature">[`PRECISION`][@stdlib/constants/float32/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`SIGN_MASK`][@stdlib/constants/float32/sign-mask]</span><span class="delimiter">: </span><span class="description">mask for the sign bit of a single-precision floating-point number.</span>
-   <span class="signature">[`SIGNIFICAND_MASK`][@stdlib/constants/float32/significand-mask]</span><span class="delimiter">: </span><span class="description">mask for the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_NORMAL`][@stdlib/constants/float32/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive **normalized** single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_SUBNORMAL`][@stdlib/constants/float32/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive **denormalized** single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_EPS`][@stdlib/constants/float32/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of single-precision floating-point epsilon.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var constants = require( '@stdlib/constants/float32' );

console.log( objectKeys( constants ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/constants/float32/abs-mask]: https://github.com/stdlib-js/constants/tree/main/float32/abs-mask

[@stdlib/constants/float32/cbrt-eps]: https://github.com/stdlib-js/constants/tree/main/float32/cbrt-eps

[@stdlib/constants/float32/eps]: https://github.com/stdlib-js/constants/tree/main/float32/eps

[@stdlib/constants/float32/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float32/exponent-bias

[@stdlib/constants/float32/exponent-mask]: https://github.com/stdlib-js/constants/tree/main/float32/exponent-mask

[@stdlib/constants/float32/max-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float32/max-safe-integer

[@stdlib/constants/float32/max]: https://github.com/stdlib-js/constants/tree/main/float32/max

[@stdlib/constants/float32/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float32/min-safe-integer

[@stdlib/constants/float32/nan]: https://github.com/stdlib-js/constants/tree/main/float32/nan

[@stdlib/constants/float32/ninf]: https://github.com/stdlib-js/constants/tree/main/float32/ninf

[@stdlib/constants/float32/num-bytes]: https://github.com/stdlib-js/constants/tree/main/float32/num-bytes

[@stdlib/constants/float32/pinf]: https://github.com/stdlib-js/constants/tree/main/float32/pinf

[@stdlib/constants/float32/precision]: https://github.com/stdlib-js/constants/tree/main/float32/precision

[@stdlib/constants/float32/sign-mask]: https://github.com/stdlib-js/constants/tree/main/float32/sign-mask

[@stdlib/constants/float32/significand-mask]: https://github.com/stdlib-js/constants/tree/main/float32/significand-mask

[@stdlib/constants/float32/smallest-normal]: https://github.com/stdlib-js/constants/tree/main/float32/smallest-normal

[@stdlib/constants/float32/smallest-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/smallest-subnormal

[@stdlib/constants/float32/sqrt-eps]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-eps

<!-- </toc-links> -->

</section>

<!-- /.links -->
