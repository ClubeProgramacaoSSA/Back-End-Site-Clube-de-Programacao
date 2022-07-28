const express = require('express');
const routes = express.Router();
const projectsController = require('../controllers/projects');

routes.get('/', projectsController.getProjects);
routes.get('/:id_project', teamsController.getProjects);

module.exports = routes;