import { connection } from '../../../Db/knex';

export class TournamentService{
    tableName: string;

	constructor(){
		this.tableName = 'tb_torneio';
	}

    getAllTournament(){
        return new Promise((resolve,reject) => {
            connection('tb_torneio')
            .select('*')
            .then( testJson => resolve( testJson ) )
            .catch( err => reject({ errMessage: err.message }) );
        })

    };

    getEspecificTeamInTournament(objTeamInTournament: any){ //Get a team in a tournament //NOT COMPLETE

        return new Promise((resolve,reject) => {
            connection('tb_torneio')
            .select('*')
            .join('tb_equipe_torneio', 'tb_equipe.id_equipe', '=', 'tb_equipe_torneio.id_equipe')
            .where('id_equipe', objTeamInTournament.id_team)
            //.andWhere('id_torneio', objTeamInTournament.id_tournament)
            
            .then( testJson => resolve( testJson ) )
            .catch( err => reject({ errMessage: err.message }) );
        })
        
        
    };
	
}

export const tournamentService = new TournamentService();
