import {DefaultCrudRepository} from '@loopback/repository';
import {Appointment, AppointmentRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AppointmentRepository extends DefaultCrudRepository<
  Appointment,
  typeof Appointment.prototype.id,
  AppointmentRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Appointment, dataSource);
  }
}
