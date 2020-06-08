"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECURITY_SPEC = [{ bearerAuth: [] }];
exports.SECURITY_SCHEME_SPEC = {
    bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    },
};
//# sourceMappingURL=security-spec.js.map