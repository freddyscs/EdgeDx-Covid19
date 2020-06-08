import { Entity } from '@loopback/repository';
export declare class Genexperttestanalyte extends Entity {
    id: number;
    test_id: number;
    analyte_name: string;
    ct: number;
    end_pt: number;
    analyte_result: string;
    probe_check_result: string;
    device_name: string;
    constructor(data?: Partial<Genexperttestanalyte>);
}
export interface GenexperttestanalyteRelations {
}
export declare type GenexperttestanalyteWithRelations = Genexperttestanalyte & GenexperttestanalyteRelations;
