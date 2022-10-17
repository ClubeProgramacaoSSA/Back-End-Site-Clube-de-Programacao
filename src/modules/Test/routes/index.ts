import { Router } from 'express';
import { Route } from '../../../Models';
import { connection } from '../../../Db/knex';
import { TestService } from '../services';

class TestRoutes implements Route {
	router = Router();
	service: TestService;

	constructor(){
		this.service = new TestService();
	}
	
	public initRoute() {
		this.router.get('/', this.service.getTest);

		return this.router;	
	}
}

export const testRouter = new TestRoutes();
