/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let a =  Number(x.toString().split('').reverse().join(''))
   if(a == x){
    return true
  }
  return false
  

  
};