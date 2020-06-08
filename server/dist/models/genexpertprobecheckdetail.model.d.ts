import { Entity } from '@loopback/repository';
export declare class Genexpertprobecheckdetail extends Entity {
    id: number;
    test_id: number;
    analyte_name: string;
    prb_chk_1: string;
    prb_chk_2: string;
    prb_chk_3: string;
    probe_check_result: string;
    device_name: string;
    constructor(data?: Partial<Genexpertprobecheckdetail>);
}
export interface GenexpertprobecheckdetailRelations {
}
export declare type GenexpertprobecheckdetailWithRelations = Genexpertprobecheckdetail & GenexpertprobecheckdetailRelations;
