/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};
const functions = [x => x + 1, x => x * x, x => 2 * x];
const fn = compose(functions);

console.log(fn(4)); 
console.log(fn(1)); 
console.log(fn(5)); 
