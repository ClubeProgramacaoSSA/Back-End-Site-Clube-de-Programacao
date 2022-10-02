import 'dotenv/config';
import type { Knex } from "knex";
import { join } from 'path';
// Update with your config settings.
export type DB_ENV_TYPE = {
  production?: Knex.Config, 
  development: Knex.Config, 
  staging?: Knex.Config 
}

const knexConfig: {[key:string]: Knex.Config} = {
  development: {
    client: 'pg',
    connection: {
      host:process.env.DB_HOST,
      database:process.env.DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWD
    },
    migrations: {
      tableName:'knex_migrations',
      directory:join(__dirname,'src','Db','migrations'),
    },
    seeds: {
      directory: join(__dirname,'src','Db','seeds'),
    }
  }
  /*
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }*/

};

//AMOR

export default knexConfig;