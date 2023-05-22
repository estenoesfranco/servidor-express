const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('¡Hola che!');
});

app.listen(3000, () => {
   console.log('Servidor Express escuchando en el puerto 3000');
});
