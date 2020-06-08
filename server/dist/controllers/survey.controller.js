"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SurveyController = class SurveyController {
    constructor(surveyRepository) {
        this.surveyRepository = surveyRepository;
    }
    async create(survey) {
        return this.surveyRepository.create(survey);
    }
    async count(where) {
        return this.surveyRepository.count(where);
    }
    async find(filter) {
        return this.surveyRepository.find(filter);
    }
    async updateAll(survey, where) {
        return this.surveyRepository.updateAll(survey, where);
    }
    async findById(id, filter) {
        return this.surveyRepository.findById(id, filter);
    }
    async updateById(id, survey) {
        await this.surveyRepository.updateById(id, survey);
    }
    async replaceById(id, survey) {
        await this.surveyRepository.replaceById(id, survey);
    }
    async deleteById(id) {
        await this.surveyRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/surveys', {
        responses: {
            '200': {
                description: 'Survey model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Survey) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Survey, {
                    title: 'NewSurvey',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/surveys/count', {
        responses: {
            '200': {
                description: 'Survey model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Survey)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/surveys', {
        responses: {
            '200': {
                description: 'Array of Survey model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Survey, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Survey)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/surveys', {
        responses: {
            '200': {
                description: 'Survey PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Survey, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Survey)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Survey, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/surveys/{id}', {
        responses: {
            '200': {
                description: 'Survey model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Survey, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Survey, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/surveys/{id}', {
        responses: {
            '204': {
                description: 'Survey PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Survey, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Survey]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/surveys/{id}', {
        responses: {
            '204': {
                description: 'Survey PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Survey]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/surveys/{id}', {
        responses: {
            '204': {
                description: 'Survey DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveyController.prototype, "deleteById", null);
SurveyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SurveyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SurveyRepository])
], SurveyController);
exports.SurveyController = SurveyController;
//# sourceMappingURL=survey.controller.js.map