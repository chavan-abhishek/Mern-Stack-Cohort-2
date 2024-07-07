const express = require("express");
const app = express();

app.use(express.json());
app.use(kidneyMiddleware);

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "harkirat" || password != "pass") {
        res.status(400).json({ msg: "wrong inputs"});
    }
    else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ msg:"wrong inputs"});
    }
    else {
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res) {
    res.json({
        msg: "your kidney is fine"
    })
})

app.listen(3001);