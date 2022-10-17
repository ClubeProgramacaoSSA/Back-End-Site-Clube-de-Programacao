import { Router } from 'express';
import { Route } from '../../../Models';
import { connection } from '../../../Db/knex';

class MemberRoutes implements Route {
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'tb_membro';
	}
	
	public initRoute() {

		this.router.get('/',(req,res) => { //Get all members
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.get('/:id_member', (req,res) => { //Get a especific member
			const id_memberParam = req.params.id_member;

			connection(this.tableName)
				.select('*')
				.where('id_membro', id_memberParam)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.delete('/delete/:id_member', (req,res) => { //Delete a especific member
			const id_memberParam = req.params.id_member;

			connection(this.tableName)
				.where('id_member', id_memberParam)
				.del()
				.then(testJson => res.status(200).json(testJson))
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		return this.router;
	}
}

export const memberRouter = new MemberRoutes();
