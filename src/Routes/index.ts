import { Router, IRouter,Application } from 'express';
import { Route } from '../Models';
import { testRouter } from '../Routes/Test';

import { teamRouter } from '../modules/team/routes/index';
import { tournamentRouter } from '../modules/tournament/routes/index';
import { memberRouter } from '../modules/member/routes/index';

export class MainRouter implements Route {
    router = Router();
    app:Application;

    constructor(app:Application){
        this.app = app;
        this.initRoutes();
    }
    // Loads Routes in the app!
    public initRoutes () {
        console.log(`[${process.pid}-MainRouter]: Starting Routes...`)
        this.app.use( this.initRoute());
    }
    // add the other routes right here!
    public initRoute() {
		this.router.get('/',(req,res) => res.json({ id:1, message:"Hello Broda"}));
		this.router.use(testRouter.initRoute());
        
        this.router.use(teamRouter.initRoute());
        this.router.use(tournamentRouter.initRoute());
        this.router.use(memberRouter.initRoute());   
        
		return this.router;
    }
}
