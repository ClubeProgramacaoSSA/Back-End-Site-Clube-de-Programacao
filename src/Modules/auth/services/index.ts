import { IBaseCrudService } from "../../../Models";
import { IMembers, IMembersNoId } from '../../member/interfaces';
import { IAuthentication,IAuthenticationNoId, IAuthenticationNoUserId,LoginResponseType } from '../interfaces';
import { generateAccessToken,APP_SECRET } from '../../../Service/jwt';
import { memberService } from "../../member/services";
import { connection } from "../../../Db/knex";
import knex, { Knex } from "knex";

export class AuthService {
    private tableName = 'authentication';
    private kxConnection: Knex;

    constructor() {
        this.kxConnection = connection;
    }

    private async create(auth: IAuthenticationNoId) {
        try {
            console.log(auth)
            await this.kxConnection<IAuthenticationNoId>(this.tableName).insert( auth );
            return true;
        } catch (err) {
            // delete member that was been created!
            await this.kxConnection<IMembers>('members').where( 'id','=',auth.user_id ).delete();
            // console.log('no catch ', auth.user_id)
            throw err;
        } 
    }
    private async getByUsername(username: string) {
        const authenticatedMember = await this.kxConnection<IAuthentication>(this.tableName).where('username','=', username).select('*');

        return authenticatedMember;
    }
    public async login({ username, password }:{ username:string, password:string }){
        // console.log(username)
        // console.log(password)
        const members = await this.kxConnection
            .from(this.tableName)
            .where({ username })
            .join('members', 'members.id',`${this.tableName}.user_id`)
            .select<Array<LoginResponseType>>(
                    this.tableName+'.email',
                    this.tableName+'.username',
                    this.tableName+'.password',
                    'members.id',
                    'members.fullname',
                    'members.gender',
                    'members.description',
                    'members.started_course_at',
            );
        // if(!members.length) throw new Error('Error in authentication username of password!');
        // const [member] = members;
        const [member] = members;

        if(!members.length || member.password !== password) throw new Error('Error in authentication username or password!');
        delete member.password; // don't send password to front, never do that!

        return member;
    }
    public async signup({ auth, member }:{member: IMembersNoId, auth: IAuthenticationNoUserId}){
        const authenticatedMember = await this.getByUsername( auth.username );
        
        // console.log(authenticatedMember );

        if(authenticatedMember.length > 0) { console.log(authenticatedMember ); throw new Error('Member is already existing');}

        const memberId = await memberService.create({...member});
        // console.log( memberId );
        const authenticated = await this.create({
            ...auth,
            user_id: memberId
        });

        return true;
    }

    
}
export const authService = new AuthService(); 