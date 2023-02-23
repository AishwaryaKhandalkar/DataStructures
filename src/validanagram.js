//Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    let m1 = new Map();
    let m2 = new Map();
    let temp;
    for(let i = 0; i< s.length; i++) {
        if(m1.has(s[i])) {
            temp = m1.get(s[i])
            m1.set(s[i], temp+1);
        } else {
            m1.set(s[i], 1)
        }
    }

    for(let i =0; i< t.length; i++) {
        if(m1.has(t[i])) {
            temp = m1.get(t[i]);
            if(temp > 1) {
                m1.set(t[i], temp-1);
            } else {
                m1.delete(t[i])
            }
        }
    }
    console.log(m1)
    if(m1.size) {
        return false;
    } else {
        return true
    }

};