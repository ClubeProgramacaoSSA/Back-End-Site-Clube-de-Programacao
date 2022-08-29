import { Router } from 'express';
import { getTeam,getTeams,postTeam,deleteTeam } from '../controllers/teamController.js';

const teamRouter = Router();

teamRouter.post('/', postTeam);
teamRouter.get('/', getTeams);
teamRouter.get('/:id_equipe', getTeam);
teamRouter.delete('/:id',deleteTeam )

export { teamRouter };