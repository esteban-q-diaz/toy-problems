/*
Solved: 4.28.21
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

*/


var searchInsert = function(nums, target) {
  let result;
  if (result === undefined) {
    result = nums.length
  }
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    if (current >= target) {
      return i
    }
  }
  return result
};

let array = [3, 5, 6]

let result1 = searchInsert(array, 7) // should output 2
console.log(result1)