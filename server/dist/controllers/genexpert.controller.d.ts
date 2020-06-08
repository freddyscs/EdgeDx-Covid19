import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Genexpert } from '../models';
import { GenexpertRepository } from '../repositories';
export declare class GenexpertController {
    genexpertRepository: GenexpertRepository;
    constructor(genexpertRepository: GenexpertRepository);
    create(genexpert: Genexpert): Promise<Genexpert>;
    count(where?: Where<Genexpert>): Promise<Count>;
    find(filter?: Filter<Genexpert>): Promise<Genexpert[]>;
    updateAll(genexpert: Genexpert, where?: Where<Genexpert>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Genexpert>): Promise<Genexpert>;
    updateById(id: number, genexpert: Genexpert): Promise<void>;
    replaceById(id: number, genexpert: Genexpert): Promise<void>;
    deleteById(id: number): Promise<void>;
}
