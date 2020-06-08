"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GenexperttestanalyteController = class GenexperttestanalyteController {
    constructor(genexperttestanalyteRepository) {
        this.genexperttestanalyteRepository = genexperttestanalyteRepository;
    }
    async create(genexperttestanalyte) {
        return this.genexperttestanalyteRepository.create(genexperttestanalyte);
    }
    async count(where) {
        return this.genexperttestanalyteRepository.count(where);
    }
    async find(filter) {
        return this.genexperttestanalyteRepository.find(filter);
    }
    async updateAll(genexperttestanalyte, where) {
        return this.genexperttestanalyteRepository.updateAll(genexperttestanalyte, where);
    }
    async findById(id, filter) {
        return this.genexperttestanalyteRepository.findById(id, filter);
    }
    async updateById(id, genexperttestanalyte) {
        await this.genexperttestanalyteRepository.updateById(id, genexperttestanalyte);
    }
    async replaceById(id, genexperttestanalyte) {
        await this.genexperttestanalyteRepository.replaceById(id, genexperttestanalyte);
    }
    async deleteById(id) {
        await this.genexperttestanalyteRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/genexperttestanalytes', {
        responses: {
            '200': {
                description: 'Genexperttestanalyte model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Genexperttestanalyte) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexperttestanalyte, {
                    title: 'NewGenexperttestanalyte',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genexperttestanalyte]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/genexperttestanalytes/count', {
        responses: {
            '200': {
                description: 'Genexperttestanalyte model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Genexperttestanalyte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/genexperttestanalytes', {
        responses: {
            '200': {
                description: 'Array of Genexperttestanalyte model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Genexperttestanalyte, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Genexperttestanalyte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/genexperttestanalytes', {
        responses: {
            '200': {
                description: 'Genexperttestanalyte PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexperttestanalyte, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Genexperttestanalyte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genexperttestanalyte, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/genexperttestanalytes/{id}', {
        responses: {
            '200': {
                description: 'Genexperttestanalyte model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Genexperttestanalyte, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Genexperttestanalyte, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/genexperttestanalytes/{id}', {
        responses: {
            '204': {
                description: 'Genexperttestanalyte PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexperttestanalyte, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexperttestanalyte]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/genexperttestanalytes/{id}', {
        responses: {
            '204': {
                description: 'Genexperttestanalyte PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexperttestanalyte]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/genexperttestanalytes/{id}', {
        responses: {
            '204': {
                description: 'Genexperttestanalyte DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexperttestanalyteController.prototype, "deleteById", null);
GenexperttestanalyteController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.GenexperttestanalyteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GenexperttestanalyteRepository])
], GenexperttestanalyteController);
exports.GenexperttestanalyteController = GenexperttestanalyteController;
//# sourceMappingURL=genexperttestanalyte.controller.js.map