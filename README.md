# await-result

> Error handling for async functions without try/catch blocks

---

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![code coverage][coveralls-image]][coveralls-url]

## Motivation

I find the way that errors are handled in Go to be elegant, and wanted to make something to emulate that behavior in
JavaScript while also taking advantage of the new async / await feature available in newer versions of Node.js (7.6+).

## Installation

For use with Node.js 7.6 or later, unless you're using a transpiler such as [Babel](https://babeljs.io).

```bash
$ yarn add await-result
```

Or, with `npm`:

```bash
$ npm install --save await-result
```

## Usage

There are a few ways you can use this helper function:

### Get error and return value

You'll usually just call the function with only one argument - the function that returns a Promise:

```js
const [ err, data ] = await result(func());
```

You can then do something with the error and return value without having to worry about try-catch
blocks.

### Process error first

Similarly, you can get the error and return value, but process the error first; this is very useful in
larger projects where you might want to operate on the error in a consistent manner:

```js
const [ processedErr, data ] = await result(func(), customErrorHandler);
```

## Example

```js
import result from 'await-result';

async function getNumUsers() {
    const [ err, num ] = await result(database.userCount(), customErrorHandler);

    if (err) {
        throw err;
    }

    return num;
}

getNumUsers().then((count) => {
    console.log(`Total number of users: ${count}`);
}).catch((err) => {
    console.log(err);
});
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT License. See [LICENSE](LICENSE) for details.

[npm-image]: https://img.shields.io/npm/v/await-result.svg?style=flat-square
[npm-url]: https://npmjs.org/package/await-result

[travis-image]: https://img.shields.io/travis/greylocklabs/await-result.svg?style=flat-square
[travis-url]: https://travis-ci.org/greylocklabs/await-result

[coveralls-image]: https://coveralls.io/repos/github/greylocklabs/await-result/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/greylocklabs/await-result?branch=master
