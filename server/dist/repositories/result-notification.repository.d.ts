import { DefaultCrudRepository } from '@loopback/repository';
import { ResultNotification, ResultNotificationRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class ResultNotificationRepository extends DefaultCrudRepository<ResultNotification, typeof ResultNotification.prototype.id, ResultNotificationRelations> {
    constructor(dataSource: MysqlDataSource);
}
