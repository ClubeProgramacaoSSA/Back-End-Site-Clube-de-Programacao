import { Router } from 'express';
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

		this.router.get('/', this.service.getAllMembers);
		this.router.get('/:id_member', this.service.getEspecificMember);
		this.router.delete('/delete/:id_member', this.service.deleteEspecificMember);
		//this.router.post('/', this.service.memberLogin);

		return this.router;
	}
}

export const memberRouter = new MemberRoutes();
