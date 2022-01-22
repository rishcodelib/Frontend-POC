var numbers = [3, 56, 2, 48, 5]
// Arrow funcitons:
//examples.

const newNUMBERS = numbers.map((x) => {
  return x * x;
});

//2 input [param]
const newNUMBER = numbers.map((x, y) => {
  return x * y;
});

//1 input [param] without return and ().

const nbr = numbers.map(x => x * y);