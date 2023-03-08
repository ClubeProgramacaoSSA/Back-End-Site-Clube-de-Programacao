import { Knex } from "knex";

const tableName = 'roles';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
<<<<<<< HEAD
        { 
            name: "Capitao" 
        },

        { 
            name: "Estagiario" 
        },

        { 
            name: "Faz nada" 
        },
=======
        {
            name: "Aluno",
        },
        { 
            name: "Estagiário" 
        },
        { 
            name: "Desenvolvedor" 
        },
        { 
            name: "Administrador" 
        },
            
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
        
    ]);
};
