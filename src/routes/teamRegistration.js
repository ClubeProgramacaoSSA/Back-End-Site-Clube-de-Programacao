import { Router } from 'express'
const routes = Router();

const teamRegistrationController = require('../controllers/teamRegistrationController');

routes.post('/', teamRegistrationController.postTeam);

export { routes };