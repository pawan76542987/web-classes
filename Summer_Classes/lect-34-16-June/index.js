const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded( {extended : true}));

app.set("view engine", "ejs");

// mongoose.connect("mongodb://127.0.0.1:27017/Hi-Tech")
mongoose.connect("mongodb+srv://anushkageetasingh2005:Anushka1234@cluster0.n2b3vzf.mongodb.net/?appName=Cluster0/HiTech")
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log(err);
});

const facultySchema = new mongoose.Schema({
    // name : "String",
    // age : Number,
    // course: String,
    // salary: Number
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    age: {
        type: Number,
        min: 18,
        required:false
    },
    email : {
        type : String,
        minlength : 4,
        required : true
    }
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

app.get("/insertdata", (req, res) => {
    res.render("form.ejs");
})

app.post("/createdata",async (req, res) => {
    let obj = {
        name : "Devesh Singh",
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