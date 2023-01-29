import { Request, Response, Router } from 'express';
import { Route } from '../../../Models';
import { MemberService } from '../services';

// import bcrypt from 'bcrypt' ;
// import jwt from 'jsonwebtoken' ;

class MemberRoutes implements Route {
	router = Router();
	service: MemberService;

	constructor() {
		this.service = new MemberService();
	}

	private getAllMembers = (req: Request, res: Response) => {
		this.service.getAll()
			.then((testJson => res.status(200).json(testJson)))
			.catch((errObj) => res.status(500).json(errObj))
	}

	private getEspecificMember = (req: Request, res: Response) => {
		const { id_member } = req.params;

		this.service.getEspecific(parseInt(id_member))
			.then(json => res.status(200).json(json))
			.catch(errObj => res.status(500).json(errObj))
	}

	private postEspecificMember = (req: Request, res: Response) => {
		const member = req.body;

		this.service.postEspecific(member)
			.then(json => res.status(200).json(json))
			.catch(errObj => res.status(500).json(errObj))
	}

	private putEspecificMember = (req: Request, res: Response) => {
		const member = req.body;
		this.service.putEspecific(member)
			.then(json => res.status(200).json(json))
			.catch(errObj => res.status(500).json(errObj))
	}

	private deleteEspecificMember = (req: Request, res: Response) => {
		const { id_member } = req.params;

		this.service.deleteEspecific(parseInt(id_member))
			.then(json => res.status(200).json(json))
			.catch(errObj => res.status(500).json(errObj))
	}

	public initRoute() {
		this.router.get('/', this.getAllMembers);
		this.router.get('/:id_member', this.getEspecificMember);

		this.router.put('/', this.putEspecificMember);
		this.router.post('/', this.postEspecificMember);

		this.router.delete('/:id_member', this.deleteEspecificMember);

		//this.router.post('/', this.service.memberLogin);

		return this.router;
	}

}

export const memberRouter = new MemberRoutes();
