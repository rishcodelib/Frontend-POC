var numbers = [3, 56, 2, 48, 5];
console.log(numbers);


//Find: Find the first Item that matches from an array.

const newNbr = numbers.find((num) => num > 10);

// this will not loop through entire array like FILTER.
//it will stop as soon as it finds it's first Item
console.log(newNbr);


//OP
// [ 3, 56, 2, 48, 5 ]
// 56