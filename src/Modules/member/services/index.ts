import { Knex } from "knex";
import { connection } from "../../../Db/knex";
import { IBaseCrudService } from "../../../Models";
import { IMembers, IMembersNoId } from '../interfaces';

class MemberService {
    private tableName = 'members';
    private kxConnection: Knex;

    constructor() {
        this.kxConnection = connection;
    }

    // should create member and return it`s Id;
    async create(member: IMembersNoId) {

        const [memberWithId] = await this.kxConnection(this.tableName).insert(member, ['id']) as Array<{ id: string } | undefined>;

        if (!memberWithId) {
            // console.log(`Member Id`, memberWithId?.id);
            throw new Error('Error creating member');
        }
        
        return memberWithId.id;

    }
    async updateOne(memberId:string, memberPayload: Omit<Partial<IMembers>,'id'>){
        const [ member ] = await this.kxConnection<IMembers>(this.tableName)
            .where('id','=',memberId)
            .update({...memberPayload}, ['id']);
        
        return member ? true : false;
    }
    async getBySomething(member: Partial<Omit<IMembers, 'id'>>) {
        let somethingKey = null;
        let somethingValue = null;

        for (const [key, value] of Object.entries(member)) {
            if (value) {
                somethingKey = key;
                somethingValue = value;
                break;
            }
        }

        if (!somethingKey) throw new Error(`Pass a key to use as filter`);

        const members = await this.kxConnection<IMembers>(this.tableName)
            .where(somethingKey, '=', somethingValue)
            .select(`*`);

        return members;
        // if( response.length > 1 ) throw new Error(`More than one member!`);
    }
    async getAll() {
        const members = await this.kxConnection(this.tableName).select('*');

        return members;
    }
    async getById(memberId: string) {
        const member = await this.kxConnection(this.tableName)
            .where('id', '=', memberId)
            .select('*');

        return member;
    }
}
const memberService = new MemberService();

export {
    memberService
}