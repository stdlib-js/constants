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

# FLOAT32_MIN_SAFE_INTEGER

> Minimum safe [single-precision floating-point][ieee754] integer.

<section class="usage">

## Usage

```javascript
var FLOAT32_MIN_SAFE_INTEGER = require( '@stdlib/constants/float32/min-safe-integer' );
```

#### FLOAT32_MIN_SAFE_INTEGER

The minimum [safe][safe-integers] [single-precision floating-point][ieee754] integer.

```javascript
var bool = ( FLOAT32_MIN_SAFE_INTEGER === -16777215 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var FLOAT32_MIN_SAFE_INTEGER = require( '@stdlib/constants/float32/min-safe-integer' );

var min;
var x;
var i;

min = -pow( 2.0, 26 );
for ( i = 0; i < 100; i++ ) {
    x = round( randu() * min );
    if ( x < FLOAT32_MIN_SAFE_INTEGER ) {
        console.log( 'Unsafe: %d', x );
    } else {
        console.log( 'Safe: %d', x );
    }
}
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
#include "stdlib/constants/float32/min_safe_integer.h"
```

#### STDLIB_CONSTANT_FLOAT32_MIN_SAFE_INTEGER

Macro for the minimum [safe][safe-integers] [single-precision floating-point][ieee754] integer.

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

-   <span class="package-name">[`@stdlib/constants/float16/min-safe-integer`][@stdlib/constants/float16/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe half-precision floating-point integer.</span>
-   <span class="package-name">[`@stdlib/constants/float32/max-safe-integer`][@stdlib/constants/float32/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe single-precision floating-point integer.</span>
-   <span class="package-name">[`@stdlib/constants/float64/min-safe-integer`][@stdlib/constants/float64/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe double-precision floating-point integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[safe-integers]: http://www.2ality.com/2013/10/safe-integers.html

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/constants/float16/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float16/min-safe-integer

[@stdlib/constants/float32/max-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float32/max-safe-integer

[@stdlib/constants/float64/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float64/min-safe-integer

<!-- </related-links> -->

</section>

<!-- /.links -->
