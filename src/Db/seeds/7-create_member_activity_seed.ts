import { Knex } from "knex";

const tableName = 'member_activity';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

<<<<<<< HEAD
    const var_member_id = knex
        .raw('select id from members m where m.fullname = Orlando Mota Pires');

    const var_activity_id = knex
        .raw('select id from activities a where a.name = Projeto do site do Clube');

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            activity_id: var_activity_id, 
            member_id: var_member_id   
        }
        
=======
    const leader_id = '2780f23f-8a44-4a06-85c9-c14f1487f626';

    const [var_member_id] = await knex('members').where( 'id', '=',leader_id).select('id');

    const [var_activity_id] = await knex('activities').where('id','=',1).select('id');
    // console.log(var_member_id,var_activity_id)
    // Inserts seed entries
    await knex(tableName).insert([
        { 
            activity_id: var_activity_id?.id ?? null, 
            member_id: var_member_id?.id ?? null   
        }
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
    ]);
};
