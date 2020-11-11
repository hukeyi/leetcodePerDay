/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.theStack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.theStack.push(x);

    const len = this.minStack.length;
    if (!len || this.getMin() > x){
        this.minStack.push(x);
    }else{
        this.minStack.push(this.getMin());
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.theStack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // return this.theStack.slice(-1);
    const len = this.theStack.length;
    return this.theStack[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // return this.minStack.slice(-1);
    const len = this.minStack.length;
    return this.minStack[len - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

