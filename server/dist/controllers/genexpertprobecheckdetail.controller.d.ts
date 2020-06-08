import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Genexpertprobecheckdetail } from '../models';
import { GenexpertprobecheckdetailRepository } from '../repositories';
export declare class GenexpertprobecheckdetailController {
    genexpertprobecheckdetailRepository: GenexpertprobecheckdetailRepository;
    constructor(genexpertprobecheckdetailRepository: GenexpertprobecheckdetailRepository);
    create(genexpertprobecheckdetail: Genexpertprobecheckdetail): Promise<Genexpertprobecheckdetail>;
    count(where?: Where<Genexpertprobecheckdetail>): Promise<Count>;
    find(filter?: Filter<Genexpertprobecheckdetail>): Promise<Genexpertprobecheckdetail[]>;
    updateAll(genexpertprobecheckdetail: Genexpertprobecheckdetail, where?: Where<Genexpertprobecheckdetail>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Genexpertprobecheckdetail>): Promise<Genexpertprobecheckdetail>;
    updateById(id: number, genexpertprobecheckdetail: Genexpertprobecheckdetail): Promise<void>;
    replaceById(id: number, genexpertprobecheckdetail: Genexpertprobecheckdetail): Promise<void>;
    deleteById(id: number): Promise<void>;
}
