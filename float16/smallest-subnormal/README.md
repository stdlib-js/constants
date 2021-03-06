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

# Smallest Subnormal

> Smallest positive **denormalized** [half-precision floating-point number][half-precision-floating-point-format].

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT16_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float16/smallest-subnormal' );
```

#### FLOAT16_SMALLEST_SUBNORMAL

Smallest positive **denormalized** [half-precision floating-point number][half-precision-floating-point-format].

<!-- eslint-disable id-length -->

```javascript
var bool = ( FLOAT16_SMALLEST_SUBNORMAL === 5.960464477539063e-8 );
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
var FLOAT16_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float16/smallest-subnormal' );

console.log( FLOAT16_SMALLEST_SUBNORMAL );
// => 5.960464477539063e-8
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float16/smallest-normal`][@stdlib/constants/float16/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive normalized half-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants/float32/smallest-subnormal`][@stdlib/constants/float32/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive single-precision floating-point subnormal number.</span>
-   <span class="package-name">[`@stdlib/constants/float64/smallest-subnormal`][@stdlib/constants/float64/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[half-precision-floating-point-format]: https://en.wikipedia.org/wiki/Half-precision_floating-point_format

<!-- <related-links> -->

[@stdlib/constants/float16/smallest-normal]: https://github.com/stdlib-js/constants/tree/main/float16/smallest-normal

[@stdlib/constants/float32/smallest-subnormal]: https://github.com/stdlib-js/constants/tree/main/float32/smallest-subnormal

[@stdlib/constants/float64/smallest-subnormal]: https://github.com/stdlib-js/constants/tree/main/float64/smallest-subnormal

<!-- </related-links> -->

</section>

<!-- /.links -->
