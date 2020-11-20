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
    return solution2(s);
};

var top = function(stack){
    return stack[stack.length - 1];
}

var solution1 = function(s){
    const len = s.length;
    if (len % 2 !== 0) return false;
    const match = {')': '(', ']': '[', '}': '{'};
    const left = Object.values(match), stack = [];
    for (let i = 0; i < s.length; i++){
        // left push in stack; right see if it's match;
        // if not match, return false; match, continue
        if (left.includes(s[i])) stack.push(s[i]);
        else{
            if (match[s[i]] !== top(stack)) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

var solution2 = function (s) {
    const len = s.length;
    if (len % 2 !== 0) return false;
    const stack = [];
    for (const ch of s){
        if (ch === '(') stack.push(')');
        else if (ch === '[') stack.push(']');
        else if (ch === '{') stack.push('}');
        else if (!stack.length || ch !== stack.pop()) return false;
    }
    return stack.length === 0;
}
// @lc code=end

