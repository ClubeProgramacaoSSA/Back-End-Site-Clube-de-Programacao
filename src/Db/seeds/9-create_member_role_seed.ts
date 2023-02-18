import { Knex } from "knex";

const tableName = 'member_role'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const var_member_id = knex
        .select('id')
        .from('members')
        .where({fullname: 'Orlando Mota Pires'});

    const var_role_id = knex
        .select('id')
        .from('roles')
        .where({name: 'Estagiario'});

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            member_id: var_member_id, 
            role_id: var_role_id 
        },
        
    ]);
};
