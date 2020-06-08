import {Entity, model, property} from '@loopback/repository';

//@model()
@model({
  settings: {
    mysql: {
      table: 'genexpertsummary' // lowercase
    }
  }
})
export class Genexpertsummary extends Entity {
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
  mac_id: string;

  @property({
    type: 'number',
    required: true,
  })
  total_files: number;

  @property({
    type: 'number',
    required: true,
  })
  total_tests: number;

  @property({
    type: 'date',
    required: true,
  })
  import_date: Date;

  @property({
    type: 'number',
    required: true,
  })
  files_received: number;

  @property({
    type: 'number',
    required: true,
  })
  tests_received: number;


  constructor(data?: Partial<Genexpertsummary>) {
    super(data);
  }
}

export interface GenexpertsummaryRelations {
  // describe navigational properties here
}

export type GenexpertsummaryWithRelations = Genexpertsummary & GenexpertsummaryRelations;
