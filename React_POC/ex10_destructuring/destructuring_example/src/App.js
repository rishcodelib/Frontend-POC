import React from 'react';
import animals from './data'

console.log(animals)

// De-structuring Array:
// [cat,dog] can be any eg. [c,d]
const [cat, dog] = animals;

console.log(cat);
console.log(dog);

//destructuring an object:
// property names should be same
//example : name and sound


const { name, sound } = cat;
console.log(name);
// to change property names or to provide alternative names from object de-structuring

const { name: CatName, sound: CatSound } = cat;
console.log(CatName);
console.log(CatSound);



function App() {

  return (
    <div className="App">

    </div>
  );
}

export default App;
