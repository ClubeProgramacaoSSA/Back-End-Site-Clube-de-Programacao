import { connection } from "../../../Db/knex";
import { Request, Response } from 'express'
import { IBaseCrudService } from "../../../Models";

// type algo = IBaseCrudService & {id:string}

export interface ITestTable {
    id: number;
    body: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}

export class TestService implements IBaseCrudService<ITestTable> {
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
        return new Promise<ITestTable[]>((resolve, reject) => {
            // Pode usar o async await tb;
            // se tiverem mais familiarizados tb 
            // mais vejam q o obj de connection do knex ja fala que o ele vai retornar um arr;
            // so tipando o retorno dele ali no <FormatoDoObjEsperado>
            connection<ITestTable>(this.testTable)
                .select('*')
                .then(testArr => resolve(testArr))
                .catch(err => reject(err?.message ? { message: err.message } : err));
        });
    };
    public update(partialTbTable: Partial<ITestTable>) {
        return new Promise<boolean>((resolve, reject) => {
            // pode botar outra parametro pra dizer quais campoas vc quer retornar na promise!;
            connection<ITestTable>(this.testTable)
                .update( { ...partialTbTable } )
                .then(data => resolve( true ) )
                .catch(err => reject( err?.message ? { message: err.message } : err ) );
        })
    };

    // getAll?: ((...params: any[]) => Promise<any[]>) | undefined;
    // public store = () => {
    //     return connection( this.testTable ).where
    // }

}