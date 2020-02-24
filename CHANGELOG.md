# Change Log

All notable changes to this project will be documented in this file. The format is based on
[Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

## [Unreleased](https://github.com/greylocklabs/await-result/compare/2.3.2...HEAD)

- N/A

## [2.3.2](https://github.com/greylocklabs/await-result/compare/2.3.0...2.3.1) - 02/24/2020

### Changed

- Update dependencies

## [2.3.1](https://github.com/greylocklabs/await-result/compare/2.3.0...2.3.1) - 09/04/2019

### Changed

- Update all dependencies
- Minor config file changes

## [2.3.0](https://github.com/greylocklabs/await-result/compare/2.2.0...2.3.0) - 04/22/2019

### Changed

- Remove ability to throw error (just throw it upon Promise resolution if you want to)
- Switch to TypeScript
- Update all dependencies and config files
- Switch to Jest for testing

## [2.2.0](https://github.com/greylocklabs/await-result/compare/2.1.0...2.2.0) - 01/27/2018

### Changed

- Restored old behavior - error can be thrown if desired

## [2.1.0](https://github.com/greylocklabs/await-result/compare/2.0.0...2.1.0) - 01/17/2018

### Added

- Flowtype being used again

### Changed

- Update config files
- Switch from `mdl` to `markdownlint`

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
