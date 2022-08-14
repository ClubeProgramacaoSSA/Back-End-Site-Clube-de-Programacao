import { Router } from 'express';

const tournamentRouter = Router();
import { getTeamInTournament } from '../controllers/tournamentController.js';

tournamentRouter.post('/', getTeamInTournament);

import { tournamentController } from '../controllers/tournamentController.js';
const routes = Router();


routes.post('/', tournamentController.getTeamInTournament);

export { tournamentRouter };