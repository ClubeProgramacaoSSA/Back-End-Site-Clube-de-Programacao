const postgre = require('../postgre');

exports.postMember = async (req,res) => {
    try{
        const {id_membro,id_foto_membro,id_instituicao_ensino,id_curso_instituicao,
                id_funcao,nome,genero,oficio,RA,DT_nascimento,
                DT_ingresso_faculdade,DT_ingresso_clube} = req.body;
        const {rows} = await postgre.executeQuerySql(
            "INSERT INTO TB_MEMBRO (id_membro,id_foto_membro,id_instituicao_ensino,\
            id_curso_instituicao,id_funcao,nome,genero,\
            oficio,RA,DT_nascimento,DT_ingresso_faculdade,DT_ingresso_clube)\
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
            [id_membro,id_foto_membro,id_instituicao_ensino,id_curso_instituicao,
                id_funcao,nome,genero,oficio,RA,DT_nascimento,
                DT_ingresso_faculdade,DT_ingresso_clube]
            );
        return res.status(201).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}


exports.putMember = async (req,res) =>{
    try{
        const id = parseInt(request.params.id_membro);
        const {id_membro,id_foto_membro,id_instituicao_ensino,id_curso_instituicao,
            id_funcao,nome,genero,login,oficio,RA,DT_nascimento,
            DT_ingresso_faculdade,DT_ingresso_clube,senha} = request.body;
        const {rows} = await postgre.executeQuerySql("UPDATE TB_MEMBRO SET\
        id_membro = $1,id_foto_membro = $2,id_instituicao_ensino = $3,\
            id_curso_instituicao = $4,id_funcao = $5 ,nome = $6,genero = $7,login = $8,\
            oficio = $9,RA = $10,DT_nascimento = $11,\
            DT_ingresso_faculdade = $12,DT_ingresso_clube = $13,senha = $14)",
            [id_membro,id_foto_membro,id_instituicao_ensino,id_curso_instituicao,
                id_funcao,nome,genero,login,oficio,RA,DT_nascimento,
                DT_ingresso_faculdade,DT_ingresso_clube,senha]
            );
        return res.status(200).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}





exports.getMembers = async (req, res) => {
    try{
        const responseData = await postgre.executeQuerySql("SELECT * FROM TB_MEMBRO;");
        return res.status(200).send({response: responseData.rows});
    }catch(error){
        return res.status(500).send({error: error});
    }
}
exports.getMember = async (req, res) => {
    const id_member = req.params.id_membro;
    try {
        const responseData = await postgre.executeQuerySql(
            "SELECT * FROM TB_MEMBRO WHERE ID_MEMBRO = $1", 
            [id_member]);
        return res.status(200).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}