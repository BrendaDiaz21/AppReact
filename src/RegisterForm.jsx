import React, { useState } from 'react';
import './styles.css'; // Importamos el archivo de estilos CSS

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
      <h2>Bienvenido</h2> {/* Mensaje de bienvenida */}
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

export default LoginForm;