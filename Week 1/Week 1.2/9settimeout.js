// setTimeout function

function greet() {
    console.log("hello world");
}

function greetAlien() {
    console.log("hello Alien");
}

// setTimeout(greetAlien, 2 * 1000);
setInterval(greetAlien, 1000);