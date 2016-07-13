'use strict'

var test = require('tape')
var descriptors = require('../')
var obj = {}
Object.defineProperty(obj, 'b', {})

function Super () {}
Super.prototype.a = 'a'
Object.defineProperty(Super.prototype, 'c', {
  writable: false,
  configurable: false
})

function Sub () {}
Sub.prototype = Super.prototype
var instance = new Sub()

var testCases = [
  [{ a: 'a' },
    { a: { configurable: true, enumerable: true, value: 'a', writable: true } }
  ],
  [{ a: 'a', b: 'b' },
    { a: { configurable: true, enumerable: true, value: 'a', writable: true },
      b: { configurable: true, enumerable: true, value: 'b', writable: true }
  }],
  [obj,
    { b: { configurable: false, enumerable: false, value: void 0, writable: false } }
  ],
  [instance,
    {
      a: { configurable: true, enumerable: true, value: 'a', writable: true },
      c: { configurable: false, enumerable: false, value: void 0, writable: false }
    }
  ]
]

test('descriptors', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.deepEqual(descriptors(item[0]),
      item[1],
      'descriptors(' + JSON.stringify(item[0]) + ') === ' + JSON.stringify(item[1]))
  })
})
