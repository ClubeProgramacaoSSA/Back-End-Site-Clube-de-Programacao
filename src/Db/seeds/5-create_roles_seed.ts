import { Knex } from "knex";

const tableName = 'roles';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
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
            
        
    ]);
};
