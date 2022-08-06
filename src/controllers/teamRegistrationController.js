const postgre = require('../postgre');

exports.postTeam = async (req, res, next) => {
    try{
        const responseData = await postgre.executeQuerySql(

            "INSERT INTO TB_equipe (ID_equipe, nome, capitao, DT_criacao) VALUES ($1, $2, $3, $4)", 
            [req.body.ID_equipe, req.body.nome, req.body.capitao, req.body.DT_criacao]);

        return res.status(200).send({response: responseData.rows});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

