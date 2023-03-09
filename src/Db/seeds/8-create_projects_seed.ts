import { Knex } from "knex";

const tableName = 'projects';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const var_activity_id = await knex('activities')
    .where('name','=','Projeto do site do Clube') // projeto do site
    .select('id'); 
    // console.log(var_activity_id)
    if(!var_activity_id) throw new Error('Sem Atividades');

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            activity_id: var_activity_id[0].id,
            repository_url: "https://github.com/ClubeProgramacaoSSA/Back-End-Site-Clube-de-Programacao"
        },

    ]);
};
