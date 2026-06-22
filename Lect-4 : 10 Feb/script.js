// let name = "Anushka";
// let age = 20;
// let college = "Mirai"; 
// let obj = {
//     name,
//     age, 
//     college
// };
// console.log(obj);

// let obj = {
//     name: "Anushka",
//     age: 20,
//     college: "Mirai"
// };
// let {name, age, college:school, country = "India"} = obj;
// console.log(school);

function display() {
    let name = "Anushka";
    let age = 20;
    // let anushka = {
    //     name,
    //     age
    // }
    // return anushka;
    return {
        name, age
    }
}
let ans = display();
console.log(ans);