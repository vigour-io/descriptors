'use strict'

/**
 * @id descriptors
 * @function descriptors
 * Like [`Object.getOwnPropertyDescriptor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), but goes along the prototype chain and gets the descriptors for all properties.
 * @param {object} props - the properties to get the descriptors for
 * @returns {object} allDescriptors
 */
module.exports = function getAllPropertyDescriptors (props) {
  var definitions = {}
  var arr
  // loop trough protos
  var proto = props
  while (proto) {
    arr = Object.getOwnPropertyNames(proto)
    for (var i in arr) {
      if (!definitions[arr[i]]) {
        definitions[arr[i]] = Object.getOwnPropertyDescriptor(proto, arr[i])
      }
    }
    proto = Object.getPrototypeOf(proto)
  }
  return definitions
}
