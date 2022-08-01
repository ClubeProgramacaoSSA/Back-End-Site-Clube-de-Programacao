const express = require('express');
const routes = express.Router();
const memberLoginController = require('../controllers/memberLoginController');

routes.post('/', memberLoginController.postLogin);

module.exports = routes;