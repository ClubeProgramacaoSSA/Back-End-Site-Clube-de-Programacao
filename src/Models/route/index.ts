import { IRouter } from "express";

export interface Route {
    initRoute: () => IRouter; 
}
