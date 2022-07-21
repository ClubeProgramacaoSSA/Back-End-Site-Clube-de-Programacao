const {Pool} = require('pg');

const pool = new Pool({
    user: process.env.POSTGRE_USER,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DATABASE,
    password: process.env.POSTGRE_PASSWORD,
    port: process.env.POSTGRE_PORT
});

function executeQuerySql(query, params=[]){
    return new Promise((resolve, reject) => {
        pool.connect((error, client, done)=> {
            if(error){
                reject(error);
            }else{
                client.query(query, params, (errorClient, response) => {
                    done();
                    if(errorClient){
                        reject(errorClient);
                    }else{
                        resolve(response);
                    }
    
                });
            }
            
        });
    });
}
exports.executeQuerySql = executeQuerySql;
