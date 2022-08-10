import { Sequelize } from 'sequelize';

import dbConfig from './config';

// const db = new Sequelize('tsrestserver', 'tsrestserver', 'tsRest2365_', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging: true
// });

const db = new Sequelize(dbConfig.database || '', process.env.MYSQL_USER || '', process.env.MYSQL_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    // logging: true
});

export default db;