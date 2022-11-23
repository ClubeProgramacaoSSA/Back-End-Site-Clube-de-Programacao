import { connection } from "../../../Db/knex";
import { Request, Response } from 'express'
import { IBaseCrudService } from "../../../Models";

// type algo = IBaseCrudService & {id:string}

interface ITestTable {
    id: number;
    body: string;
    createdAt:Date;
    updatedAt: Date | null;
    deletedAt:Date | null;
}

export class TestService implements IBaseCrudService {
    testTable: string;

    constructor() {
        this.testTable = 'tb_test';
    }

    public get(id: number) {
        return connection(this.testTable)
            .where('id', id)
            .select('*');
    };
    public getAll() {
        return connection(this.testTable)
            .select('*');
    };
    // public update ({ body }:Partial<ITestTable>) {
    //     return connection(this.testTable).update()
    // };

    // getAll?: ((...params: any[]) => Promise<any[]>) | undefined;
    // public store = () => {
    //     return connection( this.testTable ).where
    // }

}