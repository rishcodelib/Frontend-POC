import Login from './components/Login.jsx';
import Error404 from './components/404.jsx';

var isLoggedIn = true;

function check() {
  if (isLoggedIn) {
    return (
      <Error404 desc="Logout Success!!" />
    )
  }
  else {
    return (
      <Login />
    )
  }
}

function App() {
  return (

    <div>
      <div className="container">
        {/* OPTION 1 */}
        {
          // isLoggedIn ? <Error404 desc="Login Success!!" /> : <Login />
        }
        {/* OPTION 2 */}
        {/* // check()} */}

        {/* OPTION 3 (ternary Operator in REACT )
        // this will return LOGIN component if TRUE , else Display BLANK
        */}
        {isLoggedIn && <Login />}


      </div>
    </div>

  );
}

export default App;
