<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# FLOAT32_SIGN_MASK

> Mask for the sign bit of a [single-precision floating-point number][ieee754].

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT32_SIGN_MASK = require( '@stdlib/constants/float32/sign-mask' );
```

#### FLOAT32_SIGN_MASK

Mask for the sign bit of a [single-precision floating-point number][ieee754].

<!-- eslint-disable id-length -->

```javascript
// 0x80000000 = 2147483648 => 1 00000000 00000000000000000000000
var bool = ( FLOAT32_SIGN_MASK === 0x80000000 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The higher order word of a [single-precision floating-point number][ieee754] is a 32-bit integer containing the more significant bits which include the exponent and sign.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var toWord = require( '@stdlib/number/float32/base/to-word' );
var fromWord = require( '@stdlib/number/float32/base/from-word' );
var FLOAT32_SIGN_MASK = require( '@stdlib/constants/float32/sign-mask' );

var x = -11.5;
var w = toWord( x ); // 1 10000010 01110000000000000000000
// returns 3223781376

// Mask off all bits except for the sign bit:
var out = (w & FLOAT32_SIGN_MASK)>>>0; // 1 00000000 00000000000000000000000
// returns 2147483648

// Turn off the sign bit and leave other bits unchanged:
out = w & (~FLOAT32_SIGN_MASK); // 0 10000010 01110000000000000000000
// returns 1076297728

// Generate a new value:
out = fromWord( out );
// returns 11.5
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
#include "stdlib/constants/float32/sign_mask.h"
```

#### STDLIB_CONSTANT_FLOAT32_SIGN_MASK

Macro for the mask for the sign bit of a [single-precision floating-point number][ieee754].

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

-   <span class="package-name">[`@stdlib/constants/float32/exponent-mask`][@stdlib/constants/float32/exponent-mask]</span><span class="delimiter">: </span><span class="description">mask for the exponent of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants/float32/significand-mask`][@stdlib/constants/float32/significand-mask]</span><span class="delimiter">: </span><span class="description">mask for the significand of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants/float32/abs-mask`][@stdlib/constants/float32/abs-mask]</span><span class="delimiter">: </span><span class="description">mask for excluding the sign bit of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/constants/float32/exponent-mask]: https://github.com/stdlib-js/constants/tree/main/float32/exponent-mask

[@stdlib/constants/float32/significand-mask]: https://github.com/stdlib-js/constants/tree/main/float32/significand-mask

[@stdlib/constants/float32/abs-mask]: https://github.com/stdlib-js/constants/tree/main/float32/abs-mask

<!-- </related-links> -->

</section>

<!-- /.links -->
