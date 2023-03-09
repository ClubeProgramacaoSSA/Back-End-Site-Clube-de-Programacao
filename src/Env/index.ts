import { config as configEnv } from 'dotenv';
import { resolve } from 'path';
type env = {
    APP_SECRET: string,
    APP_ENV: string,
    [key:string]: string | undefined
}
const { parsed: parsedEnv } = configEnv({
    path: resolve(__dirname,'../../.env'),
});

if (!parsedEnv) throw new Error('Error parsing environment');

const requiredEnv = {
    APP_SECRET: parsedEnv['APP_SECRET'] ?? undefined,
    APP_ENV: parsedEnv['APP_ENV'] ?? undefined,
}

const nullishFields:Array<[string, string | undefined]> = [];

Object.entries(requiredEnv).forEach(([key,value]) => {
    if(!value) nullishFields.push([key,value]);
});

// check for env variables that are missing
if(nullishFields.length) {
    if( nullishFields.length > 1 ) {
        throw new Error(`The environment variables ${nullishFields.forEach(([key,value],index) => { 
            if(index === nullishFields.length - 1) return key 
            
            return `${key}, `;
        })}`)
    }
}

export const env: env = {...parsedEnv,...requiredEnv};
