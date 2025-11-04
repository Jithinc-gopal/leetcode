/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let length = nums.map(num=>num.toString().length)
  count = 0
  for(i=0;i<length.length;i++){
  
      if(length[i]%2==0){
             count++
  }
  
  }
   return count
   
};