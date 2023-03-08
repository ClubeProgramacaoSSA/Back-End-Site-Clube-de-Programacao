import { Knex } from "knex";

const tableName = 'types_activities';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments('id').primary();
        table.text('name').notNullable();
        table.timestamp('created_at').defaultTo(new Date().toISOString());
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

