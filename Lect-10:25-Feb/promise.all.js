const p1 = Promise.resolve(30);

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p2")
    }, 100)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p3")
    }, 150)
})
const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p4")
    }, 130)
})

const results = Promise.all([p1 ,p2, p3, p4]);
results.then((anushka)=>console.log(anushka));