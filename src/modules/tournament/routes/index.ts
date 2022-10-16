import { Router } from 'express';
import { Route } from '../../../Models';
import { connection } from '../../../Db/knex';

class TournamentRoutes implements Route {
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'tb_torneio';
	}
	
	public initRoute() {
		this.router.get('/tournament',(req,res) => {
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.get('/tournament/team/:id_team',(req,res) => { //NOT COMPLETE
			const id_team = req.params.id_team
			
			connection(this.tableName)
				.select('*')
				.where('id_equipe', id_team)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		

		return this.router;
	}
}

export const tournamentRouter = new TournamentRoutes();
