import { Knex } from "knex";

const tableName = 'tb_test';

export async function up(knex: Knex): Promise<void> {
    // set uuid v4 extension on database 
    knex.raw('create extension if not exists "uuid-ossp"')
    return knex.schema.createTable(tableName,function(tb){
        tb.increments('id').unsigned();
        tb.text('body').notNullable();
        tb.timestamps( true, true );
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName)
}

