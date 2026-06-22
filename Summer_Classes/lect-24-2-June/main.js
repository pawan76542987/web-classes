console.log("Hi, running");

// let featureX = require("./Auth.js");
let {login, Auth} = require("./Auth.js") 

// console.log(featureX);
console.log({login, Auth});

// featureX.Auth()
({login, Auth}).Auth()