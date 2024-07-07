function square(n) {
    return n*n;
} 

function Cube(n) {
    return n*n*n;
}

function quad(n) {
    return n*n*n*n;
}

function someOfSomething(a, b, fn) {
    let first = fn(a);
    let second = fn(b);
    return first + second;
}

let ans = someOfSomething(1, 2, Cube);
console.log(ans);
