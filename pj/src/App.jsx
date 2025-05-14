import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });

      if (response.data.success) {
        setMensaje('✅ Login exitoso');
      } else {
        setMensaje('❌ Credenciales incorrectas');
      }
    } catch (error) {
      setMensaje('⚠️ Error en el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar Sesión</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}

export default Login;
