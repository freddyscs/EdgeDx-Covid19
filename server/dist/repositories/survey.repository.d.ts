import { DefaultCrudRepository } from '@loopback/repository';
import { Survey, SurveyRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class SurveyRepository extends DefaultCrudRepository<Survey, typeof Survey.prototype.id, SurveyRelations> {
    constructor(dataSource: MysqlDataSource);
}
