import { Router, IRouter, Request, Response } from 'express';
import { Route } from '../../../Models';
import { TestService } from '../service'
import { connection } from '../../../Db/knex';

class TestRoutes implements Route {
	router: IRouter;
	testService: TestService;
	
	constructor(){
		this.router = Router();
		this.testService = new TestService();
	}
	
	public initRoute() {
		this.router.get('/', this.getTest );

		return this.router;
	}
	private getTest(req:Request,res: Response){
		this.testService.get()
			.then(data => res.status(200).json( data ))
			.catch(err => res.status(500).json({errMessage: err.message,...err}));
	}
}

export const testRouter = new TestRoutes();
