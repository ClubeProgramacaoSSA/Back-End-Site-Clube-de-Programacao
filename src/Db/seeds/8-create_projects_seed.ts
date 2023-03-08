import { Knex } from "knex";

const tableName = 'projects';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

<<<<<<< HEAD
    const var_activity_id = knex
        .raw('select id from activities a where a.name = Projeto do site do Clube');

    // Inserts seed entries
    await knex(tableName).insert([
        
        { 
            activity_id: var_activity_id,
            pdf_url: "",
=======
    const var_activity_id = await knex('activities')
    .where('id','=',1) // projeto do site
    .select('id'); 
    // console.log(var_activity_id)
    if(!var_activity_id.length) throw new Error('Sem Atividades');

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            activity_id: var_activity_id[0].id,
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
            repository_url: "https://github.com/ClubeProgramacaoSSA/Back-End-Site-Clube-de-Programacao"
        },

    ]);
};
