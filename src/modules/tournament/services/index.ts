import { Request, Response, Router } from 'express';
import { connection } from '../../../Db/knex';

export class TournamentService{
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'tb_torneio';
	}

    getAllTournament(req: Request, res: Response){
        connection('tb_torneio')
            .select('*')
            .then( testJson => res.status(200).json(testJson) )
            .catch( err => res.status(500).json({ errMessage: err.message}));
    };

    getEspecificTeamInTournament(req: Request, res: Response){ //Get a team in a tournament //NOT COMPLETE
        const objTeamInTournament = {
            id_team: req.body.id_time,
            id_tournament: req.body.id_torneio        
        }
        
        connection('tb_torneio')
            .select('*')
            .join('tb_equipe_torneio', 'tb_equipe.id_equipe', '=', 'tb_equipe_torneio.id_equipe')
            .where('id_equipe', objTeamInTournament.id_team)
            //.andWhere('id_torneio', objTeamInTournament.id_tournament)
            
            .then( testJson => res.status(200).json(testJson))
            .catch( err => res.status(500).json({ errMessage: err.message}));
    };
	
}

export const tournamentService = new TournamentService();
