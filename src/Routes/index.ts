import { Router, IRouter,Application } from 'express';
import { Route } from '../models';

class MainRouter implements Route {
    router = Router();
    app:Application;

    constructor(app:Application){
        this.app = app;
    }
    public initRoutes () {
        this.app.use( this.initRoute() );
    }
    public initRoute() {

        return this.router;
    }
}