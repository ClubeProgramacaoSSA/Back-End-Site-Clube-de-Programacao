import { connection } from '../../../Db/knex';

export class TournamentService{
    tableName: string;

	constructor(){
		this.tableName = 'tb_torneio';
	}

    getAll(){
        return new Promise((resolve,reject) => {
            connection(this.tableName)
            .join('tb_organizador', 'tb_organizador.id_organizador', '=', 'tb_torneio.id_organizador')
            .select('*')
            .then( testJson => resolve( testJson ) )
            .catch( err => reject({ errMessage: err.message }) );
        })

    };

    // getEspecificTeamIn(id_team: number){ //Get a team in a tournament //NOT COMPLETE

    //     return new Promise((resolve,reject) => {
    //         connection(this.tableName)
            
    //         .join('tb_equipe_torneio', 'tb_equipe.id_equipe', '=', 'tb_equipe_torneio.id_equipe')
            
    //         .where('id_equipe', id_team)
    //         //.andWhere('id_tournament', objTeamInTournament.id_tournament)

    //         .select('*')
    //         .then( testJson => resolve( testJson ) )
	// 		.catch( err => reject({ errMessage: err.message }) );
    //     })     
    // };
	
}

export const tournamentService = new TournamentService();
