const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;

// req (type/method, url/path)
// home route -> "/"
// req -> client info, always the first parameter to be passed, name can be user given
// res -> sending response, name can be user given

app.get("/", (req, res) => {
    console.log(req);
    console.log("Hello");
    res.send("Hello, the server is live and the method is get!")
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