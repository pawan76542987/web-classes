let express = require("express");
const { error } = require("node:console");
// console.log(typeof(express));

let app = express();
let port = 3000;
// console.log(app);
// console.log(typeof(app));

app.get(("/"), (req, res) => {
    console.log("A user is on home page...");
    res.send("Data sent successfully.");
})

app.all(("/about"), (req, res) => {
    console.log("U r on a wrong page!");
    res.send("This page does not exist.");
})

app.listen(3000, (error) => {
    console.log(`App is running on ${port}`);
});