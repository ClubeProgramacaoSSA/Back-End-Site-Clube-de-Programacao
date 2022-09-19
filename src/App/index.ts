import express,{ Application } from 'express';
import { createServer,Server } from 'http';
import { config } from 'dotenv';
import { threadId } from 'worker_threads';

export class App {
    private static instance: App;
    private app: Application;
    private server: Server;
    private port: number;

    static getInstance() {
        if(!this.instance) {
            return new App();
        }
        return this.instance;
    }

    private constructor () {
        this.app = express();
        this.server = createServer( this.app );
        config();
        this.port = parseInt( process.env.PORT ?? '8080' );
        this.startMiddlewares();
        this.startRoutes();
    }
    private startMiddlewares(){
    }
    private startRoutes(){
    }
    public start () {
        //env set;
        this.server.listen( this.port,() => {
            console.log(`App running in ${this.port}`);
        });
    }

}


