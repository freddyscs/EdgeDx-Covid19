"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GenexpertController = class GenexpertController {
    constructor(genexpertRepository) {
        this.genexpertRepository = genexpertRepository;
    }
    async create(genexpert) {
        return this.genexpertRepository.create(genexpert);
    }
    async count(where) {
        return this.genexpertRepository.count(where);
    }
    async find(filter) {
        return this.genexpertRepository.find(filter);
    }
    async updateAll(genexpert, where) {
        return this.genexpertRepository.updateAll(genexpert, where);
    }
    async findById(id, filter) {
        return this.genexpertRepository.findById(id, filter);
    }
    async updateById(id, genexpert) {
        await this.genexpertRepository.updateById(id, genexpert);
    }
    async replaceById(id, genexpert) {
        await this.genexpertRepository.replaceById(id, genexpert);
    }
    async deleteById(id) {
        await this.genexpertRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/genexperts', {
        responses: {
            '200': {
                description: 'Genexpert model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Genexpert) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpert, {
                    title: 'NewGenexpert',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genexpert]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/genexperts/count', {
        responses: {
            '200': {
                description: 'Genexpert model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Genexpert)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/genexperts', {
        responses: {
            '200': {
                description: 'Array of Genexpert model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Genexpert, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Genexpert)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/genexperts', {
        responses: {
            '200': {
                description: 'Genexpert PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpert, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Genexpert)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genexpert, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/genexperts/{id}', {
        responses: {
            '200': {
                description: 'Genexpert model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Genexpert, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Genexpert, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/genexperts/{id}', {
        responses: {
            '204': {
                description: 'Genexpert PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpert, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexpert]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/genexperts/{id}', {
        responses: {
            '204': {
                description: 'Genexpert PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexpert]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/genexperts/{id}', {
        responses: {
            '204': {
                description: 'Genexpert DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertController.prototype, "deleteById", null);
GenexpertController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.GenexpertRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GenexpertRepository])
], GenexpertController);
exports.GenexpertController = GenexpertController;
//# sourceMappingURL=genexpert.controller.js.map