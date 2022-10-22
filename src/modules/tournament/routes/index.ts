import { Router } from 'express';
import { Route } from '../../../Models';
import { TournamentService } from '../../tournament/services';

class TournamentRoutes implements Route {
	router = Router();
	service: TournamentService;

	constructor(){
		this.service = new TournamentService();
	}
	
	public initRoute() {
		
		this.router.get('/', this.service.getAllTournament); //Get all tournament
		this.router.get('/especficTeam', this.service.getEspecificTeamInTournament); 
		//Get a team in a tournament //NOT COMPLETE

		return this.router;
	}
}

export const tournamentRouter = new TournamentRoutes();
