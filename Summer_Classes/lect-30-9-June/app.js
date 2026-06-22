const express = require("express");
const app = express();
const port = 3000;
const data = require("./data.json")
const fs = require("fs");

app.use(express.urlencoded({extended : true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Home page route...");
})
app.post("/register", (req, res) => {
    console.log(req.body);
    fs.appendFileSync("data.json", JSON.stringify(req.body) + "\n" , "utf-8");
    res.send("Registration completed...");
})
app.get("/data", (req, res) => {
    res.json(data);
})
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})