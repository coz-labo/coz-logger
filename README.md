coz-logger
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/coz-repo/coz-logger
[bd_travis_url]: http://travis-ci.org/coz-repo/coz-logger
[bd_travis_shield_url]: http://img.shields.io/travis/coz-repo/coz-logger.svg?style=flat
[bd_license_url]: https://github.com/coz-repo/coz-logger/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/coz-repo/coz-logger
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/coz-repo/coz-logger.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/coz-repo/coz-logger.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/coz-repo/coz-logger
[bd_gemnasium_shield_url]: https://gemnasium.com/coz-repo/coz-logger.svg
[bd_npm_url]: http://www.npmjs.org/package/coz-logger
[bd_npm_shield_url]: http://img.shields.io/npm/v/coz-logger.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/coz-logger.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Logger for coz.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install coz-logger --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
----

```javascript
var cozLogger = require('coz-logger');

var logger = cozLogger({
    verbose: true
});

var startDate = new Date();
logger.infoStarted('render');
/*...*/
var endDate = new Date();
logger.infoFinished('render', startDate, endDate);
```
<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/coz-repo/coz-logger/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [coz](https://github.com/coz-repo/coz)

<!-- Links End -->
