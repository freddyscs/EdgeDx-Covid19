"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GenexpertprobecheckdetailController = class GenexpertprobecheckdetailController {
    constructor(genexpertprobecheckdetailRepository) {
        this.genexpertprobecheckdetailRepository = genexpertprobecheckdetailRepository;
    }
    async create(genexpertprobecheckdetail) {
        return this.genexpertprobecheckdetailRepository.create(genexpertprobecheckdetail);
    }
    async count(where) {
        return this.genexpertprobecheckdetailRepository.count(where);
    }
    async find(filter) {
        return this.genexpertprobecheckdetailRepository.find(filter);
    }
    async updateAll(genexpertprobecheckdetail, where) {
        return this.genexpertprobecheckdetailRepository.updateAll(genexpertprobecheckdetail, where);
    }
    async findById(id, filter) {
        return this.genexpertprobecheckdetailRepository.findById(id, filter);
    }
    async updateById(id, genexpertprobecheckdetail) {
        await this.genexpertprobecheckdetailRepository.updateById(id, genexpertprobecheckdetail);
    }
    async replaceById(id, genexpertprobecheckdetail) {
        await this.genexpertprobecheckdetailRepository.replaceById(id, genexpertprobecheckdetail);
    }
    async deleteById(id) {
        await this.genexpertprobecheckdetailRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/genexpertprobecheckdetails', {
        responses: {
            '200': {
                description: 'Genexpertprobecheckdetail model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Genexpertprobecheckdetail) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpertprobecheckdetail, {
                    title: 'NewGenexpertprobecheckdetail',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genexpertprobecheckdetail]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/genexpertprobecheckdetails/count', {
        responses: {
            '200': {
                description: 'Genexpertprobecheckdetail model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Genexpertprobecheckdetail)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/genexpertprobecheckdetails', {
        responses: {
            '200': {
                description: 'Array of Genexpertprobecheckdetail model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Genexpertprobecheckdetail, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Genexpertprobecheckdetail)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/genexpertprobecheckdetails', {
        responses: {
            '200': {
                description: 'Genexpertprobecheckdetail PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpertprobecheckdetail, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Genexpertprobecheckdetail)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genexpertprobecheckdetail, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/genexpertprobecheckdetails/{id}', {
        responses: {
            '200': {
                description: 'Genexpertprobecheckdetail model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Genexpertprobecheckdetail, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Genexpertprobecheckdetail, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/genexpertprobecheckdetails/{id}', {
        responses: {
            '204': {
                description: 'Genexpertprobecheckdetail PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genexpertprobecheckdetail, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexpertprobecheckdetail]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/genexpertprobecheckdetails/{id}', {
        responses: {
            '204': {
                description: 'Genexpertprobecheckdetail PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Genexpertprobecheckdetail]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/genexpertprobecheckdetails/{id}', {
        responses: {
            '204': {
                description: 'Genexpertprobecheckdetail DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GenexpertprobecheckdetailController.prototype, "deleteById", null);
GenexpertprobecheckdetailController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.GenexpertprobecheckdetailRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GenexpertprobecheckdetailRepository])
], GenexpertprobecheckdetailController);
exports.GenexpertprobecheckdetailController = GenexpertprobecheckdetailController;
//# sourceMappingURL=genexpertprobecheckdetail.controller.js.map