// Callback function:  passing a function as an argument

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);

}

function displayResult(data) {
    console.log("the result of the sum is: " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is: " + data);
}

// YOu are only allowed to call one function after this
// How will you displayResult of the sum
const ans = sum(1, 2, displayResult);