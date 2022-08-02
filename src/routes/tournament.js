import { Router } from 'express';
import { tournamentController } from '../controllers/tournamentController.js';
const routes = Router();

routes.post('/', tournamentController.getTeamInTournament);

export {routes};