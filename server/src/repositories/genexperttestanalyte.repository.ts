import {DefaultCrudRepository} from '@loopback/repository';
import {Genexperttestanalyte, GenexperttestanalyteRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GenexperttestanalyteRepository extends DefaultCrudRepository<
  Genexperttestanalyte,
  typeof Genexperttestanalyte.prototype.test_id,
  GenexperttestanalyteRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Genexperttestanalyte, dataSource);
  }
}
