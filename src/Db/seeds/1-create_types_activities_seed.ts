import { Knex } from "knex";

const tableName = 'types_activities';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            name: "Projeto",
<<<<<<< HEAD
        },

        { 
            name: "Workshop",
        },

        { 
            name: "Evento",
=======
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
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
        },
       
    ]);
};
