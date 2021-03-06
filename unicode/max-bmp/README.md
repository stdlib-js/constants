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

# Max Code Point

> Maximum [Unicode][unicode] code point in the Basic Multilingual Plane (BMP).

<section class="usage">

## Usage

```javascript
var UNICODE_MAX_BMP = require( '@stdlib/constants/unicode/max-bmp' );
```

#### UNICODE_MAX_BMP

Maximum [Unicode][unicode] code point in the Basic Multilingual Plane (BMP).

```javascript
var bool = ( UNICODE_MAX_BMP === 65535 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var UNICODE_MAX_BMP = require( '@stdlib/constants/unicode/max-bmp' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = floor( randu() * UNICODE_MAX_BMP );
    console.log( fromCodePoint( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/unicode/max`][@stdlib/constants/unicode/max]</span><span class="delimiter">: </span><span class="description">maximum Unicode code point.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[unicode]: https://en.wikipedia.org/wiki/Unicode

<!-- <related-links> -->

[@stdlib/constants/unicode/max]: https://github.com/stdlib-js/constants/tree/main/unicode/max

<!-- </related-links> -->

</section>

<!-- /.links -->
