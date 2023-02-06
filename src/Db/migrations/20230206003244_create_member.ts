import { Knex } from "knex";

const tableName = 'members';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw(`(UUID())`));
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('started_at').notNullable();
        table.timestamp('maybe_end_at').notNullable();
        table.text('description').nullable();
        table.text('repository_url').nullable();
        table.text('pdf_url').nullable();
        table.text('born_at').nullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

