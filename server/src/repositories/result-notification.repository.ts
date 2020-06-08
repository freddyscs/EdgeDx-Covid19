import {DefaultCrudRepository} from '@loopback/repository';
import {ResultNotification, ResultNotificationRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ResultNotificationRepository extends DefaultCrudRepository<
  ResultNotification,
  typeof ResultNotification.prototype.id,
  ResultNotificationRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ResultNotification, dataSource);
  }
}
