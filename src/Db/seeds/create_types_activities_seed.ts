import { Knex } from "knex";

const tableName = 'types_activities';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            name: "Projeto",
            created_at: new Date().toISOString(),
        },
        { 
            name: "Aulão",
            created_at: new Date().toISOString(),
        },
        { 
            name: "Workshop",
            created_at: new Date().toISOString(),
        },
        { 
            name: "Evento",
            created_at: new Date().toISOString(),
        },
       
    ]);
};
