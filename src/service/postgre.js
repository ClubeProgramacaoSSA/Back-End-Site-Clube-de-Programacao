import pg from 'pg';

const poolObj = {
    user: process.env.POSTGRE_USER,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DATABASE,
    password: process.env.POSTGRE_PASSWORD,
    port: process.env.POSTGRE_PORT
}
console.log(poolObj)
const pool = new pg.Pool(poolObj);

export function executeQuerySql(query, params=[]){
    return new Promise((resolve, reject) => {
        pool.connect((error, client, done)=> {
            if(error){
                reject(error);
            }else{
                client.query(query, params, (errorClient, response) => {
                    if(errorClient){
                        reject(errorClient);
                    }
                    
                    resolve(response);
                    
                    done();
    
                });
            }
            
        });
    });
}
