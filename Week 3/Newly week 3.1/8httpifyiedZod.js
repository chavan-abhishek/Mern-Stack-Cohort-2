// successful zod

const express = require("express");
const app = express();
const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    return(schema.safeParse(obj));
    
}

app.use(express.json());

app.post("/", function(req, res) {
    const response = validateInput(req.body);
    if(!response.success) {
        res.status(400).json({
            msg: "wrong inputs"
        })
        return;
    } else {
        res.json({
            msg: "success"
        })
    }
})

app.use(function(err, req, res, next) {
    res.send({
        msg: " something went wrong"
    })
})

app.listen(3000);