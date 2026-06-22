const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Home Page
app.get("/", (req, res) => {
    res.render("home");
});


// Register Page
app.get("/register", (req, res) => {
    res.render("register");
});


// Login Page
app.get("/login", (req, res) => {
    res.render("login");
});


// Register Form Submit
app.post("/register", (req, res) => {

    console.log(req.body);

    const { name, email } = req.body;

    res.render("dashboard", {
        user: {
            name,
            email
        }
    });
});


// Login Form Submit
app.post("/login", (req, res) => {

    console.log(req.body);

    const { email } = req.body;

    res.render("dashboard", {
        user: {
            name: "Existing User",
            email
        }
    });
});


// req.query Example
app.get("/search", (req, res) => {

    console.log(req.query);

    res.send(`Searching for: ${req.query.keyword}`);
});


// req.params Example
app.get("/user/:id", (req, res) => {

    console.log(req.params);

    res.send(`User ID = ${req.params.id}`);
});


app.listen(3000, () => {
    console.log("Server Running...");
});