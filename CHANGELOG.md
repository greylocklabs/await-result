# Change Log

All notable changes to this project will be documented in this file. The format is based on
[Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

## [Unreleased](https://github.com/greylocklabs/await-result/compare/2.0.0...HEAD)

- N/A

## [2.0.0](https://github.com/greylocklabs/await-result/compare/1.2.0...2.0.0) - 11/13/2017

### Changed

- Change ownership to @greylocklabs github account
- Minor refinements to docs, config files (API is the same)

## [1.2.0](https://github.com/greylocklabs/await-result/compare/1.1.0...1.2.0) - 8/10/2017

### Changed

- `throwErr` param replaced with a param that allows for an error-handling function
- Error always returned, never thrown

### Removed

- No longer using Flowtype, still not mature enough as a project

## [1.1.0](https://github.com/greylocklabs/await-result/compare/1.0.7...1.1.0) - 6/20/2017

### Changed

- When `throwErr` is set to `true`, only return the result instead of an array including error
