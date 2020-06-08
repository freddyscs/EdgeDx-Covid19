import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Place } from '../models';
import { PlaceRepository } from '../repositories';
export declare class PlaceController {
    placeRepository: PlaceRepository;
    constructor(placeRepository: PlaceRepository);
    create(place: Omit<Place, 'id'>): Promise<Place>;
    count(where?: Where<Place>): Promise<Count>;
    find(filter?: Filter<Place>): Promise<Place[]>;
    updateAll(place: Place, where?: Where<Place>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Place>): Promise<Place>;
    updateById(id: number, place: Place): Promise<void>;
    replaceById(id: number, place: Place): Promise<void>;
    deleteById(id: number): Promise<void>;
}
