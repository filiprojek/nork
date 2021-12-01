"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Succ = exports.Err = void 0;
const colors_1 = __importDefault(require("colors"));
class Err {
    constructor(code, message) {
        this.code = code;
        this.message = message;
        this.drop();
    }
    drop() {
        console.log(colors_1.default.bgRed(`${this.code}`) + colors_1.default.bgBlack.red(` ${this.message}`));
        return {
            code: this.code,
            message: this.message,
        };
    }
}
exports.Err = Err;
class Succ {
    constructor(code, message) {
        this.code = code;
        this.message = message;
        this.drop();
    }
    drop() {
        console.log(colors_1.default.bgGreen.black(`${this.code}`) + colors_1.default.green.bgBlack(` ${this.message}`));
        return {
            code: this.code,
            message: this.message,
        };
    }
}
exports.Succ = Succ;
