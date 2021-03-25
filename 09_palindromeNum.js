/*
SOLVED March 24, 2021
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

let palindromeNum = (x) => {
  let numArray = Array.from(x.toString())
  let reverseNumArray = [];

  numArray.map((nums) => {
    reverseNumArray.unshift(nums)
  })

  let number = Number(numArray.join(''))
  let reversedNumber = Number(reverseNumArray.join(''))

  if (number === reversedNumber) {
    return true;
  }

  return false;

}

let result = palindromeNum(121)
console.log(result)

let result1 = palindromeNum(10)
console.log(result1)

let result2 = palindromeNum(-121)
console.log(result2)