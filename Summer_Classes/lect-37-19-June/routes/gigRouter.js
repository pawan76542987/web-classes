const express = require("express")
const route = express.Router();
const gigController = require("../controller/gigController");

route.get("/", gigController.orderTrack);

route.get("/assignOrder", gigController.assignOrder);

module.exports = route;