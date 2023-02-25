import { Knex } from "knex";

const refTable = 'types_activities';
const tableName = 'roles';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableLike(tableName,refTable);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`DROP TABLE ${tableName} CASCADE`);
}
