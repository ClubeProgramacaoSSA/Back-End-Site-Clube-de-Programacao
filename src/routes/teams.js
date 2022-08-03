import { Router } from 'express';
const teamsRouter = Router();
import teamsController from '../controllers/teamsController';

teamsRouter.get('/', teamsController.getTeams);
teamsRouter.get('/:id_equipe', teamsController.getTeam);

export {teamsRouter};