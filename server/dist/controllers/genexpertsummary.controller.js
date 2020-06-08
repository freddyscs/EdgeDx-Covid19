"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GenexpertsummaryController = class GenexpertsummaryController {
    constructor(genexpertsummaryRepository) {
        this.genexpertsummaryRepository = genexpertsummaryRepository;
    }
    async create(genexpertsummary) {
        return this.genexpertsummaryRepository.create(genexpertsummary);
    }
    async count(where) {
        return this.genexpertsummaryRepository.count(where);
    }
    async find(filter) {
        return this.genexpertsummaryRepository.find(filter);
    }
    async updateAll(genexpertsummary, where) {
        return this.genexpertsummaryRepository.updateAll(genexpertsummary, where);
    }
    async findById(id, filter) {
        return this.genexpertsummaryRepository.findById(id, filter);
    }
    async updateById(id, genexpertsummary) {
        await this.genexpertsummaryRepository.updateById(id, genexpertsummary);
    }
    async replaceById(id, genexpertsummary) {
        await this.genexpertsummaryRepository.replaceById(id, genexpertsummary);
    }
    async deleteById(id) {
        await this.genexpertsummaryRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/genexpertsummaries', {
        responses: {
            '200': {
                description: 'Genexpertsummary model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Genexpertsummary) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpertsummary, {
                    title: 'NewGenexpertsummary',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/genexpertsummaries/count', {
        responses: {
            '200': {
                description: 'Genexpertsummary model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Genexpertsummary)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/genexpertsummaries', {
        responses: {
            '200': {
                description: 'Array of Genexpertsummary model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Genexpertsummary, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Genexpertsummary)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/genexpertsummaries', {
        responses: {
            '200': {
                description: 'Genexpertsummary PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpertsummary, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Genexpertsummary)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genexpertsummary, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/genexpertsummaries/{id}', {
        responses: {
            '200': {
                description: 'Genexpertsummary model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Genexpertsummary, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Genexpertsummary, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/genexpertsummaries/{id}', {
        responses: {
            '204': {
                description: 'Genexpertsummary PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpertsummary, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexpertsummary]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/genexpertsummaries/{id}', {
        responses: {
            '204': {
                description: 'Genexpertsummary PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexpertsummary]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/genexpertsummaries/{id}', {
        responses: {
            '204': {
                description: 'Genexpertsummary DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertsummaryController.prototype, "deleteById", null);
GenexpertsummaryController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.GenexpertsummaryRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GenexpertsummaryRepository])
], GenexpertsummaryController);
exports.GenexpertsummaryController = GenexpertsummaryController;
//# sourceMappingURL=genexpertsummary.controller.js.map