// given an array, give me back a new array in which every value is multiplied by 2
// input[1,2,3,4,5]
// output [2,4, 6, 8, 10]

// normal approach
// const input = [1,2,3,4,5];

// const newArray = [];

// for(let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2);
// }

// console.log(newArray);



// using map
// const input = [1, 2, 3, 4, 5];

// function transform(i) {
//     return i*2;
// }

// const ans = input.map(transform);
// console.log(ans);



//other syntax

const input = [1,2 ,3, 4, 5];

const ans = input.map(function(i) {
    return i * 2;
});

console.log(ans);