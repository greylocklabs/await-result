# Await Result

> Error handling for async functions without try/catch blocks

---

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

## Motivation

I find the way that errors are handled in Go to be elegant, and wanted to make something to emulate that behavior in
JavaScript while also taking advantage of the new async / await feature available in newer versions of Node.js (7.6+).

## Installation

For use with Node.js 7.6 or later, unless you're using a transpiler such as [Babel](https://babeljs.io).

```bash
$ npm install await-result
```

## Usage

See the comments in [src/index.js](src/index.js) for usage information.

## Example

```js
import result from 'await-result';

async function getNumUsers(cb) {
    const [ err, num ] = await result(database.userCount());
    if (!err) return cb(num);
}

getNumUsers((err, num) => {
    console.log(err);
    console.log(num);
});
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT License. Copyright (c) 2017-2018 [Greylock Labs](https://greylocklabs.com)

[npm-image]: https://img.shields.io/npm/v/await-result.svg?style=flat-square
[npm-url]: https://npmjs.org/package/await-result

[travis-image]: https://img.shields.io/travis/greylocklabs/await-result.svg?style=flat-square
[travis-url]: https://travis-ci.org/greylocklabs/await-result

[coveralls-image]: https://coveralls.io/repos/github/greylocklabs/http/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/greylocklabs/http?branch=master
