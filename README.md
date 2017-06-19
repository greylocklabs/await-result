# Await Result

Golang-style error handling for functions that return a Promise

---

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]

## Installation

For use with Node.js 7.6 or later, or a transpiler that understands ES7. I recommend [Babel](https://babeljs.io)
personally.

```bash
$ npm install await-result
```

## Docs

See [src/index.js](src/index.js).

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

I love the way that error handling works in Golang, and wanted to make something to emulate that behavior in
JavaScript while also taking advantage of the new async / await feature available in newer versions of Node.js (7.6+).

## License

MIT License. Copyright (c) 2017 [Ty-Lucas Kelley](https://tylucaskelley.com)

[npm-image]: https://img.shields.io/npm/v/await-to-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/await-to-js

[travis-image]: https://img.shields.io/travis/tylucaskelley/await-result.svg?style=flat-square
[travis-url]: https://travis-ci.org/tylucaskelley/await-result
