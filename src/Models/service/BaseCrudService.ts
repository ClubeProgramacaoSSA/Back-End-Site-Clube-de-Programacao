
export interface IBaseCrudService<T = any> {
    get?:(...params:any[]) => Promise<T | T[]>;
    getAll?:( ...params:any[] ) => Promise<T[]>;
    update?:( params:Partial<T> ) => Promise<any>;
    delete?:( ...params:any[] ) => Promise<void>;
    store?: ( params:T ) => Promise<void>;
}

// class BaseCrudService<T = any> implements IBaseCrudService<T> {

// }