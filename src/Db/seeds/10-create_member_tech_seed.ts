import { Knex } from "knex";

const tableName = 'member_tech';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

<<<<<<< HEAD
    const var_member_id = knex
        .raw(" select id from members m where m.fullname = 'Orlando Mota Pires' ");

    const var_tech_id = knex
        .raw("select id from techs t where t.name = 'CPP' ");
=======
    const leader_id = '2780f23f-8a44-4a06-85c9-c14f1487f626';

    const [ var_member_id ] = await knex('members').where('id','=',leader_id).select('id');

    const [ var_tech_id ] = await knex('techs').where('name','=','JavaScript').select('id');
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a

    // Inserts seed entries
    await knex(tableName).insert([
        { 
<<<<<<< HEAD
            member_id: var_member_id, 
            tech_id: var_tech_id 
        },

    ]);
};
=======
            member_id: var_member_id?.id ?? null, 
            tech_id: var_tech_id?.id ?? null 
        },
        
    ]);
};
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
