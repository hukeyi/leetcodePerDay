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
    return solution1(start, end, bank);
};

var mysolution1 = function(start, end, bank){
    let bankset = new Set(bank);
    if (!bankset.has(end)) return false;

    const queue = [[start, 0]], dna = ['A', 'C', 'G', 'T'];
    while (queue.length){
        let [gene, count] = queue.shift();
        if (gene === end) return count;
        for (let i = 0; i < 8; i++){
            for (let j = 0; j < 4; j++){
                let temp = gene.slice(0, i) + dna[j] + gene.slice(i + 1);
                if (!bankset.has(temp)) return false;

                queue.push([temp, count]);
                bankset.delete(temp);
            }
        }
    }
    return -1;
}
// @lc code=end

