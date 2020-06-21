import {Entity, model, property} from '@loopback/repository';

//@model()
@model({
  settings: {
    mysql: {
      table: 'survey_ca' // lowercase
    }
  }
})
export class SurveyCa extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  birth?: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  street?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  zipcode?: string;

  @property({
    type: 'string',
  })
  latino?: string;

  @property({
    type: 'string',
  })
  race?: string;

  @property({
    type: 'string',
  })
  contact?: string;

  @property({
    type: 'string',
  })
  older?: string;

  @property({
    type: 'boolean',
  })
  cawork1?: boolean;

  @property({
    type: 'boolean',
  })
  cawork2?: boolean;

  @property({
    type: 'boolean',
  })
  cawork3?: boolean;

  @property({
    type: 'boolean',
  })
  cawork4?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms1?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms2?: boolean;
  
  @property({
    type: 'boolean',
  })
  chksymptoms3?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms4?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms5?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms6?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms7?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms8?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms9?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms10?: boolean;

  @property({
    type: 'boolean',
  })
  chksymptoms11?: boolean;

  @property({
    type: 'string',
  })
  days?: string;

  @property({
    type: 'string',
  })
  conditions?: string;

  @property({
    type: 'boolean',
  })
  chkschronic1?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic2?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic3?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic4?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic5?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic6?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic7?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic8?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic9?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic10?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic11?: boolean;
  
  @property({
    type: 'boolean',
  })
  chkschronic12?: boolean;

  @property({
    type: 'string',
  })
  pregnant?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SurveyCa>) {
    super(data);
  }
}

export interface SurveyCaRelations {
  // describe navigational properties here
}

export type SurveyCaWithRelations = SurveyCa & SurveyCaRelations;
