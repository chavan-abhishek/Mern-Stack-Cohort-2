function arithmetic(a, b, type) {
    if(type == "sum") {
        return  a + b;
    } 
    if (type== "minus") {
        return a - b;
    }
}

const ans = arithmetic(9, 7, "sum");
console.log(ans);
