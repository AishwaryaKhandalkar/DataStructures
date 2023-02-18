//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

var twoSum = function(nums, target) {
    let m1 = new Map();
    let result = []
    for(let i =0; i< nums.length; i++) {
        diff = target - nums[i]
        if(m1.has(diff)) {
            let m = m1.get(diff)
            return [m, i]
        } else {
            m1.set(nums[i], i)
        }
    }
};