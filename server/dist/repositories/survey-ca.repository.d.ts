import { DefaultCrudRepository } from '@loopback/repository';
import { SurveyCa, SurveyCaRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class SurveyCaRepository extends DefaultCrudRepository<SurveyCa, typeof SurveyCa.prototype.id, SurveyCaRelations> {
    constructor(dataSource: MysqlDataSource);
}
