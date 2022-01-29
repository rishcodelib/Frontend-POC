// React Classes
// Reason of converting functional component to class component is to have STATE
// in order to use STATE we have to convert function  into a class
// works same as function just few key words are changes as below:
// Hooks can't be used inside class components

import React from 'react';

class App extends React.Component {
  render() {
    return <h1> Hello World </h1>;
  }

}

export default App;
