"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
const authentication_1 = require("@loopback/authentication");
const user_controller_specs_1 = require("./specs/user-controller.specs");
let RawdataUserController = class RawdataUserController {
    constructor(rawdataUserRepository, passwordHasher, jwtService, userService) {
        this.rawdataUserRepository = rawdataUserRepository;
        this.passwordHasher = passwordHasher;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async create(rawdataUser) {
        //console.log(rawdataUser.password);
        //return this.rawdataUserRepository.create(rawdataUser);
        console.log(rawdataUser);
        // encrypt the password
        const password = await this.passwordHasher.hashPassword(rawdataUser.password);
        console.log("nueva:" + password);
        rawdataUser.password = password;
        return this.rawdataUserRepository.create(rawdataUser);
    }
    async count(where) {
        return this.rawdataUserRepository.count(where);
    }
    async find(filter) {
        return this.rawdataUserRepository.find(filter);
    }
    async updateAll(rawdataUser, where) {
        return this.rawdataUserRepository.updateAll(rawdataUser, where);
    }
    async findById(id, filter) {
        return this.rawdataUserRepository.findById(id, filter);
    }
    async updateById(id, rawdataUser) {
        await this.rawdataUserRepository.updateById(id, rawdataUser);
    }
    async replaceById(id, rawdataUser) {
        await this.rawdataUserRepository.replaceById(id, rawdataUser);
    }
    async deleteById(id) {
        await this.rawdataUserRepository.deleteById(id);
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        console.log("user" + user);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        console.log("userProfile" + userProfile);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        console.log("token:" + token);
        return { token };
    }
};
tslib_1.__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'RawdataUser model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.RawdataUser) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RawdataUser, {
                    title: 'NewRawdataUser',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/users/count', {
        responses: {
            '200': {
                description: 'RawdataUser model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.RawdataUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of RawdataUser model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.RawdataUser, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    tslib_1.__param(0, rest_1.param.filter(models_1.RawdataUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/users', {
        responses: {
            '200': {
                description: 'RawdataUser PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RawdataUser, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.RawdataUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.RawdataUser, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/users/{id}', {
        responses: {
            '200': {
                description: 'RawdataUser model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.RawdataUser, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.RawdataUser, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/users/{id}', {
        responses: {
            '204': {
                description: 'RawdataUser PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RawdataUser, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.RawdataUser]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/users/{id}', {
        responses: {
            '204': {
                description: 'RawdataUser PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.RawdataUser]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/users/{id}', {
        responses: {
            '204': {
                description: 'RawdataUser DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.post('/users/login', {
        responses: {
            '200': {
                description: 'Token',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody(user_controller_specs_1.CredentialsRequestBody)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawdataUserController.prototype, "login", null);
RawdataUserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RawdataUserRepository)),
    tslib_1.__param(1, core_1.inject(keys_1.PasswordHasherBindings.PASSWORD_HASHER)),
    tslib_1.__param(2, core_1.inject(keys_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(3, core_1.inject(keys_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RawdataUserRepository, Object, Object, Object])
], RawdataUserController);
exports.RawdataUserController = RawdataUserController;
//# sourceMappingURL=rawdata-user.controller.js.map