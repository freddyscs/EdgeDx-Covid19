"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//@model()
let Genexperttestanalyte = class Genexperttestanalyte extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexperttestanalyte.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexperttestanalyte.prototype, "test_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexperttestanalyte.prototype, "analyte_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexperttestanalyte.prototype, "ct", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexperttestanalyte.prototype, "end_pt", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexperttestanalyte.prototype, "analyte_result", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexperttestanalyte.prototype, "probe_check_result", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexperttestanalyte.prototype, "device_name", void 0);
Genexperttestanalyte = tslib_1.__decorate([
    repository_1.model({
        settings: {
            mysql: {
                table: 'genexperttestanalyte' // lowercase
            }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Genexperttestanalyte);
exports.Genexperttestanalyte = Genexperttestanalyte;
//# sourceMappingURL=genexperttestanalyte.model.js.map