import { connection } from '../../../Db/knex';

export class TeamService{
    private tableName: string;

	constructor(){
		this.tableName = 'tb_equipe';
	}
	
    public getAllTeams() { //Get all teams
        return new Promise((resolve,reject) => {
            connection( this.tableName )
                .select('*')
                .then( testJson => resolve( testJson ) )
                .catch( err => reject({ errMessage: err.message }) );
        })    
    };

    public getEspecificTeam(idTeam: Number){ //Get a especific team
        const id_team = idTeam;
        return new Promise((resolve,reject) => {
            connection(this.tableName)
                .select('*')
                .where('id_team', id_team)
                .then( testJson => resolve( testJson ) )
                .catch( err => reject({ errMessage: err.message }) );
        }) 
    };

    public postTeam(team: any){ //Insert a new team in dataBase
    
        return new Promise((resolve,reject) => {
            connection(this.tableName)
            .insert(				
                { 
                    nome: team.nome,
                    id_captain: team.id_capitao,
                    DT_criacao: team.DT_criacao
                }				
            )
            .into(this.tableName)
            .then( testJson => resolve( testJson ) )
            .catch( err => reject({ errMessage: err.message }) ); 
        })
	
    };
}
