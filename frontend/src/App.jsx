import './App.css';
import { useState } from 'react';
import { FaUserTie, FaEnvelope, FaLock } from 'react-icons/fa';

function App() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const manejarSubmit = async (e) => {
     e.preventDefault();
  const res = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ correo, contrasena })
  });

  const data = await res.json();
  if (res.ok) {
    alert(data.message);
  } else {
    alert(data.message);
  }
  };

  return (
    <div className="contenedor">
      <div className="lado-izquierdo">
        <FaUserTie className="icono-usuario" />
      </div>

      <div className="lado-derecho">
        <h2>Seguro de Salud</h2>
        <form onSubmit={manejarSubmit}>
          <div className="campo">
            <FaEnvelope className="icono" />
            <input
              type="email"
              placeholder="Correo o usuario"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="campo">
            <FaLock className="icono" />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          <button className="boton-login" type="submit">
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
