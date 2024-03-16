const express = require("express");

const app = express();

let numberOfRequets = 0;

function calculateRequests(req, res, next) {
    numberOfRequests ++;
    console.log(numberOfRequests);
    next();
}

app.get("/health-checkup", calculateRequests, function(req, res) {

});

app.get("health-checkup2", calculateRequests, function (req, res) {

});

app.listen(3000);