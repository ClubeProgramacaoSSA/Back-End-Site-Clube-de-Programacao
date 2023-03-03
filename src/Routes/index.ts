import { Router, IRouter, Application } from 'express';
import { Route } from '../Models';
import { testRouter } from '../Modules/Test/routes';
import { memberRouter } from '../Modules/member/routes';
import { routeNotFound } from '../Middlewares/notFound';
import { errorHandler } from '../Middlewares/errorHandling';

import cors from 'cors';

export class MainRouter implements Route {
    private router = Router();
    private app: Application;

    constructor(app: Application) {
        this.app = app;
        this.initRoutes();
    }

    // Loads Routes in the app!~
    public initRoutes() {
        console.log(`[${process.pid}-${MainRouter.name}]: Starting Routes...`);
        this.app.use( this.initRoute() );
    }

    // add the other routes right here!
    public initRoute() {
        this.router.get('/', (req, res) => res.json({ message:'Bem-Vindo a API do Clube de Programação', hasQuack: false }));
        
        this.router.use("/member", memberRouter.initRoute() );
        this.router.use("/test", testRouter.initRoute() );

        return this.router;
    }
}
