import { Router } from 'express';

const tournamentRouter = Router();
import { getTeamInTournament,getTournamentById,getTournaments } from '../controllers/tournamentController.js';

tournamentRouter.post('/getTeamIn', getTeamInTournament);
tournamentRouter.get('/', getTournaments);
tournamentRouter.get('/:id', getTournamentById )

export { tournamentRouter };