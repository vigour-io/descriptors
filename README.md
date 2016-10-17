# descriptors
Like [`Object.getOwnPropertyDescriptor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), but goes along the prototype chain and gets the descriptors for all properties.

[![Build Status](https://travis-ci.org/vigour-io/descriptors.svg?branch=master)](https://travis-ci.org/vigour-io/descriptors)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/descriptors.svg)](https://badge.fury.io/js/descriptors)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/descriptors/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/descriptors?branch=master)

--

**Usage**

```javascript
const descriptors = require('descriptors')
descriptors({ a: 'a', b: 'b' })
/*
  {
    a: {
      value: 'a',
      writable: true,
      enumerable: true,
      configurable: true
    },
    b: {
      value: 'a',
      writable: true,
      enumerable: true,
      configurable: true
    }
  }
*/
```
