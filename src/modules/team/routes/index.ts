import { Router } from 'express';
import { Route } from '../../../Models';
import { TeamService } from '../services' 


class TeamRoutes implements Route {
	router = Router();
	service: TeamService;

	constructor(){
		this.service = new TeamService();
	}
	
	public initRoute() {
		this.router.get('/', this.service.getAllTeams); //Get all teams
		this.router.get('/:id_team', this.service.getEspecificTeam); //Get a especific team
		this.router.post('/insert', this.service.getEspecificTeam); //Insert a new team in dataBase
		
		return this.router;
	}
}

export const teamRouter = new TeamRoutes();