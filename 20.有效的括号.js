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
    return mysolution1(s);
};

var peek = function(stack){
    const len = stack.length;
    return stack[len - 1];
}

var mysolution1 = function(s){
    const len = s.length;
    if (len % 2 !== 0) return false;

    let match = {')': '(', ']': '[', '}': '{'}, stack = [];
    let left = Object.values(match);
    for (let i = 0; i < len; i++){
        if (left.includes(s[i])){ // 左括号直接进栈
            stack.push(s[i]);
        }else{ //右括号与栈顶比较
            if (match[s[i]] !== peek(stack)){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
// @lc code=end

