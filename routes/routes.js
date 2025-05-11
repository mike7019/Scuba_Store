const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

// Ruta principal
router.get('/', controller.getHomePage);

module.exports = router;