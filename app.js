const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve React build files
app.use(express.static(path.join(__dirname, 'client/build')));

// Middleware para las rutas
app.use('/', routes);

// API routes (if any)
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Catch-all route to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
