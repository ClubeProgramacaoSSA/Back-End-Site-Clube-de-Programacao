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
		this.router.get('/team',(req,res) => { //Get all teams
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.get('/team/:id_team',(req,res) => { //Get a especific team
			const id_team = req.params.id_team;
			
			connection(this.tableName)
				.select('*')
				.where('id_equipe', id_team)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.post('/team',(req,res) => { //Insert a new team in dataBase
			connection(this.tableName)
				.insert(				
					{
						id_equipe: req.body.id_equipe, 
						nome: req.body.nome,
						capitao: req.body.capitao,
						dt_criacao: req.body.dt_criacao
					}				
				)
				.into(this.tableName)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});
		this.router.get('/team/:id_team/tournament/:id_tournament', (req, res) => {
			const {id_team, id_tournament} = req.params;
			connection(this.tableName)
			.select('*')
			.join('tb_equipe_torneio', 'tb_equipe_torneio.id_equipe', '=', 'tb_equipe.id_equipe')
			.join('tb_torneio', 'tb_torneio.id_torneio', '=', 'tb_equipe_torneio.id_torneio')
			.where('tb_equipe.id_equipe', id_team)
			.where('tb_torneio.id_torneio', id_tournament)
			.then( testJson => res.status(200).json(testJson) )
			.catch( err => res.status(500).json({ errMessage: err.message}));
		})
		return this.router;
	}
}

export const teamRouter = new TeamRoutes();
