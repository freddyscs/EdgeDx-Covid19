import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'appointment' // lowercase
    }
  }
})
export class Appointment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  appointment_date: string;

  @property({
    type: 'number',
    required: true,
  })
  id_survey: number;

  @property({
    type: 'number',
    required: true,
  })
  id_place: number;


  constructor(data?: Partial<Appointment>) {
    super(data);
  }
}

export interface AppointmentRelations {
  // describe navigational properties here
}

export type AppointmentWithRelations = Appointment & AppointmentRelations;
