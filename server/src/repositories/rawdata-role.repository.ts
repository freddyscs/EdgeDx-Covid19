import {DefaultCrudRepository} from '@loopback/repository';
import {RawdataRole, RawdataRoleRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RawdataRoleRepository extends DefaultCrudRepository<
  RawdataRole,
  typeof RawdataRole.prototype.id,
  RawdataRoleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RawdataRole, dataSource);
  }
}
