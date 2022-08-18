
import { executeQuerySql } from '../service/postgre.js';



export const getTeams = async (req, res, next) => {
    try{
        const responseData = await executeQuerySql("SELECT * FROM TB_EQUIPE;");
        return res.status(200).send({response: responseData.rows});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

export const getTeam = async (req, res, next) => {
    const id_team = req.params.id_equipe;
    try {
        const responseData = await executeQuerySql(
            "SELECT * FROM TB_EQUIPE WHERE ID_EQUIPE = $1", 
            [id_team]);
        return res.status(200).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

export const postTeam = async (req, res, next) => {
    try{
        const responseData = await executeQuerySql(

            "INSERT INTO TB_equipe (ID_equipe, nome, capitao, DT_criacao) VALUES ($1, $2, $3, $4)", 
            [req.body.ID_equipe, req.body.nome, req.body.capitao, req.body.DT_criacao]);

        return res.status(200).send({response: responseData.rows});
    }catch(error){
        return res.status(500).send({error: error});
    }
};
