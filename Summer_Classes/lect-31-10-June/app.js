const express = require("express");
const app = express();

app.set("view engine", "ejs");

let students = {
    name : "Anushka",
    roll : 16, 
    age : 21
};
let color = "red";
let flag = 5;
app.get("/services", (req, res) => {
    // res.send("Home Page");
    // res.render("user", {students, color});
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);

    res.send("Services Page...");
})

app.listen(3000, () => {
    console.log("Server is running at 3000");
})