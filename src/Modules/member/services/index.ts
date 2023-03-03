import { Knex } from "knex";
import { connection } from "../../../Db/knex";
import { IBaseCrudService } from "../../../Models";
import { IMembers } from '../interfaces';

export class MemberService {
    private tableName = 'members';
    private kxConnection: Knex;

    constructor() {
        this.kxConnection = connection;
    }

    async create (member: IMembers){
        // should create member and return it`s Id;
        try {
            const [ memberWithId ] = await this.kxConnection( this.tableName )
                    .insert( member,['id']) as Array<{ id: string } | undefined>;
                    
            if(memberWithId) {
                console.log(`Member Id`, memberWithId?.id);
                return memberWithId.id;
            }
            
        } catch (err) {
            throw new Error('Error');
        }
    }

    
}