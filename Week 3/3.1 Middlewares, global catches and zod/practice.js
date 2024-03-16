const express = require("express");

const app = express();

app.use(express.json());

app.get("/health-checkup", function(req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "harkirat" && password != "pass") {
        res.status(400).json({
           msg: "user does not exist",
        });
        return;
    }

    if(kidneyId !=1 && kidneyId != 2) {
        res.status(411).json({
            msg:"wrong inputs",
        });
        return;

        // do something withkidney here
    }

    res.send("your heart is healthy");

});

app.listen(3000);