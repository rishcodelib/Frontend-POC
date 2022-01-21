
var numbers = [3, 56, 2, 48, 5];

console.log(numbers);
// Map: Create a new array by doing something with each line in array

function double(x) {
  return x * 2;
}

const newNum = numbers.map(double);

console.log(newNum);

// ** This is used to create components in REACT from an Array. 

// Output:

// Number Array:
//  [ 3, 56, 2, 48, 5 ] 

// newNum Array:
// [ 6, 112, 4, 96, 10 ]

