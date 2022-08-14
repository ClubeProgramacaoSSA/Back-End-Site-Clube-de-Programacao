import { Router } from 'express';
import teamController from '../controllers/teamController';

const routes = Router();

routes.post('/', teamController.postTeam);
routes.get('/', teamController.getTeams);
routes.get('/:id_equipe', teamController.getTeam);

export {routes};