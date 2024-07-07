const express =require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
    username: "harkirat@gmail.com",
    password: "123",
    name : "harkirat singh",
    },
    {
       username: "abhishek@gmail.com",
       password: "123456",
       name: "abhishek chavan", 
    },
    {
        username: "prasad@gmail.com",
        password: "1234",
        name: "prasad gaikwad",
    },
];

function userExists (username, password) {
    // write logic to return true or false if this user exists
    // in ALL Users array
    // try to use the find funciton in js
    let userExists = false;
    for(let i = 0; i < ALL_USERS.length; i ++) {
        if(ALL_USERS[i].username ==username && ALL_USERS[i].password == password) {
            userExists  = true;
        }
    }
    return userExists;
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "username doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    } catch (err) {
    //return a list of users other than this username
    return res.status(403).json({
        msg : "invalid token",
    });
        
    }
});

app.listen(3001);