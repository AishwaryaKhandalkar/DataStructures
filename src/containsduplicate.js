let input1 = [1, 2, 3, 1];
let input2 = [1, 2, 3, 4];

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
  let m1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m1.has(nums[i])) {
      return true;
    } else {
      m1.set(nums[i], 1);
    }
  }
  return false;
};

var result1 = containsDuplicate(input1);
var result2 = containsDuplicate(input2);
