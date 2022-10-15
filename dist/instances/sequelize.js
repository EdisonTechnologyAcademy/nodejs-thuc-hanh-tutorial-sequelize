"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db.config"));
const sequelize_1 = require("sequelize");
const db_url = `postgres://${db_config_1.default.USER}:${db_config_1.default.PASSWORD}@${db_config_1.default.HOST}:${db_config_1.default.PORT}/${db_config_1.default.DB}`;
const sequelize = new sequelize_1.Sequelize(db_url, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database.sqlite'
});
sequelize.sync().then(function () {
    console.log('Every thing is synced');
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map