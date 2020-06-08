"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const authentication_1 = require("@loopback/authentication");
const SequenceActions = rest_1.RestBindings.SequenceActions;
let MyAuthenticationSequence = class MyAuthenticationSequence {
    constructor(findRoute, parseParams, invoke, send, reject, authenticateRequest) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.authenticateRequest = authenticateRequest;
    }
    async handle(context) {
        try {
            const { request, response } = context;
            const route = this.findRoute(request);
            //call authentication action
            await this.authenticateRequest(request);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (err) {
            // The authentication action utilizes a strategy resolver to find
            // an authentication strategy by name, and then it calls
            // strategy.authenticate(request).
            //
            // The strategy resolver throws a non-http error if it cannot
            // resolve the strategy. When the strategy resolver obtains
            // a strategy, it calls strategy.authenticate(request) which
            // is expected to return a user profile. If the user profile
            // is undefined, then it throws a non-http error.
            //
            // It is necessary to catch these errors and add HTTP-specific status
            // code property.
            //
            // Errors thrown by the strategy implementations already come
            // with statusCode set.
            //
            // In the future, we want to improve `@loopback/rest` to provide
            // an extension point allowing `@loopback/authentication` to contribute
            // mappings from error codes to HTTP status codes, so that application
            // don't have to map codes themselves.
            if (err.code === authentication_1.AUTHENTICATION_STRATEGY_NOT_FOUND ||
                err.code === authentication_1.USER_PROFILE_NOT_FOUND) {
                Object.assign(err, { statusCode: 401 /* Unauthorized */ });
            }
            this.reject(context, err);
            return;
        }
    }
};
MyAuthenticationSequence = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(SequenceActions.FIND_ROUTE)),
    tslib_1.__param(1, context_1.inject(SequenceActions.PARSE_PARAMS)),
    tslib_1.__param(2, context_1.inject(SequenceActions.INVOKE_METHOD)),
    tslib_1.__param(3, context_1.inject(SequenceActions.SEND)),
    tslib_1.__param(4, context_1.inject(SequenceActions.REJECT)),
    tslib_1.__param(5, context_1.inject(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Function, Function, Function, Function])
], MyAuthenticationSequence);
exports.MyAuthenticationSequence = MyAuthenticationSequence;
//# sourceMappingURL=sequence.js.map