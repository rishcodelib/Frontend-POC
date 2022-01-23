import React from "react";
import emojipedia from "./emojipedia.js";
import Entry from './Entry';

function createEntry(emojiTerm) {
  return <Entry
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    description={emojiTerm.meaning}
  />
}


function app() {
  return (
    <div>
      <h1>
        <span> Emojipeida </span>
      </h1>
      {console.log(emojipedia)}
      <dl className="dictionary">
        {/* {emojipedia.map(createEntry)} */}

        {/*
         //! ARROW FUNCTION CONCEPT:
         */}
        {
          emojipedia.map(emojiTerm => (
            <Entry key={emojiTerm.id} emoji={emojiTerm.emoji}
              name={emojiTerm.name} description={emojiTerm.meaning}
            />))
        }

      </dl>

    </div>
  )
}

export default app;