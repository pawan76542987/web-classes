const http = require("http");
// console.log(http);

let server = http.createServer((req, res) => {
    console.log("Server is running...");
    res.end("Insta home page");
});
server.listen(3000);