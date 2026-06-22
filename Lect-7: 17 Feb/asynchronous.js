let x = new Date();
// console.log(x);
console.log(x.getSeconds());
console.log(x.getDay());
console.log(x.getMonth());
console.log(x.getTime());
while(x.getTime()+1000) {
    console.log("HI");
}