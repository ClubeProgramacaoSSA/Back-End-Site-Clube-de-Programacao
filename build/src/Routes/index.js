"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const Test_1 = require("../Routes/Test");
class MainRouter {
    constructor(app) {
        this.router = (0, express_1.Router)();
        this.app = app;
        this.initRoutes();
    }
    // Loads Routes in the app!
    initRoutes() {
        console.log(`[${process.pid}-MainRouter]: Starting Routes...`);
        this.app.use(this.initRoute());
    }
    // add the other routes right here!
    initRoute() {
        this.router.get('/', (req, res) => res.json({ id: 1, message: "Hello Broda" }));
        this.router.use(Test_1.testRouter.initRoute());
        return this.router;
    }
}
exports.MainRouter = MainRouter;
