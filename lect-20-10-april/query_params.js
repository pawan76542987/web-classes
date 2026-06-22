const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;

//query params
app.get("/search", (req, res)=> {
    const query = req.query;
    console.log(query);
    res.send("Query received", query);
})

app.get("/user/:id/data", (req, res) => {
    const params = req.params;
    console.log(params);
    res.send("Params received", params);
})

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.post("/user/create", (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({message : "Body received", data: body});
    // res.send("Body received", body);
})

// start server
app.listen(PORT, ()=>{
    console.log("Server is started at" , `http://localhost:${PORT}`);
})