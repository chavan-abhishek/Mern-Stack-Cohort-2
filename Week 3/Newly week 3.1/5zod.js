// input is an object
//  {
//      email: string => mail
//      password: atleast 8 characters
//      country: "IN", "US"
//  }


// practice code 
const express = require("express");
const app = express();
const zod = require("zod");

const scehma = zod.object({
    email: zod.string.email(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US"))
})

