var fibGenerator = function*() {
   let  a = 0,b = 1
    while(true){
        yield a
        [a,b] = [b, a+b]
    }
    
};
let c = fibGenerator()

console.log(c.next().value)