import { Router, IRouter, Request, Response } from 'express';
import { Route } from '../../../Models';
import { TestService } from '../service';

class TestRouter implements Route {
	router = Router();
	testService: TestService;
	
	constructor(){
		this.testService = new TestService();
	}
	
	public initRoute() {
		this.router.get('/', this.getAllTest );
		this.router.post('/update', this.updateTest );

		return this.router;
	}
	private getAllTest(req:Request,res: Response){
		this.testService.getAll()
			.then(data => res.status(200).json( data )) // "data: ITestTable[]"
			.catch(err => res.status(500).json({errMessage: err.message,...err}));
	}
	private updateTest (req:Request,res: Response) {
		const { body } = req.body;
		this.testService.update({body: body ?? 'Updated by knex'})
	}
}
export const testRouter = new TestRouter();

