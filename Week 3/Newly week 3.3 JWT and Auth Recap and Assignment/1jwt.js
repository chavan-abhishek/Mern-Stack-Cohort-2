const jwt = require("jsonwebtoken");

// decode, verify, generate

const value = {
    name: "harkirat",
    accnumber: 123123
}

// creating a jwt from this
const token = jwt.sign(value, "secret");
// this token has been generated by this secret, and hence this token can only be verified using this secret
console.log(token);