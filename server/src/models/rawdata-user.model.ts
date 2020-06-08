import {Entity, model, property} from '@loopback/repository';

//@model()
@model({
  settings: {
    mysql: {
      table: 'rawdata_user' // lowercase
    }
  }
})
export class RawdataUser extends Entity {
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
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'number',
    required: true,
  })
  role_id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RawdataUser>) {
    super(data);
  }
}

export interface RawdataUserRelations {
  // describe navigational properties here
}

export type RawdataUserWithRelations = RawdataUser & RawdataUserRelations;
