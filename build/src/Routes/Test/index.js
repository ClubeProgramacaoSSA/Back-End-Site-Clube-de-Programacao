"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const express_1 = require("express");
const knex_1 = require("../../Db/knex");
class TestRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.tableName = 'tb_test';
    }
    initRoute() {
        this.router.get('/test', (req, res) => {
            (0, knex_1.connection)(this.tableName)
                .select('*')
                .then(testJson => res.status(200).json(testJson))
                .catch(err => res.status(500).json({ errMessage: err.message }));
        });
        return this.router;
    }
}
exports.testRouter = new TestRoutes();
