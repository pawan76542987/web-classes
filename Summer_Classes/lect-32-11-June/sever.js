const express = require("express")
const mongoose = require("mongoose");
const app = express();
// console.log(mongoose);

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log(err));

app.get( "/", (req, res) => {
    res.json ({
        "name" : "Anushka Singh",
        "college" : "Mirai School"
    })
})

app.listen(3000, () => {
    console.log("Server is running at 3000");
})