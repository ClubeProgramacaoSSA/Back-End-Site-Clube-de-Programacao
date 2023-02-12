import { Knex } from "knex";

const tableName = 'authentication'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments('id').primary().unsigned();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('cpf').notNullable();
        table.string('username').unique().notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

