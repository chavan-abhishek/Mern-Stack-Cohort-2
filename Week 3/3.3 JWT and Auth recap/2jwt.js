const jwt = require("jsonwebtoken");

const contents = {
    name : "harkirat",
    accountnumber: 123123,
    iat : 1709053583
}

const newtoken = jwt.sign(contents, "conor");
console.log(newtoken);