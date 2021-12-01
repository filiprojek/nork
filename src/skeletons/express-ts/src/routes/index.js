"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const rootRoutes_1 = require("./rootRoutes");
exports.router = (0, express_1.Router)();
exports.router.use(rootRoutes_1.router);
// 404
exports.router.use((req, res) => {
    res.status(404).send('E404');
});
