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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Fréchet

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fréchet distribution.



<section class="usage">

## Usage

```javascript
import frechet from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { Frechet, cdf, entropy, kurtosis, logcdf, logpdf, mean, median, mode, pdf, quantile, skewness, stdev, variance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet@v0.1.0-esm/index.mjs';
```

#### frechet

Fréchet distribution.

```javascript
var dist = frechet;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/cdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/logcdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/logpdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution logarithm of probability density function.</span>
-   <span class="signature">[`pdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/pdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution probability density function.</span>
-   <span class="signature">[`quantile( p, alpha, s, m )`][@stdlib/stats/base/dists/frechet/quantile]</span><span class="delimiter">: </span><span class="description">Fréchet distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, s, m )`][@stdlib/stats/base/dists/frechet/entropy]</span><span class="delimiter">: </span><span class="description">Fréchet distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, s, m )`][@stdlib/stats/base/dists/frechet/kurtosis]</span><span class="delimiter">: </span><span class="description">Fréchet distribution kurtosis.</span>
-   <span class="signature">[`mean( alpha, s, m )`][@stdlib/stats/base/dists/frechet/mean]</span><span class="delimiter">: </span><span class="description">Fréchet distribution expected value.</span>
-   <span class="signature">[`median( alpha, s, m )`][@stdlib/stats/base/dists/frechet/median]</span><span class="delimiter">: </span><span class="description">Fréchet distribution median.</span>
-   <span class="signature">[`mode( alpha, s, m )`][@stdlib/stats/base/dists/frechet/mode]</span><span class="delimiter">: </span><span class="description">Fréchet distribution mode.</span>
-   <span class="signature">[`skewness( alpha, s, m )`][@stdlib/stats/base/dists/frechet/skewness]</span><span class="delimiter">: </span><span class="description">Fréchet distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, s, m )`][@stdlib/stats/base/dists/frechet/stdev]</span><span class="delimiter">: </span><span class="description">Fréchet distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, s, m )`][@stdlib/stats/base/dists/frechet/variance]</span><span class="delimiter">: </span><span class="description">Fréchet distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Fréchet][frechet-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Frechet( [alpha, s, m] )`][@stdlib/stats/base/dists/frechet/ctor]</span><span class="delimiter">: </span><span class="description">Fréchet distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Frechet = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet' ).Frechet;

var dist = new Frechet( 2.0, 4.0, 3.0 );

var y = dist.pdf( 5.5 );
// returns ~0.158
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import frechet from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet@v0.1.0-esm/index.mjs';

console.log( objectKeys( frechet ) );

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/frechet/ctor]: https://github.com/stdlib-js/stats-base-dists-frechet-ctor/tree/esm

[@stdlib/stats/base/dists/frechet/entropy]: https://github.com/stdlib-js/stats-base-dists-frechet-entropy/tree/esm

[@stdlib/stats/base/dists/frechet/kurtosis]: https://github.com/stdlib-js/stats-base-dists-frechet-kurtosis/tree/esm

[@stdlib/stats/base/dists/frechet/mean]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/tree/esm

[@stdlib/stats/base/dists/frechet/median]: https://github.com/stdlib-js/stats-base-dists-frechet-median/tree/esm

[@stdlib/stats/base/dists/frechet/mode]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/tree/esm

[@stdlib/stats/base/dists/frechet/skewness]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/tree/esm

[@stdlib/stats/base/dists/frechet/stdev]: https://github.com/stdlib-js/stats-base-dists-frechet-stdev/tree/esm

[@stdlib/stats/base/dists/frechet/variance]: https://github.com/stdlib-js/stats-base-dists-frechet-variance/tree/esm

[@stdlib/stats/base/dists/frechet/cdf]: https://github.com/stdlib-js/stats-base-dists-frechet-cdf/tree/esm

[@stdlib/stats/base/dists/frechet/logcdf]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/tree/esm

[@stdlib/stats/base/dists/frechet/logpdf]: https://github.com/stdlib-js/stats-base-dists-frechet-logpdf/tree/esm

[@stdlib/stats/base/dists/frechet/pdf]: https://github.com/stdlib-js/stats-base-dists-frechet-pdf/tree/esm

[@stdlib/stats/base/dists/frechet/quantile]: https://github.com/stdlib-js/stats-base-dists-frechet-quantile/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
