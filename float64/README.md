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

> Double-precision floating-point mathematical constants.

<section class="usage">

## Usage

```javascript
var constants = require( '@stdlib/constants/float64' );
```

#### constants

Double-precision floating-point mathematical constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`APERY`][@stdlib/constants/float64/apery]</span><span class="delimiter">: </span><span class="description">Apéry's constant.</span>
-   <span class="signature">[`CATALAN`][@stdlib/constants/float64/catalan]</span><span class="delimiter">: </span><span class="description">Catalan's constant.</span>
-   <span class="signature">[`CBRT_EPS`][@stdlib/constants/float64/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of double-precision floating-point epsilon.</span>
-   <span class="signature">[`E`][@stdlib/constants/float64/e]</span><span class="delimiter">: </span><span class="description">the mathematical constant _e_.</span>
-   <span class="signature">[`EPS`][@stdlib/constants/float64/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a double-precision floating-point number.</span>
-   <span class="signature">[`EULERGAMMA`][@stdlib/constants/float64/eulergamma]</span><span class="delimiter">: </span><span class="description">the Euler-Mascheroni constant.</span>
-   <span class="signature">[`EXPONENT_BIAS`][@stdlib/constants/float64/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a double-precision floating-point number's exponent.</span>
-   <span class="signature">[`FOURTH_PI`][@stdlib/constants/float64/fourth-pi]</span><span class="delimiter">: </span><span class="description">one fourth times the mathematical constant π.</span>
-   <span class="signature">[`FOURTH_ROOT_EPS`][@stdlib/constants/float64/fourth-root-eps]</span><span class="delimiter">: </span><span class="description">fourth root of double-precision floating-point epsilon.</span>
-   <span class="signature">[`GAMMA_LANCZOS_G`][@stdlib/constants/float64/gamma-lanczos-g]</span><span class="delimiter">: </span><span class="description">arbitrary constant `g` to be used in Lanczos approximation functions.</span>
-   <span class="signature">[`GLAISHER`][@stdlib/constants/float64/glaisher-kinkelin]</span><span class="delimiter">: </span><span class="description">Glaisher-Kinkelin constant.</span>
-   <span class="signature">[`HALF_LN2`][@stdlib/constants/float64/half-ln-two]</span><span class="delimiter">: </span><span class="description">one half times the natural logarithm of 2.</span>
-   <span class="signature">[`HALF_PI`][@stdlib/constants/float64/half-pi]</span><span class="delimiter">: </span><span class="description">one half times the mathematical constant π.</span>
-   <span class="signature">[`HIGH_WORD_ABS_MASK`][@stdlib/constants/float64/high-word-abs-mask]</span><span class="delimiter">: </span><span class="description">high word mask for excluding the sign bit of a double-precision floating-point number.</span>
-   <span class="signature">[`HIGH_WORD_EXPONENT_MASK`][@stdlib/constants/float64/high-word-exponent-mask]</span><span class="delimiter">: </span><span class="description">high word mask for the exponent of a double-precision floating-point number.</span>
-   <span class="signature">[`HIGH_WORD_SIGN_MASK`][@stdlib/constants/float64/high-word-sign-mask]</span><span class="delimiter">: </span><span class="description">high word mask for the sign bit of a double-precision floating-point number.</span>
-   <span class="signature">[`HIGH_WORD_SIGNIFICAND_MASK`][@stdlib/constants/float64/high-word-significand-mask]</span><span class="delimiter">: </span><span class="description">high word mask for the significand of a double-precision floating-point number.</span>
-   <span class="signature">[`LN_HALF`][@stdlib/constants/float64/ln-half]</span><span class="delimiter">: </span><span class="description">natural logarithm of `1/2`.</span>
-   <span class="signature">[`LN_PI`][@stdlib/constants/float64/ln-pi]</span><span class="delimiter">: </span><span class="description">natural logarithm of the mathematical constant π.</span>
-   <span class="signature">[`LN_SQRT_TWO_PI`][@stdlib/constants/float64/ln-sqrt-two-pi]</span><span class="delimiter">: </span><span class="description">natural logarithm of the square root of 2π.</span>
-   <span class="signature">[`LN10`][@stdlib/constants/float64/ln-ten]</span><span class="delimiter">: </span><span class="description">natural logarithm of `10`.</span>
-   <span class="signature">[`LN_TWO_PI`][@stdlib/constants/float64/ln-two-pi]</span><span class="delimiter">: </span><span class="description">natural logarithm of `2π`.</span>
-   <span class="signature">[`LN2`][@stdlib/constants/float64/ln-two]</span><span class="delimiter">: </span><span class="description">natural logarithm of `2`.</span>
-   <span class="signature">[`LOG10E`][@stdlib/constants/float64/log10-e]</span><span class="delimiter">: </span><span class="description">base 10 logarithm of the mathematical constant _e_.</span>
-   <span class="signature">[`LOG2E`][@stdlib/constants/float64/log2-e]</span><span class="delimiter">: </span><span class="description">base 2 logarithm of the mathematical constant _e_.</span>
-   <span class="signature">[`MAX_BASE10_EXPONENT_SUBNORMAL`][@stdlib/constants/float64/max-base10-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the maximum base 10 exponent for a subnormal double-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE10_EXPONENT`][@stdlib/constants/float64/max-base10-exponent]</span><span class="delimiter">: </span><span class="description">the maximum base 10 exponent for a double-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE2_EXPONENT_SUBNORMAL`][@stdlib/constants/float64/max-base2-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the maximum biased base 2 exponent for a subnormal double-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE2_EXPONENT`][@stdlib/constants/float64/max-base2-exponent]</span><span class="delimiter">: </span><span class="description">the maximum biased base 2 exponent for a double-precision floating-point number.</span>
-   <span class="signature">[`MAX_LN`][@stdlib/constants/float64/max-ln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the maximum double-precision floating-point number.</span>
-   <span class="signature">[`MAX_SAFE_FIBONACCI`][@stdlib/constants/float64/max-safe-fibonacci]</span><span class="delimiter">: </span><span class="description">maximum safe Fibonacci number when stored in double-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_INTEGER`][@stdlib/constants/float64/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe double-precision floating-point integer.</span>
-   <span class="signature">[`MAX_SAFE_LUCAS`][@stdlib/constants/float64/max-safe-lucas]</span><span class="delimiter">: </span><span class="description">maximum safe Lucas number when stored in double-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_FIBONACCI`][@stdlib/constants/float64/max-safe-nth-fibonacci]</span><span class="delimiter">: </span><span class="description">maximum safe nth Fibonacci number when stored in double-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_LUCAS`][@stdlib/constants/float64/max-safe-nth-lucas]</span><span class="delimiter">: </span><span class="description">maximum safe nth Lucas number when stored in double-precision floating-point format.</span>
-   <span class="signature">[`MAX`][@stdlib/constants/float64/max]</span><span class="delimiter">: </span><span class="description">maximum double-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE10_EXPONENT_SUBNORMAL`][@stdlib/constants/float64/min-base10-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the minimum base 10 exponent for a subnormal double-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE10_EXPONENT`][@stdlib/constants/float64/min-base10-exponent]</span><span class="delimiter">: </span><span class="description">the minimum base 10 exponent for a normal double-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE2_EXPONENT_SUBNORMAL`][@stdlib/constants/float64/min-base2-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the minimum biased base 2 exponent for a subnormal double-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE2_EXPONENT`][@stdlib/constants/float64/min-base2-exponent]</span><span class="delimiter">: </span><span class="description">the minimum biased base 2 exponent for a normal double-precision floating-point number.</span>
-   <span class="signature">[`MIN_LN`][@stdlib/constants/float64/min-ln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the smallest **normalized** double-precision floating-point number.</span>
-   <span class="signature">[`MIN_SAFE_INTEGER`][@stdlib/constants/float64/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe double-precision floating-point integer.</span>
-   <span class="signature">[`NAN`][@stdlib/constants/float64/nan]</span><span class="delimiter">: </span><span class="description">double-precision floating-point `NaN`.</span>
-   <span class="signature">[`NINF`][@stdlib/constants/float64/ninf]</span><span class="delimiter">: </span><span class="description">double-precision floating-point negative infinity.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/float64/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a double-precision floating-point number.</span>
-   <span class="signature">[`PHI`][@stdlib/constants/float64/phi]</span><span class="delimiter">: </span><span class="description">golden ratio.</span>
-   <span class="signature">[`PI_SQUARED`][@stdlib/constants/float64/pi-squared]</span><span class="delimiter">: </span><span class="description">π².</span>
-   <span class="signature">[`PI`][@stdlib/constants/float64/pi]</span><span class="delimiter">: </span><span class="description">the mathematical constant π.</span>
-   <span class="signature">[`PINF`][@stdlib/constants/float64/pinf]</span><span class="delimiter">: </span><span class="description">double-precision floating-point positive infinity.</span>
-   <span class="signature">[`PRECISION`][@stdlib/constants/float64/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a double-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_NORMAL`][@stdlib/constants/float64/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive **normalized** double-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_SUBNORMAL`][@stdlib/constants/float64/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive **denormalized** double-precision floating-point number.</span>
-   <span class="signature">[`SQRT_EPS`][@stdlib/constants/float64/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of double-precision floating-point epsilon.</span>
-   <span class="signature">[`SQRT_HALF_PI`][@stdlib/constants/float64/sqrt-half-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π divided by 2.</span>
-   <span class="signature">[`SQRT_HALF`][@stdlib/constants/float64/sqrt-half]</span><span class="delimiter">: </span><span class="description">square root of `1/2`.</span>
-   <span class="signature">[`SQRT_PHI`][@stdlib/constants/float64/sqrt-phi]</span><span class="delimiter">: </span><span class="description">square root of the Golden ratio (φ).</span>
-   <span class="signature">[`SQRT_PI`][@stdlib/constants/float64/sqrt-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π.</span>
-   <span class="signature">[`SQRT_THREE`][@stdlib/constants/float64/sqrt-three]</span><span class="delimiter">: </span><span class="description">square root of `3`.</span>
-   <span class="signature">[`SQRT_TWO_PI`][@stdlib/constants/float64/sqrt-two-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π times 2.</span>
-   <span class="signature">[`SQRT_TWO`][@stdlib/constants/float64/sqrt-two]</span><span class="delimiter">: </span><span class="description">square root of `2`.</span>
-   <span class="signature">[`TWO_PI`][@stdlib/constants/float64/two-pi]</span><span class="delimiter">: </span><span class="description">the mathematical constant π times 2.</span>

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
var constants = require( '@stdlib/constants/float64' );

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

[@stdlib/constants/float64/apery]: https://github.com/stdlib-js/constants/tree/main/float64/apery

[@stdlib/constants/float64/catalan]: https://github.com/stdlib-js/constants/tree/main/float64/catalan

[@stdlib/constants/float64/cbrt-eps]: https://github.com/stdlib-js/constants/tree/main/float64/cbrt-eps

[@stdlib/constants/float64/e]: https://github.com/stdlib-js/constants/tree/main/float64/e

[@stdlib/constants/float64/eps]: https://github.com/stdlib-js/constants/tree/main/float64/eps

[@stdlib/constants/float64/eulergamma]: https://github.com/stdlib-js/constants/tree/main/float64/eulergamma

[@stdlib/constants/float64/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float64/exponent-bias

[@stdlib/constants/float64/fourth-pi]: https://github.com/stdlib-js/constants/tree/main/float64/fourth-pi

[@stdlib/constants/float64/fourth-root-eps]: https://github.com/stdlib-js/constants/tree/main/float64/fourth-root-eps

[@stdlib/constants/float64/gamma-lanczos-g]: https://github.com/stdlib-js/constants/tree/main/float64/gamma-lanczos-g

[@stdlib/constants/float64/glaisher-kinkelin]: https://github.com/stdlib-js/constants/tree/main/float64/glaisher-kinkelin

[@stdlib/constants/float64/half-ln-two]: https://github.com/stdlib-js/constants/tree/main/float64/half-ln-two

[@stdlib/constants/float64/half-pi]: https://github.com/stdlib-js/constants/tree/main/float64/half-pi

[@stdlib/constants/float64/high-word-abs-mask]: https://github.com/stdlib-js/constants/tree/main/float64/high-word-abs-mask

[@stdlib/constants/float64/high-word-exponent-mask]: https://github.com/stdlib-js/constants/tree/main/float64/high-word-exponent-mask

[@stdlib/constants/float64/high-word-sign-mask]: https://github.com/stdlib-js/constants/tree/main/float64/high-word-sign-mask

[@stdlib/constants/float64/high-word-significand-mask]: https://github.com/stdlib-js/constants/tree/main/float64/high-word-significand-mask

[@stdlib/constants/float64/ln-half]: https://github.com/stdlib-js/constants/tree/main/float64/ln-half

[@stdlib/constants/float64/ln-pi]: https://github.com/stdlib-js/constants/tree/main/float64/ln-pi

[@stdlib/constants/float64/ln-sqrt-two-pi]: https://github.com/stdlib-js/constants/tree/main/float64/ln-sqrt-two-pi

[@stdlib/constants/float64/ln-ten]: https://github.com/stdlib-js/constants/tree/main/float64/ln-ten

[@stdlib/constants/float64/ln-two-pi]: https://github.com/stdlib-js/constants/tree/main/float64/ln-two-pi

[@stdlib/constants/float64/ln-two]: https://github.com/stdlib-js/constants/tree/main/float64/ln-two

[@stdlib/constants/float64/log10-e]: https://github.com/stdlib-js/constants/tree/main/float64/log10-e

[@stdlib/constants/float64/log2-e]: https://github.com/stdlib-js/constants/tree/main/float64/log2-e

[@stdlib/constants/float64/max-base10-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float64/max-base10-exponent-subnormal

[@stdlib/constants/float64/max-base10-exponent]: https://github.com/stdlib-js/constants/tree/main/float64/max-base10-exponent

[@stdlib/constants/float64/max-base2-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float64/max-base2-exponent-subnormal

[@stdlib/constants/float64/max-base2-exponent]: https://github.com/stdlib-js/constants/tree/main/float64/max-base2-exponent

[@stdlib/constants/float64/max-ln]: https://github.com/stdlib-js/constants/tree/main/float64/max-ln

[@stdlib/constants/float64/max-safe-fibonacci]: https://github.com/stdlib-js/constants/tree/main/float64/max-safe-fibonacci

[@stdlib/constants/float64/max-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float64/max-safe-integer

[@stdlib/constants/float64/max-safe-lucas]: https://github.com/stdlib-js/constants/tree/main/float64/max-safe-lucas

[@stdlib/constants/float64/max-safe-nth-fibonacci]: https://github.com/stdlib-js/constants/tree/main/float64/max-safe-nth-fibonacci

[@stdlib/constants/float64/max-safe-nth-lucas]: https://github.com/stdlib-js/constants/tree/main/float64/max-safe-nth-lucas

[@stdlib/constants/float64/max]: https://github.com/stdlib-js/constants/tree/main/float64/max

[@stdlib/constants/float64/min-base10-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float64/min-base10-exponent-subnormal

[@stdlib/constants/float64/min-base10-exponent]: https://github.com/stdlib-js/constants/tree/main/float64/min-base10-exponent

[@stdlib/constants/float64/min-base2-exponent-subnormal]: https://github.com/stdlib-js/constants/tree/main/float64/min-base2-exponent-subnormal

[@stdlib/constants/float64/min-base2-exponent]: https://github.com/stdlib-js/constants/tree/main/float64/min-base2-exponent

[@stdlib/constants/float64/min-ln]: https://github.com/stdlib-js/constants/tree/main/float64/min-ln

[@stdlib/constants/float64/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float64/min-safe-integer

[@stdlib/constants/float64/nan]: https://github.com/stdlib-js/constants/tree/main/float64/nan

[@stdlib/constants/float64/ninf]: https://github.com/stdlib-js/constants/tree/main/float64/ninf

[@stdlib/constants/float64/num-bytes]: https://github.com/stdlib-js/constants/tree/main/float64/num-bytes

[@stdlib/constants/float64/phi]: https://github.com/stdlib-js/constants/tree/main/float64/phi

[@stdlib/constants/float64/pi-squared]: https://github.com/stdlib-js/constants/tree/main/float64/pi-squared

[@stdlib/constants/float64/pi]: https://github.com/stdlib-js/constants/tree/main/float64/pi

[@stdlib/constants/float64/pinf]: https://github.com/stdlib-js/constants/tree/main/float64/pinf

[@stdlib/constants/float64/precision]: https://github.com/stdlib-js/constants/tree/main/float64/precision

[@stdlib/constants/float64/smallest-normal]: https://github.com/stdlib-js/constants/tree/main/float64/smallest-normal

[@stdlib/constants/float64/smallest-subnormal]: https://github.com/stdlib-js/constants/tree/main/float64/smallest-subnormal

[@stdlib/constants/float64/sqrt-eps]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-eps

[@stdlib/constants/float64/sqrt-half-pi]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-half-pi

[@stdlib/constants/float64/sqrt-half]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-half

[@stdlib/constants/float64/sqrt-phi]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-phi

[@stdlib/constants/float64/sqrt-pi]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-pi

[@stdlib/constants/float64/sqrt-three]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-three

[@stdlib/constants/float64/sqrt-two-pi]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-two-pi

[@stdlib/constants/float64/sqrt-two]: https://github.com/stdlib-js/constants/tree/main/float64/sqrt-two

[@stdlib/constants/float64/two-pi]: https://github.com/stdlib-js/constants/tree/main/float64/two-pi

<!-- </toc-links> -->

</section>

<!-- /.links -->
