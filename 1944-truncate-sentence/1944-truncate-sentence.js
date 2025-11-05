/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    val = s.split(' ')
     val1 = val.splice(k)
     return val.join(" ")
    
    
};