import { Request, Response, Router } from 'express';
import { Route } from '../../../Models';
import { MemberService } from '../services';

// import bcrypt from 'bcrypt' ;
// import jwt from 'jsonwebtoken' ;

class MemberRoutes implements Route {
	router = Router();
    service: MemberService;

	constructor(){
		this.service = new MemberService();
	}
	
	public initRoute() {

		this.router.get('/', this.getAllMembers );
		this.router.get('/:id_member', this.getEspecificMember);
		// this.router.delete('/delete/:id_member', this.service.deleteEspecificMember);
		//this.router.post('/', this.service.memberLogin);

		return this.router;
	}

	private getAllMembers = (req: Request,res:Response) => {
		this.service.getAllMembers()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}
	private getEspecificMember = (req: Request,res:Response) => {
		const { id_member } = req.params;

		this.service.getEspecificMember( parseInt(id_member) )
			.then(json => res.status(200).json( json ))
			.catch( errObj => res.status(500).json( errObj )  )
	}
}

export const memberRouter = new MemberRoutes();
