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

# FLOAT32_PRECISION

> Effective number of bits in the [significand][significand] of a [single-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var FLOAT32_PRECISION = require( '@stdlib/constants/float32/precision' );
```

#### FLOAT32_PRECISION

Effective number of bits in the [significand][significand] of a [single-precision floating-point number][ieee754].

```javascript
var bool = ( FLOAT32_PRECISION === 24 ); // including implicit bit
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT32_PRECISION = require( '@stdlib/constants/float32/precision' );

console.log( FLOAT32_PRECISION );
// => 24
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
#include "stdlib/constants/float32/precision.h"
```

#### STDLIB_CONSTANT_FLOAT32_PRECISION

Macro for the effective number of bits in the [significand][significand] of a [single-precision floating-point number][ieee754].

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

-   <span class="package-name">[`@stdlib/constants/float16/precision`][@stdlib/constants/float16/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a half-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants/float64/precision`][@stdlib/constants/float64/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[significand]: https://en.wikipedia.org/wiki/Significand

<!-- <related-links> -->

[@stdlib/constants/float16/precision]: https://github.com/stdlib-js/constants/tree/main/float16/precision

[@stdlib/constants/float64/precision]: https://github.com/stdlib-js/constants/tree/main/float64/precision

<!-- </related-links> -->

</section>

<!-- /.links -->
