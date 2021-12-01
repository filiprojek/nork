"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("@/routes");
const middlewares_1 = require("@/middlewares");
const corsWhitelist = ['http://localhost:8080', 'http://localhost:6060'];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || corsWhitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true,
};
exports.app = (0, express_1.default)();
// Middlewares
exports.app.use(middlewares_1.router);
exports.app.set('view engine', 'ejs');
exports.app.set('views', path_1.default.join(__dirname, 'views'));
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.app.use((0, cookie_parser_1.default)());
// Routes
exports.app.use(routes_1.router);
