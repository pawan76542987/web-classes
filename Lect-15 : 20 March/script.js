localStorage.setItem("name", "anushka")
console.log(localStorage.getItem.apply("name"))
localStorage.removeItem("todos")

let myObj = {
    name : "Anushka",
    num : 7
}

let arr = [11, 21, 31, 41, 51, 61];
let strArr = JSON.stringify(arr)
console.log(arr);
console.log(strArr);

let strObj = JSON.stringify(myObj)
console.log(myObj);
console.log(strObj);
localStorage.setItem("myObj", strObj);
localStorage.setItem("arr", strArr);
// localStorage.setItem("myObj");

let ObjData = localStorage.getItem("myObj")
let realObj = JSON.parse(ObjData)
console.log('object -> ', realObj);