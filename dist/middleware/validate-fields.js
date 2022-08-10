"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJSON = exports.validateFields = void 0;
const express_validator_1 = require("express-validator");
const validateFields = (req, res, next) => {
    // Errors from express-validator used in js file from routes directory
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
        // return res.status(400).json({ errors: errors.array() });
    }
    // Is it ok, continue with the next function(or middleware)
    next();
};
exports.validateFields = validateFields;
const validateJSON = (err, req, res, next) => {
    console.log({ err });
    // console.log({req});
    // console.log({res});
    // console.log({next});
    // console.log('err.status: ', err.status);
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({ status: 400, message: err.message }); // Bad request
    }
    next();
};
exports.validateJSON = validateJSON;
//# sourceMappingURL=validate-fields.js.map