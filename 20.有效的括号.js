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
    return mysolution2(s);
};

var mysolution2 = function(s){
    const len = s.length;
    if (len % 2 === 1) return false;
    const stack = [];
    for (let ch of s){
        if (ch === '(') stack.push(')');
        else if (ch === '[') stack.push(']');
        else if (ch === '{') stack.push('}');
        else if (!stack.length || stack.pop() !== ch) return false;
    }
    return stack.length === 0;
}

var top = function(stack){
    const len = stack.length;
    return stack[len - 1];
}

var mysolution1 = function(s){
    const len = s.length;
    if (len % 2 !== 0) return false;

    const match = {')': '(', ']': '[', '}': '{'}, stack = [];
    const left = Object.values(match);
    for (let ch of s){
        if (left.includes(ch)){
            stack.push(ch);
        }else{
            if (top(stack) !== match[ch]){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
// @lc code=end

