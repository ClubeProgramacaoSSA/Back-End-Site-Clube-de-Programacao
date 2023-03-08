import { Knex } from "knex";

const tableName = 'members';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { 
            born_at: "2000-10-27",
            started_course_at: "2000-10-27",
            updated_at: "2000-10-27",
            gender: "male",
            description: "hahaha",
            fullname: "Pedro Felipe Facundes"
        },

        { 
            born_at: "2000-10-27",
            started_course_at: "2000-10-27",
            updated_at: "2000-10-27",
            gender: "male",
            description: "hahaha",
            fullname: "Orlando Mota Pires"
        },

        { 
            born_at: "2000-10-27",
            started_course_at: "2000-10-27",
            updated_at: "2000-10-27",
            gender: "male",
            description: "hahaha",
            fullname: "Fernando Antonio Schettini"
        },

        { 
            born_at: "2000-10-27",
            started_course_at: "2000-10-27",
            updated_at: "2000-10-27",
            gender: "male",
            description: "hahaha",
            fullname: "Antonio Horacio Magalhaes"
        },

        { 
            born_at: "2000-10-27",
            started_course_at: "2000-10-27",
            updated_at: "2000-10-27",
            gender: "male",
            description: "hahaha",
            fullname: "Adrian Widmer"
        }
        
    ]);
};
