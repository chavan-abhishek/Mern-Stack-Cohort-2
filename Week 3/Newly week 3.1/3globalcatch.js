// if any exception is raised or any problem is faced in accessing the route by the end user 
// or the server is about to crash 
//then the middleware is defined at the ned of all the routes
// which is global catch
// it does clean things in sending out appropriate error messages

const express = require("express");
const app = express();

app.use(express.json());

app.post("/", function(req, res) {
    // here input is expected as an array
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + "kidneys");
})

app.use(function(err, req, res, next) {
    res.status(500).json({
        msg: "Something went wrong"
    })
})

app.listen(3002);