import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // o tu contraseña si tienes
  database: 'seguros'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('Conexión a MySQL exitosa');
  }
});

// Ruta de login
app.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;
  const query = 'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?';

  db.query(query, [correo, contrasena], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error en el servidor' });
    if (result.length > 0) {
      res.json({ message: 'Login exitoso' });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});
