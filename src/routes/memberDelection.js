const express = require('express');
const routes = express.Router();
const memberDelectionController = require('../controllers/memberDelectionController');

routes.delete('/:id_membro', memberDelectionController.deleteMember);

module.exports = routes;