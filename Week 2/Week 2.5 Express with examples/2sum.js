const express = require("express");
const app = express();

app.use(express.json());

function calculateSum(a, b) {
    let ans = a + b;
    return ans;
}

app.get("/sum", function(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const ans = calculateSum(a, b);
    res.send("your answer is: "+ans.toString());
})

app.listen(3000);