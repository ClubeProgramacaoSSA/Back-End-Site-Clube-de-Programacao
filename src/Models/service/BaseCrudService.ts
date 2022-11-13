
export interface IBaseCrudService {
    get:(...params:any[]) => void;
    update?:(...params:any[]) => void,
    delete?:(...params:any[]) => void,
    store?: (...params:any[]) => void
}

// class BaseCrudService<T = any> implements IBaseCrudService<T> {

// }