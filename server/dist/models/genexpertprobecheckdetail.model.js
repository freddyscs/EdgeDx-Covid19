"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//@model()
let Genexpertprobecheckdetail = class Genexpertprobecheckdetail extends repository_1.Entity {
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
], Genexpertprobecheckdetail.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexpertprobecheckdetail.prototype, "test_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexpertprobecheckdetail.prototype, "analyte_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexpertprobecheckdetail.prototype, "prb_chk_1", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexpertprobecheckdetail.prototype, "prb_chk_2", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexpertprobecheckdetail.prototype, "prb_chk_3", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexpertprobecheckdetail.prototype, "probe_check_result", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexpertprobecheckdetail.prototype, "device_name", void 0);
Genexpertprobecheckdetail = tslib_1.__decorate([
    repository_1.model({
        settings: {
            mysql: {
                table: 'genexpertprobecheckdetail' // lowercase
            }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Genexpertprobecheckdetail);
exports.Genexpertprobecheckdetail = Genexpertprobecheckdetail;
//# sourceMappingURL=genexpertprobecheckdetail.model.js.map