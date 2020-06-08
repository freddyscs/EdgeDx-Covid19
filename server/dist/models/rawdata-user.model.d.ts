import { Entity } from '@loopback/repository';
export declare class RawdataUser extends Entity {
    id?: number;
    username: string;
    email: string;
    password: string;
    role_id: number;
    [prop: string]: any;
    constructor(data?: Partial<RawdataUser>);
}
export interface RawdataUserRelations {
}
export declare type RawdataUserWithRelations = RawdataUser & RawdataUserRelations;
