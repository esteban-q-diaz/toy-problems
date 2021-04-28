/*
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) {
  let regex = /\w+/g
  let wordArray = s.match(regex)

  if (wordArray !== null) {
    return wordArray[wordArray.length-1].length
  } else {
    return 0
  }

};

let result = lengthOfLastWord('hello world')
console.log(result)