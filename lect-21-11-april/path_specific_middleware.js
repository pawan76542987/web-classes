const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;
//inbuilt middleware
app.use(express.json())

//path-specific middleware
//it will only run if the req path starts with "/user"
app.use("/user", (req, res, next) => {
    console.log("User middleware");
    next();
})

app.use("/product", (req, res, next) => {
    console.log("Product middleware");
    next();
})

app.get("/user/all", (req, res) => {
    res.json({users:["user 1", "user 2"]})
})

app.listen(PORT, ()=>{
    console.log("Server is started at" , `http://localhost:${PORT}`);
})