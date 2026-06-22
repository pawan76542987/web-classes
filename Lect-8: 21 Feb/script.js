// console.log("Start");

// function wait(time) {     //normal function jo synchronously run karega.
// 	const now = new Date().getTime();
// 	while((new Date().getTime()) <= now + time){}
// 		console.log("Time ended");
// }
// wait(5000);

// setTimeout(()=> {
// 	console.log("Hello");
// }, 2000)

// const id = setInterval(()=>{
// 	console.log("Interval");
// }, 1000);

// setTimeout(()=>{
// 	clearInterval(id)
// }, 6000)
// console.log("End");



const id = setInterval(()=>{
	console.log("Interval");
}, 2000);
setTimeout(()=>{
	clearInterval(id)
}, 6000);         // web API ne 6s ka timer on kr diya hai