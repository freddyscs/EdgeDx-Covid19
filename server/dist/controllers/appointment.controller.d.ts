import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Appointment } from '../models';
import { AppointmentRepository } from '../repositories';
export declare class AppointmentController {
    appointmentRepository: AppointmentRepository;
    constructor(appointmentRepository: AppointmentRepository);
    create(appointment: Omit<Appointment, 'id'>): Promise<Appointment>;
    count(where?: Where<Appointment>): Promise<Count>;
    find(filter?: Filter<Appointment>): Promise<Appointment[]>;
    updateAll(appointment: Appointment, where?: Where<Appointment>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Appointment>): Promise<Appointment>;
    updateById(id: number, appointment: Appointment): Promise<void>;
    replaceById(id: number, appointment: Appointment): Promise<void>;
    deleteById(id: number): Promise<void>;
}
