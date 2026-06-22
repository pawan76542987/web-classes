const express = require("express")
const app = express();

app.get( "/", (req, res) => {
    res.json ({
        "name" : "Anushka Singh",
        "college" : "Mirai School"
    })
})

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("data found is db");
})

app.get("/result/:year/:roll", (req, res) => {
    console.log(req.params);
    console.log(req.params.roll);
//     res.send("Fail");
    res.send(`U r have failed ${req.params.roll}`);
})

app.listen(3000, () => {
    console.log("Server is running at 3000");
})