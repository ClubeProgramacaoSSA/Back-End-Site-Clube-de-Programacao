import 'dotenv/config';
import jwt from 'jsonwebtoken';

const APP_SECRET = process.env.APP_SECRET;

if(!APP_SECRET) { throw new Error('NO APP_SECRET ENV VARIABLE SET!'); }

function generateAccessToken(payload: string | object | Buffer, secret:string) {
    return jwt.sign( payload, secret, {
        expiresIn:'30d'
    });
}

function verifyAccessToken( token: string, secret:string,cb: jwt.VerifyCallback<string | jwt.JwtPayload> | undefined) {
    return jwt.verify(token, secret, cb);
}

export {
    generateAccessToken,
    verifyAccessToken,
    APP_SECRET
}