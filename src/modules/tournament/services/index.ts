import { connection } from '../../../Db/knex';

export class TournamentService{
    tableName: string;

	constructor(){
		this.tableName = 'tb_torneio';
	}

    getAllTournament(){
        return new Promise((resolve,reject) => {
            connection(this.tableName)
            .select('*')
            .then( testJson => resolve( testJson ) )
            .catch( err => reject({ errMessage: err.message }) );
        })

    };

    getEspecificTeamInTournament(objTeamInTournament: any){ //Get a team in a tournament //NOT COMPLETE

        return new Promise((resolve,reject) => {
            connection(this.tableName)
            .select('*')
            .join('tb_team_tournament', 'tb_team.id_team', '=', 'tb_team_tournament.id_team')
            .where('id_team', objTeamInTournament.id_team)
            //.andWhere('id_tournament', objTeamInTournament.id_tournament)
            
            .then( testJson => resolve( testJson ) )
            .catch( err => reject({ errMessage: err.message }) );
        })
        
        
    };
	
}

export const tournamentService = new TournamentService();
