const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;
//inbuilt middleware
app.use(express.json())

//Api-middleware
const routerlevel = (req, res, next) => {
    console.log("Router level middleware");
    next()
}
app.get("/info", routerlevel, (req, res) => {
    console.log("app report");
    res.send("Report generated")
})

app.listen(PORT, ()=>{
    console.log("Server is started at" , `http://localhost:${PORT}`);
})