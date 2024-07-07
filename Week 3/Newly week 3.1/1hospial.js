const express = require("express");
const app = express();



app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    
    if(username != "harkirat" || password != "pass") {
        res.status(400).json({
            msg: "Something's wrong with your inputs"
        })
        return
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "Something is wrong with your inputs"
        })
        return
    }

    res.json({
        msg: "your kidney is fine"
    })
})

app.listen(3001);

// middleware photo
//next 
// slides
// app.use is used for send body inpost requests
