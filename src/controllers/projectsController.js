import { executeQuerySql } from '../service/postgre';

export const getProjects = async (req, res, next) => { //Pega todos os projetos
    try{
        const responseData = await executeQuerySql("SELECT * FROM TB_projeto;");
        return res.status(200).send({response: responseData.rows});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

export const getProject = async (req, res, next) => { //Pega apenas 1 projeto.
    const id_project = req.params.id_project;
    try {
        const responseData = await executeQuerySql(
            "SELECT * FROM TB_projeto WHERE ID_project = $1", 
            [id_project]);
        return res.status(200).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

//INSERT INTO table_name(column1, column2, …)
//VALUES (value1, value2, …);
export const postProject = async (req, res, next) => { // Cadastro de Projetos.
    const {ID_projeto, 
        ID_lider, 
        ID_imagem, 
        descricao, 
        DT_inicio, 
        DT_finalizacao_prevista, 
        url_github
    } = req.body;

    try {
        const responseData = await executeQuerySql(
            "INSERT INTO TB_projeto(ID_projeto, ID_lider, ID_imagem, descricao, DT_inicio, DT_finalizacao_prevista, url_github) VALUES($1, $1, $2, $3, $4, $5, $6, $7);", 
            [ID_projeto,ID_lider, ID_imagem, descricao, DT_inicio, DT_finalizacao_prevista, url_github] );
        return res.status(200).send({response: responseData.rows[0]});
        
    }catch(error){
        return res.status(500).send({error: error});
    }
}

//UPDATE table_name
//SET column1 = value1, column2 = value2...., columnN = valueN
//WHERE [condition];

export const putProject = async (req, res, next) => { // Edição de projetos.
    const {ID_projeto, 
        ID_lider , 
        ID_imagem, 
        descricao, 
        DT_inicio, 
        DT_finalizacao_prevista, 
        url_github
    } = req.body; 

    try {
        const responseData = await executeQuerySql(
            "UPDATE TB_projeto SET ID_projeto = $1, ID_imagem = $2, descricao = $3, DT_inicio = $4, DT_finalizacao_prevista = $5, url_github = $6 WHERE ID_projeto = $1;", 
            [ID_projeto,ID_lider, ID_imagem, descricao, DT_inicio, DT_finalizacao_prevista, url_github]);
        return res.status(200).send({response: responseData.rows[0]});
    }catch(error){
        return res.status(500).send({error: error});
    }
}

