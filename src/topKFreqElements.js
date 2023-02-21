// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



var topKFrequent = function(nums, k) {
    let m1 = new Map();
    let temp;
    let map1;
    let result = []
    for(let i =0; i< nums.length; i++) {
        if(m1.has(nums[i])) {
            temp = m1.get(nums[i])
            m1.set(nums[i], temp + 1)
        } else {
            m1.set(nums[i], 1)
        }
    }
    map1 = new Map([...m1.entries()].sort((a, b) => b[1] - a[1]))

    for (let [key, value] of map1) {
       if(k === 0) {
           break;
       } else {
           result.push(key);
           k--;
       }
    }
    return result;
};