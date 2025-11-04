/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let str = digits.join('')
    let a = (BigInt(str)+1n).toString().split('').map(Number)


  return a

    
 
};