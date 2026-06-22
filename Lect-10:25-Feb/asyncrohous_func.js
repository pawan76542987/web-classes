const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello");
    }, 2000)
})
console.log("Start");
async function fun() {
    console.log("Async Start");
        const response = await p1;
        console.log(p1);
        console.log("Async End")
    }
    let data = await 
fun();
console.log("End");