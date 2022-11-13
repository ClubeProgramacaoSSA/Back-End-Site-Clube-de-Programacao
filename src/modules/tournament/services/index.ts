import { connection } from '../../../Db/knex';

export class TournamentService{
    tableName: string;

	constructor(){
		this.tableName = 'tb_torneio';
	}

    getAllTournament(){
        return new Promise((resolve,reject) => {
            connection(this.tableName)
            .join('tb_organizador', 'tb_organizador.id_organizador', '=', 'tb_torneio.id_organizador')
            .select('*')
            .then( testJson => resolve( testJson ) )
            .catch( err => reject({ errMessage: err.message }) );
        })

    };

    getEspecificTeamInTournament(id_team: number){ //Get a team in a tournament //NOT COMPLETE

        return new Promise((resolve,reject) => {
            connection(this.tableName)
            .select('*')
            .join('tb_team_tournament', 'tb_team.id_team', '=', 'tb_team_tournament.id_team')
            .where('id_team', id_team)
            //.andWhere('id_tournament', objTeamInTournament.id_tournament)

            .then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );
        })     
    };
	
}

export const tournamentService = new TournamentService();
