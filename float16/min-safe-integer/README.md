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

# Min Safe Integer

> Minimum safe [half-precision floating-point][half-precision-floating-point-format] integer.

<section class="usage">

## Usage

```javascript
var FLOAT16_MIN_SAFE_INTEGER = require( '@stdlib/constants/float16/min-safe-integer' );
```

#### FLOAT16_MIN_SAFE_INTEGER

The minimum [safe][safe-integers] [half-precision floating-point][half-precision-floating-point-format] integer.

```javascript
var bool = ( FLOAT16_MIN_SAFE_INTEGER === -2047 );
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
var FLOAT16_MIN_SAFE_INTEGER = require( '@stdlib/constants/float16/min-safe-integer' );

var min;
var x;
var i;

min = -pow( 2.0, 13 );
for ( i = 0; i < 100; i++ ) {
    x = round( randu() * min );
    if ( x < FLOAT16_MIN_SAFE_INTEGER ) {
        console.log( 'Unsafe: %d', x );
    } else {
        console.log( 'Safe: %d', x );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float16/max-safe-integer`][@stdlib/constants/float16/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe half-precision floating-point integer.</span>
-   <span class="package-name">[`@stdlib/constants/float32/min-safe-integer`][@stdlib/constants/float32/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe single-precision floating-point integer.</span>
-   <span class="package-name">[`@stdlib/constants/float64/min-safe-integer`][@stdlib/constants/float64/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe double-precision floating-point integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[safe-integers]: http://www.2ality.com/2013/10/safe-integers.html

[half-precision-floating-point-format]: https://en.wikipedia.org/wiki/Half-precision_floating-point_format

<!-- <related-links> -->

[@stdlib/constants/float16/max-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float16/max-safe-integer

[@stdlib/constants/float32/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float32/min-safe-integer

[@stdlib/constants/float64/min-safe-integer]: https://github.com/stdlib-js/constants/tree/main/float64/min-safe-integer

<!-- </related-links> -->

</section>

<!-- /.links -->
