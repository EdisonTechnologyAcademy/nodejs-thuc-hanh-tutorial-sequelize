"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../instances/sequelize"));
const Tutorial = sequelize_2.default.define('tutorial', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    published: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false }
}, {
    freezeTableName: true
});
exports.default = Tutorial;
//# sourceMappingURL=tutorial.model.js.map