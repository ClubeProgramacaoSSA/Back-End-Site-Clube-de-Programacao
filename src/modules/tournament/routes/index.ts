import { Router } from 'express';
import { Route } from '../../../Models';
import { TournamentService } from '../../tournament/services';
import { Request, Response} from 'express';

class TournamentRoutes implements Route {
	router = Router();
	service: TournamentService;

	constructor(){
		this.service = new TournamentService();
	}
	
	public initRoute() {
		
		this.router.get('/', this.getAllTournament); //Get all tournament
		this.router.get('/especficTeam', this.service.getEspecificTeamInTournament); 
		//Get a team in a tournament //NOT COMPLETE

		return this.router;
	}

	private getAllTournament = (req: Request,res:Response) => {

		this.service.getAllTournament()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

	private getEspecificTeamInTournament = (req: Request,res:Response) => {
		
		const objTeamInTournament = req.body ;      

		const id_member = req.params;
		this.service.getEspecificTeamInTournament( parseInt(objTeamInTournament) )
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}
}

export const tournamentRouter = new TournamentRoutes();
