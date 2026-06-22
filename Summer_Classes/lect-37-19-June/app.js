const express = require("express");
const app = express();
const port = 3000;
const log = require("./middleware/log.js")
const gold = require("./middleware/gold.js")
const connectdb = require("./config/db.js")
const route = require("./routes/gigRouter.js")
const gigRouter = require("./routes/gigRouter.js");

connectdb();

app.use(express.json);
app.use(express.urlencoded({extended : true}));
app.use(log);
app.use("/gold", gold);
app.use("/", gigRouter)

app.listen(port, () => {
    console.log("Server is running at port 3000");
})