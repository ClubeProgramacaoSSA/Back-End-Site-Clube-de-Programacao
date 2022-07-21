const postgre = require('../postgre');

exports.getTeste = async (req, res, next) => {
    try{
        const responseData = await postgre.executeQuerySql("SELECT * FROM tb_exem;");
        res.status(200).send({resp: responseData.rows});
    }catch(error){
        res.status(500).send({error: error});
    }
}