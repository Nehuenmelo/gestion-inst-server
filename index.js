// Importar el módulo express
const express = require('express');

// Crear una instancia de la aplicación express
const app = express();

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Configurar el puerto en el que la aplicación escuchará las solicitudes
const port = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
