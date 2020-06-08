import {DefaultCrudRepository} from '@loopback/repository';
import {Genexpertsummary, GenexpertsummaryRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GenexpertsummaryRepository extends DefaultCrudRepository<
  Genexpertsummary,
  typeof Genexpertsummary.prototype.id,
  GenexpertsummaryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Genexpertsummary, dataSource);
  }
}
