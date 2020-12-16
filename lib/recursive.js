'use strict'

const reverseString = str => {
  if (str === '') {
    return ''
  } else {
    console.log(str)
    return reverseString(str.substr(1)) + str.charAt(0)
  }
}

reverseString('hello')
