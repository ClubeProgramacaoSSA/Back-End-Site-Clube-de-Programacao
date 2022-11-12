import { connection } from '../../../Db/knex';

// import bcrypt from 'bcrypt' ;
// import jwt from 'jsonwebtoken' ;

export class MemberService {
    private tableName:string;

	constructor(){
		this.tableName = 'tb_member';
	}

	public getAllMembers(oficio: string | undefined) { //Get all members
		return new Promise((resolve,reject) => {
			if(oficio){
				connection( this.tableName )
				.select('*')
				.where('oficio', oficio)
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			}else{
				connection( this.tableName )
				.select('*')
				.then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
			}
			
		})
	};

	public getEspecificMember( idMember: number ){ //Get a especific member
		return new Promise((resolve,reject) => {
			connection( this.tableName )
				.select('*')
				.where('id_member', idMember)
				.then( testJson => resolve(testJson) )
				.catch( err => reject({ errMessage: err.message}));
			})
	};

	public deleteEspecificMember(idMember: number){ //Delete a especific member

		return new Promise((resolve,reject) => {
				connection(this.tableName)
				.where('id_member', idMember)
				.del()
				.then(testJson => resolve(testJson))
				.catch( err => reject({ errMessage: err.message}));
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


