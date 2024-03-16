const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    } else {
        res.json({
            msg: "You are not of appropriate age"
        })
    }
}

// if the middleware is used in all the routes, then app.use only applies to the middlewares introduced below it
app.use(isOldEnoughMiddleware);

app.get("/ride1", function (req, res) {
    res.json({
        msg: "You have ridden the amusement ride"
    })
})

app.get("/ride2", function (req, res) {
    res.json({
        msg: "You have ridden the amusement ride"
    })
})


app.listen(3000);