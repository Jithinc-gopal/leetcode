/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let num = nums.map((n)=>n*n)
   return  num.sort((a,b)=>a-b)
    
};