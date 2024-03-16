// input validation and global catches

const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;

    if(!kidneys) {
        res.json({
            msg: "wrong inputs"      // input validation
        })
    } else {
        const kidneysLength = kidneys.length;

    res.send("your kidneys length is " + kidneys.length);
    }
});

// global catch: 
app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry something went wrong with our server"
    })
});


app.listen(3000);