import { Router } from 'express';
import { Route } from '../../../Models';
import { TournamentService } from '../services';
import { Request, Response} from 'express';

class TournamentRoutes implements Route {
	router = Router();
	tournamentService: TournamentService;

	constructor(){
		this.tournamentService = new TournamentService();
	}
	
	public initRoute() {
		
		this.router.get('/', this.getAllTournament); //Get all tournament
		this.router.get('/:id_team', this.getEspecificTeamInTournament); //Get a team in a tournament //NOT COMPLETE

		return this.router;
	}

	private getAllTournament = (req: Request,res:Response) => {

		this.tournamentService.getAll()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

	private getEspecificTeamInTournament = (req: Request,res:Response) => {
		
		const { objTeamInTournament }  = req.params ;      
		const id_member = req.params;
		
		this.tournamentService.getEspecificTeamIn( parseInt(objTeamInTournament) )
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}
}

export const tournamentRouter = new TournamentRoutes();
