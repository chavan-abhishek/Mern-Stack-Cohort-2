const express = require("express");

const app = express();


app.get("/helloworld", function(req, res) {
    res.json({
        name: "abhishek",
        age: 19
    })
})

app.post("/conversation", function(req, res) {
    console.log(req.headers["authorization"]);   // this is how we get authorization headers
    res.send({
        msg: "2 + 2 = 4"
    })
})

app.listen(3000);
