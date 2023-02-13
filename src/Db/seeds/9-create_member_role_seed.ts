// import { Knex } from "knex";

// const tableName = 'member_role'

// export async function seed(knex: Knex): Promise<void> {
//     // Deletes ALL existing entries
//     await knex(tableName).del();

//     const var_member_id = knex
//         .raw('select id from members m where m.fullname = Orlando Mota Pires');

//     const var_role_id = knex
//         .raw('select id from roles r where r.name = Estagiario');

//     // Inserts seed entries
//     await knex(tableName).insert([
//         { 
//             member_id: var_member_id, 
//             role_id: var_role_id 
//         },
        
//     ]);
// };
