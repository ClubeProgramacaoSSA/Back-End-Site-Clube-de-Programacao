import 'dotenv/config';
import { knex } from 'knex';
import knexConfig from '../../knexfile';

const NODE_ENV = process.env.NODE_ENV;

if(!NODE_ENV) throw Error('No env type selected!')

const getKnexConfig = () => console.log( knexConfig[ NODE_ENV ] );
const connection = knex( knexConfig[ NODE_ENV ] );

export {
    connection,
    getKnexConfig
}
