import { Router } from 'express';

const tournamentRouter = Router();
import { getTeamInTournament } from '../controllers/tournamentController.js';

tournamentRouter.post('/', getTeamInTournament);

export { tournamentRouter };