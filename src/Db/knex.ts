import { knex } from 'knex';
import knexConfig from '../../knexfile';
import { env } from '../Env';

const dbConfig = knexConfig[ env.APP_ENV ];

const connection = knex( dbConfig );
const getKnexConfig = () => console.log( dbConfig );

export {
    connection,
    getKnexConfig
}
