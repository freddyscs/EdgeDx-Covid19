"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const core_1 = require("@loopback/core");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
const authentication_1 = require("@loopback/authentication");
const authentication_2 = require("@loopback/authentication");
const jwt_strategy_1 = require("./authentication-strategies/jwt-strategy");
const keys_1 = require("./keys");
const jwt_service_1 = require("./services/jwt-service");
const hash_password_bcryptjs_1 = require("./services/hash.password.bcryptjs");
const user_service_1 = require("./services/user-service");
const security_spec_1 = require("./utils/security-spec");
exports.PackageKey = core_1.BindingKey.create('application.package');
const pkg = require('../package.json');
class MyrawdataApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        //this.sequence(MySequence);
        this.api({
            openapi: '3.0.0',
            info: { title: pkg.name, version: pkg.version },
            paths: {},
            components: { securitySchemes: security_spec_1.SECURITY_SCHEME_SPEC },
            servers: [{ url: 'localhost:3000/' }],
            security: security_spec_1.SECURITY_SPEC
        });
        //Set up bindings 
        this.setUpBindings();
        // authentication
        authentication_2.registerAuthenticationStrategy(this, jwt_strategy_1.JWTAuthenticationStrategy);
        // Set up the custom sequence
        this.sequence(sequence_1.MyAuthenticationSequence);
        // Bind authentication component related elements
        this.component(authentication_1.AuthenticationComponent);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
    setUpBindings() {
        // Bind package.json to the application context
        this.bind(exports.PackageKey).to(pkg);
        this.bind(keys_1.TokenServiceBindings.TOKEN_SECRET).to(keys_1.TokenServiceConstants.TOKEN_SECRET_VALUE);
        this.bind(keys_1.TokenServiceBindings.TOKEN_EXPIRES_IN).to(keys_1.TokenServiceConstants.TOKEN_EXPIRES_IN_VALUE);
        this.bind(keys_1.TokenServiceBindings.TOKEN_SERVICE).toClass(jwt_service_1.JWTService);
        // // Bind bcrypt hash services
        this.bind(keys_1.PasswordHasherBindings.ROUNDS).to(10);
        this.bind(keys_1.PasswordHasherBindings.PASSWORD_HASHER).toClass(hash_password_bcryptjs_1.BcryptHasher);
        this.bind(keys_1.UserServiceBindings.USER_SERVICE).toClass(user_service_1.MyUserService);
    }
}
exports.MyrawdataApplication = MyrawdataApplication;
//# sourceMappingURL=application.js.map