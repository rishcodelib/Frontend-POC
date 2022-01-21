var numbers = [3, 56, 2, 48, 5];
console.log(numbers);


//findindex: find the index of the first item that matches.


// Similar to Find() funciton, instead of finding the number, it finds the index of first item that matches


const newNbr = numbers.findIndex(function (num) {
  return num > 10;
})


console.log(newNbr);


// Op
//[ 3, 56, 2, 48, 5 ]
// 1