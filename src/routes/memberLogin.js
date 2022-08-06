import { Router } from 'express';
const routes = Router();
const memberLoginController = require('../controllers/memberLoginController');

routes.post('/', memberLoginController.postLogin);

export {routes};