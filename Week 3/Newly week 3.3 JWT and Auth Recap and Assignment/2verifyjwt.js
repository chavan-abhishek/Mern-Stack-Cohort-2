const jwt = require("jsonwebtoken");

const value = {
    name: "harkirat",
    accnumber: 123123
}

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NudW1iZXIiOjEyMzEyMywiaWF0IjoxNzE3MTc3MTUzfQ.PFULSkGWjQy36hJ1BZ-bOEIunMNdco3AEpTs5kB9pVk", "secjbjret");

// anyone can see the contents of the jwt given the original thing without the secret that was used to sign it
// but only theserver that signed it can verify it
// if you try to create another variation of it, the server will reject it
