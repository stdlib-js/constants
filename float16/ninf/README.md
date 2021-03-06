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

# Negative Infinity

> [Half-precision floating-point][half-precision-floating-point-format] negative infinity.

<section class="usage">

## Usage

```javascript
var FLOAT16_NINF = require( '@stdlib/constants/float16/ninf' );
```

#### FLOAT16_NINF

[Half-precision floating-point][half-precision-floating-point-format] negative infinity.

```javascript
// FLOAT16_NINF is implicitly promoted to a double-precision floating-point number...
var bool = ( FLOAT16_NINF === -Infinity );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_NINF = require( '@stdlib/constants/float16/ninf' );

console.log( FLOAT16_NINF );
// => -Infinity
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float16/pinf`][@stdlib/constants/float16/pinf]</span><span class="delimiter">: </span><span class="description">half-precision floating-point positive infinity.</span>
-   <span class="package-name">[`@stdlib/constants/float32/ninf`][@stdlib/constants/float32/ninf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point negative infinity.</span>
-   <span class="package-name">[`@stdlib/constants/float64/ninf`][@stdlib/constants/float64/ninf]</span><span class="delimiter">: </span><span class="description">double-precision floating-point negative infinity.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[half-precision-floating-point-format]: https://en.wikipedia.org/wiki/Half-precision_floating-point_format

<!-- <related-links> -->

[@stdlib/constants/float16/pinf]: https://github.com/stdlib-js/constants/tree/main/float16/pinf

[@stdlib/constants/float32/ninf]: https://github.com/stdlib-js/constants/tree/main/float32/ninf

[@stdlib/constants/float64/ninf]: https://github.com/stdlib-js/constants/tree/main/float64/ninf

<!-- </related-links> -->

</section>

<!-- /.links -->
