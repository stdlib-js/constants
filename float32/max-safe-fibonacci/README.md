<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# FLOAT32_MAX_SAFE_FIBONACCI

> Maximum safe [Fibonacci number][fibonacci-number] when stored in [single-precision floating-point][ieee754] format.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT32_MAX_SAFE_FIBONACCI = require( '@stdlib/constants/float32/max-safe-fibonacci' );
```

#### FLOAT32_MAX_SAFE_FIBONACCI

The maximum [safe][safe-integers] [Fibonacci number][fibonacci-number] when stored in [single-precision floating-point][ieee754] format.

<!-- eslint-disable id-length -->

```javascript
var bool = ( FLOAT32_MAX_SAFE_FIBONACCI === 14930352 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT32_MAX_SAFE_FIBONACCI = require( '@stdlib/constants/float32/max-safe-fibonacci' );

var v;
var i;

function fibonacci( n ) {
    var a;
    var b;
    var c;
    var i;

    a = 1;
    b = 1;
    for ( i = 3; i <= n; i++ ) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

for ( i = 0; i < 50; i++ ) {
    v = fibonacci( i );
    if ( v > FLOAT32_MAX_SAFE_FIBONACCI ) {
        console.log( 'Unsafe: %d', v );
    } else {
        console.log( 'Safe:   %d', v );
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
#include "stdlib/constants/float32/max_safe_fibonacci.h"
```

#### STDLIB_CONSTANT_FLOAT32_MAX_SAFE_FIBONACCI

Macro for the maximum [safe][safe-integers] [Fibonacci number][fibonacci-number] when stored in [single-precision floating-point][ieee754] format.

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

-   <span class="package-name">[`@stdlib/constants/float64/max-safe-fibonacci`][@stdlib/constants/float64/max-safe-fibonacci]</span><span class="delimiter">: </span><span class="description">maximum safe Fibonacci number when stored in double-precision floating-point format.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[safe-integers]: http://www.2ality.com/2013/10/safe-integers.html

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/constants/float64/max-safe-fibonacci]: https://github.com/stdlib-js/constants/tree/main/float64/max-safe-fibonacci

<!-- </related-links> -->

</section>

<!-- /.links -->
