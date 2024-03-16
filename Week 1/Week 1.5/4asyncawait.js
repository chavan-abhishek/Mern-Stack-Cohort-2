// normal syntax 

// function kiratsAsyncFunction () {
//     let p = new Promise(function(resolve) {
//         resolve("hii there");
//     });
//     return p;
// }

// function main() {
//     kiratsAsyncFunction().then(function(value){
//         console.log(value);
//     });
// }
// main();
// console.log("after main");

// async await syntax:

function kiratsAsyncFunction () {
    let p = new Promise(function(resolve) {
        resolve("hii there ");
    });
    return p;
}

async function main() {
    let value = await kiratsAsyncFunction()
    console.log(value);    
}
main();
console.log("after main");