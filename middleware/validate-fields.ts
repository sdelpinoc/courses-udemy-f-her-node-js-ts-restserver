import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

// We extend the Error type and add status atribute to avoid the error: "Property 'status' does not exist on type 'SyntaxError'"
interface ErrorStatus extends Error {
    status: number;
}

const validateFields = (req: Request, res: Response, next: NextFunction) => {
    // Errors from express-validator used in js file from routes directory
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
        // return res.status(400).json({ errors: errors.array() });
    }

    // Is it ok, continue with the next function(or middleware)
    next();
};

const validateJSON = (err: ErrorStatus, req: Request, res: Response, next: NextFunction) => {
    console.log({err});
    // console.log({req});
    // console.log({res});
    // console.log({next});
    // console.log('err.status: ', err.status);
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({ status: 400, message: err.message }); // Bad request
    }

    next();
};

export {
    validateFields,
    validateJSON
};
