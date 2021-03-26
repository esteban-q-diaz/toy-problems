/*
SOLVED March 26, 2021
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

const longest = (strs) => {
  let count = 0;
  let shortestString = '';
  let longestWord = ''
  let currentIndex = 0;
  let prefix = [];
  let check = true;

  strs.forEach((string) => {
    if (shortestString.length > string.length || shortestString === '') {
      shortestString = string
    }
    if (longestWord.length < string.length) {
      longestWord = string
    }
  })

  while (count < longestWord.length) {
    strs.forEach((strings) => {
      if (shortestString[currentIndex] !== strings[currentIndex]) {
        check = false;
      }
    })
      if (check === true) {
        prefix.push(shortestString[currentIndex])
      }
    currentIndex++
    count++
  }
  if (prefix.length === 0) {
    return ''
  }

  return prefix.join('')
}

let strings = ["flower","flow","flight"]
let result = longest(strings)
console.log(result)