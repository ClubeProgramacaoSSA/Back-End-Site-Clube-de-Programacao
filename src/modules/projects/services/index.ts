import { connection } from '../../../Db/knex';


export class ProjectService {
    private tableName:string;

	constructor(){
		this.tableName = 'tb_projeto';
	}

    public getAll() { //Get all members
		return new Promise((resolve,reject) => {
			connection(this.tableName)

            // Join with tb_tipo_projeto
            .join('tb_tipo_projeto', 'tb_projeto.id_tipo_projeto', '=', 'tb_tipo_projeto.id_tipo_projeto')    
            
            // Join with TB_imagem_projeto
            .join('tb_imagem', 'tb_imagem.id_imagem', '=', 'tb_projeto.id_imagem_capa')
            
			// Join with tb_assunto_projeto
            // .join('tb_assunto_projeto', 'tb_projeto.id_projeto', '=', 'tb_assunto_projeto.id_projeto')
            // .join('tb_assunto', 'tb_assunto_projeto.id_assunto', '=', 'tb_assunto.id_assunto')   
			
			//Join with tb_lider
			.join('tb_lider', 'tb_lider.id_lider', '=', 'tb_projeto.id_lider')
            
			.select('tb_projeto.descricao_projeto', 'tb_imagem.descricao_imagem', 'tb_projeto.dt_inicio', 'tb_projeto.dt_termino_previsto', 'tb_projeto.dt_termino', 'tb_projeto.nome_projeto', 'tb_projeto.url_github', 'tb_tipo_projeto.tipo', 'tb_imagem.nome_imagem', 'tb_imagem.dt_imagem', 'tb_imagem.url_imagem', 'tb_lider.nome_lider')
			
			.select('*')

			.then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );
		})
	};

	public getEspecific( idProject: number ){ //Get a especific project
		return new Promise((resolve,reject) => {
			connection(this.tableName)

			// Join with tb_tipo_projeto
            .join('tb_tipo_projeto', 'tb_projeto.id_tipo_projeto', '=', 'tb_tipo_projeto.id_tipo_projeto')    
            
            // Join with TB_imagem_projeto
            .join('tb_imagem', 'tb_imagem.id_imagem', '=', 'tb_projeto.id_imagem_capa')
            
			// Join with tb_assunto_projeto
            // .join('tb_assunto_projeto', 'tb_projeto.id_projeto', '=', 'tb_assunto_projeto.id_projeto')
            // .join('tb_assunto', 'tb_assunto_projeto.id_assunto', '=', 'tb_assunto.id_assunto')   
			
			//Join with tb_lider
			.join('tb_lider', 'tb_lider.id_lider', '=', 'tb_projeto.id_lider')
            
			.select('tb_projeto.descricao_projeto', 'tb_imagem.descricao_imagem', 'tb_projeto.dt_inicio', 'tb_projeto.dt_termino_previsto', 'tb_projeto.dt_termino', 'tb_projeto.nome_projeto', 'tb_projeto.url_github', 'tb_tipo_projeto.tipo', 'tb_imagem.nome_imagem', 'tb_imagem.dt_imagem', 'tb_imagem.url_imagem', 'tb_lider.nome_lider')
			
			//.select('*')
			.where('tb_projeto.id_projeto', idProject)

			.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
		})
	};

	public postEspecific(project: any){ //Insert a especific project
		return new Promise((resolve,reject) => {
			connection(this.tableName)
			.into(this.tableName)
			.insert(				
				{ 	
					id_lider: project.id_lider,
					id_imagem_capa: project.id_imagem_capa,
					id_tipo_projeto: project.id_tipo_projeto,
					descricao_projeto: project.descricao_projeto,
					dt_inicio: project.dt_inicio,
					dt_termino_previsto: project.DT_termino_previsto,
					dt_termino: project.dt_termino,
					nome_projeto: project.nome_projeto,
					ponto_jpq_maximo: project.ponto_jpq_maximo,
					url_github: project.URL_github
				}				
			)
			

			.then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );

		})
	};

	public updateEspecific(project: any){ //Update a especific member
		return new Promise((resolve,reject) => {
			
			connection(this.tableName)
			.where('id_projeto', project.id_projeto)
			.update({
				
				id_lider: project.id_lider,
				id_imagem_capa: project.id_imagem_capa,
				id_tipo_projeto: project.id_tipo_projeto,
				descricao_projeto: project.descricao_projeto,
				dt_inicio: project.dt_inicio,
				dt_termino_previsto: project.DT_termino_previsto,
				dt_termino: project.dt_termino,
				nome_projeto: project.nome_projeto,
				ponto_jpq_maximo: project.ponto_jpq_maximo,
				url_github: project.URL_github
				
			})		
			
			.then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );
		})	
	};
    
    public getPerType(projectType: string){ //Get project per type	
        return new Promise((resolve,reject) => {
            connection(this.tableName)

            // Join with tb_tipo_projeto
            .join('tb_tipo_projeto', 'tb_projeto.id_tipo_projeto', '=', 'tb_tipo_projeto.id_tipo_projeto')    
            
            // Join with TB_imagem_projeto
            .join('tb_imagem', 'tb_imagem.id_imagem', '=', 'tb_projeto.id_imagem_capa')
            
			// Join with tb_assunto_projeto
            // .join('tb_assunto_projeto', 'tb_projeto.id_projeto', '=', 'tb_assunto_projeto.id_projeto')
            // .join('tb_assunto', 'tb_assunto_projeto.id_assunto', '=', 'tb_assunto.id_assunto')   
			
			//Join with tb_lider
			.join('tb_lider', 'tb_lider.id_lider', '=', 'tb_projeto.id_lider')
            
			.select('tb_projeto.descricao_projeto', 'tb_imagem.descricao_imagem', 'tb_projeto.dt_inicio', 'tb_projeto.dt_termino_previsto', 'tb_projeto.dt_termino', 'tb_projeto.nome_projeto', 'tb_projeto.url_github', 'tb_tipo_projeto.tipo', 'tb_imagem.nome_imagem', 'tb_imagem.dt_imagem', 'tb_imagem.url_imagem', 'tb_lider.nome_lider')
			
			//.select('*')
            
            .whereRaw(`UPPER(tb_tipo_projeto.tipo) LIKE ?`, `${projectType.toUpperCase()}`)

			.then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );
        
		})
	};

	public deleteEspecific(idProject: number){ //Delete a especific member
		return new Promise((resolve,reject) => {
			connection(this.tableName)
			.where('id_projeto', idProject)
			.del()

			.then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );
		})
	};
}


