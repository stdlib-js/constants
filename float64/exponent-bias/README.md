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

# FLOAT64_EXPONENT_BIAS

> The bias of a [double-precision floating-point number's][ieee754] exponent.

<section class="usage">

## Usage

```javascript
var FLOAT64_EXPONENT_BIAS = require( '@stdlib/constants/float64/exponent-bias' );
```

#### FLOAT64_EXPONENT_BIAS

The bias of a [double-precision floating-point number's][ieee754] exponent.

```javascript
var bool = ( FLOAT64_EXPONENT_BIAS === 1023 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT64_EXPONENT_BIAS = require( '@stdlib/constants/float64/exponent-bias' );

console.log( FLOAT64_EXPONENT_BIAS );
// => 1023
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
#include "stdlib/constants/float64/exponent_bias.h"
```

#### STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS

Macro for the bias of a [double-precision floating-point number's][ieee754] exponent.

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

-   <span class="package-name">[`@stdlib/constants/float16/exponent-bias`][@stdlib/constants/float16/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a half-precision floating-point number's exponent.</span>
-   <span class="package-name">[`@stdlib/constants/float32/exponent-bias`][@stdlib/constants/float32/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a single-precision floating-point number's exponent.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/constants/float16/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float16/exponent-bias

[@stdlib/constants/float32/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float32/exponent-bias

<!-- </related-links> -->

</section>

<!-- /.links -->
