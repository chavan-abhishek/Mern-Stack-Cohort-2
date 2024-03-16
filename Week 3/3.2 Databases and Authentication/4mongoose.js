const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://abhismongodb:abhismern%407781@cluster0.tufl2ah.mongodb.net/userappnew?retryWrites=true&w=majority",
);

const users = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const extinguisher = await user.findOne({ email: username });

  if (extinguisher) {
    res.status(400).send("Username already exists");
  }
  const user = new users({
    name: "Abhishek Chavan",
    email: "abhi@gmail.com",
    password: "123456",
  });
  user.save();
  res.json({
    msg: "User created successfully",
  });
});
