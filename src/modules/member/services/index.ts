import { connection } from '../../../Db/knex';

// import bcrypt from 'bcrypt' ;
// import jwt from 'jsonwebtoken' ;

export class MemberService {
    private tableName:string;

	constructor(){
		this.tableName = 'tb_membro';
	}

	public getAllMembers() { //Get all members
		return new Promise((resolve,reject) => {
			connection( this.tableName )
				.join('tb_curso_instituicao', 'tb_membro.id_curso_instituicao', '=', 'tb_curso_instituicao.id_curso_instituicao')
				.join('tb_curso', 'tb_curso_instituicao.id_curso', '=', 'tb_curso.id_curso')
				.join('tb_instituicao_ensino', 'tb_curso_instituicao.id_instituicao', '=', 'tb_instituicao_ensino.id_instituicao_ensino')
				.select('tb_membro.dt_ingresso_clube', 'tb_membro.dt_ingresso_faculdade', 'tb_membro.dt_nascimento', 'tb_membro.genero', 'tb_membro.nome_membro', 'tb_membro.oficio', 'tb_curso.nome_curso', 'tb_instituicao_ensino.nome_instituicao_ensino')
				.select('*')
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
		})
	};

	public getEspecificMember( idMember: number ){ 
		return new Promise((resolve,reject) => {
			connection( this.tableName )
				.join('tb_curso_instituicao', 'tb_membro.id_curso_instituicao', '=', 'tb_curso_instituicao.id_curso_instituicao')
				.join('tb_curso', 'tb_curso_instituicao.id_curso', '=', 'tb_curso.id_curso')
				.join('tb_instituicao_ensino', 'tb_curso_instituicao.id_instituicao', '=', 'tb_instituicao_ensino.id_instituicao_ensino')
				
				.select('tb_membro.dt_ingresso_clube', 'tb_membro.dt_ingresso_faculdade', 'tb_membro.dt_nascimento', 'tb_membro.genero', 'tb_membro.nome_membro', 'tb_membro.oficio', 'tb_curso.nome_curso', 'tb_instituicao_ensino.nome_instituicao_ensino')
				
				.where('id_membro', idMember)

				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			})
	};

	public putEspecificMember(member: any){
		return new Promise((resolve,reject) => {
				connection(this.tableName)
				.update(				
					{ 
						id_curso_instituicao: member.id_curso_instituicao,
						id_foto_membro: member.id_foto_membro,
						dt_ingresso_clube: member.dt_ingresso_clube,
						dt_ingresso_faculdade: member.dt_ingresso_faculdade,
						dt_nascimento: member.dt_nascimento,
						genero: member.genero,
						nome_membro: member.nome_membro,
						oficio: member.oficio
					}				
				)
				.where('id_membro', member.id_membro)
				
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			})
		
	};

	public postEspecificMember(member: any){ 
		return new Promise((resolve,reject) => {
				connection(this.tableName)
				.insert(				
					{ 
						id_curso_instituicao: member.id_curso_instituicao,
						id_foto_membro: member.id_foto_membro,
						dt_ingresso_clube: member.dt_ingresso_clube,
						dt_ingresso_faculdade: member.dt_ingresso_faculdade,
						dt_nascimento: member.dt_nascimento,
						genero: member.genero,
						nome_membro: member.nome_membro,
						oficio: member.oficio
					}				
				)
				
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			})
		
	};


}