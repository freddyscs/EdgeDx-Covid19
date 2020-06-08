"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
//@model()
let ResultNotification = class ResultNotification extends repository_1.Entity {
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
], ResultNotification.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ResultNotification.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ResultNotification.prototype, "sample_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: false,
    }),
    tslib_1.__metadata("design:type", Number)
], ResultNotification.prototype, "notification_sent", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    tslib_1.__metadata("design:type", String)
], ResultNotification.prototype, "phone_number", void 0);
ResultNotification = tslib_1.__decorate([
    repository_1.model({
        settings: {
            mysql: {
                table: 'result_notification' // lowercase
            }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ResultNotification);
exports.ResultNotification = ResultNotification;
//# sourceMappingURL=result-notification.model.js.map