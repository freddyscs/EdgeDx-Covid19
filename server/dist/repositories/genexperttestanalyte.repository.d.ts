import { DefaultCrudRepository } from '@loopback/repository';
import { Genexperttestanalyte, GenexperttestanalyteRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class GenexperttestanalyteRepository extends DefaultCrudRepository<Genexperttestanalyte, typeof Genexperttestanalyte.prototype.test_id, GenexperttestanalyteRelations> {
    constructor(dataSource: MysqlDataSource);
}
