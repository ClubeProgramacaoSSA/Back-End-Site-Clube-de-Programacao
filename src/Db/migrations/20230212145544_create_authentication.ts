import { Knex } from "knex";

const tableName = 'authentication'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments('id').primary().unsigned();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        // will save with points ? if false, 11 is the length
        table.string('cpf',11).unique().notNullable();
        table.string('username').unique().notNullable();
        table.uuid('user_id').references('id').inTable('members');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

