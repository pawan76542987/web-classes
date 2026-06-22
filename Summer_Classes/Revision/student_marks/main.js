let data = require("./app.js");

const total = data.totalMarks(20, 40, 30);
const average = data.averageMarks(total);
const result = data.isPassed(average);

console.log(total);
console.log(average);
console.log(result);