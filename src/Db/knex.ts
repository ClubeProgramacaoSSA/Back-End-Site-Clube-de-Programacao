import 'dotenv/config';
import { knex } from 'knex';
import knexConfig from '../../knexfile';

const NODE_ENV = process.env.TYPE_ENV;

// if(!NODE_ENV) throw Error('No env type selected!')

export const foo = () => console.log( knexConfig[ "development" ] );
export const connection = knex( knexConfig[ "development" ] );
