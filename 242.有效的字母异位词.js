/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return solution2(s, t);
};

// o(nlogn)
var solution2 = function(s, t){
    if (s.length !== t.length) return false;

    let s_arr = s.split("").sort().join("");
    let t_arr = t.split("").sort().join("");
    if (s_arr === t_arr) return true;
    else return false;
}

// o(3n)
var mySolution = function(s, t){
    if (s === t) return true;
    if (s.length !== t.length) return false;

    const len = s.length;
    let hash = {};
    for (let i = 0; i < len; i++){
        if (s[i] in hash){
            hash[s[i]]++;
        }else{
            hash[s[i]] = 1;
        }
    }
    for (let j = 0; j < len; j++){
        if (t[j] in hash && hash[t[j]] > 0){
            hash[t[j]]--;
        }else{
            return false;
        }
    }
    for (let key in hash){
        if (hash[key] !== 0) return false;
    }
    return true;
}
// @lc code=end

