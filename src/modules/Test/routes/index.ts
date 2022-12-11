import { Router, IRouter, Request, Response } from 'express';
import { Route } from '../../../Models';
import { TestService, ITestTable } from '../service';

class TestRouter implements Route {
	private router: IRouter;

	constructor() {
		this.router = Router();
	}

	public initRoute() {
		this.router = Router();
		this.router.get('/', this.getAllTest);
		this.router.post('/:id', this.updateTestBodyById);

		return this.router;
	}
	private getAllTest(req: Request, res: Response) {
		new TestService().getAll()
			.then(data => res.status(200).json(data)) // "data: ITestTable[]"
			.catch(err => res.status(500).json({ errMessage: err.message, ...err }));
	}
	private updateTestBodyById(req: Request, res: Response) {
		const { body } = req.body as Partial<ITestTable> & { id: undefined };
		const { id } = req.params;

		new TestService().updateById({
			id: parseInt(id),
			body: body ?? 'Updated by knex',
			updatedAt: new Date(),
		})
	}
}
export const testRouter = new TestRouter();

