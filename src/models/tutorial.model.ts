import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../instances/sequelize'

const Tutorial = sequelize.define('tutorial', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    published: {type: DataTypes.BOOLEAN, defaultValue: false}

},
{
    freezeTableName: true
});

export default Tutorial;