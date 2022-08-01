import { Router } from 'express';
const routes = Router();
import { getTeamInTournament } from '../controllers/tournamentController.js';

routes.post('/', getTeamInTournament);



export {routes};