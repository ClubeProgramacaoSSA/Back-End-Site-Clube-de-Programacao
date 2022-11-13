import { Router } from 'express';
import { Route } from '../../../Models';
import { TeamService } from '../services' 
import {Request, Response} from 'express';


class TeamRoutes implements Route {
	router = Router();
	service: TeamService;

	constructor(){
		this.service = new TeamService();
	}
	
	public initRoute() {
		this.router.get('/', this.getAllTeams); //Get all teams
		this.router.get('/:id_team', this.getEspecificTeam); //Get a especific team
		this.router.post('/', this.postTeam); //Insert a new team in dataBase
		
		return this.router;
	}

	private getAllTeams = (req: Request,res:Response) => {

		this.service.getAll()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

	private getEspecificTeam = (req: Request,res:Response) => {
		const { id_team } = req.params;

		this.service.getEspecific(parseInt(id_team))
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

	private postTeam = (req: Request,res:Response) => {
		const team = req.body;

		this.service.post( team )
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}
}

export const teamRouter = new TeamRoutes();