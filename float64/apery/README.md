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

# Apéry's Constant

> [Apéry's constant][apery-constant].

<section class="intro">

[Apéry's constant][apery-constant] is defined as

<!-- <equation class="equation" label="eq:apery_constant" align="center" raw="\zeta(3) = \sum_{n=1}^\infty \frac{1}{n^3} = \lim_{n\to\infty} \biggl(\frac{1}{1^3} + \frac{1}{2^3} + \cdots + \frac{1}{n^3}\biggr)" alt="Apéry's constant"> -->

<div class="equation" align="center" data-raw-text="\zeta(3) = \sum_{n=1}^\infty \frac{1}{n^3} = \lim_{n\to\infty} \biggl(\frac{1}{1^3} + \frac{1}{2^3} + \cdots + \frac{1}{n^3}\biggr)" data-equation="eq:apery_constant">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5d87cc7cb2c58aeb732872f89562d2c89571cc8a/lib/node_modules/@stdlib/constants/float64/apery/docs/img/equation_apery_constant.svg" alt="Apéry's constant">
    <br>
</div>

<!-- </equation> -->

where `ζ(s)` is the [Riemann zeta function][@stdlib/math/base/special/riemann-zeta]

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var APERY = require( '@stdlib/constants/float64/apery' );
```

#### APERY

[Apéry's constant][apery-constant].

```javascript
var bool = ( APERY === 1.2020569031595942 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var APERY = require( '@stdlib/constants/float64/apery' );

console.log( APERY );
// => 1.2020569031595942
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[apery-constant]: https://en.wikipedia.org/wiki/Ap%C3%A9ry%27s_constant

[@stdlib/math/base/special/riemann-zeta]: https://github.com/stdlib-js/math-base-special-riemann-zeta

</section>

<!-- /.links -->
