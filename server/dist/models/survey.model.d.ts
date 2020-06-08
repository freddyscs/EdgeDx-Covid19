import { Entity } from '@loopback/repository';
export declare class Survey extends Entity {
    id?: number;
    email: string;
    fever?: string;
    taste?: string;
    feverDays?: string;
    feverMeasure?: string;
    feverHighest?: string;
    cough?: string;
    coughDays?: string;
    coughMeasure?: string;
    breath?: string;
    smell?: string;
    cardio?: string;
    diabetes?: string;
    bloodPreasure?: string;
    respiratoryDisease?: string;
    cancer?: string;
    chest?: string;
    exhaustation?: string;
    arouse?: string;
    bluish?: string;
    diarrhea?: string;
    daysSheltered?: string;
    age?: string;
    ethnicity?: string;
    acknowledge?: string;
    corona: number;
    zipcode?: string;
    created_at?: string;
    constructor(data?: Partial<Survey>);
}
export interface SurveyRelations {
}
export declare type SurveyWithRelations = Survey & SurveyRelations;
