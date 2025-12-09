/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let reversed =Number(String(num).split("").reverse().join(''))
    let ans = Number(String(reversed).split("").reverse().join('')) 
    
    if(num == ans){
        return true
    }
    else{
        return false
    }
    
};