// callback function    

function square(n) {
    return n*n;
}

function cube(n){
    return n*n*n;
}

function quad(n) {
    return n*n*n*n;
}

function sumOfSomething(a, b, fn) {
    let powerof1 = fn(a);
    let powerof2 = fn(b);
    return powerof1 + powerof2;
}

let ans = sumOfSomething(1, 2, square);
console.log(ans);