import { Knex } from "knex";

const tableName = 'activities';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const var_leader_id = knex
        .select('id')
        .from('members')
        .where({fullname: 'Orlando Mota Pires'});

    const var_type_id = knex
        .select('id')
        .from('types_activities')
        .where({name: 'Projeto'});

    const var_status_id = knex
        .select('id')
        .from('status_activities')
        .where({name: 'Concluido'});

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            leader_id: var_leader_id,
            type_id: var_type_id,
            status_id: var_status_id,
            started_at: "2000-10-27",
            maybe_end_at: "2000-10-27",
            description: "Projeto",  
            xp: 100,
            name: "Projeto do site do Clube"
        },

        { 
            leader_id: var_leader_id,
            type_id: var_type_id,
            status_id: var_status_id,
            started_at: "2000-10-27",
            maybe_end_at: "2000-10-27",
            description: "Projeto",  
            xp: 100,
            name: "Semana de computacao"
        },

        { 
            leader_id: var_leader_id,
            type_id: var_type_id,
            status_id: var_status_id,
            started_at: "2000-10-27",
            maybe_end_at: "2000-10-27",
            description: "Projeto",  
            xp: 100,
            name: "Maratona SBC"
        }

    ]);
};
