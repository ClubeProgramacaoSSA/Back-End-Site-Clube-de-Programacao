import 'dotenv/config';
import { knex } from 'knex';
import knexConfig from '../../knexfile';

let connection = null;
const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) throw Error('No env type selected!')

const getKnexConfig = () => console.log(knexConfig[NODE_ENV]);
try {
    connection = knex(knexConfig[NODE_ENV]);
} catch (err) {}

if(!connection) throw new Error('Sem Conexão com o database');

export {
    connection,
    getKnexConfig
}
