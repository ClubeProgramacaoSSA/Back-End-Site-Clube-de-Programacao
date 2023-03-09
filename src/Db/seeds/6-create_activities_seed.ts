import { Knex } from "knex";

const tableName = 'activities';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();
    // change by your adm member entite
    const leader_id = '2780f23f-8a44-4a06-85c9-c14f1487f626';

    const [var_member_id] = await knex('members')
        .where('fullname','=', 'Orlando Mota Pires')
        .select('id');

    const [var_type_id] = await knex('types_activities')
        .where('name','=','Projeto')
        .select('id');

    const [var_status_id] = await knex('status_activities')
        .where('name','=','Concluido')
        .select('id');

    if(!var_member_id?.id) throw new Error('No leader!');
    if(!var_type_id?.id) throw new Error('No activitie type!');
    if(!var_status_id?.id) throw new Error('No activitie status!');
    
    // console.log(var_member_id?.id)
    // console.log(var_type_id)
    // console.log(var_status_id)

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            leader_id: var_member_id?.id ?? null,
            type_id: var_type_id?.id ?? null,
            status_id: var_status_id?.id ?? null,
            started_at: new Date(2000, 10, 27).toISOString(),
            maybe_end_at: new Date(2000, 10, 27).toISOString(),
            description: "Desenvolvimento de uma interface que auxilie os membros a consumir os conteúdos ofertados pelo próprio clube",  
            xp: 150,
            name: "Projeto do site do Clube"
        },

        { 
            leader_id: var_member_id?.id ?? null,
            type_id: var_type_id?.id ?? null,
            status_id: var_status_id?.id ?? null,
            started_at: new Date(1994, 12, 10).toISOString(),
            maybe_end_at: new Date(1994, 12, 10).toISOString(),
            description: "Uma semana com foco em introduzir os conceitos básicos da computação",  
            xp: 130,
            name: "Semana de computacao"
        },

        { 
            leader_id: var_member_id?.id ?? null,
            type_id: var_type_id?.id ?? null,
            status_id: var_status_id?.id ?? null,
            started_at: new Date(2006, 12, 10).toISOString(),
            maybe_end_at: new Date(2006, 12, 10).toISOString(),
            description: "Projeto",  
            xp: 100,
            name: "Maratona SBC"
        }

    ]);
};
