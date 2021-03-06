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

# Path Delimiter

> Windows path delimiter.

<section class="usage">

## Usage

```javascript
var PATH_DELIMITER_WIN32 = require( '@stdlib/constants/path/delimiter-win32' );
```

#### PATH_DELIMITER_WIN32

Windows path delimiter.

```javascript
var delimiter = PATH_DELIMITER_WIN32;
// returns ';'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PATH_DELIMITER_WIN32 = require( '@stdlib/constants/path/delimiter-win32' );

var PATH = 'C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\node\\';
var paths = PATH.split( PATH_DELIMITER_WIN32 );
// returns ['C:\\Windows\\system32','C:\\Windows','C:\\Program Files\\node\\']
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/path/delimiter`][@stdlib/constants/path/delimiter]</span><span class="delimiter">: </span><span class="description">platform-specific path delimiter.</span>
-   <span class="package-name">[`@stdlib/constants/path/delimiter-posix`][@stdlib/constants/path/delimiter-posix]</span><span class="delimiter">: </span><span class="description">POSIX path delimiter.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/constants/path/delimiter]: https://github.com/stdlib-js/constants/tree/main/path/delimiter

[@stdlib/constants/path/delimiter-posix]: https://github.com/stdlib-js/constants/tree/main/path/delimiter-posix

<!-- </related-links> -->

</section>

<!-- /.links -->
