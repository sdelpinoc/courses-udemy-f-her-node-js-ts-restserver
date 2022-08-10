import { Request, Response } from 'express';
import User from '../models/user';

const getUsers = async (req: Request, res: Response) => {

    const users = await User.findAll();

    res.json({ users });
};

const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: `No exists the user with id: ${id}`
        });
    }

    res.json(user);
};

const addUser = async (req: Request, res: Response) => {

    const { name, email } = req.body;

    try {

        // Check unique email is move to helpers/db-validators.ts

        const user = User.build({
            name,
            email
        });

        await user.save();

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error, talk to the administador',
        });
    }
};

const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { name, email } = req.body;

    try {

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(500).json({
                msg: `User not exists, id: ${id}`,
            });
        }

        await user.update({ name, email });

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error, talk to the administador',
        });
    }
};

const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    // const user = await User.findByPk(id);

    // To find a row with soft-deletion
    const user = await User.findByPk(id, { paranoid: false });

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
    await user.destroy({ force: true });

    // Only change the status
    // await user.update({status: false});

    res.json({
        msg: 'User deleted'
    });
}

export {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};
