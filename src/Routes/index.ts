import { Router, IRouter,Application } from 'express';
import { Route } from '../Models';

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
        this.app.use( this.initRoute() );
    }
    // add the other routes right here!
    public initRoute() {
        this.router.use('/',(req,res) => res.json({id:1,message:"Hello Broda"}))
        
        return this.router;
    }
}