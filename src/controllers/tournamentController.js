import { executeQuerySql } from '../service/postgre.js';

export const getTeamInTournament = async (req, res, next) => {
    const objTeamInTournament = {
        id_team: req.body.id_time,
        id_tournament: req.body.id_torneio        
    }
    const query = "SELECT \
	    EQUIPE.capitao,  \
	    EQUIPE.nome, \
	    TORNEIO.id_torneio, \
	    TORNEIO.colocacao  \
        FROM TB_EQUIPE AS EQUIPE \
        JOIN TB_EQUIPE_TORNEIO AS TORNEIO \
    ON EQUIPE.id_equipe = TORNEIO.id_equipe \
    WHERE EQUIPE.id_equipe = $1 AND TORNEIO.id_torneio = $2;"
    try{
        const responseData = await executeQuerySql(query, [objTeamInTournament.id_team, objTeamInTournament.id_tournament]);
        return res.status(200).send({response: responseData.rows,quack:req.quack });
    }catch(error){
        return res.status(500).send({error: error});
    }
}
