import { Router } from "express";
import { Route } from "../../../Models";
import { connection } from "../../../Db/knex";


class MemberRoute implements Route{
    router = Router();
    tableName: string;

    constructor(){
        this.tableName = 'tb_membro';
    }

    
    public initRoute() {
        // Get All Adms and yours pictures
        this.router.get('/memberAdms', (req, res) => {
            connection(this.tableName)
            .where({oficio: 'ADM'})
            .join('tb_imagem', 'tb_imagem.id_imagem', '=', 'tb_membro.id_foto_membro')
            .select('tb_membro.nome', 'tb_membro.oficio', 'tb_imagem.imagem', 'tb_imagem.descricao')
            .then(memberJson => res.status(200).json(memberJson))
            .catch(err => res.status(500).send({errMessage: err.message}));
        });
        
        return this.router;
    }

}
export const memberRoute = new MemberRoute();