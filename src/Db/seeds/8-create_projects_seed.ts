// import { Knex } from "knex";

// const tableName = 'projects';

// export async function seed(knex: Knex): Promise<void> {
//     // Deletes ALL existing entries
//     await knex(tableName).del();

//     const var_activity_id = knex
//         .raw('select id from activities a where a.name = Projeto do site do Clube');

//     // Inserts seed entries
//     await knex(tableName).insert([
        
//         { 
//             activity_id: var_activity_id,
//             pdf_url: "",
//             repository_url: "https://github.com/ClubeProgramacaoSSA/Back-End-Site-Clube-de-Programacao"
//         },

//     ]);
// };
