// filter 
// given an input array, give me back all the even values from it


// normal approach
// const input = [1, 2, 3, 4, 5];
// const newArray = [];
// for(let i = 0; i < input.length; i ++) {
//     if(input[i] % 2 == 0) {
//         newArray.push(input[i]);
//     }
// }
// console.log(newArray);



//filter
// const arr = [1, 2, 3, 4, 5];

// function filterLogic(n) {
//     if(n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const ans = arr.filter(filterLogic);
// console.log(ans);

const arr = [1, 2, 3, 4, 5];

const ans = arr.filter(function logic(n) {
    if (n % 2 == 0){
        return true;
    } else {
        return false;
    }
});
console.log(ans);

// for a string that is starting with a specific character  the use startsWith()