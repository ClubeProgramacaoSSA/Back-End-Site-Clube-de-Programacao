import { Knex } from "knex";

const tableName = 'activities';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments('id').primary();
        table.uuid('leader_id').references('id').inTable('members').notNullable();
        table.integer('type_id').references('id').inTable('types_activities').notNullable();
        table.integer('status_id').references('id').inTable('status_activities').notNullable();
        table.timestamp('started_at').notNullable();
        table.timestamps(true,true);
        table.timestamp('maybe_end_at').notNullable();
        table.string('description').notNullable();
        table.integer('xp').notNullable();
        table.string('name').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

