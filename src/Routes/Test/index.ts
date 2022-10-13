import { Router } from 'express';
import { Route } from '../../Models';
import { connection } from '../../Db/knex';

class TestRoutes implements Route {
	router = Router();
	tableName: string;

	constructor(){
		this.tableName = 'tb_test';
	}
	
	public initRoute() {
		this.router.get('/test',(req,res) => {
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}) );
		});

		return this.router;
	}
}

export const testRouter = new TestRoutes();
