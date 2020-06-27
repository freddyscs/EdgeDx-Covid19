import {Entity, model, property} from '@loopback/repository';

//@model()
@model({
  settings: {
    mysql: {
      table: 'result_notification' // lowercase
    }
  }
})
export class ResultNotification extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: false,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  sample_id: string;

  @property({
    type: 'number',
    required: false,
  })
  notification_sent: number;

  @property({
    type: 'string',
    required: false,
  })
  phone_number: string;


  constructor(data?: Partial<ResultNotification>) {
    super(data);
  }
}

export interface ResultNotificationRelations {
  // describe navigational properties here
}

export type ResultNotificationWithRelations = ResultNotification & ResultNotificationRelations;
