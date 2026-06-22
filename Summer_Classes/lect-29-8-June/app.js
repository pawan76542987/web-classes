const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.get("/", (req, res) => {
    res.send("Home page...");
})

app.post("/register", (req, res) => {
    console.log(req.body);
    fs.appendFileSync("data.json", JSON.stringify(req.body) + "\n", "utf-8");
    res.send("User registration completed.");
})

app.listen(port,() => {
    console.log(`Server is running at port ${port}`);
})