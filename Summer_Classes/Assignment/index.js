const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/Keep")
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log(err);
})

const noteSchema = new mongoose.Schema ({
    title : {
        type : String,
        minlength : 3,
        required : true
    },
    description : {
        type : String,
        minlength : 4,
        required : true
    }
})

const Note = mongoose.model( "Notes", noteSchema, "Notes")

app.get("/", async (req, res) => {
    console.log("GET route hit");

    let notes = await Note.find();
    console.log(notes);

    res.render("form", { notes });
});

app.post("/insertdata", async (req, res) =>{

    let note = await Note.create(req.body);
    console.log(note);
    res.redirect("/");
})

app.listen(4000, () => {
    console.log("Server is running at 3000");
})