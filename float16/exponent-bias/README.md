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

# Bias

> The bias of a [half-precision floating-point number's][half-precision-floating-point-format] exponent.

<section class="usage">

## Usage

```javascript
var FLOAT16_EXPONENT_BIAS = require( '@stdlib/constants/float16/exponent-bias' );
```

#### FLOAT16_EXPONENT_BIAS

The bias of a [half-precision floating-point number's][half-precision-floating-point-format] exponent.

```javascript
var bool = ( FLOAT16_EXPONENT_BIAS === 15 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_EXPONENT_BIAS = require( '@stdlib/constants/float16/exponent-bias' );

console.log( FLOAT16_EXPONENT_BIAS );
// => 15
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float32/exponent-bias`][@stdlib/constants/float32/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a single-precision floating-point number's exponent.</span>
-   <span class="package-name">[`@stdlib/constants/float64/exponent-bias`][@stdlib/constants/float64/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a double-precision floating-point number's exponent.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[half-precision-floating-point-format]: https://en.wikipedia.org/wiki/Half-precision_floating-point_format

<!-- <related-links> -->

[@stdlib/constants/float32/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float32/exponent-bias

[@stdlib/constants/float64/exponent-bias]: https://github.com/stdlib-js/constants/tree/main/float64/exponent-bias

<!-- </related-links> -->

</section>

<!-- /.links -->
