import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Genexperttestanalyte } from '../models';
import { GenexperttestanalyteRepository } from '../repositories';
export declare class GenexperttestanalyteController {
    genexperttestanalyteRepository: GenexperttestanalyteRepository;
    constructor(genexperttestanalyteRepository: GenexperttestanalyteRepository);
    create(genexperttestanalyte: Genexperttestanalyte): Promise<Genexperttestanalyte>;
    count(where?: Where<Genexperttestanalyte>): Promise<Count>;
    find(filter?: Filter<Genexperttestanalyte>): Promise<Genexperttestanalyte[]>;
    updateAll(genexperttestanalyte: Genexperttestanalyte, where?: Where<Genexperttestanalyte>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Genexperttestanalyte>): Promise<Genexperttestanalyte>;
    updateById(id: number, genexperttestanalyte: Genexperttestanalyte): Promise<void>;
    replaceById(id: number, genexperttestanalyte: Genexperttestanalyte): Promise<void>;
    deleteById(id: number): Promise<void>;
}
