// function fact (n) {
//     if (n < 1) {
//         return 1;
//     }
//     return n * fact(n - 1);
// }
// function memo(fn) {
//     let cache = {};
//     return function (n){
//         if (cache[n]) {
//             return cache[n];   //direct return result from cache
//         }
//         else {
//             cache[n] = fn (n);   //calculate and store in cachr then return 
//             return cache[n];
//         }
//     }
// }
// let factorial = memo(fact);
// let ans = factorial(4);
// console.log(factorial(4));

function fibo(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}
function memo(fn) {
    let cache = {};
    return function (n){
        if (cache[n]) {
            return cache[n];
        }
        else {
            cache[n] = fn(n);
            return cache[n];
        }
    }
}
let fibonnaci = memo(fibo);
let ans = fibonnaci(1);
console.log(fibonnaci(1));