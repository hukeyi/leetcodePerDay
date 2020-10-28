var mysolution2 = function(heights){
    let max = [];
    let stack = [];
    let s2 = [];
    heights.unshift(0); //避免溢出，处理heights[0]的左边界
    heights.push(0); //处理heights[len-1]的右边界
    const len = heights.length;
    for (let i = 0; i < len; i++){
        // 当栈顶元素比新元素大，则说明栈顶元素的左右边界可以确定了，则它的最大面积也可以确定了
        while (stack.length !== 0 && heights[stack[stack.length-1]] > heights[i]){
            console.log('i', i, 'stack', s2);
            // 栈顶元素弹出，计算其最大面积
            let curr = stack.pop();
            // 左边界是栈顶元素的下一个元素(假设为k）的后一位
            // （因为k是左边第一个比curr小的，最后一个比curr大的下标要加一）
            let left = stack[stack.length - 1] + 1;
            // 右边界就是新元素（假设下标是j）的前一位
            // （因为j是右边第一个比curr小的，所以得到最后一个比curr大的下标要减一）
            let right = i - 1;
            let imax = (right - left + 1) * heights[curr];

            console.log('curr', curr, 'left', left, 'right', right, 'imax', imax);
            max.push(imax);
        }
        stack.push(i);
        s2.push(heights[i]);
    }
    return max;
}

console.log(mysolution2([2,1,5,6,2,3]));