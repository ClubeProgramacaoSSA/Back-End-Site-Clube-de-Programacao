import 'dotenv/config';
import { knex } from 'knex';
import knexConfig from '../../knexfile';

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) throw Error('No Node Env selected!');

const dbConfig = knexConfig[NODE_ENV];

const connection = knex( dbConfig );
const getKnexConfig = () => console.log( dbConfig );

export {
    connection,
    getKnexConfig
}
