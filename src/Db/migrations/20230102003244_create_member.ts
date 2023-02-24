import { Knex } from "knex";

const tableName = 'members';

export async function up(knex: Knex): Promise<void> {
  
    await knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.timestamp('created_at').defaultTo(new Date().toISOString());
        table.timestamp('born_at').nullable();
        table.timestamp('started_course_at').notNullable();
        table.timestamp('updated_at').nullable();
        table.enum('gender',['male','female','nandão','unknown']).defaultTo('unknown');
        table.text('description').nullable();   
        table.text('fullname').notNullable();  
    });
      // review the cascade mode of delete coluns! 
    // in production maybe it is not the best solution; 
    return knex.raw(`TRUNCATE TABLE ${tableName} CASCADE`);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`DROP TABLE ${tableName} CASCADE`);
}

