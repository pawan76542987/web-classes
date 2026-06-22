const gigModel = require("../models/gigModel.js");

const gigController = {
    orderTrack: (req, res)=> {
        // res.send("Order reaching in 5 min");
        res.render("gigHome.ejs");
    },
    assignOrder: (req, res) => {
        res.send("An order has been assigned.");
    }
}
module.exports = gigController;