"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const sayHiMiddleware_1 = require("@/middlewares/sayHiMiddleware");
exports.router = (0, express_1.Router)();
exports.router.use(sayHiMiddleware_1.router);
