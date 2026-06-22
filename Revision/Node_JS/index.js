const fs = require("fs");

// fs.writeFile("./myFile.txt", "Hello, my name is Anushka.", "utf-8", (err, data) => {
//     console.log(err);
// })
fs.readFile("./myFile.txt", "utf-8", (err, data) => {
    console.log(err);
    console.log(data);
})