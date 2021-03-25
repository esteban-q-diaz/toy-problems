/*
SOLVED March 24, 2021
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSum(nums, target) {
  let resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = 0; j < nums.length; j++) {
      let second = nums[j];
      if (i !== j) {
        if (first + second === target) {
          resultArray.push(i, j);
          return resultArray;
        }
      }
    }
  }
  return resultArray;
}

let result = twoSum([2, 7, 11, 15], 9);
console.log(result);

let result2 = twoSum([3, 2, 4], 6);
console.log(result2);
