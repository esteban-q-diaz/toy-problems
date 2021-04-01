/*
SOLVED April 1, 2021 - Working on a more optimal solution
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

*/

let opening = {
  a: '[',
  b: '(',
  c: '{',
}

let closing = {
  a: ']',
  b: ')',
  c: '}',
}

let validParentheses = (s) => {
  let match = false;
  if (s.length % 2 === 1) {
    return false
  }

  let innerFunc = (characters) => {
    for (var i = 0; i < characters.length; i++) {
      if (characters[i+1] !== undefined) {
        if (helper(characters[i], characters[i+1])) {
          let array = characters.split('')
          delete array[i]
          delete array[i+1]
          characters = array.join('')
          match= true
          innerFunc(characters)
          break
        } else {
          match = false;
        }
      }

    }
  }
  innerFunc(s)

  return match
}

let helper = (open, close) => {
  let keyOne;
  let keyTwo;

  if (open === '(' || open === '[' || open === '{') {
    console.log('this wroked')
    for (var key in opening) {
      if (opening[key] === open) {
        keyOne = key
      }
    }
    for (var key2 in closing) {
      if (closing[key2] === close) {
        keyTwo = key2
      }
    }

    if (keyOne === keyTwo) {
      return true
      } else {
        return false
      }
    } else {
      return false
    }


}

let testCase = '")(){}"'
let result = validParentheses(testCase)
console.log(result)
