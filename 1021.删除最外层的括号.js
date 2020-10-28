// 双端队列，队列里存储单个原语
// 当原语完整时，弹出队头和队尾，剩下当部分加入res
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    return goodSolution(S);
};

var goodSolution = function(S) {
    let res = "";
    let opened = 0;
    for (const ch of S){
        if (ch === '(' && opened++ > 0) res += ch;
        if (ch === ')' && opened-- < 0) res += ch;
    }
    return res;
}

// 直接用字符串的方法 o(n)
var mySolution2 = function(S){
    let count = {'(': 0, ')': 0};
    let res = '', deque = [];
    const len = S.length;

    for (let i = 0; i < len; i++){
        count[S[i]]++;
        deque.push(S[i]);
        if (count['('] === count[')']){
            deque.pop();
            deque.shift();
            res = res.concat(deque.join(''));
            deque.length = 0; //clear deque
        }
    }
    return res;
}