import {Sequelize} from 'sequelize';

const database = 'hospital';
const user = 'root';
const password = '';
const host = 'localhost';

export const db = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: console.log,
});