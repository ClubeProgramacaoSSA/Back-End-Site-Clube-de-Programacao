import { Router, IRouter, Request, Response, NextFunction } from 'express';
import { Route } from '../../../Models';
import { memberService } from '../services';
import { IMembers } from '../interfaces';
import { IAuthentication } from '../../auth/interfaces';

class MemberRouter implements Route {
    private router = Router();

    constructor() { }

    public initRoute() {
        // store member router isn`t need yet, because only in auth a member can be created;
        // this.router.post('/store', this.storeMember);
        this.router.get('/', this.getAllMembers);
        this.router.get('/:member_id?', this.getMemberById);
        this.router.post('/getBy', this.getMemberBySomething);
        this.router.put('/:member_id?', this.updateMemberByPayload);

        return this.router;
    }

    private async updateMemberByPayload(req: Request, res: Response, next: NextFunction) {
        const { member_id } = req.params;
        const partialMember = req.body as Partial<IMembers>;

        // Removes id in case of someone thats send its as payload
        partialMember.id && delete partialMember.id;

        try {
            const updated = await memberService.updateOne(member_id, partialMember);

            if (!updated) throw new Error('Error updating');

            return res.status(200).json({msg: 'Member updated successfully'});
        } catch (err) {
            next(err);
        }
    }
    private async getMemberBySomething(req: Request, res: Response, next: NextFunction) {
        const partialMember = req.body as Partial<Omit<IMembers, 'id'>>;
        try {
            const members = await memberService.getBySomething(partialMember);

            res.status(200).json(members);
        } catch (err) {
            next(err);
        }
    }
    private async getMemberById(req: Request, res: Response, next: NextFunction) {
        const { member_id } = req.params as { member_id: string };

        try {
            const memberArr = await memberService.getById(member_id);

            return res.status(200).json(memberArr);
        } catch (err) {
            next(err);
        }
    }
    private async getAllMembers(req: Request, res: Response, next: NextFunction) {

        try {
            const members = await memberService.getAll();
            // console.log(members)
            return res.status(200).json(members);
        } catch (err) {
            next(err);
        }
    }
    private async storeMember(req: Request, res: Response, next: NextFunction) {
        // should receive a member from body and its authentication;
        const member = req.body as Omit<IMembers, 'id'>;
        const { fullname, gender, started_course_at, born_at, created_at, description, updated_at } = member;

        try {
            const memberId = await memberService.create({ ...member });

            return res.status(201).json({ memberId: memberId });
        } catch (err) {
            next(err);
        }
    }

}
export const memberRouter = new MemberRouter();

