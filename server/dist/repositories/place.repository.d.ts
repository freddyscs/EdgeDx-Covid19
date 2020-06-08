import { DefaultCrudRepository } from '@loopback/repository';
import { Place, PlaceRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class PlaceRepository extends DefaultCrudRepository<Place, typeof Place.prototype.id, PlaceRelations> {
    constructor(dataSource: MysqlDataSource);
}
