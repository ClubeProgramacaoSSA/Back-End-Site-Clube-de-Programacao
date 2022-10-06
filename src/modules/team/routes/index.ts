import { Router } from 'express';
import { Route } from '../../../Models';
import { connection } from '../../../Db/knex';

class TeamRoutes implements Route {
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'TB_EQUIPE';
	}
	
	public initRoute() {
		this.router.get('/equipe',(req,res) => {
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		return this.router;
	}
}

export const teamRouter = new TeamRoutes();
