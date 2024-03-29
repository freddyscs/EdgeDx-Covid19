"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PlaceController = class PlaceController {
    constructor(placeRepository) {
        this.placeRepository = placeRepository;
    }
    async create(place) {
        return this.placeRepository.create(place);
    }
    async count(where) {
        return this.placeRepository.count(where);
    }
    async find(filter) {
        return this.placeRepository.find(filter);
    }
    async updateAll(place, where) {
        return this.placeRepository.updateAll(place, where);
    }
    async findById(id, filter) {
        return this.placeRepository.findById(id, filter);
    }
    async updateById(id, place) {
        await this.placeRepository.updateById(id, place);
    }
    async replaceById(id, place) {
        await this.placeRepository.replaceById(id, place);
    }
    async deleteById(id) {
        await this.placeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/places', {
        responses: {
            '200': {
                description: 'Place model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Place) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Place, {
                    title: 'NewPlace',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/places/count', {
        responses: {
            '200': {
                description: 'Place model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Place)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/places', {
        responses: {
            '200': {
                description: 'Array of Place model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Place, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Place)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/places', {
        responses: {
            '200': {
                description: 'Place PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Place, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Place)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Place, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/places/{id}', {
        responses: {
            '200': {
                description: 'Place model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Place, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Place, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/places/{id}', {
        responses: {
            '204': {
                description: 'Place PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Place, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Place]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/places/{id}', {
        responses: {
            '204': {
                description: 'Place PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Place]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/places/{id}', {
        responses: {
            '204': {
                description: 'Place DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PlaceController.prototype, "deleteById", null);
PlaceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PlaceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PlaceRepository])
], PlaceController);
exports.PlaceController = PlaceController;
//# sourceMappingURL=place.controller.js.map