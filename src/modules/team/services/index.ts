import { Request, Response, Router } from 'express';
import { connection } from '../../../Db/knex';

export class TeamService{
	router = Router();
    tableName: string;

	constructor(){
		this.tableName = 'tb_equipe';
	}
	
    getAllTeams(req: Request, res: Response) { //Get all teams
        connection('tb_equipe'/*this.tableName*/)
            .select('*')
            .then( testJson => res.status(200).json(testJson) )
            .catch( err => res.status(500).json({ errMessage: err.message}));
    };

    getEspecificTeam(req: Request, res: Response){ //Get a especific team
        const id_team = req.params.id_team;
        connection(this.tableName)
            .select('*')
            .where('id_equipe', id_team)
            .then( testJson => res.status(200).json(testJson) )
            .catch( err => res.status(500).json({ errMessage: err.message}));
    };

    postTeam(req: Request, res: Response){ //Insert a new team in dataBase
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
    };
	
}

export const teamService = new TeamService();
