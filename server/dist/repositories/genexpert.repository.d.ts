import { DefaultCrudRepository } from '@loopback/repository';
import { Genexpert, GenexpertRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class GenexpertRepository extends DefaultCrudRepository<Genexpert, typeof Genexpert.prototype.test_id, GenexpertRelations> {
    constructor(dataSource: MysqlDataSource);
}
