const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/Hi-Tech")
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log(err);
});

const facultySchema = new mongoose.Schema({
    name : "String",
    age : Number,
    course: String,
    salary: Number
});

// Model
const Faculty = mongoose.model("Faculty_Info", facultySchema, "Faculty_Info");

app.get("/", async (req, res) => {

    res.render("home.ejs");
})

app.get("/test", async (req, res) => {
    // let data = await Student.findOne({name : "Anushka"});
    // let data = await Student.updateMany({name:"Anushka"},{name:"Anu"})
    // let data = await Student.updateOne({name:"Anushka"},{name:"AS"})
    let data = await Faculty.findIdAndDelete("6a3129b99f59cb01bd57e07c")
    // let data = await Faculty.updateOne({name:"Anushka"},{name:"AS"})
    console.log(data);
    res.send("Bye...");
})

app.listen(3000, () => {
    console.log("Server is running at port 3000.");
})