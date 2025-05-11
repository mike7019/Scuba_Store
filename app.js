const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para las rutas
app.use('/', routes);

// Configuración del motor de plantillas (opcional, si se usa views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
