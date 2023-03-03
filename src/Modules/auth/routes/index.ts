import { Router, IRouter, Request, Response } from 'express';
import { Route } from '../../../Models';

class AuthRouter implements Route {
	private router = Router();

	constructor() {}

    private memberLogIn(req: Request,res:Response) {
        
    }
    private memberSignUp(req: Request,res:Response) {
        
    }

	public initRoute() {
        this.router.post('/log-in',this.memberLogIn);
        this.router.post('/sign-up',this.memberSignUp);
        // think in the tokens refresh time and how will save the refreshs;
        // this.router.post('/refresh',() => {});

		return this.router;
	}
	
}

