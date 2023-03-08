import { Request,Response,NextFunction } from "express";

// should implement another errors instances for different treatement
export function errorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    return res.status(500).json({ err: 'Problema inexperado aconteceu, tente denovo!' })
}