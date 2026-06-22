const fs = require('fs');
// console.log(fs);

//Sync -> Blocking operations
// let result = fs.readFileSync('file.txt', "utf8");
// console.log(result);

//Async -> Non - blocking operations
fs.readFile("file.txt", "utf8", (error, data) => {
    if (error) {
        throw error;
    } else {
        console.log(data);
    }
})
console.log("Hello");