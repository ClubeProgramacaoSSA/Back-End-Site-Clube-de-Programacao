import { Knex } from "knex";

const tableName = 'members';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            started_course_at: new Date(2018, 10, 27).toISOString(),
            gender: "male",
            fullname: "Pedro Felipe Facundes"
        },
        { 
            started_course_at: new Date(2018, 10, 27).toISOString(),
            gender: "male",
            fullname: "Orlando Mota Pires"
        },

        { 
            started_course_at: new Date(2018, 10, 27).toISOString(),
            gender: "male",
            fullname: "Fernando Antonio Schettini"
        },

        { 
            started_course_at: new Date(2018, 10, 27).toISOString(),
            gender: "male",
            fullname: "Antonio Horacio Magalhaes"
        },

        { 
            started_course_at: new Date(2018, 10, 27).toISOString(),
            gender: "male",
            fullname: "Adrian Widmer"
        }, 
        {
            started_course_at: new Date(2018, 10, 27).toISOString(),
            fullname: "Administrador"
        }
        
    ]);
};
