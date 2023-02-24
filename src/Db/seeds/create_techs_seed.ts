import { Knex } from "knex";

const tableName = 'techs';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
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
        }
    ]);
};