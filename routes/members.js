const express = require('express');
const routes = express.Router();
const teamsController = require('../controllers/memberControllers');

routes.postMember('/', memberControllers.postMember);

routes.putMember('/', memberControllers.putMember)

routes.get('/', memberControllers.getMembers);
routes.get('/:id_membro', memberControllers.getMember);


module.exports = routes;