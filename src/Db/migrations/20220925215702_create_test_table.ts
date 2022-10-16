import { Knex } from "knex";

const tableName = 'tb_test';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,function(tb){
        tb.increments('id');
        tb.text('body').notNullable();
        tb.timestamp('createdAt').defaultTo(knex.fn.now());
        tb.timestamp('updatedAt');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName)
}

