/* Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

var strStr = function(haystack, needle) {
    let index;
    let count = 0;
    let array = []
    let result = -1

    if (needle === '') {
      return 0
    }

    if (haystack === '' || haystack.length > 200) {
      return result
    }

    if (needle.length > haystack.length) {
      return result
    }

    for (let i = 0; i < haystack.length; i++) {
      count = 0
      index = i
      array = []
      while(count < needle.length) {
        array.push(haystack[index])
        index++
        count++
      }
      if (array.join('') === needle) {
        return i
      }
    }

    return result

    // taking in the needle --> 'll"
    // iterate through the haystack
      // get the total length of the needle
      // check is hay at i plus total number of lenth of needls === needle
      // if so return i
};



let result = strStr("", "a")
console.log("result:", result)