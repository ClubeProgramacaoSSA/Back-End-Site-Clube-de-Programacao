const express = require('express');
const routes = express.Router();

const teamRegistrationController = require('../controllers/teamRegistrationController');

routes.post('/', teamRegistrationController.postTeam);

module.exports = routes;