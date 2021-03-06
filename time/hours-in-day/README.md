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

# Hours in a Day

> Number of hours in a day.

<section class="usage">

## Usage

```javascript
var HOURS_IN_DAY = require( '@stdlib/constants/time/hours-in-day' );
```

#### HOURS_IN_DAY

Number of hours in a day.

```javascript
var bool = ( HOURS_IN_DAY === 24 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var HOURS_IN_DAY = require( '@stdlib/constants/time/hours-in-day' );

var hrs;
var d;
var i;

function days2hours( days ) {
    return days * HOURS_IN_DAY;
}

for ( i = 0; i < 10; i++ ) {
    d = roundn( randu()*20.0, -2 );
    hrs = days2hours( d );
    console.log( '%d days => %d hours', d, hrs );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/time/hours-in-week`][@stdlib/constants/time/hours-in-week]</span><span class="delimiter">: </span><span class="description">number of hours in a week.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/constants/time/hours-in-week]: https://github.com/stdlib-js/constants/tree/main/time/hours-in-week

<!-- </related-links> -->

</section>

<!-- /.links -->
