const postgre = require('../postgre');

exports.deleteMember = async (req, res, next) => {
    const id_member = req.params.id_membro;
    try{
        const responseData = await postgre.executeQuerySql(
            "DELETE FROM TB_MEMBRO WHERE ID_MEMBRO = $1" , [id_member]);
        return res.status(200).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

