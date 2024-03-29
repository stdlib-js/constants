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

# FLOAT32_PINF

> [Single-precision floating-point][ieee754] positive infinity.

<section class="usage">

## Usage

```javascript
var FLOAT32_PINF = require( '@stdlib/constants/float32/pinf' );
```

#### FLOAT32_PINF

[Single-precision floating-point][ieee754] positive infinity.

```javascript
// FLOAT32_PINF is implicitly promoted to a double-precision floating-point number...
var bool = ( FLOAT32_PINF === Infinity );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT32_PINF = require( '@stdlib/constants/float32/pinf' );

console.log( FLOAT32_PINF );
// => Infinity
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
#include "stdlib/constants/float32/pinf.h"
```

#### STDLIB_CONSTANT_FLOAT32_PINF

Macro for the [single-precision floating-point][ieee754] positive infinity.

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

-   <span class="package-name">[`@stdlib/constants/float32/ninf`][@stdlib/constants/float32/ninf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point negative infinity.</span>
-   <span class="package-name">[`@stdlib/constants/float64/pinf`][@stdlib/constants/float64/pinf]</span><span class="delimiter">: </span><span class="description">double-precision floating-point positive infinity.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/constants/float32/ninf]: https://github.com/stdlib-js/constants/tree/main/float32/ninf

[@stdlib/constants/float64/pinf]: https://github.com/stdlib-js/constants/tree/main/float64/pinf

<!-- </related-links> -->

</section>

<!-- /.links -->
