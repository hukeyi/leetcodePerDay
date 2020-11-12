/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    return mysolution1(start, end, bank);
};

var mysolution1 = function(start, end, bank){
    let bankset = new Set(bank);
    if (!bankset.has(end)) return -1;

    const queue = [[start, 0]], dna = ['A', 'C', 'G', 'T'];
    while (queue.length){
        let [curr, count] = queue.shift();
        if (curr === end) return count;

        for (let i = 0; i < 8; i++){
            for (let j = 0; j < 4; j++){
                if (curr[i] === dna[j]) continue;

                let temp = curr.slice(0, i) + dna[j] + curr.slice(i + 1);
                if (bankset.has(temp)){
                    queue.push([temp, count + 1]);
                    bankset.delete(temp);
                }
            }
        }
    }
    return -1;
}
// @lc code=end

