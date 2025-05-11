const path = require('path');

// Controlador para la página principal
exports.getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
};
