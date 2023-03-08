import { Knex } from "knex";

const tableName = 'status_activities';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {            
            name: "Concluido",
        },

        {          
            name: "Em desenvolvimento",
        },

        {          
            name: "Nao iniciado",
        }
       
    ]);
};
