// import { Knex } from "knex";

// const tableName = 'member_tech';

// export async function seed(knex: Knex): Promise<void> {
//     // Deletes ALL existing entries
//     await knex(tableName).del();

//     const var_member_id = knex
//         .raw('select id from members m where m.fullname = Orlando Mota Pires');

//     const var_tech_id = knex
//         .raw('select id from techs t where t.name = CPP');

//     // Inserts seed entries
//     await knex(tableName).insert([
//         { 
//             member_id: var_member_id, 
//             tech_id: var_tech_id 
//         },
        
//     ]);
// };
