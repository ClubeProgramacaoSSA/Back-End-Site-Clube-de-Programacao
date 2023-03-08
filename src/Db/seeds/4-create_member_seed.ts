import { Knex } from "knex";

const tableName = 'members';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { 
<<<<<<< HEAD
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
=======
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
>>>>>>> 55b297ea03f020d6c0d47acfe509f55bcbcad95a
        }
        
    ]);
};
