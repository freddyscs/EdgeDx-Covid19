import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'survey' // lowercase
    }
  }
})
export class Survey extends Entity {
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
  email: string;

  @property({
    type: 'string',
  })
  fever?: string;

  @property({
    type: 'string',
  })
  taste?: string;

  @property({
    type: 'string',
    default: false,
  })
  feverDays?: string;

  @property({
    type: 'string',
    default: false,
  })
  feverMeasure?: string;

  @property({
    type: 'string',
    default: false,
  })
  feverHighest?: string;

  @property({
    type: 'string',
    default: false,
  })
  cough?: string;

  @property({
    type: 'string',
    default: false,
  })
  coughDays?: string;

  @property({
    type: 'string',
    default: false,
  })
  coughMeasure?: string;

  @property({
    type: 'string',
    default: false,
  })
  breath?: string;

  @property({
    type: 'string',
    default: false,
  })
  smell?: string;

  @property({
    type: 'string',
    default: false,
  })
  cardio?: string;

  @property({
    type: 'string',
    default: false,
  })
  diabetes?: string;

  @property({
    type: 'string',
    default: false,
  })
  bloodPreasure?: string;

  @property({
    type: 'string',
    default: false,
  })
  respiratoryDisease?: string;

  @property({
    type: 'string',
    default: false,
  })
  cancer?: string;

  @property({
    type: 'string',
    default: false,
  })
  chest?: string;

  @property({
    type: 'string',
    default: false,
  })
  exhaustation?: string;

  @property({
    type: 'string',
    default: false,
  })
  arouse?: string;

  @property({
    type: 'string',
    default: false,
  })
  bluish?: string;

  @property({
    type: 'string',
    default: false,
  })
  diarrhea?: string;

  @property({
    type: 'string',
    default: false,
  })
  daysSheltered?: string;

  @property({
    type: 'string',
    default: false,
  })
  age?: string;

  @property({
    type: 'string',
    default: false,
  })
  ethnicity?: string;

  @property({
    type: 'string',
    default: false,
  })
  acknowledge?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  corona: number;

  @property({
    type: 'string',
    default: false,
  })
  zipcode?: string;

  @property({
    type: 'string',
    default: false,
  })
  created_at?: string;


  constructor(data?: Partial<Survey>) {
    super(data);
  }
}

export interface SurveyRelations {
  // describe navigational properties here
}

export type SurveyWithRelations = Survey & SurveyRelations;
