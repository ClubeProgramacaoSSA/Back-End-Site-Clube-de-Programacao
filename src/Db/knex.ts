import 'dotenv/config';
import { knex } from 'knex';
import knexConfig from '../../knexfile';

const TYPE_ENV = process.env.TYPE_ENV;

if(!TYPE_ENV) throw Error('No env type selected!')

export const foo = () => console.log( knexConfig[ TYPE_ENV ] );
export const connection = knex( knexConfig[ TYPE_ENV ] );
