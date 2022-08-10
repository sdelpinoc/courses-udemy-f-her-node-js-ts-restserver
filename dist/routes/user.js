"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_1 = require("../controllers/users");
const db_validators_1 = require("../helpers/db-validators");
const validate_fields_1 = require("../middleware/validate-fields");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.param)('id').isNumeric().notEmpty(),
    validate_fields_1.validateFields
], users_1.getUser);
router.post('/', [
    (0, express_validator_1.body)('name').notEmpty(),
    (0, express_validator_1.body)('email').notEmpty(),
    (0, express_validator_1.body)('email').custom(db_validators_1.emailExists),
    validate_fields_1.validateFields
], users_1.addUser);
router.put('/:id', [
    (0, express_validator_1.param)('id').isNumeric().notEmpty(),
    (0, express_validator_1.body)('name').notEmpty(),
    (0, express_validator_1.body)('email').notEmpty(),
    validate_fields_1.validateFields
], users_1.updateUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map