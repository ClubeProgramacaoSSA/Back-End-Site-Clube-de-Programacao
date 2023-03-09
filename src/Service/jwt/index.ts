import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { LoginResponseType,MemberJwtPayload } from '../../Modules/auth/interfaces';
import jwt from 'jsonwebtoken';
import { env } from '../../Env';
const { APP_SECRET } = env;

function generateAccessToken(payload: string | object | Buffer) {
    return jwt.sign( payload, APP_SECRET, {
        expiresIn:'30d'
    });
}

function verifyAccessTokenToMember <T = MemberJwtPayload>( token: string ){
    try {
        const member = <T>jwt.verify(token,APP_SECRET);
        
        return member;
    } catch (err) {
        return;
    }
}


function verifyMemberTokenMiddleware(req:Request,res:Response,next:NextFunction) {
    let token = req.headers.authorization;
    
    // Remember to create ununthorized error instance;
    // Unauthorized ! 
    if(!token) return next(new Error('Unauthorized'));

    token = token.split(' ')[1]; // "Bearer ..restOfTheToken";

    const member = verifyAccessTokenToMember(token);  

    if(!member) return next(new Error('Unauthorized'));

    return next()
}

export {
    generateAccessToken,
    verifyAccessTokenToMember,
    verifyMemberTokenMiddleware
}