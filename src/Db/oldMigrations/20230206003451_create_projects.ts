import { Knex } from "knex";

const tableName = 'projects';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments('id').primary();
        table.integer('activity_id').references('id').inTable('activities');
        table.text('pdf_url').nullable();
        table.text('repository_url').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

