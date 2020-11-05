/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    return solution1(s);
};

var solution1 = function(s){
    const len = s.length;
    if (len % 2 !== 0) return false;

    let match = {')': '(', ']': '[', '}': '{'};
    let left = Object.values(match);
    let stack = [];
    for (let i = 0; i < len; i++){
        if (left.includes(s[i])){ //左括号直接入栈
            stack.push(s[i]);
        }else{
            let top = stack[stack.length - 1];
            if (match[s[i]] !== top){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
// @lc code=end

