/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = []
    let sum = 0
    for(i=0;i<nums.length;i++){
      val = sum+=nums[i]
      arr.push(val)
   
       
    }
     return arr
};