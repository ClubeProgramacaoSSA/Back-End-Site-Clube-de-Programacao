"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.foo = void 0;
require("dotenv/config");
const knex_1 = require("knex");
const knexfile_1 = __importDefault(require("../../knexfile"));
const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV)
    throw Error('No env type selected!');
const foo = () => console.log(knexfile_1.default[NODE_ENV]);
exports.foo = foo;
exports.connection = (0, knex_1.knex)(knexfile_1.default[NODE_ENV]);
