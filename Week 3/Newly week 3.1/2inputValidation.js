const express = require("express");
const app = express();

app.use(express.json());

app.post("/", function(req, res) {
    // here the expected input is array
    const kidneys = req.body.kidneys;
    if(!kidneys) {
        res,json({
            msg: "wrong inputs"
        })
    }
    const kidneyLength = kidneys.length;

    res.send("you have "+ kidneyLength + " kidneys");

})

app.listen(3000);