import {Entity, model, property} from '@loopback/repository';

//@model()
@model({
  settings: {
    mysql: {
      table: 'genexpert' // lowercase
    }
  }
})
export class Genexpert extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  testingPoint: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  province: string;

  @property({
    type: 'string',
    required: true,
  })
  district: string;

  @property({
    type: 'string',
    required: true,
  })
  macID: string;

  @property({
    type: 'string',
    required: true,
  })
  assay: string;

  @property({
    type: 'string',
    required: true,
  })
  assay_disclaimer: string;

  @property({
    type: 'string',
    required: true,
  })
  assay_type: string;

  @property({
    type: 'string',
    required: true,
  })
  assay_version: string;

  @property({
    type: 'string',
    required: true,
  })
  device_name: string;

  @property({
    type: 'date',
    required: true,
  })
  exported_date: string;

  @property({
    type: 'string',
    required: true,
  })
  specific_parameters: string;

  @property({
    type: 'string',
    required: true,
  })
  reagent_lot_number: string;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'string',
    required: true,
  })
  cartridge_sn: string;

  @property({
    type: 'date',
    required: true,
  })
  end_time: string;

  @property({
    type: 'string',
    required: true,
  })
  error: string;

  @property({
    type: 'string',
    required: true,
  })
  error_status: string;

  @property({
    type: 'date',
    required: true,
  })
  expiration_date: string;

  @property({
    type: 'string',
    required: true,
  })
  history: string;

  @property({
    type: 'string',
    required: true,
  })
  instrument_sn: string;

  @property({
    type: 'string',
    required: true,
  })
  melt_peaks: string;

  @property({
    type: 'string',
    required: true,
  })
  messages: string;

  @property({
    type: 'string',
    required: true,
  })
  module_name: string;

  @property({
    type: 'string',
    required: true,
  })
  module_sn: string;

  @property({
    type: 'string',
    required: true,
  })
  notes: string;

  @property({
    type: 'string',
    required: true,
  })
  patient_id: string;

  @property({
    type: 'string',
    required: true,
  })
  reagent_lot_id: string;

  @property({
    type: 'string',
    required: true,
  })
  sample_id: string;

  @property({
    type: 'string',
    required: true,
  })
  sample_type: string;

  @property({
    type: 'string',
    required: true,
  })
  software_version: string;

  @property({
    type: 'date',
    required: true,
  })
  start_time: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'string',
    required: true,
  })
  test_disclaimer: string;

  @property({
    type: 'string',
    required: true,
  })
  test_result: string;

  @property({
    type: 'string',
    required: true,
  })
  test_type: string;

  @property({
    type: 'string',
    required: true,
  })
  LabName: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  test_id: number;

  @property({
    type: 'number',
    required: true,
  })
  latitude: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  longitude: number;

  @property({
    type: 'date',
    required: true,
  })
  date_imported_to_server: string;

  @property({
    type: 'date',
    required: true,
  })
  date_imported_to_node: string;

  @property({
    type: 'date',
    required: true,
  })
  nascop_from_node: string;


  constructor(data?: Partial<Genexpert>) {
    super(data);
  }
}

export interface GenexpertRelations {
  // describe navigational properties here
}

export type GenexpertWithRelations = Genexpert & GenexpertRelations;
