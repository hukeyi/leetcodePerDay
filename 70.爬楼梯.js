
/*
* @lc app=leetcode.cn id=70 lang=javascript
*
* [70] 爬楼梯
*/

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
   return solution4(n);
}

// 递归
var solution1 = function(n){
   if (n <= 0) return 0;
   if (n <= 2) return n;
   return solution1(n - 1) + solution1(n - 2);
}

// 迭代
var solution3 = function(n){
   if (n <= 0) return 0;
   if (n <= 2) return n;

   let step1 = step2 = 1;
   let all_way = 2;
   for(let i = 3; i <= n; i++){
      step1 = step2;
      step2 = all_way;
      all_way = step1 + step2;
   }
   return all_way;
}

var solution2 = function(n){
   if (n <= 0) return 0;
   if (n <= 2) return n;

   let a = b = 1;
   while (n--){ //loop n times
      // a = old b
      // b = old a + old b
      a = (b += a) - a;
   }
   return a;
}

var solution4 = function(n){
   let dp = [];
   dp[0] = dp[1] = 1;
   for (let i = 2; i <= n; i++){
      dp[i] = dp[i - 1] + dp[i - 2];
   }
   return dp[n];
}
// @lc code=end

