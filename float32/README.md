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
-   <span class="signature">[`E`][@stdlib/constants/float32/e]</span><span class="delimiter">: </span><span class="description">the mathematical constant _e_.</span>
-   <span class="signature">[`EPS`][@stdlib/constants/float32/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a single-precision floating-point number.</span>
-   <span class="signature">[`EXPONENT_BIAS`][@stdlib/constants/float32/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a single-precision floating-point number's exponent.</span>
-   <span class="signature">[`EXPONENT_MASK`][@stdlib/constants/float32/exponent-mask]</span><span class="delimiter">: </span><span class="description">mask for the exponent of a single-precision floating-point number.</span>
-   <span class="signature">[`FOURTH_PI`][@stdlib/constants/float32/fourth-pi]</span><span class="delimiter">: </span><span class="description">one fourth times the mathematical constant π.</span>
-   <span class="signature">[`HALF_LN_TWO`][@stdlib/constants/float32/half-ln-two]</span><span class="delimiter">: </span><span class="description">one half times the natural logarithm of `2` as a single-precision floating-point number.</span>
-   <span class="signature">[`HALF_PI`][@stdlib/constants/float32/half-pi]</span><span class="delimiter">: </span><span class="description">one half times the mathematical constant π.</span>
-   <span class="signature">[`LN_HALF`][@stdlib/constants/float32/ln-half]</span><span class="delimiter">: </span><span class="description">natural logarithm of `1/2` as a single-precision floating-point number.</span>
-   <span class="signature">[`LN_PI`][@stdlib/constants/float32/ln-pi]</span><span class="delimiter">: </span><span class="description">natural logarithm of the mathematical constant π as a single-precision floating-point number.</span>
-   <span class="signature">[`LN_TEN`][@stdlib/constants/float32/ln-ten]</span><span class="delimiter">: </span><span class="description">natural logarithm of `10` as a single-precision floating-point number.</span>
-   <span class="signature">[`LN_TWO`][@stdlib/constants/float32/ln-two]</span><span class="delimiter">: </span><span class="description">natural logarithm of `2` as a single-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE10_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/max-base10-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the maximum base 10 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE10_EXPONENT`][@stdlib/constants/float32/max-base10-exponent]</span><span class="delimiter">: </span><span class="description">the maximum base 10 exponent for a single-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE2_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/max-base2-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the maximum biased base 2 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE2_EXPONENT`][@stdlib/constants/float32/max-base2-exponent]</span><span class="delimiter">: </span><span class="description">the maximum biased base 2 exponent for a single-precision floating-point number.</span>
-   <span class="signature">[`MAX_SAFE_FIBONACCI`][@stdlib/constants/float32/max-safe-fibonacci]</span><span class="delimiter">: </span><span class="description">maximum safe Fibonacci number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_INTEGER`][@stdlib/constants/float32/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe single-precision floating-point integer.</span>
-   <span class="signature">[`MAX_SAFE_NTH_FACTORIAL`][@stdlib/constants/float32/max-safe-nth-factorial]</span><span class="delimiter">: </span><span class="description">maximum safe nth factorial when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_FIBONACCI`][@stdlib/constants/float32/max-safe-nth-fibonacci]</span><span class="delimiter">: </span><span class="description">maximum safe nth Fibonacci number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_LUCAS`][@stdlib/constants/float32/max-safe-nth-lucas]</span><span class="delimiter">: </span><span class="description">maximum safe nth Lucas number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX`][@stdlib/constants/float32/max]</span><span class="delimiter">: </span><span class="description">maximum single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE10_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/min-base10-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the minimum base 10 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE10_EXPONENT`][@stdlib/constants/float32/min-base10-exponent]</span><span class="delimiter">: </span><span class="description">the minimum base 10 exponent for a normal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE2_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/min-base2-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the minimum biased base 2 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE2_EXPONENT`][@stdlib/constants/float32/min-base2-exponent]</span><span class="delimiter">: </span><span class="description">the minimum biased base 2 exponent for a normal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_SAFE_INTEGER`][@stdlib/constants/float32/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe single-precision floating-point integer.</span>
-   <span class="signature">[`NAN`][@stdlib/constants/float32/nan]</span><span class="delimiter">: </span><span class="description">single-precision floating-point `NaN`.</span>
-   <span class="signature">[`NINF`][@stdlib/constants/float32/ninf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point negative infinity.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/float32/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a single-precision floating-point number.</span>
-   <span class="signature">[`PHI`][@stdlib/constants/float32/phi]</span><span class="delimiter">: </span><span class="description">golden ratio.</span>
-   <span class="signature">[`PI`][@stdlib/constants/float32/pi]</span><span class="delimiter">: </span><span class="description">the mathematical constant π.</span>
-   <span class="signature">[`PINF`][@stdlib/constants/float32/pinf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point positive infinity.</span>
-   <span class="signature">[`PRECISION`][@stdlib/constants/float32/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`SIGN_MASK`][@stdlib/constants/float32/sign-mask]</span><span class="delimiter">: </span><span class="description">mask for the sign bit of a single-precision floating-point number.</span>
-   <span class="signature">[`SIGNIFICAND_MASK`][@stdlib/constants/float32/significand-mask]</span><span class="delimiter">: </span><span class="description">mask for the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_NORMAL`][@stdlib/constants/float32/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive **normalized** single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_SUBNORMAL`][@stdlib/constants/float32/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive **denormalized** single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_EPS`][@stdlib/constants/float32/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of single-precision floating-point epsilon.</span>
-   <span class="signature">[`SQRT_HALF_PI`][@stdlib/constants/float32/sqrt-half-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π divided by 2 as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_HALF`][@stdlib/constants/float32/sqrt-half]</span><span class="delimiter">: </span><span class="description">square root of `1/2` as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_PHI`][@stdlib/constants/float32/sqrt-phi]</span><span class="delimiter">: </span><span class="description">square root of the Golden ratio (φ) as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_PI`][@stdlib/constants/float32/sqrt-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_THREE`][@stdlib/constants/float32/sqrt-three]</span><span class="delimiter">: </span><span class="description">square root of `3` as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_TWO_PI`][@stdlib/constants/float32/sqrt-two-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π times 2 as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_TWO`][@stdlib/constants/float32/sqrt-two]</span><span class="delimiter">: </span><span class="description">square root of `2` as a single-precision floating-point number.</span>
-   <span class="signature">[`TWO_PI`][@stdlib/constants/float32/two-pi]</span><span class="delimiter">: </span><span class="description">the mathematical constant π times 2.</span>

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

[@stdlib/constants/float32/e]: https://github.com/stdlib-js/constants/tree/main/float32/e

[@stdlib/constants/float32/eps]: https://github.com/stdlib-js/constants/tree/main/float32/eps

[@stdlib/constants/float32/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float32/exponent-bias

[@stdlib/constants/float32/exponent-mask]: https://github.com/stdlib-js/constants/tree/main/float32/exponent-mask

[@stdlib/constants/float32/fourth-pi]: https://github.com/stdlib-js/constants/tree/main/float32/fourth-pi

[@stdlib/constants/float32/half-ln-two]: https://github.com/stdlib-js/constants/tree/main/float32/half-ln-two

[@stdlib/constants/float32/half-pi]: https://github.com/stdlib-js/constants/tree/main/float32/half-pi

[@stdlib/constants/float32/ln-half]: https://github.com/stdlib-js/constants/tree/main/float32/ln-half

[@stdlib/constants/float32/ln-pi]: https://github.com/stdlib-js/constants/tree/main/float32/ln-pi

[@stdlib/constants/float32/ln-ten]: https://github.com/stdlib-js/constants/tree/main/float32/ln-ten

[@stdlib/constants/float32/ln-two]: https://github.com/stdlib-js/constants/tree/main/float32/ln-two

[@stdlib/constants/float32/max-base10-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/max-base10-exponent-subnormal

[@stdlib/constants/float32/max-base10-exponent]: https://github.com/stdlib-js/constants/tree/main/float32/max-base10-exponent

[@stdlib/constants/float32/max-base2-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/max-base2-exponent-subnormal

[@stdlib/constants/float32/max-base2-exponent]: https://github.com/stdlib-js/constants/tree/main/float32/max-base2-exponent

[@stdlib/constants/float32/max-safe-fibonacci]: https://github.com/stdlib-js/constants/tree/main/float32/max-safe-fibonacci

[@stdlib/constants/float32/max-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float32/max-safe-integer

[@stdlib/constants/float32/max-safe-nth-factorial]: https://github.com/stdlib-js/constants/tree/main/float32/max-safe-nth-factorial

[@stdlib/constants/float32/max-safe-nth-fibonacci]: https://github.com/stdlib-js/constants/tree/main/float32/max-safe-nth-fibonacci

[@stdlib/constants/float32/max-safe-nth-lucas]: https://github.com/stdlib-js/constants/tree/main/float32/max-safe-nth-lucas

[@stdlib/constants/float32/max]: https://github.com/stdlib-js/constants/tree/main/float32/max

[@stdlib/constants/float32/min-base10-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/min-base10-exponent-subnormal

[@stdlib/constants/float32/min-base10-exponent]: https://github.com/stdlib-js/constants/tree/main/float32/min-base10-exponent

[@stdlib/constants/float32/min-base2-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/min-base2-exponent-subnormal

[@stdlib/constants/float32/min-base2-exponent]: https://github.com/stdlib-js/constants/tree/main/float32/min-base2-exponent

[@stdlib/constants/float32/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float32/min-safe-integer

[@stdlib/constants/float32/nan]: https://github.com/stdlib-js/constants/tree/main/float32/nan

[@stdlib/constants/float32/ninf]: https://github.com/stdlib-js/constants/tree/main/float32/ninf

[@stdlib/constants/float32/num-bytes]: https://github.com/stdlib-js/constants/tree/main/float32/num-bytes

[@stdlib/constants/float32/phi]: https://github.com/stdlib-js/constants/tree/main/float32/phi

[@stdlib/constants/float32/pi]: https://github.com/stdlib-js/constants/tree/main/float32/pi

[@stdlib/constants/float32/pinf]: https://github.com/stdlib-js/constants/tree/main/float32/pinf

[@stdlib/constants/float32/precision]: https://github.com/stdlib-js/constants/tree/main/float32/precision

[@stdlib/constants/float32/sign-mask]: https://github.com/stdlib-js/constants/tree/main/float32/sign-mask

[@stdlib/constants/float32/significand-mask]: https://github.com/stdlib-js/constants/tree/main/float32/significand-mask

[@stdlib/constants/float32/smallest-normal]: https://github.com/stdlib-js/constants/tree/main/float32/smallest-normal

[@stdlib/constants/float32/smallest-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/smallest-subnormal

[@stdlib/constants/float32/sqrt-eps]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-eps

[@stdlib/constants/float32/sqrt-half-pi]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-half-pi

[@stdlib/constants/float32/sqrt-half]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-half

[@stdlib/constants/float32/sqrt-phi]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-phi

[@stdlib/constants/float32/sqrt-pi]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-pi

[@stdlib/constants/float32/sqrt-three]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-three

[@stdlib/constants/float32/sqrt-two-pi]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-two-pi

[@stdlib/constants/float32/sqrt-two]: https://github.com/stdlib-js/constants/tree/main/float32/sqrt-two

[@stdlib/constants/float32/two-pi]: https://github.com/stdlib-js/constants/tree/main/float32/two-pi

<!-- </toc-links> -->

</section>

<!-- /.links -->
