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

# Hours in a Week

> Number of hours in a week.

<section class="usage">

## Usage

```javascript
var HOURS_IN_WEEK = require( '@stdlib/constants/time/hours-in-week' );
```

#### HOURS_IN_WEEK

Number of hours in a week.

```javascript
var bool = ( HOURS_IN_WEEK === 168 );
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
var HOURS_IN_WEEK = require( '@stdlib/constants/time/hours-in-week' );

var hrs;
var w;
var i;

function wks2hours( wks ) {
    return wks * HOURS_IN_WEEK;
}

for ( i = 0; i < 10; i++ ) {
    w = roundn( randu()*20.0, -2 );
    hrs = wks2hours( w );
    console.log( '%d wks => %d hours', w, hrs );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/time/hours-in-day`][@stdlib/constants/time/hours-in-day]</span><span class="delimiter">: </span><span class="description">number of hours in a day.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/constants/time/hours-in-day]: https://github.com/stdlib-js/constants/tree/main/time/hours-in-day

<!-- </related-links> -->

</section>

<!-- /.links -->
