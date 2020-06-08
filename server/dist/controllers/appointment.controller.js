"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AppointmentController = class AppointmentController {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    async create(appointment) {
        return this.appointmentRepository.create(appointment);
    }
    async count(where) {
        return this.appointmentRepository.count(where);
    }
    async find(filter) {
        return this.appointmentRepository.find(filter);
    }
    async updateAll(appointment, where) {
        return this.appointmentRepository.updateAll(appointment, where);
    }
    async findById(id, filter) {
        return this.appointmentRepository.findById(id, filter);
    }
    async updateById(id, appointment) {
        await this.appointmentRepository.updateById(id, appointment);
    }
    async replaceById(id, appointment) {
        await this.appointmentRepository.replaceById(id, appointment);
    }
    async deleteById(id) {
        await this.appointmentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/appointments', {
        responses: {
            '200': {
                description: 'Appointment model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Appointment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Appointment, {
                    title: 'NewAppointment',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/appointments/count', {
        responses: {
            '200': {
                description: 'Appointment model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Appointment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/appointments', {
        responses: {
            '200': {
                description: 'Array of Appointment model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Appointment, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Appointment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/appointments', {
        responses: {
            '200': {
                description: 'Appointment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Appointment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Appointment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Appointment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/appointments/{id}', {
        responses: {
            '200': {
                description: 'Appointment model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Appointment, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Appointment, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/appointments/{id}', {
        responses: {
            '204': {
                description: 'Appointment PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Appointment, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Appointment]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/appointments/{id}', {
        responses: {
            '204': {
                description: 'Appointment PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Appointment]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/appointments/{id}', {
        responses: {
            '204': {
                description: 'Appointment DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AppointmentController.prototype, "deleteById", null);
AppointmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AppointmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AppointmentRepository])
], AppointmentController);
exports.AppointmentController = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map