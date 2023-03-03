import { Router, IRouter, Request, Response, NextFunction } from 'express';
import { Route } from '../../../Models';
import { memberService } from '../services';
import { IMembers } from '../interfaces';
import { IAuthentication } from '../../auth/interfaces';

class MemberRouter implements Route {
    private router = Router();

    constructor() { }

    public initRoute() {
        this.router.post('/store', this.storeMember);
        this.router.post('/getBy', this.getMemberBySomething)
        return this.router;
    }
    private async getMemberBySomething(req: Request, res: Response,next:NextFunction) {
        const partialMember = req.body as Partial< Omit< IMembers,'id' > >;
        try {
            const members = await memberService.getBySomething(partialMember);
            
            res.status(200).json({ member: members[0] })
        } catch(err) {
            next(new Error('Error getting members'));
        }
    }
    private async getById(req: Request, res: Response) {

    }
    private async storeMember(req: Request, res: Response) {
        // should receive a member from body and its authentication;
        const member = req.body as Omit<IMembers, 'id'>;
        const { fullname, gender, started_course_at, born_at, created_at, description, updated_at } = member;
        // const nullishFields = [];

        // Object.entries(member).forEach(( [ key, value ]) => {
        //     if( !value ) {
        //         nullishFields.push(key);
        //     }
        // });

        const memberId = await memberService.create({ ...member });

        if (!memberId) {
            throw new Error(`Error storing member`)
        }

        return res.status(201).json({ memberId: memberId });
    }

}
export const memberRouter = new MemberRouter();

