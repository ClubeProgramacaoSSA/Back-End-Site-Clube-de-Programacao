import express,{ Application } from 'express';
import { createServer,Server } from 'http';
import { MainRouter } from '../Routes';
import cors from 'cors'
import { routeNotFound } from '../Middlewares/notFound';
import { errorHandler } from '../Middlewares/errorHandling';

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
        this.port = parseInt( process.env.PORT ?? '8080' );
        this.startMiddlewares();
        this.startRoutes();
        this.startExtraMiddlewares();
    }
    // Should load needed middlaware like auth, database-connection e other services!
    private startMiddlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    private startExtraMiddlewares(){
        this.app.use(routeNotFound);
        this.app.use(errorHandler);
    }
    // Call Main Router Constructor;
    private startRoutes(){
        new MainRouter( this.app );
    }
    // start the HTTP server listening on the port provaded in constructor or by ENV_VAR;
    public start () {
        return this.server.listen( this.port,() => {
            console.log(`App running in ${this.port}`);
        });
    }

}


