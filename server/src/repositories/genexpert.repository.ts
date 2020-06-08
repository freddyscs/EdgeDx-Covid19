import {DefaultCrudRepository} from '@loopback/repository';
import {Genexpert, GenexpertRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GenexpertRepository extends DefaultCrudRepository<
  Genexpert,
  typeof Genexpert.prototype.test_id,
  GenexpertRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Genexpert, dataSource);
  }
}
