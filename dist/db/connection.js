"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
// const db = new Sequelize('tsrestserver', 'tsrestserver', 'tsRest2365_', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging: true
// });
const db = new sequelize_1.Sequelize(config_1.default.database || '', process.env.MYSQL_USER || '', process.env.MYSQL_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    // logging: true
});
exports.default = db;
//# sourceMappingURL=connection.js.map