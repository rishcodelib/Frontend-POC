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

function App() {

  return (
    <div className="App">

    </div>
  );
}

export default App;
