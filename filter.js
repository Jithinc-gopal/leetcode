var filter = function(arr, fn) {
    let result = []
    for(i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i])
        }
       
    }
    return result
   
   
};

console.log(filter([0,10,20,30],(n,i)=>n>10))