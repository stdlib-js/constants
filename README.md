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

# Constants

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Constants.



<section class="usage">

## Usage

To use in Observable,

```javascript
constants = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/constants@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var constants = require( 'path/to/vendor/umd/constants/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.constants;
})();
</script>
```

#### constants

Namespace containing constants.

```javascript
var ns = constants;
// returns {...}
```

Constants are split across the the following sub-namespaces:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`array`][@stdlib/constants/array]</span><span class="delimiter">: </span><span class="description">array constants.</span>
-   <span class="signature">[`complex128`][@stdlib/constants/complex128]</span><span class="delimiter">: </span><span class="description">128-bit complex number mathematical constant.</span>
-   <span class="signature">[`complex64`][@stdlib/constants/complex64]</span><span class="delimiter">: </span><span class="description">half-precision floating-point mathematical constants.</span>
-   <span class="signature">[`float16`][@stdlib/constants/float16]</span><span class="delimiter">: </span><span class="description">half-precision floating-point mathematical constants.</span>
-   <span class="signature">[`float32`][@stdlib/constants/float32]</span><span class="delimiter">: </span><span class="description">single-precision floating-point mathematical constants.</span>
-   <span class="signature">[`float64`][@stdlib/constants/float64]</span><span class="delimiter">: </span><span class="description">double-precision floating-point mathematical constants.</span>
-   <span class="signature">[`int16`][@stdlib/constants/int16]</span><span class="delimiter">: </span><span class="description">16-bit signed integer mathematical constants.</span>
-   <span class="signature">[`int32`][@stdlib/constants/int32]</span><span class="delimiter">: </span><span class="description">32-bit signed integer mathematical constants.</span>
-   <span class="signature">[`int8`][@stdlib/constants/int8]</span><span class="delimiter">: </span><span class="description">8-bit signed integer mathematical constants.</span>
-   <span class="signature">[`path`][@stdlib/constants/path]</span><span class="delimiter">: </span><span class="description">path constants.</span>
-   <span class="signature">[`time`][@stdlib/constants/time]</span><span class="delimiter">: </span><span class="description">time constants.</span>
-   <span class="signature">[`uint16`][@stdlib/constants/uint16]</span><span class="delimiter">: </span><span class="description">16-bit unsigned integer mathematical constants.</span>
-   <span class="signature">[`uint32`][@stdlib/constants/uint32]</span><span class="delimiter">: </span><span class="description">32-bit unsigned integer mathematical constants.</span>
-   <span class="signature">[`uint8`][@stdlib/constants/uint8]</span><span class="delimiter">: </span><span class="description">8-bit unsigned integer mathematical constants.</span>
-   <span class="signature">[`unicode`][@stdlib/constants/unicode]</span><span class="delimiter">: </span><span class="description">unicode constants.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = constants.float64.PI;
// returns ~3.142

out = constants.array.MAX_ARRAY_LENGTH;
// returns 4294967295

out = constants.time.HOURS_IN_DAY;
// returns 24

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants

[test-image]: https://github.com/stdlib-js/constants/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/constants/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants/tree/deno
[umd-url]: https://github.com/stdlib-js/constants/tree/umd
[esm-url]: https://github.com/stdlib-js/constants/tree/esm
[branches-url]: https://github.com/stdlib-js/constants/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants/main/LICENSE

<!-- <toc-links> -->

[@stdlib/constants/array]: https://github.com/stdlib-js/constants/tree/main/array

[@stdlib/constants/complex128]: https://github.com/stdlib-js/constants/tree/main/complex128

[@stdlib/constants/complex64]: https://github.com/stdlib-js/constants/tree/main/complex64

[@stdlib/constants/float16]: https://github.com/stdlib-js/constants/tree/main/float16

[@stdlib/constants/float32]: https://github.com/stdlib-js/constants/tree/main/float32

[@stdlib/constants/float64]: https://github.com/stdlib-js/constants/tree/main/float64

[@stdlib/constants/int16]: https://github.com/stdlib-js/constants/tree/main/int16

[@stdlib/constants/int32]: https://github.com/stdlib-js/constants/tree/main/int32

[@stdlib/constants/int8]: https://github.com/stdlib-js/constants/tree/main/int8

[@stdlib/constants/path]: https://github.com/stdlib-js/constants/tree/main/path

[@stdlib/constants/time]: https://github.com/stdlib-js/constants/tree/main/time

[@stdlib/constants/uint16]: https://github.com/stdlib-js/constants/tree/main/uint16

[@stdlib/constants/uint32]: https://github.com/stdlib-js/constants/tree/main/uint32

[@stdlib/constants/uint8]: https://github.com/stdlib-js/constants/tree/main/uint8

[@stdlib/constants/unicode]: https://github.com/stdlib-js/constants/tree/main/unicode

<!-- </toc-links> -->

</section>

<!-- /.links -->
