const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded( {extended : true}));

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/Hi-Tech")
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log(err);
});

const facultySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    salary: {
        type: Number,
        min: 18,
        required:false
    },
    role : {
        type : String,
        minlength : 7,
        required : true
    }
});

// Model
const Faculty = mongoose.model("Faculty_Info", facultySchema, "Faculty_Info");

app.get("/", async (req, res) => {

    let allFaculty = await Faculty.find();
    console.log(allFaculty);
    res.render("faculty", {
        allFaculty: allFaculty
    });
})

app.get("/insertdata", (req, res) => {
    res.render("form.ejs");
})

app.get("/edit/user:id", async (res, req) => {
    let data= await Faculty.findById(req.params.userid);
    req.render("edit.ejs", {data});
})

app.post("/update/:userid", async (req, res) =>{
    let data = await Faculty.findByIdAndUpdate(req.params.userid, req.body, {new:true})
})

app.post("/createdata",async (req, res) => {
    let obj = {
        name : "Devesh Singh",
        "salary" : 200000,
        "role" : "Mentor"
    };
    req.body.ip = req.ip;
    console.log(req.body);
    // let data = await Faculty.create(obj);
    let data = await Faculty.create(req.body);
    console.log(data);

    res.send("Data saved.");
})

app.listen(3000, () => {
    console.log("Server is running at port 3000.");
})