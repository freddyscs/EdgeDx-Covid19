import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { RawdataRole } from '../models';
import { RawdataRoleRepository } from '../repositories';
export declare class RawdataRoleController {
    rawdataRoleRepository: RawdataRoleRepository;
    constructor(rawdataRoleRepository: RawdataRoleRepository);
    create(rawdataRole: Omit<RawdataRole, 'id'>): Promise<RawdataRole>;
    count(where?: Where<RawdataRole>): Promise<Count>;
    find(filter?: Filter<RawdataRole>): Promise<RawdataRole[]>;
    updateAll(rawdataRole: RawdataRole, where?: Where<RawdataRole>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<RawdataRole>): Promise<RawdataRole>;
    updateById(id: number, rawdataRole: RawdataRole): Promise<void>;
    replaceById(id: number, rawdataRole: RawdataRole): Promise<void>;
    deleteById(id: number): Promise<void>;
}
