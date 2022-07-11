import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { config } from './config/config';

export const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}/${config.database}`)
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