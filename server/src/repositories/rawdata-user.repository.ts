import {DefaultCrudRepository} from '@loopback/repository';
import {RawdataUser, RawdataUserRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export type Credentials = {
  //username: string;
  password: string;
  email: string;
};

export class RawdataUserRepository extends DefaultCrudRepository<
  RawdataUser,
  typeof RawdataUser.prototype.id,
  RawdataUserRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RawdataUser, dataSource);
  }

}


