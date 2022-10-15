import dbConfig from '../config/db.config';
import { Sequelize } from "sequelize";

const db_url = `postgres://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`
const sequelize = new Sequelize(db_url, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database.sqlite'
});

sequelize.sync().then(function () {
    console.log('Every thing is synced');
  });

export default sequelize;