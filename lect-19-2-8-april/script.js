const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;

app.get("/search", (req, res) => {
    const query = req.query;
    console.log(query);
    res.send("Working on query...");
})

app.listen(PORT, ()=>{
    console.log("Server is started at" , `http://localhost:${PORT}`);
})