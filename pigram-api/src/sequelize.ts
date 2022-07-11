import { Sequelize } from 'sequelize-typescript';
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