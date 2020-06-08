import { DefaultCrudRepository } from '@loopback/repository';
import { RawdataUser, RawdataUserRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare type Credentials = {
    password: string;
    email: string;
};
export declare class RawdataUserRepository extends DefaultCrudRepository<RawdataUser, typeof RawdataUser.prototype.id, RawdataUserRelations> {
    constructor(dataSource: MysqlDataSource);
}
