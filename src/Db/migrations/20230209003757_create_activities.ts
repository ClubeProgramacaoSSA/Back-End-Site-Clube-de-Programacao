import { Knex } from "knex";

const tableName = 'activities';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments().unsigned().primary();
        table.uuid('leader_id').references('id').inTable('members');
        table.integer('type_id').references('id').inTable('types_activities');
        table.integer('status_id').references('id').inTable('status_activities');
        table.timestamp('started_id').notNullable();
        table.timestamps(true,true);
        table.timestamp('maybe_end_at').notNullable();
        table.text('description').notNullable();
        table.integer('xp').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
}

