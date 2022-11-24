import { Router, IRouter, Request, Response } from 'express';
import { Route } from '../../../Models';
import { TestService,ITestTable } from '../service';

class TestRouter implements Route {
	private router: IRouter;

	constructor(){
		this.router = Router();
	}

	public initRoute() {
		this.router = Router();
		this.router.get('/', this.getAllTest );
		this.router.post('/update', this.updateTest );

		return this.router;
	}
	private getAllTest(req:Request,res: Response){
		new TestService().getAll()
			.then(data => res.status(200).json( data )) // "data: ITestTable[]"
			.catch(err => res.status(500).json({errMessage: err.message,...err}));
	}
	private updateTest (req:Request,res: Response) {
		const { id,body } = req.body as Partial<ITestTable>;
		new TestService().update({
			body: body ?? 'Updated by knex',
			updatedAt: new Date(),
		})
	}
}
export const testRouter = new TestRouter();

