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

# FLOAT64_SMALLEST_SUBNORMAL

> Smallest positive **denormalized** [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT64_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float64/smallest-subnormal' );
```

##### FLOAT64_SMALLEST_SUBNORMAL

Smallest positive **denormalized** [double-precision floating-point number][ieee754].

<!-- eslint-disable id-length -->

```javascript
var bool = ( FLOAT64_SMALLEST_SUBNORMAL === 4.940656458412465e-324 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var FLOAT64_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float64/smallest-subnormal' );

console.log( FLOAT64_SMALLEST_SUBNORMAL );
// => ~4.94e-324
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
#include "stdlib/constants/float64/smallest_subnormal.h"
```

#### STDLIB_CONSTANT_FLOAT64_SMALLEST_SUBNORMAL

Macro for the smallest positive **denormalized** [double-precision floating-point number][ieee754].

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

-   <span class="package-name">[`@stdlib/constants/float32/smallest-subnormal`][@stdlib/constants/float32/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive single-precision floating-point subnormal number.</span>
-   <span class="package-name">[`@stdlib/constants/float64/smallest-normal`][@stdlib/constants/float64/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive double-precision floating-point normal number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/constants/float32/smallest-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/smallest-subnormal

[@stdlib/constants/float64/smallest-normal]: https://github.com/stdlib-js/constants/tree/main/float64/smallest-normal

<!-- </related-links> -->

</section>

<!-- /.links -->
