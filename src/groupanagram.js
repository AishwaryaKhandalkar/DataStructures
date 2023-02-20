// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]



var groupAnagrams = function(strs) {
    let m1 = new Map();
    let arr = []
    let result = []
    let sortedarr;
    for(let i =0; i < strs.length; i++) {
         sortedarr = strs[i].split('').sort().join('');
        if (m1.has(sortedarr)) {
            let arr = (m1.get(sortedarr));
            arr.push(strs[i])
            m1.set(sortedarr, arr)
        } else {
            m1.set(sortedarr, [strs[i]]);
        }
    }
    m1.forEach((values, keys) => {
        result.push(values);
    });
    return result;
};