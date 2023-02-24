import { Knex } from "knex";

const tableName = 'authentication'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();
    
    const leader_id = '2780f23f-8a44-4a06-85c9-c14f1487f626';
    // Inserts seed entries
    await knex(tableName).insert(
        { 
            email: "admin.clube@nandin.com", 
            password: "clubi123",
            cpf: "71561592118",
            username: "admin",
            user_id: leader_id,
        } 
    );
};
