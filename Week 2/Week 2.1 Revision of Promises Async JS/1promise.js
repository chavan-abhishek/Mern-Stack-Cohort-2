const fs = require("fs");

function kiratFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
           return resolve(data);
        })
    })
}

function onDone(data) {
    console.log(data);
}


kiratFile().then(onDone);
