// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const express = require("express");
const app = express();

let requestcount = 0;
app.use(function (req, res, next) {
    requestcount = requestcount + 1;
    next();
})

app.get("/user", function(req, res) {
    res.status(200).json({
        name: "john"
    })
})

app.post("/user", function(req, res) {
    res.status(200).json({
        msg: "created a dummy user"
    })
})

app.get("/requestcount",function(req, res) {
    res.json({ requestcount})
})

app.listen(3000);