var numbers = [3, 56, 2, 48, 5];


console.log(numbers);
//Filter: create a neew array by keeping the itemas that return true.

// !! USING ARROW FUNCTIONS: 


const arr = numbers.filter((num) => num > 10);
console.log(arr);


// Output
// numbers Array: 
// [ 3, 56, 2, 48, 5 ]
// 
// Filters Array num: 
// [ 56, 48 ]