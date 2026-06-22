const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
let i = 0;

app.use("/public", express.static("public"));
app.use("/assests", express.static("public"));

app.use((req, res, next) => {
    // i++;
    // const timestamp = new Date();
    // // console.log(timestamp);
    // const log = `Client data = ${i}, ${req.url} ${req.ip} ${timestamp}, ${req.ip} \n`;
    // fs.appendFileSync("log.txt", log, "utf-8");
    next();
})

app.get("/", (req, res) => {
    res.send("Home page...");
})

app.post("/register", (req, res) => {
    res.send("User registration completed.")
})

app.listen(port,() => {
    console.log(`Server is rffunning at port ${port}`);
})