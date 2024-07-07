// LEARNING REQ.QUERY.MESSAGE

const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", function(req, res) {
    res.send({
        msg: "hello world"
    })
})

app.post("/conversation", function(req, res) {
    const message = req.query.message;
    console.log(message);
    res.json({
        msg: "done using query parameter"
    })
})

app.listen(3003);
