/*
SOLVED March 24, 2021
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Input: x = 123
Output: 321

*/

const reverseInteger = (x) => {
  let array = [];
  let isNegative = false;
  let numString = Math.abs(x).toString();
  let returnInteger = 0;

  if (x < 0) {
    isNegative = true;
  }

  for (let i = 0; i < numString.length; i++) {
    array.unshift(numString[i]);
  }

  if (isNegative) {
    returnInteger = Number(array.join('')) * -1;
  } else {
    returnInteger = Number(array.join(''));
  }

  if (returnInteger > 2**31 - 1 || returnInteger < Math.pow(-2, 31)) {
    return 0;
  }

  return returnInteger;
};

let result1 = reverseInteger(123)
console.log(result1)

let result2 = reverseInteger(-123)
console.log(result2)

let result3 = reverseInteger(120)
console.log(result3)

let result4 = reverseInteger(0)
console.log(result4)

let result5 = reverseInteger(1534236469);
console.log(result5);

let result6 = reverseInteger(-2147483648);
console.log(result6);
