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

# Precision

> Effective number of bits in the [significand][significand] of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var FLOAT16_PRECISION = require( '@stdlib/constants/float16/precision' );
```

#### FLOAT16_PRECISION

Effective number of bits in the [significand][significand] of a [half-precision floating-point number][ieee754].

```javascript
var bool = ( FLOAT16_PRECISION === 11 ); // including implicit bit
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_PRECISION = require( '@stdlib/constants/float16/precision' );

console.log( FLOAT16_PRECISION );
// => 11
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float32/precision`][@stdlib/constants/float32/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants/float64/precision`][@stdlib/constants/float64/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[significand]: https://en.wikipedia.org/wiki/Significand

<!-- <related-links> -->

[@stdlib/constants/float32/precision]: https://github.com/stdlib-js/constants/tree/main/float32/precision

[@stdlib/constants/float64/precision]: https://github.com/stdlib-js/constants/tree/main/float64/precision

<!-- </related-links> -->

</section>

<!-- /.links -->
