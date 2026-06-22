// let arr = [23, 1, 45, 67];
// let brr = [24, 2, 46, 68];
// let ans = [...arr,...brr,3000,4000]; // spread
// console.log(ans);


function display(...arr) {
    console.log(arr);
}
display(23, 4, 5, 6, 1, 100);


let arr = [23, 454, 56, 34, 100];
let element = 56;
let idx = arr.indexOf(element);
arr.splice(idx, 1);
console.log(arr);