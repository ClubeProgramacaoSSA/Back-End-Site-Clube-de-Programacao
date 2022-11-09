import { Router, IRouter,Application } from 'express';
import { Route } from '../Models';
import { testRouter } from '../modules/Test/routes';

import { teamRouter } from '../modules/Team/routes/index';
import { tournamentRouter } from '../modules/tournament/routes/index';
import { memberRouter } from '../modules/Member/routes/index';

export class MainRouter implements Route {
    router: IRouter;
    app: Application;

    constructor(app:Application){
        this.app = app;
        this.router = Router();
        
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
		this.router.use('/test',testRouter.initRoute() ); 
        
        this.router.use('/team',teamRouter.initRoute());
        this.router.use('/tournament',tournamentRouter.initRoute());
        this.router.use('/member', memberRouter.initRoute());   
        
		return this.router;
    }
}
