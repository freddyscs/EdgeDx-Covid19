import { DefaultCrudRepository } from '@loopback/repository';
import { Appointment, AppointmentRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class AppointmentRepository extends DefaultCrudRepository<Appointment, typeof Appointment.prototype.id, AppointmentRelations> {
    constructor(dataSource: MysqlDataSource);
}
