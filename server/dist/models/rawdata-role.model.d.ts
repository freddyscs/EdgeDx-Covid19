import { Entity } from '@loopback/repository';
export declare class RawdataRole extends Entity {
    id?: number;
    name: string;
    status: number;
    [prop: string]: any;
    constructor(data?: Partial<RawdataRole>);
}
export interface RawdataRoleRelations {
}
export declare type RawdataRoleWithRelations = RawdataRole & RawdataRoleRelations;
