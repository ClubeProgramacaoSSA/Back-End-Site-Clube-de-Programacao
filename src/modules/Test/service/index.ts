import { connection } from "../../../Db/knex";
import {Request,Response } from 'express'
import { IBaseCrudService } from "../../../Models";

// type algo = IBaseCrudService & {id:string}

export class TestService implements IBaseCrudService{
    testTable: string;

    constructor() {
        this.testTable = 'tb_test';
    }

    public get = () => {
        return connection( this.testTable ).select('*');
    };
    // public store = () => {
    //     return connection( this.testTable ).where
    // }

}