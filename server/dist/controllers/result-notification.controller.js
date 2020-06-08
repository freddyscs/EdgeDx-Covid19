"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ResultNotificationController = class ResultNotificationController {
    constructor(resultNotificationRepository) {
        this.resultNotificationRepository = resultNotificationRepository;
    }
    async create(resultNotification) {
        return this.resultNotificationRepository.create(resultNotification);
    }
    async count(where) {
        return this.resultNotificationRepository.count(where);
    }
    async find(filter) {
        return this.resultNotificationRepository.find(filter);
    }
    async updateAll(resultNotification, where) {
        return this.resultNotificationRepository.updateAll(resultNotification, where);
    }
    async findById(id, filter) {
        return this.resultNotificationRepository.findById(id, filter);
    }
    async updateById(id, resultNotification) {
        await this.resultNotificationRepository.updateById(id, resultNotification);
    }
    async replaceById(id, resultNotification) {
        await this.resultNotificationRepository.replaceById(id, resultNotification);
    }
    async deleteById(id) {
        await this.resultNotificationRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/result-notifications', {
        responses: {
            '200': {
                description: 'ResultNotification model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ResultNotification) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ResultNotification, {
                    title: 'NewResultNotification',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/result-notifications/count', {
        responses: {
            '200': {
                description: 'ResultNotification model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ResultNotification)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/result-notifications', {
        responses: {
            '200': {
                description: 'Array of ResultNotification model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ResultNotification, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ResultNotification)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/result-notifications', {
        responses: {
            '200': {
                description: 'ResultNotification PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ResultNotification, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ResultNotification)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ResultNotification, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/result-notifications/{id}', {
        responses: {
            '200': {
                description: 'ResultNotification model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ResultNotification, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ResultNotification, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/result-notifications/{id}', {
        responses: {
            '204': {
                description: 'ResultNotification PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ResultNotification, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ResultNotification]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/result-notifications/{id}', {
        responses: {
            '204': {
                description: 'ResultNotification PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ResultNotification]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/result-notifications/{id}', {
        responses: {
            '204': {
                description: 'ResultNotification DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultNotificationController.prototype, "deleteById", null);
ResultNotificationController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ResultNotificationRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ResultNotificationRepository])
], ResultNotificationController);
exports.ResultNotificationController = ResultNotificationController;
//# sourceMappingURL=result-notification.controller.js.map