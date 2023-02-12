import { Knex } from "knex";

const refTable = 'types_activities';
const tableName = 'techs';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableLike(tableName,refTable);
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

