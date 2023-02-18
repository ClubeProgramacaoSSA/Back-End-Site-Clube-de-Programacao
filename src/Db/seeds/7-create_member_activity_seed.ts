import { Knex } from "knex";

const tableName = 'member_activity';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const var_member_id = knex
        .select('id')
        .from('members')
        .where({fullname: 'Orlando Mota Pires'});

    const var_activity_id = knex
        .select('id')
        .from('activities')
        .where({name: 'Projeto do site do Clube'});

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            activity_id: var_activity_id, 
            member_id: var_member_id   
        }
        
    ]);
};
