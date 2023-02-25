import { connection } from '../../../Db/knex';

export class TeamService{
    private tableName: string;

	constructor(){
		this.tableName = 'tb_equipe';
	}
	
    public getAll() { //Get all teams
        return new Promise((resolve,reject) => {
            connection( this.tableName )
                //.join('tb_membro_equipe', 'tb_equipe.id_equipe', '=', 'tb_membro_equipe.id_equipe')
                //.join('tb_membro', 'tb_membro_equipe.id_membro', '=', 'tb_membro.id_membro')
                .join('tb_capitao', 'tb_capitao.id_capitao', '=', 'tb_equipe.id_capitao')
                .select('*')

                .then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
        })    
    };

    public getEspecific(idTeam: Number){ //Get a especific team
        const id_team = idTeam;
        return new Promise((resolve,reject) => {
            connection(this.tableName)
                //.join('tb_membro_equipe', 'tb_equipe.id_equipe', '=', 'tb_membro_equipe.id_equipe')
                //.join('tb_membro', 'tb_membro_equipe.id_membro', '=', 'tb_membro.id_membro')
                .select('*')
                .where('tb_equipe.id_equipe', id_team)

                .then( testJson => resolve( testJson ) )
				.catch( err => reject({ errMessage: err.message }) );
        }) 
    };

    public post(team: any){ //Insert a new team in dataBase
    
        return new Promise((resolve,reject) => {
            connection(this.tableName)
            .insert(				
                { 
                    nome_equipe: team.nome_equipe,
                    id_capitao: team.id_capitao,
                    dt_criacao: team.DT_criacao
                }				
            )
            .into(this.tableName) 

            .then( testJson => resolve( testJson ) )
			.catch( err => reject({ errMessage: err.message }) );
        })
	
    };
}
