import { DefaultCrudRepository } from '@loopback/repository';
import { Genexpertsummary, GenexpertsummaryRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class GenexpertsummaryRepository extends DefaultCrudRepository<Genexpertsummary, typeof Genexpertsummary.prototype.id, GenexpertsummaryRelations> {
    constructor(dataSource: MysqlDataSource);
}
