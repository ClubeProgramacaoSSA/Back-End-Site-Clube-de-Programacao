import { Router } from 'express';
import { Route } from '../../../Models';
import { connection } from '../../../Db/knex';

class ProjectRoutes implements Route {
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'tb_projeto';
	}
	
	public initRoute() {
		
        this.router.get('/project',(req,res) => { //Get all Projects
			
			connection(this.tableName)
				.select('*')
                // Join with tb_equipe_projeto
                .join('tb_tipo_projeto', 'tb_projeto.id_tipo', '=', 'tb_tipo_projeto.id_tipo_projeto')    
                
                // Join with tb_imagem_projeto
                .join('tb_imagem_projeto', 'tb_projeto.id_projeto', '=', 'tb_imagem_projeto.id_projeto')
                .join('tb_imagem', 'tb_imagem_projeto.id_imagem', '=', 'tb_imagem.id_imagem')

                .then( testJson => res.status(200).json(testJson) )
                .catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.get('/project/:id_project',(req,res) => { //Get a especific project
			const id_project = req.params.id_project;
			
			connection(this.tableName)
				.select('*')
                // Join with tb_equipe_projeto
                .join('tb_tipo_projeto', 'tb_projeto.id_tipo', '=', 'tb_tipo_projeto.id_tipo_projeto')    
                
                // Join with tb_imagem_projeto
                .join('tb_imagem_projeto', 'tb_projeto.id_projeto', '=', 'tb_imagem_projeto.id_projeto')
                .join('tb_imagem', 'tb_imagem_projeto.id_imagem', '=', 'tb_imagem.id_imagem')

				.where('id_project', id_project)
				
                .then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.post('/project',(req,res) => { //Insert a new project in dataBase
			connection(this.tableName)
				.insert(				
					{ 	
                        lider: req.body.lider,
                        id_imagem: req.body.id_imagem, 
                        id_tipo: req.body.id_tipo,
                        descricao: req.body.descricao,
						dt_inicio: req.body.dt_inicio,
						dt_finalizacao_prevista: req.body.dt_finalizacao_prevista,
                        nome: req.body.nome,
                        url_github:req.body.url_github
                    }				
				)
				.into(this.tableName)

				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

        this.router.get('/project/:tipo_projeto',(req,res) => { //Get all Project per type
			const tipo_projeto = req.params.tipo_projeto;
			
            connection(this.tableName)
				.select('*')
                // Join with tb_equipe_projeto
                .join('tb_tipo_projeto', 'tb_projeto.id_tipo', '=', 'tb_tipo_projeto.id_tipo_projeto')    
                
                // Join with tb_imagem_projeto
                .join('tb_imagem_projeto', 'tb_projeto.id_projeto', '=', 'tb_imagem_projeto.id_projeto')
                .join('tb_imagem', 'tb_imagem_projeto.id_imagem', '=', 'tb_imagem.id_imagem')
                
                .whereRaw(`UPPER(tb_tipo_projeto.titulo) LIKE ?`, [`%${tipo_projeto}%`])

                .then( testJson => res.status(200).json(testJson) )
                .catch( err => res.status(500).json({ errMessage: err.message}));
		});

		return this.router;
	}
}

export const projectRouter = new ProjectRoutes();
