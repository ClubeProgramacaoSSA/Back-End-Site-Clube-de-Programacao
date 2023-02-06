import { Knex } from "knex";

const tableName = 'tb_test';

// set uuid v4 extension on database 
export async function up(knex: Knex): Promise<void> {
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

