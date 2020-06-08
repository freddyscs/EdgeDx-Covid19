import {DefaultCrudRepository} from '@loopback/repository';
import {Survey, SurveyRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyRepository extends DefaultCrudRepository<
  Survey,
  typeof Survey.prototype.id,
  SurveyRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Survey, dataSource);
  }
}
