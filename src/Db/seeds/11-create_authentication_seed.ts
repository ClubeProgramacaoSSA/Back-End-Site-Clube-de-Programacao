import { Knex } from "knex";

const tableName = 'authentication'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();
<<<<<<< HEAD

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            email: "QueijoBom@Hotmail.com", 
            password: "QueijoBom",
            cpf: "715.615.921-18",
            username: "Abacaxi Com Queijo" 
        }
        
    ]);
=======
    
    const leader_id = '2780f23f-8a44-4a06-85c9-c14f1487f626';

    const [var_member_id] = await knex('members').where( 'id', '=',leader_id).select('id');

    if(!var_member_id?.id) throw new Error('No leader!');

    // Inserts seed entries
    await knex(tableName).insert(
        { 
            email: "admin.clube@nandin.com", 
            password: "clubi123",
            cpf: "71561592118",
            username: "admin",
            user_id: var_member_id?.id ?? null,
        } 
    );
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
};
