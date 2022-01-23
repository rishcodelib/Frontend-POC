
import './App.css';
import Login from './components/Login';
import Error404 from './components/404';

var isLoggedIn = true;

function check() {
  if (isLoggedIn) {
    return (<Error404 />)
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
        {check()}

      </div>
    </div>

  );
}

export default App;
