import { Entity } from '@loopback/repository';
export declare class Place extends Entity {
    id?: number;
    name: string;
    country: string;
    state: string;
    city: string;
    address: string;
    status: string;
    phone: string;
    zipcode: string;
    constructor(data?: Partial<Place>);
}
export interface PlaceRelations {
}
export declare type PlaceWithRelations = Place & PlaceRelations;
