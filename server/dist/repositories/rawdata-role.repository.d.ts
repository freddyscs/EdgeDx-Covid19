import { DefaultCrudRepository } from '@loopback/repository';
import { RawdataRole, RawdataRoleRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class RawdataRoleRepository extends DefaultCrudRepository<RawdataRole, typeof RawdataRole.prototype.id, RawdataRoleRelations> {
    constructor(dataSource: MysqlDataSource);
}
