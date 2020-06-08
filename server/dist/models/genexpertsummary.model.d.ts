import { Entity } from '@loopback/repository';
export declare class Genexpertsummary extends Entity {
    id?: number;
    mac_id: string;
    total_files: number;
    total_tests: number;
    import_date: Date;
    files_received: number;
    tests_received: number;
    constructor(data?: Partial<Genexpertsummary>);
}
export interface GenexpertsummaryRelations {
}
export declare type GenexpertsummaryWithRelations = Genexpertsummary & GenexpertsummaryRelations;
