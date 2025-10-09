/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let a = n.toString().split('')
    let b = a.map(Number)
    let c = b.reduce((acc,sum)=>acc*sum,1) - b.reduce((acc,sum)=>acc+sum,0) 
   return c
      
};