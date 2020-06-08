import {DefaultCrudRepository} from '@loopback/repository';
import {Genexpertprobecheckdetail, GenexpertprobecheckdetailRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GenexpertprobecheckdetailRepository extends DefaultCrudRepository<
  Genexpertprobecheckdetail,
  typeof Genexpertprobecheckdetail.prototype.test_id,
  GenexpertprobecheckdetailRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Genexpertprobecheckdetail, dataSource);
  }
}
