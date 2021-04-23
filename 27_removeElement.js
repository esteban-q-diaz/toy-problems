/* Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this: */

let removeElements = (nums, val) => {
  let newLength = 0

  nums.forEach((elements, index) => {
    if (elements !== val) {
      nums[newLength] = nums[index]
      newLength++
    }
  })

  return newLength
}

let nums1 = [0, 1, 7, 8, 9, 0, 0, 0, 3, 3, 3,2,2,3]

let result = removeElements(nums1, 3)

console.log("results:", result) // expect 10