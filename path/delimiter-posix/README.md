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

> POSIX path delimiter.

<section class="usage">

## Usage

```javascript
var PATH_DELIMITER_POSIX = require( '@stdlib/constants/path/delimiter-posix' );
```

#### PATH_DELIMITER_POSIX

POSIX path delimiter.

```javascript
var delimiter = PATH_DELIMITER_POSIX;
// returns ':'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PATH_DELIMITER_POSIX = require( '@stdlib/constants/path/delimiter-posix' );

var PATH = '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin';
var paths = PATH.split( PATH_DELIMITER_POSIX );
// returns ['/usr/bin','/bin','/usr/sbin','/sbin','/usr/local/bin']
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/path/delimiter`][@stdlib/constants/path/delimiter]</span><span class="delimiter">: </span><span class="description">platform-specific path delimiter.</span>
-   <span class="package-name">[`@stdlib/constants/path/delimiter-win32`][@stdlib/constants/path/delimiter-win32]</span><span class="delimiter">: </span><span class="description">Windows path delimiter.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/constants/path/delimiter]: https://github.com/stdlib-js/constants/tree/main/path/delimiter

[@stdlib/constants/path/delimiter-win32]: https://github.com/stdlib-js/constants/tree/main/path/delimiter-win32

<!-- </related-links> -->

</section>

<!-- /.links -->
