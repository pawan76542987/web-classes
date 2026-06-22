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

    let allFaculty = await Faculty.find({    // very imp 
        age : {$gt: 30}
    });
    console.log(allFaculty);

    // res.json(allFaculty);
    // let obj = {
    //     "name" : "Anushka",
    //     age : 21
    // };
    // res.send("Home page...");
    res.render("faculty", {
        allFaculty: allFaculty
    });
})

app.listen(3000, () => {
    console.log("Server is running at port 3000.");
})