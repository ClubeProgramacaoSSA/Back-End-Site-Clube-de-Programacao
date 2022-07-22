const express = require('express');
const routes = express.Router();
const teamsController = require('../controllers/teamsController');

routes.get('/', teamsController.getTeams);
routes.get('/:id_equipe', teamsController.getTeam);

module.exports = routes;