# Await Result

Error handling for async functions without try/catch blocks

---

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]

## Installation

For use with Node.js 7.6 or later, unless you're using a transpiler such as [Babel](https://babeljs.io).

```bash
$ npm install --save await-result
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

## Motivation

I find the way that errors are handled in Go to be elegant, and wanted to make something to emulate that behavior in
JavaScript while also taking advantage of the new async / await feature available in newer versions of Node.js (7.6+).

## License

MIT License. Copyright (c) 2017 [Greylock Labs](https://greylocklabs.com)

[npm-image]: https://img.shields.io/npm/v/await-result.svg?style=flat-square
[npm-url]: https://npmjs.org/package/await-result

[travis-image]: https://img.shields.io/travis/greylocklabs/await-result.svg?style=flat-square
[travis-url]: https://travis-ci.org/greylocklabs/await-result
