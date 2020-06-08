import { Entity } from '@loopback/repository';
export declare class ResultNotification extends Entity {
    id?: number;
    email: string;
    sample_id: string;
    notification_sent: number;
    phone_number: string;
    constructor(data?: Partial<ResultNotification>);
}
export interface ResultNotificationRelations {
}
export declare type ResultNotificationWithRelations = ResultNotification & ResultNotificationRelations;
