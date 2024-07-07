const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhishek4chavan:abhismern@cluster0.ntrffan.mongodb.net/lewisdb"); // lewisdb is the name of the db

const endUser = mongoose.model('football',{ // here football is name of the folder/collection in the database and f is always lowercase
    name: String,
    email: String,
    password: String
})

const recentEndUser = new endUser({
    name: "Lewis Hamilton is the greatest f1 driver",
    email: "lewis.com",
    password: "123456"
});

recentEndUser.save();