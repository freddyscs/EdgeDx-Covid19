import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ResultNotification } from '../models';
import { ResultNotificationRepository } from '../repositories';
export declare class ResultNotificationController {
    resultNotificationRepository: ResultNotificationRepository;
    constructor(resultNotificationRepository: ResultNotificationRepository);
    create(resultNotification: Omit<ResultNotification, 'id'>): Promise<ResultNotification>;
    count(where?: Where<ResultNotification>): Promise<Count>;
    find(filter?: Filter<ResultNotification>): Promise<ResultNotification[]>;
    updateAll(resultNotification: ResultNotification, where?: Where<ResultNotification>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<ResultNotification>): Promise<ResultNotification>;
    updateById(id: number, resultNotification: ResultNotification): Promise<void>;
    replaceById(id: number, resultNotification: ResultNotification): Promise<void>;
    deleteById(id: number): Promise<void>;
}
