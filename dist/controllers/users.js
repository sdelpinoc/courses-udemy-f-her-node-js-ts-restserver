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
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `No exists the user with id: ${id}`
        });
    }
    res.json(user);
});
exports.getUser = getUser;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        // Check unique email is move to helpers/db-validators.ts
        const user = user_1.default.build({
            name,
            email
        });
        yield user.save();
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error, talk to the administador',
        });
    }
});
exports.addUser = addUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(500).json({
                msg: `User not exists, id: ${id}`,
            });
        }
        yield user.update({ name, email });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error, talk to the administador',
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // const user = await User.findByPk(id);
    // To find a row with soft-deletion
    const user = yield user_1.default.findByPk(id, { paranoid: false });
    if (!user) {
        return res.status(500).json({
            msg: `User not exists, id: ${id}`,
        });
    }
    // Delete a row in DB
    // soft-deletion if paronoid is true in the model definition
    // also you need to create a field call deleteAt(null) in the users table
    // await user.destroy();
    // To force the deletion from the db
    yield user.destroy({ force: true });
    // Only change the status
    // await user.update({status: false});
    res.json({
        msg: 'User deleted'
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map