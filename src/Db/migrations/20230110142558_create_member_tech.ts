import { Knex } from "knex";

const tableName = 'member_tech';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName,(table) => {
        table.increments('id').primary();
        table.uuid('member_id').references('id').inTable('members');
        table.integer('tech_id').references('id').inTable('techs');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

