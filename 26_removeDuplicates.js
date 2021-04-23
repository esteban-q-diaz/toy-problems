/* Given a sorted nums nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another nums, you must do this by modifying the input nums in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an nums?

Note that the input nums is passed in by reference, which means a modification to the input nums will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}*/

let removeDuplicates = (nums) => {

    let count = 0
    let index = 0
    while (count < nums.length) {
      if (nums[index] === nums[index + 1]) {
        nums.splice(index+1, 1)
      } else {
        count++
        index++
      }
    }

  return nums
}

// let result = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
let result2 = removeDuplicates([-1,0,0,0,0,3,3])
// console.log('result', result)
console.log('result two:', result2)