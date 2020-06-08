import { DefaultCrudRepository } from '@loopback/repository';
import { Genexpertprobecheckdetail, GenexpertprobecheckdetailRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class GenexpertprobecheckdetailRepository extends DefaultCrudRepository<Genexpertprobecheckdetail, typeof Genexpertprobecheckdetail.prototype.test_id, GenexpertprobecheckdetailRelations> {
    constructor(dataSource: MysqlDataSource);
}
