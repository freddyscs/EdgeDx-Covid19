"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const rawdata_user_repository_1 = require("../repositories/rawdata-user.repository");
const security_1 = require("@loopback/security");
const repository_1 = require("@loopback/repository");
const keys_1 = require("../keys");
const context_1 = require("@loopback/context");
let MyUserService = class MyUserService {
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async verifyCredentials(credentials) {
        const invalidCredentialsError = 'Invalid email or password.';
        const foundUser = await this.userRepository.findOne({
            where: { email: credentials.email },
        });
        if (!foundUser) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        const credentialsFound = await this.userRepository.findById(foundUser.id);
        if (!credentialsFound) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        const passwordMatched = await this.passwordHasher.comparePassword(credentials.password, credentialsFound.password);
        if (!passwordMatched) {
            throw new rest_1.HttpErrors.Unauthorized(invalidCredentialsError);
        }
        return foundUser;
    }
    convertToUserProfile(user) {
        // since first name and lastName are optional, no error is thrown if not provided
        let userName = '';
        if (user.username)
            userName = `${user.username}`;
        if (user.lastName)
            userName = user.firstName
                ? `${userName} ${user.lastName}`
                : `${user.lastName}`;
        const userProfile = {
            [security_1.securityId]: user.id,
            name: userName,
            id: user.id,
            roles: user.role_id,
        };
        return userProfile;
    }
};
MyUserService = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(rawdata_user_repository_1.RawdataUserRepository)),
    tslib_1.__param(1, context_1.inject(keys_1.PasswordHasherBindings.PASSWORD_HASHER)),
    tslib_1.__metadata("design:paramtypes", [rawdata_user_repository_1.RawdataUserRepository, Object])
], MyUserService);
exports.MyUserService = MyUserService;
//# sourceMappingURL=user-service.js.map