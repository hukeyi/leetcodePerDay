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
        let [gene, count] = queue.shift();
        // check if gene equals to the end. if true, return 
        if (gene === end)   return count;
        
        // replace every character and check
        for (let i = 0; i < 8; i++){
            for (let j = 0; j < 4; j++){
                // replace the string
                let temp = gene.slice(0, i) + dna[j] + gene.slice(i + 1);
                // do not in the bank
                if (!bankset.has(temp)) continue;

                queue.push([temp, count + 1]);
                bankset.delete(temp);
            }
        }
    }
    return -1;
}
// @lc code=end

