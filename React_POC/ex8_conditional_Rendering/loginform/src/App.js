import Login from './components/Login.jsx';

var userIsRegistered = false;



function App() {
  return (

    <div>
      <div className="container">
        <Login
          isReg={userIsRegistered}
        />
      </div>
    </div>

  );
}

export default App;
