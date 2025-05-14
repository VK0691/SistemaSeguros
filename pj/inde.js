// index.js
// index.js
import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde el backend con Express!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}`);
});
