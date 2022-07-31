const express = require('express');
const routes = express.Router();
const tournamentController = require('../controllers/tournamentController');
routes.get('/', tournamentController.getTeamInTournament)



module.exports = routes;