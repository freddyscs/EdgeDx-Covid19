import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SurveyCa } from '../models';
import { SurveyCaRepository } from '../repositories';
export declare class SurveyCaController {
    surveyCaRepository: SurveyCaRepository;
    constructor(surveyCaRepository: SurveyCaRepository);
    create(surveyCa: Omit<SurveyCa, 'id'>): Promise<SurveyCa>;
    count(where?: Where<SurveyCa>): Promise<Count>;
    find(filter?: Filter<SurveyCa>): Promise<SurveyCa[]>;
    updateAll(surveyCa: SurveyCa, where?: Where<SurveyCa>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SurveyCa>): Promise<SurveyCa>;
    updateById(id: number, surveyCa: SurveyCa): Promise<void>;
    replaceById(id: number, surveyCa: SurveyCa): Promise<void>;
    deleteById(id: number): Promise<void>;
}
