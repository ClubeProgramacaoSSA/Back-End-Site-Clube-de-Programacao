import { connection } from '../../../Db/knex';

// import bcrypt from 'bcrypt' ;
// import jwt from 'jsonwebtoken' ;

export class MemberService {
    private tableName:string;

	constructor(){
		this.tableName = 'tb_membro';
	}

	public getAll() { //Get all members
		return new Promise((resolve,reject) => {
			connection( this.tableName )
				.join('tb_curso_instituicao', 'tb_membro.id_curso_instituicao', '=', 'tb_curso_instituicao.id_curso_instituicao')
				.join('tb_curso', 'tb_curso_instituicao.id_curso', '=', 'tb_curso.id_curso')
				.join('tb_instituicao_ensino', 'tb_curso_instituicao.id_instituicao', '=', 'tb_instituicao_ensino.id_instituicao_ensino')
				.join('tb_oficio', 'tb_oficio.id_oficio', '=', 'tb_membro.id_oficio')
				.join('tb_imagem', 'tb_imagem.id_imagem', '=', 'tb_membro.id_foto_membro')
				.select('tb_membro.dt_ingresso_clube', 'tb_membro.dt_ingresso_faculdade', 'tb_membro.dt_nascimento', 'tb_membro.genero', 'tb_membro.nome_membro', 'tb_oficio.nome_oficio', 'tb_curso.nome_curso', 'tb_instituicao_ensino.nome_instituicao_ensino')
				
				//.select('*')
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
		})
	};

	public getEspecific( idMember: number ){ //Get a especific member
		return new Promise((resolve,reject) => {
			connection( this.tableName )
			.join('tb_curso_instituicao', 'tb_membro.id_curso_instituicao', '=', 'tb_curso_instituicao.id_curso_instituicao')
			.join('tb_curso', 'tb_curso_instituicao.id_curso', '=', 'tb_curso.id_curso')
			.join('tb_instituicao_ensino', 'tb_curso_instituicao.id_instituicao', '=', 'tb_instituicao_ensino.id_instituicao_ensino')
			.join('tb_oficio', 'tb_oficio.id_oficio', '=', 'tb_membro.id_oficio')
			.join('tb_imagem', 'tb_imagem.id_imagem', '=', 'tb_membro.id_foto_membro')
			
			.select('tb_membro.dt_ingresso_clube', 'tb_membro.dt_ingresso_faculdade', 'tb_membro.dt_nascimento', 'tb_membro.genero', 'tb_membro.nome_membro', 'tb_oficio.nome_oficio', 'tb_curso.nome_curso', 'tb_instituicao_ensino.nome_instituicao_ensino', 'tb_imagem.imagem')
		
				
			.where('id_membro', idMember)

				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			})
	};

	public deleteEspecific(idMember: number){ //Delete a especific member
		return new Promise((resolve,reject) => {
				connection(this.tableName)
				.where('id_membro', idMember)
				.del()
				
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			})
		
	};

	public putEspecific(member: any){ //Update a especific member
		return new Promise((resolve,reject) => {
			console.log('MEMBRO genero: ' + member.ID_membro)
			connection(this.tableName)
			.update(				
				{ 
					id_curso_instituicao: member.ID_curso_instituicao,
					id_foto_membro: member.ID_foto_membro,
					dt_ingresso_clube: member.DT_ingresso_clube,
					dt_ingresso_faculdade: member.DT_ingresso_faculdade,
					dt_nascimento: member.DT_nascimento,
					genero: member.genero,
					nome_membro: member.nome_membro,
					id_oficio: member.ID_oficio
				}				
			)
			.where('id_membro', member.id_membro)
			
			.then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );
		})
	};

	public postEspecific(member: any){ //Update a especific member
		return new Promise((resolve,reject) => {
				connection(this.tableName)
				.insert(				
					{ 
						id_curso_instituicao: member.ID_curso_instituicao,
						id_foto_membro: member.ID_foto_membro,
						dt_ingresso_clube: member.DT_ingresso_clube,
						dt_ingresso_faculdade: member.DT_ingresso_faculdade,
						dt_nascimento: member.DT_nascimento,
						genero: member.genero,
						nome_membro: member.nome_membro,
						id_oficio: member.ID_oficio
					}				
				)
				
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			})
		
	};


	// post('/', (req,res) => { //Member Login HELPPPPPPPPP
		// 	const events = 0;
		// 	try{			
		// 		connection(this.tableName)
		// 			.select('count(*)')
		// 			.into('events')
		// 			.where('login', req.body.login)
		// 			.then(testJson => res.status(200).json(testJson))
		// 			.catch( err => res.status(500).json({ errMessage: err.message}));
			  
		// 			if(events < 1){return res.status(401).send({mensagem: 'Falha na autenticacao'})};
		
		// 			bcrypt.compare(req.body.senha, responseData.rows[0].senha, (err, result) => {
						
		// 				if(err){
		// 					return res.status(401).send({mensagem: 'Falha na autenticacao'})
		// 				}
		// 				if(result){ 
		// 					const token = jwt.sign({
		// 							login: responseData.rows[0].login,
		// 						},
		// 						process.env.JWT_KEY,
		// 						{
		// 							expiresIn: "1h"
		// 						}
		// 					);
		
		// 					return res.status(200).send({
		// 						mensagem: 'Autenticado com sucesso',
		// 						token: token
		// 					})
		// 				}
		
		// 				return res.status(401).send({mensagem: 'Falha na autenticacao'})
		// 			});     
		
		// 	}catch(error){
		// 		return res.status(500).send({error: error});
		// 	}


		// 	connection(this.tableName)
		// 		.where('id_member', id_memberParam)
		// 		.del()
		// 		.then(testJson => res.status(200).json(testJson))
		// 		.catch( err => res.status(500).json({ errMessage: err.message}));
		// };

}


