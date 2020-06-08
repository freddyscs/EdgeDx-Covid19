import {Entity, model, property} from '@loopback/repository';

//@model()
@model({
  settings: {
    mysql: {
      table: 'genexpertprobecheckdetail' // lowercase
    }
  }
})
export class Genexpertprobecheckdetail extends Entity {
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
    type: 'string',
    required: true,
  })
  prb_chk_1: string;

  @property({
    type: 'string',
    required: true,
  })
  prb_chk_2: string;

  @property({
    type: 'string',
    required: true,
  })
  prb_chk_3: string;

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


  constructor(data?: Partial<Genexpertprobecheckdetail>) {
    super(data);
  }
}

export interface GenexpertprobecheckdetailRelations {
  // describe navigational properties here
}

export type GenexpertprobecheckdetailWithRelations = Genexpertprobecheckdetail & GenexpertprobecheckdetailRelations;
