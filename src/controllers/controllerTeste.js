import { executeQuerySql } from '../service/postgre.js';

export const getTeste = async (req, res, next) => {
    try{
        const responseData = await executeQuerySql("SELECT * FROM tb_assunto;");
        res.status(200).send({resp: responseData.rows});
    }catch(error){
        res.status(500).send({error: error});
    }
}