import { Knex } from "knex";

const tableName = 'authentication'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            email: "QueijoBom@Hotmail.com", 
            password: "QueijoBom",
            cpf: "715.615.921-18",
            username: "Abacaxi Com Queijo" 
        }
        
    ]);
};
