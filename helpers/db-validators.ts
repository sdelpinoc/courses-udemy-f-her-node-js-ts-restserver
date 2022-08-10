
import User from '../models/user';

const emailExists = async (email = '') => {
    const emailExistsDB = await User.findOne({ where: { email: email } });

    if (emailExistsDB) {
        throw new Error(`The email ${email} is already in use`);
    }
};

const existsUserById = async (id = '') => {
    const user = await User.findByPk(id);

    if (!user) {
        throw new Error(`The user does not exits, id: ${id}`);
    }
};

export {
    emailExists,
    existsUserById
};