import {Entity, model, property} from '@loopback/repository';


//@model()
@model({
  settings: {
    mysql: {
      table: 'rawdata_role' // lowercase
    }
  }
})
export class RawdataRole extends Entity {
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
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  status: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RawdataRole>) {
    super(data);
  }
}

export interface RawdataRoleRelations {
  // describe navigational properties here
}

export type RawdataRoleWithRelations = RawdataRole & RawdataRoleRelations;
