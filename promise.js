async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(millis)

        },millis)
    })
    
}

sleep(3000)
.then((res)=>console.log(res))

