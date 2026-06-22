const express = require("express") // import express from node_module
const app = express()
const PORT = 4000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Everything went well",
        data: {name: "Anushka"}
    })
})
app.get("/info", (req, res) => {
    try {
        //... my work
        let num = Math.random()*10
        if (num < 5) {
            throw new Error("Number is less than 5 so I generated error") //creating self error
        }

        res.status(200).json({message: "Work done", data: {number: num}})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message})
    }
})

app.listen(PORT, ()=>{
    console.log("Server is started at" , `http://localhost:${PORT}`);
})