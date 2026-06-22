const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello");
    }, 2000)
})

// async function fun() {
//     console.log("Async Start");
//         const response = await p1;
//         return response;
// }
// const ans = fun();
// console.log(ans);

async function fun() {
    console.log("Async Start");
        const response = await p1;
        return response;
}
// fun().then((data)=>console.log(data)).catch((err)=>console.log(err))

async function fun2 () {
    const data = await fun();
    console.log(data);
}
fun2();