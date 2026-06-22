const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("REQUEST RECEIVED");
    res.send("HELLO WORLD");
});

app.listen(4000, () => {
    console.log("Server running on 4000");
});