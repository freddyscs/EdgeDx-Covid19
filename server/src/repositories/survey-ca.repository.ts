import {DefaultCrudRepository} from '@loopback/repository';
import {SurveyCa, SurveyCaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyCaRepository extends DefaultCrudRepository<
  SurveyCa,
  typeof SurveyCa.prototype.id,
  SurveyCaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(SurveyCa, dataSource);
  }
}
