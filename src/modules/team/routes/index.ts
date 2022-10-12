import { connection } from "../../../Db/knex";
import { Route } from "../../../Models";
import { IRouter, Router } from "express";


class TeamRoute implements Route{
    router = Router();
    tableName: string;

    constructor(){
        this.tableName = 'tb_equipe';
    }
    public initRoute(){
        this.router.get('/teams', (req, res) => {
            connection(this.tableName)
            .select('*')
            .then(teamsJson => res.status(200).json(teamsJson))
            .catch(err => res.status(500).send({errMessage: err.message}));
        });
        this.router.get('/team/:id_team', (req, res) => {
            const {id_team} = req.params;
            connection(this.tableName)
            .select('*')
            .where({id_equipe: id_team})
            .then(teamJson => res.status(200).json(teamJson))
            .catch(err => res.status(500).send({errMessage: err.message}));
        });

        return this.router;
    };
}
export const teamRoute = new TeamRoute();

