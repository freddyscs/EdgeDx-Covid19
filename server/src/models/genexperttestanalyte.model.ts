import {Entity, model, property} from '@loopback/repository';

//@model()
@model({
  settings: {
    mysql: {
      table: 'genexperttestanalyte' // lowercase
    }
  }
})
export class Genexperttestanalyte extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  test_id: number;

  @property({
    type: 'string',
    required: true,
  })
  analyte_name: string;

  @property({
    type: 'number',
    required: true,
  })
  ct: number;

  @property({
    type: 'number',
    required: true,
  })
  end_pt: number;

  @property({
    type: 'string',
    required: true,
  })
  analyte_result: string;

  @property({
    type: 'string',
    required: true,
  })
  probe_check_result: string;

  @property({
    type: 'string',
    required: true,
  })
  device_name: string;


  constructor(data?: Partial<Genexperttestanalyte>) {
    super(data);
  }
}

export interface GenexperttestanalyteRelations {
  // describe navigational properties here
}

export type GenexperttestanalyteWithRelations = Genexperttestanalyte & GenexperttestanalyteRelations;
