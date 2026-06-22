const p1 = Promise.resolve(30);

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("p2")
    }, 100)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p3")
    }, 150)
})
const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("p4")
    }, 130)
})

const result2 = Promise.any([p1 ,p2, p3, p4]);
result2.then((response)=>console.log(response));