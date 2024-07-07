const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/hello", function(req, res) {
    res.send({
        msg: "hello world"
    })
})

app.post("/conversation", function(req, res){
    
    console.log(req.body);
    res.send({
        msg: "2 + 2 = 4" 
    })
})

app.listen(3001);