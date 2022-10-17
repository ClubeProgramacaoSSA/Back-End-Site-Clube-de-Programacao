import { Router } from 'express';
import { Route } from '../../../Models';
import { connection } from '../../../Db/knex';

class TournamentRoutes implements Route {
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'tb_torneio';
	}
	
	public initRoute() {
		this.router.get('/',(req,res) => {
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.get('/team/:id_team',(req,res) => { //NOT COMPLETE
			const id_team = req.params.id_team
			
			connection(this.tableName)
				.select('*')
				.where('id_equipe', id_team)
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		this.router.get('/team',(req,res) => { //Get a team in a tournament //NOT COMPLETE
			const objTeamInTournament = {
				id_team: req.body.id_time,
				id_tournament: req.body.id_torneio        
			}
			
			connection('tb_equipe')
				.select('*')
				.innerJoin('tb_equipe_torneio', function() {
					this
					.on('tb_equipe.id_equipe', '=', 'tb_equipe_torneio.id_equipe')})
				.where('id_equipe', objTeamInTournament.id_team)
				//.andWhere('id_torneio', objTeamInTournament.id_tournament)
				
				.then( testJson => res.status(200).json(testJson))
				.catch( err => res.status(500).json({ errMessage: err.message}));
		});

		return this.router;
	}
}

export const tournamentRouter = new TournamentRoutes();
