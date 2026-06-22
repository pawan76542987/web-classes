const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;

//middleware

// app.use("/", (req, res)=> {
//     console.log("middleware");
//     // req will get stuck as we have not it to next function/middleware
// });

// this will run for every api req
app.use((res, req, next)=>{
    console.log("middleware");
    next(); // it passes the req to middleware
})

app.get("/", (req, res) => {
    console.log(req);
    console.log("Hello");
    res.send("Hello, the server is live and the method is get!")
})
app.get("/second", (req, res) => {
    // console.log("Hello");
    res.send("Hello the server is live for the method get!")
})

app.post("/", (req, res) => {
    console.log(req);
    res.send("Hello, the server is live and the method is post!")
})

app.put("/", (req, res) => {
    console.log(req);
    res.send("Hello, the server is live and the method is put!")
})

app.path("/", (req, res) => {
    console.log(req);
    res.send("Hello, the server is live and the method is patch!")
})

app.delete("/", (req, res) => {
    console.log(req);
    res.send("Hello, the server is live and the method is delete!")
})

// app.listen -> starts server
// PORT -> mapping of different processes at different locations

app.listen(PORT, ()=> {
    console.log("Server is started at" , `http://localhost:${PORT}`);
})