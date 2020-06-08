import {DefaultCrudRepository} from '@loopback/repository';
import {Place, PlaceRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlaceRepository extends DefaultCrudRepository<
  Place,
  typeof Place.prototype.id,
  PlaceRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Place, dataSource);
  }
}
