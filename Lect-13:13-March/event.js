// console.log(document);
// const h1 = document.getElementById("heading")
// h1.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target)
// })

const h1 = document.getElementById("heading")
const html = document.getElementsByTagName("html")    // returns empty nodeList as there is no elem with `html` name
const body = document.getElementsByTagName("body")[0];
body.style.height = "100vh";
body.addEventListener("dblclick", (e) => {
    console.log(e.clientX,e.clientY);
});