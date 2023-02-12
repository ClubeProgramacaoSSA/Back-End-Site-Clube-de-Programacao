import { Knex } from "knex";

const tableName = 'members';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('born_at').nullable();
        table.timestamp('started_course_at').notNullable();
        table.timestamp('updated_at').nullable();
        table.enum('gender',['male','female','nandão','unknown'])
        table.text('description').nullable();   
        table.text('fullname').notNullable();  
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

