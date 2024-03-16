const fs = require("fs");

function kiratfile() {
    return new Promise(function (resolve) {
        fs.readFile("practice.txt", "utf-8", function(err, data){
            return resolve(data);
        });
    })
}

function onDone(data) {
    console.log(data);
}

kiratfile().then(onDone);