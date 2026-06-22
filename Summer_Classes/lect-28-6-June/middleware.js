const express = require("express");
const app = express();

app.use((req, res, next) => {
    let out = `url=${req.url} and address is ${req.ip}`;
    console.log(out);
    next();
})

app.use((req, res, next)=> {
    console.log("Middleware 1, reponsible for mobile auth.");
    //athentication
    let auth = true;
    if (!auth) {
        res.send("Auth failed! TRY AGAIN.");
    } else {
        next();
    }
})
app.use((req, res, next)=> {
    console.log("Middleware 2, reponsible for e-mail auth.");
    //athentication
    let auth = false;
    if (!auth) {
        res.send(" E-mail auth failed! TRY AGAIN.");
    } else {
        next();
    }
})
app.get("/", (req, res) =>{
    res.send("Home page...");
})

app.post("/details", (req, res) => {
    console.log("Route of details...");
    console.log(req.body);

    res.send("Data saved.");
})

app.get("/about", (req, res) =>{
    res.send("Home page...");
})

app.use((req, res, next) => {
    res.send("404 not found")
})

app.listen(3000, () => {
    console.log("Server is running at 3000");
})