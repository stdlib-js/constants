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

> Half-precision floating-point mathematical constants.

<section class="usage">

## Usage

```javascript
var constants = require( '@stdlib/constants/float16' );
```

#### constants

Half-precision floating-point mathematical constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`CBRT_EPS`][@stdlib/constants/float16/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of half-precision floating-point epsilon.</span>
-   <span class="signature">[`EPS`][@stdlib/constants/float16/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a half-precision floating-point number.</span>
-   <span class="signature">[`EXPONENT_BIAS`][@stdlib/constants/float16/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a half-precision floating-point number's exponent.</span>
-   <span class="signature">[`MAX_SAFE_INTEGER`][@stdlib/constants/float16/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe half-precision floating-point integer.</span>
-   <span class="signature">[`MAX`][@stdlib/constants/float16/max]</span><span class="delimiter">: </span><span class="description">maximum half-precision floating-point number.</span>
-   <span class="signature">[`MIN_SAFE_INTEGER`][@stdlib/constants/float16/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe half-precision floating-point integer.</span>
-   <span class="signature">[`NINF`][@stdlib/constants/float16/ninf]</span><span class="delimiter">: </span><span class="description">half-precision floating-point negative infinity.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/float16/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a half-precision floating-point number.</span>
-   <span class="signature">[`PINF`][@stdlib/constants/float16/pinf]</span><span class="delimiter">: </span><span class="description">half-precision floating-point positive infinity.</span>
-   <span class="signature">[`PRECISION`][@stdlib/constants/float16/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a half-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_NORMAL`][@stdlib/constants/float16/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive **normalized** half-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_SUBNORMAL`][@stdlib/constants/float16/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive **denormalized** half-precision floating-point number.</span>
-   <span class="signature">[`SQRT_EPS`][@stdlib/constants/float16/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of half-precision floating-point epsilon.</span>

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
var constants = require( '@stdlib/constants/float16' );

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

[@stdlib/constants/float16/cbrt-eps]: https://github.com/stdlib-js/constants/tree/main/float16/cbrt-eps

[@stdlib/constants/float16/eps]: https://github.com/stdlib-js/constants/tree/main/float16/eps

[@stdlib/constants/float16/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float16/exponent-bias

[@stdlib/constants/float16/max-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float16/max-safe-integer

[@stdlib/constants/float16/max]: https://github.com/stdlib-js/constants/tree/main/float16/max

[@stdlib/constants/float16/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float16/min-safe-integer

[@stdlib/constants/float16/ninf]: https://github.com/stdlib-js/constants/tree/main/float16/ninf

[@stdlib/constants/float16/num-bytes]: https://github.com/stdlib-js/constants/tree/main/float16/num-bytes

[@stdlib/constants/float16/pinf]: https://github.com/stdlib-js/constants/tree/main/float16/pinf

[@stdlib/constants/float16/precision]: https://github.com/stdlib-js/constants/tree/main/float16/precision

[@stdlib/constants/float16/smallest-normal]: https://github.com/stdlib-js/constants/tree/main/float16/smallest-normal

[@stdlib/constants/float16/smallest-subnormal]: https://github.com/stdlib-js/constants/tree/main/float16/smallest-subnormal

[@stdlib/constants/float16/sqrt-eps]: https://github.com/stdlib-js/constants/tree/main/float16/sqrt-eps

<!-- </toc-links> -->

</section>

<!-- /.links -->
