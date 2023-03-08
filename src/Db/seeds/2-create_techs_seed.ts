import { Knex } from "knex";

const tableName = 'techs';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
<<<<<<< HEAD
        { 
            name: "CPP", 
        },

        { 
            name: "Java", 
        },
        
        { 
            name: "JavaScript",  
        },

        { 
            name: "C", 
        },

        { 
            name: "C#", 
=======
        {
            name: "C++",
        },
        {
            name: "Java",
        },
        {
            name: "JavaScript",
        },
        { name: "C", },
        {
            name: "C#",
        },
        {
            name: 'Python',
        },
        {
            name: 'Assembly',
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
        }
    ]);
};
