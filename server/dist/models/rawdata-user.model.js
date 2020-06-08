"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//@model()
let RawdataUser = class RawdataUser extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], RawdataUser.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RawdataUser.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RawdataUser.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RawdataUser.prototype, "password", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], RawdataUser.prototype, "role_id", void 0);
RawdataUser = tslib_1.__decorate([
    repository_1.model({
        settings: {
            mysql: {
                table: 'rawdata_user' // lowercase
            }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], RawdataUser);
exports.RawdataUser = RawdataUser;
//# sourceMappingURL=rawdata-user.model.js.map