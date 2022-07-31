import { Router } from 'express';
const routes = Router();
import teamsController from '../controllers/teamsController';

routes.get('/', teamsController.getTeams);
routes.get('/:id_equipe', teamsController.getTeam);

export default routes;