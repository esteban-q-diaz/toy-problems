/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/

var missingNumber = function(nums) {
  const length = nums.length
  let missing = ((length + 1) * length) / 2

  for (var i = 0; i < length; i++) {
    missing = missing - nums[i]
  }

  return missing;
};

// test solution
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12]
let result1 = missingNumber(numbers)
console.log(result1) // expect result to equal 8 
