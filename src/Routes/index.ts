import { Router, IRouter,Application } from 'express';
import { Route } from '../Models';
import { testRouter } from '../modules/Test/routes/index';
import { projectRouter } from '../modules/projects/routes/index';

import { teamRouter } from '../modules/team/routes/index';
import { tournamentRouter } from '../modules/tournament/routes/index';
import { memberRouter } from '../modules/member/routes/index';

import cors from 'cors';

export class MainRouter implements Route {
    router = Router();

    app:Application;

    constructor(app:Application){
        this.app = app;
        this.router.use( cors() );
        this.initRoutes();
    }

    // Loads Routes in the app!
    public initRoutes () {
        console.log(`[${process.pid}-MainRouter]: Starting Routes...`)
        this.app.use( this.initRoute() );
    }

    // add the other routes right here!
    public initRoute() {
		this.router.get('/',(req,res) => res.json({ id:1, message:"Hello Broda"}));
		this.router.use("/test", testRouter.initRoute()); 

        this.router.use("/projects", projectRouter.initRoute());
        this.router.use('/member', memberRouter.initRoute());  
        this.router.use('/team', teamRouter.initRoute());
        this.router.use('/tournament', tournamentRouter.initRoute());
        
		return this.router;
    }
}
