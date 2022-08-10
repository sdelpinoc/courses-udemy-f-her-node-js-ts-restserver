"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    'database': process.env.MYSQL_DB,
    'name': process.env.MYSQL_USER,
    'password': process.env.MYSQL_PASSWORD,
    'host': process.env.MYSQL_HOST,
};
exports.default = dbConfig;
//# sourceMappingURL=config.js.map