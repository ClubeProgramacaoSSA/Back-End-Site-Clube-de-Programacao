import { Knex } from "knex";

const tableName = 'member_tech';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const leader_id = '2780f23f-8a44-4a06-85c9-c14f1487f626';

    const [ var_member_id ] = await knex('members').where('id','=',leader_id).select('id');

    const [ var_tech_id ] = await knex('techs').where('name','=','JavaScript').select('id');

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            member_id: var_member_id?.id ?? null, 
            tech_id: var_tech_id?.id ?? null 
        },
        
    ]);
};
