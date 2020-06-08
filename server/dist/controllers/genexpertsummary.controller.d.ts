import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Genexpertsummary } from '../models';
import { GenexpertsummaryRepository } from '../repositories';
export declare class GenexpertsummaryController {
    genexpertsummaryRepository: GenexpertsummaryRepository;
    constructor(genexpertsummaryRepository: GenexpertsummaryRepository);
    create(genexpertsummary: Omit<Genexpertsummary, 'id'>): Promise<Genexpertsummary>;
    count(where?: Where<Genexpertsummary>): Promise<Count>;
    find(filter?: Filter<Genexpertsummary>): Promise<Genexpertsummary[]>;
    updateAll(genexpertsummary: Genexpertsummary, where?: Where<Genexpertsummary>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Genexpertsummary>): Promise<Genexpertsummary>;
    updateById(id: number, genexpertsummary: Genexpertsummary): Promise<void>;
    replaceById(id: number, genexpertsummary: Genexpertsummary): Promise<void>;
    deleteById(id: number): Promise<void>;
}
