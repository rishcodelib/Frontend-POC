var numbers = [3, 56, 2, 48, 5];

console.log("Orignal numbers Array: " + numbers);


//Reduce: Accmulate a value by doing something to each item in an array

// ! USING ARROW FUNCTIONS: 


var newNp = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

console.log("Final Value = " + newNp);


// Output
//
// Orignal numbers Array: 3,56,2,48,5
// accmulator=  3
// Number=  56
// accmulator=  59
// Number=  2
// accmulator=  61
// Number=  48
// accmulator=  109
// Number=  5
// Final Value = 114