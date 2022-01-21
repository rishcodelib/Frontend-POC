import React from "react";
import Card from "./card";
import contacts from "./Mycontacts";

function createCard(contact) {
  return <Card
    key={contact.id}
    name={contact.name}
    image={contact.image}
    tel={contact.tel}
    email={contact.email}
  
  />
}


console.log(contacts)
function App() {
  return (
    <div>
      {contacts.map(createCard)}


      {/* <Card name={contacts[0].name}
        image={contacts[0].image}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <Card name={contacts[1].name}
        image={contacts[1].image}
        tel={contacts[1].tel}
        email={contacts[1].email}
      /> */}

    </div>
  )
}

export default App;