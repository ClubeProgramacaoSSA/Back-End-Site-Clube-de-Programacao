const express = require('express');
const routes = express.Router();
const controllesTest = require('../controllers/controllerTeste');
routes.get('/', controllesTest.getTeste);
module.exports = routes;