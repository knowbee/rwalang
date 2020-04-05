# rwalang (detect ikinyarwanda)

[![Build Status](https://travis-ci.com/knowbee/rwalang.svg?token=yN9jXnk59suszMqNsJJb&branch=master)](https://travis-ci.com/knowbee/rwalang)
[![npm](https://img.shields.io/npm/dt/rwalang.svg)](https://www.npmjs.com/package/rwalang)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

A fast language detection package for Ikinyarwanda(Native language of Rwandans)

⚠ Be aware that if a sentence has foreign language mixed with Ikinyarwanda rwalang returns `false`

## Installation

```
npm install rwalang --save
```

```
yarn add rwalang
```

## Usage

```js
const { isKinyarwanda } = require("rwalang");
```

## Examples

```js
const { isKinyarwanda } = require("rwalang");

console.log(isKinyarwanda("Thank you!")); //false
console.log(isKinyarwanda("Murakoze!")); //true
console.log(isKinyarwanda("Mu myandikire ya gihaânga")); //true
console.log(isKinyarwanda("Iminsi n'imitindi")); //true
console.log(isKinyarwanda("Yangurije amafaranga magana atanu")); //true
console.log(isKinyarwanda("mbega i nigga")); //false 😂
```

## Contribution

Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT License

Copyright (c) 2020, Igwaneza Bruce <knowbeeinc@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
