
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

 // 递归 超时 自顶向下
var climbStairs = function(n) {
   // if (n <= 0) return 0;
   // if (n <= 2) return n;
   // return climbStairs(n - 1) + climbStairs(n - 2);
   return mysolution3(n);
}

var mysolution1 = function(n){
   if (n <= 0) return 0;
   if (n <= 2) return n;

   let step1 = step2 = 1;
   let all_way = 2;
   for (let i = 3; i <= n; i++){
      step1 = step2;
      step2 = all_way;
      all_way = step1 + step2;
   }
   return all_way;
}

var mysolution2 = function(n){
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
// 自底向上
var mysolution3 = function (n){
   let dp = [];
   dp[0] = dp[1] = 1;
   for (let i = 2; i <= n; i++){
      dp[i] = dp[i - 1] + dp[i - 2];
   }
   return dp[n];
}
// @lc code=end

