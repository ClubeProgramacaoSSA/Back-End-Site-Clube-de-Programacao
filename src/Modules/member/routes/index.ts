import { Router, IRouter, Request, Response } from 'express';
import { Route } from '../../../Models';
import { MemberService } from '../services';
import { IMembers } from '../interfaces';
import { IAuthentication } from '../../auth/interfaces';

class MemberRouter implements Route {
    private router = Router();

    constructor() {}

    public initRoute() {
        this.router.post('/store', this.storeMember );

        return this.router;
    }

    private async storeMember(req: Request, res: Response) {
        // should receive a member from body and its authentication;
        const member = req.body as Omit<IMembers, 'id'>;
        const { fullname, gender, started_course_at, born_at, created_at, description, updated_at } = member;

        const memberId = await new MemberService().create({ ...member });
        
        if( !memberId ) {
            throw new Error('Error creating member')
        }
        
        return res.status(203).json( { memberId: memberId } ); 
    }

}
export const memberRouter = new MemberRouter();

