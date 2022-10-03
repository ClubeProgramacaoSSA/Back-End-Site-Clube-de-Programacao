"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const App_1 = require("./App");
const knex_1 = require("./Db/knex");
(0, knex_1.foo)(); // Replys whats config db is using   
const app = App_1.App.getInstance();
app.start();
