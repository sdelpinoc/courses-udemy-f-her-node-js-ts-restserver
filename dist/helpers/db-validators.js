"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsUserById = exports.emailExists = void 0;
const user_1 = __importDefault(require("../models/user"));
const emailExists = (email = '') => __awaiter(void 0, void 0, void 0, function* () {
    const emailExistsDB = yield user_1.default.findOne({ where: { email: email } });
    if (emailExistsDB) {
        throw new Error(`The email ${email} is already in use`);
    }
});
exports.emailExists = emailExists;
const existsUserById = (id = '') => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        throw new Error(`The user does not exits, id: ${id}`);
    }
});
exports.existsUserById = existsUserById;
//# sourceMappingURL=db-validators.js.map