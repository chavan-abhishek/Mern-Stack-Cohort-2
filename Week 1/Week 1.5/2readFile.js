const fs = require("fs");
// file system module

fs.readFile("practice.txt", "utf-8", function(err, data){
    console.log(data);
});

console.log("hii there");
let a = 0;
for (let i = 0; i < 10000000; i ++) {
    a++;
}

console.log("hii there 2");