"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
require('dotenv').config({ path: path_1.default.join(__dirname, '../.env') });
exports.default = {
    APP_PORT: Number(process.env.APP_PORT),
    DB_URI: String(process.env.DB_URI),
};
