"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//@model()
let Genexpertsummary = class Genexpertsummary extends repository_1.Entity {
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
], Genexpertsummary.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Genexpertsummary.prototype, "mac_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexpertsummary.prototype, "total_files", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexpertsummary.prototype, "total_tests", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", Date)
], Genexpertsummary.prototype, "import_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexpertsummary.prototype, "files_received", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Genexpertsummary.prototype, "tests_received", void 0);
Genexpertsummary = tslib_1.__decorate([
    repository_1.model({
        settings: {
            mysql: {
                table: 'genexpertsummary' // lowercase
            }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Genexpertsummary);
exports.Genexpertsummary = Genexpertsummary;
//# sourceMappingURL=genexpertsummary.model.js.map