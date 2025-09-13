var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
        
    }
   

};
let a = createHelloWorld()
console.log(a())