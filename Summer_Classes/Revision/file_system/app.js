const fs = require("fs");

fs.writeFileSync(`${__dirname}/data.txt`,
    "Name : Anushka Singh\nCourse : B. Tech.\nAge : 21"
);
console.log("Data written Successfully.");

// const read = fs.readFileSync(`${__dirname}/data.txt`, "utf-8");
// console.log(read);

// fs.appendFileSync(`${__dirname}/data.txt`, "\nBranch : CSE - AI/ML");

// const read = fs.readFileSync(`${__dirname}/data.txt`, "utf-8");
// console.log(read);

// fs.unlinkSync(`${__dirname}/data.txt`);
