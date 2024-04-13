import React, { useState } from 'react';
import ProductTable from './Product'; // Importamos el componente ProductTable
import './styles.css'; // Importamos el archivo de estilos CSS


const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Por favor, complete todos los campos.');
      return;
    }

    // Llamada a la función de registro
    onRegister({ username, password });
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input
        className="input"
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button className="button" type="submit">Registrarse</button>
    </form>
  );
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Por favor, complete todos los campos.');
      return;
    }

    // Llamada a la función de inicio de sesión
    onLogin({ username, password });
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        className="input"
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button className="button" type="submit">Iniciar Sesión</button>
    </form>
  );
};



const App = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = (userData) => {
    console.log('Usuario registrado:', userData);
    // Aquí podrías añadir lógica para redirigir o realizar acciones después del registro
  };

  const handleLogin = ({ username, password }) => {
    // Verificar si las credenciales son correctas
    if (username === 'admin' && password === '123') {
      console.log('Usuario inició sesión:', { username, password });
      setIsLoggedIn(true);
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="container">
      <h1 className="title">{isRegistering ? 'Registro' : 'Bienvenido'}</h1>
      {isLoggedIn ? (
        <ProductTable />
      ) : isRegistering ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      {!isLoggedIn && (
        <button className="toggleButton" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
        </button>
      )}
    </div>
  );
};

export default App;