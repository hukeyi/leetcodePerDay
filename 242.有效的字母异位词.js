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
    return mysolution2(s, t);
};

// 排序
// o(nlogn)
var mysolution1 = function(s, t){
    if (s.length !== t.length) return false;
    
    let sort_s = s.split('').sort().join('');
    let sort_t = t.split('').sort().join('');
    return sort_s === sort_t;
}

// 哈希表，一个
var mysolution2 = function(s, t){
    if (s.length !== t.length) return false;

    let hash = {};
    const len = s.length;
    for (let i = 0; i < len; i++){
        hash[s[i]] = (s[i] in hash) ? hash[s[i]] + 1 : 1;
        hash[t[i]] = (t[i] in hash) ? hash[t[i]] - 1 : -1;
    }

    for (let key in hash){
        if (hash[key] !== 0) return false;
    }
    return true;
}
// @lc code=end

