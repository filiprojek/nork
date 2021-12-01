"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("@/app");
const environment_1 = __importDefault(require("@/utils/environment"));
const globalService_1 = require("@/services/globalService");
const port = environment_1.default.APP_PORT || 8080;
// MongoDB
const dbURI = environment_1.default.DB_URI;
mongoose_1.default
    .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => {
    new globalService_1.Succ(200, 'connected to db');
    app_1.app.listen(port, () => {
        new globalService_1.Succ(200, `Server is listening on http://localhost:${port}`);
    });
})
    .catch((err) => {
    new globalService_1.Err(500, err);
});
