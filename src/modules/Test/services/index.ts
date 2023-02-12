import { Request, Response } from "express";
import { connection } from "../../../Db/knex";


export class TestService {
    private tableName: string;
    
    constructor(){
        // super()
		this.tableName = 'tb_test';
    }
    getTest (req:Request,res:Response) {
			
			connection(this.tableName)
				.select('*')
				.then( testJson => res.status(200).json(testJson) )
				.catch( err => res.status(500).json({ errMessage: err.message}) );

    }
}