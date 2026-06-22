const fs = require("fs");

fs.writeFile("./Node JS/Lect-16 : 23 March/first.txt", "My first write operation", "utf-8", (err, data) => {
    console.log(err);
})

fs.readFile("./Node JS/Lect-16 : 23 March/first.txt", "utf-8",(err, data) => {
    console.log(data);
})

//synchronous write
console.log("Sync Operation");
fs.writeFileSync("./Node JS/Lect-16 : 23 March/first.txt", "My third write operation", "utf-8");

// synchronous read
const data = fs.readFileSync("./Node JS/Lect-16 : 23 March/first.txt");
console.log(data);

// to add data in the file 
fs.appendFile("./Node JS/Lect-16 : 23 March/first.txt", "\nThis is append text", "utf-8", (err, data) => {
    console.log(err);
})

// to delete the file after use
// fs.unlink("./Node JS/Lect-16 : 23 March/first.txt", (err)=> {
//     console.log(err);
// })

fs.mkdir("Node JS/Lect-16 : 23 March/mydir", (err) => {
    console.log(err);
})