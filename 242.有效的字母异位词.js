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

var solution1 = function(s, t){
    if (s.length !== t.length) return false;

    return s.split('').sort().join('') === t.split('').sort().join('');
}

var solution2 = function(s, t){
    if (s.length !== t.length) return false;

    const hash = {}, len = s.length;
    for (let i = 0; i < len; i++){
        hash[s[i]] = s[i] in hash ? hash[s[i]] + 1 : 1;
        hash[t[i]] = t[i] in hash ? hash[t[i]] - 1 : -1;
    }
    for (let key in hash){
        if (hash[key] !== 0) return false;
    }
    return true;
}
// @lc code=end

