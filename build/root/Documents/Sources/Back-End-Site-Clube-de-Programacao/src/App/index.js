"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const Routes_1 = require("../Routes");
class App {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        this.port = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '8080');
        this.startMiddlewares();
        this.startRoutes();
    }
    static getInstance() {
        if (!this.instance) {
            return new App();
        }
        return this.instance;
    }
    // Should load needed middlaware like auth, database-connection e other services!
    startMiddlewares() {
        this.app.use(express_1.default.json());
    }
    // Call Main Router Constructor;
    startRoutes() {
        new Routes_1.MainRouter(this.app);
    }
    // start the HTTP server listening on the port provaded in constructor or by ENV_VAR;
    start() {
        this.server.listen(this.port, () => {
            console.log(`App running in ${this.port}`);
        });
    }
}
exports.App = App;
