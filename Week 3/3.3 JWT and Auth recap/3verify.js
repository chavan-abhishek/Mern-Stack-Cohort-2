const jwt = require("jsonwebtoken");

const value = {
    name : "harkirat",
    accountnumber: 123123,
}

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50bnVtYmVyIjoxMjMxMjMsImlhdCI6MTcwOTA1MzU4M30.Eryv4EF6W4DvAXBQ6M72ndgSzDkTSmsv4oU_nspRtJo", "secret");