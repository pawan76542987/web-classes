// function add(a, b, c) {
//     return a+b+c;
// }
// add(2)(3)(4)();

// function sum(a) {
//     return function(b) {
//         return a+b;
//     }
// }
// console.log(sum(2)(4));
// let ans = sum(4);
// console.log(ans);
// let res = sum(2);
// console.log(res);

// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(3)(4));       // () final result ke liye calling


let add = (num)=> {
    if(!num) return 0;
    else {
        return function helper(v) {
            if (!v) return num;
            num += v;
            return helper;
        }
    }
}
add(1)(2)();
console.log(add(1)(2)());