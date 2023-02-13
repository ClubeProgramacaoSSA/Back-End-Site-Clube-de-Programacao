import { Knex } from "knex";

const tableName = 'activities';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const var_leader_id = knex
        .raw('select id from members m where m.fullname = Orlando Mota Pires');

    const var_type_id = knex
        .raw('select id from types_activities t where t.name = Projeto');

    const var_status_id = knex
        .raw('select id from status_activities s where s.name = Concluido');

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            leader_id: var_leader_id,
            type_id: var_type_id,
            status_id: var_status_id,
            started_at: "27-10-2000",
            maybe_end_at: "27-10-2000",
            description: "Projeto",  
            xp: 100,
            name: "Projeto do site do Clube"
        },

        { 
            leader_id: var_leader_id,
            type_id: var_type_id,
            status_id: var_status_id,
            started_at: "27-10-2000",
            maybe_end_at: "27-10-2000",
            description: "Projeto",  
            xp: 100,
            name: "Semana de computacao"
        },

        { 
            leader_id: var_leader_id,
            type_id: var_type_id,
            status_id: var_status_id,
            started_at: "27-10-2000",
            maybe_end_at: "27-10-2000",
            description: "Projeto",  
            xp: 100,
            name: "Maratona SBC"
        }

    ]);
};
