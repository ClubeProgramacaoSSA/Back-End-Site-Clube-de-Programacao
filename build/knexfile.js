"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const path_1 = require("path");
const knexConfig = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWD
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: (0, path_1.join)(__dirname, 'src', 'Db', 'migrations'),
        },
        seeds: {
            directory: (0, path_1.join)(__dirname, 'src', 'Db', 'seeds'),
        }
    },
    production: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWD
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: (0, path_1.join)(__dirname, 'src', 'Db', 'migrations'),
        },
        seeds: {
            directory: (0, path_1.join)(__dirname, 'src', 'Db', 'seeds'),
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
exports.default = knexConfig;
