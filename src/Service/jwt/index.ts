import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { env } from '../../Env';
const { APP_SECRET } = env;

function generateAccessToken(payload: string | object | Buffer) {
    return jwt.sign( payload, APP_SECRET, {
        expiresIn:'30d'
    });
}

function verifyAccessToken( token: string,cb: jwt.VerifyCallback<string | jwt.JwtPayload> | undefined) {
    return jwt.verify(token, APP_SECRET, cb);
}

export {
    generateAccessToken,
    verifyAccessToken,
}