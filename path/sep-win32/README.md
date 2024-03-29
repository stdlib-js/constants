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

# Path Separator

> Windows path segment separator.

<section class="usage">

## Usage

```javascript
var PATH_SEP_WIN32 = require( '@stdlib/constants/path/sep-win32' );
```

#### PATH_SEP_WIN32

Windows path segment separator.

```javascript
var sep = PATH_SEP_WIN32;
// returns '\\'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PATH_SEP_WIN32 = require( '@stdlib/constants/path/sep-win32' );

var path = 'foo\\bar\\baz';
var parts = path.split( PATH_SEP_WIN32 );
// returns ['foo','bar','baz']

path = 'foo/bar/baz';
parts = path.split( PATH_SEP_WIN32 );
// returns ['foo/bar/baz' ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/path/sep`][@stdlib/constants/path/sep]</span><span class="delimiter">: </span><span class="description">platform-specific path segment separator.</span>
-   <span class="package-name">[`@stdlib/constants/path/sep-posix`][@stdlib/constants/path/sep-posix]</span><span class="delimiter">: </span><span class="description">POSIX path segment separator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/constants/path/sep]: https://github.com/stdlib-js/constants/tree/main/path/sep

[@stdlib/constants/path/sep-posix]: https://github.com/stdlib-js/constants/tree/main/path/sep-posix

<!-- </related-links> -->

</section>

<!-- /.links -->
