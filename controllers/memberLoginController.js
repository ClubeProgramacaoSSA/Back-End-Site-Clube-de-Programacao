const postgre = require('../postgre');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postLogin = async (req, res, next) => {
    const query = `SELECT * FROM TB_membro WHERE login = $1`;
    try{
        const responseData = await postgre.executeQuerySql(query , [req.body.login]);
      
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