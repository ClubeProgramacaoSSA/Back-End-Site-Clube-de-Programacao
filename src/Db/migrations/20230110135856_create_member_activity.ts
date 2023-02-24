import { Knex } from "knex";

const tableName = 'member_activity';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.integer('activity_id').references('id').inTable('activities').notNullable();
        table.uuid('member_id').references('id').inTable('members').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

