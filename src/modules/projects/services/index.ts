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
            .join('tb_imagem_projeto', 'tb_projeto.id_projeto', '=', 'tb_imagem_projeto.id_projeto')
            .join('tb_imagem', 'tb_imagem_projeto.id_imagem', '=', 'tb_imagem.id_imagem')
            
			// Join with tb_assunto_projeto
            .join('tb_assunto_projeto', 'tb_projeto.id_projeto', '=', 'tb_assunto_projeto.id_projeto')
            .join('tb_assunto', 'tb_assunto_projeto.id_assunto', '=', 'tb_assunto.id_assunto')   
			
			//Join with tb_lider
			.join('tb_lider', 'tb_lider.id_lider', '=', 'tb_projeto.id_lider')
            
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
			.join('tb_imagem_projeto', 'tb_projeto.id_projeto', '=', 'tb_imagem_projeto.id_projeto')
			.join('tb_imagem', 'tb_imagem_projeto.id_imagem', '=', 'tb_imagem.id_imagem')
			
			// Join with tb_assunto_projeto 
			.join('tb_assunto_projeto', 'tb_projeto.id_projeto', '=', 'tb_assunto_projeto.id_projeto')
			.join('tb_assunto', 'tb_assunto_projeto.id_assunto', '=', 'tb_assunto.id_assunto')   
			
			//Join with tb_lider
			.join('tb_lider', 'tb_lider.id_lider', '=', 'tb_projeto.id_lider')           
            
			.select('*')
			.where('tb_projeto.id_projeto', idProject)

			.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
		})
	};

	public postEspecific(project: any){ //Delete a especific project
		return new Promise((resolve,reject) => {
			connection(this.tableName)
			.insert(				
				{ 	
					id_lider: project.lider,
					id_imagem: project.id_imagem, 
					id_tipo_projeto: project.id_tipo,
					descricao: project.descricao,
					DT_inicio: project.dt_inicio,
					DT_finalizacao_prevista: project.dt_finalizacao_prevista,
					nome: project.body.nome,
					ponto_jpq_maximo: project.ponto_jpq_maximo,
					URL_github:project.body.url_github
				}				
			)
			.into(this.tableName)

			.then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );

		})
	};

	public updateEspecific(project: any){ //Delete a especific member

		return new Promise((resolve,reject) => {
			connection(this.tableName)
			.update({
				lider: project.lider,
				id_imagem: project.id_imagem, 
				id_tipo_projeto: project.id_tipo,
				descricao: project.descricao,
				DT_inicio: project.dt_inicio,
				DT_finalizacao_prevista: project.dt_finalizacao_prevista,
				nome: project.body.nome,
				ponto_jpq_maximo: project.ponto_jpq_maximo,
				URL_github:project.body.url_github
			})	

			.where('id_project', project.id_project)
			
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
            .join('tb_imagem_projeto', 'tb_projeto.id_projeto', '=', 'tb_imagem_projeto.id_projeto')
            .join('tb_imagem', 'tb_imagem_projeto.id_imagem', '=', 'tb_imagem.id_imagem')
            
			// Join with tb_assunto_projeto 
            .join('tb_assunto_projeto', 'tb_projeto.id_projeto', '=', 'tb_assunto_projeto.id_projeto')
            .join('tb_assunto', 'tb_assunto_projeto.id_assunto', '=', 'tb_assunto.id_assunto')   
			
			//Join with tb_lider
			.join('tb_lider', 'tb_lider.id_lider', '=', 'tb_projeto.id_lider')
            
			.select('*')
            
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


