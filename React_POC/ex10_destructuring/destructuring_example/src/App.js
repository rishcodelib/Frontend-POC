// import React, { useHook } from 'react';
import animals, { useAnimals } from './data'

// console.log(animals)

// De-structuring Array:
// [cat,dog] can be any eg. [c,d]
const [cat, dog] = animals;

// console.log(cat);
// console.log(dog);

//destructuring an object:
// property names should be same
//example : name and sound


// const { name, sound } = cat;
// console.log(name);
// to change property names or to provide alternative names from object de-structuring

// const { name: CatName, sound: CatSound } = cat;
// console.log(CatName);
// console.log(CatSound);

// what if property name is null ? what will be printed out?

// const { name = "CatName", sound = " CatSound" } = cat;
// console.log(name);
// console.log(sound);

// ! NESTED OBJECTS (DE-Structuring)
// const { name, sound, feedingRequirements: { food, water } } = cat;

// console.log(food);
// console.log(water);

//

// ! De-structuring Functions
// eslint-disable-next-line react-hooks/rules-of-hooks
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//




function App() {

  return (
    <div className="App">

    </div>
  );
}

export default App;
