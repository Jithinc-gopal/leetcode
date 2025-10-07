var differenceOfSums = function(n, m) {
    let notdivisible = []
    let divisible  =[]
    for(i=0;i<=n;i++){
        if(i%m !== 0){
            notdivisible.push(i)
        
            
        }if(i%m==0){
             divisible.push(i)

        }
    }
    let b = notdivisible.reduce((acc,sum)=> acc+sum,0)
    let c = divisible.reduce((acc,sum)=>acc+sum,0)
   
    console.log(b)
    console.log(c)
    return b-c

  
};
console.log(differenceOfSums(5,1))