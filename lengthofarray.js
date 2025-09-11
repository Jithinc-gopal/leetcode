var argumentsLength = function(...args) {

    let arr = [...args]
    return(arr.length)
    
};

let length = argumentsLength(1,2,5)
console.log(length)