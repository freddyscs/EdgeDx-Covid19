"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RawdataRoleController = class RawdataRoleController {
    constructor(rawdataRoleRepository) {
        this.rawdataRoleRepository = rawdataRoleRepository;
    }
    async create(rawdataRole) {
        return this.rawdataRoleRepository.create(rawdataRole);
    }
    async count(where) {
        return this.rawdataRoleRepository.count(where);
    }
    async find(filter) {
        return this.rawdataRoleRepository.find(filter);
    }
    async updateAll(rawdataRole, where) {
        return this.rawdataRoleRepository.updateAll(rawdataRole, where);
    }
    async findById(id, filter) {
        return this.rawdataRoleRepository.findById(id, filter);
    }
    async updateById(id, rawdataRole) {
        await this.rawdataRoleRepository.updateById(id, rawdataRole);
    }
    async replaceById(id, rawdataRole) {
        await this.rawdataRoleRepository.replaceById(id, rawdataRole);
    }
    async deleteById(id) {
        await this.rawdataRoleRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/roles', {
        responses: {
            '200': {
                description: 'RawdataRole model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.RawdataRole) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RawdataRole, {
                    title: 'NewRawdataRole',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/roles/count', {
        responses: {
            '200': {
                description: 'RawdataRole model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.RawdataRole)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/roles', {
        responses: {
            '200': {
                description: 'Array of RawdataRole model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.RawdataRole, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.RawdataRole)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/roles', {
        responses: {
            '200': {
                description: 'RawdataRole PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RawdataRole, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.RawdataRole)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.RawdataRole, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/roles/{id}', {
        responses: {
            '200': {
                description: 'RawdataRole model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.RawdataRole, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.RawdataRole, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/roles/{id}', {
        responses: {
            '204': {
                description: 'RawdataRole PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RawdataRole, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.RawdataRole]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/roles/{id}', {
        responses: {
            '204': {
                description: 'RawdataRole PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.RawdataRole]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/roles/{id}', {
        responses: {
            '204': {
                description: 'RawdataRole DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataRoleController.prototype, "deleteById", null);
RawdataRoleController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RawdataRoleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RawdataRoleRepository])
], RawdataRoleController);
exports.RawdataRoleController = RawdataRoleController;
//# sourceMappingURL=rawdata-role.controller.js.map