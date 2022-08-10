import { DataTypes } from 'sequelize';

import db from '../db/connection';

const User = db.define('user', {
    name : {
        type: DataTypes.STRING
    },
    email : {
        type: DataTypes.STRING
    },
    status : {
        type: DataTypes.BOOLEAN
    }
}, {paranoid : true});

export default User;