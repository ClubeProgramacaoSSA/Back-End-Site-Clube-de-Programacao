import { IRouter } from "express";

export interface Route {
    router: IRouter;
    services?: { [key:string]: any };
    initRoute: () => IRouter; 
}
