import { Entity } from '@loopback/repository';
export declare class Appointment extends Entity {
    id?: number;
    appointment_date: string;
    id_survey: number;
    id_place: number;
    constructor(data?: Partial<Appointment>);
}
export interface AppointmentRelations {
}
export declare type AppointmentWithRelations = Appointment & AppointmentRelations;
