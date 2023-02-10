import { Knex } from "knex";

const tableName = 'member_role'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments('id').primary();
        table.uuid('member_id').references('id').inTable('members');
        table.integer('role_id').references('id').inTable('roles')
    });
}


export async function down(knex: Knex): Promise<void> {
}

