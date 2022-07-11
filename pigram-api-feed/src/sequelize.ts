import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { config } from './config/config';

const USERNAME = config.username.trim()
const PASSWORD = config.password.trim()
const HOST = config.host.trim()
const DATABASE = config.database.trim()

const sequelize = new Sequelize(`postgres://${USERNAME}:${PASSWORD}@${HOST}/${DATABASE}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

export default sequelize;
// export const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   {
//     'host': config.host,
//     'dialect': config.dialect as Dialect,
//     'storage': ':memory:',
//     'port': 5432
//   });