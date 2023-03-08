import { Knex } from "knex";

const tableName = 'status_activities';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
<<<<<<< HEAD
        {            
            name: "Concluido",
        },

        {          
            name: "Em desenvolvimento",
        },

        {          
            name: "Nao iniciado",
        }
       
=======
        {          
            name: "Iniciado",
        },
        {          
            name: "Em Desenvolvimento",
        },
        {            
            name: "Concluido",
        },
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
    ]);
};
