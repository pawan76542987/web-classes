const log = (req, res, next) => {
    console.log("Global Middleware 1");
    next();
}
module.exports = log;