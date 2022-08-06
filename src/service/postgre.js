import pg from 'pg';

const poolObj = {
    user: process.env.POSTGRE_USER,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DATABASE,
    password: process.env.POSTGRE_PASSWORD,
    port: process.env.POSTGRE_PORT
}
console.log(poolObj);

const pool = new pg.Pool(poolObj);
let PG_CLIENT = null;
let doneFn = null;

//Return's a client to use query;
export const createClientConnection = () => {
    return new Promise((resolve, reject) => {
        pool.connect((error, client, done)=> {
            if(error){
                reject(error);
                done();
            }

            doneFn = done;
            PG_CLIENT = client;
            return resolve(client);
        })
    })
}

export function executeQuerySql(query, params=[]){
    if(!PG_CLIENT) {
        throw new Error('No client!!'); 
    }

    return new Promise((resolve, reject) => {
        
        PG_CLIENT.query(query, params, (errorClient, response) => {
            if(errorClient){
                reject(errorClient);
            }
                    
            resolve(response);
        });
    })
          
}
export const killConnection = () => {
    if(!doneFn) throw new Error('No Connection!')
    return doneFn();
}