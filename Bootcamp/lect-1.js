// function counter() {
//     let count = 0;
//     return function () {
//         count = count + 5;
//         console.log(count);
//     }
// }
// let anu = counter();
// anu();
// anu();

// let riya = counter();
// riya();
// riya();

// function display() {
//     let a = 90;
//     let b = 10;
//     let c = 15;

//     let sum = () => {
//         a++;
//         b++;
//         // console.log(a+b);
//         return a+b+c;
//     } 
//     return sum;
// }
// let ans = display();
// console.log(ans);

// let arr = [23, 1, 2, 6, 34, 23, 4];
// let ans = arr.reduce((acc, ele, idx, arr) => {
//     return acc > ele ? acc : ele;
// })
// console.log(ans);

// let arr = [23, 1, 2, 6, 34, 13, 4];
// arr.sort((a, b) => b-a)
//     console.log(arr);

function newCart() {
    let cart = [];
    return {
        "addtocart": function(item) {
            cart.push(item);
        },
        "clearcart": function() {
            cart = []
        },
        getCart: function () {
            return cart;
        }
    }
}
let cart = newCart();
cart.addtocart("Mobile");
cart.addtocart("Sillhaotes");
cart.addtocart("Dress");

console.log(cart.getCart());
cart.addtocart("Ipad");
console.log(cart.getCart());


// function display (...arr) {
//     console.log("Hi");
//     console.log(arr);
//     let anushka = [200, 100, ...arr];
// }
// display(23, 12, 45, 23, 2, 1, 2, 78);

// let fname = "Anushka Singh";
// let age = 21;
// console.log(`My name is ${fname} and age is ${age}`);