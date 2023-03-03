import { Knex } from "knex";
import { connection } from "../../../Db/knex";
import { IBaseCrudService } from "../../../Models";
import { IMembers } from '../interfaces';

class MemberService {
    private tableName = 'members';
    private kxConnection: Knex;

    constructor() {
        this.kxConnection = connection;
    }

    async create(member: IMembers) {
        // should create member and return it`s Id;
        try {
            const [memberWithId] = await this.kxConnection(this.tableName)
                .insert(member, ['id']) as Array<{ id: string } | undefined>;

            if (memberWithId) {
                console.log(`Member Id`, memberWithId?.id);
                return memberWithId.id;
            }

        } catch (err) {
            throw new Error('Error');
        }
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

        const members = await this.kxConnection< IMembers >(this.tableName)
            .where(somethingKey, '=', somethingValue)
            .select(`*`);
            
        return members;
        // if( response.length > 1 ) throw new Error(`More than one member!`);
    }
}
const memberService = new MemberService();

export {
    memberService
}