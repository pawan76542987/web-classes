const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;
//inbuild middleware
app.use(express.json())

//custom middleware
app.use((req, res, next) => {
    console.log("Custom middleware");
    next()   // it will pass the "request" to the next middleware
})

app.get("/user/all", (req, res) => {
    res.json({users:["user 1", "user 2"]})
})

app.listen(PORT, ()=>{
    console.log("Server is started at" , `http://localhost:${PORT}`);
})