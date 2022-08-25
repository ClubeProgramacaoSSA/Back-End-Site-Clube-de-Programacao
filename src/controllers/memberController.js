import { executeQuerySql } from '../service/postgre.js' ;
import bcrypt from 'bcrypt' ;
import jwt from 'jsonwebtoken' ;

export const deleteMember = async (req, res, next) => {
    const id_member = req.params.id_membro;
    try{
        const responseData = await executeQuerySql(
            "DELETE FROM TB_MEMBRO WHERE ID_MEMBRO = $1" , [id_member]);
        return res.status(200).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

export const postLogin = async (req, res, next) => {
    const query = `SELECT * FROM TB_membro WHERE login = $1`;
    try{
        const responseData = await executeQuerySql(query , [req.body.login]);
      
            if(responseData.rows.length < 1){return res.status(401).send({mensagem: 'Falha na autenticacao'})};

            bcrypt.compare(req.body.senha, responseData.rows[0].senha, (err, result) => {
                
                if(err){
                    return res.status(401).send({mensagem: 'Falha na autenticacao'})
                }
                if(result){ 
                    const token = jwt.sign({
                            login: responseData.rows[0].login,
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );

                    return res.status(200).send({
                        mensagem: 'Autenticado com sucesso',
                        token: token
                    })
                }

                return res.status(401).send({mensagem: 'Falha na autenticacao'})
            });     

    }catch(error){
        return res.status(500).send({error: error});
    }
}

