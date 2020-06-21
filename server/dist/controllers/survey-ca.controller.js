"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SurveyCaController = class SurveyCaController {
    constructor(surveyCaRepository) {
        this.surveyCaRepository = surveyCaRepository;
    }
    async create(surveyCa) {
        return this.surveyCaRepository.create(surveyCa);
    }
    async count(where) {
        return this.surveyCaRepository.count(where);
    }
    async find(filter) {
        return this.surveyCaRepository.find(filter);
    }
    async updateAll(surveyCa, where) {
        return this.surveyCaRepository.updateAll(surveyCa, where);
    }
    async findById(id, filter) {
        return this.surveyCaRepository.findById(id, filter);
    }
    async updateById(id, surveyCa) {
        await this.surveyCaRepository.updateById(id, surveyCa);
    }
    async replaceById(id, surveyCa) {
        await this.surveyCaRepository.replaceById(id, surveyCa);
    }
    async deleteById(id) {
        await this.surveyCaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/surveyca', {
        responses: {
            '200': {
                description: 'SurveyCa model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SurveyCa) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SurveyCa, {
                    title: 'NewSurveyCa',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/surveyca/count', {
        responses: {
            '200': {
                description: 'SurveyCa model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SurveyCa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/surveyca', {
        responses: {
            '200': {
                description: 'Array of SurveyCa model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SurveyCa, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SurveyCa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/surveyca', {
        responses: {
            '200': {
                description: 'SurveyCa PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SurveyCa, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SurveyCa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SurveyCa, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/surveyca/{id}', {
        responses: {
            '200': {
                description: 'SurveyCa model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SurveyCa, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SurveyCa, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/surveyca/{id}', {
        responses: {
            '204': {
                description: 'SurveyCa PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SurveyCa, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SurveyCa]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/surveyca/{id}', {
        responses: {
            '204': {
                description: 'SurveyCa PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SurveyCa]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/surveyca/{id}', {
        responses: {
            '204': {
                description: 'SurveyCa DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyCaController.prototype, "deleteById", null);
SurveyCaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SurveyCaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SurveyCaRepository])
], SurveyCaController);
exports.SurveyCaController = SurveyCaController;
//# sourceMappingURL=survey-ca.controller.js.map