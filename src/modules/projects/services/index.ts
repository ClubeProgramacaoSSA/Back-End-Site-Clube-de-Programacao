import { connection } from '../../../Db/knex';

export class ProjectService {
    private tableName:string;

	constructor(){
		this.tableName = 'tb_project';
	}

    public getAllProjects() { //Get all members
		return new Promise((resolve,reject) => {
			connection(this.tableName)
            // Join with tb_equipe_projeto
            .join('TB_tipo_projeto', 'TB_projeto.ID_tipo_projeto', '=', 'TB_tipo_projeto.ID_tipo_projeto')    
            
            // Join with TB_imagem_projeto
            .join('TB_imagem_projeto', 'TB_projeto.ID_projeto', '=', 'TB_imagem_projeto.ID_projeto')
            .join('TB_imagem', 'TB_imagem_projeto.ID_imagem', '=', 'TB_imagem.ID_imagem')
            // Join with TB_assunto_projeto 
            .join('TB_assunto_projeto', 'TB_projeto.ID_projeto', '=', 'TB_assunto_projeto.ID_projeto')
            .join('TB_assunto', 'TB_assunto_projeto.ID_assunto', '=', 'TB_assunto.ID_assunto')            
            .select('*')
		})
	};

	public getEspecificProject( idProject: number ){ //Get a especific project
		return new Promise((resolve,reject) => {
			connection(this.tableName)
			// Join with tb_equipe_projeto
            .join('TB_tipo_projeto', 'TB_projeto.ID_tipo_projeto', '=', 'TB_tipo_projeto.ID_tipo_projeto')    
            
            // Join with TB_imagem_projeto
            .join('TB_imagem_projeto', 'TB_projeto.ID_projeto', '=', 'TB_imagem_projeto.ID_projeto')
            .join('TB_imagem', 'TB_imagem_projeto.ID_imagem', '=', 'TB_imagem.ID_imagem')
            
            // Join with TB_assunto_projeto 
            .join('TB_assunto_projeto', 'TB_projeto.ID_projeto', '=', 'TB_assunto_projeto.ID_projeto')
            .join('TB_assunto', 'TB_assunto_projeto.ID_assunto', '=', 'TB_assunto.ID_assunto')            
            .select('*')
			.where('id_project', idProject)
		})
	};

	public postEspecificProject(project: any){ //Delete a especific project
		return new Promise((resolve,reject) => {
			connection(this.tableName)
			.insert(				
				{ 	
					lider: project.lider,
					id_imagem: project.id_imagem, 
					id_tipo: project.id_tipo,
					descricao: project.descricao,
					dt_inicio: project.dt_inicio,
					dt_finalizacao_prevista: project.dt_finalizacao_prevista,
					nome: project.body.nome,
					url_github:project.body.url_github
				}				
			)
			.into(this.tableName)

		})
		
	};

	public updateEspecificProject(project: any){ //Delete a especific member

		return new Promise((resolve,reject) => {
				connection(this.tableName)
				.update({
					lider: project.lider,
					id_imagem: project.id_imagem, 
					id_tipo: project.id_tipo,
					descricao: project.descricao,
					dt_inicio: project.dt_inicio,
					dt_finalizacao_prevista: project.dt_finalizacao_prevista,
					nome: project.nome,
					url_github:project.url_github
				})	
				.where('id_project', project.id_project)		
			})
		
	};
    
    public getProjectPerType(projectType: String){ //Get project per type
        return new Promise((resolve,reject) => {
            connection(this.tableName)
            // Join with tb_equipe_projetoimport { connection } from '../../../Db/knex';

            .join('TB_tipo_projeto', 'TB_projeto.ID_tipo_projeto', '=', 'TB_tipo_projeto.ID_tipo_projeto')    
            
            // Join with TB_imagem_projeto
            .join('TB_imagem_projeto', 'TB_projeto.ID_projeto', '=', 'TB_imagem_projeto.ID_projeto')
            .join('TB_imagem', 'TB_imagem_projeto.ID_imagem', '=', 'TB_imagem.ID_imagem')
            
            // Join with TB_assunto_projeto 
            .join('TB_assunto_projeto', 'TB_projeto.ID_projeto', '=', 'TB_assunto_projeto.ID_projeto')
            .join('TB_assunto', 'TB_assunto_projeto.ID_assunto', '=', 'TB_assunto.ID_assunto')            
            .select('*')
            
            .whereRaw(`UPPER(tb_tipo_projeto.titulo) LIKE ?`, [`%${projectType}%`])
        
		})
	};

	public deleteEspecificProject(idProject: number){ //Delete a especific member
		return new Promise((resolve,reject) => {
			connection(this.tableName)
			.where('id_project', idProject)
			.del()
		})
	};
}


