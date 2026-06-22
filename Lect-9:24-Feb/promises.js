const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let num = Math.random()*10;
        if (num < 5) {
        resolve(`This promise is resolved ${num}`)
        } else {
            reject(`This promise is rejected ${num}`)
        }
    }, 2000)
})
console.log(myPromise);
myPromise.then((response)=>{
    console.log(response);
}).catch(err=>{
    console.log(err);
})