const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", function(req, res) {
    res.send({
        msg: "hello world"
    })
})
// LEARNING REQ.BODY.MESSAGE
app.post("/conversation", function(req, res) {
    const message = req.body.message;
    console.log(message);
    res.json({
        output: "2 + 2 is 4"
    })
})

app.listen(3002);
