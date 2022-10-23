import { Request, Response, Router } from 'express';
import { connection } from '../../../Db/knex';

// import bcrypt from 'bcrypt' ;
// import jwt from 'jsonwebtoken' ;

export class MemberService{
    private tableName: string;

	constructor(){
		this.tableName = 'tb_membro';
	}

	getAllMembers(req: Request, res: Response) { //Get all members
		const {oficio} = req.query;
		if(oficio){
			connection(this.tableName)
				.select('*')
				.join('tb_imagem', 'tb_imagem.id_imagem', '=', 'tb_membro.id_foto_membro')
				.where('oficio', oficio)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		}else{
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));

		}
	};

	getEspecificMember(req: Request, res: Response){ //Get a especific member
		const id_memberParam = req.params.id_member;

		connection('tb_membro')
			.select('*')
			.where('id_membro', id_memberParam)
			.then( testJson => res.status(200).json(testJson) )
			.catch( err => res.status(500).json({ errMessage: err.message}));
	};

	deleteEspecificMember(req: Request, res: Response){ //Delete a especific member
		const id_memberParam = req.params.id_member;
		connection(this.tableName)
			.where('id_member', id_memberParam)
			.del()
			.then(testJson => res.status(200).json(testJson))
			.catch( err => res.status(500).json({ errMessage: err.message}));
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

