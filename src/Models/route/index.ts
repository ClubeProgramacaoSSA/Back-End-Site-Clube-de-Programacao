import { IRouter } from "express";

export interface Route {
    router: IRouter;
    initRoute: () => IRouter; 
}