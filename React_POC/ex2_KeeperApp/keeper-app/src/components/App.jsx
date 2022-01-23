import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from './Note';
import myNotes from './myNotes';
console.log(myNotes);

function App() {
  return <div>
    <Header />
    {myNotes.map((prop) =>
      <Note
      key = {prop.id}
        name={prop.name}
        description={prop.description}
      />
    )
     }
    <Footer />

  </div>
}

export default App;