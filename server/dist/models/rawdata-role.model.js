"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//@model()
let RawdataRole = class RawdataRole extends repository_1.Entity {
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
], RawdataRole.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RawdataRole.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], RawdataRole.prototype, "status", void 0);
RawdataRole = tslib_1.__decorate([
    repository_1.model({
        settings: {
            mysql: {
                table: 'rawdata_role' // lowercase
            }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], RawdataRole);
exports.RawdataRole = RawdataRole;
//# sourceMappingURL=rawdata-role.model.js.map