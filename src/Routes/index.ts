import { Router, IRouter, Application } from 'express';
import { Route } from '../Models';
import { testRouter } from '../modules/Test/routes';
import { projectRouter } from '../modules/projects/routes';
import { teamRouter } from '../modules/team/routes';
import { tournamentRouter } from '../modules/tournament/routes';
import { memberRouter } from '../modules/member/routes';
import { routeNotFound } from '../Middlewares/notFound';
import { errorHandler } from '../Middlewares/errorHandling';

import cors from 'cors';

export class MainRouter implements Route {
    private router: IRouter;
    private app: Application;

    constructor(app: Application) {
        this.router = Router()
        this.app = app;
        this.initRoutes();
    }

    // Loads Routes in the app!~
    public initRoutes() {
        console.log(`[${process.pid}-MainRouter]: Starting Routes...`)
        this.app.use( this.initRoute() );
    }

    // add the other routes right here!
    public initRoute() {
        this.router.get('/', (req, res) => res.json({ message:'Bem-Vindo a API do Clube de Programação', hasQuack: false }));
        
        this.router.use("/test", testRouter.initRoute());
        this.router.use("/projects", projectRouter.initRoute());
        this.router.use('/member', memberRouter.initRoute());
        this.router.use('/team', teamRouter.initRoute());
        this.router.use('/tournament', tournamentRouter.initRoute());

        // this.router.get('*',(req,res) => {
        //     res.send(404).json({message: 'Sem Rota com essa URI'})
        // })
        return this.router;
    }
}
