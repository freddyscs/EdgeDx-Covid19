"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Survey = class Survey extends repository_1.Entity {
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
], Survey.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "fever", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "taste", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "feverDays", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "feverMeasure", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "feverHighest", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "cough", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "coughDays", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "coughMeasure", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "breath", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "smell", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "cardio", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "diabetes", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "bloodPreasure", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "respiratoryDisease", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "cancer", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "chest", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "exhaustation", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "arouse", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "bluish", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "diarrhea", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "daysSheltered", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "age", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "ethnicity", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "acknowledge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], Survey.prototype, "corona", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "zipcode", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: false,
    }),
    tslib_1.__metadata("design:type", String)
], Survey.prototype, "created_at", void 0);
Survey = tslib_1.__decorate([
    repository_1.model({
        settings: {
            mysql: {
                table: 'survey' // lowercase
            }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Survey);
exports.Survey = Survey;
//# sourceMappingURL=survey.model.js.map