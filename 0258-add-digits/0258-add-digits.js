/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let digit = num.toString().split('').map(Number)
    let value = 0
    for(i=0;i<digit.length;i++){
        value = value+digit[i]
        if(value.toString().length>1){
            let a = value.toString().split('').map(Number)
            value = a[0]+a[1]
        }
    }
   return value
 
};