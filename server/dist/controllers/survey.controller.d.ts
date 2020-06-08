import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Survey } from '../models';
import { SurveyRepository } from '../repositories';
export declare class SurveyController {
    surveyRepository: SurveyRepository;
    constructor(surveyRepository: SurveyRepository);
    create(survey: Omit<Survey, 'id'>): Promise<Survey>;
    count(where?: Where<Survey>): Promise<Count>;
    find(filter?: Filter<Survey>): Promise<Survey[]>;
    updateAll(survey: Survey, where?: Where<Survey>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Survey>): Promise<Survey>;
    updateById(id: number, survey: Survey): Promise<void>;
    replaceById(id: number, survey: Survey): Promise<void>;
    deleteById(id: number): Promise<void>;
}
