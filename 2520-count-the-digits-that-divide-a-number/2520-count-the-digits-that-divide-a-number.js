/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let n = [num].join('').split('')
   
    let count = 0
    for(i=0;i<n.length;i++){
        if(num%n[i]==0){
            count++
        }
    }
    return count
    
};