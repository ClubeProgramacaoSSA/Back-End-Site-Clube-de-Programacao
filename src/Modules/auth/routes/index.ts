import { Router, IRouter, Request, Response, NextFunction } from 'express';
import { Route } from '../../../Models';
import { authService } from '../services';
import { IMembersNoId } from '../../member/interfaces';
import { IAuthenticationNoUserId } from '../interfaces';
import capitalize from '../../../Utils/capitalize';
import { generateAccessToken, verifyAccessTokenToMember, verifyMemberTokenMiddleware  } from '../../../Service/jwt';

class AuthRouter implements Route {
	private router = Router();

	constructor() {}

    public initRoute() {
        this.router.post('/login', verifyMemberTokenMiddleware, this.memberLogIn);
        this.router.post('/signup',this.memberSignUp);
        // think in the tokens refresh time and how will save the refreshs;
        // this.router.post('/refresh',() => {});

		return this.router;
	}

    private async memberLogIn(req: Request,res:Response,next: NextFunction) {
        const logInBody = req.body as {username: string, password: string}
        
        try {
            const member = await authService.login( logInBody );
            // console.log(member)

            // if(!member.length) throw new Error("Username or Password incorrect")
            
            return res.status(200).json( { token: generateAccessToken( member ) } );
        } catch (err) {
            next(err);
        }
    }
    private async memberSignUp(req: Request,res:Response,next: NextFunction) {
        const { member,auth } = req.body as { member: IMembersNoId,auth: IAuthenticationNoUserId};
        // console.log(`testSignUp`)

        try {
            const ok = await authService.signup({
                auth,
                member: {...member,fullname: capitalize(member.fullname)}
            });
            // console.log(ok)
            if(!ok) throw new Error(`Error signingUp the member`);

            return res.status(201).json({msg: 'Member Created Sucessfully'});
        } catch(err) {
            next(err);
        }
    }
	
}

export const authRouter = new AuthRouter();
