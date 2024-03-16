const express = require("express");
const app = express();

setInterval(() => {
    numberofRequestsForUser = {};
}, 1000);

app.use(function (req, res, next) {
    const userId = req.headers["user-id"];

    if(numberofRequestsForUser[userId]) {
        numberofRequestsForUser[userId] = numberofRequestsForUser[userId] +1;
        if(numberofRequestsForUser[userId] > 5) {
            res.status(404).send("no entry");
        }
        else{
            next();
        }
    }
    else {
        numberofRequestsForUser[userId] = 1;
        next();
    }
})

app.get("/user", function(req, res) {
    res.status(200).json({ name: "john"});
})

app.post("/users", function(req, res) {
    res.status(200).json({msg: "created dummy user"});
})

module.exports = app;