import { Router } from 'express';
import { Route } from '../../../Models';
import { connection } from '../../../Db/knex';

class TeamRoutes implements Route {
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'tb_equipe';
	}
	
	public initRoute() {
		this.router.get('/',(req,res) => { //Get all teams
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.get('/:id_team',(req,res) => { //Get a especific team
			const id_team = req.params.id_team;
			
			connection(this.tableName)
				.select('*')
				.where('id_equipe', id_team)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.post('/insert',(req,res) => { //Insert a new team in dataBase
			connection(this.tableName)
				.insert(				
					{ 
						nome: req.body.nome,
						capitao: req.body.capitao,
						dt_criacao: req.body.dt_criacao
					}				
				)
				.into(this.tableName)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		return this.router;
	}
}

export const teamRouter = new TeamRoutes();
