import { Router } from 'express';
import { param, query, body } from 'express-validator';

import { addUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users';
import { emailExists, existsUserById } from '../helpers/db-validators';
import { validateFields } from '../middleware/validate-fields';

const router = Router();

router.get('/', getUsers);

router.get('/:id', [
    param('id').isNumeric().notEmpty(),
    validateFields
], getUser);

router.post('/', [
    body('name').notEmpty(),
    body('email').notEmpty(),
    body('email').custom(emailExists),
    validateFields
], addUser);

router.put('/:id', [
    param('id').isNumeric().notEmpty(),
    body('name').notEmpty(),
    body('email').notEmpty(),
    validateFields
], updateUser);

router.delete('/:id', deleteUser);

export default router;