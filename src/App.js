import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './image.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './RegisterForm'; // Asegúrate de tener la ruta correcta al archivo Login.jsx

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      {showLogin ? (
        <Login />
      ) : (
        <div>
          <button className="btn btn-primary" onClick={handleShowLogin}>Login/Registro</button>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="React logo" />
            <h1>Bienvenidos a la aplicacion!</h1>
            <p>
              Conexión al siguiente nivel
            </p>
            <a>
              Somos la empresa BIDA
            </a>
          </header>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
